import axios, {AxiosError, AxiosResponse} from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(response => {
    return response;
}, (error: any) => {
    const {data, status} = error.response!;

    switch (status) {
        case 400:
            if(data.errors)
            {
                const modelStateErrors: string[] = [];
                for(const key in data.errors)
                {
                    if(data.errors[key])
                    {
                        modelStateErrors.push(data.errors[key]);
                    }
                }
                throw modelStateErrors.flat();
            }
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            break;
        case 500:
            toast.error(data.title);
            break;
    
        default:
            break;
    }
    return Promise.reject(error.response);
});

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