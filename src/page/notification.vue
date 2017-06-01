<template>
  <div class="content">
    <h2>通知 Notification</h2>
    <p>通知弹框</p>

    <h3>使用方法</h3>
    <p>基础用法</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button @click="openNotify1">打开通知</v-button>
          <v-button @click="openNotify2">打开通知（仅标题）</v-button>
          <v-button @click="openNotify3">打开通知（不会关闭）</v-button>
        </div>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>调用<code>this.$notify</code>即可显示消息框。<code>title</code>属性表示通知框标题，<code>message</code>属性表示通知内容，<code>duration</code>属性表示显示时长。</p>
      </template>
    </ba-demo>

    <h3>带描述性</h3>
    <p>不同类型的通知。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button
            type="success"
            @click="openNotify4">成功通知</v-button>
          <v-button
            type="warning"
            @click="openNotify5">警告通知</v-button>
          <v-button
            type="danger"
            @click="openNotify6">失败通知</v-button>
          <v-button
            type="info"
            @click="openNotify7">信息通知</v-button>
        </div>
      </template>
      <template slot="code">{{ code.multi }}</template>
      <template slot="desc">
        <p><code>type</code>属性表示通知类型，分别有<code>success</code><code>warning</code><code>error</code><code>info</code> 4 种类型。</p>
        <p style="margin-top:10px;">Notification 支持两种调用 <code>type</code> 的方式：一种是直接当做参数属性传入（如左侧的警告消息）；另一种则是当做 <code>$notify</code> 的属性（如左侧的错误消息）。</p>
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
            <td>通知标题</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>message</td>
            <td>通知内容</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>type</td>
            <td>通知类型</td>
            <td>可选值为<code>success</code>、<code>warning</code>、<code>error</code>、<code>info</code>或者不设置</td>
            <td>-</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>设置通知是否自动关闭</td>
            <td>Number</td>
            <td>3500</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/notification';

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
      openNotify1() {
        this.$notify({
          title: '通知',
          message: '这是一条通知通知，这是一条通知通知',
        });
      },

      openNotify2() {
        this.$notify({
          title: '仅标题的通知'
        });
      },

      openNotify3() {
        this.$notify({
          title: '通知',
          message: '这是一条不会自动关闭的通知通知',
          duration: 0
        });
      },

      openNotify4() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的通知',
          type: 'success'
        });
      },

      openNotify5() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的通知',
          type: 'warning'
        });
      },

      openNotify6() {
        this.$notify.error({
          title: '失败',
          message: '这是一条失败的通知'
        });
      },

      openNotify7() {
        this.$notify({
          title: '信息',
          message: '这是一条信息的通知',
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