var renkVer = function (n, k, c) {
    dojo.removeClass(k + "1", c);
    dojo.removeClass(k + "2", c);
    dojo.removeClass(k + "4", c);
    dojo.removeClass(k + "8", c);
    if (n == 9) {
        dojo.addClass(k + "1", c);
        dojo.addClass(k + "8", c);
    } else if (n == 8) {
        dojo.addClass(k + "8", c);
    } else if (n == 7) {
        dojo.addClass(k + "1", c);
        dojo.addClass(k + "2", c);
        dojo.addClass(k + "4", c);
    } else if (n == 6) {
        dojo.addClass(k + "2", c);
        dojo.addClass(k + "4", c);
    } else if (n == 5) {
        dojo.addClass(k + "1", c);
        dojo.addClass(k + "4", c);
    } else if (n == 4) {
        dojo.addClass(k + "4", c);
    } else if (n == 3) {
        dojo.addClass(k + "1", c);
        dojo.addClass(k + "2", c);
    } else if (n == 2) {
        dojo.addClass(k + "2", c);
    } else if (n == 1) {
        dojo.addClass(k + "1", c);
    } else {
        dojo.removeClass(k + "1", c);
        dojo.removeClass(k + "2", c);
        dojo.removeClass(k + "4", c);
        dojo.removeClass(k + "8", c);
    }
}
function setSaat() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var saatK = hour % 10;
    renkVer(saatK, "saatK", "red");
    var saatB = (hour - saatK) / 10;
    renkVer(saatB, "saatB", "red");
    var dakikaK = minute % 10;
    renkVer(dakikaK, "dakikaK", "red");
    var dakikaB = (minute - dakikaK) / 10;
    renkVer(dakikaB, "dakikaB", "red");
    var saniyeK = second % 10;
    renkVer(saniyeK, "saniyeK", "red");
    var saniyeB = (second - saniyeK) / 10;
    renkVer(saniyeB, "saniyeB", "red");
    dojo.attr("saat", "innerHTML", sifirEkle(hour) + ":" + sifirEkle(minute) + ":" + sifirEkle(second));
    window.setTimeout("setSaat()", 1000);
}
function sifirEkle(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}
dojo.ready(setSaat);