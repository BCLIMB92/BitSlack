define("bitbucket/internal/feature/file-content/binary-diff-view/binary-diff-view","module exports jquery bitbucket/internal/bbui/image-differ/image-differ bitbucket/internal/feature/file-content/binary-view/binary-view bitbucket/internal/model/file-change bitbucket/internal/util/events".split(" "),function(k,d,l,m,n,p,q){function c(a,b){this._init(a,b)}function h(a,b){if(a&&b)return r.default.getRenderedBinary(a,b.getId())}Object.defineProperty(d,"__esModule",{value:!0});var f=babelHelpers.interopRequireDefault(l),
r=babelHelpers.interopRequireDefault(n),t=babelHelpers.interopRequireDefault(p),u=babelHelpers.interopRequireDefault(q);c.prototype.isDiffingImages=function(){return this._isDiffingImages};c.prototype._init=function(a,b){var e=(new t.default(b.fileChange)).getCommitRange(),c=e.getUntilRevision();e=e.getSinceRevision();this._$container=(0,f.default)(bitbucket.internal.feature.fileContent.binaryView.container()).appendTo(b.$container);var d=h(a.source,e),g=h(a.destination,c);this._renderBinaryDiff(d,
g).done(function(){b.$container.addClass("fully-loaded")});a={containerEl:this._$container.get(0),sourcePath:a.source,sourceType:d&&d.type,sinceRevision:e&&e.toJSON(),destinationPath:a.destination,destinationType:g&&g.type,untilRevision:c&&c.toJSON()};u.default.trigger("bitbucket.internal.feature.fileContent.binaryDiffShown",null,a)};c.prototype._renderBinaryDiff=function(a,b){var c=this;a&&(0,f.default)(bitbucket.internal.feature.fileContent.binaryView.old({})).append(a.$elem).appendTo(this._$container);
b&&(0,f.default)(bitbucket.internal.feature.fileContent.binaryView.new({})).append(b.$elem).appendTo(this._$container);return(this._isDiffingImages=a&&b&&a.type===b.type&&"image"===a.type)?(0,m.init)(this._$container).done(function(a){c.imageDiff=a}):f.default.Deferred().resolve()};c.prototype.destroy=function(){this.imageDiff&&(this.imageDiff.destroy(),this.imageDiff=null);this._$container&&(this._$container.remove(),this._$container=null)};d.default=c;k.exports=d["default"]});