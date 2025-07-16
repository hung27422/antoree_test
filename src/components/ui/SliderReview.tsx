import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const infoStudents = [
  {
    id: 1,
    name: "Nguyễn Văn Toàn",
    image: "https://giasudatviet.com/uploads/images/gia_su_lop_4.jpg",
    review:
      "Con tôi học lớp 4, học gia sư ở đây. Quả là thành công rực rỡ! Không những con tôi được luyện tiếng Anh mà tôi còn thấy con tôi tự tin hơn với khả năng tiếng Anh của mình.",
  },
  {
    id: 2,
    name: "Trần Thị Mai",
    image:
      "https://bizweb.dktcdn.net/100/175/849/files/chup-anh-the-dep-cho-hoc-sinh-05.jpg?v=1609569927000",
    review:
      "Antoree là lựa chọn lý tưởng cho những ai có ít thời gian, không đủ ngân sách cho gia sư riêng và đặc biệt là muốn trò chuyện với mọi người từ khắp nơi trên thế giới.",
  },
  {
    id: 3,
    name: "Lê Văn Bình",
    image: "https://chupanhthe.vn/img/chup-anh-the-chuan-quoc-te5.jpg",
    review:
      "Tôi rất phấn khởi với kết quả đạt được. Khả năng nói và hiểu của tôi đã tăng lên rõ rệt. Giờ thì tôi nói tiếng Anh tự tin hơn rất nhiều rồi đấy.",
  },
  {
    id: 4,
    name: "Phạm Thị Lan",
    image:
      "https://anhnghethuatvietnam2022.com/wp-content/uploads/2025/03/Anh-hinh-gai-xinh-2k8-deo-kinh-cute.webp",
    review:
      "Ban đầu, tôi có hơi nghi ngờ. Tôi vốn đã quen học qua sách vở và rất nhớ trải nghiệm đó. Nhưng rồi tôi nhanh chóng nhận ra rằng đây mới chính là công cụ học tập tuyệt vời nhất mình từng biết.",
  },
  {
    id: 5,
    name: "Nguyễn Thị Hương",
    image:
      "https://anhnghethuatvietnam2022.com/wp-content/uploads/2025/03/Gai-xinh-2k8-deo-kinh-de-thuong.webp",
    review:
      "Tôi thấy cách học tiếng Anh của mình đã cải thiện đáng kể. Tôi thậm chí đã tham gia vài buổi phỏng vấn bằng tiếng Anh - điều mà vài tháng trước đây tưởng chừng như không thể.",
  },
];

function SliderReview() {
  const settings = {
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "20px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-2 py-4 sm:px-4 md:px-8">
      <Slider {...settings}>
        {infoStudents.map((student) => (
          <div
            key={student.id}
            className="bg-white shadow-lg rounded-xl p-4 mx-2 h-[360px] flex flex-col justify-between"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{student.name}</h3>
              <p className="text-sm text-gray-600 leading-relaxed line-clamp-5">{student.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderReview;
