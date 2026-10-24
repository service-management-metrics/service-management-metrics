# Đo lường công việc có AI hỗ trợ

**Hãy đánh giá công việc có AI hỗ trợ theo điều còn lại sau rà soát, sau sản xuất, và sau lần liên hệ kế tiếp của người dùng, không phải theo tốc độ nó xuất hiện, và tiếp tục theo dõi xem những người làm nó có còn đang học hay không.**

## Tổng quan và động lực

Khi một đội dùng công cụ AI mỗi ngày, câu hỏi trung tâm đổi từ "chúng ta có nên không?" sang "chúng ta đang nhận được gì?" Chủ đề trước đã đặt ra các nền tảng: đường cơ sở, so sánh và chi phí đầy đủ (xem chủ đề 10.1, AI trong đo lường quản lý dịch vụ). Chủ đề này đi vào chính công việc. Làm thế nào bạn biết mã, phiếu, tài liệu và quyết định có AI hỗ trợ tốt bằng, tốt hơn hay tệ hơn công việc chúng thay thế, và điều gì xảy ra với những người làm nó?

Sự hỗ trợ của AI chạm đến nhiều loại công việc. Trong phân phối phần mềm, các công cụ gợi ý hoặc tạo ra mã, kiểm thử, thông điệp commit và bình luận rà soát. Trong vận hành dịch vụ, chúng tóm tắt sự cố, đề xuất nguyên nhân, soạn câu trả lời và viết bài tri thức. Trong phân tích, chúng tạo ra báo cáo và truy vấn. Đặc điểm chung là việc tạo ra một phiên bản đầu hợp lý trở nên rẻ. Chi phí chuyển sang nơi khác: đọc và đánh giá đầu ra, sửa điều sai, duy trì điều đã tạo, và học đủ để biết sự khác biệt.

Vài hiệu ứng làm đo lường rắc rối.

