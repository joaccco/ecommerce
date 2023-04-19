const fetchSingleProducts = () => { 
    
}

export default function Product ({ params }){
    const { id } = params
    return (
        <h2 className="text-white">Compra {id}</h2>
    )
} 