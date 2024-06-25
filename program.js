let result = (str) => {
    document.write(`<h1>Исходная строка: ${str}<br>`);
    let str1, str2, res = '';
    str = str.trim();
    while (str.length > 0) {
        if (str.indexOf(' ') == -1) {
            break;
        }else {
            str1 = str.slice(0, str.indexOf(' '));
            str = str.slice(str.indexOf(' ') + 1);
            str2 = str.slice(0, str.indexOf(' '));
            str = str.slice(str.indexOf(' ') + 1);
            if (!isNaN(str2) && isNaN(str1)) {
                res += str1 + ' ';
            }else {
                str = str2 + ' ' + str;
            }
        }
    }
    document.write(`<h1>Слова после которых встречаются числа: `);
    return res;
};
let s = 'aaa 444 bbb ccc 33 ddd';
document.write(result(s));


