export const modifyTextContent = (parentElement, query, textContent) => {
    const element = parentElement.querySelector(query)
    element.textContent = textContent
}