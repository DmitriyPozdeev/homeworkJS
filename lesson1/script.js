let budget = +prompt('Ваш бюджет на месяц', 10000),
    marketName = prompt('Введите название вашего магазина'),
    mainList = {
     budget: budget,
     marketName: marketName,
     shopGoods: [],
     employers: {},
     open: false
    };
mainList.shopGoods.push(prompt('Какой тип товаров будем продавать'));
mainList.shopGoods.push(prompt('Какой тип товаров будем продавать'));
mainList.shopGoods.push(prompt('Какой тип товаров будем продавать'));
console.log(mainList.shopGoods);
alert('Ваш бюджет на день ' + budget/30);


//Разделяем текст с помощью split(""), затем бежим по всем элементам через forEach