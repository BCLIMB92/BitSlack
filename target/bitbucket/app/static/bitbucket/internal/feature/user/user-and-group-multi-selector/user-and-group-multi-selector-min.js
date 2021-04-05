define("bitbucket/internal/feature/user/user-and-group-multi-selector/user-and-group-multi-selector","module exports @atlassian/aui jquery lodash bitbucket/internal/feature/user/group-multi-selector/group-multi-selector bitbucket/internal/feature/user/user-multi-selector/user-multi-selector bitbucket/internal/util/promise bitbucket/internal/widget/searchable-multi-selector/searchable-multi-selector".split(" "),function(u,l,d,v,w,x,e,y,z){function m(){return p(0<arguments.length&&void 0!==arguments[0]?
arguments[0]:{},function(a,b){return g.default.map(a,q(A(b)))})}function r(a,b){b=h.default.extend(!0,{},this.defaults,b);b.initialItems=m(b.initialItems);b.excludedItems=m(b.excludedItems);if(!b.dataSource){var c=g.default.map(b.urls,function(a,c){return{type:c,dataSource:new B(a,b.urlParams[c])}});b.dataSource=new n(b.typeToGenerateText,c)}f.default.call(this,a,h.default.extend(!0,{},b,{selectionTemplate:function(a){return b.typeToSelectionTemplate[a.type](a.entity)},resultTemplate:function(a){return b.typeToResultTemplate[a.type](a.entity)},
generateId:function(a){return a.type+":"+b.typeToGenerateId[a.type](a.entity)},generateText:function(a){return b.typeToGenerateText[a.type](a.entity)}}))}function n(a,b){this.typeToGenerateText=a;this.dataSources=b}Object.defineProperty(l,"__esModule",{value:!0});var k=babelHelpers.interopRequireDefault(d),h=babelHelpers.interopRequireDefault(v),g=babelHelpers.interopRequireDefault(w);d=babelHelpers.interopRequireDefault(x);e=babelHelpers.interopRequireDefault(e);var t=babelHelpers.interopRequireDefault(y),
f=babelHelpers.interopRequireDefault(z),B=f.default.PagedDataSource,p=function(a,b){return Array.prototype.concat.apply([],g.default.map(a,b))},A=function(a){return a.lastIndexOf("s")===a.length-1?a.substring(0,a.length-1):a},q=function(a){return function(b){return{type:a,entity:b}}};h.default.extend(!0,r.prototype,f.default.prototype,{defaults:{initialItems:{user:[],group:[]},excludedItems:{user:[],group:[]},urls:{user:e.default.prototype.defaults.url,group:d.default.prototype.defaults.url},urlParams:{user:e.default.prototype.defaults.urlParams,
group:d.default.prototype.defaults.urlParams},hasAvatar:!0,typeToGenerateId:{user:e.default.prototype.defaults.generateId,group:d.default.prototype.defaults.generateId},typeToGenerateText:{user:e.default.prototype.defaults.generateText,group:d.default.prototype.defaults.generateText},typeToResultTemplate:{user:e.default.prototype.defaults.resultTemplate,group:d.default.prototype.defaults.resultTemplate},typeToSelectionTemplate:{user:e.default.prototype.defaults.selectionTemplate,group:d.default.prototype.defaults.selectionTemplate},
inputTooShortTemplate:function(){return k.default.escapeHtml(k.default.I18n.getText("bitbucket.web.user.and.group.multi.selector.help"))},noMatchesTemplate:function(){return k.default.escapeHtml(k.default.I18n.getText("bitbucket.web.user.and.group.multi.selector.no.match"))}},getSelectedItems:function(){return g.default.reduce(f.default.prototype.getSelectedItems.call(this),function(a,b){var c=b.type+"s";(a[c]=a[c]||[]).push(b.entity);return a},{})},setSelectedItems:function(a){f.default.prototype.setSelectedItems.call(this,
m(a))},clearSelectedItems:function(){return this.setSelectedItems({})}});var C=h.default.Deferred().resolve({isLastPage:!0,values:[]}),D=function(a){return function(b,c){b=a.typeToGenerateText[b.type](b.entity);c=a.typeToGenerateText[c.type](c.entity);return b.toLowerCase().localeCompare(c.toLowerCase())}};n.prototype.clear=function(){this.dataSources.forEach(function(a){a.atEnd=!1;a.dataSource.clear()})};n.prototype.nextPage=function(a){var b=this.dataSources.map(function(b){return b.atEnd?C:b.dataSource.nextPage(a).then(function(a){b.atEnd=
a.isLastPage;a.values=a.values.map(q(b.type));return a})});b=t.default.reduce.apply(t.default,babelHelpers.toConsumableArray(b));var c=D(this);return b.then(function(){return{values:p(arguments,function(a){return a.values}).sort(c),isLastPage:[].concat(Array.prototype.slice.call(arguments)).every(function(a){return a.isLastPage})}}).promise(b)};l.default=r;u.exports=l["default"]});