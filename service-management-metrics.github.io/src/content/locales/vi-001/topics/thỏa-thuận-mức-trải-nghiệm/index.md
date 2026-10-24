# Thỏa thuận mức trải nghiệm

**Một thỏa thuận mức trải nghiệm thêm câu hỏi "dùng nó có cảm giác thế nào?" vào câu hỏi "dịch vụ có đạt mục tiêu của nó không?", và nó chỉ hiệu quả khi các thước đo trải nghiệm được chọn cùng người dùng và giữ cạnh các thước đo vận hành.**

## Tổng quan và động lực

Một [thỏa thuận mức dịch vụ](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) ghi lại điều một nhà cung cấp cam kết giao, thường theo các thuật ngữ nhà cung cấp đếm được: tính sẵn sàng, thời gian phản hồi, thời gian giải quyết. Những thước đo đó hữu ích và cũng chưa đầy đủ. Một đội có thể đạt mọi mục tiêu trên bảng điều khiển trong khi người dùng dành tuần của họ để đi vòng qua đăng nhập chậm, lặp lại điều mình nói với bàn dịch vụ, và chờ phê duyệt. Khoảng cách giữa báo cáo xanh và người dùng không hài lòng này đôi khi được gọi là hiệu ứng dưa hấu: xanh bên ngoài, đỏ bên trong (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

Một **thỏa thuận mức trải nghiệm (XLA)** là một thỏa thuận, giữa nhà cung cấp và những người dùng một dịch vụ, về trải nghiệm mà dịch vụ nên mang lại. Nó nêu các kết quả và cảm nhận mong muốn, như "tôi có thể bắt đầu làm việc trong vài phút sau khi đến" hay "tôi tin rằng yêu cầu của tôi sẽ được xử lý", và nó nêu tên các thước đo sẽ cho thấy chúng có được đáp ứng không. Thuật ngữ này được dùng khắp cộng đồng quản lý dịch vụ CNTT (ITSM), và định nghĩa chính xác của nó khác nhau giữa các tác giả và nhà cung cấp. Hãy kiểm tra các ấn phẩm hiện hành của chủ sở hữu khung trước khi mô tả một XLA là một phần của ITIL, và nêu bạn theo cách dùng nào. Chủ đề này coi XLA là một ý tưởng thực tế: một thỏa thuận đặt các thước đo trải nghiệm cạnh các thước đo vận hành.

Ý tưởng có gốc ngoài CNTT. [Trải nghiệm người dùng](https://en.wikipedia.org/wiki/User_experience) là trải nghiệm tổng thể của một người dùng một sản phẩm, hệ thống hay dịch vụ, và [trải nghiệm khách hàng](https://en.wikipedia.org/wiki/Customer_experience) là tổng các tương tác của một khách hàng với một tổ chức theo thời gian. [Tính dùng được](https://en.wikipedia.org/wiki/Usability) liên quan đến việc mọi người đạt mục tiêu của mình hiệu quả, hiệu suất và thỏa mãn đến đâu. Các đội linh hoạt biết lãnh thổ này từ tư duy thiết kế và nghiên cứu người dùng, và từ các buổi rà soát bên liên quan nơi người dùng phản ứng với phần mềm chạy được. Một XLA mang cùng sự chú ý đó đến dịch vụ lúc vận hành.

Trải nghiệm khó đo và dễ bị bóp méo. Một khảo sát chỉ đến được người dùng vui, một điểm cảm xúc được tinh chỉnh để tăng, hoặc một "chỉ số trải nghiệm" duy nhất mà không ai giải thích được sẽ gây hiểu lầm chắc chắn như một thời gian phiếu bị lợi dụng. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng đầy đủ: các thước đo trải nghiệm là khởi đầu cho cuộc trò chuyện, không phải chỉ tiêu (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Chủ đề này xây trên các thước đo khảo sát trong chủ đề trước (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng) và thêm các thước đo hành vi và theo hành trình không phụ thuộc vào việc hỏi.

## Nguyên tắc chính

- **Bắt đầu với các kết quả mà mọi người quan tâm.** Hỏi người dùng một ngày tốt trông thế nào, và viết thỏa thuận bằng lời của họ.
- **Ghép trải nghiệm với vận hành.** Một XLA đứng cạnh một SLA, không thay thế nó.
- **Dùng một vài thước đo từ các góc khác nhau.** Kết hợp điều mọi người nói, điều họ làm và điều hệ thống ghi lại.
- **Đo hành trình cũng như điểm chạm.** Một trải nghiệm là toàn bộ con đường từ nhu cầu đến kết quả.
- **Trung thực về độ bất định.** Dữ liệu trải nghiệm nhiễu, và các nhóm nhỏ cần được bảo vệ.
- **Thống nhất mục tiêu với người dùng, và sửa chúng.** Một XLA là một thỏa thuận sống, được rà soát cùng những người nó mô tả.
- **Không bao giờ dùng dữ liệu trải nghiệm để xếp hạng cá nhân.**

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Điểm trải nghiệm | Đánh giá trung bình về một phát biểu trải nghiệm đã thống nhất, cho một dịch vụ và đối tượng | điểm trung bình qua các phản hồi hợp lệ cho một phát biểu trên một thang cố định | điểm trên thang | Khảo sát nhanh ngắn, gửi theo lịch | Quản lý mức dịch vụ; cải tiến liên tục | Phản hồi của buổi rà soát bên liên quan; rà soát kết quả sản phẩm | Hằng tháng |
| Xu hướng cảm xúc | Hướng của giọng điệu trong bình luận văn bản tự do cho một dịch vụ | tỷ lệ bình luận mã hóa tích cực trừ tỷ lệ mã hóa tiêu cực, theo kỳ | điểm phần trăm | Bình luận khảo sát và bình luận phiếu đã mã hóa | Cải tiến liên tục | Chủ đề của buổi nhìn lại | Hằng tháng |
| Sự kiện ma sát mỗi người dùng | Số tín hiệu cho thấy một người dùng gặp rắc rối, chuẩn hóa theo người dùng hoạt động | (liên hệ lặp lại + hạng mục mở lại + đăng nhập thất bại vượt một số đã đặt + yêu cầu bị bỏ dở) / người dùng hoạt động | sự kiện mỗi người dùng | Hệ thống phiếu, nhật ký danh tính, cổng yêu cầu | Bàn dịch vụ; quản lý sự cố | Lỗi phát hiện khi sử dụng | Hằng tháng |
| Thời gian mất vì vấn đề CNTT | Thời gian ước tính người dùng mất vì các vấn đề dịch vụ trong một kỳ | số phút mất tự báo cáo mỗi người dùng, hoặc thời gian đo được ở trạng thái suy giảm có trọng số theo số người dùng bị ảnh hưởng | phút mỗi người dùng | Khảo sát nhanh; giám sát ghép với số đếm người dùng | Quản lý tính sẵn sàng; quản lý sự cố | Thời gian chu trình mất vì chướng ngại | Hằng quý |
| Tỷ lệ hoàn tất hành trình | Tỷ lệ người dùng hoàn thành một hành trình xác định mà không bỏ dở hay tìm trợ giúp | số người dùng hoàn tất hành trình không có liên hệ trợ giúp / số người dùng bắt đầu hành trình | phần trăm | Phân tích cổng; liên kết phiếu | Quản lý yêu cầu dịch vụ; quản lý danh mục dịch vụ | Thành công tác vụ trong kiểm thử tính dùng được | Hằng tháng |
| Mức đạt XLA | Tỷ lệ mục tiêu trải nghiệm đã thống nhất đạt được trong kỳ | số mục tiêu đạt / số mục tiêu đã thống nhất | phần trăm | Sổ đăng ký XLA | Quản lý mức dịch vụ | Đạt mục tiêu phân phối | Hằng quý |
| Khoảng cách trải nghiệm | Chênh lệch giữa mức đạt SLA và điểm trải nghiệm cho cùng một dịch vụ | thứ hạng mức đạt SLA trừ thứ hạng điểm trải nghiệm qua các dịch vụ, hoặc một so sánh bằng văn bản | chênh lệch thứ hạng hoặc ghi chú | Báo cáo SLA và khảo sát nhanh | Quản lý mức dịch vụ | Định nghĩa hoàn thành so với phản hồi người dùng | Hằng quý |

Hãy định nghĩa đối tượng và kỳ cho mọi thước đo. Nêu cách nhóm nhỏ được bảo vệ: ví dụ, không kết quả nào được cho thấy cho bất kỳ nhóm nào dưới mười người. Sự kiện ma sát đếm tín hiệu, không phải đổ lỗi, nên một sự kiện được gắn với một dịch vụ và một nhóm người dùng, không bao giờ với đánh giá hiệu suất của một người có tên.

## Khuyến nghị

### Thiết kế thỏa thuận cùng người dùng

**1. Phỏng vấn trước khi đo.** Hãy dành thời gian với một mẫu người dùng từ mỗi nhóm quan trọng và hỏi: Một ngày tốt với dịch vụ này trông thế nào? Nó lãng phí thời gian của bạn ở đâu? Bạn sẽ ngừng làm gì nếu nó hoạt động? Dùng thói quen [thiết kế lấy con người làm trung tâm](https://en.wikipedia.org/wiki/Human-centered_design): quan sát công việc thật, và viết điều bạn nghe bằng lời của người dùng. Các phát biểu kết quả trở thành các mục tiêu trải nghiệm của thỏa thuận.

**2. Viết phát biểu trải nghiệm như kết quả.** "Tôi có thể làm cho một nhân viên mới làm việc hiệu quả ngay buổi sáng đầu tiên" nói nhiều hơn "yêu cầu quyền truy cập cho nhân viên mới được giải quyết trong hai ngày". Giữ mỗi phát biểu ngắn, ở ngôi thứ nhất, và gắn với một dịch vụ. Nhắm tới ba đến năm phát biểu cho mỗi dịch vụ để mọi người nhớ được.

**3. Chọn thước đo từ ba góc.** Với mỗi phát biểu, chọn một thước đo từ điều mọi người nói (một câu hỏi nhanh hoặc chủ đề bình luận), một từ điều mọi người làm (hoàn tất hành trình, liên hệ lặp lại, yêu cầu bị bỏ dở), và nơi có thể một từ điều hệ thống ghi lại (độ trễ cho các bước trong hành trình). Khi ba thứ bất đồng, bạn đã tìm thấy điều cần điều tra.

**4. Thống nhất mục tiêu nhẹ nhàng.** Lúc đầu, hãy đặt một hướng ("giảm thời gian mất") và một ngày rà soát thay vì một con số cứng. Mục tiêu cứng cho thước đo trải nghiệm mới mời gọi lợi dụng trước khi thước đo được hiểu. Khi một mục tiêu xuất hiện, hãy làm nó là một khoảng, và nói ai đã đồng ý.

### Thu thập và đọc dữ liệu

**5. Dùng câu hỏi nhanh ngắn, đều đặn.** Một câu hỏi về một phát biểu, hỏi theo khoảng đều, dễ trả lời hơn một khảo sát dài hằng năm. Hãy luân phiên các phát biểu, giữ từ ngữ ổn định, và tránh hỏi cùng một người nhiều hơn một lần trong một kỳ đã định. Liên kết thiết kế câu hỏi nhanh với các nguyên tắc khảo sát trong chủ đề trước (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

**6. Đọc bình luận bằng một phương pháp.** Các công cụ [phân tích cảm xúc](https://en.wikipedia.org/wiki/Sentiment_analysis) có thể sắp xếp khối lượng văn bản lớn, và chúng đọc sai sự mỉa mai, biệt ngữ và ngữ cảnh. Hãy coi đầu ra của công cụ là lượt đầu, nhờ một người kiểm tra một mẫu mỗi tháng, và giữ một danh sách ngắn các chủ đề mà bạn mã hóa bằng tay. Mục đích của phân tích là tìm các chủ đề để nói chuyện với người dùng, không phải tạo ra một điểm số.

**7. Thêm tín hiệu hành vi từ hành trình.** Hãy đo các hành trình người dùng quan tâm, với sự biết của họ: họ bắt đầu ở đâu, bỏ cuộc ở đâu, và xin giúp đỡ ở đâu? [Giám sát người dùng thực](https://en.wikipedia.org/wiki/Real_user_monitoring) về thời gian tải trang, lỗi và các bước cho một cái nhìn mà khảo sát không có. Hãy nói với người dùng bạn thu thập gì, giữ nó ở mức bạn cần, và tổng hợp nó trước khi chia sẻ.

**8. Bảo vệ nhóm nhỏ và cá nhân.** Dữ liệu trải nghiệm có thể lộ ra ai đang chật vật. Hãy tổng hợp kết quả, chặn các nhóm dưới một kích thước đã thống nhất, và không bao giờ dùng dữ liệu trong đánh giá hiệu suất. Quyết định ai được xem bình luận thô, và lưu chúng cho phù hợp. Trong bối cảnh có quy định, hãy hỏi chuyên gia quyền riêng tư trước khi thu thập dữ liệu hành vi.

### Dùng thỏa thuận

**9. Cho thấy SLA và XLA cạnh nhau.** Trên cùng một trang, hiển thị mức đạt vận hành và các thước đo trải nghiệm cho mỗi dịch vụ. Việc ghép cặp chính là điểm mấu chốt: một SLA xanh với điểm trải nghiệm đang giảm là gợi ý cho một cuộc trò chuyện, và một điểm trải nghiệm xanh với các SLA đang trượt xứng đáng một cái nhìn vào điều người dùng không được nói.

**10. Tổ chức một buổi rà soát trải nghiệm đều đặn cùng người dùng.** Hãy họp hằng quý với đại diện các nhóm người dùng, cho xem dữ liệu, hỏi nó nghĩa là gì, và thống nhất một hai cải tiến để thử. Gồm cả bàn dịch vụ và đội sản phẩm, vì nguyên nhân của một trải nghiệm kém thường nằm trong sản phẩm, không phải hỗ trợ.

**11. Tài trợ các bản sửa.** Một thỏa thuận xác định ma sát rồi để nó nguyên chỗ dạy người dùng rằng các thước đo chỉ là màn kịch. Hãy đặt hai ba vấn đề trải nghiệm hàng đầu vào tồn đọng kèm người sở hữu và ngày, và báo cáo về chúng ở buổi rà soát kế tiếp. Xem các chỉ số cải tiến liên tục ở phần sau cuốn sách (xem chủ đề 9.5, Chỉ số cải tiến liên tục).

**12. Sửa thỏa thuận khi dịch vụ và người dùng thay đổi.** Hãy cho nghỉ hưu các phát biểu không còn quan trọng và thêm cái mới. Ghi nhật ký các thay đổi và đánh dấu chúng trên biểu đồ xu hướng, như bạn làm với bất kỳ định nghĩa chỉ số nào.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Điểm trải nghiệm | Chỉ khảo sát người dùng hài lòng; chọn thời điểm khảo sát sau sự kiện tốt; đổi từ ngữ của phát biểu để dễ đồng ý hơn | Tỷ lệ phản hồi và cơ cấu người trả lời; nhật ký từ ngữ ổn định; đọc bình luận |
| Xu hướng cảm xúc | Tinh chỉnh công cụ hoặc danh sách chủ đề đến khi xu hướng tăng; loại các kênh tiêu cực | Người kiểm tra một mẫu hằng tháng; giữ một hướng dẫn mã hóa cố định và ghi nhật ký thay đổi |
| Sự kiện ma sát mỗi người dùng | Định nghĩa lại sự kiện để ít cái được đếm; ngăn cản liên hệ lặp lại bằng cách làm cho bàn dịch vụ khó liên lạc | Khối lượng liên hệ theo kênh; tỷ lệ bỏ cuộc ở bàn dịch vụ (xem chủ đề 3.1, Chỉ số bàn dịch vụ) |
| Thời gian mất vì vấn đề CNTT | Hỏi theo cách neo các ước lượng thấp; chỉ đếm các sự cố lớn | So sánh thời gian tự báo cáo với thời gian suy giảm đo được; rà soát từ ngữ khảo sát |
| Tỷ lệ hoàn tất hành trình | Định nghĩa hành trình hẹp đến mức thất bại nằm ngoài phạm vi; chuyển các trường hợp khó sang kênh khác | Định nghĩa hành trình trong sổ đăng ký; tỷ lệ liên hệ trợ giúp và leo thang |
| Mức đạt XLA | Đặt các mục tiêu đã được đáp ứng; định nghĩa một tập mục tiêu rất nhỏ | Rà soát việc đặt mục tiêu cùng người dùng; cho thấy mức đạt kèm xu hướng và lịch sử mục tiêu |
| Khoảng cách trải nghiệm | Chọn các dịch vụ hoặc kỳ trông đẹp nhất; đổi các SLA nào được so sánh | Tập so sánh cố định thống nhất từ trước; cho thấy mọi dịch vụ |

Một kết quả đọc lành mạnh là một bức tranh trải nghiệm khớp với các bình luận và cuộc trò chuyện rà soát cùng người dùng, một tập nhỏ các thước đo thay đổi chậm và vì những lý do đội giải thích được, và một tồn đọng các bản sửa trải nghiệm ngày càng ngắn lại.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Chỉ SLA | Rõ ràng, đếm được, có tính hợp đồng | Bỏ sót điều người dùng cảm nhận; có thể xanh trong khi người dùng không hài lòng |
| Chỉ XLA | Gần với điều người dùng coi trọng | Khó đo và so sánh hơn; yếu làm cơ sở cho hợp đồng với nhà cung cấp |
| SLA cùng XLA | Cho cả hai góc nhìn và phơi bày khoảng cách | Nhiều việc hơn; cần lòng tin và phán đoán khi đọc các bất đồng |
| Thước đo trải nghiệm dựa trên khảo sát | Tiếng nói trực tiếp của người dùng | Thiên lệch phản hồi; gánh nặng cho người trả lời |
| Thước đo hành vi | Không có gánh nặng khảo sát; khách quan | Cần đo đạc và cẩn trọng về quyền riêng tư; cho thấy điều đã xảy ra, không phải vì sao |
| Chỉ số trải nghiệm đơn | Tiêu đề dễ | Giấu chi tiết; dễ bị lợi dụng và khó giải thích |

Câu trả lời dạng văn xuôi là dùng XLA như một phần bổ sung, được giới thiệu cho vài dịch vụ nơi khoảng cách giữa vận hành và trải nghiệm đã hiển thị. Đừng thay các SLA hợp đồng bằng các thước đo trải nghiệm mà nhà cung cấp không kiểm soát được. Hãy giữ các cam kết pháp lý và thương mại trong SLA, và dùng XLA để thúc đẩy cải tiến và cuộc trò chuyện.

## Câu hỏi để thảo luận với đội nhóm

**1. Với dịch vụ quan trọng nhất của chúng ta, một ngày tốt trông thế nào với người dùng, bằng lời của họ?**
Hãy tập hợp hai ba người dùng, hoặc dùng lại các cuộc phỏng vấn gần đây, và viết ra các phát biểu của họ. Người điều phối nên kiềm chế việc diễn đạt lại chúng thành thuật ngữ vận hành. So sánh các phát biểu với SLA hiện tại và hỏi nó bao phủ phát biểu nào, và bỏ qua phát biểu nào. Các khoảng trống là ứng viên cho thước đo trải nghiệm.

**2. Bảng điều khiển xanh của chúng ta và các câu chuyện của người dùng bất đồng ở đâu?**
Hỏi đội về một trường hợp gần đây trong đó một dịch vụ đạt mục tiêu và người dùng phàn nàn. Lần theo trường hợp qua dữ liệu: chúng ta đã đo gì, và đã bỏ sót gì? Cuộc trò chuyện thường làm lộ ra một bước còn thiếu, một lần bàn giao, hoặc một đồng hồ dừng sớm. Ghi trường hợp làm ví dụ cho buổi rà soát kế tiếp cùng người dùng.

**3. Ba thước đo nào chúng ta sẽ dùng để biết phát biểu trải nghiệm này có đúng không?**
Chọn một phát biểu và chọn một thước đo từ điều mọi người nói, một từ điều họ làm, và một từ điều hệ thống ghi lại. Hỏi mỗi cái có thể bỏ sót gì, và mỗi cái có thể bị lợi dụng ra sao. Thống nhất tập nhỏ nhất sẽ thuyết phục được một người dùng hoài nghi.

**4. Chúng ta thu thập gì về người dùng mà họ có thể không ngờ, và họ có thoải mái với điều đó không?**
Liệt kê các nguồn dữ liệu hành vi và mục đích của mỗi cái. Nhờ một đại diện người dùng phản ứng. Người điều phối nên coi sự không thoải mái là thông tin về thiết kế, không phải một chướng ngại. Quyết định ngừng thu thập gì, tổng hợp gì, và ai được xem dữ liệu thô.

**5. Chúng ta sẽ làm gì nếu điểm trải nghiệm giảm trong khi mọi SLA vẫn xanh?**
Hãy tập dượt phản ứng. Ai nhìn trước, họ kiểm tra gì, và họ nói chuyện với ai? Quyết định liệu đội sẽ tin điểm trải nghiệm hay tìm cách bác bỏ nó. Câu trả lời cho thấy đội coi trọng thỏa thuận đến mức nào.

**6. Chúng ta đã hứa những bản sửa trải nghiệm nào, và điều gì xảy ra với chúng?**
Hãy xem hai buổi họp rà soát gần nhất với người dùng. Với mỗi cam kết, cho thấy ngày, người sở hữu và kết quả. Nếu danh sách trống hoặc cũ, thảo luận vì sao. Thống nhất một bản sửa để giao trước buổi rà soát kế tiếp và một cách nói với người dùng rằng nó đã xảy ra.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội sản phẩm nắm giữ nhiều nguyên nhân của một trải nghiệm kém: màn hình gây nhầm lẫn, bước chậm, lỗi không rõ. Các thước đo trải nghiệm cho họ bằng chứng từ sử dụng thật, và chúng nuôi trực tiếp việc tinh chỉnh. Các đội nên đọc các chủ đề bình luận trước mỗi buổi lập kế hoạch, và nối các thước đo hành trình với tồn đọng. Họ không nên coi điểm trải nghiệm là mục tiêu của đội. Nó là thông tin về dịch vụ họ chia sẻ với vận hành.

### Đội dịch vụ và vận hành

Các đội vận hành thấy ma sát đầu tiên: liên hệ lặp lại, cách lách và những người gọi tức giận. Các thước đo trải nghiệm cho họ một cách để cho thấy điều SLA giấu, và một lý do để sửa nguyên nhân thay vì đóng phiếu nhanh hơn. Họ nên giữ vững các định nghĩa và việc lấy mẫu, tránh dẫn người dùng sang các kênh trông đẹp hơn, và đọc đầy đủ các bình luận không hài lòng (xem chủ đề 3.1, Chỉ số bàn dịch vụ).

### Lãnh đạo và quản trị

Lãnh đạo chọn một XLA là một cuộc trò chuyện hay một bảng điểm. Họ nên hỏi dữ liệu trải nghiệm nói gì về nơi đầu tư, tránh gắn lương với một chỉ số trải nghiệm, và bảo vệ quyền riêng tư của dữ liệu nhân viên. Quản trị nên yêu cầu các định nghĩa, việc lấy mẫu và lịch sử thay đổi, và nên coi một bước nhảy không giải thích được của một thước đo trải nghiệm là lý do để kiểm tra phương pháp.

### Khách hàng và người dùng

Người dùng là tác giả của thỏa thuận. Họ nên được mời mô tả cái tốt trông thế nào, được cho xem kết quả, và được nói điều đã đổi. Họ nên biết điều gì được thu thập về mình và vì sao, và có cách để nói không. Người dùng bị hỏi thường xuyên và không thấy gì cải thiện sẽ ngừng trả lời, và sự im lặng sẽ làm dữ liệu trông tốt hơn thực tế.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một công ty dịch vụ chuyên nghiệp cỡ vừa vận hành một dịch vụ CNTT nội bộ cho 1.800 nhân viên. Các con số dưới đây chỉ mang tính minh họa.

Báo cáo SLA hằng tháng cho thấy tính sẵn sàng 99,8 phần trăm cho nền tảng cộng tác và 96 phần trăm sự cố được giải quyết trong mục tiêu. Giám đốc CNTT hài lòng, nhưng các cố vấn tại địa điểm khách hàng vẫn phàn nàn về đăng nhập chậm. Người quản lý dịch vụ đề xuất một thí điểm XLA cho nền tảng cộng tác.

Trong các cuộc phỏng vấn với 12 cố vấn, ba phát biểu nổi lên: "Tôi có thể tham gia cuộc gọi với khách hàng trong hai phút sau khi quyết định", "Tôi không phải gọi CNTT để vào lại tài khoản của mình", và "khi có gì hỏng, tôi biết chuyện gì đang xảy ra". Đội chọn thước đo cho từng cái. Với cái đầu, họ lấy điểm đánh giá nhanh của phát biểu và thời gian đo được từ lúc bắt đầu đăng nhập đến lúc tham gia cuộc gọi từ giám sát người dùng thực của khách hàng, tổng hợp theo vùng. Với cái thứ hai, họ đếm số liên hệ đặt lại mật khẩu mỗi người dùng hoạt động mỗi tháng. Với cái thứ ba, họ theo dõi tỷ lệ sự cố có thông báo trạng thái được cập nhật trong 30 phút, và hỏi câu hỏi nhanh về nó.

Hai tháng dữ liệu đầu cho thấy thời gian trung vị từ đăng nhập đến tham gia cuộc gọi ổn ở vùng trụ sở nhưng dài ở hai vùng khác, và số liên hệ đặt lại mật khẩu mỗi người dùng cao gấp ba lần với nhân viên dùng máy tính xách tay được quản lý so với những người khác. Điểm trải nghiệm cho phát biểu đầu là 3,1 trên 5 so với 4,2 cho nhân viên văn phòng. SLA xanh ở cả hai. Người quản lý dịch vụ đưa phát hiện đến buổi rà soát người dùng. Đội thống nhất hai cải tiến: tinh chỉnh cấu hình đăng nhập một lần cho các vùng từ xa, và đổi thiết lập làm mới token trên máy tính xách tay được quản lý. Ba tháng sau, thời gian trung vị giảm, số liên hệ đặt lại mỗi người dùng giảm, và điểm trải nghiệm tăng lên 3,8. Giám đốc đồng ý giữ XLA cho dịch vụ này, thêm nó vào một dịch vụ nữa, và không đặt mục tiêu bằng số nào cho đến buổi rà soát kế tiếp.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy thống nhất các thước đo trải nghiệm với người dùng và xem lại chúng khi dịch vụ tiến hóa, với sự tham gia liên tục của các bên liên quan. Điều cần lưu ý là một mục tiêu trải nghiệm do riêng nhà cung cấp đặt sẽ không mô tả điều người dùng cảm nhận.

### AI

Các tính năng AI thay đổi trải nghiệm trực tiếp, nên hãy gồm các hành trình dùng chúng và đo kết quả của người dùng, không phải độ tự tin của mô hình. Hãy ghép điểm trải nghiệm với hoàn tất tác vụ và leo thang đến con người. Điều cần lưu ý là một chatbot cảm giác dễ chịu trong khi thất bại tác vụ làm điểm đẹp lên.

### Tự động hóa

Hãy thu thập sự kiện ma sát và hoàn tất hành trình tự động, kèm sự đồng ý và quy tắc quyền riêng tư, và đo việc thu thập theo độ phủ. Điều cần lưu ý là dữ liệu trải nghiệm tự động về cá nhân có thể thành giám sát, nên hãy tổng hợp và tối thiểu hóa.

### Phân tích

Hãy báo cáo điểm trải nghiệm cùng các thước đo vận hành trên cùng một trang, và khoảng cách giữa chúng. Quyết định được cung cấp thông tin là cải thiện dịch vụ nào dù SLA của nó xanh. Điều cần lưu ý là khoảng cách có thể là một hiện vật đo lường, nên hãy kiểm tra mẫu.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Tiếp xúc gần với người dùng làm phỏng vấn dễ dàng. Hãy chống lại việc xây một khung: viết ba phát biểu trải nghiệm cho dịch vụ lõi, hỏi người dùng về chúng mỗi tháng, và thêm một thước đo hành vi. Thỏa thuận chính thức đến sau.

**Doanh nghiệp nhỏ.** Nhân viên ít và thường chung một quản lý với CNTT. Hãy dùng các cuộc trò chuyện và một câu hỏi nhanh hằng tháng rất ngắn. Hãy cẩn thận với dữ liệu hành vi, vì các nhóm nhỏ dễ bị nhận ra.

**Doanh nghiệp lớn.** Quy mô mang đến nhiều nhóm người dùng và nhà cung cấp. Hãy định nghĩa phát biểu trải nghiệm theo dịch vụ và chân dung người dùng, giữ bảng điều khiển theo dịch vụ, và tránh một chỉ số trải nghiệm toàn công ty. Căn chỉnh XLA với hợp đồng nhà cung cấp để nhà cung cấp đóng góp dữ liệu mà không bị bắt giữ bởi các thước đo họ không ảnh hưởng được.

**Chính phủ và khu vực công.** Dịch vụ thường hướng đến công chúng cũng như nhân viên, với nghĩa vụ về khả năng tiếp cận, ngôn ngữ giản dị và tiếp cận bình đẳng. Hãy đưa khả năng tiếp cận vào các phát biểu trải nghiệm và các thước đo, kiểm thử với người dùng dựa vào công nghệ hỗ trợ, và bảo vệ dữ liệu cá nhân theo luật. Nơi cần báo cáo công khai, hãy báo cáo phương pháp cùng kết quả (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí ở mức vừa phải. Phỏng vấn người dùng mất vài ngày mỗi dịch vụ. Một khảo sát nhanh hằng tháng cần một công cụ khảo sát, vốn nhiều tổ chức đã có. Các thước đo hành vi cần một ít đo đạc, có thể đến từ giám sát hiện có và phân tích cổng. Buổi rà soát cùng người dùng tốn vài giờ mỗi quý. Mã hóa bình luận tốn một hai giờ mỗi tháng.

Lợi tức nằm ở việc tìm ra các vấn đề mà SLA không cho thấy, như hành trình chậm ở các vùng hoặc thiết bị cụ thể, và ở việc hướng tiền cải tiến vào điều người dùng coi trọng. Thời gian mất vì vấn đề CNTT có thể được biến thành chi phí với mức giá nhân viên của chính bạn nếu bạn đo cẩn thận. Hãy tránh các tuyên bố chung chung về lợi ích năng suất. Xây hồ sơ từ đường cơ sở của chính bạn: thời gian mất mỗi người dùng, sự kiện ma sát mỗi người dùng, và liên hệ lặp lại, trước và sau một bản sửa. Cũng đếm chi phí tránh được của các cách lách, như công cụ ngầm được áp dụng vì dịch vụ chính thức bất tiện.

## Phản mẫu và cạm bẫy

- **Thay SLA bằng XLA.** Hợp đồng cần cam kết đếm được. Hãy giữ cả hai và cho thấy chúng cùng nhau.
- **Một chỉ số trải nghiệm tổng hợp.** Nó giấu nguyên nhân và mời gọi lợi dụng. Hãy cho thấy vài thước đo riêng.
- **Định nghĩa trải nghiệm mà không có người dùng.** Các phát biểu viết trong phòng họp mô tả góc nhìn của nhà cung cấp. Hãy phỏng vấn và kiểm thử với người dùng.
- **Khảo sát cho đến khi mọi người ngừng trả lời.** Hãy giữ các câu hỏi nhanh ngắn và luân phiên chủ đề.
- **Thu thập dữ liệu hành vi mà không nói ai.** Nó phá hỏng lòng tin và có thể vi phạm luật. Hãy cởi mở về điều được thu thập và vì sao.
- **Dùng dữ liệu trải nghiệm trong đánh giá hiệu suất.** Nó biến một công cụ học hỏi thành giám sát và phá hủy việc báo cáo trung thực.
- **Sửa thước đo, không sửa nguyên nhân.** Đừng chuyển người dùng sang một kênh thân thiện hơn để cải thiện một con số. Hãy sửa hành trình.
- **Để các phát hiện nằm trên một slide.** Hãy tài trợ và theo dõi các bản sửa trải nghiệm.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Mục tiêu trải nghiệm | Ngầm hiểu hoặc vắng mặt | Do nhà cung cấp viết cho một số dịch vụ | Phát biểu viết cùng người dùng cho các dịch vụ chính | Phát biểu được rà soát và sửa mỗi quý cùng các nhóm người dùng | Chia sẻ giữa các dịch vụ và nhà cung cấp, cùng sở hữu với người dùng |
| Đo lường | Thỉnh thoảng có khảo sát | Khảo sát nhanh cho một dịch vụ | Thước đo ba góc (nói, làm, hệ thống) cho mỗi phát biểu | Thước đo được theo dõi xu hướng, bảo vệ cho nhóm nhỏ, và so với SLA | Dữ liệu kết hợp giữa các nhà cung cấp, với lựa chọn quyền riêng tư do người dùng kiểm soát |
| Hành động | Phàn nàn được xử lý từng cái | Bản sửa thực hiện tùy tiện | Các vấn đề trải nghiệm hàng đầu trong tồn đọng kèm người sở hữu | Bản sửa được tài trợ, theo dõi và báo cáo lại cho người dùng | Cải tiến được phối hợp giữa các đội, nhà cung cấp và người dùng, với việc học được chia sẻ |

## Danh sách kiểm tra

- [ ] Mỗi dịch vụ XLA có ba đến năm phát biểu trải nghiệm viết cùng người dùng.
- [ ] Mỗi phát biểu có thước đo từ ít nhất hai góc (nói, làm, hệ thống).
- [ ] Các thước đo SLA và trải nghiệm xuất hiện trên cùng một trang cho mỗi dịch vụ.
- [ ] Khảo sát nhanh ngắn, đều đặn và ổn định về từ ngữ.
- [ ] Bình luận được mã hóa theo một hướng dẫn ổn định và một người kiểm tra một mẫu hằng tháng.
- [ ] Các nhóm dưới một kích thước đã thống nhất bị chặn trong báo cáo.
- [ ] Dữ liệu hành vi thu thập được tiết lộ cho người dùng và giới hạn ở mức cần.
- [ ] Không thước đo trải nghiệm nào được dùng trong đánh giá hiệu suất cá nhân.
- [ ] Một buổi rà soát hằng quý với đại diện người dùng có trong lịch.
- [ ] Các vấn đề trải nghiệm hàng đầu có người sở hữu và ngày trong tồn đọng.

## Lời nhắc AI

**Soạn phát biểu trải nghiệm từ ghi chú phỏng vấn.**

```text
Here are anonymized notes from [number] interviews with users of [service] in
[type of organization]: [paste notes]. Propose three to five experience
statements in the first person, each tied to one outcome the users care about,
using their wording where possible. For each, suggest one measure from what
people say, one from what they do, and one from what the system records. Do not
invent figures. List your assumptions and anything you could not tell from the
notes.
```

**Tìm khoảng cách giữa SLA và trải nghiệm.**

```text
For [service] in [period], our SLA results were: [paste results]. Our
experience data (pulse scores, comment themes, friction counts) were: [paste
data]. Describe where the two disagree, offer three possible explanations for
each disagreement, and suggest what to check next. Do not assume a cause the
data cannot support. List your assumptions and what additional data would help.
```

**Rà soát cách tiếp cận quyền riêng tư cho thước đo hành vi.**

```text
We plan to collect these behavioral signals for experience measurement:
[list]. Users are [staff, public, or both] in [jurisdiction or sector]. Review
the plan for risks to privacy, trust, and fairness, and suggest minimum
aggregation, retention, and disclosure practices. Flag anything I should take
to a privacy specialist. Do not give legal conclusions. List your assumptions.
```

**Chuẩn bị một buổi rà soát trải nghiệm hằng quý cùng người dùng.**

```text
Draft an agenda and a one-page summary for a quarterly experience review of
[service] with representatives of [user groups]. Include SLA and experience
results side by side, the top comment themes, last quarter's commitments and
their status, and two questions for users. The data: [paste data]. Keep the
tone plain and avoid jargon. List your assumptions and mark any claim that
needs checking.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn cho một thước đo trải nghiệm trước khi bạn thêm nó vào bảng điều khiển.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số XLA mang vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Một XLA thêm mục tiêu và thước đo trải nghiệm vào các mục tiêu vận hành, và nó bổ sung cho SLA.
- Viết phát biểu trải nghiệm cùng người dùng, bằng lời của họ, và gắn mỗi cái với thước đo từ điều mọi người nói, làm, và hệ thống ghi lại.
- Cho thấy kết quả SLA và trải nghiệm cùng nhau, và coi bất đồng là gợi ý để điều tra.
- Bảo vệ người dùng: tiết lộ điều bạn thu thập, tổng hợp nó, chặn các nhóm nhỏ, và giữ nó ngoài đánh giá hiệu suất.
- Tránh một chỉ số trải nghiệm đơn và tránh mục tiêu cứng trước khi các thước đo được hiểu.
- Tài trợ các bản sửa mà dữ liệu làm lộ ra, và nói với người dùng điều đã đổi.

## Tài liệu tham khảo và đọc thêm

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
