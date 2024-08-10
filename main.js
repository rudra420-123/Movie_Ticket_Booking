const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');

first.addEventListener('change', function() {
    if (first.value) {
        second.disabled = false;
    } else {
        second.disabled = true;
        third.disabled = true;
        fourth.disabled = true;
    }
});

second.addEventListener('change', function() {
    if (second.value) {
        third.disabled = false;
    } else {
        third.disabled = true;
        fourth.disabled = true;
    }
});

third.addEventListener('change', function() {
    if (third.value) {
        fourth.disabled = false;
    } else {
        fourth.disabled = true;
    }
});

function displayCard() {
    let movie = first.value;
    let date = second.value;
    let seat = third.value;
    let price = fourth.value;

    if (!movie || !date || !seat || !price) {
        alert("Please select all options!");
        return;
    }
    let imgurl = "";
    if (movie == "Hustler") {
        imgurl = "https://static.tnn.in/thumb/msid-107092595,thumbsize-107572,width-1280,height-720,resizemode-75/107092595.jpg?quality=100"
    } else if (movie == "Scam 1992") {
        imgurl = "https://origin-staticv2.sonyliv.com/landscape_thumb/Scam1992_Landscape_Thumb_telugu_6apr.jpg"
    } else if (movie == "Farzi") {
        imgurl = "https://images.yourstory.com/cs/210/3fb20ae02dc911e9af58c17e6cc3d915/Shahid-Kapoor-and-Vijay-Sethupathi-Starrer-Farzi-Web-Series-Poster-1676018707048.jpg?fm=png&auto=format&w=800&blur=500"
    }
    let cardContainer = document.getElementById('cardContainer');
    cardContainer.style.display = 'block';
    let card = document.createElement('div');
    card.innerHTML = `
        <i class="fa-solid fa-xmark" id="close"></i>
        <img src="${imgurl}">
        <h3><h2>Movie Name: </h2>${movie}</h3>
        <h3><h2>Date: </h2>${date}</h3>
        <h3><h2>Seat: </h2>${seat}</h3>
        <h3><h2>Price: </h2>${price}</h3>
    `;
    cardContainer.innerHTML = ''; // Clear previous content
    cardContainer.appendChild(card);
    let close = document.getElementById('close');
    close.addEventListener('click', () => {
        cardContainer.style.display = 'none';
    })
}