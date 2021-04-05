define("bitbucket/internal/feature/pull-request/edit/pull-request-edit","module exports @atlassian/aui jquery lodash bitbucket/util/navbuilder bitbucket/internal/feature/repository/branch-selector/branch-selector bitbucket/internal/feature/user/user-multi-selector/user-multi-selector bitbucket/internal/model/revision-reference bitbucket/internal/util/ajax bitbucket/internal/util/client-storage bitbucket/internal/util/dom-event bitbucket/internal/util/function bitbucket/internal/util/warn-before-unload bitbucket/internal/widget/markup-editor/markup-editor".split(" "),
function(q,m,f,r,t,u,v,w,x,y,z,A,B,C,D){function b(a){this._pullRequest=a;this._currentReviewerUsers=this._pullRequest.getReviewers();this._isDisabled=!1;this._draftKey=c.default.buildKey("draft-description","pull-request")}function E(a){return{user:a}}function n(a){var e=d.default.pick(a,["title","description"]);d.default.has(a,"reviewers")&&(e.reviewers=d.default.chain(a.reviewers).map(F.default.dot("user.name")).sort().map(function(a){return{user:{name:a}}}).value());d.default.has(a,"toRef")&&
(e.toRef={id:a.toRef.id});return e}Object.defineProperty(m,"__esModule",{value:!0});var p=babelHelpers.interopRequireDefault(r),d=babelHelpers.interopRequireDefault(t),G=babelHelpers.interopRequireDefault(u),H=babelHelpers.interopRequireDefault(v),I=babelHelpers.interopRequireDefault(w),J=babelHelpers.interopRequireDefault(x),K=babelHelpers.interopRequireDefault(y),c=babelHelpers.interopRequireDefault(z),L=babelHelpers.interopRequireDefault(A),F=babelHelpers.interopRequireDefault(B),M=babelHelpers.interopRequireDefault(C),
l=babelHelpers.interopRequireDefault(D);b.prototype.keypressListener=function(a){L.default.isCtrlEnter(a)&&(a.preventDefault(),this._dialog.$el.find(".save-button").click())};b.prototype.initDialog=function(){var a=this;this._dialog=(0,f.dialog2)(bitbucket.internal.feature.pullRequest.editDialog());this._dialog.$el.on("click",".save-button",function(){return a.save()}).on("click",".cancel-button",function(){return a.cancel()}).on("keydown",function(e){return a.keypressListener(e)}).on("hide",function(){return a.destroy()});
this._$spinner=(0,p.default)('\x3cdiv class\x3d"spinner"/\x3e').insertBefore(this._dialog.$el.find(".save-button"));this._dialog.$el.on("input","textarea#pull-request-description",function(e){return a.updateDraftDescription(e)})};b.prototype.updateDraftDescription=d.default.debounce(function(a){(a=a.target.value)?c.default.setSessionItem(this._draftKey,a):this.deleteDraftDescription()},300);b.prototype.getDialogBody=function(){return this._dialog.$el.find(".aui-dialog2-content")};b.prototype.deleteDraftDescription=
function(){c.default.removeSessionItem(this._draftKey)};b.prototype.populatePanelFromPullRequest=function(){var a=c.default.getSessionItem(this._draftKey);this.updatePanel({title:this._pullRequest.getTitle(),description:a||this._pullRequest.getDescription(),toRef:d.default.assign({type:J.default.type.BRANCH},this._pullRequest.getToRef().toJSON()),reviewers:this._currentReviewerUsers.map(function(a){return a.getUser().toJSON()})},!!a)};b.prototype.updatePanel=function(a,e){var b=this.getDialogBody();
a.reviewers.length&&a.reviewers[0].user&&(a.reviewers=d.default.map(a.reviewers,"user"));b.empty().append(bitbucket.internal.feature.pullRequest.edit(a));if(e)b.find("textarea#pull-request-description").addClass("restored").attr("title",f.I18n.getText("bitbucket.web.pullrequest.edit.description.restored")).one("click keydown input",function(a){(0,p.default)(a.target).removeClass("restored").removeAttr("title")});this.userSelect=new I.default(b.find("#reviewers"),{initialItems:a.reviewers,excludedItems:[this._pullRequest.getAuthor().getUser().toJSON()],
urlParams:{"permission.1":"LICENSED_USER","permission.2":"REPO_READ","permission.2.repositoryId":this._pullRequest.getToRef().getRepository().getId()}});a=b.find("#toRef");this.branchSelector=new H.default(a,{id:"toRef-dialog",repository:this._pullRequest.getToRef().getRepository(),field:a.next("input")});l.default.bindTo(b)};b.prototype.getPullRequestUpdateFromForm=function(a){return{title:a.find("#title").val(),description:a.find("#pull-request-description").val(),reviewers:d.default.map(this.userSelect.getSelectedItems(),
E),toRef:this.branchSelector.getSelectedItem().toJSON(),version:this._pullRequest.getVersion()}};b.prototype.mergePullRequestUpdate=function(a,e,b){var f=e.version;a=n(a);e=n(e);b=n(b);var c=d.default.reduce(d.default.keys(b),function(f,g){if(!f)return null;var c=e[g],k=b[g];if(d.default.isEqual(c,k))return f;var h=a[g];return d.default.isEqual(h,k)?f:d.default.isEqual(h,c)?(f[g]=k,f):null},d.default.merge({},e));c&&(c.version=f);return c};b.prototype.save=function(a,b){if(!this._isDisabled){a=this.getPullRequestUpdateFromForm(this.getDialogBody().find("form"));
if(a.title)return this._$spinner.show().spin("small"),this.toggleDisabled(!0),this._doSave(a);b=f.I18n.getText("bitbucket.web.pullrequest.edit.no.title");this.updatePanel(p.default.extend({fieldErrors:{title:[b]}},a))}};b.prototype._doSave=function(a){var b=this,c=K.default.rest({url:G.default.rest().currentPullRequest().withParams({avatarSize:bitbucket.internal.widget.avatarSizeInPx({size:"xsmall"})}).build(),type:"PUT",data:a,statusCode:{400:!1,409:!1}});(0,M.default)(c,f.I18n.getText("bitbucket.web.pullrequest.pending.request",
bitbucket.internal.util.productName()));c.done(function(a){b.deleteDraftDescription();window.location.reload()});c.fail(function(c,e,m,g,n){var k=[],h={},l;if(1===g.errors.length&&"com.atlassian.bitbucket.pull.PullRequestOutOfDateException"===g.errors[0].exceptionName&&(c=b.mergePullRequestUpdate(b._pullRequest.toJSON(),g.errors[0].pullRequest,a))){b._doSave(c);return}d.default.forEach(g.errors,function(a){a.context?(Object.prototype.hasOwnProperty.call(h,a.context)||(h[a.context]=[]),"reviewers"===
a.context?(h[a.context]=d.default.map(a.reviewerErrors,"message"),k.push(a),l=a.validReviewers):h[a.context].push(a.message)):("com.atlassian.bitbucket.pull.PullRequestOutOfDateException"===a.exceptionName&&(a.messageContent="\n                        "+(0,f.escapeHtml)(a.message)+' \n                        \x3ca href\x3d"'+window.location.href.split("#")[0]+'"\x3e\n                            '+(0,f.escapeHtml)(f.I18n.getText("bitbucket.web.reload"))+"\n                        \x3c/a\x3e."),k.push(a))});
b.updatePanel(p.default.extend({errors:k,fieldErrors:h},a,{reviewers:l}));b._$spinner.spinStop().hide();b.toggleDisabled(!1)})};b.prototype.toggleDisabled=function(a){void 0===("undefined"===typeof a?"undefined":babelHelpers.typeof(a))&&(a=!this._isDisabled);this._dialog.$el.find("button, input, textarea, select").attr({disabled:a});this._dialog.$el.attr({"data-aui-modal":a});this._isDisabled=a};b.prototype.cancel=function(){this._isDisabled||(this.deleteDraftDescription(),this.hide())};b.prototype.show=
function(){this.initDialog();this.populatePanelFromPullRequest();this._dialog.show()};b.prototype.hide=function(){this._dialog.hide()};b.prototype.destroy=function(){l.default.unbindFrom(this.getDialogBody())};m.default=b;q.exports=m["default"]});