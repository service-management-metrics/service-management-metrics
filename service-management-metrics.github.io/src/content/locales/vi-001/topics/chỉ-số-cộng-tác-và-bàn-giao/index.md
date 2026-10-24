# Chỉ số cộng tác và bàn giao

**Công việc chậm lại và chất lượng giảm ở bất cứ nơi nào nó đổi tay, nên hãy đo các lần bàn giao, thời gian chờ giữa chúng, và sự phụ thuộc vào từng người, và dùng các con số để đưa đúng người lại với nhau thay vì đếm ai nói chuyện với ai.**

## Tổng quan và động lực

Các nguyên tắc của Tuyên ngôn Linh hoạt nói rằng người làm kinh doanh và lập trình viên phải làm việc cùng nhau hằng ngày suốt dự án. Quan sát nền tảng thì cũ và vững chắc: phần lớn sự chậm trễ trong một tổ chức dịch vụ không đến từ việc con người làm việc chậm. Nó đến từ công việc chờ giữa người với người. Một yêu cầu đi từ bàn dịch vụ đến một đội tuyến hai, rồi đến một đội ứng dụng, rồi đến một quản trị viên cơ sở dữ liệu, và ở mỗi bước nó vào một hàng đợi, mất ngữ cảnh, và có nguy cơ bị gửi trả lại. Những người liên quan có thể mỗi người đều nhanh. Hệ thống thì chậm.

Quản lý dịch vụ CNTT (ITSM), như được hệ thống hóa bởi ITIL, từ lâu đã tổ chức hỗ trợ thành các tầng và đội, với leo thang là cơ chế đưa một vấn đề đến người có thể giải quyết. Cấu trúc đó có lợi ích: chuyên môn hóa, quyền sở hữu rõ ràng và kiểm soát truy cập. Nó cũng tạo ra các lần bàn giao, và bàn giao có chi phí. Thực hành linh hoạt và DevOps phản ứng bằng cách xây dựng các đội liên chức năng mang nhiều công việc hơn từ đầu đến cuối, và khuyến khích cộng tác theo thời gian thực. Hai truyền thống đi đến kết luận tương tự: ít bàn giao hơn, thời gian chờ giữa chúng ngắn hơn, và những người có thể giải quyết vấn đề cùng làm việc trên nó.

Vài ý tưởng giúp ích cho đo lường.

