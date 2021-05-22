class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function readUser(json) {
    let user = JSON.parse(json);
    if (!user.age) {
        throw new ValidationError('нет поля age');
    }
    if (!user.name) {
        throw new ValidationError('нет поля name'); 
    }
    return user;
}

try {
    let user = readUser({"age": 25});
} catch(err) {
    if (err instanceof ValidationError) {
        alert('Некорректные данные:' + err.message);
    } else {
        throw err;
    }
}