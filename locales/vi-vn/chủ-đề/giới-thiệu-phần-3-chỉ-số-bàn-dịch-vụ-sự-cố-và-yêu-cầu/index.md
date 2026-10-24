# Giới thiệu Phần 3: Chỉ số bàn dịch vụ, sự cố và yêu cầu

**Các chỉ số bàn dịch vụ, sự cố và yêu cầu cho thấy việc hỗ trợ và khôi phục hoạt động tốt đến đâu với những người dùng dịch vụ của bạn, để bạn cải thiện trải nghiệm được giúp đỡ thay vì vẻ ngoài của một bản báo cáo.**

Đây là phần của cuốn sách nơi người dùng gặp dịch vụ. Một người không đăng nhập được, một khách hàng có đơn hàng thất bại, và một nhân viên cần một máy tính xách tay mới đều đến với tổ chức qua bàn dịch vụ, một cảnh báo giám sát, một cổng tự phục vụ hoặc một tin nhắn trò chuyện. Điều xảy ra tiếp theo quyết định cách họ đánh giá toàn bộ dịch vụ. Các chỉ số trong lĩnh vực này mô tả trải nghiệm đó từ hai phía: tổ chức khôi phục dịch vụ nhanh và tốt đến đâu khi có gì đó hỏng, và nó thực hiện các yêu cầu thường lệ của con người đáng tin đến đâu.

