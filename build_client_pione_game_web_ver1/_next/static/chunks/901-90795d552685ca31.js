"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[901],{2679:(e,t,o)=>{o.d(t,{A:()=>_});var r=o(2115);let l=r.createContext(null);function n(){return r.useContext(l)}let c="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var s=o(5155);let i=function(e){let{children:t,theme:o}=e,i=n(),a=r.useMemo(()=>{let e=null===i?{...o}:"function"==typeof o?o(i):{...i,...o};return null!=e&&(e[c]=null!==i),e},[o,i]);return(0,s.jsx)(l.Provider,{value:a,children:t})};var a=o(1934),d=o(1077),m=o(3194),h=o(1087);let u={};function f(e,t,o){let l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.useMemo(()=>{let r=e&&t[e]||t;if("function"==typeof o){let n=o(r),c=e?{...t,[e]:n}:n;return l?()=>c:c}return e?{...t,[e]:o}:{...t,...o}},[e,t,o,l])}let g=function(e){let{children:t,theme:o,themeId:r}=e,l=(0,d.A)(u),c=n()||u,g=f(r,l,o),S=f(r,c,o,!0),y="rtl"===g.direction;return(0,s.jsx)(i,{theme:S,children:(0,s.jsx)(a.T.Provider,{value:g,children:(0,s.jsx)(m.A,{value:y,children:(0,s.jsx)(h.A,{value:null==g?void 0:g.components,children:t})})})})};var S=o(6366);function y(e){let{theme:t,...o}=e,r=S.A in t?t[S.A]:void 0;return(0,s.jsx)(g,{...o,themeId:r?S.A:void 0,theme:r||t})}var p=o(1157),v=o(2884);let k="mode",C="color-scheme";function w(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e)return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function b(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function x(e,t){let o;if("undefined"!=typeof window){try{(o=localStorage.getItem(e)||void 0)||localStorage.setItem(e,t)}catch(e){}return o||t}}var $=o(3717),A=o(3048);let M={colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:j,useColorScheme:E,getInitColorSchemeScript:I}=function(e){let{themeId:t,theme:o={},modeStorageKey:l=k,colorSchemeStorageKey:c=C,disableTransitionOnChange:i=!1,defaultColorScheme:a,resolveTheme:d}=e,m={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},h=r.createContext(void 0),u="string"==typeof a?a:a.light,f="string"==typeof a?a:a.dark;return{CssVarsProvider:function(e){let{children:m,theme:u,modeStorageKey:f=l,colorSchemeStorageKey:S=c,disableTransitionOnChange:y=i,storageWindow:p="undefined"==typeof window?void 0:window,documentNode:$="undefined"==typeof document?void 0:document,colorSchemeNode:A="undefined"==typeof document?void 0:document.documentElement,disableNestedContext:M=!1,disableStyleSheetGeneration:j=!1,defaultMode:E="system"}=e,I=r.useRef(!1),_=n(),L=r.useContext(h),K=!!L&&!M,T=r.useMemo(()=>u||("function"==typeof o?o():o),[u]),V=T[t],{colorSchemes:W={},components:P={},cssVarPrefix:N,...D}=V||T,H=Object.keys(W).filter(e=>!!W[e]).join(","),O=r.useMemo(()=>H.split(","),[H]),R="string"==typeof a?a:a.light,q="string"==typeof a?a:a.dark,z=W[R]&&W[q]?E:W[D.defaultColorScheme]?.palette?.mode||D.palette?.mode,{mode:F,setMode:B,systemMode:G,lightColorScheme:J,darkColorScheme:Q,colorScheme:U,setColorScheme:X}=function(e){let{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:l,supportedColorSchemes:n=[],modeStorageKey:c=k,colorSchemeStorageKey:s=C,storageWindow:i="undefined"==typeof window?void 0:window}=e,a=n.join(","),d=n.length>1,[m,h]=r.useState(()=>{let e=x(c,t),r=x("".concat(s,"-light"),o),n=x("".concat(s,"-dark"),l);return{mode:e,systemMode:w(e),lightColorScheme:r,darkColorScheme:n}}),[,u]=r.useState(!1),f=r.useRef(!1);r.useEffect(()=>{d&&u(!0),f.current=!0},[d]);let g=b(m,e=>"light"===e?m.lightColorScheme:"dark"===e?m.darkColorScheme:void 0),S=r.useCallback(e=>{h(o=>{if(e===o.mode)return o;let r=null!=e?e:t;try{localStorage.setItem(c,r)}catch(e){}return{...o,mode:r,systemMode:w(r)}})},[c,t]),y=r.useCallback(e=>{e?"string"==typeof e?e&&!a.includes(e)?console.error("`".concat(e,"` does not exist in `theme.colorSchemes`.")):h(t=>{let o={...t};return b(t,t=>{try{localStorage.setItem("".concat(s,"-").concat(t),e)}catch(e){}"light"===t&&(o.lightColorScheme=e),"dark"===t&&(o.darkColorScheme=e)}),o}):h(t=>{let r={...t},n=null===e.light?o:e.light,c=null===e.dark?l:e.dark;if(n){if(a.includes(n)){r.lightColorScheme=n;try{localStorage.setItem("".concat(s,"-light"),n)}catch(e){}}else console.error("`".concat(n,"` does not exist in `theme.colorSchemes`."))}if(c){if(a.includes(c)){r.darkColorScheme=c;try{localStorage.setItem("".concat(s,"-dark"),c)}catch(e){}}else console.error("`".concat(c,"` does not exist in `theme.colorSchemes`."))}return r}):h(e=>{try{localStorage.setItem("".concat(s,"-light"),o),localStorage.setItem("".concat(s,"-dark"),l)}catch(e){}return{...e,lightColorScheme:o,darkColorScheme:l}})},[a,s,o,l]),p=r.useCallback(e=>{"system"===m.mode&&h(t=>{let o=(null==e?void 0:e.matches)?"dark":"light";return t.systemMode===o?t:{...t,systemMode:o}})},[m.mode]),v=r.useRef(p);return v.current=p,r.useEffect(()=>{if("function"!=typeof window.matchMedia||!d)return;let e=function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return v.current(...t)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}},[d]),r.useEffect(()=>{if(i&&d){let e=e=>{let o=e.newValue;"string"==typeof e.key&&e.key.startsWith(s)&&(!o||a.match(o))&&(e.key.endsWith("light")&&y({light:o}),e.key.endsWith("dark")&&y({dark:o})),e.key===c&&(!o||["light","dark","system"].includes(o))&&S(o||t)};return i.addEventListener("storage",e),()=>{i.removeEventListener("storage",e)}}},[y,S,c,s,a,t,i,d]),{...m,mode:f.current||!d?m.mode:void 0,systemMode:f.current||!d?m.systemMode:void 0,colorScheme:f.current||!d?g:void 0,setMode:S,setColorScheme:y}}({supportedColorSchemes:O,defaultLightColorScheme:R,defaultDarkColorScheme:q,modeStorageKey:f,colorSchemeStorageKey:S,defaultMode:z,storageWindow:p}),Y=F,Z=U;K&&(Y=L.mode,Z=L.colorScheme);let ee=Z||D.defaultColorScheme,et=D.generateThemeVars?.()||D.vars,eo={...D,components:P,colorSchemes:W,cssVarPrefix:N,vars:et};if("function"==typeof eo.generateSpacing&&(eo.spacing=eo.generateSpacing()),ee){let e=W[ee];e&&"object"==typeof e&&Object.keys(e).forEach(t=>{e[t]&&"object"==typeof e[t]?eo[t]={...eo[t],...e[t]}:eo[t]=e[t]})}let er=D.colorSchemeSelector;r.useEffect(()=>{if(Z&&A&&er&&"media"!==er){let e=er;if("class"===er&&(e=".%s"),"data"===er&&(e="[data-%s]"),er?.startsWith("data-")&&!er.includes("%s")&&(e=`[${er}="%s"]`),e.startsWith("."))A.classList.remove(...O.map(t=>e.substring(1).replace("%s",t))),A.classList.add(e.substring(1).replace("%s",Z));else{let t=e.replace("%s",Z).match(/\[([^\]]+)\]/);if(t){let[e,o]=t[1].split("=");o||O.forEach(t=>{A.removeAttribute(e.replace(Z,t))}),A.setAttribute(e,o?o.replace(/"|'/g,""):"")}else A.setAttribute(e,Z)}}},[Z,er,A,O]),r.useEffect(()=>{let e;if(y&&I.current&&$){let t=$.createElement("style");t.appendChild($.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),$.head.appendChild(t),window.getComputedStyle($.body),e=setTimeout(()=>{$.head.removeChild(t)},1)}return()=>{clearTimeout(e)}},[Z,y,$]),r.useEffect(()=>(I.current=!0,()=>{I.current=!1}),[]);let el=r.useMemo(()=>({allColorSchemes:O,colorScheme:Z,darkColorScheme:Q,lightColorScheme:J,mode:Y,setColorScheme:X,setMode:B,systemMode:G}),[O,Z,Q,J,Y,X,B,G]),en=!0;(j||!1===D.cssVariables||K&&_?.cssVarPrefix===N)&&(en=!1);let ec=(0,s.jsxs)(r.Fragment,{children:[(0,s.jsx)(g,{themeId:V?t:void 0,theme:d?d(eo):eo,children:m}),en&&(0,s.jsx)(v.A,{styles:eo.generateStyleSheets?.()||[]})]});return K?ec:(0,s.jsx)(h.Provider,{value:el,children:ec})},useColorScheme:()=>r.useContext(h)||m,getInitColorSchemeScript:e=>(function(e){let{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:r="dark",modeStorageKey:l=k,colorSchemeStorageKey:n=C,attribute:c="data-color-scheme",colorSchemeNode:i="document.documentElement",nonce:a}=e||{},d="",m=c;if("class"===c&&(m=".%s"),"data"===c&&(m="[data-%s]"),m.startsWith(".")){let e=m.substring(1);d+=`${i}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${i}.classList.add('${e}'.replace('%s', colorScheme));`}let h=m.match(/\[([^\]]+)\]/);if(h){let[e,t]=h[1].split("=");t||(d+=`${i}.removeAttribute('${e}'.replace('%s', light));
      ${i}.removeAttribute('${e}'.replace('%s', dark));`),d+=`
      ${i}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else d+=`${i}.setAttribute('${m}', colorScheme);`;return(0,s.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?a:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${l}') || '${t}';
  const dark = localStorage.getItem('${n}-dark') || '${r}';
  const light = localStorage.getItem('${n}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${d}
  }
} catch(e){}})();`}},"mui-color-scheme-init")})({colorSchemeStorageKey:c,defaultLightColorScheme:u,defaultDarkColorScheme:f,modeStorageKey:l,...e})}}({themeId:S.A,theme:()=>(0,$.A)({cssVariables:!0}),colorSchemeStorageKey:M.colorSchemeStorageKey,modeStorageKey:M.modeStorageKey,defaultColorScheme:{light:M.defaultLightColorScheme,dark:M.defaultDarkColorScheme},resolveTheme:e=>{let t={...e,typography:(0,A.A)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,p.A)({sx:e,theme:this})},t}});function _(e){let{theme:t,...o}=e;return"function"!=typeof t&&"colorSchemes"in(S.A in t?t[S.A]:t)?(0,s.jsx)(j,{theme:t,...o}):(0,s.jsx)(y,{theme:t,...o})}},7396:(e,t,o)=>{o.d(t,{default:()=>l.a});var r=o(4839),l=o.n(r)}}]);