<template>
  <div class="container">
    <div class="subtitle">
    </div>
    <div class="about content">
      <h3>{{ currentSecret._secret }} {{ err }}</h3>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Secret",
  methods: {
    ...mapActions(["getSecret"]),
  },
  data() {
    return {
      err: "",
    };
  },
  computed: {
    ...mapGetters(["currentSecret"]),
  },
  async beforeMount() {
    try {
      await this.getSecret({
        id: this.$route.params.id,
        secretKey: this.$route.params.secretKey,
      });
    } catch (error) {
      this.err = "Cant find the secret";
    }
  },
};
</script>

<style scoped>
*{
  font-family: "Encode Sans", sans-serif;
}
*:before,
*:after {
  box-sizing: inherit;
}
.subtitle{
  width: 40%;
  text-align: center;
  margin: 0 auto;
  font-size:1.2rem;
}
h3{
  margin:0;
  font-family: "Encode Sans", sans-serif;
}
.content {
  margin: 0 auto;
  text-justify: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  /*align-items: center;*/
  padding: 24px;
  background: #3d3b41;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(22, 30, 50, 0.07);
  padding: 2rem 2.6rem;
  border: 3px solid #6562fc;
}

.about {
  width: 40%;
  text-align: center;
  white-space: pre-line;
}
</style>
