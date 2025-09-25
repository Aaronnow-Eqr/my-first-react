/** 
 * Button component
 * @param {string} texto - the text to display on the button (default: "Presioname")
 * @param {string} estilos - additional CSS classes for styling (default: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600")
 * @returns {JSX.Element} A styled button element
 */
function Button({ texto = "Presioname", estilos = "bg-blue-600 px-4 py-2 font-bold text-2xl" }) {
  return (
    <button className={"cursor-pointer " + estilos}>{texto}</button>
  )
}

export { Button }