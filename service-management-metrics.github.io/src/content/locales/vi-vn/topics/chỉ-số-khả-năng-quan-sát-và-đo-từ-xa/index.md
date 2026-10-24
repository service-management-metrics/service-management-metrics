# Chỉ số khả năng quan sát và đo từ xa

**Khả năng quan sát là khả năng đặt câu hỏi mới cho một dịch vụ đang chạy và nhận câu trả lời từ chính các tín hiệu của nó, nên hãy đo bạn nhìn thấy bao nhiêu phần của dịch vụ, các tín hiệu tốt đến đâu, chúng dẫn đến sự hiểu biết nhanh thế nào, và đo từ xa tốn bao nhiêu, thay vì đếm bảng điều khiển hay khối lượng dữ liệu.**

## Tổng quan và động lực

[Khả năng quan sát](https://en.wikipedia.org/wiki/Observability_(software)) là một thuộc tính của hệ thống: trạng thái bên trong của nó có thể được hiểu tốt đến đâu từ các đầu ra nó tạo ra. Trong thực tế những đầu ra đó được gọi là [đo từ xa](https://en.wikipedia.org/wiki/Telemetry), và thường được nhóm thành ba loại. **Nhật ký** là bản ghi các sự kiện rời rạc. **Chỉ số** là các phép đo bằng số theo thời gian, như tốc độ yêu cầu hay tỷ lệ lỗi. **Dấu vết** theo một yêu cầu đơn lẻ qua các phần của một hệ thống phân tán. Nhiều đội thêm hồ sơ hiệu năng, sự kiện từ thiết bị của người dùng, và sự kiện kinh doanh.

Giám sát hỏi các câu hỏi đã biết, như "tỷ lệ lỗi có vượt ngưỡng không?", và cảnh báo khi câu trả lời là có. Khả năng quan sát nhằm để một đội hỏi những câu họ không lên kế hoạch, như "vì sao các yêu cầu từ khu vực này chậm với phân khúc khách hàng này?". Cả hai đều cần. Giám sát được bao quát trong các chủ đề trước (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo). Chủ đề này bao quát chất lượng của chính các tín hiệu và thực hành hiểu hệ thống từ chúng.

Đo từ xa có chi phí và rủi ro. Thu thập mọi thứ tốn kém về lưu trữ và tiền, và có thể ghi lại dữ liệu cá nhân hay bí mật. Thu thập quá ít để đội mù trong một sự cố. Đo từ xa cũng là dữ liệu theo nghĩa của chủ đề trước (xem chủ đề 10.8, Chỉ số phân tích và chất lượng dữ liệu), nên nó có các câu hỏi về tính đầy đủ, kịp thời và nguồn gốc dữ liệu. Và khi các công cụ AI đọc đo từ xa để tóm tắt sự cố và gợi ý nguyên nhân, chất lượng của các tín hiệu quyết định bản tóm tắt có đúng không.

Các thuật ngữ dùng ở đây. Một **tín hiệu** là một luồng đo từ xa, như nhật ký, chỉ số hay dấu vết. **Công cụ đo** là mã tạo ra các tín hiệu. **Lực lượng** (cardinality) là số giá trị khác nhau của một nhãn trên một chỉ số, và lực lượng cao làm tăng chi phí. Một **chỉ báo mức dịch vụ (SLI)** đo một khía cạnh của dịch vụ như người dùng trải nghiệm (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi). **Lấy mẫu** chỉ giữ một phần dữ liệu, tiết kiệm chi phí và mất chi tiết. **Lưu giữ** là dữ liệu được giữ bao lâu. **Tương quan** nghĩa là liên kết các tín hiệu mô tả cùng một yêu cầu hay sự kiện, qua các định danh chung.

## Nguyên tắc chính

- **Đo cho câu hỏi, không phải cho khối lượng.** Chọn các tín hiệu trả lời câu hỏi về trải nghiệm người dùng và hành vi hệ thống.
- **Đo điều bạn thấy được, và điều bạn không thấy.** Độ phủ của dịch vụ và hành trình cho thấy điểm mù.
- **Các tín hiệu phải được liên kết.** Định danh nối một nhật ký, một dấu vết và một chỉ số làm sự hiểu biết nhanh.
- **Đo từ xa là một chi phí và một rủi ro.** Hãy lập ngân sách cho nó, và giữ dữ liệu cá nhân và bí mật ra ngoài trừ khi có lý do và quy tắc.
- **Khả năng quan sát phục vụ con người.** Đo thời gian để hiểu, và trải nghiệm của những người trực.
- **Tiêu chuẩn mở giảm bị khóa.** Ưu tiên định dạng chung cho công cụ đo nơi phù hợp, và kiểm tra các đặc tả hiện hành.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ công cụ đo | Tỷ lệ dịch vụ và hành trình người dùng trọng yếu phát ra các tín hiệu lõi đã thống nhất | số dịch vụ hoặc hành trình có nhật ký, chỉ số và dấu vết đạt tiêu chuẩn đã thống nhất / số dịch vụ hoặc hành trình trong danh mục dịch vụ | phần trăm | Danh mục dịch vụ và kiểm kê nền tảng đo từ xa | Giám sát và quản lý sự kiện; quản lý cấu hình dịch vụ | Định nghĩa hoàn thành cho dịch vụ mới | Hằng quý |
| Mức đầy đủ của dấu vết | Tỷ lệ yêu cầu được lấy mẫu có dấu vết liền mạch từ điểm vào đến phụ thuộc cuối cùng | số yêu cầu có dấu vết trải qua mọi chặng dự kiến / số yêu cầu trong một mẫu được kiểm tra | phần trăm | Nền tảng theo dấu và một kiểm tra mẫu | Giám sát và quản lý sự kiện | Kiểm thử khả năng quan sát trong một tính năng | Hằng tháng |
| Tỷ lệ tương quan tín hiệu | Tỷ lệ sự cố mà nhật ký, chỉ số và dấu vết có thể được ghép qua một định danh | số sự cố có phép ghép hoạt động trong rà soát dòng thời gian / số sự cố được rà soát | phần trăm | Rà soát sự cố và nền tảng theo dấu | Quản lý sự cố; quản lý vấn đề | Hành động hồi cứu | Hằng quý |
| Thời gian để hiểu | Thời gian từ khi phát hiện đến một giải thích hoạt động về nguyên nhân được ghi lại | trung vị và bách phân vị thứ 85 của (thời điểm nguyên nhân hoạt động đầu tiên được ghi trừ thời điểm sự cố được phát hiện) cho sự cố có nguyên nhân được ghi | phút | Dòng thời gian sự cố và ghi chú rà soát | Quản lý sự cố | Rà soát không đổ lỗi | Hằng quý |
| Chi phí đo từ xa mỗi dịch vụ | Chi tiêu đo từ xa quy cho một dịch vụ, trên mỗi đơn vị sử dụng của dịch vụ | chi phí đo từ xa phân bổ cho dịch vụ / một đơn vị sử dụng nêu rõ, như 1.000 yêu cầu | tiền tệ mỗi đơn vị | Hóa đơn và dữ liệu sử dụng đo từ xa | Quản lý tài chính | Chi phí như đầu vào thiết kế | Hằng tháng |
| Dữ liệu nhạy cảm trong đo từ xa | Số bản ghi đã xác nhận chứa dữ liệu không nên có ở đó | số trường hợp đã xác nhận tìm thấy bằng quét hoặc rà soát trong kỳ | số đếm | Quét và rà soát đo từ xa | Quản lý an toàn thông tin | Định nghĩa hoàn thành; rà soát quyền riêng tư | Hằng tháng |
| Sự cố điểm mù | Sự cố do người dùng báo đầu tiên mà đo từ xa không cho thấy dấu hiệu nào | số sự cố do người dùng báo đầu tiên không có cảnh báo hay tín hiệu liên quan / số sự cố trong kỳ | phần trăm | Bản ghi sự cố và ghi chú rà soát | Quản lý sự cố; giám sát | Hành động hồi cứu | Hằng quý |

Độ phủ công cụ đo phụ thuộc vào một tiêu chuẩn lõi đã thống nhất, như tốc độ yêu cầu, tỷ lệ lỗi, độ trễ và một định danh dấu vết, nêu trong sổ đăng ký chỉ số. Thời gian để hiểu chỉ tính các sự cố có nguyên nhân được ghi, nên các sự cố không có nguyên nhân đã biết được báo cáo riêng.

## Khuyến nghị

### Quyết định nhìn thấy gì

**1. Bắt đầu từ hành trình người dùng và mức dịch vụ.** Hãy liệt kê các hành trình quan trọng và các chỉ báo cho thấy người dùng có thành công không. Đo chúng trước, vì chúng gắn đo từ xa với kết quả (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi).

**2. Thống nhất một tiêu chuẩn lõi.** Định nghĩa các tín hiệu tối thiểu mà mọi dịch vụ phát ra, và quy ước đặt tên và định danh. Đặt tiêu chuẩn vào định nghĩa hoàn thành cho dịch vụ mới.

**3. Vẽ bản đồ độ phủ một cách trung thực.** Hãy so sánh danh mục dịch vụ với các dịch vụ phát tín hiệu lõi. Liệt kê các khoảng trống và người sở hữu, và xử lý những cái có tác động người dùng cao nhất trước.

### Làm tín hiệu hữu ích

**4. Liên kết tín hiệu bằng định danh chung.** Hãy truyền một định danh yêu cầu hoặc dấu vết qua nhật ký, chỉ số và dấu vết để một người có thể đi từ một yêu cầu chậm đến đúng các dòng nhật ký. Kiểm thử điều này trong một buổi diễn tập.

**5. Kiểm thử công cụ đo như mã.** Một dấu vết đứt ở một hàng đợi, hoặc một nhật ký sai múi giờ, lãng phí một sự cố. Hãy kiểm tra mức đầy đủ bằng các yêu cầu được lấy mẫu, và sửa các chỗ đứt.

**6. Kiểm soát lực lượng và lấy mẫu một cách có chủ ý.** Nhãn có lực lượng cao có thể tạo chi phí lớn, và lấy mẫu có thể bỏ mất sự kiện hiếm bạn cần. Hãy quyết định nơi lấy mẫu, ghi tỷ lệ, và giữ dữ liệu đầy đủ cho lỗi và yêu cầu chậm nơi chi trả được.

**7. Giữ dữ liệu nhạy cảm ra ngoài.** Hãy quyết định điều gì không được xuất hiện trong nhật ký và dấu vết, như dữ liệu cá nhân, thông tin xác thực, chi tiết sức khỏe hay thanh toán. Quét tìm nó, và sửa nguồn. Hãy kiểm tra nghĩa vụ với cố vấn pháp lý của bạn, vì cuốn sách này không đưa ra tư vấn pháp lý.

### Đo sự hiểu biết

**8. Đo thời gian để hiểu, không chỉ thời gian để sửa.** Thời gian từ phát hiện đến một giải thích hoạt động cho thấy các tín hiệu hỗ trợ con người tốt đến đâu. Hãy rà soát các trường hợp dài nhất để xem tín hiệu nào còn thiếu.

**9. Đếm các điểm mù.** Những sự cố mà người dùng thấy trước là bằng chứng rõ ràng nhất của một khoảng trống. Với mỗi cái, hỏi tín hiệu nào sẽ cho thấy nó, và thêm vào.

**10. Rà soát bảng điều khiển và cảnh báo về việc sử dụng.** Hãy cho nghỉ hưu các bảng điều khiển mà không ai mở và các cảnh báo không bao giờ dẫn đến hành động (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo). Một tập nhỏ hơn mà mọi người tin tưởng tốt hơn một bức tường biểu đồ.

### Quản lý chi phí và tiêu chuẩn

**11. Lập ngân sách và quy kết chi phí đo từ xa.** Hãy phân bổ chi phí cho các dịch vụ và theo dõi xu hướng. Đặt thời hạn lưu giữ theo giá trị: giữ dữ liệu chi tiết trong thời gian ngắn, bản tóm tắt lâu hơn, và xóa những gì không có mục đích dùng.

**12. Ưu tiên tiêu chuẩn mở nơi phù hợp.** Công cụ đo và định dạng dữ liệu chung, như những cái do dự án OpenTelemetry duy trì, làm việc đổi công cụ dễ hơn. Hãy kiểm tra đặc tả hiện hành và hỗ trợ của công cụ trước khi cam kết, vì tiêu chuẩn và sản phẩm thay đổi.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ công cụ đo | Thêm một tín hiệu tối thiểu vào mọi dịch vụ để qua tiêu chuẩn; loại các dịch vụ khó khỏi danh mục | Mức đầy đủ của dấu vết và sự cố điểm mù; rà soát danh mục xem có bỏ sót |
| Mức đầy đủ của dấu vết | Chỉ lấy mẫu các yêu cầu đơn giản; tính các dấu vết một phần là đầy đủ | Định nghĩa mẫu kiểm tra theo loại yêu cầu; kiểm tra độ phủ phụ thuộc |
| Tỷ lệ tương quan tín hiệu | Chỉ rà soát các sự cố đã diễn ra tốt; tính một phép ghép tồn tại trên giấy | Rà soát một mẫu ngẫu nhiên các sự cố; chạy một buổi diễn tập ghép |
| Thời gian để hiểu | Ghi nguyên nhân sớm và sơ sài; để trống nguyên nhân cho ca khó | Rà soát chất lượng bản ghi nguyên nhân; báo cáo riêng sự cố không có nguyên nhân |
| Chi phí đo từ xa mỗi dịch vụ | Bỏ tín hiệu để cắt chi phí; chuyển chi phí sang tài khoản khác | Sự cố điểm mù và thời gian để hiểu; đối chiếu tổng chi tiêu |
| Dữ liệu nhạy cảm trong đo từ xa | Quét quá hẹp; không báo cáo phát hiện | Độ phủ quét và rà soát độc lập; theo dõi thời gian gỡ bỏ |
| Sự cố điểm mù | Tính một sự cố là đã phát hiện khi một cảnh báo nổ sau khi người dùng báo; định nghĩa tín hiệu rộng | So sánh dấu thời gian của tín hiệu đầu tiên và báo cáo người dùng đầu tiên; lấy mẫu rà soát |

Một kết quả đọc lành mạnh là độ phủ tăng cùng số dấu vết đầy đủ và phép ghép, tỷ lệ sự cố do người dùng thấy đầu tiên giảm, thời gian để hiểu giảm mà không cắt tín hiệu, chi phí đo từ xa được hiểu và quy kết, và các phát hiện dữ liệu nhạy cảm được sửa nhanh.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Thu thập mọi thứ, giữ lâu | Khả năng điều tra tối đa | Chi phí và rủi ro cao; khó tìm kiếm |
| Lấy mẫu và lưu giữ ngắn | Chi phí thấp hơn | Có thể bỏ lỡ sự kiện hiếm và sự cố cũ |
| Công cụ đo chuẩn qua các dịch vụ | Nhất quán; hiểu nhanh hơn | Công sức áp dụng; có thể không vừa mọi dịch vụ |
| Công cụ đo do đội chọn | Vừa nhu cầu địa phương | Không nhất quán; khó ghép tín hiệu |
| Tóm tắt đo từ xa bằng AI | Cái nhìn đầu tiên nhanh hơn | Có thể sai; phụ thuộc chất lượng tín hiệu |

Kết luận dạng văn xuôi là giữ dữ liệu phong phú cho lỗi và yêu cầu chậm, lấy mẫu phần thường lệ, và đặt thời hạn lưu giữ theo giá trị. Một tập tín hiệu khiêm tốn, nhất quán, được liên kết tốt hơn một đống lớn không liên kết.

## Câu hỏi để thảo luận với đội nhóm

**1. Trong sự cố vừa rồi, chúng ta muốn biết điều gì mà không tìm ra được?**
Điều này lộ ra tín hiệu còn thiếu. Nhờ mọi người nhớ lại câu hỏi và nơi họ đã tìm. Hãy chờ các câu trả lời như "khách hàng nào bị ảnh hưởng" hay "cái gì đã đổi". Tiếp theo, quyết định ai thêm tín hiệu và cách kiểm thử.

**2. Với hành trình người dùng quan trọng nhất của chúng ta, làm sao chúng ta biết nó đang thất bại?**
Đi qua hành trình từng bước. Hỏi tín hiệu nào cho thấy thành công ở mỗi bước, và sớm đến đâu. Tìm các bước không có tín hiệu. Tiếp theo, thêm một chỉ báo cho bước yếu nhất.

**3. Chúng ta có thể theo một yêu cầu từ cú nhấp chuột của người dùng đến cơ sở dữ liệu và quay lại không?**
Thử trực tiếp. Chú ý nơi dấu vết đứt, như ở một hàng đợi hay một lời gọi bên thứ ba. Hỏi mất bao lâu để tìm các dòng nhật ký khớp. Tiếp theo, sửa chỗ đứt lớn nhất.

**4. Chúng ta chi bao nhiêu cho đo từ xa, và chúng ta nhận được gì?**
Nhiều đội không biết chi phí theo dịch vụ. Hỏi tín hiệu nào đã được dùng trong quý vừa qua. Thảo luận cái gì có thể lấy mẫu hoặc xóa mà không hại. Tiếp theo, chọn một tín hiệu để rà soát.

**5. Thông tin nhạy cảm nào có thể đang nằm trong nhật ký và dấu vết của chúng ta hôm nay?**
Cùng tìm ví dụ. Trường hợp phổ biến là địa chỉ email, token và các trường văn bản tự do. Hỏi nó đến đó bằng cách nào và ai đọc được. Tiếp theo, thống nhất một quy tắc và một đợt quét.

**6. Chúng ta đang dùng công cụ AI trên đo từ xa của mình thế nào, và ai kiểm tra điều chúng nói?**
Lắng nghe các bản tóm tắt sự cố chưa kiểm tra. Hỏi dữ liệu nào được gửi đến một công cụ và theo điều khoản nào. Thảo luận cách một người xác minh một nguyên nhân được gợi ý. Tiếp theo, viết một quy tắc ngắn.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Bạn quyết định một dịch vụ phát ra gì. Hãy thêm công cụ đo khi bạn xây, gồm định danh liên kết các tín hiệu, và kiểm thử nó như một phần của công việc. Coi việc thiếu khả năng quan sát là một lỗi, vì sự cố kế tiếp sẽ trả giá cho nó.

### Đội dịch vụ và vận hành

Bạn dùng đo từ xa dưới áp lực. Hãy nói với đội tín hiệu nào đã giúp và tín hiệu nào còn thiếu, và giữ cảnh báo gắn với tác động người dùng. Theo dõi thời gian để hiểu và các sự cố điểm mù, và đưa chúng đến đội sản phẩm.

### Lãnh đạo và quản trị

Hãy tài trợ khả năng quan sát như một phần của dịch vụ, với ngân sách cho đo từ xa và cho sửa khoảng trống. Yêu cầu độ phủ, sự cố điểm mù và xu hướng chi phí, không phải số bảng điều khiển. Đặt quy tắc cho dữ liệu nhạy cảm và cho việc dùng công cụ AI trên đo từ xa.

### Khách hàng và người dùng

Bạn thường là người đầu tiên nhận ra một vấn đề, nên hãy hỏi cách báo cáo nó và nó sẽ nhanh đến đâu được liên kết với các tín hiệu của dịch vụ. Các báo cáo của bạn giảm điểm mù, và bạn nên được cho biết điều đã học được. Hãy hỏi đo từ xa nào được thu thập về bạn và vì sao.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một dịch vụ thanh toán gồm tám dịch vụ nhỏ hơn. Các con số trong ví dụ này chỉ mang tính minh họa. Khách hàng báo cáo thỉnh thoảng thất bại ở bước thanh toán, nhưng các bảng điều khiển cho thấy tỷ lệ lỗi khỏe và độ trễ bình thường.

Đội đo. Độ phủ công cụ đo là 6 trên 8 dịch vụ đạt tiêu chuẩn lõi. Một kiểm tra 50 yêu cầu thanh toán được lấy mẫu cho thấy mức đầy đủ của dấu vết là 62 phần trăm, vì dấu vết đứt ở một hàng đợi thông điệp và ở một lời gọi thanh toán bên thứ ba. Trong sáu sự cố gần nhất, tỷ lệ tương quan tín hiệu là hai trên sáu, vì nhật ký dùng định danh yêu cầu khác với dấu vết. Sự cố điểm mù là ba trên sáu.

Đội truyền một định danh yêu cầu duy nhất qua hàng đợi và nhật ký, thêm một span dấu vết quanh lời gọi thanh toán, và đo thêm hai dịch vụ còn thiếu. Sau một tháng, mức đầy đủ của dấu vết đạt khoảng 90 phần trăm trong kiểm tra mẫu và sự cố kế tiếp có giải thích hoạt động trong 35 phút, so với vài giờ trước đó. Họ cũng quét nhật ký và tìm thấy địa chỉ email khách hàng trong một thông báo lỗi, họ gỡ nó từ nguồn, và các phát hiện dữ liệu nhạy cảm giảm xuống không trong tháng kế tiếp.

Một rủi ro lợi dụng xuất hiện. Một quản lý yêu cầu nâng độ phủ công cụ đo bằng cách đánh dấu hai dịch vụ còn lại là "ngoài phạm vi". Đội từ chối, vì số sự cố điểm mù sẽ vẫn cao, và ghi lại khoảng trống kèm người sở hữu. Điều còn khó: chi phí đo từ xa mỗi yêu cầu thanh toán đã tăng, và đội chưa quyết định giữ dấu vết bao lâu. Kế hoạch quý sau là lấy mẫu các dấu vết thường lệ và giữ chi tiết đầy đủ cho lỗi.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy đưa khả năng quan sát vào định nghĩa hoàn thành, để mỗi phần tăng của một dịch vụ có thể được hiểu trong sản xuất. Một thực hành tốt là rà soát các tín hiệu còn thiếu của sự cố gần nhất ở buổi trò chuyện cải tiến đều đặn và thêm chúng làm hạng mục tồn đọng. Điều cần lưu ý là công việc khả năng quan sát thường bị hoãn vì tính năng, nên hãy làm nó hiển thị và bảo vệ thời gian cho nó.

### AI

AI có thể tóm tắt đo từ xa, tương quan tín hiệu và gợi ý nguyên nhân, và bản thân các tính năng AI cần đo từ xa như đầu vào, đầu ra, độ trễ, chi phí và phản hồi người dùng. Hãy ghép các nguyên nhân do AI gợi ý với một kiểm tra của con người và báo cáo chúng đúng bao nhiêu lần, và giám sát các tính năng AI về chất lượng cũng như tính sẵn sàng (xem chủ đề 10.1, AI trong đo lường quản lý dịch vụ). Điều cần lưu ý là lời nhắc và câu trả lời trong nhật ký có thể chứa dữ liệu cá nhân, nên hãy quyết định ghi gì trước khi bắt đầu.

### Tự động hóa

Hãy tự động hóa thu thập, tương quan và cảnh báo, và tự động hóa các kiểm tra về độ phủ và dữ liệu nhạy cảm. Đo chính đường ống đo từ xa theo dữ liệu bị rơi và độ trễ, vì một đường ống hỏng trông như một hệ thống khỏe. Điều cần lưu ý là khắc phục tự động hành động theo một tín hiệu có thể che giấu nguyên nhân, nên hãy ghi nhật ký điều nó đã làm.

### Phân tích

Hãy dùng đo từ xa để trả lời các câu hỏi về trải nghiệm người dùng và hành vi hệ thống, với SLI liên kết với kết quả. Quyết định được cung cấp thông tin là đầu tư vào tín hiệu nào và giảm chi phí ở đâu. Điều cần lưu ý là khối lượng dữ liệu không phải là hiểu biết, và các chỉ số tổng hợp có thể giấu những người dùng đang bị hại, nên hãy kiểm tra phân phối và phân khúc, và cho thấy số sự kiện đằng sau mỗi con số (xem chủ đề 10.8, Chỉ số phân tích và chất lượng dữ liệu).

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Hãy bắt đầu với vài tín hiệu trên hành trình người dùng chính và một định danh dấu vết trong nhật ký. Tránh mua một nền tảng lớn trước khi các câu hỏi rõ ràng, và theo dõi chi phí khi mức sử dụng tăng.

**Doanh nghiệp nhỏ.** Các dịch vụ được lưu trữ thường cung cấp đo từ xa hạn chế. Hãy hỏi nhà cung cấp bạn có thể thấy gì và giữ một kiểm tra bên ngoài đơn giản cho hành trình chính. Tránh thu thập dữ liệu cá nhân trong nhật ký.

**Doanh nghiệp lớn.** Nhiều đội và công cụ cần một tiêu chuẩn chung, định danh chung, và quy kết chi phí trung tâm. Cho phép các đội thêm tín hiệu trong tiêu chuẩn, và quản lý lưu giữ và truy cập một cách tập trung.

**Chính phủ và khu vực công.** Các quy tắc về vị trí dữ liệu, lưu giữ và truy cập định hình điều bạn có thể thu thập và nơi nó được lưu. Hãy ghi tài liệu các luồng dữ liệu đo từ xa và kiểm tra nghĩa vụ với cố vấn pháp lý (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là công việc công cụ đo, phí nền tảng hoặc dịch vụ, lưu trữ theo thời hạn lưu giữ, và thời gian nhân viên để duy trì tiêu chuẩn và bảng điều khiển. Chi phí đo từ xa có thể tăng nhanh theo khối lượng và lực lượng, nên hãy lập ngân sách và quy kết nó.

Lợi tức là hiểu nhanh hơn trong sự cố, ít sự cố do người dùng thấy đầu tiên hơn, và quyết định tốt hơn về nơi cải thiện. Những lợi ích này có thật và khó định giá, nên tránh bịa ra một con số. Hãy so sánh thời gian để hiểu và tỷ lệ sự cố điểm mù của chính bạn trước và sau công việc, và nêu các giả định dưới dạng khoảng (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh). Phía rủi ro là chi phí của một vụ rò rỉ dữ liệu qua đo từ xa và chi phí của đo từ xa không bao giờ được dùng.

## Phản mẫu và cạm bẫy

- **Đếm bảng điều khiển.** Nhiều biểu đồ hơn không có nghĩa là hiểu nhiều hơn. Hãy đo độ phủ, phép ghép và thời gian để hiểu.
- **Thu thập mọi thứ mãi mãi.** Chi phí và rủi ro lớn lên mà ít được dùng. Hãy đặt thời hạn lưu giữ theo giá trị.
- **Tín hiệu không liên kết.** Nhật ký, chỉ số và dấu vết không thể ghép làm chậm mọi sự cố. Hãy truyền định danh chung.
- **Lấy mẫu mất sự kiện hiếm.** Thất bại bạn cần là cái bạn đã bỏ. Hãy giữ lỗi và yêu cầu chậm.
- **Dữ liệu nhạy cảm trong nhật ký.** Nó lan ra và khó gỡ. Hãy quét và sửa nguồn.
- **Cảnh báo trên mọi tín hiệu.** Nhiễu dạy mọi người phớt lờ cảnh báo. Hãy cảnh báo theo tác động người dùng.
- **Tin các bản tóm tắt của AI mà không kiểm tra.** Chúng có thể sai, và các tín hiệu có thể không đầy đủ. Hãy xác minh với dữ liệu.
- **Công cụ đo là việc của người khác.** Những người viết mã biết cần phát ra gì. Hãy làm nó thành một phần của công việc.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Độ phủ và tiêu chuẩn | Tín hiệu khác nhau theo đội; điểm mù không biết | Các dịch vụ chính được đo | Tiêu chuẩn lõi và độ phủ được theo dõi so với danh mục | Sự cố điểm mù được rà soát và khoảng trống được khép | Độ phủ được xây vào việc tạo dịch vụ và điều chỉnh theo tác động người dùng |
| Chất lượng và liên kết tín hiệu | Chỉ nhật ký; không có định danh chung | Một số dấu vết và chỉ số | Định danh chung; mức đầy đủ của dấu vết được kiểm tra | Thời gian để hiểu được rà soát; diễn tập được chạy | Tín hiệu tự thích ứng với các câu hỏi được hỏi |
| Chi phí và quản trị | Chi phí không biết; không có quy tắc dữ liệu | Chi phí hiển thị tổng thể | Chi phí được quy kết; quy tắc lưu giữ và dữ liệu nhạy cảm | Chi phí và phát hiện dữ liệu được rà soát theo nhịp | Chi phí và rủi ro đo từ xa được quản lý theo giá trị giữa các đội |

## Danh sách kiểm tra

- [ ] Một tiêu chuẩn tín hiệu lõi được viết ra và là một phần của định nghĩa hoàn thành.
- [ ] Độ phủ công cụ đo được theo dõi so với danh mục dịch vụ.
- [ ] Một định danh yêu cầu hoặc dấu vết liên kết nhật ký, chỉ số và dấu vết.
- [ ] Mức đầy đủ của dấu vết được kiểm tra trên một mẫu yêu cầu thật.
- [ ] Thời gian để hiểu được ghi cho sự cố, kèm nguyên nhân.
- [ ] Sự cố điểm mù được đếm và mỗi cái dẫn đến một tín hiệu.
- [ ] Chi phí đo từ xa được quy kết cho dịch vụ, và lưu giữ được đặt theo giá trị.
- [ ] Dữ liệu nhạy cảm trong đo từ xa được quét tìm và sửa tại nguồn.
- [ ] Có quy tắc cho công cụ AI đọc đo từ xa.
- [ ] Mỗi chỉ số có một vectơ lợi dụng và một rào chắn được hiển thị bên cạnh.

## Lời nhắc AI

**Thiết kế một tiêu chuẩn tín hiệu lõi.**

```text
Our service is [description], made of [number] components in [technologies]. Our
most important user journeys are [list]. Propose a core signal standard: the
minimum logs, metrics, and traces each component should emit, the naming and
identifier conventions, and how to check conformance. Do not recommend specific
vendors unless I name them. Mark assumptions and list questions I should answer.
```

**Tìm khoảng trống khả năng quan sát từ một buổi rà soát sự cố.**

```text
Here is a summary of a recent incident, with timeline and notes (personal data
removed): [paste]. Identify moments where the team lacked a signal, could not
link signals, or relied on a guess. For each, propose the signal or link that
would have helped, as a suggestion for the team to evaluate. Do not assert
causes that the text does not support. List what you could not judge and your
assumptions.
```

**Lập kế hoạch quét dữ liệu nhạy cảm trong đo từ xa.**

```text
We keep logs and traces in [tools]. Draft a plan to find sensitive data in them:
categories of data to look for, where to look, how to sample, how to report
findings, and how to fix at the source. Do not state legal requirements; list
questions for our legal adviser. List assumptions and what you would need access
to.
```

**Rà soát rủi ro bị lợi dụng của các thước đo khả năng quan sát.**

```text
We report these observability measures: [paste measures and definitions].
Context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without improving understanding, propose a guardrail, and say
how that guardrail could be gamed. Do not invent benchmark values. List your
assumptions.
```

## Kỹ năng AI

- [Anomaly analysis](../../../../skills/anomaly-analysis/SKILL.md): dùng để xem xét các mẫu hình bất thường trong đo từ xa trước khi quyết định nguyên nhân.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): dùng để biến tín hiệu và dòng thời gian thành một giải thích đã được kiểm thử.
- [Service level agreement](../../../../skills/service-level-agreement/SKILL.md): dùng để nối các chỉ báo với các thỏa thuận và mục tiêu chúng hỗ trợ.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề bao quát một chỉ số và rào chắn đi kèm của nó.

## Điểm chính cần nhớ

- Khả năng quan sát là về việc có thể đặt câu hỏi mới cho một dịch vụ đang chạy, nên hãy đo độ phủ, tín hiệu được liên kết và thời gian để hiểu.
- Những sự cố mà người dùng thấy đầu tiên là bằng chứng rõ ràng nhất của điểm mù, nên hãy đếm chúng và thêm tín hiệu.
- Định danh chung qua nhật ký, chỉ số và dấu vết là thứ làm sự hiểu biết nhanh.
- Đo từ xa tốn tiền và có thể làm rò dữ liệu nhạy cảm, nên hãy lập ngân sách, đặt lưu giữ theo giá trị, và quét nội dung nhạy cảm.
- Kiểm tra các bản tóm tắt đo từ xa của AI với dữ liệu, vì chúng phụ thuộc vào chất lượng tín hiệu.

## Tài liệu tham khảo và đọc thêm

1. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
2. Wikipedia, [Telemetry](https://en.wikipedia.org/wiki/Telemetry).
3. Wikipedia, [Distributed tracing](https://en.wikipedia.org/wiki/Tracing_(software)).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [Log management](https://en.wikipedia.org/wiki/Log_management).
6. Wikipedia, [Service-level indicator](https://en.wikipedia.org/wiki/Service-level_indicator).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
