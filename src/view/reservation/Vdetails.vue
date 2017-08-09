<template>
  <div class="Vdetails">   

    <div class="content" style="height:700px;">
        <div class="content-left" style="height:100%;float:left;width:30%;margin-left:2%">
            <div class="content-left-top" style="height:40%;background-color:#fff;">
                <div class="img-1" style="padding-top:3%; padding-left: 33%;">
                <img src="../../assets/29.png" class="bells" > 
                <p style="padding-left: 6%;">李春华</p>
                </div>
               <table border="0" cellspacing="0" cellpadding="0" style="width:100%;margin-top:6%;">
              　<tr style="height:50px;">
              　<td>姓名: <span>女</span></td>
              　<td style="border-left:2px solid #F6F6F6;">年龄: <span>30</span></td>
              　</tr>
              　<tr style="height:50px;">
              　<td colspan="2">电话:<span>13012345678</span></td>
              　</tr>
              </table>
            </div>
            <div class="content-left-bottom" style="height:55%;background-color:#fff;margin-top:5%;">
                <table border="0" cellspacing="0" cellpadding="0" style="width:100%;margin-top:6%;text-align: left;">

                <tr style="height:50px;">
              　<td>最新测量信息: <span style="margin-left: 45%;"  @click="dialogFormVisible_1 = true"><el-button type="text"><i class="el-icon-document"></i>  编辑</el-button>

              </span></td> 
                 <el-dialog title="诊前测量" :visible.sync="dialogFormVisible_1">
                        <el-form :model="form"  label-width="80px">

                          <el-form-item label="患者:"  class="la-span">
                              <span v-model="value1">{{form.name}} </span>
                              <span v-model="value1">{{form.date}} </span>
                              <span v-model="value1">{{form.time}} </span>
                              <span v-model="value1">{{form.doctor}} </span>
                          </el-form-item>
                       
                          <el-form-item label="身高:">
                              <el-input v-model="form.height"></el-input>
                          </el-form-item>
                          <el-form-item label="体重:">
                              <el-input v-model="form.weight"></el-input>
                          </el-form-item>
                          <el-form-item label="体温:">
                              <el-input v-model="form.temper"></el-input>
                          </el-form-item>
                          <el-form-item label="血压:">
                              <el-input v-model="form.pressure"></el-input>
                          </el-form-item>
                          <el-form-item label="心率:">
                              <el-input v-model="form.rate"></el-input>
                          </el-form-item>


                        </el-form>
                        <div slot="footer" class="dialog-footer" style="text-align:center;">
                          <el-button @click="dialogFormVisible_1 = false">取 消</el-button>
                          <el-button type="success" @click="submit()">提交</el-button>
                      </div>
                  </el-dialog>           
              　</tr>

              　<tr style="height:50px;" v-model="formData">
              　<td>身高: <span v-model="formData.height">{{ formData.height }}</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>体重: <span v-model="formData.weight">{{ formData.weight }}</span></td>            
              　</tr>
               
                <tr style="height:50px;">
              　<td>体温: <span v-model="formData.temper">{{ formData.temper }}</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>血压: <span v-model="formData.pressure">{{ formData.pressure }}</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>心率: <span v-model="formData.rate">{{ formData.rate }}</span></td>            
              　</tr>

              </table>
            </div>
        </div>

        <div class="content-right" style="height:100%;float:right;width:65%;margin-left:3%;">
            <div class="content-right-top" style="height:43%;background-color:#fff;">
                
                <table border="0" cellspacing="0" cellpadding="0" style="width:100%;text-align: left;" >

                <tr style="height:50px;" v-model="formData1">
              　<td style="font-weight: bold;">预约信息</td>            
              　</tr>

              　<tr style="height:50px;">
              　<td>订单日期: 
                <span v-model="form.value_res">
                  {{new Date(form.value_res).getFullYear()}}-{{new Date(form.value_res).getMonth()+1}}-{{new Date(form.value_res).getDate()}} 
                </span>
                </td>            
              　</tr>

                <tr style="height:50px;">
              　<td>订单生成时间: <span v-model="form.time">{{form.time}}</span></td>            
              　</tr>
               
                <tr style="height:50px;">
              　<td>预约类型: <span v-model="form.doc_subject">{{form.doc_subject}}</span></td>            
              　</tr>



                <tr style="height:50px;">
              　<td>心率: <span v-model="formData.rate">{{form.rate}}</span><span style="margin-left: 80%;"><el-button type="text"><i class="el-icon-document"></i>  查看报备</el-button></span></td>            
              　</tr>

              </table>
            </div>
            <div class="content-right-bottom" style="height:37%;background-color:#fff;margin-top:3%;">
                
                <table border="0" cellspacing="0" cellpadding="0" style="width:100%;text-align: left;">

                <tr style="height:50px;" v-model="formData2">
              　<td style="font-weight: bold;">问诊信息</td>            
              　</tr>

              　<tr style="height:50px;">
              　<td>就诊时间: <span v-model="form.time">{{form.time}}</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>就诊医生: <span v-model="form.doctor">{{form.doctor}}</span></td>            
              　</tr>
               
                <tr style="height:50px;">
              　<td>主治: <span v-model="form.doc_subject">{{form.doc_subject}}</span></td>            
              　</tr>
              </table>
            </div>
            <div class="content-right-bottom2" style="margin-top: 3%">
                <span class="wrapper">
                  <el-button type="success" @click="dialogFormVisible = true">修改就诊时间</el-button>
              
                      <el-dialog title="修改预约时间" :visible.sync="dialogFormVisible">
                        <el-form :model="form">

                          <el-form-item label="患者:"  class="la-span">
                              <span v-model="form.name">{{form.name}} </span>
                        <!--       <span v-model="form.value_res">{{new Date(form.value_res).getFullYear()}}</span>
                              <span v-model="form.value_res">-{{new Date(form.value_res).getMonth()+1}}</span>
 -->                          <span v-model="form.value_res">
                                  {{new Date(form.value_res).getFullYear()}}-{{new Date(form.value_res).getMonth()+1}}-{{new Date(form.value_res).getDate()}} 
                              </span>
                              <span v-model="form.time">{{form.time}} </span>
                              <span v-model="form.doctor">{{form.doctor}} </span>
                          </el-form-item>
                          <el-form-item label="修改预约时间：" >

                              <el-date-picker
                                v-model="form.value_res"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions0">                              
                              </el-date-picker>

                              <el-time-select
                                v-model="form.time"
                                :picker-options="{
                                  start: '08:30',
                                  step: '00:15',
                                  end: '18:30'
                                }"
                                placeholder="选择时间">
                              </el-time-select>
                            

                          </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer" style="text-align:center;">
                          <el-button @click="dialogFormVisible = false">取 消</el-button>
                          <el-button type="success" @click="submit1()">提交</el-button>
                        </div>
                      </el-dialog>

                  <el-button type="success" @click="edit_dialogFormVisible = true">修改就诊医生 </el-button>
                      <el-dialog title="修改预约医生" :visible.sync="edit_dialogFormVisible">
                        <el-form :model="form">

                          <el-form-item label="患者:"  class="la-span">
                              <span v-model="value1">{{form.name}} </span>
                              <span v-model="form.value_res">
                                {{new Date(form.value_res).getFullYear()}}-{{new Date(form.value_res).getMonth()+1}}-{{new Date(form.value_res).getDate()}} 
                              </span>
                              <span v-model="value1">{{form.time}} </span>
                              <span v-model="value1">{{form.doctor}} </span>
                              <span v-model="value1">{{form.doc_subject}} </span>
                          </el-form-item>

                          <el-form-item label="修改预约医生：" >
                              <el-select v-model="form.doc_subject" placeholder="儿科">
                                  <el-option label="肠胃科" value="肠胃科"></el-option>
                                  <el-option label="内科" value="内科"></el-option>
                                  <el-option label="外科" value="外科"></el-option>
                              </el-select>
                              <el-select v-model="form.doctor" placeholder="请选择">
                                  <el-option label="王医生" value="预约王医生"></el-option>
                                  <el-option label="刘医生" value="预约刘医生"></el-option>
                                  <el-option label="李医生" value="预约李医生"></el-option>
                              </el-select>
                          </el-form-item>
                      
                          <el-form-item label="修改预约时间：" >
                              <el-date-picker
                                v-model="form.value_res"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions0">                              
                              </el-date-picker>

                              <el-time-select
                                v-model="form.time"
                                :picker-options="{
                                start: '08:30',
                                step: '00:15',
                                end: '18:30'
                                }"
                                placeholder="选择时间">
                              </el-time-select>

                          </el-form-item>



                        </el-form>
                        <div slot="footer" class="dialog-footer" style="text-align:center;">
                          <el-button @click="edit_dialogFormVisible = false">取 消</el-button>
                          <el-button type="success" @click="submit2()">提交</el-button>
                        </div>
                      </el-dialog>

                 
                  <el-button >取消预约</el-button>
                 
                </span>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
