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
/*function liste() {
    let sp = document.getElementById("10").value
    for (let i = sp; i > 0; i--) {
        const h2 = document.createElement("h2");
        h2.innerHTML = " Spieltag " + (sp - i + 1);
        document.body.append(h2)
    }
}*/
function submit() {
    let ta = document.getElementById("10").value
    console.log("dddddd")
    people = []
    for (let i = ta; i > 0; i--) {

        people.push(document.getElementById(i).value)
    }

    games = []

    console.log(people)
    console.log(people.length)
    pl = people.length

    alg()

}
function alg() {
    let ta = document.getElementById("10").value
    //let games = []

    //let people = [a, b, c, d]
    if (games.length < (pl - 1) * pl || games.length == null) {
        let l = people[Math.round(Math.random() * (people.length - 1))]
        let m = people[Math.round(Math.random() * (people.length - 1))]
        //console.log("l" + l)
        //console.log("m" + m)
        if ((l == m) == false && games.includes(l + " - " + m) == false && (l == undefined) == false && (m == undefined) == false

        ) {
            console.log(l + " - " + m)
            const h4 = document.createElement("h4");
            h4.innerHTML = l + " - " + m;
            document.body.append(h4)
            const br = document.createElement("br");
            br.innerHTML = " <br  />";
            document.body.append(br);
            games.push(l + " - " + m)
            games.push(m + " - " + l)
            console.log(people)
            Array.prototype.remove = function (value) {
                this.splice(this.indexOf(value), 1);
            }
            people.remove(l)
            people.remove(m)


            //delete people[people.indexOf(l)]
            //delete people[people.indexOf(m)]
            console.log(games)
            console.log(people)
            if (people.length >= 1) {
                //console.log("pl" + people.length)
                alg()
            } else {
                const h2 = document.createElement("h2");
                h2.innerHTML = " Spieltag " + (games.length / pl);
                document.body.append(h2)
                people.length = 0
                console.log(people)
                for (let i = ta; i > 0; i--) {

                    people.push(document.getElementById(i).value)
                }
                console.log("if else" + people)
                alg()
            }
        } else {
            //console.log("if1else" + l + "dd" + m)
            //console.log("games" + games.includes(l + " - " + m))

            /*for (r = people.length - 1; r > 0; r--) {
                if ((l == people[r]) == false && games.includes(l + " - " + people[r]) == false && (l == undefined) == false && (people[r] == undefined) == false) {
                    break;
                }
            }
            if (r == 0) {
                for (q = (pl - people.length) * 2; q > 0; q--) {
                    let f = games.pop()
                }
                people.length = 0
                console.log(people)
                for (let i = ta; i > 0; i--) {

                    people.push(document.getElementById(i).value)
                }
                console.log("if else" + people)
            }*/
            alg()
        }
    } else {
        console.log("finsished" + games.length)
    }
}