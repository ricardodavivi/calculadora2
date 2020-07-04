import {Component} from '@angular/core';
import {evaluate} from 'mathjs';

@Component({
    selector: 'app-calcu2',
    templateUrl: 'calcu2.page.html',
    styleUrls: ['calcu2.page.scss'],
})
export class Calcu2Page {

    operations = ['+', '-', 'x', '÷'];

    operationsValue = '';

    result = 0;

    display = 0;

    constructor() {
    }

    buttonNumericClick(number) {
        this.operationsValue += '' + number;
        this.calc();
    }

    buttonCalcClick(operationCalc) {
        if (this.isLastOperationCalc()) {
            this.operationsValue = this.operationsValue.substr(0, this.operationsValue.length - 1);
        }
        this.operationsValue += operationCalc;
    }

    buttonClearClick() {
        this.operationsValue = this.operationsValue.substr(0, this.operationsValue.length - 1);
        this.calc();
    }
    buttonClearClickAC() {
        this.operationsValue = this.operationsValue.substr(0, this.operationsValue.length * 0);
        this.calc();
    }
    buttonClearClickA() {
        this.operationsValue = this.operationsValue.substr(0, this.calc.length * 1);
        this.calc();
    }
    adPercent() {        
        this.result = (this.result  / 100);                        
    }
    

    isLastOperationCalc() {
        if (this.operationsValue.length === 0) {
            return false;
        }
        const lastElemet = this.operationsValue.substr(this.operationsValue.length - 1);
        return this.operations.indexOf(lastElemet) >= 0;
    }

    hasOperationCalc() {
        if (this.operationsValue.length === 0) {
            return false;
        }
        return this.operations.some(operation => this.operationsValue.indexOf(operation) >= 0);
    }

    calc() {
        if (this.isLastOperationCalc() || !this.hasOperationCalc()) {
            return;
        }

        let expression = this.operationsValue;
        expression = this.replaceAll(expression, 'x', '*');
        expression = this.replaceAll(expression, '÷', '/');

        this.result = evaluate(expression);
    }

    replaceAll(target, search, replacement) {
        return target.replace(new RegExp(search, 'g'), replacement);
    }

}