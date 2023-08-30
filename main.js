const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    } else if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    } else if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }

    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Smart TV',
    price: 500,
    image: 'https://www.lg.com/be_fr/lg-experience/images/lg-lab/2023/what-is-a-smart-tv/lg-experience-lg-lab-what-is-a-smart-tv-key-visual.jpg'
});
productList.push({
    name: 'Dell Computer',
    price: 620,
    image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/02/dell-xps-13-plus-9320-analisis-opinion-2946788.jpg?tf=3840x'
});
productList.push({
    name: 'Smartphone',
    price: 900,
    image: 'https://www.whatmobile.com.pk/control/news/assets/24082022/8fa61e47ca1f7a1e7c542bb3811db35e.jpg'
});
productList.push({
    name: 'Macbook Pro',
    price: 1500,
    image: 'https://www.notebookcheck.org/fileadmin/Notebooks/Apple/MacBook_Pro_14_2023_M2_Pro/AKA8518.jpg'
});
productList.push({
    name: 'SmartWatch',
    price: 420,
    image: 'https://www.thestreet.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxODY1NzA0MDc1NTY4NjI2/8-samsung-galaxy-watch-5-and-watch-5-pro.jpg'
});
productList.push({
    name: 'Sony WF-1000XM5',
    price: 320,
    image: 'https://imgs.hipertextual.com/wp-content/uploads/2023/07/WF-1000XM5-4.jpg'
});
productList.push({
    name: 'Airpods Max',
    price: 525,
    image: 'https://image.stern.de/9544144/t/X-/v4/w1440/r1.3333/-/airpodsmax-teaser-.jpg'
});
productList.push({
    name: 'PlayStation 5',
    price: 500,
    image: 'https://s.yimg.com/uu/api/res/1.2/R8OF6NCmqERAOi08Cy.AZA--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/1fa5a901-1fee-11eb-b6fd-ecc1bfdbf55f.cf.jpg'
});
productList.push({
    name: 'Xbox Series X',
    price: 550,
    image: 'https://s.yimg.com/uu/api/res/1.2/k01ifRWERd_v0nFf1n3QZw--~B/Zmk9ZmlsbDtoPTU4Mzt3PTg3NTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/00ab1e71-1f19-11eb-9b53-ff3bab8dbe8c.cf.jpg'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
