import useSWR from "swr";
import FavoriteServices from "../services/favoriteServices";
import type { IFavorite } from "../types/favorite";
type FavoriteInput = Omit<IFavorite, "id">;
function useFavorite() {
  const {
    data: dataFavorite,
    mutate,
    isLoading,
  } = useSWR<IFavorite[]>("/favorites?userId=1&_expand=tutor");

  const addFavorite = async (favorite: FavoriteInput) => {
    try {
      const newFavorite = await FavoriteServices.addFavoriteTutor(favorite);
      mutate(); // Cập nhật dữ liệu ngay lập tức
      return newFavorite;
    } catch (error) {
      console.error("Lỗi khi thêm yêu thích:", error);
      throw error;
    }
  };
  const deleteFavorite = async (id: string) => {
    try {
      await FavoriteServices.deleteFavoriteTutor(id);
      mutate(); // Cập nhật dữ liệu ngay lập tức
    } catch (error) {
      console.error("Lỗi khi xóa rạp:", error);
      throw error;
    }
  };
  return { dataFavorite, isLoading, addFavorite, deleteFavorite };
}

export default useFavorite;
