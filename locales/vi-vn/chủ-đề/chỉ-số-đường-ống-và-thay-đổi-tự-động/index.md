# Chỉ số đường ống và thay đổi tự động

**Một đường ống phân phối vừa là con đường để thay đổi đến được người dùng vừa là nguồn bằng chứng rằng chúng an toàn, nên hãy đo tốc độ của nó, độ tin cậy của nó, bao nhiêu phần phê duyệt thay đổi nó xử lý, và liệu bằng chứng nó tạo ra có thuyết phục được một kiểm toán viên không, và đọc tất cả những điều này như các thước đo của một hệ thống, không bao giờ của những người dùng nó.**

## Tổng quan và động lực

Một đường ống [tích hợp liên tục](https://en.wikipedia.org/wiki/Continuous_integration) và [phân phối liên tục](https://en.wikipedia.org/wiki/Continuous_delivery) đưa một thay đổi từ công việc của lập trình viên đến một dịch vụ đang chạy qua dựng, kiểm thử, kiểm tra an ninh và triển khai tự động. Khi một đường ống được tin cậy, nó cũng có thể đưa ra những quyết định mà một hội đồng tư vấn thay đổi từng đưa ra cho các thay đổi thường lệ. ITIL gọi thực hành quản lý thay đổi là "hỗ trợ thay đổi", và mục đích của nó là để các thay đổi có lợi xảy ra một cách an toàn và nhanh chóng. Một đường ống chạy các kiểm tra, ghi bằng chứng, và tự động phê duyệt các thay đổi rủi ro thấp là một cách đạt mục đích đó.

Đường ống vì vậy là hai thứ cùng lúc. Nó là một hệ thống sản xuất, với tính sẵn sàng, tốc độ và thất bại riêng, và nó là một kiểm soát, với bằng chứng về điều gì đã được kiểm thử, ai đã rà soát, và điều gì đã được phê duyệt. Cả hai cần được đo. Một đường ống nhanh mà bỏ qua kiểm tra là một rủi ro. Một đường ống chậm, chập chờn đẩy mọi người đến việc lách nó, và các thay đổi bị lách thoát khỏi mọi kiểm soát mà đường ống định cung cấp.

Chủ đề này bổ sung cho các thước đo thay đổi của Phần 4 (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi, và chủ đề 4.4, Thất bại thay đổi và làm lại) và các thước đo phát hành (xem chủ đề 4.5, Chỉ số phát hành và triển khai) bằng cách tập trung vào đường ống như một hệ thống. Nó bổ sung cho các thước đo DORA (xem chủ đề 2.8, Chỉ số DORA) bằng cách nhìn vào điều xảy ra bên trong đường ống. Nó cũng liên quan đến các thước đo tự động hóa chung của chủ đề 10.6 (xem chủ đề 10.6, Chỉ số tự động hóa và điều phối).

Các thuật ngữ dùng ở đây. Một **lần chạy đường ống** là một lần thực thi đường ống cho một thay đổi. Một **giai đoạn** là một bước trong đường ống, như dựng hay kiểm thử. Một **kiểm thử chập chờn** là một kiểm thử đôi khi qua đôi khi thất bại trên cùng một mã. Một **lách** là một thay đổi đến được sản xuất mà không qua đường ống, ví dụ qua một lần triển khai thủ công khẩn cấp. **Chính sách dưới dạng mã** nghĩa là viết các quy tắc, như "không triển khai nếu không có quét an ninh đã qua", thành phần mềm mà đường ống thực thi. **Bằng chứng** là bằng chứng được ghi lại về những gì một thay đổi đã trải qua. Một **thay đổi chuẩn** trong ITIL là một loại thay đổi rủi ro thấp, được hiểu rõ, được phê duyệt trước.

## Nguyên tắc chính

- **Đường ống là một dịch vụ.** Hãy đo độ tin cậy, tốc độ và thất bại của nó như bạn làm cho bất kỳ hệ thống sản xuất nào, và giao cho nó một người sở hữu.
- **Đo việc lách.** Số thay đổi tránh đường ống cho thấy đường ống có thể được tin cậy đến đâu.
- **Tự động hóa phê duyệt theo rủi ro, kèm bằng chứng.** Phê duyệt trước những gì được hiểu rõ, và giữ rà soát của con người cho những gì không.
- **Bằng chứng là một sản phẩm.** Điều đường ống ghi lại nên trả lời câu hỏi của kiểm toán viên mà không phải chạy đua.
- **Nhanh và an toàn được đo cùng nhau.** Các thước đo tốc độ được ghép với thất bại và làm lại.
- **Mô tả hệ thống, không phải con người.** Dữ liệu đường ống về ai đẩy một thay đổi không phải là bảng xếp hạng hiệu suất.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ thành công của đường ống | Tỷ lệ lần chạy đường ống hoàn tất mà không có thất bại do đường ống hoặc môi trường của nó | số lần chạy qua hoặc chỉ thất bại vì một lỗi mã thật / số lần chạy bắt đầu; các lần chạy bị người dùng hủy được loại và báo cáo | phần trăm | Nhật ký nền tảng đường ống | Quản lý phát hành; hỗ trợ thay đổi | Sức khỏe tích hợp liên tục | Hằng tuần |
| Thời lượng đường ống | Thời gian để một thay đổi đi qua đường ống | trung vị và bách phân vị thứ 85 của (thời điểm giai đoạn cuối kết thúc trừ thời điểm lần chạy bắt đầu) cho các lần chạy đến được triển khai | phút | Nhật ký nền tảng đường ống | Quản lý phát hành | Vòng phản hồi ngắn | Hằng tuần |
| Tỷ lệ kiểm thử chập chờn | Tỷ lệ thất bại kiểm thử mà qua khi chạy lại mà không đổi mã | số thất bại qua khi chạy lại / số thất bại kiểm thử | phần trăm | Kết quả kiểm thử và nhật ký chạy lại | Quản lý phát hành | Định nghĩa hoàn thành; thực hành kiểm thử | Hằng tháng |
| Tỷ lệ phê duyệt tự động | Tỷ lệ thay đổi được phê duyệt bởi chính sách đường ống mà không có bước phê duyệt của con người | số thay đổi chỉ được phê duyệt bởi chính sách / số thay đổi được triển khai | phần trăm | Bản ghi đường ống và thay đổi | Hỗ trợ thay đổi | Phát triển trên nhánh chính với kiểm tra tự động | Hằng tháng |
| Tỷ lệ lách | Tỷ lệ thay đổi sản xuất không đi qua đường ống | số thay đổi sản xuất thực hiện ngoài đường ống, tìm ra bằng cách so sánh bản ghi triển khai với bản ghi đường ống / tất cả thay đổi sản xuất | phần trăm | Bản ghi triển khai, kiểm toán cấu hình và nhật ký đường ống | Hỗ trợ thay đổi; quản lý cấu hình | Thỏa thuận làm việc | Hằng tháng |
| Mức đầy đủ của bằng chứng | Tỷ lệ thay đổi được triển khai bằng đường ống mà bản ghi cho thấy bằng chứng yêu cầu | số thay đổi có đủ các mục bằng chứng yêu cầu (kiểm thử, rà soát, quét, phê duyệt) được liên kết / số thay đổi được triển khai | phần trăm | Bản ghi đường ống và thay đổi | Hỗ trợ thay đổi; quản trị | Định nghĩa hoàn thành | Hằng tháng |
| Tỷ lệ thất bại ở cổng chính sách | Tỷ lệ lần chạy bị dừng bởi một kiểm tra chính sách, chia thành vi phạm thật và lỗi chính sách | số lần chạy bị dừng bởi một cổng chính sách / số lần chạy bắt đầu; lý do được phân loại bằng lấy mẫu | phần trăm | Nhật ký đường ống và bản ghi cổng | Hỗ trợ thay đổi; quản lý rủi ro | Tiêu chí chấp nhận | Hằng tháng |

Tỷ lệ thành công của đường ống loại các lần chạy bị một người hủy, được báo cáo riêng, và tính một thất bại do kiểm thử chập chờn hoặc lỗi môi trường là thất bại của đường ống. Tỷ lệ lách cần một bản ghi độc lập về những gì đang chạy trong sản xuất, nên không thể tính chỉ từ đường ống.

## Khuyến nghị

### Coi đường ống là một dịch vụ

**1. Giao cho đường ống một người sở hữu và các mục tiêu.** Một đội có tên sở hữu độ tin cậy và tốc độ của đường ống, kèm các mục tiêu mức dịch vụ như tỷ lệ lần chạy hoàn tất trong một thời gian nêu rõ. Không có người sở hữu, sự chập chờn lớn lên cho đến khi mọi người ngừng tin nó.

**2. Đo thời lượng như một phân phối.** Trung vị giấu những lần chạy chậm mà mọi người chờ. Hãy cho thấy trung vị và bách phân vị thứ 85, và chia thời lượng thành các giai đoạn để tìm lần chờ dài nhất, thường là một hàng đợi cho một bộ chạy dùng chung hoặc một phê duyệt thủ công.

**3. Theo dõi và sửa kiểm thử chập chờn.** Một kiểm thử chập chờn dạy mọi người chạy lại cho đến khi xanh. Hãy đếm các thất bại chập chờn, giao mỗi cái cho một người sở hữu, và sửa hoặc cách ly nó kèm một ngày. Một đường ống mà mọi người chạy lại theo thói quen không tạo ra bằng chứng.

### Tự động hóa phê duyệt một cách cẩn thận

**4. Phân loại thay đổi theo rủi ro.** Hãy thống nhất với người sở hữu thay đổi loại thay đổi nào là chuẩn và có thể được phê duyệt bởi chính sách, và loại nào cần một người. Rà soát việc phân loại đều đặn bằng dữ liệu thất bại (xem chủ đề 4.4, Thất bại thay đổi và làm lại).

**5. Viết chính sách dưới dạng mã và kiểm thử nó.** Các quy tắc do đường ống thực thi là mã, và cần kiểm thử và người sở hữu như bất kỳ mã nào. Ghi phiên bản chính sách nào đã áp dụng cho mỗi lần chạy.

**6. Giữ một đường của con người cho điều bất thường.** Thay đổi khẩn cấp và rủi ro cao cần một người có thể quyết định với bằng chứng. Kiểm thử rằng đường đó hoạt động và đo mất bao lâu.

### Tạo bằng chứng hữu ích

**7. Quyết định bạn cần bằng chứng nào.** Hãy làm ngược từ các câu hỏi mà kiểm toán viên hay người rà soát sự cố hỏi: điều gì đã được kiểm thử, ai đã rà soát, điều gì đã được quét, ai đã phê duyệt, và điều gì đã được triển khai. Làm cho đường ống ghi đúng điều đó và liên kết nó với thay đổi.

**8. Đo mức đầy đủ bằng lấy mẫu.** Mức đầy đủ của bằng chứng theo số đếm của chính đường ống có thể cao trong khi nội dung rỗng. Hãy kiểm tra một mẫu bản ghi để xác nhận rằng bằng chứng là thật và khớp với điều đã chạy.

**9. Giữ bằng chứng chống can thiệp.** Hãy lưu bản ghi đường ống nơi những người triển khai không thể sửa chúng, và giữ chúng trong thời hạn lưu giữ mà quy tắc của bạn yêu cầu. Hãy kiểm tra yêu cầu lưu giữ với cố vấn pháp lý của chính bạn.

### Theo dõi việc lách và trôi dạt

**10. So sánh sản xuất với đường ống.** Hãy đối chiếu những gì đang chạy trong sản xuất với những gì đường ống đã triển khai. Sự khác biệt là lách hoặc trôi dạt, và mỗi cái xứng đáng một cái nhìn ngắn, không đổ lỗi vì sao đường ống bị tránh.

**11. Làm đường ống thành con đường dễ nhất.** Mọi người lách các đường ống chậm và chập chờn. Nếu việc lách tăng, hãy nhìn trước hết vào tốc độ và độ tin cậy, và vào các nhu cầu khẩn cấp mà đường ống không đáp ứng.

**12. Rà soát các cổng về giá trị.** Một cổng chưa bao giờ chặn một lỗi thật và làm trễ mọi lần chạy là ứng viên để gỡ hoặc thiết kế lại. Một cổng chặn nhiều lần chạy vì lỗi chính sách cần một bản sửa chính sách.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ thành công của đường ống | Phân loại lại thất bại hạ tầng là bị hủy; chạy lại cho đến khi xanh và chỉ đếm lần chạy cuối | Đếm mọi lần thử; báo cáo số lần chạy lại mỗi thay đổi |
| Thời lượng đường ống | Chuyển các giai đoạn chậm ra ngoài cửa sổ đo; bỏ qua giai đoạn | Đo đầu cuối từ commit đến được triển khai; so sánh các giai đoạn đã chạy với các giai đoạn yêu cầu |
| Tỷ lệ kiểm thử chập chờn | Xóa hoặc tắt tiếng kiểm thử chập chờn; đánh dấu thất bại là đã biết | Xu hướng số kiểm thử và độ phủ; rà soát các kiểm thử bị cách ly kèm ngày |
| Tỷ lệ phê duyệt tự động | Mở rộng loại "chuẩn" để gồm thay đổi rủi ro | Tỷ lệ thay đổi thất bại cho các thay đổi được phê duyệt tự động; lấy mẫu thay đổi đã phê duyệt |
| Tỷ lệ lách | Ghi triển khai thủ công khẩn cấp là lần chạy đường ống; không đối chiếu với sản xuất | Đối chiếu trạng thái sản xuất với bản ghi đường ống; lấy mẫu triển khai |
| Mức đầy đủ của bằng chứng | Đính kèm bằng chứng rỗng hoặc không liên quan; liên kết một báo cáo chung | Lấy mẫu nội dung bằng chứng; kiểm tra nó khớp với thay đổi |
| Tỷ lệ thất bại ở cổng chính sách | Nới lỏng chính sách để giảm thất bại; phân loại vi phạm thật là lỗi chính sách | Lấy mẫu các lần chạy bị dừng; tỷ lệ lỗi lọt ra ngoài và phát hiện từ kiểm toán |

Một kết quả đọc lành mạnh là một đường ống đủ nhanh và ổn định để mọi người dùng nó cho mọi thứ, tỷ lệ lách gần bằng không với mỗi ngoại lệ được hiểu, tỷ lệ phê duyệt tự động tăng với tỷ lệ thay đổi thất bại ổn định, và bằng chứng đứng vững khi lấy mẫu.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Kiểm tra đường ống nặng | Bắt lỗi sớm; bằng chứng mạnh | Chạy chậm; chập chờn nhiều hơn; áp lực lách |
| Đường ống nhẹ | Phản hồi nhanh | Bằng chứng yếu hơn; nhiều lỗi đến sản xuất hơn |
| Phê duyệt tự động cho thay đổi chuẩn | Gỡ chờ đợi; quyết định nhất quán | Rủi ro mở rộng loại; lỗi chính sách nhân lên |
| Phê duyệt của con người cho mọi thay đổi | Quen thuộc; trách nhiệm hiển thị | Chờ đợi; phê duyệt có thể thành hình thức |

Kết luận dạng văn xuôi là giữ đường ống nhanh và được tin cậy, chỉ phê duyệt bằng chính sách những gì được hiểu rõ, và đo việc lách. Những kiểm tra nặng mà mọi người tránh thì chẳng bảo vệ gì.

## Câu hỏi để thảo luận với đội nhóm

**1. Bao nhiêu phần thay đổi sản xuất của chúng ta đi qua đường ống, và làm sao chúng ta biết?**
Hãy yêu cầu một cách so sánh trạng thái sản xuất với bản ghi đường ống. Các đội thường tìm thấy các bản sửa khẩn cấp, thay đổi cấu hình và thay đổi dữ liệu đi vòng quanh đường ống. Hãy chờ các câu trả lời phòng thủ, nên coi mỗi lần lách là thông tin. Tiếp theo, hỏi điều gì sẽ làm đường ống thành con đường dễ hơn.

**2. Kiểm thử nào của chúng ta chạy lại cho đến khi qua, và ai sở hữu chúng?**
Thói quen chạy lại cho thấy lòng tin đã xói mòn ở đâu. Lập một danh sách và giao người sở hữu. Thảo luận nên sửa hay gỡ từng cái. Cuộc trò chuyện thường cho thấy vài kiểm thử gây ra phần lớn nhiễu.

**3. Hôm nay chúng ta phê duyệt tự động những thay đổi nào, và nên phê duyệt những gì?**
Liệt kê các loại thay đổi và lịch sử thất bại của từng loại. Quyết định cái nào rủi ro thấp và có kiểm thử tốt. Hỏi điều gì sẽ khiến bạn ngừng phê duyệt tự động một loại. Tiếp theo, thống nhất một ngày rà soát cho việc phân loại.

**4. Nếu một kiểm toán viên hỏi về lần triển khai thứ Ba tuần trước, chúng ta có thể cho thấy gì?**
Đi qua một thay đổi thật và lấy bằng chứng của nó. Chú ý khoảng trống và bước thủ công. Hỏi bằng chứng được ghi vào lúc đó hay dựng lại sau. Tiếp theo, chọn một khoảng trống để khép.

**5. Đường ống của chúng ta tiêu thời gian ở đâu, và ai chờ?**
Nhìn vào phân tích theo giai đoạn. Lần chờ dài nhất thường là một hàng đợi hoặc phê duyệt thủ công. Hỏi những người đang chờ có thể làm việc khác không, và lần chờ tốn gì về phản hồi bị trễ. Chọn một độ trễ để gỡ.

**6. Cổng nào chưa bao giờ chặn được điều gì hữu ích?**
Nhìn vào lý do dừng của cổng trong quý vừa qua. Một cổng chỉ có lỗi chính sách cần được sửa, và một cổng không bao giờ chặn gì có thể là thừa. Hỏi việc gỡ nó có làm tăng rủi ro không. Thống nhất một đợt thử.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Bạn phụ thuộc vào đường ống mỗi ngày. Hãy giữ kiểm thử đáng tin cậy, giữ thay đổi nhỏ, và coi một kiểm thử chập chờn là một lỗi của sản phẩm. Dùng dữ liệu đường ống để tìm các độ trễ của chính bạn, và giữ nó tránh xa các cuộc trò chuyện về hiệu suất cá nhân.

### Đội dịch vụ và vận hành

Bạn thừa hưởng những gì đường ống phát hành. Hãy yêu cầu bằng chứng bạn cần cho một sự cố, như điều gì đã đổi và khi nào, và hoàn tác nhanh. Theo dõi việc lách và trôi dạt, và đưa chúng đến đội như một cuộc trò chuyện về lý do.

### Lãnh đạo và quản trị

Hãy tài trợ đường ống như một dịch vụ sản xuất, với người sở hữu, năng lực, và thời gian để sửa sự chập chờn. Yêu cầu tỷ lệ lách, mức đầy đủ của bằng chứng bằng lấy mẫu, và tỷ lệ thay đổi thất bại của các phê duyệt tự động. Chống lại áp lực đếm số lần triển khai làm thước đo thành công.

### Khách hàng và người dùng

Bạn được lợi khi thay đổi đến thường xuyên và an toàn, và bạn chịu thiệt khi một thay đổi làm hỏng thứ gì đó. Hãy hỏi thay đổi được kiểm thử thế nào và một thay đổi tồi được hoàn tác nhanh đến đâu. Các báo cáo vấn đề của bạn sau một lần phát hành là một phần của phản hồi mà đường ống không thể cung cấp.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Phòng CNTT của một bệnh viện khu vực vận hành một đường ống cho ứng dụng lên lịch lâm sàng của mình. Các con số trong ví dụ này chỉ mang tính minh họa. Một hội đồng tư vấn thay đổi họp hằng tuần, và các thay đổi thường lệ chờ trung bình bốn ngày để được phê duyệt. Đội đề xuất phê duyệt các thay đổi chuẩn qua đường ống.

Trước khi bắt đầu, họ đo. Tỷ lệ thành công của đường ống là 82 phần trăm, và một mẫu các thất bại cho thấy khoảng một phần ba là kiểm thử chập chờn. Thời lượng ở bách phân vị thứ 85 là 47 phút, với hàng đợi 20 phút cho một bộ chạy dựng dùng chung. So sánh bản ghi triển khai với bản ghi đường ống cho thấy khoảng 12 phần trăm thay đổi sản xuất đã lách đường ống, chủ yếu là sửa cấu hình và sửa khẩn cấp.

Đội sửa năm kiểm thử chập chờn nhất, thêm một bộ chạy dựng, và tạo một đường thay đổi cấu hình qua đường ống. Sau ba tháng, tỷ lệ lách giảm xuống 3 phần trăm. Sau đó họ định nghĩa một loại thay đổi chuẩn gồm các thay đổi nhỏ, đã kiểm thử, có thể đảo ngược với ứng dụng lên lịch, kèm kiểm tra chính sách cho kiểm thử, quét an ninh và rà soát đồng nghiệp. Tỷ lệ phê duyệt tự động đạt khoảng 40 phần trăm, và thời gian chờ phê duyệt cho các thay đổi đó giảm từ vài ngày xuống vài phút.

Một rủi ro lợi dụng xuất hiện. Một quản lý yêu cầu nâng tỷ lệ phê duyệt tự động bằng cách thêm các thay đổi lược đồ cơ sở dữ liệu vào loại chuẩn. Đội kiểm tra tỷ lệ thay đổi thất bại cho các thay đổi lược đồ, cao hơn các thay đổi khác, và giữ chúng với một người rà soát. Mức đầy đủ của bằng chứng theo số đếm của đường ống là 98 phần trăm, nhưng một mẫu 20 bản ghi cho thấy bốn bản có báo cáo kiểm thử từ một bản dựng khác đính kèm. Đội sửa quy tắc liên kết. Điều còn khó: việc lách cho các bản sửa khẩn cấp vẫn cần một bản ghi sau sự việc, và việc rà soát rủi ro lâm sàng cho các thay đổi ảnh hưởng đến an toàn bệnh nhân vẫn ở lại với con người.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Thay đổi nhỏ, thường xuyên qua một đường ống được tin cậy là cốt lõi của phân phối liên tục, và tồn đọng của chính đường ống xứng đáng được rà soát đều đặn cùng các bên liên quan như sản phẩm. Một thực hành tốt là rà soát kiểm thử chập chờn và việc lách ở buổi trò chuyện cải tiến đều đặn. Điều cần lưu ý là ăn mừng riêng tần suất triển khai thưởng cho việc chia nhỏ thay đổi.

### AI

AI có thể viết mã và kiểm thử, rà soát thay đổi và đánh giá rủi ro thay đổi bên trong đường ống. Hãy đánh dấu các thay đổi có AI hỗ trợ trong dữ liệu và so sánh thất bại và làm lại của chúng với các thay đổi khác (xem chủ đề 10.2, Đo lường công việc có AI hỗ trợ). Nếu một cổng AI quyết định hoặc khuyến nghị, hãy đo các lần phê duyệt sai và dừng sai bằng lấy mẫu, và giữ một con người chịu trách nhiệm cho các thay đổi rủi ro cao. Điều cần lưu ý là kiểm thử do AI tạo ra có thể nâng số liệu độ phủ mà không kiểm thử hành vi quan trọng.

### Tự động hóa

Đường ống chính là tự động hóa, nên thực hành là coi nó như một dịch vụ sản xuất có nhật ký, một người sở hữu, và một phương án dự phòng thủ công cho trường hợp khẩn cấp. Hãy tự động hóa việc thu thập bằng chứng và việc đối chiếu sản xuất với bản ghi đường ống. Điều cần lưu ý là phê duyệt tự động nhân lên tác động của một lỗi chính sách, nên hãy kiểm thử chính sách và giữ một điều khiển tạm dừng.

### Phân tích

Hãy dùng sự kiện đường ống để cho thấy thời gian đi đâu và thất bại tụ lại ở đâu, và liên kết các lần chạy với sự cố và làm lại. Quyết định được cung cấp thông tin là đầu tư vào tốc độ, độ tin cậy hay kiểm thử ở đâu. Điều cần lưu ý là dữ liệu đường ống không cho thấy chất lượng của kiểm thử, nên hãy kết hợp với lỗi lọt ra ngoài, và cho thấy số lần chạy đằng sau mỗi tỷ lệ (xem chủ đề 10.8, Chỉ số phân tích và chất lượng dữ liệu).

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một đường ống đơn giản với kiểm thử nhanh và triển khai tự động lên sản xuất có thể là đủ. Hãy đo thời lượng và việc lách, và ghi bằng chứng về kiểm thử và rà soát trong kho mã.

**Doanh nghiệp nhỏ.** Đường ống có thể là một dịch vụ được lưu trữ hoặc của nhà cung cấp. Hãy hỏi nó ghi gì và ở đâu, và giữ một cách dựng lại điều đã được triển khai. Tránh xây các kiểm soát bạn sẽ không duy trì.

**Doanh nghiệp lớn.** Nhiều đường ống qua các đội cần định dạng bằng chứng chung và chính sách dùng chung. Hãy giữ một cái nhìn trung tâm về việc lách và mức đầy đủ của bằng chứng, với quyền sở hữu cấp đội cho các bản sửa. Tránh ép một công cụ nơi các đội có nhu cầu khác nhau.

**Chính phủ và khu vực công.** Phân tách nhiệm vụ, dấu vết kiểm toán và quy tắc lưu giữ định hình đường ống. Hãy thiết kế bằng chứng cho kiểm toán, và kiểm tra yêu cầu pháp lý và mua sắm, gồm cả cho các quyết định tự động (xem chủ đề 8.3, Chỉ số tuân thủ và kiểm toán, và chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là nền tảng đường ống và các bộ chạy, công sức viết và duy trì kiểm thử và chính sách, thời gian sửa sự chập chờn, và chi phí lưu trữ bằng chứng. Bản thân các thước đo tốn ít khi bản ghi đường ống và thay đổi được liên kết.

Lợi tức là chờ phê duyệt ngắn hơn, ít bước thủ công hơn, phát hiện lỗi sớm hơn, và bằng chứng sẵn sàng khi cần. Những điều này hiện ra dưới dạng phân phối nhanh hơn và ít công sức hơn lúc kiểm toán, nhưng dễ bị phóng đại. Hãy đo đường cơ sở của chính bạn, như thời gian chờ phê duyệt và công sức để tập hợp bằng chứng kiểm toán, trước và sau, và nêu các giả định dưới dạng khoảng (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh). Phía rủi ro là chi phí của các thất bại thoát khỏi đường ống và của một sự cố ngừng đường ống chặn mọi thay đổi.

## Phản mẫu và cạm bẫy

- **Đếm số lần triển khai là thành công.** Nó thưởng cho việc chia nhỏ thay đổi. Hãy ghép với thất bại và làm lại.
- **Chạy lại cho đến khi xanh.** Nó giấu kiểm thử chập chờn và bằng chứng yếu. Hãy đếm sự chập chờn và sửa chúng.
- **Phớt lờ việc lách.** Những thay đổi tránh đường ống là những cái nó không thể bảo vệ. Hãy đối chiếu sản xuất với bản ghi đường ống.
- **Mở rộng loại chuẩn để nâng tự động hóa.** Tỷ lệ tăng và tỷ lệ thất bại theo sau. Hãy rà soát loại bằng dữ liệu thất bại.
- **Bằng chứng tồn tại nhưng không nói gì.** Hãy lấy mẫu nội dung, không chỉ sự hiện diện.
- **Một đường ống không có chủ.** Nó mục nát. Hãy nêu tên một đội và cho họ thời gian.
- **Lỗi chính sách bị coi là lỗi mã.** Mọi người học cách phớt lờ các cổng. Hãy phân loại các lần dừng và sửa chính sách.
- **Không có đường thủ công cho khẩn cấp.** Mọi người lách. Hãy cung cấp một đường nhanh, có kiểm toán.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Độ tin cậy đường ống | Dựng tùy hứng; thất bại thường xuyên không giải thích được | Đường ống tồn tại; thành công được theo dõi | Người sở hữu, mục tiêu và xử lý kiểm thử chập chờn | Thời lượng và thất bại được rà soát theo giai đoạn | Các đường ống chia sẻ mẫu và năng lực giữa các đội |
| Phê duyệt và chính sách | Phê duyệt thủ công cho mọi thay đổi | Một số thay đổi chuẩn được định nghĩa | Chính sách dưới dạng mã cho thay đổi chuẩn, kèm kiểm thử | Các loại phê duyệt được rà soát bằng dữ liệu thất bại | Phê duyệt theo rủi ro tự thích ứng trong các giới hạn đã thống nhất |
| Bằng chứng và việc lách | Bằng chứng dựng lại sau sự việc | Một số bằng chứng được ghi | Bằng chứng yêu cầu được ghi và liên kết | Việc lách được đối chiếu và mức đầy đủ được lấy mẫu | Bằng chứng và đối chiếu được tự động hóa hoàn toàn và kiểm toán |

## Danh sách kiểm tra

- [ ] Đường ống có một người sở hữu có tên và các mục tiêu về độ tin cậy và tốc độ.
- [ ] Tỷ lệ thành công của đường ống và các bách phân vị thời lượng được báo cáo theo giai đoạn.
- [ ] Kiểm thử chập chờn được đếm và mỗi cái có người sở hữu và ngày sửa.
- [ ] Các loại thay đổi chuẩn được định nghĩa với tiêu chí rủi ro và được rà soát bằng dữ liệu thất bại.
- [ ] Chính sách là mã, được kiểm thử và có phiên bản, và phiên bản được ghi cho mỗi lần chạy.
- [ ] Trạng thái sản xuất được đối chiếu với bản ghi đường ống để tìm việc lách.
- [ ] Bằng chứng yêu cầu được định nghĩa và ghi cho mỗi thay đổi được triển khai.
- [ ] Mức đầy đủ của bằng chứng được kiểm tra bằng cách lấy mẫu nội dung.
- [ ] Một đường khẩn cấp có kiểm toán tồn tại và được kiểm thử.
- [ ] Mỗi chỉ số có một vectơ lợi dụng và một rào chắn được hiển thị bên cạnh.

## Lời nhắc AI

**Phân loại thay đổi theo rủi ro cho phê duyệt tự động.**

```text
Here is a list of the types of change we make and, for each, our recent history:
[paste change types with counts of changes and failures, if available]. Propose
which types might be candidates for automated approval and which should keep a
human reviewer, with the reasoning and the evidence I would need. Do not invent
failure rates. Mark each suggestion as a proposal for the change owners to
decide. List your assumptions and the data I should collect.
```

**Định nghĩa bằng chứng một đường ống nên ghi.**

```text
Our pipeline is [description of stages and tools]. Our change records are kept in
[tool]. We must answer these questions after any deployment: [list questions
from auditors or incident reviewers]. Propose the evidence items the pipeline
should record and link, where to store them, and how to check that they are real
and not empty. Do not state compliance claims or legal requirements. List your
assumptions and questions for our compliance team.
```

**Phân tích dữ liệu kiểm thử chập chờn.**

```text
Below is a summary of failing tests and rerun outcomes for [period]: [paste
data without personal information]. Identify tests that fail and then pass on
rerun, group them by area, and propose an order for fixing them. Do not guess
causes that the data does not support. Say what additional data would help. List
your assumptions.
```

**Rà soát rủi ro bị lợi dụng của bảng điều khiển đường ống.**

```text
We report these pipeline measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving delivery or safety, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Kỹ năng AI

- [Change request](../../../../skills/change-request/SKILL.md): dùng để định nghĩa một bản ghi thay đổi và bằng chứng của nó nên chứa gì.
- [Release notes](../../../../skills/release-notes/SKILL.md): dùng để biến đầu ra của đường ống thành ghi chú cho người dùng và vận hành.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề bao quát một chỉ số và rào chắn đi kèm của nó.

## Điểm chính cần nhớ

- Một đường ống vừa là một dịch vụ sản xuất vừa là một kiểm soát, nên hãy đo độ tin cậy, tốc độ và bằng chứng nó tạo ra.
- Đo việc lách bằng cách đối chiếu sản xuất với bản ghi đường ống, và làm đường ống thành con đường dễ nhất.
- Chỉ phê duyệt tự động những thay đổi được hiểu rõ, với chính sách đã kiểm thử và một đường của con người cho phần còn lại.
- Đếm kiểm thử chập chờn và sửa chúng, vì chạy lại cho đến khi xanh phá hủy lòng tin và bằng chứng.
- Lấy mẫu nội dung bằng chứng, vì số đếm mức đầy đủ một mình có thể được thỏa mãn bằng bản ghi rỗng.

## Tài liệu tham khảo và đọc thêm

1. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
2. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
3. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
4. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
5. Wikipedia, [Test automation](https://en.wikipedia.org/wiki/Test_automation).
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
