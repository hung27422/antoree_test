import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import "./App.css";
import publicRoutes from "./routes/routes";

function App() {
  return (
    <Router>
      {publicRoutes.map((router, index) => {
        const Layout = DefaultLayout;
        const Page = router.component;
        return (
          <Routes key={index}>
            <Route
              path={router.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          </Routes>
        );
      })}
    </Router>
  );
}

export default App;
