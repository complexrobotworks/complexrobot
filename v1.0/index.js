const colTheme = [
    {
        bg: '#A0DBF2',
        txt: '#000000'
    },
    {
        bg: '#4EA68D',
        txt: '#FFFFFF'
    },
    {
        bg: '#A60505',
        txt: '#FFFFFF'
    },
    {
        bg: '#D93B3B',
        txt: '#FFFFFF'
    }
];

function colSel() {
    return Math.floor(Math.random() * 4);
}

function footerDate() {
    document.getElementById('footDate').textContent = new Date().getFullYear();
};

function cycleGearCol() {
    let rnd = colSel();
    document.getElementById('gear').style.color = colTheme[rnd].bg;
};

function setElementColors() {
    let rnd = colSel();
    document.getElementById('helpdiv').style.color = colTheme[rnd].txt;
    document.getElementById('helpdiv').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('helpnotlimit').style.color = colTheme[rnd].txt;
    document.getElementById('helpnotlimit').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('webport').style.color = colTheme[rnd].txt;
    document.getElementById('webport').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('artport').style.color = colTheme[rnd].txt;
    document.getElementById('artport').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('logoport').style.color = colTheme[rnd].txt;
    document.getElementById('logoport').style.backgroundColor = colTheme[rnd].bg;
    document.getElementById('building').style.color = '#D2D2D2';
    document.getElementById('band').style.color = '#000000';
    document.getElementById('portfolio').style.color = colTheme[1].bg;
    document.getElementById('logos').style.color = '#A60505';
};

setInterval(cycleGearCol, 1000);