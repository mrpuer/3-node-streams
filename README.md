# Потоки Stream

* `npm run start1`
* `npm run start2`

## Часть 1

1.  Создать два потока: чтение и запись файла.
2.  Используя `crypto.createHash()` вычислить `md5` читаемых данных.
3.  Результат вывести в консоль и записать в файл.
4.  Использовать `pipe()`

## Часть 2

1.  Расширить предыдущие решние используя `stream.Transform`
2.  Реализовать свой класс, который будет конвертировать результат `crypto.createHash()` (бинарные данные - хеш‑сумма) в `hex` формат.
3.  Результат вывести в консоль и записать в файл.
4.  Использовать `pipe()`