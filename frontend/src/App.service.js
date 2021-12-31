import axios from 'axios';

export function fetchItemList() {
    return axios.get('/api/robots')
        .then(resp => resp.data.data);
}