// import react from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout />,
    children: [
      {
        path: "/",
        element: <p>Home page</p>,
        // <Home />,
      },
      {
        path: "/products/:id",
        element: <p>products id page</p>,
        // <Products />,
      },
      {
        path: "/product/:id",
        element: <p>product page</p>,
        // <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
