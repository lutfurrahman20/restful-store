import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <main>
    <nav>
      <span className="text-4xl text-purple-400">restful</span>
    </nav>
    <section className="align-element py-20">
    <Outlet/>
    </section>
    </main>
  );
};

export default HomeLayout;
