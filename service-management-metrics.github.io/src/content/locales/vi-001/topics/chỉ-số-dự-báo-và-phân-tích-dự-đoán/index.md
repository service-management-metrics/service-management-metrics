# Chỉ số dự báo và phân tích dự đoán

**Một dự báo là một khoảng kèm hồ sơ thành tích, không phải một ngày hay một con số để bảo vệ, nên hãy đo xem kết quả thực nằm trong khoảng đã nêu bao nhiêu lần, khoảng đó có trung thực về độ rộng của nó không, và có ai đưa ra quyết định tốt hơn nhờ nó không.**

## Tổng quan và động lực

[Dự báo](https://en.wikipedia.org/wiki/Forecasting) ước lượng một đại lượng tương lai từ dữ liệu quá khứ và các giả định đã nêu. Các tổ chức dịch vụ dự báo nhu cầu hỗ trợ, năng lực của một nền tảng, ngày một phần công việc sẽ xong, khả năng một thay đổi sẽ thất bại, và chi phí của một dịch vụ năm sau. Các mô hình dự đoán, gồm cả mô hình học máy, mở rộng điều này sang việc chấm điểm từng hạng mục: phiếu nào sẽ vi phạm mục tiêu của nó, thay đổi nào rủi ro, sự cố nào có khả năng tái diễn.

Dự báo và dự đoán thất bại theo những cách bình thường. Quá khứ có thể không giống tương lai, vì một dịch vụ, một đội hay một công cụ đã đổi. Dữ liệu có thể mỏng hoặc thiên lệch. Khoảng có thể quá hẹp, vì một con số đơn lẻ trông hữu ích hơn một khoảng. Và dự báo có thể bị dùng như một cam kết, nên mọi người làm cho nó thành sự thật hoặc giấu điều mâu thuẫn với nó.

Các chủ đề trước đưa ra dự báo cho những mục đích cụ thể: ngày giao từ thông lượng (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối), năng lực từ nhu cầu (xem chủ đề 5.4, Chỉ số năng lực và hiệu năng), và chi phí (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị). Chủ đề này đưa ra phương pháp chung để đo chất lượng của bất kỳ dự báo hay dự đoán nào, áp dụng cho tất cả chúng. Nó cũng bao quát các mô hình dự đoán có đầu ra dẫn đến hành động, nơi cái giá của một dự đoán sai rơi vào ai đó.

Các thuật ngữ dùng ở đây. Một **dự báo điểm** là một giá trị dự đoán đơn lẻ. Một **khoảng dự đoán** là một khoảng nhằm chứa giá trị thực với một xác suất nêu rõ. **Hiệu chỉnh** là sự khớp giữa xác suất đã nêu và tần suất quan sát được: trong các dự báo nói 80 phần trăm, khoảng 80 phần trăm nên thành hiện thực. **Sai số dự báo** là chênh lệch giữa dự báo và thực tế. Một **dự báo đường cơ sở** là một phương pháp đơn giản, như "giống kỳ trước", để so sánh với một phương pháp phức tạp hơn. Một **dương tính giả** là dự đoán một sự kiện không xảy ra, và một **âm tính giả** là không dự đoán được một sự kiện đã xảy ra. **Trôi dạt** là sự thay đổi trong dữ liệu hoặc trong mối quan hệ giữa đầu vào và kết quả làm giảm độ chính xác của mô hình theo thời gian.

## Nguyên tắc chính

- **Dự báo theo khoảng và giữ hồ sơ thành tích.** Một dự báo không bao giờ được kiểm tra thì không thể cải thiện.
- **So sánh với một đường cơ sở đơn giản.** Một mô hình phức tạp không thắng được "giống kỳ trước" thì không xứng với chi phí của nó.
- **Hiệu chỉnh quan trọng ngang độ chính xác.** Một dự báo nói 90 phần trăm nên đúng khoảng chín lần trong mười.
- **Khớp cái giá của sai lầm với quyết định.** Một báo động giả và một lần bỏ sót không tốn như nhau.
- **Theo dõi sự trôi dạt.** Dự báo suy giảm khi thế giới thay đổi, nên hãy giám sát chúng.
- **Một dự báo không phải một cam kết.** Đừng biến nó thành mục tiêu cho con người.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ khoảng dự báo | Tỷ lệ kết quả thực nằm trong khoảng dự đoán đã nêu | số kết quả trong khoảng / số dự báo được đánh giá; các dự báo được đánh giá là những cái đã biết kết quả | phần trăm | Nhật ký dự báo và số thực tế | Quản lý năng lực và hiệu năng; quản lý tài chính | Dự báo theo khoảng từ thông lượng | Hằng quý |
| Sai số dự báo | Kích thước điển hình của chênh lệch giữa dự báo và thực tế | trung vị của sai số tuyệt đối và bách phân vị thứ 85 của nó, trong đó sai số tuyệt đối = giá trị tuyệt đối của (dự báo trừ thực tế) / thực tế, trên các dự báo được đánh giá | phần trăm | Nhật ký dự báo và số thực tế | Quản lý năng lực và hiệu năng | Rà soát kế hoạch | Hằng quý |
| Kỹ năng so với đường cơ sở | Mức cải thiện của phương pháp dự báo so với một đường cơ sở đơn giản | 1 trừ (sai số tuyệt đối trung vị của phương pháp / sai số tuyệt đối trung vị của đường cơ sở) trên cùng các dự báo | tỷ số | Nhật ký dự báo, nhật ký đường cơ sở và số thực tế | Cải tiến liên tục | Thí nghiệm và so sánh | Hằng quý |
| Chênh lệch hiệu chỉnh | Chênh lệch giữa xác suất đã nêu và tần suất quan sát được | với mỗi dải xác suất, giá trị tuyệt đối của (xác suất đã nêu trừ tỷ lệ quan sát được) lấy trung bình qua các dải; các dải có ít hơn một số trường hợp nêu rõ được báo cáo riêng | điểm phần trăm | Nhật ký dự báo xác suất và kết quả | Quản lý rủi ro; hỗ trợ thay đổi | Hồi cứu về các ước lượng | Hằng quý |
| Độ chính xác và độ phủ của cảnh báo | Với một cảnh báo hay điểm số dự đoán, tỷ lệ cảnh báo đúng và tỷ lệ sự kiện bắt được | độ chính xác = dương tính thật / (dương tính thật + dương tính giả); độ phủ = dương tính thật / (dương tính thật + âm tính giả) | phần trăm | Nhật ký dự đoán và kết quả | Quản lý sự cố; quản lý sự kiện | Định nghĩa hoàn thành cho mô hình | Hằng tháng |
| Tín hiệu trôi dạt dự báo | Sự tăng sai số theo thời gian so với một kỳ tham chiếu | sai số tuyệt đối trung vị trong cửa sổ mới nhất trừ sai số tuyệt đối trung vị trong cửa sổ tham chiếu, kèm kích thước cửa sổ đã nêu | điểm phần trăm | Nhật ký dự báo và số thực tế | Cải tiến liên tục; quản lý năng lực | Kiểm tra và điều chỉnh | Hằng tháng |
| Liên kết dự báo với quyết định | Tỷ lệ dự báo được trích dẫn trong một quyết định được ghi lại | số dự báo được trích dẫn trong nhật ký quyết định / số dự báo được công bố | phần trăm | Nhật ký quyết định và nhật ký dự báo | Cải tiến liên tục; quản trị | Hành động rà soát | Hằng quý |

Sai số dự báo và độ phủ chỉ được tính cho các dự báo đã biết kết quả, nên các dự báo gần đây bị loại cho đến lúc đó. Độ chính xác và độ phủ cảnh báo phụ thuộc vào cách một sự kiện được định nghĩa, nên định nghĩa của sự kiện, như "một thay đổi gây ra sự cố trong 48 giờ", được nêu cùng chỉ số.

## Khuyến nghị

### Dự báo trung thực

**1. Công bố khoảng, không phải ngày đơn lẻ.** Hãy đưa ra một khoảng với xác suất nêu rõ, như "từ 12 đến 18 ngày làm việc, với độ tin cậy 85 phần trăm", và giải thích giả định đằng sau nó. Một con số đơn lẻ mời gọi một cam kết.

**2. Giữ một nhật ký dự báo.** Hãy ghi mỗi dự báo khi nó được đưa ra: đại lượng, giá trị hoặc khoảng, ngày, phương pháp và giả định. Thêm số thực tế khi biết. Không có nhật ký, không có hồ sơ thành tích.

**3. Bắt đầu với một đường cơ sở đơn giản.** Hãy so sánh bất kỳ phương pháp mới nào với một phương pháp ngây thơ, như giá trị kỳ trước hoặc trung bình gần đây. Nếu một phương pháp phức tạp không thắng nó rõ ràng theo thời gian, hãy giữ cái đơn giản.

**4. Nêu các giả định sẽ làm dự báo mất hiệu lực.** Một dự báo nhu cầu giả định không có đợt ra mắt lớn, không có sự cố ngừng hoạt động, không có nhóm khách hàng mới. Hãy viết giả định bên cạnh con số, để người đọc biết khi nào nên nghi ngờ.

### Đo chất lượng

**5. Kiểm tra độ phủ và hiệu chỉnh.** Hãy đếm kết quả nằm trong khoảng bao nhiêu lần. Nếu một khoảng 85 phần trăm chỉ chứa kết quả một nửa số lần, nó quá hẹp. Báo cáo hiệu chỉnh kèm số trường hợp, vì mẫu nhỏ nhiễu.

**6. Đọc sai số như một phân phối.** Một sai số trung vị 10 phần trăm có thể giấu những lần bỏ sót thỉnh thoảng 50 phần trăm mà quan trọng nhất. Hãy cho thấy một bách phân vị cao và những lần bỏ sót lớn nhất, và rà soát chúng.

**7. Khớp thước đo với chi phí quyết định.** Với một cảnh báo dự đoán, chọn độ chính xác hay độ phủ theo cái giá của một báo động giả và của một lần bỏ sót. Một cảnh báo gian lận và một gợi ý định tuyến rủi ro thấp có cân bằng khác nhau.

**8. Theo dõi sự trôi dạt.** Hãy so sánh sai số gần đây với một kỳ tham chiếu và điều tra các lần tăng. Nguyên nhân phổ biến là một dịch vụ mới, một quy trình đã đổi, công cụ mới, hoặc thay đổi cách ghi dữ liệu.

### Dùng dự báo tốt

**9. Liên kết dự báo với quyết định.** Hãy nói dự báo cung cấp thông tin cho quyết định nào, và ghi trong nhật ký quyết định điều đã được quyết định. Cho nghỉ hưu các dự báo mà không ai dùng.

**10. Giữ dự báo tránh xa mục tiêu cho con người.** Một dự báo về khối lượng sự cố mà trở thành hạn ngạch cho bàn dịch vụ sẽ làm méo báo cáo. Hãy coi dự báo là thông tin về một hệ thống.

**11. Giữ một con người chịu trách nhiệm hành động theo dự đoán.** Với các mô hình chấm điểm hạng mục, hãy nêu tên người sở hữu, hành động thực hiện theo một điểm số, cách một người có thể ghi đè nó, và cách lỗi được báo cáo. Rà soát dương tính giả và âm tính giả bằng các trường hợp được lấy mẫu.

**12. Theo dõi thiên kiến và tác hại.** Một mô hình huấn luyện trên các quyết định quá khứ có thể lặp lại thiên kiến của chúng. Hãy kiểm tra kết quả cho các nhóm người dùng hoặc dịch vụ có kết quả khác nhau, và báo cáo điều phép kiểm tra không thể cho thấy. Cuốn sách này không đưa ra tư vấn pháp lý, nên hãy kiểm tra nghĩa vụ với cố vấn pháp lý của chính bạn.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ khoảng dự báo | Nới rộng khoảng cho đến khi độ phủ trông tốt; chỉ đánh giá dự báo dễ | Báo cáo độ rộng khoảng cùng độ phủ; đánh giá mọi dự báo được ghi |
| Sai số dự báo | Sửa dự báo ngay trước kết quả; chọn cửa sổ đánh giá | Dùng dự báo gốc đã ghi; cố định cửa sổ trước |
| Kỹ năng so với đường cơ sở | Chọn đường cơ sở yếu; tinh chỉnh phương pháp trên dữ liệu đánh giá | Thống nhất đường cơ sở trước; đánh giá trên dữ liệu không dùng để tinh chỉnh |
| Chênh lệch hiệu chỉnh | Dùng ít dải hoặc ít trường hợp; gộp dải để giấu khoảng chênh | Báo cáo số trường hợp mỗi dải; số trường hợp tối thiểu |
| Độ chính xác và độ phủ của cảnh báo | Định nghĩa lại sự kiện sau sự việc; đếm bản trùng lặp | Cố định định nghĩa sự kiện trước; loại trùng; lấy mẫu cảnh báo |
| Tín hiệu trôi dạt dự báo | Đặt lại kỳ tham chiếu; phớt lờ sự trôi dạt chậm | Cố định cửa sổ tham chiếu và rà soát nó theo lịch |
| Liên kết dự báo với quyết định | Trích dẫn dự báo trong nhật ký mà không tác động đến quyết định | Hỏi điều gì đã đổi; lấy mẫu các mục |

Một kết quả đọc lành mạnh là các khoảng phủ đúng tỷ lệ kết quả đã nêu mà không rộng đến vô lý, các đường cơ sở đơn giản bị các phương pháp phức tạp vượt qua với biên rõ ràng, sự trôi dạt được nhận ra và điều tra, và dự báo xuất hiện trong các quyết định.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Dự báo đường cơ sở đơn giản | Dễ giải thích và duy trì; khó khớp quá mức | Bỏ lỡ mẫu hình và thay đổi |
| Mô hình thống kê hoặc học máy | Nắm bắt nhiều mẫu hình hơn; mở rộng qua các hạng mục | Khó giải thích; trôi dạt; cần giám sát và dữ liệu |
| Dự báo điểm | Dễ truyền đạt | Độ chính xác giả; mời gọi cam kết |
| Dự báo theo khoảng | Trung thực về độ bất định | Khó truyền đạt hơn; có thể bị đọc là mơ hồ |
| Phán đoán của chuyên gia | Dùng bối cảnh mà mô hình thiếu | Thiên kiến; khó theo dõi |

Kết luận dạng văn xuôi là bắt đầu đơn giản, giữ nhật ký, cho thấy khoảng, và chỉ thêm độ phức tạp khi nó xứng đáng chỗ của mình so với một đường cơ sở. Phán đoán và mô hình có thể làm việc cùng nhau nếu cả hai được ghi lại và kiểm tra.

## Câu hỏi để thảo luận với đội nhóm

**1. Dự báo cuối cùng chúng ta đưa ra là gì, và kết quả ra sao?**
Hầu hết các đội không biết, vì dự báo không được ghi lại. Hỏi con số, giả định và số thực tế. Chú ý bất ngờ đến từ dữ liệu hay giả định. Tiếp theo, bắt đầu một nhật ký dự báo với ví dụ đó.

**2. Dự báo nào chúng ta coi là một cam kết, và ai trả giá khi nó sai?**
Tìm các dự báo đã trở thành mục tiêu, như ngày giao hay con số khối lượng. Hỏi ai cảm thấy áp lực và họ làm gì. Thảo luận khoảng và ngôn ngữ dùng để truyền đạt chúng. Tiếp theo, viết lại một cam kết thành một khoảng kèm giả định.

**3. Mô hình hay công cụ dự đoán của chúng ta có thắng được "giống kỳ trước" không?**
Hãy yêu cầu phép so sánh, không phải tuyên bố của nhà cung cấp. Các đội thường không có đường cơ sở. Thảo luận cách so sánh công bằng trên cùng các trường hợp. Tiếp theo, chạy đường cơ sở song song trong một quý.

**4. Một báo động giả tốn của chúng ta bao nhiêu, và một lần bỏ sót tốn bao nhiêu?**
Điều này đặt cân bằng giữa độ chính xác và độ phủ. Hỏi các ví dụ thật. Chi phí thường khác nhau với những người khác nhau, như một kỹ sư trực và một khách hàng. Tiếp theo, thống nhất loại lỗi nào quan trọng hơn.

**5. Điều gì sẽ làm dự báo của chúng ta ngừng hoạt động, và chúng ta có nhận ra không?**
Thảo luận các thay đổi như một sản phẩm mới, một công cụ mới, hoặc một cách ghi dữ liệu khác. Hỏi tín hiệu nào sẽ cho thấy sự trôi dạt. Tiếp theo, thêm một kiểm tra trôi dạt và một người sở hữu.

**6. Ai hành động theo một dự đoán, và họ có thể nói không không?**
Với các hạng mục được chấm điểm, hỏi ai quyết định điều gì xảy ra. Tìm các hành động tự động không có ghi đè. Thảo luận cách lỗi được báo cáo và sửa. Tiếp theo, viết quy tắc ghi đè.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Hãy dự báo từ lịch sử của chính bạn và đưa ra khoảng. Ghi nhật ký dự báo và so sánh với số thực tế, và đánh dấu các thay đổi làm lịch sử thành một hướng dẫn kém, như một công cụ mới hoặc thay đổi đội. Giữ các con số lập kế hoạch cục bộ của đội ra khỏi các phép so sánh giữa các đội.

### Đội dịch vụ và vận hành

Dự báo nhu cầu, năng lực và sự cố giúp bố trí nhân sự và phòng ngừa. Hãy dùng chúng để lên kế hoạch, không để đặt hạn ngạch. Để ý các mô hình cảnh báo tăng nhiễu, và báo cáo dương tính giả để mô hình có thể được tinh chỉnh.

### Lãnh đạo và quản trị

Hãy yêu cầu hồ sơ thành tích đằng sau một dự báo, không chỉ giá trị của nó, và khoảng. Tránh biến dự báo thành mục tiêu cho con người. Với các mô hình dự đoán dùng trong vận hành, hãy hỏi người sở hữu, quy tắc ghi đè, và phép kiểm tra thiên kiến.

### Khách hàng và người dùng

Bạn cảm nhận tác động của dự báo dưới dạng chờ đợi, ngừng hoạt động, và quyết định đưa ra về bạn. Hãy hỏi các dự đoán ảnh hưởng đến bạn được kiểm tra thế nào và bạn có thể thách thức một cái ra sao. Các báo cáo của bạn về kết quả sai là một phần của phản hồi mà mô hình cần.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bàn dịch vụ CNTT của một cơ quan chính phủ khu vực dự báo khối lượng phiếu hằng tuần để lên kế hoạch nhân sự. Các con số trong ví dụ này chỉ mang tính minh họa. Một công cụ của nhà cung cấp đưa ra dự báo học máy, và người quản lý muốn biết có nên áp dụng không.

Đội bắt đầu một nhật ký dự báo. Trong mười tuần họ ghi ba dự báo cho mỗi tuần: dự báo điểm của nhà cung cấp, một đường cơ sở ngây thơ (trung bình bốn tuần gần nhất), và một khoảng từ các sai số gần đây của đường cơ sở. Sau đó họ tính sai số dự báo cho mỗi cái. Sai số trung vị của nhà cung cấp là 11 phần trăm và của đường cơ sở là 13 phần trăm, nên kỹ năng so với đường cơ sở là 15 phần trăm. Sai số bách phân vị thứ 85 của nhà cung cấp là 38 phần trăm, với những lần bỏ sót lớn trong các tuần có thông báo của cơ quan, vốn không có trong dữ liệu công cụ dùng.

Đội áp dụng dự báo của nhà cung cấp như một đầu vào, thêm một trường cho các sự kiện đã biết, và công bố một khoảng dựa trên các sai số trong quá khứ. Độ phủ khoảng dự báo cho khoảng 85 phần trăm đã nêu là khoảng 80 phần trăm trong mười tuần, với số đếm nhỏ, nên họ báo cáo nó kèm lưu ý rằng mười trường hợp là ít. Họ cũng thiết lập một kiểm tra trôi dạt so sánh sai số của tám tuần gần nhất với tám tuần đầu.

Một rủi ro lợi dụng xuất hiện. Một trưởng nhóm nhận thấy dự báo được dùng để định nhân sự và gợi ý thêm một đệm vào dự báo để đội trông như đủ người. Đội giữ dự báo trung thực và ghi đệm nhân sự như một quyết định riêng. Điều còn khó: các sự kiện mà công cụ không thấy vẫn gây ra những lần bỏ sót lớn, và mười tuần dữ liệu không đủ để đánh giá hiệu chỉnh. Kế hoạch là rà soát lại sau một thời gian dài hơn.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Các chu kỳ lập kế hoạch ngắn cho phép một đội kiểm tra dự báo thường xuyên và sửa chúng cùng các bên liên quan. Một thực hành tốt là dự báo theo khoảng từ thông lượng của chính đội và rà soát hồ sơ thành tích ở buổi trò chuyện cải tiến đều đặn. Điều cần lưu ý là một dự báo bị coi như lời hứa dẫn đến đệm, giấu giếm hoặc chia nhỏ công việc.

### AI

Các mô hình học máy và trợ lý AI có thể tạo ra dự báo và điểm rủi ro, với vẻ ngoài chính xác. Hãy so sánh chúng với một đường cơ sở, giữ một người sở hữu, kiểm tra hiệu chỉnh và tỷ lệ dương tính giả và âm tính giả bằng lấy mẫu, và giữ một con người chịu trách nhiệm cho các hành động theo một điểm số (xem chủ đề 10.5, Chỉ số quản trị và rủi ro AI). Điều cần lưu ý là một dự báo do AI tạo ra có thể đưa một con số tự tin mà không có khoảng và không nêu giả định, nên hãy yêu cầu cả hai.

### Tự động hóa

Hãy tự động hóa việc ghi nhật ký dự báo, thu thập số thực tế, và tính sai số và độ phủ, để hồ sơ thành tích tự xây. Đo các hành động tự động theo sau một dự đoán theo các hành động sai. Điều cần lưu ý là tự động hóa hành động theo một dự báo, như mở rộng năng lực hay gọi trực, làm sai số dự báo hiển thị với người dùng, nên hãy thêm giới hạn và rà soát.

### Phân tích

Chủ đề này là phân tích về dự báo: cho thấy sai số như một phân phối, độ phủ kèm số đếm, và sự trôi dạt kèm cửa sổ đã dùng. Quyết định được cung cấp thông tin là tin một dự báo đến đâu và khi nào thay phương pháp. Điều cần lưu ý là mẫu nhỏ cho hiệu chỉnh không ổn định, nên hãy nêu số dự báo đằng sau mỗi con số (xem chủ đề 10.8, Chỉ số phân tích và chất lượng dữ liệu).

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Lịch sử ngắn và dịch vụ thay đổi thường xuyên, nên dự báo yếu. Hãy dùng đường cơ sở đơn giản và khoảng rộng, và giữ một nhật ký ngắn. Tránh mua công cụ dự báo trước khi có dữ liệu.

**Doanh nghiệp nhỏ.** Tính mùa vụ và vài khách hàng lớn chi phối. Hãy dùng cùng kỳ năm ngoái làm đường cơ sở, và ghi các sự kiện phá vỡ mẫu hình. Hãy cẩn thận với dự báo của nhà cung cấp tuyên bố sự chính xác.

**Doanh nghiệp lớn.** Nhiều dự báo qua các đội cần một nhật ký và định nghĩa chung. Hãy so sánh phương pháp công bằng giữa các đội và tránh xếp hạng các đội theo độ chính xác dự báo. Rà soát mô hình về sự trôi dạt theo lịch.

**Chính phủ và khu vực công.** Dự báo thường hỗ trợ các quyết định ngân sách và nhân sự mang tính công khai. Hãy ghi tài liệu phương pháp và giả định, và kiểm tra quy tắc cho các quyết định tự động ảnh hưởng đến con người. Lên kế hoạch cho các sự kiện bên ngoài như thay đổi chính sách phá vỡ dữ liệu (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là công việc dữ liệu, ghi nhật ký dự báo, công cụ mô hình hóa nếu dùng, thời gian rà soát, và việc giám sát mô hình về sự trôi dạt. Bắt đầu với một nhật ký và một đường cơ sở ngây thơ tốn rất ít.

Lợi tức là lập kế hoạch tốt hơn: năng lực đến trước nhu cầu, nhân sự khớp với nhu cầu, và ít bất ngờ hơn. Khó quy kết, nên tránh tuyên bố một con số. Hãy so sánh chi phí và sai số của một phương pháp dự báo với đường cơ sở theo thời gian, và nêu các giả định dưới dạng khoảng (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh). Phía rủi ro là chi phí của việc dựa quá mức vào một mô hình đã trôi dạt, và của các quyết định dựa trên độ chính xác giả.

## Phản mẫu và cạm bẫy

- **Dự báo một con số bị coi là lời hứa.** Chúng tạo ra đệm và đổ lỗi. Hãy công bố khoảng kèm giả định.
- **Không có nhật ký dự báo.** Không có cách học. Hãy ghi dự báo và số thực tế.
- **Mua một mô hình mà không có đường cơ sở.** Mức lợi không biết. Hãy so sánh với "giống kỳ trước".
- **Đánh giá độ chính xác trên dữ liệu huấn luyện.** Nó tâng bốc mô hình. Hãy đánh giá trên dữ liệu về sau.
- **Phớt lờ dương tính giả.** Dự đoán nhiễu dạy mọi người phớt lờ chúng. Hãy báo cáo độ chính xác và độ phủ.
- **Dự báo làm mục tiêu cho con người.** Chúng làm méo dữ liệu. Hãy dùng chúng để lên kế hoạch.
- **Không kiểm tra trôi dạt.** Mô hình suy giảm âm thầm. Hãy giám sát sai số theo thời gian.
- **Dự đoán không có người sở hữu là con người.** Hành động sai không có ai giải trình. Hãy nêu tên một người sở hữu và quy tắc ghi đè.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Thực hành dự báo | Con số đơn lẻ; không có bản ghi | Một số khoảng; ghi chú không chính thức | Nhật ký dự báo kèm khoảng, giả định và số thực tế | Sai số, độ phủ và đường cơ sở được so sánh theo nhịp | Dự báo và phương pháp được cải thiện qua thí nghiệm và chia sẻ giữa các đội |
| Mô hình dự đoán | Chấp nhận tuyên bố của nhà cung cấp | Thí điểm được so sánh với đường cơ sở | Người sở hữu, đánh giá chất lượng và quy tắc ghi đè cho mỗi mô hình | Trôi dạt, độ chính xác và độ phủ được giám sát | Vòng đời mô hình được quản lý với giám sát và cho nghỉ hưu |
| Dùng trong quyết định | Dự báo như cam kết | Dự báo được cho người ra quyết định xem | Dự báo được liên kết với quyết định trong một nhật ký | Quyết định được rà soát so với kết quả dự báo | Quyết định thích ứng với độ bất định của dự báo |

## Danh sách kiểm tra

- [ ] Một nhật ký dự báo ghi đại lượng, giá trị hoặc khoảng, ngày, phương pháp và giả định.
- [ ] Số thực tế được thêm vào và sai số dự báo được báo cáo như một phân phối.
- [ ] Một đường cơ sở đơn giản được chạy song song với bất kỳ dự báo phức tạp nào.
- [ ] Độ phủ khoảng được báo cáo kèm độ rộng khoảng và số trường hợp.
- [ ] Cảnh báo dự đoán báo cáo độ chính xác và độ phủ theo một định nghĩa sự kiện cố định.
- [ ] Sự trôi dạt được kiểm tra so với một cửa sổ tham chiếu cố định.
- [ ] Mọi mô hình dự đoán có một người sở hữu, một quy tắc ghi đè và một ngày rà soát.
- [ ] Dự báo được liên kết với quyết định trong một nhật ký quyết định.
- [ ] Dự báo không được dùng làm mục tiêu cá nhân.
- [ ] Mỗi chỉ số có một vectơ lợi dụng và một rào chắn được hiển thị bên cạnh.

## Lời nhắc AI

**Thiết kế một nhật ký dự báo và đường cơ sở.**

```text
We forecast [quantity] for [purpose]. Our data is [description of history and
source]. Propose a forecast log with fields, a simple baseline method, and how to
compute error and interval coverage later. Do not invent expected accuracy.
Mark assumptions, and list questions I should answer about the data.
```

**Đánh giá một phương pháp dự báo so với đường cơ sở.**

```text
Below are logged forecasts and actuals for [period]: [paste data without personal
information], with a baseline forecast alongside. Compute the median and 85th
percentile of absolute percentage error for each, interval coverage if intervals
are given, and the skill against the baseline. Do not extrapolate beyond the
data. State the number of cases, say what you could not judge, and list your
assumptions.
```

**Rà soát sự giám sát của một mô hình dự đoán.**

```text
We use a model that [describes what it predicts and what action follows]. Draft
a review of its oversight: owner, evaluation evidence we should ask for, how
errors are reported, the override rule, drift checks, and questions about bias.
Do not make claims about legal requirements; list questions for our legal
adviser. Mark assumptions.
```

**Rà soát rủi ro bị lợi dụng của các thước đo dự báo.**

```text
We report these forecast measures: [paste measures and definitions]. Context:
[team size, tools, audience]. For each measure, list realistic ways it could look
better without improving forecasts, propose a guardrail, and say how that
guardrail could be gamed. Do not invent benchmark values. List your assumptions.
```

## Kỹ năng AI

- [Demand forecasting](../../../../skills/demand-forecasting/SKILL.md): dùng để xây dựng và kiểm tra một dự báo nhu cầu theo khoảng.
- [Trend analysis](../../../../skills/trend-analysis/SKILL.md): dùng để xem xét xu hướng và thay đổi trước khi dự báo.
- [Machine learning model card](../../../../skills/machine-learning-model-card/SKILL.md): dùng để ghi tài liệu mục đích, dữ liệu và giới hạn của một mô hình dự đoán.
- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề bao quát một chỉ số và rào chắn đi kèm của nó.

## Điểm chính cần nhớ

- Một dự báo là một khoảng kèm hồ sơ thành tích, nên hãy ghi nhật ký dự báo và so sánh chúng với số thực tế.
- So sánh bất kỳ mô hình nào với một đường cơ sở đơn giản, và chỉ giữ mô hình phức tạp nếu nó thắng rõ ràng.
- Kiểm tra độ phủ khoảng và hiệu chỉnh kèm số trường hợp đằng sau chúng.
- Chọn độ chính xác hay độ phủ theo cái giá của một báo động giả và của một lần bỏ sót.
- Đừng biến dự báo thành mục tiêu cho con người, và giữ một con người chịu trách nhiệm cho các hành động theo một dự đoán.

## Tài liệu tham khảo và đọc thêm

1. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
2. Wikipedia, [Prediction interval](https://en.wikipedia.org/wiki/Prediction_interval).
3. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
4. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
5. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
6. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
7. Hyndman, R. J., and Athanasopoulos, G., *Forecasting: Principles and Practice*, 3rd edition, OTexts, 2021, https://otexts.com/fpp3/
