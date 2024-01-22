import { createBrowserRouter } from "react-router-dom";
import GameDetailPage from "./components/pages/GameDetail";
import HomePage from './components/pages/HomePage';
import Layout from "./components/pages/Layout";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: 'games/:id',
                element: <GameDetailPage/>
            }
        ]
    },
    
]);

export default router;