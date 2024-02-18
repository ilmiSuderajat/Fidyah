
    
    function hasil() {
        
        var umur = document.getElementById("umur").value;
        var jumlahAnak = document.getElementById("anak").value;
        var batesHaid = 53;
        var baleg = 9;
        var jumlahHaid = 84;
         if( umur == ""){

                alert("Masukan Umur Dipit")
                hasilHari.style.display = "none"
            }else if (jumlahAnak == ""){

                alert("Masukan Jumlah Anak Dipit")
            }
            
            
            
            else {


                var hasilUmur;
                var hasilHari = document.getElementById("total")
                umur = umur - baleg;
                batesHaid -= baleg;
                batesHaid = (batesHaid * jumlahHaid) + jumlahAnak * 40;
                batesHaid = umur - (batesHaid / 360);
                hasilUmur = Math.floor(batesHaid);
                    hasilHari.innerHTML= "Jumlah untuk membagikan fidyah adalah " + hasilUmur + " orang."

            }
    

           
    }
