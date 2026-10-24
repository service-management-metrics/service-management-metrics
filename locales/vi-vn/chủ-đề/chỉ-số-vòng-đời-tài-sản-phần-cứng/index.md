# Chỉ số vòng đời tài sản phần cứng

**Thiết bị là công cụ hằng ngày của những người có động lực và đồng thời là dòng chi phí, rủi ro và lãng phí, nên hãy lập kế hoạch làm mới như một dòng chảy đều thay vì những cú giật định kỳ, đo tuổi và thất bại từ dữ liệu của chính bạn, và coi thanh lý an toàn và tái sử dụng là một phần của công việc.**

## Tổng quan và động lực

Đằng sau mọi dịch vụ là những vật thể: máy tính xách tay, điện thoại, máy chủ, thiết bị mạng, máy in, và cáp cùng giá đỡ giữ chúng lại với nhau. Phần cứng có một vòng đời mà phần mềm không có. Nó được mua, vận chuyển, tạo ảnh, phát ra, sửa, di chuyển, nghỉ hưu, xóa và tái chế, và mỗi bước có một chi phí và một rủi ro. Một máy tính xách tay hỏng trong cuộc gọi với khách hàng tốn hơn chính chiếc máy tính. Một máy chủ đã nghỉ hưu rời tòa nhà với dữ liệu trên đĩa tốn xa hơn giá bán lại của nó. Một ngăn kéo điện thoại không dùng là vốn đang không làm gì.

Mục đích linh hoạt xây các dự án quanh những cá nhân có động lực, với môi trường và sự hỗ trợ họ cần, áp dụng trực tiếp. Mọi người không thể làm việc tốt nhất trên một thiết bị chậm, hỏng, hoặc thiếu. Truyền thống ITIL đóng góp góc nhìn vòng đời và các bản ghi đi kèm, được bao quát trong chủ đề trước về quản lý tài sản CNTT (xem chủ đề 7.1, Chỉ số quản lý tài sản CNTT). Chủ đề này thêm các thước đo riêng cho thiết bị vật lý: nó cũ đến đâu, hỏng thường xuyên ra sao, được dùng tốt thế nào, và rời đi thế nào.

Việc lập kế hoạch phần cứng thường được làm theo chu kỳ lớn: thay mọi thứ vài năm một lần, trong một lần mua lớn, rồi sống với hậu quả. Một phương án đều hơn, theo tinh thần phân phối liên tục, là làm mới một phần của hệ thống liên tục. Điều đó làm mượt chi tiêu, dàn trải khối lượng công việc tạo ảnh và bàn giao, và cho phép bạn học từ mỗi lô trước khi mua lô kế. Nó cũng nghĩa là bạn cần dữ liệu về tuổi và thất bại để quyết định khi nào mỗi thiết bị nên đi.

Ba ý tưởng tổ chức các thước đo.