Trong ITIL 4, quản lý sự cố và quản lý yêu cầu dịch vụ là hai thực hành riêng, và bàn dịch vụ là đầu mối liên hệ cho cả hai. Các đội linh hoạt vận hành cái họ xây thường xử lý cùng công việc qua các vòng trực ca và các hàng đợi dùng chung. Dù theo cách nào, các vấn đề đo lường đều giống nhau. Số đếm phụ thuộc vào cách công việc được phân loại, thời gian phụ thuộc vào nơi các đồng hồ bắt đầu và dừng, và các giá trị trung bình che giấu những sự chậm trễ dài mà người dùng nhớ. Các thói quen thống kê nêu ở Phần 1 áp dụng xuyên suốt (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

Các chỉ số hỗ trợ cũng dễ bị lợi dụng một cách khác thường. Một bàn có thể đóng phiếu nhanh hơn bằng cách đóng sớm, và có thể giảm thời gian xử lý bằng cách vội vàng với người gọi. Một đội có thể giảm số sự cố bằng cách phân loại lại chúng thành yêu cầu. Vì vậy mỗi chủ đề trong phần này nêu tên hành vi mà một chỉ số thưởng, hành vi mà nó che giấu, và rào chắn bắt được sự khác biệt (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Mọi thước đo ở đây mô tả một đội, một dịch vụ hoặc một hệ thống. Không cái nào xếp hạng một nhân viên hay người xử lý riêng lẻ.

Bốn lăng kính quan trọng nhất trong phần này, vì phân loại ưu tiên bằng AI, tác tử ảo và thực hiện tự động giờ đây xử lý một phần công việc mà các thước đo này đếm. Một liên hệ chưa bao giờ đến tay con người chỉ là thành công nếu vấn đề được giải quyết, nên mỗi thước đo tốc độ hay khối lượng ở đây được ghép với một thước đo liên hệ lại, mở lại hoặc chất lượng. Thu thập tự động cung cấp các đồng hồ, và phân tích cho thấy các phân phối kèm số trường hợp đứng sau chúng.

## Các chủ đề trong phần này

- **3.1 Chỉ số bàn dịch vụ**: khối lượng liên hệ, giải quyết ngay lần liên hệ đầu, bỏ cuộc và thời gian xử lý; mỗi cái thưởng gì và che giấu gì.
- **3.2 Số lượng và mức ưu tiên sự cố**: số đếm sự cố, danh mục, tác động và độ khẩn, cơ cấu mức ưu tiên, sự cố lặp lại, và chuẩn hóa khối lượng theo mức sử dụng.
- **3.3 Thời gian phản hồi và giải quyết sự cố**: thời gian để phát hiện, xác nhận, phản hồi và giải quyết; các thước đo thời gian trung bình và vấn đề thống kê của chúng; dùng bách phân vị thay thế.
- **3.4 Chỉ số sự cố lớn**: tần suất, thời lượng, tác động đến khách hàng, tính kịp thời của truyền thông và việc theo đuổi hành động đến cùng.
- **3.5 Chỉ số thực hiện yêu cầu dịch vụ**: thời gian thực hiện, tồn đọng, khối lượng yêu cầu theo mục danh mục và tỷ lệ tự động hóa.
- **3.6 Chỉ số quản lý tri thức**: mức dùng bài viết, tái sử dụng trong giải quyết, tỷ lệ liên kết, độ mới và các chỉ báo Dịch vụ Lấy Tri thức làm Trung tâm (KCS).
- **3.7 Chỉ số tự phục vụ và tự động hóa**: chuyển hướng, mức thành công tự phục vụ, độ phủ tự động hóa, và hiệu ứng dịch sang trái lên khối lượng và độ phức tạp.

## Mối liên hệ giữa các chủ đề

Bốn chủ đề đầu theo vòng đời của một sự gián đoạn. Các liên hệ đến bàn, là mối quan tâm của chủ đề 3.1 (xem chủ đề 3.1, Chỉ số bàn dịch vụ). Những liên hệ báo một lỗi trở thành sự cố, mà chủ đề 3.2 (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố) đếm và phân loại theo tác động và độ khẩn. Chủ đề 3.3 (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố) sau đó đo mỗi giai đoạn mất bao lâu. Số ít sự cố gây hại nghiêm trọng được xử lý riêng trong chủ đề 3.4 (xem chủ đề 3.4, Chỉ số sự cố lớn), vì sự hiếm và quy mô của chúng khiến các giá trị trung bình thông thường gây hiểu lầm.

Một số thước đo này cần một đối tác để giữ trung thực. Tốc độ ở bàn, như thời gian xử lý trong chủ đề 3.1, nên được đọc bên cạnh giải quyết ngay lần liên hệ đầu và các liên hệ lặp lại nó tạo ra, để các cuộc gọi nhanh không bị nhầm với vấn đề đã được giải quyết. Thời gian giải quyết trong chủ đề 3.3 thuộc về cùng các sự cố lặp lại trong chủ đề 3.2, vì một lần khôi phục nhanh mà hỏng lại sau một tuần chưa giúp ích gì cho người dùng. Cơ cấu mức ưu tiên trong chủ đề 3.2 cho bối cảnh cho mọi thước đo thời gian: sự tăng của thời gian giải quyết trung vị có thể phản ánh một thay đổi trong loại sự cố đến chứ không phải thay đổi trong mức độ phản hồi tốt của đội.

Yêu cầu và sự cố nên được đo cạnh nhau nhưng không bao giờ gộp. Chủ đề 3.5 (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ) bao quát công việc thực hiện dễ đoán, lặp lại được, nơi mục đích là công sức ổn định và co lại mỗi yêu cầu. Công việc sự cố không dự đoán được, và mục đích của nó là khôi phục nhanh và bền. Kết hợp chúng trong một giá trị trung bình hàng đợi giấu vấn đề của cả hai. Các thước đo dòng chảy ở Phần 2 cung cấp các đồng hồ chung và giới hạn công việc đang làm dở giữ cho hai dòng không bỏ đói nhau (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

Hai chủ đề cuối tác động lên khối lượng mà các chủ đề khác đo. Tri thức trong chủ đề 3.6 (xem chủ đề 3.6, Chỉ số quản lý tri thức) rút ngắn việc giải quyết bằng cách cho người kế tiếp tái sử dụng điều người trước đã học, và nó nuôi nội dung tự phục vụ được đo trong chủ đề 3.7 (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa). Chuyển hướng và tự động hóa giảm các liên hệ đơn giản đến bàn, để lại một hỗn hợp công việc khó hơn cho những người còn lại. Sự dịch chuyển đó nên được chờ đợi, và thời gian xử lý có thể tăng vì vậy, nên nó cần được đọc như một thay đổi về cơ cấu chứ không phải sự sa sút hiệu suất.

Các sự cố tái diễn trở thành đầu vào cho quản lý vấn đề ở Phần 4.
