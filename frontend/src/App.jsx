import React from 'react';
import Sidebar from './components/Sidebar';
import Table from './components/Table';
import Cards from './components/Card';


import { Search, ChevronDown } from "lucide-react";

function App() {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">
                {/* Header: Title + Search/Actions */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                        <p className="text-sm text-gray-500 mt-1">Welcome back, analyze your inventory data.</p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <div className="flex items-center gap-3 w-full md:w-80 bg-white px-4 py-2.5 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-100 transition-all shadow-sm">
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                                type="text"
                                placeholder="Search items..."
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors shadow-sm">
                            <span className="hidden sm:inline">Filter</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                </header>

                <div className="flex flex-col xl:flex-row gap-6 items-start">
                    {/* Left Panel: Stats & Chart */}
                    <div className="w-full xl:w-[380px] shrink-0">
                        <Cards />
                    </div>

                    {/* Right Panel: Data Table */}
                    <div className="flex-1 w-full min-w-0">
                        <Table />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
