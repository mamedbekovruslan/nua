import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import { About, Constructor, ConstructorProgramm, Home, Root } from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="constructor" element={<Constructor />} />
      <Route path="constructor/:programmId" element={<ConstructorProgramm />} />
    </Route>
  )
);
