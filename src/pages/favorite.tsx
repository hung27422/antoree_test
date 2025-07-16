import { useEffect } from "react";
import { Card, CardContent, CircularProgress, IconButton, Tooltip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import type { IFavorite } from "../types/favorite";
import useFavorite from "../hooks/useFavorite";

function Favorite() {
  const { dataFavorite, isLoading, deleteFavorite } = useFavorite();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (!dataFavorite || dataFavorite.length === 0) {
    return (
      <div className="text-center mt-10 text-lg text-gray-500">
        Bạn chưa có khóa học nào được yêu thích.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-6">Danh sách khóa học yêu thích</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dataFavorite.map((fav: IFavorite) => (
          <Card key={fav.id} className="relative hover:shadow-lg transition duration-300">
            <CardContent className="p-4 flex flex-col gap-3">
              <iframe
                width="100%"
                height="180"
                src={`https://www.youtube.com/embed/${fav.tutor?.introductionVideoId}`}
                title="Video giới thiệu"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
              {/* Icon yêu thích để xóa */}
              <Tooltip title="Bỏ yêu thích" arrow>
                <IconButton
                  onClick={() => deleteFavorite(String(fav?.id))}
                  className="!absolute bottom-2 right-2 text-red-500"
                  color="error"
                >
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>

              <div className="flex items-center gap-3 mt-2">
                <img src={fav.tutor?.avatar} className="w-10 h-10 rounded-full" alt="avatar" />
                <div>
                  <div className="font-semibold text-lg">{fav.tutor?.name}</div>
                  <div className="text-sm text-gray-500">{fav.tutor?.specialty}</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Học phí:{" "}
                <span className="font-semibold">{fav.tutor?.price.toLocaleString()} VNĐ</span> / giờ
              </div>
              <div className="text-sm text-gray-600">
                Đánh giá: <span className="font-semibold">{fav.tutor?.rating}</span> ⭐
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
