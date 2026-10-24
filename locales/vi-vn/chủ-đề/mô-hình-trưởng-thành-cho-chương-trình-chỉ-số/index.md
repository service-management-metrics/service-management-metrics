# Mô hình trưởng thành cho chương trình chỉ số

**Hãy dùng thang năm mức chung để mô tả chương trình chỉ số đang ở đâu và chọn bước nhỏ kế tiếp, không bao giờ như một điểm số để trưng bày, so sánh hay chứng nhận.**

## Tổng quan và động lực

Mọi chủ đề khác trong cuốn sách này đều kết thúc bằng một bảng trưởng thành nhỏ cho chủ thể của nó. Chủ đề này áp dụng cùng thang cho toàn bộ chương trình chỉ số. Câu hỏi không phải là thời gian sự cố của một đội tốt đến đâu. Mà là tổ chức thu thập, đọc và hành động theo các thước đo tốt đến đâu: định nghĩa có được chia sẻ không, dữ liệu có được tin không, các con số có dẫn đến quyết định không, và những người được đo có coi chương trình là sự giúp đỡ không.

Một mô hình trưởng thành là mô tả các giai đoạn mà một tổ chức có thể trải qua khi một thực hành phát triển. Ví dụ nổi tiếng nhất trong phần mềm là [Mô hình Trưởng thành Năng lực](https://en.wikipedia.org/wiki/Capability_Maturity_Model), lớn lên từ công trình tại Viện Kỹ thuật Phần mềm và lan rộng. Ảnh hưởng của nó lớn, và những lời chỉ trích theo sau cũng vậy. Các tổ chức chạy theo mức thay vì năng lực, kiểm toán viên chấm giấy tờ, và mô hình bị dùng như một huy hiệu. Việc dùng có trách nhiệm bất kỳ mô hình trưởng thành nào giữ ba lưu ý trong tầm mắt. Thang là một công cụ trò chuyện, không phải một chứng nhận. Cao hơn không phải lúc nào cũng tốt hơn, vì mức đúng phụ thuộc vào bối cảnh. Và mô hình không thay thế cho kết quả: một chương trình trưởng thành mà không cải thiện dịch vụ là một thất bại rất ngăn nắp, và một mức được trưng như huy hiệu giống một [chỉ số phù phiếm](https://en.wikipedia.org/wiki/Vanity_metric), một con số trông tốt mà không cung cấp thông tin cho quyết định nào.

Thang dùng ở đây là thang chung xuyên suốt cuốn sách và *Service Management Guide*: Khởi đầu, Phát triển, Chuẩn hóa, Quản lý và Phối hợp (xem mô hình trưởng thành chung trong đặc tả). Nó cố ý không giống các thang trưởng thành quy trình trong ITIL, trong ISO/IEC 33000, hay trong Mô hình Trưởng thành Năng lực, và một đội không nên tuyên bố điểm trong bất kỳ khung nào trong số đó dựa trên thang này.

Các mục đích linh hoạt chỉ cách dùng nó. Cải tiến liên tục nghĩa là mô hình để tìm bước kế tiếp, không phải để đạt một trạng thái cuối. Tiến hóa liên tục nghĩa là một chương trình đạt Phối hợp năm ngoái có thể thụt lùi nếu người rời đi hoặc ưu tiên dịch chuyển, nên việc tự đánh giá được lặp lại. Sự tham gia liên tục của các bên liên quan nghĩa là việc đánh giá được làm cùng các đội chứ không phải lên họ. Nhịp độ bền vững nghĩa là chương trình đi từng bước một và không cố nhảy ba mức trong một quý. Và xây dựng quanh những cá nhân có động lực nghĩa là những người làm công việc đánh giá liệu chương trình có giúp họ không. Đây là cùng logic với thực hành cải tiến liên tục trong ITIL, nơi một tổ chức kiểm tra trạng thái hiện tại, đặt một hướng đi, và cải thiện theo các bước nhỏ, một thói quen gần với [kaizen](https://en.wikipedia.org/wiki/Kaizen), ý tưởng tiếng Nhật về cải tiến liên tục bởi mọi người. Ý tưởng tổng quát hơn là [quy trình cải tiến liên tục](https://en.wikipedia.org/wiki/Continual_improvement_process) (xem chủ đề 9.5, Chỉ số cải tiến liên tục).

Mô hình có một cái bẫy riêng trong bối cảnh chỉ số. Một chương trình được đánh giá bằng chính các chỉ số của nó mời gọi chính sự méo mó mà nó cảnh báo. Nếu "số thước đo có định nghĩa" trở thành mục tiêu, định nghĩa nhân lên. Cách tiếp cận trong chủ đề này vì vậy dùng bằng chứng từ công việc (quyết định nào đã đổi, các đội nói gì) ngoài số đếm, và giữ việc đánh giá do các đội sở hữu, những người ít có lợi nhất khi thổi phồng nó (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Một biểu mẫu đánh giá đi kèm cho các đội có trong các phụ lục (xem chủ đề 12.5, Tự đánh giá mức trưởng thành).

## Nguyên tắc chính

- **Thang là một công cụ trò chuyện.** Nó giúp mọi người mô tả hiện tại và chọn bước kế tiếp, và không dùng để đánh giá, xếp hạng hay chứng nhận.
- **Đánh giá cùng các đội.** Tự đánh giá, được thảo luận cởi mở, chính xác hơn chấm điểm từ bên ngoài.
- **Đánh giá theo bằng chứng.** Hỏi quyết định nào đã đổi, mọi người nói gì, và dữ liệu cho thấy gì, cũng như những tài liệu nào tồn tại.
- **Các chiều có thể khác nhau.** Một chương trình có thể mạnh về công cụ và yếu về lòng tin. Hãy báo cáo hồ sơ, không phải một con số.
- **Đi từng bước một.** Nhắm tới mức kế tiếp ở một hoặc hai chiều, không phải mọi thứ cùng lúc.
- **Cao hơn không phải lúc nào cũng tốt hơn.** Chọn mức phù hợp với quy mô, rủi ro và nhu cầu của tổ chức.
- **Chờ đợi sự thụt lùi.** Biến động nhân sự, tái tổ chức và áp lực có thể đẩy chương trình lùi. Hãy đánh giá lại đều đặn.
- **Không bao giờ công bố bảng xếp hạng các đội.** Tổng hợp cho chương trình và chỉ chia sẻ kết quả của đội với đội đó.

## Định nghĩa chỉ số

Các thước đo dưới đây mô tả sức khỏe của chương trình và việc đánh giá nó. Chúng dành cho đội chương trình và các nhà bảo trợ, và được đọc như các tín hiệu để thảo luận.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mức tham gia đánh giá | Tỷ lệ đội tham gia đã hoàn tất một lần tự đánh giá kèm cuộc thảo luận của chính họ | số đội đã hoàn tất và thảo luận / số đội tham gia | phần trăm | Bản ghi đánh giá | Cải tiến liên tục | Suy ngẫm và hồi cứu | Hai lần một năm |
| Hồ sơ theo chiều | Phân phối các mức tự đánh giá của các đội ở mỗi chiều, được cho thấy dưới dạng khoảng chứ không phải một điểm số duy nhất | số đội ở mỗi mức, theo chiều | đội mỗi mức | Tự đánh giá, tổng hợp | Cải tiến liên tục; quản trị | Công việc hiển thị | Hai lần một năm |
| Hành động cải tiến từ đánh giá | Tỷ lệ bước kế tiếp đã thống nhất được hoàn thành, bỏ kèm lý do, hoặc đang tiến hành | số hành động đóng hoặc được giải thích lý do / số hành động đã thống nhất | phần trăm | Sổ đăng ký cải tiến | Cải tiến liên tục | Thí nghiệm nhỏ | Hằng quý |
| Bằng chứng quyết định | Tỷ lệ thước đo được lấy mẫu mà đội có thể nêu một quyết định hoặc lựa chọn có chủ ý mà thước đo đã cung cấp thông tin trong quý vừa qua | số thước đo có quyết định được nêu tên / số thước đo được lấy mẫu | phần trăm | Phỏng vấn đội; ghi chú rà soát | Cải tiến liên tục | Bằng chứng hơn nghi thức | Hằng quý |
| Lòng tin vào định nghĩa và dữ liệu | Mức đồng ý ở cấp đội rằng định nghĩa rõ ràng và dữ liệu đúng | phần trăm đồng ý trong một khảo sát đội ngắn; tỷ lệ phản hồi được hiển thị | phần trăm | Khảo sát đội ẩn danh | Quản lý tri thức; quản lý thông tin | Hiểu biết chung | Hai lần một năm |
| Thời gian đến mức kế tiếp (mô tả) | Thời gian trôi qua để một đội nâng một chiều lên một mức khi họ chọn làm vậy | số tháng trung vị từ bước đã thống nhất đến lần đánh giá lại của đội | tháng | Lịch sử đánh giá | Cải tiến liên tục | Nhịp độ bền vững | Hằng năm |
| Gánh nặng đánh giá | Số giờ việc đánh giá tốn mỗi đội | số giờ trung vị mỗi đội | giờ | Ước lượng thời gian từ các đội | Cải tiến liên tục | Nhịp độ bền vững | Hai lần một năm |

Mức tham gia được đo là hoàn tất kèm thảo luận, vì một biểu mẫu điền một mình nói ít. Hồ sơ là một khoảng và không bao giờ được lấy trung bình thành một con số trưởng thành. Thời gian đến mức kế tiếp là mô tả: một sự leo nhanh có thể phản ánh tự chấm điểm thổi phồng, và một sự leo chậm có thể phản ánh sự cẩn trọng thích hợp. Gánh nặng đánh giá là một kiểm tra chính việc đánh giá, vốn không nên tốn quá một hai giờ mỗi đội.

## Khuyến nghị

### Dùng thang cho tốt

**1. Định nghĩa các chiều của một chương trình chỉ số.** Một tập khả thi có sáu chiều: (a) câu hỏi và mục đích, liệu thước đo có trả lời những câu hỏi mà đối tượng đã hỏi; (b) định nghĩa và quyền sở hữu, liệu thước đo có định nghĩa bằng văn bản và người sở hữu; (c) dữ liệu và công cụ, liệu dữ liệu có chính xác, kịp thời và di chuyển được; (d) sử dụng trong quyết định, liệu các con số có cung cấp thông tin cho lựa chọn; (e) lòng tin và an toàn, liệu mọi người có tin dữ liệu giúp họ; và (f) rà soát và tiến hóa, liệu chương trình có tự cắt tỉa. Sáu là đủ để hữu ích và đủ ít để thảo luận trong một giờ.

**2. Mô tả mỗi mức trông như thế nào.** Bảng trong phần "Mô hình trưởng thành" dưới đây đưa ra các mô tả ngắn cho mỗi chiều ở mỗi mức. Hãy coi chúng như gợi ý. Một đội nên điều chỉnh cách diễn đạt theo bối cảnh của mình và viết ra các ví dụ của riêng mình.

**3. Đừng lấy trung bình.** Một điểm tổng thể duy nhất giấu mẫu hình quan trọng. Một chương trình có độ trưởng thành công cụ cao và lòng tin thấp ở trong một tình huống khác với cái ngược lại, và bước kế tiếp khác nhau. Hãy cho thấy hồ sơ.

### Đánh giá cùng và không phải lên các đội

**4. Làm nó thành một cuộc trò chuyện một giờ.** Hãy tập hợp một đội với bảng. Nhờ mỗi người đánh dấu nơi họ nghĩ đội đang ở trong mỗi chiều, một cách riêng tư, rồi so sánh. Thảo luận khác biệt, vì chúng lộ ra những trải nghiệm khác nhau về cùng một chương trình. Thống nhất một cái nhìn của đội, ghi bằng chứng đằng sau nó, và chọn một hoặc hai bước kế tiếp.

**5. Hỏi bằng chứng.** Với mỗi mức được tuyên bố, hãy hỏi một ví dụ. "Chúng tôi dùng các con số trong quyết định" mời gọi câu hỏi "Quyết định nào quý trước?" Dùng các thước đo được lấy mẫu và phỏng vấn để kiểm tra. Điều này tôn trọng con người và giữ cho việc đánh giá không trôi vào mơ tưởng.

**6. Giữ kết quả với đội.** Hồ sơ của một đội thuộc về đội. Chương trình chia sẻ các khoảng tổng hợp và chủ đề chung, không phải một bảng xếp hạng. Nói rõ rằng việc đánh giá không ảnh hưởng đến tài trợ, vị thế hay đánh giá. Nếu có, các đội sẽ thổi phồng nó và giá trị bị mất (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi).

### Chọn các bước kế tiếp

**7. Chọn chiều giới hạn các chiều khác.** Lòng tin và an toàn thường giới hạn mọi thứ khác: không có nó, dữ liệu bị méo và quyết định đáng ngờ. Định nghĩa và quyền sở hữu thường giới hạn dữ liệu và việc sử dụng. Một mẫu hình phổ biến là củng cố lòng tin và định nghĩa trước, rồi dữ liệu, rồi sử dụng và rà soát. Hãy tìm chiều mà một cải tiến nhỏ sẽ mở khóa các chiều khác.

**8. Đặt một bước nhỏ, cụ thể.** Một bước kế tiếp nên là bước một đội có thể hoàn thành trong một quý và nhận ra: "thống nhất một điều lệ," "viết định nghĩa cho bốn thước đo của chúng tôi," "tự động hóa hai nguồn cấp," "tổ chức một buổi rà soát hằng tháng nơi chúng tôi ghi các quyết định." Tránh những bước như "đạt Mức 4." Các mức mô tả một trạng thái, còn các bước mô tả công việc.

**9. Liên kết các bước với sổ đăng ký cải tiến.** Hãy đặt các hành động cùng chỗ với công việc cải tiến khác, kèm người sở hữu và ngày, và rà soát tiến độ trong buổi trò chuyện cải tiến đều đặn (xem chủ đề 9.5, Chỉ số cải tiến liên tục). Một bước không được tài trợ hay lên lịch sẽ không xảy ra.

### Giữ cho trung thực và nhẹ

**10. Hiệu chuẩn giữa các đội mà không xếp hạng họ.** Hãy tổ chức một buổi ngắn nơi các đội chia sẻ ví dụ về điều họ gọi là Mức 3 trong một chiều. Thảo luận khác biệt về tiêu chuẩn. Mục đích là một hiểu biết chung, không phải điểm số bằng nhau. Luân phiên người điều phối, và mời một đội từ ngoài chương trình thách thức cách diễn đạt.

**11. Đánh giá lại theo nhịp, và để đáp lại sự kiện.** Hai lần một năm là đủ cho hầu hết chương trình. Đánh giá lại sau một cuộc tái tổ chức, một thay đổi công cụ, hay một vi phạm điều lệ, vì những điều này có thể dịch chuyển lòng tin theo cả hai hướng. Để ý sự thụt lùi và coi nó là thông tin, không phải thất bại.

**12. Cho nghỉ hưu hoặc sửa chính mô hình.** Mỗi năm, hãy hỏi các đội liệu các chiều và mô tả mức còn phù hợp không. Diễn đạt lại những gì gây bối rối, và gỡ những gì không ai dùng. Một mô hình không đổi trong năm năm có thể đang mô tả một chương trình không còn tồn tại.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Mức tham gia đánh giá | Hoàn thành biểu mẫu để đạt chỉ tiêu; một người điền thay cho đội | Yêu cầu một cuộc thảo luận của đội; hỏi bằng chứng đằng sau mỗi tuyên bố |
| Hồ sơ theo chiều | Thổi phồng các mức để trông tốt; hạ thấp để nhận giúp đỡ | Không liên kết với tài trợ hay vị thế; hỏi bằng chứng; hiệu chuẩn cởi mở |
| Hành động cải tiến từ đánh giá | Chọn bước tầm thường để đóng; đóng mà không làm | Rà soát kích thước và giá trị bước; kiểm tra kết quả ở lần đánh giá kế tiếp |
| Bằng chứng quyết định | Bịa quyết định sau sự việc; liệt kê quyết định không có hệ quả | Hỏi ngày và những người liên quan; chấp nhận "chọn không làm gì" là một quyết định |
| Lòng tin vào định nghĩa và dữ liệu | Huấn luyện người trả lời; phản hồi thấp giấu sự bất mãn | Ẩn danh và kích thước nhóm tối thiểu; cho thấy tỷ lệ phản hồi; nói chuyện trực tiếp với các đội |
| Thời gian đến mức kế tiếp (mô tả) | Vội tuyên bố tiến bộ; giấu sự thụt lùi | Giữ mô tả; đọc cùng bằng chứng; ghi sự thụt lùi mà không phạt |
| Gánh nặng đánh giá | Bỏ qua thảo luận để cắt giờ | Theo dõi số giờ cùng mức tham gia và chất lượng bằng chứng |

Một kết quả đọc lành mạnh cho thấy một hồ sơ có sự pha trộn các mức, với lòng tin và định nghĩa tăng trước công cụ và sự bóng bẩy, các bước kế tiếp nhỏ và được hoàn tất, những quyết định mà các đội có thể nêu tên, và một bản ghi trung thực về sự thụt lùi thỉnh thoảng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Tự đánh giá của đội | Trung thực, có chủ, nhanh | Chủ quan; cần hiệu chuẩn |
| Đánh giá bên ngoài | Nhất quán; độc lập | Tốn kém; mời gọi biểu diễn cho người đánh giá |
| Một điểm tổng thể duy nhất | Dễ truyền đạt | Giấu mẫu hình; mời gọi mục tiêu |
| Hồ sơ theo chiều | Cho thấy nơi cần hành động | Khó tóm tắt hơn |
| Đánh giá hằng năm | Nhẹ | Chậm nhận ra sự thụt lùi |
| Hai lần một năm kèm kích hoạt theo sự kiện | Nhạy | Tốn công hơn |
| Liên kết với tài trợ | Giành được sự chú ý | Thổi phồng và lợi dụng |
| Tách riêng khỏi tài trợ | Dữ liệu trung thực | Cần cách khác để giành hỗ trợ |

Câu trả lời dạng văn xuôi là chạy một cuộc tự đánh giá nhẹ kèm bằng chứng, báo cáo hồ sơ và khoảng, giữ kết quả với các đội, và gắn các bước kế tiếp với sổ đăng ký cải tiến, không phải với tài trợ hay vị thế.

## Câu hỏi để thảo luận với đội nhóm

**1. Trong sáu chiều, chiều nào chúng ta sẽ nói là yếu nhất, và điều gì khiến chúng ta nói vậy?**
Nhờ mỗi người chọn một cách riêng tư rồi chia sẻ. Người điều phối nên hỏi một ví dụ gần đây. Tìm các mẫu hình, và thống nhất chiều nào giới hạn các chiều khác.

**2. Chúng ta có thể nêu một quyết định từ quý trước mà một thước đo đã thay đổi không?**
Liệt kê chúng. Nếu danh sách ngắn, hãy hỏi vì sao. Thảo luận vấn đề nằm ở thước đo, dữ liệu, hay thói quen nhìn vào.

**3. Chúng ta sẽ đặt mình ở đâu về lòng tin và an toàn, và làm sao chúng ta biết?**
Nhìn vào báo cáo suýt sự cố, thách thức và kết quả khảo sát. So sánh với cách mọi người nói trong thực tế. Thống nhất một điều lãnh đạo có thể làm để dịch chuyển nó.

**4. Một bước kế tiếp nhỏ, cụ thể cho chiều yếu nhất của chúng ta sẽ trông ra sao?**
Soạn nó trong một câu, kèm người sở hữu và ngày. Kiểm tra rằng nó có thể hoàn thành trong một quý. Thống nhất làm sao chúng ta biết nó hiệu quả.

**5. Điều gì sẽ khiến việc đánh giá này cảm thấy như một mối đe dọa, và làm sao chúng ta ngăn điều đó?**
Thảo luận các cách dùng kết quả mà mọi người sẽ sợ. Viết ra điều kết quả sẽ không bao giờ được dùng để làm. Kiểm tra trưởng chương trình đồng ý.

**6. Có mức nào chúng ta không cần đạt không?**
Hãy nghĩ về quy mô, rủi ro và mục tiêu của chúng ta. Mô tả một mức đủ tốt cho bây giờ và một tín hiệu sẽ cho chúng ta biết phải xem lại.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội tự đánh giá, chọn bước kế tiếp, và giữ kết quả của mình. Họ nên dùng cuộc trò chuyện để làm lộ khác biệt trong trải nghiệm, hỏi bằng chứng, và đặt các bước đủ nhỏ để hoàn thành. Họ nên phản đối mọi nỗ lực biến hồ sơ thành một bảng xếp hạng.

### Đội dịch vụ và vận hành

Các đội vận hành gánh tải dữ liệu và sự cố nặng và có thể thấy nơi chương trình hỗ trợ hay đè nặng họ. Họ nên ghi nơi công cụ hoặc định nghĩa cản trở công việc của họ, yêu cầu dữ liệu trực và sự cố được xử lý cẩn thận, và đưa phản hồi thẳng thắn về gánh nặng đánh giá.

### Lãnh đạo và quản trị

Lãnh đạo bảo trợ chương trình và nhận bức tranh tổng hợp. Họ nên yêu cầu hồ sơ và chủ đề chung, chống lại việc đòi một điểm số duy nhất, tài trợ các bước kế tiếp mà các đội chọn, và không gắn tài trợ hay vị thế với việc đánh giá. Họ cũng nên làm gương bằng cách mô tả các quyết định mà chỉ số đã cung cấp thông tin.

### Khách hàng và người dùng

Khách hàng và người dùng được lợi khi chương trình cải thiện dịch vụ và khi phản hồi của họ là một phần của các thước đo. Nơi họ là đối tác, họ có thể tham gia đánh giá các thước đo liên quan đến họ, ví dụ tính hữu ích của khảo sát mức hài lòng, và rà soát cách dữ liệu của họ được dùng.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một tập đoàn bảo hiểm quốc gia có 20 đội phân phối và hỗ trợ và một chương trình chỉ số đã chạy 18 tháng. Nhà bảo trợ yêu cầu "một điểm trưởng thành cho mỗi đội" để hướng dẫn đầu tư. Trưởng chương trình thận trọng, nhớ lại việc một cuộc chấm điểm kiểu kiểm toán trước đây đã khiến các đội chuẩn bị các tập tài liệu. Các con số dưới đây chỉ mang tính minh họa.

Trưởng chương trình đề xuất thay vào đó một hồ sơ qua sáu chiều, được các đội đánh giá trong một cuộc trò chuyện dài một giờ với một người điều phối từ ngoài đội, với kết quả do đội giữ. Bà nói với nhà bảo trợ rằng chương trình sẽ báo cáo các khoảng và chủ đề chung, và hồ sơ của không đội nào sẽ được liên kết với tài trợ. Nhà bảo trợ đồng ý, và quyết định được ghi lại.

Mười chín trong 20 đội hoàn thành việc đánh giá kèm một cuộc thảo luận, nên mức tham gia là 95 phần trăm. Hồ sơ cho thấy một khoảng: ở câu hỏi và mục đích, hầu hết đội ở Mức 2 hoặc 3; ở định nghĩa và quyền sở hữu, trải từ 1 đến 4; ở dữ liệu và công cụ, chủ yếu là 3; ở sử dụng trong quyết định, chủ yếu là 2; ở lòng tin và an toàn, chia giữa 2 và 4; và ở rà soát và tiến hóa, chủ yếu là 1 hoặc 2. Các kiểm tra bằng chứng rất sáng tỏ. Mười một đội tuyên bố Mức 3 cho sử dụng trong quyết định, nhưng khi được hỏi nêu một quyết định từ quý trước mà một thước đo đã cung cấp thông tin, chỉ sáu đội làm được. Trưởng chương trình ghi nhận điều này mà không phán xét, và nó trở thành một chủ đề: các đội có bảng điều khiển và hiếm khi tổ chức các buổi rà soát ghi lại quyết định.

Các bước kế tiếp nhỏ. Tám đội chọn một buổi rà soát hằng tháng kèm nhật ký quyết định. Bốn đội chọn viết định nghĩa cho các thước đo của họ. Ba đội chọn thống nhất một điều lệ. Sáu tháng sau, 14 trong 17 bước đã thống nhất đã xong, một bước bị bỏ kèm lý do, và hai bước đang tiến hành. Một lần đánh giá lại cho thấy bằng chứng quyết định tăng từ 38 lên 71 phần trăm số thước đo được lấy mẫu, và khảo sát lòng tin chuyển từ 54 lên 67 phần trăm đồng ý. Một đội thụt lùi về lòng tin sau một cuộc tái tổ chức, và người điều phối ghi nó là thông tin, không phải thất bại. Một năm sau nhà bảo trợ lại yêu cầu một điểm duy nhất cho báo cáo hằng năm. Trưởng chương trình đưa ra một hồ sơ một trang kèm các khoảng, ba chủ đề, và các bước cải tiến đã hoàn thành. Nhà bảo trợ chấp nhận, và báo cáo nêu rõ rằng thang là một công cụ trò chuyện.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy dùng mô hình như một cuộc trò chuyện ở các buổi rà soát cải tiến đều đặn, với đội chọn bước nhỏ kế tiếp của riêng mình. Điều cần lưu ý là một điểm trưởng thành được trưng trên tường trở thành mục tiêu.

### AI

Hãy thêm lăng kính AI vào việc đánh giá: liệu các việc dùng AI có được kiểm kê không, liệu các thước đo có AI hỗ trợ có cặp chất lượng không, và liệu mọi người có thể thách thức các con số do AI suy ra không. Điều cần lưu ý là một bản tự đánh giá do AI viết có thể nghe tự tin và bỏ lỡ sự thật địa phương, nên đội phải tự viết.

### Tự động hóa

Hãy tự động hóa việc thu thập bằng chứng cho đánh giá, như tỷ lệ chỉ số có người sở hữu và rào chắn, nhưng để con người diễn giải nó. Điều cần lưu ý là bằng chứng thu thập tự động có thể không đầy đủ, nên hãy nói nó loại trừ gì.

### Phân tích

Hãy cho thấy hồ sơ qua các chiều, không phải một điểm duy nhất, kèm bằng chứng đằng sau mỗi đánh giá. Quyết định được cung cấp thông tin là cải thiện gì tiếp theo. Điều cần lưu ý là các đánh giá là phán đoán của chính những người được đánh giá, nên tránh so sánh các đội trên chúng.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một đánh giá chính thức có lẽ là quá mức. Một cuộc trò chuyện ngắn hai lần một năm qua sáu chiều, với một hoặc hai bước nhỏ, là đủ. Để ý nỗi sợ rằng thước đo sẽ được dùng để phán xét, vì các đội nhỏ cảm nhận điều này rất sâu.

**Doanh nghiệp nhỏ.** Hãy dùng các chiều như một danh sách kiểm tra cho một buổi nói chuyện với chủ và nhân viên. Hỏi vài thước đo bạn giữ có trả lời câu hỏi thật không, mọi người có biết chúng nghĩa là gì không, và chúng có được dùng không. Chọn một bước. Đừng dành quá một giờ.

**Doanh nghiệp lớn.** Quy mô cần một quy trình nhẹ, nhất quán: cùng các chiều, tự đánh giá có người điều phối, các buổi hiệu chuẩn, và hồ sơ tổng hợp. Chống lại một văn phòng chấm điểm trung tâm. Liên kết các bước kế tiếp với sổ đăng ký cải tiến, và báo cáo khoảng và chủ đề cho nhà bảo trợ. Đề phòng việc thang biến thành một bài tập tuân thủ.

**Chính phủ và khu vực công.** Các cơ quan kiểm toán và giám sát có thể yêu cầu điểm trưởng thành. Hãy rõ ràng về sự khác biệt giữa công cụ trò chuyện nội bộ này và bất kỳ khung chính thức nào. Giữ kết quả của đội với đội, cung cấp tổng hợp cho cơ quan giám sát, và minh bạch về thang là gì và không là gì (xem chủ đề 8.3, Chỉ số tuân thủ và kiểm toán).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí nhỏ: một hai giờ mỗi đội hai lần một năm, một người điều phối, một ít phân tích, và công sức thực hiện các bước cải tiến. Chi phí lớn hơn đến khi mô hình bị lạm dụng, với tư vấn, văn phòng chấm điểm và các tập bằng chứng.

Lợi tức đến từ nhắm đích công sức tốt hơn. Thay vì rải đầu tư qua mọi chiều, chương trình tìm chiều giới hạn và xử lý nó. Các lợi tức khác gồm nhận ra sự thụt lùi sớm hơn, ngôn ngữ chung giữa các đội, và các bước cải tiến do các đội chọn và sở hữu. Hãy xây hồ sơ từ dữ liệu của chính bạn: các bước cải tiến đã hoàn thành, thay đổi trong bằng chứng quyết định và kết quả khảo sát lòng tin, và công sức việc đánh giá tốn. Tránh trích dẫn các tuyên bố đã công bố về lợi tức của việc cải thiện mức trưởng thành mà không có nguồn truy được và mức liên quan với bối cảnh của bạn (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Huy hiệu trưởng thành.** Mức trở thành mục tiêu. Hãy dùng nó như một cuộc trò chuyện, kèm bằng chứng.
- **Một con số tổng thể.** Mẫu hình bị mất và mục tiêu xuất hiện. Hãy cho thấy hồ sơ.
- **Chấm điểm bởi kiểm toán viên.** Các đội chuẩn bị tài liệu để biểu diễn. Hãy dùng tự đánh giá có người điều phối.
- **Liên kết điểm với tài trợ.** Thổi phồng theo sau. Hãy giữ việc đánh giá tách riêng.
- **Đuổi theo mức cao nhất.** Không phải chương trình nào cũng cần Phối hợp. Hãy chọn cái phù hợp.
- **Đánh giá rồi quên.** Không có bước nào theo sau. Hãy liên kết các bước với sổ đăng ký cải tiến.
- **Đánh giá quá dài.** Gánh nặng tăng và chất lượng giảm. Hãy giữ nó trong một giờ.
- **Phớt lờ sự thụt lùi.** Chương trình tụt sau thay đổi. Hãy đánh giá lại theo nhịp và sau sự kiện.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Câu hỏi và mục đích | Thước đo được thu thập vì dữ liệu tồn tại | Một số đội nêu các câu hỏi họ hỏi | Đối tượng và câu hỏi được viết ra; thước đo được ánh xạ tới chúng | Độ phủ câu hỏi được rà soát; câu hỏi chưa được trả lời dẫn đến thước đo mới | Đối tượng, gồm cả khách hàng và nhà cung cấp, định hình thước đo; câu hỏi tiến hóa cùng dịch vụ |
| Định nghĩa và quyền sở hữu | Định nghĩa thay đổi theo từng người | Một số được viết; người sở hữu không chính thức | Danh mục với định nghĩa, nguồn, người sở hữu và giới hạn cho mỗi thước đo | Mức đầy đủ của định nghĩa và thách thức được quản lý | Định nghĩa đồng sở hữu giữa các đội và nhà cung cấp; được sửa khi chúng ngừng cung cấp thông tin cho quyết định |
| Dữ liệu và công cụ | Thủ công và mong manh | Một số nguồn cấp tự động | Đường ống đã kiểm thử, kho chung, dữ liệu di chuyển được | Độ tin cậy, đối chiếu và mức sẵn sàng thoát được quản lý | Đường ống liên hiệp với hợp đồng chung; nguồn được cải thiện từ phản hồi |
| Sử dụng trong quyết định | Con số được hiển thị, hiếm khi được dùng | Được dùng trong một số buổi rà soát | Các buổi rà soát đều đặn ghi lại quyết định | Bằng chứng quyết định được theo dõi và hành động theo | Quyết định được liên kết giữa các đội với kết quả; việc học được chia sẻ |
| Lòng tin và an toàn | Sợ hãi hoặc thờ ơ | Bảo đảm bằng lời | Điều lệ bằng văn bản; góc nhìn cá nhân tắt; khảo sát an toàn | Vi phạm được rà soát công khai; tín hiệu thẳng thắn được quản lý | Lòng tin là thường lệ; chương trình được nhân viên và đối tác định hình |
| Rà soát và tiến hóa | Không có | Thỉnh thoảng dọn dẹp | Rà soát định kỳ cùng các đội; quy tắc cho nghỉ hưu | Các bước đánh giá được tài trợ và hoàn thành | Chương trình cải thiện liên tục, với thay đổi từ mọi người |

## Danh sách kiểm tra

- [ ] Sáu chiều được thống nhất, và mô tả các mức được điều chỉnh theo bối cảnh của chúng ta.
- [ ] Mỗi đội tự đánh giá trong một cuộc thảo luận khoảng một giờ, có người điều phối.
- [ ] Mỗi mức được tuyên bố được hậu thuẫn bởi một ví dụ hoặc một kiểm tra lấy mẫu.
- [ ] Kết quả được cho thấy dưới dạng hồ sơ và khoảng, và không bao giờ là một điểm trung bình hay bảng xếp hạng.
- [ ] Kết quả của một đội ở lại với đội, và tổng hợp được chia sẻ với nhà bảo trợ.
- [ ] Việc đánh giá không liên kết với tài trợ, vị thế hay đánh giá hiệu suất, và điều này được viết ra.
- [ ] Mỗi đội thống nhất một hoặc hai bước kế tiếp nhỏ, kèm người sở hữu và ngày.
- [ ] Các bước kế tiếp được theo dõi trong sổ đăng ký cải tiến.
- [ ] Việc đánh giá lại diễn ra ít nhất hai lần một năm và sau các sự kiện lớn.
- [ ] Bản thân mô hình được rà soát hằng năm cùng các đội.

## Lời nhắc AI

**Chuẩn bị một cuộc trò chuyện tự đánh giá.**

```text
Prepare a one-hour facilitation plan for a team's self-assessment of its metrics
program across six dimensions: questions and purpose, definitions and ownership,
data and tooling, use in decisions, trust and safety, and review and evolution.
Use five levels: Initiate, Develop, Standardize, Manage, Orchestrate. Include
private marking, comparison, evidence questions, and agreeing one or two small
next steps. Do not produce a score. List your assumptions.
```

**Biến một chiều yếu thành các bước.**

```text
Our team rates itself at Level [n] on [dimension] of its metrics program. Evidence:
[paste]. Suggest three small steps, each finishable in one quarter, that could move
us toward Level [n+1]. For each step, describe the owner, the effort, the likely
benefit, and how we would know it worked. Do not promise outcomes. List your
assumptions and risks.
```

**Kiểm tra bằng chứng cho một mức được tuyên bố.**

```text
A team claims Level [n] on [dimension] and gives this evidence: [paste]. Act as a
curious colleague. List questions to test whether the evidence supports the claim,
what examples would be convincing, and what signs would suggest the claim is
optimistic. Do not judge the team. List your assumptions.
```

**Tóm tắt hồ sơ mà không xếp hạng.**

```text
Here are aggregated counts of teams at each level for each dimension: [paste]. Write
a half-page summary for sponsors that describes the range, three common themes, and
the improvement steps teams chose. Do not rank teams, produce a single score, or
claim causes without evidence. List caveats about self-assessment.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để ánh xạ các thước đo của chương trình tới các chiều trưởng thành và rào chắn đi kèm của chúng.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một đánh giá trưởng thành báo cáo hồ sơ, giữ kết quả với các đội, và tránh một điểm số duy nhất.

## Điểm chính cần nhớ

- Dùng thang năm mức chung như một công cụ trò chuyện, không bao giờ như một huy hiệu, bảng xếp hạng hay chứng nhận.
- Báo cáo một hồ sơ qua sáu chiều và không phải một điểm trung bình duy nhất.
- Đánh giá cùng các đội, hỏi bằng chứng, và giữ kết quả của mỗi đội với đội đó.
- Chọn các bước kế tiếp nhỏ ở chiều giới hạn các chiều khác, thường là lòng tin và định nghĩa.
- Theo dõi các bước trong sổ đăng ký cải tiến, và đánh giá lại đều đặn vì chương trình thụt lùi.
- Cao hơn không phải lúc nào cũng tốt hơn, và kết quả quan trọng hơn các mức.

## Tài liệu tham khảo và đọc thêm

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
