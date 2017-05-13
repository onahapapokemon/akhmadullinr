$(function () {
    function Cart () {
        var __self = this;
        this.lsFieldId = 'cart';
        this.domElems = {
            cart: $('.cart'),
            itemTmpl: $('.cart__item_tmpl'),
            totalPrice: $('.cart .totals .price'),
            orderButton: $('.cart__make-order'),
            totalPosition: $('.total-position')
        };

        this.cartArray = [];

        $('.bigcart').click(function (e) {
            var item = {
                id: 'a-3',
                name: 'Кыся',
                price: '5',
                qty: '10'
            };

            __self.addToCart(item);
        });
    }

    Cart.prototype.init = function () {
        var __self = this;
        window.ls.initField(this.lsFieldId);


        // ДЗ №2 сделать кнопку удаления позиции
        this.domElems.cart.on('click','.btn-remove', function (e) {
            var parentLi = e.target.closest('li'); // находим item, который хотим удалить
            var index = $(parentLi).find('.itemName').html();  // выбираем название товара
            __self.cartArray.forEach(function (item,i) {  // проходим по массиву товаров, удаляем нужный элемент массива
               if (item.name == index) __self.cartArray.splice(i,1);
            });
            __self.updateStorage(); // обновляем localStorage
            __self.viewCart(); // рендерим
        });

        this.viewCart();

        this.makeOrder();
    };

    Cart.prototype.getCartItems = function () {
        this.cartArray = window.ls.getFieldData(this.lsFieldId);
        return this.cartArray;
    };

    Cart.prototype.getCartSize = function () {
        return this.getCartItems().length;
    };

    Cart.prototype.getTotalPrice = function () {
        var items = this.getCartItems(),
            totalPrice = 0;
        items.forEach(function (item) {
            totalPrice += item.price*item.qty;
        });
        return totalPrice;
    };

    // рендеринг
    Cart.prototype.viewCart = function () {
        this.viewCartSize();
        this.getCartSize();
        this.viewTotalPrice();
        this.viewCartList();
    };

    // ДЗ №1 (сколько позиций товара в корзине) + делаем изменения в custom.css
    Cart.prototype.viewCartSize = function () {
        this.domElems.totalPosition.text(this.getCartSize());
    };


    Cart.prototype.viewTotalPrice = function () {
        this.domElems.totalPrice.text('$' + this.getTotalPrice());
    };

    Cart.prototype.viewCartList = function () {
        var __self = this,
            items = this.getCartItems(),
            listHtml = [];

        items.forEach(function (item) {
            listHtml.push(__self.viewCartItem(item));
        });

        this.clearViewCart();

        $('.cart .totals').before(listHtml);
    };

    Cart.prototype.viewCartItem = function (item) {
        var tmpl = this.domElems.itemTmpl.clone().removeClass('cart__item_tmpl'),
            itemPrice = item.qty * item.price;

        tmpl.find('.quantity').text(item.qty);
        tmpl.find('.itemName').text(item.name);
        tmpl.find('.price').text('$' + itemPrice);

        return tmpl;
    };

    Cart.prototype.updateStorage = function () {
        window.ls.updateField(this.lsFieldId, this.cartArray);
    };


    Cart.prototype.addToCart = function (newItem) {
        var __self = this;

        // ДЗ №3 При добавлении еще одного товара с уже имеющимся id - увеличиваем его количество и price
        this.cartArray.forEach(function (item) {
            if (item.id === newItem.id) {                 // проходимся по массиву с объектами, сравниваем id
                item.qty = ((+item.qty)+(+newItem.qty));  // если равен, то добавляем к объекту количество
            }
            else {                                       // если не равен то проверяем существует ли в массиве объект
                function checkArray (el) {               // с таким же id
                    return el.id != newItem.id;          // если нет, то добавляем новую позицию товара в массив
                }
                if (__self.cartArray.every(checkArray) == true ) __self.cartArray.push(newItem);
            }
        });
        if (this.cartArray.length == 0) {
            __self.cartArray.push(newItem);
        }
        this.updateStorage();
        this.viewCart();
    };


    // ДЗ №4 Сделать метод оформления заказа. По нажатию на ORDER.
    // Выводим alert c текстом: "Вы заказали 5 товаров на сумму: $125". Очистить корзину.
    Cart.prototype.makeOrder = function () {
        var __self = this;
        this.domElems.orderButton.click(function () {
            alert('Поздравляю! Вы заказали ' + __self.getCartSize() + ' позиций товаров на сумму: $' + __self.getTotalPrice());
            __self.cartArray = [];
            __self.updateStorage();
            __self.viewCart();
        });

    };


    Cart.prototype.clearViewCart = function() {
        $('.cart__item').remove();
    };



    window.cart = new Cart();

    cart.init();

});


/**
 * Created by Rustam on 09.05.2017.
 */
