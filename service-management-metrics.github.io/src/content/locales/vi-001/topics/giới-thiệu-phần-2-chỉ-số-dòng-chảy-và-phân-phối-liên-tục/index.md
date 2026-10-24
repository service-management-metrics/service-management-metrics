# Giới thiệu Phần 2: Chỉ số dòng chảy và phân phối liên tục

**Các chỉ số dòng chảy cho thấy công việc thực sự di chuyển ra sao qua một đội xây dựng và vận hành dịch vụ, để bạn tìm ra nơi nó chờ, quyết định thay đổi gì và kiểm tra rằng thay đổi có giúp ích.**

Các đội linh hoạt đồng thời vận hành dịch vụ xử lý một dòng công việc hỗn hợp: tính năng đã lên kế hoạch, sửa lỗi, yêu cầu dịch vụ và những gián đoạn từ các sự cố đang xảy ra. Tất cả đều cạnh tranh cùng những con người và cùng sự chú ý. Các chỉ số dòng chảy mô tả dòng đó từ góc nhìn của hạng mục công việc. Chúng hỏi có bao nhiêu hạng mục đang tiến hành, chúng mất bao lâu, chúng già đến đâu, và có bao nhiêu hạng mục hoàn tất trong một kỳ.

Góc nhìn này hữu ích vì phần lớn sự chậm trễ là chờ đợi chứ không phải làm việc. Một yêu cầu có thể nằm trong hàng đợi, trong một buổi rà soát hay trong một bước phê duyệt lâu hơn nhiều so với thời gian bất kỳ ai dành cho nó. Đo đồng hồ trên hạng mục, thay vì công sức của con người, làm lộ những khoảng trống đó và cho đội một điểm xuất phát chung, dựa trên sự thật để cải tiến. Nó cũng khớp với cả hai thế giới. Thực hành linh hoạt nói về thời gian chu trình và thông lượng, còn thực hành ITIL nói về các chuỗi giá trị và hiệu suất dịch vụ. Cả hai đang mô tả cùng một sự di chuyển của công việc.

