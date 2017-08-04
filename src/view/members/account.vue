<template>
  <div class="smallproject" >
  <!-- <br> -->
  <p>当前位置：{{msg}}</p>
  <br>

  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="账户号">
      <el-input v-model="formInline.account" placeholder="请输入"></el-input>
    </el-form-item>
    <el-form-item label="会员类型">
      <el-select v-model="formInline.region" placeholder="请选择">
        <el-option label="黄金会员" value="黄金会员"></el-option>
        <el-option label="普通会员" value="普通会员"></el-option>
        <el-option label="vip会员" value="vip会员"></el-option>
      </el-select>
    </el-form-item>
    
    <el-form-item label="账户创建人">
      <el-input v-model="formInline.user" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="success" class="el-icon-search"@click="onSubmit"></el-button>
    </el-form-item> 
  </el-form>
  <!-- 表格内容 -->
  <div class="content">
  <el-table  :data="tableData"  style="width: 100%" >
    <el-table-column  prop="account"label="会员账户号"  width="110">
    </el-table-column>
    <el-table-column  prop="style" label="会员账户类型"  width="150"></el-table-column>
    <el-table-column  prop="name" label="账户创建人"  width="110"></el-table-column>
    <el-table-column  prop="share" label="账户共享人"  width="130"></el-table-column>
    <el-table-column  prop="price" label="账户余额（元）"  width="150"></el-table-column>
    <el-table-column  prop="deadline" label="账户有效期至"  width="130"></el-table-column>

    <el-table-column label="操作">
          <template scope="scope">
           <!--  <el-button size="small"  @click="handleEdit(scope.$index, scope.row)"> 编辑</el-button> -->
            <el-button size="small" type="success" @click="accountPay(scope.$index, scope.row)"> 账户充值</el-button>
            <el-button size="small" type="success" @click="styleChange(scope.$index, scope.row)"> 类型变更</el-button>
            <el-button size="small" type="success" @click="familyShare(scope.$index, scope.row)"> 家人共享</el-button>
            <el-button size="small" type="danger"  @click="handleDelete(scope.$index, scope.row)">删除</el-button> 
          </template>
        </el-table-column>
      </el-table>
  </el-table>    
  
  </div>
  <!-- 点击账户充值出现的弹窗 -->
  <el-dialog title="账户首充登记" v-model="dialogFormVisible_moneypay" size="tiny" >
    <el-form ref="form" :model="form" label-width="80px">
      <i class="fa fa-user-circle-o fa-2x" aria-hidden="true"></i> {{form.name}}
      <p></p>
      <el-form-item label="充值金额">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
     <!--  <el-form-item label="项目类型">
        <el-input v-model="form.style"></el-input>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="单位">
        <el-input v-model="form.company"></el-input>
      </el-form-item>
      <el-form-item label="单价">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="执行科室">
        <el-input v-model="form.department"></el-input>
      </el-form-item>
      <el-form-item label="启用状态">
      <el-select v-model="form.usestate" placeholder="请选择">
        <el-option label="ture" value="ture"></el-option>
        <el-option label="false" value="false"></el-option>
      </el-select>
      </el-form-item> -->
      <el-form-item class="center">
        <el-button type="primary" @click="handleSave" :loading="editLoading">修改</el-button>
        <el-button @click="dialogFormVisible_moneypay = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>  
  <!-- 点击添加项目出现的弹窗 -->
  <!-- <el-dialog title="添加项目信息" v-model="dialogFormVisibleadd" size="tiny">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="项目类型">
        <el-input v-model="form.style"></el-input>
      </el-form-item>
      <el-form-item label="项目名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="单位">
        <el-input v-model="form.company"></el-input>
      </el-form-item>
      <el-form-item label="单价">
        <el-input v-model="form.price"></el-input>
      </el-form-item>
      <el-form-item label="执行科室">
        <el-input v-model="form.department"></el-input>
      </el-form-item>
      <el-form-item label="启用状态">
        <el-input v-model="form.usestate"></el-input>
      </el-form-item>
      <el-form-item class="center">
        <el-button type="primary" @click="handleSaveadd" :loading="editLoading">修改</el-button>
        <el-button @click="dialogFormVisibleadd = false">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>   -->
  <!-- 分页 -->
  <div class="block">
     <el-pagination
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       :current-page="currentPage1"
       :page-sizes="[10, 20, 30, 40]"
       :page-size="100"
       layout="total, sizes, prev, pager, next, jumper"
       :total="tableData.length">
     </el-pagination>
   </div>
   </div>
   </div>
