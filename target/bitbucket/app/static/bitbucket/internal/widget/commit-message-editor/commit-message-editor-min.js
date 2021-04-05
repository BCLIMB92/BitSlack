define("bitbucket/internal/widget/commit-message-editor/commit-message-editor",["exports","@atlassian/aui","lodash","bitbucket/internal/feature/file-content/editor-mode","bitbucket/internal/feature/file-content/stash-codemirror/stash-codemirror"],function(d,k,c,l,m){Object.defineProperty(d,"__esModule",{value:!0});d.getCommitMessageEditor=function(b){var a=(0,c.get)(b,"nextSibling.CodeMirror");a?(a.setValue(b.value),a.off("focus",e),a.off("blur",f),a.off("keydown",g)):(new n.default(b,{autoResizing:!0,
editorMode:p.default.EDIT,fromTextArea:!0,lineNumbers:!1,lineWrapping:!0,theme:"commit-message",keyMap:"default"}),a=(0,c.get)(b,"nextSibling.CodeMirror"),a.on("change",function(){a.save()}));a.state.initialValue=a.getDoc().getValue();a.on("blur",f);a.on("focus",e);a.on("keydown",g);return a};var p=babelHelpers.interopRequireDefault(l),n=babelHelpers.interopRequireDefault(m),f=function(b){var a=b.getDoc().getValue(),c=b.state.initialValue;a!==c&&a!==""+c+"\n\n"||setTimeout(function(){b.setValue(c);
h(b)},250)},e=function(b){var a=b.getDoc().getValue();a!==b.state.initialValue||(0,c.includes)(a,"\n\n")||(b.setValue(""+a+"\n\n"),h(b),b.setCursor(Infinity,0))},h=function(b){var a=b.getWrapperElement();b=a.querySelector(".CodeMirror-scroll");a=a.querySelector(".CodeMirror-sizer");b.style.minHeight=a.clientHeight+"px"},g=function(b,a){a.keyCode===k.keyCode.TAB&&(a.codemirrorIgnore=!0)}});