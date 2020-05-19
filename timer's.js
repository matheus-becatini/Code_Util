num = 0
const contador = () => {
    console.log(num)
    num ++
}

//Espera 2 segundos e executa a função
setTimeout(() => {
    console.log(`Iniciando...`)
    setInterval(contador, 2000)  
    //Executa a função n vezes a cada intervalo de tempo 
    //a cada 2 segundos
}, 2000);



