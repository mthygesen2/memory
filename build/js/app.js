(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

    Memory = function(name, img) {
    this.name = name;
    this.flipped = false;
    this.display = true;
    this.img = img;
};

  Memory.getCards = function() {
    var cardOne = new Memory ("picture1", "./img/picture1.jpg");
    var cardOneCopy = new Memory ("picture1", "./img/picture1.jpg");
    var cardTwo = new Memory ("picture2", "./img/picture2.jpg");
    var cardTwoCopy = new Memory ("picture2", "./img/picture2.jpg");
    var cards = [cardOne, cardOneCopy, cardTwo, cardTwoCopy];
    return cards;
};

 Memory.prototype.cardScramble = function(cards) {
  var scrambledArray = [];
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * (cards.length));
    var cardObj = {'card': cards[randomIndex], 'id': i };
    scrambledArray.push(cardObj);
    cards.splice(randomIndex, 1);
   }
   return scrambledArray;
};

  Memory.prototype.isFlipped = function(){
     if (this.flipped === true){
      return true;
    }
  };

  Memory.prototype.isInvisible = function(){
     if (this.display === false){
      return true;
    }
  };


  Memory.prototype.checkMatch = function(card2) {
    if (this.name === card2.name) {
      this.display = false;
      card2.display = false;
      return "match";
    }else {
      this.flipped = false;
      card2.flipped = false;
      return "nomatch";
      }
  };

  exports.checkFlipped = function(cards) {
   var flippedCards = cards.filter(isFlipped);
   if (flippedCards < 2 ){
     return "canclick";
   }else if (flippedCards == 2) {
     var result = checkMatch(flippedCards[1], flippedCards[2]);
     return result;
   }else {
     return "fail";
   }
  };

  exports.checkWin = function(cards) {
    var invisibleCards = cards.filter(isInvisble);
    if (invisibleCards.length === cards.length) {
      return true;
    }else {
      return false;
    }
  };

exports.Memory = Memory;

},{}],2:[function(require,module,exports){

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


    Memory = function(name, img) {
    this.name = name;
    this.flipped = false;
    this.display = true;
    this.img = img;
};

  Memory.getCards = function() {
    var cardOne = new Memory ("picture1", "./img/picture1.jpg");
    var cardOneCopy = new Memory ("picture1", "./img/picture1.jpg");
    var cardTwo = new Memory ("picture2", "./img/picture2.jpg");
    var cardTwoCopy = new Memory ("picture2", "./img/picture2.jpg");
    var cards = [cardOne, cardOneCopy, cardTwo, cardTwoCopy];
    return cards;
};

 Memory.prototype.cardScramble = function(cards) {
  var scrambledArray = [];
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * (cards.length));
    var cardObj = {'card': cards[randomIndex], 'id': i };
    scrambledArray.push(cardObj);
    cards.splice(randomIndex, 1);
   }
   return scrambledArray;
};

  Memory.prototype.isFlipped = function(){
     if (this.flipped === true){
      return true;
    }
  };

  Memory.prototype.isInvisible = function(){
     if (this.display === false){
      return true;
    }
  };


  Memory.prototype.checkMatch = function(card2) {
    if (this.name === card2.name) {
      this.display = false;
      card2.display = false;
      return "match";
    }else {
      this.flipped = false;
      card2.flipped = false;
      return "nomatch";
      }
  };

  exports.checkFlipped = function(cards) {
   var flippedCards = cards.filter(isFlipped);
   if (flippedCards < 2 ){
     return "canclick";
   }else if (flippedCards == 2) {
     var result = checkMatch(flippedCards[1], flippedCards[2]);
     return result;
   }else {
     return "fail";
   }
  };

  exports.checkWin = function(cards) {
    var invisibleCards = cards.filter(isInvisble);
    if (invisibleCards.length === cards.length) {
      return true;
    }else {
      return false;
    }
  };

exports.Memory = Memory;

},{"./../js/memory.js":1}]},{},[2]);
