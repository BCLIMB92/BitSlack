(function(l){"object"==typeof exports&&"object"==typeof module?l(require("../lib/codemirror"),require("../addon/search/searchcursor"),require("../addon/edit/matchbrackets")):"function"==typeof define&&define.amd?define(["../lib/codemirror","../addon/search/searchcursor","../addon/edit/matchbrackets"],l):l(CodeMirror)})(function(l){function t(a,b){a.extendSelectionsBy(function(c){if(a.display.shift||a.doc.extend||c.empty()){var d=a.doc;c=c.head;if(0>b&&0==c.ch)var g=d.clipPos(k(c.line-1));else{var h=
d.getLine(c.line);if(0<b&&c.ch>=h.length)g=d.clipPos(k(c.line+1,0));else{d="start";for(var f=c.ch,e=0>b?0:h.length,p=0;f!=e;f+=b,p++){var q=h.charAt(0>b?f-1:f),n="_"!=q&&l.isWordChar(q)?"w":"o";"w"==n&&q.toUpperCase()==q&&(n="W");if("start"==d)"o"!=n&&(d="in",g=n);else if("in"==d&&g!=n)if("w"==g&&"W"==n&&0>b&&f--,"W"==g&&"w"==n&&0<b)g="w";else break}g=k(c.line,f)}}return g}return 0>b?c.from():c.to()})}function u(a,b){if(a.isReadOnly())return l.Pass;a.operation(function(){for(var c=a.listSelections().length,
d=[],g=-1,h=0;h<c;h++){var f=a.listSelections()[h].head;f.line<=g||(g=k(f.line+(b?0:1),0),a.replaceRange("\n",g,null,"+insertLine"),a.indentLine(g.line,null,!0),d.push({head:g,anchor:g}),g=f.line+1)}a.setSelections(d)});a.execCommand("indentAuto")}function r(a,b){var c=b.ch,d=c;for(a=a.getLine(b.line);c&&l.isWordChar(a.charAt(c-1));)--c;for(;d<a.length&&l.isWordChar(a.charAt(d));)++d;return{from:k(b.line,c),to:k(b.line,d),word:a.slice(c,d)}}function v(a,b){for(var c=a.listSelections(),d=[],g=0;g<
c.length;g++){var h=c[g],f=a.findPosV(h.anchor,b,"line",h.anchor.goalColumn),e=a.findPosV(h.head,b,"line",h.head.goalColumn);f.goalColumn=null!=h.anchor.goalColumn?h.anchor.goalColumn:a.cursorCoords(h.anchor,"div").left;e.goalColumn=null!=h.head.goalColumn?h.head.goalColumn:a.cursorCoords(h.head,"div").left;f={anchor:f,head:e};d.push(h);d.push(f)}a.setSelections(d)}function w(a){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++){var g=b[d],h=g.head,f=a.scanForBracket(h,-1);if(!f)return!1;for(;;){h=
a.scanForBracket(h,1);if(!h)return!1;if(h.ch=="(){}[]".charAt("(){}[]".indexOf(f.ch)+1)){var e=k(f.pos.line,f.pos.ch+1);if(0==l.cmpPos(e,g.from())&&0==l.cmpPos(h.pos,g.to())){if(f=a.scanForBracket(f.pos,-1),!f)return!1}else{c.push({anchor:e,head:h.pos});break}}h=k(h.pos.line,h.pos.ch+1)}}a.setSelections(c);return!0}function x(a,b){if(a.isReadOnly())return l.Pass;for(var c=a.listSelections(),d=[],g,h=0;h<c.length;h++){var f=c[h];if(!f.empty()){var e=f.from().line;for(f=f.to().line;h<c.length-1&&c[h+
1].from().line==f;)f=c[++h].to().line;c[h].to().ch||f--;d.push(e,f)}}d.length?g=!0:d.push(a.firstLine(),a.lastLine());a.operation(function(){for(var c=[],f=0;f<d.length;f+=2){var h=d[f+1],e=k(d[f],0),l=k(h),m=a.getRange(e,l,!1);b?m.sort():m.sort(function(a,c){var b=a.toUpperCase(),d=c.toUpperCase();b!=d&&(a=b,c=d);return a<c?-1:a==c?0:1});a.replaceRange(m,e,l);g&&c.push({anchor:e,head:k(h+1,0)})}g&&a.setSelections(c,0)})}function y(a,b){a.operation(function(){for(var c,d=a.listSelections(),g=[],h=
[],f=0;f<d.length;f++)c=d[f],c.empty()?(g.push(f),h.push("")):h.push(b(a.getRange(c.from(),c.to())));a.replaceSelections(h,"around","case");f=g.length-1;for(var e;0<=f;f--)c=d[g[f]],e&&0<l.cmpPos(c.head,e)||(c=r(a,c.head),e=c.from,a.replaceRange(b(c.word),c.from,c.to))})}function z(a){var b=a.getCursor("from"),c=a.getCursor("to");if(0==l.cmpPos(b,c)){var d=r(a,b);if(!d.word)return;b=d.from;c=d.to}return{from:b,to:c,query:a.getRange(b,c),word:d}}function A(a,b){var c=z(a);if(c){var d=c.query,g=a.getSearchCursor(d,
b?c.to:c.from);(b?g.findNext():g.findPrevious())?a.setSelection(g.from(),g.to()):(g=a.getSearchCursor(d,b?k(a.firstLine(),0):a.clipPos(k(a.lastLine()))),(b?g.findNext():g.findPrevious())?a.setSelection(g.from(),g.to()):c.word&&a.setSelection(c.from,c.to))}}var e=l.commands,k=l.Pos;e.goSubwordLeft=function(a){t(a,-1)};e.goSubwordRight=function(a){t(a,1)};e.scrollLineUp=function(a){var b=a.getScrollInfo();if(!a.somethingSelected()){var c=a.lineAtHeight(b.top+b.clientHeight,"local");a.getCursor().line>=
c&&a.execCommand("goLineUp")}a.scrollTo(null,b.top-a.defaultTextHeight())};e.scrollLineDown=function(a){var b=a.getScrollInfo();if(!a.somethingSelected()){var c=a.lineAtHeight(b.top,"local")+1;a.getCursor().line<=c&&a.execCommand("goLineDown")}a.scrollTo(null,b.top+a.defaultTextHeight())};e.splitSelectionByLine=function(a){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++)for(var g=b[d].from(),h=b[d].to(),f=g.line;f<=h.line;++f)h.line>g.line&&f==h.line&&0==h.ch||c.push({anchor:f==g.line?g:k(f,
0),head:f==h.line?h:k(f)});a.setSelections(c,0)};e.singleSelectionTop=function(a){var b=a.listSelections()[0];a.setSelection(b.anchor,b.head,{scroll:!1})};e.selectLine=function(a){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++){var g=b[d];c.push({anchor:k(g.from().line,0),head:k(g.to().line+1,0)})}a.setSelections(c)};e.insertLineAfter=function(a){return u(a,!1)};e.insertLineBefore=function(a){return u(a,!0)};e.selectNextOccurrence=function(a){var b=a.getCursor("from"),c=a.getCursor("to"),d=
a.state.sublimeFindFullWord==a.doc.sel;if(0==l.cmpPos(b,c)){d=r(a,b);if(!d.word)return;a.setSelection(d.from,d.to);d=!0}else{b=a.getRange(b,c);b=d?new RegExp("\\b"+b+"\\b"):b;c=a.getSearchCursor(b,c);var g=c.findNext();g||(c=a.getSearchCursor(b,k(a.firstLine(),0)),g=c.findNext());if(!(b=!g))a:{b=a.listSelections();g=c.from();for(var h=c.to(),f=0;f<b.length;f++)if(b[f].from()==g&&b[f].to()==h){b=!0;break a}b=!1}if(b)return l.Pass;a.addSelection(c.from(),c.to())}d&&(a.state.sublimeFindFullWord=a.doc.sel)};
e.addCursorToPrevLine=function(a){v(a,-1)};e.addCursorToNextLine=function(a){v(a,1)};e.selectScope=function(a){w(a)||a.execCommand("selectAll")};e.selectBetweenBrackets=function(a){if(!w(a))return l.Pass};e.goToBracket=function(a){a.extendSelectionsBy(function(b){var c=a.scanForBracket(b.head,1);return c&&0!=l.cmpPos(c.pos,b.head)?c.pos:(c=a.scanForBracket(b.head,-1))&&k(c.pos.line,c.pos.ch+1)||b.head})};e.swapLineUp=function(a){if(a.isReadOnly())return l.Pass;for(var b=a.listSelections(),c=[],d=
a.firstLine()-1,g=[],h=0;h<b.length;h++){var f=b[h],e=f.from().line-1,p=f.to().line;g.push({anchor:k(f.anchor.line-1,f.anchor.ch),head:k(f.head.line-1,f.head.ch)});0!=f.to().ch||f.empty()||--p;e>d?c.push(e,p):c.length&&(c[c.length-1]=p);d=p}a.operation(function(){for(var b=0;b<c.length;b+=2){var d=c[b],f=c[b+1],h=a.getLine(d);a.replaceRange("",k(d,0),k(d+1,0),"+swapLine");f>a.lastLine()?a.replaceRange("\n"+h,k(a.lastLine()),null,"+swapLine"):a.replaceRange(h+"\n",k(f,0),null,"+swapLine")}a.setSelections(g);
a.scrollIntoView()})};e.swapLineDown=function(a){if(a.isReadOnly())return l.Pass;for(var b=a.listSelections(),c=[],d=a.lastLine()+1,g=b.length-1;0<=g;g--){var h=b[g],f=h.to().line+1,e=h.from().line;0!=h.to().ch||h.empty()||f--;f<d?c.push(f,e):c.length&&(c[c.length-1]=e);d=e}a.operation(function(){for(var b=c.length-2;0<=b;b-=2){var d=c[b],f=c[b+1],g=a.getLine(d);d==a.lastLine()?a.replaceRange("",k(d-1),k(d),"+swapLine"):a.replaceRange("",k(d,0),k(d+1,0),"+swapLine");a.replaceRange(g+"\n",k(f,0),null,
"+swapLine")}a.scrollIntoView()})};e.toggleCommentIndented=function(a){a.toggleComment({indent:!0})};e.joinLines=function(a){for(var b=a.listSelections(),c=[],d=0;d<b.length;d++){for(var g=b[d],h=g.from(),f=h.line,e=g.to().line;d<b.length-1&&b[d+1].from().line==e;)e=b[++d].to().line;c.push({start:f,end:e,anchor:!g.empty()&&h})}a.operation(function(){for(var b=0,d=[],f=0;f<c.length;f++){for(var g=c[f],h=g.anchor&&k(g.anchor.line-b,g.anchor.ch),e,l=g.start;l<=g.end;l++){var m=l-b;l==g.end&&(e=k(m,a.getLine(m).length+
1));m<a.lastLine()&&(a.replaceRange(" ",k(m),k(m+1,/^\s*/.exec(a.getLine(m+1))[0].length)),++b)}d.push({anchor:h||e,head:e})}a.setSelections(d,0)})};e.duplicateLine=function(a){a.operation(function(){for(var b=a.listSelections().length,c=0;c<b;c++){var d=a.listSelections()[c];d.empty()?a.replaceRange(a.getLine(d.head.line)+"\n",k(d.head.line,0)):a.replaceRange(a.getRange(d.from(),d.to()),d.from())}a.scrollIntoView()})};e.sortLines=function(a){x(a,!0)};e.sortLinesInsensitive=function(a){x(a,!1)};e.nextBookmark=
function(a){var b=a.state.sublimeBookmarks;if(b)for(;b.length;){var c=b.shift(),d=c.find();if(d)return b.push(c),a.setSelection(d.from,d.to)}};e.prevBookmark=function(a){var b=a.state.sublimeBookmarks;if(b)for(;b.length;){b.unshift(b.pop());var c=b[b.length-1].find();if(c)return a.setSelection(c.from,c.to);b.pop()}};e.toggleBookmark=function(a){for(var b=a.listSelections(),c=a.state.sublimeBookmarks||(a.state.sublimeBookmarks=[]),d=0;d<b.length;d++){for(var g=b[d].from(),e=b[d].to(),f=b[d].empty()?
a.findMarksAt(g):a.findMarks(g,e),k=0;k<f.length;k++)if(f[k].sublimeBookmark){f[k].clear();for(var l=0;l<c.length;l++)c[l]==f[k]&&c.splice(l--,1);break}k==f.length&&c.push(a.markText(g,e,{sublimeBookmark:!0,clearWhenEmpty:!1}))}};e.clearBookmarks=function(a){if(a=a.state.sublimeBookmarks)for(var b=0;b<a.length;b++)a[b].clear();a.length=0};e.selectBookmarks=function(a){var b=a.state.sublimeBookmarks,c=[];if(b)for(var d=0;d<b.length;d++){var g=b[d].find();g?c.push({anchor:g.from,head:g.to}):b.splice(d--,
0)}c.length&&a.setSelections(c,0)};e.smartBackspace=function(a){if(a.somethingSelected())return l.Pass;a.operation(function(){for(var b=a.listSelections(),c=a.getOption("indentUnit"),d=b.length-1;0<=d;d--){var g=b[d].head,e=a.getRange({line:g.line,ch:0},g),f=l.countColumn(e,null,a.getOption("tabSize")),m=a.findPosH(g,-1,"char",!1);e&&!/\S/.test(e)&&0==f%c&&(e=new k(g.line,l.findColumn(e,f-c,c)),e.ch!=g.ch&&(m=e));a.replaceRange("",m,g,"+delete")}})};e.delLineRight=function(a){a.operation(function(){for(var b=
a.listSelections(),c=b.length-1;0<=c;c--)a.replaceRange("",b[c].anchor,k(b[c].to().line),"+delete");a.scrollIntoView()})};e.upcaseAtCursor=function(a){y(a,function(a){return a.toUpperCase()})};e.downcaseAtCursor=function(a){y(a,function(a){return a.toLowerCase()})};e.setSublimeMark=function(a){a.state.sublimeMark&&a.state.sublimeMark.clear();a.state.sublimeMark=a.setBookmark(a.getCursor())};e.selectToSublimeMark=function(a){var b=a.state.sublimeMark&&a.state.sublimeMark.find();b&&a.setSelection(a.getCursor(),
b)};e.deleteToSublimeMark=function(a){var b=a.state.sublimeMark&&a.state.sublimeMark.find();if(b){var c=a.getCursor();if(0<l.cmpPos(c,b)){var d=b;b=c;c=d}a.state.sublimeKilled=a.getRange(c,b);a.replaceRange("",c,b)}};e.swapWithSublimeMark=function(a){var b=a.state.sublimeMark&&a.state.sublimeMark.find();b&&(a.state.sublimeMark.clear(),a.state.sublimeMark=a.setBookmark(a.getCursor()),a.setCursor(b))};e.sublimeYank=function(a){null!=a.state.sublimeKilled&&a.replaceSelection(a.state.sublimeKilled,null,
"paste")};e.showInCenter=function(a){var b=a.cursorCoords(null,"local");a.scrollTo(null,(b.top+b.bottom)/2-a.getScrollInfo().clientHeight/2)};e.findUnder=function(a){A(a,!0)};e.findUnderPrevious=function(a){A(a,!1)};e.findAllUnder=function(a){var b=z(a);if(b){for(var c=a.getSearchCursor(b.query),d=[],e=-1;c.findNext();)d.push({anchor:c.from(),head:c.to()}),c.from().line<=b.from.line&&c.from().ch<=b.from.ch&&e++;a.setSelections(d,e)}};e=l.keyMap;e.macSublime={"Cmd-Left":"goLineStartSmart","Shift-Tab":"indentLess",
"Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-Left":"goSubwordLeft","Ctrl-Right":"goSubwordRight","Ctrl-Alt-Up":"scrollLineUp","Ctrl-Alt-Down":"scrollLineDown","Cmd-L":"selectLine","Shift-Cmd-L":"splitSelectionByLine",Esc:"singleSelectionTop","Cmd-Enter":"insertLineAfter","Shift-Cmd-Enter":"insertLineBefore","Cmd-D":"selectNextOccurrence","Shift-Cmd-Space":"selectScope","Shift-Cmd-M":"selectBetweenBrackets","Cmd-M":"goToBracket","Cmd-Ctrl-Up":"swapLineUp","Cmd-Ctrl-Down":"swapLineDown","Cmd-/":"toggleCommentIndented",
"Cmd-J":"joinLines","Shift-Cmd-D":"duplicateLine",F9:"sortLines","Cmd-F9":"sortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Cmd-F2":"toggleBookmark","Shift-Cmd-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Cmd-K Cmd-K":"delLineRight","Cmd-K Cmd-U":"upcaseAtCursor","Cmd-K Cmd-L":"downcaseAtCursor","Cmd-K Cmd-Space":"setSublimeMark","Cmd-K Cmd-A":"selectToSublimeMark","Cmd-K Cmd-W":"deleteToSublimeMark","Cmd-K Cmd-X":"swapWithSublimeMark","Cmd-K Cmd-Y":"sublimeYank",
"Cmd-K Cmd-C":"showInCenter","Cmd-K Cmd-G":"clearBookmarks","Cmd-K Cmd-Backspace":"delLineLeft","Cmd-K Cmd-0":"unfoldAll","Cmd-K Cmd-J":"unfoldAll","Ctrl-Shift-Up":"addCursorToPrevLine","Ctrl-Shift-Down":"addCursorToNextLine","Cmd-F3":"findUnder","Shift-Cmd-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Cmd-[":"fold","Shift-Cmd-]":"unfold","Cmd-I":"findIncremental","Shift-Cmd-I":"findIncrementalReverse","Cmd-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"macDefault"};l.normalizeKeyMap(e.macSublime);
e.pcSublime={"Shift-Tab":"indentLess","Shift-Ctrl-K":"deleteLine","Alt-Q":"wrapLines","Ctrl-T":"transposeChars","Alt-Left":"goSubwordLeft","Alt-Right":"goSubwordRight","Ctrl-Up":"scrollLineUp","Ctrl-Down":"scrollLineDown","Ctrl-L":"selectLine","Shift-Ctrl-L":"splitSelectionByLine",Esc:"singleSelectionTop","Ctrl-Enter":"insertLineAfter","Shift-Ctrl-Enter":"insertLineBefore","Ctrl-D":"selectNextOccurrence","Shift-Ctrl-Space":"selectScope","Shift-Ctrl-M":"selectBetweenBrackets","Ctrl-M":"goToBracket",
"Shift-Ctrl-Up":"swapLineUp","Shift-Ctrl-Down":"swapLineDown","Ctrl-/":"toggleCommentIndented","Ctrl-J":"joinLines","Shift-Ctrl-D":"duplicateLine",F9:"sortLines","Ctrl-F9":"sortLinesInsensitive",F2:"nextBookmark","Shift-F2":"prevBookmark","Ctrl-F2":"toggleBookmark","Shift-Ctrl-F2":"clearBookmarks","Alt-F2":"selectBookmarks",Backspace:"smartBackspace","Ctrl-K Ctrl-K":"delLineRight","Ctrl-K Ctrl-U":"upcaseAtCursor","Ctrl-K Ctrl-L":"downcaseAtCursor","Ctrl-K Ctrl-Space":"setSublimeMark","Ctrl-K Ctrl-A":"selectToSublimeMark",
"Ctrl-K Ctrl-W":"deleteToSublimeMark","Ctrl-K Ctrl-X":"swapWithSublimeMark","Ctrl-K Ctrl-Y":"sublimeYank","Ctrl-K Ctrl-C":"showInCenter","Ctrl-K Ctrl-G":"clearBookmarks","Ctrl-K Ctrl-Backspace":"delLineLeft","Ctrl-K Ctrl-0":"unfoldAll","Ctrl-K Ctrl-J":"unfoldAll","Ctrl-Alt-Up":"addCursorToPrevLine","Ctrl-Alt-Down":"addCursorToNextLine","Ctrl-F3":"findUnder","Shift-Ctrl-F3":"findUnderPrevious","Alt-F3":"findAllUnder","Shift-Ctrl-[":"fold","Shift-Ctrl-]":"unfold","Ctrl-I":"findIncremental","Shift-Ctrl-I":"findIncrementalReverse",
"Ctrl-H":"replace",F3:"findNext","Shift-F3":"findPrev",fallthrough:"pcDefault"};l.normalizeKeyMap(e.pcSublime);e.sublime=e.default==e.macDefault?e.macSublime:e.pcSublime});