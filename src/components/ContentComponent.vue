<template>
  <section class="content">
    <div class="content__advantages center__content">
      <h3 class="content__advantages_title title">
        {{ $t("content.advantages.title") }}
      </h3>
      <ul class="content__advantages_list list">
        <li
          v-for="(item, index) in AdvantagesItem"
          :key="index"
          class="content__advantages_item"
        >
          <svg
            :class="item.svgClass"
            :width="item.svgWidth"
            :height="item.svgHeight"
            :viewBox="item.svgViewBox"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path :d="item.svgPath" :fill="item.svgFill" />
          </svg>
          <p class="content__advantages item-text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <div class="content__info center">
      <div class="content__info_top-left">
        <div class="top-left title">New Golden Mile —</div>

        <div>
          <img
            class="top-left_img"
            src="../assets/img/top-left.png"
            alt="content-image"
          />
        </div>
      </div>
      <div class="content__info_top-right">
        <div class="top-right">
          <h2 class="top-right_title title">
            {{ $t("content.info.top_right.title") }}
          </h2>
          <p class="top-right_text">
            {{ $t("content.info.top_right.text") }}
          </p>
        </div>
        <div class="top-right_text"></div>
        <div class="top-right_img">
          <img class="img-stripes" src="../assets/img/top-right.png" />
        </div>
      </div>
      <div class="content__info_bottom-left">
        <h2 class="bottom-left_title title">
          {{ $t("content.info.bottom_left.title") }}
        </h2>
      </div>
      <div class="content__info_bottom-right">
        <img class="img_bottom-right" src="../assets/img/btm-right.png" />
      </div>
    </div>
    <div class="content__list center__content">
      <ul class="list-left">
        <li
          v-for="(item, index) in ListItemLeft"
          :key="index"
          class="list_item list"
        >
          <svg
            :class="item.svgClass"
            :width="item.svgWidth"
            :height="item.svgHeight"
            :viewBox="item.svgViewBox"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path :d="item.svgPath" :fill="item.svgFill" />
          </svg>
          <p class="list-left_text item-text">{{ item.text }}</p>
        </li>
      </ul>
      <ul class="list-right list">
        <li
          v-for="(item, index) in ListItemRight"
          :key="index"
          class="list_item list"
        >
          <svg
            :class="item.svgClass"
            :width="item.svgWidth"
            :height="item.svgHeight"
            :viewBox="item.svgViewBox"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path :d="item.svgPath" :fill="item.svgFill" />
          </svg>
          <p class="list-left_text item-text">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
    <script>
import icons from "../locales/icons.json";
import enContent from "../locales/en.json";
import ruContent from "../locales/ru.json";
import esContent from "../locales/es.json";

