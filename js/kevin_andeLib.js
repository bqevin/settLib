/*
//An Images rotator. Can add other elements
R=0; x1=.1; y1=.05; x2=.25; y2=.24; x3=1.6; y3=.24; x4=300; y4=200; x5=300; y5=200; 
DI=document.getElementsByTagName("img"); 
DIL=DI.length; function 
A(){for(i=0; i-DIL; i++){DIS=DI[ i ].style; 
DIS.position='absolute'; DIS.left=(Math.sin(R*x1+i*x2+x3)*x4+x5)+"px"; 
DIS.top=(Math.cos(R*y1+i*y2+y3)*y4+y5)+"px"}R++}setInterval('A()',5); void(0);
*/
//returns contents plus html elements parsed by selector
function  $(selector){
	var self = {};
	self.selector = selector;
	self.selector = document.querySelector(self.selector);
	self.html = function () {
	return self.element;
	}
return self;
}

var img = new Array(5);
        img[0] = new Image();
        img[0].src = "images/KevLife.jpg";
        img[1]=new Image();
        img[1].src = "images/KevLife2.jpg";
        img[2]=new Image();
        img[2].src = "images/KevLife3.jpg";
        img[3]=new Image();
        img[3].src = "images/MK.jpg";
        img[4]=new Image();
        img[4].src = "images/MK1.png";
        
        var num = 0;
        function next(){
            num++;
            if(num > 4){
                num = 0;
            }
            document.slider.src=img[num].src;
        }
        function prev(){
            num--;
            if(num < 0){
                num = 4;
            }
            document.slider.src=img[num].src;
        }