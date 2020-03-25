
//Phần slide tấm bảng màu đen bên trái
var phantucantheodoi = document.querySelector('.blackBoard')
var theodoi = scrollMonitor.create(phantucantheodoi);
var trangthai = 'chuachay';
theodoi.enterViewport(function () {
    if (trangthai == 'chuachay') {
        trangthai = 'dachay';
        phantucantheodoi.classList.add('motionBoard');
    }
});
theodoi.exitViewport(function () {
});


var trangthai1 = 'chuachay';
var phantucantheodoi1 = document.querySelector('.motionSkills')
var theodoi1 = scrollMonitor.create(phantucantheodoi1);
theodoi1.enterViewport(function () {
    if (trangthai1 == 'chuachay') {
        trangthai1 = 'dachay';
        phantucantheodoi1.classList.add('motion-skills');
    }
});
theodoi1.exitViewport(function () {
});