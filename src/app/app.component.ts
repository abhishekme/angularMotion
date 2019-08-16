import { Component,ElementRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'motionGraphics';

  contextCanv : CanvasRenderingContext2D;
  public canvas : any;
  public ctx:CanvasRenderingContext2D;
  public img: any;

  // the initial image height 
  public imgHeight = 0; 
          
  // the scroll speed 
  // an important thing to ensure here is that can.height 
  // is divisible by scrollSpeed 
  public scrollSpeed = 7; 

  ngAfterViewInit(): void {
    this.drawBackground();
  }

  public drawBackground(){

    this.canvas = document.getElementById('background'); 
  
        // The 2D Context for the HTML canvas element. It 
        // provides objects, methods, and properties to draw and 
        // manipulate graphics on a canvas drawing surface. 
        //this.ctx = this.canvas.getContext('2d'); 
          
        // canvas width and height 
        this.canvas.width = 450; 
        this.canvas.height = 450; 
          
        // create an image element 
        this.img = new Image(); 
          
        // specify the image source relative to the html or js file 
        // when the image is in the same directory as the file 
        // only the file name is required: 
        this.img.src = "./assets/imgs/bg.png"; 

        window.requestAnimationFrame(() => this.draw(this.canvas));
          
        // window.onload is an event that occurs when all the assets 
        // have been succesfuly loaded( in this case only the spacebg.png) 
        /*window.onload = () => { 
            
          
            // this is the primary animation loop that is called 60 times 
            // per second 
            function loop() 
            { 
                // draw image 1 
                this.ctx.drawImage(img, 0, imgHeight); 
          
                // draw image 2 
                this.ctx.drawImage(img, 0, imgHeight - this.canvas.height); 
          
                // update image height 
                imgHeight += scrollSpeed; 
          
                // reseting the images when the first image entirely exits the screen 
                if (imgHeight == this.canvas.height) 
                    imgHeight = 0; 
          
                // this function creates a 60fps animation by scheduling a 
                // loop function call before the 
                // next redraw every time it is called 
                window.requestAnimationFrame(loop); 
            } 
          
            // this initiates the animation by calling the loop function 
            // for the first time 
            this.loop(this.canvas);

        }*/
  }

  draw(canvas){
    this.ctx = canvas.getContext('2d'); 
    // draw image 1 
    this.ctx.drawImage(this.img, 0, this.imgHeight); 
          
    // draw image 2 
    this.ctx.drawImage(this.img, 0, this.imgHeight - this.canvas.height); 

    // update image height 
    this.imgHeight += this.scrollSpeed;  

    // reseting the images when the first image entirely exits the screen 
    if (this.imgHeight == this.canvas.height) 
        this.imgHeight = 0; 
    window.setTimeout(() => this.draw(canvas), 10000/80);
  }

  changeposition(){    
    //Do the needful
  }

} //End Component
