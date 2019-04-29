<template>
    <div id='filterPage'>
        <div id='filter' v-myFilter >
             <div id='originalPic'></div>
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
export default {
    install(Vue){
        Vue.directive('myFilter',{
            inserted:function(el){
                start(el)
            }
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
            } 
    },

    methods:{

     

    }
     
}
 

 
 

var ctx,ctx1,ctx2,ctx3,ctx4,ctx5,ctx6,ctx7,ctx8,ctx9,ctx10,ctx11;
var waveImage,imgSrc;   
var canvasHeight,canvasWidth, canvas1Width,canvas1Height,canvas2Width,canvas2Height,
    canvas3Height,canvas3Width,canvas4Height,canvas4Width,canvas5Height,canvas5Width,
    canvas6Height,canvas6Width,canvas7Height,canvas7Width,canvas8Height,canvas8Width,
    canvas9Height,canvas9Width,canvas10Height,canvas10Width,canvas11Height,canvas11Width
    ;
var needAnimate=false,flag=false;
var imgData,imgData1,imgData2,imgData3,imgData4,imgData5,imgData6,imgData7,imgData8,imgData9;
var data;
var originalPic,filter1,filter2,filter3,filter4,filter5,filter6,filter7,filter8,filter9,filter10;
var selectedFilter=null;
var photo,canvas1;

var ul=document.querySelector("ul");
var list=document.getElementsByTagName('li');
function foo(){
    for(let i=0,len=list.length;i<len;i++){
        list[i].onclick=function(){
           selectedFilter=this.id
           filter(selectedFilter)
        }
    }
}


function init (callback, filter) {
    photo=png
    originalPic=document.getElementById('originalPic')
    filter1=document.getElementById('filter1')
    filter2=document.getElementById('filter2')
    filter3=document.getElementById('filter3')
    filter4=document.getElementById('filter4')
    filter5=document.getElementById('filter5')
    filter6=document.getElementById('filter6')
    filter7=document.getElementById('filter7')
    filter8=document.getElementById('filter8')
    filter9=document.getElementById('filter9')
    filter10=document.getElementById('filter10')
    var filter11=document.getElementById('originPhoto')

// 大图
        canvas1= document.createElement('canvas');
        if (!canvas1.getContext) return;
        ctx = canvas1.getContext('2d');
       // canvasWidth = filter.offsetWidth;
        canvasHeight=400;
        canvasWidth=600;
        //canvasHeight = filter1.offsetHeight;
        canvas1.setAttribute('width', canvasWidth);
        canvas1.setAttribute('height', canvasHeight);
        originalPic.appendChild(canvas1);
// 原图
       var canvasOrigin=document.createElement('canvas');
       ctx11=canvasOrigin.getContext('2d');
       canvas11Width=100;
       canvas11Height=100;
       canvasOrigin.setAttribute('width',canvas11Width)
       canvasOrigin.setAttribute('height',canvas11Height)  
       filter11.appendChild(canvasOrigin)      

//滤镜1 - 黑白
        var canvas1=document.createElement('canvas');
        ctx1=canvas1.getContext('2d');
        canvas1Width=100;
        canvas1Height=100;
        canvas1.setAttribute('width', canvas1Width);
        canvas1.setAttribute('height', canvas1Height);
        filter1.appendChild(canvas1);
//滤镜2 - 反向
        var canvas2=document.createElement('canvas');
        ctx2=canvas2.getContext('2d');
        canvas2Width=100;
        canvas2Height=100;
        canvas2.setAttribute('width', canvas2Width);
        canvas2.setAttribute('height', canvas2Height);
        filter2.appendChild(canvas2); 
//滤镜3 - 冰冻
        var canvas3=document.createElement('canvas');
        ctx3=canvas3.getContext('2d');
        canvas3Width=100;
        canvas3Height=100;
        canvas3.setAttribute('width',canvas3Width);
        canvas3.setAttribute('height',canvas3Height);
        filter3.appendChild(canvas3)        
//滤镜4 - 连环画
        var canvas4=document.createElement('canvas');
        ctx4=canvas4.getContext('2d');
        canvas4Width=100;
        canvas4Height=100;
        canvas4.setAttribute('width',canvas4Width);
        canvas4.setAttribute('height',canvas4Height);
        filter4.appendChild(canvas4)              
//滤镜5 - 熔铸   
        var canvas5=document.createElement('canvas');
        ctx5=canvas5.getContext('2d');
        canvas5Width=100;
        canvas5Height=100;
        canvas5.setAttribute('width',canvas5Width);
        canvas5.setAttribute('height',canvas5Height);
        filter5.appendChild(canvas5)  
//滤镜6 - 褐色
        var canvas6=document.createElement('canvas');
        ctx6=canvas6.getContext('2d');
        canvas6Width=100;
        canvas6Height=100;
        canvas6.setAttribute('width',canvas6Width);
        canvas6.setAttribute('height',canvas6Height);
        filter6.appendChild(canvas6)  

//滤镜7 - 怀旧
        var canvas7=document.createElement('canvas');
        ctx7=canvas7.getContext('2d');
        canvas7Width=100;
        canvas7Height=100;  
        canvas7.setAttribute('width',canvas7Width);
        canvas7.setAttribute('height',canvas7Height);
        filter7.appendChild(canvas7)    
//滤镜8 - 高斯模糊
        var canvas8=document.createElement('canvas');
        ctx8=canvas8.getContext('2d');
        canvas8Width=100;
        canvas8Height=100;  
        canvas8.setAttribute('width',canvas8Width);
        canvas8.setAttribute('height',canvas8Height);
        filter8.appendChild(canvas8)  
//滤镜9 - 马赛克
        var canvas9=document.createElement('canvas');
        ctx9=canvas9.getContext('2d');
        canvas9Height=100;
        canvas9Width=100;
        canvas9.setAttribute('width',canvas9Width);
        canvas9.setAttribute('height',canvas9Height);  
        filter9.appendChild(canvas9)                         
//滤镜10 - 浮雕
        var canvas10=document.createElement('canvas');
         ctx10=canvas10.getContext('2d');
         canvas10Height=100;
         canvas10Width=100;
        canvas10.setAttribute('width',canvas10Width)
        canvas10.setAttribute('height',canvas10Height)
        filter10.appendChild(canvas10)
     


        waveImage = new Image();
        waveImage.onload = function () { 
            waveImage.onload = null;
            callback(filter);
        }
        
         waveImage.src = photo;
        
            
    }
    
    function filter(){
             foo()
         if (!needAnimate) return;

     changePic()      
     bigOriginPhote() // 大图
     originPhoto( )//原图
     blackWhite( )//黑白滤镜              
     reverse( )//反向滤镜          
     frozen( )// 冰冻滤镜  
     comic( )// 连环画滤镜 
     casting( ) //熔铸滤镜 
     brown( )  // 褐色滤镜  
     old( )  // 怀旧滤镜     
     blurH( )//高斯模糊滤镜      
     mosaic( )//马赛克滤镜     
     emboss( ) //浮雕滤镜
    }
    function bigOriginPhote(selected){
    
      imgSrc? ctx.drawImage(imgSrc,0,0):
        ctx.drawImage(waveImage, 0,0);
        imgData=ctx.getImageData(0,0,canvasWidth,canvasHeight);
        data=imgData.data; 

       

       
        
        switch(selectedFilter){
            case 'filter1':
            bW(data); 
            ctx.putImageData(imgData,0,0);
            break;
            case 'filter2':
            revCount(data);
            ctx.putImageData(imgData,0,0);
            break;
            case 'filter3':
            froCount(imgData);
            ctx.putImageData(imgData,0,0);
            break;
            case 'filter4':
            comicCount(imgData);
            ctx.putImageData(imgData,0,0);
            break;
            case 'filter5':
            castingCount(imgData);
            ctx.putImageData(imgData,0,0);
            break;
            case 'filter6':
            brownCount(imgData);
            ctx.putImageData(imgData,0,0);
            break;
            case 'filter7':
            oldCount(imgData);
            ctx.putImageData(imgData,0,0);
            break;
            case 'filter8':
            blurHCount(ctx,data,canvasHeight,canvasWidth);
            ctx.putImageData(imgData,0,0);
            break;
            case 'filter9':
            mosaicCount(ctx,canvasWidth,canvasHeight,imgData);
            break;
            case 'filter10':
            embossCount(data,imgData);
            ctx.putImageData(imgData,0,0);
            break;
            // case 'filter01':
            // ctx.putImageData(imgData,0,0);
            // break;
        }
     
    }
     function originPhoto(){
         ctx11.drawImage(waveImage,0,0,canvas11Width,canvas11Height);
         var originImgData=ctx11.getImageData(0,0,canvas11Width,canvas11Height);
         ctx11.putImageData(originImgData,0,0)

         if(selectedFilter == 'filter11'){
            bigOriginPhote()
         }
     }
    
    function blackWhite(){
            ctx1.drawImage(waveImage,0,0,canvas1Width,canvas1Height);
            imgData1=ctx1.getImageData(0,0,canvas1Width,canvas1Height); 
              var data1=imgData1.data;
              bW(data1)
            ctx1.putImageData(imgData1,0,0)
    }
    function bW(data){
        for(var i = 0; i < data.length; i += 4) {
            var avg1 = (data[i] + data[i+1] + data[i+2]) / 3;
            data[i] = data[i+1] = data[i+2] = avg1 >= 100 ? 255 : 0;
        }
    }
    function reverse(){
             ctx2.drawImage(waveImage,0,0,canvas2Width,canvas2Height);
            imgData2=ctx2.getImageData(0,0,canvas2Width,canvas2Height);
            var data2=imgData2.data;
            revCount(data2)
          ctx2.putImageData(imgData2,0,0)
    }
    function revCount(data){
        for(var i = 0; i < data.length; i+= 4) {
               data[i] = 255 - data[i];
               data[i + 1] = 255 - data[i + 1];
               data[i + 2] = 255 - data[i + 2];
          }
    }
    function frozen(){
       ctx3.drawImage(waveImage,0,0,canvas3Width,canvas3Height);
       imgData3=ctx3.getImageData(0,0,canvas3Width,canvas3Height);        
          froCount(imgData3)
         ctx3.putImageData(imgData3,0,0)
    }
    function froCount(imgData){
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
    }
    function comic(){
       ctx4.drawImage(waveImage,0,0,canvas4Width,canvas4Height);
       imgData4=ctx4.getImageData(0,0,canvas4Width,canvas4Height);
       comicCount(imgData4)

      ctx4.putImageData(imgData4,0,0)
    }
    function comicCount(imgData){
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
    }

    function casting(){
      ctx5.drawImage(waveImage,0,0,canvas5Width,canvas5Height);
      imgData5=ctx5.getImageData(0,0,canvas5Width,canvas5Height);       
      castingCount(imgData5)
     ctx5.putImageData(imgData5,0,0)
    }
    function castingCount(imgData){
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
    }

    function brown(){
     ctx6.drawImage(waveImage,0,0,canvas6Width,canvas6Height);
    imgData6=ctx6.getImageData(0,0,canvas6Width,canvas6Height);
    brownCount(imgData6) 
    ctx6.putImageData(imgData6,0,0)
    }

    function brownCount(imgData){
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
    }

    function old(){
        ctx7.drawImage(waveImage,0,0,canvas7Width,canvas7Height);
       imgData7=ctx7.getImageData(0,0,canvas7Width,canvas7Height);  
     oldCount(imgData7)
   ctx7.putImageData(imgData7,0,0)
    }
    function oldCount(imgData){
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
    }
////////////
 function blurH(){
     ctx8.drawImage(waveImage,0,0,canvas8Width,canvas8Height);
       imgData8=ctx8.getImageData(0,0,canvas8Width,canvas8Height);
       var data8=imgData8.data
       blurHCount(ctx8,data8,canvas8Height,canvas8Width)
       ctx8.putImageData(imgData8,0,0)
}
 function blurHCount(ctx,data,canvasHeight,canvasWidth){
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
 }


function mosaic(){
   ctx9.drawImage(waveImage,0,0,canvas9Width,canvas9Height);
   imgData9=ctx9.getImageData(0,0,canvas9Height,canvas9Width);
   var data9=imgData9.data;
   mosaicCount(ctx9,canvas9Width,canvas9Height,imgData9)
  
   //ctx9.putImageData(newImg,0,0)
}

function mosaicCount(ctx,canvasWidth,canvasHeight,imgData){
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
        var color=getXY(imgData,j*size+Math.floor(Math.random()*size),i*size+Math.floor(Math.random()*size));
        for(var k=0;k<size;k++){
            for(var l=0;l<size;l++){
                //设置颜色
                setXY(newImg,j*size+l,i*size+k,color);
            }
        }
      }
   }
    ctx9.putImageData(newImg,0,0)
}

