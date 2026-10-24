# Chỉ số tự động hóa và điều phối

**Tự động hóa chỉ đáng giá khi nó gỡ bỏ công việc mà con người không muốn làm mà không tạo ra công việc mới, thất bại mới hay rủi ro mới, nên hãy đo mỗi tự động hóa gỡ bỏ được gì, thất bại thường xuyên đến đâu, có thể hoàn tác nhanh thế nào, và ai quyết định khi nào nó nên dừng.**

## Tổng quan và động lực

[Tự động hóa](https://en.wikipedia.org/wiki/Automation) trong quản lý dịch vụ nghĩa là để phần mềm làm công việc mà trước đây một người làm: cấp một tài khoản, khởi động lại một dịch vụ, định tuyến một phiếu, phê duyệt một thay đổi chuẩn, hoặc đăng một cập nhật trạng thái. [Điều phối](https://en.wikipedia.org/wiki/Orchestration_(computing)) phối hợp nhiều bước tự động, thường qua nhiều công cụ và đội, thành một luồng như "tiếp nhận một nhân viên mới" hay "khôi phục dịch vụ này". Nguyên tắc chỉ đạo "tối ưu hóa và tự động hóa" của ITIL là một phát biểu lâu đời của ý tưởng này, và phân phối liên tục phụ thuộc vào nó. Các thực hành như [hạ tầng dưới dạng mã](https://en.wikipedia.org/wiki/Infrastructure_as_code) biến việc thiết lập hệ thống thành các tệp có phiên bản, kiểm thử được, nên tự động hóa cũng là một dạng bản ghi.

Tự động hóa chuyển rủi ro từ chậm và hiển thị sang nhanh và rộng. Một người mắc lỗi ảnh hưởng đến một phiếu. Một bước tự động có cùng lỗi có thể ảnh hưởng đến mọi phiếu trong một phút. Đó là lý do tự động hóa cần các thước đo riêng, và vì sao các số đếm như "số tự động hóa" hay "số giờ tiết kiệm" là yếu. Chúng mô tả bao nhiêu đã được xây và bao nhiêu đã được tuyên bố, không phải liệu có ai tốt hơn không.

Chủ đề này khác với các thước đo trước về tự phục vụ và tự động hóa trong yêu cầu dịch vụ (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa), vốn nói về luồng yêu cầu hướng tới người dùng. Ở đây chủ thể là tự động hóa như một tài sản kỹ thuật và vận hành: độ phủ, độ tin cậy, an toàn, quyền sở hữu và chi phí của nó. Nó cũng khác với các thước đo đường ống của chủ đề 10.7 (xem chủ đề 10.7, Chỉ số đường ống và thay đổi tự động), bao quát con đường một thay đổi đi tới sản xuất.

Các thuật ngữ dùng ở đây. Một **tự động hóa** là một nhiệm vụ đã định nghĩa chạy mà không cần người thực hiện các bước của nó. Một **sổ tay vận hành** là quy trình được ghi tài liệu cho một nhiệm vụ vận hành, và **tự động hóa sổ tay vận hành** thực thi nó. Một **điều phối** là một luồng phối hợp các tự động hóa. **Con người trong vòng lặp** nghĩa là một người rà soát hoặc phê duyệt trước khi một hành động có hiệu lực. **Toil** là công việc vận hành thủ công lặp lại tăng theo dịch vụ và không có giá trị lâu dài (xem chủ đề 5.7, Chỉ số toil và trực). Một **rào chắn** ở đây có hai nghĩa: thước đo đi kèm được dùng xuyên suốt cuốn sách này, và một giới hạn kỹ thuật về điều một tự động hóa được làm. Văn bản nói rõ nghĩa nào được dùng.

## Nguyên tắc chính

- **Đo tác động, không phải số đếm.** Số tự động hóa nói ít. Điều chúng gỡ bỏ và điều chúng làm hỏng nói rất nhiều.
- **Mọi tự động hóa đều có người sở hữu.** Một tự động hóa không có chủ là một rủi ro lớn lên theo tuổi.
- **Làm mọi hành động tự động hiển thị và có thể đảo ngược.** Ghi cái gì đã chạy, trên cái gì, với kết quả nào, và biết cách hoàn tác.
- **Chọn nơi con người quyết định.** Khớp vai trò của con người với rủi ro của hành động, và kiểm thử rằng vai trò đó có thể thực hiện được.
- **Đo tự động hóa như một dịch vụ.** Nó có độ tin cậy, thay đổi, chi phí và việc cho nghỉ hưu như bất kỳ dịch vụ nào.
- **Tự động hóa cái ổn định và nhàm chán trước.** Tự động hóa thứ hiểu chưa rõ là đóng đinh vấn đề vào hệ thống.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ chạy tự động hóa thành công | Tỷ lệ lần chạy tự động hóa đã hoàn tất và đạt kết quả dự định, được xác nhận bằng một kiểm tra sau khi chạy | số lần chạy có kiểm tra sau chạy thành công / số lần chạy bắt đầu trong kỳ; các lần chạy không có kiểm tra sau chạy bị loại và báo cáo riêng | phần trăm | Nhật ký nền tảng điều phối và tự động hóa | Quản lý yêu cầu dịch vụ; quản lý phát hành | Định nghĩa hoàn thành cho công việc tự động | Hằng tháng |
| Độ phủ tự động hóa nhiệm vụ | Tỷ lệ nhiệm vụ lặp lại đủ điều kiện được tự động hóa | số nhiệm vụ trong danh sách đủ điều kiện đã thống nhất chạy tự động / số nhiệm vụ trong danh sách đủ điều kiện; danh sách đủ điều kiện được rà soát mỗi quý | phần trăm | Kiểm kê nhiệm vụ và sổ đăng ký sổ tay vận hành | Cải tiến liên tục | Tồn đọng các ứng viên tự động hóa | Hằng quý |
| Tỷ lệ can thiệp thủ công | Tỷ lệ lần chạy tự động hóa cần một người bước vào hoặc sửa | số lần chạy có bước thủ công được thêm sau khi bắt đầu / số lần chạy bắt đầu | phần trăm | Nhật ký tự động hóa và liên kết phiếu | Quản lý sự cố | Lỗi lọt ra ngoài trong công việc tự động | Hằng tháng |
| Tỷ lệ sự cố do tự động hóa | Sự cố quy cho một hành động tự động, trên 1.000 lần chạy | số sự cố có nguyên nhân tự động hóa đã xác nhận / số lần chạy tự động hóa x 1.000 | số đếm trên 1.000 lần chạy | Bản ghi sự cố liên kết với định danh lần chạy | Quản lý sự cố; quản lý vấn đề | Tỷ lệ thay đổi thất bại cho thay đổi tự động | Hằng tháng |
| Thời gian hoàn tác | Thời gian để hoàn tác một hành động tự động khi nhu cầu đã được nhận ra | trung vị và bách phân vị thứ 95 của (thời điểm việc hoàn tác xong trừ thời điểm quyết định hoàn tác được đưa ra) | phút | Nhật ký tự động hóa và dòng thời gian sự cố | Hỗ trợ thay đổi | Khả năng hoàn tác trong định nghĩa hoàn thành | Hằng quý |
| Thời gian tiết kiệm đã xác minh | Số giờ công việc thủ công được gỡ bỏ, được kiểm tra bằng lấy mẫu | số nhiệm vụ được tự động hóa x (thời gian nhiệm vụ thủ công trung vị từ một mẫu thời gian trừ thời gian thủ công còn lại trung vị) trong kỳ; ngày lấy mẫu được nêu | giờ | Mẫu thời gian và số lần chạy | Cải tiến liên tục | Giá trị được giao trên mỗi hạng mục công việc | Hằng quý |
| Độ hiện hành của quyền sở hữu tự động hóa | Tỷ lệ tự động hóa có người sở hữu đã xác nhận quyền sở hữu và rà soát tự động hóa trong 12 tháng qua | số tự động hóa có người sở hữu được xác nhận và rà soát trong 12 tháng / số tự động hóa trong sổ đăng ký | phần trăm | Sổ đăng ký tự động hóa | Quản trị; quản lý tài sản và cấu hình | Điều lệ đội và quyền sở hữu | Hằng quý |

Các công thức đếm lần chạy, không phải nhiệm vụ, trừ khi nêu khác. "Thành công" đòi một kiểm tra sau chạy độc lập, như xác nhận dịch vụ khỏe hoặc tài khoản tồn tại; một lần chạy chỉ thoát mà không lỗi thì không được tính là thành công. Thời gian tiết kiệm loại trừ thời gian xây dựng và duy trì tự động hóa, được tính riêng như chi phí (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Khuyến nghị

### Quyết định tự động hóa cái gì

**1. Bắt đầu từ một danh sách nhiệm vụ lặp lại, không phải công cụ.** Hãy xếp hạng các nhiệm vụ lặp lại theo tần suất, thời gian, mức dễ lỗi và mức hiểu rõ. Tự động hóa những nhiệm vụ ổn định và hiểu rõ trước, và để lại những nhiệm vụ hiếm và hiểu chưa rõ cho con người.

**2. Sửa quy trình trước khi tự động hóa nó.** Tự động hóa một quy trình rối làm sự rối nhanh hơn. Hãy cùng những người làm đi qua các bước, bỏ những bước không thêm gì, rồi mới tự động hóa.

**3. Chọn vai trò của con người theo rủi ro.** Với các hành động rủi ro thấp, có thể đảo ngược, một người có thể chỉ rà soát nhật ký sau đó. Với các hành động rủi ro cao hơn, một người phê duyệt trước hành động. Với cao nhất, hành động có thể vẫn thủ công. Hãy viết quy tắc ra, và kiểm thử rằng người phê duyệt có thông tin để quyết định.

### Làm tự động hóa an toàn

**4. Yêu cầu một người sở hữu và một sổ đăng ký.** Mọi tự động hóa có một người sở hữu có tên và một mục trong sổ đăng ký với mục đích, phạm vi, quyền hạn và lần rà soát cuối. Khi một người sở hữu rời đi, quyền sở hữu chuyển đi trước khi người đó đi.

**5. Giới hạn quyền hạn và phạm vi.** Một tự động hóa nên có quyền truy cập tối thiểu đủ làm việc, và một giới hạn về lượng nó có thể thay đổi trong một lần chạy, như số tài khoản hay máy chủ tối đa. Một giới hạn phạm vi là một rào chắn kỹ thuật chặn mức thiệt hại của một lần chạy tồi.

**6. Kiểm tra kết quả, không phải mã thoát.** Hãy thêm một kiểm tra sau chạy xác nhận trạng thái dự định, và đo thành công bằng kiểm tra đó. Một đoạn script thoát sạch có thể đã không làm gì.

**7. Ghi nhật ký và lập kế hoạch hoàn tác.** Mỗi lần chạy ghi lại nó đã thay đổi gì, và mỗi tự động hóa có một cách đã kiểm thử để đảo ngược thay đổi của nó hoặc một lý do nêu rõ vì sao không thể. Hãy tập hoàn tác trong một môi trường an toàn và đo thời gian nó mất.

### Đo trung thực

**8. Xác minh thời gian tiết kiệm bằng lấy mẫu.** Các tuyên bố số giờ tiết kiệm thường lạc quan. Hãy bấm giờ một mẫu nhiệm vụ thủ công trước và sau, nêu ngày của mẫu, và trừ chi phí bảo trì và thất bại.

**9. Báo cáo thất bại và can thiệp bên cạnh độ phủ.** Một con số độ phủ cao kèm tỷ lệ can thiệp thủ công cao nghĩa là mọi người đang sửa điều tự động hóa làm hỏng. Hãy cho thấy cả hai trên một trang.

**10. Cho nghỉ hưu những gì không còn giúp ích.** Một tự động hóa mà nhiệm vụ đã thay đổi hoặc biến mất là một rủi ro. Hãy rà soát việc sử dụng ở nhịp đều đặn và gỡ các tự động hóa không có lần chạy hoặc không có người sở hữu.

**11. Giữ cho con người có thể dừng nó.** Hãy cung cấp một cách rõ ràng để tạm dừng một tự động hóa hoặc cả một loại tự động hóa nhanh chóng, và đo xem điều đó có thể xảy ra nhanh đến đâu.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ chạy tự động hóa thành công | Tính một lần chạy là thành công khi nó thoát sạch; xóa các lần chạy thất bại khỏi nhật ký | Kiểm tra sau chạy độc lập; so sánh nhật ký với bản ghi hạ nguồn |
| Độ phủ tự động hóa nhiệm vụ | Thu hẹp danh sách đủ điều kiện để độ phủ tăng; tự động hóa nhiệm vụ tầm thường trước | Rà soát danh sách đủ điều kiện cùng một đội thứ hai; gán trọng số theo khối lượng và thời gian |
| Tỷ lệ can thiệp thủ công | Ghi các sửa chữa thủ công thành phiếu riêng để lần chạy trông sạch | Liên kết phiếu với định danh lần chạy; lấy mẫu các lần chạy để tìm sửa chữa ẩn |
| Tỷ lệ sự cố do tự động hóa | Quy thất bại của tự động hóa cho con người hoặc công cụ; không liên kết sự cố với lần chạy | Yêu cầu định danh lần chạy trong bản ghi sự cố; lấy mẫu sự cố để tìm liên kết bị bỏ sót |
| Thời gian hoàn tác | Chỉ đo các lần hoàn tác dễ; bắt đầu đồng hồ muộn | Tập hoàn tác trong một buổi diễn tập cho các tự động hóa khó nhất; định nghĩa điểm bắt đầu của đồng hồ |
| Thời gian tiết kiệm đã xác minh | Dùng thời gian nhiệm vụ lạc quan; bỏ qua chi phí bảo trì và thất bại | Mẫu thời gian do người ngoài đội thực hiện; gồm chi phí xây dựng và bảo trì |
| Độ hiện hành của quyền sở hữu tự động hóa | Nêu một danh sách phân phối hoặc một nhân viên cũ làm người sở hữu | Người sở hữu xác nhận bằng văn bản; kiểm tra người sở hữu còn hoạt động |

Một kết quả đọc lành mạnh là độ phủ tăng kèm tỷ lệ can thiệp thủ công và tỷ lệ sự cố ổn định hoặc giảm, thời gian tiết kiệm đã xác minh khớp với điều đội cảm thấy, và một sổ đăng ký vẫn hiện hành vì các tự động hóa đã nghỉ hưu được gỡ bỏ.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Tự động hóa rộng và sớm | Gỡ toil; công việc nhanh hơn và nhất quán hơn | Thất bại nhanh, rộng; gánh nặng bảo trì; phụ thuộc ẩn |
| Tự động hóa có chọn lọc kèm kiểm tra của con người | Rủi ro thấp hơn; con người giữ kỹ năng | Chậm hơn; người phê duyệt có thể đóng dấu cho có |
| Đếm tự động hóa và số giờ tiết kiệm | Đơn giản để báo cáo và so sánh | Thưởng cho số lượng; tuyên bố thường không được xác minh |
| Đo tác động, thất bại và hoàn tác | Cho thấy giá trị và rủi ro thật | Tốn công thu thập hơn; đòi liên kết bản ghi |

Kết luận dạng văn xuôi là tự động hóa cái ổn định và được hiểu, đo điều nó gỡ bỏ và điều nó làm hỏng, và giữ cho con người có thể dừng nó. Một tự động hóa tiết kiệm giờ nhưng thỉnh thoảng gây một sự cố nghiêm trọng có thể là một vụ đổi chác tồi, và chỉ các thước đo ghép đôi mới cho thấy điều đó.

## Câu hỏi để thảo luận với đội nhóm

**1. Hôm nay chúng ta chạy những tự động hóa nào, và ai sở hữu từng cái?**
Cùng lập danh sách, vì các đội thường tìm thấy những tự động hóa mà không ai nhớ đã xây. Hỏi mục đích, quyền hạn và ngày rà soát cuối. Hãy chờ đợi các script trên máy cá nhân và các tác vụ theo lịch có nhân viên cũ làm người sở hữu. Tiếp theo, thống nhất ai sở hữu từng cái trước cuối quý.

**2. Lần cuối một tự động hóa làm một vấn đề to hơn hay nhanh hơn một người sẽ làm là khi nào?**
Mời kể chuyện không đổ lỗi. Ví dụ điển hình là một tác vụ dọn dẹp xóa nhầm tài nguyên, hoặc một biện pháp khắc phục khởi động lại dịch vụ giữa một sự cố. Hỏi giới hạn nào sẽ chặn thiệt hại. Các câu trả lời trở thành giới hạn phạm vi và quy tắc phê duyệt.

**3. Với hành động tự động rủi ro nhất của chúng ta, ai quyết định, và họ có thể quyết định tốt không?**
Nhìn vào điều người phê duyệt thấy tại thời điểm phê duyệt. Thường yêu cầu phê duyệt thiếu thông tin cần để đánh giá. Hỏi người phê duyệt có thể nói không không và điều gì sẽ xảy ra nếu họ nói. Tiếp theo, cải thiện yêu cầu hoặc đổi vai trò.

**4. Làm sao chúng ta biết một tự động hóa đã âm thầm ngừng hoạt động?**
Thất bại âm thầm là vấn đề phổ biến nhất, và nó thường hiện ra dưới dạng các con số phẳng. Hỏi phép kiểm tra nào sẽ nhận ra. Thảo luận cảnh báo về các lần chạy bị thiếu và về kết quả không khớp kỳ vọng. Chọn một tự động hóa và kiểm thử.

**5. Số giờ tiết kiệm nào chúng ta thực sự đã dùng vào việc tốt hơn?**
Thời gian tiết kiệm trên giấy có thể không trở thành năng lực. Hỏi thời gian đã đi đâu và ai quyết định. Hãy trung thực về chi phí bảo trì và thất bại. Tiếp theo, chọn một tuyên bố để xác minh bằng một mẫu.

**6. Chúng ta nên cho tự động hóa nào nghỉ hưu, và cần gì để làm vậy?**
Hỏi bằng chứng về việc sử dụng và giá trị. Việc cho nghỉ hưu có thể cảm thấy như thất bại, nên hãy định khung nó là bảo trì thường lệ. Xác định các phụ thuộc trước khi gỡ bất cứ thứ gì. Thống nhất một kỳ thử và một cách khôi phục.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Hãy xây tự động hóa như một phần của sản phẩm, với kiểm thử, nhật ký, một người sở hữu và cách hoàn tác. Đưa kiểm tra sau chạy vào định nghĩa hoàn thành, và tránh tự động hóa những bước mà đội chưa hiểu. Giữ các chỉ số ở cấp các tự động hóa của đội, không phải của từng kỹ sư.

### Đội dịch vụ và vận hành

Bạn mang máy nhắn tin khi tự động hóa thất bại, nên hãy khăng khăng đòi khả năng nhìn thấy và một cách dừng dễ. Theo dõi các can thiệp thủ công và sự cố do tự động hóa gây ra, và dùng chúng để ưu tiên các bản sửa. Coi sổ đăng ký tự động hóa là một phần của hồ sơ dịch vụ.

### Lãnh đạo và quản trị

Hãy hỏi về tác động, thất bại và mức sẵn sàng hoàn tác, không chỉ số tự động hóa. Tài trợ bảo trì tự động hóa cũng như việc tạo ra nó, và kỳ vọng một số tự động hóa sẽ được cho nghỉ hưu. Đặt kỳ vọng về sự giám sát của con người theo rủi ro và rà soát danh sách các hành động rủi ro nhất.

### Khách hàng và người dùng

Bạn không nên nhận ra tự động hóa khi nó hoạt động, và bạn nên có một con người để tìm đến khi nó không. Hãy hỏi cách tiếp cận một con người, và nói khi một hành động tự động là sai. Phản hồi của bạn là một phần của phép kiểm tra rằng tự động hóa đã giúp ích.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Đội vận hành của một nhà bán lẻ trực tuyến cỡ vừa tự động hóa ba nhiệm vụ: khởi động lại một máy chủ web đang hỏng, đặt lại mật khẩu cho bộ phận chăm sóc khách hàng, và dọn dẹp lưu trữ đám mây không dùng. Các con số trong ví dụ này chỉ mang tính minh họa. Sau một quý, bảng điều khiển cho thấy 3 tự động hóa, 2.400 lần chạy, và "khoảng 180 giờ tiết kiệm". Lãnh đạo hài lòng và yêu cầu thêm.

Đội áp dụng các thước đo. Tỷ lệ chạy tự động hóa thành công trông như 98 phần trăm theo mã thoát. Với kiểm tra sau chạy, nó giảm xuống 91 phần trăm: việc đặt lại mật khẩu báo thành công nhưng, trong 9 phần trăm số lần chạy, người dùng không đăng nhập được. Tỷ lệ can thiệp thủ công của tự động hóa đó là 11 phần trăm. Tự động hóa khởi động lại đã gây hai sự cố, một lần khi nó khởi động lại các máy chủ giữa một lần chuyển đổi dự phòng cơ sở dữ liệu, với thời gian hoàn tác khoảng 40 phút vì không ai đã tập nó.

Mẫu thời gian cho thấy việc đặt lại mật khẩu thủ công mất khoảng bốn phút, không phải mười phút như ước lượng ban đầu, và việc xử lý các lần đặt lại thất bại mất gần bằng nhiệm vụ gốc. Thời gian tiết kiệm đã xác minh gần 60 giờ hơn. Tác vụ dọn dẹp lưu trữ có một người sở hữu đã rời công ty hồi mùa xuân.

Đội quyết định thêm một kiểm tra sau chạy cho việc đặt lại mật khẩu, một giới hạn phạm vi và quy tắc tạm dừng cho tự động hóa khởi động lại, và một người sở hữu mới cho tác vụ dọn dẹp. Một quản lý đề xuất đếm "số tự động hóa đã xây" làm mục tiêu của đội. Đội từ chối, vì nó sẽ thưởng cho việc xây thêm cùng loại. Khó khăn còn lại là kiểm tra sau chạy cho mật khẩu cần một tài khoản kiểm thử, và buổi diễn tập hoàn tác cho tự động hóa khởi động lại được lên lịch vào quý sau.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy coi tự động hóa là một sản phẩm được cải thiện liên tục cùng những người dùng và phụ thuộc vào nó. Một thực hành tốt là một buổi rà soát ngắn, đều đặn về tồn đọng tự động hóa, thất bại và can thiệp với các bên liên quan. Điều cần lưu ý là các thay đổi nhỏ thường xuyên với tự động hóa cần cùng kiểm thử như thay đổi khác, nếu không các thất bại đến nhanh hơn.

### AI

AI có thể soạn sổ tay vận hành, viết script và quyết định hành động nào cần làm, và AI tác tử có thể hành động trên hệ thống. Hãy coi bất kỳ AI nào có thể hành động như một tự động hóa có người sở hữu, quyền hạn, giới hạn phạm vi, quy tắc phê duyệt và hoàn tác. Ghép tỷ lệ thành công của nó với tỷ lệ hành động sai và tỷ lệ mà một người phải đảo ngược (xem chủ đề 10.3, Chỉ số tác tử AI và chatbot). Điều cần lưu ý là một script do AI viết trông có thẩm quyền, nên hãy kiểm thử nó như bất kỳ mã nào.

### Tự động hóa

Đây là chủ thể của chủ đề, nên thực hành là đo chính nền tảng tự động hóa: tính sẵn sàng, các lần chạy thất bại và thời gian chờ hàng đợi của nó, vì nhiều dịch vụ phụ thuộc vào nó. Hãy thu thập dữ liệu chạy tự động với định danh lần chạy liên kết với phiếu và sự cố. Điều cần lưu ý là nền tảng tự động hóa trở thành điểm hỏng duy nhất, nên hãy có một phương án dự phòng thủ công cho các nhiệm vụ trọng yếu.

### Phân tích

Hãy liên kết các lần chạy với kết quả: kiểm tra sau chạy thành công, phiếu và sự cố. Quyết định được cung cấp thông tin là sửa, mở rộng hay cho nghỉ hưu tự động hóa nào. Điều cần lưu ý là việc quy kết phụ thuộc vào định danh nhất quán, nên hãy kiểm toán tỷ lệ liên kết, và cho thấy số lần chạy đằng sau mỗi tỷ lệ (xem chủ đề 10.8, Chỉ số phân tích và chất lượng dữ liệu).

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Các đội nhỏ tự động hóa nhanh và ít kiểm soát. Hãy giữ một danh sách ngắn các tự động hóa kèm người sở hữu, đặt kiểm tra sau chạy cho bất cứ thứ gì chạm vào khách hàng, và tránh xây một nền tảng điều phối trước khi có nhu cầu.

**Doanh nghiệp nhỏ.** Tự động hóa thường nghĩa là vài tác vụ theo lịch và một dịch vụ được quản lý. Hãy hỏi nhà cung cấp tự động hóa nào chạy thay mặt bạn và hoàn tác là gì. Giữ một danh sách, và kiểm tra có người sở hữu từng mục.

**Doanh nghiệp lớn.** Nhiều tự động hóa qua nhiều đội tạo ra phụ thuộc và trùng lặp. Hãy giữ một sổ đăng ký trung tâm, ghi nhật ký chuẩn và định danh lần chạy, và một đường rà soát cho các hành động rủi ro cao. Chia sẻ tự động hóa giữa các đội thay vì xây lại.

**Chính phủ và khu vực công.** Nhu cầu trách nhiệm giải trình và kiểm toán nghĩa là mọi hành động tự động phải truy vết được tới một quyết định và một người sở hữu. Hãy giữ nhật ký và phê duyệt làm bằng chứng, và kiểm tra quy tắc mua sắm và pháp lý cho các quyết định tự động ảnh hưởng đến công dân (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là xây dựng và kiểm thử tự động hóa, vận hành nền tảng, duy trì tự động hóa khi hệ thống thay đổi, và chi phí của thất bại. Thu thập các thước đo tốn ít nếu các lần chạy được ghi nhật ký kèm định danh. Chi phí lớn hơn là kỷ luật của người sở hữu, rà soát và diễn tập hoàn tác.

Lợi tức là gỡ toil, công việc nhanh hơn và nhất quán hơn, và ít lỗi thủ công hơn. Những điều này là thật nhưng dễ bị phóng đại, nên hãy xác minh bằng mẫu. Phía rủi ro là sự cố do tự động hóa gây ra, và chi phí của một tự động hóa không ai bảo trì. Một hồ sơ kinh doanh công bằng so sánh thời gian tiết kiệm đã xác minh, cộng lỗi tránh được, với chi phí đầy đủ gồm bảo trì và sự cố, và nêu các giả định dưới dạng khoảng (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh). Không có con số chuẩn nào được đưa ra ở đây, vì chúng thay đổi nhiều theo bối cảnh. Hãy đo đường cơ sở của chính bạn trước khi bắt đầu.

## Phản mẫu và cạm bẫy

- **Đếm số tự động hóa đã xây.** Nó thưởng cho số lượng. Hãy báo cáo tác động, thất bại và hoàn tác thay vào đó.
- **Thành công theo mã thoát.** Một lần thoát sạch chứng minh ít. Hãy kiểm tra kết quả dự định.
- **Tự động hóa không có chủ.** Chúng thất bại âm thầm khi hệ thống thay đổi. Hãy giữ một sổ đăng ký và xác nhận người sở hữu.
- **Tự động hóa một quy trình tồi.** Lỗi di chuyển nhanh hơn. Hãy sửa quy trình trước.
- **Không có hoàn tác.** Một hành động sai nhanh mà không có đảo ngược là trường hợp tệ nhất. Hãy lập kế hoạch và tập hoàn tác.
- **Tuyên bố số giờ tiết kiệm mà không có mẫu.** Hãy xác minh bằng mẫu thời gian, và trừ bảo trì.
- **Phê duyệt như sân khấu.** Một người phê duyệt không có thông tin để quyết định thêm trì hoãn mà không thêm an toàn. Hãy thiết kế lại yêu cầu.
- **Tự động hóa như điểm hỏng duy nhất.** Hãy giữ một đường thủ công cho các nhiệm vụ trọng yếu.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Quyền sở hữu và sổ đăng ký | Script chỉ tác giả của chúng biết | Các tự động hóa chính được liệt kê | Sổ đăng ký kèm người sở hữu, phạm vi và ngày rà soát | Rà soát và cho nghỉ hưu theo nhịp | Danh mục chung và mẫu chuẩn qua các đội |
| An toàn và hoàn tác | Không hoàn tác; kiểm tra bằng mã thoát | Một số kiểm tra sau chạy và nhật ký | Kiểm tra sau chạy, giới hạn phạm vi và hoàn tác đã kiểm thử | Diễn tập hoàn tác; sự cố liên kết với lần chạy | Mẫu an toàn được xây vào nền tảng |
| Bằng chứng giá trị | Số đếm và ước lượng | Thời gian tiết kiệm được ước lượng | Thời gian tiết kiệm được lấy mẫu và xác minh | Tác động, thất bại và chi phí được rà soát cùng nhau | Danh mục tự động hóa được quản lý theo giá trị và rủi ro |

## Danh sách kiểm tra

- [ ] Mọi tự động hóa có một người sở hữu đã xác nhận quyền sở hữu.
- [ ] Một sổ đăng ký liệt kê từng tự động hóa với mục đích, phạm vi và quyền hạn.
- [ ] Mỗi tự động hóa có một kiểm tra sau chạy xác nhận kết quả dự định.
- [ ] Các lần chạy được ghi nhật ký với định danh liên kết với phiếu và sự cố.
- [ ] Mỗi tự động hóa có một giới hạn phạm vi và một cách đã kiểm thử để hoàn tác hoặc tạm dừng nó.
- [ ] Vai trò của con người được định nghĩa cho từng hành động tự động theo rủi ro.
- [ ] Thời gian tiết kiệm được xác minh bằng một mẫu có ngày.
- [ ] Can thiệp thủ công và sự cố do tự động hóa được báo cáo cùng độ phủ.
- [ ] Tự động hóa không dùng hoặc không có chủ được rà soát và cho nghỉ hưu.
- [ ] Mỗi chỉ số có một vectơ lợi dụng và một rào chắn được hiển thị bên cạnh.

## Lời nhắc AI

**Xây một sổ đăng ký tự động hóa từ tài liệu bạn dán vào.**

```text
I will paste a list of scripts, scheduled jobs, and automations we run: [paste
list with any notes]. Build a table with columns: name, purpose, system affected,
owner (use only what I provided; write "unknown" otherwise), permissions (only if
given), last review (only if given), and the first question I should ask about it.
Do not invent owners, dates, or permissions. List your assumptions at the end.
```

**Thiết kế một kiểm tra sau chạy và hoàn tác cho một tự động hóa.**

```text
Our automation is [name], which does [description] on [systems]. It runs [how
often] with [permissions]. Propose a post-run check that confirms the intended
result, a scope limit that caps damage, a way to pause it, and a rollback
approach. Say what information a human approver would need if we added an
approval step. Do not assume tools we have not named. List your assumptions and
the questions I should answer.
```

**Rà soát rủi ro bị lợi dụng của một bảng điều khiển tự động hóa.**

```text
We report these automation measures: [paste measures and definitions]. Our
context: [team size, tools, audience]. For each measure, list realistic ways it
could look better without helping anyone, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

**Lập kế hoạch xác minh thời gian tiết kiệm.**

```text
We claim [number] hours saved by automating [task]. Draft a short plan to verify
it by sampling: what to time, how many samples to take, how to include
maintenance and failure handling, and how to report uncertainty. Do not invent
figures; use placeholders for numbers I should collect. List assumptions.
```

## Kỹ năng AI

- [Runbook](../../../../skills/runbook/SKILL.md): dùng để ghi tài liệu một nhiệm vụ trước khi tự động hóa nó.
- [Root cause analysis](../../../../skills/root-cause-analysis/SKILL.md): dùng để phân tích một sự cố do hành động tự động gây ra.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề bao quát một chỉ số và rào chắn đi kèm của nó.

## Điểm chính cần nhớ

- Số tự động hóa và số giờ tiết kiệm mô tả công sức và tuyên bố, nên hãy đo tác động, thất bại và hoàn tác.
- Mọi tự động hóa cần một người sở hữu, một mục sổ đăng ký, một kiểm tra sau chạy, một giới hạn phạm vi, và một cách hoàn tác hoặc tạm dừng.
- Chọn nơi con người quyết định theo rủi ro, và kiểm thử rằng con người có thể quyết định tốt.
- Xác minh thời gian tiết kiệm bằng các mẫu có ngày, và trừ chi phí bảo trì và thất bại.
- Cho nghỉ hưu các tự động hóa không có chủ, không dùng, hoặc không còn cần.

## Tài liệu tham khảo và đọc thêm

1. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
2. Wikipedia, [Orchestration (computing)](https://en.wikipedia.org/wiki/Orchestration_(computing)).
3. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
4. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
5. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
6. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
7. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
