"use strict";(self.webpackChunknetflix_build_youtube=self.webpackChunknetflix_build_youtube||[]).push([[496],{496:function(n,e,t){t.r(e),t.d(e,{CLSThresholds:function(){return F},FCPThresholds:function(){return S},FIDThresholds:function(){return N},INPThresholds:function(){return G},LCPThresholds:function(){return X},TTFBThresholds:function(){return $},getCLS:function(){return I},getFCP:function(){return P},getFID:function(){return R},getINP:function(){return W},getLCP:function(){return Z},getTTFB:function(){return en},onCLS:function(){return I},onFCP:function(){return P},onFID:function(){return R},onINP:function(){return W},onLCP:function(){return Z},onTTFB:function(){return en}});var r,i,o,a,u,c=-1,f=function(n){addEventListener("pageshow",(function(e){e.persisted&&(c=e.timeStamp,n(e))}),!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var n=s();return n&&n.activationStart||0},l=function(n,e){var t=s(),r="navigate";return c>=0?r="back-forward-cache":t&&(document.prerendering||d()>0?r="prerender":document.wasDiscarded?r="restore":t.type&&(r=t.type.replace(/_/g,"-"))),{name:n,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver((function(n){Promise.resolve().then((function(){e(n.getEntries())}))}));return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch(n){}},v=function(n,e,t,r){var i,o;return function(a){e.value>=0&&(a||r)&&((o=e.value-(i||0))||void 0===i)&&(i=e.value,e.delta=o,e.rating=function(n,e){return n>e[1]?"poor":n>e[0]?"needs-improvement":"good"}(e.value,t),n(e))}},m=function(n){requestAnimationFrame((function(){return requestAnimationFrame((function(){return n()}))}))},h=function(n){var e=function(e){"pagehide"!==e.type&&"hidden"!==document.visibilityState||n(e)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},g=function(n){var e=!1;return function(t){e||(n(t),e=!0)}},T=-1,y=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},C=function(n){"hidden"===document.visibilityState&&T>-1&&(T="visibilitychange"===n.type?n.timeStamp:0,L())},E=function(){addEventListener("visibilitychange",C,!0),addEventListener("prerenderingchange",C,!0)},L=function(){removeEventListener("visibilitychange",C,!0),removeEventListener("prerenderingchange",C,!0)},b=function(){return T<0&&(T=y(),E(),f((function(){setTimeout((function(){T=y(),E()}),0)}))),{get firstHiddenTime(){return T}}},w=function(n){document.prerendering?addEventListener("prerenderingchange",(function(){return n()}),!0):n()},S=[1800,3e3],P=function(n,e){e=e||{},w((function(){var t,r=b(),i=l("FCP"),o=p("paint",(function(n){n.forEach((function(n){"first-contentful-paint"===n.name&&(o.disconnect(),n.startTime<r.firstHiddenTime&&(i.value=Math.max(n.startTime-d(),0),i.entries.push(n),t(!0)))}))}));o&&(t=v(n,i,S,e.reportAllChanges),f((function(r){i=l("FCP"),t=v(n,i,S,e.reportAllChanges),m((function(){i.value=performance.now()-r.timeStamp,t(!0)}))})))}))},F=[.1,.25],I=function(n,e){e=e||{},P(g((function(){var t,r=l("CLS",0),i=0,o=[],a=function(n){n.forEach((function(n){if(!n.hadRecentInput){var e=o[0],t=o[o.length-1];i&&n.startTime-t.startTime<1e3&&n.startTime-e.startTime<5e3?(i+=n.value,o.push(n)):(i=n.value,o=[n])}})),i>r.value&&(r.value=i,r.entries=o,t())},u=p("layout-shift",a);u&&(t=v(n,r,F,e.reportAllChanges),h((function(){a(u.takeRecords()),t(!0)})),f((function(){i=0,r=l("CLS",0),t=v(n,r,F,e.reportAllChanges),m((function(){return t()}))})),setTimeout(t,0))})))},A={passive:!0,capture:!0},k=new Date,D=function(n,e){r||(r=e,i=n,o=new Date,B(removeEventListener),M())},M=function(){if(i>=0&&i<o-k){var n={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+i};a.forEach((function(e){e(n)})),a=[]}},x=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;"pointerdown"==n.type?function(n,e){var t=function(){D(n,e),i()},r=function(){i()},i=function(){removeEventListener("pointerup",t,A),removeEventListener("pointercancel",r,A)};addEventListener("pointerup",t,A),addEventListener("pointercancel",r,A)}(e,n):D(e,n)}},B=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return n(e,x,A)}))},N=[100,300],R=function(n,e){e=e||{},w((function(){var t,o=b(),u=l("FID"),c=function(n){n.startTime<o.firstHiddenTime&&(u.value=n.processingStart-n.startTime,u.entries.push(n),t(!0))},s=function(n){n.forEach(c)},d=p("first-input",s);t=v(n,u,N,e.reportAllChanges),d&&h(g((function(){s(d.takeRecords()),d.disconnect()}))),d&&f((function(){var o;u=l("FID"),t=v(n,u,N,e.reportAllChanges),a=[],i=-1,r=null,B(addEventListener),o=c,a.push(o),M()}))}))},_=0,H=1/0,O=0,q=function(n){n.forEach((function(n){n.interactionId&&(H=Math.min(H,n.interactionId),O=Math.max(O,n.interactionId),_=O?(O-H)/7+1:0)}))},j=function(){return u?_:performance.interactionCount||0},z=function(){"interactionCount"in performance||u||(u=p("event",q,{type:"event",buffered:!0,durationThreshold:0}))},G=[200,500],J=0,K=function(){return j()-J},Q=[],U={},V=function(n){var e=Q[Q.length-1],t=U[n.interactionId];if(t||Q.length<10||n.duration>e.latency){if(t)t.entries.push(n),t.latency=Math.max(t.latency,n.duration);else{var r={id:n.interactionId,latency:n.duration,entries:[n]};U[r.id]=r,Q.push(r)}Q.sort((function(n,e){return e.latency-n.latency})),Q.splice(10).forEach((function(n){delete U[n.id]}))}},W=function(n,e){e=e||{},w((function(){z();var t,r=l("INP"),i=function(n){n.forEach((function(n){n.interactionId&&V(n),"first-input"===n.entryType&&!Q.some((function(e){return e.entries.some((function(e){return n.duration===e.duration&&n.startTime===e.startTime}))}))&&V(n)}));var e,i=(e=Math.min(Q.length-1,Math.floor(K()/50)),Q[e]);i&&i.latency!==r.value&&(r.value=i.latency,r.entries=i.entries,t())},o=p("event",i,{durationThreshold:e.durationThreshold||40});t=v(n,r,G,e.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),h((function(){i(o.takeRecords()),r.value<0&&K()>0&&(r.value=0,r.entries=[]),t(!0)})),f((function(){Q=[],J=j(),r=l("INP"),t=v(n,r,G,e.reportAllChanges)})))}))},X=[2500,4e3],Y={},Z=function(n,e){e=e||{},w((function(){var t,r=b(),i=l("LCP"),o=function(n){var e=n[n.length-1];e&&e.startTime<r.firstHiddenTime&&(i.value=Math.max(e.startTime-d(),0),i.entries=[e],t())},a=p("largest-contentful-paint",o);if(a){t=v(n,i,X,e.reportAllChanges);var u=g((function(){Y[i.id]||(o(a.takeRecords()),a.disconnect(),Y[i.id]=!0,t(!0))}));["keydown","click"].forEach((function(n){addEventListener(n,u,!0)})),h(u),f((function(r){i=l("LCP"),t=v(n,i,X,e.reportAllChanges),m((function(){i.value=performance.now()-r.timeStamp,Y[i.id]=!0,t(!0)}))}))}}))},$=[800,1800],nn=function n(e){document.prerendering?w((function(){return n(e)})):"complete"!==document.readyState?addEventListener("load",(function(){return n(e)}),!0):setTimeout(e,0)},en=function(n,e){e=e||{};var t=l("TTFB"),r=v(n,t,$,e.reportAllChanges);nn((function(){var i=s();if(i){var o=i.responseStart;if(o<=0||o>performance.now())return;t.value=Math.max(o-d(),0),t.entries=[i],r(!0),f((function(){t=l("TTFB",0),(r=v(n,t,$,e.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=496.2c444a20.chunk.js.map