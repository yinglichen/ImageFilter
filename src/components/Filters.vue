<template>
    <div id='filterPage'>
        <div id='filter' v-myfilter >
             <div id='originalPic'></div>
             <div id='cutPart'>

             </div>
             <div id='select_filter'>
                <ul style="display:flex;">
                    <li id='originPhoto'>
                      <p>原图</p>
                    </li>
                    <li id='filter1'>
                        <p>黑白滤镜</p>
                    </li>
                    <li id='filter2'>
                        <p>反向滤镜</p>
                    </li>
                    <li id='filter3'>
                        <p>冰冻滤镜</p>
                    </li>
                    <li id='filter4'>
                        <p>连环画滤镜</p>
                    </li>
                    <li id='filter5'>
                        <p>熔铸滤镜</p>
                    </li>
                    <li id='filter6'>
                        <p>褐色滤镜</p>
                    </li>
                    <li id='filter7'>
                       <p>怀旧滤镜</p>
                    </li>
                    <li id='filter8'>
                        <p>高斯模糊滤镜</p>
                    </li>
                    <li id='filter9'>
                        <p>马赛克滤镜</p>
                    </li>
                    <li id='filter10'>
                        <p>浮雕效果</p>
                    </li>
                </ul>
             </div>
        </div>
    </div>
