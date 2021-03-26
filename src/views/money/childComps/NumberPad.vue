<template>
  <div>
    <notes
      :value="outputValue"
      @dateSelect="dateSelect"
      @textContent="textContent"
    />
    <div id="number" class="clear-fix">
      <button @click="valueInput('1')">1</button>
      <button @click="valueInput('2')">2</button>
      <button @click="valueInput('3')">3</button>
      <button @click="calcValue('sum')">+</button>
      <button @click="valueInput('4')">4</button>
      <button @click="valueInput('5')">5</button>
      <button @click="valueInput('6')">6</button>
      <button @click="calcValue('reduce')">-</button>
      <button @click="valueInput('7')">7</button>
      <button @click="valueInput('8')">8</button>
      <button @click="valueInput('9')">9</button>
      <button class="done" :class="{ income: isIncome }" @click="done">
        完成
      </button>
      <button @click="valueInput('.')">.</button>
      <button @click="valueInput('0')">0</button>
      <button @click="deleteValue">
        <i class="iconfont icon-shanchushangwu103401"></i>
      </button>
    </div>
  </div>
</template>

<script>
import Notes from "./Notes.vue";
export default {
  components: { Notes },
  name: "NumberPad",
  props: {
    isIncome: {
      type: Boolean,
      default: true,
    },
    DateChoosed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      outputValue: "0",
      saveValue: 0,
      operation: "",
      numberLock: false, //辅助在连续计算时数字的输入
    };
  },
  methods: {
    //计算器相关
    valueInput(value) {
      if (this.numberLock === true && this.saveValue !== 0) {
        this.outputValue = "0";
        this.numberLock = true;
      }

      if (this.outputValue.length >= 16) {
        return;
      }
      if (this.outputValue === "0") {
        if (value === 0) {
          return;
        } else if (value !== ".") {
          // this.outputValue = '0'+'.'+ value
          this.outputValue = value;
        } else {
          this.outputValue += value;
        }
      } else if (this.outputValue.indexOf(".") >= 0) {
        if (value === ".") {
          return;
        } else {
          this.outputValue += value;
        }
      } else {
        this.outputValue += value;
      }
    },
    deleteValue() {
      this.numberLock = true
      if (this.outputValue.length === 1) {
        this.outputValue = "0";
      } else {
        this.outputValue = this.outputValue.substr(
          0,
          this.outputValue.length - 1
        );
      }
    },
    calcValue(type) {
      this.numberLock = true
      if (this.saveValue === 0) {
        this.saveValue = this.outputValue * 1;
        this.outputValue = "0";
      } else {
        // this.numberLock = true;
        if (this.operation === "sum") {
          this.outputValue = (this.saveValue + this.outputValue * 1).toString();
          this.saveValue = this.outputValue * 1;
        } else if (this.operation === "reduce") {
          this.outputValue = (this.saveValue - this.outputValue * 1).toString();
          this.saveValue = this.outputValue * 1;
        } else {
          return;
        }
      }
      this.operation = type;
    },
    done() {
      if (this.numberLock === true) {
        if (this.operation === "sum") {
          this.outputValue = (this.saveValue + this.outputValue * 1).toString();
          this.saveValue = this.outputValue * 1;
        } else if (this.operation === "reduce") {
          this.outputValue = (this.saveValue - this.outputValue * 1).toString();
          this.saveValue = this.outputValue * 1;
        }else {
          
        }
        this.numberLock = false;
        this.saveValue = this.outputValue * 1;
      } else {
        if (this.outputValue === "0") {
          return;
        }
        if (this.DateChoosed) {
          this.$emit("commit", this.outputValue);
          this.outputValue = "0";
          this.saveValue = 0;
          this.numberLock = false;
          this.operation = "";
        } else {
           this.$toast.show('请选择日期')
        }
      }
    },
    dateSelect() {
      this.$emit("dateSelect");
    },
    textContent(text) {
      this.$emit("textContent", text);
    },
  },
};
</script>

<style scoped>
#number {
  margin: 3px 10px;
}
#number button {
  width: 24%;
  font-size: 20px;
  height: 45px;
  background-color: white;
  border: none;
  border-radius: 4px;
  float: left;
  margin-right: 1%;
  margin-bottom: 5px;
}
#number .done {
  height: 95px;
  background-color: var(--color-tint2);
  float: right;
  color: white;
  font-size: 16px;
}
#number .income {
  background-color: var(--color-tint1);
}
.iconfont {
  font-size: 22px;
  color: black;
  font-weight: 800；;
}
</style>