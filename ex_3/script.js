let json = '{ "age": 30 }';
try {
let user = JSON.parse(json);
if (!user.name) {
    throw new SyntaxError('Данные неполны: нет имени');
}
alert(user.name);
} catch(err) {
    alert(err.name);
    alert(err.message);
    alert(err.stack);
}