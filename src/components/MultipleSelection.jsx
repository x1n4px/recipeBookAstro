import { useState } from "react";

function MiComponenteReact({ tipos, onSelect }) {
  const [seleccionados, setSeleccionados] = useState([]);

  function handleSelect(tipo) {
    if (!seleccionados.includes(tipo)) {
      setSeleccionados([...seleccionados, tipo]); // Agrega el tipo seleccionado al array
      onSelect(seleccionados); // Llama a la función `onSelect` del componente Astro con el array actualizado
    }
  }

  return (
    <div>
      <h2>Opciones disponibles</h2>
      <ul>
        {tipos.map((tipo) => (
          <li key={tipo}>
            <button
              class="bg-gray-200 hover:bg-gray-300 rounded-md py-2 px-4"
              onClick={() => handleSelect(tipo)}
            >
              {tipo}
            </button>
          </li>
        ))}
      </ul>
      <h2>Opciones seleccionadas</h2>
      <ul>
        {seleccionados.map((tipo) => (
          <li key={tipo}>{tipo}</li>
        ))}
      </ul>
    </div>
  );
}

export default MiComponenteReact;
