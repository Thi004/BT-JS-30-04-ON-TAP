function inten () {
    let name = document.getElementById('name').value;
    document.getElementById('ten').innerHTML = name;
}

function binhphuong () {
    let a = +document.getElementById('a').value;
    let b = Math.pow(a, 2) //a * a ;
    document.getElementById('bp').innerHTML = b ;
}

function tenh1 () {
    let ten = document.getElementById('tenh1').value;
    document.getElementById('nameh1').innerHTML = '<h1>' + ten + '</h1>';
}

