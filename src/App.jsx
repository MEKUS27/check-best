// import './layout.scss';
import Homepage from './routes/homePage/homePage';
import {
  createBrowserRouter,
  RouterProvider,
 
} from "react-router-dom"
import ListPage from './routes/listPage/listPage';
import Layout from './routes/layout/layout';
import SignlePage from './routes/signlePage/signlePage';
import ProfilePage from './routes/profilePage/profilePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <Layout />,
        children:[
          {
            path: "/",
            element: <Homepage />
          },
          {
            path: "/list",
            element: <ListPage />
          },
          {
            path: "/:id",
            element: <SignlePage />
          },
          {
            path: "/profile",
            element: <ProfilePage />
          }
        ]
    }
  ])

  return (
 
    <RouterProvider router={router}/>
  );
}

export default App;
