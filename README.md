# bit-css

## Features
- 对常用css属性进行枚举，通过添加class的方式为元素赋予css属性，减少大部分css属性的编写；
- 内置了antDesign调色板（https://ant.design/docs/spec/colors），更方便的调试和配色；
- 支持less变量覆盖的方式自定义尺寸范围;
- 支持pc，h5,小程序，react-native，支持单位配置(px,Px,PX,em,rem,rpx等);
- 与jade(pug)模板一起使用体验更加(https://github.com/pugjs/pug);

## preview
![image](https://raw.githubusercontent.com/changgeee/bit-css/master/example/assets/preview.png)

## 快速体验
- codepen(https://codepen.io/changgeee/pen/LYNZyxY)

## 包含的属性(class)
- width(.w-*)
- height(.h-*)
- padding(.p-* ,.pt-* ,.pr-* ,.pb-* ,.pl-* ,plr-* ,ptb-*)
- margin(.m-* ,.mt-* ,.mr-* ,.mb-* ,.ml-* ,mlr-* ,mtb-*)
- boder-width(.bd-* ,.bdt-* ,.bdr-* ,.bdb-* ,.bdl-*)
- boder-style(.bd-solid,.bd-dashed,.bd-double)
- border-radius(.radius-*)
- 百分比宽高1-100(w-p* ,h-p*)
- line-height(.lh-*)
- position(.pst-absl ,.pst-rlt ,.pst-fx)
- 定位上右下左(.t-* ,.r-* ,.b-* ,.l-* )
- float(.fl-left,.fl-right)
- box-sizing(.box-ct,.box-bd)
- 垂直水平居中(.v,.h,.vh)
- vertical-align (.vtal-md,.vtal-bt,.vtal-top)
- display(.dspl-in,.dspl-inbl,.dspl-bl,.dspl-flex,.dspl-infl)
- flex-wrap(.flex-wrap,.flex-nowrap)
- justify-content(.jc-start,.jc-end,.jc-center,.jc-between,.jc-around)
- align-items(.items-start,.items-end,items-center)
- 水平滑动(.h-scroll)
- overflow(.ovfl-hd,.ovfl-scroll)
- overflow-x(ovfl-x-scroll,ovfl-x-hd)
- overflow-y(ovfl-y-scroll,ovfl-y-hd)
- color(color-*-*,参考调色板)
- background(bg-*-*，,参考调色板)
- border-color(bd-*-*，,参考调色板)
- text-align(.text-center,.text-left,.text-right)
- 单行省略(.text-el)
- 多行省略，2-10(.text-el-*)
- 折行(.word-wrap)
- font-size(.fs-*)
- font-weight(.fw-*)

#### 支持配置的属性
- https://github.com/changgeee/bit-css/blob/master/src/custom.less


## install
``` bash
# npm package
npm i bit-css --save
# github package
npm --registry https://npm.pkg.github.com  i -D @changgeee/bit-css
```

## usaga
#### 与webpack一起使用
``` less
  // npm package
  @import "bit-css";
  // github package
  @import "@changgeee/bit-css";
  // 修改默认变量，ex:
  @unit: rpx;
```
> vue3 需在vue.config.js中加入如下配置
  ``` javascript
    module.exports = {
      css: {
        loaderOptions: {
          less: {
            lessOptions: {
              javascriptEnabled: true,
            }
          }
        }
      }
    };
  ```
#### 单独使用
``` html
<!-- dist 目录下含有 375px 尺寸的css压缩文件，如需修改配置，请使用less工具修改编译后手动引入 -->
<script src="bit-css/dist/bit-css.375.px.css"></script>
<!-- unpkg 线上地址 -->
<script src="https://unpkg.com/bit-css/dist/bit-css.375.px.css"></script>  
```

## css体积过大？
- 推荐使用purgecss相关插件进行无效css剔除
- 参考`./example`,使用前css文件73k，使用后0.7k
- 以vue项目为例，使用purgecss-webpack-plugin(所有使用webpack构建项目同理)
``` javascript
// vue.config.js
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

module.exports = {
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './src/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js')
        ])
      })
    ]
  }
}

```

## License
```License
MIT License

Copyright (c) 2020 changge

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
