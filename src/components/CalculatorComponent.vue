<template>
  <div class="calculator">
    <input type="text" v-model="display" disabled>
    <br>
    <button v-for="button in buttons" v-bind:key="button" @click="appendToDisplay(button)">{{ button }}</button>
    <log-component :log="log"></log-component>
    <br />
    <router-link to="/review">Write a Review</router-link>
  </div>
</template>

<script>
import LogComponent from "../components/LogComponent.vue";
import axios from "axios";
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
    calculate(expression) {
      axios.post('http://localhost:7777/calculate', { expression })
          .then(response => {
            if (response.data.success) {
              this.display = response.data.answer.toString();
              this.lastAnswer = response.data.answer.toString();
              this.log.push(`${response.data.calculation} = ${this.lastAnswer}`);
            } else {
              alert(response.data.message);
            }
          })
          .catch(error => {
            console.error(error);
            alert('An error occurred while calculating the expression');
          });
    },
    appendToDisplay(val) {
      if (val === "C") {
        this.display = "";
        this.decimalCount = 0;
        this.allowedDecimals = 1;
      } else if (val === "Ans") {
        this.display += this.lastAnswer;
      } else if (val === "=") {
        this.calculate(this.display)
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