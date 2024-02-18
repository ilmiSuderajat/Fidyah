

function lanang() {
    var umur = document.getElementById("umur").value;
    var input = document.getElementById("anak");
    var hasilHari = document.getElementById("total")
        var lanang = document.getElementById("laki");
        var pr = document.getElementById("pr");
        var label = document.getElementById("anak1");
        var baleg1 = 15;
        if (lanang.checked == true){
            
            input.style.display = "none";
            label.style.display = "none";
            function hasil(){
                var umur = document.getElementById("umur").value;
                umur -= baleg1
                hasilHari.innerHTML = umur;
            }
        }else if (lanang.checked == false){

            input.style.display = "flex";
            label.style.display = "flex";

        }else if (pr.checked == true){


        }
    }
    
    function hasil() {
        
        var umur = document.getElementById("umur").value;
        var jumlahAnak = document.getElementById("anak").value;
        var batesHaid = 53;
        var baleg = 9;
        var jumlahHaid = 84;
        
        var hasilUmur;
        var hasilHari = document.getElementById("total")
        umur = umur - baleg;
        batesHaid -= baleg;
        batesHaid = (batesHaid * jumlahHaid) + jumlahAnak * 40;
        batesHaid = umur - (batesHaid / 360);
        hasilUmur = Math.floor(batesHaid);
            hasilHari.innerHTML= "Jumlah untuk membagikan fidyah adalah " + hasilUmur + " orang."
    
    }
