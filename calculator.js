let tambah = (x,y) => {
    return x + y;
}

let kurang = (x,y) => {
    return x - y;
}

let kali = (x,y) => {
    return x * y;
}

let bagi = (x,y) => {
    return x / y;
}

let calculator = (x,sign,y) => {
    let result = "";
    if (sign == "+") {
        result = tambah(x,y);
    }else if (sign == "-") {
        result = kurang(x,y);
    }else if (sign == "*") {
        result = kali(x,y);
    }else if (sign == "/") {
        result = bagi(x,y);
    }else {
        result = 'undefined function';

    }
    return "hasilnya: " + result;
}

let cal = calculator(20,"/",5);
console.log(cal);
