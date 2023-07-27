const usuarios = [
    {nome: 'Rafael', idade: 21},
    {nome: 'Andreia', idade: 53},
    {nome: 'João', idade: 27},
    {nome: 'Paulo', idade: 65},
]


const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade !== 17
    })
    if (resultado) {
        console.log('Festa liberada')
    } else{
        console.log('Possui menor de idade')
    }
}

fiscalizarFesta(usuarios);

