import React, { useState } from 'react';
import Table from '../components/Table';
import { Package, Search, Filter } from 'lucide-react';

function Inventory() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="w-full">
            <header className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                        <Package className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Inventory Management</h1>
                        <p className="text-sm text-gray-500 mt-1">Manage all your products in one place</p>
                    </div>
                </div>
            </header>

            {/* Search Bar */}
            <div className="mb-6 flex gap-3">
                <div className="flex-1 flex items-center gap-3 bg-white px-4 py-2.5 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-100 transition-all shadow-sm">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                        type="text"
                        placeholder="Search inventory..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Product Table */}
            <Table searchQuery={searchQuery} />
        </div>
    );
}

export default Inventory;
