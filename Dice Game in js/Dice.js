// Player name 
let player1="Player1";
let player2="Player2";

// change player names
 function editnames()
 {
    player1=prompt("Change Player1 name");
    player2=prompt("Change Player2 name");
    
    document.querySelector("p.Player1").innerHTML=player1;
    document.querySelector("p.Player2").innerHTML=player2;
 }

//  rolling the dice
function rollthedice(){
    setTimeout(function()
    {
        let randomnumber1=Math.floor(Math.random()*6)+1;
        let randomnumber2=Math.floor(Math.random()*6)+1;

         document.querySelector(".img1").setAttribute("src" , "dice" + randomnumber1 +".jpg")
         document.querySelector(".img2").setAttribute("src" , "dice" + randomnumber2 +".jpg")

         if(randomnumber1==randomnumber2){
            document.querySelector("h1").innerHTML="Draw!";
        
         }

         elseif(randomnumber1<randomnumber2)
         {
            document.querySelector("h1").innerHTML=(player2+"Wins!");
         }

        elseif
        {
            document.querySelector("h1").innerHTML=(player1+"WINS!");
        }

    },2500);
}

