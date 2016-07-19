/**
 * Скрипт поиска имени в тексте
 */


var text = "Hello there, my name is Rusty. I'm from Russia. " +
    "I used  to work for Google. Rusty is the best. Lorem Ipsum want  to  know.  " +
    "Some text, some text again. Rusty.";
var myName = 'Rusty';
var hits = [ ];
for (i = 0; i < text.length; i++) {
    if (text.substring(i,myName.length+i) === myName) {
        for (var j = i; j < (i + myName.length); j++) {
            hits.push(text[j]);
        }
    }
}
if (hits.length === 0) {
    console.log ("Your name wasn't found");
}
else {
    console.log (hits);
}
