/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DONIHg8r.mjs';
import 'kleur/colors';
import { t as turso, $ as $$Layout } from './_recipe__CJmFFfZt.mjs';

const $$Astro = createAstro();
const $$AllTypes = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AllTypes;
  async function getRecipes() {
    try {
      const { rows: recipeRows } = await turso.execute(`SELECT * FROM recipe `);
      return recipeRows;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  }
  const recipes = await getRecipes();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Todos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-gray-600 body-font"> <div class="container px-5 py-24 mx-auto"> ${recipes.map((recipe) => renderTemplate`<div class="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"> <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0"> <h2 class="text-gray-900 text-lg title-font font-medium mb-2">${recipe.name}</h2> <a${addAttribute(`/recipe/${recipe.id}`, "href")} class="mt-3 text-lime-700 inline-flex items-center"> <span>Ver receta completa</span> <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg> </a> </div> </div>`)} </div> </section> ` })}`;
}, "/home/in4p/git/recipeBookAstro/src/pages/all-types.astro", void 0);

const $$file = "/home/in4p/git/recipeBookAstro/src/pages/all-types.astro";
const $$url = "/all-types";

export { $$AllTypes as default, $$file as file, $$url as url };
