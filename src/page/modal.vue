<template>
  <div class="content">
    <h2>模态框 Modal</h2>
    <p>模拟系统自带的消息提示框，包括<code>alert</code>、<code>confirm</code>和<code>prompt</code>。</p>

    <h3>消息提示</h3>
    <p>主要用于告知用户信息。</p>
    <ba-demo>
      <template slot="source">
        <v-button @click="showAlert">显示消息框</v-button>
      </template>
      <template slot="code">{{ code.alert }}</template>
      <template slot="desc">
        <p>调用<code>$modal.alert</code>即可显示消息提示，它模拟的是系统的<code>alert</code>。</p>
        <p style="margin-top:10px;"><code>title</code>属性用来自定义标题，<code>message</code>属性用来自定义提示内容。</p>
      </template>
    </ba-demo>

    <h3>确认消息</h3>
    <p>主要用于用户确认使用，比如删除操作。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button @click="showConfirm">显示确认框</v-button>
          <v-button @click="showConfirm2">异步确认框</v-button>
        </div>
      </template>
      <template slot="code">{{ code.confirm }}</template>
      <template slot="desc">
        <p>调用<code>$modal.confirm</code>即可显示确认消息，它模拟的是系统的<code>confirm</code>。</p>
        <p style="margin-top:10px;"><code>onOk</code>是一个回调函数，当点击<code>确定</code>按钮会触发。</p>
        <p style="margin-top:10px;">设置了<code>loading</code>属性，在点击<code>确定</code>按钮会显示加载状态。这时 Modal 不会自定关闭，需调用<code>remove</code>方法来手动关闭。</p>
      </template>
    </ba-demo>

    <h3>提交内容</h3>
    <p>需用户进行输入确认，比如删除操作前需输入密码确认。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button @click="showPrompt">显示提交框</v-button>
          <v-button @click="showPrompt2">密码确认框</v-button>
        </div>
      </template>
      <template slot="code">{{ code.prompt }}</template>
      <template slot="desc">
        <p>调用<code>$modal.prompt</code>即可显示确认消息，它模拟的是系统的<code>prompt</code>。</p>
        <p style="margin-top:10px"><code>inputValidate</code>在输入框输入的时候会被调用，传回输入框的值，可以对其值进行验证。</p>
        <p style="margin-top:10px"><code>inputType</code>属性设置为<code>password</code>则显示密码框，默认为输入框。</p>
      </template>
    </ba-demo>

    <h3>Props</h3>
    <div class="api">
      <table>
        <thead>
          <tr>
            <th>属性</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>title</td>
            <td>模态框标题</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>content</td>
            <td>模态框内容</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>loading</td>
            <td>点击确定按钮时显示加载状态，开启时需手动关闭模态框</td>
            <td>Boolean</td>
            <td>false</td>
          </tr>
          <tr>
            <td>inputType</td>
            <td>显示输入框类型，包括<code>input</code>和<code>password</code></td>
            <td>String</td>
            <td>input</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Events</h3>
    <div class="api">
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>onOk</td>
            <td>点击确定按钮的回调</td>
            <td>无</td>
          </tr>
          <tr>
            <td>inputValidate</td>
            <td>输入框输入的回调</td>
            <td>输入框的值</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/modal';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code
      };
    },

    methods: {
      showAlert() {
        this.$modal.alert({
          title: '标题名称',
          message: '这是一段内容'
        });
      },

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
      },

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
              message: `内容是：${value}`
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
              message: `密码是：${value}`
            });
          }
        });
      }
    }
  };
</script>

<style lang="sass">
  .source .v-button + .v-button {
    margin-left: 10px;
  }
</style>