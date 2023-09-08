console.log("hello world");

// easy

// Kullanıcıdan alınan bir kelimenin uzunluğunu hesaplayan bir kod parçacığı yazar mısın?

let word = prompt("kelime giriniz:");


let uzunluk = word.length;

console.log(word + " uzunluğu " + uzunluk + " harflidir.");

// medium

//  Kullanıcıdan aldığınız bir sayının basamaklarının toplamını hesaplayan bir kod parçacığı yazar mısın?

let sayı = prompt("sayı giriniz:");
let toplam = 0;

while(sayı >0) {
    toplam += sayı %10;

    sayı= Math.floor(sayı / 10);

}
console.log("basamaklar toplamı: " + toplam);



