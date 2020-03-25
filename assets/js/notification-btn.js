const formnoti = document.querySelector('.notification');
const showform = document.querySelector('.notiForm');
formnoti.onclick = function () {
    showform.classList.toggle('show');
    document.addEventListener('click', function (event) {
        if (event.target.closest(".notification") || event.target.closest(".notiForm")) {
            return;
        } else {
            const getShow = document.getElementsByClassName('show');
            if (getShow[0]) {
                showform.classList.remove('show');
            }
        }
    })
}

$(function () {
    var fixed = document.getElementById('fixed'), overflow;
    $(window).on('load resize', function () {
        overflow = fixed.scrollHeight - $('#fixed').height();
    });
    jQuery(fixed).on('touchmove', function () {
        if (overflow) return true;
        else return false;
    });
});

//D9o1ng Notification
