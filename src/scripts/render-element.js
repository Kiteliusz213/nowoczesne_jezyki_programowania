// render-element.js
function renderElement({ placeholderId, elementId, elementClassName, content, tagName = "div" }) {
    const elementToReplace = document.getElementById(placeholderId);
    const newElement = document.createElement(tagName);
    if (elementId) newElement.id = elementId;
    if (elementClassName) newElement.className = elementClassName;
    newElement.innerHTML = content;
    elementToReplace.parentNode.replaceChild(newElement, elementToReplace);
}
