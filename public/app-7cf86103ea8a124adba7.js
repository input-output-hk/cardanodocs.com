webpackJsonp([0xd2a57dc1d883],{91:function(n,e,o){"use strict";function t(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var r=[{plugin:o(397),options:{plugins:[]}},{plugin:o(398),options:{plugins:[]}}]},233:function(n,e,o){"use strict";e.components={"component---src-pages-document-js":o(360),"component---src-pages-cn-404-js":o(358),"component---src-pages-cn-index-js":o(359),"component---src-pages-en-404-js":o(361),"component---src-pages-en-index-js":o(362),"component---src-pages-index-js":o(363)},e.json={"layout-index.json":o(364),"en-welcome-text.json":o(394),"en-installation.json":o(389),"en-for-contributors.json":o(387),"en-glossary.json":o(388),"en-post-1.json":o(392),"cn-welcome-text.json":o(372),"cn-glossary.json":o(368),"cn-post-1.json":o(370),"cn-post-2.json":o(371),"en-cardano-addresses.json":o(376),"cn-for-contributors.json":o(367),"en-cardano-balance-and-stake.json":o(377),"en-cardano-topology.json":o(382),"en-cardano-monetary-policy.json":o(380),"en-cardano-transaction-fees.json":o(384),"en-introduction.json":o(391),"en-technical.json":o(393),"en-cardano-proof-of-stake.json":o(381),"en-cardano-transactions.json":o(385),"en-cardano-explorer.json":o(379),"cn-intro-text.json":o(369),"en-cardano-update-mechanism.json":o(386),"en-cardano-transaction-assurance.json":o(383),"en-intro-text.json":o(390),"en-cardano-differences.json":o(378),"cn-404.json":o(366),"cn.json":o(365),"document.json":o(373),"en-404.json":o(375),"en.json":o(374),"index.json":o(395)},e.layouts={"layout---index":o(357)}},234:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var c=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},s=o(2),i=t(s),l=o(1),d=t(l),p=o(167),f=t(p),m=o(71),h=t(m),g=o(91),y=o(551),j=t(y),x=function(n){var e=n.children;return i.default.createElement("div",null,e())},v=function(n){function e(o){a(this,e);var t=r(this,n.call(this)),u=o.location;return f.default.getPage(u.pathname)||(u=c({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:f.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=f.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;f.default.getPage(t.pathname)||(t=c({},t,{pathname:"/404.html"})),f.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){f.default.getPage(n.state.location.pathname)&&e.page.path===f.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:c({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,c({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:x,c({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(i.default.Component);v.propTypes={page:d.default.bool,layout:d.default.bool,location:d.default.object},e.default=v,n.exports=e.default},71:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(440),r=t(a),u=(0,r.default)();n.exports=u},235:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(90),r=o(168),u=t(r),c={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),r=(0,u.default)(t,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),c[r])return c[r];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return s=n,c[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return s=n,c[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return s=n,c[r]=n,!0}return!1}),s}}},236:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(120),r=t(a),u=o(91),c=(0,u.apiRunner)("replaceHistory"),s=c[0],i=s||(0,r.default)();n.exports=i},366:function(n,e,o){o(4),n.exports=function(n){return o.e(0x8682de347d4a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(406)})})}},367:function(n,e,o){o(4),n.exports=function(n){return o.e(0x7bd8dfee6176,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(407)})})}},368:function(n,e,o){o(4),n.exports=function(n){return o.e(0xdb66dab4e52f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(408)})})}},369:function(n,e,o){o(4),n.exports=function(n){return o.e(73102589632166,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(409)})})}},370:function(n,e,o){o(4),n.exports=function(n){return o.e(4350885673572,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(410)})})}},371:function(n,e,o){o(4),n.exports=function(n){return o.e(0x9642730a3801,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(411)})})}},372:function(n,e,o){o(4),n.exports=function(n){return o.e(0x73dc071ed605,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(412)})})}},365:function(n,e,o){o(4),n.exports=function(n){return o.e(29311135075861,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(413)})})}},373:function(n,e,o){o(4),n.exports=function(n){return o.e(37671103382676,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(414)})})}},375:function(n,e,o){o(4),n.exports=function(n){return o.e(0x6ee0076bd33e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(415)})})}},376:function(n,e,o){o(4),n.exports=function(n){return o.e(0x80a2a3949b0a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(416)})})}},377:function(n,e,o){o(4),n.exports=function(n){return o.e(0xde605d897c7b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(417)})})}},378:function(n,e,o){o(4),n.exports=function(n){return o.e(35300271040286,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(418)})})}},379:function(n,e,o){o(4),n.exports=function(n){return o.e(0xdeebbec8a2e7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(419)})})}},380:function(n,e,o){o(4),n.exports=function(n){return o.e(60990948599160,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(420)})})}},381:function(n,e,o){o(4),n.exports=function(n){return o.e(0xe6dbcc5efd0b,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(421)})})}},382:function(n,e,o){o(4),n.exports=function(n){return o.e(0x7263f770dda8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(422)})})}},383:function(n,e,o){o(4),n.exports=function(n){return o.e(48130603894048,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(423)})})}},384:function(n,e,o){o(4),n.exports=function(n){return o.e(0xad8028e4ea3f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(424)})})}},385:function(n,e,o){o(4),n.exports=function(n){return o.e(0x6960ffb529a9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(425)})})}},386:function(n,e,o){o(4),n.exports=function(n){return o.e(0xc05de4802fb4,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(426)})})}},387:function(n,e,o){o(4),n.exports=function(n){return o.e(0xee22153e3ddc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(427)})})}},388:function(n,e,o){o(4),n.exports=function(n){return o.e(0xcebbbfc008aa,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(428)})})}},389:function(n,e,o){o(4),n.exports=function(n){return o.e(54278957257346,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(429)})})}},390:function(n,e,o){o(4),n.exports=function(n){return o.e(0xee7820c6d675,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(430)})})}},391:function(n,e,o){o(4),n.exports=function(n){return o.e(0x5fffedcaebe7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(431)})})}},392:function(n,e,o){o(4),n.exports=function(n){return o.e(86712660733061,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(432)})})}},393:function(n,e,o){o(4),n.exports=function(n){return o.e(0x94cb3efee4b0,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(433)})})}},394:function(n,e,o){o(4),n.exports=function(n){return o.e(65178339496789,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(434)})})}},374:function(n,e,o){o(4),n.exports=function(n){return o.e(0xe6dec63aeb7a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(435)})})}},395:function(n,e,o){o(4),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(436)})})}},364:function(n,e,o){o(4),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(124)})})}},357:function(n,e,o){o(4),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(237)})})}},167:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(2),r=(t(a),o(235)),u=t(r),c=o(71),s=t(c),i=o(168),l=t(i),d=void 0,p={},f={},m={},h={},g={},y=[],j=[],x={},v="",N=[],C={},w=function(n){return n&&n.default||n},b=void 0,R=!0,k=[],_={},P={},E=5;b=o(238)({getNextQueuedResources:function(){return N.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){N=N.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},S=function(n,e){return x[n]>x[e]?1:x[n]<x[e]?-1:0},T=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?f.components[e]:"layout---"===e.slice(0,9)?f.layouts[e]:f.json[e],t(function(n,t){h[e]=t,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),o(n,t)})}},L=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):T(e,function(n,t){if(n)o(n);else{var a=w(t());g[e]=a,o(n,a)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},F=1,M={empty:function(){j=[],x={},C={},N=[],y=[],v=""},addPagesArray:function(n){y=n,d=(0,u.default)(n,v)},addDevRequires:function(n){p=n},addProdRequires:function(n){f=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var o=1/F;F+=1,x[e]?x[e]+=1:x[e]=1,M.has(e)||j.unshift(e),j.sort(S);var t=d(e);return t.jsonName&&(C[t.jsonName]?C[t.jsonName]+=1+o:C[t.jsonName]=1+o,N.indexOf(t.jsonName)!==-1||h[t.jsonName]||N.unshift(t.jsonName)),t.componentChunkName&&(C[t.componentChunkName]?C[t.componentChunkName]+=1+o:C[t.componentChunkName]=1+o,N.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||N.unshift(t.componentChunkName)),N.sort(O),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:N,resourcesCount:C}},getPages:function(){return{pathArray:j,pathCount:x}},getPage:function(n){return d(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(d(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var r=a;r.unregister()}window.location.reload()}})),R=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=d(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),s.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,c=function(){if(a&&r&&(!t.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:t};var n={component:a,json:r,layout:u,page:t};o(n),s.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return L(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),a=e,c()}),L(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),r=e,c()}),void(t.layoutComponentChunkName&&L(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),u=e,c()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,o(125))},437:function(n,e){n.exports=[{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-welcome-text.json",path:"/en/welcome-text/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-installation.json",path:"/en/installation/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-for-contributors.json",path:"/en/for-contributors/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-glossary.json",path:"/en/glossary/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-post-1.json",path:"/en/post-1"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn-welcome-text.json",path:"/cn/welcome-text/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn-glossary.json",path:"/cn/glossary/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn-post-1.json",path:"/cn/post-1"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn-post-2.json",path:"/cn/post-2"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-addresses.json",path:"/en/cardano/addresses/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn-for-contributors.json",path:"/cn/for-contributors/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-balance-and-stake.json",path:"/en/cardano/balance-and-stake/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-topology.json",path:"/en/cardano/topology/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-monetary-policy.json",path:"/en/cardano/monetary-policy/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-transaction-fees.json",path:"/en/cardano/transaction-fees/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-introduction.json",path:"/en/introduction/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-technical.json",path:"/en/technical/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-proof-of-stake.json",path:"/en/cardano/proof-of-stake/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-transactions.json",path:"/en/cardano/transactions/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-explorer.json",path:"/en/cardano/explorer/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn-intro-text.json",path:"/cn/intro-text/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-update-mechanism.json",path:"/en/cardano/update-mechanism/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-transaction-assurance.json",path:"/en/cardano/transaction-assurance/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-intro-text.json",path:"/en/intro-text/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-cardano-differences.json",path:"/en/cardano/differences/"},{componentChunkName:"component---src-pages-cn-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn-404.json",path:"/cn/404/"},{componentChunkName:"component---src-pages-cn-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cn.json",path:"/cn/"},{componentChunkName:"component---src-pages-document-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"document.json",path:"/Document/"},{componentChunkName:"component---src-pages-en-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en-404.json",path:"/en/404/"},{componentChunkName:"component---src-pages-en-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"en.json",path:"/en/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},238:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],r=function(){var n=e();n&&(a.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},r=o(91),u=o(2),c=t(u),s=o(126),i=t(s),l=o(90),d=o(402),p=o(341),f=t(p),m=o(25),h=o(236),g=t(h),y=o(71),j=t(y),x=o(437),v=t(x),N=o(438),C=t(N),w=o(234),b=t(w),R=o(233),k=t(R),_=o(167),P=t(_);o(263),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(v.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o(239);var t=function(n,e){function o(n){n.page.path===P.default.getPage(a).path&&(j.default.off("onPostLoadPageResources",o),clearTimeout(s),c(t))}var t=(0,m.createLocation)(n,null,null,g.default.location),a=t.pathname,r=E[a];r&&(a=r.toPath);var u=window.location;if(u.pathname!==t.pathname||u.search!==t.search||u.hash!==t.hash){var c=e?window.___history.replace:window.___history.push,s=setTimeout(function(){j.default.off("onPostLoadPageResources",o),j.default.emit("onDelayedLoadPageResources",{pathname:a}),c(t)},1e3);P.default.getResourcesForPathname(a)?(clearTimeout(s),c(t)):j.default.on("onPostLoadPageResources",o)}};window.___push=function(n){return t(n,!1)},window.___replace=function(n){return t(n,!0)},window.___navigateTo=window.___push,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var s=!1,p=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return c.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(b.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(p?p:h,null,(0,u.createElement)(d.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,u.createElement)(b.default,a({page:!0},t)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0],s=(0,r.apiRunner)("replaceHydrateFunction",void 0,i.default.render)[0];(0,f.default)(function(){return s(c.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},438:function(n,e){n.exports=[]},239:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(71),r=t(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},168:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},341:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},343:function(n,e){"use strict";var o=/[|\\{}()[\]^$+*?.]/g;n.exports=function(n){if("string"!=typeof n)throw new TypeError("Expected a string");return n.replace(o,"\\$&")}},4:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,r=o.s;o.e=function(t,u){var c=!1,s=!0,i=function(n){u&&(u(o,n),u=null)};return!r&&e&&e[t]?void i(!0):(a(t,function(){c||(c=!0,s?setTimeout(function(){i()}):i())}),void(c||(s=!1,n(function(){c||(c=!0,r?r[t]=void 0:(e||(e={}),e[t]=!0),i(!0))}))))}}t()},396:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.routeThroughBrowserOrApp=e.hashShouldBeFollowed=e.pathIsNotHandledByApp=e.urlsAreOnSameOrigin=e.authorIsForcingNavigation=e.anchorsTargetIsEquivalentToSelf=e.findClosestAnchor=e.navigationWasHandledElsewhere=e.slashedPathname=e.userIsForcingNavigation=void 0,e.default=function(n,e){var o=g(e);return n.addEventListener("click",o),function(){return n.removeEventListener("click",o)}};var a=o(343),r=t(a),u=o(42),c=e.userIsForcingNavigation=function(n){return 0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey},s=e.slashedPathname=function(n){return"/"===n[0]?n:"/"+n},i=e.navigationWasHandledElsewhere=function(n){return n.defaultPrevented},l=e.findClosestAnchor=function(n){for(;n.parentNode;n=n.parentNode)if("a"===n.nodeName.toLowerCase())return n;return null},d=e.anchorsTargetIsEquivalentToSelf=function(n){return n.hasAttribute("target")===!1||null==n.target||["_self",""].indexOf(n.target)!==-1||"_parent"===n.target&&(!n.ownerDocument.defaultView.parent||n.ownerDocument.defaultView.parent===n.ownerDocument.defaultView)||"_top"===n.target&&(!n.ownerDocument.defaultView.top||n.ownerDocument.defaultView.top===n.ownerDocument.defaultView)},p=e.authorIsForcingNavigation=function(n){return n.hasAttribute("download")===!0||d(n)===!1},f=e.urlsAreOnSameOrigin=function(n,e){return n.protocol===e.protocol&&n.host===e.host},m=e.pathIsNotHandledByApp=function(n){var e=new RegExp("^"+(0,r.default)((0,u.withPrefix)("/"))),o=/^.*\.((?!htm)[a-z0-9]{1,5})$/i;return e.test(s(n.pathname))===!1||n.pathname.search(o)!==-1},h=e.hashShouldBeFollowed=function(n,e){return""!==e.hash&&(""===e.pathname||e.pathname===n.pathname)},g=e.routeThroughBrowserOrApp=function(n){return function(e){if(c(e))return!0;if(i(e))return!0;var o=l(e.target);if(null==o)return!0;if(p(o))return!0;var t=document.createElement("a");t.href=o.href;var a=document.createElement("a");return a.href=window.location.href,f(a,t)===!1||(!!m(t)||(!!h(a,t)||(e.preventDefault(),n(""+s(t.pathname)+t.search+t.hash),!1)))}}},397:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(42),r=o(396),u=t(r);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,a.navigateTo)(n)})}},398:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(120),r=t(a),u=o(43);e.onClientEntry=function(e,o){var t=o.transitionTime;n.window[u.pageTransitionTime]=t||250};var c=function(e,o){var t=new n.window.CustomEvent(u.pageTransitionEvent,{detail:{pathname:e}});n.window.dispatchEvent(t);var a=n.window[u.componentTransitionTime]||n.window[u.pageTransitionTime];n.window[u.pageTransitionExists]?setTimeout(function(){return o(!0)},a):o(!0)},s=(0,r.default)({getUserConfirmation:c});s.block(function(n){return n.pathname}),e.replaceHistory=function(){return s}}).call(e,function(){return this}())},440:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},551:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},360:function(n,e,o){o(4),n.exports=function(n){return o.e(85387309168404,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(248)})})}},358:function(n,e,o){o(4),n.exports=function(n){return o.e(0x7b62bc090b5f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(249)})})}},359:function(n,e,o){
o(4),n.exports=function(n){return o.e(73016250221158,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(250)})})}},361:function(n,e,o){o(4),n.exports=function(n){return o.e(0x9b0c46095315,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(251)})})}},362:function(n,e,o){o(4),n.exports=function(n){return o.e(1135276415346,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(252)})})}},363:function(n,e,o){o(4),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(253)})})}}});
//# sourceMappingURL=app-7cf86103ea8a124adba7.js.map