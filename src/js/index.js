// import axios from 'axios'
import {
    Person,
    Student
} from './common'

// axios.get('http://www.weather.com.cn/data/sk/101190408.html')
//     .then(x => console.log(x))
//     .catch(x => console.log(x))


let a = 111;
let b = 222;
var xxx = (c, d) => c * d;
console.log(xxx(a, b));

var s = new Student('ok');
s.toString();


let gg = Object.assign({},{s:123});
console.log(gg);


var promise = new Promise(function (resolve, reject) {
    // ... some code
    if (true) {
        resolve(12);
    } else {
        reject(error);
    }
}).then(x => console.log(x));