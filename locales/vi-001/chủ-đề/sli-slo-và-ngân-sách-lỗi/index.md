# SLI, SLO và ngân sách lỗi

**Một mục tiêu mức dịch vụ biến "đủ tin cậy" thành một con số mà người dùng, đội sản phẩm và đội vận hành đều thấy được, và ngân sách lỗi mà nó để lại biến con số đó thành một quyết định chung, có thể chi tiêu về rủi ro thay vì một cuộc tranh cãi về đổ lỗi.**

## Tổng quan và động lực

Mọi dịch vụ đã có một mức độ tin cậy, dù có ai đo nó hay không. Nếu không ai nêu nó ra, người dùng giả định một mức, đội sản phẩm giả định mức khác, và đội vận hành bảo vệ mức thứ ba. Sự khác biệt bị phát hiện trong một sự cố ngừng hoạt động. Chủ đề này bao quát ba ý tưởng liên kết mà [kỹ thuật độ tin cậy của trang (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) dùng để khép khoảng trống đó: chỉ báo mức dịch vụ, mục tiêu mức dịch vụ và ngân sách lỗi.

Một [chỉ báo mức dịch vụ (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) là một phép đo một khía cạnh của dịch vụ như người dùng trải nghiệm. Các khía cạnh điển hình là yêu cầu có thành công không, mất bao lâu, dữ liệu trả về có mới không, và có đúng không. Một SLI tốt được diễn đạt dưới dạng một tỷ lệ: số sự kiện tốt chia cho số sự kiện hợp lệ, trên một cửa sổ xác định. Một [mục tiêu mức dịch vụ (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) là mục tiêu cho tỷ lệ đó trong một giai đoạn, ví dụ "99,9 phần trăm yêu cầu thanh toán hợp lệ thành công trên 28 ngày trượt". **Ngân sách lỗi** là điều mục tiêu cho phép sai: 100 phần trăm trừ SLO. Ở 99,9 phần trăm, ngân sách là 0,1 phần trăm số sự kiện hợp lệ.

Ngân sách lỗi thay đổi cuộc trò chuyện. Nếu dịch vụ đã tiêu ít ngân sách, đội có chỗ để phát hành nhanh hơn, thử các thay đổi rủi ro và chạy thí nghiệm. Nếu ngân sách gần hết, chính đội đó làm chậm công việc tính năng và dồn công sức vào độ tin cậy cho đến khi ngân sách hồi phục. Quyết định đến từ một con số đã thống nhất từ trước, nên nó không phụ thuộc vào ai thâm niên nhất hay thuyết phục nhất trong cuộc họp.

**Tốc độ đốt (burn rate)** là ngân sách đang được tiêu nhanh đến đâu, so với tốc độ sẽ tiêu hết chính xác vào cuối cửa sổ. Tốc độ đốt 1 nghĩa là ngân sách sẽ hết đúng vào cuối cửa sổ. Tốc độ đốt 10 nghĩa là nó sẽ hết trong một phần mười cửa sổ. Tốc độ đốt là cầu nối từ SLO đến cảnh báo, vì nó nói một vấn đề khẩn cấp đến đâu theo cái giá nó gây ra cho mục tiêu.

Góc nhìn linh hoạt và ITIL gặp nhau ở đây, và chúng dùng từ vựng khác nhau cho những ý tưởng liên quan. Trong ITIL 4, quản lý mức dịch vụ là thực hành đặt, đo và báo cáo mức dịch vụ, và [thỏa thuận mức dịch vụ (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) là thỏa thuận có tài liệu giữa nhà cung cấp và khách hàng (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA). Một SLO là mục tiêu nội bộ thường chặt hơn SLA và do đội vận hành dịch vụ sở hữu. Một SLA mang hậu quả, như tín dụng hoặc tiền phạt. Một SLO mang một quy tắc quyết định. Các đội linh hoạt sở hữu dịch vụ của mình ("bạn xây nó, bạn chạy nó") dùng SLO để làm cho chi phí độ tin cậy hiển thị trong cùng tồn đọng với tính năng. Các đội theo thực hành ITIL có thể coi SLI là dạng đo được của điều khách hàng nói họ cần, và SLO là mục tiêu làm việc giữ SLA an toàn.

[Tính sẵn sàng](https://en.wikipedia.org/wiki/Availability) là SLI quen thuộc nhất và được bao quát chi tiết ở nơi khác (xem chủ đề 5.3, Chỉ số tính sẵn sàng). Độ trễ, tính đúng, độ mới và thông lượng cũng là ứng viên. Kỹ năng là chọn chỉ báo từ điều người dùng quan tâm, thay vì từ điều dễ thu thập. Mức dùng CPU trên một máy chủ dễ thu thập và nói ít về việc khách hàng có thanh toán được không. Tỷ lệ yêu cầu thanh toán hoàn tất trong hai giây nói rất nhiều. Với độ trễ, hãy báo cáo [bách phân vị](https://en.wikipedia.org/wiki/Percentile), không phải giá trị trung bình, vì giá trị trung bình giấu cái đuôi chậm mà người dùng nhận thấy (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ, và chủ đề 5.4, Chỉ số năng lực và hiệu năng).

## Nguyên tắc chính

- **Bắt đầu từ người dùng, không phải máy chủ.** Chọn chỉ báo mô tả một trải nghiệm mà một người nhận ra, như "khoản thanh toán của tôi đã đi qua", và làm ngược lại điều cần đo.
- **Một mục tiêu dưới 100 phần trăm là một quyết định, không phải một sự thừa nhận.** Độ tin cậy hoàn hảo là không đạt được và không kham nổi, và người dùng thường không phân biệt được sự khác biệt vượt qua một điểm. Ngân sách làm sự đánh đổi đó tường minh.
- **Đặt mục tiêu cùng những người phụ thuộc vào nó.** SLO là một thỏa thuận được thương lượng giữa sản phẩm, vận hành và khách hàng, không phải một con số do một đội chọn một mình.
- **Thống nhất hậu quả trước khi ngân sách cạn.** Một chính sách ngân sách lỗi viết trong một tuần bình tĩnh được tuân theo trong một tuần căng thẳng. Một chính sách bịa ra giữa một sự cố ngừng hoạt động thì bị tranh cãi.
- **Cảnh báo theo tốc độ đốt, không phải từng gợn sóng.** Chỉ gọi một người khi ngân sách đang bị tiêu đủ nhanh để đe dọa mục tiêu, và chuyển tốc độ đốt chậm hơn thành phiếu.
- **SLO mô tả dịch vụ, không bao giờ con người.** Ngân sách thuộc về một dịch vụ và đội của nó. Nó không bao giờ là điểm số cho một kỹ sư.

## Định nghĩa chỉ số

Các chỉ số dưới đây mô tả hệ thống SLO cho một dịch vụ. Bốn cái đầu là cốt lõi của thực hành, và hai cái cuối mô tả mức độ lành mạnh của chính thực hành. Mọi đồng hồ và ranh giới được nêu trong cột công thức. "Sự kiện hợp lệ" là những sự kiện được tính vào SLI sau các trường hợp loại trừ đã thống nhất trong tài liệu SLO, như các yêu cầu từ bài kiểm thử tải của chính đội, bị loại trừ.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mức đạt SLI | Tỷ lệ sự kiện hợp lệ là tốt, cho một chỉ báo của một dịch vụ | số sự kiện tốt / số sự kiện hợp lệ, cho cửa sổ từ đầu đến cuối kỳ báo cáo; các sự kiện bị loại trừ theo tài liệu SLO (kiểm thử tải, bảo trì theo lịch được báo trước, nếu SLO nói vậy) bị gỡ khỏi cả tử số và mẫu số | phần trăm | Đo từ xa của bộ cân bằng tải, ứng dụng hoặc đầu dò tổng hợp; nền tảng giám sát hoặc quan sát | Quản lý mức dịch vụ; quản lý giám sát và sự kiện | Định nghĩa hoàn thành cho khả năng vận hành; rà soát sức khỏe dịch vụ của các bên liên quan | Liên tục, báo cáo hằng ngày và theo cửa sổ |
| Tuân thủ SLO | SLI có đạt mục tiêu trong cửa sổ SLO không, và trong bao nhiêu cửa sổ gần đây | số cửa sổ có mức đạt SLI bằng hoặc trên mục tiêu / số cửa sổ được đánh giá, trong 12 tháng qua; một cửa sổ còn đang mở bị loại trừ | phần trăm cửa sổ | Lịch sử mức đạt SLI | Quản lý mức dịch vụ; cải tiến liên tục | Mục tiêu của đội hoặc thỏa thuận làm việc về độ tin cậy | Hằng tháng, kèm xu hướng hằng quý |
| Ngân sách lỗi còn lại | Phần ngân sách chưa tiêu trong cửa sổ hiện tại | 1 - (số sự kiện xấu đến nay / số sự kiện xấu được phép cho cả cửa sổ), trong đó số sự kiện xấu được phép = (1 - SLO) x số sự kiện hợp lệ dự kiến cho cả cửa sổ; đồng hồ bắt đầu ở đầu cửa sổ và dừng ở cuối cửa sổ | phần trăm ngân sách | Mức đạt SLI và dự báo khối lượng | Quản lý mức dịch vụ; quản lý rủi ro | Kiểm tra sẵn sàng phát hành; đầu vào công việc có kế hoạch | Hằng ngày, xem lại hằng tuần |
| Tốc độ đốt | Tốc độ ngân sách đang được tiêu so với tốc độ tiêu đều | (số sự kiện xấu / số sự kiện hợp lệ trong một khoảng nhìn lại) / (1 - SLO); khoảng nhìn lại được nêu rõ, ví dụ 1 giờ hoặc 6 giờ | tỷ số (1 nghĩa là đúng ngân sách) | Đo từ xa SLI ở độ phân giải thời gian mịn | Quản lý giám sát và sự kiện; quản lý sự cố | Quy tắc cảnh báo trực ca; kích hoạt xúm lại | Liên tục, được đánh giá trong quy tắc cảnh báo |
| Mức tuân thủ chính sách ngân sách | Hậu quả đã thống nhất được áp dụng thường xuyên đến đâu khi một kích hoạt trong chính sách ngân sách lỗi bị chạm | số kích hoạt trong kỳ mà hành động chính sách được thực hiện trong thời gian đã thống nhất / số kích hoạt bị chạm trong kỳ; kích hoạt được miễn chính thức kèm lý do ghi lại được đếm riêng, không bị gỡ | phần trăm | Tài liệu chính sách, nhật ký quyết định và lịch sử tồn đọng | Quản lý mức dịch vụ; hỗ trợ thay đổi | Thỏa thuận làm việc; theo đuổi đến cùng ở buổi nhìn lại | Hằng quý |
| Độ phủ SLO | Tỷ lệ hành trình người dùng trọng yếu, hoặc dịch vụ trong phạm vi, có một SLO hiện hành và một SLI hoạt động | số dịch vụ hoặc hành trình trong phạm vi có ít nhất một SLO mà dữ liệu SLI đến trong 7 ngày qua / số dịch vụ hoặc hành trình trong phạm vi; "trong phạm vi" được liệt kê trong danh mục dịch vụ (service catalogue theo thuật ngữ ITIL) | phần trăm | Danh mục dịch vụ, sổ đăng ký SLO và cấu hình giám sát | Quản lý danh mục dịch vụ; quản lý mức dịch vụ | Danh sách dịch vụ do đội sở hữu | Hằng quý |

Khoảng nhìn lại của tốc độ đốt và cửa sổ SLO là những lựa chọn. Một cửa sổ 28 ngày trượt bao trọn các tuần. Hãy nêu lựa chọn trong tài liệu SLO và giữ nó ổn định, nếu không xu hướng sẽ gây hiểu lầm.

## Khuyến nghị

### Chọn chỉ báo từ điều người dùng quan tâm

**1. Bắt đầu với các hành trình người dùng trọng yếu.** Liệt kê ba đến sáu việc một người dùng phải làm được để dịch vụ đáng dùng, như đăng nhập, tìm kiếm, thanh toán và tải bảng sao kê. Viết mỗi việc thành một câu từ phía người dùng. Rồi chọn SLI cho thấy câu đó có đúng không. Điều này giữ cho SLO ít và ngăn một danh mục các đồng hồ kỹ thuật mà không ai đọc.

**2. Diễn đạt mỗi SLI là sự kiện tốt trên sự kiện hợp lệ.** Một tỷ lệ dễ giải thích, dễ tổng hợp và dễ biến thành ngân sách. Hãy định nghĩa "tốt" bằng một ngưỡng mà người dùng chấp nhận, và định nghĩa "hợp lệ" sao cho lưu lượng bạn không thể hợp lý phục vụ, như yêu cầu bị chặn vì lạm dụng, bị loại trừ theo cách có tài liệu. Viết cả hai định nghĩa vào tài liệu SLO, vì mẫu số là nơi hầu hết bất đồng ẩn náu.

**3. Đo càng gần người dùng càng thực tế.** Tỷ lệ thành công phía máy chủ có thể hoàn hảo trong khi một vấn đề mạng hoặc máy khách làm dịch vụ không dùng được. Hãy đo ở bộ cân bằng tải hoặc biên, và thêm một đầu dò tổng hợp hoặc phép đo phía máy khách cho các hành trình quan trọng nhất. Mỗi điểm đo có một chi phí và một điểm mù, nên hãy ghi lại mỗi SLI dùng điểm nào (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

**4. Dùng bách phân vị cho độ trễ, kèm một ngưỡng.** "95 phần trăm yêu cầu tìm kiếm hoàn tất dưới 800 mili giây" là một SLI. "Độ trễ trung bình" thì không, vì một vài yêu cầu nhanh có thể bù cho nhiều yêu cầu chậm. Nơi hữu ích, hãy dùng hai ngưỡng, như trung vị và bách phân vị thứ 99, vì cái đuôi chậm định hình cảm giác về dịch vụ (xem chủ đề 5.4, Chỉ số năng lực và hiệu năng).

### Đặt các mục tiêu mà mọi người bảo vệ được

**5. Đặt SLO đầu tiên từ hiệu suất hiện tại và nhu cầu người dùng, rồi siết dần.** Đo SLI trong vài tuần, hỏi người dùng và nhân viên hỗ trợ mức nào họ nhận thấy, và đặt một mục tiêu mà dịch vụ đạt được hôm nay với một chút dư địa. Một mục tiêu đặt xa trên hiệu suất hiện tại là một vi phạm vĩnh viễn, và mọi người ngừng nhìn nó. Một mục tiêu đặt xa dưới những gì người dùng nhận được để chất lượng suy giảm không ai thấy. Hãy xem lại sau một quý.

**6. Giữ SLO chặt hơn SLA, và giữ chúng tách biệt.** Nếu một thỏa thuận khách hàng hứa 99,5 phần trăm, mục tiêu của đội có thể là 99,9 phần trăm, để ngân sách cạn trước khi đường hợp đồng bị vượt. Đừng làm SLO và SLA cùng một con số, và đừng báo cáo cái này như cái kia. Thỏa thuận là tài liệu thương mại và pháp lý, và mục tiêu là một quy tắc quyết định kỹ thuật (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

**7. Tính đến các phụ thuộc.** Một dịch vụ không thể đáng tin hơn những gì nó phụ thuộc, trừ khi nó suy giảm êm. Hãy liệt kê các phụ thuộc chính, gồm cả nhà cung cấp, và hỏi hiệu suất thực của họ hàm ý gì cho mục tiêu của bạn.

### Vận hành ngân sách như một công cụ quyết định

**8. Viết một chính sách ngân sách lỗi trước khi bạn cần.** Chính sách nói điều gì xảy ra ở các mức tiêu thụ xác định. Một phiên bản đơn giản có ba bước: vận hành bình thường khi ngân sách còn, rà soát thêm các thay đổi rủi ro và ưu tiên công việc độ tin cậy khi một tỷ lệ nêu rõ đã được tiêu, và tạm dừng các bản phát hành tính năng không thiết yếu khi nó cạn cho đến khi ngân sách hồi phục. Nêu tên ai được cấp ngoại lệ và nó được ghi lại ra sao. Lãnh đạo sản phẩm và vận hành nên cùng ký, để chính sách áp dụng bình đẳng cho cả hai phía.

**9. Tiêu ngân sách có chủ đích.** Một ngân sách không bao giờ bị chạm gợi ý rằng mục tiêu quá chặt hoặc đội quá thận trọng. Hãy dùng ngân sách dư cho thí nghiệm, nhịp phát hành nhanh hơn, phát hành canary và [công tắc tính năng](https://en.wikipedia.org/wiki/Feature_toggle) cho phép bạn thử trên môi trường thật với mức tiếp xúc hạn chế, và dùng [phát hành canary](https://en.wikipedia.org/wiki/Canary_release) để bắt vấn đề trong khi chỉ một tỷ lệ nhỏ người dùng bị ảnh hưởng. Hãy coi một ngân sách luôn không bị chạm là gợi ý để hỏi liệu mục tiêu có khớp với điều người dùng cần không (xem chủ đề 4.5, Chỉ số phát hành và triển khai).

**10. Cảnh báo theo nhiều tốc độ đốt.** Một tốc độ đốt nhanh, như một tốc độ đủ cao để tiêu một phần lớn ngân sách trong vòng một giờ, gọi một người. Một tốc độ đốt chậm, như một tốc độ khiêm tốn vẫn sẽ làm cạn ngân sách trong vài ngày, tạo một phiếu cho giờ làm việc. Dùng hai hay nhiều cửa sổ nhìn lại bắt được cả thất bại đột ngột lẫn rò rỉ chậm, và giảm số lần gọi vì những gợn sóng ngắn tốn ít ngân sách. Chương về cảnh báo theo SLO trong Site Reliability Workbook giải thích mẫu hình, và các ngưỡng nên được tinh chỉnh cho dịch vụ của bạn thay vì sao chép (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo).

**11. Nối sự cố, vấn đề và việc học với ngân sách.** Sau một sự cố, hãy ghi lại nó đã tiêu bao nhiêu ngân sách cạnh thời lượng và tác động. Dùng con số đó để xếp ưu tiên hồ sơ vấn đề và các hành động tiếp theo (xem chủ đề 4.1, Chỉ số quản lý vấn đề, và chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi). Chi phí ngân sách cũng cho các buổi rà soát sự cố lớn một đơn vị chung để so sánh những thất bại rất khác nhau (xem chủ đề 3.4, Chỉ số sự cố lớn).

### Giữ thực hành trung thực và sống

**12. Rà soát SLO với thực tế mỗi quý.** Hãy so sánh SLO với các liên hệ hỗ trợ, phàn nàn và kết quả hài lòng. Nếu người dùng không hài lòng trong khi SLO xanh, SLI sai hoặc mục tiêu quá lỏng. Nếu SLO đỏ mà không ai phàn nàn, mục tiêu có thể quá chặt. Ghi lại mỗi thay đổi và lý do, và cho thấy thay đổi trên biểu đồ xu hướng (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Mức đạt SLI | Thu hẹp sự kiện "hợp lệ" cho đến khi các thất bại rơi ra ngoài, như loại các yêu cầu thử lại hoặc cả lớp lỗi; chỉ đo thành phần khỏe nhất; chỉ dò từ một vị trí thuận lợi | Công bố định nghĩa SLI và các trường hợp loại trừ trong tài liệu SLO kèm nhật ký thay đổi; so sánh SLI với liên hệ hỗ trợ và phàn nàn của người dùng; rà soát định kỳ các sự kiện bị loại trừ và khối lượng của chúng |
| Tuân thủ SLO | Đặt mục tiêu đủ thấp để luôn đạt; đổi độ dài cửa sổ sau một giai đoạn tồi; định nghĩa lại một vi phạm là giai đoạn bảo trì | Mục tiêu đặt cùng đầu vào người dùng và rà soát theo lịch; cửa sổ cố định trong tài liệu; số đếm các trường hợp loại trừ và thay đổi cửa sổ ngoài kế hoạch được báo cáo cạnh tuân thủ |
| Ngân sách lỗi còn lại | Phân loại lại các sự kiện xấu là bị loại trừ; thổi phồng khối lượng dự kiến để số sự kiện xấu được phép trông lớn hơn; đặt lại cửa sổ sớm | Số sự kiện xấu được phép tính từ khối lượng thực tế lúc cuối cửa sổ; khối lượng sự kiện bị loại trừ cho thấy cạnh ngân sách; ngày cửa sổ cố định từ trước |
| Tốc độ đốt | Tinh chỉnh ngưỡng cảnh báo để tốc độ đốt không bao giờ kích hoạt; dùng khoảng nhìn lại dài đến mức các tốc độ đốt nhanh bị trung bình hóa | Kiểm thử độ phủ cảnh báo bằng các sự cố trong quá khứ ("quy tắc này có gọi không?"); tỷ lệ cảnh báo hành động được và số phát hiện bị bỏ sót (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo) |
| Mức tuân thủ chính sách ngân sách | Cấp ngoại lệ thường xuyên; viết chính sách với kích hoạt không bao giờ chạm tới; tính một phiếu độ tin cậy hình thức là hành động chính sách | Ngoại lệ được đếm và rà soát riêng; tỷ lệ ngoại lệ trong kỳ; công việc độ tin cậy đã hoàn tất (xem chủ đề 4.1, Chỉ số quản lý vấn đề) |
| Độ phủ SLO | Thêm một SLO tầm thường cho mọi dịch vụ để nâng phần trăm; tính một hành trình là đã được phủ khi không có dữ liệu chảy | Kiểm tra độ mới của dữ liệu SLI (dữ liệu đến trong 7 ngày qua); rà soát SLO có bao quát một hành trình trọng yếu không, không phải một điểm cuối phụ |

Một kết quả đọc lành mạnh cho thấy một SLI bám theo điều người dùng báo cáo, một mục tiêu đôi khi trượt và đôi khi đạt thoải mái, và một ngân sách được tiêu có chủ đích. Chính sách được áp dụng khi kích hoạt của nó bị chạm, ngoại lệ hiếm và được ghi lại, và mọi thay đổi định nghĩa hiển thị trên biểu đồ. Một dịch vụ luôn ở 100 phần trăm ngân sách còn lại, hoặc luôn bị vi phạm, xứng đáng một cuộc trò chuyện về mục tiêu, không phải lời khen hay đổ lỗi. Hãy nhớ rằng mọi con số đơn lẻ là gợi ý cho một câu hỏi (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| SLI theo hành trình người dùng | Khớp với điều người dùng cảm nhận; số lượng ít; dễ giải thích cho người không phải kỹ sư | Cần công sức để đo xuyên suốt; có thể bỏ sót lỗi nội bộ chưa đến tay người dùng |
| SLI theo thành phần hoặc tài nguyên (CPU, bộ nhớ, độ sâu hàng đợi) | Rẻ để thu thập; hữu ích cho chẩn đoán và năng lực | Đại diện kém cho trải nghiệm người dùng; tạo nhiều cảnh báo không quan trọng |
| Cửa sổ trượt | Mượt; không có vách đá cuối tháng; luôn hiện hành | Khó giải thích cho lãnh đạo hơn tháng lịch; một ngày tồi kéo dài suốt cả cửa sổ |
| Cảnh báo theo tốc độ đốt | Gọi khi mục tiêu thực sự có rủi ro; ít báo động giả hơn | Phức tạp hơn để cấu hình và kiểm thử; ngưỡng cần tinh chỉnh theo từng dịch vụ |

Hãy chọn ít SLI, đặt chúng cùng người dùng, và để ngân sách quyết định nhịp thay đổi. Độ chặt phù hợp là mục tiêu lỏng nhất vẫn giữ người dùng hài lòng, vì mỗi chữ số chín thêm tốn hơn chữ số trước.

## Câu hỏi để thảo luận với đội nhóm

**1. Người dùng của dịch vụ này cần làm được gì, và làm sao chúng ta biết nếu họ không làm được?**
Yêu cầu mỗi người viết ra ba việc quan trọng nhất người dùng làm với dịch vụ, không nhìn bất kỳ bảng điều khiển nào. So sánh các danh sách và ghi lại sự khác biệt giữa sản phẩm, vận hành và hỗ trợ. Rồi hỏi hành trình nào trong số đó hiện có SLI. Người điều phối nên tìm các hành trình quan trọng không có phép đo và các phép đo không mô tả hành trình nào.

**2. Nếu SLO của chúng ta là 99,9 phần trăm và chúng ta đạt nó, người dùng có hài lòng không, và làm sao chúng ta biết?**
Đặt SLO hiện tại cạnh quý vừa qua của liên hệ hỗ trợ, phàn nàn và kết quả hài lòng. Hỏi liệu chúng có khớp nhau không. Nếu SLO xanh mà người dùng không hài lòng, SLI hoặc mục tiêu cần được làm lại. Nếu người dùng hài lòng mà SLO đỏ, mục tiêu có thể chặt hơn bất kỳ ai cần. Thống nhất một hành động đưa mục tiêu và trải nghiệm lại gần nhau.

**3. Chúng ta thực sự sẽ làm khác đi điều gì nếu ngân sách lỗi cạn?**
Đọc to chính sách ngân sách lỗi hiện tại, hoặc cùng soạn một cái nếu chưa có. Hỏi ai sẽ dừng việc gì, và ai có quyền cấp ngoại lệ. Người điều phối nên thúc đẩy các hành động cụ thể, như tạm dừng bản phát hành không thiết yếu và chuyển những người có tên sang công việc độ tin cậy, thay vì ý định chung chung. Một chính sách mà không ai tin sẽ được tuân theo còn tệ hơn không có chính sách.

**4. Lần cuối chúng ta chấp nhận một rủi ro vì có ngân sách dư là khi nào?**
Thảo luận đội có dùng ngân sách hay chỉ canh giữ nó. Xem quý vừa qua: có giai đoạn nào ngân sách gần như không bị chạm trong khi các bản phát hành chậm không? Hỏi đội sẽ thử điều gì nếu biết là an toàn. Câu hỏi này lộ ra sự quá thận trọng, và câu trả lời thường chỉ vào một phát hành canary, một công tắc, hoặc một đường ống nhanh hơn cho phép đội dùng ngân sách tốt.

**5. Cảnh báo nào của chúng ta sẽ kêu kịp lúc cho sự cố tồi gần nhất, và cảnh báo nào sẽ kêu vô ích?**
Lấy sự cố đáng kể gần nhất và phát lại lịch sử cảnh báo so với nó. Đếm các lần gọi đã đến, sau bao lâu kể từ khi tác động bắt đầu, và bao nhiêu lần gọi đến cho các sự kiện gần như không tốn ngân sách. Thảo luận liệu cảnh báo theo tốc độ đốt có làm tốt hơn không. Mục tiêu là một danh sách ngắn các thay đổi cảnh báo, mỗi cái có người sở hữu, và không phải một cuộc thảo luận đổ lỗi về ai đã trực.

**6. Ai sở hữu mỗi SLO, và lần cuối chúng ta cố ý đổi một cái là khi nào?**
Liệt kê các SLO và viết người sở hữu cạnh mỗi cái, là một đội hoặc vai trò. Hỏi lần rà soát cuối là khi nào và đã đổi gì. Một SLO không ai chạm trong một năm là dấu hiệu nó không còn cung cấp thông tin cho quyết định. Thống nhất một ngày rà soát cho mỗi cái, và thống nhất ai có quyền cho nghỉ hưu một SLO không còn hữu ích.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối có được một quy tắc rõ về việc đi nhanh đến đâu. Khi ngân sách còn, họ có thể phát hành thường xuyên hơn và thử các thay đổi táo bạo hơn. Khi nó thấp, họ đưa công việc độ tin cậy vào tồn đọng mà không cần thương lượng dài. Họ nên giúp chọn chỉ báo vì họ biết hành trình nào quan trọng, và nên đo các tính năng mới với SLI trong đầu ngay từ đầu (xem chủ đề 2.8, Chỉ số DORA). Ngân sách là một tài nguyên của đội để lập kế hoạch, không bao giờ là một con số để giấu.

### Đội dịch vụ và vận hành

Các đội vận hành dùng SLO để quyết định cái gì xứng đáng một cuộc gọi và cái gì có thể chờ đến sáng. Cảnh báo theo tốc độ đốt giảm nhiễu và gắn công việc trực ca với điều người dùng cảm nhận (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca). Họ giữ các định nghĩa SLI trung thực, duy trì đo từ xa đứng sau chúng, và ghi chi phí ngân sách vào bản ghi sự cố và vấn đề.

### Lãnh đạo và quản trị

Lãnh đạo nên hỏi ba câu: mục tiêu là gì, còn bao nhiêu ngân sách, và chúng ta sẽ làm gì nếu nó cạn? Họ ký chính sách ngân sách lỗi và ủng hộ đội khi chính sách nói hãy chậm lại. Họ tránh biến việc tuân thủ SLO thành một chỉ số thưởng, điều mời gọi thu hẹp định nghĩa và đặt mục tiêu mềm.

### Khách hàng và người dùng

Khách hàng được lợi khi mục tiêu phản ánh điều họ cần và khi họ thấy được dịch vụ hoạt động ra sao so với nó. Họ nên được tham vấn khi mục tiêu được đặt, vì mức chịu đựng của họ với sự chậm hay ngừng hoạt động thay đổi theo tác vụ và giờ trong ngày. Các thước đo trải nghiệm, như hài lòng và công sức, kiểm tra liệu SLO có nắm bắt điều họ cảm nhận không (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa có một đội thanh toán, một đội nền tảng và một bàn dịch vụ. Dịch vụ thanh toán là trọng yếu cho kinh doanh. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Đội định nghĩa một SLI cho hành trình "thanh toán một đơn hàng": tỷ lệ yêu cầu thanh toán hợp lệ trả về thành công trong 2 giây, đo ở bộ cân bằng tải. Yêu cầu hợp lệ loại trừ các bài kiểm thử tải của chính đội và các yêu cầu mà dịch vụ chống gian lận từ chối theo thiết kế. SLO là 99,9 phần trăm trên 28 ngày trượt. Cửa sổ mang dự kiến 12.000.000 yêu cầu hợp lệ, nên ngân sách là 12.000 yêu cầu xấu (0,1 phần trăm). Chính sách ngân sách lỗi, do trưởng sản phẩm và trưởng nền tảng ký, có ba mức: ở 50 phần trăm ngân sách đã tiêu, thay đổi rủi ro cần người rà soát thứ hai và một lần phát hành canary; ở 75 phần trăm, công việc độ tin cậy được ưu tiên trong buổi lập kế hoạch kế tiếp; ở 100 phần trăm, các bản phát hành tính năng không thiết yếu tạm dừng cho đến khi ngân sách hồi phục.

Vào ngày thứ 10 của cửa sổ, đội thấy 7.800 yêu cầu xấu trên khoảng 4.285.714 yêu cầu dự kiến đến nay, cho mức đạt SLI khoảng 99,82 phần trăm, 65 phần trăm ngân sách đã tiêu, và một cửa sổ mới trôi qua 36 phần trăm. Tốc độ đốt trong kỳ khoảng 1,8, nên với nhịp này ngân sách hết vào khoảng ngày 15. Một lần triển khai tồi chiếm 5.000 trong số các thất bại. Bản ghi sự cố cho thấy thất bại kéo dài 22 phút, buổi rà soát sự cố lớn xác định một kiểm tra còn thiếu trong đường ống, và chi phí ngân sách của sự cố được ghi trong hồ sơ vấn đề (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

Đội tuân theo chính sách. Hành động cấp hai áp dụng ngay, nên thay đổi rủi ro cần một lần phát hành canary, và buổi lập kế hoạch chuyển kiểm tra đường ống lên đầu hàng đợi công việc. Chủ sản phẩm chấp nhận tạm dừng một tính năng khuyến mãi không khẩn cấp. Đến ngày 28, ngân sách đã tiêu 94 phần trăm, và đội hoàn tất cửa sổ trong mục tiêu.

Rủi ro lợi dụng xuất hiện trong buổi rà soát. Một đội khác, vận hành dịch vụ tìm kiếm của nhà bán lẻ, báo cáo 99,95 phần trăm cho quý trong khi bàn dịch vụ ghi nhận số liên hệ "tìm kiếm không hoạt động" tăng. Khi điều tra, đội nền tảng thấy đội tìm kiếm đã định nghĩa lại "hợp lệ" để loại các yêu cầu được thử lại trong vòng 5 giây, điều đã loại nhiều thất bại thật. Buổi rà soát khôi phục định nghĩa gốc, tính lại quý, và thêm hai rào chắn: mọi thay đổi định nghĩa được ghi trong tài liệu SLO kèm lý do, và mức đạt SLI được so sánh với liên hệ hỗ trợ mỗi tháng. Không ai nói dối, vì thay đổi được thực hiện để giảm nhiễu, nên cách sửa là một định nghĩa rõ hơn, không phải một lời khiển trách.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Một ngân sách lỗi biến độ tin cậy thành một quyết định chung với các bên liên quan sản phẩm, và nó khớp với phân phối liên tục bằng cách cho thấy đội có thể tiêu bao nhiêu rủi ro. Hãy rà soát các mục tiêu theo nhịp đều đặn. Điều cần lưu ý là một SLO không được thống nhất với người dùng chỉ là một phỏng đoán.

### AI

Các tính năng AI cần chỉ báo riêng, như tính đúng và độ trễ, không chỉ tính sẵn sàng, và mục tiêu nên nói một câu trả lời sai được tính ra sao. Hãy ghép tính sẵn sàng của AI với một chỉ báo chất lượng đo bằng lấy mẫu. Điều cần lưu ý là một dịch vụ trả lời nhanh bằng câu trả lời sai có thể đạt SLO tính sẵn sàng trong khi làm người dùng thất vọng.

### Tự động hóa

Hãy tính chỉ báo và tốc độ đốt tự động từ đo từ xa, và cảnh báo theo tốc độ đốt, không phải từng gợn sóng. Đo chính việc cảnh báo theo các cảnh báo bị bỏ sót và cảnh báo giả. Điều cần lưu ý là việc đóng băng ngân sách tự động có thể làm đình trệ công việc hữu ích, nên hãy giữ một quyết định của con người trong chính sách.

### Phân tích

Hãy chọn chỉ báo mà người dùng cảm nhận và cho thấy cửa sổ và số sự kiện đứng sau mỗi cái. Quyết định được cung cấp thông tin là khi nào làm chậm thay đổi hoặc đầu tư vào độ tin cậy. Điều cần lưu ý là một cửa sổ ngắn cho một ngân sách biến động, nên hãy nêu cửa sổ.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Hãy bắt đầu với một SLO cho hành trình quan trọng nhất, đo ở biên, với một chính sách đơn giản vừa một trang. Đừng xây một nền tảng cho hàng chục SLO. Ngân sách giúp một đội nhỏ bớt tranh cãi về việc có phát hành vào thứ Sáu không.

**Doanh nghiệp nhỏ.** Một doanh nghiệp nhỏ thường dựa vào công cụ được lưu trữ và nhà cung cấp, nên SLI có thể đến từ dữ liệu trạng thái của nhà cung cấp hoặc một đầu dò bên ngoài đơn giản. Hãy đọc mức dịch vụ của nhà cung cấp bằng văn bản và kiểm tra chúng với nhu cầu của chính bạn.

**Doanh nghiệp lớn.** Nhiều dịch vụ, đội và nhà cung cấp nâng cao yêu cầu về tính nhất quán. Hãy cung cấp một mẫu dùng chung cho tài liệu SLO, một sổ đăng ký chung và một cách chuẩn để tính mức đạt và ngân sách, để lãnh đạo so sánh và tổng hợp mà không tranh cãi về định nghĩa. Giữ SLO do đội dịch vụ sở hữu và sổ đăng ký được quản lý tập trung.

**Chính phủ và khu vực công.** Dịch vụ thường phải đạt mục tiêu theo luật hoặc đã công bố, và một thất bại có thể bị báo cáo công khai. Hãy giữ cam kết hợp đồng hoặc theo luật tách khỏi mục tiêu nội bộ, và bảo đảm SLO nội bộ chặt hơn. Ghi tài liệu định nghĩa SLI, các trường hợp loại trừ và dòng dõi dữ liệu cho kiểm toán, và lập kế hoạch cho khả năng tiếp cận và cho người dùng không thể chọn nhà cung cấp khác (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là ít tranh cãi hơn và quyết định tốt hơn về độ tin cậy. Không có mục tiêu, công việc độ tin cậy cạnh tranh với tính năng bằng sức mạnh của người tranh cãi to nhất. Với một mục tiêu và một ngân sách, sự đánh đổi hiển thị và được thống nhất từ trước, và người dùng có một dịch vụ đáng tin cậy như họ cần, mà đội không trả tiền cho độ tin cậy vượt quá điểm đó.

Chi phí có bốn phần. Phần thứ nhất là thiết kế: các buổi hội thảo để chọn hành trình, chỉ báo và mục tiêu, và viết chính sách. Phần thứ hai là đo đạc: đo từ xa ở đúng chỗ, đầu dò, và đường ống biến sự kiện thành mức đạt và ngân sách (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo). Phần thứ ba là vận hành: quy tắc cảnh báo, một bảng điều khiển, một buổi rà soát hằng quý và thời gian giữ định nghĩa hiện hành. Phần thứ tư là chi phí cơ hội khi chính sách tạm dừng công việc tính năng, là cái giá của việc tôn trọng thỏa thuận và là lý do để thống nhất nó trước khi áp lực đến.

Lợi tức hiện ra trong các mẫu hình mà một đội tự theo dõi được: ít cuộc gọi không cần hành động hơn, ít tranh luận hơn về việc có phát hành không, công việc độ tin cậy được lên lịch trước khi ngân sách cạn thay vì sau một sự cố lớn, và ít bất ngờ cho khách hàng hơn. Hãy mô tả lợi ích bằng cách so sánh các số liệu của chính đội trước và sau, như số cuộc gọi mỗi luân phiên và tỷ lệ ngân sách bị sự cố lớn nhất tiêu.

## Phản mẫu và cạm bẫy

- **Quá nhiều SLO.** Hàng chục mục tiêu làm loãng sự chú ý, và không ai nói được cái nào quan trọng. Hãy bắt đầu với các hành trình người dùng trọng yếu và cho nghỉ hưu phần còn lại.
- **SLO bằng SLA.** Báo cáo một con số cho cả hai gỡ bỏ biên an toàn và trộn một quy tắc kỹ thuật với một lời hứa thương mại. Hãy giữ mục tiêu chặt hơn thỏa thuận.
- **Một chính sách không bao giờ được thực thi.** Nếu ngân sách cạn mà không có gì thay đổi, thực hành mất uy tín. Hãy nhờ lãnh đạo ký chính sách và ghi lại mọi ngoại lệ kèm lý do.
- **Dùng ngân sách làm bảng điểm cho con người.** Xếp hạng kỹ sư hay nhân viên trực ca theo ngân sách đã tiêu khiến mọi người giấu sự cố và thu hẹp định nghĩa. Hãy quy ngân sách cho dịch vụ và thảo luận nguyên nhân ở cấp hệ thống (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).
- **Cảnh báo ở mọi chỗ trũng.** Gọi theo các triệu chứng thô tạo ra mệt mỏi vì cảnh báo và dạy mọi người phớt lờ các cuộc gọi. Hãy gọi theo tốc độ đốt và chuyển các tốc độ đốt chậm thành phiếu.
- **Đặt rồi quên.** Một SLO không ai rà soát trôi xa khỏi điều người dùng cần. Hãy lên lịch rà soát hằng quý và ghi lại điều gì đã đổi và vì sao.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Chỉ báo và mục tiêu | Độ tin cậy được mô tả bằng lời; thời gian hoạt động của máy chủ được báo cáo | Một số đội định nghĩa SLI; mục tiêu khác nhau và hiếm khi được rà soát | Các hành trình người dùng trọng yếu có SLI và SLO có tài liệu trong một mẫu dùng chung | SLO được theo dõi xu hướng, kiểm tra với phản hồi người dùng, và siết hay nới bằng bằng chứng | SLO được thống nhất với khách hàng và nhà cung cấp và căn chỉnh với các dịch vụ và hợp đồng phụ thuộc |
| Ngân sách lỗi và chính sách | Không có ngân sách; độ tin cậy so với tính năng được quyết định bằng tranh cãi | Một ngân sách được tính cho vài dịch vụ; không có hậu quả đã thống nhất | Một chính sách bằng văn bản, do sản phẩm và vận hành ký, với các kích hoạt xác định | Mức tuân thủ chính sách được đo, ngoại lệ được rà soát, ngân sách cung cấp thông tin cho việc lập kế hoạch phát hành | Quyết định ngân sách được phối hợp giữa các đội chung phụ thuộc; chính sách được sửa khi điều kiện thay đổi |
| Cảnh báo và phản ứng | Cảnh báo ngưỡng trên tài nguyên thô; nhiều cuộc gọi | Một số cảnh báo theo tốc độ đốt; ngưỡng sao chép từ ví dụ | Cảnh báo tốc độ đốt nhiều cửa sổ cho SLO chính, kèm phiếu cho tốc độ đốt chậm | Chất lượng cảnh báo được đo và tinh chỉnh bằng các sự cố trong quá khứ | Cảnh báo được căn chỉnh qua các chuỗi dịch vụ, và cải tiến được thúc đẩy bởi các buổi rà soát chung |

## Danh sách kiểm tra

- [ ] Các hành trình người dùng trọng yếu của dịch vụ được liệt kê, mỗi cái viết từ phía người dùng.
- [ ] Mỗi SLI được định nghĩa là sự kiện tốt trên sự kiện hợp lệ, với các trường hợp loại trừ được viết ra.
- [ ] SLI độ trễ dùng bách phân vị và một ngưỡng nêu rõ, không dùng giá trị trung bình.
- [ ] Mỗi SLO nêu mục tiêu, cửa sổ và nơi SLI được đo.
- [ ] SLO chặt hơn bất kỳ SLA nào, và hai thứ được báo cáo riêng.
- [ ] Một chính sách ngân sách lỗi tồn tại, do lãnh đạo sản phẩm và vận hành ký, và nêu tên ai được cấp ngoại lệ.
- [ ] Cảnh báo tốc độ đốt dùng ít nhất hai khoảng nhìn lại, và các tốc độ đốt chậm tạo phiếu thay vì cuộc gọi.
- [ ] Mỗi bản ghi sự cố cho thấy ngân sách nó đã tiêu.
- [ ] Mức đạt SLI được so sánh với liên hệ hỗ trợ và kết quả hài lòng mỗi tháng.
- [ ] Mỗi SLO có một người sở hữu (một đội hoặc vai trò) và một ngày rà soát, và thay đổi được ghi nhật ký kèm lý do.
- [ ] Không kết quả SLO nào được dùng để xếp hạng hay thưởng cho cá nhân.

## Lời nhắc AI

**Soạn các SLI ứng viên từ hành trình người dùng.**

```text
I run [service name], used by [type of users] to do [list of critical user
journeys]. We can measure at [list of measurement points, for example load
balancer, application logs, synthetic probe]. For each journey, propose one or two
candidate SLIs written as good events over valid events, with a suggested
definition of "good," "valid," and exclusions. Note the strengths and blind spots
of each measurement point. Do not invent target values or benchmarks; ask me what
users tolerate. List your assumptions.
```

**Soạn một chính sách ngân sách lỗi.**

```text
Help me draft an error budget policy for [service name] with an SLO of [target]
over [window]. Stakeholders are [product role] and [operations role]. Propose
trigger levels, the action at each, who may grant an exception and how it is
recorded, and how the policy is reviewed. Keep it to one page and flag decisions
that need a human sponsor. Do not invent thresholds from other organizations;
present options and trade-offs. List your assumptions.
```

**Rà soát một SLO về rủi ro bị lợi dụng.**

```text
Here is our SLO document for [service name]: [paste SLI definition, exclusions,
target, window, and change log]. Identify ways the SLI could be narrowed, the
window or target changed, or events excluded in a way that would make results look
better than the user experience. For each risk, suggest a guardrail metric or
practice. Do not assume intent. List your assumptions and the questions I should
answer.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề liên quan, như tính sẵn sàng, chất lượng cảnh báo và sự cố lớn, và rào chắn nên đứng cạnh mỗi thước đo SLO.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ mọi chỉ số trong bảng lợi dụng và mọi tham chiếu chéo có tiêu đề.

## Điểm chính cần nhớ

- Chọn ít SLI từ điều người dùng làm, và diễn đạt mỗi cái là sự kiện tốt trên sự kiện hợp lệ.
- Một SLO dưới 100 phần trăm là một quyết định về rủi ro, và ngân sách lỗi là chỗ trống mà quyết định đó để lại cho thay đổi.
- Viết chính sách ngân sách lỗi từ trước, ký ở cấp lãnh đạo, và ghi lại mọi ngoại lệ.
- Cảnh báo theo tốc độ đốt với nhiều hơn một cửa sổ nhìn lại, để các cuộc gọi phản ánh rủi ro thật cho mục tiêu.
- Bảo vệ các định nghĩa: ghi nhật ký mọi thay đổi, và so sánh kết quả SLI với điều người dùng báo cáo.
- Quy ngân sách cho dịch vụ và đội, không bao giờ cá nhân, và rà soát mỗi SLO ít nhất hằng quý.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
