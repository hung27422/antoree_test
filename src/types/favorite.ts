import type { Tutor } from "./tutors";

export interface Favorite {
  id?: number; // ID của mục yêu thích
  userId: number;
  tutorId: number; // ID của tutor (foreign key)
  tutor?: Tutor; // Thông tin đầy đủ của tutor từ _expand
}
