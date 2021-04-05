define("bitbucket/internal/page/source/source","module exports @atlassian/aui jquery lodash bitbucket/util/navbuilder bitbucket/internal/feature/commit/commit-badge/commit-badge bitbucket/internal/feature/file-content/file-content bitbucket/internal/layout/page-scrolling-manager bitbucket/internal/model/commit-range bitbucket/internal/model/file-change bitbucket/internal/model/file-change-types bitbucket/internal/model/file-content-modes bitbucket/internal/model/page-state bitbucket/internal/model/path bitbucket/internal/model/revision bitbucket/internal/model/revision-reference bitbucket/internal/util/ajax bitbucket/internal/util/events bitbucket/internal/util/function bitbucket/internal/util/history".split(" "),
function(L,l,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,aa,ba,ca,da,ea){function F(a){return{mode:a.mode?a.mode:f.default.SOURCE,path:new g.default(a.path),headRef:new fa.default(a.headRef),untilRevision:a.untilRevision?new h.default(a.untilRevision):null,untilPath:a.untilPath?new g.default(a.untilPath):null,sincePath:a.sincePath?new g.default(a.sincePath):null,autoSincePath:a.autoSincePath||!1,explicitUntil:a.explicitUntil,useDefaultHandler:a.useDefaultHandler||!1}}function A(a){return{mode:a.mode,path:a.path.toString(),
headRef:a.headRef.toJSON(),untilRevision:a.untilRevision?a.untilRevision.toJSON():null,untilPath:a.untilPath?a.untilPath.toJSON():null,sincePath:a.sincePath?a.sincePath.toJSON():null,autoSincePath:a.autoSincePath,explicitUntil:a.explicitUntil,useDefaultHandler:a.useDefaultHandler}}function G(a){var b=a.lastIndexOf("#");return-1===b?a:a.substring(0,b)}function r(){d&&(d.abort(),d=null);!b.untilRevision||b.autoSincePath&&b.mode===f.default.DIFF?(t.reset(),b.untilRevision?d=u(b.untilPath,b.untilRevision.getRevisionReference()):
(d=u(b.path,b.headRef),d.done(function(a){b.untilRevision=a})),d.always(function(){d=null}).done(function(a){b.autoSincePath=!1;a=a&&a.getProperties()&&a.getProperties().change.srcPath;b.sincePath=a?new g.default(a):null;r()})):(ha(),ia(b.untilRevision))}function ha(){var a=b.path.toString(),m=b.untilPath||b.path,c=m.toString(),e=b.sincePath&&b.sincePath.toString();e=!(b.mode!==f.default.DIFF||!e||c===e);var d={toolbarWebFragmentLocationPrimary:"bitbucket.file-content."+b.mode+".toolbar.primary",
toolbarWebFragmentLocationSecondary:"bitbucket.file-content."+b.mode+".toolbar.secondary",followRenames:v,autoSrcPath:b.autoSincePath};a={anchor:window.location.hash.substr(1)||void 0,headPath:b.path,headRef:b.headRef,relevantContextLines:H,breadcrumbs:a!==c||void 0,changeTypeLozenge:e||void 0,useDefaultHandler:b.useDefaultHandler};a=n.default.extend(d,B.default[b.mode+"Preset"],a);var I;e&&(I=m.isSameDirectory(b.sincePath)?w.default.RENAME:w.default.MOVE);e=x.default;c=b.mode===f.default.DIFF||b.explicitUntil?
b.untilRevision:new h.default({id:b.headRef.getId(),displayId:b.headRef.getDisplayId(),author:{name:"Unknown"},authorTimestamp:NaN,parents:[],properties:{change:{srcPath:null}}});c=new y.default({untilRevision:c,sinceRevision:c.hasParents()?c.getParents()[0]:void 0});m=new e({commitRange:c,path:m,repository:k.default.getRepository(),srcPath:b.sincePath,type:I});return t.init(m,a)}function ia(a){(0,n.default)(".branch-selector-toolbar .commit-badge-container").empty().append(ja.default.create(a.toJSON(),
{filePath:k.default.getFilePath().toString(),repository:k.default.getRepository().toJSON()})).fadeIn("fast")}function p(a){var b=z.default.currentRepo();if(a.mode===f.default.DIFF){var c=new x.default({commitRange:new y.default({untilRevision:a.untilRevision}),path:a.untilPath||a.path,srcPath:a.sincePath,repository:k.default.getRepository()});b=b.diff(c,a.headRef,a.path,v?void 0:!1)}else b=b.browse().path(a.path),a.untilRevision&&a.explicitUntil&&(b=b.until(a.untilRevision.getId(),a.untilPath)),a.headRef.isDefault()||
(b=b.at(a.headRef.getId())),a.useDefaultHandler&&(b=b.withParams({useDefaultHandler:!0}));C.default.pushState(A(a),null,b.build())}function u(a,b){var d=z.default.rest().currentRepo().commits().withParams({avatarSize:bitbucket.internal.widget.avatarSizeInPx({size:"xsmall"}),followRenames:v,limit:1,path:a.toString(),until:b.getLatestCommit()});a=J.default.rest({url:d.build()});var e=a.then(function(a){return a.values[0]?new h.default(a.values[0]):J.default.rest({url:d.withParams({followRenames:!1}).build()}).then(function(a){return new h.default(a.values[0]||
{id:b.getLatestCommit(),displayId:b.getDisplayId(),author:{name:"Unknown"},authorTimestamp:NaN,parents:[],properties:{change:{srcPath:null}}})})});c.default.trigger("bitbucket.internal.page.source.requestedRevisionData");return e.promise(a)}Object.defineProperty(l,"__esModule",{value:!0});var ka=babelHelpers.interopRequireDefault(M),n=babelHelpers.interopRequireDefault(N),K=babelHelpers.interopRequireDefault(O),z=babelHelpers.interopRequireDefault(P),ja=babelHelpers.interopRequireDefault(Q),B=babelHelpers.interopRequireDefault(R),
la=babelHelpers.interopRequireDefault(S),y=babelHelpers.interopRequireDefault(T),x=babelHelpers.interopRequireDefault(U),w=babelHelpers.interopRequireDefault(V),f=babelHelpers.interopRequireDefault(W),k=babelHelpers.interopRequireDefault(X),g=babelHelpers.interopRequireDefault(Y),h=babelHelpers.interopRequireDefault(Z),fa=babelHelpers.interopRequireDefault(aa),J=babelHelpers.interopRequireDefault(ba),c=babelHelpers.interopRequireDefault(ca),ma=babelHelpers.interopRequireDefault(da),C=babelHelpers.interopRequireDefault(ea),
v,H,D,q,b,t,d=null;l.default={onReady:function(a,d,g,e,h,k,l,u,w,x,y){la.default.acceptScrollForwardingRequests();v=w;H=u;q=window.location.href;b=F({mode:f.default.DIFF===h?f.default.DIFF:f.default.SOURCE,path:a,headRef:d,untilRevision:g,untilPath:e,sincePath:y,autoSincePath:x,explicitUntil:!!z.default.parse(window.location).getQueryParamValue("until"),useDefaultHandler:"true"===z.default.parse(window.location).getQueryParamValue("useDefaultHandler")});t=new B.default(k,l,B.default.sourcePreset);
c.default.on("bitbucket.internal.history.changestate",function(a){if(a.state){a=F(a.state);var E=b.untilRevision?b.untilRevision.getId():null,d=a.untilRevision?a.untilRevision.getId():null,e=b.headRef.getId()!==a.headRef.getId();E=a.path.toString()!==b.path.toString()||e||d!==E||a.mode!==b.mode||a.autoSincePath!==b.autoSincePath||a.explicitUntil!==b.explicitUntil||a.useDefaultHandler!==b.useDefaultHandler;b=a;e&&c.default.trigger("bitbucket.internal.page.source.revisionRefChanged",null,b.headRef);
E&&r();q=window.location.href}else K.default.endsWith(G(window.location.href),G(q))||window.location.reload()});c.default.on("bitbucket.internal.feature.fileContent.optionsChanged",function(a){K.default.includes(["hideComments","hideEdiff","showWhitespaceCharacters"],a.key)||r()});c.default.on("bitbucket.internal.layout.branch.revisionRefChanged",function(a){b.headRef!==a&&p(babelHelpers.extends({},b,{headRef:a,untilPath:null,untilRevision:null,mode:f.default.SOURCE,explicitUntil:!1}))});c.default.on("bitbucket.internal.feature.*.untilRevisionChanged",
function(a,c,d){b.explicitUntil&&b.untilRevision.getId()===a.getId()||p(babelHelpers.extends({},b,{untilRevision:a,untilPath:c,sincePath:d,autoSincePath:!1,explicitUntil:!0}))});c.default.on("bitbucket.internal.feature.*.requestedModeChange",function(a){b.mode!==a&&p(babelHelpers.extends({},b,{mode:a}))});c.default.on("bitbucket.internal.feature.fileContent.useDefaultHandler",function(){p(babelHelpers.extends({},b,{useDefaultHandler:!0}))});c.default.on("bitbucket.internal.feature.fileContent.useExtendedHandler",
function(){p(babelHelpers.extends({},b,{useDefaultHandler:!1}))});c.default.on("bitbucket.internal.feature.sourceview.onError",function(a){(0,n.default)(".branch-selector-toolbar .commit-badge-container").fadeOut("fast")});c.default.on("bitbucket.internal.layout.*.urlChanged",function(a){window.location=a});c.default.on("bitbucket.internal.feature.*.urlChanged",function(a){window.location=a});c.default.on("bitbucket.internal.widget.branchselector.dialogShown",function(){D=!0});c.default.on("bitbucket.internal.widget.branchselector.dialogHidden",
function(){D=!1});(0,n.default)(window).on("hashchange",function(){q=window.location.href;C.default.replaceState(A(b),null,q);var a=window.location.hash.substr(1)||void 0;ma.default.dotX("handler.updateAnchor",a)(t);c.default.trigger("bitbucket.internal.page.source.anchorChanged",null,a)});c.default.on("bitbucket.internal.widget.keyboard-shortcuts.register-contexts",function(a){a.enableContext("sourceview");a.enableContext("diff-view")});c.default.on("bitbucket.internal.keyboard.shortcuts.requestOpenParentHandler",
function(a){(this.execute?this:ka.default.whenIType(a)).execute(function(){if(!D){var a=(0,n.default)(".breadcrumbs").find("a:last");a.length&&a.click()}})});C.default.initialState(A(b));r()}};L.exports=l["default"]});