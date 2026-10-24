# Các thước đo dòng chảy

**Bốn số đếm và đồng hồ giản dị, công việc đang làm dở, thông lượng, tuổi hạng mục công việc và thời gian chu trình, cho một đội biết công việc của mình bị kẹt ở đâu và có thể hứa điều gì, miễn là mỗi cái được định nghĩa giống nhau cho công việc dự án và công việc dịch vụ và được đọc như một phân phối thay vì một giá trị trung bình.**

## Tổng quan và động lực

Hầu hết bảng điều khiển phân phối và dịch vụ báo cáo điều đã hoàn tất tháng trước. Các thước đo dòng chảy bổ sung góc nhìn quan trọng khi công việc vẫn đang di chuyển: hiện có bao nhiêu đang tiến hành, mỗi hạng mục già đến đâu, các hạng mục hoàn tất nhanh thế nào và chúng mất bao lâu. Tài liệu về dòng chảy đưa ra cho bốn thước đo này những định nghĩa chính xác. Hướng dẫn Kanban (kanbanguides.org, phiên bản hiện hành tính đến tháng 10 năm 2026) là một nguồn rõ ràng: nó gọi tên chúng là các thước đo mà một đội dùng để kiểm tra và điều chỉnh quy trình làm việc của mình, và chủ đề này theo các định nghĩa đó mà không đòi hỏi bất kỳ phương pháp hay bảng cụ thể nào.

Bốn định nghĩa ngắn gọn. **Công việc đang làm dở (WIP)** là số hạng mục công việc đã bắt đầu nhưng chưa kết thúc. **Thông lượng** là số hạng mục công việc hoàn tất trên mỗi đơn vị thời gian. **Tuổi hạng mục công việc** là thời gian trôi qua giữa lúc hạng mục công việc bắt đầu và thời điểm hiện tại, nên nó chỉ áp dụng cho các hạng mục đang tiến hành. **Thời gian chu trình** là thời gian trôi qua giữa lúc hạng mục công việc bắt đầu và lúc nó kết thúc, tính cả hai ngày đầu và cuối theo cách diễn đạt của Hướng dẫn. Một **hạng mục công việc** là một đơn vị công việc mà đội chọn theo dõi như một thứ, như một câu chuyện người dùng, một sự cố, một yêu cầu dịch vụ hoặc một thay đổi. Một **quy trình làm việc** là tập các trạng thái giữa "đã bắt đầu" và "đã kết thúc", và **định nghĩa quy trình làm việc** bằng văn bản của đội nói những trạng thái đó là gì.

Hai trong bốn thước đo nói về cả hệ thống (WIP và thông lượng) và hai nói về từng hạng mục (tuổi và thời gian chu trình). Cặp dành cho các hạng mục đã hoàn tất là thông lượng và thời gian chu trình. Cặp dành cho các hạng mục chưa hoàn tất là WIP và tuổi. Sự phân chia này quan trọng vì các thước đo hạng mục đã hoàn tất là chỉ báo trễ: chúng cho biết mọi việc đã diễn ra thế nào. Các thước đo hạng mục chưa hoàn tất là chỉ báo dẫn dắt: chúng cho biết điều sắp xảy ra, khi vẫn còn thời gian để hành động. Tuổi hạng mục công việc là thước đo ít được dùng nhất trong bốn cái, và thường là cái đầu tiên đáng thêm vào một bảng.

