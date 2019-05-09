<template>
    <div class='useFilter'>
       <div>
           <button @click='closeFilter'>{{onOff}}</button>
           <button @click="downLoad">{{downLoadName}}</button>
           <button @click="upload">{{updataName}}</button>
           <!-- <button @click="cutPic">{{cutName}}</button>
           <button @click="handleScaleMax">{{scaleName}}</button>
           <button @click="handleScaleMin">缩小</button> -->
       </div>
       <filters v-if='close==false' v-on:listenToChildEvent='savePic' ref="filter" ></filters>
    </div>
</template>
<script>
 
export default {
    name:'useFilters',
    components:{},
    data(){
        return{
            close:false,
            picName:null,
            ctx:null,
            onOff:'关闭',
            downLoadName:'保存/下载',
            updataName:'上传图片',
            // cutName:'裁切图片',
            // scaleName:'放大'
        }
    },
    methods:{
        upload(){
            this.$refs.filter.doInput();
        },
        closeFilter(){
            this.close=!this.close
            this.onOff=this.close==true?'显示':'关闭'
         },
        savePic(data){
            this.picName=data 
            console.log(this.picName)
        },
        //保存
        downLoad(){
            var canvas=this.$refs.filter.canvas1
            var imgData=canvas.toDataURL(this.picName)
            console.log(imgData)
             var link=document.createElement('a');
             var event=new MouseEvent('click');
             link.download='downImg'
             link.downLoad=name || 'photo';
             link.href=imgData;
             link.dispatchEvent(event);
        },
        //裁切图片
    //    cutPic(){
    //         this.$refs.filter.cutPic();       
    //  },
     //放大
    //  handleScaleMax(){
    //       this.$refs.filter.handleScaleMax();
    //  },
     // 缩小
    //  handleScaleMin(){
    //      this.$refs.filter.handleScaleMin();
    //  },
    }
}
</script>

