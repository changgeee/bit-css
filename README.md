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
- padding(.p-* ,.pt-* ,.pr-* ,.pb-* ,.pl-*)
- margin(.m-* ,.mt-* ,.mr-* ,.mb-* ,.ml-*,)
- boder-width(.bd-* ,.bdt-* ,.bdr-* ,.bdb-* ,.bdl-*)
- boder-style(.bd-solid,.bd-dashed,.bd-double)
- border-radius(.bd-r-*)
- 百分比宽高1-100(w-p* ,h-p*)
- line-height(.lh-*)
- position(.pst-absl ,.pst-rlt ,.pst-fx)
- 定位上右下左(.t-* ,.r-* ,.b-* ,.l-* )
- float(.fl-left,.fl-right)
- box-sizing(.box-ct,.box-bd)
- 垂直水平居中(.v,.h,.vh)
- vertical-align (.vtal-md,.vtal-bt,.vtal-top)
- display(.dspl-in,.dspl-inbl,.dspl-bl,.dspl-flex)
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
npm config set registry http://registry.npmjs.org
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
<script src="@changgeee/bit-css/dist/bit-css.375.px.css"></script>

```
