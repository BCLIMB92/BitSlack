define("bitbucket/internal/feature/commit/commit-pull-requests/commit-pull-requests","module exports @atlassian/aui jquery bitbucket/util/navbuilder bitbucket/util/state bitbucket/internal/feature/pull-request/list-dialog/pull-request-list-dialog bitbucket/internal/util/analytics bitbucket/internal/util/dom-event".split(" "),function(c,a,k,l,m,n,p,d,q){Object.defineProperty(a,"__esModule",{value:!0});var r=babelHelpers.interopRequireDefault(l),t=babelHelpers.interopRequireDefault(m),g=babelHelpers.interopRequireDefault(n),
h=babelHelpers.interopRequireWildcard(p),u=babelHelpers.interopRequireDefault(q);a.default={onReady:function(){h.listenForNavigationKeyboardShortcuts();var a=g.default.getRepository(),c=g.default.getCommit(),e=(0,r.default)(".commit-pull-requests-summary-link"),f=e.length?parseInt(e.find(".count").text()):0;(0,d.add)("commit.pullRequest.link.loaded",{count:f});e.on("click",function(b){(0,d.add)("commit.pullRequest.link.clicked",{count:f});u.default.openInSameTab(b)&&(b.preventDefault(),b=t.default.rest().repository(a).commit(c.id).addPathComponents("pull-requests"),
h.showFor(b,{titleText:k.I18n.getText("bitbucket.web.commit.pullrequests.dialog.title"),onClick:function(a){a=a.rowIndex;(0,d.add)("commit.pullRequest.dialog.link.clicked",{count:f,rowIndex:a})}}))})}};c.exports=a["default"]});