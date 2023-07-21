import { proxy } from "valtio";


const state = proxy({
    intro: true,
    addToCart: false,
    logoScale: 0.15,
    logoPosition: [0, 0.1, 0.125],
    color: '#ffbe0b',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
});


export default state;