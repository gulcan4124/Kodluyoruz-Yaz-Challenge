console.log("hi from easy.js");
//Kullanıcının doğum tarihini alarak kaç yaşında olduğunu bulan bir algoritma yazmanızı istiyorum.
const dogumyılı = prompt("Doğum yılınız");

const yas = new Date().getFullYear()-dogumyılı;

document.write("yaşınız:"+yas);
