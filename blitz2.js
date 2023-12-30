function teilnehmer() {
    let ta = document.getElementById("10").value
    console.log(ta)
    for (let i = ta; i > 0; i--) {
        const input = document.createElement("div");
        input.innerHTML = /*` <input id="` + i + `" type="text" />`*/ `<input id="` + i + `" type="text" >`
        console.log(i)
        document.body.append(input);
        const br = document.createElement("br");
        br.innerHTML = " <br  />";
        document.body.append(br);
    }
    const button = document.createElement("div");
    button.innerHTML = ` <button onclick="submit()">Enter`;
    document.body.append(button);


}
function submit() {
    let ta = document.getElementById("10").value
    console.log("dddddd")
    PLAYER_NAMES = []
    for (let k = ta; k > 0; k--) {

        PLAYER_NAMES.push(document.getElementById(k).value)
    }

    console.log(randomOrder(getPairings(ta)))

}
let PLAYER_NAMES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function gameName(x, y) {
    return PLAYER_NAMES[x] + "-" + PLAYER_NAMES[y]
}
function getPairings(ta) {

    const pairings = [];

    for (let y = 0; y < ta; y++) {
        for (let x = y + 1; x < ta; x++) {
            pairings.push(gameName(x, y))
        }
    }
    return pairings
}

function randomOrder(array) {
    let randomArray = []
    insertItems: for (let item of array) {
        const i = Math.floor(Math.random() * array.length)
        if (randomArray[i] == null) {
            randomArray[i] = item
            continue insertItems
        }
        for (let j = i; j < array.length; j++) {
            if (randomArray[j] == null) {
                randomArray[j] = item
                continue insertItems
            }

        }
        for (let j = 0; j < i; j++) {
            if (randomArray[j] == null) {
                randomArray[j] = item
                continue insertItems
            }

        }
        throw new Error("Unreachable")
    }
    return randomArray
}
console.log(randomOrder(getPairings(6)))