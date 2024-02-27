/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_DONIHg8r.mjs';
import 'kleur/colors';
import { t as turso, $ as $$Layout } from './_recipe__CJmFFfZt.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$TypeIndex = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TypeIndex;
  const { rows } = await turso.execute("SELECT * FROM TYPE");
  return renderTemplate`${maybeRenderHead()}<h1 class="text-center m-10 font-serif text-4xl text-lime-600">Seleccione el tipo de recetas</h1> <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> ${rows.map((post) => renderTemplate`<div class="card p-4 bg-white rounded-lg cursor-pointer hover:shadow-lg transition duration-300 text-center"> <a${addAttribute(`/type/${post.name}`, "href")} class="font-serif flex flex-col h-full"> <div class="flex-grow"> <img${addAttribute(`${post.repImage}`, "src")}${addAttribute(`${post.name}`, "alt")} class="w-full h-70percent object-cover"> </div> <div class="h-30percent"> ${post.name} </div> </a> </div>`)} </div>`;
}, "/home/in4p/git/recipeBookAstro/src/components/TypeIndex.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro.", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Type", $$TypeIndex, { "data-astro-cid-j7pv25f6": true })} </main> ` })} `;
}, "/home/in4p/git/recipeBookAstro/src/pages/index.astro", void 0);

const $$file = "/home/in4p/git/recipeBookAstro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
