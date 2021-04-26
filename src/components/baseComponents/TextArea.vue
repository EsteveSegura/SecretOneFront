<template>
  <textarea
    class="textarea"
    name="textarea"
    rows="7"
    @input="triggerUpdate()"
    v-model="inputText"
    placeholder="Type here your secret..."
  ></textarea>
</template>

<script>
export default {
  name: "TextArea",
  data() {
    return {
      inputText: "",
    };
  },
  props: {
    innerText: {
      type: String,
    },
  },
  methods: {
    triggerUpdate() {
      this.$emit("inputText", this.inputText);
    },
  },
};
</script>

<style scoped>
*{
  box-sizing: border-box;
}
.textarea:focus{
   border: 3px solid #6562fc;
}
.textarea {
  margin:0;
  font-size: 14px;
  outline: none;
  display: block;
  width: 100%;
  -webkit-appearance: none;
  background: #313033;
  border: 1px solid #cdd9ed;
  padding: 8px 16px;
  line-height: 22px;
  font-weight: 500;
  color: #fff;
  border-radius: 14px;
  border: 3px solid #313033;
  transition: border 0.19s ease;
  margin-bottom: 1.4rem;
}
textarea {
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
}
</style>
