define("bitbucket/internal/bbui/utils/actors",["exports","lodash","bitbucket/util/server"],function(b,c,g){Object.defineProperty(b,"__esModule",{value:!0});b.restActor=function(a,b){var d=a.type,h=a.payload;a=a.meta;var e=(0,c.get)(a,"rest");if(e){var f=babelHelpers.extends({},(0,c.omit)(a,"rest"),{originalPayload:h});(0,g.rest)(e).done(function(a){b({type:d+"_SUCCESS",payload:a,meta:f})}).fail(function(a){b({type:d+"_FAILURE",payload:a,meta:f})})}}});