- **Bàn giao và hàng đợi.** Mỗi lần công việc chuyển từ đội này sang đội khác, nó thường chờ trong một hàng đợi. Thời gian chờ thường lớn hơn nhiều so với thời gian làm việc. Đây là lý do hiệu quả dòng chảy, đã giới thiệu trước đó, thường thấp (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu quả dòng chảy). Một [nút thắt cổ chai](https://en.wikipedia.org/wiki/Bottleneck_(production)) là một điểm có năng lực hạn chế trong một quy trình, và nó quyết định thông lượng của toàn bộ.
- **Cấu trúc định hình giao tiếp.** [Định luật Conway](https://en.wikipedia.org/wiki/Conway%27s_law) nói rằng các tổ chức thiết kế hệ thống phản chiếu cấu trúc giao tiếp của chính họ. Điều ngược lại cũng thực tế: nếu bạn muốn một hệ thống ít phụ thuộc hơn, hãy sắp xếp các đội để giảm phụ thuộc giữa chúng. Ranh giới đội tạo ra bàn giao, và bàn giao định hình kiến trúc.
- **Phụ thuộc.** Một [phụ thuộc](https://en.wikipedia.org/wiki/Dependency_(project_management)) là một quan hệ trong đó một phần công việc không thể tiến hành cho đến khi một phần khác kết thúc. Phụ thuộc giữa các đội là một nguồn trì hoãn lớn, và chúng có thể được vẽ bản đồ, đếm và giảm.
- **Chi phí phối hợp tăng theo số người.** [Định luật Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), từ các tiểu luận của Frederick Brooks về dự án phần mềm, quan sát rằng thêm người vào một dự án trễ hạn có thể làm nó trễ hơn, một phần vì chi phí giao tiếp tăng thêm. Nhiều người hơn trong một cuộc trò chuyện không tự động tốt hơn.
- **Phụ thuộc vào cá nhân.** [Hệ số xe buýt](https://en.wikipedia.org/wiki/Bus_factor) là số người cần không có mặt để dừng một dự án, thường dùng để chỉ ra rủi ro khi tri thức nằm trong một cái đầu. Nó là thuộc tính của sự phân bố tri thức, không phải đánh giá về bất kỳ ai.

Các thước đo cộng tác có mặt tối. Đếm tin nhắn, cuộc họp hay liên kết mạng như một thước đo cộng tác thì dễ và hấp dẫn, và nó nhanh chóng trượt thành giám sát giao tiếp của con người. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng cho nhóm và cho quyền riêng tư: khi "cộng tác" trở thành mục tiêu, mọi người tạo ra hoạt động hiển thị, và khi nó trở thành giám sát, họ ngừng nói cởi mở (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Các thước đo ở đây vì vậy nhìn vào hạng mục công việc, bàn giao và phụ thuộc, và vào các mẫu hình cấp đội. Chúng không đọc tin nhắn hay xếp hạng cá nhân.

Chủ đề này kết nối với các thước đo dòng chảy của Phần 2, các thước đo sự cố và yêu cầu của Phần 3, và các bàn giao với nhà cung cấp của phần trước (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).

## Nguyên tắc chính

- **Đo công việc, không phải các cuộc trò chuyện.** Bàn giao, thời gian chờ và phụ thuộc là thuộc tính của hạng mục công việc và đội.
- **Ít bàn giao hơn thắng bàn giao nhanh hơn.** Bàn giao tốt nhất là cái không xảy ra.
- **Đưa mọi người lại với nhau.** Cộng tác theo thời gian thực thường gỡ cả một chuỗi chờ đợi.
- **Làm phụ thuộc hiển thị, và giảm chúng.** Vẽ bản đồ chúng, đếm chúng, và đổi ranh giới đội hoặc kiến trúc nơi chúng gây hại nhất.
- **Lan truyền tri thức có chủ ý.** Điểm tri thức đơn lẻ là rủi ro, và chia sẻ là một hoạt động thiết kế.
- **Bảo vệ sự tập trung.** Cộng tác lấp đầy mỗi giờ bằng cuộc họp phá hủy thời gian để làm việc.
- **Mời các bên liên quan tham gia liên tục.** Câu hỏi được trả lời trong vài giờ phục vụ tốt hơn câu trả lời gom lại trong các cuộc họp hằng tuần.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Số lần bàn giao | Số lần một hạng mục công việc đổi đội sở hữu trước khi hoàn tất | trung vị và bách phân vị thứ 85 của số lần chuyển giữa các đội trên mỗi hạng mục hoàn tất, theo loại hạng mục | lần chuyển mỗi hạng mục | Lịch sử phân công của ITSM hoặc công cụ theo dõi, tổng hợp theo đội | Quản lý sự cố; quản lý yêu cầu dịch vụ; hỗ trợ thay đổi | Đội liên chức năng mang công việc từ đầu đến cuối | Hằng tháng |
| Tỷ lệ thời gian chờ sau bàn giao | Tỷ lệ thời gian trôi qua của một hạng mục dành để chờ sau một lần bàn giao trước khi công việc tiếp tục | thời gian giữa bàn giao và hành động đầu tiên của đội nhận / tổng thời gian trôi qua, trung vị qua các hạng mục | phần trăm | Dấu thời gian phân công và hoạt động | Quản lý sự cố; quản lý yêu cầu dịch vụ | Hiệu quả dòng chảy; thời gian hàng đợi | Hằng tháng |
| Tỷ lệ phân công lại | Tỷ lệ hạng mục bị chuyển giữa các đội hơn hai lần hoặc bị trả lại đội trước | số hạng mục phân công lại hơn hai lần hoặc bị trả lại / số hạng mục hoàn tất | phần trăm | Lịch sử phân công | Quản lý sự cố; quản lý vấn đề | Làm lại và công việc bị nảy qua lại | Hằng tháng |
| Độ trễ do phụ thuộc | Thời gian hạng mục bị chặn chờ một đội khác | trung vị và bách phân vị thứ 85 của số ngày ở trạng thái bị đội khác chặn, kèm phụ thuộc được nêu tên | ngày | Trạng thái bị chặn và trường phụ thuộc của công cụ theo dõi | Hỗ trợ thay đổi; quản lý phát hành và triển khai | Tuổi của hạng mục công việc bị chặn | Hằng tháng |
| Tỷ lệ giải quyết cộng tác | Tỷ lệ sự cố được giải quyết bởi những người từ nhiều đội làm việc cùng nhau theo thời gian thực mà không leo thang tuần tự | số sự cố có cộng tác thời gian thực được ghi lại (ví dụ một kênh hoặc cuộc gọi chung) đã giải quyết mà không bàn giao thêm / số sự cố thuộc mức ưu tiên đủ điều kiện | phần trăm | Bản ghi sự cố kèm thẻ cộng tác | Quản lý sự cố; quản lý sự cố lớn | Xúm lại giải quyết vấn đề | Hằng tháng |
| Độ phủ tri thức | Tỷ lệ thành phần trọng yếu có ít nhất một số thành viên đội nêu rõ có thể vận hành và thay đổi chúng | số thành phần trọng yếu có ít nhất số người mục tiêu có thể vận hành và thay đổi / số thành phần trọng yếu | phần trăm | Bản đồ kỹ năng và quyền sở hữu do đội duy trì | Quản lý tri thức; quản lý liên tục dịch vụ | Quyền sở hữu chung và quyền sở hữu mã tập thể | Hằng quý |
| Thời gian phản hồi của bên liên quan | Thời gian từ câu hỏi của một đội gửi bên liên quan đến một câu trả lời dùng được | trung vị và bách phân vị thứ 85 của số giờ từ lúc câu hỏi được ghi đến lúc câu trả lời được ghi | giờ | Nhật ký câu hỏi hoặc trường công cụ theo dõi cho câu hỏi mở | Quản lý mức dịch vụ; quản lý quan hệ kinh doanh | Sự tham gia liên tục của bên liên quan | Hằng tháng |

Hãy tổng hợp ở cấp đội, hàng đợi hoặc dịch vụ, và không bao giờ báo cáo theo cá nhân. Số lần bàn giao loại trừ các phân công tự động không đổi đội sở hữu. Thời gian chờ bắt đầu khi hạng mục được giao cho đội nhận và kết thúc ở hành động được ghi lại đầu tiên của họ. Độ phủ tri thức dùng phán đoán của chính đội về ai có thể vận hành một thành phần, được rà soát cùng đội, và không bao giờ xếp hạng cá nhân. Dữ liệu cộng tác đến từ thẻ và bản ghi hạng mục, không phải từ việc đọc tin nhắn.

## Khuyến nghị

### Vẽ bản đồ các lần bàn giao

**1. Vẽ đường đi của một hạng mục điển hình.** Hãy chọn một loại yêu cầu hoặc sự cố phổ biến và lần theo đường đi của nó từ liên hệ đầu tiên đến giải quyết: mỗi đội, mỗi hàng đợi, mỗi lần chờ. Dùng lịch sử công cụ theo dõi cho các ví dụ thật, không phải sơ đồ quy trình chính thức. Bản đồ cho thấy công việc chờ ở đâu và nảy qua lại ở đâu. Chia sẻ nó với các đội liên quan, và nhờ họ chỉ ra sự lãng phí họ thấy.

**2. Đo bàn giao và thời gian chờ từ lịch sử hạng mục công việc.** Dùng dấu thời gian phân công và hoạt động để tính số lần bàn giao, tỷ lệ chờ và tỷ lệ phân công lại cho từng loại hạng mục. Hãy xem phân phối: phần lớn hạng mục có thể chỉ qua một lần, trong khi một cái đuôi dài nảy qua lại nhiều lần. Cái đuôi là nơi có những trì hoãn lớn nhất và nhiều bực bội nhất.

**3. Đọc dữ liệu cùng những người làm công việc.** Một tỷ lệ phân công lại cao có thể phản ánh quyền sở hữu không rõ, thiếu thông tin, hoặc phân loại chính đáng. Hãy hỏi các đội trước khi kết luận. Họ biết vì sao hạng mục nảy qua lại, và điều gì sẽ ngăn nó.

### Giảm bàn giao và chờ đợi

**4. Chuyển năng lực đến công việc.** Nơi nhiều hạng mục đi đến một đội thứ hai cho một hành động đơn giản, hãy hỏi đội thứ nhất có thể được trao tri thức, quyền truy cập hay tự động hóa để làm nó không. Tự phục vụ và sổ tay vận hành có thể gỡ cả các lần bàn giao (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa). Hãy cẩn thận để việc chuyển công việc không chỉ làm quá tải đội thứ nhất.

**5. Dùng cộng tác thay cho leo thang tuần tự.** Với các sự cố phức tạp hoặc khẩn cấp, hãy đưa những người liên quan lại với nhau theo thời gian thực, với một người điều phối, thay vì chuyển phiếu qua các tầng. Thực hành này, thường gọi là xúm lại, gỡ bỏ thời gian chờ và mất ngữ cảnh mà leo thang theo tầng tạo ra. Theo dõi tỷ lệ giải quyết cộng tác, và xem kết quả và mức hài lòng có cải thiện không (xem chủ đề 3.4, Chỉ số sự cố lớn).

**6. Làm rõ quyền sở hữu ở ranh giới.** Với mỗi dịch vụ và thành phần, hãy nêu ai sở hữu nó, cách liên hệ họ, và họ cần gì trong một lần bàn giao. Một mẫu ngắn về thông tin bắt buộc, được thống nhất với đội nhận, giảm số lần bị trả lại vì thiếu chi tiết. Hãy rà soát các trường hợp phân công lại để tìm khoảng trống quyền sở hữu.

**7. Giảm phụ thuộc nơi chúng gây hại nhất.** Hãy vẽ bản đồ phụ thuộc giữa các đội, đếm mỗi cái gây trì hoãn bao nhiêu lần, và xử lý những cái tệ nhất. Các lựa chọn gồm đổi kiến trúc, trao cho một đội năng lực mà nó cứ phải chờ, hoặc tổ chức lại các đội quanh dịch vụ. [Các đội liên chức năng](https://en.wikipedia.org/wiki/Cross-functional_team) chứa các kỹ năng cần để giao một dịch vụ từ đầu đến cuối giảm thiểu phụ thuộc, và chúng đưa cộng tác liên tục vào cấu trúc. Định luật Conway gợi ý rằng cấu trúc và thiết kế nên được thay đổi cùng nhau.

### Lan truyền tri thức và sự tham gia

**8. Làm độ phủ tri thức hiển thị và cải thiện nó.** Hãy giữ một bản đồ đơn giản về các thành phần trọng yếu và những người có thể vận hành và thay đổi từng cái. Tìm các thành phần chỉ một người biết, và lên kế hoạch làm việc theo cặp, ghi tài liệu và luân phiên để lan truyền nó. Coi kết quả là một rủi ro của hệ thống. Mục đích là khả năng phục hồi và nhịp độ bền vững cho những người biết nhiều nhất, vì một người là chuyên gia duy nhất không thể nghỉ phép.

**9. Giữ các bên liên quan trong vòng liên tục.** Hãy thống nhất cách các bên liên quan sẽ được liên hệ với câu hỏi và câu trả lời nên đến nhanh thế nào. Một đội chờ một tuần cho quyết định về một chi tiết đang chờ bên liên quan, và chi phí là thật. Hãy ghi câu hỏi và câu trả lời, đo thời gian phản hồi, và dùng nó trong các cuộc trò chuyện với các bên liên quan về sự tham gia của họ.

**10. Bảo vệ thời gian cho công việc tập trung.** Cộng tác nên có mục đích. Hãy rà soát các cuộc họp lấp đầy lịch, và với mỗi cái hỏi nó hỗ trợ quyết định nào. Giảm số người trong các cuộc trò chuyện không cần họ, theo định luật Brooks. Ghép điều này với các thước đo tập trung trong chủ đề trước về sức khỏe đội (xem chủ đề 9.1, Sức khỏe đội nhóm và trải nghiệm nhà phát triển).

### Giữ cho trung thực

**11. Đừng đo khối lượng giao tiếp.** Đếm tin nhắn, cuộc họp hay liên kết mạng nói rất ít về việc mọi người có làm việc tốt cùng nhau không, và nó mời gọi giám sát cá nhân. Nếu đội của bạn chọn dùng phân tích mạng xã hội để hiểu thông tin chảy thế nào, hãy làm với sự đồng ý, ở cấp nhóm, và cho việc học của chính đội, và không bao giờ để đánh giá cá nhân.

**12. Rà soát các thước đo bàn giao với các đội và nhà cung cấp.** Chia sẻ các mẫu hình qua các đội và nhà cung cấp liên quan, và thống nhất một hoặc hai cải tiến chung. Theo dõi liệu số lần bàn giao và thời gian chờ có giảm không. Với ranh giới nhà cung cấp, hãy đưa các thước đo vào các buổi rà soát chung (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Số lần bàn giao | Giữ hạng mục được giao cho một đội trong khi đội khác làm việc; phân công lại vào hàng đợi chung để tránh bị đếm | Kiểm tra hoạt động thực tế theo đội; đếm bàn giao theo hoạt động, không chỉ theo phân công |
| Tỷ lệ thời gian chờ sau bàn giao | Ghi một hành động đầu tiên chỉ là xác nhận; giao muộn cho đúng đội | Định nghĩa "hành động đầu tiên" là một bước thực chất; so sánh với mức hài lòng và thời gian giải quyết |
| Tỷ lệ phân công lại | Từ chối phân công lại ngay cả khi sai; đóng và mở lại hạng mục dưới một đội khác | Chất lượng giải quyết và tỷ lệ mở lại; lấy mẫu các hạng mục bị nảy qua lại |
| Độ trễ do phụ thuộc | Không ghi trạng thái bị chặn; nêu sai phụ thuộc | So sánh với thời gian chu trình và tuổi hạng mục; rà soát trường phụ thuộc cùng các đội |
| Tỷ lệ giải quyết cộng tác | Gắn thẻ mọi sự cố là cộng tác; tạo kênh chung không có công việc thật | Kiểm tra cuộc gọi hoặc kênh có gồm những người giải quyết; thời gian giải quyết và kết quả |
| Độ phủ tri thức | Liệt kê những người về lý thuyết có thể làm; thổi phồng bản đồ | Bằng chứng làm việc theo cặp hoặc diễn tập; hỏi ai thực sự thực hiện thay đổi gần nhất |
| Thời gian phản hồi của bên liên quan | Ghi câu hỏi muộn; đánh dấu câu trả lời đã nhận khi nó không dùng được | Bên liên quan xác nhận câu trả lời dùng được; lấy mẫu câu hỏi |

Một kết quả đọc lành mạnh là ít bàn giao hơn cho các hạng mục phổ biến, thời gian chờ ngắn hơn ở những ranh giới còn lại, ít hạng mục bị nảy qua lại hơn, phụ thuộc co lại, nhiều sự cố được giải quyết bởi những người làm việc cùng nhau hơn, các thành phần trọng yếu được nhiều người biết, và các bên liên quan trả lời trong vài giờ.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Hỗ trợ theo tầng với leo thang | Chuyên môn hóa, kiểm soát truy cập | Bàn giao, chờ đợi, mất ngữ cảnh |
| Đội liên chức năng | Ít bàn giao hơn, quyền sở hữu chung | Cần kỹ năng rộng; có thể trùng lặp chuyên gia |
| Giải quyết cộng tác | Nhanh hơn, học tốt hơn | Kéo nhiều người cùng lúc; cần phối hợp |
| Leo thang tuần tự | Dùng chuyên gia hiệu quả | Chậm hơn với vấn đề phức tạp |
| Đội chuyên gia tập trung | Chiều sâu chuyên môn, tiêu chuẩn nhất quán | Nút thắt cổ chai, hàng đợi |
| Chuyên gia nhúng | Tiếp cận nhanh | Cô lập; tiêu chuẩn không đồng đều |
| Văn hóa họp nặng | Nhận thức chung | Ăn mất sự tập trung; làm chậm công việc |
| Giao tiếp viết bất đồng bộ | Bảo toàn sự tập trung; ghi lại quyết định | Chậm hơn với việc khẩn cấp hoặc mơ hồ |

Câu trả lời dạng văn xuôi là giữ chuyên gia nơi chiều sâu quan trọng, đưa mọi người lại với nhau theo thời gian thực cho các vấn đề phức tạp hoặc khẩn cấp, giảm bàn giao qua năng lực và quyền sở hữu rõ ràng, và cân bằng các cuộc họp với sự tập trung được bảo vệ.

## Câu hỏi để thảo luận với đội nhóm

**1. Hãy lần theo sự cố hoặc yêu cầu gần nhất đã nảy qua lại giữa các đội. Nó chờ ở đâu, và vì sao?**
Dùng lịch sử của hạng mục. Đánh dấu mỗi lần bàn giao và chờ. Người điều phối nên tìm thông tin thiếu, quyền sở hữu không rõ, và hàng đợi mà không ai theo dõi. Thống nhất một thay đổi lẽ ra đã ngăn việc nảy qua lại.

**2. Chúng ta thường chờ đội nào nhất, và họ cần gì từ chúng ta để nhanh hơn?**
Liệt kê các phụ thuộc và các trì hoãn chúng gây ra. Mời đội kia vào cuộc trò chuyện, hoặc chuẩn bị câu hỏi cho họ. Thống nhất một thay đổi cho mẫu bàn giao hoặc thỏa thuận làm việc.

**3. Điều gì chỉ một hai người trong chúng ta biết cách làm, và chuyện gì xảy ra khi họ vắng mặt?**
Nêu tên các thành phần hoặc nhiệm vụ. Hỏi kế hoạch nào sẽ lan truyền tri thức: làm việc theo cặp, tài liệu, luân phiên. Người điều phối nên cẩn thận coi đây là rủi ro của hệ thống và là vấn đề khối lượng công việc của các chuyên gia.

**4. Khi nào giải quyết vấn đề cùng nhau theo thời gian thực hiệu quả hơn việc chuyển nó đi?**
Nhớ lại một ví dụ. Điều gì làm nó hiệu quả: đúng người, một người điều phối, một cái nhìn chung? Thảo luận khi nào dùng cách tiếp cận này và cách cho phép nó, như một kênh thường trực và quy tắc về ai tham gia.

**5. Chúng ta chờ câu trả lời từ các bên liên quan bao lâu, và nó tốn gì?**
Nhìn vào các câu hỏi mở và tuổi của chúng. Thảo luận điều gì làm chậm câu trả lời: sự sẵn sàng, câu hỏi không rõ, hay thẩm quyền không rõ. Thống nhất một kỳ vọng với các bên liên quan và cách theo dõi nó.

**6. Cuộc họp nào của chúng ta có thể thay bằng một ghi chú viết hay một quyết định?**
Liệt kê các cuộc họp thường kỳ và với mỗi cái hỏi nó hỗ trợ quyết định nào và ai cần có mặt. Hủy hoặc rút ngắn một cái. Thống nhất bảo vệ một khối thời gian không họp.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối nắm nhiều phụ thuộc và cảm nhận sự chờ đợi. Họ nên vẽ bản đồ phụ thuộc của mình, yêu cầu những năng lực họ cứ phải chờ, chia sẻ tri thức để tránh điểm đơn lẻ, và giữ các bên liên quan gần gũi. Một thành phần liên chức năng thường gỡ những trì hoãn lớn nhất.

### Đội dịch vụ và vận hành

Các đội vận hành và hỗ trợ nằm ở trung tâm của các lần bàn giao: họ nhận, định tuyến và giải quyết. Họ nên duy trì thông tin quyền sở hữu rõ ràng, dùng cộng tác thời gian thực cho các vấn đề khó, và ghi bàn giao chính xác. Họ biết những ranh giới nào gây đau nhất và có thể nói thông tin nào sẽ ngăn việc bị trả lại.

### Lãnh đạo và quản trị

Lãnh đạo định hình cấu trúc tạo ra bàn giao. Họ nên nhìn vào dữ liệu bàn giao và phụ thuộc khi thiết kế đội và tài trợ, ủng hộ các đội liên chức năng nơi chúng giúp ích, và tránh các thước đo khối lượng giao tiếp. Quản trị nên coi các trì hoãn lặp lại ở một ranh giới là một vấn đề cấu trúc cần sửa.

### Khách hàng và người dùng

Người dùng cảm nhận bàn giao như bị đẩy qua đẩy lại, phải lặp lại điều mình nói, và chờ đợi. Họ nên được cho biết ai sở hữu vấn đề của họ và được cập nhật thông tin. Trải nghiệm bị đẩy qua đẩy lại của họ là một thước đo trực tiếp về việc cộng tác hoạt động tốt đến đâu, và phản hồi của họ nên được đọc cùng các con số (xem chủ đề 6.1, Chỉ số mức hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Nhóm CNTT của một nhà bán lẻ quốc gia vận hành một bàn dịch vụ, một đội hạ tầng, một đội nền tảng ứng dụng, và vài đội sản phẩm. Người dùng báo cáo rằng các yêu cầu về hệ thống điểm bán hàng mất quá lâu. Các con số dưới đây chỉ mang tính minh họa.

Người quản lý dịch vụ lần theo 60 yêu cầu gần đây. Yêu cầu trung vị đi qua 3 đội và bách phân vị thứ 85 đi qua 6. Trong trường hợp trung vị, 71 phần trăm thời gian trôi qua được dành để chờ sau một lần bàn giao trước khi đội nhận hành động. 22 phần trăm yêu cầu bị phân công lại hơn hai lần, thường giữa đội hạ tầng và đội nền tảng, mỗi bên tin rằng bên kia sở hữu vấn đề. Thời gian bị chặn chờ một đội khác có trung vị là 3 ngày cho các yêu cầu liên quan đến chứng chỉ, và 8 ngày ở bách phân vị thứ 85. Tri thức về gia hạn chứng chỉ của nền tảng nằm ở một kỹ sư, và hai thành phần trọng yếu khác mỗi cái chỉ một người biết. Các bên liên quan trong vận hành cửa hàng mất trung vị 26 giờ để trả lời câu hỏi từ đội phân phối.

Nhóm thống nhất bốn thay đổi với các đội. Một bảng quyền sở hữu ngắn nêu đội nào sở hữu từng thành phần của dịch vụ điểm bán hàng và một lần bàn giao phải chứa thông tin gì. Bàn dịch vụ được cấp quyền truy cập sổ tay vận hành và tự động hóa cho việc gia hạn chứng chỉ, điều này gỡ một bàn giao phổ biến. Với các sự cố ưu tiên, nhóm lập một kênh thường trực và một quy tắc rằng người điều phối sự cố đưa ngay những người liên quan vào, thay vì leo thang theo tầng. Đội nền tảng ghép người thứ hai và thứ ba vào quy trình chứng chỉ, và lên kế hoạch ghép tương tự cho hai thành phần còn lại, với thời gian được bảo vệ trong kế hoạch. Đội phân phối và vận hành cửa hàng đồng ý trả lời trong ngày cho các câu hỏi chặn, được theo dõi trong một nhật ký câu hỏi.

Ba tháng sau, yêu cầu trung vị đi qua 2 đội, tỷ lệ chờ giảm xuống 38 phần trăm, và tỷ lệ phân công lại xuống 9 phần trăm. Các yêu cầu liên quan đến chứng chỉ có thời gian bị chặn trung vị dưới một ngày. Độ phủ tri thức trên các thành phần trọng yếu tăng từ 52 lên 81 phần trăm. Thời gian phản hồi trung vị của vận hành cửa hàng giảm xuống 7 giờ. Trưởng CNTT được yêu cầu một thước đo về mức các đội giao tiếp. Người quản lý dịch vụ giải thích rằng khối lượng tin nhắn nói rất ít về việc công việc có chảy hay không, và việc theo dõi nó có thể làm suy yếu lòng tin, và đưa ra các thước đo bàn giao và chờ đợi thay vào đó. Quyết định được ghi lại, và bảng quyền sở hữu được thêm vào mô tả dịch vụ.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy đưa đúng người lại với nhau sớm và rà soát bàn giao đều đặn cùng các bên liên quan. Điều cần lưu ý là đếm cuộc họp hay tin nhắn đo hoạt động, không phải cộng tác.

### AI

Các tác nhân và trợ lý AI thêm các bàn giao mới giữa con người và phần mềm. Hãy đo các bàn giao giữa AI và con người, gồm tỷ lệ quay lại để sửa. Điều cần lưu ý là một bàn giao cho một AI không thể hoàn thành tạo ra một vòng lặp ẩn.

### Tự động hóa

Hãy thu thập phân công lại và thời gian chờ từ công cụ theo dõi tự động, và đo định tuyến tự động theo các lần định tuyến sai. Điều cần lưu ý là siêu dữ liệu giao tiếp về cá nhân là giám sát, nên hãy giữ phân tích ở cấp đội.

### Phân tích

Hãy cho thấy số lần bàn giao và tỷ lệ chờ theo dòng giá trị kèm số đếm. Quyết định được cung cấp thông tin là gỡ hay thiết kế lại bàn giao nào. Điều cần lưu ý là đếm bàn giao mà không có nguyên nhân dẫn đến việc sáp nhập đội vì lý do sai.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Các đội nhỏ cộng tác một cách tự nhiên, và bàn giao xuất hiện khi các chuyên gia xuất hiện. Hãy giữ các đội liên chức năng càng lâu càng tốt, ghi tài liệu quyền sở hữu nhẹ nhàng, và để ý tri thức do một người nắm. Đừng nhập hỗ trợ theo tầng quá sớm.

**Doanh nghiệp nhỏ.** Một hai người có thể đảm đương mọi thứ, và rủi ro lớn nhất là sự phụ thuộc vào họ. Hãy chia sẻ tri thức qua các sổ tay vận hành đơn giản và có người thay khi vắng mặt. Bàn giao với nhà cung cấp là ranh giới chính, nên hãy giữ liên hệ và đường leo thang rõ ràng.

**Doanh nghiệp lớn.** Quy mô tạo ra nhiều đội, tầng và nhà cung cấp, và bàn giao nhân lên. Hãy vẽ bản đồ các đường đi hạng mục phổ biến nhất, thiết kế ranh giới đội quanh dịch vụ, và dùng vai trò điều phối cho các sự cố liên đội. Chia sẻ dữ liệu bàn giao giữa các đội để ranh giới nhận được sự chú ý chung.

**Chính phủ và khu vực công.** Trách nhiệm thường bị chia qua các cơ quan, nhà thầu và ranh giới pháp lý, và bàn giao liên quan đến mua sắm và phê duyệt chính thức. Hãy làm bảng quyền sở hữu tường minh, dùng rà soát chung với nhà thầu, và dùng các kênh chung cho sự cố vượt qua ranh giới (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là công sức trích xuất và phân tích lịch sử phân công, thời gian để các đội lần theo đường đi và thống nhất quyền sở hữu, chi phí đào tạo chéo, và bất kỳ công cụ nào cho cộng tác thời gian thực. Tái cấu trúc các đội là một quyết định lớn hơn với chi phí riêng.

Lợi tức là thời gian giải quyết và giao ngắn hơn, ít làm lại hơn từ các hạng mục bị nảy qua lại, rủi ro thấp hơn từ các điểm tri thức đơn lẻ, và một môi trường làm việc bình tĩnh hơn. Hãy xây hồ sơ từ dữ liệu của chính bạn: tỷ lệ thời gian trôi qua dành để chờ, số hạng mục nảy qua lại, chi phí của các trì hoãn ở ranh giới tệ nhất, và tác động của việc vắng mặt của người then chốt lên các sự cố trong quá khứ. Tránh trích dẫn các con số đã công bố về chi phí của bàn giao trừ khi bạn truy được nguồn và bối cảnh. Hãy tính chi phí của các thay đổi, và so sánh với sự trì hoãn được gỡ bỏ (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Đếm tin nhắn hay cuộc họp.** Nó thưởng cho tiếng ồn và mời gọi giám sát. Hãy đo dòng chảy của công việc.
- **Tối ưu hóa tốc độ của từng lần bàn giao.** Mục đích là ít bàn giao hơn. Hãy gỡ chúng nơi bạn có thể.
- **Đổ lỗi cho đội nhận về thời gian chờ.** Nguyên nhân thường là hàng đợi và cấu trúc. Hãy nhìn vào hệ thống.
- **Leo thang theo mặc định.** Các tầng tuần tự thêm chờ đợi. Hãy đưa mọi người lại với nhau cho các vấn đề phức tạp.
- **Quyền sở hữu không rõ.** Hạng mục nảy qua lại. Hãy công bố bảng quyền sở hữu và giữ nó hiện hành.
- **Chuyên gia anh hùng.** Điểm tri thức đơn lẻ là một rủi ro và một gánh nặng. Hãy lan truyền tri thức có chủ ý.
- **Cuộc họp như cộng tác.** Chúng có thể chen lấn công việc. Hãy rà soát chúng theo quyết định.
- **Coi độ phủ tri thức là đánh giá cá nhân.** Nó trở thành xếp hạng. Hãy giữ nó là thước đo hệ thống.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Khả năng nhìn thấy bàn giao | Giai thoại | Đường đi được vẽ cho một vài dịch vụ | Số lần bàn giao, tỷ lệ chờ và phân công lại được đo từ lịch sử | Các thước đo được rà soát cùng đội và liên kết với kết quả | Cái nhìn chung qua các đội và nhà cung cấp; ranh giới được thiết kế lại từ dữ liệu |
| Giảm bàn giao | Leo thang theo mặc định | Một số sổ tay vận hành và mẫu | Bảng quyền sở hữu; năng lực chuyển đến đội đầu tiên; cộng tác cho vấn đề khó | Phụ thuộc được vẽ bản đồ và giảm; giải quyết cộng tác được theo dõi | Các đội được tổ chức quanh dịch vụ với phụ thuộc tối thiểu trong toàn tổ chức |
| Tri thức và bên liên quan | Chuyên gia gánh mọi thứ | Chia sẻ không chính thức | Độ phủ tri thức được vẽ bản đồ; câu hỏi của bên liên quan được ghi lại | Độ phủ và thời gian phản hồi được quản lý; làm việc theo cặp được lên kế hoạch | Tri thức và quyết định chảy tự do giữa các đội, nhà cung cấp và bên liên quan |

## Danh sách kiểm tra

- [ ] Đường đi của một hạng mục điển hình đã được lần theo từ lịch sử công cụ theo dõi thật.
- [ ] Số lần bàn giao, tỷ lệ chờ và tỷ lệ phân công lại được đo cho từng loại hạng mục.
- [ ] Quyền sở hữu của mỗi dịch vụ và thành phần được công bố và hiện hành.
- [ ] Một mẫu bàn giao nêu thông tin đội nhận cần.
- [ ] Sự cố phức tạp hoặc khẩn cấp dùng cộng tác thời gian thực với một người điều phối.
- [ ] Phụ thuộc liên đội được vẽ bản đồ, và những cái tệ nhất đang được giảm.
- [ ] Độ phủ tri thức của các thành phần trọng yếu được vẽ bản đồ, kèm kế hoạch lan truyền.
- [ ] Câu hỏi của bên liên quan được ghi lại và thời gian phản hồi được rà soát.
- [ ] Không thước đo nào đếm tin nhắn, cuộc họp hay giao tiếp cá nhân.
- [ ] Kết quả được chia sẻ với các đội và nhà cung cấp liên quan.

## Lời nhắc AI

**Phân tích một đường đi của các hạng mục công việc.**

```text
Here are anonymized assignment histories for [number] [type of item]: item,
sequence of teams, timestamps of assignment and first action: [paste]. Compute
or describe handoff counts and waits, identify the common paths and the long
tail, and suggest likely reasons for waiting and bouncing, with questions to ask
the teams. Do not infer anything about individuals. List your assumptions.
```

**Soạn một bảng quyền sở hữu.**

```text
Draft an ownership table for the service [name] with these components and teams:
[list]. For each component include owning team, how to reach them, what a
handoff must contain, and the escalation route. Flag components where ownership
looks unclear or shared. Keep it to one page. List your assumptions and questions
for the teams.
```

**Lập kế hoạch lan truyền tri thức.**

```text
Our critical components and the number of people able to operate each are:
[paste]. Propose a plan to spread knowledge for components known to fewer than
[number] people: pairing, documentation, drills, and rotation. Suggest how to
protect the experts' workload during the plan and how to track progress
without ranking individuals. List your assumptions and risks.
```

**Thiết kế một cách tiếp cận sự cố cộng tác.**

```text
Design a lightweight approach for real-time collaborative resolution of
priority incidents in [type of organization] with [teams]. Include how to open
a shared space, who coordinates, who is invited, what is recorded, and how to
avoid pulling in too many people. Include measures to tell whether it helps.
List your assumptions and cautions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số bàn giao hoặc cộng tác.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số cộng tác đo công việc chứ không phải cá nhân, kèm vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Phần lớn sự trì hoãn nằm ở thời gian chờ giữa các lần bàn giao, nên hãy đo số lần bàn giao, tỷ lệ chờ và phân công lại từ lịch sử hạng mục công việc.
- Giảm bàn giao bằng cách chuyển năng lực đến công việc, làm rõ quyền sở hữu, và vẽ bản đồ và cắt giảm phụ thuộc.
- Đưa đúng người lại với nhau theo thời gian thực cho các vấn đề phức tạp hoặc khẩn cấp.
- Lan truyền tri thức về các thành phần trọng yếu, và coi các điểm tri thức đơn lẻ là rủi ro hệ thống.
- Giữ các bên liên quan tham gia liên tục, với câu trả lời nhanh cho các câu hỏi chặn.
- Không bao giờ đo khối lượng giao tiếp hay đánh giá cá nhân về cộng tác.

## Tài liệu tham khảo và đọc thêm

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
