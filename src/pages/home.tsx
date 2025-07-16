import HomeHeader from "../components/home/HomeHeader.tsx";
import useTutors from "../hooks/useTutors.tsx";
import CourseCard from "../components/ui/CourseCard.tsx";
import SliderReview from "../components/ui/SliderReview.tsx";
import { Link } from "react-router-dom";
import configs from "../configs/configs.ts";
import useHistoryViewedTutors from "../components/hooks/useHistoryViewedTutors.tsx";

function HomePage() {
  const { historyViewed, saveToHistory } = useHistoryViewedTutors();
  // data tutors
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
        <div className="mt-8 px-5">
          <h2 className="text-3xl font-bold mb-4">Lịch sử đã xem gần đây</h2>
          <div className="py-4 grid grid-cols-4 gap-4">
            {historyViewed.map((tutor) => (
              <div key={tutor.id} className="col-span-1">
                <CourseCard dataTutor={tutor} saveToHistory={saveToHistory} />
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Nội dung */}
      <div className="mt-8 px-5">
        {/* Title và Menu lọc để lựa chọn gia sư */}
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Lựa chọn gia sư</h2>
          <Link
            to={configs.routes.tutor}
            className="mr-6 font-bold text-base hover:text-orange-600"
          >
            Xem thêm...
          </Link>
        </div>
        {/* Hiển thị danh sách gia sư */}
        <div className="py-4 grid grid-cols-4 gap-4">
          {dataTutors?.map((tutor) => (
            <div key={tutor.id} className="col-span-1">
              <CourseCard key={tutor.id} dataTutor={tutor} saveToHistory={saveToHistory} />
            </div>
          ))}
        </div>
      </div>
      {/* Slider Review */}
      <div className="mt-8 px-5">
        <h2 className="text-3xl font-bold mb-4">Đánh giá từ học viên</h2>
        <div className="w-full h-[400px]">
          <SliderReview />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
