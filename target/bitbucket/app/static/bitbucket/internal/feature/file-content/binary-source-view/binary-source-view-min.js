define("bitbucket/internal/feature/file-content/binary-source-view/binary-source-view",["module","exports","jquery","bitbucket/internal/feature/file-content/binary-view/binary-view","bitbucket/internal/util/events"],function(d,c,f,g,h){function b(a){this._init(a)}Object.defineProperty(c,"__esModule",{value:!0});var e=babelHelpers.interopRequireDefault(f),k=babelHelpers.interopRequireDefault(g),l=babelHelpers.interopRequireDefault(h);b.prototype._init=function(a){var c=a.fileChange.path,b=a.fileChange.commitRange.untilRevision;
this._$container=(0,e.default)(bitbucket.internal.feature.fileContent.binaryView.container()).appendTo(a.$container);a=k.default.getRenderedBinary(c,b&&b.id);var d=this._$container;(0,e.default)(bitbucket.internal.feature.fileContent.binaryView.cell({})).append(a.$elem).appendTo(d);l.default.trigger("bitbucket.internal.feature.fileContent.binaryShown",null,{containerEl:this._$container.get(0),path:c,type:a&&a.type,revision:b})};b.prototype.destroy=function(){this._$container&&(this._$container.remove(),
this._$container=null)};c.default=b;d.exports=c["default"]});