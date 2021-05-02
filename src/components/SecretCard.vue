<template>
  <div class="content">
    <h2>Your secret:</h2>
    <TextInput :text="'http://80.211.53.183/secret/' + id + '/' + secretKey" />
    <Button style="margin-top:1rem; margin-bottom: -0.8rem;" @buttonClick="deleteSecretClick" isGray="btn" innerText="DELETE SECRET" />
  </div>
</template>

<script>
import TextInput from "@/components/baseComponents/TextInput.vue";
import Button from "@/components/baseComponents/Button.vue";

import { mapActions } from "vuex";

export default {
  name: "SecretCard",
  components: {
    TextInput,
    Button,
  },
  methods: {
    ...mapActions(["deleteSecret"]),
    deleteSecretClick() {
      this.deleteSecret({id:this.id , token: this.token});
    },
  },
  props: {
    token: String,
    id: String,
    secretKey: String,
  },
};
</script>

<style scoped>
h2 {
  margin: 0 0 1.5rem 0;
  font-family: "Encode Sans", sans-serif;
  font-weight: 700;
}

.content {
  padding: 1rem 2.3rem;
  border-radius: 20px;
  background: linear-gradient(#3d3b41 65%, #313033 20%) no-repeat;
  text-justify: left;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0 2px 4px rgba(22, 30, 50, 0.5);
  padding: 2rem 2.6rem;
  margin: 0 0 40px 0;
}
</style>
