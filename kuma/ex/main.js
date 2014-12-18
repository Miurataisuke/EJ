enchant();
window.onload = function(){
var game = new Game(320,320);
game.preload("http://enchantjs.com/assets/images/chara6.gif");
game.onload = function(){
var bear = new Sprite(32, 32);
bear.image = game.assets["http://enchantjs.com/assets/images/chara6.gif"];
bear.x = 110;
bear.y = 50;
bear.frame = 10
bear.addEventListener("enterframe",function(){
bear.x -= 1;
bear.rotate(8)
bear.frame = bear.age % 2+6;
});
game.rootScene.addChild(bear);

};
game.start();
}