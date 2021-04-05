define("bitbucket/internal/feature/settings/hooks/components/hooks-table","exports @atlassian/aui classnames jquery lodash react bitbucket/util/state bitbucket/internal/bbui/aui-react/avatar bitbucket/internal/bbui/aui-react/toggle-button bitbucket/internal/enums bitbucket/internal/model/scope-type bitbucket/internal/widget/icons/icons ../hook-type ./inherit-toggle".split(" "),function(f,c,y,z,q,t,A,u,B,C,m,D,n,p){Object.defineProperty(f,"__esModule",{value:!0});f.HookRow=void 0;var v=babelHelpers.interopRequireDefault(y),
E=babelHelpers.interopRequireDefault(z),a=babelHelpers.interopRequireDefault(t),F=babelHelpers.interopRequireDefault(A),G=babelHelpers.interopRequireDefault(B),H=babelHelpers.interopRequireDefault(p),l,w=p.toggleStatus.ENABLED,I=p.toggleStatus.DISABLED,J=(l={},babelHelpers.defineProperty(l,m.PROJECT,function(a){return(0,n.isMergeCheck)(a)?c.I18n.getText("bitbucket.web.merge.checks.invalid.for.project.scope"):c.I18n.getText("bitbucket.web.hooks.invalid.for.project.scope")}),babelHelpers.defineProperty(l,
m.REPOSITORY,function(a){return(0,n.isMergeCheck)(a)?c.I18n.getText("bitbucket.web.merge.checks.invalid.for.repository.scope"):c.I18n.getText("bitbucket.web.hooks.invalid.for.repository.scope")}),l),K=f.HookRow=function(d){function g(){var a,b,e,c;babelHelpers.classCallCheck(this,g);for(var d=arguments.length,h=Array(d),k=0;k<d;k++)h[k]=arguments[k];return c=(b=(e=babelHelpers.possibleConstructorReturn(this,(a=g.__proto__||Object.getPrototypeOf(g)).call.apply(a,[this].concat(h))),e),e.onEdit=function(){var a=
e.props,b=a.hook;(a=a.onEdit)&&a(b)},e.onToggle=function(a){var b=e.props,c=b.hook;(b=b.onEnable)&&b(c,a)},e.onChange=function(a){var b=e.props,c=b.hook,d=b.onEnable;b=b.onInherit;!d||a!==w&&a!==I?b&&b(c):d(c,a===w)},b),babelHelpers.possibleConstructorReturn(e,c)}babelHelpers.inherits(g,d);babelHelpers.createClass(g,[{key:"componentDidMount",value:function(){(0,E.default)(this.row).tooltip({gravity:"e"})}},{key:"render",value:function(){var d=this,b=this.props,e=b.currentScope;b=b.hook;var g=b.avatarUrl,
x=b.busy,h=b.details,k=b.enabled,f=b.scope,l=h.configFormKey,n=h.description,p=h.name;h=h.scopeTypes;var r=!(0,q.includes)(h,e.type);return a.default.createElement("tr",{ref:function(a){d.row=a},className:(0,v.default)({disabled:r}),title:r?J[e.type](b):void 0},a.default.createElement("td",{className:"hook-avatar-cell"},a.default.createElement(u.Avatar,{avatarSrc:g,size:u.AvatarTShirtSize.LARGE})),a.default.createElement("td",{className:"hook-summary-cell"},a.default.createElement("h4",null,p),a.default.createElement("p",
null,n)),a.default.createElement("td",{className:"hook-edit-cell"},l&&k&&f.type===e.type?a.default.createElement("button",{className:"aui-button aui-button-subtle",onClick:this.onEdit,title:c.I18n.getText("bitbucket.web.hooks.edit.tooltip",b.details.name)},a.default.createElement(D.EditFilledIcon,null)):null),a.default.createElement("td",{className:"hook-toggle-cell"},e.type===m.REPOSITORY&&F.default.getProject().type!==C.ProjectType.PERSONAL?a.default.createElement(H.default,{busy:x,canInherit:(0,
q.includes)(h,m.PROJECT),disabled:r,enabled:k,inherited:f.type===m.PROJECT,onChange:this.onChange}):a.default.createElement(G.default,{busy:x,checked:k,disabled:r,label:k?c.I18n.getText("bitbucket.web.hooks.toggle.label.enabled"):c.I18n.getText("bitbucket.web.hooks.toggle.label.disabled"),"tooltip-on":c.I18n.getText("bitbucket.web.hooks.toggle.tooltip.on"),"tooltip-off":c.I18n.getText("bitbucket.web.hooks.toggle.tooltip.off"),onToggle:this.onToggle})))}}]);return g}(t.Component);f.default=function(d){var g=
d.currentScope,f=d.hooks,b=d.onEdit,e=d.onEnable,l=d.onInherit;d=d.type;f=(0,q.sortBy)(f,function(a){return!(0,q.includes)(a.details.scopeTypes,g.type)});return a.default.createElement("table",{className:(0,v.default)("aui table","hooks-table","hooks-table-"+d.toLowerCase().replace("_","-"))},a.default.createElement("tbody",null,f.length?f.map(function(c){return a.default.createElement(K,{currentScope:g,hook:c,key:c.details.key,onEdit:b,onEnable:e,onInherit:l})}):a.default.createElement("tr",{className:"no-hooks-message"},
a.default.createElement("td",null,d===n.PRE_PULL_REQUEST_MERGE?c.I18n.getText("bitbucket.web.merge.checks.table.empty"):c.I18n.getText("bitbucket.web.hooks.table.empty")))))}});