// 浮雕滤镜
function emboss(){
    var imageData,data;
    ctx10.drawImage(waveImage,0,0,canvas10Width,canvas10Height);
    imageData=ctx10.getImageData(0,0,canvas10Width,canvas10Height);
    data=imageData.data;
   embossCount(data,imageData)
    ctx10.putImageData(imageData,0,0)
}
function embossCount(data,imageData){
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


}

function getXY(obj,x,y){
    var w=obj.width;
    var h=obj.height;
    var d=obj.data;
    var color=[];
    color[0]=obj.data[4*(y*w+x)];
    color[1]=obj.data[4*(y*w+x)+1];
    color[2]=obj.data[4*(y*w+x)+2];
    color[3]=obj.data[4*(y*w+x)+3];
    return color;
}

function setXY(obj,x,y,color){
    var w=obj.width;
    var h=obj.height;
    var d=obj.data;
    obj.data[4*(y*w+x)]=color[0];
    obj.data[4*(y*w+x)+1]=color[1];
    obj.data[4*(y*w+x)+2]=color[2];
    obj.data[4*(y*w+x)+3]=color[3];
}

//上传
function changePic(){
    originalPic.onclick=function(){ 
        doInput()
    }
}
 function doInput(){
        var inputObj=document.createElement('input')
        inputObj.addEventListener('change',readFile,false);
        inputObj.type='file';
        inputObj.accept='image/*';
        inputObj.click(); 
       var myInput=inputObj
      }
    function readFile(e){          
          var file=e.target.files[0] 
          if(!/image\/\w+/.test(file.type)){
              alert('请确保文件为图像类型');
              return false;
          }
          var reader=new FileReader();
           reader.readAsDataURL(file);
         
           reader.onload=function(e){
             drawToCanvas(e.target.result)   
          }                    
      }
      
     function drawToCanvas(photoAd){ 
         var img=new Image;
         img.src=photoAd;
         img.onload=function(){
             imgSrc=img
             clearRect()
         }
       }

     // 先清空再重置  
    function clearRect(){
       ctx.clearRect(0,0,canvasWidth,canvasHeight); 
       bigOriginPhote()
    }   

    function start (el) {
        if (!ctx) return init(start, el);
        needAnimate = true;
        setTimeout(function () {
            if(needAnimate)
             filter();
            //animate();
        }, 0);
    }
    function stop () {
        needAnimate = false;
    }  
</script>
 

<style scoped>
#filterPage{height:100%;}
 #filter{ text-align: center;height:100%;cursor: pointer;}
 #filter ul{justify-content: center;align-items:center;}
#filter ul li{margin:0 5px;cursor: pointer;}
</style>






 