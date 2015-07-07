/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {TodoComp} from './todo-comp';

@Component({
    selector: 'app'
})

@View({
    template: '<todo-comp></todo-comp>',
    directives: [TodoComp]
})

class App {
    constructor() {}
}

export function main() {
    bootstrap(App);
}
