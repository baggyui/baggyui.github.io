let code = {};

code.alert = `
<template>
  <v-button @click="showAlert">显示消息框</v-button>
</template>

<script>
  export default {
    methods: {
      showAlert() {
        this.$modal.alert({
          title: '标题名称',
          message: '这是一段内容'
        });
      }
    }
  };
</script>
`;

code.confirm = `
<template>
  <div>
    <v-button @click="showPrompt">显示提交框</v-button>
    <v-button @click="showPrompt2">密码确认框</v-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showConfirm() {
        this.$modal.confirm({
          title: '提示',
          message: '此操作将永久删除该文件, 是否继续?',
          onOk: () => {
            this.$message({
              message: '删除成功',
              type: 'success'
            });
          }
        });
      },

      showConfirm2() {
        this.$modal.confirm({
          title: '提示',
          message: '此操作将永久删除该文件, 是否继续?',
          loading: true,
          onOk: () => {
            setTimeout(() => {
              this.$modal.remove();
              this.$message({
                message: '删除成功',
                type: 'success'
              });
            }, 1000);
          }
        });
      }
    }
  };
</script>
`;

code.prompt = `
<template>
  <div>
    <v-button @click="showPrompt">显示提交框</v-button>
    <v-button @click="showPrompt2">密码确认框</v-button>
  </div>
</template>

<script>
  export default {
    methods: {
      showPrompt() {
        this.$modal.prompt({
          title: '提示',
          message: '请输入账号',
          inputValidate: (value) => {
            if (!value) {
              return '不能为空';
            }
          },
          onOk: (value) => {
            this.$message({
              message: \`内容是：\${value}\`
            });
          }
        });
      },

      showPrompt2() {
        this.$modal.prompt({
          title: '提示',
          message: '请输入您的密码进行确认',
          inputType: 'password',
          inputValidate: (value) => {
            if (value.length < 6) {
              return '密码不能小于 6 位';
            }
          },
          onOk: (value) => {
            this.$message({
              message: \`密码是：\${value}\`
            });
          }
        });
      }
    }
  };
</script>
`;

export default code;