/**
 * Created by Rustam on 01.05.2017.
 */
$(function(){
    var ToDo = function() {

        this.store();                // запуск фунции проверки, если не сохранено, то запускаем дефолтный объект this.model
        if (tasks == null) this.model = [
            {text: 'Купить молоко'},
            {text: 'Надеть трусы'},
            {text: 'Еще задача'}
        ];

        this.inputField = $('.task-form__text');
        this.form = $('.task-form');
        this.todoList = $('.table__body');
        this.init();
    };


    // получить размер нашей модели  - количество элементов на текущий момент
    ToDo.prototype.getLength = function () {
        return this.model.length;
    };



    // добавить новый элемент в список
    ToDo.prototype.addItem = function(todoText) {
        var newToDo = {text: todoText};
        if (newToDo.text == '') return this.inputField.disabled;   // если поле пустое новый элемент не добавляется
        this.model.push(newToDo);
        this.appendRenderItem(this.getLength(),newToDo);
        this.renderList();
    };

    // добавить в ДОМ новый элемент в низ списка
    ToDo.prototype.appendRenderItem = function (index,item) {
        this.todoList.append(this.getItemHTML(index,item.text));
    };

    // рендеринг списка полностью
    ToDo.prototype.renderList = function () {
        var list = '',
            __self = this;

        $.each(this.model, function (index,item) {
            list +=  __self.getItemHTML(index + 1, item.text);
        });

        this.todoList.html(list);

        localStorage.setItem('tasks', JSON.stringify(this.model));  // сохраняем в localStorage JSON при каждом рендеринге
    };

    // сабмит формы
    ToDo.prototype.onFormSubmit = function (e) {
        e.preventDefault();
        this.addItem(this.inputField.val());
        this.getItemHTML(1,'text');
        this.form.trigger('reset');
    };

    // удаление строки
    ToDo.prototype.removeItem = function (index) {
        this.model.splice(index,1);

        this.renderList();
    };





    // сгенерировать html для новой строки с элементом
    ToDo.prototype.getItemHTML = function (position,item) {
        var tmpl = '<tr><th>:position</th><td>:text</td><td><button type="button" class="btn btn-info btn-up">&#8593;</button></td><td><button type="button" class="btn btn-info btn-down">&#8595;</button></td> <td><button type="button" class="btn btn-danger" data-index=":index">X</button></td></tr>'
        return tmpl.replace(/:position/gi, position).replace(/:text/gi,item).replace(/:index/gi,position-1);
    };

    // инициализация
    ToDo.prototype.init = function(){
        var __self = this;

        // кнопка удаления
        this.todoList.on('click','.btn-danger', function (e) {
            var index = $(e.target).data('index');
            __self.removeItem(index);
        });

        // кнопка вверх
        this.todoList.on('click','.btn-up', function (e) {
            var row = this.parentNode.parentNode;
            var sibling = row.previousElementSibling,
                parent = row.parentNode;
            if (parent.firstChild == row) return;
            row.firstChild.textContent = +(row.firstChild.textContent) - 1;   // изменение индекса задачи
            sibling.firstChild.textContent = +(sibling.firstChild.textContent) + 1;
            parent.insertBefore(row, sibling);
            console.log(parent);

        });

        // кнопка вниз
        this.todoList.on('click','.btn-down', function (e) {
            var row = this.parentNode.parentNode;
            var sibling = row.nextElementSibling,
                parent = row.parentNode;
            if (parent.lastChild == row) return;
            row.firstChild.textContent = +(row.firstChild.textContent) + 1;   // изменение индекса задачи
            sibling.firstChild.textContent = +(sibling.firstChild.textContent) - 1;
            parent.insertBefore(sibling, row);
        });

        this.form.submit(function(e){
            __self.onFormSubmit(e);
        });
        this.renderList();

    };

    ToDo.prototype.store = function() {   // функция проверки LocalStorage на предмет наличия сохраненного объекта
        try {
            tasks = JSON.parse(localStorage.getItem('tasks'));
        } catch (e) {
            localStorage.clear();
        }
        return this.model = tasks;
    };


    window.todo = new ToDo();

});

