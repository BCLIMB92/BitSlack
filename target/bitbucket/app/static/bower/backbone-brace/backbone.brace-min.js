(function(){function n(a){return c.isArray(a)?c.reduce(a,function(b,a){b[a]=null;return b},{}):a}function l(a,b){if(!a||null==b)return b;if("string"===typeof a||a instanceof String){if(typeof b!==""+a)throw"The typeof "+b+" is "+typeof b+" but expected it to be "+a;return b}if(c.isArray(a)||a===Array){if(!c.has(b,"length")||b instanceof String||c.has({string:1,"function":1},typeof b)||b instanceof g.Collection)throw"Array type expected, but nonnull, non-Array value provided.";return a!==Array&&a[0]?
c.map(b,c.bind(l,null,a[0])):b}if("function"!==typeof a)throw"Invalid expected type "+a+". Should be falsy, String, Array, Backbone.Collection constructor, or function.";return b instanceof a?b:p(a)?new a(l([a.model],b)):new a(b)}function p(a,b){return a&&(a.__super__ instanceof(b||g.Collection)||a.__super__===(b||g.Collection).prototype||a===(b||g.Collection))}function r(a,b){var e={};c.each(a,function(a,c){if(!b[c]||q(a,b[c]))e[c]=a;else if(a&&!q(b[c],a))throw c+" has conflicted type descriptors.";
});return e}function q(a,b){return b&&b!==a?a&&"string"!==typeof a?a instanceof Array?b===Array||b instanceof Array&&q(a[0],b[0]):"function"!==typeof b?!1:p(b)?p(a,b):a.prototype instanceof b:!1:!0}function u(a){return c.isObject(a)?c.reduce(a,function(a,e,d){e&&c.isFunction(e.toJSON)?a[d]=e.toJSON():c.isArray(e)&&(a[d]=c.map(e,function(a){return a&&c.isFunction(a.toJSON)?a.toJSON():a}));return a},a):a}function v(a){return function(){var b=a.call(this);return u(b)}}function w(a){return function e(d,
t){var g=c.extend({},d);if(d&&d.mixins){var k=d.mixins;delete g.mixins}var h=a.call(this,g,t);this.prototype.namedEvents&&f.Mixins.applyMixin(h,{namedEvents:this.prototype.namedEvents});this.prototype.namedAttributes&&f.Mixins.applyMixin(h,{namedAttributes:this.prototype.namedAttributes});k&&c.each(d.mixins,function(a){f.Mixins.applyMixin(h,a)});h.prototype.namedEvents&&f.Mixins.applyMixin(h,f.EventsMixinCreator.create(h.prototype.namedEvents));h.prototype.namedAttributes&&(h.prototype.namedAttributes=
n(h.prototype.namedAttributes),f.Mixins.applyMixin(h,f.AttributesMixinCreator.create(h.prototype.namedAttributes)));h.prototype.toJSON&&(h.prototype.toJSON=v(h.prototype.toJSON));h.extend=e;return h}}function x(a,b){a=a.prototype;b=b.prototype;var e=a.set;b.set=function(a,b,d){var h=this.namedAttributes;if(!h||null==a)return e.apply(this,arguments);if(c.isObject(a)){var f=c.clone(a);d=b}else f={},f[a]=b;for(var g in f)if(c.has(f,g)){if(!c.has(h,g))throw"Attribute '"+g+"' does not exist";f[g]=l(h[g],
f[g])}return e.call(this,f,d)};var d=a.get;b.get=function(a){if(this.namedAttributes&&!c.has(this.namedAttributes,a))throw"Attribute '"+a+"' does not exist";return d.apply(this,arguments)}}function m(a){var b=a.extend();b.extend=w(a.extend);return b}var f="undefined"!==typeof exports?exports:this.Brace={};var c=this._;c||"undefined"===typeof require||(c=require("underscore"));var g=this.Backbone;g||"undefined"===typeof require||(g=require("backbone"));f.Mixins={createMethodName:function(a,b){return a+
b.charAt(0).toUpperCase()+b.substr(1)},applyMixin:function(a,b){c.forEach(c.keys(b),function(e){var d=a.prototype;if("initialize"===e){var f=d.initialize;d.initialize=function(){f&&f.apply(this,arguments);b.initialize.apply(this,arguments)}}else if("validate"===e){var g=d.validate;d.validate=function(){if(g){var a=g.apply(this,arguments);if(a)return a}return b.validate.apply(this,arguments)}}else if("defaults"===e){d=d.defaults||(d.defaults={});e=b[e];for(var k in e){if(d.hasOwnProperty(k))throw"Mixin error: class already has default '"+
k+"' defined";d[k]=e[k]}}else if("namedAttributes"===e)k=n(d.namedAttributes)||{},e=n(b[e]),d.namedAttributes=c.extend(k,r(e,k));else if("namedEvents"===e){if(!c.isArray(b[e]))throw"Expects events member on mixin to be an array";d.namedEvents||(d.namedEvents=[]);d.namedEvents=c.uniq(d.namedEvents.concat(b[e]))}else{if(d.hasOwnProperty(e))throw"Mixin error: class already has property '"+e+"' defined";d[e]=b[e]}},this)}};f.AttributesMixinCreator={create:function(a){var b={};a||(a={});c.has(a,"id")||
(a.id=null);c.each(a,function(a,c){a=f.Mixins.createMethodName("set",c);b[a]=function(a,b){return this.set(c,a,b)};a=f.Mixins.createMethodName("get",c);b[a]=function(){return this.get(c)}});return b},ensureType:l};f.EventsMixinCreator={create:function(a){var b={};c.each(a,c.bind(function(a){var d=f.Mixins.createMethodName("on",a);b[d]=function(){return this.on.apply(this,[a].concat(c.toArray(arguments)))};d=f.Mixins.createMethodName("trigger",a);b[d]=function(){return this.trigger.apply(this,[a].concat(c.toArray(arguments)))}},
this));return b}};f.Model=function(a){var b=m(a);x(a,b);return b}(g.Model);f.Collection=m(g.Collection);f.View=m(g.View);f.Router=m(g.Router)})();