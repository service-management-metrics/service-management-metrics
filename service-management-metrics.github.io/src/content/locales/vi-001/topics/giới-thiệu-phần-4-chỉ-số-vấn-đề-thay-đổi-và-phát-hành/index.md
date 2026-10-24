# Giới thiệu Phần 4: Chỉ số vấn đề, thay đổi và phát hành

**Các chỉ số vấn đề, thay đổi và phát hành cho thấy cách một đội thay đổi các dịch vụ của mình và học từ thất bại có đang làm cho chúng vừa cải tiến nhanh hơn vừa vận hành ổn định hơn hay không.**

Mọi thay đổi đối với một dịch vụ đang chạy là một canh bạc. Nó có thể mang lại giá trị sớm hơn, hoặc có thể làm vỡ thứ mà người dùng dựa vào. Phần 3 đã đo việc hỗ trợ và khôi phục hoạt động tốt đến đâu khi có chuyện không ổn (xem chủ đề 3.0, Giới thiệu Phần 3: Chỉ số bàn dịch vụ, sự cố và yêu cầu). Phần này nhìn vào mặt kia của cùng đồng xu: thay đổi đi vào môi trường như thế nào, nó gây rắc rối thường xuyên đến đâu, và tổ chức học tốt đến mức nào để cùng rắc rối đó không quay lại.

Phân phối liên tục và ITIL tiếp cận vùng đất này từ những hướng khác nhau. Thực hành linh hoạt ưu tiên phân phối phần mềm liên tục theo các thay đổi nhỏ và coi phản hồi nhanh là một biện pháp an toàn. Các thực hành ITIL như quản lý vấn đề, hỗ trợ thay đổi và quản lý phát hành tồn tại để bảo vệ sự ổn định và để tìm và gỡ bỏ nguyên nhân của sự cố. Các chỉ số trong phần này cho phép cả hai góc nhìn được kiểm tra với cùng bằng chứng. Nếu thay đổi thường xuyên là an toàn, các thước đo thất bại và làm lại sẽ cho thấy điều đó. Nếu một kiểm soát đang làm chậm phân phối mà không giảm rủi ro, các thước đo phê duyệt và thời gian chờ sẽ cho thấy điều đó thay vào.

