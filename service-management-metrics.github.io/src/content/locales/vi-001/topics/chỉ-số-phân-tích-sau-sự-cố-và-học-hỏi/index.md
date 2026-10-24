# Chỉ số phân tích sau sự cố và học hỏi

**Một bản rà soát được viết ra, lưu lại rồi bị quên thì chưa dạy ai điều gì, nên hãy đo xem các buổi rà soát có diễn ra không, có tốt không, các hành động của chúng có hoàn tất không, và các nguyên nhân cũ có thôi quay lại không, đồng thời giữ cả thực hành này không đổ lỗi để mọi người tiếp tục nói thật.**

## Tổng quan và động lực

Dịch vụ nào cũng có lúc thất bại. Điều phân biệt một đội ngày càng tốt hơn với một đội lặp lại tuần tệ nhất của mình là những gì xảy ra trong những ngày sau thất bại. Một [bản phân tích sau sự cố](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem) là một bản tường thuật bằng văn bản về một sự cố hoặc suýt sự cố: điều gì đã xảy ra, nó được phát hiện và xử lý ra sao, những điều kiện nào khiến nó có thể xảy ra, và đội sẽ thay đổi gì. ITIL gọi hoạt động này là rà soát sau sự cố, và chủ đề này dùng hai tên thay thế cho nhau. Buổi nhìn lại thường kỳ của đội là một người họ hàng gần, xem xét công việc bình thường thay vì một sự cố ngừng hoạt động.

Chủ đề này bao quát các thước đo cho bạn biết vòng học hỏi đó có hoạt động không. Nó đặt bốn câu hỏi. Các buổi rà soát đáng lẽ diễn ra có thực sự diễn ra không? Chúng có đủ tốt để tìm ra điều gì thật không? Các hành động chúng tạo ra có được hoàn tất không? Và cùng một nguyên nhân có cứ quay lại không? Một câu hỏi thứ năm chạy bên dưới những câu khác: mọi người có cảm thấy đủ an toàn để mô tả điều thực sự đã xảy ra không?

Chủ đề nằm giữa hai người láng giềng và tránh lặp lại họ. Chỉ số sự cố lớn (xem chủ đề 3.4, Chỉ số sự cố lớn) đo tính kịp thời của buổi rà soát và việc theo đuổi hành động của nó đến cùng cho các sự cố lớn đã tuyên bố, và là nhà của hai thước đo đó trong bối cảnh hẹp ấy. Chỉ số quản lý vấn đề (xem chủ đề 4.1, Chỉ số quản lý vấn đề) sở hữu hồ sơ vấn đề, lỗi đã biết và thời gian đến bản sửa vĩnh viễn. Chủ đề này mở rộng cái nhìn ra mọi mức nghiêm trọng của sự cố, ra các suýt sự cố và ra các buổi nhìn lại của đội, và nó sở hữu chất lượng của chính việc học: độ phủ, độ sâu, việc đóng hành động trên mọi nguồn, sự tái diễn của các nguyên nhân, và các tín hiệu không đổ lỗi giữ cho dữ liệu trung thực.

### Các thuật ngữ dùng trong chủ đề này

