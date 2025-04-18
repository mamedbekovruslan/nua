import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import {
  About,
  Admin,
  Constructor,
  ConstructorProgramm,
  Contacts,
  Guides,
  Home,
  Profile,
  ReadyPrograms,
  Root,
} from "../pages";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="guides" element={<Guides />} />
      <Route path="programs" element={<ReadyPrograms />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="constructor" element={<Constructor />} />
      <Route path="constructor/:programmId" element={<ConstructorProgramm />} />
      <Route path="admin" element={<Admin />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);
