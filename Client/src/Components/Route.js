import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Homepage';
import Filter from './Filter';
import Details from './Details';

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filter" element={<Filter />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
