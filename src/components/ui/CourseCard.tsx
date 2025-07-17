import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import type { ITutor } from "../../types/tutors";
import ModalDetailCourse from "./ModalDetailCourse";
import useFavorite from "../../hooks/useFavorite";
import { useMemo, useState } from "react";
import { enqueueSnackbar } from "notistack";

interface CourseCardProps {
  dataTutor: ITutor;
  saveToHistory: (tutor: ITutor) => void;
}
function CourseCard({ dataTutor, saveToHistory }: CourseCardProps) {
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const { addFavorite, deleteFavorite, dataFavorite } = useFavorite();

  const valueFavorite = {
    userId: 1,
    tutorId: dataTutor.id,
  };

  // Tìm xem tutor đã được yêu thích chưa
  const favorite = useMemo(
    () => dataFavorite?.find((item) => item.tutorId === dataTutor.id),
    [dataFavorite, dataTutor.id]
  );
  const handleFavoriteToggle = async () => {
    if (favorite && favorite.id !== undefined) {
      await deleteFavorite(String(favorite.id)); // Xóa nếu đã yêu thích
      await enqueueSnackbar("Đã xóa khỏi yêu thích");
    } else {
      await addFavorite(valueFavorite); // Thêm nếu chưa
      await enqueueSnackbar("Đã thêm vào yêu thích");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center aspect-video w-full cursor-pointer">
      <div className="relative w-[320px] h-[170px]">
        {isVideoLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300 rounded-t-2xl animate-pulse z-10">
            <span className="text-gray-600 text-sm">Đang tải video...</span>
          </div>
        )}
        <iframe
          width="320"
          height="170"
          src={`https://www.youtube.com/embed/${dataTutor.introductionVideoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-t-2xl w-full h-full"
          onLoad={() => setIsVideoLoading(false)}
        ></iframe>
      </div>
      <div className="flex flex-col bg-gray-200 w-[320px] px-5 py-4 gap-3 rounded-b-2xl group">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">{dataTutor.specialty}</span>
          <div onClick={handleFavoriteToggle} className="relative group cursor-pointer w-fit">
            {!favorite ? (
              <div>
                <div className="group-hover:hidden block">
                  <FavoriteBorderIcon />
                </div>
                <div className="hidden group-hover:block">
                  <FavoriteIcon className="text-red-500 " />
                </div>
              </div>
            ) : (
              <div className="">
                <FavoriteIcon className="text-red-500 " />
              </div>
            )}
          </div>
        </div>
        <span className="text-base text-gray-800">
          Học phí: {dataTutor.price.toLocaleString()} VNĐ / Giờ{" "}
        </span>
        <div className="mt-1 flex justify-between items-center group-hover:hidden">
          <div className="flex items-center gap-2">
            <img src={dataTutor.avatar} className="size-8 rounded-full" />
            <span>{dataTutor.name}</span>
          </div>
          <div className="flex items-center">
            <span className="text-base text-gray-600">{dataTutor.rating}</span>
            <span className="text-yellow-500 relative top-[-3px] ">
              <GradeIcon />
            </span>
          </div>
        </div>
        <div className="w-full hidden group-hover:block">
          <ModalDetailCourse dataTutor={dataTutor} saveToHistory={saveToHistory} />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
