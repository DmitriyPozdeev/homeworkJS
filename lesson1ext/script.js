let num = '33721',
    product = 1,
    power;
for(i = 0; i<num.length; i++) {
 product = product * num[i];
};
console.log(product);
power = product ** 3;
console.log(power);
power = power + '';
alert(`первая цифра числа ${power} - ${power[0]}, вторая цифра - ${power[1]}`);