Mối quan hệ giữa ba cái đầu không phải ngẫu nhiên. [Định luật Little](https://en.wikipedia.org/wiki/Little%27s_law), một kết quả từ [lý thuyết hàng đợi](https://en.wikipedia.org/wiki/Queueing_theory), nói rằng trong một hệ thống ổn định, số hạng mục trung bình trong hệ thống bằng tốc độ đến trung bình nhân với thời gian trung bình mỗi hạng mục ở trong đó. Theo ngôn ngữ dòng chảy, WIP trung bình gắn với thông lượng trung bình và thời gian chu trình trung bình. Định luật chỉ đúng trong những điều kiện mà chủ đề quay lại ở phần Khuyến nghị (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi, để có phần trình bày đầy đủ). Hệ quả thực tế rất đơn giản: nếu thông lượng giữ gần như không đổi, nhiều công việc đang làm dở hơn nghĩa là thời gian chu trình dài hơn.

Góc nhìn linh hoạt và ITIL gặp nhau ở đây với những từ vựng khác nhau. Trong thực hành linh hoạt, các thước đo dòng chảy thuộc về bảng của đội và được dùng trong buổi rà soát định kỳ cùng các bên liên quan và trong sự suy ngẫm của chính đội về cách cải tiến. Trong ITIL 4, cùng những con số này mô tả cách quản lý sự cố, quản lý yêu cầu dịch vụ và hỗ trợ thay đổi chuyển các bản ghi qua các trạng thái, và chúng nuôi thực hành đo lường và báo cáo và quản lý mức dịch vụ. Một sự cố là một hạng mục công việc. Một yêu cầu dịch vụ là một hạng mục công việc. Cả hai đều có điểm bắt đầu, điểm kết thúc và một tuổi ở giữa. Bàn dịch vụ ITIL và đội phân phối đang làm cùng loại công việc xét từ góc độ đo lường: hạng mục đến, chờ, được xử lý và rời đi.

Các thước đo này cũng nối với [phát triển phần mềm tinh gọn](https://en.wikipedia.org/wiki/Lean_software_development), vốn coi việc chờ đợi là nguồn lãng phí chính, và với [biểu đồ dòng chảy tích lũy](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), một biểu đồ về các lượt đến và rời đi tích lũy cho thấy WIP, thông lượng và thời gian chu trình chỉ trong nháy mắt. Biểu đồ là tùy chọn. Bốn thước đo có thể được tính từ một bảng các hạng mục với hai ngày cho mỗi hạng mục.

Vì thời gian chu trình và tuổi là các khoảng thời gian có đuôi phải dài, một giá trị trung bình đơn lẻ gây hiểu lầm. Một [bách phân vị](https://en.wikipedia.org/wiki/Percentile) như thứ 85 nói với đội rằng "85 phần trăm hạng mục kết thúc trong vòng bấy nhiêu ngày", đó là một dự báo dùng được và một lời hứa dùng được (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Tài liệu về dòng chảy gọi lời hứa như vậy là một **kỳ vọng mức dịch vụ (SLE)**: một hạng mục điển hình nên mất bao lâu, nêu dưới dạng một thời gian và một xác suất. Một SLE là dự báo của chính đội. Nó không phải là một [thỏa thuận mức dịch vụ](https://en.wikipedia.org/wiki/Service-level_agreement), vốn là một cam kết được thương lượng với khách hàng (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

## Nguyên tắc chính

- **Đếm cả hạng mục theo một định nghĩa duy nhất về bắt đầu và kết thúc.** Việc tách hay gộp hạng mục để cải thiện một con số phá hủy tính so sánh được. Hãy thống nhất một hạng mục công việc là gì, và giữ định nghĩa ổn định.
- **Định nghĩa các đồng hồ trước khi thu thập dữ liệu.** Thời gian chu trình và tuổi phụ thuộc vào trạng thái nào có nghĩa là "đã bắt đầu" và trạng thái nào có nghĩa là "đã kết thúc". Hãy viết cả hai ra, và ghi lại mọi thay đổi của chúng (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).
- **Nhìn vào công việc chưa hoàn tất trước.** Tuổi và WIP là những thước đo duy nhất còn có thể thay đổi một kết quả. Thông lượng và thời gian chu trình xác nhận điều đã xảy ra.
- **Báo cáo phân phối, không phải giá trị trung bình.** Hãy cho thấy bách phân vị cho thời gian chu trình và tuổi, và một chuỗi số đếm hằng tuần cho thông lượng, để hình dạng của biến thiên hiển thị.
- **Dùng các thước đo để quản lý quy trình làm việc, không phải con người.** Đơn vị phân tích là quy trình làm việc của đội. Không bao giờ xếp hạng cá nhân theo số hạng mục đã hoàn tất hay theo thời gian chu trình.
- **Giới hạn WIP để làm dòng chảy dự đoán được.** Giới hạn WIP là một chính sách, không phải một mục tiêu. Giới hạn tồn tại để làm lộ hàng đợi và rút ngắn thời gian chu trình.
- **Tách thời gian dòng chảy khỏi độ chính xác lập kế hoạch.** Các thước đo dòng chảy mô tả cách công việc di chuyển. Riêng chúng không nói gì về việc công việc đúng đã được chọn hay chưa (xem chủ đề 1.3, Kết quả hơn sản lượng: chọn điều cần đo).

## Định nghĩa chỉ số

Mỗi hàng đếm các hạng mục trên quy trình làm việc của một đội. Các hạng mục còn đang tiến hành bị loại khỏi thời gian chu trình và thông lượng, và các hạng mục đã hoàn tất bị loại khỏi tuổi và WIP.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Công việc đang làm dở (WIP) | Các hạng mục công việc đã bắt đầu nhưng chưa kết thúc | Số hạng mục có dấu thời gian bắt đầu được đặt và dấu thời gian kết thúc để trống, tại một thời điểm nêu rõ (ví dụ cuối mỗi ngày); các hạng mục tồn đọng chưa bắt đầu và các hạng mục đã hoàn tất bị loại trừ | hạng mục | Lịch sử trạng thái của trình theo dõi vấn đề hoặc công cụ ITSM | Quản lý sự cố; quản lý yêu cầu dịch vụ; hỗ trợ thay đổi | Giới hạn WIP; tồn đọng của đội đang tiến hành | Ảnh chụp hằng ngày, rà soát hằng tuần |
| Thông lượng | Số hạng mục công việc hoàn tất trên mỗi đơn vị thời gian | Số hạng mục có dấu thời gian kết thúc rơi vào kỳ (ví dụ một tuần lịch, thứ Hai đến Chủ nhật); các hạng mục hoàn tất rồi mở lại chỉ được tính lại nếu chúng là hạng mục mới | hạng mục mỗi tuần | Lịch sử trạng thái của trình theo dõi vấn đề hoặc công cụ ITSM | Quản lý sự cố; thực hiện yêu cầu dịch vụ | Thông lượng; các hạng mục đã hoàn thành | Hằng tuần |
| Tuổi hạng mục công việc | Thời gian trôi qua mà một hạng mục chưa hoàn tất đã ở trạng thái đang tiến hành | Thời điểm hiện tại trừ dấu thời gian bắt đầu, cho các hạng mục còn đang tiến hành; đồng hồ chạy xuyên qua thời gian bị chặn; các hạng mục chưa bắt đầu bị loại trừ | ngày | Lịch sử trạng thái của trình theo dõi vấn đề hoặc công cụ ITSM | Quản lý sự cố; quản lý vấn đề | Tuổi hạng mục công việc; buổi họp nhanh hằng ngày của đội | Hằng ngày, rà soát ở mỗi buổi họp nhanh của đội |
| Thời gian chu trình | Thời gian trôi qua từ lúc bắt đầu đến lúc kết thúc của một hạng mục đã hoàn tất | Dấu thời gian kết thúc trừ dấu thời gian bắt đầu, tính theo ngày lịch, gồm cả hai đầu; đồng hồ bắt đầu ở lần chuyển đầu tiên vào một trạng thái đã bắt đầu và dừng ở lần chuyển vào một trạng thái đã kết thúc; báo cáo trung vị và các bách phân vị thứ 85 và 95 | ngày | Lịch sử trạng thái của trình theo dõi vấn đề hoặc công cụ ITSM | Quản lý sự cố; thực hiện yêu cầu dịch vụ; hỗ trợ thay đổi | Thời gian chu trình; thời lượng hạng mục | Hằng tuần, với cửa sổ trượt 8 đến 12 tuần |
| Mức đạt SLE | Tỷ lệ các hạng mục hoàn tất đáp ứng kỳ vọng mức dịch vụ của đội | Số hạng mục hoàn tất có thời gian chu trình bằng hoặc thấp hơn SLE / tất cả hạng mục hoàn tất trong cửa sổ; các hạng mục còn mở bị loại trừ | phần trăm | Suy ra từ thời gian chu trình | Quản lý mức dịch vụ | Kỳ vọng mức dịch vụ | Hằng tháng |
| Tỷ lệ thời gian bị chặn | Tỷ lệ số ngày đang tiến hành mà các hạng mục bị đánh dấu là bị chặn | Số hạng mục-ngày ở trạng thái bị chặn / số hạng mục-ngày đang tiến hành, trên cửa sổ; đồng hồ cho cả hai bắt đầu từ dấu thời gian bắt đầu | phần trăm | Cờ của trình theo dõi vấn đề hoặc một trạng thái bị chặn trong công cụ ITSM | Quản lý sự cố; quản lý vấn đề; quản lý nhà cung cấp | Các trở ngại; vướng mắc nêu trong buổi họp nhanh hằng ngày của đội | Hằng tuần |

Thời gian chu trình ở đây theo định nghĩa của tài liệu dòng chảy. Nó khác với ý niệm về thời gian giải quyết của ITIL, thường được đo từ lúc một phiếu được mở và có thể loại trừ thời gian bị giữ lại. Một đội muốn so sánh cả hai phải gắn nhãn chúng, và chủ đề 2.2 xử lý các đồng hồ chi tiết (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy). Mức đạt SLE và tỷ lệ thời gian bị chặn được suy ra từ bốn thước đo cốt lõi và được đưa vào vì đó là cách một đội dùng các thước đo ấy hằng ngày.

## Khuyến nghị

### Định nghĩa quy trình làm việc và các hạng mục

**1. Viết định nghĩa quy trình làm việc trước khi vẽ bất kỳ biểu đồ nào.** Liệt kê các trạng thái, nói trạng thái nào có nghĩa là "đã bắt đầu" và trạng thái nào có nghĩa là "đã kết thúc", và nêu ai được chuyển một hạng mục giữa chúng. Tài liệu về dòng chảy gọi đây là định nghĩa quy trình làm việc, và mọi thước đo trong chủ đề này phụ thuộc vào nó. Nếu hai đội định nghĩa "đã bắt đầu" khác nhau, thời gian chu trình của họ không thể so sánh.

**2. Chọn kích thước hạng mục công việc mà đội có thể hoàn tất trong vài ngày, không phải vài tháng.** Một hạng mục công việc là bất cứ thứ gì đội theo dõi như một đơn vị: một câu chuyện, một sự cố, một yêu cầu. Các hạng mục rất lớn che giấu tuổi của chính chúng và làm thông lượng lổn nhổn. Hãy dùng một quy tắc ổn định như "một hạng mục là một thứ mà khách hàng hay người dùng có thể nhận thấy", và tránh tách hạng mục chỉ để cải thiện một số đếm.

**3. Coi công việc dự án và công việc dịch vụ là cùng một loại dòng chảy, với các mẫu hình đến khác nhau.** Công việc dự án đến như một tồn đọng có kế hoạch mà đội kéo từ đó. Công việc dịch vụ, như sự cố và yêu cầu, đến không đoán trước được và có thể chen ngang công việc đã lên kế hoạch. Hãy đo cả hai trên cùng một bảng hoặc trong cùng các bảng, gắn thẻ theo loại, để bạn thấy các gián đoạn ảnh hưởng đến công việc có kế hoạch ra sao (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

### Đo công việc chưa hoàn tất

**4. Bắt đầu với tuổi hạng mục công việc trên bảng.** Hãy đánh dấu mỗi thẻ bằng tuổi của nó theo ngày và sắp xếp hoặc làm nổi theo các dải bách phân vị lấy từ lịch sử thời gian chu trình của chính đội. Một hạng mục già hơn bách phân vị thứ 85 của các thời gian chu trình trước đây là tín hiệu để hỏi điều gì đang chặn nó hôm nay. Điều này biến một thước đo trễ thành một lời nhắc hằng ngày.

**5. Đếm WIP một cách trung thực và đặt một giới hạn mà bạn có thể bảo vệ.** Đếm mọi hạng mục đã bắt đầu mà chưa kết thúc, kể cả công việc đang chờ rà soát hoặc chờ nhà cung cấp. Chọn một giới hạn ban đầu từ WIP trung bình hiện tại của đội và hạ dần từng bước, ghi lại điều gì thay đổi ở thời gian chu trình và tuổi. Hãy coi giới hạn là một chính sách mà đội kiểm tra, và chỉ dùng định luật Little như một phép kiểm tra tính hợp lý trên các giá trị trung bình (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi).

**6. Cho thấy công việc bị chặn dưới dạng thời gian, không phải một cờ.** Một cờ chặn không ai đếm trở thành một cái cớ. Hãy ghi lại khi nào một hạng mục bị chặn và khi nào được giải phóng, và báo cáo tỷ lệ thời gian bị chặn. Giữ đồng hồ của hạng mục chạy xuyên qua việc bị chặn, vì sự chờ đợi của khách hàng không tạm dừng (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố, nơi các trạng thái giữ lại của ITIL đặt ra cùng câu hỏi).

### Đo công việc đã hoàn tất

**7. Báo cáo thời gian chu trình như một phân phối với bách phân vị.** Hãy cho thấy trung vị, bách phân vị thứ 85 và thứ 95, và vẽ mỗi hạng mục hoàn tất như một chấm theo thời gian (biểu đồ phân tán) để đội thấy các cụm và ngoại lai. Nêu cửa sổ, ví dụ 10 tuần gần nhất. Một giá trị trung bình che giấu cái đuôi dài mà khách hàng cảm nhận.

**8. Báo cáo thông lượng như một chuỗi hằng tuần, không phải một tổng đơn lẻ.** Vẽ số hạng mục hoàn tất mỗi tuần dưới dạng [biểu đồ chuỗi](https://en.wikipedia.org/wiki/Run_chart) hoặc [biểu đồ kiểm soát](https://en.wikipedia.org/wiki/Control_chart). Số đếm hằng tuần biến thiên một cách tự nhiên, nên hãy đọc các thay đổi so với biến thiên đó trước khi phản ứng, và không bao giờ so sánh thông lượng của hai đội như một bảng xếp hạng hiệu suất, vì kích thước và định nghĩa hạng mục khác nhau (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối).

**9. Đặt một kỳ vọng mức dịch vụ từ dữ liệu của chính bạn và rà soát nó.** Lấy các thời gian chu trình của đội trong vài tuần gần nhất, chọn một xác suất mà đội chấp nhận được, và đọc số ngày từ bách phân vị. Công bố nó dưới dạng "85 phần trăm hạng mục kết thúc trong 9 ngày hoặc ít hơn", dùng giá trị thật từ dữ liệu của bạn. Xem lại nó khi quy trình làm việc thay đổi. Một SLE là dự báo mà đội đưa ra về chính mình, nên hãy giữ nó tách khỏi các mục tiêu theo hợp đồng.

### Dùng các thước đo

**10. Dùng cả bốn cùng nhau, và hỏi cùng bốn câu hỏi ở mỗi buổi họp nhanh của đội.** Cái gì đang tiến hành, và nó có nằm trong giới hạn không? Những hạng mục nào cũ nhất, và điều gì sẽ gỡ chúng? Chúng ta đã hoàn tất bao nhiêu, và đó có nằm trong khoảng thông thường không? Những hạng mục gần đây mất bao lâu so với kỳ vọng của chúng ta? Bốn câu hỏi thay thế một báo cáo trạng thái và mất vài phút.

**11. Áp dụng cùng các thước đo cho hàng đợi dịch vụ, với một ranh giới rõ ràng cho đồng hồ.** Với sự cố và yêu cầu, "đã bắt đầu" có thể là lần giao đầu tiên cho một người hay một đội, trong khi đồng hồ giải quyết của ITIL bắt đầu từ lúc ghi nhận. Cả hai đều hợp lệ và trả lời những câu hỏi khác nhau: tiếp nhận đáp ứng nhanh đến đâu, và bản thân công việc mất bao lâu. Hãy nêu tên từng đồng hồ, và đừng trộn chúng trong một biểu đồ (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ).

**12. Thay đổi quy trình làm việc, rồi đo lại, và giữ lịch sử.** Khi đội thay đổi một giới hạn WIP, một trạng thái hay một chính sách, hãy ghi lại ngày và lý do, và đánh dấu thay đổi trên các biểu đồ. Một dịch chuyển trong thời gian chu trình sau một thay đổi là bằng chứng về tác dụng của nó. Một dịch chuyển mà không có thay đổi nào được ghi lại là lý do để nghi ngờ công cụ đo (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Công việc đang làm dở (WIP) | Giữ các hạng mục trong tồn đọng hoặc trong cột "sẵn sàng" đến phút chót để chúng không bị tính là đã bắt đầu; đóng và mở lại hạng mục; giấu công việc ra ngoài bảng | Đối chiếu các hạng mục trên bảng với yêu cầu nhận được; lấy mẫu bảng so với công việc thực tế của đội; theo dõi tuổi của các hạng mục ở cột đầu tiên |
| Thông lượng | Chia hạng mục thành những mảnh nhỏ xíu; đóng hạng mục trước khi xong; chọn các hạng mục dễ trước | Xem phân phối kích thước hạng mục và tỷ lệ mở lại; đếm lỗi lọt ra ngoài và sự cố gắn với các hạng mục gần đây; rà soát cơ cấu các loại công việc đã hoàn tất |
| Tuổi hạng mục công việc | Chuyển một hạng mục cũ sang "xong" hoặc một trạng thái mới để đặt lại đồng hồ; hủy các hạng mục cũ một cách lặng lẽ; tạo một bản sao mới của một hạng mục cũ | Kiểm toán các lần chuyển trạng thái lùi và các hạng mục bị hủy; báo cáo các hạng mục bị hủy và tuổi của chúng; kiểm tra các bản trùng lặp được tạo gần giới hạn tuổi |
| Thời gian chu trình | Bắt đầu đồng hồ muộn bằng cách chỉ chuyển hạng mục sang "đang tiến hành" khi công việc gần xong; kết thúc nó sớm bằng cách đánh dấu hạng mục xong trước khi rà soát hoặc phát hành | So sánh thời điểm bắt đầu với commit đầu tiên hoặc hoạt động đầu tiên; báo cáo thời gian giữa "xong" và phát hành; lấy mẫu các hạng mục hoàn tất để kiểm tra sự hoàn thành thực sự |
| Mức đạt SLE | Đặt một SLE rộng rãi; loại các hạng mục khó là "đặc biệt"; đóng hạng mục để ở dưới giới hạn | Giữ SLE ở một bách phân vị của dữ liệu trước đây và rà soát hằng quý; báo cáo các hạng mục bị loại và lý do; đọc bách phân vị thứ 95 và các hạng mục mở lâu nhất |
| Tỷ lệ thời gian bị chặn | Không bao giờ đánh dấu các hạng mục bị chặn, để tỷ lệ trông thấp; đánh dấu mọi thứ là bị chặn để giải thích sự chậm trễ | So sánh tỷ lệ bị chặn với tuổi các hạng mục đang tiến hành; rà soát lý do chặn theo danh mục; lấy mẫu các hạng mục bị chặn để kiểm tra từng lý do |

Một kết quả đọc lành mạnh cho thấy WIP ở mức hoặc dưới giới hạn hầu hết các ngày, tuổi phần lớn dưới bách phân vị thứ 85 của các thời gian chu trình trước đây, và thông lượng biến thiên trong một khoảng ổn định từ tuần này sang tuần khác. Các bách phân vị thời gian chu trình ổn định hoặc đang giảm, mức đạt SLE nằm gần xác suất mà đội đã chọn, và thời gian bị chặn có những nguyên nhân có tên mà ai đó đang xử lý. Khi một con số trông quá tốt, hãy hỏi liệu đồng hồ có dịch chuyển hay định nghĩa có thay đổi trước khi ăn mừng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Thước đo dòng chảy (WIP, thông lượng, tuổi, thời gian chu trình) | Đơn giản, không phụ thuộc công cụ, dựa trên số đếm và ngày; hỗ trợ dự báo xác suất | Cần định nghĩa nhất quán và dấu thời gian sạch; không nói gì về giá trị hay chất lượng |
| Thước đo dựa trên ước lượng như điểm câu chuyện | Gồm một góc nhìn về công sức và độ phức tạp; khớp với công việc có kế hoạch | Chủ quan và riêng theo đội; không thể so sánh giữa các đội |
| Chỉ số dịch vụ dựa trên trung bình như thời gian giải quyết trung bình | Dễ tính và dễ giải thích | Bị méo bởi ngoại lai và độ lệch; che giấu cái đuôi dài |
| Thời gian chu trình theo bách phân vị và SLE | Phản ánh điều khách hàng trải nghiệm; hỗ trợ một lời hứa rõ ràng | Cần đủ lịch sử; khó giải thích hơn cho những người quen với giá trị trung bình |
| Một định nghĩa toàn tổ chức duy nhất về "đã bắt đầu" và "đã kết thúc" | Cho phép tổng hợp và so sánh | Khớp kém với một số đội; có thể đẩy các đội đến các trạng thái giả tạo |

Hãy chọn thước đo đơn giản nhất phục vụ quyết định trước mắt. Các thước đo dòng chảy hoạt động tốt với một đội kéo công việc và có thể hoàn tất các hạng mục trong vài ngày. Chúng khớp kém hơn khi các hạng mục mất hàng tháng, khi một hạng mục biến thiên rất lớn về kích thước, hoặc khi phần lớn giá trị nằm ở khám phá chứ không phải phân phối.

## Câu hỏi để thảo luận với đội nhóm

**1. Trạng thái nào có nghĩa là "đã bắt đầu" với chúng ta, trạng thái nào có nghĩa là "đã kết thúc", và mọi người có đồng ý không?**
Hãy đưa bảng lên màn hình và yêu cầu mỗi người chỉ ra trạng thái đầu và cuối của đồng hồ. Ghi lại những bất đồng, vì chúng là nguồn lớn nhất của thời gian chu trình không đáng tin. Đặc biệt xem các hạng mục chờ rà soát, trong hàng đợi phát hành hoặc trong tay nhà cung cấp. Thống nhất một định nghĩa quy trình làm việc bằng văn bản và một ngày nó có hiệu lực.

**2. Hiện chúng ta có bao nhiêu công việc đang tiến hành, và điều gì sẽ xảy ra nếu chúng ta ngừng bắt đầu hạng mục mới trong một tuần?**
Đếm các thẻ, kể cả công việc đã đình trệ. Hỏi đội sẽ hoàn tất gì và gì vẫn sẽ bị kẹt. Người điều phối nên hướng cuộc trò chuyện về các lý do bắt đầu sớm, như sợ thời gian rảnh hoặc áp lực từ các bên liên quan, và tránh xa việc đổ lỗi. Đề xuất một giới hạn WIP đầu tiên và một ngày để rà soát nó.

**3. Những hạng mục nào cũ nhất trên bảng, và điều gì đang chặn từng cái?**
Sắp xếp theo tuổi và nói về ba hạng mục cũ nhất. Với mỗi cái, nêu trở ngại, người có thể gỡ nó và hành động kế tiếp. So sánh các tuổi cũ nhất với bách phân vị thứ 85 của các thời gian chu trình trước đây. Hãy tạo thói quen hỏi câu này ở mọi buổi họp nhanh, vì tuổi là thước đo duy nhất còn có thể thay đổi một kết quả.

**4. Phân phối thời gian chu trình của chúng ta trông ra sao, và chúng ta có thể đưa ra lời hứa nào từ đó?**
Cho xem biểu đồ phân tán các hạng mục hoàn tất trong 8 đến 12 tuần qua. Đọc trung vị, bách phân vị thứ 85 và thứ 95. Thảo luận liệu đội có thoải mái nêu một SLE ở bách phân vị thứ 85 không, và các ngoại lai có điểm gì chung. Người điều phối nên kiểm tra rằng nhóm hiểu sự khác biệt giữa trung vị và cái đuôi.

**5. Sự cố và yêu cầu ảnh hưởng thế nào đến công việc có kế hoạch mà chúng ta kéo từ tồn đọng?**
Gắn thẻ các hạng mục hoàn tất theo loại và so sánh thời gian chu trình và thông lượng theo loại. Hỏi một hạng mục có kế hoạch bị đình trệ vì một sự cố xảy đến thường xuyên đến đâu. Quyết định liệu một chính sách khẩn cấp hay năng lực dự trữ có giúp được không, và làm sao giữ việc dùng nó hiển thị (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch). Thảo luận đội sẽ ngừng làm gì nếu các gián đoạn tăng gấp đôi.

**6. Chúng ta có thể lợi dụng thước đo nào trong số này, và sẽ nhận ra bằng cách nào?**
Đi qua từng thước đo và hỏi một người chịu áp lực có thể làm nó trông tốt hơn mà không cải thiện dòng chảy bằng cách nào. Ghép mỗi câu trả lời với một rào chắn từ bảng. Người điều phối nên coi đây là một bài tập thiết kế về công cụ đo chứ không phải một lời buộc tội. Chọn một rào chắn để thêm trong quý này, và nêu tên một người sở hữu.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối dùng thước đo dòng chảy để thấy hệ thống của chính mình. Họ được lợi nhiều nhất từ tuổi của các hạng mục đang tiến hành và phân phối thời gian chu trình, cho họ biết nên xúm vào cái gì và nên hứa điều gì. Họ nên tránh biến thông lượng thành mục tiêu và tránh so sánh các con số của mình với các đội khác (xem chủ đề 2.8, Chỉ số DORA, cho các thước đo cấp phân phối nằm trên dòng chảy của đội).

### Đội dịch vụ và vận hành

Các đội dịch vụ xử lý những lượt đến mà họ không kiểm soát. Các thước đo dòng chảy cho thấy gián đoạn, bàn giao và chờ đợi người khác kéo dài thời gian hoàn tất ra sao. Họ được lợi từ các góc nhìn riêng cho sự cố, yêu cầu và thay đổi có kế hoạch, và từ thời gian bị chặn được báo cáo theo lý do. Họ nên giữ các đồng hồ ITIL mà hợp đồng yêu cầu trong khi dùng các đồng hồ dòng chảy để điều hành đội.

### Lãnh đạo và quản trị

Lãnh đạo nên yêu cầu phân phối và xu hướng, không phải một số liệu đơn lẻ, và nên đọc các thay đổi cùng các thay đổi quy trình làm việc được ghi lại bên cạnh. Họ có thể dùng mức đạt SLE và hồ sơ tuổi để thấy rủi ro sớm. Họ nên chống lại việc gộp thông lượng lên qua các đội, vì định nghĩa hạng mục khác nhau, và nên tài trợ cho việc dọn dẹp các mô hình trạng thái và dấu thời gian mà dữ liệu dòng chảy đáng tin cần.

### Khách hàng và người dùng

Khách hàng cảm nhận thời gian chu trình và đặc biệt là cái đuôi của nó. Một tuyên bố như "hầu hết yêu cầu loại này được xong trong vòng một số ngày nêu rõ" cho họ thứ để lập kế hoạch, và một lời thông báo trung thực khi đội nằm ngoài kỳ vọng của mình xây dựng lòng tin. Họ không cần số đếm WIP hay thông lượng, nhưng họ được lợi khi các thước đo đó rút ngắn thời gian chờ.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực vận hành một đội kết hợp xử lý các yêu cầu dịch vụ của người dùng cuối và một dòng nhỏ các cải tiến có kế hoạch cho hệ thống lâm sàng. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Đội có một bảng với các trạng thái Sẵn sàng, Đang tiến hành, Chờ người khác, Rà soát và Xong. Người quản lý nhận thấy báo cáo hằng tháng cho thấy 46 hạng mục hoàn tất, ngang với tháng trước, vậy mà nhân viên lâm sàng phàn nàn các yêu cầu mất "mãi mãi". Việc rà soát lịch sử trình theo dõi cho thấy "đã bắt đầu" đã được đặt khi một thẻ lần đầu được phân loại, nên thời gian chu trình bao gồm cả những ngày trong hàng đợi.

Đội viết lại định nghĩa quy trình làm việc: "đã bắt đầu" là lần chuyển đầu tiên vào Đang tiến hành, "đã kết thúc" là lần chuyển vào Xong, và Chờ người khác được tính là đang tiến hành, với thời gian bị chặn riêng của nó. Với các đồng hồ mới, thời gian chu trình trung vị của 10 tuần gần nhất là 4 ngày, bách phân vị thứ 85 là 11 ngày, và bách phân vị thứ 95 là 24 ngày. WIP trung bình là 19 hạng mục cho một đội 6 người. Tuổi hạng mục công việc cho thấy bảy thẻ già hơn 11 ngày, và năm trong số đó đang chờ một nhà cung cấp bên ngoài.

Đội quyết định ba điều. Họ đặt một SLE là "85 phần trăm hạng mục kết thúc trong 11 ngày hoặc ít hơn". Họ đặt giới hạn WIP là 12 và đồng ý ngừng bắt đầu các hạng mục có kế hoạch mới khi chạm giới hạn. Họ cũng thêm một buổi rà soát hằng tuần mười phút cho năm hạng mục cũ nhất. Các hạng mục của nhà cung cấp được nêu qua quản lý nhà cung cấp kèm số ngày chúng đã chờ.

Sáu tuần sau, bách phân vị thứ 85 của thời gian chu trình là 8 ngày và WIP trung bình là 12. Thông lượng là 44 hạng mục mỗi tuần trong vài tuần, gần mức trước đó. Rồi đội thấy một rủi ro lợi dụng có thể xảy ra: thời gian chu trình trung vị giảm xuống 2 ngày trong một tuần, nhưng số hạng mục hoàn tất mỗi tuần tăng vọt và tỷ lệ hạng mục được mở lại trong vòng một tuần tăng lên. Một mẫu các thẻ cho thấy các yêu cầu lớn đã bị tách thành nhiều thẻ một dòng để tăng thông lượng và rút ngắn thời gian chu trình. Các rào chắn đã bắt được nó: cơ cấu kích thước hạng mục và tỷ lệ mở lại. Đội thống nhất một quy tắc về điều gì được tính là một hạng mục, gộp các thẻ đã tách trong các báo cáo, và tiếp tục công bố SLE và danh sách tuổi.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Các thước đo dòng chảy khớp tốt với phân phối liên tục vì công việc được phát hành theo từng mảnh nhỏ và các đồng hồ chạy liên tục. Một bước thực tế là hiển thị tuổi hạng mục công việc trên một bảng mà cả đội và các bên liên quan đều thấy, và nói về các hạng mục cũ nhất ở mỗi buổi rà soát định kỳ. Điều cần lưu ý là một bảng đầy các hạng mục nhỏ xíu làm thông lượng trông khỏe, nên hãy giữ kích thước hạng mục tương đối nhất quán và theo dõi thời gian chu trình ở bách phân vị cao.

### AI

Sự hỗ trợ của AI có xu hướng nâng thông lượng của các hạng mục nhỏ, như mã hay phản hồi được soạn, mà không rút ngắn thời gian công việc đã xong chờ rà soát, phê duyệt hay phát hành. Hãy ghép thông lượng với thời gian chu trình ở bách phân vị thứ 85 và với làm lại, để việc tăng sản lượng chỉ làm đầy hàng đợi hiển thị. Điều cần lưu ý là một bản nháp đầu nhanh hơn có thể chuyển sự chờ đợi sang một người rà soát, nên hãy đo xem đồng hồ giờ nằm ở đâu.

### Tự động hóa

Hãy kéo các sự kiện bắt đầu và dừng từ trình theo dõi và đường ống một cách tự động, và đánh dấu các trạng thái bị chặn bằng một mã lý do để thời gian bị chặn có thể được đếm. Các bàn giao tự động cũng cần được đo: chúng thất bại thường xuyên đến đâu và một bàn giao thất bại nằm không được chú ý bao lâu. Điều cần lưu ý là một thay đổi trạng thái tự động, như một bot chuyển thẻ, có thể tạo ra các dấu thời gian mà không ai quyết định.

### Phân tích

Hãy dùng phân phối thời gian chu trình để đưa ra một khoảng cho công việc tương lai, và cho thấy có bao nhiêu hạng mục đứng sau nó. Quyết định mà điều này cung cấp thông tin là đội có thể hứa gì và nên tìm sự chậm trễ ở đâu. Điều cần lưu ý là một dự báo từ vài tuần dữ liệu thì mong manh, nên hãy cho thấy khoảng của nó và cập nhật khi dữ liệu lớn lên.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một đội nhỏ có thể bắt đầu với một bảng vật lý hoặc số và một bảng tính các ngày bắt đầu và kết thúc. Hãy bắt đầu với tuổi và WIP, vì chúng không cần lịch sử, và thêm các bách phân vị thời gian chu trình sau khoảng mười tuần dữ liệu. Giữ một bảng cho công việc có kế hoạch và sửa lỗi gấp, gắn thẻ theo loại, để các gián đoạn hiển thị.

**Doanh nghiệp nhỏ.** Công việc thường đến qua email hoặc một bàn trợ giúp được lưu trữ. Hãy dùng các ngày tạo, bắt đầu và giải quyết của chính công cụ, kiểm tra rằng "đã bắt đầu" có nghĩa là ai đó đã bắt tay vào việc, và xuất dữ liệu đều đặn. Một lần xem hằng tuần đơn giản các hạng mục mở lâu nhất có ích hơn một bảng điều khiển cầu kỳ.

**Doanh nghiệp lớn.** Nhiều đội, công cụ và quy trình làm việc khiến các định nghĩa nhất quán là thách thức chính. Hãy thống nhất một vốn từ vựng chung nhỏ cho bắt đầu và kết thúc, để các đội ánh xạ các trạng thái cục bộ của họ về nó, và giữ dữ liệu dòng chảy cấp đội ở cấp đội. Hãy dùng các thước đo để phát hiện các hàng đợi hệ thống, như các bước phê duyệt dùng chung hoặc các môi trường dùng chung, chứ không phải để so sánh các đội.

**Chính phủ và khu vực công.** Thời hạn theo luật, yêu cầu kiểm toán và quy tắc mua sắm định hình các đồng hồ. Hãy giữ đồng hồ theo luật tách khỏi đồng hồ dòng chảy của đội, và ghi tài liệu cả hai. Các bước do nhà cung cấp kiểm soát thường chi phối thời gian chu trình, nên hãy ghi chúng là thời gian bị chặn và dùng dữ liệu trong các cuộc thảo luận hợp đồng (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí của các thước đo dòng chảy thấp về công cụ và vừa phải về kỷ luật. Một đội cần một bảng với các thay đổi trạng thái đáng tin, vài giờ để viết định nghĩa quy trình làm việc, một buổi rà soát định kỳ ngắn, và ai đó duy trì các biểu đồ. Nếu dấu thời gian đến từ trình theo dõi hoặc công cụ ITSM, việc thu thập gần như miễn phí. Chi phí lớn hơn là thời gian dành để căn chỉnh định nghĩa và thay đổi thói quen, như ngừng bắt đầu công việc mới khi chạm giới hạn.

Lợi tức hiện ra ở khả năng dự đoán và ít bất ngờ hơn. Một đội nêu được SLE từ dữ liệu của chính mình có thể trả lời "khi nào sẽ xong?" mà không cần đệm thêm vào ước lượng, và thấy công việc đình trệ sớm. Hãy mô tả lợi ích qua các thước đo bạn tự quan sát được: tỷ lệ hạng mục già hơn bách phân vị thứ 85, độ rộng của khoảng cách giữa trung vị và bách phân vị thứ 95, và thời gian dành trong các cuộc họp trạng thái trước và sau. Không có giá trị chuẩn nào được đưa ra ở đây, vì các con số đã công bố phụ thuộc vào quy trình làm việc và định nghĩa hạng mục. Tổng chi phí sở hữu chủ yếu là thời gian của con người, nên hãy đếm nó, và so sánh với chi phí của công việc chờ đợi mà không ai thấy.

## Phản mẫu và cạm bẫy

- **Đếm các hạng mục chưa bao giờ bắt đầu.** Các thẻ tồn đọng thổi phồng WIP và tuổi và làm bảng khó đọc. Chỉ đếm các hạng mục đã bắt đầu, và giữ tồn đọng ở chỗ riêng của nó (xem chủ đề 2.6, Chỉ số tồn đọng và tinh chỉnh).
- **Coi giới hạn WIP là mục tiêu cần đạt.** Một giới hạn là một trần làm lộ hàng đợi. Hãy rà soát giới hạn có đang làm đúng việc của nó không, và hạ nó khi đội xoay xở được.
- **Chỉ báo cáo giá trị trung bình.** Thời gian chu trình trung bình che giấu cái đuôi dài mà khách hàng cảm nhận. Hãy báo cáo trung vị và các bách phân vị thứ 85 và 95.
- **Tạm dừng đồng hồ vì chờ đợi.** Dừng đồng hồ khi một hạng mục bị chặn làm thời gian chu trình trông tốt hơn và che giấu sự chậm trễ. Hãy giữ đồng hồ chạy và báo cáo thời gian bị chặn riêng.
- **So sánh thông lượng giữa các đội.** Định nghĩa và kích thước hạng mục khác nhau. Hãy so sánh mỗi đội với lịch sử của chính nó.
- **Dùng thước đo dòng chảy để phán xét cá nhân.** Số hạng mục hoàn tất trên mỗi người mời gọi việc lợi dụng và bỏ qua công việc chung. Hãy giữ mọi thước đo ở cấp đội.
- **Đổi quy trình làm việc mà không ghi lại.** Một thay đổi trong tên trạng thái hay chính sách phá vỡ xu hướng trong im lặng. Hãy ghi lại ngày và lý do, và đánh dấu nó trên mọi biểu đồ.
- **Trộn sự cố, yêu cầu và công việc có kế hoạch trong một phân phối.** Thời gian chu trình của chúng khác nhau về bản chất. Hãy gắn thẻ theo loại và đọc từng phân phối riêng.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | "Đã bắt đầu" và "đã kết thúc" có nghĩa khác nhau với những người khác nhau | Một số đội ghi lại các trạng thái quy trình làm việc của họ | Một định nghĩa quy trình làm việc bằng văn bản cho mỗi đội, kèm quy tắc đồng hồ cho thời gian bị chặn | Thay đổi định nghĩa được ghi lại và đánh dấu trên biểu đồ; các đồng hồ được rà soát về sự trôi | Định nghĩa được căn chỉnh giữa các đội và nhà cung cấp nơi công việc vượt ranh giới, và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Đo công việc chưa hoàn tất | Trạng thái được kể trong các cuộc họp | Thẻ cho thấy tuổi hoặc WIP ở một số đội | WIP được đếm hằng ngày và tuổi hiển thị trên mọi thẻ, với một giới hạn bằng văn bản | Các dải tuổi lấy từ bách phân vị lịch sử thúc đẩy hành động hằng ngày | Các hàng đợi và bàn giao liên đội được theo dõi cùng nhau, với tuổi được chia sẻ với nhà cung cấp |
| Đo công việc đã hoàn tất | Số đếm phiếu đã đóng mỗi tháng | Thời gian chu trình trung bình được báo cáo bởi một số đội | Bách phân vị thời gian chu trình và thông lượng hằng tuần từ một nguồn dữ liệu | Xu hướng được rà soát so với các thay đổi được ghi lại; mức đạt SLE được theo dõi | Dự báo từ dữ liệu dòng chảy cung cấp thông tin cho lập kế hoạch và cam kết dịch vụ giữa các đội |
| Sử dụng và rào chắn | Các con số dùng để đuổi theo con người | Nhận thức không chính thức về việc lợi dụng | Mỗi thước đo được ghép với một rào chắn và rà soát cùng đội | Cảnh báo rào chắn dẫn đến công việc cải tiến được tài trợ | Các thước đo và rào chắn được sửa chung với khách hàng và nhà cung cấp |

## Danh sách kiểm tra

- [ ] Định nghĩa quy trình làm việc được viết ra, với các trạng thái "đã bắt đầu" và "đã kết thúc" được nêu tên.
- [ ] Một hạng mục công việc được định nghĩa, kèm quy tắc cho việc tách và gộp hạng mục.
- [ ] WIP được đếm hằng ngày từ dữ liệu công cụ, và một giới hạn WIP được ghi ra.
- [ ] Mọi thẻ đang tiến hành cho thấy tuổi của nó theo ngày.
- [ ] Thời gian chu trình được báo cáo là trung vị, bách phân vị thứ 85 và thứ 95 trên một cửa sổ nêu rõ.
- [ ] Thông lượng được báo cáo dưới dạng biểu đồ chuỗi hằng tuần với cửa sổ của nó.
- [ ] Một kỳ vọng mức dịch vụ được nêu từ dữ liệu của chính đội và được rà soát hằng quý.
- [ ] Thời gian bị chặn được ghi lại kèm bắt đầu, kết thúc và lý do, và đồng hồ hạng mục tiếp tục chạy.
- [ ] Sự cố, yêu cầu và công việc có kế hoạch được gắn thẻ để mỗi loại có thể được đọc riêng.
- [ ] Mọi thay đổi đối với một trạng thái hay chính sách được ghi lại kèm ngày và lý do.
- [ ] Mỗi thước đo được ghép với một rào chắn từ bảng lợi dụng.
- [ ] Không thước đo nào được dùng để xếp hạng cá nhân hay so sánh các đội.

## Lời nhắc AI

**Kiểm tra một định nghĩa quy trình làm việc để tìm vấn đề về đồng hồ.**

```text
Here is the workflow for [team or service]: [list of states and transitions,
with a one-line meaning for each if known]. We want to compute work in progress,
throughput, work item age, and cycle time using the flow-literature definitions.
Identify which state should start the clock and which should stop it, any state
where the clock could be paused or misread, and any state that two teams might
interpret differently. Do not guess how our tool is configured. List your
assumptions and the questions I should answer to settle the definition.
```

**Phân tích một bản xuất các hạng mục công việc.**

```text
I have an export of [number] finished work items from [tool] with these fields:
[field names, for example id, type, started date, finished date, blocked
periods]. Explain how to compute cycle time percentiles, weekly throughput, and
daily work in progress from these fields, and how to handle missing dates,
reopened items, and items of type [types]. Provide the steps and a short script
outline in [language], and do not assume any values. List your assumptions and
the data quality checks I should run first.
```

**Soạn một tuyên bố kỳ vọng mức dịch vụ.**

```text
Our team handles [type of work] and has cycle time data for the last [number]
weeks, with a median of [value], an 85th percentile of [value], and a 95th
percentile of [value]. Draft a one-sentence service level expectation and a short
note explaining it to [audience, for example customers or the service owner],
including what it does not promise. Do not invent target values or benchmarks.
List your assumptions and the caveats about sample size.
```

**Rà soát các rủi ro lợi dụng cho các thước đo dòng chảy của chúng ta.**

```text
We track [list of flow measures] for [team or service]. The team is under
pressure to [pressure, for example reduce ticket age]. For each measure, list
realistic ways it could be made to look better without improving flow, the signal
in our data that would reveal each, and a paired guardrail. Do not invent
statistics or cite studies. List your assumptions and the data I would need to
test each risk.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một thước đo dòng chảy và rào chắn nên nằm bên cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ mẫu, bảng định nghĩa và bảng lợi dụng đồng bộ.

## Điểm chính cần nhớ

- Bốn thước đo mô tả dòng chảy: công việc đang làm dở, thông lượng, tuổi hạng mục công việc và thời gian chu trình, mỗi cái có một định nghĩa ngắn và một đồng hồ phải được viết ra.
- Tuổi hạng mục công việc và WIP là các thước đo dẫn dắt; thông lượng và thời gian chu trình xác nhận điều đã xảy ra.
- Báo cáo thời gian chu trình và tuổi dưới dạng bách phân vị, và nêu một kỳ vọng mức dịch vụ từ dữ liệu của chính bạn.
- Cùng các thước đo khớp với công việc dự án và công việc dịch vụ, miễn là bạn gắn thẻ các loại công việc và nêu tên từng đồng hồ.
- Mọi thước đo đều có thể bị lợi dụng bằng cách dịch chuyển đồng hồ, tách hạng mục hay giấu công việc, nên hãy ghép mỗi cái với một rào chắn.
- Giữ các thước đo ở cấp đội và dùng chúng để cải thiện quy trình làm việc, không bao giờ để xếp hạng con người.

## Tài liệu tham khảo và đọc thêm

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
