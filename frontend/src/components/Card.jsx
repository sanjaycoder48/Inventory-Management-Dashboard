import { Search, ChevronDown } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Available', value: 80, color: '#4F46E5' }, // Indigo-600
    { name: 'Low Stock', value: 15, color: '#F59E0B' }, // Amber-500
    { name: 'Out of Stock', value: 5, color: '#EF4444' }, // Red-500
];

function Cards() {
    return (
        <div className="flex flex-col gap-6 w-full max-w-4xl">
            {/* Top Bar: Search & Filter */}
            <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-3 w-full max-w-md bg-gray-50 px-4 py-2.5 rounded-lg border border-gray-200 focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
                    <Search className="w-5 h-5 text-gray-400" />
                    <input
                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                        type="text"
                        placeholder="Search items..."
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                    Filter
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

            {/* Inventory Summary Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-lg font-bold text-gray-800">Inventory Summary</h2>
                        <p className="text-sm text-gray-500">Overview of current stock levels</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                        <ChevronDown className="w-5 h-5" />
                    </button>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Chart Section - Left on desktop often looks good, or Right. Following standard pattern: Chart Left or Center */}
                    <div className="w-48 h-48 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                    cornerRadius={4}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        {/* Center Text in Donut */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-bold text-gray-800">100</span>
                            <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">Total</span>
                        </div>
                    </div>

                    {/* Stats Legend - Right Side */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                </div>
                                <span className="font-bold text-gray-900">{item.value}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;