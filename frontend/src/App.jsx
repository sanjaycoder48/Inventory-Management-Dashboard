import React from 'react';
import Sidebar from './components/Sidebar';

// Main Application Component
// Setup Routes here
function App() {
    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar />
            <main className="flex-1 p-8 overflow-auto">
                <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
            </main>
        </div>
    );
}

export default App;
