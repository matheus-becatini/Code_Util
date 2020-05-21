axios.get('https://api.github.com/users/matheusbecatini')
    .then(response => {
        console.log('Using .then .catch')
        console.log(response)
    })
    .catch(error => {
        console.warn('Erro no .then .catch ' + error)
    })