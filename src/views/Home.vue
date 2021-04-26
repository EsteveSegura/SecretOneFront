<template>
  <div class="container">
    <div class="card">
      <div class="card-title horizontal-layout mb-1">
        <h2>Create secret</h2>
        <div class="icon"><Key /></div>
      </div>
      <div class="label-secret mr-min horizontal-layout mb-2">
        <div class="label graycolor">Secret:</div>
        <div class="max">{{lengthRemaining}}</div>
      </div>
      <div style="margin-bottom: 1rem;" class="card-secret mb-1">
        <TextArea @inputText="handleSecret" />
      </div>
      <div class="horizontal-layout mr-min mb-2">
        <div class="label graycolor">Expiration at:</div>
      </div>
      <div style="margin-bottom: 2rem;" class="select mb-1">
        <Select @selected="selectExpire" />
      </div>
      <div class="card-actions">
        <Button class="btn-action" isGray="gray" innerText="Delete" />
        <Button class="btn-action" @buttonClick="btnAddSecret" isGray="btn" innerText="Share" />
      </div>
    </div>
    <div class="secrets" v-if="getSecrets.length != 0">
      <h2>Your Secrets:</h2>
      <SecretCard
        v-for="secret in getSecrets"
        :key="secret._id"
        :id="secret._id"
        :secretKey="secret._secretKey"
        :token="secret._token"
      />
    </div>
  </div>
</template>

<script>
import SecretCard from "@/components/SecretCard.vue";
import TextArea from "@/components/baseComponents/TextArea.vue";
import Select from "@/components/baseComponents/Select.vue";
import Button from "@/components/baseComponents/Button.vue";

import Key from "@/components/svg/Key.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Key,
    SecretCard,
    TextArea,
    Select,
    Button,
  },
  methods: {
    ...mapActions(["createSecret"]),
    selectExpire(data) {
      this.select = data;
    },
    btnAddSecret() {
      this.createSecret({ secret: this.text, expireAt: this.select });
    },
    handleSecret(data) {
      this.lengthRemaining = Math.abs(7000 - data.length)
      this.text = data;
    },
  },
  data() {
    return {
      text: "",
      select: "5",
      lengthRemaining: 7000,
    };
  },
  computed: {
    ...mapGetters(["getSecrets"]),
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
h1,
h2 {
  font-family: "Encode Sans", sans-serif;
  font-weight: 700;
}

.secrets{
  width: 24%;
}

.mr-min{
  margin-left: 0.2rem;
}

.graycolor{
  color: #9e99a8;
}

.max{
  font-size: 10px;
  background-color: #555459;
  padding: 0.4rem 0.7rem;
  border-radius: 13px;
}

.mb-1 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.6rem;
}

.container {
  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: stretch;
  align-items: center;
}

.card {
  padding: 1rem 2.3rem;
  border-radius: 20px;
  width: 20%;
  background: linear-gradient(#3d3b41 84%, #313033 20%) no-repeat;
}

.btn-action{
  margin-left: 1rem;
}

.card-actions {
  margin-top: 3.5rem;
  margin-bottom: 0.6rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: stretch;
  align-items: flex-start;
}

.horizontal-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
}
</style>
