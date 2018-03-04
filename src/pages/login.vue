<template>
  <div id="login">
    <Form class="form" ref="formInline" :model="formInline" :rules="ruleInline">
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-locked-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button class="submit-btn" type="primary" @click="handleSubmit(formInline)">Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {
      formInline: {
        user: '',
        password: ''
      },
      ruleInline: {
        user: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {type: 'string', min: 6, message: '密码不能小于6位', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSubmit (formInline) {
      this.$refs['formInline'].validate((valid) => {
        if (valid) {
          this.$router.push({path: '/'})
        } else {
          console.log('no')
        }
      })
    }
  }
}
</script>

<style scoped>
#login{
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);
  position: relative;
}
.form{
  width: 22em;
  height: 14em;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 2em;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 15px rgba(0, 0, 0, .15), 0 6px 20px rgba(0, 0, 0, .15);
  border-radius: 10px;
}
.submit-btn{
  width: 100%;
}
</style>
