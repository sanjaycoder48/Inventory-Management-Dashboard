import { Edit2, Trash2, Plus } from "lucide-react";
import { useState } from "react";
import ProductModal from "./ProductModal";

const initialItems = [
    { id: 1, name: 'MacBook Pro 16"', category: 'Electronics', price: '$2,400', stock: 12, status: 'In Stock' },
    { id: 2, name: 'Logitech MX Master 3', category: 'Accessories', price: '$99', stock: 5, status: 'Low Stock' },
    { id: 3, name: 'Samsung Odyssey G9', category: 'Electronics', price: '$1,200', stock: 0, status: 'Out of Stock' },
    { id: 4, name: 'Keychron Q1 Pro', category: 'Accessories', price: '$199', stock: 8, status: 'In Stock' },
    { id: 5, name: 'Herman Miller Chair', category: 'Furniture', price: '$1,400', stock: 15, status: 'In Stock' },
    { id: 6, name: 'Sony WH-1000XM5', category: 'Electronics', price: '$399', stock: 20, status: 'In Stock' },
    { id: 7, name: 'iPad Pro 12.9"', category: 'Electronics', price: '$1,099', stock: 3, status: 'Low Stock' },
    { id: 8, name: 'Desk Lamp LED', category: 'Furniture', price: '$45', stock: 25, status: 'In Stock' },
];

function Table({ searchQuery = '' }) {
    const [items, setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [filterStatus, setFilterStatus] = useState('All');

    const filteredItems = items.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = filterStatus === 'All' || item.status === filterStatus;
        return matchesSearch && matchesFilter;
    });

    const handleAddProduct = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleEditProduct = (product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };

    const handleDeleteProduct = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    const handleSaveProduct = (productData) => {
        if (editingProduct) {
            setItems(items.map(item =>
                item.id === editingProduct.id ? { ...productData, id: item.id } : item
            ));
        } else {
            const newProduct = {
                ...productData,
                id: Math.max(...items.map(i => i.id), 0) + 1
            };
            setItems([...items, newProduct]);
        }
    };

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">Product List</h2>
                        <p className="text-sm text-gray-500 mt-1">{filteredItems.length} products found</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none"
                        >
                            <option value="All">All Status</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Low Stock">Low Stock</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>
                        <button
                            onClick={handleAddProduct}
                            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Product
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-left border-b border-gray-200">
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Product Name</th>
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Category</th>
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Stock</th>
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="pb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <tr key={item.id} className="group hover:bg-gray-50 transition-colors">
                                        <td className="py-4 text-sm font-medium text-gray-900">{item.name}</td>
                                        <td className="py-4 text-sm text-gray-500">{item.category}</td>
                                        <td className="py-4 text-sm text-gray-900 font-semibold">{item.price}</td>
                                        <td className="py-4 text-sm text-gray-700">{item.stock} pcs</td>
                                        <td className="py-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                ${item.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                                                    item.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-red-100 text-red-800'}`}>
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button
                                                    onClick={() => handleEditProduct(item)}
                                                    className="p-1.5 hover:bg-indigo-50 rounded text-gray-500 hover:text-indigo-600 transition-colors"
                                                    title="Edit"
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteProduct(item.id)}
                                                    className="p-1.5 hover:bg-red-50 rounded text-gray-500 hover:text-red-600 transition-colors"
                                                    title="Delete"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="py-12 text-center text-gray-500">
                                        No products found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveProduct}
                product={editingProduct}
            />
        </>
    );
}

export default Table;