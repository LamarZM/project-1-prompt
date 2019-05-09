let count= 1;
let player1="X";
let player2="O";

// position of units 
let game= [
    "","","", // 0,1,2
    "","","", // 3,4,5
    "","","" // 6,7,8
]


function unitClick(unit){
    // 2, 4, 6,8 => x
    // 1,3,5,7,9 => o


    //when the count equal to even number add text 'x'x
    if(count %2 === 0){
        $(unit.target).text("X");
        $(unit.target).css("color", "indigo")
}
    else{
        $(unit.target).text("O");
        $(unit.target).css("color", "yellow")
    }
    let index = $(unit.target).attr("id");
    let text= $(unit.target).text();
    game[index] = text;

   $(unit.target).off("click")

    // if(unit.innerHTML === "X" || unit.innerHTML === "O"){
    //     ;
    // }
    //Who is winner?? X or O
    console.log(count);
    WinnerDetection();
    count+=1;
}

$(".unit").on("click", unitClick);

$('#access').on("click", function(){
    count = 1;
   $(".unit").text("");
   $(".unit").off("click");
   $(".unit").on("click",unitClick );
   console.log("access is running!!s")
   game= [
    "","","", // 0,1,2
    "","","", // 3,4,5
    "","","" // 6,7,8
]
});

// $('.unit').on("click", game);

// Add event to all box



//function a(name,lName){
    //console.log("Weclome " + name + " " + lName);}
//call or invoke 

//a("Ahmed","llllll");

//there could only be one winner
//let NumberOfWinners= 1;
//patterns or paths to winning the game
/////////////////////////////////////////////////////////////
//change values from 0
let winnerPath= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]




//a function that detects the winner
function WinnerDetection(){
        let value=["X", "O"];
        let win= false;
        let someOneWinner= false;
        //v = x
        //v = o
        value.forEach(function(v){
        if(game[0] === v && game[1]===v && game[2]===v){
            win= true;
            someOneWinner=true;
            // alert("player" + game[0] + "Wins")

        }else if(game[3] === v && game[4] === v && game[5]===v){
            win= true;
            someOneWinner=true;
        }else if(game[6] === v && game[7] === v && game[8]===v){
            win= true;
            someOneWinner=true;
        }else if(game[0] === v && game[3] === v && game[6]===v){
            win= true;
            someOneWinner=true;
        }else if(game[1] === v && game[4] === v && game[7]===v){
            win= true;
            someOneWinner=true;
        }else if(game[2] === v && game[5] === v && game[8]===v){
            win= true;
            someOneWinner=true;
        }else if(game[0] === v && game[4] === v && game[8]===v){
            win= true;
            someOneWinner=true;
        } else if(game[2] === v && game[4] === v && game[6]===v){
            win= true;
            someOneWinner=true;
        }
    

         if(win === true){
            swal({
                title: "Good job! " + v,
                text: "Congratulations",
                icon: "success",
                button: "Done!",
              });
           
            win = false;
        }
    });

    if(count === 9 && someOneWinner === false){
        alert("Tie");
     }

    }

        // refreshButton.addEventListener('click', function() {    
        // document.getElementById("button"+i).style.background="none";
        // counter = 0;
        // memoryMove = [];
        // });


    
            
    // if(0 === 1 && 1 === 2){
    //    console.log("Winner")
    // }
    // if(4 === 5 && 5 === 6){
    //     console.log("Winner")
    // }
    // if(7 === 8 && 8 === 9){
    //     console.log("Winner")
    // }
    // if(1 === 4 && 4 === 7){
    //     console.log("Winner")
    // }
    // if(2 === 5 && 5 === 8){
    //     console.log("Winner")
    // }
    // if(3 === 6 && 6 === 9){
    //     console.log("Winner")
    // }
    // if(1 === 5 && 5 === 9){
    //     console.log("Winner")
    // }
    // if(3 === 5 && 5 === 7){
    //     console.log("Winner")
    // }
    // else{
    //     console.log("Loser")
    // }



          

