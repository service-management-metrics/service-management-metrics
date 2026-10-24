# Giới thiệu Phần 6: Chỉ số khách hàng và trải nghiệm

**Các chỉ số khách hàng và trải nghiệm hỏi liệu những người dùng một dịch vụ có tốt hơn không, là câu hỏi mà các thước đo vận hành và phân phối chỉ trả lời gián tiếp.**

Một đội có thể đóng mọi sự cố trong mục tiêu, phát hành mọi thay đổi đúng lịch, mà vẫn để người dùng bực bội. Các con số vận hành mô tả điều tổ chức dịch vụ đã làm. Các con số trải nghiệm mô tả điều người dùng đã cảm nhận và đạt được. Cả hai đều cần, vì một bảng điều khiển xanh và một khách hàng không hài lòng có thể tồn tại cạnh nhau, và chỉ cái thứ hai quyết định dịch vụ có được coi trọng không.

Thực hành linh hoạt và ITIL gặp nhau một cách tự nhiên ở đây. Thực hành linh hoạt coi phần mềm chạy được và sự hợp tác với khách hàng là thước đo của tiến bộ, và nó dùng phản hồi thường xuyên để lái. ITIL 4 mô tả giá trị là đồng kiến tạo với người tiêu dùng chứ không phải giao cho họ, nên trải nghiệm và kết quả của người tiêu dùng là một phần của dịch vụ, không phải một báo cáo viết sau đó. Đo trải nghiệm vì vậy nghĩa là thu thập phản hồi đó có chủ đích, đọc nó một cách trung thực, và hành động theo nó đủ nhanh để nó có ý nghĩa.

Dữ liệu trải nghiệm cũng dễ bị đọc sai. Điểm khảo sát phụ thuộc vào ai trả lời, họ được hỏi khi nào, và câu hỏi được diễn đạt ra sao. Mẫu nhỏ dao động mạnh, và một điểm số tăng có thể chỉ phản ánh sự thay đổi về người trả lời. Hãy đọc mọi thước đo trong phần này như bằng chứng về một đội, một dịch vụ hoặc một hành trình, không bao giờ như một bảng xếp hạng cá nhân, và ghép nó với một rào chắn để nó không thể được cải thiện bằng cách đổi khảo sát thay vì đổi dịch vụ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Bốn lăng kính quan trọng theo một cách riêng ở đây. Sự tham gia liên tục của các bên liên quan là nguồn của bằng chứng trải nghiệm. Các liên hệ do AI xử lý nên được báo cáo riêng, với một người đọc một mẫu bình luận, vì mô hình có thể đọc sai giọng điệu. Khảo sát tự động cần một kiểm tra về ai trả lời. Phân tích cho thấy điểm số cùng số lượng phản hồi, và các giới hạn quy gán được nêu rõ.

## Các chủ đề trong phần này

- **6.1 Chỉ số hài lòng của khách hàng**: sự hài lòng của khách hàng (CSAT), điểm giới thiệu ròng (NPS), điểm công sức của khách hàng (CES), thiết kế khảo sát, thiên lệch phản hồi và cỡ mẫu.
- **6.2 Thỏa thuận mức trải nghiệm**: đo trải nghiệm thay vì chỉ các mục tiêu vận hành, dùng các thước đo cảm xúc, công sức và hành trình.
- **6.3 Chỉ số áp dụng dịch vụ và danh mục**: việc dùng mục danh mục, áp dụng và bỏ dở, cơ cấu yêu cầu, và coi danh mục là một tồn đọng sản phẩm.
- **6.4 Trải nghiệm người dùng và nhân viên**: trải nghiệm nhân viên số, ma sát, thời gian mất vì các vấn đề CNTT, và kết quả của khách hàng nội bộ.
- **6.5 Hiện thực hóa giá trị và kết quả kinh doanh**: gắn công việc dịch vụ với kết quả kinh doanh, theo dõi lợi ích, và các giới hạn của quy gán.

## Mối liên hệ giữa các chủ đề

Chủ đề 6.1 (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng) cung cấp các công cụ cơ bản: các thước đo khảo sát và kỷ luật thu thập chúng. Nó cũng nêu các giới hạn của những công cụ đó, gồm thiên lệch phản hồi và cỡ mẫu, áp dụng cho mọi chủ đề khác trong phần. Hãy đọc nó trước, vì các chủ đề sau dùng lại các thước đo của nó và thừa hưởng các lưu ý của nó.

Chủ đề 6.2 (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm) lấy những công cụ đó và dùng chúng để bổ sung các mục tiêu vận hành. Một dịch vụ có thể đạt mục tiêu thời gian phản hồi mà vẫn tạo ra trải nghiệm kém, nên một thỏa thuận mức trải nghiệm đứng cạnh thỏa thuận mức dịch vụ thông thường và không thay thế nó. Việc ghép cặp hoạt động theo cả hai hướng. Dữ liệu vận hành giải thích vì sao một điểm trải nghiệm dịch chuyển, và dữ liệu trải nghiệm cho thấy một mục tiêu vận hành có nhắm đúng thứ không.

Các chủ đề 6.3 và 6.4 nhìn vào hành vi và ma sát thay vì ý kiến. Áp dụng và bỏ dở trong chủ đề 6.3 (xem chủ đề 6.3, Chỉ số áp dụng dịch vụ và danh mục) cho thấy mọi người thực sự làm gì, kiểm tra điều họ nói trong khảo sát. Ma sát và thời gian mất trong chủ đề 6.4 (xem chủ đề 6.4, Trải nghiệm người dùng và nhân viên) cho thấy cái giá của dịch vụ kém đối với khách hàng nội bộ. Các thước đo hành vi bảo vệ thước đo khảo sát khỏi những câu trả lời lịch sự hoặc không đại diện, và khảo sát giải thích hành vi mà chỉ dữ liệu sử dụng không giải thích được.

Chủ đề 6.5 (xem chủ đề 6.5, Hiện thực hóa giá trị và kết quả kinh doanh) khép phần bằng cách hỏi liệu bất kỳ điều nào trong số này có đổi một kết quả mà doanh nghiệp quan tâm không. Đây là chủ đề thận trọng nhất, vì quy gán khó: nhiều thứ làm dịch chuyển một kết quả kinh doanh, và một đội dịch vụ chỉ nên tuyên bố những gì bằng chứng của nó ủng hộ. Nó bảo vệ phần còn lại của phần khỏi việc đo sự hài lòng vì chính nó.

Vài cặp rào chắn theo sau từ điều này. Một điểm hài lòng nên được đọc cùng tỷ lệ phản hồi và cỡ mẫu của nó. Một thước đo công sức hay cảm xúc nên được đọc cùng dữ liệu vận hành đứng sau nó. Một con số áp dụng nên được đọc cùng bỏ dở, để một mục danh mục phổ biến mà mọi người bỏ cuộc không bị tính là thành công. Các thước đo giải quyết nhanh từ các phần trước nên được đọc cùng sự hài lòng, để tốc độ không bị mua bằng kết quả kém (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy, về các đồng hồ mà những thước đo tốc độ đó dùng).

Các phần sau tiếp tục cùng sợi chỉ. Các thước đo tài chính và mức dịch vụ trong Phần 7 và 8 mô tả chi phí và cam kết, và cái nhìn trải nghiệm trong phần này là kiểm tra rằng chi phí và cam kết hướng vào thứ mà người dùng coi trọng.
