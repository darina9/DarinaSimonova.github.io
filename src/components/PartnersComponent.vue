<template>
  <section class="content__partners center">
    <h2 class="partners-title title-big">
      {{ $t("partners.title") }}
    </h2>
    <ul class="partners-list list">
      <li class="partners-item">
        {{ $t("partners.item1") }}
      </li>
      <li class="partners-item">
        {{ $t("partners.item2") }}
      </li>
    </ul>
    <button class="partners__btn btn" @click="openModal">
      {{ $t("partners.buttonText") }}
    </button>
  </section>
</template>
  
  <script>
export default {
  methods: {
    // Метод для вызова события открытия модального окна
    openModal() {
      this.$emit("openModal");
    },
  },
};
</script>
  
  <style scoped>
@import url("@/assets/common-styles.css");

.partners-title {
  margin-top: 50px;
  text-align: center;
}
.partners-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 650px;
  text-align: center;
  margin: 30px auto 0;
}
.partners__btn {
  display: flex;
  margin: 50px auto;
}
</style>
