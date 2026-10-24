# Thời gian phản hồi và giải quyết sự cố

**Các thước đo thời gian cho sự cố mô tả người dùng chờ bao lâu ở mỗi giai đoạn, nên hãy báo cáo chúng dưới dạng phân phối với các đồng hồ được ghi ra, không bao giờ như một giá trị trung bình đơn lẻ, và ghép mọi con số tốc độ với một thước đo về việc bản sửa có giữ vững hay không.**

## Tổng quan và động lực

Một sự cố, trong quản lý dịch vụ CNTT (ITSM), là một gián đoạn không có kế hoạch đối với một dịch vụ hoặc sự suy giảm chất lượng của nó. [Quản lý sự cố](https://en.wikipedia.org/wiki/Incident_management) là thực hành khôi phục dịch vụ bình thường nhanh nhất có thể một cách an toàn. Trong ITIL 4, thực hành này được gọi là quản lý sự cố và nằm trong các thực hành quản lý dịch vụ của khung [ITIL](https://en.wikipedia.org/wiki/ITIL). Các đối ứng linh hoạt của nó là thói quen của đội coi công việc ngoài kế hoạch là một dòng công việc hạng nhất, và các thực hành trực ca và rà soát không đổ lỗi đến từ [kỹ thuật độ tin cậy của trang](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), kỷ luật vận hành dịch vụ bằng các phương pháp kỹ thuật phần mềm.

Thời gian là cách tự nhiên nhất để mô tả một sự cố, và cũng là cách bị dùng sai phổ biến nhất. Một sự cố đơn lẻ đi qua nhiều giai đoạn. Có gì đó hỏng, một bộ giám sát hoặc một người dùng nhận ra, một người xác nhận cảnh báo, ai đó bắt đầu làm việc, dịch vụ được khôi phục cho người dùng, và phiếu được đóng khi nguyên nhân được xử lý hoặc hoãn lại. Mỗi khoảng trống giữa hai sự kiện này là một thước đo riêng với người sở hữu riêng, nguyên nhân trễ riêng và đối sách riêng. Gọi tất cả là "thời gian giải quyết" che giấu nơi sự chậm trễ sống.

Chủ đề này bao quát các thước đo thời gian trôi qua theo một sự cố từ đầu đến cuối: **thời gian phát hiện**, **thời gian xác nhận**, **thời gian đến phản hồi đầu**, **thời gian khôi phục** và **thời gian giải quyết**. Nó cũng bao quát tuổi của các sự cố đang mở, số lần một sự cố đổi tay, và các vấn đề thống kê của bản tóm tắt nổi tiếng nhất, thời gian trung bình để khôi phục hoặc giải quyết (MTTR). Số đếm, danh mục và mức ưu tiên được trình bày ở nơi khác (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố). Các sự cố lớn và bất thường có các thước đo riêng (xem chủ đề 3.4, Chỉ số sự cố lớn).

### Các thuật ngữ dùng trong chủ đề này

- **Thời gian phát hiện (TTD).** Thời gian trôi qua từ lúc lỗi bắt đầu ảnh hưởng đến người dùng cho đến khi tổ chức biết, qua giám sát hoặc báo cáo của người dùng.
- **Thời gian xác nhận (TTA).** Thời gian trôi qua từ lúc cảnh báo hoặc phiếu được nêu cho đến khi một người hay đội có tên nhận quyền sở hữu.
- **Thời gian đến phản hồi đầu.** Thời gian trôi qua từ lúc sự cố được ghi nhận cho đến hành động hoặc thông điệp có ý nghĩa đầu tiên đến người dùng bị ảnh hưởng. Một trả lời tự động không tính.
- **Thời gian khôi phục.** Thời gian trôi qua từ lúc tác động đến người dùng bắt đầu cho đến khi người dùng lại dùng được dịch vụ, ngay cả khi nguyên nhân gốc chỉ được xử lý tạm.
- **Thời gian giải quyết.** Thời gian trôi qua từ lúc sự cố được ghi nhận cho đến khi sự cố được đóng vì dịch vụ đã khôi phục và người dùng đã xác nhận hoặc đã được cho một cơ hội hợp lý để xác nhận.
- **Thời gian trung bình để khôi phục hoặc giải quyết (MTTR).** Giá trị trung bình cộng của một trong những khoảng thời gian đó trên một tập sự cố. Chữ R được đọc là sửa, hồi phục, khôi phục, giải quyết hay phản hồi tùy người nói, đó là vấn đề đầu tiên của chữ viết tắt này. [Bài Wikipedia về thời gian trung bình để sửa](https://en.wikipedia.org/wiki/Mean_time_to_repair) liệt kê các biến thể.
- **Thỏa thuận mức dịch vụ (SLA).** Một [thỏa thuận mức dịch vụ](https://en.wikipedia.org/wiki/Service-level_agreement) là một cam kết giữa nhà cung cấp và khách hàng về mức dịch vụ, thường gồm các mục tiêu thời gian phản hồi và giải quyết theo mức ưu tiên.

### Vì sao giá trị trung bình là một bản tóm tắt kém

Thời gian của sự cố không đối xứng. Hầu hết sự cố ngắn, một vài cái rất dài, và những cái dài chi phối bất kỳ giá trị trung bình nào. Các khoảng thời gian dạng này thường được mô tả tốt bằng một hình dạng lệch phải như [phân phối log-chuẩn](https://en.wikipedia.org/wiki/Log-normal_distribution). Trong dữ liệu lệch, giá trị trung bình có thể nằm cao hơn nhiều so với vẻ ngoài của một sự cố điển hình, và một sự cố ngừng hoạt động dài có thể làm nó dịch chuyển nhiều hơn một tháng cải tiến.

Nhóm SRE của Google đã công bố một phân tích về vấn đề này. Nó lập luận rằng, với các tập dữ liệu sự cố mà nó nghiên cứu, độ trải của thời gian sự cố đủ rộng để MTTR có thể che giấu các cải thiện thật hoặc cho thấy những thay đổi chỉ là nhiễu, và nó khuyến nghị nhìn vào các phân phối thay thế (Davidovič, 2021, được liệt kê trong tài liệu tham khảo). Lập luận dựa trên thống kê quen thuộc, nên bạn có thể kiểm tra nó trên dữ liệu của chính mình mà không cần tin kết luận của bất kỳ ai: vẽ thời gian sự cố của bạn, tính giá trị trung bình và [trung vị](https://en.wikipedia.org/wiki/Median), và xem chúng cách nhau bao xa (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

Phương án thay thế là [bách phân vị](https://en.wikipedia.org/wiki/Percentile). Trung vị nói một người dùng điển hình đã chờ bao lâu. Bách phân vị thứ 85 hoặc 95 nói những người kém may đã chờ bao lâu. Khách hàng nhớ lần chờ dài, không phải giá trị trung bình, nên một cam kết theo bách phân vị như "chín trong mười sự cố mức ưu tiên này được khôi phục trong một thời gian nêu rõ" khớp với trải nghiệm của họ tốt hơn nhiều so với một giá trị trung bình.

### Góc nhìn ITIL và linh hoạt khác nhau ra sao

Góc nhìn ITIL có xu hướng bắt đầu từ một mức ưu tiên và một mục tiêu. Tác động và độ khẩn đặt ra một mức ưu tiên, mức ưu tiên đặt ra các mục tiêu thời gian phản hồi và giải quyết, và một thỏa thuận mức dịch vụ có thể gắn hậu quả cho việc trượt chúng. Điều này có trật tự và dễ kiểm toán, và dễ bị lợi dụng như các mục tiêu mời gọi (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Góc nhìn linh hoạt và SRE bắt đầu từ tác động đến người dùng và từ dòng chảy. Nó hỏi đội hạn chế tác hại nhanh đến đâu, bao nhiêu thời gian trôi qua của một sự cố là công việc tích cực và bao nhiêu là chờ đợi, và đội đã học được gì. Nó ưu tiên các thước đo tác động (người dùng bị ảnh hưởng, số phút dịch vụ suy giảm) hơn các thước đo trạng thái phiếu, và coi đồng hồ phiếu là đại diện tiện lợi nhưng không hoàn hảo. Hai góc nhìn tương thích. Hãy dùng cấu trúc mức ưu tiên của ITIL để quyết định đo gì và cho ai, và dùng tư duy dòng chảy và tác động để quyết định con số có ý nghĩa gì không.

## Nguyên tắc chính

- **Nêu tên giai đoạn, không phải "giải quyết".** Phát hiện, xác nhận, phản hồi, khôi phục và giải quyết là những câu hỏi khác nhau với những người sở hữu khác nhau. Hãy báo cáo từng cái dưới tên riêng của nó.
- **Viết ra cả hai đồng hồ.** Mỗi thước đo thời gian nêu sự kiện nào bắt đầu nó, sự kiện nào dừng nó, và trạng thái nào tạm dừng nó. Phần lớn việc lợi dụng sống ở các ranh giới này.
- **Báo cáo phân phối.** Hãy cho thấy trung vị, một bách phân vị cao và tuổi của sự cố mở lâu nhất. Tránh một giá trị trung bình đơn độc, vì dữ liệu lệch làm nó không đáng tin.
- **Đo khôi phục riêng khỏi đóng phiếu.** Người dùng quan tâm khi nào dịch vụ trở lại. Phiếu có thể đóng sau đó, khi nguyên nhân được xử lý.
- **Ghép tốc độ với độ bền.** Một lần khôi phục nhanh mà chính sự cố đó làm hỏng vào ngày hôm sau không phải là cải thiện. Hãy cho thấy tỷ lệ tái diễn và mở lại bên cạnh mọi thước đo thời gian.
- **Mô tả đội, dịch vụ và hệ thống.** Không bao giờ xếp hạng từng nhân viên hay kỹ sư theo thời gian phản hồi hay giải quyết.
- **Phân đoạn trước khi so sánh.** So sánh cái giống cái, theo mức ưu tiên và theo dịch vụ, vì một con số pha trộn gộp việc đặt lại mật khẩu với lỗi cơ sở dữ liệu.

## Định nghĩa chỉ số

Mỗi hàng nêu các đồng hồ của nó. Thời gian lịch và thời gian làm việc khác nhau: hãy nói bạn dùng cái nào. Nơi một thước đo dùng bách phân vị, bảng đưa ra thứ 50 và thứ 95, và các đội có thể thêm thứ 85.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian phát hiện | Một lỗi ảnh hưởng đến người dùng bao lâu trước khi tổ chức biết | Đồng hồ bắt đầu ở khoảnh khắc đầu tiên tác động đến người dùng (lấy từ dữ liệu giám sát hoặc thời điểm bắt đầu tác động đã xác nhận ghi trong buổi rà soát); dừng ở cảnh báo hoặc báo cáo người dùng đầu tiên. Báo cáo dưới dạng trung vị và bách phân vị thứ 95 theo từng dịch vụ. Các sự cố không biết điểm bắt đầu được đếm và báo cáo riêng, không bị bỏ | phút | Nền tảng giám sát và cảnh báo; bản ghi sự cố có trường bắt đầu tác động | Quản lý sự cố; giám sát và quản lý sự kiện | Công việc về khả năng quan sát và chất lượng cảnh báo (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo) | Hằng tháng |
| Thời gian xác nhận | Một cảnh báo hoặc phiếu được nêu chờ bao lâu trước khi có người sở hữu | Đồng hồ bắt đầu khi cảnh báo kích hoạt hoặc phiếu được ghi; dừng khi một người hay đội có tên nhận nó. Tự động giao việc không dừng đồng hồ. Báo cáo dưới dạng trung vị và bách phân vị thứ 95 theo mức ưu tiên | phút | Công cụ gọi trực; lịch sử giao việc của công cụ ITSM | Quản lý sự cố; bàn dịch vụ | Phản hồi trực ca trong một vòng trực SRE | Hằng tháng |
| Thời gian đến phản hồi đầu | Người dùng chờ bao lâu cho một câu trả lời hữu ích đầu tiên của con người | Đồng hồ bắt đầu khi sự cố được ghi; dừng ở thông điệp hoặc hành động đầu tiên của con người giải quyết báo cáo. Các xác nhận tự động và biên nhận theo mẫu bị loại trừ. Đồng hồ giờ làm việc được nêu rõ | phút hoặc giờ làm việc | Nhật ký liên lạc của công cụ ITSM | Bàn dịch vụ; quản lý sự cố | Phản hồi kịp thời cho người dùng, như trong một thỏa thuận làm việc | Hằng tuần |
| Thời gian khôi phục | Người dùng không có dịch vụ hoạt động bao lâu | Đồng hồ bắt đầu ở lúc bắt đầu tác động đến người dùng; dừng khi người dùng lại dùng được dịch vụ, gồm cả bằng cách lách hoặc hoàn tác. Nguyên nhân được sửa sau đó không kéo dài nó. Báo cáo dưới dạng trung vị và bách phân vị thứ 95 theo mức ưu tiên và dịch vụ | phút hoặc giờ | Bản ghi sự cố có dấu thời gian bắt đầu tác động và khôi phục; giám sát | Quản lý sự cố | Thời gian trung bình để khôi phục theo thuật ngữ DORA, đọc dưới dạng phân phối (xem chủ đề 2.8, Chỉ số DORA) | Hằng tháng |
| Thời gian giải quyết | Bản ghi sự cố mở bao lâu cho đến khi đóng | Đồng hồ bắt đầu khi sự cố được ghi; dừng khi nó được đóng sau khôi phục và xác nhận của người dùng hoặc một khoảng chờ hợp lý. Thời gian trong "chờ khách hàng" được cho thấy là một tỷ lệ riêng được báo cáo và không bị trừ khỏi số liệu tiêu đề. Báo cáo dưới dạng trung vị và bách phân vị thứ 95 theo mức ưu tiên | giờ hoặc giờ làm việc | Lịch sử trạng thái của công cụ ITSM | Quản lý sự cố | Thời gian chu trình cho công việc ngoài kế hoạch (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy) | Hằng tháng |
| Tuổi sự cố mở lâu nhất | Sự cố mở lâu năm nhất đã mở bao lâu | Hiện tại trừ thời điểm ghi, cho mỗi sự cố đang mở, liệt kê vài cái cũ nhất theo mức ưu tiên. Các trạng thái tạm dừng không bị trừ | ngày | Danh sách sự cố đang mở của công cụ ITSM | Quản lý sự cố | Tuổi hạng mục công việc trên bảng đội (xem chủ đề 2.1, Các thước đo dòng chảy) | Hằng tuần |
| Tỷ lệ thời gian tích cực | Tỷ lệ thời gian trôi qua của một sự cố dành cho công việc tích cực thay vì chờ đợi | Tổng thời gian ở các trạng thái tích cực / tổng thời gian từ lúc ghi đến lúc đóng, cho các sự cố đóng trong kỳ. Trạng thái tích cực là những trạng thái mà một người đang xử lý sự cố; các trạng thái chờ được liệt kê trong định nghĩa | phần trăm | Lịch sử trạng thái của công cụ ITSM | Quản lý sự cố | Hiệu suất dòng chảy (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy) | Hằng quý |
| Số lần giao lại | Một sự cố đổi đội sở hữu bao nhiêu lần trước khi khôi phục | Số lần đổi nhóm được giao từ lúc ghi đến lúc khôi phục, tóm tắt dưới dạng trung vị và tỷ lệ sự cố có ba lần trở lên. Đếm theo dịch vụ và mức ưu tiên, không bao giờ theo nhân viên | số đếm | Lịch sử giao việc của công cụ ITSM | Quản lý sự cố; bàn dịch vụ | Số lần bàn giao (xem chủ đề 9.3, Chỉ số cộng tác và bàn giao) | Hằng tháng |

Hai lưu ý về dữ liệu. Thứ nhất, thời gian khôi phục chỉ tốt bằng thời điểm bắt đầu của nó. Nhiều bản ghi sự cố nắm bắt lúc ai đó gõ phiếu, có thể trễ hàng giờ so với lúc bắt đầu tác động thật. Nếu công cụ của bạn không có trường bắt đầu tác động, hãy thêm một trường, và coi các điểm bắt đầu ước lượng là ước lượng (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo). Thứ hai, khi so sánh các kỳ, hãy giữ nguyên định nghĩa mức ưu tiên, nếu không đường xu hướng sẽ phản ánh việc phân loại lại.

## Khuyến nghị

### Định nghĩa các đồng hồ

**1. Viết một tờ đồng hồ cho mỗi thước đo thời gian.** Với mỗi giai đoạn, liệt kê sự kiện bắt đầu, sự kiện dừng, các trạng thái tạm dừng đồng hồ, cơ sở thời gian (lịch hay giờ làm việc) và các trường hợp loại trừ. Giữ nó trong sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

**2. Tách khôi phục khỏi đóng phiếu.** Hãy ghi lại lúc dịch vụ trở lại cho người dùng như một dấu thời gian riêng, tách khỏi lúc phiếu đóng. Khôi phục là điều người dùng cảm nhận, và đóng phiếu gồm kiểm chứng, ghi tài liệu và xử lý nguyên nhân. Các đội dùng một dấu thời gian cho cả hai được thưởng khi đóng phiếu sớm hoặc bị phạt vì theo dõi cẩn thận.

**3. Ghi lại lúc bắt đầu tác động, không chỉ thời điểm ghi.** Yêu cầu những người xử lý điền lúc người dùng lần đầu cảm nhận tác động, dùng dữ liệu giám sát khi có thể. Đánh dấu trường là ước lượng khi nó là ước lượng. Thời gian phát hiện vô nghĩa nếu không có nó, và thời gian khôi phục bị méo khi thiếu nó.

**4. Giới hạn các trạng thái tạm dừng và báo cáo việc dùng chúng.** Chờ một khách hàng hoặc nhà cung cấp đôi khi là chính đáng. Cho phép một danh sách ngắn, có tên các trạng thái tạm dừng, yêu cầu một lý do, và cho thấy tỷ lệ thời gian sự cố dành cho mỗi trạng thái. Tỷ lệ thời gian tạm dừng tăng là dấu hiệu của sự trôi, không phải của tốc độ.

### Báo cáo trung thực

**5. Thay giá trị trung bình bằng trung vị và một bách phân vị cao.** Cho thấy bách phân vị thứ 50 và 95 cho mỗi giai đoạn, theo mức ưu tiên, dưới dạng chuỗi thời gian. Cho thấy số sự cố đứng sau mỗi điểm, vì một bách phân vị của mười sự cố là một con số yếu. Nơi số đếm nhỏ, hãy vẽ từng sự cố như các chấm và bỏ đường tóm tắt.

**6. Cho thấy tuổi của các sự cố đang mở lâu nhất.** Một biểu đồ về thời gian sự cố đã đóng mù trước các sự cố còn mở, vốn là những cái tệ nhất. Hãy liệt kê các sự cố đang mở lâu nhất theo mức ưu tiên mỗi tuần. Điều này khó cải thiện nếu không hoàn tất công việc, nên nó là bạn đồng hành hữu ích cho bất kỳ biểu đồ thời gian giải quyết nào.

**7. Phân đoạn theo mức ưu tiên và theo dịch vụ.** Một thời gian giải quyết pha trộn tăng khi cơ cấu dịch chuyển về các sự cố phức tạp, ngay cả khi mọi loại sự cố được xử lý nhanh hơn. Hãy so sánh trong một mức ưu tiên và trong một dịch vụ, và cho thấy cơ cấu bên cạnh thời gian (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố). Đừng rút ra kết luận từ một tháng mà cơ cấu đã thay đổi.

**8. Dùng giới hạn kiểm soát để tách tín hiệu khỏi nhiễu.** Thời gian sự cố biến thiên rất nhiều từ tuần này sang tuần khác mà không có gì thay đổi. Một biểu đồ kiểm soát, với giới hạn tính từ một giai đoạn ổn định, cho thấy khi nào một sự dịch chuyển đủ lớn để đáng được giải thích (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

### Ghép tốc độ với độ bền

**9. Cho thấy tỷ lệ mở lại và tái diễn bên cạnh mọi thước đo thời gian.** Tỷ lệ mở lại là tỷ lệ sự cố được mở lại trong một cửa sổ nêu rõ. Tái diễn là cùng dịch vụ và triệu chứng xuất hiện lại trong một cửa sổ. Nếu thời gian khôi phục giảm trong khi tái diễn tăng, đội đang áp dụng những bản vá nhanh. Hãy gửi các sự cố tái diễn đến quản lý vấn đề (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

**10. Đo sự chờ đợi và bàn giao, vì đó là nơi thời gian đi.** Với hầu hết dịch vụ, phần lớn thời gian trôi qua của một sự cố là chờ một người, một quyết định hoặc một nhà cung cấp, thay vì làm việc. Tỷ lệ thời gian tích cực và số lần giao lại cho thấy nên nhìn ở đâu. Cách sửa cho một thời gian giải quyết dài thường là một quy tắc định tuyến rõ ràng hơn hoặc một trực ca chung, không phải gõ nhanh hơn.

**11. Dùng mục tiêu trên bách phân vị, có con người trong vòng.** Nếu bạn cần một mục tiêu, hãy nêu nó dưới dạng một cam kết bách phân vị cho một mức ưu tiên, như "chín trong mười sự cố ưu tiên 2 được khôi phục trong một thời gian nêu rõ," và thống nhất nó với những người sẽ đạt. Hãy rà soát các lần vi phạm như câu hỏi về hệ thống, không phải lỗi của người trực (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

**12. Hỏi người dùng về trải nghiệm.** Một khảo sát ngắn trên một mẫu các sự cố đã đóng, và việc đọc các bình luận, sẽ cho biết con số có khớp với cảm giác về sự chờ đợi không. Người dùng thường quan tâm đến truyền thông kịp thời hơn là phút chính xác của việc khôi phục (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian phát hiện | Đặt lúc bắt đầu tác động muộn hơn thực tế; nới rộng ngưỡng cảnh báo để ít lỗi được tính là sự cố; chỉ đếm các sự cố mà bộ giám sát bắt được | Tỷ lệ sự cố được người dùng báo trước thay vì giám sát; rà soát định kỳ các ước lượng bắt đầu tác động so với dữ liệu giám sát |
| Thời gian xác nhận | Tự động giao hoặc tự động xác nhận để dừng đồng hồ; xác nhận cảnh báo rồi không làm gì | Thời gian đến phản hồi đầu và thời gian khôi phục cho cùng các sự cố; mẫu các cảnh báo đã xác nhận không có hoạt động sau đó |
| Thời gian đến phản hồi đầu | Gửi một trả lời theo mẫu hoặc một từ để dừng đồng hồ | Rà soát một mẫu các trả lời đầu về nội dung; liên hệ lặp lại và bình luận khảo sát |
| Thời gian khôi phục | Tuyên bố dịch vụ đã khôi phục trước khi người dùng dùng được; khôi phục bằng cách che triệu chứng; ghi các lần ngừng hoạt động là bảo trì có kế hoạch | Tái diễn trong một cửa sổ; tác động do người dùng báo sau thời điểm khôi phục; tỷ lệ sự cố bị gắn lại nhãn sau sự việc |
| Thời gian giải quyết | Chuyển phiếu vào "chờ khách hàng" hoặc "giữ lại"; đóng sau một lần cố liên lạc; tách một sự cố thành các sự cố con để đóng sự cố cha sớm | Tỷ lệ thời gian ở các trạng thái tạm dừng; tỷ lệ mở lại; tuổi sự cố mở lâu nhất; đọc một mẫu ghi chú đóng |
| Tuổi sự cố mở lâu nhất | Đóng và nêu lại phiếu cũ nhất; phân loại lại nó thành vấn đề hoặc yêu cầu để gỡ khỏi danh sách | Liên kết bản trùng với bản gốc và báo cáo tuổi được liên kết; số sự cố chuyển thành vấn đề hoặc yêu cầu mỗi kỳ |
| Tỷ lệ thời gian tích cực | Ghi công việc ngắn, vô nghĩa để đánh dấu thời gian là tích cực; chuyển sang trạng thái tích cực mà không có công sức | So sánh thời gian tích cực với các kết quả như thời gian khôi phục; mẫu các ghi chú công việc |
| Số lần giao lại | Mở lại dưới cùng đội thay vì chuyển đi; chuyển công việc qua kênh phụ để công cụ không cho thấy bàn giao | Thời gian khôi phục và mức hài lòng của người dùng; quan sát định kỳ cách công việc di chuyển giữa các đội |

Một kết quả đọc lành mạnh cho thấy trung vị và các bách phân vị đuôi dịch chuyển cùng nhau, một tỷ lệ thời gian tạm dừng nhỏ và ổn định, ít sự cố do người dùng báo trước, tái diễn giảm, và bình luận khảo sát khớp với dữ liệu phiếu. Hãy coi một cải thiện ở tiêu đề đến một mình là lời nhắc cho một buổi rà soát lợi dụng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Thời gian trung bình để khôi phục | Quen thuộc; một con số; dễ theo dõi xu hướng | Bị chi phối bởi vài sự cố dài; che giấu thay đổi thật; kém với mẫu nhỏ |
| Trung vị cộng một bách phân vị cao | Mô tả trải nghiệm điển hình và kém may; chống được ngoại lai | Cần đủ sự cố; hai con số để giải thích |
| Vẽ mọi sự cố | Cho thấy hình dạng đầy đủ và các ngoại lai; trung thực ở khối lượng thấp | Khó đọc hơn ở khối lượng cao; cần người điều phối |
| Mục tiêu theo mức ưu tiên | Kỳ vọng rõ ràng; hỗ trợ hợp đồng và leo thang | Mời gọi phân loại lại và dừng đồng hồ; có thể đẩy công sức về ranh giới mục tiêu |
| Thước đo đồng hồ phiếu | Rẻ, có sẵn trong mọi công cụ ITSM | Đo phiếu, không phải trải nghiệm của người dùng; nhạy với quy trình trạng thái |
| Thước đo dựa trên tác động | Gần với điều người dùng cảm nhận; chống được mánh khóe phiếu | Cần dữ liệu giám sát và một trường bắt đầu tác động; khó kiểm toán hơn |

Câu trả lời thực dụng là giữ đồng hồ phiếu vì công cụ nào cũng có, thêm một dấu thời gian khôi phục dựa trên tác động nơi giám sát cho phép, và dùng phân phối cho cả hai. Giá trị trung bình chấp nhận được như một mô tả thô cho một tập đơn lẻ, ổn định, lớn các sự cố tương tự, và nó không bao giờ nên là con số duy nhất trên trang.

## Câu hỏi để thảo luận với đội nhóm

**1. Giai đoạn nào của một sự cố mất nhiều thời gian nhất với chúng ta, và làm sao chúng ta biết?**
Vẽ dòng thời gian sự cố lên bảng với các giai đoạn từ lúc bắt đầu tác động đến lúc đóng. Lấy mười sự cố gần nhất và đánh dấu mỗi giai đoạn mất bao lâu, dùng dữ liệu công cụ và trí nhớ của những người xử lý. Người điều phối nên tìm giai đoạn nơi thời gian tụ lại, thường là chờ một bàn giao hoặc một quyết định, không phải công việc kỹ thuật. Thống nhất giai đoạn nào xứng đáng được chú ý trước.

**2. Đồng hồ của chúng ta bắt đầu và dừng ở đâu, và ai quyết định?**
Yêu cầu mỗi người nói khi nào họ tin một sự cố "bắt đầu" và khi nào nó "kết thúc". Các câu trả lời sẽ khác nhau, và sự khác biệt là phát hiện. So sánh chúng với các trường trong công cụ và quy trình trạng thái. Ghi lại các định nghĩa đã thống nhất trong sổ đăng ký chỉ số và ghi chú nơi công cụ chưa hỗ trợ được.

**3. Trung vị và bách phân vị thứ 95 của chúng ta sẽ cho thấy điều gì mà giá trị trung bình che giấu?**
Trước buổi họp, tính giá trị trung bình, trung vị và bách phân vị thứ 95 cho các sự cố của quý vừa qua theo mức ưu tiên. Cho thấy chúng cạnh nhau và vẽ các thời gian. Hỏi đội sẽ kết luận gì từ mỗi cái. Người điều phối nên để ý liệu một hay hai sự cố có làm dịch chuyển giá trị trung bình không và thảo luận liệu đội có tin trung vị đại diện cho sự chờ của một người dùng điển hình không.

**4. Chúng ta dành bao nhiêu thời gian để chờ thay vì làm việc, và vì sao?**
Chọn ba sự cố dài và truy lịch sử trạng thái của chúng. Đếm số giờ ở các trạng thái tích cực và số giờ ở các trạng thái chờ, và ghi lại ai hoặc cái gì được chờ. Hỏi lần chờ nào có thể được rút ngắn bằng một quyết định, một đường leo thang rõ ràng hơn, hoặc một trực ca chung.

**5. Nếu được yêu cầu cắt một phần tư thời gian giải quyết, chúng ta sẽ làm thế nào mà không giúp ích cho người dùng?**
Đây là buổi rà soát lợi dụng thu nhỏ. Liệt kê mọi động tác sẽ cải thiện con số mà không cải thiện dịch vụ, như tạm dừng đồng hồ, đóng sớm, hay gắn lại mức ưu tiên. Với mỗi động tác, hỏi một rào chắn có bắt được không. Danh sách là điểm khởi đầu cho cột vectơ lợi dụng của bạn và cho thấy nơi các định nghĩa cần siết chặt.

**6. Làm sao chúng ta biết một lần khôi phục nhanh hơn là thật?**
Hỏi bằng chứng: tái diễn, mở lại, bình luận của người dùng, và bất kỳ sự cố nào sau đó có cùng triệu chứng. Xem một cải thiện gần đây và hỏi nó có giữ vững một tháng sau không. Người điều phối nên hướng nhóm tới các bản sửa bền. Kết thúc bằng việc quyết định thước đo độ bền nào gia nhập bảng điều khiển.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội sản phẩm vận hành dịch vụ của chính mình thấy thời gian sự cố như một chi phí của công việc ngoài kế hoạch chiếm chỗ công việc có kế hoạch. Hãy theo dõi bao nhiêu mỗi kỳ dòng chảy bị sự cố chiếm, và coi các sự cố lặp lại là hạng mục tồn đọng cho đội sở hữu. Các thực hành phát hành làm hoàn tác nhanh rút ngắn khôi phục, nên thời gian sự cố một phần là một thước đo phân phối (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

### Đội dịch vụ và vận hành

Các đội vận hành sở hữu các đồng hồ và cảm nhận áp lực của các mục tiêu. Họ nên công bố tờ đồng hồ, kiểm toán việc dùng trạng thái tạm dừng, báo cáo trung vị và bách phân vị đuôi theo mức ưu tiên, và giữ một danh sách hằng tuần các sự cố mở lâu nhất. Tải trực ca và chất lượng cảnh báo định hình thời gian xác nhận và phát hiện, nên hãy xem chúng cùng nhau (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca).

### Lãnh đạo và quản trị

Lãnh đạo nên hỏi giai đoạn nào chậm nhất và đang làm gì về nó, không phải vì sao một con số màu đỏ. Họ nên chờ đợi báo cáo bách phân vị, một thước đo độ bền bên cạnh bất kỳ thước đo tốc độ nào, và một lời giải thích khi định nghĩa thay đổi. Tài trợ cho giám sát, sổ tay vận hành và công việc vấn đề thường sinh lời nhiều hơn áp lực lên người xử lý, vì nó giảm sự chậm trễ mà người xử lý không kiểm soát được.

### Khách hàng và người dùng

Người dùng trải nghiệm sự chờ đợi, chất lượng truyền thông, và việc vấn đề có quay lại không. Họ hiếm khi thấy tên các giai đoạn. Hãy cho họ một phản hồi đầu trung thực, nói họ nên chờ đợi điều gì, và cập nhật cho họ theo lịch. Bình luận khảo sát và liên hệ lặp lại của họ là phép kiểm tra tốt nhất xem đồng hồ phiếu có nói sự thật không.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một nền tảng đặt hàng, một dịch vụ tài khoản khách hàng và một hệ thống kho nội bộ. Các đội sản phẩm sở hữu dịch vụ của mình và dùng chung một vòng trực ca với một nhóm vận hành nhỏ. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Lãnh đạo đặt mục tiêu "thời gian giải quyết trung bình dưới bốn giờ" cho các sự cố ưu tiên 2. Trong quý đầu, bảng điều khiển cho thấy giá trị trung bình 3,8 giờ, và mục tiêu có vẻ đã đạt. Nhân viên kho nói một số lần ngừng hoạt động có vẻ kéo dài cả ngày. Trưởng vận hành vẽ 41 sự cố ưu tiên 2 (minh họa) của quý và thấy trung vị 1,5 giờ và bách phân vị thứ 95 là 11 giờ. Ba sự cố chiếm phần lớn cái đuôi dài.

Chị truy ba sự cố dài. Mỗi cái dành phần lớn thời gian ở "chờ nhà cung cấp" hoặc "chờ khách hàng". Ở hai cái, phiếu đã bị đóng và nêu lại như một sự cố mới khi bản gốc "vi phạm", điều đặt lại đồng hồ. Cái thứ ba liên quan đến bốn lần giao lại giữa các đội trong hai ngày. Một mẫu ghi chú đóng cho thấy 6 trên 30 phiếu được rà soát (minh họa) bị đóng sau một lần cố liên lạc người dùng.

Đội thực hiện bốn thay đổi. Họ thêm một trường bắt đầu tác động và một dấu thời gian khôi phục vào biểu mẫu sự cố. Họ báo cáo trung vị, bách phân vị thứ 85 và 95 theo mức ưu tiên, và các sự cố mở lâu nhất mỗi tuần. Họ cho thấy tỷ lệ thời gian ở các trạng thái tạm dừng và tỷ lệ tái diễn trên cùng trang. Và họ liên kết các phiếu nêu lại với bản gốc để tuổi được mang theo.

Ở buổi rà soát kế tiếp, giá trị trung bình tiêu đề đã tăng lên 4,6 giờ vì các phiếu nêu lại giờ được tính đầy đủ. Đội giải thích sự tăng với lãnh đạo như một sự hiệu chỉnh. Bách phân vị thứ 95 và phiếu mở lâu nhất giờ là các con số mà họ làm việc, và số lần giao lại chỉ vào một khoảng trống định tuyến giữa dịch vụ đặt hàng và hệ thống kho. Họ đồng ý thêm một bí danh trực ca chung và rà soát tác động trong quý tới thay vì đặt ngay một mục tiêu mới.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Một vòng phản hồi ngắn sau mỗi sự cố đáng kể, với các bên liên quan tham gia, giúp đội cải thiện các đồng hồ của mình. Điều cần lưu ý là các mục tiêu thời gian phản hồi tạo ra những xác nhận nhanh nhưng trống rỗng, nên hãy ghép chúng với thời gian khôi phục.

### AI

AI có thể tăng tốc phản hồi đầu, gợi ý bản sửa và tóm tắt sự cố, điều rút ngắn thời gian đến phản hồi đầu trong khi thời gian khôi phục có thể không đổi. Hãy báo cáo cả hai, cộng với tỷ lệ sự cố mà một gợi ý của AI được dùng và tỷ lệ tái diễn. Điều cần lưu ý là một trả lời AI nhanh mà sai thêm việc, nên hãy đếm các sự cố được mở lại.

### Tự động hóa

Hãy tính mỗi đồng hồ từ dấu thời gian sự kiện trong công cụ, với lý do tạm dừng được ghi lại, và đo chẩn đoán và khắc phục tự động về các hành động sai cũng như về thời gian tiết kiệm. Điều cần lưu ý là một tự động hóa khôi phục dịch vụ mà không ghi nguyên nhân sẽ giấu hồ sơ vấn đề.

### Phân tích

Hãy báo cáo trung vị và một bách phân vị cao cho mỗi đồng hồ cùng sự cố mở lâu nhất, và cho thấy có bao nhiêu sự cố đứng sau chúng. Quyết định được cung cấp thông tin là người dùng chờ lâu nhất ở đâu. Điều cần lưu ý là định nghĩa đồng hồ khác nhau giữa các công cụ, nên hãy viết ra các sự kiện bắt đầu và dừng trước khi so sánh các đội.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Khối lượng thấp, nên bách phân vị nhiễu và một biểu đồ từng sự cố tốt hơn một bản tóm tắt. Một người thường phát hiện, phản hồi và khôi phục, nên việc tách giai đoạn ít quan trọng hơn một dòng thời gian bằng văn bản của mỗi sự cố. Hãy thêm một ghi chú bắt đầu tác động vào mọi bản viết sau sự cố và tính các trung vị đơn giản khi có đủ sự cố.

**Doanh nghiệp nhỏ.** Một nhà cung cấp dịch vụ được quản lý hoặc một chuyên viên CNTT tổng quát có thể xử lý sự cố, và hợp đồng của nhà cung cấp có thể định nghĩa các mục tiêu phản hồi và giải quyết. Hãy đọc kỹ các đồng hồ hợp đồng, vì chúng thường khác với trải nghiệm của người dùng. Giữ một nhật ký ngắn về bắt đầu tác động và khôi phục cho các sự cố quan trọng, và yêu cầu nhà cung cấp cho các bản ghi bên dưới, vì một số liệu tóm tắt giấu các đồng hồ.

**Doanh nghiệp lớn.** Nhiều đội, nhà cung cấp và lược đồ mức ưu tiên khiến việc so sánh hấp dẫn và gây hiểu lầm. Hãy chuẩn hóa định nghĩa đồng hồ và ý nghĩa mức ưu tiên toàn tổ chức, công bố phân phối thay vì giá trị trung bình, và phân đoạn theo dịch vụ. Hãy để ý sự trôi trạng thái tạm dừng và phân loại lại, vốn lớn lên cùng số lớp báo cáo.

**Chính phủ và khu vực công.** Hợp đồng, báo cáo theo luật và kiểm toán có thể ấn định các đồng hồ và định nghĩa mức ưu tiên. Hãy đáp ứng các nghĩa vụ đó đúng như đã viết, và giữ một góc nhìn thứ hai, hướng tới người dùng bên cạnh, để sự tuân thủ không che giấu một trải nghiệm kém. Hãy cởi mở về các định nghĩa và về các hiệu chỉnh khi một quy tắc đồng hồ thay đổi (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của chủ đề này chủ yếu là thiết kế và kỷ luật. Mất vài giờ để viết các tờ đồng hồ, một ít cấu hình để thêm một trường bắt đầu tác động và một dấu thời gian khôi phục, và công sức vừa phải để dựng các báo cáo bách phân vị. Nơi công cụ ITSM hay nền tảng giám sát đã giữ các dấu thời gian, việc trích xuất là một nhiệm vụ một lần. Chi phí lặp lại là một buổi rà soát hằng tháng và một mẫu hằng quý các sự cố đã đóng.

Lợi tức đến từ quyết định tốt hơn và ít làm lại hơn. Báo cáo phân phối cho thấy một cải thiện có hiệu quả không, và báo cáo giai đoạn hướng công sức đến sự chậm trễ thật, như bàn giao, khoảng trống phát hiện hay sự chờ nhà cung cấp. Các thước đo độ bền ngăn việc tiết kiệm giả của các bản vá nhanh quay lại dưới dạng sự cố lặp lại. Hãy đo đường cơ sở của riêng bạn trong một quý, thực hiện một thay đổi, và so sánh các phân phối.

## Phản mẫu và cạm bẫy

- **Một MTTR đơn lẻ trên bảng điều khiển điều hành.** Giá trị trung bình của dữ liệu lệch gây hiểu lầm. Hãy cho thấy trung vị, một bách phân vị cao và sự cố mở lâu nhất, và nói có bao nhiêu sự cố đứng sau mỗi điểm.
- **Trộn các mức ưu tiên và dịch vụ.** Một sự dịch chuyển cơ cấu trông như một thay đổi hiệu suất. Hãy phân đoạn theo mức ưu tiên và dịch vụ, và cho thấy cơ cấu.
- **Dừng đồng hồ bằng các trạng thái tạm dừng.** Thời gian biến mất vào "chờ" và "giữ lại". Hãy liệt kê các trạng thái được phép, yêu cầu lý do, và báo cáo tỷ lệ thời gian ở mỗi trạng thái.
- **Đóng và nêu lại phiếu.** Nó đặt lại tuổi và giấu sự cố dài. Hãy liên kết các phiếu nêu lại với bản gốc và báo cáo tuổi được liên kết.
- **Dùng một dấu thời gian cho cả khôi phục và đóng phiếu.** Khi đó các đội được thưởng khi đóng sớm hoặc bị phạt vì theo dõi cẩn thận. Hãy ghi lại cả hai và báo cáo cả hai.
- **Xếp hạng nhân viên hoặc kỹ sư theo thời gian giải quyết.** Nó thưởng cho phiếu dễ và việc chọn lựa, và làm nản sự giúp đỡ và leo thang. Chỉ báo cáo theo đội và dịch vụ.
- **Mục tiêu không có thước đo độ bền.** Một bản vá nhanh hỏng vào ngày mai trông như thành công. Hãy cho thấy tỷ lệ tái diễn và mở lại bên cạnh mọi mục tiêu.
- **Coi mẫu nhỏ là xu hướng.** Một bách phân vị thứ 95 từ một nhúm sự cố là một phỏng đoán. Hãy vẽ từng sự cố và chờ thêm dữ liệu trước khi vẽ một đường.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | Mỗi người đo khác nhau; một "thời gian giải quyết" | Đồng hồ được viết cho một số đội; các giai đoạn được tách một phần | Một tờ đồng hồ cho mọi giai đoạn, với các trạng thái tạm dừng được liệt kê | Định nghĩa được rà soát và thay đổi được ghi lại kèm lý do | Định nghĩa được căn chỉnh với nhà cung cấp và khách hàng, được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Chất lượng dữ liệu | Ghi chú thủ công; bắt đầu tác động không biết | Dấu thời gian công cụ cho phiếu đã ghi và đã đóng | Bắt đầu tác động và khôi phục được ghi cho các sự cố ưu tiên | Dữ liệu được kiểm toán bằng lấy mẫu; ước lượng được đánh dấu | Dữ liệu giám sát và ITSM được ghép tự động và được tin cậy giữa các đội |
| Thực hành thống kê | Chỉ giá trị trung bình | Giá trị trung bình và trung vị được cho thấy | Trung vị và một bách phân vị cao theo mức ưu tiên và dịch vụ | Giới hạn kiểm soát được dùng; thước đo độ bền được ghép đôi | Phân phối được nối với trải nghiệm người dùng và dùng để quyết định đầu tư ở đâu |
| Sử dụng trong cải tiến | Các con số dùng để đuổi theo cá nhân | Đội thấy các con số của chính mình | Đội rà soát thời gian giai đoạn và sự chờ đợi hằng tháng | Các giai đoạn chậm dẫn đến công việc cải tiến được tài trợ | Cải tiến được chia sẻ giữa các đội và nhà cung cấp và các thước đo tiến hóa |

## Danh sách kiểm tra

- [ ] Mỗi giai đoạn (phát hiện, xác nhận, phản hồi, khôi phục, giải quyết) có quy tắc bắt đầu, dừng và tạm dừng bằng văn bản.
- [ ] Bắt đầu tác động và thời gian khôi phục được ghi như các trường riêng cho các sự cố ưu tiên.
- [ ] Báo cáo cho thấy trung vị và một bách phân vị cao, theo mức ưu tiên và theo dịch vụ.
- [ ] Số sự cố đứng sau mỗi điểm được báo cáo được hiển thị.
- [ ] Các sự cố mở lâu nhất được liệt kê hằng tuần.
- [ ] Các trạng thái tạm dừng là một danh sách ngắn, có tên và tỷ lệ thời gian của chúng được báo cáo.
- [ ] Tỷ lệ mở lại và tái diễn được cho thấy bên cạnh mọi thước đo thời gian.
- [ ] Các phiếu nêu lại được liên kết với bản gốc để tuổi được mang theo.
- [ ] Không thước đo thời gian nào được dùng để xếp hạng từng nhân viên hay kỹ sư.
- [ ] Một mẫu các sự cố đã đóng được đọc mỗi quý để kiểm tra tính trung thực.
- [ ] Bình luận khảo sát khách hàng được đọc bên cạnh dữ liệu phiếu.

## Lời nhắc AI

**So sánh giá trị trung bình và các bách phân vị của thời gian sự cố của chúng ta.**

```text
I will paste incident records for [service or team] covering [period]. Fields:
[list fields such as logged time, impact start, restore time, closed time,
priority, status history]. Compute the median, the 85th percentile, the 95th
percentile, and the mean of [stage name, for example time to restore] by
[priority], and show how many incidents sit behind each figure. Describe how far
the mean differs from the median and which incidents drive that difference. Do
not invent data or benchmark values. List your assumptions, any rows you
excluded, and anything the data could not tell you.

[paste incident data with personal data removed]
```

**Soạn một tờ đồng hồ cho các thước đo thời gian sự cố của chúng ta.**

```text
Draft a clock sheet for [team name] covering time to detect, time to
acknowledge, time to first response, time to restore, and time to resolve. Our
ITSM tool is [tool name], our monitoring is [monitoring tool], and our status
workflow is [list of statuses]. For each stage, give the start event, stop
event, pause states, time basis ([calendar or business hours]), exclusions, and
a gaming vector with a guardrail. Mark every item you had to assume and list
questions I should answer to complete the sheet. Do not invent targets.
```

**Tìm thời gian trôi qua đi đâu trong vài sự cố dài.**

```text
Here is the status history for [number] long incidents from [service]. For each
incident, list the time spent in each status, mark the active and waiting
states using this rule: [which statuses count as active], and note every
reassignment between [teams or groups]. Report patterns across incidents, not
individuals, and suggest which stage deserves attention first. Do not guess at
causes the data does not show. List your assumptions and what extra fields
would help.

[paste status histories with personal data removed]
```

**Chạy một buổi rà soát lợi dụng trên các mục tiêu thời gian sự cố của chúng ta.**

```text
We report [metric name] for [priority or service], defined as [definition with
start and stop events]. The target is [target] and the audience is [audience].
List realistic ways the number could improve without helping users, such as
clock pausing, early closure, relabelling, or re-raising tickets. For each way,
propose a guardrail measure or practice that would reveal it, and state how that
guardrail could itself be gamed. Do not invent benchmarks or statistics. List
your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề liên quan và rào chắn ghép đôi cho một thước đo thời gian sự cố bạn sắp báo cáo.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một thay đổi đối với chủ đề này giữ mẫu, bảng lợi dụng và các tham chiếu chéo nhất quán.

## Điểm chính cần nhớ

- Một sự cố có các giai đoạn, và mỗi giai đoạn có đồng hồ, người sở hữu và đối sách riêng. Hãy nêu tên giai đoạn bạn đang đo.
- Thời gian sự cố bị lệch, nên giá trị trung bình gây hiểu lầm. Hãy báo cáo trung vị, một bách phân vị cao và tuổi của sự cố mở lâu nhất.
- Viết ra nơi mỗi đồng hồ bắt đầu và dừng, ghi bắt đầu tác động và khôi phục tách khỏi đóng phiếu, và giới hạn các trạng thái tạm dừng.
- Ghép mọi thước đo tốc độ với một thước đo độ bền như tỷ lệ tái diễn và mở lại.
- Mô tả đội và dịch vụ, không bao giờ từng nhân viên, và đọc một mẫu các sự cố đã đóng để kiểm tra các con số có trung thực không.

## Tài liệu tham khảo và đọc thêm

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
