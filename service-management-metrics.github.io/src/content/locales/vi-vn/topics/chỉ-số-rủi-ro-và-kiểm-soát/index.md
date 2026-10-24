# Chỉ số rủi ro và kiểm soát

**Công việc rủi ro là một cuộc trò chuyện liên tục về điều gì có thể sai và chúng ta đang làm gì với nó, nên hãy giữ sổ đăng ký ngắn và sống, kiểm thử các kiểm soát quan trọng, và nghi ngờ mọi con số làm cho sự bất định trông gọn gàng.**

## Tổng quan và động lực

Mọi thay đổi với một dịch vụ đều mang rủi ro, và để nguyên nó cũng vậy. [Quản lý rủi ro](https://en.wikipedia.org/wiki/Risk_management) là việc nhận diện, đánh giá và ưu tiên rủi ro, theo sau là hành động phối hợp để giảm, chấp nhận, chuyển giao hoặc tránh chúng. ITIL coi rủi ro là một sợi chỉ chạy qua mọi thực hành: hỗ trợ thay đổi quyết định một thay đổi cần xem xét kỹ đến đâu, liên tục dịch vụ lập kế hoạch cho gián đoạn, an toàn thông tin bảo vệ trước các mối đe dọa. Cách làm việc linh hoạt và DevOps giảm rủi ro theo cách khác. Thay đổi nhỏ được giao liên tục, với phản hồi nhanh và khả năng hoàn tác, làm mỗi thay đổi bớt nguy hiểm và làm vấn đề lộ ra sớm hơn.

Hai cách nhìn gặp nhau ở các chỉ số. Một đội giao liên tục vẫn cần biết các rủi ro chính của mình, ai sở hữu chúng, và các kiểm soát nó dựa vào có hoạt động không. Một chức năng rủi ro đòi phê duyệt nặng vẫn cần bằng chứng rằng các kiểm soát của nó giảm tác hại và không chỉ làm mọi người chậm lại. Chủ đề này đưa ra các thước đo cho cả hai, và nó xây trên các thực hành mô tả trong những chủ đề lân cận về an ninh và kiểm toán (xem chủ đề 8.1, Chỉ số sự cố bảo mật và lỗ hổng, và chủ đề 8.3, Chỉ số tuân thủ và kiểm toán).

Bốn thuật ngữ lặp lại.

- **Rủi ro:** một sự kiện hoặc điều kiện bất định mà nếu xảy ra sẽ ảnh hưởng đến mục tiêu. Nó có một nguyên nhân, một sự kiện và một hậu quả, và khả năng và tác động thường được ước lượng, không được biết.
- **Sổ đăng ký rủi ro:** danh sách các rủi ro đã nhận diện kèm người sở hữu, đánh giá và phản ứng. Một [sổ đăng ký rủi ro](https://en.wikipedia.org/wiki/Risk_register) là một công cụ làm việc khi nó hiện hành và được đọc, và là một hiện vật tuân thủ khi không.
- **Kiểm soát:** một hành động hoặc cơ chế giảm một rủi ro, như một rà soát, một kiểm thử tự động, một phê duyệt, một sự phân tách nhiệm vụ, hay một cảnh báo giám sát. Tập các kiểm soát một tổ chức dựa vào là hệ thống [kiểm soát nội bộ](https://en.wikipedia.org/wiki/Internal_control) của nó.
- **Chỉ báo rủi ro then chốt (KRI):** một thước đo báo hiệu sự thay đổi mức độ của một rủi ro trước khi tổn thất xảy ra. Một [chỉ báo rủi ro then chốt](https://en.wikipedia.org/wiki/Key_risk_indicator) hữu ích khi nó dẫn trước một sự kiện và khi có người hành động theo nó.

Việc lượng hóa rủi ro có những điểm yếu nổi tiếng. Một [ma trận rủi ro](https://en.wikipedia.org/wiki/Risk_matrix), vẽ khả năng theo tác động trên một lưới các ô màu, được dùng rộng rãi và bị chỉ trích rộng rãi: các đánh giá mang tính chủ quan, các rủi ro khác nhau có thể rơi vào cùng một ô vì những lý do khác nhau, và phép nhân các điểm thứ bậc không có cơ sở vững chắc. Các sự kiện hiếm, nghiêm trọng, đôi khi được mô tả qua [lý thuyết thiên nga đen](https://en.wikipedia.org/wiki/Black_swan_theory), đặc biệt khó đánh giá. Phản ứng trung thực là dùng ma trận như một công cụ hỗ trợ trò chuyện, cho thấy khoảng, và hỗ trợ nó bằng bằng chứng về kiểm soát và sự cố. Khung ba tuyến phòng thủ, tách các đội sở hữu rủi ro, các đội giám sát nó và đảm bảo độc lập, đưa ra một cấu trúc cho vai trò, và nó hoạt động tốt nhất khi tuyến đầu, các đội phân phối và vận hành, thực sự sở hữu rủi ro của mình.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng cho báo cáo rủi ro theo một cách riêng. Khi một đánh giá đỏ mang đến sự soi xét, mọi người đánh giá rủi ro là vàng. Khi đóng một rủi ro là thành công, mọi người đóng rủi ro mà không xử lý chúng (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Giữ sổ đăng ký ngắn và hiện hành.** Vài rủi ro được sở hữu tốt và được rà soát hơn hàng trăm cái không được.
- **Để tuyến đầu sở hữu rủi ro của mình.** Những người gần công việc nhất biết nó rõ nhất.
- **Kiểm thử các kiểm soát bạn dựa vào.** Một kiểm soát chưa từng được kiểm thử là một hy vọng.
- **Ưu tiên chỉ báo dẫn trước mà có người hành động theo.** Một chỉ báo không có kế hoạch phản ứng chỉ là đồ trang trí.
- **Cho thấy khoảng và bằng chứng, không phải độ chính xác giả.** Các đánh giá là ước lượng.
- **Giảm rủi ro bằng cách làm thay đổi nhỏ và có thể đảo ngược.** Phân phối liên tục với hoàn tác nhanh là một kiểm soát.
- **Nói về rủi ro không đổ lỗi.** Báo cáo trung thực là nguyên liệu thô của cả thực hành.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ hiện hành của rà soát rủi ro | Tỷ lệ rủi ro đang mở được người sở hữu rà soát trong khoảng đã thống nhất | số rủi ro được rà soát trong khoảng / số rủi ro đang mở | phần trăm | Ngày rà soát trong sổ đăng ký rủi ro | Quản lý rủi ro; cải tiến liên tục | Rủi ro được rà soát trong các cuộc trò chuyện lập kế hoạch và rà soát | Hằng tháng |
| Độ phủ người sở hữu | Tỷ lệ rủi ro đang mở có một người sở hữu hiện tại, được nêu tên, đã chấp nhận quyền sở hữu | số rủi ro có người sở hữu hiện tại được xác nhận / số rủi ro đang mở | phần trăm | Sổ đăng ký rủi ro ghép với danh bạ nhân sự | Quản lý rủi ro | Rủi ro do đội sở hữu trên tồn đọng | Hằng tháng |
| Độ phủ kiểm thử kiểm soát | Tỷ lệ kiểm soát then chốt được kiểm thử vận hành trong chu kỳ yêu cầu | số kiểm soát then chốt được kiểm thử trong chu kỳ / số kiểm soát then chốt | phần trăm | Sổ đăng ký kiểm soát và bản ghi kiểm thử | Quản lý rủi ro; quản lý an toàn thông tin | Kiểm tra tự động trong đường ống | Hằng quý |
| Tỷ lệ hiệu quả kiểm soát | Tỷ lệ kiểm soát được kiểm thử và thấy vận hành như thiết kế | số kiểm soát thấy hiệu quả / số kiểm soát được kiểm thử | phần trăm | Kết quả kiểm thử | Quản lý rủi ro; cải tiến liên tục | Kiểm thử tự động qua vì đúng lý do | Hằng quý |
| Thời gian phản ứng khi KRI vượt ngưỡng | Thời gian từ khi một chỉ báo rủi ro then chốt vượt ngưỡng đến một quyết định được ghi lại | trung vị và bách phân vị thứ 85 của số giờ hoặc ngày từ lúc vượt ngưỡng đến quyết định | giờ hoặc ngày | Giám sát KRI và nhật ký quyết định | Quản lý rủi ro; giám sát và quản lý sự kiện | Phản ứng với một tín hiệu sản xuất | Hằng tháng |
| Tính đúng hạn của kế hoạch xử lý | Tỷ lệ xử lý rủi ro hoàn tất trước ngày đã cam kết | số xử lý hoàn tất đúng hạn / số xử lý đến hạn trong kỳ | phần trăm | Sổ đăng ký rủi ro và công cụ theo dõi hành động | Quản lý rủi ro; cải tiến liên tục | Hành động cải tiến được giao | Hằng quý |
| Tỷ lệ thay đổi theo rủi ro | Tỷ lệ thay đổi được phê duyệt qua lộ trình dựa trên rủi ro kèm bằng chứng kiểm soát đính kèm | số thay đổi được phê duyệt qua lộ trình dựa trên rủi ro kèm bằng chứng yêu cầu / số thay đổi trong kỳ | phần trăm | Bản ghi thay đổi | Hỗ trợ thay đổi; quản lý rủi ro | Thay đổi giao liên tục kèm kiểm tra tự động | Hằng tháng |

Hãy định nghĩa khoảng rà soát và danh sách kiểm soát then chốt trong sổ đăng ký. Một kiểm soát chỉ được "kiểm thử" khi cuộc kiểm thử xem xét bằng chứng của vận hành, không chỉ thiết kế. Đồng hồ KRI bắt đầu khi chỉ báo vượt ngưỡng, như hệ thống giám sát ghi lại, và dừng ở một quyết định được viết ra, có thể là hành động, chấp nhận, hoặc đổi ngưỡng. Chỉ loại các rủi ro đang được cho nghỉ hưu khỏi mẫu số sau một quyết định đóng được ghi lại.

## Khuyến nghị

### Giữ cuộc trò chuyện về rủi ro sống

**1. Giữ sổ đăng ký ngắn và viết mỗi rủi ro theo một dạng chuẩn.** Dùng một câu theo dạng "Vì [nguyên nhân], [sự kiện] có thể xảy ra, dẫn đến [hậu quả]." Giới hạn sổ đăng ký ở các rủi ro sẽ thay đổi một quyết định hay một kế hoạch. Gộp bản trùng, tách cái mơ hồ, và cho nghỉ hưu các rủi ro đã qua. Một danh sách vài chục rủi ro mà mọi người thảo luận đáng giá hơn một nghìn cái không ai đọc.

**2. Giao mọi rủi ro cho một người sở hữu có thể hành động.** Người sở hữu là người có thẩm quyền với phản ứng, thường trong đội phân phối hoặc vận hành, không phải chức năng rủi ro. Hãy xác nhận quyền sở hữu với người đó, và rà soát nó khi mọi người đổi vai trò. Độ phủ người sở hữu đo điều này, và một rủi ro không có chủ là một phát hiện.

**3. Rà soát rủi ro trong những cuộc trò chuyện đã diễn ra.** Hãy nêu các rủi ro hàng đầu trong lập kế hoạch, rà soát và rà soát sự cố, thay vì tạo một cuộc họp riêng. Thói quen linh hoạt về suy ngẫm đều đặn để trở nên hiệu quả hơn là nơi tự nhiên cho câu hỏi "điều gì có thể làm hại chúng ta tiếp theo?" Hãy ghi kết quả vào sổ đăng ký.

**4. Ghép đánh giá với bằng chứng và khoảng.** Với mỗi rủi ro quan trọng, ghi điều khiến bạn nghĩ nó có khả năng hoặc nghiêm trọng: sự cố, suýt sự cố, kết quả kiểm thử, lịch sử nhà cung cấp. Đưa một khoảng cho khả năng và tác động khi bạn có thể, và nói bạn không chắc đến mức nào. Đừng kết hợp các điểm thứ bậc thành một con số duy nhất rồi coi nó là một phép đo. Nếu bạn dùng một ma trận, hãy dùng nó để mở đầu một cuộc thảo luận (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

### Kiểm thử các kiểm soát

**5. Nêu tên các kiểm soát then chốt và mục đích của từng cái.** Với mỗi rủi ro lớn, liệt kê vài kiểm soát bạn dựa vào, và thất bại của mỗi cái sẽ trông ra sao. Một sổ đăng ký kiểm soát liệt kê hàng trăm hoạt động nhỏ giấu đi những cái quan trọng. Hãy gồm các kiểm soát tự động trong đường ống, như kiểm thử, kiểm tra chính sách và cổng phê duyệt.

**6. Kiểm thử vận hành, không chỉ thiết kế.** Rà soát thiết kế hỏi liệu kiểm soát có hoạt động nếu nó được vận hành. Kiểm thử vận hành hỏi liệu nó đã được vận hành và hoạt động trong kỳ, bằng cách xem xét các mẫu bằng chứng. Hãy lên kế hoạch kiểm thử theo chu kỳ khớp với rủi ro, ghi kết quả, và theo đuổi các thất bại. Nơi có thể, hãy tự động hóa bằng chứng, để việc kiểm thử diễn ra liên tục.

**7. Coi thất bại kiểm soát là thông tin.** Một kiểm thử thất bại là hệ thống kiểm soát đang hoạt động. Hãy ghi thất bại, hỏi vì sao, và sửa nguyên nhân. Tỷ lệ hiệu quả kiểm soát nên được đọc cùng việc theo đuổi: các thất bại được tìm và sửa nhanh lành mạnh hơn một tỷ lệ hoàn hảo đến từ kiểm thử yếu.

**8. Dùng đảm bảo độc lập nơi nó thêm giá trị.** Kiểm toán nội bộ hay một người rà soát độc lập có thể kiểm thử các kiểm soát mà tuyến đầu sở hữu và tuyến hai giám sát. Tính độc lập chống việc tự chấm bài của mình. Hãy phối hợp để các đội không bị ba nhóm kiểm thử cùng một việc.

### Dùng chỉ báo và quyết định tốt

**9. Chọn vài chỉ báo dẫn trước cho mỗi rủi ro lớn.** Một chỉ báo rủi ro then chốt nên rẻ để đo, liên kết với một nguyên nhân, và ghép với một ngưỡng và một phản ứng. Ví dụ, tuổi của lỗ hổng nghiêm trọng cũ nhất báo hiệu rủi ro an ninh, và tỷ lệ thay đổi cần xử lý khẩn cấp báo hiệu rủi ro thay đổi. Hãy định nghĩa ai xem chỉ báo và họ sẽ làm gì ở ngưỡng (xem chủ đề 8.1, Chỉ số sự cố bảo mật và lỗ hổng).

**10. Ghi quyết định ở mỗi lần vượt ngưỡng.** Khi một chỉ báo vượt ngưỡng, có người quyết định: hành động, chấp nhận, hoặc điều chỉnh ngưỡng. Hãy viết ra quyết định và lý do. Điều này xây một lịch sử cho thấy các ngưỡng có được đặt tốt không và phản ứng có kịp thời không.

**11. Làm phê duyệt dựa trên rủi ro thành mặc định cho thay đổi.** Trong bối cảnh phân phối liên tục, hãy thay các hội đồng phê duyệt đại trà bằng lộ trình dựa trên rủi ro: kiểm tra tự động và rà soát đồng nghiệp cho thay đổi chuẩn rủi ro thấp, và rà soát đầy đủ hơn cho vài thay đổi rủi ro cao (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi). Đính kèm bằng chứng rằng các kiểm soát đã chạy. Điều này giảm rủi ro và trì hoãn cùng lúc, vì thay đổi nhỏ kèm bằng chứng tự động an toàn hơn thay đổi lớn kèm một chữ ký.

**12. Học từ tổn thất và suýt sự cố.** Sau các sự cố và tình huống suýt xảy ra, hãy cập nhật sổ đăng ký: rủi ro có ở đó không, nó có được đánh giá tốt không, kiểm soát có hoạt động không? Dùng các câu trả lời để cải thiện cả hai. Vòng lặp giữa sự kiện và sổ đăng ký là thứ giữ sổ đăng ký trung thực (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ hiện hành của rà soát rủi ro | Đánh dấu rủi ro là đã rà soát mà không thảo luận; đổi khoảng | Lấy mẫu rà soát xem có thực chất; khoảng cố định trong sổ đăng ký |
| Độ phủ người sở hữu | Giao người sở hữu mà họ không biết; nêu một người cấp cao không có thẩm quyền | Xác nhận người sở hữu; kiểm tra rằng người sở hữu có thể hành động theo phản ứng |
| Độ phủ kiểm thử kiểm soát | Kiểm thử các kiểm soát dễ; tính rà soát thiết kế là kiểm thử vận hành | Danh sách kiểm soát then chốt do bên thứ hai cố định; loại kiểm thử được ghi lại |
| Tỷ lệ hiệu quả kiểm soát | Kiểm thử mẫu nhỏ; chọn mẫu sẽ qua | Phương pháp chọn mẫu độc lập với người sở hữu; cỡ mẫu được ghi lại |
| Thời gian phản ứng khi KRI vượt ngưỡng | Đổi ngưỡng sau khi vượt; ghi một quyết định không có nội dung | Nhật ký thay đổi ngưỡng; lấy mẫu nội dung quyết định |
| Tính đúng hạn của kế hoạch xử lý | Đặt ngày dễ; định nghĩa lại việc hoàn tất | Ngày thống nhất với người sở hữu khi phê duyệt; kiểm tra rằng mức đánh giá rủi ro đã dịch chuyển |
| Tỷ lệ thay đổi theo rủi ro | Phân loại thay đổi là rủi ro thấp để tránh rà soát; đính kèm bằng chứng không do kiểm soát tạo ra | Lấy mẫu phân loại so với quy tắc; bằng chứng tự động từ đường ống |

Một kết quả đọc lành mạnh là một sổ đăng ký ngắn mà mọi người tranh luận, người sở hữu biết rủi ro của họ, các kiểm soát được kiểm thử với một số thất bại được tìm và sửa, các chỉ báo dẫn đến quyết định thật, và ít phê duyệt nặng hơn cho thay đổi nhỏ.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Ma trận rủi ro | Nhanh, trực quan, khởi đầu cuộc trò chuyện | Chủ quan; độ chính xác giả; phép tính thứ bậc |
| Khoảng định lượng | Trung thực hơn về độ bất định | Cần dữ liệu và kỹ năng; công sức |
| Hội đồng phê duyệt nặng | Kiểm soát hiển thị | Chậm; khuyến khích gộp thay đổi |
| Kiểm tra tự động theo rủi ro | Nhanh và nhất quán | Cần kỹ thuật; kiểm tra tự động có thể sai |
| Chức năng rủi ro trung tâm sở hữu rủi ro | Nhất quán | Xa công việc; người sở hữu thờ ơ |
| Quyền sở hữu của tuyến đầu | Hiểu biết và trách nhiệm giải trình | Chất lượng không đồng đều; cần giám sát |
| Kiểm thử kiểm soát định kỳ | Hiệu quả cho kiểm soát ổn định | Bỏ lỡ sự trôi dạt giữa các lần kiểm thử |
| Giám sát kiểm soát liên tục | Bằng chứng kịp thời | Công sức công cụ; nhiễu |

Câu trả lời dạng văn xuôi là đặt quyền sở hữu ở các đội, áp dụng giám sát trung tâm nhẹ và kiểm thử độc lập, tự động hóa bằng chứng khi có thể, và dùng các đánh giá như gợi ý cho cuộc trò chuyện.

## Câu hỏi để thảo luận với đội nhóm

**1. Ba rủi ro nào có khả năng làm hại dịch vụ này nhất trong năm tới, và ai sở hữu từng cái?**
Yêu cầu mỗi thành viên viết ba rủi ro một cách riêng tư, rồi so sánh. Sự trùng lặp và khác biệt đều mang thông tin. Người điều phối nên ghi ai sẽ hành động với mỗi rủi ro. Thống nhất ba rủi ro hàng đầu và xác nhận người sở hữu.

**2. Kiểm soát nào chúng ta phụ thuộc nhiều nhất, và lần cuối chúng ta kiểm tra nó hoạt động là khi nào?**
Chọn một kiểm soát, như quy tắc rà soát mã, một bản sao lưu hay một bước phê duyệt. Lần theo lần cuối bằng chứng về vận hành của nó được xem xét. Nếu không ai biết, hãy lên kế hoạch một kiểm thử. Cuộc trò chuyện cho thấy khác biệt giữa thiết kế và vận hành.

**3. Điều gì khiến chúng ta đổi một đánh giá từ vàng sang đỏ, và ai sẽ nhận ra?**
Thảo luận các chỉ báo và ngưỡng. Hỏi đội có bao giờ hạ một đánh giá để tránh sự chú ý không, và áp lực nào gây ra. Thống nhất bằng chứng nào biện minh cho một thay đổi, và cách làm cho việc nói "đỏ" trở nên an toàn.

**4. Phê duyệt nào làm chậm thay đổi của chúng ta mà không giảm rủi ro?**
Liệt kê các phê duyệt một thay đổi điển hình cần, và với mỗi cái hỏi nó giải quyết rủi ro nào và đã bao giờ chặn một thay đổi chưa. Đề xuất thay một cái bằng kiểm tra tự động. Thống nhất bằng chứng nào cho thấy thay đổi an toàn.

**5. Khi một kiểm soát thất bại, chúng ta phát hiện ra thế nào, và đã làm gì?**
Nhớ lại một thất bại gần đây. Nó được phát hiện qua kiểm thử, qua một sự cố, hay bởi một kiểm toán viên? Thảo luận một vòng lặp mạnh hơn trông ra sao. Gồm cả cách người tìm ra nó được đối xử.

**6. Chúng ta đã chấp nhận những rủi ro nào, và khi nào chúng ta rà soát quyết định đó?**
Liệt kê các rủi ro đã chấp nhận và ngày rà soát. Kiểm tra mỗi cái có người sở hữu và lý do. Rủi ro đã chấp nhận mà không có ngày rà soát là một rủi ro không ai theo dõi.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu hầu hết rủi ro vận hành. Họ nên duy trì một danh sách ngắn các rủi ro của chính mình, thảo luận chúng trong lập kế hoạch và rà soát, và xây kiểm soát vào đường ống để bằng chứng là tự động. Họ được lợi từ lộ trình thay đổi theo rủi ro cho phép thay đổi rủi ro thấp chảy qua, và họ nên trung thực về những gì có thể sai.

### Đội dịch vụ và vận hành

Các đội vận hành chạy các kiểm soát: sao lưu, giám sát, rà soát truy cập và kiểm thử khôi phục. Họ nên giữ bằng chứng về vận hành, kiểm thử kiểm soát theo chu kỳ đều đặn, và nêu sớm các lần vượt ngưỡng chỉ báo. Họ gánh chi phí của kiểm soát nặng và nên nói cái nào đóng góp ít.

### Lãnh đạo và quản trị

Lãnh đạo đặt khẩu vị rủi ro và quyết định mức ma sát chấp nhận được. Họ nên yêu cầu một danh sách ngắn các rủi ro hàng đầu kèm người sở hữu và bằng chứng, chào đón đánh giá đỏ, tài trợ kiểm thử kiểm soát, và ủng hộ đảm bảo độc lập. Quản trị nên kiểm tra sổ đăng ký phản ánh sự cố và suýt sự cố, và không nên thưởng cho các báo cáo trông gọn gàng.

### Khách hàng và người dùng

Người dùng gánh hậu quả của các rủi ro thành hiện thực, và thường biết về chúng trước sổ đăng ký. Họ nên có cách để nêu mối lo ngại, và được báo về các rủi ro ảnh hưởng đến họ, trong giới hạn bảo mật. Trải nghiệm của họ về sự cố và thay đổi là bằng chứng cho các buổi rà soát rủi ro.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Nhóm số của một công ty điện lực quốc gia vận hành thanh toán hóa đơn khách hàng, một ứng dụng di động và các tích hợp với vận hành lưới điện. Các con số dưới đây chỉ mang tính minh họa.

Sổ đăng ký rủi ro của nhóm có 340 mục, lần cuối được dọn cách đây ba năm. Độ hiện hành rà soát rủi ro là 22 phần trăm, và 61 rủi ro có người sở hữu đã nghỉ việc. Ma trận cho thấy 85 rủi ro màu đỏ, và không ai đọc báo cáo. Trưởng bộ phận đảm bảo dịch vụ mới đề xuất một lần đặt lại. Cùng các đội phân phối, bà cắt sổ đăng ký xuống các rủi ro sẽ thay đổi một quyết định, kết thúc với 38. Bà giao mỗi rủi ro cho một người sở hữu có tên trong đội có thể hành động, và họ xác nhận. Bà chọn 12 kiểm soát then chốt và kiểm thử vận hành cho từng cái, thay vì rà soát thiết kế. Năm cái thất bại: hai lần khôi phục sao lưu chưa từng được kiểm thử, một rà soát truy cập đã bị bỏ qua, và hai phê duyệt thay đổi đã được ký mà không có bằng chứng kiểm thử.

Đội sửa các thất bại và thay hội đồng phê duyệt thay đổi cho thay đổi chuẩn bằng lộ trình dựa trên rủi ro. Kiểm thử tự động và rà soát đồng nghiệp là các kiểm soát, và đường ống đính kèm bằng chứng vào bản ghi thay đổi. Mỗi rủi ro lớn có một hoặc hai chỉ báo dẫn trước kèm ngưỡng và phản ứng. Với rủi ro ngừng thanh toán hóa đơn kéo dài, các chỉ báo là tuổi của lỗ hổng nghiêm trọng cũ nhất và số lần khôi phục sao lưu thất bại trong quý. Quý đầu cho thấy người sở hữu xác nhận cả 38 rủi ro, độ hiện hành rà soát 91 phần trăm, tỷ lệ hiệu quả kiểm soát là 7 trên 12 ở lần kiểm thử đầu và 12 trên 12 sau khi sửa, và thời gian phản ứng khi KRI vượt ngưỡng trung vị là 2 ngày. Tỷ lệ thay đổi qua lộ trình theo rủi ro là 64 phần trăm.

Giám đốc rủi ro yêu cầu số rủi ro đỏ giảm một nửa trong một năm. Trưởng bộ phận đảm bảo dịch vụ đề xuất theo dõi tính đúng hạn của kế hoạch xử lý và hiệu quả kiểm soát, và giải thích rằng số rủi ro đỏ có thể giảm bằng cách đánh giá lại, và bà thà thấy các đánh giá đỏ trung thực. Quyết định được ghi lại, và báo cáo của quý sau gồm các quyết định được lấy mẫu đằng sau mỗi lần hạ mức.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy giữ sổ đăng ký rủi ro sống qua các cuộc trò chuyện đều đặn với các bên liên quan thay vì một lần rà soát hằng năm. Điều cần lưu ý là các con số chấm điểm có thể làm sự bất định trông gọn gàng.

### AI

Các hệ thống AI cần mục trong sổ đăng ký rủi ro với một người sở hữu, một điểm rà soát của con người và một ngày rà soát. Hãy đo hiệu quả kiểm soát cho giám sát AI bằng cách kiểm thử nó. Điều cần lưu ý là một chính sách nói rằng con người rà soát đầu ra không phải là một kiểm soát cho đến khi có người kiểm thử nó.

### Tự động hóa

Hãy tự động hóa kiểm tra kiểm soát nơi chúng có thể được kiểm thử, và đo tự động hóa theo các kiểm tra thất bại và bị bỏ qua. Điều cần lưu ý là một kiểm soát tự động qua được có thể đang kiểm thử sai thứ.

### Phân tích

Hãy báo cáo độ phủ và hiệu quả kiểm thử kiểm soát kèm cỡ mẫu. Quyết định được cung cấp thông tin là củng cố các kiểm soát nào. Điều cần lưu ý là mẫu nhỏ và chấm điểm chủ quan giới hạn độ chính xác, nên hãy nói rõ.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Rủi ro chủ yếu là hết tiền, mất người then chốt và một sự cố ngừng hoạt động lớn. Hãy giữ một danh sách một trang gồm năm rủi ro hàng đầu, rà soát hằng tháng, và kiểm thử sao lưu và khôi phục. Xây kiểm soát vào đường ống ngay từ đầu, vì chúng rẻ hơn việc bổ sung sau.

**Doanh nghiệp nhỏ.** Một nhúm rủi ro chi phối: phụ thuộc vào người then chốt, một nhà cung cấp duy nhất, mã độc tống tiền và mất dữ liệu. Hãy giữ một danh sách ngắn kèm người sở hữu, kiểm thử khôi phục, và giữ bảo hiểm và chi tiết liên lạc hiện hành. Chống lại các khung nặng, và mượn từ chúng những gì phù hợp.

**Doanh nghiệp lớn.** Quy mô đòi hỏi một hệ phân loại chung, công cụ sổ đăng ký nhẹ, và ba tuyến phòng thủ trong thực tế. Hãy để tuyến đầu sở hữu rủi ro của mình, giữ tuyến hai nhỏ và mang tính tư vấn, và làm kiểm thử độc lập hiệu quả. Tránh các kiểm thử trùng lặp giữa kiểm toán, rủi ro và tuân thủ.

**Chính phủ và khu vực công.** Quản lý rủi ro thường là một nghĩa vụ chính thức với các khung chuẩn, ủy ban kiểm toán và báo cáo công khai. Hãy căn chỉnh với khung yêu cầu, ghi tài liệu các tuyên bố khẩu vị rủi ro, và giữ bằng chứng. Trách nhiệm giải trình công khai làm các đánh giá đỏ trung thực có giá trị hơn, và cũng khó hơn (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là thời gian của người sở hữu để rà soát rủi ro, công sức để định nghĩa kiểm soát then chốt và kiểm thử chúng, công cụ cho sổ đăng ký và giám sát chỉ báo nếu chưa có, và chi phí của đảm bảo độc lập. Tự động hóa việc thu thập bằng chứng tốn công sức kỹ thuật rồi giảm chi phí lặp lại.

Lợi tức là ít bất ngờ hơn, phê duyệt thay đổi nhanh hơn và nhẹ hơn, và đảm bảo đáng tin hơn. Một sổ đăng ký được cắt tỉa và lộ trình thay đổi theo rủi ro tiết kiệm thời gian mà các cơ quan phê duyệt lớn đã tiêu tốn. Các kiểm thử kiểm soát thất bại được tìm thấy trước một sự cố ngăn những tổn thất khó định giá. Hãy xây hồ sơ từ dữ liệu của chính bạn: thời gian dành cho mỗi phê duyệt thay đổi trước và sau, số thất bại kiểm soát tìm thấy bằng kiểm thử so với tìm thấy bởi sự cố hay kiểm toán viên, và chi phí của các sự cố trong quá khứ mà một kiểm soát lẽ ra đã ngăn được. Tránh trích dẫn thống kê tổn thất của ngành mà không có nguồn và phương pháp truy được.

## Phản mẫu và cạm bẫy

- **Một sổ đăng ký cứ phình mãi.** Không ai đọc nó. Hãy cắt tỉa còn các rủi ro quan trọng.
- **Đánh giá không có bằng chứng.** Chúng là ý kiến được tô màu. Hãy đính kèm bằng chứng và khoảng.
- **Người sở hữu chỉ trên danh nghĩa.** Rủi ro nằm với người không thể hành động. Hãy xác nhận quyền sở hữu với đúng người.
- **Kiểm thử thiết kế và gọi đó là đảm bảo.** Một kiểm soát có thể hoạt động có thể đã không hoạt động. Hãy kiểm thử vận hành.
- **Chỉ báo cáo số rủi ro đỏ.** Số đếm giảm khi đánh giá lại. Hãy nhìn vào các xử lý và kết quả kiểm soát.
- **Hội đồng phê duyệt cho mọi thay đổi.** Chúng làm chậm thay đổi nhỏ và dạy việc gộp. Hãy dùng lộ trình theo rủi ro.
- **Trừng phạt đánh giá đỏ.** Rủi ro khi đó bị giấu. Hãy thưởng cho cảnh báo sớm.
- **Văn hóa rủi ro và phân phối tách biệt.** Công việc rủi ro làm cho các đội, không cùng các đội, tạo ra kịch tuân thủ.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Sổ đăng ký và quyền sở hữu | Danh sách dài, cũ | Sổ đăng ký tồn tại, được sở hữu một phần | Sổ đăng ký ngắn với người sở hữu tuyến đầu được xác nhận và ngày rà soát | Rà soát trong các cuộc trò chuyện của đội; bằng chứng và khoảng được đính kèm | Rủi ro chia sẻ qua các đội và nhà cung cấp với người đồng sở hữu |
| Kiểm soát | Được giả định là hoạt động | Thiết kế được ghi tài liệu | Kiểm soát then chốt được nêu tên; kiểm thử vận hành theo chu kỳ | Thất bại được theo đuổi; bằng chứng được tự động hóa khi có thể | Giám sát kiểm soát liên tục với giám sát của con người và đảm bảo độc lập |
| Quyết định và thay đổi | Phê duyệt bởi ủy ban | Một số thay đổi chuẩn được phê duyệt trước | Lộ trình theo rủi ro kèm bằng chứng đính kèm | Chỉ báo có ngưỡng và quyết định được ghi lại; lộ trình được tinh chỉnh từ kết quả | Quyết định rủi ro nhúng trong các đường ống qua tổ chức và chuỗi cung ứng |

## Danh sách kiểm tra

- [ ] Sổ đăng ký ngắn, với rủi ro viết theo dạng nguyên nhân, sự kiện và hậu quả.
- [ ] Mọi rủi ro có một người sở hữu tuyến đầu được xác nhận có thể hành động.
- [ ] Rủi ro được rà soát trong các cuộc trò chuyện đều đặn của đội.
- [ ] Kiểm soát then chốt được nêu tên và kiểm thử vận hành theo một chu kỳ đã nêu.
- [ ] Thất bại kiểm soát được ghi nhật ký, giải thích và sửa.
- [ ] Mỗi rủi ro lớn có một hoặc hai chỉ báo dẫn trước kèm ngưỡng và phản ứng.
- [ ] Quyết định ở các lần chỉ báo vượt ngưỡng được ghi lại.
- [ ] Lộ trình thay đổi theo rủi ro tồn tại, với bằng chứng được đính kèm tự động khi có thể.
- [ ] Rủi ro đã chấp nhận có người sở hữu, lý do và ngày rà soát.
- [ ] Sự cố và suýt sự cố cập nhật sổ đăng ký.

## Lời nhắc AI

**Viết lại các rủi ro theo dạng chuẩn.**

```text
Here are [number] entries from our risk register: [paste, with sensitive details
removed]. Rewrite each in the form "Because of [cause], [event] may happen,
leading to [consequence]." Flag entries that are vague, duplicated, or really
issues that have already happened. Suggest which could be merged or retired.
Do not rate them. List your assumptions and what to confirm with the owners.
```

**Thiết kế một kiểm thử kiểm soát.**

```text
For the control [describe, for example quarterly access review for the billing
system], design an operating test. Include what evidence to examine, how to
select a sample without bias, what counts as a pass or a fail, how to record
results, and how to automate the evidence collection over time. Do not assume
specific tools. List your assumptions and risks in the test design.
```

**Đề xuất chỉ báo dẫn trước cho một rủi ro.**

```text
Risk: [describe in cause, event, consequence form]. Propose up to three leading
indicators that are cheap to measure and linked to the cause, with a suggested
response for a threshold breach and the way each indicator could mislead. Do
not invent threshold values; describe how we should calibrate them from our own
data. List your assumptions.
```

**Rà soát một quy trình phê duyệt thay đổi.**

```text
Our change approval process for [type of change] is: [describe steps, approvers,
and typical delays]. Identify steps that add delay without reducing risk, propose
a risk-based alternative with automated checks and evidence, and say what we
should measure to know whether risk went up or down. Do not claim research
results. List your assumptions and decisions needing leadership input.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số rủi ro hoặc kiểm soát.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số rủi ro mang vectơ lợi dụng, rào chắn và quy tắc bằng chứng của nó.

## Điểm chính cần nhớ

- Giữ sổ đăng ký rủi ro ngắn, do các đội có thể hành động sở hữu, và được rà soát trong các cuộc trò chuyện đã có.
- Kiểm thử rằng kiểm soát then chốt vận hành, coi thất bại là thông tin hữu ích, và tự động hóa bằng chứng.
- Dùng vài chỉ báo dẫn trước kèm ngưỡng, phản ứng và quyết định được ghi lại.
- Thay phê duyệt đại trà bằng lộ trình thay đổi theo rủi ro được hỗ trợ bởi bằng chứng tự động.
- Cho thấy khoảng và bằng chứng thay vì độ chính xác giả, và dùng ma trận để mở đầu cuộc trò chuyện.
- Làm cho việc đưa ra đánh giá đỏ an toàn, và học từ tổn thất và suýt sự cố.

## Tài liệu tham khảo và đọc thêm

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
