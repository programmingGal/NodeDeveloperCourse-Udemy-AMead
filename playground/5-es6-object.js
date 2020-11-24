// object property shorthand



const name = 'Adina'
const userAge = '30'

// reg. object and property definition syntax
const user = {
    name: name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// shorthand syntax:
const shorterUser = {
    name,  // if property is same name as variable, can do this shorthand
    age: userAge, 
    location: 'Philadelphia'
}


// object destructuring: extract properties into variables 
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

// to reassign - tonz of extra coding
//const label = product.label
//const stock = product.stock

// destructuring syntax:
const {label, stock} = product

console.log(label)
console.log(stock)

// can also rename the variable extracted from an object property, and can assign it a default
const {price: productPrice, salePrice: productSalePrice=2} = product

console.log(productPrice)
console.log(productSalePrice)

// can destructure an obj that's being passed in as a param to a function 
// and only have access to the properties u extract

const transaction = (type, {label, price}) => {
    console.log(type, label, price)
}

transaction('order', product)