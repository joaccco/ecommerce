import { ListOfProducts } from "./ListOfProducts.jsx";

export default async function ProductsPage () {
    return ( 

        <section>
        <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            Productos
        </h2>

         <ListOfProducts />
        </section>
    )
}  