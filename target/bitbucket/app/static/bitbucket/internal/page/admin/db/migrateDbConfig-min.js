define("bitbucket/internal/page/admin/db/migrateDbConfig",["module","exports","@atlassian/aui","jquery"],function(f,a,g,h){function d(c){var a=(0,b.default)("#cancel");(0,b.default)("\x3cdiv class\x3d'next-text'\x3e\x3c/div\x3e").text(c).insertAfter(a);c=(0,b.default)("\x3cdiv class\x3d'next-spinner' /\x3e");c.insertAfter(a);c.spin("small");a.hide()}Object.defineProperty(a,"__esModule",{value:!0});var e=babelHelpers.interopRequireDefault(g),b=babelHelpers.interopRequireDefault(h);a.default={onReady:function(){(0,
b.default)("#test").click(function(){d(e.default.I18n.getText("bitbucket.web.admin.database.migration.test"))});(0,b.default)("#submit").click(function(){d(e.default.I18n.getText("bitbucket.web.admin.database.migration.migrate"))})}};f.exports=a["default"]});