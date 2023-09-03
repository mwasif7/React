import {renderElement} from "./renderElement.js";


const myElement = {
  type: "a",
  props: {
    href: "https://www.google.com/",
    target: '_blank'
  },
  children: 'Click me to go to Google.com'
};
const myElement2 = {
  type: "p",
  props: {
    style: "color: #FF0000",
  },
  children: "Hi this is paragraph",
};

const elements = [myElement, myElement2]; // Create an array of elements

for (const element of elements) {
  renderElement(element);
}
