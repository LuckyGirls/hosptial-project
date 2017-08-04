<template>
	<div class ="app_second">
  		<!-- 表单 -->
  		<div class="table1">

  		    <!-- 头部四个按钮 -->
	  		<div class="btns">
	  			<el-button class="btn_add btn_foot" @click="dialogFormVisible = true" >新增排班</el-button>
	  			<el-button class="btn_add btn_foot">加诊排班</el-button>
	  			<el-button class="btn_edit btn_foot">编辑排班</el-button>
	  			<el-button class="btn_delete btn_foot" @click="delete_work_content()">删除排班</el-button>
	  		</div>
			<!-- delete_work_content() -->
	  		<!-- 点击新增排班时的弹出框 -->
	  		<el-dialog title="新增排班" :visible.sync="dialogFormVisible">

	  			  <!-- 弹话框内容 -->
		  		  <el-form :model="form">


		  		  		<!-- 科室 -->
			  		    <el-form-item label="科室:" :label-width="formLabelWidth">
			  		     	 <el-select v-model="form.office[0].text" placeholder="科室" style="width:100px;">
			  		     	 	  	<el-option v-for="item in form.office" :value="item.text">
			  		     	 	    </el-option>
			  		     	 </el-select>
			  		    </el-form-item>
						

						<!-- 医生 -->
						<el-form-item label="医生:" :label-width="formLabelWidth">
			  		     	 <el-select v-model="form.doctor_selected"  style="width:100px;">
			  		     	 	  	<el-option v-for="(item,index) in form.doctor" :value="item.name">
			  		     	 	    </el-option>
			  		     	 </el-select>
			  		    </el-form-item>


			  		    <!-- 挂号类型 -->
			  		    <el-form-item label="挂号类型:" :label-width="formLabelWidth">
			  		     	 <el-select v-model="form.register[0].type"  style="width:100px;">
			  		     	 	  	<el-option v-for="item in form.register" :value="item.type">
			  		     	 	    </el-option>
			  		     	 </el-select>
			  		    </el-form-item>


			  		    <!-- 号段时长 -->
			  		    <el-form-item label="号段时长:" :label-width="formLabelWidth">
			  		     	 <el-select v-model="form.time[0].time_long"  style="width:100px;">
			  		     	 	  	<el-option v-for="item in form.time" :value="item.time_long">
			  		     	 	    </el-option>
			  		     	 </el-select>
			  		    </el-form-item>


			  		    <!-- 复选框：允许线上预约 -->
			  		    <el-form-item>
			  		     	 <el-checkbox v-model="form.checked">
					  		     	 允许线上预约(如果系统对接了线上挂号App、微信服务号等)
					  		     	 <br>
					  		     	 <i style="opacity:.7;">如果不希望医生排班对外开放只允许电话预约，则取消勾选</i>
			  		     	 </el-checkbox>
			  		    </el-form-item>


			  		    <!-- 排班时段 -->
			  		    <el-form-item label="排班时段:">

			  		    	 <!-- 日选择 -->
			  		     	 <el-date-picker v-model="form.time_selected" type="date" placeholder="选择日期" :picker-options="form.pickerOptions0"></el-date-picker>

			  		     	 <!-- 时间段选择 -->
			  		     	 <el-time-select placeholder="起始时间" v-model="form.startTime":picker-options="{
				  		     	       start: '08:30',
				  		     	       step: '00:15',
				  		     	       end: '18:30'
				  		     	     }">
			  		     	 </el-time-select>			  		     	 
			  		     	 <el-time-select placeholder="结束时间" v-model="form.endTime" :picker-options="{
				  		     	      start: '08:30',
				  		     	      step: '00:15',
				  		     	      end: '18:30',
				  		     	      minTime: form.startTime
			  		     	    	}">
			  		     	 </el-time-select>
			  		    </el-form-item>
		  		  </el-form>
					

		  		  <!-- 弹话框的低下两个按钮 -->
		  		  <div slot="footer" class="dialog-footer">
			  		    <el-button @click="dialogFormVisible = false">取 消</el-button>
			  		    <el-button type="primary" @click="add">确 定</el-button>
		  		  </div>
	  		</el-dialog>

			
	  		<!-- 表单 -->
  			<table border="1" cellspacing="0">
					<tr>					
						<td v-for = "(item,index) in weeks">
							{{ item.value }}
							<br>
							{{ month1 }}-{{ day1+index }}
						</td>
					</tr>
					<tr class="td_65px">
						<td v-for="(item,week_index) in weeks_content">
							<span v-for="(item1,todo_index) in item.todos" @click="find_index(week_index,todo_index)">
								<br>
								{{ item1.text }}
								<br>
								{{ item1.time_start }}
								{{ item1.time_end }}
							</span>
						</td>
					</tr>
			</table>

  		</div>

	</div>
