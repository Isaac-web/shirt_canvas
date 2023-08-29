import { proxy } from "valtio";

const state = proxy({
  intro: true,
  addToCart: false,
  logoScale: 0.15,
  logoPosition: [0, 0.1, 0.125],
  textPosition: [0, 0, 0.125],
  fullTexturePosition: [-0.1, 0, 0.125],
  textContent: "Let's Do It",
  color: "#ffbe0b",
  isText: false,
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullTextureDecal: "./threejs.png",
});

export default state;
