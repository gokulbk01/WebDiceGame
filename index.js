var randomNumber1=Math.floor(Math.random()*6) + 1;
var randomImage="dice"+randomNumber1+".png";
var randomNumber2=Math.floor(Math.random()*6) + 1;
var randomimage2="dice"+randomNumber2+".png"
var randomImgSource="images/"+randomImage;
var randomImgSource2="images/"+randomimage2;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgSource);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImgSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!"
}
else{
    document.querySelector("h1").innerHTML="It's a Tie!!"
}