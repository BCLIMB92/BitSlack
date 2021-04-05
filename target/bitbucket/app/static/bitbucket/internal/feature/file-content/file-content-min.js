define("bitbucket/internal/feature/file-content/file-content","module exports @atlassian/aui jquery lodash require bitbucket/feature/files/file-handlers bitbucket/util/navbuilder bitbucket/internal/bbui/ediff/ediff bitbucket/internal/feature/comments/comments bitbucket/internal/model/commit-range bitbucket/internal/model/content-tree-node-types bitbucket/internal/model/diff-type bitbucket/internal/model/file-change bitbucket/internal/model/file-change-types bitbucket/internal/model/file-content-modes bitbucket/internal/model/revision bitbucket/internal/util/deprecation bitbucket/internal/util/dom-event bitbucket/internal/util/events bitbucket/internal/util/promise".split(" "),
function(y,p,q,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q){function R(a,b){a=k.default.currentRepo().raw().path(a);b&&!b.isDefault()&&(a=a.at(b.getId()));return a.build()}function c(a,b){var e=this;this._id=b||void 0;this._containerSelector=a;this.$self=(0,f.default)("#"+this._id);l.default.on("bitbucket.internal.feature.commitselector.itemSelected",function(a){var b=a.path,d=a.srcPath;a=new S.default(a.commitJSON);this===e.untilRevisionPicker&&l.default.trigger("bitbucket.internal.feature.filecontent.untilRevisionChanged",
e,a,b,d)});this._lastInitPromise=r.default.thenAbortable(f.default.Deferred().resolve())}function v(a,b,e){for(var d="",c=0,f=0;f<b.length;f++){var m=b[f];d+=h.default.escapeHtml(a.substring(c,m.start))+'\x3cspan class\x3d"'+e+'"\x3e'+h.default.escapeHtml(a.substring(m.start,m.end))+"\x3c/span\x3e";c=m.end}c<a.length&&(d+=h.default.escapeHtml(a.substring(c)));return d}Object.defineProperty(p,"__esModule",{value:!0});var h=babelHelpers.interopRequireDefault(q),f=babelHelpers.interopRequireDefault(z),
n=babelHelpers.interopRequireDefault(A),T=babelHelpers.interopRequireDefault(B),w=babelHelpers.interopRequireDefault(C),k=babelHelpers.interopRequireDefault(D),t=babelHelpers.interopRequireDefault(E);q=babelHelpers.interopRequireDefault(F);var U=babelHelpers.interopRequireDefault(G),V=babelHelpers.interopRequireDefault(H),W=babelHelpers.interopRequireDefault(I),X=babelHelpers.interopRequireDefault(J),x=babelHelpers.interopRequireDefault(K),g=babelHelpers.interopRequireDefault(L),S=babelHelpers.interopRequireDefault(M),
Y=babelHelpers.interopRequireDefault(O),l=babelHelpers.interopRequireDefault(P),r=babelHelpers.interopRequireDefault(Q),Z=(0,N.getMessageLogger)("Custom FileHandler support for contentMode: "+g.default.DIFF,void 0,"5.16.0","6.0.0");c.commentMode=q.default.commentMode;c.diffPreset={contentMode:g.default.DIFF,untilRevisionPicker:!0,rawLink:!1,sourceLink:!1,modeToggle:!0,changeTypeLozenge:!1,changeModeLozenge:!1,breadcrumbs:!1,commentMode:c.commentMode.NONE};c.sourcePreset={contentMode:g.default.SOURCE,
untilRevisionPicker:!0,rawLink:!0,sourceLink:!1,modeToggle:!0,changeTypeLozenge:!1,changeModeLozenge:!1,breadcrumbs:!1,commentMode:c.commentMode.NONE};c.defaults={contentMode:g.default.SOURCE,untilRevisionPicker:!1,rawLink:!1,sourceLink:!1,modeToggle:!1,changeTypeLozenge:!1,changeModeLozenge:!1,fileIcon:!1,breadcrumbs:!1,scrollPaneSelector:void 0,commentMode:c.commentMode.REPLY_ONLY,pullRequestDiffLink:!1,toolbarWebFragmentLocationPrimary:null,toolbarWebFragmentLocationSecondary:null,asyncDiffModifications:!0,
attachScroll:!0,scrollStyle:"fixed",useDefaultHandler:!1};c.prototype.initToolbarItems=function(a,b,e){var d=(0,f.default)(this._containerSelector),c=b.getCommitRange().getUntilRevision();a=(0,f.default)(bitbucket.internal.feature.fileContent.main(f.default.extend({id:this._id,preloaded:!!b.getDiff(),sourceUrl:this._options.sourceUrl||this._options.modeToggle?k.default.currentRepo().browse().path(b.getPath()).at(a.getDisplayId()).until(c&&c.getId()).build():"",diffUrl:this._options.modeToggle?k.default.currentRepo().diff(b,
a,this._options.headPath,e).at(a.getDisplayId()).build():"",fileChange:b.toJSON()},this._options)));this.$self&&this.$self.remove();this.$self=a.appendTo(d);d=this.$toolbar=a.children(".file-toolbar");this.$contentView=a.children(".content-view");this._initCommands();this.$breadcrumbs=this._options.breadcrumbs?d.find(".breadcrumbs"):null;this.$changeTypeLozenge=this._options.changeTypeLozenge?d.find(".change-type-placeholder"):null;this.$changeModeLozenge=this._options.changeModeLozenge?d.find(".change-mode-placeholder"):
null;this.$viewSource=this._options.sourceLink?d.find(".source-view-link").tooltip({gravity:"ne"}):null;this._options.pullRequestDiffLink&&d.find(".pull-request-diff-outdated-lozenge").tooltip({gravity:"ne"})};c.prototype._initCommands=function(){var a=this.$contentView,b=this.$toolbar;"self"===this._options.scrollPaneSelector&&a.addClass("scroll-x");this.untilRevisionPicker&&this.untilRevisionPicker.destroy();this.untilRevisionPicker=this._options.untilRevisionPicker?new ((0,T.default)("bitbucket/internal/feature/file-content/commit-selector/commit-selector",
null))({buttonEl:b.find(".commit-selector-button"),id:"commit-selector"}):null;this.$viewRaw=this._options.rawLink?b.find(".raw-view-link"):null;this.$modeToggle=this._options.modeToggle?b.find(".mode-toggle").tooltip({gravity:"ne"}):null};c.prototype.initForContent=function(a,b){var e=this;b=b||{};var d=a.getCommitRange().getUntilRevision();this.$viewSource&&(a.getType()===x.default.DELETE||a.getNodeType()===V.default.SUBMODULE?this.$viewSource.addClass("hidden"):this.$viewSource.attr("href",k.default.currentRepo().browse().path(a.getPath()).at(d&&
d.getId()).build()));this.$viewRaw&&this.$viewRaw.attr("href",R(a.getPath(),d&&d.getRevisionReference()));this.untilRevisionPicker&&this.untilRevisionPicker.init({followRenames:b.followRenames,headRevisionReference:b.headRef,itemTemplate:bitbucket.internal.feature.fileContent.commitSelectorItemAuthor,itemTitle:function(a){return h.default.I18n.getText("bitbucket.web.file.history.revision.clicktoview",a)},itemUrl:function(a,c){var e=k.default.currentRepo(),d=a.properties&&a.properties.change;c._mode===
g.default.DIFF?e=e.diff(new X.default({commitRange:new U.default({untilRevision:a,diffType:W.default.COMMIT}),path:d&&d.path||c._path,srcPath:d&&d.srcPath||void 0}),c._headRevisionRef,c._path,!1):(a={until:a.id},d&&(d.path!==c._path.toString()&&(a.untilPath=d.path),d.srcPath?a.sincePath=d.srcPath:a.autoSincePath=!1),b.followRenames&&d||(a.autoSincePath=!1),e=e.browse().path(c._path).withParams(a));return e.build()},mode:b.contentMode,path:b.headPath,selectedCommit:d&&d.toJSON()});this.$breadcrumbs&&
this.$breadcrumbs.html(this.renderBreadCrumbs(a.getPath()));this.$changeTypeLozenge&&this._initChangeTypeLozenge(a);this.$changeModeLozenge&&(d=this.getFileChangedModeLozenge(a))&&this.$changeModeLozenge.append((0,f.default)(d).tooltip());if(this.$modeToggle)this.$modeToggle.on("click","a:not(.active,.disabled)",function(a){Y.default.openInSameTab(a)&&(a.preventDefault(),l.default.trigger("bitbucket.internal.feature.filecontent.requestedModeChange",this,(0,f.default)(this).hasClass("mode-diff")?g.default.DIFF:
g.default.SOURCE))});var c={$toolbar:this.$toolbar,$container:this.$contentView,asyncDiffModifications:this._options.asyncDiffModifications,attachScroll:this._options.attachScroll,autoResizing:this._options.autoResizing,contentMode:this._options.contentMode,commentMode:this._options.commentMode,diffUrlBuilder:this._options.diffUrlBuilder,fileChange:a.toJSON(),isExcerpt:!!this._options.isExcerpt,lineComments:this._options.lineComments,relevantContextLines:this._options.relevantContextLines,scrollStyle:this._options.scrollStyle,
anchor:b.anchor,autoSrcPath:b.autoSrcPath,commentUrlBuilder:b.commentUrlBuilder,diffViewType:b.diffViewType,useDefaultHandler:b.useDefaultHandler,diffViewOptions:this._options.diffViewOptions};a=(0,f.default)("\x3cdiv /\x3e").addClass("file-content-spinner").appendTo(this.$self);l.default.trigger("bitbucket.internal.feature.fileContent.handlerRequested",null,c);var u=w.default._handle(c).done(function(a,b){e.renderErrors(b);c.contentMode!==g.default.DIFF||Object.values(w.default.builtInHandlers).concat("lfs-diff-handler").includes(a.handlerID)||
Z();e.handler=a;e.$self.addClass(a.extraClasses);a={handlerID:a.handlerID,displayType:e._options.contentMode,fileChange:c.fileChange,commentMode:e._options.commentMode};e._options.toolbarWebFragmentLocationPrimary&&e.$toolbar.children(".primary").append(bitbucket.internal.widget.webFragmentButtons({location:e._options.toolbarWebFragmentLocationPrimary,context:a}));e._options.toolbarWebFragmentLocationSecondary&&e.$toolbar.children(".secondary").prepend(bitbucket.internal.widget.webFragmentButtons({location:e._options.toolbarWebFragmentLocationSecondary,
context:a,isReverse:!0}))});return r.default.spinner(a,u,"large",{zIndex:10}).then(function(a){var b=f.default.Deferred();n.default.defer(function(){l.default.trigger("bitbucket.internal.feature.fileContent.requestHandled",null,c,a);b.resolve(a)});return b.promise(u)})};c.prototype.renderErrors=function(a){this.$self.parent().find(".file-content-errors").remove();0<a.length&&this.$self.before(bitbucket.internal.feature.fileContent.errors({errors:n.default.map(a,function(a){return a.message||a})}))};
c.prototype.toggleToolbarDisable=function(a){this.$self.find(".file-toolbar .aui-button").toggleClass("disabled",a).prop("disabled",a).attr("aria-disabled",a)};c.prototype.renderBreadCrumbs=function(a){a=n.default.map(a.getComponents(),function(a){return{text:a}});return bitbucket.internal.widget.breadcrumbs.crumbs({pathComponents:a,primaryLink:"COMMIT"!==this._options.diffType||this._options.pullRequestDiffCurrent?this._options.pullRequestDiffLinkUrl:null})};c.prototype.getFileChangedModeLozenge=
function(a){var b=a.getSrcExecutable();a=a.getExecutable();var c=null;null==b&&!0===a||!1===b&&!0===a?c=!0:!0===b&&!1===a&&(c=!1);return null!==c?(0,f.default)(bitbucket.internal.feature.fileContent.fileChangeModeLozenge({added:c})):null};c.prototype.init=function(a,b){a=this._initInternal.bind(this,a,b);return this._lastInitPromise=this.reset().thenAbortable(a,a)};c.prototype._initInternal=function(a,b){b=this._options=f.default.extend({},c.defaults,b);var e=a.getCommitRange(),d=b.headRef||e.getUntilRevision()&&
e.getUntilRevision().getRevisionReference();if(b.changeTypeLozenge&&!a.getType())throw Error("Change type is required to show the change type lozenge.");if(!e.getUntilRevision()&&(b.sourceLink||b.rawLink||b.untilRevisionPicker))throw Error("Revision info is required to show a link to the source or raw file, or a revision picker.");this.initToolbarItems(d,a,b.autoSrcPath);return this.initForContent(a,{headPath:b.headPath||a.getPath(),headRef:d,anchor:b.anchor,contentMode:b.contentMode,followRenames:b.followRenames,
autoSrcPath:b.autoSrcPath,commentUrlBuilder:b.commentUrlBuilder,diffViewType:b.diffViewType,useDefaultHandler:b.useDefaultHandler})};c.prototype.reset=function(){var a=this;this._lastInitPromise.abort();var b=function(){return a._resetInternal()};return r.default.thenAbortable(this._lastInitPromise.then(b,b))};c.prototype._resetInternal=function(){this.handler&&(this.handler.extraClasses&&this.$self.removeClass(this.handler.extraClasses),n.default.isFunction(this.handler.destroy)&&this.handler.destroy(),
delete this.handler);return f.default.Deferred().resolve()};c.prototype.destroy=function(){this.reset()};c.prototype._initChangeTypeLozenge=function(a){var b=a.getPath(),c=a.getSrcPath()||b;if(a.getType()===x.default.RENAME){var d=h.default.escapeHtml(c.getName());var g=h.default.escapeHtml(b.toString())}else c&&(d=c.toString(),b=b.toString(),g=t.default.diff(t.default.tokenizeString(d),t.default.tokenizeString(b)),d=v(d,g.originalRegions,"deleted"),g=v(b,g.revisedRegions,"added"));this.$changeTypeLozenge.append(bitbucket.internal.feature.fileContent.fileChangeTypeLozenge({changeType:a.getType(),
previousPathContent:d,pathContent:g}));this.$changeTypeLozenge.find(".change-type-lozenge").tooltip({html:!0,className:"change-type-lozenge-tooltip",gravity:function(){var a=(0,f.default)(document).width()-(0,f.default)(this).offset().left-(0,f.default)(this).width()/2,b=(0,f.default)(".tipsy").outerWidth();return a>b/2+10?"n":"ne"}})};p.default=c;y.exports=p["default"]});