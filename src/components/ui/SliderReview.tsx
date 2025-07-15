import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const infoStudents = [
  {
    id: 1,
    name: "Nguyễn Văn Toàn",
    image: "https://giasudatviet.com/uploads/images/gia_su_lop_4.jpg",
    review:
      "Con tôi học lớp 4, học gia sư ở đây,Quả là thành công rực rỡ! Không những con tôi được luyện tiếng Anh mà tôi còn thấy con tôi tự tin hơn với khả năng tiếng Anh của mình.",
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
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 3,
    speed: 500,
    m: 4,
    borderRadius: "10px",
  };
  return (
    <div className="slider-container rounded-md overflow-hidden px-8">
      <Slider {...settings}>
        {infoStudents.map((student) => {
          return (
            <div key={student.id} className="bg-gray-300 rounded-md p-2 mr-5 h-[370px] w-[600px]">
              <div>
                <img
                  className="w-full h-[200px] object-cover rounded-lg"
                  src={student.image}
                  alt="img-user"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold my-2">{student.name}</h3>
                <span>{student.review}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default SliderReview;
