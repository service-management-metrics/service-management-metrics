# Sức khỏe đội nhóm và trải nghiệm nhà phát triển

**Các đội làm việc tốt nhất khi phản hồi nhanh, gánh nặng lên trí óc vừa phải, và họ tìm được những khoảng tập trung dài, nên hãy đo những điều kiện đó cùng đội, gỡ các trở ngại chúng bộc lộ, và đừng bao giờ dùng các con số để xếp hạng con người.**

## Tổng quan và động lực

Các nguyên tắc của Tuyên ngôn Linh hoạt yêu cầu chúng ta xây dựng dự án quanh những cá nhân có động lực, cho họ môi trường và sự hỗ trợ họ cần, và tin tưởng họ hoàn thành công việc. Chúng cũng yêu cầu các nhà bảo trợ, lập trình viên và người dùng có thể duy trì một nhịp độ không đổi vô thời hạn, và đội suy ngẫm đều đặn về cách trở nên hiệu quả hơn. Các thước đo sức khỏe đội và trải nghiệm nhà phát triển là cách những nguyên tắc đó trở thành điều kiểm tra được. Chúng hỏi làm việc ở đây là như thế nào, và cái gì cản đường.

[Trải nghiệm nhà phát triển](https://en.wikipedia.org/wiki/Developer_experience) là tổng của các tương tác mà lập trình viên có với công cụ, quy trình và con người họ làm việc cùng. Ý tưởng này rộng hơn kỹ thuật phần mềm. Người vận hành, nhân viên bàn dịch vụ, nhà phân tích, và bất kỳ ai khác xây hoặc vận hành một dịch vụ đều có một trải nghiệm về môi trường của họ. Chủ đề này dùng "trải nghiệm nhà phát triển" cho các kỹ sư và "sức khỏe đội" cho nhóm rộng hơn, và cùng các thước đo áp dụng cho cả hai.

Hai khung nghiên cứu được trích dẫn rộng rãi. Khung SPACE, do Nicole Forsgren và các đồng nghiệp công bố năm 2021, lập luận rằng [năng suất](https://en.wikipedia.org/wiki/Productivity) của lập trình viên không thể rút gọn thành một con số, và đề xuất năm chiều: sự hài lòng và sức khỏe tinh thần, hiệu suất, hoạt động, giao tiếp và cộng tác, và hiệu quả và dòng chảy. Một bài tiếp nối năm 2023 của Abi Noda, Margaret-Anne Storey, Nicole Forsgren và Michaela Greiler, mang tên "DevEx: What Actually Drives Productivity," tập trung vào ba chiều mà lập trình viên có thể cảm nhận và tổ chức có thể thay đổi: vòng phản hồi, tải nhận thức và trạng thái dòng chảy. Cả hai bài đều khuyến nghị kết hợp dữ liệu khảo sát về nhận thức với dữ liệu từ hệ thống về quy trình làm việc, và cả hai đều cảnh báo không dùng bất kỳ thước đo đơn lẻ nào, đặc biệt là một số đếm hoạt động, làm đại diện cho năng suất.

Ba chiều DevEx là điểm khởi đầu thực tế.

- **Vòng phản hồi.** Một người biết kết quả của điều họ đã làm nhanh đến đâu? Bản dựng chậm, kiểm thử chậm, rà soát chậm và phê duyệt chậm mỗi thứ thêm chờ đợi, và chờ đợi phá vỡ sự tập trung. Phản hồi nhanh cũng là một chỗ dựa cốt lõi cho phân phối liên tục.
- **[Tải nhận thức](https://en.wikipedia.org/wiki/Cognitive_load).** Một người phải giữ bao nhiêu thứ trong đầu để hoàn thành một việc? Hệ thống phức tạp, tài liệu kém, quyền sở hữu không rõ và nhiều công cụ làm tăng tải. Giảm nó giải phóng năng lực cho công việc quan trọng.
- **[Trạng thái dòng chảy](https://en.wikipedia.org/wiki/Flow_(psychology)).** Một người có tìm được những khoảng không bị gián đoạn để tập trung không? Các cuộc họp, thông báo, yêu cầu không kế hoạch và chuyển đổi ngữ cảnh đều bào mòn nó.

Các thước đo trong lĩnh vực này đặc biệt dễ bị lạm dụng. Số lượng commit, pull request, phiếu đã đóng hay số giờ trực tuyến là các thước đo hoạt động. Chúng dễ thu thập và nói cho bạn rất ít về việc mọi người có làm việc tốt được không, và chúng mời gọi sự lợi dụng. Các thước đo nhận thức mang tính chủ quan và có giá trị, và chúng có thể bị méo nếu mọi người sợ hậu quả của một câu trả lời trung thực. Bất kỳ thước đo nào về con người đều có thể trượt thành giám sát. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng với một cạnh đạo đức: khi một thước đo về con người trở thành mục tiêu, mọi người ngừng nói sự thật về công việc của họ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Chủ đề này xây trên trải nghiệm của người dùng nội bộ mô tả trước đó (xem chủ đề 6.4, Trải nghiệm người dùng và nhân viên) và tiếp tục trong các chủ đề kế tiếp về sức khỏe tinh thần, cộng tác, kỹ năng và cải tiến.

## Nguyên tắc chính

- **Đo các điều kiện, không phải con người.** Hỏi về môi trường và các trở ngại của nó, và báo cáo ở cấp đội.
- **Kết hợp nhận thức với dữ liệu quy trình làm việc.** Điều mọi người cảm thấy và điều hệ thống ghi lại đều bỏ sót một phần của bức tranh.
- **Để đội sở hữu buổi kiểm tra sức khỏe của mình.** Những người gần công việc nhất chọn câu hỏi và đọc kết quả trước.
- **Không bao giờ dùng các thước đo này để xếp hạng hay đánh giá cá nhân.** Điều đó sẽ chấm dứt những câu trả lời trung thực.
- **Tránh coi số đếm hoạt động là năng suất.** Số đếm commit, phiếu hay giờ không phải là kết quả.
- **Hành động rõ ràng theo điều bạn nghe được.** Hãy gỡ trở ngại, hoặc nói vì sao không.
- **Bảo vệ nhịp độ bền vững.** Một đội chạy nóng vô thời hạn đang vay mượn từ tương lai của mình.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian vòng phản hồi | Thời gian để một người nhận được kết quả của một hành động phổ biến, theo loại vòng | trung vị và bách phân vị thứ 85 của số phút hoặc giờ cho dựng, chạy kiểm thử, chờ rà soát mã và triển khai, theo đội | phút hoặc giờ | Dấu thời gian của đường ống và công cụ rà soát, tổng hợp theo đội | Quản lý phát hành và triển khai; cải tiến liên tục | Phản hồi nhanh trong phân phối liên tục | Hằng tuần |
| Tỷ lệ thời gian tập trung | Tỷ lệ thời gian làm việc trong các khối không bị gián đoạn có độ dài tối thiểu đã thống nhất, do đội báo cáo | số giờ trong khối tập trung do đội báo cáo / số giờ làm việc, thu thập qua một khảo sát nhanh ngắn | phần trăm | Khảo sát nhanh của đội; dữ liệu lịch chỉ khi đội chọn tham gia và được tổng hợp | Cải tiến liên tục; quản lý tri thức | Thời gian được bảo vệ cho công việc sâu | Hằng tháng |
| Đánh giá tải nhận thức | Đánh giá của đội về mức khó để hiểu và thay đổi một hệ thống hay quy trình được nêu tên | đánh giá trung bình và độ phân tán trên một thang ngắn đã thống nhất, theo hệ thống | điểm thang | Khảo sát nhanh ngắn liên kết với một hệ thống hay quy trình | Thiết kế dịch vụ; quản lý tri thức | Hiểu biết chung về công việc | Hằng quý |
| Thời gian giải quyết trở ngại | Thời gian từ khi đội nêu một trở ngại đến khi nó được gỡ hoặc một quyết định không gỡ được ghi lại | trung vị và bách phân vị thứ 85 của số ngày từ lúc nêu đến lúc giải quyết hoặc quyết định | ngày | Danh sách hoặc công cụ theo dõi trở ngại | Cải tiến liên tục; quản lý vấn đề | Trở ngại được gỡ bỏ | Hằng tháng |
| Xu hướng kiểm tra sức khỏe đội | Đánh giá của chính đội trên các chiều nó chọn, được theo dõi theo thời gian | thay đổi trong đánh giá các chiều do đội chọn giữa các lần kiểm tra | điểm thang | Buổi kiểm tra sức khỏe đội, do đội sở hữu | Cải tiến liên tục | Đội suy ngẫm về cách trở nên hiệu quả hơn | Hằng tháng hoặc hằng quý |
| Mức hài lòng với công cụ và quy trình | Đánh giá của đội về mức hài lòng với các công cụ và quy trình họ dùng hằng ngày | đánh giá trung bình hoặc tỷ lệ thuận lợi cho từng công cụ hay quy trình được nêu tên | điểm thang hoặc phần trăm | Khảo sát nhanh ngắn | Quản lý mức dịch vụ; cải tiến liên tục | Sự phù hợp của môi trường với công việc | Hằng quý |
| Độ phủ các chiều | Số chiều SPACE được bao quát bởi các thước đo mà một đội thực sự dùng | số trong năm chiều có ít nhất một thước đo đang dùng | số đếm (0 đến 5) | Sổ đăng ký chỉ số | Đo lường và báo cáo; quản trị | Các thước đo cân bằng | Hằng năm |

Hãy tổng hợp mọi thứ ở cấp đội và đặt kích thước nhóm tối thiểu, ví dụ không có kết quả nào cho một nhóm nhỏ hơn năm người. Thời gian tập trung là mô tả của chính đội, và bất kỳ con số nào suy ra từ lịch đều là tùy chọn, được tổng hợp và do đội đồng ý. Thời gian vòng phản hồi đến từ hệ thống và mô tả đường ống, không phải con người. Độ phủ các chiều là một phép kiểm tra chương trình đo lường, nhằm ngăn việc dựa vào một loại thước đo duy nhất.

## Khuyến nghị

### Bắt đầu với các điều kiện mọi người làm việc trong đó

**1. Hỏi đội điều gì làm họ chậm lại.** Hãy bắt đầu bằng một cuộc trò chuyện, không phải một khảo sát: điều gì lãng phí thời gian của bạn, điều gì khó hiểu, và điều gì ngắt quãng bạn nhiều nhất? Ghi các câu trả lời bằng lời của chính đội. Cuộc trò chuyện tìm ra những vấn đề mà không bảng điều khiển nào thấy, và nó xây dựng lòng tin mà các khảo sát sau này cần. Thống nhất hai hoặc ba điều để đo.

**2. Dùng ba chiều DevEx làm một lăng kính.** Với mỗi chiều vòng phản hồi, tải nhận thức và trạng thái dòng chảy, hãy chọn một câu hỏi nhận thức và, nơi có thể, một thước đo hệ thống. Với vòng phản hồi, ghép "bạn hài lòng đến đâu với thời gian dựng?" với thời lượng dựng. Với tải nhận thức, hỏi mức khó để hiểu và thay đổi một hệ thống được nêu tên. Với dòng chảy, hỏi mọi người làm việc không bị gián đoạn thường xuyên đến đâu. Ghép điều mọi người nói với điều hệ thống ghi lại, và xem xét những chỗ không khớp.

**3. Bao quát nhiều chiều của SPACE.** Hãy chọn các thước đo từ ít nhất ba trong năm chiều để không loại dữ liệu nào chi phối. Sự hài lòng và sức khỏe tinh thần, cộng tác, và hiệu quả và dòng chảy thường quan trọng nhất với một đội vận hành dịch vụ. Hãy xử lý thước đo hoạt động hết sức cẩn thận, và chỉ dùng chúng làm bối cảnh. Thước đo độ phủ các chiều giữ cho điều này trung thực.

### Đo một cách cẩn trọng

**4. Để đội sở hữu và đọc buổi kiểm tra sức khỏe của mình trước.** Một buổi kiểm tra sức khỏe đội là một bài tự đánh giá ngắn trên các chiều đội chọn, như niềm vui, sự hỗ trợ, tốc độ, học hỏi và sự dễ dàng khi phát hành. Đội đọc và thảo luận kết quả của chính mình trước khi bất kỳ ai khác thấy bản tóm tắt. Những người khác thấy xu hướng và các trở ngại đội nhờ giúp, không phải điểm số để so sánh. Điều này giữ công cụ là một hỗ trợ học hỏi, và nó phụ thuộc vào [an toàn tâm lý](https://en.wikipedia.org/wiki/Psychological_safety), niềm tin chung rằng mọi người sẽ không bị trừng phạt khi lên tiếng.

**5. Đo thời gian các vòng phản hồi quan trọng.** Hãy đo thời lượng của các vòng mà mọi người phàn nàn: dựng cục bộ, bộ kiểm thử, chờ rà soát mã, triển khai lên môi trường kiểm thử. Báo cáo trung vị và bách phân vị thứ 85, vì cái đuôi chậm gây hại nhiều hơn giá trị trung bình gợi ý. Chia sẻ các con số với đội sở hữu đường ống, và đặt cải tiến thành một phần công việc thường xuyên (xem chủ đề 2.7, Chỉ số pull request và rà soát mã).

**6. Bảo vệ sự tập trung, và đo nó một cách nhẹ nhàng.** Hỏi về sự tập trung trong khảo sát nhanh, và xem điều gì gây gián đoạn: tải họp, thông báo, yêu cầu không kế hoạch. Nếu một đội muốn xem các mẫu hình lịch, hãy làm với sự đồng ý của họ và tổng hợp kết quả. Không bao giờ theo dõi hoạt động hay sự hiện diện của cá nhân. Mục đích là tìm các gián đoạn mang tính cấu trúc để gỡ, như một cuộc họp có thể là một tài liệu.

**7. Theo dõi trở ngại đến khi giải quyết.** Hãy giữ một danh sách hiển thị các trở ngại đội đã nêu, và đo mất bao lâu để chúng được giải quyết hoặc được chủ ý gác lại. Một danh sách dài không bao giờ co lại dạy mọi người rằng nêu vấn đề là vô ích. Quyết định không gỡ một trở ngại, kèm lý do, được tính là một sự giải quyết.

### Dùng kết quả để cải thiện

**8. Hành động với một hoặc hai việc mỗi lần.** Hãy chọn trở ngại có giá trị cao nhất, sửa nó, và nói với đội. Hành động hiển thị làm được nhiều hơn cho lòng tin so với một báo cáo dài. Chống lại cám dỗ khởi động nhiều sáng kiến cùng lúc.

**9. Ghép thước đo về con người với thước đo kết quả.** Hãy xem vòng phản hồi và tải nhận thức liên quan thế nào đến kết quả phân phối và ổn định (xem chủ đề 2.8, Chỉ số DORA). Đừng tuyên bố quan hệ nhân quả từ tương quan trong dữ liệu của chính bạn. Dùng sự ghép đôi để tìm câu hỏi để khám phá, như liệu các đội có rà soát chậm hơn cũng có thời gian chu trình dài hơn.

**10. Giữ số đếm hoạt động ra khỏi cuộc trò chuyện.** Đừng báo cáo commit, dòng mã hay phiếu đã đóng theo từng người. Số đếm đầu ra của đội có thể hữu ích cho dòng chảy, nhưng chúng nói rất ít về sức khỏe. Nếu ai đó yêu cầu chỉ số hoạt động cá nhân, hãy giải thích nghiên cứu và đưa ra các thước đo điều kiện thay thế.

### Bảo vệ con người

**11. Đặt quy tắc quyền riêng tư trước khi thu thập.** Hãy viết ra cái gì được thu thập, vì sao, ai thấy, giữ bao lâu, và điều gì sẽ không bao giờ được làm với nó. Tổng hợp ở cấp đội, triệt tiêu các nhóm nhỏ, và để đại diện của những người liên quan rà soát các quy tắc. Đừng dùng bất kỳ dữ liệu nào trong số này trong đánh giá hiệu suất, thăng chức hay kỷ luật.

**12. Làm nhịp độ bền vững thành mặc định.** Hãy để ý các dấu hiệu một đội đang chạy nóng: một chuỗi dài sự cố ngoài giờ, trạng thái khẩn cấp thường trực, danh sách trở ngại tăng, mức hài lòng giảm. Coi những điều này là vấn đề hệ thống cần sửa bằng phạm vi, nhân sự hoặc ưu tiên. Một nhịp độ không đổi mà mọi người theo được là mục tiêu thiết kế, và nó hỗ trợ chất lượng, học hỏi và giữ chân nhân sự (xem chủ đề 9.2, Chỉ số hài lòng và sức khỏe tinh thần).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian vòng phản hồi | Loại trường hợp chậm; đo một đường nhanh mà phần lớn công việc không đi qua | Báo cáo bách phân vị thứ 85; định nghĩa điểm bắt đầu và kết thúc của mỗi vòng trong sổ đăng ký |
| Tỷ lệ thời gian tập trung | Chặn thời gian lịch mà không tập trung; báo cáo tập trung thổi phồng để làm vừa lòng quản lý | Khảo sát nhanh do đội sở hữu; so sánh với nguyên nhân gián đoạn; không báo cáo cá nhân |
| Đánh giá tải nhận thức | Đánh giá hệ thống thấp để tránh soi xét; chọn hệ thống dễ để đánh giá | Đánh giá một danh sách hệ thống cố định; so sánh với thời gian tiếp nhận và mẫu hình sự cố |
| Thời gian giải quyết trở ngại | Đóng trở ngại mà không sửa; từ chối ghi nhật ký trở ngại | Đội xác nhận việc giải quyết; tỷ lệ trở ngại được mở lại |
| Xu hướng kiểm tra sức khỏe đội | Quản lý gây áp lực đòi điểm tốt; đội chỉnh điểm để tránh sự chú ý | Đội sở hữu kết quả; xu hướng chỉ chia sẻ khi đội đồng ý |
| Mức hài lòng với công cụ và quy trình | Khảo sát người dùng hài lòng; huấn luyện nhân viên trả lời cho tốt | Tỷ lệ phản hồi và cơ cấu; đọc bình luận; gắn với thước đo hệ thống |
| Độ phủ các chiều | Tính một chiều bằng một thước đo tượng trưng | Kiểm tra mỗi thước đo được tính đều được dùng trong một quyết định |

Một kết quả đọc lành mạnh là các vòng phản hồi ngắn hơn và ổn định hơn, tải nhận thức giảm trên các hệ thống then chốt, các đội báo cáo sự tập trung thật, trở ngại được nêu và giải quyết, các buổi kiểm tra sức khỏe mà đội tin tưởng, và không dùng dữ liệu về cá nhân.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Khảo sát nhận thức | Nắm bắt điều hệ thống không thể; chi phí thấp | Chủ quan; dễ bị ảnh hưởng bởi nỗi sợ và sự mệt mỏi |
| Thước đo quy trình làm việc | Khách quan; liên tục | Bỏ lỡ cảm xúc và nguyên nhân; rủi ro giám sát |
| Buổi kiểm tra sức khỏe do đội sở hữu | Trung thực và hữu ích cho đội | Khó so sánh; khó mở rộng |
| Khảo sát chuẩn toàn công ty | So sánh được giữa các đội | Ít liên quan hơn; bị dùng để xếp hạng |
| Số đếm hoạt động | Dễ thu thập | Đại diện kém; dễ bị lợi dụng |
| Thước đo tập trung vào điều kiện | Chỉ ra nguyên nhân có thể sửa | Cần công sức theo đuổi |
| Khảo sát nhanh thường xuyên | Kịp thời | Mệt mỏi vì khảo sát |
| Khảo sát hằng năm | Gánh nặng thấp | Chậm; lỗi thời |

Câu trả lời dạng văn xuôi là kết hợp các buổi kiểm tra sức khỏe do đội sở hữu và các khảo sát nhanh ngắn với các thước đo quy trình làm việc về những vòng mà mọi người phàn nàn, tránh số đếm hoạt động, và bảo vệ quyền riêng tư. Hãy dùng so sánh toàn công ty một cách tiết kiệm, và không bao giờ để xếp hạng các đội.

## Câu hỏi để thảo luận với đội nhóm

**1. Vòng phản hồi chậm nhất trong ngày làm việc của chúng ta là gì, và thực sự mất bao lâu?**
Chọn vòng mà mọi người phàn nàn nhiều nhất. Đo thời gian nó từ hệ thống và so sánh với điều mọi người nói. Người điều phối nên ghi lại những điều bất ngờ, theo cả hai hướng. Thống nhất một thay đổi sẽ rút ngắn nó, và ai sở hữu.

**2. Hệ thống nào chúng ta ngại thay đổi, và cái gì làm nó khó?**
Nêu tên hệ thống. Khó khăn nằm ở mã, tài liệu, công cụ, hay tri thức nằm trong vài cái đầu? Hỏi một cải tiến nào sẽ hạ tải nhiều nhất. Lên kế hoạch cách biết liệu nó có hiệu quả.

**3. Lần cuối mỗi người trong chúng ta có một khối thời gian dài không bị gián đoạn là khi nào, và cái gì đã làm gián đoạn những lần thất bại?**
Chia sẻ trung thực và không đổ lỗi. Liệt kê các gián đoạn và phân loại chúng thành cấu trúc (họp, thông báo, yêu cầu không kế hoạch) và ngẫu nhiên. Chọn một gián đoạn cấu trúc để giảm.

**4. Trở ngại nào chúng ta đã nêu hơn một lần mà không có kết quả?**
Nhìn vào danh sách trở ngại. Với mỗi mục tồn tại lâu, hỏi ai có thể giải quyết nó và cái gì đang chặn họ. Nếu đội đã ngừng nêu trở ngại, hãy thảo luận vì sao. Thống nhất một cái để leo thang kèm bằng chứng.

**5. Điều gì sẽ khiến chúng ta ngần ngại đưa ra câu trả lời trung thực cho buổi kiểm tra sức khỏe?**
Thảo luận nỗi lo về cách kết quả có thể được dùng. Người điều phối nên ghi lại các mối lo và thống nhất quy tắc: ai thấy dữ liệu, điều gì sẽ không bao giờ được làm với nó. Nếu các quy tắc không được tin, hãy nói ra, và quyết định điều gì sẽ giành được lòng tin.

**6. Thước đo nào của chúng ta có thể tăng trong khi công việc tệ đi?**
Liệt kê các thước đo và nghĩ cách mỗi cái có thể được cải thiện mà không giúp ích cho ai. Gán một rào chắn cho mỗi cái. Bỏ bất kỳ thước đo nào không dùng trong quyết định.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối biết rõ nhất điều gì làm họ chậm và là chủ sở hữu buổi kiểm tra sức khỏe của chính họ. Họ nên nêu tên các trở ngại, đo thời gian các vòng họ kiểm soát, và cùng đội quyết định sửa gì trước. Họ nên chống lại áp lực báo cáo hoạt động cá nhân và khăng khăng các thước đo cấp đội.

### Đội dịch vụ và vận hành

Các đội vận hành gánh trực, ngắt quãng và công việc không kế hoạch bào mòn sự tập trung và nhịp độ. Họ nên nêu tải mang tính cấu trúc như một vấn đề hệ thống, đo các vòng của công cụ của chính họ, và giữ một vòng luân phiên bền vững. Họ được lợi từ danh sách trở ngại chung với các đội phân phối, vì nhiều trở ngại vượt qua ranh giới.

### Lãnh đạo và quản trị

Lãnh đạo đặt ra các điều kiện và quyết định dữ liệu được dùng thế nào. Họ nên tài trợ các bản sửa mà thước đo điều kiện bộc lộ, bảo vệ các quy tắc quyền riêng tư, và yêu cầu xu hướng và trở ngại thay cho điểm số để so sánh. Quản trị nên coi yêu cầu về chỉ số hoạt động cá nhân là lý do để xem lại các quy tắc, và nên kỳ vọng công việc cải tiến hiển thị.

### Khách hàng và người dùng

Người dùng được lợi từ các đội có thể làm việc bình tĩnh và học nhanh, vì vấn đề của họ được giải quyết tốt. Họ cũng nhận ra khi một đội quá tải: câu trả lời chậm hơn, sai lầm lặp lại, tỷ lệ nghỉ việc cao. Phản hồi của họ là bằng chứng về sức khỏe đội từ bên ngoài, và họ xứng đáng được trung thực về cách các bản sửa được ưu tiên.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Nhóm công nghệ của một công ty bảo hiểm quốc gia có 14 đội xây và vận hành các dịch vụ hợp đồng và bồi thường. Lãnh đạo yêu cầu một bảng điều khiển năng suất lập trình viên. Yêu cầu đầu tiên là commit và phiếu đã đóng theo từng người. Trưởng bộ phận hiệu quả kỹ thuật đề xuất một cách tiếp cận khác. Các con số dưới đây chỉ mang tính minh họa.

Bà bắt đầu bằng các cuộc trò chuyện ở năm đội. Ba trở ngại xuất hiện lặp đi lặp lại: bộ kiểm thử mất 70 phút, việc rà soát mã chờ rất lâu ở các đội phụ thuộc vào hai người rà soát cấp cao, và không ai cảm thấy có thể thay đổi dịch vụ tính toán bồi thường cũ. Bà đo những gì có thể từ hệ thống. Vòng dựng và kiểm thử trung vị là 58 phút với bách phân vị thứ 85 là 92. Thời gian chờ rà soát đầu tiên trung vị là 9 giờ làm việc và bách phân vị thứ 85 là 31 giờ. Bà thêm một khảo sát nhanh hằng quý ngắn với ba câu hỏi DevEx, với nhóm báo cáo tối thiểu là năm. Đánh giá tải nhận thức cho dịch vụ tính toán bồi thường là 4,4 trên thang năm điểm trong đó 5 là rất khó, so với 2,6 cho cổng hợp đồng. Thời gian tập trung do các đội báo cáo là khoảng 3 giờ mỗi ngày, với các cuộc họp và yêu cầu không kế hoạch là nguyên nhân chính. Mỗi đội tự chạy buổi kiểm tra sức khỏe của mình trên các chiều họ chọn, và chỉ đọc xu hướng tổng hợp.

Nhóm thống nhất bốn hành động với các đội. Bộ kiểm thử được tách và song song hóa, và bách phân vị thứ 85 giảm từ 92 xuống 41 phút trong hai tháng. Một bảng phân công rà soát phân tán tải ra ngoài hai người rà soát cấp cao, và thời gian chờ ở bách phân vị thứ 85 giảm xuống 14 giờ. Ba đội đồng ý có một khối hằng tuần không họp, và một đội làm lại cách các yêu cầu không kế hoạch đến với họ. Dịch vụ tính toán bồi thường trở thành một dự án học hỏi chung, với làm việc theo cặp và tài liệu, và đánh giá tải nhận thức của nó giảm xuống 3,5 qua hai quý. Thời gian tập trung được báo cáo tăng lên khoảng 4 giờ.

Khi một quản lý cấp cao lại yêu cầu số commit cá nhân, trưởng bộ phận hiệu quả kỹ thuật giải thích nghiên cứu SPACE và DevEx và đưa ra bảng điều khiển điều kiện. Quyết định được ghi lại, cùng các quy tắc quyền riêng tư nói rằng hoạt động cá nhân sẽ không bao giờ được dùng trong đánh giá. Một đội đề nghị kết quả kiểm tra sức khỏe của họ không được tóm tắt cho lãnh đạo quý này, và yêu cầu được chấp thuận. Tỷ lệ nghỉ việc ở các đội liên quan giảm trong năm sau, và bà ghi chú rằng bà không thể chứng minh mối liên hệ và sẽ không tuyên bố nó.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy đo các điều kiện như vòng phản hồi và thời gian tập trung cùng đội, và gỡ các trở ngại chúng bộc lộ. Điều cần lưu ý là dùng các con số để xếp hạng con người sẽ phá hủy dữ liệu.

### AI

Trợ lý lập trình và viết bằng AI thay đổi vòng phản hồi và tải nhận thức, theo hướng tốt hơn hoặc tệ hơn. Hãy hỏi đội về lợi ích và gánh nặng, và ghép mức sử dụng với việc làm lại và sức khỏe tinh thần. Điều cần lưu ý là thống kê sử dụng báo cáo theo từng người biến thành giám sát.

### Tự động hóa

Hãy tự động hóa việc thu thập thời gian dựng, kiểm thử và rà soát, và đo chuỗi công cụ theo độ chậm và thất bại. Điều cần lưu ý là công cụ nhanh vẫn có thể giấu một tổ chức chậm, nên hãy kết hợp dữ liệu với trò chuyện của đội.

### Phân tích

Hãy cho thấy xu hướng theo đội kèm số phản hồi, và đặt kích thước nhóm tối thiểu. Quyết định được cung cấp thông tin là gỡ trở ngại nào tiếp theo. Điều cần lưu ý là các đội nhỏ không thể ẩn danh.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Mọi người đều biết nhau, nên trò chuyện thắng khảo sát. Hãy đo thời gian các vòng phản hồi chính, giữ bản dựng nhanh, và để ý các dấu hiệu nhịp độ không bền vững, vì một vài người gánh rất nhiều. Đừng nhập một chương trình khảo sát lớn.

**Doanh nghiệp nhỏ.** Một đội nhỏ có thể là một hoặc hai người vừa xây vừa hỗ trợ. Rủi ro chính của họ là gián đoạn và phụ thuộc vào cá nhân. Hãy giữ một danh sách trở ngại đơn giản, đảm bảo có người thay khi vắng mặt, và thường xuyên hỏi nhau cái gì đang cản đường. Dữ liệu cấp cá nhân vốn dĩ định danh, nên hãy dựa vào trò chuyện.

**Doanh nghiệp lớn.** Quy mô mang lại sự đa dạng và cám dỗ so sánh. Hãy cung cấp một bộ công cụ chung (câu hỏi khảo sát nhanh, thời gian vòng) trong khi để các đội sở hữu buổi kiểm tra sức khỏe của họ. Tổng hợp cẩn thận, chia sẻ các mẫu hình giữa các đội để lan truyền bản sửa, và giữ xếp hạng ra ngoài. Mời hội đồng lao động hoặc đại diện nhân viên tham gia nơi họ tồn tại.

**Chính phủ và khu vực công.** Mua sắm, quy tắc an ninh và chuỗi phê duyệt kéo dài vòng phản hồi, và nhân viên có thể có sự bảo vệ mạnh về giám sát. Hãy đo các vòng, mời đại diện tham gia đặt quy tắc dữ liệu, và dùng các phát hiện để đơn giản hóa quy trình. Công chức được thúc đẩy bởi giá trị phục vụ được lợi từ việc gỡ trở ngại hiển thị (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là thời gian của các đội cho buổi kiểm tra sức khỏe và khảo sát nhanh, một chút công cụ đo cho đường ống và công cụ rà soát, một nhà phân tích hoặc huấn luyện viên giúp diễn giải kết quả và điều phối, và thời gian kỹ thuật để gỡ trở ngại. Hầu hết các chi phí này nhỏ so với chi phí của các vòng chậm nhân lên qua nhiều người.

Lợi tức đến từ thời gian thu hồi được, ít làm lại hơn, giữ chân nhân sự tốt hơn, và học nhanh hơn. Hãy ước lượng nó từ dữ liệu của chính bạn: số giờ mỗi tuần mất vì chờ bản dựng và rà soát trên cả nhóm, chi phí tuyển dụng và tiếp nhận để thay người nghỉ việc, và các mẫu hình sự cố hoặc lỗi gắn với các đội quá tải. Hãy thận trọng khi quy phút thành tiền, và nêu các giả định. Tránh các tuyên bố từ các nghiên cứu đã công bố về mức tăng năng suất trừ khi bạn truy được phương pháp và mức phù hợp của chúng. Hãy nhớ chi phí của việc làm sai: một chương trình bị coi là giám sát làm hại lòng tin và chất lượng của mọi khảo sát sau này (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Bảng điều khiển năng suất cá nhân.** Chúng đo hoạt động, mời gọi lợi dụng và làm hại lòng tin. Hãy đo các điều kiện ở cấp đội.
- **Dùng điểm kiểm tra sức khỏe để so sánh các đội.** Các đội khi đó quản lý điểm số. Hãy để các đội sở hữu kết quả của họ.
- **Khảo sát không có hành động.** Mọi người ngừng trả lời. Hãy sửa một thứ hiển thị mỗi chu kỳ.
- **Đo thời gian trực tuyến hay sự hiện diện.** Nó thưởng cho sự hiện hữu và phạt sự tập trung. Hãy đo vòng và trở ngại.
- **Một thước đo cho mọi thứ.** Nó bỏ lỡ phần lớn bức tranh. Hãy bao quát nhiều chiều.
- **Phớt lờ cái đuôi.** Trung vị giấu những vòng chậm gây hại. Hãy báo cáo bách phân vị.
- **Đổ lỗi cho con người về vấn đề hệ thống.** Trở ngại thường mang tính cấu trúc. Hãy sửa cấu trúc.
- **Chạy nóng như bình thường.** Khẩn cấp thường trực làm kiệt sức. Hãy coi quá tải kéo dài là thất bại của việc lập kế hoạch.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Hiểu điều kiện | Giai thoại | Thỉnh thoảng khảo sát | Trò chuyện và khảo sát nhanh đều đặn về vòng phản hồi, tải và dòng chảy | Dữ liệu nhận thức và quy trình làm việc được kết hợp, với xu hướng cấp đội | Cái nhìn chung về điều kiện qua các đội và nhà cung cấp; các đội cùng thiết kế thước đo |
| Quyền sở hữu và đạo đức | Quản lý đọc mọi thứ | Sự cẩn trọng không chính thức | Buổi kiểm tra sức khỏe do đội sở hữu; quy tắc quyền riêng tư bằng văn bản | Quy tắc được rà soát cùng đại diện; không dùng cá nhân được thực thi | Quy tắc và thực hành được kiểm toán độc lập; các đội kiểm soát việc chia sẻ dữ liệu |
| Hành động | Phàn nàn không được giải quyết | Sửa tùy hứng | Danh sách trở ngại có người sở hữu; một hoặc hai bản sửa mỗi chu kỳ | Bản sửa được theo dõi và liên kết với kết quả; nhịp độ bền vững được giám sát | Việc gỡ trở ngại được xây vào lập kế hoạch; việc học được chia sẻ rộng |

## Danh sách kiểm tra

- [ ] Các đội đã nói bằng lời của họ điều gì làm họ chậm.
- [ ] Ít nhất một câu hỏi nhận thức và một thước đo hệ thống bao quát mỗi chiều vòng phản hồi, tải nhận thức và dòng chảy.
- [ ] Các thước đo đến từ ít nhất ba chiều SPACE.
- [ ] Mỗi đội sở hữu buổi kiểm tra sức khỏe của mình và đọc kết quả trước.
- [ ] Thời gian vòng phản hồi được báo cáo dưới dạng trung vị và bách phân vị thứ 85.
- [ ] Một danh sách trở ngại hiển thị có người sở hữu, và thời gian giải quyết được theo dõi.
- [ ] Kết quả được báo cáo ở cấp đội với kích thước nhóm tối thiểu.
- [ ] Quy tắc quyền riêng tư bằng văn bản nêu rằng dữ liệu cá nhân sẽ không được dùng trong đánh giá.
- [ ] Số đếm hoạt động không được báo cáo như năng suất.
- [ ] Đội thấy ít nhất một bản sửa mỗi chu kỳ.

## Lời nhắc AI

**Soạn câu hỏi khảo sát nhanh cho ba chiều DevEx.**

```text
Draft a short pulse of no more than six questions for [type of team] covering
feedback loops, cognitive load, and flow state. Use neutral wording, a
consistent scale, and one open comment. For each question suggest a matching
system measure we could compare it with. Do not claim research results. List
your assumptions and ways the questions could be misread.
```

**Phân tích các mẫu hình trong danh sách trở ngại.**

```text
Here is the team's obstacle list for the last [period] with dates raised,
dates resolved, and short descriptions: [paste, sanitized]. Group obstacles by
cause, point out long-standing items and patterns, and suggest which one or two
to tackle first and why. Do not infer motives or name individuals. List your
assumptions and what the team should confirm.
```

**Viết quy tắc quyền riêng tư cho một chương trình sức khỏe đội.**

```text
Draft a one-page set of rules for a team health and developer experience
program in [type of organization]. Cover what is collected, purpose, who sees
what, minimum group size, retention, a promise that individual data will not be
used in performance reviews, and how staff can raise concerns. Flag anything I
should review with legal, privacy, and employee representatives. Do not give
legal conclusions. List your assumptions.
```

**So sánh điều kiện với kết quả.**

```text
For [number] teams we have conditions measures (feedback loop times, cognitive
load ratings, focus time) and outcome measures (cycle time, change fail rate,
incidents): [paste table]. Describe patterns, say where the data is too sparse
to conclude anything, and suggest hypotheses to test with the teams. Do not
claim causation. List your assumptions and cautions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số sức khỏe đội hoặc trải nghiệm nhà phát triển.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số liên quan đến con người mang vectơ lợi dụng, rào chắn và quy tắc quyền riêng tư của nó.

## Điểm chính cần nhớ

- Đo các điều kiện mọi người làm việc trong đó: vòng phản hồi, tải nhận thức và dòng chảy.
- Kết hợp điều mọi người nói với điều hệ thống ghi lại, và xem xét những chỗ không khớp.
- Để các đội sở hữu buổi kiểm tra sức khỏe của họ, báo cáo ở cấp đội, và không bao giờ dùng dữ liệu về cá nhân.
- Tránh số đếm hoạt động làm thứ thay thế cho năng suất.
- Hành động rõ ràng với một hoặc hai trở ngại mỗi lần, và theo dõi các trở ngại mất bao lâu để được giải quyết.
- Bảo vệ một nhịp độ mà đội có thể duy trì vô thời hạn.

## Tài liệu tham khảo và đọc thêm

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
