var database;
var gameState = 0;
var playerCount = 0;
var player,form,game;
var bgImg;
var allPlayers;
var player1,player2,player3,player4;
var players;

function preload(){
  bgImg = loadImage("images/backgroundImg_game.jpg");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
  background("green");
  if(playerCount===4){
    game.update(1);
  }
  if(gameState===1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}