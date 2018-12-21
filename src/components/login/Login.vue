<template>
  <div class="Login">
    <el-form
      :model="loginForm"
      status-icon
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h3>
        <i class="el-icon-setting"></i>个人博客后台管理
      </h3>
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="background_color" type="primary" @click="submitForm('loginForm')">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 18, message: "长度在 3 到 18 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度小于6", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let _this = this;
          this.$http
            .post("http://www.xiewenkang.com/api/user", {
              username: _this.loginForm.username,
              password: _this.loginForm.password
            })
            .then(response => {
              //把当前登录用户数据存入state
              _this.$store.commit("Save_userinfo", response.data[0]);
              if (response.data.length) {
                this.$message({
                  message: "登录成功",
                  type: "success"
                });
                this.$router.push("/index");
              } else {
                this.$message.error("用户名或密码不正确");
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss" scoped rel="stylesheet/scss">
@import "../../common/scss/App.scss";
</style>
