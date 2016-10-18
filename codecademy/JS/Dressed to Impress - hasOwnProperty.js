var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty('shorts') === true) {
    console.log(suitcase.shorts);
}
else {
    suitcase.shorts = 'lala';
    console.log(suitcase.shorts);
}

// https://www.codecademy.com/courses/objects-ii/1/3?curriculum_id=506324b3a7dffd00020bf661