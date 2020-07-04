import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    const [page] = useState(location.pathname);

    return (
        <>
            {page === '/' && 
                <Home />
            }

            {page === '/about' &&
                <About />
            }
        </>
    );
};

export default App;