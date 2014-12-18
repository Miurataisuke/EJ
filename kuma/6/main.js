enchant();
window.onload = function(){
var game = new Game(320, 320);
game.preload("http://enchantjs.com/assets/images/chara1.gif");
game.onload = function(){
var bears = new Array(10);
for(i=0; i < bears.length; i++){
bears[i] = new Sprite(32, 32);
bears[i].image = game.assets["http://enchantjs.com/assets/images/chara1.gif"];
bears[i].dy = 1*(i+1);
bears[i].dx = 1*(i+1);
bears[i].x = 50;
bears[i].y = 32 * i;
bears[i].frame = 5* i + 1;
bears[i].addEventListener("enterframe", function(){
if((this.dy > 0 && this.y > 320-32) || (this.dy < 0 && this.y <= 0))
this.dy = -this.dy;
this.walk();
if((this.dx > 0 && this.x > 320-32) || (this.dx < 0 && this.x <= 0))
this.dx = -this.dx;
this.walk();
});
bears[i].walk = function walk(){
this.y += this.dy;
this.x += this.dx;
if(this.age % 2 == 0){
this.frame --;
}else{
this.frame ++;
}
};
game.rootScene.addChild(bears[i]);
}
};
game.start();
}