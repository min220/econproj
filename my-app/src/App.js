import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importing Routes and Route for routing
import Component from './Sidebar'; // Adjust the path accordingly
import Chat from './Chat'; // Adjust the path accordingly
import Subjects from './Subjects'; // Adjust the path for your Subjects component
import './App.css';

function App() {
    return (
        <div className="container">
            {/* Vertical bar */}
            <div className="vertical-bar"></div>

            {/* Sidebar component */}
            <div className="sidebar">
                <Component />
            </div>

            {/* Main content area */}
            <div className="flex-1 p-4 main-content">
                {/* Define routes here */}
                <Routes>
                    <Route path="/Chat" element={<Chat />} /> {/* Default route - Chat */}
                    <Route path="/Subjects" element={<Subjects />} /> {/* Subjects route */}
                </Routes>
            </div>
        </div>
    );
}

export default App;
