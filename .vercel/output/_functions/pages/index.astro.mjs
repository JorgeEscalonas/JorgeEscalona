import { e as createAstro, f as createComponent, h as addAttribute, k as renderHead, l as renderSlot, r as renderTemplate, m as maybeRenderHead, n as renderScript, s as spreadAttributes, u as unescapeHTML, o as renderComponent } from '../chunks/astro/server_D9Ahbpdx.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://jorgeescalona.vercel.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description,
    image = "/foto.jpg",
    canonicalURL = Astro2.url.href
  } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/my-logo.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- SEO --><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta name="robots" content="index, follow"><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>${renderHead()}</head> <body> <div class="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/layouts/Layout.astro", void 0);

const logoBlanco = new Proxy({"src":"/_astro/logoblanco.zoSZB35-.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/assets/svg/logoblanco.png";
							}
							
							return target[name];
						}
					});

const logoAzul = new Proxy({"src":"/_astro/logoazul.HR-OwmNu.png","width":500,"height":500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/assets/svg/logoazul.png";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const logoBlancoUrl = logoBlanco.src;
  const logoAzulUrl = logoAzul.src;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 w-full flex items-center justify-between px-3 z-50" data-astro-cid-3ef6ksr2> <!-- Logo --> <div class="text-2xl font-bold" data-astro-cid-3ef6ksr2> <a href="#hero" aria-label="Ir al inicio" data-astro-cid-3ef6ksr2> <img${addAttribute(logoBlancoUrl, "src")} alt="JE" class="h-[70px] sm:h-[90px] md:h-[120px] w-auto transition-all duration-300" id="header-logo"${addAttribute(logoBlancoUrl, "data-logo-blanco")}${addAttribute(logoAzulUrl, "data-logo-azul")} data-astro-cid-3ef6ksr2> </a> </div> <!-- Nav para pantallas md y mayores --> <nav class="hidden md:flex md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 px-10 py-8 rounded-full 
              bg-white/10 backdrop-blur-2xl 
              shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] 
              border border-white/20 
              transition-colors duration-500 ease-in-out" id="desktop-nav" data-astro-cid-3ef6ksr2> <ul class="flex items-center gap-10 font-medium text-2xl" data-astro-cid-3ef6ksr2> <li data-astro-cid-3ef6ksr2><a href="#sobremi" class="nav-link hover:text-amarillo transition whitespace-nowrap" data-section="sobremi" data-astro-cid-3ef6ksr2>Sobre mí</a></li> <li data-astro-cid-3ef6ksr2><a href="#habilidades" class="nav-link hover:text-amarillo transition" data-section="habilidades" data-astro-cid-3ef6ksr2>Habilidades</a></li> <li data-astro-cid-3ef6ksr2><a href="#portafolio" class="nav-link hover:text-amarillo transition" data-section="portafolio" data-astro-cid-3ef6ksr2>Proyectos</a></li> <li data-astro-cid-3ef6ksr2><a href="#contacto" class="nav-link hover:text-amarillo transition" data-section="contacto" data-astro-cid-3ef6ksr2>Contacto</a></li> </ul> </nav> <!-- Botón de menú para pantallas pequeñas --> <div class="md:hidden relative" data-astro-cid-3ef6ksr2> <button id="menu-btn" class="p-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 
                   shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)]" data-astro-cid-3ef6ksr2> <svg id="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify font-black text-white transition-colors duration-300" data-astro-cid-3ef6ksr2> <path d="M3 12h18" data-astro-cid-3ef6ksr2></path><path d="M3 18h18" data-astro-cid-3ef6ksr2></path><path d="M3 6h18" data-astro-cid-3ef6ksr2></path> </svg> </button> <!-- Menú desplegable oculto inicialmente --> <div id="menu-dropdown" class="hidden absolute right-0 mt-4 w-48 px-6 py-4 rounded-2xl
                   bg-white/10 backdrop-blur-2xl
                   shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] 
                   border border-white/20 gap-4 font-medium text-xl flex-col" data-astro-cid-3ef6ksr2> <a href="#sobremi" class="mobile-nav-link hover:text-amarillo transition" data-section="sobremi" data-astro-cid-3ef6ksr2>Sobre mí</a> <a href="#habilidades" class="mobile-nav-link hover:text-amarillo transition" data-section="habilidades" data-astro-cid-3ef6ksr2>Habilidades</a> <a href="#portafolio" class="mobile-nav-link hover:text-amarillo transition" data-section="portafolio" data-astro-cid-3ef6ksr2>Proyectos</a> <a href="#contacto" class="mobile-nav-link hover:text-amarillo transition" data-section="contacto" data-astro-cid-3ef6ksr2>Contacto</a> </div> </div> </header> ${renderScript($$result, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Header.astro?astro&type=script&index=0&lang.ts")} `;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Header.astro", void 0);

