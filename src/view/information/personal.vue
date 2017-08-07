<template>
	<div class="personal">
		<div class="breadcrumbBar">
			<span class="text">当前位置：</span>
			<el-breadcrumb separator="/" class="navBar">
			  	<el-breadcrumb-item :to="{ path: '/home/personal' }">个人信息</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="personal-content">
			<div class="content-left">
				<i class="Img">
					<img src="../../assets/logo.png">
				</i>
				<p>{{ personal.name }}</p>
			</div>
			<div class="content-right">
				<div class="personal-info">
					<div class="title">
						<span>个人信息</span>
						<el-button type="text" class="editor" @click="dialogFormVisible = true">
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
							编辑
						</el-button>
						<!-- 对话框内容 -->
						<el-dialog title="编辑个人信息" :visible.sync="dialogFormVisible">
						  	<el-form :model="form">
						   		<el-form-item label="用户类型:" :label-width="formLabelWidth">
						      		医生
						    	</el-form-item>
						    	<el-form-item label="所属科室:" :label-width="formLabelWidth">
						      		<el-select v-model="form.subordinate" placeholder="请选择所属科室" style="width:220px">
								        <el-option label="儿科" value="儿科"></el-option>
								        <el-option label="外科" value="外科"></el-option>
								        <el-option label="内科" value="内科"></el-option>
						      		</el-select>
						    	</el-form-item>
						    	<el-form-item label="姓名:" :label-width="formLabelWidth">
						      		<el-input v-model="form.name" auto-complete="off" style="width:220px"></el-input>
						    	</el-form-item>
						    	<el-form-item label="" :label-width="formLabelWidth">
						      		<el-radio class="radio" v-model="form.sex" label="男">男</el-radio>
  									<el-radio class="radio" v-model="form.sex" label="女">女</el-radio>
						    	</el-form-item>
						    	<el-form-item label="出生日期:" :label-width="formLabelWidth">
						      		<el-date-picker v-model="form.date" type="date"  placeholder="" :picker-options="pickerOptions0" style="width:220px">
						      		</el-date-picker>
						    	</el-form-item>
						    	<el-form-item label="电话:" :label-width="formLabelWidth">
						      		<el-input v-model="form.phone" auto-complete="off" style="width:220px"></el-input>
						    	</el-form-item>
								<el-form-item label="职称:" :label-width="formLabelWidth">
						      		<el-input v-model="form.job" auto-complete="off" style="width:220px"></el-input>
						    	</el-form-item>
						    	<el-form-item label="备注:" :label-width="formLabelWidth">
						      		<el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="form.note" style="width:350px">
						      		</el-input>
						    	</el-form-item>
						  	</el-form>
						  <div slot="footer" class="dialog-footer">
						    <el-button @click="dialogFormVisible = false">取 消</el-button>
						    <el-button type="primary" @click="handleDialogForm">确 定</el-button>
						  </div>
						</el-dialog>


					</div>
					<div class="title-content">
						<span class="left">
							<span>姓名：</span>
							<span class="change-text">{{ personal.name }}</span>
						</span>
						<span class="left">
							<span>性别：</span>
							<span class="change-text">{{ personal.sex }}</span>
						</span>
					</div>
					<div class="title-content">
						<span class="left">
							<span>年龄：</span>
							<span class="change-text">{{ personal.age }}</span>
						</span>
						<span class="left">
							<span>所属科室：</span>
							<span class="change-text">{{ personal.subordinate }}</span>
						</span>
					</div>
					<div class="title-content">
						<span class="left">
							<span>职称：</span>
							<span class="change-text">{{ personal.job }}</span>
						</span>
						<span class="left">
							<span>电话：</span>
							<span class="change-text">{{ personal.phone }}</span>
						</span>
					</div>
				</div>
				<div class="personal-info special">
					<div class="title">
						<span>账号信息</span>
					</div>
					<div class="title-content">
						<span class="left">
							<span>登录账号：</span>
							<span class="change-text">{{ loginForm.userName }}</span>
						</span>	
					</div>
					<div class="title-content">
						<span class="left">
							<span>关联邮箱：</span>
							<span class="change-text">{{ personal.email }}</span>
						</span>
						<el-button type="text" class="editor editor1" @click="dialogTableVisible = true">
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
							编辑
						</el-button>
					</div>	
				</div>
				<div class="personal-info special">
					<div class="title">
						<span>医生信息</span>
						<el-button type="text" class="editor" @click="dialogTableVisible = true">
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
							编辑
						</el-button>
					</div>
					<div class="title-content">
						<span class="left">
							<span>挂号类型：</span>
							<span class="change-text">{{ personal.ptype }}</span>
						</span>
					</div>
					<div class="title-content">
						<span class="left">
							<span>出诊科室：</span>
							<span class="change-text">{{ personal.visitSubordinate }}</span>
						</span>
					</div>
					<div class="title-content">
						<span class="left1">
							<span>擅长疾病：</span>
							<span class="change-text">{{ personal.disease }}</span>
						</span>
					</div>
					<div class="title-content">
						<span class="left1">
							<span>个人介绍：</span>
							<span class="change-text">{{ personal.introduce }}</span>
						</span>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<style scoped>
	.personal .breadcrumbBar{
		line-height: 50px;
		margin-left: 15px;
		font-size: 15px;
		color: #AEAEAE;
	}
	.personal .navBar{
		display: inline-block;	
		color: #f1f1f1;
	}
	.personal .content-left,.personal .content-right{
		display: inline-block;
		text-align: left;
	}
	.personal .content-left{
		width: 350px;
		height: 100%;
		position: relative;
		top: -500px;
		left: 110px;
	}
	.personal .content-left img{
		width: 70px;
		height: 70px;
		vertical-align: middle;  
	}
	.personal .content-left p{
		padding-left: 14px;
	}
	.personal .content-right{
		color: #AEAEAE;
	}
	.personal .content-right .personal-info{
		border: 1px solid #f1f1f1;
		border-radius: 10px;
		background: #fff;
		width: 750px;
		height: 100%;
	}
	.personal .content-right .special{
		margin-top: 15px;
	}
	.personal .content-right .personal-info .title{
		color: #666;
		font-size: 18px;
		line-height: 50px;
		border-bottom: 1px solid #f1f1f1;
	}
	.personal .content-right .personal-info .title span{
		width: 50%;
		text-align: left;
		padding-left: 25px;
	}
	.personal .content-right .personal-info .title .editor{
		width: 50%;
		text-align: right;
		margin-left: 200px;
		font-size: 18px;
	}
	.personal .content-right .title-content{
		line-height: 50px;
		border:0.5px solid #f1f1f1; 
	}
	.personal .content-right .title-content .left{
		display: inline-block;
		width: 40%;
	}
	.personal .content-right .title-content .left1{
		width: 100%;
		display: inline-block;
	}
	.personal .content-right .title-content span:first-child{
		padding-left: 13px;
	}
	.personal .content-right .change-text{
		color: #666;
	}
	.personal .editor1{
		font-size: 18px;
		margin-left: 295px;
	}

</style>
<script>
	import store from '../../store';
	export default { 
		data() {
			return{
				personal:{
					name:'',
					sex:'',
					age:'',
					subordinate:'',
					job:'',
					phone:'',
					email:'',
					ptype:'',
					visitSubordinate:'',
					disease:'',
					introduce:''
				},
				loginForm:store.state.userInfo,


				dialogFormVisible: false,
				form: {
				    name: '',
			        subordinate: '',
			        sex:'男',
			        date:'',
			        phone:'',
			        job:'',
			        note:''
				},
				formLabelWidth: '120px'
			}
		},
		mounted:function(){
			this.$http.get('../../../static/personal.json').then(function(response){
				console.log("response的值",response);
				this.personal=response.data.data;
				console.log("personal的值",this.personal);
			});
		},
		methods:{
			handleDialogForm:function(){
				this.dialogFormVisible = false;
				this.personal=this.form;
			}
			
		}
	}
</script>