/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead, e as addAttribute } from '../astro_DONIHg8r.mjs';
import 'kleur/colors';
import { t as turso, $ as $$Layout } from './_recipe__CJmFFfZt.mjs';

const $$Astro = createAstro();
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
  const { rows: types } = await turso.execute(`Select * from type`);
  console.log(types);
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("name");
      const repImage = data.get("repImage");
      const step = data.get("step");
      const originalHref = data.get("originalHref");
      const originalTitle = data.get("originalTitle");
      console.log(name);
      await turso.execute(
        `insert into recipe(name, repImage, step, originalHref, originalTitle) values('${name}', '${repImage}', '${step}', '${originalHref}', '${originalTitle}')`
      );
      const { rows } = await turso.execute(
        `SELECT id FROM recipe ORDER BY id DESC LIMIT 1`
      );
      console.log(rows[0].id);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "create" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-center">Register</h1> <div class="w-70 flex justify-center align-middle"> <form class="flex flex-col gap-4" method="POST"> <label class="flex items-center gap-2"> <span class="text-sm font-medium">Nombre:</span> <input type="text" name="name" class="rounded-md border border-gray-300 p-2 focus:outline-none focus:border-sky-500"> </label> <label class="flex items-center gap-2"> <span class="text-sm font-medium">Imagen:</span> <input type="text" name="repImage" class="rounded-md border border-gray-300 p-2 focus:outline-none focus:border-sky-500"> </label> <label class="flex items-center gap-2"> <span class="text-sm font-medium">Pasos:</span> <textarea name="step" class="rounded-md border border-gray-300 p-2 focus:outline-none focus:border-sky-500 h-24 resize-none"></textarea> </label> <label class="flex items-center gap-2"> <span class="text-sm font-medium">Enlace original:</span> <input type="text" name="originalHref" class="rounded-md border border-gray-300 p-2 focus:outline-none focus:border-sky-500"> </label> <label class="flex items-center gap-2"> <span class="text-sm font-medium">Nombre de la fuente original:</span> <input type="text" name="originalTitle" class="rounded-md border border-gray-300 p-2 focus:outline-none focus:border-sky-500"> </label> <!-- Multiple selection --> <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> ${types.map((post) => renderTemplate`<div class="card p-4 bg-white rounded-lg cursor-pointer hover:shadow-lg transition duration-300 text-center"> <a${addAttribute(`/type/${post.name}`, "href")} class="font-serif flex flex-col h-full"> ${post.name} </a> </div>`)} </div> <button type="submit" class="bg-lime-300 hover:bg-lime-400 rounded-md py-2 px-4">Submit</button> </form> </div> ` })}`;
}, "/home/in4p/git/recipeBookAstro/src/pages/create.astro", void 0);

const $$file = "/home/in4p/git/recipeBookAstro/src/pages/create.astro";
const $$url = "/create";

export { $$Create as default, $$file as file, $$url as url };
