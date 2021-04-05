define("bitbucket/internal/util/markup",["module","exports"],function(q,g){function r(b,a,c,d){b=b.indexOf(a,c||0);return-1===b||d&&b>d?null:b}function l(b){for(var a=0,c=[],d=!1,h=!1,e=/`/,g=/`|~/,l=/^(~~~+|```+[\S]*)/,q=/\\/,t=0;a<b.length;){var m=a,n=b[a++],k=n;"\n"===n&&(t=a,d&&(c.push({start:m,end:a,value:k,blockType:p.INLINE,type:f.CODE_END}),d=!1));if(g.test(n)){var u=b.substring(t,r(b,"\n",a)||b.length);if(l.test(u)){for(;"\n"!==b[a]&&a<b.length;)k+=b[a++];if(h){if(c[c.length-1].value.substring(0,
3)!==k.substring(0,3))continue;h=!1}else h=!0;c.push({start:m,end:a,value:k,blockType:p.FENCED,type:h?f.CODE_START:f.CODE_END})}else q.test(b[m-1])||h||!e.test(n)||(d=d?!1:!0,c.push({start:m,end:a,value:k,blockType:p.INLINE,type:d?f.CODE_START:f.CODE_END}))}}return c}Object.defineProperty(g,"__esModule",{value:!0});var f={CODE_START:"CODE_START",CODE_END:"CODE_END"},p={INLINE:"INLINE",FENCED:"FENCED"};g.default={TokenTypes:f,BlockTypes:p,isPositionInsideCodeBlock:function(b,a){var c=l(a),d=!1;c.forEach(function(a,
e){if(a.type===f.CODE_START&&a.start<b&&((e=c[e+1])&&e.type===f.CODE_END&&e.blockType===a.blockType&&e.start>=b||!e))return d=!0,!1});return d},codeBlockTokenizer:l,findNextTokenIndex:r};q.exports=g["default"]});