// import Home from '@/view/home';
export default {
  name: 'Vdetails',
  data: function () {
    return {
       
        // dialogTableVisible: false,
        dialogFormVisible_1:false,
        dialogFormVisible: false,
        edit_dialogFormVisible:false,

        formData: {
          
          height:'-',
          weight:'-',
          temper:'-',
          pressure:'-',
          rate:'-',
        },
        formData1:{
          value_res:'-',
          time:'-',
          doc_subject:'-',
        },
        formData2:{
      
          time:'-',
          doctor:'-',
          doc_subject:'-',
        },
        form: {
          
          name: '李春华',
          date:'2017-07-10',
          time:'9:00',
          doctor:'预约王医生',
          doc_subject:'儿科',
          height:'',
          weight:'',
          temper:'',
          pressure:'',
          rate:'',
          value_res:Date.now() ,

        },
        // formLabelWidth: '200px',
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        
        day:'',
        value1:''
        // JSON.stringify(value_res)
        // this.form.date = JSON.parse(JSON.stringify(this.value_res))         
    }
  },
    methods:{
      getData:function(){
        //这里可以写ajax方法
        //       let me = this;
        

          // Vue.http.get('testData.json').then(function(response){

          //  console.log(response)
          //  console.log("这是我们需要的json数据",response.data)
          //  // this.formData = response.data; //this.formData拿不到
          //  me.formData = response.data;

          // }, function(response){
          //  alert("请求失败了")
          // })
      },

      handleIconClick:function(ev) {
      console.log(ev);
      },
      
      submit:function(){
            // this.formData= this.form(浅拷贝)
            this.formData = JSON.parse(JSON.stringify(this.form));
            console.log("您修改后的参数为：", JSON.stringify(this.form) );
            this.dialogFormVisible_1 = false

        },
         submit1:function(){
            // this.formData= this.form(浅拷贝)
            this.formData1 = JSON.parse(JSON.stringify(this.form));
            console.log("您修改后的参数为：", JSON.stringify(this.form) );
            this.dialogFormVisible = false
        },
         submit2:function(){
            // this.formData= this.form(浅拷贝)
            this.formData2 = JSON.parse(JSON.stringify(this.form));
            console.log("您修改后的参数为：", JSON.stringify(this.form) );
            this.edit_dialogFormVisible = false
        }




        
    }

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
background-color: #F6F6F6;
}
.Vdetails .img-1{
   /* max-width: 200px;
    max-height: 200px;*/
    border-radius: 50%;
}
.Vdetails   td{   
   border-top:2px solid #F6F6F6;  
  
}  
.Vdetails  .content-left-top td{
 padding-left: 3%;
}
.Vdetails  .content-left-bottom td{
 padding-left: 3%;
}
.Vdetails  .content-right-top td{
 padding-left: 3%;
}
.Vdetails  .content-right-bottom td{
 padding-left: 3%;
}
.Vdetails .la-span span{
margin-left: 3%;
}
</style>
