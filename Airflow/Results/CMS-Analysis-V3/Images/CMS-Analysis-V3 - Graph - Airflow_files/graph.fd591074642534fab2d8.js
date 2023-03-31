/*! For license information please see graph.fd591074642534fab2d8.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Airflow=t():(e.Airflow=e.Airflow||{},e.Airflow.graph=t())}(self,(()=>(()=>{"use strict";var e={4965:(e,t,a)=>{a.d(t,{callModal:()=>w,dagTZ:()=>r});var n=a(2207),o=a(1068);$(window).on("load",(function(){$(`a[href*="${this.location.pathname}"]`).parent().addClass("active"),$(".never_active").removeClass("active")}));const d=(0,n.au)("dag_id"),r=(0,n.au)("dag_timezone"),s=(0,n.au)("logs_with_metadata_url"),i=(0,n.au)("external_log_url"),l=(0,n.au)("extra_links_url"),c=(0,n.au)("paused_url"),u={createAfter:(0,n.au)("next_dagrun_create_after"),intervalStart:(0,n.au)("next_dagrun_data_interval_start"),intervalEnd:(0,n.au)("next_dagrun_data_interval_end")};let m,p="",h="",g="",_="",f=[];const b="True"===(0,n.au)("show_external_log_redirect"),v=Array.from(document.querySelectorAll('a[id^="btn_"][data-base-url]')).reduce(((e,t)=>(e[t.id.replace("btn_","")]=t,e)),{});function x(e,t){let a=e.dataset.baseUrl;t.dag_id&&-1!==e.dataset.baseUrl.indexOf(d)&&(a=a.replace(d,t.dag_id),delete t.dag_id),Object.prototype.hasOwnProperty.call(t,"map_index")&&void 0===t.map_index&&delete t.map_index,e.setAttribute("href",`${a}?${$.param(t)}`)}function k(){x(v.subdag,{dag_id:g,execution_date:h}),x(v.task,{dag_id:d,task_id:p,execution_date:h,map_index:m}),x(v.rendered,{dag_id:d,task_id:p,execution_date:h,map_index:m}),x(v.mapped,{_flt_3_dag_id:d,_flt_3_task_id:p,_flt_3_run_id:_,_oc_TaskInstanceModelView:"map_index"}),v.rendered_k8s&&x(v.rendered_k8s,{dag_id:d,task_id:p,execution_date:h,map_index:m});const e={_flt_3_dag_id:d,_flt_3_task_id:p,_oc_TaskInstanceModelView:"dag_run.execution_date"};m>=0&&(e._flt_0_map_index=m),x(v.ti,e),x(v.log,{dag_id:d,task_id:p,execution_date:h,map_index:m}),x(v.xcom,{dag_id:d,task_id:p,execution_date:h,map_index:m})}function w({taskId:e,executionDate:t,extraLinks:a,tryNumber:n,isSubDag:r,dagRunId:c,mapIndex:u,isMapped:v=!1,mappedStates:x=[]}){p=e;const w=String(window.location);if($("#btn_filter").on("click",(()=>{window.location=function(e,t,a){const n=new RegExp(`([?&])${t}=.*?(&|$)`,"i"),o=-1!==e.indexOf("?")?"&":"?";return e.match(n)?e.replace(n,`$1${t}=${a}$2`):`${e}${o}${t}=${a}`}(w,"root",p)})),h=t,_=c,m=u,v&&(f=x),$("#dag_run_id").text(c),$("#task_id").text(e),$("#execution_date").text((0,o.o0)(t)),$("#taskInstanceModal").modal({}),$("#taskInstanceModal").css("margin-top","0"),$("#extra_links").prev("hr").hide(),$("#extra_links").empty().hide(),u>=0?($("#modal_map_index").show(),$("#modal_map_index .value").text(u)):($("#modal_map_index").hide(),$("#modal_map_index .value").text("")),r?($("#div_btn_subdag").show(),g=`${d}.${e}`):($("#div_btn_subdag").hide(),g=void 0),u>=0&&!f.length)$("#modal_map_index").show(),$("#modal_map_index .value").text(u),$("#mapped_dropdown").hide();else if(u>=0||v){$("#modal_map_index").show(),$("#modal_map_index .value").text(""),$("#mapped_dropdown").show();const e=m>-1?m:`All  ${f.length} Mapped Instances`;$("#mapped_dropdown #dropdown-label").text(e),$("#mapped_dropdown .dropdown-menu").empty(),$("#mapped_dropdown .dropdown-menu").append(`<li><a href="#" class="map_index_item" data-mapIndex="all">All ${f.length} Mapped Instances</a></li>`),f.forEach(((e,t)=>{$("#mapped_dropdown .dropdown-menu").append(`<li><a href="#" class="map_index_item" data-mapIndex="${t}">${t} - ${e}</a></li>`)}))}else $("#modal_map_index").hide(),$("#modal_map_index .value").text(""),$("#mapped_dropdown").hide();v?($("#task_actions").text(`Task Actions for all ${x.length} instances`),$("#btn_mapped").show(),$("#mapped_dropdown").css("display","inline-block"),$("#btn_rendered").hide(),$("#btn_xcom").hide(),$("#btn_log").hide(),$("#btn_task").hide()):($("#task_actions").text("Task Actions"),$("#btn_rendered").show(),$("#btn_xcom").show(),$("#btn_log").show(),$("#btn_mapped").hide(),$("#btn_task").show()),$("#dag_dl_logs").hide(),$("#dag_redir_logs").hide(),n>0&&!v&&($("#dag_dl_logs").show(),b&&$("#dag_redir_logs").show()),k(),$("#try_index > li").remove(),$("#redir_log_try_index > li").remove();const y=n>2?0:1,A=new URLSearchParams({dag_id:d,task_id:p,execution_date:h,metadata:"null"});void 0!==u&&A.set("map_index",u);for(let e=y;e<n;e+=1){let t=e;0!==e?A.set("try_number",e):t="All",$("#try_index").append(`<li role="presentation" style="display:inline">\n      <a href="${s}?${A}&format=file"> ${t} </a>\n      </li>`),(0!==e||b)&&$("#redir_log_try_index").append(`<li role="presentation" style="display:inline">\n      <a href="${i}?${A}"> ${t} </a>\n      </li>`)}if(A.delete("try_number"),a&&a.length>0){const e=[];a.sort(),$.each(a,((t,a)=>{A.set("link_name",a);const n=$('<a href="#" class="btn btn-primary disabled"></a>'),o=$('<span class="tool-tip" data-toggle="tooltip" style="padding-right: 2px; padding-left: 3px" data-placement="top" title="link not yet available"></span>');o.append(n),n.text(a),$.ajax({url:`${l}?${A}`,cache:!1,success(e){n.attr("href",e.url),/^(?:[a-z]+:)?\/\//.test(e.url)&&n.attr("target","_blank"),n.removeClass("disabled"),o.tooltip("disable")},error(e){o.tooltip("hide").attr("title",e.responseJSON.error).tooltip("fixTitle")}}),e.push(o)}));const t=$("#extra_links");t.prev("hr").show(),t.append(e).show(),t.find('[data-toggle="tooltip"]').tooltip()}}document.addEventListener("click",(e=>{e.target.matches('button[data-toggle="button"]')&&k()})),$(document).on("click",".map_index_item",(function(){const e=$(this).attr("data-mapIndex");w("all"===e?{taskId:p,executionDate:h,dagRunId:_,mapIndex:-1,isMapped:!0,mappedStates:f}:{taskId:p,executionDate:h,dagRunId:_,mapIndex:e})})),$("form[data-action]").on("submit",(function(e){e.preventDefault();const t=$(this).get(0);(_||h)&&(t.dag_run_id&&(t.dag_run_id.value=_),t.execution_date&&(t.execution_date.value=h),t.origin.value=window.location,t.task_id&&(t.task_id.value=p),t.map_index&&m>=0?t.map_index.value=m:t.map_index&&t.map_index.remove(),t.action=$(this).data("action"),t.submit())})),$("#pause_resume").on("change",(function(){const e=$(this),t=e.data("dag-id"),a=e.is(":checked"),n=`${c}?is_paused=${a}&dag_id=${encodeURIComponent(t)}`;e.trigger("blur"),e.removeClass("switch-input--error");const o=new CustomEvent("paused",{detail:a});document.dispatchEvent(o),$.post(n).fail((()=>{setTimeout((()=>{e.prop("checked",!a),e.addClass("switch-input--error"),o.value=!a,document.dispatchEvent(o)}),500)}))})),$("#next-run").on("mouseover",(()=>{$("#next-run").attr("data-original-title",(()=>{let e="";return u.createAfter&&(e+=`<strong>Run After:</strong> ${(0,o.o0)(u.createAfter)}<br>`,e+=`Next Run: ${(0,o.K5)(u.createAfter)}<br><br>`),u.intervalStart&&u.intervalEnd&&(e+="<strong>Data Interval</strong><br>",e+=`Start: ${(0,o.o0)(u.intervalStart)}<br>`,e+=`End: ${(0,o.o0)(u.intervalEnd)}`),e}))}))},1068:(e,t,a)=>{a.d(t,{$O:()=>s,K5:()=>m,M1:()=>i,n0:()=>l,o0:()=>c,oY:()=>u,sK:()=>n,z6:()=>r});const n="YYYY-MM-DD, HH:mm:ss",o="YYYY-MM-DD, HH:mm:ss z",d="z (Z)",r="YYYY-MM-DDThh:mm:ssTZD",s="timezone";function i(e){return e instanceof moment?e.isUTC()?"UTC":e.format(d):"UTC"===e?e:moment().tz(e).format(d)}function l(e,t){const a=moment(e),o=$.extend({title:!0},t).title,d=document.createElement("time");return d.setAttribute("datetime",a.format()),o&&d.setAttribute("title",a.isUTC()?"":`UTC: ${a.clone().utc().format()}`),d.innerText=a.format(n),d}const c=e=>moment(e).format(o);function u(e){moment.tz.setDefault(e),$('time[data-datetime-convert!="false"]').each(((e,t)=>{const a=$(t),d=moment(a.attr("datetime"));d._isValid&&a.text(d.format(a.data("with-tz")?o:n)),void 0!==a.attr("title")&&a.attr("title",d.isUTC()?"":`UTC: ${d.clone().utc().format()}`)})),$(".datetime input").each(((e,t)=>{t.value=moment(t.value).format()}))}const m=e=>`${moment(e).fromNow()}`},5122:(e,t,a)=>{a.d(t,{escapeHtml:()=>s});var n=a(1068);function o(){const e=moment();$("#clock").attr("datetime",e.format(n.z6)).html(`${e.format("HH:mm")} <strong>${(0,n.M1)(e)}</strong>`)}function d(e){localStorage.setItem("selected-timezone",e);const t=new CustomEvent(n.$O,{detail:e});document.dispatchEvent(t),(0,n.oY)(e),o(),$("body").trigger({type:"airflow.timezone-change",timezone:e})}window.isoDateToTimeEl=n.n0,window.moment=Airflow.moment;const r=document.createElement("span");function s(e){return r.textContent=e,r.innerHTML}window.escapeHtml=s,window.convertSecsToHumanReadable=function(e){const t=e,a=t-Math.floor(t);e=Math.floor(e);const n=Math.floor(e/3600);e-=3600*n;const o=Math.floor(e/60);let d="";return n>0&&(d+=`${n}Hours `),o>0&&(d+=`${o}Min `),(e-=60*o)+a>0&&(Math.floor(t)===t?d+=`${e}Sec`:d+=`${(e+=a).toFixed(3)}Sec`),d},window.postAsForm=function(e,t){const a=$("<form></form>");a.attr("method","POST"),a.attr("action",e),$.each(t||{},((e,t)=>{const n=$("<input></input>");n.attr("type","hidden"),n.attr("name",e),n.attr("value",t),a.append(n)}));const n=$("<input></input>");n.attr("type","hidden"),n.attr("name","csrf_token"),n.attr("value",csrfToken),a.append(n),$(document.body).append(a),a.submit()},$(document).ready((()=>{!function(){const e=moment.tz.guess(),t=localStorage.getItem("selected-timezone"),a=localStorage.getItem("chosen-timezone");function o(t){localStorage.setItem("chosen-timezone",t),t!==e||t!==Airflow.serverTimezone?($("#timezone-manual a").data("timezone",t).text((0,n.M1)(t)),$("#timezone-manual").show()):$("#timezone-manual").hide()}a&&o(a),d(t||Airflow.defaultUITimezone),"UTC"!==Airflow.serverTimezone&&($("#timezone-server a").html(`${(0,n.M1)(Airflow.serverTimezone)} <span class="label label-primary">Server</span>`),$("#timezone-server").show()),Airflow.serverTimezone!==e?$("#timezone-local a").attr("data-timezone",e).html(`${(0,n.M1)(e)} <span class="label label-info">Local</span>`):$("#timezone-local").hide(),$("a[data-timezone]").click((e=>{d($(e.currentTarget).data("timezone"))})),$("#timezone-other").typeahead({source:$(moment.tz.names().map((e=>({category:e.split("/",1)[0],name:e.replace("_"," "),tzName:e})))),showHintOnFocus:"all",showCategoryHeader:!0,items:"all",afterSelect(e){this.$element.val(""),o(e.tzName),d(e.tzName),setTimeout((()=>{document.activeElement.blur(),this.shown=!1,this.focused=!1}),1)}})}(),$("#clock").attr("data-original-title",hostName).attr("data-placement","bottom").parent().show(),o(),setInterval(o,1e3),$.ajaxSetup({beforeSend(e,t){/^(GET|HEAD|OPTIONS|TRACE)$/i.test(t.type)||this.crossDomain||e.setRequestHeader("X-CSRFToken",csrfToken)}}),$.fn.datetimepicker.defaults.format="YYYY-MM-DD HH:mm:ssZ",$.fn.datetimepicker.defaults.sideBySide=!0,$(".datetimepicker").datetimepicker(),$("#filter_form a.filter").click((()=>{$(".datetimepicker").datetimepicker()})),$(".js-tooltip").tooltip()}))},3897:(e,t,a)=>{a.d(t,{default:()=>i,taskNoInstanceTooltip:()=>l});var n=a(5122),o=a(1068),d=a(4965),r=a(2207);function s(e,t){const a=t&&t instanceof moment&&t.isValid();return`Started: ${e.format(o.sK)}<br>Ended: ${a?t.format(o.sK):"Not ended yet"}<br>`}function i(e,{includeTryNumber:t=!1}={}){let a="";if(void 0!==e.state&&(a+=`<strong>Status:</strong> ${(0,n.escapeHtml)(e.state)}<br><br>`),e.mapped_states){const t=(0,r.Z2)();e.mapped_states.forEach((e=>{const a=e||"no_status";t.has(a)&&t.set(a,t.get(a)+1)})),a+=`<strong>${(0,n.escapeHtml)(e.mapped_states.length)} ${1===e.mapped_states.length?"Task":"Tasks"} Mapped</strong><br />`,t.forEach(((e,t)=>{e>0&&(a+=`<span style="margin-left: 15px">${(0,n.escapeHtml)(t)}: ${(0,n.escapeHtml)(e)}</span><br />`)})),a+="<br />"}if(void 0!==e.task_id&&(a+=`Task_id: ${(0,n.escapeHtml)(e.task_id)}<br>`),a+=`Run: ${(0,o.o0)(e.execution_date)}<br>`,void 0!==e.run_id&&(a+=`Run Id: <nobr>${(0,n.escapeHtml)(e.run_id)}</nobr><br>`),e.map_index>=0&&!e.mapped_states&&(a+=`Map Index: ${(0,n.escapeHtml)(e.map_index)}<br>`),void 0!==e.operator&&(a+=`Operator: ${(0,n.escapeHtml)(e.operator)}<br>`),"running"===e.state){const t=e.start_date instanceof moment?e.start_date:moment(e.start_date);e.duration=moment().diff(t,"second")}else if(!e.duration&&e.end_date){const t=e.start_date instanceof moment?e.start_date:moment(e.start_date),a=e.end_date instanceof moment?e.end_date:moment(e.end_date);e.duration=moment(a).diff(t,"second")}a+=`Duration: ${(0,n.escapeHtml)(convertSecsToHumanReadable(e.duration))}<br>`;const i=e.data_interval_start,l=e.data_interval_end;return i&&l&&(a+="<br><strong>Data Interval:</strong><br>",a+=`Start: ${(0,o.o0)(i)}<br>`,a+=`End: ${(0,o.o0)(l)}<br>`),t&&(a+=`Try Number: ${(0,n.escapeHtml)(e.try_number)}<br>`),a+=function(e,t,a){if(!e)return"<br><em>Not yet started</em>";const n="z (Z)",o=moment.defaultZone.name.toUpperCase(),d=moment.utc(e),r=moment.utc(t),i=a.toUpperCase();let l="<br><strong>UTC:</strong><br>";l+=s(d,r),"UTC"!==o&&(d.tz(o),l+=`<br><strong>Local: ${d.format(n)}</strong><br>`,l+=s(d,r&&r instanceof moment?r.tz(o):r));"UTC"!==i&&i!==o&&(d.tz(i),l+=`<br><strong>DAG's TZ: ${d.format(n)}</strong><br>`,l+=s(d,r&&r instanceof moment?r.tz(i):r));return l}(e.start_date,e.end_date,d.dagTZ||"UTC"),a}function l(e,t){let a="";return e&&(a+=`Task_id: ${(0,n.escapeHtml)(e)}<br>`),void 0!==t.task_type&&(a+=`Operator: ${(0,n.escapeHtml)(t.task_type)}<br>`),a+="<br><em>DAG has yet to run.</em>",a}window.tiTooltip=i,window.taskNoInstanceTooltip=l},2207:(e,t,a)=>{function n(e){const t=document.querySelector(`meta[name="${e}"]`);return t?t.getAttribute("content"):null}a.d(t,{Z2:()=>o,au:()=>n});const o=()=>new Map([["success",0],["failed",0],["upstream_failed",0],["up_for_retry",0],["up_for_reschedule",0],["running",0],["deferred",0],["sensing",0],["queued",0],["scheduled",0],["skipped",0],["no_status",0]])}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,a),d.exports}a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{a.r(n);var e=a(2207),t=a(5122),o=a(3897),d=a(4965);const r=(0,e.au)("dag_id"),s=(0,e.au)("execution_date"),i=(0,e.au)("dag_run_id"),l=(0,e.au)("arrange"),c=(0,e.au)("task_instances_url"),u=(0,e.au)("is_scheduler_running"),m=new Map,p=`${c}?dag_id=${encodeURIComponent(r)}&execution_date=${encodeURIComponent(s)}`,h={success:!1,running:!1,failed:!1,skipped:!1,upstream_failed:!1,up_for_reschedule:!1,up_for_retry:!1,queued:!1,deferred:!1,no_status:!1},g=()=>!Object.values(taskInstances).map((e=>e.state)).some((e=>-1===["success","failed","upstream_failed","skipped","removed"].indexOf(e))),_=d3.tip().attr("class","tooltip d3-tip").html((e=>e)),f=new dagreD3.graphlib.Graph({compound:!0}).setGraph({nodesep:30,ranksep:15,rankdir:l}).setDefaultEdgeLabel((()=>({lineInterpolate:"basis"}))),b=dagreD3.render(),v=d3.select("#graph-svg");let x=d3.select("#graph-svg g");const k=(e,t)=>{let a=!1,{label:n}=e.value;if(tasks[e.id]&&tasks[e.id].is_mapped){const a=t[e.id]&&t[e.id].mapped_states?t[e.id].mapped_states.length:" ";n=`${e.id} [${a}]`}if(f.node(e.id)&&f.node(e.id).label!==n&&(f.node(e.id).label=n,a=!0),e.children){return e.children.map((e=>k(e,t))).some((e=>e))}return a};function w(e){if(f.hasNode(e)){const t=f.node(e);void 0!==t.children&&t.children.forEach((e=>{w(e.id)}))}f.removeNode(e)}function y(e,t){t.children.forEach((e=>{w(e.id)})),j(t).forEach((t=>m.set(t,e))),t=f.node(e),edges.forEach((e=>{const t=m.get(e.source_id),a=m.get(e.target_id);t===a||f.hasEdge(t,a)||f.setEdge(t,a,{curve:d3.curveBasis,arrowheadClass:"arrowhead"})})),A(),Z(e),function(e,t){const a=J();P(t).forEach((e=>a.delete(e))),localStorage.setItem(Y(),JSON.stringify(Array.from(a)))}(0,t)}function A(){x.remove(),x=v.append("g"),x.call(b,f),x.call(_),d3.selectAll("g.cluster").on("click",(e=>{if(d3.event.defaultPrevented)return;y(e,f.node(e))})),d3.selectAll("g.node").on("click",(e=>{const t=f.node(e);if(void 0!==t.children&&Object.keys(t.children).length>0){if(d3.event.defaultPrevented)return;B(e,t),k(nodes,taskInstances),A(),Z(e)}else if(e in taskInstances){const t=tasks[e],a=taskInstances[e].try_number||0;let n=[];t.is_mapped&&(n=taskInstances[e].mapped_states),(0,d.callModal)({taskId:e,executionDate:s,extraLinks:t.extra_links,tryNumber:a,isSubDag:"SubDagOperator"===t.task_type,dagRunId:i,mapIndex:t.map_index,isMapped:t.is_mapped,mappedStates:n})}})),d3.selectAll("g.node").on("mouseover",(function(e){d3.select(this).selectAll("rect").attr("data-highlight","highlight"),S(f.predecessors(e)),S(f.successors(e));const t=[e,...f.predecessors(e),...f.successors(e)];d3.selectAll("g.nodes g.node").filter((e=>!t.includes(e))).attr("data-highlight","fade"),d3.selectAll("g.edgePath")[0].forEach((t=>{const a=f.nodeEdges(e).includes(t.__data__)?"highlight":"fade";d3.select(t).attr("data-highlight",a)})),d3.selectAll("g.edgeLabel")[0].forEach((t=>{f.nodeEdges(e).includes(t.__data__)||d3.select(t).attr("data-highlight","fade")}))})),d3.selectAll("g.node").on("mouseout",(function(e){d3.select(this).selectAll("rect, circle").attr("data-highlight",null),T(f.predecessors(e)),T(f.successors(e)),d3.selectAll("g.node, g.edgePath, g.edgeLabel").attr("data-highlight",null),localStorage.removeItem(L())})),U(taskInstances),function(){I=d3.behavior.zoom().on("zoom",(()=>{x.attr("transform",`translate(${d3.event.translate})scale(${d3.event.scale})`)})),v.call(I);const e=f.graph().width,t=f.graph().height,a=80,n=v.node().getBoundingClientRect(),o=n.width-2*a,d=n.height-a,r=Math.min(Math.min(o/e,d/t),1.5);I.translate([o/2-e*r/2+a,a]),I.scale(r),I.event(x)}()}let I=null;function S(e){e.forEach((e=>{const t=f.node(e).elem;d3.select(t).selectAll("rect, circle").attr("data-highlight","highlight")}))}function T(e){e.forEach((e=>{const t=f.node(e).elem;d3.select(t).selectAll("rect, circle").attr("data-highlight",null)}))}function E(){d3.selectAll("g.node, g.edgePaths, g.edgeLabel").attr("data-highlight",null),localStorage.removeItem(L())}function z(e,t,a){d3.selectAll("g.node, g.edgePaths, g.edgeLabel").attr("data-highlight","fade"),d3.selectAll(`g.node.${e}`).attr("data-highlight",null),d3.selectAll(`g.node.${e} rect`).attr("data-highlight",null),d3.select(t).style("background-color",a)}function M(e){Object.keys(h).forEach((e=>{({}).hasOwnProperty.call(h,e)&&(h[e]=!1)})),null!=e&&(h[e]=!0)}d3.selectAll(".js-state-legend-item").on("mouseover",(function(){if(!O()){z($(this).data("state"))}})).on("mouseout",(()=>{O()||E()})),d3.selectAll(".js-state-legend-item").on("click",(function(){const e=$(this).data("state");if(E(),h[e])M(),d3.selectAll(".js-state-legend-item").style("background-color",null);else{z(e,this,d3.select(this).style("border-color")),M(e)}})),d3.select("#searchbox").on("keyup",(()=>{const e=document.getElementById("searchbox").value;if(""===e)return;let t=null;if(O()&&(E(),M()),d3.selectAll("g.nodes g.node").filter((function(a){return""===e?(d3.selectAll("g.edgePaths, g.edgeLabel").attr("data-highlight",null),d3.select(this).attr("data-highlight",null)):(d3.selectAll("g.edgePaths, g.edgeLabel").attr("data-highlight","fade"),!function(e,t){if(e.indexOf(t)>-1)return!0;const a=f.node(e);if(a.children)return!!j(a).find((e=>e.indexOf(t)>-1));return!1}(a,e)?d3.select(this).attr("data-highlight","fade"):(t||(t=this),d3.select(this).attr("data-highlight",null))),null})),t){const e=d3.transform(d3.select(t).attr("transform")),a=v.node().getBoundingClientRect();e.translate=[a.width/2-e.translate[0],a.height/2-e.translate[1]],e.scale=[1,1],null!=I&&(I.translate(e.translate),I.scale(1),I.event(x))}}));const O=()=>!!Object.keys(h).find((e=>h[e]));let C;function H(){$("#auto_refresh").is(":checked")?C=setInterval((()=>{N()}),1e3*autoRefreshInterval):clearInterval(C)}let D;function N(){$("#loading-dots").css("display","inline-block"),$.get(p).done((e=>{if(D!==e){taskInstances=JSON.parse(e),U(taskInstances);k(nodes,taskInstances)&&A();g()&&($("#auto_refresh").prop("checked",!1),clearInterval(C))}D=e,setTimeout((()=>{$("#loading-dots").hide()}),500),$("#error").hide()})).fail(((e,t,a)=>{const n=e.responseJSON&&e.responseJSON.error||"Something went wrong.";$("#error_msg").text(`${t}: ${a} ${n}`),$("#error").show(),setTimeout((()=>{$("#loading-dots").hide()}),500),$("#chart_section").hide(1e3),$("#datatable_section").hide(1e3)}))}function R(){const e=localStorage.getItem("disableAutoRefresh"),t=g();$("#auto_refresh").prop("checked",!(e||t)&&"True"===u),H(),d3.select("#refresh_button").on("click",(()=>N()))}function U(a){f.nodes().forEach((n=>{const d=f.node(n),{elem:r}=d,s=n;if(r){const i=`node enter ${function(e,t){const a=f.node(e);if(void 0===a.children)return e in t&&t[e].state||"no_status";const n=j(a),o=new Set;n.forEach((e=>{if(e in t){const{state:a}=t[e];o.add(null==a?"no_status":a)}}));return["failed","upstream_failed","up_for_retry","up_for_reschedule","queued","scheduled","sensing","running","shutdown","restarting","removed","no_status","success","skipped"].find((e=>o.has(e)))||"no_status"}(n,a)}`;r.setAttribute("class",i),r.setAttribute("data-toggle","tooltip"),r.onmouseover=n=>{let l;s in a?l=(0,o.default)(a[s]):d.children?l=function(a,n){const o=(0,e.Z2)();let d,r;j(a).forEach((e=>{if(e in n){const t=n[e];d&&!moment(t.start_date).isBefore(d)||(d=moment(t.start_date)),r&&!moment(t.end_date).isAfter(r)||(r=moment(t.end_date));const a=null==t.state?"no_status":t.state;o.has(a)&&o.set(a,o.get(a)+1)}}));const s=convertSecsToHumanReadable(moment(r).diff(d,"second"));let i=`\n    ${a.tooltip?`<p>${a.tooltip}</p>`:""}\n    <strong>Duration:</strong> ${s} <br><br>\n  `;return o.forEach(((e,a)=>{e>0&&(i+=`<strong>${(0,t.escapeHtml)(a)}:</strong> ${e} <br>`)})),i}(d,a):s in tasks&&(l=(0,o.taskNoInstanceTooltip)(s,tasks[s]),r.setAttribute("class",`${i} not-allowed`)),l&&_.show(l,n.target)},r.onmouseout=_.hide,r.onclick=_.hide}}))}function j(e){const t=[];return Object.values(e.children).forEach((e=>{if(void 0===e.children)t.push(e.id);else{j(e).forEach((e=>t.push(e)))}})),t}function P(e){const t=[e.id];return Object.entries(e.children).forEach((([,e])=>{if(void 0!==e.children){P(e).forEach((e=>t.push(e)))}})),t}function Y(){return`expandedGroups_${r}`}function L(){return`focused_group_${r}`}function Z(e){if(null!=e&&null!=I){const{x:t}=f.node(e),{width:a,height:n}=v.node().getBoundingClientRect();let o=d3.selectAll("g.node").filter((t=>t===e)).select("rect");o.empty()&&(o=d3.selectAll("g.cluster").filter((t=>t===e)).select("rect"));const[d,r]=[o[0][0].attributes.width.value,o[0][0].attributes.height.value],s=.9*Math.min(Math.min(a/d,n/r),1.5),[i,l]=[a/2-t*s,5];I.translate([i,l]),I.scale(s),I.event(x.transition().duration(500));const c=new Set(f.children(e));d3.selectAll("g.nodes g.node").forEach((function(t){t===e||c.has(t)?d3.select(this).attr("data-highlight",null):d3.select(this).attr("data-highlight","fade")})),localStorage.setItem(L(),e)}}function B(e,t){t.children.forEach((t=>{if(f.setNode(t.id,t.value),m.set(t.id,t.id),f.node(t.id).id=t.id,void 0!==t.children){f.node(t.id).children=t.children,j(t).forEach((e=>m.set(e,t.id)))}null!=e&&f.setParent(t.id,e)})),edges.forEach((e=>{const t=m.get(e.source_id),a=m.get(e.target_id);t!==a&&!f.hasEdge(t,a)&&t&&a&&f.setEdge(t,a,{curve:d3.curveBasis,arrowheadClass:"arrowhead",label:e.label})})),f.edges().forEach((t=>{e!==t.v&&e!==t.w||f.removeEdge(t.v,t.w)})),function(e){const t=J();t.add(e),localStorage.setItem(Y(),JSON.stringify(Array.from(t)))}(e)}function J(){let e;try{e=new Set(JSON.parse(localStorage.getItem(Y())))}catch{e=new Set}return e}document.addEventListener("visibilitychange",(()=>{document.hidden?clearInterval(C):R()})),$("#auto_refresh").change((()=>{$("#auto_refresh").is(":checked")?(N(),localStorage.removeItem("disableAutoRefresh")):localStorage.setItem("disableAutoRefresh","true"),H()})),function(){const e=new Set(P(nodes));let t=J();t=Array.from(t).filter((t=>e.has(t))),localStorage.setItem(Y(),JSON.stringify(t))}();const q=localStorage.getItem(L()),G=J();B(null,nodes),function e(t,a){void 0!==a.children&&a.children.forEach((a=>{t.has(a.id)&&(B(a.id,f.node(a.id)),e(t,a))}))}(G,nodes),k(nodes,taskInstances),A(),f.hasNode(q)&&Z(q),R()})(),n})()));