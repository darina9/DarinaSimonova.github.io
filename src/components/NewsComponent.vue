
  <template>
  <section class="content__news center__content">
    <h2 class="news-title title-big">{{ $t("news.title") }}</h2>
    <p class="news-text list">
      {{ $t("news.subtitle") }}
    </p>
    <div class="news-window" :class="{ expanded: isExpanded }">
      <div
        class="window-news"
        :id="newsId"
        :style="{ maxHeight: isExpanded ? 'unset' : '3em' }"
      >
        >
        <p class="window-date">{{ news.date }}</p>
        <p class="window-text text">{{ $t("news.text") }}</p>
      </div>
      <button class="window__btn btn" @click="toggleText">
        {{ buttonText }}
      </button>
    </div>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      newsId: "newsContent",
      news: {
        date: "25.01.2024",
      },
      isExpanded: false,
    };
  },
  computed: {
    buttonText() {
      return this.isExpanded ? this.$t("news.hide") : this.$t("news.readMore");
    },
  },
  methods: {
    toggleText() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>
  
  <style scoped>
@import url("../assets/common-styles.css");

.content__news {
  margin-top: 42px;
}
.news-title {
  text-align: center;
}
.news-text {
  text-align: center;
  margin-top: 14px;
}
.window-date {
  color: #b2b2b2;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.news-window {
  height: 160px;

  margin-top: 35px;
  border: 1px solid #3ca043;
  padding: 25px 30px 35px;
  position: relative; /* Для позиционирования кнопки */
  overflow: hidden; /* Скрытие содержимого, выходящего за пределы блока */
  transition: height 0.5s ease;
}
.window__btn {
  display: block; /* Переводим кнопку в блочный элемент */
  position: absolute; /* Абсолютное позиционирование */
  bottom: 10px; /* Отступ снизу */
  left: 50%; /* Положение по центру */
  transform: translateX(-50%); /* Центрирование */
  width: 150px; /* Фиксированная ширина кнопки */
  height: 40px; /* Фиксированная высота кнопки */
}
.window-text {
  overflow: hidden;
  transition: max-height 0.5s ease;
}
.window-news {
  overflow: hidden;
  transition: max-height 0.5s ease;
}

@media only screen and (max-width: 767px) {
  .news-text {
    margin: 14px 10px;
  }
  .news-window {
    height: 260px;
    margin: 35px 10px 0;
  }
}
</style>
  