- **Tuổi và thất bại.** [Tỷ lệ hỏng](https://en.wikipedia.org/wiki/Failure_rate) của một quần thể thiết bị đổi theo vòng đời, và [thời gian trung bình giữa các lần hỏng](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) là một tóm tắt phổ biến cho các hạng mục sửa được. Giá trị trung bình giấu nhiều: một lô có linh kiện lỗi có thể hỏng sớm trong khi phần còn lại ổn. Hãy nhìn thất bại theo mẫu máy, lô và dải tuổi, và dùng lịch sử của chính bạn, không phải số liệu nhà sản xuất, để lập kế hoạch.
- **Mức sử dụng.** Một thiết bị không ai dùng là lãng phí, và một thiết bị quá tải là nguồn ma sát. Hãy đo liệu thiết bị có được dùng không và có khớp với công việc không.
- **Lối ra có trách nhiệm.** Thiết bị đã nghỉ hưu có thể chứa dữ liệu nhạy cảm, chứa vật liệu có giá trị và nguy hại, và góp thêm vào rác thải điện tử. [Rác thải điện tử](https://en.wikipedia.org/wiki/Electronic_waste) là một mối quan tâm môi trường đang lớn, và nhiều khu vực pháp lý quy định cách xử lý. [Xóa dữ liệu](https://en.wikipedia.org/wiki/Data_erasure) an toàn và tái sử dụng hoặc tái chế có chứng nhận là cuối của vòng đời, không phải một điều nghĩ sau. Cách tiếp cận [kinh tế tuần hoàn](https://en.wikipedia.org/wiki/Circular_economy) giữ sản phẩm và vật liệu được sử dụng càng lâu càng tốt.

Các chỉ số phần cứng chịu một sự méo mó quen thuộc. Một đội được thưởng vì tuổi thiết bị trung bình thấp có thể làm mới các thiết bị vẫn ổn. Một đội được thưởng vì chi tiêu thấp có thể kéo dài tuổi thọ đến khi thất bại làm gián đoạn mọi người. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng, nên mỗi thước đo được ghép với một kiểm tra rằng con người và hành tinh tốt hơn, không chỉ con số (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Lập kế hoạch một dòng chảy đều.** Làm mới một phần của hệ thống mỗi kỳ, và học từ mỗi lô.
- **Quyết định bằng bằng chứng.** Dùng dữ liệu thất bại, tuổi và sử dụng của chính bạn để chọn khi nào thay.
- **Nhìn vào phân phối.** Giá trị trung bình giấu cái đuôi cũ, hỏng và nhàn rỗi.
- **Đếm tổng chi phí.** Giá mua là một phần của chi phí một thiết bị qua vòng đời (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị).
- **Bảo vệ dữ liệu đến cuối cùng.** Một thiết bị chưa nghỉ hưu cho đến khi dữ liệu của nó đã mất và bằng chứng được ghi lại.
- **Ưu tiên tái sử dụng và sửa chữa.** Giữ thiết bị hoạt động chừng nào nó còn phục vụ mọi người tốt.
- **Coi thiết bị là một phần của môi trường làm việc.** Mọi người cần thiết bị chạy được.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hồ sơ tuổi | Phân phối tuổi thiết bị theo lớp, và tỷ lệ vượt quá tuổi thọ dự kiến | tuổi trung vị và tuổi bách phân vị thứ 85; tỷ lệ thiết bị cũ hơn tuổi thọ dự kiến của lớp | năm; phần trăm | Ngày mua và triển khai trong sổ đăng ký tài sản | Quản lý tài sản CNTT; quản lý năng lực và hiệu năng | Rà soát sức khỏe kỹ thuật | Hằng quý |
| Tỷ lệ làm mới đúng hạn | Tỷ lệ thiết bị đến hạn thay thế dự kiến được thay trong cửa sổ dự kiến | số thiết bị được thay trong cửa sổ / số thiết bị đến hạn thay thế dự kiến trong kỳ | phần trăm | Sổ đăng ký tài sản và kế hoạch làm mới | Quản lý tài sản CNTT; quản lý yêu cầu dịch vụ | Bảo trì có kế hoạch môi trường làm việc | Hằng quý |
| Tỷ lệ hỏng theo mẫu máy | Số lần hỏng trên 100 thiết bị mỗi năm, theo mẫu máy và dải tuổi | số lần hỏng phần cứng trong kỳ / số thiết bị trung bình đang dùng, quy ra năm, nhân 100 | lần hỏng mỗi 100 mỗi năm | Bản ghi sự cố và sửa chữa ghép với sổ đăng ký | Quản lý sự cố; quản lý tài sản CNTT | Lỗi trong môi trường làm việc | Hằng quý |
| Tỷ lệ thiết bị nhàn rỗi | Tỷ lệ thiết bị đã cấp không có hoạt động trong một kỳ đã đặt | số thiết bị không có đăng nhập hay hoạt động mạng trong 60 ngày / số thiết bị đã cấp | phần trăm | Nhật ký quản lý thiết bị đầu cuối, tổng hợp theo lớp | Quản lý tài sản CNTT; quản lý tài chính | Giảm lãng phí | Hằng tháng |
| Thời gian chờ thay thế | Thời gian thay một thiết bị hỏng hoặc mất bằng một thiết bị chạy được | trung vị và bách phân vị thứ 85 của số giờ hoặc ngày từ lúc báo đến lúc người dùng có thiết bị chạy được | ngày | Bản ghi sự cố và yêu cầu | Quản lý sự cố; quản lý yêu cầu dịch vụ | Thời gian gỡ chặn một thành viên đội | Hằng tháng |
| Hoàn tất thanh lý an toàn | Tỷ lệ thiết bị nghỉ hưu có bằng chứng ghi lại về xóa hoặc hủy dữ liệu | số thiết bị nghỉ hưu có bằng chứng xóa hoặc hủy / số thiết bị nghỉ hưu | phần trăm | Bản ghi thanh lý và chứng nhận xóa | Quản lý an toàn thông tin; quản lý tài sản CNTT | Định nghĩa hoàn thành khi cho thiết bị nghỉ hưu | Hằng tháng |
| Tỷ lệ tái sử dụng và tái chế | Tỷ lệ thiết bị nghỉ hưu được tái sử dụng, tân trang hoặc tái chế qua một kênh được duyệt | số thiết bị tái sử dụng, tân trang hoặc tái chế qua kênh được duyệt / số thiết bị nghỉ hưu | phần trăm | Bản ghi thanh lý và đối tác | Quản lý tài sản CNTT; quản lý nhà cung cấp | Mục tiêu bền vững trong lập kế hoạch | Hằng quý |

Hãy định nghĩa các lớp thiết bị (ví dụ máy tính xách tay tiêu chuẩn, máy trạm cho lập trình viên, điện thoại di động, máy chủ, bộ chuyển mạch mạng), mỗi lớp có tuổi thọ dự kiến riêng. Tỷ lệ hỏng chỉ đếm lỗi phần cứng, và loại lỗi phần mềm, hư hỏng do người dùng được mã hóa riêng, và mất mát. Đồng hồ cho thời gian chờ thay thế bắt đầu ở lúc báo và dừng khi người dùng xác nhận một thiết bị chạy được, không phải khi một cái được gửi đi. Tỷ lệ thiết bị nhàn rỗi loại các thiết bị cố ý dự phòng, được đếm là một lớp riêng.

## Khuyến nghị

### Lập kế hoạch dòng chảy

**1. Đặt tuổi thọ dự kiến cho mỗi lớp, và coi nó là một giả thuyết.** Hãy bắt đầu từ bảo hành của nhà cung cấp và kinh nghiệm của chính bạn, và sửa khi dữ liệu đến. Tuổi thọ dự kiến vài năm cho máy tính xách tay, dài hơn cho thiết bị mạng, và ngắn hơn cho thiết bị dùng nặng là điển hình, nhưng con số đúng cho hệ thống của bạn đến từ dữ liệu thất bại và sử dụng của chính bạn. Hãy ghi lý do vào sổ đăng ký.

**2. Làm mới liên tục theo lô nhỏ.** Thay một phần đều đặn thiết bị mỗi tháng hoặc quý, sắp theo tuổi, lịch sử hỏng và nhu cầu. Lô nhỏ làm mượt chi phí, dàn trải công việc tạo ảnh và bàn giao, và cho phép bạn thử một mẫu máy mới với vài người dùng trước khi cam kết. Một lần làm mới lớn vài năm một lần tập trung rủi ro và công sức.

**3. Giữ một bộ đệm khiêm tốn các thiết bị dự phòng.** Một nhóm nhỏ thiết bị sẵn sàng rút ngắn thời gian chờ thay thế cho các lần hỏng, mất mát và nhân viên mới. Định cỡ bộ đệm từ lịch sử hỏng và tuyển dụng của chính bạn, và rà soát hằng quý. Hãy đếm thiết bị dự phòng là một lớp riêng để chúng không làm méo mức sử dụng.

**4. Lập kế hoạch cùng tài chính, không phải đối mặt với họ.** Hãy thống nhất thiết bị được vốn hóa và khấu hao thế nào, và một lần làm mới đều hiện ra trong ngân sách ra sao. Các quy tắc [khấu hao](https://en.wikipedia.org/wiki/Depreciation) ảnh hưởng khi nào một lần thay thế rẻ nhất trên giấy, và chúng không nên thúc đẩy việc thay các thiết bị vẫn phục vụ mọi người tốt. Hãy giữ một cái nhìn chung về kế hoạch và các giả định của nó.

### Học từ dữ liệu của chính bạn

**5. Nghiên cứu thất bại theo mẫu máy, lô và tuổi.** Hãy ghép bản ghi sửa chữa và sự cố với sổ đăng ký và xem số lần hỏng trên 100 thiết bị mỗi năm theo mẫu máy và dải tuổi. Tìm các lô hỏng sớm, các mẫu máy hỏng theo một cách đặc biệt, và độ tuổi mà thất bại bắt đầu tăng. Dùng các phát hiện để chọn mẫu máy và canh thời điểm thay thế. Hãy thận trọng với mẫu nhỏ, và nói khi một mẫu máy có quá ít thiết bị để đánh giá (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**6. Dùng bảo hành và sửa chữa khôn ngoan.** Hãy biết [bảo hành](https://en.wikipedia.org/wiki/Warranty) bao quát gì và trong bao lâu, ghi lại các yêu cầu, và so sánh chi phí sửa với thay thế. Sửa chữa giữ thiết bị được dùng và ngoài dòng rác thải, và quyền sửa chữa linh kiện và thông tin là một chủ đề chính sách đang sôi nổi ở nhiều nơi. Hãy ưu tiên các mẫu máy có thể sửa và nâng cấp khi những thứ khác ngang nhau.

**7. Đo việc sử dụng để tìm cái nhàn rỗi và cái bị căng.** Hãy tổng hợp dữ liệu hoạt động theo lớp, và tìm các thiết bị không bao giờ được dùng và các thiết bị luôn bị dùng hết công suất. Thiết bị nhàn rỗi có thể được gán lại hoặc cho nghỉ hưu. Thiết bị bị căng là ma sát, và người dùng sẽ cảm nhận nó (xem chủ đề 6.4, Trải nghiệm người dùng và nhân viên). Hãy tôn trọng quyền riêng tư: báo cáo theo lớp và nhóm, không bao giờ theo người, và dùng dữ liệu tối thiểu.

**8. Theo dõi thời gian chờ thay thế như một dịch vụ.** Đo một người mất bao lâu để có thiết bị chạy được sau một lần hỏng hoặc mất, và gồm các bước: báo, phê duyệt, tồn kho, tạo ảnh, giao hàng và bàn giao. Bách phân vị thứ 85 cho bạn biết các trường hợp không may tệ đến đâu. Hãy sửa bước chậm nhất trước.

### Quản lý thiết bị tốt

**9. Quản lý thiết bị tập trung và nhất quán.** [Quản lý thiết bị di động](https://en.wikipedia.org/wiki/Mobile_device_management) và các công cụ tương tự cho phép bạn ghi danh, cấu hình, cập nhật và xóa thiết bị từ xa, giảm công việc thủ công và rủi ro. Hãy dùng chúng để giữ sổ đăng ký chính xác, để đẩy bản cập nhật có quan tâm đến sự tập trung của mọi người, và để hỗ trợ phản ứng với thiết bị bị mất.

**10. Biến thanh lý an toàn thành một quy trình xác định.** Hãy theo một tiêu chuẩn được công nhận để làm sạch phương tiện lưu trữ, như hướng dẫn do Viện Tiêu chuẩn và Công nghệ Quốc gia Hoa Kỳ công bố, hoặc tương đương ở khu vực pháp lý của bạn. Ghi lại phương pháp, ngày và bằng chứng cho mỗi thiết bị, và dùng các đối tác có chứng nhận để hủy và tái chế. Một bước thanh lý không có bằng chứng là một khoảng trống.

**11. Ưu tiên tái sử dụng, rồi tái chế.** Nơi thiết bị vẫn hoạt động, hãy triển khai lại nội bộ, tặng qua một đối tác được duyệt, hoặc bán lại sau khi xóa. Dùng các nhà tái chế có chứng nhận cho phần còn lại. Đo tỷ lệ thiết bị nghỉ hưu đi vào từng kênh và lý do của bất kỳ cái nào đi thẳng vào rác. Quy định về rác thải điện tử khác nhau theo khu vực pháp lý và được thực thi, nên hãy mời đồng nghiệp pháp lý và bền vững.

**12. Rà soát vòng đời cùng những người dùng nó.** Mỗi quý một lần, hãy đưa tài chính, an ninh, mua sắm, bàn dịch vụ và vài người dùng lại để xem tuổi, thất bại, thời gian chờ và thanh lý. Hỏi điều gì đang hiệu quả và điều gì làm mọi người phiền. Đây là sự cộng tác liên tục quanh môi trường làm việc, và nó giữ kế hoạch thực tế.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Hồ sơ tuổi | Thay các thiết bị khỏe để hạ giá trị trung bình; loại các thiết bị cũ bằng cách phân loại lại chúng là dự phòng | Tỷ lệ hỏng theo dải tuổi; tỷ lệ thiết bị nhàn rỗi; rà soát việc phân loại lại |
| Tỷ lệ làm mới đúng hạn | Nới cửa sổ dự kiến; hoãn các ngày dự kiến bằng cách sửa kế hoạch | Thay đổi kế hoạch được ghi nhật ký kèm lý do; so sánh với thất bại và phản hồi người dùng |
| Tỷ lệ hỏng theo mẫu máy | Mã hóa thất bại là hư hỏng do người dùng hoặc lỗi phần mềm; trì hoãn bản ghi sửa chữa | Lấy mẫu mã hóa thất bại; so sánh bản ghi sửa chữa với bản ghi sự cố |
| Tỷ lệ thiết bị nhàn rỗi | Tính hoạt động nền theo lịch là sử dụng; gán lại thiết bị nhàn rỗi cho người dùng ma | Dùng đăng nhập của con người làm tín hiệu hoạt động; kiểm tra ngẫu nhiên việc gán |
| Thời gian chờ thay thế | Dừng đồng hồ lúc gửi đi; đóng yêu cầu trước khi người dùng có thiết bị chạy được | Đồng hồ kết thúc ở xác nhận của người dùng; khảo sát các lần thay thế gần đây |
| Hoàn tất thanh lý an toàn | Ghi xóa mà không có bằng chứng; chứng nhận không khớp với số sê-ri | Khớp chứng nhận với số sê-ri; kiểm toán một mẫu cùng đối tác thanh lý |
| Tỷ lệ tái sử dụng và tái chế | Tính các thiết bị gửi cho một nhà môi giới với việc xử lý hạ nguồn không rõ là đã tái chế | Yêu cầu đối tác có chứng nhận và báo cáo hạ nguồn; kiểm toán mẫu |

Một kết quả đọc lành mạnh là một hồ sơ tuổi với cái đuôi cũ mỏng, tỷ lệ hỏng dẫn dắt việc mua, thời gian thay thế ngắn, bằng chứng thanh lý đầy đủ, và tỷ lệ thiết bị đi vào rác giảm.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Làm mới theo chu kỳ cố định | Ngân sách dự đoán được và quy tắc đơn giản | Thay các thiết bị vẫn ổn; tạo một đỉnh công việc lớn |
| Làm mới liên tục theo lô | Chi phí và khối lượng công việc mượt; học giữa các lô | Cần dữ liệu tốt và kỷ luật |
| Chạy đến khi hỏng | Chi phí mua thấp nhất | Làm gián đoạn con người; chi phí ngoài kế hoạch; rủi ro an ninh của hệ thống cũ |
| Tuổi thọ dự kiến ngắn | Mới hơn, nhanh hơn, được hỗ trợ tốt hơn | Chi phí cao hơn và nhiều rác hơn |
| Tuổi thọ dự kiến dài | Chi phí thấp hơn và ít rác hơn | Nhiều thất bại và rủi ro an ninh hơn ở cái đuôi |
| Sửa chữa và tái sử dụng nội bộ | Giữ thiết bị được dùng; ít rác hơn | Cần kỹ năng và linh kiện |
| Thanh lý thuê ngoài | Xử lý chuyên môn | Cần giám sát chuỗi hạ nguồn |

Câu trả lời dạng văn xuôi là làm mới liên tục theo lô nhỏ, dựa trên tuổi, thất bại và nhu cầu, sửa chữa và tái sử dụng nơi nó phục vụ mọi người, và giữ chuỗi thanh lý theo một tiêu chuẩn bạn chứng minh được bằng bằng chứng.

## Câu hỏi để thảo luận với đội nhóm

**1. Bức tranh về tuổi và thất bại của thiết bị chúng ta trông thế nào, và ai giữ những cái cũ nhất?**
Cho thấy phân phối tuổi và tỷ lệ hỏng theo dải. Xem ai giữ các thiết bị cũ nhất và liệu họ có phải những người cần thiết bị đáng tin nhất không. Người điều phối nên hỏi đội sẽ đổi gì về thứ tự làm mới dựa trên bức tranh.

**2. Một người mất bao lâu để có thiết bị chạy được sau khi thiết bị của họ hỏng?**
Lần theo ba lần thay thế gần nhất từ lúc báo đến thiết bị chạy được. Ghi lại các lần chờ. Hỏi bước nào có thể gỡ hoặc tự động hóa. Thống nhất một thay đổi và một cách đo hiệu quả.

**3. Mẫu máy nào gây cho chúng ta nhiều rắc rối nhất, và làm sao chúng ta biết?**
Liệt kê các mẫu máy có tỷ lệ hỏng hoặc phiếu cao nhất. Kiểm tra mẫu có đủ lớn để đánh giá không. Hỏi các phát hiện ảnh hưởng đến lần mua kế tiếp ra sao. Nếu không, quyết định cách đưa chúng trở lại cho mua sắm.

**4. Chúng ta sẽ làm gì nếu một thiết bị đã nghỉ hưu xuất hiện với dữ liệu trên đó?**
Đi qua đường thanh lý và bằng chứng giữ ở mỗi bước. Hỏi mắt xích yếu nhất ở đâu và ai xác minh đối tác hạ nguồn. Thống nhất một kiểm tra ngẫu nhiên bằng chứng thanh lý cho quý tới.

**5. Thiết bị của chúng ta nhàn rỗi ở đâu, và vì sao?**
Xem các thiết bị không dùng trong 60 ngày và các thiết bị dự phòng. Hỏi chúng nên được gán lại, cho nghỉ hưu, hay giữ. Cuộc trò chuyện cũng lộ ra sự không khớp giữa điều mọi người được cấp và điều họ cần.

**6. Cần gì để tái sử dụng hoặc sửa nhiều hơn những gì chúng ta cho nghỉ hưu?**
Liệt kê các rào cản: kỹ năng, linh kiện, chính sách, hay đối tác. Hỏi một thí điểm với một lớp thiết bị sẽ trông ra sao và được đo thế nào. Gồm cả góc nhìn bền vững và tài chính.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối phụ thuộc vào máy móc và thiết bị kiểm thử đáng tin cậy, và họ cảm nhận trực tiếp bản dựng chậm và máy tính xách tay hỏng. Họ nên đánh dấu thiết bị làm họ chậm, tham gia chọn mẫu máy cho vai trò của mình, và chờ đợi một đường thay thế nhanh. Các đội kiểm thử trên thiết bị vật lý, như điện thoại, nên coi các thiết bị đó là tài sản có người sở hữu và kế hoạch làm mới.

### Đội dịch vụ và vận hành

Các đội vận hành chạy chuỗi cung ứng: mua, nhận, tạo ảnh, triển khai, sửa và thanh lý. Họ nên giữ bản ghi hiện hành, canh các mẫu hình thất bại, giữ một nhóm dự phòng hợp lý, và giữ bằng chứng thanh lý. Họ gánh công việc vật lý, và năng lực của họ giới hạn việc làm mới có thể đi nhanh đến đâu.

### Lãnh đạo và quản trị

Lãnh đạo muốn chi phí dự đoán được, rủi ro thấp, và một câu chuyện bền vững. Họ nên tài trợ làm mới đều, yêu cầu dữ liệu tuổi và thất bại thay vì một tuổi trung bình trần, và yêu cầu bằng chứng thanh lý. Quản trị nên kiểm tra rằng nghĩa vụ môi trường và bảo vệ dữ liệu được đáp ứng và kế hoạch được xem lại khi điều kiện đổi.

### Khách hàng và người dùng

Người dùng muốn một thiết bị chạy được, được thay nhanh khi nó không. Họ cũng sở hữu một phần kết quả: báo vấn đề sớm, trả lại thiết bị, và nói với CNTT khi họ chuyển chỗ. Cái nhìn của họ về thiết bị và quy trình thay thế là phản hồi trực tiếp nhất sẵn có. Hãy mời họ tham gia chọn mẫu máy cho công việc của họ.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một chính quyền hạt hỗ trợ 3.800 nhân viên trên 40 địa điểm, với hỗn hợp thiết bị văn phòng, hiện trường và dùng chung. Các con số dưới đây chỉ mang tính minh họa.

Cứ bốn năm hạt lại thay toàn bộ máy tính xách tay trong một lần mua sắm duy nhất, và chu kỳ trước kết thúc với một đợt tăng vọt thất bại trong năm trước khi thay thế và nhiều tháng công việc tạo ảnh trong năm thay. Người quản lý tài sản đề xuất làm mới đều và xây một bức tranh từ sổ đăng ký và bản ghi sửa chữa. Tuổi trung vị của máy tính xách tay là 3,2 năm và bách phân vị thứ 85 là 5,1 năm. Số lần hỏng trên 100 máy tính xách tay mỗi năm tăng từ khoảng 6 cho thiết bị dưới ba năm lên khoảng 19 cho thiết bị trên năm năm. Một mẫu máy mua trong một lô duy nhất cho thấy 24 lần hỏng trên 100 mỗi năm khi hai năm tuổi, do một lỗi pin. Thời gian chờ thay thế trung vị là 5 ngày, với bách phân vị thứ 85 là 12 ngày, chủ yếu chờ tạo ảnh. Tỷ lệ thiết bị nhàn rỗi là 7 phần trăm, chủ yếu là thiết bị dự phòng và thiết bị của nhân viên nghỉ dài hạn. Trong 410 máy tính xách tay nghỉ hưu năm ngoái, 366 có chứng nhận xóa được ghi lại, tỷ lệ hoàn tất 89 phần trăm, và 12 phần trăm đi đến một nhà tái chế mà không có báo cáo hạ nguồn.

Đội thực hiện bốn thay đổi. Nó chuyển sang làm mới hằng quý khoảng 6 phần trăm máy tính xách tay, sắp theo tuổi và lịch sử hỏng, với nhân viên hiện trường và các thiết bị cũ nhất trước. Nó thương lượng với nhà cung cấp về lô lỗi theo bảo hành. Nó giữ một nhóm dự phòng bằng 2 phần trăm hệ thống, được nạp sẵn ảnh chuẩn, cắt giảm thời gian chờ tạo ảnh. Nó yêu cầu một chứng nhận khớp với số sê-ri cho mọi thiết bị thanh lý, và chuyển sang một nhà tái chế báo cáo về xử lý hạ nguồn. Nó cũng bắt đầu một thí điểm nhỏ để tân trang và triển khai lại các thiết bị dưới bốn năm tuổi.

Hai quý sau, bách phân vị thứ 85 của thời gian chờ thay thế là 4 ngày, tỷ lệ thiết bị trên năm năm tuổi giảm từ 22 phần trăm xuống 13 phần trăm, mức hoàn tất bằng chứng thanh lý là 99 phần trăm, và tỷ lệ tái sử dụng và tái chế qua các kênh được duyệt là 94 phần trăm. Văn phòng tài chính yêu cầu một mục tiêu duy nhất cho tuổi thiết bị trung bình, và người quản lý tài sản đề xuất theo dõi hồ sơ tuổi và tỷ lệ hỏng cùng nhau, giải thích rằng một tuổi trung bình thấp có thể mua được bằng cách thay các thiết bị khỏe. Quyết định được ghi trong nhật ký quyết định, với một buổi rà soát sau sáu tháng.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy lập kế hoạch làm mới như một dòng chảy đều và rà soát dữ liệu tuổi và thất bại cùng người dùng thường xuyên. Điều cần lưu ý là một tuổi thay thế cứng nhắc lãng phí thiết bị đang chạy và làm căng ngân sách.

### AI

Các tính năng AI có thể nâng yêu cầu phần cứng, ví dụ cho mô hình cục bộ, làm đổi thời điểm làm mới. Hãy theo dõi thất bại và tuổi từ dữ liệu của chính bạn và thêm một thước đo về các thiết bị không chạy được những công cụ mọi người cần. Điều cần lưu ý là tuyên bố của nhà cung cấp về phần cứng sẵn sàng cho AI nên được kiểm thử với khối lượng công việc của chính bạn.

### Tự động hóa

Hãy tự động hóa các sự kiện vòng đời, như ngày bảo hành và bước thanh lý, và đo tự động hóa theo các sự kiện bị bỏ sót. Điều cần lưu ý là quy trình xóa và thanh lý tự động cần bằng chứng hoàn tất, nên hãy kiểm toán một mẫu.

### Phân tích

Hãy cho thấy hồ sơ tuổi và tỷ lệ hỏng theo mẫu máy kèm số đếm. Quyết định được cung cấp thông tin là làm mới bao nhiêu mỗi kỳ. Điều cần lưu ý là tỷ lệ hỏng của đội thiết bị nhỏ nhiễu, nên hãy tránh kết luận từ một nhúm thiết bị.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Thiết bị được mua khi cần và thường do chính người sẽ dùng mua. Hãy giữ một danh sách đơn giản kèm ngày mua, xóa thiết bị khi nhân viên rời đi, và tránh mua thừa. Dùng một công cụ ghi danh được quản lý sớm, vì nó rẻ hơn chắp vá về sau.

**Doanh nghiệp nhỏ.** Chi phí của một thiết bị hỏng rơi vào vài người. Hãy giữ một hai thiết bị dự phòng, ghi lại ngày bảo hành, và có một thói quen xóa và thanh lý. Các nhà tái chế và tân trang địa phương có thể là đối tác tốt. Một danh sách kiểm tra thanh lý ba dòng thắng không có gì.

**Doanh nghiệp lớn.** Quy mô khiến hành vi của lô và quản lý nhà cung cấp trở nên quan trọng. Hãy dùng dữ liệu thất bại để thương lượng với nhà cung cấp, chuẩn hóa vài mẫu máy cho mỗi lớp, và chạy làm mới liên tục với hỗ trợ hậu cần. Căn chỉnh với báo cáo bền vững, vì phần cứng thường chi phối dấu chân của CNTT.

**Chính phủ và khu vực công.** Quy tắc mua sắm, lưu giữ hồ sơ và bảo vệ dữ liệu nghiêm ngặt định hình vòng đời. Hãy ghi tài liệu việc làm sạch theo một tiêu chuẩn được công nhận, giữ bằng chứng thanh lý trong thời gian yêu cầu, và cân nhắc các cam kết công khai về bền vững và sửa chữa. Các cơ quan công có thể bị yêu cầu báo cáo rác thải điện tử (xem chủ đề 8.3, Chỉ số tuân thủ và kiểm toán).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là công sức nối sổ đăng ký, sửa chữa và dữ liệu thiết bị đầu cuối; một ít công cụ quản lý thiết bị nếu chưa có; nhóm dự phòng; và công việc quy trình của thanh lý có bằng chứng. Tiết kiệm và lợi ích hiện ra ở ít thất bại gây gián đoạn hơn, ngân sách mượt hơn, ít thiết bị lãng phí hơn, và rủi ro sự cố dữ liệu thấp hơn.

Hãy xây hồ sơ từ dữ liệu của chính bạn. So sánh chi phí chạy một thiết bị quá tuổi thọ dự kiến, gồm công sức hỗ trợ và thời gian làm việc mất mỗi lần hỏng, với chi phí thay nó sớm hơn. So sánh chi phí nhóm dự phòng với số ngày làm việc mất tiết kiệm được mỗi lần hỏng. Đếm số thiết bị nghỉ hưu không có bằng chứng xóa, và chi phí của một sự cố dữ liệu đơn lẻ sẽ theo sau. Tránh trích dẫn tuổi thọ thiết bị trung bình hay số liệu rác thải điện tử từ các nguồn đã công bố mà không kiểm tra phương pháp và ngày của chúng. Tổng chi phí sở hữu gom các phần này lại (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị), và [tổng chi phí sở hữu](https://en.wikipedia.org/wiki/Total_cost_of_ownership) đầy đủ của một thiết bị gồm mua, hỗ trợ, năng lượng, gián đoạn và thanh lý.

## Phản mẫu và cạm bẫy

- **Thay mọi thứ theo lịch.** Nó lãng phí thiết bị đang chạy và tạo một đỉnh công việc. Hãy dùng tuổi, thất bại và nhu cầu.
- **Chạy đến khi hỏng.** Chi phí và gián đoạn ngoài kế hoạch vượt quá khoản tiết kiệm. Hãy canh cái đuôi tuổi.
- **Dùng tuổi trung bình làm mục tiêu.** Nó có thể đạt bằng cách thay các thiết bị khỏe. Hãy cho thấy hồ sơ và tỷ lệ hỏng.
- **Tin vào số liệu độ tin cậy của nhà sản xuất.** Cách dùng của bạn khác. Hãy dùng dữ liệu thất bại của chính bạn.
- **Thanh lý mà không có bằng chứng.** Một lần xóa không được ghi là một rủi ro bạn không chứng minh được mình đã quản lý.
- **Gửi thiết bị cho nhà tái chế rẻ nhất.** Xử lý hạ nguồn quan trọng. Hãy dùng đối tác có chứng nhận.
- **Theo dõi con người qua thiết bị của họ.** Hãy báo cáo theo lớp và nhóm, không bao giờ theo cá nhân.
- **Phớt lờ sửa chữa và tái sử dụng.** Giữ thiết bị hoạt động rẻ hơn và tử tế hơn với môi trường.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Lập kế hoạch | Mua khi hỏng | Làm mới định kỳ theo lịch | Tuổi thọ dự kiến cho mỗi lớp; làm mới đều theo lô | Làm mới canh theo tuổi, thất bại và nhu cầu; dự phòng định cỡ từ dữ liệu | Làm mới phối hợp với nhà cung cấp, tài chính và mục tiêu bền vững qua các địa điểm |
| Học từ dữ liệu | Không có bản ghi thất bại | Bản ghi sửa chữa được giữ | Tỷ lệ hỏng theo mẫu máy và tuổi được theo dõi | Phát hiện thay đổi việc mua và thời điểm; thời gian chờ được quản lý | Dữ liệu thất bại và sử dụng chia sẻ với nhà cung cấp để cải thiện thiết kế và điều khoản |
| Lối ra | Thiết bị biến mất | Xóa không chính thức | Quy trình thanh lý có bằng chứng cho mọi thiết bị | Bằng chứng được kiểm toán; tái sử dụng và tái chế được theo dõi | Thực hành tuần hoàn cùng đối tác có chứng nhận và báo cáo công khai |

## Danh sách kiểm tra

- [ ] Các lớp thiết bị và tuổi thọ dự kiến được định nghĩa, với lý do được ghi lại.
- [ ] Một kế hoạch làm mới đều tồn tại và được rà soát cùng tài chính.
- [ ] Hồ sơ tuổi, tỷ lệ hỏng theo mẫu máy và thời gian chờ thay thế được báo cáo.
- [ ] Một nhóm dự phòng được định cỡ từ dữ liệu hỏng và tuyển dụng.
- [ ] Thiết bị nhàn rỗi được xác định theo lớp, với quy tắc quyền riêng tư tại chỗ.
- [ ] Yêu cầu bảo hành và sửa chữa được ghi lại và dùng trong quyết định mua.
- [ ] Mỗi thiết bị nghỉ hưu có phương pháp làm sạch và bằng chứng được ghi lại.
- [ ] Đối tác thanh lý có chứng nhận và báo cáo xử lý hạ nguồn.
- [ ] Tỷ lệ tái sử dụng và tái chế được theo dõi.
- [ ] Một buổi rà soát hằng quý gồm tài chính, an ninh, mua sắm, bàn dịch vụ và người dùng.

## Lời nhắc AI

**Phân tích dữ liệu thất bại theo mẫu máy và tuổi.**

```text
Here is a summary of hardware failures for [device class] over [period]: model,
number in service, age band, and number of failures: [paste table]. Describe
patterns by model and age, flag batches or models that look unusual, say where
the sample is too small to judge, and suggest what to check next. Do not apply
manufacturer figures or invent benchmark values. List your assumptions.
```

**Thiết kế một kế hoạch làm mới liên tục.**

```text
We have [number] devices in these classes: [list with age profile]. Failure and
repair data: [summary]. Budget constraints: [summary]. Propose a quarterly
refresh plan that replaces a steady share, orders replacements by age, failure
history, and user need, and keeps a spares pool. Explain the trade-offs
against a fixed-cycle refresh and what to measure. Do not invent prices. List
your assumptions.
```

**Rà soát một quy trình thanh lý.**

```text
Our disposal process for retired [device types] is: [describe steps, partners,
and records]. Review it for gaps in data sanitization, evidence, chain of
custody, and environmental handling, and suggest improvements and spot checks.
Mention that requirements vary by jurisdiction and should be checked with
legal and security specialists. Do not provide legal conclusions. List your
assumptions.
```

**Giảm thời gian chờ thay thế.**

```text
Replacing a failed device currently takes these steps and typical waits:
[list]. Identify the slowest steps, suggest changes (for example preloaded
spares, remote enrollment, or simplified approval), and describe how to
measure the effect on the median and 85th percentile. Do not assume tooling we
have not described. List your assumptions and risks.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số vòng đời phần cứng.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số phần cứng mang vectơ lợi dụng, rào chắn và quy tắc bằng chứng của nó.

## Điểm chính cần nhớ

- Làm mới liên tục một phần đều đặn thiết bị, dùng dữ liệu tuổi, thất bại và sử dụng của chính bạn.
- Hãy nhìn phân phối tuổi và thất bại theo mẫu máy, không phải giá trị trung bình.
- Giữ việc thay thế nhanh với một nhóm dự phòng và một đường ngắn, được đo.
- Coi thanh lý an toàn có bằng chứng là cuối của vòng đời, và ưu tiên sửa chữa, tái sử dụng và tái chế có chứng nhận.
- Báo cáo theo lớp thiết bị và nhóm, và không bao giờ theo dõi cá nhân qua thiết bị của họ.
- Rà soát vòng đời cùng tài chính, an ninh, mua sắm và người dùng.

## Tài liệu tham khảo và đọc thêm

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
