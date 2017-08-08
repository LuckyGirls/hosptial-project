<template >
	<div class="reservation">
		<div class="h-header-bottom">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" style="background-color: #ffffff;">
				<router-link to="/home/reservation/Mrliu">
			        <el-menu-item index="1">今日预约</el-menu-item>
			    </router-link>
			    <router-link to="">
			        <el-menu-item index="2">所有预约</el-menu-item>
			    </router-link>


			    <router-link to="">
			        <el-menu-item index="3">可预约查询</el-menu-item>
			    </router-link>
			</el-menu> 	
		</div>
		<router-view></router-view> 
<!-- 		<div class="h-content">
			<div class="content-left" >
			        
				   <el-col :span="4">
					    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="    text-align: left;margin-left: 4%;margin-top: 11%;}"> 
							  <el-form-item >
							    <el-select v-model="formInline.region" placeholder="全部科室">
							      <el-option label="科室一" value="shanghai"></el-option>
							      <el-option label="科室二" value="beijing"></el-option>
							    </el-select> 
							  </el-form-item>
						</el-form>
					    <el-menu default-active="2" class="el-menu-vertical-demo" style="background-color: #ffffff;" >
						      <router-link to="/Visdoctor"><el-menu-item index="1">出诊医生</el-menu-item></router-link>    
						      <router-link to="/Mrliu"><el-menu-item index="2">刘医生</el-menu-item></router-link> 
						      <el-menu-item index="3">李医生</el-menu-item>
						      <el-menu-item index="4">张医生</el-menu-item>
						      <el-menu-item index="5">王医生</el-menu-item>
					    </el-menu>
					</el-col>
		        
			</div>
			<router-view></router-view>	
		</div> -->
	</div>
	
	
</template>

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
            activeIndex:'1'
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
    
	
</style>