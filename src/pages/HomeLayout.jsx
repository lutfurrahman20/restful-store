import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <main>
    <Header/>
    <Navbar/>
    <section className="align-element py-20">
    <Outlet/>
    </section>
    </main>
  );
};

export default HomeLayout;
