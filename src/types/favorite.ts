import type { ITutor } from "./tutors";

export interface IFavorite {
  id?: number; // ID của mục yêu thích
  userId: number;
  tutorId: number; // ID của tutor (foreign key)
  tutor?: ITutor; // Thông tin đầy đủ của tutor từ _expand
}
