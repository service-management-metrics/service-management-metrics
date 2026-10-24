# Giới thiệu Phần 11: Xây dựng chương trình chỉ số

**Một chương trình chỉ số là một dịch vụ sống lâu của riêng nó: nó cần một đối tượng, một tập thước đo nhỏ, công cụ trung thực, lòng tin của những người được đo, và một con đường lớn lên từng bước một.**

Các Phần 2 đến 10 mô tả cần đo gì. Phần này mô tả cách biến những thước đo đó thành một thói quen bền lâu. Nhiều tổ chức coi đo lường là một dự án: chọn một công cụ, xây một bảng điều khiển, thông báo một bộ mục tiêu, và đi tiếp. Một năm sau, bảng điều khiển cũ kỹ, các mục tiêu đã uốn hành vi theo những cách không ai định, và những người được đo đã học cách nghi ngờ toàn bộ nỗ lực. Một chương trình thì khác. Nó có người sở hữu, một mục đích, một nhịp rà soát, và một cách cho nghỉ hưu các thước đo đã ngừng giúp ích. Bản thân nó là một dịch vụ, và nó có thể được đo và cải thiện như một dịch vụ.

Các mục đích linh hoạt áp dụng cho chương trình như cho bất kỳ công việc nào khác. Sự tham gia liên tục của các bên liên quan nghĩa là những người sẽ được đo, và những người sẽ dùng kết quả, giúp chọn các thước đo ngay từ đầu. Cải tiến liên tục nghĩa là chương trình tự rà soát và bỏ những gì không xứng với chi phí của nó. Tiến hóa liên tục nghĩa là tập thước đo thay đổi khi dịch vụ thay đổi. Nhịp độ bền vững nghĩa là chương trình không thêm gánh nặng báo cáo chen lấn công việc mà nó định soi sáng. Và xây dựng quanh những cá nhân có động lực nghĩa là các thước đo được đưa ra như sự giúp đỡ cho các đội sở hữu công việc của họ, không bị áp đặt như giám sát (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Hai thất bại âm thầm ám ảnh mọi chương trình. Thứ nhất là nỗi sợ. Nếu mọi người tin các con số sẽ được dùng để xếp hạng, đổ lỗi hay cắt giảm họ, họ sẽ quản lý các con số thay vì công việc, và dữ liệu sẽ ngừng đúng sự thật. Thứ hai là tràn lan. Mọi bên liên quan muốn thêm một thước đo, mọi công cụ đưa ra thêm năm mươi biểu đồ, và chẳng bao lâu không ai nói được con số nào quan trọng. Các chủ đề trong phần này chủ yếu là về việc tránh hai thất bại đó: giữ tập nhỏ, giữ nó do các đội sở hữu, và giữ việc sử dụng nó hiển thị và lành tính.

Bốn lăng kính định hình một chương trình chỉ số. Nó nên được xây theo cùng tinh thần phân phối liên tục như các dịch vụ nó đo. Các tính năng AI trong công cụ và dữ liệu do AI suy ra về con người cần quy tắc tường minh. Tự động hóa giảm công sức thu thập và cần cùng quyền sở hữu và kiểm tra như bất kỳ tự động hóa nào khác. Thực hành phân tích, với chất lượng dữ liệu và độ bất định của nó, là thứ làm đầu ra của chương trình đáng đọc.

## Các chủ đề trong phần này

- **11.1 Thiết kế bảng điều khiển chỉ số dịch vụ**: đối tượng, một tập nhỏ cân bằng, bối cảnh và xu hướng, và các góc nhìn cho đội, dịch vụ và lãnh đạo.
- **11.2 Bức tranh công cụ**: tự xây hay mua, các loại nền tảng, đường ống dữ liệu, và tiêu chí lựa chọn trung lập với nhà cung cấp.
- **11.3 Triển khai chỉ số mà không gieo sợ hãi**: minh bạch, quyền sở hữu của đội, không bảng xếp hạng cá nhân, và một cuộc triển khai giành được lòng tin.
- **11.4 Mô hình trưởng thành cho chương trình chỉ số**: thang năm mức chung áp dụng cho chính chương trình.
- **11.5 Lộ trình áp dụng từng bước**: một kế hoạch cho 30, 90 và 180 ngày đầu bắt đầu từ nơi bạn đang đứng.

## Mối liên hệ giữa các chủ đề

Triển khai không gieo sợ (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi) đứng đầu về tầm quan trọng, dù bảng điều khiển mới là thứ mọi người thấy. Các thỏa thuận về ai sở hữu dữ liệu, ai thấy nó, và nó sẽ không bao giờ được dùng để làm gì quyết định liệu bất kỳ bảng điều khiển nào có mang số đúng sự thật không. Chủ đề bảng điều khiển (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ) biến những thỏa thuận đó thành một thiết kế: tập nhỏ, bối cảnh, xu hướng, và các góc nhìn phù hợp với từng đối tượng. Chủ đề công cụ (xem chủ đề 11.2, Bức tranh công cụ) sau đó hỏi nền tảng và đường ống nào có thể cung cấp dữ liệu mà không trở thành một dự án lớn hơn lợi ích.

Mô hình trưởng thành (xem chủ đề 11.4, Mô hình trưởng thành cho chương trình chỉ số) cho chương trình một cách mô tả nó đang ở đâu và bước kế tiếp có thể là gì, dùng cùng thang với mọi chủ đề khác. Lộ trình (xem chủ đề 11.5, Lộ trình áp dụng từng bước) biến điều đó thành một kế hoạch gồm các bước nhỏ, mỗi bước mang lại giá trị nào đó cho những người được đo trước khi bước kế tiếp bắt đầu. Đây là cùng logic phân phối liên tục mà phần còn lại của cuốn sách khuyến nghị cho dịch vụ: giao sớm một thứ hữu ích, học từ việc sử dụng nó, và cải thiện.

Vài cặp ghép giữ cho chương trình trung thực. Một bảng điều khiển kết quả nên được đọc cùng một bản ghi về cách dữ liệu được thu thập và các khoảng trống đã biết của nó. Một kế hoạch triển khai nên được đọc cùng một lời hứa về điều dữ liệu sẽ không được dùng để làm. Một lựa chọn công cụ nên được đọc cùng chi phí để rời bỏ nó. Một điểm trưởng thành nên được coi là điểm khởi đầu cuộc trò chuyện và không bao giờ là mục tiêu.

Phần này dựa vào các nền tảng ở Phần 1, đặc biệt là quản trị chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số) và nguồn dữ liệu (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo), và vào các thước đo cải tiến và thay đổi của Phần 9 (xem chủ đề 9.5, Chỉ số cải tiến liên tục, và chủ đề 9.6, Chỉ số thay đổi tổ chức và mức độ áp dụng). Các phụ lục ở Phần 12 cung cấp danh sách kiểm tra, biểu mẫu và tài liệu tham khảo tổng hợp mà một đội chương trình sẽ dùng hằng ngày.
