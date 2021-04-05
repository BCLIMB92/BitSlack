define("bitbucket/internal/widget/markup-preview/markup-preview","module exports @atlassian/aui jquery lodash bitbucket/util/navbuilder bitbucket/internal/util/ajax bitbucket/internal/util/dom-event bitbucket/internal/util/events bitbucket/internal/util/navigator bitbucket/internal/util/syntax-highlight".split(" "),function(l,b,m,n,p,q,r,t,u,v,w){function a(a){this.init.apply(this,arguments)}Object.defineProperty(b,"__esModule",{value:!0});var e=babelHelpers.interopRequireDefault(m),g=babelHelpers.interopRequireDefault(n),
c=babelHelpers.interopRequireDefault(p),y=babelHelpers.interopRequireDefault(q),z=babelHelpers.interopRequireDefault(r),h=babelHelpers.interopRequireDefault(t),d=babelHelpers.interopRequireDefault(u),A=babelHelpers.interopRequireDefault(w),f="ctrl+shift+p";d.default.on("bitbucket.internal.keyboard.shortcuts.requestPreviewComment",function(a){f=a;this.unbind()});d.default.addLocalEventMixin(a.prototype);a.prototype.init=function(a){c.default.bindAll(this,"togglePreview","updatePreview","refreshPreview",
"hidePreview","cancelPreview");var x=(0,v.isMac)()?f.replace(/ctrl/i,"meta"):f;this.$editor=(0,g.default)(a);this.$textarea=this.$editor.find("textarea");this.$previewButton=this.$editor.find(".markup-preview-button");this.$previewPanel=this.$editor.find(".markup-preview");this._destroyables=[];var b=this.$textarea.add(this.$previewButton);b.on("keydown",[x],this.togglePreview);this._destroyables.push({destroy:function(){b.off("keydown",this.togglePreview)}.bind(this)});this._destroyables.push(d.default.chainWith(this.$previewButton).on("click",
this.togglePreview));this._destroyables.push(d.default.chainWith(this.$previewPanel).on("click",h.default.filterByTarget(":not(a, a \x3e img)",this.togglePreview)));this._destroyables.push(d.default.chainWith(this.$textarea).on("input",c.default.debounce(this.refreshPreview,100)));this._destroyables.push({destroy:this.cancelPreview});var k=this;this.$previewButton.tooltip({gravity:function(){return g.default.fn.tipsy.autoNS.apply(this,arguments)+"e"},title:function(){return k.isPreviewing()?e.default.I18n.getText("bitbucket.web.diffview.comments.button.exit.preview"):
k.$previewButton.attr("data-preview-tooltip")}})};a.prototype.isPreviewing=function(){return this.$editor.hasClass("previewing")};a.prototype.togglePreview=h.default.preventDefault(function(){this.isPreviewing()?this.cancelPreview():this.showPreview()});a.prototype.showPreview=function(){this.$editor.addClass("previewing");this.$textarea.parent().spin("medium");this.$previewButton.text(e.default.I18n.getText("bitbucket.web.markup.edit"));this._request&&this._request.abort();this._request=z.default.rest({type:"POST",
url:B(),data:this.$textarea.val(),dataType:"json"}).done(this.updatePreview).fail(function(a,b){"abort"!==b&&this.hidePreview()}.bind(this)).always(function(){this.$textarea.parent().spinStop();this._request=null}.bind(this))};a.prototype.refreshPreview=function(){this.isPreviewing()&&this.showPreview()};a.prototype.updatePreview=function(a){this.$previewPanel.html(a.html);this.$previewPanel.find("a").attr("target","_blank");this.$editor.addClass("loaded");this.$previewButton.focus();A.default.container(this.$previewPanel);
a=this.trigger.bind(this,"resize");c.default.defer(a);this.$previewPanel.imagesLoaded(a)};a.prototype.cancelPreview=function(){this._request&&this._request.abort();this.hidePreview()};a.prototype.hidePreview=function(){this.$editor.removeClass("previewing loaded");this.$previewButton.text(e.default.I18n.getText("bitbucket.web.markup.preview"));this.$textarea.focus();this.trigger("resize")};a.prototype.destroy=function(){c.default.invokeMap(this._destroyables,"destroy")};var B=c.default.once(function(){return y.default.rest().markup().preview().build()});
b.default=a;l.exports=b["default"]});