<template>
  <div class="calculator">
    <input type="text" v-model="display" disabled>
    <br>
    <button v-for="button in buttons" v-bind:key="button" @click="appendToDisplay(button)">{{ button }}</button>
    <log-component :log="log"></log-component>
    <router-link to="/review">Write a Review</router-link>
  </div>
</template>

<script>
import LogComponent from "@/components/LogComponent";
export default {
  components: {
    LogComponent
  },
  data() {
    return {
      display: "",
      buttons: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "+", "-", "*", "/", "=", "C", "Ans"],
      lastAnswer: null,
      log: [],
      allowedDecimals: 1,
      decimalCount: 0
    }
  },
  methods: {
    appendToDisplay(val) {
      if (val === "C") {
        this.display = "";
        this.decimalCount = 0;
        this.allowedDecimals = 1;
      } else if (val === "Ans") {
        this.display += this.lastAnswer;
      } else if (val === "=") {
        this.lastAnswer = eval(this.display);
        this.log.push(`${this.display} = ${this.lastAnswer}`);
        this.display = this.lastAnswer;
        this.decimalCount = 0;
        this.allowedDecimals = 1;
      } else if (val === "+" || val === "-" || val === "*" || val === "/") {
        this.allowedDecimals++;
        this.display += val;
      } else if (val === ".") {
        if (this.decimalCount < this.allowedDecimals) {
          this.display += val;
          this.decimalCount++;
        }
      } else {
        this.display += val;
      }
    }
  }
}
</script>

<style>
</style>