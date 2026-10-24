# Chỉ số quản lý tri thức

**Hãy đo tri thức theo việc nó có được dùng và được tin cậy vào đúng lúc cần hay không, không phải theo việc có bao nhiêu thứ tồn tại: theo dõi tỷ lệ liên kết, tái sử dụng, độ mới và khả năng tìm thấy cùng nhau, và coi mỗi số đếm bài viết là một câu hỏi về công việc chứ không phải một điểm số.**

## Tổng quan và động lực

Một đội dịch vụ tích lũy tri thức mỗi ngày: cách khôi phục một dịch vụ, một thông báo lỗi gây nhầm lẫn thực sự có nghĩa là gì, cách lách nào đã hiệu quả lần trước. [Quản lý tri thức](https://en.wikipedia.org/wiki/Knowledge_management) là kỷ luật làm cho tri thức đó có sẵn cho người kế tiếp cần nó. Trong ITIL 4 (ấn bản 2019 của khung do AXELOS xuất bản, và nền tảng được ghi tài liệu rộng rãi cho cuốn sách này), quản lý tri thức là một thực hành riêng, và [ITIL](https://en.wikipedia.org/wiki/ITIL) cũng kỳ vọng nó hỗ trợ xử lý sự cố, xử lý vấn đề và bàn dịch vụ. Chủ đề này trình bày cách biết sự hỗ trợ đó có thật hay không.

Phần lớn đầu ra dùng được của quản lý tri thức kết thúc trong một [cơ sở tri thức](https://en.wikipedia.org/wiki/Knowledge_base): một kho các bài viết, sổ tay vận hành, bản ghi lỗi đã biết và các câu trả lời hướng dẫn ngắn. Một [sổ tay vận hành (runbook)](https://en.wikipedia.org/wiki/Runbook) là một tập các bước bằng văn bản cho một thao tác thường lệ hoặc một lần khôi phục. Bài viết là phần tường minh của điều một đội biết. [Tri thức ngầm](https://en.wikipedia.org/wiki/Tacit_knowledge) của những người có kinh nghiệm, như cảm giác rằng một báo động chỉ là nhiễu, không thể viết ra hoàn toàn, và không chỉ số nào trong chủ đề này đo nó trực tiếp.

Trong góc nhìn ITIL, tri thức là một tài sản được quản lý với vòng đời: được tạo, rà soát, công bố, sử dụng và cho nghỉ hưu. Trong góc nhìn linh hoạt, tài liệu phải xứng đáng có chỗ, trò chuyện và làm cặp mang lại rất nhiều, và tri thức bằng văn bản là sản phẩm phụ của việc hoàn tất công việc. Cả hai góc nhìn đồng ý về phép thử: tri thức có giúp ai đó giải quyết một vấn đề thật nhanh hơn hoặc tốt hơn khi không có nó không?

Phương pháp nối hai góc nhìn trực tiếp nhất là [Dịch vụ Lấy Tri thức làm Trung tâm (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), một phương pháp luận của Consortium for Service Innovation. Trong KCS, tri thức được nắm bắt và cải thiện như một phần của việc giải quyết vấn đề, không phải sau đó. Con người làm việc trong hai vòng. Vòng giải quyết là khoảnh khắc giải quyết: tìm một bài viết hiện có, tái sử dụng và cải thiện nó nếu tìm thấy, tạo một bài nếu không. Vòng tiến hóa là chu kỳ dài hơn nghiên cứu tri thức đang hoạt động ra sao và cải thiện hệ thống quanh nó. KCS cũng đề xuất các chỉ báo riêng, như tỷ lệ các hồ sơ đã giải quyết được liên kết với bài viết. Chủ đề này tóm tắt những ý tưởng đó theo cách trung lập về nhà cung cấp; các đội áp dụng KCS chính thức nên đọc hướng dẫn thực hành của chính Consortium.

Số bài viết trong một cơ sở tri thức là một kho hàng, không phải một kết quả, và nó tăng vì sự bỏ bê dễ như vì sự chăm sóc. Các chỉ số dưới đây thay vào đó gắn với một khoảnh khắc sử dụng: một hồ sơ đã đóng, một lần tìm kiếm, một phản ứng của người đọc. Ngay cả những cái đó cũng có thể bị bẻ cong (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Các thước đo liên hệ và xử lý thuộc về [bàn dịch vụ](https://en.wikipedia.org/wiki/Service_desk) (xem chủ đề 3.1, Chỉ số bàn dịch vụ). Khối lượng và mẫu hình lặp lại đến từ dữ liệu sự cố (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố). Mức thành công tự phục vụ, nơi người dùng đọc bài viết mà không cần nhân viên, được trình bày riêng (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa). Chủ đề này ở lại với sức khỏe của chính tri thức và việc những người giải quyết vấn đề dùng nó.

## Nguyên tắc chính

- **Đo việc sử dụng tại điểm làm việc.** Một bài viết được liên kết với một hồ sơ đã giải quyết hoặc được tìm thấy qua một lần tìm kiếm là bằng chứng của giá trị. Một bài viết chỉ tồn tại thì không.
- **Nắm bắt trong dòng công việc.** Tri thức viết trong lúc giải quyết thì mới hơn và rẻ hơn tri thức viết trong một đợt ghi tài liệu riêng, nên các chỉ số nên thưởng cho việc nắm bắt như một phần của hoàn tất công việc.
- **Đọc độ mới so với mức sử dụng.** Cũ không giống sai. Công sức rà soát thuộc về các bài viết được dùng thường xuyên, không phải trải đều trên một danh mục các trang phần lớn không ai đọc.
- **Lấy mẫu để kiểm tra sự phù hợp.** Một liên kết giữa một hồ sơ và một bài viết chỉ chứng minh ai đó đã tạo liên kết. Một mẫu nhỏ do con người đánh giá xem bài viết có thật sự phù hợp cho bạn biết liệu liên kết có ý nghĩa gì không.
- **Mô tả các đội và mảng tri thức, không bao giờ cá nhân.** Số đếm đóng góp theo người biến một tài sản chung thành một cuộc thi và dạy mọi người viết rác (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).
- **Ghép mọi chỉ số khối lượng với một tín hiệu chất lượng.** Tỷ lệ liên kết với sự phù hợp, tạo bài viết với bản trùng lặp, tái sử dụng với phản hồi của người đọc.

## Định nghĩa chỉ số

Bảng liệt kê bảy chỉ số. Các cửa sổ thời gian (như kỳ rà soát cho độ mới) là những lựa chọn mà một đội đưa ra và ghi lại; không giá trị nào ở đây là chuẩn so sánh. Xuyên suốt, "hồ sơ" nghĩa là một bản ghi sự cố hoặc yêu cầu dịch vụ trong công cụ ITSM (quản lý dịch vụ CNTT), và các sự cố lớn được báo cáo riêng để chúng không làm méo các tỷ lệ (xem chủ đề 3.4, Chỉ số sự cố lớn).

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ liên kết tri thức | Tỷ lệ các hồ sơ đã giải quyết có ít nhất một bài viết tri thức được gắn vào lúc giải quyết | số hồ sơ giải quyết trong kỳ có ít nhất một bài viết được liên kết / số hồ sơ giải quyết trong kỳ. Tính theo ngày giải quyết; loại trừ các sự cố lớn, các hồ sơ đóng là trùng lặp và các hồ sơ tự đóng không có công việc của con người | phần trăm | Công cụ ITSM: bảng liên kết hồ sơ và bài viết | Quản lý tri thức; quản lý sự cố | Định nghĩa hoàn thành gồm việc nắm bắt điều đã học | Hằng tuần cho đội; hằng tháng để rà soát |
| Tỷ lệ tái sử dụng | Tỷ lệ các liên kết bài viết trỏ đến một bài viết có sẵn thay vì một bài được tạo trong hồ sơ đó | số liên kết đến các bài viết đã tồn tại trước khi hồ sơ mở / tất cả liên kết bài viết được tạo trên các hồ sơ đã giải quyết trong kỳ. Loại trừ các liên kết thêm sau khi hồ sơ đóng | phần trăm | Công cụ ITSM: ngày tạo bài viết so với ngày mở hồ sơ | Quản lý tri thức; cải tiến liên tục | Tái sử dụng hơn làm lại; quyền sở hữu chung đối với mã và tài liệu của nó | Hằng tháng |
| Độ mới của bài viết | Tỷ lệ các bài viết đang dùng đã được rà soát, hoặc được dùng và xác nhận đúng, trong một cửa sổ rà soát nêu rõ | số bài viết đang dùng có ngày rà soát hoặc ngày dùng được xác nhận nằm trong cửa sổ / số bài viết đang dùng. Một bài viết đang dùng nếu nó được liên kết với một hồ sơ hoặc được người đọc xem trong 12 tháng qua (lựa chọn của đội); bản nháp và bài đã nghỉ hưu bị loại trừ | phần trăm | Siêu dữ liệu cơ sở tri thức và nhật ký lượt xem | Quản lý tri thức; bàn dịch vụ | Tinh chỉnh tồn đọng của tài liệu; hành động từ buổi nhìn lại | Hằng tháng |
| Tỷ lệ tìm kiếm không có kết quả | Tỷ lệ các lần tìm kiếm tri thức không trả về bài viết nào | số lần tìm kiếm có không kết quả / tất cả lần tìm kiếm. Loại trừ các lần tìm kiếm của bot và kiểm tra tự động; đếm mỗi lần tìm kiếm một lần ngay cả khi lặp lại trong vòng một phút | phần trăm | Nhật ký tìm kiếm của cơ sở tri thức hoặc cổng | Quản lý tri thức; bàn dịch vụ; quản lý yêu cầu dịch vụ | Khám phá nhu cầu người dùng chưa được đáp ứng; đầu vào tồn đọng | Hằng tuần |
| Tỷ lệ hữu ích | Tỷ lệ phản hồi của người đọc nói bài viết đã giúp, hiển thị kèm tỷ lệ phản hồi | số phiếu hữu ích / (số phiếu hữu ích + số phiếu không hữu ích) cho các bài viết trong kỳ; tỷ lệ phản hồi = số phiếu phản hồi / số lượt xem bài viết | phần trăm, kèm tỷ lệ phản hồi | Tiện ích phản hồi của cơ sở tri thức và nhật ký lượt xem | Quản lý tri thức; trải nghiệm khách hàng | Phản hồi từ rà soát cùng các bên liên quan về tài liệu | Hằng tháng |
| Thời gian đến khi công bố | Thời gian trôi qua từ lúc một bản nháp bài viết được tạo đến lúc nó được rà soát và hiển thị với khán giả của nó | đồng hồ bắt đầu khi tạo bản nháp, dừng khi công bố (hoặc ở trạng thái hiển thị đã duyệt đầu tiên). Loại trừ thời gian ở trạng thái "giữ lại, chờ phát hành sản phẩm"; báo cáo dưới dạng trung vị và bách phân vị thứ 85 | ngày (trung vị và bách phân vị thứ 85) | Lịch sử quy trình của cơ sở tri thức | Quản lý tri thức | Thời gian chờ của một hạng mục công việc từ bắt đầu đến xong (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy) | Hằng tháng |
| Độ rộng đóng góp | Độ trải của việc tạo và cải thiện bài viết khắp đội, đo mà không nêu tên người | số người đóng góp phân biệt đã tạo hoặc cải thiện một bài viết trong kỳ / số thành viên đội đã giải quyết hồ sơ trong kỳ. Chỉ báo cáo cho một đội, không bao giờ như một danh sách tên | phần trăm | Lịch sử chỉnh sửa của cơ sở tri thức ghép với thành viên đội | Quản lý tri thức; cải tiến liên tục | Quyền sở hữu tập thể; làm cặp và xúm lại | Hằng quý |

Tỷ lệ liên kết tri thức có một đồng hồ dễ bị bỏ sót. Liên kết phải tồn tại khi hồ sơ được giải quyết, không phải khi ai đó dọn dẹp một tuần sau, vì liên kết muộn đo việc dọn dẹp và không cho bạn biết gì về việc sử dụng trong lúc giải quyết. Tỷ lệ tái sử dụng phụ thuộc vào một ngày tạo bài viết đáng tin. Nếu các bài viết được di chuyển hoặc nhập hàng loạt, ngày tạo của chúng bị đặt lại và tỷ lệ sẽ gây hiểu lầm cho đến khi việc di chuyển được đánh dấu.

## Khuyến nghị

### Quyết định tri thức dùng để làm gì

**1. Gắn mỗi chỉ số tri thức với một trường hợp sử dụng.** Hãy nêu tên những người mà tri thức phục vụ: nhân viên bàn dịch vụ giải quyết ngay lần liên hệ đầu, kỹ sư trực ca xử lý một cảnh báo, hoặc người dùng tự giúp mình. Mỗi khán giả cần các thước đo khác nhau. Một sổ tay vận hành cho kỹ sư trực ca được đánh giá bằng việc các bước có khôi phục dịch vụ không, trong khi một bài viết đặt lại mật khẩu được đánh giá bằng việc người dùng có ngừng liên hệ bàn không. Hãy ghi nó vào sổ đăng ký của bạn (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

**2. Bắt đầu với tỷ lệ liên kết và sự phù hợp, không phải số đếm bài viết.** Tỷ lệ liên kết cho thấy tri thức có vào khoảnh khắc giải quyết không. Hãy ghép nó từ đầu với một mẫu nhỏ hằng tháng trong đó một người đọc 20 hoặc 30 hồ sơ đã liên kết và đánh giá bài viết có phù hợp không. Một tỷ lệ liên kết 70 phần trăm với một nửa liên kết không phù hợp tệ hơn một tỷ lệ liên kết 40 phần trăm với các liên kết trung thực, vì cái đầu giấu khoảng trống tri thức mà cái sau làm lộ.

**3. Tách "không có bài viết nào" khỏi "có bài viết nhưng không tìm thấy".** Khi một hồ sơ đóng mà không có liên kết, các lý do khác nhau và các bản sửa cũng vậy. Hãy thêm một lựa chọn đóng ngắn, như "không có bài viết nào" và "không tìm thấy bài viết", và báo cáo chúng như tỷ lệ của các hồ sơ không liên kết. Cái đầu chỉ vào nội dung cần viết; cái thứ hai chỉ vào tìm kiếm, đặt tên và cấu trúc. Hãy để lựa chọn này là tùy chọn nơi nó làm chậm bàn, và thay vào đó lấy mẫu.

### Nắm bắt tri thức khi công việc kết thúc

**4. Biến việc nắm bắt thành một phần của định nghĩa hoàn thành.** Trong một đội linh hoạt, một hạng mục công việc thay đổi cách một dịch vụ hành xử chưa xong cho đến khi sổ tay vận hành, bản ghi lỗi đã biết hoặc bài viết trợ giúp được cập nhật. Ở bàn dịch vụ, một hồ sơ cần khám phá chưa được giải quyết cho đến khi khám phá được nắm bắt hoặc một bài viết hiện có được cải thiện. Đây là ý tưởng KCS về làm việc trong vòng giải quyết, và nó giữ chi phí viết thấp vì người viết có ngữ cảnh còn mới.

**5. Cho phép một trạng thái bản nháp nhẹ.** Nhiều đội mất tri thức vì mỗi bài viết phải qua một buổi rà soát nặng trước khi ai thấy được. Thực hành kiểu KCS phân biệt một bài viết đang làm dở, hiển thị với đội, với một bài đã được xác thực, hiển thị với khán giả rộng hơn. Hãy đo thời gian đến khi công bố cho cả hai giai đoạn riêng, dưới dạng trung vị và bách phân vị thứ 85, để các buổi rà soát chậm hiện ra như một hàng đợi thay vì một lời phàn nàn mơ hồ (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**6. Ưu tiên cải thiện hơn tạo mới.** Một đống ngày càng lớn các bài viết gần trùng làm tìm kiếm tệ hơn và độ mới khó duy trì hơn. Hãy theo dõi tỷ lệ tái sử dụng cùng số đếm tạo bài, và khi việc tạo tăng trong khi tái sử dụng giảm, hãy tìm các bản trùng lặp. Làm cho việc gộp và cho nghỉ hưu dễ dàng và hiển thị, và tính một lần gộp là một đóng góp tích cực.

### Giữ tri thức hiện hành và tìm thấy được

**7. Rà soát các bài viết được dùng.** Tập trung công sức rà soát nơi mức sử dụng cao. Sắp xếp các bài viết đang dùng theo mức độ thường xuyên được liên kết hoặc xem, và đặt một cửa sổ rà soát cho nhóm hàng đầu ngắn hơn cho cái đuôi dài. Một bài viết cũ mà không ai đọc tốn ít; một bài viết cũ xuất hiện trong một phần ba số lần giải quyết có thể làm hàng trăm hồ sơ đi sai. Hãy báo cáo độ mới cho nhóm được dùng nhiều thành một dòng riêng để giá trị trung bình của cả cơ sở không giấu nó.

**8. Coi các lần tìm kiếm thất bại là hạng mục tồn đọng.** Hãy đọc các lần tìm kiếm không có kết quả thường xuyên nhất mỗi tháng và quyết định với từng cái liệu có nên viết một bài viết, thêm một từ đồng nghĩa, đổi tên một bài viết, hay chấp nhận rằng câu hỏi thuộc về nơi khác. Điều này biến một chỉ số thành một danh sách ngắn, cụ thể mà đội làm được. Nó cũng cho thấy vốn từ thật, vì người dùng và nhân viên hiếm khi dùng những từ mà danh mục dịch vụ dùng.

**9. Đọc những lời đằng sau các phiếu bầu.** Tỷ lệ hữu ích rẻ và nhiễu. Tỷ lệ phản hồi thường thấp và nghiêng về những ý kiến mạnh. Hãy cho thấy tỷ lệ phản hồi bên cạnh tỷ lệ hữu ích, và đọc các bình luận bằng văn bản trên các bài viết được xem nhiều nhất trong một buổi rà soát thường trực. Một bình luận đơn lẻ như "bước 4 không còn tồn tại trong phiên bản mới" đáng giá hơn một nghìn phiếu bầu không nhãn.

**10. Nối tri thức với vấn đề và hậu kiểm.** Một sự cố lặp lại được giải quyết nhiều lần bằng cùng một bài viết là tín hiệu cho quản lý vấn đề, vốn tìm nguyên nhân bên dưới và có thể loại bỏ nhu cầu về bài viết (xem chủ đề 4.1, Chỉ số quản lý vấn đề). Bản ghi lỗi đã biết và bài học hậu kiểm là tài sản tri thức với vòng đời riêng (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi, và chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết). Hãy xem mười bài viết được liên kết nhiều nhất mỗi quý và hỏi cái nào nên nghỉ hưu bằng cách sửa nguyên nhân.

### Quản trị mà không xếp hạng

**11. Báo cáo đóng góp ở cấp đội.** Độ rộng đóng góp cho bạn biết công việc tri thức được chia sẻ hay tập trung ở hai người. Đó là một rủi ro đáng thấy, vì nó là cùng mẫu hình với một [hệ số xe buýt](https://en.wikipedia.org/wiki/Bus_factor) bằng hai. Nó không bao giờ được biến thành bảng xếp hạng các tác giả, điều sẽ thưởng cho số lượng chỉnh sửa và dạy mọi người tách bài viết hay thực hiện những thay đổi tầm thường. Nếu một sự tập trung xuất hiện, hãy coi nó là cuộc trò chuyện của đội về thời gian, hỗ trợ và sự cho phép để viết (xem chủ đề 9.4, Chỉ số kỹ năng và học tập).

**12. Cho nghỉ hưu những chỉ số không còn giúp ích.** Nếu không ai hành động theo tỷ lệ liên kết, hãy chuyển sự chú ý sang sự phù hợp hoặc độ mới của nhóm được dùng nhiều. Ghi lại mọi thay đổi định nghĩa kèm lý do, vì một công thức đã đổi phá vỡ đường xu hướng (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

## Vectơ lợi dụng và rào chắn

Mọi chỉ số trong bảng định nghĩa xuất hiện ở đây. Các chỉ số tri thức đặc biệt dễ bị lộ vì hành động liên kết hay rà soát chỉ là một cú nhấp nhanh, trong khi giá trị thật nằm ở nội dung.

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ liên kết tri thức | Gắn một bài viết bất kỳ, thường là một bài chung chung hoặc rất phổ biến, vào mọi hồ sơ trước khi đóng; liên kết sau sự việc hàng loạt | Mẫu sự phù hợp hằng tháng của các hồ sơ đã liên kết; tỷ lệ liên kết đi đến cùng vài bài viết; dấu thời gian liên kết so với dấu thời gian giải quyết |
| Tỷ lệ tái sử dụng | Tạo một bài viết mới cho mỗi hồ sơ rồi liên kết ngay để lần sau nó được tính là tái sử dụng; hoặc không bao giờ tạo để tỷ lệ trông hoàn hảo | Tỷ lệ bài viết trùng lặp tìm thấy qua một lần tìm kiếm định kỳ; tỷ lệ hồ sơ đóng với lý do "không có bài viết nào" |
| Độ mới của bài viết | Đánh dấu bài viết là đã rà soát mà không kiểm tra; đặt lại ngày rà soát qua các chỉnh sửa tầm thường; chỉ đếm các bài viết dễ rà soát | Mẫu các bài viết vừa rà soát được thử so với dịch vụ thật; tỷ lệ hữu ích và bình luận bằng văn bản trên cùng các bài viết |
| Tỷ lệ tìm kiếm không có kết quả | Thêm các bài viết mơ hồ hoặc gom hết khớp với mọi truy vấn; nhồi từ khóa; loại các từ tìm kiếm khó khỏi nhật ký | Nhấp chuột rồi theo sau là một liên hệ về cùng chủ đề trong một cửa sổ ngắn; tỷ lệ hữu ích; đọc bằng tay các từ tìm kiếm hàng đầu |
| Tỷ lệ hữu ích | Chỉ nhắc những người đọc hài lòng bỏ phiếu; giấu lựa chọn không hữu ích; bỏ phiếu từ bên trong đội | Tỷ lệ phản hồi và cơ cấu người trả lời hiển thị cùng tỷ lệ; bình luận bằng văn bản; tỷ lệ liên hệ sau khi đọc bài viết |
| Thời gian đến khi công bố | Công bố một bản sơ sài để dừng đồng hồ; tách một bài viết thành các mảnh; chuyển bản nháp sang trạng thái mà đồng hồ loại trừ | Sự phù hợp và mức hữu ích của các bài viết mới công bố; số đếm và tuổi của bản nháp ở các trạng thái bị loại |
| Độ rộng đóng góp | Thực hiện các chỉnh sửa tầm thường để mọi người trông như người đóng góp; yêu cầu mọi người thêm một câu để đạt chỉ tiêu | Kích thước và nội dung các chỉnh sửa được lấy mẫu; tái sử dụng và mức hữu ích của các bài viết đã đóng góp; không có tên trong báo cáo |

Một kết quả đọc lành mạnh cho thấy các bài viết được liên kết mà một mẫu do con người xác nhận là phù hợp, một tỷ lệ tái sử dụng tăng khi cơ sở trưởng thành, một tập các bài viết được dùng nhiều với các buổi rà soát được xác minh gần đây, một danh sách ngắn các lần tìm kiếm thất bại mà đội đang xử lý, và đóng góp trải khắp đội. Một số hồ sơ không có bài viết, vì chúng thật sự mới, là dấu hiệu của một cơ sở trung thực, không phải một cơ sở thất bại.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Nhắm mục tiêu một tỷ lệ liên kết cao | Đẩy việc nắm bắt và tái sử dụng vào thói quen hằng ngày; đơn giản để hiểu | Mời gọi các liên kết vô nghĩa; che giấu khoảng trống nơi không có bài viết |
| Lấy mẫu sự phù hợp bằng tay | Cho thấy liên kết có ý nghĩa gì không; xây dựng tiêu chuẩn chung | Tốn thời gian của nhân viên phân tích; mẫu nhỏ nhiễu; phụ thuộc vào phán đoán của người lấy mẫu |
| Rà soát mọi thứ theo lịch cố định | Dễ lập kế hoạch và kiểm toán; áp dụng đều | Tốn công sức vào các bài viết không ai đọc; bỏ bê những bài được dùng nhiều |
| Rà soát theo mức sử dụng | Hướng công sức đến nơi tri thức sai gây hại nhất | Cần dữ liệu lượt xem và liên kết đáng tin; các bài viết ở cái đuôi dài có thể mục nát mà không ai thấy |
| Áp dụng KCS chính thức | Cho một tập thực hành và chỉ báo mạch lạc, đã được kiểm chứng | Cần đầu tư bền vững, huấn luyện và hỗ trợ công cụ; nặng cho một đội rất nhỏ |
| Trò chuyện và làm cặp thay vì bài viết | Truyền phán đoán và bối cảnh; chi phí chung thấp | Không mở rộng được qua các ca, kỳ nghỉ và biến động nhân sự; tri thức ra đi cùng con người |

Hãy đo vừa đủ để thấy tri thức có được dùng và được tin cậy không, và dành công sức tiết kiệm được cho nội dung. Với một đội nhỏ, một tỷ lệ liên kết kèm mẫu sự phù hợp hằng tháng và một danh sách ngắn các lần tìm kiếm thất bại là một chương trình hoàn chỉnh. Với một bàn lớn, bộ đầy đủ chỉ sinh lời nếu có ai sở hữu việc rà soát và hành động theo nó.

## Câu hỏi để thảo luận với đội nhóm

**1. Lần gần nhất chúng ta giải quyết một hồ sơ khó, tri thức đến từ đâu, và sau đó nó đi đâu?**
Chọn một hồ sơ gần đây tốn công sức thật và truy con đường của điều đã học. Có tìm thấy một bài viết, hỏi một đồng nghiệp, hay tự tìm ra câu trả lời từ đầu? Hỏi liệu người kế tiếp có cùng vấn đề có tìm được câu trả lời trong chưa đầy năm phút không. Người điều phối nên tìm khoảng cách giữa điều đội biết và điều cơ sở tri thức giữ.

**2. Nếu chúng ta nâng tỷ lệ liên kết lên một mục tiêu nêu rõ vào tháng tới, chúng ta làm được thế nào mà không giúp ai?**
Hãy làm danh sách lợi dụng tường minh và coi nó là đầu vào thiết kế thay vì một lời buộc tội. Các câu trả lời phổ biến là liên kết một bài viết chung chung, liên kết hàng loạt lúc đóng, và chọn bài viết phổ biến nhất. Với mỗi câu trả lời, hỏi rào chắn nào trong bảng sẽ bắt được nó và nhanh đến đâu. Người điều phối nên ra về với ít nhất một phép kiểm tra mới, như một mẫu sự phù hợp hằng tháng, và một người sở hữu cho nó.

**3. Năm bài viết nào chúng ta dựa vào nhiều nhất, và lần cuối chúng được xác minh so với dịch vụ thật là khi nào?**
Xem các bài viết được liên kết và xem nhiều nhất và cùng đọc to hai bài. Cuộc trò chuyện thường cho thấy các bài viết có tác động lớn nhất là những bài ít được chăm sóc nhất, đó là lập luận cho việc rà soát theo mức sử dụng.

**4. Mọi người đang tìm kiếm gì mà chúng ta không có?**
Mang các lần tìm kiếm không kết quả hàng đầu và các lý do hồ sơ không liên kết. Nhóm chúng thành các bài viết cần viết, từ cần thêm, và câu hỏi thuộc về đội khác. Người điều phối nên ghi lại một danh sách ngắn gồm ba hạng mục kế tiếp và lên kế hoạch chúng sẽ được viết ra sao trong công việc bình thường, không phải trong một dự án đặc biệt.

**5. Ai viết tri thức của chúng ta, và việc đó tốn của họ gì?**
Hãy thảo luận về việc nắm bắt một cách trung thực. Viết có được coi là một phần của công việc hay là công việc thêm sau công việc? Hỏi điều gì làm nó chậm: một mẫu nặng, một buổi rà soát chậm, nỗi sợ sai, hay không còn thời gian cuối một ca vất vả. Người điều phối nên tránh xa việc đuổi theo cá nhân và hướng tới những thay đổi trong công cụ, thời gian và sự cho phép.

**6. Bài viết nào của chúng ta nên ngừng cần thiết?**
Lấy các bài viết được tái sử dụng nhiều nhất và hỏi chúng đang lách quanh nguyên nhân tái diễn nào. Một quy trình đặt lại dùng 200 lần mỗi tháng có thể là triệu chứng của một lỗi trong sản phẩm, một màn hình gây nhầm lẫn hoặc một tự động hóa còn thiếu. Quyết định hạng mục nào giao cho quản lý vấn đề hoặc đội sản phẩm, và hạng mục nào để tự động hóa (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa). Người điều phối nên ghi nhận rằng kết quả tốt nhất của công việc tri thức tốt đôi khi là ít bài viết hơn.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối tạo ra phần lớn tri thức mà một dịch vụ sẽ cần: một tính năng hành xử ra sao, một lỗi mới có nghĩa là gì, cách hoàn tác. Nếu tri thức đó không được nắm bắt trước khi phát hành, bàn dịch vụ và các đội trực ca học nó một cách khó khăn. Hãy đưa sổ tay vận hành và bài viết trợ giúp vào định nghĩa hoàn thành, và theo dõi tỷ lệ liên kết và các lần tìm kiếm thất bại cho các dịch vụ bạn sở hữu như phản hồi. Khi cùng một bài viết được liên kết nhiều lần, hãy coi nó là một báo cáo lỗi về sản phẩm, không phải thành công của tài liệu.

### Đội dịch vụ và vận hành

Các đội bàn dịch vụ và vận hành là những người tạo ra và tiêu thụ chính của cơ sở tri thức, nên các chỉ số phần lớn là của họ để dùng. Hãy làm việc trong vòng giải quyết một cách trung thực: tìm trước, tái sử dụng và cải thiện, tạo khi không có gì phù hợp. Dùng tỷ lệ liên kết kèm một mẫu sự phù hợp, và đọc các lần tìm kiếm không kết quả như một tồn đọng. Tránh mọi bảng xếp hạng tác giả hay người chỉnh sửa, vì cơ sở tri thức là một công cụ chung và số đếm cá nhân làm hại nó (xem chủ đề 3.1, Chỉ số bàn dịch vụ).

### Lãnh đạo và quản trị

Lãnh đạo quyết định công việc tri thức có được dành thời gian không, nên họ quyết định chất lượng của tri thức. Hãy yêu cầu mẫu sự phù hợp và độ mới của các bài viết được dùng nhiều trước khi yêu cầu số đếm bài viết. Chống lại các mục tiêu về tỷ lệ liên kết hay tạo bài viết mà không có rào chắn, và chờ nghe khi các con số giảm vì lý do chính đáng, như một tập bản trùng lặp đã được gộp. Hãy tài trợ cho việc rà soát các bài viết dùng nhiều và các bản sửa khiến bài viết không còn cần thiết.

### Khách hàng và người dùng

Người dùng gặp tri thức qua tìm kiếm, một cổng, một chatbot, hay câu trả lời một nhân viên đưa cho họ. Điều họ để ý là liệu câu trả lời đầu tiên có đúng không và họ có phải lặp lại chính mình không. Phản hồi của chính họ về các bài viết, các lần tìm kiếm trống rỗng của họ, và các liên hệ lặp lại của họ là các rào chắn tốt nhất cho mọi thứ trong chủ đề này. Nếu người dùng được yêu cầu đánh giá bài viết, hãy nói với họ điều gì xảy ra với phản hồi, và hành động theo nó một cách hiển thị (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một công ty bảo hiểm cỡ vừa vận hành một bàn dịch vụ CNTT nội bộ với khoảng một chục nhân viên, hỗ trợ nhân viên trên nhiều văn phòng. Bàn chia sẻ một cơ sở tri thức với hai đội sản phẩm sở hữu ứng dụng giải quyết bồi thường và cổng tài liệu. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Lãnh đạo yêu cầu giải quyết ngay lần liên hệ đầu tốt hơn (xem chủ đề 3.1, Chỉ số bàn dịch vụ) và đặt một mục tiêu cho tỷ lệ liên kết tri thức là 60 phần trăm, tăng từ mức minh họa 38 phần trăm. Trong sáu tuần, bảng điều khiển cho thấy 64 phần trăm. Trưởng bàn dịch vụ không bị thuyết phục, vì nhân viên vẫn phàn nàn rằng họ không tìm được câu trả lời, và một trưởng đội sản phẩm nhắc rằng ba trong các bài viết chị sở hữu xuất hiện trên hầu hết các hồ sơ đã đóng.

Đội chạy một buổi rà soát lợi dụng và một mẫu sự phù hợp. Họ đọc 30 hồ sơ đã liên kết, chọn ngẫu nhiên từ tháng trước, và đánh giá bài viết có phù hợp với hồ sơ không. Theo một số đếm minh họa, 11 trong 30 liên kết đến một bài viết chung "Cách ghi một phiếu" hoặc một tổng quan mạng chung không giải quyết vấn đề. Họ cũng thấy các liên kết được tạo trong vài giây sau khi đóng hồ sơ, một mẫu hình gợi ý thói quen chứ không phải sử dụng. Trưởng bàn nhìn tỷ lệ tái sử dụng, đang tăng, và tỷ lệ hồ sơ không liên kết với lý do "không có bài viết nào", đã giảm gần về không, vì nhân viên giờ chọn bài viết gần nhất. Khoảng trống trong tri thức đã trở nên vô hình.

Đội đưa ra ba quyết định. Thứ nhất, mục tiêu tỷ lệ liên kết bị rút lại và thay bằng một góc nhìn đã điều chỉnh theo sự phù hợp: tỷ lệ liên kết được báo cáo cạnh tỷ lệ mẫu các liên kết phù hợp, và lý do đóng "không có bài viết nào" được làm dễ chọn và không bị coi là thất bại. Thứ hai, các lần tìm kiếm không kết quả được đọc mỗi tháng, và năm cái hàng đầu trở thành các nhiệm vụ viết kế tiếp, chia sẻ khắp bàn. Thứ ba, 20 bài viết được liên kết nhiều nhất được rà soát về độ mới trong một tháng, do đội sản phẩm liên quan sở hữu, và bất kỳ bài viết nào được liên kết với hơn một phần tư số hồ sơ của một dịch vụ được chuyển cho quản lý vấn đề làm ứng viên cho một bản sửa vĩnh viễn (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

Hai tháng sau, tỷ lệ liên kết tiêu đề đã giảm trở lại mức minh họa 51 phần trăm, cảm giác như tin xấu. Sự phù hợp được lấy mẫu đã tăng từ 63 phần trăm lên 85 phần trăm theo cách nói minh họa, tỷ lệ tìm kiếm không kết quả đã giảm, và một vấn đề đăng nhập lặp lại với cổng tài liệu đã được sửa tại nguyên nhân của nó, điều làm ba bài viết nghỉ hưu. Trưởng bàn đề nghị lãnh đạo đánh giá chương trình theo sự phù hợp và các cách lách đã nghỉ hưu, không phải theo tỷ lệ liên kết thô.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy coi tri thức là sản phẩm phụ của việc giải quyết vấn đề, với phản hồi ngắn từ người dùng về việc bài viết có giúp ích không. Điều cần lưu ý là các mục tiêu số đếm bài viết tạo ra nội dung mỏng, trùng lặp.

### AI

AI có thể soạn bài viết, trả lời câu hỏi từ cơ sở tri thức và làm lộ khoảng trống, điều làm tăng số đếm bài viết và mức sử dụng trong khi chất lượng có thể giảm. Hãy ghép tỷ lệ liên kết và tái sử dụng với tỷ lệ hữu ích và với tỷ lệ các bài viết do AI soạn mà một người đã rà soát trước khi công bố. Điều cần lưu ý là một bài viết cũ hoặc sai được AI phục vụ một cách tự tin làm nhân rộng lỗi.

### Tự động hóa

Hãy thu nhận các sự kiện tìm kiếm, xem và liên kết một cách tự động, và tự động hóa các lời nhắc độ mới cho người sở hữu. Hãy đo tự động hóa theo bao nhiêu lời nhắc dẫn đến một bản cập nhật. Điều cần lưu ý là việc hết hạn tự động hủy công bố các bài viết có thể xóa nội dung hữu ích.

### Phân tích

Hãy dùng nhật ký tìm kiếm để thấy các truy vấn không kết quả, và cho thấy mức hữu ích kèm số phản hồi. Quyết định được cung cấp thông tin là viết, sửa hay cho nghỉ hưu bài viết nào. Điều cần lưu ý là lượt xem một bài viết không giống như sự giúp đỡ nhận được.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Tri thức sống trong vài cái đầu và trong lịch sử trò chuyện. Hãy viết một danh sách ngắn các sổ tay vận hành cho những gì hỏng vào ban đêm, và ghi lại bản sửa sau mỗi sự cố. Một lần kiểm tra hằng tháng rằng các sổ tay hàng đầu vẫn hoạt động là đủ để đo.

**Doanh nghiệp nhỏ.** Một người thường là bàn dịch vụ, quản trị viên và người sở hữu tri thức. Rủi ro là hệ số xe buýt, vì tri thức biến mất nếu người đó biến mất. Hãy dùng một kho chung đơn giản, giữ bài viết ngắn, và để một nhà thầu hoặc đồng nghiệp thử các quy trình chính. Một lần đọc lại đều đặn các trang được dùng nhiều nhất thắng mọi bảng điều khiển.

**Doanh nghiệp lớn.** Quy mô mang theo các bài viết trùng lặp và chất lượng không đều. Hãy dùng các định nghĩa chung cho tỷ lệ liên kết, độ mới và tái sử dụng, báo cáo theo dịch vụ và theo đội, và chỉ định người sở hữu cho các bài viết dùng nhiều. Tránh so sánh các đội, vì cơ cấu dịch vụ và tuổi của cơ sở khác nhau.

**Chính phủ và khu vực công.** Quy tắc hồ sơ, yêu cầu khả năng tiếp cận và kỳ vọng kiểm toán có thể chi phối cách tri thức được lưu trữ, rà soát và cho nghỉ hưu. Hãy coi những điều này là đầu vào thiết kế: giữ một dấu vết phê duyệt cho các bài viết ảnh hưởng đến công dân, và công bố nội dung có thể tiếp cận. Phản hồi và các lần tìm kiếm thất bại từ công dân đặc biệt có giá trị (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của các chỉ số tri thức khiêm tốn. Dữ liệu công cụ thường đã có trong nền tảng ITSM và cơ sở tri thức. Các chi phí chính là thời gian để định nghĩa các thước đo, mẫu hằng tháng nhỏ kiểm tra sự phù hợp, thời gian rà soát cho các bài viết dùng nhiều, và kỷ luật nắm bắt tri thức trong lúc giải quyết vấn đề. Nếu nền tảng tri thức thiếu dữ liệu liên kết hoặc tìm kiếm dùng được, chi phí đo nó nên được gồm vào (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

Lợi tức là một mẫu hình, và cuốn sách không trích dẫn một con số cho nó. Khi nhân viên tìm được một bài viết đúng nhanh chóng, việc giải quyết nhanh hơn và nhất quán hơn, nhân viên mới trở nên hữu ích sớm hơn, và các kỹ sư trực ca phụ thuộc ít hơn vào vài chuyên gia. Khi người dùng tự tìm câu trả lời, bàn nhận ít liên hệ lặp lại hơn cho các câu hỏi đã biết. Các chỉ số giúp bằng cách cho thấy tri thức bị thiếu, cũ hoặc không dùng ở đâu, để thời gian viết khan hiếm đi vào các bài viết quan trọng.

Tổng chi phí sở hữu gồm việc bảo trì. Bài viết thối rữa khi dịch vụ thay đổi, nên thời gian rà soát là một chi phí liên tục, và một chương trình bỏ qua nó sẽ phóng đại lợi ích. Để ước lượng lợi tức cho đội của riêng bạn, hãy so sánh một mẫu các hồ sơ của chính bạn trước và sau, và gắn nhãn các giả định của bạn.

## Phản mẫu và cạm bẫy

- **Đếm bài viết hoặc lượt xem là thành công.** Khối lượng tăng cùng sự bừa bộn và lượt xem có thể báo hiệu sự nhầm lẫn. Hãy đo việc sử dụng trong giải quyết, sự phù hợp và phản hồi thay vào đó.
- **Mục tiêu tỷ lệ liên kết không kiểm tra sự phù hợp.** Mọi người sẽ gắn bất kỳ bài viết nào. Hãy lấy mẫu các hồ sơ đã liên kết hằng tháng và báo cáo tỷ lệ phù hợp bên cạnh tỷ lệ.
- **Xếp hạng tác giả hoặc người chỉnh sửa.** Số đếm cá nhân tạo ra các chỉnh sửa mỏng và việc tách bài viết. Hãy báo cáo độ rộng đóng góp cho đội và thảo luận nó như một câu hỏi về năng lực.
- **Rà soát mọi bài viết theo một lịch cố định.** Công sức đi vào các trang không ai đọc. Hãy rà soát theo mức sử dụng và cho nghỉ hưu những bài không dùng.
- **Công bố bản sơ sài để dừng đồng hồ.** Một bài viết nhanh, mỏng làm hỏng thời gian đến khi công bố. Hãy ghép nó với mức hữu ích và tỷ lệ liên hệ theo dõi.
- **Bỏ qua các lần tìm kiếm thất bại.** Tìm kiếm thất bại là tín hiệu rõ ràng nhất của nhu cầu chưa được đáp ứng. Hãy đọc chúng mỗi tháng và biến các hạng mục hàng đầu thành công việc.
- **Tách tri thức khỏi công việc.** Một dự án ghi tài liệu cuối quý tạo ra các trang cũ. Hãy nắm bắt trong lúc giải quyết và trong định nghĩa hoàn thành.
- **Coi cơ sở tri thức là vĩnh viễn.** Nội dung thối rữa. Hãy biến việc cho nghỉ hưu và gộp thành thường lệ và được ghi nhận.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Nắm bắt và liên kết | Tri thức sống trong đầu và trò chuyện; liên kết hiếm | Một số đội liên kết bài viết với hồ sơ, thực hành khác nhau | Một quy tắc bằng văn bản cho liên kết và nắm bắt; lý do đóng được ghi lại | Tỷ lệ liên kết và mẫu sự phù hợp được rà soát hằng tháng và gắn với cải tiến | Nắm bắt là một phần của quy trình xuyên bàn, vận hành và các đội sản phẩm; định nghĩa được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Độ mới và quyền sở hữu | Không có người sở hữu; bài viết già đi không ai thấy | Người sở hữu được nêu tên cho các dịch vụ chính | Cửa sổ rà soát được đặt, ngắn hơn cho các bài viết dùng nhiều | Độ mới của các bài viết dùng nhiều được theo dõi xu hướng và tài trợ | Trách nhiệm rà soát được chia sẻ với nhà cung cấp và các đội sản phẩm; nghỉ hưu là thường lệ |
| Khả năng tìm thấy và phản hồi | Tìm kiếm ngẫu hứng; không có dữ liệu tìm kiếm | Nhật ký tìm kiếm tồn tại nhưng không được đọc | Các lần tìm kiếm không kết quả và phản hồi của người đọc được rà soát theo nhịp cố định | Tìm kiếm thất bại thúc đẩy một tồn đọng và được ghép với dữ liệu liên hệ | Người dùng, nhân viên và chatbot lấy từ một nguồn tri thức; phản hồi thay đổi nội dung một cách hiển thị |
| Sử dụng trong cải tiến | Các chỉ số, nếu có, là số đếm | Số đếm được cho đội thấy | Các chỉ số ghép với rào chắn và cho đội thấy trước | Các bài viết được liên kết nhiều nuôi quyết định về quản lý vấn đề và tự động hóa | Tồn đọng tri thức, vấn đề và sản phẩm được quản lý cùng nhau giữa các đội |

## Danh sách kiểm tra

- [ ] Mỗi chỉ số tri thức nêu tên khán giả mà nó phục vụ và quyết định mà nó cung cấp thông tin.
- [ ] Tỷ lệ liên kết có một định nghĩa bằng văn bản, gồm đồng hồ, các trường hợp loại trừ và cách xử lý sự cố lớn.
- [ ] Một mẫu hằng tháng kiểm tra rằng các bài viết được liên kết phù hợp với các hồ sơ.
- [ ] Việc đóng hồ sơ ghi "không có bài viết nào" và "không tìm thấy bài viết" như hai lý do riêng biệt.
- [ ] Thời gian đến khi công bố được báo cáo dưới dạng trung vị và một bách phân vị cao, với các giai đoạn bản nháp và đã công bố được tách.
- [ ] Một cửa sổ rà soát được đặt cho các bài viết đang dùng, ngắn hơn cho các bài được dùng nhiều nhất.
- [ ] Các lần tìm kiếm không kết quả hàng đầu được đọc mỗi tháng và biến thành hạng mục tồn đọng.
- [ ] Phản hồi của người đọc được cho thấy kèm tỷ lệ phản hồi, và bình luận trên các bài viết hàng đầu được đọc.
- [ ] Đóng góp chỉ được báo cáo cho đội, không có danh sách có tên.
- [ ] Các bài viết được liên kết nhiều nhất được rà soát mỗi quý như ứng viên cho các bản sửa vĩnh viễn.
- [ ] Thay đổi định nghĩa được ghi lại kèm lý do.

## Lời nhắc AI

**Kiểm tra các bài viết được liên kết có phù hợp với hồ sơ của chúng không.**

```text
I run knowledge reviews for [team name], which supports [type of service]. Below
are [number] resolved cases, each with its summary, resolution notes, and the
title and text of the linked article. For each pair, judge whether the article
fits the case as a relevant answer, a partial answer, or an unrelated link, and
give a one-line reason. Report patterns by article and by service. Do not name
or rank individual analysts. Do not invent facts about the service. List your
assumptions and anything you could not judge from the text.

[paste cases and articles with personal data removed]
```

**Biến các lần tìm kiếm thất bại thành một tồn đọng viết.**

```text
Here are the most frequent searches in [knowledge base or portal name] that
returned no results in [period]: [list of search terms with counts]. Group them
into themes. For each theme, suggest whether it needs a new article, a synonym
or rename of an existing article ([list of related article titles]), a link to
another team, or no action. Do not invent articles or facts about our systems.
List your assumptions and the questions I should answer before writing anything.
```

**Thiết kế một tập nhẹ các thước đo tri thức.**

```text
Design a small set of knowledge management measures for [team name], a
[team size] team using [ITSM tool] and [knowledge tool]. Our main goal is
[goal, such as faster first contact resolution or less dependence on experts].
For each measure give the definition, the clock or boundary, the data source,
the likely gaming vector, and a guardrail. Do not propose individual
rankings, invent benchmark values, or cite sources. List your assumptions and
the data fields you would need that I did not mention.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề liên quan và rào chắn ghép đôi khi bạn thêm một chỉ số tri thức vào bảng điều khiển của mình.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số tri thức mang vectơ lợi dụng, rào chắn và tham chiếu chéo của nó theo đúng dạng.

## Điểm chính cần nhớ

- Đo tri thức tại khoảnh khắc sử dụng: được liên kết trong giải quyết, được tìm thấy qua tìm kiếm, được người đọc xác nhận.
- Ghép tỷ lệ liên kết với một mẫu sự phù hợp do con người thực hiện, vì một liên kết chỉ chứng minh ai đó đã nhấp chuột.
- Rà soát độ mới theo mức sử dụng, đặt công sức nơi một bài viết sai sẽ làm nhiều hồ sơ đi sai nhất.
- Coi các lần tìm kiếm thất bại và các bài viết được liên kết nhiều là tín hiệu cho nội dung mới, đặt tên tốt hơn hoặc một bản sửa vĩnh viễn.
- Báo cáo đóng góp cho đội và không bao giờ xếp hạng tác giả.
- Ít bài viết hơn nhưng tốt hơn thường cho thấy một cơ sở khỏe hơn một cơ sở lớn hơn.

## Tài liệu tham khảo và đọc thêm

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
