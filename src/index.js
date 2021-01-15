import "./index.css";
import img from "./img/times-circle.png";
import big_img from "./img/big.jpeg";

const time = () => {
  return new Date().toLocaleDateString();
}

console.log(`It's ${time()}`);

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src="${img}" />
    <img src="${big_img}" />
  `;
})