</template>
<style type="text/css">
	.app_second .table1
	{
		width: 941px;
		height: 500px;
		position: absolute;
		margin: 57px 26px;
		background: #ffffff;
	}
	.app_second table
	{
		clear: left;
		border-color:rgba(255,255,255,.5);
		background: #ffffff;
		width: 850px;
		margin: 27px 48px;	

	}
	.app_second table
	{
		text-align: center;
	}
	.app_second table tr td span 
	{
		background:#cae67a;
		width:120px;
		heigth:60px;
		display:block;
	}
	.app_second .td_65px
	{
		height: auto;
		opacity: .7;		
	}
	.app_second .btns
	{
		margin-left:35%;
		margin-top: 20px;		
	}
	.app_second .btn_foot
	{
		margin-left: 18px;
		border: none;
		width: 80px;
		height: 30px;
		background: #f4f4f4;
	}
	.app_second .btn_add
	{
		background: green;
		color: #ffffff;
	}
	.app_second .btn_delete
	{
		background: #970f11;
		color: #ffffff;
	}
</style>
<script>
    var myDate1 = new Date();
  	export default {
	    data () {
	     	 return {
	     	 	weekText:"本周",
	     	    pickerOptions0: {
	     	             disabledDate(time) {
	     	               return time.getTime() < Date.now() - 8.64e7;
	     	             }
	     	           },
	     	 	month1:myDate1.getMonth() + 1,
	     	 	day1:myDate1.getDate(),
	     	 	// 所有科室
	     	 	options: [{
	     	 	          value: '选项1',
	     	 	          label: '儿科'
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
	     	 	weeks:
	     	 	[
	     	 		{ value:"今天" },
	     	 		{ value:"明天" },
	     	 		{ value:"周二" },
	     	 		{ value:"周三" },
	     	 		{ value:"周四" },
	     	 		{ value:"周五" },
	     	 		{ value:"周六" }
	     	 	],
	     	 	//7个休息
	     	 	weeks_content:
	     	 	[
					{ todos: [{text:"暂无排班" , time_start:"" , time_end:""}] },
	     	 		{ todos: [{text:"暂无排班" , time_start:"" , time_end:""}] },
	     	 		{ todos: [{text:"暂无排班" , time_start:"" , time_end:""}] },
	     	 		{ todos: [{text:"暂无排班" , time_start:"" , time_end:""}] },
	     	 		{ todos: [{text:"暂无排班" , time_start:"" , time_end:""}] },
	     	 		{ todos: [{text:"暂无排班" , time_start:"" , time_end:""}] },
	     	 		{ todos: [{text:"暂无排班" , time_start:"" , time_end:""}] }
	     	 	],
	     	 	// 拿到删除的下标
	     	 	todo_index:'',
	     	 	week_index:'',
	     	 	dialogFormVisible: false,

	     	 	form: {
	     	 		office:
	     	 		[
	     	 	        { text:"儿科"},
	     	 	        { text:"眼睛科"},
	     	 	        { text:"口腔科"},
	     	 	        { text:"牙科"},
	     	 	        { text:"妇科"}
	     	 	    ],	     	 
	     	 		doctor:
	     	 		[
	     	 	        { name:"黄医生"},
	     	 	        { name:"李医生"},
	     	 	        { name:"牛医生"},
	     	 	        { name:"张医生"},
	     	 	        { name:"高医生"}
	     	 	    ],
	     	 	    doctor_selected:"黄医生",
	     	 	    register:
	     	 		[
	     	 	        { type:"普通门诊"},
	     	 	        { type:"专家门诊"},
	     	 	        { type:"专科门诊"},
	     	 	        { type:"特需门诊"},
	     	 	        { type:"夜间门诊"}
	     	 	    ],
	     	 	    time:
	     	 		[
	     	 	        { time_long:"20分钟"},
	     	 	        { time_long:"30分钟"},
	     	 	        { time_long:"40分钟"},
	     	 	        { time_long:"50分钟"},
	     	 	        { time_long:"60分钟"}
	     	 	    ],
	     	 	    pickerOptions0: {
	     	             disabledDate(time) {
	     	               return time.getTime() < Date.now() - 8.64e7;
	     	             }
	     	           },
	     	 	    time_selected: Date.now(),
	     	 	    region: '',
	     	 	    checked: true,
	     	 	    startTime: '',
	     	 	    endTime: '',
	     	 	},

	     	 	formLabelWidth: '80px'
	     	}
	    },
	    methods:{
	    	add:function(){
	    		var vm=this;
	    		this.dialogFormVisible = false;
	    	    console.log(this.form.doctor_selected);


	    		console.log('---获取的时间', new Date(this.form.time_selected).getTime() );
	    		console.log('---获取的月份:', new Date(this.form.time_selected).getMonth() + 1 );
	    		console.log('---获取的日:', new Date(this.form.time_selected).getDate() );
	    		console.log('---当前的月:',this.month1);
	    		console.log('---当前的日:',this.day1);

	    		console.log('---开始时间:',this.form.startTime);
	    		console.log('---结束时间:',this.form.endTime);

	    		var mon=new Date(this.form.time_selected).getMonth() + 1;
	    		var day=new Date(this.form.time_selected).getDate();
	    		for(let i=0;i<7;i++){
	    			if(mon===this.month1&&day===(this.day1+i)){
	    				// 如果(text ==="休息"),pop出来
	    				if(this.weeks_content[i].todos[0].text==="暂无排班"){
	    					this.weeks_content[i].todos.pop();
	    				}
		    			
	    				var a=this.form.doctor_selected;
	    				var b=this.form.startTime;
	    				var c=this.form.endTime;
	    				this.weeks_content[i].todos.push({ text:a,time_start:b,time_end:c});
	    			}	    			
	    		}	    		
	    	},
	    	find_index:function(week_index,todo_index){
	    		console.log("拿到weeks数组下标",week_index);
	    		console.log("拿到todos数组下标",todo_index);
	    		this.week_index=week_index;
	    		this.todo_index=todo_index;
	    	},
	    	delete_work_content:function(){
	    		// week_index = week_index;
	    		// todo_index = todo_index;
	    		console.log(this.week_index,this.todo_index);
	    		this.weeks_content[this.week_index].todos.splice(this.todo_index,1);
	    		// this.weeks_content[this.week_index].todos[this.todo_index].pop();
	    		// this.list.splice(index,1);
	    		// var t = this.delete_work();
	    		// console.log(index);
	    		// console.log(this.delete_work())
	    		// var t = this.delete_work();
	    		// console.log(t);
	    			// for(let i=0;i<this.weeks_content[this.week_index].todos.length;i++)
	    			// {
	    			// 	if(this.weeks_content[this.week_index].todos[i]==="")
	    			// 	{
	    		 // 				this.weeks_content[this.week_index].todos.push({ text:"暂无排班",time_start:"",time_end:""});
	    		 // 		}
	    			// }
	    			if(this.weeks_content[this.week_index].todos.length <= 0)
	    			{
	    				this.weeks_content[this.week_index].todos.push({ text:"暂无排班",time_start:"",time_end:""});
	    			}	    			
	    		},
	    		// open2() {
	    		//         this.$confirm('你是否确认删除这条排班?', '提示', {
	    		//           confirmButtonText: '确定',
	    		//           cancelButtonText: '取消',
	    		//           type: 'warning'
	    		//         }).then(() => {
	    		//           this.$message({
	    		//             type: 'success',
	    		//             message: '删除成功!'
	    		//           });
	    		//         }).catch(() => {
	    		//           this.$message({
	    		//             type: 'info',
	    		//             message: '已取消删除'
	    		//           });          
	    		//         });
	    		//       }

	    }
	}
	 
</script>