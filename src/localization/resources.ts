// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
export const resources = {
  en: {
    translation: {
      buttons: {
        changeTheme: 'Change theme',
        delete: 'Delete',
        openModal: 'open modal',
        enter: 'Enter',
        registration: 'Registration',
        add: 'Add',
        edit: 'Edit',
      },
      titles: {
        basket: 'Basket Products',
      },
      text: {
        category: 'Category',
        name: 'Name',
        description: 'Descrription',
        price: 'Price',
        modalInputPlaceholder: 'modal content',
      },
      forms: {
        email: {
          title: 'E-Mail',
          errors: {
            required: 'field email is required',
            valid: 'field email is unvalid',
          },
        },
        password: {
          title: 'Password',
          errors: {
            required: 'field password is required',
            min: 'field password must be at least 5 characters',
          },
        },
        passwordRepeat: {
          title: 'Repeat password',
          errors: {
            required: 'field password is required',
            notMatch: 'Password mismatch',
          },
        },
        price: {
          title: 'Price',
          errors: { required: 'field price is required' },
        },
        name: {
          title: 'Name',
          errors: { required: 'field name is required' },
        },
        desc: {
          title: 'Description',
          errors: {},
        },
        category: {
          title: 'Category',
          errors: { required: 'field category is required' },
        },
      },
    },
  },
  ru: {
    translation: {
      buttons: {
        changeTheme: 'Изменить тему',
        delete: 'Удалить',
        openModal: 'открыть мод. окно',
        enter: 'Войти',
        registration: 'Регистрация',
        add: 'Добавить',
        edit: 'Редактировать',
      },
      titles: {
        basket: 'Продукты корзины',
      },
      text: {
        category: 'Категория',
        name: 'Название',
        description: 'Описание',
        price: 'Цена',
        modalInputPlaceholder: 'Контент мод. окна',
      },
      forms: {
        email: {
          title: 'Эл. почта',
          errors: {
            required: 'поле эл. почта обязательно для заполнения',
            valid: 'поле эл. почта не соответствет требованиям',
          },
        },
        password: {
          title: 'Пароль',
          errors: {
            required: 'Поле пароль обязательно для заполнения',
            min: 'Поле пароль должно содердать больше 5 символов',
          },
        },
        passwordRepeat: {
          title: 'Повторите пароль',
          errors: {
            required: 'Поле пароль обязательно для заполнения',
            notMatch: 'Пароли не совпадают',
          },
        },
        price: {
          title: 'Стоимость',

          errors: { required: 'Поле стоимость обязательно для заполнения' },
        },
        name: {
          title: 'Название',
          errors: { required: 'Поле название обязательно для заполнения' },
        },
        desc: {
          title: 'Описание',
          errors: {},
        },
        category: {
          title: 'Категория',
          errors: { required: 'Поле категория обязательно для заполнения' },
        },
      },
    },
  },
};
