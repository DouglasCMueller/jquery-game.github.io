$(document).ready(function() {
    
//Variables defined
var goodGuyChosen = false;
var badGuyChosen = false;

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
    console.log(goodGuyFightingValue)
    //assign name to good guy
     var goodGuyName = ($(this)).attr("dataGoodGuyImageName");
    console.log(goodGuyName);
    $("#goodGuyFighting").html(this);
    
    $("#goodGuyNameDisplayed").html(goodGuyName);
   
    }
    else{
    alert("You have already chosen a Good Guy!");
    }
 
});
$(".badGuyImageClass").on("click", function(){
    if (badGuyChosen === false) {
        badGuyChosen = true;
    //store value of each bad guy
    var badGuyFightingValue = ($(this).attr("dataBadGuyImageValue"));
    //assign numeric value to bad guy
    badGuyFightingValue = parseInt(badGuyFightingValue);
    console.log(badGuyFightingValue)
     //assign name to good guy
     var badGuyName = ($(this)).attr("dataBadGuyImageName");
    console.log(badGuyName);
    $("#badGuyFighting").append(this);
    $("#badGuyNameDisplayed").html(badGuyName);
    }
    else{
        alert("You have already chosen a Bad Guy!");
        }

});

}
startGame();
});
