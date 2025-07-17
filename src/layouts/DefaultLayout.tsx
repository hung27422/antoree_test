import ChatbotButton from "../components/ui/ChatbotButton";
import SuggestedTutors from "../components/ui/SuggestedTutors";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SideBar from "./components/Sidebar";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div>
      {/* Navbar cố định */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Nội dung chính bắt đầu dưới navbar */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 mt-16 px-2">
        {/* Sidebar (ẩn trên mobile) */}
        <div className="hidden lg:block lg:col-span-1 ">
          <SideBar />
        </div>

        {/* Nội dung chính */}
        <div className="col-span-1 lg:col-span-11 md:col-span-12 py-2">{children}</div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
      {/* Gợi ý sản phẩm và chat box */}
      <div className="">
        <SuggestedTutors />
        <ChatbotButton />
      </div>
    </div>
  );
}

export default DefaultLayout;
