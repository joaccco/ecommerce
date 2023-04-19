import { ListOfProducts } from "./ListOfProducts.jsx";

export default async function ProductsPage () {
    return ( 

        <section className="mx-10 rounded-lg bg-transparent">
            <h2 class="mb-12 text-xl font-bold text-white sm:text-3xl">
                Productos
            </h2>
            <ListOfProducts />
        </section>
    )
}  