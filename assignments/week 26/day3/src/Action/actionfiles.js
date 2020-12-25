const article = 'http://localhost:9055/articles'
const gallerylist = 'http://localhost:9055/galleries'
export const movies = () => {
    const output = fetch(article, { method: 'GET' }).then(res => res.json())
    return {
        type: 'types',
        payload: output
    }
}
export const gallery = () => {
    const output = fetch(gallerylist, { method: 'GET' }).then(res => res.json())
    return {
        type: 'gallerylist',
        payload: output
    }
}
