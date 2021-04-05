define("bitbucket/internal/bbui/mirroring-admin/mirroring-admin","module exports @atlassian/aui jquery lodash bitbucket/internal/impl/request bitbucket/internal/impl/urls ../list-and-detail-view/list-and-detail-view ../widget/widget ./mirror-view/mirror-view ./nav-builder ./request-view/request-view".split(" "),function(t,g,k,u,v,w,x,y,z,l,m,f){function p(d){return h.default.isEmpty(d)||!h.default.some(d,function(d){return!h.default.isEmpty(d)})}function A(d){(d=h.default.get(d,"responseJSON.errors"))?
(d=d.map(function(d){return d.message}).join(""),console.warn("Failed to refresh list. Error: "+d)):console.warn("Failed to refresh list. Unknown error.")}Object.defineProperty(g,"__esModule",{value:!0});var n=babelHelpers.interopRequireDefault(k),d=babelHelpers.interopRequireDefault(u),h=babelHelpers.interopRequireDefault(v),q=babelHelpers.interopRequireDefault(w);babelHelpers.interopRequireDefault(x);var B=babelHelpers.interopRequireDefault(y);k=babelHelpers.interopRequireDefault(z);l=babelHelpers.interopRequireDefault(l);
var r=babelHelpers.interopRequireDefault(m);m=babelHelpers.interopRequireDefault(f);f=function(f){function e(a,c){babelHelpers.classCallCheck(this,e);var b=babelHelpers.possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,c));b.$el=(0,d.default)(a);b.options.unavailable?b.$el.html(bitbucket.internal.component.mirroringAdmin.main({isEmpty:!0,unavailableText:n.default.escapeHtml(b.options.unavailableMessage)})):(b.navListItems={mirror:{},request:{}},b.options.requests.forEach(function(a){return b.addToNavListItems(a,
"request")}),b.options.mirrors.forEach(function(a){return b.addToNavListItems(a,"mirror")}),b.$el.html(bitbucket.internal.component.mirroringAdmin.main({isEmpty:p(b.navListItems)})),b.listAndDetailView=new B.default(b.$el.find(".mirroring-admin"),{selectHandler:b.itemSelectedHandler,selectFirstOnInit:!0,selectedClass:"selected-item",listContent:bitbucket.internal.component.mirroringAdmin.navbar({mirrors:b.options.mirrors,requests:b.options.requests})}),b.setPolling(),(0,d.default)(document).on("visibilitychange",
function(){b.setPolling(document.hidden?10:1)}));return b}babelHelpers.inherits(e,f);babelHelpers.createClass(e,[{key:"destroy",value:function(){clearTimeout(this.timeout);clearInterval(this.statusInterval);babelHelpers.get(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"destroy",this).call(this);this.$el.empty();this.$el=null}},{key:"addToNavListItems",value:function(a,c){this.navListItems[c][a.id]=a}},{key:"setPolling",value:function(){var a=0<arguments.length&&void 0!==arguments[0]?
arguments[0]:1;0>=a?console.warn("Poll multiplier must be greater than 0."):(this.multiplier=a,clearTimeout(this.timeout),clearInterval(this.statusInterval),this.options.refreshInterval&&(this.timeout=setTimeout(this.refreshList,this.options.refreshInterval*a)),this.checkMirrorStatus(a))}},{key:"checkMirrorStatus",value:function(){var a=this,c=6E4*(0<arguments.length&&void 0!==arguments[0]?arguments[0]:1),b=function(){if(a.navListItems.mirror){var b=h.default.map(a.navListItems.mirror,function(b){return d.default.ajax(b.baseUrl+
"/status",{method:"HEAD",timeout:c}).then(function(){a.setMirrorStatus(b,"online");return"online"},function(){a.setMirrorStatus(b,"offline");return"offline"})});a._healthCheck=d.default.when.apply(d.default,babelHelpers.toConsumableArray(b))}};b();this.statusInterval=setInterval(b,c)}},{key:"itemSelectedHandler",value:function(a,c,b){c=a.attr("data-type");a=a.attr("data-id");a={item:this.navListItems[c][a]};if(a.item){this.currentView&&this.currentView.destroy();var d=this.options.views[c];if(d)if(this.currentView=
new d(b,a),"request"===c)this.currentView.on("request-resolved",this.transitionItem);else{if("mirror"===c)this.currentView.on("mirror-removed",this.removeItem)}else throw Error("Invalid view type '"+c+"'");}}},{key:"findBeforeElement",value:function(){var a=this.listAndDetailView.$listView.find(".mirror");return a.length?a[0]:(0,d.default)("#learn-more-mirroring")}},{key:"removeItem",value:function(a){delete this.navListItems[a.type][a.id];a=this.listAndDetailView.$listView.find('[data-id\x3d"'+a.id+
'"][data-type\x3d"'+a.type+'"]');this.listAndDetailView.removeItem(a,".mirror");this.updateEmptyState()}},{key:"removeStaleItems",value:function(a){var c=this;Object.keys(this.navListItems).forEach(function(b){var d=Object.keys(c.navListItems[b]||{}),e=Object.keys(a[b]||{});h.default.difference(d,e).forEach(function(a){c.removeItem({type:b,id:a})})})}},{key:"refreshList",value:function(){var a=this;if(this.refreshPromise)return null;var c=q.default.rest({type:"GET",url:r.default.rest().mirroring().path("requests").params({state:"pending"}).build(),
statusCode:{"*":!1}}),b=q.default.rest({type:"GET",url:r.default.rest().mirroring().path("mirrorServers").build(),statusCode:{"*":!1}}),e={},f=function(b,c,f){e[c]||(e[c]={});e[c][b.id]=b;if(!a.navListItems[c]||!a.navListItems[c][b.id]){var g=!h.default.some(a.navListItems,h.default.size);a.addToNavListItems(b,c);a.listAndDetailView.addItem((0,d.default)(f(babelHelpers.defineProperty({},c,b))),a.findBeforeElement(),g)}};n.default.$(".list-refresh-spinner").spin();var g=d.default.Deferred();this.refreshPromise=
d.default.when(c,b);this.refreshPromise.always(function(){n.default.$(".list-refresh-spinner").spinStop();a.refreshPromise=null;a.options.refreshInterval&&(a.timeout=setTimeout(a.refreshList,a.options.refreshInterval*a.multiplier))}).done(function(b,c){b[0].values.forEach(function(a){f(a,"request",bitbucket.internal.component.mirroringAdmin.mirrorRequestNavItem)});c[0].values.forEach(function(a){f(a,"mirror",bitbucket.internal.component.mirroringAdmin.mirrorNavItem)});a.removeStaleItems(e);a.updateEmptyState();
g.resolve()}).fail(function(a){A(a);g.reject()});return g.promise()}},{key:"setMirrorStatus",value:function(a,c){a=this.listAndDetailView.$listView.find('[data-id\x3d"'+a.id+'"][data-type\x3d"mirror"]');c=bitbucket.internal.component.mirroringAdmin.mirrorStatus({status:c});var b=a.find(".status-container");if(c!==b.html()){b.append(c);var d=a.find(".status");d.one("transitionend",function(){d.last().removeClass("transitioning");d.first().remove()}).addClass("transitioning")}}},{key:"updateEmptyState",
value:function(){var a=p(this.navListItems);(0,d.default)(".mirroring-admin").toggleClass("hidden",a);(0,d.default)(".empty-state").toggleClass("hidden",!a)}},{key:"transitionItem",value:function(a){switch(a.resolution){case "accept":this.transformToMirror(a).click();break;case "reject":this.removeItem(a)}this.updateEmptyState()}},{key:"transformToMirror",value:function(a){delete this.navListItems[a.type][a.id];var c=a.responseJSON;this.addToNavListItems(c,"mirror");a=this.listAndDetailView.$listView.find('[data-id\x3d"'+
a.id+'"][data-type\x3d"'+a.type+'"]');a.removeClass("mirror-request");a.attr("data-id",c.id);a.attr("data-type","mirror");this.setMirrorStatus(c,c.enabled?"enabled":"disabled");return a}}]);return e}(k.default);g.default=f;f.defaults={mirrors:[],requests:[],refreshInterval:0,unavailable:!1,unavailableMessage:"",views:{mirror:l.default,request:m.default}};t.exports=g["default"]});