<template>
  <div class="content">
    <h2>消息 Message</h2>
    <p>消息提示弹框</p>

    <h3>使用方法</h3>
    <p>基础用法</p>
    <ba-demo>
      <template slot="source">
        <v-button @click="openMessage">打开消息提示</v-button>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>调用<code>this.$message</code>即可显示消息框。<code>message</code>属性表示消息内容，<code>type</code>属性表示消息类型。</p>
      </template>
    </ba-demo>

    <h3>带描述性</h3>
    <p>不同类型的消息。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button
            type="success"
            @click="openSuccessMessage">成功消息</v-button>
          <v-button
            type="warning"
            @click="openWarnMessage">警告消息</v-button>
          <v-button
            type="danger"
            @click="openFailMessage">失败消息</v-button>
          <v-button
            type="info"
            @click="openInfoMessage">信息消息</v-button>
        </div>
      </template>
      <template slot="code">{{ code.multi }}</template>
      <template slot="desc">
        <p><code>type</code>属性表示各种消息类型，分别有<code>success</code>、<code>warning</code>、<code>error</code>、<code>info</code> 4 种类型。</p>
        <p style="margin-top:10px;">Message 支持两种调用 <code>type</code> 的方式：一种是直接当做参数属性传入（如左侧的警告消息）；另一种则是当做 <code>$message</code> 的属性（如左侧的错误消息）。</p>
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
            <td>message</td>
            <td>消息内容</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>type</td>
            <td>消息类型</td>
            <td>可选值为<code>success</code>、<code>warning</code>、<code>error</code>、<code>info</code>或者不设置</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/message';

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
      openMessage() {
        this.$message({
          message: '这是一条消息提示'
        });
      },

      openSuccessMessage() {
        this.$message({
          message: '这是一条成功的消息提示',
          type: 'success'
        });
      },

      openWarnMessage() {
        this.$message({
          message: '这是一条警告的消息提示',
          type: 'warning'
        });
      },

      openFailMessage() {
        this.$message.error({
          message: '这是一条错误的消息提示'
        });
      },

      openInfoMessage() {
        this.$message({
          message: '这是一条消息提示',
          type: 'info'
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