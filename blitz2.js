
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
            let counter = 0;
            let counter2 = 0
            console.log("roundslength", rounds.length)
            for (k = 0; k < rounds.length; k++) {

                for (l = 0; l < rounds[0].length; l++) {
                    console.log("kl1", k, l)
                    console.log(rounds)
                    console.log(rounds[k][l].split("-")[0], players1[j])
                    if (rounds[k][l].split("-")[0] == players1[j]) {

                        counter++
                        console.log("counter1:" + counter)
                    }
                }
            }
            for (k = 0; k < rounds.length; k++) {

                for (l = 0; l < rounds[0].length; l++) {
                    console.log("kl2", k, l)
                    console.log(rounds)
                    console.log(rounds[k][l].split("-")[0], players2[j])
                    if (rounds[k][l].split("-")[0] == players2[j]) {

                        counter2++
                        console.log("counter2:" + counter2)
                    }
                }
            }

            console.log("beide conter", counter, counter2)
            if (counter <= counter2) {
                console.log("Teil1")
                round.push(players1[j] + "-" + players2[j])

                const p = document.createElement("p")
                p.innerHTML = players1[j] + "-" + players2[j]
                page.document.getElementById('div' + i).append(p)

                const button = document.createElement("button");
                button.textContent = "Gewonnen"
                page.document.getElementById('div' + i).append(button);
                button.setAttribute("onclick", 'addPoints("' + players1[j] + '","lose",' + number + ',event' + ')')
                button.id = "b1-" + i

                const draw = document.createElement("button");
                draw.textContent = "Remis"
                page.document.getElementById('div' + i).append(draw);
                draw.setAttribute("onclick", 'addPoints("' + players1[j] + '","' + players2[j] + '",' + number + ',event' + ')')
                draw.id = "b2-" + i

                const button2 = document.createElement("button");
                button2.textContent = "Gewonnen"
                page.document.getElementById('div' + i).append(button2);
                button2.setAttribute("onclick", 'addPoints("' + players2[j] + '","lose",' + number + ',event' + ')')
                button2.id = "b3-" + i

            } else {
                console.log("Teil2")
                round.push(players2[j] + "-" + players1[j])

                const p = document.createElement("p")
                p.innerHTML = players2[j] + "-" + players1[j]
                page.document.getElementById('div' + i).append(p)

                const button = document.createElement("button");
                button.textContent = "Gewonnen"
                page.document.getElementById('div' + i).append(button);
                button.setAttribute("onclick", 'addPoints("' + players2[j] + '","lose",' + number + ',event' + ')')
                button.id = "b1-" + i

                const draw = document.createElement("button");
                draw.textContent = "Remis"
                page.document.getElementById('div' + i).append(draw);
                draw.setAttribute("onclick", 'addPoints("' + players2[j] + '","' + players1[j] + '",' + number + ',event' + ')')
                draw.id = "b2-" + i

                const button2 = document.createElement("button");
                button2.textContent = "Gewonnen"
                page.document.getElementById('div' + i).append(button2);
                button2.setAttribute("onclick", 'addPoints("' + players1[j] + '","lose",' + number + ',event' + ')')
                button2.id = "b3-" + i
            }
        }
        //console.log(round)
        rounds.push(round)
        players1.splice(1, 0, players2.shift())
        players2.push(players1.pop())
    }


    const leaderbord = document.createElement("div")
    leaderbord.id = "leaderbord"
    page.document.body.append(leaderbord)

    for (i = 0; i < players0.length; i++) {
        const l = document.createElement("p")
        l.innerHTML = players[i] + "  " + 0
        l.id = "p" + i
        page.document.getElementById("leaderbord").append(l)
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

function adjustWidth(el) {
    el.style.width = 'auto';
    el.style.width = (el.scrollWidth + 10) + 'px';
}

function addPoints(player, player2, number, event) {
    console.log(event)

    const buttonPressed = event.target
    console.log(`Button ID: ${buttonPressed.id}`)
    let buttonI = (buttonPressed.id).split("-")[1]
    document.getElementById("b1-" + buttonI).remove();
    document.getElementById("b2-" + buttonI).remove();
    document.getElementById("b3-" + buttonI).remove();


    console.log(player, player2, number)
    let newPlayersScores = [[], []]
    for (i = 0; i < number; i++) {
        let p = document.getElementById("p" + i).innerHTML
        console.log(p)
        let split = p.split("  ");
        newPlayersScores[0].push(split[0])
        newPlayersScores[1].push(split[1])
    }
    console.log(newPlayersScores)

    if (player2 == "lose") {
        newPlayersScores[1][newPlayersScores[0].indexOf(player)] = Number(newPlayersScores[1][newPlayersScores[0].indexOf(player)]) + 1
    } else {
        newPlayersScores[1][newPlayersScores[0].indexOf(player)] = Number(newPlayersScores[1][newPlayersScores[0].indexOf(player)]) + 0.5
        newPlayersScores[1][newPlayersScores[0].indexOf(player2)] = Number(newPlayersScores[1][newPlayersScores[0].indexOf(player2)]) + 0.5
    }
    for (i = 0; i < number; i++) {
        document.getElementById("p" + i).innerHTML = newPlayersScores[0][i] + "  " + newPlayersScores[1][i]
    }
    console.log("newPlayersScores")
    console.log(newPlayersScores)
    rankPlayers(newPlayersScores)
    return newPlayersScores
}

let test1 = ["a", "b", "c", "d"]
let test2 = [1, 2, 3, 4]

//console.log(rankPlayers(test1, test2))



function rankPlayers(playersScores) {
    console.log(playersScores)

    let players = playersScores[0]
    let scores = playersScores[1]
    let finalScore = [[], []]
    /*const score = []
    for (let j = 0; j < scores.length; j++) {
        score[j] = scores[j]
    }
    console.log(score)*/
    //const playersScores = [players, score]
    /*let players = playersScores[0]
    console.log(players)
    let scores = []
    for (i = 0; i < players.length; i++) {
        scores.push(Number(playersScores[1][i]))
    }
    console.log(scores)

    let scores1 = scores.sort(function (a, b) {
        return b - a
    })

    console.log(scores1)

    let finalScore = [[], []]
    for (let i = 0; i < players.length; i++) {
        finalScore[1].push(scores1[i])

        console.log(playersScores[1].indexOf(scores1[i]))
        if (playersScores[1].indexOf(scores1[i]) != -1) {
            finalScore[0].push(playersScores[0][playersScores[1].indexOf(scores1[i])])
        } else {
            for (j = 0; j < playersScores[0].length; j++) {
                let check = true
                for (k = 0; k < finalScore[0].length; k++) {
                    if (playersScores[0][j] == finalScore[0][k]) {
                        console.log("j", j)
                        console.log("playersScores" + playersScores[0])
                        console.log(playersScores[0][j])
                        console.log("k", k)
                        console.log("finalScore" + finalScore)
                        console.log("finalscoreK:" + finalScore[0][k])

                        check = false
                        break
                    } else {
                        console.log("continue")
                        console.log("kj", k, j)
                        continue
                    }
                }
                if (check == true) {
                    console.log("finalscore", playersScores[0][j])
                    finalScore[0].push(playersScores[0][j])
                    break;

                } else {
                    console.log("continue2")
                    console.log("kj", k, j)
                    continue
                }

            }
        }
    }
    for (i = 0; i < players.length; i++) {
        document.getElementById("p" + i).innerHTML = finalScore[0][i] + "  " + finalScore[1][i]
    }
    console.log("return")
    console.log(finalScore)*/

    let combined = players.map((player, index) => ({ player, score: scores[index] }));
    console.log(combined)


    combined.sort((a, b) => b.score - a.score);


    let sortedPlayers = combined.map(item => item.player);
    let sortedScores = combined.map(item => item.score);
    console.log("sortedPlayers");
    console.log(sortedPlayers);
    console.log("sortedScores");
    console.log(sortedScores);

    finalScore[0] = sortedPlayers
    finalScore[1] = sortedScores

    for (i = 0; i < players.length; i++) {
        document.getElementById("p" + i).innerHTML = finalScore[0][i] + "  " + finalScore[1][i]
    }

    return finalScore
}