- **Số đếm đầu ra gây hiểu lầm.** [Số dòng mã](https://en.wikipedia.org/wiki/Lines_of_code) luôn là một thước đo năng suất kém, và mã được tạo ra làm nó tệ hơn. Nhiều mã hơn là nhiều thứ hơn để đọc, kiểm thử và duy trì. Số đếm các dòng được tạo ra, gợi ý được chấp nhận, hay bản nháp nói rất ít về giá trị.
- **Rà soát trở thành nút thắt.** [Rà soát mã](https://en.wikipedia.org/wiki/Code_review) và việc rà soát công việc được tạo ra khác tốn thời gian, và một dòng chảy các thay đổi lớn hơn, thường xuyên hơn có thể làm quá tải người rà soát. Các [pull request](https://en.wikipedia.org/wiki/Pull_request) lớn khó rà soát tốt hơn, và một người rà soát quá tải dễ phê duyệt điều họ chưa hiểu. Các thước đo rà soát và dòng chảy trước đó vẫn thiết yếu (xem chủ đề 2.7, Chỉ số pull request và rà soát mã).
- **Vấn đề chất lượng đến muộn.** Mã được tạo ra có thể qua kiểm thử hôm nay và mang [mã trùng lặp](https://en.wikipedia.org/wiki/Duplicate_code), cấu trúc không rõ, hay lỗi ẩn nổi lên dưới dạng chi phí bảo trì, một dạng [nợ kỹ thuật](https://en.wikipedia.org/wiki/Technical_debt). Các thước đo lấy tại thời điểm tạo ra bỏ lỡ nó. Hãy nhìn vào điều xảy ra với công việc sau đó.
- **Kỹ năng có thể thay đổi.** Dựa vào một công cụ cho những nhiệm vụ mà trước đây mình tự làm là một dạng [chuyển gánh nặng nhận thức](https://en.wikipedia.org/wiki/Cognitive_offloading), có thể giải phóng sự chú ý cho những vấn đề khó hơn hoặc có thể dẫn đến [mất kỹ năng](https://en.wikipedia.org/wiki/Deskilling) nếu sự hiểu biết nền tảng phai đi. Cả hai đều có thể, và kết quả phụ thuộc vào cách công cụ được dùng. Điều này quan trọng với những người liên quan và với khả năng của đội xử lý các tình huống mà công cụ không thể.

Bằng chứng về tác động của hỗ trợ AI lên năng suất vẫn đang phát triển, và nó thay đổi theo nhiệm vụ, kinh nghiệm của người dùng, công cụ và bối cảnh. Một số nghiên cứu có kiểm soát về các nhiệm vụ lập trình thấy hoàn thành nhanh hơn ở các nhiệm vụ được định nghĩa rõ, và các nghiên cứu và báo cáo khác thấy mức tăng nhỏ hơn hoặc không có, hoặc có thêm chi phí, đối với những người có kinh nghiệm làm việc trên các hệ thống phức tạp mà họ biết rõ. Cuốn sách này không đưa ra một con số. Lập trường có trách nhiệm cho một đội là đo công việc của chính mình, kèm đường cơ sở và so sánh, và coi mọi con số đã công bố là một nghiên cứu trong một bối cảnh cụ thể.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) đặc biệt quan trọng ở đây, vì áp lực phải cho thấy thành quả là mạnh và các con số dễ là những con số gây hiểu lầm. Các thước đo dưới đây theo dõi điều còn lại, không phải điều được tạo ra (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Đo điều còn lại.** Giữ lại, làm lại và lỗi lọt ra ngoài nói nhiều hơn đầu ra.
- **Theo dõi rà soát.** Dòng chảy của công việc có AI hỗ trợ bị giới hạn bởi việc mọi người đọc nó tốt đến đâu.
- **So sánh tương đồng với tương đồng.** Công việc có và không có hỗ trợ phải giống nhau về loại và độ khó.
- **Nhìn về sau cũng như bây giờ.** Vấn đề chất lượng và chi phí bảo trì xuất hiện vài tuần hoặc vài tháng sau khi tạo ra.
- **Giữ sự hiểu biết trong vòng lặp.** Người giao công việc phải có thể giải thích nó.
- **Bảo vệ kỹ năng và việc học.** Chú ý điều mọi người vẫn làm được khi không có công cụ.
- **Tổng hợp; đừng giám sát cá nhân.** Dữ liệu về ai dùng AI và dùng thế nào là để cải thiện quy trình, không phải để xếp hạng con người.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ giữ lại | Tỷ lệ thay đổi có AI hỗ trợ còn về cơ bản không đổi sau một khoảng nêu rõ | số thay đổi có AI hỗ trợ có ít hơn một tỷ lệ đặt trước bị sửa hoặc hoàn tác sau 30 ngày / số thay đổi có AI hỗ trợ được gộp 30 ngày trước | phần trăm | Lịch sử kiểm soát phiên bản ghép với thẻ hỗ trợ, ở cấp đội | Quản lý phát hành và triển khai; hỗ trợ thay đổi | Công việc bền vững; ít làm lại | Hằng tháng |
| Làm lại sau khi gộp | Tỷ lệ thay đổi cần một bản sửa tiếp theo trong thời gian ngắn, cho các thay đổi có hỗ trợ và đối chứng | số thay đổi có bản sửa tiếp theo liên kết trong 14 ngày / số thay đổi được gộp, theo nhóm | phần trăm | Kiểm soát phiên bản, công cụ theo dõi vấn đề, bản ghi thay đổi | Hỗ trợ thay đổi; quản lý vấn đề | Lỗi lọt ra ngoài; làm lại | Hằng tháng |
| Tải rà soát | Công sức của người rà soát mỗi thay đổi, cho các thay đổi có hỗ trợ và đối chứng | trung vị và bách phân vị thứ 85 của thời gian rà soát và số vòng rà soát mỗi thay đổi, theo nhóm | giờ; vòng | Dấu thời gian công cụ rà soát, tổng hợp theo đội | Quản lý phát hành và triển khai | Rà soát như phản hồi và học hỏi | Hằng tháng |
| Tỷ lệ lỗi lọt ra ngoài | Lỗi tìm thấy trong sản xuất mỗi thay đổi, cho các thay đổi có hỗ trợ và đối chứng | số lỗi tìm thấy sau phát hành quy cho một thay đổi / số thay đổi được phát hành, theo nhóm | lỗi mỗi thay đổi | Công cụ theo dõi lỗi liên kết với thay đổi | Quản lý sự cố; quản lý vấn đề | Chất lượng của điều được phát hành | Hằng quý |
| Tỷ lệ qua kiểm tra giải thích | Tỷ lệ thay đổi có AI hỗ trợ được lấy mẫu mà tác giả có thể giải thích cách tiếp cận và các đánh đổi của nó khi rà soát | số thay đổi được lấy mẫu mà tác giả giải thích khiến người rà soát hài lòng / số thay đổi được lấy mẫu | phần trăm | Ghi chú rà soát mẫu | Quản lý tri thức; hỗ trợ thay đổi | Hiểu biết chung về mã | Hằng quý |
| Chất lượng hỗ trợ có AI | Tỷ lệ mở lại và mức hài lòng của người dùng cho các câu trả lời hỗ trợ có AI so với không có | số phiếu có AI hỗ trợ bị mở lại / số phiếu có AI hỗ trợ, và số đánh giá thuận lợi / số đánh giá, theo nhóm | phần trăm | Công cụ ITSM, khảo sát | Bàn dịch vụ; quản lý sự cố | Chất lượng của kết quả dịch vụ | Hằng tháng |
| Đánh giá sự tự tin khi không dùng công cụ | Đánh giá của đội về sự tự tin làm các nhiệm vụ chính mà không có công cụ | đánh giá trung bình và độ phân tán trên một thang đã thống nhất, theo đội | điểm thang | Khảo sát nhanh ẩn danh của đội | Quản lý nhân lực và nhân tài; quản lý tri thức | Năng lực và học tập của đội | Hằng quý |

Hãy gắn thẻ hỗ trợ AI một cách đáng tin ở cấp đội, qua nhật ký công cụ hoặc một quy ước nhẹ, và nêu cách chọn các thay đổi đối chứng: tương tự về kích thước, khu vực và rủi ro. Tỷ lệ giữ lại đo thay đổi đáng kể, với ngưỡng được đặt trong sổ đăng ký. Làm lại sau khi gộp liên kết một bản sửa tiếp theo với thay đổi gốc theo một quy tắc nêu rõ. Tải rà soát là công sức của người rà soát, không phải của tác giả, và chỉ gồm thời gian rà soát chủ động nơi đo được. Dữ liệu cấp cá nhân không bao giờ được báo cáo. Các mẫu cho kiểm tra giải thích được chọn ngẫu nhiên, và phép kiểm tra là một cuộc trò chuyện để hỗ trợ học, không phải bài kiểm tra một con người.

## Khuyến nghị

### Theo dõi công việc sau khi nó được tạo ra

**1. Theo dõi điều xảy ra với công việc có hỗ trợ theo thời gian.** Với mã, hãy theo dõi các thay đổi trong nhiều tuần sau khi gộp: chúng ở lại, được sửa, hay bị hoàn tác? Với hỗ trợ, hãy theo dõi các phiếu sau câu trả lời: chúng có bị mở lại hoặc theo sau là các liên hệ lặp lại không? Với tài liệu, kiểm tra chúng được dùng, sửa hay bị bỏ qua. Giữ lại và làm lại là những tín hiệu đơn giản, khó làm giả về chất lượng.

**2. So sánh với công việc tương tự không có hỗ trợ.** Hãy chọn công việc đối chứng có kích thước, rủi ro và khu vực tương tự, từ cùng kỳ. Độ khó quan trọng: mọi người có thể dùng AI cho nhiệm vụ dễ, điều sẽ tâng bốc công cụ, hoặc cho nhiệm vụ khó, điều sẽ phạt nó. Hãy nêu cách các nhiệm vụ được hỗ trợ, và điều chỉnh hoặc lưu ý cho phù hợp. Một so sánh nhỏ, trung thực tốt hơn một so sánh lớn, bị nhiễu (xem chủ đề 6.5, Hiện thực hóa giá trị và kết quả kinh doanh).

**3. Đưa các thước đo hạ nguồn vào bộ chuẩn.** Hãy ghép bất kỳ thước đo tốc độ nào với tỷ lệ thay đổi thất bại, lỗi lọt ra ngoài và các thước đo ổn định đang dùng (xem chủ đề 2.8, Chỉ số DORA). Mức tăng tốc độ kèm độ ổn định giảm là sự chuyển chi phí sang vận hành và người dùng. Hãy báo cáo cặp đôi cùng nhau.

### Giữ cho rà soát có ý nghĩa

**4. Theo dõi tải và kích thước rà soát.** Hãy đo thời gian rà soát, số vòng rà soát và kích thước thay đổi cho công việc có và không có hỗ trợ. Nếu các thay đổi có hỗ trợ lớn hơn hoặc nhiều hơn, người rà soát có thể bị quá tải. Hãy đặt chuẩn mực về kích thước thay đổi, và giới hạn lượng tài liệu được tạo ra có thể đi vào một lần rà soát. Năng lực rà soát là một phần của năng lực hệ thống (xem chủ đề 2.3, Công việc đang xử lý và hàng đợi).

**5. Yêu cầu tác giả giải thích.** Hãy làm thành thói quen rằng tác giả của một thay đổi có thể giải thích nó làm gì, vì sao chọn cách tiếp cận này, và các đánh đổi là gì. Một cuộc trò chuyện ngắn, hỗ trợ trong rà soát là đủ. Lấy mẫu kiểm tra giải thích hằng quý để xem sự hiểu biết có theo kịp đầu ra không. Nơi tác giả không giải thích được, hãy coi đó là tín hiệu để chậm lại và học, không phải thất bại của con người.

**6. Phòng thiên kiến tự động hóa.** Khuyến khích người rà soát đọc công việc có hỗ trợ một cách phê phán như bất kỳ công việc nào khác. Hãy luân phiên người rà soát, thỉnh thoảng gieo các vấn đề đã biết vào một thay đổi thử để kiểm tra khả năng phát hiện, và giữ việc lấy mẫu đầu ra bởi những người rà soát độc lập. Tỷ lệ chấp nhận rất cao kèm làm lại tăng là một cảnh báo (xem chủ đề 10.1, AI trong đo lường quản lý dịch vụ).

### Chăm sóc chất lượng và bảo trì

**7. Giám sát cấu trúc của mã và hệ thống.** Hãy theo dõi sự trùng lặp, độ phức tạp, độ phủ kiểm thử và tốc độ thay đổi ở những khu vực hỗ trợ nhiều. Dùng các thước đo bạn đã có cho [kiểm thử phần mềm](https://en.wikipedia.org/wiki/Software_testing) và sức khỏe mã, và nhìn vào xu hướng. Sự trùng lặp tăng hoặc hiệu quả kiểm thử giảm có thể báo hiệu mã được tạo ra đang được chấp nhận mà không được tích hợp vào thiết kế. Độ phủ [kiểm thử hồi quy](https://en.wikipedia.org/wiki/Regression_testing) là một lưới an toàn, và sức mạnh của nó quan trọng hơn khi khối lượng thay đổi tăng.

**8. Đối xử cẩn thận với kiểm thử được tạo ra.** AI có thể viết nhiều kiểm thử nhanh chóng, và kiểm thử có thể qua mà không kiểm tra điều gì có ý nghĩa. Hãy lấy mẫu kiểm thử được tạo ra để xem giá trị, và đo hiệu quả kiểm thử bằng các phương pháp như liệu kiểm thử có thất bại khi hành vi bị cố ý phá. Đừng đếm số kiểm thử đã viết làm thước đo chất lượng.

**9. Theo dõi chất lượng của hỗ trợ có AI.** Với bàn dịch vụ và vận hành, hãy đo tỷ lệ mở lại, liên hệ lặp lại, mức hài lòng và độ chính xác của các câu trả lời được lấy mẫu cho phản hồi có và không có hỗ trợ. Một câu trả lời nhanh hơn mà đưa người dùng quay lại thì chậm hơn xét tổng thể. Hãy đọc bình luận của người dùng về các câu trả lời có hỗ trợ, và xem người dùng có biết họ đang giao dịch với AI nơi điều đó quan trọng không (xem chủ đề 6.1, Chỉ số mức hài lòng của khách hàng).

### Bảo vệ con người và kỹ năng

**10. Chú ý điều mọi người vẫn làm được.** Hãy hỏi các đội họ tự tin đến đâu khi làm các nhiệm vụ chính mà không có công cụ và theo dõi xu hướng. Dùng thực hành thỉnh thoảng không có công cụ, làm việc theo cặp và rà soát thiết kế nền tảng để giữ cho kỹ năng sống. Đặc biệt bảo vệ việc học của thành viên mới, những người có thể dùng công cụ trước khi họ xây được các mô hình tư duy mà đồng nghiệp có kinh nghiệm dựa vào để đánh giá nó (xem chủ đề 9.4, Chỉ số kỹ năng và học tập).

**11. Giữ dữ liệu về con người ra khỏi đánh giá.** Hãy tổng hợp về cấp đội. Đừng báo cáo cá nhân nào dùng AI nhiều nhất, và đừng dùng mức sử dụng, tỷ lệ chấp nhận hay khối lượng được tạo ra trong đánh giá hiệu suất. Hãy làm cho các quy tắc được biết đến. Cần có lòng tin để có những báo cáo trung thực về điều hiệu quả và điều không.

**12. Xem lại đều đặn.** Công cụ, mô hình và thực hành thay đổi trong vài tháng. Hãy chạy lại phép so sánh khi công cụ hoặc cách làm việc thay đổi. Chia sẻ các phát hiện, gồm cả việc một công cụ không giúp ích ở đây, và cho nghỉ hưu những việc dùng không còn xứng đáng chỗ của chúng.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ giữ lại | Tránh các thay đổi cần thiết để giữ con số cao; chỉ gắn thẻ các thay đổi thành công là có hỗ trợ | Gắn thẻ theo nhật ký công cụ, không theo lựa chọn của tác giả; ghép với lỗi lọt ra ngoài và làm lại |
| Làm lại sau khi gộp | Sửa trong một phiếu khác hoặc một thay đổi mới không liên kết; trì hoãn bản sửa quá cửa sổ | Quy tắc liên kết trong sổ đăng ký; nhìn vào cửa sổ dài hơn; lỗi sản xuất |
| Tải rà soát | Rà soát vội làm giảm thời gian đo được; phê duyệt không bình luận | Mẫu độ sâu rà soát; lỗi lọt ra ngoài; khảo sát người rà soát |
| Tỷ lệ lỗi lọt ra ngoài | Không quy lỗi cho thay đổi; phân loại lại lỗi là cải tiến | Quy tắc quy kết; mẫu độc lập về phân loại lỗi |
| Tỷ lệ qua kiểm tra giải thích | Tác giả tập trước cho buổi kiểm tra; người rà soát dễ dãi | Mẫu ngẫu nhiên, không báo trước; luân phiên người rà soát; tập trung vào lý do thiết kế |
| Chất lượng hỗ trợ có AI | Chỉ hỗ trợ các phiếu dễ; huấn luyện người dùng đánh giá cao | Ghép phiếu theo loại và độ khó; tỷ lệ phản hồi và cơ cấu; đọc bình luận |
| Đánh giá sự tự tin khi không dùng công cụ | Đánh giá thổi phồng để tránh soi xét; đánh giá thấp để biện hộ cho thêm công cụ | Ẩn danh; so sánh với thực hành quan sát được trong diễn tập; đọc bình luận |

Một kết quả đọc lành mạnh là công việc có hỗ trợ ở lại đúng chỗ thường xuyên như công việc không có hỗ trợ, làm lại và lỗi lọt ra ngoài ngang bằng hoặc tốt hơn đối chứng, rà soát vẫn sâu, tác giả có thể giải thích điều họ giao, hỗ trợ có AI không quay lại, và các đội vẫn tự tin vào kỹ năng của chính mình.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Đo khối lượng đầu ra | Dễ | Thưởng cho khối lượng; không nói gì về giá trị |
| Đo giữ lại và làm lại | Phản ánh chất lượng theo thời gian | Trễ; cần liên kết bản ghi |
| So sánh có kiểm soát | Đáng tin | Cần công sức; có thể không thực tế |
| So sánh quan sát | Rẻ | Bị nhiễu bởi việc chọn nhiệm vụ |
| Kiểm tra giải thích bắt buộc | Duy trì sự hiểu biết | Có thể cảm thấy như kiểm tra; thêm công sức |
| Kiểm tra mẫu nhẹ | Gánh nặng thấp | Có thể bỏ lỡ mẫu hình |
| Hạn chế nặng việc dùng AI | Kiểm soát rủi ro | Mất lợi ích; dùng ngầm |
| Dùng mở kèm đo lường | Học hỏi và lợi ích | Cần lòng tin và kỷ luật |

Câu trả lời dạng văn xuôi là cho phép sử dụng trong các quy tắc rõ ràng, đo điều còn lại, lấy mẫu để kiểm tra sự hiểu biết, bảo vệ năng lực rà soát và kỹ năng, và giữ dữ liệu về con người ra khỏi đánh giá.

## Câu hỏi để thảo luận với đội nhóm

**1. Bao nhiêu phần những gì AI giúp chúng ta tạo ra quý trước vẫn còn nguyên vị trí, không đổi, và làm sao chúng ta biết?**
Nhìn vào giữ lại và làm lại cho các thay đổi có hỗ trợ so với một tập tương đương. Người điều phối nên ghi lại việc trả lời khó đến mức nào. Thống nhất cách gắn thẻ và liên kết các bản ghi để câu trả lời dễ vào quý sau.

**2. Rà soát có theo kịp không, và chuyện gì xảy ra khi nó không?**
Nhìn vào thời gian rà soát, số vòng và kích thước. Hỏi người rà soát cảm thấy thế nào về các thay đổi có hỗ trợ. Thảo luận giới hạn kích thước và cách chia sẻ tải. Thống nhất một chuẩn mực để thử.

**3. Mỗi người trong chúng ta có thể giải thích thay đổi gần nhất chúng ta giao với sự giúp đỡ của AI, và các đánh đổi của nó không?**
Thử theo cặp. Chú ý nơi việc giải thích dễ và nơi nó khó. Thảo luận điều đó cho chúng ta biết gì về cách dùng công cụ, và cách giữ sự hiểu biết.

**4. Chúng ta vẫn làm tốt được gì khi không có công cụ, và chúng ta đang mất mánh gì?**
Liệt kê các nhiệm vụ chính, đánh giá sự tự tin một cách trung thực, và lên kế hoạch một ít thực hành không dùng công cụ hay làm việc theo cặp. Cuộc trò chuyện cũng làm lộ ra điều mọi người coi trọng trong công việc và muốn giữ.

**5. AI giúp chúng ta nhiều nhất và ít nhất ở đâu, và những nơi đó có điểm gì chung?**
So sánh các ví dụ. Tìm các đặc điểm như nhiệm vụ được định nghĩa rõ, kiểm thử tốt, hay lĩnh vực quen thuộc. Dùng các phát hiện để hướng dẫn nơi dùng công cụ.

**6. Chúng ta sẽ đo gì nếu chúng ta không tin ấn tượng đầu tiên của mình?**
Nhờ nhóm nêu bằng chứng sẽ thay đổi ý kiến của họ về công cụ theo cả hai hướng. Dùng các câu trả lời để định nghĩa phép so sánh kế tiếp.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối nắm trải nghiệm hằng ngày và kết quả chất lượng. Họ nên gắn thẻ công việc có hỗ trợ, theo dõi giữ lại và làm lại, giữ rà soát có ý nghĩa, và duy trì sự hiểu biết của chính họ. Họ nên lên tiếng khi khối lượng thay đổi được tạo ra vượt quá khả năng rà soát của họ.

### Đội dịch vụ và vận hành

Các đội vận hành dùng AI cho tóm tắt, chẩn đoán và câu trả lời, và họ thừa hưởng các vấn đề chất lượng lọt ra ngoài. Họ nên lấy mẫu đầu ra, so sánh tỷ lệ mở lại và liên hệ lặp lại, và giữ trách nhiệm rõ ràng của con người với các hành động trong sản xuất. Họ nên giúp định nghĩa nơi AI không được hành động nếu không có một con người.

### Lãnh đạo và quản trị

Lãnh đạo đối mặt với áp lực phải cho thấy thành quả và có thể bị cám dỗ bởi các chỉ số sử dụng và đầu ra. Họ nên khăng khăng đòi các thước đo giữ lại, làm lại và ổn định bên cạnh tốc độ, tài trợ năng lực rà soát, bảo vệ sự phát triển kỹ năng, và chống lại việc xếp hạng con người. Quản trị nên kỳ vọng các so sánh và lưu ý trong báo cáo lợi ích của AI.

### Khách hàng và người dùng

Người dùng nhận kết quả: mã chạy dịch vụ của họ, câu trả lời cho yêu cầu của họ, tài liệu họ dựa vào. Họ được lợi khi chất lượng giữ vững và chịu thiệt khi không. Họ nên có thể tiếp cận một con người, và phản hồi của họ về các tương tác có hỗ trợ là bằng chứng then chốt về chất lượng.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Nhóm số của một hãng hàng không châu Âu có sáu đội sản phẩm xây và vận hành phần mềm đặt chỗ và vận hành. Các đội bắt đầu dùng một trợ lý lập trình AI cách đây một năm, và bảng điều khiển của nhóm báo cáo rằng 38 phần trăm số dòng được gộp là do AI tạo ra. Các con số dưới đây chỉ mang tính minh họa.

Trưởng bộ phận xuất sắc kỹ thuật không yên tâm về bảng điều khiển đó. Bà nhờ ba đội gắn thẻ các thay đổi có hỗ trợ qua nhật ký của công cụ, chỉ ở cấp đội, và chọn các thay đổi đối chứng có kích thước và khu vực tương tự. Trong một quý, thời gian trung vị từ commit đầu đến gộp ngắn hơn cho các thay đổi có hỗ trợ, 1,4 ngày so với 2,0. Tỷ lệ giữ lại của các thay đổi có hỗ trợ sau 30 ngày là 81 phần trăm so với 90 phần trăm cho các thay đổi đối chứng, và 12 phần trăm thay đổi có hỗ trợ cần một bản sửa tiếp theo trong 14 ngày so với 7 phần trăm. Tải rà soát kể cùng một câu chuyện: thời gian rà soát trung vị mỗi thay đổi cao hơn 35 phần trăm cho các thay đổi có hỗ trợ, và bách phân vị thứ 85 của kích thước thay đổi đã tăng. Lỗi lọt ra ngoài trên 100 thay đổi cao hơn một chút cho các thay đổi có hỗ trợ, dù mẫu nhỏ và sự khác biệt nằm trong biến thiên bình thường. Một mẫu 40 thay đổi có hỗ trợ cho thấy trong 31 cái tác giả có thể giải thích cách tiếp cận và các đánh đổi của nó tốt, trong 6 cái một phần, và trong 3 cái hoàn toàn không, chủ yếu ở các khu vực mã mới với tác giả. Ở bàn dịch vụ, các câu trả lời có hỗ trợ có tỷ lệ mở lại 7 phần trăm so với 6 cho các câu không có hỗ trợ, với mức hài lòng tương tự. Trong một khảo sát nhanh của đội, các kỹ sư mới đánh giá sự tự tin triển khai các tính năng cốt lõi mà không có công cụ là 2,6 trên 5, so với 4,1 của các kỹ sư có hơn ba năm trong nhóm.

Trưởng bộ phận xuất sắc kỹ thuật đưa kết quả đến các đội và không xếp hạng họ. Các đội thống nhất bốn thay đổi. Giới hạn kích thước thay đổi và một bảng phân công rà soát bảo vệ người rà soát. Tác giả giải thích ngắn gọn các thay đổi có hỗ trợ trong rà soát. Các kỹ sư mới làm việc theo cặp với người có kinh nghiệm cho các tính năng cốt lõi, và một bài tập hằng tháng không dùng công cụ giữ cho kỹ năng được thực hành. Bảng điều khiển bỏ tỷ lệ dòng được tạo và cho thấy giữ lại, làm lại, tải rà soát và lỗi lọt ra ngoài, có hỗ trợ so với đối chứng. Ba tháng sau, khoảng cách giữ lại thu hẹp còn 4 điểm, các bản sửa tiếp theo giảm xuống 8 phần trăm, và kiểm tra giải thích cải thiện. Một phó chủ tịch yêu cầu tỷ lệ dòng được tạo làm mục tiêu cho mọi đội. Trưởng bộ phận xuất sắc kỹ thuật giải thích các phát hiện và đề xuất tiếp tục theo dõi kết quả, thêm rằng các lợi ích là có thật ở một số nhiệm vụ và không ở những nhiệm vụ khác, và đội sẽ quyết định nơi dùng công cụ. Quyết định được ghi lại.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Nhịp độ bền vững và những con người có động lực bao gồm việc bảo vệ sự hiểu biết, nên hãy rà soát công việc có AI hỗ trợ cùng đội ở nhịp đều đặn và nhìn vào điều còn lại. Điều cần lưu ý là đo việc dùng AI của cá nhân biến một thực hành của đội thành giám sát.

### AI

Hãy đánh giá công việc có AI hỗ trợ theo điều còn lại sau rà soát và sản xuất, và theo việc mọi người có còn hiểu điều họ giao không. Ghép giữ lại và làm lại với một kiểm tra giải thích và một đánh giá sự tự tin khi không dùng công cụ, và giữ dữ liệu ở cấp đội. Điều cần lưu ý là bản nháp nhanh chuyển công sức sang người rà soát, nên hãy đo cả tải rà soát.

### Tự động hóa

Hãy gắn thẻ các thay đổi có AI hỗ trợ tự động nơi công cụ cho phép, và đo việc gắn thẻ theo độ phủ, vì công việc không có thẻ phá hỏng phép so sánh. Điều cần lưu ý là thẻ tự động có thể bị gỡ hoặc bị bỏ sót, nên hãy lấy mẫu.

### Phân tích

Hãy so sánh công việc có AI hỗ trợ và công việc khác trên cùng các thước đo, kèm số đếm và độ bất định. Quyết định được cung cấp thông tin là sự giúp đỡ của AI có thật ở đâu và thêm làm lại ở đâu. Điều cần lưu ý là hai nhóm công việc có thể khác nhau về loại, nên tránh các tuyên bố nhân quả từ một phép so sánh thô.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Các đội nhỏ có thể được lợi nhiều từ hỗ trợ và cũng tích lũy nợ ẩn nhanh. Hãy theo dõi giữ lại và làm lại từ sớm, giữ kiểm thử có ý nghĩa, và đảm bảo những người sẽ duy trì hệ thống hiểu nó. Đề phòng việc giao mã mà không ai giải thích được.

**Doanh nghiệp nhỏ.** Hỗ trợ có thể kéo giãn một đội rất nhỏ. Hãy đo trên một mẫu nhỏ: công việc có hỗ trợ cần sửa sau đó bao nhiêu lần. Giữ sao lưu, kiểm thử và rà soát của con người với mọi thứ hướng tới khách hàng, và bảo vệ sự hiểu biết của chủ về các hệ thống họ phụ thuộc.

**Doanh nghiệp lớn.** Quy mô khuếch đại cả lợi ích lẫn vấn đề. Hãy cung cấp hướng dẫn chung về gắn thẻ, giới hạn rà soát và các thước đo, so sánh giữa các đội cẩn thận mà không xếp hạng, và đầu tư vào năng lực rà soát và kiểm thử. Gồm rà soát an ninh và giấy phép của mã được tạo ra trong đường ống (xem chủ đề 7.2, Chỉ số tài sản phần mềm và giấy phép).

**Chính phủ và khu vực công.** Hệ thống công có vòng đời dài, trách nhiệm giải trình nghiêm ngặt và hệ quả lớn khi sai. Hãy yêu cầu trách nhiệm của con người truy vết được, kiểm thử cẩn thận, và tài liệu về cách AI được dùng. Ghi công việc có hỗ trợ trong bản ghi thay đổi, và đánh giá rủi ro về sự công bằng và an ninh (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là công cụ và phí sử dụng, công sức gắn thẻ và liên kết bản ghi, thời gian rà soát và sửa, kiểm thử thêm, và đào tạo. Một nghiên cứu so sánh tốn thời gian, nhưng rẻ so với một quyết định sai là mở rộng hoặc cấm.

Lợi tức là có thật nơi hỗ trợ giảm công sức mà không giảm chất lượng, và mất đi nơi nó chuyển công sức vào rà soát, làm lại và bảo trì. Hãy xây hồ sơ từ các thước đo của chính bạn: thời gian đến một thay đổi đã gộp và được giữ lại, làm lại và lỗi lọt ra ngoài so với đối chứng, tải rà soát, và mức hài lòng của người dùng và nhân viên. Tránh dùng các con số năng suất đã công bố làm ước lượng của bạn. Hãy nhớ các chi phí ẩn: sự hiểu biết giảm, mất kỹ năng và nợ kỹ thuật. Hãy trung thực về độ bất định (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Đếm dòng được tạo hay gợi ý được chấp nhận.** Chúng thưởng cho khối lượng. Hãy đo điều còn lại.
- **So sánh công việc có hỗ trợ ở nhiệm vụ dễ với công việc không hỗ trợ ở nhiệm vụ khó.** Kết quả tâng bốc hoặc phạt công cụ. Hãy ghép các nhiệm vụ.
- **Để năng lực rà soát tụt lại.** Chất lượng giảm âm thầm. Hãy giới hạn kích thước thay đổi và bảo vệ người rà soát.
- **Bỏ qua các thước đo hạ nguồn.** Chi phí xuất hiện sau. Hãy theo dõi làm lại, lỗi và độ ổn định.
- **Coi kiểm thử được tạo ra là chất lượng.** Chúng có thể qua mà không kiểm tra gì. Hãy kiểm thử các kiểm thử.
- **Phớt lờ kỹ năng.** Sự hiểu biết phai đi không ai nhận ra. Hãy theo dõi sự tự tin khi không dùng công cụ và thực hành.
- **Giám sát cá nhân.** Nó gieo nỗi sợ và giấu vấn đề. Hãy giữ dữ liệu ở cấp đội.
- **Tuyên bố chiến thắng trên một nghiên cứu ngắn, nhỏ.** Hãy chạy lại khi công cụ và thực hành thay đổi.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Đo điều còn lại | Số đếm đầu ra | Ấn tượng không chính thức về chất lượng | Công việc có hỗ trợ được gắn thẻ; giữ lại và làm lại được theo dõi so với đối chứng | Lỗi hạ nguồn, độ ổn định và tải rà soát được quản lý cùng nhau | Bằng chứng liên đội định hướng nơi dùng hỗ trợ; kết quả được chia sẻ rộng |
| Rà soát và sự hiểu biết | Rà soát như trước | Lo ngại về quá tải | Chuẩn mực kích thước thay đổi; kiểm tra giải thích được lấy mẫu | Năng lực rà soát được lên kế hoạch; thiên kiến tự động hóa được chống lại | Rà soát và sự hiểu biết được xây vào cách mọi đội làm việc với AI |
| Con người và kỹ năng | Không được xem xét | Giai thoại | Sự tự tin khi không dùng công cụ được khảo sát nhanh; một số thực hành | Phát triển kỹ năng được lên kế hoạch; xu hướng được quản lý | Việc học và tay nghề được bảo vệ trong toàn tổ chức; việc dùng AI được đồng thiết kế với nhân viên |

## Danh sách kiểm tra

- [ ] Công việc có AI hỗ trợ được gắn thẻ ở cấp đội qua nhật ký công cụ hoặc một quy ước nhẹ.
- [ ] Công việc đối chứng có kích thước, khu vực và rủi ro tương tự được định nghĩa.
- [ ] Giữ lại và làm lại sau khi gộp được theo dõi cho công việc có hỗ trợ và đối chứng.
- [ ] Lỗi lọt ra ngoài và tỷ lệ thay đổi thất bại được báo cáo bên cạnh bất kỳ thước đo tốc độ nào.
- [ ] Thời gian rà soát, số vòng và kích thước thay đổi được giám sát, kèm chuẩn mực về kích thước.
- [ ] Tác giả có thể giải thích các thay đổi có hỗ trợ, và một mẫu được kiểm tra mỗi quý.
- [ ] Kiểm thử được tạo ra được lấy mẫu để xem giá trị.
- [ ] Hỗ trợ có AI được so sánh về tỷ lệ mở lại, liên hệ lặp lại và mức hài lòng.
- [ ] Sự tự tin khi không dùng công cụ được khảo sát nhanh, và thực hành không dùng công cụ được lên kế hoạch.
- [ ] Dữ liệu sử dụng và chấp nhận của cá nhân không được dùng trong đánh giá.

## Lời nhắc AI

**Lập kế hoạch so sánh các thay đổi có và không có hỗ trợ.**

```text
We want to compare AI-assisted and unassisted changes for [team and system]. Our
data includes: [list fields]. Propose how to tag assisted changes without
relying on authors' memory, how to choose comparison changes of similar size and
risk, which measures to compare (retention, rework, review load, defects), the
period, and how to caveat the findings. Do not state expected results. List your
assumptions and threats to validity.
```

**Thiết kế một kiểm tra giải thích.**

```text
Design a short, supportive explanation check for sampled AI-assisted changes in
[language and domain]. Include how to sample, the questions a reviewer asks,
what a good explanation covers, how to record results at team level, and how to
use the findings for learning without grading people. List your assumptions and
risks of the check.
```

**Rà soát các thước đo hạ nguồn.**

```text
Here are our measures for [period]: speed [values], retention [values], rework
[values], review load [values], escaped defects [values], for assisted and
comparison work. Describe what the pattern suggests and what it does not, which
differences are within normal variation, and what to check next. Do not claim
causation. List your assumptions and the data I should add.
```

**Lập kế hoạch thực hành không dùng công cụ.**

```text
Propose a light program to keep core skills alive for a team that uses AI tools
daily: monthly unaided exercises, pairing between newer and experienced members,
and design discussions. Suggest how to fit it into the working week without
adding pressure and how to track its effect with the unaided confidence pulse.
List your assumptions and trade-offs.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một thước đo về công việc có AI hỗ trợ.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số công việc có AI hỗ trợ đo điều còn lại và mang vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Đo điều còn lại: giữ lại, làm lại, lỗi lọt ra ngoài và độ ổn định, so với công việc tương đương không có hỗ trợ.
- Bảo vệ năng lực rà soát và giữ rà soát sâu, vì nó giới hạn công việc có hỗ trợ có thể chảy an toàn nhanh đến đâu.
- Kiểm tra rằng tác giả giải thích được điều họ giao, và chú ý kỹ năng đang lớn lên hay phai đi.
- Lấy mẫu kiểm thử và đầu ra được tạo ra để xem giá trị thật.
- Đọc các tuyên bố năng suất đã công bố như những nghiên cứu đơn lẻ, và đo công việc của chính bạn.
- Giữ dữ liệu sử dụng cá nhân ra khỏi đánh giá.

## Tài liệu tham khảo và đọc thêm

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
