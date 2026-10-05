import{r as e}from"./rolldown-runtime-hePW80VL.js";import{_ as t,a as n,b as r,c as i,d as a,f as o,g as s,h as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,t as _,u as v,v as y}from"./three-Cj6g4mIY.js";import{a as b}from"./index-DYbGTcPT.js";var x=e(r(),1);function S(e=2038){return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function C(e,t,n){let r=new _(e).setRandomGenerator(n).build(),{index:i,attributes:a}=e.geometry,o=new s,c=new s;return Array.from({length:t},()=>{let e=r._sampleFaceIndex();r._sampleFace(e,o,c);let t=i?i.getX(e*3):e*3,s=.015+n()**2*.22;return{x:o.x-c.x*s,y:o.y-c.y*s,z:o.z-c.z*s,normal:[c.x,c.y,c.z],inset:s,region:a._region.getX(t),depth:a._depth.getX(t)}})}function w(e,t,n){let r=.3,i=new Map,a=Array.from({length:6},()=>[]),o=(e,t,n,r)=>`${e}:${t}:${n}:${r}`;e.forEach((e,t)=>{a[e.region].push(t);let n=o(e.region,Math.floor(e.x/r),Math.floor(e.y/r),Math.floor(e.z/r));i.has(n)||i.set(n,[]),i.get(n).push(t)});let s=[],c=new Set;return a.forEach((a,l)=>{let u=0;for(let d=0;d<n*120&&u<n&&a.length;d++){let n=a[Math.floor(t()*a.length)],d=e[n],f=Math.floor(d.x/r),p=Math.floor(d.y/r),m=Math.floor(d.z/r),h=[];for(let e=-1;e<=1;e++)for(let t=-1;t<=1;t++)for(let n=-1;n<=1;n++){let r=i.get(o(l,f+e,p+t,m+n));r&&h.push(...r)}let g=h[Math.floor(t()*h.length)],_=e[g],v=(d.x-_.x)**2+(d.y-_.y)**2+(d.z-_.z)**2,y=`${Math.min(n,g)}:${Math.max(n,g)}`;if(v<.01||v>.16||c.has(y))continue;c.add(y);let b=[0,1,2].map(e=>(d[[`x`,`y`,`z`][e]]+_[[`x`,`y`,`z`][e]])*.5-(d.normal[e]+_.normal[e])*.09);s.push({start:[d.x,d.y,d.z],end:[_.x,_.y,_.z],control:b,region:l}),u++}}),s}function T(e,t=22e3,n=70){let r=S(),i=C(e,t,r),a=new Float32Array(i.length*3),o=new Float32Array(i.length),s=new Float32Array(i.length),c=new Float32Array(i.length);i.forEach((e,t)=>{a.set([e.x,e.y,e.z],t*3),o[t]=e.region,s[t]=r(),c[t]=1-e.depth});let l=Array.from({length:6},()=>[0,0,0,0]);i.forEach(e=>{let t=l[e.region];t[0]+=e.x,t[1]+=e.y,t[2]+=e.z,t[3]++}),l.forEach(e=>{for(let t=0;t<3;t++)e[t]/=e[3]||1;e.length=3});let u=w(i,r,n),d=new Float32Array(u.length*6*8),f=new Float32Array(u.length*2*8),p=new Float32Array(u.length*3),m=new Float32Array(u.length*3),h=new Float32Array(u.length*3),g=new Float32Array(u.length),_=new Float32Array(u.length),v=new Float32Array(u.length);return u.forEach((e,t)=>{let n=t=>e.start.map((n,r)=>(1-t)**2*n+2*(1-t)*t*e.control[r]+t*t*e.end[r]);for(let r=0;r<8;r++)d.set([...n(r/8),...n((r+1)/8)],(t*8+r)*6),f.set([e.region,e.region],(t*8+r)*2);p.set(e.start,t*3),m.set(e.end,t*3),h.set(e.control,t*3),g[t]=e.region,_[t]=r(),v[t]=.15+r()*.18}),{origins:l,positions:a,regions:o,seeds:s,folds:c,lines:d,lineRegions:f,starts:p,ends:m,controls:h,pulseRegions:g,phases:_,speeds:v}}function E(e){let t=new o,n=new d,r=new s,i=new s,a=new s;return function(o,s){t.copy(this.matrixWorld).invert(),n.copy(o.ray).applyMatrix4(t);let c=1/0,l=-1;for(let t=0;t<e.regions.length;t+=4){if(r.fromArray(e.positions,t*3),n.closestPointToPoint(r,i),i.distanceToSquared(r)>.009)continue;a.copy(i).applyMatrix4(this.matrixWorld);let s=a.distanceTo(o.ray.origin);s<o.near||s>o.far||s>=c||(c=s,l=t)}l>=0&&(r.fromArray(e.positions,l*3).applyMatrix4(this.matrixWorld),s.push({distance:c,point:r.clone(),index:l,object:this}))}}function D({width:e,height:t},n,r){if(n)return{offset:0,halfW:.46,halfH:.44};let i=(t/2-96)/t*.96;if(r){let t=e-Math.min(540,e);return{offset:(t/2-e/2)/e,halfW:t/2/e*.86,halfH:i}}return{offset:.225,halfW:.19,halfH:i}}var O=new s,k=new s,A=new s(0,1,0);function j(e,t,n,{width:r,height:i},a){let o=Math.tan(n*Math.PI/360),s=o*a.halfH*2,c=r/i*o*a.halfW*2;O.crossVectors(A,t).normalize(),k.crossVectors(t,O);let l=0;for(let n of e){let e=n.dot(t);l=Math.max(l,e+Math.abs(n.dot(O))/c,e+Math.abs(n.dot(k))/s)}return l*1.05}var M=`
  uniform float uActivity[6];
  uniform vec3 uOrigin[6];
  uniform vec4 uSpark[3];
  uniform float uTime;
  uniform float uMotion;
  float activityFor(float region) {
    float value = 0.0;
    for (int i = 0; i < 6; i++) if (abs(region - float(i)) < 0.5) value = uActivity[i]; // select, don't multiply: a bad value can't leak into other regions
    return value;
  }
  vec3 originFor(float region) {
    vec3 o = vec3(0.0);
    for (int i = 0; i < 6; i++) if (abs(region - float(i)) < 0.5) o = uOrigin[i];
    return o;
  }
  // Rings of light travelling out from the region's centre: sharp leading edge, soft tail.
  float ringAt(vec3 p, float region) {
    float a = activityFor(region);
    if (a < 0.002) return 0.0;
    float d = distance(p, originFor(region));
    float x = fract(d * 1.35 - uTime * 0.42 * uMotion);
    float x7 = x * x * x * x * x * x * x; // not pow(): Metal fast-math turns pow(0.0, y) into NaN
    return a * mix(0.45, x7 * exp(-d * 0.55) * 3.2, uMotion); // steady glow when motion is reduced
  }
  float waveAt(vec3 p, float region) { return ringAt(p, region) + activityFor(region) * 0.18; }
  float sparkAt(vec3 p) {
    // Every exp() argument stays in [-20, 0]. The old form fed exp() values like -5000 (and could
    // divide by a zero reach); Safari's Metal fast-math returns garbage for that, which turned the
    // whole brain white within ~30 s of sparks firing.
    float s = 0.0;
    for (int i = 0; i < 3; i++) {
      float age = uTime - uSpark[i].w;
      if (age < 0.0 || age > 3.0) continue;
      vec3 q = p - uSpark[i].xyz;
      float reach = 0.05 + age * 0.35;
      float k = dot(q, q) / (reach * reach) + age * 2.6;
      if (k < 20.0) s += exp(-k);
    }
    return s * uMotion * 2.4;
  }
  // Keeps every output finite and below half-float range: one NaN/Inf pixel turns into a black blob in the bloom blur.
  vec3 safe(vec3 c) { return max(min(c, vec3(16.0)), vec3(0.0)); }
  vec3 hot(float v) {
    vec3 ember = vec3(0.78, 0.2, 0.07), amber = vec3(1.0, 0.52, 0.18), ivory = vec3(1.0, 0.9, 0.74);
    return mix(mix(ember, amber, smoothstep(0.15, 0.8, v)), ivory, smoothstep(0.9, 2.2, v)) * v;
  }
`,N=`
  ${M}
  attribute float aRegion;
  attribute float aSeed;
  attribute float aFold;
  uniform float uPx; // drawing-buffer height: keeps point size tied to on-screen brain size
  varying vec3 vColor;
  void main() {
    float e = waveAt(position, aRegion) + sparkAt(position);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float centre = -(modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0)).z;
    float near = clamp(0.6 + (centre + mv.z) * -0.3, 0.3, 1.0); // far side of the brain reads dimmer
    float shimmer = 0.85 + 0.15 * sin(uTime * 0.7 * uMotion + aSeed * 6.283);
    vec3 idle = vec3(0.66, 0.6, 0.54) * (0.2 + aFold * 0.16) * shimmer;
    vColor = (idle + hot(e)) * near;
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp((1.1 + aSeed * 0.9 + min(e, 2.0) * 0.9) * uPx * projectionMatrix[1][1] * 0.0034 / -mv.z, 1.0, 9.0);
  }
`,P=`
  ${M}
  varying vec3 vColor;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = dot(p, p);
    if (d > 0.25) discard;
    gl_FragColor = vec4(safe(vColor * (exp(-d * 18.0) + exp(-d * 90.0) * 0.6)), 1.0);
  }
`,F=`
  ${M}
  attribute float aRegion;
  varying vec3 vColor;
  void main() {
    float e = waveAt(position, aRegion) + sparkAt(position) * 0.6;
    vColor = vec3(0.6, 0.55, 0.5) * 0.045 + hot(e) * 0.35;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,I=`
  ${M}
  varying vec3 vColor;
  void main() { gl_FragColor = vec4(safe(vColor), 1.0); }
`,L=`
  ${M}
  attribute vec3 aStart;
  attribute vec3 aEnd;
  attribute vec3 aControl;
  attribute float aRegion;
  attribute float aPhase;
  attribute float aSpeed;
  uniform float uPx;
  varying float vAlpha;
  void main() {
    float t = fract(uTime * aSpeed * 1.6 + aPhase);
    vec3 path = (1.0 - t) * (1.0 - t) * aStart + 2.0 * (1.0 - t) * t * aControl + t * t * aEnd;
    vec4 mv = modelViewMatrix * vec4(path, 1.0);
    vAlpha = activityFor(aRegion) * uMotion * smoothstep(0.0, 0.15, t) * (1.0 - smoothstep(0.85, 1.0, t));
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(2.4 * uPx * projectionMatrix[1][1] * 0.0048 / -mv.z, 1.0, 12.0);
  }
`,R=`
  ${M}
  varying float vAlpha;
  void main() {
    vec2 p = gl_PointCoord - 0.5;
    float d = dot(p, p);
    if (d > 0.25 || vAlpha < 0.005) discard;
    gl_FragColor = vec4(safe(hot(2.4) * exp(-d * 24.0) * vAlpha), 1.0);
  }
`,z=`
  ${M}
  attribute float aRegion;
  attribute float aFold;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vFold;
  varying float vGlow;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vNormal = normalize(normalMatrix * normal);
    vView = -mv.xyz;
    vFold = aFold;
    vGlow = ringAt(position, aRegion) + sparkAt(position) * 0.5;
    gl_Position = projectionMatrix * mv;
  }
