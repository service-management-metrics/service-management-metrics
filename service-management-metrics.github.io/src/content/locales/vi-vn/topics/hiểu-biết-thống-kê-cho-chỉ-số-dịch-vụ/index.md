# Hiểu biết thống kê cho chỉ số dịch vụ

**Dữ liệu phiếu và dòng chảy bị lệch, lổn nhổn và thường mỏng, nên hãy báo cáo trung vị và bách phân vị cao thay vì trung bình, nói rõ có bao nhiêu hạng mục đứng sau mỗi tỷ lệ, và tách biến thiên thông thường khỏi thay đổi thật trước khi ai đó phản ứng.**

## Tổng quan và động lực

Hầu hết chỉ số dịch vụ đến dưới dạng một con số duy nhất trên bảng điều khiển: thời gian giải quyết trung bình, phần trăm sự cố giải quyết trong mục tiêu, số phiếu đóng tuần này. Một con số đơn lẻ cảm giác chính xác. Nó thường là bản tóm tắt nén của một tập hỗn độn các sự kiện, và việc nén quyết định điều người đọc thấy. Hiểu biết thống kê, theo mục đích của cuốn sách này, là một tập nhỏ các thói quen giữ cho bản tóm tắt trung thực: chọn một bản tóm tắt phù hợp với hình dạng dữ liệu, biết bao nhiêu dữ liệu đứng sau nó, và phân biệt thay đổi thật với nhiễu.