</template>
<script>
import png from '@/assets/images/imgDemo.jpeg'
import { setTimeout } from 'timers'; 
import { endianness } from 'os';
import { constants } from 'fs';
export default {
    install(Vue){
        Vue.directive('myfilter',{
            // inserted:function(el){
            //      start(el)
            // }
        })},
        data(){
            return{
              imageUrl:null,
              id:0,
              file:[],
              myInput:null,
              resultData:null,
              flag:false,
              reader:null,
              ctx:null,
              ctx1:null,
              ctx2:null,
              ctx3:null,
              ctx4:null,
              ctx5:null,
              ctx6:null,
              ctx7:null,
              ctx8:null,
              ctx9:null,
              ctx10:null,
              ctx11:null,
              waveImage:null,
              imgSrc:null,
              canvasHeight:null,
              canvasWidth:null, 
              canvas1Width:null,
              canvas1Height:null,
              canvas2Width:null,
              canvas2Height:null,
    canvas3Height:null,
    canvas3Width:null,
    canvas4Height:null,
    canvas4Width:null,
    canvas5Height:null,
    canvas5Width:null,
    canvas6Height:null,
    canvas6Width:null,
    canvas7Height:null,
    canvas7Width:null,
    canvas8Height:null,
    canvas8Width:null,
    canvas9Height:null,
    canvas9Width:null,
    canvas10Height:null,
    canvas10Width:null,
    canvas11Height:null,
    canvas11Width:null,
    needAnimate:false,
    flag:false,
    imgData:null,
    imgData1:null,
    imgData2:null,
    imgData3:null,
    imgData4:null,
    imgData5:null,
    imgData6:null,
    imgData7:null,
    imgData8:null,
    imgData9:null,
    data:null,
    originalPic:null,
    filter1:null,
    filter2:null,
    filter3:null,
    filter4:null,
    filter5:null,
    filter6:null,
    filter7:null,
    filter8:null,
    filter9:null,
    filter10:null,
    selectedFilter:null,
    photo:null,
    canvas1:null,
    dataUrl:'',
    r:0, //压缩比
    wtemp:0, 
    htemp:0, 
    img_width:0,
    img_height:0,
    // 裁切
    x:0, //点击canvas x 鼠标地址
    y:0, //点击canvas y 鼠标地址
    xV:0, //鼠标移动 x距离
    yV:0, //鼠标移动 y距离
    nX:0, //原始坐标点 图像x
    nY:0, //原始坐标点 图像y
    scale:1.5, //放大比例 
    deg:0, //旋转角度
            } 
    },
    props:{
        img:String,
         clipperImgWidth:{
             type:Number,
             default:500
         },
         clipperImgHeight:{
             type:Number,
             default:200
         }
    },

    methods:{
    filter(){ 
     this.changePic()      
     this.bigOriginPhote() // 大图
     this.originPhoto( )//原图
     this.blackWhite( )//黑白滤镜              
     this.reverse( )//反向滤镜          
     this.frozen( )// 冰冻滤镜  
     this.comic( )// 连环画滤镜 
     this.casting( ) //熔铸滤镜 
     this.brown( )  // 褐色滤镜  
     this.old( )  // 怀旧滤镜     
     this.blurH( )//高斯模糊滤镜      
     this.mosaic( )//马赛克滤镜     
     this.emboss( ) //浮雕滤镜
    },
    init (callback, filter) {
    this.photo=png
    this.originalPic=document.getElementById('originalPic')
    this.filter1=document.getElementById('filter1')
    this.filter2=document.getElementById('filter2')
    this.filter3=document.getElementById('filter3')
    this.filter4=document.getElementById('filter4')
    this.filter5=document.getElementById('filter5')
    this.filter6=document.getElementById('filter6')
    this.filter7=document.getElementById('filter7')
    this.filter8=document.getElementById('filter8')
    this.filter9=document.getElementById('filter9')
    this.filter10=document.getElementById('filter10')
    var filter11=document.getElementById('originPhoto')

// 大图
        this.canvas1= document.createElement('canvas');
        if (!this.canvas1.getContext) return;
        this.ctx = this.canvas1.getContext('2d');  
        this.canvasHeight=400;
        this.canvasWidth=600; 
        this.canvas1.setAttribute('width', this.canvasWidth);
        this.canvas1.setAttribute('height', this.canvasHeight);
        this.originalPic.appendChild(this.canvas1);
// 原图
       var canvasOrigin=document.createElement('canvas');
       this.ctx11=canvasOrigin.getContext('2d');
       this.canvas11Width=100;
       this.canvas11Height=100;
       canvasOrigin.setAttribute('width',this.canvas11Width)
       canvasOrigin.setAttribute('height',this.canvas11Height)  
       filter11.appendChild(canvasOrigin)      

//滤镜1 - 黑白
        var canvas1=document.createElement('canvas');
        this.ctx1=canvas1.getContext('2d');
        this.canvas1Width=100;
        this.canvas1Height=100;
        canvas1.setAttribute('width', this.canvas1Width);
        canvas1.setAttribute('height', this.canvas1Height);
        this.filter1.appendChild(canvas1);
//滤镜2 - 反向
        var canvas2=document.createElement('canvas');
        this.ctx2=canvas2.getContext('2d');
        this.canvas2Width=100;
        this.canvas2Height=100;
        canvas2.setAttribute('width', this.canvas2Width);
        canvas2.setAttribute('height', this.canvas2Height);
        this.filter2.appendChild(canvas2); 
//滤镜3 - 冰冻
        var canvas3=document.createElement('canvas');
        this.ctx3=canvas3.getContext('2d');
        this.canvas3Width=100;
        this.canvas3Height=100;
        canvas3.setAttribute('width',this.canvas3Width);
        canvas3.setAttribute('height',this.canvas3Height);
        this.filter3.appendChild(canvas3)        
//滤镜4 - 连环画
        var canvas4=document.createElement('canvas');
        this.ctx4=canvas4.getContext('2d');
        this.canvas4Width=100;
        this.canvas4Height=100;
        canvas4.setAttribute('width',this.canvas4Width);
        canvas4.setAttribute('height',this.canvas4Height);
        this.filter4.appendChild(canvas4)              
//滤镜5 - 熔铸   
        var canvas5=document.createElement('canvas');
        this.ctx5=canvas5.getContext('2d');
        this.canvas5Width=100;
        this.canvas5Height=100;
        canvas5.setAttribute('width',this.canvas5Width);
        canvas5.setAttribute('height',this.canvas5Height);
        this.filter5.appendChild(canvas5)  
//滤镜6 - 褐色
        var canvas6=document.createElement('canvas');
        this.ctx6=canvas6.getContext('2d');
        this.canvas6Width=100;
        this.canvas6Height=100;
        canvas6.setAttribute('width',this.canvas6Width);
        canvas6.setAttribute('height',this.canvas6Height);
        this.filter6.appendChild(canvas6)  

//滤镜7 - 怀旧
        var canvas7=document.createElement('canvas');
        this.ctx7=canvas7.getContext('2d');
        this.canvas7Width=100;
        this.canvas7Height=100;  
        canvas7.setAttribute('width',this.canvas7Width);
        canvas7.setAttribute('height',this.canvas7Height);
        this.filter7.appendChild(canvas7)    
//滤镜8 - 高斯模糊
        var canvas8=document.createElement('canvas');
        this.ctx8=canvas8.getContext('2d');
        this.canvas8Width=100;
        this.canvas8Height=100;  
        canvas8.setAttribute('width',this.canvas8Width);
        canvas8.setAttribute('height',this.canvas8Height);
        this.filter8.appendChild(canvas8)  
//滤镜9 - 马赛克
        var canvas9=document.createElement('canvas');
        this.ctx9=canvas9.getContext('2d');
        this.canvas9Height=100;
        this.canvas9Width=100;
        canvas9.setAttribute('width',this.canvas9Width);
        canvas9.setAttribute('height',this.canvas9Height);  
        this.filter9.appendChild(canvas9)                         
//滤镜10 - 浮雕
        var canvas10=document.createElement('canvas');
         this.ctx10=canvas10.getContext('2d');
         this.canvas10Height=100;
         this.canvas10Width=100;
        canvas10.setAttribute('width',this.canvas10Width)
        canvas10.setAttribute('height',this.canvas10Height)
        this.filter10.appendChild(canvas10)
       this.waveImage = new Image();
       this. waveImage.onload = ()=>{ 
            this.waveImage.onload = null;
            callback(this.filter);
        }       
         this.waveImage.src =this.photo; 
         if(this.dataUrl==''){
          this.$emit('listenToChildEvent',this.waveImage) 
         } 
           
    }, 
  foo(list){
    for(let i=0,len=list.length;i<len;i++){
        list[i].onclick=()=>{ 
           this.selectedFilter=list[i].id
           this.filter(this.selectedFilter)
        }
    }
},
bigOriginPhote(selected){
         this.dataUrl? this.maxMin():
         this.ctx.drawImage( this.waveImage, 0,0);
         this.imgData= this.ctx.getImageData(0,0, this.canvasWidth, this.canvasHeight);
         this.data= this.imgData.data; 
          
        
        switch( this.selectedFilter){
            case 'filter1':
             this.bW( this.data); 
             this.ctx.putImageData( this.imgData,0,0);
            break;
            case 'filter2':
             this.revCount( this.data);
             this.ctx.putImageData( this.imgData,0,0);
            break;
            case 'filter3':
             this.froCount( this.imgData);
             this.ctx.putImageData( this.imgData,0,0);
            break;
            case 'filter4':
             this.comicCount( this.imgData);
             this.ctx.putImageData( this.imgData,0,0);
            break;
            case 'filter5':
             this.castingCount( this.imgData);
             this.ctx.putImageData( this.imgData,0,0);
            break;
            case 'filter6':
             this.brownCount( this.imgData);
             this. ctx.putImageData( this.imgData,0,0);
            break;
            case 'filter7':
             this.oldCount( this.imgData);
             this.ctx.putImageData( this.imgData,0,0);
            break;
            case 'filter8':
             this.blurHCount( this.ctx, this.data, this.canvasHeight, this.canvasWidth);
             this.ctx.putImageData( this.imgData,0,0);
            break;
            case 'filter9':
             this.mosaicCount( this.ctx, this.canvasWidth, this.canvasHeight, this.imgData);
            break;
            case 'filter10':
             this.embossCount( this.data, this.imgData);
             this.ctx.putImageData( this.imgData,0,0);
            break; 
        }
    },
     maxMin(){
        if(this.dataUrl){
             this.img_width=this.dataUrl.width;
             this.img_height=this.dataUrl.height;
             var wtemp=this.img_width;
             var htemp=this.img_height;
           
         if(this.img_width>this.canvasWidth && this.img_height>this.canvasHeight){
            //如果宽高都大于canvas
            this.r=this.img_width/this.canvasWidth;
            
            if((this.img_height/this.r)<this.canvasHeight){
                this.r=this.img_height/this.canvasHeight
            }
             wtemp=Math.ceil(this.img_width/this.r);
             htemp=Math.ceil(this.img_height/this.r);
            this.resizeImage( wtemp, htemp);
        }else{ // 只要一边小于，就等比放大
           if(this.img_width<this.canvasWidth && this.img_height<this.canvasHeight){
               //宽高都小于
               this.r=this.canvasWidth/this.img_width;
               if((this.img_height*this.r)<this.canvasHeight){
                   this.r=this.canvasHeight/this.img_height
               }
           }else{
               if(this.img_width<this.canvasWidth){ //宽小于
                   this.r=this.canvasWidth/this.img_width;
               }else{   //高小于            
                    this.r=this.canvasHeight/this.img_height
               }
           }
            wtemp=Math.ceil(this.img_width*this.r);
            htemp=Math.ceil(this.img_height*this.r);
            this.resizeImage( wtemp, htemp)
           } 
        }

     },
     resizeImage(w,h){ //重置大小
       this.ctx.drawImage(this.dataUrl,0,0,this.canvasWidth,this.canvasHeight)
     },
    //裁切
    _ratio(){
        return parseInt(window.devicePixelRatio * size);
    },
    cutPic(){

        var cutPart=document.getElementById('cutPart')
        var pCanvas= document.createElement('canvas');
        var pCtx = pCanvas.getContext('2d');  
      
        
        var clipperWidth=parseInt(this.clipperImgWidth/window.devicePixelRatio);
        var clipperHeight=parseInt(this.clipperImgHeight/window.devicePixelRatio);
        if(clipperWidth<0||clipperWidth>this.canvasWidth){ //clipperWidth判断是否超过容器
            clipperWidth=250
        }
        if(clipperHeight<0||clipperHeight>this.canvasHeight){ //clipperWidth判断是否超过容器
            clipperHeight=100
        }
        cutPart.setAttribute('width', clipperWidth);
        cutPart.setAttribute('height', clipperHeight);
        cutPart.appendChild(pCanvas);

         
        

            // this.ctx.fillRect(0,0,150,150);
            // this.ctx.translate(75,75);

            //  // Create a circular clipping path
            // this.ctx.beginPath();
            // this.ctx.arc(0,0,60,0,Math.PI*2,true);
            // this.ctx.clip();

            //  // draw background
            //  var lingrad = this.ctx.createLinearGradient(0,-75,0,75);
            //  lingrad.addColorStop(0, '#232256');
            //  lingrad.addColorStop(1, '#143778');
  
            //  this.ctx.fillStyle = lingrad;
            //  this.ctx.fillRect(-75,-75,150,150);

            //  // draw stars
            //  for (var j=1;j<50;j++){
            //  this.ctx.save();
            //  this.ctx.fillStyle = '#fff';
            //  this.ctx.translate(75-Math.floor(Math.random()*150),
            //       75-Math.floor(Math.random()*150));
            //  this.drawStar(this.ctx,Math.floor(Math.random()*4)+2);
            //  this.ctx.restore();
            // }
         },
         drawStar(ctx,r){
             ctx.save();
             ctx.beginPath()
             ctx.moveTo(r,0);
            for (var i=0;i<9;i++){
              ctx.rotate(Math.PI/5);
              if(i%2 == 0) {
              ctx.lineTo((r/0.525731)*0.200811,0);
             } else {
              ctx.lineTo(r,0);
          }
      }
           ctx.closePath();
           ctx.fill();
           ctx.restore();
         },
    

   originPhoto(){
         this.ctx11.drawImage(this.waveImage,0,0,this.canvas11Width,this.canvas11Height);
         var originImgData=this.ctx11.getImageData(0,0,this.canvas11Width,this.canvas11Height);
         this.ctx11.putImageData(originImgData,0,0)
         if(this.selectedFilter == 'filter11'){
            this.bigOriginPhote()
         }
     },
    blackWhite(){
            this.ctx1.drawImage(this.waveImage,0,0,this.canvas1Width,this.canvas1Height);
            this.imgData1=this.ctx1.getImageData(0,0,this.canvas1Width,this.canvas1Height); 
            var data1=this.imgData1.data;
            this.bW(data1)
            this.ctx1.putImageData(this.imgData1,0,0)
    },
    bW(data){
        for(var i = 0; i < data.length; i += 4) {
            var avg1 = (data[i] + data[i+1] + data[i+2]) / 3;
            data[i] = data[i+1] = data[i+2] = avg1 >= 100 ? 255 : 0;
        }
    },
    reverse(){
            this.ctx2.drawImage(this.waveImage,0,0,this.canvas2Width,this.canvas2Height);
            this.imgData2=this.ctx2.getImageData(0,0,this.canvas2Width,this.canvas2Height);
            var data2=this.imgData2.data;
            this.revCount(data2)
           this.ctx2.putImageData(this.imgData2,0,0)
    },
     revCount(data){
        for(var i = 0; i < data.length; i+= 4) {
               data[i] = 255 - data[i];
               data[i + 1] = 255 - data[i + 1];
               data[i + 2] = 255 - data[i + 2];
          }
    },
     frozen(){
       this.ctx3.drawImage(this.waveImage,0,0,this.canvas3Width,this.canvas3Height);
       this.imgData3=this.ctx3.getImageData(0,0,this.canvas3Width,this.canvas3Height);        
        this.froCount(this.imgData3)
        this.ctx3.putImageData(this.imgData3,0,0)
    },
     froCount(imgData){
         for(var i = 0; i < imgData.height * imgData.width; i++) {
           var r = imgData.data[i*4],
               g = imgData.data[i*4+1],
               b = imgData.data[i*4+2];
           var newR = (r - g -b) * 3 /2;
           var newG = (g - r -b) * 3 /2;
           var newB = (b - g -r) * 3 /2;
           var rgbArr = [newR, newG, newB].map((e) => {
                return e < 0 ? 0 : e > 255 ? 255 : e;
         });
     [imgData.data[i*4], imgData.data[i*4+1], imgData.data[i*4+2]] = rgbArr;
         }
    },
    
     comic(){
       this.ctx4.drawImage(this.waveImage,0,0,this.canvas4Width,this.canvas4Height);
       this.imgData4=this.ctx4.getImageData(0,0,this.canvas4Width,this.canvas4Height);
       this.comicCount(this.imgData4)
       this.ctx4.putImageData(this.imgData4,0,0)
    },
   comicCount(imgData){
    for(var i = 0; i < imgData.height * imgData.width; i++) {
    var r = imgData.data[i*4],
        g = imgData.data[i*4+1],
        b = imgData.data[i*4+2];

    var newR = Math.abs(g - b + g + r) * r / 256;
    var newG = Math.abs(b -g + b + r) * r / 256;
    var newB =  Math.abs(b -g + b + r) * g / 256;
    var rgbArr = [newR, newG, newB];
    [imgData.data[i*4], imgData.data[i*4+1], imgData.data[i*4+2]] = rgbArr;
  }
    },
    casting(){
      this.ctx5.drawImage(this.waveImage,0,0,this.canvas5Width,this.canvas5Height);
      this.imgData5=this.ctx5.getImageData(0,0,this.canvas5Width,this.canvas5Height);       
      this.castingCount(this.imgData5)
      this.ctx5.putImageData(this.imgData5,0,0)
    },
   castingCount(imgData){
       for(var i = 0; i < imgData.height * imgData.width; i++) {
       var r = imgData.data[i*4],
        g = imgData.data[i*4+1],
        b = imgData.data[i*4+2];

    var newR = r * 128 / (g + b + 1);
    var newG = g * 128 / (r + b + 1);
    var newB = b * 128 / (g + r + 1);
    var rgbArr = [newR, newG, newB].map((e) => {
        return e < 0 ? 0 : e > 255 ? 255 : e;
    });
       [imgData.data[i*4], imgData.data[i*4+1], imgData.data[i*4+2]] = rgbArr;
    }
    },

    brown(){
     this.ctx6.drawImage(this.waveImage,0,0,this.canvas6Width,this.canvas6Height);
     this.imgData6=this.ctx6.getImageData(0,0,this.canvas6Width,this.canvas6Height);
     this.brownCount(this.imgData6) 
     this.ctx6.putImageData(this.imgData6,0,0)
    },
    brownCount(imgData){
      for (var i = 0; i < imgData.height * imgData.width; i++) {
    var r = imgData.data[i * 4],
        g = imgData.data[i * 4 + 1],
        b = imgData.data[i * 4 + 2];

    var newR = r * 0.393 + g * 0.769 + b * 0.189;
    var newG = r * 0.349 + g * 0.686 + b * 0.168;
    var newB =  r * 0.272 + g * 0.534 + b * 0.131;
    var rgbArr = [newR, newG, newB];
    [imgData.data[i * 4], imgData.data[i * 4 + 1], imgData.data[i * 4 + 2]] = rgbArr;
  }
    },

   old(){
       this.ctx7.drawImage(this.waveImage,0,0,this.canvas7Width,this.canvas7Height);
       this.imgData7=this.ctx7.getImageData(0,0,this.canvas7Width,this.canvas7Height);  
       this.oldCount(this.imgData7)
       this.ctx7.putImageData(this.imgData7,0,0)
    },
     oldCount(imgData){
      for(var i = 0; i < imgData.height * imgData.width; i++) {
    var r = imgData.data[i*4],
        g = imgData.data[i*4+1],
        b = imgData.data[i*4+2];

    var newR = (0.393 * r + 0.769 * g + 0.189 * b);
    var newG = (0.349 * r + 0.686 * g + 0.168 * b);
    var newB = (0.272 * r + 0.534 * g + 0.131 * b);
    var rgbArr = [newR, newG, newB].map((e) => {
        return e < 0 ? 0 : e > 255 ? 255 : e;
    });
    [imgData.data[i*4],imgData.data[i*4+1],imgData.data[i*4+2]] = rgbArr;
   }
    },
 
 blurH(){
     this.ctx8.drawImage(this.waveImage,0,0,this.canvas8Width,this.canvas8Height);
     this.imgData8=this.ctx8.getImageData(0,0,this.canvas8Width,this.canvas8Height);
     var data8=this.imgData8.data
     this.blurHCount(this.ctx8,data8,this.canvas8Height,this.canvas8Width)
     this.ctx8.putImageData(this.imgData8,0,0)
},
 blurHCount(ctx,data,canvasHeight,canvasWidth){
       var tmpImageData=ctx.getImageData(0,0,canvasWidth,canvasHeight)
       var tmpPixelData=tmpImageData.data;

       var blurR=3;
       var totalNum=(2*blurR+1)*(2*blurR+1)
       for(var i=blurR;i<canvasHeight-blurR;i++){
           for(var j = blurR;j<canvasWidth-blurR;j++){
               var totalR=0,totalG=0,totalB=0;
               for(var dx=-blurR;dx<=blurR;dx++){
                   for(var dy=-blurR;dy<=blurR;dy++){
                       var x=i+dx;
                       var y=j+dy;
                       var p=x*canvasWidth+y;
                       totalR+=tmpPixelData[p*4+0];
                       totalG+=tmpPixelData[p*4+1];
                       totalB+=tmpPixelData[p*4+2]
                   }
               }
               var p=i*canvasWidth+j;
               data[p*4+0]=totalR/totalNum
               data[p*4+1]=totalG/totalNum
               data[p*4+2]=totalB/totalNum
           }
       }
 },
  mosaic(){
   this.ctx9.drawImage(this.waveImage,0,0,this.canvas9Width,this.canvas9Height);
   this.imgData9=this.ctx9.getImageData(0,0,this.canvas9Height,this.canvas9Width);
   var data9=this.imgData9.data;
   this.mosaicCount(this.ctx9,this.canvas9Width,this.canvas9Height,this.imgData9)
},

 mosaicCount(ctx,canvasWidth,canvasHeight,imgData){
 //新ImgData对象
   var newImg=ctx.createImageData(canvasWidth,canvasHeight)
   //作为参考的像素
   var tmpImageData=ctx.getImageData(0,0,canvasHeight,canvasWidth)
   var tmpPixelData=tmpImageData.data;

   var size=10; // 马赛克方块的边长
   var totalNum=size*size;
   // 等分画布
   var stepW=canvasWidth/size;
   var stepH=canvasHeight/size;

   for(var i=0;i<stepH;i++){
      for(var j=0;j<stepW;j++){
          //获取小方格的随机颜色和位置
        var color=this.getXY(imgData,j*size+Math.floor(Math.random()*size),i*size+Math.floor(Math.random()*size));
        for(var k=0;k<size;k++){
            for(var l=0;l<size;l++){
                //设置颜色
                this.setXY(newImg,j*size+l,i*size+k,color);
            }
        }
      }
   }
   ctx.putImageData(newImg,0,0)
},

// 浮雕滤镜
  emboss(){
    var imageData,data;
    this.ctx10.drawImage(this.waveImage,0,0,this.canvas10Width,this.canvas10Height);
    imageData=this.ctx10.getImageData(0,0,this.canvas10Width,this.canvas10Height);
    data=imageData.data;
    this.embossCount(data,imageData)
    this.ctx10.putImageData(imageData,0,0)
},
 embossCount(data,imageData){
 var length,width;
 length=data.length;
    width=imageData.width;
    for(var i =0;i<length;i++){
        if(i<=length-4*width){
            if((i+1)%4!==0){
                if((i+4)%(width*4)==0){
                    data[i]=data[i-4];
                    data[i+1]=data[i-3];
                    data[i+2]=data[i-2];
                    data[i+3]=data[i-1];
                    i+=4;
                }else{
                    data[i]=128+data[i]-data[i+4]
                }
            }
        }else{
            if((i+1)%4!==0){
                data[i]=data[i-width*4];
            }
        }
    }
},

 getXY(obj,x,y){
    var w=obj.width;
    var h=obj.height;
    var d=obj.data;
    var color=[];
    color[0]=obj.data[4*(y*w+x)];
    color[1]=obj.data[4*(y*w+x)+1];
    color[2]=obj.data[4*(y*w+x)+2];
    color[3]=obj.data[4*(y*w+x)+3];
    return color;
},
 setXY(obj,x,y,color){
    var w=obj.width;
    var h=obj.height;
    var d=obj.data;
    obj.data[4*(y*w+x)]=color[0];
    obj.data[4*(y*w+x)+1]=color[1];
    obj.data[4*(y*w+x)+2]=color[2];
    obj.data[4*(y*w+x)+3]=color[3];
},

//上传
 changePic(){ 
     var _this=this
    this.originalPic.onclick=function(){ 
     _this.doInput()
    }
},
 doInput(){
        var inputObj=document.createElement('input')
        inputObj.addEventListener('change',this.readFile,false);
        inputObj.type='file';
        inputObj.accept='image/*';
        inputObj.click(); 
       var myInput=inputObj
     
      },
  readFile(e){     
         var file=e.target.files[0]
          this.imgPreview(file)                
      },
 imgPreview(file){
         let _this=this
          if(!/image\/\w+/.test(file.type)){
              alert('请确保文件为图像类型');
              return false;
          }
          var reader=new FileReader();
           reader.readAsDataURL(file); 
          reader.onload=e=>           
           {
             this.dataUrl=e.target.result; 
              this.drawToCanvas(this.dataUrl)   
          }
 },     
  drawToCanvas(photoAd){ 
         var img=new Image;
         img.src=photoAd;
         img.onload=()=>{
             this.dataUrl=img
             this.$emit('listenToChildEvent',this.dataUrl)
             this.clearRect()
         }
       },

    // 先清空再重置  
  clearRect(){
       this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight); 
       this.bigOriginPhote()
    },
   start(){
       if(!this.ctx) return this.init(this.start );
         this.needAnimate = true;
        setTimeout(function () {
            if(this.needAnimate)
            this.filter(); 
        }, 0);
   },
   //放大
   handleScaleMax(){
    

   }

    },
    mounted(){
     var ul=document.querySelector("ul");
     var list=document.getElementsByTagName('li');
     this.foo(list);
     this.start(); 
     this.filter();
     
    }
}      
</script>
 

<style scoped>
#filterPage{height:100%;}
 #filter{ text-align: center;height:100%;cursor: pointer;}
 #filter ul{justify-content: center;align-items:center;}
#filter ul li{margin:0 5px;cursor: pointer;}
#cutPart{border:1px solid black;}
</style>






 