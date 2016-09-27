function cutCube(volume,n){
    return (!Number.isInteger(Math.cbrt(n))) ? false : Number.isInteger(Math.cbrt(volume/n));
}

// http://www.codewars.com/kata/5733f948d780e27df6000e33/solutions/javascript/me/best_practice