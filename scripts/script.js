//pegando dados dos produtos
const items = [
    {
        id: 0,
        name: document.querySelector('#name1').textContent,
        price: document.querySelector('#price1').textContent,
        quantity: 1
    },
    {
        id: 1,
        name: document.querySelector('#name2').textContent,
        price: document.querySelector('#price2').textContent,
        quantity: 1
    },
    {
        id: 2,
        name: document.querySelector('#name3').textContent,
        price: document.querySelector('#price3').textContent,
        quantity: 1
    },
    {
        id: 3,
        name: document.querySelector('#name4').textContent,
        price: document.querySelector('#price4').textContent,
        quantity: 1
    },
    {
        id: 4,
        name: document.querySelector('#name5').textContent,
        price: document.querySelector('#price5').textContent,
        quantity: 1
    },
    {
        id: 5,
        name: document.querySelector('#name6').textContent,
        price: document.querySelector('#price6').textContent,
        quantity: 1
    }
]

//Adiciona Item ao Cart
function sendValue1(){
    localStorage.setItem('product', JSON.stringify(items[0]));
}
function sendValue2(){
    localStorage.setItem('product', JSON.stringify(items[1]));
}
function sendValue3(){
    localStorage.setItem('product', JSON.stringify(items[2]));
}
function sendValue4(){
    localStorage.setItem('product', JSON.stringify(items[3]));
}
function sendValue5(){
    localStorage.setItem('product', JSON.stringify(items[4]));
}
function sendValue6(){
    localStorage.setItem('product', JSON.stringify(items[5]));
}


