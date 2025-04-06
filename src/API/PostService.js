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

    static async getPostId(id){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        return {
            post: response.data,
            headers: response.headers

        }
    }

    static async getPostCommentsId(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        return response.data
    }
}

