<template>
  <input
    type="text"
    ref="secret"
    @click="selectText"
    class="input"
    :value="text"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    text: {
      type: String,
    },
  },
  methods: {
    selectText() {
      let secretInput = this.$refs.secret;
      secretInput.setSelectionRange(0, secretInput.value.length);
    },
  },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.input:focus{
   border: 3px solid #6562fc;
}
.input {
 font-family: "Encode Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  color: #fff;
  outline: none;
  display: block;
  margin-bottom: 2.1rem;
  width: 90%;
  -webkit-appearance: none;
  background: #313033;
  border-radius: 14px;
  border: 3px solid #313033;
  padding: 8px 16px;
  line-height: 22px;
  font-weight: 500;
  transition: border 0.3s ease;
}
input {
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  appearance: auto;
  background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 2px;
  width: 100%;
}
</style>
