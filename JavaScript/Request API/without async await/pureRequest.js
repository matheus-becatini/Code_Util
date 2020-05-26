let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/matheusbecatini')
xhr.send(null);

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4){
        console.log('Pure Request')
        console.log(JSON.parse(xhr.responseText))
    }
}