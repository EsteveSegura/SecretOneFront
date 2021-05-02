<template>
  <button
    :class="isGray"
    name="btn"
    @click="triggerClick()"
    placeholder="Type here..."
  >
    {{ innerText }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    innerText: {
      type: String,
    },
    isGray:{
      type: String
    }
  },
  methods: {
    triggerClick() {
      this.$emit("buttonClick");
    },
  },
};
</script>

<style>
.gray{
   color: #fff;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  position: relative;
  white-space: nowrap;
  border: none;
  padding: 11px 31px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  background-color: #555359;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.btn {
  color: #fff;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  position: relative;
  white-space: nowrap;
  border: none;
  padding: 11px 31px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  background-color: #6562fc;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}
button {
  cursor: pointer;
  appearance: auto;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  border-width: 2px;
  border-style: outset;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-image: initial;
}
</style>
