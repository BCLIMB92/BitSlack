define("bitbucket/internal/feature/filebrowser/file-finder/file-finder","module exports @atlassian/aui jquery lodash bitbucket/util/navbuilder bitbucket/internal/model/path bitbucket/internal/util/ajax bitbucket/internal/util/events bitbucket/internal/util/function bitbucket/internal/util/property bitbucket/internal/widget/keyboard-controller bitbucket/internal/widget/paged-scrollable".split(" "),function(y,m,n,z,A,B,C,D,E,F,G,p,H){function I(a){return r.default.rest().currentRepo().files().at(a.getId()).withParams({limit:q}).build()}
function J(a){return a!==a.toUpperCase()?"["+RegExp.escape(a.toUpperCase()+a)+"]":RegExp.escape(a)}function t(a){if(a){var b="";a=a.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").split(/\*|\s|(?=[A-Z0-9]|\/|\.|-|_)/g);a=g.default.filter(a,u.default.not(g.default.isEmpty));if(a.length)return b=g.default.map(a,function(a){return"("+g.default.map(a.split(""),J).join("")+")"}).join(".*?"),new RegExp("("+b+")","g")}return null}function w(a,b){b=h.default.escapeHtml(b);return a?b.replace(a,"\x3cmark\x3e$1\x3c/mark\x3e"):
b}function d(a,b){var v=this;this._isLoaded=!1;this.fileTableSelector=a;this.currentRevisionRef=b;this.resultSetId=0;this.$fileFinderInput=(0,c.default)(".file-finder-input");this.$textInput=(0,c.default)("input.filter-files");this.$fileFinderTip=(0,c.default)(".file-finder-tip");this.$spinner=(0,c.default)("\x3cdiv class\x3d'spinner'/\x3e").hide().insertAfter(this.fileTableSelector);k.default.on("bitbucket.internal.page.filebrowser.revisionRefChanged",function(a){v.currentRevisionRef=a;v.files=void 0})}
function l(a,b,c,f,e){x.default.call(this,null,{pageSize:50,paginationContext:"file-finder"});this.pattern=b;this.fileTableSelector=c;this.filteredFiles=a;this.currentRevisionRef=f;this.resultSetId=e}Object.defineProperty(m,"__esModule",{value:!0});var h=babelHelpers.interopRequireDefault(n),c=babelHelpers.interopRequireDefault(z),g=babelHelpers.interopRequireDefault(A),r=babelHelpers.interopRequireDefault(B),K=babelHelpers.interopRequireDefault(C),L=babelHelpers.interopRequireDefault(D),k=babelHelpers.interopRequireDefault(E),
u=babelHelpers.interopRequireDefault(F);n=babelHelpers.interopRequireDefault(G);p=babelHelpers.interopRequireDefault(p);var x=babelHelpers.interopRequireDefault(H),M=p.default.ListKeyboardController,q=1E5;n.default.getFromProvider("page.max.directory.recursive.children").done(function(a){q=a});d.prototype.tips=[h.default.I18n.getText("bitbucket.web.file.finder.tip.1"),h.default.I18n.getText("bitbucket.web.file.finder.tip.2"),h.default.I18n.getText("bitbucket.web.file.finder.tip.3"),h.default.I18n.getText("bitbucket.web.file.finder.tip.4"),
h.default.I18n.getText("bitbucket.web.file.finder.tip.5")];d.prototype._bindKeyboardNavigation=function(){this._filesKeyboardController=new M(this.$textInput,(0,c.default)(this.fileTableSelector),{wrapAround:!1,focusedClass:"focused-file",itemSelector:"tr.file-row",onSelect:function(a){window.location.href=a.find("a").attr("href")},requestMore:function(){var a=c.default.Deferred();window.scrollTo(0,document.documentElement.scrollHeight);setTimeout(function(){a.resolve()});return a}})};d.prototype._showSpinner=
function(){(0,c.default)(".filebrowser-banner").empty();(0,c.default)(this.fileTableSelector).empty();this.$spinner.show().spin("large")};d.prototype._hideSpinner=function(){this.$spinner.spinStop().hide()};d.prototype.isLoaded=function(){return this._isLoaded};d.prototype.unloadFinder=function(){(0,c.default)(".breadcrumbs").removeClass("file-finder-mode");this.$textInput.blur().hide().val("");this.$fileFinderInput.removeClass("visible");this.$fileFinderTip.removeClass("visible");this._isLoaded=
!1;this._filesKeyboardController&&(this._filesKeyboardController.destroy(),this._filesKeyboardController=null);this.tableView&&this.tableView.reset();k.default.trigger("bitbucket.internal.feature.filefinder.unloaded")};d.prototype.loadFinder=function(){(0,c.default)(".filebrowser-banner").empty();(0,c.default)(".breadcrumbs").addClass("file-finder-mode");this.$textInput.focus();this._isLoaded||(this.requestFiles(),this._isLoaded=!0);k.default.trigger("bitbucket.internal.feature.filefinder.loaded")};
d.prototype.requestFiles=function(){var a=this;this._showSpinner();this.files?(this.onFilesLoaded(),this._hideSpinner()):L.default.rest({url:I(a.currentRevisionRef)}).done(function(b){var c=b.values;b.isLastPage||a.showLimitWarning();a.files=[];for(b=0;b<c.length;b++)a.files.push({name:c[b]});a.onFilesLoaded()}).always(function(){a._hideSpinner()})};d.prototype.onFilesLoaded=function(){function a(a){b.showFiles(a);b._filesKeyboardController.setListElement((0,c.default)(b.fileTableSelector));b._filesKeyboardController.moveToNext()}
var b=this,d=this.tips[Math.floor(Math.random()*this.tips.length)];d=h.default.I18n.getText("bitbucket.web.file.finder.tip.label")+" "+d;this.$fileFinderInput.addClass("visible");this.$fileFinderTip.addClass("visible");this.$textInput.show();this.showFiles();this._bindKeyboardNavigation();this._filesKeyboardController.moveToNext();this.$fileFinderTip.tooltip({gravity:"w",html:!0,title:u.default.constant(d)});var f=this.$textInput,e=f.val();this.$textInput.unbind("keyup").on("keyup",function(a){27===
a.keyCode&&k.default.trigger("bitbucket.internal.feature.filetable.hideFind",b)}).on("keyup",g.default.debounce(function(b){27!==b.keyCode&&e!==(e=f.val())&&a((0,c.default)(this).val())},200)).focus();e&&a(e)};d.prototype.showFiles=function(a){this.filteredFiles=this.files;var b=t(a);this.tableView&&this.tableView.reset();if(b&&0<this.files.length){this.filteredFiles=g.default.filter(this.files,function(a){b.lastIndex=0;return b.test(a.name)});b.lastIndex=0;var c=new RegExp(b.source+"(?!.*/)");this.filteredFiles.sort(function(b,
e){var d=b.exactMatches?b.exactMatches:b.exactMatches=g.default.includes(b.name,a),f=e.exactMatches?e.exactMatches:e.exactMatches=g.default.includes(e.name,a);if(d!==f)return d?-1:1;d=b.matches?b.matches:b.matches=c.test(b.name);f=e.matches?e.matches:e.matches=c.test(e.name);return d===f?b.name.localeCompare(e.name):d?-1:1})}else g.default.forEach(this.files,function(a){a.highlightedName=null;a.matches=null;a.exactMatches=null});this._makeFileFinderView(b)};d.prototype.showLimitWarning=function(){var a=
(0,c.default)(bitbucket.internal.feature.filefinder.tableLimitedWarning({limit:q}));(0,c.default)(this.fileTableSelector).parent().append(a)};d.prototype._makeFileFinderView=function(a){this.tableView=new l(this.filteredFiles,a,this.fileTableSelector,this.currentRevisionRef,this.resultSetId++);this.tableView.init()};c.default.extend(l.prototype,x.default.prototype);l.prototype.requestData=function(a,b){var d=this,f=this.filteredFiles.slice(a,a+b);g.default.forEach(f,function(a){if(!a.url){var b=new K.default(a.name);
var c=d.currentRevisionRef;b=r.default.currentRepo().browse().path(b);c.isDefault()||(b=b.at(c.getDisplayId()));c=b.build();a.url=c}a.highlightedName=w(d.pattern,a.name)});return c.default.Deferred().resolve({values:f,size:f.length,isLastPage:a+b>=this.filteredFiles.length})};l.prototype.attachNewContent=function(a,b){var d=(0,c.default)(this.fileTableSelector);if("html"===b)a=(0,c.default)(bitbucket.internal.feature.filefinder.fileFinderTable({files:a.values,resultSetId:this.resultSetId})),d.replaceWith(a);
else{var f="append"===b,e=(0,c.default)(d,"table \x3e tbody");g.default.forEach(a.values,function(a){a=(0,c.default)(bitbucket.internal.feature.filefinder.fileFinderRow(c.default.extend({},a,{name:a.highlightedName})));f?e.append(a):e.prepend(a)})}};d.highlightMatches=w;d.getPattern=t;m.default={FileFinder:d};y.exports=m["default"]});