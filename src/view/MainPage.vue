<template>
  <div class="MainPage">
    <HeaderComponent
      @openModal="openModal"
      @changeLanguage="changeContentLanguage"
    />
    <ModalComponent
      :modalVisible="modalVisible"
      :currentLanguage="currentLanguage"
      @update:modalVisible="modalVisible = $event"
    />
    <ContentComponent
      ref="contentComponent"
      :currentLanguage="currentLanguage"
    />
    <VideoComponent @openModal="openModal" />
    <OffersComponent @openModal="openModal" />
    <PartnersComponent @openModal="openModal" />
    <TeamComponent
      ref="carousel"
      :currentLanguage="currentLanguage"
      @openModal="openModal"
    />
    <NewsComponent />
    <FooterComponent />
  </div>
</template>
  
  <script>
import HeaderComponent from "../components/HeaderComponent.vue";
import ModalComponent from "../components/ModalComponent.vue";
import ContentComponent from "@/components/ContentComponent.vue";
import VideoComponent from "@/components/VideoComponent.vue";
import OffersComponent from "../components/OffersComponent.vue";
import PartnersComponent from "../components/PartnersComponent.vue";
import TeamComponent from "../components/TeamComponent.vue";
import NewsComponent from "../components/NewsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "MainPage",
  components: {
    HeaderComponent,
    ModalComponent,
    ContentComponent,
    VideoComponent,
    OffersComponent,
    PartnersComponent,
    TeamComponent,
    NewsComponent,
    FooterComponent,
  },
  data() {
    return {
      modalVisible: false, // Инициализируем состояние модального окна
      currentLanguage: "ru",
    };
  },
  methods: {
    // Метод для открытия модального окна
    openModal() {
      this.modalVisible = true;
    },
    // Метод для закрытия модального окна
    closeModal() {
      this.modalVisible = false;
    },
    // Метод для изменения языка контента
    changeContentLanguage(language) {
      this.currentLanguage = language; // Устанавливаем текущий язык контента
      // Загружаем контент на дочерние компоненты, имеющие ссылки с помощью $refs
      this.$refs.contentComponent.loadContent();
      this.$refs.carousel.loadContent();
    },
  },
};
</script>
  
 
  
 
