# Chỉ số bàn dịch vụ

**Hãy đo bàn dịch vụ theo mức nó giúp mọi người quay lại làm việc tốt đến đâu và nó dạy phần còn lại của tổ chức được bao nhiêu, vì các số đếm cuộc gọi và số phút trên điện thoại thưởng cho tốc độ và khối lượng bằng cái giá của cả hai.**

## Tổng quan và động lực

Với hầu hết người dùng, bàn dịch vụ chính là dịch vụ. Họ hiếm khi gặp các kỹ sư hay thấy đường ống; họ gặp bất cứ ai trả lời khi có chuyện không ổn. [Bàn trợ giúp](https://en.wikipedia.org/wiki/Help_desk) là bộ phận hoặc người cung cấp sự hỗ trợ và thông tin, thường về các vấn đề máy tính. Trong cách dùng của [quản lý dịch vụ CNTT (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), bàn dịch vụ là đầu mối liên hệ duy nhất giữa nhà cung cấp và người dùng, xử lý cả sự cố (các gián đoạn không có kế hoạch hoặc có khả năng gián đoạn đối với một dịch vụ) và yêu cầu dịch vụ (các yêu cầu thường lệ cho một thứ mà dịch vụ thường cung cấp). Trong [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, thực hành bàn dịch vụ nằm bên cạnh quản lý sự cố và quản lý yêu cầu dịch vụ, và nó được mô tả bằng mục đích và kết quả của nó, không phải bằng một danh sách cố định các thước đo. Chủ đề này vì vậy đưa ra hướng dẫn thực tế, không phải một yêu cầu của khung.

Các thước đo lớn lên quanh bàn phần lớn đến từ truyền thống [trung tâm cuộc gọi](https://en.wikipedia.org/wiki/Call_centre): có bao nhiêu liên hệ đến, mọi người chờ bao lâu, có bao nhiêu người bỏ cuộc, mỗi liên hệ mất bao lâu, và có bao nhiêu cái được giải quyết ở lần thử đầu tiên. Những thước đo đó hữu ích và rẻ, và chúng cũng là những thước đo dễ nhất trong cuốn sách để biến thành mục tiêu gây hại cho dịch vụ. Các cuộc gọi ngắn trông hiệu quả cho đến khi cùng một người dùng gọi lại ba lần. Tỷ lệ bỏ cuộc thấp trông quan tâm cho đến khi nhân viên trả lời nhanh mà không giải quyết gì. Nhiệm vụ của chủ đề là mô tả từng thước đo, nêu các đồng hồ của nó, và nói nó thưởng gì và che giấu gì.

Góc nhìn linh hoạt thêm một mục đích thứ hai. Mỗi liên hệ là bằng chứng về điều người dùng thấy khó hiểu, cái gì hỏng, và họ ước dịch vụ làm gì. Một đội linh hoạt phát hành thường xuyên cần bằng chứng đó nhanh và ở cấp một dịch vụ, không phải một phiếu. Vì vậy bàn được đo hai lần: như một hoạt động trả lời con người tốt, và như một cảm biến nuôi tồn đọng. Khối lượng là cầu nối giữa hai cái. Một số đếm tăng có thể có nghĩa là tăng trưởng, một bản phát hành tồi, một bài viết còn thiếu, hoặc một kênh mới, và riêng chỉ số không nói được là cái nào (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố, về cách đọc số đếm theo danh mục và mức ưu tiên).

Các thuật ngữ chính: [giải quyết ngay cuộc gọi đầu](https://en.wikipedia.org/wiki/First_call_resolution) là tỷ lệ các liên hệ được giải quyết ở lần liên hệ đầu; một [bộ phân phối cuộc gọi tự động](https://en.wikipedia.org/wiki/Automatic_call_distributor) định tuyến các cuộc gọi đến cho nhân viên rảnh; một [thỏa thuận mức dịch vụ (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) là một cam kết giữa nhà cung cấp và khách hàng; một [bách phân vị](https://en.wikipedia.org/wiki/Percentile) là giá trị mà dưới đó một tỷ lệ quan sát nhất định rơi vào, nên bách phân vị thứ 85 của thời gian xử lý là khoảng thời gian mà 85 phần trăm liên hệ kết thúc trong đó; và [mức hài lòng của khách hàng](https://en.wikipedia.org/wiki/Customer_satisfaction) (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng) là mức một dịch vụ đáp ứng kỳ vọng của người dùng tốt đến đâu.

Các thuật ngữ "liên hệ" và "phiếu" không giống nhau. Một liên hệ là một nỗ lực của một người để tiếp cận bàn qua một kênh như điện thoại, trò chuyện, email, cổng, trực tiếp hoặc nhắn tin. Một phiếu (còn gọi là bản ghi) là thứ công cụ ITSM tạo ra để theo dõi công việc. Một phiếu có thể liên quan đến nhiều liên hệ, và một số liên hệ, như đặt lại mật khẩu được trả lời ngay tại chỗ, có thể tạo một phiếu chỉ để lưu bản ghi. Trộn hai cái là nguồn nhầm lẫn phổ biến nhất trong báo cáo của bàn, nên các định nghĩa dưới đây đếm chúng riêng.

## Nguyên tắc chính

- **Đếm liên hệ và phiếu riêng, và định nghĩa cả hai.** Một liên hệ là một nỗ lực tiếp cận bàn; một phiếu là một bản ghi công việc. Các báo cáo trộn chúng không thể đối chiếu.
- **Báo cáo thời gian dưới dạng phân phối.** Hãy cho thấy trung vị và một bách phân vị cao như thứ 85 hoặc 95, không bao giờ chỉ một giá trị trung bình, vì một vài liên hệ rất dài hoặc rất ngắn làm méo giá trị trung bình.
- **Ghép mọi thước đo tốc độ với một thước đo kết quả.** Tốc độ trả lời, tỷ lệ bỏ cuộc và thời gian xử lý mô tả công sức. Giải quyết và liên hệ lại mô tả người dùng có được giúp không.
- **Chuẩn hóa khối lượng theo mức sử dụng.** Một số đếm tăng vì cơ sở người dùng lớn lên là một câu chuyện khác với một số đếm tăng trên mỗi người dùng.
- **Đo kênh và dịch vụ, không đo con người.** Các chỉ số này mô tả một bàn, một hàng đợi, một dịch vụ và một kênh. Chúng không bao giờ được dùng để xếp hạng hay kỷ luật từng nhân viên.
- **Coi bàn là một cảm biến.** Mỗi chỉ số nên dẫn đến một câu hỏi cho các đội phân phối về điều cần sửa, ghi tài liệu hoặc tự động hóa ở thượng nguồn.

## Định nghĩa chỉ số

Bảng liệt kê bảy thước đo mà hầu hết bàn dịch vụ có thể thu thập từ nền tảng điện thoại và công cụ ITSM của mình. Ngưỡng và mục tiêu là việc của mỗi bàn tự đặt và ghi ra; chủ đề này không đưa ra giá trị chuẩn nào.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Khối lượng liên hệ | Số liên hệ bàn nhận được, theo kênh và kỳ | số liên hệ được tạo trong kỳ, theo kênh; các liên hệ thử nghiệm nội bộ, email trả lời tự động trùng lặp và cuộc gọi đi do bàn thực hiện bị loại trừ | số đếm | Nhật ký nền tảng điện thoại hoặc trò chuyện; bản ghi liên hệ của công cụ ITSM | Bàn dịch vụ | Tín hiệu nhu cầu trong tinh chỉnh tồn đọng | Hằng tuần |
| Tỷ lệ liên hệ | Số liên hệ so với quy mô quần thể được phục vụ, để tăng trưởng không bị nhầm là một vấn đề | số liên hệ trong kỳ / số người dùng hoặc tài khoản đang hoạt động trong kỳ, quy đổi về 100 người dùng; số người dùng lấy từ cùng kỳ và định nghĩa "đang hoạt động" được ghi ra | liên hệ mỗi 100 người dùng | Bản ghi liên hệ và hệ thống định danh hoặc giấy phép | Bàn dịch vụ; quản lý mức dịch vụ | Nhu cầu đã điều chỉnh theo mức sử dụng trong rà soát sản phẩm | Hằng tháng |
| Thời gian đến khi trả lời | Thời gian chờ từ lúc một liên hệ vào hàng đợi đến lúc một người hoặc một bộ máy trả lời tự động tương tác | đồng hồ bắt đầu khi liên hệ được xếp hàng và dừng ở phản hồi đầu tiên của con người; các liên hệ bị bỏ cuộc bị loại khỏi thước đo này và được đếm trong tỷ lệ bỏ cuộc; báo cáo trung vị và bách phân vị thứ 85 | giây (điện thoại, trò chuyện); phút hoặc giờ (email, cổng) | Nền tảng điện thoại; nền tảng trò chuyện; dấu thời gian của công cụ ITSM | Bàn dịch vụ | Thỏa thuận làm việc về sự đáp ứng | Hằng ngày trong các cửa sổ rà soát, hằng tuần cho xu hướng |
| Tỷ lệ bỏ cuộc | Tỷ lệ các liên hệ kết thúc trước khi ai đó tương tác, do người dùng | số liên hệ bị người dùng kết thúc trước phản hồi đầu tiên của con người / số liên hệ đã xếp hàng; các liên hệ kết thúc trong một khoảng ân hạn ngắn (nêu trong định nghĩa, ví dụ năm giây) bị loại trừ vì ngẫu nhiên | phần trăm | Nền tảng điện thoại; nền tảng trò chuyện | Bàn dịch vụ | Tín hiệu chi phí chậm trễ trong rà soát dịch vụ | Hằng tuần |
| Thời gian xử lý | Thời gian bàn dành cho một liên hệ | đồng hồ bắt đầu khi một người tương tác và dừng khi họ kết thúc liên hệ, gồm cả công việc ghi tài liệu sau liên hệ; chờ người dùng chỉ được tính nếu định nghĩa nói vậy; báo cáo trung vị và bách phân vị thứ 85, chia theo loại liên hệ | phút | Nền tảng điện thoại; nền tảng trò chuyện; nhật ký công việc của công cụ ITSM | Bàn dịch vụ; quản lý sự cố | Tín hiệu công sức trong tinh chỉnh và lập kế hoạch năng lực | Hằng tuần |
| Tỷ lệ giải quyết ngay lần liên hệ đầu | Tỷ lệ các liên hệ được giải quyết ở lần liên hệ đầu mà không có liên hệ nào sau đó về cùng vấn đề | số liên hệ được giải quyết trong lúc liên hệ và không được theo sau bởi liên hệ lại về cùng vấn đề của cùng người dùng trong cửa sổ liên hệ lại / số liên hệ đủ điều kiện; các cuộc gọi chỉ cần chuyển tiếp và các cuộc gọi mà bàn không được kỳ vọng giải quyết bị loại trừ | phần trăm | Các trường giải quyết và liên kết của công cụ ITSM; xác nhận của người dùng nơi có thu thập | Bàn dịch vụ; quản lý sự cố | Kiểm tra định nghĩa hoàn thành, giải quyết ở lần chạm đầu | Hằng tháng |
| Tỷ lệ liên hệ lại | Tỷ lệ các liên hệ đã giải quyết được theo sau bởi một liên hệ khác về cùng vấn đề | số liên hệ được theo sau trong cửa sổ liên hệ lại (ví dụ bảy ngày, nêu trong định nghĩa) bởi một liên hệ khác từ cùng người dùng về cùng dịch vụ hoặc vấn đề / số liên hệ đã giải quyết trong kỳ trước; các liên hệ về một vấn đề mới bị loại trừ | phần trăm | Lịch sử liên kết và mở lại của công cụ ITSM; bản ghi liên hệ | Bàn dịch vụ; quản lý sự cố | Tỷ lệ lỗi lọt ra ngoài | Hằng tháng |

Giải quyết ngay lần liên hệ đầu có nhiều hơn một định nghĩa bảo vệ được, nên định nghĩa là một phần của chỉ số. Một số bàn tính một liên hệ là đã giải quyết khi nhân viên đóng phiếu trong cuộc gọi. Số khác chỉ tính khi người dùng không quay lại trong một cửa sổ. Cách thứ hai khó thu thập hơn và khó lợi dụng hơn, và nó là cách được dùng ở đây. Hãy nêu cửa sổ, nêu điều gì được tính là "cùng vấn đề", và áp dụng cả hai giống nhau mỗi kỳ.

## Khuyến nghị

### Tách liên hệ khỏi phiếu ngay từ đầu

**Cho liên hệ và phiếu các định nghĩa, mã định danh và số đếm riêng.** Một liên hệ là bản ghi về một nỗ lực tiếp cận bàn, và một phiếu là bản ghi về công việc. Hãy liên kết chúng trong công cụ để một liên hệ lại về cùng vấn đề hiển thị. Các báo cáo trộn hai cái cho một số liệu khối lượng mà không ai đối chiếu được với nền tảng điện thoại.

### Báo cáo khối lượng theo kênh, danh mục và tỷ lệ chuẩn hóa

**Cho thấy tổng khối lượng, khối lượng theo kênh, khối lượng theo danh mục và tỷ lệ liên hệ mỗi 100 người dùng.** Riêng tổng số làm lẫn tăng trưởng với rắc rối. Khối lượng điện thoại giảm có thể là sự chuyển sang trò chuyện, và liên hệ cổng tăng có thể là một thành công có chủ ý của tự phục vụ. Hãy vẽ chuỗi qua ít nhất một năm để tính mùa vụ như đầu kỳ học và cuối năm tài chính hiển thị.

### Dùng phân phối cho mọi thước đo thời gian

**Báo cáo trung vị và một bách phân vị cao cho thời gian đến khi trả lời và thời gian xử lý.** Giá trị trung bình của một phân phối lệch hầu như không mô tả trải nghiệm của ai. Trung vị cho thấy liên hệ điển hình, và bách phân vị thứ 85 hoặc 95 cho thấy cái đuôi chậm tệ đến đâu. Hãy nói số liên hệ mà con số dựa trên, và đánh dấu kết quả đọc là không đáng tin khi một hàng đợi chỉ xử lý một nhúm liên hệ trong kỳ (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

### Coi tỷ lệ bỏ cuộc là tín hiệu của nhu cầu và nhân sự

**Đọc tỷ lệ bỏ cuộc cùng thời gian đến khi trả lời và mẫu hình lượt đến.** Con người bỏ cuộc khi sự chờ dài hơn họ kỳ vọng, nên tỷ lệ tăng theo sự chờ, và sự chờ tăng khi lượt đến vượt năng lực. [Lý thuyết hàng đợi](https://en.wikipedia.org/wiki/Queueing_theory) giải thích vì sao sự chờ tăng dốc khi một hàng đợi tiến gần mức sử dụng đầy, đó là lý do một bàn chạy gần 100 phần trăm bận luôn có sự chờ dài và tỷ lệ bỏ cuộc cao. Hãy bố trí nhân sự theo mẫu hình lượt đến theo giờ và ngày thay vì theo giá trị trung bình hằng tháng, và cho thấy tỷ lệ bỏ cuộc theo thời điểm trong ngày (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi).

### Định nghĩa giải quyết ngay lần liên hệ đầu cẩn thận, rồi đo nó từ phía người dùng

**Dùng định nghĩa dựa trên liên hệ lại và xác nhận nó bằng một câu hỏi ngắn cho người dùng.** Chỉ đếm các liên hệ không quay lại trong một cửa sổ nêu rõ khó thổi phồng hơn một cờ do nhân viên đặt lúc đóng. Thêm một phép kiểm tra một câu hỏi, như "vấn đề của bạn đã được giải quyết chưa?", và so sánh nó với số liệu liên hệ lại. Khi hai cái không khớp, câu trả lời của người dùng là chỉ dẫn tốt hơn, và khoảng chênh chỉ ra nơi việc đóng là quá sớm.

### Dùng thời gian xử lý để lập kế hoạch, không để đặt mục tiêu

**Coi thời gian xử lý là đầu vào năng lực và công cụ chẩn đoán, và đừng bao giờ đặt mục tiêu để nhân viên vượt qua.** Một mục tiêu về thời gian xử lý trả công cho việc vội vàng, chuyển tiếp sớm và ghi tài liệu sơ sài. Hãy dùng phân phối theo loại liên hệ để lập kế hoạch nhân sự và tìm các liên hệ mất lâu hơn nhiều so với những cái tương tự, thường chỉ vào một bài viết còn thiếu, một công cụ vụng về hoặc một quy trình không rõ. Hãy nhắm vào nguyên nhân hệ thống, không phải nhân viên.

### Gắn chỉ số của bàn với công việc phân phối

**Rà soát các danh mục liên hệ hàng đầu cùng các đội sở hữu dịch vụ.** Mỗi tháng, lấy năm danh mục tạo ra nhiều liên hệ nhất mỗi 100 người dùng và hỏi thay đổi nào ở thượng nguồn sẽ loại bỏ chúng: một bản sửa, một bài viết, một thông báo lỗi tốt hơn, hoặc một lộ trình tự phục vụ. Ghi các câu trả lời vào tồn đọng của đội sở hữu. Điều này biến các con số của bàn thành công việc cải tiến và là cách dùng linh hoạt rõ ràng nhất của dữ liệu (xem chủ đề 3.6, Chỉ số quản lý tri thức, và chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa).

### Gồm mọi kênh trong cùng các định nghĩa

**Áp dụng cùng quy tắc đồng hồ và đếm cho điện thoại, trò chuyện, email, cổng, trực tiếp và nhắn tin.** Các kênh bất đồng bộ không có hàng đợi trực tiếp, nên thời gian đến khi trả lời có nghĩa khác nhau ở mỗi kênh. Hãy định nghĩa đồng hồ theo từng kênh, và báo cáo từng kênh riêng trước khi kết hợp. Một bàn chỉ công bố kênh tốt nhất của mình giấu trải nghiệm của mọi người khác.

### Nối các chỉ số với trải nghiệm của người dùng

**Ghép các thước đo vận hành với một câu hỏi hài lòng sau liên hệ và một ô nhập tự do.** Một câu trả lời nhanh cho một liên hệ thô lỗ hoặc vô ích là một kết quả tệ, và các đồng hồ không thấy được điều đó. Hãy cho thấy tỷ lệ phản hồi và cơ cấu người trả lời bên cạnh điểm, vì chỉ một phần tự chọn của người dùng trả lời (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo). Hãy đọc các bình luận cùng những người trả lời các liên hệ, trong một bối cảnh đội.

### Giữ các chỉ số ở cấp đội và hàng đợi

**Báo cáo theo hàng đợi, kênh, dịch vụ và đội, và giữ dữ liệu cấp nhân viên cho các cuộc trò chuyện huấn luyện mà nhân viên tham gia.** Xếp hạng từng nhân viên theo thời gian xử lý hoặc tỷ lệ giải quyết đẩy việc chọn các liên hệ dễ và né các liên hệ khó. Nó cũng làm hại lòng tin vào dữ liệu, và người dùng cảm nhận kết quả trong chất lượng sự giúp đỡ. Hãy dùng các con số cấp đội để hỏi hệ thống cần gì.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Khối lượng liên hệ | Nhân viên làm nản việc ghi nhận bằng cách chuyển người dùng sang các kênh không được đếm, hoặc tách một liên hệ thành nhiều để làm hàng đợi trông bận; người quản lý nhắm tới khối lượng thấp hơn | Tỷ lệ liên hệ mỗi 100 người dùng và việc đối chiếu định kỳ số đếm điện thoại với số đếm phiếu; một quy tắc cố định rằng mọi kênh đều được đếm |
| Tỷ lệ liên hệ | Mẫu số được chọn sau sự việc (ví dụ một định nghĩa rộng về "đang hoạt động") để tỷ lệ trông tốt hơn | Một định nghĩa có ngày bằng văn bản về "người dùng đang hoạt động" và các số đếm thô hiển thị bên cạnh tỷ lệ |
| Thời gian đến khi trả lời | Các liên hệ được trả lời bằng lời chào tự động hoặc chuyển sang một hàng đợi vắng, hoặc cuộc gọi được nhấc máy rồi giữ lại; email nhận một trả lời tự động được tính là câu trả lời | Định nghĩa đồng hồ là phản hồi đầu tiên của con người, và theo dõi tỷ lệ bỏ cuộc và liên hệ lại bên cạnh |
| Tỷ lệ bỏ cuộc | Người gọi bị ngắt trước khi được xếp hàng, khoảng ân hạn bị kéo dài, hoặc lời đề nghị gọi lại bị tính là một liên hệ đã trả lời | Bách phân vị thời gian đến khi trả lời, tỷ lệ hoàn tất gọi lại và khoảng ân hạn được công bố |
| Thời gian xử lý | Cuộc gọi bị vội, chuyển tiếp sớm, hoặc kết thúc trước khi vấn đề được giải quyết; ghi chú sơ sài; công việc được chuyển sang thời gian sau liên hệ mà đồng hồ loại trừ | Giải quyết ngay lần liên hệ đầu, tỷ lệ liên hệ lại, và một buổi rà soát mẫu chất lượng tài liệu do đội thực hiện |
| Tỷ lệ giải quyết ngay lần liên hệ đầu | Phiếu bị đóng trong cuộc gọi bất kể kết quả, "cùng vấn đề" được đọc hẹp, hoặc các liên hệ khó được phân loại là "không được kỳ vọng giải quyết" | Tỷ lệ liên hệ lại, xác nhận một câu hỏi của người dùng, và kiểm toán định kỳ các trường hợp loại trừ do đội thực hiện |
| Tỷ lệ liên hệ lại | Người dùng được bảo mở phiếu mới cho một theo dõi, hoặc các theo dõi được ghi dưới danh mục khác để chúng không liên kết | Quy tắc liên kết trong công cụ, một kiểm toán mẫu các liên hệ lặp lại không liên kết, và mức giải quyết do người dùng báo cáo |

Một kết quả đọc lành mạnh là một tập số liệu khớp với nhau. Thời gian đến khi trả lời và tỷ lệ bỏ cuộc dịch chuyển cùng nhau, thời gian xử lý thay đổi theo loại liên hệ chứ không theo mục tiêu của ngày, giải quyết ngay lần liên hệ đầu và liên hệ lại là hình ảnh phản chiếu của nhau cộng lại gần mức trần của chúng, và câu trả lời của người dùng cho "vấn đề của bạn đã được giải quyết chưa?" khớp với số liệu liên hệ lại. Một số liệu đơn lẻ cải thiện mạnh trong khi các số khác đứng yên là lý do để xem nó được thu thập ra sao trước khi ăn mừng. Một bàn bị lợi dụng thường cho thấy triệu chứng ở liên hệ lại, các danh mục lặp lại trong khối lượng, và khiếu nại tăng.

## Đánh đổi: ưu điểm và nhược điểm

| Lựa chọn | Ưu điểm | Chi phí hoặc rủi ro |
| --- | --- | --- |
| Thời gian xử lý trung bình làm số liệu tiêu đề | Đơn giản, có sẵn ở mọi nền tảng, dễ giải thích | Thưởng cho việc vội vàng, che giấu cái đuôi, và mời gọi các mục tiêu gây hại cho việc giải quyết |
| Trung vị và bách phân vị thứ 85 cho thời gian | Mô tả trường hợp điển hình và cái đuôi chậm | Cần đủ liên hệ để ổn định và giải thích thêm một chút |
| Giải quyết ngay lần liên hệ đầu theo cờ đóng của nhân viên | Dễ thu thập | Dễ thổi phồng và khó so sánh giữa các bàn |
| Giải quyết ngay lần liên hệ đầu theo cửa sổ liên hệ lại | Khó lợi dụng và gần hơn với trải nghiệm của người dùng | Cần liên kết tốt trong công cụ và phải chờ cửa sổ trôi qua mới báo cáo được |
| Tỷ lệ bỏ cuộc có khoảng ân hạn | Loại bỏ các lần ngắt máy ngẫu nhiên | Khoảng ân hạn có thể bị kéo dài để làm đẹp con số |
| Tỷ lệ liên hệ mỗi 100 người dùng | Tách tăng trưởng khỏi rắc rối | Phụ thuộc vào số người dùng đáng tin và một định nghĩa rõ ràng về "đang hoạt động" |
| Khảo sát sau liên hệ | Nắm bắt điều các đồng hồ không thấy | Tỷ lệ phản hồi thấp và không đều, và thiên lệch về phía người dùng có cảm xúc mạnh |
| Chỉ báo cáo theo đội và hàng đợi | Bảo vệ lòng tin và tập trung vào hệ thống | Cho ít chi tiết hơn cho việc huấn luyện cá nhân, vốn cần một quy trình riêng, kín |

Không bộ thước đo nào loại bỏ sự căng thẳng giữa tốc độ và sự chăm sóc. Một bàn trả lời mọi liên hệ trong vài giây mà giải quyết ít có hàng đợi tốt và dịch vụ kém, và một bàn dành thời gian để giải quyết cho đúng sẽ cho thấy thời gian xử lý và sự chờ dài hơn. Con đường qua là thống nhất kết quả nào quan trọng nhất quý này, làm sự đánh đổi tường minh, và rà soát cặp chỉ số giữ nó cân bằng. Nhanh hơn chỉ tốt hơn chừng nào việc giải quyết còn giữ vững.

## Câu hỏi để thảo luận với đội nhóm

**1. "Liên hệ" nghĩa là gì ở đây, và số đếm của chúng ta có khớp với điều nền tảng điện thoại và công cụ ITSM mỗi bên báo cáo không?**
Hãy yêu cầu nhóm truy một ngày liên hệ qua mọi kênh và so sánh số đếm từ hai hệ thống. Ghi lại các liên hệ không bao giờ thành phiếu và các phiếu không bao giờ bắt đầu từ liên hệ. Người điều phối nên chờ đợi một khoảng chênh lúc đầu và coi nó là một phát hiện về định nghĩa, không phải lỗi của con người. Thống nhất một quy tắc cho báo cáo kế tiếp và ai sở hữu nó.

**2. Khi chúng ta nói một liên hệ đã được giải quyết ở lần liên hệ đầu, làm sao chúng ta biết người dùng sẽ đồng ý?**
Rà soát mười liên hệ gần đây được đánh dấu là giải quyết ngay lần liên hệ đầu và kiểm tra xem có người dùng nào quay lại về cùng vấn đề không. Hỏi nhân viên lẽ ra có thể làm khác đi thế nào ở những cái đã quay lại. Cuộc thảo luận thường cho thấy việc đóng xảy ra trước khi người dùng sẵn sàng. Quyết định có thêm một xác nhận một câu hỏi không và cửa sổ liên hệ lại nên là gì.

**3. Điều gì xảy ra với người đang giữ máy, và khi nào họ bỏ cuộc?**
Xem đường cong bỏ cuộc theo thời gian đã chờ. Hầu hết các bàn thấy một điểm mà vượt quá đó mọi người rời đi hàng loạt, và điểm đó là giới hạn thực tế của hàng đợi. Hỏi những lựa chọn gọi lại, trò chuyện hay trả lời tự động nào đang được đưa ra, và liệu cái nào trong số đó được tính là đã trả lời khi vấn đề chưa được giải quyết. Người điều phối có thể dùng điều này để mở một cuộc thảo luận về bố trí nhân sự theo giờ, không phải theo tháng.

**4. Những con số thời gian xử lý nào của chúng ta sẽ thay đổi nếu chúng ta chú ý đến công việc sau liên hệ và việc chờ đợi?**
Liệt kê điều đồng hồ bao gồm và điều nó bỏ ra. Hỏi liệu có ai từng cảm thấy áp lực phải rút ngắn cuộc gọi, và họ đã làm gì. Câu hỏi này dễ trả lời trong một đội hơn trong một báo cáo, nên hãy cho mọi người cơ hội nói mà không gán tên. Thống nhất một định nghĩa và liệu thời gian xử lý sẽ chỉ được dùng để lập kế hoạch.

**5. Năm danh mục nào tạo ra nhiều liên hệ nhất mỗi 100 người dùng quý trước, và ai sở hữu bản sửa cho từng cái?**
Mang dữ liệu danh mục và những người sở hữu các dịch vụ bên dưới đến cùng một bàn. Với mỗi danh mục, hỏi phản ứng tốt nhất là một bản sửa, một bài viết, một thông báo tốt hơn, hay một lộ trình tự phục vụ. Điều quan trọng là ra về với các hạng mục trong tồn đọng và những người sở hữu có tên. Xem lại danh sách vào quý tới để thấy cái nào đã dịch chuyển.

**6. Chúng ta có đang báo cáo điều này ở cấp đội và hàng đợi không, và có ai đang dùng nó để so sánh cá nhân không?**
Hỏi thẳng nhóm liệu bất kỳ số liệu nào trong số này đã từng được dùng để đánh giá một người, và nó có tác động gì. Thảo luận bàn sẽ ngừng làm gì nếu việc so sánh cá nhân chấm dứt, và sẽ bắt đầu làm gì. Người điều phối nên ghi lại mọi ví dụ và mang chúng đến người sở hữu chỉ số để quyết định về chính sách. Mục đích là một cam kết bằng văn bản rằng dữ liệu mô tả hệ thống.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối có được cái nhìn tốt nhất về dịch vụ của chính mình từ bàn. Số liên hệ mỗi 100 người dùng sau một bản phát hành cho thấy nhanh liệu một thay đổi có gây nhầm lẫn không, và các danh mục cho thấy cần sửa gì tiếp. Các đội nên chờ đợi một buổi rà soát hằng tháng các danh mục hàng đầu và coi chúng là đầu vào tồn đọng, không đổ lỗi cho bàn vì báo cáo điều người dùng nói với nó. Hãy xin bàn các mẫu liên hệ cũng như số đếm, vì lời mà người dùng dùng thường lộ ra vấn đề về nhãn hoặc thiết kế.

### Đội dịch vụ và vận hành

Nhân viên bàn và các trưởng nhóm của họ cần những con số giúp họ lập kế hoạch và cải thiện mà không biến thành mục tiêu. Bố trí nhân sự theo giờ từ mẫu hình lượt đến, rà soát liên hệ lại và yêu cầu bài viết là những đầu ra hữu ích nhất. Nhân viên nên có tiếng nói trong cách các chỉ số được định nghĩa, vì họ biết các đồng hồ gây hiểu lầm ở đâu. Họ nên thấy các số liệu của đội mình trước và có thể thách thức chúng.

### Lãnh đạo và quản trị

Lãnh đạo cần một tập ngắn các số liệu khớp với nhau: khối lượng và tỷ lệ liên hệ, thời gian đến khi trả lời và tỷ lệ bỏ cuộc, giải quyết ngay lần liên hệ đầu và liên hệ lại, và một điểm hài lòng của người dùng kèm tỷ lệ phản hồi. Họ nên yêu cầu phân phối và ghi chú về các thay đổi định nghĩa, và nên chống lại việc đặt một mục tiêu đơn lẻ cho thời gian xử lý hoặc khối lượng. Mục tiêu chỉ về tốc độ mời gọi việc lợi dụng được mô tả ở trên. Quản trị nên ghi lại ai sở hữu mỗi định nghĩa (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

### Khách hàng và người dùng

Người dùng quan tâm họ có liên lạc được không, họ có được đối xử tốt không, và vấn đề có được sửa luôn không. Họ không quan tâm thời gian xử lý. Nói với họ bàn đo gì và hành động theo phản hồi của họ xây dựng lòng tin, và đảm bảo các kênh họ ưa thích được đo và bố trí nhân sự cũng vậy. Khách hàng mua dịch vụ được phục vụ bằng các cam kết rõ ràng trong một SLA hoặc một thỏa thuận trải nghiệm (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA, và chủ đề 6.2, Thỏa thuận mức trải nghiệm).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực vận hành một bàn dịch vụ khoảng một chục nhân viên cho chừng 4.000 người dùng lâm sàng và hành chính. Các con số dưới đây chỉ mang tính minh họa và không đến từ tổ chức thật nào.

Góc nhìn hằng tuần của đội cho thấy 1.900 liên hệ (minh họa), tương đương tỷ lệ liên hệ 47,5 liên hệ mỗi 100 người dùng (minh họa). Thời gian đến khi trả lời qua điện thoại có trung vị 40 giây và bách phân vị thứ 85 là 6 phút (minh họa). Tỷ lệ bỏ cuộc là 14 phần trăm (minh họa) và tăng mạnh vào các buổi sáng ngày thường từ 08:00 đến 09:30. Thời gian xử lý trung vị là 7 phút, và bách phân vị thứ 85 là 22 phút (minh họa). Giải quyết ngay lần liên hệ đầu theo cửa sổ liên hệ lại là 61 phần trăm (minh họa), và tỷ lệ liên hệ lại bảy ngày là 19 phần trăm (minh họa).

Ở buổi rà soát hằng tháng, trưởng bàn và đội ứng dụng lâm sàng xem các danh mục. Các sự cố đăng nhập và thẻ ra vào chiếm một phần lớn các liên hệ buổi sáng, và một thay đổi gần đây đối với việc đăng nhập ứng dụng lâm sàng tạo ra một đỉnh liên hệ về cùng một thông báo lỗi. Bàn và đội ứng dụng quyết định làm ba việc. Họ sẽ đổi thông báo lỗi và thêm một liên kết đến bài viết, họ sẽ thêm lựa chọn gọi lại cho giờ cao điểm buổi sáng, và họ sẽ dời giờ bắt đầu của một ca sớm hơn một giờ để phủ mẫu hình lượt đến lúc 08:00. Họ sẽ rà soát tỷ lệ bỏ cuộc, liên hệ lại và tỷ lệ liên hệ cho danh mục đó sau bốn tuần.

Giữa quý, một người quản lý đề xuất mục tiêu thời gian xử lý 5 phút để giảm hàng đợi. Đội cho thấy rằng các liên hệ ở bách phân vị thứ 85 là những cái chậm mà quan trọng nhất và một mục tiêu sẽ đẩy nhân viên kết thúc cuộc gọi sớm. Họ cũng nhận thấy số liệu giải quyết ngay lần liên hệ đầu đã tăng lên 78 phần trăm (minh họa) trong một tuần trong khi tỷ lệ liên hệ lại tăng lên 27 phần trăm (minh họa). Một buổi rà soát thấy vài ca đã bắt đầu đóng phiếu trong cuộc gọi kèm lời nhắn người dùng gọi lại, được tính là một lần giải quyết ngay lần liên hệ đầu. Đội khôi phục định nghĩa dựa trên liên hệ lại, thêm câu hỏi xác nhận của người dùng, và bỏ mục tiêu thời gian xử lý. Từ đó tỷ lệ bỏ cuộc, thời gian đến khi trả lời và liên hệ lại được báo cáo cùng nhau.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy coi phản hồi của bàn là đầu vào cho cải tiến liên tục: một buổi rà soát định kỳ cùng các bên liên quan về các lý do liên hệ hàng đầu và một thay đổi để loại bỏ một nguyên nhân. Điều cần lưu ý là các mục tiêu thời gian xử lý đẩy nhân viên vội vàng, nên hãy giữ chúng ra khỏi các đánh giá cá nhân.

### AI

Phân loại ưu tiên bằng AI và các trả lời soạn sẵn có thể cắt thời gian đến khi trả lời và thời gian xử lý trong khi thay đổi những gì đến tay con người, nên các liên hệ còn lại khó hơn và các giá trị trung bình gây hiểu lầm. Hãy ghép tốc độ với tỷ lệ liên hệ lại và tỷ lệ các trả lời do AI soạn mà một nhân viên đã thay đổi đáng kể. Điều cần lưu ý là một tác tử ảo kết thúc một cuộc trò chuyện không có nghĩa là một vấn đề đã được giải quyết, nên hãy đếm các liên hệ quay lại.

### Tự động hóa

Hãy thu thập các sự kiện liên hệ, hàng đợi và trạng thái một cách tự động từ hệ thống điện thoại và phiếu, và đo tự động hóa định tuyến về các lần định tuyến sai và các liên hệ nảy giữa các hàng đợi. Điều cần lưu ý là việc phân loại tự động trôi, nên hãy lấy mẫu phiếu để kiểm tra danh mục có đúng không.

### Phân tích

Hãy dùng bách phân vị cho thời gian trả lời, cho thấy số liên hệ đứng sau mỗi tỷ lệ, và tách các lý do liên hệ để quyết định là loại bỏ nguyên nhân nào. Điều cần lưu ý là các hàng đợi nhỏ tạo ra tỷ lệ phần trăm nhiễu, nên hãy cho thấy các khoảng hoặc số đếm cho các dịch vụ khối lượng thấp.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Bàn thường là một hộp thư chung hoặc một kênh trò chuyện do bất kỳ ai rảnh xử lý. Hãy đếm liên hệ theo kênh, gắn thẻ danh mục, và xem năm cái hàng đầu mỗi tháng cùng những người xây sản phẩm. Đừng mua nền tảng trung tâm cuộc gọi trước khi khối lượng biện minh, và đừng đặt mục tiêu tốc độ khi hai người trả lời mọi liên hệ.

**Doanh nghiệp nhỏ.** Một người hoặc một nhà cung cấp thuê ngoài thường vận hành một bàn dịch vụ được lưu trữ. Hãy dùng các báo cáo chuẩn của công cụ, yêu cầu nhà cung cấp cho định nghĩa của họ về liên hệ, giải quyết và bỏ cuộc bằng văn bản, và thỉnh thoảng xuất dữ liệu thô. Một câu hỏi ngắn lặp lại cho người dùng, như "vấn đề của bạn đã được giải quyết chưa?", cho nhiều hiểu biết hơn một bảng điều khiển dài.

**Doanh nghiệp lớn.** Nhiều hàng đợi, ngôn ngữ, công cụ và nhà cung cấp dẫn đến các định nghĩa khác nhau cho cùng một từ. Hãy thống nhất một định nghĩa chung về liên hệ, giải quyết ngay lần liên hệ đầu và liên hệ lại, và một tập kênh chung. Báo cáo theo hàng đợi và dịch vụ, với một góc nhìn chuẩn cho lãnh đạo, và dùng dữ liệu quản lý nhân lực để bố trí nhân sự theo mẫu hình lượt đến. Chỉ so sánh các hàng đợi sau khi kiểm tra chúng dùng cùng định nghĩa.

**Chính phủ và khu vực công.** Bản ghi có thể có nghĩa vụ lưu giữ, truy cập, kiểm toán và riêng tư, và một hợp đồng có thể ấn định các chỉ số và mục tiêu cho một bàn thuê ngoài. Hãy đọc các chỉ số hợp đồng một cách phê phán và thêm các thước đo rào chắn vào báo cáo ngay cả khi chúng không bắt buộc. Giữ dấu vết kiểm toán của các thay đổi định nghĩa, và tránh thu thập dữ liệu cá nhân không cần thiết. Các dịch vụ công thường phục vụ người dùng có ít lựa chọn kênh, nên khả năng tiếp cận của mỗi kênh là một phần của bức tranh (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực để có các chỉ số bàn tốt hơn là một dịch vụ rẻ hơn và tốt hơn, và lợi tức đến ở ba nơi. Thứ nhất, ít liên hệ lặp lại hơn: mỗi liên hệ lại là công việc bàn lẽ ra không cần làm và thời gian người dùng không muốn bỏ ra. Thứ hai, các bản sửa ở thượng nguồn: dữ liệu danh mục của bàn có thể loại bỏ cả một lớp liên hệ khi các đội phân phối hành động theo nó. Thứ ba, nhân sự tốt hơn: dữ liệu mẫu hình lượt đến cho phép người quản lý đặt con người vào lúc người dùng cần họ, điều này giảm đồng thời tỷ lệ bỏ cuộc và thời gian nhàn rỗi.

Chi phí thu thập khiêm tốn nơi nền tảng điện thoại và công cụ ITSM đã ghi lại các sự kiện. Các chi phí chính là thời gian để thống nhất định nghĩa, sửa liên kết giữa liên hệ và phiếu, thêm một câu hỏi ngắn sau liên hệ, và rà soát dữ liệu cùng các đội phân phối.

Không có số liệu lợi tức nào được đưa ra ở đây, vì các số liệu đã công bố thay đổi theo tổ chức và phương pháp của nó, và không cái nào được xác minh cho chủ đề này. Hãy ước lượng lợi tức từ dữ liệu của chính bạn. Lấy số liên hệ lại và một thời gian xử lý đã đo, nhân với chi phí một giờ nhân viên, và so sánh với chi phí của bản sửa. Hãy mô tả kết quả như một ước lượng kèm các giả định của nó, và xem lại sau thay đổi (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Đặt mục tiêu thời gian xử lý trung bình.** Nó thưởng cho việc vội vàng và chuyển tiếp sớm. Hãy dùng phân phối theo loại liên hệ để lập kế hoạch, và ghép nó với giải quyết ngay lần liên hệ đầu và liên hệ lại.
- **Tính một cờ đóng do nhân viên đặt là giải quyết ngay lần liên hệ đầu.** Nó có thể được đặt bất kể kết quả. Hãy dùng một cửa sổ liên hệ lại và một xác nhận của người dùng.
- **Xếp hạng từng nhân viên.** Nó đẩy việc chọn lựa và hành vi phòng thủ. Hãy báo cáo theo đội và hàng đợi, và giữ các cuộc trò chuyện cá nhân riêng tư và hỗ trợ.
- **Báo cáo một giá trị trung bình mọi kênh che giấu kênh yếu nhất.** Điện thoại, trò chuyện và email hành xử khác nhau. Hãy báo cáo từng kênh riêng trước khi kết hợp.
- **Đọc khối lượng mà không có mẫu số.** Một sự tăng có thể là tăng trưởng. Hãy cho thấy liên hệ mỗi 100 người dùng và cơ cấu danh mục.
- **Để bàn ngoài các quyết định phân phối.** Số đếm được báo cáo lên bảng điều khiển và không bao giờ được thảo luận với đội sản phẩm là lãng phí. Hãy tổ chức một buổi rà soát hằng tháng các danh mục hàng đầu cùng người sở hữu của chúng.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | Mỗi người đếm liên hệ khác nhau | Một vài định nghĩa được viết cho một số hàng đợi | Một định nghĩa bằng văn bản cho mỗi chỉ số, gồm điểm bắt đầu và dừng của đồng hồ và các trường hợp loại trừ | Thay đổi định nghĩa được ghi lại và rà soát theo lịch | Định nghĩa được chia sẻ với nhà cung cấp và khách hàng và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Thu nhận và chất lượng dữ liệu | Số đếm được ghép bằng tay từ các bản xuất | Dữ liệu điện thoại và ITSM được báo cáo riêng | Liên hệ và phiếu được liên kết, với thu nhận tự động qua các kênh | Liên kết, độ đầy đủ và đối chiếu được đo và theo dõi xu hướng | Dữ liệu liên hệ được chia sẻ giữa các đội và nhà cung cấp qua các giao diện đã thỏa thuận |
| Sử dụng trong cải tiến | Các con số được báo cáo nhưng hiếm khi thảo luận | Thỉnh thoảng rà soát các giai đoạn bận | Rà soát hằng tháng các danh mục hàng đầu cùng chủ sở hữu dịch vụ | Cải tiến được lên kế hoạch, tài trợ và kiểm tra so với liên hệ lại và khối lượng | Dữ liệu của bàn thúc đẩy ưu tiên tồn đọng giữa các đội sản phẩm và nhà cung cấp |
| Rào chắn và lòng tin | Mục tiêu tốc độ áp lên cá nhân | Một số nhận thức về việc lợi dụng | Các thước đo ghép đôi được báo cáo cùng nhau và không xếp hạng cá nhân | Kiểm tra lợi dụng được đội kiểm toán và xác nhận của người dùng được dùng | Người dùng và nhân viên giúp đặt các thước đo và thấy kết quả |

## Danh sách kiểm tra

- [ ] Liên hệ và phiếu được định nghĩa và đếm riêng, và các số đếm đối chiếu được.
- [ ] Mỗi kênh có một đồng hồ bằng văn bản cho thời gian đến khi trả lời và một cách xử lý nêu rõ các trả lời tự động.
- [ ] Các thước đo thời gian được báo cáo là trung vị và một bách phân vị cao kèm cỡ mẫu.
- [ ] Tỷ lệ bỏ cuộc có một khoảng ân hạn bằng văn bản và được cho thấy cùng thời gian đến khi trả lời.
- [ ] Giải quyết ngay lần liên hệ đầu dùng một cửa sổ liên hệ lại và một nghĩa nêu rõ của "cùng vấn đề".
- [ ] Một xác nhận một câu hỏi của người dùng được thu thập, với tỷ lệ phản hồi được cho thấy.
- [ ] Tỷ lệ liên hệ mỗi 100 người dùng được báo cáo, với định nghĩa bằng văn bản về "người dùng đang hoạt động".
- [ ] Không đặt mục tiêu thời gian xử lý cho nhân viên, và không chỉ số nào xếp hạng cá nhân.
- [ ] Các danh mục liên hệ hàng đầu được rà soát hằng tháng cùng các đội sở hữu, và hành động đi vào một tồn đọng.
- [ ] Định nghĩa được kiểm soát phiên bản và mỗi thay đổi có ngày.

## Lời nhắc AI

**Soạn các định nghĩa chính xác cho các thước đo cốt lõi của bàn.**

```text
I am writing definitions for these service desk measures: [list of measures,
for example contact volume, time to answer, abandonment, handle time, first
contact resolution, recontact]. Our channels are [list channels] and our tools
are [telephony or chat platform and ITSM tool]. For each measure, draft the
definition, formula, clock start and stop, inclusions and exclusions, unit, and
data source. Use the same terms throughout and do not invent benchmark values or
targets. List your assumptions and the questions I should answer to finish.
```

**Rà soát một tập số liệu của bàn để tìm dấu hiệu lợi dụng.**

```text
Here are our service desk figures for [period]: [paste figures such as volume,
time to answer percentiles, abandonment, handle time percentiles, first contact
resolution, recontact]. Our definitions are [paste definitions]. Look for
patterns that suggest a figure improved because of how it is collected and not
because the service improved, and suggest what to check in the data for each.
Do not accuse individuals and do not invent thresholds. List your assumptions
and what you could not determine from the data given.
```

**Chuẩn bị một buổi rà soát hằng tháng các danh mục liên hệ hàng đầu.**

```text
I am preparing a monthly review of service desk contact categories for
[service or team]. I have [category counts and contacts per 100 users for the
last three months]. Draft an agenda, a short table template, and a list of
questions to ask each service owner about causes, fixes, articles, and
self-service options. Suggest how to record actions in a backlog. Do not invent
numbers or causes. List your assumptions and the data I should bring.
```

**Thiết kế một khảo sát ngắn sau liên hệ.**

```text
I want to measure whether users felt helped after contacting the [service desk
name] by [channel]. Draft [number] neutral questions, including one on whether
the issue was resolved, a plan for when to send them, and how to report the
response rate and respondent mix. Flag wording that could bias answers and note
privacy considerations given the data will be held in [tool]. Do not invent
benchmark response rates. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề nào định nghĩa một chỉ số liên quan và rào chắn nên nằm bên cạnh một thước đo của bàn.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ mọi chỉ số được ghép với một vectơ lợi dụng và một rào chắn.

## Điểm chính cần nhớ

- Đếm liên hệ và phiếu riêng, định nghĩa cả hai, và chuẩn hóa khối lượng theo quy mô cơ sở người dùng.
- Báo cáo thời gian dưới dạng trung vị và một bách phân vị cao, và nói số liên hệ mà mỗi số liệu dựa trên.
- Đọc tốc độ trả lời, tỷ lệ bỏ cuộc và thời gian xử lý như dấu hiệu của công sức, và ghép chúng với giải quyết ngay lần liên hệ đầu và liên hệ lại như dấu hiệu của kết quả.
- Định nghĩa giải quyết ngay lần liên hệ đầu theo việc người dùng có quay lại không, và xác nhận nó bằng một phép kiểm tra một câu hỏi.
- Dùng bàn như một cảm biến: rà soát các danh mục hàng đầu hằng tháng cùng các đội sở hữu dịch vụ.
- Đo các hàng đợi, kênh và dịch vụ, và không bao giờ xếp hạng từng nhân viên.

## Tài liệu tham khảo và đọc thêm

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
