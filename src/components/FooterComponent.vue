<template>
    <footer class="footer center__content">
      <div class="footer-left footer-text">
        <ul class="left-list">
          <li class="left-item">Swiss Technology S.L.</li>
          <li class="left-item">B72850266</li>
          <li class="left-item">Poligono Nueva Campana, 26</li>
        </ul>
      </div>
      <div class="footer-center footer-text">
        <ul class="center-list">
          <li class="center-item">Marbella, 29601</li>
          <li class="center-item"><a class="link" href="tel:+41 788 398 537">tlf.: +41 788 398 537</a></li>
          <li class="center-item"><a class="link" href="mailto:info@swisstechnology.es">email: info@swisstechnology.es</a></li>
        </ul>
      </div>
      <div class="footer-right">
        <ul class="right-list">
          <li class="right-item"><a href="https://www.linkedin.com/company/swiss-technology/?viewAsMember=true"><img src="../assets/img/LINKEDIN_icon-icons.com_65538 (1).png"></a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
   
  }
  </script>
  
  <style scoped>
  @import url("../assets/common-styles.css");
  .footer{
    margin-top: 50px;
    display: flex;
    gap: 100px;
    margin-bottom: 50px;
    justify-content: center;
}
.footer-text{
    color: #878787;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.left-item,.right-item,.center-item{
    list-style-type: none;
}
.right-list{
    display: flex;
    gap: 20px;    
}
.link{
    text-decoration: none;
    color: #878787;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.esp{
    padding-right: 40px;
}
@media only screen and (max-width: 767px) {
    .footer{          
        gap: 20px;
        margin-bottom: 40px;          
        padding: 0 10px;
    }      
    .footer-text{          
        font-size: 11px;     
    }      
    .link{          
        font-size: 11px;    
    }     
}

  </style>