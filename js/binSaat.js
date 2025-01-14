var renkVer = function (n, k, c) {
  // Seçicileri jQuery'den DOM querySelector'a çeviriyoruz
  let elements = [
    document.querySelector(k + "1"),
    document.querySelector(k + "2"),
    document.querySelector(k + "4"),
    document.querySelector(k + "8"),
  ];

  // Önce tüm sınıfları kaldır
  elements.forEach((el) => {
    if (el) el.classList.remove(c);
  });

  // Sayıya göre gerekli sınıfları ekle
  switch (n) {
    case 9:
      elements[0]?.classList.add(c); // 1
      elements[3]?.classList.add(c); // 8
      break;
    case 8:
      elements[3]?.classList.add(c); // 8
      break;
    case 7:
      elements[0]?.classList.add(c); // 1
      elements[1]?.classList.add(c); // 2
      elements[2]?.classList.add(c); // 4
      break;
    case 6:
      elements[1]?.classList.add(c); // 2
      elements[2]?.classList.add(c); // 4
      break;
    case 5:
      elements[0]?.classList.add(c); // 1
      elements[2]?.classList.add(c); // 4
      break;
    case 4:
      elements[2]?.classList.add(c); // 4
      break;
    case 3:
      elements[0]?.classList.add(c); // 1
      elements[1]?.classList.add(c); // 2
      break;
    case 2:
      elements[1]?.classList.add(c); // 2
      break;
    case 1:
      elements[0]?.classList.add(c); // 1
      break;
  }
};

function setSaat() {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  var saatK = hour % 10;
  renkVer(saatK, "#saatK", "red");
  var saatB = Math.floor(hour / 10);
  renkVer(saatB, "#saatB", "red");

  var dakikaK = minute % 10;
  renkVer(dakikaK, "#dakikaK", "red");
  var dakikaB = Math.floor(minute / 10);
  renkVer(dakikaB, "#dakikaB", "red");

  var saniyeK = second % 10;
  renkVer(saniyeK, "#saniyeK", "blue");
  var saniyeB = Math.floor(second / 10);
  renkVer(saniyeB, "#saniyeB", "blue");

  // jQuery html() yerine innerHTML kullanıyoruz
  document.getElementById("saat").innerHTML =
    sifirEkle(hour) + ":" + sifirEkle(minute) + ":" + sifirEkle(second);
}

function sifirEkle(number) {
  return number < 10 ? "0" + number : number.toString();
}

// Her saniye setSaat fonksiyonunu çalıştır
setInterval(setSaat, 1000);

setSaat();
