# Công việc vận hành và công việc ngoài kế hoạch

**Một đội xây dựng và vận hành một dịch vụ có một nguồn năng lực chung, nên hãy làm cho sự phân chia giữa thay đổi có kế hoạch và công việc vận hành hiển thị, bảo vệ nó bằng các quy tắc tường minh cho gián đoạn và việc chen ngang khẩn cấp, và đọc tỷ lệ công việc ngoài kế hoạch như một tín hiệu về hệ thống chứ không phải một phán quyết về con người.**

## Tổng quan và động lực

Mọi đội xây dựng và vận hành một dịch vụ dành thời gian cho hai loại công việc lớn. **Công việc thay đổi** đưa dịch vụ tiến lên: tính năng mới, cải tiến có kế hoạch, di chuyển và loại bỏ các điểm yếu đã biết. **Công việc vận hành (run)**, còn gọi là công việc vận hành, giữ cho dịch vụ chạy: trả lời sự cố và yêu cầu, ứng phó cảnh báo, áp dụng các bản vá thường lệ, khôi phục quyền truy cập, và xử lý các tác vụ thủ công mà dịch vụ vẫn đòi hỏi. Cả hai đều chính đáng, và một dịch vụ có người dùng cần cả hai. Rắc rối bắt đầu khi không ai nói được đội đang làm bao nhiêu mỗi loại, vì khi đó kế hoạch âm thầm giả định một năng lực mà công việc vận hành đã tiêu thụ.

Công việc cũng có thể được phân loại theo việc nó có được thấy trước không. **Công việc có kế hoạch** được chọn trước khi kỳ bắt đầu, ví dụ trong lúc lập kế hoạch hoặc một cam kết hằng quý. **Công việc ngoài kế hoạch** đến trong kỳ và đòi hỏi sự chú ý chưa được lập ngân sách: một sự cố trên môi trường thật, một yêu cầu khẩn từ một bên liên quan cấp cao, một bản sửa bảo mật, hoặc một lỗi chặn một khách hàng. Hai trục chồng lên nhau nhưng không giống nhau. Hầu hết công việc vận hành là ngoài kế hoạch về thời điểm ngay cả khi khối lượng của nó dự đoán được, và một số công việc vận hành, như gia hạn chứng chỉ theo lịch, là hoàn toàn có kế hoạch. Công việc thay đổi cũng có thể là ngoài kế hoạch, như khi một quy định thay đổi và một đội phải phản ứng trong vài tuần.

Góc nhìn linh hoạt và ITIL mô tả cùng áp lực bằng những lời khác nhau. Trong lập kế hoạch theo khoảng thời gian cố định, một cam kết là một dự báo về năng lực, và công việc đến giữa kỳ hoặc chiếm chỗ của thứ gì đó hoặc bị hoãn. Trên một bảng dòng chảy, công việc đang làm dở có giới hạn tường minh và thường có một làn riêng cho các hạng mục khẩn, và câu hỏi là hệ thống hấp thụ được bao nhiêu hạng mục khẩn trước khi dòng chảy sụp đổ (xem chủ đề 2.1, Các thước đo dòng chảy). Trong ITIL 4 (phiên bản xuất bản năm 2019), quản lý sự cố, quản lý yêu cầu dịch vụ và quản lý vấn đề mô tả công việc vận hành được tiếp nhận, xếp ưu tiên và giải quyết ra sao, trong khi hỗ trợ thay đổi và thực hành phát triển và quản lý phần mềm quản trị thay đổi có kế hoạch. Các thực hành mô tả quy trình. Chúng hiếm khi nói một đội đơn lẻ nên chia giờ của mình giữa chúng ra sao, và khoảng trống đó là nơi chủ đề này làm việc.

