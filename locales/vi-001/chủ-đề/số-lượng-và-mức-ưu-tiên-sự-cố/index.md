# Số lượng và mức ưu tiên sự cố

**Hãy đếm sự cố so với mức sử dụng đã sinh ra chúng, đọc mức ưu tiên như một cơ cấu chứ không phải một điểm số, và theo dõi các lần lặp lại, vì hình dạng của nhu cầu sự cố cho bạn biết nên đầu tư ở đâu từ lâu trước khi bất kỳ thời gian giải quyết đơn lẻ nào làm được.**

## Tổng quan và động lực

Một sự cố, theo cách nói của [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, là một gián đoạn không có kế hoạch đối với một dịch vụ hoặc sự suy giảm chất lượng của nó. [Quản lý sự cố](https://en.wikipedia.org/wiki/Incident_management) là thực hành khôi phục hoạt động dịch vụ bình thường nhanh nhất có thể trên thực tế và hạn chế tác hại đối với doanh nghiệp. Mỗi sự cố cũng là một tín hiệu: có điều gì đó trong dịch vụ, các thay đổi của nó, người dùng của nó hoặc giám sát của nó đã không hoạt động như mong đợi. Số lượng và đặc điểm của sự cố vì vậy là một trong những thước đo nhu cầu giàu thông tin nhất mà một đội vận hành có.

Khối lượng riêng nó là một chỉ dẫn kém. Sự cố tăng có thể có nghĩa là dịch vụ tệ đi, hoặc có nhiều người dùng nó hơn, hoặc giám sát được cải thiện và giờ thấy những lỗi trước đây không được báo cáo. Sự cố giảm có thể có nghĩa là công việc về độ tin cậy đã có kết quả, hoặc người dùng thôi không buồn báo cáo. Chủ đề này nói về việc đọc khối lượng với đủ bối cảnh để phân biệt các câu chuyện đó: chuẩn hóa theo mức sử dụng, chia theo danh mục và dịch vụ, và theo dõi cơ cấu các mức ưu tiên và tỷ lệ lặp lại.

Mức ưu tiên là nửa thứ hai của chủ đề. Thực hành ITIL thường suy ra mức ưu tiên từ hai đầu vào: tác động (bao nhiêu phần của doanh nghiệp bị ảnh hưởng) và độ khẩn (doanh nghiệp cần bản sửa nhanh đến đâu). Cặp đôi được ánh xạ tới một mức ưu tiên quy định phản hồi kỳ vọng. Các đội linh hoạt có một đối ứng gần trong cách họ phân loại ưu tiên một tồn đọng: nhãn mức nghiêm trọng và độ khẩn trên các lỗi, và một "hạng dịch vụ" trên bảng dòng chảy quyết định điều gì nhảy hàng đợi. Từ ngữ khác nhau; câu hỏi giống nhau: điều gì phải được xử lý trước, và vì sao.

Góc nhìn ITIL coi sự cố là các bản ghi do một bàn dịch vụ và các nhóm giải quyết sở hữu, với danh mục, mức ưu tiên và mục tiêu mức dịch vụ. Góc nhìn linh hoạt coi công việc ngoài kế hoạch là một gián đoạn đối với dòng chảy cạnh tranh với công việc có kế hoạch (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch). Cả hai góc nhìn được lợi từ cùng các thước đo, nếu các thước đo mô tả hệ thống chứ không phải con người bên trong nó. [Bàn dịch vụ](https://en.wikipedia.org/wiki/Help_desk_software) là nơi hầu hết bản ghi bắt đầu, và các chỉ số riêng của nó được trình bày riêng (xem chủ đề 3.1, Chỉ số bàn dịch vụ). Sự cố được phản hồi và giải quyết nhanh đến đâu được trình bày trong chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố. Sự cố lớn có các thước đo riêng (xem chủ đề 3.4, Chỉ số sự cố lớn).

Một số thuật ngữ lặp lại dưới đây. Một **bách phân vị** là giá trị mà dưới đó một tỷ lệ quan sát nêu rõ rơi vào, nên bách phân vị thứ 85 là giá trị mà 85 phần trăm quan sát không vượt quá. Một **thỏa thuận mức dịch vụ (SLA)** là một cam kết bằng văn bản giữa nhà cung cấp và khách hàng. Một **mục cấu hình (CI)** là một thành phần cần được quản lý để cung cấp một dịch vụ. Một **quá trình Poisson** mô tả các sự kiện đến độc lập với nhau ở một tốc độ trung bình nào đó, là một mô hình đầu tiên hữu ích cho lượt đến của sự cố (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

Lời cảnh báo từ chủ đề 1.2 (Định luật Goodhart và tâm lý học của chỉ số) áp dụng ở đây nhiều hơn ở hầu hết nơi khác. Số đếm sự cố và mức ưu tiên do con người nhập, thường dưới áp lực, và con số gắn với một bản ghi có thể bị đổi bằng cách đổi cách viết bản ghi. Mọi chỉ số dưới đây có một vectơ lợi dụng, và các rào chắn là một phần của định nghĩa.

## Nguyên tắc chính

- **Chuẩn hóa trước khi so sánh.** Một số đếm ít có nghĩa nếu không có mức sử dụng, cơ sở người dùng hay khối lượng giao dịch mà nó đến từ. Hãy so sánh tỷ lệ giữa các kỳ và dịch vụ, và cho thấy số đếm thô bên cạnh.
- **Đọc cơ cấu, không phải một con số đơn lẻ.** Phân phối mức ưu tiên, phân phối danh mục và tỷ lệ lặp lại cùng nhau nói nhiều hơn bất kỳ tổng nào.
- **Mức ưu tiên là một quy tắc, không phải tâm trạng.** Hãy suy ra nó từ tác động và độ khẩn bằng một ma trận bằng văn bản, và đo mức độ thường xuyên nó bị đổi sau sự việc.
- **Tách sự cố khỏi yêu cầu.** Một yêu cầu cho thứ bình thường không phải một lỗi. Đếm cả hai cùng nhau thổi phồng khối lượng sự cố và che giấu bàn dịch vụ dành thời gian vào đâu (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ).
- **Các lần lặp lại là tín hiệu giá trị nhất.** Một sự cố quay lại chỉ vào một vấn đề chưa được giải quyết (xem chủ đề 4.1, Chỉ số quản lý vấn đề).
- **Đo dịch vụ và đội, không bao giờ nhân viên.** Số đếm theo người mời gọi xếp hạng, và xếp hạng làm hỏng dữ liệu (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).
- **Chờ đợi khối lượng dịch chuyển vì những lý do không phải chất lượng.** Các bản phát hành, mùa vụ, chiến dịch và thay đổi trong kênh báo cáo đều làm lệch số đếm. Hãy chú thích biểu đồ.

## Định nghĩa chỉ số

Bảng liệt kê các chỉ số trong chủ đề này. Các đồng hồ và ranh giới được nêu ở cột công thức. "Đóng" và "mở" chỉ các dấu thời gian trong bản ghi sự cố; thời điểm mở là khi bản ghi được tạo hoặc khi hệ thống giám sát tạo nó, và thời điểm đóng là khi sự cố được xác nhận giải quyết và đóng.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Khối lượng sự cố theo dịch vụ | Số sự cố được mở cho một dịch vụ trong một kỳ | số sự cố có thời điểm mở nằm trong kỳ, quy cho dịch vụ bị ảnh hưởng; yêu cầu dịch vụ, bản trùng lặp đã gộp vào bản ghi cha và bản ghi bị hủy vì nêu nhầm bị loại trừ | số đếm | Bản ghi sự cố của công cụ ITSM | Quản lý sự cố | Lỗi trên môi trường thật hoặc hạng mục công việc ngoài kế hoạch mỗi đội | Hằng tuần, rà soát hằng tháng |
| Tỷ lệ sự cố chuẩn hóa | Sự cố so với mức sử dụng của dịch vụ | số sự cố mở trong kỳ / thước đo sử dụng cho cùng kỳ và phạm vi (người dùng hoạt động, phiên hoặc giao dịch, được chọn và ghi lại theo từng dịch vụ) x 1.000; thước đo sử dụng phải đến từ một nguồn khác công cụ sự cố | sự cố mỗi 1.000 đơn vị sử dụng | Công cụ ITSM cộng dữ liệu sử dụng từ phân tích hoặc giám sát | Quản lý sự cố; quản lý mức dịch vụ | Mật độ lỗi mỗi bản phát hành hoặc mỗi người dùng | Hằng tháng |
| Cơ cấu mức ưu tiên | Tỷ lệ sự cố được mở ở mỗi mức ưu tiên | số sự cố ở mức ưu tiên được ghi lúc mở / tất cả sự cố mở trong kỳ, được cho thấy cho từng mức; các sự cố bị phân loại lại được tính ở mức ưu tiên lúc mở và cho thấy lại ở mức ưu tiên lúc đóng | phần trăm theo mức | Công cụ ITSM, gồm lịch sử các thay đổi mức ưu tiên | Quản lý sự cố | Phân phối mức nghiêm trọng của lỗi; cơ cấu hạng dịch vụ | Hằng tháng |
| Tỷ lệ phân loại lại mức ưu tiên | Tỷ lệ sự cố có mức ưu tiên thay đổi giữa lúc mở và lúc đóng | số sự cố đóng trong kỳ có mức ưu tiên lúc đóng khác mức lúc mở / số sự cố đóng trong kỳ | phần trăm | Dấu vết kiểm toán của công cụ ITSM | Quản lý sự cố | Tỷ lệ phân loại lại trên tồn đọng lỗi | Hằng tháng |
| Mức tập trung danh mục | Tỷ lệ khối lượng sự cố nằm trong các danh mục lớn nhất | số sự cố trong năm danh mục hàng đầu theo số đếm / tất cả sự cố đã phân loại trong kỳ; các sự cố chưa phân loại được báo cáo riêng như một tỷ lệ riêng | phần trăm | Các trường danh mục và dịch vụ của công cụ ITSM | Quản lý sự cố; quản lý vấn đề | Cụm lỗi theo thành phần hoặc epic | Hằng tháng |
| Tỷ lệ sự cố lặp lại | Tỷ lệ sự cố tái diễn cho cùng dịch vụ, mục cấu hình và danh mục trong một cửa sổ nêu rõ | số sự cố trong kỳ có một sự cố đã đóng trước đó cho cùng dịch vụ, CI và danh mục trong cửa sổ trước (ví dụ 30 ngày, đặt một lần và ghi lại) / số sự cố mở trong kỳ; một bản ghi được mở lại được tính là mở lại, không phải lặp lại | phần trăm | Công cụ ITSM và các liên kết CMDB | Quản lý sự cố; quản lý vấn đề | Tỷ lệ hồi quy hoặc lỗi lọt ra ngoài | Hằng tháng |
| Tỷ lệ mở lại | Tỷ lệ sự cố đã đóng bị mở lại | số sự cố đóng trong kỳ sau đó bị mở lại trong một cửa sổ nêu rõ (ví dụ 7 ngày) / số sự cố đóng trong kỳ | phần trăm | Lịch sử trạng thái của công cụ ITSM | Quản lý sự cố | Lỗi được mở lại; làm lại | Hằng tháng |
| Tỷ lệ phát hiện bởi giám sát | Tỷ lệ sự cố được giám sát nêu lần đầu trước khi người dùng báo cáo | số sự cố có sự kiện đầu tiên là một cảnh báo tự động / tất cả sự cố mở trong kỳ; các sự cố do một người mở từ một cảnh báo được tính theo thời điểm cảnh báo | phần trăm | Công cụ ITSM, tích hợp giám sát | Giám sát và quản lý sự kiện; quản lý sự cố | Lỗi do cảnh báo so với do khách hàng báo | Hằng tháng |

Hai lưu ý về các định nghĩa. Thứ nhất là "mức ưu tiên" trong bảng này là mức ưu tiên mà bản ghi mang, nên đến từ ma trận tác động và độ khẩn chứ không phải từ thứ tự mà mọi người muốn công việc được làm. Thứ hai là khối lượng được báo cáo cho một kỳ là số đếm lượt mở, không phải số sự cố đang mở vào một ngày nhất định. Số đang mở tại một thời điểm là thước đo tồn đọng và thuộc về việc tính tuổi (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

## Khuyến nghị

### Đếm cẩn thận

**1. Viết ra một sự cố là gì và không là gì.** Nhiều công cụ giữ sự cố, yêu cầu, cảnh báo và vấn đề trong một bảng. Hãy quyết định loại bản ghi nào được tính, ghi tài liệu bộ lọc, và áp dụng nó mỗi lần. Một thay đổi trong bộ lọc đổi xu hướng, nên hãy ghi lại các thay đổi kèm ngày và lý do (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

**2. Loại trùng lặp trước khi báo cáo.** Khi một lỗi sinh ra năm mươi phiếu, sự cố cha là sự kiện và các phiếu con là thước đo phạm vi ảnh hưởng của nó. Hãy báo cáo cả hai con số: sự cố cha cho số lỗi đã xảy ra, và các bản ghi được liên kết cho số người đã cảm nhận chúng. Trộn hai cái khiến một sự cố ngừng hoạt động lớn trông như một tháng công việc thường lệ.

**3. Quy sự cố cho dịch vụ cũng như cho đội.** Dịch vụ là thứ doanh nghiệp mua và hiểu. Hãy dùng danh mục dịch vụ (cách viết riêng của ITIL là "service catalogue") để định nghĩa danh sách, và rà soát việc ánh xạ từ các CI khi dịch vụ thay đổi. Một sự cố không có dịch vụ là một vấn đề chất lượng dữ liệu cần sửa, và tỷ lệ các bản ghi như vậy đáng được báo cáo.

### Chuẩn hóa và diễn giải khối lượng

**4. Chuẩn hóa theo một thước đo sử dụng từ nguồn khác.** Chia cho người dùng hoạt động, phiên hoặc giao dịch, lấy từ phân tích hoặc giám sát chứ không phải từ công cụ sự cố. Một dịch vụ tăng gấp đôi người dùng và sự cố của nó không tệ đi; một dịch vụ có sự cố tăng gấp đôi trong khi mức sử dụng phẳng thì có. Hãy cho thấy số đếm thô bên cạnh tỷ lệ để không ai tin rằng mẫu số đang giấu điều gì.

**5. Dùng biểu đồ kiểm soát, không phải mũi tên xu hướng.** Số đếm sự cố biến thiên từ tuần này sang tuần khác ngay cả khi không có gì thay đổi. Một [biểu đồ kiểm soát](https://en.wikipedia.org/wiki/Control_chart) cho thấy khoảng biến thiên thông thường, để đội phản ứng với một tín hiệu và để yên nhiễu. Số đếm hằng tuần dịch chuyển trong giới hạn không phải tin tức; một chuỗi kéo dài nằm một bên của giá trị trung bình thì là. Hãy điều chỉnh theo [tính mùa vụ](https://en.wikipedia.org/wiki/Seasonality) như cuối quý, kỳ nghỉ và chu kỳ phát hành bằng cách so sánh các kỳ giống nhau.

**6. Chú thích biểu đồ bằng các sự kiện.** Đánh dấu các bản phát hành, di chuyển, chiến dịch, sự cố ngừng hoạt động của phụ thuộc và thay đổi kênh báo cáo. Một biểu mẫu tự phục vụ mới hoặc một nút "báo cáo vấn đề" dễ thấy hơn có thể làm tăng khối lượng trong khi dịch vụ vẫn như cũ. Hầu hết các tranh luận về khối lượng kết thúc nhanh khi biểu đồ cho thấy điều đã xảy ra trong tuần đó.

### Quản lý mức ưu tiên bằng quy tắc

**7. Suy ra mức ưu tiên từ tác động và độ khẩn bằng một ma trận được công bố.** Định nghĩa tác động theo người dùng và chức năng kinh doanh bị ảnh hưởng, và độ khẩn theo mức tác hại tăng nhanh đến đâu. Công bố ma trận ở trang nơi nhân viên chọn giá trị, với hai hoặc ba ví dụ minh họa cho mỗi ô. Tránh các trường mức ưu tiên tự do; chúng biến thành thương lượng, và số sự cố "ưu tiên 1" trở thành thước đo sức thuyết phục.

**8. Báo cáo cơ cấu và tỷ lệ phân loại lại cùng nhau.** Một cơ cấu lành mạnh có số ít sự cố mức ưu tiên cao nhất và một nền rộng các sự cố thấp hơn. Nếu mức cao nhất tăng, hãy hỏi tác hại có tăng không hay khách hàng đã học được rằng "nghiêm trọng" thì được chú ý. Tỷ lệ phân loại lại cho thấy ma trận khớp tốt đến đâu: thay đổi thường xuyên lúc đóng nghĩa là quy tắc không rõ hoặc đánh giá đầu tiên bị vội. Hãy rà soát một mẫu các bản ghi bị phân loại lại mỗi tháng trong nhóm sở hữu ma trận.

**9. Giữ mức ưu tiên và hạng dịch vụ linh hoạt cho khớp nhau.** Nơi các đội phân phối nhận công việc do sự cố thúc đẩy, hãy dùng cùng từ và cùng ma trận, hoặc công bố một ánh xạ rõ ràng. Một đội gọi một lỗi là "cao" trong khi vận hành gọi cùng lỗi đó là "trung bình" sẽ mất thời gian vào việc phiên dịch. Hãy dành sẵn một khoản tường minh cho công việc khẩn cấp để gián đoạn hiển thị trong các thước đo dòng chảy (xem chủ đề 2.1, Các thước đo dòng chảy).

### Tìm các lần lặp lại và mẫu hình

**10. Theo dõi các lần lặp lại và mở lại như hai tín hiệu riêng.** Một lần mở lại nghĩa là bản sửa đầu không giữ vững; một lần lặp lại nghĩa là cùng loại lỗi quay lại sau một bản sửa đúng đắn. Cái đầu chỉ vào chất lượng giải quyết và cái thứ hai chỉ vào một nguyên nhân chưa được giải quyết. Hãy liên kết các cụm lặp lại với hồ sơ vấn đề, và ngừng tính một sự cố là đã sửa khi nó có khả năng quay lại (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

**11. Dùng [nguyên lý Pareto](https://en.wikipedia.org/wiki/Pareto_principle) để chọn nơi cần xem.** Sắp xếp danh mục và dịch vụ theo số sự cố và xem có ít cái đến mức nào chiếm phần lớn khối lượng. Hãy điều tra vài cái hàng đầu trước khi dựng các báo cáo mới cho phần còn lại. Hình dạng này là lời nhắc cho [phân tích nguyên nhân gốc](https://en.wikipedia.org/wiki/Root_cause_analysis), không phải một kết luận, vì một danh mục có số đếm cao có thể đơn giản là cái dễ phân loại.

**12. Đưa phát hiện trở lại cho phân phối và bàn dịch vụ.** Chia sẻ các góc nhìn danh mục và lặp lại với các đội xây dựng và thay đổi dịch vụ, trong một cuộc trò chuyện đều đặn thay vì một báo cáo. Ghép mỗi cụm tái diễn với một người sở hữu, một bước tiếp theo và một ngày, và đặt công việc lên cùng tồn đọng với các ưu tiên khác (xem chủ đề 2.6, Chỉ số tồn đọng và tinh chỉnh). Khối lượng giảm khi nguyên nhân được gỡ bỏ, và điều đó cần năng lực có kế hoạch.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Khối lượng sự cố theo dịch vụ | Ghi sự cố thành yêu cầu, gộp các phiếu không liên quan, làm nản người dùng báo cáo, hoặc đóng bản trùng lặp là "không tìm thấy lỗi" | Khối lượng liên hệ do người dùng báo và khối lượng yêu cầu bên cạnh khối lượng sự cố; mức hài lòng và bỏ cuộc từ bàn dịch vụ; mẫu các yêu cầu đọc như lỗi |
| Tỷ lệ sự cố chuẩn hóa | Chọn mẫu số cho số liệu tốt nhất, hoặc đổi định nghĩa sử dụng giữa các kỳ | Thước đo sử dụng cố định cho mỗi dịch vụ, ghi trong sổ đăng ký; số đếm thô cho thấy bên cạnh tỷ lệ |
| Cơ cấu mức ưu tiên | Hạ mức ưu tiên để trông bình lặng hoặc nâng chúng để được chú ý; gán mức ưu tiên thấp để tránh mục tiêu phản hồi | Tỷ lệ phân loại lại mức ưu tiên; rà soát mẫu hằng tháng so với ma trận tác động và độ khẩn; tác động do khách hàng báo cáo |
| Tỷ lệ phân loại lại mức ưu tiên | Không đổi mức ưu tiên khi lẽ ra phải đổi, để tỷ lệ trông ổn định; chỉ đổi lúc đóng cho khớp mục tiêu | Mẫu các bản ghi có tác động thay đổi trong lúc sự cố diễn ra; rà soát dòng thời gian sự cố |
| Mức tập trung danh mục | Dùng một danh mục gom hết, hoặc tách một danh mục lớn thành nhiều để giấu sự tập trung | Tỷ lệ bản ghi chưa phân loại và "khác"; rà soát định kỳ danh sách danh mục; kiểm tra danh mục so với ghi chú giải quyết |
| Tỷ lệ sự cố lặp lại | Mở sự cố mới với cách diễn đạt hoặc CI khác để tránh liên kết; đóng sớm để tránh mở lại | Rà soát các bản ghi gần trùng theo văn bản và dịch vụ; tỷ lệ mở lại; tỷ lệ liên kết với hồ sơ vấn đề |
| Tỷ lệ mở lại | Yêu cầu người dùng mở phiếu mới thay vì mở lại; đóng phiếu muộn để tránh mở lại | Số phiếu mới tham chiếu một phiếu đã đóng gần đây; khách hàng xác nhận giải quyết; phân phối thời gian đến khi đóng |
| Tỷ lệ phát hiện bởi giám sát | Tạo các cảnh báo nhiễu tự động mở sự cố, hoặc để mọi người gắn lại báo cáo của người dùng là cảnh báo | Các thước đo chất lượng cảnh báo như tỷ lệ cảnh báo có thể hành động (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo); kiểm toán nguồn sự cố |

Một kết quả đọc lành mạnh thì nhàm chán và giải thích được. Các tỷ lệ chuẩn hóa ổn định hoặc đang giảm với các dịch vụ ổn định và tăng khi mức sử dụng hay thay đổi tăng vì một lý do mà biểu đồ cho thấy. Cơ cấu mức ưu tiên ổn định, phân loại lại thấp, và một tập nhỏ danh mục nhận sự chú ý có chủ ý. Các lần lặp lại và mở lại giảm sau công việc vấn đề có kế hoạch, và một dịch chuyển trong bất kỳ chỉ số nào có lời giải thích mà ai đó đưa ra được mà không cần bảo vệ con số.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Số đếm sự cố thô | Đơn giản, dễ giải thích, luôn có sẵn | Trộn mức sử dụng, chất lượng và hành vi báo cáo vào một con số |
| Tỷ lệ so với mức sử dụng | Cho phép so sánh công bằng giữa các kỳ và dịch vụ | Cần nguồn sử dụng đáng tin; mẫu số có thể bị tranh cãi |
| Ma trận tác động và độ khẩn cố định | Mức ưu tiên nhất quán giữa các đội; kiểm toán được | Có thể cảm giác cứng nhắc; các trường hợp biên cần phán đoán và một đường ghi đè |
| Mức ưu tiên tự do | Nhanh và linh hoạt cho nhân viên có kinh nghiệm | Không nhất quán, dễ bị áp lực, khó so sánh theo thời gian |
| Cây danh mục chi tiết | Cho thấy nhu cầu đến từ đâu | Khó dùng dưới áp lực; mọi người chọn cái khớp đầu tiên hoặc "khác" |
| Danh sách danh mục ngắn kèm thẻ | Nhanh áp dụng và nhất quán | Ít chi tiết hơn; có thể giấu các mẫu hình cần phân tích văn bản |
| Tỷ lệ lặp lại theo CI và danh mục | Chỉ vào các nguyên nhân chưa được giải quyết | Phụ thuộc vào dữ liệu CI tốt; cả liên kết sai lẫn bỏ sót đều xảy ra |

Hãy chấp nhận rằng không thước đo đơn lẻ nào đúng. Dùng số đếm thô để lập kế hoạch năng lực, tỷ lệ cho sức khỏe, cơ cấu mức ưu tiên cho rủi ro, và các lần lặp lại cho cải tiến, và cho thấy mỗi cái đúng như bản chất của nó. Giữ danh sách danh mục đủ ngắn để mọi người dùng, và chỉ cải thiện cây khi một quyết định cần chi tiết mịn hơn.

## Câu hỏi để thảo luận với đội nhóm

**1. Điều gì được tính là một sự cố ở đây, và mọi người có áp dụng quy tắc giống nhau không?**
Lấy mười bản ghi gần đây và yêu cầu mỗi người gắn nhãn chúng là sự cố, yêu cầu hay thứ khác. So sánh các câu trả lời và thảo luận những bất đồng. Người điều phối nên tìm các thói quen như coi mọi phiếu từ một người cấp cao là sự cố, rồi thống nhất một quy tắc bằng văn bản kèm ví dụ. Ghi lại ngày để các xu hướng sau này được đọc đúng.

**2. Khi khối lượng sự cố tăng quý trước, chúng ta biết gì về mức sử dụng và thay đổi lúc đó?**
Đặt biểu đồ cạnh một dòng thời gian của các bản phát hành, chiến dịch và số liệu sử dụng. Hỏi lần tăng nào được giải thích và lần nào không. Cuộc thảo luận thường cho thấy mẫu số hiếm khi có mặt trên trang. Thống nhất thước đo sử dụng nào mỗi dịch vụ sẽ mang từ nay.

**3. Mức ưu tiên được quyết định ra sao, và lần gần nhất nó làm chúng ta bất ngờ là khi nào?**
Đi qua ma trận tác động và độ khẩn với một ví dụ gần đây cho mỗi mức ưu tiên. Hỏi nhân viên đoán ở đâu và khách hàng hay người quản lý gây áp lực ở đâu. So sánh mức ưu tiên lúc mở và lúc đóng của vài bản ghi. Quyết định một thay đổi cho ma trận hoặc các ví dụ của nó làm giảm tranh cãi.

**4. Ba danh mục nào chiếm phần lớn khối lượng sự cố của chúng ta, và ai đang làm việc để gỡ nguyên nhân?**
Liệt kê các danh mục hàng đầu và, với mỗi cái, người sở hữu nguyên nhân bên dưới. Nếu câu trả lời là "không ai", đó là một phát hiện. Hỏi danh mục đó có phải một cụm thật hay một thói quen gắn nhãn. Chọn một cụm để điều tra cùng đội phân phối trong quý này.

**5. Làm sao chúng ta phân biệt một lần lặp lại với một lần mở lại, và chúng ta làm gì với từng cái?**
Cho đội xem hai hoặc ba cặp bản ghi và hỏi cặp nào là lặp lại. Thảo luận một lần mở lại nói gì về chất lượng của bản sửa đầu, và một lần lặp lại nói gì về nguyên nhân. Người điều phối nên hướng nhóm tới việc liên kết các cụm lặp lại với hồ sơ vấn đề thay vì đóng chúng từng cái một. Thống nhất ai rà soát chúng và thường xuyên đến đâu.

**6. Chúng ta sẽ bị cám dỗ thay đổi điều gì nếu số sự cố của chúng ta được các lãnh đạo cấp cao rà soát hằng tuần?**
Yêu cầu nhóm tưởng tượng con số trên một bức tường. Những thói quen nào sẽ dịch chuyển: cách ghi, cách gộp phiếu, cách đặt mức ưu tiên? Gọi tên áp lực một cách công khai và không đổ lỗi. Thống nhất rào chắn nào sẽ cho thấy sự dịch chuyển, và ai xem nó.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối nhận đầu ra của chủ đề này như nhu cầu. Các góc nhìn danh mục và lặp lại cho thấy phần nào của sản phẩm gây nhiều rắc rối nhất, và cơ cấu mức ưu tiên cho thấy cần lên kế hoạch bao nhiêu công việc gián đoạn. Các đội nên coi công việc do sự cố thúc đẩy là một phần năng lực của mình, giữ nó hiển thị trong các thước đo dòng chảy, và dùng các cụm lặp lại để biện minh công việc độ tin cậy trên tồn đọng (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch). Đếm sự cố mỗi bản phát hành là một xu hướng hữu ích, dù nó không bao giờ nên trở thành thước đo đổ lỗi cho từng lập trình viên.

### Đội dịch vụ và vận hành

Các đội dịch vụ và vận hành tạo ra các bản ghi và cảm nhận áp lực quanh mức ưu tiên. Họ được lợi từ một ma trận rõ ràng, một danh sách danh mục ngắn và các cách nhanh để liên kết bản trùng. Họ nên kiểm tra dữ liệu trong công cụ của chính mình, như tỷ lệ bản ghi chưa phân loại và tỷ lệ phân loại lại, trước khi người khác làm. Các đội vận hành ở vị trí tốt để chạy buổi rà soát mẫu hằng tháng và đưa các cụm lặp lại vào quản lý vấn đề.

### Lãnh đạo và quản trị

Lãnh đạo muốn biết dịch vụ có đang tốt lên không và nên đầu tư ở đâu. Họ nên yêu cầu các tỷ lệ chuẩn hóa, cơ cấu mức ưu tiên và góc nhìn lặp lại, kèm chú thích, và chống lại một số liệu khối lượng đơn lẻ. Các mục tiêu "ít sự cố hơn" mời gọi việc bóp nghẹt, nên hãy đặt kỳ vọng vào kết quả như tác động đến khách hàng và giảm lặp lại. Quản trị nên sở hữu ma trận mức ưu tiên và phê duyệt các thay đổi của nó, kèm tác động lên đường xu hướng được ghi nhận.

### Khách hàng và người dùng

Khách hàng trải nghiệm sự cố như công việc bị gián đoạn, không phải như danh mục. Họ cần một cách dễ để báo một lỗi, một mức ưu tiên công bằng dựa trên tác động của họ, và những cập nhật trung thực. Nếu việc báo cáo bị làm nản hoặc mức ưu tiên cảm giác tùy tiện, khối lượng sẽ giảm và lòng tin giảm theo. Hãy chia sẻ các phát hiện chính bằng những thuật ngữ người dùng nhận ra, như các dịch vụ đã cải thiện và các vấn đề đã gỡ bỏ (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực hỗ trợ một hệ thống hồ sơ bệnh nhân, một hệ thống lên lịch và một công cụ nhắn tin cho nhân viên. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Báo cáo hằng tháng cho thấy 640 sự cố trong tháng cuối của quý, tăng từ 520 tháng trước. Lãnh đạo yêu cầu một kế hoạch phục hồi. Chủ sở hữu dịch vụ của hệ thống lên lịch, nơi số đếm tăng nhiều nhất, đề nghị xem dữ liệu trước khi đồng ý rằng dịch vụ đã tệ đi.

Ba sự kiện lộ ra. Thứ nhất, hệ thống lên lịch có thêm một nhóm phòng khám mới trong tháng đó, và người dùng hoạt động tăng khoảng 30 phần trăm (minh họa). Sau chuẩn hóa, tỷ lệ sự cố mỗi 1.000 phiên gần như phẳng. Thứ hai, 90 bản ghi tăng thêm được liên kết với một sự cố cha, một giao diện hỏng với hệ thống xét nghiệm, nên số lỗi phân biệt chỉ tăng một nhúm. Thứ ba, cơ cấu mức ưu tiên dịch chuyển: tỷ lệ mức ưu tiên cao nhất là 2 phần trăm tháng trước và 7 phần trăm bây giờ. Tỷ lệ phân loại lại cũng tăng gấp đôi, và một mẫu 20 bản ghi cho thấy khoảng một nửa các mức ưu tiên cao đã bị hạ khi đóng.

Đội đưa ra ba quyết định. Họ báo cáo sự cố cha và các bản ghi được liên kết riêng. Họ thêm số phiên hoạt động vào báo cáo làm mẫu số. Họ tổ chức một buổi nửa giờ cùng bàn dịch vụ và các trưởng lâm sàng để áp dụng ma trận tác động và độ khẩn cho các bản ghi được lấy mẫu, điều cho thấy "một phòng khám không thể đặt lịch cho bệnh nhân" đã được một số nhân viên coi là trung bình và những người khác coi là cao. Ma trận có thêm hai ví dụ lâm sàng cho mỗi ô.

Rủi ro lợi dụng mà họ bắt được thì âm thầm. Một người quản lý đã yêu cầu nhân viên tránh ưu tiên 1 cho hệ thống lên lịch vì mỗi cái kích hoạt một buổi rà soát, nên các bản ghi được mở ở mức ưu tiên thấp hơn rồi nâng sau, hoặc không nâng chút nào. Tỷ lệ phân loại lại và buổi rà soát mẫu làm lộ mẫu hình này. Đội thống nhất rằng các buổi rà soát là để học hỏi, công bố tuyên bố đó, và theo dõi tỷ lệ sự cố được mở ở mức thấp hơn mức ưu tiên lúc đóng như một rào chắn. Mức tập trung danh mục cũng cho thấy lỗi giao diện đứng đầu danh sách, nên một hồ sơ vấn đề được mở và một bản sửa được lên lịch cùng đội giao diện.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy rà soát nhu cầu sự cố ở các cuộc trao đổi cải tiến định kỳ cùng các đội sản phẩm sở hữu các dịch vụ bị ảnh hưởng, và chọn một nguyên nhân lặp lại để gỡ. Điều cần lưu ý là mục tiêu ít sự cố hơn có thể làm giảm việc báo cáo trung thực, nên hãy giữ tỷ lệ phát hiện bởi giám sát bên cạnh số đếm.

### AI

AI có thể phân loại và xếp ưu tiên sự cố với số lượng lớn, điều dịch chuyển cơ cấu mức ưu tiên và mức tập trung danh mục mà không có thay đổi gì về tác động thật. Hãy ghép cơ cấu mức ưu tiên với một lần kiểm tra mẫu của con người về tính trung thực của mức ưu tiên và báo cáo tỷ lệ phân loại lại cho các mức ưu tiên do AI gán. Điều cần lưu ý là một mô hình được huấn luyện trên các phiếu quá khứ lặp lại các thói quen danh mục cũ, nên hãy để ý các loại sự cố mới bị nộp dưới các nhãn cũ.

### Tự động hóa

Hãy thu nhận việc tạo sự cố, các thay đổi mức ưu tiên và cảnh báo giám sát một cách tự động để khối lượng được đếm từ các sự kiện, và đo bước tự động phân loại về tỷ lệ lỗi của nó. Điều cần lưu ý là các cơn bão cảnh báo tạo ra số đếm sự cố phản ánh công cụ, không phải tác hại với người dùng, nên hãy chuẩn hóa theo mức sử dụng và loại trùng lặp.

### Phân tích

Hãy chuẩn hóa khối lượng theo mức sử dụng và cho thấy mức ưu tiên như một cơ cấu theo thời gian, với các sự cố lặp lại được liên kết với một nguyên nhân. Quyết định được cung cấp thông tin là đầu tư vào phòng ngừa ở đâu. Điều cần lưu ý là một số đếm thấp các sự cố mức ưu tiên cao quá nhỏ để so sánh từ tháng này sang tháng khác, nên hãy dùng các cửa sổ dài hơn.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Khối lượng nhỏ và đội biết từng sự cố, nên tỷ lệ và ma trận có thể cảm giác nặng. Hãy giữ một số đếm đơn giản theo dịch vụ và một danh sách ngắn các danh mục, và ghi ra trong một trang điều gì được tính là một sự cố. Hãy theo dõi các lần lặp lại, vì một đội nhỏ có thể loại bỏ một lỗi lặp lại nhanh và giành lại thời gian.

**Doanh nghiệp nhỏ.** Bàn dịch vụ có thể là một người dùng một công cụ được lưu trữ. Hãy dùng các báo cáo chuẩn của công cụ, giữ mức ưu tiên ở vài mức với một quy tắc tác động và độ khẩn đơn giản, và kiểm tra rằng yêu cầu không bị đếm là sự cố. So sánh từ tháng này sang tháng khác kèm ghi chú về thay đổi, như nhân viên hay phần mềm mới.

**Doanh nghiệp lớn.** Nhiều dịch vụ, nhà cung cấp và bàn khiến tính nhất quán là vấn đề chính. Hãy thống nhất một ma trận tác động và độ khẩn, một lược đồ danh mục với độ sâu giới hạn, và một quy tắc loại trùng lặp, và để các đội địa phương thêm thẻ mà không đổi lược đồ chung. Chuẩn hóa theo dịch vụ và rà soát xu hướng bằng biểu đồ kiểm soát và chú thích. Sự cố do nhà cung cấp gây ra cần một định nghĩa chung trong hợp đồng (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

**Chính phủ và khu vực công.** Sự cố có thể mang nghĩa vụ báo cáo, nhu cầu kiểm toán và lợi ích công chúng, đặc biệt nơi dịch vụ ảnh hưởng đến quyền hoặc an toàn của công dân. Hãy ghi tài liệu ma trận mức ưu tiên và lược đồ danh mục, giữ dấu vết kiểm toán các thay đổi mức ưu tiên, và cẩn thận với bất kỳ số đếm nào được công bố, vì báo cáo công khai có thể tạo áp lực mạnh lên cách các bản ghi được viết. Dữ liệu sử dụng có thể bị giới hạn bởi quy tắc riêng tư, nên hãy nêu mẫu số bạn có thể dùng một cách hợp pháp (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là quản lý nhu cầu. Sự cố tiêu tốn thời gian của người có kỹ năng, làm gián đoạn công việc có kế hoạch và làm xáo trộn người dùng. Hiểu khối lượng, mức ưu tiên và các lần lặp lại cho phép một tổ chức gỡ bỏ nguyên nhân, bố trí nhân sự theo nhu cầu thật, và cho lãnh đạo thấy công việc độ tin cậy sẽ sinh lời ở đâu.

Chi phí có ba phần. Việc thiết lập bao gồm định nghĩa sự cố và yêu cầu, thống nhất ma trận mức ưu tiên và lược đồ danh mục, và nối dữ liệu sử dụng với các dịch vụ. Chi phí vận hành là công sức giữ các bản ghi sạch, một buổi rà soát mẫu hằng tháng, và một người duy trì báo cáo. Chi phí thứ ba là thời gian để hành động theo các phát hiện, nơi phần lớn lợi tức đến từ, nên hãy lập kế hoạch năng lực cho nó.

Lợi tức được mô tả tốt nhất qua các mẫu hình bạn tự đo được. Chúng gồm ít lần lặp lại hơn sau công việc vấn đề, ít thời gian hơn trong các tranh chấp mức ưu tiên, ít leo thang bất ngờ hơn, và sự khớp tốt hơn giữa nhân sự và nhu cầu. Tránh hứa một tỷ lệ phần trăm giảm sự cố; nó phụ thuộc vào dịch vụ, điểm xuất phát và công việc đã làm. Tổng chi phí sở hữu chủ yếu là thời gian của con người, nên hãy đếm nó, và so sánh với thời gian mà các sự cố lặp lại hiện đang tiêu tốn.

## Phản mẫu và cạm bẫy

- **Báo cáo một số đếm thô như một điểm sức khỏe.** Mức sử dụng, thay đổi và hành vi báo cáo đều làm nó dịch chuyển. Hãy cho thấy tỷ lệ chuẩn hóa, số đếm thô và chú thích cùng nhau.
- **Mục tiêu ít sự cố hơn.** Chúng thưởng cho việc bóp nghẹt và gắn nhãn sai. Hãy đặt mục tiêu cho giảm lặp lại và tác động đến khách hàng, và giữ số đếm sự cố như thông tin.
- **Đếm yêu cầu là sự cố.** Khối lượng tăng và dịch vụ trông tệ hơn thực tế. Hãy tách các loại bản ghi và báo cáo từng loại.
- **Mức ưu tiên tự do.** Mức ưu tiên trở thành thương lượng và cơ cấu trở nên vô nghĩa. Hãy dùng một ma trận được công bố và lấy mẫu để kiểm tra tính nhất quán.
- **Một cây danh mục không ai dùng.** Mọi người chọn cái khớp đầu tiên, và "khác" phình ra. Hãy giữ nó ngắn, rà soát "khác" hằng tháng, và tỉa những gì không dùng.
- **Đếm mọi phiếu được liên kết là một lỗi riêng.** Một sự cố ngừng hoạt động đơn lẻ chi phối cả tháng. Hãy báo cáo sự cố cha và số bản ghi được liên kết.
- **Xếp hạng nhân viên hoặc đội theo số đếm sự cố.** Số đếm theo người phản ánh việc phân bổ công việc và thói quen phiếu. Hãy tổng hợp lên dịch vụ và rà soát các mẫu hình, không phải con người.
- **Bỏ qua các lần lặp lại.** Cùng một lỗi được sửa đi sửa lại, và không ai sở hữu nguyên nhân. Hãy liên kết các lần lặp lại với hồ sơ vấn đề và giao một người sở hữu.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đếm | Mọi người bất đồng về sự cố là gì; số đếm đến từ các bản xuất ngẫu hứng | Một số đội lọc yêu cầu khỏi sự cố; quy tắc khác nhau | Một định nghĩa, bộ lọc và quy tắc loại trùng lặp bằng văn bản cho mọi đội | Thay đổi định nghĩa được ghi lại và cho thấy trên biểu đồ xu hướng; tỷ lệ bản ghi chưa phân loại được theo dõi | Định nghĩa được rà soát cùng nhà cung cấp và khách hàng và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Chuẩn hóa và diễn giải | Chỉ có số đếm thô | Dữ liệu sử dụng được dùng ở vài dịch vụ | Một thước đo sử dụng có tên cho mỗi dịch vụ từ một nguồn riêng | Biểu đồ kiểm soát kèm chú thích được dùng trong các buổi rà soát | Dữ liệu sử dụng, thay đổi và sự cố được liên kết giữa các đội và nhà cung cấp để giải thích nhu cầu |
| Thực hành mức ưu tiên | Mức ưu tiên chọn theo cảm giác | Ma trận tồn tại ở một số đội | Một ma trận kèm ví dụ, hiển thị nơi mức ưu tiên được chọn | Cơ cấu và tỷ lệ phân loại lại được rà soát và lấy mẫu hằng tháng | Ma trận được tinh chỉnh cùng khách hàng và chủ sở hữu lâm sàng hoặc kinh doanh khi điều kiện thay đổi |
| Lặp lại và mẫu hình | Các lần lặp lại được nhận ra bằng trí nhớ | Danh sách danh mục thỉnh thoảng được rà soát | Tỷ lệ lặp lại và mở lại được báo cáo hằng tháng với một cửa sổ nêu rõ | Các cụm lặp lại được liên kết với hồ sơ vấn đề cùng người sở hữu và ngày | Việc gỡ nguyên nhân liên đội và nhà cung cấp được tài trợ và theo dõi đến khi nhu cầu giảm |

## Danh sách kiểm tra

- [ ] Một định nghĩa bằng văn bản tách sự cố khỏi yêu cầu, cảnh báo và vấn đề.
- [ ] Sự cố cha và các bản ghi được liên kết được báo cáo riêng.
- [ ] Mọi sự cố được quy cho một dịch vụ từ danh mục dịch vụ.
- [ ] Mỗi dịch vụ có một thước đo sử dụng có tên từ một nguồn khác công cụ sự cố.
- [ ] Báo cáo cho thấy số đếm thô, tỷ lệ chuẩn hóa và chú thích cho các bản phát hành và chiến dịch.
- [ ] Một biểu đồ kiểm soát được dùng trước khi ai đó phản ứng với một thay đổi trong khối lượng hằng tuần.
- [ ] Mức ưu tiên được suy ra từ một ma trận tác động và độ khẩn được công bố kèm ví dụ.
- [ ] Cơ cấu mức ưu tiên và tỷ lệ phân loại lại được rà soát cùng nhau mỗi tháng.
- [ ] Danh sách danh mục ngắn, và tỷ lệ bản ghi "khác" và chưa phân loại được theo dõi.
- [ ] Tỷ lệ lặp lại và mở lại dùng các cửa sổ nêu rõ và được báo cáo riêng.
- [ ] Các cụm lặp lại được liên kết với hồ sơ vấn đề cùng một người sở hữu.
- [ ] Không báo cáo nào xếp hạng nhân viên theo số đếm sự cố.

## Lời nhắc AI

**Kiểm tra một định nghĩa khối lượng sự cố về sự mơ hồ.**

```text
We count incident volume for [service or team] from [ITSM tool]. Our current
filter is [describe record types, statuses, and exclusions] and our period is
[period]. Review the definition for ambiguity, including how requests, duplicates,
merged tickets, and cancelled records are handled. Suggest a clear written rule
and a short list of examples that would settle disagreements. Do not invent
benchmark values. List your assumptions and the questions I should answer to
complete the definition.
```

**Thiết kế một tỷ lệ sự cố chuẩn hóa.**

```text
For the service [service name] I want an incident rate normalized by usage. The
available usage measures are [list, for example active users, sessions,
transactions] from [source]. Compare the options, say which fits best and why,
and describe what could distort each one. Propose how to show the raw count, the
rate, and annotations for [events such as releases or campaigns] on one chart.
Do not invent figures or thresholds. List your assumptions.
```

**Rà soát một ma trận tác động và độ khẩn.**

```text
Here is our priority matrix: [paste impact levels, urgency levels, and the
resulting priorities], and here are [number] anonymized example incidents:
[paste short descriptions]. Apply the matrix to each example, point out where two
readers could reach different priorities, and suggest wording or examples that
reduce the disagreement. Identify ways the matrix could be gamed. Do not invent
response targets or benchmark values. List your assumptions.
```

**Phân tích danh mục và các lần lặp lại để tìm ứng viên cải tiến.**

```text
I have incident records for [period] with these fields: [list fields, for
example service, category, CI, opening time, closing time, reopen flag]. Describe
a method to find the top categories, to separate reopens from repeats using a
window of [window], and to choose [number] candidates for problem investigation.
Explain how to check for catch-all categories and near-duplicate records. Do not
invent patterns in data I have not shown you. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một chỉ số liên quan và rào chắn nên nằm bên cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chủ đề chỉ số đã sửa giữ đầy đủ các đồng hồ, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Khối lượng sự cố phản ánh mức sử dụng, thay đổi và hành vi báo cáo nhiều như chất lượng, nên hãy chuẩn hóa nó và chú thích nó.
- Đọc mức ưu tiên như một cơ cấu, suy ra nó từ một ma trận tác động và độ khẩn được công bố, và theo dõi tỷ lệ phân loại lại.
- Báo cáo sự cố cha và các bản ghi được liên kết riêng để một sự cố ngừng hoạt động không trông như một tháng công việc thường lệ.
- Các lần lặp lại và mở lại là tín hiệu hữu ích nhất, vì chúng chỉ vào các nguyên nhân và bản sửa không giữ vững.
- Tổng hợp lên dịch vụ và đội, không bao giờ lên từng nhân viên, và ghép mọi chỉ số với một rào chắn.
- Dùng biểu đồ kiểm soát và góc nhìn Pareto để quyết định nên xem ở đâu, rồi giao cho mỗi cụm một người sở hữu và năng lực.

## Tài liệu tham khảo và đọc thêm

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
