<template>
  <section id="video" class="content__video center__content">
    <h3 class="video-title title">
      {{ $t("video.title") }}
    </h3>
    <div class="video">
      <iframe
        width="100%"
        height="472"
        :src="videoSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
    <button class="video__btn btn" @click="openModal">
      {{ $t("video.buttonText") }}
    </button>
  </section>
</template>
  
<script>
export default {
  data() {
    return {
      videoSrc: "https://www.youtube.com/embed/qcfYeI7WKgI?si=aR2hGS7KlNkSv1uS",
    };
  },
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
.content__video {
  margin-top: 60px;
}
.video-title {
  text-align: center;
  margin-left: 100px;
  margin-right: 100px;
}
.video {
  margin: 60px auto 42px;
}
.video__btn {
  display: flex;
  margin: 40px auto 60px;
}
@media only screen and (max-width: 767px) {
  .content__video {
    margin-top: 40px;
  }
  .video-title {
    margin-left: 20px;
    margin-right: 20px;
  }
  .video {
    margin: 40px auto 40px;
    max-width: 300px;
    align-items: center;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
    margin: 20 10px;
  }
  .video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .video__btn {
    margin: 40px auto 40px;
  }
}
</style>
