define("bitbucket/internal/widget/submit-spinner/submit-spinner",["module","exports","jquery"],function(c,b,e){function a(b,c){if(!(this instanceof a))return new (Function.prototype.bind.apply(a,[null].concat(Array.prototype.slice.call(arguments))));this.$button=(0,d.default)(b);this.$spinner=(0,d.default)('\x3cdiv class\x3d"submit-spinner invisible" /\x3e');"before"===c?this.$spinner.insertBefore(this.$button):this.$spinner.insertAfter(this.$button)}Object.defineProperty(b,"__esModule",{value:!0});
var d=babelHelpers.interopRequireDefault(e);a.prototype.show=function(){this.$spinner.removeClass("invisible");this.$spinner.spin();return this};a.prototype.hide=function(){this.$spinner.addClass("invisible");this.$spinner.spinStop();return this};a.prototype.remove=function(){this.$spinner.remove();return this};b.default=a;c.exports=b["default"]});