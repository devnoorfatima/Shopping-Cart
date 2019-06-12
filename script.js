const list = document.querySelector('.list');
const products = {
    1: {
        "name": 'cooking oil',
        "price": '10.5'
    },
    2: {
        "name": 'Pasta',
        "price": '6.25'
    },
    3: {
        "name": 'Instant cupcake mixture',
        "price": '5'
    },
    4: {
        "name": 'All-in-one',
        "price": '260'
    },
    5: {
        "name": 'Zero Make-up Kit',
        "price": '20.5'
    },
    6: {
        "name": 'Lip Tints',
        "price": '12.75'
    },
    7: {
        "name": 'Lawn Dress',
        "price": '15'
    },
    8: {
        "name": 'Lawn-Chiffon Combo',
        "price": '15'
    },
    9: {
        "name": 'Toddler Frock',
        "price": '10.5'
    },
    10: {
        "name": 'Metallic shine heels',
        "price": '25'
    },
    11: {
        "name": 'Blood Red combo',
        "price": '20.5'
    },
    12: {
        "name": 'Rose Gold sandals',
        "price": '13.45'
    }
}
let item = [];
let bill = [];

function addToCart(x) {
    const span = `<span class="price">$${products[x].price}</span>`
    const result = products[x].name + " " + span;
    if (item.includes(products[x]) === false) item.push(result);
    bill.push(products[x].price);

}

function cart() {
    list.innerHTML = "";
    for (let i = 0; i < item.length; i++) {
        let text = item[i];
        let listItem = document.createElement("LI");
        listItem.innerHTML = text;
        list.appendChild(listItem);
        listItem.style.textAlign = 'left';
    }
    const btn = document.querySelector('.bill');
    const total = bill.reduce(add);

    function add(accumulator, a) {
        return parseInt(accumulator) + parseInt(a);
    }
    console.log(total);
    btn.innerHTML = `Total Bill is $${total}`;
}