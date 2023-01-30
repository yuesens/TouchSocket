"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[8139],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||o;return n?r.createElement(m,c(c({ref:t},p),{},{components:n})):r.createElement(m,c({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"createwebsocketclient",sidebar_position:3,title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef",sidebar_label:"10.3 \u521b\u5efaWebSocket\u5ba2\u6237\u7aef"},c=void 0,l={unversionedId:"10\u3001WebSocket\u7ec4\u4ef6/createwebsocketclient",id:"10\u3001WebSocket\u7ec4\u4ef6/createwebsocketclient",title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef",description:"\u8bf4\u660e",source:"@site/docs/10\u3001WebSocket\u7ec4\u4ef6/10.3 \u521b\u5efaWebSocket\u5ba2\u6237\u7aef.mdx",sourceDirName:"10\u3001WebSocket\u7ec4\u4ef6",slug:"/10\u3001WebSocket\u7ec4\u4ef6/createwebsocketclient",permalink:"/touchsocket/docs/10\u3001WebSocket\u7ec4\u4ef6/createwebsocketclient",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/10\u3001WebSocket\u7ec4\u4ef6/10.3 \u521b\u5efaWebSocket\u5ba2\u6237\u7aef.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675088302,formattedLastUpdatedAt:"Jan 30, 2023",sidebarPosition:3,frontMatter:{id:"createwebsocketclient",sidebar_position:3,title:"\u521b\u5efaWebSocket\u5ba2\u6237\u7aef",sidebar_label:"10.3 \u521b\u5efaWebSocket\u5ba2\u6237\u7aef"},sidebar:"tutorialSidebar",previous:{title:"10.2 \u521b\u5efaWebSocket\u670d\u52a1\u5668",permalink:"/touchsocket/docs/10\u3001WebSocket\u7ec4\u4ef6/createwebsocketservice"},next:{title:"10.4 WSCommandLinePlugin",permalink:"/touchsocket/docs/10\u3001WebSocket\u7ec4\u4ef6/wscommandlineplugin"}},i={},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u53ef\u914d\u7f6e\u9879",id:"\u53ef\u914d\u7f6e\u9879",level:2},{value:"\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",id:"\u652f\u6301\u63d2\u4ef6\u63a5\u53e3",level:2},{value:"\u521b\u5efaWS\u5ba2\u6237\u7aef",id:"\u521b\u5efaws\u5ba2\u6237\u7aef",level:2},{value:"\u521b\u5efaWSs\u5ba2\u6237\u7aef",id:"\u521b\u5efawss\u5ba2\u6237\u7aef",level:2},{value:"\u53d1\u9001\u6570\u636e",id:"\u53d1\u9001\u6570\u636e",level:2},{value:"\u63a5\u6536\u6570\u636e",id:"\u63a5\u6536\u6570\u636e",level:2}],p={toc:s};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("p",null,"\u652f\u6301Ssl\u7684WebSocket\u5ba2\u6237\u7aef\u3002"),(0,a.kt)("h2",{id:"\u53ef\u914d\u7f6e\u9879"},"\u53ef\u914d\u7f6e\u9879"),(0,a.kt)("p",null,"\u7ee7\u627fHttpClient\u3002"),(0,a.kt)("a",{name:"QMJHm"}),(0,a.kt)("h2",{id:"\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"},"\u652f\u6301\u63d2\u4ef6\u63a5\u53e3"),(0,a.kt)("p",null,"\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"ITcpPlugin\u3001IWebSocketPlugin")),(0,a.kt)("a",{name:"zKCwx"}),(0,a.kt)("h2",{id:"\u521b\u5efaws\u5ba2\u6237\u7aef"},"\u521b\u5efaWS\u5ba2\u6237\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'WebSocketClient myWSClient = new WebSocketClient();\n//myWSClient.Received += this.MyWSClient_Received;\n//myWSClient.Handshaked += this.MyWSClient_Handshaked;\n\nmyWSClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost(this.textBox3.Text)\n    .ConfigureContainer(a =>\n    {\n        a.SetSingletonLogger(new LoggerGroup(new EasyLogger(this.ShowMsg), new FileLogger()));\n    }));\nmyWSClient.Connect();\n\nmyWSClient.Logger.Message("\u8fde\u63a5\u6210\u529f");\n')),(0,a.kt)("a",{name:"xWVU6"}),(0,a.kt)("h2",{id:"\u521b\u5efawss\u5ba2\u6237\u7aef"},"\u521b\u5efaWSs\u5ba2\u6237\u7aef"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*\u5f53\u9700\u8981\u8fde\u63a5\u5230\u7531\u8bc1\u4e66\u673a\u6784\u9881\u53d1\u7684\u7f51\u5740\uff08\u4f8b\u5982\uff1a"),"\u5c0f\u7a0b\u5e8f",(0,a.kt)("strong",{parentName:"p"},"\u3001","_","_","\u7269\u8054\u7f51","_","_","\u7b49\uff09\u65f6\uff0c\u4ec5\u9700\u8981\u8bbe\u7f6eurl\u5373\u53ef\u3002*")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"wss://127.0.0.1:7789/ws\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5f53\u8fde\u63a5\u81ea\u5b9a\u4e49\u8bc1\u4e66\u7684Ssl\uff1awss://127.0.0.1:7789/ws")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'WebSocketClient myWSClient = new WebSocketClient();\n\nmyWSClient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost(new IPHost("wss://127.0.0.1:7789/ws"))\n    .SetClientSslOption(\n    new ClientSslOption()\n    {\n        ClientCertificates = new X509CertificateCollection() { new X509Certificate2("RRQMSocket.pfx", "RRQMSocket") },\n        SslProtocols = SslProtocols.Tls12,\n        TargetHost = "127.0.0.1",\n        CertificateValidationCallback = (sender, certificate, chain, sslPolicyErrors) => { return true; }\n    }))\n    .Connect();\n\nConsole.WriteLine("\u8fde\u63a5\u6210\u529f");\nwhile (true)\n{\n    myWSClient.SendWithWS(Console.ReadLine());\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},'\u6ce8\u610f\uff1a\u5f53\u4f7f\u7528\u57df\u540d\u8fde\u63a5\u65f6\uff0cTargetHost\u4e3a\u57df\u540d\uff0c\u4f8b\u5982\u8fde\u63a5\u5230IPHost("ws://baidu.com")\u65f6\uff0cTargetHost\u5e94\u5f53\u586b\u5199\uff1abaidu.com'))," ",(0,a.kt)("a",{name:"JKBcN"})),(0,a.kt)("h2",{id:"\u53d1\u9001\u6570\u636e"},"\u53d1\u9001\u6570\u636e"),(0,a.kt)("p",null,"\u5c06client\u5bf9\u8c61\u8f6c\u4e3a",(0,a.kt)("strong",{parentName:"p"},"HttpClient"),"\uff0c\u5373\u53ef\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u6269\u5c55\u65b9\u6cd5"),"\uff0c\u8fdb\u884c\u53d1\u9001\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f5c\u4e3a\u4e00\u6761\u6d88\u606f\u53d1\u9001")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5c06\u4e00\u4e2a\u6570\u636e\u5206\u5305\u53d1\u9001"),"\n\u4f8b\u5982\uff1a\u53d1\u9001\u7684\u6570\u636e\u4e3a{0,1,2,3,4,5,6,7,8,9}\uff0c\u5f53\u8bbe\u7f6epackageSize\u4e3a5\u65f6\uff0c\u4f1a\u5148\u53d1\u9001{0,1,2,3,4}\u4f5c\u4e3a\u5934\u5305\uff0c\u7136\u540e\u53d1\u9001{5,6,7,8,9}\u7684\u540e\u7ee7\u5305\u3002"),(0,a.kt)("a",{name:"RhCgs"}),(0,a.kt)("h2",{id:"\u63a5\u6536\u6570\u636e"},"\u63a5\u6536\u6570\u636e"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8ba2\u9605Received\u4e8b\u4ef6\u5b9e\u73b0\uff0c\u6216\u4f7f\u7528\u63d2\u4ef6\u5b9e\u73b0\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"client.Received += (c, e) =>\n    {\n        switch (e.Opcode)\n        {\n            case WSDataType.Cont:\n                break;\n            case WSDataType.Text:\n                break;\n            case WSDataType.Binary:\n                break;\n            case WSDataType.Close:\n                break;\n            case WSDataType.Ping:\n                break;\n            case WSDataType.Pong:\n                break;\n            default:\n                break;\n        }\n    };\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9644\u52a0\u63d2\u4ef6\u5b9e\u73b0"),"\n\u8be5\u64cd\u4f5c\u548c\u670d\u52a1\u5668\u4e00\u81f4\u3002"))}k.isMDXComponent=!0}}]);