

// ***header (fadein) 
const headerEl = document.querySelector('.port');
const menuEl = document.querySelector('.menu');
const menuulEl = document.querySelector('.menu ul');

window.addEventListener('scroll', function () {
    requestAnimationFrame(sc);
});

function sc() {
    let bs = window.scrollY;

    if (bs > 3200) {
        headerEl.classList.add('on');
        menuEl.classList.add('on');
        menuulEl.classList.add('on');
    } 
    else if (bs > 2400) {
        headerEl.classList.remove('on');
        menuEl.classList.remove('on');
        menuulEl.classList.remove('on');
    }
    else if (bs > 700) {
        headerEl.classList.add('on');
        menuEl.classList.add('on');
        menuulEl.classList.add('on');
    } 
    else {
        headerEl.classList.remove('on');
        menuEl.classList.remove('on');
        menuulEl.classList.remove('on');
    }
}








// scroll효과 
function handleScroll() {
    const textEl = document.getElementById('scrollText');
    const textPosition = textEl.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (textPosition < screenPosition) {
        textEl.classList.add('visible');
    }

  
    const textEl3 = document.getElementById('scrollEffect3');
    const textPosition3 = textEl3.getBoundingClientRect().top;
    const screenPosition3 = window.innerHeight / 1.5;

    if (textPosition3 < screenPosition3) {
        textEl3.classList.add('visible');
    }

    const textEl4 = document.getElementById('scrollEffect4');
    const textPosition4 = textEl4.getBoundingClientRect().top;
    const screenPosition4 = window.innerHeight / 1.5;

    if (textPosition4 < screenPosition4) {
        textEl4.classList.add('visible');
    }

    const textEl5 = document.getElementById('scrollEffect5');
    const textPosition5 = textEl5.getBoundingClientRect().top;
    const screenPosition5 = window.innerHeight / 1.5;

    if (textPosition5 < screenPosition5) {
        textEl5.classList.add('visible');
    }

    const textEl6 = document.getElementById('scrollEffect6');
    const textPosition6 = textEl6.getBoundingClientRect().top;
    const screenPosition6 = window.innerHeight / 1.5;

    if (textPosition6 < screenPosition6) {
        textEl6.classList.add('visible');
    }

 
    const textEl7 = document.getElementById('scrollEffect7');
    const textPosition7 = textEl7.getBoundingClientRect().top;
    const screenPosition7 = window.innerHeight / 1.5;

    if (textPosition7 < screenPosition7) {
        textEl7.classList.add('visible');
    }



    const textEl9 = document.getElementById('scrollEffect9');
    const textPosition9 = textEl9.getBoundingClientRect().top;
    const screenPosition9 = window.innerHeight / 1.5;

    if (textPosition9 < screenPosition9) {
        textEl9.classList.add('visible');
    }



}

window.addEventListener('scroll', handleScroll);

function txtScroll() {
    const textEl2 = document.getElementById('scrollEffect');
    const txtPosition = textEl2.getBoundingClientRect().top;
    const scrPosition = window.innerHeight / 1.4;

    if (txtPosition < scrPosition) {
        textEl2.classList.add('visible');
    }

}
window.addEventListener('scroll', txtScroll);





//*** project 호버 시 동영상
$('.project .underline').hover(function () {

    let idx = $(this).index()
    console.log(idx)

    let videos = ['', 'video/video2.mp4', 'video/video3.mp4', 'video/video.mp4']

    $('video').attr('src', videos[idx])
    $('video')[0].play();
})


// *** text-animation
document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("animated-text");
    const textArray = text.innerText.split('');
    text.innerHTML = '';

    textArray.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        text.appendChild(span);
    });

    const spans = text.querySelectorAll('span'); 

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;


        if (scrollPosition > 400) {
            spans.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('visible');
                }, index * 100);
            });
        }
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const text2 = document.getElementById("animated-text2");
    const textArray2 = text2.innerText.split(''); 
    text2.innerHTML = '';

    textArray2.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        text2.appendChild(span);
    });

    const spans2 = text2.querySelectorAll('span'); 

    window.addEventListener('scroll', function () {
        const scrollPosition2 = window.scrollY;

        if (scrollPosition2 > 800) {
            spans2.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('visible');
                }, index * 80);
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const text3 = document.getElementById("animated-text3");
    const textArray3 = text3.innerText.split(''); 
    text3.innerHTML = '';

    textArray3.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        text3.appendChild(span);
    });

    const spans3 = text3.querySelectorAll('span'); 

    window.addEventListener('scroll', function () {
        const scrollPosition3 = window.scrollY;

        if (scrollPosition3 > 3000) {
            spans3.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('visible');
                }, index * 80);
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const text4 = document.getElementById("animated-text4");
    const textArray4 = text4.innerText.split(''); 
    text4.innerHTML = '';

    textArray4.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        text4.appendChild(span);
    });

    const spans4 = text4.querySelectorAll('span'); 

    window.addEventListener('scroll', function () {
        const scrollPosition4 = window.scrollY;

        if (scrollPosition4 > 4800) {
            spans4.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('visible');
                }, index * 80);
            });
        }
    });
});




//*** go - top
const move = function (seclector) {
    const targetEl = document.querySelector(seclector)
    const bs = window.scrollY
    const targetscrollY = targetEl.getBoundingClientRect().top + bs
    window.scrollTo({
        top: targetscrollY, behavior: 'smooth'
    })
}

const scrollmove = document.querySelectorAll('[data-animation-scroll="true"]')
for (let i = 0; i < scrollmove.length; i++) {
    scrollmove[i].addEventListener('click', function () {
        const target = this.dataset.target;
        move(target)
    })
}



// *** 화살표
$(function () {
    $('.big-name').click(function () {
        $('.work-content .small-name').slideUp()
        $(this).find('.small-name').slideToggle();
        $('.work-content .arrow').removeClass('on')
        $(this).next('.arrow').addClass('on')
    })

    // *****Scroll top 높이
    $(window).scroll(function () {
        console.log($(this).scrollTop())
    })

})






//***비디오 popup창 
$(document).ready(function () {
    $('.underline').click(function () {
        let target = $(this).data('target')

        $('.popup').removeClass('on')

        $(target).addClass('on')
    })
})


$('button').click(function () {
    $('.popup').removeClass('on')
})




$(function () {
    $('.branding-category div > li').click(function(){
        $('.branding-content li').slideUp()
        $(this).find('.branding-content li').slideToggle();
        $('.branding-category abbr').removeClass('down')
        $(this).find('abbr').addClass('down');
    })
})




