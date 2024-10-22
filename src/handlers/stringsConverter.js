export const decodeHtmlEntities = (str) => {
  const textArea = document.createElement('textarea') // Crea un elemento textarea
  textArea.innerHTML = str // Asigna el string con entidades HTML
  return textArea.value // Devuelve el valor decodificado
}
