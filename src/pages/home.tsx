import { useContext, useState } from "react";
import HomeHeader from "../components/home/HomeHeader.tsx";
import SelectLanguages from "../components/ui/SelectLanguages.tsx";
import useLanguages from "../hooks/useLanguages.tsx";
import useTutors from "../hooks/useTutors.tsx";
import CourseCard from "../components/ui/CourseCard.tsx";
import PaginationApp from "../components/ui/Pagination.tsx";
import SliderReview from "../components/ui/SliderReview.tsx";
import SelectPrice from "../components/ui/SelectPrice.tsx";
import { AppContext } from "../context/AppContextProvider.tsx";
import Button from "@mui/material/Button";

function HomePage() {
  //context
  const { minPrice, maxPrice, setMaxPrice, setMinPrice } = useContext(AppContext);
  //state
  const [selectedLang, setSelectedLang] = useState("");
  const [page, setPage] = useState(1);
  //hooks
  const { languages } = useLanguages();
  // data tutors
  const { dataTutors } = useTutors({
    page: page,
    limit: 8,
    language: selectedLang || undefined,
    minPrice: minPrice || undefined,
    maxPrice: maxPrice || undefined,
  });

  const totalPages = Math.ceil(((dataTutors?.length ?? 0) + 1) / 8) || 1;
  const handleClearValue = () => {
    setMaxPrice(null);
    setMinPrice(null);
    setSelectedLang("");
  };
  return (
    <div className="z-10">
      <div>
        <HomeHeader />
      </div>
      {/* Nội dung */}
      <div className="mt-8 px-5">
        {/* Title và Menu lọc để lựa chọn gia sư */}
        <div className="flex items-center gap-4">
          <h2 className="text-3xl font-bold">Lựa chọn gia sư</h2>
          <div className="flex items-center gap-4">
            <div>
              <SelectLanguages
                languages={languages}
                value={selectedLang}
                onChange={(val) => setSelectedLang(val)}
              />
            </div>
            <div>
              <SelectPrice />
            </div>
            <div>
              <Button color="info" variant="contained" size="small" onClick={handleClearValue}>
                Xóa Lọc
              </Button>
            </div>
          </div>
        </div>
        {/* Hiển thị danh sách gia sư */}
        <div className="py-4 grid grid-cols-4 gap-4">
          {dataTutors?.map((tutor) => (
            <div key={tutor.id} className="col-span-1">
              <CourseCard key={tutor.id} dataTutor={tutor} />
            </div>
          ))}
        </div>
        {/* Phân trang */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center ">
            <PaginationApp
              currentPage={page}
              totalPages={totalPages}
              onChange={(_event, value) => setPage(value)}
            />
          </div>
        )}
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
