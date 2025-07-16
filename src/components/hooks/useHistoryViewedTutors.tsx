import { useState, useEffect } from "react";
import type { ITutor } from "../../types/tutors";

export default function useHistoryViewedTutors() {
  const [historyViewed, setHistoryViewed] = useState<ITutor[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("historyViewedTutors");
    if (stored) {
      setHistoryViewed(JSON.parse(stored));
    }
  }, []);

  const saveToHistory = (tutor: ITutor) => {
    const stored = localStorage.getItem("historyViewedTutors");
    let history: ITutor[] = stored ? JSON.parse(stored) : [];

    // Xoá tutor nếu đã tồn tại
    history = history.filter((item) => item.id !== tutor.id);

    // Thêm tutor mới vào đầu danh sách
    history.unshift(tutor);

    // Giới hạn danh sách còn tối đa 10 phần tử
    if (history.length > 10) history = history.slice(0, 10);

    // Lưu lại localStorage và cập nhật state
    localStorage.setItem("historyViewedTutors", JSON.stringify(history));
    setHistoryViewed(history);
  };

  return { historyViewed, saveToHistory };
}
