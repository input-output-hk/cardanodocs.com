webpackJsonp([85387309168404],{136:function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function r(e,t){return t={exports:{}},e(t,t.exports),t.exports}function a(e){return function(){return e}}function i(e,t,n,o,r,a,i,c){if(f(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,r,a,i,c],u=0;l=new Error(t.replace(/%s/g,function(){return s[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}function c(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function l(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var s=o(n(3)),u=function(){};u.thatReturns=a,u.thatReturnsFalse=a(!1),u.thatReturnsTrue=a(!0),u.thatReturnsNull=a(null),u.thatReturnsThis=function(){return this},u.thatReturnsArgument=function(e){return e};var p=u,f=function(e){},d=i,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,y=(l()?Object.assign:function(e,t){for(var n,o,r=c(e),a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var i in n)m.call(n,i)&&(r[i]=n[i]);if(h){o=h(n);for(var l=0;l<o.length;l++)g.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r},"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"),b=y,v=function(){function e(e,t,n,o,r,a){a!==b&&d(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=p,n.PropTypes=n,n},w=r(function(e){e.exports=v()}),E="production",x=function(e,t,n,o,r,a,i,c){if("production"!==E&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,r,a,i,c],u=0;l=new Error(t.replace(/%s/g,function(){return s[u++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}},M=x,O=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},j=O,S=function(e){var t=/[height|width]$/;return t.test(e)},T=function(e){var t="",n=Object.keys(e);return n.forEach(function(o,r){var a=e[o];o=j(o),S(o)&&"number"==typeof a&&(a+="px"),t+=a===!0?o:a===!1?"not "+o:"("+o+": "+a+")",r<n.length-1&&(t+=" and ")}),t},k=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach(function(n,o){t+=T(n),o<e.length-1&&(t+=", ")}),t):T(e)},C=k,_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},N=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},D=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},P=function(e){function t(){var n,o,r;L(this,t);for(var a=arguments.length,i=Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=o=D(this,e.call.apply(e,[this].concat(i))),o.state={matches:o.props.defaultMatches},o.updateMatches=function(){return o.setState({matches:o.mediaQueryList.matches})},r=n,D(o,r)}return N(t,e),t.prototype.componentWillMount=function(){if("object"===("undefined"==typeof window?"undefined":_(window))){var e=this.props.targetWindow||window;M("function"==typeof e.matchMedia,"<Media targetWindow> does not support `matchMedia`.");var t=this.props.query;"string"!=typeof t&&(t=C(t)),this.mediaQueryList=e.matchMedia(t),this.mediaQueryList.addListener(this.updateMatches),this.updateMatches()}},t.prototype.componentWillUnmount=function(){this.mediaQueryList.removeListener(this.updateMatches)},t.prototype.render=function e(){var t=this.props,n=t.children,e=t.render,o=this.state.matches;return e?o?e():null:n?"function"==typeof n?n(o):(!Array.isArray(n)||n.length)&&o?s.Children.only(n):null:null},t}(s.Component);P.propTypes={defaultMatches:w.bool,query:w.oneOfType([w.string,w.object,w.arrayOf(w.object.isRequired)]).isRequired,render:w.func,children:w.oneOfType([w.node,w.func]),targetWindow:w.object},P.defaultProps={defaultMatches:!0},e.exports=P},61:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDcuNCA0MDcuNCI+CiAgPHBhdGggZD0iTTExMi44IDBMOTEuNiAyMS4ybDE4MS45IDE4Mi41TDkxLjYgMzg2LjNsMjEuMiAyMS4yIDIwMy4xLTIwMy43TDExMi44IDB6IiBmaWxsPSIjNzA5Y2YwIi8+Cjwvc3ZnPgo="},142:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDcuNCA0MDcuNCI+CiAgPHBhdGggZD0iTTExMi44IDBMOTEuNiAyMS4ybDE4MS45IDE4Mi41TDkxLjYgMzg2LjNsMjEuMiAyMS4yIDIwMy4xLTIwMy43TDExMi44IDB6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo="},23:function(e,t){"use strict";e.exports={$white:"rgba(255, 255, 255, 0.8)",$overlayColor:"rgba(255, 255, 255, 0.1)",$gray100:"#f8f9fa",$gray200:"#ebebeb",$gray300:"#dee2e6",$gray400:"#ced4da",$gray500:"#adb5bd",$gray600:"#999",$gray700:"#444",$gray800:"#303030",$gray900:"#222",$black:"#000",$teal:"#1fc1c3",$blue:"#1fc1c3",$indigo:"#6610f2",$purple:"#709cf0",$pink:"#e83e8c",$red:"#eb2256",$orange:"#fd7e14",$yellow:"#f0ad4e",$green:"#2cbb69",$cyan:"rgb(89, 185, 216)",$primary:"#1fc1c3",$secondary:"#709cf0",$success:"#2cbb69",$info:"rgb(89, 185, 216)",$warning:"#f0ad4e",$danger:"#eb2256",$light:"#303030",$dark:"#121326"}},46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){return e.raw=t,e}t.__esModule=!0;var l=c(["\n  .nav-collapse {\n    transition: max-height 0.3s ease-out;\n    overflow: hidden;\n    margin-bottom: 0.25rem;\n  }\n  .nav-collapse.closed {\n    max-height:0 !important;\n  }\n  .nav-collapse.active {\n    max-height: auto;\n  }\n  h4 {\n    cursor: pointer;\n    margin: 0 0 0.25rem 0;\n    position: relative;\n    &:after {\n      transition: all 0.25s ease-out;\n      content: none;\n      background: url(",") no-repeat 100% 25%;\n      position: absolute;\n      top: 0.2rem;\n      right: -15px;\n      height: 12px;\n      width: 12px;\n    }\n  }\n  h4.open {\n    &:after {\n      transform: rotate(90deg);\n    }\n  }\n"],["\n  .nav-collapse {\n    transition: max-height 0.3s ease-out;\n    overflow: hidden;\n    margin-bottom: 0.25rem;\n  }\n  .nav-collapse.closed {\n    max-height:0 !important;\n  }\n  .nav-collapse.active {\n    max-height: auto;\n  }\n  h4 {\n    cursor: pointer;\n    margin: 0 0 0.25rem 0;\n    position: relative;\n    &:after {\n      transition: all 0.25s ease-out;\n      content: none;\n      background: url(",") no-repeat 100% 25%;\n      position: absolute;\n      top: 0.2rem;\n      right: -15px;\n      height: 12px;\n      width: 12px;\n    }\n  }\n  h4.open {\n    &:after {\n      transform: rotate(90deg);\n    }\n  }\n"]),s=c(["\n  &.active {\n    border-right: 2px solid ","\n  }\n  a {\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    span {\n      margin:0.1rem 0 0.1rem 0.5rem;\n      display:inline-block;\n    }\n  }\n"],["\n  &.active {\n    border-right: 2px solid ","\n  }\n  a {\n    color: ",";\n    &:hover {\n      color: ",";\n    }\n    span {\n      margin:0.1rem 0 0.1rem 0.5rem;\n      display:inline-block;\n    }\n  }\n"]),u=n(3),p=o(u),f=n(29),d=n(55),h=o(d),m=n(14),g=o(m),y=n(11),b=n(64),v=n(23),w=o(v),E=n(61),x=o(E),M="",O=g.default.div(l,x.default),j=g.default.li(s,w.default.$purple,w.default.$white,w.default.$white),S=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.state={toggleOpen:!0},o.handleDropdown=o.handleDropdown.bind(o),o.handleLinkChange=o.handleLinkChange.bind(o),o.activeSideNavStates=o.activeSideNavStates.bind(o),o.removeDashes=o.removeDashes.bind(o),o.addActiveClass=o.addActiveClass.bind(o),o.navigate=o.navigate.bind(o),o}return i(t,e),t.prototype.handleDropdown=function(){this.setState(function(e){return{toggleOpen:!e.toggleOpen}})},t.prototype.handleLinkChange=function(){},t.prototype.setHeight=function(e){return this.myNavWrap.style.maxHeight=e+"px"},t.prototype.removeDashes=function(e){return e.replace("-"," ")},t.prototype.addActiveClass=function(e,t){(0,h.default)(e).addClass(t)},t.prototype.activeSideNavStates=function(){var e=this,t=(0,b.cleanPath)(location.pathname);return(0,h.default)(".cd-sidebar ul li").each(function(n,o){t=e.removeDashes(t).toLowerCase(),(0,h.default)(o).text().toLowerCase()===t&&e.addActiveClass(o,"active")})},t.prototype.navigate=function(e,t){e.preventDefault(),(0,f.navigateTo)(t)},t.prototype.componentDidMount=function(){var e=this;setTimeout(function(){e.activeSideNavStates()},50)},t.prototype.componentDidUpdate=function(){M=this.myNav.offsetHeight,this.setHeight(M)},t.prototype.render=function(){var e=this,t=this.props,n=t.postList;return p.default.createElement("div",null,p.default.createElement(O,{className:"collapse-nav-component"},p.default.createElement("h4",{onClick:this.handleDropdown,className:"mob-text-center navLink "+(this.state.toggleOpen?"open":"closed")},t.section),p.default.createElement("div",{className:"nav-collapse open",ref:function(t){return e.myNavWrap=t}},p.default.createElement("ul",{className:"list-group list-unstyled",id:t.id,ref:function(t){return e.myNav=t}},n.edges.map(function(n,o){return n.node.frontmatter.language===y.language&&"docs"===n.node.frontmatter.label&&n.node.frontmatter.group===t.group&&p.default.createElement(j,{className:"mob-text-center",key:n.node.id,style:{listStyleType:"none"},ref:function(t){return e.myLi=t}},p.default.createElement("a",{href:"/",onClick:function(t){return e.navigate(t,n.node.frontmatter.path)},role:"link",key:n.node.id},p.default.createElement("span",null,n.node.frontmatter.doc_title)))})))))},t}(p.default.Component);t.default=S,e.exports=t.default},47:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){return e.raw=t,e}t.__esModule=!0;var l=c(["\n  &.stickyNav {\n    position: -webkit-sticky;\n    position: sticky;\n    top:0;\n  }\n"],["\n  &.stickyNav {\n    position: -webkit-sticky;\n    position: sticky;\n    top:0;\n  }\n"]),s=n(3),u=o(s),p=n(14),f=o(p),d=n(46),h=o(d),m=n(11),g=0,y=!1,b=f.default.div(l),v=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.handleScroll=o.handleScroll.bind(o),o.navScrollPosition=o.navScrollPosition.bind(o),o}return i(t,e),t.prototype.navScrollPosition=function(e){e>670?document.querySelector(".navWrap").classList.add("stickyNav"):document.querySelector(".navWrap").classList.remove("stickyNav")},t.prototype.handleScroll=function(){var e=this;g=window.scrollY,y||(window.requestAnimationFrame(function(){e.navScrollPosition(g),y=!y}),y=!y)},t.prototype.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},t.prototype.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},t.prototype.render=function(){var e=this.props,t=e.postList;return u.default.createElement(b,{className:"navWrap"},u.default.createElement(h.default,{postList:t,section:"en"===m.language?"Introduction":"介绍",group:"base",active:!0}),u.default.createElement(h.default,{postList:t,section:"en"===m.language?"Cardano":"卡尔达诺概述",group:"cardano"}),u.default.createElement(h.default,{postList:t,section:"en"===m.language?"Timeline":"Cardano 时间线",group:"timeline"}),u.default.createElement(h.default,{postList:t,section:"en"===m.language?"Technical":"技术细节",group:"technical"}),u.default.createElement(h.default,{postList:t,section:"en"===m.language?"For Contributors":"对于贡献者",group:"for-contributors"}))},t}(u.default.Component);t.default=v,e.exports=t.default},236:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){return e.raw=t,e}t.__esModule=!0,t.postQuery=void 0;var l=c(["\n  overflow:hidden;\n  &.toggleShut {\n    max-height: 0\n  }\n"],["\n  overflow:hidden;\n  &.toggleShut {\n    max-height: 0\n  }\n"]),s=c(["\n  width: calc(100% - 1rem);\n  margin-bottom:1rem;\n  span {\n    position:relative;\n    &:after {\n      transition: all 0.25s ease-out;\n      content: '';\n      background: url(",") no-repeat 100% 25%;\n      position: absolute;\n      top: calc(50% - 6px);\n      right: -1rem;\n      height: 12px;\n      width: 12px;\n    }\n  }\n  &.open {\n    span {\n      &:after {\n        transform: rotate(90deg);\n      }\n    }\n  }\n"],["\n  width: calc(100% - 1rem);\n  margin-bottom:1rem;\n  span {\n    position:relative;\n    &:after {\n      transition: all 0.25s ease-out;\n      content: '';\n      background: url(",") no-repeat 100% 25%;\n      position: absolute;\n      top: calc(50% - 6px);\n      right: -1rem;\n      height: 12px;\n      width: 12px;\n    }\n  }\n  &.open {\n    span {\n      &:after {\n        transform: rotate(90deg);\n      }\n    }\n  }\n"]),u=n(3),p=o(u),f=n(136),d=o(f),h=n(14),m=o(h),g=n(47),y=o(g),b=n(142),v=o(b),w=n(11),E=m.default.div(l),x=m.default.button(s,v.default),M=function(e){function t(n){r(this,t);var o=a(this,e.call(this,n));return o.state={toggleViz:!1},o.handleToggle=o.handleToggle.bind(o),o}return i(t,e),t.prototype.handleToggle=function(){this.setState(function(e){return{toggleViz:!e.toggleViz}})},t.prototype.render=function(){var e=this,t=void 0;this.props.data.markdownRemark&&(t=this.props.data.markdownRemark);var n=this.props.data.allMarkdownRemark;return p.default.createElement("div",{className:"row"},p.default.createElement("div",{className:"col-sm-6 cd-sidebar"},p.default.createElement(d.default,{query:"(max-width: 719px)"},function(t){return t?p.default.createElement("div",null,p.default.createElement(x,{className:"btn btn-primary "+(e.state.toggleViz?"open":""),onClick:e.handleToggle},p.default.createElement("span",null,"en"===w.language?"Documentation":"文档")),p.default.createElement(E,{className:e.state.toggleViz?"":"toggleShut"},p.default.createElement(y.default,{postList:n}))):p.default.createElement(y.default,{postList:n})})),t&&p.default.createElement("div",{className:"col-sm-18 doc-content"},p.default.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))},t}(p.default.Component);t.postQuery="** extracted graphql fragment **";t.default=M}});
//# sourceMappingURL=component---src-pages-document-js-f956208f5eb8e73b067f.js.map