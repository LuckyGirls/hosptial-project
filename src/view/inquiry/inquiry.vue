<template>
  <div class="contain">
    <div class="in-nav">
      <el-row class="containRow" :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple first-nav">
            <span>当前有1人等候</span>
            <span><a href=""><i class="fa fa-retweet" aria-hidden="true"></i>切换就诊人</a></span>
          </div>
        </el-col>

        <el-col :span="8" :offset="10">
          <div class="grid-content bg-purple">
            <span><a href=""><i class="fa fa-print" aria-hidden="true"></i>打印预览</a></span>
            <div class="in-btn">
              <el-button>保存</el-button>
              <el-button type="primary">结束就诊</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="in-content">
      <el-row class="containRow" :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple Info">
            <div class="in-con in-conOne">
              <img src="../../assets/in-info.png">
              <div class="in-file">
                <span>李春华</span>
                <span><a href=""><i class="fa fa-file" aria-hidden="true"></i>查看档案</a></span>
              </div>
              <div class="in-table">
                <div class="in-tabOne"><h2>姓名:<span>女</span></h2></div>
                <div class="in-tabTwo"><h2>年龄:<span>46</span></h2></div>
              </div>
              <div class="in-tel">
                <h2>电话:<span>13012345678</span></h2>
              </div>
              <div class="in-remark">
              <h2>备注:</h2>
                <p>文字描述很长很长文字描述很长很长文字描述很长很长文字描述很长很长文字描述很长很长文字描述很长很长文字描述很长很长文字描述很长很长</p>
              </div>
            </div>

            <div class="in-con in-conTwo">
              <div class="in-header">
                <h2>本次测量值</h2>
                <span><a href=""><i class="fa fa-pencil-square-o" aria-hidden="true"></i>编辑</a></span>
              </div>
              <div class="in-text">
                <h2>身&nbsp;&nbsp;&nbsp;高:<span>--</span></h2>
                <span><a href=""><i class="fa fa-line-chart" aria-hidden="true"></i></a></span>
              </div>
              <div class="in-text">
                <h2>体&nbsp;&nbsp;&nbsp;重:<span>--</span></h2>
                <span><a href=""><i class="fa fa-line-chart" aria-hidden="true"></i></a></span>
              </div>
              <div class="in-text">
                <h2>体&nbsp;&nbsp;&nbsp;温:<span>--</span></h2>
              </div>
              <div class="in-text">
                <h2>舒张压:<span>--</span></h2>
              </div>
              <div class="in-text">
                <h2>收缩压:<span>--</span></h2>
              </div>
            </div>

            <div class="in-con in-conThree">
              <div class="in-past">
                <h2>过往病史</h2>
                <div class="in-date">
                  <el-date-picker v-model="value6" type="daterange" placeholder="选择日期范围">
                  </el-date-picker>
                </div>
              </div>
              <div class="in-disease">
                <p class="in-disTitle">急性坏疽性阑尾炎伴穿孔</p>
                <h2 class="in-disDate">2017-04-25&nbsp;&nbsp;11:55:50</h2>
                <div class="in-disBtn">
                  <span><a href=""><i class="fa fa-file-text-o" aria-hidden="true"></i>详情</a></span>
                  <span><a href=""><i class="fa fa-clone" aria-hidden="true"></i>复制病历</a></span>
                </div>
              </div>
              <div class="in-disease">
                <p class="in-disTitle">副伤寒</p>
                <h2 class="in-disDate">2017-04-12&nbsp;&nbsp;10:00:00</h2>
                <div class="in-disBtn">
                  <span><a href=""><i class="fa fa-file-text-o" aria-hidden="true"></i>详情</a></span>
                  <span><a href=""><i class="fa fa-clone" aria-hidden="true"></i>复制病历</a></span>
                </div>
              </div>
              <div class="in-disease in-disNone">
                <h2>没有更多的诊断结果</h2>
              </div>
            </div>
          </div>
        </el-col>

        <el-col :span="17">
          <div class="grid-content bg-purple Info">
            <inquiryone></inquiryone>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import InquiryOne from './inquiryOne'
  export default {
    data() {
      return {
        value6: ''

      }
    },
    components:{
      inquiryone:InquiryOne
    }
  }
