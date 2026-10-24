# Chỉ số chuỗi giá trị

**Hãy đo một chuỗi giá trị từ đầu đến cuối, tách mỗi giai đoạn thành thời gian công việc được chạm vào và thời gian nó phải chờ, và đếm bao nhiêu hạng mục đến nơi dùng được, vì những sự chậm trễ lớn nhất và việc làm lại lớn nhất trong một tổ chức dịch vụ nằm giữa các đội, không phải bên trong chúng.**

## Tổng quan và động lực

Hầu hết các đội đo giai đoạn của chính mình. Bàn dịch vụ báo cáo phiếu đã đóng, một đội phát triển báo cáo câu chuyện đã xong, một hội đồng thay đổi báo cáo thay đổi đã phê duyệt. Mỗi con số có thể trông khỏe mạnh trong khi người đã yêu cầu điều gì đó phải đợi hàng tuần. Lý do mang tính cấu trúc: trong một yêu cầu điển hình, phần lớn thời gian trôi qua nằm trong hàng đợi và bàn giao, và không đội nào sở hữu khoảng thời gian đó.

Một [chuỗi giá trị](https://en.wikipedia.org/wiki/Value_stream) là chuỗi các bước mà qua đó một yêu cầu trở thành giá trị được giao. [Lập bản đồ chuỗi giá trị](https://en.wikipedia.org/wiki/Value-stream_mapping) là kỹ thuật, được phát triển trong [sản xuất tinh gọn](https://en.wikipedia.org/wiki/Lean_manufacturing) và sau đó áp dụng cho văn phòng, bệnh viện và phần mềm, vẽ mọi bước từ lúc bắt đầu một quy trình đến khách hàng và ghi lại thời gian và khối lượng tại mỗi giai đoạn. Bản đồ là bức tranh về trạng thái hiện tại, kèm bức tranh về một trạng thái tương lai tốt hơn. Các con số trên bản đồ là chủ đề của phần này.

Hai vốn từ vựng gặp nhau ở đây. Trong ITIL 4, ấn bản thứ tư của Thư viện Hạ tầng Công nghệ Thông tin, một chuỗi giá trị là một tổ hợp cụ thể của các hoạt động trong chuỗi giá trị dịch vụ [ITIL](https://en.wikipedia.org/wiki/ITIL) (lập kế hoạch, cải tiến, tương tác, thiết kế và chuyển đổi, thu thập và xây dựng, cung cấp và hỗ trợ) được sắp xếp để tạo ra một sản phẩm hoặc dịch vụ cụ thể. Ví dụ là "khôi phục dịch vụ sau một sự cố" và "giao một thay đổi từ ý tưởng đến môi trường thật." ITIL cho bạn biết một chuỗi là gì và ai cần tham gia. Tinh gọn cho bạn biết cách đo nó. Đối ứng linh hoạt là dòng chảy của các hạng mục công việc qua một bảng, mà các đội quản lý dòng chảy đã theo dõi bằng các thước đo như thời gian chu trình (xem chủ đề 2.1, Các thước đo dòng chảy).

Các thước đo tinh gọn rất ít. **Thời gian chờ (lead time)** là tổng thời gian trôi qua từ lúc một yêu cầu được đưa ra đến lúc nó được giao. **Thời gian xử lý**, đôi khi gọi là thời gian chạm, là thời gian ai đó thực sự đang làm việc trên hạng mục. **Thời gian đợi** là thời gian hạng mục nằm giữa các lần làm việc tích cực, trong hàng đợi, trong một phê duyệt hoặc trong một bàn giao. **Phần trăm hoàn chỉnh và chính xác (%C/A)** là tỷ lệ các hạng mục mà giai đoạn kế tiếp có thể dùng đúng như nhận được, mà không phải sửa, bổ sung hay gửi trả lại. **Takt time** là nhịp độ mà chuỗi phải hoàn tất các hạng mục để khớp với nhu cầu của khách hàng, tính bằng thời gian làm việc sẵn có chia cho số hạng mục được yêu cầu trong khoảng thời gian đó. Tỷ lệ giữa thời gian xử lý và thời gian chờ là **hiệu suất quy trình**, mà cuốn sách này coi là dạng chuỗi giá trị của hiệu suất dòng chảy (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy).

Hai mối quan hệ làm các con số hữu ích khi dùng cùng nhau. Thứ nhất, [thời gian chờ](https://en.wikipedia.org/wiki/Lead_time) là tổng của thời gian xử lý và thời gian đợi qua mọi giai đoạn, nên một chuỗi có thời gian chờ hàng tuần và thời gian xử lý hàng ngày chủ yếu là hàng đợi. [Định luật Little](https://en.wikipedia.org/wiki/Little%27s_law) nối hàng đợi đó với công việc đang làm dở và thông lượng, đó là lý do chủ đề 2.3 (Công việc đang làm dở và lý thuyết hàng đợi) là bạn đồng hành tự nhiên. Thứ hai, %C/A nhân dồn. Một chuỗi năm giai đoạn trong đó mỗi giai đoạn chuyển giao 90 phần trăm sản phẩm của mình một cách sạch sẽ chỉ giao ra một kết quả sạch khoảng 59 phần trăm số lần, một tích được biết trong sản xuất là [năng suất thông qua gộp](https://en.wikipedia.org/wiki/Rolled_throughput_yield). Các báo cáo từng giai đoạn đều nói 90 phần trăm. Chuỗi nói điều kém dễ chịu hơn nhiều.

## Nguyên tắc chính

- **Bắt đầu từ yêu cầu của khách hàng và kết thúc ở việc dùng của khách hàng.** Một chuỗi được đo từ "công việc bắt đầu" đến "công việc hợp nhất" giấu sự chờ đợi ở cả hai đầu, thường là phần dài nhất.
- **Tách thời gian chạm khỏi thời gian đợi ở mọi giai đoạn.** Một thời lượng giai đoạn đơn lẻ trộn hai cái và đưa công sức cải tiến đến sai chỗ. Chờ đợi thường là một thuộc tính thiết kế của chuỗi, không phải một thất bại của nỗ lực.
- **Đo chất lượng như độ hoàn chỉnh và chính xác, cũng như tốc độ.** Một giai đoạn nhanh mà gửi công việc trả lại là chậm theo cách nhìn của chuỗi, vì việc làm lại tiêu thụ năng lực và thêm thời gian đợi.
- **Lập bản đồ một chuỗi và một loại hạng mục mỗi lần.** Một bản đồ trộn thay đổi khẩn cấp với yêu cầu thường lệ tạo ra một giá trị trung bình không mô tả cái nào.
- **Báo cáo phân phối và cho thấy mẫu.** Thời gian chờ và thời gian đợi bị lệch, nên hãy cho thấy trung vị và một bách phân vị cao, và nói có bao nhiêu hạng mục và kỳ nào (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).
- **Mô tả các chuỗi, không bao giờ con người.** Các chỉ số giai đoạn xác định nơi công việc chờ. Chúng không bao giờ là bảng xếp hạng các cá nhân hay đội ở mỗi giai đoạn.

## Định nghĩa chỉ số

Các chỉ số dưới đây được định nghĩa cho một chuỗi giá trị có tên và một hạng công việc. Số đếm hạng mục loại trừ các hạng mục bị hủy trừ khi nêu khác. Thời gian xử lý và thời gian đợi được báo cáo cho từng giai đoạn và cộng cho cả chuỗi.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian chờ của chuỗi giá trị | Thời gian trôi qua từ yêu cầu của khách hàng đến lúc khách hàng có thể dùng kết quả | thời điểm xác nhận giao trừ thời điểm yêu cầu được ghi; các hạng mục bị hủy hoặc rút bị loại trừ; báo cáo trung vị và các bách phân vị thứ 85 và 95 | ngày | Bản ghi công cụ ITSM ghép với các sự kiện giao từ đường ống hoặc hệ thống thực hiện | Quản lý yêu cầu dịch vụ; hỗ trợ thay đổi | Thời gian chờ trên bảng của đội | Hằng tháng |
| Thời gian xử lý | Thời gian một hạng mục đang được làm việc tích cực, theo từng giai đoạn và cho cả chuỗi | tổng các khoảng mà hạng mục ở trạng thái tích cực, theo từng giai đoạn; các trạng thái hàng đợi, chờ phê duyệt và bị chặn bị loại trừ | giờ hoặc ngày | Lịch sử trạng thái của trình theo dõi; bản ghi thời gian nơi các trạng thái quá thô | Quản lý sự cố; quản lý yêu cầu dịch vụ | Thời gian chu trình trong các cột "đang tiến hành" | Hằng tháng |
| Thời gian đợi | Thời gian một hạng mục nằm giữa các lần làm việc tích cực, theo từng giai đoạn và cho cả chuỗi | thời gian trôi qua của giai đoạn trừ thời gian xử lý của giai đoạn đó; gồm hàng đợi, phê duyệt, bàn giao và thời gian bị chặn | ngày | Lịch sử trạng thái của trình theo dõi và các thay đổi trạng thái của công cụ ITSM | Hỗ trợ thay đổi; bàn dịch vụ | Thời gian trong các cột hàng đợi; thời gian bị chặn | Hằng tháng |
| Hiệu suất quy trình | Tỷ lệ thời gian chờ là thời gian xử lý | tổng thời gian xử lý qua các giai đoạn / thời gian chờ của chuỗi giá trị cho cùng các hạng mục; các hạng mục còn mở bị loại trừ | phần trăm | Suy ra từ thời gian xử lý và thời gian chờ | Cải tiến liên tục | Hiệu suất dòng chảy | Hằng quý |
| Phần trăm hoàn chỉnh và chính xác (giai đoạn) | Tỷ lệ các hạng mục một giai đoạn nhận được mà nó có thể dùng mà không phải sửa, bổ sung hay trả lại | số hạng mục được chấp nhận đúng như nhận / số hạng mục nhận được trong kỳ; các hạng mục bị trả lại vì bất kỳ lý do nào được tính là không được chấp nhận | phần trăm | Các sự kiện trả lại và mở lại trong trình theo dõi hoặc công cụ ITSM; các buổi rà soát chấp nhận lấy mẫu | Quản lý yêu cầu dịch vụ; hỗ trợ thay đổi; quản lý vấn đề | Định nghĩa sẵn sàng; tỷ lệ làm lại | Hằng tháng |
| Phần trăm hoàn chỉnh và chính xác gộp | Tỷ lệ các hạng mục vượt qua mọi giai đoạn một cách sạch sẽ | tích các giá trị %C/A của các giai đoạn cho một chuỗi và kỳ (ví dụ 0,90 x 0,85 x 0,95); các giai đoạn ngoài chuỗi bị loại trừ | phần trăm | Suy ra từ các giá trị giai đoạn | Cải tiến liên tục | Tỷ lệ lỗi lọt ra ngoài và làm lại xuyên suốt một đường ống | Hằng quý |
| Số lần bàn giao | Số lần một hạng mục chuyển giữa các đội hoặc hàng đợi | số lần đổi đội hoặc hàng đợi sở hữu từ yêu cầu đến lúc giao, theo từng hạng mục; báo cáo trung vị và bách phân vị thứ 85 | số đếm | Lịch sử giao việc trong công cụ ITSM hoặc trình theo dõi | Bàn dịch vụ; quản lý yêu cầu dịch vụ | Phụ thuộc giữa các đội | Hằng quý |
| Tỷ lệ takt time | Nhịp độ của chuỗi có khớp với nhu cầu không | khoảng cách quan sát trung vị giữa các lần hoàn tất / takt time, trong đó takt time là thời gian làm việc sẵn có chia cho số hạng mục được yêu cầu trong cùng kỳ; một tỷ lệ trên 1 nghĩa là chuỗi chậm hơn nhu cầu | tỷ lệ | Số đếm nhu cầu từ hàng đợi tiếp nhận và các sự kiện hoàn tất | Quản lý năng lực và hiệu năng; quản lý mức dịch vụ | Thông lượng so với nhu cầu; dự báo | Hằng quý |

Thời gian xử lý, thời gian đợi và thời gian chờ của từng giai đoạn là các tổng và tỷ lệ trên cùng một tập hạng mục, nên chúng được tính từ các bản ghi cấp hạng mục và không bao giờ bằng cách cộng các giá trị trung bình giai đoạn đã được đo trên các mẫu khác nhau. Takt time áp dụng tốt nhất cho công việc lặp lại được như yêu cầu chuẩn và thay đổi thường lệ, và khớp kém với công việc mà mỗi hạng mục là duy nhất.

## Khuyến nghị

### Chọn chuỗi

**1. Chọn một chuỗi có giá trị và một loại hạng mục, và nêu tên ranh giới của nó.** Các ứng viên đầu tiên tốt là một loại yêu cầu khối lượng lớn, như cấp quyền truy cập hoặc thiết bị, hoặc con đường của một thay đổi thông thường từ phê duyệt đến lúc chạy thật. Hãy viết sự kiện kích hoạt bắt đầu đồng hồ và sự kiện xác nhận việc giao cho khách hàng. Nếu bạn không nêu được cả hai trong một câu mỗi cái, chuỗi chưa được định nghĩa (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ).

**2. Bắt đầu đồng hồ ở yêu cầu của khách hàng và dừng nó ở việc dùng của khách hàng.** Một chuỗi bắt đầu khi một đội chấp nhận công việc và dừng khi đội đánh dấu nó xong đã loại trừ hàng đợi tiếp nhận và độ trễ xác nhận. Đó thường là những lần chờ dài nhất. Nếu dữ liệu cho các ranh giới thật chưa được thu nhận, hãy báo cáo thước đo hẹp hơn với một nhãn trung thực và lên kế hoạch cho công cụ đo (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

### Lập bản đồ trạng thái hiện tại

**3. Đi dọc chuỗi cùng những người làm việc.** Tổ chức một buổi lập bản đồ với một đại diện từ mọi giai đoạn, kể cả phía khách hàng. Vẽ các bước như chúng thực sự xảy ra, rồi so sánh với quy trình có tài liệu. Khoảng cách giữa hai bên tự nó là những phát hiện. Phương pháp được mô tả trong *Learning to See* của Rother và Shook và trong *Value Stream Mapping* của Martin và Osterling.

**4. Ghi thời gian xử lý và thời gian đợi cho từng giai đoạn từ các hạng mục thật.** Lấy một mẫu các hạng mục gần đây, từ 20 trở lên nếu khối lượng cho phép, và theo từng hạng mục qua chuỗi bằng lịch sử trình theo dõi và, khi cần, một cuộc trò chuyện. Ghi lại thời gian chạm và thời gian đợi trước mỗi giai đoạn. Coi mẫu là một ước lượng và nói nó được lấy ra sao. Lặp lại việc lập bản đồ khi chuỗi thay đổi đủ để làm nó mất hiệu lực.

**5. Cho thấy sự chờ đợi như một thanh riêng.** Trên bản đồ và bảng điều khiển, vẽ thời gian xử lý và thời gian đợi như các đoạn riêng cho mỗi giai đoạn. Một giai đoạn có 30 phút thời gian xử lý và bốn ngày đợi trông chẳng giống một giai đoạn có bốn ngày thời gian xử lý, dù thời lượng giai đoạn giống hệt nhau.

### Đo chất lượng dọc theo chuỗi

**6. Đo %C/A tại điểm bàn giao, được định nghĩa bởi giai đoạn nhận.** Đội nhận quyết định "dùng được đúng như nhận" nghĩa là gì, tốt nhất trong một điều kiện chấp nhận ngắn bằng văn bản. Hãy tính một lần trả lại, một yêu cầu bổ sung thông tin thiếu hoặc một lần sửa im lặng là không được chấp nhận. Sửa im lặng là chỗ rò rỉ phổ biến nhất, vì công việc được sửa mà không ai ghi lại rằng nó đã hỏng.

**7. Tính %C/A gộp và so sánh nó với các giá trị giai đoạn.** Nhân các giá trị giai đoạn. Một khoảng cách giữa con số gộp và giai đoạn trông tốt nhất là hiệu ứng nhân dồn của việc làm lại, và nó thường làm cho trường hợp sửa một điểm bàn giao thuyết phục hơn bất kỳ thước đo tốc độ nào. Hãy nối nó với các thước đo làm lại và thay đổi thất bại cho cùng chuỗi (xem chủ đề 4.4, Thay đổi thất bại và làm lại).

### Dùng các con số để quyết định

**8. Cải thiện sự chờ đợi lớn nhất trước, và tìm nguyên nhân của nó ở giao diện.** Xếp hạng các giai đoạn theo thời gian đợi, rồi hỏi hạng mục đang đợi cái gì: một quyết định, một người, một lô, một suất theo lịch, hay một đầu vào còn thiếu. Rồi hỏi liệu sự chờ đó có cần thiết không. [Lý thuyết các ràng buộc](https://en.wikipedia.org/wiki/Theory_of_constraints) cho rằng nhịp độ của chuỗi được đặt bởi giai đoạn chặt nhất của nó, nên cải thiện một giai đoạn không phải ràng buộc thay đổi ít. Sự chờ phê duyệt trong hỗ trợ thay đổi là một trường hợp thường gặp (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

**9. Giảm bàn giao trước khi tối ưu các giai đoạn.** Mỗi bàn giao thêm một hàng đợi, một lần chuyển ngữ cảnh và một cơ hội cho thông tin không đầy đủ. Hãy đếm các bàn giao, rồi kiểm tra liệu một giai đoạn có thể được kết hợp, một quyết định có thể được ủy quyền cho đội làm việc, hay một yêu cầu chuẩn có thể được phê duyệt trước. ITIL 4 mô tả thay đổi chuẩn là các thay đổi được phê duyệt trước, rủi ro thấp, đúng là bước đi này áp dụng cho chuỗi thay đổi.

**10. So sánh nhu cầu và nhịp độ với takt time, chỉ cho công việc lặp lại được.** Tính takt time từ dữ liệu nhu cầu thật của kỳ, rồi so sánh với khoảng cách mà chuỗi thực sự hoàn tất các hạng mục. Một chuỗi chậm hơn takt làm hàng đợi lớn lên, và định luật Little cho bạn biết gần đúng nó lớn nhanh đến đâu. Một chuỗi nhanh hơn takt nhiều có độ dư mà có thể được chuyển hướng. Đừng dùng takt time để đặt mục tiêu cho cá nhân.

### Giữ cho việc đo trung thực

**11. Ghép dữ liệu giữa các công cụ, và nói điều gì là ước lượng.** Chuỗi thường đi qua công cụ ITSM, trình theo dõi vấn đề và đường ống. Hãy ghép theo mã định danh hạng mục, ghi tài liệu quy tắc ghép, và đánh dấu giai đoạn nào đến từ sự kiện hệ thống và giai đoạn nào từ lấy mẫu. Một ước lượng được gắn nhãn là ước lượng hữu ích hơn nhiều so với một con số trông chính xác không rõ nguồn gốc.

**12. Rà soát bản đồ hằng quý, và đọc các hạng mục thô mỗi lần.** Các chuỗi trôi khi các đội tái cơ cấu và công cụ thay đổi. Hãy đặt bản đồ và một quyết định vào chương trình nghị sự của một buổi rà soát thường trực có mặt mọi giai đoạn (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian chờ của chuỗi giá trị | Bắt đầu đồng hồ muộn hơn, ví dụ ở bước phân loại thay vì ở yêu cầu; đóng hạng mục trước khi khách hàng dùng được; tách một yêu cầu thành vài yêu cầu nhỏ | Quy tắc đồng hồ cố định ghi trong sổ đăng ký chỉ số; khách hàng xác nhận việc giao; số hạng mục được mở lại và hạng mục con được liên kết |
| Thời gian xử lý | Ghi các trạng thái nhàn rỗi hoặc bị chặn là tích cực để thời gian xử lý tăng và chuỗi trông hiệu quả; hoặc ghi sự chờ là công việc để trông bận | Quan sát một mẫu hạng mục; so sánh thời gian xử lý với bản ghi thời gian nơi chúng tồn tại; định nghĩa trạng thái được rà soát cùng đội |
| Thời gian đợi | Chuyển sự chờ vào một trạng thái không được theo dõi, như một cuộc trò chuyện riêng, một bảng tính hay một trạng thái "pending" dừng đồng hồ | Báo cáo việc dùng các trạng thái tạm dừng và bị chặn; so sánh tuổi phiếu với dấu thời gian giai đoạn; lấy mẫu hạng mục để tìm sự chờ ngoài hệ thống |
| Hiệu suất quy trình | Rút ngắn thời gian chờ bằng xử lý khẩn cho các hạng mục được đo, hoặc phồng thời gian xử lý để nâng tỷ lệ | Cho thấy thời gian chờ và thời gian xử lý bên cạnh tỷ lệ; báo cáo tỷ lệ xử lý khẩn; không bao giờ đặt mục tiêu cho chính tỷ lệ |
| Phần trăm hoàn chỉnh và chính xác (giai đoạn) | Giai đoạn nhận hạ thấp ngưỡng chấp nhận để ít hạng mục bị trả lại, hoặc giai đoạn gửi đẩy công việc qua bằng các cách lách không chính thức | Điều kiện chấp nhận bằng văn bản; số lỗi và làm lại ở hạ lưu; mẫu các hạng mục được chấp nhận do bên thứ ba rà soát |
| Phần trăm hoàn chỉnh và chính xác gộp | Gộp các giai đoạn để các lần trả lại xảy ra bên trong một giai đoạn và biến mất khỏi số lần bàn giao; chọn một danh sách giai đoạn thuận lợi | Cố định danh sách giai đoạn từ trước; báo cáo thay đổi giai đoạn trong nhật ký quyết định; so sánh với tỷ lệ làm lại của cả chuỗi |
| Số lần bàn giao | Giao lại các hạng mục cho một hàng đợi chung hoặc một người sở hữu gom hết để tránh các lần đổi người sở hữu được đếm; giấu bàn giao trong một "đội" duy nhất bao trùm nhiều đội | Đếm theo hàng đợi và theo vai trò; đọc lịch sử giao việc của các hạng mục lấy mẫu; theo dõi số lần giao lại mỗi hạng mục |
| Tỷ lệ takt time | Tính nhu cầu bị hoãn hoặc bị từ chối là không có nhu cầu; tính hoàn tất một phần là hoàn tất | Báo cáo nhu cầu, nhu cầu bị từ chối và tuổi tồn đọng bên cạnh tỷ lệ; chỉ tính hoàn tất khi khách hàng xác nhận |

Một kết quả đọc lành mạnh cho thấy thời gian chờ và thời gian xử lý hợp lý so với mẫu, thời gian đợi rõ ràng là phần lớn hơn và đang dần co lại, các giá trị %C/A có điều kiện chấp nhận bằng văn bản đứng sau, và số lần bàn giao chỉ giảm khi một quyết định hay bước thật sự được loại bỏ. Nếu thời gian chờ cải thiện trong khi %C/A gộp giảm, chuỗi đang đẩy công việc qua nhanh hơn bằng cách chuyển chi phí xuống hạ lưu, đúng là mẫu hình mà các rào chắn tồn tại để bắt (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Lập bản đồ qua hội thảo với một mẫu | Nhanh, cho thấy toàn bộ chuỗi, xây dựng sự hiểu biết chung giữa các đội | Một ảnh chụp cũ nhanh; thiên lệch mẫu; phụ thuộc vào người tham gia trung thực |
| Đo tự động từ sự kiện công cụ | Liên tục, khách quan, hỗ trợ bách phân vị và xu hướng | Chỉ thấy những gì công cụ ghi; sự chờ ngoài hệ thống và sửa im lặng vô hình |
| Ranh giới khách hàng đầu-cuối | Phản ánh trải nghiệm; làm lộ độ trễ tiếp nhận và xác nhận | Cần dữ liệu từ nhiều hệ thống và một mã định danh hạng mục chung |
| So sánh takt time và nhu cầu | Gắn nhịp độ với nhu cầu thật; làm mức tăng hàng đợi dự đoán được | Yếu với công việc duy nhất, không lặp lại; cần số đếm nhu cầu đáng tin |
| %C/A gộp | Cho thấy việc làm lại nhân dồn qua các bàn giao ra sao | Cần thống nhất điều kiện chấp nhận; dễ tranh cãi về định nghĩa |

Hãy dùng buổi lập bản đồ để học hình dạng của chuỗi và đo tự động để theo dõi nó. Hãy dùng các thước đo ranh giới đội làm đầu vào và các thước đo ranh giới khách hàng làm phán quyết. Cái giá của cách tiếp cận là cuộc trò chuyện liên đội mà nó buộc phải có, cũng là lợi ích chính của nó.

## Câu hỏi để thảo luận với đội nhóm

**1. Đồng hồ của khách hàng bắt đầu và dừng ở đâu trong yêu cầu phổ biến nhất của chúng ta, và báo cáo của chúng ta có khớp không?**
Chọn một loại yêu cầu và truy nó trên bảng trắng từ lúc khách hàng hỏi đến lúc họ dùng được kết quả. Đánh dấu nơi báo cáo hiện tại của chúng ta bắt đầu và dừng đếm. Người điều phối nên tìm khoảng trống ở mỗi đầu, vì hàng đợi tiếp nhận và độ trễ xác nhận thường xuyên bị bỏ ra. Thống nhất liệu có đổi báo cáo hay gắn nhãn nó là một góc nhìn một phần.

**2. Với mỗi giai đoạn trong chuỗi của chúng ta, bao nhiêu thời gian trôi qua là có ai đó đang làm việc trên hạng mục?**
Lấy năm hạng mục gần đây và dựng lại lịch sử của từng cái. Ước lượng thời gian chạm và thời gian đợi cho mỗi giai đoạn, và so sánh các tổng. Hầu hết các nhóm ngạc nhiên về việc có bao nhiêu ít thời gian trôi qua là công việc. Hỏi mỗi lần chờ dài đang chờ cái gì, và chống lại câu trả lời đầu tiên, thường là "mọi người đang bận." Ghi lại những lần chờ nào trông như lựa chọn thiết kế hơn là giới hạn năng lực.

**3. Giai đoạn kế tiếp cần gì từ chúng ta, và làm sao chúng ta biết nó bị thiếu?**
Nhờ một đại diện của giai đoạn nhận nêu điều kiện chấp nhận bằng lời giản dị. So sánh nó với điều mà giai đoạn gửi tin rằng mình cung cấp. Đếm số lần trong tháng qua công việc bị trả lại, bị người khác hoàn tất, hay được sửa một cách im lặng. Cuộc thảo luận thường tạo ra một danh sách kiểm tra nhỏ loại bỏ một lần trả lại lặp lại.

**4. Bàn giao nào tồn tại vì lịch sử hơn là vì nhu cầu?**
Liệt kê các bàn giao trên bản đồ và hỏi vì sao mỗi cái tồn tại. Một số là thật: một kỹ năng, một kiểm soát, một sự tách biệt nhiệm vụ. Số khác tồn tại vì một ranh giới đội đã được vạch ra nhiều năm trước. Chọn một bàn giao để loại bỏ, ủy quyền hay phê duyệt trước, và nêu tên ai phải đồng ý.

**5. Nếu chúng ta cải thiện giai đoạn mà ai cũng phàn nàn, khách hàng có nhận ra không?**
So sánh giai đoạn thu hút nhiều chú ý nhất với giai đoạn giữ lần chờ dài nhất. Lý thuyết các ràng buộc gợi ý rằng cải thiện một giai đoạn không phải ràng buộc thay đổi ít với khách hàng. Hỏi điều gì phải đúng để giai đoạn ồn ào nhất cũng là giai đoạn chậm nhất. Người điều phối nên giúp nhóm thống nhất cách kiểm thử câu trả lời bằng dữ liệu.

**6. Làm sao ai đó có thể làm chuỗi này trông tốt hơn mà không làm nó tốt hơn?**
Đi qua bảng các vectơ lợi dụng cùng nhóm. Với mỗi chỉ số, hỏi một người chịu áp lực có thể làm gì và đội sẽ thấy gì nếu họ làm vậy. Thống nhất giá trị đọc rào chắn nào sẽ được rà soát mỗi lần và ai sở hữu nó. Mục đích là một thói quen kiểm tra chung, không phải một cuộc săn thủ phạm.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối thường thấy rõ các giai đoạn của mình và thấy chuỗi kém. Một góc nhìn chuỗi giá trị cho họ thấy một thay đổi đã xong phải chờ rà soát, phê duyệt, một suất phát hành hay một cửa sổ triển khai bao lâu, và bao nhiêu trong đó nằm ngoài tầm kiểm soát của họ. Họ được lợi từ %C/A tại các điểm bàn giao của mình, vì nó biến những lời than vãn mơ hồ về "yêu cầu tồi" hay "rà soát trễ" thành các sự kiện được đếm. Họ nên cảnh giác với việc cải thiện thời gian chu trình của riêng mình bằng cái giá của giai đoạn nhận (xem chủ đề 2.8, Chỉ số DORA).

### Đội dịch vụ và vận hành

Các đội vận hành sở hữu nhiều hàng đợi: tiếp nhận ở bàn dịch vụ, phê duyệt thay đổi, lịch phát hành, bàn giao trực ca. Họ được lợi từ các thay đổi chuẩn được phê duyệt trước, các điều kiện chấp nhận rõ ràng cho công việc đến và một góc nhìn về bàn giao nào thêm nhiều thời gian đợi nhất. Họ cũng nên chờ đợi trở thành giai đoạn nhận trong một thước đo %C/A, và định nghĩa một bàn giao đầy đủ trông ra sao. Các hạng mục của họ thường mang các đồng hồ nghiêm ngặt của riêng chúng, nên thước đo chuỗi nằm bên cạnh, và không thay thế, các thước đo mức dịch vụ.

### Lãnh đạo và quản trị

Lãnh đạo bảo trợ thay đổi liên đội và quyết định một chuỗi có người sở hữu có tên hay không. Họ nên yêu cầu thời gian chờ của chuỗi từ quan điểm của khách hàng và lần chờ lớn nhất, thay vì một thẻ điểm từng giai đoạn. Các cơ quan quản trị phê duyệt công việc tự chúng là các giai đoạn, và thời gian đợi của chúng thuộc về bản đồ. Đặt mục tiêu trên tỷ lệ giữa thời gian xử lý và thời gian chờ mời gọi các vectơ được mô tả ở trên, nên hãy dùng nó để hướng việc tìm hiểu (xem chủ đề 6.5, Hiện thực hóa giá trị và kết quả kinh doanh).

### Khách hàng và người dùng

Khách hàng trải nghiệm thời gian chờ và việc làm lại, và họ hiếm khi thấy các giai đoạn. Đóng góp hữu ích nhất của họ là xác nhận khi nào kết quả dùng được và nói họ phải làm gì để có nó, như nộp lại một biểu mẫu. Các báo cáo hướng tới khách hàng nên nêu điểm bắt đầu và dừng của đồng hồ bằng lời giản dị. Khách hàng cũng được lợi khi chuỗi công bố một trung vị trung thực và một bách phân vị cao, vì một lời hứa chỉ dựa trên trung vị làm thất vọng một trong vài yêu cầu.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một công ty bảo hiểm cỡ vừa giao các thay đổi thông thường cho nền tảng quản trị hợp đồng bảo hiểm của mình. Khách hàng trong doanh nghiệp phàn nàn rằng "những thay đổi nhỏ mất hơn một tháng." Mọi con số trong ví dụ này chỉ mang tính minh họa.

Bộ phận lập bản đồ chuỗi từ lúc một chủ doanh nghiệp nộp yêu cầu thay đổi đến lúc chủ đó xác nhận thay đổi đã chạy thật. Một mẫu 20 thay đổi thông thường gần đây cho bảng giai đoạn dưới đây, dùng các giá trị trung vị minh họa cho từng giai đoạn.

| Giai đoạn | Thời gian xử lý (ngày) | Thời gian đợi (ngày) | %C/A (minh họa) |
| --- | --- | --- | --- |
| Tiếp nhận và phân loại | 0,5 | 6 | 85 |
| Xây dựng | 1,5 | 5 | 90 |
| Kiểm thử | 0,5 | 8 | 80 |
| Phê duyệt thay đổi | 0,25 | 9 | 70 |
| Triển khai và xác nhận | 0,25 | 4 | 95 |
| Tổng của chuỗi | 3,0 | 32 | 41 (gộp) |

Thời gian chờ của chuỗi trong mẫu là khoảng 35 ngày, nên hiệu suất quy trình xấp xỉ 9 phần trăm. %C/A gộp là khoảng 41 phần trăm, tích của năm giá trị giai đoạn, nên chưa đến một nửa các thay đổi đi qua mọi giai đoạn mà không bị trả lại. Giai đoạn phê duyệt thay đổi trông khiêm tốn nếu chỉ xét %C/A, nhưng 9 ngày đợi của nó là hàng đợi đơn lẻ dài nhất, và 30 phần trăm thay đổi đến đó với thông tin rủi ro bị thiếu, mà hội đồng gửi trả lại.

Đội đưa ra hai quyết định. Thứ nhất, họ phân loại mười loại thay đổi rủi ro thấp thường gặp nhất là thay đổi chuẩn với các quy trình được phê duyệt trước, để chúng bỏ qua hội đồng. Thứ hai, biểu mẫu tiếp nhận có thêm các trường rủi ro mà hội đồng luôn hỏi, và một danh sách kiểm tra chấp nhận ngắn được thống nhất với hội đồng. Những lựa chọn này giải quyết sự chờ đợi lớn nhất và sự trả lại nhân dồn lớn nhất, thay vì giai đoạn xây dựng, nơi đội đã được yêu cầu "đi nhanh hơn".

Ba tháng sau, thời gian chờ trung vị của hạng được lấy mẫu giảm và thời gian đợi phê duyệt co lại, trong khi %C/A gộp tăng. Rủi ro lợi dụng xuất hiện vào tháng thứ ba. Một đội sản phẩm tách vài yêu cầu thành hai hoặc ba yêu cầu nhỏ hơn, vì các hạng mục nhỏ đủ điều kiện là thay đổi chuẩn, và thời gian chờ mỗi hạng mục giảm mạnh. Người rà soát nhận thấy số hạng mục con được liên kết tăng và sự xác nhận của khách hàng trên mỗi yêu cầu gốc không cải thiện. Bộ phận giữ thời gian chờ, nhưng định nghĩa lại hạng mục là yêu cầu gốc của khách hàng, để việc tách không còn giúp ích. Nhật ký quyết định ghi lại thay đổi định nghĩa và tính lại quý trước theo cùng quy tắc.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Một chuỗi giá trị vượt qua ranh giới đội, nơi phân phối liên tục thường bị đình trệ. Một bước thực tế là lập bản đồ một chuỗi cùng những người làm việc trong đó và các bên liên quan của họ, đánh dấu sự chờ đợi giữa các giai đoạn, và chọn một bàn giao để cải thiện. Điều cần lưu ý là một bản đồ làm một lần rồi cất đi sẽ cũ, nên hãy xem lại nó khi công việc thay đổi.

### AI

AI có thể tăng tốc một giai đoạn, như soạn thảo hay phân loại, trong khi công việc sau đó chờ lâu hơn ở giai đoạn kế tiếp. Hãy đo cả chuỗi trước và sau một thay đổi AI, không chỉ giai đoạn nhận công cụ, và ghép thời gian chờ đầu-cuối với phần trăm hoàn chỉnh và chính xác ở mỗi bàn giao. Điều cần lưu ý là những lợi ích cục bộ từ AI có thể che giấu một thời gian chờ tổng dài hơn.

### Tự động hóa

Hãy đo các sự kiện vào và ra của giai đoạn một cách tự động để chuỗi được đo từ dấu thời gian thật. Hãy đo tự động hóa theo thời gian xử lý và thời gian đợi nó loại bỏ và theo việc làm lại nó tạo ra ở hạ lưu. Điều cần lưu ý là tự động hóa một giai đoạn mà không sửa bàn giao sau nó dịch chuyển hàng đợi mà không rút ngắn chuỗi.

### Phân tích

Hãy cho thấy hiệu suất quy trình như một xu hướng và chia thời gian chờ thành chạm và đợi theo từng giai đoạn. Quyết định được cung cấp thông tin là sửa bàn giao nào trước. Điều cần lưu ý là định nghĩa giai đoạn khác nhau giữa các đội, nên hãy thống nhất ranh giới trước khi so sánh, và tránh xếp hạng các đội theo thời gian giai đoạn.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một chuỗi ngắn với ít bàn giao có ít thứ để lập bản đồ, và thước đo hữu ích nhất đơn giản là thời gian trôi qua từ yêu cầu của khách hàng đến việc dùng của khách hàng. Hãy vẽ chuỗi lên tường, đọc các hạng mục thô, và chú ý bàn giao đầu tiên xuất hiện khi đội lớn lên. Hãy chống lại việc xây công cụ trước khi chuỗi ổn định.

**Doanh nghiệp nhỏ.** Một hoặc hai người thường đảm nhiệm nhiều giai đoạn, nên bàn giao là giữa các vai trò hoặc công cụ chứ không phải giữa các đội. Báo cáo của trình theo dõi hoặc bàn dịch vụ cho thời gian chờ một cách rẻ, và một mẫu mười hạng mục làm lộ sự chờ đợi. Hãy hỏi các nhà cung cấp, như một nhà cung cấp dịch vụ được quản lý, về thời gian giai đoạn của họ, vì hàng đợi của nhà cung cấp thường là lần chờ dài nhất.

**Doanh nghiệp lớn.** Các chuỗi dài với nhiều đội và cổng phê duyệt là nơi %C/A gộp và số lần bàn giao mang lại nhiều nhất. Hãy giao một người sở hữu cho mỗi chuỗi chính, lập bản đồ chung với mọi giai đoạn có đại diện, và dùng một mã định danh hạng mục chung để các công cụ có thể được ghép. Các bộ phận khác nhau sẽ dùng cùng từ cho các đồng hồ khác nhau, nên hãy công bố một định nghĩa cho mỗi thước đo và giữ một nhật ký thay đổi.

**Chính phủ và khu vực công.** Các phê duyệt theo luật, bước mua sắm và kiểm soát kiểm toán tạo thành các giai đoạn chính đáng không thể bỏ, và chúng thường giữ những lần chờ dài nhất. Hãy lập bản đồ chúng một cách trung thực, tách sự chờ bắt buộc khỏi sự chờ có thể tránh được, và cho thấy phần bắt buộc với những người đặt ra quy tắc. Giữ dấu vết kiểm toán của dữ liệu và của mọi thay đổi định nghĩa (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là chờ đợi thường là phần lớn nhất của thời gian chờ và rẻ nhất để giảm, vì cách sửa thường là một quyết định, một quy tắc hay một bàn giao thay vì thêm năng lực. Khách hàng cảm nhận thời gian chờ trực tiếp, và tổ chức trả giá cho việc làm lại bằng năng lực không bao giờ hiện trên báo cáo giai đoạn. Giảm bàn giao và các lần trả lại cũng giảm các kiểu thất bại sau này trở thành sự cố.

Chi phí khiêm tốn và chủ yếu là con người: vài giờ của nhiều người cho buổi lập bản đồ và mẫu, một mã định danh hạng mục chung giữa các công cụ (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo), và một ít thời gian của nhà phân tích mỗi tháng. Chi phí lớn hơn là cuộc trò chuyện liên đội và sự sẵn lòng thay đổi một quy tắc mà ai đó sở hữu.

Lợi tức hiện ra dưới dạng thời gian chờ ngắn hơn và dễ đoán hơn, %C/A gộp tăng, ít hạng mục bị trả lại hơn và năng lực được giải phóng khỏi việc làm lại. Đừng dự báo một tỷ lệ phần trăm cải thiện từ các nghiên cứu điển hình đã công bố. Hãy ước lượng lợi tức từ chuỗi của chính bạn: khối lượng hạng mục, thời gian đợi hiện tại, chi phí của sự chậm trễ với khách hàng theo cách bạn nêu được tốt nhất, và số giờ làm lại bạn đếm được. Khung Flow và tài liệu tinh gọn mô tả mẫu hình, và không cái nào cung cấp một chuẩn so sánh áp dụng được cho chuỗi của bạn (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Lập bản đồ một giai đoạn thay vì một chuỗi.** Một bản đồ chi tiết đẹp đẽ về công việc của một đội để các lần chờ dài nhất ra ngoài trang. Hãy lập bản đồ từ yêu cầu của khách hàng đến việc dùng của khách hàng, và chỉ thêm chi tiết nơi có sự chờ đợi.
- **Lấy trung bình thời gian giai đoạn từ các mẫu khác nhau.** Tổng các giá trị trung bình giai đoạn không phải là giá trị trung bình của chuỗi. Hãy tính các thước đo chuỗi từ bản ghi cấp hạng mục và báo cáo trung vị và bách phân vị.
- **Coi thời gian đợi là vấn đề công sức.** Bảo mọi người làm nhanh hơn hiếm khi rút ngắn một hàng đợi. Hãy hỏi hạng mục đang đợi cái gì và sự chờ có cần thiết không.
- **Tối ưu hiệu suất quy trình như một mục tiêu.** Một khi tỷ lệ trở thành mục tiêu, thời gian xử lý bị độn thêm hoặc thời gian chờ bị cắt bằng mánh khóe. Hãy dùng nó như một lời nhắc tìm hiểu và ghép nó với thời gian chờ đã được khách hàng xác nhận.
- **Đo %C/A mà không có điều kiện chấp nhận bằng văn bản.** Không có nó, mỗi lần trả lại là một cuộc tranh cãi. Hãy để giai đoạn nhận viết điều kiện và giữ nó ngắn.
- **Để việc làm lại im lặng không được ghi lại.** Nếu một giai đoạn sửa công việc đến mà không ghi lại, %C/A bị phóng đại và giai đoạn gửi không bao giờ học được. Hãy ghi lại mọi sửa chữa như một lần trả lại.
- **Dùng thước đo chuỗi để xếp hạng đội hoặc người.** Chúng mô tả hệ thống, và lần chờ lớn nhất hiếm khi là lỗi của một đội. Hãy báo cáo theo giai đoạn và chuỗi, và rà soát kết quả khi mọi giai đoạn có mặt.
- **Lập bản đồ một lần rồi không bao giờ làm lại.** Các chuỗi trôi. Hãy rà soát bản đồ theo lịch và sau bất kỳ cuộc tái cơ cấu hay thay đổi công cụ nào.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa chuỗi và đồng hồ | Chuỗi chưa được định nghĩa; mỗi đội đo giai đoạn của riêng mình | Một chuỗi được một đội lập bản đồ; đồng hồ khác với các đội khác | Điểm bắt đầu và dừng bằng văn bản cho mỗi chuỗi chính, từ yêu cầu của khách hàng đến việc dùng của khách hàng | Quy tắc đồng hồ được rà soát, thay đổi được ghi lại, lịch sử được tính lại khi định nghĩa thay đổi | Định nghĩa được sửa giữa các đội và nhà cung cấp khi chuỗi và nhu cầu thay đổi |
| Thời gian xử lý và thời gian đợi | Chỉ biết thời gian trôi qua | Lấy mẫu bằng tay cho một chuỗi | Thu thập từ sự kiện công cụ với một mô hình trạng thái có tài liệu và ước lượng được gắn nhãn | Theo dõi xu hướng bằng bách phân vị, việc giảm thời gian đợi được tài trợ và theo dõi | Thời gian đợi giữa các nhà cung cấp và đội được quản lý chung, với các hàng đợi chung hiển thị |
| Chất lượng dọc theo chuỗi | Việc làm lại được nhận thấy nhưng không được đếm | Các lần trả lại được đếm ở một số giai đoạn | Điều kiện chấp nhận bằng văn bản và %C/A giai đoạn được cho các đội sở hữu thấy | %C/A gộp được theo dõi xu hướng và ghép với các thước đo làm lại và thất bại | Điều kiện chấp nhận do bên gửi và bên nhận cùng sở hữu và gắn với kết quả của khách hàng |
| Sử dụng trong cải tiến | Lập bản đồ làm một lần rồi cất đi | Thỉnh thoảng một buổi hội thảo dẫn đến một bản sửa cục bộ | Rà soát hằng quý với mọi giai đoạn có mặt | Lần chờ hoặc lần trả lại lớn nhất được xử lý mỗi quý với một người sở hữu | Ý tưởng cải tiến đến từ mọi giai đoạn, với quyết định được ghi lại và kết quả được kiểm tra |

## Danh sách kiểm tra

- [ ] Một chuỗi giá trị và một loại hạng mục được nêu tên, kèm một người sở hữu chuỗi.
- [ ] Điểm bắt đầu và dừng của đồng hồ được viết theo yêu cầu của khách hàng và việc dùng của khách hàng.
- [ ] Bản đồ trạng thái hiện tại được dựng với một đại diện của mọi giai đoạn, gồm cả phía khách hàng.
- [ ] Thời gian xử lý và thời gian đợi được ghi riêng cho mỗi giai đoạn từ một mẫu các hạng mục thật.
- [ ] Thời gian giai đoạn và chuỗi được báo cáo là trung vị và một bách phân vị cao, với cỡ mẫu được hiển thị.
- [ ] Mỗi giai đoạn nhận có một điều kiện chấp nhận bằng văn bản, và các lần trả lại được ghi lại.
- [ ] Phần trăm hoàn chỉnh và chính xác gộp được tính từ các giá trị giai đoạn.
- [ ] Các bàn giao được đếm và lần chờ lớn nhất có một người sở hữu có tên và một thử nghiệm đã lên kế hoạch.
- [ ] Mỗi chỉ số có vectơ lợi dụng và rào chắn được rà soát cùng đội.
- [ ] Bản đồ và mẫu được rà soát theo lịch, và thay đổi định nghĩa được ghi lại.

## Lời nhắc AI

**Soạn hướng dẫn phỏng vấn cho việc lập bản đồ chuỗi giá trị.**

```text
I am mapping the value stream for [stream name], from [start event] to [end
event], for the item class [item class]. The teams involved are [list of
teams]. Draft an interview guide for a mapping workshop: questions for each
stage about process time, wait time, handoffs, returns, and acceptance
conditions, plus questions for the customer side. Do not invent timings or
benchmark values. List your assumptions and the data I should collect to check
the answers.
```

**Tính các thước đo chuỗi từ một mẫu.**

```text
Here is a sample of [number] items with stage entry and exit times, active and
waiting states, and returns: [paste data or describe the columns]. Calculate
lead time, process time, wait time, process efficiency, stage percent complete
and accurate, and rolled percent complete and accurate, and show the formulas
used. Report medians and the [percentile] percentile. Flag items with missing
timestamps and say how you handled them. Do not fill gaps with invented values.
List your assumptions.
```

**Tìm rủi ro lợi dụng trong một bảng điều khiển chuỗi.**

```text
Our stream dashboard shows [list metrics] for [stream name], and teams are
reviewed against [targets or none]. For each metric, list plausible ways the
number could improve without the stream improving, the signals that would reveal
each, and a guardrail metric or practice that would catch it. Focus on [stage
or handoff of concern]. Do not suggest ranking individuals and do not invent
thresholds. List your assumptions.
```

**Viết một điều kiện chấp nhận cho một bàn giao.**

```text
The sending stage is [sender team] and the receiving stage is [receiver team].
Items are [item type], and the most common reasons they are returned are
[reasons]. Draft a short acceptance condition of no more than [number] checks
that the receiver can apply, and a way to record returns so percent complete and
accurate can be calculated. Keep the wording neutral and do not assign blame.
List your assumptions and the questions I should ask both teams.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một chỉ số trên bản đồ chuỗi của bạn và rào chắn nên nằm bên cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chủ đề chỉ số đã sửa nêu các đồng hồ, vectơ lợi dụng và tham chiếu chéo của nó.

## Điểm chính cần nhớ

- Đo chuỗi từ yêu cầu của khách hàng đến việc dùng của khách hàng, vì các thước đo ranh giới đội che giấu những lần chờ dài nhất.
- Tách mỗi giai đoạn thành thời gian xử lý và thời gian đợi, và tìm nguyên nhân của lần chờ lớn nhất ở giao diện giữa các đội.
- Phần trăm hoàn chỉnh và chính xác nhân dồn qua các giai đoạn, nên giá trị gộp thường thấp hơn bất kỳ báo cáo giai đoạn nào gợi ý.
- Giảm bàn giao và phê duyệt trước công việc thường lệ trước khi thúc các giai đoạn đi nhanh hơn.
- Quan sát một mẫu các hạng mục thật cùng với dữ liệu công cụ, báo cáo bách phân vị, và gắn nhãn các ước lượng.
- Ghép mọi thước đo chuỗi với rào chắn của nó, và dùng các thước đo để mô tả hệ thống, không bao giờ để xếp hạng con người.

## Tài liệu tham khảo và đọc thêm

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
