const colTheme = [
    {
        bg: '#ACDFFA'
    },
    {
        bg: '#FFB501'
    },
    {
        bg: '#FFAFA7'
    },
    {
        bg: '#BCD089'
    }
];

function colSel() {
    return Math.floor(Math.random() * 4);
}

function footerDate() {
    document.getElementById('footDate').textContent = new Date().getFullYear();
};

function setElementColors() {
    let rnd = colSel();
    document.getElementById('offCanvasBody').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('specialties').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('webport').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('artport').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('logoport').style.backgroundColor = colTheme[rnd].bg;
};