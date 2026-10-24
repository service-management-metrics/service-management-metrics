# Nguồn dữ liệu và công cụ đo

**Một chỉ số chỉ đáng tin bằng các sự kiện nằm bên dưới nó, nên hãy nêu tên hệ thống ghi nhận chính thức cho mọi con số, thu nhận sự kiện tự động ngay khi chúng xảy ra, và kiểm thử đường ống cẩn thận như kiểm thử biểu đồ.**

## Tổng quan và động lực

Hầu hết các chương trình chỉ số dồn công sức vào bảng điều khiển và gần như không dành gì cho các đường ống cấp dữ liệu cho chúng. Như thế là ngược. Một biểu đồ bóng bẩy dựng trên các dấu thời gian không nhất quán, một trường trạng thái không ai cập nhật, hoặc một tích hợp đã âm thầm dừng từ tháng trước trông có vẻ có thẩm quyền trong khi sai. Chủ đề này trình bày nền tảng kém hào nhoáng cho phần còn lại của cuốn sách: dữ liệu dịch vụ và phân phối đến từ đâu, mỗi nguồn đáng tin đến mức nào, và những thất bại chất lượng dữ liệu nào làm một chỉ số mất giá trị trước khi ai kịp nhận ra.

Các nguồn rơi vào một nhúm họ. Một công cụ [quản lý dịch vụ CNTT (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) ghi lại sự cố, yêu cầu, vấn đề và thay đổi, mà [ITIL](https://en.wikipedia.org/wiki/ITIL) coi là các bản ghi cốt lõi của vận hành dịch vụ. Một [hệ thống theo dõi vấn đề](https://en.wikipedia.org/wiki/Issue_tracking_system) ghi lại tồn đọng và sự di chuyển của các hạng mục công việc cho các đội linh hoạt. [Kiểm soát phiên bản](https://en.wikipedia.org/wiki/Version_control) ghi lại commit, nhánh và hợp nhất. Một đường ống [tích hợp liên tục và phân phối liên tục (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) ghi lại các bản dựng, kết quả kiểm thử và lượt triển khai. Các nền tảng giám sát và [khả năng quan sát](https://en.wikipedia.org/wiki/Observability_(software)) phát ra đo từ xa: chỉ số, nhật ký và vết từ các hệ thống đang chạy. Một [cơ sở dữ liệu quản lý cấu hình (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) ghi lại các dịch vụ và thành phần mà mọi thứ liên quan đến. Khảo sát ghi lại những gì không hệ thống nào quan sát được, như sự hài lòng và nỗ lực.

Một sự kiện triển khai do đường ống ghi là khách quan và khó làm giả, một trạng thái phiếu bị đổi hàng giờ sau khi làm việc là một sự hồi tưởng, và một câu trả lời khảo sát là một nhận thức. Biết loại bản ghi nào đứng sau một con số cho bạn biết nên tìm thất bại nào trước tiên.

Góc nhìn linh hoạt và ITIL gặp nhau ở cùng dữ liệu: cả hai đều là máy trạng thái có dấu thời gian, vì vậy hãy ghi lại mọi thay đổi trạng thái như một sự kiện với thời gian đáng tin và suy ra các chỉ số từ các sự kiện.

Ba thuật ngữ lặp lại trong chủ đề này. **Hệ thống ghi nhận chính thức** là nguồn duy nhất có thẩm quyền cho một sự việc, ví dụ đường ống cho "một lượt triển khai đã xảy ra". **Công cụ đo** (instrumentation) là việc thu nhận có chủ ý các sự kiện, bằng mã, cấu hình hay tích hợp công cụ, để một chỉ số có thể được tính mà không ai phải gõ vào. **Mô hình trạng thái** là tập các trạng thái mà một hạng mục công việc hay bản ghi có thể ở và các bước chuyển được phép giữa chúng. Mô hình trạng thái quyết định đồng hồ nào có thể tính được.

Ở quy mô doanh nghiệp và khu vực công, vấn đề trở nên phức tạp hơn. Dữ liệu đi qua các đầu nối, các tác vụ [trích xuất, biến đổi, nạp (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) và các lớp báo cáo, và mỗi chặng là một cơ hội để ý nghĩa bị trôi. Một trường có nghĩa này ở nguồn có thể mang một nghĩa hơi khác trong kho dữ liệu, và con số vẫn trông hợp lý. Phương thuốc là rút ngắn khoảng cách giữa sự kiện và bảng điều khiển, và kiểm tra đường ống theo lịch.

## Nguyên tắc chính

- **Thu nhận sự kiện, không phải bản tóm tắt.** Lưu các thay đổi trạng thái thô kèm dấu thời gian và tính chỉ số từ chúng, để một định nghĩa có thể thay đổi mà không mất lịch sử.
- **Ưu tiên quan sát hơn tự báo cáo.** Nơi một hệ thống thấy được sự kiện, hãy dùng nó; dành báo cáo của con người cho những gì chỉ con người nói được.
- **Nêu tên một hệ thống ghi nhận chính thức cho mỗi sự việc.** Các nguồn trùng lặp mâu thuẫn nhau, và sự mâu thuẫn bào mòn lòng tin vào cả hai.
- **Thiết kế mô hình trạng thái trước chỉ số.** Không thể tính đồng hồ từ các trạng thái không tồn tại hoặc có nghĩa khác nhau ở các đội khác nhau.
- **Coi đường ống như một sản phẩm.** Nó có người sở hữu, kiểm thử, giám sát và nhật ký thay đổi, vì chất lượng dữ liệu suy giảm trong im lặng.
- **Cho thấy nguồn gốc.** Mọi con số trên bảng điều khiển nên dẫn ngược về các bản ghi nguồn của nó trong một hoặc hai cú nhấp.
- **Chỉ thu thập những gì bạn sẽ dùng, và bảo vệ nó.** Mỗi trường là một chi phí và, khi nó liên quan đến con người, là một nghĩa vụ riêng tư.

## Định nghĩa chỉ số

Các chỉ số dưới đây đo sức khỏe của chính nguồn cung dữ liệu. Chúng là bảng điều khiển cho các công cụ đo.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ nguồn | Tỷ lệ dịch vụ và đội trong phạm vi có sự kiện đến kho chỉ số một cách tự động | số dịch vụ hoặc đội có nguồn cấp tự động / số dịch vụ hoặc đội trong phạm vi; "trong phạm vi" được liệt kê trong sổ đăng ký chỉ số | phần trăm | Sổ đăng ký chỉ số và cấu hình đường ống | Đo lường và báo cáo; quản lý cấu hình dịch vụ | Thỏa thuận làm việc của đội về công cụ | Hằng quý |
| Độ đầy đủ của dấu thời gian | Tỷ lệ hạng mục công việc đã đóng mang đủ mọi dấu thời gian cần cho các đồng hồ của chỉ số | số hạng mục đóng có đủ các dấu thời gian chuyển trạng thái cần thiết / số hạng mục đóng trong kỳ; các hạng mục còn mở bị loại trừ | phần trăm | Lịch sử của công cụ ITSM hoặc trình theo dõi vấn đề | Quản lý sự cố; quản lý yêu cầu dịch vụ | Lịch sử bảng hoặc quy trình | Hằng tháng |
| Tỷ lệ ghi lùi ngày | Tỷ lệ chuyển trạng thái được ghi sau sự việc, đo bằng khoảng cách giữa thời điểm sự kiện và thời điểm nó được nhập | số chuyển trạng thái được nhập hơn 24 giờ sau thời điểm sự kiện / số chuyển trạng thái trong kỳ; đồng hồ bắt đầu từ sự kiện, dừng ở lúc nhập | phần trăm | Dấu vết kiểm toán của trình theo dõi, hoặc thời điểm sự kiện của đường ống so với thời điểm nhập | Hỗ trợ thay đổi; quản lý sự cố | Định nghĩa hoàn thành | Hằng tháng |
| Độ mới của dữ liệu | Dữ liệu mới nhất trên bảng điều khiển cũ đến đâu khi nó được xem | thời điểm xem trừ thời điểm sự kiện mới nhất đã nạp; báo cáo trung vị và bách phân vị thứ 95 | giờ | Nhật ký chạy đường ống và nhật ký tải bảng điều khiển | Đo lường và báo cáo | Chuẩn bị cho buổi rà soát cùng các bên liên quan | Hằng tuần |
| Chênh lệch đối chiếu | Sự bất đồng giữa hai nguồn cho cùng một số đếm | chênh lệch tuyệt đối giữa hai số đếm / số đếm của nguồn ghi nhận chính thức, cho một kỳ và phạm vi cố định | phần trăm | Nguồn ghi nhận chính thức và lớp báo cáo | Quản lý mức dịch vụ; quản lý tài chính | Kiểm tra báo cáo phát hành | Hằng tháng |
| Trôi mô hình trạng thái | Số tên trạng thái hoặc chuyển trạng thái phân biệt đang dùng so với mô hình đã ghi tài liệu | số trạng thái hoặc chuyển trạng thái không có tài liệu được quan sát trong kỳ (số đếm); các cái đã có tài liệu bị loại trừ | số đếm | Cấu hình quy trình của trình theo dõi và lịch sử sự kiện | Cải tiến liên tục | Thỏa thuận làm việc về quy trình | Hằng quý |
| Tỷ lệ phản hồi khảo sát | Tỷ lệ những người được mời đã hoàn thành một khảo sát | số phản hồi hoàn thành / số lời mời đã gửi đến; lời mời bị trả lại bị loại trừ | phần trăm | Công cụ khảo sát | Quản lý mức dịch vụ; trải nghiệm khách hàng | Rà soát cùng các bên liên quan và phản hồi cải tiến | Mỗi đợt khảo sát |

Độ đầy đủ của dấu thời gian chỉ đếm các hạng mục đã đóng, nên một tồn đọng các hạng mục mở cũ không thể giấu khoảng trống. Tỷ lệ ghi lùi ngày dùng ngưỡng 24 giờ làm ví dụ; một đội chọn ngưỡng phù hợp với công việc của mình và ghi nó ra.

## Khuyến nghị

### Ánh xạ mọi chỉ số tới nguồn của nó

**1. Dựng một bản đồ nguồn trước khi dựng bảng điều khiển.** Với mỗi chỉ số, ghi lại hệ thống ghi nhận chính thức, sự kiện bắt đầu đồng hồ, sự kiện dừng nó, người sở hữu nguồn và kiểu thất bại đã biết. Nếu bạn không nêu tên được hệ thống, bạn chưa biết con số đến từ đâu. Hãy giữ bản đồ trong sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

**2. Chọn một hệ thống ghi nhận chính thức cho mỗi sự việc.** Một lượt triển khai được ghi bởi đường ống, một sự cố bởi công cụ ITSM, một thay đổi mã bởi kiểm soát phiên bản, một mối quan hệ dịch vụ bởi CMDB. Nơi hai công cụ giữ cùng một sự việc, hãy quyết định cái nào thắng và làm cho cái kia đọc từ nó. Khi đó việc đối chiếu trở thành một phép kiểm tra, không phải một cuộc tranh luận.

### Thu nhận sự kiện ngay khi chúng xảy ra

**3. Đo sự kiện, không phải báo cáo.** Hãy để đường ống ghi lượt triển khai, máy chủ kiểm soát phiên bản ghi lần hợp nhất, và hệ thống giám sát ghi cảnh báo. Dữ liệu phụ thuộc vào việc ai đó nhớ cập nhật một trường suy giảm theo khoảng cách từ sự kiện và theo khối lượng công việc. Nơi một sự kiện tự động tồn tại, hãy ưu tiên nó hơn một đại diện do con người nhập cho cùng sự việc (xem chủ đề 2.8, Chỉ số DORA).

**4. Biến thay đổi trạng thái thành hệ quả phụ của công việc.** Nếu việc hợp nhất một nhánh chuyển hạng mục công việc sang "đang rà soát" hoặc một lượt triển khai chuyển nó sang "đã phát hành", không ai phải nhớ. Các tích hợp giữa kiểm soát phiên bản, đường ống và trình theo dõi loại bỏ phần lớn việc ghi lùi ngày.

**5. Giữ các sự kiện thô, và giữ chúng bất biến.** Lưu mỗi thay đổi trạng thái với thời điểm sự kiện, thời điểm nhập và loại tác nhân (con người hay tự động hóa). Viết các hiệu chỉnh thành sự kiện mới, không ghi đè, để lịch sử của hiệu chỉnh tự nó là dữ liệu.

### Làm đúng về thời gian

**6. Ghi thời gian theo một chuẩn.** Lưu dấu thời gian theo [Giờ Phối hợp Quốc tế (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) ở định dạng rõ ràng như định dạng được định nghĩa bởi ISO 8601 và RFC 3339, và chỉ chuyển sang giờ địa phương để hiển thị. Múi giờ hỗn hợp và các thay đổi giờ mùa hè âm thầm tạo ra các khoảng thời gian âm và đồng hồ lệch một giờ.

**7. Viết quy tắc đồng hồ ở nơi dữ liệu sống.** Với mỗi thước đo thời gian, nêu sự kiện nào bắt đầu đồng hồ, sự kiện nào dừng nó, và trạng thái nào làm nó tạm dừng. Một trạng thái tạm dừng là một quyết định thiết kế. Hãy báo cáo mỗi trạng thái tạm dừng được dùng thường xuyên đến đâu, vì đồng hồ là nơi dữ liệu dịch vụ thường bị định hình nhất (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

### Thiết kế mô hình trạng thái

**8. Giữ mô hình trạng thái nhỏ, dùng chung và có tài liệu.** Mỗi trạng thái thừa mời gọi mỗi đội một cách diễn giải khác. Định nghĩa mỗi trạng thái nghĩa là gì trong một câu, ai được chuyển công việc vào nó, và những bước chuyển nào được phép. Tuổi hạng mục công việc và các thước đo dòng chảy phụ thuộc vào mô hình này (xem chủ đề 2.1, Các thước đo dòng chảy), và việc so sánh giữa các đội phụ thuộc vào việc các đội dùng cùng từ cho cùng trạng thái. Khi dữ liệu làm bạn ngạc nhiên, hãy nghi ngờ quy trình trước: ghi lại mọi thay đổi đối với quy trình hay trường kèm ngày và lý do, và đếm các trạng thái không có tài liệu như một tín hiệu trôi.

### Giữ cho đường ống trung thực

**9. Kiểm thử đường ống như phần mềm.** Kiểm tra số hàng so với nguồn, kiểm tra các trường bắt buộc có mặt, kiểm tra trùng lặp, và cảnh báo khi một nguồn cấp dừng. Thêm một chỉ báo độ mới vào mọi bảng điều khiển để người xem thấy dữ liệu cũ đến đâu. Một đầu nối hỏng âm thầm để lại các con số tháng trước trên màn hình là một trong những thất bại phổ biến và gây hại nhất trong lĩnh vực này (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ).

**10. Đối chiếu theo lịch và lấy mẫu bằng tay.** So sánh một số đếm ở lớp báo cáo với nguồn trong một kỳ cố định và điều tra sự chênh lệch. Sau đó đọc một mẫu nhỏ các bản ghi thô. Một mẫu mười lăm phút thường tìm ra những gì kiểm tra tự động không thể, như một trạng thái được dùng theo cách bất ngờ.

### Xử lý con người và khảo sát cẩn thận

**11. Dành khảo sát cho những gì chỉ một con người nói được.** Sự hài lòng, nỗ lực, lòng tin và sức khỏe tinh thần không thể quan sát được từ dữ liệu hệ thống. Hãy hỏi trực tiếp, giữ khảo sát ngắn, thay đổi thời điểm, và báo cáo tỷ lệ phản hồi cùng ai đã trả lời, vì những người trả lời khác với những người không trả lời, một dạng [thiên lệch chọn mẫu](https://en.wikipedia.org/wiki/Selection_bias). Hãy đọc đầy đủ các bình luận mở (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

**12. Bảo vệ dữ liệu cá nhân và giữ dữ liệu ở cấp đội.** Dữ liệu sự kiện về công việc có thể nhận diện cá nhân qua tác giả commit, các trường người được giao và bản ghi trò chuyện. Hãy thu thập ở mức chỉ số cần, tổng hợp lên đội và dịch vụ, và áp dụng các quy tắc riêng tư của khu vực pháp lý và tổ chức của bạn. Dữ liệu cấp cá nhân, một khi đã thu thập, có xu hướng bị dùng để xếp hạng, điều làm hỏng nguồn (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ nguồn | Tính một dịch vụ là được phủ sau khi nối một nguồn cấp, ngay cả khi nó mang gần như không có sự kiện nào; để các dịch vụ khó ra ngoài phạm vi | Khối lượng sự kiện trên mỗi dịch vụ được phủ so với mức hoạt động đã biết của nó; rà soát danh sách phạm vi so với danh mục dịch vụ |
| Độ đầy đủ của dấu thời gian | Điền các dấu thời gian bắt buộc bằng thời điểm đóng để thỏa mãn kiểm tra hợp lệ | Phân phối các khoảng cách giữa các trạng thái liên tiếp; lấy mẫu các hạng mục đã đóng để xem các thời điểm có hợp lý không |
| Tỷ lệ ghi lùi ngày | Nhập thay đổi ngay trong ngưỡng; nới rộng ngưỡng; ghi mọi thay đổi qua một lần cập nhật hàng loạt | Mẫu hình thời điểm nhập theo giờ; tỷ lệ thay đổi do tự động hóa so với bằng tay; kiểm toán các chỉnh sửa hàng loạt |
| Độ mới của dữ liệu | Hiển thị thời điểm làm mới cuối thay vì thời điểm của sự kiện mới nhất | Thời điểm sự kiện mới nhất hiển thị trên bảng điều khiển; cảnh báo khi một nguồn cấp không giao sự kiện mới nào |
| Chênh lệch đối chiếu | Chọn kỳ hoặc phạm vi cho khớp; chỉnh lớp báo cáo cho khớp nguồn mà không tìm nguyên nhân | Cố định phạm vi và kỳ từ trước; ghi lại mỗi nguyên nhân tìm được và rà soát các nguyên nhân hằng quý |
| Trôi mô hình trạng thái | Tái dùng một trạng thái có sẵn cho nghĩa mới để tránh bị đánh dấu; thêm trạng thái mà không ghi lại | So sánh cấu hình quy trình với sổ đăng ký ở mỗi lần rà soát; đọc một mẫu các hạng mục ở các trạng thái bất thường |
| Tỷ lệ phản hồi khảo sát | Chỉ mời những người có khả năng trả lời; gửi nhắc nhở cho người dùng hài lòng; đưa phần thưởng làm lệch câu trả lời | So sánh cơ cấu người trả lời với tập người dùng; phân phối câu trả lời theo đợt; đọc bình luận mở trong buổi rà soát |

Một kết quả đọc lành mạnh là một tập các con số nhàm chán: độ phủ cao, ghi lùi ngày thấp và đang giảm, độ mới nằm trong lời hứa đã nêu, và một nguyên nhân đã biết bất cứ khi nào chênh lệch đối chiếu khác không. Khi một con số dịch chuyển, có người nói được công việc thay đổi hay công cụ đo thay đổi.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Thu nhận sự kiện tự động | Khách quan, kịp thời, ít công sức sau khi xây xong | Chỉ bao quát những gì đã được đo; hỏng trong im lặng khi công cụ thay đổi |
| Nhập thủ công và cập nhật trạng thái | Nắm bắt bối cảnh và phán đoán; hoạt động không cần tích hợp | Muộn, không nhất quán và dễ bị lợi dụng |
| Một kho chỉ số trung tâm | Một định nghĩa, một nơi để kiểm thử và quản trị | Cần tài trợ và người sở hữu; có thể thành nút thắt cổ chai |
| Mỗi đội giữ dữ liệu riêng | Khớp công việc cục bộ; bắt đầu nhanh | Định nghĩa phân kỳ; các bản tổng hợp không đáng tin |
| Giữ sự kiện thô lâu dài | Định nghĩa có thể đổi và lịch sử có thể tính lại | Chi phí lưu trữ và riêng tư; nhiều thứ hơn cần bảo mật |

Hãy tự động hóa những gì quan sát được, hỏi con người về những gì không, và giữ bản ghi thô. Hãy đầu tư trước vào các nguồn đứng sau hai hoặc ba chỉ số mà đội thực sự dùng, không phải vào một nền tảng dữ liệu cho mọi con số có thể hình dung.

## Câu hỏi để thảo luận với đội nhóm

**1. Với chỉ số quan trọng nhất của chúng ta, hệ thống nào là nguồn ghi nhận chính thức, và làm sao chúng ta biết?**
Hãy yêu cầu nhóm truy con số từ bảng điều khiển ngược về sự kiện đầu tiên. Ghi lại mọi nơi mà một con người hoặc một phép biến đổi chạm vào dữ liệu. Người điều phối nên tìm các bước mà không ai giải thích được, vì đó là nơi cuộc điều tra đầu tiên nên bắt đầu.

**2. Dấu thời gian nào của chúng ta do hệ thống viết, và cái nào do con người gõ?**
Liệt kê các đồng hồ đang dùng, như thời gian phản hồi, thời gian giải quyết và thời gian chu trình. Đánh dấu mỗi điểm bắt đầu và dừng là tự động hay thủ công. Với các điểm thủ công, hỏi thường mất bao lâu sau sự kiện thì việc nhập mới được thực hiện. Cuộc thảo luận thường cho thấy chỉ số được tranh cãi nhiều nhất dựa trên dấu thời gian kém tin cậy nhất.

**3. Các trạng thái của chúng ta có nghĩa là gì, và mọi đội có hiểu giống nhau không?**
Đặt quy trình lên một cái bảng và để những người từ các đội khác nhau giải thích từng trạng thái bằng lời của họ. So sánh các giải thích. Đếm các trạng thái nơi đồng hồ tạm dừng, và hỏi ai được dùng chúng và vì sao. Thống nhất một thay đổi để loại bỏ sự mơ hồ và ghi lại nó cùng lý do.

**4. Làm sao chúng ta biết nếu một nguồn cấp đã âm thầm dừng?**
Hỏi lần cuối có ai kiểm tra rằng dữ liệu trên bảng điều khiển là hiện hành là khi nào. Thảo luận cảnh báo hay chỉ báo độ mới nào sẽ bắt được một đầu nối đã dừng trong vòng một ngày. Người điều phối nên thúc đẩy một người sở hữu có tên và một phép kiểm tra cụ thể, không phải một ý định chung chung là sẽ cẩn thận.

**5. Chúng ta thu thập gì mà không bao giờ dùng, và dùng gì mà chúng ta không thu thập tốt?**
Đặt danh sách trường và danh sách chỉ số cạnh nhau. Đánh dấu các trường không cung cấp cho quyết định nào và các chỉ số dựa trên trường kém. Quyết định một trường để ngừng thu thập và một trường để cải thiện trong quý này.

**6. Ai trả lời các khảo sát của chúng ta, và ai không?**
So sánh những người trả lời với tập người dùng hoặc thành viên đội. Xem tỷ lệ phản hồi theo nhóm và theo giờ trong ngày hoặc tuần. Thảo luận sự im lặng có thể có nghĩa là gì và làm sao tiếp cận các nhóm ít lên tiếng mà không gây áp lực. Thống nhất cách hiển thị tỷ lệ phản hồi bên cạnh mọi kết quả khảo sát.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối tạo ra phần lớn dữ liệu khách quan: commit, rà soát, bản dựng và lượt triển khai. Họ được lợi từ công cụ đo biến thay đổi trạng thái thành hệ quả phụ của công việc, để bảng luôn trung thực mà không tốn thêm công. Họ nên giữ quy trình nhỏ và cảnh giác với việc dùng hoạt động kiểm soát phiên bản làm thước đo công sức (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy).

### Đội dịch vụ và vận hành

Các đội dịch vụ phụ thuộc vào các bản ghi do con người tạo ra dưới áp lực, thường trong một sự cố. Quy tắc đồng hồ, trạng thái tạm dừng và trường mức ưu tiên là nơi sự trôi xảy ra. Các đội vận hành nên làm cho việc thu nhận các thời điểm quan trọng thành tự động khi có thể, như thời điểm cảnh báo và thời điểm xác nhận, kiểm toán việc dùng trạng thái tạm dừng, và giữ dữ liệu giám sát tách khỏi bản ghi phiếu để mỗi bên có thể kiểm tra bên kia (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo).

### Lãnh đạo và quản trị

Lãnh đạo quyết định đầu tư bao nhiêu vào nền tảng dữ liệu, và họ đặt ra các động cơ quyết định dữ liệu có còn trung thực không. Họ nên hỏi một con số đến từ đâu trước khi hỏi vì sao nó dịch chuyển, tài trợ quyền sở hữu đường ống như công việc liên tục, và chờ đợi một ngày độ mới và một định nghĩa trên mọi báo cáo. Các cơ quan quản trị nên coi một thay đổi có tài liệu trong nguồn hay định nghĩa là chuyện bình thường, không phải thất bại.

### Khách hàng và người dùng

Người dùng cung cấp dữ liệu quan trọng nhất về trải nghiệm, thường bằng cách trả lời khảo sát, đánh giá các tương tác hoặc báo cáo vấn đề. Họ cần biết điều gì được thu thập, vì sao, và điều gì sẽ thay đổi nhờ đó. Khảo sát ngắn và việc theo dõi hiển thị giữ tỷ lệ phản hồi lành mạnh. Các báo cáo mức dịch vụ hướng tới khách hàng nên nêu nguồn và định nghĩa của chúng (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa có một đội nền tảng, ba đội sản phẩm và một bàn dịch vụ. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Lãnh đạo hỏi vì sao thời gian chờ thay đổi trên báo cáo hằng tháng giảm từ trung vị 9 ngày xuống 3 ngày trong một quý, trong khi các đội sản phẩm báo cáo không có thay đổi gì trong cách họ làm việc. Trưởng kỹ thuật nền tảng nghi ngờ công cụ đo và yêu cầu một bản đồ nguồn của chỉ số.

Bản đồ cho thấy thời gian chờ bắt đầu khi một bản ghi thay đổi được tạo trong công cụ ITSM và dừng khi trạng thái của nó được đặt là "đã triển khai". Hai đội sản phẩm đã bắt đầu tạo bản ghi sau khi công việc đã sẵn sàng, nên đồng hồ bắt đầu muộn. Một mẫu 40 bản ghi cho thấy 12 bản ghi được tạo cùng ngày với lượt triển khai. Tỷ lệ ghi lùi ngày, đo bằng khoảng cách giữa sự kiện triển khai trong đường ống và việc nhập trạng thái "đã triển khai", là 31 phần trăm vượt ngưỡng 24 giờ mà đội đã đặt.

Đội thực hiện ba thay đổi. Thứ nhất, điểm bắt đầu đồng hồ chuyển sang commit đầu tiên được liên kết với thay đổi, lấy từ kiểm soát phiên bản, và điểm dừng chuyển sang sự kiện triển khai do đường ống ghi. Thứ hai, công cụ ITSM nhận trạng thái từ đường ống, nên "đã triển khai" không còn được gõ tay. Thứ ba, bảng điều khiển có thêm một chỉ báo độ mới và một phép kiểm tra đối chiếu số lượng thay đổi giữa đường ống và công cụ ITSM.

Theo định nghĩa mới, thời gian chờ trung vị là 7 ngày và bách phân vị thứ 95 là 21 ngày, và tỷ lệ ghi lùi ngày giảm xuống 4 phần trăm. Lúc đầu lãnh đạo đọc 7 ngày như một kết quả tệ hơn. Trưởng nền tảng giải thích rằng con số cũ là sản phẩm phụ của việc tạo bản ghi muộn. Quyết định, được ghi trong nhật ký quyết định, là tính lại hai quý trước từ các sự kiện thô và đánh dấu thay đổi định nghĩa trên biểu đồ. Rủi ro lợi dụng mà đội bắt được rất tinh vi: không ai làm giả một con số, vậy mà việc tạo bản ghi muộn đã tạo ra một số liệu đẹp đẽ. Chênh lệch đối chiếu giờ đóng vai trò rào chắn, và mẫu các bản ghi thô được rà soát mỗi quý.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy xây công cụ đo theo các bước nhỏ cùng với các tính năng, để mỗi bản phát hành thêm các sự kiện cần thiết để đo nó, và thống nhất định nghĩa sự kiện với những người sẽ đọc các con số. Một bước thực tế là thêm sự kiện vào định nghĩa hoàn thành cho một thay đổi. Điều cần lưu ý là việc bổ sung đo lường sau khi ra mắt để lại những khoảng trống trong dữ liệu ban đầu mà không bản sửa nào về sau khôi phục được.

### AI

Hệ thống AI thêm các nguồn dữ liệu mới: lời nhắc, phản hồi, lệnh gọi công cụ, chỉnh sửa của con người và các lần ghi đè. Hãy ghi lại ai hoặc cái gì đã hành động, phiên bản mô hình nào đã chạy, và liệu một người có đổi kết quả không, tuân theo các quy tắc riêng tư và lưu giữ. Điều cần lưu ý là việc ghi lại lời nhắc có thể thu nhận dữ liệu cá nhân hay bí mật, nên hãy quyết định lưu gì trước khi bắt đầu.

### Tự động hóa

Hãy thu nhận sự kiện tự động ngay khi chúng xảy ra, từ hệ thống ghi nhận chính thức, và kiểm thử đường ống bằng các đầu vào đã biết. Bản thân tự động hóa là một nguồn: hãy ghi lại các lần chạy, thất bại, thử lại và hoàn tác. Điều cần lưu ý là thất bại âm thầm, khi một đầu nối hỏng tạo ra những con số phẳng, trông khỏe mạnh, nên hãy giám sát độ mới của dữ liệu như một chỉ số.

### Phân tích

Hãy đối chiếu ít nhất một con số với một nguồn độc lập mỗi quý, và công bố độ chênh. Quyết định mà điều này cung cấp thông tin là liệu một chỉ số có đủ đáng tin để dùng không. Điều cần lưu ý là các bảng điều khiển trông sạch có thể nằm trên dữ liệu yếu, nên hãy cho thấy độ đầy đủ của dữ liệu bên cạnh kết quả.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Dữ liệu mỏng và lòng tin cao, điều này có lợi. Hãy dùng đường ống và kiểm soát phiên bản làm các nguồn chính, vì chúng không cần thêm công sức, và giữ mô hình trạng thái ở một nhúm trạng thái. Hãy viết mỗi định nghĩa và nguồn của nó trong một trang, và xem lại khi đội tăng gấp đôi.

**Doanh nghiệp nhỏ.** Một người thường điều hành CNTT trên một bàn dịch vụ được lưu trữ. Hãy dùng các báo cáo của công cụ, yêu cầu nhà cung cấp cung cấp định nghĩa bằng văn bản, và định kỳ xuất dữ liệu thô để tránh bị khóa chặt.

**Doanh nghiệp lớn.** Nhiều công cụ, nhiều đội và nhiều lớp tích hợp tạo ra rủi ro trôi định nghĩa lớn nhất. Hãy đầu tư vào một mô hình sự kiện dùng chung, một kho chỉ số trung tâm với người sở hữu có tên, và các phép kiểm tra đối chiếu và độ mới tự động. Thống nhất một vốn từ vựng trạng thái nhỏ toàn doanh nghiệp, và để các đội thêm trạng thái cục bộ chỉ khi có ánh xạ được nêu về nó.

**Chính phủ và khu vực công.** Các bản ghi có thể chịu luật về lưu giữ, kiểm toán, truy cập và riêng tư, và mua sắm có thể khóa chặt công cụ và định dạng dữ liệu. Hãy coi những điều này là đầu vào thiết kế: giữ một dấu vết kiểm toán, ghi lại dòng gốc từ sự kiện đến báo cáo, và thương lượng quyền xuất dữ liệu trong hợp đồng. Nghĩa vụ báo cáo khiến các định nghĩa có tài liệu là thiết yếu (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của chủ đề này có ba phần. Phần thứ nhất là công sức xây dựng: các tích hợp, một kho chỉ số và việc dọn dẹp mô hình trạng thái. Phần thứ hai là công sức vận hành: một người sở hữu đường ống, giám sát các nguồn cấp, và một thói quen đối chiếu và lấy mẫu hằng quý. Phần thứ ba là chi phí của các biện pháp kiểm soát riêng tư và an ninh cho dữ liệu bạn giữ.

Lợi tức đến từ các quyết định được đưa ra dựa trên những con số có nghĩa đúng như vẻ ngoài của chúng. Dữ liệu kém dẫn đến đầu tư sai, tranh cãi về số liệu của ai đúng, và kết quả bị tính lại làm tổn hại lòng tin. Hãy mô tả lợi ích qua các mẫu hình bạn tự đo được: thời gian để tạo báo cáo hằng tháng trước và sau, số tranh chấp đối chiếu mỗi quý, và tỷ lệ ghi lùi ngày cùng độ đầy đủ của dấu thời gian theo thời gian. Tổng chi phí sở hữu bị chi phối bởi con người, nên hãy đếm số giờ của người sở hữu đường ống.

## Phản mẫu và cạm bẫy

- **Dựng bảng điều khiển trước bản đồ nguồn.** Biểu đồ trông đã xong trong khi ý nghĩa của nó chưa được biết. Hãy ánh xạ nguồn, đồng hồ và người sở hữu trước.
- **Tin cập nhật trạng thái thủ công cho các thước đo thời gian.** Nhập muộn khiến đồng hồ thành hư cấu. Hãy tự động hóa các chuyển trạng thái từ sự kiện đường ống và kiểm soát phiên bản bất cứ nơi nào chúng tồn tại.
- **Nhiều hệ thống ghi nhận chính thức cho một sự việc.** Tranh chấp theo sau. Hãy chọn một và làm cho các hệ thống khác đọc từ nó.
- **Đổi định nghĩa trong im lặng.** Đường xu hướng trở nên vô nghĩa. Hãy ghi lại mọi thay đổi cùng lý do và đánh dấu nó trên biểu đồ.
- **Trung bình từ dữ liệu không đầy đủ.** Dấu thời gian bị thiếu không ngẫu nhiên, vì các hạng mục khó xử thường là những cái bị bỏ qua. Hãy báo cáo độ đầy đủ của dấu thời gian bên cạnh kết quả.
- **Thu thập mọi thứ phòng khi hữu ích.** Chi phí và rủi ro riêng tư tăng mà không phục vụ quyết định nào. Hãy thu thập những gì một câu hỏi có tên cần.
- **Không có chỉ báo độ mới.** Một bảng điều khiển cũ trông giống một bảng hiện hành. Hãy hiển thị tuổi của sự kiện mới nhất trên mọi góc nhìn.
- **Dữ liệu cấp cá nhân không có mục đích.** Nó cám dỗ việc xếp hạng và làm hại nguồn. Hãy tổng hợp lên cấp đội và dịch vụ, và hạn chế truy cập.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Nguồn và thu nhận | Các con số được ghép bằng tay từ các bản xuất | Một số công cụ cấp báo cáo tự động; số khác thì không | Mỗi chỉ số có một hệ thống ghi nhận chính thức có tên và thu nhận tự động nơi có sự kiện | Độ phủ và độ đầy đủ được đo và theo dõi xu hướng | Sự kiện được chia sẻ giữa các đội và nhà cung cấp qua các giao diện đã thỏa thuận, kèm hợp đồng cho việc xuất dữ liệu |
| Mô hình thời gian và trạng thái | Mỗi người ghi và đọc thời gian khác nhau | Một số đội ghi tài liệu quy trình của họ | Một chuẩn thời gian và vốn từ vựng trạng thái dùng chung kèm quy tắc đồng hồ bằng văn bản | Trôi và ghi lùi ngày được giám sát, và các thay đổi được ghi lại kèm lý do | Mô hình được sửa chung với nhà cung cấp và khách hàng khi chúng không còn cung cấp thông tin cho quyết định |
| Chất lượng đường ống | Thất bại được phát hiện khi có người phàn nàn | Thỉnh thoảng kiểm tra thủ công | Số hàng, kiểm tra trùng lặp và chỉ báo độ mới trên mỗi bảng điều khiển | Đối chiếu được lên lịch và nguyên nhân được rà soát; đường ống có người sở hữu | Sức khỏe đường ống được báo cáo như một dịch vụ, với cải tiến được tài trợ |
| Thực hành khảo sát và riêng tư | Khảo sát ngẫu hứng; không rà soát riêng tư | Câu hỏi chuẩn ở một số đội | Khảo sát ngắn định kỳ kèm tỷ lệ phản hồi hiển thị; dữ liệu giữ ở cấp đội | Cơ cấu người trả lời được rà soát và hành động theo | Kết quả khảo sát và thực hành riêng tư được chia sẻ cởi mở với người dùng |

## Danh sách kiểm tra

- [ ] Mỗi chỉ số được báo cáo có một hệ thống ghi nhận chính thức có tên và một người sở hữu nguồn có tên.
- [ ] Bản đồ nguồn được lưu trong sổ đăng ký chỉ số.
- [ ] Mọi thước đo thời gian nêu rõ đồng hồ bắt đầu, dừng và tạm dừng ở đâu.
- [ ] Dấu thời gian được lưu theo UTC ở định dạng rõ ràng, và đồng hồ máy chủ được đồng bộ.
- [ ] Thay đổi trạng thái được tạo bởi tự động hóa bất cứ nơi nào có sự kiện.
- [ ] Sự kiện thô được giữ kèm thời điểm sự kiện và thời điểm nhập, và hiệu chỉnh là sự kiện mới.
- [ ] Mô hình trạng thái có tài liệu, và mọi thay đổi được ghi lại kèm lý do.
- [ ] Mọi bảng điều khiển hiển thị tuổi của dữ liệu mới nhất của nó.
- [ ] Các số đếm được đối chiếu với nguồn theo lịch, và nguyên nhân được ghi lại.
- [ ] Một mẫu các bản ghi thô được đọc mỗi quý.
- [ ] Tỷ lệ phản hồi khảo sát và cơ cấu người trả lời được hiển thị cùng mọi kết quả khảo sát.
- [ ] Dữ liệu cá nhân được giảm thiểu và tổng hợp lên cấp đội và dịch vụ.

## Lời nhắc AI

**Dựng bản đồ nguồn cho một chỉ số.**

```text
I am documenting the data behind this metric: [metric name], defined as
[definition]. Our tools are [list of tools, for example tracker, ITSM tool,
pipeline, monitoring]. Draft a source map with these fields: the event that
starts the clock, the event that stops it, the system of record for each, who or
what creates the event (person or automation), likely failure modes, and checks
that would detect each failure. Do not invent tool features or benchmark values.
List your assumptions and the questions I should answer to complete the map.
```

**Rà soát một mô hình trạng thái để tìm sự mơ hồ.**

```text
Here is the workflow for [team or service]: [list of statuses and allowed
transitions, with a one-line meaning for each if known]. The clocks we compute
from it are [list clocks]. Identify statuses that are ambiguous, states where a
clock could stop or pause in a misleading way, and places where two teams might
read the same word differently. Suggest a smaller model that still supports the
clocks, and say what would be lost. Do not guess how our tool is configured. List
your assumptions.
```

**Thiết kế các phép kiểm tra chất lượng dữ liệu cho một nguồn cấp.**

```text
We load [data type, for example change records] from [source system] into
[destination] every [schedule]. Required fields are [list fields]. Propose a
practical set of checks for completeness, duplicates, freshness, and
reconciliation against the source, with a suggested alert and an owner role for
each. Keep the set small enough for a team of [team size] to maintain. Do not
invent thresholds; ask me for the ones you need. List your assumptions.
```

**Soạn một khảo sát ngắn và kế hoạch cho tỷ lệ phản hồi của nó.**

```text
I want to measure [experience topic, for example effort to get a request
fulfilled] for [audience]. Draft [number] neutral questions, a plan for when and
how to send them, and how to report the response rate and the respondent mix. Flag
wording that could bias answers, and note privacy considerations given that the
data will be held in [tool or location]. Do not invent benchmark response rates.
List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề nào định nghĩa chỉ số bạn đang đo và rào chắn nên nằm bên cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chủ đề chỉ số mới hoặc đã sửa nêu tên nguồn dữ liệu và đồng hồ của nó.

## Điểm chính cần nhớ

- Mọi chỉ số phụ thuộc vào một hệ thống ghi nhận chính thức có tên, nên hãy ánh xạ nguồn trước khi dựng biểu đồ.
- Thu nhận sự kiện tự động ngay khi chúng xảy ra, và giữ các sự kiện thô để định nghĩa có thể đổi mà không mất lịch sử.
- Thời gian cũng là dữ liệu: dùng một chuẩn, viết quy tắc đồng hồ và để ý việc ghi lùi ngày.
- Giữ mô hình trạng thái nhỏ, dùng chung và có tài liệu, và ghi lại mọi thay đổi.
- Coi đường ống như một sản phẩm có người sở hữu, kiểm thử, chỉ báo độ mới và đối chiếu theo lịch.
- Dùng khảo sát cho những gì chỉ con người nói được, hiển thị tỷ lệ phản hồi và giữ dữ liệu cá nhân ở cấp đội.

## Tài liệu tham khảo và đọc thêm

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
