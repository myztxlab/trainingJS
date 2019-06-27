const videoData = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Mrs. White',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Rusty',
        present: false,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': false},
            {library: false}
        ]
    }
];

let filtermapfunction = (param, prop, nilai) => {
    result = [];
    let pilter = [];

    if (prop == "name")
    {
        pilter = param.filter(item => item.name.includes(nilai));
    }
    else if (prop == "present")
    {
        pilter = param.filter(item => item.present == nilai);
    }
    else
    {
        return "sorry, undefined filter!";
    }

    pilter.map((element) => {
            result.push(element.name);
        }
    )
    return result;
}

let field = "present";
let nilai = true;
let hasil_arr = filtermapfunction(videoData, field, nilai);
console.log('nama yang ' + field + ' ' + nilai + ' adalah: ' + hasil_arr);
console.log('jumlah yang ' + field + ' ' + nilai + ' adalah: ' + hasil_arr.length);
