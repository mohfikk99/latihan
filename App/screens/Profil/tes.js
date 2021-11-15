const json = '{"result":true, "count":42}';
const data = [];
const jsondata = '{"result":false, "count":50}';

console.log(json);

const obj = JSON.parse(json);
data.push(obj)

console.log('data 1', data)

const obj2 = JSON.parse(jsondata);
data.push(obj2)

console.log('data 2', data)

/* [{
  result: true
},
{
  result: false
}] */

// console.log(obj);