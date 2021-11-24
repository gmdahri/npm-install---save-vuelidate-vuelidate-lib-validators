<template>
  <div id="app">
    <main class="formContain">
      <section>
        <label for="femail">Email*</label>
        <input id="femail" v-model="$v.formResponses.email.$model" type="email">
        <p v-if="errors" class="error">
          <span v-if="!$v.formResponses.email.required">this field is required.</span>
          <span v-if="!$v.formResponses.email.email">Needs to be a valid email.</span>
        </p>
      </section>
      <section>
        <label for="fpass1">Password*</label>
        <input id="fpass1" v-model="$v.formResponses.password.$model" type="password">
        <p v-if="errors" class="error">
          <span v-if="!$v.formResponses.password.required">this field is required.</span>
          <span
            v-if="!$v.formResponses.password.strongPassword"
          >Strong passwords need to have a letter, a number, a special character, and be more than 8 characters long.</span>
        </p>
      </section>
      
      <section>
        <button @click.prevent="submitForm" class="submit">Submit</button>
        <p v-if="errors" class="error">The form above has errors,
          <br>please get your act together and resubmit
        </p>
        <p v-else-if="empty && uiState === 'submit clicked'" class="error">The form above is empty,
          <br>cmon y'all you can't submit an empty form!
        </p>
        <p v-else-if="uiState === 'form submitted'" class="success">Hooray! Your form was submitted!</p>
      </section>
    </main>
  </div>
</template>

<script>
import { required,  email, } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      uiState: "submit not clicked",
      errors: false,
      empty: true,
      formResponses: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    formResponses: {
      email: {
        required,
        email
      },
      password: {
        required,
        // password,
        strongPassword(password) {
          return (
            password.length >= 3
          );
        }
      },
    }
  },
  methods: {
    submitForm() {
      this.empty = !this.$v.formResponses.$anyDirty;
      this.errors = this.$v.formResponses.$anyError;
      this.uiState = "submit clicked";
      if (this.errors === false && this.empty === false) {
        //this is where you send the responses
        this.uiState = "form submitted";
        this.axios.post(api).then((response) => {
        console.log(response.data)
      })
      }
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  margin: 20px 0 10px;
  display: block;
}

.error {
  text-transform: uppercase;
  font-size: 12px;
  color: red;
  position: absolute;
}

.success {
  text-transform: uppercase;
  font-size: 12px;
  color: teal;
  position: absolute;
}

.formContain section {
  padding-bottom: 30px;
  position: relative;
}
</style>