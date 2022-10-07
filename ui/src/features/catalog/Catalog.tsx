import { Product } from "../../app/model/product"

interface Props{
    products: Product[];
    addProduct: () => void;
}

export default function Catalog(props : Props) {
    return (
        <>
            <h1>Catalog</h1>
            <ul>
                {
                    props.products.map((product) => (
                        <li key={product.id}>{product.name}</li>
                    ))
                }
            </ul>
            <button onClick={props.addProduct}>add product</button>
        </>

    )
}