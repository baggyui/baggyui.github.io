<template>
  <div class="content">
    <h2>对话框 Dialog</h2>
    <p>对话框，弹窗形式打开。</p>

    <h3>使用方法</h3>
    <p>基础的对话框用法。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button @click="visible = true">显示对话框</v-button>
          <v-button @click="visible2 = true">禁用右上角关闭</v-button>
          
          <!-- 基础对话框 -->
          <v-dialog v-model="visible" title="提示">
            <span>这是一段信息</span>
            <span slot="footer">
              <v-button @click="visible = false">取 消</v-button>
              <v-button type="primary" @click="visible = false">确 定</v-button>
            </span>
          </v-dialog>

          <!-- 禁用关闭 -->
          <v-dialog v-model="visible2" title="提示" :closable="false">
            <span>这是一段信息</span>
            <span slot="footer">
              <v-button @click="visible2 = false">取 消</v-button>
              <v-button type="primary" @click="visible2 = false">确 定</v-button>
            </span>
          </v-dialog>
        </div>
      </template>
      <template slot="code">{{ code.default }}</template>
      <template slot="desc">
        <p>设置 Dialog 的<code>v-model</code>可以控制显示或隐藏，需要的是一个<code>Boolean</code>值。</p>

        <p style="margin-top:10px;"><code>title</code>属性可以 Dialog 标题。</p>

        <p style="margin-top:10px;">默认可以直接在<code>Dialog</code>填写内容，它自带一定的间距。可以通过设置<code>slot</code>为<code>footer</code>来加入底部按钮或其它元素。</p>
      </template>
    </ba-demo>

    <h3>自定义宽度</h3>
    <p>可以设置 Dialog 的宽度。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button @click="visible3 = true">宽度为 400px</v-button>
          <v-button @click="visible4 = true">最小宽度为 400px</v-button>

          <!-- 自定义宽度 -->
          <v-dialog v-model="visible3" title="提示" width="400">
            <span>这是一段信息</span>
            <span slot="footer">
              <v-button @click="visible3 = false">取 消</v-button>
              <v-button
                type="primary"
                @click="visible3 = false">确 定</v-button>
            </span>
          </v-dialog>

          <!-- 自定义最小宽度 -->
          <v-dialog v-model="visible4" title="提示" min-width="400">
            <span>这是一段信息</span>
            <span slot="footer">
              <v-button @click="visible4 = false">取 消</v-button>
              <v-button
                type="primary"
                @click="visible4 = false">确 定</v-button>
            </span>
          </v-dialog>
        </div>
      </template>
      <template slot="code">{{ code.width }}</template>
      <template slot="desc">
        <p>Dialog 的默认的最小宽度为<code>520px</code>。如果需要重新设置它的宽度，可以使用<code>width</code>属性来设置宽度，或者是<code>min-width</code>属性来设置最小宽度。</p>

        <p style="margin-top:10px">注意：一旦设置了<code>min-width</code>属性，<code>width</code>属性将无效。</p>
      </template>
    </ba-demo>

    <h3>自定义 top</h3>
    <p>可以设置顶部距离。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button @click="visible5 = true">top 为 10%</v-button>
          <v-button @click="visible6 = true">top 为 10px</v-button>

          <!-- 百分比 top -->
          <v-dialog v-model="visible5" title="提示" top="10%">
            <span>这是一段信息</span>
            <span slot="footer">
              <v-button @click="visible5 = false">取 消</v-button>
              <v-button
                type="primary"
                @click="visible5 = false">确 定</v-button>
            </span>
          </v-dialog>

          <!-- 像素 top -->
          <v-dialog v-model="visible6" title="提示" top="10px">
            <span>这是一段信息</span>
            <span slot="footer">
              <v-button @click="visible6 = false">取 消</v-button>
              <v-button
                type="primary"
                @click="visible6 = false">确 定</v-button>
            </span>
          </v-dialog>
        </div>
      </template>
      <template slot="code">{{ code.top }}</template>
      <template slot="desc">
        <p>Dialog 的默认 top 为<code>30%</code>。可以使用<code>top</code>属性来设置 top，单位可以是<code>px</code>或<code>%</code>。</p>
      </template>
    </ba-demo>

    <h3>自定义内容</h3>
    <p>Dialog 的内容可以自行书写。</p>
    <ba-demo>
      <template slot="source">
        <div>
          <v-button @click="visible7 = true">自定义的对话框</v-button>

          <v-dialog v-model="visible7" title="提示">
            <div slot="body" style="padding: 30px 0; text-align: center;">
              <span>快看下面五颜六色的按钮：</span>
              <div style="margin-top: 20px;">
                <v-button type="success">成功按钮</v-button>
                <v-button type="warning">警告按钮</v-button>
                <v-button type="danger">危险按钮</v-button>
                <v-button type="info">信息按钮</v-button>
              </div>
            </div>
          </v-dialog>
        </div>
      </template>
      <template slot="code">{{ code.content }}</template>
      <template slot="desc">
        <p>如果 Dialog 默认的间距不符合需求，则可以设置<code>slot</code>等于<code>body</code>来自定义内容，它没有间距。</p>
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
            <td>对话框标题</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>closable</td>
            <td>是否显示右上角的关闭按钮</td>
            <td>Boolean</td>
            <td>true</td>
          </tr>
          <tr>
            <td>width</td>
            <td>对话框宽度，单位为<code>px</code></td>
            <td>Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>min-width</td>
            <td>对话框最小宽度，单位为<code>px</code></td>
            <td>Number</td>
            <td>520</td>
          </tr>
          <tr>
            <td>top</td>
            <td>对话框距离浏览器顶部的距离</td>
            <td>String</td>
            <td>30%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <h3>Slots</h3>
    <div class="api">
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>body</td>
            <td>自定义主体内容，没有间距。</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>自定义页脚，按钮会被固定在右侧。</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import Demo from '../components/demo';
  import code from '../code/dialog';

  export default {
    components: {
      'ba-demo': Demo
    },

    data() {
      return {
        code,
        visible: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        visible6: false,
        visible7: false
      };
    }
  };
</script>

<style lang="sass">
  .source .v-button + .v-button {
    margin-left: 10px;
  }
</style>