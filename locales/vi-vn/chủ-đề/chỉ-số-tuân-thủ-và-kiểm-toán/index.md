# Chỉ số tuân thủ và kiểm toán

**Tuân thủ dễ dàng và trung thực nhất khi bằng chứng do chính công việc tạo ra, nên hãy đo bao nhiêu bằng chứng đến một cách tự động, các phát hiện được sửa nhanh thế nào, và cùng một phát hiện quay lại bao nhiêu lần, và coi kiểm toán viên là các bên liên quan tham gia cuộc trò chuyện từ sớm.**

## Tổng quan và động lực

Hầu hết các tổ chức xây dựng và vận hành dịch vụ CNTT đều phải giải trình với ai đó: cơ quan quản lý, khách hàng, tổ chức chứng nhận, công ty bảo hiểm, hội đồng quản trị. [Tuân thủ quy định](https://en.wikipedia.org/wiki/Regulatory_compliance) là hành động phù hợp với luật, quy tắc và tiêu chuẩn, và chứng minh rằng bạn làm vậy. Một cuộc kiểm toán là sự xem xét có hệ thống các bằng chứng để đánh giá điều đó có đúng không. Trong CNTT, điều này gồm kiểm toán các kiểm soát báo cáo tài chính, nghĩa vụ bảo vệ dữ liệu, chứng nhận an ninh và cam kết hợp đồng. [Kiểm toán công nghệ thông tin](https://en.wikipedia.org/wiki/Information_technology_audit) xem xét các kiểm soát xung quanh hệ thống và dữ liệu chúng nắm giữ.

Tuân thủ và phân phối liên tục mang tiếng là có ma sát. Tuân thủ đòi tài liệu, chữ ký và phê duyệt trước thay đổi, còn phân phối liên tục ưa thay đổi nhỏ được phát hành liên tục. Ma sát là có thật khi tuân thủ được coi là một giai đoạn ở cuối. Nó giảm khi tuân thủ được xây vào dòng chảy công việc. Bản ghi thay đổi, rà soát mã, kiểm thử tự động và nhật ký truy cập là bằng chứng, và một đường ống phân phối tạo ra chúng mỗi ngày. [Kiểm toán liên tục](https://en.wikipedia.org/wiki/Continuous_auditing) dùng các kiểm tra tự động, gần thời gian thực đối với kiểm soát thay vì lấy mẫu định kỳ, và nó khớp với nhịp của phân phối liên tục. Một [dấu vết kiểm toán](https://en.wikipedia.org/wiki/Audit_trail) là một bản ghi cho thấy ai đã làm gì, khi nào, trên hệ thống nào, và nó thường là bằng chứng mạnh nhất bạn có.

ITIL mô tả các thực hành liên quan: quản lý an toàn thông tin, quản lý rủi ro, và quản trị hệ thống giá trị dịch vụ, và nó chỉ đến các tiêu chuẩn như [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) cho hệ thống quản lý an toàn thông tin. Các khung mà tổ chức thường gặp gồm các chế độ báo cáo cho kiểm soát tài chính, như [Đạo luật Sarbanes–Oxley](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) ở Hoa Kỳ, các luật bảo vệ dữ liệu như [Quy định chung về bảo vệ dữ liệu](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) ở Liên minh châu Âu, và các báo cáo đảm bảo như [SOC 2](https://en.wikipedia.org/wiki/SOC_2), xem xét các kiểm soát liên quan đến an ninh và các tiêu chí liên quan. Chi tiết khác nhau theo khu vực pháp lý, ngành và thời điểm, và chủ đề này mô tả thực hành đo lường, không phải yêu cầu pháp lý. Hãy làm việc với đồng nghiệp tuân thủ, pháp lý và kiểm toán để biết điều gì áp dụng cho bạn.

Mục đích của chỉ số tuân thủ là tìm hiểu tổ chức đáp ứng nghĩa vụ tốt đến đâu và mất bao nhiêu công sức, để cả hai cùng cải thiện. Rủi ro là tuân thủ trở thành một màn trình diễn cho kiểm toán viên. Một đội có thể qua kiểm toán bằng cách tạo tài liệu vào phút chót mà vẫn chạy những thực hành rủi ro. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng: khi "phát hiện kiểm toán" là mục tiêu, mọi người tránh sự soi xét, thu hẹp phạm vi và thương lượng câu chữ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Hai hướng suy nghĩ giúp ích.

- **Tuân thủ như một sản phẩm phụ.** Nếu đường ống ghi lại rà soát, kiểm thử, phê duyệt và triển khai một cách tự động, bằng chứng tồn tại dù kiểm toán có gần hay không. Điều này cũng loại bỏ cám dỗ dựng lại bằng chứng sau đó.
- **Kiểm toán viên như các bên liên quan.** Thực hành linh hoạt coi trọng sự cộng tác liên tục với các bên liên quan. Kiểm toán viên và người đánh giá là các bên liên quan có những câu hỏi chính đáng. Mời họ vào việc thiết kế kiểm soát và bằng chứng giảm bất ngờ và làm lại, đồng thời giữ tính độc lập của họ.

## Nguyên tắc chính

- **Tạo bằng chứng như một sản phẩm phụ của công việc.** Đường ống, phiếu và nhật ký nên trả lời hầu hết câu hỏi kiểm toán.
- **Ánh xạ nghĩa vụ tới kiểm soát và người sở hữu.** Mỗi nghĩa vụ có một kiểm soát, và mỗi kiểm soát có một người sở hữu.
- **Cộng tác sớm với kiểm toán viên.** Chia sẻ thiết kế và cách tiếp cận bằng chứng trước kiểm toán, và giữ tính độc lập của họ.
- **Sửa nguyên nhân, không phải phát hiện.** Một phát hiện được đóng mà không gỡ nguyên nhân sẽ quay lại.
- **Đo công sức cũng như kết quả.** Chi phí của tuân thủ là một phần của bức tranh.
- **Giữ phân tách nhiệm vụ nơi quan trọng.** Tính độc lập của rà soát là một kiểm soát mà tự động hóa có thể hỗ trợ nhưng không thể thay thế.
- **Trung thực về khoảng trống.** Điểm yếu tự báo cáo thì tốt hơn là bạn tìm ra chứ không phải người khác.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ nghĩa vụ | Tỷ lệ nghĩa vụ áp dụng được ánh xạ tới một kiểm soát có người sở hữu và nguồn bằng chứng | số nghĩa vụ được ánh xạ tới ít nhất một kiểm soát có người sở hữu và nguồn bằng chứng / số nghĩa vụ áp dụng | phần trăm | Sổ đăng ký nghĩa vụ và sổ đăng ký kiểm soát | Quản trị; quản lý an toàn thông tin; quản lý rủi ro | Định nghĩa hoàn thành gồm bằng chứng kiểm soát | Hằng quý |
| Tỷ lệ tự động hóa bằng chứng | Tỷ lệ bằng chứng kiểm soát trong phạm vi được thu thập tự động từ các hệ thống ghi nhận | số mục bằng chứng kiểm soát thu thập tự động / số mục bằng chứng yêu cầu | phần trăm | Sổ đăng ký kiểm soát, đường ống và nhật ký hệ thống | Quản lý an toàn thông tin; hỗ trợ thay đổi | Đường ống ghi lại rà soát, kiểm thử và triển khai tự động | Hằng quý |
| Thời gian đáp ứng bằng chứng | Thời gian cung cấp bằng chứng mà kiểm toán viên hoặc người đánh giá yêu cầu | trung vị và bách phân vị thứ 85 của số ngày từ yêu cầu đến bằng chứng được chấp nhận | ngày | Công cụ theo dõi yêu cầu kiểm toán | Quản trị; quản lý an toàn thông tin | Đáp ứng một câu hỏi của bên liên quan | Mỗi cuộc kiểm toán |
| Thời gian đóng phát hiện | Thời gian đóng các phát hiện kiểm toán theo mức nghiêm trọng | trung vị và bách phân vị thứ 85 của số ngày từ lúc phát hiện được đưa ra đến khi đóng được xác minh | ngày | Công cụ theo dõi phát hiện | Cải tiến liên tục; quản lý rủi ro | Thời gian sửa một lỗi | Hằng tháng |
| Tỷ lệ phát hiện lặp lại | Tỷ lệ phát hiện tái diễn từ một cuộc kiểm toán hoặc rà soát trước | số phát hiện trùng về bản chất với một phát hiện đã đóng trước đó / số phát hiện trong kỳ | phần trăm | Công cụ theo dõi phát hiện kèm liên kết nguyên nhân | Cải tiến liên tục; quản lý vấn đề | Lỗi tái diễn sau một lần sửa | Mỗi chu kỳ kiểm toán |
| Xung đột phân tách nhiệm vụ | Số tổ hợp truy cập hoặc phê duyệt vi phạm quy tắc phân tách, và thời gian để giải quyết | số xung đột phát hiện được; số ngày trung vị để giải quyết | số đếm; ngày | Công cụ quản lý danh tính và truy cập, bản ghi thay đổi | Quản lý an toàn thông tin; hỗ trợ thay đổi | Rà soát độc lập các thay đổi | Hằng tháng |
| Công sức kiểm toán | Số giờ người mà tổ chức dành để chuẩn bị và hỗ trợ một chu kỳ kiểm toán, theo đơn vị phạm vi | số giờ ghi cho chuẩn bị và hỗ trợ kiểm toán / số kiểm soát hoặc hệ thống trong phạm vi | giờ mỗi đơn vị | Bản ghi thời gian hoặc ước lượng công sức | Quản trị; cải tiến liên tục | Chi phí của công việc không phải phân phối | Mỗi chu kỳ kiểm toán |

Hãy nêu các nghĩa vụ trong phạm vi và phạm vi kiểm toán trong sổ đăng ký. Thời gian đóng bắt đầu khi phát hiện được đưa ra và dừng khi kiểm toán viên hoặc người xác minh độc lập xác nhận việc đóng, không phải khi đội nói đã xong. Các phát hiện lặp lại được ghép theo nguyên nhân, không theo câu chữ, và quy tắc ghép được ghi lại. Công sức kiểm toán là một thước đo xu hướng cho tổ chức và không bao giờ là thước đo cá nhân.

## Khuyến nghị

### Biết nghĩa vụ và kiểm soát của bạn

**1. Liệt kê các nghĩa vụ áp dụng, bằng ngôn ngữ đơn giản.** Cùng đồng nghiệp pháp lý và tuân thủ, hãy liệt kê luật, tiêu chuẩn, hợp đồng và chính sách ràng buộc dịch vụ, và mỗi cái yêu cầu gì về kết quả. Giữ danh sách ngắn và dễ đọc. Những nghĩa vụ mà không ai nói được rõ ràng là những cái gây bất ngờ khi kiểm toán.

**2. Ánh xạ mỗi nghĩa vụ tới kiểm soát, người sở hữu và bằng chứng.** Với mỗi nghĩa vụ, nêu tên kiểm soát đáp ứng nó, người chịu trách nhiệm, và bằng chứng cho thấy kiểm soát vận hành. Nơi một kiểm soát đáp ứng nhiều nghĩa vụ, hãy nói rõ, vì điều đó giảm công sức trùng lặp. Độ phủ nghĩa vụ đo mức đầy đủ của bản đồ này. Nghĩa vụ chưa được ánh xạ là khoảng trống cần khép hoặc chấp nhận một cách có chủ ý.

**3. Ưu tiên ít kiểm soát hơn, mạnh hơn.** Một kiểm soát được tự động hóa và kiểm thử đáng giá bằng vài kiểm soát thủ công. Hãy tìm các kiểm soát chồng chéo, và cho nghỉ hưu những cái không phục vụ nghĩa vụ nào. Mỗi kiểm soát tốn công sức để vận hành và để làm bằng chứng (xem chủ đề 8.2, Chỉ số rủi ro và kiểm soát).

### Biến bằng chứng thành sản phẩm phụ

**4. Để đường ống tạo ra bằng chứng.** Hãy liên kết mọi thay đổi sản xuất với một yêu cầu, một lần rà soát mã, kết quả kiểm thử, và một phê duyệt nơi cần, tất cả được ghi tự động. Một bản ghi triển khai cho thấy những điều này nói với kiểm toán viên điều đã xảy ra mà không cần viết tài liệu. Điều này dựa vào các thực hành phân phối liên tục mà các đội linh hoạt đã dùng (xem chủ đề 4.5, Chỉ số phát hành và triển khai).

**5. Dùng kiểm tra chính sách trong đường ống.** Hãy mã hóa các quy tắc, như "không triển khai nếu không có rà soát bởi người khác tác giả" hoặc "không truy cập sản xuất nếu không có phiếu", thành kiểm tra tự động. Kiểm tra vừa là một kiểm soát vừa là bằng chứng của nó. Giữ các quy tắc hiển thị và có phiên bản, để thay đổi chúng cũng được ghi lại. Điều này hỗ trợ [phân tách nhiệm vụ](https://en.wikipedia.org/wiki/Segregation_of_duties), nguyên tắc rằng không một người nào nên kiểm soát mọi giai đoạn của một quy trình nhạy cảm.

**6. Bảo tồn dấu vết kiểm toán đúng cách.** Hãy giữ nhật ký truy cập và thay đổi theo cách không thể bị chính những người chúng mô tả sửa đổi, lưu giữ chúng trong thời hạn yêu cầu, và làm chúng tìm kiếm được. Một dấu vết có thể bị chính những người nó ghi sửa là bằng chứng yếu. Hãy kiểm tra quy tắc lưu giữ với đồng nghiệp pháp lý.

**7. Đo bao nhiêu bằng chứng là tự động.** Tỷ lệ tự động hóa bằng chứng cho thấy nơi thu thập thủ công còn lại. Xếp hạng các mục thủ công theo công sức và rủi ro, và tự động hóa những mục tệ nhất trước. Khi tỷ lệ tăng, công sức kiểm toán và thời gian đáp ứng giảm.

### Làm việc với kiểm toán viên

**8. Mời kiểm toán viên vào thiết kế.** Hãy chia sẻ sớm các thay đổi dự kiến về kiểm soát và bằng chứng với kiểm toán nội bộ và người đánh giá bên ngoài, và hỏi điều gì sẽ làm họ thỏa mãn. Tính độc lập nghĩa là họ không thiết kế kiểm soát của bạn, và không có nghĩa là họ không thể cho bạn biết họ sẽ cần bằng chứng nào. Các cuộc trò chuyện sớm giảm làm lại. Viện Kiểm toán viên Nội bộ công bố các tiêu chuẩn cho nghề giải thích vai trò của [kiểm toán nội bộ](https://en.wikipedia.org/wiki/Internal_audit).

**9. Chuẩn bị một chỉ mục bằng chứng.** Hãy giữ một chỉ mục sống về nơi mỗi loại bằng chứng nằm và cách truy xuất nó. Theo dõi thời gian đáp ứng cho các yêu cầu bằng chứng và dùng các độ trễ để tìm tự động hóa còn thiếu. Một quy trình ngắn, đều đặn tốt hơn một cuộc chạy đua trước mỗi cuộc kiểm toán.

**10. Thống nhất ý nghĩa của trọng yếu và phạm vi.** Hãy hỏi kiểm toán viên họ đánh giá điều gì quan trọng và điều gì trong phạm vi ra sao, và ghi lại câu trả lời. Một sự hiểu biết chung ngăn tranh chấp về sau. Đừng thu hẹp phạm vi để tránh sự soi xét, và đừng mở rộng mà không có lý do.

### Sửa nguyên nhân và học

**11. Coi mỗi phát hiện là một bản ghi vấn đề.** Hãy tìm nguyên nhân, sửa nó, và xác minh việc đóng bởi một người độc lập. Liên kết các phát hiện lặp lại với những cái trước, và xem xét vì sao lần sửa đầu không bền. Tỷ lệ phát hiện lặp lại cao chỉ ra những bản sửa xử lý triệu chứng, gắn với quản lý vấn đề (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

**12. Theo dõi chi phí và kéo nó xuống.** Hãy ghi công sức kiểm toán qua các chu kỳ. Nếu công sức cao và phẳng, hãy tìm sự trùng lặp giữa các cuộc kiểm toán, thu thập bằng chứng thủ công, và các kiểm soát không phục vụ ai. Báo cáo xu hướng công sức cùng với kết quả. Tuân thủ đáng với chi phí của nó khi nó giảm rủi ro thật, và các chỉ số giúp bạn phân biệt.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ nghĩa vụ | Ánh xạ nghĩa vụ tới kiểm soát yếu hoặc không liên quan; định nghĩa nghĩa vụ hẹp | Bên thứ hai rà soát độ liên quan của kiểm soát; kiểm thử các kiểm soát (xem chủ đề 8.2, Chỉ số rủi ro và kiểm soát) |
| Tỷ lệ tự động hóa bằng chứng | Tính ảnh chụp màn hình hoặc bản xuất là tự động; tự động hóa bằng chứng giá trị thấp trước | Định nghĩa tự động là do hệ thống tạo và chống can thiệp; xếp hạng theo rủi ro |
| Thời gian đáp ứng bằng chứng | Đưa bằng chứng một phần nhanh chóng; thương lượng câu chữ yêu cầu | Chỉ đếm bằng chứng được chấp nhận; theo dõi các yêu cầu tiếp theo |
| Thời gian đóng phát hiện | Đóng phát hiện mà không xác minh; phân loại lại mức nghiêm trọng | Xác minh độc lập; nhật ký thay đổi mức nghiêm trọng |
| Tỷ lệ phát hiện lặp lại | Viết lại phát hiện để chúng không khớp; đóng phát hiện trước đó như một loại khác | Ghép theo nguyên nhân với một quy tắc được ghi lại; kiểm toán nội bộ rà soát |
| Xung đột phân tách nhiệm vụ | Chuyển xung đột sang hệ thống ngoài phạm vi; cấp truy cập tạm thời không bao giờ được ghi | Bao quát mọi hệ thống có quy trình nhạy cảm; rà soát truy cập tạm thời |
| Công sức kiểm toán | Không ghi giờ; chuyển công sức sang ngân sách khác | Lấy mẫu bản ghi thời gian; so sánh với khảo sát đội |

Một kết quả đọc lành mạnh là tự động hóa bằng chứng tăng, thời gian đáp ứng ngắn hơn và ổn định hơn, các phát hiện được đóng kèm xác minh, tỷ lệ lặp lại thấp, và công sức kiểm toán giảm khi quy trình trưởng thành.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Bằng chứng thủ công định kỳ | Quen thuộc với kiểm toán viên | Tốn kém; dựng lại sau sự việc |
| Bằng chứng liên tục tự động | Rẻ để duy trì; kịp thời | Cần kỹ thuật; kiểm toán viên cần tin nguồn |
| Phê duyệt nặng | Kiểm soát hiển thị | Chậm; gộp thay đổi |
| Kiểm tra chính sách tự động | Nhất quán và nhanh | Quy tắc phải đúng và hiển thị |
| Kiểm toán viên tham gia sớm | Ít bất ngờ hơn | Cần cẩn thận để giữ tính độc lập |
| Kiểm toán ở cuối | Phân tách rõ ràng | Phát hiện muộn; làm lại |
| Một kiểm soát cho nhiều nghĩa vụ | Hiệu quả | Một thất bại ảnh hưởng đến nhiều nghĩa vụ |
| Nhiều kiểm soát cụ thể | Ánh xạ rõ ràng | Công sức trùng lặp |

Câu trả lời dạng văn xuôi là tự động hóa bằng chứng từ đường ống và các hệ thống ghi nhận, mời kiểm toán viên vào thiết kế từ sớm trong khi giữ tính độc lập của họ, và giữ một bộ kiểm soát gọn, mạnh được ánh xạ tới nghĩa vụ.

## Câu hỏi để thảo luận với đội nhóm

**1. Câu hỏi kiểm toán nào mất nhiều thời gian nhất để chúng ta trả lời, và vì sao?**
Chọn yêu cầu bằng chứng chậm nhất từ cuộc kiểm toán gần nhất và lần theo nó. Bằng chứng bị thiếu, rải rác, hay nằm trong đầu ai đó? Thảo luận điều gì sẽ làm nó tự động. Người điều phối nên ghi lại chi phí theo giờ.

**2. Với bất kỳ thay đổi sản xuất nào trong tháng qua, chúng ta có thể cho thấy ai đã rà soát nó và những kiểm thử nào đã chạy không?**
Chọn ngẫu nhiên một thay đổi và thử. Ghi lại nơi chuỗi bị đứt. Thống nhất một cải tiến cho bản ghi thay đổi hoặc đường ống khép khoảng trống.

**3. Chúng ta đã hứa gì ở cuộc kiểm toán trước, và nó có bền không?**
Rà soát các phát hiện và bản sửa. Với mỗi cái, hỏi nguyên nhân đã được gỡ chưa và ai đã xác minh việc đóng. Tìm các phát hiện lặp lại. Thống nhất một phát hiện để xem xét sâu hơn.

**4. Kiểm toán viên sẽ nói gì với chúng ta nếu chúng ta hỏi họ cách làm bằng chứng dễ hơn?**
Lên kế hoạch một cuộc trò chuyện với kiểm toán nội bộ hoặc người đánh giá về thiết kế bằng chứng. Hỏi họ tin gì và không tin gì. Người điều phối nên coi câu trả lời của họ là thông tin, và nhớ các quy tắc độc lập.

**5. Chúng ta chạy những kiểm soát nào mà không nghĩa vụ nào cần?**
Liệt kê các kiểm soát và nghĩa vụ chúng phục vụ. Tìm những cái không có mục đích rõ ràng. Thảo luận việc cho chúng nghỉ hưu, và bằng chứng rằng chúng không cần thiết.

**6. Ở đâu một người có thể làm một việc nhạy cảm từ đầu đến cuối ở đây?**
Hãy nghĩ về triển khai, cấp truy cập và thanh toán. Kiểm tra xem công cụ có thực thi sự phân tách hay chỉ chính sách. Thảo luận các kiểm soát bù, như rà soát tự động, nơi số nhân viên ít.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối tạo ra phần lớn bằng chứng bằng cách làm tốt công việc của họ. Họ nên giữ bản ghi thay đổi, rà soát và kiểm thử được liên kết, dùng kiểm tra chính sách trong đường ống, và nêu mối lo về các kiểm soát làm chậm công việc mà không giảm rủi ro. Họ được lợi từ các cuộc trò chuyện sớm với kiểm toán viên về bằng chứng nào là đủ.

### Đội dịch vụ và vận hành

Các đội vận hành chạy quản lý truy cập, ghi nhật ký, sao lưu và xử lý sự cố, là trung tâm của nhiều cuộc kiểm toán. Họ nên giữ nhật ký chống can thiệp và được lưu giữ, quản lý rà soát truy cập đúng lịch, và giữ chỉ mục bằng chứng. Họ gánh gánh nặng của bằng chứng thủ công và có thể chỉ ra nơi tự động hóa giúp nhiều nhất.

### Lãnh đạo và quản trị

Lãnh đạo chịu trách nhiệm về tuân thủ và thường về kết quả kiểm toán. Họ nên tài trợ tự động hóa bằng chứng, yêu cầu độ phủ và tỷ lệ phát hiện lặp lại thay vì chỉ số đếm phát hiện, và ủng hộ tính độc lập của kiểm toán viên. Quản trị nên kỳ vọng các báo cáo trung thực về khoảng trống, và một kế hoạch cho từng cái.

### Khách hàng và người dùng

Khách hàng và người dùng dựa vào tuân thủ như một sự đảm bảo về cách dữ liệu và dịch vụ của họ được xử lý. Họ được lợi khi các báo cáo đảm bảo rõ ràng, khi sự cố được báo cáo theo yêu cầu, và khi kiểm soát không làm việc sử dụng hợp pháp khó hơn mức cần thiết. Giao tiếp minh bạch về tuân thủ xây dựng lòng tin.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một công ty thanh toán cỡ vừa vận hành một nền tảng xử lý thẻ và được đánh giá hằng năm theo một khung đảm bảo an ninh và một chế độ bảo vệ dữ liệu. Các con số dưới đây chỉ mang tính minh họa.

Việc chuẩn bị kiểm toán tốn các đội kỹ thuật khoảng sáu tuần mỗi năm. Đợt đánh giá năm ngoái kết thúc với 14 phát hiện, trong đó 5 cái lặp lại từ năm trước. Trưởng bộ phận tuân thủ vẽ ra tình hình. Độ phủ nghĩa vụ là 83 phần trăm, với 17 phần trăm nghĩa vụ không có người sở hữu kiểm soát được nêu tên. Tự động hóa bằng chứng là 22 phần trăm, và hầu hết bằng chứng cho phê duyệt thay đổi đến từ ảnh chụp màn hình phiếu được biên soạn bằng tay. Thời gian đáp ứng bằng chứng trung vị là 9 ngày, với bách phân vị thứ 85 là 21 ngày. Thời gian đóng phát hiện trung vị là 74 ngày, và việc đóng thường được đội sở hữu đánh dấu mà không xác minh.

Trưởng bộ phận tuân thủ làm việc với các đội phân phối và vận hành và với kiểm toán viên nội bộ. Họ đổi bốn thứ. Mỗi thay đổi sản xuất trong đường ống giờ liên kết với yêu cầu, rà soát mã bởi người khác tác giả, kết quả kiểm thử và triển khai, được ghi tự động vào bản ghi thay đổi. Một kiểm tra chính sách chặn triển khai thiếu rà soát độc lập, và ghi lại lộ trình ngoại lệ cho trường hợp khẩn cấp. Rà soát truy cập chạy hằng quý từ hệ thống danh tính, hiển thị trực tiếp các xung đột phân tách nhiệm vụ. Mỗi phát hiện trở thành một bản ghi vấn đề, với một người xác minh độc lập từ kiểm toán nội bộ, và các phát hiện lặp lại được liên kết với những cái đi trước.

Ở đợt đánh giá kế tiếp, tỷ lệ tự động hóa bằng chứng là 71 phần trăm, thời gian đáp ứng bằng chứng trung vị là 2 ngày, bách phân vị thứ 85 là 5 ngày, và việc chuẩn bị kiểm toán mất khoảng hai tuần. Độ phủ nghĩa vụ là 97 phần trăm, và các mục còn lại có chấp nhận được ghi tài liệu. Các phát hiện giảm xuống 6, với một cái lặp lại, và thời gian đóng trung vị là 31 ngày với xác minh độc lập. Giám đốc điều hành yêu cầu không có phát hiện nào vào năm sau. Trưởng bộ phận tuân thủ đề xuất theo dõi phát hiện lặp lại, thời gian đóng và tự động hóa bằng chứng, và giải thích rằng mục tiêu không phát hiện đẩy các đội giấu vấn đề hoặc thu hẹp phạm vi, và một người đánh giá không tìm thấy gì có thể đã không tìm đủ kỹ. Quyết định được ghi lại, và hội đồng đồng ý rà soát các thước đo ở cuộc họp kế tiếp.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy tạo bằng chứng như một sản phẩm phụ của công việc, và mời kiểm toán viên vào cuộc trò chuyện từ sớm. Điều cần lưu ý là mục tiêu cho phát hiện kiểm toán có thể làm nản việc tự báo cáo trung thực.

### AI

Nghĩa vụ liên quan đến AI đang thay đổi, nên hãy kiểm tra luật áp dụng cho bạn với cố vấn pháp lý, và giữ một bản kiểm kê các hệ thống AI làm bằng chứng. Đừng nhờ một công cụ AI tuyên bố về tuân thủ. Điều cần lưu ý là các bản tóm tắt bằng chứng do AI tạo cần một người xác minh với nguồn.

### Tự động hóa

Hãy tự động hóa việc thu thập bằng chứng từ đường ống và công cụ, và đo tỷ lệ tự động hóa bằng chứng và thời gian đáp ứng. Điều cần lưu ý là tự động hóa có thể tạo ra bằng chứng đầy đủ nhưng sai, nên hãy lấy mẫu.

### Phân tích

Hãy báo cáo phát hiện lặp lại và thời gian đóng kèm số đếm. Quyết định được cung cấp thông tin là nơi kiểm soát thất bại nhiều lần. Điều cần lưu ý là công sức kiểm toán là một chi phí, không phải mục tiêu, và việc giảm nó không nên làm giảm độ phủ.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Nghĩa vụ có thể đến đột ngột với một khách hàng lớn hoặc một vòng gọi vốn. Hãy xây thói quen sớm: rà soát đồng nghiệp, bản ghi thay đổi và kiểm soát truy cập trong đường ống, để bằng chứng tồn tại khi được hỏi. Chọn một khung khi doanh nghiệp cần và ánh xạ nó tới những gì bạn đã làm.

**Doanh nghiệp nhỏ.** Nghĩa vụ tuân thủ thường được cố định bởi hợp đồng và luật, và nguồn lực hạn chế. Hãy giữ một danh sách ngắn các nghĩa vụ, dựa vào dịch vụ được quản lý có báo cáo đảm bảo riêng, và giữ một thư mục bằng chứng đơn giản. Hãy cảnh giác với việc mua công cụ tuân thủ tốn hơn rủi ro chúng giải quyết.

**Doanh nghiệp lớn.** Nhiều nghĩa vụ chồng chéo, nên một khung kiểm soát thống nhất ánh xạ một kiểm soát tới nhiều nghĩa vụ tiết kiệm công sức lớn. Hãy dùng các nguồn bằng chứng chung, một công cụ theo dõi phát hiện dùng chung, và một lịch kiểm toán để tránh các yêu cầu lặp lại. Phối hợp kiểm toán nội bộ, tuân thủ và an ninh để các đội không bị xem xét ba lần cho cùng một việc.

**Chính phủ và khu vực công.** Nghĩa vụ tuân thủ rộng và công khai, gồm quy tắc mua sắm, hồ sơ, khả năng tiếp cận và bảo vệ dữ liệu, với kiểm toán bởi các cơ quan quốc gia. Hãy ghi tài liệu quyết định và bằng chứng trong thời hạn yêu cầu, làm báo cáo nhất quán giữa các cơ quan nơi có thể, và giữ ranh giới rõ giữa kiểm toán độc lập và quản lý. Nghĩa vụ có thể đổi theo bầu cử và lập pháp (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí gồm công cụ cho sổ đăng ký kiểm soát, tích hợp đường ống cho bằng chứng, hệ thống danh tính và ghi nhật ký, và thời gian của nhân viên tuân thủ và các đội. Công sức ban đầu để tự động hóa bằng chứng là đáng kể, và nó thay thế công việc thủ công lặp lại.

Lợi tức là công sức kiểm toán lặp lại thấp hơn, phản hồi nhanh hơn cho các yêu cầu, ít phát hiện lặp lại hơn, và cái nhìn trung thực hơn về sức khỏe kiểm soát. Chúng cũng gồm chi phí tránh được của những bất ngờ muộn trong một chu kỳ chứng nhận. Hãy xây hồ sơ từ các con số của chính bạn: số giờ chuẩn bị kiểm toán trước và sau, thời gian đáp ứng bằng chứng, số lượng và tuổi của các phát hiện, và chi phí của bất kỳ sự chậm trễ liên quan kiểm toán nào trong một thương vụ. Tránh trích dẫn các nghiên cứu về chi phí tuân thủ trừ khi bạn truy được phương pháp và mức liên quan của chúng. Hãy tính chi phí của chương trình và rủi ro của việc tự động hóa quá mức các kiểm soát yếu. Cách xử lý tài chính rộng hơn có ở chủ đề cuối của phần trước (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Chuẩn bị cho kiểm toán vào tháng cuối.** Nó tạo ra bằng chứng dựng lại và một cuộc chạy đua. Hãy ghi bằng chứng khi công việc diễn ra.
- **Ảnh chụp màn hình làm bằng chứng.** Chúng thủ công, dễ sửa và tốn kém. Hãy dùng bản ghi do hệ thống tạo.
- **Nhắm tới không phát hiện nào.** Nó thưởng cho phạm vi hẹp và vấn đề bị giấu. Hãy theo dõi việc đóng, lặp lại và độ phủ.
- **Đóng phát hiện bằng khẳng định.** Cùng phát hiện quay lại. Hãy xác minh việc đóng một cách độc lập.
- **Coi kiểm toán viên là đối thủ.** Nó tăng chi phí cả hai phía. Hãy cộng tác về thiết kế bằng chứng trong khi giữ tính độc lập.
- **Kiểm soát không phục vụ nghĩa vụ nào.** Chúng tốn công sức và nuôi sự hoài nghi. Hãy cho chúng nghỉ hưu.
- **Tự động hóa một kiểm soát tồi.** Nó tạo ra bằng chứng của một kiểm soát yếu ở quy mô lớn. Hãy kiểm thử kiểm soát trước.
- **Phân tách nhiệm vụ thủ công.** Nó dựa vào trí nhớ. Hãy thực thi nó trong công cụ và rà soát ngoại lệ.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Nghĩa vụ và kiểm soát | Biết bởi một vài người | Danh sách nghĩa vụ và kiểm soát | Được ánh xạ tới kiểm soát, người sở hữu và nguồn bằng chứng | Độ phủ được theo dõi; chồng chéo giảm; kiểm soát được kiểm thử | Khung kiểm soát thống nhất qua các đội, nhà cung cấp và chế độ |
| Bằng chứng | Biên soạn trước các cuộc kiểm toán | Biểu mẫu chuẩn và một thư mục bằng chứng | Đường ống và hệ thống ghi nhận tạo ra nhiều bằng chứng | Tỷ lệ tự động hóa, thời gian đáp ứng và công sức được quản lý | Đảm bảo liên tục với kiểm toán viên dùng bằng chứng trực tiếp |
| Phát hiện và học hỏi | Phát hiện bị tranh cãi và đóng bằng khẳng định | Phát hiện được theo dõi | Phát hiện được coi là bản ghi vấn đề với xác minh độc lập | Lặp lại và thời gian đóng được phân tích và đưa vào thiết kế kiểm soát | Phát hiện được chia sẻ trong tổ chức và với đối tác; cải tiến là thường lệ |

## Danh sách kiểm tra

- [ ] Các nghĩa vụ áp dụng được liệt kê bằng ngôn ngữ đơn giản, kèm người sở hữu.
- [ ] Mỗi nghĩa vụ được ánh xạ tới kiểm soát và một nguồn bằng chứng.
- [ ] Thay đổi sản xuất mang bằng chứng yêu cầu, rà soát, kiểm thử và triển khai được liên kết một cách tự động.
- [ ] Kiểm tra chính sách thực thi rà soát và phân tách nhiệm vụ trong đường ống.
- [ ] Dấu vết kiểm toán chống can thiệp và được lưu giữ trong thời hạn yêu cầu.
- [ ] Một chỉ mục bằng chứng tồn tại, và thời gian đáp ứng cho yêu cầu được đo.
- [ ] Kiểm toán viên được tham vấn về thiết kế bằng chứng trong khi tính độc lập được giữ.
- [ ] Phát hiện được ghi như bản ghi vấn đề và đóng kèm xác minh độc lập.
- [ ] Phát hiện lặp lại được liên kết với những cái đi trước và được xem xét nguyên nhân.
- [ ] Công sức kiểm toán được theo dõi như một xu hướng và được rà soát về sự trùng lặp.

## Lời nhắc AI

**Ánh xạ nghĩa vụ tới kiểm soát.**

```text
Here is a list of obligations that apply to our service in [sector and
jurisdiction]: [paste in plain language]. Here is our list of controls:
[paste]. Build a table mapping each obligation to controls, the evidence that
shows each control operates, and an owner role. Flag obligations with no
control, controls with no obligation, and weak evidence. Do not give legal
conclusions. List your assumptions and questions for legal and compliance.
```

**Lập kế hoạch tự động hóa bằng chứng.**

```text
Our manual audit evidence includes: [list items with hours spent]. Our systems
of record are: [list tools]. Rank the evidence items by effort and risk and
propose how each could be collected automatically from a system of record,
what makes the evidence trustworthy (tamper resistance, completeness), and
what to confirm with auditors. Do not assume features of specific tools. List
your assumptions.
```

**Phân tích các phát hiện lặp lại.**

```text
Here are findings from the last [number] audit cycles, with causes and fixes:
[paste, sanitized]. Group findings by underlying cause, identify repeats, and
suggest why earlier fixes did not hold. Propose a rule for matching findings
by cause and a verification step for closure. Do not speculate beyond the
information given. List your assumptions.
```

**Chuẩn bị một cuộc trò chuyện sớm với kiểm toán viên.**

```text
Draft an agenda for a meeting with internal audit about changing how we
produce evidence for [control or process]. Include what we plan to change, the
questions we need answered (acceptable evidence, sampling, materiality), what
we will not ask them to do to preserve independence, and how we will record
the outcome. Use plain language. List your assumptions and risks.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số tuân thủ hoặc kiểm toán.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số tuân thủ mang vectơ lợi dụng, rào chắn và quy tắc độc lập của nó.

## Điểm chính cần nhớ

- Tạo bằng chứng như một sản phẩm phụ của phân phối, từ đường ống và các hệ thống ghi nhận, và đo bao nhiêu là tự động.
- Ánh xạ mọi nghĩa vụ tới một kiểm soát, một người sở hữu và một nguồn bằng chứng.
- Mời kiểm toán viên vào thiết kế bằng chứng sớm, và bảo vệ tính độc lập của họ.
- Đóng phát hiện bằng cách gỡ nguyên nhân, xác minh việc đóng một cách độc lập, và theo dõi tỷ lệ phát hiện lặp lại.
- Tránh các mục tiêu như không phát hiện nào, và theo dõi công sức cùng với kết quả.
- Thực thi phân tách nhiệm vụ trong công cụ, và giữ dấu vết kiểm toán chống can thiệp.

## Tài liệu tham khảo và đọc thêm

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
