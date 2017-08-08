<template>
  <div class="smallhome">
      <div class="todayReservation">
          <el-table :data="tableData" style="width: 50%">
              <el-table-column prop="date" label="今日预约"> </el-table-column>
              <el-table-column prop="name" label="" ></el-table-column>
              <el-table-column prop="address" label=""></el-table-column>
              <el-table-column label="aaa">
                  <template scope="scope">
                     <p>查看</p>
                  </template>
              </el-table-column>
          </el-table>
      </div>
  </div>
</template>

 <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      }
    }
  </script>

<style scoped>

</style>
