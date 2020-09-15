function tinyFriend(words) {
    let longest;
    for(const word of words.split(" "))
      if(!longest || word.length > longest.length)
        longest = word;
    return longest;
 }

var name = 'Amar ace jol';
var result = tinyFriend(name);
console.log(result);