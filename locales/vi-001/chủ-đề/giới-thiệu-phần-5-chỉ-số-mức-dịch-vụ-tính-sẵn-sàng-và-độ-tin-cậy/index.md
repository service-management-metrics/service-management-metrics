# Giới thiệu Phần 5: Chỉ số mức dịch vụ, tính sẵn sàng và độ tin cậy

**Các chỉ số mức dịch vụ, tính sẵn sàng và độ tin cậy mô tả những gì người dùng có thể trông cậy ở một dịch vụ, để các đội chỉ hứa những gì họ giao được, sớm nhận ra khi đang trôi khỏi lời hứa, và dồn công sức vào nơi người dùng sẽ cảm nhận được.**

Các Phần 2 đến 4 đã xem xét cách công việc di chuyển: nó chảy nhanh đến đâu, sự cố được xử lý ra sao, và thay đổi được thực hiện an toàn thế nào. Phần này quay sang kết quả mà người dùng thực sự trải nghiệm. Một dịch vụ phát hành thường xuyên và giải quyết sự cố nhanh vẫn có thể chậm, không khả dụng vào những lúc không đúng, hoặc khó đoán. Người dùng đánh giá dịch vụ bằng việc nó có hoạt động khi họ cần không, không phải bằng cách đội tự tổ chức.

Hai truyền thống gặp nhau ở đây. Thực hành ITIL từ lâu đã dùng thỏa thuận mức dịch vụ, mục tiêu và báo cáo để đặt kỳ vọng giữa nhà cung cấp và khách hàng của họ. Thực hành kỹ thuật độ tin cậy của trang, được trình bày trong các cuốn *Site Reliability Engineering* của Google, dùng chỉ báo mức dịch vụ, mục tiêu và ngân sách lỗi để biến độ tin cậy thành một sự đánh đổi kỹ thuật tường minh với nhịp độ thay đổi. Hai bên tương thích. Cả hai đều bắt đầu từ điều người dùng quan tâm, cả hai đều diễn đạt nó thành một mục tiêu đo được, và cả hai cần một bản tường thuật trung thực về mức độ thường xuyên mục tiêu được đạt.

