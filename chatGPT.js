let PLAYER_NAMES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let oPairings = [];

function teilnehmer() {
    let ta = document.getElementById("10").value;
    console.log(ta);
    for (let i = ta; i > 0; i--) {
        const input = document.createElement("div");
        input.innerHTML = `<input id="${i}" type="text" />`;
        console.log(i);
        document.body.append(input);
        const br = document.createElement("br");
        document.body.append(br);
    }
    const button = document.createElement("div");
    button.innerHTML = `<button onclick="submit()">Enter</button>`;
    document.body.append(button);
}

function submit() {
    let ta = document.getElementById("10").value;
    console.log("submit called");
    PLAYER_NAMES = [];
    for (let k = 1; k <= ta; k++) {
        let playerName = document.getElementById(k).value;
        PLAYER_NAMES.push(playerName);
    }
    console.log(randomOrder(getPairings(ta)));
}

function gameName(x, y) {
    return PLAYER_NAMES[x] + "-" + PLAYER_NAMES[y];
}

function getPairings(ta) {
    const pairings = [];
    for (let y = 0; y < ta; y++) {
        for (let x = y + 1; x < ta; x++) {
            pairings.push(gameName(x, y));
        }
    }
    oPairings = pairings;
    return pairings;
}

function randomOrder(array, maxRetries = 100) {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        let randomArray = new Array(array.length);
        let success = true;
        for (let index = 0; index < array.length; index++) {
            let item = array[index];
            let i;
            let counter = 0;
            do {
                i = Math.floor(Math.random() * array.length);
                counter++;
                if (counter > array.length) {
                    success = false;
                    break;
                }
            } while (randomArray[i] !== undefined);
            if (!success) break;
            randomArray[i] = item;
        }
        if (success && !checkGames(randomArray)) {
            return randomArray;
        }
    }
    throw new Error("Failed to generate a valid random order within the retry limit.");
}

function checkGames(array) {
    const gamesPerRound = PLAYER_NAMES.length / 2;
    for (let i = 0; i < array.length / gamesPerRound; i++) {
        let arrayInBetween = array.slice(i * gamesPerRound, (i + 1) * gamesPerRound);
        let playerCounts = Array(PLAYER_NAMES.length).fill(0);
        for (let game of arrayInBetween) {
            for (let j = 0; j < PLAYER_NAMES.length; j++) {
                if (game.includes(PLAYER_NAMES[j])) {
                    playerCounts[j]++;
                    if (playerCounts[j] > 1) {
                        return true; // Check failed
                    }
                }
            }
        }
    }
    return false; // Check passed
}

// Example initialization
console.log(randomOrder(getPairings(6)));
