import { useState } from "react";
import { MessageCircle } from "lucide-react";

function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const normalizedInput = input
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    let response = "Xin lỗi, tôi chưa hiểu yêu cầu của bạn.";

    if (normalizedInput.includes("tieng anh") || normalizedInput.includes("my")) {
      response =
        "Bạn có thể học tiếng Anh với giáo viên người Mỹ tại đây 👉 http://localhost:5173/tutor";
    } else if (normalizedInput.includes("tieng trung") || normalizedInput.includes("trung")) {
      response = "Bạn quan tâm đến giáo viên tiếng Trung? 👉 http://localhost:5173/tutor";
    } else if (normalizedInput.includes("tieng han") || normalizedInput.includes("han")) {
      response = "Bạn quan tâm đến giáo viên tiếng Hàn? 👉 http://localhost:5173/tutor";
    }

    setMessages([...messages, `Bạn: ${input}`, `AI: ${response}`]);
    setInput("");
  };

  return (
    <>
      {/* Nút bật/tắt chat */}
      <div className="fixed bottom-20 right-4 z-50">
        <button
          className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Giao diện khung chat */}
      {isOpen && (
        <div className="fixed bottom-35 right-4 w-80 bg-white shadow-lg rounded-lg z-50 flex flex-col border border-gray-300">
          <div className="bg-orange-500 text-white px-4 py-2 rounded-t-md font-semibold">
            Tư vấn AI
          </div>
          <div className="flex-1 p-3 h-60 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, idx) => (
              <div key={idx}>{msg}</div>
            ))}
          </div>
          <div className="flex border-t p-2">
            <input
              type="text"
              className="flex-1 border px-2 py-1 rounded-l-md text-sm outline-none"
              placeholder="Nhập nội dung..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600 text-sm"
              onClick={handleSend}
            >
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatbotButton;