- **Phân tích sau sự cố hay rà soát sau sự cố:** một cuộc xem xét có cấu trúc, không đổ lỗi, về một sự cố sau khi dịch vụ được khôi phục, kết thúc bằng một bản ghi bằng văn bản.
- **Suýt sự cố (near miss):** một sự kiện có thể đã gây ra sự cố hay tác hại nhưng không xảy ra, ví dụ một lần triển khai thất bại được bắt trong môi trường kiểm thử hoặc một cảnh báo kêu vài phút trước khi người dùng nhận ra.
- **Hạng mục hành động:** một thay đổi cụ thể với một đội sở hữu có tên, một hạn chót và một cách để biết khi nào nó xong.
- **Yếu tố đóng góp:** một điều kiện khiến sự cố có thể xảy ra hoặc tệ hơn. Hầu hết sự cố có nhiều yếu tố. Một "nguyên nhân gốc" duy nhất thường là một sự đơn giản hóa, và [phân tích nguyên nhân gốc](https://en.wikipedia.org/wiki/Root_cause_analysis) được coi tốt nhất là việc tìm kiếm các điều kiện, không phải tìm một thủ phạm.
- **Lớp nguyên nhân:** một nhãn ổn định từ một danh sách ngắn đã thống nhất (ví dụ "giới hạn năng lực", "trôi cấu hình", "thiếu giám sát", "quyền sở hữu không rõ") dùng để phát hiện tái diễn. Nó mô tả một điều kiện của hệ thống, không bao giờ là một người.
- **Không đổ lỗi (blameless):** một phong cách rà soát hỏi hệ thống đã cho phép một người hợp lý hành động như họ đã làm bằng cách nào, và không hỏi nên phạt ai. Nó là một thực hành, và gắn với ý niệm [văn hóa công bằng](https://en.wikipedia.org/wiki/Just_culture), trong đó các sai lầm thành thật được coi là học hỏi còn các hành vi liều lĩnh vẫn được xử lý riêng.
- **Information Technology Infrastructure Library (ITIL):** khung được dùng rộng rãi cho quản lý dịch vụ CNTT (ITSM). Chủ đề này nói đến các thực hành như mô tả trong ITIL 4 (2019), và cuốn sách nói chung được tính đến tháng 10 năm 2026. Xem [ITIL](https://en.wikipedia.org/wiki/ITIL).

### Góc nhìn linh hoạt và ITIL khác nhau ra sao

ITIL đóng góp cấu trúc. Trong ITIL 4, quản lý sự cố khôi phục dịch vụ, quản lý vấn đề giảm khả năng và tác động của sự cố bằng cách tìm và quản lý nguyên nhân, và cải tiến liên tục biến điều học được thành thay đổi được tài trợ. Buổi rà soát là bản lề giữa hai cái đầu và cái thứ ba. ITIL có xu hướng hỏi buổi rà soát có được tổ chức không, một hồ sơ vấn đề có được mở nơi cần không, và cải tiến có được đăng ký không.

Các truyền thống linh hoạt và [kỹ thuật độ tin cậy của trang (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) đóng góp thói quen. Các buổi rà soát không đổ lỗi, ngắn, được viết cho người đọc ngoài đội, và chia sẻ rộng. Buổi nhìn lại thường kỳ của đội, một thói quen cải tiến liên tục, hỏi cần thay đổi gì tiếp theo, và sự ưa chuộng [linh hoạt](https://en.wikipedia.org/wiki/Agile_software_development) đối với điều chỉnh nhỏ, thường xuyên thay thế chương trình cải tiến lớn duy nhất. Cuốn *Site Reliability Engineering* của Google dành một chương cho văn hóa phân tích sau sự cố và lập luận rằng một quy trình rà soát chỉ tốt bằng văn hóa quanh nó.

Dùng cùng nhau, hai góc nhìn mạnh. ITIL cho bạn quy tắc độ phủ và một nơi để hành động sống. Các thói quen linh hoạt và SRE cho bạn sự trung thực và tốc độ. Được đo cùng nhau, chúng cho thấy vòng lặp có đang khép lại không.

## Nguyên tắc chính

- **Học hỏi là sản phẩm, không phải tài liệu.** Một buổi rà soát thành công khi có điều gì đó thay đổi trong hệ thống, quy trình hoặc hiểu biết chung. Hãy đếm sự thay đổi, không phải giấy tờ.
- **Không đổ lỗi là điều kiện tiên quyết cho dữ liệu tốt.** Nếu mọi người sợ bị đổ lỗi, dòng thời gian sẽ mỏng, các yếu tố đóng góp sẽ gọn gàng giả tạo, và cùng sự cố sẽ quay lại. Hãy bảo vệ sự thẳng thắn trước khi đo bất cứ điều gì khác.
- **Đo việc theo đuổi đến cùng và tái diễn, không phải khối lượng.** Số buổi rà soát nói ít. Tỷ lệ hành động đã xong và tỷ lệ nguyên nhân ở lại biến mất nói rất nhiều.
- **Giữ các chỉ số ở cấp đội và hệ thống.** Một buổi rà soát nói về các điều kiện. Không bao giờ đếm buổi rà soát, hành động hay lỗi theo từng người, và không bao giờ dùng những con số này trong các cuộc trao đổi về hiệu suất.
- **Điều chỉnh quy mô buổi rà soát cho vừa.** Không phải sự kiện nào cũng xứng đáng một tài liệu dài. Hãy đặt kích hoạt theo tác động và giá trị học hỏi, và để một sự kiện nhỏ có một buổi rà soát ngắn.
- **Để hành động cạnh tranh trung thực.** Một hạng mục hành động là công việc. Nó thuộc cùng tồn đọng với công việc khác, được xếp hạng so với chúng, và có thể bị từ chối với lý do được ghi lại.
- **Hãy đọc các bản rà soát.** Con số xác định vị trí vấn đề. Một người đọc một mẫu cho bạn biết các bản rà soát có tốt không.

## Định nghĩa chỉ số

Các chỉ số dưới đây mô tả vòng học hỏi cho một dịch vụ hoặc một nhóm đội. Mỗi chỉ số nêu cái gì được đếm, đồng hồ bắt đầu và dừng ở đâu, và cái gì bị loại trừ. Các thước đo thời gian nên được cho thấy dưới dạng trung vị và một bách phân vị cao (ví dụ thứ 85) cùng tuổi của hạng mục đang mở cũ nhất, không phải trung bình (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ rà soát | Tỷ lệ các sự kiện đủ điều kiện nhận được một buổi rà soát hoàn tất | Số sự kiện đủ điều kiện có một bản rà soát được công bố trong cửa sổ đã thống nhất / số sự kiện đủ điều kiện đóng trong kỳ. Sự kiện đủ điều kiện là những sự kiện thỏa các kích hoạt bằng văn bản. Sự kiện còn trong cửa sổ mà vẫn mở lúc cuối kỳ bị loại trừ. | phần trăm | Bản ghi sự cố của công cụ ITSM ghép với kho lưu bản rà soát | Quản lý sự cố; quản lý vấn đề | Buổi nhìn lại thường kỳ của đội; thỏa thuận làm việc của đội | Hằng tháng |
| Điểm chất lượng rà soát | Một bản rà soát đã công bố có đạt một tiêu chuẩn ngắn bằng văn bản không | Số bản rà soát trong một mẫu đạt ít nhất [số lượng đã thống nhất] mục của danh sách kiểm tra / số bản rà soát trong mẫu. Mẫu là một số cố định bản rà soát chọn ngẫu nhiên mỗi quý, được chấm bởi người ngoài đội sở hữu. | phần trăm | Mẫu hằng quý của kho lưu bản rà soát với một phiếu chấm điểm | Cải tiến liên tục; quản lý vấn đề | Định nghĩa hoàn thành cho một buổi rà soát | Hằng quý |
| Tỷ lệ đóng hành động | Tỷ lệ hành động rà soát hoàn tất đúng hạn | Số hành động hoàn tất hoặc chính thức từ chối (kèm lý do) đúng hạn / số hành động đến hạn trong kỳ. Đồng hồ bắt đầu khi bản rà soát được công bố và dừng khi đội sở hữu đánh dấu hành động xong và một người rà soát xác nhận. Hành động đóng là "sẽ không làm" được đếm riêng và báo cáo. | phần trăm | Tồn đọng của đội hoặc sổ đăng ký cải tiến ITSM, liên kết với bản rà soát | Cải tiến liên tục; quản lý vấn đề | Tồn đọng của đội; hành động cải tiến | Hằng tháng |
| Tuổi hành động đang mở | Tuổi của các hành động rà soát vẫn đang mở | Với mỗi hành động đang mở, hôm nay trừ ngày công bố bản rà soát của nó. Báo cáo trung vị, bách phân vị thứ 85 và cái cũ nhất. | ngày | Tồn đọng của đội hoặc sổ đăng ký cải tiến | Cải tiến liên tục | Tuổi hạng mục công việc; công việc đang làm dở bị già đi | Hằng tháng |
| Tỷ lệ tái diễn nguyên nhân | Tỷ lệ sự kiện có lớp nguyên nhân khớp với một sự kiện trước cho cùng dịch vụ | Số sự kiện trong kỳ có lớp nguyên nhân chính khớp với một bản rà soát đã đóng trong mười hai tháng trước cho cùng dịch vụ / số sự kiện có lớp nguyên nhân được ghi trong kỳ. Sự kiện không có lớp nguyên nhân được ghi bị loại trừ và đếm riêng. | phần trăm | Trường lớp nguyên nhân của kho bản rà soát ghép với bản ghi sự cố | Quản lý vấn đề; quản lý sự cố | Phân tích lỗi lọt ra ngoài; chủ đề của buổi nhìn lại | Hằng quý |
| Tỷ lệ báo cáo suýt sự cố | Khối lượng suýt sự cố và tín hiệu yếu mà mọi người chọn báo cáo | Số suýt sự cố ghi lại trong kỳ / số dịch vụ đang hoạt động, cho thấy dưới dạng xu hướng theo dịch vụ và không bao giờ theo người. Tỷ lệ được kỳ vọng tăng sớm trong một chương trình lành mạnh rồi ổn định. | số đếm mỗi dịch vụ | Nhật ký suýt sự cố, hoặc một trường gắn thẻ trong trình theo dõi vấn đề | Quản lý sự cố; quản lý rủi ro | Kiểm tra sức khỏe đội; bảng trở ngại | Hằng tháng |
| Tầm lan tỏa học hỏi | Một bản rà soát đi xa đến đâu ngoài đội đã viết nó | Số bản rà soát được trình bày hoặc thảo luận ngoài đội sở hữu (một diễn đàn chung, một buổi liên đội, hoặc một lần đọc có ghi lại của đội phụ thuộc) trong vòng [số ngày đã thống nhất] sau khi công bố / số bản rà soát công bố trong kỳ | phần trăm | Bản ghi diễn đàn hoặc cuộc họp và kho lưu bản rà soát | Cải tiến liên tục; quản lý tri thức | Rà soát của các bên liên quan; cộng đồng thực hành | Hằng quý |
| Mức chuyển tiếp hành động nhìn lại | Tỷ lệ hành động nhìn lại của đội đã xong trước buổi nhìn lại kế tiếp | Số hành động nhìn lại hoàn tất trước buổi nhìn lại kế tiếp / số hành động nhìn lại được thống nhất ở buổi trước. Hành động cố ý bỏ kèm lý do bị gỡ khỏi cả hai số đếm. | phần trăm | Ghi chú hoặc bảng nhìn lại, giữ trong tồn đọng của đội | Cải tiến liên tục | Buổi nhìn lại thường kỳ của đội | Mỗi kỳ rà soát, xem lại hằng quý |
| Nhịp thăm dò an toàn để nói | Mọi người có tin rằng họ có thể mô tả sai lầm mà không bị đổ lỗi không | Tỷ lệ câu trả lời đạt hoặc trên [mức đã thống nhất] trong một bộ câu hỏi ngắn ẩn danh (ví dụ "Tôi có thể mô tả một sai lầm trong buổi rà soát mà không sợ bị đổ lỗi") / số câu trả lời nhận được. Nhịp thăm dò chỉ được báo cáo cho các nhóm đủ lớn để bảo vệ tính ẩn danh. | phần trăm | Khảo sát nhanh ẩn danh | Cải tiến liên tục; thay đổi tổ chức | Kiểm tra sức khỏe đội; kiểm tra an toàn tâm lý | Hằng quý |

Một bản rà soát được "công bố" khi nó hiển thị với người đọc dự kiến, không phải được lưu thành bản nháp. Một lớp nguyên nhân được nhóm rà soát ghi từ chính bản rà soát, từ một danh sách ngắn đã thống nhất, không bao giờ do người đóng phiếu ghi.

## Khuyến nghị

### Quyết định điều gì xứng đáng một buổi rà soát

**1. Viết các kích hoạt ra và công bố chúng.** Một quy tắc như "mọi sự cố lớn, mọi sự cố ở hai mức nghiêm trọng hàng đầu, mọi sự kiện mất dữ liệu khách hàng, và mọi suýt sự cố mà đội cho là có tính giáo dục" loại bỏ tranh cãi và làm độ phủ đo được. Không có kích hoạt bằng văn bản, các buổi rà soát theo tâm trạng và khối lượng công việc, và con số độ phủ không có nghĩa gì.

**2. Điều chỉnh buổi rà soát theo sự kiện.** Một sự kiện nhỏ có thể có một bản rà soát nửa trang viết trong ba mươi phút, trong khi một sự cố lớn có thể xứng đáng một dòng thời gian đầy đủ và một buổi có người điều phối. Một đường nhẹ giữ độ phủ cao mà không biến thực hành thành gánh nặng.

### Đánh giá chất lượng bằng cách đọc

**3. Lấy mẫu và đọc các bản rà soát mỗi quý.** Chọn một mẫu ngẫu nhiên nhỏ, và nhờ một người ngoài đội sở hữu đọc từng bản theo một danh sách kiểm tra ngắn. Các mục hữu ích gồm một dòng thời gian cho thấy các quyết định và thông tin sẵn có khi đưa ra chúng, nhiều hơn một yếu tố đóng góp, mô tả điều đã diễn ra tốt, các hành động có người sở hữu và ngày, và ngôn ngữ mô tả hệ thống chứ không phải cá nhân. Hãy báo cáo tỷ lệ đạt tiêu chuẩn, và đưa các phát hiện trở lại cho người viết như huấn luyện.

**4. Dạy kỹ năng rà soát.** [Thiên kiến nhận thức muộn](https://en.wikipedia.org/wiki/Hindsight_bias) khiến các sự kiện trông hiển nhiên sau khi xảy ra và đẩy tác giả về phía "ai đó lẽ ra phải nhận ra". Hãy yêu cầu người điều phối dựng lại điều mọi người biết ở mỗi khoảnh khắc, và dùng [năm câu hỏi vì sao](https://en.wikipedia.org/wiki/Five_whys) như một gợi ý cho các câu hỏi, không phải công thức cho một câu trả lời duy nhất.

### Làm cho hành động hoàn tất

**5. Đặt hành động vào tồn đọng thật.** Một hành động chỉ sống trong tài liệu rà soát thì vô hình với việc lập kế hoạch. Hãy tạo một hạng mục công việc trong trình theo dõi của đội sở hữu, liên kết nó với bản rà soát, và để nó cạnh tranh năng lực như mọi công việc khác. Báo cáo việc đóng theo đội và theo dịch vụ để một hành động bị chặn trở nên hiển thị với những người có thể gỡ chặn.

**6. Cho phép "sẽ không làm" trung thực, và ghi lý do.** Một số hành động hóa ra quá tốn kém hoặc không còn liên quan. Đóng chúng kèm lý do nêu rõ lành mạnh hơn để chúng mở cả năm hoặc đánh dấu xong mà không làm. Hãy báo cáo tỷ lệ bị từ chối, vì một tỷ lệ rất cao gợi ý quy trình rà soát đang đề xuất những hành động không ai tài trợ.

**7. Theo dõi tuổi của hành động đang mở, cũng như tỷ lệ đóng.** Bách phân vị thứ 85 của tuổi hành động đang mở và hành động đang mở cũ nhất cho thấy cái gì đang kẹt. Hãy rà soát những cái cũ nhất ở cuộc họp rà soát độ tin cậy của dịch vụ.

### Canh chừng sự lặp lại

**8. Giữ một danh sách ngắn các lớp nguyên nhân, và gắn thẻ mọi bản rà soát.** Một danh sách tám đến mười lăm lớp là đủ. Hãy rà soát danh sách khi hơn một tỷ lệ nhỏ sự kiện rơi vào lớp "khác". Gắn thẻ cho phép bạn trả lời câu hỏi "chúng ta đã thấy cái này chưa?" bằng dữ liệu, và nó nuôi quản lý vấn đề bằng các mẫu hình mà không bản rà soát đơn lẻ nào cho thấy (xem chủ đề 4.1, Chỉ số quản lý vấn đề, và chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết).

**9. Coi tái diễn là tín hiệu về hành động, không phải về con người.** Khi một lớp nguyên nhân quay lại, hãy hỏi các hành động trước đã xong chưa, chúng có phải là các hành động đúng không, và lớp đó có quá rộng không. Tái diễn sau khi mọi hành động đã đóng nghĩa là các hành động không hiệu quả, một tin hữu ích.

### Bảo vệ sự trung thực

**10. Giữ các buổi rà soát không đổ lỗi và làm cho điều đó hiển thị.** Hãy nêu trong mẫu rằng buổi rà soát mô tả các điều kiện và quyết định và không quy lỗi, và để lãnh đạo cảm ơn tác giả vì sự thẳng thắn. [An toàn tâm lý](https://en.wikipedia.org/wiki/Psychological_safety), trong nghiên cứu của Amy Edmondson về các đội làm việc, là niềm tin chung rằng đội an toàn cho việc chấp nhận rủi ro giữa người với người (xem chủ đề 9.2, Chỉ số hài lòng và sức khỏe tinh thần).

**11. Thưởng cho báo cáo suýt sự cố, và ban đầu hãy đọc số đếm tăng như tin tốt.** Một đội bắt đầu báo cáo suýt sự cố sẽ thấy số đếm leo lên, vì các sự kiện vẫn luôn xảy ra. Hãy nói điều đó từ trước, theo dõi tỷ lệ suýt sự cố tạo ra một thay đổi, và công bố các câu chuyện khi đội đồng ý.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ rà soát | Thu hẹp các kích hoạt; hạ mức nghiêm trọng để sự kiện rơi ngoài chúng; nộp một "bản rà soát" một dòng cho đủ thủ tục | Điểm chất lượng rà soát; so sánh số sự cố theo mức nghiêm trọng với tác động do khách hàng báo cáo; kiểm toán các lần hạ mức |
| Điểm chất lượng rà soát | Viết theo danh sách kiểm tra bằng văn mẫu; chấm bởi chính đội sở hữu; một mẫu có thể đoán trước | Người chấm bên ngoài; mẫu ngẫu nhiên; đọc to hai bản rà soát mỗi quý; theo dõi liệu hành động từ các bản điểm cao có hoàn tất không |
| Tỷ lệ đóng hành động | Đặt hạn chót rất xa; chia hành động thành các mảnh tầm thường; đóng hành động mà không xác minh; tuyên bố "sẽ không làm" để dọn danh sách | Tuổi hành động đang mở; tỷ lệ bị từ chối kèm lý do; người rà soát xác nhận thay đổi hiệu quả; tỷ lệ tái diễn nguyên nhân |
| Tuổi hành động đang mở | Đóng rồi mở lại hoặc tạo lại một hành động để đặt lại tuổi; chuyển hành động sang một danh sách "ý tưởng" riêng | Liên kết hành động mới với bản rà soát gốc và giữ ngày đầu tiên; số đếm hành động chuyển sang ý tưởng |
| Tỷ lệ tái diễn nguyên nhân | Ghi các lớp nguyên nhân mơ hồ hoặc luôn đổi để không gì khớp; dùng lớp "khác" rộng; liên kết một lần lặp lại với lớp khác | Tỷ lệ sự kiện trong "khác"; đọc lại định kỳ các bản rà soát theo lớp; rà soát chính danh sách lớp |
| Tỷ lệ báo cáo suýt sự cố | Yêu cầu báo cáo để đạt một con số; ghi các sự kiện tầm thường; hoặc theo hướng ngược lại, đọc con số như một thất bại và dập tắt báo cáo | Tỷ lệ suýt sự cố dẫn đến thay đổi; không đặt mục tiêu cho số đếm; phản hồi từ nhịp thăm dò an toàn để nói |
| Tầm lan tỏa học hỏi | Thêm tên vào danh sách phân phối; trình bày ở các buổi ít người dự; tính một liên kết là một lần đọc | Danh sách tham dự hoặc ghi chú thảo luận thực; hỏi các đội phụ thuộc họ đã thay đổi gì sau bản rà soát gần nhất |
| Mức chuyển tiếp hành động nhìn lại | Chỉ đồng ý các hành động tầm thường dễ xong; bỏ buổi nhìn lại; đánh dấu hạng mục hoàn tất | Tác động của các hành động theo đánh giá của đội; tỷ lệ buổi nhìn lại được tổ chức; cùng một chủ đề có xuất hiện nhiều tuần không |
| Nhịp thăm dò an toàn để nói | Gây áp lực người trả lời; chỉ khảo sát người tự tin; báo cáo trung bình che giấu một nhóm điểm thấp | Tỷ lệ phản hồi và cơ cấu người trả lời; kích thước nhóm tối thiểu; đọc đầy đủ các bình luận mở; ngôn ngữ rà soát có thay đổi không |

Một kết quả đọc lành mạnh cho thấy các buổi rà soát cho những sự kiện quan trọng, một tiêu chuẩn chất lượng mà phần lớn đạt, các hành động hoàn tất hoặc bị từ chối trung thực, một số ít hành động cũ mà lãnh đạo gọi tên được, các lớp nguyên nhân giảm tần suất sau khi được xử lý, và số đếm suýt sự cố đã tăng rồi ổn định. Nhịp thăm dò giữ ổn định hoặc cải thiện khi một sự cố khó xảy ra. Một mẫu hình quá sạch tự nó là dấu hiệu để đọc một mẫu.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Rà soát mọi sự cố | Độ phủ đầy đủ; không tranh cãi về kích hoạt | Nặng nề; các buổi rà soát trở nên nông; các đội dần ghét quy trình |
| Rà soát theo kích hoạt bằng văn bản | Tập trung công sức vào tác động và giá trị học hỏi | Kích hoạt cần được bảo trì; các sự kiện ranh giới lọt qua |
| Gắn thẻ lớp nguyên nhân | Tìm ra mẫu hình qua các buổi rà soát | Các lớp là một sự đơn giản hóa; nguyên nhân thật thường là vài thứ cùng lúc |
| Thăm dò ẩn danh về an toàn | Tín hiệu trung thực cho một câu hỏi nhạy cảm | Thô; đội nhỏ có thể bị nhận ra; mệt mỏi vì khảo sát |

Câu trả lời dạng văn xuôi là giữ vòng lặp ngắn và số lượng con số ít: kích hoạt bằng văn bản, một mẫu chất lượng nhỏ, một trình theo dõi hành động và một danh sách lớp nguyên nhân, thêm nhịp thăm dò an toàn khi đội đã tin phần còn lại. Không thước đo nào ở đây chứng minh việc học đã xảy ra. Cùng nhau chúng cho thấy các điều kiện cho nó có hiện diện không.

## Câu hỏi để thảo luận với đội nhóm

**1. Trong năm sự cố gần nhất của chúng ta, cái nào nhận được một buổi rà soát, và có ai thay đổi gì nhờ nó không?**
Bắt đầu từ danh sách sự cố, không phải từ thư mục rà soát, để các buổi rà soát còn thiếu trở nên hiển thị. Với mỗi bản rà soát, hỏi điều gì khác đi trong hệ thống hay quy trình hôm nay. Nếu câu trả lời là "không gì cả", hỏi vì sao buổi rà soát được tổ chức và ai đã đọc nó. Người điều phối nên ghi lại các câu trả lời mà không phán xét, vì chúng cho thấy thực hành tạo ra thay đổi hay giấy tờ.

**2. Điều gì sẽ khiến ai đó khó nói thật hơn trong một buổi rà soát ở đây?**
Hãy xin các ví dụ cụ thể: phản ứng của một quản lý, một đợt đánh giá hiệu suất, một leo thang của khách hàng, giọng điệu trong một email. Mời mọi người trước tiên viết câu trả lời ẩn danh. Tìm các điều kiện có thể thay đổi, như ai tham dự, ai đọc, và lãnh đạo nói gì thành tiếng. Đây là cuộc trò chuyện bảo vệ mọi con số khác trong chủ đề.

**3. Hạng mục hành động nào đã mở lâu nhất, và điều gì đang ngăn chúng?**
Hiển thị năm cái cũ nhất. Với mỗi cái, hỏi hành động còn đúng không, nó có người sở hữu có năng lực không, và nó nên được làm, dời lịch hay bị từ chối. Giữ trọng tâm vào hệ thống công việc chứ không phải người sở hữu. Thống nhất một quyết định cho mỗi cái trước khi buổi họp kết thúc.

**4. Khi nào cùng một loại vấn đề đã quay lại, và điều đó nói gì về bản sửa trước?**
Dùng các thẻ lớp nguyên nhân để tìm một lần lặp lại, và đọc bản rà soát trước cùng các hành động của nó. Hỏi các hành động đã xong chưa, chúng có giải quyết các yếu tố đóng góp không, và lớp có được vẽ quá rộng không. Mục tiêu là một hành động tốt hơn, không phải một lời giải thích.

**5. Chúng ta có báo cáo suýt sự cố không, và điều gì xảy ra khi có người báo?**
Xin một ví dụ gần đây và lần theo những gì tiếp diễn. Nếu không có gì tiếp diễn, hỏi vì sao mọi người sẽ báo lần nữa. Nếu số đếm thấp, hỏi mọi người sợ điều gì. Người điều phối nên giải thích rằng số đếm tăng là điều được kỳ vọng lúc đầu, và thống nhất đội sẽ phản hồi báo cáo kế tiếp ra sao để việc báo cáo đáng làm.

**6. Làm sao chúng ta biết một buổi rà soát tốt nếu không được nhìn vào con số nào?**
Câu này yêu cầu đội mô tả chất lượng bằng lời của chính họ. Các câu trả lời thường gặp gồm "có người ngoài đội học được điều gì đó", "bản sửa đứng vững" và "tác giả không sợ". Biến các câu trả lời thành danh sách kiểm tra cho mẫu hằng quý, và xem lại sau hai quý.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối viết nhiều bản rà soát và gánh hầu hết các hành động, nên họ cảm nhận chi phí của một quy trình vụng về trước tiên. Họ được lợi từ mẫu ngắn, quy tắc kích hoạt rõ ràng, và liên kết hiển thị giữa một hành động và một hạng mục tồn đọng của đội. Buổi nhìn lại thường kỳ của đội xứng đáng cùng kỷ luật theo đuổi đến cùng như một buổi rà soát sự cố, và một đội hoàn tất các hành động nhìn lại của mình đang thực hành cùng thói quen ở quy mô nhỏ hơn. Hãy cảnh giác để hành động không bị công việc tính năng ép ra ngoài, và đưa sự đánh đổi đó cho chủ sản phẩm một cách công khai (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối).

### Đội dịch vụ và vận hành

Các đội vận hành giữ bằng chứng (dòng thời gian, cảnh báo, nhật ký trò chuyện) và ở vị trí tốt nhất để gắn thẻ lớp nguyên nhân một cách nhất quán và để nhận ra một lần lặp lại trước khi nó thành một sự cố ngừng hoạt động. Họ cần thời gian được bảo vệ để viết, vì các bản rà soát viết cuối một ca dài thường mỏng. Hãy liên kết mỗi bản rà soát với mọi hồ sơ vấn đề mà nó nuôi (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

### Lãnh đạo và quản trị

Lãnh đạo định giọng điệu cho mọi buổi rà soát bằng điều họ hỏi sau đó. "Ai đã làm việc này?" chấm dứt các buổi rà soát trung thực, còn "chúng ta đã học được gì, và đang thay đổi gì?" mời gọi chúng. Các cơ quan quản trị nên chờ đợi độ phủ, chất lượng, tuổi hành động và tái diễn trong buổi rà soát độ tin cậy, tài trợ các hành động cần đầu tư, và không bao giờ so sánh các đội theo số sự cố hay buổi rà soát của họ.

### Khách hàng và người dùng

Khách hàng hiếm khi thấy bản rà soát, nhưng họ cảm nhận kết quả của nó: cùng lỗi ngừng quay lại, và một lời tường thuật trung thực khi nó quay lại. Nơi hợp đồng cho phép, hãy công bố một bản tóm tắt bằng ngôn ngữ giản dị sau một sự cố đáng kể (xem chủ đề 3.4, Chỉ số sự cố lớn). Liên hệ lặp lại về cùng một vấn đề là tín hiệu phía khách hàng rằng việc học chưa đến nơi (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một cửa hàng hướng tới khách hàng, một dịch vụ thanh toán và một nền tảng kho hàng nội bộ. Năm đội sản phẩm xây và vận hành các dịch vụ này, và một nhóm quản lý dịch vụ nhỏ giữ quy trình sự cố và vấn đề. Các con số trong ví dụ này chỉ mang tính minh họa.

Trong một quý, nhà bán lẻ có 41 sự cố ở hai mức nghiêm trọng hàng đầu. Các kích hoạt bằng văn bản khiến tất cả đủ điều kiện cho một buổi rà soát, và 36 bản rà soát được công bố trong vòng mười ngày làm việc, nên độ phủ rà soát khoảng 88 phần trăm. Ban lãnh đạo hài lòng. Nhóm quản lý dịch vụ chọn một mẫu ngẫu nhiên tám bản rà soát, nhờ một đội từ lĩnh vực sản phẩm khác chấm điểm, và thấy chỉ ba bản đạt tiêu chuẩn đã thống nhất. Khoảng trống phổ biến là dòng thời gian liệt kê điều đã xảy ra nhưng không phải điều mọi người biết khi họ đưa ra từng quyết định, và phần yếu tố đóng góp chỉ nêu một nguyên nhân.

Cùng mẫu đó cho thấy trong 74 hành động đến hạn trong quý, 51 được hoàn tất đúng hạn, tỷ lệ đóng khoảng 69 phần trăm. Hành động đang mở cũ nhất, 210 ngày tuổi, là một ngưỡng cảnh báo năng lực trên cơ sở dữ liệu thanh toán, bị hoãn sáu tuần liên tiếp. Gắn thẻ nguyên nhân cho thấy "giới hạn năng lực" trong 9 trong 36 bản rà soát, 4 trong số đó cho dịch vụ thanh toán. Nhịp thăm dò ẩn danh, được 58 trong 70 người được mời trả lời, thấp hơn ở nhóm trực ca, nơi vài bình luận nói các quản lý cấp cao đặt những câu hỏi gay gắt về những cá nhân có tên.

Đội đưa ra ba quyết định. Thứ nhất, họ tổ chức một buổi ngắn với các quản lý cấp cao dự các buổi rà soát và thống nhất một quy tắc: các câu hỏi trong phòng là về điều kiện và quyết định, và mọi theo dõi về một người đi qua trưởng nhóm. Thứ hai, họ đặt hành động năng lực cũ nhất lên đầu vòng lập kế hoạch kế tiếp của đội thanh toán, được chủ sản phẩm xếp hạng so với công việc tính năng, và báo cáo kết quả ở buổi rà soát độ tin cậy. Thứ ba, họ thêm hai mục danh sách kiểm tra vào mẫu rà soát (điều mọi người biết ở mỗi quyết định, và ít nhất hai yếu tố đóng góp) và tổ chức một buổi huấn luyện cho người viết dùng một bản rà soát đã ẩn danh.

Rủi ro lợi dụng xuất hiện ở quý sau. Độ phủ rà soát tăng lên 97 phần trăm, nhưng tỷ lệ các bản rà soát dưới 300 từ tăng gấp đôi, và vài đội đã hạ sự cố từ mức nghiêm trọng hai xuống ba, ngay dưới kích hoạt. Mẫu chất lượng và một cuộc kiểm toán các thay đổi mức nghiêm trọng bắt được điều này. Nhóm hỏi vì sao việc hạ mức xảy ra, biết rằng các đội cảm thấy một buổi rà soát mang tính trừng phạt, và nới kỳ vọng về độ dài cho các sự kiện nhỏ trong khi giữ kích hoạt mức nghiêm trọng hai.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Các buổi rà soát hiệu quả nhất như một thói quen thường kỳ với các bên liên quan, nơi hành động đi vào cùng tồn đọng với công việc khác. Điều cần lưu ý là một mục tiêu về số buổi rà soát tạo ra các bản rà soát viết theo mẫu mà không có học hỏi.

### AI

AI có thể soạn dòng thời gian và bản tóm tắt cho một buổi rà soát, điều nâng độ phủ và tốc độ. Hãy ghép độ phủ rà soát với một kiểm tra chất lượng do con người làm và với tỷ lệ tái diễn nguyên nhân, và gắn nhãn các phần do AI soạn. Điều cần lưu ý là AI có thể làm mượt sự bất định hoặc quy lỗi trong cách diễn đạt, nên một con người sở hữu bản tường thuật cuối cùng không đổ lỗi.

### Tự động hóa

Hãy tự động hóa việc ghi dòng thời gian và nhắc hành động, và đo bao nhiêu lời nhắc dẫn đến việc đóng. Điều cần lưu ý là việc nhắc tự động mà không có sự đồng ý của người sở hữu trở thành nhiễu.

### Phân tích

Hãy theo dõi tuổi hành động và tái diễn trên một cửa sổ dài, kèm số đếm. Quyết định được cung cấp thông tin là việc học nào đang thực sự thay đổi hệ thống. Điều cần lưu ý là tỷ lệ tái diễn chậm và cỡ mẫu nhỏ, nên hãy tránh kết luận ngắn hạn.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một đội nhỏ có thể học nhanh vì ai cũng đã dự sự cố. Rủi ro là không có gì được viết ra và bài học ra đi cùng người được thuê kế tiếp. Hãy giữ một mẫu một trang, tổ chức rà soát cho bất cứ thứ gì đánh thức ai đó vào ban đêm, và chỉ theo dõi việc đóng hành động và nguyên nhân lặp lại. Bảo vệ sự thẳng thắn bằng cách để những người sáng lập đọc các bản rà soát mà không bình luận về cá nhân.

**Doanh nghiệp nhỏ.** Người đã sửa vấn đề thường là người duy nhất hiểu nó. Hãy dùng một mẫu ngắn và rà soát hành động đang mở cũ nhất hằng tháng.

**Doanh nghiệp lớn.** Hãy chuẩn hóa mẫu, kích hoạt và danh sách lớp nguyên nhân, và để các đội tùy chỉnh độ sâu. Cung cấp một nơi có thể tìm kiếm cho các bản rà soát, một diễn đàn liên đội và một người chấm bên ngoài. Hãy đề phòng bảng xếp hạng các đội theo số sự cố hay buổi rà soát, vì chúng trừng phạt sự minh bạch.

**Chính phủ và khu vực công.** Các buổi rà soát có thể đối mặt với nghĩa vụ theo luật, kiểm toán hoặc yêu cầu tự do thông tin, khiến tác giả thận trọng. Hãy tách buổi rà soát học hỏi khỏi mọi báo cáo chính thức cho cơ quan giám sát, và ghi các hành động bị chặn kèm sự phụ thuộc của chúng (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của thực hành này chủ yếu là thời gian. Tác giả dành nhiều giờ cho mỗi bản rà soát và nhiều người dành một giờ trong một buổi họp. Một mẫu chất lượng hằng quý tốn vài giờ của một người đọc bên ngoài. Gắn thẻ nguyên nhân và theo dõi hành động cần một chút công cụ, có thể là một bảng tính và một trường trong các công cụ phiếu và tồn đọng hiện có. Có một chi phí lớn hơn, ít thấy hơn ở hành vi của lãnh đạo, vì chương trình thất bại nếu lãnh đạo phản ứng tệ với các bản rà soát thẳng thắn.

Lợi tức đến từ các nguyên nhân ngừng tái diễn và từ các sự cố ngắn hơn vì đội đã thấy thứ tương tự. Ít sự cố lặp lại giải phóng năng lực kỹ thuật và vận hành, giảm leo thang, và hạ chi phí gián đoạn cho khách hàng. Một thư viện chung các bản rà soát rút ngắn đường cong học của nhân viên mới và giảm sự phụ thuộc vào một vài người có kinh nghiệm. Đừng trích dẫn một tỷ lệ phần trăm từ tổ chức khác. Hãy đo đường cơ sở của riêng bạn cho tái diễn nguyên nhân, tuổi hành động đang mở và liên hệ lặp lại trước khi bắt đầu, và so sánh sau hai hoặc ba quý.

Giới hạn trung thực là việc học khó quy gán: sự giảm tái diễn có thể đến từ một buổi rà soát tốt hơn, một thay đổi kiến trúc không liên quan, hoặc may mắn. Để xem cách xử lý rộng hơn, xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh.

## Phản mẫu và cạm bẫy

- **Sân khấu rà soát.** Các buổi rà soát thỏa một quy tắc và không ai đọc chúng. Thay vào đó, hãy lấy mẫu và đọc các bản rà soát, và đánh giá chúng bằng thay đổi chúng tạo ra.
- **Tìm nguyên nhân gốc như một con người.** Bản rà soát nêu một lỗi của cá nhân và dừng lại. Thay vào đó, hãy hỏi điều gì khiến lỗi dễ xảy ra, và liệt kê nhiều yếu tố đóng góp.
- **Lạm phát hành động.** Các buổi rà soát tạo ra danh sách dài mà đội không thể tài trợ. Thay vào đó, giới hạn mỗi bản rà soát ở vài hành động được xếp hạng và từ chối phần còn lại kèm lý do.
- **Hành động ngoài tồn đọng.** Chúng sống trong một tài liệu và không bao giờ được lên kế hoạch. Thay vào đó, hãy tạo hạng mục công việc trong trình theo dõi của đội sở hữu và liên kết chúng với bản rà soát.
- **Đóng mà không xác minh.** Hành động được đánh dấu xong và nguyên nhân quay lại. Thay vào đó, nhờ một người rà soát xác nhận thay đổi hiệu quả và theo dõi tái diễn của lớp nguyên nhân.
- **Dùng số đếm để so sánh các đội.** Một đội có nhiều buổi rà soát hay suýt sự cố hơn trông tệ hơn. Thay vào đó, hãy đọc số đếm cao như sự cởi mở, và so sánh mỗi đội với lịch sử của chính nó.
- **Trừng phạt người đưa tin.** Một lãnh đạo chất vấn một người sau một bản rà soát thẳng thắn. Thay vào đó, hãy thống nhất một chuẩn mực về cách lãnh đạo phản hồi, và kiểm tra nhịp thăm dò sau các sự cố khó.
- **Coi các chỉ số là bằng chứng của việc học.** Một bảng điều khiển sạch được lấy làm bằng chứng tổ chức đang học. Thay vào đó, hãy tiếp tục đọc một mẫu các bản rà soát và hỏi những người đã viết chúng.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Kích hoạt và độ phủ | Các buổi rà soát phụ thuộc vào ai rảnh và mức độ tồi tệ cảm nhận được | Một số đội tổ chức rà soát cho các sự cố nghiêm trọng | Kích hoạt bằng văn bản và mẫu chung; độ phủ được đếm theo mức nghiêm trọng | Độ phủ được theo dõi xu hướng và kiểm toán so với các lần hạ mức; đường nhẹ và đầy đủ | Kích hoạt được điều chỉnh cùng khách hàng và nhà cung cấp; rà soát chung cho các sự cố chung |
| Chất lượng và sự trung thực | Các bản rà soát nêu một người hoặc một nguyên nhân duy nhất | Một số đội viết bản rà soát không đổ lỗi | Tiêu chuẩn danh sách kiểm tra; ngôn ngữ không đổ lỗi được kỳ vọng | Mẫu hằng quý bên ngoài; nhịp thăm dò được rà soát; huấn luyện người viết | Các bản rà soát đồng viết với nhà cung cấp và người dùng; đọc giữa các đội là thường lệ |
| Hành động và tái diễn | Hành động sống trong tài liệu và hiếm khi xong | Hành động được một số đội theo dõi; việc đóng khác nhau | Hành động trong tồn đọng thật với người sở hữu, ngày và việc từ chối trung thực | Việc đóng, tuổi và tái diễn nguyên nhân được rà soát, với cải tiến được tài trợ | Hành động giữa các đội và nhà cung cấp được phối hợp; lớp nguyên nhân được sửa khi mẫu hình dịch chuyển |
| Chia sẻ và học hỏi | Bài học ở lại với đội | Các bản rà soát được đăng cho đội | Các bản rà soát có thể tìm kiếm và chia sẻ tại một diễn đàn thường kỳ | Tầm lan tỏa được đo; các đội phụ thuộc báo cáo thay đổi đã làm | Việc học chảy vào thiết kế, tiếp nhận nhân sự và hợp đồng nhà cung cấp |

## Danh sách kiểm tra

- [ ] Kích hoạt bằng văn bản nêu sự kiện nào nhận một buổi rà soát, gồm cả suýt sự cố có giá trị học hỏi cao.
- [ ] Một mẫu ngắn tồn tại, với một đường nhẹ cho các sự kiện nhỏ.
- [ ] Các buổi rà soát không đổ lỗi qua mẫu và qua hành vi của lãnh đạo.
- [ ] Mỗi hành động là một hạng mục công việc trong tồn đọng của đội sở hữu, với người sở hữu và ngày.
- [ ] Hành động có thể bị từ chối, và lý do được ghi lại và báo cáo.
- [ ] Một danh sách ngắn các lớp nguyên nhân tồn tại, và mỗi bản rà soát được gắn thẻ.
- [ ] Một người đọc bên ngoài chấm một mẫu ngẫu nhiên các bản rà soát mỗi quý.
- [ ] Các hành động đang mở cũ nhất được rà soát cùng độ tin cậy của dịch vụ.
- [ ] Tuổi hành động đang mở được báo cáo dưới dạng trung vị, một bách phân vị cao và cái cũ nhất.
- [ ] Một lộ trình suýt sự cố tồn tại, và đội biết điều gì xảy ra sau một báo cáo.
- [ ] Không chỉ số nào trong chủ đề này được báo cáo hay dùng theo từng người.
- [ ] Một nhịp thăm dò an toàn để nói chỉ chạy cho các nhóm đủ lớn để bảo vệ tính ẩn danh.

## Lời nhắc AI

**Rà soát chất lượng một bản phân tích sau sự cố nháp.**

```text
Here is a draft postmortem for [incident description] on [service]. Check it
against this standard: [paste your review checklist]. For each item, say whether
the draft meets it, quote the lines that support your judgment, and point to
language that assigns fault to a person instead of describing conditions. Do not
add facts that are not in the text. List your assumptions and anything you could
not judge from what I provided.

[paste the draft, with personal data removed]
```

**Đề xuất lớp nguyên nhân từ các bản rà soát cũ.**

```text
Below are summaries of [number] past reviews for [service or group of services].
Propose a short list of cause classes, between [minimum] and [maximum], that
describe system conditions and never people. For each class give a one-line
definition, the reviews that fit it, and reviews that are ambiguous. Do not
invent causes that are not supported by the text. List your assumptions and the
reviews you could not classify.

[paste summaries]
```

**Phân tích các hạng mục hành động đang mở để tìm mẫu hình đình trệ.**

```text
Here is an export of review actions for [team or service]: owner team, created
date, due date, status, and a one-line description. Report the median, the 85th
percentile, and the maximum age of open actions, then group the oldest actions
by likely reason for stalling (for example unclear scope, dependency on another
team, no capacity, or low value). Report patterns by team and service, never by
person. Do not guess at reasons that the data does not support. List your
assumptions and the extra fields that would help.

[paste export with personal data removed]
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề, định nghĩa và rào chắn đi kèm khớp cho một chỉ số rà soát hoặc học hỏi bạn sắp báo cáo.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số học hỏi đã sửa vẫn mang đồng hồ, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Một buổi rà soát đáng giá bằng điều nó thay đổi, nên hãy đo độ phủ, chất lượng, việc đóng hành động và tái diễn của nguyên nhân, và đọc một mẫu các bản rà soát.
- Không đổ lỗi là điều kiện tiên quyết cho dữ liệu trung thực, và lãnh đạo bảo vệ nó bằng cách họ phản hồi một bản rà soát thẳng thắn.
- Đặt hành động vào tồn đọng thật, giới hạn số lượng, cho phép từ chối trung thực, và theo dõi tuổi của những hành động cũ nhất.
- Gắn thẻ các bản rà soát bằng một danh sách ngắn lớp nguyên nhân để các nguyên nhân lặp lại trở nên hiển thị và nuôi quản lý vấn đề.
- Lúc đầu hãy đọc số đếm suýt sự cố tăng như dấu hiệu của sự cởi mở, và không bao giờ xếp hạng người hay đội theo khối lượng rà soát.
- Ghép mọi con số ở đây với một rào chắn, vì chính vòng học hỏi cũng là một mục tiêu có thể bị lợi dụng.

## Tài liệu tham khảo và đọc thêm

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
