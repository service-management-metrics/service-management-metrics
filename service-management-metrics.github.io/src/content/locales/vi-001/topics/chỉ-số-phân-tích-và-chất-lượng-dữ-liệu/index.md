# Chỉ số phân tích và chất lượng dữ liệu

**Mọi con số trong cuốn sách này chỉ đáng tin bằng dữ liệu và phân tích đứng sau nó, nên hãy đo chất lượng của dữ liệu, độ vững chắc của phân tích, và việc dùng kết quả trong một quyết định, và luôn nói điều một con số không thể cho thấy.**

## Tổng quan và động lực

[Phân tích](https://en.wikipedia.org/wiki/Analytics) là việc dùng dữ liệu và thống kê để trả lời câu hỏi và cung cấp thông tin cho quyết định. Trong quản lý dịch vụ, nó trải từ một số đếm phiếu hằng tuần đơn giản đến các mô hình dự đoán thay đổi nào sẽ thất bại. Phân tích là lăng kính thứ tư của cuốn sách này, bên cạnh thực hành linh hoạt, AI và tự động hóa, và nó cũng là thứ mà ba lăng kính kia phụ thuộc vào. Một bảng điều khiển xây trên [chất lượng dữ liệu](https://en.wikipedia.org/wiki/Data_quality) kém đưa ra những câu trả lời tự tin cho những câu hỏi sai.

Chất lượng dữ liệu là một tập thuộc tính: dữ liệu có đầy đủ, chính xác, nhất quán, kịp thời, duy nhất và hợp lệ không. Các chủ đề trước đã bao quát dữ liệu dịch vụ đến từ đâu và đọc nó thế nào (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo, và chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Chủ đề này biến những ý tưởng đó thành các thước đo mà một đội có thể theo dõi về dữ liệu và phân tích của chính mình, theo cách Phần 4 đo thay đổi. Nó cũng bao quát phân tích như một thực hành: các câu hỏi được hỏi, các phương pháp được dùng, ai kiểm tra chúng, và liệu kết quả có thay đổi một quyết định không.

Phân tích hấp dẫn vì nó mở rộng được. Một nhà phân tích có thể phục vụ nhiều đội, và một mô hình có thể chấm điểm mọi phiếu. Cùng quy mô đó khuếch đại sai lầm. Một định nghĩa bị đọc sai trong một bộ dữ liệu dùng chung lan đến mọi báo cáo xây trên nó, và một mô hình huấn luyện trên hành vi quá khứ có thể lặp lại thiên kiến cũ ở tốc độ cao. Các công cụ AI viết truy vấn, biểu đồ và tóm tắt làm phân tích rẻ hơn và cũng làm lỗi dễ được tạo ra với sự tự tin hơn, nên việc kiểm tra quan trọng hơn.

Các thuật ngữ dùng ở đây. Một **bộ dữ liệu** là một tập hợp bản ghi đã định nghĩa, như phiếu hay lần triển khai. **Nguồn gốc dữ liệu** là bản ghi về dữ liệu đến từ đâu và đã được làm gì. **Đối chiếu** so sánh hai nguồn lẽ ra phải khớp. Một **hợp đồng dữ liệu** là một thỏa thuận giữa bên tạo ra và người dùng một bộ dữ liệu về cấu trúc, ý nghĩa và chất lượng của nó. Một **phân tích** là một câu hỏi, một phương pháp và một kết quả. **Độ bất định** là khoảng trong đó một giá trị có thể nằm, cho dữ liệu và phương pháp. Một **nhật ký quyết định** ghi lại các quyết định mà một con số đã cung cấp thông tin.

## Nguyên tắc chính

- **Bắt đầu từ câu hỏi và quyết định.** Một phân tích không gắn quyết định nào là chi phí chung.
- **Đo dữ liệu về dữ liệu.** Tính đầy đủ, kịp thời và đối chiếu là các thước đo một đội có thể sở hữu.
- **Giữ nguồn gốc dữ liệu.** Một con số bạn không thể truy về nguồn thì không thể sửa.
- **Nêu độ bất định và giới hạn.** Cho thấy số đếm đằng sau một tỷ lệ và nói điều con số không thể cho thấy.
- **Kiểm tra phân tích như mã.** Rà soát định nghĩa và truy vấn, và giữ chúng trong kiểm soát phiên bản.
- **Bảo vệ con người.** Phân tích hành vi của con người cần giới hạn quyền riêng tư, và kết quả mô tả đội và dịch vụ.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mức đầy đủ của trường bắt buộc | Tỷ lệ bản ghi có mọi trường cần cho các chỉ số dùng chúng | số bản ghi có mọi trường bắt buộc hiện diện và hợp lệ / số bản ghi trong phạm vi | phần trăm | Trích xuất hệ thống nguồn và kiểm tra chất lượng dữ liệu | Đo lường và báo cáo; quản lý tri thức | Định nghĩa hoàn thành cho bản ghi | Hằng tháng |
| Độ mới của dữ liệu | Tuổi của dữ liệu gần nhất trong một bộ dữ liệu tại thời điểm một báo cáo được đọc | trung vị và giá trị lớn nhất của (thời điểm báo cáo được đọc trừ thời điểm bản ghi mới nhất được tải) qua các bộ dữ liệu | giờ | Nhật ký đường ống và siêu dữ liệu bộ dữ liệu | Đo lường và báo cáo | Phản hồi nhanh | Hằng tuần |
| Chênh lệch đối chiếu | Sự khác biệt giữa hai nguồn lẽ ra phải khớp về cùng một đại lượng | chênh lệch tuyệt đối giữa nguồn A và nguồn B / nguồn A, cho một mẫu đại lượng và kỳ đã nêu | phần trăm | Hai hệ thống nguồn | Đo lường và báo cáo; quản lý tài chính | Thỏa thuận làm việc về định nghĩa | Hằng quý |
| Độ phủ nguồn gốc dữ liệu | Tỷ lệ chỉ số được báo cáo có nguồn, biến đổi và người sở hữu được ghi tài liệu | số chỉ số trong sổ đăng ký có nguồn gốc dữ liệu được ghi tài liệu / số chỉ số được báo cáo | phần trăm | Sổ đăng ký chỉ số và danh mục dữ liệu | Quản trị | Thỏa thuận của đội | Hằng quý |
| Tỷ lệ chạy đường ống dữ liệu thất bại | Tỷ lệ lần chạy đường ống dữ liệu thất bại hoặc tải dữ liệu không đầy đủ | số lần chạy đường ống dữ liệu thất bại hoặc tải không đầy đủ / số lần chạy bắt đầu | phần trăm | Nhật ký đường ống dữ liệu | Đo lường và báo cáo | Tích hợp liên tục cho dữ liệu | Hằng tuần |
| Tỷ lệ rà soát phân tích | Tỷ lệ bài phân tích được công bố đã được một người thứ hai rà soát trước khi dùng | số bài phân tích có rà soát được ghi lại / số bài phân tích công bố cho đối tượng ra quyết định | phần trăm | Sổ đăng ký phân tích và nhật ký rà soát | Đo lường và báo cáo; cải tiến liên tục | Rà soát đồng nghiệp | Hằng quý |
| Tỷ lệ dùng cho quyết định | Tỷ lệ chỉ số được báo cáo được trích dẫn trong một quyết định được ghi lại trong kỳ | số chỉ số được trích dẫn trong một mục nhật ký quyết định / số chỉ số được báo cáo | phần trăm | Nhật ký quyết định và sổ đăng ký chỉ số | Cải tiến liên tục | Hành động hồi cứu | Hằng quý |

Mức đầy đủ chỉ tính một trường là hiện diện nếu nó chứa một giá trị hợp lệ, nên một giá trị giữ chỗ như "n/a" không tính. Chênh lệch đối chiếu áp dụng cho một mẫu đại lượng được nêu tên, như số phiếu của một tháng, và nêu rõ mẫu.

## Khuyến nghị

### Làm chất lượng dữ liệu hiển thị

**1. Định nghĩa chất lượng dữ liệu theo các chỉ số.** Hãy liệt kê các trường và dấu thời gian mà các chỉ số quan trọng nhất của bạn phụ thuộc, và định nghĩa hợp lệ trông thế nào cho từng cái. Kiểm tra chúng trước, vì một dấu thời gian thiếu phá hỏng một thước đo thời gian.

**2. Kiểm tra tại nguồn, không chỉ trong báo cáo.** Một kiểm tra chất lượng chạy khi dữ liệu được tạo ra, như một trường bắt buộc trong biểu mẫu phiếu, ngăn các lỗi mà không việc làm sạch nào sau đó sửa được hoàn toàn. Hãy thêm kiểm tra cả khi dữ liệu được tải.

**3. Công bố chất lượng bên cạnh các con số.** Hãy cho thấy mức đầy đủ và độ mới trên bảng điều khiển hiển thị chỉ số. Người đọc nên thấy chất lượng dữ liệu mà không phải hỏi.

**4. Đối chiếu theo lịch.** Hãy so sánh ít nhất một đại lượng giữa hai hệ thống mỗi quý, như số thay đổi trong bản ghi thay đổi và trong đường ống. Điều tra và giải thích các khác biệt, và ghi lại phát hiện.

### Giữ phân tích trung thực

**5. Viết câu hỏi và quyết định trước.** Trước khi phân tích, hãy ghi câu hỏi, quyết định nó cung cấp thông tin, và ai sẽ quyết định. Khi quyết định đã qua, ghi lại điều đã được quyết định.

**6. Giữ nguồn gốc dữ liệu và định nghĩa trong một sổ đăng ký.** Liên kết mỗi chỉ số với nguồn, biến đổi, người sở hữu và ngày rà soát của nó (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số). Thay đổi định nghĩa được ghi nhật ký kèm lý do và đánh dấu trên biểu đồ.

**7. Rà soát từng bài phân tích.** Một người thứ hai kiểm tra định nghĩa, truy vấn và kết luận cho bất kỳ phân tích nào dùng trong một quyết định. Giữ truy vấn trong kiểm soát phiên bản để có thể chạy lại.

**8. Nêu độ bất định và giới hạn.** Hãy cho thấy số hạng mục đằng sau mỗi tỷ lệ, các khoảng nơi chúng quan trọng, và điều phân tích không thể cho thấy. Tránh độ chính xác một con số nơi dữ liệu không hỗ trợ.

### Quản trị việc sử dụng

**9. Dùng hợp đồng dữ liệu cho các bộ dữ liệu dùng chung.** Đội tạo ra một bộ dữ liệu nêu ý nghĩa, các trường, độ mới và các vấn đề đã biết của nó, và báo người dùng khi nó thay đổi. Các thay đổi gây vỡ cần được báo trước.

**10. Bảo vệ con người trong dữ liệu.** Hãy quyết định ai có thể thấy bản ghi thô, dữ liệu được giữ bao lâu, và kích thước nhóm tối thiểu cho báo cáo. Giữ phân tích ở cấp đội và dịch vụ, và kiểm tra quy tắc quyền riêng tư áp dụng cho bạn.

**11. Cho báo cáo và bộ dữ liệu nghỉ hưu.** Một báo cáo mà không ai dùng vẫn tốn bảo trì và có thể gây hiểu lầm. Hãy rà soát việc sử dụng và cho nghỉ hưu những gì không được trích dẫn trong quyết định.

**12. Coi phân tích có AI hỗ trợ là chưa rà soát cho đến khi được kiểm tra.** Các công cụ AI có thể viết một truy vấn hay một bản tóm tắt trông đúng mà sai. Hãy rà soát truy vấn, chạy lại trên một mẫu nhỏ đã biết, và ghi lại rằng nó đã được kiểm tra.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Mức đầy đủ của trường bắt buộc | Điền trường bằng giá trị giữ chỗ hoặc mặc định; làm trường thành tùy chọn | Kiểm tra tính hợp lệ của nội dung; lấy mẫu bản ghi xem giá trị thật |
| Độ mới của dữ liệu | Đóng dấu thời gian cho lần tải thay vì sự kiện; tải các cập nhật rỗng | Kiểm tra thời gian sự kiện so với thời gian tải; số dòng mỗi lần tải |
| Chênh lệch đối chiếu | Chọn các đại lượng tình cờ khớp; điều chỉnh một nguồn cho khớp | Luân phiên các đại lượng; giữ dấu vết kiểm toán của các điều chỉnh |
| Độ phủ nguồn gốc dữ liệu | Ghi tài liệu nguồn gốc qua loa; sao chép văn bản giữa các mục | Lấy mẫu các mục và truy một chỉ số đầu cuối |
| Tỷ lệ chạy đường ống dữ liệu thất bại | Đánh dấu lần chạy thất bại là đã thử lại hoặc thành công; xóa nhật ký | So sánh số bản ghi với nguồn; cảnh báo về khoảng trống |
| Tỷ lệ rà soát phân tích | Rà soát đóng dấu cho có; rà soát sau quyết định | Kiểm tra ghi chú của người rà soát; yêu cầu rà soát trước khi dùng |
| Tỷ lệ dùng cho quyết định | Trích dẫn chỉ số trong nhật ký mà không có tác động lên quyết định | Hỏi điều gì đã đổi; lấy mẫu các mục |

Một kết quả đọc lành mạnh là các con số chất lượng dữ liệu hiển thị và ổn định, các khác biệt giữa nguồn được giải thích, phân tích được rà soát trước khi dùng, và các chỉ số đến và đi khi quyết định cần.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Kiểm tra dữ liệu nghiêm ngặt khi nhập | Ngăn lỗi sớm | Ma sát cho người dùng; mục nhập giữ chỗ |
| Làm sạch dữ liệu sau sự việc | Linh hoạt; không làm chậm người dùng | Giấu nguyên nhân; lỗi vẫn còn trong một số báo cáo |
| Đội phân tích trung tâm | Phương pháp và chất lượng nhất quán | Nút thắt; xa công việc |
| Phân tích tự phục vụ bởi các đội | Nhanh; gần công việc | Định nghĩa không nhất quán; chất lượng không đồng đều |
| Phân tích có AI hỗ trợ | Bản nháp nhanh; hạ rào cản | Lỗi tự tin; khả năng tái lập yếu |

Kết luận dạng văn xuôi là ngăn lỗi tại nguồn, chia sẻ định nghĩa và nguồn gốc dữ liệu ở một nơi, và yêu cầu rà soát cho bất kỳ phân tích nào cung cấp thông tin cho quyết định. Tốc độ từ tự phục vụ và AI được chào đón khi việc kiểm tra theo kịp.

## Câu hỏi để thảo luận với đội nhóm

**1. Ba con số nào trên bảng điều khiển của chúng ta mà chúng ta sẽ hối tiếc nhất nếu dữ liệu bên dưới sai?**
Bắt đầu với những con số dẫn dắt quyết định hoặc mục tiêu. Hỏi chúng phụ thuộc vào dữ liệu nào, và ai sở hữu nguồn. Mọi người thường phát hiện một con số then chốt phụ thuộc vào một trường nhập bằng tay. Tiếp theo, chọn một cái để kiểm tra tháng này.

**2. Khi nào hai báo cáo bất đồng, và chúng ta đã giải quyết thế nào?**
Những câu chuyện về các con số mâu thuẫn cho thấy định nghĩa khác nhau ở đâu. Hỏi việc giải quyết có được ghi lại không và nguyên nhân có được sửa không. Người điều phối nên ghi lại các nguyên nhân lặp lại, như múi giờ hay định nghĩa trạng thái khác nhau. Tiếp theo, thống nhất một định nghĩa và một người sở hữu.

**3. Dữ liệu trong báo cáo chúng ta nhìn nhiều nhất cũ bao nhiêu?**
Nhiều người không biết. Hỏi độ mới được hiển thị thế nào và một lần tải cũ có được nhận ra không. Thảo luận chi phí của một quyết định lỗi thời. Tiếp theo, thêm độ mới vào báo cáo.

**4. Ai đã rà soát bài phân tích cuối cùng làm thay đổi một quyết định?**
Tìm một đôi mắt thứ hai trên định nghĩa và truy vấn. Nếu không có, thảo luận vì sao. Hỏi rà soát nào là tương xứng. Tiếp theo, chọn một bước rà soát đơn giản cho bất kỳ phân tích nào cung cấp thông tin cho một quyết định quan trọng.

**5. Chỉ số được dùng nhiều nhất của chúng ta không thể cho chúng ta biết điều gì?**
Nêu tên các giới hạn là thói quen của phân tích làm tốt. Hỏi các điểm mù cụ thể, như người dùng không liên hệ hỗ trợ. Ghi các giới hạn bên cạnh chỉ số. Tiếp theo, thêm một thước đo bao quát một điểm mù.

**6. Chúng ta đang dùng công cụ AI để viết truy vấn và tóm tắt thế nào, và chúng ta kiểm tra chúng ra sao?**
Hỏi về thực hành thực tế, không phải chính sách. Lắng nghe đầu ra chưa rà soát được dùng trong báo cáo. Thảo luận một phép kiểm tra đơn giản, như chạy lại trên một mẫu đã biết. Tiếp theo, thống nhất một quy tắc cho phân tích có AI hỗ trợ.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Công cụ của bạn tạo ra nhiều dữ liệu mà người khác phân tích. Hãy giữ dấu thời gian, định danh và trạng thái đáng tin cậy, và báo người dùng dữ liệu khi một trường thay đổi. Đưa chất lượng dữ liệu vào định nghĩa hoàn thành cho các tính năng mới tạo ra dữ liệu.

### Đội dịch vụ và vận hành

Dữ liệu phiếu phụ thuộc vào cách mọi người điền biểu mẫu dưới áp lực. Hãy làm mục nhập đúng thành mục nhập dễ, kiểm tra chất lượng dữ liệu trong công cụ, và lên tiếng khi một chỉ số đọc sai công việc. Đừng ghi lùi ngày hay cập nhật hàng loạt bản ghi để cải thiện một con số.

### Lãnh đạo và quản trị

Hãy yêu cầu chất lượng dữ liệu và nguồn gốc dữ liệu bên cạnh bất kỳ con số nào hỗ trợ một quyết định hay mục tiêu. Tài trợ kỹ thuật dữ liệu và thời gian rà soát, không chỉ bảng điều khiển. Bảo vệ quyền riêng tư, và tránh dùng phân tích về cá nhân để đánh giá con người.

### Khách hàng và người dùng

Dữ liệu về bạn quyết định cách dịch vụ đối xử với bạn, nên hãy hỏi cái gì được thu thập và nó được dùng thế nào. Nơi phản hồi của bạn nằm trong dữ liệu, như câu trả lời khảo sát, hãy hỏi nó được bảo vệ thế nào và nó đã đến một quyết định ra sao.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Phòng CNTT của một công ty tiện ích khu vực xây một bảng điều khiển về thời gian giải quyết sự cố và tỷ lệ thay đổi thất bại cho đội lãnh đạo điều hành. Các con số trong ví dụ này chỉ mang tính minh họa. Bảng điều khiển cho thấy thời gian giải quyết trung vị 3,1 giờ và tỷ lệ thay đổi thất bại 4 phần trăm.

Một nhà phân tích kiểm tra chất lượng trước khi ra mắt. Mức đầy đủ của trường bắt buộc cho dấu thời gian giải quyết là 91 phần trăm, với các bản ghi thiếu chủ yếu là các sự cố lớn được nhập sau sự việc. Độ mới là 26 giờ, vì việc trích xuất chạy qua đêm. Đối chiếu bản ghi thay đổi với đường ống cho thấy đường ống có nhiều hơn 8 phần trăm thay đổi sản xuất so với bản ghi thay đổi, nên tỷ lệ thất bại có vấn đề về mẫu số.

Đội thực hiện các thay đổi. Biểu mẫu phiếu yêu cầu thời gian giải quyết và kiểm tra nó muộn hơn thời gian mở. Bảng điều khiển cho thấy số sự cố đằng sau mỗi con số, tuổi của dữ liệu, và mức đầy đủ của các trường được dùng. Một hợp đồng dữ liệu nêu rằng bản ghi thay đổi là hệ thống ghi nhận cho các thay đổi được phê duyệt và đường ống cho các triển khai, kèm một đối chiếu hằng tháng. Lần đối chiếu đầu tiên giải thích khoảng cách là các thay đổi khẩn cấp chỉ được ghi trong đường ống.

Một rủi ro lợi dụng xuất hiện khi một quản lý gợi ý loại các sự cố thiếu thời gian giải quyết để cải thiện mức đầy đủ. Đội từ chối và sửa mục nhập. Kết quả là khoảng trung vị rộng hơn và tỷ lệ thay đổi thất bại 6 phần trăm. Nhật ký quyết định ghi rằng đội lãnh đạo điều hành chọn chờ một quý trước khi đặt mục tiêu. Điều còn khó: không phải mọi mục nhập ghi lùi ngày đều phát hiện được, và việc đối chiếu phụ thuộc vào một liên kết định danh thủ công.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Vòng phản hồi ngắn giúp chất lượng dữ liệu: sửa biểu mẫu, kiểm tra dữ liệu ngày hôm sau, và hỏi người dùng. Một thực hành tốt là rà soát các con số chất lượng dữ liệu ở buổi trò chuyện cải tiến đều đặn cùng những người nhập dữ liệu. Điều cần lưu ý là các thay đổi liên tục với trường và trạng thái làm vỡ xu hướng, nên hãy ghi nhật ký mọi thay đổi định nghĩa.

### AI

AI có thể viết truy vấn, soạn biểu đồ, tóm tắt bình luận và đánh dấu bất thường, và nó cũng có thể bịa ra kết quả hợp lý. Hãy coi phân tích có AI hỗ trợ là chưa rà soát cho đến khi một người kiểm tra truy vấn và chạy lại nó trên một mẫu nhỏ đã biết, và ghi lại rằng nó đã được kiểm tra. Điều cần lưu ý là tóm tắt bình luận khảo sát của AI có thể đọc sai ngôn ngữ và sắc thái, nên hãy đọc một mẫu bản gốc.

### Tự động hóa

Hãy tự động hóa các kiểm tra chất lượng dữ liệu khi tải và khi báo cáo, và đo các đường ống theo thất bại và khoảng trống. Cảnh báo về các lần tải bị thiếu và thay đổi đột ngột về khối lượng. Điều cần lưu ý là các quy tắc làm sạch tự động có thể giấu một vấn đề ở nguồn, nên hãy báo cáo điều gì đã được thay đổi và vì sao.

### Phân tích

Chủ đề này nói về phân tích, nên thực hành là một ghi chú ngắn cho mọi chỉ số: câu hỏi, quyết định, nguồn gốc dữ liệu, chất lượng và giới hạn của nó. Quyết định được cung cấp thông tin là có tin một con số đủ để hành động không. Điều cần lưu ý là các bảng điều khiển trông sạch có thể nằm trên dữ liệu yếu, nên hãy cho thấy các con số chất lượng bên cạnh kết quả và giữ các định nghĩa của Service Management Metrics trong một sổ đăng ký.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Dữ liệu nhỏ và thay đổi. Hãy giữ một nguồn sự thật cho mỗi chỉ số, viết định nghĩa trong một tài liệu ngắn, và tránh xây một nền tảng dữ liệu trước khi các câu hỏi rõ ràng.

**Doanh nghiệp nhỏ.** Dữ liệu có thể nằm trong một công cụ được lưu trữ với báo cáo cố định. Hãy kiểm tra công cụ định nghĩa mỗi thước đo thế nào, xuất các mẫu để xác minh, và giữ một danh sách ngắn về điều các báo cáo không thể cho thấy.

**Doanh nghiệp lớn.** Nhiều nguồn và đội tạo ra các định nghĩa mâu thuẫn. Hãy dùng một sổ đăng ký chỉ số chung, hợp đồng dữ liệu và một đối chiếu đều đặn, và cho các đội phương tiện kiểm tra dữ liệu của chính họ.

**Chính phủ và khu vực công.** Hồ sơ có thể chịu các quy tắc về lưu giữ, truy cập và báo cáo công khai. Hãy ghi tài liệu nguồn gốc dữ liệu cho bất kỳ con số nào được công bố, và giữ quy tắc quyền riêng tư cho dữ liệu về con người (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là thời gian nhân viên cho kiểm tra chất lượng dữ liệu, đối chiếu, tài liệu và rà soát, cộng công cụ cho đường ống dữ liệu và danh mục nơi được dùng. Phần lớn có thể bắt đầu bằng những bước nhỏ, như kiểm tra hợp lệ trong biểu mẫu phiếu.

Lợi tức là các quyết định dựa trên con số tốt hơn, ít thời gian tranh cãi báo cáo nào đúng, và ít làm lại khi một con số bị đọc sai được phát hiện muộn. Hãy mô tả nó như một mẫu hình, không phải một con số: ít quyết định bị đảo ngược hơn và ít tranh chấp hơn. Nếu bạn cần con số cho một hồ sơ, hãy đo đường cơ sở của chính bạn, như chênh lệch đối chiếu và thời gian dành để giải quyết tranh chấp báo cáo, trước và sau thay đổi (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Chỉ làm sạch trong báo cáo.** Nguồn tiếp tục tạo ra lỗi. Hãy sửa kiểm tra khi nhập và khi tải.
- **Bảng điều khiển không có con số chất lượng.** Người đọc không thể đánh giá con số. Hãy cho thấy mức đầy đủ, độ mới và số đếm.
- **Định nghĩa không được ghi tài liệu.** Con số đổi nghĩa âm thầm. Hãy giữ nguồn gốc dữ liệu và nhật ký thay đổi.
- **Phân tích chưa rà soát.** Lỗi đến được quyết định. Hãy yêu cầu một cái nhìn thứ hai.
- **Tin các bản tóm tắt của AI.** Chúng có thể trôi chảy mà sai. Hãy kiểm tra truy vấn và lấy mẫu bản gốc.
- **Phân tích về cá nhân.** Nó biến thành giám sát và làm hỏng dữ liệu. Hãy báo cáo ở cấp đội với kích thước nhóm tối thiểu.
- **Không bao giờ cho báo cáo nghỉ hưu.** Chúng tích tụ và gây hiểu lầm. Hãy rà soát việc sử dụng và gỡ bỏ.
- **Con số đơn lẻ không có độ bất định.** Chúng mời gọi phản ứng thái quá. Hãy cho thấy số đếm và khoảng.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Chất lượng dữ liệu | Chất lượng không biết; bảng tính làm bằng tay | Mức đầy đủ được kiểm tra cho các trường chính | Kiểm tra chất lượng khi nhập và khi tải, hiển thị trên báo cáo | Đối chiếu và xu hướng chất lượng được rà soát theo nhịp | Chất lượng được quản lý bằng hợp đồng dữ liệu giữa các đội |
| Nguồn gốc dữ liệu và định nghĩa | Định nghĩa nằm trong đầu mọi người | Một số định nghĩa được viết | Sổ đăng ký kèm nguồn, người sở hữu và nhật ký thay đổi | Nguồn gốc dữ liệu được truy đầu cuối cho các chỉ số chính | Định nghĩa chia sẻ qua các đội và nhà cung cấp |
| Thực hành phân tích | Báo cáo một lần; không rà soát | Một số rà soát đồng nghiệp | Câu hỏi, quyết định và rà soát được ghi lại | Phân tích được tái sử dụng, rà soát và cho nghỉ hưu | Phân tích nhúng trong quyết định kèm phản hồi về kết quả |

## Danh sách kiểm tra

- [ ] Mỗi chỉ số chính liệt kê các trường và dấu thời gian nó phụ thuộc.
- [ ] Các trường bắt buộc được kiểm tra hợp lệ khi nhập, không chỉ làm sạch sau.
- [ ] Báo cáo cho thấy mức đầy đủ, độ mới và số đếm đằng sau mỗi tỷ lệ.
- [ ] Ít nhất một đại lượng được đối chiếu giữa hai nguồn mỗi quý.
- [ ] Một sổ đăng ký ghi nguồn, biến đổi, người sở hữu và ngày rà soát cho mỗi chỉ số.
- [ ] Thay đổi định nghĩa được ghi nhật ký và đánh dấu trên biểu đồ.
- [ ] Phân tích cung cấp thông tin cho một quyết định được một người thứ hai rà soát.
- [ ] Có quy tắc cho phân tích có AI hỗ trợ, gồm một kiểm tra trên mẫu đã biết.
- [ ] Truy cập, lưu giữ và kích thước nhóm tối thiểu được định nghĩa cho dữ liệu liên quan đến con người.
- [ ] Mỗi chỉ số có một vectơ lợi dụng và một rào chắn được hiển thị bên cạnh.

## Lời nhắc AI

**Soạn các kiểm tra chất lượng dữ liệu cho một chỉ số.**

```text
We report this metric: [metric name], defined as [definition including clock start
and stop]. It depends on these fields in [tool]: [list fields]. Propose data quality
checks for completeness, validity, timeliness, and consistency, and say where each
check should run (at entry, at load, or in the report). Do not invent thresholds;
use placeholders. Mark assumptions and list questions I should answer.
```

**Rà soát một phân tích trước khi dùng.**

```text
Here is an analysis we plan to use for a decision: [paste question, method,
query or steps, and result, without personal data]. Review it for unclear
definitions, wrong denominators, small samples, missing uncertainty, and
conclusions that go beyond the data. Do not assume facts not in the text. List
what you could not judge and what a human reviewer should check.
```

**Lập kế hoạch đối chiếu giữa hai hệ thống.**

```text
Two systems should agree on [quantity]: [system A] and [system B]. Propose a
reconciliation plan: the sample, the period, how to match records, how to
classify differences, and how to record findings. Do not invent expected
variance. List assumptions and the access I would need.
```

**Rà soát rủi ro bị lợi dụng của các thước đo chất lượng dữ liệu.**

```text
We report these data quality measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving the data, propose a guardrail, and say how
that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Kỹ năng AI

- [Data quality](../../../../skills/data-quality/SKILL.md): dùng để định nghĩa và kiểm tra chất lượng của một bộ dữ liệu.
- [Data pipeline](../../../../skills/data-pipeline/SKILL.md): dùng để thiết kế và rà soát đường ống tải dữ liệu dịch vụ.
- [Statistical analysis](../../../../skills/statistical-analysis/SKILL.md): dùng để kiểm tra rằng một phương pháp và độ bất định của nó phù hợp với câu hỏi.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề bao quát một chỉ số và rào chắn đi kèm của nó.

## Điểm chính cần nhớ

- Một con số chỉ đáng tin bằng dữ liệu của nó, nên hãy đo mức đầy đủ, độ mới và đối chiếu và cho thấy chúng bên cạnh kết quả.
- Giữ nguồn gốc dữ liệu và định nghĩa trong một sổ đăng ký, và ghi nhật ký mọi thay đổi.
- Rà soát phân tích trước khi nó cung cấp thông tin cho quyết định, gồm cả phân tích có AI hỗ trợ.
- Nêu độ bất định và giới hạn, và cho thấy số đếm đằng sau mỗi tỷ lệ.
- Giữ phân tích ở cấp đội và dịch vụ, với giới hạn quyền riêng tư cho dữ liệu về con người.

## Tài liệu tham khảo và đọc thêm

1. Wikipedia, [Analytics](https://en.wikipedia.org/wiki/Analytics).
2. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
3. Wikipedia, [Data lineage](https://en.wikipedia.org/wiki/Data_lineage).
4. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
5. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Wikipedia, [Reproducibility](https://en.wikipedia.org/wiki/Reproducibility).
