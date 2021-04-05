define("bitbucket/internal/util/promise",["module","exports","jquery","lodash"],function(w,l,x,y){function p(a){a&&a.abort&&a.abort()}function z(){console.log("Promise does not have an abort function")}function m(a,c,b){function g(a,b){return function(){return f?(new d.default.Deferred)[a+"With"](this,arguments):h=b.apply(this,arguments)}}var f,h=a,e=d.default.Callbacks(),k={};a=a.then(c?g("resolve",c):null,b?g("reject",b):null);k.abort=function(){"pending"===k.state()&&(f||p(h),f=!0);e.fire()};k.thenAbortable=
function(a,b){a=m(k,a,b);e.add(a.abort);return a};return a.promise(k)}function q(){return d.default.when.apply(d.default,e.default.map(arguments,A)).then(r,r)}function A(a){return a.then(t(!1),t(!0))}function t(a){return function(){return d.default.Deferred().resolve({rejectedSelf:a&&this,self:this,args:Array.prototype.slice.call(arguments)})}}function r(){var a=e.default.chain(arguments).map("rejectedSelf").find(e.default.identity).value(),c=(a?"reject":"resolve")+"With";a=a||arguments[0].self;var b=
e.default.map(arguments,"args");return d.default.Deferred()[c](a,b)}function u(a){setTimeout(function(){throw a;})}Object.defineProperty(l,"__esModule",{value:!0});var d=babelHelpers.interopRequireDefault(x),e=babelHelpers.interopRequireDefault(y),v={PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"};l.default={state:v,delay:function(a,c){return function(){var b=d.default.Deferred(),g=this,f=Array.prototype.slice.call(arguments),h=function(){return setTimeout(function(){var c=a.apply(g,f);
c.done(b.resolve).fail(b.reject);k=c.abort?e.default.bind(c.abort,c):z},c)},n=h();var k=function(){clearTimeout(n);b.reject(b,"abort","abort")};return b.promise({abort:function(){k()},reset:function(){"pending"===b.state()&&(clearTimeout(n),f=Array.prototype.slice.call(arguments),n=h())}})}},tryWithLogging:function(a){return function(c){try{var b=a(c);b&&b.catch&&b.catch(u)}catch(g){u(g)}return c}},reduce:function(){var a=Array.prototype.slice.call(arguments),c=d.default.when.apply(d.default,a);c.abort=
function(){e.default.forEach(a,p)};return c},settle:q,spinner:function(a,c,b,g,f){var e=(0,d.default)(a).spin(b||"small",g||{});return c.always(function(){f?e.spinStop():e.remove()})},rollingSpinner:function(a,c,b){function g(){var a=Array.prototype.slice.call(arguments);a.length&&(h.spin(b).addClass("spinning"),f=q.apply(null,e.default.compact(a.concat(f))),f.always(function(){f.state()!==v.PENDING&&h.spinStop().removeClass("spinning")}))}b=b||"small";var f,h=(0,d.default)(a);c&&g(c);return{add:g}},
thenAbortable:m,whenAbortable:function(){var a=d.default.when.apply(d.default,arguments);a.abort=e.default.invokeMap.bind(e.default,arguments,"abort");return m(a)},waitFor:function(a){var c=d.default.Deferred();a=d.default.extend({timeout:1E4,interval:100,name:"",predicate:d.default.noop},a);var b=(new Date).getTime()+a.timeout,e=setInterval(function(){var d=a.predicate();d?(clearInterval(e),c.resolve(d)):(new Date).getTime()>b&&(clearInterval(e),c.reject("Predicate '"+a.name+"' was false after "+
a.timeout+"ms"))},a.interval);return c.promise()}};w.exports=l["default"]});