Dữ liệu dòng chảy bị lệch và dễ bị dùng sai. Các thước đo thời gian nên được đọc như phân phối với bách phân vị, như đã nêu ở Phần 1 (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Mọi chỉ số trong phần này mô tả một đội, một dịch vụ hoặc một hệ thống. Không cái nào xếp hạng cá nhân, và không cái nào là mục tiêu để đẩy lên hay xuống một cách riêng lẻ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Bốn lăng kính của cuốn sách hiện ra ở đây theo một cách riêng. Phân phối liên tục và sự tham gia của các bên liên quan đặt nhịp cho công việc được đo. Sự hỗ trợ của AI có thể làm tăng số hạng mục trông như đã xong mà không rút ngắn thời gian chúng chờ, nên các thước đo dòng chảy được ghép với các tín hiệu làm lại và chất lượng. Tự động hóa cung cấp các dấu thời gian sự kiện và bản thân nó nên được đo về các thất bại. Phân tích biến các đồng hồ thành các khoảng và xu hướng, với số hạng mục đứng sau mỗi cái được hiển thị.

## Các chủ đề trong phần này

- **2.1 Các thước đo dòng chảy**: công việc đang làm dở, thông lượng, tuổi hạng mục công việc và thời gian chu trình, áp dụng cho công việc dự án và dịch vụ.
- **2.2 Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy**: các định nghĩa đứng vững giữa các đội, nơi đồng hồ bắt đầu và dừng, và cách làm lộ thời gian chờ.
- **2.3 Công việc đang làm dở và lý thuyết hàng đợi**: định luật Little, mức sử dụng và sự tăng của hàng đợi, giới hạn công việc đang làm dở (WIP), và vì sao một đội dịch vụ bận kín là một đội chậm.
- **2.4 Chỉ số chuỗi giá trị**: các thước đo lập bản đồ chuỗi giá trị, thời gian xử lý, thời gian chờ, phần trăm hoàn chỉnh và chính xác, và các chuỗi giá trị của ITIL.
- **2.5 Chỉ số dự báo và lập kế hoạch phân phối**: điểm câu chuyện và vận tốc, mức thành công mục tiêu phân phối, độ chính xác dự báo, và vì sao vận tốc không bao giờ được so sánh giữa các đội.
- **2.6 Chỉ số tồn đọng và tinh chỉnh**: kích thước và tuổi tồn đọng, công việc sẵn sàng, độ phủ tinh chỉnh, và tồn đọng sản phẩm khác tồn đọng dịch vụ ra sao.
- **2.7 Chỉ số yêu cầu hợp nhất và rà soát mã**: thời gian rà soát, kích thước yêu cầu hợp nhất và làm lại như các tín hiệu của dòng chảy, cùng các vectơ lợi dụng theo sau.
- **2.8 Chỉ số DORA**: thời gian chờ thay đổi, tần suất triển khai, thời gian khôi phục sau triển khai thất bại, tỷ lệ thay đổi thất bại và tỷ lệ làm lại triển khai, cùng những lưu ý của chính nghiên cứu.
- **2.9 Công việc vận hành và công việc ngoài kế hoạch**: công việc có kế hoạch so với ngoài kế hoạch, tải gián đoạn, làn khẩn cấp và phân bổ năng lực giữa công việc thay đổi và công việc vận hành.

## Mối liên hệ giữa các chủ đề

Bốn chủ đề đầu tạo thành cốt lõi của phần này. Chủ đề 2.1 (xem chủ đề 2.1, Các thước đo dòng chảy) định nghĩa các đại lượng cơ bản: công việc đang làm dở, thông lượng, tuổi hạng mục công việc và thời gian chu trình. Chủ đề 2.2 (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy) cố định nơi các đồng hồ bắt đầu và dừng, điều mà mọi phép so sánh đều phụ thuộc. Chủ đề 2.3 (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi) giải thích vì sao các đại lượng đó dịch chuyển cùng nhau, và chủ đề 2.4 (xem chủ đề 2.4, Chỉ số chuỗi giá trị) mở rộng góc nhìn từ bảng của một đội sang toàn bộ con đường từ yêu cầu đến giá trị.

Một số chủ đề đóng vai trò rào chắn cho những chủ đề khác. Các thước đo thông lượng và tốc độ có thể bị thổi phồng bằng cách chia công việc thành các mảnh nhỏ hơn hoặc làm vội, nên chúng cần được đọc cùng các tín hiệu làm lại và chất lượng. Kích thước yêu cầu hợp nhất và thời gian rà soát trong chủ đề 2.7 (xem chủ đề 2.7, Chỉ số yêu cầu hợp nhất và rà soát mã) là các chỉ báo sớm của chậm trễ và làm lại. Các kết quả phân phối trong chủ đề 2.8 (xem chủ đề 2.8, Chỉ số DORA) ghép các thước đo tốc độ với các thước đo ổn định, để phân phối nhanh hơn không bị mua bằng nhiều thất bại hơn. Vận tốc trong chủ đề 2.5 (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối) là một công cụ lập kế hoạch cho một đội, và nó nên được kiểm tra với độ chính xác dự báo và các thước đo dòng chảy thay vì được đọc như sản lượng.

Các chủ đề còn lại mô tả những điều kiện mà trong đó công việc chảy. Một tồn đọng dài, cũ hoặc tinh chỉnh kém nuôi dưỡng dòng chảy kém, đó là mối quan tâm của chủ đề 2.6 (xem chủ đề 2.6, Chỉ số tồn đọng và tinh chỉnh). Công việc ngoài kế hoạch và các gián đoạn, được trình bày trong chủ đề 2.9 (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch), thường là lý do ẩn khiến thời gian chu trình kéo dài và dự báo trượt. Đọc chúng cạnh công việc đang làm dở và lý thuyết hàng đợi trong chủ đề 2.3 giải thích vì sao một đội không còn năng lực dư không thể hấp thụ một sự cố mà không làm chậm mọi thứ khác.

Các phần sau xây dựng trên những thước đo này. Các chỉ số sự cố, thay đổi và phát hành ở Phần 3 và 4 dùng cùng các đồng hồ và cùng cách nghĩ về phân phối, áp dụng cho công việc hỗ trợ và thay đổi. Gộp lại, góc nhìn dòng chảy cho phép các đội linh hoạt và ITIL nói về một hệ thống công việc chung.
