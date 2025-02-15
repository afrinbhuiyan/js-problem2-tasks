
function shoppingPrice(laptopPrice, tabletPrice, mobilePrice){

  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;
  
  const totalLaptopPrice = laptop * laptopPrice;
  const totalTabletPrice =  tablet * tabletPrice;
  const totalMobilePrice = mobile * mobilePrice;

  const totalBudget = totalLaptopPrice + totalTabletPrice + totalMobilePrice;

  return totalBudget;
}

const budget = shoppingPrice(1, 1, 1);
console.log(budget);