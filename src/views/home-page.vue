<template>
  <div style="width: 879px">
    <div class="top">
      <div>
        <ul>
          <li>待办事项 <span class="span">查看更多</span></li>
          <li>[待办事项] 你申请的报销还未审批<span>2022年8月</span></li>
          <li>[待办事项] 你申请的报销还未审批<span>2022年8月</span></li>
          <li>[待办事项] 你申请的报销还未审批<span>2022年8月</span></li>
          <li class="li">暂无代办事项</li>
        </ul>
      </div>
      <el-date-picker type="date" style="width: 150px" placeholder="选择日期"> </el-date-picker>
 
    </div>
    <div class="content">
      <ul>
        <li>员工数据</li>
        <li>
          <ul>
            <li>
              <p>员工总人数</p>
              <span>2000人</span>
            </li>
            <li>
              <p>员工总人数</p>
              <span>2000人</span>
            </li>
            <li>
              <p>员工总人数</p>
              <span>2000人</span>
            </li>
            <li>
              <p>员工总人数</p>
              <span>2000人</span>
            </li>
            <li>
              <p>员工总人数</p>
              <span>2000人</span>
            </li>
            <li>
              <p>员工总人数</p>
              <span>2000人</span>
            </li>
          </ul>
        </li>
      </ul>
      <div>
        <p>员工地区分布</p>
        <div id="main"></div>
      </div>
    </div>
    <div class="buttom">
      <p>员工生日</p>
      <div id="main1"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: '',
  components: {},
  data() {
    return {
      value1: ''
    }
  },
  created() {},
  mounted() {
    // 员工生日
    var chartDom = document.getElementById('main1')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      grid: {
        top: 20,
        bottom: 50
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 500, 300, 900, 1000, 1100, 1200],
          type: 'bar'
        }
      ]
    }

    option && myChart.setOption(option)

    // 员工地区分布图
    var chartDom = document.getElementById('main')
    var myChart = echarts.init(chartDom)
    var option

    option = {
      title: {
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        bottom: '30%',
        right: 30
      },
      grid: [
        {
          left: -100,
          top: -100,
          containLabel: true
        }
      ],
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          centent: '1000%',
          data: [
            { value: 114, name: '东北' },
            { value: 100, name: '内蒙' },
            { value: 100, name: '河北' },
            { value: 159, name: '山西' },
            { value: 200, name: '河南' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }

    option && myChart.setOption(option)
  },
  methods: {}
}
</script>
<style scoped lang="scss">
.buttom {
  width: 845px;
  height: 200px;
  border: 1px solid #777;
  p {
    margin-left: 40px;
    margin-top: 10px;
    font-size: 14px;
  }
  #main1 {
    width: 100%;
    height: 100%;
  }
}
.content {
  display: flex;
  margin: 20px 0;
  width: 100%;
  height: 241px;
  margin-bottom: 40px;
  ul {
    width: 399px;
    height: 241px;
    margin-right: 20px;
    li {
      border: 1px solid rgba(119, 119, 119, 0.479);
      ul {
        justify-content: space-around;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        align-items: center;
        li {
          text-align: center;
          width: 26%;
          border: 0;
          padding: 10px;
        }
      }
    }
  }
  div {
    width: 420px;
    height: 237px;
    p {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 0 5px;
      height: 26px;
      border: 1px #777 solid;
    }
    #main {
      width: 100%;
      height: 237px;
      border: 1px solid rgba(119, 119, 119, 0.548);
    }
  }
}
.top {
  //   display: flex;
  overflow: hidden;
  div:nth-child(1) {
    float: left;
    width: 524px;
    height: 235px;
    ul {
      li {
        display: block;
        border: 1px solid #777;
        padding: 13px 10px;
        font-size: 14px;
        .span {
          color: #7aabf6;
        }
        span {
          float: right;
        }
      }
      .li {
        text-align: center;
      }
    }
  }
  div:nth-child(2) {
    float: left;
    margin-left: 20px;
    width: 304px;
  }
}
</style>
