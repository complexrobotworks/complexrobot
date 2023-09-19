const colTheme = [
    {
        logo: './roboblue.jpg',
        bg: '#122140',
        hs: '#F2522E',
        txt: '#05DBF2',
        ahref: '#05DBF2'
    },
    {
        logo: './robogreen.jpg',
        bg: '#63D08D',
        hs: '#F23E2E',
        txt: '#FFFFFF',
        ahref: '#F28444'
    },
    {
        logo: './robored.jpg',
        bg: '#B13F56',
        hs: '#F2AF5C',
        txt: '#F28444',
        ahref: '#F28444'
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

    const hElements = document.querySelectorAll('h1, h2, h3');
    hElements.forEach((h) => {
        h.style.color = colTheme[rnd].hs;
    });

    const pElements = document.querySelectorAll('p');
    pElements.forEach((p) => {
        p.style.color = colTheme[rnd].txt;
    });

    const aHrefz = document.querySelectorAll('a');
    aHrefz.forEach((a) => {
        a.style.color = colTheme[rnd].ahref;
    });
};