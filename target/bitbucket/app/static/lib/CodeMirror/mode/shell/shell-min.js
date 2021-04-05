(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("shell",function(){function e(a,b){b=b.split(" ");for(var d=0;d<b.length;d++)l[b[d]]=a}function n(a,b){if(a.eatSpace())return null;var d=a.sol(),c=a.next();if("\\"===c)return a.next(),null;if("'"===c||'"'===c||"`"===c)return b.tokens.unshift(k(c,"`"===c?"quote":"string")),g(a,b);if("#"===
c){if(d&&a.eat("!"))return a.skipToEnd(),"meta";a.skipToEnd();return"comment"}if("$"===c)return b.tokens.unshift(m),g(a,b);if("+"===c||"\x3d"===c)return"operator";if("-"===c)return a.eat("-"),a.eatWhile(/\w/),"attribute";if(/\d/.test(c)&&(a.eatWhile(/\d/),a.eol()||!/\w/.test(a.peek())))return"number";a.eatWhile(/[\w-]/);b=a.current();return"\x3d"===a.peek()&&/\w+/.test(b)?"def":l.hasOwnProperty(b)?l[b]:null}function k(a,b){var d="("==a?")":"{"==a?"}":a;return function(c,e){for(var f,h=!1;null!=(f=
c.next());){if(f!==d||h)if("$"!==f||h||"'"===a||c.peek()==d){if(!h&&a!==d&&f===a)return e.tokens.unshift(k(a,b)),g(c,e);if(!h&&/['"]/.test(f)&&!/['"]/.test(a)){e.tokens.unshift(p(f,"string"));c.backUp(1);break}}else{c.backUp(1);e.tokens.unshift(m);break}else{e.tokens.shift();break}h=!h&&"\\"===f}return b}}function p(a,b){return function(d,c){c.tokens[0]=k(a,b);d.next();return g(d,c)}}function g(a,b){return(b.tokens[0]||n)(a,b)}var l={};e("atom","true false");e("keyword","if then do else elif while until for in esac fi fin fil done exit set unset export function");
e("builtin","ab awk bash beep cat cc cd chown chmod chroot clear cp curl cut diff echo find gawk gcc get git grep hg kill killall ln ls make mkdir openssl mv nc node npm ping ps restart rm rmdir sed service sh shopt shred source sort sleep ssh start stop su sudo svn tee telnet top touch vi vim wall wc wget who write yes zsh");var m=function(a,b){1<b.tokens.length&&a.eat("$");var d=a.next();if(/['"({]/.test(d))return b.tokens[0]=k(d,"("==d?"quote":"{"==d?"def":"string"),g(a,b);/\d/.test(d)||a.eatWhile(/\w/);
b.tokens.shift();return"def"};return{startState:function(){return{tokens:[]}},token:function(a,b){return g(a,b)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}});e.defineMIME("text/x-sh","shell");e.defineMIME("application/x-sh","shell")});