# Chỉ số quản lý vấn đề

**Các chỉ số quản lý vấn đề cho thấy một đội đang gỡ bỏ nguyên nhân của sự cố hay chỉ sửa các triệu chứng của chúng, nên hãy đo bao nhiêu nguyên nhân được tìm thấy, chúng được sửa dứt điểm nhanh đến đâu, và cùng các sự cố đó có quay lại không.**

## Tổng quan và động lực

Một đội khôi phục dịch vụ nhanh vẫn có thể bị kẹt trên một chiếc máy chạy bộ. Cùng một lỗi quay lại sau vài tuần, cùng những người bị gọi, và số sự cố trông khỏe mạnh vì mỗi lần sửa đều nhanh. Quản lý vấn đề là thực hành bước xuống khỏi máy chạy bộ. Nó nhìn xuyên qua các sự cố, tìm nguyên nhân bên dưới, và làm cho nguyên nhân đó được gỡ bỏ hoặc kiềm chế. Chủ đề này bao quát các con số cho bạn biết công việc đó có đang diễn ra không và nó có hiệu quả không.

Bốn thuật ngữ mang chủ đề. Một **sự cố** là một gián đoạn không có kế hoạch đối với một dịch vụ hoặc sự suy giảm chất lượng của nó, theo cách khung [ITIL](https://en.wikipedia.org/wiki/ITIL) dùng từ này (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố). Một **vấn đề** là nguyên nhân bên dưới, hoặc nguyên nhân bị nghi ngờ, của một hay nhiều sự cố. Một **lỗi đã biết** là một vấn đề có nguyên nhân được hiểu và có một cách lách được ghi lại, được giữ trong một [cơ sở dữ liệu lỗi đã biết](https://en.wikipedia.org/wiki/Known_error_database) để người kế tiếp gặp triệu chứng có thể tìm thấy nó. Một [cách lách](https://en.wikipedia.org/wiki/Workaround) giảm hoặc tránh tác động của một sự cố hay vấn đề mà không gỡ bỏ nguyên nhân của nó. Bản sửa vĩnh viễn là thay đổi gỡ bỏ nguyên nhân.

Tìm nguyên nhân là việc của [phân tích nguyên nhân gốc](https://en.wikipedia.org/wiki/Root_cause_analysis). Các kỹ thuật phổ biến gồm [năm câu hỏi vì sao](https://en.wikipedia.org/wiki/Five_whys), [sơ đồ Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram) và [biểu đồ Pareto](https://en.wikipedia.org/wiki/Pareto_chart), xếp hạng nguyên nhân theo tần suất xảy ra hoặc mức tác hại. Các hệ thống phức tạp thường có nhiều nguyên nhân đóng góp và không có một thủ phạm duy nhất, nên một hồ sơ vấn đề tốt nêu các yếu tố mà khi được gỡ bỏ sẽ chấm dứt sự tái diễn, và nói đội tự tin đến đâu.

Các chỉ số quan trọng vì quản lý vấn đề có một cái bẫy báo cáo sẵn có. Mở một hồ sơ vấn đề thì dễ và cảm giác năng suất. Đóng một hồ sơ cũng dễ, vì một bản ghi có thể được đóng bằng một ghi chú. Không sự kiện nào cho thấy có gì tốt hơn cho người dùng. Các thước đo đáng theo dõi nằm xa hơn ở hạ lưu: các sự cố liên kết với một vấn đề có ngừng tái diễn không, các lỗi đã biết có thực sự được những người trực ca dùng không, và một nguyên nhân đã chẩn đoán chờ bản sửa của nó bao lâu.

Góc nhìn ITIL và linh hoạt gặp nhau ở đây không có nhiều ma sát. Trong ITIL 4, quản lý vấn đề là một thực hành bên trong hệ thống giá trị dịch vụ, gần với quản lý sự cố, hỗ trợ thay đổi và quản lý tri thức. Đối ứng linh hoạt của nó là dòng các bản sửa nhỏ, dựa trên bằng chứng chảy qua [tồn đọng](https://en.wikipedia.org/wiki/Backlog) của một đội, buổi nhìn lại phát hiện một mẫu hình, và thói quen coi công việc độ tin cậy là công việc sản phẩm thông thường. Nơi góc nhìn ITIL nhấn mạnh bản ghi, quyền sở hữu và lỗi đã biết, góc nhìn linh hoạt nhấn mạnh lô nhỏ và phản hồi nhanh. Cả hai đều muốn ít sự cố lặp lại hơn, và kết quả đó là thước đo cần giữ trước mắt mọi người.

Chủ đề này không lặp lại các đồng hồ sự cố (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố) hay các thước đo sự cố lớn (xem chủ đề 3.4, Chỉ số sự cố lớn), và nó chỉ xử lý việc theo đuổi rà soát đến cùng nơi nó nuôi các vấn đề (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi). Tồn đọng lỗi đã biết và ý niệm rộng hơn về [nợ kỹ thuật](https://en.wikipedia.org/wiki/Technical_debt) được xử lý trong chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết. Ở đây trọng tâm là hồ sơ vấn đề và các kết quả nó tạo ra. Các thước đo khôi phục và thất bại dựa trên triển khai nằm trong chủ đề 2.8, Chỉ số DORA.

## Nguyên tắc chính

- **Đo tái diễn, không phải giấy tờ.** Phép thử của quản lý vấn đề là các sự cố liên kết ngừng quay lại. Số đếm hồ sơ đã mở và đóng mô tả hoạt động và nói ít về kết quả.
- **Tách ba khoảnh khắc.** Phát hiện rằng một mẫu hình tồn tại, xác định nguyên nhân của nó, và gỡ bỏ nguyên nhân là những sự kiện khác nhau với đồng hồ và người sở hữu khác nhau. Gộp chúng giấu nơi sự chậm trễ nằm.
- **Một cách lách là một giai đoạn, không phải một kết thúc.** Hãy ghi lại nó, dùng nó, và theo dõi nó vẫn là sự bảo vệ duy nhất bao lâu. Một cách lách sống nhiều năm là nợ với một người sở hữu không ai gọi tên được.
- **Đặt bản sửa nơi công việc diễn ra.** Một bản sửa vĩnh viễn thường rơi xuống dưới dạng một thay đổi hoặc một hạng mục tồn đọng do một đội sản phẩm sở hữu. Hãy đo nó trong dòng chảy của chính đội, và cho đội sở hữu dịch vụ thấy.
- **Liên kết sự cố với vấn đề tại nguồn.** Mọi thước đo ở đây phụ thuộc vào liên kết giữa một sự cố và một vấn đề. Nếu liên kết yếu, các con số yếu.
- **Ưu tiên phân phối và nhóm hơn giá trị trung bình.** Thời lượng vấn đề dài và lệch, và một vài hồ sơ cũ chi phối bất kỳ giá trị trung bình nào (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).
- **Mô tả đội và dịch vụ, không bao giờ con người.** Vấn đề là thuộc tính của hệ thống. Một bảng vấn đề đã đóng theo từng nhân viên phân tích biến một cuộc điều tra thành một chỉ tiêu.

## Định nghĩa chỉ số

Mọi đồng hồ dùng dấu thời gian của hồ sơ vấn đề, các bản ghi sự cố liên kết, và thay đổi hoặc hạng mục tồn đọng liên kết. Trừ khi một hàng nói khác, vấn đề được đếm theo dịch vụ và theo đội sở hữu, và các bản ghi gộp hoặc trùng lặp bị loại trừ. Bách phân vị được ưu tiên hơn giá trị trung bình cho mọi khoảng thời gian. Các con số trong ví dụ của chủ đề này chỉ mang tính minh họa.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vấn đề được mở và đóng | Dòng các hồ sơ vấn đề vào và ra trạng thái mở, theo dịch vụ | Số được mở trong kỳ và số được đóng trong kỳ, mỗi cái theo mã đóng (đã sửa, chấp nhận rủi ro, trùng lặp, không tái hiện được); bản trùng lặp được cho thấy nhưng bị loại khỏi số đếm "đã sửa" | số đếm mỗi kỳ | Bản ghi vấn đề ITSM | Quản lý vấn đề | Lượng đưa vào và thông lượng của tồn đọng | Hằng tháng |
| Tuổi tồn đọng vấn đề | Các vấn đề đang mở đã chờ bao lâu | Với mỗi vấn đề đang mở, ngày chụp trừ ngày tạo bản ghi; báo cáo trung vị và bách phân vị thứ 85 của các vấn đề đang mở và cái cũ nhất, theo mức ưu tiên | ngày | Bản ghi vấn đề ITSM | Quản lý vấn đề | Tuổi hạng mục công việc trên bảng | Hằng tháng |
| Tỷ lệ liên kết sự cố-vấn đề | Tỷ lệ sự cố trỏ đến một vấn đề hoặc lỗi đã biết nơi một cái được kỳ vọng | Số sự cố trong kỳ có vấn đề hoặc lỗi đã biết được liên kết / số sự cố trong kỳ có mức ưu tiên cao trở lên, hoặc được mở lại, hoặc nằm trong một danh mục lặp lại; sự cố đóng là lỗi người dùng hoặc trùng lặp bị loại trừ | phần trăm | Bản ghi sự cố và vấn đề ITSM | Quản lý sự cố; quản lý vấn đề | Phát hiện mẫu hình trong buổi nhìn lại | Hằng tháng |
| Thời gian đến nguyên nhân gốc | Một vấn đề đã chẩn đoán mất bao lâu để đạt một nguyên nhân được ghi lại | Đồng hồ bắt đầu khi hồ sơ vấn đề được tạo và dừng khi nguyên nhân được ghi lại và một người thứ hai đã rà soát; các vấn đề đóng mà không có nguyên nhân bị loại trừ và đếm riêng; báo cáo trung vị và bách phân vị thứ 85 | ngày | Bản ghi vấn đề ITSM và dấu vết kiểm toán của chúng | Quản lý vấn đề | Khung thời gian của spike hoặc điều tra | Hằng tháng |
| Tỷ lệ tái sử dụng lỗi đã biết | Một lỗi đã biết được dùng thường xuyên đến đâu khi một sự cố đến | Số sự cố được giải quyết bằng một lỗi đã biết được liên kết hoặc cách lách của nó / số sự cố trong kỳ có triệu chứng khớp với một lỗi đã biết đã tồn tại lúc đó; sự cố không có lỗi đã biết khớp bị loại trừ | phần trăm | Liên kết sự cố ITSM; việc dùng bài viết tri thức | Quản lý tri thức; quản lý vấn đề | Việc dùng sổ tay vận hành hoặc kịch bản của đội | Hằng tháng |
| Thời gian đến bản sửa vĩnh viễn | Một vấn đề bị phơi bày bao lâu từ chẩn đoán đến khi bản sửa chạy trên môi trường thật | Đồng hồ bắt đầu khi nguyên nhân được ghi lại và dừng khi thay đổi sửa được liên kết đã triển khai và xác nhận; các vấn đề đóng là chấp nhận rủi ro bị loại trừ và đếm riêng; báo cáo trung vị và bách phân vị thứ 85 | ngày | Bản ghi vấn đề; bản ghi thay đổi hoặc sự kiện triển khai đường ống | Quản lý vấn đề; hỗ trợ thay đổi | Thời gian chu trình của hạng mục sửa | Hằng tháng |
| Tỷ lệ tái diễn sau khi sửa | Tỷ lệ các vấn đề đã sửa có triệu chứng liên kết quay lại | Số vấn đề đóng là đã sửa trong một quý nhóm có một sự cố khớp mới trong vòng 90 ngày sau khi bản sửa hoạt động / số vấn đề đóng là đã sửa trong quý đó; cửa sổ 90 ngày là một ví dụ và được nêu trên biểu đồ | phần trăm | Bản ghi sự cố và vấn đề ITSM; sự kiện triển khai | Quản lý vấn đề; cải tiến liên tục | Tỷ lệ lỗi lọt ra ngoài hoặc hồi quy | Hằng quý |
| Tỷ lệ chỉ có cách lách | Tỷ lệ các vấn đề đã biết chỉ được bảo vệ bằng một cách lách | Số vấn đề đang mở ở trạng thái lỗi đã biết không có bản sửa nào được lên lịch / số vấn đề đang mở ở trạng thái lỗi đã biết; các vấn đề chấp nhận rủi ro có người sở hữu có tên và ngày rà soát được cho thấy thành một nhóm riêng | phần trăm | Bản ghi vấn đề ITSM | Quản lý vấn đề; quản lý rủi ro | Sổ đăng ký nợ kỹ thuật | Hằng tháng |

Cửa sổ 90 ngày, quy tắc khớp triệu chứng, và định nghĩa của "được kỳ vọng" trong tỷ lệ liên kết là các ví dụ. Một đội chọn các giá trị phù hợp với dịch vụ của mình và ghi chúng vào sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số). Đếm các vấn đề đóng là "đã sửa" riêng khỏi các mã đóng khác giữ cho cặp mở-và-đóng trung thực.

## Khuyến nghị

### Quyết định điều gì được tính là một vấn đề

**1. Mở một vấn đề dựa trên bằng chứng, và nói bằng chứng là gì.** Các kích hoạt tốt là các sự cố lặp lại cùng một triệu chứng, một sự cố lớn với nguyên nhân chưa biết, một xu hướng tìm thấy trong rà soát, hoặc một rủi ro phát hiện trước bất kỳ sự cố nào. Hãy ghi kích hoạt lên bản ghi, ví dụ "năm sự cố trong sáu tuần liên kết với cùng một dịch vụ". Nếu mọi sự cố bất thường trở thành một hồ sơ vấn đề, tồn đọng đầy nhiễu và không ai đọc nó.

**2. Dùng một tập nhỏ, dùng chung các mã đóng.** Đã sửa, chấp nhận rủi ro, trùng lặp, không tái hiện được và đã gộp là đủ cho hầu hết các đội. Mỗi mã có một nghĩa một câu và một người sở hữu được dùng nó. Cơ cấu các mã đóng giàu thông tin hơn số đếm đã đóng, vì nó cho thấy bao nhiêu công việc gỡ một nguyên nhân và bao nhiêu kết thúc mà không có thay đổi.

### Liên kết sự cố và vấn đề tại nguồn

**3. Biến liên kết thành một bước trong việc đóng sự cố.** Yêu cầu người giải quyết liên kết sự cố với một vấn đề, một lỗi đã biết, hoặc "không tìm thấy" trước khi đóng. Đưa ra các gợi ý khớp từ công cụ khi nó làm được, và để một người quyết định. Một liên kết làm vài tuần sau trong một bài tập hàng loạt thì không đáng tin (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

**4. Thống nhất cách khớp triệu chứng.** Tái diễn phụ thuộc vào việc quyết định khi nào hai sự cố là "giống nhau". Một phân loại ngắn về nguyên nhân và triệu chứng, kèm định nghĩa và ví dụ, tốt hơn văn bản tự do. Hãy rà soát một mẫu các lần khớp mỗi quý, vì các khớp sai theo cả hai hướng làm lệch tỷ lệ tái diễn.

**5. Để rà soát mẫu hình nuôi danh sách vấn đề.** Một buổi rà soát hằng tháng các danh mục sự cố, theo dịch vụ và bằng [biểu đồ Pareto](https://en.wikipedia.org/wiki/Pareto_chart), cho thấy vài nguyên nhân nào tạo ra phần lớn nỗi đau. Hãy dùng buổi rà soát để mở vấn đề và xếp ưu tiên chúng, và gửi các nguyên nhân lặp lại từ các buổi rà soát sự cố lớn vào cùng danh sách (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố).

### Đo ba sự chậm trễ

**6. Tính thời gian từng giai đoạn riêng.** Đo từ lúc tạo bản ghi đến nguyên nhân được ghi lại, và từ nguyên nhân được ghi lại đến bản sửa chạy trên môi trường thật. Sự chậm trễ đầu chỉ vào năng lực điều tra, quyền truy cập dữ liệu và kỹ năng. Sự chậm trễ thứ hai chỉ vào việc xếp ưu tiên, quy trình thay đổi và công việc tính năng cạnh tranh. Một "thời gian để đóng một vấn đề" đơn lẻ trộn chúng và không cho ai một hành động rõ ràng.

**7. Báo cáo những cái cũ.** Hãy cho thấy trung vị và bách phân vị thứ 85 của tuổi vấn đề đang mở, và liệt kê những cái cũ nhất theo dịch vụ. Một vài hồ sơ nhiều năm tuổi sẽ làm dịch chuyển giá trị trung bình và cho bạn biết ít, trong khi danh sách cũ nhất mời gọi một quyết định: sửa, chấp nhận rủi ro với một người sở hữu có tên và ngày rà soát, hoặc đóng kèm lý do.

### Đưa bản sửa vào dòng chảy bình thường

**8. Coi một bản sửa vĩnh viễn là một hạng mục tồn đọng có người sở hữu và ngày.** Liên kết vấn đề với thay đổi hoặc hạng mục công việc mang bản sửa, và cho thấy bản sửa trên cùng bảng với công việc tính năng. Hãy xếp ưu tiên bằng một quy tắc đã thống nhất, như cân chi phí sự cố lặp lại với công sức để sửa. Nơi một bản sửa cần một thay đổi, con đường thay đổi chuẩn nên nhanh cho các sửa chữa rủi ro thấp (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

**9. Yêu cầu cách lách và ngày thoát cùng nhau.** Một cách lách mua thời gian. Hãy ghi nó như một lỗi đã biết, kiểm tra rằng đội trực ca tìm thấy và chạy được nó, và đặt một ngày rà soát cho bản sửa. Tỷ lệ chỉ có cách lách khi đó trở thành một danh sách các quyết định, không phải một đống nợ im lặng (xem chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết).

### Kiểm tra rằng các bản sửa có hiệu quả

**10. Theo mỗi bản sửa bằng một cửa sổ tái diễn.** Sau khi một bản sửa hoạt động, hãy theo dõi các sự cố khớp trong một cửa sổ nêu rõ, và báo cáo tỷ lệ các bản sửa đứng vững theo nhóm hằng quý. Tái diễn là thứ gần nhất với một thước đo kết quả mà thực hành này có. Nếu nó cao, hãy hỏi nguyên nhân đã được tìm thấy hay chỉ là một yếu tố đóng góp, và mở lại phân tích.

**11. Đo việc tái sử dụng lỗi đã biết nơi người xử lý làm việc.** Đếm mức độ thường xuyên một lỗi đã biết hay cách lách của nó được dùng khi một sự cố khớp đến. Một tỷ lệ tái sử dụng thấp với nhiều lỗi đã biết thường nghĩa là các mục khó tìm, đã cũ, hoặc được viết cho nhân viên phân tích thay vì người xử lý. Hãy sửa bài viết và vị trí của nó trước khi thêm nhiều bài hơn (xem chủ đề 3.6, Chỉ số quản lý tri thức).

### Giữ cho các con số trung thực

**12. Cho thấy các nhóm và lưu ý bên cạnh mọi biểu đồ.** Hãy ghi các định nghĩa, cơ cấu mã đóng và mọi thay đổi quy tắc lên chính biểu đồ. Các nhóm hằng quý của các vấn đề đã sửa cho thấy tái diễn mà không trộn công việc cũ và mới. Hãy ghép mọi số đếm với một thước đo kết quả để không con số nào đứng một mình (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Vấn đề được mở và đóng | Mở nhiều hồ sơ tầm thường; tách một vấn đề thành nhiều; đóng hồ sơ là trùng lặp hoặc "không tái hiện được" để dọn danh sách | Cơ cấu mã đóng; tỷ lệ tái diễn sau khi sửa; một mẫu các hồ sơ đã đóng được đọc mỗi quý |
| Tuổi tồn đọng vấn đề | Đóng các hồ sơ cũ nhất mà không sửa; mở lại thành hồ sơ mới để đặt lại đồng hồ; phân loại lại một vấn đề thành yêu cầu | Liên kết hồ sơ mới với bản gốc và báo cáo tuổi từ hồ sơ đầu tiên; danh sách các lần đóng theo lý do; rà soát các rủi ro được chấp nhận |
| Tỷ lệ liên kết sự cố-vấn đề | Liên kết mọi sự cố với một vấn đề gom hết mơ hồ để nâng tỷ lệ | Tỷ lệ liên kết trỏ đến năm vấn đề lớn nhất; mẫu các liên kết được kiểm tra xem có khớp thật không; tái diễn của các triệu chứng được liên kết |
| Thời gian đến nguyên nhân gốc | Ghi một nguyên nhân nhanh, nông để dừng đồng hồ; nêu "lỗi con người"; bỏ qua người rà soát thứ hai | Tỷ lệ tái diễn sau khi sửa; phân loại nguyên nhân với "lỗi con người" không được chấp nhận một mình; rà soát một mẫu các nguyên nhân so với bằng chứng |
| Tỷ lệ tái sử dụng lỗi đã biết | Đếm một liên kết thêm sau khi sự cố đóng; thêm một lỗi đã biết vào mọi sự cố của một dịch vụ | Thời gian giữa việc đóng sự cố và liên kết; phản hồi của người xử lý về việc mục có giúp ích không; rà soát các mục không dùng trong 90 ngày |
| Thời gian đến bản sửa vĩnh viễn | Đánh dấu thay đổi đã triển khai trước khi bản sửa được xác minh; đóng là chấp nhận rủi ro để tránh công việc | Tỷ lệ tái diễn sau khi sửa; danh sách chấp nhận rủi ro có người sở hữu và ngày rà soát; bước xác minh trước khi đồng hồ dừng |
| Tỷ lệ tái diễn sau khi sửa | Định nghĩa triệu chứng hẹp để các lần tái diễn không khớp; nới rộng cửa sổ đóng để các bản sửa rơi vào nhóm sớm hơn; trì hoãn liên kết | Phân loại nguyên nhân được người ngoài đội sở hữu rà soát; tỷ lệ liên kết sự cố; cửa sổ cố định được nêu từ trước |
| Tỷ lệ chỉ có cách lách | Lên lịch một bản sửa giữ chỗ không có ngày thật; chuyển vấn đề sang chấp nhận rủi ro; hạ mức ưu tiên của vấn đề | Tuổi của các bản sửa đã lên lịch bị trượt; danh sách chấp nhận rủi ro được rà soát với một người sở hữu điều hành có tên; chi phí sự cố lặp lại theo vấn đề |

Một kết quả đọc lành mạnh trông yên lặng và hơi nhàm. Số đếm mở và đóng gần như đồng nhịp, các vấn đề đang mở cũ nhất mỗi cái có một quyết định được ghi lại, tỷ lệ các bản sửa đứng vững cao và các đường nhóm ổn định, và các lỗi đã biết được những người gặp triệu chứng dùng. Mẫu hình cảnh báo là một số đếm đã đóng dài, gọn gàng cạnh những sự cố cứ quay lại. Khi các con số hoạt động trông xuất sắc mà người dùng vẫn gặp cùng một lỗi, hãy tin người dùng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Hồ sơ vấn đề chính thức cho sự cố lặp lại và sự cố lớn | Người sở hữu, lịch sử và liên kết với bản sửa rõ ràng; hỗ trợ kiểm toán | Chi phí quy trình; hồ sơ có thể cũ đi |
| Sửa nguyên nhân bên trong tồn đọng của đội mà không có hồ sơ vấn đề | Nhanh, nhẹ, gần với công việc | Các mẫu hình liên đội không được thấy; không có lỗi đã biết dùng chung |
| Mã đóng nghiêm ngặt và nhóm hằng quý | Cái nhìn kết quả trung thực; chống được số đếm gọn gàng | Đọc chậm hơn; cần kỷ luật nhập dữ liệu |
| Đếm vấn đề đã đóng làm mục tiêu | Dễ giải thích và vẽ biểu đồ | Mời gọi việc đóng cho đủ số đếm; thưởng cho các vấn đề nhỏ |
| Theo dõi tái diễn cho các vấn đề đã sửa | Thước đo gần nhất có sẵn về việc nó có hiệu quả không | Cần khớp triệu chứng tốt và một cửa sổ đủ dài |
| Theo dõi tái sử dụng cho lỗi đã biết | Cho thấy tri thức có giúp người xử lý không | Phụ thuộc vào việc người xử lý liên kết mục; có thể bị lợi dụng |

Các đội sửa nguyên nhân nhanh bên trong tồn đọng của chính mình vẫn nên ghi lại nguyên nhân nơi tổ chức rộng hơn thấy được, để một đội khác gặp cùng triệu chứng được lợi. Hãy đầu tư trước vào liên kết giữa sự cố và vấn đề và vào cửa sổ tái diễn. Hai mảnh đó làm cho mọi thước đo khác diễn giải được.

## Câu hỏi để thảo luận với đội nhóm

**1. Ba sự cố nào chúng ta sửa thường xuyên nhất quý trước, và điều gì ngăn chúng ta sửa nguyên nhân của chúng?**
Liệt kê các sự cố lặp lại từ bàn dịch vụ hoặc công cụ sự cố và sắp xếp theo số lần xảy ra. Với mỗi cái, hỏi trở ngại là gì: không có thời gian điều tra, không có nguyên nhân được thống nhất, một bản sửa cạnh tranh với tính năng, hay một bản sửa cần đội khác. Người điều phối nên tìm các trở ngại lặp lại qua cả ba, vì chúng chỉ vào một bản sửa hệ thống chứ không phải kỹ thuật.

**2. Khi chúng ta liên kết một sự cố với một vấn đề, ai làm, khi nào, và làm sao chúng ta biết đó là đúng vấn đề?**
Đi qua một sự cố gần đây từ lúc đóng đến lúc liên kết. Ghi lại liệu liên kết được thực hiện trong sự cố, lúc đóng, hay trong một lần dọn dẹp sau đó. Cùng rà soát một mẫu nhỏ các liên kết để tìm khớp thật. Thống nhất một thay đổi làm cho liên kết dễ hơn hoặc đáng tin hơn.

**3. Một nguyên nhân đã chẩn đoán chờ bản sửa của nó bao lâu, và ai quyết định thứ tự?**
Lấy các vấn đề có nguyên nhân được ghi lại và xem thời gian kể từ chẩn đoán. Hỏi ai xếp ưu tiên chúng và họ dùng quy tắc nào. Cuộc thảo luận thường cho thấy sự chậm trễ là một hàng đợi trước tồn đọng sản phẩm hơn là một khó khăn kỹ thuật. Thống nhất cách so sánh bản sửa vấn đề với công việc tính năng.

**4. Các cách lách cũ nhất của chúng ta là gì, và chúng ta sẽ mất gì nếu giữ chúng thêm một năm?**
Nêu tên ba cách lách sống lâu nhất và chúng tốn gì về công sức thủ công, rủi ro và tri thức của những người còn nhớ. Hỏi điều gì sẽ xảy ra nếu người biết cách lách vắng mặt. Quyết định với từng cái liệu có nên sửa, chấp nhận rủi ro với một người sở hữu và ngày rà soát, hay cho dịch vụ nghỉ hưu.

**5. Nếu một vấn đề đã sửa quay lại, chúng ta có biết không, và biết nhanh đến đâu?**
Hỏi một triệu chứng quay lại sẽ được nhận ra thế nào và ai sẽ mở lại phân tích. Thảo luận liệu cửa sổ tái diễn có đủ dài cho kiểu thất bại liên quan không. Người điều phối nên giúp nhóm thống nhất một cửa sổ và một quy tắc khớp, và quyết định đội nào rà soát các lần khớp để đội sở hữu không tự chấm công việc của mình.

**6. Những người trực ca có dùng các lỗi đã biết của chúng ta không, và điều gì khiến họ với tay lấy một cái?**
Hỏi những người xử lý lần cuối họ tìm một lỗi đã biết là khi nào và họ tìm thấy gì. Xem các mục sống ở đâu, chúng được đặt tiêu đề ra sao, và chúng có nói phải làm gì trước không. Chọn một mục để viết lại cùng một người xử lý và thử nó trong tuần trực ca kế tiếp.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu hầu hết các bản sửa vĩnh viễn, và họ cảm nhận sức kéo của công việc tính năng. Họ được lợi từ việc thấy chi phí sự cố của một lỗi lặp lại cạnh công sức để sửa nó, và từ một chỗ rõ ràng cho các hạng mục sửa trong tồn đọng. Họ nên chống lại việc coi công việc vấn đề là một gián đoạn và thay vào đó dành sẵn một phần năng lực hiển thị cho nó. Buổi nhìn lại là nơi tự nhiên để phát hiện mẫu hình và mở vấn đề (xem chủ đề 2.1, Các thước đo dòng chảy).

### Đội dịch vụ và vận hành

Các đội vận hành thấy các triệu chứng lặp lại trước và gánh chi phí bằng các cuộc gọi trực và công việc thủ công. Họ giữ các bản ghi vấn đề và lỗi đã biết, chạy buổi rà soát mẫu hình, và kiểm tra rằng các liên kết được thực hiện. Rủi ro của họ là dành công sức cho bản ghi thay vì gỡ nguyên nhân. Họ nên giữ các mã đóng nhỏ, biến lỗi đã biết thành thứ đầu tiên người xử lý thấy, và giao các bản sửa cho đội sở hữu kèm bằng chứng.

### Lãnh đạo và quản trị

Lãnh đạo quyết định công việc độ tin cậy có thắng tính năng không, và họ đặt các động cơ cho điều gì được ghi lại. Họ nên yêu cầu tái diễn theo nhóm và các vấn đề đang mở cũ nhất trước khi yêu cầu số đếm, và coi chấp nhận rủi ro là một quyết định cần một người sở hữu có tên và ngày rà soát. Báo cáo một tồn đọng giảm mà không có tái diễn thưởng cho việc đóng. Quản trị nên xem xu hướng và quyết định, không phải bảng xếp hạng các đội (xem chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết).

### Khách hàng và người dùng

Người dùng đánh giá quản lý vấn đề bằng một điều: có cùng một thứ cứ hỏng không. Họ không thấy hồ sơ vấn đề, và họ không quan tâm đã đóng bao nhiêu. Nơi các thỏa thuận cho phép, hãy nói với khách hàng về một vấn đề đã biết, cách lách và ngày dự kiến có bản sửa, rồi báo cáo lại khi nó hạ cánh. Một bản sửa được công bố và giao xây dựng nhiều lòng tin hơn một bản sửa lặng lẽ.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực hỗ trợ một ứng dụng lên lịch lâm sàng được các khoa và phòng khám ngoại trú dùng. Một đội sản phẩm xây và vận hành ứng dụng, một đội hạ tầng vận hành nền tảng, và một bàn dịch vụ nhận cuộc gọi. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Trong một buổi rà soát hằng quý, trưởng bộ phận nhận thấy bảng điều khiển vấn đề trông xuất sắc: 46 vấn đề đã đóng so với 31 đã mở, và vấn đề đang mở cũ nhất là 140 ngày. Quản lý các khoa vẫn phàn nàn rằng màn hình lên lịch bị treo lúc đổi ca. Chủ sở hữu dịch vụ yêu cầu tỷ lệ liên kết sự cố-vấn đề và tỷ lệ tái diễn sau khi sửa, chưa có trên bảng điều khiển.

Dữ liệu kể một câu chuyện khác. Cơ cấu mã đóng cho thấy 22 trong 46 lần đóng là "không tái hiện được" hoặc "trùng lặp". Tỷ lệ liên kết cho các sự cố ưu tiên cao là 38 phần trăm. Các sự cố treo được ghi trong bốn danh mục, nên không thấy mẫu hình nào. Sau khi một mẫu 30 sự cố được liên kết lại bằng tay, 17 trong số đó chỉ vào một nguyên nhân: một khóa cơ sở dữ liệu do một tác vụ ban đêm giữ chạy tràn sang ca sáng. Tái diễn cho các vấn đề đã sửa quý trước là 27 phần trăm, cao hơn bất kỳ ai kỳ vọng.

Đội đưa ra ba quyết định. Thứ nhất, phân loại nguyên nhân và triệu chứng có thêm mục "treo lên lịch", và liên kết một vấn đề hoặc "không tìm thấy" trở thành bước bắt buộc khi đóng sự cố. Thứ hai, vấn đề tác vụ ban đêm chuyển từ tồn đọng hạ tầng sang bảng của đội sản phẩm kèm một người sở hữu và ngày mục tiêu, và một cách lách (khởi động lại theo lịch sau tác vụ) được ghi lại như một lỗi đã biết và thử cùng bàn dịch vụ. Thứ ba, bảng điều khiển thay số đếm đã đóng bằng ba con số: tỷ lệ các bản sửa đứng vững sau 90 ngày, trung vị và bách phân vị thứ 85 của thời gian từ nguyên nhân được ghi đến bản sửa, và các vấn đề đang mở cũ nhất kèm quyết định của chúng.

Tám tuần sau, khóa được gỡ bằng một thay đổi cho tác vụ. Các sự cố trong danh mục treo giảm từ khoảng chín mỗi tháng xuống hai, và tỷ lệ tái sử dụng lỗi đã biết tăng lên 71 phần trăm cho các triệu chứng còn lại, chủ yếu vì bàn dịch vụ giờ tìm thấy mục khởi động lại. Rủi ro lợi dụng mà đội bắt được nằm trong thói quen trước đây của chính họ: đóng hồ sơ là "không tái hiện được" khi một sự cố rơi ngoài giờ làm việc. Cơ cấu mã đóng, mẫu các hồ sơ đã đóng được đọc mỗi quý, và nhóm tái diễn giờ đóng vai trò rào chắn. Không ai bị xếp hạng, và buổi rà soát liệt kê dịch vụ và quyết định, không phải nhân viên phân tích.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy gộp công việc vấn đề vào tồn đọng và các cuộc trao đổi cải tiến thường lệ, để các bản sửa vĩnh viễn cạnh tranh công khai với công việc mới. Điều cần lưu ý là một mục tiêu đóng vấn đề nhanh dẫn đến việc đóng chúng bằng cách lách.

### AI

AI có thể gom cụm sự cố, gợi ý nguyên nhân gốc và soạn hồ sơ vấn đề, điều có thể nâng số vấn đề và tỷ lệ liên kết mà không gỡ nguyên nhân nào. Hãy ghép tỷ lệ liên kết với tỷ lệ tái diễn sau khi sửa và đánh dấu những nguyên nhân nào do AI gợi ý và một người xác nhận. Điều cần lưu ý là một nguyên nhân do AI gợi ý có thể hợp lý mà sai, nên hãy xác minh trước khi đóng.

### Tự động hóa

Hãy tự động liên kết sự cố với vấn đề nơi các tín hiệu khớp, và đo việc khớp về các liên kết sai. Điều cần lưu ý là tự động đóng một vấn đề khi các sự cố ngừng giấu một nguyên nhân chỉ mới im lặng.

### Phân tích

Hãy cho thấy thời gian đến bản sửa vĩnh viễn như một phân phối và tỷ lệ tái diễn sau các bản sửa. Quyết định được cung cấp thông tin là nguyên nhân nào xứng đáng có năng lực. Điều cần lưu ý là tái diễn cần một cửa sổ dài, nên hãy nói bạn đã theo dõi bao lâu.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Hiếm khi có một quy trình vấn đề riêng. Đội sửa nguyên nhân trực tiếp, và rủi ro là không ai nhớ vì sao. Hãy giữ một danh sách một trang các sự cố lặp lại và nguyên nhân của chúng, liên kết các bản sửa với trình theo dõi vấn đề, và rà soát danh sách hằng tháng. Đo tái diễn và tuổi của các hạng mục cũ nhất; bỏ qua mã đóng chính thức cho đến khi đội lớn lên.

**Doanh nghiệp nhỏ.** Một người CNTT hoặc một nhà cung cấp dịch vụ được quản lý có thể điều hành mọi thứ. Hãy yêu cầu nhà cung cấp cho các hồ sơ vấn đề và danh mục sự cố đứng sau chúng, và định nghĩa bằng văn bản của "đã giải quyết". Một danh sách ngắn năm vấn đề lặp lại hàng đầu, mỗi cái có người sở hữu có tên và một ngày, thắng một công cụ nặng. Hãy xuất các bản ghi định kỳ để tránh bị khóa chặt.

**Doanh nghiệp lớn.** Nhiều dịch vụ và nhà cung cấp tạo ra nhu cầu lớn nhất về các định nghĩa chung. Hãy thống nhất phân loại nguyên nhân, mã đóng và cửa sổ tái diễn giữa các đội, nêu tên người sở hữu vấn đề theo dịch vụ, và báo cáo theo dịch vụ và nhóm. Nơi một nhà cung cấp giữ bản sửa, hãy theo dõi phản hồi của nhà cung cấp so với thỏa thuận (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng) và leo thang qua một con đường có tài liệu.

**Chính phủ và khu vực công.** Kiểm toán, kiểm soát thay đổi và mua sắm có thể kéo dài con đường từ nguyên nhân đến bản sửa, nên đồng hồ thời gian đến bản sửa nên cho thấy sự chậm trễ nằm ở đâu: điều tra, phê duyệt, mua sắm hay lên lịch. Rủi ro được chấp nhận cần người sở hữu và ngày rà soát được ghi lại, chịu được kiểm toán. Quy tắc lưu giữ và riêng tư áp dụng cho bản ghi sự cố và vấn đề, đặc biệt nơi dữ liệu lâm sàng hoặc của công dân xuất hiện trong chúng.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí có ba phần. Phần thứ nhất là thời gian điều tra: những người có kỹ năng và quyền truy cập để phân tích sự cố, cạnh tranh với công việc khác của họ. Phần thứ hai là chính bản sửa, được giao qua tồn đọng và quy trình thay đổi. Phần thứ ba là chi phí ghi nhận và báo cáo: liên kết sự cố, giữ các phân loại, chạy buổi rà soát mẫu hình và duy trì cơ sở dữ liệu lỗi đã biết. Những chi phí này chủ yếu là thời gian của con người, nên hãy đếm giờ.

Lợi tức hiện ra dưới dạng các sự cố ngừng tái diễn, ít cuộc gọi trực và công sức cách lách thủ công hơn, xử lý sự cố ngắn hơn vì người xử lý tìm thấy lỗi đã biết, và ít leo thang đến kỹ sư hơn. Không số liệu phổ quát nào áp dụng, nên hãy ước lượng của riêng bạn. Với một sự cố lặp lại, nhân số lần xảy ra mỗi năm với công sức xử lý trung bình và một ước lượng tác động kinh doanh mỗi lần, rồi so sánh với công sức để sửa nó. Hãy rà soát ước lượng cùng chủ sở hữu dịch vụ, nêu nó như một ước lượng, và xem lại sau khi cửa sổ tái diễn cho thấy điều đã xảy ra. Quản lý vấn đề sinh lời tốt nhất ở vài nguyên nhân tạo ra phần lớn tải sự cố, mà góc nhìn Pareto tìm ra nhanh.

## Phản mẫu và cạm bẫy

- **Đóng như một mục tiêu.** Một mục tiêu về vấn đề đã đóng thưởng cho các hồ sơ tầm thường và đóng sớm. Hãy báo cáo các thước đo kết quả trước và cho thấy cơ cấu mã đóng.
- **Hồ sơ vấn đề như nghĩa địa.** Các hồ sơ nằm mở không có người sở hữu, ngày hay quyết định. Hãy rà soát danh sách cũ nhất theo nhịp và yêu cầu một quyết định cho mỗi mục.
- **Dừng ở "lỗi con người".** Nó nêu ai đã chạm vào hệ thống chứ không phải vì sao hệ thống cho phép thất bại. Chỉ chấp nhận một nguyên nhân khi nó nêu một điều kiện có thể thay đổi.
- **Không sửa gì cho đến khi nguyên nhân gốc chắc chắn.** Các thất bại phức tạp có thể không có nguyên nhân đơn lẻ. Hãy áp dụng một cách lách và bản sửa được hỗ trợ tốt nhất, rồi theo dõi tái diễn.
- **Cách lách không có lối thoát.** Một cách lách không có ngày rà soát trở thành vĩnh viễn. Hãy ghi một người sở hữu và một ngày khi lỗi đã biết được tạo.
- **Liên kết sự cố yếu.** Liên kết thiếu hoặc cẩu thả làm tái diễn vô hình. Hãy biến việc liên kết thành một phần của đóng sự cố và lấy mẫu các liên kết.
- **Công việc vấn đề ngoài tồn đọng.** Các bản sửa sống trong một hàng đợi riêng chờ mãi mãi. Hãy đặt hạng mục sửa lên bảng của đội sở hữu và xếp ưu tiên nó so với tính năng.
- **So sánh nhân viên phân tích hoặc đội theo số hồ sơ đã đóng.** Nó thưởng cho các dịch vụ dễ và mời gọi việc lợi dụng. Hãy so sánh dịch vụ theo thời gian với lịch sử của chính nó, và đọc các nhóm.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Xác định vấn đề và liên kết | Vấn đề chỉ được mở sau các lần ngừng hoạt động lớn; không có liên kết sự cố | Một số đội liên kết sự cố; danh mục khác nhau theo đội | Phân loại và mã đóng dùng chung; liên kết được thực hiện lúc đóng sự cố | Tỷ lệ liên kết và chất lượng khớp được lấy mẫu và rà soát | Mẫu hình được phát hiện giữa các đội và nhà cung cấp, với lỗi đã biết dùng chung |
| Nguyên nhân gốc và lỗi đã biết | Nguyên nhân được ghi bằng văn bản tự do, nếu có | Lỗi đã biết được một số đội giữ ở các nơi khác nhau | Một cơ sở dữ liệu lỗi đã biết; rà soát nguyên nhân bởi người thứ hai | Thời gian đến nguyên nhân gốc và tái sử dụng lỗi đã biết được theo dõi xu hướng và hành động theo | Người xử lý, nhà cung cấp và khách hàng đóng góp và dùng các mục dùng chung |
| Giao bản sửa | Bản sửa xảy ra khi ai đó có thời gian | Bản sửa được theo dõi trong danh sách riêng của đội | Bản sửa được liên kết với một hạng mục tồn đọng hoặc thay đổi có người sở hữu và ngày | Thời gian đến bản sửa vĩnh viễn được rà soát, với năng lực dự trữ cho nó | Mức ưu tiên bản sửa được đặt chung với lộ trình của sản phẩm và nhà cung cấp |
| Kết quả và học hỏi | Số đếm hồ sơ được báo cáo | Tuổi tồn đọng được báo cáo trong một số buổi rà soát | Tái diễn sau khi sửa và tỷ lệ chỉ có cách lách được báo cáo kèm định nghĩa | Nhóm được ghép với rào chắn và dùng trong quyết định tài trợ | Định nghĩa được sửa khi chúng không còn cung cấp thông tin cho quyết định; cải tiến là thường lệ |

## Danh sách kiểm tra

- [ ] Sổ đăng ký chỉ số định nghĩa một vấn đề, một lỗi đã biết và từng mã đóng.
- [ ] Việc đóng sự cố gồm một liên kết đến một vấn đề, một lỗi đã biết hoặc "không tìm thấy".
- [ ] Một phân loại nguyên nhân và triệu chứng tồn tại, kèm định nghĩa và ví dụ.
- [ ] Mỗi vấn đề có một người sở hữu, một kích hoạt và một ngày quyết định.
- [ ] Thời gian đến nguyên nhân gốc và thời gian đến bản sửa vĩnh viễn được đo riêng, bằng bách phân vị.
- [ ] Mỗi bản sửa vĩnh viễn được liên kết với một hạng mục tồn đọng hoặc thay đổi có người sở hữu.
- [ ] Mỗi cách lách có một người sở hữu và một ngày rà soát.
- [ ] Tái diễn sau khi sửa được theo dõi theo nhóm hằng quý với một cửa sổ nêu rõ.
- [ ] Tái sử dụng lỗi đã biết được đo nơi người xử lý làm việc.
- [ ] Các vấn đề đang mở cũ nhất được rà soát theo nhịp, và mỗi quyết định được ghi lại.
- [ ] Một mẫu các hồ sơ đã đóng được đọc mỗi quý để kiểm tra mã đóng và nguyên nhân.
- [ ] Báo cáo mô tả dịch vụ và đội, và không bảng nào xếp hạng cá nhân.

## Lời nhắc AI

**Tìm các vấn đề ứng viên trong một tập sự cố.**

```text
Here is an export of incidents for [service or team] from [start date] to [end
date]: [paste incident fields such as id, opened time, category, short
description, resolution note]. Group incidents that may share an underlying
cause, explain the evidence for each group, and rank groups by occurrence count
and by [impact measure, for example hours of user impact]. Mark groups where the
evidence is weak. Do not invent causes, counts, or benchmark values. List your
assumptions and the extra data that would raise your confidence.
```

**Rà soát các mã đóng và bản ghi vấn đề.**

```text
Below are [number] closed problem records for [service or team]: [paste id,
closing code, recorded cause, fix reference, closing date]. Check each record
for a closing code that does not match its text, a cause that names a person
instead of a condition, and a fix with no link. Summarize patterns and suggest
three questions for a reviewer. Do not rank people or invent facts about the
records. List your assumptions.
```

**Thiết kế một thước đo tái diễn.**

```text
We want to measure whether fixed problems stay fixed for [service or team]. Our
tools are [ITSM tool, deployment tool], our incident categories are [list], and
our closing codes are [list]. Propose a definition, formula, clock start and
stop, matching rule for symptoms, recurrence window, and exclusions, with a
chart layout showing quarterly cohorts. Suggest how it could be gamed and a
guardrail for each case. Ask me for the thresholds you need instead of
inventing them. List your assumptions.
```

**Chuẩn bị một buổi rà soát quyết định các vấn đề đã cũ.**

```text
Here are the open problems older than [number] days for [service or team]:
[paste id, age, priority, owner, last update, workaround status]. Draft an agenda
for a [length]-minute review in which each item receives one of three decisions:
fix with a date, accept the risk with a named owner and review date, or close
with a reason. Suggest the evidence to bring for each decision. Do not invent
costs or outcomes. List your assumptions and the questions I should answer
first.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề định nghĩa các thước đo sự cố, thay đổi và tri thức mà các chỉ số vấn đề phụ thuộc vào, và rào chắn để ghép với mỗi cái.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số vấn đề mới hoặc đã sửa nêu các đồng hồ, trường hợp loại trừ, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Thước đo của quản lý vấn đề là tái diễn: các sự cố liên kết với một vấn đề có ngừng quay lại không.
- Tính thời gian các giai đoạn riêng, từ bản ghi đến nguyên nhân được ghi lại và từ nguyên nhân đến bản sửa chạy trên môi trường thật.
- Liên kết sự cố với vấn đề lúc đóng, thống nhất cách khớp triệu chứng, và lấy mẫu các liên kết.
- Một cách lách là một giai đoạn có người sở hữu và ngày rà soát, và tỷ lệ chỉ có cách lách cho thấy đang gánh bao nhiêu rủi ro.
- Đặt các bản sửa vĩnh viễn trong tồn đọng của đội sở hữu, và báo cáo các thước đo kết quả trước số đếm hồ sơ.
- Mô tả dịch vụ, nhóm và quyết định. Không bao giờ xếp hạng nhân viên phân tích hay đội theo số vấn đề đã đóng.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
