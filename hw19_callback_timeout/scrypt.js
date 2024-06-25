document.write('hello hello hello');

//1. Повторити написану кол-бек функцію на парі.







document.write('hello hello hello');



//Backend 
function clearHouse(isDone, fn) {
    setTimeout(() => {
        const reward = 500; 

    if (isDone) {
        fn(null, reward)
    } else {
        fn('You should clear House !!!', 0)
    }
    }, 1500)
    
}

function buyShore(money, fn) {
    setTimeout(() => {
        const priseShore = 300;


        if (money >= priseShore) {
            const rest = money - priseShore;
            fn(null, rest);
        } else {
            fn('Money not enough !!!');    
        }

    }, 1000)
}

function buyIce(money, fn) {
    setTimeout(() => {
        const priceOfIce = 50;

        if (money >= priceOfIce) {
            const rest = money - priceOfIce;
            fn(null, rest);
        } else {
            fn('You have too low money to buy ice !')
        }
        
    }, 1500)
}

//frontend
let isClearedHouse = confirm('Did you clean house ?')

clearHouse(isClearedHouse, (err, money) => {

    if (!err) {
        console.log('I get:', money, 'I am happy');

        buyShore(money, (errShore, rest) => {
            if (!errShore) {
                console.log('I bought shores!!! I have rest: ', rest);

                buyIce(rest, (errIce, restIce) => {
                    if(!errIce) {
                        console.log('Ice is yummi yummi, i have: ', restIce)
                    } else {
                     console.log('Error: ', errIce);
                    }
                });

            } else {
                console.log('Error: ', errShore);
            }
        })
    } else {
        console.log('I have error:', err, 'I have money: ', money);
    }
});





//2. Створити аналогічну кол-бек функцію яка буде складатись із трьох послідовних дій:
//- Полагодив ПК, отримав нагороду (час виконання 3 сек)
//- Купив зарядний пристрій (час виконання 1.5 сек)
//- Купив продукти в магазині (час виконання 1 сек)

//Backend 
function repairPc(isDone, fn) {
    setTimeout(() => {
        const reward = 1500; 

    if (isDone) {
        fn(null, reward)
    } else {
        fn('You should repair PC !!!', 0)
    }
    }, 3000)
    
}

function buyCharger(money, fn) {
    setTimeout(() => {
        const priseCharger = 500;


        if (money >= priseCharger) {
            const rest = money - priseCharger;
            fn(null, rest);
        } else {
            fn('Money not enough !!!');    
        }

    }, 1500)
}

function buyProducts(money, fn) {
    setTimeout(() => {
        const priceOfProducts = 650;

        if (money >= priceOfProducts) {
            const rest = money - priceOfProducts;
            fn(null, rest);
        } else {
            fn('You have too low money to buy Products !')
        }
        
    }, 1500)
}

//frontend
let isRepairedPc = confirm('Did you repair PC ?')

clearHouse(isRepairedPc, (err, money) => {

    if (!err) {
        console.log('I repaired:', money, 'I am happy');

        buyShore(money, (errShore, rest) => {
            if (!errShore) {
                console.log('I bought shores!!! I have rest: ', rest);

                buyIce(rest, (errIce, restIce) => {
                    if(!errIce) {
                        console.log('Ice is yummi yummi, i have: ', restIce)
                    } else {
                     console.log('Error: ', errIce);
                    }
                });

            } else {
                console.log('Error: ', errShore);
            }
        })
    } else {
        console.log('I have error:', err, 'I have money: ', money);
    }
});











