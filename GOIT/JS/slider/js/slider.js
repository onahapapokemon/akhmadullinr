function Slider(selector, options) {

    var __self = this;

    // DOM Nodes
    var sliderNode = document.querySelector(selector),
        sliderImagesNode = sliderNode.querySelector('.slider__images-wrap'),
        prevSliderNode = sliderNode.querySelector('.slider__pager_previous'),
        nextSliderNode = sliderNode.querySelector('.slider__pager_next'),
        paginationNode = sliderNode.querySelector('.slider__pagination');

    var currentSlideIndex = options.currentSlide || 0,
        imagesCount = sliderImagesNode.children.length,
        slideSize = sliderImagesNode[(options.direction === 'vertical') ? 'offsetHeight' : 'offsetWidth'];

    this.prevSlide = function () {
        if (currentSlideIndex === 0) {
            currentSlideIndex = imagesCount - 1;
            return;
        }
        currentSlideIndex--;
    };

    this.nextSlide = function () {
        if (currentSlideIndex === imagesCount - 1) {
            currentSlideIndex = 0;
            return;
        }
        currentSlideIndex++;
    };

    this.__render = function () {
        var directionStyle = (options.direction === 'vertical') ? 'marginTop' : 'marginLeft';

        sliderImagesNode.style[directionStyle] = -(currentSlideIndex * slideSize) + 'px';
        paginationNode.querySelector('.active').classList.remove('active');
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');



    };

    prevSliderNode.onclick = function(e) {
        e.preventDefault();
        __self.prevSlide();
        __self.__render();
    };

    nextSliderNode.onclick = function(e) {
        e.preventDefault();
        __self.nextSlide();
        __self.__render();
    };

    paginationNode.onclick = function(e) {
        e.preventDefault();

        var link = e.target;

        if (link.tagName !== 'A') { return; }

        currentSlideIndex = +link.dataset['slider__item'];

        __self.__render();
    };

    this.__init = function () {
        if (options.direction === 'vertical') {
            sliderImagesNode.style.whiteSpace = 'normal';
        }

        this.__render();
    };

    function addPagination() {
        var pagination = paginationNode.querySelector('.slider__pagination-item');
        pagination.classList.remove('slider__pagination-item_tmpl');
        for(var i=0;i<imagesCount;i++) {
            var pagination2 = pagination.cloneNode(true);
            pagination2.querySelector('a').innerHTML = [i+1] + '';
            pagination2.dataset.slider = [i];
            pagination2.querySelector('a').dataset.slider__item = [i];
            pagination.parentNode.appendChild(pagination2);
        }
        pagination.remove();
        paginationNode.children[currentSlideIndex].querySelector('a').classList.add('active');
    };

    addPagination();

    this.__init();
}
