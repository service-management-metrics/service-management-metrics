# Nợ kỹ thuật và lỗi đã biết

**Hãy coi lỗi đã biết và nợ kỹ thuật là một sổ cái hiển thị duy nhất của các bản sửa bị hoãn, đo mỗi hạng mục tốn bao nhiêu mỗi tháng nó còn mở, và dành một phần năng lực được bảo vệ cho những hạng mục có lãi cao nhất.**

## Tổng quan và động lực

Đội nào cũng hoãn một số việc sửa chữa. Một khiếm khuyết được hiểu nhưng chưa sửa, một lối tắt được đi để kịp một ngày hẹn, một thành phần bị để cho cũ đi, và một cách lách được viết vào sổ tay vận hành. Mỗi lần hoãn là một quyết định hợp lý khi nó được đưa ra. Rắc rối bắt đầu khi các lần hoãn tích lũy khuất tầm nhìn, vì cái giá của việc mang chúng hiện ra sau đó dưới dạng sự cố, phân phối chậm và con người mệt mỏi, mà không có dòng nào trên bất kỳ báo cáo nào nối cái giá với nguyên nhân.

Hai bộ từ vựng mô tả cùng một mẫu hình. Trong [ITIL](https://en.wikipedia.org/wiki/ITIL), một **lỗi đã biết** là một vấn đề có nguyên nhân gốc được hiểu và có một cách lách, hoặc một bản sửa vĩnh viễn chưa áp dụng. Lỗi đã biết được ghi lại để nhân viên bàn dịch vụ và vận hành giải quyết nhanh các sự cố lặp lại, và bản ghi vẫn mở cho đến khi một bản sửa được phát hành. Trong công việc phần mềm linh hoạt, **[nợ kỹ thuật](https://en.wikipedia.org/wiki/Technical_debt)** là ẩn dụ, do [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) đặt ra năm 1992, cho những lựa chọn thiết kế và triển khai làm thay đổi trong tương lai khó hơn. Ẩn dụ mang hai ý tưởng quan trọng cho việc đo lường: **gốc**, là công sức cần để gỡ nợ, và **lãi**, là công sức hoặc rủi ro thêm bạn trả mỗi kỳ khi nợ còn tồn tại.

Hai góc nhìn khác nhau ở chỗ chúng nhìn vào đâu. Lỗi đã biết được khám phá qua vận hành: một sự cố hoặc một cuộc điều tra vấn đề tìm ra nguyên nhân. Nợ kỹ thuật thường được khám phá qua phân phối: một lập trình viên nhận thấy một thay đổi khó hơn đáng lẽ phải thế. Một lỗi đã biết thường là nợ kỹ thuật đã bắt đầu làm đau khách hàng. Nợ kỹ thuật thường là một lỗi đã biết đang chờ xảy ra. Giữ các danh sách riêng, một trong công cụ ITSM và một trong tồn đọng hay wiki, giấu mối liên hệ và tạo ra hai lập luận cạnh tranh cho cùng một năng lực khan hiếm.

Chủ đề này đưa cho bạn một tập nhỏ các thước đo cho sổ cái kết hợp. Nó tránh một con số tiền duy nhất cho nợ của cả tổ chức, điều không phương pháp nào tạo ra đáng tin cậy, và đo những gì bạn quan sát được: hạng mục đang mở, thời gian chờ, sự cố gây ra, công việc phát sinh và năng lực dành cho sửa chữa. Sổ cái khi đó nuôi một cuộc trao đổi ưu tiên giữa sản phẩm và vận hành (xem chủ đề 4.1, Chỉ số quản lý vấn đề, về hồ sơ vấn đề và bản sửa vĩnh viễn, và chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch, về tải gián đoạn mà nợ tạo ra).

Các thuật ngữ dùng trong chủ đề này:

- Một **cách lách (workaround)** là cách khôi phục dịch vụ hoặc tránh một thất bại mà không gỡ nguyên nhân.
- Một **bản sửa vĩnh viễn** gỡ nguyên nhân. [Phân tích nguyên nhân gốc](https://en.wikipedia.org/wiki/Root_cause_analysis) là công việc tìm ra nó.
- **[Tái cấu trúc mã](https://en.wikipedia.org/wiki/Code_refactoring)** cấu trúc lại mã mà không đổi hành vi bên ngoài của nó. Đây là cách thông thường để trả nợ thiết kế.
- Một **[mùi mã (code smell)](https://en.wikipedia.org/wiki/Code_smell)** là một dấu hiệu bề mặt trong mã thường chỉ ra một vấn đề sâu hơn. Nó là gợi ý để xem xét, không phải phán quyết.
- **[Chi phí cơ hội](https://en.wikipedia.org/wiki/Opportunity_cost)** là giá trị của phương án thay thế tốt nhất bạn từ bỏ khi chọn một cách dùng thời gian thay vì cách khác. Mỗi bản sửa cạnh tranh với một tính năng, và phép so sánh là quyết định thật.
- **[Chi phí của sự trì hoãn](https://en.wikipedia.org/wiki/Cost_of_delay)** là tổn thất kinh tế từ việc hoãn một phần công việc. Đó là ý tưởng đứng sau việc định giá lãi của một hạng mục nợ.
- Một **[lỗi phần mềm](https://en.wikipedia.org/wiki/Software_bug)** là một khiếm khuyết trong phần mềm. Một lỗi đã biết có thể là một lỗi phần mềm, một điểm yếu cấu hình, một giới hạn thiết kế, hoặc một khiếm khuyết của nhà cung cấp.
- **[Phân tích chương trình tĩnh](https://en.wikipedia.org/wiki/Static_program_analysis)** kiểm tra mã mà không chạy nó. Các cảnh báo và điểm độ phức tạp của nó là chỉ báo của nợ có thể có, và là bằng chứng yếu hơn lịch sử sự cố.

Không phải mọi khoản nợ là một sai lầm. Góc phần tư của Martin Fowler tách nợ có chủ ý khỏi nợ vô ý và nợ liều lĩnh khỏi nợ thận trọng (xem danh sách tài liệu tham khảo). Một lối tắt thận trọng kèm kế hoạch trả là một khoản vay lành mạnh, và nợ liều lĩnh là loại cần ngăn ngừa. Các chỉ số ở đây không phán xét nguồn gốc. Chúng cho thấy số dư.

## Nguyên tắc chính

- **Một sổ cái, hai cửa.** Lỗi đã biết từ vận hành và hạng mục nợ từ phân phối đi vào cùng một danh sách hiển thị, với một liên kết giữa các bản ghi mô tả cùng một nguyên nhân.
- **Đo lãi, và cả gốc nữa.** Quy mô của một bản sửa ít quan trọng hơn việc hạng mục đang mở tốn bạn bao nhiêu mỗi tháng về sự cố, cách lách và thay đổi bị chậm. Hãy xếp hạng theo lãi trên mỗi đơn vị công sức sửa.
- **Biến việc hoãn thành một quyết định có người sở hữu.** Mỗi hạng mục có một người sở hữu, một lý do nêu rõ cho việc chờ, và một ngày rà soát. Một hạng mục không ai chọn hoãn là sự bỏ bê, và được tính như vậy.
- **Bảo vệ năng lực trước khi bạn cần.** Một tỷ lệ năng lực nêu rõ cho công việc sửa chữa, thống nhất từ trước, thắng một cuộc dọn dẹp anh hùng sau một quý tồi.
- **Giữ cách lách trung thực.** Một cách lách là một dịch vụ, với chi phí, người sở hữu và kiểu thất bại riêng. Hãy đo nó được dùng thường xuyên đến đâu và thất bại thường xuyên đến đâu.
- **Mô tả hệ thống, không bao giờ con người.** Nợ thuộc về một dịch vụ hoặc một thành phần. Không bao giờ quy cho một tác giả, và không bao giờ xếp hạng kỹ sư theo nợ họ đã chạm vào.
- **Ước lượng thô.** Các cỡ "giờ", "ngày" và "tuần" là đủ. Độ chính xác hơn thế là bịa ra.

## Định nghĩa chỉ số

Các chỉ số dưới đây mô tả sổ cái của các bản sửa bị hoãn. Đồng hồ và ranh giới được nêu trong mỗi công thức. Các thước đo thời gian được báo cáo dưới dạng phân phối (trung vị và bách phân vị thứ 85 hoặc 95), không phải một giá trị trung bình duy nhất.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tuổi tồn đọng lỗi đã biết | Các lỗi đã biết đang mở đã chờ bản sửa vĩnh viễn bao lâu | Đồng hồ bắt đầu khi hồ sơ vấn đề được đánh dấu "lỗi đã biết"; dừng khi bản sửa vĩnh viễn được phát hành lên môi trường thật; hạng mục đóng là "chấp nhận rủi ro" được báo cáo riêng và loại trừ. Báo cáo số đếm, tuổi trung vị và tuổi bách phân vị thứ 85, theo dịch vụ | ngày (phân phối) | Bản ghi vấn đề và lỗi đã biết của công cụ ITSM, bản ghi phát hành | Quản lý vấn đề | Biểu đồ hạng mục công việc già đi; tuổi tồn đọng lỗi | Hằng tháng |
| Độ phủ cách lách | Tỷ lệ lỗi đã biết đang mở có cách lách được ghi lại, đã kiểm thử mà một nhân viên có thể làm theo | số lỗi đã biết đang mở có cách lách được rà soát trong 6 tháng qua / số lỗi đã biết đang mở; hạng mục đã đóng và chấp nhận rủi ro bị loại trừ | phần trăm | Cơ sở tri thức liên kết với bản ghi lỗi đã biết | Quản lý vấn đề; quản lý tri thức | Sổ tay vận hành hoặc định nghĩa hoàn thành cho khả năng vận hành | Hằng tháng |
| Sự cố liên kết với lỗi đã biết đang mở | Các sự cố có nguyên nhân là một lỗi đã biết đang mở, một thước đo trực tiếp của lãi trả bằng gián đoạn dịch vụ | số sự cố trong kỳ liên kết với một lỗi đã biết đang mở khi sự cố bắt đầu / tất cả sự cố trong kỳ; sự cố không có liên kết nguyên nhân được báo cáo là chưa liên kết, không được đếm | phần trăm, cộng số đếm | Liên kết sự cố-vấn đề của công cụ ITSM | Quản lý sự cố; quản lý vấn đề | Lỗi lọt ra ngoài; lượng lỗi đổ vào môi trường thật | Hằng tháng |
| Kho nợ | Số lượng và kích thước ước tính của các hạng mục nợ kỹ thuật đã đăng ký còn mở | số hạng mục đang mở trong sổ đăng ký nợ lúc cuối kỳ; kích thước là tổng các dải công sức thô (giờ, ngày, tuần) được gán lúc đăng ký; nợ chưa đăng ký hoặc bị nghi ngờ bị loại trừ | số đếm, và dải công sức | Sổ đăng ký nợ trong trình theo dõi, gắn thẻ theo dịch vụ | Cải tiến liên tục; thiết kế dịch vụ | Hạng mục tồn đọng sản phẩm được dán nhãn là nợ | Hằng tháng |
| Lãi của nợ | Công việc thêm do nợ đang mở và lỗi đã biết gây ra, tính bằng thời gian của đội | số giờ ghi trong kỳ cho các hạng mục công việc gắn thẻ tham chiếu nợ hoặc lỗi đã biết (cách lách, bước thủ công, làm lại, và công sức thêm cho các thay đổi bị ảnh hưởng) / tổng số giờ làm việc của đội trong kỳ; bản thân công việc sửa bị loại trừ và đếm trong tỷ lệ năng lực | phần trăm thời gian làm việc | Thẻ thời gian hoặc công sức trên hạng mục công việc, giữ ở cấp đội | Cải tiến liên tục; quản lý vấn đề | Tỷ lệ công việc ngoài kế hoạch và làm lại | Hằng tháng |
| Tỷ lệ năng lực dành cho nợ | Tỷ lệ năng lực phân phối dành cho việc trả nợ và lỗi đã biết | năng lực (số hạng mục hoặc công sức) của các hạng mục công việc đã hoàn tất gắn thẻ sửa nợ hoặc sửa lỗi đã biết / tất cả hạng mục công việc đã hoàn tất trong kỳ; hạng mục không có thẻ bị loại trừ | phần trăm | Trình theo dõi, hạng mục đã hoàn tất theo thẻ | Cải tiến liên tục; hỗ trợ thay đổi | Phân bổ năng lực | Mỗi kỳ lập kế hoạch, xem lại hằng tháng |
| Thay đổi ròng của nợ | Sổ cái đang lớn lên hay thu nhỏ | số hạng mục nợ và lỗi đã biết được đăng ký trong kỳ trừ số hạng mục được giải quyết trong kỳ; giải quyết nghĩa là bản sửa đã phát hành, không phải đã gộp; hạng mục đóng là "sẽ không sửa" được đếm trên một dòng riêng | số đếm (có dấu) | Sổ đăng ký nợ và bản ghi lỗi đã biết | Cải tiến liên tục | Thay đổi tồn đọng theo danh mục | Hằng tháng |

Chấp nhận rủi ro là một cách đóng một lỗi đã biết chính đáng, vì một số vấn đề không đáng sửa. Nó được liệt kê riêng để việc đóng hạng mục không âm thầm cải thiện con số tuổi. Cửa sổ rà soát 6 tháng trong độ phủ cách lách là một ví dụ. Một đội đặt cửa sổ cho khớp với tốc độ thay đổi của hệ thống mình và ghi nó vào sổ đăng ký chỉ số.

## Khuyến nghị

### Xây dựng sổ cái

**1. Gộp danh sách lỗi đã biết và danh sách nợ thành một sổ cái.** Hãy giữ một sổ đăng ký với một trường cho nguồn gốc (vận hành hoặc phân phối), dịch vụ, người sở hữu, dải kích thước và liên kết đến các bản ghi liên quan. Công cụ ITSM có thể giữ nó, hoặc trình theo dõi có thể, miễn là mỗi hệ thống liên kết với hệ thống kia. Không có một cái nhìn duy nhất, một lỗi đã biết trong vận hành cạnh tranh với một hạng mục nợ không ai thấy trong phân phối cho cùng những kỹ sư.

**2. Đăng ký nợ vào khoảnh khắc nó được tạo ra hoặc phát hiện.** Một lối tắt có chủ ý đi vào sổ đăng ký trong cùng pull request hoặc bản ghi thay đổi, kèm lý do nêu rõ và ngày rà soát. Nợ tìm thấy sau đó do ai tìm thấy đăng ký. Một quy tắc ghi nhận một dòng, rẻ, hiệu quả hơn một cuộc kiểm toán định kỳ, vì mọi người quên điều họ biết quý trước.

### Đo lãi

**3. Luôn liên kết sự cố với lỗi đã biết.** Liên kết giữa một sự cố và lỗi đã biết của nó là dữ liệu mạnh nhất bạn có về lãi, và tốn vài giây khi giải quyết. Hãy biến liên kết thành trường bắt buộc khi nguyên nhân đã biết, và báo cáo tỷ lệ chưa liên kết để một khoảng trống không trông như tin tốt (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố). Khi cùng một nguyên nhân xuất hiện trong nhiều sự cố, hồ sơ vấn đề mang bằng chứng cho bản sửa.

**4. Gắn thẻ công việc mà nợ tạo ra.** Hãy để kỹ sư đánh dấu một hạng mục công việc khi một cách lách, một bước thủ công hoặc làm lại thêm là cần thiết vì một điểm yếu đã biết, và liên kết nó với hạng mục sổ cái. Thẻ tốn ít và cho bạn con số lãi của nợ ở cấp đội. Hãy coi kết quả là một ước lượng với sai số rộng, hữu ích để xếp hạng hạng mục và để theo dõi xu hướng, không phải để hạch toán.

**5. Định giá mỗi hạng mục bằng hai con số: công sức sửa và lãi hằng tháng.** Hãy dùng các dải thô, như giờ, ngày, tuần, cho công sức, và một chi phí hằng tháng sơ bộ lấy từ các sự cố liên kết, công việc gắn thẻ, và mọi chi phí ngừng hoạt động mà tổ chức của bạn đã ước lượng. Chia lãi cho công sức cho một thời gian hoàn vốn đơn giản. Đừng bịa độ chính xác: một dải và một giả định nêu rõ là đủ để tách các thắng lợi hiển nhiên khỏi các hạng mục có thể chờ.

### Bảo vệ năng lực và quyết định

**6. Dành riêng một tỷ lệ năng lực cố định, và báo cáo nó.** Hãy thống nhất với chủ sản phẩm một tỷ lệ mỗi chu kỳ cho công việc sửa chữa, đặt theo xu hướng trong sổ cái và xem lại mỗi quý. Báo cáo tỷ lệ năng lực dành cho nợ cạnh các số liệu công việc có kế hoạch, để lãnh đạo thấy công việc sửa chữa là một khoản đầu tư có chủ ý. Một tỷ lệ dành riêng cũng bảo vệ đội khỏi một cuộc tranh luận đánh đổi ở mỗi buổi lập kế hoạch, cuộc tranh luận mà tồn đọng tính năng thường thắng.

**7. Xếp hạng sửa chữa so với tính năng bằng một đơn vị tiền tệ chung.** Hãy đưa lỗi đã biết và hạng mục nợ vào cùng cuộc trao đổi ưu tiên như tính năng, biểu diễn dưới dạng chi phí của sự trì hoãn và thời gian hoàn vốn. Một bản sửa gỡ một sự cố hằng tuần, và hoàn lại công sức của nó trong một quý, cạnh tranh trên giá trị của chính nó. Xếp hạng theo độ ồn ào, thâm niên, hay ngày đăng ký cho kết quả kém (xem chủ đề 4.4, Thay đổi thất bại và làm lại).

**8. Khép vòng cho các quyết định hoãn.** Với mỗi hạng mục cố ý để mở, hãy ghi ai chấp nhận rủi ro, ngày rà soát, và kích hoạt sẽ đưa nó lên cao hơn, như một sự cố thứ hai hoặc một thay đổi có kế hoạch trong khu vực đó. Hãy rà soát danh sách chấp nhận theo nhịp riêng. Một hạng mục bị hoãn ba lần mà không có kích hoạt là một quyết định phớt lờ nó, và sổ cái nên nói như vậy.

### Giữ cho các con số trung thực

**9. Phát hành bản sửa trước khi bạn đóng bản ghi.** Một lỗi đã biết vẫn mở cho đến khi bản sửa vĩnh viễn nằm trên môi trường thật và tái diễn đã được kiểm tra trong một cửa sổ nêu rõ. Đóng ở "đã gộp" hay "phiếu xong" tâng bốc các con số tuổi và thay đổi ròng và mở lại sự cố sau đó (xem chủ đề 4.5, Chỉ số phát hành và triển khai). Hãy theo dõi tỷ lệ mở lại của lỗi đã biết như một kiểm tra chất lượng cho quy tắc đóng.

**10. Nhìn vào hình dạng của sổ cái, ngoài các tổng.** Một số đếm phẳng có thể giấu một cái đuôi dài các hạng mục rất cũ, một tỷ lệ tăng các hạng mục trong một dịch vụ, hoặc một sổ cái được giữ nhỏ bằng cách đóng mọi thứ là "sẽ không sửa". Hãy cho thấy phân phối tuổi, sự phân chia theo dịch vụ và danh sách chấp nhận rủi ro trên một trang. Rà soát nó với những người sở hữu dịch vụ, trong cùng cuộc họp lập kế hoạch công việc quý tới.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tuổi tồn đọng lỗi đã biết | Đóng các bản ghi cũ là "chấp nhận rủi ro" hay "sẽ không sửa"; chia một bản ghi cũ thành các bản ghi mới trẻ; đặt lại đồng hồ bằng cách đăng ký lại | Số đếm và tuổi chấp nhận rủi ro được báo cáo trên cùng trang; người ngoài đội sở hữu rà soát các lần đóng; giữ dòng dõi bản ghi |
| Độ phủ cách lách | Viết một cách lách mơ hồ để thỏa trường; tính một cách lách chưa nhân viên nào từng thử | Tỷ lệ dùng và thất bại của cách lách trong các sự cố liên kết; kiểm thử định kỳ một mẫu cách lách |
| Sự cố liên kết với lỗi đã biết đang mở | Để sự cố chưa liên kết, hoặc liên kết với nguyên nhân khác, để tỷ lệ giảm | Tỷ lệ sự cố chưa liên kết báo cáo cạnh nó; rà soát mẫu các sự cố đã đóng để tìm liên kết bị bỏ sót |
| Kho nợ | Không đăng ký nợ, để kho trông nhỏ; gộp nhiều hạng mục thành một hạng mục lớn; đăng ký vụn vặt để trông chăm chỉ | Rà soát sổ đăng ký so với một mẫu rà soát mã và phân tích sau sự cố; kiểm tra kích thước và độ cụ thể của hạng mục |
| Lãi của nợ | Gắn thẻ công việc quá ít để tránh sự soi xét, hoặc quá nhiều để giành ngân sách sửa; đọc con số như một xếp hạng của đội | Kiểm toán mẫu các hạng mục có và không gắn thẻ; chỉ cái nhìn cấp đội, không so sánh giữa các đội; lãi đọc cùng liên kết sự cố |
| Tỷ lệ năng lực dành cho nợ | Gắn thẻ công việc tính năng thường là sửa chữa; chọn các hạng mục trang trí dễ để lấp đầy tỷ lệ | Kiểm tra kết quả: tuổi của các hạng mục lãi cao cũ nhất và liên kết sự cố giảm; rà soát những gì đã sửa so với xếp hạng |
| Thay đổi ròng của nợ | Giải quyết nhiều hạng mục nhỏ để bù vài hạng mục lớn; đóng hạng mục là "sẽ không sửa" để làm số đếm giảm | Thay đổi ròng cho thấy theo dải kích thước và theo lãi; báo cáo dòng "sẽ không sửa"; kiểm tra tái diễn cho hạng mục đã giải quyết |

Một kết quả đọc lành mạnh cho thấy một sổ cái hiển thị, cụ thể, và di chuyển theo hướng đội đã chọn. Số hạng mục lãi cao cũ nhất đang giảm. Sự cố liên kết với lỗi đã biết đang mở có xu hướng giảm, và tỷ lệ chưa liên kết nhỏ. Tỷ lệ năng lực dành cho nợ ổn định ở mức đã thống nhất thay vì tăng vọt sau một cuộc khủng hoảng rồi biến mất sau đó. Danh sách chấp nhận rủi ro ngắn và được rà soát. Khi một con số đơn lẻ trông xuất sắc mà những con số khác không động đậy, hãy nghi ngờ định nghĩa trước khi ăn mừng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Một sổ cái gộp lỗi đã biết và nợ | Ưu tiên thống nhất; vận hành và phân phối thấy cùng chi phí | Cần công cụ dùng chung hoặc liên kết; quyền sở hữu giữa hai chức năng phải được giải quyết |
| Một tỷ lệ năng lực cố định cho sửa chữa | Dự đoán được; bảo vệ công việc sửa chữa khỏi áp lực tính năng | Có thể bị tiêu vào các hạng mục giá trị thấp nếu xếp hạng yếu |
| Công việc sửa chữa chỉ lên lịch khi nó thắng cuộc tranh luận ưu tiên | Linh hoạt; đáp ứng ưu tiên hiện tại | Tính năng gần như luôn thắng; sổ cái lớn lên cho đến khi có khủng hoảng |
| Lãi ước lượng từ sự cố và công việc gắn thẻ | Gắn nợ với chi phí quan sát được; hỗ trợ xếp hạng | Số liệu thô; phụ thuộc vào việc gắn thẻ và liên kết sự cố trung thực |
| Một đợt sửa chữa chuyên dụng hay "tuần trả nợ" | Tập trung và tiến bộ hiển thị | Theo từng đợt; sổ cái đầy lại giữa các sự kiện; làm gián đoạn các cam kết đã lên kế hoạch |

Hãy chọn sắp xếp nhẹ nhất giữ cho các hạng mục lãi cao cũ nhất tiếp tục di chuyển. Một đội nhỏ có thể chạy sổ cái trên một bảng với một nhãn và một buổi rà soát hằng tháng. Các tổ chức lớn hơn cần liên kết giữa các công cụ và một phương pháp xếp hạng đã thống nhất. Mục đích là một quyết định có chủ ý cho mỗi hạng mục, không phải một danh sách rỗng.

## Câu hỏi để thảo luận với đội nhóm

**1. Ba hạng mục đang mở nào tốn chúng ta nhiều nhất mỗi tháng, và làm sao chúng ta biết?**
Yêu cầu mọi người nêu tên các ứng viên theo trí nhớ, rồi kiểm tra chúng với liên kết sự cố và công việc gắn thẻ. So sánh danh sách nhớ được với danh sách đo được, và ghi lại các khoảng trống. Thống nhất cách bằng chứng xếp hạng sẽ được thu thập từ nay.

**2. Khi chúng ta hoãn một bản sửa, ai quyết định, và khi nào chúng ta xem lại?**
Đi qua năm lần hoãn gần nhất và hỏi ai chấp nhận rủi ro và ngày rà soát nào được đặt. Nơi không ai quyết định, hạng mục đã bị bỏ bê, không phải bị hoãn. Thống nhất một quy tắc rằng mọi lần hoãn mang một người sở hữu, một lý do và một kích hoạt. Thảo luận danh sách chấp nhận rủi ro sẽ được rà soát ra sao và bởi ai.

**3. Chúng ta nên dành riêng bao nhiêu năng lực cho sửa chữa, và điều gì sẽ thay đổi tỷ lệ đó?**
Cho thấy xu hướng sổ cái và tỷ lệ năng lực dành cho nợ hiện tại. Hỏi đội sẵn lòng từ bỏ điều gì để nâng nó, và bằng chứng nào sẽ cho phép nó giảm. Ghi lại con số, lý do và ngày xem lại.

**4. Các cách lách của chúng ta có thật không, và một nhân viên mới có làm theo được không?**
Chọn ngẫu nhiên một cách lách và nhờ một người không viết ra nó làm theo. Thống nhất một quy trình kiểm thử cho các cách lách bao quát những lỗi tác động cao nhất.

**5. Cái gì được tính là đã sửa, và chúng ta theo dõi bao lâu trước khi đóng bản ghi?**
So sánh các quy tắc đóng mà vận hành, phân phối và chủ sản phẩm dùng. Thảo luận một cửa sổ tái diễn phù hợp với dịch vụ, và đội sẽ làm gì khi một hạng mục đã đóng mở lại. Thống nhất một định nghĩa và viết nó vào sổ đăng ký chỉ số.

**6. Ở đâu các con số nợ của chúng ta có thể đang kể một câu chuyện dễ chịu?**
Hỏi các cách mỗi con số có thể bị tâng bốc: nợ chưa đăng ký, các hạng mục dễ được sửa trước, các hạng mục đóng là sẽ không sửa. Xem tỷ lệ sự cố chưa liên kết và danh sách chấp nhận rủi ro. Chọn một rào chắn để thêm trong quý này và nêu tên ai sẽ kiểm tra nó.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối thấy nợ trước, thường lúc đang đổi mã. Họ được lợi từ một sổ đăng ký dễ thêm vào và từ một tỷ lệ năng lực được bảo vệ, để công việc sửa chữa không phụ thuộc vào việc thắng một cuộc tranh luận ở mỗi buổi lập kế hoạch. Họ nên đăng ký các lối tắt khi đi chúng, gắn thẻ công việc do các điểm yếu gây ra, và tránh dùng nợ làm nhãn cho bất kỳ công việc nào họ không muốn làm (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy, về ảnh hưởng của nợ đến thời gian chờ).

### Đội dịch vụ và vận hành

Các đội vận hành thấy lãi: sự cố lặp lại, bước thủ công, cách lách mong manh, và tải trực ca theo sau. Họ sở hữu bản ghi lỗi đã biết và tài liệu cách lách, và họ có dữ liệu sự cố định giá lãi. Họ nên liên kết mọi sự cố với lỗi đã biết của nó, kiểm thử cách lách, và mang bằng chứng được xếp hạng đến buổi lập kế hoạch thay vì một danh sách phàn nàn (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca).

### Lãnh đạo và quản trị

Lãnh đạo quyết định công việc sửa chữa nhận bao nhiêu năng lực, và các động cơ họ đặt ra quyết định liệu sổ cái có giữ trung thực không. Họ nên yêu cầu phân phối tuổi, các con số lãi và danh sách chấp nhận rủi ro, không phải một điểm nợ duy nhất. Đọc sổ cái như một xếp hạng của một đội trừng phạt việc đăng ký và đẩy nợ xuống ngầm. Một diễn đàn quản trị nên coi chấp nhận rủi ro là một quyết định có người sở hữu và ngày rà soát.

### Khách hàng và người dùng

Khách hàng cảm nhận nợ như các thất bại lặp lại và các cách lách họ phải làm theo. Nơi một cách lách ảnh hưởng đến người dùng, hãy công bố nó kèm một ghi chú giản dị về khi nào dự kiến có bản sửa, và giữ đúng ngày đó hoặc giải thích sự thay đổi. Ít sự cố lặp lại hơn và trạng thái trung thực về các vấn đề đã biết xây nhiều lòng tin hơn một lời hứa không có khiếm khuyết (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực vận hành một dịch vụ lên lịch bệnh nhân, được một đội sản phẩm và một nhóm vận hành hỗ trợ. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Nhóm vận hành giữ 23 lỗi đã biết trong công cụ ITSM. Đội sản phẩm giữ một danh sách riêng 41 hạng mục nợ trên bảng của mình. Một buổi rà soát hằng quý thấy 9 trong các lỗi đã biết và 7 trong các hạng mục nợ mô tả cùng năm nguyên nhân. Lỗi đã biết cũ nhất là 14 tháng tuổi, tuổi lỗi đã biết trung vị là 5 tháng, và bách phân vị thứ 85 là 11 tháng. Độ phủ cách lách là 61 phần trăm. Sự cố liên kết với lỗi đã biết đang mở là 18 phần trăm sự cố của quý, và 22 phần trăm sự cố chưa liên kết, nên tỷ lệ thật có thể cao hơn.

Đội gộp hai danh sách thành một sổ cái 55 hạng mục riêng biệt. Với mười hạng mục có nhiều sự cố liên kết nhất, đội ước lượng công sức sửa theo dải và lãi hằng tháng theo giờ. Một hạng mục nổi lên: một tác vụ đồng bộ lịch hẹn ban đêm thất bại âm thầm khoảng hai tuần một lần và cần nhân viên trực ca khởi động lại thủ công. Việc sửa được ước lượng hai tuần. Lãi của nó, từ sự cố liên kết và công việc gắn thẻ, khoảng 10 giờ mỗi tháng, và mỗi lần thất bại làm trễ các danh sách khám buổi sáng. Thời gian hoàn vốn khoảng bốn tháng, nhanh hơn bất kỳ tính năng nào khi đó trong kế hoạch.

Quyết định, ghi trong nhật ký quyết định, là dành riêng 15 phần trăm năng lực của đội sản phẩm cho công việc sửa chữa, xếp hạng theo lãi trên mỗi đơn vị công sức, và sửa tác vụ đồng bộ trước. Trưởng vận hành cũng đồng ý liên kết mọi sự cố với một lỗi đã biết nơi có và kiểm thử năm cách lách được dùng nhiều nhất.

Hai quý sau, tuổi lỗi đã biết trung vị là 4 tháng và bách phân vị thứ 85 là 9 tháng. Sự cố liên kết với lỗi đã biết đang mở giảm xuống 11 phần trăm. Tỷ lệ chưa liên kết giảm xuống 8 phần trăm, cho đội thêm tự tin vào con số. Rồi đội bắt được một rủi ro lợi dụng. Dòng thay đổi ròng của nợ cho thấy 12 hạng mục được giải quyết trong một quý, nhưng 6 trong số đó được đóng là sẽ không sửa, và hai trong số đó là các hạng mục lãi cao cũ nhất. Một người rà soát ngoài đội đọc các bản ghi và thấy các lần đóng được thực hiện để cải thiện con số tuổi. Các hạng mục được mở lại, lý do đóng trở thành trường bắt buộc với một người phê duyệt có tên, và các hạng mục chấp nhận rủi ro giờ xuất hiện trên cùng trang với phân phối tuổi.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy dành một tỷ lệ năng lực được bảo vệ cho nợ có lãi cao nhất, và rà soát nó thường xuyên với các bên liên quan. Điều cần lưu ý là một mục tiêu về số đếm nợ dẫn đến việc chia nhỏ và gắn nhãn lại các hạng mục.

### AI

Mã do AI tạo ra có thể thêm nợ nhanh, và AI cũng có thể giúp tìm và trả nó. Hãy theo dõi riêng thay đổi ròng của nợ và sự cố liên kết với lỗi đã biết đang mở cho các khu vực có AI hỗ trợ, và gắn nhãn chúng. Điều cần lưu ý là một mô hình gợi ý bản sửa có thể để nguyên nhân gốc tại chỗ.

### Tự động hóa

Hãy tự động hóa việc phát hiện lỗi đã biết lỗi thời và sự mục ruỗng của phụ thuộc và cờ, và đo tự động hóa theo cảnh báo giả. Điều cần lưu ý là các trình quét tự động tạo nhiễu chôn vùi các hạng mục quan trọng.

### Phân tích

Hãy ước lượng lãi bằng các sự cố và công sức mà mỗi hạng mục gây ra, kèm khoảng. Quyết định được cung cấp thông tin là sửa gì tiếp theo. Điều cần lưu ý là ước lượng chi phí nợ thô, nên hãy tránh độ chính xác giả.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Nợ thường có chủ ý và thường đúng, vì tốc độ đến khách hàng đầu tiên là quan trọng nhất. Hãy giữ một danh sách trên bảng với một nhãn, đăng ký lối tắt khi bạn đi chúng, và đặt ngày rà soát để "sau này" có nghĩa. Nâng tỷ lệ sửa chữa khi lãi bắt đầu hiện ra trong sự cố.

**Doanh nghiệp nhỏ.** Một quản trị viên đơn lẻ hoặc đội nhỏ thường gánh cả vận hành lẫn phân phối, nên hai danh sách tự nhiên là một. Hãy ghi lỗi đã biết và cách lách của chúng trong một tài liệu chung, và lưu ý mỗi hạng mục phụ thuộc vào nhà cung cấp hoặc hợp đồng nào. Một khiếm khuyết do nhà cung cấp sở hữu là một lỗi đã biết bạn không tự sửa được, nên hãy theo dõi ngày cam kết của nhà cung cấp và cách lách của bạn.

**Doanh nghiệp lớn.** Nhiều đội, nhiều dịch vụ và nhiều nhà cung cấp tạo ra vài danh sách cạnh tranh và vài định nghĩa về "xong". Hãy chốt một cấu trúc sổ cái, một quy tắc đóng và một phương pháp xếp hạng, và để các đội thêm trường địa phương kèm một ánh xạ nêu rõ.

**Chính phủ và khu vực công.** Hệ thống cũ, chu kỳ mua sắm dài và ngân sách cố định khiến một số nợ tốn kém để trả và một số quyết định thay thế chậm. Hãy ghi lại các ràng buộc pháp lý, lưu giữ và kiểm toán cản một bản sửa, vì chúng giải thích việc hoãn. Hãy cho thấy sổ cái như một phần của báo cáo rủi ro, và lập kế hoạch sửa chữa trong chu kỳ ngân sách thay vì coi nó là chi phí ngoài kế hoạch (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là ngừng trả lãi mà bạn không thấy. Sự cố lặp lại, cách lách thủ công và thay đổi chậm, rủi ro là những chi phí hiển thị, và chúng thường được ghi như các vấn đề riêng trong các ngân sách riêng. Một sổ cái gộp biến chúng thành một phép so sánh giữa chi phí sửa chữa và chi phí mang nợ.

Chi phí của thực hành có ba phần. Phần thứ nhất là thiết lập: một sổ đăng ký, liên kết giữa công cụ ITSM và trình theo dõi, và một quy ước gắn thẻ. Phần thứ hai là công sức vận hành: vài giây mỗi sự cố để liên kết, vài giây mỗi hạng mục công việc để gắn thẻ, và một buổi rà soát hằng tháng một hai giờ mỗi dịch vụ. Phần thứ ba là chính năng lực sửa chữa, là khoản lớn nhất và là một khoản đầu tư có chủ ý, không phải chi phí chung.

Lợi tức đến từ các mẫu hình bạn có thể tự đo. Hãy so sánh các sự cố liên kết với một lỗi đã biết trước và sau bản sửa của nó, số giờ công việc gắn thẻ trên các thay đổi bị ảnh hưởng trước và sau, và các gián đoạn trực ca tránh được. Thêm chi phí ngừng hoạt động nếu tổ chức của bạn đã ước lượng nó. Đừng mượn một con số ngành cho chi phí của nợ: tài liệu nghiên cứu về chủ đề này có thật, nhưng các con số phụ thuộc vào bối cảnh, và dữ liệu sự cố và thời gian của chính bạn là bằng chứng tốt hơn. Nghiên cứu *Accelerate* liên kết hiệu suất phân phối với hiệu suất tổ chức (xem chủ đề 2.8, Chỉ số DORA), dù nó không đưa ra giá cho sổ cái của bạn. Để xem cách xử lý rộng hơn về chi phí và lợi tức, xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh.

## Phản mẫu và cạm bẫy

- **Hai danh sách không bao giờ gặp nhau.** Vận hành và phân phối tranh cùng một năng lực bằng bằng chứng khác nhau. Hãy gộp các danh sách hoặc liên kết mọi nguyên nhân chung.
- **Một điểm nợ duy nhất cho tổ chức.** Nó giấu chi phí nằm ở đâu và mời gọi xếp hạng các đội. Hãy báo cáo sổ cái theo dịch vụ, kèm tuổi, lãi và quyền sở hữu.
- **Viết lại lớn là cách sửa duy nhất.** Các cuộc dọn dẹp lớn đình trệ, và sổ cái đầy lại trong khi chúng chạy. Hãy gỡ hạng mục từng bước nhỏ, xếp hạng theo thời gian hoàn vốn.
- **Không nợ như một mục tiêu.** Theo đuổi nó thưởng cho các lần đóng tầm thường và ngăn cản việc đăng ký trung thực. Hãy nhắm đến một sổ cái mà các hạng mục lãi cao cũ nhất đang di chuyển.
- **Đóng lỗi đã biết ở "đã gộp".** Bản sửa chưa đến người dùng, và sự cố quay lại. Hãy đóng khi phát hành, rồi theo dõi tái diễn trong một cửa sổ nêu rõ.
- **Giấu việc hoãn trong "sẽ không sửa".** Con số tuổi cải thiện và rủi ro vẫn còn. Hãy đếm chấp nhận rủi ro riêng, kèm người sở hữu và ngày rà soát.
- **Coi phân tích tĩnh là chân lý.** Điểm số phản ánh hình dạng mã, không phải chi phí. Hãy dùng chúng để tìm ứng viên, rồi xác nhận bằng liên kết sự cố và lịch sử thay đổi.
- **Quy nợ cho tác giả.** Nó dạy mọi người giấu lối tắt và tránh các thành phần khó. Hãy giữ mọi thước đo ở cấp dịch vụ và đội (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Sổ cái và định nghĩa | Lỗi đã biết và nợ sống trong đầu người hoặc trong các ghi chú rải rác | Vận hành và phân phối mỗi bên giữ một danh sách, với quy tắc khác nhau | Một sổ cái với định nghĩa bằng văn bản, người sở hữu và quy tắc đóng cho mọi hạng mục | Tuổi, chấp nhận rủi ro và thay đổi ròng được rà soát so với các định nghĩa bằng văn bản | Định nghĩa được sửa cùng nhà cung cấp và khách hàng khi chúng không còn cung cấp thông tin cho quyết định |
| Đo lãi | Không có liên kết giữa sự cố và nguyên nhân | Một số sự cố được liên kết với lỗi đã biết bằng tay | Liên kết sự cố bắt buộc nơi nguyên nhân đã biết; công việc được gắn thẻ ở cấp đội | Lãi và thời gian hoàn vốn được ước lượng cho các hạng mục hàng đầu và theo dõi xu hướng | Lãi gắn với kết quả dịch vụ và chia sẻ giữa các đội và nhà cung cấp |
| Năng lực và ưu tiên | Sửa chữa xảy ra khi khủng hoảng | Thời gian dành riêng không chính thức ở một số đội | Một tỷ lệ năng lực đã thống nhất và một phương pháp xếp hạng chung | Tỷ lệ được điều chỉnh theo xu hướng sổ cái và tài trợ như công việc có kế hoạch | Năng lực sửa chữa được phối hợp giữa các nền tảng dùng chung và nhà cung cấp |
| Cách lách và việc đóng | Cách lách không có tài liệu hoặc do một người nắm | Có tài liệu cho một số lỗi, chưa kiểm thử | Cách lách trong cơ sở tri thức, với quy tắc đóng khi phát hành | Việc dùng, thất bại và tái diễn sau khi đóng của cách lách được đo | Cách lách tự động nghỉ hưu khi bản sửa phát hành, với phản hồi từ người dùng |

## Danh sách kiểm tra

- [ ] Lỗi đã biết và hạng mục nợ nằm trong một sổ cái, hoặc được liên kết từng hạng mục.
- [ ] Mỗi hạng mục có một người sở hữu, một dải kích thước, một dịch vụ và một ngày rà soát.
- [ ] Các lối tắt có chủ ý được đăng ký khi đi, kèm lý do.
- [ ] Sự cố được liên kết với lỗi đã biết nơi nguyên nhân đã biết, và tỷ lệ chưa liên kết được báo cáo.
- [ ] Công việc do các điểm yếu gây ra được gắn thẻ ở cấp đội, và việc gắn thẻ được kiểm toán theo mẫu.
- [ ] Mỗi hạng mục hàng đầu có một dải công sức sửa và một ước lượng lãi hằng tháng.
- [ ] Một tỷ lệ năng lực cho công việc sửa chữa được thống nhất, báo cáo và rà soát mỗi quý.
- [ ] Lỗi đã biết đóng khi bản sửa được phát hành, với một cửa sổ tái diễn nêu rõ.
- [ ] Các lần đóng chấp nhận rủi ro được liệt kê riêng, kèm người phê duyệt và ngày rà soát.
- [ ] Cách lách cho các lỗi tác động cao nhất được kiểm thử theo lịch.
- [ ] Phân phối tuổi và sự phân chia theo dịch vụ được cho thấy cùng các tổng.
- [ ] Không thước đo nợ nào được dùng để so sánh hay xếp hạng cá nhân.

## Lời nhắc AI

**Gộp hai danh sách thành một sổ cái.**

```text
I have two lists of deferred repairs. List A comes from [operations tool or
source] and holds [number] known errors. List B comes from [delivery tracker or
source] and holds [number] technical debt items. Here are the entries:
[paste entries with title, service, date registered, and a one-line description].
Group entries that appear to describe the same cause, propose a single ledger
entry for each group, and flag entries that need a human to confirm the match.
Do not invent causes, services, or dates. List your assumptions and the questions
I should answer before merging.
```

**Ước lượng dải công sức và lãi hằng tháng cho các hạng mục hàng đầu.**

```text
For the ledger item [item title] on [service], I have this evidence: linked
incidents [list with dates and durations], tagged work [hours or item counts],
and a repair estimate from the team of [estimate]. Help me write coarse effort
and monthly interest bands, a simple payback time, and the confidence level for
each figure. Show your arithmetic. Do not invent costs, benchmark values, or
industry figures. If a figure is missing, ask me for it. List your assumptions.
```

**Rà soát việc đóng và rủi ro bị lợi dụng.**

```text
Here are the definitions and the last quarter's data for our known error and debt
ledger: [definitions of age, workaround coverage, debt net change, and the closure
rule] and [summary of items closed, with closure reasons]. Identify the ways
these measures could be flattered, the evidence in the data that suggests it has
happened, and a guardrail for each. Treat this as a review of the instrument, not
a review of people. Do not accuse anyone, and do not invent data. List your
assumptions.
```

**Chuẩn bị cuộc trao đổi ưu tiên với chủ sản phẩm.**

```text
I need to propose how to split capacity between features and repair work for
[team] next quarter. The ledger shows [summary of ledger: counts, age
distribution, top items with effort and interest bands]. The feature plan
contains [summary of planned features and their expected value, as supplied by
the product owner]. Draft a one-page proposal that compares options for the
repair share, states the cost of delay of the main repair items, and names the
trade-offs. Do not invent value estimates or benchmark shares. List your
assumptions and the decisions the product owner must make.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một chỉ số liên quan, như tái diễn hay thay đổi thất bại, và rào chắn thuộc về cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số đã sửa nêu đồng hồ, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Lỗi đã biết và nợ kỹ thuật là hai cái nhìn về một sổ cái của các bản sửa bị hoãn, nên hãy giữ chúng cùng nhau hoặc được liên kết.
- Đo lãi mà mỗi hạng mục tốn mỗi tháng, bằng sự cố, cách lách và thay đổi bị chậm, và xếp hạng sửa chữa theo thời gian hoàn vốn.
- Biến mỗi lần hoãn thành một quyết định có người sở hữu, lý do và ngày rà soát, và báo cáo chấp nhận rủi ro riêng.
- Dành riêng một tỷ lệ năng lực đã thống nhất cho công việc sửa chữa, và báo cáo nó cạnh công việc có kế hoạch.
- Đóng một lỗi đã biết khi bản sửa được phát hành, rồi theo dõi tái diễn trước khi bạn tin kết quả.
- Giữ mọi thước đo ở cấp dịch vụ và đội, và dùng rào chắn để một con số tốt hơn nghĩa là một hệ thống tốt hơn.

## Tài liệu tham khảo và đọc thêm

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
