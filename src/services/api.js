import axios from 'axios';

const API_KEY = '20657531-55ab2713c33e5dcd49ca55cc6';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImages(query, page) {
    return (
        axios
            .get(`${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&per_page=12&image_type=photo&pretty=true`)
                .then(response => response.data.hits)
    )
}

export { fetchImages };