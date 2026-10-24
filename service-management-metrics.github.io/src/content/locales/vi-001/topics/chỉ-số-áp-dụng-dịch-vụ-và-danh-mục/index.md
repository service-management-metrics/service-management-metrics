# Chỉ số áp dụng dịch vụ và danh mục

**Một dịch vụ mà không ai chọn, tìm thấy hay hoàn tất một yêu cầu cho thì chưa mang lại giá trị, nên hãy đo cách mọi người khám phá và dùng những gì bạn cung cấp, và giữ danh mục trung thực như một tồn đọng.**

## Tổng quan và động lực

Các đội đầu tư vào dịch vụ rồi phát hiện mọi người không dùng chúng. Cổng tự phục vụ mới bị bỏ qua để dùng email. Một mục danh mục được thiết kế cẩn thận cho quyền truy cập phần mềm nhận hai yêu cầu mỗi năm trong khi một trăm yêu cầu mỗi tháng đến qua trò chuyện. Một dịch vụ giám sát ra mắt và một nửa số đội mà nó được xây cho không bao giờ kết nối với nó. Áp dụng là nửa còn thiếu của phân phối: một dịch vụ chỉ có giá trị khi người dùng dự kiến của nó bắt đầu, tiếp tục và hoàn tất việc dùng nó.

