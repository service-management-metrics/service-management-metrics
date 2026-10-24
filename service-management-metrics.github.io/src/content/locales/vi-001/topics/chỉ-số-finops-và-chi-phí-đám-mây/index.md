# Chỉ số FinOps và chi phí đám mây

**Chi tiêu đám mây được quyết định bởi kỹ sư mỗi ngày, nên hãy cho những người xây và vận hành dịch vụ dữ liệu chi phí, bối cảnh, và thẩm quyền hành động theo nó, và đo lãng phí, phân bổ và chi phí đơn vị cẩn thận như bạn dành cho độ tin cậy.**

## Tổng quan và động lực

Trong một trung tâm dữ liệu, chi tiêu được quyết định bằng đơn đặt hàng và đến thành vài bước lớn. Trên đám mây, một lập trình viên có thể cam kết tổ chức vào một khoản phí định kỳ bằng vài dòng cấu hình, và một môi trường thử bị quên có thể tốn tiền suốt nhiều tháng. [Điện toán đám mây](https://en.wikipedia.org/wiki/Cloud_computing) cung cấp quyền truy cập theo yêu cầu vào tài nguyên tính toán, và mô hình [trả theo mức dùng (pay-as-you-go)](https://en.wikipedia.org/wiki/Pay_as_you_go) đi kèm nghĩa là hóa đơn theo sau việc sử dụng. Điều đó mạnh mẽ và rủi ro. Cùng sự linh hoạt cho phép một đội mở rộng trong vài phút cũng cho phép chi phí lớn nhanh hơn bất kỳ ai nhận ra.

FinOps, một từ ghép của tài chính và vận hành, là một thực hành và một văn hóa quản lý chi phí đám mây. Tổ chức FinOps Foundation mô tả nó là một khung vận hành trong đó các đội kỹ thuật, tài chính, mua sắm và kinh doanh cộng tác trên các quyết định chi tiêu dựa trên dữ liệu. Ý tưởng trung tâm của nó là những người dùng tài nguyên đám mây nên thấy và sở hữu chi phí của mình, trong khi tài chính cung cấp cấu trúc, dự báo và cam kết. Điều này khớp với các mục đích linh hoạt về sự cộng tác liên tục giữa các bên liên quan và về các đội sở hữu dịch vụ của mình, và nó khớp với mối quan tâm của ITIL về quản lý tài chính dịch vụ. Chủ đề này bao quát các thước đo làm thực hành đó cụ thể. Nó xây trên các ý tưởng tính chi phí chung trong chủ đề trước (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị).

Chi phí đám mây có những đặc điểm cần thước đo riêng.

- **Tính co giãn.** [Tự động mở rộng quy mô](https://en.wikipedia.org/wiki/Autoscaling) điều chỉnh tài nguyên theo nhu cầu, làm chi phí biến đổi và đôi khi bất ngờ. [Điện toán không máy chủ (serverless)](https://en.wikipedia.org/wiki/Serverless_computing) tính phí theo mỗi lần thực thi, và chuyển sự chú ý từ máy chủ sang yêu cầu.
- **Nhiều quyết định nhỏ.** Mỗi lựa chọn kích thước máy, bậc lưu trữ, vùng và kiến trúc đổi chi phí. Chi tiêu trải qua hàng trăm quyết định do nhiều người đưa ra, và khó thấy nếu không có thẻ và báo cáo tốt.
- **Mô hình giá.** Giá theo yêu cầu linh hoạt và cao nhất. Các cam kết đổi lấy [chiết khấu số lượng](https://en.wikipedia.org/wiki/Volume_discount), như dung lượng đặt trước hay gói tiết kiệm, hạ đơn giá đổi lấy một lời hứa sử dụng. Dung lượng spot hay có thể bị chiếm lại thì rẻ và có thể bị thu hồi. Mỗi mô hình có một rủi ro, và hỗn hợp đúng phụ thuộc vào khối lượng công việc dự đoán được đến đâu. Các điều khoản chính xác khác nhau giữa các nhà cung cấp và đổi thường xuyên, nên hãy kiểm tra tài liệu hiện hành của nhà cung cấp trước khi dựa vào bất kỳ chi tiết nào.
- **Chi phí chung và không có thẻ.** Tài nguyên không có thẻ người sở hữu hay mục đích không thể được quy gán. Các nền tảng dùng chung trải chi phí qua các đội tiêu thụ khác nhau.
- **Chi phí môi trường.** Khối lượng công việc đám mây tiêu thụ năng lượng và gây phát thải, và [dấu chân carbon](https://en.wikipedia.org/wiki/Carbon_footprint) của một khối lượng công việc ngày càng là yêu cầu báo cáo. Các phương pháp ước lượng nó vẫn đang phát triển, và con số nên kèm phương pháp.

Các thước đo chi phí trên đám mây dễ bị lợi dụng bằng lối tắt. Cắt chi tiêu bằng cách tắt giám sát hoặc thu nhỏ tài nguyên đến khi dịch vụ sụp cho thấy hóa đơn thấp hơn và dịch vụ tệ hơn. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng: mọi thước đo chi phí ở đây đứng cạnh một thước đo độ tin cậy hay chất lượng, và không đội nào bị xếp hạng theo hóa đơn (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Chi phí là một chỉ số kỹ thuật.** Các đội xây và vận hành một dịch vụ thấy và sở hữu chi phí của nó.
- **Phân bổ cho người sở hữu.** Mỗi đồng nên ánh xạ về một đội hoặc một nhóm chung đã khai báo.
- **Ghép chi phí với chất lượng và độ tin cậy.** Tiết kiệm làm hỏng dịch vụ không phải là tiết kiệm.
- **Tối ưu liên tục, theo từng bước nhỏ.** Rà soát lãng phí đều đặn và hành động như một phần công việc bình thường.
- **Dự báo bằng khoảng.** Nhu cầu biến đổi làm các dự báo một con số mong manh.
- **Cộng tác giữa các chức năng.** Kỹ thuật, tài chính, mua sắm và kinh doanh cùng quyết định.
- **Không xếp hạng các đội theo hóa đơn.** Dịch vụ khác nhau, và tăng trưởng không phải lãng phí.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ phân bổ | Tỷ lệ chi tiêu đám mây được quy cho một đội sở hữu hoặc một nhóm chung đã khai báo | chi tiêu có thẻ người sở hữu và dịch vụ hợp lệ, hoặc nằm trong nhóm chung đã khai báo / tổng chi tiêu đám mây | phần trăm | Bản xuất hóa đơn đám mây, chính sách thẻ | Quản lý tài chính dịch vụ; quản lý tài sản CNTT | Quyền sở hữu của đội với những gì họ chạy | Hằng tuần |
| Chi phí đơn vị đám mây | Chi phí tài nguyên đám mây mỗi đơn vị của thứ người dùng coi trọng | chi phí đám mây cho dịch vụ trong kỳ / số đơn vị giao trong kỳ | tiền tệ mỗi đơn vị | Dữ liệu hóa đơn ghép với khối lượng dịch vụ | Quản lý tài chính dịch vụ; quản lý mức dịch vụ | Chi phí phục vụ mỗi kết quả | Hằng tháng |
| Tỷ lệ lãng phí | Tỷ lệ chi tiêu cho tài nguyên nhàn rỗi hoặc rõ ràng quá cỡ | chi tiêu cho tài nguyên nhàn rỗi hoặc quá cỡ, theo quy tắc đã thống nhất / tổng chi tiêu cho các tài nguyên trong phạm vi | phần trăm | Số đo mức sử dụng và hóa đơn | Quản lý năng lực và hiệu năng; quản lý tài chính | Giảm lãng phí trong bộ công cụ | Hằng tuần |
| Độ phủ cam kết | Tỷ lệ mức dùng ổn định đủ điều kiện được các cam kết chiết khấu bao phủ | mức dùng đủ điều kiện được cam kết bao phủ / mức dùng đủ điều kiện | phần trăm | Báo cáo hóa đơn và cam kết | Quản lý tài chính dịch vụ; quản lý nhà cung cấp | Lập kế hoạch cho nhu cầu dự đoán được | Hằng tháng |
| Mức sử dụng cam kết | Tỷ lệ cam kết đã mua được dùng | số giờ cam kết đã dùng / số giờ cam kết đã mua | phần trăm | Báo cáo cam kết | Quản lý tài chính dịch vụ; quản lý nhà cung cấp | Giá trị từ đầu tư có kế hoạch | Hằng tháng |
| Sai lệch dự báo | Chênh lệch giữa dự báo và chi tiêu đám mây thực, theo đội và tổng | (thực trừ dự báo) / dự báo | phần trăm | Nhật ký dự báo và dữ liệu hóa đơn | Quản lý tài chính dịch vụ | Độ chính xác dự báo | Hằng tháng |
| Thời gian xác nhận bất thường | Thời gian từ cảnh báo bất thường chi phí đến một quyết định được ghi lại bởi người sở hữu | trung vị và bách phân vị thứ 85 của số giờ từ cảnh báo đến phản hồi của người sở hữu | giờ | Cảnh báo bất thường và bản ghi phiếu | Quản lý giám sát và sự kiện; quản lý sự cố | Khả năng phản hồi với tín hiệu môi trường thật | Hằng tháng |

Hãy định nghĩa phạm vi tài nguyên, quy tắc thẻ, và cái gì được tính là nhàn rỗi hoặc quá cỡ, và ghi lại. Độ phủ cam kết chỉ được tính so với mức dùng nền ổn định, không phải đỉnh. Chi phí đơn vị dùng một đơn vị thống nhất với chủ dịch vụ và cố định cho xu hướng. Dữ liệu chi phí nên nói liệu nó có gồm tín dụng, chiết khấu, thuế và phí hỗ trợ không, và áp dụng tiền tệ và tỷ giá nào.

## Khuyến nghị

### Làm chi phí hiển thị và có chủ

**1. Thực thi một tập thẻ bắt buộc nhỏ.** Yêu cầu mọi tài nguyên mang một thẻ người sở hữu, dịch vụ và môi trường, được thực thi bằng chính sách lúc tạo, không phải bằng dọn dẹp sau đó. Độ phủ phân bổ đo việc này hiệu quả ra sao. Tài nguyên không gắn thẻ được có thể bị chặn, hoặc bị đánh dấu trong vòng một ngày cho chủ tài khoản. Giữ tập thẻ nhỏ để mọi người tuân thủ.

**2. Cho các đội cái nhìn chi phí riêng của họ.** Cung cấp cho mỗi đội một cái nhìn hằng ngày hoặc hằng tuần về chi tiêu theo dịch vụ và môi trường, kèm xu hướng và bất thường. Mọi người phản ứng với dữ liệu họ thấy và hiểu. Một báo cáo đến hằng tháng và chỉ đến tài chính ít đổi được gì.

**3. Định nghĩa các nhóm chi phí chung và động lực của chúng.** Nền tảng dùng chung, mạng và phí hỗ trợ cần một quy tắc về cách chúng được trải (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị). Hãy công bố quy tắc, rà soát nó cùng các đội, và giữ nhóm nhỏ. Một quy tắc mọi người theo dõi được giành nhiều lòng tin hơn một quy tắc công bằng mà không ai hiểu.

**4. Tổ chức một cuộc trò chuyện chi phí đều đặn, ngắn.** Đưa kỹ thuật, tài chính và chủ sản phẩm lại với nhau theo nhịp ổn định, hằng tuần hoặc hai tuần một lần cho người chi lớn và hằng tháng cho người khác, ba mươi phút. Rà soát xu hướng, bất thường và tồn đọng tối ưu. Đây là cộng tác liên tục trong thực tế, và nó giữ chi phí trong chương trình mà không cần quy trình nặng.

### Đo giá trị, không chỉ chi tiêu

**5. Diễn đạt chi phí mỗi đơn vị.** Tổng chi tiêu đám mây tăng cùng thành công. Điều quan trọng là chi phí mỗi khách hàng hoạt động, mỗi giao dịch, hoặc mỗi lần xây. Chọn một đơn vị có ý nghĩa cho dịch vụ, theo dõi nó theo thời gian, và chú thích các thay đổi. Chi phí đơn vị giảm với tổng chi tiêu tăng là mẫu hình lành mạnh, và chi phí đơn vị tăng với mức dùng phẳng là gợi ý để điều tra.

**6. Cho thấy độ tin cậy và chất lượng cạnh chi phí.** Hiển thị chi phí cùng tính sẵn sàng, độ trễ và tỷ lệ lỗi cho cùng dịch vụ (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi). Tiết kiệm chi phí làm tăng tỷ lệ lỗi là sự chuyển chi phí cho người dùng. Một cách tiếp cận ngân sách lỗi có thể làm sự đánh đổi tường minh: chi ít hơn khi dịch vụ tốt hơn nhiều so với cần, và đầu tư khi không.

**7. Theo dõi lãng phí bằng quy tắc tường minh.** Định nghĩa nhàn rỗi (ví dụ không có mức dùng có ý nghĩa trong một giai đoạn) và quá cỡ (ví dụ mức sử dụng liên tục thấp xa so với dung lượng cấp phát), và báo cáo chi tiêu cho mỗi loại. Quy tắc cần cẩn thận: một hệ thống dự phòng cho khả năng phục hồi trông nhàn rỗi theo thiết kế, và nên bị loại trừ và gắn nhãn. Hãy xem lại quy tắc khi chúng tạo dương tính giả.

### Hành động theo điều bạn tìm thấy

**8. Điều chỉnh cỡ và dọn dẹp trong công việc bình thường.** Hãy biến việc gỡ lãng phí thành một hạng mục thường trực trong tồn đọng của đội, giải quyết theo từng bước nhỏ như một phần của cải tiến liên tục. Lên lịch dừng các môi trường không phải môi trường thật ngoài giờ làm việc, xóa lưu trữ không gắn, chọn bậc lưu trữ phù hợp, và rà soát các dòng lớn nhất trước. Thay đổi nhỏ đều đặn thắng các đợt dọn dẹp anh hùng hiếm hoi, vốn dễ bị quên khi áp lực tăng.

**9. Khớp mô hình giá với khối lượng công việc.** Hãy dùng cam kết cho mức dùng nền ổn định, theo yêu cầu cho tải biến đổi, và dung lượng có thể gián đoạn cho công việc chịu được gián đoạn. Cam kết dần dần, với lượng nhỏ, và theo dõi cả độ phủ lẫn mức sử dụng. Cam kết quá mức lãng phí tiền và cam kết thiếu trả phí bảo hiểm. Mời tài chính và mua sắm, và kiểm tra lại điều khoản với nhà cung cấp vì chúng đổi.

**10. Phát hiện bất thường và phản ứng.** Hãy dùng phát hiện bất thường trên chi tiêu, đánh dấu các thay đổi đột ngột so với đường cơ sở. Các công cụ [phát hiện bất thường](https://en.wikipedia.org/wiki/Anomaly_detection) từ ngưỡng đơn giản đến mô hình thống kê. Cảnh báo đội sở hữu, và đo mất bao lâu để xác nhận và quyết định. Một tác vụ cấu hình sai có thể dồn một hóa đơn lớn trong vài giờ, nên tốc độ quan trọng (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo).

### Dự báo và lập kế hoạch

**11. Dự báo bằng khoảng và động lực.** Xây dự báo từ các động lực của nhu cầu, như người dùng hay giao dịch kỳ vọng, cùng chi phí đơn vị. Hãy dùng [phân tích sai lệch](https://en.wikipedia.org/wiki/Variance_analysis) để giải thích chênh lệch giữa dự báo và thực tế, và tách những chênh lệch do khối lượng, giá và cơ cấu. Đưa một khoảng và nêu các giả định. Sai lệch dự báo nên co lại khi mô hình cải thiện.

**12. Đưa tính bền vững vào bức tranh.** Ước lượng phát thải liên quan đến các khối lượng công việc chính bằng một phương pháp có tài liệu, như báo cáo của nhà cung cấp hoặc phương pháp luận đã công bố, và nêu giới hạn của ước lượng. So sánh các lựa chọn vùng, loại máy và lịch trên cả chi phí lẫn phát thải. Coi phát thải mỗi đơn vị là đồng hành của chi phí mỗi đơn vị, và đừng tuyên bố độ chính xác mà phương pháp không hỗ trợ.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ phân bổ | Gắn thẻ mọi thứ cho một người sở hữu gom hết; khai báo lượng lớn là chung | Tỷ lệ chi tiêu do người sở hữu gom hết nắm; kích thước nhóm chung và rà soát; mẫu xác nhận người sở hữu |
| Chi phí đơn vị đám mây | Chọn một đơn vị lớn lên rẻ; cắt độ tin cậy để cắt chi phí | Định nghĩa đơn vị cố định; đồng hành độ tin cậy và chất lượng |
| Tỷ lệ lãng phí | Thu hẹp định nghĩa nhàn rỗi; chuyển lãng phí sang một tài khoản ngoài phạm vi | Quy tắc trong sổ đăng ký; quét mọi tài khoản; lấy mẫu tài nguyên mà quy tắc loại trừ |
| Độ phủ cam kết | Cam kết vào đường cơ sở thổi phồng để đuổi theo một phần trăm cao | Mức sử dụng cam kết; kiểm tra đường cơ sở với lịch sử sử dụng |
| Mức sử dụng cam kết | Thêm mức dùng đủ điều kiện không cần để lấp đầy cam kết | So sánh với tăng trưởng nhu cầu thật; chi phí đơn vị |
| Sai lệch dự báo | Đệm dự báo; sửa chúng muộn | Ghi nhật ký dự báo lúc bắt đầu; theo dõi độ rộng khoảng và tỷ lệ trúng |
| Thời gian xác nhận bất thường | Xác nhận cảnh báo mà không nhìn; đóng cảnh báo tự động | Ghi lại một quyết định và kết quả; lấy mẫu cảnh báo xem chất lượng phản hồi |

Một kết quả đọc lành mạnh là gần như mọi chi tiêu có chủ và hiển thị, chi phí đơn vị dịch chuyển vì những lý do giải thích được, lãng phí co lại mà không có sự cố ngừng hoạt động, cam kết được dùng, và các dự báo có sai số hẹp dần theo thời gian.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Đội đám mây trung tâm kiểm soát chi tiêu | Nhất quán và sức mạnh thương lượng | Chậm; xa các quyết định kỹ thuật |
| Các đội sở hữu chi phí đám mây của họ | Quyết định nhanh, có thông tin | Cần dữ liệu, đào tạo và rào chắn |
| Chỉ theo yêu cầu | Linh hoạt | Đơn giá cao nhất |
| Cam kết nặng | Đơn giá thấp hơn | Khóa chặt và lãng phí nếu nhu cầu giảm |
| Trần ngân sách nghiêm ngặt | Ngăn vượt chi | Có thể gây ngừng hoạt động hoặc chặn công việc hợp lệ |
| Cảnh báo và rà soát | Giữ tốc độ | Phụ thuộc vào phản hồi kịp thời |
| Điều chỉnh cỡ quyết liệt | Tiết kiệm tiền | Rủi ro cho hiệu năng nếu làm quá |
| Điều chỉnh cỡ có đo cùng SLO | Cân bằng | Cần dữ liệu độ tin cậy và cẩn trọng |

Câu trả lời dạng văn xuôi là cho các đội dữ liệu và quyền sở hữu, đặt rào chắn như cảnh báo và ngân sách thay vì dừng cứng nơi dịch vụ trọng yếu, cam kết dần vào đường cơ sở ổn định, và luôn ghép chi phí với độ tin cậy.

## Câu hỏi để thảo luận với đội nhóm

**1. Hôm nay chúng ta quy được bao nhiêu hóa đơn đám mây cho một người sở hữu, và ai không tìm thấy?**
Xem tỷ lệ chi tiêu có thẻ hợp lệ và các mục không gắn thẻ lớn nhất. Hỏi ai sẽ sở hữu từng cái. Người điều phối nên ghi lại bao nhiêu mục không ai nhận. Thống nhất một bước chính sách thẻ để thực thi lúc tạo.

**2. Chi phí mỗi đơn vị của chúng ta đã làm gì trong sáu tháng qua, và vì sao?**
Vẽ chi phí đơn vị và chú thích các thay đổi về kiến trúc, giá và khối lượng. Hỏi những thay đổi nào là có chủ đích. Nếu xu hướng là một bất ngờ, hãy thảo luận dữ liệu nào còn thiếu. Thêm một thước đo chất lượng vào biểu đồ.

**3. Tài nguyên nào của chúng ta sẽ tắt ngay ngày mai nếu dám?**
Liệt kê ứng viên: môi trường nhàn rỗi, cơ sở dữ liệu quá cỡ, lưu trữ bị quên. Với mỗi cái, hỏi rủi ro là gì và ai quyết định. Thống nhất một cách an toàn để thử gỡ một cái, như lên lịch hoặc chụp ảnh nhanh trước.

**4. Làm sao chúng ta biết trong vòng một ngày nếu một tác vụ bắt đầu tốn gấp mười lần?**
Đi qua đường cảnh báo từ hóa đơn đến người sở hữu. Kiểm thử nó với một ví dụ trong quá khứ. Cuộc trò chuyện nên lộ ra các độ trễ và khoảng trống về quyền sở hữu. Thống nhất thời gian mục tiêu để xác nhận và quyết định, và ai là người trực.

**5. Chúng ta có thể cam kết an toàn bao nhiêu mức dùng nền, và điều gì sẽ khiến chúng ta sai?**
Xem lịch sử sử dụng để tìm một sàn ổn định và các rủi ro với nó: thay đổi sản phẩm, di chuyển, thay đổi giá. Quyết định một cam kết đầu khiêm tốn và một ngày rà soát. Mời tài chính vào cuộc thảo luận.

**6. Chúng ta đang vô tình thực hiện sự đánh đổi nào giữa chi phí và độ tin cậy?**
Rà soát các khoản tiết kiệm và sự cố gần đây. Có cái nào liên quan không? Thảo luận cách làm sự đánh đổi tường minh, ví dụ bằng cách liên kết rà soát chi phí với ngân sách lỗi. Quyết định ai được phê duyệt một khoản cắt ảnh hưởng đến độ tin cậy.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối đưa ra các quyết định thúc đẩy chi phí và ở vị trí tốt nhất để giảm nó. Họ nên gắn thẻ lúc tạo, kiểm tra cái nhìn chi phí của mình đều đặn, đưa chi phí vào các cuộc thảo luận thiết kế, và coi giảm lãng phí là công việc bình thường. Họ nên thấy tác động của một thay đổi lên chi phí sớm sau khi thực hiện, hỗ trợ việc học nhanh.

### Đội dịch vụ và vận hành

Các đội vận hành và nền tảng chạy dịch vụ dùng chung, thực thi chính sách, và vận hành cảnh báo bất thường. Họ nên giữ việc tuân thủ thẻ đơn giản, cung cấp báo cáo tự phục vụ, và công bố quy tắc rõ cho chi phí chung. Họ nên canh cả chi phí lẫn độ tin cậy của các nền tảng họ cung cấp, và giúp các đội hành động mà không trở thành một cổng.

### Lãnh đạo và quản trị

Lãnh đạo và tài chính muốn chi tiêu dự đoán được và giá trị tốt. Họ nên tài trợ công cụ và thời gian cho công việc chi phí, chấp nhận khoảng trong dự báo, tránh bảng xếp hạng các đội, và yêu cầu chi phí đơn vị cạnh chất lượng. Quản trị nên kiểm tra rằng cam kết được đưa ra bằng dữ liệu, và các tuyên bố về tính bền vững nêu phương pháp của chúng.

### Khách hàng và người dùng

Người dùng cảm nhận chi phí đám mây gián tiếp, qua giá, tính năng, hoặc sự ổn định của dịch vụ. Họ được lợi khi tiết kiệm tài trợ cho cải tiến và chịu thiệt khi cắt giảm làm giảm chất lượng. Nơi người dùng bị tính phí theo mức tiêu thụ, họ muốn hóa đơn rõ ràng và khả năng ảnh hưởng đến chúng.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến khu vực vận hành cửa hàng và nền tảng đơn hàng trên một đám mây công cộng, với sáu đội kỹ thuật. Các con số dưới đây chỉ mang tính minh họa.

Chi tiêu đám mây tăng đều trong một năm, và giám đốc tài chính yêu cầu cắt giảm. Trưởng FinOps lấy dữ liệu hóa đơn. Độ phủ phân bổ là 68 phần trăm, với một phần ba chi tiêu không gắn thẻ nằm trong các tài khoản thử. Chi phí mỗi đơn hàng hoàn tất là 0,31 đô la Mỹ, tăng từ 0,27 đô la sáu tháng trước, trong khi khối lượng đơn hàng tăng 15 phần trăm. Tỷ lệ lãng phí theo quy tắc của đội là 14 phần trăm chi tiêu trong phạm vi, chủ yếu là môi trường không phải môi trường thật chạy qua đêm và cuối tuần và vài cơ sở dữ liệu quá cỡ. Độ phủ cam kết là 20 phần trăm đường cơ sở ổn định, với mức sử dụng 97 phần trăm trên những gì đã mua. Một sai lệch dự báo cộng 18 phần trăm trong quý vừa rồi theo sau một chiến dịch tiếp thị mà không ai báo cho đội nền tảng. Một tác vụ dữ liệu chạy mất kiểm soát trong một tài khoản đã chạy hai ngày trước khi ai đó nhận ra.

Trưởng FinOps thống nhất bốn thay đổi với các đội kỹ thuật. Một chính sách thẻ chặn tài nguyên mới thiếu thẻ người sở hữu và dịch vụ, với thời gian ân hạn hai tuần. Mỗi đội nhận một cái nhìn chi phí hằng tuần và một khung ngắn trong cuộc trò chuyện chi phí hai tuần một lần. Các môi trường không phải môi trường thật được lên lịch dừng ngoài giờ làm việc, và ba cơ sở dữ liệu quá cỡ được điều chỉnh cỡ sau khi kiểm tra hiệu năng của chúng so với các mục tiêu mức dịch vụ. Một cam kết đầu bao phủ 60 phần trăm đường cơ sở ổn định, với một buổi rà soát sau ba tháng. Một cảnh báo bất thường đến đội sở hữu với kỳ vọng một quyết định được ghi lại trong vòng bốn giờ, và lịch lập kế hoạch giờ gồm các chiến dịch tiếp thị.

Sau một quý, độ phủ phân bổ là 93 phần trăm, tỷ lệ lãng phí giảm xuống 6 phần trăm, chi phí mỗi đơn hàng giảm xuống 0,26 đô la Mỹ mà không đổi độ trễ thanh toán hay tỷ lệ lỗi, và sai lệch dự báo là cộng 5 phần trăm. Độ phủ cam kết là 55 phần trăm với mức sử dụng 96 phần trăm. Thời gian xác nhận bất thường trung vị là 2 giờ, với bách phân vị thứ 85 là 6. Giám đốc tài chính yêu cầu một bảng xếp hạng cho thấy chi phí mỗi đội. Trưởng FinOps từ chối, giải thích rằng các đội chạy dịch vụ khác nhau với tăng trưởng khác nhau, và đề nghị thay vào đó xu hướng chi phí đơn vị của mỗi đội kèm các thước đo độ tin cậy. Quyết định được ghi lại, và ngày rà soát kế tiếp được đặt.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy cho kỹ sư dữ liệu chi phí và thẩm quyền hành động, và rà soát nó theo cùng nhịp với độ tin cậy. Điều cần lưu ý là mục tiêu chi phí đặt ra thiếu bối cảnh làm giảm độ tin cậy hoặc làm trễ công việc hữu ích.

### AI

Dịch vụ AI có thể là một phần chi phí đám mây tăng nhanh, nên hãy cho chúng phân bổ, chi phí đơn vị và cảnh báo bất thường riêng. Hãy ghép chi phí mỗi yêu cầu với chất lượng câu trả lời và với giá trị được giao. Điều cần lưu ý là cắt chi phí AI bằng cách chuyển sang một mô hình yếu hơn có thể tăng việc làm lại của con người.

### Tự động hóa

Hãy tự động hóa kiểm tra thẻ, cảnh báo bất thường và gợi ý điều chỉnh cỡ, và đo tự động hóa theo cảnh báo giả và theo khoản tiết kiệm thực sự đáp xuống. Điều cần lưu ý là việc tắt tự động tài nguyên nhàn rỗi có thể gỡ bỏ thứ đã cần.

### Phân tích

Hãy cho thấy chi phí đơn vị và lãng phí cùng sai lệch dự báo và độ mới của dữ liệu. Quyết định được cung cấp thông tin là tối ưu ở đâu và cam kết gì. Điều cần lưu ý là quyết định cam kết phụ thuộc vào dự báo, nên hãy nêu độ bất định của chúng.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Tín dụng và hóa đơn thấp có thể giấu thói quen xấu trở nên đắt ở quy mô lớn. Hãy gắn thẻ từ ngày đầu, lên lịch các tài nguyên không phải môi trường thật, và theo dõi chi phí mỗi khách hàng sớm. Chỉ cam kết khi nhu cầu dự đoán được.

**Doanh nghiệp nhỏ.** Một tài khoản đơn và vài dịch vụ làm việc gắn thẻ và rà soát đơn giản. Hãy rà soát hóa đơn hằng tháng cùng người xây hệ thống, gỡ tài nguyên bị quên, và cảnh giác với cam kết dài. Một cảnh báo ngân sách là kiểm soát đơn lẻ giá trị nhất.

**Doanh nghiệp lớn.** Nhiều tài khoản, đội và nhà cung cấp đòi hỏi một chức năng FinOps trung tâm tạo điều kiện cho các đội thay vì kiểm soát họ. Hãy chuẩn hóa thẻ và bản xuất hóa đơn qua các nhà cung cấp, thương lượng cam kết tập trung, và cho các đội dữ liệu của họ. Hãy lập kế hoạch cho các khác biệt báo cáo đa đám mây.

**Chính phủ và khu vực công.** Khung mua sắm, cư trú dữ liệu và ngân sách hằng năm cố định giới hạn lựa chọn. Hãy ghi tài liệu các quyết định chi phí và vùng, mô hình hóa ảnh hưởng của chi tiêu biến đổi lên ngân sách được phân bổ, và giữ dấu vết kiểm toán. Cam kết công khai về tính bền vững có thể đòi hỏi phát thải được báo cáo kèm phương pháp (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của một thực hành FinOps là thời gian của một vài người để chạy báo cáo, chính sách thẻ và cuộc trò chuyện đều đặn; công cụ, có thể do nền tảng đám mây cung cấp hoặc mua; và thời gian kỹ thuật để hành động theo phát hiện. Một thực hành nhỏ có thể bắt đầu với một bản xuất hóa đơn và một bảng tính.

Lợi tức đến từ lãng phí giảm, giá tốt hơn qua cam kết, ít bất ngờ hơn, và quyết định tốt hơn về kiến trúc. Hãy xây hồ sơ từ con số của chính bạn: tỷ lệ lãng phí và chi phí của nó trong buổi rà soát đầu, khoản tiết kiệm từ việc lên lịch các môi trường không phải môi trường thật, chiết khấu cam kết trên phần đã cam kết, và chi phí tránh được của các bất thường bắt được sớm. Tránh trích dẫn tỷ lệ lãng phí hay số tiết kiệm toàn ngành mà không có nguồn và phương pháp truy được. Hãy gồm chi phí của thực hành và rủi ro cam kết quá mức. Hồ sơ tài chính cho các cải tiến nói chung được bao quát ở chủ đề kế tiếp (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Một đội trung tâm nói không.** Nó làm chậm công việc và các đội đi vòng. Hãy tạo điều kiện cho các đội bằng dữ liệu và rào chắn.
- **Cắt chi phí mà không canh độ tin cậy.** Khoản tiết kiệm quay lại dưới dạng sự cố. Hãy ghép chi phí với các thước đo mức dịch vụ.
- **Đuổi theo độ phủ cam kết.** Một phần trăm cao với mức sử dụng thấp là lãng phí. Hãy theo dõi cả hai.
- **Báo cáo hằng tháng chỉ cho tài chính.** Kỹ sư không bao giờ thấy chúng. Hãy cho các đội cái nhìn hằng ngày hoặc hằng tuần.
- **Gắn thẻ như một dự án dọn dẹp.** Nó mục ruỗng. Hãy thực thi thẻ lúc tạo.
- **Xếp hạng các đội theo chi tiêu.** Tăng trưởng trông như lãng phí. Hãy cho thấy xu hướng chi phí đơn vị kèm bối cảnh.
- **Dự báo một con số.** Nhu cầu biến đổi phá vỡ nó. Hãy dùng khoảng và động lực.
- **Tuyên bố phát thải chính xác.** Phương pháp ước lượng không chắc chắn. Hãy nêu phương pháp và giới hạn.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Hiển thị và quyền sở hữu | Hóa đơn hằng tháng do tài chính xem | Thẻ được một số đội dùng | Thẻ bắt buộc; các đội thấy cái nhìn chi phí hằng tuần | Độ phủ phân bổ được quản lý; nhóm chung được rà soát | Dữ liệu chi phí chảy vào quyết định sản phẩm gần thời gian thực qua các nhà cung cấp |
| Tối ưu | Thỉnh thoảng dọn dẹp | Lịch và điều chỉnh cỡ bởi một số đội | Quy tắc lãng phí và một tồn đọng tối ưu thường trực | Lãng phí, cam kết và chi phí đơn vị được quản lý cùng đồng hành độ tin cậy | Tối ưu liên tục, tự động với giám sát của con người và học hỏi chung |
| Lập kế hoạch | Ngân sách hằng năm | Dự báo thô | Dự báo dựa trên động lực với khoảng | Sai lệch được phân tích và đưa ngược lại; cam kết được quản lý dần dần | Dự báo chung với doanh nghiệp, nhà cung cấp và mục tiêu bền vững |

## Danh sách kiểm tra

- [ ] Một tập thẻ bắt buộc nhỏ (người sở hữu, dịch vụ, môi trường) được thực thi lúc tạo tài nguyên.
- [ ] Độ phủ phân bổ được báo cáo hằng tuần, với các mục không gắn thẻ lớn nhất được liệt kê.
- [ ] Mỗi đội có một cái nhìn chi phí hằng tuần với xu hướng và bất thường.
- [ ] Một cuộc trò chuyện chi phí đều đặn giữa kỹ thuật và tài chính có trong lịch.
- [ ] Chi phí đơn vị đám mây được theo dõi cạnh tính sẵn sàng, độ trễ và tỷ lệ lỗi.
- [ ] Quy tắc lãng phí được viết ra và áp dụng, với các trường hợp loại trừ được gắn nhãn.
- [ ] Cam kết được thực hiện dần dần so với mức dùng nền ổn định, với độ phủ và mức sử dụng được theo dõi.
- [ ] Dự báo dùng động lực và khoảng, và sai lệch được phân tích.
- [ ] Cảnh báo bất thường đến người sở hữu kèm thời gian kỳ vọng để quyết định.
- [ ] Ước lượng phát thải, nếu được báo cáo, nêu phương pháp và giới hạn.

## Lời nhắc AI

**Phân tích một xu hướng chi phí.**

```text
Here is a summary of our cloud cost and usage for [service] over [period]:
[paste monthly cost, volume, and any known changes]. Break the change in cost
into volume, price, and mix effects as far as the data allows, suggest what to
check next, and propose a unit cost with a quality companion. Do not invent
prices or discounts. List your assumptions and the data you would need to be
more certain.
```

**Soạn một chính sách thẻ.**

```text
Draft a tag policy for [type of organization] using [cloud provider(s)]. Include
a minimal set of mandatory tags, allowed values, how they are enforced at
creation, how violations are reported to owners, and a grace period. Keep it
short enough for engineers to follow. List your assumptions and anything that
depends on provider features I should check in current documentation.
```

**Định nghĩa quy tắc lãng phí.**

```text
Propose rules for classifying cloud resources as idle or oversized in [type of
environment], including the metrics used, time windows, exclusions (for example
resilience standbys), and a review process for false positives. Describe how
to avoid harming reliability. Do not set numeric thresholds without saying how
we should calibrate them from our own data. List your assumptions.
```

**Lập kế hoạch một cam kết đầu tiên.**

```text
Our steady baseline usage over the last [period] is [summary] and demand risks
are [list]. Outline a cautious plan for a first commitment: how to estimate
the baseline, how much to commit, how to review utilization, and what would
make us stop. Do not assume specific provider discounts or terms. List your
assumptions and questions for finance and procurement.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số chi phí đám mây.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số chi phí đám mây mang vectơ lợi dụng, rào chắn và đồng hành độ tin cậy của nó.

## Điểm chính cần nhớ

- Làm chi phí hiển thị và có chủ: thực thi thẻ lúc tạo và cho mỗi đội cái nhìn hằng tuần của riêng họ.
- Đo chi phí mỗi đơn vị cạnh độ tin cậy và chất lượng, không bao giờ một mình.
- Gỡ lãng phí như một phần của công việc bình thường, được dẫn dắt bởi các quy tắc bằng văn bản.
- Cam kết dần vào đường cơ sở ổn định và theo dõi cả độ phủ lẫn mức sử dụng.
- Dự báo bằng động lực và khoảng, và canh bất thường với phản ứng nhanh.
- Không xếp hạng các đội theo chi tiêu, và nêu phương pháp và giới hạn của bất kỳ ước lượng phát thải nào.

## Tài liệu tham khảo và đọc thêm

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
