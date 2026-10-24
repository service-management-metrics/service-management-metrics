# Triển khai chỉ số mà không gieo sợ hãi

**Đo lường có hiệu quả khi mọi người tin rằng các con số mô tả công việc của họ để giúp họ, nên hãy triển khai với sự minh bạch, quyền sở hữu của đội, những lời hứa bằng văn bản về cách dùng, và không có bảng xếp hạng cá nhân.**

## Tổng quan và động lực

Một chương trình chỉ số thành hay bại nhờ lòng tin. Cùng một tập thước đo có thể là một tấm gương hữu ích ở một tổ chức và là nguồn nỗi sợ ở tổ chức khác. Sự khác biệt hiếm khi nằm ở các thước đo. Nó nằm ở điều mọi người tin sẽ xảy ra với họ vì các con số. Nếu họ tin các con số sẽ được dùng để xếp hạng, đổ lỗi hay cắt giảm họ, phản ứng hợp lý là tự bảo vệ: chọn công việc cho điểm tốt, trì hoãn báo cáo vấn đề, tranh cãi về định nghĩa, và âm thầm điều chỉnh điều được ghi lại. Dữ liệu khi đó ngừng mô tả công việc, và chương trình mất chính thứ nó được xây để cung cấp.

Mẫu hình này cũ và nổi tiếng. [Hiệu ứng Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) mô tả cách mọi người đổi hành vi khi họ biết mình đang bị quan sát. [Định luật Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) nói rằng một chỉ báo định lượng càng được dùng cho việc ra quyết định, nó càng chịu áp lực làm hỏng và càng làm méo quy trình mà nó định giám sát. [Định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) nêu một ý tương tự về mục tiêu (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Không điều nào trong số này là lý do để tránh đo lường. Chúng là lý do để thiết kế việc triển khai sao cho động cơ làm méo thấp và lý do nói thật cao.

[An toàn tâm lý](https://en.wikipedia.org/wiki/Psychological_safety) là niềm tin chung rằng một đội là an toàn cho việc chấp nhận rủi ro giữa các cá nhân, như thừa nhận sai lầm, đặt câu hỏi, hay báo tin xấu. Các chương trình chỉ số vừa phụ thuộc vào nó vừa có thể xói mòn nó. Các thước đo thất bại, làm lại và trì hoãn chỉ trung thực khi mọi người cảm thấy an toàn để báo cáo chúng (xem chủ đề 9.2, Chỉ số hài lòng và sức khỏe tinh thần, và chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi). [Lòng tin](https://en.wikipedia.org/wiki/Trust_(social_science)) giữa những người được đo và những người dùng thước đo là tài sản nền tảng, và nó được xây chậm và tiêu nhanh.

[Quản lý thay đổi](https://en.wikipedia.org/wiki/Change_management) là kỷ luật chuẩn bị và hỗ trợ con người qua thay đổi. Đưa chỉ số vào là một thay đổi tổ chức, và nó xứng đáng sự cẩn trọng như một quy trình hay công cụ mới (xem chủ đề 9.6, Chỉ số thay đổi tổ chức và mức độ áp dụng). [Vòng đời áp dụng công nghệ](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) mô tả cách đổi mới lan từ những người nhiệt tình đến số đông, là một lời nhắc rằng một thí điểm được tôn trọng với các đội sẵn lòng làm được nhiều hơn một mệnh lệnh. Một [dự án thí điểm](https://en.wikipedia.org/wiki/Pilot_project) là một thử nghiệm quy mô nhỏ kiểm thử một cách tiếp cận trước khi cam kết rộng hơn. Một [bảng thông tin](https://en.wikipedia.org/wiki/Information_radiator) là một màn hình hiển thị thông tin mà mọi người đọc trong nháy mắt mà không phải hỏi, hợp với tính minh bạch khi nó cho thấy dữ liệu của đội cho chính đội sở hữu nó.

Các mục đích linh hoạt cho việc triển khai hình dạng của nó. Sự tham gia liên tục của các bên liên quan nghĩa là những người được đo giúp chọn thước đo và quy tắc sử dụng chúng. Cải tiến liên tục nghĩa là chính chương trình được thay đổi để đáp lại điều mọi người nói. Tiến hóa liên tục nghĩa là các thước đo được kỳ vọng sẽ đổi, điều này hạ mức rủi ro của bất kỳ cái nào. Nhịp độ bền vững nghĩa là chương trình không thêm báo cáo chen lấn công việc. Xây dựng quanh những cá nhân có động lực nghĩa là đối xử với con người như người lớn có năng lực có thể dùng dữ liệu để cải thiện công việc của chính họ, không phải như nguồn lực để giám sát. Lập trường thực tế thì đơn giản: đo hệ thống, chia sẻ dữ liệu với những người trong đó, và để họ dẫn dắt cải tiến.

Chủ đề làm việc cùng hướng dẫn bảng điều khiển (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ) và quản trị các thước đo (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

## Nguyên tắc chính

- **Nói dữ liệu để làm gì, và không để làm gì.** Viết cả hai ra, và giữ đúng chúng.
- **Các đội sở hữu thước đo của mình.** Những người làm công việc giúp định nghĩa, xem và diễn giải các con số về nó.
- **Đo hệ thống, không phải cá nhân.** Không bảng xếp hạng, không điểm theo từng người, không dùng dữ liệu trong đánh giá hiệu suất cá nhân.
- **Minh bạch.** Chia sẻ định nghĩa, nguồn dữ liệu, và ai thấy gì. Bất ngờ nuôi lớn sự nghi ngờ.
- **Bắt đầu với tình nguyện viên.** Một thí điểm sẵn lòng tạo ra câu chuyện và bản sửa trước khi triển khai rộng hơn.
- **Cho thấy việc sử dụng.** Chứng minh rằng các con số dẫn đến sự giúp đỡ, như gỡ một trở ngại, chứ không dẫn đến đổ lỗi.
- **Cho phép thách thức.** Mọi người có thể đặt câu hỏi về một con số, và sửa chữa được thực hiện nhanh và hiển thị.
- **Đi ở nhịp độ bền vững.** Vài thước đo mỗi lần, với thời gian để học.

## Định nghĩa chỉ số

Các thước đo dưới đây cho đội chương trình biết việc triển khai đang xây hay đang tiêu lòng tin. Chúng mô tả các đội và chương trình, không phải cá nhân. Một số dựa vào khảo sát và quan sát hành vi, và tốt nhất được đọc như các tín hiệu để nói chuyện.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ điều lệ sử dụng | Tỷ lệ đội tham gia đã thống nhất một tuyên bố bằng văn bản về mục đích sử dụng thước đo của họ và điều chúng không bao giờ được dùng | số đội có điều lệ đã thống nhất / số đội tham gia | phần trăm | Điều lệ do chương trình giữ | Quản trị; quản lý thay đổi tổ chức | Thỏa thuận làm việc | Hằng quý |
| Tỷ lệ quyền sở hữu của đội | Tỷ lệ thước đo hiển thị của một đội mà đội đã giúp viết hoặc đã phê duyệt định nghĩa | số thước đo có đội phê duyệt / số thước đo hiển thị cho đội | phần trăm | Danh mục chỉ số; bản ghi phê duyệt | Cải tiến liên tục | Đội tự tổ chức | Hằng quý |
| Tín hiệu thẳng thắn | Liệu việc báo cáo vấn đề và suýt sự cố có giữ ổn định hay tăng sau khi thước đo được đưa vào | số báo cáo suýt sự cố hoặc vấn đề mỗi đội mỗi quý, trước và sau; xu hướng | báo cáo | Bản ghi sự cố, suýt sự cố và phân tích sau sự cố | Quản lý sự cố; cải tiến liên tục | Suy ngẫm không đổ lỗi | Hằng quý |
| Thời gian xử lý thách thức | Thời gian từ khi một người hoặc đội thách thức một con số đến một giải quyết hiển thị với họ | trung vị và bách phân vị thứ 85 của số ngày từ thách thức đến giải quyết | ngày | Nhật ký thách thức | Cải tiến liên tục; quản lý tri thức | Đáp lại phản hồi | Hằng quý |
| Cảm nhận về sự an toàn của đo lường (khảo sát) | Mức đồng ý ở cấp đội trong khảo sát với các phát biểu như "dữ liệu về công việc của chúng tôi được dùng để giúp chúng tôi" | phần trăm đồng ý trong khảo sát đội; tỷ lệ phản hồi được hiển thị | phần trăm | Khảo sát đội ẩn danh, tổng hợp | Quản lý thay đổi tổ chức | Lòng tin và những cá nhân có động lực | Hai lần một năm |
| Sự cố sử dụng cá nhân | Các trường hợp dữ liệu được cho thấy hoặc dùng để xếp hạng hay đánh giá cá nhân, trái với điều lệ | số trường hợp được báo cáo mỗi quý, kèm kết quả | số đếm | Báo cáo cho chương trình; rà soát bảng điều khiển và đánh giá | Quản trị | Tôn trọng con người | Hằng quý |
| Áp dụng tự nguyện | Tỷ lệ đội đủ điều kiện đã chọn tham gia chương trình trong một kỳ, trước bất kỳ mệnh lệnh nào | số đội chọn tham gia / số đội đủ điều kiện được mời | phần trăm | Hồ sơ chương trình | Quản lý thay đổi tổ chức | Thí điểm và học hỏi | Hằng quý |

Khảo sát về cảm nhận an toàn cần một kích thước nhóm tối thiểu khi báo cáo để không cá nhân nào bị xác định, và nó nên ẩn danh. Tín hiệu thẳng thắn phải được đọc cẩn thận: số báo cáo tăng có thể nghĩa là nhiều vấn đề hơn hoặc nhiều sự sẵn lòng báo cáo hơn, và cái thứ hai thường là điều một chương trình khỏe tạo ra lúc đầu. Sự cố sử dụng cá nhân không phải số đếm để giấu. Mục tiêu là mọi trường hợp đều được báo cáo, xử lý và sửa, và một số ít trường hợp được báo cáo là dấu hiệu của một đường báo cáo hoạt động, không phải thất bại của chương trình. Áp dụng tự nguyện chỉ được đếm cho kỳ trước bất kỳ mệnh lệnh nào.

## Khuyến nghị

### Đặt quy tắc nền tảng trước

**1. Viết ra các lời hứa và công bố chúng.** Trước khi con số đầu tiên được cho thấy, hãy viết một điều lệ ngắn. Một điều lệ tốt nói rằng các thước đo mô tả đội, dịch vụ và hệ thống và không bao giờ được dùng để xếp hạng cá nhân hay trong đánh giá hiệu suất cá nhân. Nó nói ai thấy gì, dữ liệu được giữ bao lâu, mọi người thách thức một con số thế nào, và điều gì xảy ra nếu các quy tắc bị phá vỡ. Lãnh đạo cấp cao ký nó. Điều lệ là một cam kết cho phép mọi người hạ phòng bị, và nó nên dễ tìm và dễ đọc.

**2. Tách đo lường để cải tiến khỏi đo lường để phán xét.** Các đội dùng thước đo của họ để cải thiện công việc của chính mình. Lãnh đạo dùng các góc nhìn tổng hợp để hướng hỗ trợ và đầu tư. Không cách dùng nào nhằm đánh giá một con người. Nếu một tổ chức phải đánh giá cá nhân, nó nên làm qua trò chuyện, bằng chứng và bối cảnh, và không bao giờ bằng cách đọc ra từ một bảng điều khiển (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

**3. Cởi mở về các đánh đổi.** Hãy nói với mọi người rằng mọi thước đo đều có thể bị lợi dụng, rằng bạn biết theo những cách nào, và mỗi cái đi kèm một rào chắn. Hãy cho thấy các vectơ lợi dụng và rào chắn theo phong cách của cuốn sách này. Nêu tên các rủi ro một cách công khai cho thấy thiện chí, và mời mọi người chỉ ra các cách bạn đã bỏ sót.

### Biến các đội thành người sở hữu

**4. Để các đội chọn và định nghĩa.** Hãy đưa ra một thực đơn thước đo và để mỗi đội chọn vài cái để bắt đầu, điều chỉnh định nghĩa kèm lý do nêu rõ, và thêm cái của riêng mình. Các đội đã chọn thước đo của mình có khả năng dùng chúng trung thực hơn. Giữ một lõi chung nhỏ để các dịch vụ có thể được so sánh ở cấp nơi việc so sánh hợp lệ (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

**5. Cho các đội thấy dữ liệu của họ trước.** Hãy đưa mỗi đội các con số của họ trước khi bất kỳ ai khác thấy, với thời gian để kiểm tra, sửa và thêm bối cảnh. Đội sở hữu câu chuyện. Khi dữ liệu sau đó được cho lãnh đạo thấy, đội trình bày hoặc chú thích nó. Điều này tránh bất ngờ và đảm bảo cách diễn giải đến từ những người gần công việc nhất.

**6. Giữ các góc nhìn ở đúng cấp.** Hãy cho thấy các góc nhìn cấp đội và cấp dịch vụ. Đừng cho thấy phân tách theo từng người, và tắt các tính năng công cụ làm vậy. Nơi một góc nhìn chi tiết là cần thiết cho điều tra, như lịch sử của một sự cố đơn lẻ, hãy hạn chế truy cập, giải thích vì sao, và giữ nó ngoài các cuộc trò chuyện đánh giá (xem chủ đề 11.2, Bức tranh công cụ).

### Triển khai để giành lòng tin

**7. Thí điểm với tình nguyện viên.** Hãy mời hai hoặc ba đội tò mò và được tôn trọng. Làm việc với họ về các thước đo và quy tắc. Để họ kể câu chuyện của chính mình cho đồng nghiệp. Các bản sửa và phản đối của họ sẽ cải thiện chương trình, và sự tán thành của họ nặng hơn bất kỳ thông báo nào. Hỏi họ sẽ đổi gì trước khi triển khai rộng, và hãy đổi nó.

**8. Giao giá trị sớm và hiển thị.** Trong vài tuần đầu, hãy dùng dữ liệu để gỡ một thứ làm đội khó chịu: một hàng đợi luôn chờ, một bước phê duyệt không có mục đích, một báo cáo không ai đọc. Khi mọi người thấy các con số dẫn đến sự giúp đỡ, họ đưa dữ liệu trung thực hơn. Khi họ thấy các con số dẫn đến câu hỏi về họ, họ đưa ít hơn.

**9. Phản hồi thách thức nhanh.** Khi ai đó nói một con số sai, hãy nghiêm túc xem xét. Kiểm tra nó, sửa định nghĩa hoặc dữ liệu, và nói công khai điều đã làm. Một sự sửa chữa nhanh, tôn trọng xây dựng lòng tin, và một câu trả lời phòng thủ tiêu nó. Giữ một nhật ký thách thức, và coi các thách thức lặp lại là tín hiệu rằng thước đo cần sửa.

### Bảo vệ lòng tin theo thời gian

**10. Để ý các dấu hiệu của nỗi sợ.** Các dấu hiệu gồm các đội tranh cãi về định nghĩa để tránh kết quả, các cải thiện đột ngột không khớp với tín hiệu khác, ít vấn đề được báo cáo hơn, công việc được chọn để trông tốt, và mọi người hỏi ai có thể thấy dữ liệu. Hãy coi những điều này là thông tin về chương trình chứ không phải hành vi sai trái. Hỏi các đội, lắng nghe, và điều chỉnh.

**11. Buộc lãnh đạo theo điều lệ.** Lãnh đạo chịu áp lực phải so sánh, xếp hạng và giải thích. Hãy cho họ thứ họ có thể dùng một cách chính đáng: xu hướng, phân phối và thước đo kết quả ở cấp đội và dịch vụ. Làm cho việc báo cáo một vi phạm điều lệ dễ dàng, phản hồi từng báo cáo, và công bố kết quả, không nêu tên những cá nhân đã nêu ra. Một vi phạm hiển thị duy nhất có thể xóa bỏ nhiều tháng công việc, và một sự sửa chữa hiển thị có thể xây lại nó.

**12. Rà soát chương trình cùng những người trong đó.** Mỗi quý, hãy hỏi các đội các thước đo giúp ích cho việc gì, làm méo điều gì, và họ sẽ bỏ cái gì. Cho các thước đo không qua phép thử nghỉ hưu. Chia sẻ kết quả của buổi rà soát. Một cam kết liên tục, hiển thị để cải thiện chương trình là tín hiệu mạnh nhất rằng nó tồn tại để phục vụ các đội (xem chủ đề 9.5, Chỉ số cải tiến liên tục).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ điều lệ sử dụng | Ký điều lệ như một hình thức; lãnh đạo phớt lờ chúng | Kiểm tra việc dùng điều lệ trong thực tế; báo cáo sự cố sử dụng cá nhân; rà soát điều lệ cùng các đội |
| Tỷ lệ quyền sở hữu của đội | Các đội phê duyệt định nghĩa họ chưa đọc; chương trình trình bày định nghĩa đã xong để ký | Lấy mẫu cách định nghĩa được phát triển; theo dõi các thay đổi đội yêu cầu và đã thực hiện |
| Tín hiệu thẳng thắn | Gây áp lực các đội báo nhiều hơn hay ít vấn đề hơn; đổi tên danh mục | Đọc cùng mức nghiêm trọng và nội dung phân tích sau sự cố; so sánh với vấn đề do khách hàng báo |
| Thời gian xử lý thách thức | Đóng thách thức mà không có giải quyết hiển thị; làm nản thách thức | Yêu cầu phản hồi hiển thị; khảo sát người thách thức; theo dõi thách thức lặp lại |
| Cảm nhận về sự an toàn của đo lường (khảo sát) | Huấn luyện người trả lời; tỷ lệ phản hồi thấp giấu các đội không hài lòng | Ẩn danh và kích thước nhóm tối thiểu; cho thấy tỷ lệ phản hồi; nói chuyện trực tiếp với các đội |
| Sự cố sử dụng cá nhân | Không báo cáo; phân loại lại sự cố là cái khác; đổ lỗi cho người báo | Báo cáo ẩn danh dễ dàng; bảo vệ người báo; rà soát các đánh giá và bảng điều khiển tìm dữ liệu cá nhân |
| Áp dụng tự nguyện | Áp lực được định khung là lời mời; tính các đội tham gia để tránh soi xét | Hỏi các đội vì sao họ tham gia; kiểm tra việc dùng trong thực tế; giữ kỳ không có mệnh lệnh |

Một kết quả đọc lành mạnh cho thấy điều lệ mà các đội thực sự tham chiếu, các thước đo mà các đội đã giúp định hình, báo cáo vấn đề ổn định hoặc tăng, thách thức được trả lời nhanh, một khảo sát cho thấy mọi người tin dữ liệu giúp họ, vài vi phạm được báo cáo và xử lý công khai, và các đội tham gia vì họ muốn.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Triển khai theo mệnh lệnh cho mọi đội cùng lúc | Nhanh và nhất quán | Tuân thủ mà không tin; lợi dụng và oán giận |
| Thí điểm tự nguyện, rồi lan rộng | Xây câu chuyện và lòng tin | Chậm hơn; độ phủ không đồng đều |
| Các đội chọn mọi thước đo của mình | Quyền sở hữu cao | Khó so sánh; khoảng trống độ phủ |
| Lõi chung cộng lựa chọn của đội | Cân bằng giữa so sánh và quyền sở hữu | Cần quản trị |
| Bảng điều khiển mở giữa các đội | Minh bạch; học hỏi chung | Rủi ro so sánh và xếp hạng |
| Góc nhìn chỉ cho đội, chia sẻ tổng hợp | Không gian an toàn cho suy ngẫm trung thực | Lãnh đạo có thể cảm thấy mù |
| Điều lệ bằng văn bản | Lời hứa rõ ràng; cơ sở để thách thức | Vô giá trị nếu bị phớt lờ |
| Bảo đảm không chính thức | Nhanh | Bị quên; không có đường khiếu nại |

Câu trả lời dạng văn xuôi là bắt đầu với các đội sẵn lòng, trao cho họ quyền sở hữu, chia sẻ tổng hợp lên trên với sự đồng ý và bối cảnh của đội, và hậu thuẫn các lời hứa bằng một điều lệ mà lãnh đạo bị buộc theo.

## Câu hỏi để thảo luận với đội nhóm

**1. Chúng ta tin điều gì sẽ xảy ra với những con số này, và chúng ta đã thấy điều gì xảy ra trong quá khứ?**
Mời những câu chuyện trung thực về thước đo được dùng tốt và xấu. Người điều phối nên ghi lại nỗi sợ mà không tranh luận. Thống nhất lời hứa nào sẽ tạo khác biệt nhiều nhất.

**2. Chúng ta sẽ viết gì trong một điều lệ nói dữ liệu của chúng ta sẽ không bao giờ được dùng để làm gì?**
Cùng soạn bằng lời giản dị. Gồm đánh giá hiệu suất cá nhân, xếp hạng và sa thải, nếu đó là nỗi lo. Đưa nó đến những lãnh đạo sẽ phải ký.

**3. Trong các thước đo đề xuất, chúng ta sẽ chọn cái nào và bỏ cái nào?**
Để mỗi người bỏ phiếu riêng tư và so sánh. Thảo luận vì sao một số cái có vẻ đe dọa. Thống nhất một tập ngắn để thử trong một quý.

**4. Làm sao chúng ta biết mọi người có đang bắt đầu giấu vấn đề?**
Liệt kê các dấu hiệu: ít báo cáo hơn, ngôn ngữ làm mềm, công việc bị tránh. Thống nhất ai theo dõi và cách chúng ta nêu ra mà không đổ lỗi.

**5. Ai nên thấy các con số của đội chúng ta, dưới dạng nào, và khi nào?**
Thảo luận chỉ đội, tổng hợp cho lãnh đạo, và so sánh giữa các đội. Quyết định điều gì được chia sẻ và ai trình bày. Viết quy tắc ra.

**6. Nếu một con số về chúng ta sai, làm sao chúng ta được sửa nó?**
Truy con đường từ nhận ra đến sửa. Xác định các độ trễ và ai quyết định. Thống nhất một lộ trình thách thức đơn giản và kỳ vọng thời gian.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội gánh rủi ro bị đo, và họ nắm tri thức về các con số có nghĩa gì. Họ nên tham gia chọn và định nghĩa thước đo, dùng dữ liệu trong các buổi rà soát của chính mình, và lên tiếng khi một con số gây hiểu lầm. Họ được lợi khi họ thấy dữ liệu trước và khi đo lường giúp gỡ trở ngại.

### Đội dịch vụ và vận hành

Các đội vận hành thường nắm dữ liệu phong phú nhất và gánh nặng trực và sự cố nặng nhất. Họ nên cảnh giác với các thước đo thưởng cho sự im lặng hay phạt việc leo thang, bảo vệ việc báo cáo sự cố và suýt sự cố, và để ý dữ liệu trực không bị dùng để xếp hạng con người (xem chủ đề 5.7, Chỉ số toil và trực).

### Lãnh đạo và quản trị

Lãnh đạo đặt ra văn hóa sử dụng. Họ nên ký và tuân theo điều lệ, yêu cầu các góc nhìn đội và dịch vụ, phản hồi vi phạm một cách công khai, và tránh yêu cầu xếp hạng. Họ nên đánh giá chương trình theo sự cải thiện nó cho phép và sự thẳng thắn nó giữ được, không phải theo số bảng điều khiển.

### Khách hàng và người dùng

Khách hàng và người dùng được lợi khi các đội báo cáo vấn đề trung thực và sửa nguyên nhân. Họ cũng có thể là đối tượng của việc thu thập dữ liệu. Họ xứng đáng sự rõ ràng về điều gì được thu thập về họ và nó được dùng thế nào, và họ có thể là đối tác trong việc quyết định thước đo nào cho thấy giá trị với họ (xem chủ đề 6.1, Chỉ số mức hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận công nghệ của một nhà cung cấp dịch vụ y tế đưa chỉ số vào 15 đội phân phối và hỗ trợ của mình. Một nỗ lực trước đó, ba năm trước, đã công bố bảng xếp hạng các đội theo số phiếu đã đóng và kết thúc bằng một đợt tăng vọt việc đóng các phiếu giá trị thấp và một sự sụt giảm số sự cố được báo cáo. Các con số dưới đây chỉ mang tính minh họa.

Trưởng bộ phận quản lý dịch vụ mới bắt đầu bằng cách hỏi sáu trưởng nhóm họ nhớ gì. Họ mô tả bảng xếp hạng và hậu quả. Bà soạn một điều lệ cùng họ: các thước đo mô tả đội và dịch vụ, không bao giờ cá nhân; các góc nhìn cá nhân bị tắt trong công cụ; dữ liệu không bao giờ được dùng trong đánh giá cá nhân; các đội thấy dữ liệu của họ trước; bất kỳ ai cũng có thể thách thức một con số, với phản hồi trong mười ngày làm việc; và một vi phạm sẽ được báo cáo cho chương trình và rà soát công khai. Giám đốc công nghệ ký nó, và nó được đăng trên trang chương trình.

Ba đội tình nguyện cho thí điểm. Mỗi đội chọn bốn thước đo từ một thực đơn và viết lại hai định nghĩa. Một đội khăng khăng rằng "thời gian giải quyết" loại thời gian chờ khách hàng, và đội khác rằng thất bại thay đổi được định nghĩa theo tác động lên người dùng chứ không chỉ theo hoàn tác. Thí điểm cho thấy lợi ích đầu tiên vào tuần thứ ba, khi một đội thấy công việc của mình chờ trong một hàng đợi phê duyệt và gỡ một bước mà không ai biện minh được. Đội trình bày câu chuyện của mình tại một cuộc họp của bộ phận. Bảy đội nữa xin tham gia. Áp dụng tự nguyện đạt 10 trên 15 đội trong hai quý, và năm đội cuối tham gia sau mà không có mệnh lệnh.

Chương trình theo dõi nỗi sợ. Số báo cáo suýt sự cố mỗi đội tăng trong quý đầu, điều bà đọc là sự sẵn lòng báo cáo nhiều hơn, và bà xác nhận bằng cách đọc một mẫu. Một khảo sát đội với kích thước nhóm tối thiểu cho thấy 58 phần trăm người trả lời đồng ý rằng "dữ liệu về công việc của chúng tôi được dùng để giúp chúng tôi" vào đầu quý thứ hai và 76 phần trăm vào đầu quý thứ tư. Thời gian xử lý thách thức có trung vị bốn ngày làm việc. Rồi một giám đốc, đang chuẩn bị một hồ sơ ngân sách, yêu cầu một bảng xếp hạng các đội theo số lần triển khai. Trưởng chương trình nói với bà rằng điều đó nằm ngoài điều lệ, đưa ra một góc nhìn xu hướng theo dịch vụ kèm bình luận của đội, và ghi yêu cầu như một suýt sự cố sử dụng cá nhân được báo cáo kèm kết quả. Giám đốc chấp nhận. Hai quý sau, sự cố sử dụng cá nhân ở mức một, được báo cáo, xử lý và công bố không nêu tên.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy triển khai cùng những người được đo, với những lời hứa bằng văn bản về cách dữ liệu sẽ được dùng và một cuộc trò chuyện đều đặn về điều họ thấy. Điều cần lưu ý là một cuộc triển khai được thông báo từ trên xuống kèm một bảng điều khiển các đội mời gọi lợi dụng.

### AI

Nhân viên có thể sợ AI như một công cụ đo hoặc như sự thay thế, nên hãy nói rõ rằng dữ liệu do AI suy ra về cá nhân không được dùng để đánh giá họ và công việc có AI hỗ trợ được đo ở cấp đội. Điều cần lưu ý là dùng công cụ AI để phân tích hành vi cá nhân phá vỡ lời hứa, dù làm một cách âm thầm.

### Tự động hóa

Thu thập tự động là chấp nhận được khi mọi người biết cái gì được thu thập và vì sao. Hãy công bố danh sách dữ liệu được thu thập và quy tắc truy cập. Điều cần lưu ý là thu thập tự động dữ liệu hoạt động cảm thấy như giám sát, nên chỉ thu thập điều một quyết định cần.

### Phân tích

Hãy chia sẻ kết quả với đội trước, và cho thấy mỗi con số sẽ được dùng thế nào. Quyết định được cung cấp thông tin là chương trình đã giành được lòng tin chưa. Điều cần lưu ý là tín hiệu thẳng thắn là mềm, nên hãy kết hợp khảo sát với quan sát và coi phản hồi thấp là thông tin.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Đội nhỏ và lòng tin mang tính cá nhân. Hãy nói thành tiếng các con số để làm gì, để cả đội chọn vài thước đo cần theo dõi, và giữ chúng ngoài bất kỳ cuộc trò chuyện cá nhân nào. Rủi ro là một lời nhận xét thoáng qua của người sáng lập về một con số định hình lại hành vi chỉ sau một đêm. Hãy viết lời hứa ra, dù chỉ vài dòng.

**Doanh nghiệp nhỏ.** Nhân viên có thể nghi ngờ các con số là về cắt giảm việc làm. Hãy nói cởi mở vì sao bạn đo, bạn sẽ nhìn vào gì, và sẽ không nhìn gì. Mời mọi người tham gia chọn thước đo, chia sẻ điều bạn tìm thấy, và cho thấy sớm một cải tiến đã giúp họ.

**Doanh nghiệp lớn.** Quy mô làm lòng tin khó hơn, vì hầu hết lãnh đạo ở xa các đội. Hãy dùng một điều lệ được ký ở cấp cao, các thước đo do đội sở hữu với một lõi chung nhỏ, cấu hình công cụ ngăn các góc nhìn cá nhân, và một đường độc lập để báo cáo vi phạm. Thí điểm, học, và lan qua đồng nghiệp, và tránh một ngày triển khai toàn cầu duy nhất.

**Chính phủ và khu vực công.** Quy tắc việc làm, công đoàn và sự soi xét của công chúng thêm ràng buộc và kỳ vọng. Hãy tham vấn đại diện nhân viên sớm, thống nhất điều lệ với họ, và rõ ràng về ranh giới giữa dữ liệu cải tiến và bất kỳ quy trình đánh giá hiệu suất chính thức nào. Yêu cầu báo cáo công khai nên được giữ tách khỏi các thước đo cải tiến nội bộ (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí chủ yếu là thời gian của con người: soạn điều lệ, chạy thí điểm, hội thảo với các đội, xử lý thách thức, chạy khảo sát, và thời gian của lãnh đạo dành để tuân theo các quy tắc. Cũng có chi phí cơ hội, vì một cuộc triển khai cẩn thận chậm hơn một mệnh lệnh. Những chi phí đó nhỏ bên cạnh chi phí của một cuộc triển khai thất bại, trong đó dữ liệu bị méo, lòng tin bị tiêu, và chương trình bị bỏ.

Lợi tức là dữ liệu phản ánh thực tế, báo cáo trung thực về vấn đề, và các đội dùng thước đo để cải thiện. Những điều này hiện ra dưới dạng phát hiện vấn đề sớm hơn, ít tranh chấp về con số hơn, và mức áp dụng cao hơn mà không cưỡng chế. Hãy xây hồ sơ từ lịch sử của chính bạn: điều đã xảy ra khi thước đo bị áp đặt trước đây, bao nhiêu đội áp dụng tự nguyện lần này, và việc báo cáo vấn đề đã đổi thế nào. Tránh trích dẫn các con số đã công bố về sự gắn kết hay lòng tin mà không có nguồn truy được và mức liên quan với bối cảnh của bạn (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Bảng xếp hạng bất ngờ.** Xếp hạng xuất hiện trong một slide của lãnh đạo. Lòng tin chấm dứt. Hãy giữ xếp hạng ngoài chương trình.
- **Thước đo trong đánh giá hiệu suất.** Ngay cả một lần nhắc đến cũng đổi hành vi ở mọi nơi. Hãy giữ chúng ra ngoài, bằng văn bản.
- **Ra lệnh trước, giải thích sau.** Tuân thủ mà không tin. Hãy thí điểm với tình nguyện viên và giải thích lý do.
- **Một điều lệ không ai thực thi.** Lời không hành động còn tệ hơn không có. Hãy buộc lãnh đạo theo nó và công bố kết quả.
- **Giám sát theo mặc định.** Công cụ để lộ hoạt động cá nhân vì chúng có thể. Hãy tắt các tính năng đó.
- **Câu trả lời phòng thủ với thách thức.** Mọi người ngừng chỉ ra lỗi. Hãy phản hồi nhanh và tôn trọng.
- **Vội vàng đến nhiều thước đo.** Quá tải và rối. Hãy bắt đầu với vài cái và lớn lên.
- **Đọc sự im lặng là thành công.** Ít báo cáo hơn có thể nghĩa là sợ hãi. Hãy theo dõi tín hiệu thẳng thắn và nói chuyện với mọi người.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Lời hứa và việc sử dụng | Không viết ra; cách dùng thay đổi theo quản lý | Bảo đảm bằng lời; một số thỏa thuận của đội | Điều lệ bằng văn bản do lãnh đạo ký; các góc nhìn cá nhân bị tắt | Vi phạm được báo cáo và rà soát; việc dùng điều lệ được kiểm tra | Điều lệ đồng sở hữu với nhân viên và đối tác; được sửa từ kinh nghiệm |
| Quyền sở hữu và minh bạch | Thước đo bị áp đặt | Một số đội được tham vấn | Các đội chọn và định nghĩa thước đo và thấy dữ liệu trước | Tỷ lệ quyền sở hữu và thời gian xử lý thách thức được quản lý | Đội, nhà cung cấp và khách hàng chia sẻ góc nhìn theo thỏa thuận; quyền sở hữu là thường lệ |
| Lòng tin và sự thẳng thắn | Sợ hãi hoặc thờ ơ | Thí điểm với tình nguyện viên | Khảo sát an toàn và xu hướng suýt sự cố được rà soát cùng các đội | Tín hiệu kích hoạt hành động có kế hoạch; áp dụng tự nguyện được theo dõi | Sự thẳng thắn là thường lệ; cải tiến chương trình đến từ mọi người |

## Danh sách kiểm tra

- [ ] Một điều lệ bằng văn bản nêu dữ liệu để làm gì và không bao giờ để làm gì, và lãnh đạo đã ký.
- [ ] Các góc nhìn và xếp hạng cấp cá nhân bị tắt trong công cụ hoặc bị hạn chế bằng chính sách.
- [ ] Các đội chọn hoặc phê duyệt thước đo của họ và thấy dữ liệu trước người khác.
- [ ] Một thí điểm với các đội tình nguyện đi trước mọi cuộc triển khai rộng hơn.
- [ ] Lần dùng dữ liệu đầu tiên mang lại sự giúp đỡ hiển thị cho đội.
- [ ] Một lộ trình thách thức tồn tại, với thời gian phản hồi nêu rõ và một nhật ký.
- [ ] Một đường báo cáo tồn tại cho vi phạm điều lệ, và kết quả được công bố không nêu tên.
- [ ] Tín hiệu an toàn và thẳng thắn ở cấp đội được theo dõi và thảo luận với các đội.
- [ ] Vectơ lợi dụng và rào chắn được chia sẻ cởi mở với các đội.
- [ ] Chương trình được rà soát cùng các đội mỗi quý, và thước đo được cho nghỉ hưu khi chúng ngừng giúp ích.

## Lời nhắc AI

**Soạn một điều lệ chỉ số.**

```text
Draft a one-page charter for the metrics program of [organization type]. It should
state what the data is for, what it will never be used for (including individual
rankings and performance reviews), who can see what, how long data is kept, how a
person can challenge a number, how breaches are reported, and who signs it. Use
plain words. Do not give legal advice. List your assumptions and points to confirm
with human resources and legal specialists.
```

**Lập kế hoạch một thí điểm.**

```text
Plan a six-week pilot of a metrics program with two to three volunteer teams in
[context]. Include how to invite teams, which measures to offer, how to set the
rules, what early help the data should provide, what to ask the teams at the end,
and how to decide on wider rollout. Do not assume the outcome. List your
assumptions and risks.
```

**Rà soát một thước đo về nỗi sợ.**

```text
Here is a proposed measure and how it will be used: [paste]. Act as a skeptical
team member. Describe how it could be taken as a threat, how people could change
behavior to look good, and what honest reporting it might discourage. Suggest
changes to the definition, display, or rules of use that would lower the risk.
List your assumptions.
```

**Phản hồi một thách thức.**

```text
A team has challenged this number: [describe, without personal data]. Draft a
respectful response that acknowledges the concern, explains how the number is
calculated, proposes how to check it, sets a date for the answer, and says what
will change if the number is wrong. Do not be defensive. List what you do not yet
know.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm vectơ lợi dụng và rào chắn để chia sẻ cởi mở với các đội cho một thước đo đề xuất.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một kế hoạch triển khai giữ các thước đo ở cấp đội và dịch vụ và không bao giờ xếp hạng cá nhân.

## Điểm chính cần nhớ

- Lòng tin là tài sản. Hãy viết ra dữ liệu để làm gì và không bao giờ để làm gì, và giữ lời hứa.
- Đo đội, dịch vụ và hệ thống, và tắt các góc nhìn để lộ cá nhân.
- Để các đội chọn, định nghĩa, và thấy dữ liệu của họ trước, và sở hữu câu chuyện nó kể.
- Thí điểm với tình nguyện viên, giao sự giúp đỡ hiển thị sớm, và lan truyền qua đồng nghiệp.
- Trả lời thách thức nhanh, và coi các dấu hiệu sợ hãi là thông tin về chương trình.
- Buộc lãnh đạo theo điều lệ, và rà soát chương trình cùng những người trong đó.

## Tài liệu tham khảo và đọc thêm

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Trust (social science)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
