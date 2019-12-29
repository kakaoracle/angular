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
## angular父子组件通信
@Input()
hero:Hero;
<app-hero-detail [hero] = "selectedHero"></app-hero-detail>
## angular服务
步骤一：定义一个服务，用到的地方，coontrustor中进行实例化
步骤二：用到的地方写一个方法调用服务中的方法;
getHeroes(): void {
                         this.heroes = this.heroService.getHeroes();
                       }
步骤三：用到的地方，在ngonInit中调用自己刚刚定义的方法

但是问题是，用到的地方默认在调用服务的时候，服务是能够同步返回数据的，但是由于服务器响应零延迟不可能实现。
因此需要实现一种机制，必须数据取到后，应用页面才进行响应显示：
服务：
getHeroes():Observable<Hero[]>{
    return of(HEROES);
  }

调用服务：
getHeroes(): void {
    //this.heroes = this.heroService.getHeroes()
    this.heroService.getHeroes()
      .subscribe(heroes=>this.heroes = heroes);
}



#### 服务中调用服务
上面调用的地方需要三步，实例化，写个方法调用服务的方法，初始化时调用这个方法，复杂且无用
不如直接使用服务中的方法，至于实例化，只要声明时是public的就可以
hero.service中调用message服务：
constructor(private messagesService:MessagesService) { }
  getHeroes():Observable<Hero[]>{
    this.messagesService.add("HeroService: fetched heroes");
    return of(HEROES);
  }

constructor(public messageService:MessagesService) { }//用public来声明















