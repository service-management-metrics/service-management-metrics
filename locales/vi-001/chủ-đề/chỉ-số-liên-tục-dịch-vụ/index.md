# Chỉ số liên tục dịch vụ

**Một kế hoạch khôi phục là một giả thuyết cho đến khi một buổi diễn tập đã kiểm thử nó, nên các chỉ số liên tục phải đếm những gì thực sự được khôi phục, nhanh đến đâu, và bao nhiêu dữ liệu quay lại, chứ không bao giờ đếm số kế hoạch nằm trên kệ.**

## Tổng quan và động lực

Hầu hết các thước đo sự cố mô tả ngày xấu thông thường: một lần triển khai thất bại, một cơ sở dữ liệu bão hòa, một người hàng xóm ồn ào. Liên tục dịch vụ mô tả ngày hiếm và nghiêm trọng, khi một vùng hỏng, một kho dữ liệu bị hỏng, một nhà cung cấp biến mất, hoặc mã độc tống tiền mã hóa cả hệ thống. [Lập kế hoạch liên tục kinh doanh](https://en.wikipedia.org/wiki/Business_continuity_planning) là kỷ luật chuẩn bị cho một tổ chức tiếp tục giao hàng ở mức chấp nhận được qua những sự kiện như vậy. Trong ITIL 4, thực hành này được gọi là quản lý liên tục dịch vụ, và nó là góc nhìn dịch vụ CNTT của mục đích lớn hơn đó (xem chủ đề tương ứng trong *Service Management Guide* đồng hành).

Hai thuật ngữ gánh phần lớn trọng lượng. [Mục tiêu thời gian khôi phục](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) là thời gian chấp nhận được để khôi phục một dịch vụ sau một gián đoạn. [Mục tiêu điểm khôi phục](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) là lượng dữ liệu mất chấp nhận được, diễn đạt dưới dạng một khoảng thời gian: một RPO một giờ nghĩa là mất các lần ghi của giờ cuối cùng là chấp nhận được và mất nhiều hơn thì không. Cả hai đến từ một [phân tích tác động kinh doanh](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), phương pháp xác định hoạt động nào quan trọng nhất, cái gì phụ thuộc vào cái gì, và một gián đoạn tốn bao nhiêu. Các mục tiêu là quyết định kinh doanh có giá, vì mục tiêu chặt hơn cần nhiều dự phòng hơn, nhiều tự động hóa hơn và nhiều thời gian diễn tập hơn.

Khó khăn là một mục tiêu là lời hứa về một sự kiện tương lai chưa xảy ra. Bằng chứng trung thực là một bài kiểm thử. Đội có khôi phục dịch vụ trong RTO ở buổi diễn tập cuối không? Dữ liệu được khôi phục có đạt RPO không? Các bước trong kế hoạch có phải là các bước đội thực sự đã làm không? Một chỉ số liên tục vì vậy chủ yếu là phép đo các buổi diễn tập, và chất lượng của phép đo phụ thuộc vào buổi diễn tập thực tế đến đâu.

Các đội linh hoạt và kỹ thuật độ tin cậy của trang (SRE) mang đến những thói quen hữu ích cho việc này. Hệ thống của họ thay đổi hằng tuần, nên một kế hoạch viết một lần rồi lưu lại sẽ cũ đi trong vài tháng. Phản ứng linh hoạt là giữ khôi phục dưới dạng mã (ví dụ bằng [hạ tầng dưới dạng mã](https://en.wikipedia.org/wiki/Infrastructure_as_code)), diễn tập thường xuyên, và coi mỗi buổi diễn tập là nguồn của các hạng mục tồn đọng. [Kỹ thuật hỗn loạn](https://en.wikipedia.org/wiki/Chaos_engineering) và ngày diễn tập (game day) áp dụng cùng ý tưởng ở quy mô nhỏ hơn: cố ý gây ra một thất bại, một cách có kiểm soát, và quan sát điều xảy ra. Góc nhìn SRE được mô tả trong cuốn *Site Reliability Engineering* của Google, và lĩnh vực rộng hơn được tóm tắt trong bài [kỹ thuật độ tin cậy của trang](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### Các góc nhìn khác nhau ra sao

- **Góc nhìn ITIL.** Quản lý liên tục dịch vụ là một thực hành đặt mục tiêu khôi phục từ BIA, thiết kế kế hoạch và chứng minh chúng bằng kiểm thử. Đầu ra của nó là kế hoạch, báo cáo diễn tập và phát hiện được ghi lại. Tiêu chuẩn [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) mô tả một hệ thống quản lý liên tục kinh doanh. Tính đến tháng 10 năm 2026, hãy kiểm tra trực tiếp ấn bản hiện hành nếu khách hàng hoặc cơ quan quản lý yêu cầu sự tuân thủ.
- **Góc nhìn linh hoạt.** Năng lực khôi phục là một thuộc tính sản phẩm trong định nghĩa hoàn thành. Một câu chuyện thêm một kho dữ liệu chưa xong cho đến khi đường khôi phục của nó đã được thử.
- **Góc nhìn SRE.** Công việc độ tin cậy được lập ngân sách và đo lường. Chuyển đổi dự phòng, diễn tập khôi phục và ngày diễn tập là công việc có lịch với người sở hữu và phát hiện đi vào tồn đọng.

Chủ đề này bao quát bảy thước đo: khôi phục so với mục tiêu thời gian và dữ liệu trong các bài kiểm thử, độ phủ và độ mới của diễn tập, khôi phục từ bản sao lưu, việc đóng các phát hiện, và độ cập nhật của kế hoạch. Các sự cố ngừng hoạt động thật nằm trong chỉ số sự cố lớn (xem chủ đề 3.4, Chỉ số sự cố lớn) và chỉ số tính sẵn sàng (xem chủ đề 5.3, Chỉ số tính sẵn sàng). Các mục tiêu diễn đạt dưới dạng đích hướng người dùng nằm trong chủ đề về chỉ báo và ngân sách (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi). "Thời gian khôi phục lần triển khai thất bại" của chương trình nghiên cứu DORA là một đồng hồ nhỏ hơn nhiều (xem chủ đề 2.8, Chỉ số DORA). Nguyên nhân gốc mà kiểm thử làm lộ ra thuộc các chủ đề vấn đề và học hỏi (xem chủ đề 4.1, Chỉ số quản lý vấn đề, và chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi).

Một **bậc (tier)** là một lớp dịch vụ được gom theo tốc độ chúng phải trở lại. Một **buổi diễn tập trên bàn (tabletop)** là buổi tổng duyệt dựa trên thảo luận không thay đổi hệ thống nào. Một **ngày diễn tập (game day)** là buổi tổng duyệt thực hành trong đó một đội gây ra hoặc mô phỏng một thất bại và quan sát phản ứng. Một **phát hiện (finding)** là một khoảng trống được ghi lại giữa kế hoạch và điều đã xảy ra. **Độ cập nhật của kế hoạch** là mức độ một kế hoạch phản ánh dịch vụ như hôm nay.

## Nguyên tắc chính

- **Kiểm thử, rồi mới tuyên bố.** Một RTO hay RPO chỉ được xác thực bằng một lần khôi phục thực sự được thực hiện và tính giờ. Hãy báo cáo mục tiêu và kết quả đã chứng minh gần nhất cạnh nhau.
- **Đo độ thực tế, không chỉ thành công.** Khôi phục một cơ sở dữ liệu thử rỗng đạt trong vài phút nói ít về một lần khôi phục cỡ môi trường thật. Hãy ghi lại phạm vi và điều kiện của mỗi buổi diễn tập cạnh kết quả.
- **Phân bậc cho hệ thống và dồn công sức theo bậc.** Dịch vụ trọng yếu được kiểm thử thường xuyên, thực tế. Dịch vụ bậc thấp được kiểm tra nhẹ hơn. Một mục tiêu tần suất duy nhất cho mọi thứ lãng phí công sức hoặc bỏ sót rủi ro.
- **Coi các phát hiện là sản phẩm của một buổi diễn tập.** Đầu ra giá trị của một ngày diễn tập là một danh sách khoảng trống đã đóng. Một bài kiểm thử không có phát hiện nào hoặc xuất sắc hoặc quá nhẹ nhàng, và bạn nên tìm ra là cái nào.
- **Mô tả dịch vụ và luân phiên, không bao giờ cá nhân.** Kết quả diễn tập mô tả hệ thống và kế hoạch. Không ai bị xếp hạng theo tốc độ khôi phục một buổi diễn tập.
- **Cho thấy mỗi buổi diễn tập là một hàng riêng.** Có ít bài kiểm thử mỗi dịch vụ mỗi năm, nên giá trị trung bình gây hiểu lầm (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

## Định nghĩa chỉ số

Mỗi chỉ số liệt kê đồng hồ hoặc số đếm, cái gì bị loại trừ, và nguồn dữ liệu. Mỗi hàng cần một quy tắc bằng văn bản trước khi được tin. Một "dịch vụ bậc 1" dưới đây nghĩa là một dịch vụ trong bậc khôi phục cao nhất do BIA của chính bạn định nghĩa.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ đạt RTO | Tỷ lệ buổi diễn tập khôi phục trong đó dịch vụ được khôi phục trong RTO nêu rõ của nó | số buổi diễn tập có thời gian khôi phục <= RTO / số buổi diễn tập đã chạy. Đồng hồ bắt đầu ở lúc thất bại diễn tập được tuyên bố (thời điểm gây lỗi hoặc tuyên bố kịch bản) và dừng khi dịch vụ qua kiểm tra sức khỏe đã thống nhất cho người dùng thật hoặc tổng hợp. Buổi diễn tập trên bàn và buổi không có khôi phục tính giờ bị loại trừ và đếm riêng | phần trăm, kèm số buổi diễn tập | Báo cáo diễn tập, dòng thời gian từ giám sát, sổ đăng ký dịch vụ có RTO | Quản lý liên tục dịch vụ; quản lý tính sẵn sàng | Kết quả ngày diễn tập; thời gian khôi phục trong các thước đo phân phối | Mỗi buổi diễn tập; tổng hợp hằng quý |
| Tỷ lệ đạt RPO | Tỷ lệ buổi diễn tập khôi phục trong đó mất dữ liệu nằm trong RPO nêu rõ | số buổi diễn tập có khoảng mất dữ liệu đo được <= RPO / số buổi diễn tập khôi phục dữ liệu. Khoảng mất dữ liệu là thời gian giữa lần ghi cuối cùng còn có sau khi khôi phục và thời điểm thất bại. Buổi diễn tập không khôi phục trạng thái nào bị loại trừ | phần trăm, kèm số buổi diễn tập | Báo cáo diễn tập, so sánh dữ liệu đã khôi phục với nguồn hoặc nhật ký ghi | Quản lý liên tục dịch vụ; quản lý an toàn thông tin | Diễn tập khôi phục như một phần của định nghĩa hoàn thành | Mỗi buổi diễn tập; tổng hợp hằng quý |
| Độ phủ khôi phục đã kiểm thử | Tỷ lệ dịch vụ bậc 1 và bậc 2 có một bài kiểm thử khôi phục thực hành trong khoảng kiểm thử đã thống nhất của chúng | số dịch vụ có bài kiểm thử đủ điều kiện trong khoảng / số dịch vụ trong phạm vi. Một bài kiểm thử đủ điều kiện là thực hành (không chỉ trên bàn) và khôi phục dịch vụ trong môi trường kiểm thử hoặc môi trường thật. Khoảng được đặt theo bậc | phần trăm, theo bậc | Sổ đăng ký dịch vụ, lịch và báo cáo diễn tập | Quản lý liên tục dịch vụ; quản lý danh mục dịch vụ | Lịch ngày diễn tập | Hằng tháng |
| Số ngày kể từ bài kiểm thử khôi phục thành công cuối | Tuổi của bài kiểm thử khôi phục đạt gần nhất cho mỗi dịch vụ trọng yếu | ngày báo cáo trừ ngày của bài kiểm thử mới nhất đạt cả RTO và RPO. Một bài kiểm thử thất bại không đặt lại đồng hồ. Dịch vụ chưa bao giờ được kiểm thử được cho thấy là "chưa bao giờ" và không phải bằng không | ngày, theo dịch vụ, với cái cũ nhất được làm nổi bật | Báo cáo diễn tập, sổ đăng ký dịch vụ | Quản lý liên tục dịch vụ | Lịch ngày diễn tập; tuổi hạng mục công việc | Hằng tháng |
| Tỷ lệ khôi phục từ bản sao lưu thành công | Tỷ lệ lần khôi phục từ bản sao lưu được thử hoàn tất với dữ liệu đã xác minh, dùng được | số lần khôi phục hoàn tất và qua kiểm tra xác minh dữ liệu / số lần khôi phục được thử, qua các bài kiểm thử khôi phục tự động và thủ công. Chỉ riêng thành công của tác vụ sao lưu bị loại trừ, vì một tác vụ đã chạy không phải là một lần khôi phục hoạt động | phần trăm, theo bậc dữ liệu | Nhật ký hệ thống sao lưu, kết quả xác minh khôi phục tự động | Quản lý liên tục dịch vụ; quản lý hạ tầng và nền tảng | Diễn tập khôi phục; tiêu chí khả năng vận hành trong định nghĩa hoàn thành | Hằng tuần cho kiểm thử tự động; hằng tháng khi rà soát |
| Tỷ lệ đóng phát hiện từ diễn tập | Tỷ lệ phát hiện từ các buổi diễn tập khôi phục được đóng trong thời hạn đã thống nhất, chia theo mức nghiêm trọng | số phát hiện đóng trong mục tiêu / số phát hiện đến hạn trong kỳ. Đồng hồ bắt đầu khi phát hiện được ghi trong báo cáo diễn tập và dừng ở bản sửa đã xác minh, nghĩa là một lần kiểm thử lại hoặc rà soát xác nhận nó. Phát hiện được một người sở hữu có tên chấp nhận là rủi ro được đếm riêng | phần trăm, kèm số phát hiện quá hạn | Báo cáo diễn tập, trình theo dõi vấn đề | Quản lý liên tục dịch vụ; cải tiến liên tục | Hành động của buổi nhìn lại; tuổi hạng mục tồn đọng | Hằng tháng |
| Độ cập nhật của kế hoạch | Tỷ lệ kế hoạch liên tục và sổ tay vận hành được rà soát sau thay đổi trọng yếu cuối cùng đối với dịch vụ của chúng, hoặc trong khoảng rà soát của chúng | số kế hoạch có ngày rà soát muộn hơn thay đổi trọng yếu cuối cùng và nằm trong khoảng / số kế hoạch trong phạm vi. Thay đổi trọng yếu nghĩa là một bản ghi thay đổi được đánh dấu là làm đổi kiến trúc, kho dữ liệu, phụ thuộc hoặc nhà cung cấp | phần trăm, kèm tuổi kế hoạch chưa rà soát cũ nhất | Kho kế hoạch (kiểm soát phiên bản), bản ghi thay đổi, sổ đăng ký dịch vụ | Quản lý liên tục dịch vụ; hỗ trợ thay đổi | Định nghĩa hoàn thành gồm cập nhật sổ tay vận hành | Hằng quý |

Đồng hồ RTO trong một buổi diễn tập khác với đồng hồ trong một sự cố ngừng hoạt động thật, vốn bắt đầu ở tác động (xem chủ đề 3.4, Chỉ số sự cố lớn), nên hãy so sánh buổi diễn tập với buổi diễn tập. Một buổi diễn tập được dựng kịch bản chặt đo tốc độ tổng duyệt, nên hãy ghi lại nó chứa bao nhiêu sự bất ngờ.

## Khuyến nghị

### Đặt các mục tiêu có thể kiểm thử

**1. Suy ra RTO và RPO từ một phân tích tác động kinh doanh, và viết chúng cạnh dịch vụ.** BIA hỏi doanh nghiệp một giờ, một ngày và một tuần ngừng hoạt động tốn bao nhiêu và họ chịu mất dữ liệu nào. Hãy ghi các câu trả lời vào sổ đăng ký dịch vụ để mọi bài kiểm thử có thể so sánh với một mục tiêu nêu rõ. Mục tiêu do riêng kỹ sư chọn thường hoặc không kham nổi hoặc không liên quan đến điều khách hàng cần.

**2. Phân bậc dịch vụ và đặt khoảng kiểm thử theo bậc.** Một số ít bậc, có lẽ ba hoặc bốn, dễ vận hành hơn một quy tắc khác nhau cho mỗi dịch vụ. Hãy cho bậc cao nhất những bài kiểm thử thường xuyên nhất và thực tế nhất, và cho bậc thấp nhất một kiểm tra nhẹ như khôi phục định kỳ một mẫu. Viết các khoảng ra và rà soát chúng khi BIA đổi.

**3. Kiểm tra mục tiêu có khớp với kiến trúc không.** Một RPO năm phút với một bản sao lưu hằng đêm là một mâu thuẫn mà một bài kiểm thử sẽ phơi bày vào lúc tệ nhất. Hãy so sánh mỗi mục tiêu với thiết kế sao lưu, sao chép và chuyển đổi dự phòng trước buổi diễn tập đầu tiên, và ghi mọi khoảng trống là một phát hiện.

### Kiểm thử theo những cách làm lộ ra điều gì đó

**4. Trộn diễn tập trên bàn, diễn tập khôi phục và ngày diễn tập.** Một buổi diễn tập trên bàn rẻ và tìm khoảng trống về vai trò, đầu mối liên hệ và quyết định. Một buổi diễn tập khôi phục thực hành tìm khoảng trống về quy trình, quyền hạn và dữ liệu. Một ngày diễn tập, gây ra một thất bại và quan sát phản ứng, tìm khoảng trống về giám sát, sổ tay vận hành và phối hợp. Hãy báo cáo từng loại riêng để một chuỗi diễn tập trên bàn dễ không trông như bằng chứng khôi phục.

**5. Tính giờ khôi phục trên dữ liệu cỡ môi trường thật.** Một lần khôi phục hoạt động trên một bản sao nhỏ có thể thất bại trên khối lượng thật vì giới hạn thông lượng hoặc lưu trữ. Nơi các bài kiểm thử quy mô đầy đủ quá tốn kém để chạy thường xuyên, hãy chạy một bài định kỳ và nêu mọi phép ngoại suy. Ghi lại kích thước dữ liệu cùng kết quả.

**6. Xác minh dữ liệu đã khôi phục dùng được.** Hãy thêm một kiểm tra tự động sau khôi phục, như số đếm hàng, một checksum, hoặc một giao dịch tổng hợp. Chỉ tính một lần khôi phục là thành công khi kiểm tra đó đạt.

**7. Thêm sự bất ngờ dần dần.** Các buổi diễn tập đầu có thể được thông báo và dựng kịch bản. Các buổi sau nên giữ lại chi tiết của thất bại và gồm các phụ thuộc như thông tin xác thực hết hạn hoặc một nhà cung cấp không liên lạc được. Hãy ghi lại mức bất ngờ để kết quả được đọc trong bối cảnh.

### Biến phát hiện thành thay đổi

**8. Ghi mọi phát hiện kèm người sở hữu, mức nghiêm trọng và ngày đến hạn.** Một ngày diễn tập tạo ra một danh sách: một quyền còn thiếu, một bước sổ tay vận hành không còn khớp công cụ, một bộ giám sát chưa bao giờ kêu. Hãy đưa mỗi cái vào tồn đọng của đội với cùng mức hiển thị như công việc tính năng. Theo dõi tuổi của phát hiện đang mở và tỷ lệ đóng đúng hạn, và xác nhận việc đóng bằng kiểm thử lại nơi thực tế.

**9. Liên kết phát hiện với quản lý vấn đề và học hỏi.** Một phát hiện tái diễn qua các buổi diễn tập là một vấn đề theo nghĩa ITIL (xem chủ đề 4.1, Chỉ số quản lý vấn đề). Hãy rà soát mỗi buổi diễn tập không đổ lỗi, như bạn làm với một bản phân tích sau sự cố, và theo dõi hành động đến khi đóng (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi).

### Giữ cho kế hoạch sống

**10. Giữ kế hoạch và sổ tay vận hành trong kiểm soát phiên bản, và liên kết chúng với thay đổi.** Khi một bản ghi thay đổi làm đổi kiến trúc, một kho dữ liệu hoặc một nhà cung cấp, hãy yêu cầu kế hoạch sở hữu được rà soát trong cùng một phần công việc (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi). Đo độ cập nhật của kế hoạch so với thay đổi trọng yếu cuối cùng và không chỉ so với lịch. Một kế hoạch được rà soát mỗi quý mà bỏ qua lần di chuyển tháng trước chỉ hiện hành trên danh nghĩa.

**11. Giữ bản đồ phụ thuộc trung thực.** Thứ tự khôi phục phụ thuộc vào các dịch vụ dùng chung như danh tính, phân giải tên và kho bí mật. Hãy đối chiếu bản đồ với bản ghi cấu hình và sửa các khoảng trống mà buổi diễn tập làm lộ ra (xem chủ đề 7.4, Chỉ số chất lượng cấu hình và CMDB).

**12. Gồm cả nhà cung cấp, và luân phiên nhiệm vụ diễn tập.** Hãy yêu cầu mỗi nhà cung cấp trọng yếu cho bằng chứng kiểm thử của riêng họ và thống nhất cách diễn tập các bước chung (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng). Các buổi diễn tập tốn thời gian, nên hãy chia sẻ nhiệm vụ qua một luân phiên và tính nó là tải vận hành (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca).

## Vectơ lợi dụng và rào chắn

Các con số liên tục dễ bị tâng bốc vì ít người nhìn kỹ một buổi diễn tập, và bài kiểm thử thật xảy ra hiếm hoi. Bảng ghép mỗi chỉ số với một cách nó bị lợi dụng và kiểm tra bắt được nó. Các cặp theo mẫu nêu trong chủ đề 1.2 (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ đạt RTO | Chọn một tập dữ liệu thử nhỏ, một kịch bản dễ, hoặc một kịch bản đã tập; bắt đầu đồng hồ muộn, sau khi đội đã bắt đầu; nới kiểm tra sức khỏe để "đã khôi phục" đến sớm hơn; đặt RTO rộng rãi để mọi bài kiểm thử đều đạt | Ghi lại kích thước dữ liệu, mức bất ngờ của kịch bản và định nghĩa kiểm tra sức khỏe cùng mỗi kết quả; so sánh RTO với BIA; cho thấy mỗi buổi diễn tập là một hàng riêng, gồm cả các lần thất bại |
| Tỷ lệ đạt RPO | Chỉ đo mất mát cho bảng chính chứ không cho mọi trạng thái; kiểm thử một bản sao đang đồng bộ vì không có tải chạy; định nghĩa lại RPO sau một kết quả trượt | Xác minh mất dữ liệu so với nhật ký ghi trên mọi kho dữ liệu trong phạm vi; kiểm thử dưới tải ghi thực tế; giữ nhật ký thay đổi của các mục tiêu kèm lý do |
| Độ phủ khôi phục đã kiểm thử | Tính các cuộc thảo luận trên bàn là bài kiểm thử; kiểm thử một dịch vụ nhỏ tầm thường để nâng phần trăm; thu nhỏ danh sách trong phạm vi bằng cách phân loại lại dịch vụ xuống bậc thấp hơn | Yêu cầu bài kiểm thử thực hành cho số đếm bậc 1; báo cáo độ phủ có trọng số theo mức trọng yếu của dịch vụ; kiểm toán các thay đổi bậc so với BIA |
| Số ngày kể từ bài kiểm thử khôi phục thành công cuối | Chạy lại một bài kiểm thử dễ để đặt lại tuổi; gắn nhãn một bài kiểm thử một phần là đạt; đặt lại ngày sau một lần rà soát trên giấy | Cho thấy phạm vi của bài kiểm thử đạt cuối; cho thấy tuổi cũ nhất và các dịch vụ chưa bao giờ được kiểm thử; yêu cầu cả RTO và RPO đều đạt |
| Tỷ lệ khôi phục từ bản sao lưu thành công | Báo cáo thành công của tác vụ sao lưu như thành công khôi phục; chỉ kiểm thử các bản sao lưu đã biết là tốt; xác minh bằng một kiểm tra không thể thất bại | Theo dõi các lần khôi phục của các bản sao lưu lấy mẫu ngẫu nhiên; yêu cầu một kết quả xác minh dữ liệu; rà soát chính kiểm tra ở mỗi lần kiểm toán |
| Tỷ lệ đóng phát hiện từ diễn tập | Đóng phát hiện mà không sửa; hạ mức nghiêm trọng để nới hạn; chia một phát hiện thành nhiều cái dễ; ghi lại ít phát hiện ngay từ đầu | Xác minh việc đóng bằng kiểm thử lại; báo cáo số phát hiện mỗi buổi diễn tập cạnh tỷ lệ đóng, vì số đếm giảm có thể nghĩa là buổi diễn tập nhẹ nhàng hơn; rà soát thay đổi mức nghiêm trọng |
| Độ cập nhật của kế hoạch | Cập nhật ngày rà soát mà không đọc kế hoạch; đánh dấu thay đổi là không trọng yếu; nhồi kế hoạch bằng văn bản chung chung không bao giờ cũ đi | Lấy mẫu kế hoạch và cùng đi qua với người không viết chúng; so sánh tỷ lệ đánh dấu thay đổi trọng yếu với lịch sử thay đổi kiến trúc; liên kết độ cập nhật với kết quả kiểm thử |

Một kết quả đọc lành mạnh cho thấy một nhúm bài kiểm thử mỗi quý với sự biến thiên trung thực: một số đạt ngay lần đầu, một số thất bại và được lặp lại, và các phát hiện từ mỗi bài hiện ra trong tồn đọng và đóng trong thời hạn nêu rõ. Điểm hoàn hảo năm này qua năm khác là lý do để hỏi các buổi diễn tập khó đến đâu.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Bài kiểm thử khôi phục tự động nhỏ, thường xuyên | Bằng chứng rẻ, liên tục; bắt thất bại sao lưu im lặng sớm | Không kiểm thử phối hợp, con người hay khôi phục quy mô đầy đủ |
| Buổi diễn tập chuyển đổi dự phòng quy mô đầy đủ hằng năm | Thực tế; diễn tập con người, nhà cung cấp và phụ thuộc cùng nhau | Tốn kém và hiếm; khó lặp lại sau một bản sửa; mang rủi ro nếu chạy trên môi trường thật |
| Diễn tập trên bàn | Chi phí thấp; tìm khoảng trống về vai trò và quyết định; tốt cho đào tạo | Không chứng minh công nghệ hoạt động; dễ chạy mà không học được gì |
| Ngày diễn tập trên môi trường thật với thất bại được gây ra | Thực tế cao nhất; kiểm thử giám sát và sổ tay vận hành như chúng vốn có | Cần các biện pháp bảo vệ trưởng thành và sự ủng hộ của lãnh đạo; có thể gây hại cho khách hàng nếu chạy cẩu thả |
| Mục tiêu theo bậc | Dồn công sức vào nơi có rủi ro | Việc gán bậc có thể trôi và cần người sở hữu |

Câu trả lời thực tế là một chương trình nhiều lớp: kiểm tra khôi phục tự động rẻ mọi lúc, diễn tập thực hành cho mỗi dịch vụ bậc 1 theo một khoảng cố định, một buổi diễn tập lớn hơn theo chu kỳ dài hơn, và diễn tập trên bàn cho quyết định và truyền thông. Hãy nêu các khoảng để người đọc đánh giá bằng chứng gần đây đến đâu.

## Câu hỏi để thảo luận với đội nhóm

**1. Lần cuối chúng ta khôi phục dịch vụ quan trọng nhất của mình là khi nào, và chúng ta đã chứng minh chính xác điều gì?**
Hãy hỏi ngày, kích thước dữ liệu, kịch bản và kết quả, và viết chúng lên bảng. Người điều phối nên kiềm chế phán xét và tập trung vào khoảng cách giữa tuyên bố và bằng chứng. Kết thúc bằng việc thống nhất một bài kiểm thử sẽ khép khoảng cách lớn nhất.

**2. Ai đã chọn RTO và RPO của chúng ta, và doanh nghiệp hôm nay có còn chọn chúng không?**
Lần theo mỗi mục tiêu về một phân tích tác động kinh doanh hoặc một quyết định. Hỏi liệu kiến trúc có đáp ứng được mục tiêu trên giấy không, và cái giá của việc đáp ứng nó đã từng được nêu chưa. Thống nhất ai sẽ xác nhận mục tiêu của các dịch vụ hàng đầu với doanh nghiệp và khi nào.

**3. Một buổi diễn tập thất bại sẽ tốn danh tiếng của chúng ta bao nhiêu, và điều đó có định hình độ khó của các buổi diễn tập không?**
Câu hỏi này làm lộ áp lực khiến các buổi diễn tập nhẹ nhàng. Hỏi một bài kiểm thử thất bại được coi là thất bại của đội hay thành công của buổi diễn tập.

**4. Những phát hiện nào từ buổi diễn tập cuối vẫn đang mở, và vì sao?**
Đọc to danh sách kèm tuổi và người sở hữu. Với mỗi hạng mục quá hạn, hỏi cái gì đang chặn nó: công việc cạnh tranh, quyền sở hữu không rõ, chi phí, hay niềm tin rằng rủi ro chấp nhận được. Mục đích là không phát hiện nào nằm ở trạng thái không có chủ.

**5. Kế hoạch của chúng ta giả định điều gì mà không còn đúng nữa?**
Chọn một kế hoạch và đọc nó cùng một người không viết ra nó. Tìm các công cụ đã nghỉ hưu, tài khoản đã đổi tên và nhà cung cấp đã ra đi. Hỏi kế hoạch sẽ được cập nhật ra sao khi dịch vụ đổi, và ai nhận ra khi nó không được cập nhật. Liên kết câu trả lời với quy trình thay đổi.

**6. Phụ thuộc nào sẽ làm mọi thứ ngừng lại, và chúng ta đã bao giờ kiểm thử mà không có nó chưa?**
Các dịch vụ dùng chung như danh tính, phân giải tên, bí mật, và chính hệ thống gọi người là những điểm thất bại đơn thường gặp. Yêu cầu đội nêu tên chúng và mô tả lần cuối mỗi cái bị cố ý làm không khả dụng.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội sản phẩm sở hữu thiết kế làm cho khôi phục khả thi, nên họ gặp liên tục như một phần của định nghĩa hoàn thành cho các dịch vụ trọng yếu: một đường sao lưu, một quy trình khôi phục, và một sổ tay vận hành hoạt động. Họ nên chạy các buổi diễn tập khôi phục trong nhịp của chính mình, lưu mã khôi phục cùng dịch vụ, và coi một buổi diễn tập thất bại là một hạng mục tồn đọng.

### Đội dịch vụ và vận hành

Các đội vận hành chạy hầu hết buổi diễn tập và gánh tải chuẩn bị chúng. Họ nên giữ lịch diễn tập, ghi dòng thời gian khi buổi diễn tập chạy, và viết phát hiện ngay trong ngày. Kết quả mô tả dịch vụ và kế hoạch, và không ai bị xếp hạng theo tốc độ một cá nhân khôi phục một buổi diễn tập.

### Lãnh đạo và quản trị

Lãnh đạo đặt mục tiêu cùng doanh nghiệp và quyết định đáng mua bao nhiêu khả năng khôi phục. Họ nên yêu cầu xem kết quả đã chứng minh gần nhất cạnh mỗi mục tiêu, tuổi của bằng chứng, và các phát hiện đang mở, và nên tránh thưởng cho một bảng sạch. Các cơ quan quản trị nên chờ đợi một tập nhỏ, ổn định các thước đo liên tục, liên kết với sổ đăng ký rủi ro và với báo cáo theo quy định nơi áp dụng (xem chủ đề 8.2, Chỉ số rủi ro và kiểm soát, và chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

### Khách hàng và người dùng

Khách hàng hiếm khi thấy liên tục cho đến khi nó quan trọng, và khi đó họ đánh giá nó hoàn toàn bằng kết quả: họ không có dịch vụ bao lâu và dữ liệu của họ có còn không. Họ được lợi từ những tuyên bố rõ về điều được hứa, bằng các thuật ngữ họ hiểu, và từ giao tiếp trung thực khi một sự cố kích hoạt kế hoạch. Nơi hợp đồng gồm cam kết khôi phục, hãy chia sẻ bằng chứng diễn tập khi được yêu cầu (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực vận hành một hệ thống lên lịch bệnh nhân, một kho lưu hình ảnh y khoa và một dịch vụ nhắn tin cho nhân viên. Một đội sản phẩm tám người duy trì hệ thống lên lịch, và một đội vận hành chạy nền tảng. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Sổ đăng ký của bộ phận liệt kê hệ thống lên lịch là bậc 1 với RTO 2 giờ và RPO 15 phút. Báo cáo hằng quý của nó cho thấy "tỷ lệ đạt RTO: 100 phần trăm trên 4 buổi diễn tập" và "độ phủ khôi phục đã kiểm thử: 100 phần trăm". Một trưởng vận hành mới đọc các báo cáo diễn tập đứng sau các con số. Ba trong bốn buổi diễn tập là diễn tập trên bàn, và lần khôi phục thực hành duy nhất dùng một bản sao của cơ sở dữ liệu chứa khoảng một phần mười dữ liệu môi trường thật. Không ai đã khôi phục một bản sao lưu vào một môi trường sạch trong 14 tháng.

Đội quyết định đổi điều được đo và kiểm thử. Họ định nghĩa lại độ phủ khôi phục đã kiểm thử để chỉ đếm các bài kiểm thử thực hành, làm con số tụt xuống 33 phần trăm qua ba dịch vụ bậc 1. Họ lên lịch một lần khôi phục cỡ môi trường thật cho hệ thống lên lịch, với xác minh tự động số đếm hàng và một giao dịch đặt lịch tổng hợp. Lần chạy mất 3 giờ 40 phút so với RTO 2 giờ, và dữ liệu khôi phục chậm hơn điểm thất bại 40 phút so với RPO 15 phút, vì việc chuyển nhật ký đã bị tạm dừng trong một lần di chuyển và không bao giờ được tiếp tục. Ngày diễn tập tạo ra 9 phát hiện: 2 cao, 5 trung bình và 2 thấp.

Quyết định ghi trong nhật ký là coi lần trượt đó là kết quả quý giá nhất của năm. Đội mở công việc để tiếp tục chuyển nhật ký kèm cảnh báo về độ trễ của nó, song song hóa việc khôi phục, và chuyển một ổ dữ liệu sang lưu trữ nhanh hơn. RTO giữ ở mức 2 giờ, và đội thêm một phương án thủ công dự phòng có tài liệu cho hệ thống lên lịch. Tỷ lệ đóng phát hiện trong 60 ngày đầu là 7 trên 9 đúng hạn, hai cái còn lại được các người sở hữu có tên chấp nhận là rủi ro.

Rủi ro lợi dụng được bắt ở đây khá tinh vi. Không ai làm giả con số: một số đếm diễn tập trên bàn hào phóng và một tập dữ liệu thử nhỏ khiến báo cáo xanh. Các rào chắn có hiệu quả là ghi lại kích thước dữ liệu và loại buổi diễn tập cùng mỗi kết quả, và thực hành đọc các báo cáo diễn tập nền. Ở báo cáo kế tiếp, đội cho thấy mỗi buổi diễn tập là một hàng riêng, gồm cả lần chạy thất bại.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy diễn tập khôi phục trong các buổi nhỏ, thường xuyên cùng các bên liên quan và sửa những gì chúng làm lộ ra. Điều cần lưu ý là các buổi diễn tập có kịch bản luôn đạt cho sự yên tâm giả.

### AI

Các dịch vụ AI thêm các phụ thuộc mới, như mô hình, kho vectơ và API của bên thứ ba, vào kế hoạch khôi phục. Hãy đưa chúng vào độ phủ khôi phục đã kiểm thử và ghép thời gian khôi phục với một kiểm tra rằng các câu trả lời đúng sau khôi phục. Điều cần lưu ý là một dịch vụ AI được khôi phục có thể chạy một phiên bản mô hình khác hoặc mất dữ liệu của nó, nên hãy xác minh hành vi, không chỉ tính sẵn sàng.

### Tự động hóa

Hãy tự động hóa xác minh sao lưu và kiểm thử khôi phục, và đo tự động hóa theo các lần khôi phục thất bại. Điều cần lưu ý là một bản sao lưu hoàn tất không phải một bản sao lưu khôi phục được, nên hãy kiểm thử việc khôi phục.

### Phân tích

Hãy báo cáo các mục tiêu đạt trong kiểm thử kèm ngày của bài kiểm thử cuối, và các phát hiện diễn tập đã đóng. Quyết định được cung cấp thông tin là khả năng khôi phục nào ít được chứng minh nhất. Điều cần lưu ý là ít lần khôi phục thật nghĩa là mẫu nhỏ, nên hãy cho thấy số đếm.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Thường có một môi trường thật, một đội nhỏ và một nhà cung cấp đám mây được quản lý. Thước đo giá trị nhất là đơn giản nhất: khôi phục cơ sở dữ liệu môi trường thật từ bản sao lưu vào một môi trường sạch mỗi tháng, tính giờ nó, và xác minh kết quả. Viết RTO và RPO trên một trang.

**Doanh nghiệp nhỏ.** CNTT thường được thuê ngoài hoặc do một hai người chạy trên dịch vụ được lưu trữ. Hãy hỏi nhà cung cấp bằng văn bản họ cam kết khôi phục những gì và có thể đưa ra bằng chứng nào, và kiểm thử một lần khôi phục dữ liệu của chính bạn mỗi quý. Giữ một kế hoạch một trang ở nơi đọc được khi các hệ thống chính ngừng.

**Doanh nghiệp lớn.** Nhiều dịch vụ, nhiều nhà cung cấp và nền tảng dùng chung khiến việc phân bậc và bản đồ phụ thuộc là thiết yếu. Hãy đầu tư vào một sổ đăng ký dịch vụ trung tâm với mục tiêu, lịch diễn tập, xác minh khôi phục tự động và báo cáo nhất quán để kết quả so sánh được giữa các đội.

**Chính phủ và khu vực công.** Nghĩa vụ liên tục có thể phát sinh từ luật, kiểm toán hoặc chính sách, và một dịch vụ công có thể phải tiếp tục hoạt động trong tình huống khẩn cấp. Bằng chứng kiểm thử thường được rà soát từ bên ngoài, nên hãy giữ báo cáo diễn tập, phát hiện và bản ghi đóng dưới dạng một kiểm toán viên đọc được. Mua sắm có thể khóa chặt các sắp xếp khôi phục, nên hãy đưa quyền diễn tập và bằng chứng vào hợp đồng (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Các lý do để đầu tư là cái giá của một sự cố ngừng hoạt động nghiêm trọng kéo dài hơn mức doanh nghiệp chịu được, việc mất dữ liệu không tái tạo được, và nghĩa vụ với khách hàng, cơ quan quản lý và công ty bảo hiểm những người đòi bằng chứng về sự chuẩn bị. Công việc liên tục là bảo hiểm, nên lợi tức là tổn thất tránh được và sự tự tin của những người ra quyết định, và khó diễn đạt thành con số mà không bịa ra. Hãy mô tả nó qua các mẫu hình bạn quan sát được: khoảng cách giữa thời gian khôi phục đã nêu và đã chứng minh, số phát hiện mức nghiêm trọng cao được tìm thấy trong diễn tập thay vì trong sự kiện thật, và thời gian trả lời một yêu cầu bằng chứng của khách hàng hay kiểm toán viên.

Chi phí đến theo ba nhóm: dự phòng và công cụ mà các mục tiêu đòi hỏi, thời gian của con người để lập kế hoạch, chạy và rà soát buổi diễn tập, và công sức để giữ kế hoạch và bản đồ phụ thuộc hiện hành.

Tổng chi phí sở hữu bị chi phối bởi con người và các bậc chặt hơn. Chuyển từ RTO 24 giờ sang 2 giờ đổi thiết kế và hóa đơn, nên hãy làm sự đánh đổi đó tường minh với doanh nghiệp. Các bài kiểm thử tự động nhỏ, thường xuyên có xu hướng rẻ hơn một sự kiện lớn hằng năm vì khiếm khuyết nổi lên khi còn rẻ để sửa.

## Phản mẫu và cạm bẫy

- **Kế hoạch trên kệ.** Một tài liệu được tính là sự chuẩn bị, và không ai đã thử nó. Thay vào đó, hãy báo cáo ngày và kết quả của bài kiểm thử thực hành cuối cạnh mọi mục tiêu.
- **Thành công sao lưu như thành công khôi phục.** Các tác vụ báo xanh trong khi dữ liệu không khôi phục được. Thay vào đó, hãy kiểm thử khôi phục thường xuyên và xác minh dữ liệu trước khi tính một thành công.
- **Sân khấu đã tập.** Buổi diễn tập có kịch bản và do chính tác giả của kế hoạch chạy. Thay vào đó, hãy thêm sự bất ngờ dần dần.
- **Một mục tiêu cho mọi thứ.** Mọi dịch vụ có RTO bốn giờ vì mẫu nói vậy. Thay vào đó, hãy phân bậc dịch vụ từ một phân tích tác động kinh doanh và đặt mục tiêu phù hợp.
- **Phát hiện không bao giờ đóng.** Báo cáo diễn tập liệt kê khoảng trống và tồn đọng không bao giờ thấy chúng. Thay vào đó, hãy giao cho mỗi phát hiện một người sở hữu và ngày đến hạn, và xác minh việc đóng bằng kiểm thử lại.
- **Phạt bài kiểm thử thất bại.** Một đội bị đổ lỗi vì trượt RTO sẽ ngừng chạy các bài kiểm thử khó. Thay vào đó, hãy thống nhất từ trước rằng một buổi diễn tập thất bại với các phát hiện tốt là một kết quả tốt, và rà soát nó không đổ lỗi.
- **Kế hoạch cũ sau thay đổi nhanh.** Lịch dẫn dắt việc rà soát, và các thay đổi kiến trúc lọt qua. Thay vào đó, hãy liên kết rà soát kế hoạch với bản ghi thay đổi trọng yếu và đo độ cập nhật của kế hoạch so với chúng.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Mục tiêu và bậc | RTO và RPO không viết ra hoặc sao chép từ mẫu | Mục tiêu được viết cho một số dịch vụ chính | Bậc và mục tiêu đến từ một phân tích tác động kinh doanh và nằm trong sổ đăng ký dịch vụ | Mục tiêu được rà soát so với kết quả đã chứng minh và kiến trúc | Mục tiêu được thống nhất chung với doanh nghiệp và nhà cung cấp, và điều chỉnh khi dịch vụ đổi |
| Kiểm thử và bằng chứng | Khôi phục chưa bao giờ được kiểm thử, hoặc kiểm thử một lần sau một sự cố | Bài kiểm thử khôi phục tùy tiện của một số đội; kết quả giữ trong ghi chú cá nhân | Khoảng kiểm thử theo bậc với phạm vi, dòng thời gian và kết quả được ghi lại | Kết quả được theo dõi xu hướng, với diễn tập trên bàn, diễn tập khôi phục và ngày diễn tập báo cáo riêng | Diễn tập liên đội và nhà cung cấp có sự bất ngờ, lên lịch từ rủi ro |
| Phát hiện và học hỏi | Khoảng trống được nhận ra không chính thức | Phát hiện được liệt kê sau một số buổi diễn tập | Mọi phát hiện có người sở hữu, mức nghiêm trọng và ngày đến hạn | Tỷ lệ đóng và tuổi được rà soát, với kiểm thử lại xác nhận việc đóng | Phát hiện nuôi các nền tảng dùng chung, hợp đồng nhà cung cấp và tiêu chuẩn thiết kế |
| Độ cập nhật của kế hoạch | Kế hoạch viết một lần | Kế hoạch được cập nhật sau sự cố | Kế hoạch trong kiểm soát phiên bản với một khoảng rà soát | Việc rà soát liên kết với thay đổi trọng yếu và được đo | Kế hoạch và sổ tay vận hành được kiểm thử như mã và sinh ra từ định nghĩa dịch vụ nơi có thể |

## Danh sách kiểm tra

- [ ] Mỗi dịch vụ bậc 1 có một RTO và RPO bằng văn bản đến từ một phân tích tác động kinh doanh.
- [ ] Sổ đăng ký dịch vụ cho thấy bậc, mục tiêu và khoảng kiểm thử của mỗi dịch vụ.
- [ ] Đồng hồ RTO và RPO, kiểm tra sức khỏe và các trường hợp loại trừ được viết ra (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).
- [ ] Các bài kiểm thử khôi phục thực hành, diễn tập trên bàn và ngày diễn tập được báo cáo là các loại riêng.
- [ ] Mọi bài kiểm thử khôi phục ghi lại kích thước dữ liệu, kịch bản, mức bất ngờ, và thời gian khôi phục cùng mất dữ liệu đo được.
- [ ] Khôi phục từ bản sao lưu được kiểm thử tự động, và một kiểm tra xác minh dữ liệu quyết định thành công.
- [ ] Mỗi phát hiện từ diễn tập có một người sở hữu, một mức nghiêm trọng, một ngày đến hạn và một chỗ trong tồn đọng.
- [ ] Việc rà soát kế hoạch được liên kết với bản ghi thay đổi trọng yếu, và kế hoạch chưa rà soát cũ nhất hiển thị.
- [ ] Bản đồ phụ thuộc gồm các dịch vụ dùng chung, và ít nhất một kịch bản gỡ bỏ một trong số chúng.
- [ ] Mỗi chỉ số trong chủ đề này có một rào chắn có tên và một người sở hữu trong sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).
- [ ] Nhiệm vụ diễn tập luân phiên, và thời gian nó tốn được tính là tải vận hành.

## Lời nhắc AI

**Thiết kế một bài kiểm thử khôi phục và các thước đo đi kèm.**

```text
I want to test recovery of [service name], a [tier] service with a stated RTO of
[RTO] and RPO of [RPO]. Its main components are [list: data stores, queues,
compute, shared services] and its suppliers are [list]. Draft a test plan with a
realistic scenario, the event that starts the clock, the health check that stops
it, how to measure data loss against the RPO, the data size to use, what to
record, and the safeguards to prevent harm to production. Do not invent
benchmark times or claim that any objective is achievable. List your assumptions
and the questions I should answer to finish the plan.
```

**Rà soát báo cáo diễn tập về bằng chứng tâng bốc.**

```text
Here are summaries of our last [number] recovery exercises: [paste for each:
type, date, scope, data size, restore time, data loss, findings count]. Our
objectives are [RTO and RPO per tier]. Identify where the reported results
could overstate real recovery capability, such as small datasets, scripted
scenarios, tabletop-only coverage, or loose health checks. Suggest what extra
information to record and which guardrail metrics to pair with each result. Do
not invent benchmark values or assume facts I have not given. List your
assumptions.
```

**Biến ghi chú ngày diễn tập thành phát hiện và hạng mục tồn đọng.**

```text
Here are the raw notes from a game day on [service]: [paste notes and
timeline]. Extract each gap between the plan and what happened as a separate
finding with a short title, a description, a suggested severity using this scale
[severity scale], a candidate owner role (not a named person), and how we could
verify the fix. Group findings that may share a root cause. Do not invent events
that are not in the notes. List your assumptions and anything that needs
clarifying.
```

**Kiểm tra độ cập nhật của một kế hoạch so với thay đổi gần đây.**

```text
Here is the continuity plan for [service] last reviewed on [date]: [paste plan
or outline]. These are the material changes since then: [list changes to
architecture, data stores, dependencies, suppliers, and tooling]. Identify
steps, contacts, tools, and dependencies in the plan that the changes may have
made wrong, and list questions a reviewer should ask. Do not invent details
about our systems. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một chỉ số liên tục, khôi phục hay diễn tập, và rào chắn để ghép với nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số liên tục đã sửa nêu đồng hồ, các trường hợp loại trừ và vectơ lợi dụng của nó.

## Điểm chính cần nhớ

- Một mục tiêu khôi phục là một lời hứa, và chỉ một buổi diễn tập có tính giờ, thực tế mới cho thấy nó có giữ được không.
- Hãy báo cáo kết quả đã chứng minh gần nhất và tuổi của nó cạnh mỗi RTO và RPO, và cho thấy mỗi buổi diễn tập là một hàng riêng.
- Kiểm thử khôi phục, không phải bản sao lưu: một lần khôi phục chỉ được tính khi dữ liệu đã được xác minh là dùng được.
- Sản phẩm của một buổi diễn tập là một danh sách phát hiện đã đóng, nên hãy theo dõi tuổi của chúng và xác nhận việc đóng bằng kiểm thử lại.
- Giữ kế hoạch trong kiểm soát phiên bản và gắn việc rà soát với thay đổi trọng yếu, không chỉ với lịch.
- Đo dịch vụ và kế hoạch, không bao giờ con người, và biến một buổi diễn tập thất bại với các phát hiện tốt thành một kết quả an toàn và được tôn trọng.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