export default {
  data() {
    return {
      AdvantagesItem: null,
      ListItemLeft: null,
      ListItemRight: null,
    };
  },

  computed: {
    currentLanguage() {
      return this.$store.state.currentLanguage; // Используемая переменная хранится в глобальном хранилище
    },
  },
  watch: {
    // Следим за изменениями текущего языка и вызываем метод loadContent при изменении
    currentLanguage: "loadContent", // При изменении currentLanguage вызываем метод loadContent
  },

  mounted() {
    // После монтирования компонента, если есть текущий язык, загружаем контент
    if (this.currentLanguage) {
      this.loadContent(); // Вызываем loadContent() после создания компонента
    }
  },

  methods: {
    // Метод для загрузки контента в зависимости от текущего языка
    loadContent() {
      if (this.currentLanguage) {
        // Получаем данные иконок из объекта icons
        const iconsDataAdvantages = icons.icons.AdvantagesItem;
        const iconsDataLeft = icons.icons.ListItemLeft;
        const iconsDataRight = icons.icons.ListItemRight;

        // Выбор соответствующего контента в зависимости от текущего языка
        let descriptionsAdvantages, descriptionsLeft, descriptionsRight;

        switch (this.currentLanguage) {
          case "ru":
            descriptionsAdvantages = ruContent.content.advantages.items;
            descriptionsLeft = ruContent.content.lists.left;
            descriptionsRight = ruContent.content.lists.right;
            break;
          case "en":
            descriptionsAdvantages = enContent.content.advantages.items;
            descriptionsLeft = enContent.content.lists.left;
            descriptionsRight = enContent.content.lists.right;
            break;
          case "es":
            descriptionsAdvantages = esContent.content.advantages.items;
            descriptionsLeft = esContent.content.lists.left;
            descriptionsRight = esContent.content.lists.right;
            break;
        }
        // Маппим данные иконок и описаний в соответствующие массивы данных
        this.AdvantagesItem = iconsDataAdvantages.map((icon, index) => {
          return {
            svgClass: icon.svgClass,
            svgWidth: icon.width,
            svgHeight: icon.height,
            svgViewBox: icon.viewBox,
            svgPath: icon.path,
            svgFill: icon.svgFill,
            text: descriptionsAdvantages[index].text,
          };
        });

        this.ListItemLeft = iconsDataLeft.map((icon, index) => {
          return {
            svgClass: icon.svgClass,
            svgWidth: icon.width,
            svgHeight: icon.height,
            svgViewBox: icon.viewBox,
            svgPath: icon.path,
            svgFill: icon.svgFill,
            text: descriptionsLeft[index].text,
          };
        });

        this.ListItemRight = iconsDataRight.map((icon, index) => {
          return {
            svgClass: icon.svgClass,
            svgWidth: icon.width,
            svgHeight: icon.height,
            svgViewBox: icon.viewBox,
            svgPath: icon.path,
            svgFill: icon.svgFill,
            text: descriptionsRight[index].text,
          };
        });
      }
    },
  },
};
</script>
<style >
@import url("@/assets/common-styles.css");
.content__advantages {
  display: flex;
  gap: 100px;
}
.content__advantages_title {
  width: 278px;
}
.content__advantages_list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.content__advantages_item {
  display: flex;
  align-items: start;
  gap: 10px;
}
.item-text {
  max-width: 383px;
}
.content__info {
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;
}
.content__info_top-left {
  max-height: 477px;
}
.top-left {
  margin-left: 175px;
}
.top-left_img {
  margin-top: 80px;
  max-width: 560px;
  height: 360px;
}
.content__info_top-right {
  max-height: 477px;
}
.top-right {
  display: block;
  max-width: 450px;
  position: absolute;
}
.img-stripes {
  min-width: 625px;
  display: block;
  position: relative;
  top: -100px;
  z-index: -1;
}
.top-right_title {
  color: #3ca043;
  font-size: 31px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 40px;
}
.top-right_text {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 100px;
  margin-left: 80px;
  min-width: 358px;
}
.content__info_bottom-left {
  width: 560px;
}
.bottom-left_title {
  color: #3ca043;
  font-size: 31px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 295px;
  margin-top: 30px;
  margin-left: 200px;
}
.content__list {
  margin-top: 60px;
  display: flex;
}
.list-left {
  width: 446px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.list-right {
  width: 446px;
  display: flex;
  flex-direction: column;
  gap: 22px;
}
.list_item {
  display: flex;
  gap: 15px;
}
.svg {
  text-align: right;
  width: 29px;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .content__advantages {
    gap: 20px;
  }
  .content__advantages_title {
    width: 260px;
  }
  .content__advantages_list {
    text-wrap: wrap;
  }
  .content__info {
    margin-top: 40px;
  }
  .content__info_top-left {
    height: 300px;
  }
  .top-left {
    margin-left: 34px;
  }
  .top-left_img {
    margin-top: 90px;
    width: 384px;
    max-height: 220px;
  }
  .content__info_top-right {
    max-width: 384px;
  }
  .top-right {
    max-width: 384px;
  }
  .img-stripes {
    max-width: 384px;
    min-height: 200px;
    min-width: 384px;
    top: -37px;
  }
  .top-right_img {
    width: 384px;
  }
  .top-right_title {
    font-size: 25px;
    margin-left: 0px;
  }

  .top-right_text {
    font-size: 16px;
    margin-top: 90px;
    margin-left: 0px;
    max-width: 140px;
    margin-left: 20px;
  }

  .content__info_top-left {
    width: 384px;
  }
  .content__info_bottom-left {
    max-width: 352px;
    margin-top: -20px;
  }
  .bottom-left_title {
    max-width: 238px;
    margin-top: -20px;
    margin-left: 34px;
    font-size: 25px;
  }
  .content__info_bottom-left {
    width: 384px;
  }
  .content__info_bottom-right {
    width: 384px;
    margin-left: 32px;
  }
  .img_bottom-right {
    max-width: 380px;
    margin-top: -35px;
  }
  .content__list {
    margin-top: 40px;
    margin-left: 30px;
    min-height: 360px;
  }
  .list-left {
    max-width: 350px;
    gap: 18px;
  }
  .list-right {
    width: 350px;
    gap: 18px;
  }
  .list_item {
    gap: 10px;
  }
  .list-left_text {
    text-wrap: wrap;
    max-width: 240px;
  }
}
@media only screen and (max-width: 767px) {
  .content__advantages {
    flex-direction: column;
    gap: 40px;
  }
  .content__advantages_title {
    width: 300px;
    text-align: center;
  }
  .content__advantages_list {
    align-items: center;
    gap: 10px;
  }
  .content__advantages_item {
    align-items: center;
  }
  .item-text {
    max-width: 260px;
  }

  .content__info {
    margin-top: 60px;
  }
  .top-left {
    margin-left: 0px;
    max-width: 160px;
    text-align: center;
  }
  .top-left_img {
    margin-top: 40px;
    max-width: 160px;
    height: 110px;
  }

  .top-right {
    max-width: 160px;
  }
  .top-right_img {
    min-width: 160px;
  }

  .img-stripes {
    max-width: 160px;
    min-width: 160px;
    top: 42px;
    height: 150px;
  }
  .top-right_title {
    margin-left: 30px;
    font-size: 18px;
  }
  .top-right_text {
    display: none;
    font-size: 14px;
    margin-left: 0px;
    min-width: 80px;
  }
  .content__info_bottom-left {
    width: 160px;
  }
  .bottom-left_title {
    font-size: 18px;
    max-width: 150px;
    margin-top: 5px;
    margin-left: 10px;
  }
  .content__info_bottom-right {
    width: 160px;
    position: relative;
    top: -2px;
  }
  .img_bottom-right {
    max-width: 160px;
    min-height: 110px;
  }
  .content__list {
    margin-top: 40px;
    flex-direction: column;
    margin-left: 16px;
    gap: 16px;
  }
  .list-left {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .list-right {
    width: 300px;
    gap: 16px;
  }
  .list_item {
    gap: 10px;
  }
  .list-left_text {
    max-width: 240px;
  }
  .svg {
    width: 26px;
  }
}
</style>
