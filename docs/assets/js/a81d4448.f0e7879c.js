"use strict";(self.webpackChunktouchsocket=self.webpackChunktouchsocket||[]).push([[6191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),c=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||s[k]||r;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=n(7462),a=(n(7294),n(3905));const r={id:"createtcpclient",title:"\u521b\u5efaTcpClient"},i=void 0,o={unversionedId:"createtcpclient",id:"createtcpclient",title:"\u521b\u5efaTcpClient",description:"\u4e00\u3001\u8bf4\u660e",source:"@site/docs/createtcpclient.mdx",sourceDirName:".",slug:"/createtcpclient",permalink:"/touchsocket/docs/createtcpclient",draft:!1,editUrl:"https://gitee.com/rrqm_home/touchsocket/tree/master/handbook/docs/createtcpclient.mdx",tags:[],version:"current",lastUpdatedBy:"\u82e5\u6c5d\u68cb\u8317",lastUpdatedAt:1675770803,formattedLastUpdatedAt:"Feb 7, 2023",frontMatter:{id:"createtcpclient",title:"\u521b\u5efaTcpClient"},sidebar:"docs",previous:{title:"\u521b\u5efaTcpService",permalink:"/touchsocket/docs/createtcpservice"},next:{title:"\u540c\u6b65\u8bf7\u6c42",permalink:"/touchsocket/docs/waitingclient"}},p={},c=[{value:"\u4e00\u3001\u8bf4\u660e",id:"\u4e00\u8bf4\u660e",level:2},{value:"\u4e8c\u3001\u7279\u70b9",id:"\u4e8c\u7279\u70b9",level:2},{value:"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f",id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f",level:2},{value:"\u56db\u3001\u53ef\u914d\u7f6e\u9879",id:"\u56db\u53ef\u914d\u7f6e\u9879",level:2},{value:"SetBufferLength",id:"setbufferlength",level:4},{value:"SetMaxPackageSize",id:"setmaxpackagesize",level:4},{value:"SetThreadCount",id:"setthreadcount",level:4},{value:"SetGetDefaultNewID",id:"setgetdefaultnewid",level:4},{value:"SetListenIPHosts",id:"setlisteniphosts",level:4},{value:"SetServerName",id:"setservername",level:4},{value:"SetBacklogProperty",id:"setbacklogproperty",level:4},{value:"SetMaxCount",id:"setmaxcount",level:4},{value:"SetReceiveType",id:"setreceivetype",level:4},{value:"UsePlugin",id:"useplugin",level:4},{value:"SetServiceSslOption",id:"setservicessloption",level:4},{value:"UseNoDelay",id:"usenodelay",level:4},{value:"UseDelaySender",id:"usedelaysender",level:4},{value:"UseReuseAddress",id:"usereuseaddress",level:4},{value:"SetRemoteIPHost",id:"setremoteiphost",level:4},{value:"SetClientSslOption",id:"setclientssloption",level:4},{value:"SetKeepAliveValue",id:"setkeepalivevalue",level:4},{value:"SetBindIPHost",id:"setbindiphost",level:4},{value:"UseDelaySender",id:"usedelaysender-1",level:4},{value:"UseNoDelay",id:"usenodelay-1",level:4},{value:"UseBroadcast",id:"usebroadcast",level:4},{value:"\u4e94\u3001\u652f\u6301\u63d2\u4ef6",id:"\u4e94\u652f\u6301\u63d2\u4ef6",level:2},{value:"\u516d\u3001\u521b\u5efaTcpClient",id:"\u516d\u521b\u5efatcpclient",level:2},{value:"\u4e03\u3001\u63a5\u6536\u6570\u636e",id:"\u4e03\u63a5\u6536\u6570\u636e",level:2},{value:"7.1 Received\u59d4\u6258\u5904\u7406",id:"71-received\u59d4\u6258\u5904\u7406",level:3},{value:"7.2 \u63d2\u4ef6\u5904\u7406\u63a8\u8350",id:"72-\u63d2\u4ef6\u5904\u7406\u63a8\u8350",level:3},{value:"\u516b\u3001\u53d1\u9001\u6570\u636e",id:"\u516b\u53d1\u9001\u6570\u636e",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u8bf4\u660e"},"\u4e00\u3001\u8bf4\u660e"),(0,a.kt)("p",null,"TcpClient\u662fTcp\u7cfb\u5ba2\u6237\u7aef\u57fa\u7c7b\uff0c\u4ed6\u76f4\u63a5\u53c2\u4e0etcp\u7684\u8fde\u63a5\u3001\u53d1\u9001\u3001\u63a5\u6536\u3001\u5904\u7406\u3001\u65ad\u5f00\u7b49\uff0c\u4ed6\u7684\u4e1a\u52a1\u4e0e\u670d\u52a1\u5668\u7684",(0,a.kt)("strong",{parentName:"p"},"SocketClient"),"\u662f\u4e00\u4e00\u5bf9\u5e94\u7684\u3002"),(0,a.kt)("h2",{id:"\u4e8c\u7279\u70b9"},"\u4e8c\u3001\u7279\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b80\u5355\u6613\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"IOCP\u591a\u7ebf\u7a0b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u5b58\u6c60\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"\u9ad8\u6027\u80fd"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u914d\u5668\u9884\u5904\u7406\uff0c\u4e00\u952e\u5f0f\u89e3\u51b3",(0,a.kt)("strong",{parentName:"li"},"\u5206\u5305"),"\u3001",(0,a.kt)("strong",{parentName:"li"},"\u7c98\u5305"),"\u3001\u5bf9\u8c61\u89e3\u6790(\u5982HTTP\uff0cJson)\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8d85\u7b80\u5355\u7684\u540c\u6b65\u53d1\u9001\u3001\u5f02\u6b65\u53d1\u9001\u3001\u63a5\u6536\u7b49\u64cd\u4f5c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u59d4\u6258\u3001\u63d2\u4ef6\u9a71\u52a8\uff0c\u8ba9\u6bcf\u4e00\u6b65\u90fd\u80fd\u6267\u884cAOP\u3002")),(0,a.kt)("h2",{id:"\u4e09\u4ea7\u54c1\u5e94\u7528\u573a\u666f"},"\u4e09\u3001\u4ea7\u54c1\u5e94\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709Tcp\u57fa\u7840\u4f7f\u7528\u573a\u666f\uff1a\u53ef\u8de8\u5e73\u53f0\u3001\u8de8\u8bed\u8a00\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u534f\u8bae\u89e3\u6790\u573a\u666f\uff1a\u53ef\u89e3\u6790\u4efb\u610f\u6570\u636e\u683c\u5f0f\u7684TCP\u6570\u636e\u62a5\u6587\u3002")),(0,a.kt)("h2",{id:"\u56db\u53ef\u914d\u7f6e\u9879"},"\u56db\u3001\u53ef\u914d\u7f6e\u9879"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"\u53ef\u914d\u7f6e\u9879"),(0,a.kt)("div",null,(0,a.kt)("h4",{id:"setbufferlength"},"SetBufferLength"),(0,a.kt)("p",null,"\u53d1\u9001\u3001\u63a5\u6536\u7f13\u5b58\u5bb9\u91cf\uff08\u5355\u4f4d\uff1abyte\uff09\uff0c\u9ed8\u8ba41024\xd764\u3002\u8bbe\u7f6e\u5efa\u8bae\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6570\u636e\u5305\u8f83\u5c0f\uff0c\u5efa\u8bae10k\u5de6\u53f3\u7684\u503c\u3002\u66f4\u52a0\u8282\u7ea6\u5185\u5b58\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u6570\u636e\u5305\u8f83\u5927\uff0c\u4f8b\u5982\u6587\u4ef6\u4f20\u8f93\u7b49\uff0c\u5efa\u8bae64k\uff0c\u751a\u81f3\u66f4\u5927\u7684\u503c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8be5\u503c\u867d\u7136\u65e0\u4e0a\u9650\uff0c\u4f46\u662f\u4e00\u822c\u4e0d\u8981\u8d85\u8fc71Mb\uff0c\u4e0d\u7136\u4e0d\u4ec5\u6ca1\u610f\u4e49\uff0c\u8fd8\u5f88\u6d6a\u8d39")),(0,a.kt)("h4",{id:"setmaxpackagesize"},"SetMaxPackageSize"),(0,a.kt)("p",null,"\u6570\u636e\u5305\u6700\u5927\u503c\uff08\u5355\u4f4d\uff1abyte\uff09\uff0c\u9ed8\u8ba41024\xd71024\xd710\u3002\u8be5\u503c\u4f1a\u5728\u9002\u5f53\u65f6\u95f4\uff0c\u76f4\u63a5\u4f5c\u7528DataHandlingAdapter.MaxPackageSize\u3002 "),(0,a.kt)("h4",{id:"setthreadcount"},"SetThreadCount"),(0,a.kt)("p",null,"\u591a\u7ebf\u7a0b\u6570\u91cf\u3002\u8be5\u503c\u5728Auto\u6a21\u5f0f\u4e0b\u6307\u793a\u7ebf\u7a0b\u6c60\u7684\u6700\u5c11\u7ebf\u7a0b\u6570\u91cf\u548cIO\u7ebf\u7a0b\u6570\u91cf\u3002"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5efa\u8bae\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5f02\u6b65\u5904\u7406\u63a5\u6536\u6570\u636e\uff0c\u6b64\u65f6\u7ebf\u7a0b\u6570\u91cf\u8bbe\u7f6e\u4e3a\u5185\u6838\u7ebf\u7a0b\u5de6\u53f3\u7684\u503c\u5373\u53ef\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u540c\u6b65\u5904\u7406\u63a5\u6536\u6570\u636e\uff0c\u6b64\u65f6\u5e94\u5f53\u8003\u8651\u4e24\u4e2a\u56e0\u7d20\u3002\u8be5\u64cd\u4f5c\u662f\u5426\u4e3a\u8017\u65f6\u64cd\u4f5c\uff0c\u5982\u679c\u662f\uff0c\u5219\u8be5\u503c\u5728\u5141\u8bb8\u8303\u56f4\u5185\uff0c\u5e94\u5f53\u8bbe\u7f6e\u66f4\u53ef\u80fd\u5927\u7684\u503c\u3002\u5982\u679c\u4e0d\u662f\uff0c\u5219\u8bbe\u7f6e\u4e3a\u5185\u6838\u7ebf\u7a0b\u5de6\u53f3\u7684\u503c\u5373\u53ef\u3002")),(0,a.kt)("h4",{id:"setgetdefaultnewid"},"SetGetDefaultNewID"),(0,a.kt)("p",null,"\u914d\u7f6e\u521d\u59cbID\u7684\u5206\u914d\u7b56\u7565"),(0,a.kt)("h4",{id:"setlisteniphosts"},"SetListenIPHosts"),(0,a.kt)("p",null,"\u76d1\u542cIP\u548c\u7aef\u53e3\u53f7\u7ec4\uff0c\u53ef\u4ee5\u4e00\u6b21\u6027\u8bbe\u7f6e\u591a\u4e2a\u5730\u5740\u3002 "),(0,a.kt)("h4",{id:"setservername"},"SetServerName"),(0,a.kt)("p",null,"\u670d\u52a1\u5668\u6807\u8bc6\u540d\u79f0\uff0c\u65e0\u5b9e\u9645\u4f7f\u7528\u610f\u4e49\u3002"),(0,a.kt)("h4",{id:"setbacklogproperty"},"SetBacklogProperty"),(0,a.kt)("p",null,"Tcp\u534a\u8fde\u63a5\u6302\u8d77\u8fde\u63a5\u961f\u5217\u7684\u6700\u5927\u957f\u5ea6\u3002\u9ed8\u8ba4\u4e3a30 "),(0,a.kt)("h4",{id:"setmaxcount"},"SetMaxCount"),(0,a.kt)("p",null,"\u6700\u5927\u53ef\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u4e3a10000 "),(0,a.kt)("h4",{id:"setreceivetype"},"SetReceiveType"),(0,a.kt)("p",null,"\u63a5\u6536\u7c7b\u578b\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"AUTO\uff1a\u81ea\u52a8\u63a5\u6536\u6a21\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"None\uff1a\u4e0d\u6295\u9012IO\u63a5\u6536\u7533\u8bf7\uff0c\u7528\u6237\u53ef\u901a\u8fc7GetStream\uff0c\u83b7\u53d6\u5230\u6d41\u4ee5\u540e\uff0c\u81ea\u5df1\u5904\u7406\u63a5\u6536\u3002\u6ce8\u610f\uff1a\u8fde\u63a5\u7aef\u4e0d\u4f1a\u611f\u77e5\u4e3b\u52a8\u65ad\u5f00\u3002")),(0,a.kt)("h4",{id:"useplugin"},"UsePlugin"),(0,a.kt)("p",null,"\u662f\u5426\u542f\u7528\u63d2\u4ef6\u3002\u5728\u542f\u7528\u65f6\u6216\u8bb8\u4f1a\u5e26\u6765\u4e00\u70b9\u70b9\u6027\u80fd\u635f\u8017\uff0c\u57fa\u672c\u4e0a\u4e0d\u662f\u5343\u4e07\u6570\u636e\u4ea4\u4e92\u6839\u672c\u4e0d\u503c\u4e00\u63d0\u3002"),(0,a.kt)("h4",{id:"setservicessloption"},"SetServiceSslOption"),(0,a.kt)("p",null,"Ssl\u914d\u7f6e\uff0c\u4e3aNull\u65f6\u5219\u4e0d\u542f\u7528\u3002 "),(0,a.kt)("h4",{id:"usenodelay"},"UseNoDelay"),(0,a.kt)("p",null,"\u8bbe\u7f6eSocket\u7684NoDelay\u5c5e\u6027\uff0c\u9ed8\u8ba4false\u3002 "),(0,a.kt)("h4",{id:"usedelaysender"},"UseDelaySender"),(0,a.kt)("p",null,"\u4f7f\u7528\u5ef6\u8fdf\u53d1\u9001\u3002\u4f17\u6240\u5468\u77e5\uff0ctcp\u6570\u636e\u62a5\u6587\u4e3a\u4e86\u53d1\u9001\u6548\u7387\uff0c\u4f1a\u9ed8\u8ba4\u542f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u5ef6\u8fdf\u7b97\u6cd5"),"\u3002\u4f46\u662f\u8fd9\u79cd\u8bbe\u7f6e\uff0c\u53ea\u80fd\u4e00\u5b9a\u7a0b\u5ea6\u7684\u7f13\u89e3\u5c0f\u6570\u636e\u53d1\u9001\u6548\u7387\u4f4e\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u4e3a\u4e86\u4fdd\u8bc1\u591a\u7ebf\u7a0b\u53d1\u9001\u7684\u6709\u5e8f\u6027\uff0c\u5728send\u51fd\u6570\u4e2d\u8bbe\u7f6e\u4e86\u7ebf\u7a0b\u540c\u6b65\uff0c\u6240\u4ee5\u8bf4\uff0c\u6bcf\u8c03\u7528\u4e00\u6b21send\uff0c\u5b9e\u9645\u4e0a\u90fd\u662f\u5de8\u5927\u7684\u6027\u80fd\u6d88\u8017\uff08\u6b64\u5904\u7528iocp\u53d1\u9001\u4ea6\u7136\uff09\u3002\u6240\u4ee5\uff0c\u8981\u89e3\u51b3\u8be5\u95ee\u9898\uff0c \u6700\u7ec8\u8fd8\u662f\u8981\u5c06\u5c0f\u6570\u636e\uff0c\u7ec4\u5408\u6210\u5927\u6570\u636e\uff0c\u8fd9\u6837\u624d\u80fd\u66f4\u9ad8\u6548\u7387\u7684\u53d1\u9001\u3002\u6240\u4ee5\uff0cDelaySender\u6b63\u662f\u8d1f\u8d23\u6b64\u7c7b\u5de5\u4f5c\u7684\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528DelaySender\uff0c\u4f1a\u4e00\u5b9a\u7a0b\u5ea6\u7684\u964d\u4f4e\u53d1\u9001\u7684\u53ca\u65f6\u6027\uff0c\u4f46\u662f\u964d\u4f4e\u7a0b\u5ea6\u5e76\u4e0d\u9ad8\uff0c\u7b80\u5355\u6765\u8bf4\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e00\u4e2a\u5305\u5927\u4e8e512kb\uff0c\u5219\u4e0d\u4f1a\u5ef6\u8fdf\uff0c\u76f4\u63a5\u53d1\u9001\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u53d1\u9001\u7b2c\u4e00\u4e2a\u5305\uff0c\u4e0e\u7b2c\u4e8c\u4e2a\u5305\u7684\u65f6\u95f4\u95f4\u9694\u5c0f\u4e8e\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u7ebf\u7a0b\u8c03\u5ea6\u7684\u65f6\u95f4\uff08\u8fd9\u4e2a\u65f6\u95f4\u6781\u77ed\uff0c\u4e00\u822c\u6765\u8bf4\u4f1a\u572810",(0,a.kt)("strong",{parentName:"li"},"\u5fae\u79d2"),"\u5de6\u53f3\uff09\uff0c\u5219\u4f1a\u5c06\u8fd9\u4e24\u4e2a\u5305\u538b\u7f29\u4e3a\u4e00\u4e2a\u5305\u53d1\u9001\u3002")),(0,a.kt)("h4",{id:"usereuseaddress"},"UseReuseAddress"),(0,a.kt)("p",null,"\u542f\u7528\u7aef\u53e3\u590d\u7528\u3002\u8be5\u914d\u7f6e\u53ef\u5728\u670d\u52a1\u5668\u3001\u6216\u5ba2\u6237\u7aef\u5728\u76d1\u542c\u7aef\u53e3\u65f6\uff0c\u8fd0\u884c\u76d1\u542c\u540c\u4e00\u4e2a\u7aef\u53e3\u3002\u53ef\u4ee5\u4e00\u5b9a\u7a0b\u5ea6\u7f13\u89e3\u7aef\u53e3\u6765\u4e0d\u53ca\u91ca\u653e\u7684\u95ee\u9898\u3002"),(0,a.kt)("h4",{id:"setremoteiphost"},"SetRemoteIPHost"),(0,a.kt)("p",null,"\u94fe\u63a5\u5230\u7684\u8fdc\u7a0bIPHost\uff0c\u652f\u6301\u57df\u540d\u3002\u652f\u6301\u7c7b\u578b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528IP&Port\uff0c\u4f20\u5165\u5f62\u5982\uff1a127.0.0.1:7789\u7684\u5b57\u7b26\u4e32\u5373\u53ef\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u57df\u540d\uff0c\u5fc5\u987b\u5305\u542b\u534f\u8bae\u7c7b\u578b\uff0c\u5f62\u5982\uff1a",(0,a.kt)("a",{parentName:"li",href:"http://baidu.com%E6%88%96%E8%80%85https://baidu.com:80"},"http://baidu.com\u6216\u8005https://baidu.com:80"))),(0,a.kt)("h4",{id:"setclientssloption"},"SetClientSslOption"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aefSsl\u914d\u7f6e\uff0c\u4e3aNull\u65f6\u5219\u4e0d\u542f\u7528\u3002\n\u6ce8\u610f\uff0c\u5f53RemoteIPHost\u4f7f\u7528https\u3001wss\u7684\u57df\u540d\u65f6\uff0c\u8be5\u914d\u7f6e\u4f1a\u4f7f\u7528\u7cfb\u7edf\u9ed8\u8ba4\u914d\u7f6e\u751f\u6548\u3002"),(0,a.kt)("h4",{id:"setkeepalivevalue"},"SetKeepAliveValue"),(0,a.kt)("p",null,"\u4e3aSocket\u8bbe\u7f6e\u7684\u5c5e\u6027\u3002\n\u6ce8\u610f\uff1a\u8be5\u914d\u7f6e\u4ec5\u5728window\u5e73\u53f0\u751f\u6548\u3002"),(0,a.kt)("h4",{id:"setbindiphost"},"SetBindIPHost"),(0,a.kt)("p",null,"\u7ed1\u5b9a\u7aef\u53e3\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728UdpSessionBase\u4e2d\u8868\u793a\u672c\u5730\u76d1\u542c\u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},"\u5728TcpClient\u4e2d\u8868\u793a\u56fa\u5b9a\u5ba2\u6237\u7aef\u7aef\u53e3\u53f7\u3002")),(0,a.kt)("h4",{id:"usedelaysender-1"},"UseDelaySender"),(0,a.kt)("p",null,"\u4f7f\u7528\u5ef6\u8fdf\u53d1\u9001\u3002\u4f17\u6240\u5468\u77e5\uff0ctcp\u6570\u636e\u62a5\u6587\u4e3a\u4e86\u53d1\u9001\u6548\u7387\uff0c\u4f1a\u9ed8\u8ba4\u542f\u7528\u5ef6\u8fdf\u7b97\u6cd5\u3002\u4f46\u662f\u8fd9\u79cd\u8bbe\u7f6e\uff0c\u53ea\u80fd\u4e00\u5b9a\u7a0b\u5ea6\u7684\u7f13\u89e3\u5c0f\u6570\u636e\u53d1\u9001\u6548\u7387\u4f4e\u7684\u95ee\u9898\uff0c\u56e0\u4e3a\u5b83\u4e3a\u4e86\u4fdd\u8bc1\u591a\u7ebf\u7a0b\u53d1\u9001\u7684\u6709\u5e8f\u6027\uff0c\u5728send\u51fd\u6570\u4e2d\u8bbe\u7f6e\u4e86\u7ebf\u7a0b\u540c\u6b65\uff0c\u6240\u4ee5\u8bf4\uff0c\u6bcf\u8c03\u7528\u4e00\u6b21send\uff0c\u5b9e\u9645\u4e0a\u90fd\u662f\u5de8\u5927\u7684\u6027\u80fd\u6d88\u8017\uff08\u6b64\u5904\u7528iocp\u53d1\u9001\u4ea6\u7136\uff09\u3002\u6240\u4ee5\uff0c\u8981\u89e3\u51b3\u8be5\u95ee\u9898\uff0c \u6700\u7ec8\u8fd8\u662f\u8981\u5c06\u5c0f\u6570\u636e\uff0c\u7ec4\u5408\u6210\u5927\u6570\u636e\uff0c\u8fd9\u6837\u624d\u80fd\u66f4\u9ad8\u6548\u7387\u7684\u53d1\u9001\u3002\u6240\u4ee5\uff0cDelaySender\u6b63\u662f\u8d1f\u8d23\u6b64\u7c7b\u5de5\u4f5c\u7684\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528DelaySender\uff0c\u4f1a\u4e00\u5b9a\u7a0b\u5ea6\u7684\u964d\u4f4e\u53d1\u9001\u7684\u53ca\u65f6\u6027\uff0c\u4f46\u662f\u964d\u4f4e\u7a0b\u5ea6\u5e76\u4e0d\u9ad8\uff0c\u7b80\u5355\u6765\u8bf4\uff1a"),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u5305\u5927\u4e8e512kb\uff0c\u5219\u4e0d\u4f1a\u5ef6\u8fdf\uff0c\u76f4\u63a5\u53d1\u9001\u3002\n\u5982\u679c\u53d1\u9001\u7b2c\u4e00\u4e2a\u5305\uff0c\u4e0e\u7b2c\u4e8c\u4e2a\u5305\u7684\u65f6\u95f4\u95f4\u9694\u5c0f\u4e8e\u4e00\u4e2a\u7ebf\u7a0b\u6c60\u7ebf\u7a0b\u8c03\u5ea6\u7684\u65f6\u95f4\uff08\u8fd9\u4e2a\u65f6\u95f4\u6781\u77ed\uff0c\u4e00\u822c\u6765\u8bf4\u4f1a\u572810\u5fae\u79d2\u5de6\u53f3\uff09\uff0c\u5219\u4f1a\u5c06\u8fd9\u4e24\u4e2a\u5305\u538b\u7f29\u4e3a\u4e00\u4e2a\u5305\u53d1\u9001\u3002"),(0,a.kt)("h4",{id:"usenodelay-1"},"UseNoDelay"),(0,a.kt)("p",null,"\u8bbe\u7f6eSocket\u7684NoDelay\u5c5e\u6027\uff0c\u9ed8\u8ba4false\u3002"),(0,a.kt)("h4",{id:"usebroadcast"},"UseBroadcast"),(0,a.kt)("p",null,"\u8be5\u503c\u6307\u5b9a\u53ef\u4ee5\u53d1\u9001\u6216\u63a5\u6536\u5e7f\u64ad\u6570\u636e\u5305\u3002"))),(0,a.kt)("h2",{id:"\u4e94\u652f\u6301\u63d2\u4ef6"},"\u4e94\u3001\u652f\u6301\u63d2\u4ef6"),(0,a.kt)("p",null,"\u652f\u6301",(0,a.kt)("strong",{parentName:"p"},"ITcpPlugin"),"\u63a5\u53e3\uff0c\u6216\u8005\u7ee7\u627f\u81ea",(0,a.kt)("strong",{parentName:"p"},"TcpPluginBase"),"\u7c7b\uff0c\u91cd\u5199\u76f8\u5e94\u65b9\u6cd5\u5373\u53ef\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63d2\u4ef6\u65b9\u6cd5"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnConnecting"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728Socket\u5b8c\u6210\u521d\u59cb\u5316\uff0c\u4f46\u662f\u5e76\u672a\u8fde\u63a5\u65f6\u89e6\u53d1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnConnected"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728Socket\u5b8c\u6210\u8fde\u63a5\uff0c\u4e14\u6210\u529f\u540e\u89e6\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnDisconnecting"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u5ba2\u6237\u7aef\u4e3b\u52a8\u8c03\u7528Close\u65f6\u89e6\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnDisconnected"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u5ba2\u6237\u7aef\u65ad\u5f00\u8fde\u63a5\u540e\u89e6\u53d1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnReceivingData"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u6536\u5230\u539f\u59cb\u6570\u636e\u65f6\u89e6\u53d1\uff0c\u6240\u6709\u7684\u6570\u636e\u5747\u5728ByteBlock\u91cc\u9762\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnReceivedData"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728\u6536\u5230\u9002\u914d\u5668\u6570\u636e\u65f6\u89e6\u53d1\uff0c\u6839\u636e\u9002\u914d\u5668\u7c7b\u578b\uff0c\u6570\u636e\u53ef\u80fd\u5728ByteBlock\u6216\u8005IRequestInfo\u91cc\u9762\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"OnSendingData"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53\u5373\u5c06\u53d1\u9001\u6570\u636e\u65f6\uff0c\u8c03\u7528\u8be5\u65b9\u6cd5\u5728\u9002\u914d\u5668\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u5373\u4f1a\u53d1\u9001\u6570\u636e\u3002")))),(0,a.kt)("h2",{id:"\u516d\u521b\u5efatcpclient"},"\u516d\u3001\u521b\u5efaTcpClient"),(0,a.kt)("p",null,"\u7b80\u5355\u7684\u5904\u7406\u903b\u8f91\u53ef\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"Connecting"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"Connected"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"Received"),"\u7b49\u59d4\u6258\u76f4\u63a5\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpClient tcpClient = new TcpClient();\ntcpClient.Connected += (client, e) => { };//\u6210\u529f\u8fde\u63a5\u5230\u670d\u52a1\u5668\ntcpClient.Disconnected += (client, e) => { };//\u4ece\u670d\u52a1\u5668\u65ad\u5f00\u8fde\u63a5\uff0c\u5f53\u8fde\u63a5\u4e0d\u6210\u529f\u65f6\u4e0d\u4f1a\u89e6\u53d1\u3002\ntcpClient.Received += (client, byteBlock, requestInfo) =>\n{\n    //\u4ece\u670d\u52a1\u5668\u6536\u5230\u4fe1\u606f\n    string mes = Encoding.UTF8.GetString(byteBlock.Buffer, 0, byteBlock.Len);\n    Console.WriteLine($"\u63a5\u6536\u5230\u4fe1\u606f\uff1a{mes}");\n};\n\n//\u58f0\u660e\u914d\u7f6e\nTouchSocketConfig config = new TouchSocketConfig();\nconfig.SetRemoteIPHost(new IPHost("127.0.0.1:7789"))\n    .UsePlugin();\n\n//\u8f7d\u5165\u914d\u7f6e\ntcpClient.Setup(config);\ntcpClient.Connect();\ntcpClient.Send("RRQM");\n')),(0,a.kt)("h2",{id:"\u4e03\u63a5\u6536\u6570\u636e"},"\u4e03\u3001\u63a5\u6536\u6570\u636e"),(0,a.kt)("p",null,"\u5728TcpClient\u4e2d\uff0c\u63a5\u6536\u6570\u636e\u7684\u65b9\u5f0f\u6709\u5f88\u591a\u79cd\u3002\u591a\u79cd\u65b9\u5f0f\u53ef\u4ee5\u7ec4\u5408\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"71-received\u59d4\u6258\u5904\u7406"},"7.1 Received\u59d4\u6258\u5904\u7406"),(0,a.kt)("p",null,"\u5f53\u4f7f\u7528TcpClient\u521b\u5efa\u5ba2\u6237\u7aef\u65f6\uff0c\u5185\u90e8\u5df2\u7ecf\u5b9a\u4e49\u597d\u4e86\u4e00\u4e2a\u5916\u7f6e\u59d4\u6258Received\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u59d4\u6258\u76f4\u63a5\u63a5\u6536\u6570\u636e\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpClient tcpClient = new TcpClient();\ntcpClient.Received += (client, byteBlock, requestInfo) =>\n{\n    //\u4ece\u670d\u52a1\u5668\u6536\u5230\u4fe1\u606f\n    string mes = Encoding.UTF8.GetString(byteBlock.Buffer, 0, byteBlock.Len);\n    Console.WriteLine($"\u63a5\u6536\u5230\u4fe1\u606f\uff1a{mes}");\n};\n\n//\u58f0\u660e\u914d\u7f6e\nTouchSocketConfig config = new TouchSocketConfig();\nconfig.SetRemoteIPHost(new IPHost("127.0.0.1:7789"))\n    .UsePlugin();\n\n//\u8f7d\u5165\u914d\u7f6e\ntcpClient.Setup(config);\ntcpClient.Connect();\n')),(0,a.kt)("h3",{id:"72-\u63d2\u4ef6\u5904\u7406\u63a8\u8350"},"7.2 \u63d2\u4ef6\u5904\u7406\u63a8\u8350"),(0,a.kt)("p",null,"\u6309\u7167TouchSocket\u7684\u8bbe\u8ba1\u7406\u5ff5\uff0c\u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u6570\u636e\uff0c\u662f\u4e00\u9879\u975e\u5e38\u7b80\u5355\uff0c\u4e14\u9ad8\u5ea6\u89e3\u8026\u7684\u65b9\u5f0f\u3002\u6b65\u9aa4\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u914d\u7f6e\u542f\u7528\u63d2\u4ef6\uff08UsePlugin\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u65b0\u5efa\u63d2\u4ef6\u7c7b"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u63d2\u4ef6")),(0,a.kt)("p",null,"\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"\uff081\uff09\u58f0\u660e\u63d2\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public class MyPlugin : TcpPluginBase<TcpClient>\n{\n    public MyPlugin()\n    {\n        this.Order = 0;//\u6b64\u503c\u8868\u793a\u63d2\u4ef6\u7684\u6267\u884c\u987a\u5e8f\uff0c\u5f53\u591a\u4e2a\u63d2\u4ef6\u5e76\u5b58\u65f6\uff0c\u8be5\u503c\u8d8a\u5927\uff0c\u8d8a\u5728\u524d\u6267\u884c\u3002\n    }\n   \n    protected override void OnReceivedData(TcpClient client, ReceivedDataEventArgs e)\n    {\n        //\u8fd9\u91cc\u5904\u7406\u6570\u636e\u63a5\u6536\n        //\u6839\u636e\u9002\u914d\u5668\u7c7b\u578b\uff0ce.ByteBlock\u4e0ee.RequestInfo\u4f1a\u5448\u73b0\u4e0d\u540c\u7684\u503c\uff0c\u5177\u4f53\u770b\u6587\u6863=\u300b\u9002\u914d\u5668\u90e8\u5206\u3002\n        ByteBlock byteBlock = e.ByteBlock;\n        IRequestInfo requestInfo = e.RequestInfo;\n\n        //e.Handled = true;//\u8868\u793a\u8be5\u6570\u636e\u5df2\u7ecf\u88ab\u672c\u63d2\u4ef6\u5904\u7406\uff0c\u65e0\u9700\u518d\u6295\u9012\u5230\u5176\u4ed6\u63d2\u4ef6\u3002\n        base.OnReceivedData(client, e);\n    }\n}\n")),(0,a.kt)("p",null,"\uff082\uff09\u521b\u5efa\u4f7f\u7528\u63d2\u4ef6\u5904\u7406\u7684\u5ba2\u6237\u7aef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'TcpClient client = new TcpClient();\nclient.Setup(new TouchSocketConfig()\n    .SetRemoteIPHost(new IPHost("127.0.0.1:7789"))\n    .UsePlugin()\n    .ConfigureContainer(a=>\n    {\n        a.AddConsoleLogger();\n    })\n    .ConfigurePlugins(a => \n    {\n        a.Add<MyPlugin>();\n    }))\n    .Connect();\n')),(0,a.kt)("h2",{id:"\u516b\u53d1\u9001\u6570\u636e"},"\u516b\u3001\u53d1\u9001\u6570\u636e"),(0,a.kt)("p",null,"\u3010\u540c\u6b65\u53d1\u9001\u3011"),(0,a.kt)("p",null,"TcpClient\u5df2\u7ecf\u5185\u7f6e\u4e86\u4e09\u79cd\u540c\u6b65\u53d1\u9001\u65b9\u6cd5\uff0c\u76f4\u63a5\u8c03\u7528\u5c31\u53ef\u4ee5\u53d1\u9001\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u901a\u8fc7\u8be5\u65b9\u6cd5\u53d1\u9001\u7684\u6570\u636e\uff0c\u4f1a\u7ecf\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u9002\u914d\u5668"),"\uff0c\u5982\u679c\u60f3\u8981\u76f4\u63a5\u53d1\u9001\uff0c\u8bf7\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"DefaultSend"),"\u3002\u5982\u679c\u53d1\u9001\u5931\u8d25\uff0c\u5219\u4f1a\u7acb\u5373\u629b\u51fa\u5f02\u5e38\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public virtual void Send(byte[] buffer);\npublic virtual void Send(ByteBlock byteBlock);\npublic virtual void Send(byte[] buffer, int offset, int length);\n")),(0,a.kt)("p",null,"\u3010\u5f02\u6b65\u53d1\u9001\u3011"),(0,a.kt)("p",null,"TcpClient\u5df2\u7ecf\u5185\u7f6e\u4e86\u4e09\u79cd\u5f02\u6b65\u53d1\u9001\u65b9\u6cd5\uff0c\u76f4\u63a5\u8c03\u7528\u5c31\u53ef\u4ee5\u53d1\u9001\u3002\u5982\u679c\u53d1\u9001\u5931\u8d25\uff0cawait\u5c31\u4f1a\u89e6\u53d1\u5f02\u5e38\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"public virtual Task SendAsync(byte[] buffer);\npublic virtual Task SendAsync(byte[] buffer, int offset, int length);\n")))}s.isMDXComponent=!0}}]);