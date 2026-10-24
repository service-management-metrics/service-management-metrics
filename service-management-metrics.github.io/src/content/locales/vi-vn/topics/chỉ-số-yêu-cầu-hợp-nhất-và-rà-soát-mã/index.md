# Chỉ số yêu cầu hợp nhất và rà soát mã

**Rà soát là nơi công việc đã xong thường phải chờ nhất, nên hãy đo một thay đổi nằm bao lâu trước khi có ai xem, nó lớn đến đâu, và nó bị trả lại thường xuyên ra sao, rồi ghép mọi con số tốc độ với một tín hiệu chất lượng để nhanh hơn không bao giờ có nghĩa là cẩu thả.**

## Tổng quan và động lực

Một [yêu cầu hợp nhất](https://en.wikipedia.org/wiki/Pull_request) (pull request) là một đề xuất hợp nhất một tập thay đổi từ một nhánh của kho [kiểm soát phiên bản](https://en.wikipedia.org/wiki/Version_control) vào một nhánh khác, cùng với cuộc trao đổi về việc nó có nên được hợp nhất không. Ở nhiều đội, nó là cổng chính thức giữa "tác giả nghĩ nó chạy được" và "đội đồng ý nó có thể phát hành." Cuộc trao đổi là một dạng [rà soát mã](https://en.wikipedia.org/wiki/Code_review): một người không phải tác giả đọc thay đổi, đặt câu hỏi, và phê duyệt hoặc yêu cầu sửa. Một số nền tảng gọi cùng thứ đó là merge request; chủ đề này dùng "yêu cầu hợp nhất" cho cả hai.

Rà soát đáng đo vì một lý do giản dị. Trong cách nhìn dòng chảy về phân phối, một hạng mục công việc dành phần lớn đời mình để chờ, và rà soát là một trong những lần chờ nằm hoàn toàn trong tầm kiểm soát của đội. Một nút thắt nền tảng dùng chung hay một phụ thuộc bên ngoài cần người khác thay đổi. Một yêu cầu hợp nhất chờ hai ngày để có cái nhìn đầu tiên chỉ cần thói quen của chính đội thay đổi. Các thước đo dòng chảy trong cuốn sách này (xem chủ đề 2.1, Các thước đo dòng chảy, và chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy) cho vốn từ vựng chung. Chủ đề này phóng to vào một giai đoạn của chu trình và trao cho nó các công cụ riêng.

Góc nhìn linh hoạt và ITIL gặp nhau ở đây một cách hữu ích. Từ góc độ linh hoạt, rà soát là một vòng phản hồi và một cơ chế dạy học. Nó lan truyền hiểu biết về cơ sở mã, bắt lỗi sớm, và thực thi các thỏa thuận làm việc và Định nghĩa Hoàn thành của đội. Từ góc độ ITIL, cùng hoạt động đó hỗ trợ nhiều thực hành. Trong ITIL 4, thực hành phát triển và quản lý phần mềm bao quát cách phần mềm được xây dựng và kiểm tra, hỗ trợ thay đổi bao quát cách các thay đổi được đánh giá và cho phép, và quản lý triển khai bao quát cách các thay đổi đến môi trường thật. Một yêu cầu hợp nhất được đồng nghiệp rà soát, với nhiều tổ chức, là bằng chứng rằng một thay đổi chuẩn đã được đánh giá trước khi phát hành. Coi rà soát là một hoạt động được đo và cải thiện được phục vụ cả hai góc nhìn: đội linh hoạt muốn phản hồi nhanh hơn, và thực hành ITIL muốn sự đảm bảo đáng tin rằng các thay đổi đã được kiểm tra.

Rủi ro cần giữ trong tầm mắt xuyên suốt là tốc độ rà soát và chất lượng rà soát dễ bị tách rời. Một đội có thể giảm một nửa thời gian đến lần rà soát đầu bằng cách phê duyệt mọi thứ ngay khi thấy, và bảng điều khiển sẽ cho thấy một chiến thắng trong khi cơ sở mã tệ đi. [Định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng với sức mạnh khác thường cho họ chỉ số này (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số), vì các con số rẻ để thu thập, hiển thị với mọi người, và dễ dàng làm dịch chuyển mà không thay đổi thứ chúng được cho là đại diện. Mọi khuyến nghị dưới đây được viết với điều này trong đầu.

**Tác giả** mở yêu cầu hợp nhất và một **người rà soát** đánh giá nó. Một **vòng rà soát** là một vòng "tác giả đẩy lên, người rà soát phản hồi." **Làm lại** là thay đổi được thực hiện sau một bình luận rà soát, hoặc sau khi hợp nhất, để sửa điều mà phiên bản đầu làm sai. **Tích hợp liên tục (CI)** là thực hành hợp nhất công việc vào một dòng chung thường xuyên và kiểm tra tự động mỗi lần hợp nhất; xem [tích hợp liên tục](https://en.wikipedia.org/wiki/Continuous_integration).

Mọi chỉ số trong chủ đề này mô tả các đội và kho mã. Chúng không bao giờ xếp hạng người rà soát hay tác giả. Số đếm rà soát cấp cá nhân dễ trích xuất và cám dỗ để dùng, và làm vậy biến một thực hành cộng tác thành một cuộc thi (xem chủ đề 9.1, Sức khỏe đội nhóm và trải nghiệm nhà phát triển).

## Nguyên tắc chính

- **Chờ đợi chi phối rà soát.** Ở hầu hết các đội, phần lớn nhất của thời gian rà soát là yêu cầu hợp nhất nằm chưa đọc, không phải cuộc thảo luận khi người rà soát bắt đầu. Hãy đo sự chờ đợi trước khi đo cuộc trò chuyện.
- **Thay đổi nhỏ được rà soát nhanh hơn và tốt hơn.** Kích thước là một trong số ít đòn bẩy cải thiện cả tốc độ lẫn độ kỹ lưỡng cùng lúc, vì người rà soát có thể giữ một thay đổi nhỏ trong đầu.
- **Tốc độ không có sự soi xét không phải là cải thiện.** Mọi chỉ số tốc độ trong chủ đề này cần một đối ứng chất lượng, và cặp đôi được đọc cùng nhau.
- **Rà soát là năng lực của đội, không phải của cá nhân.** Tải nên được chia đều khắp đội. Một chỉ số cho thấy sự tập trung chỉ ra một vấn đề thiết kế trong đội, không bao giờ chỉ ra một người để khen hay chê.
- **Phân phối thắng giá trị trung bình.** Thời gian rà soát có một cái đuôi dài các yêu cầu hợp nhất bị kẹt, nên hãy báo cáo trung vị và một bách phân vị cao (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).
- **Định nghĩa đồng hồ, rồi để yên.** Nêu khi nào đồng hồ bắt đầu và dừng, sự kiện nào tạm dừng nó, và hoạt động tự động nào bị loại, và ghi điều đó ở nơi dữ liệu sống (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).
- **Chỉ số rà soát phục vụ đội sở hữu công việc.** Chúng là đầu vào cho buổi nhìn lại của chính đội, không phải thẻ điểm cho người khác.

## Định nghĩa chỉ số

Các đồng hồ dưới đây giả định nền tảng kiểm soát phiên bản ghi lại thời gian sự kiện cho việc mở, yêu cầu rà soát, bình luận, phê duyệt, đẩy lên và hợp nhất. Bản nháp, yêu cầu hợp nhất do bot mở, và yêu cầu hợp nhất bị đóng mà không hợp nhất bị loại trừ trừ khi một hàng nói khác. "Giờ làm việc" nghĩa là giờ làm việc đã tuyên bố của đội, để một yêu cầu hợp nhất mở vào tối thứ Sáu không tích lũy một cuối tuần chờ đợi.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian đến lần rà soát đầu | Thời gian chờ giữa lúc một yêu cầu hợp nhất sẵn sàng để rà soát và phản hồi đáng kể đầu tiên của con người | Đồng hồ bắt đầu khi yêu cầu hợp nhất rời trạng thái bản nháp hoặc được mở ở trạng thái sẵn sàng, dừng ở bình luận rà soát, yêu cầu thay đổi hoặc phê duyệt đầu tiên của người không phải tác giả; bình luận của bot và tác giả và các thay đổi nhãn thuần túy bị loại trừ. Báo cáo trung vị và bách phân vị thứ 85 theo giờ làm việc | giờ làm việc | Lịch sử sự kiện của nền tảng kiểm soát phiên bản | Phát triển và quản lý phần mềm; hỗ trợ thay đổi | Thỏa thuận làm việc về sự đáp ứng khi rà soát; dòng chảy của công việc đang làm dở | Hằng tuần |
| Thời gian chu trình rà soát | Tổng thời gian từ lúc sẵn sàng để rà soát đến lúc hợp nhất | Đồng hồ bắt đầu khi yêu cầu hợp nhất sẵn sàng để rà soát, dừng khi hợp nhất; các yêu cầu hợp nhất bị đóng mà không hợp nhất bị loại trừ và đếm riêng. Báo cáo trung vị và bách phân vị thứ 85 theo giờ làm việc | giờ làm việc | Lịch sử sự kiện của nền tảng kiểm soát phiên bản | Quản lý triển khai; hỗ trợ thay đổi | Thời gian chu trình của giai đoạn rà soát trên bảng của đội | Hằng tuần |
| Kích thước yêu cầu hợp nhất | Lượng thay đổi trong một yêu cầu hợp nhất | Số dòng thêm cộng số dòng xóa, loại trừ tệp sinh tự động, tệp khóa, mã bên thứ ba đóng gói và các lần đổi tên thuần túy, như liệt kê trong quy tắc bỏ qua của kho. Báo cáo trung vị và bách phân vị thứ 85 cho mỗi yêu cầu hợp nhất đã hợp nhất | dòng thay đổi | Thống kê diff của nền tảng kiểm soát phiên bản | Phát triển và quản lý phần mềm | Cỡ lô nhỏ; cắt lát câu chuyện | Hằng tuần |
| Số vòng rà soát | Số vòng tác giả đẩy lên và người rà soát phản hồi trước khi hợp nhất | Số chu kỳ "yêu cầu thay đổi" hoặc bình luận-rồi-đẩy riêng biệt cho mỗi yêu cầu hợp nhất đã hợp nhất; lần nộp đầu là vòng không và các lần kiểm tra tự động thất bại bị loại trừ. Báo cáo trung vị và bách phân vị thứ 85 | số đếm | Sự kiện rà soát và đẩy của nền tảng kiểm soát phiên bản | Cải tiến liên tục; phát triển và quản lý phần mềm | Tín hiệu làm lại trong giai đoạn rà soát; Định nghĩa Hoàn thành | Hằng tuần |
| Mức tập trung tải rà soát | Công việc rà soát được chia không đều đến đâu trong một đội | Tỷ lệ các lần rà soát hoàn tất của đội do hai người rà soát bận nhất xử lý trong 4 tuần trượt; việc rà soát yêu cầu hợp nhất của chính mình và rà soát của bot bị loại trừ. Báo cáo cho đội, không bao giờ theo tên | phần trăm | Sự kiện rà soát của nền tảng kiểm soát phiên bản, tổng hợp lên đội | Cải tiến liên tục; quản lý tri thức | Quyền sở hữu mã chung; quyền sở hữu tập thể | Hằng tháng |
| Số yêu cầu hợp nhất tồn đọng cũ | Các yêu cầu hợp nhất mở lâu hơn giới hạn đã thỏa thuận của đội | Số yêu cầu hợp nhất vẫn mở và không ở trạng thái bản nháp có tuổi kể từ lúc sẵn sàng rà soát vượt giới hạn của đội, đếm tại thời điểm chụp; bản nháp bị loại trừ | số đếm | Danh sách yêu cầu hợp nhất đang mở của nền tảng kiểm soát phiên bản | Hỗ trợ thay đổi; cải tiến liên tục | Tuổi hạng mục công việc; giới hạn WIP | Hằng tuần |
| Tỷ lệ sửa sau hợp nhất | Tỷ lệ các yêu cầu hợp nhất đã hợp nhất được theo sau bởi một thay đổi sửa lỗi không lâu sau | Số yêu cầu hợp nhất đã hợp nhất được theo sau trong vòng 14 ngày bởi một bản sửa, hoàn tác hoặc hotfix liên kết với cùng thay đổi / số yêu cầu hợp nhất đã hợp nhất trong kỳ; công việc theo dõi có kế hoạch được gắn nhãn như vậy bị loại trừ | phần trăm | Lịch sử kiểm soát phiên bản, các vấn đề được liên kết và bản ghi sự cố hoặc thay đổi | Hỗ trợ thay đổi; quản lý sự cố | Chất lượng được xây vào; Định nghĩa Hoàn thành | Hằng tháng |

Thời gian đến lần rà soát đầu là đòn bẩy lớn nhất và là chỉ số mà hầu hết các đội nên bắt đầu. Thời gian chu trình rà soát là thước đo kết quả của nó và là một thành phần của các thời gian chờ dài hơn được thảo luận trong chủ đề 2.2. Cửa sổ 14 ngày và giới hạn tồn đọng cũ là các ví dụ; mỗi đội chọn các giá trị phù hợp với nhịp phát hành của mình và ghi chúng ra. Nơi các con số đi vào bức tranh phân phối rộng hơn, họ DORA (xem chủ đề 2.8, Chỉ số DORA) và các thước đo thay đổi thất bại (xem chủ đề 4.4, Thay đổi thất bại và làm lại) tiếp quản.

## Khuyến nghị

### Đo sự chờ đợi trước công việc

**1. Bắt đầu với thời gian đến lần rà soát đầu.** Đây thường là đóng góp lớn nhất vào thời gian rà soát và rẻ nhất để cải thiện. Hãy đo nó từ lịch sử sự kiện của nền tảng để không ai phải nhập gì. Báo cáo trung vị và một bách phân vị cao, vì trung vị ba giờ với bách phân vị thứ 95 là bốn ngày nghĩa là một số thay đổi đang bị quên.

**2. Loại bot và bản nháp khỏi đồng hồ, và nói rõ điều đó.** Các kiểm tra tự động, bot cập nhật phụ thuộc và công cụ định dạng tạo bình luận trong vài giây, và đếm chúng làm sự chờ đợi trông tuyệt vời. Hãy bắt đầu đồng hồ khi tác giả đánh dấu thay đổi sẵn sàng, không phải khi nhánh được đẩy lần đầu. Công bố các quy tắc này bên cạnh biểu đồ.

**3. Dùng giờ làm việc, và ghi lại lịch của đội.** Một yêu cầu hợp nhất mở muộn vào thứ Sáu không nên mang theo một cuối tuần chờ đợi. Một đội trải khắp các múi giờ cần một quy tắc về giờ của ai được tính, và thường câu trả lời trung thực là chi phí bàn giao giữa các múi giờ chính là thứ đáng thấy. Hãy nêu lựa chọn và giữ nó ổn định.

### Định hình công việc để rà soát được

**4. Giữ yêu cầu hợp nhất nhỏ, và coi kích thước là thói quen của đội.** Theo dõi trung vị và bách phân vị thứ 85 của kích thước, và nhìn các cái lớn như một tập thay vì như các thất bại riêng lẻ. Các đội thường thấy rằng thay đổi lớn đến từ vài nguyên nhân: công việc không được cắt lát đủ mịn, trộn tái cấu trúc với hành vi mới, hoặc chờ quá lâu để hợp nhất. Hãy cắt công việc để mỗi yêu cầu hợp nhất làm một việc, điều này cũng khớp với nguyên tắc cỡ lô nhỏ đứng sau [phát triển dựa trên trunk](https://en.wikipedia.org/wiki/Trunk-based_development) và triển khai thường xuyên.

**5. Đừng đặt trần kích thước cứng làm mục tiêu.** Một giới hạn như "không quá 400 dòng" mời gọi việc chia một thay đổi thành các mảnh giả tạo mà riêng lẻ không đọc được hoặc làm vỡ bản dựng khi hợp nhất một mình. Hãy dùng kích thước làm điểm khởi đầu cuộc trò chuyện trong buổi nhìn lại, và cho đội các kỹ thuật cắt lát, như công tắc tính năng, tái cấu trúc chuẩn bị trong yêu cầu hợp nhất riêng của nó, và hợp nhất sau một cờ.

**6. Làm cho yêu cầu rà soát tường minh.** Một yêu cầu hợp nhất không nêu người rà soát nào sẽ chờ một tình nguyện viên, và tình nguyện viên thì khan hiếm. Hãy thống nhất ai được nhờ, đội được thông báo ra sao và kỳ vọng phản hồi là gì, trong thỏa thuận làm việc. Một lịch trực rà soát chung, hoặc một suất rà soát hằng ngày, thường giảm sự chờ đợi nhiều hơn bất kỳ cài đặt công cụ nào.

### Chia đều tải và tri thức

**7. Theo dõi sự tập trung tải như một rủi ro cấp đội.** Nếu hai người xử lý phần lớn rà soát, sự có mặt của họ giới hạn dòng chảy của đội, và sự vắng mặt của họ dừng nó. Hãy rà soát thước đo tập trung hằng tháng, và hành động qua thiết kế của đội: luân phiên người rà soát mặc định, ghép thành viên mới hơn với người có kinh nghiệm, và ghi lại các vùng mã mà chỉ một người rà soát được. Đừng công bố bảng xếp hạng từng người.

**8. Dùng rà soát để chia sẻ tri thức, và bảo vệ mục đích đó.** Giá trị dài hạn của rà soát gồm học hỏi, quyền sở hữu chung và phong cách nhất quán, cũng như phát hiện lỗi. [Lập trình cặp](https://en.wikipedia.org/wiki/Pair_programming) và lập trình đám đông chuyển một phần sự trao đổi đó sớm hơn trong quy trình; nơi một cặp đã làm việc trên một thay đổi, một buổi rà soát nhẹ hơn là hợp lý. Hãy biến lựa chọn thành quyết định của đội, ghi trong thỏa thuận làm việc, để "đã làm cặp nên rà soát nhẹ" là một quy tắc hiển thị chứ không phải một cái cớ.

### Kiểm soát bản thân việc rà soát

**9. Để tự động hóa xử lý những gì nó làm tốt.** Định dạng, lint và các kiểm tra cơ bản thuộc về đường ống, để sự chú ý của con người dành cho thiết kế, tính đúng đắn và rủi ro. [Phân tích chương trình tĩnh](https://en.wikipedia.org/wiki/Static_program_analysis) và kiểm thử tự động giảm số vòng rà soát tầm thường. Các vòng còn lại khi đó nói nhiều hơn về cuộc trao đổi thiết kế và ít hơn về những bất đồng phong cách.

**10. Đọc số vòng rà soát như một tín hiệu về độ rõ ràng, không phải một số đếm lỗi.** Nhiều vòng có thể nghĩa là yêu cầu không rõ, tác giả thiếu bối cảnh, người rà soát yêu cầu thay đổi theo khẩu vị, hoặc thay đổi lớn. Không vòng nào trên mọi yêu cầu hợp nhất có thể nghĩa là công việc xuất sắc hoặc có thể nghĩa là không ai xem. Hãy lấy mẫu một nhúm yêu cầu hợp nhất có số vòng nhiều hay ít bất thường và đọc chúng cùng nhau như một đội.

### Ghép tốc độ với chất lượng, và giữ thời gian hiển thị

**11. Luôn cho thấy một đối ứng chất lượng bên cạnh tốc độ rà soát.** Tỷ lệ sửa sau hợp nhất, các sự cố liên kết với thay đổi gần đây và tỷ lệ lỗi tìm thấy sau phát hành là những đối tác tự nhiên (xem chủ đề 4.4, Thay đổi thất bại và làm lại). Nếu thời gian rà soát cải thiện trong khi tỷ lệ sửa tệ đi, đội đã đổi sự đảm bảo lấy tốc độ, và cách sửa là một cuộc trò chuyện chứ không phải một mục tiêu. Hãy cho thấy cả hai trên cùng một biểu đồ.

**12. Nối rà soát với bức tranh dòng chảy và với công việc ngoài kế hoạch.** Một buổi rà soát nhanh hơn chỉ giúp được nếu giai đoạn kế tiếp không chỉ xếp hàng công việc (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi). Các yêu cầu rà soát khẩn làm gián đoạn công việc có kế hoạch có chi phí riêng (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian đến lần rà soát đầu | Đăng một "trông ổn" nhanh hoặc một biểu tượng cảm xúc làm phản hồi đầu; giao cho một bot hoặc một người rà soát thân thiện; chỉ đánh dấu yêu cầu hợp nhất sẵn sàng sau khi ai đó đã đồng ý xem trước | Tỷ lệ sửa sau hợp nhất; mẫu các phê duyệt không bình luận; yêu cầu phản hồi đầu phải đáng kể trong thỏa thuận làm việc |
| Thời gian chu trình rà soát | Hợp nhất mà không chờ rà soát; chia một thay đổi thành những mảnh nhỏ xíu để qua nhanh hơn; đóng và mở lại một yêu cầu hợp nhất để đặt lại đồng hồ | Đếm các yêu cầu hợp nhất đóng-rồi-mở lại; số vòng rà soát; tỷ lệ sửa sau hợp nhất; quy tắc nhánh được bảo vệ yêu cầu phê duyệt |
| Kích thước yêu cầu hợp nhất | Loại tệp khỏi số đếm; chia một thay đổi đơn lẻ thành các mảnh không thể hiểu riêng; độn kích thước bằng mã sinh tự động | Rà soát quy tắc bỏ qua mỗi quý; kiểm tra rằng các mảnh đã chia tự dựng và qua kiểm thử; đọc một mẫu các cái nhỏ nhất và lớn nhất |
| Số vòng rà soát | Phê duyệt ngay lượt đầu để giữ số đếm thấp; chuyển thảo luận sang trò chuyện để nó không để lại dấu vết; tác giả đẩy nhiều bản sửa trong một commit để giấu các vòng | Tỷ lệ sửa sau hợp nhất; mẫu các yêu cầu hợp nhất không vòng nào; giữ thảo luận trong yêu cầu hợp nhất |
| Mức tập trung tải rà soát | Chia các buổi rà soát thành nhiều phê duyệt nhỏ để chia đều số đếm; giao rà soát cho những người rảnh nhưng không có hiểu biết | Rà soát hiểu biết của người rà soát cho các vùng rủi ro; theo dõi tỷ lệ sửa sau hợp nhất theo vùng; giữ chỉ số ở cấp đội |
| Số yêu cầu hợp nhất tồn đọng cũ | Đóng các yêu cầu hợp nhất cũ mà không hợp nhất; chuyển chúng thành bản nháp để giấu; nâng giới hạn tồn đọng cũ | Số yêu cầu hợp nhất đóng không hợp nhất; số bản nháp chạy dài; rà soát giới hạn cùng đội mỗi quý |
| Tỷ lệ sửa sau hợp nhất | Ghi các bản sửa dưới một hạng mục công việc mới không có liên kết; gắn nhãn công việc sửa lỗi là theo dõi có kế hoạch; tránh chỉ số bằng cách trì hoãn bản sửa qua cửa sổ | So sánh với dữ liệu sự cố và thay đổi thất bại; mẫu các hạng mục theo dõi; kiểm toán các nhãn được dùng |

Một kết quả đọc lành mạnh là một kết quả bình lặng. Thời gian đến lần rà soát đầu ngắn và cái đuôi cũng ngắn, nên không yêu cầu hợp nhất nào chờ hàng ngày. Kích thước nằm trong khoảng mà đội thấy dễ đọc, với vài thay đổi lớn mà đội giải thích được. Số vòng rà soát thấp nhưng không bằng không, mức tập trung tải vừa phải, số tồn đọng cũ nhỏ, và tỷ lệ sửa sau hợp nhất ổn định. Khi một con số cải thiện mạnh, ai đó nên kiểm tra rằng rào chắn ghép đôi của nó không dịch chuyển sai hướng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Rà soát nhanh với kỳ vọng phản hồi nghiêm ngặt | Vòng phản hồi ngắn; tác giả ít mất bối cảnh; công việc đang làm dở thấp hơn | Áp lực phê duyệt nhanh; làm gián đoạn công việc tập trung |
| Rà soát chậm, kỹ lưỡng | Đọc cẩn thận thiết kế và rủi ro; truyền tri thức mạnh hơn | Thời gian chu trình dài hơn; lô lớn hơn tích tụ; tác giả chuyển sang việc khác và mất bối cảnh |
| Yêu cầu hợp nhất nhỏ | Dễ đọc và dễ hoàn tác hơn; dòng chảy trơn tru hơn | Nhiều chi phí chung hơn mỗi thay đổi; có thể làm vụn một tính năng thành các bước khó hiểu |
| Yêu cầu hợp nhất lớn | Ít bàn giao hơn; thấy cả tính năng cùng lúc | Rà soát trở nên nông; khó hoàn tác hơn; chờ lâu |
| Yêu cầu phê duyệt từ một người sở hữu có tên | Trách nhiệm rõ ràng cho các vùng rủi ro; hỗ trợ việc cho phép thay đổi | Tạo ra nút thắt và điểm hỏng đơn lẻ |
| Kiểm tra tự động trước khi con người rà soát | Giải phóng con người cho thiết kế và rủi ro; nhất quán | Có thể tạo sự tự tin giả; cần bảo trì |

Không chính sách đơn lẻ nào thắng. Mục đích là rút ngắn sự chờ đợi trong khi giữ sự soi xét, và con đường thường là thay đổi nhỏ hơn, kỳ vọng rà soát rõ ràng, tự động hóa mạnh cho các kiểm tra thường lệ, và một thỏa thuận của đội về việc một buổi rà soát tốt trông ra sao. Các chỉ số rà soát hữu ích nhất khi là câu hỏi cho buổi nhìn lại và kém hữu ích nhất khi là mục tiêu.

## Câu hỏi để thảo luận với đội nhóm

**1. Một yêu cầu hợp nhất dành phần lớn đời mình ở đâu, đang chờ hay đang được rà soát?**
Hãy yêu cầu đội đoán trước khi xem dữ liệu, rồi cho thấy sự chia giữa thời gian đến lần rà soát đầu và thời gian còn lại đến lúc hợp nhất. Hầu hết các nhóm ngạc nhiên về việc có bao nhiêu là chờ đợi. Người điều phối nên ghi lại những lần đoán sai và hỏi mỗi lần đoán sai nói gì về cách đội trải nghiệm việc rà soát. Kết thúc bằng một thay đổi tấn công vào lần chờ lớn nhất.

**2. Một buổi rà soát tốt trông ra sao trong đội này, và một người ngoài sẽ nhận ra bằng cách nào?**
Liệt kê các hành vi mà đội coi trọng, như hỏi về thiết kế, kiểm tra các bài kiểm thử và giải thích lý do của một yêu cầu. Rồi hỏi cái nào trong số đó để lại dấu vết hiển thị trong yêu cầu hợp nhất. Thảo luận cách phân biệt một phản hồi đầu đáng kể với một phản hồi cho có mà không giám sát cá nhân. Thống nhất một mô tả ngắn bằng văn bản để đặt vào thỏa thuận làm việc.

**3. Lớn đến đâu là quá lớn với chúng ta, và chúng ta làm gì khi công việc thật sự lớn?**
Xem phân phối kích thước và chọn vài yêu cầu hợp nhất lớn nhất. Hỏi vì sao mỗi cái lớn và liệu nó có thể được cắt lát không. Thảo luận các kỹ thuật như công tắc tính năng, tái cấu trúc chuẩn bị và hợp nhất sau một cờ. Người điều phối nên chống lại việc đặt giới hạn bằng số và thay vào đó thống nhất một thói quen mà đội sẽ thử trong một tháng.

**4. Ai rà soát mã rủi ro nhất của chúng ta, và điều gì xảy ra khi họ vắng mặt?**
Ánh xạ các vùng mã tới những người có thể rà soát chúng tốt. Xem mức tập trung tải và các vùng chỉ có một người rà soát đủ năng lực. Thảo luận cách nuôi một người rà soát thứ hai ở mỗi vùng, qua làm cặp hoặc luân phiên phân công. Giữ cuộc trò chuyện về khả năng chống chịu của đội, không phải về bảng xếp hạng khối lượng việc của bất kỳ ai.

**5. Nếu tốc độ rà soát của chúng ta tăng gấp đôi vào ngày mai, chúng ta muốn điều gì đúng về chất lượng?**
Yêu cầu nhóm nêu các tín hiệu chất lượng họ sẽ theo dõi, như các bản sửa sau hợp nhất, các sự cố liên kết với thay đổi gần đây, hoặc số lần hoàn tác. Kiểm tra xem các tín hiệu đó hiện có hiển thị bên cạnh biểu đồ tốc độ không. Thảo luận điều gì sẽ là dấu hiệu sớm rằng tốc độ đã được mua bằng sự soi xét. Thống nhất đối ứng nào sẽ được hiển thị trên bảng điều khiển.

**6. Những con số rà soát nào chúng ta sẽ bị cám dỗ cải thiện theo cách không giúp ích?**
Đi qua từng chỉ số và hỏi một người chịu áp lực có thể làm nó trông tốt hơn mà không làm gì tốt hơn bằng cách nào. So sánh các câu trả lời với bảng lợi dụng ở trên và thêm các ý tưởng riêng của đội. Mục đích là gọi tên rủi ro trước khi nó xảy ra. Thống nhất rào chắn nào sẽ được rà soát cùng mỗi chỉ số.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu quy trình rà soát và nên sở hữu các chỉ số của nó. Họ được lợi nhiều nhất từ việc rút ngắn sự chờ đợi bằng những thỏa thuận đơn giản: một suất rà soát hằng ngày, một quy trình yêu cầu rõ ràng và các thay đổi nhỏ. Họ nên dùng các con số trong các buổi nhìn lại, giữ công việc đang làm dở thấp, và chống lại cám dỗ tối ưu một biểu đồ đơn lẻ. Rà soát cũng là nơi các thành viên mới học cơ sở mã, nên hãy bảo vệ mục đích đó.

### Đội dịch vụ và vận hành

Các đội vận hành gặp rà soát nơi mã hạ tầng, cấu hình và tự động hóa sổ tay vận hành được thay đổi qua các yêu cầu hợp nhất. Với họ, rà soát thường là một phần của cách một thay đổi chuẩn được phê duyệt và chứng minh (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi). Họ nên thống nhất những thay đổi nào cần người thứ hai rà soát, các bản sửa khẩn được rà soát nhanh đến đâu, và các thay đổi khẩn cấp được rà soát sau đó ra sao, để một bản sửa vội vẫn được xem xét. Một buổi rà soát mỏng với một thay đổi rủi ro sẽ hiện ra sau này dưới dạng một sự cố.

### Lãnh đạo và quản trị

Lãnh đạo nên coi chỉ số rà soát là tín hiệu về sức khỏe đội và dòng chảy, không phải điểm năng suất. Họ nên yêu cầu thước đo chất lượng ghép đôi bất cứ khi nào một con số tốc độ được báo cáo, hỗ trợ thời gian mà việc rà soát cẩn thận cần, và tránh so sánh các đội theo thời gian rà soát thô, vì kho mã và rủi ro khác nhau. Các cơ quan quản trị có thể dùng bằng chứng rà soát như một phần của sự đảm bảo thay đổi, miễn là họ chấp nhận rằng một quy trình rà soát có tài liệu, được lấy mẫu mạnh hơn một số đếm phê duyệt.

### Khách hàng và người dùng

Khách hàng không thấy yêu cầu hợp nhất, nhưng họ cảm nhận kết quả: một bản sửa đến sớm đến đâu và một bản phát hành mang lại lỗi mới thường xuyên ra sao. Thời gian chờ rà soát ngắn giúp các bản sửa khẩn đến họ sớm hơn, và rà soát chu đáo giúp giữ lỗi xa họ. Nơi một dịch vụ có lịch sử phát hành hoặc lỗi được công bố, khách hàng được lợi khi đội cho thấy ít lần hoàn tác và ít bản sửa lặp lại hơn theo thời gian.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực vận hành một dịch vụ web đặt lịch hẹn bệnh nhân, do một đội sản phẩm bảy người xây dựng và được vận hành cùng một nhóm kỹ thuật độ tin cậy nhỏ. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Trong một buổi rà soát hằng quý, đội thấy thời gian chu trình rà soát của mình có trung vị 26 giờ làm việc và bách phân vị thứ 85 là 71 giờ làm việc (minh họa). Chia chu trình ra cho thấy thời gian đến lần rà soát đầu trung vị là 19 giờ làm việc, nên phần lớn sự chậm trễ là chờ đợi. Kích thước yêu cầu hợp nhất có trung vị 180 dòng và bách phân vị thứ 85 là 900 dòng (minh họa), và hai người rà soát bận nhất xử lý 68 phần trăm các buổi rà soát (minh họa). Tỷ lệ sửa sau hợp nhất đứng ở 9 phần trăm (minh họa).

Đội đưa ra ba thỏa thuận. Họ đặt một suất rà soát 30 phút hằng ngày, viết kỳ vọng về phản hồi đầu trong vòng một ngày làm việc vào thỏa thuận làm việc của mình, và luân phiên một nhiệm vụ "rà soát trước" mỗi tuần. Họ cũng áp dụng một thói quen cắt lát cho công việc lớn, dùng công tắc tính năng để các tính năng dở dang có thể hợp nhất an toàn. Họ không đặt giới hạn kích thước hay mục tiêu cho thời gian đến lần rà soát đầu.

Sau hai tháng, thời gian đến lần rà soát đầu trung vị giảm xuống 6 giờ làm việc và bách phân vị thứ 85 của thời gian chu trình rà soát giảm xuống 34 giờ làm việc (minh họa). Mức tập trung tải giảm xuống 52 phần trăm (minh họa), và tỷ lệ sửa sau hợp nhất giữ ở 9 phần trăm.

Sau đó đội bắt được một rủi ro lợi dụng. Một mẫu các phê duyệt cho thấy khoảng một phần ba phản hồi đầu đến trong vài phút và chỉ đọc "LGTM" trên các thay đổi chạm vào logic nhắc lịch hẹn. Mức tăng tốc độ một phần là thật và một phần là một con dấu đóng cho có. Tỷ lệ sửa sau hợp nhất chưa dịch chuyển vì phần mã bị ảnh hưởng chạy theo chu kỳ hằng tháng. Đội đổi thỏa thuận làm việc để một phản hồi đầu phải bao gồm một câu hỏi, một bình luận về một phần cụ thể của thay đổi, hoặc một ghi chú tường minh về những gì đã được kiểm tra, và thêm tỷ lệ mẫu các phê duyệt không bình luận vào biểu đồ rà soát của mình. Họ cũng thống nhất rằng các thay đổi vào logic nhắc nhở hướng tới bệnh nhân cần hai người rà soát, một người từ nhóm vận hành. Quyết định, kèm lý do, được đưa vào nhật ký quyết định của đội.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Rà soát nhanh, nhỏ hỗ trợ phân phối liên tục và nhịp độ bền vững. Một thói quen thực tế là thống nhất một chuẩn mực của đội cho thời gian đến lần rà soát đầu và nói về các yêu cầu hợp nhất tồn đọng cũ trong buổi rà soát định kỳ của đội. Điều cần lưu ý là tốc độ rà soát bị coi là mục tiêu dẫn đến đóng dấu cho có, nên hãy ghép nó với các bản sửa sau hợp nhất.

### AI

Các thay đổi do AI tạo ra có thể làm tăng số lượng và kích thước yêu cầu hợp nhất, và các công cụ rà soát AI có thể tăng tốc cái nhìn đầu tiên. Hãy ghép thời gian đến lần rà soát đầu với tỷ lệ sửa sau hợp nhất cho các thay đổi có AI hỗ trợ, và báo cáo tải rà soát theo vai trò người rà soát, không theo người. Điều cần lưu ý là một bình luận rà soát từ một bot có thể bị đếm là một buổi rà soát, nên hãy đếm rà soát của con người riêng.

### Tự động hóa

Hãy kéo các sự kiện rà soát từ máy chủ mã một cách tự động, và chạy các kiểm tra tự động trước khi con người rà soát để mọi người dành thời gian cho phán đoán. Hãy đo bản thân các kiểm tra về báo động giả và về lỗi lọt qua chúng. Điều cần lưu ý là tự động hóa nặng có thể làm việc rà soát của con người trở nên hời hợt, vì mọi người cho rằng các công cụ đã bắt được mọi thứ.

### Phân tích

Hãy cho thấy các phân phối của kích thước, thời gian đến lần rà soát đầu và số vòng rà soát theo đội, không bao giờ theo cá nhân. Quyết định được cung cấp thông tin là năng lực rà soát hay kích thước thay đổi cần chú ý ở đâu. Điều cần lưu ý là các con số này mô tả hệ thống rà soát, và bất kỳ cách dùng nào xếp hạng con người sẽ đẩy chúng về những thay đổi nhỏ hơn, an toàn hơn, kém hữu ích hơn.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một đội nhỏ có thể rà soát trong vài phút vì ai cũng biết mã, và rủi ro chính là bỏ qua rà soát khi thiếu thời gian. Hãy giữ ít chỉ số: thời gian đến lần rà soát đầu và kích thước là đủ. Thiết lập thói quen thay đổi nhỏ sớm, vì khó hơn nhiều khi áp dụng một khi cơ sở mã và đội lớn lên.

**Doanh nghiệp nhỏ.** Thường chỉ một hoặc hai lập trình viên, hoặc một nhà cung cấp bên ngoài, bảo trì phần mềm. Rà soát có thể do một đồng nghiệp hoặc nhân viên của chính nhà cung cấp thực hiện. Hãy hỏi nhà cung cấp họ rà soát ra sao và dữ liệu yêu cầu hợp nhất có thể chia sẻ không, và giữ một bản ghi đơn giản về những thay đổi nào được ai rà soát, vì rà soát là kiểm tra chính chống sai sót trong một đội nhỏ.

**Doanh nghiệp lớn.** Nhiều đội, kho mã và quy tắc phê duyệt tạo ra biến thiên rộng. Hãy chuẩn hóa định nghĩa các đồng hồ và trường hợp loại trừ để dữ liệu nền tảng so sánh được, nhưng đừng xếp hạng các đội theo thời gian rà soát thô, vì rủi ro và cơ sở mã khác nhau. Hãy đề phòng các yêu cầu rà soát áp đặt cho kiểm toán làm thêm chờ đợi mà không thêm sự soi xét, và tìm cơ hội thay các phê duyệt thủ công bằng kiểm tra tự động và rà soát lấy mẫu.

**Chính phủ và khu vực công.** Sự tách biệt nhiệm vụ, dấu vết kiểm toán và quy tắc mua sắm thường yêu cầu phê duyệt độc lập cho các thay đổi. Hãy coi các quy tắc đó là đầu vào thiết kế: ghi lại ai đã phê duyệt gì và khi nào, và đo sự chờ đợi chúng tạo ra. Nơi nhà cung cấp viết mã, hãy nêu bằng chứng rà soát và quyền truy cập dữ liệu trong hợp đồng (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là rút ngắn phần của phân phối vừa chậm vừa kiểm soát được, trong khi giữ các lợi ích của rà soát đồng nghiệp: ít lỗi hơn, tri thức chung và một dấu vết kiểm toán. Các yêu cầu hợp nhất đang chờ giữ công việc đã xong khỏi người dùng, tăng chi phí chuyển ngữ cảnh cho tác giả, và làm xung đột hợp nhất dễ xảy ra hơn khi các nhánh già đi. Giảm sự chờ đợi vì vậy sinh lời qua phân phối nhanh hơn, ít làm lại hơn và ít bực bội hơn.

Chi phí thu thập các chỉ số này thấp khi nền tảng kiểm soát phiên bản cung cấp lịch sử sự kiện và một API. Các chi phí chính là thời gian để định nghĩa các đồng hồ và trường hợp loại trừ, để xây hoặc cấu hình báo cáo, và để rà soát các con số đều đặn. Chi phí lớn hơn là về hành vi: thời gian con người dành để rà soát kịp thời, cạnh tranh với công việc khác. Thời gian đó là khoản đầu tư thật, và nó nên được lập ngân sách thay vì coi là miễn phí.

Lợi tức hiện ra dưới dạng thời gian chu trình rà soát ngắn hơn, ít yêu cầu hợp nhất tồn đọng cũ hơn, và tỷ lệ sửa sau hợp nhất ổn định hoặc đang giảm. Tránh tuyên bố trước một tỷ lệ phần trăm cải thiện cụ thể, vì kết quả phụ thuộc vào điểm xuất phát và đội. Một hồ sơ đáng tin so sánh các phân phối trước và sau của chính đội, cùng với đối ứng chất lượng của nó, thay vì trích dẫn số liệu từ các tổ chức khác. Cuốn sách năm 2018 *Accelerate* báo cáo nghiên cứu liên kết các thực hành kỹ thuật và văn hóa với hiệu suất phân phối và là một nguồn hợp lý cho lập luận chung, nhưng các con số cho đội bạn đến từ dữ liệu của chính bạn.

## Phản mẫu và cạm bẫy

- **Xếp hạng người rà soát hoặc tác giả.** Bảng xếp hạng cá nhân về số lần rà soát hoàn tất hay số dòng thay đổi làm hỏng sự cộng tác. Hãy báo cáo ở cấp đội và dùng các con số để điều chỉnh thói quen của đội.
- **Đặt mục tiêu thời gian đến lần rà soát đầu mà không có đối ứng chất lượng.** Kết quả là con dấu đóng cho có. Hãy cho thấy tỷ lệ sửa sau hợp nhất và một mẫu các phê duyệt không bình luận bên cạnh mọi biểu đồ tốc độ.
- **Đặt giới hạn kích thước cứng.** Các đội chia công việc một cách giả tạo để tuân thủ. Hãy dùng kích thước làm cuộc trò chuyện và dạy các kỹ thuật cắt lát thay vào đó.
- **Coi không bình luận là thành công.** Một phê duyệt không được xem xét có thể phản ánh lòng tin hoặc sự thiếu chú ý. Hãy lấy mẫu các yêu cầu hợp nhất như vậy và đọc chúng cùng nhau.
- **Đếm hoạt động của bot là rà soát.** Bình luận tự động làm sự chờ đợi trông ngắn. Hãy loại bot khỏi đồng hồ và khỏi các thước đo tải.
- **Bỏ qua múi giờ và lịch.** Thời gian đồng hồ thô khiến sự chờ qua cuối tuần và giữa các vùng trông như rà soát chậm. Hãy dùng giờ làm việc và nêu tên lịch.
- **Để danh sách tồn đọng cũ lớn lên.** Các yêu cầu hợp nhất cũ tích tụ xung đột hợp nhất và mất bối cảnh. Hãy rà soát danh sách hằng tuần và hợp nhất, làm lại hoặc đóng từng mục kèm lý do.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | Thời gian rà soát được đoán hoặc báo cáo theo cảm giác | Một số đội xuất thời gian từ nền tảng với quy tắc riêng | Một định nghĩa bằng văn bản cho mỗi đồng hồ, với trường hợp loại trừ cho bot, bản nháp và lịch | Định nghĩa được rà soát theo nhịp; thay đổi được ghi lại kèm lý do | Định nghĩa được căn chỉnh giữa các đội và nhà cung cấp và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Thực hành rà soát | Rà soát xảy ra khi ai đó để ý | Chuẩn mực không chính thức ở một số đội | Thỏa thuận làm việc bằng văn bản về yêu cầu, kỳ vọng phản hồi và phạm vi của một buổi rà soát | Chuẩn mực được điều chỉnh từ dữ liệu; chia sẻ tri thức và vùng rủi ro được theo dõi | Thực hành rà soát được phối hợp giữa các đội và nhà cung cấp, với tự động hóa xử lý các kiểm tra thường lệ |
| Đối ứng chất lượng | Không có liên kết giữa rà soát và lỗi | Thỉnh thoảng xem các bản sửa sau hợp nhất | Tỷ lệ sửa sau hợp nhất được cho thấy bên cạnh tốc độ rà soát | Rào chắn được rà soát đều đặn; các phê duyệt lấy mẫu được đọc | Bằng chứng rà soát được nối với sự đảm bảo thay đổi và học từ sự cố giữa các dịch vụ |
| Sử dụng trong cải tiến | Các con số không dùng | Được cho thấy ở một số buổi nhìn lại | Được đội sở hữu rà soát theo nhịp cố định | Khoảng trống dẫn đến công việc cải tiến có kế hoạch, có nguồn lực | Ý tưởng cải tiến chảy từ các đội đến thực hành chung và ngược lại |

## Danh sách kiểm tra

- [ ] Các đồng hồ cho thời gian đến lần rà soát đầu và thời gian chu trình rà soát được ghi ra, với điểm bắt đầu, dừng và trường hợp loại trừ.
- [ ] Bot, bản nháp và yêu cầu hợp nhất bị đóng mà không hợp nhất được loại trừ hoặc đếm riêng, và các quy tắc hiển thị.
- [ ] Thời gian được báo cáo là trung vị và một bách phân vị cao theo giờ làm việc.
- [ ] Kích thước yêu cầu hợp nhất được đo với một danh sách bỏ qua đã thống nhất cho tệp sinh tự động và mã bên thứ ba.
- [ ] Đội có một thỏa thuận bằng văn bản về cách yêu cầu rà soát và phản hồi đầu được kỳ vọng sớm đến đâu.
- [ ] Mức tập trung tải rà soát chỉ được báo cáo ở cấp đội.
- [ ] Tỷ lệ sửa sau hợp nhất hoặc một đối ứng chất lượng khác được cho thấy trên cùng biểu đồ với tốc độ rà soát.
- [ ] Một mẫu các phê duyệt không bình luận và rất nhanh được đọc mỗi tháng.
- [ ] Danh sách yêu cầu hợp nhất tồn đọng cũ được rà soát hằng tuần.
- [ ] Dữ liệu rà soát được dùng trong các buổi nhìn lại và không trong đánh giá cá nhân.
- [ ] Các vùng mã chỉ có một người rà soát đủ năng lực được liệt kê và có kế hoạch.

## Lời nhắc AI

**Soạn định nghĩa đồng hồ cho các chỉ số rà soát.**

```text
I want to define review metrics for [team or repository]. Our platform is
[version control platform] and our workflow is [describe: draft pull requests,
required approvals, merge rules, bots in use]. Draft precise definitions for time
to first review and review cycle time, stating the event that starts and stops
each clock, what is excluded (bots, drafts, closed unmerged), how working hours
are handled for [time zones and working calendar], and which percentiles to
report. Do not invent benchmark values or tool features. List your assumptions and
the questions I should answer to finish the definitions.
```

**Phân tích một bản xuất dữ liệu rà soát.**

```text
Here is an anonymized export of merged pull requests for [team] over [period],
with columns [list columns, for example ready time, first review time, merge time,
lines changed, review rounds, linked fix flag]: [paste data or summary]. Compute
the median and 85th percentile for each time measure and for size, split the
review cycle into waiting and reviewing, and point out patterns that deserve a
conversation. Do not rank individuals, and do not compare with outside
benchmarks. List your assumptions and any data quality problems you notice.
```

**Tìm rủi ro lợi dụng trong các chỉ số rà soát của chúng ta.**

```text
Our team reports these review metrics: [list metrics and how each is calculated].
The pressures on us are [for example a release deadline, a leadership target, a
supplier contract]. For each metric, describe plausible ways it could be improved
without improving review, the early signs of each, and a paired guardrail metric
or practice that would catch it. Do not invent statistics. List your assumptions
and tell me what you would need to know to rank the risks.
```

**Chuẩn bị một buổi nhìn lại về dòng chảy rà soát.**

```text
Prepare a 45-minute retrospective agenda for [team] on review flow. Inputs: time
to first review [value], review cycle time [value], median size [value], load
concentration [value], and post-merge fix rate [value], all labeled with their
definitions. Suggest questions that surface causes, one small experiment the team
could run for [duration], and the quality signal to watch during the experiment.
Do not invent causes or targets. List your assumptions and the data I should bring.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một chỉ số dòng chảy hoặc chất lượng liên quan và rào chắn nên nằm bên cạnh một chỉ số rà soát.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ mẫu, bảng lợi dụng và các tham chiếu chéo nhất quán.

## Điểm chính cần nhớ

- Phần lớn sự chậm trễ rà soát là chờ đợi, nên hãy đo thời gian đến lần rà soát đầu và thời gian chu trình rà soát như các phân phối theo giờ làm việc.
- Yêu cầu hợp nhất nhỏ hơn được rà soát nhanh hơn và cẩn thận hơn; hãy dạy cắt lát thay vì áp đặt một trần kích thước.
- Ghép mọi thước đo tốc độ với một đối ứng chất lượng, như tỷ lệ sửa sau hợp nhất, và đọc cả hai cùng nhau.
- Coi tải rà soát là năng lực của đội và báo cáo sự tập trung ở cấp đội, không bao giờ như bảng xếp hạng con người.
- Các chỉ số rà soát là câu hỏi cho một buổi nhìn lại, và chúng phục vụ đội sở hữu công việc.

## Tài liệu tham khảo và đọc thêm

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
