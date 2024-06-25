let result = (str) => {
    if (str == '') {
        return '<h1>Строка пуста'
    }
    document.write(`<h1>Исходная строка: ${str}<br>`);
    let str1, str2, res = '';
    str = str.trim();
    while ((str.length > 0) && (str.indexOf(' ') != -1)) {
        str1 = str.slice(0, str.indexOf(' '));
        str = str.slice(str.indexOf(' ') + 1);
        if (str.indexOf(' ') == -1) {
            str2 = str;
            str = '';
        }else{
            str2 = str.slice(0, str.indexOf(' '));
            str = str.slice(str.indexOf(' ') + 1);
        }
        if ((!isNaN(str2)) && (isNaN(str1))) {
            res += str1 + ' ';
        }else {
            str = str2 + ' ' + str;
            str = str.trim();
        }
    }
    if (res == '') {
         return 'Слов удовлетворяющих условию - нет'
    } else {
        return `<h1>Слова после которых встречаются числа: ${res}`
    }
};
let s = 'aaa 444 bbb 6666 ccc ccc 444 444 444';
document.write(result(s));
