const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];

function findAveragePhonePrice (phones){
    let totalPrice = 0;
    for(let phone of phones){
       totalPrice += phone.price;
    }
    const average = totalPrice / phones.length;
    return average;
}

const result = findAveragePhonePrice(phones);
console.log(result.toFixed(2));