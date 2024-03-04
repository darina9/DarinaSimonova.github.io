<template>
  <div>
    <div id="feedbackModal" class="modal-background" v-if="modalVisible " >
      <p>{{ modalVisible }}</p>
      <div class="modal">
        <div class="modal-text center__content">
          <h2 class="modal-title title">{{ $t('modal.title') }}</h2>
          <p>
            {{ $t('modal.content') }}
          </p>
        </div>
        <div class="modal-container">
          <div class="modal-info">
            <ul class="modal-info_list list footer-text">
              <li class="modal-info_item">
                <h3 class="modal-info_title">{{ $t('modal.address.title') }}</h3>
                <p class="modal-info_text">
                  Swiss Technology S.L. B72850266<br />
                  Poligono Nueva Campana, 26
                </p>
              </li>
              <li class="modal-info_item">
                <h3 class="modal-info_title">{{ $t('modal.phone.title') }}</h3>
                <p class="modal-info_text">+41 788 398 537</p>
              </li>
              <li class="modal-info_item">
                <h3 class="modal-info_title">{{ $t('modal.email.title') }}</h3>
                <p class="modal-info_text">email: info@swisstechnology.es</p>
              </li>
            </ul>
          </div>
          <span class="close-btn" @click="closeModal">X</span>
          <form @submit.prevent="submitForm" class="modal-form">
            <div class="modal-column">
              <label for="yourName" class="visually-hidden">{{ $t('modal.form.name') }}</label>
              <input
                type="text"
                id="yourName"
                v-model="formData.yourName"
                :placeholder="$t('modal.form.namePlaceholder')"
                required
              />
              <label for="yourSurname" class="visually-hidden"
                >{{ $t('modal.form.surname') }}</label
              >
              <input
                type="text"
                id="yourSurname"
                v-model="formData.yourSurname"
                :placeholder="$t('modal.form.surnamePlaceholder')"
                required
              />
              <label for="yourPhone" class="visually-hidden">{{ $t('modal.form.phone') }}</label>
              <input
                type="text"
                id="yourPhone"
                v-model="formData.yourPhone"
                :placeholder="$t('modal.form.phonePlaceholder')"
                required
              />
              <label for="yourEmail" class="visually-hidden">{{ $t('modal.form.email') }}</label>
              <input
                type="email"
                id="yourEmail"
                v-model="formData.yourEmail"
                :placeholder="$t('modal.form.emailPlaceholder')"
                required
              />
              <label for="yourMessage" class="visually-hidden"
                >{{ $t('modal.form.message') }}</label
              >
              <textarea
                id="yourMessage"
                v-model="formData.yourMessage"
                :placeholder="$t('modal.form.messagePlaceholder')"
                required
              ></textarea>
            </div>
            <button type="submit" class="submit-btn">{{ $t('modal.form.submit') }}</button>
          </form>
         
          <div id="warningContainer">{{ warningMessage }}</div>
        </div>
      </div>
    </div>
    
     
  </div>
</template>

