<template>
  <div id="datechoose">
    <van-popup :value="show" @click-overlay='closeDate' position="bottom" round get-container="body"  :style="{ height: '40%',width:'100%',backgroundcolor:'#fff'}">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择日期"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="selectDate"
      />
    </van-popup>
  </div>
</template>

<script>

export default {
  name:'DateChoose',
  components: { 
  },
  props:{
    show:{
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
    };
  },
  methods: {
    showPopup() {
      this.$emit('showPopup')
    },
    selectDate(date){
      // const newDate = Date.parse(date)
      this.$emit('dateSelectDone',date)
      console.log(Date.parse(date))
    },
    closeDate(){
      this.$emit('closeDate')
    }
  },
}
</script>

<style>

</style>