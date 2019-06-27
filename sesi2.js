console.log("hello world");

// array function
let arr = ['helo','hai','salam'];
console.log(arr);
arr.push('aloha');
console.log(arr);
arr.unshift('oi');
console.log(arr);
let gabung =  arr.join(" ");
console.log(gabung);
let panjang_arr = arr.length;
console.log(panjang_arr);
let split = gabung.split(" ");
console.log(split);

// comparison operator
// https://www.w3schools.com/js/js_comparisons.asp

let con = 'kelas';

if (con=='kelas')
{
    console.log('ini kelas');
}
else if (con == 'ruangan')
{
    console.log('ini ruangan');
}
else
{
    console.log('ini gudang');
}

//destructuring

let obj = {
    name: 'jody',
    age: 33
}
console.log(obj);

let {name, age} = obj;
console.log(obj);

name = 'irul';
obj.age = 34;

console.log(obj);

const csv = "a,b,c,d,e";
const [a1,b1,c1,d1,e1] = csv.split(",");
console.log(csv);
console.log(a1);

// function
let ini_fungsi = () =>
{
 return "ini fungsi";
}
console.log(ini_fungsi());

let func = ini_fungsi();
console.log(func);

let fs = function ini_old (){
    return "old style";
}
console.log(fs());

let func_param = (param1,param2) => {
    //return 'ini param ' + param1 + ' ' + param2;
    return `ini param ${param1} ${param2}`;
}
let coba = func_param('1','2');
console.log(coba);

//map and filter
let belajar_map = (list) => {
    result = [];
    list.map((element, index) => {
        if (element == "sendal")
        {
            result.push('aku gak mau sendal');
        } 
        else if (index == 0)
        {
            result.push('aku suka boots');
        }
        else
        {
            result.push(element);
        }
    }
    )
    return result;
}

let list_sepatu = ['boots','sendal','sneaker','kets','kasual'];
belajar = belajar_map(list_sepatu);
console.log(belajar);

let coba_ternary = (list) => {
    let result = list.map(e => {        
        let ternary_condition = e == 'boots' ? 'aku suka boots' : `ini sisanya ${e}`;
        return ternary_condition;
    })
    return result;
}

console.log(coba_ternary(list_sepatu));

let coba_filter = (list) => {
    let pilter = list.filter(item => item == "boots");
    //pilter.push("tambahan sepatu");
    return pilter;
}

console.log(coba_filter(list_sepatu));

let coba_filter2 = (list) => {
    let pilter = list.filter(item => item.includes('boo'));
    //pilter.push("tambahan sepatu");
    return pilter;
}

console.log(coba_filter2(list_sepatu));

