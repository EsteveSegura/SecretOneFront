<template>
  <div class="container">
    <div class="subtitle">
      Secret:
    </div>
    <div class="about content">
      <h3>{{ currentSecret._secret }} {{ err }}</h3>
    </div>
    <div class="btns">
      <Button
        @buttonClick="goBack"
        isGray="btn"
        innerText="I want to create my secret"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Button from "@/components/baseComponents/Button.vue";
import router from "@/router/index.js"
export default {
  name: "Secret",
  components: {
    Button,
  },
  methods: {
    ...mapActions(["getSecret"]),
    goBack(){
      router.push({ path : "/"})
    }
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
* {
  font-family: "Encode Sans", sans-serif;
}
*:before,
*:after {
  box-sizing: inherit;
}

.btns {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
  margin-top: 1rem;
}

.subtitle {
  width: 40%;
  text-align: center;
  margin: 1.6rem auto 1rem auto;
  font-size: 1.2rem;
  font-weight: 800;
}
h3 {
  margin: 0;
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