Hình dạng của dữ liệu dịch vụ là vấn đề thứ nhất. Các thước đo thời gian như thời gian giải quyết, thời gian chu trình và thời gian chờ bị chặn ở số không và có một cái đuôi dài bên phải. Hầu hết các hạng mục kết thúc nhanh, và một vài cái mất rất lâu. Dữ liệu như vậy bị [lệch](https://en.wikipedia.org/wiki/Skewness), và trung bình cộng bị kéo về phía đuôi, nên một phiếu bị kẹt có thể làm dịch chuyển giá trị trung bình nhiều hơn một trăm phiếu thường lệ. [Trung vị](https://en.wikipedia.org/wiki/Median), giá trị ở giữa khi các hạng mục được sắp xếp, ít bị ảnh hưởng hơn nhiều. Một [bách phân vị](https://en.wikipedia.org/wiki/Percentile) khái quát hóa nó: bách phân vị thứ 85 là giá trị mà 85 phần trăm hạng mục kết thúc trong đó. Các khoảng thời gian dạng này thường được mô hình hóa bằng một [phân phối log-chuẩn](https://en.wikipedia.org/wiki/Log-normal_distribution), trong đó logarit của giá trị là đối xứng. Bài học là "điển hình" và "trung bình" khác nhau đối với dữ liệu lệch.

Cỡ mẫu là vấn đề thứ hai. Một đội giải quyết 12 sự cố ưu tiên 1 trong một quý và báo cáo "83 phần trăm trong mục tiêu" đang mô tả 10 trên 12. Thêm một lần trượt sẽ làm số liệu dịch chuyển tám điểm. Tuyên bố trung thực bao gồm số đếm, và thường cả một khoảng. [Khoảng tin cậy](https://en.wikipedia.org/wiki/Confidence_interval) là một khoảng được tính từ dữ liệu biểu đạt giá trị thật có thể nằm xa giá trị quan sát được đến mức nào. Các khoảng rộng với mẫu nhỏ và hẹp với mẫu lớn, đó là thông điệp đúng cho một quý có 12 sự cố.

Biến thiên là vấn đề thứ ba. Mọi quy trình đều tạo ra những con số dao động từ tuần này sang tuần khác mà không có gì thay đổi. Walter Shewhart, khi làm việc về chất lượng sản xuất vào những năm 1920, đã tách sự dao động thường lệ này khỏi những tín hiệu đáng điều tra, và cho chúng ta [biểu đồ kiểm soát](https://en.wikipedia.org/wiki/Control_chart). Áp dụng các biểu đồ như vậy cho một quy trình được gọi là [kiểm soát quá trình thống kê](https://en.wikipedia.org/wiki/Statistical_process_control). Một phần của sai lầm cuối cùng đó là [hồi quy về trung bình](https://en.wikipedia.org/wiki/Regression_toward_the_mean): một giá trị cực đoan có xu hướng được theo sau bởi một giá trị ít cực đoan hơn, nên tuần sau một tuần tồi tệ trông như một sự hồi phục dù có ai làm gì hay không.

Thực hành dòng chảy linh hoạt, như việc Hướng dẫn Kanban dùng bách phân vị thời gian chu trình và tuổi hạng mục công việc, đã đòi hỏi phân phối và dự báo được biểu đạt dưới dạng khả năng xảy ra (xem chủ đề 2.1, Các thước đo dòng chảy). Trong ITIL 4, thực hành đo lường và báo cáo và thực hành cải tiến liên tục đều phụ thuộc vào các thước đo có nghĩa đúng như vẻ ngoài của chúng, và quản lý mức dịch vụ phụ thuộc vào các mục tiêu được đặt so với biến thiên thực tế. Hiểu biết thống kê là lớp chung nằm dưới cả hai. Nó cũng hỗ trợ rào chắn trong chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số: một đội cho thấy toàn bộ phân phối có ít chỗ hơn để giấu một giá trị trung bình bị thao túng.

Biến thiên do nguyên nhân chung được xây sẵn vào một quy trình, còn biến thiên do nguyên nhân đặc biệt đến từ điều gì đó cụ thể đã thay đổi hoặc hỏng. Một thỏa thuận mức dịch vụ (SLA) là một cam kết bằng văn bản với khách hàng, và một mục tiêu mức dịch vụ (SLO) là một mục tiêu cho một thước đo.

## Nguyên tắc chính

- **Khớp bản tóm tắt với hình dạng.** Dùng trung vị và bách phân vị cho các khoảng thời gian, và cho thấy toàn bộ phân phối khi quyết định quan trọng. Dành giá trị trung bình cho dữ liệu gần đối xứng, hoặc cho các tổng như chi phí.
- **Mỗi tỷ lệ mang số đếm của nó.** Một tỷ lệ phần trăm không có tử số và mẫu số là một tuyên bố không kèm bằng chứng. Dưới một số đếm tối thiểu đã nêu, hãy cho thấy các hạng mục thô thay vì một tỷ lệ.
- **Biến thiên thông thường không phải tin tức.** Biết khoảng bình thường của một thước đo trước khi phản ứng. Hãy phản ứng với tín hiệu, không phải mọi dịch chuyển.
- **Độ bất định là một phần của câu trả lời.** Biểu đạt dự báo dưới dạng khả năng xảy ra ("85 phần trăm hạng mục kết thúc trong 9 ngày") và ước lượng dưới dạng khoảng, và chống lại sự chính xác giả.
- **Cho đội sở hữu công việc xem các phân phối.** Hạng mục thô và biểu đồ tần suất làm các trường hợp bất thường hiện rõ, và làm việc thao túng âm thầm khó hơn.
- **Tương quan, chọn mẫu và thời điểm giải thích nhiều "cải tiến".** Hãy hỏi còn gì khác đã thay đổi, ai bị bỏ ra khỏi dữ liệu, và điểm xuất phát có tệ bất thường không.
- **Giữ thống kê tương xứng.** Một đội cần một nhúm kỹ thuật dùng nhất quán, không phải một khóa học thống kê. Hãy giải thích mọi biểu đồ bằng lời giản dị.

## Định nghĩa chỉ số

Các chỉ số dưới đây mô tả chất lượng thống kê của một thực hành chỉ số và phân phối của công việc dịch vụ. Các thước đo thời gian dùng đồng hồ nêu trong từng hàng, và các định nghĩa nhằm được các chủ đề sau tái sử dụng (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố, và chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy).

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian giải quyết trung vị | Thời gian giải quyết ở giữa của các sự cố được giải quyết trong kỳ | bách phân vị thứ 50 của (dấu thời gian giải quyết trừ dấu thời gian tạo) trên các sự cố được giải quyết trong kỳ; đồng hồ bắt đầu khi tạo phiếu và dừng khi giải quyết; các lần tạm dừng được báo cáo riêng, không trừ đi; phiếu bị hủy và phiếu trùng lặp bị loại trừ | giờ hoặc ngày | Lịch sử trạng thái của công cụ ITSM | Quản lý sự cố; đo lường và báo cáo | Thời gian chu trình trung vị | Hằng tuần hoặc hằng tháng |
| Thời gian giải quyết ở bách phân vị cao | Thời gian mà trong đó hầu hết sự cố được giải quyết, với bách phân vị được nêu tên | bách phân vị thứ 85 (hoặc 95) của cùng khoảng thời gian trôi qua như trên; chỉ tính nếu có ít nhất 20 hạng mục được giải quyết, nếu không thì liệt kê các hạng mục thô | giờ hoặc ngày | Lịch sử trạng thái của công cụ ITSM | Quản lý sự cố; quản lý mức dịch vụ | Dự báo bách phân vị thời gian chu trình | Hằng tuần hoặc hằng tháng |
| Tuổi của hạng mục mở lâu nhất | Tuổi của hạng mục còn mở lâu nhất, cộng số hạng mục già hơn bách phân vị cao | hiện tại trừ dấu thời gian tạo cho các hạng mục mở, không trừ thời gian tạm dừng; đếm mọi hạng mục mở trong hàng đợi dịch vụ gồm cả những cái đang chờ khách hàng | ngày | Công cụ ITSM hoặc trình theo dõi vấn đề | Quản lý sự cố; quản lý vấn đề | Tuổi hạng mục công việc | Hằng tuần |
| Độ phủ báo cáo tỷ lệ | Tỷ lệ các tỷ lệ được báo cáo cho thấy tử số, mẫu số và kiểm tra số đếm tối thiểu | số tỷ lệ được báo cáo kèm số đếm và cờ mẫu / số tỷ lệ được báo cáo; chỉ đếm các tỷ lệ được công bố trong hồ sơ rà soát của kỳ | phần trăm | Sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số) | Đo lường và báo cáo | Thỏa thuận làm việc | Hằng quý |
| Tỷ lệ tín hiệu biểu đồ kiểm soát | Tỷ lệ các điểm trên biểu đồ kiểm soát của một thước đo báo hiệu biến thiên do nguyên nhân đặc biệt theo các quy tắc bằng văn bản của đội | số điểm bị đánh dấu theo các quy tắc / số điểm đã vẽ, trên 20 điểm gần nhất trở lên; các quy tắc được cố định từ trước và được ghi lại | phần trăm | Công cụ biểu đồ kiểm soát hoặc bảng tính | Cải tiến liên tục | Kiểm tra quy trình trong buổi nhìn lại | Hằng tháng |
| Độ rộng khoảng | Độ rộng của khoảng bất định được nêu trên một tỷ lệ tiêu đề | cận trên trừ cận dưới của khoảng, dùng phương pháp được nêu trong sổ đăng ký, cho tỷ lệ tiêu đề của kỳ | điểm phần trăm | Tính từ số đếm ITSM | Quản lý mức dịch vụ | Khoảng dự báo trong lập kế hoạch | Hằng tháng |

Nơi một hợp đồng nêu một giá trị trung bình, hãy báo cáo số liệu theo hợp đồng và cho thấy trung vị và bách phân vị bên cạnh.

## Khuyến nghị

### Tóm tắt dữ liệu thời gian một cách trung thực

**1. Mặc định dùng trung vị và một bách phân vị cao có tên.** Với thời gian giải quyết, thời gian chu trình và thời gian thực hiện, hãy công bố trung vị và bách phân vị thứ 85 hoặc 95 cùng nhau, và ghi bách phân vị vào tên chỉ số. Trung vị nói điều gì là điển hình, và bách phân vị cao nói điều gì có thể hứa hợp lý với khách hàng. Nếu bạn phải chọn một con số cho một cam kết, hãy chọn bách phân vị.

**2. Cho thấy hình dạng cũng như bản tóm tắt.** Một biểu đồ tần suất hoặc biểu đồ phân tán của thời gian giải quyết theo ngày đóng cho thấy các cụm, đuôi dài và những dịch chuyển đột ngột mà không bản tóm tắt nào cho thấy. Khi hình ảnh và con số mâu thuẫn, hãy tin hình ảnh và điều tra con số.

**3. Thêm tuổi của hạng mục mở lâu nhất.** Bách phân vị của công việc đã hoàn tất nhìn về phía sau và bỏ qua mọi thứ vẫn đang kẹt. Hãy báo cáo hạng mục mở lâu nhất và có bao nhiêu hạng mục mở đã già hơn bách phân vị cao của bạn (xem chủ đề 2.1, Các thước đo dòng chảy). Đây là phương thuốc hữu ích nhất cho các giá trị trung bình cải thiện vì các hạng mục khó bị để già đi.

### Tôn trọng mẫu nhỏ và độ bất định

**4. Công bố số đếm cùng mỗi tỷ lệ.** Hãy viết "10 trên 12 được giải quyết trong mục tiêu" thay vì "83 phần trăm". Thêm quy tắc rằng các tỷ lệ dựa trên ít hơn một số hạng mục nêu rõ thì được hiển thị dưới dạng số đếm hoặc dưới dạng các hạng mục bên dưới. Ngưỡng là một phán đoán: hãy ghi nó ra, rà soát nó và áp dụng nó ở mọi nơi.

**5. Dùng khoảng cho các tỷ lệ tiêu đề và dự báo.** Với một tỷ lệ như phần trăm thay đổi thất bại, hãy tính một khoảng tin cậy bằng phương pháp mà đội đồng ý và ghi phương pháp vào sổ đăng ký. Với dự báo phân phối, một khoảng dựa trên mẫu (ví dụ, "có khả năng từ 8 đến 14 hạng mục mỗi tuần") cho người lập kế hoạch nhiều thông tin hơn một số liệu thông lượng đơn lẻ. Nếu khoảng quá rộng để cung cấp thông tin cho một quyết định, hãy nói như vậy.

### Phân biệt tín hiệu với nhiễu

**6. Vẽ biểu đồ kiểm soát cho các thước đo bạn hành động theo.** Một biểu đồ cá thể đơn giản vẽ mỗi điểm theo thứ tự thời gian với một đường trung tâm và các giới hạn tính từ dữ liệu, và nó đánh dấu các điểm ngoài giới hạn hoặc các chuỗi nằm một bên của trung tâm. Hãy bắt đầu với thời gian giải quyết trung vị hằng tuần và khối lượng hằng tuần. Viết các quy tắc tín hiệu một lần (ví dụ, một điểm vượt giới hạn, hoặc một chuỗi tám điểm một bên) và giữ chúng cố định, để đội không chỉnh quy tắc cho đến khi biểu đồ đồng ý với cảm xúc của mình.

**7. Hành động theo tín hiệu và để yên biến thiên do nguyên nhân chung.** Khi một điểm nằm trong giới hạn, hãy chống lại việc giải thích nó; đó là quy trình đang hành xử như bình thường. Khi một tín hiệu xuất hiện, hãy hỏi tuần đó đã thay đổi gì: một bản phát hành, một khoảng trống nhân sự, một sự cố nhà cung cấp, một danh mục mới. Nếu quy trình ổn định nhưng không thỏa đáng, cải tiến là một thay đổi đối với hệ thống, không phải một cuộc trò chuyện với bất kỳ ai gặp tuần đỏ.

**8. Chờ đợi hồi quy về trung bình sau một giai đoạn cực đoan.** Nếu bạn khởi động một sáng kiến vào tháng tệ nhất trong năm, một chút cải thiện sẽ theo sau do ngẫu nhiên. Hãy so sánh với một đường cơ sở dài hơn, với một dịch vụ tương tự không thay đổi, hoặc với các giới hạn kiểm soát, trước khi ghi công cho sáng kiến. Một cặp trước-sau gồm hai điểm là dạng bằng chứng yếu nhất.

### Suy luận cẩn thận về nguyên nhân và chọn mẫu

**9. Hỏi dữ liệu thiếu gì.** Phản hồi khảo sát đến từ những người đã chọn trả lời. Phiếu đã đóng loại trừ những phiếu vẫn mở. Trước khi rút ra kết luận, hãy liệt kê ai hoặc cái gì vắng mặt và điều đó có thể nghiêng kết quả ra sao.

**10. Đổi định nghĩa có chủ ý, và đánh dấu trên biểu đồ.** Một mô hình trạng thái mới, một ma trận mức ưu tiên mới hay một danh sách danh mục mới thay đổi dữ liệu mà không thay đổi công việc. Hãy chú thích mỗi thay đổi trên biểu đồ và khởi động lại các giới hạn kiểm soát sau nó (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian giải quyết trung vị | Đóng các phiếu nhanh trước và để các phiếu khó mở; tách một phiếu thành nhiều phiếu dễ; tạm dừng đồng hồ ở trạng thái chờ khách hàng | Thời gian giải quyết ở bách phân vị cao và tuổi của hạng mục mở lâu nhất; tỷ lệ thời gian ở các trạng thái tạm dừng; tỷ lệ phiếu được liên kết |
| Thời gian giải quyết ở bách phân vị cao | Chọn một bách phân vị làm đẹp kết quả, hoặc đổi nó giữa các báo cáo; loại các trường hợp dài là "ngoại lai" hoặc phân loại lại chúng | Bách phân vị cố định trong sổ đăng ký; danh sách các hạng mục bị loại kèm lý do; tuổi của hạng mục mở lâu nhất |
| Tuổi của hạng mục mở lâu nhất | Đóng hoặc gộp hạng mục lâu nhất mà không giải quyết; chuyển nó sang hàng đợi hoặc danh mục khác | Tỷ lệ mở lại; kiểm toán mẫu các hạng mục lâu nhất đã đóng; số lần chuyển hàng đợi |
| Độ phủ báo cáo tỷ lệ | Gắn số đếm bằng chữ nhỏ trong khi tiêu đề vẫn dẫn bằng phần trăm; đặt số đếm tối thiểu thấp đến mức không bao giờ kích hoạt | Rà soát bảng điều khiển thực tế, không phải sổ đăng ký; số đếm tối thiểu được rà soát cùng độ rộng khoảng |
| Tỷ lệ tín hiệu biểu đồ kiểm soát | Nới rộng giới hạn, thêm quy tắc hoặc khởi động lại đường cơ sở để tín hiệu biến mất; dịch chuyển điểm bằng cách đổi thước đo | Quy tắc và giới hạn được lưu trong sổ đăng ký kèm lịch sử thay đổi; so sánh với biểu đồ tần suất thô |
| Độ rộng khoảng | Chọn phương pháp hoặc cửa sổ tạo ra khoảng hẹp; gộp các dịch vụ không giống nhau để phóng đại mẫu | Phương pháp được nêu trong sổ đăng ký; phân tích theo dịch vụ có sẵn khi được yêu cầu; so sánh kết quả gộp và không gộp |

Một kết quả đọc lành mạnh cho thấy trung vị và bách phân vị dịch chuyển cùng chiều với trải nghiệm của người dùng, một danh sách ngắn các hạng mục cũ co lại mà không bị phân loại lại một cách lặng lẽ, và các tỷ lệ xuất hiện cùng số đếm của chúng. Tỷ lệ tín hiệu biểu đồ kiểm soát nên thấp và khác không: một biểu đồ không bao giờ báo hiệu có thể không có khả năng làm vậy, và một biểu đồ luôn báo hiệu phản ánh một quy trình không ổn định hoặc các quy tắc được chọn tồi.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Thời gian giải quyết trung bình | Đơn giản, khớp nhiều hợp đồng, dễ cộng tổng | Bị đuôi chi phối; che giấu điều khách hàng thường trải nghiệm |
| Trung vị cộng bách phân vị cao | Chống được ngoại lai; hỗ trợ lời hứa với khách hàng | Cần giải thích một chút; bách phân vị cần đủ hạng mục để ổn định |
| Tỷ lệ thô không kèm số đếm | Gọn và quen thuộc | Che giấu mẫu nhỏ và mời gọi đọc quá mức |
| Tỷ lệ kèm số đếm và khoảng | Trung thực về độ bất định; làm nản việc phản ứng thái quá | Trông kém dứt khoát; phương pháp tính khoảng cần được thống nhất |
| Biểu đồ kiểm soát | Tách tín hiệu khỏi nhiễu; hướng dẫn khi nào nên hành động | Cần đủ điểm và định nghĩa ổn định; giới hạn có thể bị đọc sai hoặc thao túng |
| So sánh trước-sau | Nhanh và dễ truyền đạt | Dễ bị hồi quy về trung bình và các thay đổi trùng thời điểm |

Với một dịch vụ chỉ có một nhúm sự cố mỗi năm, không thống kê nào ổn định, và phương pháp đúng là đọc từng sự cố. Với một bàn dịch vụ khối lượng lớn, các thước đo nhận biết phân phối thì rẻ và rõ ràng vượt trội. Hãy chọn theo khối lượng và theo mức độ rủi ro của quyết định.

## Câu hỏi để thảo luận với đội nhóm

**1. Con số nào trên bảng điều khiển hiện tại của chúng ta là trung bình của một thứ bị lệch, và trung vị cùng bách phân vị thứ 95 sẽ cho thấy gì?**
Hãy chọn thước đo thời gian được theo dõi nhiều nhất và tính cả ba trên cùng tập hạng mục trước buổi họp. Hỏi liệu câu chuyện mà giá trị trung bình kể có khớp với điều người dùng nói không. Kết thúc bằng việc thống nhất bản tóm tắt nào trở thành tiêu đề và những bản kia sẽ xuất hiện ở đâu.

**2. Có bao nhiêu hạng mục đứng sau tỷ lệ phần trăm được trích dẫn nhiều nhất của chúng ta, và chúng ta có còn trích dẫn nó nếu viết ra số đếm không?**
Liệt kê ba tỷ lệ phần trăm mà lãnh đạo đọc nhiều nhất. Bên cạnh mỗi cái, viết tử số và mẫu số của kỳ gần nhất. Hỏi một thành công hay thất bại thêm sẽ làm gì cho con số. Thống nhất một số đếm tối thiểu mà dưới đó đội cho thấy các hạng mục thay vì một tỷ lệ.

**3. Lần gần nhất chúng ta ghi công một cải tiến cho một sáng kiến là khi nào, và lúc đó còn điều gì khác là thật?**
Chọn một câu chuyện thành công gần đây. Hỏi thước đo ở mức tệ nhất khi nào, lịch sử dài hơn trông ra sao, và một dịch vụ tương đương có cải thiện không. Giữ giọng điệu tò mò.

**4. Khoảng bình thường của các thước đo chính của chúng ta là gì, và ai có thể nói rằng một tuần nhất định là bất thường?**
Vẽ 20 giá trị hằng tuần gần nhất trở lên của một thước đo và vẽ trung tâm cùng các giới hạn, hoặc tính sơ bộ. Hỏi những tuần nào đội đã phản ứng mà nằm trong khoảng. Thống nhất ai sở hữu biểu đồ và các quy tắc tín hiệu được viết ở đâu.

**5. Dữ liệu của chúng ta thiếu ai hoặc thiếu gì?**
Liệt kê các nguồn của thước đo: phiếu đã đóng, phản hồi khảo sát, dịch vụ được giám sát, công cụ có dấu thời gian. Với mỗi cái, hỏi ai bị loại trừ và vì sao. Ghi lại từng khoảng trống như một bản sửa hoặc một lưu ý.

**6. Làm sao chúng ta giải thích một khoảng rộng hay "chúng tôi chưa biết" với lãnh đạo mà không nghe như một lời bào chữa?**
Hãy diễn tập cách diễn đạt trên một ví dụ thật: "Từ 70 đến 95 phần trăm, trên 12 sự cố; chúng tôi kỳ vọng thu hẹp điều này sau quý tới." Hỏi khán giả cần quyết định gì và khoảng có thay đổi quyết định không. Viết một kịch bản ngắn trong buổi họp.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối dùng thời gian chu trình và thông lượng để dự báo, và họ được lợi nhiều nhất từ các dự báo dựa trên bách phân vị thay vì trung bình (xem chủ đề 2.1, Các thước đo dòng chảy). Một dự báo được nêu như một khoảng kèm khả năng xảy ra dễ bảo vệ hơn một ngày cụ thể. Hãy chống lại việc đọc thay đổi của một kỳ như một xu hướng (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối).

### Đội dịch vụ và vận hành

Các đội vận hành sở hữu dữ liệu phiếu và đồng hồ sự cố, nên họ ở vị trí tốt nhất để công bố trung vị, bách phân vị và hạng mục mở lâu nhất, và giải thích các quy tắc tạm dừng. Họ nên vẽ khối lượng hằng tuần và thời gian giải quyết với giới hạn kiểm soát để một dịch chuyển thật, như một bản phát hành lỗi, được phân biệt với một tuần tồi. Khi một dịch vụ có ít sự cố, họ nên rà soát từng sự cố thay vì tính các tỷ lệ (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

### Lãnh đạo và quản trị

Lãnh đạo đặt ra những câu hỏi định hình điều các đội cho thấy. Hỏi "vì sao cái này tăng?" cho mọi dao động huấn luyện tổ chức giải thích nhiễu và giấu nó. Lãnh đạo nên hỏi một dịch chuyển có nằm trong khoảng bình thường không, có bao nhiêu hạng mục đứng sau một số liệu, và quy trình đã thay đổi gì. Các cơ quan quản trị có thể yêu cầu số đếm trên các tỷ lệ tiêu đề.

### Khách hàng và người dùng

Khách hàng trải nghiệm từng trường hợp riêng lẻ, không phải giá trị trung bình. Họ nhớ yêu cầu duy nhất mất năm tuần, và một mức trung bình hai ngày không sửa được ký ức đó. Các cam kết theo bách phân vị ("chín trong mười yêu cầu trong vòng ba ngày làm việc") khớp với mô hình tâm trí của khách hàng hơn thời gian trung bình. Kết quả khảo sát nên được hiển thị kèm số phản hồi, và các bình luận mở nên được đọc cùng các con số (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa có một bàn dịch vụ và một đội vận hành hỗ trợ cửa hàng web. Các số liệu dưới đây chỉ mang tính minh họa.

Lãnh đạo thấy một tiêu đề hằng tháng: "thời gian giải quyết sự cố trung bình giảm từ 9,1 giờ xuống 7,4 giờ." Trưởng vận hành được yêu cầu xác nhận và trình bày kế hoạch cho mục tiêu kế tiếp, 6 giờ. Trước khi đồng ý, chị yêu cầu nhà phân tích kéo các hạng mục bên dưới ra và vẽ chúng. Trong 240 sự cố của tháng (minh họa), trung vị là 2,5 giờ, bách phân vị thứ 85 là 14 giờ, và 9 sự cố già hơn 5 ngày và vẫn còn mở. Tháng trước, trung vị là 2,6 giờ. Giá trị trung bình giảm vì ba sự cố rất dài từ tháng trước, một trong số đó đã 11 ngày tuổi, tình cờ được giải quyết sớm hơn trong kỳ, và vì một loạt phiếu đặt lại mật khẩu được phân loại lại sang một loại yêu cầu đóng nhanh.

Đội vẽ trung vị hằng tuần của 26 tuần qua. Đường trung tâm nằm gần 2,6 giờ, và mọi điểm từ hai tháng qua đều nằm trong giới hạn. Sự sụt giảm ở tiêu đề không phải một tín hiệu. Việc phân loại lại vào tuần thứ hai đã thay đổi định nghĩa giữa chừng biểu đồ, nên đội đánh dấu nó và khởi động lại các giới hạn từ điểm đó.

Họ quyết định ba thay đổi. Báo cáo hằng tháng sẽ cho thấy trung vị, bách phân vị thứ 85 và hạng mục mở lâu nhất, kèm số sự cố đứng sau mỗi cái. Mục tiêu trung bình 6 giờ được đề xuất được thay bằng một cuộc trao đổi về mục tiêu theo bách phân vị, sẽ được đặt sau một quý dữ liệu theo định nghĩa mới. Đội cũng sẽ liệt kê 9 sự cố cũ, mỗi sự cố có một người sở hữu và một bước tiếp theo.

Rủi ro lợi dụng mà họ bắt được xuất hiện ở lần rà soát kế tiếp. Một người quản lý đề xuất đóng 9 sự cố cũ nhất là "không còn tái hiện được" để làm cho số liệu hạng mục lâu nhất trông khỏe mạnh. Vì sổ đăng ký ghép tuổi hạng mục mở lâu nhất với tỷ lệ mở lại và một cuộc kiểm toán mẫu các lần đóng cũ, đội đọc ba trong số các đề xuất đóng, thấy hai cái vẫn còn hiệu lực, và giữ chúng mở. Số liệu hạng mục lâu nhất vẫn khó chịu thêm một tháng. Đó là hành vi được dự định.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Phân phối thường xuyên tạo ra nhiều mẫu nhỏ, điều này tốt để thấy thay đổi, nhưng mỗi mẫu đều nhỏ. Một thực hành hữu ích là cho thấy biểu đồ kiểm soát trên một cửa sổ trượt và chỉ thảo luận về tín hiệu, không phải mọi dao động, trong các buổi rà soát định kỳ. Điều cần lưu ý là tránh phản ứng với nhiễu: một đội đổi hướng sau mỗi lần trũng sẽ không bao giờ thấy tác dụng của bất kỳ thay đổi nào.

### AI

Công việc có AI hỗ trợ thường dịch chuyển toàn bộ phân phối, như phản hồi đầu tiên nhanh hơn nhưng chất lượng biến thiên nhiều hơn. Hãy so sánh trước và sau bằng bách phân vị và hạng mục lâu nhất, và ghép tốc độ với một thước đo chất lượng. Điều cần lưu ý là một thay đổi mô hình có thể làm đổi dữ liệu giữa chừng xu hướng, nên hãy đánh dấu các thay đổi mô hình và lời nhắc trên biểu đồ.

### Tự động hóa

Hãy tự động hóa việc tính và hiển thị trung vị, bách phân vị cao, số đếm và khoảng, để dạng đúng là mặc định và không ai tính lại bằng tay. Bản thân tự động hóa cũng cần báo cáo cỡ mẫu và tỷ lệ thất bại của nó. Điều cần lưu ý là cảnh báo tự động trên ngưỡng tạo ra báo động giả khi dữ liệu lệch, nên hãy dựa cảnh báo vào giới hạn kiểm soát, không phải các con số cố định.

### Phân tích

Luôn nói có bao nhiêu hạng mục đứng sau một tỷ lệ và cho thấy một khoảng khi số đếm nhỏ. Dùng dự báo dưới dạng khoảng, không phải ngày đơn lẻ. Điều cần lưu ý là ý nghĩa thống kê không có nghĩa là tầm quan trọng thực tế, và một mẫu nhỏ có thể che giấu một vấn đề thật, nên hãy kết hợp các con số với việc đọc các hạng mục thực.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Khối lượng nhỏ, nên hầu hết các tỷ lệ được tạo từ vài hạng mục và các khoảng rộng. Hãy đọc từng sự cố thay vì tính thống kê, giữ một biểu đồ hằng tuần đơn giản của một hoặc hai thước đo, và tránh tuyên bố xu hướng từ ba điểm. Khi khối lượng tăng, hãy chuyển sang trung vị và bách phân vị sớm để các thói quen đã sẵn sàng.

**Doanh nghiệp nhỏ.** Người điều hành CNTT cũng sở hữu dữ liệu, và mẫu thường nhỏ. Hãy báo cáo số đếm, không phải phần trăm, cho các sự kiện hiếm, và so sánh với lịch sử dài hơn của chính bạn. Kiểm tra đồng hồ "thời gian phản hồi" của nhà cung cấp thực sự đo gì.

**Doanh nghiệp lớn.** Khối lượng làm các phân phối có ý nghĩa, và nó cũng khuyến khích các bản tổng hợp trộn các dịch vụ không giống nhau. Hãy so sánh cái giống cái, công bố các định nghĩa và bách phân vị được dùng, và giữ một thư viện chung về quy tắc biểu đồ và tính toán để các đội không tính cùng một thước đo theo ba cách.

**Chính phủ và khu vực công.** Hợp đồng và báo cáo theo luật thường ấn định một giá trị trung bình hoặc một tỷ lệ ngưỡng, và những định nghĩa đó không thể thương lượng. Hãy báo cáo số liệu bắt buộc đúng như được định nghĩa, và cho thấy trung vị, bách phân vị và số đếm bên cạnh để các cơ quan giám sát thấy toàn bộ bức tranh. Sự soi xét của công chúng làm độ bất định trung thực có giá trị hơn, vì một con số quá tự tin thì tốn kém để rút lại (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Mất vài giờ để thống nhất các quy tắc tóm tắt, dựng một biểu đồ tần suất và một biểu đồ kiểm soát từ một bản xuất, và thêm số đếm vào mẫu báo cáo, cộng vài phút mỗi chu kỳ để giữ chúng cập nhật. Hầu hết công cụ đã tính được bách phân vị. Chi phí lớn hơn là một cuộc trò chuyện với những người quen với một con số dễ chịu.

Lợi tức là quyết định tốt hơn và ít phản ứng lãng phí hơn. Các đội ngừng tái tổ chức sau một tuần tồi, ngừng ghi công cho sáng kiến vì những cải thiện do ngẫu nhiên, và ngừng hứa các giá trị trung bình mà một nửa khách hàng của họ không trải nghiệm. Đừng vay mượn một con số: hãy đếm năm ngoái các quyết định bị đảo ngược bao nhiêu lần và bao nhiêu "cải tiến" biến mất ở kỳ tiếp theo, và dùng các số đếm đó để định cỡ hồ sơ.

## Phản mẫu và cạm bẫy

- **Lấy trung bình các khoảng thời gian bị lệch.** Giá trị trung bình bị đuôi kéo đi và che giấu điều người dùng cảm nhận. Hãy báo cáo trung vị và một bách phân vị cao có tên, và cho thấy hạng mục mở lâu nhất.
- **Phần trăm từ mẫu rất nhỏ.** "100 phần trăm" từ ba hạng mục là một giai thoại. Hãy cho thấy số đếm và áp dụng quy tắc số đếm tối thiểu.
- **Phản ứng với mọi dao động.** Đuổi theo mỗi tuần đỏ lãng phí công sức và dạy các đội giải thích nhiễu. Hãy dùng giới hạn kiểm soát và các quy tắc tín hiệu bằng văn bản.
- **Chứng minh bằng trước-sau.** Hai điểm không thể tách một can thiệp khỏi ngẫu nhiên hay hồi quy về trung bình. Hãy dùng đường cơ sở dài hơn và một đối chứng.
- **Dời cột mốc trên biểu đồ.** Đổi giới hạn, quy tắc hay định nghĩa sau sự việc khiến bất kỳ biểu đồ nào cũng đồng ý với câu chuyện. Hãy cố định quy tắc, ghi lại thay đổi và chú thích chúng.
- **Mặc định loại ngoại lai.** Các trường hợp dài nhất thường là những cái khách hàng nhớ. Chỉ loại trừ khi có lý do bằng văn bản, và liệt kê những gì đã bị loại.
- **Sự chính xác giả.** Báo cáo 83,3 phần trăm từ 12 hạng mục ngụ ý một hiểu biết mà dữ liệu không có. Hãy làm tròn một cách trung thực và cho thấy một khoảng.
- **Gộp công việc không giống nhau.** Một thời gian pha trộn cho đặt lại mật khẩu và sự cố trung tâm dữ liệu không mô tả cái nào. Hãy phân đoạn trước.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Tóm tắt dữ liệu thời gian | Chỉ có giá trị trung bình | Một số đội cho thấy trung vị | Trung vị cộng một bách phân vị có tên và hạng mục mở lâu nhất là chuẩn | Phân phối được rà soát cùng một rào chắn và theo dõi xu hướng | Cam kết theo bách phân vị được thống nhất với khách hàng và nhà cung cấp, và được sửa khi dữ liệu thay đổi |
| Cỡ mẫu và độ bất định | Tỷ lệ được trích dẫn không kèm số đếm | Số đếm được hiển thị trong một số báo cáo | Số đếm và quy tắc số đếm tối thiểu trên mọi tỷ lệ | Khoảng trên các tỷ lệ tiêu đề, phương pháp trong sổ đăng ký | Độ bất định được chia sẻ cởi mở với khách hàng và được dùng trong lập kế hoạch giữa các đội |
| Biến thiên và nhân quả | Mọi thay đổi đều được giải thích | Một vài biểu đồ có giới hạn | Biểu đồ kiểm soát kèm quy tắc bằng văn bản cho các thước đo chính | Tín hiệu kích hoạt điều tra có kế hoạch; sáng kiến được kiểm tra so với đường cơ sở | Thư viện biểu đồ chung giữa các dịch vụ; đường cơ sở được so sánh giữa các đội mà không xếp hạng |

## Danh sách kiểm tra

- [ ] Mọi thước đo thời gian báo cáo một trung vị và một bách phân vị cao có tên, thay vì chỉ một giá trị trung bình.
- [ ] Tuổi của hạng mục mở lâu nhất và số hạng mục vượt bách phân vị cao được báo cáo.
- [ ] Mọi tỷ lệ được báo cáo cho thấy tử số và mẫu số của nó.
- [ ] Một quy tắc số đếm tối thiểu được viết ra và áp dụng cho mọi tỷ lệ.
- [ ] Các tỷ lệ tiêu đề và dự báo cho thấy một khoảng, với phương pháp được nêu trong sổ đăng ký.
- [ ] Biểu đồ kiểm soát tồn tại cho ba thước đo mà đội hành động theo, kèm quy tắc tín hiệu bằng văn bản.
- [ ] Thay đổi định nghĩa được chú thích trên biểu đồ và ghi trong sổ đăng ký.
- [ ] Các hạng mục bị loại trừ được liệt kê kèm lý do.
- [ ] Tuyên bố cải tiến được kiểm tra so với đường cơ sở dài hơn trước khi được lặp lại.
- [ ] Vectơ lợi dụng và rào chắn của mỗi chỉ số nằm trong sổ đăng ký (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

## Lời nhắc AI

**Kiểm tra một bản tóm tắt có khớp với dữ liệu không.**

```text
I have [number] values of [measure, such as incident resolution time] for
[service] over [period]. The clock starts at [start event] and stops at
[stop event]. Pauses are [handled how]. The values are pasted below.

Describe the shape of the distribution, compute the mean, median, and the
[percentile, such as 85th] and [second percentile, such as 95th], and tell me
which summary best represents a typical case and which supports a promise to
customers. Point out any values that look like data errors, but do not remove
them. Do not invent benchmark values. List your assumptions and what you could
not determine from the data.

[paste values, with personal data removed]
```

**Biểu đạt một tỷ lệ cùng độ bất định của nó.**

```text
Our team reports [rate name] as [numerator] out of [denominator] for [period]
and [service]. Show how to present this with the counts, explain in plain words
how much one more or one fewer success would change it, and calculate a
confidence interval using [method, or "a method you recommend and name"].
Suggest wording that a non-technical leader can understand and a minimum-count
rule for when to show items instead of a rate. Do not invent comparison
figures. List your assumptions, including the method and any data conditions it
needs.
```

**Đánh giá một thay đổi là tín hiệu hay nhiễu.**

```text
Here are [number] consecutive [weekly or monthly] values of [measure] for
[service]. A change happened in [period]: [describe the intervention, release,
or definition change]. Plot or describe a control chart with a center line and
limits, apply these signal rules: [list rules, such as one point beyond the
limits or a run of eight on one side], and tell me which points signal. Say
whether the change is distinguishable from ordinary variation, and what other
explanations, such as regression toward the mean or a definition change, I
should rule out. Do not claim causation. List your assumptions and the extra
data that would help.

[paste values]
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề và rào chắn ghép đôi cho một chỉ số thời gian hoặc tỷ lệ trước khi bạn công bố nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một thước đo thống kê được thêm vào một chủ đề có định nghĩa, đồng hồ, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Khoảng thời gian dịch vụ bị lệch, nên hãy báo cáo trung vị và một bách phân vị cao có tên, và thêm tuổi của hạng mục mở lâu nhất.
- Mỗi tỷ lệ mang số đếm của nó, và mẫu nhỏ được cho thấy dưới dạng hạng mục hoặc kèm một khoảng, không phải một tỷ lệ phần trăm tự tin.
- Biết khoảng bình thường của một thước đo bằng biểu đồ kiểm soát trước khi phản ứng với một tuần đơn lẻ.
- Hãy nghi ngờ các cải tiến đo bằng hai điểm: hồi quy về trung bình và thay đổi định nghĩa giải thích nhiều trong số đó.
- Độ bất định trung thực là một điểm mạnh trong báo cáo, và nó là rào chắn chống lại việc lợi dụng kiểu Goodhart (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).
- Giữ kỹ thuật tương xứng: một vài phương pháp nhất quán, được giải thích bằng lời giản dị, phục vụ một đội tốt hơn nhiều phương pháp không được giải thích.

## Tài liệu tham khảo và đọc thêm

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