</template>
<script >

export default {
  name: 'smallproject',
  data () {
    return {
      msg: '会员>会员账号',
      dialogFormVisible_moneypay:false,
      dialogFormVisibleadd:false,
      editLoading:false,//是否显示修改状态
      currentPage1: 5,
      activeIndex: '1',
      formInline: {
         user: '',
         region: '',
         account:'',
      },
       form: {
          account:'',
          style: '',
          name: '',
          share:'',
          price:'',
          deadline:'',
        },
      tableData:[
                  {
                      account:'440982',
                      style: '黄金会员',
                      name: '高丽莉',
                      share:'marry',
                      price:'77',
                      deadline:'2017-9-1',
                  },
                   {
                      account:'4409821',
                      style: '普通会员',
                      name: '黄慧慧',
                      share:'晓敏，小红',
                      price:'85',
                      deadline:'2017-9-2',
                  },
                   {
                      account:'440987',
                      style: '黄金会员',
                      name: '黄小芬',
                      share:'',
                      price:'5622',
                      deadline:'2017-9-7',
                  },
                   {
                      account:'440952',
                      style: '普通会员',
                      name: '设计师',
                      share:'子豪，哈克',
                      price:'85',
                      deadline:'2017-8-1',
                  },
                   {
                      account:'440989',
                      style: '黄金会员',
                      name: '王子文',
                      share:'',
                      price:'28',
                      deadline:'2017-9-1',
                  },
                ]
      }
    },
  
  methods: {
     onSubmit() {
       this.$message('模拟数据，这个方法并不管用哦~');
     },

     // handleEdit (index, row) {
     //   this.dialogFormVisible = true;
     //   this.form = Object.assign({}, row);
     //   this.table_index = index;
     // },
     accountPay (index, row) {
       this.dialogFormVisible_moneypay = true;
       this.form = Object.assign({}, row);
       this.table_index = index;
     },
     handleSave () {
       this.$confirm('确认提交吗？', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         cancelButtonClass: 'cancel'
       }).then(() => {
        this.editLoading = true;//显示正在修改，圆圈跑起来
        this.tableData[this.table_index] = this.form;
        this.tableData.splice(this.table_index, 1, this.form);
        this.$message({
           message: "操作成功！",
           type: 'success'
         });
         this.editLoading = false;
         this.dialogFormVisible = false;
       })
     },

     handleSaveadd () {

       this.$confirm('确认提交吗？', '提示', {
         confirmButtonText: '确定',
         cancelButtonText: '取消',
         cancelButtonClass: 'cancel'
       }).then(() => {
        //this.editLoading = true;//显示正在修改，圆圈跑起来
        let vm=this;
        vm.tableData.push(vm.form);
        this.$message({
           message: "操作成功！",
           type: 'success'
        });
        this.dialogFormVisibleadd = false;
       });
     },

     handleDelete (index, row) {
       this.tableData.splice(index, 1);
       this.$message({
         message: "操作成功！",
         type: 'success'
       });
     },

     handleCreate(){    
      this.initform();// //每次都初始化
      this.dialogFormVisibleadd = true; 
     },

     //每次都初始化为空
     initform(){
      this.form={
          style: '',
          name: '',
          company:'',
          price:'',
          department:'',
          usestate:'',
        }
     },

      handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      },

      handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      },
      handleSelect(key, keyPath) {
      console.log(key, keyPath);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.smallproject{
  padding: 20px;
}

.smallproject .content{
 /* width: 95%;*/
 /* height: 400px;*/
  background: white;
 /* margin: 0 auto;*/
}
.smallproject .block{
  text-align: center;
}
.smallproject .center{
  text-align: center;
}
.el-dialog__header{
  background: #f6f6f6;
  padding-bottom: 10px;
}




</style>
