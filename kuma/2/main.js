enchant();
window.onload = function(){
var game = new Game(320,320);
game.preload("http://enchantjs.com/assets/images/chara1.gif");
game.onload = function(){
var bear = new Sprite(32, 32);
bear.image = game.assets["http://enchantjs.com/assets/images/chara1.gif"];
bear.x = 110;
bear.y = 50;
game.rootScene.addChild(bear);

};
game.start();
}