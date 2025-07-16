import HomeHeader from "../components/home/HomeHeader.tsx";
import useTutors from "../hooks/useTutors.tsx";
import CourseCard from "../components/ui/CourseCard.tsx";
import SliderReview from "../components/ui/SliderReview.tsx";
import { Link } from "react-router-dom";
import configs from "../configs/configs.ts";
import useHistoryViewedTutors from "../components/hooks/useHistoryViewedTutors.tsx";
import SuggestedTutors from "../components/ui/SuggestedTutors.tsx";

function HomePage() {
  const { historyViewed, saveToHistory } = useHistoryViewedTutors();

  const { dataTutors } = useTutors({
    page: 1,
    limit: 8,
  });

  return (
    <div className="z-10">
      <div>
        <HomeHeader />
      </div>

      {/* Lịch sử đã xem */}
      {historyViewed.length > 0 && (
        <div className="mt-8 px-4 sm:px-6 md:px-8 ">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Lịch sử đã xem gần đây</h2>
          <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {historyViewed.map((tutor) => (
              <CourseCard key={tutor.id} dataTutor={tutor} saveToHistory={saveToHistory} />
            ))}
          </div>
        </div>
      )}

      {/* Danh sách gia sư */}
      <div className="mt-8 px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
          <h2 className="text-2xl sm:text-3xl font-bold">Lựa chọn gia sư</h2>
          <Link
            to={configs.routes.tutor}
            className="font-bold text-base text-blue-600 hover:text-orange-600"
          >
            Xem thêm...
          </Link>
        </div>

        <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataTutors?.map((tutor) => (
            <CourseCard key={tutor.id} dataTutor={tutor} saveToHistory={saveToHistory} />
          ))}
        </div>
      </div>

      {/* Slider Review */}
      <div className="mt-8 px-4 py-2 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Đánh giá từ học viên</h2>
        <div className="w-full h-[400px]">
          <SliderReview />
        </div>
      </div>

      {/* Gợi ý sản phẩm */}
      <SuggestedTutors />
    </div>
  );
}

export default HomePage;
