"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[7744],{32681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>S,contentTitle:()=>A,default:()=>_,frontMatter:()=>k,metadata:()=>w,toc:()=>R});var a=n(83117),i=n(67294),r=n(3905),o=n(67177),l=n(72400),s=n(28033),c=n(10758),u=n(35842),d=n(347),m=n(6328),f=n(76933),p=n(49638);const h=200,v={code:"function anonymous(){const{offset}=this.__closure;return{transform:[{translateX:offset.value}]};}"};function y(){const e=(0,c.y)(h),t=(0,u.l)(function(){const t=()=>({transform:[{translateX:e.value}]});return t.__closure={offset:e},t.__initData=v,t.__workletHash=0xf945d52c70d,t}()),n=()=>{e.value=(0,d.D)((0,m.j)(e.value>0?-h:h,{duration:1500}),-1,!0)};i.useEffect((()=>{n()}),[]);return i.createElement(o.Z,{style:b.container},i.createElement(p.n,{style:[b.box,t]}),i.createElement(o.Z,{style:b.row},i.createElement(l.Z,{title:"Cancel animation",onPress:()=>{(0,f.RE)(e)}}),i.createElement(l.Z,{title:"Start animation",onPress:n})))}const b=s.Z.create({container:{flex:1,alignItems:"center",justifyContent:"center",height:"100%"},box:{height:120,width:120,backgroundColor:"#b58df1",borderRadius:20,marginBottom:30},row:{flexDirection:"row",gap:10}}),g="import React from 'react';\nimport { StyleSheet, View, Button } from 'react-native';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n  withRepeat,\n  cancelAnimation,\n} from 'react-native-reanimated';\n\nconst OFFSET = 200;\n\nexport default function App() {\n  const offset = useSharedValue(OFFSET);\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ translateX: offset.value }],\n  }));\n\n  const startAnimation = () => {\n    offset.value = withRepeat(\n      withTiming(offset.value > 0 ? -OFFSET : OFFSET, { duration: 1500 }),\n      -1,\n      true\n    );\n  };\n\n  React.useEffect(() => {\n    startAnimation();\n  }, []);\n\n  const handleCancelAnimation = () => {\n    // highlight-next-line\n    cancelAnimation(offset);\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={[styles.box, animatedStyles]} />\n      <View style={styles.row}>\n        <Button title=\"Cancel animation\" onPress={handleCancelAnimation} />\n        <Button title=\"Start animation\" onPress={startAnimation} />\n      </View>\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n    height: '100%',\n  },\n  box: {\n    height: 120,\n    width: 120,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginBottom: 30,\n  },\n  row: {\n    flexDirection: 'row',\n    gap: 10,\n  },\n});\n",k={sidebar_position:7},A="cancelAnimation",w={unversionedId:"core/cancelAnimation",id:"core/cancelAnimation",title:"cancelAnimation",description:"cancelAnimation lets you cancel a running animation paired to a shared value.",source:"@site/docs/core/cancelAnimation.mdx",sourceDirName:"core",slug:"/core/cancelAnimation",permalink:"/react-native-reanimated/docs/core/cancelAnimation",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/core/cancelAnimation.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"createAnimatedComponent",permalink:"/react-native-reanimated/docs/core/createAnimatedComponent"},next:{title:"Scroll",permalink:"/react-native-reanimated/docs/category/scroll"}},S={},R=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>sharedValue</code>",id:"sharedvalue",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],C=(E="InteractiveExample",function(e){return console.warn("Component "+E+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var E;const P={toc:R},j="wrapper";function _(e){let{components:t,...n}=e;return(0,r.kt)(j,(0,a.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cancelanimation"},"cancelAnimation"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cancelAnimation")," lets you cancel a running animation paired to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value"),"."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { cancelAnimation } from 'react-native-reanimated';\n\nfunction App() {\n  const offset = useSharedValue(100);\n\n  const handleCancel = () => {\n    // highlight-next-line\n    cancelAnimation(offset);\n  };\n}\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Type definitions"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"type SharedValue<T> = { value: T };\n\nfunction cancelAnimation<T>(sharedValue: SharedValue<T>): void;\n"))),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"sharedvalue"},(0,r.kt)("inlineCode",{parentName:"h4"},"sharedValue")),(0,r.kt)("p",null,"The shared value of a running animation that you want to cancel. If no animation is running, the ",(0,r.kt)("inlineCode",{parentName:"p"},"cancelAnimation")," function does nothing."),(0,r.kt)("h3",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"cancelAnimation")," returns ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)(C,{src:g,component:(0,r.kt)(y,{mdxType:"CancelAnimation"}),mdxType:"InteractiveExample"}),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can resume the animation by assigning the same animation (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"withSpring"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"withTiming"),") to the shared value again.")),(0,r.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,r.kt)("div",{className:"compatibility"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Android"),(0,r.kt)("th",{parentName:"tr",align:null},"iOS"),(0,r.kt)("th",{parentName:"tr",align:null},"Web"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}_.isMDXComponent=!0},347:(e,t,n)=>{n.d(t,{D:()=>i});var a=n(76933);const i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0;return(0,a.oF)(e,(()=>{const o="function"==typeof e?e():e;return{isHigherOrder:!0,onFrame:function(e,a){const i=o.onFrame(o,a);if(e.current=o.current,i){if(e.reps+=1,o.callback&&o.callback(!0,e.current),e.reduceMotion||t>0&&e.reps>=t)return!0;const i=n?o.current:e.startValue;return n&&(o.toValue=e.startValue,e.startValue=i),o.onStart(o,i,a,o.previousAnimation),!1}return!1},onStart:function(e,a,i,r){e.startValue=a,e.reps=0,void 0===o.reduceMotion&&(o.reduceMotion=e.reduceMotion),e.reduceMotion&&n&&(t<=0||t%2==0)?(e.current=e.startValue,e.onFrame=()=>!0):o.onStart(o,a,i,r)},reps:0,current:o.current,callback:e=>{i&&i(e),!e&&o.callback&&o.callback(!1)},startValue:0,reduceMotion:(0,a.uh)(r)}}))}},49638:(e,t,n)=>{n.d(t,{n:()=>r});var a=n(67177),i=n(17613);n(67294);const r=(0,i.F)(a.Z)},35842:(e,t,n)=>{n.d(t,{l:()=>v});var a=n(67294),i=n(96085),r=n(97604),o=n(49402),l=n(76933),s=n(10758),c=n(40093),u=n(41956),d=n(83442);const m=!(0,d.Wr)();function f(e,t,n,a){if(Array.isArray(t)&&t.forEach(((t,i)=>{f(e,t,n&&n[i],a&&a[i])})),"object"==typeof t&&t.onFrame){const i=t;let r=i.current;void 0!==a&&("object"==typeof a?void 0!==a.value?r=a.value:void 0!==a.onFrame&&(void 0!==(null==n?void 0:n.current)?r=n.current:void 0!==(null==a?void 0:a.current)&&(r=a.current)):r=a),i.callStart=e=>{i.onStart(i,r,e,n)},i.callStart(e),i.callStart=null}else"object"==typeof t&&Object.keys(t).forEach((i=>f(e,t[i],n&&n[i],a&&a[i])))}function p(e,t,n,a,i){if(!i.value)return!0;if(Array.isArray(e)){a[n]=[];let r=!0;return e.forEach(((e,o)=>{p(e,t,o,a[n],i)||(r=!1)})),r}if("object"==typeof e&&e.onFrame){let i=!0;return e.finished||(e.callStart&&(e.callStart(t),e.callStart=null),i=e.onFrame(e,t),e.timestamp=t,i&&(e.finished=!0,e.callback&&e.callback(!0))),a[n]=e.current,i}if("object"==typeof e){a[n]={};let r=!0;return Object.keys(e).forEach((o=>{p(e[o],t,o,a[n],i)||(r=!1)})),r}return a[n]=e,!0}function h(e,t){if(Array.isArray(e))for(const n of e)h(n,t);else if("object"==typeof e&&null!==e&&void 0===e.value)for(const n of Object.keys(e))h(e[n],n);else if(void 0!==t&&"object"==typeof e&&null!==e&&void 0!==e.value)throw new Error(`[Reanimated] Invalid value passed to \`${t}\`, maybe you forgot to use \`.value\`?`)}function v(e,t,v){let y=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const b=(0,u.S)(),g=(0,a.useRef)();let k=Object.values(e.__closure??{});var A;m||!k.length&&null!==(A=t)&&void 0!==A&&A.length&&(k=t);const w=v?Array.isArray(v)?v:[v]:[],S=v?(0,c.Nq)(w):null,R=(0,s.y)(!0),C=(0,a.useRef)({});if(t?t.push(e.__workletHash):t=[...k,e.__workletHash],S&&t.push(S),!g.current){const t=(0,l.AX)(e);(0,c.Dl)(t),g.current={initial:{value:t,updater:e},remoteState:(0,i.I1)({last:t,animations:{},isAnimationCancelled:!1,isAnimationRunning:!1}),viewDescriptors:(0,u.G)()}}const{initial:E,remoteState:P,viewDescriptors:j}=g.current,_=j.shareableViewDescriptors,x=m?void 0:b;return t.push(_),(0,a.useEffect)((()=>{let t,a=e;v&&(a=()=>{const t=e();return w.forEach((e=>{e(t)})),t}),t=(0,d.V5)()?()=>{!function(e,t,a,i,r,l){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];const u=a.animations??{},d=t()??{},m=a.last;let h,v=!1;Object.keys(u).forEach((e=>{const t=d[e];(0,c.mE)(t)||delete u[e]})),Object.keys(d).forEach((e=>{const t=d[e];(0,c.mE)(t)&&(h=n.g.__frameTimestamp||performance.now(),f(h,t,u[e],m[e]),u[e]=t,v=!0)})),v?(a.animations=u,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,function t(n){const{animations:c,last:u,isAnimationCancelled:d}=a;if(d)return void(a.isAnimationRunning=!1);const m={};let f=!0;Object.keys(c).forEach((e=>{p(c[e],n,e,m,r)?(u[e]=m[e],delete c[e]):f=!1})),Object.keys(m).length&&(0,o.R)(e,m,i,l,s),f?a.isAnimationRunning=!1:requestAnimationFrame(t)}(h))):(a.isAnimationCancelled=!0,a.animations=[]),a.last=d,(0,c.wU)(m,d)||(0,o.R)(e,d,i,l,s)}(_,e,P,x,R,C,w)}:()=>{!function(e,t,a,i,r){let l=arguments.length>5&&void 0!==arguments[5]&&arguments[5];const s=a.animations??{},u=t()??{},d=a.last,m={};let h,v=!1,y=!1;for(const o in u){const e=u[o];(0,c.mE)(e)?(h=n.g.__frameTimestamp||performance.now(),f(h,e,s[o],d[o]),s[o]=e,v=!0):(y=!0,m[o]=e,delete s[o])}if(v){const t=n=>{const{animations:l,last:s,isAnimationCancelled:c}=a;if(c)return void(a.isAnimationRunning=!1);const u={};let d=!0;for(const e in l)p(l[e],n,e,u,r)?(s[e]=u[e],delete l[e]):d=!1;u&&(0,o.Z)(e,u,i),d?a.isAnimationRunning=!1:requestAnimationFrame(t)};a.animations=s,a.isAnimationRunning||(a.isAnimationCancelled=!1,a.isAnimationRunning=!0,t(h)),y&&(0,o.Z)(e,m,i)}else a.isAnimationCancelled=!0,a.animations=[],(0,c.wU)(d,u)||(0,o.Z)(e,u,i,l);a.last=u}(_,a,P,x,R,y)};const i=(0,r.R)(t,k);return()=>{(0,r.B)(i)}}),t),(0,a.useEffect)((()=>(R.value=!0,()=>{R.value=!1})),[]),h(E.value),(0,d.V5)()?{viewDescriptors:j,initial:E,viewsRef:b,animatedStyle:C}:{viewDescriptors:j,initial:E,viewsRef:b}}},40093:(e,t,n)=>{function a(e){return Object.values(e).reduce(((e,t)=>e+t.__workletHash.toString()),"")}function i(e,t){const n=Object.values(t).filter((e=>void 0!==e));return e?e.push(a(n)):e=n.map((e=>({workletHash:e.__workletHash,closure:e.__closure}))),e}function r(e,t){const n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};return function(e,t){if(!e||!t||t.length!==e.length)return!1;for(let a=0;a<t.length;++a)if(!n(e[a],t[a]))return!1;return!0}(e,t)}function o(e){return Array.isArray(e)?e.some(o):"object"==typeof e&&null!==e&&(void 0!==e.onFrame||Object.values(e).some(o))}function l(e,t){const n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(let i=0;i<n.length;i++)if(e[n[i]]!==t[n[i]])return!1;return!0}function s(e){if("object"!=typeof e)throw new Error(`[Reanimated] \`useAnimatedStyle\` has to return an object, found ${typeof e} instead.`);if(Array.isArray(e))throw new Error("[Reanimated] `useAnimatedStyle` has to return an object and cannot return static styles combined with dynamic ones. Please do merging where a component receives props.")}n.d(t,{C1:()=>i,Dl:()=>s,Nq:()=>a,mE:()=>o,qD:()=>r,wU:()=>l})},72400:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(67294),i=n(28033),r=n(88548),o=n(24404),l=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,i=e.color,l=e.disabled,c=e.onPress,u=e.testID,d=e.title;return a.createElement(r.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:l,focusable:!l,onPress:c,ref:t,style:[s.button,i&&{backgroundColor:i},l&&s.buttonDisabled],testID:u},a.createElement(o.Z,{style:[s.text,l&&s.textDisabled]},d))}));l.displayName="Button";var s=i.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const c=l},88548:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(83117),i=n(80102),r=n(67294),o=n(16528),l=n(94119),s=n(28033),c=n(67177),u=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,s=e.delayPressIn,d=e.delayPressOut,f=e.delayLongPress,p=e.disabled,h=e.focusable,v=e.onLongPress,y=e.onPress,b=e.onPressIn,g=e.onPressOut,k=e.rejectResponderTermination,A=e.style,w=(0,i.Z)(e,u),S=(0,r.useRef)(null),R=(0,o.Z)(t,S),C=(0,r.useState)("0s"),E=C[0],P=C[1],j=(0,r.useState)(null),_=j[0],x=j[1],N=(0,r.useCallback)(((e,t)=>{x(e),P(t?t/1e3+"s":"0s")}),[x,P]),O=(0,r.useCallback)((e=>{N(null!=n?n:.2,e)}),[n,N]),D=(0,r.useCallback)((e=>{N(null,e)}),[N]),V=(0,r.useMemo)((()=>({cancelable:!k,disabled:p,delayLongPress:f,delayPressStart:s,delayPressEnd:d,onLongPress:v,onPress:y,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;O(t?0:150),null!=b&&b(e)},onPressEnd(e){D(250),null!=g&&g(e)}})),[f,s,d,p,v,y,b,g,k,O,D]),T=(0,l.Z)(S,V);return r.createElement(c.Z,(0,a.Z)({},w,T,{accessibilityDisabled:p,focusable:!p&&!1!==h,pointerEvents:p?"none":void 0,ref:R,style:[m.root,!p&&m.actionable,A,null!=_&&{opacity:_},{transitionDuration:E}]}))}var m=s.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),f=r.memo(r.forwardRef(d));f.displayName="TouchableOpacity";const p=f}}]);