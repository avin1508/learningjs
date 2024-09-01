const products = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 1000 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 500 },
    { id: 3, name: 'Shirt', category: 'Apparel', price: 30 },
];


const searchProducts = (query) =>{
    return products.filter((p)=> p.name.toLowerCase().includes(query.toLowerCase()))
}

const filterProducts = (category, minPrice, maxPrice) =>{
    return products.filter((product) => 
        product.category === category && 
        product.price >= minPrice &&
        product.price <= maxPrice)
        
}

console.log(searchProducts('laptop'));
console.log(filterProducts('Electronics', 400, 1100));

const orders = [];

// Create Order
const createOrder = (userId, products) => {
    const order = {
        id: orders.length + 1,
        userId,
        products,
        status: 'Pending'
    };
    orders.push(order);
    return order;
};

// Update Order Status
const updateOrderStatus = (orderId, status) => {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        console.log(`Order ${orderId} status updated to ${status}`);
    } else {
        console.log('Order not found');
    }
};

// Example Usage
const order1 = createOrder(1, [{ name: 'Laptop', price: 1000 }]);
console.log(order1); 

updateOrderStatus(1, 'Shipped'); 
updateOrderStatus(1, 'Delivered'); 


//inventory

const inventory = [
    { id: 1, name: 'Laptop', stock: 5 },
    { id: 2, name: 'Phone', stock: 2 },
];


const decreaseStock = (productId, quantity) => {
    const product = inventory.find((product) => product.id === productId)
    if(product){
        if(product.stock >= quantity){
            product.stock -= quantity;
        }else{
            console.log(`this product have very low stock only ${product.stock}`)
        }

        if(product.stock < 3){
            console.log(`please refill the stock only ${product.stock}`)
        }
    }else{
        console.log('product not found')
    }
}

decreaseStock(1,4)
decreaseStock(1,4)


console.log(inventory)