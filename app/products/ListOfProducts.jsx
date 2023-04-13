import { LikeButton } from './LikeButton.jsx';
const fetchProducts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
}

export async function ListOfProducts () {
    const products = await fetchProducts()

    return products.map(product => (
                <article key={product.id}>
                <h2 style={{color: '#09f' }}>{product.title}</h2>
                <p>{product.body}</p>
                <LikeButton />
                </article>
                ))
}