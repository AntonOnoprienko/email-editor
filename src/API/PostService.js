import axios from "axios";

export class PostService {
    static async getPosts(limit, page) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return {
            data: response.data,
            totalCount: response.headers['x-total-count'] ?? 100,
        };
    }
}