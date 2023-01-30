"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[2778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),b=a,d=m["".concat(l,".").concat(b)]||m[b]||u[b]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"eventbus",sidebar_position:9,title:"EventBus",sidebar_label:"11.9 EventBus"},i=void 0,p={unversionedId:"12\u3001WebApi\u7ec4\u4ef6/eventbus",id:"12\u3001WebApi\u7ec4\u4ef6/eventbus",title:"EventBus",description:"\u76f4\u63a5\u8c03\u7528",source:"@site/docs/12\u3001WebApi\u7ec4\u4ef6/12.3 \u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1.mdx",sourceDirName:"12\u3001WebApi\u7ec4\u4ef6",slug:"/12\u3001WebApi\u7ec4\u4ef6/eventbus",permalink:"/touchsocket/docs/12\u3001WebApi\u7ec4\u4ef6/eventbus",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/12\u3001WebApi\u7ec4\u4ef6/12.3 \u53d1\u73b0\u3001\u8c03\u7528\u670d\u52a1.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675088302,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:9,frontMatter:{id:"eventbus",sidebar_position:9,title:"EventBus",sidebar_label:"11.9 EventBus"},sidebar:"tutorialSidebar",previous:{title:"11.9 EventBus",permalink:"/touchsocket/docs/11\u3001TouchRpc\u7ec4\u4ef6/eventbus"},next:{title:"11.9 EventBus",permalink:"/touchsocket/docs/12\u3001WebApi\u7ec4\u4ef6/eventbus"}},l={},s=[{value:"\u76f4\u63a5\u8c03\u7528",id:"\u76f4\u63a5\u8c03\u7528",level:2},{value:"\u4ee3\u7406\u8c03\u7528RPC",id:"\u4ee3\u7406\u8c03\u7528rpc",level:2},{value:"\u5982\u4f55\u751f\u6210\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6\uff1f",id:"\u5982\u4f55\u751f\u6210\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6",level:4},{value:"\u8c03\u7528",id:"\u8c03\u7528",level:4}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u76f4\u63a5\u8c03\u7528"},"\u76f4\u63a5\u8c03\u7528"),(0,a.kt)("p",null,"\u76f4\u63a5\u8c03\u7528\uff0c\u5219\u662f\u4e0d\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u4efb\u4f55\u4ee3\u7406"),"\uff0c\u76f4\u63a5Call RPC\uff0c\u4f7f\u7528\u6bd4\u8f83\u7b80\u5355\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668"),"\u4e5f\u80fd\u76f4\u63a5\u8c03\u7528\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u3010Url\u8bf7\u6c42\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scheme"},"http://127.0.0.1:7789/ApiServer/Sum?a=10&b=20\n")),(0,a.kt)("p",null,"\u3010HttpClient\u8c03\u7528\u3011\nWebApi\u7684\u5ba2\u6237\u7aef\u548c\u5927\u5bb6\u6240",(0,a.kt)("strong",{parentName:"p"},"\u719f\u8bc6"),"\u7684\u6709\u4e00\u4e9b\u5dee\u8ddd\uff0cTouchSocket\u7684WebApi\u4f7f\u7528\u7684\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5148\u8fde\u63a5"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u540e\u8bf7\u6c42"),"\u7684\u903b\u8f91\u3002\u8bf7\u6c42\u65f6\uff0c\u5148\u6807\u8bb0",(0,a.kt)("strong",{parentName:"p"},"GET/POST"),"\u7684\u51fd\u6570\u3002\u5982\u679c\u662f",(0,a.kt)("strong",{parentName:"p"},"GET"),"\uff0c\u5219\u5fc5\u987b",(0,a.kt)("strong",{parentName:"p"},"\u7559\u7a7aURL"),"\uff0c\u5982\u679c\u662f",(0,a.kt)("strong",{parentName:"p"},"POST"),"\uff0c\u5219\u53ea\u5199URL\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'private static WebApiClient CreateWebApiClient()\n{\n    WebApiClient client = new WebApiClient();\n    client.Setup("127.0.0.1:7789");\n    client.Connect();\n    Console.WriteLine("\u8fde\u63a5\u6210\u529f");\n    return client;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scheme"},'var client = CreateWebApiClient();\n\nint sum1 = client.Invoke<int>("GET:/ApiServer/Sum?a={0}&b={1}", null, 10, 20);\nConsole.WriteLine($"Get\u8c03\u7528\u6210\u529f\uff0c\u7ed3\u679c\uff1a{sum1}");\n\nint sum2 = client.Invoke<int>("POST:/ApiServer/TestPost", null, new MyClass() { A = 10, B = 20 });\nConsole.WriteLine($"Post\u8c03\u7528\u6210\u529f\uff0c\u7ed3\u679c\uff1a{sum2}");\n')),(0,a.kt)("a",{name:"rrWhi"}),(0,a.kt)("h2",{id:"\u4ee3\u7406\u8c03\u7528rpc"},"\u4ee3\u7406\u8c03\u7528RPC"),(0,a.kt)("p",null,"\u4ee3\u7406\u8c03\u7528\u7684\u4fbf\u6377\u5728\u4e8e\uff0c\u4e0d\u7528\u518d\u7ea0\u7ed3\u8c03\u7528\u7684\u53c2\u6570\u7c7b\u578b\u6b63\u4e0d\u6b63\u786e\uff0c\u56e0\u4e3a\u8fd9\u4e9b\uff0c\u4ee3\u7406\u5de5\u5177\u90fd\u4f1a\u66ff\u4f60\u505a\u597d\u3002 ",(0,a.kt)("a",{name:"AbsXl"})),(0,a.kt)("h4",{id:"\u5982\u4f55\u751f\u6210\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6"},"\u5982\u4f55\u751f\u6210\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6\uff1f"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.yuque.com/eo2w71/rrqm/a13509bfc3581f4576861b690b4a809a"},"\u83b7\u53d6\u4ee3\u7406\u6587\u4ef6\u8be6\u60c5")," ",(0,a.kt)("a",{name:"jsQUz"})),(0,a.kt)("h4",{id:"\u8c03\u7528"},"\u8c03\u7528"),(0,a.kt)("p",null,"\u5f53\u4ee3\u7406\u88ab\u5ba2\u6237\u7aef\u83b7\u53d6\u4ee5\u540e\uff0c\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\u4f1a\u591a\u51fa\u4e00\u4e2a",(0,a.kt)("strong",{parentName:"p"},"RRQMProxy"),"\u7684\u6587\u4ef6\uff08\u6216\u8005\u5982\u679c\u662f\u670d\u52a1\u5668\u751f\u6210\u7684\u672c\u5730\u4ee3\u7406\uff0c\u5219\u9700\u8981\u590d\u5236\u5230\u5ba2\u6237\u7aef\u9879\u76ee\u4e2d\uff09\uff0c\u5728\u8be5\u6587\u4ef6\u4e2d\uff0c\u5219\u5305\u542b\u4e86\u6240\u6709\u7684",(0,a.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u65b9\u6cd5"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u7c7b"),"\uff0c\u53ef\u76f4\u63a5\u7531\u4ee3\u7406\u7c7b\u53d1\u8d77\u8c03\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'int sum3 = client.TestPost(new MyClass() { A = 10, B = 20 });\nConsole.WriteLine($"\u4ee3\u7406\u8c03\u7528\u6210\u529f\uff0c\u7ed3\u679c\uff1a{sum3}");\n')))}u.isMDXComponent=!0}}]);