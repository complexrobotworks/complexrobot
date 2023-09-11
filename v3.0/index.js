const colTheme = [
    {
        logo: './roboblue.jpg',
        bg: '#122140',
        hs: '#F2522E'
    },
    {
        logo: './robogreen.jpg',
        bg: '#63D08D',
        hs: '#F23E2E'
    },
    {
        logo: './robored.jpg',
        bg: '#B13F56',
        hs: '#F2AF5C'
    }
];

function colSel() {
    return Math.floor(Math.random() * 3);
}

function footerDate() {
    document.getElementById('footDate').textContent = new Date().getFullYear();
};

function setElementColors() {
    let rnd = colSel();
    if (rnd == 0) {
        document.getElementById('botlogo').innerHTML = "<img src='./roboblue.jpg' class='img-fluid' alt='bots'>";
    };
    if (rnd == 1) {
        document.getElementById('botlogo').innerHTML = "<img src='./robogreen.jpg' class='img-fluid' alt='bots'>";
    };
    if (rnd == 2) {
        document.getElementById('botlogo').innerHTML = "<img src='./robored.jpg' class='img-fluid' alt='bots'>";
    };

    document.body.style.backgroundColor = colTheme[rnd].bg;
    



    // document.getElementById('offCanvasBody').style.backgroundColor = colTheme[rnd].bg;
    // document.getElementById('specialties').style.backgroundColor = colTheme[rnd].bg;
    // document.getElementById('webport').style.backgroundColor = colTheme[rnd].bg;
    // document.getElementById('artport').style.backgroundColor = colTheme[rnd].bg;
    // document.getElementById('logoport').style.backgroundColor = colTheme[rnd].bg;
};