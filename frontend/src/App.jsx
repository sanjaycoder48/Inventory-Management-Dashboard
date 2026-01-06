import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import UpdateItems from './pages/UpdateItems';
import Settings from './pages/Settings';

function App() {
    return (
        <Router>
            <div className="flex h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 p-8 overflow-auto">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/update-items" element={<UpdateItems />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;

