# Giới thiệu Phần 8: Chỉ số bảo mật, rủi ro, tuân thủ và nhà cung cấp

**Lòng tin vào một dịch vụ dựa trên cách nó xử lý các mối đe dọa, rủi ro, nghĩa vụ, và các bên thứ ba đứng sau nó, và bằng chứng tốt nhất của lòng tin đó do chính công việc tạo ra và được chia sẻ cởi mở.**

Một dịch vụ có thể nhanh, rẻ và được yêu thích mà vẫn làm những người phụ thuộc vào nó thất vọng, vì một điểm yếu chưa được vá, một rủi ro chưa được xem xét, một nghĩa vụ không ai theo dõi, hoặc một nhà cung cấp ngừng giao hàng. Các thước đo trong phần này mô tả các điều kiện bảo vệ chống lại những thất bại đó: các điểm yếu còn mở bao lâu, các kiểm soát có hoạt động không, bằng chứng có tồn tại khi ai đó đòi không, và bạn có biết mình phụ thuộc vào gì và có thể rời đi không.

Thực hành linh hoạt và ITIL đều coi những mối quan tâm này nghiêm túc, từ những góc khác nhau. ITIL đóng góp quản lý an toàn thông tin, quản lý rủi ro, quản lý nhà cung cấp và quản trị, với sự nhấn mạnh vào chính sách, quyền sở hữu và bản ghi. Linh hoạt và DevOps đóng góp ý tưởng rằng an ninh và kiểm soát thuộc về bên trong phân phối liên tục: thay đổi nhỏ, phản hồi nhanh, kiểm tra tự động, và trách nhiệm chung giữa phát triển, an ninh, vận hành và đảm bảo. Các tổ chức hiệu quả nhất kết hợp cả hai, để các kiểm soát được xây vào đường ống, bằng chứng là sản phẩm phụ của phân phối, và kiểm toán viên, cơ quan quản lý và nhà cung cấp là đối tác trong một cuộc trò chuyện liên tục thay vì đối thủ thỉnh thoảng.

Những thước đo này cũng mang rủi ro méo mó cao nhất. Mục tiêu cho các phát hiện, rủi ro đỏ hay vi phạm dạy mọi người nhìn đi chỗ khác, đánh giá lại, hoặc giấu. Các thước đo chạm vào hành vi con người, như báo cáo hoạt động đáng ngờ, có thể trượt thành giám sát hay đổ lỗi. Mỗi chỉ số trong phần này vì vậy đi kèm cách nó bị lợi dụng và một rào chắn, và phần này coi báo cáo an toàn và học hỏi không đổ lỗi là các kiểm soát tự thân. Không thước đo nào xếp hạng cá nhân. Chúng mô tả hệ thống, dịch vụ và quan hệ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Bốn lăng kính quan trọng ở đây vì các hệ thống AI thêm rủi ro mới và nghĩa vụ mới. Bằng chứng an ninh và tuân thủ ngày càng do các đường ống tạo ra, nên tự động hóa phải được kiểm thử, không chỉ tin. Nhà cung cấp có thể nhúng AI, nên hãy hỏi cái gì được bật. Phân tích báo cáo mức phơi bày và hiệu quả kiểm soát kèm cỡ mẫu. Cuốn sách này không đưa ra tư vấn pháp lý, nên hãy kiểm tra các nghĩa vụ với cố vấn pháp lý của chính bạn.

## Các chủ đề trong phần này

- **8.1 Chỉ số sự cố bảo mật và lỗ hổng**: cửa sổ phơi bày, tuân thủ vá, độ phủ quét, thời gian đến kiềm chế, ngoại lệ, và văn hóa báo cáo giữ cho tín hiệu chảy.
- **8.2 Chỉ số rủi ro và kiểm soát**: một sổ đăng ký rủi ro ngắn, có người sở hữu, kiểm thử kiểm soát, chỉ báo rủi ro then chốt, và phê duyệt thay đổi dựa trên rủi ro.
- **8.3 Chỉ số tuân thủ và kiểm toán**: độ phủ nghĩa vụ, tự động hóa bằng chứng, đóng phát hiện và lặp lại, và làm việc với kiểm toán viên.
- **8.4 Chỉ số nhà cung cấp và hợp đồng**: hiệu suất nhà cung cấp so với trải nghiệm, sự tập trung, thẩm định, rà soát chung, và kế hoạch thoát đã kiểm thử.
- **8.5 Báo cáo theo quy định và cho cơ quan nhà nước**: nghĩa vụ báo cáo như đầu vào thiết kế, báo cáo truy vết được, định nghĩa được đối chiếu, và thông tin công khai dùng được.

## Mối liên hệ giữa các chủ đề

Các thước đo an ninh (xem chủ đề 8.1, Chỉ số sự cố bảo mật và lỗ hổng) mô tả các mối đe dọa và điểm yếu một cách cụ thể, và chúng cung cấp một số chỉ báo rủi ro then chốt mạnh nhất cho sổ đăng ký rủi ro. Các thước đo rủi ro và kiểm soát (xem chủ đề 8.2, Chỉ số rủi ro và kiểm soát) đặt các chỉ báo đó vào bối cảnh, quyết định kiểm soát nào quan trọng, và kiểm thử rằng chúng hoạt động. Các thước đo tuân thủ và kiểm toán (xem chủ đề 8.3, Chỉ số tuân thủ và kiểm toán) biến chính các kiểm soát và kiểm thử đó thành bằng chứng cho người ngoài, và cho thấy bao nhiêu bằng chứng đó do công việc tự tạo ra.

Các thước đo nhà cung cấp (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng) mở rộng từng cái trong số này qua ranh giới của tổ chức. Các lỗ hổng, rủi ro và tình trạng tuân thủ của một nhà cung cấp trở thành của bạn, và hợp đồng là một trong các kiểm soát. Chủ đề báo cáo (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước) khép phần bằng cách hỏi cái gì phải được nói với ai, và nói chính xác thế nào mà không để cái nhìn báo cáo làm méo công việc nó mô tả.

Vài cặp rào chắn theo sau. Một cửa sổ phơi bày nên được đọc cùng độ phủ quét, để một con số sạch không chỉ là một lần quét hẹp. Một tỷ lệ hiệu quả kiểm soát nên được đọc cùng việc theo đuổi các thất bại, vì một tỷ lệ hoàn hảo có thể đến từ kiểm thử yếu. Một số đếm phát hiện kiểm toán nên được đọc cùng tỷ lệ lặp lại và xác minh việc đóng. Một mức dịch vụ của nhà cung cấp nên được đọc cùng trải nghiệm người dùng (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm). Một con số theo luật nên được đọc cùng các thước đo đồng hành và một phép đối chiếu với định nghĩa nội bộ.

Phần này dựa vào các phần trước. Bản ghi tài sản, cấu hình và chi phí (xem chủ đề 7.1, Chỉ số quản lý tài sản CNTT, và chủ đề 7.4, Chỉ số chất lượng cấu hình và CMDB) là thứ làm cho việc quét, vẽ bản đồ phụ thuộc và phân tích nhà cung cấp khả thi. Các thước đo phân tích sau sự cố và thay đổi của Phần 4 cung cấp các vòng học giữ cho công việc này trung thực. Phần 9 quay sang những con người đứng sau tất cả: sức khỏe của họ, sự cộng tác của họ, và những thói quen cải tiến làm cả hệ thống tốt hơn theo thời gian.
