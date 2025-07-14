export interface Tutor {
  id: number;
  name: string;
  specialty: string;
  pricePerHour: number;
  avatar: string;
  introductionVideoId: string;
  language: string; 
  rating: number;
  reviews: number;
  description: string;
  experience: string;
  certificates: string[];
  availability: string[]; // ví dụ: ["Thứ 2-6", "18:00 - 21:00"]
  teachingMethod: string;
  location: string;
  languagesSpoken: string[]; // ví dụ: ["Tiếng Việt", "Tiếng Anh"]
  education: string;
  gender: "Nam" | "Nữ" | "Khác"; // hoặc string nếu cần linh hoạt hơn
}
