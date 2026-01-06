import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { House, CirclePile, ArrowUpFromLine, LogOut, Settings, ChevronLeft, ChevronRight } from "lucide-react";

function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(true);
    const location = useLocation();

    return (
        <aside className={`${isExpanded ? "w-64" : "w-20"} bg-white shadow-xl h-screen flex flex-col p-4 transition-all duration-300 ease-in-out relative border-r border-gray-100`}>
            {/* Elegant Toggle Button */}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="absolute -right-3 top-9 bg-white border border-gray-200 shadow-sm rounded-full p-1 text-gray-400 hover:text-indigo-600 hover:shadow-md transition-all duration-300 z-50 flex items-center justify-center w-6 h-6"
            >
                {isExpanded ? <ChevronLeft size={14} /> : <ChevronRight size={14} />}
            </button>

            {/* Logo Section */}
            <div className={`mb-8 p-1 flex items-center ${isExpanded ? "gap-3" : "justify-center"} transition-all duration-300 overflow-hidden whitespace-nowrap`}>
                <div className="shrink-0">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8V32" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" />
                        <path d="M32 12C32 12 30 8 24 8C18 8 16 12 16 20C16 28 18 32 24 32C30 32 32 28 32 28" stroke="#4F46E5" strokeWidth="4" strokeLinecap="round" />
                        <rect x="22" y="18" width="2" height="6" rx="1" fill="#4F46E5" />
                        <rect x="26" y="14" width="2" height="10" rx="1" fill="#4F46E5" />
                        <rect x="30" y="20" width="2" height="4" rx="1" fill="#4F46E5" />
                    </svg>
                </div>
                <h2 className={`text-2xl font-bold text-gray-800 tracking-tight transition-opacity duration-300 ${isExpanded ? "opacity-100" : "opacity-0 w-0 hidden"}`}>
                    INVECHECK
                </h2>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 flex-1">
                <SidebarItem
                    to="/"
                    icon={<House size={20} />}
                    text="Dashboard"
                    isExpanded={isExpanded}
                    active={location.pathname === '/'}
                />
                <SidebarItem
                    to="/inventory"
                    icon={<CirclePile size={20} />}
                    text="Inventory"
                    isExpanded={isExpanded}
                    active={location.pathname === '/inventory'}
                />
                <SidebarItem
                    to="/update-items"
                    icon={<ArrowUpFromLine size={20} />}
                    text="Update Items"
                    isExpanded={isExpanded}
                    active={location.pathname === '/update-items'}
                />
                <SidebarItem
                    to="/settings"
                    icon={<Settings size={20} />}
                    text="Settings"
                    isExpanded={isExpanded}
                    active={location.pathname === '/settings'}
                />
            </nav>

            <div className="mt-auto border-t pt-4">
                <button
                    onClick={() => alert('Logout functionality')}
                    className={`
                        flex items-center px-3 py-3 rounded-lg transition-all w-full group relative
                        ${isExpanded ? "gap-3 justify-start" : "justify-center"}
                        text-red-500 hover:bg-red-50 hover:text-red-700
                    `}
                    title={!isExpanded ? "Log out" : ""}
                >
                    <div className="shrink-0"><LogOut size={20} /></div>
                    <span className={`font-medium whitespace-nowrap transition-all duration-300 ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
                        Log out
                    </span>

                    {/* Tooltip for collapsed state */}
                    {!isExpanded && (
                        <div className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap pointer-events-none">
                            Log out
                        </div>
                    )}
                </button>
            </div>
        </aside>
    )
}

function SidebarItem({ to, icon, text, active = false, isExpanded }) {
    return (
        <Link
            to={to}
            className={`
                flex items-center px-3 py-3 rounded-lg transition-all w-full group relative
                ${isExpanded ? "gap-3 justify-start" : "justify-center"}
                ${active
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-indigo-50 hover:text-indigo-600"
                }
            `}
            title={!isExpanded ? text : ""}
        >
            <div className="shrink-0">{icon}</div>
            <span className={`font-medium whitespace-nowrap transition-all duration-300 ${isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"}`}>
                {text}
            </span>

            {/* Tooltip for collapsed state */}
            {!isExpanded && (
                <div className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap pointer-events-none">
                    {text}
                </div>
            )}
        </Link>
    );
}

export default Sidebar;

