const setItem = (key, value) => {
    if (typeof key !== "string") throw new Error("key must be a string")
    if (typeof value !== "string") throw new Error("value must be a json");

    try {
        window.localStorage.setItem(key, value)
    } catch (err) {
        console.err("Somthing went wrong.", err);
    }
}

const getItem = (key) => {
    if (typeof key !== "string") throw new Error("key must be a string");


    const item = window.localStorage.getItem(key);
    if (item) {
        return JSON.parse(item)
    }

    return null;
}

const removeItem = (key) => {
    if (typeof key !== "string") throw new Error("key must be a string");

    window.localStorage.removeItem(key);
}


const clear = () => {
    window.localStorage.clear();
}


export default {
    setItem, getItem, removeItem, clear
}