# Chỉ số hài lòng của khách hàng

**Điểm hài lòng cho bạn biết mọi người cảm thấy thế nào về một khoảnh khắc dịch vụ, nên hãy hỏi những câu ngắn, trung thực vào đúng lúc, đọc bình luận trước các con số, và đừng bao giờ để một điểm số trở thành chỉ tiêu.**

## Tổng quan và động lực

Các thước đo vận hành nói dịch vụ đã làm gì. Các thước đo hài lòng nói việc nhận nó như thế nào. Một phiếu có thể đóng trong thời gian mục tiêu mà vẫn để người dùng bị kẹt, và một dịch vụ được khôi phục vẫn có thể cảm thấy như một tuần tồi. Các đội linh hoạt hỏi cùng điều đó vào cuối mỗi bản tăng: điều này có giúp những người nó dành cho không? Quản lý dịch vụ CNTT (ITSM), như được ITIL hệ thống hóa, hỏi qua giá trị mà một dịch vụ đồng kiến tạo với khách hàng của nó. Đo lường sự hài lòng là nơi hai câu hỏi gặp nhau.

[Sự hài lòng của khách hàng](https://en.wikipedia.org/wiki/Customer_satisfaction) là thước đo mức sản phẩm và dịch vụ đáp ứng hoặc vượt kỳ vọng của khách hàng. Trong công việc dịch vụ nó thường được thu thập bằng khảo sát, và có ba dạng phổ biến mà chủ đề này bao quát:

- **Điểm hài lòng của khách hàng (CSAT):** một đánh giá về một tương tác hoặc dịch vụ cụ thể, thường trên thang năm điểm, báo cáo dưới dạng tỷ lệ các phản hồi hài lòng.
- **Điểm giới thiệu ròng (NPS):** dựa trên một câu hỏi về khả năng người trả lời giới thiệu một công ty, sản phẩm hay dịch vụ. Người trả lời 9 hoặc 10 là người ủng hộ, người trả lời 0 đến 6 là người chê, và điểm số là phần trăm người ủng hộ trừ phần trăm người chê. [Điểm giới thiệu ròng](https://en.wikipedia.org/wiki/Net_promoter_score) được Fred Reichheld phổ biến trong một bài báo năm 2003 trên *Harvard Business Review*.
- **Điểm công sức của khách hàng (CES):** một đánh giá về công sức bỏ ra để hoàn tất một việc, hoặc việc đó dễ đến đâu. Các tác giả của nó lập luận rằng giảm công sức dự đoán lòng trung thành tốt hơn làm mọi người thích thú. Hãy coi khẳng định đó là một giả thuyết để kiểm thử trong bối cảnh của chính bạn, không phải sự thật đã an bài.

Trong bối cảnh CNTT nội bộ, "khách hàng" là một đồng nghiệp, và khảo sát là một câu hỏi ngắn sau một phiếu hay một bản phát hành. Các nguyên tắc giống nhau, và các nghĩa vụ đạo đức lớn hơn, vì những người bạn hỏi sẽ làm việc với bạn vào ngày mai.

Khảo sát là một dạng [phương pháp luận khảo sát](https://en.wikipedia.org/wiki/Survey_methodology), một lĩnh vực có nhiều thập kỷ phát hiện về cách diễn đạt câu hỏi, thời điểm và lấy mẫu làm đổi câu trả lời. Các đội bỏ qua nó có xu hướng tạo ra những điểm số dịch chuyển vì những lý do không liên quan đến chất lượng dịch vụ. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng với sức mạnh thêm ở đây: khi nhân viên được thưởng vì điểm cao, họ học cách xin nó (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Chủ đề này đưa cho bạn các định nghĩa, vệ sinh dữ liệu và thói quen giữ cho các thước đo hài lòng trung thực. Chủ đề kế tiếp mở rộng chúng về một cái nhìn đầy đủ hơn về trải nghiệm (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm).

## Nguyên tắc chính

- **Hỏi về một khoảnh khắc cụ thể.** Một khảo sát gắn với một phiếu đã đóng hoặc một bản phát hành cho câu trả lời sắc nét hơn một câu hỏi chung hằng năm.
- **Giữ nó ngắn.** Một đánh giá và một bình luận mở thắng mười câu hỏi mà hầu hết mọi người bỏ qua.
- **Đọc bình luận.** Điểm số cho bạn biết bao nhiêu, và lời nói cho bạn biết vì sao.
- **Báo cáo ai đã trả lời.** Một điểm số không có tỷ lệ phản hồi và cơ cấu người trả lời là một tin đồn.
- **Khép vòng.** Những người báo một trải nghiệm tồi nên nhận được hồi âm.
- **So sánh với chính mình theo thời gian.** Các chuẩn đối sánh giữa các công ty giấu sự khác biệt về phương pháp, đối tượng và văn hóa.
- **Bảo vệ người trả lời.** Chỉ thu thập điều bạn cần, nói rõ nó sẽ được dùng ra sao, và không xếp hạng cá nhân dựa trên nó.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Tỷ lệ phản hồi hài lòng, cho một loại tương tác xác định | số phản hồi đánh giá 4 hoặc 5 trên thang năm điểm / số phản hồi hợp lệ | phần trăm | Khảo sát sau tương tác gắn với phiếu hoặc bản phát hành | Bàn dịch vụ; quản lý sự cố; quản lý mức dịch vụ | Phản hồi của buổi rà soát bên liên quan | Hằng tuần hoặc hằng tháng |
| NPS | Người ủng hộ trừ người chê cho một dịch vụ và đối tượng xác định | phần trăm trả lời 9 hoặc 10 trừ phần trăm trả lời 0 đến 6 | điểm, phạm vi -100 đến 100 | Khảo sát mối quan hệ, gửi theo một khoảng cố định | Cải tiến liên tục; quản lý mức dịch vụ | Rà soát kết quả sản phẩm | Hằng quý |
| CES | Đánh giá trung bình hoặc tỷ lệ thuận lợi về việc hoàn tất một việc dễ đến đâu | số phản hồi thuận lợi / số phản hồi hợp lệ, hoặc điểm trung bình | phần trăm hoặc giá trị trung bình | Khảo sát sau tương tác gắn với phiếu, yêu cầu hoặc bản phát hành | Quản lý yêu cầu dịch vụ; bàn dịch vụ | Phản hồi về tính dùng được trong tinh chỉnh | Hằng tháng |
| Tỷ lệ phản hồi khảo sát | Tỷ lệ người dùng được mời đã phản hồi | số phản hồi nhận được / số khảo sát đã gửi đến | phần trăm | Công cụ khảo sát và hệ thống phiếu | Đo lường và báo cáo | Sự tham gia phản hồi trong các buổi rà soát | Hằng tháng |
| Độ phủ người trả lời | Cơ cấu người trả lời khớp với quần thể người dùng đến đâu trên các chiều đã thống nhất | tỷ lệ người trả lời ở mỗi nhóm so với tỷ lệ người dùng ở nhóm đó, theo từng nhóm | điểm phần trăm | Công cụ khảo sát ghép với thư mục người dùng hoặc dữ liệu phiếu | Đo lường và báo cáo | Bản đồ bên liên quan | Hằng quý |
| Tỷ lệ chủ đề bình luận | Tỷ lệ bình luận văn bản tự do được gán cho mỗi chủ đề | số bình luận trong chủ đề / số bình luận đã mã hóa | phần trăm | Bình luận khảo sát đã mã hóa | Cải tiến liên tục | Chủ đề của buổi nhìn lại | Hằng tháng |
| Thời gian theo dõi người chê | Thời gian từ một đánh giá thấp đến một lần liên hệ có ghi lại với người dùng | dấu thời gian ghi chú theo dõi trừ dấu thời gian đánh giá thấp, trung vị và bách phân vị thứ 85 | giờ hoặc ngày | Công cụ khảo sát và hệ thống phiếu | Quản lý sự cố; cải tiến liên tục | Vòng phản hồi trong thỏa thuận làm việc | Hằng tháng |

Đồng hồ và ranh giới quan trọng. CSAT và CES chỉ đếm phản hồi cho tương tác cụ thể, không bao giờ tâm trạng chung. Thời gian theo dõi người chê bắt đầu ở thời điểm đánh giá thấp được ghi lại, không phải khi ai đó lần đầu đọc nó. Hãy loại các bản ghi thử và phản hồi từ thành viên của đội đang được đo.

## Khuyến nghị

### Thiết kế công cụ

**1. Chọn một câu hỏi cho mỗi mục đích.** Dùng CSAT sau một tương tác để biết tương tác đó diễn ra ra sao, CES sau điều người dùng phải làm để biết ma sát nằm ở đâu, và NPS theo khoảng đều để biết về mối quan hệ chung. Trộn cả ba trong một biểu mẫu mời gọi mệt mỏi vì khảo sát và kết quả mờ. Nếu bạn chỉ kham nổi một cái, hãy chọn cái khớp với quyết định bạn cần đưa ra.

**2. Viết từ ngữ trung lập, cụ thể.** "Bạn hài lòng đến đâu với cách yêu cầu của bạn được xử lý?" tốt hơn "Dịch vụ của chúng tôi tuyệt vời đến đâu?" Tránh các câu hỏi hai vế hỏi cả tốc độ lẫn sự thân thiện cùng lúc. Đưa ra một thang nhất quán, gắn nhãn hai đầu của nó, và giữ thứ tự các câu trả lời như nhau mỗi lần. Một [thang Likert](https://en.wikipedia.org/wiki/Likert_scale) là một thiết kế phổ biến, và những thay đổi nhỏ trong nhãn có thể làm lệch kết quả, nên đừng đổi chúng tùy tiện.

**3. Thêm một câu hỏi mở.** "Lý do chính cho đánh giá của bạn là gì?" tốn ít công của người trả lời và cho đội dữ liệu phong phú nhất. Bình luận giải thích điểm số, phơi bày các vấn đề mà con số không làm được, và cho nhân viên điều để học. Hãy đọc chúng trong một buổi rà soát đều đặn, đọc to nếu có thể.

**4. Chọn thời điểm khảo sát gần sự kiện.** Hãy gửi câu hỏi ngay sau khi phiếu được giải quyết hoặc bản phát hành hạ cánh, khi trí nhớ còn mới. Đừng gửi nó vào lúc đóng bởi một nhân viên hy vọng một điểm cao. Một độ trễ ngắn, do hệ thống đặt, gỡ bỏ cám dỗ huấn luyện câu trả lời.

### Làm cho các con số đáng tin

**5. Báo cáo tỷ lệ phản hồi và cơ cấu người trả lời cạnh mỗi điểm số.** Một điểm hài lòng từ 4 phần trăm người dùng là một phát biểu về những người trả lời. Hãy so sánh ai đã trả lời với ai được mời, dùng các thuộc tính bạn đã có, như vùng, dịch vụ hoặc loại yêu cầu. Những khoảng chênh lớn nghĩa là điểm số cần một nhãn cảnh báo. Tính đại diện là chủ đề cốt lõi của nghiên cứu [thiên lệch phản hồi](https://en.wikipedia.org/wiki/Response_bias), và điểm cho một đội dịch vụ đơn giản là hãy nhìn.

**6. Cho thấy độ bất định.** Mẫu nhỏ dao động mạnh. Một [biên sai số](https://en.wikipedia.org/wiki/Margin_of_error) hoặc một [khoảng tin cậy](https://en.wikipedia.org/wiki/Confidence_interval) cho thấy cạnh CSAT hằng tháng ngăn đội phản ứng với nhiễu (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Nếu một đội có ít hơn vài chục phản hồi trong một kỳ, hãy báo cáo số đếm và đọc bình luận, không phải phần trăm.

**7. Tránh chọn ai được hỏi.** Nếu người đóng phiếu quyết định có gửi khảo sát hay không, điểm tăng vì lý do sai. Hãy gửi khảo sát tự động cho mọi tương tác đủ điều kiện, hoặc cho một mẫu ngẫu nhiên nếu khối lượng cao. Ghi quy tắc, gồm mọi trường hợp loại trừ, vào sổ đăng ký chỉ số.

**8. Tách sự hài lòng của một người khỏi hiệu suất của một người.** Sự hài lòng phụ thuộc vào các yếu tố mà một nhân viên cá nhân không kiểm soát: chất lượng sản phẩm, hàng đợi, chính sách, tâm trạng người dùng. Đừng xếp hạng nhân viên theo CSAT. Hãy dùng nó ở cấp đội và dịch vụ, và dùng bình luận cho các cuộc trò chuyện huấn luyện mà nhân viên hoan nghênh.

### Hành động theo điều bạn nghe

**9. Khép vòng với người dùng không hài lòng.** Hãy liên hệ những người báo một trải nghiệm tồi, hỏi điều gì sẽ giúp được, và ghi lại điều bạn học. Đặt mục tiêu cho thời gian theo dõi và làm cho việc theo dõi là một cuộc trò chuyện, không phải một yêu cầu đổi điểm. Đổi điểm theo yêu cầu là một sự bóp méo, nên việc theo dõi nên nhắm vào sửa vấn đề và học hỏi.

**10. Mã hóa bình luận thành chủ đề và theo dõi chúng.** Hãy thống nhất một danh sách ngắn các chủ đề, như "phải lặp lại", "phản hồi chậm", "bản sửa không bền", "giao tiếp không rõ" và "thân thiện và hữu ích". Mã hóa một mẫu mỗi tháng, bằng tay hoặc bằng công cụ, và nhờ một người kiểm tra kết quả. Xu hướng chủ đề thường cho thấy vấn đề trước khi điểm số dịch chuyển.

**11. Liên kết sự hài lòng với dữ liệu vận hành.** Hãy so sánh CSAT với thời gian giải quyết, tỷ lệ mở lại và số lần liên hệ mỗi vấn đề. Các cặp cho bạn biết tốc độ có đang mua sự hài lòng không hay đội nhanh mà sai. Dùng chúng để tìm các câu chuyện cần điều tra, không phải để chứng minh một quy tắc.

**12. Đối xử cẩn thận với chuẩn đối sánh.** Các số liệu được công bố hoặc do nhà cung cấp đưa ra cho điểm hài lòng phụ thuộc vào phương pháp, đối tượng và vùng, và lịch sử của chính bạn là phép so sánh tốt hơn. Nếu bạn dùng một phép so sánh bên ngoài, hãy nêu nguồn, phương pháp và ngày của nó, và đừng đặt mục tiêu từ nó mà không kiểm tra liệu phương pháp của bạn có khớp không. Không bao giờ bịa một chuẩn đối sánh.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| CSAT | Nhân viên huấn luyện người dùng cho điểm tối đa; khảo sát chỉ gửi sau các phiếu dễ; phiếu khó đóng mà không khảo sát | Khảo sát tự động cho mọi phiếu đủ điều kiện; tỷ lệ phản hồi và cơ cấu người trả lời; tỷ lệ mở lại |
| NPS | Chỉ khảo sát người dùng thân thiện; chọn thời điểm khảo sát sau một sự kiện tốt; hỏi trực tiếp; gắn nhãn lại các điểm trên thang | Đối tượng và lịch cố định trong sổ đăng ký; độ phủ người trả lời; đọc bình luận của người chê |
| CES | Gỡ các bước khỏi biểu mẫu theo cách chuyển công việc sang nơi khác; chỉ hỏi sau các yêu cầu suôn sẻ | Số lần liên hệ mỗi vấn đề; thời gian thực hiện yêu cầu và làm lại (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ) |
| Tỷ lệ phản hồi khảo sát | Chỉ mời những người có khả năng trả lời; gửi khảo sát cho một danh sách khác mỗi lần | Quy tắc mời được viết ra; so sánh người được mời với quần thể người dùng |
| Độ phủ người trả lời | Bỏ các nhóm khó tiếp cận khỏi phép so sánh; đặt lại trọng số mà không nói | Công bố các chiều và phương pháp; cho thấy kết quả chưa đặt trọng số cạnh kết quả đã đặt |
| Tỷ lệ chủ đề bình luận | Mã hóa bình luận để tránh chủ đề xấu; gộp chủ đề để không cái nào trông lớn | Người thứ hai mã hóa một mẫu; giữ danh sách chủ đề ổn định và ghi nhật ký thay đổi |
| Thời gian theo dõi người chê | Ghi một ghi chú mà không liên hệ người dùng; liên hệ người dùng để xin một điểm tốt hơn | Kiểm tra nội dung ghi chú theo dõi; hỏi người dùng trong khảo sát kế tiếp liệu có ai liên hệ họ không |

Một kết quả đọc lành mạnh là tỷ lệ phản hồi ổn định, cơ cấu người trả lời gần với cơ cấu người dùng, một điểm số dịch chuyển cùng trải nghiệm người dùng mô tả trong bình luận, và những người dùng không hài lòng nói rằng có ai đó đã liên hệ lại.

## Đánh đổi: ưu điểm và nhược điểm

| Thước đo | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| CSAT | Đơn giản, nhanh, gắn với một khoảnh khắc cụ thể | Dễ bị thổi phồng; nói ít về toàn bộ mối quan hệ |
| NPS | Một câu hỏi, dễ theo dõi theo thời gian | Giấu lý do; một con số nén một phân phối rộng; khác biệt văn hóa ảnh hưởng đến thang |
| CES | Chỉ thẳng vào ma sát mà đội có thể gỡ | Ít được hiểu rộng rãi; bằng chứng còn tranh cãi |
| Khảo sát dài hằng năm | Phong phú, bao quát nhiều dịch vụ | Chậm, phản hồi thấp, khó hành động theo |
| Chỉ bình luận | Cụ thể, dễ nhớ | Khó so sánh theo thời gian; dễ bị tiếng nói to nhất chi phối |
| Tín hiệu hành vi | Không có gánh nặng khảo sát; khách quan | Không nắm bắt cảm xúc; có thể đọc sai nguyên nhân |

Câu trả lời dạng văn xuôi là kết hợp một khảo sát tương tác ngắn, một khảo sát mối quan hệ thỉnh thoảng và các bình luận, và đọc cả ba cùng dữ liệu vận hành. Các thước đo hài lòng hoạt động như một cuộc trò chuyện giữa người dùng và đội. Chúng thất bại khi là một bảng điểm.

## Câu hỏi để thảo luận với đội nhóm

**1. Chúng ta làm gì với một điểm thấp và một điểm cao?**
Yêu cầu đội mô tả, trong thực tế, lần cuối một điểm thấp dẫn đến thay đổi. Rồi hỏi cùng điều đó cho một điểm cao. Nếu câu trả lời mơ hồ, khảo sát là một nghi thức. Người điều phối nên tìm một liên kết cụ thể từ dữ liệu đến một hành động, và thống nhất một nơi liên kết đó sẽ được ghi lại.

**2. Ai trả lời khảo sát của chúng ta, và ai không?**
Yêu cầu đội nêu tên các nhóm người dùng họ nghe ít nhất. So sánh với danh sách mời và thư mục người dùng. Cuộc trò chuyện thường lộ ra rằng những người dùng yên lặng nhất có vấn đề khó nhất. Thống nhất một cách tiếp cận một nhóm yên lặng trong quý này, như một cuộc gọi ngắn hoặc một kênh khác.

**3. Chúng ta hỏi ở thời điểm nào trong tương tác, và ai quyết định?**
Đi qua đường từ giải quyết đến khảo sát. Tìm mọi điểm mà một người có thể ảnh hưởng khảo sát có được gửi, khi nào hay thế nào. Thống nhất những điểm nào trong số này nên được tự động hóa. Người điều phối có thể hỏi một nhân viên có thể làm gì để bảo vệ điểm số, như một câu hỏi thiết kế và không phải một lời buộc tội.

**4. Một người chê nghe được gì từ chúng ta sau khi họ trả lời?**
Xem vài đánh giá thấp gần đây và đọc các ghi chú theo dõi. Hỏi người dùng có cảm thấy được lắng nghe không. Thảo luận cách làm cho việc theo dõi hữu ích mà không xin đổi đánh giá. Quyết định ai sở hữu việc theo dõi và thời gian mục tiêu là bao nhiêu.

**5. Những bình luận nào của tháng trước đã thay đổi điều chúng ta làm?**
In hoặc hiển thị mười bình luận ngẫu nhiên. Hỏi đội cái nào đã được hành động theo, cái nào không, và vì sao. Điều này giữ trọng tâm vào lời nói và xây thói quen đọc chúng. Thống nhất mã hóa chủ đề cho tháng tới và rà soát xu hướng.

**6. Số liệu đã công bố nào chúng ta bị cám dỗ so mình với, và phép so sánh có công bằng không?**
Nêu tên con số, nguồn, phương pháp và đối tượng của nó, rồi so sánh từng cái với của chính bạn. Hỏi liệu nó có đổi một quyết định không. Nếu không, hãy gạt nó sang một bên và dùng xu hướng của chính bạn. Người điều phối nên ghi câu trả lời vào sổ đăng ký chỉ số.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội sản phẩm dùng phản hồi hài lòng để quyết định sửa hoặc xây gì tiếp theo, và các khảo sát ngắn sau một bản phát hành cho cái nhìn nhanh hơn buổi rà soát hằng quý kế tiếp. Các đội phân phối nên nối bình luận với các hạng mục tồn đọng, cho người dùng thấy điều đã đổi, và tránh coi một điểm số là mục tiêu phân phối. Bình luận về công sức hay sự bối rối tăng sau một bản phát hành là tín hiệu để nhìn vào bản phát hành, không phải khảo sát.

### Đội dịch vụ và vận hành

Bàn dịch vụ thu thập hầu hết dữ liệu tương tác và cảm nhận áp lực của điểm số nhiều nhất. Các đội vận hành nên gửi khảo sát tự động, công bố quy tắc lấy mẫu, và dùng bình luận cho việc học của đội. Họ nên giữ CSAT cạnh tỷ lệ mở lại và liên hệ lặp lại, để các lần đóng nhanh không trông như kết quả tốt (xem chủ đề 3.1, Chỉ số bàn dịch vụ).

### Lãnh đạo và quản trị

Lãnh đạo đặt bầu không khí cho việc lợi dụng. Một yêu cầu "95 phần trăm hài lòng vào cuối năm" dạy nhân viên bảo vệ con số. Lãnh đạo nên yêu cầu tỷ lệ phản hồi, cơ cấu người trả lời và các chủ đề bình luận hàng đầu, tài trợ các bản sửa mà bình luận làm lộ ra, và giữ sự hài lòng ngoài lương và xếp hạng cá nhân. Quản trị nên chờ đợi một phương pháp nêu rõ cho bất kỳ con số nào nó báo cáo ra ngoài.

### Khách hàng và người dùng

Người dùng cho thời gian và sự thẳng thắn của họ. Họ xứng đáng một khảo sát ngắn, một lý do rõ ràng cho việc hỏi, một lời hứa về cách câu trả lời của họ sẽ được dùng, và một hồi âm khi họ báo một vấn đề. Nơi khảo sát không ẩn danh, hãy nói rõ. Người dùng không thấy gì thay đổi sẽ ngừng trả lời, và sự im lặng sẽ trông như sự hài lòng.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực vận hành một bàn dịch vụ và một đội nhỏ xây ứng dụng lâm sàng. Các con số dưới đây chỉ mang tính minh họa.

CSAT hằng tháng của bàn dịch vụ là 92 phần trăm, tính từ 140 phản hồi trong khoảng 3.100 phiếu đã đóng, tỷ lệ phản hồi 4,5 phần trăm. Ban lãnh đạo hài lòng. Người quản lý dịch vụ đọc các bình luận và nhận thấy nhiều phản hồi tích cực đến từ nhân viên hành chính, trong khi y tá ca đêm hầu như không xuất hiện. Bà so sánh cơ cấu người trả lời với thư mục người dùng và thấy nhân viên ca đêm là khoảng 18 phần trăm người dùng và 3 phần trăm người trả lời.

Đội thực hiện ba thay đổi. Khảo sát trở thành một biểu mẫu hai câu hỏi với một đánh giá và một bình luận, được hệ thống phiếu gửi tự động bốn giờ sau khi giải quyết, cho mọi phiếu. Một phiên bản tin nhắn văn bản được đưa ra cho nhân viên theo ca. Báo cáo hằng tháng giờ cho thấy CSAT cùng tỷ lệ phản hồi, khoảng tin cậy, cơ cấu người trả lời so với cơ cấu người dùng, và năm chủ đề bình luận hàng đầu.

Trong hai tháng, tỷ lệ phản hồi tăng lên khoảng 11 phần trăm và CSAT giảm xuống 84 phần trăm. Các chủ đề bình luận cho thấy "phải gọi lại" và "bản sửa không bền" là hai phàn nàn hàng đầu, tập trung ở các hệ thống lâm sàng. Trưởng CNTT nói với hội đồng rằng điểm cũ phản ánh ai đã trả lời, và điểm mới là một chỉ dẫn tốt hơn. Đội sản phẩm thêm một hạng mục tồn đọng để sửa lỗi lặp lại đứng sau các cuộc gọi lại, và bàn dịch vụ bắt đầu liên hệ mỗi người dùng cho đánh giá 1 hoặc 2 trong vòng một ngày làm việc. Trong quý kế tiếp, tỷ lệ liên hệ lặp lại cho các hệ thống lâm sàng giảm, và tỷ lệ bình luận "phải gọi lại" giảm theo. Đội ghi quyết định vào nhật ký của mình và không đặt mục tiêu CSAT.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy xin phản hồi liên tục và với lượng nhỏ, và rà soát bình luận cùng các bên liên quan ở mỗi cuộc trao đổi cải tiến đều đặn. Điều cần lưu ý là mệt mỏi vì khảo sát hạ tỷ lệ phản hồi và làm lệch ai trả lời.

### AI

AI có thể tóm tắt bình luận và cảm xúc ở khối lượng lớn, và các tương tác có AI hỗ trợ có thể được đánh giá khác với tương tác của con người. Hãy báo cáo sự hài lòng riêng cho các liên hệ do AI và do con người xử lý, ghép điểm với chủ đề bình luận, và nhờ một người đọc một mẫu. Điều cần lưu ý là một mô hình cảm xúc có thể đọc sai giọng điệu hay ngôn ngữ, nên hãy kiểm tra nó với một mẫu thủ công.

### Tự động hóa

Hãy kích hoạt khảo sát tự động ở một thời điểm đã chọn, và đo quy trình khảo sát theo tỷ lệ phản hồi và cơ cấu người trả lời. Điều cần lưu ý là khảo sát tự động chỉ sau các liên hệ thành công làm lệch điểm lên trên.

### Phân tích

Hãy cho thấy điểm số cùng số phản hồi và cơ cấu người trả lời, và đọc bình luận trước con số. Quyết định được cung cấp thông tin là hành trình nào cần cải thiện. Điều cần lưu ý là điểm trên ít phản hồi dịch chuyển nhiều, nên hãy cho thấy số đếm.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Tiếp xúc gần với người dùng làm các cuộc trò chuyện ngắn tốt hơn khảo sát lúc đầu. Hãy thêm một khảo sát một câu hỏi khi khối lượng lớn lên, và tiếp tục đọc mọi bình luận. Chống lại thôi thúc công bố một điểm số trước khi bạn có đủ phản hồi để nó có nghĩa.

**Doanh nghiệp nhỏ.** Một khách hàng không hài lòng có thể quan trọng hơn một điểm số. Hãy dùng khảo sát như lời nhắc để nói chuyện với mọi người, và giữ hồ sơ các lần theo dõi. Báo cáo hài lòng do nhà cung cấp đưa ra xứng đáng sự hoài nghi về phương pháp.

**Doanh nghiệp lớn.** Quy mô mang đến các phân khúc và cám dỗ tổng hợp. Hãy giữ điểm số theo dịch vụ và đối tượng, công bố phương pháp, và tránh lấy trung bình các dịch vụ không giống nhau thành một con số. Dùng một nền tảng khảo sát ổn định với gửi tự động, và đối xử thận trọng với mọi bảng xếp hạng giữa các đội.

**Chính phủ và khu vực công.** Các cơ quan công thường có nghĩa vụ chính thức thu thập phản hồi người dùng và công bố kết quả, cùng nghĩa vụ về khả năng tiếp cận và quyền riêng tư. Hãy cung cấp kênh khảo sát tiếp cận được, bảo vệ danh tính người trả lời, và công bố phương pháp cùng kết quả. Nơi một con số hài lòng xuất hiện trong hợp đồng hay báo cáo theo luật, hãy định nghĩa nó chính xác và cho thấy rào chắn cạnh nó (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí trực tiếp là công cụ khảo sát, vốn nhiều hệ thống phiếu đã có sẵn, một hai giờ mỗi tháng để rà soát bình luận và mã hóa chủ đề, và thời gian theo dõi người dùng không hài lòng. Chi phí lớn hơn là kỷ luật hành động theo điều bạn nghe. Không cần một nền tảng mới để bắt đầu.

Lợi tức hiện ra dưới dạng các bản sửa mà người dùng coi trọng và lãng phí tránh được. Bình luận cho bạn biết ma sát nằm ở đâu, để bạn gỡ nguyên nhân của liên hệ lặp lại và bản sửa thất bại thay vì thêm nhân viên để xử lý chúng. Một cái nhìn tốt hơn về ai không trả lời bảo vệ bạn khỏi các quyết định dựa trên một nhúm tự chọn. Hãy mô tả lợi ích theo các vấn đề được tìm thấy và gỡ bỏ, và đo đường cơ sở của riêng bạn trước và sau: tỷ lệ liên hệ lặp lại, tỷ lệ mở lại và thời gian đến phản hồi hữu ích đầu tiên. Đừng dùng một phần trăm bịa ra để biện minh cho chương trình. Nếu bạn cần số liệu, hãy xây chúng từ dữ liệu của chính bạn.

## Phản mẫu và cạm bẫy

- **Coi điểm số là mục tiêu.** Nó sẽ được đạt bằng cách chọn ai được hỏi hoặc huấn luyện câu trả lời. Hãy dùng nó như một câu hỏi và ghép với bình luận và các thước đo vận hành.
- **Chỉ khảo sát sau các phiếu dễ.** Hãy gửi cho mọi tương tác đủ điều kiện, tự động.
- **Xếp hạng nhân viên theo CSAT.** Nó phạt những người nhận ca khó. Hãy dùng cái nhìn cấp đội và dịch vụ và học từ bình luận.
- **Xin một điểm tốt hơn.** Theo dõi một đánh giá thấp nên nhắm vào sửa vấn đề. Đừng yêu cầu đổi.
- **Báo cáo điểm số không có tỷ lệ phản hồi.** Luôn cho thấy ai đã trả lời và bao nhiêu người.
- **Đổi câu hỏi mà giữ xu hướng.** Hãy ghi nhật ký thay đổi và đánh dấu chỗ đứt trên biểu đồ.
- **Nhập chuẩn đối sánh mà không có phương pháp của nó.** Hãy so sánh với lịch sử của chính bạn trước.
- **Thu thập bình luận và không bao giờ đọc chúng.** Hãy đặt một buổi rà soát vào lịch và giao người sở hữu.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Công cụ và lấy mẫu | Thỉnh thoảng có khảo sát tùy tiện | Khảo sát tồn tại cho một số dịch vụ, gửi bằng tay | Khảo sát ngắn gửi tự động cho mọi tương tác đủ điều kiện | Quy tắc lấy mẫu, thay đổi từ ngữ và trường hợp loại trừ được ghi nhật ký và rà soát | Công cụ được căn chỉnh giữa các đội và nhà cung cấp, và sửa cùng người dùng |
| Chất lượng dữ liệu | Chỉ có điểm số | Tỷ lệ phản hồi được báo cáo | Tỷ lệ phản hồi, cơ cấu người trả lời và độ bất định được báo cáo | Độ phủ người trả lời được quản lý; việc mã hóa được người thứ hai kiểm tra | Cái nhìn chung về trải nghiệm qua các dịch vụ, với người dùng tham gia diễn giải |
| Hành động và theo dõi | Điểm số được báo cáo, không có gì thay đổi | Thỉnh thoảng có bản sửa từ bình luận | Theo dõi người chê có thời gian mục tiêu; chủ đề được theo dõi | Chủ đề thúc đẩy công việc cải tiến được tài trợ và liên kết với dữ liệu vận hành | Vòng khép kín bao trùm các đội và nhà cung cấp; người dùng thấy điều đã đổi |

## Danh sách kiểm tra

- [ ] Mỗi khảo sát có một mục đích nêu rõ và một quyết định nó cung cấp thông tin.
- [ ] Câu hỏi ngắn, trung lập, và gồm một bình luận mở.
- [ ] Khảo sát được gửi tự động cho mọi tương tác đủ điều kiện hoặc cho một mẫu ngẫu nhiên có tài liệu.
- [ ] Tỷ lệ phản hồi và cơ cấu người trả lời được cho thấy cạnh mọi điểm số.
- [ ] Độ bất định được cho thấy, và mẫu nhỏ được báo cáo dưới dạng số đếm.
- [ ] Không nhân viên cá nhân nào bị xếp hạng theo sự hài lòng.
- [ ] Một người có tên theo dõi các đánh giá thấp trong thời gian đã thống nhất.
- [ ] Bình luận được mã hóa thành một danh sách chủ đề ổn định và rà soát hằng tháng.
- [ ] Thay đổi từ ngữ và lấy mẫu được ghi nhật ký và đánh dấu trên biểu đồ.
- [ ] Người trả lời được cho biết câu trả lời của họ được dùng ra sao, và dữ liệu cá nhân được bảo vệ.

## Lời nhắc AI

**Rà soát một công cụ khảo sát.**

```text
I run [service or team] for [type of organization]. We survey [audience] after
[event] using this wording: [paste questions and scale]. Review it for leading
language, double-barrelled questions, unclear scales, and burden on the
respondent. Suggest a shorter version that keeps one rating and one open
comment. Do not invent benchmark values or claim research results you cannot
cite. List your assumptions and what you could not judge from the text.
```

**Mã hóa bình luận khảo sát thành chủ đề.**

```text
Here are [number] anonymized survey comments for [service], from [period]:
[paste comments with personal data removed]. Propose a short list of themes (no
more than eight) and assign each comment to one theme, with a confidence note
where it is ambiguous. Report the count per theme and three representative
quotes per theme. Do not identify individuals. Tell me what a person should
check before relying on this coding, and list your assumptions.
```

**Kiểm tra tính đại diện.**

```text
We received [responses] responses from [invited] invitations. Respondents by
[dimension, for example region or shift]: [counts]. Our user population by the
same dimension: [counts]. Compare the two, describe where the respondent mix
differs, and say what cautions we should attach to our satisfaction score.
Suggest two practical ways to reach underrepresented groups. Do not infer
causes beyond the data, and list your assumptions.
```

**Lập kế hoạch theo dõi khép vòng.**

```text
Draft a short process for following up with users who give a rating of
[threshold] or lower in [service]. Include who contacts them, within what time,
what to say, what to record, and how to avoid asking for a changed rating.
Context: [team size, tools, hours]. List your assumptions and any steps that
depend on tooling I have not described.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số hài lòng trước khi bạn công bố nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số khảo sát đã sửa giữ vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Điểm hài lòng mô tả một khoảnh khắc dịch vụ cảm thấy ra sao, nên hãy gắn khảo sát với các sự kiện cụ thể và giữ chúng ngắn.
- Luôn báo cáo tỷ lệ phản hồi, cơ cấu người trả lời và độ bất định cùng điểm số.
- Bình luận giải thích các con số, nên hãy đọc chúng mỗi tháng và mã hóa chúng thành chủ đề.
- Gửi khảo sát tự động và không bao giờ yêu cầu người dùng đổi đánh giá.
- Dùng sự hài lòng ở cấp đội và dịch vụ, không bao giờ để xếp hạng con người, và đối xử cẩn thận với chuẩn đối sánh bên ngoài.
- Khép vòng: những người báo một trải nghiệm tồi nên nhận được hồi âm và thấy sự thay đổi.

## Tài liệu tham khảo và đọc thêm

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
