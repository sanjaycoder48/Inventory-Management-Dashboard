import React, { useState } from 'react';
import StatsCard from '../components/StatsCard';
import Cards from '../components/Card';
import Table from '../components/Table';
import { Search, Package, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";

function Dashboard() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className="w-full">
            {/* Header: Title + Search */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                    <p className="text-sm text-gray-500 mt-1">Welcome back, manage your inventory efficiently.</p>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="flex items-center gap-3 w-full md:w-80 bg-white px-4 py-2.5 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-100 transition-all shadow-sm">
                        <Search className="w-5 h-5 text-gray-400" />
                        <input
                            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatsCard
                    title="Total Products"
                    value="248"
                    icon={Package}
                    trend="up"
                    trendValue="+12%"
                    color="indigo"
                />
                <StatsCard
                    title="Total Revenue"
                    value="$45,231"
                    icon={DollarSign}
                    trend="up"
                    trendValue="+23%"
                    color="green"
                />
                <StatsCard
                    title="Low Stock Items"
                    value="12"
                    icon={AlertTriangle}
                    trend="down"
                    trendValue="-5%"
                    color="amber"
                />
                <StatsCard
                    title="Out of Stock"
                    value="3"
                    icon={TrendingUp}
                    trend="down"
                    trendValue="-8%"
                    color="red"
                />
            </div>

            {/* Main Content: Chart + Table */}
            <div className="flex flex-col xl:flex-row gap-6 items-start">
                {/* Left Panel: Inventory Summary Chart */}
                <div className="w-full xl:w-[380px] shrink-0">
                    <Cards />
                </div>

                {/* Right Panel: Product Table */}
                <div className="flex-1 w-full min-w-0">
                    <Table searchQuery={searchQuery} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
