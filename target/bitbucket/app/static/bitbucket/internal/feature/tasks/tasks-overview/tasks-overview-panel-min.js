define("bitbucket/internal/feature/tasks/tasks-overview/tasks-overview-panel",["module","exports","lodash","bitbucket/internal/widget/updating-section/updating-section"],function(d,a,e,f){function b(a,c){this.init.apply(this,arguments)}Object.defineProperty(a,"__esModule",{value:!0});var g=babelHelpers.interopRequireDefault(e),h=babelHelpers.interopRequireDefault(f);b.prototype.init=function(a,c){var b=c.toEventStream();c={isVisibleProperty:c.map(function(a){return 0<a.resolvedTaskCount||0<a.openTaskCount}).toProperty()};
this._destroyCallbacks=[new h.default(a,b,bitbucket.internal.feature.tasks.tasksOverview.taskCount,c)]};b.prototype.destroy=function(){g.default.invokeMap(this._destroyCallbacks,"destroy")};a.default=b;d.exports=a["default"]});