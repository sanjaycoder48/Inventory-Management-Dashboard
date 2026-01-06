import React, { useState } from 'react';
import ProductModal from '../components/ProductModal';
import { Plus, Upload, Download, Package } from 'lucide-react';

function UpdateItems() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSaveProduct = (productData) => {
        console.log('New product:', productData);
        // This would typically send to backend
    };

    const handleImport = () => {
        alert('Import functionality - Connect to file upload');
    };

    const handleExport = () => {
        alert('Export functionality - Generate CSV/Excel');
    };

    return (
        <div className="w-full">
            <header className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                        <Upload className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Update Items</h1>
                        <p className="text-sm text-gray-500 mt-1">Add new products or bulk import</p>
                    </div>
                </div>
            </header>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
                >
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="p-3 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
                            <Plus className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Add Single Product</h3>
                            <p className="text-sm text-gray-500 mt-1">Manually add one product</p>
                        </div>
                    </div>
                </button>

                <button
                    onClick={handleImport}
                    className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-green-500 hover:bg-green-50 transition-all group"
                >
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                            <Upload className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Import Products</h3>
                            <p className="text-sm text-gray-500 mt-1">Upload CSV or Excel file</p>
                        </div>
                    </div>
                </button>

                <button
                    onClick={handleExport}
                    className="bg-white p-6 rounded-xl border-2 border-dashed border-gray-300 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                >
                    <div className="flex flex-col items-center text-center gap-3">
                        <div className="p-3 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                            <Download className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800">Export Data</h3>
                            <p className="text-sm text-gray-500 mt-1">Download inventory as CSV</p>
                        </div>
                    </div>
                </button>
            </div>

            {/* Recent Updates */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Updates</h2>
                <div className="space-y-4">
                    {[
                        { action: 'Added', product: 'MacBook Pro 16"', time: '2 hours ago', user: 'Admin' },
                        { action: 'Updated', product: 'Logitech MX Master 3', time: '5 hours ago', user: 'Admin' },
                        { action: 'Added', product: 'Sony WH-1000XM5', time: '1 day ago', user: 'Admin' },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white rounded-lg">
                                    <Package className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-gray-800">
                                        <span className={item.action === 'Added' ? 'text-green-600' : 'text-blue-600'}>
                                            {item.action}
                                        </span> {item.product}
                                    </p>
                                    <p className="text-sm text-gray-500">{item.time} by {item.user}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ProductModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSaveProduct}
            />
        </div>
    );
}

export default UpdateItems;
