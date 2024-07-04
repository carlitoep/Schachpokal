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

        PLAYER_NAMES.push(k)
    }

    console.log(randomOrder(getPairings(ta)))

}
let PLAYER_NAMES = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
function gameName(x, y) {
    return PLAYER_NAMES[x] + "-" + PLAYER_NAMES[y]
}
let oPairings = []
function getPairings(ta) {

    const pairings = [];

    for (let y = 0; y < ta; y++) {
        for (let x = y + 1; x < ta; x++) {
            pairings.push(gameName(x, y))
        }
    }
    oPairings = pairings
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
    console.log(randomArray)
    checkGames(randomArray)
    return randomArray

}
//console.log(randomOrder(getPairings(6)))

//randomOrder(getPairings(6))
let perfect = ['a-e', 'd-f', 'b-c', 'd-a', 'c-e', 'f-b', 'a-c', 'b-d', 'e-f', 'a-b', 'f-c', 'd-e', 'f-a', 'e-b', 'c-d']
console.log(checkGames(randomOrder(getPairings(6))))

function checkGames(array2) {
    let times = 0
    let check = false;
    let arrayInBetween = []

    for (i = 0; i < array2.length / (6 / 2); i++) {
        arrayInBetween = array2.slice(0 + i * 6 / 2, 0 + (i + 1) * 6 / 2)
        times = 0

        for (j = 0; j < 6; j++) {

            times = 0
            for (k = 0; k < arrayInBetween.length; k++) {
                if (arrayInBetween[k].includes(PLAYER_NAMES[j])) {
                    times++
                    console.log(k)
                    console.log(arrayInBetween[k])
                    console.log(PLAYER_NAMES[j])
                    console.log(times)
                    if (times > 1) {
                        check = true
                        console.log("to many")
                        console.log(arrayInBetween)
                        console.log("OPairins" + oPairings)
                        randomOrder(oPairings)

                        break

                    }
                }
            }
            if (check == true) {
                break
            }
        }
        if (check == true) {
            break
        }
        console.log(arrayInBetween)

    }
    if (check == false) {
        //console.log(randomArray)
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
        return array2
    }
}