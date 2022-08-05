const body = document.querySelector("body");
const button = document.querySelector("button");
const colors= ["#194c8a" , "#550c5e" ,"#4eb314" , "#18a3ad" ,"pink","#a82808" ,"#a8a008" , "#a8082e" ,"#249e47"]
button.addEventListener("click" , changeBackground);

let sıra = 0;

function changeBackground () {
// Rast gele renk seçme

/*const rastGele = Math.floor(Math.random()* colors.length);
const secilenRenk = colors [rastGele]   
console.log(rastGele,secilenRenk);
body.style.backgroundColor=secilenRenk
*/

// Sırayla renk seçme


console.log(sıra);
if(sıra == 7) sıra = 0;
const secilenRenk = colors [sıra];
sıra++;
body.style.backgroundColor = secilenRenk;
}
