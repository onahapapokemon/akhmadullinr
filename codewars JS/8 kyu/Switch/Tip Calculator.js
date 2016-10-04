function calculateTip(amount, rating) {
    var tip = 0;
    switch(rating.toLowerCase()) {
        case 'excellent': tip = Math.ceil(amount*0.2);
            break;
        case 'great': tip = Math.ceil(amount*0.15);
            break;
        case 'good': tip = Math.ceil(amount*0.1);
            break;
        case 'poor': tip = Math.ceil(amount*0.05);
            break;
        case 'terrible': tip = 0;
            break;
        default: tip = 'Rating not recognised';
    }
    return tip;
}