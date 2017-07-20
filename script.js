var flag = 0;

function time() {
    var dt = new Date();
    return dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
}

$('#lblTime').text(time());

$(function() {
  
    setInterval(function() {
        $('#lblTime').text(time());
    }, 1000);
  
    setInterval(function() {
        var txt = $('#hacker_value').text();
        $('#hacker_value').text(txt + ' ' + Math.round(Math.random() * 10 % 1));
        $('.hacker').scrollTop($('.hacker')[0].scrollHeight + 100)
    }, 10);
  
    $('#txtLogin').keyup(function() {
        var pass = $("#txtLogin").val();
        switch (Number(flag)) {
            case 0:
                var r = "";
                var dt = new Date();
                var kq = dt.getMinutes() - dt.getHours();
                if (Number(pass) && Number(pass) == (kq - 1)) {
                    $('ul').css('display', 'block');
                    r = "Tiệp Hoàngggg ^^";
                    flag = 1;
                } else r = time() + " pass là: " + $.now();
                $('#lblResult').text(r);
                break;
            case 1:
                if (pass == 'all') {
                    $('a').css('display', 'inline-block');
                }
                break;
            default:
                break;
        }
    });
});
