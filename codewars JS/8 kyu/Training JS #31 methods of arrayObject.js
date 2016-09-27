function blackAndWhite(arr){
    if (Array.isArray(arr) === false) return "It's a fake array";
    return (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) ? "It's a black array" :  "It's a white array";
}

console.log(blackAndWhite([5,13]));

// https://www.codewars.com/kata/5732b0351eb838d03300101d/solutions/javascript