import { useSelector } from "react-redux"

export default function Products() {

    const product = useSelector(productsSlice => productsSlice.products.items)

    return (
        <div className="card-deck">
            <h2>Produtos Dispaonivel</h2>
            <div className="card col-4">
                {product.map(r => (
                    <>
                        <div key={r.id} className="card p-1">
                            <img className="card-img-top" src={r.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{r.name}</h5>
                                <p className="card-text">r.description</p>
                            </div>
                            <div className="card-footer  bg-info">
                                <small className="text-muted">Ver mais detalhes</small>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}
