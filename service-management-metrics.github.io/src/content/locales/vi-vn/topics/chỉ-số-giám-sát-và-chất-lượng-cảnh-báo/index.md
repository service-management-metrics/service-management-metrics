# Chỉ số giám sát và chất lượng cảnh báo

**Một cảnh báo là một lời yêu cầu sự chú ý của một con người, nên hãy đo giám sát theo mức độ thường xuyên lời yêu cầu đó đáng được đưa ra, nó bắt được bao nhiêu rắc rối thật, và nó tốn bao nhiêu giấc ngủ và lòng tin.**

## Tổng quan và động lực

Giám sát là việc thu thập, xử lý và hiển thị dữ liệu thời gian thực về một hệ thống. [Giám sát hệ thống](https://en.wikipedia.org/wiki/System_monitoring) trả lời câu hỏi "dịch vụ có đang hoạt động theo cách người dùng cần không?" Một cảnh báo là điểm mà dữ liệu đó yêu cầu một con người làm điều gì đó. Hầu hết các đội đo hoạt động thứ nhất kém hoặc không đo, và chỉ đo hoạt động thứ hai qua phàn nàn. Chủ đề này đưa cho bạn một tập nhỏ các thước đo cho cả hai: giám sát có thấy những thất bại quan trọng không, và các cảnh báo nó đưa ra có xứng đáng với sự chú ý mà chúng đòi hỏi không.

Trước hết là vài thuật ngữ. Trong từ vựng ITIL 4, một sự kiện là một thay đổi trạng thái có ý nghĩa với việc quản lý một dịch vụ, và quản lý sự kiện là thực hành phát hiện sự kiện, quyết định cái nào quan trọng, và chọn phản ứng. Một cảnh báo là một thông báo tới một con người, được gửi dưới dạng cuộc gọi, tin nhắn hoặc phiếu. Một cuộc gọi (page) là một cảnh báo làm gián đoạn ai đó ngay lập tức. Một dương tính giả là một cảnh báo kêu khi không có gì cần chú ý, và một âm tính giả là một thất bại mà không cảnh báo nào báo cáo; cả hai thuật ngữ đến từ ngôn ngữ của [dương tính giả và âm tính giả](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Một cảnh báo hành động được là cảnh báo mà một người có một hành động hữu ích để làm, và đã làm nó hoặc cố ý chọn không làm với một lý do được ghi lại.

Hai phía của giám sát kéo ngược nhau. Thêm cảnh báo sau mỗi sự cố xây nên một bức tường nhiễu; cắt chúng để làm yên có nguy cơ im lặng trong thất bại quan trọng. Ngôn ngữ của [độ chính xác và độ phủ (precision và recall)](https://en.wikipedia.org/wiki/Precision_and_recall) rất phù hợp. Độ chính xác hỏi tỷ lệ cảnh báo được đưa ra có đáng đưa ra không. Độ phủ hỏi tỷ lệ vấn đề thật mà cảnh báo bắt được. Chất lượng cảnh báo là sự cân bằng giữa hai thứ, và một chỉ số chỉ nhìn một bên mời gọi đội hy sinh bên kia. [Tỷ lệ tín hiệu trên nhiễu](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) nắm bắt cùng sự căng thẳng.

Cái giá con người là lý do điều này thuộc về một cuốn sách về chỉ số dịch vụ. [Mệt mỏi vì báo động (alarm fatigue)](https://en.wikipedia.org/wiki/Alarm_fatigue) là xu hướng được ghi nhận rõ của những người tiếp xúc nhiều báo động, phần lớn không quan trọng, trở nên chai lì và chậm phản ứng với những báo động quan trọng. Nó được nghiên cứu đầu tiên trong bối cảnh lâm sàng và áp dụng cho bất kỳ luân phiên [trực ca](https://en.wikipedia.org/wiki/On-call) nào bị gọi quá thường xuyên bởi những cảnh báo chẳng dẫn đến đâu. Những người xử lý mệt mỏi bỏ lỡ sự cố thật và cuối cùng rời khỏi luân phiên.

Các góc nhìn khác nhau giữa hai truyền thống mà cuốn sách này nối lại. ITIL 4 đặt công việc này trong thực hành quản lý giám sát và sự kiện, với liên kết đến quản lý sự cố và quản lý mức dịch vụ. Mối quan tâm của nó là các sự kiện được phát hiện, phân loại và định tuyến để sự cố được tìm thấy sớm và xử lý nhất quán. [Kỹ thuật độ tin cậy của trang (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) tiếp cận từ đầu kia: cuốn *Site Reliability Engineering* của Google lập luận rằng các cuộc gọi nên khẩn cấp, quan trọng, hành động được và có thật, và mọi thứ khác thuộc về một phiếu hoặc một bảng điều khiển. Các đội linh hoạt gặp nó như một thỏa thuận làm việc: ai bị đánh thức, vì điều gì, và ai sửa một cảnh báo sai. Các chỉ số dưới đây vay mượn từ cả ba và giữ một quy tắc: một chỉ số mô tả một luân phiên, một dịch vụ hoặc một quy tắc cảnh báo, không bao giờ một cá nhân.

Chủ đề này không lặp lại các láng giềng của nó. Thời gian sự cố thuộc chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố, sự cố lớn thuộc chủ đề 3.4, Chỉ số sự cố lớn, mục tiêu và ngân sách lỗi thuộc chủ đề 5.2, SLI, SLO và ngân sách lỗi, và tải con người thuộc chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca. Ở đây chủ đề là chất lượng của tín hiệu bắt đầu tất cả những thứ đó. Đo đạc được bao quát trong chủ đề 1.5, Nguồn dữ liệu và công cụ đo.

## Nguyên tắc chính

- **Gọi người về các triệu chứng người dùng cảm nhận; dùng phiếu hoặc bảng điều khiển cho phần còn lại.** Một cảnh báo về điều người dùng trải nghiệm (lỗi, chậm, không khả dụng) vẫn hữu ích khi hệ thống đổi. Một cảnh báo về nguyên nhân (đĩa đầy, CPU bận) chỉ hữu ích khi nó dự đoán một triệu chứng và một người hành động được trước khi nó đến.
- **Mọi cảnh báo phải dẫn đến một hành động.** Nếu phản ứng đúng với một cảnh báo là không làm gì, cảnh báo nên được đổi, hạ xuống thành phiếu, hoặc xóa. Hãy đo tỷ lệ dẫn đến hành động, và coi phần còn lại là khiếm khuyết của giám sát.
- **Đo cả độ chính xác và độ phủ.** Chỉ đếm nhiễu thưởng cho sự im lặng, và chỉ đếm độ phủ thưởng cho khối lượng. Hai thứ cùng nhau mô tả chất lượng, và mỗi thứ là rào chắn cho thứ kia.
- **Coi mỗi quy tắc cảnh báo là một sản phẩm có người sở hữu.** Một quy tắc có mục đích, ngưỡng, sổ tay vận hành và ngày rà soát. Các quy tắc không chủ tích tụ, và nhiễu chúng tạo ra không thuộc về ai.
- **Báo cáo luân phiên và dịch vụ, không bao giờ con người.** Tải cảnh báo là thuộc tính của cách hệ thống và luân phiên được thiết kế. Nêu tên cá nhân biến một vấn đề thiết kế thành vấn đề đổ lỗi và giấu cách sửa thật.

## Định nghĩa chỉ số

Các chỉ số dưới đây được chọn như một tập. Khối lượng đứng riêng vô nghĩa, tính hành động được cho bạn biết khối lượng có phải vấn đề không, và độ phủ cùng thời gian phát hiện cho bạn biết sự yên tĩnh đang giấu điều gì. Tất cả được tính theo từng dịch vụ hoặc luân phiên, và tất cả dùng bản ghi cảnh báo từ công cụ giám sát và gọi người được ghép với bản ghi sự cố và phiếu.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Khối lượng cảnh báo | Số cảnh báo đã thông báo cho một con người, chia thành cuộc gọi và phiếu | Số thông báo riêng biệt được gửi đến một luân phiên hoặc hàng đợi trong kỳ; lặp lại của cùng một cảnh báo đang mở được gom thành một; cảnh báo được tự động hóa xử lý hoàn toàn không có thông báo cho con người bị loại trừ; báo cáo theo luân phiên mỗi tuần, và tỷ lệ ngoài giờ riêng | cảnh báo mỗi luân phiên-tuần | Công cụ gọi người và định tuyến cảnh báo | Quản lý giám sát và sự kiện | Thỏa thuận làm việc của đội về trực ca | Hằng tuần |
| Tỷ lệ cảnh báo hành động được | Tỷ lệ cảnh báo sau đó một người đã thực hiện một hành động hữu ích | Số cảnh báo có hành động được ghi lại (sửa, giảm thiểu, leo thang, hoặc thay đổi quy tắc cảnh báo) / số cảnh báo được rà soát trong kỳ; cảnh báo tự giải quyết trước khi bất kỳ xác nhận nào được tính là không hành động được; cảnh báo chưa rà soát được báo cáo như một số đếm riêng, không bị bỏ | phần trăm | Bản ghi cảnh báo ghép với nhãn rà soát, phiếu hoặc sự cố | Quản lý giám sát và sự kiện; quản lý sự cố | Hành động cải tiến của đội về vận hành | Rà soát hằng tuần, xu hướng hằng tháng |
| Tỷ lệ dương tính giả | Tỷ lệ cảnh báo kêu khi không có vấn đề | Số cảnh báo được gắn nhãn dương tính giả trong rà soát / số cảnh báo được rà soát trong kỳ; "dương tính giả" nghĩa là điều kiện không phải một lỗi và không ai muốn được báo; một vấn đề thật nhưng quá nhỏ để hành động không phải dương tính giả | phần trăm | Nhãn rà soát cảnh báo | Quản lý giám sát và sự kiện | Buổi nhìn lại về nhiễu | Hằng tháng |
| Độ phủ phát hiện | Tỷ lệ dịch vụ trong phạm vi có ít nhất một cảnh báo đã kiểm thử trên một triệu chứng hướng người dùng | Số dịch vụ có một cảnh báo triệu chứng đã được thử bằng một bài kiểm thử hoặc một sự kiện thật trong 12 tháng qua / số dịch vụ trong phạm vi danh mục dịch vụ; danh sách dịch vụ trong phạm vi được cố định lúc bắt đầu kỳ | phần trăm | Danh mục dịch vụ, kiểm kê quy tắc cảnh báo, bản ghi kiểm thử | Quản lý cấu hình dịch vụ; quản lý giám sát và sự kiện | Định nghĩa hoàn thành cho một dịch vụ mới | Hằng quý |
| Tỷ lệ phát hiện nhờ giám sát | Tỷ lệ sự cố mà giám sát phát hiện trước khi một người dùng hoặc đồng nghiệp báo | Số sự cố có tín hiệu đầu tiên là một cảnh báo / số sự cố trong kỳ; đồng hồ là thời điểm mở sự cố, và sự cố không có tín hiệu đầu tiên được ghi lại được báo cáo là không rõ, không phải là đã phát hiện | phần trăm | Bản ghi sự cố có trường tín hiệu đầu tiên, dòng thời gian cảnh báo | Quản lý sự cố | Rà soát sự cố (học hỏi sau sự cố) | Hằng tháng |
| Thời gian phát hiện (TTD) | Thời gian trôi qua giữa lúc bắt đầu tác động đến người dùng và cảnh báo đầu tiên thông báo cho một con người | Thời điểm cảnh báo thông báo cho người đầu tiên trừ thời điểm bắt đầu tác động, trong đó bắt đầu tác động là thời điểm sớm nhất chỉ báo mức dịch vụ bị vi phạm, như xác lập trong buổi rà soát sự cố; báo cáo trung vị và bách phân vị thứ 95; sự cố không có cảnh báo bị loại trừ và đếm riêng | phút | Rà soát sự cố, dòng thời gian cảnh báo, lịch sử chỉ báo mức dịch vụ | Quản lý sự cố; quản lý giám sát và sự kiện | Rà soát sau sự cố | Hằng tháng, theo từng sự cố |
| Mức tập trung cảnh báo | Tỷ lệ khối lượng cảnh báo do vài quy tắc cảnh báo ồn ào nhất tạo ra | Số cảnh báo từ năm quy tắc có nhiều cảnh báo nhất / tất cả cảnh báo trong kỳ; cùng cảnh báo gom một lần; con số năm quy tắc là một quy ước mà đội có thể đổi nếu nêu lý do | phần trăm | Kiểm kê quy tắc cảnh báo và bản ghi gọi người | Cải tiến liên tục; quản lý giám sát và sự kiện | Tồn đọng cải tiến của buổi nhìn lại | Hằng tháng |
| Độ cập nhật của quy tắc cảnh báo | Tỷ lệ quy tắc gọi người có người sở hữu, liên kết sổ tay vận hành và một lần rà soát trong khoảng đã thống nhất | Số quy tắc gọi người thỏa cả ba điều kiện / tất cả quy tắc gọi người; quy tắc bị tắt trong kỳ bị loại trừ | phần trăm | Kiểm kê quy tắc cảnh báo | Quản lý tri thức; quản lý giám sát và sự kiện | Thỏa thuận làm việc về sự sẵn sàng vận hành | Hằng quý |

Khối lượng cảnh báo cần bối cảnh, nên hãy đọc nó cạnh tỷ lệ cảnh báo hành động được. Thời gian phát hiện dùng thời điểm bắt đầu tác động đến người dùng, không phải phiếu, vì đồng hồ phiếu bắt đầu sau khi phát hiện; thời điểm bắt đầu tác động là một ước lượng từ buổi rà soát sự cố và nên được gắn nhãn là như vậy. Tỷ lệ dương tính giả và tỷ lệ cảnh báo hành động được không phải là phần bù của nhau, vì một cảnh báo có thể đúng mà vẫn không đáng thời gian của một người.

## Khuyến nghị

### Quyết định điều gì xứng đáng một cuộc gọi

**1. Viết một chính sách gọi người và giữ nó ngắn.** Hãy nêu trong một đoạn điều gì đáng một cuộc gọi (một triệu chứng người dùng cảm nhận ngay bây giờ hoặc sắp cảm nhận, mà một người hành động được) và điều gì không. Mọi thứ khác đi vào hàng đợi phiếu hoặc bảng điều khiển. Chương về giám sát hệ thống phân tán trong sách SRE của Google là một điểm khởi đầu tốt (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi).

**2. Cảnh báo theo triệu chứng, và giữ nguyên nhân cho chẩn đoán.** Một cuộc gọi cho "tỷ lệ lỗi trên ngưỡng đã thống nhất" là một cuộc gọi về người dùng. Một cuộc gọi cho "CPU cao" là một cuộc gọi về một phỏng đoán. Hãy giữ các tín hiệu cấp nguyên nhân trên bảng điều khiển nơi người xử lý sẽ nhìn khi cảnh báo triệu chứng đã kêu, và chỉ nâng một cái lên thành cuộc gọi khi nó dự đoán đáng tin một triệu chứng với đủ cảnh báo để hành động.

**3. Gắn ngưỡng gọi người với mục tiêu mức dịch vụ.** Nơi một dịch vụ có [mục tiêu mức dịch vụ (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), hãy cảnh báo theo tốc độ ngân sách lỗi đang bị tiêu thay vì theo ngưỡng thô. Chương về cảnh báo theo SLO trong SRE Workbook mô tả cảnh báo tốc độ đốt và các đánh đổi giữa độ chính xác, độ phủ, thời gian phát hiện và thời gian đặt lại. Cách tiếp cận này gọi người về điều đe dọa mục tiêu và im lặng về những gợn sóng ngắn không đe dọa.

### Rà soát mọi cảnh báo theo nhịp

**4. Gắn nhãn mọi cảnh báo trong một buổi rà soát ngắn, đều đặn.** Hãy dành mười lăm phút mỗi tuần cho mỗi luân phiên để xem điều gì đã kêu. Với mỗi cảnh báo, ghi một nhãn: hành động được, dương tính giả, thật nhưng không đáng một cuộc gọi, hoặc trùng lặp. Các nhãn là dữ liệu cho tỷ lệ cảnh báo hành động được và tỷ lệ dương tính giả, và buổi rà soát là nơi các quy tắc ồn ào được sửa vào ngày hôm sau thay vì quý sau.

**5. Làm cho buổi rà soát tạo ra thay đổi.** Mỗi tuần, hãy chọn ít nhất một quy tắc để tinh chỉnh, hạ cấp, gộp hoặc xóa, và ghi thay đổi vào tồn đọng của đội như công việc bình thường.

**6. Xóa mà không sợ.** Các đội giữ cảnh báo vì xóa một cái có cảm giác rủi ro và không ai nhớ vì sao nó tồn tại. Hãy yêu cầu mỗi quy tắc gọi người mang một mục đích và một người sở hữu, và thống nhất rằng một quy tắc chưa từng dẫn đến hành động trong một giai đoạn nêu rõ sẽ bị gỡ hoặc hạ cấp, với thay đổi được ghi lại để có thể đảo ngược. Chỉ số độ cập nhật của quy tắc làm kỷ luật này hiển thị.

### Đo những gì giám sát bỏ sót

**7. Theo dõi tỷ lệ sự cố mà người dùng tìm thấy trước.** Sau mỗi sự cố, hãy ghi lại nó được nhận ra đầu tiên ra sao: một cảnh báo, một đồng nghiệp, một khách hàng, một phiếu hỗ trợ, hoặc một kiểm tra thường lệ. Tỷ lệ được giám sát tìm thấy là thước đo thực tế gần nhất của độ phủ. Nó không đầy đủ, vì sự cố không ai nhận ra không bao giờ vào mẫu, nên hãy ghép nó với việc kiểm thử định kỳ chính các cảnh báo.

**8. Ước lượng thời gian phát hiện trung thực.** Hãy xác lập thời điểm bắt đầu tác động đến người dùng trong buổi rà soát sau sự cố từ lịch sử chỉ báo mức dịch vụ, không phải từ lúc ai đó gõ phiếu. Báo cáo trung vị và một bách phân vị cao, và cho thấy các sự cố hoàn toàn không có cảnh báo như một số đếm riêng. Một giá trị trung bình duy nhất giấu cả trường hợp điển hình lẫn cái đuôi tồi (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ, và chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

**9. Kiểm thử các cảnh báo bạn phụ thuộc.** Độ phủ phát hiện chỉ đáng tin nếu cảnh báo đã được thấy là hoạt động. Hãy đưa vào các ngày diễn tập hoặc buổi tổng duyệt phát hành một kiểm tra cố ý gây ra một triệu chứng và xác nhận rằng cảnh báo đúng kêu, đến đúng luân phiên và liên kết đến một sổ tay vận hành dùng được. Một cảnh báo chưa bao giờ được thử là một hy vọng, không phải một kiểm soát (xem chủ đề 5.6, Chỉ số liên tục dịch vụ).

### Giữ đường tín hiệu khỏe mạnh

**10. Giám sát chính giám sát.** Một thất bại im lặng của hệ thống giám sát trông y hệt một dịch vụ khỏe mạnh. Hãy thêm một kiểm tra nhịp tim gọi người nếu đường ống cảnh báo ngừng giao, và ghi lại mức độ thường xuyên chính đường ống thất bại.

**11. Gom nhóm, loại trùng và liên kết trước khi đếm.** Hãy gom các cảnh báo liên quan thành một, chặn các lần lặp của một cảnh báo đã mở, và định tuyến mỗi cái đến luân phiên sở hữu. Liên kết mỗi cảnh báo với sổ tay vận hành của nó và với sự cố hoặc phiếu nó tạo ra, vì phép ghép đó cho phép bạn tính tỷ lệ cảnh báo hành động được và tỷ lệ phát hiện nhờ giám sát mà không đếm thủ công (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Khối lượng cảnh báo | Nâng ngưỡng, thêm độ trễ dài, hoặc chuyển cảnh báo từ cuộc gọi sang hàng đợi im lặng để số đếm giảm trong khi vấn đề không được thấy; chia hay gộp cảnh báo để đổi số đếm | Tỷ lệ phát hiện nhờ giám sát và thời gian phát hiện; quy tắc rằng mọi lần hạ cấp được ghi lại kèm lý do và rà soát sau một quý |
| Tỷ lệ cảnh báo hành động được | Gắn nhãn cảnh báo là hành động được sau sự việc, hoặc làm một hành động tầm thường (một bình luận, một xác nhận) để đủ điều kiện; để cảnh báo ồn ào chưa rà soát để chúng không bao giờ vào mẫu số | Số đếm cảnh báo chưa rà soát cho thấy cạnh tỷ lệ; kiểm tra mẫu bởi người ngoài luân phiên; định nghĩa "hành động hữu ích" được viết ra |
| Tỷ lệ dương tính giả | Định nghĩa dương tính giả hẹp để các cảnh báo "thật nhưng vô nghĩa" được tính là đúng; đóng cảnh báo ồn ào mà không gắn nhãn | Tỷ lệ cảnh báo hành động được và nhãn "thật nhưng không đáng một cuộc gọi" được theo dõi riêng; lấy mẫu định kỳ các cảnh báo đã đóng |
| Độ phủ phát hiện | Thêm một cảnh báo tầm thường (một lệnh ping) cho mọi dịch vụ để tuyên bố độ phủ; tính các cảnh báo chưa từng được kiểm thử | Yêu cầu rằng cảnh báo theo dõi một triệu chứng hướng người dùng và đã được thử trong 12 tháng qua; tỷ lệ phát hiện nhờ giám sát |
| Tỷ lệ phát hiện nhờ giám sát | Ghi mọi sự cố là "được giám sát phát hiện" ngay cả khi người dùng báo trước; tạo cảnh báo sau sự việc rồi viện dẫn nó; để trống trường tín hiệu đầu tiên để tránh một con số xấu | Số đếm không rõ cho thấy cạnh tỷ lệ; bằng chứng tín hiệu đầu tiên lấy từ dòng thời gian cảnh báo, không phải từ trí nhớ; sự cố do khách hàng báo được liên kết từ bản ghi hỗ trợ |
| Thời gian phát hiện (TTD) | Tuyên bố thời điểm bắt đầu tác động muộn hơn thực tế; loại các sự cố không có cảnh báo; báo cáo giá trị trung bình để giấu cái đuôi | Thời điểm bắt đầu tác động lấy từ lịch sử chỉ báo mức dịch vụ; các sự cố không có cảnh báo được đếm và cho thấy; trung vị và bách phân vị thứ 95 báo cáo cùng nhau |
| Mức tập trung cảnh báo | Chia một quy tắc ồn ào thành nhiều quy tắc để không cái nào nằm trong năm hàng đầu; đổi tên quy tắc | Báo cáo mức tập trung theo lỗi nền hoặc dịch vụ cũng như theo quy tắc; theo dõi tổng khối lượng và tỷ lệ cảnh báo hành động được cạnh nó |
| Độ cập nhật của quy tắc cảnh báo | Thêm người sở hữu giữ chỗ, liên kết sổ tay vận hành rỗng, hoặc một lần rà soát đóng dấu cho có để thỏa điều kiện | Kiểm tra ngẫu nhiên rằng liên kết sổ tay vận hành mở được và đã được dùng trong một phản ứng thật; thực hành kiểm thử sổ tay vận hành trong ngày diễn tập |

Một kết quả đọc lành mạnh cho thấy vài điều cùng nhau. Khối lượng cảnh báo mỗi luân phiên ổn định hoặc giảm và nằm trong mức đội đã chọn là bền vững. Tỷ lệ cảnh báo hành động được tăng qua nhiều tháng khi các quy tắc ồn ào nhất được tinh chỉnh. Tỷ lệ phát hiện nhờ giám sát cao và thời gian phát hiện ngắn và không dài ra khi khối lượng giảm, chứng tỏ sự yên tĩnh là xứng đáng chứ không phải mua được. Độ phủ phát hiện tăng vì các dịch vụ được kiểm thử, không phải vì các cảnh báo tầm thường được thêm. Nếu khối lượng giảm trong khi tỷ lệ phát hiện hay thời gian phát hiện tệ đi, đội đã đổi độ phủ lấy sự bình yên, và các rào chắn là thứ phơi bày điều đó.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Ít cuộc gọi, dựa trên triệu chứng | Đêm yên tĩnh, lòng tin cao vào mỗi cuộc gọi, dễ giữ hiện hành | Rủi ro phát hiện muộn với vấn đề tích tụ chậm; cần thói quen phiếu và bảng điều khiển tốt cho phần còn lại |
| Nhiều cảnh báo nhạy | Cảnh báo sớm về rắc rối cấp nguyên nhân; ít sự cố bị bỏ sót | Mệt mỏi vì báo động, xác nhận chậm hơn, và bỏ cuộc khỏi các luân phiên trực ca |
| Cảnh báo tốc độ đốt SLO | Cuộc gọi gắn với điều đe dọa mục tiêu; ít gợn sóng hơn | Cần chỉ báo tốt và một mục tiêu đã thống nhất; cần tinh chỉnh để cân bằng thời gian phát hiện và độ chính xác |
| Rà soát cảnh báo hằng tuần | Phản hồi nhanh; quy tắc ồn ào được sửa nhanh | Tốn thời gian mỗi tuần; thành sân khấu nếu không có thay đổi theo sau |
| Gắn nhãn bởi con người | Nắm bắt phán đoán mà không công cụ nào có | Chủ quan; nhãn trôi giữa những người rà soát và luân phiên trừ khi định nghĩa được viết ra |
| Chặn và gom nhóm tự động | Cắt nhiễu ở quy mô lớn; giảm các cuộc gọi lặp lại | Có thể giấu tín hiệu thật nếu quy tắc sai; cần giám sát và rà soát riêng |

Mọi lựa chọn đánh đổi độ chính xác với độ phủ, và sự đánh đổi nên được thực hiện có chủ đích và viết ra theo từng dịch vụ, vì nó là bối cảnh cho phép bất kỳ ai đọc các con số một cách công bằng. Một dịch vụ có hậu quả nghiêm trọng khi bỏ sót một thất bại có thể chấp nhận tỷ lệ hành động được thấp hơn để có cảnh báo sớm hơn, với một lớp phân loại gửi các cảnh báo thêm vào hàng đợi phiếu ban đêm.

## Câu hỏi để thảo luận với đội nhóm

**1. Chúng ta muốn bị đánh thức vì điều gì, và cuộc gọi nào của tháng trước đạt tiêu chuẩn đó?** Hãy viết chính sách gọi người trong một hai câu, rồi lấy các cuộc gọi tháng trước và kiểm tra từng cái với nó. Bài tập này có giá trị hơn phần trăm nó tạo ra, vì các bất đồng cho thấy kỳ vọng của đội khác nhau ở đâu. Ghi lại những cái không cần thiết như ứng viên để hạ cấp.

**2. Nếu quy tắc cảnh báo ồn ào nhất biến mất vào ngày mai, chúng ta sẽ mất gì?** Hãy hỏi câu này cho mỗi quy tắc trong năm quy tắc hàng đầu theo khối lượng. Thường không ai nêu được một thất bại cụ thể mà quy tắc từng bắt được, và đó là dấu hiệu nó có thể được tinh chỉnh hoặc gỡ. Nơi có người nêu được, hãy hỏi liệu thất bại đó cũng sẽ kích hoạt một cảnh báo triệu chứng không.

**3. Làm sao chúng ta biết giám sát đã bỏ sót gì?** Hãy xem vài sự cố gần đây và hỏi ai nhận ra đầu tiên và tác động kéo dài bao lâu trước đó. Câu trả lời cho bạn tỷ lệ phát hiện nhờ giám sát và một thời gian phát hiện sơ bộ mà không cần công cụ mới. Thảo luận tín hiệu nào sẽ bắt được từng cái sớm hơn.

**4. Tải trực ca của chúng ta có bền vững không, và làm sao chúng ta biết?** Thống nhất "bền vững" nghĩa là gì cho một luân phiên, như giới hạn số cuộc gọi ngoài giờ mỗi tuần, và rà soát xu hướng theo luân phiên, không theo người. Nếu tải trên mức đã thống nhất, hãy coi đó là khiếm khuyết của dịch vụ và lập kế hoạch công việc để giảm nó. Giữ các thước đo nhất quán với chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca.

**5. Cảnh báo nào của chúng ta chưa từng được kiểm thử, và làm sao chúng ta kiểm thử chúng an toàn?** Hãy liệt kê các dịch vụ phụ thuộc vào một cảnh báo triệu chứng duy nhất và hỏi có ai từng thấy nó kêu trong thực tế hay trong một buổi tổng duyệt không. Lập kế hoạch một bài kiểm thử và kiểm tra toàn bộ đường: phát hiện, định tuyến, thông báo, sổ tay vận hành. Cân nhắc liệu một đường ống cảnh báo hỏng có hiển thị được không.

**6. Những con số này có thể bị lợi dụng ở đây thế nào, và chúng ta sẽ nhận thấy gì?** Hãy yêu cầu đội mô tả, trung thực, họ có thể làm mỗi con số trông đẹp hơn mà không cải thiện gì bằng cách nào. Rồi thống nhất rào chắn nào sẽ cho thấy điều đó và ai nhìn vào nó. Nêu tên các mánh trước làm chúng bớt hấp dẫn (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội xây và vận hành một dịch vụ quyết định nó báo cáo gì về chính nó, nên chất lượng cảnh báo bắt đầu từ định nghĩa hoàn thành. Một tính năng mới phát hành cùng chỉ báo và cảnh báo đã kiểm thử của riêng nó tránh được giám sát bị gắn thêm sau sự cố đầu tiên. Hãy coi việc tinh chỉnh cảnh báo là công việc tồn đọng bình thường.

### Đội dịch vụ và vận hành

Các đội vận hành mang máy nhắn tin và cảm nhận chi phí đầu tiên, nên họ sở hữu nhịp rà soát, việc gắn nhãn và nhịp tim của đường ống. Khi một cảnh báo sai, bản sửa thuộc về người sở hữu quy tắc, không phải người nhận cuộc gọi.

### Lãnh đạo và quản trị

Lãnh đạo có thể yêu cầu các số liệu phát hiện và tính hành động được theo dịch vụ, tài trợ thời gian tinh chỉnh, và chống lại một mục tiêu về khối lượng cảnh báo thưởng cho sự im lặng. Khối lượng giảm chỉ là tin tốt nếu tỷ lệ phát hiện và thời gian phát hiện giữ ổn định. Giới hạn trực ca bền vững là một quyết định nhân sự và thiết kế, không phải một quyết định động viên.

### Khách hàng và người dùng

Khách hàng không bao giờ thấy một cảnh báo; họ thấy dịch vụ có thất bại không và mất bao lâu để sửa. Giám sát tốt hiện ra là các sự cố được sửa trước khi họ nhận ra, và ít trường hợp khách hàng báo trước hơn. Nơi tổ chức dùng các thước đo trải nghiệm (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA), tỷ lệ sự cố do người dùng báo đầu tiên là chỉ báo trực tiếp của khoảng cách trải nghiệm.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một nền tảng đặt hàng với bốn đội sản phẩm và một đội nền tảng hỗ trợ luân phiên trực ca. Mọi con số trong ví dụ này chỉ mang tính minh họa. Trong bốn tuần (minh họa) luân phiên nhận 240 cuộc gọi, 70 trong số đó nằm giữa 22:00 và 07:00. Đội rà soát mọi cuộc gọi bằng bốn nhãn: hành động được, dương tính giả, thật nhưng không đáng một cuộc gọi, và trùng lặp.

Buổi rà soát cho thấy tỷ lệ cảnh báo hành động được là 31 phần trăm (minh họa) và tỷ lệ dương tính giả là 22 phần trăm (minh họa). Năm quy tắc tạo ra 58 phần trăm số cuộc gọi (minh họa), và quy tắc lớn nhất là một ngưỡng đĩa trên một máy chủ xử lý lô luôn tự phục hồi. Tỷ lệ phát hiện nhờ giám sát của quý trước là 62 phần trăm (minh họa), và thời gian phát hiện trung vị là 14 phút (minh họa) với bách phân vị thứ 95 là 51 phút (minh họa).

Đội hạ ba quy tắc ồn ào xuống hàng đợi phiếu, gộp các bản trùng lặp để một lỗi tạo ra một cuộc gọi, thay cảnh báo số đếm lỗi thô trên thanh toán bằng một cảnh báo tốc độ đốt ngân sách lỗi (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi), và thêm một cảnh báo triệu chứng cho email xác nhận đơn hàng, một khoảng trống đứng sau hai sự cố do khách hàng báo. Mỗi thay đổi là một hạng mục tồn đọng có người sở hữu. Bốn tuần sau số cuộc gọi giảm xuống 96 (minh họa) và tỷ lệ hành động được tăng lên 64 phần trăm (minh họa), trong khi tỷ lệ phát hiện tăng lên 71 phần trăm (minh họa) và thời gian phát hiện trung vị giữ ở 14 phút. Sự yên tĩnh có vẻ xứng đáng.

Rủi ro lợi dụng xuất hiện ở tháng thứ ba. Một quản lý mới đặt một mục tiêu không chính thức dưới 60 cuộc gọi mỗi bốn tuần, và một luân phiên đạt nó bằng cách kéo dài độ trễ của cảnh báo lỗi thanh toán. Tỷ lệ phát hiện của nó giảm xuống 55 phần trăm (minh họa) và bách phân vị thứ 95 của thời gian phát hiện leo lên 80 phút (minh họa). Vì các rào chắn nằm cạnh khối lượng, buổi rà soát bắt được điều đó. Đội rút mục tiêu khối lượng, khôi phục cảnh báo, và ghi trường hợp vào sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy rà soát cảnh báo theo nhịp đều đặn như một sản phẩm do người trực ca sử dụng, và cho nghỉ hưu hoặc tinh chỉnh những cảnh báo ồn ào cùng các bên liên quan. Điều cần lưu ý là một mục tiêu cắt giảm khối lượng cảnh báo có thể gỡ bỏ cảnh báo hữu ích.

### AI

AI có thể gom nhóm, tóm tắt và xếp hạng cảnh báo, và có thể gợi ý nguyên nhân. Hãy ghép việc giảm nhiễu với tỷ lệ bỏ sót các sự cố thật, và theo dõi tỷ lệ các nhóm AI gom mà một người đã tách hoặc gộp lại. Điều cần lưu ý là việc chặn bởi một mô hình có thể giấu một cảnh báo hiếm nhưng nghiêm trọng.

### Tự động hóa

Hãy đếm cảnh báo tự động theo quy tắc và theo kết quả, và đo tự động hóa cảnh báo theo các lỗi chặn. Điều cần lưu ý là cảnh báo tự giải quyết có thể trông như hệ thống khỏe mạnh khi quy tắc chỉ đang chập chờn.

### Phân tích

Hãy báo cáo tỷ lệ cảnh báo hành động được và độ phủ phát hiện, kèm các sự cố mà người dùng nhận ra đầu tiên. Quyết định được cung cấp thông tin là sửa hay gỡ cảnh báo nào. Điều cần lưu ý là độ phủ đo so với các sự cố đã biết bỏ qua các kiểu thất bại chưa ai thấy.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Với một nhúm kỹ sư đều trực ca, ưu tiên là một chính sách gọi người ngắn và vài cảnh báo triệu chứng trên các đường kiếm tiền. Một cái nhìn mười phút vào sáng thứ Hai về điều đã đánh thức mọi người là đủ. Rủi ro chính là không có cảnh báo nào, nên khách hàng chính là giám sát; hãy đếm mức độ thường xuyên một khách hàng nói với bạn trước.

**Doanh nghiệp nhỏ.** Các tổ chức nhỏ thường dựa vào giám sát của nhà cung cấp. Các thước đo hữu ích là độ phủ phát hiện cho vài hệ thống làm doanh nghiệp ngừng hoạt động và tỷ lệ sự cố do người dùng tìm thấy. Hãy yêu cầu nhà cung cấp cho dữ liệu cảnh báo mà hợp đồng của bạn cho quyền nhận.

**Doanh nghiệp lớn.** Các tổ chức lớn có nhiều công cụ và luân phiên, và mỗi đội có thể định nghĩa "hành động được" khác nhau. Hãy chuẩn hóa định nghĩa và nhãn, rà soát ở cấp đội, và tổng hợp theo dịch vụ thay vì theo công cụ. Các nền tảng tương quan sự kiện giảm khối lượng ở quy mô lớn nhưng cần kiểm tra độ phủ riêng.

**Chính phủ và khu vực công.** Một số dịch vụ chạy giờ hành chính và số khác, như hệ thống khẩn cấp hoặc trợ cấp, chạy liên tục. Độ phủ phát hiện và các cảnh báo đã kiểm thử quan trọng nhất nơi thất bại mang hậu quả pháp lý hay an toàn, và bản ghi kiểm thử có thể hỗ trợ kiểm toán. Hãy báo cáo độ phủ và phát hiện cho cơ quan giám sát, không phải số đếm cảnh báo thô, vốn dễ bị đọc sai (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Các lý do để đầu tư là thực tế. Phát hiện tốt hơn rút ngắn thời gian người dùng bị ảnh hưởng. Ít cuộc gọi vô nghĩa hơn bảo vệ giấc ngủ, giảm bỏ cuộc khỏi luân phiên, và giữ sự chú ý cho những cảnh báo quan trọng. Cái giá của chất lượng cảnh báo kém khó thấy vì nó trải ra trên giấc ngủ bị gián đoạn, các phản ứng chậm, và việc các kỹ sư giàu kinh nghiệm ra đi.

Chi phí thu thập những chỉ số này nhỏ nếu các công cụ cảnh báo, gọi người và sự cố có thể ghép với nhau, và vừa phải nếu nhãn được thêm bằng tay. Các chi phí chính là thời gian rà soát hằng tuần, công việc tinh chỉnh và xóa, và các bài kiểm thử phát hiện thỉnh thoảng. Tỉa các quy tắc không dùng cũng cắt chi phí giấy phép và lưu trữ giám sát, và tổng chi phí sở hữu nên gồm thời gian của con người.

Lợi tức xuất hiện trong vài tháng dưới dạng các luân phiên yên tĩnh hơn, tỷ lệ phát hiện nhờ giám sát tăng, và thời gian phát hiện không tệ đi. Để biến điều này thành tiền, hãy so sánh chi phí của giờ sự cố và tỷ lệ nghỉ việc của luân phiên với chi phí của buổi rà soát, dùng số liệu của chính bạn. Đừng dùng trung bình ngành trừ khi bạn dẫn được một nguồn đã kiểm chứng.

## Phản mẫu và cạm bẫy

- **Đặt mục tiêu cho khối lượng cảnh báo.** Một mục tiêu về số đếm thưởng cho sự im lặng và mời gọi việc giấu cảnh báo. Hãy đặt mục tiêu cho tỷ lệ cảnh báo hành động được và tỷ lệ phát hiện, và dùng khối lượng làm con số bối cảnh với một giới hạn bền vững do đội chọn.
- **Cảnh báo về mọi nguyên nhân.** Hàng chục cuộc gọi cấp nguyên nhân tạo ra nhiễu mà vẫn bỏ sót triệu chứng không ai nghĩ đến. Hãy cảnh báo về các triệu chứng hướng người dùng thay vào đó.
- **Thêm một cảnh báo sau mỗi sự cố và không bao giờ gỡ cái nào.** Hãy ghép mỗi cảnh báo mới với một lần rà soát những cảnh báo mà nó làm thừa.
- **Đếm cảnh báo mà không gắn nhãn.** Một số đếm không có phán đoán về tính hữu ích không phân biệt được một luân phiên ồn ào với một luân phiên bận. Hãy gắn nhãn một mẫu mỗi tuần, dù chỉ có vài phút.
- **Coi độ phủ là số lượng cảnh báo.** Một dịch vụ có năm mươi cảnh báo nguyên nhân và không có cảnh báo triệu chứng nào được phủ kém. Hãy định nghĩa độ phủ là phát hiện triệu chứng đã kiểm thử.
- **Xếp hạng người theo số cuộc gọi đã xử lý hay xác nhận.** Nó phạt các thành viên luân phiên nhận ca khó và khuyến khích tránh máy nhắn tin. Hãy báo cáo theo luân phiên và dịch vụ, và tìm các bản sửa thiết kế.
- **Không bao giờ kiểm thử đường cảnh báo.** Một cảnh báo chưa được thấy là hoạt động là một giả định. Hãy đưa kiểm thử cảnh báo vào ngày diễn tập, và giám sát chính đường ống.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Chính sách gọi người và quyền sở hữu quy tắc | Cảnh báo thêm tùy tiện; không ai biết vì sao nhiều cái tồn tại | Một số đội có chính sách và người sở hữu cho quy tắc của họ | Một chính sách gọi người ngắn; mỗi quy tắc gọi người có người sở hữu và sổ tay vận hành | Độ cập nhật quy tắc được theo dõi và rà soát; quy tắc không dùng được gỡ theo lịch | Chính sách và quyền sở hữu được điều chỉnh giữa các đội và nhà cung cấp khi dịch vụ đổi |
| Đo chất lượng cảnh báo | Phàn nàn về nhiễu; không có số đếm | Khối lượng được một số đội đếm; không gắn nhãn | Rà soát hằng tuần với nhãn chung; tỷ lệ cảnh báo hành động được và dương tính giả được báo cáo theo dịch vụ | Tỷ lệ được theo dõi xu hướng và ghép với các thước đo phát hiện; công việc cải tiến được tài trợ | Chất lượng được liên kết giữa các dịch vụ và nhà cung cấp; định nghĩa được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Phát hiện và độ phủ | Khách hàng và đồng nghiệp báo hầu hết vấn đề | Cảnh báo triệu chứng trên một vài dịch vụ chính | Độ phủ phát hiện được theo dõi bằng cảnh báo đã kiểm thử; tín hiệu đầu tiên được ghi cho mọi sự cố | Thời gian phát hiện và tỷ lệ phát hiện nhờ giám sát được rà soát với một rào chắn; khoảng trống trở thành công việc có kế hoạch | Phát hiện được kiểm thử thường xuyên qua các phụ thuộc và nhà cung cấp, gồm cả đường ống cảnh báo |
| Dùng trong cải tiến | Sửa cảnh báo theo sau đêm tệ nhất | Bản sửa theo sau sự cố | Mỗi buổi rà soát tạo ra ít nhất một thay đổi | Thay đổi được theo dõi đến tác dụng của chúng lên khối lượng, tính hành động được và phát hiện | Tải luân phiên, phát hiện và ngân sách lỗi được rà soát cùng nhau để lái đầu tư |

## Danh sách kiểm tra

- [ ] Chúng ta có một chính sách gọi người bằng văn bản vài câu nêu điều gì đáng một cuộc gọi.
- [ ] Mỗi quy tắc gọi người có người sở hữu, mục đích và liên kết sổ tay vận hành.
- [ ] Mỗi luân phiên rà soát điều đã kêu ít nhất hằng tuần và gắn nhãn từng cảnh báo.
- [ ] Mỗi buổi rà soát tạo ra ít nhất một thay đổi được ghi lại cho một quy tắc.
- [ ] Chúng ta báo cáo khối lượng cảnh báo, tỷ lệ cảnh báo hành động được và tỷ lệ dương tính giả theo luân phiên và dịch vụ, không bao giờ theo người.
- [ ] Mỗi sự cố ghi lại nó được phát hiện đầu tiên ra sao, kèm lựa chọn không rõ.
- [ ] Chúng ta ước lượng thời điểm bắt đầu tác động từ lịch sử chỉ báo mức dịch vụ và báo cáo trung vị và bách phân vị thứ 95 của thời gian phát hiện.
- [ ] Mỗi dịch vụ trong phạm vi có một cảnh báo triệu chứng đã được kiểm thử trong 12 tháng qua.
- [ ] Một kiểm tra nhịp tim gọi chúng ta nếu đường ống cảnh báo ngừng.
- [ ] Chúng ta đã thống nhất một tải ngoài giờ bền vững cho mỗi luân phiên và rà soát nó.
- [ ] Không có mục tiêu nào được đặt cho riêng khối lượng cảnh báo.

## Lời nhắc AI

**Mục đích: Soạn chính sách gọi người cho một dịch vụ từ các chỉ báo và hậu quả của nó.**

```text
Help me draft a paging policy for the service [service name].
Context: users are [user group]; the user-facing symptoms we care about are [symptoms, for example errors, latency, unavailability]; the consequences of a missed failure are [consequences]; the on-call rotation is [rotation description, for example hours and team size].
Write a short policy (under 200 words) that says what earns a page, what goes to a ticket queue, and what stays on a dashboard.
Do not invent thresholds or benchmark values; leave [threshold] placeholders for us to set from our own data.
List the questions you would ask us before finalizing it, and list your assumptions.
```

**Mục đích: Phân tích một bản xuất rà soát cảnh báo để tìm mẫu hình nhiễu.**

```text
I will paste a table of alerts from [period] for the rotation [rotation name] with columns: [column names, for example rule, time, label, action taken, service].
Calculate the actionable alert rate, the false positive rate, the out-of-hours share, and the share of alerts from the five noisiest rules, using only the data I paste.
Suggest which rules to tune, merge, demote, or delete, with a reason for each, and mark each suggestion as a hypothesis to check.
Report by rule, service, and rotation, never by person. Do not invent benchmark values.
List your assumptions and any rows you excluded.
```

**Mục đích: Kiểm tra một tập chỉ số cảnh báo về rủi ro bị lợi dụng trước khi công bố.**

```text
Here are the alert quality metrics we plan to publish: [list of metrics with definitions and formulas].
For each metric, describe two ways it could be gamed or misread in our context of [organization type and service], and suggest a paired guardrail from the same list or a practice we can adopt.
Point out any metric that is shown without its guardrail.
Do not invent sources or benchmark values.
List your assumptions about how our tools record alerts and incidents.
```

**Mục đích: Lập kế hoạch kiểm thử phát hiện cho các dịch vụ có độ phủ yếu.**

```text
Our services are [list of services], and the symptom alerts we believe exist are [list of alerts].
Propose a safe test plan for the next [game day or rehearsal] that checks, for each service, that a deliberate symptom triggers the alert, reaches [rotation], and links to a runbook.
Say who should be told beforehand and how to record results for detection coverage.
Do not invent tool features; ask me how [monitoring tool] works.
List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một thước đo liên quan và rào chắn nên đứng cạnh một chỉ số chất lượng cảnh báo.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ mẫu, bảng lợi dụng và các tham chiếu chéo nhất quán.

## Điểm chính cần nhớ

- Hãy đánh giá cảnh báo bằng việc chúng có dẫn đến hành động không, và đánh giá giám sát bằng việc nó bắt được bao nhiêu rắc rối thật; độ chính xác và độ phủ bảo vệ lẫn nhau.
- Hãy gọi người về các triệu chứng người dùng cảm nhận, gắn ngưỡng với mục tiêu mức dịch vụ nơi có, và giữ nguyên nhân cho chẩn đoán.
- Hãy rà soát điều đã kêu mỗi tuần, gắn nhãn nó, và thực hiện ít nhất một thay đổi mỗi lần.
- Đừng bao giờ đặt mục tiêu cho riêng khối lượng cảnh báo; hãy đọc nó cạnh tỷ lệ cảnh báo hành động được, tỷ lệ phát hiện nhờ giám sát và thời gian phát hiện.
- Hãy kiểm thử các cảnh báo và đường ống cảnh báo, vì một cảnh báo chưa kiểm thử là một giả định.
- Hãy báo cáo theo luân phiên và dịch vụ, không bao giờ theo người, và coi tải trực ca bền vững là một mục tiêu thiết kế.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
