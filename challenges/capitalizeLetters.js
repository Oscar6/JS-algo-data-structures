// Title Case a Sentence

function titleCase(str) {
// Creating variable to assign to newly split string
    const words = str.split(" ");
// Using for loop
    for (let i = 0; i < words.length; i++) {
// Concatenate first character in each word with lowercase letters
        words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    }
// Join all words within string
return words.join(" ");

}

console.log(titleCase("I'm a little tea pot"));