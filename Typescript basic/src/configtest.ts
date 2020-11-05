let userInput: unknown;

userInput = '55';

console.log(userInput);

function generateError(message: string, code: number): never {
    throw { message, code };
}

generateError('An error occurred', 500);
