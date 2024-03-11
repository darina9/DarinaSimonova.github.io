<template>
  <header class="header center">
    <div class="header-content">
      <div class="background-left">
        <div class="logo">
          <a href="#"><img class="logo-img" src="../assets/img/logo.svg" /></a>
        </div>
        <div class="background-left__text">
          <h2 class="background-left__title">Swiss Technology —</h2>
          <p class="background-left__subtitle">
            {{ $t("header.subtitle") }}
          </p>
        </div>
      </div>
      <div class="background-right">
        <div class="language">
          <ul class="language__list">
            <li class="language__item">
              <a
                :class="{
                  language__item_text: true,
                  active: currentLanguage === 'en',
                }"
                @click="switchToEnglish"
                >English</a
              >
            </li>
            <li class="language__item">
              <a
                :class="{
                  language__item_text: true,
                  active: currentLanguage === 'es',
                }"
                @click="switchToSpanish"
                >Español</a
              >
            </li>
            <li class="language__item">
              <a
                :class="{
                  language__item_text: true,
                  active: currentLanguage === 'ru',
                }"
                @click="switchToRussian"
                >Русский</a
              >
            </li>
          </ul>
        </div>
        <div class="background-right__text">
          <p>
            {{ $t("header.info") }}
          </p>
        </div>
        <div class="background-right__subtitle">
          <p>Estepona 2023</p>
        </div>
      </div>
    </div>
    <div class="header__btn">
      <button class="btn modal-open" @click="openModal">
        {{ $t("header.buttonText") }}
      </button>
      <a href="#video" class="video-scrolling">
        <svg
          width="45"
          height="51"
          viewBox="0 0 45 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.41 0.159912L0.780029 12.65V37.6299L22.41 50.1199L43.79 37.78L44.04 37.64V12.6599L22.41 0.169922V0.159912ZM43.04 37.0399L22.41 48.95L1.78003 37.0399V13.2199L22.41 1.30994L43.04 13.2199V37.0399Z"
            fill="black"
          />
          <path
            d="M21.91 12.75V34.58L13.93 29.98L13.43 30.84L22.41 36.03L31.39 30.84L30.89 29.98L22.91 34.58V12.75H21.91Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      // Инициализируем текущий язык по умолчанию как "ru"
      currentLanguage: "ru",
    };
  },
  mounted() {
    // При монтировании компонента проверяем, существует ли ссылка на дочерний компонент contentComponent
    if (this.$refs.contentComponent) {
      // Если ссылка существует, вызываем метод loadContent() из дочернего компонента
      this.$refs.contentComponent.loadContent();
    }
  },
  methods: {
    // Методы для переключения языка
    switchToEnglish() {
      // Вызываем метод switchLocale с передачей аргумента "en" для смены языка на английский
      this.switchLocale("en");
      // Обновляем значение текущего языка
      this.currentLanguage = "en";
    },
    switchToSpanish() {
      this.switchLocale("es");
      this.currentLanguage = "es";
    },
    switchToRussian() {
      this.switchLocale("ru");
      this.currentLanguage = "ru";
    },
    switchLocale(locale) {
      // Проверяем, совпадает ли выбранный язык с текущим языком
      if (this.$i18n.locale === locale) {
        return; // Игнорируем переход, если выбранный язык уже текущий
      }

      // Изменяем текущий язык в i18n
      this.$i18n.locale = locale;
      // Вызываем мутацию для изменения текущего языка в хранилище Vuex
      this.$store.dispatch("setLanguage", locale).then(() => {
        // После того, как мутация отработает, вызываем метод loadContent()
        if (this.$refs.contentComponent) {
          this.$refs.contentComponent.loadContent();
        }
      });
      // Эмиттируем событие changeLanguage с передачей выбранного языка
      this.$emit("changeLanguage", locale);
    },
    openModal() {
      console.log("Button clicked!");
      // Эмиттируем событие openModal, чтобы оповестить о том, что нужно открыть модальное окно
      this.$emit("openModal");
    },
  },
};
</script>


