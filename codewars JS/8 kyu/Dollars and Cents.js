function formatMoney(amount){
    if ((amount.toString().indexOf('.') == - 1)) {
        return '$' + amount.toString()+'.00';}
    else if ((amount.toString().lastIndexOf('.') == amount.toString().length-2)) {
    return '$' + amount.toString()+'0';}
    return '$' + amount;
}