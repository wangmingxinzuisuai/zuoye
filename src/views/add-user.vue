// 新增用户
<template>
  <div>
    新增用户
    <div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名称" prop="name" style="width: 323px">
          <el-input v-model="ruleForm.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="账号" prop="account" style="width: 323px">
          <el-input v-model="ruleForm.account" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel" style="width: 323px">
          <el-input v-model="ruleForm.tel" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="角色名称" prop="username">
          <el-select v-model="ruleForm.username" placeholder="请选择角色名称">
            <el-option label="管理员角色" value="shanghai"></el-option>
            <el-option label="普通用户" value="beijing"></el-option>
            <el-option label="部门管理" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属岗位" prop="post">
          <el-select v-model="ruleForm.post" placeholder="请选择角色名称">
            <el-option label="销售岗" value="shanghai"></el-option>
            <el-option label="技术岗" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属职级" prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择角色名称">
            <el-option label="1" value="shanghai"></el-option>
            <el-option label="2" value="beijing"></el-option>
            <el-option label="3" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属部门" prop="department">
          <el-select v-model="ruleForm.department" placeholder="请选择角色名称">
            <el-option label="1" value="shanghai"></el-option>
            <el-option label="2" value="beijing"></el-option>
            <el-option label="3" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      ruleForm: {
          name: '', //用户名
          account:'', //账号
          tel:'', //手机号
          region: '',//角色名称
          username:'', //所属岗位
          post:'', //所属职级
          department:'' //所属部门
        },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        account: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        username: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        post: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
        department: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss"></style>
