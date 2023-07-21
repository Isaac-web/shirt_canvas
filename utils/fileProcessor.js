export const imageToBase64 = (file) => {
    if (!file) return null;

    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onloadend = (file) => {
            resolve(file.target.result)
        }


        fileReader.onerror = (err) => {
            resject(err)
        }

        fileReader.readAsDataURL(file)
    })
}