Một số thuật ngữ lặp lại ở đây. Một **gián đoạn (interrupt)** là bất kỳ nhu cầu nào đến ngoài chu kỳ lập kế hoạch và kéo một người khỏi hạng mục họ đang làm. **Tải gián đoạn** là tổng tác động của những nhu cầu đó lên một đội trong một kỳ, đo bằng số đếm, bằng giờ, hoặc bằng tỷ lệ năng lực chúng tiêu thụ. Một **việc chen ngang khẩn cấp (expedite)** là một hạng mục công việc được phép nhảy hàng đợi, thường vì [chi phí của sự chậm trễ](https://en.wikipedia.org/wiki/Cost_of_delay) của nó cao và tức thì. Một **làn khẩn cấp** là một quy tắc, thường là một hàng riêng trên bảng, giới hạn bao nhiêu việc chen ngang được tiến hành cùng lúc. **Phân bổ năng lực** là sự chia tường minh năng lực của một đội giữa các loại công việc, ví dụ một tỷ lệ nêu rõ cho thay đổi có kế hoạch, một tỷ lệ cho công việc vận hành và một tỷ lệ cho cải tiến.

Công việc ngoài kế hoạch là khoản thuế ẩn lớn nhất đánh vào phân phối có kế hoạch: mỗi gián đoạn tốn thời gian của chính nó cộng với thời gian phục hồi mất do [chuyển đổi tác vụ](https://en.wikipedia.org/wiki/Task_switching_(psychology)), và nghiên cứu về công việc bị gián đoạn (Mark, Gudith và Klocke, 2008) thấy rằng con người bù lại bằng cách làm nhanh hơn với cái giá là căng thẳng hơn. Một lưu ý về hướng đi. Tỷ lệ công việc ngoài kế hoạch cao tự nó không phải một khuyết điểm. Một dịch vụ mới ra mắt, một sự cố ngừng hoạt động đang diễn ra, hoặc một sự kiện chịu quy định có thể chính đáng tiêu thụ phần lớn năng lực của đội trong một thời gian. Mục đích không phải là đẩy công việc ngoài kế hoạch về không hay giấu nó, mà là thấy nó, định giá nó, và quyết định có chủ ý đội sẽ hấp thụ bao nhiêu và tổ chức phải sửa ở thượng nguồn bao nhiêu. Công việc ngoài kế hoạch tái diễn vì cùng một nguyên nhân là loại hữu ích nhất để tìm, vì nó chỉ vào một hồ sơ vấn đề, một khoảng trống giám sát, hoặc một hạng mục [nợ kỹ thuật](https://en.wikipedia.org/wiki/Technical_debt) rẻ để gỡ bỏ hơn là tiếp tục trả giá.

## Nguyên tắc chính

- **Năng lực là hữu hạn và dùng chung.** Mỗi giờ dành cho công việc vận hành hoặc một việc chen ngang là một giờ không dành cho thay đổi có kế hoạch, nên hãy làm sự chia này tường minh và hiển thị thay vì để nó nảy sinh từ người la to nhất.
- **Phân loại công việc khi nó đến, không phải sau đó.** Gắn thẻ mỗi hạng mục là có kế hoạch hay ngoài kế hoạch và là thay đổi hay vận hành vào lúc nó vào hệ thống, vì việc phân loại lại cuối kỳ là một hồi tưởng chứ không phải một quan sát.
- **Gián đoạn có giá vượt quá thời lượng của chúng.** Hãy tính cả chi phí phục hồi của việc chuyển đổi cũng như số phút đã dùng, và ưu tiên các thiết kế gom lô hoặc định tuyến gián đoạn đến một người có tên.
- **Chen ngang theo quy tắc, không theo cấp bậc.** Một làn khẩn cấp có giới hạn và bài kiểm tra đầu vào bảo vệ dòng chảy; việc chen ngang không giới hạn theo thâm niên loại bỏ nó.
- **Dự trữ năng lực có chủ đích.** Một vùng đệm có kế hoạch trung thực hơn một kế hoạch giả định không có.
- **Coi công việc ngoài kế hoạch lặp lại là khuyết điểm của hệ thống.** Một lần lặp hằng tuần là ứng viên cho một hồ sơ vấn đề hoặc một tự động hóa.
- **Đo các đội và dịch vụ, không bao giờ cá nhân.** Người trả lời nhiều gián đoạn nhất thường là người biết nhiều nhất; xếp hạng họ trừng phạt sai thứ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Định nghĩa chỉ số

Bảy chỉ số mô tả năng lực được chia và bị xáo trộn ra sao. Mỗi cái cần một quy tắc phân loại bằng văn bản, vì tất cả đều phụ thuộc vào cách hạng mục được gắn thẻ. Kỳ trong mỗi công thức là cùng một cửa sổ cố định của đội, như một tuần, một tháng hoặc một quý.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ công việc ngoài kế hoạch | Tỷ lệ các hạng mục công việc đã hoàn tất, theo số đếm, không nằm trong kế hoạch ở đầu kỳ | số hạng mục hoàn tất trong kỳ đã vào bảng hoặc tồn đọng sau khi kỳ bắt đầu / tất cả hạng mục hoàn tất trong kỳ; đồng hồ bắt đầu ở sự kiện lập kế hoạch, dừng ở cuối kỳ; các hạng mục bị hủy và còn mở bị loại trừ | phần trăm | Trình theo dõi vấn đề kèm thời điểm tạo hạng mục và ảnh chụp kế hoạch | Quản lý sự cố; quản lý yêu cầu dịch vụ | Thay đổi phạm vi; các loại hạng mục công việc | Hằng tháng |
| Mức tuân thủ phân bổ năng lực | Công sức thực tế khớp với sự chia đã nêu giữa công việc thay đổi, vận hành và cải tiến sát đến đâu | với mỗi hạng mục, chênh lệch tuyệt đối giữa tỷ lệ thực tế và tỷ lệ đã thỏa thuận, cộng lại và chia đôi; tỷ lệ thực tế là số hạng mục hoàn tất (hoặc công sức ghi lại nơi đội ghi) trong hạng mục đó / tất cả hạng mục hoàn tất; các hạng mục không có loại được báo cáo riêng và không bị bỏ | điểm phần trăm | Trường loại công việc của trình theo dõi, và bản ghi thời gian nơi chúng tồn tại | Cải tiến liên tục; quản lý năng lực và hiệu năng | Phân bổ năng lực hoặc lập kế hoạch năng lực | Hằng tháng |
| Tỷ lệ gián đoạn | Các nhu cầu ngoài kế hoạch đến đội và đến những người làm công việc có kế hoạch thường xuyên đến đâu | số gián đoạn đội nhận được trong kỳ / số ngày làm việc trong kỳ, trong đó một gián đoạn là bất kỳ phiếu, cuộc gọi trực, yêu cầu tin nhắn hay đề nghị nào được ghi vào kênh tiếp nhận của đội mà chưa có trong kế hoạch; các bản trùng lặp của cùng một nhu cầu bên dưới được đếm một lần | gián đoạn mỗi ngày làm việc | Nhật ký kênh tiếp nhận, hàng đợi ITSM, hệ thống cảnh báo và nhật ký gián đoạn của đội | Quản lý sự cố; quản lý yêu cầu dịch vụ; giám sát và quản lý sự kiện | Nhật ký gián đoạn hoặc thỏa thuận làm việc của đội | Hằng tuần |
| Tỷ lệ chen ngang khẩn cấp | Tỷ lệ các hạng mục hoàn tất đã dùng làn khẩn cấp | số hạng mục hoàn tất trong kỳ đã vào làn khẩn cấp / tất cả hạng mục hoàn tất trong kỳ; đồng hồ bắt đầu khi hạng mục được đánh dấu khẩn cấp và dừng khi hoàn tất; các hạng mục bị hạ khỏi làn trước khi công việc bắt đầu được đếm riêng | phần trăm | Lịch sử làn của bảng hoặc lịch sử trường mức ưu tiên | Quản lý sự cố; hỗ trợ thay đổi (thay đổi khẩn cấp) | Hạng dịch vụ khẩn cấp | Hằng tháng |
| Công việc có kế hoạch bị đẩy chỗ | Số hạng mục có kế hoạch bị đẩy ra hoặc bỏ để nhường chỗ cho công việc ngoài kế hoạch | số hạng mục có kế hoạch bị gỡ khỏi kỳ, bị hoãn, hoặc để dở với lý do ghi là "bị công việc ngoài kế hoạch chiếm chỗ" trong kỳ (số đếm); các hạng mục bị gỡ vì mục tiêu thay đổi bị loại trừ | số hạng mục | Lịch sử thay đổi của bảng, với trường lý do | Hỗ trợ thay đổi; cải tiến liên tục | Bảo vệ mục tiêu phân phối; thương lượng phạm vi | Hằng tháng |
| Tỷ lệ công việc ngoài kế hoạch lặp lại | Tỷ lệ các hạng mục ngoài kế hoạch có nguyên nhân khớp với một hạng mục ngoài kế hoạch trước đó trong cửa sổ nhìn lại | số hạng mục ngoài kế hoạch hoàn tất trong kỳ liên kết với cùng hồ sơ vấn đề, quy tắc cảnh báo hay thẻ nguyên nhân như một hạng mục trước đó trong cửa sổ nhìn lại (ví dụ 90 ngày) / tất cả hạng mục ngoài kế hoạch hoàn tất trong kỳ; các hạng mục không có thẻ nguyên nhân được báo cáo thành số đếm chưa phân loại riêng | phần trăm | Bản ghi sự cố và vấn đề ITSM, thẻ nguyên nhân của trình theo dõi | Quản lý vấn đề; quản lý lỗi đã biết | Mục hành động từ buổi nhìn lại; thẻ lỗi tái diễn | Hằng tháng |
| Độ tin cậy cam kết có kế hoạch | Tỷ lệ các hạng mục đội đã lên kế hoạch cho kỳ mà nó hoàn tất trong kỳ | số hạng mục có kế hoạch hoàn tất trong kỳ / số hạng mục có kế hoạch ở đầu kỳ; các hạng mục được thêm sau đầu kỳ bị loại khỏi cả hai số đếm | phần trăm | Ảnh chụp kế hoạch và lịch sử hoàn tất của trình theo dõi | Quản lý mức dịch vụ; hỗ trợ thay đổi | Độ tin cậy dự báo | Hằng tháng |

Các thước đo thời gian trong chủ đề này, như tuổi của một hạng mục chen ngang, nên được cho thấy dưới dạng bách phân vị (ví dụ trung vị và bách phân vị thứ 85) chứ không phải giá trị trung bình, vì một sự cố dài làm méo một giá trị trung bình (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

## Khuyến nghị

### Làm cho sự chia hiển thị

**1. Gắn thẻ mỗi hạng mục bằng hai trường khi tiếp nhận.** Thêm một loại công việc (thay đổi, vận hành, cải tiến) và một cờ có kế hoạch (có kế hoạch, ngoài kế hoạch) vào biểu mẫu tiếp nhận của trình theo dõi hoặc công cụ ITSM, và làm cả hai bắt buộc. Các thẻ rẻ khi đặt lúc tạo và không đáng tin khi dựng lại sau đó. Viết định nghĩa của mỗi giá trị trong một câu trong thỏa thuận làm việc của đội, và rà soát nó khi các thẻ không còn mô tả công việc (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

**2. Đóng băng một ảnh chụp kế hoạch.** "Ngoài kế hoạch" chỉ có nghĩa so với một kế hoạch, nên hãy thu nhận danh sách hạng mục ở đầu kỳ và lưu nó. So sánh công việc đã hoàn tất với ảnh chụp, không phải với bảng trông ra sao vào cuối kỳ.

### Phân bổ năng lực có chủ đích

**3. Thống nhất một phân bổ năng lực và coi nó là một giả thuyết.** Hãy quyết định, như một đội và cùng chủ sở hữu sản phẩm hoặc chủ sở hữu dịch vụ, khoảng bao nhiêu phần đi vào thay đổi có kế hoạch, công việc vận hành và cải tiến. Bắt đầu từ điều dữ liệu cho thấy đội thực sự đã làm trong vài kỳ gần nhất, rồi chọn một mục tiêu dịch chuyển theo hướng bạn muốn. Xem lại sự chia ở mỗi chu kỳ lập kế hoạch; một tỷ lệ phần trăm cố định chép từ slide của đội khác là một phỏng đoán chứ không phải một quyết định.

**4. Dành sẵn một vùng đệm có cỡ từ lịch sử của chính bạn.** Dùng bản ghi gián đoạn của chính đội để định cỡ một vùng đệm cho công việc ngoài kế hoạch, ví dụ bằng cách nhìn vào khoảng giữa và khoảng trên của tỷ lệ ngoài kế hoạch hằng tuần trong các kỳ gần đây, và chỉ lập kế hoạch năng lực còn lại. Một vùng đệm thường xuyên không dùng đến có thể co lại; một vùng đệm thường xuyên cạn cần phân bổ lớn hơn hoặc một nguyên nhân được gỡ bỏ. Mối quan hệ giữa tải và độ trễ trong một hàng đợi (xem [định luật Little](https://en.wikipedia.org/wiki/Little%27s_law), và chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi) giải thích vì sao một hệ thống chạy ở mức sử dụng đầy không có chỗ hấp thụ một bất ngờ.

### Thiết kế đường đi của gián đoạn

**5. Định tuyến gián đoạn đến một vai trò có tên.** Luân phiên một người duy nhất, thường gọi là người xử lý gián đoạn, kỹ sư trực hoặc lá chắn, nhận các nhu cầu đến trong một ngày hoặc một tuần, trong khi những người khác bảo vệ sự tập trung của họ. Vai trò có phạm vi bằng văn bản, ghi chú bàn giao và giới hạn thời gian kéo dài để tải được chia công bằng. Các đội luân phiên nên nối nó với thực hành trực ca (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca).

**6. Phân loại ngay ở cửa.** Gián đoạn khác nhau rất nhiều về mức khẩn cấp. Áp dụng một quy tắc [phân loại ưu tiên](https://en.wikipedia.org/wiki/Triage) ngắn ở khâu tiếp nhận hỏi ba câu: một dịch vụ có đang ngừng hoặc một người dùng có đang bị chặn không, có một ngày không thể dời không, và nhu cầu có thể chờ đến sự kiện lập kế hoạch kế tiếp không? Các hạng mục trượt cả ba câu đi vào tồn đọng và được lập kế hoạch như bất kỳ công việc nào khác. Theo cách nói của ITIL 4, đây là bước xếp ưu tiên của quản lý sự cố và quản lý yêu cầu dịch vụ áp dụng cho khâu tiếp nhận của chính đội.

### Quản trị làn khẩn cấp

**7. Cho làn khẩn cấp một giới hạn và một bài kiểm tra đầu vào.** Làn chứa tối đa một hoặc hai hạng mục cùng lúc, và một hạng mục chỉ vào nếu chi phí của sự chậm trễ cao và tức thì và người yêu cầu nêu được nó. Một bài kiểm tra đã nêu cho phép đội nói không với yêu cầu chỉ ồn ào. Nếu làn luôn đầy, nó đã ngừng là ngoại lệ, và đội nên rà soát bài kiểm tra đầu vào và các nguyên nhân thượng nguồn. Làn là một [hạng dịch vụ](https://en.wikipedia.org/wiki/Class_of_service) với quy tắc riêng; xem tài liệu Kanban về ý tưởng nền tảng (Anderson, 2010).

### Gỡ bỏ các nguồn

**8. Liên kết các hạng mục ngoài kế hoạch với một nguyên nhân và rà soát các lần lặp.** Thêm một thẻ nguyên nhân hoặc một liên kết đến hồ sơ vấn đề cho mọi hạng mục ngoài kế hoạch. Mỗi tháng một lần, liệt kê các nguyên nhân tái diễn và gửi vài cái hàng đầu đến quản lý vấn đề, đến tồn đọng dưới dạng hạng mục nợ kỹ thuật, hoặc đến các cải tiến giám sát (xem chủ đề 4.1, Chỉ số quản lý vấn đề, và chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết). Tỷ lệ công việc ngoài kế hoạch lặp lại cho bạn biết các bản sửa đó có hiệu quả không. Mẫu hình tương tự việc loại bỏ toil được mô tả trong sách SRE của Google, nơi công việc vận hành thủ công lặp đi lặp lại được coi là thứ cần được kỹ thuật hóa để loại bỏ; cuốn sách gợi ý giữ nó dưới một tỷ lệ thời gian của một kỹ sư (Beyer và cộng sự, 2016), một hướng dẫn mà mỗi đội nên kiểm tra với dữ liệu của chính mình thay vì áp dụng như một mục tiêu.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ công việc ngoài kế hoạch | Thêm hạng mục vào ảnh chụp kế hoạch muộn để chúng được tính là có kế hoạch; để công việc khẩn không được theo dõi để nó không bao giờ được tính; gắn thẻ hạng mục có kế hoạch là ngoài kế hoạch để biện minh cho một kế hoạch bị trượt | Ảnh chụp kế hoạch đóng băng kèm dấu thời gian; số đếm chưa phân loại; một mẫu hạng mục đã đóng được đọc mỗi quý để so sánh thẻ với điều đã xảy ra |
| Mức tuân thủ phân bổ năng lực | Chuyển hạng mục giữa các loại để khớp sự chia đã thỏa thuận; tách một hạng mục thành nhiều để dịch chuyển tỷ lệ; chọn một sự chia mà đội vốn đã đạt | Định nghĩa loại cố định ghi trong thỏa thuận làm việc; một mẫu mô tả hạng mục so với loại của chúng; độ tin cậy cam kết có kế hoạch |
| Tỷ lệ gián đoạn | Biến gián đoạn thành những ơn huệ im lặng không bao giờ vào nhật ký; gộp nhiều nhu cầu thành một mục; làm nản mọi người khi hỏi | So sánh nhật ký với lưu lượng kênh tiếp nhận và lịch sử cảnh báo; hỏi đội trong buổi nhìn lại liệu nhật ký có khớp với trải nghiệm của họ |
| Tỷ lệ chen ngang khẩn cấp | Giữ công việc khẩn ngoài làn để trông có kỷ luật, hoặc đặt mọi thứ vào đó để có tốc độ; định nghĩa lại khẩn cấp thành "quan trọng" | Giới hạn làn kèm bài kiểm tra đầu vào; tỷ lệ các hạng mục chen ngang đạt bài kiểm tra khi rà soát; công việc có kế hoạch bị đẩy chỗ |
| Công việc có kế hoạch bị đẩy chỗ | Ghi việc bị đẩy chỗ là thay đổi phạm vi do lựa chọn; để các hạng mục có kế hoạch thất bại âm thầm không có lý do; tránh các hạng mục có kế hoạch có khả năng bị đẩy chỗ | Trường lý do bắt buộc trên mọi hạng mục bị gỡ hoặc để dở; độ tin cậy cam kết có kế hoạch; rà soát các lý do ở buổi nhìn lại |
| Tỷ lệ công việc ngoài kế hoạch lặp lại | Dùng thẻ nguyên nhân quá thô để các lần lặp bị giấu, hoặc quá mịn để không gì lặp; đóng hồ sơ vấn đề để gỡ liên kết | Phân loại thẻ nguyên nhân được rà soát hằng quý; số đếm chưa phân loại; kiểm tra tái diễn sau khi hồ sơ vấn đề đóng |
| Độ tin cậy cam kết có kế hoạch | Lên kế hoạch nhỏ để hoàn tất mọi thứ; độn ước lượng; tính một hạng mục dở dang là xong; bỏ các hạng mục khó trước khi kỳ bắt đầu | Kích thước và giá trị các hạng mục được lên kế hoạch so sánh theo thời gian; kiểm tra kết quả của mục tiêu phân phối; tỷ lệ công việc ngoài kế hoạch, để một giá trị cao không bị đọc là khỏe khi kế hoạch rụt rè |

Một kết quả đọc lành mạnh là một tỷ lệ công việc ngoài kế hoạch mà đội giải thích được, một làn khẩn cấp hiếm khi đầy, và một tỷ lệ lặp lại giảm sau các bản sửa. Một kết quả hoàn hảo đáng ngờ là thứ cần điều tra. Một đội báo cáo không có công việc ngoài kế hoạch hoặc có một dịch vụ rất yên tĩnh hoặc có một dịch vụ không được theo dõi, và cách phân biệt là so sánh nhật ký với lịch sử cảnh báo và phiếu.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Phân bổ năng lực cố định (các tỷ lệ phần trăm nêu rõ) | Dễ giải thích; bảo vệ công việc cải tiến khỏi bị bỏ đói | Bỏ qua biến thiên thật; có thể bị lợi dụng bằng cách gắn lại nhãn |
| Vùng đệm dự trữ có cỡ từ lịch sử | Khớp kế hoạch với tải gián đoạn thật | Cần vài kỳ dữ liệu đáng tin; có thể che giấu một nguyên nhân mãn tính |
| Người xử lý gián đoạn luân phiên | Bảo vệ sự tập trung của phần lớn đội; chia tải công bằng | Công việc có kế hoạch của chính người xử lý đình trệ; vai trò cần bàn giao và hỗ trợ |
| Giới hạn chen ngang nghiêm ngặt | Giữ dòng chảy dễ đoán; buộc nêu chi phí của sự chậm trễ | Người yêu cầu có thể đi vòng; một trường hợp khẩn thật có thể cảm giác bị chặn |
| Đếm hạng mục thay vì công sức | Đơn giản và khó thổi phồng | Coi các kích thước rất khác nhau như nhau |

Lập trường thực tế với hầu hết các đội là đếm hạng mục trước, chỉ thêm công sức nơi số đếm hạng mục gây hiểu lầm, bảo vệ một vùng đệm nhỏ và một làn khẩn cấp nhỏ, và dùng thẻ nguyên nhân để tấn công lần lặp lớn nhất.

## Câu hỏi để thảo luận với đội nhóm

**1. Bao nhiêu phần công việc đã hoàn tất của kỳ trước là ngoài kế hoạch, và làm sao chúng ta biết?**
Mở ảnh chụp kế hoạch bên cạnh danh sách hạng mục đã hoàn tất và đếm các hạng mục không có trong kế hoạch. So sánh kết quả với cảm nhận của mỗi người về kỳ đó; hai cái thường khác nhau. Người điều phối nên hỏi bao nhiêu hạng mục chưa bao giờ được ghi lại, vì câu trả lời trung thực định hình mọi con số khác.

**2. Ba nguồn gián đoạn nào tốn của chúng ta nhiều nhất, và ai có thể gỡ chúng?**
Liệt kê các nguồn theo số đếm và theo công sức chúng hấp thụ, như cảnh báo, yêu cầu lặp lại, leo thang và các đề nghị ngẫu hứng từ các bên liên quan. Đánh dấu mỗi cái là có thể gỡ, có thể định tuyến, hoặc không thể tránh. Người điều phối nên thúc đẩy một người sở hữu có tên ngoài đội cho bất kỳ nguồn nào đội không thể tự sửa.

**3. Sự chia nào giữa công việc thay đổi, vận hành và cải tiến mà chúng ta thực sự muốn?**
So sánh sự chia mà dữ liệu cho thấy với sự chia mà mọi người tin họ có và với sự chia mà lãnh đạo kỳ vọng. Thảo luận loại công việc nào đội sẽ bỏ trước dưới áp lực, vì điều đó lộ ra các ưu tiên thật. Chọn một mục tiêu cho kỳ tới và một cách kiểm tra nó.

**4. Quy tắc của chúng ta cho làn khẩn cấp là gì, và ai quyết định?**
Đọc to quy tắc hiện tại, hoặc ghi nhận rằng không có. Hỏi ba việc chen ngang gần nhất và kiểm tra mỗi cái so với một chi phí chậm trễ đã nêu. Thảo luận đội làm gì khi một người cấp cao yêu cầu chen ngang mà trượt bài kiểm tra, và ai ủng hộ quyết định.

**5. Khi bị gián đoạn, chúng ta tốn gì sau khi gián đoạn kết thúc?**
Hãy yêu cầu mọi người mô tả mất bao lâu để lấy lại vị trí của mình trong một tác vụ sau một gián đoạn điển hình.

**6. Hạng mục ngoài kế hoạch nào đã quay lại hơn một lần, và điều gì sẽ ngăn nó?**
Lấy các hạng mục ngoài kế hoạch của quý vừa qua và tìm các lần lặp theo nguyên nhân. Chọn cái có tổng công sức cao nhất và truy vì sao nó tái diễn: một cảnh báo còn thiếu, một lỗi chưa sửa, một bước thủ công, hay một vấn đề nhà cung cấp. Quyết định nó đi đến một hồ sơ vấn đề, tồn đọng, hay một cuộc trò chuyện với nhà cung cấp.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối cảm nhận công việc ngoài kế hoạch như các kế hoạch bị vỡ và dự báo trượt. Họ được lợi từ việc gắn thẻ khi tiếp nhận, một ảnh chụp kế hoạch đóng băng, và một dự báo được xây từ một vùng đệm dựa trên lịch sử (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối). Bản ghi việc bị đẩy chỗ cho các chủ sở hữu sản phẩm thấy mỗi yêu cầu muộn tốn gì.

### Đội dịch vụ và vận hành

Các đội vận hành gánh phần lớn công việc vận hành. Họ cần một người xử lý gián đoạn có tên, một quy tắc phân loại và một con đường từ các yêu cầu và cảnh báo lặp lại đến các bản sửa (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo). Tỷ lệ lặp lại là lập luận mạnh nhất của họ cho việc đầu tư vào quản lý vấn đề.

### Lãnh đạo và quản trị

Lãnh đạo đặt ra phân bổ thật qua các yêu cầu họ đưa ra và các hạn chót họ chấp nhận. Họ nên yêu cầu tỷ lệ và các nguyên nhân của nó, tài trợ công việc cải tiến loại bỏ các gián đoạn lặp lại, và tránh dùng việc chen ngang khẩn cấp như cách bình thường để hoàn thành mọi việc.

### Khách hàng và người dùng

Khách hàng thấy công việc ngoài kế hoạch như các lần ngừng hoạt động, câu trả lời chậm và tính năng bị trễ. Họ được lợi khi đội có chỗ để sửa nguyên nhân, và họ cần một con đường công bằng để nêu mức khẩn. Các thỏa thuận mức dịch vụ (xem [thỏa thuận mức dịch vụ](https://en.wikipedia.org/wiki/Service-level_agreement)) nên phản ánh tải gián đoạn mà đội gánh (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một công ty bảo hiểm y tế khu vực vận hành một nền tảng giải quyết bồi thường với một đội sản phẩm bảy người và một bàn dịch vụ dùng chung. Đội xây các tính năng mới và cũng hỗ trợ nền tảng trên môi trường thật. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Trong sáu tuần, độ tin cậy cam kết có kế hoạch của đội giảm từ khoảng 85 phần trăm xuống 55 phần trăm, và chủ sở hữu sản phẩm bắt đầu chất vấn các ước lượng của đội. Trưởng đội kéo lịch sử trình theo dõi. Dùng các ảnh chụp kế hoạch đóng băng, tỷ lệ công việc ngoài kế hoạch là 41 phần trăm theo số đếm trong kỳ mới nhất, so với hồi tưởng của đội là "có lẽ một phần năm." Số đếm chưa phân loại là 9 phần trăm, nên tỷ lệ này khá đáng tin.

Chia các hạng mục ngoài kế hoạch theo nguyên nhân cho thấy 14 trên 24 là công việc vận hành, và trong số đó, 9 truy về một tác vụ lô nộp hồ sơ bồi thường thất bại sau một thay đổi định dạng dữ liệu của một đối tác và được khởi động lại bằng tay mỗi lần. Tỷ lệ công việc ngoài kế hoạch lặp lại là 58 phần trăm. Tỷ lệ gián đoạn là 6 mỗi ngày làm việc, và 4 trong số đó đến các kỹ sư đang làm công việc có kế hoạch, vì bàn dịch vụ leo thang trực tiếp cho bất kỳ ai trả lời trước. Làn khẩn cấp giữ hai hạng mục cùng lúc hầu hết các ngày, và tỷ lệ chen ngang khẩn cấp là 23 phần trăm. Công việc có kế hoạch bị đẩy chỗ là 7 hạng mục trong kỳ, trong đó 5 mang lý do "bị công việc ngoài kế hoạch chiếm chỗ."

Đội đưa ra bốn quyết định cùng chủ sở hữu sản phẩm và chủ sở hữu dịch vụ. Thứ nhất, mỗi lần một kỹ sư trở thành người xử lý gián đoạn với phạm vi bằng văn bản và ghi chú bàn giao, và các leo thang chỉ đến người đó. Thứ hai, làn khẩn cấp được giới hạn một hạng mục, với bài kiểm tra đầu vào yêu cầu một chi phí chậm trễ đã nêu, và mỗi việc chen ngang ghi lại hạng mục mà nó đẩy chỗ. Thứ ba, sự thất bại của tác vụ lô được nêu thành một hồ sơ vấn đề, với một bản sửa và một cuộc trò chuyện với đối tác được đặt vào tồn đọng như công việc cải tiến, dùng 15 phần trăm năng lực, là tỷ lệ mà đội chọn làm phân bổ đầu tiên cho cải tiến. Thứ tư, đội lên kế hoạch cho kỳ công việc tiếp theo với một vùng đệm có cỡ từ khoảng trên của tỷ lệ ngoài kế hoạch gần đây, không phải với tải đầy.

Sáu tuần sau, tỷ lệ công việc ngoài kế hoạch là 27 phần trăm, tỷ lệ lặp lại là 22 phần trăm, tỷ lệ gián đoạn đến những người làm công việc có kế hoạch là 1,5 mỗi ngày, và độ tin cậy cam kết có kế hoạch khoảng 78 phần trăm (tất cả minh họa). Đội chưa đạt mức 85 phần trăm trước đó, và nói rõ điều đó.

Rủi ro lợi dụng mà đội bắt được: trong kỳ thứ hai dưới sự sắp xếp mới, tỷ lệ gián đoạn giảm mạnh, và trưởng đội nhận thấy mọi người đang nhắn tin trực tiếp cho người xử lý, nên các ơn huệ không bao giờ vào nhật ký. So sánh nhật ký với kênh tiếp nhận và lịch sử cảnh báo cho thấy khối lượng thật không đổi. Đội thống nhất rằng người xử lý chuyển hướng các tin nhắn trực tiếp về kênh tiếp nhận. Lỗi nằm ở thiết kế đường đi, không ở bất kỳ người nào.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Một đội xây dựng và vận hành một dịch vụ có một nguồn năng lực chung, và nhịp độ bền vững cần các giới hạn trung thực cho gián đoạn. Một bước thực tế là thống nhất một sự chia năng lực với các bên liên quan và rà soát tỷ lệ ngoài kế hoạch ở cuộc trao đổi cải tiến định kỳ. Điều cần lưu ý là một mục tiêu cho tỷ lệ ngoài kế hoạch có thể đẩy các đội gắn nhãn công việc vận hành là có kế hoạch.

### AI

AI có thể dịch chuyển công việc giữa có kế hoạch và ngoài kế hoạch, ví dụ bằng cách tự động hóa các bản sửa thường lệ trong khi thêm các tác vụ rà soát và giám sát. Hãy theo dõi tỷ lệ ngoài kế hoạch và tỷ lệ công việc ngoài kế hoạch lặp lại trước và sau các thay đổi AI, và gồm thời gian sửa đầu ra của AI như một hạng mục riêng. Điều cần lưu ý là công việc sửa ẩn có thể nuốt năng lực mà AI được cho là giải phóng.

### Tự động hóa

Hãy thu nhận loại công việc từ trình theo dõi một cách tự động với một tập nhỏ, đã thống nhất các hạng mục. Hãy đo tự động hóa theo công việc ngoài kế hoạch nó loại bỏ và theo các sự cố mới nó gây ra. Điều cần lưu ý là tự động khắc phục khởi động lại dịch vụ mà không ghi nguyên nhân khiến công việc ngoài kế hoạch lặp lại trông như công việc mới.

### Phân tích

Hãy cho thấy tỷ lệ công việc ngoài kế hoạch theo thời gian và các nguyên nhân của những hạng mục lặp lại. Quyết định được cung cấp thông tin là dự trữ bao nhiêu năng lực và loại bỏ những nguồn gián đoạn nào. Điều cần lưu ý là các hạng mục do con người chọn, nên hãy kiểm toán một mẫu hạng mục về việc phân loại trung thực.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Gần như mọi công việc đều cảm giác khẩn và vài người giống nhau làm cả công việc thay đổi lẫn vận hành. Hãy giữ phân loại ở hai thẻ và đặt một giới hạn tường minh cho việc chen ngang. Tỷ lệ ngoài kế hoạch là bằng chứng để nói "chúng tôi làm được lộ trình hoặc tải hỗ trợ, không phải cả hai."

**Doanh nghiệp nhỏ.** Một quản trị viên hoặc một đội nhỏ thường xử lý mọi yêu cầu. Hãy dùng các loại phiếu của công cụ làm phân loại, ghi nhật ký gián đoạn trong một tháng để học mẫu hình, và dự trữ một khối cố định hằng ngày cho công việc có kế hoạch. Hãy yêu cầu nhà cung cấp báo cáo khối lượng và nguyên nhân lặp lại của họ.

**Doanh nghiệp lớn.** Công việc ngoài kế hoạch của một đội thường là công việc có kế hoạch của đội khác. Hãy thống nhất các định nghĩa chung, báo cáo theo đội và theo dịch vụ, và tài trợ các bản sửa ở cấp nơi nguyên nhân tồn tại (xem chủ đề 9.3, Chỉ số cộng tác và bàn giao).

**Chính phủ và khu vực công.** Năng lực có thể bị cố định bởi trần biên chế, và công việc vận hành có thể do luật hoặc các phát hiện kiểm toán đặt ra. Hãy đưa những điều này vào phân bổ, ghi tài liệu quy tắc phân loại và giữ dấu vết kiểm toán (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là phân phối dễ đoán: một kế hoạch bỏ qua tải gián đoạn bị trượt lặp đi lặp lại, và công việc ngoài kế hoạch hiển thị cho đội một tiếng nói mạnh hơn khi nó xin thời gian để gỡ nguyên nhân.

Chi phí thu thập các thước đo này khiêm tốn khi các thẻ và ảnh chụp kế hoạch là một phần của quy trình làm việc bình thường. Các chi phí chính là thời gian để thống nhất định nghĩa, kỷ luật gắn thẻ khi tiếp nhận, một ít công cụ để ghép dữ liệu trình theo dõi và ITSM (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo), và số giờ của người xử lý gián đoạn, người có công việc có kế hoạch chậm lại. Thêm bản ghi thời gian cấp giờ tốn kém hơn đáng kể và thường bị phản đối, nên chỉ thêm khi số đếm hạng mục tỏ ra gây hiểu lầm. Tổng chi phí sở hữu bị chi phối bởi thời gian của con người, nên hãy đếm nó.

Lợi tức hiện ra ở các mẫu hình mà đội tự đo được thay vì một con số giả định. Hãy tìm tỷ lệ công việc ngoài kế hoạch lặp lại giảm sau các bản sửa vấn đề, độ tin cậy cam kết có kế hoạch tăng, ít hạng mục có kế hoạch bị đẩy chỗ hơn, và ít gián đoạn đến những người làm công việc có kế hoạch hơn. Nơi biết giờ, công sức thu hồi được từ một nguyên nhân lặp lại đã gỡ bỏ có thể được định giá theo chi phí mỗi giờ của chính đội và đặt đối lại với công sức của bản sửa (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị, và chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh). Đừng vay mượn các tỷ lệ phần trăm ngành cho công việc ngoài kế hoạch; không số liệu nào từ tổ chức khác thay thế được lịch sử của chính bạn.

## Phản mẫu và cạm bẫy

- **Coi mọi công việc ngoài kế hoạch là thất bại.** Một phần của nó là dịch vụ đang làm đúng việc của nó, và một mục tiêu bằng không đẩy công việc ra khỏi nhật ký. Thay vào đó, hãy hỏi phần nào là kỳ vọng được, phần nào tránh được, và đặt một vùng đệm cho phần đầu.
- **Văn hóa anh hùng.** Người cứu mọi trường hợp khẩn cấp trở nên không thể thay thế, mệt mỏi, và là điểm hỏng đơn lẻ. Thay vào đó, hãy chia vai trò gián đoạn theo luân phiên và thưởng cho việc gỡ nguyên nhân.
- **Cái gì cũng là việc chen ngang.** Một làn luôn đầy chỉ là một hàng đợi thứ hai. Thay vào đó, hãy đặt giới hạn, yêu cầu một chi phí chậm trễ đã nêu, và rà soát bài kiểm tra đầu vào hằng tháng.
- **Lập kế hoạch ở mức sử dụng đầy.** Một kế hoạch không có độ dư đảm bảo mọi bất ngờ đẩy chỗ một thứ gì đó. Thay vào đó, hãy định cỡ một vùng đệm từ lịch sử gián đoạn của chính bạn và lập kế hoạch năng lực còn lại.
- **Phân loại sau sự việc.** Các thẻ thêm vào cuối kỳ phản ánh trí nhớ và tâm trạng. Thay vào đó, hãy yêu cầu thẻ khi tiếp nhận và đóng băng ảnh chụp kế hoạch.
- **Hấp thụ nhu cầu trong im lặng.** Những ơn huệ không bao giờ vào nhật ký làm tải vô hình và kế hoạch sai. Thay vào đó, hãy biến một đường tiếp nhận thành quy tắc và chuyển hướng các đề nghị từ kênh phụ về đó.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Phân loại và khả năng thấy | Công việc không được gắn thẻ; công việc ngoài kế hoạch được cảm thấy, không được đếm | Một số đội gắn thẻ công việc có kế hoạch và ngoài kế hoạch bằng từ riêng của họ | Một định nghĩa bằng văn bản về các loại công việc và cờ có kế hoạch, áp dụng khi tiếp nhận kèm ảnh chụp kế hoạch | Tỷ lệ ngoài kế hoạch và số đếm chưa phân loại được theo dõi xu hướng và rà soát mỗi kỳ | Định nghĩa được chia sẻ giữa các đội và nhà cung cấp, và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Phân bổ năng lực | Năng lực được giả định là hoàn toàn sẵn có cho công việc có kế hoạch | Một vùng đệm thô được một số đội áp dụng | Một sự chia đã thỏa thuận giữa thay đổi, vận hành và cải tiến, với một vùng đệm có cỡ từ lịch sử | Mức tuân thủ được rà soát và sự chia được điều chỉnh cùng các chủ sở hữu sản phẩm và dịch vụ | Phân bổ được thương lượng giữa các đội dùng chung nền tảng, dịch vụ và con người |
| Xử lý gián đoạn và việc chen ngang | Ai cũng gián đoạn ai; mức khẩn được đặt theo thâm niên | Thói quen có người trực hoặc một hàng khẩn tồn tại ở một số đội | Một vai trò gián đoạn có tên, một quy tắc phân loại và một làn khẩn cấp với giới hạn và bài kiểm tra đầu vào | Tỷ lệ chen ngang, việc đẩy chỗ và tỷ lệ gián đoạn được rà soát cùng một rào chắn | Định tuyến gián đoạn và quy tắc chen ngang được phối hợp giữa các đội, với trực ca và đường leo thang chung |
| Gỡ bỏ nguyên nhân | Cùng các vấn đề tái diễn và được sửa bằng sự anh hùng | Một số lần lặp được nhận thấy và thảo luận trong các buổi nhìn lại | Các hạng mục ngoài kế hoạch mang thẻ nguyên nhân và các lần lặp hàng đầu đi đến quản lý vấn đề | Tỷ lệ lặp lại được theo dõi và các bản sửa được tài trợ như công việc cải tiến có kế hoạch | Nguyên nhân được truy qua các đội, nhà cung cấp và khách hàng, và cải tiến là thường lệ |

## Danh sách kiểm tra

- [ ] Mọi hạng mục công việc mang một loại công việc (thay đổi, vận hành, cải tiến) và một cờ có kế hoạch, được đặt khi tiếp nhận.
- [ ] Định nghĩa của có kế hoạch, ngoài kế hoạch, thay đổi và vận hành được viết trong thỏa thuận làm việc của đội.
- [ ] Một ảnh chụp kế hoạch được đóng băng ở đầu mỗi kỳ và được lưu.
- [ ] Tỷ lệ công việc ngoài kế hoạch được báo cáo như một xu hướng, bên cạnh số đếm chưa phân loại.
- [ ] Đội và các chủ sở hữu của nó đã thống nhất một phân bổ năng lực và rà soát nó trong quý vừa qua.
- [ ] Một đường tiếp nhận tồn tại, và các yêu cầu kênh phụ được chuyển hướng về đó.
- [ ] Một vai trò gián đoạn với phạm vi bằng văn bản được luân phiên trong đội.
- [ ] Làn khẩn cấp có một giới hạn, một bài kiểm tra đầu vào và một bản ghi về điều mỗi việc chen ngang đã đẩy chỗ.
- [ ] Các hạng mục ngoài kế hoạch mang một thẻ nguyên nhân hoặc liên kết hồ sơ vấn đề, và các lần lặp được rà soát hằng tháng.
- [ ] Các thước đo được báo cáo ở cấp đội và dịch vụ, và không bao giờ dùng để xếp hạng cá nhân.

## Lời nhắc AI

**Thiết kế một phân loại công việc cho khâu tiếp nhận.**

```text
Our team is [team description, for example a platform team of six that builds
and supports an internal service]. We use [tracker or ITSM tool]. We want to
tag every item at intake as change, run, or improvement, and as planned or
unplanned. Draft clear one-sentence definitions for each value, three edge
cases that people will argue about with a suggested ruling for each, and a
short intake form. Do not invent features of our tool or benchmark values. List
your assumptions and the questions I should answer to refine the definitions.
```

**Phân tích một nhật ký gián đoạn để tìm mẫu hình.**

```text
Here is a summary of our interrupts over [period]: [paste anonymized counts by
source, day, and type, with no names of individuals]. Group them into sources
that could be removed, routed to one person, batched, or accepted. For each
group, suggest one experiment and one measure of whether it worked. Do not
invent benchmark values or compare us to other organizations. List your
assumptions and the data you would need to be more confident.
```

**Soạn một chính sách làn khẩn cấp.**

```text
We run [flow board, time-boxed planning, continuous flow, or a hybrid] with a team of [team size]
and a service level of [service levels, if any]. Draft a one-page expedite
policy with an entry test based on a stated cost of delay, a limit on items in
the lane, a rule for what happens to the displaced item, and a monthly review
question list. Keep the language neutral and avoid naming individuals. Do not
invent thresholds; mark the ones I must choose. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề nào sở hữu một chỉ số liên quan, như khối lượng sự cố hay toil, và rào chắn thuộc về bên cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một phiên bản đã sửa của chủ đề này giữ nhất quán các đồng hồ, quy tắc phân loại và bảng lợi dụng của nó.

## Điểm chính cần nhớ

- Công việc có kế hoạch và ngoài kế hoạch, và công việc thay đổi và vận hành, dùng chung một nguồn năng lực, nên hãy làm sự chia hiển thị và thống nhất nó một cách có chủ ý.
- Gắn thẻ công việc khi tiếp nhận và đóng băng một ảnh chụp kế hoạch, vì "ngoài kế hoạch" chỉ có nghĩa so với một kế hoạch được ghi lại.
- Gián đoạn tốn thời gian phục hồi cũng như số phút, nên hãy định tuyến chúng đến một vai trò có tên và phân loại chúng ngay ở cửa.
- Một làn khẩn cấp cần một giới hạn, một bài kiểm tra đầu vào và một bản ghi về điều mỗi việc chen ngang đã đẩy chỗ.
- Công việc ngoài kế hoạch lặp lại là tín hiệu mạnh nhất cho quản lý vấn đề và công việc cải tiến, và tỷ lệ lặp lại cho thấy các bản sửa có hiệu quả không.
- Báo cáo ở cấp đội và dịch vụ, so sánh một đội với lịch sử của chính nó, và không bao giờ xếp hạng cá nhân.

## Tài liệu tham khảo và đọc thêm

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
