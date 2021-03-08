<template>
  <div class="summary-card-wrapper">
    <!-- <div class="date">2021年03月</div> -->
    <div class="summary-card">
      <div class="cost-text">
        <span>支</span>
        总支出
      </div>
      <div class='cost-money'>
        {{calcCost}}
      </div>
      <div>
        <span>总收入 {{calcIncome}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SummaryCard',
  props:{
    recordList:{
      type: Array,
      default(){
        return []
      }
    }
  },
  computed:{
    calcCost(){
      const num =  this.recordList
        .filter(r => r.type === 'cost')
        .reduce((sum,item)=>sum + item.amount*1,0)
      return this.toThousands(num)
    },
    calcIncome(){
      const num = this.recordList
        .filter(r => r.type === 'income')
        .reduce((sum,item)=>sum + item.amount*1,0)
      return this.toThousands(num)
    },
  },
  methods:{
    toThousands(num) {
     const result = [];
     let counter = 0;
     num = (num || 0).toString().split('');
     for (let i = num.length - 1; i >= 0; i--) {
         counter++;
         result.unshift(num[i]);
         if (!(counter % 3) && i != 0) { result.unshift(','); }
     }
     return result.join('');
    }
  }
}
</script>

<style scoped>
  .summary-card-wrapper {
    padding:2vw 5vw;
  }
  .date {
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
  }
  .summary-card {
    margin-top: 1vw;
    font-size: 14px;
    background-color: #fff;
    border-radius: 12px;
    height: 36vw;
    padding:4vw 23px;
  }
  .cost-text {
    color: var(--color-tint2);
    line-height: 5vw;
    height: 5vw;
    /* vertical-align: middle; */
  }
  .cost-text span {
    display: inline-block;
    width: 5vw;
    height: 5vw;
    line-height: 5vw;
    text-align: center;
    font-size: 10px;
    background-color:var(--color-tint2);
    color: #fff;
    border-radius: 50%;
  }
  .cost-money {
    color:black;
    /* font-family:monospace; */
    font-size: 13vw;
    font-weight: 800;
    margin-top: 1vw;
    margin-bottom: 4vw;
  }
</style>