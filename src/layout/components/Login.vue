<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item label="email" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="['email', { rules: [{ required: true, message: '请输入' }], initialValue: 'baojie223' }]"
        addonAfter="@126.com"
      />
    </a-form-item>
    <a-form-item label="密码" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <a-input
        v-decorator="['password', { rules: [{ required: true, message: '请输入' }], initialValue: 'jie741qazBj' }]"
      />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.dispatch('user/login', { ...values, email: values.email + '@126.com' }).then(res => {
            this.$message.success('登录成功')
            console.log(res)
            this.$emit('close')
          })
        }
      })
    },
    handleSelectChange(value) {
      console.log(value)
      this.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`
      })
    }
  }
}
</script>