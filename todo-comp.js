/// <reference path="./typings/tsd.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var TodoStore_1 = require('./services/TodoStore');
var TodoComp = (function () {
    function TodoComp(todoStore, factory) {
        this.todoStore = todoStore;
        this.factory = factory;
        this.todoEdit = null;
        this.todos = [];
        this.todos = todoStore.list;
    }
    TodoComp.prototype.enterTodo = function (inputElement) {
        this.addTodo(inputElement.value);
        inputElement.value = '';
    };
    TodoComp.prototype.addTodo = function (newTitle) { this.todoStore.add(this.factory.create(newTitle, false)); };
    TodoComp.prototype.editTodo = function (todo) { this.todoEdit = todo; };
    TodoComp.prototype.doneEditing = function ($event, todo) {
        var which = $event.which;
        var target = $event.target;
        if (which === 13) {
            todo.title = target.value;
            this.todoEdit = null;
        }
        else if (which === 27) {
            this.todoEdit = null;
            target.value = todo.title;
        }
    };
    TodoComp.prototype.completeMe = function (todo) { todo.completed = !todo.completed; };
    TodoComp.prototype.deleteMe = function (todo) { this.todoStore.remove(todo); };
    TodoComp.prototype.toggleAll = function ($event) {
        var isComplete = $event.target.checked;
        this.todoStore.list.forEach(function (todo) { todo.completed = isComplete; });
    };
    TodoComp.prototype.clearCompleted = function () { this.todoStore.removeBy(function (todo) { return todo.completed; }); };
    TodoComp = __decorate([
        angular2_1.Component({
            selector: 'todo-comp',
            appInjector: [TodoStore_1.Store, TodoStore_1.TodoFactory]
        }),
        angular2_1.View({
            templateUrl: './todo.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [TodoStore_1.Store, TodoStore_1.TodoFactory])
    ], TodoComp);
    return TodoComp;
})();
exports.TodoComp = TodoComp;
