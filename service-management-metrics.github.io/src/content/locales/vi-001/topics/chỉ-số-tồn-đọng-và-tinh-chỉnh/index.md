# Chỉ số tồn đọng và tinh chỉnh

**Một tồn đọng là một hàng đợi các lời hứa, nên hãy đo có bao nhiêu lời hứa đang chờ, chúng đã chờ bao lâu, và bao nhiêu phần của đoạn công việc tiếp theo thực sự đã sẵn sàng, và coi một đống hạng mục cũ ngày càng lớn là một quyết định bạn chưa đưa ra.**

## Tổng quan và động lực

Mọi đội xây dựng hoặc vận hành một dịch vụ đều giữ một danh sách công việc mà họ đã đồng ý xem xét. Trong thực hành linh hoạt, danh sách này là [tồn đọng sản phẩm](https://en.wikipedia.org/wiki/Product_backlog), một tập có thứ tự các hạng mục mô tả những gì có thể làm để cải thiện sản phẩm. Trên một bảng dòng chảy, thứ tương đương là tập các hạng mục đang chờ ở bên trái các cột đã bắt đầu. Trong quản lý dịch vụ CNTT (ITSM), như được mô tả bởi [ITIL](https://en.wikipedia.org/wiki/ITIL), các thứ tương đương là sự cố, yêu cầu dịch vụ, vấn đề và thay đổi đang mở chờ trong một hàng đợi. Tất cả đều là tồn đọng. Chúng khác nhau ở việc ai điền vào, các hạng mục phải rời đi nhanh đến đâu, và việc một hạng mục chờ có nghĩa là gì.

Phần lớn dữ liệu đến từ một [hệ thống theo dõi vấn đề](https://en.wikipedia.org/wiki/Issue_tracking_system) hoặc một công cụ ITSM. Các chỉ số tồn đọng trả lời một câu hỏi giản dị: lượng công việc đã hứa có tương xứng với năng lực để làm nó không, và công việc đã hứa có còn đáng làm không? Một tồn đọng lớn lên không giới hạn không mô tả một kế hoạch. Nó mô tả một danh sách ước muốn, và mọi người đọc nó, từ chủ sở hữu sản phẩm đến khách hàng đã nêu một hạng mục, sẽ hình thành ý tưởng riêng về khi nào nó sẽ xong. Câu trả lời trung thực thường là "không bao giờ", và cái giá của việc không nói ra được trả bằng lòng tin, bằng thời gian đọc lại các hạng mục cũ, và bằng những quyết định đưa ra trên thông tin đã cũ.

Tinh chỉnh là hoạt động giữ cho một tồn đọng hữu ích. Trong thực hành linh hoạt, tinh chỉnh tồn đọng sản phẩm là công việc liên tục thêm chi tiết, ước lượng và thứ tự cho các hạng mục để chúng sẵn sàng được bắt đầu. Các đội kéo công việc khi có năng lực trống thường gọi cùng hoạt động này là bổ sung hoặc chải chuốt tồn đọng. Trong ITSM nó hiện ra dưới dạng phân loại, xếp danh mục, và chải chuốt danh sách lỗi đã biết hoặc vấn đề. Các chỉ số trong chủ đề này đo kích thước và tuổi của tồn đọng, bao nhiêu công việc đã sẵn sàng, và việc tinh chỉnh giữ một cửa sổ công việc sẵn sàng đi trước đội tốt đến đâu.

Bốn thuật ngữ lặp lại. Một **hạng mục** là một mục đơn lẻ trong tồn đọng, như một [câu chuyện người dùng](https://en.wikipedia.org/wiki/User_story), một lỗi, một yêu cầu dịch vụ hay một hồ sơ vấn đề. **Tuổi hạng mục** là thời gian trôi qua kể từ khi hạng mục vào tồn đọng, khác với tuổi hạng mục công việc trong đo lường dòng chảy, nơi đồng hồ bắt đầu khi công việc bắt đầu (xem chủ đề 2.1, Các thước đo dòng chảy). **Sẵn sàng** nghĩa là một hạng mục đáp ứng định nghĩa sẵn sàng bằng văn bản của đội, để đội có thể bắt đầu nó và kỳ vọng hoàn tất nó trong một cửa sổ mức dịch vụ. **Tinh chỉnh** là công việc làm cho các hạng mục sẵn sàng và loại bỏ các hạng mục sẽ không bao giờ được làm.

Tồn đọng sản phẩm và tồn đọng dịch vụ hành xử khác nhau, và trộn chúng là sai lầm phổ biến nhất trong lĩnh vực này. Một tồn đọng sản phẩm là nơi các hạng mục được cố ý giữ lại cho đến khi chủ sở hữu sản phẩm quyết định thứ tự của chúng. Chờ đợi là một trạng thái bình thường, và một hạng mục cũ là lý do để hỏi nó còn quan trọng không. Một tồn đọng dịch vụ gồm sự cố và yêu cầu là một hàng đợi kèm một lời hứa: khách hàng kỳ vọng một câu trả lời trong một thời gian. Chờ đợi ở đó là một chi phí đối với khách hàng ngay từ phút đầu tiên. Một tồn đọng sản phẩm nên được tỉa; một tồn đọng dịch vụ nên được xả. Đặt hai cái lên một biểu đồ và biểu đồ sẽ gây hiểu lầm.

Góc nhìn linh hoạt coi tồn đọng là một sản phẩm sống do một chủ sở hữu sản phẩm sở hữu, được giữ đủ ngắn để hiểu và được sắp thứ tự theo giá trị. Góc nhìn ITIL coi các bản ghi mở là công việc đang làm dở so với một mức dịch vụ đã thỏa thuận, do một thực hành sở hữu. Cả hai góc nhìn chia sẻ một sự thật từ lý thuyết hàng đợi: một hàng đợi nhận hạng mục nhanh hơn nó thả ra sẽ lớn lên, và thời gian một hạng mục chờ lớn lên theo hàng đợi (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi). [Định luật Little](https://en.wikipedia.org/wiki/Little%27s_law) nối kích thước hàng đợi, tốc độ các hạng mục rời đi và thời gian trung bình một hạng mục ở trong hệ thống, và nó là lý do kích thước tồn đọng và tuổi tồn đọng là hai cách nhìn của cùng một thứ.

Một sự phân biệt cuối cùng giữ cho chủ đề trung thực. Một tồn đọng không phải là thước đo năng suất hay mức độ bận của một đội. Một tồn đọng lớn có thể có nghĩa là một sản phẩm được ưa chuộng, một danh sách tỉa kém, hoặc một đội thiếu nguồn lực, và riêng con số không thể nói là cái nào.

## Nguyên tắc chính

- **Đo tuổi cũng như kích thước.** Kích thước cho bạn biết bao nhiêu đang chờ; tuổi cho biết bao lâu, và các hạng mục cũ nhất cho thấy nơi các quyết định đang bị né tránh.
- **Giữ tồn đọng sản phẩm và dịch vụ tách biệt.** Một ý tưởng được giữ và một khách hàng đang chờ là những thứ khác nhau, và mỗi cái cần cách đọc riêng.
- **Nhắm tới công việc sẵn sàng, không phải một danh sách dài.** Vài tuần công việc sẵn sàng, được sắp thứ tự tốt đáng giá hơn một nghìn hạng mục chưa ai xem.
- **Tỉa là một tính năng.** Loại bỏ một hạng mục bạn sẽ không bao giờ làm là công việc trung thực, và một tỷ lệ loại bỏ không bao giờ trên không là một cảnh báo.
- **Dùng phân phối.** Báo cáo trung vị và bách phân vị thứ 85 của tuổi hạng mục và cho thấy hạng mục cũ nhất, vì giá trị trung bình che giấu cái đuôi.
- **Mô tả đội và hệ thống.** Các chỉ số tồn đọng cho thấy công việc đến một đội ra sao và được xử lý thế nào, không bao giờ cho thấy một cá nhân làm việc ra sao.
- **Gắn mọi con số với một quyết định.** Nếu một biểu đồ tồn đọng không thay đổi điều bạn làm tiếp theo, hãy cho nó nghỉ hưu.

## Định nghĩa chỉ số

Các chỉ số dưới đây áp dụng cho một tồn đọng tại một thời điểm. Hãy chọn tồn đọng trước (một tồn đọng sản phẩm, một hàng đợi sự cố, một hàng đợi yêu cầu dịch vụ, một danh sách vấn đề) và báo cáo từng chỉ số theo từng tồn đọng. Bách phân vị dùng phương pháp [bách phân vị](https://en.wikipedia.org/wiki/Percentile) nêu trong chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kích thước tồn đọng | Số hạng mục đang mở trong một tồn đọng có tên tại một thời điểm | Số hạng mục có trạng thái mở hoặc sẵn sàng vào ngày chụp; loại trừ các hạng mục đang tiến hành và đã đóng | hạng mục | Ảnh chụp của trình theo dõi vấn đề hoặc công cụ ITSM | Quản lý sự cố; quản lý yêu cầu dịch vụ; quản lý vấn đề | Tồn đọng sản phẩm; hàng đợi đầu vào | Hằng tuần |
| Tuổi tồn đọng | Phân phối thời gian các hạng mục đang mở đã chờ | Với mỗi hạng mục đang mở, ngày chụp trừ ngày nó vào tồn đọng; báo cáo trung vị, bách phân vị thứ 85 và hạng mục cũ nhất | ngày | Lịch sử tạo và trạng thái của trình theo dõi vấn đề hoặc ITSM | Quản lý sự cố; quản lý vấn đề; cải tiến liên tục | Sức khỏe tồn đọng; rà soát hạng mục đã cũ | Hằng tuần |
| Độ sâu công việc sẵn sàng | Đội có công việc sẵn sàng đi trước bao xa | Số hạng mục đáp ứng định nghĩa sẵn sàng / số hạng mục trung bình hoàn tất mỗi tuần trong sáu kỳ gần nhất | tuần | Cờ sẵn sàng của trình theo dõi vấn đề và lịch sử thông lượng | Phân tích nghiệp vụ; quản lý yêu cầu dịch vụ | Định nghĩa sẵn sàng; tinh chỉnh | Mỗi kỳ lập kế hoạch |
| Độ phủ tinh chỉnh | Tỷ lệ cửa sổ ngắn hạn đã sẵn sàng | Số hạng mục trong hai chu kỳ hai tuần kế tiếp của công việc dự kiến (hoặc N hạng mục đầu theo thứ tự) đáp ứng định nghĩa sẵn sàng / số hạng mục trong cửa sổ đó | phần trăm | Thứ tự, cờ sẵn sàng và công việc đã lên kế hoạch của trình theo dõi vấn đề | Phân tích nghiệp vụ; hỗ trợ thay đổi (cho thay đổi có kế hoạch) | Tinh chỉnh tồn đọng sản phẩm | Mỗi kỳ lập kế hoạch |
| Tỷ lệ vào-ra của tồn đọng | Liệu các hạng mục đến nhanh hơn chúng rời đi | Số hạng mục được thêm trong kỳ / số hạng mục bị loại khỏi tồn đọng do hoàn tất hoặc loại bỏ trong cùng kỳ; một tỷ lệ trên 1 nghĩa là tăng | tỷ lệ | Các sự kiện tạo và giải quyết của trình theo dõi vấn đề hoặc ITSM | Quản lý sự cố; quản lý yêu cầu dịch vụ; quản lý năng lực và hiệu năng | Tốc độ đến và rời đi | Hằng tuần |
| Tỷ lệ loại bỏ tồn đọng | Tỷ lệ các hạng mục rời đi bị gỡ mà không được giao | Số hạng mục đóng là sẽ không làm, trùng lặp hoặc lỗi thời / tất cả hạng mục rời tồn đọng trong kỳ; loại trừ các hạng mục đóng là đã xong | phần trăm | Trường giải quyết của trình theo dõi vấn đề | Cải tiến liên tục; quản lý vấn đề (rà soát lỗi đã biết) | Tỉa tồn đọng; sắp thứ tự bởi chủ sở hữu sản phẩm | Hằng tháng |
| Tồn đọng dịch vụ quá mục tiêu | Tỷ lệ các hạng mục dịch vụ đang mở già hơn cửa sổ phản hồi hoặc giải quyết đã thỏa thuận | Số hạng mục đang mở có thời gian trôi qua vượt mục tiêu dịch vụ / tất cả hạng mục đang mở trong hàng đợi; đồng hồ chạy từ lúc ghi nhận và chỉ tạm dừng ở các trạng thái mà định nghĩa bằng văn bản cho phép | phần trăm | Công cụ ITSM có đồng hồ mức dịch vụ | Quản lý mức dịch vụ; quản lý sự cố; quản lý yêu cầu dịch vụ | Làn khẩn cấp; kỳ vọng mức dịch vụ | Hằng ngày hoặc hằng tuần |

Ba đồng hồ cần được nêu rõ ràng. Tuổi tồn đọng bắt đầu khi hạng mục được tạo trong tồn đọng và dừng khi nó rời đi do hoàn tất hoặc loại bỏ, nên một hạng mục được mở lại bắt đầu một tuổi mới. Độ sâu công việc sẵn sàng dùng thông lượng chỉ từ các hạng mục đã hoàn tất, không bao giờ từ vận tốc kế hoạch, vì vận tốc kế hoạch là một dự báo. Tồn đọng dịch vụ quá mục tiêu dùng đồng hồ mức dịch vụ, có thể khác với tuổi tồn đọng vì các lần tạm dừng được phép (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

## Khuyến nghị

### Thiết lập tồn đọng để nó đo được

**1. Nêu tên mỗi tồn đọng và người sở hữu nó.** Mỗi tồn đọng trong phạm vi có một người sở hữu, một mục đích và một danh sách các loại hạng mục. Một tồn đọng sản phẩm thuộc về một chủ sở hữu sản phẩm; một hàng đợi sự cố thuộc về bàn dịch vụ hoặc nhóm giải quyết. Không có người sở hữu có tên, không ai quyết định khi nào một hạng mục cũ nên đi.

**2. Tách các hạng mục được giữ khỏi các lời hứa trong hàng đợi.** Gắn thẻ mỗi hạng mục là một ý tưởng đội đang giữ để sắp thứ tự hoặc một cam kết mà ai đó đang chờ. Báo cáo kích thước và tuổi tồn đọng riêng cho mỗi loại. Một yêu cầu hỗ trợ nằm trong tồn đọng sản phẩm là một lời hứa trong hàng đợi đặt sai chỗ, và nó xứng đáng có đồng hồ dịch vụ.

**3. Viết định nghĩa sẵn sàng, và giữ nó ngắn.** Một định nghĩa sẵn sàng liệt kê vài điều đội cần biết trước khi bắt đầu: kết quả cần đạt, một cỡ thô, các điều kiện chấp nhận và bất kỳ phụ thuộc nào. Hãy giữ nó trong vài dòng và sửa nó khi nó không còn dự đoán được công việc trôi chảy. Một danh sách kiểm tra dài biến tinh chỉnh thành giấy tờ và mời gọi việc đánh dấu cho có.

**4. Ghi lại ngày vào và lý do rời đi.** Tuổi và tỷ lệ loại bỏ đều phụ thuộc hai trường: ngày một hạng mục vào và lý do nó rời đi. Hãy làm cả hai thành bắt buộc trong công cụ, và thêm một danh sách có kiểm soát các lý do rời đi như đã xong, trùng lặp, lỗi thời và sẽ không làm. Ngày bị thiếu là nguyên nhân phổ biến nhất của tuổi tồn đọng không dùng được (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

### Đọc kích thước và tuổi cùng nhau

**5. Báo cáo tuổi tồn đọng như một phân phối.** Hãy cho thấy trung vị, bách phân vị thứ 85 và hạng mục cũ nhất, cùng một biểu đồ tần suất theo dải tuổi như dưới 30 ngày, 30 đến 90, 90 đến 180 và trên 180. Một tuổi trung bình phẳng có thể che giấu một đống ngày càng lớn các hạng mục cổ vì hạng mục mới kéo giá trị trung bình xuống. Góc nhìn hạng mục cũ nhất là cái khó giấu nhất.

**6. Dùng tỷ lệ vào-ra để thấy sự tăng sớm.** Một tỷ lệ liên tục trên 1 nghĩa là tồn đọng sẽ lớn lên, bất kể kích thước hiện tại. Hãy vẽ nó dưới dạng số liệu trượt bốn tuần để làm mượt các kỳ nghỉ và tuần phát hành. Ghép nó với thông lượng để đội thấy sự tăng đến từ nhu cầu tăng hay đầu ra giảm (xem chủ đề 2.1, Các thước đo dòng chảy).

**7. Đổi kích thước thành thời gian bằng thông lượng.** Chia kích thước tồn đọng cho số hạng mục trung bình hoàn tất mỗi kỳ để có một số kỳ công việc đang chờ thô, một ứng dụng trực tiếp của định luật Little. Nói rõ rằng đó là một giá trị trung bình, không phải một lời hứa, và cho thấy khoảng dùng một thông lượng thấp hơn và cao hơn từ các kỳ gần đây. Một tồn đọng sản phẩm một trăm hạng mục tương đương một năm công việc là một cuộc trò chuyện về phạm vi, không phải một lịch trình.

### Giữ cho việc tinh chỉnh chảy

**8. Nhắm tới một cửa sổ công việc sẵn sàng, không phải một tồn đọng đầy công việc sẵn sàng.** Hãy tinh chỉnh đủ cho một đến ba tuần công việc kế tiếp và không hơn. Chi tiết thêm vào một hạng mục sẽ không được bắt đầu trong sáu tháng thường bị cũ, nên hãy đo độ sâu công việc sẵn sàng và để nó thả nổi trong một dải mục tiêu, như một đến ba tuần công việc, mà đội chọn và xem lại. Một độ sâu cao hơn nhiều so với dải là lãng phí; một độ sâu dưới một tuần công việc là rủi ro của việc lập kế hoạch nhàn rỗi hoặc vội vã.

**9. Đo độ phủ tinh chỉnh trên các hạng mục sắp được bắt đầu.** Độ phủ tinh chỉnh chỉ nhìn vào phần đầu của thứ tự. Nó trả lời câu hỏi mà buổi lập kế hoạch sẽ hỏi: nếu chúng ta bắt đầu bây giờ, các hạng mục tiếp theo có sẵn sàng không? Hãy báo cáo nó ngay trước khi lập kế hoạch, khi một chỗ trượt vẫn có thể được sửa, thay vì sau đó.

**10. Biến tinh chỉnh thành một hoạt động đều đặn, ngắn.** Hướng dẫn linh hoạt, gồm cả Hướng dẫn Scrum, mô tả tinh chỉnh là một hoạt động liên tục và để hình thức của nó cho đội. Nhiều đội thấy một buổi ngắn, thường xuyên hiệu quả hơn một cuộc họp dài.

### Tỉa và rà soát

**11. Tỉa theo lịch và báo cáo tỷ lệ loại bỏ.** Hãy rà soát các hạng mục cũ nhất mỗi tháng và hỏi với từng cái: chúng ta có làm việc này trong sáu tháng tới không, và nếu không, vì sao giữ? Đóng một hạng mục kèm một lý do được nêu không phải là thất bại. Một đội không bao giờ loại bỏ có lẽ đang tích trữ, và một đội loại bỏ phần lớn những gì nhận được có lẽ đang chấp nhận công việc lẽ ra nên từ chối ngay ở cửa.

**12. Xử lý tồn đọng dịch vụ bằng cách xả, không phải tỉa.** Với hàng đợi sự cố và yêu cầu, câu hỏi đầu tiên là các hạng mục có nằm trong cửa sổ dịch vụ của chúng không. Hãy theo dõi tỷ lệ quá mục tiêu và hạng mục mở lâu nhất, và giữ làn khẩn cấp cho các hạng mục không thể chờ. Các danh sách vấn đề và lỗi đã biết nằm giữa hai thế giới: chúng được giữ cho đến khi một bản sửa được tài trợ, nên hãy rà soát chúng như một tồn đọng sản phẩm, với một ngày rà soát nêu rõ cho mỗi mục (xem chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Kích thước tồn đọng | Đóng hàng loạt hạng mục là lỗi thời, tách hạng mục để trông bận, hoặc giấu công việc trong các danh sách phụ và bảng tính | Tỷ lệ loại bỏ tồn đọng kèm lý do rời đi; so sánh định kỳ công cụ với danh sách yêu cầu thật; phản hồi của khách hàng về các hạng mục bị bỏ |
| Tuổi tồn đọng | Đặt lại ngày vào bằng cách nhân bản hoặc tạo lại các hạng mục cũ; chuyển hạng mục giữa các tồn đọng; mở lại thay vì nêu lại để đổi đồng hồ | Kiểm toán các hạng mục bị nhân bản và chuyển; rà soát hạng mục cũ nhất; tuổi được đo từ lần tạo đầu tiên xuyên qua các bản ghi được liên kết |
| Độ sâu công việc sẵn sàng | Đánh dấu hạng mục sẵn sàng mà không kiểm tra; thổi phồng độ sâu bằng cách viết các hạng mục chi tiết cho công việc giá trị thấp | Mẫu các hạng mục sẵn sàng được đọc so với định nghĩa; tỷ lệ làm lại hoặc trả về tinh chỉnh khi công việc bắt đầu |
| Độ phủ tinh chỉnh | Đánh dấu cờ sẵn sàng để đạt con số; thu hẹp cửa sổ để ít hạng mục được tính | Số hạng mục bị trả lại sau khi lập kế hoạch; mức thành công mục tiêu phân phối và thay đổi phạm vi giữa kỳ (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối) |
| Tỷ lệ vào-ra của tồn đọng | Đóng nhanh các hạng mục dễ để đẩy lượng ra, hoặc từ chối hạng mục mới ở cửa để giữ lượng vào thấp | Tuổi của các hạng mục cũ nhất; tỷ lệ loại bỏ; tỷ lệ yêu cầu bị từ chối mà không có lý do; nhu cầu chưa được đáp ứng do khách hàng báo cáo |
| Tỷ lệ loại bỏ tồn đọng | Loại bỏ các hạng mục mà người dùng vẫn muốn để thu nhỏ kích thước; hoặc tránh loại bỏ để con số trông nhẹ nhàng | Rà soát một mẫu các hạng mục bị loại bỏ cùng người yêu cầu; tỷ lệ mở lại và nêu lại cho các hạng mục bị loại bỏ |
| Tồn đọng dịch vụ quá mục tiêu | Tạm dừng đồng hồ bằng trạng thái chờ khách hàng, hạ mức ưu tiên, hoặc đóng và mở lại để đặt lại cửa sổ | Tỷ lệ thời gian ở các trạng thái tạm dừng; tỷ lệ mở lại (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số); mức hài lòng của người dùng về các phiếu đã đóng |

Một kết quả đọc lành mạnh cho thấy một tồn đọng có kích thước ổn định hoặc đang giảm chậm, có ít hạng mục cũ nhất và mỗi cái có một người sở hữu và một lý do được nêu, và có cửa sổ ngắn hạn phần lớn đã sẵn sàng. Tỷ lệ vào-ra lảng vảng gần 1, tỷ lệ loại bỏ không bằng không và cũng không chiếm ưu thế, và độ phủ tinh chỉnh tăng mà công việc đã lên kế hoạch không trở nên mong manh hơn. Khi các con số trông tốt nhưng khách hàng vẫn báo cáo rằng không có gì xảy ra với yêu cầu của họ, hãy tin khách hàng và kiểm toán dữ liệu.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Tồn đọng sản phẩm nhỏ, tỉa quyết liệt | Dễ hiểu và dễ giữ thứ tự; trung thực về năng lực | Có nguy cơ bỏ những ý tưởng sau này lẽ ra quan trọng; người yêu cầu có thể cảm thấy bị phớt lờ |
| Tồn đọng lớn, được giữ lại | Bảo tồn mọi ý tưởng và yêu cầu; lịch sử hữu ích | Tốn công đọc; các hạng mục cũ gây hiểu lầm cho việc lập kế hoạch và che giấu ưu tiên thật |
| Cửa sổ sẵn sàng sâu (nhiều tuần được tinh chỉnh) | Lập kế hoạch trơn tru; ít bất ngờ khi công việc bắt đầu | Chi tiết đã tinh chỉnh bị cũ; công sức tốn cho công việc có thể không bao giờ bắt đầu |
| Cửa sổ sẵn sàng nông (khoảng một tuần) | Ít chi tiết lãng phí; giữ được sự linh hoạt | Việc lập kế hoạch có thể đình trệ khi vài hạng mục chưa sẵn sàng; ít thời gian dẫn hơn để phát hiện phụ thuộc |
| Định nghĩa sẵn sàng nghiêm ngặt | Ít khởi đầu mơ hồ; công việc dễ đoán | Có thể thành một cổng làm chậm dòng chảy và khuyến khích điền cho có |
| Định nghĩa sẵn sàng nhẹ | Nhanh; tin tưởng đội | Nhiều khám phá hơn trong lúc làm việc; nhiều thay đổi giữa kỳ hơn |

Câu trả lời thực tế là giữ tồn đọng đủ nhỏ để đọc trong một lần ngồi, giữ một cửa sổ sẵn sàng khoảng một đến ba tuần công việc, và để định nghĩa sẵn sàng đủ ngắn để mọi người nhớ. Các hàng đợi dịch vụ cần lập trường ngược lại: nhỏ không phải mục tiêu, hoàn tất trong cửa sổ đã thỏa thuận mới là. Hãy chọn ô phù hợp với bối cảnh của bạn ở mỗi hàng và ghi lý do ra.

## Câu hỏi để thảo luận với đội nhóm

**1. Nếu hôm nay chúng ta ngừng thêm hạng mục, sẽ mất bao lâu để dọn sạch tồn đọng ở thông lượng gần đây của chúng ta, và con số đó có đáng tin không?**
Hãy bắt đầu bằng cách chia kích thước tồn đọng cho số hạng mục thông thường hoàn tất mỗi kỳ và cho thấy khoảng dùng các kỳ gần đây tốt nhất và tệ nhất. Hỏi đội có tin kết quả không, và thời gian thực sự sẽ đi đâu. Nếu con số dài hơn một năm cho một tồn đọng sản phẩm, hãy hỏi những hạng mục nào có thể bị gỡ mà không ai nhận ra.

**2. Năm hạng mục cũ nhất là gì, và ai đã quyết định chúng nên vẫn còn ở đây?**
Đọc to năm hạng mục cũ nhất cùng ngày vào của chúng. Với mỗi cái, hỏi một người sở hữu có tên và một lý do nó còn lại, như chờ một phụ thuộc, một sự hoãn có chủ ý hay sự lơ là. Thống nhất một hành động cho mỗi cái: lên lịch, loại bỏ, hoặc ghi lại vì sao nó ở lại và khi nào xem lại.

**3. "Sẵn sàng" nghĩa là gì ở đây, và những bất ngờ gần đây của chúng ta có đến từ các hạng mục chưa sẵn sàng không?**
Hãy yêu cầu mỗi người viết định nghĩa sẵn sàng bằng lời của mình, rồi so sánh. Sự khác biệt là phát hiện đầu tiên. Nhìn lại các hạng mục đã gây ra câu hỏi giữa kỳ hoặc làm lại và hỏi điều gì sẽ làm chúng sẵn sàng. Người điều phối nên chống lại việc thêm mục vào danh sách kiểm tra cho mọi bất ngờ và thay vào đó chọn một hoặc hai mục sẽ ngăn được nhiều rắc rối nhất.

**4. Tồn đọng nào của chúng ta giữ ý tưởng, và tồn đọng nào giữ lời hứa với ai đó?**
Liệt kê mỗi tồn đọng và phân loại các hạng mục của nó thành hai loại. Yêu cầu hỗ trợ, sự cố và các hạng mục khách hàng đã cam kết là lời hứa và cần một đồng hồ dịch vụ; ý tưởng và cải tiến được giữ để sắp thứ tự. Thảo luận nơi hai loại bị trộn và điều đó làm gì với biểu đồ tuổi. Kết quả có thể đơn giản là một nhãn và một bộ lọc cho phép báo cáo riêng từng loại.

**5. Lần gần nhất chúng ta cố ý gỡ hạng mục là khi nào, và người yêu cầu phản ứng ra sao?**
Việc tỉa thường có cảm giác rủi ro, nên hãy xem bằng chứng. Kiểm tra tỷ lệ loại bỏ và lấy mẫu vài hạng mục bị loại bỏ. Hỏi người yêu cầu có được thông báo không, và có ai xin lại một hạng mục không. Người điều phối nên giúp nhóm thống nhất một thông điệp đơn giản cho người yêu cầu ("chúng tôi không có kế hoạch làm việc này; đây là lý do; hãy nêu lại nếu hoàn cảnh thay đổi") để việc tỉa trở thành thường lệ và tôn trọng.

**6. Nếu chúng ta muốn các biểu đồ tồn đọng của mình trông tốt hơn mà không giúp ai, chúng ta sẽ làm gì?**
Hãy chạy buổi rà soát lợi dụng từ chủ đề 1.2 trên từng chỉ số tồn đọng. Các câu trả lời có khả năng gồm đóng hàng loạt hạng mục cũ, nhân bản hạng mục để đặt lại tuổi, đánh dấu hạng mục sẵn sàng sớm, và thu hẹp cửa sổ mà độ phủ tính. Với mỗi câu trả lời, kiểm tra xem rào chắn trong bảng trên có bắt được không. Ghi lại những cái sẽ lọt qua và chọn một phép kiểm tra mới để thử vào quý tới.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối dùng chỉ số tồn đọng để giữ việc lập kế hoạch êm. Độ sâu công việc sẵn sàng và độ phủ tinh chỉnh cho đội biết buổi lập kế hoạch tới có trơn tru không, và tuổi tồn đọng cho thấy những lời hứa nào đang âm thầm mục nát. Một thói quen tốt là rà soát tuổi, tỷ lệ vào-ra và độ sâu sẵn sàng trong vài phút ở mỗi buổi tinh chỉnh, rồi hành động theo một điều. Các đội nên công bố ra ngoài một tập nhỏ, ổn định và giữ các dải tuổi chi tiết cho mục đích riêng của mình (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối).

### Đội dịch vụ và vận hành

Các đội vận hành chạy các hàng đợi có đồng hồ. Cách đọc trung tâm của họ là tỷ lệ các hạng mục đang mở quá mục tiêu cùng với hạng mục mở lâu nhất, chia theo mức ưu tiên và theo trạng thái tạm dừng. Các danh sách vấn đề và lỗi đã biết cần một ngày rà soát trên mỗi mục để các hạng mục được giữ không trở thành vĩnh viễn. Các đội cũng nên theo dõi tỷ lệ vào-ra cho hàng đợi sự cố, vì một tỷ lệ trên 1 qua nhiều tuần là dấu hiệu sớm của việc thiếu nhân sự hoặc một nguyên nhân tái diễn (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố).

### Lãnh đạo và quản trị

Lãnh đạo nhìn một tồn đọng như một tuyên bố ý định. Một tồn đọng rất lớn cho họ biết tổ chức đang hứa nhiều hơn khả năng giao, và một tồn đọng co lại nhanh có thể nghĩa là tỉa hoặc nhu cầu giảm. Hãy hỏi con số cung cấp thông tin cho quyết định nào. Hãy tài trợ thời gian cho tinh chỉnh và tỉa, tránh đặt mục tiêu trên kích thước tồn đọng thô, và yêu cầu phân phối tuổi và lý do loại bỏ khi một số liệu kích thước được trình bày (xem chủ đề 1.3, Kết quả hơn sản lượng: chọn điều cần đo).

### Khách hàng và người dùng

Khách hàng trải nghiệm tồn đọng như sự im lặng. Một hạng mục nêu sáu tháng trước mà không có hồi âm nói nhiều hơn bất kỳ biểu đồ nào. Người dùng coi trọng việc được nghe sự thật: nó có kế hoạch, nó không có kế hoạch và đây là lý do, hoặc nó đang chờ một phụ thuộc. Hãy cho người yêu cầu một cách để thấy trạng thái các hạng mục của họ, và coi các hạng mục bị loại bỏ là một nhiệm vụ truyền thông, không phải dọn dữ liệu (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một công ty bảo hiểm khu vực cỡ vừa vận hành một ứng dụng giải quyết bồi thường nội bộ với một đội sản phẩm và một bàn dịch vụ riêng. Các con số trong ví dụ này chỉ mang tính minh họa.

Tồn đọng của đội sản phẩm có 412 hạng mục. Tuổi trung vị là 138 ngày, bách phân vị thứ 85 là 410 ngày, và hạng mục cũ nhất đã 29 tháng. Đội hoàn tất khoảng 14 hạng mục mỗi chu kỳ hai tuần, nên tồn đọng xấp xỉ 29 chu kỳ hai tuần công việc ở thông lượng gần đây. Độ phủ tinh chỉnh cho hai chu kỳ kế tiếp là 55 phần trăm, và việc lập kế hoạch thường kéo dài khi đội phát hiện chi tiết bị thiếu. Bàn dịch vụ cho thấy một bức tranh khác: 63 yêu cầu đang mở, trong đó 9 phần trăm quá mục tiêu, và tỷ lệ vào-ra gần 1.

Một chủ sở hữu sản phẩm yêu cầu một con số nhỏ hơn và đề xuất mục tiêu dưới 200 hạng mục vào cuối quý. Đội không muốn coi đó là một mục tiêu tự thân. Thay vào đó, họ tiến hành một buổi rà soát. Họ gắn thẻ các hạng mục là ý tưởng được giữ hoặc công việc đã hứa và thấy rằng 38 trong 412 là các yêu cầu hỗ trợ mà khách hàng đã được báo là sẽ được xử lý. Họ chuyển chúng sang hàng đợi dịch vụ với một đồng hồ dịch vụ. Họ đọc 40 hạng mục cũ nhất và thấy 22 hạng mục đã lỗi thời hoặc trùng lặp. Họ đóng chúng kèm lý do rời đi và nói với người yêu cầu. Họ đặt một dải sẵn sàng từ một đến hai chu kỳ hai tuần và dành một buổi hằng tuần ngắn để chỉ tinh chỉnh phần đầu của thứ tự.

Qua ba chu kỳ hai tuần, kích thước tồn đọng giảm xuống 301 và tỷ lệ loại bỏ của tháng là 31 phần trăm, cao một cách có chủ ý và được đánh dấu trong buổi rà soát. Độ phủ tinh chỉnh tăng lên 88 phần trăm. Một cái nhìn nhanh vào dữ liệu làm lộ một rủi ro lợi dụng: kích thước tồn đọng giảm nhanh hơn dự kiến vì hai thành viên đội đã nhân bản một nhúm hạng mục đang già thành các hạng mục mới để tránh danh sách hạng mục cũ. Đội bắt được điều này khi biểu đồ hạng mục cũ nhất không còn khớp với mẫu loại bỏ. Họ thống nhất đo tuổi từ lần tạo đầu tiên xuyên qua các bản ghi được liên kết và rà soát các bản nhân bản ở mỗi buổi tỉa. Quyết định được ghi cho lãnh đạo là bỏ mục tiêu kích thước và thay vào đó báo cáo phân phối tuổi, cửa sổ sẵn sàng và các lý do loại bỏ mỗi quý.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Tinh chỉnh giữ cho đoạn công việc tiếp theo được hiểu và sẵn sàng, trong cuộc trò chuyện với các bên liên quan. Một thực hành hữu ích là rà soát tuổi tồn đọng và độ sâu công việc sẵn sàng cùng nhau và xóa hoặc quyết định về các hạng mục đã chờ quá lâu. Điều cần lưu ý là một tồn đọng được chải chuốt chỉ để trông ngắn, bằng cách loại bỏ hạng mục mà không nói với người yêu cầu, làm hại lòng tin.

### AI

Công cụ AI có thể tạo và tách các hạng mục tồn đọng với số lượng lớn, làm phồng kích thước tồn đọng mà không thêm giá trị. Hãy đo độ sâu công việc sẵn sàng và tỷ lệ loại bỏ, và ghép kích thước tồn đọng với tỷ lệ các hạng mục do AI tạo ra mà đến được phân phối. Điều cần lưu ý là một tồn đọng lớn do AI tạo ra có thể thêm nhiễu cho những người phải sắp ưu tiên nó.

### Tự động hóa

Hãy kéo kích thước và tuổi tồn đọng từ trình theo dõi một cách tự động, và đánh dấu các hạng mục vượt ngưỡng tuổi để một con người quyết định, không phải để tự động xóa. Tự động hóa đóng các hạng mục cũ nên tự nó được đo về các hạng mục bị đóng sai. Điều cần lưu ý là một bot đóng các hạng mục cũ cải thiện con số tuổi mà không trả lời người yêu cầu.

### Phân tích

Hãy cho thấy phân phối tuổi và tỷ lệ vào-ra theo thời gian, kèm danh sách các hạng mục cũ nhất. Quyết định được cung cấp thông tin là cam kết, hoãn hay bỏ cái gì. Điều cần lưu ý là riêng kích thước tồn đọng nói ít, vì một tồn đọng dài các hạng mục nhỏ được hiểu rõ có thể lành mạnh hơn một tồn đọng ngắn các hạng mục mơ hồ.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Tồn đọng thường là một danh sách duy nhất trong đầu người sáng lập hoặc một bảng đơn giản. Chỉ theo dõi tuổi của các hạng mục cũ nhất và liệu phần công việc kế tiếp đã sẵn sàng chưa. Hãy tỉa mạnh và thường xuyên, vì câu trả lời đúng cho một ý tưởng ba tháng tuổi thường là quên nó.

**Doanh nghiệp nhỏ.** Công việc sản phẩm và dịch vụ thường chung một đội, nên tồn đọng trộn các ý tưởng được giữ và lời hứa với khách hàng. Hãy tách chúng bằng một nhãn từ sớm. Một danh sách duy nhất được đọc hằng tuần trong một cuộc họp ngắn thắng các chỉ số cầu kỳ. Hãy theo dõi tuổi của các hạng mục hướng tới khách hàng trước, vì một yêu cầu bị quên có thể làm mất một mối quan hệ.

**Doanh nghiệp lớn.** Nhiều đội và nhiều hàng đợi nhân lên các cách đọc sai một tồn đọng. Hãy định nghĩa các chỉ số một lần, kèm các đồng hồ và lý do rời đi, và tránh gộp kích thước tồn đọng sản phẩm vào một số liệu danh mục duy nhất. So sánh một đội với lịch sử của chính nó, không bao giờ với đội khác có công việc khác (xem chủ đề 2.4, Chỉ số chuỗi giá trị). Các danh sách vấn đề và lỗi đã biết xứng đáng có nhịp rà soát riêng.

**Chính phủ và khu vực công.** Các cam kết với công dân, thời gian phản hồi theo luật và dấu vết kiểm toán định hình các hàng đợi dịch vụ. Hãy coi các đồng hồ theo luật là đầu vào cố định và báo cáo tỷ lệ quá mục tiêu kèm các định nghĩa được dùng. Các tồn đọng sản phẩm có thể bị ràng buộc bởi các đợt tài trợ và mua sắm, nên cửa sổ sẵn sàng có thể cần dài hơn so với một đội thương mại. Hãy giữ các lý do loại bỏ hiển thị, vì trách nhiệm giải trình trước công chúng làm việc bỏ im lặng trở nên rủi ro.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của các chỉ số này khiêm tốn. Phần lớn dữ liệu đã nằm trong trình theo dõi vấn đề hoặc công cụ ITSM. Các chi phí là một ngày vào và lý do rời đi bắt buộc, một buổi tỉa ngắn mỗi tháng, vài phút trong tinh chỉnh để xem các biểu đồ tuổi và sẵn sàng, và một ít công sức để tách tồn đọng sản phẩm và dịch vụ. Một bảng tính hoặc các báo cáo có sẵn của công cụ là đủ để bắt đầu, và không cần mua sản phẩm mới.

Lợi tức đến từ lãng phí tránh được và những lời hứa rõ ràng hơn. Các đội giữ một cửa sổ sẵn sàng tốn ít thời gian lập kế hoạch hơn để khám phá lại một hạng mục có nghĩa gì, và các đội tỉa ngừng đọc lại những hạng mục sẽ không bao giờ được làm. Khách hàng nhận câu trả lời trung thực sớm hơn, giảm các liên hệ lặp lại và leo thang. Hãy mô tả lợi ích theo các mẫu hình mà đội tự kiểm tra được: các buổi lập kế hoạch ngắn hơn, ít hạng mục bị trả về tinh chỉnh sau khi công việc bắt đầu, ít lời nhắc về yêu cầu cũ hơn, và ít bất ngờ hơn khi lãnh đạo hỏi có gì trong đường ống. Chủ đề này không đưa ra một tỷ lệ phần trăm, vì không thể đưa ra mà không có nguồn. Hãy đo đường cơ sở của riêng bạn trong một quý và so sánh.

## Phản mẫu và cạm bẫy

- **Coi kích thước tồn đọng là điểm năng suất hay hiệu suất.** Kích thước phụ thuộc vào nhu cầu, phạm vi và thói quen tỉa. Hãy báo cáo kích thước kèm tuổi và lý do loại bỏ, và không bao giờ so sánh các đội trên nó.
- **Trộn các ý tưởng được giữ và lời hứa với khách hàng trong một danh sách.** Khi đó biểu đồ tuổi đọc như sự lơ là và thiếu đồng hồ dịch vụ. Hãy tách chúng bằng một nhãn và báo cáo riêng từng loại.
- **Tinh chỉnh mọi thứ.** Các hạng mục chi tiết sẽ không bắt đầu trong nhiều tháng bị cũ. Hãy giữ một cửa sổ sẵn sàng và tinh chỉnh ngay trước nhu cầu.
- **Không bao giờ loại bỏ.** Một danh sách ngày càng lớn khiến mọi tuyên bố về phạm vi đều sai. Hãy tỉa theo lịch và ghi lại lý do mỗi lần.
- **Đặt lại tuổi bằng cách nhân bản hoặc chuyển hạng mục.** Nó làm đẹp biểu đồ và mất lịch sử. Hãy đo tuổi từ lần tạo đầu tiên xuyên qua các bản ghi được liên kết và kiểm toán các bản nhân bản.
- **Một định nghĩa sẵn sàng dùng như một cổng.** Nếu nó chặn công việc mà đội có thể bắt đầu một cách an toàn, nó làm chậm dòng chảy. Hãy giữ nó ngắn và để đội ghi đè kèm lý do được nêu.
- **Mục tiêu trên kích thước thô.** Một mục tiêu dưới N hạng mục mời gọi việc đóng hàng loạt. Hãy đặt mục tiêu cho tuổi của các hạng mục cũ nhất hoặc tỷ lệ quá mục tiêu dịch vụ, kèm một rào chắn.
- **Dùng tuổi trung bình.** Hạng mục mới kéo giá trị trung bình xuống trong khi hạng mục cũ chất đống. Hãy cho thấy trung vị, bách phân vị thứ 85 và hạng mục cũ nhất.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và dữ liệu | Ngày vào và lý do rời đi bị thiếu hoặc không nhất quán | Một số đội ghi ngày; định nghĩa sẵn sàng khác nhau | Một định nghĩa bằng văn bản về sẵn sàng và về tuổi tồn đọng; ngày vào và lý do rời đi bắt buộc | Chất lượng dữ liệu được lấy mẫu; tuổi được đo xuyên qua các bản nhân bản và chuyển | Định nghĩa được chia sẻ giữa các đội và nhà cung cấp và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Sức khỏe tồn đọng | Tồn đọng lớn lên mà không ai để ý; không tỉa | Thỉnh thoảng dọn dẹp khi danh sách trở nên không quản được | Tỉa theo lịch; tồn đọng sản phẩm và dịch vụ được tách | Kích thước, tuổi, vào-ra và tỷ lệ loại bỏ được theo dõi xu hướng và rà soát cùng rào chắn | Chính sách tồn đọng được tinh chỉnh giữa các đội theo nhu cầu và năng lực; khách hàng thấy trạng thái các hạng mục của họ |
| Tinh chỉnh | Chi tiết được thêm ngẫu hứng lúc lập kế hoạch | Các buổi đều đặn cho một số đội | Tinh chỉnh ngắn, đều đặn với một cửa sổ sẵn sàng đã thống nhất | Độ phủ và độ sâu sẵn sàng được rà soát và gắn với kết quả phân phối | Tinh chỉnh được chia sẻ giữa các đội và phụ thuộc; cửa sổ thích ứng theo điều kiện |
| Sử dụng trong quyết định | Các con số chỉ được cho thấy khi có chuyện không ổn | Báo cáo cho lãnh đạo mà không thảo luận | Đội rà soát tuổi và độ sâu sẵn sàng trong tinh chỉnh | Công việc cải tiến được tài trợ theo sau buổi rà soát | Bằng chứng tồn đọng cung cấp thông tin cho quyết định danh mục và năng lực toàn tổ chức |

## Danh sách kiểm tra

- [ ] Mỗi tồn đọng có một người sở hữu có tên và một mục đích được nêu.
- [ ] Các ý tưởng được giữ và lời hứa với khách hàng được gắn nhãn và báo cáo riêng.
- [ ] Mỗi hạng mục có một ngày vào bắt buộc và một lý do rời đi từ một danh sách có kiểm soát.
- [ ] Đội có một định nghĩa sẵn sàng ngắn bằng văn bản.
- [ ] Tuổi tồn đọng được báo cáo là trung vị, bách phân vị thứ 85 và hạng mục cũ nhất.
- [ ] Tỷ lệ vào-ra được cho thấy như một số liệu trượt bên cạnh thông lượng.
- [ ] Một cửa sổ sẵn sàng được thống nhất, và độ sâu công việc sẵn sàng được báo cáo so với nó.
- [ ] Độ phủ tinh chỉnh được báo cáo trước khi lập kế hoạch, không phải sau.
- [ ] Một buổi tỉa hằng tháng nằm trong lịch và tỷ lệ loại bỏ được báo cáo.
- [ ] Các hàng đợi dịch vụ cho thấy tỷ lệ quá mục tiêu và việc dùng trạng thái tạm dừng.
- [ ] Buổi rà soát lợi dụng cho các chỉ số tồn đọng đã được chạy trong quý này.

## Lời nhắc AI

**Đánh giá sức khỏe của một tồn đọng.**

```text
I work with [team name], which owns [type of backlog, such as a product
backlog or incident queue]. Here is a summary of the backlog: [number of
items], age distribution [median, 85th percentile, oldest item], items finished
per [week] [numbers], items added per [week] [numbers], and
discard reasons [counts]. Our definition of ready is: [definition].

Explain what this combination of figures could mean, listing at least three
different explanations, and suggest what extra data would tell them apart. Do not
invent benchmark values or targets. List your assumptions and anything you could
not determine from what I gave you.
```

**Soạn một định nghĩa sẵn sàng.**

```text
Help me draft a short definition of ready for [team name], which works on
[type of work]. Our current problems with unready items are: [list of
problems]. Propose no more than six criteria, say what problem each criterion
addresses, and describe how the team could check each one in under a minute.
Also suggest when the team should be allowed to start an item that does not meet
the definition. Do not copy any framework text. List your assumptions.
```

**Lên kế hoạch một buổi tỉa tồn đọng.**

```text
Plan a [length of time] pruning session for the backlog of [team name]. The
backlog has [number] items, and the oldest are [age]. The leave reasons we
use are [list]. Propose an agenda, the questions to ask about each old item, a
simple message to send to requesters whose items are removed, and the data to
record afterward. Point out ways the session could be gamed and how to catch
them. Do not invent statistics. List your assumptions.
```

**Tách công việc sản phẩm và dịch vụ trong một tồn đọng hỗn hợp.**

```text
Here is a sample of [number] items from our combined backlog in [tool name],
with fields [list of fields]. Classify each item as a held idea, a customer
promise with a service expectation, or unclear, and explain your reasoning. Then
suggest labels and a simple rule for routing future items. Report patterns, not
individuals, and do not guess at facts not present in the data. List your
assumptions and the items you could not classify.

[paste items, with personal data removed]
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn ghép đôi và các chủ đề lân cận cho một chỉ số tồn đọng bạn sắp giới thiệu.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chủ đề tồn đọng đã sửa giữ nhất quán các vectơ lợi dụng, rào chắn và tham chiếu chéo của nó.

## Điểm chính cần nhớ

- Một tồn đọng là một hàng đợi các lời hứa, nên hãy đọc kích thước và tuổi cùng nhau và cho thấy các hạng mục cũ nhất.
- Giữ các ý tưởng được giữ và lời hứa với khách hàng trong các góc nhìn riêng, vì chờ đợi có nghĩa khác nhau trong mỗi loại.
- Nhắm tới một cửa sổ ngắn công việc sẵn sàng và đo độ phủ tinh chỉnh trên các hạng mục sắp bắt đầu.
- Tỉa theo lịch, ghi lại vì sao các hạng mục rời đi, và coi tỷ lệ loại bỏ bằng không là một cảnh báo.
- Đặt mục tiêu cho tuổi và cửa sổ dịch vụ, không phải kích thước thô, và ghép mọi chỉ số tồn đọng với một rào chắn.
- Các chỉ số tồn đọng mô tả công việc đến một đội ra sao và được xử lý thế nào, và không bao giờ xếp hạng con người.

## Tài liệu tham khảo và đọc thêm

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
