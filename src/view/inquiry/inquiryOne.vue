<template>
  <div class="in-con in-inOne">
    <div class="inOne-info">
       <h2>问诊信息</h2>
       <h2 class="in-order"><a href=""><i class="fa fa-plus-circle" aria-hidden="true"></i>复诊预约</a></h2>
    </div>
    <div class="inOne-treatment">
      <h2>就诊时间：<span>2016-09-18,09:00~10:00</span></h2>
      <h2>就诊医生：<span>王医生</span></h2>
      <div class="inOne-radio">
        <el-radio class="radio" v-model="radio" label="1">初诊</el-radio>
        <el-radio class="radio" v-model="radio" label="2">复诊</el-radio>
      </div>
      <div class="inOne-drug">
        <h2>药物过敏：</h2>
        <p>..................................</p>
      </div>
    </div>

    <div class="inOne-TabSwitch">
      <div class="inOne-TabLi">
        <ul>
          <el-tabs class="inOne-TabCon" v-model="activeName" @tab-click="handleClick" type="border-card">
            <el-tab-pane label="病历" name="first">
              <inRecords></inRecords>
            </el-tab-pane>

            <el-tab-pane label="医嘱" name="second">
              <inAdvices></inAdvices>
            </el-tab-pane>

            <el-tab-pane label="检验检查" name="third"></el-tab-pane>

            <el-tab-pane label="缴费" name="fourth">
              <inPays></inPays>
            </el-tab-pane>
              
            <el-tab-pane label="随访" name="fifth">
              <inVisits></inVisits>
            </el-tab-pane>
          </el-tabs>
        </ul>

        <!-- <div class="inOne-TabBttom"> -->
          <!-- <h2><a href=""><i class="fa fa-floppy-o" aria-hidden="true"></i>保存</a></h2> -->
          <!-- <h2><a href=""><i class="fa fa-paper-plane-o" aria-hidden="true"></i>选择模板</a></h2> -->
        <!-- </div> -->
      </div>
      
      
    </div> 
  </div>
</template>

<script>
  import Records from './inquiryRecords'
  import Advices from './inquiryAdvices'
  import Pays from './inquiryPays'
  import Visits from './inquiryVisits'
  export default {
    data() {
      return {
        radio: '1',
        activeName: 'first'
      }
    },
    components:{
      inRecords:Records,
      inAdvices:Advices,
      inPays:Pays,
      inVisits:Visits
    },
    methods:{
      handleClick(tab, event) {
          console.log(tab, event);
      }
    }
  }
</script>

<style>
  /*.clearfix{
    float: none;
  }*/
  .in-inOne{
    padding: 0;
    text-align: left; 
  }
  .inOne-info{
    height: 60px;
    line-height: 60px;
  }
  .inOne-info h2{
    color: black;
    font-size: 20px;
  }
  .in-order{
    float: right;
    margin-right: 30px !important;
  }
  .in-order i{
    margin-right: 8px;
  }
  .inOne-treatment{
    padding: 20px 20px 20px 0;
    border-top: 1px solid #dcdcdc;
  }
  .inOne-treatment h2{
    font-size: 18px;
  }
  .inOne-treatment h2 span{
    color: #646a6b;
  }
  .inOne-radio{
    float: right;
    display: inline-block;
  }
  .inOne-drug h2{
    float: left;
    display: inline-block;
  }
  .inOne-drug p{
    margin: 0 0 0 8px;
    width: 80%;
    display: inline-block;
    white-space: pre-wrap;
    color: #646a6b;
  }
  .inOne-TabSwitch{
    border-top: 1px solid #dcdcdc;
    height: 1000px;
  }
  .inOne-TabLi{
    /*height: 800px;*/
    /*line-height: 50px;*/
  }
  .inOne-TabSwitch ul{
    list-style: none;
    margin: 0;
    padding: 10px 0px 0 30px;
    overflow: hidden;
    width: 95%;
    /*float: left;*/
  }
  .inOne-table,.inOne-addData{
    margin-top: 20px;
  }
</style>