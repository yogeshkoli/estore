import axios, {AxiosResponse} from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.get(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.get(url, body).then(responseBody),
    delete: (url: string) => axios.get(url).then(responseBody),
}

const Catalog = {
    list: () => requests.get('Product'),
    details: (id?: string) => requests.get(`Product/${id}`),
}

const TestErrors = {
    get400Error: () => requests.get('Buggy/bad-request'),
    get401Error: () => requests.get('Buggy/unauthorized'),
    get404Error: () => requests.get('Buggy/not-found'),
    getValidationError: () => requests.get('Buggy/validation-error'),
    get500Error: () => requests.get('Buggy/server-error'),
}

const agent = {
    Catalog,
    TestErrors
}

export default agent;