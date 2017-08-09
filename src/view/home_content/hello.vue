<template>
  <div class="smallhome">
      <div class="todayReservation">
          <p>今日预约</p>
          <el-table :data="tableData" style="width: 50%">
              <el-table-column prop="date" label="时间"> </el-table-column>
              <el-table-column prop="name" label="姓名" ></el-table-column>
              <el-table-column prop="phone" label="电话"></el-table-column>
              <el-table-column label="操作">
                  <template scope="scope">
                     <router-link to="/home/reservation/Vdetails">查看</router-link>
                  </template>
              </el-table-column>
          </el-table>
      </div>
      <div class="echart">
          <p>上周看病人数统计</p>
          <div :style="{height:height,width:width}" ref="myEchart">
          </div>
      </div>
  </div>
</template>
<style type="text/css" scoped>
    .smallhome .todayReservation a{
        text-decoration: none;
        color: #3398DB;
    }
    .smallhome .todayReservation a:hover,.smallhome .todayReservation a:active{
       color: red;
    }
</style>
 <script>
    import echarts from 'echarts'
    export default {
      data() {
        return {
          tableData:[],
          chart: null
        }
      },
      mounted:function(){
        this.$http.get('../../../static/testData.json').then(function(response){
          console.log("首页的值response",response.data);
          this.tableData=response.data;
        });

        this.initChart();
      },

      // 图表部分
      // props接收父组件的数据
      props: {
        // 设置图表的宽度
        width: {
          type: String,
          default: '500px'
        },
        // 设置图表的高度
        height: {
          type: String,
          default: '500px'
        }
      },
      beforeDestroy() {
        if (!this.chart) {
          return
        }
        this.chart.dispose();
        this.chart = null;
      },
      methods: {
        initChart() {
          // 对图表进行初始化
          this.chart = echarts.init(this.$refs.myEchart);
          // 把配置和数据放这里
          this.chart.setOption({
            color: ['#3398DB'],
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                // 鼠标悬浮在柱上的效果
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              }
            },
            // 图表的位置
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: [{
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              axisTick: {
                alignWithLabel: true
              }
            }],
            yAxis: [{
              type: 'value'
            }],
            series: [{
              type: 'bar',
              barWidth: '60%',
              data: [50, 32, 100, 300, 190, 58, 350]
            }]
          })
        }
      }


    }
  </script>

<style scoped>

</style>
