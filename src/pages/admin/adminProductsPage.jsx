import { useEffect, useState } from "react";
import { sampleProducts } from "../../assets/sampleData";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminProductsPage() {
	const [products, setProducts] = useState(sampleProducts);

	useEffect(
        () => {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/products").then((res) => {
                console.log(res.data);
                setProducts(res.data)
            });
        },[]
    );

	

	return (
		<div className="w-full h-full  max-h-full overflow-y-scroll bg-red-900 relative">
			<Link to="/admin/add-product" className="absolute text-xl cursor-pointer bottom-5 right-5 bg-green-500 text-white font-bold py-2 px-4 rounded text-center flex justify-center items-center">+</Link>
			<table className="w-full text-center">
				<thead>
					<tr>
						<th>Product ID</th>
						<th>Name</th>
						<th>Image</th>
						<th>Labelled Price</th>
						<th>Price</th>
						<th>Stock</th>
					</tr>
				</thead>
				<tbody>
					{products.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.productId}</td>
								<td>{item.name}</td>
								<td>
									<img src={item.images[0]} className="w-[50px] h-[50px]" />
								</td>
								<td>{item.labelledPrice}</td>
								<td>{item.price}</td>
								<td>{item.stock}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
