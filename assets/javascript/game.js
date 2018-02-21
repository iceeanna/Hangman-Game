var words = [
    "Seven",
    "World",
    "About",
    "Again",
    "Heart",
    "Pizza",
    "Water",
    "Happy",
    "Sixty",
    "Board",
    "Month",
    "Angel",
    "Death",
    "Green",
    "Music",
    "Fifty",
    "Three",
    "Party",
    "Piano",
    "Kelly",
    "Mouth",
    "Woman",
    "Sugar",
    "Amber",
    "Dream",
    "Apple",
    "Laugh",
    "Tiger",
    "Faith",
    "Earth",
    "River",
    "Money"
]
var wins = 0;
var losses = 0;
function start() {
    // var word = words.pop();
    var idx = Math.floor(Math.random()*words.length);
    var word = words[idx];
    words.splice(idx, 1)
    console.log(word, words);
    var hits = new Array(word.length);
    var misses = [];
    var missCount = 6;

    // prefill hits 
    hits.fill("_");
    document.getElementById('word-holder').innerHTML = hits.join('');
    document.getElementById('miss-holder').innerHTML = "";
    document.getElementById('miss-count').innerHTML = missCount;
    document.getElementById('words-left').innerHTML = words.length;
    window.onkeyup = function (e) {
        var code = e.keyCode ? e.keyCode : e.which;
        var key = e.key.toLowerCase();
        // check if letter
        if (code >= 65 && code <= 90) {
            if (word.toLowerCase().indexOf(key) > -1) {
                for (var i=0; i<word.length;i++) {
                    if (word[i].toLowerCase() === key) {
                        hits[i] = key;
                        document.getElementById('word-holder').innerHTML = hits.join('');
                    }
                }
                if (hits.indexOf("_") === -1) {
                    wins++;
                    document.getElementById('wins').innerHTML = wins;
                    alert("Congrats! You Won!");
                    start();
                }
            } else {
                if (misses.indexOf(key) === -1) {
                    misses.push(key);
                    document.getElementById('miss-holder').innerHTML = misses.join(' ');
                    document.getElementById('miss-count').innerHTML = missCount - misses.length;
                    if (misses.length >= missCount) {
                        losses++;
                        document.getElementById('losses').innerHTML = losses;
                        alert("You Lost");
                        start();
                    }
                }
            }
        }
            
    };
}
start();