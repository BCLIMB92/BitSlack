define("bitbucket/internal/feature/dashboard/reducers/ui/repositories","module exports lodash bitbucket/internal/util/reducers ../../actions ../../repository-type".split(" "),function(k,f,c,l,e,m){function g(a,b){var d=(0,c.get)(b,"meta.repoType"),f=b.type===e.CLEAR_REPOSITORIES?n:(0,c.get)(b,"meta.repoType"),g=null,h=void 0;if((0,c.get)(b,"meta.query")!==(0,c.get)(a,[d,"query"])||(0,c.get)(b,"meta.repoType")!==f&&null!=a.focusedIndex)g=0;(0,c.get)(b,"payload")&&(h=b.payload.values.length,h=(0,c.get)(b,
"meta.query")!==(0,c.get)(a,[a.activeType,"query"])?h:(0,c.get)(a,[a.activeType,"count"],0)+h);return babelHelpers.extends({},a,babelHelpers.defineProperty({loading:!1,hasError:!1,currentQuery:(0,c.get)(b,"meta.query"),activeType:f,focusedIndex:g},d,{query:(0,c.get)(b,"meta.query"),count:h}))}Object.defineProperty(f,"__esModule",{value:!0});var d,n=m.RECENT;f.default=(0,l.reduceByType)({},(d={},babelHelpers.defineProperty(d,e.LOAD_REPOSITORIES,function(a,b){var d=babelHelpers.extends({},a,{loading:!0});
(0,c.get)(b,"meta.query")===(0,c.get)(a,"currentQuery")&&(d.activeType=(0,c.get)(b,"meta.repoType",null));return d}),babelHelpers.defineProperty(d,e.LOAD_REPOSITORIES_FAILURE,function(a,b){return babelHelpers.extends({},a,{loading:!1,currentQuery:(0,c.get)(b,"meta.query"),hasError:!0,activeType:(0,c.get)(b,"meta.repoType")})}),babelHelpers.defineProperty(d,e.LOAD_REPOSITORIES_SUCCESS,g),babelHelpers.defineProperty(d,e.CLEAR_REPOSITORIES,g),babelHelpers.defineProperty(d,e.REPOSITORIES_FOCUS_NONE,function(a){return babelHelpers.extends({},
a,{focusedIndex:null})}),babelHelpers.defineProperty(d,e.REPOSITORIES_FOCUS_PREVIOUS,function(a){return babelHelpers.extends({},a,{focusedIndex:Math.max((0,c.get)(a,"focusedIndex",1)-1,0)})}),babelHelpers.defineProperty(d,e.REPOSITORIES_FOCUS_NEXT,function(a){var b=(0,c.get)(a,"activeType");b=(0,c.get)(a,[b,"count"],0);return babelHelpers.extends({},a,{focusedIndex:Math.min((0,c.get)(a,"focusedIndex",-1)+1,Math.max(b-1,0))})}),babelHelpers.defineProperty(d,e.REPOSITORIES_FOCUS_INITIAL,function(a,
b){return babelHelpers.extends({},a,{focusedIndex:0})}),d));k.exports=f["default"]});