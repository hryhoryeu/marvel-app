(this["webpackJsonpmarvel-app"]=this["webpackJsonpmarvel-app"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),s=n.n(r),i=n(2),o=n(3),l=n(5),h=n(4),d=(n(15),n(0)),u=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("name",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=(n(17),n.p+"static/media/mjolnir.61f31e18.png"),m=n(6),b=n.n(m),f=n(7),O=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=397d67250d0c0adc5966f621f65f7646",this._baseOffset=210,this.getResource=function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Couldn't fetch ".concat(t,", status: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(f.a)(b.a.mark((function e(){var n,a,c=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(n,"&").concat(t._apiKey));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(f.a)(b.a.mark((function e(n){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(n,"?").concat(t._apiKey));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,197),"..."):"There is no information about this character.",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}}},p=(n(19),function(){return Object(d.jsx)("div",{className:"spinner",children:Object(d.jsx)("div",{className:"loadingio-spinner-dual-ring-ddaanp62c8k",children:Object(d.jsxs)("div",{className:"ldio-z8sdxjne64",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{children:Object(d.jsx)("div",{})})]})})})}),v=function(){return Object(d.jsx)("h1",{children:"ERROR NOT FOUND ERROR NOT FOUND ERROR"})},_=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={char:"",loading:!0,error:!1},e.marvelService=new O,e.onCharLoaded=function(t){e.setState({char:t,loading:!1,error:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011005);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,c=a?Object(d.jsx)(v,{}):null,r=n?Object(d.jsx)(p,{}):null,s=n||a?null:Object(d.jsx)(x,{char:t});return Object(d.jsxs)("div",{className:"randomchar",children:[c,r,s,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{className:"button button__main",children:Object(d.jsx)("div",{className:"inner",onClick:this.updateChar,children:"try it"})}),Object(d.jsx)("img",{src:j,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),n}(a.Component),x=function(e){var t=e.char,n=t.name,a=t.description,c=t.thumbnail,r=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"!==c&&"http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"!==c||(i={objectFit:"unset"}),Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:i}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:n}),Object(d.jsx)("p",{className:"randomchar__descr",children:a}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:r,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"Homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},g=n(9),N=(n(20),n(21),n(22),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__skeleton",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={char:null,loading:!1,error:!1},e.marvelService=new O,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({loading:!1,error:!0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e,t){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,c=t||n||a?null:Object(d.jsx)(N,{}),r=n?Object(d.jsx)(p,{}):null,s=a?Object(d.jsx)(v,{}):null,i=n||a||!t?null:Object(d.jsx)(k,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[c,s,r,i]})}}]),n}(a.Component),k=function(e){var t=e.char,n=t.name,a=t.description,c=t.thumbnail,r=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o={objectFit:"unset"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:c,alt:n,style:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:n}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:r,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:a}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There are no comics...",i.slice(0,10).map((function(e,t){return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},y=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={charList:[],loading:!0,error:!1,newItemLoading:!1,offset:210,charEnded:!1},e.marvelService=new O,e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoading=function(){e.setState({newItemLoading:!0})},e.onCharListLoaded=function(t){var n=!1;t.length<9&&(n=!0),e.setState((function(e){var a=e.offset,c=e.charList;return{charList:[].concat(Object(g.a)(c),Object(g.a)(t)),loading:!1,newItemLoading:!1,offset:a+9,charEnded:n}}))},e.onError=function(){e.setState({error:!0,loading:!1})},e.itemRefs=[],e.setRef=function(t){e.itemRefs.push(t)},e.focusOnItem=function(t){e.itemRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemRefs[t].classList.add("char__item_selected"),e.itemRefs[t].focus()},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.onRequest()}},{key:"renderItems",value:function(e){var t=this,n=e.map((function(e,n){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===e.thumbnail&&(a={objectFit:"unset"}),Object(d.jsxs)("li",{ref:t.setRef,className:"char__item",tabIndex:0,onClick:function(){t.props.onCharSelected(e.id),t.focusOnItem(n)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(t.props.onCharSelected(e.id),t.focusOnItem(n))},children:[Object(d.jsx)("img",{src:e.thumbnail,alt:e.name,style:a}),Object(d.jsx)("div",{className:"char__name",children:e.name})]},e.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:n})}},{key:"render",value:function(){var e=this,t=this.state,n=t.charList,a=t.loading,c=t.error,r=t.newItemLoading,s=t.offset,i=t.charEnded,o=this.renderItems(n),l=c?Object(d.jsx)(v,{}):null,h=a?Object(d.jsx)(p,{}):null,u=a||c?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[l,h,u,Object(d.jsx)("button",{className:"button button__main button__long",disabled:r,style:{display:i?"none":"block"},onClick:function(){return e.onRequest(s)},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),n}(a.Component),w=n.p+"static/media/vision.067d4ae1.png",L=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={error:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e),console.log(t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)("h2",{children:"Something went wrong"}):this.props.children}}]),n}(a.Component),R=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedChar:null},e.onCharSelected=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(L,{children:Object(d.jsx)(_,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(L,{children:Object(d.jsx)(y,{onCharSelected:this.onCharSelected})}),Object(d.jsx)(L,{children:Object(d.jsx)(C,{charId:this.state.selectedChar})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:w,alt:"vision"})]})]})}}]),n}(a.Component);n(23);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.9b75ba54.chunk.js.map