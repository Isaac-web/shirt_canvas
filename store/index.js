import { proxy } from "valtio";


// color: '#EFBD48',
const state = proxy({
    intro: true,
    color: '#ffbe0b',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
});


export default state;