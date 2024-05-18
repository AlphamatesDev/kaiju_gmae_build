"use strict";(self.webpackChunkkaiju_app=self.webpackChunkkaiju_app||[]).push([[8507],{8507:(e,a,t)=>{t.d(a,{offchainLookup:()=>k,offchainLookupSignature:()=>y});var r=t(9357),s=t(3512),n=t(1370),o=t(4094);class c extends n.C{constructor(e){var a;let{callbackSelector:t,cause:r,data:s,extraData:n,sender:c,urls:l}=e;super(r.shortMessage||"An error occurred while fetching for an offchain result.",{cause:r,metaMessages:[...r.metaMessages||[],null!==(a=r.metaMessages)&&void 0!==a&&a.length?"":[],"Offchain Gateway Call:",l&&["  Gateway URL(s):",...l.map((e=>"    ".concat((0,o.ID)(e))))],"  Sender: ".concat(c),"  Data: ".concat(s),"  Callback selector: ".concat(t),"  Extra data: ".concat(n)].flat()}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupError"})}}class l extends n.C{constructor(e){let{result:a,url:t}=e;super("Offchain gateway response is malformed. Response data must be a hex value.",{metaMessages:["Gateway URL: ".concat((0,o.ID)(t)),"Response: ".concat((0,s.A)(a))]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupResponseMalformedError"})}}class u extends n.C{constructor(e){let{sender:a,to:t}=e;super("Reverted sender address does not match target contract address (`to`).",{metaMessages:["Contract address: ".concat(t),"OffchainLookup sender address: ".concat(a)]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"OffchainLookupSenderMismatchError"})}}var d=t(2494),i=t(4745),f=t(1376),p=t(3491),h=t(3556);var b=t(239),w=t(1499);const y="0x556f1830",m={name:"OffchainLookup",type:"error",inputs:[{name:"sender",type:"address"},{name:"urls",type:"string[]"},{name:"callData",type:"bytes"},{name:"callbackFunction",type:"bytes4"},{name:"extraData",type:"bytes"}]};async function k(e,a){let{blockNumber:t,blockTag:s,data:n,to:o}=a;const{args:l}=(0,i.W)({data:n,abi:[m]}),[d,w,y,k,v]=l,{ccipRead:C}=e,O=C&&"function"===typeof(null===C||void 0===C?void 0:C.request)?C.request:g;try{if(!function(e,a){if(!(0,h.P)(e,{strict:!1}))throw new p.M({address:e});if(!(0,h.P)(a,{strict:!1}))throw new p.M({address:a});return e.toLowerCase()===a.toLowerCase()}(o,d))throw new u({sender:d,to:o});const a=await O({data:y,sender:d,urls:w}),{data:n}=await(0,r.T1)(e,{blockNumber:t,blockTag:s,data:(0,b.xW)([k,(0,f.h)([{type:"bytes"},{type:"bytes"}],[a,v])]),to:o});return n}catch(x){throw new c({callbackSelector:k,cause:x,data:n,extraData:v,sender:d,urls:w})}}async function g(e){let{data:a,sender:t,urls:r}=e,n=new Error("An unknown error occurred.");for(let i=0;i<r.length;i++){const e=r[i],f=e.includes("{data}")?"GET":"POST",p="POST"===f?{data:a,sender:t}:void 0;try{var o;const r=await fetch(e.replace("{sender}",t).replace("{data}",a),{body:JSON.stringify(p),method:f});let u;if(u=null!==(o=r.headers.get("Content-Type"))&&void 0!==o&&o.startsWith("application/json")?(await r.json()).data:await r.text(),!r.ok){var c;n=new d.Ci({body:p,details:null!==(c=u)&&void 0!==c&&c.error?(0,s.A)(u.error):r.statusText,headers:r.headers,status:r.status,url:e});continue}if(!(0,w.q)(u)){n=new l({result:u,url:e});continue}return u}catch(u){n=new d.Ci({body:p,details:u.message,url:e})}}throw n}}}]);
//# sourceMappingURL=8507.86bf1558.chunk.js.map