import _ from 'lodash';
import './assets/common.css';
function fun1(){
    const element = document.createElement('button');
    element.innerHTML = _.join(['hello','webpack','ok2323'])
    return element;
}


document.body.appendChild(fun1());