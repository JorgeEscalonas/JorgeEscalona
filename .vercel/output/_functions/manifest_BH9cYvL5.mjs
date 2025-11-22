import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_D9Ahbpdx.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_IqerhvUr.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///E:/Jorge/Documentos%20jorge/programas/Astro/JorgeEscalona/","cacheDir":"file:///E:/Jorge/Documentos%20jorge/programas/Astro/JorgeEscalona/node_modules/.astro/","outDir":"file:///E:/Jorge/Documentos%20jorge/programas/Astro/JorgeEscalona/dist/","srcDir":"file:///E:/Jorge/Documentos%20jorge/programas/Astro/JorgeEscalona/src/","publicDir":"file:///E:/Jorge/Documentos%20jorge/programas/Astro/JorgeEscalona/public/","buildClientDir":"file:///E:/Jorge/Documentos%20jorge/programas/Astro/JorgeEscalona/dist/client/","buildServerDir":"file:///E:/Jorge/Documentos%20jorge/programas/Astro/JorgeEscalona/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.ts","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DrECyp8I.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://jorgeescalona.vercel.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/send-email@_@ts":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BH9cYvL5.mjs","E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CSOjHQeu.mjs","E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BcBG1aK3.js","E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Contacto.astro?astro&type=script&index=0&lang.ts":"_astro/Contacto.astro_astro_type_script_index_0_lang.Ddbgb2aF.js","E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/node_modules/@preact/signals/dist/signals.module.js":"_astro/signals.module.XvvyShAe.js","@astrojs/preact/client.js":"_astro/client.CxGqaT0e.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const L=document.getElementById(\"menu-btn\"),t=document.getElementById(\"menu-dropdown\"),i=document.querySelectorAll(\".nav-link\"),a=document.querySelectorAll(\".mobile-nav-link\"),s=document.getElementById(\"desktop-nav\"),o=document.getElementById(\"header-logo\"),n=document.getElementById(\"menu-icon\"),g=[\"sobremi\",\"contacto\"],h=o.dataset.logoBlanco,r=o.dataset.logoAzul,v=new Image;v.src=r;function l(){const c=window.scrollY+100;let m=!1;g.forEach(e=>{const d=document.getElementById(e);if(d){const u=d.offsetTop,f=d.offsetHeight;c>=u&&c<=u+f&&(m=!0)}}),m?(i.forEach(e=>{e.classList.remove(\"text-white\"),e.classList.add(\"text-azul\")}),a.forEach(e=>{e.classList.remove(\"text-white\"),e.classList.add(\"text-azul\")}),s&&s.classList.add(\"text-azul\"),o.src=r,n.classList.remove(\"text-white\"),n.classList.add(\"text-azul\")):(i.forEach(e=>{e.classList.remove(\"text-azul\"),e.classList.add(\"text-white\")}),a.forEach(e=>{e.classList.remove(\"text-azul\"),e.classList.add(\"text-white\")}),s&&s.classList.remove(\"text-azul\"),o.src=h,n.classList.remove(\"text-azul\"),n.classList.add(\"text-white\"))}window.addEventListener(\"scroll\",l),window.addEventListener(\"load\",l),window.addEventListener(\"hashchange\",l),L.addEventListener(\"click\",()=>{t.classList.toggle(\"hidden\"),t.classList.toggle(\"flex\")}),a.forEach(c=>{c.addEventListener(\"click\",()=>{t.classList.add(\"hidden\"),t.classList.remove(\"flex\")})})});"],["E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Contacto.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{console.log(\"Script loaded!\");const s=document.getElementById(\"contact-form\"),r=document.getElementById(\"form-status\"),l=document.getElementById(\"submit-button\");if(!s||!r||!l){console.error(\"No se encontraron los elementos del formulario\");return}console.log(\"Form elements found, setting up event listeners...\");const i=(d,e)=>{if(!r)return;r.className=\"\";let t=\"p-5 rounded-2xl shadow-lg transition-all duration-300 flex items-start gap-4\",o=\"font-black text-xl md:text-2xl\",n=\"text-base md:text-lg\";e===\"loading\"?(t+=\" bg-white border-l-4 border-azul shadow-[0_4px_15px_rgba(0,0,0,0.1)]\",o+=\" text-azul\",n+=\" text-gray-700\"):e===\"success\"?(t+=\" bg-white border-l-4 border-green-500 shadow-[0_4px_15px_rgba(0,0,0,0.1)]\",o+=\" text-green-600\",n+=\" text-gray-700\"):e===\"error\"&&(t+=\" bg-white border-l-4 border-red-500 shadow-[0_4px_15px_rgba(0,0,0,0.1)]\",o+=\" text-red-600\",n+=\" text-gray-700\");let a=\"\";e===\"loading\"?a=`\n          <div class=\"relative w-8 h-8 \">\n            <div class=\"absolute inset-0 rounded-full border-4 border-azul/20\"></div>\n            <div class=\"absolute inset-0 rounded-full border-4 border-t-azul border-r-transparent border-b-transparent border-l-transparent animate-spin\"></div>\n          </div>\n        `:e===\"success\"?a=`\n          <div class=\"w-8 h-8 rounded-full bg-green-100 flex items-center justify-center\">\n            <svg class=\"w-5 h-5 text-green-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"3\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M5 13l4 4L19 7\" />\n            </svg>\n          </div>\n        `:e===\"error\"&&(a=`\n          <div class=\"w-8 h-8 rounded-full bg-red-100 flex items-center justify-center\">\n            <svg class=\"w-5 h-5 text-red-600\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"3\">\n              <path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M6 18L18 6M6 6l12 12\" />\n            </svg>\n          </div>\n        `),r.innerHTML=`\n        <div class=\"${t}\">\n          <div class=\"flex-shrink-0 mt-1\">\n            ${a}\n          </div>\n          <div>\n            <p class=\"${o}\">\n              ${e===\"success\"?\"¡Mensaje Enviado!\":e===\"error\"?\"¡Ups! Algo salió mal\":\"Enviando mensaje...\"}\n            </p>\n            <p class=\"${n} font-medium\">${d}</p>\n          </div>\n        </div>\n      `,r.style.display=\"block\",r.style.width=\"100%\",r.style.maxWidth=\"100%\"};s.addEventListener(\"submit\",async d=>{d.preventDefault(),console.log(\"Form submitted!\"),l.disabled=!0,i(\"Estamos enviando tu mensaje, por favor espera...\",\"loading\");try{const e={name:s.querySelector('input[name=\"name\"]')?.value||\"\",email:s.querySelector('input[name=\"email\"]')?.value||\"\",phone:s.querySelector('input[name=\"phone\"]')?.value||\"\",message:s.querySelector('textarea[name=\"message\"]')?.value||\"\"};console.log(\"Form data:\",e);const t=await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(e)}),o=await t.json();if(console.log(\"Server response:\",o),t.ok)i(\"Gracias por contactarme. He recibido tu mensaje y me pondré en contacto contigo lo antes posible.\",\"success\"),s.reset(),setTimeout(()=>{r&&(r.style.opacity=\"0\",setTimeout(()=>{r&&(r.style.display=\"none\")},300))},5e3);else throw new Error(o.error||\"Error al enviar el mensaje\")}catch(e){console.error(\"Error:\",e);const t=e instanceof Error?e.message:\"Ocurrió un error inesperado al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.\";i(t,\"error\")}finally{l.disabled=!1}})});"]],"assets":["/_astro/eye.Cy2vBxPw.svg","/_astro/server.DEz37w1a.svg","/_astro/angular.BEi8CNtM.svg","/_astro/wrench.Ch-fZyOz.svg","/_astro/astrodark.BkH7Jeoz.svg","/_astro/vue.DEaxno4g.svg","/_astro/tailwindcss.CSt91nGH.svg","/_astro/nodejs.Pf8HUcjT.svg","/_astro/python.9lpvukZ6.svg","/_astro/flutter.Dmn8HAJv.svg","/_astro/csharp.BVxpraUy.svg","/_astro/dart.BgMmpBlb.svg","/_astro/mysql.DzZMn0yN.svg","/_astro/git.DebKwC-L.svg","/_astro/figma.CY-2FYIc.svg","/_astro/laravel.D9Nso2iE.svg","/_astro/ubuntu.B0NDg-Ed.svg","/_astro/phone.BIswx--7.svg","/_astro/mail.CWK1cmm0.svg","/_astro/clock.w5i0vTQm.svg","/_astro/send.D_RYGZDc.svg","/_astro/logoblanco.zoSZB35-.png","/_astro/logoazul.HR-OwmNu.png","/_astro/foto.Byd6kCYm.jpg","/_astro/polaroid.BDRc5u39.jpg","/_astro/mp3.Dd8Kq0gP.jpg","/_astro/calculadora.Zkixq6BG.png","/_astro/vetclinic.Vmz5ddB3.jpg","/_astro/conversor.DmmSldIJ.jpg","/_astro/php_dark.Cp36W25N.svg","/_astro/html5.D3ogahhJ.svg","/_astro/css_old.CUWlvIl9.svg","/_astro/javascript.D_T4bX1p.svg","/_astro/index.DrECyp8I.css","/calculadora.png","/conversor.jpg","/CV_Jorge_Escalona.pdf","/foto.jpg","/logoazul.ico","/mp3.jpg","/my-logo.ico","/polaroid.jpg","/robots.txt","/servidor.jpg","/vetclinic.jpg","/_astro/client.CxGqaT0e.js","/_astro/client.iYFcOgd3.js","/_astro/signals.module.XvvyShAe.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"JbIhcJNEvnb7LOs6FwPm8TMXd5BKKS1CkSpbB4frIzY="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
