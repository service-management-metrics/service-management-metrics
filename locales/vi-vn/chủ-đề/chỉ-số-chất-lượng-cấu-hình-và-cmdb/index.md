# Chỉ số chất lượng cấu hình và CMDB

**Một cơ sở dữ liệu cấu hình chỉ xứng đáng chỗ đứng của nó khi mọi người đủ tin để dùng nó trong một thay đổi hay một sự cố, nên hãy đo chất lượng của nó bằng việc nó trả lời các câu hỏi thật tốt đến đâu, và để các đội sở hữu dịch vụ giữ bản ghi của chính họ hiện hành.**

## Tổng quan và động lực

Khi một máy chủ cơ sở dữ liệu hỏng lúc ba giờ sáng, ai đó hỏi dịch vụ nào phụ thuộc vào nó. Khi một đội lên kế hoạch một thay đổi, ai đó hỏi còn gì khác có thể hỏng. Câu trả lời nên đến từ một bản ghi về những thứ tạo nên dịch vụ của bạn và cách chúng kết nối. Bản ghi đó là chủ đề của quản lý cấu hình, và cơ sở dữ liệu đứng sau nó là cơ sở dữ liệu quản lý cấu hình, thường viết tắt là CMDB.

Một [hạng mục cấu hình](https://en.wikipedia.org/wiki/Configuration_item) (CI) là bất kỳ thành phần nào cần được quản lý để giao một dịch vụ CNTT: một máy chủ, một ứng dụng, một cơ sở dữ liệu, một thiết bị mạng, một tài khoản đám mây, một hợp đồng. Một [cơ sở dữ liệu quản lý cấu hình](https://en.wikipedia.org/wiki/Configuration_management_database) lưu thông tin về các CI, thuộc tính của chúng, và các quan hệ giữa chúng. Nơi quản lý tài sản hỏi bạn có gì, ai sở hữu và nó tốn bao nhiêu (xem chủ đề 7.1, Chỉ số quản lý tài sản CNTT), quản lý cấu hình hỏi các phần khớp với nhau ra sao và cái gì phụ thuộc vào cái gì.

CMDB có tiếng tăm lẫn lộn, và tiếng tăm đó là xứng đáng. Nhiều cái được xây như bản đồ toàn diện, đầy dữ liệu mục ruỗng nhanh hơn bất kỳ ai sửa được, rồi bị bỏ. Truyền thống linh hoạt và DevOps đưa ra một điểm khởi đầu tốt hơn. Các đội mô tả hạ tầng của họ dưới dạng mã có một định nghĩa có thẩm quyền, được kiểm soát phiên bản về những gì họ chạy, và họ có thể công bố nó vào bản ghi chung tự động. [Hạ tầng dưới dạng mã](https://en.wikipedia.org/wiki/Infrastructure_as_code) biến bản ghi thành sản phẩm phụ của phân phối. ITIL 4 mô tả thực hành là quản lý cấu hình dịch vụ và nhấn mạnh thông tin cần thiết để hỗ trợ quyết định, không phải sự đầy đủ vì chính nó.

Chất lượng trong một bản ghi cấu hình có nhiều phần, và chúng ánh xạ vào ý niệm rộng hơn về [tính toàn vẹn dữ liệu](https://en.wikipedia.org/wiki/Data_integrity):

- **Độ đầy đủ:** các CI và thuộc tính quan trọng hiện diện.
- **Độ chính xác:** điều bản ghi nói khớp với thực tế.
- **Tính kịp thời:** thay đổi xuất hiện trong bản ghi đủ sớm để hữu ích.
- **Tính nhất quán:** cùng một thứ không được ghi hai lần dưới những tên khác nhau. Khớp các bản ghi chỉ cùng một thứ là vấn đề của [giải quyết thực thể (entity resolution)](https://en.wikipedia.org/wiki/Entity_resolution).
- **Chất lượng quan hệ:** các phụ thuộc giữa các CI hiện diện và đúng. Đây là nơi hầu hết giá trị, và hầu hết sự mục ruỗng, sống.

Phép thử sâu nhất của một CMDB là việc sử dụng. Một bản ghi mà mọi người tham khảo trong sự cố và thay đổi, và sửa khi nó sai, là lành mạnh. Một bản ghi chỉ được kiểm toán thì không. Các thước đo dưới đây vì vậy ghép các thước đo chất lượng với các thước đo sử dụng.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng với một nếp gấp: độ đầy đủ dễ bị thổi phồng bằng giá trị mặc định, và độ chính xác dễ tuyên bố mà không kiểm tra. Hãy khăng khăng đòi bằng chứng độc lập và các thước đo sử dụng (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Bắt đầu với các câu hỏi.** Quyết định bạn cần bản ghi trả lời gì, và chỉ xây cái đó.
- **Ưu tiên một bản ghi nhỏ hơn, được tin cậy hơn một bản ghi lớn hơn, đáng ngờ.** Phạm vi lớn lên khi lòng tin được giành.
- **Để nguồn sự thật nuôi bản ghi.** Đường ống, API đám mây và khám phá nên ghi vào nó, không phải con người với bảng tính.
- **Để các đội dịch vụ sở hữu bản ghi dịch vụ của họ.** Họ biết các phụ thuộc của mình, và họ cảm nhận chi phí của lỗi.
- **Đo bằng việc sử dụng cũng như chất lượng.** Một bản ghi tốt được tham khảo.
- **Kiểm tra với thực tế.** Kiểm thử bản ghi bằng cách hỏi nó có dự đoán điều xảy ra không.
- **Sửa ở nguồn.** Một bản ghi sai là một triệu chứng. Hãy tìm quy trình để nó trôi.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ đầy đủ CI | Tỷ lệ CI trong phạm vi có mọi thuộc tính bắt buộc được điền giá trị hợp lệ | số CI trong phạm vi có mọi thuộc tính bắt buộc hợp lệ / số CI trong phạm vi | phần trăm | CMDB, quy tắc thuộc tính | Quản lý cấu hình dịch vụ; quản lý tài sản CNTT | Định nghĩa hoàn thành gồm mô tả dịch vụ | Hằng tháng |
| Độ chính xác CI | Tỷ lệ CI lấy mẫu có bản ghi khớp với bằng chứng trên các thuộc tính bắt buộc | số CI lấy mẫu khớp trên mọi thuộc tính bắt buộc / số CI được lấy mẫu | phần trăm | Mẫu kiểm toán so với hệ thống đang chạy | Quản lý cấu hình dịch vụ | Trạng thái hạ tầng dưới dạng mã khớp với thực tế | Hằng quý |
| Độ phủ phụ thuộc | Tỷ lệ dịch vụ trọng yếu có các phụ thuộc thượng nguồn và hạ nguồn được vẽ bản đồ và rà soát | số dịch vụ trọng yếu có bản đồ phụ thuộc được rà soát trong 90 ngày qua / số dịch vụ trọng yếu | phần trăm | Quan hệ CMDB và bản ghi rà soát | Quản lý cấu hình dịch vụ; quản lý tính sẵn sàng | Rà soát kiến trúc và quyền sở hữu dịch vụ | Hằng quý |
| Tỷ lệ trúng của dự đoán tác động | Tỷ lệ sự cố và thay đổi mà các dịch vụ thực sự bị ảnh hưởng nằm trong tác động CMDB dự đoán | số sự cố hoặc thay đổi mà mọi dịch vụ bị ảnh hưởng đều được dự đoán / số sự cố hoặc thay đổi được rà soát | phần trăm | Rà soát sau sự cố và bản ghi thay đổi so với truy vấn CMDB | Quản lý sự cố; hỗ trợ thay đổi | Phát hiện rà soát không đổ lỗi về phụ thuộc còn thiếu | Hằng quý |
| Tỷ lệ CI trùng lặp | Tỷ lệ CI trùng lặp với một CI khác | số CI được quy tắc khớp đánh dấu là trùng và được xác nhận trong rà soát / số CI trong phạm vi | phần trăm | Báo cáo khớp CMDB và mẫu rà soát | Quản lý cấu hình dịch vụ | Nguồn sự thật duy nhất | Hằng tháng |
| Độ trễ cập nhật | Độ trễ giữa một thay đổi của một CI trong thế giới thực và cập nhật của nó trong CMDB | trung vị và bách phân vị thứ 85 của số giờ hoặc ngày từ sự kiện thay đổi đến cập nhật CMDB | giờ hoặc ngày | Sự kiện thay đổi và đường ống so với dấu thời gian CMDB | Quản lý cấu hình dịch vụ; hỗ trợ thay đổi | Đăng ký tự động trong đường ống | Hằng tháng |
| Tỷ lệ sử dụng CMDB | Tỷ lệ sự cố và thay đổi tham chiếu các CI, và trong số đó, tỷ lệ người dùng báo bản ghi đã giúp ích | số bản ghi tham chiếu một CI hợp lệ / số sự cố và thay đổi trong kỳ; cộng tỷ lệ bản ghi được rà soát mà dữ liệu CI đã giúp ích | phần trăm | Công cụ ITSM, lời nhắc phản hồi ngắn | Quản lý sự cố; hỗ trợ thay đổi | Các đội dùng bản ghi chung trong công việc | Hằng tháng |

Hãy định nghĩa phạm vi của "CI trong phạm vi" theo lớp và theo mức trọng yếu, và ghi lại. Một CI chỉ chính xác trên các thuộc tính bạn nêu là bắt buộc. Độ trễ cập nhật bắt đầu ở sự kiện thật, như một lần triển khai hoặc một lần mua, và dừng khi CMDB phản ánh nó. Tỷ lệ trúng của dự đoán tác động đòi hỏi một bước rà soát ghi lại những dịch vụ nào thực sự bị ảnh hưởng, và nó chỉ đáng tin bằng việc rà soát đó.

## Khuyến nghị

### Quyết định bản ghi để làm gì

**1. Viết ra các câu hỏi mà CMDB phải trả lời.** Những câu điển hình là: cái gì phụ thuộc vào thành phần này, ai sở hữu dịch vụ này, gần đây có gì thay đổi, một thất bại ở đây sẽ ảnh hưởng gì, và cái gì hết hỗ trợ. Với mỗi câu hỏi, nêu tên các lớp CI, thuộc tính và quan hệ cần thiết. Bất cứ thứ gì không cần để trả lời một câu hỏi là ứng viên để bỏ.

**2. Bắt đầu với các dịch vụ quan trọng nhất.** Chọn một nhúm dịch vụ trọng yếu, vẽ bản đồ chúng đầu-cuối, và làm đúng trước khi thêm nữa. Một bản đồ đáng tin của mười dịch vụ giúp nhiều hơn một bản đồ đáng ngờ của một nghìn. Mở rộng khi lòng tin và việc sử dụng lớn lên.

**3. Định nghĩa lớp, thuộc tính và loại quan hệ đơn giản.** Một danh sách ngắn các lớp CI (dịch vụ, ứng dụng, cơ sở dữ liệu, máy chủ, mạng, tài nguyên đám mây) và loại quan hệ (phụ thuộc vào, chạy trên, kết nối với, thuộc sở hữu của) bao quát hầu hết nhu cầu. Một mô hình cố nắm bắt mọi thứ khó điền và khó truy vấn hơn. Hãy giữ một mô hình bằng văn bản và đổi nó có chủ đích.

### Nuôi bản ghi từ nguồn

**4. Công bố từ đường ống và mã.** Nơi hạ tầng và ứng dụng được định nghĩa dưới dạng mã, hãy để đường ống phân phối tạo, cập nhật và cho nghỉ hưu các CI ở mỗi thay đổi, gồm thông tin sở hữu và phụ thuộc được khai báo cạnh mã. Coi khai báo là một phần của định nghĩa hoàn thành cho một dịch vụ. Điều này làm độ trễ cập nhật gần bằng không và giữ bản ghi căn chỉnh với những gì chạy.

**5. Dùng khám phá như ý kiến thứ hai.** [Khám phá dịch vụ](https://en.wikipedia.org/wiki/Service_discovery) trên mạng và đám mây tìm ra cái thực sự đang chạy và cách nó kết nối. Hãy so sánh nó với bản ghi đã khai báo. Sự khác biệt là phát hiện: hoặc khai báo thiếu cái gì đó hoặc có cái gì đó đang chạy mà không nên. Khám phá một mình tạo ra dữ liệu nhiễu không có quyền sở hữu, nên hãy dùng nó để kiểm tra, không phải để soạn.

**6. Dùng định danh ổn định và quy tắc khớp.** Bản trùng lặp phát sinh khi các nguồn khác nhau đặt tên cùng một thứ khác nhau. Hãy thống nhất một định danh duy nhất cho mỗi lớp CI, ghi định danh nguồn, và chạy quy tắc khớp để tìm và gộp bản trùng. Hãy rà soát các lần khớp bằng tay trên một mẫu, vì gộp tự động có thể gộp các thứ khác nhau.

**7. Giao cho mỗi đội dịch vụ quyền sở hữu phần của họ.** Đội xây và vận hành một dịch vụ ở vị trí tốt nhất để biết các phụ thuộc của nó và nhận ra lỗi. Hãy làm cho họ dễ dàng: một mẫu, một buổi rà soát ngắn lúc lập kế hoạch, và phản hồi khi dữ liệu của họ được dùng. Các đội trung tâm sở hữu mô hình, công cụ và kiểm tra, không phải mọi bản ghi.

### Đo chất lượng và sử dụng

**8. Kiểm toán độ chính xác bằng lấy mẫu.** Mỗi quý, hãy rút một mẫu ngẫu nhiên CI và kiểm tra chúng với hệ thống đang chạy, và một mẫu thứ hai từ hệ thống đang chạy để kiểm tra chúng xuất hiện trong bản ghi. Báo cáo độ chính xác theo lớp và cho thấy các nguồn lỗi chính. Giữ phương pháp mẫu cố định để xu hướng có nghĩa.

**9. Kiểm thử bản đồ với các sự cố.** Sau một sự cố hay thay đổi đáng kể, hãy so sánh các dịch vụ thực sự bị ảnh hưởng với những gì CMDB dự đoán. Ghi lại các lần trượt và sửa các phụ thuộc còn thiếu. Đây là phép thử độ chính xác có ý nghĩa nhất, vì nó kiểm tra bản ghi với sự kiện, và tỷ lệ trúng cải thiện khi bản đồ được sửa. Hãy dùng rà soát không đổ lỗi để mọi người sẵn sàng báo các lần trượt (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi).

**10. Theo dõi việc sử dụng và hỏi nó có giúp ích không.** Đếm mức độ thường xuyên sự cố và thay đổi tham chiếu CI, và hỏi người xử lý và người phê duyệt một câu ngắn về việc bản ghi có giúp không. Một tỷ lệ sử dụng tăng kèm các câu trả lời tích cực là dấu hiệu rõ nhất của giá trị. Một tỷ lệ sử dụng thấp nghĩa là mọi người không tin bản ghi hoặc không biết nó tồn tại, và cả hai đều sửa được.

**11. Rà soát bản đồ phụ thuộc đều đặn cùng người sở hữu.** Phụ thuộc thay đổi khi phần mềm tiến hóa. Hãy nhờ người sở hữu các dịch vụ trọng yếu xác nhận bản đồ của họ mỗi quý, lý tưởng là trong một cuộc trao đổi lập kế hoạch hoặc kiến trúc. Dùng ngày xác nhận làm thuộc tính, và cho thấy các bản đồ quá hạn.

### Giữ trung thực và tương xứng

**12. Cho nghỉ hưu những gì không ai dùng.** Hãy gỡ các lớp CI và thuộc tính mà không câu hỏi nào cần và không ai tham khảo. Ít trường hơn, tốt hơn nâng độ chính xác. Hãy rà soát mô hình hằng năm và ghi lại cái gì bị gỡ và vì sao. Một bản ghi nhỏ hơn có ít thứ hơn để giữ đúng, và nó khiến các thước đo chất lượng dễ đạt một cách trung thực hơn.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ đầy đủ CI | Điền thuộc tính bắt buộc bằng giá trị mặc định hay giữ chỗ; thu hẹp danh sách bắt buộc | Đếm giá trị mặc định và giữ chỗ; danh sách bắt buộc cố định; mẫu độ chính xác |
| Độ chính xác CI | Lấy mẫu các lớp dễ; kiểm toán sau một đợt dọn dẹp | Mẫu ngẫu nhiên rút độc lập từ cả hai chiều; phương pháp cố định |
| Độ phủ phụ thuộc | Đánh dấu bản đồ là đã rà soát mà không đọc; chỉ vẽ các phụ thuộc tầm thường | Tỷ lệ trúng của dự đoán tác động; kiểm tra ngẫu nhiên một bản đồ với lưu lượng thật |
| Tỷ lệ trúng của dự đoán tác động | Chọn các sự cố đã diễn ra tốt; ghi các dịch vụ bị ảnh hưởng một cách hẹp | Rà soát mọi sự cố đáng kể; người rà soát ngoài đội sở hữu |
| Tỷ lệ CI trùng lặp | Gộp các CI riêng biệt để hạ tỷ lệ; nới quy tắc khớp | Lấy mẫu các lần gộp xem có đúng không; ghi nhật ký quy tắc gộp |
| Độ trễ cập nhật | Ghi lùi ngày các sự kiện thay đổi; chỉ đếm các cập nhật tự động | So sánh dấu thời gian sự kiện và cập nhật từ hệ thống nguồn; dấu vết kiểm toán |
| Tỷ lệ sử dụng CMDB | Thêm tham chiếu CI cho có lệ; biến trường thành bắt buộc với bất kỳ giá trị nào | Kiểm tra CI được tham chiếu có liên quan không; câu hỏi phản hồi về tính hữu ích |

Một kết quả đọc lành mạnh là một bản ghi nhỏ hơn với độ chính xác đo được cao, bản đồ phụ thuộc dự đoán được các sự cố thật, độ trễ cập nhật gần bằng không cho các lớp tự động, và những người nói họ dùng bản ghi vì nó giúp ích.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| CMDB toàn diện | Cái nhìn rộng; hỗ trợ nhiều trường hợp sử dụng | Tốn kém để giữ đúng; mục ruỗng |
| CMDB tối thiểu, theo câu hỏi | Được tin cậy và rẻ | Có khoảng trống; cần kỷ luật mở rộng |
| Điền bằng khám phá | Tìm ra cái chưa biết; ít công sức thủ công | Nhiễu; thiếu quyền sở hữu và mục đích |
| Điền bằng đường ống | Chính xác; độ trễ thấp | Giới hạn ở những gì xây qua đường ống |
| Đội trung tâm sở hữu bản ghi | Nhất quán | Chậm; xa tri thức |
| Đội dịch vụ sở hữu bản ghi | Chính xác và nhanh | Biến thiên; cần mẫu và kiểm tra |
| Mô hình kiểu đồ thị | Tự nhiên cho truy vấn quan hệ và tác động | Cần kỹ năng và công cụ |
| Mô hình bảng quan hệ | Quen thuộc và đơn giản | Vụng về cho truy vấn phụ thuộc sâu |

Câu trả lời dạng văn xuôi là bắt đầu nhỏ và theo câu hỏi, điền từ đường ống với khám phá làm ý kiến thứ hai, và đặt các đội dịch vụ phụ trách bản ghi của họ. Một [cơ sở dữ liệu đồ thị](https://en.wikipedia.org/wiki/Graph_database) có thể làm các câu hỏi phụ thuộc trở nên tự nhiên để hỏi, dù một cơ sở dữ liệu thông thường vẫn dùng được nếu mô hình được giữ đơn giản.

## Câu hỏi để thảo luận với đội nhóm

**1. Câu hỏi nào lần cuối chúng ta mong CMDB trả lời được, và nó có trả lời được không?**
Hãy nhớ lại một sự cố hay thay đổi gần đây khi có người tìm các phụ thuộc. Họ đã tìm thấy gì, và thay vào đó họ làm gì? Người điều phối nên ghi lại câu hỏi và liệu bản ghi có được tham khảo không. Kết quả là ứng viên đầu tiên cho mục đích của bản ghi.

**2. Nếu dịch vụ quan trọng nhất của chúng ta hỏng bây giờ, chúng ta tự tin đến đâu vào tác động dự đoán?**
Hỏi tác động dự đoán từ CMDB và so sánh với điều những người biết dịch vụ tin. Ghi lại các khác biệt. Thống nhất phụ thuộc nào để xác minh trước và ai sẽ kiểm tra.

**3. Ai sở hữu bản ghi của mỗi dịch vụ, và họ có biết không?**
Liệt kê các dịch vụ trọng yếu và người sở hữu các mục CMDB của chúng. Hỏi người sở hữu có biết và đã rà soát gần đây không. Nơi người sở hữu là "đội CMDB", hãy thảo luận cách chuyển quyền sở hữu sang đội dịch vụ.

**4. Chúng ta điền gì chỉ để thỏa một trường bắt buộc?**
Tìm giá trị mặc định và giữ chỗ. Chúng cho thấy nơi mô hình hỏi nhiều hơn bất kỳ ai biết. Quyết định gỡ trường, tự động hóa nó, hay tìm nguồn thật.

**5. Bản ghi của chúng ta bất đồng với điều đang chạy ở đâu?**
So sánh đầu ra khám phá với bản ghi cho một dịch vụ. Với mỗi khác biệt, hỏi bản ghi hay thực tế nên đổi. Cuộc trò chuyện có xu hướng tìm ra cả dữ liệu cũ lẫn các thành phần trái phép.

**6. Chúng ta sẽ ngừng ghi gì?**
Liệt kê các lớp, thuộc tính và quan hệ mà không ai dùng trong sáu tháng. Hỏi điều gì sẽ xảy ra nếu mỗi cái biến mất. Thống nhất gỡ hai cái và quan sát liệu có ai nhận thấy không.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối nắm tri thức về điều dịch vụ của họ phụ thuộc vào và ở vị trí tốt nhất để giữ bản ghi đúng. Họ nên khai báo quyền sở hữu và phụ thuộc cạnh mã, rà soát chúng khi thiết kế thay đổi, và dùng bản ghi khi lập kế hoạch thay đổi. Một định nghĩa hoàn thành gồm cập nhật mô tả dịch vụ giữ bản ghi gần với công việc.

### Đội dịch vụ và vận hành

Các đội vận hành tham khảo bản ghi trong sự cố và thay đổi, nên họ cảm nhận lỗi của nó trước. Họ nên báo các lần trượt trong rà soát, chạy kiểm tra khám phá, duy trì quy tắc khớp, và cung cấp phản hồi cho người sở hữu. Họ cũng vận hành công cụ và các mẫu kiểm toán.

### Lãnh đạo và quản trị

Lãnh đạo muốn tác động và rủi ro hiển thị, và họ thường bảo trợ các chương trình CMDB lớn gây thất vọng. Họ nên yêu cầu bằng chứng sử dụng và độ chính xác thay vì số đếm bản ghi, tài trợ tích hợp đường ống, và chấp nhận một phạm vi nhỏ hơn được làm tốt. Quản trị nên chờ đợi thấy tỷ lệ trúng của dự đoán tác động và danh sách khoảng trống.

### Khách hàng và người dùng

Người dùng được lợi khi sự cố được chẩn đoán nhanh hơn và thay đổi ít có khả năng làm hỏng các dịch vụ phụ thuộc. Họ hiếm khi thấy CMDB, dù họ thấy hiệu ứng của nó trong thông báo nêu đúng các dịch vụ bị ảnh hưởng và ít bất ngờ hơn sau thay đổi. Phản hồi của họ sau sự cố cho thấy bức tranh tác động có đúng không.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Nhóm công nghệ của một hãng hàng không quốc gia vận hành khoảng 300 ứng dụng và một nền tảng đặt vé cho khách hàng. Các con số dưới đây chỉ mang tính minh họa.

CMDB chứa 180.000 CI và được một công cụ khám phá điền năm năm trước. Trưởng quản lý dịch vụ muốn biết nó có đáng giữ không. Bà nhờ một đội nhỏ kiểm thử nó. Về chất lượng, họ kiểm toán 150 CI lấy mẫu và thấy 71 phần trăm chính xác trên năm thuộc tính bắt buộc. Về bản đồ, họ rà soát 20 sự cố đáng kể gần nhất và so sánh các dịch vụ thực sự bị ảnh hưởng với những gì CMDB dự đoán: nó dự đoán đủ mọi dịch vụ bị ảnh hưởng trong 6 trong 20, tỷ lệ trúng 30 phần trăm. Về sử dụng, 12 phần trăm sự cố trong quý trước tham chiếu một CI, và trong một khảo sát ngắn của những người xử lý, hầu hết nói họ dựa vào một trang wiki riêng. CI trùng lặp là 9 phần trăm tổng số.

Đội đưa ra bốn quyết định cùng người sở hữu dịch vụ. Họ thu hẹp phạm vi xuống 40 dịch vụ phục vụ nhiều khách hàng nhất, với năm lớp CI và bốn loại quan hệ. Họ nhờ mỗi đội dịch vụ khai báo người sở hữu, phụ thuộc và vị trí chạy trong một tệp ngắn giữ cùng mã của họ, mà đường ống công bố vào CMDB ở mỗi bản phát hành. Họ chạy khám phá hằng tuần và báo cáo khác biệt cho người sở hữu. Họ thêm một trường vào rà soát sự cố, "dự đoán của CMDB có đúng không?" và sửa mỗi lần trượt trong hai tuần.

Hai quý sau, CMDB đã thu hẹp phạm vi có 14.000 CI, độ chính xác trên tập lấy mẫu là 92 phần trăm, độ trễ cập nhật từ bản phát hành đến bản ghi dưới một giờ cho các dịch vụ trong đường ống, và tỷ lệ trúng trên 12 sự cố gần nhất là 75 phần trăm. Việc dùng CMDB trong sự cố tăng lên 58 phần trăm, và những người xử lý nói trang wiki không còn cần nữa. Giám đốc vận hành yêu cầu một kế hoạch đưa 260 ứng dụng còn lại vào cùng lúc. Trưởng quản lý dịch vụ đề xuất thêm mười dịch vụ mỗi quý, sau khi mỗi cái giành được tỷ lệ trúng trên một mức đã thống nhất trong một sự cố thử, và giải thích rằng bản ghi rộng trước đây chưa bao giờ được tin cậy. Quyết định được ghi lại, kèm buổi rà soát mỗi quý.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy để các đội dịch vụ giữ bản ghi của chính họ hiện hành như một phần của công việc, và rà soát chất lượng cùng họ thường xuyên. Điều cần lưu ý là một mục tiêu chỉ về độ đầy đủ tạo ra bản ghi đầy giữ chỗ.

### AI

AI có thể suy ra phụ thuộc, gợi ý bản ghi, và trả lời câu hỏi từ dữ liệu cấu hình, và bản thân các hệ thống AI là hạng mục cấu hình. Hãy theo dõi tỷ lệ trúng của dự đoán tác động cho các phụ thuộc do AI gợi ý so với sự cố thật. Điều cần lưu ý là một AI đoán phụ thuộc có thể làm ô nhiễm bản ghi bằng những lỗi hợp lý.

### Tự động hóa

Hãy nuôi bản ghi từ khám phá và hạ tầng dưới dạng mã, và đo độ trễ cập nhật. Điều cần lưu ý là khám phá tự động có thể tạo các mục trùng lặp hoặc cũ khi không có quy tắc định danh rõ.

### Phân tích

Hãy đánh giá cơ sở dữ liệu bằng việc nó trả lời câu hỏi trong thay đổi và sự cố thật tốt đến đâu, và báo cáo tỷ lệ sử dụng. Quyết định được cung cấp thông tin là cải thiện dữ liệu ở đâu. Điều cần lưu ý là độ chính xác được đo bằng lấy mẫu, nên hãy cho thấy cỡ mẫu.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Ít cần một CMDB ngoài danh mục dịch vụ và mã hạ tầng. Hãy giữ người sở hữu dịch vụ và phụ thuộc trong kho mã, và sinh bản đồ từ đó. Chỉ thêm một cơ sở dữ liệu khi các câu hỏi vượt quá các tệp.

**Doanh nghiệp nhỏ.** Một sơ đồ đơn giản và danh sách hệ thống kèm người sở hữu và nhà cung cấp có thể đủ. Cập nhật nó sau mỗi thay đổi đáng kể. Chống lại việc mua một nền tảng cho hệ thống nhỏ, nhưng giữ sơ đồ hiện hành, vì nó vô giá trong một sự cố ngừng hoạt động.

**Doanh nghiệp lớn.** Quy mô cần một mô hình, quyền sở hữu liên hợp, và tích hợp với nhiều nguồn, gồm cả các vụ mua lại. Hãy chuẩn hóa định danh và mô hình lõi, để các đội mở rộng nó trong quy tắc, và đo việc sử dụng và độ chính xác theo miền. Hãy chờ đợi phải chạy một chức năng khớp và làm sạch thường trực.

**Chính phủ và khu vực công.** Dịch vụ thường dựa trên hệ thống lâu đời, nhà thầu và hạ tầng dùng chung, và tác động sự cố có thể ảnh hưởng đến công chúng. Hãy vẽ bản đồ phụ thuộc vào nhà cung cấp và nền tảng dùng chung một cách tường minh, giữ bản ghi cho kiểm toán, và căn chỉnh với lập kế hoạch liên tục (xem chủ đề 5.6, Chỉ số liên tục dịch vụ).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là công sức mô hình hóa và quản trị, tích hợp đường ống và khám phá, một ít công cụ, và công sức kiểm toán và sửa. Nhiều tổ chức đã sở hữu nền tảng. Điền bằng đường ống rẻ một khi mẫu tồn tại. Các chương trình lớn để điền mọi thứ cùng lúc đã tốn kém và thường thất bại.

Lợi tức là sự cố ngắn hơn, thay đổi an toàn hơn, và ít thời gian tìm thông tin hơn. Hãy xây hồ sơ từ bằng chứng của chính bạn: thời gian người xử lý dành tìm phụ thuộc trong một sự cố điển hình, tỷ lệ sự cố mà thông tin phụ thuộc còn thiếu làm trễ chẩn đoán, và các thay đổi gây tác động bất ngờ. Tỷ lệ trúng của dự đoán tác động là thước đo trực tiếp liệu bản ghi có giúp ích không. Tránh các tuyên bố đã công bố về tỷ lệ sự cố do thay đổi gây ra hoặc chi phí ngừng hoạt động trừ khi bạn truy được nguồn. Hãy tính chi phí giữ một bản ghi lớn, đáng ngờ so với giá trị của một bản ghi nhỏ, đáng tin.

## Phản mẫu và cạm bẫy

- **Điền mọi thứ trước.** Một bản ghi khổng lồ, cũ phá hủy lòng tin. Hãy bắt đầu với dịch vụ trọng yếu.
- **Khám phá là nguồn duy nhất.** Nó không nói được vì sao một thứ tồn tại hay ai sở hữu. Hãy kết hợp với khai báo.
- **Kiểm toán độ đầy đủ và gọi đó là chất lượng.** Đầy mà sai tệ hơn thiếu mà đúng. Hãy lấy mẫu độ chính xác.
- **Các đội trung tâm sở hữu mọi dữ liệu.** Họ không biết nó. Hãy giao quyền sở hữu cho các đội dịch vụ.
- **Trường bắt buộc có giá trị mặc định.** Chúng trông đầy đủ và không mang thông tin. Hãy gỡ hoặc tự động hóa chúng.
- **Đo bằng số CI.** Nhiều hơn không phải tốt hơn. Hãy đo độ chính xác, tỷ lệ trúng và việc sử dụng.
- **Phớt lờ quan hệ.** Không có phụ thuộc, một CMDB chỉ là bản kiểm kê. Hãy đầu tư vào bản đồ cho dịch vụ trọng yếu.
- **Đổ lỗi cho con người vì các lần trượt.** Họ ngừng báo. Hãy coi một phụ thuộc bị bỏ sót là một phát hiện.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Phạm vi và mô hình | Bất cứ gì khám phá tìm thấy | Mô hình được định nghĩa; phạm vi rộng | Mô hình theo câu hỏi; dịch vụ trọng yếu được vẽ bản đồ | Phạm vi lớn lên khi tỷ lệ trúng và việc sử dụng biện minh | Mô hình liên hợp qua các đội và nhà cung cấp; định danh chung |
| Điền và chất lượng | Tải thủ công hoặc một lần | Khám phá và nhập theo lịch | Đường ống công bố từ mã; khám phá làm kiểm tra; kiểm toán lấy mẫu | Độ chính xác, độ trễ và bản trùng được đo và theo dõi xu hướng | Nguồn cấp thời gian thực với đối chiếu tự động và xác nhận của người sở hữu |
| Sử dụng | Hiếm khi được tham khảo | Một vài đội dùng | Được tham chiếu trong sự cố và thay đổi như thực hành chuẩn | Dự đoán tác động được kiểm thử với sự cố; việc dùng và tính hữu ích được theo dõi | Bản ghi cung cấp thông tin cho quyết định tự động và bản đồ nhà cung cấp chung |

## Danh sách kiểm tra

- [ ] Các câu hỏi mà CMDB phải trả lời được viết ra.
- [ ] Phạm vi giới hạn ở dịch vụ trọng yếu, với một quy tắc tăng trưởng xác định.
- [ ] Mô hình có một tập nhỏ lớp, thuộc tính và loại quan hệ.
- [ ] Mỗi dịch vụ trọng yếu có một người sở hữu đã xác nhận bản ghi của nó trong quý vừa qua.
- [ ] Đường ống công bố thay đổi CI cho các dịch vụ xây dưới dạng mã.
- [ ] Kết quả khám phá được so sánh với bản ghi và các khác biệt được rà soát.
- [ ] Một mẫu độ chính xác ngẫu nhiên được kiểm toán mỗi quý theo cả hai chiều.
- [ ] Rà soát sự cố ghi lại liệu tác động dự đoán có đúng không.
- [ ] Việc dùng CMDB trong sự cố và thay đổi được theo dõi, kèm một câu hỏi về tính hữu ích.
- [ ] Các lớp và thuộc tính không dùng được cho nghỉ hưu theo lịch.

## Lời nhắc AI

**Định nghĩa các câu hỏi và phạm vi.**

```text
We run [type of organization and services]. Typical situations where we need
configuration information: [list incidents, changes, audits]. Draft a list of
the questions our CMDB should answer, the CI classes, attributes, and
relationships needed for each, and a minimal starting scope of the most
critical services. Do not invent tooling. List your assumptions and what to
confirm with service owners.
```

**Phân tích một lần trượt dự đoán tác động.**

```text
After the incident [description], the CMDB predicted these affected services:
[list], and the services actually affected were: [list]. Explain possible
reasons for each difference (missing dependency, wrong relationship, stale
data, indirect dependency), suggest how to verify each, and propose a fix at
the source. Do not assume causes the information cannot support. List your
assumptions.
```

**Thiết kế một tệp khai báo cho các đội dịch vụ.**

```text
Propose a short, human-readable declaration that a service team keeps with its
code to describe the service for the CMDB: owner, support contact, tier,
dependencies, runtime location, and data classification. Include validation
rules the pipeline could apply and a minimal example for [type of service].
Keep it to what the questions in [paste questions] require. List your
assumptions and fields to review with security.
```

**Lập kế hoạch một cuộc kiểm toán độ chính xác hằng quý.**

```text
Our CMDB holds [number] CIs in these classes: [list]. Design a quarterly audit
with random samples drawn in both directions (from the CMDB to reality, and from
reality to the CMDB), say what to check for each class, how to report accuracy
and error sources honestly, and how to avoid grading our own homework. Do not
overstate statistical precision. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số chất lượng cấu hình.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số CMDB mang vectơ lợi dụng, rào chắn và quy tắc bằng chứng độc lập của nó.

## Điểm chính cần nhớ

- Xây CMDB để trả lời các câu hỏi có tên về những dịch vụ quan trọng nhất, và mở rộng nó khi lòng tin lớn lên.
- Điền nó từ đường ống và mã, dùng khám phá làm ý kiến thứ hai, và để các đội dịch vụ sở hữu bản ghi của họ.
- Kiểm thử chất lượng với sự kiện: so sánh tác động dự đoán với điều thực sự xảy ra trong sự cố.
- Đo việc sử dụng và tính hữu ích, không phải số CI.
- Lấy mẫu độ chính xác từ bằng chứng độc lập theo cả hai chiều.
- Cho nghỉ hưu những gì không ai dùng, và sửa lỗi tại nguồn của chúng.

## Tài liệu tham khảo và đọc thêm

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