**Danh mục dịch vụ** (ITIL viết riêng là "service catalogue") là danh sách các dịch vụ và hạng mục có thể yêu cầu mà một tổ chức cung cấp, được mô tả bằng các thuật ngữ người dùng hiểu được. Một [danh mục dịch vụ](https://en.wikipedia.org/wiki/Service_catalog) thường có một cái nhìn hướng khách hàng, liệt kê những gì người dùng có thể yêu cầu và cách thức, và một cái nhìn kỹ thuật, ghi lại cách mỗi dịch vụ được xây và hỗ trợ. Các đội linh hoạt sẽ nhận ra hình dạng: một danh mục là một loại [tồn đọng sản phẩm](https://en.wikipedia.org/wiki/Product_backlog) theo chiều ngược. Một tồn đọng liệt kê những gì bạn định xây. Một danh mục liệt kê những gì bạn đã cung cấp, và cả hai cần cùng sự chăm sóc: sắp xếp, tỉa bớt, từ ngữ rõ ràng, và một dòng phản hồi đều đặn từ người dùng (xem chủ đề 2.6, Chỉ số tồn đọng và tinh chỉnh).

**Áp dụng** là mức độ người dùng dự kiến tiếp nhận và tiếp tục dùng một dịch vụ. Việc nghiên cứu cách các thực hành mới lan truyền có lịch sử dài; lý thuyết [khuếch tán đổi mới](https://en.wikipedia.org/wiki/Diffusion_of_innovations) mô tả áp dụng là một quá trình theo thời gian, với những người áp dụng sớm, số đông và những người đến sau. Với một dịch vụ nội bộ, bài học thực tế là áp dụng hiếm khi xảy ra vì một thông báo. Nó xảy ra khi dịch vụ dễ tìm, dễ dùng, và rõ ràng tốt hơn cách lách.

Các thước đo áp dụng rất dễ bị biến thành mục tiêu. Bắt buộc một kênh làm một con số sử dụng trông đẹp trong khi người dùng bực bội và dựng cách lách. Đẩy mọi yêu cầu vào một mục danh mục làm độ phủ danh mục tăng trong khi tỷ lệ hoàn tất giảm. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng, nên mỗi thước đo ở đây được ghép với một kiểm tra rằng giá trị thật, không chỉ là việc dùng, đang tăng (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Chủ đề này bao quát bốn điều: mọi người có dùng một dịch vụ không (áp dụng), họ có tìm và hoàn tất điều họ đến để làm không (danh mục và dòng yêu cầu), danh mục có hiện hành và trung thực không (vệ sinh), và việc sử dụng có tập trung vào vài hạng mục không (hình dạng). Nó nối với thực hiện yêu cầu (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ) và tự phục vụ (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa), bao quát điều xảy ra sau khi yêu cầu được đưa ra.

## Nguyên tắc chính

- **Áp dụng là một kết quả, nên hãy hỏi người dùng đang cố làm gì.** Đếm các mục tiêu đã hoàn tất, không phải lượt xem trang.
- **Đo phễu, không chỉ tổng.** Nơi mọi người bỏ cuộc cho bạn biết cần sửa gì.
- **So sánh với phương án thay thế.** Một dịch vụ cạnh tranh với email, trò chuyện, một cuộc gọi và một cách lách.
- **Giữ danh mục nhỏ và hiện hành nhất có thể.** Các hạng mục cũ dạy người dùng ngừng tìm.
- **Phân đoạn trước khi kết luận.** Giá trị trung bình qua mọi người dùng giấu các nhóm mà dịch vụ không hiệu quả.
- **Không bao giờ ép dùng để nâng một con số.** Bắt buộc tạo ra con số, không phải áp dụng.
- **Coi sử dụng thấp là một câu hỏi cho người sở hữu và người dùng.** Nó có thể nghĩa là dịch vụ không cần thiết.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ áp dụng | Tỷ lệ người dùng đủ điều kiện đã dùng một dịch vụ ít nhất một lần trong kỳ | số người dùng đủ điều kiện riêng biệt có ít nhất một lần dùng hoàn tất / số người dùng đủ điều kiện | phần trăm | Nhật ký sử dụng dịch vụ ghép với thư mục người dùng | Quản lý danh mục dịch vụ; quản lý mức dịch vụ | Áp dụng tính năng; rà soát kết quả sản phẩm | Hằng tháng |
| Tỷ lệ sử dụng hoạt động | Tỷ lệ người áp dụng vẫn dùng dịch vụ theo thời gian | số người dùng hoạt động trong kỳ cũng đã dùng dịch vụ trong kỳ trước / số người dùng hoạt động trong kỳ trước | phần trăm | Nhật ký sử dụng; bảng nhóm | Cải tiến liên tục | Giữ chân trong phân tích sản phẩm | Hằng tháng |
| Độ phủ danh mục | Tỷ lệ yêu cầu đến qua danh mục thay vì các kênh tùy tiện | số yêu cầu tạo qua danh mục / tất cả yêu cầu, từ mọi kênh | phần trăm | Công cụ quản lý yêu cầu; thẻ hộp thư và trò chuyện | Quản lý yêu cầu dịch vụ; quản lý danh mục dịch vụ | Hạng mục tồn đọng mang định nghĩa bằng văn bản | Hằng tháng |
| Tỷ lệ bỏ dở yêu cầu | Tỷ lệ yêu cầu đã bắt đầu mà người dùng không nộp | số yêu cầu đã bắt đầu nhưng không nộp trong 24 giờ / số yêu cầu đã bắt đầu | phần trăm | Phân tích cổng | Quản lý yêu cầu dịch vụ | Bỏ dở tác vụ trong kiểm thử tính dùng được | Hằng tháng |
| Tỷ lệ tìm kiếm thành công | Tỷ lệ tìm kiếm danh mục kết thúc bằng một yêu cầu hoặc một câu trả lời đã xem | số tìm kiếm tiếp theo là một yêu cầu hoặc lượt xem tri thức trong phiên / số tìm kiếm | phần trăm | Nhật ký tìm kiếm cổng | Quản lý tri thức; quản lý danh mục dịch vụ | Khả năng tìm thấy trong nghiên cứu người dùng | Hằng tháng |
| Tỷ lệ hạng mục cũ | Tỷ lệ hạng mục danh mục quá ngày rà soát hoặc không có lượt dùng trong một khoảng đã đặt | số hạng mục quá hạn rà soát hoặc có không yêu cầu nào trong 12 tháng / số hạng mục trong danh mục | phần trăm | Sổ đăng ký danh mục | Quản lý danh mục dịch vụ | Tuổi tồn đọng và tỉa bớt | Hằng quý |
| Mức tập trung yêu cầu | Tỷ lệ yêu cầu do các hạng mục được yêu cầu nhiều nhất chiếm | số yêu cầu cho năm hạng mục hàng đầu / tất cả yêu cầu danh mục | phần trăm | Công cụ quản lý yêu cầu | Quản lý yêu cầu dịch vụ | Pareto của công việc theo loại | Hằng quý |

Hãy nêu cơ sở người dùng cho mỗi thước đo. "Người dùng đủ điều kiện" phải được định nghĩa trước khi đo, ví dụ nhân viên ở các vai trò có thể dùng một dịch vụ, và danh sách được ghi vào sổ đăng ký chỉ số. Chỉ tính một lần dùng khi nó kết thúc bằng một kết quả hoàn tất, như một quyền truy cập được giao, và không phải khi một trang tải. Hãy loại các tài khoản thử và lưu lượng tự động.

## Khuyến nghị

### Biết dịch vụ và người dùng của bạn

**1. Định nghĩa đối tượng dự kiến cho mỗi dịch vụ.** Trước khi đo áp dụng, hãy viết ra dịch vụ dành cho ai, và vì sao họ sẽ dùng nó thay vì phương án thay thế. Một dịch vụ phân tích mới xây cho nhân viên tài chính không phải là "áp dụng thấp" nếu chỉ nhân viên tài chính được định dùng nó. Không có đối tượng xác định, tỷ lệ áp dụng là một con số về không ai.

**2. Ghi lại phương án thay thế.** Với mỗi dịch vụ chính, hãy liệt kê điều mọi người làm hiện nay khi họ không dùng nó: hỏi đồng nghiệp, gửi email, mua một công cụ, chạy một bảng tính. Coi phương án thay thế là một đối thủ theo nghĩa quan trọng: đó là nơi người dùng của bạn đến khi dịch vụ của bạn khó hơn. Hãy so sánh công sức của cả hai đường trong thiết kế và rà soát.

**3. Mô tả các hạng mục bằng ngôn ngữ người dùng.** Những tiêu đề như "Quyền truy cập phần mềm, tiêu chuẩn" và "Thay máy tính xách tay, bị hỏng" dễ tìm hơn tên nội bộ. Hãy kiểm thử tiêu đề bằng cách nhờ vài người dùng tìm một hạng mục từ một kịch bản ngắn. Vấn đề từ ngữ hiện ra nhanh trong nhật ký tìm kiếm.

**4. Giữ một người sở hữu cho mỗi hạng mục.** Mỗi hạng mục danh mục có một người sở hữu có tên, một ngày rà soát, một mô tả đối tượng và khối lượng kỳ vọng. Các hạng mục không có người sở hữu trôi đi. Nếu không ai nói được ai dùng một hạng mục và vì sao, nó là ứng viên để gỡ.

### Đo hành trình

**5. Đo đạc phễu.** Với mỗi dịch vụ quan trọng, hãy ghi lại các bước từ khám phá đến kết quả hoàn tất: tìm hạng mục, bắt đầu yêu cầu, điền biểu mẫu, nộp, nhận kết quả. Một cái nhìn [phễu chuyển đổi](https://en.wikipedia.org/wiki/Conversion_funnel) cho thấy người dùng rời đi ở đâu. Hãy sửa chỗ rơi lớn nhất trước. Kiểm tra rằng các bản sửa làm biểu mẫu ngắn hơn hoặc rõ hơn, không chỉ làm dữ liệu đẹp hơn.

**6. Dùng nhóm để thấy việc giữ chân.** Một [phân tích nhóm (cohort)](https://en.wikipedia.org/wiki/Cohort_analysis) gom người dùng theo lúc họ lần đầu dùng dịch vụ và theo dõi từng nhóm. Nó tách một dịch vụ giữ được người dùng khỏi một dịch vụ thu hút họ một lần rồi mất họ. Hãy dùng nó cho các dịch vụ nên được dùng lặp lại, như cổng bàn dịch vụ hay một đường ống triển khai.

**7. Đọc nhật ký tìm kiếm để biết mọi người không tìm thấy gì.** Các tìm kiếm không có kết quả, hoặc các tìm kiếm lặp lại với từ khác, chỉ vào khoảng trống trong cách đặt tên, trong nội dung, hoặc trong chính danh mục. Hãy rà soát các tìm kiếm không kết quả hàng đầu mỗi tháng và quyết định với mỗi cái: đổi tên một hạng mục, thêm một từ đồng nghĩa, viết một bài viết, hoặc tạo hạng mục mới. Các công cụ [phân tích web](https://en.wikipedia.org/wiki/Web_analytics) có thể cung cấp điều này, và nhật ký riêng của cổng cũng vậy.

**8. Phân đoạn theo nhóm.** Hãy chia nhỏ áp dụng và bỏ dở theo vai trò, địa điểm, thiết bị và nhu cầu tiếp cận nơi bạn có quyền truy cập hợp pháp và đạo đức vào thông tin đó. Tổng thể có thể trông khỏe trong khi nhân viên ca đêm hay người dùng thiết bị di động thất bại gấp đôi. Hãy chặn các nhóm nhỏ để bảo vệ con người, và kết hợp với các thước đo trải nghiệm trong các chủ đề trước (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm).

### Giữ danh mục trung thực

**9. Tỉa theo lịch.** Hãy rà soát danh mục mỗi quý. Gỡ hoặc gộp các hạng mục không có lượt dùng, cho nghỉ hưu các hạng mục của dịch vụ đã ngừng, và sửa các hạng mục có tỷ lệ bỏ dở cao. Một danh mục nhỏ hơn, chính xác phục vụ người dùng tốt hơn một danh mục đầy đủ, cũ. Hãy coi việc gỡ là bình thường và ghi lại lý do.

**10. Nhìn vào hình dạng của nhu cầu.** Trong hầu hết danh mục, vài hạng mục chiếm phần lớn yêu cầu, một mẫu hình thường được mô tả qua [nguyên lý Pareto](https://en.wikipedia.org/wiki/Pareto_principle). Hãy dùng nó để dồn công sức thiết kế vào các hạng mục thường xuyên và tự động hóa những cái thường lệ (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa). Đừng bỏ cái đuôi dài mà không nhìn, vì các hạng mục hiếm có thể rất quan trọng với những người cần chúng.

**11. Đừng ép áp dụng.** Nếu một dịch vụ cần thiết, người dùng sẽ đến một khi nó dễ. Nơi tổ chức yêu cầu một kênh vì lý do kiểm soát hay kiểm toán, hãy nói rõ, và cởi mở rằng con số phản ánh một quy tắc, không phải sở thích. Tránh [mẫu thiết kế đen (dark pattern)](https://en.wikipedia.org/wiki/Dark_pattern), như giấu số điện thoại hay làm phương án thay thế khó hơn, vì chúng nâng việc dùng và hạ lòng tin.

**12. Khép vòng với người sở hữu và người dùng.** Hãy chia sẻ phễu, các khoảng trống tìm kiếm và danh sách cũ với người sở hữu hạng mục mỗi tháng. Hỏi người dùng, trong khảo sát và trong các buổi rà soát, vì sao họ dùng hay tránh một dịch vụ (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng). Ghi lại điều bạn đã đổi vào sổ đăng ký và nói với người dùng rằng nó đã xảy ra.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ áp dụng | Bắt buộc dùng; tính lượt đăng nhập hay lượt xem trang là sử dụng; thu hẹp "người dùng đủ điều kiện" xuống những người đã dùng | Định nghĩa kết quả hoàn tất; so sánh với đánh giá hài lòng và công sức; công bố quy tắc người dùng đủ điều kiện |
| Tỷ lệ sử dụng hoạt động | Tự động ghi danh người dùng để họ có vẻ hoạt động; gửi thông báo được tính là hoạt động | Chỉ đếm các hành động hoàn tất do người dùng khởi xướng; phỏng vấn mẫu những người dùng đã bỏ |
| Độ phủ danh mục | Ép mọi yêu cầu vào một hạng mục danh mục chung; đóng yêu cầu email bằng "vui lòng dùng cổng" | Tỷ lệ bỏ dở yêu cầu và sự hài lòng; đếm bao nhiêu yêu cầu được nêu lại qua kênh khác |
| Tỷ lệ bỏ dở yêu cầu | Gỡ các trường biểu mẫu cần thiết, chuyển công việc sang thực hiện; chỉ đếm yêu cầu bỏ dở sau một cửa sổ dài | Tỷ lệ làm lại và làm rõ ở khâu thực hiện (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ) |
| Tỷ lệ tìm kiếm thành công | Tính bất kỳ cú nhấp nào là thành công; thêm các bài viết không liên quan khớp mọi truy vấn | Kiểm tra kết quả có được dùng không (yêu cầu được đưa ra, bài viết được đánh giá hữu ích); đọc các tìm kiếm không kết quả |
| Tỷ lệ hạng mục cũ | Đánh dấu hạng mục là đã rà soát mà không đọc; đặt lại ngày rà soát hàng loạt | Lấy mẫu các hạng mục đã rà soát xem có chính xác không; cho thấy ngày thay đổi thật cuối |
| Mức tập trung yêu cầu | Chia các hạng mục phổ biến thành nhiều cái; gộp các hạng mục không liên quan để giấu nhu cầu đuôi dài | Phân loại hạng mục cố định kèm nhật ký thay đổi; nhìn vào cái đuôi theo danh mục |

Một kết quả đọc lành mạnh là một danh mục nơi các hạng mục dùng nhiều nhất hoạt động tốt và đang dễ hơn, nơi người dùng chọn dịch vụ vì nó tốt hơn phương án thay thế, và nơi việc cho nghỉ hưu một hạng mục là thường lệ.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Kênh bắt buộc | Khối lượng dự đoán được, dễ kiểm toán | Bực bội, cách lách, con số bị thổi phồng |
| Áp dụng tự nguyện | Tín hiệu trung thực về giá trị | Chậm hơn; một số dịch vụ có thể không bao giờ được áp dụng |
| Danh mục lớn | Đầy đủ, bao quát nhu cầu hiếm | Khó tìm kiếm; trở nên cũ |
| Danh mục nhỏ | Dễ tìm và duy trì | Nhu cầu hiếm rơi ra ngoài; người dùng quay sang email |
| Thước đo phễu | Chỉ đúng nơi người dùng bỏ cuộc | Cần đo đạc; có thể khuyến khích tối ưu biểu mẫu mà hy sinh kết quả |
| Khảo sát hỏi vì sao | Giải thích hành vi | Thiên lệch theo ai trả lời; khó mở rộng |

Câu trả lời dạng văn xuôi là ưu tiên áp dụng tự nguyện được hỗ trợ bởi lợi thế chất lượng rõ ràng, và chỉ dùng bắt buộc nơi kiểm soát hay tuân thủ đòi hỏi, với con số được gắn nhãn tương ứng. Hãy giữ danh mục đủ nhỏ để duy trì, và đặt cái đuôi trong một cơ sở tri thức có thể tìm kiếm, không phải trong một trăm hạng mục dùng nửa vời.

## Câu hỏi để thảo luận với đội nhóm

**1. Mỗi dịch vụ chính của chúng ta dành cho ai, và làm sao chúng ta biết họ đang dùng nó?**
Liệt kê năm dịch vụ đội bạn dành nhiều thời gian nhất và viết đối tượng dự kiến cho mỗi cái. Rồi hỏi áp dụng có thể được đo thế nào cho chúng. Người điều phối nên tìm các dịch vụ mà không ai nêu được đối tượng, vì chúng có khả năng không có kế hoạch áp dụng.

**2. Mọi người làm gì khi họ không dùng dịch vụ của chúng ta, và vì sao?**
Với một dịch vụ áp dụng thấp, hãy phỏng vấn hoặc khảo sát vài người dùng tránh nó. Phương án thay thế thường tiết lộ: nó có thể nhanh hơn, quen thuộc hơn, hay linh hoạt hơn. Quyết định cải thiện dịch vụ, đổi phương án thay thế, hay chấp nhận rằng dịch vụ không cần thiết.

**3. Người dùng bỏ cuộc ở đâu trong hạng mục được yêu cầu nhiều nhất của chúng ta?**
Cho thấy phễu cho hạng mục hàng đầu, từ lần xem đầu đến lúc nộp. Yêu cầu đội đoán chỗ rơi lớn nhất ở đâu, rồi so sánh. Thống nhất một thay đổi để thử, và nói bạn sẽ kiểm tra thế nào rằng nó có giúp mà không chuyển vấn đề sang nơi khác.

**4. Chúng ta sẽ gỡ gì khỏi danh mục nếu dám?**
In danh sách các hạng mục không có yêu cầu trong một năm. Hỏi điều gì sẽ xảy ra nếu mỗi cái biến mất. Cuộc trò chuyện thường thấy rằng một hạng mục tồn tại vì ai đó từng xin nó. Thống nhất một ngày để gỡ hoặc gộp năm cái đầu, và một ghi chú cho người dùng.

**5. Chúng ta đang thúc ép hay buộc người dùng ở đâu, và có đáng cái giá đó không?**
Liệt kê mọi chỗ mà một quy tắc hay thiết kế đẩy người dùng vào một kênh. Hỏi cái nào thực sự cần và cái nào là thói quen. Người điều phối nên khám phá người dùng trải nghiệm từng cái ra sao, và liệu các con số kết quả có nghĩa như lãnh đạo nghĩ không.

**6. Mọi người đang tìm kiếm gì mà chúng ta không có?**
Hãy rà soát các tìm kiếm không kết quả hàng đầu. Với mỗi cái, quyết định thêm một hạng mục, viết một bài viết, hay giải thích rằng dịch vụ không tồn tại. Hỏi ai sở hữu buổi rà soát này và nó sẽ diễn ra thường xuyên đến đâu.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối xây dịch vụ và tính năng cần được áp dụng để có ý nghĩa. Họ nên định nghĩa đối tượng từ đầu, xây thước đo sử dụng vào dịch vụ, và rà soát phễu sau khi ra mắt. Dữ liệu áp dụng là phản hồi về công việc, và nó thuộc về tinh chỉnh và rà soát. Các đội nên tránh tuyên bố một bản phát hành là xong khi nó được phát. Xong nghĩa là người dùng dự kiến đang nhận được lợi ích.

### Đội dịch vụ và vận hành

Các đội vận hành chạy danh mục và thấy các yêu cầu đến qua mọi kênh. Họ nên giữ danh mục hiện hành, gắn thẻ các yêu cầu vượt qua nó, và hỏi vì sao. Họ không nên đóng một yêu cầu bằng cách chuyển hướng, vì điều đó giấu tín hiệu. Khoảng trống tìm kiếm và bỏ dở là nguồn cải tiến cổng tốt nhất của họ.

### Lãnh đạo và quản trị

Lãnh đạo quyết định áp dụng là một cuộc trò chuyện hay một chỉ tiêu. Họ nên hỏi dịch vụ để làm gì, giúp ai, và vì sao mọi người chọn nó. Họ nên tránh đặt mục tiêu áp dụng cho từng đội, ủng hộ việc cho nghỉ hưu các dịch vụ không dùng, và kỳ vọng thấy áp dụng cạnh sự hài lòng và công sức. Nơi một sự bắt buộc là chính đáng, lãnh đạo nên giải thích nó với người dùng.

### Khách hàng và người dùng

Người dùng muốn có điều họ cần với ít công sức. Họ nhận thấy khi một cổng khó tìm kiếm, khi biểu mẫu hỏi những thứ tổ chức đã biết, và khi cách cũ nhanh hơn. Hành vi của họ, và điều họ nói, là tín hiệu áp dụng trung thực nhất. Họ nên được hỏi vì sao họ tránh một dịch vụ, và được nói điều đã đổi do đó.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một cơ quan giao thông quốc gia vận hành một bàn dịch vụ, một cổng tự phục vụ với danh mục khoảng 140 hạng mục, và vài đội sản phẩm. Các con số dưới đây chỉ mang tính minh họa.

Cổng ra mắt một năm trước, và lãnh đạo đặt mục tiêu 80 phần trăm yêu cầu qua nó. Báo cáo hằng tháng cho thấy độ phủ 78 phần trăm, và trưởng quản lý dịch vụ hài lòng cho đến khi bà đọc các bình luận từ khảo sát người dùng. Nhân viên các văn phòng khu vực nói cổng chậm và biểu mẫu dài. Bà nhờ người quản lý danh mục xem phễu và nhật ký tìm kiếm.

Phễu cho "Thiết bị cho nhân viên mới" cho thấy 1.100 lượt bắt đầu mỗi quý và 640 lượt nộp, tỷ lệ bỏ dở 42 phần trăm. Biểu mẫu có 23 trường. Nhật ký tìm kiếm cho thấy từ "laptop" trả về tám hạng mục, và từ "VPN" không trả về gì, dù đó là từ được tìm nhiều nhất. Trong 140 hạng mục danh mục, 38 không có yêu cầu nào trong 12 tháng và 21 quá hạn rà soát. Năm hạng mục hàng đầu chiếm 61 phần trăm yêu cầu, và thêm 15 phần trăm yêu cầu đến qua email và được ghi bằng tay.

Đội thực hiện bốn thay đổi. Họ cắt biểu mẫu nhân viên mới xuống chín trường bằng cách dùng dữ liệu mà hệ thống nhân sự đã có. Họ thêm một bài viết VPN và một hạng mục kèm từ đồng nghĩa. Họ gộp tám hạng mục laptop thành hai. Và họ cho nghỉ hưu 19 hạng mục không dùng kèm một ghi chú cho người sở hữu. Họ cũng đổi cách báo cáo hằng tháng được đọc: độ phủ được cho thấy cùng tỷ lệ bỏ dở và câu hỏi khảo sát "bạn có dễ dàng nhận được điều mình cần không?" Ba tháng sau, tỷ lệ bỏ dở của hạng mục nhân viên mới giảm xuống 24 phần trăm, độ phủ của cổng là 74 phần trăm, và điểm công sức từ các văn phòng khu vực tăng. Giám đốc hỏi vì sao độ phủ giảm. Trưởng quản lý dịch vụ giải thích rằng các yêu cầu email trước đây bị buộc đóng, và con số thấp hơn trung thực hơn và trải nghiệm tốt hơn. Nhật ký quyết định ghi rằng mục tiêu được thay bằng một hướng: giảm bỏ dở và nâng điểm công sức, với độ phủ được rà soát nhưng không đặt mục tiêu.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy coi danh mục là một tồn đọng được tinh chỉnh cùng người dùng, và gỡ các hạng mục không ai dùng. Điều cần lưu ý là một mục tiêu về số hạng mục danh mục thêm bừa bộn.

### AI

Tìm kiếm và trợ lý AI có thể đổi cách mọi người tìm dịch vụ, làm dịch chuyển các con số áp dụng và bỏ dở. Hãy ghép tỷ lệ tìm kiếm thành công với tỷ lệ bỏ dở và với tỷ lệ gợi ý của AI được chấp nhận và hoàn tất. Điều cần lưu ý là một mô hình có thể đề xuất một dịch vụ mà người đó không yêu cầu được, nên hãy kiểm tra quy tắc đủ điều kiện.

### Tự động hóa

Hãy thu thập sự kiện tìm kiếm, xem và yêu cầu tự động, và đánh dấu các hạng mục danh mục cũ cho một quyết định của con người. Đo tự động hóa trong thực hiện theo tỷ lệ thất bại. Điều cần lưu ý là dọn dẹp tự động gỡ hạng mục có thể giấu các dịch vụ mà mọi người ít dùng nhưng cần.

### Phân tích

Hãy cho thấy áp dụng và bỏ dở theo từng hạng mục danh mục kèm số đếm, và mức tập trung của yêu cầu. Quyết định được cung cấp thông tin là thiết kế lại hay cho nghỉ hưu hạng mục nào. Điều cần lưu ý là các hạng mục khối lượng thấp có tỷ lệ nhiễu.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Thường không có danh mục. Một trang đơn giản "cách nhận X" và một kênh chung là đủ. Hãy xem mọi người xin gì và biến năm yêu cầu hàng đầu thành các hướng dẫn ngắn. Đo việc áp dụng công cụ nội bộ bằng cách hỏi người dùng, và bỏ qua các phễu chính thức.

**Doanh nghiệp nhỏ.** Ít người cung cấp CNTT, và yêu cầu đến qua mọi kênh. Một danh mục khiêm tốn từ 10 đến 20 hạng mục bao quát hầu hết nhu cầu. Đừng ép người dùng vào một cổng tốn hơn để duy trì so với các yêu cầu nó xử lý. Hãy rà soát danh sách hai lần một năm.

**Doanh nghiệp lớn.** Quy mô cho bạn một danh mục đủ lớn để cần quản trị: người sở hữu, ngày rà soát và một phân loại. Hãy phân đoạn áp dụng theo đơn vị kinh doanh và vùng, và tránh các sự bắt buộc toàn doanh nghiệp bỏ qua nhu cầu địa phương. Hãy canh các nhà cung cấp có hạng mục danh mục được đếm nhưng không được dùng.

**Chính phủ và khu vực công.** Dịch vụ đến với công chúng cũng như nhân viên, với nghĩa vụ về khả năng tiếp cận, ngôn ngữ và tiếp cận bình đẳng. Hãy đưa các kênh có hỗ trợ (điện thoại, trực tiếp) vào các thước đo để áp dụng số không giấu sự loại trừ. Nơi quy tắc pháp lý hay chính sách yêu cầu một kênh, hãy nêu điều đó trong báo cáo (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí khiêm tốn. Nhật ký sử dụng và dữ liệu yêu cầu thường đã tồn tại. Phân tích phễu và tìm kiếm cần quyền truy cập phân tích cổng, vốn hầu hết nền tảng cung cấp. Chi phí thời gian chính là buổi rà soát danh mục hằng quý và một cái nhìn hằng tháng vào khoảng trống tìm kiếm và điểm rơi, vài giờ mỗi lần. Sửa biểu mẫu và gộp hạng mục tốn thời gian thiết kế và cấu hình.

Lợi tức đến từ các dịch vụ được dùng, các yêu cầu hoàn tất, và ít lãng phí hơn trong thực hiện. Một biểu mẫu ngắn hơn cắt bỏ dở giảm liên hệ lặp lại và xử lý thủ công. Tỉa các hạng mục không dùng giảm bảo trì. Hãy xây hồ sơ từ con số của chính bạn: tỷ lệ bỏ dở, thời gian xử lý thủ công mỗi yêu cầu qua email, và chi phí duy trì một hạng mục không dùng, trước và sau các thay đổi. Tránh các tuyên bố đã công bố về ROI của cổng mà bạn không truy được, vì chúng phụ thuộc vào tổ chức và phương pháp.

## Phản mẫu và cạm bẫy

- **Đếm ra mắt là áp dụng.** Một dịch vụ được áp dụng khi người dùng dự kiến hoàn tất kết quả với nó. Hãy đo việc dùng, không phải thông báo.
- **Bắt buộc một kênh để nâng một con số.** Người dùng sẽ đi vòng. Hãy cải thiện dịch vụ và để con số theo sau.
- **Thêm hạng mục mà không bao giờ gỡ.** Danh mục trở nên không tìm kiếm được. Hãy tỉa mỗi quý.
- **Chỉ nhìn vào tổng.** Hãy phân đoạn theo nhóm và nhìn vào phễu.
- **Đóng yêu cầu qua email bằng một lời chuyển hướng.** Nó giấu nhu cầu và làm người dùng bực. Hãy xử lý yêu cầu và sửa đường đi.
- **Dùng lượt xem trang làm sử dụng.** Hãy đếm các kết quả hoàn tất.
- **Coi sử dụng thấp là thất bại của người dùng.** Hãy hỏi dịch vụ có cần thiết và dễ dùng không.
- **Để người sở hữu hạng mục lơi lỏng.** Hãy giao người sở hữu và ngày rà soát cho mọi hạng mục.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Thiết kế danh mục | Danh sách lớn lên theo yêu cầu | Danh mục tồn tại, từ ngữ không nhất quán | Hạng mục bằng ngôn ngữ người dùng với người sở hữu và ngày rà soát | Tỉa hằng quý; phân loại được quản lý | Danh mục chia sẻ giữa các đội và nhà cung cấp; hạng mục đồng thiết kế với người dùng |
| Đo áp dụng | Giai thoại | Số đếm yêu cầu theo hạng mục | Áp dụng được định nghĩa theo người dùng đủ điều kiện và kết quả hoàn tất | Phễu, nhóm và phân đoạn được rà soát hằng tháng | Áp dụng được liên kết với trải nghiệm và kết quả qua các dịch vụ |
| Cải tiến | Sửa tùy tiện | Sửa sau phàn nàn | Khoảng trống tìm kiếm và điểm rơi được rà soát hằng tháng | Bản sửa được ưu tiên và theo dõi trên tồn đọng | Cải tiến được phối hợp cùng người dùng, với các dịch vụ nghỉ hưu được báo cáo công khai |

## Danh sách kiểm tra

- [ ] Mỗi dịch vụ chính có một đối tượng dự kiến và một đường thay thế được viết ra.
- [ ] Áp dụng được định nghĩa là các kết quả hoàn tất của người dùng đủ điều kiện.
- [ ] Các hạng mục danh mục có người sở hữu, mô tả bằng ngôn ngữ người dùng, và ngày rà soát.
- [ ] Phễu được đo cho các hạng mục được yêu cầu nhiều nhất.
- [ ] Tìm kiếm không kết quả được rà soát hằng tháng.
- [ ] Áp dụng và bỏ dở được phân đoạn theo nhóm, với nhóm nhỏ bị chặn.
- [ ] Yêu cầu đến ngoài danh mục được gắn thẻ và đếm.
- [ ] Danh mục được tỉa mỗi quý, với lý do được ghi lại.
- [ ] Áp dụng được cho thấy cạnh các thước đo hài lòng hoặc công sức.
- [ ] Không mục tiêu áp dụng nào được đặt cho một đội hay một người cá nhân.

## Lời nhắc AI

**Phân tích một phễu yêu cầu.**

```text
For the catalog item [item name] in [type of organization], our portal data for
[period] is: views [number], starts [number], submissions [number], and
fulfilled [number]. The form has [number] fields: [list]. Describe where users
likely struggle, suggest three changes to test, and say how I would check that
each change helped without moving the problem to fulfilment. Do not invent
benchmark values. List your assumptions and what additional data you need.
```

**Rà soát nhật ký tìm kiếm để tìm khoảng trống danh mục.**

```text
Here are the top [number] catalog searches from [period] with result counts:
[paste data]. Group them into themes, flag searches that return nothing or too
many items, and suggest whether each needs a new item, a rename, a synonym, or a
knowledge article. Do not guess at services we may not offer. List your
assumptions and the questions I should ask the item owners.
```

**Lập kế hoạch một buổi rà soát tỉa danh mục.**

```text
I manage a catalog of [number] items. For each of these items I have request
counts for 12 months, review dates, and owners: [paste a summary]. Propose
criteria for removing, merging, or keeping an item, a short note to owners, and a
way to avoid dropping rare but critical items. Include a check that we are not
simply moving requests to email. List your assumptions.
```

**Soạn định nghĩa áp dụng cho một dịch vụ.**

```text
Service: [name]. Intended users: [roles]. Alternative path today: [what they do
now]. Draft a one-page adoption definition covering eligible users, what counts
as a completed use, the data source, how to exclude test and automated traffic,
how the measure could be gamed, and a guardrail. Do not invent targets. List
your assumptions and anything I need to confirm.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số áp dụng hoặc danh mục.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số danh mục mới có vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Áp dụng nghĩa là người dùng dự kiến hoàn tất kết quả với một dịch vụ, nên hãy định nghĩa đối tượng và đếm các lần hoàn tất.
- Đo phễu, khoảng trống tìm kiếm và việc giữ chân người dùng, và phân đoạn theo nhóm.
- So sánh dịch vụ với phương án thay thế mà người dùng có hôm nay.
- Giữ danh mục nhỏ, có người sở hữu, và được tỉa mỗi quý.
- Đừng ép dùng để nâng một con số, và ghép áp dụng với sự hài lòng và công sức.
- Coi sử dụng thấp là câu hỏi về nhu cầu và sự dễ dàng, không phải thất bại của người dùng.

## Tài liệu tham khảo và đọc thêm

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
