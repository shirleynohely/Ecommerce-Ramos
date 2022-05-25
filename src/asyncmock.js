
const products = [
    {
        id: '1',
        title: 'Chocolate blanco',
        description: 'Chocolate',
        price: 1500,
        stock: 4,
        pictureUrl: './images/chocolate-blanco.png'
    },
    {
        id: '2',
        title: 'Chocolate semiamargo',
        description: 'chocolate',
        price: 1800,
        stock: 10,
        pictureUrl: './images/chocolate-semiamargo-repo2.png'
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout( () => {resolve(products)
        }, 2000)
    })
    
}

