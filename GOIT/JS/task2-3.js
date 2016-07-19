var login = prompt('Введите логин');
if (login === 'admin') {
    var password = prompt('Введите пароль');
    if (password === 'passw0rd') {
        alert('Welcome home');
    }
    else if (password === null) {
        alert('Canceled');
    }
    else {
        alert('Wrong password');
    }
}
else if (login === null) {
    alert('Canceled');
}
else {
    alert('Access denied');
}
