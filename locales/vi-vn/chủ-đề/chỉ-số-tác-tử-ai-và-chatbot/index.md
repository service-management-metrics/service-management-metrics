# Chỉ số tác tử AI và chatbot

**Một trợ lý hội thoại chỉ giúp được khi vấn đề của người dùng được giải quyết và vẫn được giải quyết, nên hãy đo giải quyết đã xác minh, các lần quay lại, chất lượng của việc bàn giao cho một con người, và tác hại của hành động sai, và đừng bao giờ thưởng cho một bot vì giữ mọi người tránh xa sự giúp đỡ.**

## Tổng quan và động lực

Nhiều tổ chức hiện đặt một trợ lý hội thoại giữa người dùng và bàn dịch vụ, và một số trao cho các tác tử AI khả năng hành động: đặt lại mật khẩu, đặt thiết bị, khởi động lại một dịch vụ, thay đổi một cấu hình. Một [chatbot](https://en.wikipedia.org/wiki/Chatbot) là một ứng dụng phần mềm tiến hành một cuộc hội thoại, và một [trợ lý ảo](https://en.wikipedia.org/wiki/Virtual_assistant) thêm khả năng thực hiện nhiệm vụ thay mặt người dùng. Ý tưởng rộng hơn về một [tác tử thông minh](https://en.wikipedia.org/wiki/Intelligent_agent) là một hệ thống nhận biết một môi trường và thực hiện hành động hướng tới mục tiêu. Các mô hình ngôn ngữ hiện đại làm các hệ thống này có khả năng hội thoại mở hơn nhiều so với những người tiền nhiệm dựa trên quy tắc, và chương trình hội thoại đầu tiên, ELIZA của Joseph Weizenbaum những năm 1960, đã cho thấy con người sẵn sàng gán sự hiểu biết cho một cỗ máy chỉ tạo ra những câu trả lời hợp lý đến mức nào.

Sức hấp dẫn là rõ ràng. Người dùng được giúp vào mọi giờ mà không phải chờ. Các đội tốn ít thời gian hơn cho các yêu cầu thường lệ. [Tự phục vụ](https://en.wikipedia.org/wiki/Self-service) từ lâu đã là mục tiêu của ITSM, và dịch chuyển sang trái, việc chuyển giải quyết đến các điểm sớm hơn và rẻ hơn, là ý tưởng cốt lõi của bàn dịch vụ (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa). Vấn đề đo lường là các con số hiển nhiên thưởng cho những thứ sai. Một bot kết thúc một cuộc hội thoại được tính là đã "ngăn chặn" nó, dù người dùng được giúp hay đã bỏ cuộc. Một bot không bao giờ đưa ra một con người tối đa hóa việc ngăn chặn. Một bot tự tin đưa ra câu trả lời sai tạo ra một thất bại âm thầm xuất hiện dưới dạng một liên hệ giận dữ vài ngày sau.

Hai loại hệ thống cần những thước đo riêng biệt.

- **Trợ lý hội thoại** trả lời câu hỏi, hướng dẫn người dùng và thu thập thông tin. Rủi ro của chúng là câu trả lời sai hoặc không hữu ích và nhốt người dùng trong các vòng lặp. Các thước đo tập trung vào giải quyết, độ chính xác và đường đến một con người.
- **Tác tử hành động** thay đổi những thứ trong thế giới: tài khoản, hệ thống, phiếu, tiền. Rủi ro của chúng là một hành động sai có hệ quả thật. Các thước đo tập trung vào tính đúng đắn của hành động, khả năng đảo ngược, ranh giới quyền hạn và dấu vết kiểm toán. Những việc dùng này đòi hỏi quản trị mạnh hơn và, thường, sự phê duyệt của con người cho các bước có hệ quả (xem chủ đề 10.5, Chỉ số quản trị và rủi ro AI).

Vài vấn đề thiết kế định hình điều bạn đo.

- **Trung thực về việc người dùng đang nói chuyện với cái gì.** Nhiều khu vực pháp lý có hoặc đang phát triển nghĩa vụ phải cho mọi người biết khi họ tương tác với một hệ thống AI, và tính đến tháng 10 năm 2026 các quy tắc này đang phát triển, nên hãy kiểm tra điều gì áp dụng cho bạn. Thực hành tốt là nói rõ điều đó trong mọi trường hợp.
- **Một lối ra.** Người dùng phải có thể tiếp cận một con người mà không vất vả. Một bot giấu đường đến con người là một [dark pattern](https://en.wikipedia.org/wiki/Dark_pattern), một thiết kế lừa hoặc nhốt người dùng vào những kết quả họ sẽ không chọn.
- **Khả năng tiếp cận.** Giao diện hội thoại phải hoạt động cho người dùng công nghệ hỗ trợ, người có khả năng ngôn ngữ hạn chế, và người cần một ngôn ngữ hoặc kênh khác.
- **Quyết định tự động.** Khi đầu ra của một trợ lý ảnh hưởng đến quyền hoặc quyền truy cập của một người, chủ đề [ra quyết định tự động](https://en.wikipedia.org/wiki/Automated_decision-making) và các nghĩa vụ xung quanh nó áp dụng. Hãy giữ những quyết định như vậy với con người, hoặc với các biện pháp bảo vệ mạnh.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) rất sống động ở đây: nếu ngăn chặn hoặc chuyển hướng là mục tiêu, cách rẻ nhất để đạt được là làm con người khó tiếp cận hơn (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Các thước đo dưới đây đặt giải quyết và kết quả của người dùng lên trước.

## Nguyên tắc chính

- **Giải quyết là thước đo, không phải ngăn chặn.** Một cuộc hội thoại đã kết thúc không phải là một vấn đề đã được giải quyết.
- **Xác minh, và kiểm tra việc quay lại.** Chỉ tính một liên hệ là đã giải quyết khi người dùng xác nhận hoặc không quay lại.
- **Luôn cung cấp đường đến một con người.** Làm cho đường đi dễ, nhanh và hiển thị, và mang ngữ cảnh theo.
- **Trung thực về hệ thống.** Nói rằng nó là AI, nó có thể làm gì và không thể làm gì.
- **Giới hạn những gì tác tử được làm.** Cấp đặc quyền tối thiểu, yêu cầu phê duyệt cho hành động có hệ quả, và giữ một dấu vết kiểm toán.
- **Đo chất lượng câu trả lời bằng lấy mẫu.** Câu trả lời trôi chảy có thể sai.
- **Lắng nghe người dùng và nhân viên thu dọn hậu quả.** Họ thấy điều các chỉ số bỏ lỡ.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ giải quyết đã xác minh | Tỷ lệ cuộc hội thoại với bot mà người dùng xác nhận vấn đề đã được giải quyết, hoặc không quay lại trong một khoảng nêu rõ | số cuộc hội thoại có xác nhận giải quyết hoặc không có liên hệ quay lại trong 7 ngày / số cuộc hội thoại bắt đầu với một ý định có thể giải quyết | phần trăm | Nhật ký hội thoại, xác nhận của người dùng, dữ liệu phiếu và liên hệ | Bàn dịch vụ; quản lý tri thức | Kết quả hoạt động được cho người dùng | Hằng tuần |
| Tỷ lệ liên hệ quay lại | Tỷ lệ cuộc hội thoại do bot kết thúc được theo sau bởi một liên hệ về cùng vấn đề qua bất kỳ kênh nào | số cuộc hội thoại được theo sau bởi một liên hệ liên quan trong 7 ngày / số cuộc hội thoại kết thúc mà không bàn giao | phần trăm | Nhật ký hội thoại ghép với bản ghi phiếu và liên hệ | Bàn dịch vụ; quản lý sự cố | Lỗi lọt ra ngoài | Hằng tuần |
| Mức đầy đủ ngữ cảnh bàn giao | Tỷ lệ bàn giao cho một con người mà người đó có thông tin cần thiết mà không phải yêu cầu người dùng lặp lại | số bàn giao được lấy mẫu mà nhân viên nhận đánh giá là đầy đủ / số bàn giao được lấy mẫu | phần trăm | Bàn giao được lấy mẫu, phản hồi của nhân viên | Bàn dịch vụ; quản lý tri thức | Cộng tác suôn sẻ qua ranh giới | Hằng tháng |
| Thời gian đến con người | Thời gian từ khi người dùng yêu cầu một người, hoặc bot quyết định bàn giao, đến khi một người tiếp quản | trung vị và bách phân vị thứ 85 của số phút | phút | Nhật ký hội thoại, dữ liệu hàng đợi | Bàn dịch vụ; quản lý sự cố | Khả năng đáp ứng khi người dùng cần giúp | Hằng tuần |
| Độ chính xác của câu trả lời | Tỷ lệ câu trả lời của bot được lấy mẫu mà một người rà soát có trình độ đánh giá là đúng, đầy đủ và an toàn | số câu trả lời được đánh giá đúng / số câu trả lời được lấy mẫu | phần trăm | Rà soát mẫu | Quản lý tri thức; đảm bảo chất lượng | Định nghĩa hoàn thành cho một câu trả lời | Hằng tháng |
| Mức hài lòng và công sức với bot | Đánh giá của người dùng về mức hài lòng và sự dễ dàng sau một cuộc hội thoại, kèm bình luận | số đánh giá thuận lợi / số đánh giá; đánh giá công sức trung bình | phần trăm; điểm thang | Khảo sát ngắn sau hội thoại | Bàn dịch vụ; trải nghiệm khách hàng | Phản hồi về phần mềm hoạt động | Hằng tuần |
| Tỷ lệ đảo ngược hành động của tác tử | Tỷ lệ hành động do một tác tử AI thực hiện phải được sửa, hoàn tác hoặc leo thang | số hành động bị đảo ngược hoặc sửa / số hành động đã thực hiện, theo loại hành động và lớp rủi ro | phần trăm | Nhật ký kiểm toán hành động, bản ghi thay đổi | Hỗ trợ thay đổi; quản lý sự cố | Làm lại và hoàn tác | Hằng tuần |

Hãy định nghĩa các ý định mà bot xử lý, và loại khỏi việc ngăn chặn những ý định mà nó luôn phải bàn giao. Giải quyết đã xác minh chỉ tính một cuộc hội thoại nếu vấn đề nằm trong phạm vi và người dùng hoặc đã xác nhận hoặc không có liên hệ quay lại. Thời gian đến con người bắt đầu ở yêu cầu của người dùng, không phải ở cuối một menu. Độ chính xác của câu trả lời được đánh giá theo cơ sở tri thức và chính sách bởi một người không xây dựng bot. Tỷ lệ đảo ngược hành động của tác tử được chia theo loại hành động và lớp rủi ro, và bất kỳ hành động gây hại nào cũng được báo cáo riêng như một sự cố.

## Khuyến nghị

### Định nghĩa thành công là giải quyết

**1. Định nghĩa các ý định và kết quả bạn muốn.** Hãy liệt kê các vấn đề trợ lý nên xử lý, như đặt lại mật khẩu, trạng thái truy cập, câu hỏi hướng dẫn, và kết quả cho mỗi cái: được trả lời, đã làm, hoặc bàn giao. Quyết định những ý định nào luôn phải đến một con người: phàn nàn, bất cứ điều gì liên quan đến đau khổ, an toàn, quyền pháp lý hoặc tiền. Một bot cố xử lý mọi thứ sẽ thất bại nặng ở các biên.

**2. Đo giải quyết đã xác minh và các lần quay lại.** Hãy hỏi người dùng ở cuối liệu vấn đề của họ đã được giải quyết chưa, và cũng tìm các liên hệ liên quan sau đó. Không cái nào đủ một mình: người dùng bỏ cuộc không trả lời, và một số người đã được giúp vẫn gọi. Cùng nhau chúng xấp xỉ giải quyết thật. Hãy coi tỷ lệ liên hệ quay lại là rào chắn chính cho bất kỳ con số ngăn chặn nào (xem chủ đề 3.1, Chỉ số bàn dịch vụ).

**3. Tránh ngăn chặn làm mục tiêu.** Hãy chỉ báo cáo ngăn chặn như một con số mô tả và luôn bên cạnh giải quyết đã xác minh, các lần quay lại và mức hài lòng. Ngăn chặn tăng kèm quay lại tăng nghĩa là bot đang từ chối mọi người. Đừng đặt mục tiêu ngăn chặn hay gắn hiệu suất của bất kỳ ai với nó.

### Làm đường đến một con người dễ và tốt

**4. Để người dùng tiếp cận một con người ở bất kỳ điểm nào.** Hãy cung cấp một cách rõ ràng, đơn giản để yêu cầu một người, và tôn trọng nó. Đo thời gian đến con người và tỷ lệ cuộc hội thoại mà người dùng đã hỏi hơn một lần. Tự kiểm thử đường đi đều đặn. Nơi không có người, hãy nói khi nào sẽ có, và đưa ra một cuộc gọi lại.

**5. Bàn giao kèm ngữ cảnh.** Khi bot chuyển một cuộc hội thoại cho một người, hãy gồm bản tóm tắt, điều đã thử, lời của người dùng và các chi tiết tài khoản liên quan để người dùng không phải lặp lại. Nhờ nhân viên nhận đánh giá liệu bàn giao có đầy đủ không, và lấy mẫu kết quả. Bàn giao kém khiến người dùng ít tin cả bot lẫn dịch vụ (xem chủ đề 9.3, Chỉ số cộng tác và bàn giao).

**6. Thiết kế cho mọi người dùng.** Hãy kiểm thử trợ lý với người dùng công nghệ hỗ trợ, người viết bằng ngôn ngữ khác, người vội hoặc đang đau khổ, và người không thoải mái với công nghệ. Cung cấp các kênh khác. Đo giải quyết đã xác minh và mức hài lòng theo nhóm người dùng nơi an toàn và hợp pháp. Giá trị trung bình giấu những người mà bot thất bại nhiều nhất.

### Kiểm tra chất lượng của điều nó nói và làm

**7. Lấy mẫu câu trả lời để kiểm tra độ chính xác và an toàn.** Mỗi tháng, hãy rút một mẫu ngẫu nhiên các cuộc hội thoại và nhờ một người có trình độ đánh giá các câu trả lời: đúng, đầy đủ, an toàn và trung thực về độ bất định. Ghi lỗi theo loại: lỗi thời, bịa đặt, trái chính sách, hoặc hiểu sai. Đưa lỗi vào cơ sở tri thức và cấu hình. Thêm các kiểm thử có mục tiêu cho các chủ đề nhạy cảm, và cho các nỗ lực đẩy trợ lý ra ngoài phạm vi của nó.

**8. Giữ tri thức hiện hành.** Một trợ lý chỉ tốt bằng nội dung và công cụ nó dựa vào. Hãy liên kết lỗi câu trả lời với bài tri thức, và đo độ mới của tri thức nó dùng (xem chủ đề 3.6, Chỉ số quản lý tri thức). Nơi hệ thống dùng truy xuất từ cơ sở tri thức, hãy gồm một kiểm tra rằng nó trích dẫn nguồn và các nguồn đó đúng.

**9. Trung thực với người dùng.** Nêu ngay từ đầu rằng họ đang nói chuyện với một AI, và nó có thể và không thể làm gì. Đừng đặt cho nó một cái tên hay phong thái của con người gợi ý điều ngược lại. Nơi nó không chắc, nó nên nói vậy và đưa ra một người. Kiểm tra luật áp dụng về công bố.

### Quản trị các tác tử hành động

**10. Phân loại hành động theo rủi ro và đặt quyền hạn tương ứng.** Với mỗi hành động một tác tử có thể thực hiện, hãy định nghĩa lớp rủi ro của nó: thông tin, có thể đảo ngược và tác động thấp, hoặc có hệ quả. Cấp đặc quyền tối thiểu cần thiết. Yêu cầu sự phê duyệt của con người cho các hành động có hệ quả. Giữ một dấu vết kiểm toán cho mọi hành động kèm lý do, người dùng và kết quả. Các kiểm soát này liên kết với các thước đo thay đổi và an ninh ở các phần trước (xem chủ đề 8.1, Chỉ số sự cố bảo mật và lỗ hổng, và chủ đề 8.2, Chỉ số rủi ro và kiểm soát).

**11. Đo tính đúng đắn và khả năng đảo ngược của hành động.** Hãy theo dõi tỷ lệ đảo ngược theo loại hành động, và rà soát mọi hành động gây hại như một sự cố, không đổ lỗi. Kiểm thử các tác tử trong một môi trường an toàn trước khi cấp quyền truy cập, và kiểm thử lại khi mô hình hoặc công cụ thay đổi. Một phiên bản mô hình mới có thể thay đổi hành vi, nên hãy coi nó là một thay đổi cần kiểm soát (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

**12. Lắng nghe những người thu dọn hậu quả.** Nhân viên bàn dịch vụ thấy hậu quả của các thất bại của bot: người dùng giận dữ, liên hệ lặp lại, và những mớ hỗn độn phải dọn. Hãy thường xuyên hỏi họ bot làm sai điều gì và điều gì làm nó khó hơn. Phản hồi của họ và bình luận của người dùng là bằng chứng mà không chỉ số nào nắm bắt đầy đủ, và nó nên định hình vòng thay đổi kế tiếp.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ giải quyết đã xác minh | Tính bất kỳ lần kết thúc hội thoại nào là đã giải quyết; hỏi câu xác nhận dẫn dắt | Định nghĩa xác nhận một cách trung lập; tỷ lệ liên hệ quay lại; lấy mẫu hội thoại |
| Tỷ lệ liên hệ quay lại | Chỉ đo qua một kênh; cửa sổ ngắn | Ghép mọi kênh; dùng cửa sổ dài hơn làm kiểm tra; lấy mẫu các lần quay lại |
| Mức đầy đủ ngữ cảnh bàn giao | Chuyển một bản ghi dài thay vì tóm tắt; lấy mẫu bàn giao dễ | Đánh giá của nhân viên nhận; mẫu ngẫu nhiên; thời gian giải quyết sau bàn giao |
| Thời gian đến con người | Bắt đầu đồng hồ sau menu; tính xác nhận hàng đợi là tiếp quản | Đồng hồ bắt đầu ở yêu cầu; tiếp quản nghĩa là một người đang hoạt động trong hội thoại |
| Độ chính xác của câu trả lời | Lấy mẫu hội thoại dễ; người rà soát dễ dãi | Mẫu ngẫu nhiên bởi người rà soát độc lập; các trường hợp kiểm thử đối kháng |
| Mức hài lòng và công sức với bot | Chỉ khảo sát cuộc hội thoại hoàn tất; đặt khảo sát nơi chỉ người dùng vui mới đến được | Khảo sát cả cuộc hội thoại bị bỏ; tỷ lệ phản hồi và cơ cấu; đọc bình luận |
| Tỷ lệ đảo ngược hành động của tác tử | Không ghi các lần đảo ngược; phân loại lại sửa chữa là công việc mới | Nhật ký kiểm toán chống can thiệp; liên kết đảo ngược với hành động; rà soát sự cố |

Một kết quả đọc lành mạnh là giải quyết đã xác minh cao với quay lại thấp, đường đến con người dễ và nhanh kèm bàn giao đầy đủ, câu trả lời chính xác khi rà soát mẫu, người dùng hài lòng qua các nhóm, và các tác tử có hành động hiếm khi cần đảo ngược và không bao giờ gây hại mà không ai thấy.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Bot dựa trên quy tắc | Dự đoán được, dễ kiểm thử | Hẹp; mong manh; gây bực bội ngoài kịch bản |
| Trợ lý mô hình ngôn ngữ | Linh hoạt, trôi chảy | Có thể sai một cách tự tin; khó kiểm thử hơn |
| Truy xuất từ tri thức đã phê duyệt | Câu trả lời có căn cứ, dễ sửa hơn | Phụ thuộc chất lượng nội dung |
| Tạo sinh mở | Phủ rộng | Rủi ro bịa đặt cao hơn |
| Phê duyệt của con người cho hành động | An toàn | Chậm hơn; mệt mỏi của người rà soát |
| Hành động tự chủ | Tốc độ | Bán kính ảnh hưởng lớn hơn khi sai |
| Phạm vi chặt với bàn giao sớm | An toàn | Ngăn chặn thấp hơn |
| Phạm vi rộng | Ngăn chặn cao hơn | Nhiều lỗi hơn ở các biên |

Câu trả lời dạng văn xuôi là bắt đầu với các ý định hẹp, được hiểu rõ, làm câu trả lời có căn cứ trong tri thức đã phê duyệt, làm sự giúp đỡ của con người dễ dàng, và chỉ mở rộng phạm vi và tính tự chủ khi các thước đo biện minh cho nó.

## Câu hỏi để thảo luận với đội nhóm

**1. Nếu một người dùng muốn gặp một người ngay bây giờ, cần bao nhiêu bước, và chúng ta đã tự thử chưa?**
Cùng kiểm thử đường đi. Đếm số bước và thời gian chờ. Người điều phối nên ghi lại mọi rào cản. Thống nhất các thay đổi để đường đi ngắn, và đo thời gian đến con người.

**2. Bao nhiêu phần các cuộc hội thoại bot của chúng ta kết thúc thực sự đã giải quyết vấn đề?**
Kiểm tra các lần quay lại và xác nhận cho một mẫu. So sánh với con số ngăn chặn. Thảo luận khoảng cách. Quyết định con số nào lãnh đạo nên thấy.

**3. Bot của chúng ta làm sai điều gì, và ai biết?**
Hỏi bàn dịch vụ. Rà soát các cuộc hội thoại được lấy mẫu. Tìm các mẫu hình: bài lỗi thời, câu hỏi mơ hồ, chủ đề nhạy cảm. Thống nhất một đường từ lỗi đến bản sửa, kèm người sở hữu.

**4. Hành động nào tác tử được làm một mình, và hành động nào cần một người?**
Liệt kê hành động kèm lớp rủi ro và quyền hạn. Hỏi thất bại thực tế tệ nhất của mỗi cái sẽ là gì. Thống nhất các quy tắc phê duyệt và dấu vết kiểm toán, và ai rà soát các trường hợp gây hại.

**5. Bot đang âm thầm làm thất bại ai?**
Hãy nghĩ về người dùng đang vội, đang đau khổ, có nhu cầu tiếp cận, hoặc ngôn ngữ hạn chế. Nhìn vào giải quyết và mức hài lòng theo nhóm, nơi an toàn. Thống nhất một cuộc kiểm thử với những người dùng như vậy.

**6. Điều gì sẽ khiến chúng ta tắt bot hoặc thu hẹp phạm vi của nó?**
Định nghĩa bằng chứng: quay lại vượt một mức, hành động gây hại, độ chính xác dưới một tiêu chuẩn. Quyết định ai được quyết định. Có sẵn một quy tắc dừng làm hành động dễ hơn.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội xây trợ lý sở hữu chất lượng của nó. Họ nên định nghĩa ý định, làm câu trả lời có căn cứ trong tri thức đã phê duyệt, kiểm thử bằng các trường hợp đối kháng, phát hành thay đổi có kiểm soát, và đọc các thất bại. Họ nên phản đối các mục tiêu ngăn chặn thưởng cho việc nhốt người dùng.

### Đội dịch vụ và vận hành

Nhân viên bàn dịch vụ làm việc với trợ lý và thừa hưởng các thất bại của nó. Họ nên đánh giá bàn giao, đánh dấu câu trả lời sai, giữ tri thức hiện hành, và tiếp quản nhanh khi được yêu cầu. Họ là người đánh giá tốt nhất liệu trợ lý có giúp ích cho người dùng không, và khối lượng công việc và căng thẳng của họ là một phần của bức tranh.

### Lãnh đạo và quản trị

Lãnh đạo bảo trợ trợ lý và muốn tiết kiệm. Họ nên yêu cầu giải quyết đã xác minh, quay lại và mức hài lòng bên cạnh ngăn chặn, đòi một quy tắc dừng, tài trợ đường đến con người, và rà soát các lớp rủi ro cho tác tử. Quản trị nên kiểm tra công bố, khả năng tiếp cận và nghĩa vụ pháp lý.

### Khách hàng và người dùng

Người dùng muốn được giúp với ít công sức và không bị lừa. Họ nên biết mình đang nói chuyện với một AI, có thể tiếp cận một con người dễ dàng, và tin rằng hệ thống sẽ không hành động mà không có lý do chính đáng. Trải nghiệm của họ, đặc biệt về thất bại, là bằng chứng chính cho việc trợ lý có đáng có không.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một trường đại học quốc gia vận hành một bàn dịch vụ sinh viên và nhân viên xử lý khoảng 30.000 liên hệ mỗi tháng. Nó ra mắt một chatbot cho các yêu cầu phổ biến, và bảng điều khiển của nhà cung cấp báo cáo tỷ lệ ngăn chặn 74 phần trăm. Các con số dưới đây chỉ mang tính minh họa.

Trưởng bộ phận dịch vụ sinh viên kiểm tra. Trong các cuộc hội thoại do bot kết thúc tháng vừa qua, 29 phần trăm được theo sau bởi một liên hệ liên quan qua email hoặc điện thoại trong vòng bảy ngày. Giải quyết đã xác minh, dùng xác nhận của người dùng và việc không quay lại, là 49 phần trăm cho các ý định trong phạm vi. Thời gian trung vị để đến một người sau khi yêu cầu là 6 phút, với bách phân vị thứ 85 là 22, một phần vì đường đi cần ba bước menu. Một mẫu 100 cuộc hội thoại được hai cố vấn có kinh nghiệm rà soát thấy 88 câu trả lời đúng và 12 có lỗi: 7 lỗi thời, 3 bịa chi tiết về một hạn chót, và 2 xử lý sai các trường hợp nhạy cảm liên quan đến một sinh viên đang gặp khó khăn. Nhân viên nhận đánh giá 54 phần trăm bàn giao là đầy đủ. Mức hài lòng với bot thấp hơn ở sinh viên dùng trình đọc màn hình và những người viết bằng ngôn ngữ khác tiếng Anh. Đội bàn dịch vụ báo cáo nhiều liên hệ bắt đầu bằng "chatbot không giúp được."

Trưởng bộ phận dịch vụ sinh viên thực hiện các thay đổi cùng đội. Các ý định nhạy cảm, như phúc lợi, phàn nàn và tranh chấp về học phí, được chuyển thẳng đến một người, và bot nói vậy. Một tùy chọn "nói chuyện với một người" xuất hiện trên mọi màn hình, và thời gian đến con người được theo dõi, với mục tiêu trả lời trong vài phút trong giờ có nhân viên. Bàn giao gồm một bản tóm tắt tự động và lời của chính người dùng. Chủ sở hữu cơ sở tri thức sửa các bài lỗi thời, và một buổi rà soát mẫu hằng tháng nuôi họ. Trợ lý bị giới hạn ở việc trả lời từ nội dung đã phê duyệt và được yêu cầu nói khi nó không biết. Một thí điểm thứ hai cho phép một tác tử đặt lại mật khẩu sau khi xác minh danh tính, với mọi hành động được ghi nhật ký và có thể đảo ngược trong một giới hạn thời gian, và tỷ lệ đảo ngược được theo dõi. Bảng điều khiển thay ngăn chặn bằng giải quyết đã xác minh, tỷ lệ liên hệ quay lại, độ chính xác, thời gian đến con người và mức hài lòng theo nhóm.

Ba tháng sau, giải quyết đã xác minh đạt 66 phần trăm cho các ý định trong phạm vi, tỷ lệ liên hệ quay lại giảm xuống 14 phần trăm, thời gian trung vị đến con người giảm xuống 2 phút, tỷ lệ bàn giao đầy đủ tăng lên 86 phần trăm, và độ chính xác trên câu trả lời được lấy mẫu tăng lên 95 phần trăm, không có trường hợp nhạy cảm nào bị xử lý sai trong mẫu. Tỷ lệ đảo ngược hành động của tác tử trong thí điểm mật khẩu là 1,2 phần trăm. Văn phòng hiệu trưởng yêu cầu một mục tiêu ngăn chặn 85 phần trăm. Trưởng bộ phận dịch vụ sinh viên giải thích rằng một mục tiêu ngăn chặn cao hơn sẽ thưởng cho việc giấu đường đến con người, và đề xuất giải quyết đã xác minh và quay lại làm các thước đo, kèm một buổi rà soát về việc mở rộng gì tiếp theo. Quyết định được ghi lại.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy cải thiện trợ lý theo các bước nhỏ với phản hồi từ người dùng và những người tiếp quản, và rà soát các thất bại đều đặn cùng các bên liên quan. Điều cần lưu ý là thưởng cho việc ngăn chặn dạy bot giữ mọi người tránh xa sự giúp đỡ.

### AI

Một trợ lý hội thoại chỉ giúp được khi vấn đề được giải quyết và vẫn được giải quyết, nên hãy đo giải quyết đã xác minh, các lần quay lại, chất lượng bàn giao và việc đảo ngược hành động của tác tử. Định nghĩa vai trò của con người: ai phê duyệt hành động, khi nào bot phải bàn giao, và một người ghi đè nó thế nào. Điều cần lưu ý là một cuộc hội thoại dễ chịu vẫn có thể thất bại trong nhiệm vụ.

### Tự động hóa

Hãy ghi nhật ký mọi cuộc hội thoại và hành động của tác tử, kèm quyền hạn và cách hoàn tác, và đo phần tự động hóa theo các hành động sai. Điều cần lưu ý là một tác tử có quyền hạn rộng có thể gây hại nhanh chóng, nên hãy giới hạn phạm vi và rà soát nhật ký.

### Phân tích

Hãy báo cáo giải quyết được xác minh bởi xác nhận của người dùng hoặc một cửa sổ không quay lại, kèm số đếm, và đọc một mẫu các cuộc hội thoại. Quyết định được cung cấp thông tin là trợ lý an toàn để mở rộng ở đâu. Điều cần lưu ý là điểm hài lòng trên các cuộc hội thoại với bot nghiêng về những người dùng đã hoàn thành.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một trợ lý có thể bao quát hỗ trợ với chi phí thấp, và một câu trả lời tệ có thể làm mất một khách hàng. Hãy giữ phạm vi hẹp, làm câu trả lời có căn cứ trong tài liệu của bạn, làm tùy chọn con người rõ ràng, và đọc mọi lần leo thang. Hãy cẩn thận khi để một tác tử hành động trên tài khoản hay thanh toán.

**Doanh nghiệp nhỏ.** Một trợ lý có sẵn trên trang web có thể xử lý các câu hỏi phổ biến. Hãy kiểm thử nó như một khách hàng, đảm bảo số điện thoại hoặc email dễ tìm, và rà soát hội thoại hằng tuần. Kiểm tra nhà cung cấp làm gì với dữ liệu.

**Doanh nghiệp lớn.** Quy mô mang đến tiết kiệm và rủi ro. Hãy chạy một quy trình quản trị cho các lớp rủi ro, phê duyệt và kiểm toán, đo theo ý định và nhóm người dùng, và đảm bảo một người có thể tiếp cận được trên mọi kênh. Phối hợp giữa hỗ trợ, an ninh, pháp lý và khả năng tiếp cận.

**Chính phủ và khu vực công.** Công dân có thể không có nhà cung cấp thay thế, và nghĩa vụ về khả năng tiếp cận, tiếp cận ngôn ngữ và đối xử công bằng áp dụng mạnh. Hãy giữ một người có thể tiếp cận được, tránh quyết định tự động về quyền lợi mà không có biện pháp bảo vệ, công bố cách trợ lý được dùng, và kiểm tra nghĩa vụ công bố và luật hành chính (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là giấy phép hoặc phí sử dụng, tích hợp, chuẩn bị nội dung, lấy mẫu và rà soát liên tục, bảo trì cơ sở tri thức, kiểm thử và quản trị. Một đường đến con người tốt cũng tốn tiền, vì nó phải có nhân viên.

Lợi tức tiềm năng là thời gian chờ ngắn hơn cho các vấn đề đơn giản, giảm nhẹ các liên hệ lặp lại, và phủ ngoài giờ. Phía rủi ro gồm các lần quay lại, mất lòng tin, tác hại từ câu trả lời hoặc hành động sai, và rủi ro pháp lý. Hãy xây hồ sơ từ các con số của chính bạn: giải quyết đã xác minh và quay lại, chi phí mỗi liên hệ đã giải quyết gồm cả bàn giao, thời gian nhân viên dành để sửa các thất bại của bot, và mức hài lòng theo nhóm. Tránh dùng các tuyên bố ngăn chặn hay chuyển hướng của nhà cung cấp làm ước lượng của bạn. Hãy tính chi phí của đường đến con người và của quản trị (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Ngăn chặn làm mục tiêu.** Nó thưởng cho việc giữ mọi người tránh xa sự giúp đỡ. Hãy báo cáo giải quyết đã xác minh và quay lại.
- **Đường đến con người bị giấu hoặc chậm.** Đó là một dark pattern, và người dùng nhận ra. Hãy làm nó ngắn và kiểm thử nó.
- **Bàn giao không có ngữ cảnh.** Người dùng phải lặp lại và lòng tin giảm. Hãy chuyển một bản tóm tắt.
- **Để bot xử lý các trường hợp nhạy cảm.** Phúc lợi, phàn nàn và quyền cần con người. Hãy chuyển thẳng chúng.
- **Hành động tự chủ không có kiểm toán hay phê duyệt.** Một lỗi có thể nhân rộng. Hãy phân loại, giới hạn và ghi nhật ký.
- **Chỉ đo điều bảng điều khiển của nhà cung cấp cho thấy.** Nó tâng bốc. Hãy ghép dữ liệu của chính bạn.
- **Phớt lờ các nhóm mà bot làm thất bại.** Giá trị trung bình giấu họ. Hãy kiểm thử và phân đoạn nơi an toàn.
- **Không có quy tắc dừng.** Một bot đang thất bại vẫn chạy. Hãy định nghĩa bằng chứng sẽ thu hẹp hoặc tắt nó.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Kết quả | Ngăn chặn được báo cáo | Mức hài lòng được khảo sát | Giải quyết đã xác minh và quay lại được theo dõi theo ý định | Phân đoạn theo nhóm người dùng; quy tắc dừng được định nghĩa; độ chính xác được lấy mẫu hằng tháng | Trợ lý, nhân viên và tri thức được cải thiện cùng nhau bằng bằng chứng chung |
| Đường đến con người | Khó tìm | Có tùy chọn | Đường ngắn; thời gian đến con người được theo dõi; bàn giao mang ngữ cảnh | Chất lượng bàn giao được đánh giá và cải thiện; nhân sự khớp với nhu cầu | Bot và nhân viên cộng tác suôn sẻ qua các kênh, tôn trọng lựa chọn của người dùng |
| Tác tử hành động | Tự động hóa tùy tiện | Hành động có script | Hành động được phân loại rủi ro, đặc quyền tối thiểu, phê duyệt và kiểm toán | Tỷ lệ đảo ngược và tác hại được rà soát; thay đổi được kiểm soát | Hành vi tác tử được quản trị trong toàn tổ chức và nhà cung cấp với đảm bảo độc lập |

## Danh sách kiểm tra

- [ ] Các ý định của trợ lý được liệt kê, kèm những ý định luôn phải đến một con người.
- [ ] Giải quyết đã xác minh và tỷ lệ liên hệ quay lại được báo cáo bên cạnh ngăn chặn.
- [ ] Một đường đến con người ngắn, hiển thị tồn tại trên mọi màn hình, và thời gian đến con người được đo.
- [ ] Bàn giao gồm một bản tóm tắt và lời của người dùng, và được nhân viên nhận đánh giá.
- [ ] Câu trả lời được lấy mẫu hằng tháng bởi người rà soát có trình độ, độc lập.
- [ ] Người dùng được cho biết họ đang nói chuyện với một AI, và nó có thể làm gì.
- [ ] Kiểm thử khả năng tiếp cận và ngôn ngữ khác được thực hiện với người dùng thật.
- [ ] Hành động của tác tử được phân loại rủi ro, cấp quyền theo đặc quyền tối thiểu, và ghi nhật ký kiểm toán.
- [ ] Tỷ lệ đảo ngược và hành động gây hại được rà soát không đổ lỗi.
- [ ] Một quy tắc dừng định nghĩa khi nào thu hẹp hoặc tắt trợ lý.

## Lời nhắc AI

**Định nghĩa ý định và quy tắc bàn giao.**

```text
We run a service desk for [type of organization]. The most common contact reasons
are: [list with volumes]. Propose which intents a chatbot should handle fully,
which it should only help with and then hand off, and which must always go to a
person, with reasons. Include handoff information to pass along. Do not invent
statistics. List your assumptions and risks for sensitive cases.
```

**Kiểm tra một tuyên bố ngăn chặn.**

```text
Our chatbot dashboard shows containment of [value]. We also have: return contacts
within seven days [value], survey results [values], and a sample of
conversations [describe]. Explain what verified resolution might be, how to
compute it from our data, what the gap between containment and resolution
suggests, and what to check next. Do not claim causes the data cannot support.
List your assumptions.
```

**Thiết kế một phân loại rủi ro cho hành động của tác tử.**

```text
An AI agent might take these actions: [list]. For each, propose a risk class
(informational, reversible low impact, consequential), the permission it should
need, whether a person must approve, what to log, how to reverse it, and a
test to run before enabling it. Do not assume specific tools. List your
assumptions and decisions needing security and legal input.
```

**Lập kế hoạch rà soát các cuộc hội thoại của bot.**

```text
Design a monthly review of bot conversations: sample size and selection
(including some abandoned ones and some from user groups at risk of poor
service), reviewer qualifications, a short rubric for correctness, safety, and
honesty about uncertainty, how to record errors and fix their sources, and how to
report without identifying users. List your assumptions and privacy cautions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số chatbot hoặc tác tử AI.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số chatbot đo giải quyết và mang vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Đo giải quyết đã xác minh và liên hệ quay lại, và coi ngăn chặn chỉ là một con số mô tả.
- Làm đường đến con người ngắn và hiển thị, và bàn giao kèm ngữ cảnh.
- Lấy mẫu câu trả lời để kiểm tra độ chính xác và an toàn, và giữ tri thức trợ lý dùng hiện hành.
- Trung thực rằng người dùng đang nói chuyện với một AI, và kiểm thử với những người dùng có khả năng bị làm thất bại nhất.
- Với các tác tử hành động, hãy phân loại rủi ro, giới hạn quyền hạn, yêu cầu phê duyệt cho hành động có hệ quả, và giữ một dấu vết kiểm toán.
- Định nghĩa trước một quy tắc dừng.

## Tài liệu tham khảo và đọc thêm

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