Hai lưu ý chạy xuyên suốt cả phần. Tốc độ và sự ổn định phải được đọc cùng nhau, vì một con số cải thiện cái này trong khi âm thầm làm hại cái kia là một sự đánh đổi tồi. Các thước đo thời gian cũng nên được đọc như phân phối với bách phân vị, như đã nêu ở Phần 1 (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Mọi chỉ số ở đây mô tả một đội, một dịch vụ hoặc một hệ thống. Không cái nào xếp hạng một cá nhân, và không cái nào là mục tiêu để đẩy một cách riêng lẻ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Bốn lăng kính định hình phần này. Phân phối liên tục biến các thay đổi nhỏ, thường xuyên thành chuẩn mực, nên các thước đo thay đổi và phát hành mô tả dòng chảy và an toàn cùng nhau. Các thay đổi có AI hỗ trợ và điểm rủi ro do AI tạo ra cần cặp chất lượng riêng của chúng. Các đường ống tự động hóa bằng chứng và phê duyệt, nên tự động hóa phải được đo về các thất bại của nó. Phân tích nối các thay đổi, sự cố và vấn đề, và nói có bao nhiêu trường hợp đứng sau mỗi tỷ lệ.

## Các chủ đề trong phần này

- **4.1 Chỉ số quản lý vấn đề**: vấn đề được mở và đóng, tái sử dụng lỗi đã biết, tái diễn và thời gian đến bản sửa vĩnh viễn.
- **4.2 Chỉ số phân tích sau sự cố và học hỏi**: hoàn tất rà soát, đóng hạng mục hành động, tái diễn của nguyên nhân và các tín hiệu học tập không đổ lỗi.
- **4.3 Chỉ số hỗ trợ thay đổi**: khối lượng thay đổi theo loại, thời gian chờ phê duyệt, tỷ lệ thay đổi chuẩn và tự động hóa phê duyệt.
- **4.4 Thay đổi thất bại và làm lại**: tỷ lệ thay đổi thất bại, tỷ lệ thay đổi khẩn cấp, tỷ lệ hoàn tác và hotfix, và các định nghĩa nhất quán về thất bại.
- **4.5 Chỉ số phát hành và triển khai**: tần suất triển khai, tần suất phát hành, việc dùng cờ tính năng, thời gian chờ phát hành, và tách triển khai khỏi phát hành.
- **4.6 Nợ kỹ thuật và lỗi đã biết**: tồn đọng lỗi đã biết, kho nợ và lãi, và ưu tiên các bản sửa so với công việc tính năng.

## Mối liên hệ giữa các chủ đề

Phần này chia thành hai nửa phụ thuộc vào nhau. Các chủ đề 4.1 và 4.2 nói về học hỏi: sự cố được truy về nguyên nhân ra sao, và các buổi rà soát biến thành các bản sửa được hoàn tất thế nào. Các chủ đề 4.3, 4.4 và 4.5 nói về thay đổi: nó được phê duyệt ra sao, nó thất bại thường xuyên đến đâu, và nó đến người dùng bằng cách nào. Chủ đề 4.6 nối hai nửa, vì nợ và lỗi đã biết mà việc học làm lộ ra chính là những hạng mục cạnh tranh với tính năng mới về thời gian của đội.

Cặp quan trọng nhất là giữa tốc độ và thất bại. Tần suất triển khai và phát hành trong chủ đề 4.5 (xem chủ đề 4.5, Chỉ số phát hành và triển khai) mô tả thay đổi đến môi trường thật thường xuyên đến đâu, và chương trình nghiên cứu DORA ghép các thước đo thông lượng như vậy với các thước đo ổn định (xem chủ đề 2.8, Chỉ số DORA). Chủ đề 4.4 (xem chủ đề 4.4, Thay đổi thất bại và làm lại) cung cấp phía ổn định đó. Một đội triển khai thường xuyên hơn trong khi tỷ lệ thất bại và làm lại của nó phẳng hoặc giảm là đang cải thiện. Một đội có tần suất tăng trong khi hoàn tác và hotfix tăng theo là đang chuyển chi phí sang nơi khác.

Hỗ trợ thay đổi nằm giữa hai bên. Chủ đề 4.3 (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi) đo phía kiểm soát: phê duyệt mất bao lâu, bao nhiêu thay đổi được phê duyệt trước như chuẩn, và bao nhiêu phê duyệt được tự động hóa. Thời gian chờ phê duyệt là cái giá của một kiểm soát, và tỷ lệ thay đổi thất bại từ chủ đề 4.4 là bằng chứng liệu kiểm soát đó có hiệu quả không. Đọc cùng nhau, chúng cho thấy một bước phê duyệt nặng đang mua sự an toàn hay chỉ thêm sự chậm trễ, và liệu phê duyệt nhẹ hơn, tự động hóa có giữ thất bại ổn định không.

Các chủ đề học hỏi bảo vệ những chủ đề khác. Quản lý vấn đề trong chủ đề 4.1 (xem chủ đề 4.1, Chỉ số quản lý vấn đề) đo tái diễn và thời gian đến bản sửa vĩnh viễn, là phép thử dài hạn liệu việc xử lý sự cố từ Phần 3 đang gỡ bỏ nguyên nhân hay chỉ khôi phục dịch vụ. Chủ đề 4.2 (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi) kiểm tra rằng các buổi rà soát thực sự diễn ra và các hành động của chúng được đóng, vì một buổi rà soát hoàn tất mà không có theo đuổi đến cùng không thay đổi gì. Đếm các buổi rà soát hay vấn đề đã đóng thì dễ bị lợi dụng, nên các số đếm này nên được đọc cạnh sự tái diễn của cùng các nguyên nhân, cái khó giả mạo hơn.

Cuối cùng, chủ đề 4.6 (xem chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết) giải thích vì sao các thước đo khác trôi. Lỗi đã biết không được giải quyết và nợ tích lũy làm tăng khả năng thất bại và chi phí của mọi thay đổi sau. Đọc tồn đọng lỗi đã biết bên cạnh tỷ lệ thay đổi thất bại cho thấy khi nào việc hoãn các bản sửa đã bắt đầu làm chậm phân phối.

Các phần sau xây dựng trên những thước đo này. Mục tiêu mức dịch vụ và ngân sách lỗi ở Phần 5 cho một giới hạn độ tin cậy để đánh giá nhịp độ thay đổi, và Phần 11 cho thấy cách giới thiệu các chỉ số này mà không gieo sợ hãi.
