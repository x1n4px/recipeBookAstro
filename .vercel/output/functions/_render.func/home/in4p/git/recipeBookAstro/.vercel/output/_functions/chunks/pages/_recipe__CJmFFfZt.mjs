/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot, u as unescapeHTML } from '../astro_DONIHg8r.mjs';
import 'kleur/colors';
import 'clsx';
import { createClient } from '@libsql/client/web';

const $$Astro$2 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navbar;
  return renderTemplate`${maybeRenderHead()}<header class="text-gray-600 body-font bg-lime-200 shadow-md"> <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"> <a href="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" style="max-width: 100px"> <img src="/logo.png"> </a> <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"> <!-- <a class="mr-5 hover:text-gray-900">First Link</a>
        <a class="mr-5 hover:text-gray-900">Second Link</a>
       <a class="mr-5 hover:text-gray-900">Third Link</a>
        <a class="mr-5 hover:text-gray-900">Fourth Link</a> --> </nav> <a href="/all-types" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Ver todas las recetas
<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg> </a> </div> </header>`;
}, "/home/in4p/git/recipeBookAstro/src/components/navbar.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/in4p/git/recipeBookAstro/src/layouts/Layout.astro", void 0);

const turso = createClient({
  url: "libsql://cooking-book-x1n4px.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MDg4NzQwNjMsImlkIjoiMjM1MmI0N2EtYzJlMy0xMWVlLWIwNzEtNTIwNTNjNGIyM2E2In0.tPobv2a3ruYfiJ7IKTQmRqsdbpdpwiWWF974pK7TqiMpT5Pgkxu_YpTJGwGv1IV9m7bNKlAyQtbBT-t4ZnwcAQ"
});

const $$Astro = createAstro();
function getStaticPaths() {
  const pathx = [];
  for (let i = 1; i <= 3; i++) {
    pathx.push({ params: { recipe: i } });
  }
  if (pathx.length > 0) {
    return pathx;
  } else {
    return [
      { params: { recipe: 1 } }
    ];
  }
}
const $$recipe = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$recipe;
  const { recipe } = Astro2.params;
  console.log(recipe);
  async function getRecipes() {
    try {
      const { rows: typeRows } = await turso.execute(`SELECT * FROM recipe WHERE id = '${recipe}'`);
      if (typeRows.length === 0) {
        throw new Error("Type not found");
      }
      const typeId = typeRows[0].id;
      const { rows: recipeRows } = await turso.execute(`SELECT distinct r.* FROM recipe r INNER JOIN recipe_type tr ON tr.recipe_id = r.id WHERE tr.recipe_id = ${typeId}`);
      return recipeRows;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  }
  async function getIngredients() {
    try {
      const { rows: recipeRows } = await turso.execute(`SELECT i.*, d.quantity FROM recipe_ingredient d INNER JOIN ingredient i ON d.id_ingredient = i.id WHERE d.id_recipe =  ${recipe}`);
      return recipeRows;
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  }
  const recipes = await getRecipes();
  const ingredient = await getIngredients();
  console.log(ingredient);
  console.log(recipes);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="text-gray-600 body-font bg-lime-200 rounded-b-3xl relative"> <!-- Botón en la esquina superior derecha --> <div class="flex justify-center"> <a${addAttribute(`${recipes[0].originalHref}`, "href")} target="_blank" class="border-2 border-gray-900 rounded-lg flex items-center px-6 py-2"> <span class="mr-2">${recipes[0].originalTitle}</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"> <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path> <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path> </svg> </a> </div> <div class="container px-5 py-12 mx-auto flex flex-wrap flex-col items-center"> <img class="xl:w-2/3 lg:w-3/4 md:w-full w-full mb-10 object-cover object-center rounded-3xl" alt="hero"${addAttribute(`${recipes[0].repImage}`, "src")}> <div class="text-center w-full"> <h1 class="text-4xl font-medium title-font mb-4 text-gray-900">${recipes[0].name}</h1> <hr class="mt-6 mb-4 mx-auto border-t-2 w-16 border-gray-900"> </div> </div> </section> <section class="text-gray-600 body-font mb-4"> <div class="container px-5 py-12 mx-auto flex flex-wrap flex-col items-center"> <h2 class="text-3xl font-medium title-font mb-4 text-gray-900">Ingredientes</h2> <ul class="grid grid-cols-2 gap-4 list-none text-lg text-gray-700 mb-6"> ${ingredient.map((post) => renderTemplate`<li class="flex items-center p-4"> <img class="w-14 h-14 mr-2"${addAttribute(`${post.repImage}`, "src")} alt=""> <!-- Ajusta el tamaño a 50x50px --> <span>${post.quantity} ${post.name}</span> </li>`)} </ul> <h2 class="text-3xl font-medium title-font mb-4 text-gray-900">Instrucciones</h2> <div class="m-10">${unescapeHTML(recipes[0].step)}</div> <div class="text-center w-full mt-4"> <p class="lg:w-2/3 mx-auto leading-relaxed text-base">&#161;Disfruta de tu deliciosa receta&#33;</p> </div> </div> </section> ` })}`;
}, "/home/in4p/git/recipeBookAstro/src/pages/recipe/[recipe].astro", void 0);

const $$file = "/home/in4p/git/recipeBookAstro/src/pages/recipe/[recipe].astro";
const $$url = "/recipe/[recipe]";

const _recipe_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$recipe,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, _recipe_ as _, turso as t };
