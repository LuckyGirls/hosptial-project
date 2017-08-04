<template >
	<div class="Visdoctor">
		<div class="h-content">
			<div class="content-right"  >
				<div class="content-right-top" style="padding-top: 0.75%">	
			            <el-row >
							  <el-col :span="2"><div class="grid-content bg-purple" style="margin-left:2%;">
							  	<p class="p1-name" style="padding-top: 5%;">刘医生</p>
							  </div>
							  </el-col>
							  <el-col :span="2"><div class="grid-content bg-purple-light" >
							  	  <el-radio-button >出诊</el-radio-button>
							  </div></el-col>
							  <el-col :span="2"><div class="grid-content bg-purple" style="margin-left: -21%;">
							  	<el-time-picker
									is-range
									v-model="value3"
									placeholder="选择时间范围">
									</el-time-picker>
							  </div>
							  </el-col>
								 
						</el-row>							  									
				</div>
				<div class="content-right-bottom" style="padding-top: 0">
				<template>
					  <el-table
					    :data="tableData"
					    border
					    style="width: 100%;">
					    <el-table-column
					      label="时间"
					      width="180">
					      <template scope="scope">
					        <el-icon name="time"></el-icon>
					        <span style="margin-left: 10px">{{ scope.row.date }}</span>
					      </template>
					    </el-table-column>
					    <el-table-column
					      label="预约人"
					      width="180">
					      <template scope="scope">
					       
<!-- 					      <p>姓名: {{ scope.row.name }}</p>
					          <p>手机号码: {{ scope.row.phone }}</p> -->
					          <div slot="reference" class="name-wrapper">
					           <!--  <el-tag>{{ scope.row.name }}</el-tag> -->
					            <p>姓名: {{ scope.row.name }}</p>
					            <p class="phone-s">手机号码: {{ scope.row.phone }}</p>
					          </div>
					       
					      </template>
					    </el-table-column>
					    <el-table-column label="状态更改" style="text-aligin:left;">
					      <template scope="scope">
					            <div slot="reference" class="name-span">
					       		<span><el-button type="text"><i class="el-icon-time"></i>  签到</el-button></span>
						  		<span><el-button type="text"><i class="el-icon-edit"></i>  测量</el-button></span>
						  		<span>
						  		<router-link to="/home/Vdetails">
						  		<el-button type="text"><i class="el-icon-document"></i>  详情</el-button>
						  		</router-link>
						  		</span>
						  		<span><el-button type="text"><i class="el-icon-close"></i>  取消</el-button></span>
						  		</div>
					      </template>
					    </el-table-column>
					  </el-table>
				</template>
				</div>
			</div>
		</div>
	</div>
		
</template>
 <!--  <sapn class="el-icon-time"></span> -->
<script>
 
   import "../../assets/css/style1.css"
	//npm i element-ui -S 等同于
	//npm install element-ui --save
	export default {
	  name: 'home',
	  data: function () {
	    return {
	    	value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
	    	formInline: {
                user: '',
                region: ''
            },
            
		    
            tableData: [{
		         date: '09:00~10.00',
	             name: '李春华 ', 
	    		 phone: '13012312311',
	    	},
	    		 
            {
	           date: '10:00~11.00',
	            name: '傻子', 
	    		phone: '13012312311',
        	},         
	        {
		        date: '11:00~12.00',
	            name: '李春华 ', 
	    		phone: '13012312311',
	        }]          
	    }
	  },
	
	  methods:{
	  	getData:function(){
	  		//这里可以写ajax方法
	  		//       let me = this;
				

					// Vue.http.get('testData.json').then(function(response){

					// 	console.log(response)
					// 	console.log("这是我们需要的json数据",response.data)
					// 	// this.formData = response.data; //this.formData拿不到
					// 	me.formData = response.data;

					// }, function(response){
					// 	alert("请求失败了")
					// })
	  	}
	  }
	}
</script>

<style>
	body{
		/*background-color: #333;*/
		background-color: #F6F6F6;
	}
	.Visdoctor .name-span span{
		margin-left: 25px;
	}
	.Visdoctor .name-wrapper{
		text-align: left;
	}
	.Visdoctor .phone-s{
		width: 175px;
	}
</style>