$(function() {

    var RSSReader = function () {

        this.feedUrl = 'http://akhmadullinr.github.io/GOIT/JS/lesson22/news/js/tsconfig.json'; // адрес по которому получаем нащи данные

        this.articlesList = $('.articles');

        this.articleTmpl = $('.article_tmpl');

        this.buttons = $('#page-buttons');

        this.init();
    };

    RSSReader.prototype.init = function () {
        var __self = this;

        this.getFeed(__self.getUrlHash());

        this.updateMenu();

        $(window).on('hashchange', function (e) {
            __self.getFeed(__self.getUrlHash());
            __self.updateMenu();
        });
    };

    RSSReader.prototype.updateMenu = function () {
        var current = this.getUrlHash();

        $('.sf-menu li').each(function (i, item) {
            $(item).removeClass('current-menu-item');
        });

        $('.menu__li_' + current).addClass('current-menu-item')
    };

    RSSReader.prototype.getUrlHash = function () {
        var hash = window.location.hash || 'habr';
        return hash.replace('#', '');
    };

    RSSReader.prototype.getFeed = function (feedID) {
        $.ajax({
            url: this.feedUrl,
            data: {kind: feedID},
            method: 'GET',
            dataType: 'json'
        })
            .success(this.onGetData.bind(this))
            .error(function (error) {

                // TODO: make error message
                console.log(error);
                alert('sorry, you have a problem with RSS feed, please check your JSON link');
            });
    };




    RSSReader.prototype.onGetData = function (data) {
        var __self = this;
        var rss = data.rss;
        var array = rss.channel.item; // выбираем массив из JSON
        var pages = divide(4,array); // делим JSON массив по четыре записи на страницу
        var index = 0;
        var end = pages.length;

        // кнопка назад
        this.buttons.on('click','.nav-next', function (e) {
            if (index == end-1) return index = end-1;
            __self.renderFeed(pages[index+1]);
            return index += 1;
        });

        // кнопка вперед
        this.buttons.on('click','.nav-previous', function (e) {
            if (index > end-1) return index = end-2;
            else if (index <= 0) index = 1;
            __self.renderFeed(pages[index-1]);
            return index -= 1;
        });

        // кнопки переключения страниц с новостями (bottom pagination)
        this.buttons.on('click','.nav-page', function (e) {
            var pageIndex = $(this).data('page') - 1; // извлекаем число из атрибута data-page и вычитаем один
            if (pageIndex == end) pageIndex = end - 1; // если страница пустая, возвращемся на предыдущую
            __self.renderFeed(pages[pageIndex]);
        });


        // функции для разделения JSON на части
        function take(n, list) {
            return list.slice(0, n);
        }

        function drop(n, list) {
            return list.slice(n);
        }

        function concat(lists) {
            return Array.prototype.concat.apply(this, lists);
        }

        function divide(n, list) {
            if (list.length) {
                var head = take(n, list);
                var tail = drop(n, list);
                return concat.call([head], [divide(n, tail)]);
            } else return [];
        }

        this.renderFeed(pages[index]);
    };

    RSSReader.prototype.renderFeed = function (dataList) {
        var __self = this,
            listHTML = [];
        dataList.forEach(function (item) {
           listHTML.push(__self.renderItem(item));
        });


        this.articlesList.html(listHTML);
    };

    RSSReader.prototype.convertDate = function (date) {
        var stringDate = new Date(date);
        var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        var properDate = stringDate.getDate() + ' ' + monthArray[stringDate.getMonth()]
            + ' ' + stringDate.getHours() + ':'
            + stringDate.getMinutes();
        return properDate;
    };


    RSSReader.prototype.renderItem = function (item) {
        var newItem = this.articleTmpl.clone().removeClass('article_tmpl');
        newItem
            .find('.post-heading')
            .html(item.title);

        newItem
            .find('.excerpt')
            .html(item.description);

        newItem
            .find('.author')
            .html(item.author);

        newItem
            .find('.date')
            .html(this.convertDate(item.pubDate));

        newItem
            .find('.action-button')
            .attr('href', item.guid);

        return newItem;
    };


        window.rssReader = new RSSReader();
});


