import { useDispatch, useSelector } from "react-redux"
import { addCart } from "../redux/cart/cart"

export default function Products() {

    const product = useSelector(productsSlice => productsSlice.products.items)

    const dispatch = useDispatch()

    function handlerCartAdd(e) {
        dispatch(addCart(e))
    }

    return (
        <div className="container">
            <div className="card-deck">
                <h2>Produtos Dispaonivel</h2>
                <div className="card-group col-6">
                    {product.map(r => (
                        <>
                            <div key={r.id} className="m-3 p-1 card">
                                <img className="card-img-top" src={r.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{r.name}</h5>
                                    <p className="card-text">{r.description}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="text-muted bg-info btn font-weight-bold m-1">Comprar</button>
                                    <button onClick={() => handlerCartAdd(r)} className="text-muted bg-info btn font-weight-bold">Add Cart</button>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    )
}
