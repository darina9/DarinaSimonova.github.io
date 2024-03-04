<template>
  <section class="content__team center__content">
    <h2 class="team-title title-big">
      {{ $t("team.title1") }}
    </h2>
    <p class="team-text list">
      {{ $t("team.text") }}
    </p>
    <h2 class="team-title title-big">{{ $t("team.title2") }}</h2>
    <div class="carousel-container">
      <div class="carousel" ref="carousel">
        <div
          v-for="(item, index) in teamItems"
          :key="index"
          class="carousel-slide"
        >
          <div class="block">
            <div class="block-title">
              <h3 class="title-block list">{{ item.title }}</h3>
            </div>
            <div class="block-text text">
              <p>{{ item.description }}</p>
              <p>
                {{ $t("team.requiredLanguages") }}
              </p>
            </div>
            <button class="block__btn btn" @click="openModal">
              {{ $t("team.buttonText") }}
            </button>
          </div>
        </div>
      </div>
      <div class="controls">
        <button class="prev-btn" @click="moveToPrev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="24"
            viewBox="0 0 11 24"
            fill="none"
          >
            <path
              d="M10.09 23.46L0.950012 11.9399L10.09 0.410156L10.87 1.02979L2.23001 11.9399L10.87 22.8398L10.09 23.46Z"
              fill="#3CA043"
            />
          </svg>
        </button>
        <button class="next-btn" @click="moveToNext">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="24"
            viewBox="0 0 11 24"
            fill="none"
          >
            <path
              d="M1.38 23.46L0.599976 22.8398L9.23999 11.9399L0.599976 1.02979L1.38 0.410156L10.52 11.9399L1.38 23.46Z"
              fill="#3CA043"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
  
  <script>
export default {
  
  data() {
    return {
      // teamItems: [
      //   {
      //     title: this.$t("team.position1"),
      //     description: this.$t("team.position1Description"),
      //   },
      //   {
      //     title: this.$t("team.position2"),
      //     description: this.$t("team.position2Description"),
      //   },
      //   {
      //     title: this.$t("team.position3"),
      //     description:
      //     this.$t('team.position3Description'),
      //   },
      // ],
      teamItems: [],
      currentIndex: 0,
    };
  },
  methods: {
    
    openModal() {
      this.$emit("openModal");
    },
    moveToNext() {
      this.currentIndex = (this.currentIndex + 1) % this.teamItems.length;
      this.updateCarousel();
    },
    moveToPrev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.teamItems.length) % this.teamItems.length;
      this.updateCarousel();
    },
    updateCarousel() {
      const windowWidth = window.innerWidth;
      let slideWidth;

      if (windowWidth >= 1440) {
        slideWidth = 260; // 250px for each slide + 10px margin
      } else if (windowWidth >= 768 && windowWidth <= 1439) {
        slideWidth = 233; // 227px for each slide + 6px margin
      } else {
        slideWidth = 320; // Only 227px for each slide
      }

      const translateValue = -this.currentIndex * slideWidth;
      this.$refs.carousel.style.transform = `translateX(${translateValue}px)`;
    },
    loadContent() {
      
      switch (this.$i18n.locale) {
        case "ru":
        console.log('Loading content for Russian language');
          this.teamItems = [
            {
              title: this.$t("team.position1"),
              description: this.$t("team.position1Description"),
            },
            {
              title: this.$t("team.position2"),
              description: this.$t("team.position2Description"),
            },
            {
              title: this.$t("team.position3"),
              description: this.$t("team.position3Description"),
            },
          ];
          break;
        case "en":
        console.log('Loading content for English language');
          this.teamItems = [
            {
              title: this.$t("team.position1"),
              description: this.$t("team.position1Description"),
            },
            {
              title: this.$t("team.position2"),
              description: this.$t("team.position2Description"),
            },
            {
              title: this.$t("team.position3"),
              description: this.$t("team.position3Description"),
            },
          ];
          break;
        case "es":
        console.log('Loading content for Spanish language');
          this.teamItems = [
            {
              title: this.$t("team.position1"),
              description: this.$t("team.position1Description"),
            },
            {
              title: this.$t("team.position2"),
              description: this.$t("team.position2Description"),
            },
            {
              title: this.$t("team.position3"),
              description: this.$t("team.position3Description"),
            },
          ];
          break;
        default:
        console.log('Language not recognized');
          this.teamItems = [];
      }
    
    },
  },
  mounted() {
    console.log('mounted method called');
    this.updateCarousel();
    window.addEventListener("resize", this.updateCarousel);
    this.loadContent();
    this.$root.$on('languageChanged', this.loadContent);
  },
  destroyed() {
    window.removeEventListener("resize", this.updateCarousel);
    this.$root.$off('languageChanged', this.loadContent);
  },
};
</script>
  
  <style scoped>
@import url("../assets/common-styles.css");
.content__team {
  background-color: #f0edeb;
  padding-bottom: 55px;
}
.team-title {
  padding-top: 40px;
  text-align: center;
}
.team-text {
  text-align: center;
  margin-top: 15px;
}
.carousel-container {
  position: relative;
  width: 780px;
  margin: 30px auto;
  overflow: hidden;
}
.carousel {
  display: flex;
  transition: transform 0.5s ease;
}
.carousel-slide {
  flex: 0 0 250px;
  margin: 0 5px;
}
.block {
  width: 100%;
  height: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.controls {
  position: relative;
  top: -120px;
  width: 880px;
  margin: auto;
}
.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  font-size: 24px;
  background-color: #f0edeb;
  border: none;
  cursor: pointer;
  padding: 10px;
}
.prev-btn {
  left: 5px;
}
.next-btn {
  right: 100px;
}
.prev-btn svg,
.next-btn svg {
  width: 20px;
  height: 20px;
}
.block-text {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 17px;
  padding: 0 17px;
  margin-top: 20px;
}
.block__btn {
  display: flex;
  margin: auto auto 17px;
}
.block-title {
  width: 250px;
  height: 90px;
  background-image: url(../assets/img/Group.png);
  background-repeat: no-repeat;
  background-size: auto 90px;
}
.title-block {
  padding: 20px 50px;
}
.exception {
  padding: 14px 15px 11px;
  text-align: center;
}

@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .carousel-container {
    max-width: 700px;
  }
  .carousel {
    overflow-x: auto;
  }
  .carousel-slide {
    flex: 227px;
    margin-right: 6px;
    margin-left: 0;
    box-sizing: border-box;
  }
  .block {
    width: 227px;
  }
  .controls {
    top: -120px;
    width: 100%;
  }
  .prev-btn {
    left: 25px;
  }
  .next-btn {
    right: 25px;
  }
  .block-title {
    width: 218px;
  }
}
@media only screen and (max-width: 767px) {
  .content__team {
    padding-bottom: 10px;
  }
  .carousel-container {
    width: 100%;
  }
  .carousel-slide {
    flex: 0 0 320px;
    margin: 0 auto;
  }
  .controls {
    width: 100%;
    margin: auto;
  }
  .prev-btn {
    left: 20px;
  }
  .next-btn{
    right: 20px;
  }
  .block-text{
    text-align: center;
  }
  .block-title {
    width: 320px;
    background-size: 100%;
  }
  .title-block {
    padding: 14px 15px 11px;
    text-align: center;
  }
}
</style>