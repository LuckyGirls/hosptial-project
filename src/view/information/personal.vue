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
						<el-button type="text" class="editor" @click="dialogTableVisible = true">
							<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
							编辑
						</el-button>
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
						<span class="left">
							<span>擅长疾病：</span>
							<span class="change-text">{{ personal.job }}</span>
						</span>
					</div>
					<div class="title-content">
						<span class="left">
							<span>个人介绍：</span>
							<span class="change-text">{{ personal.job }}</span>
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
		top: -400px;
		left: 130px;
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
		width: 700px;
		height: 100%;
	}
	.personal .content-right .special{
		margin-top: 15px;
	}
	.personal .content-right .personal-info .title{
		color: #666;
		font-size: 18px;
		line-height: 40px;
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
		line-height: 40px;
		border:0.5px solid #f1f1f1; 
	}
	.personal .content-right .title-content .left{
		display: inline-block;
		width: 40%;
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
					name:'刘医生',
					sex:'女',
					age:'46',
					subordinate:'内科',
					job:'-',
					phone:'-',
					email:'-',
					ptype:'普通门诊', //挂号类型
					visitSubordinate:'内科,儿内科'
				},
				loginForm:store.state.userInfo
			}
		}
	}
</script>