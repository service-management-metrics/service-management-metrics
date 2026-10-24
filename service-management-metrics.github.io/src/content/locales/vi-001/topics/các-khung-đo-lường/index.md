# Các khung đo lường

**Một khung đo lường là cách quyết định con số nào xứng đáng có chỗ trên trang, và những khung tốt nhất đều bắt đầu từ một mục tiêu và một câu hỏi, nên hãy chọn khung nhẹ nhất giữ cho mọi chỉ số gắn với một quyết định.**

## Tổng quan và động lực

Một đội muốn đo công việc của mình gặp ngay một vấn đề: có hàng nghìn con số khả dĩ, và không có quy tắc nào để chọn giữa chúng. Một khung đo lường cung cấp quy tắc đó. Nó nêu một điểm xuất phát (một mục tiêu, một chiến lược, một nhúm điều kiện then chốt), và mô tả cách đi từ điểm xuất phát đó đến một tập nhỏ các thước đo mà con người sẽ đọc và hành động theo. Các khung khác nhau về từ vựng, nhưng chia sẻ một mục đích: giữ cho mọi con số gắn với một lý do để có nó.

Chủ đề này trình bày năm ý tưởng xuất hiện ở gần như mọi tổ chức vận hành dịch vụ. Ý tưởng thứ nhất là cách tiếp cận Goal-Question-Metric (GQM), do nhà nghiên cứu kỹ thuật phần mềm [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) và các đồng nghiệp phát triển. Nó bắt đầu từ một mục tiêu, đặt những câu hỏi sẽ cho thấy mục tiêu có đang đạt được không, và chỉ sau đó mới chọn chỉ số. Ý tưởng thứ hai là [mục tiêu và kết quả then chốt](https://en.wikipedia.org/wiki/OKR) (OKR), một phương pháp đặt mục tiêu được phổ biến ở Intel bởi Andrew Grove và sau đó ở Google qua John Doerr. Một mục tiêu nói đội muốn đi đâu, và một nhúm kết quả then chốt nói đội sẽ biết mình đã đến bằng cách nào. Ý tưởng thứ ba là [thẻ điểm cân bằng](https://en.wikipedia.org/wiki/Balanced_scorecard), do Robert Kaplan và David Norton giới thiệu năm 1992, yêu cầu các tổ chức xem xét kết quả tài chính, khách hàng, quy trình nội bộ, và học hỏi cùng tăng trưởng cùng nhau, để không góc nhìn đơn lẻ nào chi phối.

Ý tưởng thứ tư và thứ năm cũ hơn và giản dị hơn. Một [yếu tố thành công then chốt](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) là một điều kiện phải đúng để một mục tiêu đạt được, và một [chỉ số hiệu suất chính](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) là thước đo điều kiện đó đang được giữ tốt đến đâu. ITIL, khung quản lý dịch vụ CNTT (ITSM) do Axelos và sau đó PeopleCert xuất bản, dùng đúng cặp đôi này. Trong ITIL 4 (phiên bản được dùng rộng rãi tính đến tháng 10 năm 2026), hướng dẫn về đo lường và báo cáo và về cải tiến liên tục bảo người thực hành định nghĩa các CSF cho một dịch vụ hoặc thực hành, rồi chọn các KPI cho thấy tiến độ so với chúng. Cách tiếp cận [ITIL](https://en.wikipedia.org/wiki/ITIL) rộng hơn được tóm tắt ở đây, không được sao chép.

Góc nhìn linh hoạt và ITIL gặp nhau một cách hữu ích trong lĩnh vực này. Thực hành linh hoạt ưu tiên các chu kỳ học ngắn: một đội nêu một giả thuyết, thử điều gì đó, kiểm tra kết quả và điều chỉnh. Thực hành ITIL ưu tiên các dịch vụ được định nghĩa, các mức dịch vụ đã thỏa thuận và một quy trình cải tiến được quản lý. Một khung như GQM hợp với thói quen linh hoạt là hỏi đội muốn học gì. Một thẻ điểm cân bằng hợp với nhu cầu ITIL là cho lãnh đạo thấy một bức tranh tròn trịa về sức khỏe dịch vụ. OKR nằm giữa hai bên, vì chúng được rà soát theo chu kỳ ngắn nhưng viết bằng ngôn ngữ kết quả mà các cơ quan quản trị hiểu.

Ba thuật ngữ lặp lại trong chủ đề này. Một **mục tiêu** là một tuyên bố về kết quả dự định cho một khán giả có tên. Một **câu hỏi** là điều bạn cần biết để nói mục tiêu có đang đạt được không. Một **chỉ số** là một cách đếm hoặc đo thời gian có định nghĩa giúp trả lời một câu hỏi. Các khung khác nhau trong cách xử lý thuật ngữ thứ ba, nhưng tất cả đều khăng khăng rằng nó đến sau cùng, sau mục tiêu và câu hỏi. Thứ tự này là sự bảo vệ mạnh nhất chống lại thất bại được mô tả trong định luật Goodhart (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số), nơi một con số thay thế mục đích mà nó được chọn để phục vụ.

Không khung nào sửa được một lựa chọn mục tiêu tồi, và không khung nào loại bỏ nhu cầu về rào chắn. Hãy coi một khung như giàn giáo cho một cuộc trò chuyện, và chờ đợi việc thay đổi nó khi công việc thay đổi. Đặc biệt các KPI có thể trở thành [chỉ số phù phiếm](https://en.wikipedia.org/wiki/Vanity_metric), những số đếm chỉ tăng và không bao giờ cung cấp thông tin cho quyết định, như tổng số phiếu đã xử lý. Các lý do rộng hơn để đo lường được nêu ở nơi khác (xem chủ đề 1.1, Vì sao đo lường quản lý dịch vụ).

### Các khung khác nhau như thế nào

Các khung trả lời những câu hỏi hơi khác nhau, và việc trộn chúng là phổ biến. Hãy dùng bảng dưới đây làm bản đồ.

| Khung | Điểm xuất phát | Đầu ra điển hình | Dùng tốt nhất cho | Chân trời điển hình |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | Một mục tiêu cụ thể cho một sản phẩm, quy trình hay dịch vụ | Một cây gồm mục tiêu, câu hỏi và chỉ số | Thiết kế một chương trình đo lường cho một đội hoặc dịch vụ | Vài tuần đến vài tháng |
| OKR | Một mục tiêu đầy tham vọng cho kỳ tới | Vài mục tiêu, mỗi mục tiêu có các kết quả then chốt đo được | Căn chỉnh các đội về kết quả và tập trung nỗ lực | Quý |
| Thẻ điểm cân bằng | Chiến lược của một tổ chức | Mục tiêu và thước đo trong bốn góc nhìn | Cho lãnh đạo thấy một góc nhìn tròn trịa và nối chiến lược với vận hành | Năm |
| CSF và KPI | Một dịch vụ, thực hành hay mục tiêu | Vài điều kiện phải đúng, mỗi điều kiện có các chỉ báo | Vận hành một thực hành ITIL đã định nghĩa và báo cáo sức khỏe của nó | Liên tục, được rà soát đều đặn |

## Nguyên tắc chính

- **Bắt đầu từ mục tiêu, rồi câu hỏi, rồi chỉ số.** Một chỉ số được chọn trước không có cách nào để đánh giá là hữu ích.
- **Làm rõ khán giả và quyết định.** Mỗi mục tiêu nêu ai được lợi, và mỗi chỉ số nêu ai sẽ hành động theo nó.
- **Giữ tập nhỏ.** Một vài thước đo được đọc và được tin cậy thắng một danh sách dài chỉ được lướt qua.
- **Cân bằng góc nhìn.** Ghép tốc độ với chất lượng, chi phí với trải nghiệm, và sản lượng ngắn hạn với học hỏi dài hạn, để không khung nào thưởng cho điều này bằng cái giá của điều khác.
- **Coi mục tiêu là giả thuyết.** Một mục tiêu và các con số của nó là một canh bạc có thể sai, nên hãy rà soát chúng theo lịch và đổi chúng kèm một lý do được ghi lại.
- **Dùng khung để mô tả đội nhóm và dịch vụ, không bao giờ để xếp hạng con người.** Thẻ điểm, kết quả then chốt và KPI thuộc về một đội hoặc một dịch vụ.
- **Kết hợp các khung có chủ ý.** Nói rõ khung nào sở hữu quyết định nào, để cùng một con số không bị định nghĩa theo ba cách.

## Định nghĩa chỉ số

Các chỉ số dưới đây đo sức khỏe của một khung đang được dùng, không phải sức khỏe của một dịch vụ. Chúng cho thấy mục tiêu và chỉ số có còn được kết nối không, và chúng áp dụng cho bất kỳ khung nào đội chọn. Số đếm tính theo đội hoặc dịch vụ, không bao giờ theo người.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Khả năng truy vết mục tiêu | Tỷ lệ các chỉ số được báo cáo truy được về một mục tiêu và câu hỏi bằng văn bản | số chỉ số có mục tiêu và câu hỏi được ghi lại / số chỉ số được báo cáo | phần trăm | Sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số) | Đo lường và báo cáo; cải tiến liên tục | Mục tiêu phân phối; mục tiêu sản phẩm | Hằng quý |
| Phân phối điểm kết quả then chốt | Độ trải của điểm cuối kỳ của các kết quả then chốt, hiển thị dưới dạng tỷ lệ trong mỗi dải | số kết quả then chốt trong mỗi dải điểm (ví dụ 0,0 đến 0,3, 0,4 đến 0,6, 0,7 đến 1,0) / số kết quả then chốt được chấm điểm trong kỳ; loại trừ các kết quả then chốt bị bỏ kèm lý do được ghi lại | phần trăm mỗi dải | Công cụ theo dõi OKR hoặc tài liệu của đội | Cải tiến liên tục; quản lý mức dịch vụ | Lập kế hoạch hằng quý; rà soát | Hằng quý |
| Độ phủ góc nhìn | Tỷ lệ bốn góc nhìn của thẻ điểm cân bằng có ít nhất một thước đo với giá trị hiện hành | số góc nhìn có một thước đo được báo cáo trong kỳ gần nhất / bốn | phần trăm | Thẻ điểm hoặc bảng điều khiển | Đo lường và báo cáo; quản trị hệ thống giá trị dịch vụ | Rà soát cùng các bên liên quan (góc nhìn khách hàng và học hỏi) | Hằng quý |
| Tuổi rà soát chỉ báo | Thời gian kể từ lần cuối định nghĩa và mục tiêu của mỗi KPI được rà soát | ngày rà soát trừ ngày của lần rà soát cuối; đồng hồ bắt đầu từ lần rà soát cuối được ghi và dừng vào ngày báo cáo; báo cáo trung vị và giá trị cũ nhất | ngày | Nhật ký thay đổi của sổ đăng ký chỉ số | Cải tiến liên tục; đo lường và báo cáo | Hành động từ buổi nhìn lại | Hằng quý |
| Độ phủ CSF-KPI | Tỷ lệ các yếu tố thành công then chốt có ít nhất một KPI hiện đang được báo cáo | số CSF có KPI hiện hành / số CSF được định nghĩa cho dịch vụ hoặc thực hành | phần trăm | Tài liệu thực hành hoặc dịch vụ; sổ đăng ký chỉ số | Cách tiếp cận CSF và KPI trong các hướng dẫn thực hành ITIL | Định nghĩa hoàn thành; thỏa thuận làm việc | Hằng quý |

Khả năng truy vết mục tiêu chỉ tính một chỉ số là đã truy vết nếu cả mục tiêu và câu hỏi đều được viết và khán giả được nêu tên; chỉ một mục tiêu là chưa đủ. Phân phối điểm kết quả then chốt nên được đọc như một độ trải, không phải một giá trị trung bình, vì giá trị trung bình che giấu một đội đã hạ thấp mọi thứ và một đội đã thất bại mọi thứ. Tuổi rà soát chỉ báo loại trừ các chỉ số nghỉ hưu trong kỳ.

## Khuyến nghị

### Chọn và kết hợp các khung

**1. Chọn khung nhỏ nhất làm được việc.** Một đội dịch vụ đơn lẻ với một vấn đề cải tiến hiếm khi cần một thẻ điểm cân bằng đầy đủ. GQM thường là đủ, vì nó có một điểm dừng rõ ràng: một cây gồm một mục tiêu, vài câu hỏi và vài chỉ số. Chỉ thêm cấu trúc khi một quyết định cần nó.

**2. Viết mục tiêu theo ba phần: mục đích, đối tượng và góc nhìn.** Các mục tiêu GQM theo truyền thống được đóng khung là cải thiện một chất lượng nêu rõ của một đối tượng nêu rõ từ một góc nhìn nêu rõ, ví dụ cải thiện độ rõ ràng của các cập nhật sự cố cho những người phụ thuộc vào bàn dịch vụ. Cấu trúc buộc bạn nói ai được lợi. Nếu một mục tiêu không có góc nhìn, nó có lẽ là một khẩu hiệu.

**3. Đặt những câu hỏi mà một người có thể trả lời bằng một câu chuyện ngắn.** "Người dùng nghe lại nhanh đến đâu sau khi họ báo một vấn đề?" là một câu hỏi tốt, vì bạn có thể hình dung một câu trả lời và bằng chứng đứng sau nó. "Hiệu suất của chúng ta là gì?" thì không. Hãy nhắm đến ba đến năm câu hỏi cho mỗi mục tiêu, và chờ đợi một số câu hỏi được trả lời bằng phỏng vấn hoặc lấy mẫu, không phải bằng một con số.

**4. Chọn chỉ số sau cùng, và chọn nhiều hơn một.** Với mỗi câu hỏi, nêu tên các chỉ số ứng viên, nguồn dữ liệu và vectơ lợi dụng (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo). Gồm ít nhất một chỉ số có sức căng với các chỉ số khác, như thời gian phản hồi bên cạnh tỷ lệ mở lại. Nếu một câu hỏi không có chỉ số khả thi, hãy nói như vậy và lên kế hoạch cho một phép kiểm tra định tính.

**5. Quyết định khung nào sở hữu quyết định nào.** Một sự sắp xếp phổ biến là thẻ điểm cân bằng hoặc một thứ tương đương giữ vài thước đo mà lãnh đạo rà soát, OKR giữ các cải tiến mà một đội đã chọn quý này, và CSF cùng KPI mô tả sức khỏe vận hành của một thực hành. Hãy viết sự sắp xếp này vào sổ đăng ký chỉ số để mỗi con số có một định nghĩa và một người sở hữu duy nhất.

### Dùng OKR cho tốt

**6. Viết mục tiêu như kết quả, và kết quả then chốt như bằng chứng.** Một mục tiêu như "Người dùng được giải quyết vấn đề mà không phải đeo bám chúng ta" là một kết quả. Một kết quả then chốt như "thời gian trung vị đến cập nhật hữu ích đầu tiên giảm từ [giá trị hiện tại] xuống [giá trị mục tiêu]" là bằng chứng. Các kết quả then chốt đọc như tác vụ ("ra mắt cổng mới") là hoạt động, không phải kết quả. Nếu bạn không nói được điều gì sẽ thay đổi cho người dùng, kết quả then chốt chưa hoàn thiện.

**7. Giữ OKR ở cấp đội và dịch vụ.** Đặt chúng cho cá nhân có xu hướng biến chúng thành danh sách việc và đầu vào cho đánh giá hiệu suất, và mời gọi việc lợi dụng mà định luật Goodhart dự đoán. Hãy để một đội viết kết quả then chốt của riêng mình một cách công khai, và để các đội thấy của nhau. Tránh các tầng thác nơi mọi cấp phải nhắc lại cấp trên.

**8. Coi điểm số là một cuộc trò chuyện, không phải một cấp điểm.** Các đội coi điểm hoàn hảo là mục tiêu viết những kết quả then chốt rụt rè. Một phân phối điểm tụ ở trên cùng gợi ý việc hạ thấp mục tiêu, và một phân phối tụ ở dưới cùng gợi ý các mục tiêu là viễn tưởng. Hãy rà soát độ trải mỗi quý, và hỏi đội đã học được gì từ mỗi lần trượt.

### Dùng thẻ điểm, CSF và KPI cho tốt

**9. Định nghĩa CSF trước KPI.** Một yếu tố thành công then chốt là một tuyên bố về điều gì phải đúng, như "người dùng có thể tìm và dùng bài viết tự phục vụ đúng". Một KPI sau đó cho thấy nó có đúng không. Bắt đầu bằng KPI mời bạn đếm cái dễ đếm. Với mỗi CSF, hãy hỏi: "nếu điều này không còn đúng, chúng ta sẽ nhận ra nhanh đến đâu, và từ cái gì?" Câu trả lời là KPI.

**10. Dùng các góc nhìn của thẻ điểm để ngăn một cái nhìn một chiều.** Bốn góc nhìn cổ điển là tài chính, khách hàng, quy trình nội bộ, và học hỏi cùng tăng trưởng. Các tổ chức dịch vụ thường đổi tên chúng, ví dụ chi phí, trải nghiệm người dùng, sức khỏe vận hành và năng lực. Điều quan trọng là mỗi góc nhìn có ít nhất một thước đo với giá trị hiện hành, và sự sụt giảm ở một góc nhìn được đọc bên cạnh các góc nhìn khác (xem chủ đề 6.5, Hiện thực hóa giá trị và kết quả kinh doanh).

**11. Nối chiến lược với các thước đo bằng một bản đồ đơn giản.** Một [bản đồ chiến lược](https://en.wikipedia.org/wiki/Strategy_map) vẽ các mũi tên từ năng lực đến quy trình đến khách hàng đến kết quả tài chính. Nó hữu ích cho cuộc trò chuyện và kém như một máy tính. Hãy vẽ nó, tranh luận về các mũi tên, rồi chọn vài thước đo. Đừng cố làm cho sơ đồ chính xác về mặt định lượng.

**12. Rà soát các khung theo lịch.** Đặt một buổi rà soát hằng quý nơi đội hỏi với mọi mục tiêu, kết quả then chốt và KPI rằng nó còn quan trọng không và còn thúc đẩy con người hành động đúng không. Cho nghỉ hưu những gì không còn phục vụ, và ghi lại lý do. Các chỉ số sống lâu hơn mục tiêu của chúng trở thành chỉ số phù phiếm.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Khả năng truy vết mục tiêu | Viết một mục tiêu và câu hỏi sau khi chỉ số đã tồn tại, để bản ghi trông đầy đủ; các mục tiêu mơ hồ biện minh cho bất kỳ chỉ số nào | Lấy mẫu năm mục mỗi quý và hỏi liệu câu hỏi có thể dẫn đến một chỉ số khác không; kiểm tra rằng khán giả và quyết định được nêu tên |
| Phân phối điểm kết quả then chốt | Viết các kết quả then chốt dễ để điểm tụ gần 1,0; chấm lại hào phóng; bỏ các kết quả then chốt đang đi tồi mà không ghi lý do | Số kết quả then chốt bị bỏ kèm lý do của chúng; so sánh các kết quả then chốt với kết quả của kỳ trước; rà soát tham vọng trung vị cùng lãnh đạo |
| Độ phủ góc nhìn | Thêm một thước đo tượng trưng vào một góc nhìn để nó được tính là đã phủ; chọn các thước đo không thể dịch chuyển | Kiểm tra rằng mỗi thước đo góc nhìn đã đổi giá trị trong năm qua và có một quyết định bằng văn bản đính kèm |
| Tuổi rà soát chỉ báo | Ghi một buổi rà soát mà không đọc chỉ báo; chỉ đổi ngày | Yêu cầu một kết quả bằng văn bản (giữ, đổi, nghỉ hưu) cùng mỗi buổi rà soát, và lấy mẫu nhật ký |
| Độ phủ CSF-KPI | Gán một KPI không liên quan đến CSF để đạt độ phủ đầy đủ; chọn một KPI không thể lộ ra một thất bại | Với mỗi cặp, hỏi giá trị đọc nào sẽ cho thấy CSF đang thất bại; tìm các KPI chưa bao giờ đỏ |

Một kết quả đọc lành mạnh là khi mục tiêu thay đổi khi thế giới thay đổi, vài kết quả then chốt bị trượt vì những lý do được nêu, và số chỉ số được báo cáo đang giảm hoặc ổn định thay vì tăng. Nếu mọi thứ đều xanh, điểm tụ ở trên cùng, và không ai nêu được một chỉ số nào đã nghỉ hưu trong năm nay, khung đã trở thành đồ trang trí.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Goal-Question-Metric | Gắn mỗi chỉ số với một lý do; dễ giải thích; hiệu quả ở quy mô đội | Cần một buổi có điều phối; có thể thành một bài tập giấy tờ; nói ít về thứ tự ưu tiên giữa các mục tiêu |
| OKR | Tập trung một quý vào vài kết quả; hiển thị giữa các đội; khớp chu kỳ lập kế hoạch ngắn | Dễ viết kết quả then chốt thành tác vụ; điểm có thể bị lợi dụng; OKR cá nhân nhòe vào đánh giá hiệu suất |
| Thẻ điểm cân bằng | Cho lãnh đạo một góc nhìn tròn trịa; nối chiến lược với vận hành | Nặng để duy trì; các góc nhìn có thể trở thành ô để điền; chậm phản ánh thay đổi |
| CSF và KPI | Quen thuộc trong thực hành ITIL; phù hợp để báo cáo về một dịch vụ đang chạy | Dễ trôi thành KPI phù phiếm; chỉ báo cũ đi nếu không rà soát |
| Không có khung | Nhẹ và nhanh cho một đội rất nhỏ | Chỉ số tích tụ mà không có lý do; các tranh luận về đo cái gì lặp lại |
| Nhiều khung cùng nhau | Mỗi quyết định có công cụ phù hợp | Định nghĩa trùng lặp; nhầm lẫn về con số nào có thẩm quyền |

Hãy chọn trọng lượng của khung tương xứng với mức rủi ro. Một dịch vụ nội bộ nhỏ cần một mục tiêu, ba câu hỏi và vài chỉ số giữ trên một trang. Một dịch vụ được cung cấp theo hợp đồng có thể cần các KPI được định nghĩa đến mức của một thỏa thuận mức dịch vụ (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

## Câu hỏi để thảo luận với đội nhóm

**1. Mỗi chỉ số được báo cáo của chúng ta phục vụ mục tiêu nào, và ai sẽ để ý nếu chúng ta ngừng báo cáo nó?**
Liệt kê các chỉ số lên bảng và viết mục tiêu bên cạnh mỗi cái. Nơi nào thiếu mục tiêu, hãy hỏi ai đã yêu cầu chỉ số và vì sao. Một số sẽ hóa ra thừa kế từ một dự án trước và có thể cho nghỉ hưu. Người điều phối nên coi một chỉ số không có mục tiêu là một phát hiện bình thường, không phải thất bại.

**2. Nếu chỉ trả lời được ba câu hỏi về dịch vụ của chúng ta, đó sẽ là những câu nào?**
Điều này buộc phải xếp hạng câu hỏi trước chỉ số. Để mỗi người viết ba câu, rồi gom nhóm chúng. So sánh nhóm với bảng điều khiển mà đội hiện có. Khoảng trống giữa hai bên thường là đầu ra hữu ích nhất của buổi họp.

**3. Kết quả then chốt nào của chúng ta mô tả một kết quả cho người dùng, và cái nào mô tả công việc chúng ta dự định làm?**
Đọc to từng kết quả then chốt và hỏi một người dùng có để ý nếu nó đạt được không. Nếu câu trả lời là không, hãy viết lại nó thành kết quả hoặc chuyển nó vào kế hoạch. Người điều phối có thể nhắc rằng các tác vụ không sao, nhưng chúng thuộc về một tồn đọng. Kết thúc bằng việc thống nhất một kết quả then chốt để viết lại trong quý này.

**4. Bốn góc nhìn thẻ điểm của chúng ta mâu thuẫn nhau ở đâu, và điều đó cho chúng ta biết gì?**
Hãy yêu cầu nhóm tìm một giai đoạn gần đây khi một góc nhìn cải thiện trong khi góc nhìn khác tệ đi, như chi phí giảm trong khi trải nghiệm tụt. Thảo luận nguyên nhân và liệu có ai thấy trước không. Điều này xây dựng thói quen đọc các thước đo cùng nhau. Ghi lại bất kỳ góc nhìn nào không có thước đo, và quyết định thêm một cái hay nói thẳng rằng nó nằm ngoài phạm vi.

**5. Với mỗi yếu tố thành công then chốt, giá trị đọc nào sẽ cho chúng ta biết nó đang thất bại?**
Chọn hai CSF và nêu tên KPI, rồi hỏi giá trị nào sẽ kích hoạt một cuộc trò chuyện. Nếu đội không nói được, KPI không làm đúng việc của nó. Tìm các KPI chưa bao giờ đổi màu, thường báo hiệu một ngưỡng đặt quá lỏng. Người điều phối nên hỏi vectơ lợi dụng của KPI đó sẽ là gì.

**6. Khung nào nên sở hữu quyết định nào, và hiện nay chúng ta định nghĩa cùng một con số hai lần ở đâu?**
Truy một chỉ số, như thời gian giải quyết sự cố, qua mọi báo cáo nơi nó xuất hiện. So sánh các định nghĩa. Khác biệt về đồng hồ hay các trường hợp loại trừ là phổ biến và thường giải thích các tranh luận giữa các đội. Thống nhất một người sở hữu và một định nghĩa, và ghi nó vào sổ đăng ký.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối gặp các khung chủ yếu dưới dạng OKR và, nếu may mắn, GQM. Một đội nhận được nhiều giá trị nhất khi tự viết mục tiêu và kết quả then chốt của mình, gắn với điều người dùng cần, và khi giữ các thước đo làm việc tách khỏi những thước đo mà lãnh đạo thấy. Một đội nên cảnh giác với các kết quả then chốt thưởng cho sản lượng, như điểm câu chuyện hay số bản phát hành, vì chúng mời gọi những hành vi mà các khung được tạo ra để ngăn (xem chủ đề 1.3, Kết quả hơn sản lượng: chọn điều cần đo).

### Đội dịch vụ và vận hành

Các đội vận hành gặp các khung chủ yếu dưới dạng CSF và KPI trong các thực hành ITIL, cộng với các mục tiêu mức dịch vụ đã thỏa thuận với khách hàng. Họ được lợi từ việc định nghĩa CSF bằng ngôn ngữ giản dị trước khi chọn KPI, từ việc báo cáo bách phân vị cho các thước đo thời gian, và từ việc giữ các thước đo độ tin cậy như chỉ báo và mục tiêu mức dịch vụ bên cạnh trải nghiệm của người dùng (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi). Họ cũng nên chống lại cám dỗ giữ các KPI đã đặt từ nhiều năm trước và không còn liên quan đến cách dịch vụ được dùng.

### Lãnh đạo và quản trị

Lãnh đạo chọn các khung, thường bằng cách yêu cầu một thẻ điểm hoặc OKR, và việc họ làm với các con số quyết định các khung hành xử ra sao. Một lãnh đạo trừng phạt một kết quả then chốt bị trượt dạy các đội viết những kết quả dễ. Một lãnh đạo hỏi đội đã học được gì dạy họ viết những kết quả trung thực. Các cơ quan quản trị nên chờ đợi một sổ đăng ký chỉ số, một số ít thước đo được báo cáo, và một buổi rà soát định kỳ xem chính khung có đang hoạt động không (xem chủ đề 11.4, Mô hình trưởng thành cho chương trình chỉ số).

### Khách hàng và người dùng

Khách hàng và người dùng hiếm khi thấy khung, chỉ thấy tác động của nó. Một khung được thiết kế tốt hiện ra như các dịch vụ cải thiện theo cách họ đã yêu cầu và như báo cáo trung thực về những gì chưa cải thiện. Một khung tồi hiện ra như các báo cáo xanh không khớp với trải nghiệm. Hãy gồm một góc nhìn người dùng trong mọi mục tiêu, và để phản hồi của người dùng nằm trong góc nhìn khách hàng của thẻ điểm cùng các con số vận hành (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một nền tảng hỗ trợ khách hàng và một cổng tự phục vụ với nhiều đội sản phẩm và một nhóm vận hành dịch vụ nhỏ. Mọi con số chỉ mang tính minh họa.

Lãnh đạo yêu cầu một thẻ điểm cân bằng và, riêng biệt, các OKR hằng quý. Trong vòng một quý, đội có 31 thước đo được báo cáo, và không ai nói được vì sao một nửa trong số đó tồn tại. Chủ sở hữu dịch vụ tổ chức một buổi nửa ngày dùng GQM cho một mục tiêu: "Cải thiện độ rõ ràng của phần trợ giúp cho những khách hàng không thể hoàn tất một khoản thanh toán, từ góc nhìn của khách hàng."

Buổi họp tạo ra bốn câu hỏi. Khách hàng có tìm được bài trợ giúp đúng không? Họ có cần liên hệ hỗ trợ sau khi đọc nó không? Một vấn đề thanh toán mất bao lâu để được giải quyết khi họ liên hệ hỗ trợ? Họ có cảm thấy câu trả lời rõ ràng không? Trong 31 thước đo, chín thước đo ánh xạ đến các câu hỏi này. Cần ba thước đo mới: mức thành công tìm kiếm bài viết, tỷ lệ liên hệ sau khi xem bài viết, và một khảo sát một câu hỏi sau khi giải quyết. 22 thước đo còn lại được đánh dấu để nghỉ hưu, với sự đồng ý của người sở hữu.

OKR của quý được viết như một kết quả. Mục tiêu là "Khách hàng giải quyết vấn đề thanh toán mà không phải đeo bám chúng ta." Ba kết quả then chốt là thời gian giải quyết trung vị và bách phân vị thứ 90, tỷ lệ liên hệ sau khi xem bài viết, và kết quả khảo sát về độ rõ ràng. Thẻ điểm giữ góc nhìn khách hàng chỉ vào cùng các thước đo, nên chỉ có một định nghĩa, không phải hai.

Giữa quý, một rủi ro lợi dụng xuất hiện. Tỷ lệ liên hệ sau khi xem bài viết giảm mạnh, trông như thành công. Một người rà soát lấy mẫu 20 phiên và thấy rằng một lần thiết kế lại đã dời liên kết "liên hệ chúng tôi" sâu hơn ba màn hình. Ít người đến được hỗ trợ hơn, và khảo sát cho thấy điểm rõ ràng thấp hơn. Đội thêm mức bỏ dở tìm kiếm và các bình luận khảo sát làm rào chắn và khôi phục liên kết.

Cuối quý, điểm các kết quả then chốt là 0,6, 0,8 và 0,5, mà đội trình bày đúng như vậy. Lãnh đạo hỏi đội đã học được gì, không phải vì sao điểm không cao hơn. Quyết định, được ghi trong nhật ký quyết định, là giữ mục tiêu cho quý thứ hai, thay tỷ lệ liên hệ bằng tỷ lệ khách hàng giải quyết được vấn đề ngay trong lần ghé đầu tiên, và cho nghỉ hưu thêm sáu thước đo thẻ điểm.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Mục tiêu và câu hỏi nên được xem lại khi đội học, nên hãy chọn một khung đủ nhẹ để sửa ở các buổi rà soát cải tiến định kỳ cùng các bên liên quan. Một cách làm thực tế là viết mục tiêu, câu hỏi và hai hoặc ba chỉ báo trên một trang và rà soát nó thường xuyên. Điều cần lưu ý là một khung được dùng như một bài tập thiết kế một lần sẽ cũ đi, và bảng điều khiển trôi khỏi các mục tiêu.

### AI

Hãy đưa AI vào khung một cách tường minh: thực hành có AI hỗ trợ phục vụ mục tiêu nào, thước đo của nó trả lời câu hỏi nào, và thước đo chất lượng nào được ghép với nó. Căn chỉnh với một từ vựng quản trị như Khung Quản lý Rủi ro AI của NIST có thể giúp, nhưng hãy kiểm tra văn bản hiện hành nói gì trước khi trích dẫn. Điều cần lưu ý là một khung chỉ đo mức áp dụng AI sẽ thưởng cho việc dùng vì chính nó.

### Tự động hóa

Hãy dùng tự động hóa để giữ khả năng truy vết từ mục tiêu đến chỉ báo luôn hiện hành, ví dụ bằng cách đánh dấu các chỉ báo không có mục tiêu liên kết. Hãy đưa tự động hóa vào khung như một thứ cần đo bằng kết quả và thất bại của nó. Điều cần lưu ý là một khung có thể trở thành một báo cáo tự động lớn mà không ai đọc.

### Phân tích

Hãy chọn các chỉ báo mà dữ liệu hỗ trợ được và nói mỗi cái cung cấp thông tin cho quyết định nào. Khi nhiều khung áp dụng, như mục tiêu và kết quả then chốt, thẻ điểm cân bằng và các yếu tố thành công then chốt của ITIL, hãy ánh xạ chúng về một tập duy nhất thay vì chạy ba tập. Điều cần lưu ý là một khung không sửa được dữ liệu kém, nên hãy ghép việc chọn chỉ báo với các phép kiểm tra chất lượng dữ liệu trong chủ đề 1.5, Nguồn dữ liệu và công cụ đo.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một công ty khởi nghiệp thường cần một mục tiêu, ba câu hỏi và một nhúm chỉ số, giữ trên một trang. OKR là phổ biến và hiệu quả khi chúng được viết bởi đội sẽ làm công việc. Hãy chống lại việc thêm thẻ điểm cho đến khi nhà đầu tư hoặc khách hàng yêu cầu.

**Doanh nghiệp nhỏ.** Nguồn lực mỏng, nên hãy chọn một khung và dùng nó nhẹ nhàng. CSF và KPI viết cho hai hoặc ba điều mà doanh nghiệp không thể để sai thường là đủ. Hãy ưu tiên phản hồi trực tiếp từ khách hàng hơn việc chấm điểm cầu kỳ.

**Doanh nghiệp lớn.** Nhiều khung thường cùng tồn tại, khiến quyền sở hữu định nghĩa là thách thức chính. Hãy giữ một sổ đăng ký, chỉ định khung nào giữ con số nào, và chạy một buổi rà soát hằng năm cho toàn bộ sự sắp xếp. Hãy đề phòng các tầng thác buộc mọi đội nhắc lại mục tiêu của tập đoàn bằng lời của riêng họ.

**Chính phủ và khu vực công.** Báo cáo bắt buộc và các mức dịch vụ theo hợp đồng hoạt động như các KPI cố định. Hãy coi chúng là cho trước, và dùng GQM hoặc OKR cho công việc cải tiến xung quanh chúng. Trách nhiệm giải trình trước công chúng nâng mức rủi ro của một con số gây hiểu lầm, nên hãy công bố định nghĩa và cởi mở về các thay đổi (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của một khung chủ yếu là thời gian: một buổi có điều phối để thiết kế thước đo, một buổi rà soát hằng quý ngắn, và việc duy trì sổ đăng ký. Phần mềm cho OKR hoặc thẻ điểm có sẵn, nhưng một tài liệu hoặc bảng tính thường là đủ ở quy mô nhỏ. Chi phí lớn hơn là sự chú ý của lãnh đạo, vì một khung mà lãnh đạo không dùng trở thành báo cáo vì chính nó.

Lợi tức đến từ ít thước đo hơn, tốt hơn. Các đội nói được vì sao mỗi con số tồn tại tốn ít thời gian hơn để tạo ra các báo cáo không ai đọc, tranh luận ít hơn về định nghĩa, và nhận ra sớm hơn khi một thước đo đã ngừng cung cấp thông tin cho quyết định. Thay vì trích dẫn một con số, hãy đo đường cơ sở của riêng bạn: số chỉ số được báo cáo, tỷ lệ có mục tiêu được ghi lại, và thời gian dành để chuẩn bị các báo cáo định kỳ, trước và sau khi áp dụng khung. Một phần trình bày đầy đủ hơn về lợi tức đầu tư ở nơi khác (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Chỉ số trước mục tiêu.** Bắt đầu từ dữ liệu bạn có tạo ra một bảng điều khiển của những gì dễ đếm. Hãy viết mục tiêu và câu hỏi trước, rồi xem dữ liệu nào phù hợp.
- **OKR như danh sách việc.** Các kết quả then chốt nêu hoạt động khiến mỗi quý trông bận rộn và không cho bạn biết gì về kết quả. Hãy viết lại mỗi cái thành bằng chứng mà một người dùng sẽ để ý.
- **OKR và thẻ điểm như mục tiêu cá nhân.** Chúng mời gọi việc lợi dụng và làm nản việc giúp đỡ giữa con người. Hãy giữ chúng ở cấp đội và dịch vụ.
- **Một thẻ điểm với các góc nhìn trống hoặc tượng trưng.** Điền mọi ô bằng thứ gì đó không giống với việc thấy toàn bộ. Hãy yêu cầu một giá trị hiện hành và một quyết định cho mỗi góc nhìn.
- **KPI không bao giờ đổi.** Nếu một chỉ báo đã xanh nhiều năm, ngưỡng của nó có lẽ sai hoặc nó đo thứ không thể thất bại. Hãy hỏi giá trị đọc nào sẽ cho thấy một vấn đề, rồi đặt lại.
- **Các khung xếp chồng không có người sở hữu.** Ba khung định nghĩa cùng một thước đo theo ba cách tạo ra tranh cãi. Hãy nêu tên một người sở hữu và một định nghĩa duy nhất.
- **Thưởng cho điểm số.** Nếu một điểm OKR hoàn hảo nhận được lời khen hay lương, các đội sẽ viết những kết quả then chốt dễ. Hãy thưởng cho việc học trung thực và những câu hỏi hay.
- **Khung như nghi lễ.** Một ngày hội thảo tạo ra một tấm áp phích ép plastic không thay đổi được gì. Hãy giữ đầu ra trong sổ đăng ký và rà soát nó theo lịch.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Mục tiêu và câu hỏi | Chỉ số được chọn vì dữ liệu tồn tại | Một số đội viết mục tiêu trước chỉ số | Một định dạng mục tiêu và câu hỏi chung; mọi chỉ số được báo cáo truy về một cái | Khả năng truy vết được rà soát và khoảng trống dẫn đến công việc được tài trợ | Mục tiêu được viết chung với khách hàng và nhà cung cấp và được sửa khi điều kiện thay đổi |
| Dùng khung | Ngẫu hứng; không có khung nào được nêu | Các đội áp dụng các khung khác nhau với từ vựng khác nhau | Một sự sắp xếp bằng văn bản nói khung nào sở hữu quyết định nào | Kết quả của khung được rà soát, và các phần không dùng bị bỏ | Các khung được căn chỉnh giữa các đội và nhà cung cấp với một tập định nghĩa |
| Chỉ báo và chấm điểm | KPI đặt một lần và không bao giờ rà soát | Một số KPI có người sở hữu và ngưỡng | KPI và kết quả then chốt có người sở hữu, định nghĩa và rào chắn | Điểm và chỉ báo được theo dõi xu hướng và rà soát về việc lợi dụng mỗi quý | Chỉ báo được cho nghỉ hưu và thay thế thường lệ, với thay đổi gắn với kết quả |
| Dùng trong quyết định | Báo cáo được tạo ra và bị phớt lờ | Lãnh đạo hỏi số liệu khi có chuyện không ổn | Các buổi rà soát ghi lại những quyết định mà con số đã ảnh hưởng | Câu hỏi học tập là chuẩn; mục tiêu bị trượt được thảo luận không đổ lỗi | Lập kế hoạch cải tiến giữa các đội dùng cùng các mục tiêu và thước đo chung |

## Danh sách kiểm tra

- [ ] Mọi chỉ số được báo cáo truy được về một mục tiêu bằng văn bản, một câu hỏi và một khán giả có tên.
- [ ] Một sổ đăng ký chỉ số ghi khung nào sở hữu từng chỉ số và định nghĩa duy nhất của nó.
- [ ] Mục tiêu được viết với một mục đích, một đối tượng và một góc nhìn.
- [ ] Mỗi kết quả then chốt mô tả một kết quả mà ai đó sẽ để ý, không phải một tác vụ.
- [ ] OKR, thước đo thẻ điểm và KPI thuộc về các đội hoặc dịch vụ, không phải cá nhân.
- [ ] Mỗi yếu tố thành công then chốt có ít nhất một KPI hiện hành và một giá trị đọc nêu rõ sẽ cho thấy thất bại.
- [ ] Mỗi góc nhìn thẻ điểm có một thước đo với giá trị hiện hành.
- [ ] Mọi chỉ số có một vectơ lợi dụng và rào chắn có tên.
- [ ] Một buổi rà soát hằng quý hỏi mỗi mục tiêu, kết quả then chốt và KPI còn quan trọng không.
- [ ] Ít nhất một chỉ số hoặc chỉ báo đã được cho nghỉ hưu hoặc thiết kế lại trong năm qua, kèm lý do được ghi lại.

## Lời nhắc AI

**Biến một mục tiêu thành các câu hỏi và chỉ số ứng viên.**

```text
Our team is [team name], which runs [type of service or delivery work] for
[audience]. Our goal is: [goal stated as purpose, subject, and viewpoint]. Using
the Goal-Question-Metric approach, propose three to five questions that would
show whether we are meeting this goal. For each question, suggest candidate
metrics we could define, the kind of data source we would need, the likely
gaming vector, and a guardrail. Do not invent benchmark values or statistics.
List your assumptions and anything you could not determine from what I gave you.
```

**Rà soát các OKR nháp.**

```text
Here are our draft objectives and key results for [period]: [paste OKRs]. Our
team is [team name] and our users are [audience]. Review each key result and
tell me whether it describes an outcome or an activity, whether it could be met
without helping users, and what guardrail would show that. Suggest rewrites
where needed, using [placeholders] for any numbers we must supply ourselves.
Do not invent targets or benchmark values. List your assumptions and questions I
should answer.
```

**Ánh xạ các yếu tố thành công then chốt sang KPI.**

```text
For the ITIL practice [practice name] in our organization, which serves
[audience], here are the critical success factors we have drafted: [list CSFs].
Propose KPIs for each that could be collected from [data sources]. For each KPI,
state where the clock starts and stops if it is a time measure, what reading
would show the factor is failing, and how it might be gamed. Do not state
benchmark values or compliance claims. List your assumptions.
```

**Kiểm toán một thẻ điểm về sự cân bằng.**

```text
Our scorecard has these measures, grouped by perspective: [paste measures by
perspective]. We are [type of organization]. Identify perspectives that are
thin, measures that appear to duplicate each other, and measures that could
move in a way that hides a problem in another perspective. Suggest guardrails
and measures to retire. Do not invent figures or sources. List your
assumptions and what you could not judge from the data I gave you.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề nào sở hữu một chỉ số và rào chắn ghép đôi của nó trước khi bạn đặt nó vào một khung.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số dựa trên khung mang định nghĩa, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Một khung quyết định chỉ số nào xứng đáng có chỗ, và quy tắc chung là bắt đầu từ một mục tiêu và một câu hỏi, rồi mới chọn chỉ số.
- Goal-Question-Metric hợp để thiết kế thước đo cho một đội, OKR hợp để tập trung một quý, thẻ điểm hợp cho các góc nhìn tròn trịa của lãnh đạo, và CSF cùng KPI hợp để vận hành một thực hành ITIL.
- Dùng khung nhẹ nhất hiệu quả, và nói rõ khung nào sở hữu con số nào.
- Mọi khung đều có thể bị lợi dụng, nên hãy ghép mỗi chỉ số với một rào chắn và rà soát tập theo lịch.
- Giữ các khung ở cấp đội và dịch vụ, không bao giờ làm mục tiêu cá nhân.
- Cho nghỉ hưu các mục tiêu, kết quả then chốt và chỉ báo không còn cung cấp thông tin cho quyết định.

## Tài liệu tham khảo và đọc thêm

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
