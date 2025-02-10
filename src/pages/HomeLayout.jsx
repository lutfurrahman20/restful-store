import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
    <nav>
      <span className="text-4xl text-purple-400">restful</span>
    </nav>
    <Outlet/>
    </>
  );
};

export default HomeLayout;
