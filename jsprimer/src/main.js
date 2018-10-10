// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')
console.log("Hello VueJS")

//ham
function MyFunc(name, age) {
    console.log("Hello " + name + ". You are " + age + " years old");
}
MyFunc("Mo", "22");


//tham so ham
// function myfunction(name) {
//     return ("Hello" + name() + "xyz");
// }

// function printname(name, pr) {
//     pr(myfunction(name));
// }

// printname(function() { return "Mo" }, console.log);

//con tro ham

const myfunction = (name) => ("Hello" + name() + "abc");
const printname = (name, pr) => pr(myfunction(name))

printname(function() { return "Mo" }, console.log);

let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.5, stock: 20 },
]
let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log(`Total value: $${totalValue.toFixed(2)}`);

//object myData
let myData = {
    name: "MoMeo",
    age: 22,
    weather: "sunny",
    printMesage() {
        console.log(`Toi la ${myData.name} `);
        console.log(`Hom nay la mot ngay ${myData.weather}`);
    }
};
//Ham coppy object

let coppyObject = {}; //Khoi tao object rong
Object.assign(coppyObject, myData); // coppy noi dung tu object myData sang coppyObject
coppyObject.printMesage(); //coppyObject duoc su dung phuong thuc printMesage()