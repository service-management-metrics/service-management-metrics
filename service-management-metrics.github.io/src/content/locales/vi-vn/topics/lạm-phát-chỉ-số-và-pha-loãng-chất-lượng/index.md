# Lạm phát chỉ số và pha loãng chất lượng

**Khi AI làm cho khối lượng và tốc độ trở nên rẻ, mọi chỉ số đếm khối lượng và tốc độ đều phình lên, nên hãy ghép mỗi cái với một thước đo tính hữu ích do con người kiểm tra, và theo dõi xem tín hiệu trong dữ liệu của bạn có đang bị nhấn chìm không.**

## Tổng quan và động lực

Một chỉ số hoạt động vì nó phản ánh điều gì đó khó tạo ra. Phiếu đã giải quyết phản ánh công sức. Tài liệu đã viết phản ánh tri thức. Kiểm thử đã thêm phản ánh sự cẩn thận. Khi một công cụ làm đầu ra hiển thị gần như miễn phí, mối liên kết giữa đầu ra và công sức đứt gãy. Các con số tiếp tục tăng và ý nghĩa cạn đi. Đây là lạm phát chỉ số, và bạn đồng hành của nó là pha loãng chất lượng: tỷ lệ cái được tạo ra mà hữu ích giảm, và phần hữu ích trở nên khó tìm hơn.

