import type { IFavorite } from "../types/favorite";
import api from "../utils/api";

const FavoriteServices = {
  // Thêm yêu thích
  addFavoriteTutor: (favorite: Omit<IFavorite, "id">) =>
    api.post("/favorites", favorite).then((res) => res.data),

  // Xóa phim
  deleteFavoriteTutor: (id: string) => api.delete(`/favorites/${id}`).then((res) => res.data),
};

export default FavoriteServices;