<style scoped>
@import url("@/assets/common-styles.css");
.header-content {
  display: flex;
  gap: 20px;
}
.background-left {
  display: block;
  height: 477px;
  width: 664px;
  background-image: url(../assets/img/back.png);
  position: relative;
}
.background-right {
  display: block;
  height: 375px;
  width: 520px;
  background: url(../assets/img/Clip.png);
  position: relative;
}
.modal-open {
  display: flex !important;
  opacity: 1 !important;
}
.logo {
  top: 33px;
  left: 210px;
  z-index: 1;
  position: absolute;
}
.background-left__text {
  display: block;
  position: absolute;
  top: 200px;
  left: 210px;
  width: 273px;
  gap: 9px;
}
.background-left__title {
  color: #3ca043;
  font-size: 34px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.background-left__subtitle {
  color: #000;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.background-right__text {
  display: block;
  position: absolute;
  width: 180px;
  top: 288px;
  right: 423px;
  color: #3ca043;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.background-right__subtitle {
  display: block;
  position: absolute;
  top: 400px;
  right: 200px;
}
.language {
  margin-top: 33px;
  margin-left: 300px;
}
.language__list {
  display: flex;
  gap: 6px;
}
.language__item {
  list-style-type: none;
}
.language__item:hover .language__item_text {
  color: #3ca043;
}
.language__item_text.active {
  color: #3ca043;
  font-weight: bold;
}
.language__item_text {
  color: #9e9e9e;
  font-size: 12.71px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  transition: color 0.3s ease;
}
.language__item_text.active {
  color: #3ca043;
}
.header__btn {
  display: flex;
  flex-direction: column;
  margin: 70px auto;
  align-items: center;
  gap: 40px;
}
.btn {
  display: flex;
  align-items: center;
  color: #3ca043;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 12px 27px;
  border: 1px solid #3ca043;
  background-color: #fff;
}
@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .header-content {
    gap: 0;
  }
  .background-left {
    max-width: 384px;
  }
  .background-right {
    width: 384px;
  }
  .logo {
    left: 110px;
  }
  .background-left__text {
    top: 100px;
    left: 100px;
    gap: 4px;
  }
  .background-left__title {
    font-size: 29px;
  }
  .background-left__subtitle {
    font-size: 25px;
  }
  .background-right__text {
    top: 235px;
    right: 195px;
    font-size: 16px;
  }
  .background-right__subtitle {
    top: 350px;
  }
  .language {
    margin-left: 200px;
  }
  .header__btn {
    margin: 20px auto;
    gap: 30px;
  }
}
@media only screen and (max-width: 767px) {
  .header-content {
    gap: 10px;
  }
  .background-left {
    width: 173px;
    background-image: url(../assets/img/imgonline-com-ua-Resize-Tla0gBHyIpj.png);
    background-repeat: no-repeat;
    height: 420px;
  }
  .background-right {
    width: 137px;
    background: url(../assets/img/imgonline-com-ua-Resize-58BUg3TCRacfM.png);
    background-repeat: no-repeat;
  }
  .logo {
    top: 15px;
    left: 10px;
  }
  .logo-img {
    width: 120px;
  }
  .background-left__text {
    top: 80px;
    left: 10px;
    width: 160px;
  }
  .background-left__title {
    font-size: 22px;
  }
  .background-left__subtitle {
    font-size: 18px;
    text-align: end;
    margin-top: 12px;
  }
  .background-right__text {
    width: 140px;
    top: 240px;
    right: 40px;
    font-size: 14px;
    z-index: 2;
  }
  .background-right__subtitle {
    top: 305px;
    right: 230px;
  }
  .language {
    margin-top: 15px;
    margin-left: 5px;
  }
  .language__list {
    gap: 4px;
  }
  .language__item_text {
    font-size: 10px;
  }
  .header__btn {
    margin: 40px auto;
    gap: 20px;
  }
  .btn {
    font-size: 14px;
  }
}
</style>
