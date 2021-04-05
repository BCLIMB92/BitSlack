define("bitbucket/internal/util/deprecation",["module","exports","lodash","bitbucket/internal/util/events","bitbucket/internal/util/text"],function(v,m,w,x,y){function k(a,b,d,f){if("function"===typeof a)return a;var e=!1;return function(){if(!e){e=!0;var c=q.default.toSentenceCase(a)+" has been deprecated"+(d?" since "+d:"")+" and will be removed in "+(f||"a future release")+".";b&&(c+=" Use "+b+" instead.");var h=Error();h=(h=h.stack||h.stacktrace)&&h.replace(/^Error\n/,"")||"No stack trace of the deprecated usage is available in your current browser.";
console.warn(c+"\n"+h)}}}function l(a,b,d,f,e){if(a.__deprecated)return a;var c=k(b||a.name||"this function",d,f,e);b=function(){c();return a.apply(this,arguments)};Object.defineProperty(b,"__deprecated",{enumerable:!1,configurable:!1,writable:!1,value:!0});return b}function r(a,b,d,f,e){if(a.__deprecated)return a;b=l(a,b,d,f,e);b.prototype=a.prototype;z.default.assign(b,a);return b}function A(a,b,d,f,e,c){var h=a[b],g=k(d||b,f,e,c);Object.defineProperty(a,b,{get:function(){g();return h},set:function(a){h=
a;g();return a}})}function n(a,b,d,f,e,c){"function"===typeof a[b]?a[b]=r(a[b],d||b,f,e,c):A(a,b,d,f,e,c)}function t(a,b,d,f,e){if("id"!==d){if(B.test(d))throw Error("The property "+d+" cannot be deprecated when converting to a Brace model.");var c=k(b+"::"+d,b+"::get|set('"+d+"')",f,e);Object.defineProperty(a.prototype,d,{get:function(){c();return this.get(d)},set:function(a){c();this.set(d,a)}})}}Object.defineProperty(m,"__esModule",{value:!0});var z=babelHelpers.interopRequireDefault(w),p=babelHelpers.interopRequireDefault(x),
q=babelHelpers.interopRequireDefault(y),g=Object.prototype.hasOwnProperty,C=Object.prototype.toString,B=/^(attributes|url|isNew|hasChanged|changed(Attributes)|previous(Attributes)|clone)$/,u={};m.default={fn:l,construct:r,prop:n,obj:function(a,b,d,f,e){for(var c in a)g.call(a,c)&&n(a,c,b+c,d&&d+c,f,e)},braceAsJson:function(a,b,d,f){var e=a.prototype.namedAttributes,c;if("[object Array]"===C.call(e))for(c=e.length;c--;)t(a,b,e[c],d,f);else for(c in e)g.call(e,c)&&t(a,b,c,d,f)},braceAttribute:function(a,
b,d,f,e){if(g.call(a.prototype.namedAttributes,b)){var c=q.default.toSentenceCase(b);a.prototype["get"+c]=l(a.prototype["get"+c],b,d,f,e);a.prototype["set"+c]=l(a.prototype["set"+c],b,d,f,e)}},jsonAsBrace:function(a,b,d){var f=a.constructor.prototype;a=a.clone();var e=a.toJSON(),c;Object.defineProperty(a,"__json",{enumerable:!1,configurable:!1,writable:!1,value:e});b=k("use of this object's Backbone properties","raw JSON properties on this object",b,d);for(c in a)g.call(e,c)||n(a,c,b);for(c in e)!g.call(e,
c)||g.call(a,c)||g.call(f,c)||(a[c]=e[c]);return a},triggerDeprecated:function(a,b){if(p.default.listeners(a).length){if(5>arguments.length)throw Error("eventName, context, alternativeName, sinceVersion, and removeInVersion must all be provided (but can be null).");var d=Array.prototype.slice.call(arguments,0,arguments.length-3),f=arguments[arguments.length-3],e=arguments[arguments.length-2],c=arguments[arguments.length-1];(u[a]||(u[a]=k("Event '"+a+"'",f?"'"+f+"'":null,e,c)))();p.default.trigger.apply(p.default,
d)}},getMessageLogger:k};v.exports=m["default"]});