const MeImg = new Proxy({"src":"/_astro/foto.Byd6kCYm.jpg","width":864,"height":1184,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/public/foto.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-40 lg:gap-80 px-4 sm:px-6 md:px-20 lg:px-40 xl:px-60 text-center md:text-left" data-astro-cid-bbe6dxrz> <!-- Texto --> <div class="max-w-md" data-astro-cid-bbe6dxrz> <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white" data-astro-cid-bbe6dxrz>Hola</h2> <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mt-2 whitespace-nowrap" data-astro-cid-bbe6dxrz>
Soy <span class="text-amarillo" data-astro-cid-bbe6dxrz>Jorge Escalona</span> </h1> <h2 class="mt-2 text-lg sm:text-2xl md:text-4xl font-bold text-white whitespace-nowrap" data-astro-cid-bbe6dxrz>
Desarrollador de software <span class="text-amarillo" data-astro-cid-bbe6dxrz>Full-Stack</span> </h2> <!-- Botones --> <a href="mailto:escalonajorge73@gmail.com" data-astro-cid-bbe6dxrz></a><div class="flex flex-wrap justify-center md:justify-start gap-2 mt-6 " data-astro-cid-bbe6dxrz><a href="mailto:escalonajorge73@gmail.com" data-astro-cid-bbe6dxrz> <span class=" flex items-center gap-1 text-sm sm:text-base md:text-sm px-5 py-2 font-semibold text-white rounded-full bg-white/10 backdrop-blur-xl border border-white/20 
                    shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition" data-astro-cid-bbe6dxrz> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" data-astro-cid-bbe6dxrz></path> <rect x="2" y="4" width="20" height="16" rx="2" data-astro-cid-bbe6dxrz></rect> </svg>
Contáctame
</span> </a> <a href="https://www.linkedin.com/in/jorge-escalona-909057300" data-astro-cid-bbe6dxrz> <span class=" flex items-center gap-2 text-sm sm:text-base md:text-sm px-5 py-2 font-semibold text-white rounded-full bg-white/10 backdrop-blur-xl border border-white/20 
                    shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition" data-astro-cid-bbe6dxrz> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" data-astro-cid-bbe6dxrz></path> <rect width="4" height="12" x="2" y="9" data-astro-cid-bbe6dxrz></rect> <circle cx="4" cy="4" r="2" data-astro-cid-bbe6dxrz></circle> </svg>
Linkedin
</span> <!-- Botón de descargar CV--> </a><a href="/CV_Jorge_Escalona.pdf" download="CV_Jorge_Escalona.pdf" class="cursor-pointer" data-astro-cid-bbe6dxrz> <span class="flex items-center gap-2 text-sm sm:text-base md:text-sm px-5 py-2 font-semibold text-white rounded-full bg-white/10 backdrop-blur-xl border border-white/20 
                  shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition" data-astro-cid-bbe6dxrz> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-bbe6dxrz> <path d="M12 15V3" data-astro-cid-bbe6dxrz></path> <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-astro-cid-bbe6dxrz></path> <path d="m7 10 5 5 5-5" data-astro-cid-bbe6dxrz></path> </svg>
Descargar CV
</span> </a> </div> </div> <!-- Imagen --> <div class="relative  md:mb-0 flex justify-center" data-astro-cid-bbe6dxrz> <div class="w-[140px] sm:w-[200px] md:w-[300px] h-[140px] sm:h-[200px] md:h-[300px] bg-white rounded-full  overflow-hidden 
                shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)]" data-astro-cid-bbe6dxrz> <img${addAttribute(MeImg.src, "src")} alt="Me" class="w-full h-full object-cover" data-astro-cid-bbe6dxrz> </div> <!-- Íconos flotantes--> <div class="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-10 h-10 sm:w-16 sm:h-16  rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] float float-slow" style="animation-delay:0s" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center" viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-astro-cid-bbe6dxrz><path fill="#fff" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z" data-astro-cid-bbe6dxrz></path><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z" data-astro-cid-bbe6dxrz></path></svg> </div> <div class="absolute -top-8 -right-6 sm:-top-10 sm:-right-8 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] float float-slow" style="animation-delay:0s" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center" fill="none" viewBox="0 0 242 256" data-astro-cid-bbe6dxrz><g clip-path="url(#angular__a)" data-astro-cid-bbe6dxrz><mask id="angular__b" width="242" height="256" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance" data-astro-cid-bbe6dxrz><path fill="#fff" d="M0 0h242v256H0V0Z" data-astro-cid-bbe6dxrz></path></mask><g mask="url(#angular__b)" data-astro-cid-bbe6dxrz><path fill="url(#angular__c)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z" data-astro-cid-bbe6dxrz></path><path fill="url(#angular__d)" d="m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z" data-astro-cid-bbe6dxrz></path></g></g><defs data-astro-cid-bbe6dxrz><linearGradient id="angular__c" x1="53.2" x2="245" y1="231.9" y2="140.7" gradientUnits="userSpaceOnUse" data-astro-cid-bbe6dxrz><stop stop-color="#E40035" data-astro-cid-bbe6dxrz></stop><stop offset=".2" stop-color="#F60A48" data-astro-cid-bbe6dxrz></stop><stop offset=".4" stop-color="#F20755" data-astro-cid-bbe6dxrz></stop><stop offset=".5" stop-color="#DC087D" data-astro-cid-bbe6dxrz></stop><stop offset=".7" stop-color="#9717E7" data-astro-cid-bbe6dxrz></stop><stop offset="1" stop-color="#6C00F5" data-astro-cid-bbe6dxrz></stop></linearGradient><linearGradient id="angular__d" x1="44.5" x2="170" y1="30.7" y2="174" gradientUnits="userSpaceOnUse" data-astro-cid-bbe6dxrz><stop stop-color="#FF31D9" data-astro-cid-bbe6dxrz></stop><stop offset="1" stop-color="#FF5BE1" stop-opacity="0" data-astro-cid-bbe6dxrz></stop></linearGradient><clipPath id="angular__a" data-astro-cid-bbe6dxrz><path fill="#fff" d="M0 0h242v256H0z" data-astro-cid-bbe6dxrz></path></clipPath></defs></svg> </div> <div class="absolute top-1/2 -right-8 sm:-right-12 -translate-y-1/2 w-10 h-10 sm:w-16 sm:h-16  rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] float float-slow" style="animation-delay:0s" data-astro-cid-bbe6dxrz> <span class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center" data-astro-cid-bbe6dxrz><svg class="w-full h-full object-contain" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="16 16 32 32" data-astro-cid-bbe6dxrz><path fill="url(#python__a)" d="M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z" data-astro-cid-bbe6dxrz></path><path fill="url(#python__b)" d="M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z" data-astro-cid-bbe6dxrz></path><defs data-astro-cid-bbe6dxrz><linearGradient id="python__a" x1="19.075" x2="34.898" y1="18.782" y2="34.658" gradientUnits="userSpaceOnUse" data-astro-cid-bbe6dxrz><stop stop-color="#387EB8" data-astro-cid-bbe6dxrz></stop><stop offset="1" stop-color="#366994" data-astro-cid-bbe6dxrz></stop></linearGradient><linearGradient id="python__b" x1="28.809" x2="45.803" y1="28.882" y2="45.163" gradientUnits="userSpaceOnUse" data-astro-cid-bbe6dxrz><stop stop-color="#FFE052" data-astro-cid-bbe6dxrz></stop><stop offset="1" stop-color="#FFC331" data-astro-cid-bbe6dxrz></stop></linearGradient></defs></svg></span> </div> <div class="absolute bottom-0 -left-6 translate-y-8 sm:translate-y-12 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] float float-slow" style="animation-delay:0s" data-astro-cid-bbe6dxrz> <svg class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center" preserveAspectRatio="xMidYMid" viewBox="0 0 256 264" data-astro-cid-bbe6dxrz><path d="m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z" fill="#FF2D20" data-astro-cid-bbe6dxrz></path></svg> </div> </div></section> `;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Hero.astro", void 0);

const Marco = new Proxy({"src":"/_astro/polaroid.BDRc5u39.jpg","width":815,"height":957,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/public/polaroid.jpg";
							}
							
							return target[name];
						}
					});

const $$SobreMi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="sobremi"> <div class="min-h-[80vh] sm:min-h-auto md:min-h-screen pt-[20px] sm:pt-[60px] md:pt-[100px] max-w-full mx-auto bg-white p-4 sm:p-10 md:p-20 my-6 sm:my-10 md:my-12 rounded-[30px] md:rounded-[80px] shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.3),0_10px_50px_rgba(0,0,0,0.3)]"> <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-azul mb-2 text-center">Sobre mí</h2> <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-8">Conóceme un poco más</h3> <!-- Contenedor flexible --> <div class="flex flex-col-reverse sm:flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10"> <!-- Texto --> <div class="md:w-1/2 text-center md:text-left"> <p class="text-black leading-relaxed text-2xl sm:text-2xl md:text-3xl px-2 sm:px-4 md:px-10 font-bold">
Mi nombre completo es <span class="text-azul">Jorge Daniel Escalona Suarez</span>,
          soy un joven <span class=" text-yellow-400">Ven</span><span class=" text-azul">ezol</span><span class=" text-rojo">ano</span> de 20 años. Actualmente me dedico al
