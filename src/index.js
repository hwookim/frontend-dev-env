import "./index.scss";
import img from "./img/times-circle.png";
import big_img from "./img/big.jpeg";
import axios from "axios";

const time = () => {
  return new Date().toLocaleDateString();
};

console.log(`It's ${time()}`);

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src="${img}" />
    <img src="${big_img}" />
  `;
});

async function callAxios() {
  const result = await axios.get("/api");
  console.log(result.data);
}

callAxios();
