<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <router-link to="/">Вернуться на главную</router-link>
    </div>
  </template>
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 100px;
  }
  
  h1 {
    font-size: 72px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 24px;
    margin-bottom: 40px;
  }
  
  router-link {
    font-size: 20px;
    color: blue;
    text-decoration: underline;
  }
  </style>