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



$(document).ready(function () {
    // Function to open the search container
    function openMenuContainer() {
        $('body').addClass('overflow-hidden');
        $(".mob-menu").animate({
            right: 0
        }, 1000, function () {
            $(".mob-menu-inner").fadeIn(500);
        });
    }

    // Function to close the search container
    function closeMenuContainer() {
        $('body').removeClass('overflow-hidden');
        $('#pencet').removeClass('Diam');
        $(".mob-menu-inner").fadeOut(500, function () {
            $(".mob-menu").animate({
                right: '-100%' // Revert to the initial position to hide
            }, 1000);
        });
    }

    $(".mob-menu").css({ right: '-100%' });

    // Open the search container when clicking on .search-btn
    $("#menu").on("click", function () {
        openMenuContainer();
    });

    // Close the search container when clicking on #close-search
    $("#close-mobile-menu").on("click", function () {
        closeMenuContainer();
        // alert();
    });

    //////////////// ------ search div  ------ //////////////// 
    function openSearchContainer() {
        closeMenuContainer();
        $('body').addClass('overflow-hidden');
        $('.mob-menu').removeClass('mob-menu-open');
        $('#pencet').removeClass('Diam');
        $(".web-search-container").animate({
            right: 0
        }, 1000, function () {
            $(".web-search").animate({
                opacity: 1
            }, 500);
        });
    }

    // Function to close the search container
    function closeSearchContainer() {
        $('body').removeClass('overflow-hidden');
        $(".web-search").animate({
            opacity: 0
        }, 500, function () {
            $(".web-search-container").animate({
                right: '-100%' // Revert to the initial position to hide
            }, 1000);
        });
    }

    // Initial state: hide the content and position to the right
    $(".web-search").css({ opacity: 0 });
    $(".web-search-container").css({ right: '-100%' });

    // Open the search container when clicking on .search-btn
    $(".search-btn").on("click", function () {
        openSearchContainer();
    });

    // Close the search container when clicking on #close-search
    $("#close-search").on("click", function () {
        closeSearchContainer();
    });
});


// form select2

$(".commonselect").select2({
    minimumResultsForSearch: -1
});


// sign-login

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

if (signUpButton) {
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
}

if (signInButton) {
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
}

// file input
$(document).ready(function () {
    // $('.btn').on('click', function () {
    //     $('.file').trigger('click');
    // });
    $('#file-input').on('change', function () {
        var fileName = $(this)[0].files[0].name;
        $('#filename1').text(fileName);
    });

    $('#file-input2').on('change', function () {
        var fileName = $(this)[0].files[0].name;
        $('#filename2').text(fileName);
    });
})

// mob menu btn animation script
const clickx = document.getElementById('pencet');
clickx.addEventListener('click', function () {
    clickx.classList.toggle('Diam');
});


$(document).ready(function() {
    $('#telle').inputmask('9999-9999999', { placeholder: ' ' });
});

// cnic, passport, driving license


$(document).ready(function() {
    $('#cnic').inputmask('99999-9999999-9', { placeholder: ' ' });
});

$(document).ready(function () {
    // Add change event listener to the dropdown
    $('#cnic-pass').change(function () {
        // Get the selected option value
        var selectedOption = $(this).val();

        // Set the selected option value as the id of the input field
        $('.num-format').attr('id', selectedOption);

        handleOptionChange(selectedOption);

    });
});


function handleOptionChange(optionValue) {
    switch (optionValue) {
        case 'cnic':
            $('#cnic').inputmask('99999-9999999-9', { placeholder: ' ' });
            break;
        case 'passport':
            $('#passport').inputmask('AA9999999', { placeholder: ' ' });
            break;
        case 'license':
            $('#license').inputmask('99999-9999999-9999', { placeholder: ' ' });
            break;
        default:
            // Handle other cases if needed
            break;
    }
}


$(document).on('submit', '[data-contact-us="true"]', function (e) {
    e.preventDefault(); // Prevent the default form submission
    let submitButton = $(this).find('button[type="submit"]');
    toggleLoadingStylesToElement(submitButton)
    let __url = $(this).data('url');
    console.log()

    $.ajax({
        type: "POST",
        headers: {
            'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
        },
        url: __url,
        data: $(this).serialize(),
        success: function (response) {
            successCrudAction(
                '.btn-close', 'Membership created succussfully',
                '#store-form',
                '#crudModalSubmit', "{{ route('memberships.fetch') }}",
                '.table-data'
            )
        },
        error: function (errors) {
            parseError(errors, '#crudModalSubmit');
            toggleBtnLoading('#crudModalSubmit', false)
        }
    });
});


// 

if (window.scrollY > 100) {
    $(".navbar-content").addClass("navbar-fixed");
} else {
    $(".navbar-content").removeClass("navbar-fixed");
}
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $(".navbar-content").addClass("navbar-fixed");
    } else {
        $(".navbar-content").removeClass("navbar-fixed");
    }
});

// select2

$("#country").select2({
    minimumResultsForSearch: -1
});

$("#city").select2({
    minimumResultsForSearch: -1
});







