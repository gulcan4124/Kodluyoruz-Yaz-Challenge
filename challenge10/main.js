console.log("merhaba")

//easy

// Bir dizi tanımladıktan sonra bu dizinin içinden en büyük sayıyı bulan kod parçacığını yazar mısın?


    var dizi=[20,64,17,22,36,13,88,4,41,16];
    var enBüyük=dizi[0];
    for(var i=0;i<dizi.length;i++){
        if(dizi[i]>enBüyük)
        {
            enBüyük=dizi[i];
        }
    }
    console.log("en büyük sayı " + enBüyük);

    //medium

    //Bir dizi oluşturup içindeki sayıların en büyük ve en küçük değerlerini bulan ve ekrana yazdıran bir kod parçacığı yazar mısınız?

    var array = [2,4,6,8,10];
    var largest = array[0];

    for(var n=0; n<array.length; n++){
        if (array[n]>largest) {
            largest = array[n];
        }
    }
    console.log("büyük " + largest);

    let smallest = array[0];

    for(var n=0; n<array.length; n++) {
        if (array[n]<smallest) {
            smallest = array[n];
        }
    }
    console.log("küçük " + smallest)