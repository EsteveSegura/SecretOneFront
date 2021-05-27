<template>
  <div class="main">
    <div class="container">
      <div class="card" v-if="getSecrets.length == 0">
        <div class="card-title horizontal-layout mb-1">
          <h2>Create secret</h2>
        </div>
        <div class="label-secret mr-min horizontal-layout mb-2">
          <div class="label graycolor">Secret:</div>
          <div class="max">{{ lengthRemaining }}</div>
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
          <Button
            class="btn-action"
            @buttonClick="btnAddSecret"
            isGray="btn"
            innerText="Share"
          />
        </div>
      </div>
      <div class="secrets" v-else>
        <SecretCard
          v-for="secret in getSecrets"
          :key="secret._id"
          :id="secret._id"
          :secretKey="secret._secretKey"
          :token="secret._token"
        />
      </div>
      <div class="illustration" style="transform: translateX(-35px);">
        <div class="article">
          How we keep your secrets safe?
        </div>
        <IllustrationData class="ill" />
        <Button
          class="btn-action btn-add"
          @buttonClick="btnAddSecret"
          isGray="btn"
          innerText="Read more..."
        />
      </div>
    </div>
    <div class="footer">
      Made with ❤️ & 🔒 by <a href="http://girlazo.com">GiRLaZo</a>
    </div>
  </div>
</template>

<script>
import SecretCard from "@/components/SecretCard.vue";
import TextArea from "@/components/baseComponents/TextArea.vue";
import Select from "@/components/baseComponents/Select.vue";
import Button from "@/components/baseComponents/Button.vue";

import IllustrationData from "@/components/svg/IllustrationData.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    SecretCard,
    TextArea,
    Select,
    Button,
    IllustrationData,
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
      this.lengthRemaining = Math.abs(7000 - data.length);
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
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&display=swap");

* {
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

.article {
  font-family: "Lora", serif;
  font-weight: 700;
  font-size: 40px;
  transform: translateY(25px);
}

.illustration {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  width: 100%;
  text-align: center;
  position: fixed;
  bottom: 0px;
  padding: 0.7rem 0rem;
  font-size: 12px;
}

.secrets {
  width: 100%;
}

.mr-min {
  margin-left: 0.2rem;
}

.graycolor {
  color: #9e99a8;
}

.max {
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

.main{
    width:100vw;
  height: 90vh;
  display:flex;
}

.container {
  margin:  auto;
  align-items: center;
  width: 90%;
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  grid-gap: 10px;
}

.card {
  margin: 0 auto;
  padding: 1rem 2.3rem;
  border-radius: 20px;
  max-width: 100%;
  min-width: 60%;
  max-height: 500px;
  background: linear-gradient(#3d3b41 84%, #313033 20%) no-repeat;
}

.btn-action {
  margin-left: 1rem;
}

.card-actions {
  margin-top: 3.5rem;
  margin-bottom: 0.6rem;
  min-width: 250px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: stretch;
  align-items: flex-start;
}

.ill {
  max-width: 550px;
  transform: translateY(-10px);
}

.btn-add {
  transform: translateY(-55px);
}

.horizontal-layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: center;
}

@media (max-width: 1300px) {
  .container {
    margin: 0 auto;
    align-items: center;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }

  .ill {
    transform: translateY(-10px);
    max-width: 450px;
  }

  .illustration {
    min-width: 690px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .card {
    margin: 0 auto;
    padding: 1rem 2.3rem;
    border-radius: 20px;
    max-width: 100%;
    min-width: 60%;
    max-height: 500px;
    background: linear-gradient(#3d3b41 84%, #313033 20%) no-repeat;
  }
}

@media (max-width: 1140px) {
  .container {
    margin: 0 auto;
    align-items: center;
    max-width: 60%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

  .illustration {
    display: none;
    flex-direction: column;
    align-items: center;
  }

  .card {
    margin: 0 auto;
    padding: 1rem 2.3rem;
    border-radius: 20px;
    max-width: 100%;
    min-width: 60%;
    max-height: 500px;
    background: linear-gradient(#3d3b41 84%, #313033 20%) no-repeat;
  }
}

@media (max-width: 600px) {
  .container {
    margin: 0 auto;
    align-items: center;
    max-width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }

}
</style>
