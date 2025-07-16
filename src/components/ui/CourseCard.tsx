import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GradeIcon from "@mui/icons-material/Grade";
import type { Tutor } from "../../types/tutors";
import ModalDetailCourse from "./ModalDetailCourse";
interface CourseCardProps {
  dataTutor: Tutor;
}
function CourseCard({ dataTutor }: CourseCardProps) {
  return (
    <div className="aspect-video w-full cursor-pointer">
      <iframe
        width="300"
        height="170"
        src={`https://www.youtube.com/embed/${dataTutor.introductionVideoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-t-2xl"
      ></iframe>
      <div className="flex flex-col bg-gray-200 w-[300px] px-5 py-4 gap-3 rounded-b-2xl group">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg">{dataTutor.specialty}</span>
          <div className="relative group cursor-pointer w-fit">
            <div className="group-hover:hidden block">
              <FavoriteBorderIcon />
            </div>
            <div className="hidden group-hover:block">
              <FavoriteIcon className="text-red-500 " />
            </div>
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
          <ModalDetailCourse dataTutor={dataTutor} />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
