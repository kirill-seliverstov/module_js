import sum from './functions';
import './main.scss';

import lodash from'lodash';

let arr = ['I', 'love', 'JS'];

console.log(sum(3, 15));
console.log(arr);

console.log(lodash.join(arr, '~'));

console.log(lodash.last(arr));