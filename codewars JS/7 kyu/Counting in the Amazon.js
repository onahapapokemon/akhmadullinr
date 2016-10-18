function countArara(n) {
    var result = '',a = 'anane',b = 'adak';
    if (n === 1 ) return a;
    if (n % 2 == 0) {
        for (var i=1; i <=n; i+=2) {
            result += b + ' ';}
        return  result.slice(0,-1);
    }
    else if (n % 2 !== 0) {
        for (var i=1; i <=n-1; i+=2) {
            result += b + ' ';}
        return result + a;
    }
}

// http://www.codewars.com/kata/55b95c76e08bd5eef100001e/solutions/javascript


// alternative

/*

 function countArara(n) {
 //your code here
 var count = [];
 for (var i = 2; i <= n; i+=2) {
 count.push("adak");
 }
 if (n % 2 != 0) { count.push("anane"); }

 return count.join(" ");
 }
 */