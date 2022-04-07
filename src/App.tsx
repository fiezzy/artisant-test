import { VFC } from "react";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "./constants";
import Container from "./components/Container";
import { Catalog } from "./pages/Catalog";
import { Product } from "./pages/Product";

const App: VFC = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Catalog />} path={AppRoutes.Catalog} />
        <Route
          element={<Product />}
          path={`${AppRoutes.Products}/:productId`}
        />
      </Routes>
    </Container>
  );
};

export default App;
