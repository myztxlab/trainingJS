let ini_array = ["huruf", 5, true, 2.5];

let ini_json = {
  "nama": "Jody",
  "umur": 33,
  "menikah": true
}

//console.log(ini_array[0]);
ini_json.nama = "irul";
//console.log(ini_json["nama"]);

// variable assignment
let ini_string ='budi';
let ini_number =10;
let ini_boolean =true;
let ini_decimal =0.3;

//console.log(typeof(ini_decimal));


//let ini_array = ["angka",0,true,1.5,["nested",'array']] ;
let ini_object = {
 "nama": "ganang",
 "umur": 10,
 "gender" : true
};
//console.log(ini_array[4][1]);
//console.log(ini_object['umur']);

ini_object.umur=100;
ini_object.lokasi="dinding";
//console.log(ini_object);

let list = [{
 "nama": "ganang",
 "umur": 10,
 "gender" : true,
  "ini_array" : ["angka",0,true,1.5,["nested",'array']]  
},{
 "nama": "irul",
 "umur": 100,
 "gender" : false,
  "ini_array" : ["angka",0,true,1.5,["nested",'array']]  
}];
console.log(list[0]['ini_array'][4][0]);



// aritmetic operator
let bil = 5;
let pen = 10;

// tambah
let tambah = bil + pen;

//kurang
let kurang = bil - pen;

//kali
let kali = bil * pen;

//bagi
let bagi = bil / pen;

//menggunakan petik satu sebagai string
let m1= "She's a great person";
//escape character dengan bantuan backslash jika menggunakan petik satu
let m2= 'She\'s a great person';

//let visitor = prompt('Siapakah namamu?');
//console.log(visitor );
