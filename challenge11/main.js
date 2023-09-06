console.log("hi")

// easy

// Kullanıcıdan aldığınız bir sayının faktöriyelini hesaplayan kod parçacığını yazmanızı istiyorum.

let sayi = prompt("Lütfen bir sayı giriniz.");
    
let faktoriyel = 1;

if(sayi < 0) {
    console.log("Lütfen pozitif bir tamsayı giriniz!")
} else{

    for(let i = 1; i <= sayi; i++){
        faktoriyel = faktoriyel * i;
    }
    console.log("Faktöriyel : " + faktoriyel);
}



// medium

// Bir dizi oluşturup bu sayıların ortalamasını hesaplayan bir kod parçacığı yazar mısın?

let sayıDizi = [2,4,6,12,14,16,24];

let toplam = 0;

for (let i=0; i<sayıDizi.length; i++) {
    toplam += sayıDizi[i];
}

console.log("ortalama: " + toplam/sayıDizi.length);