import { setLocale } from 'yup'


setLocale({
  string: {
    email: '不正なメールアドレスです',
    min: ({ min }) => `${min}文字以上で入力してください`,
    max: ({ max }) => `${max}文字以下で入力してください`
  },
  number: {
    min: ({ min }) => `${min}以上の値を入力してください`,
    max: ({ max }) => `${max}以下の値を入力してください`,
    integer: () => '整数を入力してください'
  },
  mixed: {
    required: '必須項目です',
    notType: '不正な値です'
  },
  array: {
    min: ({ min }) => `${min}以上の項目を入力してください`,
    max: ({ max }) => `${max}以下の項目を入力してください`
  }
})
