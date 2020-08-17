# bit-css

## Features
- 对常用css属性进行枚举，通过添加class的方式为元素赋予css属性，减少大部分css属性的编写；
- 内置了antDesign调色板（https://ant.design/docs/spec/colors），更方便的调试和配色；
- 支持less变量覆盖的方式自定义尺寸范围;
- 支持pc，h5,小程序，react-native，支持单位配置(px,Px,PX,em,rem,rpx等);
- 与jade(pug)模板一起使用体验更加;

## 包含的属性(class)
- width(.w-*)
- height(.h-*)
- padding(.p-* ,.pt-* ,.pr-* ,.pb-* ,.pl-*)
- margin(.m-* ,.mt-* ,.mr-* ,.mb-* ,.ml-*,)
- boder-width(.bd-* ,.bdt-* ,.bdr-* ,.bdb-* ,.bdl-*)
- boder-style(.bd-solid,.bd-dashed,.bd-double)
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



