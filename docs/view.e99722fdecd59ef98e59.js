webpackJsonp([6],{31:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"initUiLanguage",function(){return M}),n.d(e,"getActiveMenu",function(){return I}),n.d(e,"setActiveMenu",function(){return N}),n.d(e,"init",function(){return U}),n.d(e,"initByClass",function(){return R});var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(4),u=n(3),s=n(6),l=(n.n(s),n(32)),f=n.n(l),d=n(33),h=n.n(d),p=n(7),m=n.n(p),g="",v=[],y=[],w=0,b=0,C=0,x=0,P=0,T=.2,A=4e4,E="nogold",k=!1,S={1:11,2:21,3:31,4:41,5:51,6:61},M=function(){o()("[data-lang]").each(function(){var t=o()(this),e=t.data("lang"),n=c.a.getText(e);t.text(n)})},I=function(){return g},N=function(t){g=t,o()("nav.navbar .active").removeClass("active");var e=o()("nav.navbar [data-type-branch-id="+t+"]");e.parents("li").addClass("active"),o()("#class").text(e.text())},R=function(t,e){S[t]&&(t=S[t]),U(t,e)},U=function(t,e){L(),V(),B(t,e)},L=function(){v=[],y=[]},V=function(){k||(o()("#version").text(u.default.getVersion()),u.default.isTest()?o()(".alert").show():o()(".alert").remove(),o()("#btnSearch").click(function(){var t=o()("#txtSearch").val(),e=o()('.rune[data-name="'+t+'"]').not(".rune-not-available");if(e.popover("show"),e.length){var n=9999999;e.each(function(t,e){n=Math.min(n,parseFloat(o()(e).css("top")))}),o()("#main").animate({scrollTop:Math.max(n-50,0)},500)}else alert(c.a.getText("runenotexist"))}),o()("#btnClear").click(function(){o()('[data-toggle="popover"]').popover("hide")}),o()("#btnSelectAll").click(function(){var t=u.default.getAstrolabe();i.a.each(t,function(t,e){O(t.Id,!0,!1)}),H(),j()}),o()("#btnSaveImage").click(function(){var t=window.open("about:blank;","_blank");o()(t.document.body).append(c.a.getText("generating")),h.a.toPng(o()(".astrolabe-container")[0],{bgcolor:"#fff"}).then(function(e){o()(t.document.body).empty(),o()(t.document.body).append(o()('<textarea style="width:100%;height:100px;">').val(window.location)),o()(t.document.body).append(o()("<img>").attr("src",e))}).catch(function(t){console.error(c.a.getText("generateerror"),t)})}),o()("#btnReset").click(function(){confirm(c.a.getText("confirmreset"))&&(i.a.each(y,function(t,e){o()("#rune"+t).data("status",0).removeClass("rune-checked")}),y=[],H(),j())}),o()("#btnSave").click(function(){X()}),o()('input[name="evo"]').change(function(){A=parseInt(this.value),B(w)}),o()("#scale").change(function(){T=parseFloat(this.value)||.2,B(w)}),o()('input[name="pathAlgorithm"]').change(function(){"custom"==(E=this.value)?o()("#algorithmWeight").show():o()("#algorithmWeight").hide()}),o()(".rune-panel-switch").click(function(){o()(".rune-panel-main").toggle()}),k=!0)},B=function(t,e){console.log("render",t,e);if(0!=t){N(w=t),o()("#main").find("img").attr("src",""),o()("#main").empty();var n=u.default.getAstrolabe();b=i.a.min(n,function(t){return t.X}).X,C=i.a.max(n,function(t){return t.X}).X,x=i.a.min(n,function(t){return t.Y}).Y,P=i.a.max(n,function(t){return t.Y}).Y;var r,a=o()("<div>").addClass("astrolabe-container");i.a.each(n,function(t,e){var n=u.default.getRuneCost(t.Id),r=u.default.getRuneResetCost(t.Id),c=u.default.getRuneDesc(t.Id,w),s=o()("<div>").addClass("rune").css("left",(t.X-b+30)*T).css("top",(P-t.Y+30)*T).css("width",60*T).css("height",60*T).attr("id","rune"+t.Id).attr("data-id",t.Id).data("rune",t).data("cost",n).data("resetCost",r).data("desc",c).data("status",0).attr("data-toggle","popover").attr("data-name",c.Name).attr("data-content",'<ul class="list-group list-group-flush"><li class="list-group-item p-1">'+(c.Desc||"")+'</li><li class="list-group-item p-1">'+i.a.reduce(n,function(t,e){return t+e.Name+": "+e.Count+"&nbsp;&nbsp;&nbsp;"},"")+"</li></ul>").click(function(){F(t.Id)});1e4==t.Id&&(v.push(1e4),s.addClass("rune-center").data("status",2).attr("title","").attr("data-toggle","")),t.Evo>A&&s.addClass("rune-not-available").attr("title","").attr("data-toggle","").off("click"),i.a.any(n,function(t){return 5261==t.Id})&&s.addClass("rune-special"),(t.X-b)/(C-b)>.8&&s.attr("data-placement","left"),(P-t.Y)/(P-x)<.2&&s.attr("data-placement","bottom"),a.append(s)}),o()("#main").append(a),o()('[data-toggle="popover"]').popover({html:!0,trigger:"hover focus",container:".astrolabe-container"}),o()("#main").on("show.bs.popover",function(t){var e=o()(t.target),n=e.data("desc"),r=e.data("status"),a=o()("<div>").append(o()("<div>").attr("runeId",e.attr("data-id")).addClass("rune-icon").addClass("rune-"+(0==r?"off":"on")+"-"+n.Type).text(n.Name));e.attr("data-original-title",a.html())}),o()("#main").on("inserted.bs.popover",function(t){var e=0;o()(".popover").each(function(t,n){var r=o()(n);if(e<parseInt(r.css("z-index"))&&(e=parseInt(r.css("z-index"))),r.find("button.close").length<1){var a=o()('<button type="button" id="close" class="close">&times;</button>');a.click(function(){o()(this).parents(".popover").popover("hide")}),r.find(".popover-header").append(a)}}),o()(".popover:last").css("z-index",e+1).off("mouseenter").off("click").on("mouseenter click",function(){var t=0;o()(".popover").each(function(e,n){t<parseInt(o()(n).css("z-index"))&&(t=parseInt(o()(n).css("z-index")))}),o()(this).css("z-index",t+1)}).on("click",".rune-icon",function(){o()(t.target).popover("hide"),F(parseInt(o()(this).attr("runeId")))})}),o()("#txtSearch").empty(),i.a.each(u.default.getAllRuneDescNameByTypeBranch(w),function(t,e){o()("#txtSearch").append(o()("<option>").text(t).val(t))}),o()(".selectpicker").selectpicker("refresh"),e&&(r=e,v=JSON.parse(f.a.decompressFromEncodedURIComponent(r))),i.a.each(v,function(t,e){O(t,!0,!0)}),i.a.each(y,function(t,e){O(t,!0,!1)}),H(),j()}},j=function(){o()(".rune-link-container").remove();var t=(C-b+120)*T,e=(P-x+120)*T,n=o()("<canvas>").attr("width",t).attr("height",e).addClass("rune-link-container");o()(".astrolabe-container").append(n);var r=n[0].getContext("2d");r.fillStyle="rgba(0, 0, 0, 0.25)",r.font="25px PingFang SC,Source Han Sans SC,Noto Sans CJK SC,Hiragino Sans GB,Microsoft YaHei UI,Microsoft YaHei,sans-serif",u.default.isTest()&&(r.textAlign="left",r.fillText(c.a.getText("alertCBT"),0,25)),r.textAlign="left",r.fillText(o()("#runeCheckCost").data("cost"),0,e-5),r.fillText(o()("#runeCost").data("cost"),0,e-35),r.font="25px Consolas",r.textAlign="right",r.fillText("ROMEL Rune Calc",t,e-35),r.fillText("Version:"+u.default.getVersion(),t,e-5),i.a.each(u.default.getAstrolabe(),function(t,e){var n=t;i.a.each(n.Link,function(t,e){var o=u.default.getRuneDataById(t);o&&(r.beginPath(),r.moveTo((n.X-b+60)*T,(P-n.Y+60)*T),r.lineTo((o.X-b+60)*T,(P-o.Y+60)*T),r.lineWidth=3,n.Evo>A||o.Evo>A?(r.strokeStyle="rgba(233, 233, 233, 0.15)",r.stroke()):i.a.contains(v.concat(y),n.Id)&&i.a.contains(v.concat(y),o.Id)?(r.lineWidth=4,r.strokeStyle="#13a7ff",r.stroke(),r.lineWidth=3,r.strokeStyle="#85e2ff",r.stroke(),r.lineWidth=2,r.strokeStyle="#cef3ff",r.stroke(),r.lineWidth=1,r.strokeStyle="#eefcff",r.stroke()):(r.strokeStyle="#333",r.stroke()))})})},H=function(){var t=[],e=[],n=[],r=[],a=[],u=[];o()(".rune").each(function(i,c){var s=o()(c),l=(s.data("rune"),s.data("desc")),f=s.data("status"),d=s.data("cost"),h=s.data("resetCost");switch(f){case 0:break;case 1:e.push(d),r.push(h),u.push(l);break;case 2:t.push(d),n.push(h),a.push(l)}}),e=i.a.reduce(e,function(t,e){return i.a.each(e,function(e,n){t[e.Name]=(t[e.Name]||0)+e.Count}),t},{}),t=i.a.reduce(t,function(t,e){return i.a.each(e,function(e,n){t[e.Name]=(t[e.Name]||0)+e.Count}),t},{});var s="";i.a.each(e,function(t,e){s+="<tr><td> "+e+" </td><td> "+t+" </td></tr>"});var l="";i.a.each(t,function(t,e){l+="<tr><td> "+e+" </td><td> "+t+" </td></tr>"}),r=i.a.reduce(r,function(t,e){return i.a.each(e,function(e,n){t[e.Name]=(t[e.Name]||0)+e.Count}),t},{}),n=i.a.reduce(n,function(t,e){return i.a.each(e,function(e,n){t[e.Name]=(t[e.Name]||0)+e.Count}),t},{});var f="";i.a.each(r,function(t,e){f+="<tr><td> "+e+" </td><td> "+t+"</td></tr>"});var d="";i.a.each(n,function(t,e){d+="<tr><td> "+e+" </td><td> "+t+" </td></tr>"}),u=i.a.reduce(u,function(t,e){return e&&e.Key?(t[e.Key]=(t[e.Key]||0)+e.Value,t):t},{}),a=i.a.reduce(a,function(t,e){return e&&e.Key?(t[e.Key]=(t[e.Key]||0)+e.Value,t):t},{});var h="";i.a.each(u,function(t,e){0,h+="<tr><td> "+c.a.getEquipEffect(e)+"</td><td>+"+Math.round(100*t)/100+"</td></tr>"});var p="";i.a.each(a,function(t,e){0,p+="<tr><td> "+c.a.getEquipEffect(e)+"</td><td>+"+Math.round(100*t)/100+"</td></tr>"}),o()("#runeCheckCost").empty().append(s.trim()+f.trim()+h.trim()),o()("#runeCheckCost").data("cost",D(s.trim()+f.trim())),o()("#runeCost").empty().append(l.trim()+d.trim()+p.trim()),o()("#runeCost").data("cost",D(l.trim()+d.trim()))},D=function(t){var e=document.createElement("DIV");return e.innerHTML=t,e.textContent||e.innerText||""},F=function(t){if(1e4==t)_(t);else switch(o()("#rune"+t).data("status")){case 0:O(t);break;case 1:W(t);break;case 2:_(t)}H(),j()},O=function(t,e,n){if(1e4!=t){var r=o()("#rune"+t);if(!(r.data("rune").evo>A))if(e){if(n){if(r.data("status")>=2)return;r.data("status",2).addClass("rune-saved")}else{if(r.data("status")>=1)return;r.data("status",1).addClass("rune-checked"),y.push(t)}o()('.rune-icon[runeId="'+t+'"]').toggleClass("rune-off-"+r.data("desc").Type).toggleClass("rune-on-"+r.data("desc").Type)}else{var a=[];switch(E){case"simple":a=u.default.getPath(v.concat(y),t,A);break;case"nogold":a=u.default.getPathWithWeight(v.concat(y),t,A);break;case"custom":var s=[{id:140,weight:parseFloat(o()("#weight140").val())||0},{id:5261,weight:parseFloat(o()("#weight5261").val())||0}];a=u.default.getPathWithWeight(v.concat(y),t,A,s)}if(console.log("getPath",E,a),!a.length)return void alert(c.a.getText("nopath"));i.a.each(a,function(t,e){O(t,!0)})}}},_=function(t){confirm(c.a.getText("confirmuncheck"))&&W(t)},W=function(t,e){var n=o()("#rune"+t);if(!(n.data("rune").evo>A)){if(n.data("status",0).removeClass("rune-checked").removeClass("rune-saved"),o()('.rune-icon[runeId="'+t+'"]').toggleClass("rune-off-"+n.data("desc").Type).toggleClass("rune-on-"+n.data("desc").Type),v=i.a.without(v,t),y=i.a.without(y,t),!e){var r=u.default.getConnectedComponent(v.concat(y));i.a.each(r,function(t,e){0==i.a.contains(t,1e4)&&i.a.each(t,function(t,e){W(t,!0)})})}v=i.a.union(v,[1e4])}},X=function(){v=i.a.unique(v.concat(y)),y=[],i.a.each(v,function(t,e){o()("#rune"+t).data("status",2).removeClass("rune-checked").addClass("rune-saved")}),H(),j();var t,e=(t=v,f.a.compressToEncodedURIComponent(JSON.stringify(t)));m.a.history.navigate("typeBranch/"+w+"/share/"+e,{trigger:!1})};e.default={initUiLanguage:M,getActiveMenu:I,setActiveMenu:N,init:U,initByClass:R}},32:function(t,e,n){var r,o=function(){var t=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",r={};function o(t,e){if(!r[t]){r[t]={};for(var n=0;n<t.length;n++)r[t][t.charAt(n)]=n}return r[t][e]}var a={compressToBase64:function(t){if(null==t)return"";var n=a._compress(t,6,function(t){return e.charAt(t)});switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:a._decompress(t.length,32,function(n){return o(e,t.charAt(n))})},compressToUTF16:function(e){return null==e?"":a._compress(e,15,function(e){return t(e+32)})+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:a._decompress(t.length,16384,function(e){return t.charCodeAt(e)-32})},compressToUint8Array:function(t){for(var e=a.compress(t),n=new Uint8Array(2*e.length),r=0,o=e.length;r<o;r++){var i=e.charCodeAt(r);n[2*r]=i>>>8,n[2*r+1]=i%256}return n},decompressFromUint8Array:function(e){if(null===e||void 0===e)return a.decompress(e);for(var n=new Array(e.length/2),r=0,o=n.length;r<o;r++)n[r]=256*e[2*r]+e[2*r+1];var i=[];return n.forEach(function(e){i.push(t(e))}),a.decompress(i.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":a._compress(t,6,function(t){return n.charAt(t)})},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),a._decompress(t.length,32,function(e){return o(n,t.charAt(e))}))},compress:function(e){return a._compress(e,16,function(e){return t(e)})},_compress:function(t,e,n){if(null==t)return"";var r,o,a,i={},c={},u="",s="",l="",f=2,d=3,h=2,p=[],m=0,g=0;for(a=0;a<t.length;a+=1)if(u=t.charAt(a),Object.prototype.hasOwnProperty.call(i,u)||(i[u]=d++,c[u]=!0),s=l+u,Object.prototype.hasOwnProperty.call(i,s))l=s;else{if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(r=0;r<h;r++)m<<=1,g==e-1?(g=0,p.push(n(m)),m=0):g++;for(o=l.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o>>=1}else{for(o=1,r=0;r<h;r++)m=m<<1|o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o=0;for(o=l.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o>>=1}0==--f&&(f=Math.pow(2,h),h++),delete c[l]}else for(o=i[l],r=0;r<h;r++)m=m<<1|1&o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o>>=1;0==--f&&(f=Math.pow(2,h),h++),i[s]=d++,l=String(u)}if(""!==l){if(Object.prototype.hasOwnProperty.call(c,l)){if(l.charCodeAt(0)<256){for(r=0;r<h;r++)m<<=1,g==e-1?(g=0,p.push(n(m)),m=0):g++;for(o=l.charCodeAt(0),r=0;r<8;r++)m=m<<1|1&o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o>>=1}else{for(o=1,r=0;r<h;r++)m=m<<1|o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o=0;for(o=l.charCodeAt(0),r=0;r<16;r++)m=m<<1|1&o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o>>=1}0==--f&&(f=Math.pow(2,h),h++),delete c[l]}else for(o=i[l],r=0;r<h;r++)m=m<<1|1&o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o>>=1;0==--f&&(f=Math.pow(2,h),h++)}for(o=2,r=0;r<h;r++)m=m<<1|1&o,g==e-1?(g=0,p.push(n(m)),m=0):g++,o>>=1;for(;;){if(m<<=1,g==e-1){p.push(n(m));break}g++}return p.join("")},decompress:function(t){return null==t?"":""==t?null:a._decompress(t.length,32768,function(e){return t.charCodeAt(e)})},_decompress:function(e,n,r){var o,a,i,c,u,s,l,f=[],d=4,h=4,p=3,m="",g=[],v={val:r(0),position:n,index:1};for(o=0;o<3;o+=1)f[o]=o;for(i=0,u=Math.pow(2,2),s=1;s!=u;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*s,s<<=1;switch(i){case 0:for(i=0,u=Math.pow(2,8),s=1;s!=u;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*s,s<<=1;l=t(i);break;case 1:for(i=0,u=Math.pow(2,16),s=1;s!=u;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*s,s<<=1;l=t(i);break;case 2:return""}for(f[3]=l,a=l,g.push(l);;){if(v.index>e)return"";for(i=0,u=Math.pow(2,p),s=1;s!=u;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*s,s<<=1;switch(l=i){case 0:for(i=0,u=Math.pow(2,8),s=1;s!=u;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*s,s<<=1;f[h++]=t(i),l=h-1,d--;break;case 1:for(i=0,u=Math.pow(2,16),s=1;s!=u;)c=v.val&v.position,v.position>>=1,0==v.position&&(v.position=n,v.val=r(v.index++)),i|=(c>0?1:0)*s,s<<=1;f[h++]=t(i),l=h-1,d--;break;case 2:return g.join("")}if(0==d&&(d=Math.pow(2,p),p++),f[l])m=f[l];else{if(l!==h)return null;m=a+a.charAt(0)}g.push(m),f[h++]=a+m.charAt(0),a=m,0==--d&&(d=Math.pow(2,p),p++)}}};return a}();void 0===(r=function(){return o}.call(e,n,e,t))||(t.exports=r)},33:function(t,e,n){!function(e){"use strict";var n=function(){return{escape:function(t){return t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return(r="application/font-woff",{woff:r,woff2:r,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[n]||"";var r},dataAsUrl:function(t,e){return"data:"+e+";base64,"+t},isDataUrl:function(t){return-1!==t.search(/^(data:)/)},canvasToBlob:function(t){return t.toBlob?new Promise(function(e){t.toBlob(e)}):function(t){return new Promise(function(e){for(var n=window.atob(t.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),a=0;a<r;a++)o[a]=n.charCodeAt(a);e(new Blob([o],{type:"image/png"}))})}(t)},resolveUrl:function(t,e){var n=document.implementation.createHTMLDocument(),r=n.createElement("base");n.head.appendChild(r);var o=n.createElement("a");return n.body.appendChild(o),r.href=e,o.href=t,o.href},getAndEncode:function(t){var e=3e4;c.impl.options.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());return new Promise(function(n){var r,o=new XMLHttpRequest;if(o.onreadystatechange=function(){if(4!==o.readyState)return;if(200!==o.status)return void(r?n(r):i("cannot fetch resource: "+t+", status: "+o.status));var e=new FileReader;e.onloadend=function(){var t=e.result.split(/,/)[1];n(t)},e.readAsDataURL(o.response)},o.ontimeout=function(){r?n(r):i("timeout of "+e+"ms occured while fetching resource: "+t)},o.responseType="blob",o.timeout=e,o.open("GET",t,!0),o.send(),c.impl.options.imagePlaceholder){var a=c.impl.options.imagePlaceholder.split(/,/);a&&a[1]&&(r=a[1])}function i(t){console.error(t),n("")}})},uid:(t=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+t++}),delay:function(t){return function(e){return new Promise(function(n){setTimeout(function(){n(e)},t)})}},asArray:function(t){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e},escapeXhtml:function(t){return t.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(t){return new Promise(function(e,n){var r=new Image;r.onload=function(){e(r)},r.onerror=n,r.src=t})},width:function(t){var e=n(t,"border-left-width"),r=n(t,"border-right-width");return t.scrollWidth+e+r},height:function(t){var e=n(t,"border-top-width"),r=n(t,"border-bottom-width");return t.scrollHeight+e+r}};var t;function e(t){var e=/\.([^\.\/]*?)$/g.exec(t);return e?e[1]:""}function n(t,e){var n=window.getComputedStyle(t).getPropertyValue(e);return parseFloat(n.replace("px",""))}}(),r=function(){var t=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(t,n,a){return e(t)?Promise.resolve(t).then(r).then(function(e){var r=Promise.resolve(t);return e.forEach(function(t){r=r.then(function(e){return o(e,t,n,a)})}),r}):Promise.resolve(t)},shouldProcess:e,impl:{readUrls:r,inline:o}};function e(e){return-1!==e.search(t)}function r(e){for(var r,o=[];null!==(r=t.exec(e));)o.push(r[1]);return o.filter(function(t){return!n.isDataUrl(t)})}function o(t,e,r,o){return Promise.resolve(e).then(function(t){return r?n.resolveUrl(t,r):t}).then(o||n.getAndEncode).then(function(t){return n.dataAsUrl(t,n.mimeType(e))}).then(function(r){return t.replace(function(t){return new RegExp("(url\\(['\"]?)("+n.escape(t)+")(['\"]?\\))","g")}(e),"$1"+r+"$3")})}}(),o=function(){return{resolveAll:function(){return t(document).then(function(t){return Promise.all(t.map(function(t){return t.resolve()}))}).then(function(t){return t.join("\n")})},impl:{readAll:t}};function t(){return Promise.resolve(n.asArray(document.styleSheets)).then(function(t){var e=[];return t.forEach(function(t){try{n.asArray(t.cssRules||[]).forEach(e.push.bind(e))}catch(e){console.log("Error while reading CSS rules from "+t.href,e.toString())}}),e}).then(function(t){return t.filter(function(t){return t.type===CSSRule.FONT_FACE_RULE}).filter(function(t){return r.shouldProcess(t.style.getPropertyValue("src"))})}).then(function(e){return e.map(t)});function t(t){return{resolve:function(){var e=(t.parentStyleSheet||{}).href;return r.inlineAll(t.cssText,e)},src:function(){return t.style.getPropertyValue("src")}}}}}(),a=function(){return{inlineAll:function e(o){if(!(o instanceof Element))return Promise.resolve(o);return function(t){var e=t.style.getPropertyValue("background");return e?r.inlineAll(e).then(function(e){t.style.setProperty("background",e,t.style.getPropertyPriority("background"))}).then(function(){return t}):Promise.resolve(t)}(o).then(function(){return o instanceof HTMLImageElement?t(o).inline():Promise.all(n.asArray(o.childNodes).map(function(t){return e(t)}))})},impl:{newImage:t}};function t(t){return{inline:function(e){return n.isDataUrl(t.src)?Promise.resolve():Promise.resolve(t.src).then(e||n.getAndEncode).then(function(e){return n.dataAsUrl(e,n.mimeType(t.src))}).then(function(e){return new Promise(function(n,r){t.onload=n,t.onerror=r,t.src=e})})}}}}(),i={imagePlaceholder:void 0,cacheBust:!1},c={toSvg:u,toPng:function(t,e){return s(t,e||{}).then(function(t){return t.toDataURL()})},toJpeg:function(t,e){return s(t,e=e||{}).then(function(t){return t.toDataURL("image/jpeg",e.quality||1)})},toBlob:function(t,e){return s(t,e||{}).then(n.canvasToBlob)},toPixelData:function(t,e){return s(t,e||{}).then(function(e){return e.getContext("2d").getImageData(0,0,n.width(t),n.height(t)).data})},impl:{fontFaces:o,images:a,util:n,inliner:r,options:{}}};function u(t,e){return function(t){void 0===t.imagePlaceholder?c.impl.options.imagePlaceholder=i.imagePlaceholder:c.impl.options.imagePlaceholder=t.imagePlaceholder;void 0===t.cacheBust?c.impl.options.cacheBust=i.cacheBust:c.impl.options.cacheBust=t.cacheBust}(e=e||{}),Promise.resolve(t).then(function(t){return function(t,e,r){if(!r&&e&&!e(t))return Promise.resolve();return Promise.resolve(t).then(function(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}).then(function(r){return function(t,e,r){var o=t.childNodes;return 0===o.length?Promise.resolve(e):function(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return l(e,n)}).then(function(e){e&&t.appendChild(e)})}),r}(e,n.asArray(o),r).then(function(){return e})}(t,r,e)}).then(function(e){return function(t,e){return e instanceof Element?Promise.resolve().then(function(){var r,o;r=window.getComputedStyle(t),o=e.style,r.cssText?o.cssText=r.cssText:function(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(r,o)}).then(function(){[":before",":after"].forEach(function(r){!function(r){var o=window.getComputedStyle(t,r),a=o.getPropertyValue("content");if(""!==a&&"none"!==a){var i=n.uid();e.className=e.className+" "+i;var c=document.createElement("style");c.appendChild(function(t,e,r){var o="."+t+":"+e,a=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map(function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+a+"}")}(i,r,o)),e.appendChild(c)}}(r)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value),t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)}))}).then(function(){return e}):e}(t,e)})}(t,e.filter,!0)}).then(f).then(d).then(function(t){e.bgcolor&&(t.style.backgroundColor=e.bgcolor);e.width&&(t.style.width=e.width+"px");e.height&&(t.style.height=e.height+"px");e.style&&Object.keys(e.style).forEach(function(n){t.style[n]=e.style[n]});return t}).then(function(r){return function(t,e,r){return Promise.resolve(t).then(function(t){return t.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(t)}).then(n.escapeXhtml).then(function(t){return'<foreignObject x="0" y="0" width="100%" height="100%">'+t+"</foreignObject>"}).then(function(t){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+r+'">'+t+"</svg>"}).then(function(t){return"data:image/svg+xml;charset=utf-8,"+t})}(r,e.width||n.width(t),e.height||n.height(t))})}function s(t,e){return u(t,e).then(n.makeImage).then(n.delay(100)).then(function(r){var o=function(t){var r=document.createElement("canvas");if(r.width=e.width||n.width(t),r.height=e.height||n.height(t),e.bgcolor){var o=r.getContext("2d");o.fillStyle=e.bgcolor,o.fillRect(0,0,r.width,r.height)}return r}(t);return o.getContext("2d").drawImage(r,0,0),o})}function l(t,e,r){if(!r&&e&&!e(t))return Promise.resolve();return Promise.resolve(t).then(o).then(function(n){return a(t,n,e)}).then(function(e){return i(t,e)});function o(t){return t instanceof HTMLCanvasElement?n.makeImage(t.toDataURL()):t.cloneNode(!1)}function a(t,e,r){var o=t.childNodes;return 0===o.length?Promise.resolve(e):function(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return l(e,n)}).then(function(e){e&&t.appendChild(e)})}),r}(e,n.asArray(o),r).then(function(){return e});function a(t,e,n){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return l(e,n)}).then(function(e){e&&t.appendChild(e)})}),r}}function i(t,e){return e instanceof Element?Promise.resolve().then(function(){!function(t,e){t.cssText?e.cssText=t.cssText:function(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}(t,e)}(window.getComputedStyle(t),e.style)}).then(function(){[":before",":after"].forEach(function(r){!function(r){var o=window.getComputedStyle(t,r),a=o.getPropertyValue("content");if(""===a||"none"===a)return;var i=n.uid();e.className=e.className+" "+i;var c=document.createElement("style");c.appendChild(function(t,e,r){var o="."+t+":"+e,a=r.cssText?function(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}(r):function(t){return n.asArray(t).map(function(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(r);return document.createTextNode(o+"{"+a+"}")}(i,r,o)),e.appendChild(c)}(r)})}).then(function(){t instanceof HTMLTextAreaElement&&(e.innerHTML=t.value);t instanceof HTMLInputElement&&e.setAttribute("value",t.value)}).then(function(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);n&&e.style.setProperty(t,n)})}).then(function(){return e}):e;function r(){function r(t,e){if(t.cssText)e.cssText=t.cssText;else r(t,e);function r(t,e){n.asArray(t).forEach(function(n){e.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))})}}r(window.getComputedStyle(t),e.style)}function o(){function r(r){var o=window.getComputedStyle(t,r),a=o.getPropertyValue("content");if(a===""||a==="none")return;var i=n.uid();e.className=e.className+" "+i;var c=document.createElement("style");function u(t,e,r){var o="."+t+":"+e,a=r.cssText?i(r):c(r);return document.createTextNode(o+"{"+a+"}");function i(t){var e=t.getPropertyValue("content");return t.cssText+" content: "+e+";"}function c(t){return n.asArray(t).map(e).join("; ")+";";function e(e){return e+": "+t.getPropertyValue(e)+(t.getPropertyPriority(e)?" !important":"")}}}c.appendChild(u(i,r,o)),e.appendChild(c)}[":before",":after"].forEach(function(t){r(t)})}function a(){if(t instanceof HTMLTextAreaElement)e.innerHTML=t.value;if(t instanceof HTMLInputElement)e.setAttribute("value",t.value)}function i(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(t){var n=e.getAttribute(t);if(!n)return;e.style.setProperty(t,n)})}}}function f(t){return o.resolveAll().then(function(e){var n=document.createElement("style");return t.appendChild(n),n.appendChild(document.createTextNode(e)),t})}function d(t){return a.inlineAll(t).then(function(){return t})}t.exports=c}()}});