const getAPI = async () => {
    try {
        const resposta = await axios.get('https://api.github.com/users/matheusbecatini')
        console.log('Using async / await')
        console.log(resposta)
    } catch (error) {
        console.warn('Erro no async/await ' + error)
    }
}
getAPI()