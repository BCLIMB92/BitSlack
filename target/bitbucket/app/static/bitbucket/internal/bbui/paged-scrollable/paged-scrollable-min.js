define("bitbucket/internal/bbui/paged-scrollable/paged-scrollable","module exports jquery lodash bitbucket/internal/util/function bitbucket/internal/util/navigator ../javascript-errors/javascript-errors ../widget/widget".split(" "),function(n,e,p,q,r,l,t,u){function b(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};m.default.call(this,b);if(this.options.dataProvider)this.provider=this.options.dataProvider;else throw Error("PagedScrollable must be given a DataProvider as an option `dataProvider`");
this.$scrollElement=(0,c.default)(b.scrollPaneSelector||window);if(c.default.isWindow(this.$scrollElement[0])){var d=window.document.documentElement;this.getPaneHeight=function(){return d.clientHeight};this.getContentHeight=function(){return d.scrollHeight}}this._eventHandlers=[];this._page=-1;this.provider.on("reset",function(){a._page=-1;a.clear();a.loadIfRequired()})}function h(){var a=this;return this.provider.isFetching?c.default.Deferred().reject():this.provider.fetchNext().done(this.onDataLoaded).fail(function(){a.options.suspendOnFailure&&
a.suspend()})}Object.defineProperty(e,"__esModule",{value:!0});var c=babelHelpers.interopRequireDefault(p),f=babelHelpers.interopRequireDefault(q),v=babelHelpers.interopRequireDefault(r),k=babelHelpers.interopRequireDefault(t),m=babelHelpers.interopRequireDefault(u);b.prototype=Object.create(m.default.prototype);b.prototype.constructor=b;b.defaults={pageSize:50,scrollDelay:250,bufferPixels:0,suspendOnFailure:!0,autoLoad:!0,preventOverscroll:!1,idForEntity:null};b.prototype.init=function(){var a=this,
g=arguments,d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};b.prototype.reset.call(this);d.suspended&&this.suspend();return h.call(this).then(void 0,function(){var b=a.options.pageSize;return 0!==(d.targetedItem?Math.floor(d.targetedItem/b)*b:0)?h.call(a):c.default.Deferred().rejectWith(a,g)}).fail(function(b){f.default.get(b,"errors.length")&&a.handleErrors(b.errors)})};b.prototype.reset=function(){this.provider.isFetching&&this.provider.abort();this.clearListeners();this._resizeHandler&&
((0,c.default)(window).off("resize",this._resizeHandler),this._resizeHandler=null);this.idForEntity=this.idForEntity||this.options.idForEntity;"function"===typeof this.idForEntity&&(this._ids={});this._suspended=!1;this._page=-1;this.clear()};b.prototype.destroy=function(){this.reset();delete this.$scrollElement};b.prototype.suspend=function(){this._suspended=!0};b.prototype.resume=function(){this._suspended=!1;return this.loadIfRequired()};b.prototype.isSuspended=function(){return this._suspended};
b.prototype.getScrollTop=function(){return this.$scrollElement.scrollTop()};b.prototype.setScrollTop=function(a){this.$scrollElement.scrollTop(a)};b.prototype.getPane=function(){return this.$scrollElement};b.prototype.getPaneHeight=function(){return this.$scrollElement[0].clientHeight};b.prototype.getContentHeight=function(){return this.$scrollElement[0].scrollHeight};b.prototype.getOption=function(a){if(Object.prototype.hasOwnProperty.call(this.options,a))return this.options[a]};b.prototype.setOptions=
function(a){c.default.isPlainObject(a)&&(this.options=c.default.extend(this.options,a))};b.prototype.addScrollListener=function(a){a=this.scrollDelay?f.default.debounce(a,this.scrollDelay):a;this._eventHandlers.push(a);this.$scrollElement.on("scroll.paged-scrollable",a)};b.prototype._bindOverscrollPrevention=function(){function a(a,b){var g=(0,c.default)(this).outerHeight();(this.scrollTop===this.scrollHeight-g&&0>b||0===this.scrollTop&&0<b)&&a.preventDefault()}this._eventHandlers.push(a);this.$scrollElement.on("mousewheel.paged-scrollable",
a)};b.prototype.clearListeners=function(){var a=this;f.default.forEach(this._eventHandlers,function(b){a.$scrollElement.unbind(".paged-scrollable",b)});this._eventHandlers.length=0};b.prototype.loadIfRequired=function(){if(!this.isSuspended()&&!this.provider.reachedEnd){var a=this.getScrollTop(),b=this.getPaneHeight(),d=this.getContentHeight();a=b+a;if((c.default.isWindow(this.getPane()[0])||!this.getPane().is(":hidden"))&&f.default.some([!0,"next"],v.default.eq(this.options.autoLoad))&&a+1>=d-this.options.bufferPixels)return this.load()}};
b.prototype.load=function(){var a=this;return h.call(this).fail(function(b){b&&b.errors&&a.handleErrors(b.errors)})};b.prototype.onDataLoaded=function(a){this._page++;0<this._page&&this.trigger("pagination",{page:this._page+1});var b=void 0;(0,l.isIE)()&&(b=this.getScrollTop());a=this._addPage(a);(0,l.isIE)()&&this.setScrollTop(b);if(0===this._page)this.onFirstDataLoaded(a);this.loadIfRequired()};b.prototype._addPage=function(a){a=this._dedupe(a);this.attachNewContent(a);this.trigger("page-rendered");
return a};b.prototype._dedupe=function(a){var b=this;if(a&&(Array.isArray(a)&&0<a.length||Array.isArray(a.values))&&"function"===typeof this.idForEntity){var d=this._ids,e=function(a){a=b.idForEntity(a);return f.default.has(d,a)?!1:d[a]=!0};if(Array.isArray(a))return a.filter(e);if(Array.isArray(a.values))return a=c.default.extend({},a,{values:a.values.filter(e)})}else return a};b.prototype.onFirstDataLoaded=function(){var a=this;this.addScrollListener(function(){a.loadIfRequired()});this.options.preventOverscroll&&
this._bindOverscrollPrevention();(0,c.default)(window).on("resize",this._resizeHandler=function(){a.loadIfRequired()})};b.prototype.add=function(a){return a.length?(this._addPage(a),!0):!1};b.prototype.remove=function(a){return this.options.idForEntity&&(a=this.options.idForEntity(a),f.default.has(this._ids,a))?(delete this._ids[a],!0):!1};b.prototype.attachNewContent=function(a){throw new k.default.NotImplementedError("attachNewContent is abstract and must be implemented.");};b.prototype.handleErrors=
function(a){throw new k.default.NotImplementedError("handleErrors is abstract and must be implemented.");};b.prototype.clear=function(){throw new k.default.NotImplementedError("clear is abstract and must be implemented.");};e.default=b;n.exports=e["default"]});