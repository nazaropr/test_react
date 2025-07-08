export const baseUrl = 'https://jsonplaceholder.typicode.com';

const urls = {
    users: {
        base: '/users',
        getId: (id: number): string => urls.users.base + '/' + id
    },
    posts: {
        base: '/posts',
        getId: (id: number): string => urls.posts.base + '/' + id
    }
}

export {
    urls
}