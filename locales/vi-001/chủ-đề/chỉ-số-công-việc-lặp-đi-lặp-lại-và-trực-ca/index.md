# Chỉ số công việc lặp đi lặp lại và trực ca

**Một dịch vụ chỉ đáng tin cậy bằng luân phiên chăm sóc nó, nên hãy đo các gián đoạn, tải ban đêm và tỷ lệ thời gian mất vào công việc thủ công lặp đi lặp lại cho cả luân phiên, và dùng các con số để tài trợ cho phòng ngừa và tự động hóa, không bao giờ để so sánh con người.**

## Tổng quan và động lực

Độ tin cậy thường được mô tả theo hệ thống: tính sẵn sàng, độ trễ, tỷ lệ lỗi. Đằng sau mọi dịch vụ có người dùng vào giữa đêm là một hệ thống con người phản ứng khi hệ thống hỏng. Hệ thống con người đó có giới hạn. Một luân phiên bị gọi quá thường xuyên, đánh thức quá nhiều người, hoặc dành phần lớn tuần cho các tác vụ thủ công, lặp đi lặp lại sẽ chậm lại, mắc nhiều sai lầm hơn, và cuối cùng mất người. Các chỉ số khác trong Phần 5 có thể trông khỏe mạnh cho đến đúng lúc những người giữ chúng lại với nhau rời đi.