`,B=`
  ${M}
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vFold;
  varying float vGlow;
  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vView);
    float facing = max(dot(N, V), 0.0);
    // Base kept above 0: Safari/Metal fast-math returns NaN for pow(0.0, y) and pow(negative, y),
    // and one NaN pixel is smeared by the bloom blur into a black or white blob.
    float fresnel = pow(clamp(1.0 - facing, 1e-4, 1.0), 2.6);
    float crown = smoothstep(0.0, 0.85, vFold);
    vec3 key = normalize(vec3(-0.4, 0.75, 0.6));
    float light = max(dot(N, key), 0.0);
    vec3 body = vec3(0.04, 0.034, 0.03) * mix(0.12, 1.0, crown) * (0.3 + light * 0.7);
    vec3 rim = vec3(0.93, 0.9, 0.85) * fresnel * mix(0.06, 0.55, crown);
    vec3 glow = hot(vGlow) * mix(0.15, 0.4, crown);
    float alpha = mix(0.3, 0.88, fresnel) * mix(1.0, 0.75, crown);
    gl_FragColor = vec4(safe(body + rim + glow), alpha);
  }
`,V=y(),H=`/models/brain.glb`;p.preload(H);var U=class extends x.Component{state={failed:!1};static getDerivedStateFromError(){return{failed:!0}}componentDidCatch(){this.props.onFailure()}render(){return this.state.failed?null:this.props.children}};function W({drive:e,active:n,hovered:r,selected:o,mobile:c,reduced:l,onHover:d,onSelect:f,onReady:h,onFailure:g}){let{scene:_}=p(H),y=(0,x.useMemo)(()=>{let e;_.traverse(t=>{t.isMesh&&(e=t)});let t=e.geometry;return t.setAttribute(`aRegion`,t.getAttribute(`_region`)),t.setAttribute(`aFold`,new v(t.getAttribute(`_depth`).array.map(e=>1-e),1)),e},[_]),S=(0,x.useMemo)(()=>T(y,c?16e3:48e3,c?70:150),[y,c]),C=(0,x.useMemo)(()=>{let e=y.geometry.getAttribute(`position`),t=Math.ceil(e.count/1500),n=[];for(let r=0;r<e.count;r+=t)n.push(new s().fromBufferAttribute(e,r));return n},[y]),w=(0,x.useMemo)(()=>E(S),[S]),O=(0,x.useRef)(),{camera:k,gl:A,pointer:M,size:U}=u(),W=(0,x.useRef)(null),G=(0,x.useRef)({next:1,slot:0}),K=(0,x.useMemo)(()=>new s,[]),q=(0,x.useMemo)(()=>new s,[]),J=(0,x.useMemo)(()=>new m,[]),Y=(0,x.useMemo)(()=>({uTime:{value:0},uMotion:{value:+!l},uPx:{value:900},uActivity:{value:new Float32Array(6)},uOrigin:{value:S.origins.map(e=>new s(...e))},uSpark:{value:[0,1,2].map(()=>new t(0,0,0,-99))}}),[l,S]);(0,x.useEffect)(()=>{let e=requestAnimationFrame(h);return()=>cancelAnimationFrame(e)},[h]),(0,x.useEffect)(()=>{let e=A.domElement,t=e=>{e.preventDefault(),g()};return e.addEventListener(`webglcontextlost`,t),()=>e.removeEventListener(`webglcontextlost`,t)},[A,g]),i(({clock:t},i)=>{let s=Number.isFinite(i)?a.clamp(i,0,.05):0,u=t.elapsedTime;Y.uTime.value=u,Y.uPx.value=U.height*A.getPixelRatio();for(let e=0;e<6;e++){let t=n===7||n-1===e||r===e||o===e,i=l?+t:a.damp(Y.uActivity.value[e],+!!t,3,s);Y.uActivity.value[e]=Number.isFinite(i)?a.clamp(i,0,1):0}if(!l&&u>G.current.next){let e=Math.floor(Math.random()*S.regions.length)*3;Y.uSpark.value[G.current.slot].set(S.positions[e],S.positions[e+1],S.positions[e+2],u),G.current.slot=(G.current.slot+1)%3,G.current.next=u+1+Math.random()}let d=l?1:1+Math.sin(u*.65)*.006;O.current.scale.setScalar(d);let f=l||c?0:-M.y*.04,p=l?0:Math.sin(u*.05)*.22+(c?0:M.x*.06);O.current.rotation.x=a.damp(O.current.rotation.x,f,3,s),O.current.rotation.y=a.damp(O.current.rotation.y,p,3,s);let m=l?b[0]:o===null?e.current:b[o+1],h=D(U,c,o!==null);K.set(m.x,m.y,m.z).normalize(),q.copy(K).applyQuaternion(J.copy(O.current.quaternion).invert()),K.setLength(j(C,q,k.fov,U,h)*d),k.position.lerp(K,l?1:1-Math.exp(-s*4)),k.lookAt(0,0,0),W.current??=h.offset,W.current=l?h.offset:a.damp(W.current,h.offset,5,s),k.setViewOffset(U.width,U.height,-W.current*U.width,0,U.width,U.height)});let X={uniforms:Y,transparent:!0,depthWrite:!1,depthTest:!1,blending:2,toneMapped:!1};return(0,V.jsxs)(`group`,{ref:O,children:[(0,V.jsx)(`mesh`,{raycast:()=>null,geometry:y.geometry,renderOrder:0,children:(0,V.jsx)(`meshBasicMaterial`,{colorWrite:!1})}),(0,V.jsxs)(`points`,{renderOrder:1,raycast:w,onPointerMove:c?void 0:e=>{e.stopPropagation(),d({region:S.regions[e.index],x:e.nativeEvent.clientX,y:e.nativeEvent.clientY})},onPointerOut:c?void 0:()=>d(null),onClick:e=>{e.stopPropagation(),f(S.regions[e.index])},children:[(0,V.jsxs)(`bufferGeometry`,{children:[(0,V.jsx)(`bufferAttribute`,{attach:`attributes-position`,args:[S.positions,3]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aRegion`,args:[S.regions,1]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aSeed`,args:[S.seeds,1]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aFold`,args:[S.folds,1]})]}),(0,V.jsx)(`shaderMaterial`,{...X,vertexShader:N,fragmentShader:P})]}),(0,V.jsxs)(`lineSegments`,{raycast:()=>null,renderOrder:1,children:[(0,V.jsxs)(`bufferGeometry`,{children:[(0,V.jsx)(`bufferAttribute`,{attach:`attributes-position`,args:[S.lines,3]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aRegion`,args:[S.lineRegions,1]})]}),(0,V.jsx)(`shaderMaterial`,{...X,vertexShader:F,fragmentShader:I})]}),(0,V.jsxs)(`points`,{frustumCulled:!1,raycast:()=>null,renderOrder:1,children:[(0,V.jsxs)(`bufferGeometry`,{children:[(0,V.jsx)(`bufferAttribute`,{attach:`attributes-position`,args:[S.starts,3]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aStart`,args:[S.starts,3]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aEnd`,args:[S.ends,3]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aControl`,args:[S.controls,3]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aRegion`,args:[S.pulseRegions,1]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aPhase`,args:[S.phases,1]}),(0,V.jsx)(`bufferAttribute`,{attach:`attributes-aSpeed`,args:[S.speeds,1]})]}),(0,V.jsx)(`shaderMaterial`,{...X,vertexShader:L,fragmentShader:R})]}),(0,V.jsx)(`mesh`,{raycast:()=>null,geometry:y.geometry,renderOrder:2,children:(0,V.jsx)(`shaderMaterial`,{uniforms:Y,vertexShader:z,fragmentShader:B,transparent:!0,depthWrite:!1,depthFunc:3,toneMapped:!1})})]})}var G=new c(.0011,.0011);function K(e){let t=Math.min(window.devicePixelRatio,e.mobile?1.5:2);return(0,V.jsx)(U,{onFailure:e.onFailure,children:(0,V.jsxs)(g,{dpr:t,camera:{position:[5.5,3.4,6.7],fov:34,near:.1,far:60},gl:{antialias:!1,alpha:!0,powerPreference:`high-performance`},onCreated:({gl:e})=>e.setClearColor(`#0c0a09`,0),children:[(0,V.jsx)(W,{...e}),(0,V.jsxs)(l,{multisampling:0,children:[(0,V.jsx)(f,{intensity:e.mobile?.7:1.15,luminanceThreshold:1,luminanceSmoothing:.25,mipmapBlur:!0,radius:.72}),(0,V.jsx)(h,{offset:G,radialModulation:!0,modulationOffset:.45}),(0,V.jsx)(n,{offset:.32,darkness:.62})]})]})})}export{K as default};