const myPromise = () => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/matheusbecatini')
        xhr.send(null);

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4){
                if (xhr.status === 200)
                    resolve(JSON.parse(xhr.responseText))
                else
                    reject('Erro na requisição')
            }
        }
    })
}

myPromise()
    .then(response => {
        console.log('Usando Promise')
        console.log(response)
    })
    .catch(error => {
        console.warn(error)
    })