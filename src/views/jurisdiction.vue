<template>
  <div>
    <div class="header">
      <span>角色名称: <input type="text" placeholder="请输入姓名" /></span>
      <el-button icon="el-icon-search" size="mini">查询</el-button>
      <el-button icon="el-icon-refresh-right" size="mini">重置</el-button>
      <el-button @click="$router.push('/add-role')" type="success" icon="el-icon-circle-plus-outline" size="mini"
        >新增角色</el-button
      >
    </div>
    <div>
      <template>
        <el-table :data="tableData" border style="width: 100%" stripe>
          <el-table-column prop="date" label="id"> </el-table-column>
          <el-table-column prop="name" label="角色名称"> </el-table-column>
          <el-table-column prop="name" label="备注"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <paging :page="page" @reduce="reduce" @add="add"></paging>
  </div>
</template>

<script>
import paging from '../components/paging.vue'
export default {
  name: '',
  components: {
    paging
  },
  data() {
    return {
      page: 1,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  created() {},
  mounted() {},
  methods: {
    reduce(val) {
      val--
			if(this.page == 1) return
      this.page = val
    },
    add(val) {
      val++
			if(this.page == 5) return
      this.page = val
    }
  }
}
</script>
<style scoped lang="scss">
.header {
  margin: 10px 0 20px;
  span {
    margin-right: 10px;
    font-size: 12px;
    input {
      padding: 3px 5px;
      outline: none;
    }
  }
  .el-button:nth-child(4) {
    background-color: rgba(128, 0, 128, 0.438);
    border: 0;
  }
}
</style>
