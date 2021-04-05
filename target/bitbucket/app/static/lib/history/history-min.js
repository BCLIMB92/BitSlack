!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.History=n():t.History=n()}(this,function(){return function(t){function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{},id:o,loaded:!1};return t[o].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0,n.createPath=n.parsePath=n.locationsAreEqual=n.createLocation=n.createMemoryHistory=n.createHashHistory=n.createBrowserHistory=void 0;var r=e(2);Object.defineProperty(n,"createLocation",{enumerable:!0,get:function(){return r.createLocation}}),Object.defineProperty(n,"locationsAreEqual",{enumerable:!0,get:function(){return r.locationsAreEqual}});var i=e(1);Object.defineProperty(n,"parsePath",{enumerable:!0,get:function(){return i.parsePath}}),Object.defineProperty(n,"createPath",{enumerable:!0,get:function(){return i.createPath}});var a=e(7),c=o(a),u=e(8),s=o(u),f=e(9),l=o(f);n.createBrowserHistory=c.default,n.createHashHistory=s.default,n.createMemoryHistory=l.default},function(t,n){"use strict";n.__esModule=!0;var e=(n.addLeadingSlash=function(t){return"/"===t.charAt(0)?t:"/"+t},n.stripLeadingSlash=function(t){return"/"===t.charAt(0)?t.substr(1):t},n.hasBasename=function(t,n){return new RegExp("^"+n+"(\\/|\\?|#|$)","i").test(t)});n.stripBasename=function(t,n){return e(t,n)?t.substr(n.length):t},n.stripTrailingSlash=function(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t},n.parsePath=function(t){var n=t||"/",e="",o="",r=n.indexOf("#");r!==-1&&(o=n.substr(r),n=n.substr(0,r));var i=n.indexOf("?");return i!==-1&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===o?"":o}},n.createPath=function(t){var n=t.pathname,e=t.search,o=t.hash,r=n||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),o&&"#"!==o&&(r+="#"===o.charAt(0)?o:"#"+o),r}},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0,n.locationsAreEqual=n.createLocation=void 0;var r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i=e(10),a=o(i),c=e(11),u=o(c),s=e(1);n.createLocation=function(t,n,e,o){var i=void 0;"string"==typeof t?(i=(0,s.parsePath)(t),i.state=n):(i=r({},t),void 0===i.pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==n&&void 0===i.state&&(i.state=n));try{i.pathname=decodeURI(i.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(i.key=e),o?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=(0,a.default)(i.pathname,o.pathname)):i.pathname=o.pathname:i.pathname||(i.pathname="/"),i},n.locationsAreEqual=function(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&(0,u.default)(t.state,n.state)}},function(t,n,e){"use strict";var o=function(){};t.exports=o},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var r=e(3),i=(o(r),function(){var t=null,n=function(n){return t=n,function(){t===n&&(t=null)}},e=function(n,e,o,r){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof o?o(i,r):r(!0):r(i!==!1)}else r(!0)},o=[],r=function(t){var n=!0,e=function(){n&&t.apply(void 0,arguments)};return o.push(e),function(){n=!1,o=o.filter(function(t){return t!==e})}},i=function(){for(var t=arguments.length,n=Array(t),e=0;e<t;e++)n[e]=arguments[e];o.forEach(function(t){return t.apply(void 0,n)})};return{setPrompt:n,confirmTransitionTo:e,appendListener:r,notifyListeners:i}});n.default=i},function(t,n){"use strict";n.__esModule=!0;n.canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement),n.addEventListener=function(t,n,e){return t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent("on"+n,e)},n.removeEventListener=function(t,n,e){return t.removeEventListener?t.removeEventListener(n,e,!1):t.detachEvent("on"+n,e)},n.getConfirmation=function(t,n){return n(window.confirm(t))},n.supportsHistory=function(){var t=window.navigator.userAgent;return(t.indexOf("Android 2.")===-1&&t.indexOf("Android 4.0")===-1||t.indexOf("Mobile Safari")===-1||t.indexOf("Chrome")!==-1||t.indexOf("Windows Phone")!==-1)&&(window.history&&"pushState"in window.history)},n.supportsPopStateOnHashChange=function(){return window.navigator.userAgent.indexOf("Trident")===-1},n.supportsGoWithoutReloadUsingHash=function(){return window.navigator.userAgent.indexOf("Firefox")===-1},n.isExtraneousPopstateEvent=function(t){return void 0===t.state&&navigator.userAgent.indexOf("CriOS")===-1}},function(t,n,e){"use strict";var o=function(t,n,e,o,r,i,a,c){if(!t){var u;if(void 0===n)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[e,o,r,i,a,c],f=0;u=new Error(n.replace(/%s/g,function(){return s[f++]})),u.name="Invariant Violation"}throw u.framesToPop=1,u}};t.exports=o},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var r=("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}),i=e(3),a=(o(i),e(6)),c=o(a),u=e(2),s=e(1),f=e(4),l=o(f),d=e(5),h="popstate",p="hashchange",v=function(){try{return window.history.state||{}}catch(t){return{}}},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d.canUseDOM?void 0:(0,c.default)(!1);var n=window.history,e=(0,d.supportsHistory)(),o=!(0,d.supportsPopStateOnHashChange)(),i=t.forceRefresh,a=void 0!==i&&i,f=t.getUserConfirmation,y=void 0===f?d.getConfirmation:f,g=t.keyLength,m=void 0===g?6:g,w=t.basename?(0,s.stripTrailingSlash)((0,s.addLeadingSlash)(t.basename)):"",b=function(t){var n=t||{},e=n.key,o=n.state,r=window.location,i=r.pathname,a=r.search,c=r.hash,f=i+a+c;return w&&(f=(0,s.stripBasename)(f,w)),(0,u.createLocation)(f,o,e)},P=function(){return Math.random().toString(36).substr(2,m)},O=(0,l.default)(),L=function(t){r(G,t),G.length=n.length,O.notifyListeners(G.location,G.action)},x=function(t){(0,d.isExtraneousPopstateEvent)(t)||_(b(t.state))},S=function(){_(b(v()))},E=!1,_=function(t){if(E)E=!1,L();else{var n="POP";O.confirmTransitionTo(t,n,y,function(e){e?L({action:n,location:t}):A(t)})}},A=function(t){var n=G.location,e=M.indexOf(n.key);e===-1&&(e=0);var o=M.indexOf(t.key);o===-1&&(o=0);var r=e-o;r&&(E=!0,U(r))},k=b(v()),M=[k.key],T=function(t){return w+(0,s.createPath)(t)},H=function(t,o){var r="PUSH",i=(0,u.createLocation)(t,o,P(),G.location);O.confirmTransitionTo(i,r,y,function(t){if(t){var o=T(i),c=i.key,u=i.state;if(e)if(n.pushState({key:c,state:u},null,o),a)window.location.href=o;else{var s=M.indexOf(G.location.key),f=M.slice(0,s===-1?0:s+1);f.push(i.key),M=f,L({action:r,location:i})}else window.location.href=o}})},j=function(t,o){var r="REPLACE",i=(0,u.createLocation)(t,o,P(),G.location);O.confirmTransitionTo(i,r,y,function(t){if(t){var o=T(i),c=i.key,u=i.state;if(e)if(n.replaceState({key:c,state:u},null,o),a)window.location.replace(o);else{var s=M.indexOf(G.location.key);s!==-1&&(M[s]=i.key),L({action:r,location:i})}else window.location.replace(o)}})},U=function(t){n.go(t)},C=function(){return U(-1)},R=function(){return U(1)},B=0,I=function(t){B+=t,1===B?((0,d.addEventListener)(window,h,x),o&&(0,d.addEventListener)(window,p,S)):0===B&&((0,d.removeEventListener)(window,h,x),o&&(0,d.removeEventListener)(window,p,S))},q=!1,F=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=O.setPrompt(t);return q||(I(1),q=!0),function(){return q&&(q=!1,I(-1)),n()}},D=function(t){var n=O.appendListener(t);return I(1),function(){I(-1),n()}},G={length:n.length,action:"POP",location:k,createHref:T,push:H,replace:j,go:U,goBack:C,goForward:R,block:F,listen:D};return G};n.default=y},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i=e(3),a=(o(i),e(6)),c=o(a),u=e(2),s=e(1),f=e(4),l=o(f),d=e(5),h="hashchange",p={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+(0,s.stripLeadingSlash)(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:s.stripLeadingSlash,decodePath:s.addLeadingSlash},slash:{encodePath:s.addLeadingSlash,decodePath:s.addLeadingSlash}},v=function(){var t=window.location.href,n=t.indexOf("#");return n===-1?"":t.substring(n+1)},y=function(t){return window.location.hash=t},g=function(t){var n=window.location.href.indexOf("#");window.location.replace(window.location.href.slice(0,n>=0?n:0)+"#"+t)},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};d.canUseDOM?void 0:(0,c.default)(!1);var n=window.history,e=((0,d.supportsGoWithoutReloadUsingHash)(),t.getUserConfirmation),o=void 0===e?d.getConfirmation:e,i=t.hashType,a=void 0===i?"slash":i,f=t.basename?(0,s.stripTrailingSlash)((0,s.addLeadingSlash)(t.basename)):"",m=p[a],w=m.encodePath,b=m.decodePath,P=function(){var t=b(v());return f&&(t=(0,s.stripBasename)(t,f)),(0,u.createLocation)(t)},O=(0,l.default)(),L=function(t){r(V,t),V.length=n.length,O.notifyListeners(V.location,V.action)},x=!1,S=null,E=function(){var t=v(),n=w(t);if(t!==n)g(n);else{var e=P(),o=V.location;if(!x&&(0,u.locationsAreEqual)(o,e))return;if(S===(0,s.createPath)(e))return;S=null,_(e)}},_=function(t){if(x)x=!1,L();else{var n="POP";O.confirmTransitionTo(t,n,o,function(e){e?L({action:n,location:t}):A(t)})}},A=function(t){var n=V.location,e=H.lastIndexOf((0,s.createPath)(n));e===-1&&(e=0);var o=H.lastIndexOf((0,s.createPath)(t));o===-1&&(o=0);var r=e-o;r&&(x=!0,R(r))},k=v(),M=w(k);k!==M&&g(M);var T=P(),H=[(0,s.createPath)(T)],j=function(t){return"#"+w(f+(0,s.createPath)(t))},U=function(t,n){var e="PUSH",r=(0,u.createLocation)(t,void 0,void 0,V.location);O.confirmTransitionTo(r,e,o,function(t){if(t){var n=(0,s.createPath)(r),o=w(f+n),i=v()!==o;if(i){S=n,y(o);var a=H.lastIndexOf((0,s.createPath)(V.location)),c=H.slice(0,a===-1?0:a+1);c.push(n),H=c,L({action:e,location:r})}else L()}})},C=function(t,n){var e="REPLACE",r=(0,u.createLocation)(t,void 0,void 0,V.location);O.confirmTransitionTo(r,e,o,function(t){if(t){var n=(0,s.createPath)(r),o=w(f+n),i=v()!==o;i&&(S=n,g(o));var a=H.indexOf((0,s.createPath)(V.location));a!==-1&&(H[a]=n),L({action:e,location:r})}})},R=function(t){n.go(t)},B=function(){return R(-1)},I=function(){return R(1)},q=0,F=function(t){q+=t,1===q?(0,d.addEventListener)(window,h,E):0===q&&(0,d.removeEventListener)(window,h,E)},D=!1,G=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=O.setPrompt(t);return D||(F(1),D=!0),function(){return D&&(D=!1,F(-1)),n()}},W=function(t){var n=O.appendListener(t);return F(1),function(){F(-1),n()}},V={length:n.length,action:"POP",location:T,createHref:j,push:U,replace:C,go:R,goBack:B,goForward:I,block:G,listen:W};return V};n.default=m},function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}n.__esModule=!0;var r=("function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}),i=e(3),a=(o(i),e(1)),c=e(2),u=e(4),s=o(u),f=function(t,n,e){return Math.min(Math.max(t,n),e)},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.getUserConfirmation,e=t.initialEntries,o=void 0===e?["/"]:e,i=t.initialIndex,u=void 0===i?0:i,l=t.keyLength,d=void 0===l?6:l,h=(0,s.default)(),p=function(t){r(_,t),_.length=_.entries.length,h.notifyListeners(_.location,_.action)},v=function(){return Math.random().toString(36).substr(2,d)},y=f(u,0,o.length-1),g=o.map(function(t){return"string"==typeof t?(0,c.createLocation)(t,void 0,v()):(0,c.createLocation)(t,void 0,t.key||v())}),m=a.createPath,w=function(t,e){var o="PUSH",r=(0,c.createLocation)(t,e,v(),_.location);h.confirmTransitionTo(r,o,n,function(t){if(t){var n=_.index,e=n+1,i=_.entries.slice(0);i.length>e?i.splice(e,i.length-e,r):i.push(r),p({action:o,location:r,index:e,entries:i})}})},b=function(t,e){var o="REPLACE",r=(0,c.createLocation)(t,e,v(),_.location);h.confirmTransitionTo(r,o,n,function(t){t&&(_.entries[_.index]=r,p({action:o,location:r}))})},P=function(t){var e=f(_.index+t,0,_.entries.length-1),o="POP",r=_.entries[e];h.confirmTransitionTo(r,o,n,function(t){t?p({action:o,location:r,index:e}):p()})},O=function(){return P(-1)},L=function(){return P(1)},x=function(t){var n=_.index+t;return n>=0&&n<_.entries.length},S=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return h.setPrompt(t)},E=function(t){return h.appendListener(t)},_={length:g.length,action:"POP",location:g[y],index:y,entries:g,createHref:m,push:w,replace:b,go:P,goBack:O,goForward:L,canGo:x,block:S,listen:E};return _};n.default=l},function(t,n){"use strict";function e(t){return"/"===t.charAt(0)}function o(t,n){for(var e=n,o=e+1,r=t.length;o<r;e+=1,o+=1)t[e]=t[o];t.pop()}function r(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=t&&t.split("/")||[],i=n&&n.split("/")||[],a=t&&e(t),c=n&&e(n),u=a||c;if(t&&e(t)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";var s=void 0;if(i.length){var f=i[i.length-1];s="."===f||".."===f||""===f}else s=!1;for(var l=0,d=i.length;d>=0;d--){var h=i[d];"."===h?o(i,d):".."===h?(o(i,d),l++):l&&(o(i,d),l--)}if(!u)for(;l--;l)i.unshift("..");!u||""===i[0]||i[0]&&e(i[0])||i.unshift("");var p=i.join("/");return s&&"/"!==p.substr(-1)&&(p+="/"),p}n.__esModule=!0,n.default=r,t.exports=n.default},function(t,n){"use strict";function e(t,n){if(t===n)return!0;if(null==t||null==n)return!1;if(Array.isArray(t))return Array.isArray(n)&&t.length===n.length&&t.every(function(t,o){return e(t,n[o])});var r="undefined"==typeof t?"undefined":o(t),i="undefined"==typeof n?"undefined":o(n);if(r!==i)return!1;if("object"===r){var a=t.valueOf(),c=n.valueOf();if(a!==t||c!==n)return e(a,c);var u=Object.keys(t),s=Object.keys(n);return u.length===s.length&&u.every(function(o){return e(t[o],n[o])})}return!1}n.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};n.default=e,t.exports=n.default}])});