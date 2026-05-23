import Navbar from "../components/layout/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;