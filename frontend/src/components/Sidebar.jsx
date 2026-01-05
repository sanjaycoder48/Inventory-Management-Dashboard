import { House, CirclePile, ArrowUpFromLine, LogOut, Settings } from "lucide-react";

function Sidebar() {
    return (
        <aside className="w-64 bg-white shadow-xl h-screen flex flex-col p-4">
            <div className="mb-8 p-2">
                <h2 className="text-2xl font-bold text-indigo-600">Invecheck</h2>
            </div>

            <nav className="flex flex-col gap-2 flex-1">
                <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all w-full text-left">
                    <House size={20} />
                    <span className="font-medium">Dashboard</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all w-full text-left">
                    <CirclePile size={20} />
                    <span className="font-medium">Inventory</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all w-full text-left">
                    <ArrowUpFromLine size={20} />
                    <span className="font-medium">Update Items</span>
                </button>
                <button className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-all w-full text-left">
                    <Settings size={20} />
                    <span className="font-medium">Settings</span>
                </button>
            </nav>

            <div className="mt-auto border-t pt-4">
                <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 hover:text-red-700 rounded-lg transition-all w-full text-left">
                    <LogOut size={20} />
                    <span className="font-medium">Log out</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar;
