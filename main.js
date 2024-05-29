let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')
openShopping.addEventListener('click', () => {
    body.classList.add('active')
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active')
})
function filterMice(category) {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].classList.contains(category)) {
            cards[i].style.display = '';
        } else {
            cards[i].style.display = 'none';
        }
    }
}
let products = [
    {
        id: 1,
        name: 'Бонсай',
        image: '11.JPG',
        price: 250
    },
    {
        id: 2,
        name: 'Орхідея',
        image: '3.WEBP',
        price: 150
    },
    {
        id: 3,
        name: 'Бамбук',
        image: '22.JPG',
        price: 300
    },

];
let listCards = [];
function addToCard(index) {
    let product = products[index];
    if (!listCards[index]) {
        listCards[index] = { ...product, quantity: 1 };
    } else {
        listCards[index].quantity += 1;
    }
    reloadCart();
}
function reloadCart(){
        listCard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;
        listCards.forEach((product, index) => {
            if (product){
                totalPrice += product.price * product.quantity;
                count += product.quantity;

                let item = document.createElement('li');
                item.innerHTML = `
                <div><img src='images/${product.image}'/></div>
                <div>${product.name}</div>
                <div>${(product.price * product.quantity).toLocaleString()}</div>
                <div>
                    <button onclick='changeQuantity(${index}, ${product.quantity - 1})'>-</button>
                    <div class='count'>${product.quantity}</div>
                    <button onclick='changeQuantity(${index}, ${product.quantity + 1})'>+</button>\
                </div>`;
            listCard.appendChild(item);}});
        total.innerText = totalPrice.toLocaleString();
        quantity.innerText = count;
    }
function showAllMice() {
    let cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = '';
    }
}
function openModal(modalId) {
    var modal = document.getElementById(modalId)
    modal.style.display = 'block';
}
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}
function changeQuantity(index, newQuantity){
    if(newQuantity <= 0){
        delete listCards[index];
    } else{
        listCards[index].quantity = newQuantity;
    }
    reloadCart()
}