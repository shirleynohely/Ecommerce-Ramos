
const products = [
    {
        id: '1',
        title: 'Chocolate blanco',
        description: 'Chocolate blanco para moldeo',
        price: 1500,
        stock: 4,
        pictureUrl: '/images/chocolate-blanco.png',
        category: 'decoracion'
    },
    {
        id: '2',
        title: 'Chocolate semiamargo',
        description: 'chocolate semiamargo para moldeo',
        price: 1800,
        stock: 10,
        pictureUrl: '/images/chocolate-semiamargo-repo2.png',
        category: 'ingredientes'
    },
    {
        id: '3',
        title: 'Chocolate con leche',
        description: 'chocolate con leche para moldeo',
        price: 1200,
        stock: 10,
        pictureUrl: './images/chocolate-con-leche-moldeo.png',
        category: 'decoracion'
    },
    {
        id: '4',
        title: 'Chocolate negro semiamargo',
        description: 'chocolate semiamargo para moldeo',
        price: 1700,
        stock: 10,
        pictureUrl: '/images/chocolate-negro-semiamargo.png',
        category: 'ingredientes'
    },
    {
        id: '5',
        title: 'Cacao en polvo amargo',
        description: 'chocolate semiamargo para moldeo',
        price: 1600,
        stock: 10,
        pictureUrl: '/images/cacao-polvo-amargo.png',
        category: 'decoracion'
    },
    {
        id: '6',
        title: 'Cacao en polvo',
        description: 'chocolate semiamargo para moldeo',
        price: 1500,
        stock: 10,
        pictureUrl: '/images/cacao-polvo.png',
        category: 'ingredientes'
    }

]

export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout( () => {resolve(products)
        }, 1000)
    })
    
}

export const getProductsById = (id) =>{
    return new Promise((resolve)=>{
        setTimeout( () => {resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) =>{
    return new Promise((resolve)=>{
        setTimeout( () => {resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

