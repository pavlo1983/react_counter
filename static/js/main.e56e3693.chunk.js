(this.webpackJsonpreact_counter=this.webpackJsonpreact_counter||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(2),r=n.n(o),u=n(3),d=n(4),i=n(6),s=n(5),l=(n(12),function(t){var e=t.count,n=t.addOne,a=t.add100,o=t.increase;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Count: ".concat(e)),c.a.createElement("button",{type:"button",onClick:n},"Add one"),c.a.createElement("button",{type:"button",onClick:a},"Add 100"),c.a.createElement("button",{type:"button",onClick:o},"Increase"))}),f=function(t){Object(i.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={count:0},t.addOne=function(){t.setState((function(t){return{count:t.count+1}}))},t.add100=function(){t.setState((function(t){return{count:t.count+100}}))},t.increase=function(){t.setState(t.addOne),t.state.count%5===0&&t.setState(t.add100)},t}return Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement(l,{count:this.state.count,addOne:this.addOne,add100:this.add100,increase:this.increase})}}]),n}(c.a.Component);r.a.render(c.a.createElement(f,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e56e3693.chunk.js.map