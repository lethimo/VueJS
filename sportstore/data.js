var faker = require("faker");
var data = [];
var categories = ["WaterSports", "Soccer", "Chess", "Running"];
faker.seed(100);

for (let i = 1; i < 500; i++) { //500 category, 100 seed => 1 seed = 5 category
    let category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}:${faker.lorem.sentence(3)}`,
        price: faker.commerce.price()
    })
}
//neu so category rat lon thi so seed se keo dai ra
//Vi vay can thu gon chan trang

module.exports = function() {
    return {
        products: data,
        //categories: [...new Set(data.map(p => p.category))].sort(),
        categories: categories,
        orders: []
    }
}