let nav = '<ul class="nav justify-content-center">'+
    '<li class="nav-item">' +
    '<a href="index.html" class="nav-link active" href="#">Home</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#">Blog</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#">Quiz</a>' +
    '</li>' +
    '<li class="nav-item">' +
    '<a href="contact.html" class="nav-link" href="#">Kontakt</a>' +
    '</li>' +
    '</ul>';

let elem = document.querySelector(".navbar");
elem.innerHTML = '<div><nav>' +
    nav +
    '</nav></div>';