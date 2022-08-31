// Requirements:
// npm start: para ligar a API
// npx lite-server: para ligar o servidor local 


// #### Consumir API pelas promises (then): ####

const ConsumirApi =() =>{
    fetch('http://localhost:4567/').then(response => response.json())
    .then(data =>{
         // Show(data)
        const mostrar = data.reduce((accumulator, user) => {
            accumulator += `
                <li>${user.name}<li>
            `
            return accumulator
        }, '')
        document.querySelector('ul').innerHTML = (mostrar)
        console.log(data)
        })
}



// ### Consumir API pelas const de forma assíncrona: ###

async function getContent(){
    try {
        const resposta = await fetch( 'http://localhost:4567/')
        const data = await resposta.json()
        
        Show(data)
        console.log(data)
    }catch (error) {
        console.error(error)
    }
}
                     
            
const Show = (users) =>{
    let output = ''
    
    for( let user of users){
        output += `<li>${user.name}</li>` 
    }

    document.querySelector('main').innerHTML = (output)
}

// ConsumirApi()
getContent()