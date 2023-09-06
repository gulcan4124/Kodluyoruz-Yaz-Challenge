console.log("selam")

//easy

//Kullanıcıdan aldığınız sayının tek mi çift mi olduğunu ekrana yazdıran bir kod parçacığı yazar mısın?

let sayı = prompt("Bir sayı giriniz: ")

if(sayı % 2 == 0){
    console.log( sayı + " çift bir sayıdır.")
}else{
    console.log(sayı + " tek bir sayıdır.")
}

// medium

// Bir dizi oluşturup içindeki çift sayıların toplamını hesaplayan bir kod parçacığı yazar mısınız?

let dizi = [2,3,4,5,6,7,8];


let toplam = 0;

for (let i = 1; i <= dizi.length; i++) 
{
  if (dizi[i] % 2 === 0) {
    toplam += dizi[i];
  }
}
console.log("çift sayılar toplamı " + toplam);