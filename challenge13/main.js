console.log("hi");
// Easy start
// Kullanıcıdan bir sayı almanızı ve bu sayının asal olup olmadığını kullanıcıya söylemenizi istiyorum. 
let text = ""
let sayı = 0;


function Asalmi() {
    let bolen = 0;
    sayı = document.getElementById('sayi').value;
    for (i = 2; i < sayı; i++) {
        if (sayı % i == 0) {
            bolen++;
        }
    }
    if (bolen == 0) {
        text = "Asal"
    } else {
        text = "Asal değil"
    }
    document.getElementById('cevap').innerHTML = text;
}

// Easy end



// Medium start
//Kullanıcıdan bir kelime almanız gerekiyor. Bu kelimenin harflerini büyük harflere dönüştüren bir program yazmanızı istiyorum. 
function Buyuk() {
    Metin = document.getElementById('metin').value;

    document.getElementById('son').innerHTML = Metin.toUpperCase();

}

//Medium end