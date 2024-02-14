
// feature swiper

var swiper = new Swiper(".feature-swiper", {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
        crossFade: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});




// Plans swiper
var swiper2 = new Swiper(".plan-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    }
});


// Testimonials swiper
var swiper2 = new Swiper(".testimonial-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});


// mob menu div script
$('#menu').click(function () {
    $('.mob-menu').toggleClass('mob-menu-open');
    $('body').toggleClass('overflow-hidden');
});


// form select2

$(".commonselect").select2({
    minimumResultsForSearch: -1
});


// sign-login

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if(signUpButton){
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
}

if(signInButton){
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}


// date picker
$(function () {
    var bindDatePicker = function () {
        $(".date")
            .datetimepicker({
                format: "YYYY-MM-DD",
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-arrow-up",
                    down: "fa fa-arrow-down"
                }
            })
            .find("input:first")
            .on("blur", function () {
                // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
                // update the format if it's yyyy-mm-dd
                var date = parseDate($(this).val());

                if (!isValidDate(date)) {
                    //create date based on momentjs (we have that)
                    date = moment().format("YYYY-MM-DD");
                }

                $(this).val(date);
            });
    };

    var isValidDate = function (value, format) {
        format = format || false;
        // lets parse the date to the best of our knowledge
        if (format) {
            value = parseDate(value);
        }

        var timestamp = Date.parse(value);

        return isNaN(timestamp) == false;
    };

    var parseDate = function (value) {
        var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
        if (m)
            value =
                m[5] + "-" + ("00" + m[3]).slice(-2) + "-" + ("00" + m[1]).slice(-2);

        return value;
    };

    bindDatePicker();
});



// mob menu btn animation script
const clickx = document.getElementById('pencet');
clickx.addEventListener('click', function () {
    clickx.classList.toggle('Diam');
});
