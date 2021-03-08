export const echart = {
  props:{
    recordListbyMonth:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
        watchFlag: false
    }
  },
  mounted(){
    this.eChartInit()
  },
  watch: {
    recordListbyMonth:{
      handler:function(){
        if(this.watchFlag){
          console.log('~~~~~~~~~~~~~~~~~~~~')
          this.eChartInit()
        }

      },
      deep:true
    }
  },
  activated(){
    this.watchFlag = true;
  },
  deactivated(){
    this.watchFlag = false;
  }
}