Hai ý tưởng tổ chức chủ đề này. Ý tưởng thứ nhất là công việc [trực ca](https://en.wikipedia.org/wiki/On-call): một luân phiên những người có thể liên lạc được và sẵn sàng phản ứng với cảnh báo ngoài các mẫu làm việc bình thường. Một **cuộc gọi (page)** là một cảnh báo làm gián đoạn người xử lý, thường qua máy nhắn tin, cuộc gọi điện thoại, hay thông báo đẩy. Một **ca (shift)** là một quãng trực, ví dụ một ngày, một tuần hay một đêm. Một **luân phiên (rotation)** là nhóm người lần lượt nhận ca. Ý tưởng thứ hai là **toil**, một thuật ngữ từ [kỹ thuật độ tin cậy của trang](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), kỷ luật vận hành dịch vụ bằng các phương pháp kỹ thuật phần mềm. Trong cuốn *Site Reliability Engineering* của Google, toil là công việc vận hành gắn với việc chạy một dịch vụ môi trường thật có xu hướng thủ công, lặp đi lặp lại, tự động hóa được, chiến thuật, không có giá trị lâu dài, và lớn lên cùng dịch vụ. Nó không giống chi phí chung như các cuộc họp, và nó không đơn giản là công việc ai đó không thích.

ITIL 4 không có thực hành gọi là "quản lý toil". Tài liệu nằm rải qua nhiều thực hành. [Quản lý sự cố](https://en.wikipedia.org/wiki/Incident_management) và quản lý giám sát và sự kiện tạo ra các cuộc gọi. Quản lý vấn đề gỡ các nguyên nhân cứ tạo ra chúng. Quản lý yêu cầu dịch vụ và quản lý triển khai tạo ra nhiều công việc thủ công lặp lại. Quản lý lực lượng lao động và nhân tài, và cải tiến liên tục, sở hữu phía con người. Đối ứng linh hoạt là thỏa thuận làm việc của đội về công việc ngoài kế hoạch và nhịp độ bền vững, và thói quen DevOps rằng đội xây một dịch vụ cũng mang một phần máy nhắn tin của nó.

Các thước đo ở đây nói về tải và tính bền vững. Xử lý sự cố thuộc các chủ đề khác (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố, và chủ đề 3.4, Chỉ số sự cố lớn), cũng như chất lượng của từng cảnh báo (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo). Chủ đề này hỏi việc giữ dịch vụ chạy tốn bao nhiêu cho những người trong luân phiên, và cái giá đó có bền vững không.

### Vì sao điều này thuộc về độ tin cậy

Mệt mỏi có hậu quả vận hành. [Thiếu ngủ](https://en.wikipedia.org/wiki/Sleep_deprivation) làm suy giảm phán đoán và thời gian phản ứng, và những người xử lý mệt mỏi lúc bắt đầu một sự cố mất nhiều thời gian chẩn đoán hơn và dễ mắc sai lầm thứ hai trong khi sửa sai lầm thứ nhất. [Mệt mỏi vì báo động](https://en.wikipedia.org/wiki/Alarm_fatigue) là hiệu ứng liên quan của quá nhiều cảnh báo: mọi người ngừng coi mỗi cái là khẩn cấp. [Kiệt sức nghề nghiệp](https://en.wikipedia.org/wiki/Occupational_burnout) là kết quả dài hạn của quá tải kéo dài, và nó hiện ra là bỏ việc, ốm đau và mất gắn kết, vốn chậm, tốn kém và khó đảo ngược. Một đội đo độ tin cậy dịch vụ mà không đo tính bền vững của luân phiên chỉ đang xem hệ quả và bỏ qua một phần nguyên nhân.

Chủ đề này mô tả luân phiên, ca và dịch vụ, và nó không bao giờ xếp hạng cá nhân. Góc nhìn ITIL bắt đầu từ sự cố và dịch vụ, góc nhìn SRE từ chi phí thời gian của con người, và góc nhìn linh hoạt từ năng lực cho công việc có kế hoạch.

## Nguyên tắc chính

- **Đo luân phiên, không phải người.** Báo cáo tải theo dịch vụ, ca và vị trí trong luân phiên. Số cuộc gọi của một người phụ thuộc vào ca họ rút trúng, và một bảng xếp hạng dạy mọi người giấu gián đoạn.
- **Đếm khi nào gián đoạn xảy ra cũng như chúng kéo dài bao lâu.** Một cuộc gọi năm phút lúc 03:00 có thể tốn một đêm ngủ.
- **Định nghĩa toil hẹp và để đội phân loại nó.** Toil là một loại công việc cụ thể, không phải từ đồng nghĩa với công việc mọi người không thích.
- **Coi tải là tín hiệu cho đầu tư.** Khối lượng cuộc gọi hay tỷ lệ toil cao là bằng chứng một dịch vụ, công cụ hoặc mức nhân sự cần được làm việc.
- **Ghép mọi thước đo tải với một thước đo chất lượng.** Ít cuộc gọi hơn chỉ là tin tốt nếu sự cố vẫn được phát hiện.
- **Cho thấy phân phối và chia sẻ dữ liệu với luân phiên trước.** Một ca trung bình giấu một nhúm đêm tồi tệ, và những người trực là người đánh giá tốt nhất liệu các con số có khớp với trải nghiệm của họ.

## Định nghĩa chỉ số

Bảng đưa ra tập cốt lõi. Mọi thước đo thời gian hoặc số đếm nêu nơi nó bắt đầu và dừng và cái gì bị loại trừ. "Ngoài giờ" phải được định nghĩa một lần cho mỗi luân phiên như một cửa sổ bằng văn bản theo giờ địa phương, gồm cuối tuần và ngày lễ, vì những người trong một luân phiên phân tán có thể có giờ địa phương khác nhau.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Số cuộc gọi mỗi ca | Số cuộc gọi gửi đến một luân phiên trong một ca | Số cuộc gọi được gửi giữa lúc bắt đầu ca và kết thúc ca, một số đếm cho mỗi ca, sau khi gộp các cuộc gọi trùng lặp cho cùng nhóm cảnh báo trong 5 phút (cửa sổ gộp là một thiết lập của đội). Cuộc gọi thử và cuộc gọi gửi nhầm bị loại trừ. Báo cáo trung vị và bách phân vị thứ 90 qua các ca, cộng với ca bận nhất | cuộc gọi mỗi ca | Công cụ gọi người; lịch trực | Quản lý sự cố; quản lý giám sát và sự kiện | Chính sách công việc ngoài kế hoạch; nhịp độ bền vững | Rà soát hằng tuần, xu hướng hằng tháng |
| Tỷ lệ cuộc gọi ngoài giờ | Tỷ lệ cuộc gọi đến ngoài cửa sổ làm việc bằng văn bản | Số cuộc gọi gửi ngoài cửa sổ làm việc / tất cả cuộc gọi được gửi, trong kỳ. Cửa sổ được đặt cho mỗi luân phiên theo giờ địa phương; ngày lễ được tính là ngoài cửa sổ | phần trăm | Công cụ gọi người; lịch luân phiên | Quản lý sự cố; quản lý giám sát và sự kiện | Thỏa thuận làm việc về sự sẵn sàng | Hằng tháng |
| Tỷ lệ gián đoạn ban đêm | Một ca có ít nhất một cuộc gọi trong cửa sổ ngủ được bảo vệ thường xuyên đến đâu | Số ca có ít nhất một cuộc gọi trong cửa sổ ngủ được bảo vệ (ví dụ 22:00 đến 07:00 giờ địa phương, do đội đặt) / tất cả các ca trong kỳ. Một cuộc gọi được xác nhận tự động mà không có phản ứng của con người bị loại trừ | phần trăm số ca | Công cụ gọi người; nhật ký xác nhận | Quản lý sự cố; quản lý lực lượng lao động và nhân tài | Nhịp độ bền vững; kiểm tra sức khỏe đội | Hằng tháng |
| Tỷ lệ toil trong thời gian | Tỷ lệ thời gian làm việc của luân phiên dành cho toil | Số giờ luân phiên ghi cho công việc được phân loại là toil / tổng số giờ làm việc luân phiên ghi lại, trong một tháng. Cuộc họp, đào tạo và nghỉ phép bị loại khỏi cả tử số và mẫu số. Phân loại theo sáu đặc điểm của toil, do đội áp dụng | phần trăm thời gian | Lấy mẫu thời gian hoặc nhãn tác vụ trong trình theo dõi công việc; rà soát phân loại của đội | Cải tiến liên tục; quản lý triển khai; quản lý yêu cầu dịch vụ | Tỷ lệ công việc ngoài kế hoạch; phân bổ năng lực trong công việc có kế hoạch | Hằng tháng, kèm rà soát phân loại hằng quý |
| Toil theo nguồn | Phân phối giờ toil qua các nguồn có tên như khởi động lại thủ công, yêu cầu quyền truy cập, gia hạn chứng chỉ và phân loại phiếu | Số giờ toil của mỗi nguồn / tổng số giờ toil, liệt kê năm nguồn hàng đầu và một nhóm "khác". Cùng các trường hợp loại trừ như tỷ lệ toil trong thời gian | phần trăm giờ toil theo nguồn | Lấy mẫu thời gian hoặc nhãn tác vụ trong trình theo dõi công việc | Quản lý vấn đề; quản lý yêu cầu dịch vụ | Tồn đọng các hạng mục cải tiến | Hằng quý |
| Tỷ lệ cuộc gọi lặp lại | Tỷ lệ cuộc gọi do một điều kiện đã gọi luân phiên trước đó trong một cửa sổ nêu rõ | Số cuộc gọi có nhóm cảnh báo hoặc mã nguyên nhân khớp với một cuộc gọi trước trong 30 ngày / tất cả cuộc gọi trong kỳ. Mã nguyên nhân do người xử lý đặt lúc đóng; mã chưa đặt được báo cáo riêng | phần trăm | Công cụ gọi người; mã nguyên nhân bản ghi sự cố | Quản lý vấn đề; quản lý sự cố | Hành động của buổi nhìn lại; tồn đọng nợ kỹ thuật | Hằng tháng |
| Độ sâu luân phiên | Có bao nhiêu người xử lý đủ điều kiện chia sẻ máy nhắn tin so với số vai trò cần lấp | Số người đã hoàn tất sẵn sàng trực ca và sẵn sàng nhận ca / số vị trí ca mỗi chu kỳ luân phiên. Nghỉ phép và biệt phái làm giảm khả năng sẵn có. Báo cáo dưới dạng tỷ số cho mỗi luân phiên, không bao giờ theo người | tỷ số | Lịch luân phiên; danh sách kiểm tra sẵn sàng | Quản lý lực lượng lao động và nhân tài | Đội liên chức năng; ma trận kỹ năng | Hằng quý |
| Toil đã gỡ | Số giờ toil lặp lại được lấy ra khỏi công việc của luân phiên nhờ một thay đổi tự động hóa hoặc thiết kế | Số giờ toil hằng tháng ước lượng của một nguồn trước thay đổi trừ cùng số sau thay đổi, đo trên ít nhất hai chu kỳ sau khi giao. Số giờ tiết kiệm từ một lần dọn dẹp một lần bị loại trừ | giờ mỗi tháng | Lấy mẫu thời gian trước và sau; phiếu cải tiến | Cải tiến liên tục; quản lý vấn đề | Hạng mục cải tiến đã giao | Hằng quý |

Số đếm cuộc gọi là số đếm gián đoạn, không phải sự cố: một sự cố có thể tạo ra cả chục cuộc gọi. Tỷ lệ toil trong thời gian phụ thuộc vào ghi nhận trung thực, nên hãy coi nó là một ước lượng đã thống nhất.

## Khuyến nghị

### Định nghĩa các thuật ngữ trước khi đếm

**1. Viết ra cái gì được tính là một cuộc gọi, một ca và ngoài giờ.** Các đội đếm những thứ khác nhau dưới cùng một từ. Một cuộc gọi có thể là bất kỳ thông báo nào, chỉ những cái đến được một con người, hoặc chỉ những cái cần hành động. Hãy chọn một định nghĩa, nêu cửa sổ gộp cho các bản trùng lặp, và ghi cửa sổ làm việc theo giờ địa phương. Không có điều này, các con số sẽ đổi khi một công cụ được cấu hình lại, và xu hướng sẽ gây hiểu lầm.

**2. Thống nhất toil là gì, kèm ví dụ từ dịch vụ của chính bạn.** Hãy bắt đầu từ sáu đặc điểm trong sách SRE. Viết một danh sách ngắn các ví dụ và phản ví dụ, như khởi động lại một tác vụ bị kẹt (toil), thiết kế một công cụ khôi phục mới (kỹ thuật), và một cuộc họp lập kế hoạch (chi phí chung). Rà soát danh sách khi bất đồng xuất hiện.

**3. Chọn cách bạn sẽ đo tỷ lệ toil, và chấp nhận giới hạn của nó.** Các lựa chọn rẻ là lấy mẫu thời gian, nhãn tác vụ trong trình theo dõi công việc, và một ước lượng ngắn hai tuần một lần. Không cái nào chính xác, nên hãy chọn cái ít chi phí nhất, chạy nó một quý, và đánh giá xu hướng hơn là giá trị tuyệt đối.

### Đo tải lên luân phiên

**4. Báo cáo số cuộc gọi mỗi ca như một phân phối.** Ca trung bình giấu điều luân phiên cảm nhận. Hãy cho thấy trung vị, bách phân vị thứ 90 và ca bận nhất, và thêm một ghi chú về điều đã xảy ra trong ca đó. Một trung vị yên tĩnh với cái đuôi tồi tệ nghĩa là vài đêm xấu, là vấn đề khác với một luân phiên bận đều. Xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ, để đọc bách phân vị.

**5. Đặt thời điểm cạnh khối lượng.** Tỷ lệ cuộc gọi ngoài giờ và tỷ lệ gián đoạn ban đêm cho thấy tải rơi vào khi nào. Năm cuộc gọi trong giờ hành chính là một phiền toái; năm cuộc giữa nửa đêm và 05:00 là một cái giá khác. Hãy cho thấy cả hai trên cùng một trang.

**6. Nhìn vào sự phân tán qua các ca, không phải qua con người.** Một luân phiên mà một ca lặp lại (ví dụ cuối tuần hoặc bàn giao thứ Hai) gom hầu hết cuộc gọi cần một cách sửa khác với luân phiên có tải đều. Hãy báo cáo tỷ lệ cuộc gọi theo vị trí ca và ngày. Khi dữ liệu được báo cáo theo từng cá nhân có tên, hãy chờ nó bị đọc như một bảng xếp hạng, nên đừng tạo ra cái nhìn đó.

**7. Đếm tải sự cố lớn riêng.** Một sự cố lớn có thể tạo ra nhiều gián đoạn trong một đêm hơn một tháng bình thường. Hãy báo cáo nó thành một dòng riêng để một sự kiện không làm méo xu hướng (xem chủ đề 3.4, Chỉ số sự cố lớn).

### Nối tải với nguyên nhân và bản sửa

**8. Liên kết cuộc gọi với vấn đề, và theo dõi các lần lặp lại.** Tỷ lệ cuộc gọi lặp lại cho thấy bao nhiêu tải đến từ các nguyên nhân đã biết. Một tỷ lệ lặp lại cao là lập luận cho quản lý vấn đề, không phải cho phản ứng nhanh hơn. Hãy đưa các nguyên nhân lặp lại hàng đầu vào tồn đọng vấn đề và ghi lại liên kết (xem chủ đề 4.1, Chỉ số quản lý vấn đề, và chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết).

**9. Xếp hạng nguồn toil và tấn công nguồn lớn nhất.** Một [biểu đồ Pareto](https://en.wikipedia.org/wiki/Pareto_chart) về giờ toil theo nguồn thường cho thấy vài nguồn chịu trách nhiệm cho phần lớn thời gian. Hãy chọn cái lớn nhất, quyết định nó có thể được thiết kế bỏ đi, tự động hóa, hay giao cho đội sở hữu nguyên nhân, và lên lịch nó như công việc tính năng. Hãy ưu tiên gỡ bỏ nhu cầu hơn là tự động hóa bước đó, vì một bước tự động vẫn phải được bảo trì.

**10. Đo toil đã gỡ, không phải số tự động hóa đã viết.** Một tự động hóa không ai dùng không gỡ được gì. Hãy đo số giờ toil trước và sau, trên ít nhất hai chu kỳ, và ghi lại công sức xây dựng và bảo trì tự động hóa. Đây là lợi tức trung thực, và nó ngăn một chương trình "tự động hóa" thêm tập lệnh mà không gỡ công việc nào. Xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa, về mức áp dụng tự động hóa của người dùng.

### Giữ cho hệ thống bền vững

**11. Đặt giới hạn luân phiên trong một thỏa thuận của đội, rồi theo dõi độ sâu luân phiên.** Hãy thống nhất một người có thể trực ca thường xuyên đến đâu, bao nhiêu đêm liên tiếp là chấp nhận được, và nghỉ ngơi thế nào sau một đêm tồi. Độ sâu luân phiên cho thấy luân phiên có đủ người đủ điều kiện cho giới hạn đã thống nhất không. Một luân phiên danh nghĩa tám người nhưng thực tế ba, vì những người khác chưa sẵn sàng hoặc đang nghỉ phép, không đáp ứng giới hạn, bất kể danh sách nói gì.

**12. Dùng các con số để yêu cầu một điều cụ thể.** Một con số tải hỗ trợ một yêu cầu: một thay đổi nhân sự, thời gian lấy từ công việc tính năng để trả toil, một thay đổi ngưỡng cảnh báo, hoặc một sự ngừng hỗ trợ. Hãy nêu yêu cầu cạnh con số, nếu không mọi người sẽ ngừng ghi lại (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Số cuộc gọi mỗi ca | Nâng ngưỡng cảnh báo hoặc tắt tiếng cảnh báo để số đếm giảm; gộp các cảnh báo không liên quan thành một cuộc gọi; chuyển cuộc gọi sang một hàng đợi phiếu không ai xem | Độ phủ phát hiện và các sự cố do khách hàng báo mà giám sát bỏ sót (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo); thời gian phát hiện (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố) |
| Tỷ lệ cuộc gọi ngoài giờ | Định nghĩa lại cửa sổ làm việc rộng hơn; lên lịch lại tác vụ và triển khai để cuộc gọi chuyển vào giờ hành chính mà không giảm; phân loại lại cuộc gọi là "mức khẩn thấp" | Tổng khối lượng cuộc gọi cạnh tỷ lệ; cửa sổ làm việc bằng văn bản dưới kiểm soát thay đổi; rà soát cái gì đã chuyển |
| Tỷ lệ gián đoạn ban đêm | Trì hoãn xác nhận đến sáng; xác nhận tự động cuộc gọi; chỉ đếm các cuộc gọi đến được một con người | Thời gian xác nhận theo giờ (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố); cuộc gọi không có phản ứng của con người báo cáo riêng; tác động đến khách hàng ban đêm |
| Tỷ lệ toil trong thời gian | Phân loại lại toil là "kỹ thuật" hay "công việc dự án"; ghi ít hơn thời gian đã dùng; chỉ gắn nhãn những gì dễ mô tả | Kiểm toán định kỳ các hạng mục đã phân loại bởi người ngoài luân phiên; cảm nhận của chính đội về tuần làm việc; tỷ lệ thời gian dành cho công việc cải tiến có kế hoạch |
| Toil theo nguồn | Chia một nguồn lớn thành nhiều nguồn nhỏ để không cái nào nổi bật; để một nguồn không tên trong "khác" | Một giới hạn trên cho nhóm "khác" (ví dụ dưới một phần năm số giờ toil, một thiết lập của đội); lấy mẫu các hạng mục "khác" mỗi quý |
| Tỷ lệ cuộc gọi lặp lại | Đóng cuộc gọi bằng mã nguyên nhân mới mỗi lần để các lần khớp bị bỏ sót; nới mã nguyên nhân đến khi mọi thứ riêng biệt; kéo dài hay rút ngắn cửa sổ | Kiểm toán mã nguyên nhân trên một mẫu; tái diễn của cùng nhóm cảnh báo qua các sự cố (xem chủ đề 4.1, Chỉ số quản lý vấn đề) |
| Độ sâu luân phiên | Tính những người chưa hoàn tất sẵn sàng; tính những người hiếm khi sẵn có; độn danh sách | Tỷ lệ ca thực sự được nhóm danh nghĩa phủ; số ca thực theo vị trí, báo cáo không kèm tên; mức hoàn tất danh sách kiểm tra sẵn sàng |
| Toil đã gỡ | Tính các lần dọn dẹp một lần là tiết kiệm lặp lại; bỏ qua công sức xây dựng và bảo trì tự động hóa; tuyên bố tiết kiệm mà không có trước và sau | Số giờ trước và sau đo trên hai chu kỳ; công sức bảo trì của tự động hóa; tỷ lệ toil trong thời gian qua các quý tiếp theo |

Một kết quả đọc lành mạnh là một luân phiên mà ca trung vị yên tĩnh và ca tồi nhất hiếm, ít cuộc gọi ban đêm, tỷ lệ cuộc gọi lặp lại giảm, và tỷ lệ toil giảm vì các nguồn đã được gỡ, không phải vì chúng bị phân loại lại. Nó cũng cho thấy công sức để đến đó: công việc cải tiến xuất hiện trong kế hoạch, được tài trợ và giao. Nếu số cuộc gọi giảm trong khi khách hàng báo thêm sự cố mà giám sát không bắt được, các con số đang tốt lên bằng cách nhìn đi chỗ khác.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Đếm cuộc gọi từ công cụ gọi người | Tự động, rẻ và khó tranh cãi | Đếm gián đoạn, không phải cái giá của chúng; tinh chỉnh cảnh báo đổi số đếm mà không đổi tải |
| Lấy mẫu thời gian cho toil | Độ chính xác hợp lý với công sức vừa phải | Cần kỷ luật; mẫu nhỏ nhiễu |
| Báo cáo cấp luân phiên | Khớp với cách công việc được tổ chức; an toàn để chia sẻ rộng | Có thể giấu một người đang chật vật; cần một kênh trò chuyện hỗ trợ bên cạnh |
| Giới hạn cứng cho toil (ví dụ mục tiêu của sách SRE là giữ toil dưới 50 phần trăm thời gian) | Một tín hiệu rõ kích hoạt phản ứng | Một con số có thể đạt bằng phân loại lại; một giới hạn cần sự ủng hộ của quản lý |

Căng thẳng trung tâm là giữa chấp nhận và đầu tư. Thật dễ coi tải cao là cái giá bình thường của một dịch vụ quan trọng và yêu cầu mọi người gánh nó, và thật dễ đặt một giới hạn mà không ai có quyền thực thi. Con đường đi qua là ghép mỗi thước đo với một quyết định: một ngưỡng mà ở đó đội dừng lại và hành động, một người sở hữu có tên cho hành động, và một ngày xem lại. Các con số cấp luân phiên thì an toàn và đôi khi quá thô. Khi ai đó đang chật vật, cuộc trò chuyện thuộc về người đó và quản lý của họ, dùng lời kể của chính họ về tuần làm việc.

## Câu hỏi để thảo luận với đội nhóm

**1. Ca bận nhất quý vừa rồi của chúng ta có cảm giác thế nào, và các con số nói gì về nó?**
Hãy bắt đầu bằng câu chuyện trước biểu đồ. Yêu cầu những người đã trực mô tả ca đó, rồi so sánh với số cuộc gọi mỗi ca và tỷ lệ gián đoạn ban đêm. Nếu các con số đánh giá thấp trải nghiệm, hãy tìm xem thiếu gì, như các cuộc gọi không được ghi lại hoặc công việc làm sau cuộc gọi. Ghi danh sách đó là cải tiến đo lường kế tiếp.

**2. Chúng ta sẽ nói điều gì là toil trong đội mình, và điều gì không?**
Đặt năm hay sáu tác vụ gần đây lên bảng và yêu cầu mỗi người phân loại chúng là toil, kỹ thuật hay chi phí chung theo sáu đặc điểm. Hãy chờ bất đồng, và coi đó là hữu ích: các bất đồng cho thấy định nghĩa mơ hồ ở đâu. Thống nhất một định nghĩa làm việc cho quý tới và viết ra hai ví dụ cho mỗi loại. Tránh tranh luận công việc có dễ chịu không, vì câu hỏi là nó có thủ công, lặp đi lặp lại và tự động hóa được không.

**3. Cảnh báo hay tác vụ nào chúng ta sẽ xóa trước nếu có thể?**
Hỏi cảnh báo hay tác vụ lặp lại mà mọi người ngại, rồi hỏi điều gì ngăn chúng ta gỡ nó: chi phí sửa, thiếu người sở hữu, hay niềm tin rằng nó bắt buộc. Người điều phối nên tìm công việc rẻ để gỡ mà người sở hữu không có mặt trong phòng. Kết thúc bằng việc chọn một hạng mục cho vòng lập kế hoạch kế tiếp.

**4. Hôm nay thực sự có bao nhiêu người có thể nhận ca, và chúng ta sẵn lòng cam kết những giới hạn nào?**
Đếm mức sẵn sàng trung thực: ai đã được đào tạo, ai sẵn có, và ai có ràng buộc. So sánh kết quả với quy mô luân phiên danh nghĩa. Hỏi nhóm coi tần suất trực ca và số đêm liên tiếp nào là chấp nhận được, rồi kiểm tra thực tế hiện tại có đáp ứng không.

**5. Nếu chúng ta cắt đôi số cuộc gọi vào quý sau, làm sao chúng ta biết mình không chỉ là ngừng lắng nghe?**
Câu hỏi này về rào chắn. Yêu cầu nhóm liệt kê các cách số cuộc gọi có thể giảm mà dịch vụ không tốt lên, như nâng ngưỡng, gộp cảnh báo, hoặc phớt lờ một nguồn. Rồi hỏi chúng ta sẽ thấy gì trong báo cáo của khách hàng và trong các thước đo phát hiện nếu điều đó đã xảy ra. Thống nhất rào chắn và đặt nó cùng trang với khối lượng.

**6. Ai thấy những con số này, và chúng ta muốn họ làm gì với chúng?**
Lần theo đường đi của các thước đo tải từ luân phiên đến quản lý và lãnh đạo. Hỏi mỗi đối tượng có khả năng kết luận gì, và có cái nhìn nào có thể bị đọc như bảng xếp hạng không. Thống nhất dạng đi lên trên: cấp luân phiên, có bối cảnh, kèm một yêu cầu. Ghi lại mọi lo ngại về việc cá nhân có thể bị nhận ra.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối tạo ra nhiều tải trực ca qua các thay đổi họ phát hành. Các đội chạy những gì họ xây có thể thấy liên kết giữa một bản phát hành và các cuộc gọi theo sau. Họ nên đưa toil và công việc trực ca vào việc lập kế hoạch năng lực, lên lịch việc gỡ toil như công việc tồn đọng bình thường, và canh chất lượng thay đổi cạnh tốc độ (xem chủ đề 2.8, Chỉ số DORA).

### Đội dịch vụ và vận hành

Các đội vận hành mang máy nhắn tin thường xuyên nhất và thấy cái giá con người đầu tiên. Họ nên sở hữu các định nghĩa, chạy việc lấy mẫu thời gian hoặc gắn nhãn, công bố các con số cấp luân phiên, và mang các nguồn toil hàng đầu và nguyên nhân lặp lại đến các đội sở hữu kèm bằng chứng. Rủi ro của họ là âm thầm gánh tải vì tính chuyên nghiệp. Một bản ghi bình tĩnh, thực tế về các đêm và tuần là lời yêu cầu giúp đỡ hiệu quả hơn một lời phàn nàn, và các bản ghi không bao giờ nên bị biến thành bảng xếp hạng những người đã phản ứng.

### Lãnh đạo và quản trị

Lãnh đạo quyết định nhân sự, ưu tiên, và liệu công việc toil có được tài trợ không. Một lãnh đạo đọc tỷ lệ toil cao như hiệu suất kém dạy đội hạ nó bằng cách gắn nhãn lại. Một lãnh đạo đọc nó như một hóa đơn cho công việc tổ chức đã chọn không tài trợ nhận được dữ liệu trung thực và một kế hoạch. Quản trị nên chờ đợi một giới hạn cho tải luân phiên và một phản ứng hiển thị khi nó bị vượt (xem chủ đề 9.2, Chỉ số hài lòng và sức khỏe tinh thần).

### Khách hàng và người dùng

Người dùng không thấy luân phiên, nhưng họ cảm nhận hiệu ứng của nó: chẩn đoán chậm hơn từ những người xử lý mệt mỏi, sự cố lặp lại từ các nguyên nhân chưa sửa, và sự ra đi của những người biết dịch vụ. Nơi người dùng trải rộng nhiều múi giờ, nhu cầu ngoài giờ của họ định hình luân phiên, và cái giá của việc phủ họ là chủ đề chính đáng cho một cuộc trò chuyện về mức dịch vụ (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một nền tảng đơn hàng, một dịch vụ tài khoản khách hàng và một tích hợp kho. Một luân phiên sáu kỹ sư từ hai đội sản phẩm và một nhóm vận hành nhỏ chia sẻ một ca trực ca hằng tuần. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Buổi rà soát hằng tháng cho thấy trung vị 9 cuộc gọi mỗi ca và bách phân vị thứ 90 là 31. Ca bận nhất có 58 cuộc gọi. Khoảng một nửa số cuộc gọi đến ngoài giờ, và 6 trong 8 ca của quý có một cuộc gọi giữa 22:00 và 07:00. Lấy mẫu thời gian gợi ý toil chiếm 55 phần trăm thời gian làm việc.

Ca bận nhất trùng với một chứng chỉ hết hạn trên tích hợp kho đã gọi luân phiên 22 lần trong một đêm. Một cảnh báo dung lượng đĩa trên một máy chủ xử lý lô chiếm gần một phần tư số cuộc gọi, và hầu hết được đóng bằng cách xóa thủ công một thư mục tạm. Tỷ lệ cuộc gọi lặp lại là 41 phần trăm. Một cái nhìn Pareto cho thấy gia hạn chứng chỉ thủ công, dọn dẹp đĩa và yêu cầu quyền truy cập chiếm hầu hết giờ toil.

Đội đưa ba hạng mục vào bốn tuần tới: tự động hóa gia hạn chứng chỉ, sửa nguyên nhân khiến thư mục tạm đầy, và chuyển yêu cầu quyền truy cập sang một biểu mẫu tự phục vụ do đội danh tính sở hữu. Một thỏa thuận làm việc đặt giới hạn một ca trong bốn cho mỗi người và một ngày nghỉ sau một đêm có ba cuộc gọi trở lên. Độ sâu luân phiên là 6 người cho nhu cầu đã thống nhất là 8, nên hai kỹ sư từ đội thứ ba bắt đầu đào tạo sẵn sàng.

Một rủi ro lợi dụng hiện ra ở buổi rà soát kế tiếp. Số cuộc gọi mỗi ca đã giảm xuống trung vị 4, và bách phân vị thứ 90 xuống 12. Một quản lý hài lòng. Một thành viên đội chỉ ra rằng ngưỡng cảnh báo đĩa đã được nâng 20 điểm và máy chủ lô đã đầy hai lần mà không có cuộc gọi. Các sự cố do khách hàng báo về đơn lô bị trễ tăng. Rào chắn, sự cố do khách hàng báo mà giám sát bỏ sót, đã bắt được nó. Thay đổi ngưỡng được đảo ngược, việc dọn thư mục được lên lịch như một bản sửa, và đội thêm một quy tắc rằng mọi thay đổi ngưỡng được ghi kèm lý do và rà soát sau một tháng. Tỷ lệ toil quý sau là 38 phần trăm (minh họa) và được báo cáo kèm phương pháp lấy mẫu bên cạnh.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Một nhịp độ bền vững gồm cả luân phiên trực ca, nên hãy rà soát tải của nó cùng đội theo nhịp đều đặn và tài trợ phòng ngừa. Điều cần lưu ý là một mục tiêu về ít cuộc gọi hơn có thể dẫn đến việc tắt tiếng cảnh báo.

### AI

AI có thể tóm tắt cuộc gọi, gợi ý bước sổ tay vận hành và phân loại cảnh báo, điều có thể giảm toil, và nó có thể thêm toil mới trong việc kiểm tra và sửa đầu ra của nó. Hãy đưa thời gian giám sát AI vào toil, và ghép số cuộc gọi với các tín hiệu về giấc ngủ và sức khỏe tinh thần. Điều cần lưu ý là phản ứng đầu tiên tự động có thể giấu cuộc gọi khỏi những người vẫn gánh rủi ro.

### Tự động hóa

Hãy tự động hóa việc gỡ toil nơi công việc lặp đi lặp lại, và đo toil đã gỡ và các sự cố do tự động hóa gây ra. Điều cần lưu ý là tự động hóa xây không có người sở hữu trở thành nguồn công việc trực ca mới.

### Phân tích

Hãy báo cáo tải theo luân phiên, không bao giờ theo người, kèm số cuộc gọi đứng sau mỗi con số. Quyết định được cung cấp thông tin là đầu tư vào phòng ngừa ở đâu. Điều cần lưu ý là dữ liệu máy nhắn tin bỏ sót các gián đoạn không chính thức, nên hãy kết hợp nó với một khảo sát ngắn.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một đội nhỏ thường không có luân phiên chính thức, nên mọi người trực ca mọi lúc và cái giá vô hình. Hãy đếm cuộc gọi và số lần thức giấc ban đêm trong một bảng tính và viết ra ba tác vụ lặp lại lớn nhất. Những người sáng lập tự mang máy nhắn tin là một rủi ro kinh doanh, không phải huy hiệu của sự cam kết.

**Doanh nghiệp nhỏ.** Một hai người có thể điều hành toàn bộ CNTT. Hãy đo những gì không cần công cụ: cuộc gọi ngoài giờ, tác vụ lặp lại, và kỳ nghỉ không thể nghỉ. Một nhà cung cấp dịch vụ được quản lý có thể nhận một phần luân phiên nếu hợp đồng nêu thời gian phản hồi và giờ. Độ sâu luân phiên thường là một, là rủi ro chính.

**Doanh nghiệp lớn.** Quy mô mang đến luân phiên theo mặt trời, nền tảng dùng chung và nhiều nhà cung cấp. Hãy định nghĩa các thước đo một lần, đặt cửa sổ làm việc địa phương cho mỗi vùng, và tránh lấy trung bình giữa các luân phiên có dịch vụ rất khác nhau. Quy tắc lao động ở một số quốc gia giới hạn nhiệm vụ trực ca và yêu cầu thời gian nghỉ, và chúng thuộc về giới hạn luân phiên.

**Chính phủ và khu vực công.** Dịch vụ có thể cần phủ suốt ngày đêm theo luật hoặc hợp đồng, và nhân sự bị ràng buộc bởi mua sắm và ngạch bậc. Giới hạn luân phiên và quy tắc nghỉ thường do thỏa ước lao động điều chỉnh, nên hãy đo theo chúng và báo cáo khi bị vượt. Trách nhiệm giải trình công khai làm báo cáo thẳng thắn vừa quý hơn vừa khó hơn: hãy xây một kênh an toàn cho dữ liệu tải, và nói rõ rằng nó mô tả hệ thống và nhân sự, không phải cá nhân (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là bảo vệ chất lượng dịch vụ và giữ người có kỹ năng. Những người xử lý mệt mỏi chẩn đoán chậm hơn, và khi người có kinh nghiệm rời đi, tri thức đi cùng họ. Thay một người có chi phí thật trong tuyển dụng, tiếp nhận và năng suất giảm trong giai đoạn học, và một tổ chức có thể ước lượng những chi phí đó từ hồ sơ của chính mình. Toil cũng lấy đi năng lực khỏi cải tiến. Một đội dành phần lớn thời gian cho vận hành thủ công không thể giảm các sự cố gây ra chúng.

Chi phí của các thước đo ở mức vừa phải. Công cụ gọi người đã đếm cuộc gọi, và lấy mẫu thời gian tốn vài phút mỗi người mỗi hai tuần. Chi phí lớn hơn là hành động theo phát hiện: thời gian kỹ thuật để gỡ toil, nhân sự cho một luân phiên bền vững, và thời gian rà soát. Hãy tính bảo trì của tự động hóa là một chi phí, vì một bước tự động không được bảo trì trở thành sự cố của ngày mai.

Lợi tức hiện ra dưới dạng ít cuộc gọi từ các nguyên nhân đã biết, ít gián đoạn ban đêm, số giờ toil trả lại cho công việc cải tiến, tỷ lệ bỏ luân phiên thấp hơn, và chẩn đoán nhanh hơn. Không số liệu phổ quát nào áp dụng, nên hãy ước lượng của riêng bạn. Với một nguồn toil, nhân số giờ hằng tháng với chi phí giờ đã tính đủ mà tài chính chấp nhận, so sánh với công sức để gỡ nó, và xem lại sau hai chu kỳ. Với tính bền vững của luân phiên, hãy ghi lại các lần ra đi và vắng mặt dài khỏi luân phiên và so sánh chúng với các thước đo tải theo thời gian, coi mối liên hệ là một giả thuyết để kiểm thử, không phải một nguyên nhân đã chứng minh. Nơi cần một con số, hãy nêu nó là một ước lượng và cho thấy các đầu vào (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Xếp hạng con người theo số cuộc gọi.** Nó biến một thước đo hệ thống thành một điểm hiệu suất và dạy người xử lý tránh ca và giấu gián đoạn. Hãy báo cáo theo luân phiên, vị trí ca và dịch vụ.
- **Cắt cuộc gọi bằng cách tắt tiếng cảnh báo.** Số đếm giảm và phát hiện yếu đi. Hãy ghép khối lượng với phát hiện và sự cố do khách hàng báo, và rà soát mọi thay đổi ngưỡng.
- **Gọi mọi thứ là toil.** Một định nghĩa rộng đến mức gồm cả cuộc họp và vấn đề khó phá hủy tín hiệu. Hãy dùng sáu đặc điểm và giữ một danh sách ví dụ.
- **Một mục tiêu toil không có thẩm quyền đứng sau.** Một giới hạn không kích hoạt được quyết định trở thành một con số mọi người tranh cãi. Hãy thống nhất từ trước điều gì xảy ra khi nó bị vượt và ai quyết định.
- **Tự động hóa trước khi hiểu.** Tự động hóa có thể đóng cứng một quy trình kém và thêm bảo trì. Hãy hỏi trước liệu nhu cầu có thể được thiết kế bỏ đi không, và đo toil đã gỡ sau đó.
- **Lấy trung bình qua các dịch vụ không giống nhau.** Giá trị trung bình giữa một dịch vụ ổn định và một dịch vụ mong manh không mô tả cái nào. Hãy cho thấy từng dịch vụ và luân phiên riêng.
- **Đo mà không hành động.** Các con số tải không có phản ứng dạy mọi người rằng dữ liệu không quan trọng. Hãy gắn một quyết định, một người sở hữu và một ngày rà soát với mọi phát hiện.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và dữ liệu | Cuộc gọi và toil được mô tả theo cảm giác; không có định nghĩa chung | Một số luân phiên đếm cuộc gọi; toil được thảo luận nhưng không được đo | Một định nghĩa bằng văn bản về cuộc gọi, ca, ngoài giờ và toil; dữ liệu gọi người được thu thập bằng công cụ | Phân phối và thời điểm được theo dõi xu hướng; toil được lấy mẫu mỗi tháng và kiểm toán | Định nghĩa được rà soát giữa các đội và nhà cung cấp; công sức lấy mẫu được điều chỉnh theo giá trị của các câu trả lời |
| Tính bền vững của luân phiên | Không chính thức; vài người giống nhau gánh máy nhắn tin | Có danh sách; giới hạn được thảo luận nhưng không viết ra | Giới hạn bằng văn bản về tần suất và nghỉ ngơi; độ sâu luân phiên được biết | Giới hạn được giám sát và vi phạm được rà soát kèm hành động | Luân phiên được chia sẻ giữa các đội và nhà cung cấp, và tải được cân bằng khi dịch vụ đổi |
| Dùng các con số | Dùng để đổ lỗi hoặc bị phớt lờ | Cho quản lý xem | Cho luân phiên xem trước, kèm các quyết định chúng hỗ trợ | Ghép với rào chắn và rà soát theo nhịp dẫn đến thay đổi được tài trợ | Chia sẻ với lãnh đạo và đối tác để lập kế hoạch nhân sự và phạm vi dịch vụ |

## Danh sách kiểm tra

- [ ] Cuộc gọi, ca, cửa sổ ngoài giờ và cửa sổ gộp được định nghĩa bằng văn bản.
- [ ] Toil có một định nghĩa bằng văn bản kèm ví dụ và phản ví dụ từ dịch vụ của chính chúng ta.
- [ ] Số cuộc gọi mỗi ca được báo cáo dưới dạng trung vị, một bách phân vị cao và ca bận nhất.
- [ ] Tỷ lệ cuộc gọi ngoài giờ và tỷ lệ gián đoạn ban đêm được báo cáo cạnh khối lượng.
- [ ] Tải được báo cáo theo luân phiên, vị trí ca và dịch vụ, không bao giờ theo người có tên.
- [ ] Tỷ lệ toil trong thời gian được lấy mẫu theo lịch, với phương pháp được viết ra.
- [ ] Năm nguồn toil hàng đầu và các nguyên nhân cuộc gọi lặp lại hàng đầu nằm trong tồn đọng cải tiến.
- [ ] Giới hạn luân phiên và quy tắc nghỉ ngơi nằm trong một thỏa thuận của đội, và độ sâu luân phiên được kiểm tra mỗi quý.
- [ ] Mọi thước đo tải có một rào chắn trên cùng trang, gồm cả phát hiện và sự cố do khách hàng báo.
- [ ] Mỗi buổi rà soát kết thúc bằng một quyết định, một người sở hữu và một ngày.
- [ ] Thay đổi ngưỡng và cảnh báo được ghi nhật ký kèm lý do và rà soát sau một tháng.

## Lời nhắc AI

**Rà soát tải của một luân phiên và tìm mẫu hình.**

```text
I help run the on-call rotation for [service or group of services]. The rotation
has [number] people and a shift length of [length]. Our working window is
[hours and time zone], and our protected sleep window is [hours]. Below is
anonymized paging data for [period], with columns [list columns]:

[paste data with names removed]

Describe the distribution of pages per shift, the share of pages out of hours,
and the share of shifts with a night interruption. Point out the busiest shifts,
repeating alert groups, and any pattern by day or shift position. Report at
rotation and service level only, never by person. Do not invent benchmark values
or targets. List your assumptions and what you could not determine from the data.
```

**Phân loại tác vụ là toil, kỹ thuật hay chi phí chung.**

```text
Our team runs [service]. We define toil as work that is manual, repetitive,
automatable, tactical, without enduring value, and growing with the service.
Here is a list of recent tasks with approximate hours: [paste list].

For each task, say whether it fits toil, engineering, or overhead, and name which
of the six characteristics it meets or misses. Flag tasks that are borderline and
say what extra information would settle them. Suggest how each toil source might
be removed by design, automated, or handed to an owning team, without inventing
savings. List your assumptions and questions for the team.
```

**Soạn vectơ lợi dụng và rào chắn cho các chỉ số tải của chúng ta.**

```text
We report these on-call and toil metrics for [rotation name]: [list metrics with
definitions]. They are shown to [audience] to support [decision]. Our data comes
from [paging tool, work tracker, survey].

For each metric, list realistic ways it could improve without the rotation being
better off, and propose a guardrail metric or practice that would reveal each one.
Then say how the guardrail itself could be gamed. Do not invent benchmark values.
List your assumptions and any definitions I should tighten.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề và rào chắn liên quan khi bạn thêm một thước đo trực ca hay toil vào bảng điều khiển.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ mọi chỉ số được ghép với một vectơ lợi dụng và rào chắn.

## Điểm chính cần nhớ

- Đo tải lên luân phiên, theo ca, dịch vụ và giờ trong ngày, và không bao giờ xếp hạng những người trong đó.
- Đếm khi nào gián đoạn xảy ra cũng như có bao nhiêu, vì cuộc gọi ban đêm tốn hơn cuộc gọi giờ hành chính.
- Định nghĩa toil hẹp bằng sáu đặc điểm của nó, ước lượng tỷ lệ thời gian của nó bằng một phương pháp đơn giản, và đánh giá xu hướng.
- Liên kết cuộc gọi và nguồn toil với công việc vấn đề và với các thay đổi tự động hóa hoặc thiết kế, và đo toil thực sự đã gỡ.
- Ghép mọi thước đo tải với một rào chắn như phát hiện và sự cố do khách hàng báo, để con số thấp hơn không thể mua được bằng cách nhìn đi chỗ khác.
- Coi tải nặng là một yêu cầu đầu tư, kèm một quyết định, một người sở hữu và một ngày rà soát.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
