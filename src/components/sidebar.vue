<template>
  <div class="sidebar" :class="classes">
    <ul class="sidebar-test">
      <li>
        <router-link to="/icon">图标 Icon</router-link>
      </li>
      <li>
        <router-link to="/button">按钮 Button</router-link> 
      </li>
      <li>
        <router-link to="/radio">单选框 Radio</router-link> 
      </li>
      <li>
        <router-link to="/checkbox">多选框 Checkbox</router-link> 
      </li>
      <li>
        <router-link to="/input">输入框 Input</router-link> 
      </li>
      <li>
        <router-link to="/select">选择框 Select</router-link> 
      </li>
      <li>
        <router-link to="/datepicker">日期选择器 Datepicker</router-link> 
      </li>
      <li>
        <router-link to="/page">分页 Page</router-link> 
      </li>
      <li>
        <router-link to="/tree">树型控件 Tree</router-link> 
      </li>
      <li>
        <router-link to="/message">消息 Message</router-link> 
      </li>
      <li>
        <router-link to="/notification">通知 Notification</router-link> 
      </li>
      <li>
        <router-link to="/dialog">对话框 Dialog</router-link> 
      </li>
      <li>
        <router-link to="/modal">模态框 Modal</router-link> 
      </li>
      <li>
        <router-link to="/table">表格 Table</router-link> 
      </li>
      <li>
        <router-link to="/breadcrumb">面包屑 Breadcrumb</router-link> 
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      visible: Boolean
    },

    computed: {
      classes() {
        return this.visible ? 'open' : '';
      }
    }
  };
</script>