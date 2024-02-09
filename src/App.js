import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout";
import { BookList, Home, Details } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="list" element={<BookList />} />
        <Route path="list/:id" element={<Details />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
