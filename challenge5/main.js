console.log("hello");

//easy
// kullanıcıdan alınan iki sayının toplamı 

let sayı1= prompt("1. sayıyı giriniz");

let sayı2 = prompt("2. sayıyı giriniz");

let toplam = Number(sayı1)+Number(sayı2);

console.log("2 sayının toplamı = " + toplam);

//medium
// Kullanıcıdan alınan bir metindeki kelime sayısını hesaplayan bir kod parçacığı yazar mısın?

let metin = prompt("metin giriniz:");

let hesap = metin.split(" ").length;

console.log("kelime sayısı: " + hesap);

// hard
//  Kullanıcının girdiği bir sayı karekökten çıkıyorsa çıktığı halini eğer çıkmıyorsa karekökten tam olarak çıkmıyor hata mesajı veren kod parçacığını yazar mısın?

let sayi = prompt("karesi alınacak sayıyı giriniz: ")

if (Math.sqrt(sayi) % 1 === 0){

  console.log("Cevap: " + Math.sqrt(sayi))

} else {

  console.log("Sayı tam olarak karekökten çıkmıyor.")

}