<span class=" text-azul"> desarrollo de software</span>, desde hace 3 años.
          Me apasiona expandir mis conocimientos en cuanto al mundo tecnológico, aplicando  las
<span class=" text-azul"> mejores prácticas</span> en cada cosa que haga.
</p> </div> <!-- Imagen estilo polaroid --> <div class="md:w-1/2 flex justify-center md:justify-center mt-4 md:mt-0"> <div class="relative"> <img${addAttribute(Marco.src, "src")} alt="Marco polaroid" class="h-auto block object-cover rotate-6 w-[160px] sm:w-[220px] md:w-[300px] lg:w-[400px] transform shadow-2xl overflow-hidden "> </div> </div> </div> </div> </section>`;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/SobreMi.astro", void 0);

const mp3 = new Proxy({"src":"/_astro/mp3.Dd8Kq0gP.jpg","width":683,"height":384,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/public/mp3.jpg";
							}
							
							return target[name];
						}
					});

const Calculadora = new Proxy({"src":"/_astro/calculadora.Zkixq6BG.png","width":1262,"height":584,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/public/calculadora.png";
							}
							
							return target[name];
						}
					});

const conversor = new Proxy({"src":"/_astro/conversor.DmmSldIJ.jpg","width":1590,"height":860,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/public/conversor.jpg";
							}
							
							return target[name];
						}
					});

const vetClinic = new Proxy({"src":"/_astro/vetclinic.Vmz5ddB3.jpg","width":1600,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/public/vetclinic.jpg";
							}
							
							return target[name];
						}
					});

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const VueIcon = createSvgComponent({"meta":{"src":"/_astro/vue.DEaxno4g.svg","width":256,"height":221,"format":"svg"},"attributes":{"viewBox":"0 0 256 221","width":"256","height":"221","preserveAspectRatio":"xMidYMid"},"children":"<path d=\"M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z\" fill=\"#41B883\" /><path d=\"m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z\" fill=\"#41B883\" /><path d=\"M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z\" fill=\"#35495E\" />"});

const NodeIcon = createSvgComponent({"meta":{"src":"/_astro/nodejs.Pf8HUcjT.svg","width":256,"height":292,"format":"svg"},"attributes":{"viewBox":"0 0 256 292","width":"256","height":"292"},"children":"<defs><linearGradient id=\"nodejs__a\" x1=\"68.188%\" x2=\"27.823%\" y1=\"17.487%\" y2=\"89.755%\"><stop offset=\"0%\" stop-color=\"#41873F\" /><stop offset=\"32.88%\" stop-color=\"#418B3D\" /><stop offset=\"63.52%\" stop-color=\"#419637\" /><stop offset=\"93.19%\" stop-color=\"#3FA92D\" /><stop offset=\"100%\" stop-color=\"#3FAE2A\" /></linearGradient><linearGradient id=\"nodejs__c\" x1=\"43.277%\" x2=\"159.245%\" y1=\"55.169%\" y2=\"-18.306%\"><stop offset=\"13.76%\" stop-color=\"#41873F\" /><stop offset=\"40.32%\" stop-color=\"#54A044\" /><stop offset=\"71.36%\" stop-color=\"#66B848\" /><stop offset=\"90.81%\" stop-color=\"#6CC04A\" /></linearGradient><linearGradient id=\"nodejs__f\" x1=\"-4.389%\" x2=\"101.499%\" y1=\"49.997%\" y2=\"49.997%\"><stop offset=\"9.192%\" stop-color=\"#6CC04A\" /><stop offset=\"28.64%\" stop-color=\"#66B848\" /><stop offset=\"59.68%\" stop-color=\"#54A044\" /><stop offset=\"86.24%\" stop-color=\"#41873F\" /></linearGradient><path id=\"nodejs__b\" d=\"M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z\" /><path id=\"nodejs__e\" d=\"M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z\" /></defs><path fill=\"url(#nodejs__a)\" d=\"M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z\" /><mask id=\"nodejs__d\" fill=\"#fff\"><use xlink:href=\"#nodejs__b\" /></mask><path fill=\"url(#nodejs__c)\" d=\"M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z\" mask=\"url(#nodejs__d)\" /><mask id=\"nodejs__g\" fill=\"#fff\"><use xlink:href=\"#nodejs__e\" /></mask><path fill=\"url(#nodejs__f)\" d=\"M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z\" mask=\"url(#nodejs__g)\" />"});

const PhpIcon = createSvgComponent({"meta":{"src":"/_astro/php_dark.Cp36W25N.svg","width":100,"height":50,"format":"svg"},"attributes":{"viewBox":"0 -1 100 50"},"children":"<path fill=\"#fff\" d=\"M7.579 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36l-2.014 10.07H0l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053h-1.113l.053-.053M41.093 0h7.314L46.34 10.123h6.572c3.604.071 6.289.813 8.056 2.226 1.802 1.413 2.332 4.099 1.59 8.056l-3.551 17.649h-7.42L54.979 21.2c.353-1.767.247-3.021-.318-3.763s-1.784-1.113-3.657-1.113l-5.883-.053-4.346 21.783h-7.314L41.093 0M70.412 10.123h14.204c4.169.035 7.19 1.237 9.063 3.604 1.873 2.367 2.491 5.6 1.855 9.699-.247 1.873-.795 3.71-1.643 5.512a16.385 16.385 0 01-3.392 4.876c-1.767 1.837-3.657 3.003-5.671 3.498a26.11 26.11 0 01-6.254.742h-6.36L70.2 48.124h-7.367l7.579-38.001m6.201 6.042l-3.18 15.9c.212.035.424.053.636.053h.742c3.392.035 6.219-.3 8.48-1.007 2.261-.742 3.781-3.321 4.558-7.738.636-3.71 0-5.848-1.908-6.413-1.873-.565-4.222-.83-7.049-.795-.424.035-.83.053-1.219.053H76.56l.053-.053\" />"});

const CsharpIcon = createSvgComponent({"meta":{"src":"/_astro/csharp.BVxpraUy.svg","width":2222,"height":2500,"format":"svg"},"attributes":{"width":"2222","height":"2500","preserveAspectRatio":"xMidYMid","viewBox":"0 -1.43 255.58 290.11"},"children":"<path fill=\"#a179dc\" d=\"M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35\" /><path fill=\"#280068\" d=\"M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z\" /><path fill=\"#390091\" d=\"M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35\" /><g fill=\"#fff\"><path d=\"M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z\" /><path d=\"M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z\" /></g>"});

const MySqlIcon = createSvgComponent({"meta":{"src":"/_astro/mysql.DzZMn0yN.svg","width":256,"height":252,"format":"svg"},"attributes":{"preserveAspectRatio":"xMidYMid","viewBox":"0 0 256 252"},"children":"<path d=\"M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z\" fill=\"#00546B\" /><path d=\"m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z\" fill=\"#00546B\" />"});

const HtmlIcon = createSvgComponent({"meta":{"src":"/_astro/html5.D3ogahhJ.svg","width":452,"height":520,"format":"svg"},"attributes":{"viewBox":"0 0 452 520"},"children":"<path fill=\"#e34f26\" d=\"M41 460L0 0h451l-41 460-185 52\" /><path fill=\"#ef652a\" d=\"M226 472l149-41 35-394H226\" /><path fill=\"#ecedee\" d=\"M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z\" /><path fill=\"#fff\" d=\"M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z\" />"});

const CssIcon = createSvgComponent({"meta":{"src":"/_astro/css_old.CUWlvIl9.svg","width":512,"height":512,"format":"svg"},"attributes":{"width":"512","height":"512","viewBox":"0 0 512 512"},"children":"<path fill=\"#264de4\" d=\"M71.357 460.819 30.272 0h451.456l-41.129 460.746L255.724 512z\" /><path fill=\"#2965f1\" d=\"m405.388 431.408 35.148-393.73H256v435.146z\" /><path fill=\"#ebebeb\" d=\"m124.46 208.59 5.065 56.517H256V208.59zm-5.041-57.875H256V94.197H114.281zM256 355.372l-.248.066-62.944-16.996-4.023-45.076h-56.736l7.919 88.741 115.772 32.14.26-.073z\" /><path fill=\"#fff\" d=\"M255.805 208.59v56.517H325.4l-6.56 73.299-63.035 17.013v58.8l115.864-32.112.85-9.549 13.28-148.792 1.38-15.176 10.203-114.393H255.805v56.518h79.639L330.3 208.59z\" />"});

const JsIcon = createSvgComponent({"meta":{"src":"/_astro/javascript.D_T4bX1p.svg","width":2500,"height":2500,"format":"svg"},"attributes":{"width":"2500","height":"2500","viewBox":"0 0 1052 1052"},"children":"<path fill=\"#f0db4f\" d=\"M0 0h1052v1052H0z\" /><path d=\"M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z\" fill=\"#323330\" />"});

const $$Portafolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="portafolio" class="py-24 min-h-screen max-w-8xl mx-auto"> <div class="container mx-auto px-4"> <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-amarillo text-center mb-6">Portafolio</h2> <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8">Proyectos Destacados</h2> <div class="space-y-16 md:space-y-20 lg:space-y-24 max-w-6xl mx-auto"> <!-- Proyecto 1 --> <div class="flex flex-col md:flex-row items-center gap-8"> <!-- Imagen --> <div class=" md:w-1/2 flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-[50px]
                    bg-white backdrop-blur-xl border border-white/20 
                    shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.4)]"> <div class="relative overflow-hidden rounded-lg shadow-2xl"> <img${addAttribute(mp3.src, "src")} alt="Reproductor MP3" class="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 hover:scale-105 rounded-[40px]"> </div> </div> <!-- Contenido --> <div class="w-full md:w-1/2"> <div class="p-6 rounded-lg h-full"> <h3 class="text-4xl font-extrabold text-amarillo mb-4">Reproductor MP3</h3> <p class="text-gray-300 mb-6 text-2xl font-bold">
Aplicación en <span class="text-yellow-400">C#</span> con
<span class="text-yellow-400"> WinForms</span> que permite reproducir archivos de audio con una <span class="text-amarillo"> interfaz intuitiva</span> y funciones avanzadas de <span class="text-amarillo"> reproducción de música</span> con gestión de <span class="text-amarillo"> usuarios</span> y <span class="text-amarillo"> biblioteca</span>.
</p> <div class="flex flex-wrap gap-2"> <span class="text-xl font-semibold px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(CsharpIcon.src, "src")} alt="Csharp" class="w-5 h-5 inline-block mr-1"> </span>Csharp</span> <span class="text-xl font-semibold px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition">WinForms</span> </div> <div class="mt-6"> <a href="https://github.com/JorgeEscalonas/ReproductorMp3" class="inline-flex items-center text-amarillo hover:scale-105 transition font-medium">
Ver proyecto
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> </div> <!-- Proyecto 2 --> <div class="flex flex-col md:flex-row-reverse items-center gap-8"> <!-- Imagen --> <div class=" md:w-1/2 flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-[50px]
                    bg-white backdrop-blur-xl border border-white/20 
                    shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.4)]"> <div class="relative overflow-hidden rounded-lg shadow-2xl"> <img${addAttribute(conversor.src, "src")} alt="Conversor de Precios" class="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 hover:scale-105 rounded-[40px]"> </div> </div> <!-- Contenido --> <div class="w-full md:w-1/2"> <div class="p-6 rounded-lg h-full"> <h3 class="text-4xl font-extrabold text-amarillo mb-4">Conversor de Precios</h3> <p class="text-gray-300 mb-6 text-2xl font-bold">
Aplicación web para la <span class="text-amarillo">conversión de precios</span> de productos de <span class="text-amarillo">dólares a bolívares.</span>
El sistema utiliza <span class="text-amarillo">PHP</span> para el backend, mientras que el frontend está construido con
<span class="text-amarillo"> HTML, CSS y Javascipt</span>.
</p> <div class="flex flex-wrap gap-2"> <span class="font-semibold text-xl px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(HtmlIcon.src, "src")} alt="PHP" class="w-5 h-5 inline-block mr-1"> </span>Html</span> <span class="font-semibold text-xl px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(CssIcon.src, "src")} alt="Css" class="w-5 h-5 inline-block mr-1"> </span>Css</span> <span class="font-semibold text-xl px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(PhpIcon.src, "src")} alt="PHP" class="w-7 h-7 inline-block mr-1"> </span>Php</span> <span class="font-semibold text-xl px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(JsIcon.src, "src")} alt="]avaScript" class="w-5 h-5 inline-block mr-1"> </span>Javascipt</span> </div> <div class="mt-6"> <a href="https://github.com/JorgeEscalonas/CDG" class="inline-flex items-center text-amarillo hover:scale-105 transition font-medium">
Ver proyecto
<svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path> </svg> </a> </div> </div> </div> </div> <!-- Proyecto 3 --> <div class="flex flex-col md:flex-row items-center gap-8"> <!-- Imagen --> <div class=" md:w-1/2 flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-[50px]
            bg-white backdrop-blur-xl border border-white/20 
            shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.4)]"> <div class="relative overflow-hidden rounded-lg shadow-2xl"> <img${addAttribute(Calculadora.src, "src")} alt="Calculadora de divisas" class="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 hover:scale-105 rounded-[40px]"> </div> </div> <!-- Contenido --> <div class="w-full md:w-1/2"> <div class="p-6 rounded-lg h-full"> <h3 class="text-4xl font-extrabold text-amarillo mb-4">Calculadora de divisas</h3> <p class="text-gray-300 mb-6 text-2xl font-bold">
Aplicación desarrollada con <span class="text-amarillo">Vue</span> que utiliza la <span class="text-amarillo">API oficial de tasas de cambio</span> para convertir Bolívares a <span class="text-amarillo">Dólares</span> o <span class="text-amarillo">Euros</span>. Proporciona datos actualizados y una conversión <span class="text-amarillo">rápida, precisa</span> y <span class="text-amarillo">fácil de usar.</span></p> <div class="flex flex-wrap gap-2"> <span class="font-semibold text-xl px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(VueIcon.src, "src")} alt="Vue" class="w-5 h-5 inline-block mr-1"> </span>Vue</span> </div> </div> </div> </div> <!-- Proyecto 4 --> <div class="flex flex-col md:flex-row-reverse items-center gap-8"> <!-- Imagen --> <div class=" md:w-1/2 flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-[50px]
                    bg-white backdrop-blur-xl border border-white/20 
                    shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.4)]"> <div class="relative overflow-hidden rounded-lg shadow-2xl"> <img${addAttribute(vetClinic.src, "src")} alt="Sistema Veterinario" class="w-full h-64 md:h-80 object-cover transform transition-transform duration-500 hover:scale-105 rounded-[40px]"> </div> </div> <!-- Contenido --> <div class="w-full md:w-1/2"> <div class="p-6 rounded-lg h-full"> <h3 class="text-4xl font-extrabold text-amarillo mb-4">Sistema Veterinario</h3> <p class="text-gray-300 mb-6 text-2xl font-bold">
Sistema de <span class="text-amarillo"> gestión</span> veterinaria desarrollado con <span class="text-amarillo">Vue</span> en el frontend y <span class="text-amarillo">Express</span> en el backend. Permite administrar clientes, mascotas, citas, veterinarios, servicios, facturas e historias clínicas mediante una <span class="text-amarillo"> interfaz intuitiva</span> y un backend <span class="text-amarillo">robusto conectado a MySQL.</span> </p> <div class="flex flex-wrap gap-2"> <span class="font-semibold text-xl px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(VueIcon.src, "src")} alt="Vue.js" class="w-5 h-5 inline-block mr-1">
Vue.js</span> </span> <span class="font-semibold text-xl px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(NodeIcon.src, "src")} alt="Node.js" class="w-5 h-5 inline-block mr-1"> </span>Node.js</span> <span class="font-semibold text-xl px-3 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)] hover:scale-105 transition"> <span> <img${addAttribute(MySqlIcon.src, "src")} alt="MySQL" class="w-5 h-5 inline-block mr-1"> </span>MySQL</span> </div> </div> </div> </div> </div> </div> </section>`;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Portafolio.astro", void 0);

