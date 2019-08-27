window.open('https://shopee.vn/flash_sale');



var only1kTab = document.getElementsByClassName('navbar-with-more-menu__item');

for (var i = 0; i < only1kTab.length; ++i) {
	if('CHỈ 1K' == only1kTab[i].firstElementChild.innerText) {
		// click tab 1k
		only1kTab[i].firstElementChild.click();
		
		
		var obj1 = document.getElementsByClassName('flash-sale-item-card__current-price flash-sale-item-card__current-price--landing-page');
		for (var i = 0; i < obj1.length; ++i) {
			if ('1.000' == obj1[i].lastElementChild.innerText) {
				// nếu là sản phẩm 1k thì click mua
				obj1[i].lastElementChild.click();
			}
		}
	}
}

// chọn loại hàng - nếu sản phẩm bắt lựa chọn type (ex: color, size...)

var productVariation = document.getElementsByClassName('product-variation');
for (var i = 0; i < productVariation.length; ++i) {
	if(productVariation[i].className == 'product-variation--disabled') {
		console.log('diasble'); } 
		else {
			productVariation[i].click();
		}
}
// Thêm sản phẩm vào giỏ hàng
document.getElementsByClassName('btn btn-solid-primary btn--l YtgjXY')[0].click();

// click vào ô nhập mã giảm giá
document.getElementsByClassName('stardust-button _1xkVe1 _39UTt8')[0].click();


// expand mã miễn phí vận chuyển

document.getElementsByClassName('stardust-dropdown__item-header')[0].click();

// mã vận chuyển document.getElementsByClassName('_3AS8Su YAB_ZB')[0].lastElementChild.lastElementChild.
var mavanchuyen = document.getElementsByClassName('_22DmGV qZ-xSO');
for (var i = 0; i < mavanchuyen.length; ++i) {
	mavanchuyen[i].click();
}

// mã giảm giá
var magiamgia = document.getElementsByClassName('_2slt0O _1P0jnY');
for (var i = 0; i < magiamgia.length; ++i) {
	if ('MIỄN PHÍ VẬN CHUYỂN' == magiamgia[i].innerText) {
		magiamgia[i].click();
	}
}

// testing for commit to github

