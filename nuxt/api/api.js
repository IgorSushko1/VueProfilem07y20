export default async (req, res, next) => {
  let url = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, '')
  // берет из адреса вида "https://10.200.111.32:8081/list/1234?user=leo.liang&date=now#/aaa/bbb/c"
  // строки после IP "/list/1234"
  // и удаляет первый слеш => "list/1234"
  url = url.split('/')
  // разделяет строку на массив вида ["list", "1234","list","list3", "1234"]
  const method = url.pop()
  // возвращает последний элемент массива "1234"
  const controller = url.slice(1).join('/')
  // вернет строку от массива ["list", "1234","list","list3"]
  // объединит и выдаст "1234/list/list3"
  const api = require('../api/' + controller)
  // выполнит запрос и вернет содержимое require ../api/1234/list/list3
  const result = await api[method](req.params)
  // обратиться к содержимому файла api, вызовет метод и передаст ему параметры
  // 
  console.log(req.params)
  res.end(JSON.stringify(result))
}
