# Thiết kế bảng điều khiển chỉ số dịch vụ

**Một bảng điều khiển tốt trả lời vài câu hỏi mà một đối tượng được nêu tên thực sự hỏi, cho thấy mỗi con số kèm xu hướng và bối cảnh của nó, và được xây bởi chính những người sẽ dùng nó.**

## Tổng quan và động lực

Một [bảng điều khiển](https://en.wikipedia.org/wiki/Dashboard_(business)) là một màn hình trực quan hiển thị thông tin quan trọng nhất cần để đạt một hoặc nhiều mục tiêu, được sắp xếp để có thể theo dõi trong nháy mắt. Trong thực tế, hầu hết bảng điều khiển ở các tổ chức dịch vụ không đạt định nghĩa đó. Chúng bắt đầu như một cách trả lời một câu hỏi thật, rồi lớn lên bằng tích tụ cho đến khi hiển thị mọi thứ công cụ có thể vẽ. Không ai sở hữu chúng, không ai chắc các con số có nghĩa gì, và màn hình trên tường bị bỏ qua.

Mục đích của một bảng điều khiển chỉ số dịch vụ là giúp mọi người ra quyết định và mở đầu những cuộc trò chuyện tốt. Một đội dùng nó để nhận ra công việc của mình đang chờ lâu hơn trước, và hỏi vì sao. Một chủ sở hữu dịch vụ dùng nó để thấy một dịch vụ đang gần mép của mục tiêu độ tin cậy. Một nhà lãnh đạo dùng nó để thấy khoản đầu tư vào một lĩnh vực có tạo ra kết quả mong đợi không. Một màn hình không làm điều nào trong số này là đồ trang trí, và đồ trang trí tốn tiền để xây và tốn sự chú ý để bỏ qua.

ITIL định khung điều này như một câu hỏi về thông tin và truyền thông: thông tin đúng, cho đúng người, ở dạng họ dùng được, vào đúng lúc. Các mục đích linh hoạt chỉ về cùng các nguyên tắc thiết kế. Sự tham gia liên tục của các bên liên quan nghĩa là đối tượng giúp thiết kế cái nhìn, và tiếp tục giúp khi câu hỏi thay đổi. Cải tiến liên tục nghĩa là chính bảng điều khiển được rà soát và cắt tỉa. Tiến hóa liên tục nghĩa là tập thước đo thay đổi khi dịch vụ và mục tiêu thay đổi. Nhịp độ bền vững nghĩa là bảng điều khiển không tạo ra thôi thúc hằng ngày kiểm tra những con số chỉ đổi hằng tháng. Và cùng lòng tin hỗ trợ những cá nhân có động lực nghĩa là các đội thấy dữ liệu của chính mình trước và sở hữu câu chuyện nó kể.

Ba thất bại thiết kế là phổ biến. Thứ nhất là bức tường con số, nơi một trăm ô cạnh tranh và không ô nào nổi bật. Thứ hai là màn hình chỉ có mục tiêu, nơi một con số được cho thấy so với mục tiêu bằng đỏ hoặc xanh mà không có xu hướng và bối cảnh, mời gọi quản lý bằng màu thay vì bằng sự hiểu. Thứ ba là màn hình không có chủ, nơi định nghĩa đã trôi, dữ liệu cũ, và không ai biết hỏi ai. Công việc của thiết kế là tránh những điều này.

Thiết kế hình ảnh tốt giúp ích. [Trực quan hóa dữ liệu](https://en.wikipedia.org/wiki/Data_visualization) là thực hành cho thấy dữ liệu bằng đồ họa để có thể thấy và hiểu các mẫu hình. Một [sparkline](https://en.wikipedia.org/wiki/Sparkline) là một biểu đồ đường nhỏ cỡ một từ cho thấy xu hướng mà không có trục hay nhãn, và nó hợp với bảng điều khiển vì đặt lịch sử bên cạnh giá trị hiện tại. Một [biểu đồ chạy](https://en.wikipedia.org/wiki/Run_chart) vẽ một thước đo theo thời gian kèm đường trung vị, và một [biểu đồ kiểm soát](https://en.wikipedia.org/wiki/Control_chart) thêm các giới hạn tách biến thiên thông thường khỏi tín hiệu đáng điều tra (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk) là phần trang trí không thêm thông tin, như đường lưới nặng, cột ba chiều và đồng hồ trang trí, và đáng gỡ bỏ.

Một [chỉ số phù phiếm](https://en.wikipedia.org/wiki/Vanity_metric) là một con số trông tốt mà không giúp ai quyết định gì, như số phiếu đã xử lý hay số lần đăng nhập cổng được cho thấy mà không có kết quả. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng cho toàn bộ màn hình: khi một con số trên màn hình trở thành mục tiêu, mọi người quản lý con số (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Chủ đề này dựa vào các khung đo lường (xem chủ đề 1.7, Các khung đo lường) và các chủ đề về dữ liệu và quản trị ở Phần 1.

## Nguyên tắc chính

- **Bắt đầu từ câu hỏi, không phải dữ liệu.** Viết ra các quyết định và câu hỏi của đối tượng trước khi chọn một biểu đồ nào.
- **Cho thấy ít thước đo, cân bằng.** Một tập nhỏ trải qua dòng chảy, chất lượng, độ tin cậy, trải nghiệm và chi phí chống lợi dụng tốt hơn một thước đo đơn lẻ.
- **Luôn cho thấy xu hướng và bối cảnh.** Một giá trị không có lịch sử, đường cơ sở và ghi chú về điều đã đổi thì khó diễn giải.
- **Tôn trọng biến thiên.** Đừng phản ứng với mỗi dao động. Dùng biểu đồ chạy hoặc biểu đồ kiểm soát để tách tín hiệu khỏi nhiễu.
- **Cho mỗi đối tượng cái nhìn riêng.** Đội, chủ sở hữu dịch vụ và lãnh đạo hỏi những câu khác nhau và cần chi tiết khác nhau.
- **Các đội thấy dữ liệu của mình trước.** Những người làm công việc nên thấy con số của họ trước bất kỳ ai khác, và sở hữu việc diễn giải.
- **Định nghĩa mọi thứ và nêu tên một người sở hữu.** Mỗi thước đo có một định nghĩa bằng văn bản, một nguồn dữ liệu và một người để hỏi.
- **Giữ cho nhẹ để duy trì.** Một bảng điều khiển tốn một tuần công việc thủ công mỗi tháng sẽ chết.

## Định nghĩa chỉ số

Các thước đo dưới đây nói về chính bảng điều khiển, không phải về một dịch vụ. Chúng giúp một đội chương trình thấy các màn hình của mình có khỏe không. Một số mang tính mô tả và được đánh dấu như vậy, vì coi chúng là mục tiêu sẽ mời gọi những méo mó mà chủ đề này cảnh báo.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ câu hỏi | Tỷ lệ câu hỏi của đối tượng đã liệt kê mà bảng điều khiển có thể trả lời bằng một thước đo đã định nghĩa | số câu hỏi có thước đo và định nghĩa / số câu hỏi do đối tượng liệt kê | phần trăm | Danh sách câu hỏi từ các buổi làm việc với bên liên quan; thẻ chỉ số | Cải tiến liên tục; quản lý mức dịch vụ | Sự tham gia liên tục của bên liên quan | Hằng quý |
| Mức đầy đủ của định nghĩa | Tỷ lệ thước đo được hiển thị có định nghĩa bằng văn bản hiện hành, nguồn dữ liệu, người sở hữu và giới hạn đã biết | số thước đo có cả bốn / số thước đo được hiển thị | phần trăm | Thẻ chỉ số hoặc danh mục | Quản lý thông tin và công nghệ; quản lý tri thức | Hiểu biết chung; công việc hiển thị | Hằng quý |
| Độ mới của dữ liệu | Tỷ lệ thước đo được hiển thị được cập nhật trong khoảng dự kiến | số thước đo được cập nhật đúng hạn / số thước đo được hiển thị | phần trăm | Nhật ký đường ống; siêu dữ liệu bảng điều khiển | Giám sát và quản lý sự kiện | Phản hồi nhanh | Hằng tuần |
| Liên kết với quyết định | Tỷ lệ thước đo được rà soát mà một lần rà soát gần đây dẫn đến một quyết định, hành động, hoặc lựa chọn có chủ ý là không làm gì được ghi lại | số thước đo có quyết định liên kết trong kỳ / số thước đo được rà soát | phần trăm | Ghi chú rà soát; sổ đăng ký cải tiến | Cải tiến liên tục | Suy ngẫm đều đặn | Hằng quý |
| Kích thước màn hình | Số thước đo trên mỗi góc nhìn của đối tượng | số đếm mỗi góc nhìn | thước đo | Cấu hình bảng điều khiển | Cải tiến liên tục | Sự đơn giản | Hằng quý |
| Tỷ lệ cho nghỉ hưu | Thước đo bị gỡ hoặc thay thế trong kỳ vì chúng ngừng cung cấp thông tin cho quyết định | số thước đo cho nghỉ hưu / số thước đo được hiển thị lúc đầu | phần trăm | Nhật ký thay đổi của bảng điều khiển | Cải tiến liên tục | Tiến hóa liên tục | Hằng năm |
| Phạm vi tiếp cận đối tượng (mô tả) | Tỷ lệ đội hoặc vai trò dự kiến đã mở góc nhìn của họ trong kỳ | số đội hoặc vai trò riêng biệt đã xem / số đội hoặc vai trò dự kiến | phần trăm | Nhật ký truy cập bảng điều khiển, tổng hợp theo đội hoặc vai trò | Quản lý thông tin và công nghệ | Sự tham gia liên tục của bên liên quan | Hằng quý |

Hãy định nghĩa đối tượng của mỗi góc nhìn bằng văn bản. Đếm thước đo mỗi góc nhìn, không phải mỗi công cụ, để một danh mục lớn với trang đầu nhỏ không bị nhầm là tràn lan. Nhật ký truy cập được thu thập và báo cáo ở cấp đội hoặc vai trò và không bao giờ để theo dõi thói quen đọc của cá nhân. Phạm vi tiếp cận đối tượng là mô tả và được đọc cùng liên kết với quyết định, vì một màn hình được xem nhiều mà không thay đổi quyết định nào có ít giá trị. Liên kết với quyết định chấp nhận "chúng tôi đã xem, và chọn không làm gì" là một quyết định được ghi lại, để thước đo không đẩy mọi người bịa ra hành động.

## Khuyến nghị

### Bắt đầu từ đối tượng

**1. Liệt kê các đối tượng và câu hỏi của họ.** Các đối tượng điển hình là đội phân phối hoặc hỗ trợ làm công việc, chủ sở hữu dịch vụ chịu trách nhiệm về một dịch vụ, và các nhà lãnh đạo tài trợ và chỉ đạo. Hãy ngồi với từng nhóm một giờ và ghi xuống họ hỏi gì, họ đưa ra quyết định nào, và họ ước biết điều gì. Một câu hỏi tốt nghe như "Công việc của chúng ta có đang chờ lâu hơn trước không?" hay "Chúng ta có gần dùng hết ngân sách lỗi không?" Nó không nghe như "Cho tôi xem bảng điều khiển sự cố."

**2. Ánh xạ mỗi câu hỏi tới một thước đo và một bạn đồng hành.** Với mỗi câu hỏi, chọn thước đo tốt nhất từ các phần trước của cuốn sách, và một bạn đồng hành phòng sự méo mó hiển nhiên. Một thước đo tốc độ ghép với một thước đo chất lượng. Một thước đo khối lượng ghép với một kết quả. Một thước đo trải nghiệm ghép với một thước đo hành vi. Đây là logic ghép đôi chạy xuyên suốt cả cuốn sách (xem chủ đề 1.3, Kết quả hơn đầu ra: chọn đo cái gì).

**3. Mời đối tượng vào thiết kế.** Hãy cho xem bản phác thảo trước khi xây gì. Hỏi điều gì gây bối rối, điều gì còn thiếu, và họ sẽ làm gì với mỗi con số. Câu trả lời của họ sẽ cắt tập xuống, và họ sẽ tin điều họ đã giúp làm ra.

### Chọn một tập nhỏ, cân bằng

**4. Giữ mỗi góc nhìn ở một nhúm thước đo.** Khoảng năm đến chín thước đo mỗi góc nhìn đối tượng là một khoảng làm được, dù số đúng phụ thuộc vào các câu hỏi. Giới hạn buộc phải lựa chọn. Đặt chi tiết sau một cú nhấp, trong một góc nhìn hỗ trợ, và giữ trang đầu ở mức cần để quyết định có nhìn xa hơn không.

**5. Cân bằng tập qua các chiều.** Một [thẻ điểm cân bằng](https://en.wikipedia.org/wiki/Balanced_scorecard) là một công cụ quản lý chiến lược nhìn một tổ chức từ nhiều góc độ thay vì chỉ kết quả tài chính. Ý tưởng này chuyển tốt: với một dịch vụ, hãy cân bằng dòng chảy và tốc độ, chất lượng và độ ổn định, độ tin cậy, trải nghiệm và chi phí. Một tập chỉ có tốc độ khuyến khích đi tắt, và một tập chỉ có chất lượng khuyến khích trì hoãn. Ý tưởng liên quan về [chỉ số hiệu suất chính](https://en.wikipedia.org/wiki/Key_performance_indicator) hữu ích khi chỉ báo được chọn vì điều nó lộ ra về một mục tiêu chứ không phải vì dễ cho thấy.

**6. Phân biệt chỉ báo với chẩn đoán.** Vài chỉ báo chủ đạo cho bạn biết mọi thứ có khỏe không. Các thước đo chẩn đoán giúp bạn tìm ra vì sao khi chúng không. Giữ chẩn đoán thấp một bậc, để trang đầu không biến thành một bức tường.

### Cho thấy bối cảnh và xu hướng

**7. Cho thấy lịch sử với mỗi giá trị.** Hãy đặt một sparkline hoặc biểu đồ chạy nhỏ bên cạnh mỗi giá trị hiện tại. Cho thấy ít nhất đủ lịch sử để thấy các mẫu hình theo mùa, như đỉnh hằng tháng hay chu kỳ hằng quý. Đánh dấu các sự kiện giải thích thay đổi: một lần phát hành, một thay đổi chính sách, một sự cố ngừng hoạt động, một cuộc tái tổ chức đội. Một ghi chú bên cạnh đường tiết kiệm cả trăm câu hỏi.

**8. Dùng phân phối và khoảng cho thước đo thời gian.** Giá trị trung bình giấu cái đuôi dài mà người dùng cảm nhận. Hãy cho thấy trung vị và một bách phân vị cao như thứ 85 hoặc 95, và cho thấy độ phân tán. Nêu cỡ mẫu khi nhỏ, và cho thấy một mẫu nhỏ bất định đến đâu (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ, và chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu quả dòng chảy).

**9. Cẩn thận với mục tiêu và màu sắc.** Hãy dùng một đường mục tiêu khi mục tiêu có cơ sở thật, như một mục tiêu mức dịch vụ, và cho thấy nó như một tham chiếu, không phải một phán quyết. Tránh các ô đỏ, vàng, xanh đổi theo một điểm dữ liệu. Nếu bạn dùng màu trạng thái, hãy dựa chúng vào một quy tắc tính đến biến thiên bình thường, và giải thích quy tắc trên trang.

### Làm cho đáng tin cậy và duy trì được

**10. Đính kèm một định nghĩa và một ghi chú dữ liệu cho mọi thước đo.** Một cú nhấp từ mỗi con số nên dẫn đến định nghĩa, công thức, nguồn dữ liệu, người sở hữu, thời gian làm mới và khoảng trống đã biết của nó. Một ghi chú ngắn "cách đọc cái này" đáng chỗ nó chiếm. Một người đọc thấy được giới hạn ít có khả năng dùng sai con số, và một đội thấy được chúng có thể thách thức chúng (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số, và chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

**11. Tự động hóa dữ liệu và sở hữu màn hình.** Hãy kéo dữ liệu từ các hệ thống ghi nhận theo lịch, và cho thấy thời điểm cập nhật cuối. Bảng tính thủ công có thể mở đầu một cuộc trò chuyện, nhưng chúng mong manh. Nêu tên một người sở hữu cho mỗi bảng điều khiển chịu trách nhiệm về định nghĩa, độ mới và việc cho nghỉ hưu của nó. Rà soát bảng điều khiển ở nhịp cố định cùng đối tượng của nó, và cắt tỉa.

**12. Lên kế hoạch lối ra ngay từ đầu.** Mỗi thước đo nên có một lý do tồn tại được nêu và một điều kiện mà dưới đó nó sẽ được cho nghỉ hưu, như "khi tồn đọng lỗi đã biết giảm dưới một ngưỡng trong ba tháng" hay "khi đội không còn dùng nó trong buổi rà soát của mình." Cho các thước đo nghỉ hưu giữ tập nhỏ và báo hiệu rằng chương trình phục vụ công việc.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ câu hỏi | Viết các câu hỏi hẹp mà thước đo hiện có đã trả lời; bỏ các câu hỏi khó | Mời các bên liên quan từ ngoài đội chương trình; rà soát tường minh các câu hỏi chưa được trả lời |
| Mức đầy đủ của định nghĩa | Điền trường bằng văn bản mẫu; định nghĩa không ai đọc | Lấy mẫu định nghĩa để xem độ rõ cùng người ngoài đội; kiểm tra định nghĩa khớp với phép tính thực tế |
| Độ mới của dữ liệu | Làm mới một nguồn cũ với dữ liệu không đổi; tính một lần làm mới là thành công khi nguồn cấp thất bại | Kiểm tra dấu thời gian nguồn cũng như thời gian làm mới; so sánh với số bản ghi và khối lượng kỳ vọng |
| Liên kết với quyết định | Ghi quyết định sau sự việc để điền trường; bịa hành động để tránh ô trống | Chấp nhận "chọn không làm gì" là quyết định được ghi lại; lấy mẫu liên kết xem có thảo luận thật trước đó |
| Kích thước màn hình | Giấu thước đo trên các tab phụ; tách một góc nhìn thành nhiều | Đếm thước đo mỗi đối tượng qua mọi tab; hỏi đối tượng họ thực sự dùng bao nhiêu con số |
| Tỷ lệ cho nghỉ hưu | Cho nghỉ hưu các thước đo bất tiện cho thấy kết quả kém | Rà soát danh sách đã nghỉ hưu để tìm thước đo có xu hướng bất lợi; yêu cầu lý do nêu rõ |
| Phạm vi tiếp cận đối tượng (mô tả) | Mở trang để nâng số đếm; bắt buộc xem tại các cuộc họp | Giữ nó mô tả; đọc cùng liên kết với quyết định; không báo cáo lượt xem cá nhân |

Một kết quả đọc lành mạnh cho thấy một trang đầu ngắn mà đối tượng giải thích được, định nghĩa khớp với phép tính, dữ liệu đến đúng hạn, các buổi rà soát đôi khi dẫn đến hành động và đôi khi đến một lựa chọn có chủ ý là chờ, và một danh sách thước đo đã nghỉ hưu gồm một số từng phổ biến.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Một bảng điều khiển doanh nghiệp cho mọi người | Nguồn sự thật duy nhất; định nghĩa nhất quán | Quá chung cho bất kỳ đối tượng nào; lớn thành bức tường |
| Các góc nhìn riêng cho mỗi đối tượng trên dữ liệu chung | Vừa mỗi đối tượng; định nghĩa nhất quán | Cần quản trị các định nghĩa chung |
| Bảng điều khiển do đội xây | Vừa câu hỏi địa phương; quyền sở hữu cao | Định nghĩa trôi; khó tổng hợp lên |
| Đội trung tâm xây mọi bảng điều khiển | Nhất quán; kỹ năng thiết kế | Chậm; có thể không vừa câu hỏi của đội |
| Màn hình trực tiếp, thời gian thực | Tín hiệu nhanh cho vận hành | Khuyến khích phản ứng với nhiễu; tốn kém |
| Gói rà soát định kỳ | Bình tĩnh, được thảo luận kèm bối cảnh | Trễ; có thể bị bỏ qua |
| Mục tiêu và màu trạng thái | Quét nhanh | Mời gọi quản lý bằng màu; giấu biến thiên |
| Chỉ xu hướng và phân phối | Trung thực về biến thiên | Khó quét hơn cho người mới |

Câu trả lời dạng văn xuôi là chia sẻ định nghĩa trong toàn tổ chức, để mỗi đối tượng có góc nhìn nhỏ của riêng mình, dùng màn hình trực tiếp chỉ nơi phản ứng vận hành cần chúng, và dùng một buổi rà soát định kỳ bình tĩnh cho các quyết định cải tiến.

## Câu hỏi để thảo luận với đội nhóm

**1. Chúng ta đã đưa ra những quyết định nào trong quý vừa qua mà một con số trên màn hình đã cung cấp thông tin?**
Liệt kê chúng. Với mỗi cái, nêu con số và nó đến từ đâu. Chú ý những con số nào trên màn hình hiện tại của chúng ta không bao giờ xuất hiện trong danh sách này. Người điều phối nên hỏi chúng có xứng đáng chỗ của mình không.

**2. Nếu chúng ta chỉ có thể cho đội của mình xem năm con số, đó sẽ là những con số nào?**
Nhờ mỗi người viết một danh sách riêng tư, rồi so sánh. Thảo luận các khác biệt và mỗi con số sẽ giúp ai quyết định gì. Thống nhất một tập thử và một ngày để rà soát nó.

**3. Con số nào trên bảng điều khiển của chúng ta mà chúng ta muốn gỡ nhất, và vì sao?**
Lắng nghe những con số gây tranh cãi, gây hiểu lầm, hoặc không bao giờ được đọc. Kiểm tra vấn đề là ở thước đo hay cách trình bày nó. Thống nhất cho nghỉ hưu, định nghĩa lại hay giữ từng cái.

**4. Một đồng nghiệp mới sẽ đọc bảng điều khiển của chúng ta thế nào khi không có trợ giúp?**
Nhờ một người mới giải thích điều họ thấy. Ghi lại điều họ đọc sai và vì sao. Thêm định nghĩa, bối cảnh hay ghi chú nơi họ vấp.

**5. Điều gì đã đổi trong công việc của chúng ta mà một con số không cho thấy?**
Các lần phát hành, nhân sự, chính sách hay thay đổi khách hàng có thể giải thích một xu hướng. Thống nhất cách các sự kiện được ghi trên màn hình để người đọc kế tiếp có câu chuyện.

**6. Ai xem dữ liệu của chúng ta ngoài chúng ta, và họ làm gì với nó?**
Truy đường đi của các con số của chúng ta tới các đối tượng khác. Kiểm tra rằng cách diễn giải họ đặt lên chúng là cách chúng ta sẽ tán thành. Thống nhất điều chúng ta sẽ chia sẻ và bối cảnh nào đi kèm.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội làm công việc và nên là đối tượng đầu tiên của dữ liệu của chính họ. Họ nên giúp chọn thước đo, dùng màn hình để gợi các cuộc trò chuyện rà soát của riêng mình, và chú thích nó bằng sự kiện. Một góc nhìn của đội nên trả lời "chúng ta đang làm thế nào và nên thử gì?" chứ không phải "chúng ta so với đội bên cạnh thế nào?"

### Đội dịch vụ và vận hành

Chủ sở hữu dịch vụ chịu trách nhiệm về cách một dịch vụ hoạt động theo thời gian. Góc nhìn của họ tập hợp độ tin cậy, sự cố, thay đổi, chi phí và trải nghiệm cho một dịch vụ, kèm xu hướng và trạng thái của các hành động cải tiến. Họ nên dùng nó để quyết định đầu tư ở đâu và chuẩn bị cho các cuộc trò chuyện với khách hàng và lãnh đạo.

### Lãnh đạo và quản trị

Lãnh đạo cần một cái nhìn ngắn về kết quả và rủi ro qua các dịch vụ, kèm đủ bối cảnh để diễn giải. Họ nên yêu cầu xu hướng và phân phối thay vì xếp hạng, chống lại việc yêu cầu thước đo mới mà không cho nghỉ hưu cái khác, và dùng màn hình để hướng câu hỏi vào hệ thống và quyết định, không phải cá nhân.

### Khách hàng và người dùng

Khách hàng và người dùng thấy thông tin dịch vụ qua các trang trạng thái, báo cáo và các thước đo trải nghiệm phản ánh góc nhìn của họ (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm). Góc nhìn của họ nên trung thực, giản dị và nhất quán với điều các đội thấy. Họ nên có thể nói với tổ chức điều các con số không cho thấy.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một công ty phần mềm có sản phẩm được lưu trữ và một nhóm hỗ trợ khách hàng đã tích lũy ba bảng điều khiển: một màn hình vận hành với 62 ô, một báo cáo hỗ trợ gửi email hằng tuần, và một trang phân phối do một nhà phân tích duy trì. Đội lãnh đạo yêu cầu một bảng điều khiển duy nhất để "thấy mọi thứ." Các con số dưới đây chỉ mang tính minh họa.

Trưởng bộ phận quản lý dịch vụ đề xuất bắt đầu bằng câu hỏi. Bà tổ chức một buổi dài một giờ với mỗi trong ba đối tượng: đội hỗ trợ, đội nền tảng và nhóm lãnh đạo. Đội hỗ trợ hỏi khách hàng có chờ lâu hơn trước để nhận được câu trả lời hữu ích đầu tiên không và các vấn đề giống nhau có quay lại không. Đội nền tảng hỏi họ có gần dùng hết ngân sách lỗi không và quy trình thay đổi của họ đang làm họ chậm lại hay bảo vệ họ. Lãnh đạo hỏi khách hàng có nhận được giá trị không và khoản đầu tư vào một cổng tự phục vụ mới có sinh lợi không. Cùng nhau họ liệt kê 14 câu hỏi. Các bảng điều khiển hiện có có thể trả lời sáu câu bằng một thước đo đã định nghĩa, nên độ phủ câu hỏi là 43 phần trăm.

Nhóm thiết kế ba góc nhìn, mỗi góc không quá bảy thước đo, trên các định nghĩa chung. Góc nhìn hỗ trợ cho thấy trung vị và bách phân vị thứ 85 của thời gian đến câu trả lời hữu ích đầu tiên, tỷ lệ liên hệ quay lại trong bảy ngày, xu hướng mức hài lòng kèm cỡ mẫu, và giải quyết tự phục vụ ghép với liên hệ quay lại. Góc nhìn nền tảng cho thấy tính sẵn sàng so với mục tiêu kèm một đường đốt ngân sách lỗi, thời gian chờ thay đổi kèm tỷ lệ thay đổi thất bại, và tỷ lệ thời gian dành cho công việc không kế hoạch. Góc nhìn lãnh đạo cho thấy kết quả mức dịch vụ, trải nghiệm khách hàng, chi phí mỗi khách hàng hoạt động, và trạng thái của ba hành động cải tiến được tài trợ. Mỗi giá trị có một sparkline, một liên kết đến thẻ định nghĩa của nó, và một trường ghi chú cho sự kiện. Màu chỉ xuất hiện trên ngân sách lỗi, dựa trên một quy tắc được giải thích trên trang.

Buổi rà soát đầu tiên mang đến bất ngờ. Đội hỗ trợ nhận thấy thời gian trả lời trung vị của họ cải thiện trong khi bách phân vị thứ 85 xấu đi, vì các liên hệ dễ được trả lời nhanh còn các liên hệ khó bị để chờ. Họ quyết định xem lại các quy tắc phân loại của mình và ghi lại quyết định. Đội nền tảng thấy một sự tăng gần đây của thời gian chờ thay đổi trùng với một bước phê duyệt mới, và đưa câu hỏi đến nhóm thay đổi. Lãnh đạo nhận thấy mức sử dụng cổng đang tăng trong khi liên hệ quay lại không đổi, và hỏi đội hỗ trợ cổng đang không trả lời được điều gì. Hai quý sau, độ phủ câu hỏi là 79 phần trăm, mọi thước đo hiển thị có định nghĩa đầy đủ, và màn hình 62 ô cũ đã nghỉ hưu. Ba thước đo đã bị bỏ vì không ai dùng, và một cái đã được thêm. Một giám đốc yêu cầu một hàng tóm tắt xanh-vàng-đỏ. Trưởng bộ phận quản lý dịch vụ cho thấy một lần thử trong đó một tuần xấu duy nhất làm hàng chuyển đỏ và gây ra một loạt câu hỏi mà không có nguyên nhân. Họ thống nhất thay vào đó một ghi chú viết ngắn về điều đã đổi mỗi tháng, và ghi lại quyết định.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy xây bảng điều khiển cùng người dùng của nó và cải thiện nó theo các bước nhỏ, hỏi ở mỗi buổi rà soát đều đặn nó đã trả lời câu hỏi nào và thay đổi quyết định nào. Điều cần lưu ý là một bảng điều khiển xây một lần cho một đợt ra mắt sẽ cũ đi khi câu hỏi thay đổi.

### AI

Bảng điều khiển nay thường gồm công việc có AI hỗ trợ, các bản tóm tắt do AI viết, và những nhận định do AI tạo ra. Hãy cho thấy các thước đo liên quan đến AI kèm một cặp chất lượng, gắn nhãn mọi văn bản do AI viết, và nhờ một người kiểm tra nó trước khi nó đến người ra quyết định. Điều cần lưu ý là một bản tóm tắt AI trôi chảy bên cạnh một biểu đồ có thể mang trọng lượng hơn mức dữ liệu xứng đáng, nên hãy cho thấy dữ liệu trước.

### Tự động hóa

Hãy làm mới dữ liệu tự động, và cho thấy độ mới và mọi lần tải thất bại trên chính bảng điều khiển. Đo đường ống bảng điều khiển theo các thất bại của riêng nó. Điều cần lưu ý là một bảng điều khiển tự động tiếp tục hiển thị dữ liệu tốt cuối cùng khi một lần tải thất bại, nên hãy làm sự cũ hiển thị.

### Phân tích

Hãy cho thấy mỗi con số kèm xu hướng, số đếm đằng sau nó, và một ghi chú về điều nó không thể cho thấy. Quyết định được cung cấp thông tin là câu hỏi nào đối tượng sẽ hành động theo. Điều cần lưu ý là màu sắc và ngưỡng ngụ ý một mục tiêu, nên hãy tránh đỏ và xanh nơi không có mục tiêu.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Hãy giữ rất nhỏ: một trang duy nhất với có lẽ năm con số mà cả công ty đọc được, phản ánh tốc độ phân phối, độ ổn định, trải nghiệm khách hàng và chi phí. Dùng bất cứ thứ gì công cụ hiện có cung cấp. Xem lại trang mỗi khi sản phẩm hoặc khách hàng thay đổi, và chống lại việc xây một nền tảng dữ liệu trước khi các câu hỏi rõ ràng.

**Doanh nghiệp nhỏ.** Một tài liệu chung hoặc một biểu đồ bảng tính đơn giản cập nhật hằng tháng có thể là đủ. Chọn một nhúm thước đo mà chủ và nhân viên thực sự dùng, viết ra mỗi cái có nghĩa gì, và thảo luận chúng trong một cuộc họp đều đặn. Rủi ro không phải là quá ít công cụ. Rủi ro là các thước đo mà không ai tin hay hành động theo.

**Doanh nghiệp lớn.** Quy mô đòi hỏi định nghĩa chung, một danh mục thước đo được quản trị, và các góc nhìn phân lớp cho đội, dịch vụ, danh mục và điều hành. Cám dỗ tổng hợp mọi thứ thành một con số duy nhất là mạnh và có hại. Hãy giữ góc nhìn đội do các đội sở hữu, công bố định nghĩa chung, và yêu cầu một mục đích nêu rõ cho bất kỳ thước đo mới nào trên một góc nhìn lãnh đạo (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

**Chính phủ và khu vực công.** Nghĩa vụ báo cáo và trách nhiệm giải trình công khai thường áp đặt một số thước đo. Hãy giữ các thước đo bắt buộc hiển thị và tách rõ khỏi những cái các đội dùng để cải thiện, và giải thích cho công chúng và cơ quan giám sát các con số có thể và không thể cho thấy gì. Ngôn ngữ giản dị và khả năng tiếp cận quan trọng với bất kỳ màn hình nào chia sẻ ra ngoài tổ chức (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của một chương trình bảng điều khiển gồm thời gian phỏng vấn đối tượng, thiết kế và xây dựng, kết nối và làm sạch dữ liệu, viết định nghĩa, đào tạo và hỗ trợ người dùng, và duy trì màn hình theo thời gian. Chi phí ẩn lớn nhất là thời gian của những người đọc các con số không giúp ích và các cuộc họp dành để tranh luận con số của ai đúng. Các bản xây rẻ, nhanh là phổ biến, và chi phí thật đến sau trong bảo trì và sự mất lòng tin.

Lợi tức gồm nhận ra xu hướng nhanh hơn, ít tranh cãi về định nghĩa hơn, công việc cải tiến nhắm đích tốt hơn, và giảm công sức báo cáo khi một nguồn được quản trị thay thế nhiều báo cáo thủ công. Hãy xây hồ sơ từ dữ liệu của chính bạn: số giờ dành cho báo cáo thủ công trước và sau, số phiên bản cạnh tranh của cùng một con số, và các quyết định được màn hình cung cấp thông tin. Tránh trích dẫn các con số đã công bố về giá trị của phân tích mà không có nguồn truy được và mức liên quan với bối cảnh của bạn. Tuyên bố đáng tin thì khiêm tốn: ít thước đo hơn, tốt hơn, được tin cậy và được dùng (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Bức tường ô.** Mọi con số cạnh tranh sự chú ý. Hãy cắt xuống một nhúm cho mỗi đối tượng và đặt chi tiết thấp một bậc.
- **Quản lý bằng màu.** Màu trạng thái đổi theo nhiễu và thúc đẩy phản ứng. Hãy cho thấy xu hướng và dùng quy tắc tôn trọng biến thiên.
- **Không có định nghĩa.** Hai đội đọc cùng một nhãn khác nhau. Hãy đính kèm định nghĩa và người sở hữu cho mọi thước đo.
- **Bảng điều khiển như giám sát.** Các góc nhìn cấp cá nhân xói mòn lòng tin và làm méo dữ liệu. Hãy cho thấy đội, dịch vụ và hệ thống.
- **Một con số duy nhất để tóm tắt mọi thứ.** Nó giấu các đánh đổi mà nó định làm lộ. Hãy cho thấy một vài thước đo cân bằng.
- **Xây một lần, không bao giờ rà soát.** Màn hình cũ đi. Hãy rà soát cùng đối tượng theo nhịp và cho thước đo nghỉ hưu.
- **Màn hình phù phiếm.** Số đếm hoạt động lớn mà không có kết quả. Hãy ghép mọi khối lượng với một thước đo kết quả.
- **Báo cáo không ai yêu cầu.** Xây từ dữ liệu sẵn có thay vì câu hỏi được hỏi. Hãy bắt đầu từ câu hỏi.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Đối tượng và câu hỏi | Xây từ dữ liệu sẵn có | Một số đội hỏi điều họ cần | Đối tượng và câu hỏi được viết ra; góc nhìn nhỏ cho mỗi đối tượng | Độ phủ câu hỏi và liên kết với quyết định được rà soát và hành động theo | Đối tượng đồng thiết kế góc nhìn, gồm cả khách hàng và nhà cung cấp, và câu hỏi tiến hóa cùng dịch vụ |
| Thiết kế và bối cảnh | Nhiều ô không có lịch sử | Một số xu hướng và định nghĩa | Ít thước đo mỗi góc nhìn kèm xu hướng, phân phối và định nghĩa trên mọi thước đo | Màn hình nhận biết biến thiên; thước đo đồng hành cho mọi chỉ số chủ đạo | Góc nhìn thích ứng với mục tiêu thay đổi; mẫu chung được tái dùng giữa các đội |
| Dữ liệu và duy trì | Thủ công, cũ, không có chủ | Một số tự động hóa; người sở hữu không chính thức | Nguồn cấp tự động, người sở hữu có tên, độ mới được hiển thị | Độ mới và mức đầy đủ của định nghĩa được quản lý; cho nghỉ hưu là thường lệ | Quyền sở hữu liên hiệp với định nghĩa chung; cho nghỉ hưu và cải tiến do người dùng dẫn dắt |

## Danh sách kiểm tra

- [ ] Câu hỏi của mỗi đối tượng được viết ra, và mỗi góc nhìn ánh xạ tới chúng.
- [ ] Mỗi góc nhìn có không quá khoảng chín thước đo, với chi tiết thấp một bậc.
- [ ] Tập được cân bằng qua dòng chảy, chất lượng, độ tin cậy, trải nghiệm và chi phí.
- [ ] Mỗi giá trị cho thấy xu hướng và bối cảnh, và thước đo thời gian cho thấy một bách phân vị cao.
- [ ] Mỗi thước đo có định nghĩa, nguồn, người sở hữu và thời gian làm mới trong vòng một cú nhấp.
- [ ] Mục tiêu được cho thấy như tham chiếu, và màu trạng thái theo một quy tắc nêu rõ.
- [ ] Các đội thấy dữ liệu của mình trước và sở hữu việc diễn giải.
- [ ] Không góc nhìn nào xếp hạng hay theo dõi cá nhân.
- [ ] Bảng điều khiển có một người sở hữu có tên, một nhịp rà soát và một quy tắc cho thước đo nghỉ hưu.
- [ ] Dữ liệu được kéo tự động, với thời gian cập nhật cuối hiển thị.

## Lời nhắc AI

**Biến câu hỏi thành một góc nhìn.**

```text
Here are questions asked by [audience]: [list]. For each, suggest one primary
measure and one companion measure that guards against its most likely distortion.
Group them into a view of no more than seven measures, and for each state the
definition, a suggested chart type, and what context it needs. Do not invent data
or benchmarks. List your assumptions and the questions the view cannot answer.
```

**Rà soát một bảng điều khiển về độ rõ.**

```text
Here is a description of our dashboard, listing each tile, its label, and its
definition: [paste]. Act as a new colleague reading it for the first time. List
which labels are ambiguous, which numbers lack context or trend, which tiles might
invite management by color, and which tiles could be retired. Do not rewrite the
data. List your assumptions.
```

**Soạn một thẻ chỉ số.**

```text
Draft a metric card for [measure]. Include a plain definition, the formula, unit,
data source, owner, refresh interval, known gaps, the most likely way it will be
gamed, the paired guardrail, and the decision it should inform. Keep it under 200
words. Do not invent figures. Mark anything you are unsure about.
```

**Lập kế hoạch một buổi rà soát bảng điều khiển.**

```text
Plan a 45-minute quarterly review of our [team] dashboard with its audience.
Include how to check that measures were used for decisions, how to decide which to
retire, how to record events that explain trends, and how to avoid ranking people.
List the questions the facilitator should ask and the output to record.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho từng thước đo trên một góc nhìn đề xuất.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một đặc tả bảng điều khiển có định nghĩa, người sở hữu và vectơ lợi dụng cho mọi thước đo.

## Điểm chính cần nhớ

- Bắt đầu từ các câu hỏi một đối tượng hỏi, và cho mỗi đối tượng một góc nhìn nhỏ của riêng họ.
- Cân bằng tập, và ghép mỗi chỉ số chủ đạo với một bạn đồng hành phòng sự méo mó.
- Cho thấy xu hướng, phân phối và bối cảnh với mỗi giá trị, và tôn trọng biến thiên bình thường.
- Đính kèm một định nghĩa, nguồn, người sở hữu và thời gian làm mới cho mọi thước đo.
- Để các đội thấy và sở hữu dữ liệu của mình trước, và không bao giờ cho thấy cá nhân.
- Rà soát bảng điều khiển cùng đối tượng của nó, và cho nghỉ hưu các thước đo đã ngừng cung cấp thông tin cho quyết định.

## Tài liệu tham khảo và đọc thêm

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