Một rủi ro lặp lại chạy xuyên suốt cả phần. Một con số độ tin cậy dễ bị làm cho trông đẹp: bằng cách chọn một chỉ báo thuận tiện, loại trừ các giai đoạn khó chịu, hoặc đo thành phần thay vì hành trình của người dùng. Vì lý do đó mỗi chủ đề ở đây nêu tên các đồng hồ và ranh giới của các thước đo, đọc thời gian và độ trễ như các phân phối với bách phân vị (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ), và ghép mỗi thước đo với một rào chắn (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Mọi chỉ số mô tả một dịch vụ, một đội hoặc một hệ thống. Không cái nào xếp hạng một cá nhân, và các thước đo trực ca đặc biệt tồn tại để bảo vệ con người, không phải để chấm điểm họ.

Bốn lăng kính áp dụng cho độ tin cậy theo những cách riêng. Phân phối liên tục và ngân sách lỗi biến rủi ro thành một quyết định chung, có thể chi tiêu. Các thành phần AI có thể thất bại một cách mềm, bằng cách chậm hoặc sai thay vì ngừng, nên tính sẵn sàng cho các đường AI cần một thước đo chất lượng bên cạnh. Tự động hóa cung cấp đo từ xa và cảnh báo, và bản thân nó phải được đo về các cảnh báo bị bỏ sót và cảnh báo giả. Phân tích nên cho thấy cửa sổ và số sự kiện đứng sau mỗi con số.

## Các chủ đề trong phần này

- **5.1 Chỉ số SLA, OLA và XLA**: các thước đo thỏa thuận mức dịch vụ, thỏa thuận mức vận hành và thỏa thuận mức trải nghiệm, và cách báo cáo dưa hấu giấu rắc rối sau những bảng điều khiển xanh và cách tránh nó.
- **5.2 SLI, SLO và ngân sách lỗi**: chỉ báo và mục tiêu mức dịch vụ, chính sách ngân sách lỗi, tốc độ đốt, và chọn chỉ báo từ điều người dùng quan tâm.
- **5.3 Chỉ số tính sẵn sàng**: tính thời gian hoạt động và ngừng hoạt động, tính sẵn sàng có trọng số theo người dùng, ngừng hoạt động có kế hoạch so với ngoài kế hoạch, và số học của các chữ số chín.
- **5.4 Chỉ số năng lực và hiệu năng**: mức sử dụng, độ bão hòa, bách phân vị độ trễ, dư địa và dự báo nhu cầu.
- **5.5 Chỉ số giám sát và chất lượng cảnh báo**: khối lượng cảnh báo, tỷ lệ cảnh báo hành động được, dương tính giả, độ phủ phát hiện và mệt mỏi vì cảnh báo.
- **5.6 Chỉ số liên tục dịch vụ**: mục tiêu thời gian khôi phục và điểm khôi phục đạt được trong các bài kiểm thử, tần suất kiểm thử, phát hiện từ ngày diễn tập và độ cập nhật của kế hoạch.
- **5.7 Chỉ số công việc lặp đi lặp lại và trực ca**: số lần gọi mỗi ca, tải ngoài giờ, tỷ lệ thời gian dành cho công việc lặp đi lặp lại và các thước đo luân phiên bền vững.

## Mối liên hệ giữa các chủ đề

Ba chủ đề đầu tạo thành lõi của phần, vì chúng định nghĩa lời hứa và cách đo nó. Chủ đề 5.1 (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA) bao quát các thỏa thuận giữa nhà cung cấp, các đội nội bộ và khách hàng, và các thực hành báo cáo làm cho những thỏa thuận ấy trung thực hay gây hiểu lầm. Chủ đề 5.2 (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi) cung cấp đối ứng kỹ thuật: các chỉ báo rút từ trải nghiệm người dùng, các mục tiêu đặt trên chúng, và một ngân sách lỗi làm cho dư địa còn lại cho rủi ro hiển thị. Chủ đề 5.3 (xem chủ đề 5.3, Chỉ số tính sẵn sàng) cố định số học mà cả hai dựa vào, gồm cái gì được tính là ngừng hoạt động và người dùng nào bị ảnh hưởng.

Năng lực và hiệu năng đứng sát sau tính sẵn sàng. Một dịch vụ về mặt kỹ thuật đang chạy nhưng bão hòa hoặc chậm làm người dùng thất vọng theo cách mà một con số thời gian hoạt động đơn giản bỏ sót. Chủ đề 5.4 (xem chủ đề 5.4, Chỉ số năng lực và hiệu năng) cung cấp bách phân vị độ trễ và các thước đo dư địa bổ sung cho tính sẵn sàng, và các dự báo nhu cầu của nó cho cảnh báo sớm trước khi một mục tiêu bị đe dọa.

Phát hiện và khôi phục quyết định người dùng trải nghiệm bao nhiêu phần của một thất bại. Chủ đề 5.5 (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo) hỏi đội có biết về vấn đề nhanh và từ các tín hiệu đáng hành động không, liên kết trực tiếp với thời gian phát hiện và khôi phục trong Phần 3. Chủ đề 5.6 (xem chủ đề 5.6, Chỉ số liên tục dịch vụ) hỏi đội có thể khôi phục trong các giới hạn đã nêu khi có chuyện lớn hơn xảy ra không, và kiểm thử khẳng định đó thay vì giả định nó.

Chủ đề 5.7 (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca) đóng vai trò rào chắn con người cho phần còn lại. Mục tiêu chặt, cảnh báo ồn ào và sự cố thường xuyên đều rơi xuống những người mang máy nhắn tin. Số lần gọi mỗi ca và tỷ lệ công việc lặp đi lặp lại cho thấy khi nào độ tin cậy đang được mua bằng công sức không bền vững, và chúng nối lại với các thước đo công việc ngoài kế hoạch trong Phần 2. Chất lượng cảnh báo trong chủ đề 5.5 và tải trực ca trong chủ đề 5.7 nên được đọc thành một cặp, vì cảnh báo kém là nguyên nhân phổ biến của các luân phiên nặng.

Cuối cùng, ngân sách lỗi trong chủ đề 5.2 nối phần này với thay đổi trong Phần 4. Khi ngân sách khỏe, một đội có thể phát hành thoải mái hơn. Khi nó cạn, thay đổi và công việc độ tin cậy nên được cân bằng lại. Phần 6 sau đó kiểm tra liệu đạt các mục tiêu trong phần này có để người dùng tốt hơn không, là câu hỏi mà một báo cáo xanh không tự trả lời được.
