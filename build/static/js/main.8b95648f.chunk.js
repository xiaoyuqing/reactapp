(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,n){e.exports=n(59)},33:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a,r=n(0),o=n.n(r),s=n(25),i=n.n(s),c=(n(33),n(27)),u=n(9),l=n(16),h=n(17),m=n(4),S=n(5),b=n(8),p=n(6),v=n(7),d=n(2),f=n(26),y=n.n(f),O=(n(54),n(14)),j=n(12),E=n(15),T=n.n(E),g=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.className,a=void 0===n?"":n,r=e.children;return o.a.createElement("button",{onClick:t,className:a,type:"button"},r)}}]),t}(r.Component),k=n(11),K={NONE:function(e){return e},TITLE:function(e){return Object(k.sortBy)(e,"title")},AUTHOR:function(e){return Object(k.sortBy)(e,"author")},COMMENTS:function(e){return Object(k.sortBy)(e,"num_comments").reverse()},POINTS:function(e){return Object(k.sortBy)(e,"points").reverse()}},N=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e))).state={sortKey:"NONE",isSortReverse:!1},n.onSort=n.onSort.bind(Object(d.a)(Object(d.a)(n))),n}return Object(v.a)(t,e),Object(S.a)(t,[{key:"onSort",value:function(e){var t=this.state.sortKey===e&&!this.state.isSortReverse;this.setState({sortKey:e,isSortReverse:t})}},{key:"render",value:function(){var e=this.props,t=e.list,n=e.onDismiss,a=this.state,r=a.sortKey,s=a.isSortReverse,i=K[r](t),c=s?i.reverse():i;return o.a.createElement("div",{className:"table"},o.a.createElement("div",{className:"table-header"},o.a.createElement("span",{style:{width:"40%"}},o.a.createElement(w,{sortKey:"TITLE",onSort:this.onSort,activeSortKey:r},"Title")),o.a.createElement("span",{style:{width:"30%"}},o.a.createElement(w,{sortKey:"AUTHOR",onSort:this.onSort,activeSortKey:r},"Author")),o.a.createElement("span",{style:{width:"10%"}},o.a.createElement(w,{sortKey:"COMMENTS",onSort:this.onSort,activeSortKey:r},"Comments")),o.a.createElement("span",{style:{width:"10%"}},o.a.createElement(w,{sortKey:"POINTS",onSort:this.onSort,activeSortKey:r},"Points")),o.a.createElement("span",{style:{width:"10%"}},"Archive")),c.map(function(e){return o.a.createElement("div",{key:e.objectID,className:"table-row"},o.a.createElement("span",null,o.a.createElement("a",{href:e.url},e.title)),o.a.createElement("span",null,e.author),o.a.createElement("span",null,e.num_comments),o.a.createElement("span",null,e.points),o.a.createElement("span",null,o.a.createElement(g,{onClick:function(){return n(e.objectID)},className:"button-inline"},"Dismiss")))}))}}]),t}(r.Component),w=function(e){var t=e.sortKey,n=e.activeSortKey,a=e.onSort,r=e.children,s=T()("button-inline",{"button-active":t===n});return o.a.createElement(g,{onClick:function(){return a(t)},className:s},r)},C=N,D=function(e){function t(){return Object(m.a)(this,t),Object(b.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.input&&this.input.focus()}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.onSubmit,r=e.children;return o.a.createElement("form",{onSubmit:a},o.a.createElement("input",{type:"text",value:t,onChange:n,ref:function(e){return e}}),o.a.createElement("button",{type:"submit"},r))}}]),t}(r.Component),M="Redux",L=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(b.a)(this,Object(p.a)(t).call(this,e)))._isMounted=!1,n.state={result:null,searchKey:"",searchTerm:M,error:null,isLoading:!1,sortKey:"NONE",isSortReverse:!1},n.needsToSearchTopStories=n.needsToSearchTopStories.bind(Object(d.a)(Object(d.a)(n))),n.setSearchTopStories=n.setSearchTopStories.bind(Object(d.a)(Object(d.a)(n))),n.fetchSearchTopStories=n.fetchSearchTopStories.bind(Object(d.a)(Object(d.a)(n))),n.onSearchChange=n.onSearchChange.bind(Object(d.a)(Object(d.a)(n))),n.onSearchSubmit=n.onSearchSubmit.bind(Object(d.a)(Object(d.a)(n))),n.onDismiss=n.onDismiss.bind(Object(d.a)(Object(d.a)(n))),n}return Object(v.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.state.searchTerm;this.setState({searchKey:e}),this.fetchSearchTopStories(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"needsToSearchTopStories",value:function(e){return!this.state.results[e]}},{key:"fetchSearchTopStories",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.setState({isLoading:!0}),y()("".concat("https://hn.algolia.com/api/v1").concat("/search","?").concat("query=").concat(e,"&").concat("page=").concat(n,"&").concat("hitsPerPage=").concat("100")).then(function(e){t._isMounted&&t.setSearchTopStories(e.data),t.setState({isLoading:!1})}).catch(function(e){return t._isMounted&&t.setState({error:e})})}},{key:"setSearchTopStories",value:function(e){var t=e.hits,n=e.page;this.setState(function(e){var a=e.searchKey,r=e.results,o=r&&r[a]?r[a].hits:[],s=Object(h.a)(o).concat(Object(h.a)(t));return{results:Object(l.a)({},r,Object(u.a)({},a,{hits:s,page:n})),isLoading:!1}})}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"onSearchSubmit",value:function(e){var t=this.state.searchTerm;this.setState({searchKey:t}),this.needsToSearchTopStories(t)&&this.fetchSearchTopStories(t),this.fetchSearchTopStories(t),e.preventDefault()}},{key:"onDismiss",value:function(e){var t=this.state,n=t.searchKey,a=t.results,r=a[n],o=r.hits,s=r.page,i=o.filter(function(t){return t.objectID!==e});this.setState({results:Object(l.a)({},a,Object(u.a)({},n,{hits:i,page:s}))})}},{key:"render",value:function(){var e=this,t=this.state,n=t.searchTerm,a=t.results,r=t.searchKey,s=t.error,i=t.isLoading,c=t.sortKey,u=t.isSortReverse,l=a&&a[r]&&a[r].page||0,h=a&&a[r]&&a[r].hits||[];return o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"interactions"},o.a.createElement(D,{value:n,onChange:this.onSearchChange,onSubmit:this.onSearchSubmit},"Search")),s?o.a.createElement("div",{className:"interactions"},o.a.createElement("p",null,"Something went wrong.")):o.a.createElement(C,{list:h,sortKey:c,isSortReverse:u,onSort:this.onSort,onDismiss:this.onDismiss}),o.a.createElement("div",{className:"interactions"},o.a.createElement(I,{isLoading:i,onClick:function(){return e.fetchSearchTopStories(r,l+1)}},"More")))}}]),t}(r.Component),R=function(){return o.a.createElement("div",null,o.a.createElement(O.a,{icon:j.a}))},I=(a=g,function(e){var t=e.isLoading,n=Object(c.a)(e,["isLoading"]);return t?o.a.createElement(R,null):o.a.createElement(a,n)}),_=L;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(10).b.add(j.b),i.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.8b95648f.chunk.js.map