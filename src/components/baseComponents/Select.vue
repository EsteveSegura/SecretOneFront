<template>
  <select class="select" v-model="selected" @change="triggerUpdate()">
    <option value="5">5 min</option>
    <option value="10">10 min</option>
    <option value="30">30 min</option>
    <option value="60">1 hour </option>
    <option value="360">6 hour</option>
    <option value="729">12 hour</option>
    <option value="1440">1 day</option>
    <option value="4320">3 day</option>
    <option value="10080">1 week</option>
  </select>
</template>

<script>
export default {
  name: "Select",
  data() {
    return {
      selected: "5",
    };
  },
  methods: {
    triggerUpdate() {
      this.$emit("selected", this.selected);
    },
  },
};
</script>

<style scoped>
select:focus{
  border: 3px solid #6562fc;
  padding: 12px 15px;
}
.select {
  color: #fefeff;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  position: relative;
  white-space: nowrap;
  padding: 12px 15px;
  font-size: 14px;
  line-height: 22px;
  font-weight: 600;
  width: 100%;
  border: 3px solid #313033;
  background-color: #313033;
  text-decoration: none;
  transition: all 0.17s ease;
  border-radius: 14px;
}
select {
  height: 3rem;
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
  cursor: default;
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  border-width: 2px;
  border-style: outset;
  border-image: initial;
}

select:focus {
  outline: none;
}
</style>
