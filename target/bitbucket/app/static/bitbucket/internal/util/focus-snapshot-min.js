define("bitbucket/internal/util/focus-snapshot",["module","exports","jquery"],function(d,a,e){Object.defineProperty(a,"__esModule",{value:!0});var f=babelHelpers.interopRequireDefault(e);a.default=function(){var b,c;return{save:function(){var a=document.activeElement;a&&(b=(0,f.default)(a),b.is(":text, textarea")&&(c=b.getSelection()))},restore:function(){b&&(b.focus(),c&&b.setSelection(c.start,c.end))}}}();d.exports=a["default"]});