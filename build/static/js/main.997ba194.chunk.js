(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,a){e.exports=a(300)},171:function(e,t,a){},173:function(e,t,a){},300:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(40),l=a.n(o),c=(a(168),a(171),a(131)),i=a(132),s=a(133),d=a(151),u=a(134),h=a(152),m=a(309),f=a(312),p=a(313),g=a(310),w=a(311),b="fa6402c858de785713f76ff563ad5fd92a999c81e10212ee67554f84973b737686fbb13655b81184c536d6c286d4e009e4d96d7d02bd88aa73922f030a55da27",v=function(e,t){for(var a=Math.floor(b.length/3),n=e.length,r=t.length,o=Math.max(a,n,r),l="",c=0;c<=o;c++){for(var i=0,s=0;s<=3;s++)b[s+3*c]&&(i+=b[s+3*c].charCodeAt());e[c]&&(i+=e[c].charCodeAt()),t[c]&&(i+=t[c].charCodeAt()),l+=String.fromCharCode(i%93+33)}for(var d=l,u=0;u<d.length;u++)C(u)&&(l=d.substring(0,u)+'<>,/23?;47":5][{6}-+=_|*-+`1890'[n%u]+d.substring(u,t.length));return l},C=function(e){for(var t=2,a=Math.sqrt(e);t<=a;t++)if(e%t===0)return!1;return 1!==e&&0!==e},E=(a(173),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handleInputChange=function(e,t){var n=t.name,r=t.value;a.setState(Object(c.a)({},n,r))},a.handleSubmit=function(){a.setState({pswdGen:v(a.state.site.toUpperCase(),a.state.pswd)},function(){var e=document.createRange();e.selectNodeContents(a.textArea);var t=window.getSelection();t.removeAllRanges(),t.addRange(e),document.execCommand("copy"),t.removeAllRanges()})},a.state={site:"",pswd:"",pswdGen:"hi"},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(m.a,{textAlign:"center"},r.a.createElement(f.a.Column,{width:16},r.a.createElement(p.a,{attached:"top",textAlign:"left"},"pswd"),r.a.createElement(p.a,{size:"big",attached:!0,textAlign:"left"},r.a.createElement(g.a,null,r.a.createElement(g.a.Field,null,r.a.createElement("label",null,"Site name(in CAPITAL letters)"),r.a.createElement(g.a.Input,{name:"site",onChange:this.handleInputChange,value:this.state.site.toUpperCase(),autoComplete:"off"})),r.a.createElement(g.a.Field,null,r.a.createElement("label",null,"Secret Password"),r.a.createElement(g.a.Input,{name:"pswd",type:"password",onChange:this.handleInputChange,value:this.state.pswd,autoComplete:"off"})))),r.a.createElement(p.a,{size:"big",attached:"bottom",textAlign:"right"},r.a.createElement(w.a,{content:"Generate",basic:!0,positive:!0,icon:"unlock alternate",onClick:this.handleSubmit})),r.a.createElement("code",{ref:function(t){return e.textArea=t},className:"code"},this.state.pswdGen))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[163,2,1]]]);
//# sourceMappingURL=main.997ba194.chunk.js.map