let randomNumber = Math.floor(Math.random() * 4) + 1;

$(document).ready(function () {
    switch (randomNumber) {
        case 1:
            $('#loader').addClass('loaded1');
            break;
        case 2:
            $('#loader').addClass('loaded2');
            break;
        case 3:
            $('#loader').addClass('loaded3');
            break;
        case 4:
            $('#loader').addClass('loaded4');
            break;
        default:
            $('#loader').addClass('loaded1');
    }

    $('canvas').addClass('canvasLoaded');
    $('.navBar').addClass('navBarLoaded');
    $('.intro').addClass('introLoaded');

    // text animation
    const text = baffle('.reveal');
    text.set({
        characters: '▓░▒ ▒/░▒░ ▓██<░ /▓░ /▒█░> ▓░▓▒ ░<▓ █░█▒ /░██',
        speed: 100,
    });
    text.start();
    text.reveal(2000, 1000);

    // navigation bar
    $('.hamBurger').click(nav);
    $('.nav-links li').click(nav);

    // adding divs for hover animation
    $('#skills .card').each(function () {
        for (let i = 0; i < 4; i++)
            $(this).prepend('<span class="borderAnimation"></span>');
    });

    // for visiting website
    $('.visit').click(function () {
        window.open($(this).attr('data-ref'), '_blank');
    });

    // for smooth scrolling
    $('#contact .container .logo').click(() => window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    }));

    $('.navBar .nav-links li a').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            document.querySelector(`#${$(this).attr('class')}`).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        })
    });

    $('.navBar .logo').click(()=> location.reload(true))
});

$(window).on('load', () => setTimeout(() => window.scrollTo(0, 0), 0));

function nav() {
    if (screen.width <= 875) {
        $('.nav-links').toggleClass('nav-active');

        // animating item list
        $('.nav-links li').each(function (index) {
            this.style.animation ?
                (this.style.animation = '') :
                (this.style.animation = `navlinkfade 500ms ease forwards ${index / 10 + 0.2}s`);
        });

        // animating the hamBurger button
        $('.hamBurger').toggleClass('toggleCancel');

        // toggling overflow when hamBurger is clicked
        if (screen.width <= 875)
            $('body').toggleClass('removeOverflow');
    }
}