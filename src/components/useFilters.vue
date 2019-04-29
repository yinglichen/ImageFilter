<template>
    <div class='useFilter'>
       <div>
           <button @click='closeFilter'>关闭</button>
           <button >保存</button>
           <button @click="cutPic">裁切</button>
           <button @click="handleScaleMax">放大</button>
           <button @click="handleScaleMin">缩小</button>
       </div>
       <filters v-if='close==false' v-on:listenToChildEvent='savePic' ref="filter" ></filters>
    </div>
</template>
<script>
 
export default {
    name:'useFilters',
    components:{
     
    },
    data(){
        return{
            close:false,
            picName:null,
            ctx:null,
        }
    },
    methods:{
        closeFilter(){
            this.close=!this.close
        },
        savePic(data){
            this.picName=data 
        },
        //裁切图片
       cutPic(){
            this.$refs.filter.cutPic();       
     },
     //放大
     handleScaleMax(){
          this.$refs.filter.handleScaleMax();
     },
     // 缩小
     handleScaleMin(){
         this.$refs.filter.handleScaleMin();
     },
    }
}
</script>

