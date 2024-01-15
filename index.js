let homePts = 0
let guestPts = 0
let homeDspl = document.getElementById("home")
let guestDspl = document.getElementById("guest")

function add1PH() {
    homePts += 1
    homeDspl.textContent = homePts
}

function add2PH() {
    homePts += 2
    homeDspl.textContent = homePts
}

function add3PH() {
    homePts += 3
    homeDspl.textContent = homePts
}

function add1PG() {
    guestPts += 1
    guestDspl.textContent = guestPts
}

function add2PG() {
    guestPts += 2
    guestDspl.textContent = guestPts
}

function add3PG() {
    guestPts += 3
    guestDspl.textContent = guestPts
}

function newGame() {
    homePts = 0
    guestPts = 0
    homeDspl.textContent = homePts
    guestDspl.textContent = guestPts
    
}


console.log("guestDspl")
console.log("homeDspl")