import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}
function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      <div className="fixed right-0 left-0 top-0 z-50">
        <Navbar />
      </div>
      <div className="grid grid-cols-12 gap-2 mt-16">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-11 py-2 pr-4 z-0">{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
