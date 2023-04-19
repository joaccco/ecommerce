import { LikeButton } from './LikeButton.jsx'
import Link from 'next/link.js'

const fetchProducts = () => {
  console.log('Fetching Products!!')
  console.log('')

  //Incremental Static Regeneration
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      next:{
        revalidate: 60
      }
    })
      .then(res => res.json())
}

export async function ListOfProducts () {
    const products = await fetchProducts()

    return products.map(product => (
                <article className='mb-12' key={product.id}>
                <Link href={`/products/${product.id}`}>
                <h2 className='text-white hover:text-blue-500'>{product.title}</h2>
                <p className='my-2 text-white'>{product.body}</p>
                <LikeButton id={product.id} />
                </Link>
                </article>
                ))
}