const Eye = createSvgComponent({"meta":{"src":"/_astro/eye.Cy2vBxPw.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"lucide lucide-eye","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\n  <path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\" />\n  <circle cx=\"12\" cy=\"12\" r=\"3\" />\n"});

const Server = createSvgComponent({"meta":{"src":"/_astro/server.DEz37w1a.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"lucide lucide-server","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\n  <rect width=\"20\" height=\"8\" x=\"2\" y=\"2\" rx=\"2\" ry=\"2\" />\n  <rect width=\"20\" height=\"8\" x=\"2\" y=\"14\" rx=\"2\" ry=\"2\" />\n  <line x1=\"6\" x2=\"6.01\" y1=\"6\" y2=\"6\" />\n  <line x1=\"6\" x2=\"6.01\" y1=\"18\" y2=\"18\" />\n"});

const Wrench = createSvgComponent({"meta":{"src":"/_astro/wrench.Ch-fZyOz.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"lucide lucide-wrench","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\n  <path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\" />\n"});

const AngularIcon = createSvgComponent({"meta":{"src":"/_astro/angular.BEi8CNtM.svg","width":242,"height":256,"format":"svg"},"attributes":{"fill":"none","viewBox":"0 0 242 256"},"children":"<g clip-path=\"url(#angular__a)\"><mask id=\"angular__b\" width=\"242\" height=\"256\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:luminance\"><path fill=\"#fff\" d=\"M0 0h242v256H0V0Z\" /></mask><g mask=\"url(#angular__b)\"><path fill=\"url(#angular__c)\" d=\"m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z\" /><path fill=\"url(#angular__d)\" d=\"m241 43-9 136L149 0l92 43Zm-58 176-62 36-63-36 12-31h101l12 31ZM121 68l32 80H88l33-80ZM9 179 0 43 92 0 9 179Z\" /></g></g><defs><linearGradient id=\"angular__c\" x1=\"53.2\" x2=\"245\" y1=\"231.9\" y2=\"140.7\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#E40035\" /><stop offset=\".2\" stop-color=\"#F60A48\" /><stop offset=\".4\" stop-color=\"#F20755\" /><stop offset=\".5\" stop-color=\"#DC087D\" /><stop offset=\".7\" stop-color=\"#9717E7\" /><stop offset=\"1\" stop-color=\"#6C00F5\" /></linearGradient><linearGradient id=\"angular__d\" x1=\"44.5\" x2=\"170\" y1=\"30.7\" y2=\"174\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FF31D9\" /><stop offset=\"1\" stop-color=\"#FF5BE1\" stop-opacity=\"0\" /></linearGradient><clipPath id=\"angular__a\"><path fill=\"#fff\" d=\"M0 0h242v256H0z\" /></clipPath></defs>"});

const AstroIcon = createSvgComponent({"meta":{"src":"/_astro/astrodark.BkH7Jeoz.svg","width":256,"height":366,"format":"svg"},"attributes":{"viewBox":"0 0 256 366","width":"256","height":"366","preserveAspectRatio":"xMidYMid"},"children":"<path fill=\"#fff\" d=\"M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z\" /><path fill=\"#FF5D01\" d=\"M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z\" />"});

const TailwindIcon = createSvgComponent({"meta":{"src":"/_astro/tailwindcss.CSt91nGH.svg","width":54,"height":33,"format":"svg"},"attributes":{"fill":"none","viewBox":"0 0 54 33"},"children":"<g clip-path=\"url(#tailwindcss__a)\"><path fill=\"#38bdf8\" fill-rule=\"evenodd\" d=\"M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z\" clip-rule=\"evenodd\" /></g><defs><clipPath id=\"tailwindcss__a\"><path fill=\"#fff\" d=\"M0 0h54v32.4H0z\" /></clipPath></defs>"});

const FlutterIcon = createSvgComponent({"meta":{"src":"/_astro/flutter.Dmn8HAJv.svg","width":256,"height":317,"format":"svg"},"attributes":{"preserveAspectRatio":"xMidYMid","viewBox":"0 0 256 317"},"children":"<defs><linearGradient x1=\"4%\" y1=\"27%\" x2=\"75.9%\" y2=\"52.9%\" id=\"flutter__a\"><stop offset=\"0%\" /><stop stop-opacity=\"0\" offset=\"100%\" /></linearGradient></defs><path fill=\"#47C5FB\" d=\"M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z\" /><path fill=\"#00569E\" d=\"m121 280 37 37h97l-85-86z\" /><path fill=\"#00B5F8\" d=\"m72 230 48-48 50 49-49 49z\" /><path fill-opacity=\".8\" fill=\"url(#flutter__a)\" d=\"m121 280 41-14 4-31z\" />"});

const PythonIcon = createSvgComponent({"meta":{"src":"/_astro/python.9lpvukZ6.svg","width":32,"height":32,"format":"svg"},"attributes":{"fill":"none","viewBox":"16 16 32 32"},"children":"<path fill=\"url(#python__a)\" d=\"M31.885 16c-8.124 0-7.617 3.523-7.617 3.523l.01 3.65h7.752v1.095H21.197S16 23.678 16 31.876c0 8.196 4.537 7.906 4.537 7.906h2.708v-3.804s-.146-4.537 4.465-4.537h7.688s4.32.07 4.32-4.175v-7.019S40.374 16 31.885 16zm-4.275 2.454a1.394 1.394 0 1 1 0 2.79 1.393 1.393 0 0 1-1.395-1.395c0-.771.624-1.395 1.395-1.395z\" /><path fill=\"url(#python__b)\" d=\"M32.115 47.833c8.124 0 7.617-3.523 7.617-3.523l-.01-3.65H31.97v-1.095h10.832S48 40.155 48 31.958c0-8.197-4.537-7.906-4.537-7.906h-2.708v3.803s.146 4.537-4.465 4.537h-7.688s-4.32-.07-4.32 4.175v7.019s-.656 4.247 7.833 4.247zm4.275-2.454a1.393 1.393 0 0 1-1.395-1.395 1.394 1.394 0 1 1 1.395 1.395z\" /><defs><linearGradient id=\"python__a\" x1=\"19.075\" x2=\"34.898\" y1=\"18.782\" y2=\"34.658\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#387EB8\" /><stop offset=\"1\" stop-color=\"#366994\" /></linearGradient><linearGradient id=\"python__b\" x1=\"28.809\" x2=\"45.803\" y1=\"28.882\" y2=\"45.163\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FFE052\" /><stop offset=\"1\" stop-color=\"#FFC331\" /></linearGradient></defs>"});

const LaravelIcon = createSvgComponent({"meta":{"src":"/_astro/laravel.D9Nso2iE.svg","width":256,"height":264,"format":"svg"},"attributes":{"preserveAspectRatio":"xMidYMid","viewBox":"0 0 256 264"},"children":"<path d=\"m255.9 59.6.1 1.1v56.6c0 1.4-.8 2.8-2 3.5l-47.6 27.4v54.2c0 1.4-.7 2.8-2 3.5l-99.1 57-.7.4-.3.1c-.7.2-1.4.2-2.1 0l-.4-.1-.6-.3L2 206c-1.3-.8-2.1-2.2-2.1-3.6V32.7l.1-1.1.2-.4.3-.6.2-.4.4-.5.4-.3c.2 0 .3-.2.5-.3L51.6.6c1.3-.8 2.9-.8 4.1 0L105.3 29c.2 0 .3.2.4.3l.5.3c0 .2.2.4.3.5l.3.4.3.6.1.4.2 1v106l41.2-23.7V60.7c0-.4 0-.7.2-1l.1-.4.3-.7.3-.3.3-.5.5-.3.4-.4 49.6-28.5c1.2-.7 2.8-.7 4 0L254 57l.5.4.4.3.4.5.2.3c.2.2.2.5.3.7l.2.3Zm-8.2 55.3v-47l-17.3 10-24 13.7v47l41.3-23.7Zm-49.5 85v-47l-23.6 13.5-67.2 38.4v47.5l90.8-52.3ZM8.2 39.9V200l90.9 52.3v-47.5l-47.5-26.9-.4-.4c-.2 0-.3-.1-.4-.3l-.4-.4-.3-.4-.2-.5-.2-.5v-.6l-.2-.5V63.6L25.6 49.8l-17.3-10Zm45.5-31L12.4 32.8l41.3 23.7 41.2-23.7L53.7 8.9ZM75 157.3l24-13.8V39.8l-17.3 10-24 13.8v103.6l17.3-10ZM202.3 36.9 161 60.7l41.3 23.8 41.3-23.8-41.3-23.8Zm-4.1 54.7-24-13.8-17.3-10v47l24 13.9 17.3 10v-47Zm-95 106 60.6-34.5 30.2-17.3-41.2-23.8-47.5 27.4L62 174.3l41.2 23.3Z\" fill=\"#FF2D20\" />"});

const DartIcon = createSvgComponent({"meta":{"src":"/_astro/dart.BgMmpBlb.svg","width":256,"height":256,"format":"svg"},"attributes":{"viewBox":"0 0 256 256","width":"256","height":"256","preserveAspectRatio":"xMidYMid"},"children":"<defs><radialGradient id=\"dart__a\" cx=\"50%\" cy=\"50.002%\" r=\"50.004%\" fx=\"50%\" fy=\"50.002%\" gradientTransform=\"matrix(1 0 0 .99985 0 0)\"><stop offset=\"0%\" stop-color=\"#FFF\" stop-opacity=\".1\" /><stop offset=\"100%\" stop-color=\"#FFF\" stop-opacity=\"0\" /></radialGradient></defs><path fill=\"#01579B\" d=\"M52.209 203.791 8.413 159.995C3.218 154.67 0 147.141 0 139.782c0-3.407 1.92-8.733 3.369-11.782l40.427-84.204 8.413 159.995Z\" /><path fill=\"#40C4FF\" d=\"M202.116 52.209 158.32 8.413C154.5 4.573 146.538 0 139.8 0c-5.796 0-11.48 1.167-15.15 3.369L43.815 43.796l158.301 8.413ZM104.418 256h106.111v-45.471l-79.16-25.276-72.422 25.276z\" /><path fill=\"#29B6F6\" d=\"M43.796 180.209c0 13.513 1.694 16.826 8.413 23.582l6.738 6.738h151.582l-74.097-84.204-92.636-82.53V180.21Z\" /><path fill=\"#01579B\" d=\"M178.534 43.777H43.796L210.529 210.51H256V106.093L202.097 52.19c-7.566-7.585-14.285-8.413-23.563-8.413Z\" /><path fill=\"#FFF\" d=\"M53.903 205.466c-6.738-6.756-8.413-13.419-8.413-25.257V45.47l-1.675-1.675v136.413c-.02 11.838-.02 15.113 10.088 25.257l5.044 5.044-5.044-5.044Z\" opacity=\".2\" /><path fill=\"#263238\" d=\"M254.325 104.418v104.417h-45.471l1.675 1.694H256V106.093z\" opacity=\".2\" /><path fill=\"#FFF\" d=\"M202.116 52.209c-8.356-8.357-15.188-8.413-25.257-8.413H43.815l1.675 1.675h131.369c5.025 0 17.71-.847 25.257 6.738Z\" opacity=\".2\" /><path fill=\"url(#dart__a)\" d=\"m254.325 104.418-52.209-52.21L158.32 8.414C154.5 4.573 146.538 0 139.8 0c-5.796 0-11.48 1.167-15.15 3.369L43.815 43.796 3.388 128c-1.45 3.068-3.37 8.394-3.37 11.782 0 7.359 3.238 14.868 8.414 20.213l40.351 40.07c.96 1.185 2.09 2.39 3.426 3.726l1.675 1.675 5.044 5.044 43.796 43.796 1.675 1.675H210.49v-45.47h45.471V106.092l-1.637-1.675Z\" opacity=\".2\" />"});

const GitIcon = createSvgComponent({"meta":{"src":"/_astro/git.DebKwC-L.svg","width":256,"height":256,"format":"svg"},"attributes":{"preserveAspectRatio":"xMidYMid","viewBox":"0 0 256 256"},"children":"<path d=\"M251.17 116.6 139.4 4.82a16.49 16.49 0 0 0-23.31 0l-23.21 23.2 29.44 29.45a19.57 19.57 0 0 1 24.8 24.96l28.37 28.38a19.61 19.61 0 1 1-11.75 11.06L137.28 95.4v69.64a19.62 19.62 0 1 1-16.13-.57V94.2a19.61 19.61 0 0 1-10.65-25.73L81.46 39.44 4.83 116.08a16.49 16.49 0 0 0 0 23.32L116.6 251.17a16.49 16.49 0 0 0 23.32 0l111.25-111.25a16.5 16.5 0 0 0 0-23.33\" fill=\"#DE4C36\" />"});

const FigmaIcon = createSvgComponent({"meta":{"src":"/_astro/figma.CY-2FYIc.svg","width":54,"height":80,"format":"svg"},"attributes":{"width":"54","height":"80","viewBox":"0 0 54 80","fill":"none"},"children":"<g clip-path=\"url(#figma__clip0_912_3)\"><path d=\"M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z\" fill=\"#0ACF83\" /><path d=\"M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z\" fill=\"#A259FF\" /><path d=\"M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z\" fill=\"#F24E1E\" /><path d=\"M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z\" fill=\"#FF7262\" /><path d=\"M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z\" fill=\"#1ABCFE\" /></g><defs><clipPath id=\"figma__clip0_912_3\"><rect width=\"53.3333\" height=\"80\" fill=\"white\" /></clipPath></defs>"});

const UbuntuIcon = createSvgComponent({"meta":{"src":"/_astro/ubuntu.B0NDg-Ed.svg","width":100,"height":100,"format":"svg"},"attributes":{"viewBox":"0 0 100 100"},"children":"<circle cx=\"50\" cy=\"50\" r=\"45\" fill=\"#f47421\" /><circle cx=\"50\" cy=\"50\" r=\"21.8\" fill=\"none\" stroke=\"#fff\" stroke-width=\"8.6\" /><g id=\"ubuntu__a\"><circle cx=\"19.4\" cy=\"50\" r=\"8.4\" fill=\"#f47421\" /><path stroke=\"#f47421\" stroke-width=\"3.2\" d=\"M67 50h10\" /><circle cx=\"19.4\" cy=\"50\" r=\"6\" fill=\"#fff\" /></g><use xlink:href=\"#ubuntu__a\" transform=\"rotate(120 50 50)\" /><use xlink:href=\"#ubuntu__a\" transform=\"rotate(240 50 50)\" />"});

const $$Astro = createAstro("https://jorgeescalona.vercel.app/");
const $$Habilidades = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Habilidades;
  const techIcons = {
    "Angular": AngularIcon,
    "Astro": AstroIcon,
    "Vue": VueIcon,
    "Tailwind": TailwindIcon,
    "Flutter": FlutterIcon,
    "Node.js": NodeIcon,
    "Python": PythonIcon,
    "C#": CsharpIcon,
    "Laravel": LaravelIcon,
    "Dart": DartIcon,
    "MySql": MySqlIcon,
    "Git": GitIcon,
    "Figma": FigmaIcon,
    "Ubuntu": UbuntuIcon
  };
  const skills = [
    {
      icon: Eye,
      titulo: "Frontend",
      descripcion: "Desarrollo de interfaces de usuario interactivas y responsivas.",
      tecnologias: ["Angular", "Astro", "Vue", "Tailwind", "Flutter"]
    },
    {
      icon: Server,
      titulo: "Backend",
      descripcion: "Implementaci\xF3n de APIs, servicios y bases de datos.",
      tecnologias: ["Node.js", "Python", "C#", "Laravel", "Dart", "MySql"]
    },
    {
      icon: Wrench,
      titulo: "Herramientas",
      descripcion: "Software y plataformas para desarrollo y colaboraci\xF3n.",
      tecnologias: ["Git", "Figma", "Ubuntu"]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="habilidades" class="py-8 md:py-12 lg:py-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"> <div class="w-full max-w-7xl mx-auto"> <div class="text-center mb-8 md:mb-12 lg:mb-16"> <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-amarillo mb-1 sm:mb-2">Habilidades</h2> <h3 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Tecnologías que manejo</h3> </div> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-16"> ${skills.map((s, index) => renderTemplate`<div class="text-center p-4 sm:p-6">  <div class="w-20 h-20 sm:w-22 sm:h-22 md:w-26 md:h-26 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full bg-white shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)]"> ${renderComponent($$result, "s.icon", s.icon, { "class": "w-10 h-10 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 text-azul" })} </div>  <h3 class="text-2xl sm:text-3xl md:text-5xl font-bold text-amarillo mb-2 sm:mb-3">${s.titulo}</h3>  <p class="text-white text-lg sm:text-lg md:text-2xl font-semibold mb-4 sm:mb-6">${s.descripcion}</p>  <div class="flex flex-wrap justify-center gap-2 sm:gap-3"> ${s.tecnologias.map((tech) => {
    const TechIcon = techIcons[tech];
    return renderTemplate`<span class="font-medium text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1.5 sm:py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 
                          shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)]
                          hover:scale-105 transition whitespace-nowrap flex items-center gap-1.5"> ${TechIcon && renderTemplate`<img${addAttribute(TechIcon.src, "src")}${addAttribute(tech, "alt")} class="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5">`} <span class="text-xs sm:text-sm md:text-base">${tech}</span> </span>`;
  })} </div> </div>`)} </div> </div> </section> `;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Habilidades.astro", void 0);

const Mail = createSvgComponent({"meta":{"src":"/_astro/mail.CWK1cmm0.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"lucide lucide-mail","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\n  <path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\" />\n  <rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\" />\n"});

const Phone = createSvgComponent({"meta":{"src":"/_astro/phone.BIswx--7.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"lucide lucide-phone","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\n  <path d=\"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384\" />\n"});

const Clock = createSvgComponent({"meta":{"src":"/_astro/clock.w5i0vTQm.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"lucide lucide-clock","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\n  <path d=\"M12 6v6l4 2\" />\n  <circle cx=\"12\" cy=\"12\" r=\"10\" />\n"});

const Send = createSvgComponent({"meta":{"src":"/_astro/send.D_RYGZDc.svg","width":24,"height":24,"format":"svg"},"attributes":{"class":"lucide lucide-send","width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},"children":"\n  <path d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z\" />\n  <path d=\"m21.854 2.147-10.94 10.939\" />\n"});

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto"> <div class="min-h-screen pt-[60px] bg-white max-w-full mx-auto rounded-[40px] 
           shadow-[inset_-2px_-2px_8px_rgba(0,0,0,0.6),0_10px_30px_rgba(0,0,0,0.2)]
           px-6 sm:px-10 md:px-20 lg:px-32">  <h2 class="text-4xl sm:text-5xl md:text-6xl font-black text-azul mb-2 text-center">
Contacto
</h2> <p class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-bold text-black mb-10 text-center">
¿Deseas contactarme?
</p>  <div class="grid grid-cols-1 md:grid-cols-2 gap-12 py-10 ">  <div class="space-y-18 sm:space-y-18 w-full flex flex-col items-center"> <div class="space-y-14 sm:space-y-14">  <div class="flex items-center gap-4 sm:gap-6"> ${renderComponent($$result, "Mail", Mail, { "class": "w-10 h-10 sm:w-14 sm:h-14 text-azul" })} <div> <p class="font-black text-xl sm:text-2xl md:text-3xl text-black">Email</p> <a href="mailto:escalonajorge73@gmail.com" class="font-bold text-lg sm:text-xl md:text-2xl text-azul hover:underline break-all">
escalonajorge73@gmail.com
</a> </div> </div>  <div class="flex items-center gap-4 sm:gap-6"> ${renderComponent($$result, "Phone", Phone, { "class": "w-10 h-10 sm:w-14 sm:h-14 text-azul" })} <div> <p class="font-black text-xl sm:text-2xl md:text-3xl text-black">Teléfono</p> <p class="text-azul font-bold text-lg sm:text-xl md:text-2xl break-words">
+58 0412 029 6711
</p> </div> </div>  <div class="flex items-center gap-4 sm:gap-6"> ${renderComponent($$result, "Clock", Clock, { "class": "w-10 h-10 sm:w-14 sm:h-14 text-azul" })} <div> <p class="font-black text-xl sm:text-2xl md:text-3xl text-black">Disponibilidad</p> <p class="text-azul font-bold text-lg sm:text-xl md:text-2xl">
Disponible para trabajar
</p> </div> </div> </div>  <div class="mt-16 text-center md:text-left"> <div class="flex justify-center md:justify-start gap-x-8 sm:gap-x-12 md:gap-x-16">  <a href="https://www.instagram.com/jorge_escalonaa?igsh=MTM2bzczeWZ0Z3d6ZQ==" class="hover:opacity-75 hover:scale-125 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path fill="#0000ff" d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408
                     5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717
                     1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723
                     0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768
                     -2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574
                     -4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746
                     -34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408
                     -5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718
                     -1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723
                     0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769
                     2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575
                     4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"></path> </svg> </a>  <a href="https://www.linkedin.com/in/jorge-escalona-909057300" class="hover:opacity-75 hover:scale-125 transition"> <svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"> <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0000ff"></path> </svg> </a>  <a href="https://github.com/JorgeEscalonas" class="hover:opacity-75 hover:scale-125 transition"> <svg class="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 " viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="#0000ff"></path> </svg> </a> </div> </div> </div>  <form id="contact-form" class="w-full flex flex-col gap-4 max-w-lg mx-auto"> <h3 class="font-bold text-black text-2xl sm:text-3xl mb-4">
Envíame un mensaje
</h3> <input type="text" name="name" placeholder="Tu nombre" class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-azul outline-none focus:ring-2 focus:ring-azul shadow-md text-base sm:text-lg text-black" required> <input type="email" name="email" placeholder="Tu email" class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-azul outline-none focus:ring-2 focus:ring-azul shadow-md text-base sm:text-lg text-black" required> <input type="tel" name="phone" placeholder="Tu teléfono" class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-azul outline-none focus:ring-2 focus:ring-azul shadow-md text-base sm:text-lg text-black"> <textarea name="message" placeholder="¡Hola!" rows="6" class="px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border-2 border-azul outline-none focus:ring-2 focus:ring-azul shadow-md text-base sm:text-lg text-black" required></textarea> <button id="submit-button" type="submit" class="w-32 sm:w-40 bg-azul text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full 
                 shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)]
                 hover:scale-105 transition flex items-center justify-center gap-2 sm:gap-3"> ${renderComponent($$result, "Send", Send, { "class": "w-5 h-5 sm:w-6 sm:h-6" })}
Enviar
</button> <div id="form-status" class="p-4 rounded-lg transition-all duration-300  bg-white/10 backdrop-blur-xl border border-white/20 
                   shadow-[inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-2px_8px_rgba(0,0,0,0.5),0_10px_25px_rgba(0,0,0,0.3)]" style="display: none; margin-top: 1rem;"></div> </form> </div> </div> </section> ${renderScript($$result, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Contacto.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Contacto.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="text-white py-6 sm:py-8 md:py-10 mt-16 text-base sm:text-lg md:text-xl text-center"> <p>
Creado por
<span class="font-bold text-amarillo">©Jorge Escalona</span> | 
    Todos los derechos reservados  |
</p> </footer>`;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jorge Escalona - Desarrollador Full Stack", "description": "Portafolio de Jorge Escalona, Desarrollador de Software Full-Stack. Explora mis proyectos, habilidades y experiencia en desarrollo web." }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([` <script>
    // Funci\xF3n para actualizar el favicon seg\xFAn el tema
    function updateFavicon() {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const favicon = document.querySelector('link[rel="icon"]');
      if (!favicon) return;

      // Actualizar el favicon basado en el tema
      // Usamos logoazul.ico (min\xFAsculas) para asegurar compatibilidad
      favicon.href = isDark ? "/my-logo.ico" : "/logoazul.ico";
    }

    // Configurar el favicon inicial
    document.addEventListener("DOMContentLoaded", updateFavicon);

    // Escuchar cambios en el tema del sistema
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", updateFavicon);
  <\/script> `, " ", " ", " ", " ", " ", " ", " "])), renderComponent($$result2, "Header", $$Header, {}), renderComponent($$result2, "Hero", $$Hero, {}), renderComponent($$result2, "SobreMi", $$SobreMi, {}), renderComponent($$result2, "Portafolio", $$Portafolio, {}), renderComponent($$result2, "Habilidades", $$Habilidades, {}), renderComponent($$result2, "Contacto", $$Contacto, {}), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/pages/index.astro", void 0);

const $$file = "E:/Jorge/Documentos jorge/programas/Astro/JorgeEscalona/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
