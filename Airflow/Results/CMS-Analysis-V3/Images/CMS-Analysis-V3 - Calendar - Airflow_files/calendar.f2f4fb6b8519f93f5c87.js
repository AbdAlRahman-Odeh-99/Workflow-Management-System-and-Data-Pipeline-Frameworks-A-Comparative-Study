/*! For license information please see calendar.f2f4fb6b8519f93f5c87.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Airflow=e():(t.Airflow=t.Airflow||{},t.Airflow.calendar=e())}(self,(()=>(()=>{"use strict";var t={r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};return(()=>{t.r(e);const a=function(t){const e=document.querySelector(`meta[name="${t}"]`);return e?e.getAttribute("content"):null}("grid_url");function n(t){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][t]}function r(t,e,a){return moment.utc([t,e,a])}function o(t,e){return r(t,e,1).add(1,"month").subtract(1,"day").date()}const s="YYYY-MM-DD";document.addEventListener("DOMContentLoaded",(()=>{$("span.status_square").tooltip({html:!0});const t=JSON.parse(calendarData),e=d3.tip().attr("class","tooltip d3-tip").html((t=>t));function d(){const d=16;let l=d3.nest().key((t=>moment.utc(t.date,s).year())).key((t=>moment.utc(t.date,s).month())).key((t=>moment.utc(t.date,s).date())).key((t=>t.state)).map(t.dag_states);const c=moment.utc(t.start_date,s).year(),i=moment.utc(t.end_date,s).year();for(let t=c;t<=i;t+=1)l[t]=l[t]||{};l=d3.entries(l).map((t=>({year:t.key,dagStates:t.value}))).sort((t=>t.year));const u=54+(134*l.length+20),m=d3.select("#calendar-svg").attr("width",960).attr("height",u).call(e),y=m.append("g").attr("transform","translate(0, 39)");let p=928;function f(t,e,a=1,n=16){const r=statesColors[e||t],o=statesColors[t];p-=44,y.append("text").attr("x",p).attr("y",8).attr("text-anchor","start").attr("class","status-label").attr("alignment-baseline","middle").text(t),p-=4,p-=n,y.append("g").attr("transform",`translate(${p}, 0)`).selectAll("g").data(d3.range(a)).enter().append("rect").attr("x",(t=>t*(n/a))).attr("width",n/a).attr("height",d).attr("class","day").attr("fill",(t=>r.startsWith("url")?r:d3.interpolateHsl(r,o)(t/a))),p-=4,void 0!==e&&(y.append("text").attr("x",p).attr("y",8).attr("text-anchor","end").attr("class","status-label").attr("alignment-baseline","middle").text(e),p-=44)}f("no_status"),f("planned"),f("running"),f("failed","success",10,100);const g=m.append("g").attr("transform","translate(32, 54)").selectAll("g").data(l).enter().append("g").attr("transform",((t,e)=>`translate(0, ${20+134*e})`));g.append("text").attr("x",-57).attr("transform","rotate(270)").attr("text-anchor","middle").attr("class","year-label").text((t=>t.year)),g.append("g").attr("transform","translate(34, 4)").attr("text-anchor","end").selectAll("g").data(d3.range(7)).enter().append("text").attr("y",(t=>(t+.5)*d)).attr("class","day-label").text(n);const h=g.append("g").attr("transform","translate(48, 0)").append("g").selectAll("g").data((t=>d3.range(12).map((e=>({year:t.year,month:e,dagStates:t.dagStates[e]||{}}))))).enter().append("g").attr("transform",(t=>`translate(${function(t,e){const a=r(t,0,1).day(),n=r(t,e,1).dayOfYear();return Math.floor((n+a-1)/7)}(t.year,t.month)*d}, 0)`));h.selectAll("g").data((t=>d3.range(o(t.year,t.month)).map((e=>{const a=e+1,n=t.dagStates[a]||{};return{year:t.year,month:t.month,day:a,dagStates:n}})))).enter().append("rect").attr("x",(t=>function(t,e,a){const n=r(t,e,1).day(),o=r(t,e,a).date();return Math.floor((o+n-1)/7)}(t.year,t.month,t.day)*d)).attr("y",(t=>r(t.year,t.month,t.day).day()*d)).attr("width",d).attr("height",d).attr("class","day").attr("fill",(t=>{const e=e=>(t.dagStates[e]||[{count:0}])[0].count;if(e("running")>0)return statesColors.running;const a=e("success"),n=e("failed");if(a+n===0){return e("planned")>0?statesColors.planned:statesColors.no_status}let r;if(0===n)r=0;else{const t=.5;r=t+n/(n+a)*(1-t)}return d3.interpolateHsl(statesColors.success,statesColors.failed)(r)})).on("click",(t=>{var e;window.location.href=(e=r(t.year,t.month,t.day).add(1,"day").subtract(1,"ms"),`${a}?base_date=${encodeURIComponent(e.toISOString())}`)})).on("mouseover",(function(t){const a=(t=>{const e=d3.entries(t.dagStates).map((t=>`${t.value[0].count} ${t.key}`)),a=r(t.year,t.month,t.day);return`<strong>${n(a.day())} ${a.format(s)}</strong><br>${e.join("<br>")}`})(t);e.direction("n"),e.show(a,this)})).on("mouseout",(function(t){e.hide(t,this)})),h.selectAll("g").data((t=>[t])).enter().append("path").attr("class","month").style("fill","none").attr("d",(t=>{const e=r(t.year,t.month,1).day(),a=r(t.year,t.month,1).add(1,"month").day(),n=function(t,e){const a=r(t,e,1).day();return Math.floor((o(t,e)+a)/7)+1}(t.year,t.month);return d3.svg.line()([[0,e*d],[d,e*d],[d,0],[n*d,0],[n*d,a*d],[(n-1)*d,a*d],[(n-1)*d,112],[0,112],[0,e*d]])}))}$("#loading").remove(),d()}))})(),e})()));