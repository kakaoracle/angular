# Angular教程
## nodejs的安装
windows上直接安装默认添加到环境变量里
mac上安装步骤：
参考链接：https://blog.csdn.net/m0_37896739/article/details/83545890
基本步骤：
进入macinotoshhd盘中，右键下方访达，选择前往，输入etc（这是一个隐藏目录）
找到其中的profile（没有任何后缀）文件
被锁定可以直接复制一份编辑之后保存为profile同名无后缀进行替换
里面输入node的安装目录：
export NODE_HOME="/usr/local"
export PATH=$PATH:$NODE_HOME/bin
完毕。
## 创建并启动一个应用
创建应用:ng new 项目名
启动应用:ng serve --open:open用来启动浏览器
## angular组件
每一个组件都由三个基础文件组成:
app.component.ts--------------js
app.component.html------------html
app.component.css-------------css
webstorm中可以直接创建一个component(组件,含三个默认文件),class(类,pojo),service(方法)
