import "./index.css";
import img from "./img/times-circle.png";
import big_img from "./img/big.jpeg"

console.log("hello world");

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src="${img}" />
    <img src="${big_img}" />
  `;
})
