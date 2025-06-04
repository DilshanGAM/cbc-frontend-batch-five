import { useEffect, useState } from "react";
import { sampleProducts } from "../../assets/sampleData";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import toast from "react-hot-toast";;
export default function AdminProductsPage() {
	const [products, setProducts] = useState(sampleProducts);
	const [isLoading, setIsLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		if (isLoading) {
			axios
				.get(import.meta.env.VITE_BACKEND_URL + "/api/products")
				.then((res) => {
					setProducts(res.data);
					setIsLoading(false);
				})
				.catch(() => {
					toast.error("Failed to load products");
					setIsLoading(false);
				});
		}
	}, [isLoading]);

	function deleteProduct(productId) {
		const token = localStorage.getItem("token");
		if (!token) {
			toast.error("Please login first");
			return;
		}
		axios
			.delete(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId, {
				headers: {
					Authorization: "Bearer " + token,
				},
			})
			.then(() => {
				toast.success("Product deleted successfully");
				setIsLoading(true);
			})
			.catch((e) => {
				toast.error(e.response?.data?.message || "Failed to delete product");
			});
	}

	return (
		<div className="relative w-full h-full max-h-full overflow-y-auto p-4 font-[var(--font-main)]">
			<Link
				to="/admin/add-product"
				className="fixed bottom-6 right-6 bg-[var(--color-accent)] hover:bg-[var(--color-secondary)] text-white font-bold py-3 px-5 rounded-full shadow-lg transition duration-300"
			>
				+ Add Product
			</Link>

			{isLoading ? (
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-16 h-16 border-4 border-gray-300 border-t-[var(--color-accent)] rounded-full animate-spin"></div>
				</div>
			) : (
				<div className="overflow-x-auto">
					
					<table className="w-full text-center border border-gray-200 shadow-md rounded-lg overflow-hidden">
						<thead className="bg-[var(--color-accent)] text-white">
							<tr>
								<th className="py-3 px-2">Product ID</th>
								<th className="py-3 px-2">Name</th>
								<th className="py-3 px-2">Image</th>
								<th className="py-3 px-2">Labelled Price</th>
								<th className="py-3 px-2">Price</th>
								<th className="py-3 px-2">Stock</th>
								<th className="py-3 px-2">Actions</th>
							</tr>
						</thead>
						<tbody>
							{products.map((item, index) => (
								<tr
									
									key={index}
									className={`${
										index % 2 === 0
											? "bg-[var(--color-primary)]"
											: "bg-gray-100"
									} hover:bg-gray-200 transition`}
								>
									<td className="py-2 px-2">{item.productId}</td>
									<td className="py-2 px-2">{item.name}</td>
									<td className="py-2 px-2">
										<img
											src={item.images[0]}
											alt={item.name}
											className="w-12 h-12 object-cover rounded"
										/>
									</td>
									<td className="py-2 px-2">{item.labelledPrice}</td>
									<td className="py-2 px-2">{item.price}</td>
									<td className="py-2 px-2">{item.stock}</td>
									<td className="py-2 px-2">
										<div className="flex justify-center space-x-3">
											<button
												onClick={() => deleteProduct(item.productId)}
												className="text-red-500 hover:text-red-700 transition"
											>
												<FaTrash size={18} />
											</button>
											<button
												onClick={() =>
													navigate("/admin/edit-product", {
														state: item,
													})
												}
												className="text-blue-500 hover:text-blue-700 transition"
											>
												<FaEdit size={18} />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
