$(document).ready(function() {
    
//Variables defined
var goodGuyChosen = false;
var badGuyChosen = false;
var goodGuyName;
var badGuyName;
var randomNumber = 0;
var goodGuyNameDueling ="";
var delayButtonAlert;
var goodGuysCharactersArray =[
    {name: "Annie Oakley", image: "assets/images/annieOakley.jpg", healthpoints: 105},
    {name: "Ben Thompson", image:"assets/images/benThompson.jpg", healthpoints: 115},
    {name: "Wyatt Earp", image:"assets/images/wyattEarp.jpg", healthpoints: 125},
    {name: "Wild Bill Hickock", image:"assets/images/wildBillHickock.jpg", healthpoints: 135},
];
var badGuysCharactersArray =[
    {name: "James Butler", image: "assets/images/jamesButler.jpg", healthpoints: 100 },
    {name: "Jesse James", image:"assets/images/jesseJames.jpg", healthpoints: 110 },
    {name: "Three Fingered Jack", image:"assets/images/threeFingeredJack.jpg", healthpoints: 120 },
    {name: "John Wesley Hardin", image:"assets/images/johnWesleyHardin.jpg", healthpoints: 130}
];

//define startGame
function startGame(){
//generate good guy characters
for (var i = 0; i < goodGuysCharactersArray.length; i++){
    var goodGuyImage = $("<img>");
    goodGuyImage.addClass("goodGuyImageClass");
    goodGuyImage.attr("src",goodGuysCharactersArray[i].image);
    goodGuyImage.attr("dataGoodGuyImageValue",goodGuysCharactersArray[i].healthpoints);
    goodGuyImage.attr("dataGoodGuyImageName",goodGuysCharactersArray[i].name);
    $("#goodGuyCharacters").append(goodGuyImage);
}
//generate  bad guy characters
for (var j = 0; j < badGuysCharactersArray.length; j++){
    var badGuyImage = $("<img>");
    badGuyImage.addClass("badGuyImageClass");
    badGuyImage.attr("src", badGuysCharactersArray[j].image);
    badGuyImage.attr("dataBadGuyImageValue",badGuysCharactersArray[j].healthpoints);
    badGuyImage.attr("dataBadGuyImageName",badGuysCharactersArray[j].name);
    $("#badGuyCharacters").append(badGuyImage);
}
//enable click on good guy characters
$(".goodGuyImageClass").on("click", function(){
    if (goodGuyChosen === false) {
         goodGuyChosen = true;
    //store value of each good guy
    var goodGuyFightingValue = ($(this).attr("dataGoodGuyImageValue"));
    //assign numeric value to good guy
    goodGuyFightingValue = parseInt(goodGuyFightingValue);
    
    //assign name to good guy
    goodGuyName = ($(this)).attr("dataGoodGuyImageName");
    $("#goodGuyFighting").append(this);
    $("#goodGuyNameDisplayed").html(goodGuyName);
    }
  
    else{
    alert("You have already chosen a Good Guy!");
    }
    console.log(goodGuyName);
});
console.log(goodGuyName);
$(".badGuyImageClass").on("click", function(){
    if (badGuyChosen === false) {
        badGuyChosen = true;
    //store value of each bad guy
    var badGuyFightingValue = ($(this).attr("dataBadGuyImageValue"));
    //assign numeric value to bad guy
    badGuyFightingValue = parseInt(badGuyFightingValue);
        
     //assign name to bad guy
    badGuyName = ($(this)).attr("dataBadGuyImageName");
    
    $("#badGuyFighting").append(this);
    $("#badGuyNameDisplayed").html(badGuyName);
    }
    else{
        alert("You have already chosen a Bad Guy!");
        }
        console.log(goodGuyName);
        console.log(badGuyName);
        //start duel function on button click
    $("#startDuel").on("click", function(){
     
        $("audio#burstOfFireOne")[0].play();
       

        //create random # to see which gunfighter shoots first(and thus wins)
        var randomNumber = Math.floor(Math.random() * 2);
          
        if (randomNumber === 0) {
          //action in duelingText window for good guy winning
             $("#duelingText").append("<br><hr>" + goodGuyName + " shoots!");
            
            $("#duelingText").append("<br><hr>" + badGuyName + " shoots!");
        
             $("#duelingText").append("<br><hr>" + goodGuyName + " shoots!");
        
             $("#duelingText").append("<br><hr>" + badGuyName + " shoots!");
         
             $("#duelingText").append("<br><hr>" + goodGuyName + " shoots!");
      
             $("#duelingText").append("<br><hr>" + badGuyName + " is dead!");
        setTimeout(function(){ alert(goodGuyName + " is the best Gunfighter in the West!!!"); }, 3000);
    }
        else {
              //action in duelingText window for bad guy winning
        $("#duelingText").append("<br><hr>" + badGuyName + " shoots first!");
      
        $("#duelingText").append("<br><hr>" + goodGuyName + " shoots!");
        
        $("#duelingText").append("<br><hr>" + badGuyName + " shoots!");
        $("#duelingText").append("<br><hr>" + goodGuyName + " shoots!");
        
        $("#duelingText").append("<br><hr>" + badGuyName + " shoots!");
        
        $("#duelingText").append("<br><hr>" + goodGuyName + " is dead!");
        setTimeout(function(){ alert(badGuyName + " is the best Gunfighter in the West!!!"); }, 2000);
        }
        
        });
});
}
startGame();
});