<script>
export default {
  props: ["modalVisible","currentLanguage"],
  data() {
    return {
      visible: this.modalVisible,
      formData: {
        yourName: "",
        yourSurname: "",
        yourPhone: "",
        yourEmail: "",
        yourMessage: "",
      },
      warningMessage: "",
      formSubmitted: false,
      formUrl: "https://formspree.io/f/xrgngyko",
       
    };
  },
  methods: {
   
    validateForm() {
      const inputs = this.$el.querySelectorAll(".modal-form input:required");
      let allFieldsFilled = true;
      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          allFieldsFilled = false;
          input.style.border = "1px solid red"; // Добавляем стиль к полю с пустым значением
        } else {
          input.style.border = "1px solid #ccc"; // Восстанавливаем стандартный стиль
        }
      });
      if (!allFieldsFilled) {
        // Если есть незаполненные поля, можете добавить здесь дополнительную логику обработки
        return false; // Предотвращаем отправку формы в случае ошибки
      } else {
        // Здесь можете добавить логику отправки данных формы
        const modalForm = this.$el.querySelector(".modal-form");
        if (modalForm) {
          modalForm.reset(); // Этот метод обнуляет значения полей формы
        }
        window.location.href = 'https://gilded-eclair-c21534.netlify.app/';
        // window.location.href = "http://127.0.0.1:5500/";
        return false; // Предотвращаем отправку формы, так как не хотим переходить на сторонний сайт
      }
    },
    openModal() {
      const feedbackModal = this.$el.querySelector("#feedbackModal");
      if (feedbackModal) {
        feedbackModal.style.display = "flex";
        setTimeout(() => {
          feedbackModal.classList.add("modal-open");
        }, 100);
      }
    },
    submitForm() {
      // Отправка данных формы через Formspree
      // Поменяйте "https://formspree.io/f/xrgngyko" на URL вашей формы в Formspree
      const formUrl = "https://formspree.io/f/xrgngyko";
      
      // Отправка данных формы с помощью AJAX
      fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.formData)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Ошибка при отправке формы");
          }
          return response.json();
        })
        .then(() =>{
          // Обработка успешной отправки формы
          this.formSubmitted = true;
          this.closeModal();       
        
        })
      
        .catch(error => {
          // Обработка ошибки при отправке формы
          console.error("Ошибка при отправке формы:", error.message);
          // Можете добавить здесь логику для вывода сообщения об ошибке отправки формы
        });
        
      },
    closeModal() {
      const modal = this.$el.querySelector("#feedbackModal");
      if (modal) {
        modal.classList.remove("modal-open");
        setTimeout(() => {
          modal.style.display = "none";
    }, 300);
  }
  // Изменяем локальное состояние компонента
      this.isVisible = false;
  // Эмитируем событие для оповещения родительского компонента
      this.$emit("update:modalVisible", this.isVisible);
},
    // validate(event) {
    //   const phoneInput = this.$el.querySelector('#yourPhone');
    //   const inputValue = phoneInput.value;
    //   // Очищаем номер телефона от всего, кроме цифр
    //   const cleanedValue = inputValue.replace(/\D/g, '');
    //   // Форматируем номер телефона
    //   const formattedValue = this.formatPhoneNumber(cleanedValue);
    //   // Устанавливаем отформатированное значение обратно в поле ввода
    //   phoneInput.value = formattedValue;
    // },
    formatPhoneNumber(value) {
      // Здесь можете реализовать логику форматирования номера телефона
      // В примере просто возвращаем введенное значение без изменений
      return value;
    },
  },
  mounted() {
    const submitBtn = this.$el.querySelector(".submit-btn");
    if (submitBtn) {
      submitBtn.addEventListener("click", (event) => {
        event.preventDefault();
        this.validateForm();
      });
    }
    // Закрытие модального окна при клике за его пределами
    document.addEventListener("click", (event) => {
      const modal = this.$el.querySelector("#feedbackModal");
      if (event.target === modal) {
        this.closeModal();
      }
    });
  },
};
</script>
  <style scoped>
@import url("@/assets/common-styles.css");
.modal-background {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
  z-index: 10;

  transition: opacity 0.5s ease;
}
#feedbackModal.modal-open {
  display: flex;
  opacity: 1;
}
.modal-container {
  display: flex;
  gap: 160px;
}
/* Стили для модального окна */
.modal {
  background: #fff;
  width: 1200px;
  padding: 70px 50px 70px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  text-align: center;
  z-index: 12;
}
.modal-open {
  display: flex !important;
  opacity: 1 !important;
}
.modal-text {
  align-items: start;
}
.modal-title {
  margin-bottom: 20px;
}
.modal-info_list {
  text-align: center;
  margin-left: 160px;
}
.modal-info_item {
  margin-top: 60px;
}
/* Стили для кнопки закрытия */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
/* Стили для формы в модальном окне */
.modal-form {
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
}
.modal-form input:required {
  border: 1px solid #ccc; /* Устанавливаем стандартный стиль для обязательных полей */
}
.modal-form input:required:invalid {
  border: 1px solid red; /* Устанавливаем стиль для обязательных полей с неверными значениями */
}
.modal-column {
  width: 100%;
  display: flex;
  flex-direction: column;
}
input {
  border-radius: 5px;
  padding: 15px;
  margin: 15px;
  border: none;
  background: #f0f1f8;
}
textarea {
  padding: 15px;
  margin: 15px;
  border-radius: 5px;
  border: none;
  background: #f0f1f8;
}
/* Стили для половины кнопки отправить */
.submit-btn {
  border: none;
  margin-top: 20px;
  background: #3ca043;
  padding: 30px;
  border-radius: 5px;
  color: #fff;
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

@media only screen and (max-width: 1439px) and (min-width: 768px) {
  .modal{
    margin-left: -25px;
  }
  .modal-container {
    gap: 40px;
  }
  .modal {
    width: 600px;
  }
  .modal-info_list {
    margin-left: 20px;
  }
}
@media only screen and (max-width: 767px) {
  .modal-container {
    gap: 0;
  }
  .modal {
    width: 320px;
  }
  .modal-info_list {
    margin-left: 10px;
  }
  .modal-info_text {
    font-size: 11px;
  }
  .close-btn {
    right: 60px;
  }
  .modal-form {
    width: 167px;
  }
}
</style>
