import { useState } from "react";
import useSWR from "swr";
import CourseCard from "./CourseCard";
import useFavorite from "../../hooks/useFavorite";
import type { ITutor } from "../../types/tutors";
import type { IFavorite } from "../../types/favorite";
import useHistoryViewedTutors from "../hooks/useHistoryViewedTutors";

function SuggestedTutors() {
  const { saveToHistory } = useHistoryViewedTutors();

  const { dataFavorite } = useFavorite();
  const [show, setShow] = useState(false);

  const getTopLanguage = () => {
    if (!dataFavorite || dataFavorite.length === 0) return null;

    const count: Record<string, number> = {};
    dataFavorite.forEach((fav: IFavorite) => {
      const lang = fav.tutor?.language;
      if (lang) {
        count[lang] = (count[lang] || 0) + 1;
      }
    });

    const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
    return sorted[0]?.[0] || null;
  };

  const topLanguage = getTopLanguage();

  const { data: suggestedTutors, isLoading } = useSWR<ITutor[]>(
    show && topLanguage ? `/tutors?language=${topLanguage}` : null
  );

  return (
    <>
      {/* Nút gợi ý góc dưới phải */}
      <button
        onClick={() => setShow((prev) => !prev)}
        className="fixed bottom-4 right-4 z-50 px-4 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
      >
        {show ? "Ẩn gợi ý" : "Gợi ý sản phẩm"}
      </button>

      {/* Kết quả gợi ý */}
      {show && (
        <div className="fixed bottom-20 right-4 w-[350px] max-h-[500px] overflow-y-auto bg-white shadow-2xl shadow-gray-800 rounded-xl p-4 z-50">
          <h2 className="text-lg font-bold mb-3">Sản phẩm gợi ý:</h2>
          {isLoading && <p>Đang tải dữ liệu...</p>}
          {!isLoading && suggestedTutors?.length === 0 && <p>Không có gợi ý phù hợp.</p>}
          <div className="flex flex-col gap-3">
            {suggestedTutors?.map((tutor) => (
              <CourseCard key={tutor.id} dataTutor={tutor} saveToHistory={saveToHistory} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default SuggestedTutors;