Đây không phải vấn đề mới. [Định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) và người họ hàng [định luật Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) mô tả cách các thước đo dùng để kiểm soát bị làm hỏng. Một [chỉ số phù phiếm](https://en.wikipedia.org/wiki/Vanity_metric) trông ấn tượng và không nói gì về sức khỏe của công việc. Điều AI thay đổi là tốc độ và quy mô đầu ra có thể được tạo ra, và cùng với đó là tốc độ và quy mô những thất bại cũ này có thể xảy ra. Một đội trước đây thổi phồng một số đếm bằng tay nay có thể làm điều đó trong vài phút, thường mà không có ý định.

Vài mẫu hình lặp lại trong công việc dịch vụ và phân phối.

- **Lạm phát khối lượng.** AI soạn nhiều phiếu hơn, nhiều câu trả lời hơn, nhiều bình luận hơn, nhiều ca kiểm thử hơn, nhiều tài liệu hơn, và nhiều mã hơn. Số đếm của chúng tăng. Khối lượng công việc của những người phải đọc, rà soát và duy trì chúng cũng tăng.
- **Lạm phát tốc độ.** Thời gian đến bản nháp đầu giảm mạnh, và thời gian đến một kết quả hoàn chỉnh, đã kiểm tra giảm ít hơn, hoặc không giảm. Một bảng điều khiển báo cáo cái đầu kể một câu chuyện tâng bốc.
- **Nhiễu.** Nhiều nội dung hơn cạnh tranh sự chú ý. [Quá tải thông tin](https://en.wikipedia.org/wiki/Information_overload) là tình trạng một người không thể xử lý khối lượng thông tin được đưa ra, và [tỷ lệ tín hiệu trên nhiễu](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) của cơ sở tri thức, hàng đợi phiếu hoặc luồng cảnh báo giảm. [Mệt mỏi vì cảnh báo](https://en.wikipedia.org/wiki/Alert_fatigue) là dạng vận hành của nó (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo).
- **Nội dung tạo sinh chất lượng thấp.** Nội dung được tạo hàng loạt với ít rà soát, đôi khi gọi là [AI slop](https://en.wikipedia.org/wiki/AI_slop), hợp lý và mỏng. Một cơ sở tri thức được gieo bằng những bài như vậy trở nên kém đáng tin hơn, và người dùng học cách không tin nó.
- **Chi phí xác minh.** Công sức để kiểm tra một tuyên bố thường lớn hơn nhiều so với công sức để đưa ra nó, một mẫu hình đôi khi gọi là [định luật Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Khi việc tạo ra rẻ, xác minh trở thành nút thắt.
- **Hiệu quả làm tăng tiêu thụ.** [Nghịch lý Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) mô tả các trường hợp trong đó tăng hiệu quả dẫn đến dùng nhiều tài nguyên hơn, không phải ít hơn. Nếu soạn một báo cáo trở nên rẻ, nhiều báo cáo hơn được đòi hỏi. Thời gian một công cụ tiết kiệm có thể bị tiêu thụ bởi nhiều công việc giá trị thấp hơn.
- **Vòng phản hồi.** Nếu nội dung được tạo ra nuôi vòng tạo sinh kế tiếp, các lỗi tích lũy. Tài liệu nghiên cứu mô tả [sụp đổ mô hình](https://en.wikipedia.org/wiki/Model_collapse) ở các mô hình được huấn luyện trên chính đầu ra của chúng. Một vòng tương tự có thể xảy ra bên trong một tổ chức khi một trợ lý tóm tắt các phiếu do một trợ lý viết từ các bài mà một trợ lý đã tóm tắt.
- **Đường cơ sở trôi dạt.** Nếu phân phối dữ liệu thay đổi vì AI, xu hướng và ngưỡng không còn có ý nghĩa như trước. Điều này giống [trôi dạt khái niệm](https://en.wikipedia.org/wiki/Concept_drift) trong học máy, nơi mối quan hệ giữa đầu vào và kết quả thay đổi theo thời gian. Khối lượng phiếu tăng có thể phản ánh việc tạo phiếu dễ hơn, không phải nhiều vấn đề hơn.

Các mục đích linh hoạt quan trọng ở đây. Phân phối liên tục, cải tiến liên tục và nhịp độ bền vững đều phụ thuộc vào việc tín hiệu rõ ràng. Những con người có động lực không nên bị yêu cầu lội qua nhiễu do máy tạo ra hay xác minh hàng đống đầu ra ở nhịp độ không bền vững. Các bên liên quan tham gia liên tục cũng là sự phòng thủ tốt nhất: họ sẽ nói cho bạn biết khi các báo cáo không còn giúp ích.

Chủ đề này đưa ra các thước đo để nhận ra lạm phát và pha loãng, và các cặp ghép làm lộ chúng. Nó xây trên các nền tảng và các thước đo công việc có hỗ trợ (xem chủ đề 10.1, AI trong đo lường quản lý dịch vụ, và chủ đề 10.2, Đo lường công việc có AI hỗ trợ).

## Nguyên tắc chính

- **Ghép mọi chỉ số khối lượng hay tốc độ với một phép kiểm tra tính hữu ích.** Một con người đánh giá liệu đầu ra có hữu ích không.
- **Đo đến một kết quả hoàn chỉnh, đã xác minh.** Tốc độ bản nháp đầu là một cái bẫy.
- **Theo dõi gánh nặng xác minh.** Nó lớn lên âm thầm và tiêu thụ thời gian tiết kiệm.
- **Bảo vệ tín hiệu.** Giữ cơ sở tri thức, hàng đợi và cảnh báo đủ sạch để tin cậy.
- **Phá vỡ các vòng phản hồi.** Đừng để nội dung được tạo ra nuôi việc tạo sinh mà không rà soát.
- **Lập đường cơ sở lại khi dữ liệu thay đổi.** Xu hướng qua một sự dịch chuyển công nghệ cần cẩn thận.
- **Ưu tiên ít đầu ra hơn, tốt hơn.** Ít hơn có thể là nhiều hơn khi sự chú ý là tài nguyên giới hạn.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ số đầu ra trên kết quả | Khối lượng đầu ra so với kết quả nó được dự định tạo ra | số đếm đầu ra (phiếu, bài, thay đổi) / thước đo kết quả (vấn đề đã giải quyết, bài được dùng, thay đổi được giữ lại), trong cùng kỳ, theo dõi như một xu hướng | tỷ số | Công cụ theo dõi công việc, cơ sở tri thức, thước đo kết quả | Cải tiến liên tục; đo lường và báo cáo | Phần mềm hoạt động hơn khối lượng tài liệu | Hằng tháng |
| Tỷ lệ hạng mục hữu ích | Tỷ lệ hạng mục được lấy mẫu mà một người rà soát có trình độ đánh giá là hữu ích | số hạng mục được lấy mẫu đánh giá là hữu ích (đúng, liên quan, không trùng lặp) / số hạng mục được lấy mẫu | phần trăm | Rà soát mẫu ngẫu nhiên | Quản lý tri thức; đảm bảo chất lượng | Định nghĩa hoàn thành cho nội dung | Hằng tháng |
| Gánh nặng xác minh | Thời gian con người dành để kiểm tra và sửa công việc được tạo ra trên mỗi đơn vị đầu ra | số giờ rà soát và sửa / số đơn vị đầu ra, theo dõi như một xu hướng | giờ mỗi đơn vị | Ước lượng thời gian, dữ liệu công cụ rà soát | Quản lý tài chính dịch vụ; cải tiến liên tục | Năng lực rà soát như một ràng buộc | Hằng tháng |
| Tỷ lệ nội dung dư thừa | Tỷ lệ hạng mục tri thức trùng lặp hoặc chồng chéo đáng kể với một hạng mục khác | số hạng mục bị đánh dấu trùng lặp hoặc chồng chéo khi rà soát hoặc bằng đối sánh / số hạng mục trong cơ sở tri thức | phần trăm | Rà soát cơ sở tri thức, báo cáo đối sánh | Quản lý tri thức | Nguồn sự thật duy nhất | Hằng quý |
| Tỷ lệ tri thức tạo sinh đã rà soát | Tỷ lệ hạng mục tri thức do AI tạo ra mà một người có trình độ đã rà soát và phê duyệt trước khi công bố | số hạng mục tạo sinh được công bố có rà soát đã phê duyệt / số hạng mục tạo sinh được công bố | phần trăm | Siêu dữ liệu cơ sở tri thức | Quản lý tri thức; hỗ trợ thay đổi | Rà soát trước khi phát hành | Hằng tháng |
| Dòng vào tồn đọng so với giải quyết | Tăng trưởng công việc đến so với tăng trưởng công việc được giải quyết, cho các hàng đợi chịu ảnh hưởng của AI | (thay đổi số hạng mục được tạo) / (thay đổi số hạng mục được giải quyết), so với đường cơ sở trước AI | tỷ số | Lịch sử phiếu và công cụ theo dõi | Quản lý sự cố; quản lý yêu cầu dịch vụ | Cân bằng dòng chảy | Hằng tháng |
| Cờ trôi dạt chỉ số | Số chỉ số mà định nghĩa hoặc phân phối dịch chuyển đáng kể sau khi AI được đưa vào, được rà soát và chú thích | số chỉ số bị đánh dấu khi rà soát / số chỉ số trong sổ đăng ký | số đếm; phần trăm | Rà soát sổ đăng ký chỉ số, kiểm tra phân phối | Đo lường và báo cáo | Hồi cứu về đo lường | Hằng quý |

Hãy định nghĩa "hữu ích" trong một tiêu chí bằng văn bản: đúng, liên quan đến một nhu cầu thật, không trùng lặp, và hiện hành. Gánh nặng xác minh tính thời gian do con người bỏ ra, gồm thời gian đưa lời nhắc lại, và loại trừ thời gian chỉ là chờ. Tỷ lệ đã rà soát là một kiểm soát: tri thức tạo sinh chưa rà soát được theo dõi riêng và giữ nhãn hiển thị. Cờ trôi dạt chỉ số là các cuộc thảo luận, không phải hình phạt: một lá cờ nghĩa là một người đã quyết định có điều chỉnh định nghĩa, chú thích xu hướng, hay lập đường cơ sở lại. Mọi thước đo đều mô tả quy trình và nội dung, không phải cá nhân.

## Khuyến nghị

### Ghép khối lượng với tính hữu ích

**1. Xây một phép kiểm tra tính hữu ích vào mọi chỉ số khối lượng.** Với mỗi thước đo khối lượng hay tốc độ trên bảng điều khiển, hãy nêu một thước đo tính hữu ích mà một người đã đánh giá. Phiếu được tạo ghép với chất lượng giải quyết, bài đã viết với việc sử dụng và độ chính xác của bài, thay đổi đã gộp với giữ lại và làm lại (xem chủ đề 10.2, Đo lường công việc có AI hỗ trợ). Cho thấy chúng cùng nhau, và thảo luận khi chúng phân kỳ.

**2. Lấy mẫu và đánh giá, đều đặn.** Mỗi tháng, hãy rút một mẫu ngẫu nhiên các hạng mục từ các luồng AI chạm vào và nhờ một người có trình độ đánh giá chúng theo một tiêu chí bằng văn bản. Ghi tỷ lệ hữu ích và lý do các hạng mục không đạt. Luân phiên người rà soát và giữ họ độc lập với người tạo ra. Lấy mẫu là sự phòng thủ chính chống pha loãng chậm.

**3. Báo cáo kết quả trước đầu ra.** Trong báo cáo cho lãnh đạo, hãy dẫn đầu bằng kết quả: vấn đề đã giải quyết, người dùng hài lòng, lỗi tránh được. Đặt số đếm đầu ra sau, làm bối cảnh. Nếu báo cáo vẫn có giá trị khi bỏ các số đếm đầu ra, nó được định hướng tốt.

### Kiểm soát xác minh và nhiễu

**4. Đo gánh nặng xác minh.** Hãy ước lượng thời gian dành để kiểm tra và sửa công việc được tạo ra, và theo dõi nó như một xu hướng trên mỗi đơn vị đầu ra. Nếu nó tăng khi đầu ra tăng, mức lợi ròng nhỏ hơn các con số tạo ra gợi ý, và người rà soát có thể đang trên đường quá tải. Gồm gánh nặng trong chi phí mỗi nhiệm vụ (xem chủ đề 10.1, AI trong đo lường quản lý dịch vụ).

**5. Giới hạn điều đi vào hệ thống.** Hãy quyết định nội dung tạo sinh nào có thể được tạo và công bố tự động, và nội dung nào cần rà soát. Đặt giới hạn về kích thước và số lượng thay đổi được tạo ra trong một lần rà soát. Làm cho việc nói không với khối lượng trở nên dễ. Một hàng đợi nhỏ hơn với các hạng mục rõ ràng hơn phục vụ người dùng tốt hơn.

**6. Quản lý cơ sở tri thức như một sản phẩm.** Hãy gắn nhãn nội dung tạo sinh, yêu cầu rà soát trước khi công bố, cho nghỉ hưu các bản trùng lặp và hạng mục cũ, và theo dõi sự dư thừa và việc sử dụng. Một cơ sở tri thức hữu ích tương ứng với mức người dùng tin nó. Gỡ các bài mà không ai dùng và không ai bảo đảm được (xem chủ đề 3.6, Chỉ số quản lý tri thức).

**7. Giữ các luồng cảnh báo và phiếu sạch.** Nếu AI tạo phiếu từ cảnh báo hay tóm tắt, hãy đo tỷ lệ hữu ích và các bản trùng lặp. Tinh chỉnh mạnh tay. Coi tỷ lệ tín hiệu trên nhiễu giảm là một sự cố tự thân, vì nó làm hại phản ứng khi rắc rối thật đến.

### Phá vỡ vòng lặp và theo dõi đường cơ sở

**8. Ngăn nội dung tạo sinh tự nuôi chính nó mà không kiểm tra.** Nơi một trợ lý dựa vào cơ sở tri thức, lịch sử phiếu hay báo cáo trước đó, hãy đảm bảo rằng tài liệu tạo sinh trong các nguồn đó đã được rà soát, hoặc được gắn nhãn và cân nhắc tương ứng. Lấy mẫu chuỗi: chọn một câu trả lời và truy ngược nó qua các nguồn để xem nó đến từ đâu. Các vòng không kiểm tra khuếch đại lỗi.

**9. Lập đường cơ sở lại khi dữ liệu dịch chuyển.** Sau khi đưa AI vào, hãy chú thích các biểu đồ xu hướng và, nơi bản chất dữ liệu đã đổi, bắt đầu một đường cơ sở mới. Kiểm tra phân phối, không chỉ tổng: độ dài phiếu, cơ cấu danh mục, và thời gian tạo đều có thể dịch chuyển. Cờ trôi dạt chỉ số thúc đẩy các cuộc trò chuyện này (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**10. Tìm sự bật lại.** Khi một nhiệm vụ trở nên rẻ hơn, hãy hỏi liệu nhu cầu cho nó có tăng không. Quyết định trước cách dùng thời gian tiết kiệm, để nó không bị hấp thụ bởi nhiều đầu ra giá trị thấp hơn. Một đội tạo ra gấp đôi số báo cáo với cùng công sức có thể đang làm công việc ít hữu ích hơn.

### Giữ sự chú ý của con người trong vòng lặp

**11. Bảo vệ sự chú ý của người rà soát và người dùng.** Năng lực rà soát và sự chú ý là khan hiếm. Hãy giảm khối lượng tài liệu mà mọi người phải đọc, giao cho người rà soát tải thực tế, và hỏi họ điều gì đang trở nên khó hơn. Một nhịp độ bền vững gồm cả nhịp độ đọc và đánh giá (xem chủ đề 9.2, Chỉ số hài lòng và sức khỏe tinh thần).

**12. Hỏi người dùng và các bên liên quan liệu tín hiệu có rõ ràng không.** Sự tham gia liên tục của những người dùng đầu ra là phép thử tốt nhất. Hãy hỏi cơ sở tri thức dễ dùng hơn hay khó hơn, các báo cáo có nói cho họ điều họ cần không, hàng đợi có cảm thấy rõ ràng hơn không. Câu trả lời và bình luận của họ nên được đọc bên cạnh các con số.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ số đầu ra trên kết quả | Chọn một thước đo kết quả tăng theo khối lượng; đổi kỳ | Kết quả cố định trong sổ đăng ký; so sánh với mức hài lòng và tỷ lệ mở lại |
| Tỷ lệ hạng mục hữu ích | Lấy mẫu hạng mục dễ; tiêu chí dễ dãi; người rà soát bị người tạo ra ảnh hưởng | Mẫu ngẫu nhiên; tiêu chí bằng văn bản; người rà soát độc lập, luân phiên |
| Gánh nặng xác minh | Không ghi thời gian rà soát; chuyển việc kiểm tra cho các đội hạ nguồn | Gồm làm lại ở hạ nguồn; hỏi người rà soát về tải |
| Tỷ lệ nội dung dư thừa | Quy tắc đối sánh hẹp bỏ sót bản trùng lặp; gộp các hạng mục khác biệt | Lấy mẫu bản trùng lặp bằng tay; ghi nhật ký quy tắc gộp |
| Tỷ lệ tri thức tạo sinh đã rà soát | Đánh dấu rà soát xong mà không đọc; rà soát hàng loạt | Lấy mẫu rà soát về thực chất; thời gian mỗi lần rà soát; tỷ lệ lỗi trong hạng mục đã công bố |
| Dòng vào tồn đọng so với giải quyết | Tự động đóng hạng mục; tách hạng mục | Kiểm tra chất lượng giải quyết; tỷ lệ mở lại; lấy mẫu hạng mục đã đóng |
| Cờ trôi dạt chỉ số | Không đánh dấu để tránh việc; đánh dấu mọi thứ | Rà soát mọi chỉ số mỗi quý; yêu cầu một quyết định cho mỗi lá cờ |

Một kết quả đọc lành mạnh là tỷ lệ hạng mục hữu ích ổn định hoặc tăng khi khối lượng tăng, một gánh nặng xác minh được biết và chấp nhận được, một cơ sở tri thức có độ dư thừa thấp và nội dung tạo sinh đã rà soát, các hàng đợi có tín hiệu rõ, và cái nhìn của lãnh đạo dẫn đầu bằng kết quả.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Đếm đầu ra | Dễ, quen thuộc | Phình ra; thưởng cho khối lượng |
| Đo kết quả | Phản ánh giá trị | Chậm hơn; khó quy kết hơn |
| Lấy mẫu và đánh giá | Phát hiện pha loãng | Cần người rà soát có kỹ năng; công sức |
| Chấm điểm chất lượng tự động | Mở rộng được | Ý kiến của một mô hình khác; có thể chung điểm mù |
| Rà soát mọi thứ được tạo ra | An toàn | Gỡ bỏ lợi ích; người rà soát quá tải |
| Rà soát một mẫu | Thực tế | Một số hạng mục kém lọt qua |
| Cho phép tạo sinh mở | Nhanh, rộng | Nhiễu; lòng tin xói mòn |
| Giới hạn tạo sinh ở các việc dùng đã phê duyệt | Tín hiệu sạch hơn | Áp dụng chậm hơn; bỏ lỡ lợi ích |

Câu trả lời dạng văn xuôi là đo kết quả, lấy mẫu và đánh giá tính hữu ích cùng con người, giới hạn điều đi vào kho dùng chung mà không rà soát, và xem lại đường cơ sở. Hãy dùng chấm điểm tự động như một trợ giúp chứ không phải như thẩm phán.

## Câu hỏi để thảo luận với đội nhóm

**1. Con số nào của chúng ta đã tăng kể từ khi chúng ta bắt đầu dùng AI, và nó đã làm gì cho những người chúng ta phục vụ?**
Liệt kê các con số. Với mỗi cái, nhìn vào kết quả nó được dự định phản ánh. Người điều phối nên ghi lại nơi kết quả không nhúc nhích. Ghép những con số đó với một phép kiểm tra tính hữu ích.

**2. Bao nhiêu phần những gì chúng ta đã công bố hay tạo ra tháng trước mà chúng ta sẽ vui lòng bảo vệ từng dòng?**
Lấy một mẫu ngẫu nhiên và cùng đọc. Đánh dấu cái hữu ích, mỏng, sai hay trùng lặp. Thảo luận tỷ lệ và nguyên nhân. Thống nhất một tiêu chuẩn cho điều đi vào kho dùng chung.

**3. Việc kiểm tra đang trở thành nút thắt của chúng ta ở đâu?**
Hỏi những người rà soát. Nhìn vào hàng đợi rà soát, độ sâu rà soát, và công sức họ nay gánh. Thống nhất một giới hạn về kích thước hoặc số lượng hạng mục tạo ra mỗi lần rà soát, và một cách đo gánh nặng.

**4. Nội dung tạo sinh nào đang nuôi nội dung tạo sinh khác ở đây?**
Truy ngược một câu trả lời điển hình qua các nguồn của nó. Chuỗi bắt đầu từ đâu? Thảo luận nơi một người nên kiểm tra chuỗi, hoặc gắn nhãn nội dung.

**5. Một người dùng sẽ nói gì về cơ sở tri thức của chúng ta bây giờ, so với một năm trước?**
Đọc các bình luận gần đây và nhìn vào dữ liệu sử dụng. Hỏi việc tìm một câu trả lời đáng tin dễ hơn hay khó hơn. Thống nhất một đợt dọn dẹp và một quy tắc cho nội dung mới.

**6. Xu hướng nào của chúng ta nên khởi động lại với một đường cơ sở mới?**
Liệt kê các chỉ số phụ thuộc vào khối lượng hoặc cách các hạng mục được tạo ra. Tìm những thay đổi về hình dạng kể từ khi AI đến. Chú thích các xu hướng, và quyết định cái nào cần một đường cơ sở mới.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối tạo ra phần lớn khối lượng và gánh bảo trì. Họ nên ưu tiên các thay đổi nhỏ hơn, rõ ràng hơn, giữ tài liệu được tạo ra đã rà soát và gắn nhãn, và theo dõi giữ lại và làm lại. Họ nên từ chối các chỉ số dựa trên khối lượng được tạo ra, và yêu cầu các thước đo kết quả.

### Đội dịch vụ và vận hành

Các đội vận hành sống trong các hàng đợi, cảnh báo và cơ sở tri thức mà pha loãng làm hỏng. Họ nên tinh chỉnh phiếu và cảnh báo do AI tạo để giữ tín hiệu mạnh, rà soát tri thức tạo sinh trước khi công bố, và báo cáo khi luồng trở thành nhiễu. Họ ở vị trí tốt nhất để đánh giá tính hữu ích.

### Lãnh đạo và quản trị

Lãnh đạo nhận các bảng điều khiển mà lạm phát làm méo. Họ nên yêu cầu kết quả trước, đòi các phép kiểm tra tính hữu ích bên cạnh khối lượng, tài trợ năng lực rà soát, và chấp nhận rằng một số thước đo cần được lập đường cơ sở lại. Quản trị nên kiểm tra nội dung tạo sinh trong các kho dùng chung được rà soát và gắn nhãn.

### Khách hàng và người dùng

Người dùng gánh chi phí của pha loãng khi câu trả lời sai, bài viết mâu thuẫn nhau, và câu trả lời dài và rỗng. Họ muốn sự giúp đỡ ngắn gọn, đúng, liên quan. Phản ứng của họ với chất lượng của điều họ nhận là phép thử trực tiếp liệu tín hiệu có sống sót không.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Nhóm CNTT của một công ty dược phẩm toàn cầu bật một trợ lý AI để soạn bài tri thức, tóm tắt phiếu và chuẩn bị báo cáo trạng thái hằng tuần. Trong vòng một quý, bảng điều khiển trông tuyệt vời. Các con số dưới đây chỉ mang tính minh họa.

Số bài tri thức được tạo tăng từ 140 lên 610 mỗi tháng. Các phiếu mang tóm tắt chi tiết do AI viết. Báo cáo hằng tuần dài mười hai trang. Người quản lý chất lượng dịch vụ nhận thấy mức hài lòng với tự phục vụ đã giảm và bàn dịch vụ báo cáo nhiều liên hệ "bài viết không giúp được" hơn. Bà lấy mẫu 100 bài mới cùng hai nhân viên có kinh nghiệm. Chỉ 54 bài được đánh giá là hữu ích: 23 bài trùng lặp bài hiện có, 15 bài chứa các bước lỗi thời hoặc không đúng, và 8 bài quá mơ hồ để hành động. Trong số các bài mới, 71 phần trăm được công bố mà không có rà soát của con người. Cơ sở tri thức nay chứa khoảng 3.200 bài, với tỷ lệ nội dung dư thừa bà ước lượng là 28 phần trăm so với 9 phần trăm một năm trước. Nhân viên báo cáo rằng việc tìm một câu trả lời đáng tin mất lâu hơn. Gánh nặng xác minh cho các biên tập viên bài của bàn dịch vụ đã tăng lên khoảng 40 giờ mỗi tuần, từ 12. Các tóm tắt phiếu do AI viết khiến các câu trả lời do AI tạo sau đó dựa vào văn bản không ai viết, và khi truy ngược năm câu trả lời qua các nguồn của chúng, hai câu dựa vào một bản tóm tắt đã nêu sai vấn đề. Các báo cáo trạng thái hằng tuần, khi đọc, nói ít điều không có trong báo cáo trước, và các bên liên quan đã ngừng đọc quá trang hai.

Bà đề xuất bốn thay đổi, được đội lãnh đạo dịch vụ và chủ sở hữu tri thức chấp nhận. Các bài tạo sinh cần một biên tập viên có tên rà soát trước khi công bố, và được gắn nhãn cho đến khi được phê duyệt. Một giới hạn một bài tạo sinh cho mỗi cụm chủ đề ngăn chặn bản trùng lặp, và một đợt quét gộp hoặc cho nghỉ hưu các hạng mục dư thừa. Mẫu báo cáo được cắt xuống hai trang dẫn đầu bằng kết quả, và AI chỉ được dùng để soạn những phần mà một người sau đó chỉnh sửa. Tóm tắt phiếu được đánh dấu là do AI tạo, và một mẫu được kiểm tra mỗi tháng. Bảng điều khiển báo cáo tỷ lệ hạng mục hữu ích, tỷ lệ dư thừa, tỷ lệ đã rà soát và gánh nặng xác minh bên cạnh số đếm bài.

Sau hai quý, số bài được tạo mỗi tháng giảm xuống 190, tỷ lệ hạng mục hữu ích tăng lên 91 phần trăm, tỷ lệ dư thừa giảm xuống 11 phần trăm, tỷ lệ đã rà soát là 100 phần trăm, và gánh nặng xác minh ổn định ở khoảng 16 giờ mỗi tuần. Mức hài lòng với tự phục vụ hồi phục và các liên hệ "bài viết không giúp được" giảm. Các bên liên quan đọc báo cáo hai trang. Một giám đốc yêu cầu mục tiêu 1.000 bài mỗi tháng để cho thấy giá trị của chương trình AI. Người quản lý chất lượng dịch vụ giải thích rằng chính số đếm là vấn đề, và đề xuất theo dõi tính hữu ích và việc sử dụng. Quyết định được ghi lại.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Một buổi rà soát đều đặn xem mỗi số đếm có còn phản ánh tính hữu ích không giúp đội nhận ra lạm phát sớm, và các bên liên quan có thể cho bạn biết họ thực sự dùng gì. Điều cần lưu ý là siết chặt một số đếm sau khi lạm phát được nhận ra bắt đầu lại chu kỳ.

### AI

AI làm khối lượng và tốc độ rẻ, nên mọi số đếm về khối lượng hay tốc độ đều phình lên. Hãy ghép mỗi cái với tỷ lệ hạng mục mà một người đánh giá là hữu ích và gánh nặng xác minh, và kiểm tra nội dung dư thừa. Điều cần lưu ý là AI dùng để kiểm tra đầu ra của AI có thể chung điểm mù, nên hãy giữ việc lấy mẫu bởi con người.

### Tự động hóa

Hãy tự động hóa việc phát hiện bản trùng lặp, gần trùng lặp và nội dung cũ, và đo việc phát hiện theo dương tính giả. Điều cần lưu ý là việc dọn dẹp tự động có thể gỡ những hạng mục hiếm nhưng quan trọng.

### Phân tích

Hãy báo cáo tỷ số đầu ra trên kết quả và tỷ lệ hạng mục hữu ích kèm cỡ mẫu. Quyết định được cung cấp thông tin là dừng báo cáo số đếm nào. Điều cần lưu ý là tỷ số phụ thuộc vào cách kết quả được định nghĩa, nên hãy nêu nó.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Tạo sinh thì rẻ và thời gian rà soát thì khan hiếm. Hãy giữ tài liệu và phiếu ngắn, rà soát những gì khách hàng sẽ đọc, và xóa thoải mái. Một tập bài nhỏ, đúng tốt hơn một tập lớn đáng ngờ.

**Doanh nghiệp nhỏ.** Có ít năng lực để rà soát, nên hãy giới hạn điều công cụ tạo ra. Ưu tiên một nhúm hướng dẫn và mẫu đã xác minh. Đề phòng việc công bố tài liệu tạo sinh trên các trang công khai mà không kiểm tra.

**Doanh nghiệp lớn.** Quy mô khuếch đại nhiễu. Hãy thiết lập quản trị nội dung với người sở hữu, nhãn và quy tắc rà soát, đo tính hữu ích trên cơ sở tri thức, và chạy các đợt dọn dẹp định kỳ. Chia sẻ tiêu chí giữa các đội và so sánh xu hướng, không phải các đội.

**Chính phủ và khu vực công.** Nội dung công phải chính xác và dễ tiếp cận, và lỗi có thể gây hại. Hãy yêu cầu rà soát thông tin công được tạo sinh, giữ hồ sơ về cách nó được tạo ra, và áp dụng tiêu chuẩn ngôn ngữ đơn giản và khả năng tiếp cận. Quy tắc lưu giữ và hồ sơ có thể áp dụng cho tài liệu được tạo sinh (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của việc phòng chống lạm phát là khiêm tốn: thời gian rà soát cho việc lấy mẫu, công sức biên tập cho nội dung tạo sinh, công cụ phát hiện bản trùng lặp, và công sức lập đường cơ sở lại cho xu hướng. Chi phí của việc không làm thì lớn hơn nhưng phân tán: người dùng ngừng tin tự phục vụ, người rà soát kiệt sức, quyết định dựa trên con số phình to, và các dự án dọn dẹp.

Hãy xây hồ sơ từ dữ liệu của chính bạn: tỷ lệ hạng mục hữu ích và gánh nặng xác minh theo thời gian, khối lượng liên hệ do nội dung không hữu ích gây ra, và chi phí của một đợt dọn dẹp cơ sở tri thức. Tránh dùng các con số đã công bố về chất lượng nội dung tạo sinh, thay đổi rất nhiều theo công cụ, nhiệm vụ và phương pháp. Gồm chi phí tránh được của tổn hại danh tiếng do công bố thông tin sai (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Ăn mừng khối lượng.** Nó thưởng cho nhiễu. Hãy ăn mừng kết quả và tính hữu ích.
- **Tốc độ bản nháp đầu làm câu chuyện năng suất.** Khoản tiết kiệm có thể biến mất trong kiểm tra. Hãy đo thời gian đến kết quả đã xác minh.
- **Công bố nội dung tạo sinh mà không rà soát.** Lòng tin xói mòn âm thầm. Hãy rà soát và gắn nhãn.
- **Để nội dung tạo sinh nuôi việc tạo sinh.** Lỗi tích lũy. Hãy kiểm tra chuỗi.
- **Đường cơ sở không đổi.** Xu hướng gây hiểu lầm sau một sự dịch chuyển công nghệ. Hãy chú thích và lập đường cơ sở lại.
- **Làm quá tải người rà soát.** Rà soát trở thành con dấu đóng cho có. Hãy giới hạn khối lượng và đo gánh nặng.
- **Dùng thẩm phán AI cho mọi thứ.** Nó có thể chung điểm mù với người tạo ra. Hãy giữ con người trong vòng lặp.
- **Phớt lờ sự bật lại.** Công việc rẻ hơn thu hút nhiều công việc hơn. Hãy quyết định thời gian tiết kiệm để làm gì.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Ghép và lấy mẫu | Khối lượng được báo cáo một mình | Ấn tượng không chính thức về chất lượng | Mọi chỉ số khối lượng được ghép với một kiểm tra tính hữu ích được lấy mẫu | Tính hữu ích, gánh nặng và dư thừa được quản lý với mục tiêu cho rà soát chứ không cho khối lượng | Cái nhìn liên tổ chức về chất lượng tín hiệu; tiêu chí chia sẻ với đối tác |
| Nội dung và vòng lặp | Nội dung tạo sinh bị trộn lẫn | Một số gắn nhãn | Nội dung tạo sinh được gắn nhãn và rà soát trước khi công bố; chuỗi được lấy mẫu | Vòng lặp được giám sát; kho được biên tập; bản trùng lặp được cho nghỉ hưu theo lịch | Nguồn gốc được theo dõi đầu cuối qua công cụ và nhà cung cấp |
| Đường cơ sở và sự chú ý | Xu hướng được đọc xuyên qua sự dịch chuyển | Chú thích trên một số biểu đồ | Đường cơ sở được đặt lại nơi dữ liệu đổi; sự bật lại được xem xét | Cờ trôi dạt được rà soát hằng quý; tải người rà soát được quản lý | Thiết kế chỉ số thích ứng liên tục với thay đổi công nghệ cùng các bên liên quan |

## Danh sách kiểm tra

- [ ] Mỗi chỉ số khối lượng hay tốc độ có một bạn đồng hành về tính hữu ích do một người đánh giá.
- [ ] Một mẫu ngẫu nhiên các hạng mục có AI chạm vào được rà soát hằng tháng theo một tiêu chí bằng văn bản.
- [ ] Gánh nặng xác minh được ước lượng và theo dõi như một xu hướng.
- [ ] Tri thức tạo sinh được gắn nhãn và rà soát trước khi công bố.
- [ ] Sự dư thừa trong cơ sở tri thức được đo và giảm.
- [ ] Các luồng cảnh báo và phiếu được giám sát về tỷ lệ hữu ích và bản trùng lặp.
- [ ] Các chuỗi từ đầu ra tạo sinh ngược về nguồn của chúng được lấy mẫu.
- [ ] Xu hướng qua thời điểm đưa AI vào được chú thích hoặc lập đường cơ sở lại.
- [ ] Báo cáo cho lãnh đạo dẫn đầu bằng kết quả.
- [ ] Người dùng và các bên liên quan được hỏi liệu tín hiệu rõ hơn hay nhiễu hơn.

## Lời nhắc AI

**Tạo một tiêu chí tính hữu ích.**

```text
Draft a short rubric (no more than six criteria) for judging whether a [knowledge
article, ticket summary, status report] is useful in [type of organization].
Include correctness, relevance to a real need, duplication, currency, and
clarity, with a three-level rating and examples of each level. Do not invent
statistics. List your assumptions and how to keep reviewers consistent.
```

**Phân tích sự sụt giảm tín hiệu.**

```text
Since introducing AI for [task], these figures changed: [paste volumes, resolution,
satisfaction, reopen rate, reviewer hours]. Describe what the pattern suggests
about inflation or dilution, which changes may be due to easier creation, what
to sample next, and which metrics may need a new baseline. Do not assume
causes the data cannot support. List your assumptions.
```

**Lập kế hoạch dọn dẹp cơ sở tri thức.**

```text
Our knowledge base has [number] articles, of which [number] were generated in the
last [period]. Propose a clean-up plan: how to detect duplicates and stale items,
how to prioritize by use, how to review generated articles, rules to prevent
recurrence, and measures to track. Do not assume specific tools. List your
assumptions and risks.
```

**Truy một chuỗi nội dung tạo sinh.**

```text
Here is an AI-generated answer and the sources it drew on: [paste]. Trace each
claim to its source and mark whether the source was human-written, reviewed
generated content, or unreviewed generated content. Identify where an error
could have entered and suggest a check. Do not assume facts beyond the text. List
your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm bạn đồng hành về tính hữu ích cho một chỉ số khối lượng hay tốc độ.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số chịu ảnh hưởng của AI ghép khối lượng với tính hữu ích được lấy mẫu và mang vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Khi AI làm đầu ra rẻ, các chỉ số khối lượng và tốc độ phình ra và tỷ lệ hữu ích có thể giảm.
- Ghép mọi thước đo khối lượng hay tốc độ với một phép kiểm tra tính hữu ích được lấy mẫu, do con người đánh giá.
- Đo thời gian đến một kết quả đã xác minh và gánh nặng xác minh, vì kiểm tra trở thành nút thắt.
- Gắn nhãn và rà soát nội dung tạo sinh trước khi nó vào kho dùng chung, và ngăn các vòng lặp tự nuôi chính chúng mà không kiểm tra.
- Lập đường cơ sở lại xu hướng sau một sự dịch chuyển công nghệ, và dẫn đầu báo cáo bằng kết quả.
- Quyết định trước thời gian tiết kiệm để làm gì, và bảo vệ sự chú ý của người rà soát và người dùng.

## Tài liệu tham khảo và đọc thêm

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
