<template>
    <div class="MainPage">
      <!-- Компонент заголовка -->
      <HeaderComponent @openModal="openModal" @changeLanguage="changeContentLanguage"/>  
      <!-- Компонент модального окна -->
      <!-- <ModalComponent :modalVisible="modalVisible" @closeModal="closeModal" /> -->
      <ModalComponent :modalVisible="modalVisible" :currentLanguage="currentLanguage" @update:modalVisible="modalVisible = $event"/>
      <ContentComponent ref="contentComponent" :currentLanguage="currentLanguage" />
      <VideoComponent @openModal="openModal"/>
      <OffersComponent  @openModal="openModal"/>
      <PartnersComponent @openModal="openModal"/>
      <TeamComponent ref="carousel" :currentLanguage="currentLanguage" @openModal="openModal"/>
      <NewsComponent/>
      <FooterComponent/>
      <!-- <router-view></router-view>
      <div v-if="is404">
      <NotFound />
    </div> -->
    </div>
  </template>
  
  <script>
  // Импортируем компоненты
 
  import HeaderComponent from '../components/HeaderComponent.vue';
  import ModalComponent from '../components/ModalComponent.vue';
  import ContentComponent from '@/components/ContentComponent.vue';
  import VideoComponent from '@/components/VideoComponent.vue'; 
  import OffersComponent from '../components/OffersComponent.vue';
  import PartnersComponent from '../components/PartnersComponent.vue'
  import TeamComponent from '../components/TeamComponent.vue'
  import NewsComponent from '../components/NewsComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  // import NotFound from './NotFound.vue';
  
  export default {
    name: 'MainPage',
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
    // NotFound
},
    data() {
    return {
      modalVisible: false, // Инициализируем состояние модального окна
      currentLanguage: 'ru'
    };
  },
  // computed: {
  //   is404() {
  //     // Проверяем, существует ли маршрут, если нет - отображаем страницу 404
  //     return !this.$route.matched.length;
  //   }
  // },
  methods: {
    // Метод для открытия модального окна
    openModal() {
      this.modalVisible = true;
      
    },

    // Метод для закрытия модального окна
    closeModal() {
      this.modalVisible = false;
    },
    changeContentLanguage(language) {
      
      this.currentLanguage = language; 
      
      this.$refs.contentComponent.loadContent();
      this.$refs.carousel.loadContent();
  }
}
  }
  
  </script>
  
 