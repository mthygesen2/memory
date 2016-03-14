
var memories = require('./../js/memory.js').Memory;

var cards = Memory.getCards();


$(document).ready(function(){

console.log(cards);

var scrambledArray = Memory.prototype.cardScramble(cards);

console.log(scrambledArray);

  for (var i = 0; i <= scrambledArray.length - 1; i++) {
    $("#card" + i).append("<img src='" + scrambledArray[i].card.img + "' style='display:none' id='" + scrambledArray[i].id + "'><img src='./img/square.jpg'>");
   }

 $("#card0").click(function() {
    $(this).find('img').toggle();
    console.log($((this).children()[0]).attr('id'));
});

$("#card1").click(function() {
   $(this).find('img').toggle();
});

$("#card2").click(function() {
   $(this).find('img').toggle();
});

$("#card3").click(function() {
   $(this).find('img').toggle();
});


});
