
export function renderElement(
  customElement,
  rootElement = document.getElementById("root")
) {
  const domElement = document.createElement(customElement.type);
  domElement.innerHTML = customElement.children;

  for (const prop in customElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, customElement.props[prop]);
  }
  rootElement.appendChild(domElement);
}
