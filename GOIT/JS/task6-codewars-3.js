function getVillainName(birthday) {

    var monthsArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    var villains = ['The Evil','The Vile','The Cruel','The Trashy','The Despicable',
        'The Embarrassing','The Disreputable','The Atrocious','The Twirling','The Orange',
        'The Terrifying','The Awkward'                 ];

    var attribute = ['Mustache','Pickle','Hood Ornament','Raisin','Recycling Bin','Potato',
        'Tomato','House Cat','Teaspoon','Laundry Basket'];

    var birthdayMonth = birthday.slice(0,-3);
    return villains[monthsArr.indexOf(birthdayMonth)] + ' ' + attribute[birthday.substr(-1)];
}

console.log(getVillainName('November 18'));
