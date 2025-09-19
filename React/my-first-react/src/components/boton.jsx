function Boton({ texto = "Presioname", estilos = "bg-blue-600 px-4 py-2 font-bold text-2xl" }) {
  return (
    <button className = {"cursor-pointer " + estilos}>{texto}</button>
  )
}

export { Boton }

58.55