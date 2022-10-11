// alert("balans: 1000 azn")
// let balans = 1000;
// if(confirm("Balans artirmaq isteyirsiniz mi?")){
//    var pul = prompt();
//    if(isNaN(pul)){
//      alert("get hoppan")
//    }
//    else{
//     var cavab;
//     cavab =Number( balans)+ Number(pul) 
//     alert(cavab);
//    }
  
// }

var ad = prompt("Username:");
let arr = ["Ravil","Eli","Mehemmed"];


    
    for (let i = 0; i < arr.length; i++) {
        
        for (let index = 0; index <arr.length; index++) {
            
            if(arr[index]==ad){
                alert("Bele ad var!!!") 
            }
            
        }
        
        arr.push(ad);
        ad = prompt("Username:");
    }


 
