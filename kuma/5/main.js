enchant();
window.onload = function(){
var game = new Game(320,320);
game.preload("http://enchantjs.com/assets/images/chara1.gif");
game.onload = function(){
var bear = new Sprite(32, 32);
bear.image = game.assets["http://enchantjs.com/assets/images/chara1.gif"];
bear.x = 110;
bear.y = 50;
bear.frame = 6
bear.dx = 2;
bear.addEventListener("enterframe",function(){

if((bear.dx>0 && bear.x > 320-32)||(bear.dx<0&&bear.x<=0))
bear.dx = -bear.dx;
bear.x += bear.dx;
bear.frame = bear.age % 2+6;
});
game.rootScene.addChild(bear);

};
game.start();
}

