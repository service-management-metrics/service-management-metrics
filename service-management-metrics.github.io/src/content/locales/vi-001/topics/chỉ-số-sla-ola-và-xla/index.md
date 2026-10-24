# Chỉ số SLA, OLA và XLA

**Một thỏa thuận mức dịch vụ nói với khách hàng điều gì đã được hứa, một thỏa thuận mức vận hành nói với các đội nội bộ họ nợ nhau điều gì, và một thỏa thuận mức trải nghiệm nói với bạn liệu những người dùng dịch vụ có thực sự tốt hơn không, nên bạn cần cả ba và cần báo cáo chúng trung thực thay vì một bức tường màu xanh.**

## Tổng quan và động lực

Một [thỏa thuận mức dịch vụ (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) là một cam kết có tài liệu giữa nhà cung cấp dịch vụ và khách hàng về những gì dịch vụ sẽ giao: giờ hoạt động, tính sẵn sàng, nhà cung cấp phản hồi và giải quyết sự cố nhanh đến đâu, và thực hiện yêu cầu nhanh ra sao. Trong ITIL 4 (ấn bản 2019 của khung do chủ sở hữu công bố, nay là AXELOS thuộc PeopleCert), thực hành [quản lý mức dịch vụ](https://en.wikipedia.org/wiki/ITIL) định nghĩa các mục tiêu này, giám sát chúng và báo cáo về chúng. Một [thỏa thuận mức vận hành (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) là đối ứng nội bộ: một thỏa thuận giữa các đội trong cùng một tổ chức, ví dụ giữa bàn dịch vụ và đội mạng, về việc mỗi bên sẽ làm gì và nhanh đến đâu để SLA hướng khách hàng có thể đạt được. Một hợp đồng nền (underpinning contract) đóng vai trò tương tự cho một nhà cung cấp bên ngoài (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).

Một thỏa thuận mức trải nghiệm (XLA) là cái mới nhất trong ba cái. Nó ghi lại một kết quả đã thống nhất theo cách mọi người trải nghiệm dịch vụ, như họ hoàn thành công việc dễ đến đâu, họ cảm thấy thế nào về tương tác, và dịch vụ có giúp họ đạt mục tiêu không. Ý tưởng đã lớn lên trong thực hành quản lý dịch vụ vì một SLA có thể đạt được trong khi người dùng không hài lòng. Chủ đề này sở hữu ba thỏa thuận và việc báo cáo chúng. Chiều sâu về cách đo trải nghiệm thuộc chủ đề 6.2, Thỏa thuận mức trải nghiệm, và các đối ứng kỹ thuật của các mục tiêu thuộc chủ đề 5.2, SLI, SLO và ngân sách lỗi.

Ba khái niệm linh hoạt và độ tin cậy đứng cạnh các thỏa thuận này. Một [chỉ báo mức dịch vụ (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) là một thuộc tính đo được của dịch vụ, như tỷ lệ yêu cầu được phục vụ thành công. Một [mục tiêu mức dịch vụ (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) là mục tiêu nội bộ cho một SLI, thường chặt hơn bất cứ điều gì hứa với khách hàng. Thực hành [kỹ thuật độ tin cậy của trang (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) coi SLO, và ngân sách lỗi theo sau nó, là công cụ ra quyết định chung cho sản phẩm và vận hành. SLA là hợp đồng; SLO là mục tiêu kỹ thuật; SLI là phép đo. Giữ ba thứ tách biệt tránh được một sự lẫn lộn phổ biến, trong đó một điều khoản phạt hợp đồng được dùng để lái các quyết định kỹ thuật hằng ngày.

Họ này có một thất bại nổi tiếng gọi là báo cáo dưa hấu: một báo cáo xanh bên ngoài và đỏ bên trong. Mọi dòng SLA đều đạt, vậy mà khách hàng vẫn bực bội, vì các thước đo được chọn theo điều nhà cung cấp đạt được đáng tin cậy thay vì điều khách hàng quan tâm, hoặc vì giá trị trung bình giấu cái đuôi tồi, hoặc vì đồng hồ bị tạm dừng suốt phần chờ tệ nhất. Phương thuốc một phần là kỹ thuật (bách phân vị, đồng hồ trung thực, chỉ báo lấy người dùng làm trung tâm) và một phần là xã hội (thỏa thuận được thương lượng như một cuộc trò chuyện, rà soát theo nhịp, và đọc như một câu hỏi về dịch vụ, không phải một phán quyết về một đội). Cảnh báo rộng hơn về các thước đo biến thành mục tiêu nằm trong chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số.

Các đội linh hoạt nghĩ bằng mục tiêu và ngân sách; người quản lý mức dịch vụ ITIL nghĩ bằng thỏa thuận và rà soát. Hai góc nhìn khớp nhau: thỏa thuận nêu kết quả, các mục tiêu và chỉ báo là cách đội giữ lời hứa, và các thước đo trải nghiệm xác nhận rằng nó có ý nghĩa.

Một thuật ngữ cuối: một [bách phân vị](https://en.wikipedia.org/wiki/Percentile) là giá trị mà một tỷ lệ nhất định các quan sát nằm dưới. Bách phân vị thứ 85 của thời gian giải quyết là khoảng thời gian trong đó 85 phần trăm phiếu được giải quyết. Hầu hết mục tiêu SLA được viết dưới dạng một bách phân vị hoặc một tỷ lệ, nên cách bách phân vị được tính và cái gì được đưa vào là cốt lõi của chủ đề (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

## Nguyên tắc chính

- **Thống nhất kết quả với khách hàng, rồi đo chúng.** Một thỏa thuận là một phát biểu được thương lượng về điều khách hàng cần và nhà cung cấp duy trì được, viết bằng lời của khách hàng và cùng nhau rà soát.
- **Báo cáo phân phối và tỷ lệ, không bao giờ một giá trị trung bình duy nhất.** Một thời gian giải quyết trung bình đạt mục tiêu có thể nằm trên một cái đuôi dài các công việc rất muộn. Hãy nêu bách phân vị, quần thể và số đếm.
- **Làm cho đồng hồ trung thực.** Mỗi mục tiêu có một sự kiện bắt đầu, một sự kiện dừng và một danh sách điều kiện tạm dừng. Hãy công bố quy tắc đồng hồ, và báo cáo mỗi lần tạm dừng được dùng thường xuyên đến đâu.
- **Xếp lớp các thỏa thuận.** SLA được xây trên các OLA và hợp đồng nhà cung cấp, và các mục tiêu đặt trong đội nên chặt hơn các lời hứa bên ngoài. Một khoảng trống ở bất kỳ lớp nào hiện ra thành một vi phạm ở trên cùng.
- **Ghép mọi thước đo vận hành với một thước đo trải nghiệm.** Một mục tiêu đạt mà trải nghiệm kém, hay ngược lại, là tín hiệu hữu ích nhất trong báo cáo.
- **Đếm cả các suýt vi phạm.** Công việc xong sát trong giới hạn cho bạn biết về rủi ro nhiều hơn công việc xong xa bên trong.
- **Báo cáo về đội và dịch vụ, không bao giờ về con người.** Thỏa thuận mô tả điều một dịch vụ hoặc một đội cam kết. Chúng không phải cách để xếp hạng cá nhân.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ đạt SLA | Tỷ lệ hạng mục được đo (sự cố, yêu cầu hoặc khung thời gian) đạt một mục tiêu SLA nêu rõ trong kỳ | Số hạng mục đạt mục tiêu chia cho số hạng mục được đo. Đồng hồ bắt đầu ở thời điểm ghi nhật ký được định nghĩa trong thỏa thuận (ví dụ tạo phiếu) và dừng ở sự kiện dừng được định nghĩa (ví dụ xác nhận khôi phục). Loại trừ: hạng mục bị hủy do trùng lặp và thời gian trong các trường hợp loại trừ đã thống nhất như bảo trì theo lịch. Báo cáo số đếm cạnh tỷ lệ | Phần trăm, kèm n | Dấu thời gian của công cụ ITSM; dữ liệu giám sát cho mục tiêu dựa trên thời gian | Quản lý mức dịch vụ; quản lý sự cố; quản lý yêu cầu dịch vụ | Mức đạt mục tiêu mức dịch vụ trên một cửa sổ trượt (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi) | Hằng tháng, kèm cái nhìn nội bộ hằng tuần |
| Tỷ lệ suýt vi phạm | Tỷ lệ hạng mục đạt mục tiêu nhưng xong trong một phần mười cuối của thời gian cho phép | Số hạng mục xong ở 90 phần trăm thời gian mục tiêu trở lên mà vẫn trong giới hạn, chia cho số hạng mục đạt mục tiêu. Cùng đồng hồ với SLA. Không áp dụng cho khung thời gian (chỉ áp dụng cho thước đo thời gian đến mục tiêu) | Phần trăm | Dấu thời gian của công cụ ITSM | Quản lý mức dịch vụ | Tỷ lệ công việc gần kỳ vọng mức dịch vụ trên biểu đồ dòng chảy (xem chủ đề 2.1, Các thước đo dòng chảy) | Hằng tháng |
| Tỷ lệ tạm dừng đồng hồ | Tỷ lệ tổng thời gian phiếu đã trôi qua nằm trong các trạng thái tạm dừng đồng hồ SLA | Tổng thời gian tạm dừng chia cho tổng thời gian trôi qua từ lúc bắt đầu đến lúc dừng, cho các hạng mục trong phạm vi. Loại trừ hạng mục không dùng trạng thái tạm dừng nào. Báo cáo theo trạng thái tạm dừng | Phần trăm | Lịch sử trạng thái của công cụ ITSM | Quản lý mức dịch vụ; quản lý sự cố | Thời gian bị chặn và thời gian đợi trong cái nhìn dòng chảy (xem chủ đề 2.4, Chỉ số chuỗi giá trị) | Hằng tháng |
| Tỷ lệ đạt OLA | Tỷ lệ bàn giao nội bộ đạt mục tiêu OLA giữa hai đội | Số bàn giao hoàn tất trong mục tiêu OLA chia cho số bàn giao nhận được. Đồng hồ bắt đầu khi đội nhận được giao việc và dừng khi nó trả lại hoặc đóng hạng mục. Loại trừ: hạng mục giao lại do nhầm, đếm riêng | Phần trăm, kèm n | Lịch sử giao việc của công cụ ITSM | Quản lý mức dịch vụ; quản lý sự cố | Thời gian đợi bàn giao và công việc bị chặn giữa các đội (xem chủ đề 9.3, Chỉ số phối hợp và bàn giao) | Hằng tháng |
| Thời gian đợi bàn giao (bách phân vị thứ 85) | Thời gian một hạng mục chờ trong hàng đợi của đội nhận trước khi công việc bắt đầu | Bách phân vị thứ 85 của thời gian giữa lúc giao cho đội nhận và hành động đầu tiên được ghi bởi đội đó. Loại trừ: hạng mục chờ khách hàng | Giờ hoặc phút | Lịch sử giao việc và hoạt động của công cụ ITSM | Quản lý mức dịch vụ; quản lý sự cố | Thời gian xếp hàng trong cái nhìn dòng chảy (xem chủ đề 2.3, Công việc đang làm dở và hàng đợi) | Hằng tuần |
| Điểm trải nghiệm theo hành trình | Đánh giá của khách hàng hoặc người dùng về việc dịch vụ hỗ trợ một hành trình xác định ra sao, như nhận máy tính xách tay mới hoặc phục hồi sau một sự cố ngừng hoạt động | Giá trị trung bình và phân phối của các đánh giá khảo sát trên một thang cố định cho các hành trình hoàn tất trong kỳ. Báo cáo tỷ lệ phản hồi và cơ cấu người trả lời. Loại trừ: khảo sát dở dang. Không phải một giá trị trung bình duy nhất, nên hãy cho thấy phân phối | Thang đánh giá, kèm tỷ lệ phản hồi | Khảo sát ngắn sau tương tác; sự kiện hành trình từ công cụ ITSM | Quản lý mức dịch vụ; thực hành hài lòng của khách hàng (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng) | Phản hồi của khách hàng và các thước đo kết quả | Hằng tháng, cho thấy từng đợt |
| Khoảng cách dưa hấu | Tỷ lệ kỳ báo cáo hoặc dịch vụ mà SLA đọc là đạt trong khi thước đo trải nghiệm hoặc thước đo tác động người dùng đọc là kém | Số dịch vụ (hoặc kỳ) có mức đạt SLA bằng hoặc trên mục tiêu và trải nghiệm dưới mức đã thống nhất, chia cho số dịch vụ (hoặc kỳ) có mức đạt SLA bằng hoặc trên mục tiêu. Mức trải nghiệm phải được thống nhất trước khi kỳ được chấm điểm | Phần trăm dịch vụ xanh | Mức đạt SLA và điểm trải nghiệm cùng nhau | Quản lý mức dịch vụ; cải tiến liên tục | Buổi nhìn lại kết quả so với thành quả | Hằng quý |
| Độ phủ và độ cập nhật của thỏa thuận | Tỷ lệ dịch vụ đang chạy có SLA, OLA và hợp đồng nhà cung cấp tồn tại và được rà soát trong khoảng đã thống nhất | Số dịch vụ có đủ ba lớp được ghi tài liệu và rà soát trong khoảng, chia cho số dịch vụ đang chạy trong danh mục dịch vụ. Khoảng do tổ chức đặt. Loại trừ: dịch vụ đang nghỉ hưu | Phần trăm | Danh mục dịch vụ (service catalogue theo cách viết riêng của ITIL) và sổ đăng ký thỏa thuận | Quản lý mức dịch vụ; quản lý danh mục dịch vụ; quản lý nhà cung cấp | Thỏa thuận làm việc và điều lệ đội được rà soát theo nhịp đều đặn | Hằng quý |

## Khuyến nghị

### Thiết lập các thỏa thuận

**1. Viết mỗi SLA bằng ngôn ngữ của khách hàng và gắn nó với một kết quả.** Hãy bắt đầu từ điều khách hàng cần, như "một nhân viên bị khóa tài khoản làm việc lại được nhanh chóng", rồi chọn thước đo. Một thỏa thuận ngắn với một nhúm mục tiêu có ý nghĩa thắng một thỏa thuận dài mà không ai đọc. Hãy viết ra đồng hồ cho mỗi mục tiêu: sự kiện bắt đầu, sự kiện dừng và các điều kiện tạm dừng (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

**2. Nêu mục tiêu dưới dạng bách phân vị hoặc tỷ lệ, kèm một quần thể nêu rõ.** "90 phần trăm sự cố ưu tiên 2 được khôi phục trong vòng bốn giờ" nói nhiều hơn "khôi phục trung bình dưới hai giờ". Hãy thống nhất cái gì được tính: mức ưu tiên nào, giờ nào, loại yêu cầu nào. Cho thấy số đếm cùng mọi phần trăm để một tháng có tám sự cố không bị đọc như một tháng có tám trăm.

**3. Suy ra OLA từ SLA, và giao mỗi cái cho một đội sở hữu có tên.** Hãy làm ngược từ mục tiêu của khách hàng: nếu khách hàng được hứa khôi phục trong vòng bốn giờ, các OLA phải để chỗ cho phát hiện, phân loại, bàn giao và sửa. Viết mỗi OLA như một thỏa thuận hai chiều ngắn với một đội nhận, một thời gian phản hồi kỳ vọng và một lộ trình cho tranh chấp. Một OLA tồn tại để giúp các đội lập kế hoạch, nên hãy giữ nó nhẹ như mối quan hệ cho phép.

**4. Giữ các mục tiêu chặt hơn lời hứa.** Đặt SLO nội bộ ở mức chặt hơn SLA để một tuần tồi được nhận ra và sửa trước khi có vi phạm hiển thị với khách hàng (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi). Hãy coi SLA là một sàn mà tài chính và pháp lý quan tâm và SLO là con số kỹ sư lái theo. Dùng ngân sách lỗi làm cách để sản phẩm và vận hành quyết định giữa công việc tính năng và công việc độ tin cậy.

### Đo lường trung thực

**5. Công bố quy tắc đồng hồ và báo cáo về các lần tạm dừng.** Con đường phổ biến nhất đến một báo cáo xanh là một trạng thái tạm dừng rộng rãi, như "chờ khách hàng" được dùng khi chính nhà cung cấp là bên đang chờ. Hãy báo cáo tỷ lệ tạm dừng đồng hồ theo trạng thái tạm dừng, lấy mẫu một số phiếu tạm dừng mỗi tháng, và hỏi liệu khách hàng có đồng ý đồng hồ lẽ ra nên dừng không. Giữ danh sách lý do tạm dừng được phép ngắn và viết vào thỏa thuận.

**6. Cho thấy toàn bộ phân phối cạnh mục tiêu.** Đặt trung vị, bách phân vị thứ 85 hoặc 95, và thập phân vị tệ nhất cạnh tỷ lệ đạt. Một mức đạt phẳng 95 phần trăm có thể giấu một cái đuôi công việc mất nhiều ngày (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**7. Theo dõi suýt vi phạm và nguyên nhân vi phạm.** Tỷ lệ suýt vi phạm cho bạn biết bao nhiêu may mắn nằm trong con số xanh. Khi một vi phạm xảy ra, hãy ghi danh mục nguyên nhân và liệu đó là vấn đề năng lực, bàn giao, nhà cung cấp hay định nghĩa. Liên kết các danh mục lớn nhất với quản lý vấn đề (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

**8. Đo hàng đợi OLA, không chỉ mức đạt.** Thời gian đợi bàn giao ở bách phân vị thứ 85 cho thấy công việc đình trệ ở đâu, rất lâu trước khi một vi phạm SLA xuất hiện. Hãy chia sẻ nó với cả đội gửi và đội nhận, và mô tả nó là thuộc tính của dòng chảy giữa họ. Cuộc trò chuyện là về hàng đợi, không bao giờ về những người trong đó (xem chủ đề 2.3, Công việc đang làm dở và hàng đợi).

### Thêm trải nghiệm và khép khoảng cách

**9. Ghép mỗi SLA với một thước đo trải nghiệm cho cùng hành trình.** Hỏi người dùng một câu ngắn sau tương tác về việc nó có hiệu quả không và khó đến đâu, và báo cáo tỷ lệ phản hồi và cơ cấu người trả lời. Hãy thống nhất trước mức nào được coi là đủ tốt, để một XLA là một kết quả được thương lượng và không phải một con số bịa ra sau sự việc (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm, và chủ đề 6.1, Chỉ số hài lòng của khách hàng).

**10. Báo cáo khoảng cách dưa hấu và coi nó là một phát hiện.** Hãy theo dõi mức độ thường xuyên một SLA đạt trong khi trải nghiệm kém. Khoảng cách tăng cho bạn biết các thước đo SLA đang trôi xa khỏi điều người dùng quan tâm, và phản hồi đúng là sửa thước đo, không phải giải thích sự chênh lệch. Hãy rà soát nó hằng quý với đại diện khách hàng có mặt.

**11. Rà soát các thỏa thuận theo lịch và cho nghỉ hưu những thỏa thuận không ai dùng.** Kiểm tra mỗi thỏa thuận với danh mục dịch vụ, hợp đồng nhà cung cấp và công việc thực tế. Một tập nhỏ hơn các thỏa thuận đang sống dễ báo cáo hơn và khó lợi dụng hơn.

**12. Báo cáo mỗi dịch vụ trong một cái nhìn kết hợp cả ba lớp.** Cho thấy mức đạt SLA, phân phối, thời gian đợi bàn giao OLA, điểm trải nghiệm và công việc cải tiến đang mở cho mỗi dịch vụ trên một trang. Suy ra trạng thái từ dữ liệu, không phải từ một màu do chủ dịch vụ chọn. Hãy mở trang cho khách hàng và các đội (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ đạt SLA | Chọn mục tiêu dễ; đóng phiếu sớm rồi mở lại sau; phân loại lại mức ưu tiên xuống thấp; loại các trường hợp khó là "ngoài phạm vi" | Tỷ lệ mở lại và tỷ lệ phân loại lại mức ưu tiên; một mẫu phiếu đã đóng được đọc cùng khách hàng; rà soát danh sách loại trừ mỗi quý |
| Tỷ lệ suýt vi phạm | Dừng đồng hồ một phút trước giới hạn, rồi tiếp tục công việc ngoài sổ sách; chia một phiếu thành hai phiếu ngắn hơn | Thời gian từ lần liên hệ khách hàng cuối đến lúc khôi phục được xác nhận; số phiếu liên kết hoặc phiếu con mỗi sự cố |
| Tỷ lệ tạm dừng đồng hồ | Dùng trạng thái tạm dừng trên các phiếu không chờ khách hàng; chuyển công việc sang trạng thái không được đếm | Lý do tạm dừng được kiểm toán trên một mẫu; tỷ lệ tạm dừng bị khách hàng đảo ngược; điểm trải nghiệm cho các phiếu bị tạm dừng |
| Tỷ lệ đạt OLA | Từ chối bàn giao trả về người gửi để khởi động lại đồng hồ; đánh dấu hạng mục là đã chấp nhận mà không bắt đầu công việc | Số lần nảy lại mỗi hạng mục và tổng thời gian đến khôi phục giữa các đội; kết quả SLA đầu-cuối |
| Thời gian đợi bàn giao (bách phân vị thứ 85) | Giao cho một người thay vì hàng đợi của đội để giấu thời gian chờ; ghi một hành động đầu tiên mang tính hình thức | Chất lượng hành động đầu tiên được lấy mẫu; thời gian từ giao việc đến cập nhật đầu tiên hiển thị với khách hàng |
| Điểm trải nghiệm theo hành trình | Chỉ gửi khảo sát cho người dùng hài lòng; đặt câu hỏi dẫn dắt; huấn luyện người xử lý để cho điểm cao | Cơ cấu người trả lời so với quần thể; tỷ lệ phản hồi cho thấy cạnh điểm; đọc các bình luận mở trong buổi rà soát |
| Khoảng cách dưa hấu | Đặt mức trải nghiệm thấp để khoảng cách nhỏ; đổi thước đo trải nghiệm khi nó tụt | Mức trải nghiệm thống nhất từ trước và thay đổi được ghi nhật ký kèm lý do; xu hướng của toàn bộ phân phối |
| Độ phủ và độ cập nhật của thỏa thuận | Đánh dấu một thỏa thuận là đã rà soát mà không rà soát thật; tính một tài liệu sơ sài là một SLA | Bằng chứng của buổi rà soát (người dự, thay đổi, quyết định); mẫu các thỏa thuận được đọc về nội dung thực và chữ ký của khách hàng |

Một kết quả đọc lành mạnh cho thấy mức đạt dịch chuyển vì những lý do hiểu được, suýt vi phạm ít và được giải thích, tạm dừng nằm trong danh sách đã thống nhất, thời gian đợi bàn giao được các đội sở hữu thảo luận, và một thước đo trải nghiệm phần lớn đồng ý với SLA. Nơi hai bên bất đồng, đội đã có ghi chú về nguyên nhân và một hạng mục cải tiến.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| SLA hợp đồng kèm phạt | Rõ ràng, có thể thực thi, được pháp luật công nhận | Khuyến khích trò chơi đồng hồ và báo cáo phòng thủ; hình phạt có thể làm hỏng quan hệ |
| SLA không phạt, kèm rà soát thường xuyên | Xây lòng tin và dữ liệu trung thực; tập trung vào học hỏi | Ít đòn bẩy hơn khi một nhà cung cấp liên tục trượt mục tiêu |
| OLA chi tiết giữa mọi đội | Kỳ vọng rõ và ít tranh chấp hơn | Quan liêu; các đội tối ưu đồng hồ của riêng mình thay vì của khách hàng |
| OLA nhẹ kèm một mục tiêu đầu-cuối chung | Khuyến khích hợp tác; ít giấy tờ hơn | Cần lòng tin và tầm nhìn hàng đợi tốt để giải quyết tranh chấp |
| Thêm XLA vào SLA | Cho thấy dịch vụ có giúp mọi người không | Dữ liệu khảo sát nhiễu và chậm hơn; quy gán khó hơn |

Hãy giữ thỏa thuận nhỏ, báo cáo phân phối, và dùng dữ liệu trải nghiệm để kiểm tra dữ liệu vận hành. Dồn công sức vào quy tắc đồng hồ và các bàn giao, nơi phần lớn bất đồng về một con số nảy sinh.

## Câu hỏi để thảo luận với đội nhóm

**1. Nếu báo cáo SLA của chúng ta toàn xanh, chúng ta kỳ vọng người dùng nói gì về dịch vụ?**
Yêu cầu nhóm nêu tên một dịch vụ đã xanh nhiều tháng rồi thu thập điều người dùng thực sự nói trong bình luận và phàn nàn. So sánh hai thứ. Người điều phối nên tìm khoảng trống giữa thước đo và trải nghiệm sống, và ghi lại những thước đo nào được chọn vì dễ đạt.

**2. Đồng hồ của chúng ta dừng ở đâu, và ai quyết định điều đó?**
Đi qua các quy tắc bắt đầu, dừng và tạm dừng cho một mục tiêu quan trọng và hỏi ai viết từng quy tắc. Xem tỷ lệ phiếu ở trạng thái tạm dừng, và hỏi liệu khách hàng có đồng ý không. Thống nhất một quy tắc để siết chặt hoặc làm rõ.

**3. OLA nào của chúng ta giúp các đội lập kế hoạch, và cái nào chỉ để quy trách nhiệm?**
Liệt kê các thỏa thuận nội bộ và hỏi ai đọc từng cái và khi nào. Thảo luận điều xảy ra sau một OLA bị trượt: một cuộc trò chuyện về hàng đợi, hay một cuộc tìm lỗi. Mục đích là chuyển cuộc thảo luận về dòng chảy công việc giữa các đội. Chọn một OLA để đơn giản hóa hoặc cho nghỉ hưu.

**4. Bao nhiêu phần xanh của chúng ta là may mắn?**
Cho thấy tỷ lệ suýt vi phạm của mục tiêu quan trọng nhất. Thảo luận điều gì sẽ xảy ra nếu tháng tới có thêm vài trường hợp khó hoặc ít hơn vài người có mặt. Hỏi đội có độ chùng không, và nó nằm ở đâu.

**5. Khách hàng muốn chúng ta hứa điều gì mà hôm nay chúng ta không đo?**
Mời đại diện khách hàng hoặc một người dùng mô tả điều quan trọng với họ bằng lời của chính họ, như liên hệ được với một con người hoặc nhận máy tính xách tay trước ngày đầu tiên. Nắm bắt hai hoặc ba kết quả. Quyết định cái nào có thể là một câu hỏi khảo sát ngắn hoặc một sự kiện đã có trong dữ liệu, và nhóm sẽ thống nhất mức tốt ra sao.

**6. Làm sao chúng ta biết nếu các thước đo SLA của mình đã trôi xa khỏi điều người dùng quan tâm?**
Thảo luận khoảng cách dưa hấu như một tín hiệu và hỏi ai nhìn vào nó. Cân nhắc các thỏa thuận được rà soát thường xuyên đến đâu và khách hàng có dự không. Thống nhất một ngày rà soát và bằng chứng mang theo, gồm một mẫu phiếu và các kết quả trải nghiệm mới nhất.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối cũng vận hành dịch vụ của mình đáp ứng SLA qua các mục tiêu và ngân sách lỗi của chính họ, và họ cảm nhận chi phí khi một khoản phạt SLA hoặc một leo thang của khách hàng làm gián đoạn công việc đã lên kế hoạch. Họ nên giữ SLO chặt hơn SLA và coi SLA là một sàn an toàn, không phải mục tiêu hằng ngày (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi).

### Đội dịch vụ và vận hành

Các đội vận hành gánh các đồng hồ. Họ cần quy tắc rõ cho các điều kiện bắt đầu, dừng và tạm dừng, các OLA chung nêu tên hàng đợi nhận, và tầm nhìn về thời gian đợi bàn giao. Họ nên báo cáo nguyên nhân vi phạm thẳng thắn và dùng chúng làm đầu vào cho công việc vấn đề và năng lực (xem chủ đề 4.1, Chỉ số quản lý vấn đề). Họ nên chống lại áp lực giải thích một kết quả qua đồng hồ thay vì sửa nguyên nhân.

### Lãnh đạo và quản trị

Lãnh đạo dùng báo cáo SLA để xem cam kết có được đáp ứng không và đầu tư vào đâu. Họ nên yêu cầu phân phối, tỷ lệ tạm dừng đồng hồ, tỷ lệ suýt vi phạm và khoảng cách dưa hấu, và nên đối xử với một chuỗi xanh không đứt bằng sự tò mò. Tài trợ cho công việc cải tiến theo sau một phân tích vi phạm, và bảo vệ việc báo cáo trung thực khỏi sự đổ lỗi, quan trọng hơn chính mục tiêu (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

### Khách hàng và người dùng

Khách hàng muốn thỏa thuận mô tả điều họ cảm nhận: vấn đề được sửa nhanh đến đâu, nó tái diễn thường xuyên ra sao, và họ có liên hệ được với người giúp đỡ không. Họ nên là một phần của việc rà soát thỏa thuận và có cách để nói khi một báo cáo xanh không khớp với trải nghiệm của họ. Một bản tóm tắt một trang dễ đọc, kèm lý do cho mọi vi phạm và bản sửa dự kiến, xây nhiều lòng tin hơn một bảng mức đạt dài.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực hỗ trợ một hệ thống lên lịch lâm sàng do nhân viên các khoa sử dụng. Chủ dịch vụ, bàn dịch vụ, đội ứng dụng và đội hạ tầng họp hằng tháng. Mọi con số dưới đây chỉ mang tính minh họa.

SLA hứa rằng 90 phần trăm sự cố ưu tiên 2 (mất một phần chức năng ảnh hưởng một khoa) được khôi phục trong vòng bốn giờ, đo từ lúc tạo phiếu, trong một dịch vụ 24 giờ, bảy ngày. Báo cáo hằng tháng cho thấy mức đạt 94 phần trăm trên 36 sự cố (minh họa), xanh thoải mái. Khảo sát trải nghiệm, gửi sau mỗi lần đóng ưu tiên 2, có tỷ lệ phản hồi 41 phần trăm (minh họa) và điểm trung vị là 3 trên thang năm điểm, thấp hơn nhiều mức 4 mà chủ dịch vụ và quản lý các khoa đã thống nhất làm XLA. Khoảng cách dưa hấu hiển thị lần thứ ba liên tiếp.

Đội xem phân phối. Khôi phục trung vị là 1 giờ 40 phút (minh họa), nhưng bách phân vị thứ 95 là 3 giờ 50 phút (minh họa), và tỷ lệ suýt vi phạm là 31 phần trăm (minh họa): gần một phần ba các sự cố "đạt" xong trong phần mười cuối của thời gian cho phép. Họ xem tỷ lệ tạm dừng đồng hồ và thấy 22 phần trăm (minh họa) thời gian trôi qua nằm ở trạng thái "chờ khách hàng". Một mẫu mười phiếu bị tạm dừng cho thấy bốn phiếu mà khoa đã trả lời và phiếu vẫn tạm dừng đến ca kế tiếp, và ở ba phiếu khác đội ứng dụng đang chờ đội hạ tầng. Thời gian đợi bàn giao ở bách phân vị thứ 85 cho hàng đợi hạ tầng là 2 giờ 10 phút (minh họa) so với một OLA 30 phút (minh họa), và tỷ lệ đạt OLA cho bàn giao đó là 58 phần trăm (minh họa).

Quyết định mang tính thực tế. Họ đổi quy tắc đồng hồ để "chờ khách hàng" chỉ được dùng sau một yêu cầu có tài liệu gửi khách hàng, và đồng hồ tiếp tục ở lần trả lời kế tiếp. Họ thêm một lộ trình trực ca cho hàng đợi hạ tầng trong giờ khoa làm việc và thống nhất một OLA nhỏ hơn, với một buổi rà soát sau một tháng. Họ thêm thước đo trải nghiệm và khoảng cách dưa hấu vào báo cáo một trang hằng tháng và mời một quản lý khoa vào buổi rà soát. Họ cũng hạ SLO nội bộ xuống khôi phục bốn giờ chặt hơn cho 95 phần trăm sự cố, để đội nhận ra rắc rối trước khi SLA gặp rủi ro.

Một rủi ro lợi dụng xuất hiện ở tháng thứ hai. Sau khi quy tắc tạm dừng thay đổi, mức đạt tụt xuống 89 phần trăm (minh họa), và một quản lý yêu cầu bàn dịch vụ "kiểm tra lại mức ưu tiên". Đội phát hiện một đợt tăng vọt các lần hạ từ ưu tiên 2 xuống ưu tiên 3, ghép mức đạt với tỷ lệ phân loại lại và tỷ lệ mở lại, và yêu cầu một lý do trong bản ghi cho mọi thay đổi mức ưu tiên. Ở tháng thứ ba, mức đạt là 91 phần trăm (minh họa), bách phân vị thứ 95 thấp hơn, tỷ lệ suýt vi phạm đã giảm, và điểm trải nghiệm trung vị đã tăng lên 3,8 (minh họa). Khoảng cách thu hẹp vì công việc được cải thiện, và các con số đáng tin.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy thống nhất mức dịch vụ với các bên liên quan và rà soát chúng thường xuyên, để các mục tiêu theo sau điều người dùng cần khi dịch vụ tiến hóa. Điều cần lưu ý là một mục tiêu cố định bị bỏ yên nhiều năm đo quá khứ.

### AI

AI có thể tóm tắt các vi phạm, dự đoán phiếu nào sẽ trượt mục tiêu và gợi ý leo thang. Hãy ghép mức đạt với điểm trải nghiệm và khoảng cách dưa hấu, và ghi lại những dự đoán nào đúng. Điều cần lưu ý là một cú huých của AI để bảo vệ mục tiêu có thể đẩy mọi người tạm dừng đồng hồ hoặc sắp xếp lại ưu tiên, nên hãy kiểm toán việc dùng tạm dừng.

### Tự động hóa

Hãy tính mức đạt từ dấu thời gian sự kiện và làm cho quy tắc tạm dừng hiển thị. Đo leo thang tự động theo các lần leo thang giả và theo các vi phạm nó bỏ sót. Điều cần lưu ý là một tạm dừng tự động ở một trạng thái như chờ khách hàng là con đường dễ dàng để lợi dụng.

### Phân tích

Hãy báo cáo mức đạt kèm suýt vi phạm và bách phân vị, và cho thấy điểm trải nghiệm cạnh nó. Quyết định được cung cấp thông tin là thương lượng lại thỏa thuận nào. Điều cần lưu ý là mức đạt trên số phiếu nhỏ biến động, nên hãy cho thấy số đếm đứng sau mỗi phần trăm.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một công ty nhỏ thường không có SLA chính thức, chỉ có một lời hứa không chính thức với vài khách hàng đầu tiên. Hãy viết một trang nêu giờ dịch vụ, một mục tiêu phản hồi và một mục tiêu khôi phục nêu dưới dạng bách phân vị, và giữ một SLO trong đội. Các cuộc trò chuyện với khách hàng thay chỗ XLA, nên hãy viết ra điều ba khách hàng quan trọng nhất nói mỗi tháng.

**Doanh nghiệp nhỏ.** Một đội CNTT nhỏ thường phụ thuộc nhiều vào nhà cung cấp bên ngoài, nên hợp đồng nền quan trọng hơn OLA nội bộ. Hãy kiểm tra rằng cam kết của mỗi nhà cung cấp ít nhất chặt bằng SLA bạn đưa cho người dùng của chính mình, và theo dõi hiệu suất thực của nhà cung cấp (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng). Một trang hằng tháng đơn giản, với mức đạt, suýt vi phạm và một khảo sát người dùng ngắn, là đủ.

**Doanh nghiệp lớn.** Các tổ chức lớn cần một sổ đăng ký thỏa thuận và một chỉ số độ phủ. Hãy chuẩn hóa quy tắc đồng hồ và định nghĩa giữa các dịch vụ để các bản tổng hợp có ý nghĩa (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số). Hãy đề phòng hiệu ứng dưa hấu trong các bản tổng hợp quản lý, nơi hàng trăm dòng xanh giấu vài dịch vụ gây đau đớn nghiêm trọng cho người dùng.

**Chính phủ và khu vực công.** Các cơ quan công thường có tiêu chuẩn dịch vụ theo luật, quy tắc mua sắm cố định SLA trong hợp đồng, và nghĩa vụ công bố kết quả. Hãy giữ thước đo được công bố rõ ràng và kiểm chứng được, lưu giữ quy tắc đồng hồ và bằng chứng cho kiểm toán, và coi công dân là khách hàng có tiếng nói trong buổi rà soát (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước). Nơi hợp đồng cứng nhắc, hãy thêm một thước đo trải nghiệm cạnh nó mà không đổi từ ngữ hợp đồng.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Lập luận cho các chỉ số thỏa thuận tốt hơn là lập luận cho lòng tin và cho việc tránh công sức lãng phí. Các báo cáo khớp với cảm nhận của người dùng giảm leo thang và tranh chấp, rút ngắn cuộc tranh cãi hằng tháng về con số của ai đúng, và cho phép lãnh đạo tài trợ công việc quan trọng. OLA rõ ràng giảm độ trễ bàn giao, là một trong những đóng góp lớn nhất vào khôi phục kéo dài. Một khoảng cách dưa hấu, bắt sớm, tránh được chi phí lớn hơn của một mối quan hệ khách hàng hay một lần gia hạn hợp đồng đi sai.

Chi phí khiêm tốn: thời gian viết và rà soát thỏa thuận, dữ liệu đồng hồ và bàn giao đáng tin cậy (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo), một khảo sát ngắn và một buổi rà soát hằng tháng. Tổng chi phí tăng theo số thỏa thuận, nên ít hơn và đơn giản hơn thì rẻ hơn để sở hữu.

Lợi tức hiện ra dưới dạng ít vi phạm bất ngờ hơn, ít thời gian giải thích báo cáo hơn, và các lựa chọn đầu tư được cung cấp thông tin tốt hơn. Hãy coi chúng là các mẫu hình để quan sát và so sánh theo thời gian, không phải một phép tính. Hãy so sánh công sức của một buổi rà soát hằng tháng với chi phí của một tranh chấp leo thang hay một lần gia hạn mất đi trong tổ chức của chính bạn, dùng dữ liệu của bạn (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Chỉ báo cáo giá trị trung bình.** Giá trị trung bình giấu một cái đuôi dài công việc muộn. Hãy báo cáo bách phân vị, tỷ lệ suýt vi phạm và số đếm.
- **Viết SLA quanh điều dễ đạt.** Một mục tiêu chọn cho thoải mái cho một báo cáo luôn xanh. Hãy bắt đầu từ điều khách hàng cần và cho thấy khoảng cách một cách công khai.
- **Tạm dừng đồng hồ để cải thiện con số.** Các trạng thái tạm dừng rộng rãi biến SLA thành hư cấu. Hãy công bố quy tắc tạm dừng, kiểm toán mẫu và báo cáo tỷ lệ tạm dừng.
- **OLA như một vũ khí.** Một OLA dùng để đổ lỗi cho đội kế tiếp dạy các đội đá công việc đi. Hãy coi các lần trượt là thông tin về hàng đợi và sửa dòng chảy.
- **Báo cáo bị hình phạt dẫn dắt.** Hình phạt nặng khuyến khích phân loại phòng thủ và tranh chấp về đồng hồ. Hãy dùng hình phạt tiết kiệm và ghép chúng với tỷ lệ mở lại và phân loại lại.
- **Dữ liệu trải nghiệm không có tỷ lệ phản hồi.** Một điểm cao từ một mẫu nhỏ, tự chọn gây hiểu lầm. Hãy cho thấy tỷ lệ phản hồi và cơ cấu người trả lời cạnh mọi kết quả.
- **Thỏa thuận không ai rà soát.** Các thỏa thuận cũ mô tả một dịch vụ không còn tồn tại. Hãy lên lịch rà soát và cho nghỉ hưu những gì không dùng.
- **Mục tiêu cá nhân từ thỏa thuận của đội.** Chia một SLA của đội thành chỉ tiêu cá nhân dẫn đến đóng vội và xếp hạng. Hãy giữ thỏa thuận ở cấp dịch vụ và đội.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Thiết kế thỏa thuận | Lời hứa miệng hoặc mẫu sao chép; mục tiêu chọn theo thói quen | Một số SLA bằng văn bản; OLA hiếm; đồng hồ khác nhau giữa các đội | Một mẫu ngắn với mục tiêu dựa trên kết quả, bách phân vị và quy tắc đồng hồ bằng văn bản | Thỏa thuận được rà soát theo nhịp, cùng khách hàng và gắn với SLO | Các lớp SLA, OLA, hợp đồng nhà cung cấp và SLO được điều chỉnh cùng nhau khi điều kiện thay đổi |
| Chất lượng đo lường | Đếm thủ công; giá trị trung bình; tạm dừng không có tài liệu | Mức đạt dựa trên công cụ cho một số dịch vụ; việc dùng tạm dừng không được rà soát | Một định nghĩa và nguồn dữ liệu; phân phối và tỷ lệ tạm dừng được cho thấy | Suýt vi phạm, nguyên nhân vi phạm và thời gian đợi bàn giao được theo dõi xu hướng và lấy mẫu | Dữ liệu giữa các đội và nhà cung cấp được đối chiếu; định nghĩa được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Liên kết trải nghiệm | Không có phản hồi người dùng gắn với SLA | Khảo sát ngẫu hứng cho một số dịch vụ | Một khảo sát ngắn cho các hành trình chính, với tỷ lệ phản hồi được cho thấy | Mục tiêu trải nghiệm thống nhất với khách hàng và khoảng cách dưa hấu được báo cáo | Các thước đo trải nghiệm và vận hành lái công việc cải tiến chung với khách hàng |
| Dùng trong cải tiến | Báo cáo sau một lời phàn nàn | Vi phạm được thảo luận trong họp đội | Rà soát hằng tháng với người sở hữu và hành động | Nguyên nhân vi phạm nuôi cải tiến được tài trợ và công việc vấn đề | Khách hàng, nhà cung cấp và các đội cùng lập kế hoạch cải tiến từ cùng một cái nhìn |

## Danh sách kiểm tra

- [ ] Mỗi SLA nêu kết quả của nó, mục tiêu dưới dạng bách phân vị hoặc tỷ lệ, và quần thể của nó.
- [ ] Sự kiện bắt đầu, sự kiện dừng và điều kiện tạm dừng được phép được viết ra cho mọi mục tiêu.
- [ ] Mỗi SLA hướng khách hàng có OLA hoặc hợp đồng nhà cung cấp nằm vừa trong nó, mỗi cái có một đội sở hữu có tên.
- [ ] Mục tiêu nội bộ chặt hơn mục tiêu SLA đã hứa.
- [ ] Báo cáo cho thấy phân phối, số đếm, tỷ lệ suýt vi phạm và tỷ lệ tạm dừng đồng hồ.
- [ ] Một mẫu phiếu bị tạm dừng và đã đóng được đọc mỗi tháng.
- [ ] Mỗi dịch vụ chính có một thước đo trải nghiệm với mức đã thống nhất, và tỷ lệ phản hồi được cho thấy.
- [ ] Khoảng cách dưa hấu được theo dõi và rà soát với một đại diện khách hàng.
- [ ] Thỏa thuận được rà soát theo lịch và cho nghỉ hưu khi không dùng.
- [ ] Không chỉ số thỏa thuận nào được dùng để xếp hạng từng người.

## Lời nhắc AI

**Rà soát một SLA về vấn đề đồng hồ và từ ngữ.**

```text
Here is the text of our SLA for [service]: [paste agreement text]. The targets
are [list of targets], measured in [tool]. Identify ambiguities in the start
event, stop event, and pause conditions, places where an average could hide a
long tail, and wording a customer could read differently from us. Suggest
clearer wording and the questions I should ask the customer. Do not invent
benchmark values or legal conclusions. List your assumptions.
```

**Soạn một OLA giữa hai đội.**

```text
I need a short operational level agreement between [sending team] and
[receiving team] to support our SLA of [SLA target] for [service]. The typical
hand-off is [description], and the queue is [queue name or tool]. Draft a one
page OLA with the purpose, the expected response, the clock rules, a way to
settle disputes, and a review date. Keep the tone cooperative and do not suggest
penalties unless I ask. Do not invent target values; ask me for them. List your
assumptions.
```

**Tìm khoảng cách dưa hấu trong dữ liệu của chúng ta.**

```text
Here is a summary of SLA attainment and an experience measure for [list of
services] over [period]: [paste the table]. Identify services where the SLA reads
as met and experience reads as poor, and suggest possible explanations to
investigate, such as clock pauses, priority reclassification, or a poorly chosen
measure. Propose questions and a small sample of tickets to read for each. Do not
assume causes or invent thresholds. List your assumptions.
```

**Thiết kế một khảo sát trải nghiệm ngắn cho XLA.**

```text
We want to add an experience measure for [journey, for example getting a new
laptop] for [audience]. Draft [number] neutral questions, a plan for when and how
to send them, and how to report the response rate and respondent mix. Flag
wording that could bias answers and suggest how to agree the target level with
[customer representative role]. Do not invent benchmark scores. List your
assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề nào định nghĩa chỉ số đứng sau một dòng SLA và rào chắn nên đứng cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ mẫu, quy tắc đồng hồ và bảng lợi dụng đồng bộ.

## Điểm chính cần nhớ

- Một SLA là lời hứa với khách hàng, một OLA là lời hứa giữa các đội, và một XLA là kết quả trải nghiệm đã thống nhất; mỗi cái cần thước đo và người sở hữu riêng.
- Hãy báo cáo bách phân vị, số đếm, suýt vi phạm và tỷ lệ tạm dừng đồng hồ, vì giá trị trung bình và các lần tạm dừng im lặng tạo ra báo cáo xanh trên dịch vụ kém.
- Suy ra OLA từ SLA và giữ mục tiêu nội bộ chặt hơn lời hứa.
- Ghép mọi SLA với một thước đo trải nghiệm cho cùng hành trình, và báo cáo khoảng cách dưa hấu như một phát hiện để hành động.
- Rà soát thỏa thuận theo lịch với khách hàng có mặt trong phòng, và cho nghỉ hưu những gì không ai dùng.
- Giữ mọi chỉ số thỏa thuận ở cấp dịch vụ và đội, không bao giờ cá nhân.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
