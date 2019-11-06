$(document).ready(function() {

    //Variables defined


var goodGuysCharactersArray =[
    {name: "Annie Oakley", image: "assets/images/annieOakley.jpg", healthpoints: 100},
    {name: "Ben Thompson", image:"assets/images/benThompson.jpg", healthpoints: 110},
    {name: "Wyatt Earp", image:"assets/images/wyattEarp.jpg", healthpoints: 120},
    {name: "Wild Bill Hickock", image:"assets/images/wildBillHickock.jpg", healthpoints: 130},
];
var badGuysCharactersArray =[
    {name: "James Butler", image: "assets/images/jamesButler.jpg", healthpoints: 50 },
    {name: "Jesse James", image:"assets/images/jesseJames.jpg", healthpoints: 40 },
    {name: "Three Fingered Jack", image:"assets/images/threeFingeredJack.jpg", healthpoints: 30 },
];
//define startGame
function startGame(){
//generate good guy characters
for (var i = 0; i < goodGuysCharactersArray.length; i++){
    var goodGuyImage = $("<img>");
    goodGuyImage.addClass("goodGuyImageClass");
    goodGuyImage.attr("src",goodGuysCharactersArray[i].image);
    goodGuyImage.attr("dataGoodGuyImageValue",goodGuysCharactersArray[i].healthpoints);
    $("#goodGuyCharacters").append(goodGuyImage);
    
    
}
//generate  bad guy characters
for (var j = 0; j < badGuysCharactersArray.length; j++){
    var badGuyImage = $("<img>");
    badGuyImage.addClass("badGuyImageClass");
    badGuyImage.attr("src", badGuysCharactersArray[j].image);
    badGuyImage.attr("dataBadGuyImageValue",badGuysCharactersArray[j].healthpoints);
    $("#badGuyCharacters").append(badGuyImage);
}
//enable click on good guy characters
$(".goodGuyImageClass").on("click", function(){
    //store value of each gem
    var goodGuyFightingValue = ($(this).attr("dataGoodGuyImageValue"));
    //assign numeric value to gem
    goodGuyFightingValue = parseInt(goodGuyFightingValue);
    console.log(goodGuyFightingValue)
    $("#goodGuyFighting").append(this);

});
$(".badGuyImageClass").on("click", function(){
    //store value of each gem
    var badGuyFightingValue = ($(this).attr("dataBadGuyImageValue"));
    //assign numeric value to gem
    badGuyFightingValue = parseInt(badGuyFightingValue);
    console.log(badGuyFightingValue)
    $("#badGuyFighting").append(this);

});
}
startGame();
});
