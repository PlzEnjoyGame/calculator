<template>
  <div class="reviewform">
    <h3>Write a Review</h3>
    <form @submit.prevent="submitReview">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
      <br />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required />
      <br />
      <label for="review">Review:</label>
      <textarea id="review" v-model="review" required></textarea>
      <br />
      <button id="submit" type="submit" :disabled="disableSubmit">Submit Review</button>
    </form>
    <br />
    <router-link to="/">Back to Calculator</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: this.$store.state.name,
      email: this.$store.state.email,
      review: ''
    };
  },
  methods: {
    submitReview() {
      if (!this.name || !this.email || !this.review) {
        return;
      }
      axios.post(
          "https://my-json-server.typicode.com/PlzEnjoyGame/calculator/names",
          this.$store.commit("SET_NAME", this.name)
      ).catch(function (error) {
        console.log("An error has occured: " + error)
      });
      axios.post(
          "https://my-json-server.typicode.com/PlzEnjoyGame/calculator/emails",
          this.$store.commit("SET_EMAIL", this.name)
      ).catch(function (error) {
        console.log("An error has occured: " + error)
      });
      axios.post(
          "https://my-json-server.typicode.com/PlzEnjoyGame/calculator/reviews",
          this.review,
          alert("Your review has been successfully submitted!")
      ).catch(function (error) {
        console.log("An error has occured: " + error)
      });
      console.log('Submitting review:', this.name, this.email, this.review);
      this.$store.commit("SET_NAME", this.name)
      this.$store.commit("SET_EMAIL", this.email);
      this.name = '',
      this.email = '',
      this.review = '';
    }
  },
  computed: {
    disableSubmit() {
      return !this.name || !this.email || !this.review;
    }
  }
};
</script>

<style>
label,
input,
textarea {
  display: block;
  margin-bottom: 10px;
}

.reviewform {
  width: 400px; /* increased width of calculator container */
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 20px;
  font-family: Arial, sans-serif;
}

#name {
  width: 75%;
  padding: 12px 20px;
  margin: auto;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;
  text-align: left;
}

#email {
  width: 75%;
  padding: 12px 20px;
  margin: auto;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;
  text-align: left;
}

#review {
  width: 75%;
  padding: 12px 20px;
  margin: auto;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  font-size: 12px;
  text-align: left;
}

#submit {
  padding: 12px 16px;
}

button:disabled {
  background-color: grey;
}
</style>
