<template>
  <div class="Vdetails">   
    <div class="h-header-top" style="height:30px;margin-left:2%;" >
      <p style="text-align: left;margin-top:10px;margin-left:10px;"><router-link to="/Visdoctor.vue"><el-button type="text"><i class="el-icon-arrow-left"></i></el-button></router-link>&nbsp;&nbsp;当前位置:&nbsp;&nbsp;预约&nbsp;&nbsp;/&nbsp;&nbsp;预约详情</p>  
    </div>
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
              　<td>最新测量信息: <span style="margin-left: 45%;"><el-button type="text"><i class="el-icon-document"></i>  编辑</el-button></span></td>            
              　</tr>

              　<tr style="height:50px;">
              　<td>身高: <span>-</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>体重: <span>-</span></td>            
              　</tr>
               
                <tr style="height:50px;">
              　<td>体温: <span>-</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>血压: <span>-</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>心率: <span>-</span></td>            
              　</tr>

              </table>
            </div>
        </div>

        <div class="content-right" style="height:100%;float:left;width:65%;margin-left:3%;">
            <div class="content-right-top" style="height:43%;background-color:#fff;">
                
                <table border="0" cellspacing="0" cellpadding="0" style="width:100%;text-align: left;">

                <tr style="height:50px;">
              　<td style="font-weight: bold;">预约信息</td>            
              　</tr>

              　<tr style="height:50px;">
              　<td>订单号: <span>-</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>订单生成时间: <span>-</span></td>            
              　</tr>
               
                <tr style="height:50px;">
              　<td>预约类型: <span>-</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>销售类型: <span>-</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>心率: <span>-</span><span style="margin-left: 80%;"><el-button type="text"><i class="el-icon-document"></i>  查看报备</el-button></span></td>            
              　</tr>

              </table>
            </div>
            <div class="content-right-bottom" style="height:37%;background-color:#fff;margin-top:3%;">
                
                <table border="0" cellspacing="0" cellpadding="0" style="width:100%;text-align: left;">

                <tr style="height:50px;">
              　<td style="font-weight: bold;">问诊信息</td>            
              　</tr>

              　<tr style="height:50px;">
              　<td>就诊时间: <span>-</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>就诊医生: <span>-</span></td>            
              　</tr>
               
                <tr style="height:50px;">
              　<td>主治: <span>-</span></td>            
              　</tr>

                <tr style="height:50px;">
              　<td>销售类型: <span>-</span></td>            
              　</tr>
              </table>
            </div>
            <div class="content-right-bottom2" style="margin-top: 3%">
                <span class="wrapper">
                  <el-button type="success" @click="handleEdit()">修改就诊时间</el-button>
                  <el-button type="success">修改就诊医生</el-button>
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
   
    }
  }
  //  components:{
  //    home1:Home
  // }
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
</style>
