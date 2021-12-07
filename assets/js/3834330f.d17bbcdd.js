"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[8020],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return p}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=a,g=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return t?i.createElement(g,r(r({ref:n},c),{},{components:t})):i.createElement(g,r({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9673:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),r={id:"customAnimations",title:"Custom Animations",sidebar_label:"Custom Animations"},l=void 0,s={unversionedId:"api/LayoutAnimations/customAnimations",id:"version-2.3.0/api/LayoutAnimations/customAnimations",isDocsHomePage:!1,title:"Custom Animations",description:"If our set of predefined animations is not enough for you then this tab is what you are looking for.",source:"@site/versioned_docs/version-2.3.0/api/LayoutAnimations/CustomAnimations.md",sourceDirName:"api/LayoutAnimations",slug:"/api/LayoutAnimations/customAnimations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/customAnimations",version:"2.3.0",frontMatter:{id:"customAnimations",title:"Custom Animations",sidebar_label:"Custom Animations"},sidebar:"version-2.3.0/docs",previous:{title:"scrollTo",permalink:"/react-native-reanimated/docs/api/nativeMethods/scrollTo"},next:{title:"Entering Animations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/entryAnimations"}},u=[{value:"Custom Exiting Animation",id:"custom-exiting-animation",children:[{value:"Example",id:"example",children:[]}]},{value:"Custom Entering Animation",id:"custom-entering-animation",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Custom Layout Transtion",id:"custom-layout-transtion",children:[{value:"Example",id:"example-2",children:[]}]},{value:"Other Facts",id:"other-facts",children:[]}],c={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If our set of predefined animations is not enough for you then this tab is what you are looking for."),(0,o.kt)("h2",{id:"custom-exiting-animation"},"Custom Exiting Animation"),(0,o.kt)("p",null,"What our exiting animation builders do under the hood is generating a worklet function that returns essential data for starting particular animation.\nThe high level template looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function CustomExitingAnimation(values) {\n    'worklet'\n    const animations = {\n        // your animations\n    };\n    const initialValues = {\n        // initial values for animations\n    };\n    const callback = (finished: boolean) => {\n        // optional callback that will fire when layout animation ends\n    };\n    return {\n      initialValues,\n      animations,\n      callback,\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values")," - contains information about where view was displayed and what were its dimensions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentOriginX")," - X coordinate of top left corner in parent's coordinate system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentOriginY")," - Y coordinate of top left corner in parent's coordinate system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentWidth")," - view's width"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentHeight")," - view's height"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentGlobalOriginX")," - X coordinate of top left corner in global coordinate system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentGlobalOriginY")," - Y coordinate of top left corner in global coordinate system")))),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nfunction CardView() {\n  const exiting = (values) => {\n    'worklet';\n    const animations = {\n      originX: withTiming(width, { duration: 3000 }),\n      opacity: withTiming(0.5, { duration: 2000 }),\n    };\n    const initialValues = {\n      originX: values.currentOriginX,\n      opacity: 1,\n    };\n  }\n\n\n  return (\n    <Animated.View\n      style={[styles.animatedView]} exiting={exiting} >\n      <Text> Card Example </Text>\n    </Animated.View>\n  );\n}\n\n")),(0,o.kt)("h2",{id:"custom-entering-animation"},"Custom Entering Animation"),(0,o.kt)("p",null,"What our entering animation builders do under the hood is generating a worklet function that returns essential data for starting particular animation.\nThe high level template looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function CustomEnteringAnimation(values) {\n    'worklet'\n    const animations = {\n        // your animations\n    };\n    const initialValues = {\n        // initial values for animations\n    };\n    const callback = (finished: boolean) => {\n        // optional callback that will fire when layout animation ends\n    };\n    return {\n      initialValues,\n      animations,\n      callback,\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values")," - contains information about where view wants to be displayed and what are its dimensions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetOriginX")," - X coordinate of top left corner in parent's coordinate system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetOriginY")," - Y coordinate of top left corner in parent's coordinate system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetWidth")," - view's width "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetHeight")," - view's height "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetGlobalOriginX")," - X coordinate of top left corder in global coordinate system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetGlobalOriginY")," - Y coordinate of top left corder in global coordinate system")))),(0,o.kt)("h3",{id:"example-1"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"\nfunction CardView() {\n  const entering = (targetValues) => {\n    'worklet';\n    const animations = {\n      originX: withTiming(targetValues.originX, { duration: 3000 }),\n      opacity: withTiming(1, { duration: 2000 }),\n      borderRadius: withDelay(4000, withTiming(30, { duration: 3000 })),\n      transform: [\n        { rotate: withTiming('0deg', { duration: 4000 }) },\n        { scale: withTiming(1, { duration: 3500 }) },\n      ],\n    };\n    const initialValues = {\n      originX: -width,\n      opacity: 0,\n      borderRadius: 10,\n      transform: [{ rotate: '90deg' }, { scale: 0.5 }],\n    };\n    return {\n      initialValues,\n      animations,\n    };\n  };\n\n\n  return (\n    <Animated.View\n      style={[styles.animatedView]} entering={entering} >\n      <Text> Card Example </Text>\n    </Animated.View>\n  );\n}\n\n")),(0,o.kt)("h2",{id:"custom-layout-transtion"},"Custom Layout Transtion"),(0,o.kt)("p",null,"What our layout transition builders do under the hood is generating a worklet function that returns essential data for starting particular transition.\nThe high level template looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function CustomLayoutTransition(values) {\n    'worklet'\n    const animations = {\n        // your animations\n    };\n    const initialValues = {\n        // initial values for animations\n    };\n    const callback = (finished: boolean) => {\n        // optional callback that will fire when layout animation ends\n    };\n    return {\n      initialValues,\n      animations,\n      callback,\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values")," - contains before and after information about the view's origin and dimensions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetOriginX")," - X coordinate of top left corner in parent's coordinate system "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetOriginY")," - Y coordinate of top left corner in parent's coordinate system "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetWidth")," - view's width "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetHeight")," - view's height "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetGlobalOriginX")," - X coordinate of top left corder in global coordinate system "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.targetGlobalOriginY")," - Y coordinate of top left corder in global coordinate system "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentOriginX")," - X coordinate of top left corner in parent's coordinate system (before)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentOriginY")," - Y coordinate of top left corner in parent's coordinate system (before)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentWidth")," - view's width (before)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentHeight")," - view's height (before)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentGlobalOriginX")," - X coordinate of top left corner in global coordinate system (before)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"values.currentGlobalOriginY")," - Y coordinate of top left corner in global coordinate system (before)")))),(0,o.kt)("h3",{id:"example-2"},"Example"),(0,o.kt)("video",{src:"https://user-images.githubusercontent.com/12784455/120450759-09fa3980-c391-11eb-9b64-65ec8e6c2509.mp4",controls:"controls",muted:"muted",width:"45%"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'\nfunction CustomLayoutTransition(values) {\n  \'worklet\'\n  return {\n    animations: {\n      originX: withTiming(values.targetOriginX, {duration: 1000}),\n      originY: withDelay(1000, withTiming(values.targetOriginY, {duration: 1000})),\n      width: withSpring(values.targetWidth),\n      height: withSpring(values.targetHeight),\n    },\n    initialValues: {\n      originX: values.currentOriginX,\n      originY: values.currentOriginY,\n      width: values.currentWidth,\n      height: values.currentHeight,\n    }\n  };\n}\n\nfunction Box({label, state}: {label: string, state: boolean}) {\n  const ind = label.charCodeAt(0) - (\'A\').charCodeAt(0);\n  const delay = 300 * ind;\n  return (\n    <Animated.View \n        layout={CustomLayoutTransition} \n        style={[styles.box,\n          { \n            flexDirection: (state)? \'row\': \'row-reverse\', \n            height: (state)? 30: 60,\n          }]} \n    >\n      <Text> {label} </Text>\n    </Animated.View>\n  );\n}\n\nexport function CustomLayoutTransitionExample(): React.ReactElement {\n  const [state, setState] =  useState(true);\n  return (\n    <View style={{marginTop: 30}} >\n      <View style={{height: 300}} >\n        <View style={{flexDirection: state? \'row\' : \'column\'}} >\n          {state && <Box key="a" label="A" state={state} />}\n          <Box key="b" label="B" state={state} />\n          {!state && <Box key="a" label="A" state={state} />}\n          <Box key="c" label="C" state={state} />\n        </View>\n      </View>\n    \n      <Button onPress={() => {setState(!state)}} title="toggle" />\n    </View>\n  );\n}\n\n\n')),(0,o.kt)("h2",{id:"other-facts"},"Other Facts"),(0,o.kt)("p",null,"Each Reanimated component has its shared value that keeps current animations assigned to that particular component. If you want to start a new animation for a specific prop and you don't provide an initial value for the prop then the initial value will be taken from the last animation that has been assigned to the component. The only exception is Entering animation because we have no way to get the previous animation values."))}m.isMDXComponent=!0}}]);