</script>

<style>
  .contain{
    margin: 0;
    padding: 0;
    background: #f6f6f6;
  }
  .contain a{
    color: blue;
    text-decoration: none;
  }
  .containRow{
    margin: 0 !important;
  }
  /*.in-nav{
    height: 50px;
    line-height: 50px;
  }*/
  .first-nav{
    /*padding: 10px;*/
    line-height: 36px;
    height: 36px;
  }
  .in-btn{
    display: inline-block;
  }
  .in-btn button{
    /*color: #cbcbcb;*/
    /*margin: 5px;*/
    padding: 10px 30px;
  }
  .in-content{
    /*margin-top: 5px;*/
    background: #f6f6f6;
  }
  .in-content .Info{
    text-align: center;
    margin-top: 10px;
  }
  .in-con{
    box-shadow:0 0 10px #dcdcdc;
    border-radius: 10px;
    border: 1px solid #dcdcdc;
    background: white;
    padding-top: 25px;
    margin-bottom: 30px;
  }
  .in-file{
    margin-top: 5px;
    padding-bottom: 30px;
    border-bottom: 1px solid #dcdcdc;
  }
  .in-file a{
    margin-left: 25px;
  }
  .in-file i{
    margin-right: 5px;
  }
  .in-table,.in-tel {
    height: 45px;
    text-align: left;
    border-bottom: 1px solid #dcdcdc;
  }
  .in-content h2{
    font-weight: inherit;
    padding-left: 13px;
    color: #dcdcdc;
    margin: 0;
    font-size: 16px;
    display: inline-block;
  }
  .in-content h2 span{
    margin-left: 8px;
    color: black;
  }
  .in-table div{
    line-height: 45px;
    width: 48%;
    display: inline-block;
  }
  .in-tabOne{
    border-right: 1px solid #dcdcdc;
  }
  .in-tel h2{
    line-height: 45px;
  }
  .in-remark{
    padding: 15px 0;
    text-align: left;
  }
  .in-remark h2{
    float: left;
    width: 15%;
    display: inline-block;
  }
  .in-remark p{
    margin: 0;
    width: 70%;
    display: inline-block;
    white-space: pre-wrap;
  }
  .in-content .in-conTwo{
    padding-top: 0;
    text-align: left;
  }
  .in-header{
    height: 70px;
    line-height: 70px;
  }
  .in-header h2,.in-text h2,.in-past h2,.in-disease p{
    margin-left: 8px;
    color: black;
    font-size: 20px;
  }
  .in-header span{
    display: inline-block;
    float: right;
    margin-right: 28px;
  }
  .in-header span i{
    margin-right: 10px;
  }
  .in-text{
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #dcdcdc;
  }
  .in-text h2{
    font-size: 18px;
    color: #787c7d;
    font-family: inherit;
    /*font-weight: bold;*/
  }
  .in-text h2 span{
    color: #dadcdb;
  }
  .in-text span{
    float: right;
    margin-right: 28px;
  }
  .in-conThree{
    text-align: left;
  }
  .in-past{
    
  }
  .in-date{
    margin: 8px 0 10px 21px;
  }
  .in-disease{
    padding-bottom: 12px;
    border-top:1px solid #dcdcdc;
    font-size: 18px;
  }
  .in-disease p{
    margin: 8px 15px 0 21px;
    display: block;
    white-space: pre-wrap;
  }
  .in-disDate{
    margin-left: 8px !important;
    color: #b6b6b6 !important;
  }
  .in-disBtn{
    margin: 8px 15px 0 21px;
  }
  .in-disBtn span{
    margin-right: 12px;
  }
  .in-disBtn span i{
    margin-right: 5px;
  }
  /*.in-disNone{
    padding: 0;
  }*/
  .in-disNone h2{
    color: #b6b6b6;
    margin: 8px 15px 0 21px;
    font-size: 20px;
    display: block;
    padding: 0;
    height: 45px;
    line-height: 45px;
  }
</style>