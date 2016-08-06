function cutString (str) {
    if (str.length >= 20) {
        return str.substring(0,20) + '...';
    }
    return str;
}
console.log(cutString('Каждый новый миг -  это еще один шанс изменить мир'));
