import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreatePost from './CreatPost';
import PostsList from './PostsList';
import EditPost from './EditPost';
import NavigationBar from './Navbar';
import Details from './Detials';
import Home from './Home';


const App = () => {
    return (
        <Router>
            <div>
                <NavigationBar />
                <div className="container">
                    <h1 className="my-4">CRUD MySQL</h1>
                    <Routes>
                        <Route path="/s" element={<Home />} />   
                        <Route path="/" element={<PostsList />} />
                        <Route path="/create" element={<CreatePost />} />
                        <Route path="/edit/:id" element={<EditPost />} />
                        <Route path="/create" element={<Details />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;