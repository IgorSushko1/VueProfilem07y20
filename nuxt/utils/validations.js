const required = (_propertyType) => {
  return (v) => (v && v.length > 0) || 'Не валидный запрос'
}

const minLength = (_propertyType, minLength) => {
  return (v) => (v && v.length >= minLength) || 'Измени минимальную длину'
}

const maxLength = (_propertyType, maxLength) => {
  return (v) =>
    (v && v.length <= maxLength) ||
    'Опять ошибка в максимальной длине, сколько можно'
}

const emailFormat = () => {
  const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  return (v) => (v && regex.test(v)) || 'Должен быть валидный email'
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat,
}
