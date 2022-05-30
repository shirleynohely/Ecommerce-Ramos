
const products = [
    {
        id: '1',
        title: 'Chocolate blanco',
        description: 'Chocolate blanco para moldeo',
        price: 1500,
        stock: 4,
        pictureUrl: '/images/chocolate-blanco.png'
    },
    {
        id: '2',
        title: 'Chocolate semiamargo',
        description: 'chocolate semiamargo para moldeo',
        price: 1800,
        stock: 10,
        pictureUrl: '/images/chocolate-semiamargo-repo2.png'
    }
]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout( () => {resolve(products)
        }, 2000)
    })
    
}

export const getProductsById = (id) =>{
    return new Promise((resolve)=>{
        setTimeout( () => {resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

