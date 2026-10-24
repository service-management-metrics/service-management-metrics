# Lộ trình áp dụng từng bước

**Hãy bắt đầu từ nơi bạn đang đứng, giao một điều hữu ích cho một đội trong tháng đầu, và lớn chương trình theo các bước nhỏ, mỗi bước giành được quyền cho bước kế tiếp.**

## Tổng quan và động lực

Hầu hết hướng dẫn về chỉ số mô tả một trạng thái cuối: một bộ thước đo đầy đủ, một kho dữ liệu sạch, một bảng điều khiển cho mọi đối tượng, một văn hóa dựa trên bằng chứng. Ít tổ chức đến đó theo kế hoạch. Họ đến, khi họ đến, qua một chuỗi các bước hữu ích nhỏ, mỗi bước tự trả giá cho nó trước khi bước kế tiếp bắt đầu. Chủ đề này đưa ra một lộ trình theo tinh thần đó: 30 ngày đầu, 60 ngày kế, và 90 ngày tiếp theo, tổng cộng khoảng 180 ngày. Thời gian là một hình dạng thô và không phải một lời hứa. Một đội nhỏ có thể đi nhanh hơn, và một đội lớn hoặc thận trọng chậm hơn.

Logic là cùng logic phân phối liên tục mà phần còn lại của cuốn sách khuyến nghị cho dịch vụ. Giao sớm một lát cắt mỏng, hoạt động được. Đặt nó trước mặt người dùng thật. Học từ điều họ làm với nó. Mở rộng điều đã giúp ích, và bỏ điều không. Một chương trình chỉ số dành sáu tháng cho thiết kế và ra mắt một bảng điều khiển đầy đủ cho một đối tượng bất ngờ lặp lại sai lầm cũ của bản phát hành lớn: nhiều công sức, phản hồi muộn, và khả năng cao kết quả vừa vặn kém. Ý tưởng về một [sản phẩm khả thi tối thiểu](https://en.wikipedia.org/wiki/Minimum_viable_product), phiên bản nhỏ nhất của một thứ mang lại giá trị và tạo ra việc học, áp dụng cho một chương trình cũng như cho một sản phẩm.

Các mục đích linh hoạt định hình lộ trình theo nhiều cách. Sự tham gia liên tục của các bên liên quan nghĩa là những tuần đầu được dành cùng những người sẽ dùng và được đo bởi các con số, không phải trong một căn phòng sau. Cải tiến liên tục nghĩa là chính kế hoạch được rà soát và thay đổi khi chương trình học, theo tinh thần của [kaizen](https://en.wikipedia.org/wiki/Kaizen), thực hành cải tiến nhỏ, đều đặn bởi mọi người. Tiến hóa liên tục nghĩa là không danh sách thước đo nào là cuối cùng. Nhịp độ bền vững nghĩa là lộ trình chỉ xin một phần khiêm tốn thời gian của đội, và chương trình không thêm gánh nặng báo cáo vượt quá sự giúp đỡ của nó. Và xây dựng quanh những cá nhân có động lực nghĩa là bắt đầu với tình nguyện viên và với những câu hỏi họ quan tâm.

Lộ trình tôn trọng các chủ đề khác của phần này. Nó giả định các quy tắc nền tảng về lòng tin từ chủ đề triển khai (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi), nó dùng các nguyên tắc bảng điều khiển (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ), nó giữ công cụ mỏng cho đến khi giá trị được chứng minh (xem chủ đề 11.2, Bức tranh công cụ), và nó theo dõi tiến độ bằng hồ sơ trưởng thành của chương trình (xem chủ đề 11.4, Mô hình trưởng thành cho chương trình chỉ số).

Ba ý tưởng giúp neo công việc ban đầu. Thứ nhất, bắt đầu với một đường cơ sở. Một [biểu đồ chạy](https://en.wikipedia.org/wiki/Run_chart) của vài tháng dữ liệu hiện có cho thấy mọi thứ đang ở đâu và cho các thay đổi sau này một thứ để so sánh. Thứ hai, kiểm tra [chất lượng dữ liệu](https://en.wikipedia.org/wiki/Data_quality) ngay từ đầu, vì những cải tiến sớm có giá trị nhất thường đến từ việc sửa cách công việc được ghi lại chứ không phải từ bất kỳ biểu đồ nào. Thứ ba, làm kết quả hiển thị: một [bảng thông tin](https://en.wikipedia.org/wiki/Information_radiator), một màn hình cho thấy thông tin trong nháy mắt mà không ai phải hỏi, giúp một đội thấy dữ liệu của chính mình và mở đầu các cuộc trò chuyện. Các bước đầu thường có dạng một [dự án thí điểm](https://en.wikipedia.org/wiki/Pilot_project) với những người tham gia sẵn lòng, theo sau là lan truyền điều đã hiệu quả như [quản lý thay đổi](https://en.wikipedia.org/wiki/Change_management) trong tổ chức rộng hơn (xem chủ đề 9.6, Chỉ số thay đổi tổ chức và mức độ áp dụng).

Không lộ trình nào vừa với mọi tổ chức. Kế hoạch dưới đây là một điểm khởi đầu để được điều chỉnh bởi những người sẽ thực hiện nó.

## Nguyên tắc chính

- **Bắt đầu từ nơi bạn đang đứng.** Dùng dữ liệu, công cụ và thói quen bạn có. Đừng chờ một nền tảng mới.
- **Thí điểm với tình nguyện viên.** Từ một đến ba đội sẵn lòng, làm việc trên những câu hỏi họ quan tâm.
- **Giao giá trị trong tháng đầu.** Một thứ giúp một đội, không phải một báo cáo cho quản lý.
- **Mỗi lần một lát cắt mỏng.** Một nguồn, một góc nhìn, một nhúm thước đo, rồi mở rộng.
- **Viết lời hứa sớm.** Một điều lệ ngắn trước khi con số đầu tiên được chia sẻ.
- **Rà soát và điều chỉnh.** Kiểm tra ở cuối mỗi giai đoạn điều gì đã giúp, điều gì đã hại, và nên đổi gì.
- **Dừng những thứ.** Cho các thước đo và báo cáo không ai dùng nghỉ hưu khi cái mới đến.
- **Đừng bỏ qua lòng tin.** Đi nhanh về công cụ trong khi bỏ lòng tin lại phía sau tạo ra sự méo mó.

## Định nghĩa chỉ số

Các thước đo dưới đây theo dõi tiến độ của chính việc áp dụng. Chúng dành cho đội chương trình và các nhà bảo trợ, và được đọc như tín hiệu, không phải mục tiêu. Chúng tránh số đếm bảng điều khiển hay báo cáo, vốn sẽ thưởng cho hoạt động.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian đến kết quả hữu ích đầu tiên | Thời gian trôi qua từ khi chương trình bắt đầu đến thước đo đầu tiên mà một đội thí điểm nói đã giúp họ thực hiện một thay đổi | số ngày từ khởi động đến lần dùng hữu ích đầu tiên được đội xác nhận | ngày | Nhật ký chương trình; xác nhận của đội | Cải tiến liên tục | Giao giá trị sớm và liên tục | Một lần, rồi theo từng đội mới |
| Đội tích cực dùng thước đo | Tỷ lệ đội được mời đã dùng thước đo của họ trong một buổi rà soát trong kỳ, theo lời họ | số đội đã dùng thước đo trong một buổi rà soát / số đội được mời | phần trăm | Xác nhận của đội; ghi chú rà soát | Quản lý thay đổi tổ chức | Sự tham gia liên tục của bên liên quan | Hằng tháng |
| Cải tiến truy về thước đo | Số thay đổi các đội đã thực hiện mà họ quy, kèm lý do, cho điều một thước đo đã cho thấy | số thay đổi do đội báo cáo có liên kết nêu rõ với một thước đo | số đếm | Sổ đăng ký cải tiến | Cải tiến liên tục | Thí nghiệm có bằng chứng | Hằng quý |
| Thước đo và báo cáo đã nghỉ hưu | Thước đo hoặc báo cáo bị dừng vì chúng ngừng cung cấp thông tin cho quyết định | số đếm đã nghỉ hưu mỗi quý | số đếm | Nhật ký thay đổi danh mục | Cải tiến liên tục | Tiến hóa liên tục | Hằng quý |
| Độ phủ đường cơ sở | Tỷ lệ thước đo đã thống nhất có đường cơ sở được ghi lại kéo dài ít nhất vài tháng | số thước đo có đường cơ sở / số thước đo đã thống nhất | phần trăm | Danh mục chỉ số | Quản lý mức dịch vụ; cải tiến liên tục | Bằng chứng hơn ý kiến | Hằng quý |
| Tỷ lệ công sức của chương trình | Tỷ lệ thời gian của các đội tham gia dành cho các nhiệm vụ đo lường | số giờ thu thập, báo cáo và rà soát / tổng số giờ của đội, theo ước lượng | phần trăm | Ước lượng thời gian của đội | Cải tiến liên tục | Nhịp độ bền vững | Hằng quý |
| Hoàn thành rà soát giai đoạn | Tỷ lệ buổi rà soát giai đoạn đã lên kế hoạch được tổ chức cùng các đội, với thay đổi được ghi lại | số buổi rà soát được tổ chức kèm thay đổi được ghi lại / số buổi rà soát đã lên kế hoạch | phần trăm | Hồ sơ chương trình | Cải tiến liên tục | Suy ngẫm đều đặn | Mỗi giai đoạn |

Thời gian đến kết quả hữu ích đầu tiên được đo theo lời của đội thí điểm chứ không phải của chương trình. Đội tích cực dùng thước đo được đếm theo điều các đội nói, không phải theo lượt đăng nhập. Cải tiến truy về thước đo là số đếm các liên kết đã nêu và không phải mục tiêu, vì một mục tiêu sẽ tạo ra những liên kết bịa. Tỷ lệ công sức của chương trình nên giữ nhỏ, và sự tăng là một cảnh báo.

## Khuyến nghị

### Ngày 1 đến 30: lắng nghe, thống nhất, và giao một điều hữu ích

**1. Tìm một nhà bảo trợ và vài tình nguyện viên.** Hãy nhờ một lãnh đạo cấp cao bảo trợ chương trình và ký một điều lệ ngắn. Mời một đến ba đội tò mò và được tôn trọng. Giải thích rằng mục đích là giúp họ thấy công việc của chính mình và cải thiện nó, và dữ liệu sẽ không được dùng để xếp hạng hay đánh giá cá nhân (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi).

**2. Hỏi các câu hỏi.** Hãy gặp mỗi đội thí điểm một giờ. Hỏi điều gì làm họ chậm, điều gì làm họ ngạc nhiên, và họ ước biết điều gì. Ghi các câu hỏi xuống. Chọn ba đến năm thước đo từ cuốn sách này trả lời các câu hỏi đó, mỗi cái kèm một rào chắn đi kèm (xem chủ đề 1.3, Kết quả hơn đầu ra: chọn đo cái gì).

**3. Nhìn vào dữ liệu bạn đã có.** Hãy kéo vài tháng lịch sử từ các hệ thống ghi nhận và vẽ biểu đồ chạy. Kiểm tra chất lượng dữ liệu một cách trung thực: trường bị thiếu, danh mục đã đổi, bản ghi được tạo sau sự việc. Sửa việc thu thập tại nguồn nơi rẻ. Một bảng tính đơn giản là đủ ở giai đoạn này (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

**4. Giao một điều hữu ích.** Đến cuối tháng đầu, hãy cho mỗi đội thí điểm một góc nhìn nhỏ về dữ liệu của chính họ kèm định nghĩa cho từng thước đo, và tổ chức một cuộc trò chuyện rà soát. Tìm một thay đổi mà dữ liệu gợi ý, như gỡ một bước chờ, và giúp đội thử nó. Kết quả hữu ích đầu tiên quan trọng hơn một công cụ bóng bẩy.

### Ngày 31 đến 90: học, mở rộng, và biến nó thành thường lệ

**5. Tổ chức buổi rà soát đầu tiên với các đội thí điểm.** Hãy hỏi điều gì đã giúp, điều gì gây bối rối, điều gì cảm thấy rủi ro, và họ sẽ đổi gì. Sửa các thước đo, định nghĩa và điều lệ. Đặc biệt lắng nghe các dấu hiệu của nỗi sợ hay lợi dụng. Chia sẻ một câu chuyện ngắn về điều đã thay đổi, do chính đội kể.

**6. Tự động hóa con đường mỏng.** Nơi công việc thủ công nặng, hãy tự động hóa một hai nguồn cấp quan trọng nhất, kèm kiểm tra độ mới và đối chiếu với nguồn. Giữ định nghĩa trong một danh mục đơn giản, di chuyển được. Chưa mua một nền tảng trừ khi đợt thử đã cho thấy công cụ hiện có không làm được việc (xem chủ đề 11.2, Bức tranh công cụ).

**7. Thiết lập một nhịp rà soát.** Hãy tổ chức một buổi rà soát hằng tháng ngắn trong mỗi đội thí điểm nhìn vào xu hướng, ghi lại quyết định, và ghi chú các sự kiện. Gồm cả cơ hội để nói "không hành động." Thêm một cái nhìn hằng quý vào toàn chương trình cùng các nhà bảo trợ, dùng các góc nhìn tổng hợp và bình luận của đội.

**8. Mời làn sóng kế tiếp.** Hãy đưa cách tiếp cận cho nhiều đội hơn, dẫn đầu bằng câu chuyện của các đội thí điểm. Để mỗi đội mới chọn thước đo của mình từ một thực đơn, với một lõi chung nhỏ. Giữ nhịp độ bền vững: vài đội mỗi lần, với sự hỗ trợ từ các đội thí điểm và trưởng chương trình.

### Ngày 91 đến 180: củng cố, cân bằng, và chuẩn bị bàn giao

**9. Thiết kế các góc nhìn cho đối tượng.** Cùng đối tượng, hãy thiết kế các góc nhìn của chủ sở hữu dịch vụ và lãnh đạo mô tả trong chủ đề bảng điều khiển, dùng định nghĩa chung và bình luận của các đội (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ). Giữ mỗi góc nhìn nhỏ. Cho các báo cáo cũ mà chúng thay thế nghỉ hưu.

**10. Thêm sự cân bằng và kết quả.** Hãy mở rộng các thước đo thí điểm thành một tập cân bằng gồm chất lượng, độ tin cậy, trải nghiệm và chi phí, với kết quả bên cạnh hoạt động (xem chủ đề 6.5, Hiện thực hóa giá trị và kết quả kinh doanh). Kiểm tra mỗi thước đo mới về vectơ lợi dụng và rào chắn trước khi nó được cho thấy.

**11. Đánh giá chương trình.** Chạy bài tự đánh giá từ chủ đề mô hình trưởng thành với mỗi đội tham gia, báo cáo hồ sơ và chủ đề, và chọn một hoặc hai bước kế tiếp ở chiều giới hạn các chiều khác (xem chủ đề 11.4, Mô hình trưởng thành cho chương trình chỉ số). Đếm cả những gì bạn đã cho nghỉ hưu cũng như những gì bạn đã thêm.

**12. Quyết định điều gì đến tiếp theo.** Tại buổi rà soát ngày 180, cùng các đội và nhà bảo trợ, hãy quyết định tiếp tục, điều chỉnh hay dừng. Ghi lại chương trình đã làm gì, với công sức nào, và điều gì đã đổi trong các dịch vụ. Chọn giai đoạn kế tiếp: thêm đội, công cụ sâu hơn, liên kết với các thước đo tài chính hoặc khách hàng, hoặc củng cố. Ghi lại quyết định và lý do.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian đến kết quả hữu ích đầu tiên | Tuyên bố một thay đổi tầm thường là hữu ích; vội một sản phẩm trình diễn | Hỏi đội điều gì đã đổi; kiểm tra thay đổi có bền |
| Đội tích cực dùng thước đo | Tổ chức rà soát để đánh dấu ô; tuyên bố việc dùng chưa xảy ra | Hỏi quyết định đã đưa ra; lấy mẫu ghi chú rà soát; nói chuyện với các đội |
| Cải tiến truy về thước đo | Bịa liên kết để đạt số đếm; nhận công cho thay đổi không liên quan | Giữ nó mô tả; hỏi đội lý lẽ; chấp nhận các liên kết không chắc như chúng vốn thế |
| Thước đo và báo cáo đã nghỉ hưu | Cho nghỉ hưu các thước đo bất tiện; nghỉ hưu rồi đưa lại dưới tên mới | Rà soát danh sách đã nghỉ hưu tìm xu hướng bất lợi; yêu cầu lý do nêu rõ |
| Độ phủ đường cơ sở | Bịa lịch sử; dùng một kỳ tâng bốc kết quả sau này | Ghi nguồn và kỳ; giữ dữ liệu thô; chọn đường cơ sở trước khi thay đổi |
| Tỷ lệ công sức của chương trình | Khai thấp công sức; chuyển việc sang người ngoài số đếm | Hỏi những người làm công việc; so sánh với làm thêm giờ cuối chu kỳ |
| Hoàn thành rà soát giai đoạn | Rà soát ngắn, qua loa; ghi các thay đổi không bao giờ xảy ra | Kiểm tra các thay đổi được thực hiện; hỏi các đội buổi rà soát có đáng thời gian của họ không |

Một kết quả đọc lành mạnh cho thấy một kết quả hữu ích đầu tiên trong một hai tháng đầu, các đội dùng thước đo vì họ thấy chúng hữu ích, một nhúm thay đổi được quy kết, các báo cáo nghỉ hưu bên cạnh cái mới, một tỷ lệ công sức khiêm tốn và ổn định, và các buổi rà soát giai đoạn dẫn đến thay đổi thật trong kế hoạch.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Thí điểm với tình nguyện viên | Lòng tin; câu chuyện thật | Khởi đầu chậm hơn; thiên kiến chọn lọc |
| Triển khai cho mọi đội cùng nhau | Phủ nhanh | Kháng cự; méo mó |
| Bảng tính trước | Nhanh; chi phí thấp; học hỏi | Mong manh; công sức thủ công |
| Nền tảng trước | Bóng bẩy; quy mô | Chi phí; vừa kém trước khi câu hỏi rõ ràng |
| Ít thước đo mỗi đội | Tập trung; gánh nặng thấp | Có thể bỏ lỡ các lĩnh vực quan trọng |
| Nhiều thước đo cùng lúc | Bề rộng | Quá tải; tràn lan |
| Kế hoạch 180 ngày cố định | Rõ ràng cho nhà bảo trợ | Cứng nhắc; bỏ qua điều học được |
| Rà soát giai đoạn thay đổi kế hoạch | Học hỏi; vừa vặn | Kém dự đoán được cho nhà bảo trợ |

Câu trả lời dạng văn xuôi là bắt đầu với tình nguyện viên và bảng tính, mở rộng khi giá trị được cho thấy, cho các nhà bảo trợ một hình dạng rõ ràng và các điểm rà soát, và cho phép kế hoạch thay đổi.

## Câu hỏi để thảo luận với đội nhóm

**1. Một câu hỏi chúng ta ước có thể trả lời về công việc của mình tháng này là gì?**
Thu thập câu hỏi từ mọi người. Chọn cái quan trọng nhất và có thể trả lời bằng dữ liệu chúng ta đã có. Thống nhất một câu trả lời hữu ích sẽ trông ra sao.

**2. Chúng ta đã đo gì, và ai xem nó?**
Liệt kê các báo cáo hiện có và đối tượng của chúng. Đánh dấu những cái không ai dùng. Quyết định cái nào cho nghỉ hưu để nhường chỗ cho cái mới.

**3. Điều gì sẽ khiến chúng ta sẵn lòng thử cái này trong một tháng?**
Nghe các điều kiện: một điều lệ, tiếng nói trong thước đo, thời gian có giới hạn. Thống nhất chúng với nhà bảo trợ trước khi bắt đầu.

**4. Dữ liệu đầu tiên có thể gợi ý thay đổi nhỏ nào?**
Cùng nhìn vào vài tháng lịch sử. Nêu một thay đổi khả dĩ và một kết quả kỳ vọng. Thống nhất cách chúng ta nói nó có giúp ích không.

**5. Chúng ta có thể dành bao nhiêu thời gian cho việc này mà không hại công việc?**
Ước lượng theo giờ mỗi tháng. Thống nhất một giới hạn, và rà soát nó ở buổi rà soát giai đoạn đầu tiên.

**6. Khi nào chúng ta nên dừng hay đổi kế hoạch?**
Mô tả các dấu hiệu: không có kết quả hữu ích, nỗi sợ tăng, công sức nặng. Thống nhất ai quyết định, và quyết định sẽ được ghi lại thế nào.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội thí điểm gánh rủi ro ban đầu và đưa ra bằng chứng ban đầu. Họ nên yêu cầu điều lệ, chọn thước đo của riêng mình, dùng các góc nhìn đầu tiên trong các buổi rà soát của chính mình, và báo cáo trung thực về điều đã giúp và điều không. Họ được lợi khi kết quả đầu tiên gỡ một trở ngại thật.

### Đội dịch vụ và vận hành

Các đội vận hành cung cấp nhiều dữ liệu và thường có tải lớn nhất. Họ nên giúp đánh giá chất lượng dữ liệu, chỉ ra nơi một thước đo sẽ thưởng cho hành vi sai, và bảo vệ thời gian cho công việc trực và sự cố. Nhịp độ bền vững của họ là một ràng buộc cố định lên kế hoạch.

### Lãnh đạo và quản trị

Lãnh đạo bảo trợ, ký điều lệ, và bảo vệ chương trình khỏi bị lạm dụng. Họ nên chấp nhận một khởi đầu khiêm tốn, yêu cầu kết quả và câu chuyện thay vì số bảng điều khiển, tránh đòi xếp hạng, và để kế hoạch thay đổi khi chương trình học. Họ nên đánh giá nó theo các quyết định đã cải thiện.

### Khách hàng và người dùng

Khách hàng và người dùng được lợi khi chương trình dẫn đến dịch vụ tốt hơn. Họ có thể tham gia chọn các thước đo trải nghiệm và rà soát điều được thu thập về họ. Họ nên thấy những thay đổi bắt nguồn từ phản hồi của họ.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một cơ quan giao thông công cộng cỡ vừa có 12 đội qua dịch vụ số, công nghệ vận hành và một bàn dịch vụ. Một giám đốc thông tin mới muốn "một chương trình chỉ số trong sáu tháng." Một nỗ lực trước đã mua một nền tảng và tạo ra các bảng điều khiển mà ít người mở. Các con số dưới đây chỉ mang tính minh họa.

Trưởng bộ phận cải tiến dịch vụ đề xuất một lộ trình 180 ngày với các buổi rà soát giai đoạn vào ngày 30, 90 và 180. Trong tuần đầu bà gặp giám đốc thông tin, người ký một điều lệ một trang, và mời ba đội tình nguyện: bàn dịch vụ, một đội thông tin hành khách, và một đội vận hành hạ tầng. Trong các buổi dài một giờ, mỗi đội nêu câu hỏi của mình. Bàn dịch vụ muốn biết vì sao cùng những vấn đề khách hàng cứ quay lại. Đội thông tin hành khách muốn biết các thay đổi của họ có làm hỏng thứ gì không. Đội hạ tầng muốn biết bao nhiêu thời gian của họ đi vào công việc không kế hoạch.

Với mỗi đội, bà chọn ba đến năm thước đo từ cuốn sách này, kèm rào chắn, và xây biểu đồ chạy trong một bảng tính chung từ năm tháng dữ liệu trước đó. Kiểm tra dữ liệu thấy 27 phần trăm bản ghi thay đổi của đội thông tin hành khách được tạo sau khi triển khai, và các danh mục của bàn dịch vụ đã được tổ chức lại giữa kỳ. Sửa thói quen nhập và ánh xạ các danh mục mất hai tuần. Đến ngày 27, bàn dịch vụ thấy 19 phần trăm liên hệ của họ là quay lại trong một tuần, tập trung ở hai danh mục liên quan đến một trang lịch trình gây bối rối. Đội làm việc với đội thông tin hành khách để đổi trang. Bàn dịch vụ xác nhận đây là kết quả hữu ích đầu tiên, ở ngày 27.

Tại buổi rà soát ngày 30, các đội yêu cầu định nghĩa ngắn hơn và ít biểu đồ hơn, và một đội hỏi liệu dữ liệu có được dùng trong các đánh giá hằng năm của họ không. Điều lệ được làm rõ để nói rằng sẽ không. Giữa ngày 31 và 90, trưởng bộ phận tự động hóa hai nguồn cấp, thiết lập một buổi rà soát hằng tháng ở mỗi đội ghi lại quyết định, và mời bốn đội nữa dựa trên các câu chuyện thí điểm. Đội tích cực dùng thước đo ở mức 7 trên 7 đội được mời. Tại buổi rà soát ngày 90, các đội báo cáo năm thay đổi họ quy cho các thước đo của mình. Chương trình đã cho ba báo cáo hằng tuần cũ nghỉ hưu. Tỷ lệ công sức được ước lượng là 3 phần trăm thời gian của đội. Giữa ngày 91 và 180, trưởng bộ phận thiết kế các góc nhìn của chủ sở hữu dịch vụ và lãnh đạo cùng các đối tượng đó, thêm các thước đo trải nghiệm và chi phí vào tập cân bằng, và chạy bài tự đánh giá: hầu hết các đội ở Mức 2 về sử dụng trong quyết định và 3 về lòng tin và an toàn, và bước kế tiếp được chọn là một nhật ký quyết định ở mọi đội. Vào ngày 180, giám đốc thông tin yêu cầu một bảng xếp hạng cả 12 đội theo độ trưởng thành. Trưởng bộ phận đưa ra hồ sơ tổng hợp và các chủ đề, giải thích điều lệ, và yêu cầu bị bỏ. Các nhà bảo trợ đồng ý mở rộng chương trình cho năm đội còn lại trong hai quý tới, vẫn trên cơ sở tình nguyện.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy giao một điều hữu ích cho một đội trong tháng đầu và lớn lên theo các bước nhỏ, mỗi bước giành được bước kế tiếp, theo cùng tinh thần phân phối liên tục như các dịch vụ được đo. Điều cần lưu ý là một lộ trình cố định có ngày tháng có thể dẫn dắt chương trình khi việc học nói rằng hãy đổi hướng.

### AI

Hãy quyết định sớm AI thuộc về đâu trong chương trình: trợ lý AI cho phân tích và báo cáo, các thước đo việc dùng AI, và quản trị. Thêm chúng theo các bước nhỏ, được rà soát, kèm một người kiểm tra đầu ra AI dùng trong báo cáo. Điều cần lưu ý là thêm tính năng AI sớm có thể thổi phồng đầu ra của chương trình trước khi giá trị của nó được cho thấy.

### Tự động hóa

Hãy tự động hóa thu thập dữ liệu cho vài thước đo đầu tiên, để công sức đi vào diễn giải, và đo tỷ lệ công sức của chính chương trình. Điều cần lưu ý là tự động hóa quá nhiều thước đo cùng lúc tạo ra tải bảo trì mà chương trình không gánh nổi.

### Phân tích

Hãy theo dõi thời gian đến kết quả hữu ích đầu tiên và các cải tiến truy về thước đo, và rà soát lộ trình so với chúng. Quyết định được cung cấp thông tin là mở rộng, giữ hay dừng. Điều cần lưu ý là các cải tiến khó quy cho một thước đo, nên hãy mô tả bằng chứng một cách trung thực.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Hãy nén lộ trình. Trong hai tuần, thống nhất ba câu hỏi và hai hoặc ba thước đo, và nhìn vào chúng cùng nhau hằng tuần hoặc hai tuần một lần. Dùng những gì bạn đã có. Xem lại sau một quý. Một công ty khởi nghiệp chờ xây công cụ sẽ mất thói quen nhìn.

**Doanh nghiệp nhỏ.** 30 ngày đầu có thể là một cuộc trò chuyện duy nhất, một danh sách câu hỏi một trang, một bảng tính, và một thay đổi. Các giai đoạn kế tiếp gồm một cái nhìn đều đặn hằng tháng. Rủi ro chính là người thiết lập nó trở thành người duy nhất hiểu nó, nên hãy viết ra mỗi thước đo có nghĩa gì.

**Doanh nghiệp lớn.** Hãy dùng các làn sóng tình nguyện viên, một đội trung tâm nhỏ hỗ trợ và không sở hữu các thước đo, định nghĩa chung, và các buổi rà soát giai đoạn với nhà bảo trợ. Chống lại một ngày toàn cầu duy nhất. Hãy chờ đợi dành giai đoạn đầu để sửa việc thu thập dữ liệu, và lên kế hoạch phối hợp với an ninh, quyền riêng tư, và hội đồng lao động hoặc đại diện nhân viên nơi họ tồn tại.

**Chính phủ và khu vực công.** Tham vấn đại diện nhân viên và giao tiếp rõ ràng với cơ quan giám sát là một phần của công việc ban đầu. Chu kỳ mua sắm thường ưu tiên bắt đầu với công cụ đã sở hữu. Giữ báo cáo bắt buộc tách khỏi các thước đo cải tiến, và ghi tài liệu quyết định cho kiểm toán (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của 180 ngày đầu chủ yếu là thời gian của con người: trưởng chương trình, một công sức phân tích nhỏ, một phần thời gian của các đội thí điểm, và sự chú ý của nhà bảo trợ. Chi phí công cụ có thể thấp hoặc bằng không ở các giai đoạn đầu. Chi phí lớn hơn là chi phí của việc làm sai các bước đầu, ví dụ bằng cách tung thước đo ra mà không có lòng tin.

Lợi tức xuất hiện sớm nếu bước đầu tiên được chọn tốt: một thay đổi mà dữ liệu gợi ý, các báo cáo đã nghỉ hưu, ít tranh cãi về con số hơn, và các đội xin thêm. Hãy xây hồ sơ từ ghi chép của chính bạn: số ngày đến kết quả hữu ích đầu tiên, các thay đổi các đội quy cho thước đo, số giờ tiết kiệm từ báo cáo đã nghỉ hưu, và công sức đã bỏ ra. Tránh trích dẫn các con số bên ngoài về lợi tức của phân tích mà không có nguồn truy được và mức liên quan với bối cảnh của bạn. Tuyên bố đáng tin thì khiêm tốn và mang tính địa phương (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Ra mắt một lần lớn.** Nhiều tháng thiết kế, rồi một bất ngờ. Hãy giao sớm một lát cắt mỏng.
- **Nền tảng trước.** Công cụ đến trước câu hỏi. Hãy bắt đầu với những gì bạn có.
- **Đếm bảng điều khiển.** Đo hoạt động, bỏ qua giá trị. Hãy theo dõi quyết định và thay đổi.
- **Bỏ qua điều lệ.** Nỗi sợ lấp khoảng trống. Hãy viết lời hứa trước khi con số đầu tiên được cho thấy.
- **Quá nhiều đội cùng lúc.** Hỗ trợ sụp đổ. Hãy lan ra theo các làn sóng nhỏ.
- **Không bao giờ dừng gì.** Báo cáo cũ còn bên cạnh cái mới. Hãy cho nghỉ hưu khi bạn thêm.
- **Một kế hoạch cố định được bảo vệ trước bằng chứng.** Kế hoạch nên đổi khi bạn học.
- **Bỏ cuộc sau lần trượt đầu tiên.** Những nỗ lực đầu dạy ta. Hãy rà soát, điều chỉnh, và thử lại.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Bắt đầu và thí điểm | Không có kế hoạch; báo cáo tùy hứng | Các đội quan tâm tự thử thước đo | Điều lệ, nhà bảo trợ và thí điểm tình nguyện kèm một kết quả hữu ích đầu tiên | Việc học từ thí điểm dẫn dắt kế hoạch các làn sóng; thời gian đến giá trị được theo dõi | Các đội tự lan truyền cách tiếp cận cho nhau; nhà bảo trợ và đối tác tham gia |
| Mở rộng và nhịp | Nỗ lực một lần | Một số buổi rà soát đều đặn | Rà soát đội hằng tháng và rà soát chương trình hằng quý | Tỷ lệ công sức, việc cho nghỉ hưu và thay đổi được quy kết được quản lý | Rà soát liên kết giữa các đội và dịch vụ; nhịp thích ứng theo nhu cầu |
| Học hỏi và điều chỉnh | Kế hoạch cố định hoặc không có | Thỉnh thoảng chia sẻ bài học | Rà soát giai đoạn thay đổi kế hoạch | Các bước lộ trình gắn với hồ sơ trưởng thành | Chương trình liên tục cải thiện từ đóng góp của mọi người |

## Danh sách kiểm tra

- [ ] Một nhà bảo trợ đã ký một điều lệ ngắn trước khi con số đầu tiên được chia sẻ.
- [ ] Một đến ba đội tình nguyện đã nêu câu hỏi của họ bằng lời của chính mình.
- [ ] Một đường cơ sở gồm vài tháng dữ liệu và một kiểm tra chất lượng dữ liệu tồn tại cho mỗi thước đo thí điểm.
- [ ] Mỗi đội thí điểm có một góc nhìn nhỏ kèm định nghĩa cho từng thước đo.
- [ ] Một kết quả hữu ích đầu tiên được giao, và được đội xác nhận, trong một hai tháng đầu.
- [ ] Một nhịp rà soát tồn tại ở mỗi đội thí điểm và ghi lại quyết định.
- [ ] Báo cáo cũ được cho nghỉ hưu khi các góc nhìn mới thay thế chúng.
- [ ] Công sức chương trình đòi hỏi từ các đội được ước lượng và giữ nhỏ.
- [ ] Các buổi rà soát giai đoạn vào ngày 30, 90 và 180 được tổ chức cùng các đội, và kế hoạch thay đổi sau đó.
- [ ] Giai đoạn kế tiếp được quyết định cùng các đội và nhà bảo trợ và được ghi lại kèm lý do.

## Lời nhắc AI

**Soạn một kế hoạch 180 ngày.**

```text
Draft a 180-day roadmap for introducing a service metrics program in [organization
type] with [number] teams. Use stage reviews at days 30, 90, and 180. For each
stage, list the goals, the activities, the people involved, the time asked of
teams, the expected first useful result, and the risks. Start with volunteer pilot
teams, a charter, and existing tools. Do not promise outcomes. List your
assumptions.
```

**Chọn các thước đo đầu tiên.**

```text
A pilot team describes its problems as follows: [paste]. Suggest three to five
measures to start with, each with a definition, a data source, the most likely
gaming vector, and a companion guardrail. Prefer data the team already holds.
Do not invent figures. List your assumptions and what to check about data quality.
```

**Chạy một kiểm tra chất lượng dữ liệu.**

```text
Here is a sample description of the fields and values in our [system] records:
[paste]. Identify likely quality problems for measuring lead time, change failure,
and returning contacts, such as missing fields, changed categories, and records
created after the fact. Suggest simple checks and fixes at the source. Do not guess
at contents you cannot see. List your assumptions.
```

**Lập kế hoạch một buổi rà soát giai đoạn.**

```text
Plan a 45-minute stage review for day [30, 90, or 180] with pilot teams and the
sponsor. Include questions on what helped, what felt risky, what effort it took,
what to stop, and what to change in the plan. Include how to record decisions and
share a short story of what changed. Do not rank teams. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để chọn các thước đo khởi đầu kèm rào chắn đi kèm cho một đội thí điểm.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một lộ trình giữ các thước đo ở cấp đội và mang một vectơ lợi dụng cho mọi thước đo được giới thiệu.

## Điểm chính cần nhớ

- Bắt đầu từ nơi bạn đang đứng, với tình nguyện viên, một điều lệ, và dữ liệu và công cụ bạn đã có.
- Giao một kết quả hữu ích cho một đội trong một hai tháng đầu.
- Mở rộng theo các làn sóng nhỏ, và cho báo cáo nghỉ hưu khi các góc nhìn mới thay thế chúng.
- Kiểm tra chất lượng dữ liệu sớm, và sửa việc thu thập tại nguồn.
- Tổ chức các buổi rà soát giai đoạn thay đổi kế hoạch, và giữ công sức đòi hỏi từ các đội nhỏ.
- Quyết định giai đoạn kế tiếp cùng các đội và nhà bảo trợ, và ghi lại lý do.

## Tài liệu tham khảo và đọc thêm

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
