# react-router-dom
 
 主要学习react-router相关的API，模拟用户登录的场景
 
 1. 先进行yarn(没有的话请先安装yarn)
 2. yarn start进行启动项目
 3. 登录账号(admin/123456)
 
  ## react路由的两种方式
 
  1. HashRouter：理由hash实现路由(是使用window.location.hash来保证UI和URL进行同步)
      * HashRouter父类组件 用于监听hash值变化(location.pathName) 以及改变路由的方法(history.push)，HashRouter与子组件的通信都是通过React高阶组件<Provider>和<Consumer>;
  2. BrowserRouter：利用h5 Api实现路由切换(是根据HTML5提供的History API来保持UI和URL的同步)
      * BrowserRouter的tomcat部署(基于create-react-app)配置package.json  增加homepage(./)并且配置Router 的默认basename，tomcat中的web.xml需要配置errorpage
 
 ## react-router常用API介绍
 
      * Switch:仅渲染与当前位置匹配的第一个子元素,因为Route的机制是顺序匹配,Switch主要作用就是用来解决路由的重复匹配的问题;
      * Route:表示路由界面,路由中的核心组件 页面的最后匹配和渲染都是通过Route来决定的，核心内容就是根据{path-to-regexp}插件来实现正则匹配，最后也是通过Route组件通过props将(location,history,march)传递到对应的页面组件中去的；
        > props介绍:
             match:对象包含<Route path> 匹配的url信息 其中的params object根据path中指定的动态片段,从URL中解析出的键值对;

             location:指的是当前程序所在位置,并且我们通过Redirect的to属性中的serch和state取值的时候都是在location中取值;

             history:指的是history包（brower history:针对的是DOM环境,用于支持HTML5 history API的浏览器;hash history:针对DOM环境，用于传统的低版本浏览器;memory history:是基于history实现的，用于RN等非DOM环境),并且我们基于路由跳转的方法都在history中(push,replace,go,goback,foForward...);
        > component:
             一个React组件。当带有component参数的路由匹配时，路由将返回一个新元素，其类型是React component(使用React.createElement创建);
        > render:
             一个返回React元素的函数，这与component类似，但对于内联渲染和更多参数传递很有用
        > children:
             一个返回React元素的函数,与之前两个不同的是,无论路由的路径是否与当前位置相匹配,都是始终被渲染
        > exact:
             Bool类型 当为true的时候必须与location.pathname完全匹配才行
        > strict:
             Bool类型 当为true的时候,带有的/的路由只与带有/的路由相互匹配 
        > sensitive: 
             Bool类型 当为true的时候,location.pathname 将会区分大小写
        > path:
             路由匹配指向的地址，当为数组字符串的时候，不同路由都会指向同一个component，可由于的是当不同的路由地址但是对应的componnet是同一个的时候并且可以进行不同的参数处理
      * Redirect:这个组件是路由库中最单纯的组件，主要就是负责所有路由都匹配不上的时候，重定向到对应的组件去(大型项目中一般都会加上它),注意Redirect一般放在路由的最后一行，用于匹配不上的时候或者用户强制进行重定向的处理
        > to:
             重定向路径(可以是Obj/String),当为Object的时候(可以通过，search和state进行页面参数传递，一个是通过url拼接(也是在location中)进行传递一个是通过location的state传递)
        > push:
             布尔值，是否将当前路径存在history中，意思就是当为true的时候会把路径存入history中而不是直接替换当前路由
        > from:
             一定要用于Switch组件中
        > exact:
             等同于Route exact 精确匹配
        > strict:
             等同于Route strict
        >sensitive:
             等同于Route sensitive
      * Link:可以理解成我们想象中的a标签，区别在于a标签是通过herf链接到别的项目或页面中去，而我们的Link是除了可以跳转主要是用于解决dom的重复渲染
      * Prompt:当用户离开某页面的时候 给与提示 message(String||Function(location(将要去的路由地址),action[当前行为])) when(bool,用于判断是否渲染该组件)
      * withRouter:直接可以将一个组件变成路由组件，只可以直接调用Route中相关的props方法和属性,而不需要层层通过props传递路由相关方法和属性
 