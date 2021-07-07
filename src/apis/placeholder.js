import unirest from 'unirest';

const req = unirest("GET", "https://jsonplaceholder.typicode.com/todos/1")

export default req;