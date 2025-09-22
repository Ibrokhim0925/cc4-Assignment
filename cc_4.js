// Coding Challange 4

// Step 2: Product list 

const products = [

    {sku: "A-900", name: "Mini Fridge", category: "electronics", price: 89.99, invnetory: 48 },
    {sku: "C-900", name: "Shoes", category: "apparel", price: 48.59, invnetory: 32 },
    {sku: "N-900", name: "Crackers", category: "groceries", price: 7.92, invnetory: 63 },
    {sku: "L-900", name: "Towels", category: "household", price: 18.99, invnetory: 107 },
    {sku: "K-900", name: "game CDs", category: "entertainment", price: 39.99, invnetory: 206 },
];

// Step 3: Applying category discounts 

for (let product of products) {
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = .2
            break; 
        case "groceries":
        case "household":
            discount = .1
            break;
        case "apparel":
            discount = .15
            break;
        default:
            discount = 0;
            break;    
    }
    product.promoPrice = (product.price * (1 - discount));
    
}

console.log(products)

// Step 4: Creating customerType and applying an additional discount 

let customerType = "student";

let extraDiscount = 0;

    if (customerType === "student")  {
        extraDiscount = 0.05;  

    } else if (customerType === "senior") {
        extraDiscount = 0.07;

    } else {
        extraDiscount = 0;
    }
       
console.log(`Customer Type: "${customerType}", Additional Discount: ${extraDiscount * 100}%`);

// Step 5: Simulating a checkout process for 3 customer types

const numberOfCustomers = 3;

for (let i=1; i <= 3; i++) {
    let customerSubtotal = 0;

    for (let product of products) {
        if (product.inventory > 0) {
            customerSubtotal += product.promoPrice;

            product.inventory--;
        }
    }
    const finalTotal = customerSubtotal * (1-extraDiscount);

    console.log(`Customer ${i} Total Cost: $${finalTotal.toFixed(2)}`);
}

