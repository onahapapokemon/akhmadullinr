const mutate = (chromosome, p) => {
    var arr = chromosome.split('').map(function(a){
        if (Math.random() < p) {
            return (a === '1') ? '0' : '1';
        }
        else return a;
    });
    return arr.join('');
};