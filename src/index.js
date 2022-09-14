//import { concat } from 'lodash';
import _ from 'lodash';
import { LOREM, NEV } from './szovegek/kulonleges.js';
import { veletlen } from './matek.js';
import 'bootstrap/dist/css/bootstrap.css';
import bs from 'bootstrap';

console.log("Hello");
console.log(veletlen(5,10));
console.log(NEV + ' ' + LOREM);


let t1 = [ 1, 455, 6];
let t2 = [454, 33, 1];
let t3 = [2];

let osszefuzott = _.concat(t1, t2, t3);
console.log(osszefuzott);