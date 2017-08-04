<template>
	<div class="app">
		<!-- 过滤栏 组件-->
		<div>
		    <p>当前位置：排班</p>
		    <!-- 本周(按钮) -->	    
	  		<div class="block">
		  		  <button class="el-icon-arrow-left btn"></button>
		  		  <span class="week" v-text="weekText"></span>
		  		  <button class="el-icon-arrow-right btn"></button>
	  		</div>

	  		<!-- 日期 -->
	  		<div class="block">
	  		      <el-date-picker v-model="value1" type="date" placeholder="选择日期" :picker-options="pickerOptions0"></el-date-picker>
	  		</div>

			<!-- 科室 -->
			<div class="block block_small">
	  		    <el-select v-model="value" placeholder="所有科室">
		  		      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
		  		      </el-option>
	  		  	</el-select>
	  		</div>
	  		  
	  	    <!-- 类型 -->
	  	    <div class="block block_small">
	  		    <el-select v-model="value" placeholder="所有类型">
		  		      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
		  		      </el-option>
	  		  </el-select>
	  		</div>
	  		  
	  	    <!-- 所有人 -->
	  	    <div class="block block_small">
	  		    <el-select v-model="value" placeholder="所有人">
		  		      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
		  		      </el-option>
	  		  </el-select>
	  		</div> 	

	  		<!-- 复选框(只看我的排班)-->
	  		<div class="block block1">
	  			<el-checkbox v-model="checked">只看我的排班</el-checkbox>
	  		</div> 
		</div>
  		<!-- 表单 组件-->
  		<div class="table1">
  			<table border="1" cellspacing="0">
					<tr>					
						<td v-for = "(item,index) in weeks">
							{{ item.value }}
							<br>
							{{ month }}-{{ day+index }}
						</td>
					</tr>
					<tr class="td_65px">
						<td v-for="item in items">
							{{ item.text }}
						</td>
					</tr>
			</table>
			<!-- 底部三个按钮 -->
	  		<div class="btns">
		  		<router-link to ="/home/arrange/new_add_work">
		  			<el-button class="btn_add btn_foot">
		  				新增排班
		  			</el-button>
		  		</router-link>
	  			<el-button class="btns_edit btn_foot">编辑排班</el-button>
	  			<el-button class="btn_delete btn_foot">删除排班</el-button>
	  		</div>  		
  		</div>			
		<router-view></router-view>
	</div>
</template>
<style type="text/css">
	.app p
	{
	  color: #c2c2c2;
	  font-size: 14px;
	}
	.app .btn
	{
		border-radius: 100%;
		background: #ffffff;
		width: 30px;
		height: 30px;
		box-shadow: 1px 1px 5px #888888;
		border: #ebebeb;
		color: #b4b4b4;
		margin-left: 16px;
		float: left;
	}
	.app .week
	{
		background: #ffffff;
		color: #a1a1a3;
		width: 100px;
		height: 30px;
		display: block;
		padding-top: 5px;
		text-align: center;
		float: left;
		margin-left: 16px;
		margin-top: -3px;
	}
	.app .block
	{
		float: left;
		margin-left: 1%;
	}
	.app .block1
	{
		margin-top: 6px;
		padding-left: 20px;
	}
	.app .block_small
	{
		width: 120px;
	}
	.app .table1
	{
		width: 941px;
		height: 500px;
		position: absolute;
		margin: 57px 26px;
		background: #ffffff;
	}
	.app table
	{
		clear: left;
		border-color:rgba(255,255,255,.5);
		background: #ffffff;
		width: 850px;
		margin: 27px 48px;	

	}
	.app table
	{
		text-align: center;
	}
	.app .td_65px
	{
		height: 300px;
		opacity: .7;		
	}
	.app .btns
	{
		margin-left:35%;		
	}
	.app .btn_foot
	{
		margin-left: 18px;
		border: none;
		width: 80px;
		height: 30px;
		background: #f4f4f4;
	}
	.app .btn_add
	{
		background: green;
		color: #ffffff;
	}
</style>
<script>
	var myDate = new Date();
  	export default {
	    data () {
	     	 return {
	     	 	weekText:"本周",
	     	    pickerOptions0: {
	     	        disabledDate(time) {
	     	            return time.getTime() < Date.now() - 8.64e7;
	     	            }
	     	        },
	     	 	value1: Date.now(),
	     	 	month:myDate.getMonth() + 1,
	     	 	day:myDate.getDate(),
	     	 	// 所有科室
	     	 	options: [{
	     	 	          value: '选项1',
	     	 	          label: '小儿科'
	     	 	        }, {
	     	 	          value: '选项2',
	     	 	          label: '眼睛科'
	     	 	        }, {
	     	 	          value: '选项3',
	     	 	          label: '口腔科'
	     	 	        }, {
	     	 	          value: '选项4',
	     	 	          label: '牙科'
	     	 	        }, {
	     	 	          value: '选项5',
	     	 	          label: '妇科'
	     	 	        }],
	     	 	        value: '',
	     	 	//复选框
	     	 	checked: true,
	     	 	// 一个星期
	     	 	weeks:
	     	 	[
	     	 		{ value:"今天" ,time:this.value1},
	     	 		{ value:"明天" ,time:this.value1},
	     	 		{ value:"周二" ,time:this.value1},
	     	 		{ value:"周三" ,time:this.value1},
	     	 		{ value:"周四" ,time:this.value1},
	     	 		{ value:"周五" ,time:this.value1},
	     	 		{ value:"周六" ,time:this.value1}
	     	 	],
	     	 	//7个休息
	     	 	items:
	     	 	[
	     	 		{ text:"休息" },
	     	 		{ text:"休息" },
	     	 		{ text:"休息" },
	     	 		{ text:"休息" },
	     	 		{ text:"休息" },
	     	 		{ text:"休息" },
	     	 		{ text:"休息" }
	     	 	]


	     	}
	    },
	    methods:{}
	}
</script>