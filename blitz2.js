
function teilnehmer() {
    let ta = document.getElementById("ta").value
    console.log(ta)

    //window.location.href = "blitz2.html"
    let newPage = window.open("blitz2.html", '_blank')
    //if (page === "blitz2") {

    //} else {
    //    teilnehmer()
    // }

    newPage.onload = function teilnehmer2() {

        for (let i = 0; i < ta; i++) {
            const input = document.createElement("div");
            input.innerHTML = ' <input id="' + i + '" type="text" />'
            console.log(i)
            newPage.document.body.append(input);
            const br = document.createElement("br");
            br.innerHTML = " <br  />";
            newPage.document.body.append(br);
        }

        const buttonDiv = document.createElement("div");
        buttonDiv.id = "buttonDiv"
        newPage.document.body.append(buttonDiv);
        let div = newPage.document.getElementById("buttonDiv")
        const button = document.createElement("button");

        button.textContent = "Enter"
        button.id = "EnterButton"
        div.append(button);
        button.setAttribute("onclick", "submit(" + ta + ")")


    }



}



function submit(ta) {
    let newPage2 = window.open("blitz3.html", '_blank')

    newPage2.onload = function submit2() {
        console.log("dddddd:" + document.getElementById(0).value)
        PLAYER_NAMES = []
        console.log("fdafdafaf" + ta)
        for (let k = 0; k < ta; k++) {
            console.log("d" + k)
            PLAYER_NAMES.push(document.getElementById(k).value)
            console.log(PLAYER_NAMES)
        }
        console.log("qdadad")
        //console.log(randomOrder(getPairings(ta)))
        console.log(rounds2(randomOrder(PLAYER_NAMES), ta, newPage2))
    }

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

//document.addEventListener('DOMContentLoaded', (console.log(rounds2(randomOrder(PLAYER_NAMES), 4))))

function rounds2(players, number, page) {
    let rounds = []
    let players0 = []
    let players1 = []
    let players2 = []


    for (i = 0; i < number; i++) {
        players0.push(players[i])
    }
    console.log(players0)

    for (i = 0; i < players0.length / 2; i++) {
        players1[i] = players0[i]
    }
    for (i = 0; i < players0.length / 2; i++) {
        players2[i] = players0[(players0.length - 1) - i]
    }


    for (i = 0; i < number - 1; i++) {
        let round = []
        const h2 = document.createElement("div");
        h2.id = 'div' + i;
        h2.innerHTML = ' <h2> Spieltag ' + (i + 1) + '</h2>';
        page.document.body.append(h2);
        for (j = 0; j < players1.length; j++) {
            round.push(players1[j] + "-" + players2[j])
            const p = document.createElement("p")
            p.innerHTML = players1[j] + "-" + players2[j]
            page.document.getElementById('div' + i).append(p)

        }
        //console.log(round)
        rounds.push(round)
        players1.splice(1, 0, players2.shift())
        players2.push(players1.pop())


    }
    return rounds
}

//for (i = 0; i < 10; i++) console.log(rounds(randomOrder(getPairings(10)), 5))

function rounds(pairings, maxRoundSize) {

    let rounds = []
    const remainingPairings = new Set(pairings)
    while (remainingPairings.size != 0) {
        let round = []
        const asignedPlayers = new Set()
        for (let pairing of remainingPairings) {
            let players = pairing.split("-")
            if (!players.some(player => asignedPlayers.has(player))) {
                remainingPairings.delete(pairing)
                players.forEach(player => asignedPlayers.add(player))
                round.push(pairing)
                if (round.length >= maxRoundSize) break
            }
        }
        rounds.push(round)
    }
    return rounds
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
    //checkGames(randomArray)
    return randomArray

}
//console.log(randomOrder(getPairings(6)))

//randomOrder(getPairings(6))
let perfect = ['a-e', 'd-f', 'b-c', 'd-a', 'c-e', 'f-b', 'a-c', 'b-d', 'e-f', 'a-b', 'f-c', 'd-e', 'f-a', 'e-b', 'c-d']
//console.log(checkGames(randomOrder(getPairings(6))))

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