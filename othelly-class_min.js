function initOthellyBoards(e){var t=null;var n=document.getElementsByTagName("div");var r=[];for(var i=0;i<n.length;i++){r.push(n[i])}var s=null;var o=1;for(var u=0;u<r.length;u++){var a="";var f={};if(typeof Othelly_options!="undefined"){f=clone(Othelly_options)}if(r[u].getAttribute("class")&&r[u].getAttribute("class").indexOf("othello-game")>-1&&!r[u].getAttribute("id")){if(typeof e!="undefined"&&typeof e=="object"){for(var l in e){if(l==u){if(typeof e[l]["moveFirst"]!="undefined"){f["moveFirst"]=e[l]["moveFirst"]=="WHITE"?2:1;f["human"]=e[l]["moveFirst"]=="WHITE"?2:1}if(typeof e[l]["size"]!="undefined"){f["piecewidth"]=e[l]["size"];f["pieceheight"]=e[l]["size"]}if(typeof e[l]["rowsCols"]!="undefined"){f["width"]=e[l]["rowsCols"];f["height"]=e[l]["rowsCols"]}if(typeof e[l]["imgPath"]!="undefined"){f["imgPath"]=e[l]["imgPath"]}}}}var c=document.createElement("div");c.setAttribute("id","Game_"+o);c.setAttribute("class","gContainer");if(t=r[u].getElementsByTagName("input")[0]){t.style.display="block";t.setAttribute("id","Input_"+o)}if(typeof (s=r[u].getElementsByTagName("pre")[0])!="undefined"){a=s.firstChild.nodeValue.trim();r[u].replaceChild(c,s)}else{r[u].insertBefore(c,t)}f["gameNo"]=o;f["matrix"]=a;Othelly_boards[o]=new Othelly(f);Othelly_boards[o].InitializeBoard(c);o++}}}function Othelly(e){function K(e){if(typeof e!="undefined"){t=typeof e.imgPath!="undefined"&&e.imgPath!=""?e.imgPath:t;n=typeof e.piecewidth!="undefined"&&e.piecewidth!=0?e.piecewidth:n;r=typeof e.pieceheight!="undefined"&&e.pieceheight!=0?e.pieceheight:r;s=typeof e.width!="undefined"&&e.width!=0?e.width:s;o=typeof e.height!="undefined"&&e.height!=0?e.height:o;u=typeof e.matrix!="undefined"&&e.matrix!=""?Z(e.matrix):u;D=typeof e.human!="undefined"&&e.human!=0?e.human:D;v=typeof e.humanVsHuman!="undefined"&&e.humanVsHuman!=0?e.humanVsHuman:v;m=typeof e.showcursor!="undefined"&&e.showcursor!=0?e.showcursor:m;g=typeof e.showflips!="undefined"&&e.showflips!=0?e.showflips:g;b=typeof e.weightsquares!="undefined"&&e.weightsquares!=0?e.weightsquares:b;w=typeof e.edgesensitive!="undefined"&&e.edgesensitive!=0?e.edgesensitive:w;E=typeof e.gameNo!="undefined"&&e.gameNo!=0?e.gameNo:E;H=typeof e.moveFirst!="undefined"&&e.moveFirst!=0?e.moveFirst:H;P=H;a=typeof e.PlayerBlack!="undefined"&&e.PlayerBlack!=0?e.PlayerBlack:a;f=typeof e.PlayerWhite!="undefined"&&e.PlayerWhite!=0?e.PlayerWhite:f;l=typeof e.PlayerTurn!="undefined"&&e.PlayerTurn!=0?e.PlayerTurn:l;c=typeof e.PlayerHasWon!="undefined"&&e.PlayerHasWon!=0?e.PlayerHasWon:c;h=typeof e.PlayerMustPass!="undefined"&&e.PlayerMustPass!=0?e.PlayerMustPass:h;p=typeof e.PlayerNoMoves!="undefined"&&e.PlayerNoMoves!=0?e.PlayerNoMoves:p;d=typeof e.Draw!="undefined"&&e.Draw!=0?e.Draw:d}Q(k,t+"blank.gif");Q(A,t+"white.gif");Q(L,t+"black.gif");Q(O,t+"white-trans.gif");Q(M,t+"black-trans.gif");for(i=0;i<=21;i++){Q(_+i,t+"trans-"+i+".gif")}}function Q(e,t){F[e]=new Image;F[e].src=t}function G(e){this.imagename=e;this.player=k;this.flips=new Array;this.flips[A]=0;this.flips[L]=0;this.value=new Array;this.value[A]=0;this.value[L]=0}function Y(e,t,n){if(document.images[S[e][t].imagename].src!=n){document.images[S[e][t].imagename].src=n}}function Z(e){if(e.indexOf("()")!=-1){V=e;return u}else{return e.replace(/ /g,"").trim()}}function et(e){var t=[];var n=[];var r=$?"\r":"\n";var i=e.trim().split(r);if(i.length&&i.length>0){for(var s=0;s<i.length;s++){if(i[s].indexOf(" ")==-1){for(var o=0;o<i[s].length;o+=2){n.push(i[s].substr(o,2))}}else{n=i[s].split(" ")}if(n.length&&n.length>0){for(var o=0;o<n.length;o++){if(!isNaN(n[o])){t[Math.abs(n[o])]=J[o]+(s+1)}}}}}return t.join("")}function tt(e){return e.replace(/\s\s*/g,"").toLowerCase()}function nt(e){var t=B;U=e;if(e.indexOf(">")!=-1){var n=e.split(">");e=n[0];j=Number(n[1])-t}for(var r=0;r<e.length;r+=2){var i=e.substr(r,2).split("");z[t++]=J[i[0]]+","+(Number(i[1])-1)}if(j>0){dt()}}function rt(e,t,n){if(P!=n)return false;if(S[e][t].player!=k)return false;return it(e,t,n)>0}function it(e,t,n){var r,i,u;var a,f;var l=0;for(i=-1;i<=1;i++){for(r=-1;r<=1;r++){for(u=1;;u++){a=e+u*r;f=t+u*i;if(a<0||a>=s||f<0||f>=o)break;if(S[a][f].player==k)break;if(S[a][f].player==n){l+=u-1;break}}}}return l}function st(e,t,n){var r,i,u;var a,f;var l=0;ot(e,t,n);q[++B]=e+","+t;ut();R[B]="";for(i=-1;i<=1;i++){for(r=-1;r<=1;r++){for(u=1;u<=s;u++){a=e+u*r;f=t+u*i;if(a<0||a>=s||f<0||f>=o)break;if(S[a][f].player==k)break;if(S[a][f].player==n){for(u--;u>0;u--){a=e+u*r;f=t+u*i;ot(a,f,n);R[B]+="#"+a+","+f}break}}}}R[B]=R[B].substring(1);return l}function ot(e,t,n){var r=gt(n);if(S[e][t].player==r)T[r]--;S[e][t].player=n;Y(e,t,F[n].src);T[n]++}function ut(){var e="";var t=q[B].split(",");var n=q[B]!=I.x+","+I.y?1:0;for(var r=1;r<B+n;r++){if(typeof q[r]!="undefined"&&q[r]!=""){t=q[r].split(",");e+=" "+J[t[0]]+String(Number(t[1])+1)}}document.getElementById("Input_"+E).value=e;document.getElementById("Input_"+E).setAttribute("value",e)}function at(e){var t,n;if((t=document.getElementById("Game_"+E+"Whites"))!=null&&(n=document.getElementById("Game_"+E+"Blacks"))!=null){t.innerHTML=T[A];n.innerHTML=T[L]}if((t=document.getElementById("Game_"+E+"Moves"))!=null){if(q[B]){var r=q[B].split(",");t.innerHTML=B+"."+J[r[0]]+String(Number(r[1])+1)}else{t.innerHTML=B}}}function ft(e){if(typeof e=="string"){document.getElementById("Message_"+E).innerHTML=e}}function lt(){var e,t;for(t=0;t<o;t++){for(e=0;e<s;e++){S[e][t].flips[A]=0;S[e][t].flips[L]=0;if(S[e][t].player!=k)continue;S[e][t].flips[A]=it(e,t,A);S[e][t].flips[L]=it(e,t,L)}}}function ct(e){var t,n;for(n=0;n<o;n++){for(t=0;t<s;t++){if(S[t][n].player!=k)continue;if(it(t,n,e)>0)return true}}return false}function ht(e,t,i){if(I.x!=-1&&I.y!=-1){pt(I.x,I.y)}var s=document.createElement("span");s.style.position="absolute";s.style.display="block";s.style.width=n+"px";s.style.height=r+"px";s.style.margin="0";s.style.fontFamily="sans-serif";s.style.fontSize="10px";s.style.textAlign="center";s.style.lineHeight=r+"px";s.style.color=i==A?"#000":"#FFF";var o=document.createTextNode(String(B));s.appendChild(o);document.getElementById(S[e][t].imagename).parentNode.insertBefore(s,document.getElementById(S[e][t].imagename));I.x=e;I.y=t}function pt(e,t){var n=document.getElementById(S[e][t].imagename).parentNode.firstChild;document.getElementById(S[e][t].imagename).parentNode.removeChild(n)}function dt(){for(var e=0;e<j;e++){setTimeout(function(){C.MoveForward()},100)}}function vt(){var e=q[B].split(",");if(v){D=gt(S[e[0]][e[1]].player)}T[S[e[0]][e[1]].player]--;Y(e[0],e[1],F[k].src);ut();var t=R[B].split("#");R[B]="";for(var n=0;n<t.length;n++){var r=t[n].split(",");if(v){Y(r[0],r[1],F[D].src);T[D]++;S[r[0]][r[1]].player=D}else{Y(r[0],r[1],F[P].src);T[P]++;S[r[0]][r[1]].player=P}T[S[e[0]][e[1]].player]--}S[e[0]][e[1]].player=k;B--;if(B>=1&&typeof q[B]!="undefined"){e=q[B].split(",");ht(e[0],e[1],D)}else{pt(e[0],e[1],D);I.x=-1;I.y=-1}yt();if(!v&&!N){N=setTimeout(function(){vt()},D==k?1e3:150)}else{clearTimeout(N);W=false}}function mt(e,t,n){var r;if(S[e][t].player!=k)return false;if((r=S[e][t].flips[n])==0)return false;Y(e,t,F[_+r].src);return true}function gt(e){return e==A?L:A}function yt(){if(P!=k&&D!=k){if(v){var e=ct(D);D=gt(D);at();ft((D==L?a:f)+l);if(!ct(D)){if(!e&&!W){if(T[L]==T[A])ft(d);else ft((T[L]>T[A]?a:f)+c);ut();return Et()}ft((D==L?a:f)+h);D=gt(D)}}var t=ct(P);P=gt(P);at();ft((D==L?a:f)+l);if(!ct(P)){if(!t&&!W){if(T[L]==T[A])ft(d);else ft((T[L]>T[A]?a:f)+c)}ft((P==L?a:f)+h);P=gt(P)}if(P!=D){C.HideFlipCounts();if(!v&&!W){N=setTimeout(function(){wt(P)},D==k?1e3:150)}}else if(g)C.ShowFlipCounts(D)}}function bt(e,t,n){var r;if(S[e][t].player!=k)return 0;if(e<0||e>=s||t<0||t>=o)return 0;r=S[e][t].flips[n];if(!b)r=r>0?1:0;if(w&&r>0){r+=10;if(e==0||e==s-1)r+=4;if(t==0||t==o-1)r+=4;if(e==1||e==s-2)r-=5;if(t==1||t==o-2)r-=5;if(r<1)r=1}return r}function wt(e){var t,n;var r=0,i=0;var u;var a,f;lt();for(n=0;n<o;n++){for(t=0;t<s;t++){u=bt(t,n,e);S[t][n].value[e]=u;if(u==r)i++;else if(u>r){r=u;i=1}}}while(i>0){a=Math.floor(Math.random()*i);f=0;for(n=0;n<o;n++){for(t=0;t<s;t++){u=S[t][n].value[e];if(u==r){if(f==a){st(t,n,e);ht(t,n,e);yt();return}else f++}}}}yt()}function Et(){P=k}var t="images/";var n=20;var r=20;var s=8;var o=8;var u="........\n........\n........\n...O#...\n...#O...\n........\n........\n........";var a="BLACK";var f="WHITE";var l="'s turn";var c=" has won the game";var h=" must pass!";var p="There are no more moves!";var d="It's a draw!";var v=true;var m=true;var g=false;var b=true;var w=true;var E=0;var S=new Array(s);var T=new Array;T[1]=0;T[2]=0;var N;var C=this;var k=0;var L=1;var A=2;var O=3;var M=4;var _=5;var D=L;var P=L;var H=1;var B=0;var j=0;var F=[];var I={x:-1,y:-1};var q=[];var R=[];var U="";var z=[];var W=false;var X=true;var V="";var $=false;var J={a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7,0:"a",1:"b",2:"c",3:"d",4:"e",5:"f",6:"g",7:"h"};this.InitializeBoard=function(e){var t,i,c,h,p,d,v,m,g;var y=(o+2)*r+(o+2)*4+2;var b=(s+2)*n+(s+2)*4+2;$=navigator.appName.indexOf("Microsoft")>-1;if(V!=""){var w="";if(V.indexOf(">")!=-1){var x=V.split(">");V=x[0];w=">"+x[1]}document.getElementById("Input_"+E).setAttribute("value",et(V)+w)}var N=$?"\r":"\n";var O=u.split(N);for(var M=0;M<s;M++){S[M]=new Array(o)}t=document.createElement("div");t.setAttribute("id","d_"+E);i=document.createElement("table");c=document.createElement("tbody");var _=_y=0;for(var D=0;D<o+2;D++){h=document.createElement("tr");c.appendChild(h);if(u&&D>0&&D<o+1){var P=O[_y].trim().split("")}for(M=0;M<s+2;M++){p=document.createElement("td");p.style.width=n+"px";p.style.height=r+"px";if(D==0){p.setAttribute("class","border");if(M>0&&M<s+1){v=document.createTextNode(J[M-1]);p.appendChild(v);h.appendChild(p)}else{h.appendChild(p)}}if(D>0&&D<o+1&&M==0){if(M==0){v=document.createTextNode(String(D));p.appendChild(v);p.setAttribute("class","border");p.style.fontSize=Math.floor(r/100*80)+"px";p.style.lineHeight=Math.floor(r/100*80)+"px";h.appendChild(p)}}else if(D>0&&D<o+1&&M>0&&M<s+1){if(u){switch(P[_]){case"O":m=A;T[A]++;B++;break;case"#":case"X":m=L;T[L]++;B++;break;case".":case"-":m=k;break}}else{if(_==s/2-1&&_y==s/2-1||_==s/2&&_y==s/2){m=A;T[A]++}else if(_==s/2-1&&_y==s/2||_==s/2&&_y==s/2-1){m=L;T[L]++}else m=k}p.x=_;p.y=_y;p.onclick=function(){C.hPutPiece(this.x,this.y)};p.onmouseover=function(){C.CheckPutPiece(this.x,this.y)};p.onmouseout=function(){C.RestorePiece(this.x,this.y)};d=document.createElement("img");d.setAttribute("name","c_"+E+"["+_+","+_y+"]");d.setAttribute("id","c_"+E+"["+_+","+_y+"]");d.setAttribute("src",F[m].src);d.setAttribute("width",n);d.setAttribute("height",r);p.appendChild(d);h.appendChild(p);S[_][_y]=new G("c_"+E+"["+_+","+_y+"]");S[_][_y].player=m;_++;if(_>s-1){_=0}}else if(D<o+2){p.setAttribute("class","border");p.style.fontSize=Math.floor(r/100*80)+"px";p.style.lineHeight=Math.floor(r/100*80)+"px";h.appendChild(p)}}if(D>0&&D<o+1){_y++}c.appendChild(h)}i.appendChild(c);i.style.height=(o+2)*r+(o+2)*4+2+"px";i.style.width=(s+2)*n+(s+2)*4+2+"px";t.appendChild(i);e.style.width=(s+2)*n+(s+2)*4+2+"px";e.appendChild(t);t=document.createElement("div");t.setAttribute("class","gamedata");var j=document.createElement("p");v=document.createTextNode(a+": ");j.appendChild(v);var I=document.createElement("span");I.setAttribute("id","Game_"+E+"Blacks");j.appendChild(I);v=document.createTextNode("");j.appendChild(v);I=document.createElement("span");I.setAttribute("id","Game_"+E+"Moves");j.appendChild(I);v=document.createTextNode(f+": ");j.appendChild(v);I=document.createElement("span");I.setAttribute("id","Game_"+E+"Whites");I.setAttribute("class","whiteScore");j.appendChild(I);t.appendChild(j);j=document.createElement("p");j.style.textAlign="center";j.setAttribute("id","Message_"+E);t.appendChild(j);e.appendChild(t);t=document.createElement("div");t.setAttribute("class","gamecontrol");var q=document.createElement("button");q.setAttribute("type","button");q.setAttribute("class","back end");q.i=E;v=document.createTextNode("<<");q.onclick=function(){C.MoveToStart()};q.appendChild(v);t.appendChild(q);q=document.createElement("button");q.setAttribute("type","button");q.setAttribute("class","back step");q.i=E;v=document.createTextNode("<");q.onclick=function(){C.MoveBack()};q.appendChild(v);t.appendChild(q);q=document.createElement("button");q.setAttribute("type","button");q.setAttribute("class","forward end");q.i=E;v=document.createTextNode(">>");q.onclick=function(){C.MoveToEnd()};q.appendChild(v);t.appendChild(q);q=document.createElement("button");q.setAttribute("type","button");q.setAttribute("class","forward step");q.i=E;v=document.createTextNode(">");q.onclick=function(){C.MoveForward()};q.appendChild(v);t.appendChild(q);var R=document.createElement("input");R.setAttribute("type","text");R.setAttribute("value",document.getElementById("Input_"+E).getAttribute("value"));R.setAttribute("class","gameplay");R.style.display="block";t.appendChild(R);q=document.createElement("button");q.setAttribute("type","button");q.setAttribute("class","reset");q.i=E;v=document.createTextNode("Reset");q.onclick=function(){C.ResetBoard()};q.appendChild(v);t.appendChild(q);e.appendChild(t);e.parentNode.removeChild(document.getElementById("Input_"+E));R.setAttribute("id","Input_"+E);if(B>0){B-=4}if((g=tt(document.getElementById("Input_"+E).getAttribute("value")))!=""){nt(g);X=true;R.value="";R.setAttribute("value","")}at();ft((H==L?a:f)+l)};this.ResetBoard=function(){if(N!=undefined){clearTimeout(N);N=undefined}if(B>=1&&typeof q[B]!="undefined"){var e=q[B].split(",");pt(e[0],e[1],D);I.x=-1;I.y=-1}T[A]=0;T[L]=0;B=0;j=0;z=[];q=[];R=[];W=false;if(u){var t=$?"\r":"\n";var n=u.trim().split(t);for(y=1;y<=o;y++){for(x=1;x<=s;x++){var r=n[y-1].trim().split("");switch(r[x-1]){case"O":S[x-1][y-1].player=A;Y(x-1,y-1,F[A].src);T[A]++;B++;break;case"#":case"X":S[x-1][y-1].player=L;Y(x-1,y-1,F[L].src);T[L]++;B++;break;case".":case"-":S[x-1][y-1].player=k;Y(x-1,y-1,F[k].src);break}}}B-=4}else{for(y=1;y<=o;y++){for(x=1;x<=s;x++){S[x-1][y-1].player=k;Y(x-1,y-1,F[k].src)}}ot(s/2-1,s/2-1,A);ot(s/2,s/2,A);ot(s/2-1,s/2,L);ot(s/2,s/2-1,L)}if((gp=tt(document.getElementById("Input_"+E).getAttribute("value")))!=""&&X&&U.indexOf(gp)==-1){nt(gp)}else{nt(U)}document.getElementById("Input_"+E).value="";document.getElementById("Input_"+E).setAttribute("value","");X=true;P=D=H;at();ft((H==L?a:f)+l)};this.PutPiece=function(e,t){if(!rt(e,t,D))return false;st(e,t,D);ht(e,t,D);yt();return true};this.rPutPiece=function(e,t){X=true;this.PutPiece(e,t)};this.hPutPiece=function(e,t){X=false;this.PutPiece(e,t)};this.CheckPutPiece=function(e,t){var n;if(!m)return;if(!rt(e,t,D))return;if(D==A)n=O;else n=M;Y(e,t,F[n].src)};this.RestorePiece=function(e,t){if(g&&mt(e,t,D))return;Y(e,t,F[S[e][t].player].src)};this.MoveForward=function(){var e="";var t=[];if(X){if(z.length&&B<z.length){t=z[B].split(",");this.PutPiece(Number(t[0]),Number(t[1]))}else{ft(p);return false}}else{if(typeof q[B+1]!="undefined"){t=q[B+1].split(",");if(!this.PutPiece(Number(t[0]),Number(t[1]))){ft(p);return false}}else{ft(p);return false}}return true};this.MoveBack=function(){if(P==k){P=H}if(B>=1&&typeof q[B]!="undefined"){W=true;N=clearTimeout(N);vt();return true}else{ft(p);return false}};this.MoveToStart=function(){if(B>0&&this.MoveBack()){setTimeout(function(){C.MoveToStart()},20)}};this.MoveToEnd=function(){if(B<z.length&&this.MoveForward()){setTimeout(function(){C.MoveToEnd()},20)}};this.ShowFlipCounts=function(e){lt();for(var t=0;t<o;t++){for(var n=0;n<s;n++){mt(n,t,e)}}};this.HideFlipCounts=function(){for(var e=0;e<o;e++){for(var t=0;t<s;t++){if(S[t][e].player==k)Y(t,e,F[k].src)}}};this.Play=function(){if(D!=L)wt(L);else if(g)this.ShowFlipCounts(D)};K(e)}var Othelly_boards=[];String.prototype.trim=function(){var e=this.replace(/^\s\s*/,""),t=/\s/,n=this.length;while(t.test(e.charAt(--n)));return e.slice(0,n+1)};Array.prototype.in_array=function(e,t){var n="",r=!!t;if(r){for(n in this){if(this[n]===e){return true}}}else{for(n in this){if(this[n]==e){return true}}}return false};var clone=function(){function e(){}return function(t){e.prototype=t;return new e}}()