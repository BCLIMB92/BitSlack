define("bitbucket/internal/feature/tasks/model/task-state",["module","exports"],function(c,b){Object.defineProperty(b,"__esModule",{value:!0});var a={DEFAULT:"NONE",OPEN:"OPEN",RESOLVED:"RESOLVED",DELETED:"DELETED",Transitions:{}};a.Transitions[a.DEFAULT]=a.OPEN;a.Transitions[a.OPEN]=a.RESOLVED;a.Transitions[a.RESOLVED]=a.OPEN;b.default=a;c.exports=b["default"]});