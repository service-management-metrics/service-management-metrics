# Chỉ số tự phục vụ và tự động hóa

**Hãy đo tự phục vụ theo việc mọi người có nhận được điều họ cần mà không cần giúp đỡ không, và đo tự động hóa theo công việc nó loại bỏ và những thất bại nó tạo ra, vì một liên hệ chưa bao giờ đến chỉ là thành công nếu vấn đề đã được giải quyết.**

## Tổng quan và động lực

Tự phục vụ và tự động hóa là hai cách chính để một tổ chức dịch vụ gỡ công việc thường lệ khỏi con người của mình. [Tự phục vụ](https://en.wikipedia.org/wiki/Self-service_software) cho phép một người dùng tự giải quyết một vấn đề hoặc lấy một thứ, qua một cổng, một bài viết tri thức, một trang đặt lại mật khẩu hoặc một [chatbot](https://en.wikipedia.org/wiki/Chatbot). [Tự động hóa](https://en.wikipedia.org/wiki/Automation) cho phép một hệ thống thực hiện các bước mà một người từng thực hiện, như tạo một tài khoản, khởi động lại một dịch vụ, hoặc đóng một phiếu khi một bộ giám sát xác nhận đã phục hồi. Cả hai nhắm tới cùng một kết quả: ít tác vụ lặp lại hơn cho con người, kết quả nhanh hơn cho người dùng, và nhiều thời gian hơn cho công việc cần phán đoán.

Các ý tưởng ánh xạ vào cả hai truyền thống. Trong [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, thực hành quản lý yêu cầu dịch vụ kỳ vọng các yêu cầu được hiểu rõ, lặp lại được sẽ được xử lý qua các luồng chuẩn với mức tự động hóa nhiều nhất có thể hợp lý, và các thực hành quản lý sự cố và quản lý tri thức kỳ vọng thông tin tốt có sẵn cho người dùng và nhân viên hỗ trợ ở điểm hữu ích sớm nhất. Thực hành linh hoạt và DevOps đến cùng nơi qua một con đường khác: [hạ tầng dưới dạng mã](https://en.wikipedia.org/wiki/Infrastructure_as_code), các đường ống, và kỷ luật loại bỏ toil, mà các cuốn sách kỹ thuật độ tin cậy của trang của Google định nghĩa là công việc thủ công, lặp đi lặp lại, tự động hóa được và lớn lên cùng dịch vụ. Ý tưởng chung thường gọi là "dịch sang trái": chuyển việc giải quyết một vấn đề về phía người dùng, hoặc về phía điểm rẻ nhất và sớm nhất trong chuỗi hỗ trợ, và xa khỏi hàng đợi chuyên gia.

Ngôn ngữ dịch sang trái mời gọi một sai lầm đo lường. Các đội thấy một liên hệ tránh được là rẻ và rồi đếm các liên hệ tránh được là thành công. Con số dễ tạo ra, vì một lượt truy cập cổng không kết thúc bằng phiếu trông giống hệt một lượt truy cập cổng mà người dùng bỏ cuộc. Chủ đề này vì vậy bắt đầu từ kết quả của người dùng. Nó định nghĩa thành công của tự phục vụ nghĩa là gì, cách ước lượng chuyển hướng mà không nhận công cho việc bỏ cuộc, cách đo độ phủ và độ tin cậy của tự động hóa, và cách thấy hiệu ứng dịch sang trái lên khối lượng và độ phức tạp. Các thước đo khối lượng và mức ưu tiên liên quan nằm trong chủ đề 3.2, Số lượng và mức ưu tiên sự cố, phía yêu cầu nằm trong chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ, và phía tri thức nằm trong chủ đề 3.6, Chỉ số quản lý tri thức.

Các thuật ngữ dùng trong chủ đề này:

- **Cấp 0 (hay tầng tự phục vụ)**: người dùng tự giải quyết mà không liên hệ nhân viên. Cấp 1 là tuyến hỗ trợ đầu tiên, thường là bàn dịch vụ, và cấp 2 và 3 là các tầng chuyên gia và kỹ thuật.
- **Chuyển hướng (deflection)**: một liên hệ lẽ ra đã đến tay nhân viên và thay vào đó được giải quyết ở cấp 0. Nó không thể quan sát trực tiếp, nên luôn là một ước lượng.
- **Rơi xuống (fall-through)**: một người dùng đã thử tự phục vụ, không thành công, rồi liên hệ nhân viên về cùng nhu cầu.
- **Sổ tay vận hành (runbook)**: một quy trình có tài liệu cho một tác vụ vận hành thường lệ. Một [sổ tay vận hành](https://en.wikipedia.org/wiki/Runbook) là bước đầu thông thường hướng tới tự động hóa nó.
- **Toil**: công việc thủ công, lặp đi lặp lại, tự động hóa được và không có giá trị lâu dài (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca).
- **Danh mục dịch vụ**: danh sách các dịch vụ và yêu cầu chuẩn cung cấp cho người dùng. ITIL gọi nó là service catalogue.

## Nguyên tắc chính

- **Đếm kết quả, không phải liên hệ tránh được.** Một phiên cổng không có phiếu chỉ là thành công khi nhu cầu của người dùng được đáp ứng. Hãy định nghĩa thành công từ phía người dùng và xác minh nó bằng một tín hiệu theo dõi.
- **Chuyển hướng là một ước lượng, nên hãy gắn nhãn nó như vậy.** Nêu phương pháp, phép so sánh đã dùng và độ bất định. Không bao giờ trình bày một số liệu chuyển hướng ước lượng như một sự thật đã đo.
- **Đo con đường rơi xuống.** Lộ trình từ một nỗ lực tự phục vụ thất bại đến một liên hệ có nhân viên là nơi phần lớn thất bại ẩn sống. Hãy báo cáo nó bên cạnh mọi con số thành công.
- **Tự động hóa có một phía chi phí.** Mỗi luồng tự động cần bảo trì, giám sát và một cách thất bại an toàn. Hãy đo độ phủ và độ tin cậy cùng nhau, và đếm công sức dành để giữ tự động hóa sống.
- **Dịch sang trái đổi cơ cấu cũng như khối lượng.** Khi công việc dễ rời hàng đợi, công việc còn lại khó hơn và chậm hơn trung bình. Hãy đọc thời gian giải quyết và thời gian xử lý với điều đó trong đầu (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).
- **Các chỉ số mô tả dịch vụ và luồng.** Hãy báo cáo theo mục danh mục, họ bài viết hoặc luồng tự động hóa. Không bao giờ xếp hạng nhân viên theo số người dùng họ đã đẩy sang tự phục vụ.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ thành công tự phục vụ | Tỷ lệ phiên tự phục vụ mà nhu cầu của người dùng được đáp ứng mà không có liên hệ nhân viên | Số phiên kết thúc bằng một kết quả hoàn tất (yêu cầu được gửi và thực hiện, bài viết được đánh dấu hữu ích, đặt lại hoàn tất) không có liên hệ nhân viên nào về cùng nhu cầu trong vòng 7 ngày, chia cho tất cả phiên đã bắt đầu một tác vụ. Đồng hồ bắt đầu ở hành động có ý nghĩa đầu tiên trong cổng, dừng ở lúc hoàn tất hoặc bỏ cuộc. Loại trừ lưu lượng bot, tài khoản thử nghiệm và duyệt thuần túy | Phần trăm | Nhật ký cổng và định danh, hệ thống phiếu, phân tích phiên | Quản lý yêu cầu dịch vụ; quản lý tri thức | Vòng phản hồi khách hàng; tiêu chí chấp nhận dựa trên kết quả | Hằng tháng |
| Tỷ lệ chuyển hướng ước lượng | Tỷ lệ ước lượng của nhu cầu được giải quyết ở cấp 0 mà lẽ ra đã đến tay nhân viên | So sánh tỷ lệ liên hệ mỗi 1.000 người dùng hoạt động cho một dịch vụ trước và sau một thay đổi tự phục vụ, hoặc so với một nhóm đối chứng, điều chỉnh theo các dịch chuyển nhu cầu đã biết. Được nêu như một ước lượng với phương pháp được nêu tên. Loại trừ các liên hệ đã chuyển sang kênh khác | Phần trăm (ước lượng) | Hệ thống phiếu, số đếm quần thể người dùng, dữ liệu thử nghiệm hoặc nhóm | Bàn dịch vụ; quản lý sự cố | Thử nghiệm có nhóm đối chứng; thử nghiệm A/B | Hằng quý |
| Tỷ lệ rơi xuống | Tỷ lệ các nỗ lực tự phục vụ thất bại kết thúc bằng một liên hệ có nhân viên về cùng nhu cầu | Số liên hệ nhân viên mở trong vòng 7 ngày sau một phiên tự phục vụ bị bỏ dở hoặc không thành công bởi cùng người dùng về cùng chủ đề, chia cho các phiên không thành công. Đồng hồ bắt đầu khi phiên kết thúc. Loại trừ các liên hệ không liên quan | Phần trăm | Nhật ký cổng ghép với hệ thống phiếu theo người dùng và chủ đề | Bàn dịch vụ; quản lý tri thức | Con đường leo thang trong định nghĩa hoàn thành; phản hồi từ hỗ trợ | Hằng tháng |
| Mức áp dụng tự phục vụ (tỷ lệ cổng trước) | Tỷ lệ các yêu cầu và báo cáo sự cố đủ điều kiện được nêu qua các kênh tự phục vụ | Số hạng mục tạo qua cổng, bot hoặc API, chia cho tất cả hạng mục của các mục danh mục có cung cấp lộ trình tự phục vụ. Loại trừ các hạng mục không có lộ trình tự phục vụ | Phần trăm | Trường kênh của hệ thống phiếu, cấu hình danh mục | Quản lý yêu cầu dịch vụ; quản lý danh mục dịch vụ | Theo dõi áp dụng sau một bản phát hành | Hằng tháng |
| Độ phủ tự động hóa | Tỷ lệ công việc lặp lại đủ điều kiện được hoàn tất bằng tự động hóa không có bước thủ công | Số hạng mục hoàn tất bởi một luồng tự động đầu-cuối, chia cho tất cả hạng mục thuộc các loại được đánh giá là tự động hóa được. Chỉ tính một loại là tự động hóa được nếu một danh sách ứng viên bằng văn bản nêu tên nó. Loại trừ công việc một lần và các hạng mục mà tự động hóa từ chối | Phần trăm | Hệ thống phiếu, nhật ký nền tảng tự động hóa, danh sách ứng viên | Quản lý yêu cầu dịch vụ; quản lý triển khai | Tự động hóa định nghĩa hoàn thành; đường ống dưới dạng mã | Hằng tháng |
| Tỷ lệ thất bại và làm lại của tự động hóa | Tỷ lệ các lần chạy tự động thất bại, cần sửa thủ công, hoặc tạo ra kết quả sau đó bị sửa | Số lần chạy tự động gặp lỗi, bị hoàn tác, hoặc được theo sau bởi một bản sửa thủ công trong vòng 7 ngày, chia cho tất cả lần chạy tự động. Đồng hồ bắt đầu từ lúc chạy. Loại trừ các lần chạy thử có kế hoạch | Phần trăm | Nhật ký nền tảng tự động hóa, hệ thống phiếu, bản ghi thay đổi | Hỗ trợ thay đổi; quản lý sự cố | Tỷ lệ thay đổi thất bại; độ ổn định bản dựng và kiểm thử | Hằng tuần |
| Thời gian chạm thủ công theo loại yêu cầu | Công sức nhân viên dành cho một loại yêu cầu là ứng viên tự động hóa | Số phút trực tiếp làm do nhân viên ghi trên các hạng mục của loại trong kỳ, tóm tắt dưới dạng trung vị và bách phân vị thứ 85 mỗi hạng mục. Được ước lượng bằng lấy mẫu nơi thời gian không được ghi. Loại trừ thời gian chờ | Phút mỗi hạng mục | Lấy mẫu thời gian, nhật ký công việc của phiếu | Quản lý yêu cầu dịch vụ | Theo dõi toil; lãng phí của chuỗi giá trị | Hằng quý |
| Phân phối theo cấp (tỷ lệ dịch sang trái) | Các hạng mục được giải quyết ở đâu trong chuỗi hỗ trợ | Số hạng mục giải quyết ở mỗi cấp (0, 1, 2, 3) chia cho tất cả hạng mục giải quyết trong kỳ. Cấp là tầng cao nhất đã làm việc trực tiếp. Loại trừ các hạng mục bị hủy trước khi phân loại | Phần trăm theo cấp | Nhóm giải quyết và lịch sử giao việc của hệ thống phiếu | Quản lý sự cố; bàn dịch vụ | Mẫu hình xúm lại và leo thang; các đội liên chức năng | Hằng tháng |

Tất cả những chỉ số này được đo theo từng dịch vụ, mục danh mục hoặc luồng, không bao giờ theo từng người. Các thước đo thời gian nên được cho thấy dưới dạng trung vị cộng một bách phân vị cao, như phần giới thiệu chủ đề về hiểu biết thống kê giải thích (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

## Khuyến nghị

### Định nghĩa thành công từ phía người dùng

**1. Viết ra "nhận được điều tôi cần" nghĩa là gì cho mỗi lộ trình tự phục vụ.** Với việc đặt lại mật khẩu, đó là một lần đặt lại hoàn tất và một lần đăng nhập thành công. Với một yêu cầu, đó là được thực hiện, không phải gửi đi. Với một bài viết, đó là một người dùng không liên hệ nhân viên lần nữa về cùng nhu cầu. Một định nghĩa dừng ở "đã xem trang" đo lưu lượng.

**2. Ghép các phiên tự phục vụ với các liên hệ sau đó.** Bằng chứng mạnh nhất của thất bại là một liên hệ có nhân viên về cùng chủ đề ngay sau một phiên. Hãy liên kết hai cái theo người dùng và chủ đề nơi quy tắc riêng tư cho phép, và nơi không, dùng số đếm tổng hợp theo chủ đề và ngày. Phép ghép biến một câu chuyện hài lòng mơ hồ thành một tỷ lệ rơi xuống mà bạn cải thiện được.

**3. Hỏi người dùng bằng một câu hỏi duy nhất ở điểm thoát.** Một lời nhắc một câu hỏi như "Điều này có giải quyết vấn đề của bạn không?" cho một tín hiệu trực tiếp mà nhật ký không thể. Hãy coi các câu trả lời là một mẫu, đọc các bình luận tự do, và so sánh người trả lời với người không trả lời để những người dùng hài lòng nhất không định nghĩa kết quả (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

### Ước lượng chuyển hướng một cách trung thực

**4. Ưu tiên một phép so sánh hơn một bộ đếm.** Ước lượng sạch nhất đến từ một nhóm đối chứng, một đợt triển khai theo giai đoạn, hoặc một cái nhìn trước-sau về liên hệ mỗi 1.000 người dùng hoạt động cho dịch vụ bị ảnh hưởng. Đếm "các phiên không thành phiếu" phóng đại hiệu ứng, vì nhiều người dùng trong số đó chưa bao giờ có nhu cầu mà nhân viên sẽ thấy. Hãy nêu phương pháp và độ bất định bên cạnh con số.

**5. Chuẩn hóa khối lượng theo mức sử dụng.** Một sự giảm số phiếu có thể theo sau một sự giảm người dùng, một chu kỳ phát hành yên tĩnh hoặc một thay đổi mùa vụ. Hãy chia cho người dùng hoạt động hoặc giao dịch trước khi rút ra kết luận (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố). Chú thích biểu đồ bằng các bản phát hành, chiến dịch và thay đổi cổng.

**6. Giữ chuyển hướng ra khỏi các mục tiêu.** Một mục tiêu cho chuyển hướng thưởng cho việc giấu lộ trình liên hệ, chôn số điện thoại, và đóng phiên trò chuyện sớm. Hãy dùng chuyển hướng như một ước lượng học hỏi và để mục tiêu nằm trên kết quả của người dùng, như tỷ lệ thành công tự phục vụ và hạng mục chưa giải quyết cũ nhất.

### Đo tự động hóa như một sản phẩm, không phải một dự án

**7. Giữ một danh sách ứng viên và đo độ phủ so với nó.** Độ phủ của "mọi công việc" là một thước đo kém, vì hầu hết công việc không tự động hóa được. Hãy giữ một danh sách ngắn bằng văn bản các loại yêu cầu và sự cố lặp lại được, được hiểu rõ và thường xuyên, xếp hạng nó theo thời gian chạm thủ công và khối lượng, và báo cáo độ phủ so với danh sách đó. Rà soát danh sách mỗi quý để mẫu số trung thực.

**8. Ghép độ phủ với độ tin cậy.** Một luồng tự động thất bại một trong mười lần chạy, hoặc âm thầm tạo ra kết quả sai, có thể tốn hơn tác vụ thủ công mà nó thay thế. Hãy theo dõi tỷ lệ thất bại và làm lại, thời gian để phát hiện một lần chạy thất bại, và mức độ thường xuyên một người phải sửa kết quả. Hãy dùng các thực hành xử lý lỗi mà cộng đồng kỹ thuật độ tin cậy của trang mô tả: các bước idempotent, cảnh báo rõ ràng và một phương án thủ công dự phòng an toàn (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo).

**9. Đếm cả chi phí bảo trì.** Tự động hóa cần người sở hữu, kiểm soát phiên bản, kiểm thử và cập nhật khi các hệ thống quanh chúng thay đổi. Hãy ghi lại thời gian dành để bảo trì mỗi luồng, và so sánh với thời gian chạm thủ công mà nó đã loại bỏ. Một tự động hóa tốn nhiều hơn để giữ chạy so với những gì nó tiết kiệm là ứng viên để nghỉ hưu, một kết quả bình thường, không phải thất bại.

### Theo dõi hiệu ứng dịch sang trái

**10. Chờ đợi công việc còn lại sẽ khó hơn.** Khi các liên hệ thường lệ rời bàn dịch vụ, thời gian xử lý trung bình và giải quyết ngay lần liên hệ đầu ở cấp 1 thường tệ đi ngay cả khi dịch vụ tốt hơn. Hãy báo cáo phân phối theo cấp và cơ cấu danh mục bên cạnh những thước đo đó, và thống nhất trước với lãnh đạo rằng thời gian xử lý tăng sau một lần chuyển hướng thành công là điều được kỳ vọng (xem chủ đề 3.1, Chỉ số bàn dịch vụ).

**11. Khép vòng với tri thức và quản lý vấn đề.** Mỗi lần rơi xuống là bằng chứng của một bài viết còn thiếu hoặc kém, một biểu mẫu gây nhầm lẫn hoặc một lỗi chưa sửa. Hãy gửi các chủ đề rơi xuống hàng đầu đến người sở hữu tri thức và, nơi nguyên nhân là một lỗi, đến quản lý vấn đề (xem chủ đề 4.1, Chỉ số quản lý vấn đề). Rà soát danh sách hằng tháng và báo cáo bao nhiêu hạng mục đã được sửa.

**12. Chia sẻ năng lực bạn giải phóng.** Nếu tự động hóa và tự phục vụ loại bỏ công việc, hãy quyết định thời gian được giải phóng mua gì: công việc cải tiến, các bản sửa chủ động hay đào tạo. Các đội không thấy lợi ích từ tự động hóa ngừng đề xuất nó. Hãy theo dõi tỷ lệ năng lực có kế hoạch dành cho cải tiến theo thời gian (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ thành công tự phục vụ | Đếm bất kỳ biểu mẫu hoàn tất hay lượt xem trang nào là thành công; gỡ lời nhắc "điều này có giúp ích không" khi điểm giảm; loại các chủ đề khó khỏi mẫu số | Tỷ lệ rơi xuống và một mẫu các phiên đã đóng do một người đọc; báo cáo các quy tắc mẫu số |
| Tỷ lệ chuyển hướng ước lượng | Giấu lộ trình liên hệ; thêm các bước trước khi liên hệ; phân loại mọi sự giảm số phiếu là chuyển hướng bất kể nguyên nhân | Liên hệ mỗi 1.000 người dùng hoạt động, mức hài lòng của người dùng về dịch vụ bị ảnh hưởng, và phương pháp ghi cạnh con số |
| Tỷ lệ rơi xuống | Định nghĩa cửa sổ khớp quá ngắn để những người quay lại rơi ra ngoài; đóng liên hệ theo dõi là bản trùng | Tỷ lệ liên hệ lặp lại qua mọi kênh; rà soát một mẫu các liên hệ quay lại |
| Mức áp dụng tự phục vụ (tỷ lệ cổng trước) | Ép mọi yêu cầu vào cổng bất kể có phù hợp không; gắn lại nhãn phiếu tạo qua điện thoại là phiếu cổng | Tỷ lệ thành công tự phục vụ và công sức người dùng; tỷ lệ yêu cầu không có lộ trình cổng khả thi |
| Độ phủ tự động hóa | Chọn các mục dễ cho danh sách ứng viên; mở rộng mẫu số bằng các tác vụ tầm thường; tính các luồng thủ công một phần là tự động | Danh sách ứng viên bằng văn bản được rà soát mỗi quý; tỷ lệ thất bại và làm lại của tự động hóa; thời gian chạm thủ công của các hạng mục còn lại |
| Tỷ lệ thất bại và làm lại của tự động hóa | Loại các bản sửa thủ công khỏi số đếm; để các lần chạy thất bại thử lại âm thầm đến khi thành công; gắn nhãn thất bại là "chạy thử có kế hoạch" | Bản ghi sự cố và cảnh báo liên kết với các luồng; thời gian để phát hiện một lần chạy thất bại; kiểm toán mẫu các kết quả |
| Thời gian chạm thủ công theo loại yêu cầu | Không ghi thời gian cho các hạng mục trông thủ công; gán thời gian cho hạng mục khác; chỉ lấy mẫu những ngày yên tĩnh | Kế hoạch lấy mẫu được viết ra và rà soát; so sánh với thời gian chu trình và tuổi hàng đợi cho cùng loại |
| Phân phối theo cấp (tỷ lệ dịch sang trái) | Nâng tỷ lệ giải quyết ở cấp 1 bằng cách phân loại lại các leo thang, hoặc bằng cách đóng hạng mục ở cấp 1 rồi mở lại ở cấp 2 như hạng mục mới | Tỷ lệ mở lại và tỷ lệ phiếu liên kết; mẫu chất lượng giải quyết; mức hài lòng của khách hàng theo cấp |

Một kết quả đọc lành mạnh cho thấy thành công tự phục vụ tăng cùng với tỷ lệ rơi xuống ổn định hoặc đang giảm, chuyển hướng ước lượng được nêu kèm phương pháp, độ phủ tự động hóa tăng so với một danh sách ứng viên đã rà soát trong khi thất bại và làm lại thấp, và một phân phối theo cấp chuyển công việc sớm hơn mà không làm tăng tỷ lệ mở lại hay giảm mức hài lòng. Nếu một con số cải thiện trong khi rào chắn của nó tệ đi, hãy coi sự cải thiện là chưa được chứng minh.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Tự phục vụ trước | Kết quả tức thì cho người dùng, chi phí cận biên thấp hơn, có sẵn mọi giờ | Người dùng có nhu cầu phức tạp hoặc bất thường có thể cảm thấy bị bỏ rơi; nội dung yếu tạo ra nhiều liên hệ hơn nó loại bỏ |
| Liên hệ có nhân viên trước | Sự giúp đỡ cá nhân, phán đoán, và cơ hội nhận ra các vấn đề bất thường | Chậm hơn, tốn kém, và phụ thuộc vào nhân viên có mặt |
| Ước lượng chuyển hướng bằng nhóm đối chứng | Bằng chứng đáng tin về tác dụng | Cần công sức thiết kế và sự chấp nhận một nhóm không nhận thay đổi |
| Đếm các phiên không có phiếu | Rẻ và luôn có sẵn | Phóng đại thành công; mời gọi việc lợi dụng; không phân biệt được thành công với bỏ cuộc |
| Tự động hóa rộng | Thực thi nhất quán và ít toil hơn | Gánh nặng bảo trì, các kiểu thất bại nhân rộng, và kỹ năng có thể phai khỏi đội |
| Tự động hóa chọn lọc các luồng ổn định | Lợi tức tốt hơn cho công sức và ít bất ngờ hơn | Để lại một số công việc thủ công cần được chú ý riêng |

Câu trả lời dạng văn xuôi là tự động hóa những gì thường xuyên, ổn định và được hiểu rõ, và giữ một người sẵn sàng nơi nhu cầu không rõ hoặc mức rủi ro cao. Tự phục vụ nên được đánh giá bằng việc mọi người có được giúp không, với lộ trình có nhân viên được giữ hiển thị. Tiết kiệm từ dịch sang trái chỉ thật khi kết quả của người dùng giữ vững, nên hãy đếm cả hai phía.

## Câu hỏi để thảo luận với đội nhóm

**1. Khi một người dùng mở cổng và rời đi mà không nêu phiếu, chúng ta giả định điều gì đã xảy ra, và làm sao chúng ta biết?**
Yêu cầu nhóm liệt kê các câu chuyện có thể: người dùng tìm được câu trả lời, bỏ cuộc, gọi điện thay vào đó, hay hỏi một đồng nghiệp. Xem dữ liệu nào sẽ phân biệt chúng, như một liên hệ theo dõi, một lời nhắc thoát, hoặc một mẫu các phiên. Người điều phối nên ghi lại giả định nào hiện nằm trong bảng điều khiển và ai dựa vào nó. Kết thúc bằng việc thống nhất một thay đổi sẽ thay một giả định bằng bằng chứng.

**2. Hiện nay chúng ta ước lượng chuyển hướng ra sao, và liệu chúng ta có bảo vệ được phương pháp trước một đối tác tài chính hoài nghi không?**
Đi qua phép tính từng bước, gồm cả nhóm so sánh và các điều chỉnh cho thay đổi nhu cầu. Hỏi điều gì khác đã thay đổi trong kỳ, như các bản phát hành, sự cố ngừng hoạt động hay thay đổi nhân sự. Ghi lại khoảng giá trị hợp lý cũng như con số tiêu đề. Cuộc thảo luận nên kết thúc bằng một tuyên bố giản dị về phương pháp có thể nằm cạnh con số.

**3. Tự động hóa nào của chúng ta sẽ bị tắt vào ngày mai nếu chúng ta biết chi phí thật của chúng?**
Liệt kê các luồng tự động với người sở hữu, ngày thay đổi cuối, số lần chạy, tỷ lệ thất bại và công sức bảo trì. Hỏi cái nào sẽ không ai nhớ, và cái nào mọi người sợ chạm vào. Người điều phối nên coi việc nghỉ hưu là một kết quả chính đáng. Các câu trả lời thường làm lộ các luồng không có người sở hữu.

**4. Điều gì xảy ra với một người dùng có nỗ lực tự phục vụ thất bại, và mất bao lâu để họ tiếp cận được một con người?**
Yêu cầu ai đó đi qua lộ trình như một người dùng, gồm cả việc tìm lộ trình liên hệ. Bấm giờ nó và ghi lại mọi bước có thể rút ngắn. So sánh trải nghiệm với ý định đã nêu của cổng. Nhóm nên quyết định lộ trình có dễ tìm như lộ trình tự phục vụ không.

**5. Cơ cấu công việc của bàn dịch vụ một năm trước trông ra sao, và bây giờ trông ra sao?**
Rà soát cơ cấu danh mục và phân phối theo cấp theo thời gian. Thảo luận vì sao thời gian xử lý hay giải quyết ngay lần liên hệ đầu dịch chuyển, và liệu nó có phản ánh một cơ cấu khó hơn không. Hỏi lãnh đạo đã được nói rằng điều này là kỳ vọng được chưa. Thống nhất cách trình bày xu hướng để việc tăng thời gian xử lý sau một lần dịch sang trái thành công không bị đọc là sa sút.

**6. Chúng ta sẽ làm gì với năng lực mà tự động hóa giải phóng, và ai quyết định?**
Ước lượng số giờ được gỡ khỏi công việc thủ công và nêu tên điều chúng được cho là mua. Hỏi thời gian đó đi vào công việc cải tiến hay bị nhu cầu mới hấp thụ. Thảo luận đội sẽ biết bằng cách nào. Người điều phối nên thúc đẩy một cam kết cụ thể, như một tỷ lệ năng lực dự trữ để sửa các chủ đề rơi xuống hàng đầu.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu phần lớn điều khiến tự phục vụ thành công: thông báo lỗi rõ ràng, biểu mẫu dùng được, trợ giúp trong sản phẩm, và khả năng làm tác vụ mà không phải nêu phiếu. Họ cũng sở hữu tự động hóa sống trong đường ống và mã hạ tầng. Các thước đo hữu ích của họ là thành công tự phục vụ trên các tính năng của chính mình và các bước thủ công còn lại trong công việc phát hành và môi trường, được coi là toil cần loại bỏ (xem chủ đề 2.8, Chỉ số DORA). Họ nên đọc các chủ đề rơi xuống như một tồn đọng sản phẩm.

### Đội dịch vụ và vận hành

Các đội vận hành gánh khối tài sản tự động hóa và phương án dự phòng có nhân viên. Họ nên theo dõi độ tin cậy tự động hóa, tải bảo trì và thời gian chạm thủ công còn lại, và họ nên theo dõi phân phối theo cấp mà không bị phạt vì công việc khó hơn còn lại. Nhân viên nên được tham vấn về những yêu cầu nào là ứng viên tự động hóa tốt, vì họ biết ma sát thật ở đâu. Hãy báo cáo theo luồng và loại yêu cầu, không bao giờ theo nhân viên.

### Lãnh đạo và quản trị

Lãnh đạo bị cám dỗ coi chuyển hướng là một số liệu tiết kiệm chi phí. Một yêu cầu tốt hơn là về kết quả của người dùng, phương pháp đứng sau bất kỳ ước lượng nào, và độ tin cậy của tự động hóa. Quản trị nên chờ đợi một danh sách ứng viên, một người sở hữu cho mỗi luồng tự động và một quy tắc nghỉ hưu. Lãnh đạo cũng nên bảo vệ lộ trình có nhân viên khỏi bị giấu để đạt một mục tiêu (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi).

### Khách hàng và người dùng

Người dùng muốn tiếp tục công việc của họ. Nhiều người thích tự phục vụ khi nó hoạt động, và gần như tất cả đều ghét bị mắc kẹt trong đó khi nó không. Trải nghiệm của họ được nắm bắt tốt nhất qua các câu hỏi về công sức và kết quả ở điểm thoát, và qua việc một nỗ lực thất bại có dẫn nhanh đến một con người không (xem chủ đề 6.4, Trải nghiệm người dùng và nhân viên). Người dùng có nhu cầu tiếp cận hoặc ít tự tin là cảnh báo sớm cho các cổng chỉ hoạt động với người dùng trung bình.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một nhà bán lẻ trực tuyến cỡ vừa vận hành một bàn dịch vụ, một đội nền tảng và nhiều đội sản phẩm. Các con số trong ví dụ này chỉ mang tính minh họa.

Bộ phận ra mắt một cổng được thiết kế lại với đặt lại mật khẩu có hướng dẫn, một luồng yêu cầu quyền truy cập phần mềm và một chatbot cho các câu hỏi phổ biến. Ba tháng sau, báo cáo cổng cho thấy 62 phần trăm phiên kết thúc mà không có phiếu, và một người quản lý đề xuất gọi đó là "chuyển hướng" và đặt mục tiêu 70 phần trăm. Trưởng bàn dịch vụ bất an, vì nhân viên báo cáo rằng những người gọi nói họ "đã thử cổng trước."

Đội rà soát các thước đo. Họ định nghĩa thành công tự phục vụ là một kết quả hoàn tất không có liên hệ nhân viên nào về cùng chủ đề trong vòng 7 ngày. Theo định nghĩa đó tỷ lệ thành công là 48 phần trăm, không phải 62, và tỷ lệ rơi xuống cho luồng yêu cầu quyền truy cập là 31 phần trăm. Đọc một mẫu 40 liên hệ rơi xuống, họ thấy hầu hết người dùng không phân biệt được nên chọn mục nào trong hai mục danh mục giống nhau, và chatbot đang trả lời một câu hỏi về một công cụ đã nghỉ hưu.

Đội đưa ra ba quyết định. Thứ nhất, thước đo tiêu đề trở thành thành công tự phục vụ, với chuyển hướng ước lượng chỉ được cho thấy như một ước lượng hằng quý dựa trên liên hệ mỗi 1.000 người dùng hoạt động, và không đặt mục tiêu nào cho chuyển hướng. Thứ hai, hai mục danh mục giống nhau được gộp lại, nội dung chatbot được sửa, và hai chủ đề rơi xuống hàng đầu được đưa vào tồn đọng cải tiến kèm một người sở hữu. Thứ ba, một quy trình thủ công để tạo môi trường kiểm thử, tốn các kỹ sư nền tảng trung vị 25 phút (minh họa) và xảy ra khoảng 40 lần mỗi tháng (minh họa), được thêm vào danh sách ứng viên tự động hóa.

Đội nền tảng tự động hóa luồng môi trường trong quý. Một rủi ro lợi dụng xuất hiện nhanh: số liệu độ phủ của luồng tăng, nhưng tỷ lệ thất bại và làm lại cho thấy cứ tám lần chạy thì một lần (minh họa) cần sửa thủ công và các lần sửa được ghi là "bảo trì có kế hoạch". Đội thêm các lần chạy đã sửa vào số đếm thất bại, liên kết các lần chạy với bản ghi sự cố, và thống nhất rà soát luồng hằng tháng. Ở buổi rà soát kế tiếp, tỷ lệ thành công đã tăng lên 57 phần trăm (minh họa), tỷ lệ rơi xuống đã giảm, và thời gian xử lý của bàn dịch vụ tăng nhẹ vì các liên hệ còn lại khó hơn. Trưởng CNTT đồng ý trình bày thời gian xử lý cùng phân phối theo cấp, để tránh đọc sự tăng là sa sút.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy cải thiện tự phục vụ theo từng bước nhỏ với phản hồi của người dùng, vì cổng là một sản phẩm do con người thật dùng. Điều cần lưu ý là một sự bắt buộc cổng trước có thể nâng mức áp dụng trong khi làm bực bội những người dùng cần một con người.

### AI

Trò chuyện và tìm kiếm bằng AI có thể nâng khối lượng tự phục vụ và chuyển hướng ước lượng, nhưng một liên hệ bị chuyển hướng có thể là một vấn đề chưa được giải quyết. Hãy ghép chuyển hướng với tỷ lệ thành công tự phục vụ đo bằng câu trả lời của người dùng hoặc một cửa sổ không quay lại, và với tỷ lệ rơi xuống đến một con người. Điều cần lưu ý là một mô hình trả lời tự tin và sai tạo ra những liên hệ quay lại sau.

### Tự động hóa

Hãy đo tự động hóa theo độ phủ, theo thất bại và làm lại, và theo thời gian chạm thủ công mà nó loại bỏ. Ghi lại mọi hành động tự động để nó có thể được kiểm toán và hoàn tác. Điều cần lưu ý là các con số độ phủ thưởng cho việc tự động hóa các tác vụ dễ, nên hãy theo dõi cả các tác vụ khó.

### Phân tích

Hãy cho thấy thành công, rơi xuống và liên hệ lại trên một trang theo loại yêu cầu, kèm số đếm. Quyết định được cung cấp thông tin là tự động hóa cái gì tiếp theo. Điều cần lưu ý là chuyển hướng là một ước lượng, nên hãy gắn nhãn nó như vậy và xác minh bằng một mẫu người dùng.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Những người sáng lập thường có thể sửa một con đường tự phục vụ tồi bằng cách nói chuyện với người dùng. Hãy đo thành công bằng một câu hỏi thoát và vài lần đọc các phiên thật, và tự động hóa hai hoặc ba tác vụ gián đoạn nhiều người nhất. Tránh xây một bot trước khi các câu trả lời bằng văn bản tốt.

**Doanh nghiệp nhỏ.** Một người có thể điều hành CNTT cho mọi người, nên tự phục vụ chủ yếu nghĩa là các hướng dẫn ngắn tốt và một biểu mẫu yêu cầu chung. Tự động hóa việc thiết lập tài khoản và đặt lại mật khẩu sinh lời nhanh, miễn là có ai sở hữu mỗi luồng. Giữ lộ trình có nhân viên rõ ràng, vì nhân viên của chính chủ doanh nghiệp nếu không sẽ đi vòng qua hệ thống.

**Doanh nghiệp lớn.** Quy mô làm cả lợi ích lẫn việc lợi dụng lớn hơn. Hãy chuẩn hóa định nghĩa giữa các đơn vị kinh doanh, giữ một danh sách ứng viên trung tâm và một sổ đăng ký tự động hóa, và báo cáo theo dịch vụ và mục danh mục. Hãy đề phòng việc so sánh các đơn vị phục vụ những quần thể người dùng rất khác nhau.

**Chính phủ và khu vực công.** Khả năng tiếp cận, tiếp cận ngôn ngữ và nghĩa vụ phục vụ những người không dùng được kênh số là đầu vào thiết kế, không phải phần thêm. Hãy giữ các lộ trình có hỗ trợ sẵn có và được đo, ghi tài liệu các quyết định tự động ảnh hưởng đến con người, và chờ các câu hỏi kiểm toán về ai sở hữu mỗi luồng tự động (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Các động lực là ít liên hệ lặp lại hơn, kết quả nhanh hơn cho người dùng, thực thi các tác vụ thường lệ đều đặn hơn, và nhiều năng lực hơn cho công việc cải tiến. Phía chi phí gồm xây dựng và bảo trì cổng và nội dung, công việc tích hợp và dữ liệu để ghép phiên với phiếu, nền tảng tự động hóa, và thời gian để viết, kiểm thử và sở hữu mỗi luồng tự động. Các mẫu thời gian của nhân viên và một khảo sát thoát ngắn tốn ít, và chúng cung cấp phần lớn bằng chứng bạn cần.

Lợi tức nên được lập luận từ dữ liệu của chính bạn. Hãy dùng thời gian chạm thủ công và khối lượng để ước lượng công sức mà một tự động hóa loại bỏ, trừ chi phí bảo trì và chi phí thất bại, và báo cáo kết quả dưới dạng một khoảng kèm các giả định. Với tự phục vụ, hãy dùng tỷ lệ rơi xuống và các kết quả được lấy mẫu để cho thấy tỷ lệ liên hệ tránh được vì người dùng được giúp, không chỉ bị quay đi. Đừng nhập các tỷ lệ phần trăm chuyển hướng hay tiết kiệm từ nhà cung cấp hay khảo sát; hãy đo đường cơ sở của riêng bạn trước. Tổng chi phí sở hữu của một tự động hóa gồm những thay đổi nó sẽ cần khi các hệ thống quanh nó tiến hóa, nên hãy lập ngân sách cho chúng.

## Phản mẫu và cạm bẫy

- **Đếm các phiên không có phiếu là thành công.** Nó không phân biệt được sự giúp đỡ với bỏ cuộc. Hãy định nghĩa thành công theo kết quả và xác minh nó bằng rơi xuống và phản hồi thoát.
- **Mục tiêu trên chuyển hướng.** Chúng thưởng cho việc giấu lộ trình liên hệ. Hãy dùng chuyển hướng như một ước lượng và đặt mục tiêu trên kết quả của người dùng.
- **Giấu số điện thoại hoặc trò chuyện.** Người dùng không tiếp cận được một con người tăng công sức và mất lòng tin. Hãy giữ lộ trình có nhân viên hiển thị và đo mất bao lâu để tiếp cận nó.
- **Tự động hóa trước khi hiểu quy trình.** Luồng mã hóa sự nhầm lẫn ở tốc độ cao. Hãy ghi tài liệu và đơn giản hóa sổ tay vận hành trước, rồi tự động hóa phiên bản ổn định.
- **Tự động hóa không có người sở hữu.** Các luồng không có chủ thối rữa âm thầm và thất bại vào những lúc tồi. Hãy giao cho mỗi luồng một người sở hữu, một bài kiểm thử, một bộ giám sát và một quy tắc nghỉ hưu.
- **Bỏ qua chi phí của thất bại.** Một con số độ phủ cao với làm lại không được đo là một khoản nợ ẩn. Hãy báo cáo tỷ lệ thất bại và làm lại cùng độ phủ.
- **Đọc việc thời gian xử lý tăng là sa sút.** Sau một lần dịch sang trái thành công, công việc còn lại khó hơn. Hãy cho thấy phân phối theo cấp và cơ cấu danh mục cạnh các thước đo thời gian.
- **Xếp hạng nhân viên theo liên hệ bị chuyển hướng.** Nó sinh ra việc đẩy người dùng đi và làm hỏng dữ liệu. Chỉ báo cáo theo dịch vụ và luồng.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Thành công tự phục vụ và chuyển hướng | Lượt truy cập cổng và số đếm phiếu được báo cáo; không có định nghĩa kết quả | Thành công được định nghĩa cho một số lộ trình; chuyển hướng được trích dẫn không có phương pháp | Một định nghĩa thành công bằng văn bản; rơi xuống được đo; chuyển hướng được gắn nhãn là ước lượng | Thành công và rơi xuống được theo dõi xu hướng cùng phản hồi thoát; chuyển hướng được ước lượng bằng so sánh | Kết quả được chia sẻ với các đội sản phẩm và nhà cung cấp; các chủ đề rơi xuống thúc đẩy các bản sửa được tài trợ |
| Độ phủ và độ tin cậy tự động hóa | Tự động hóa ngẫu hứng; không có danh sách ứng viên | Một số luồng được các đội riêng lẻ tự động hóa; thất bại được xử lý không chính thức | Danh sách ứng viên, người sở hữu và thước đo thất bại được định nghĩa cho mọi luồng tự động | Độ phủ, tỷ lệ thất bại và công sức bảo trì được rà soát và tài trợ theo nhịp | Tự động hóa được phối hợp giữa các đội và nhà cung cấp; các luồng được cho nghỉ hưu và sửa một cách thường lệ |
| Hiệu ứng dịch sang trái và sử dụng | Khối lượng được báo cáo không có bối cảnh | Phân phối theo cấp được một vài đội theo dõi | Phân phối theo cấp và cơ cấu danh mục được báo cáo bên cạnh thời gian xử lý | Năng lực được giải phóng được lên kế hoạch và theo dõi; lãnh đạo đọc đúng hiệu ứng cơ cấu | Năng lực và việc học chảy ngược vào dịch vụ và thiết kế danh mục xuyên suốt tổ chức |

## Danh sách kiểm tra

- [ ] Thành công tự phục vụ được định nghĩa theo kết quả, với điểm bắt đầu, dừng và các trường hợp loại trừ bằng văn bản.
- [ ] Tỷ lệ rơi xuống được đo cho các lộ trình tự phục vụ hàng đầu.
- [ ] Bất kỳ số liệu chuyển hướng nào cũng nêu phương pháp của nó và được gắn nhãn là ước lượng.
- [ ] Không đặt mục tiêu nào cho chuyển hướng.
- [ ] Một lời nhắc thoát một câu hỏi hoặc phản hồi tương đương tồn tại cho các lộ trình chính.
- [ ] Một danh sách ứng viên tự động hóa bằng văn bản tồn tại và được rà soát mỗi quý.
- [ ] Mỗi luồng tự động có một người sở hữu, một bộ giám sát và một thước đo thất bại và làm lại.
- [ ] Thời gian chạm thủ công được lấy mẫu cho các loại yêu cầu hàng đầu.
- [ ] Phân phối theo cấp được cho thấy bên cạnh thời gian xử lý và giải quyết ngay lần liên hệ đầu.
- [ ] Lộ trình có nhân viên hiển thị và thời gian tiếp cận nó được kiểm tra.
- [ ] Các chủ đề rơi xuống hàng đầu được rà soát hằng tháng và chuyển cho người sở hữu.
- [ ] Không chỉ số nào trong chủ đề này được báo cáo hay đặt mục tiêu theo từng nhân viên.

## Lời nhắc AI

**Kiểm tra cách chúng ta ước lượng chuyển hướng.**

```text
We run [type of service] for [number] active users. We report deflection as
[describe current calculation], using data from [tools]. Changes in the period:
[releases, campaigns, outages, staffing changes]. Review the method and explain
where it may overstate or understate the effect. Suggest a better comparison,
such as a holdout or contacts per 1,000 active users, using only the data I
describe. Do not invent benchmark values or targets. List your assumptions and
the data you would need to firm up the estimate.
```

**Phân tích các chủ đề rơi xuống từ một mẫu.**

```text
Below are [number] staffed contacts from [service] that followed a self-service
attempt on the same topic, with fields [list fields] and the user's description.
Group them by likely cause (content gap, confusing form, defect, missing
access, user preference) and report patterns, not individuals. Suggest which
cause groups to hand to knowledge owners, product teams, or problem management.
Do not guess beyond the text provided. List your assumptions and what you could
not judge.

[paste contacts with personal data removed]
```

**Xếp hạng các ứng viên tự động hóa.**

```text
Here is a list of request and incident types for [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Propose a ranking
for automation candidates and explain the reasoning for each, including the
upkeep burden and the failure impact. Flag items that should stay manual.
Use only the numbers I provided and do not invent savings figures. List your
assumptions and the questions I should answer before committing.
```

**Thiết kế các rào chắn cho một luồng tự động.**

```text
We are automating [flow name] for [service]. Current manual process: [steps].
Tooling: [automation platform]. Propose the metrics to track (coverage, failure
and rework, time to detect a failed run, upkeep effort), a way each could be
gamed, and a guardrail for each. Include a safe manual fallback and a
retirement criterion. Do not invent thresholds or benchmarks. List your
assumptions and anything you need to know about our environment.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề liên quan và rào chắn cho một chỉ số tự phục vụ hoặc tự động hóa bạn định giới thiệu.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ mọi chỉ số được ghép với một vectơ lợi dụng và một rào chắn.

## Điểm chính cần nhớ

- Thành công tự phục vụ là một kết quả của người dùng, nên hãy định nghĩa nó từ phía người dùng và xác minh nó bằng rơi xuống và phản hồi thoát.
- Chuyển hướng là một ước lượng, nên hãy nêu phương pháp và giữ nó ra khỏi các mục tiêu.
- Độ phủ tự động hóa ít có nghĩa nếu không có độ tin cậy, chi phí bảo trì và một danh sách ứng viên đã rà soát.
- Dịch sang trái làm tăng độ khó của công việc còn lại, nên hãy đọc thời gian xử lý cùng phân phối theo cấp và cơ cấu danh mục.
- Đo các luồng, dịch vụ và mục danh mục, không bao giờ nhân viên, và giữ lộ trình có nhân viên hiển thị.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
