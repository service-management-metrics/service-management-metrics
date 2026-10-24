# Công việc đang làm dở và lý thuyết hàng đợi

**Một đội bận kín là một đội có công việc phải chờ, nên hãy đo bao nhiêu công việc đang làm dở, chúng xếp hàng bao lâu và đội chạy gần công suất đến mức nào, rồi dùng số học của hàng đợi để đặt giới hạn trước khi sự chậm trễ kéo đến.**

## Tổng quan và động lực

Mọi đội dịch vụ đều có một hàng đợi, dù có dùng từ đó hay không. Sự cố chờ phân loại, yêu cầu chờ phê duyệt, thay đổi chờ một suất rà soát, và hạng mục tồn đọng chờ ai đó kéo về. Phần lớn thời gian trôi qua trong các hệ thống này là chờ đợi, không phải làm việc. Các thước đo trong chủ đề này giải thích vì sao sự chờ đợi tăng, cách thấy nó sớm và điều một đội có thể làm về nó.

Đại lượng trung tâm là [công việc đang làm dở](https://en.wikipedia.org/wiki/Work_in_process) (WIP), số hạng mục đã bắt đầu và chưa kết thúc. Các đội linh hoạt quản lý dòng chảy làm cho WIP hiển thị trên một bảng và chặn nó bằng một giới hạn WIP. Vận hành dịch vụ theo ITIL đếm các sự cố, yêu cầu và thay đổi đang mở, và gọi tập hợp đó là một hàng đợi hay một tồn đọng các bản ghi. Hai góc nhìn mô tả cùng một thứ: các hạng mục bên trong một hệ thống chưa giao chúng đi. Chủ đề này dùng "công việc đang làm dở" cho cả hai, và nêu ranh giới mỗi lần (những trạng thái nào được tính là "đang làm dở" và những trạng thái nào không), vì ranh giới đó quyết định mọi con số theo sau.

Toán học đến từ [lý thuyết hàng đợi](https://en.wikipedia.org/wiki/Queueing_theory), ngành nghiên cứu các hàng chờ. Kết quả hữu ích nhất của nó cho một đội dịch vụ là [định luật Little](https://en.wikipedia.org/wiki/Little%27s_law), được John Little chứng minh năm 1961. Với một hệ thống ổn định, số hạng mục trung bình trong hệ thống bằng tốc độ đến trung bình nhân với thời gian trung bình một hạng mục ở trong hệ thống. Theo ngôn ngữ phân phối, WIP trung bình bằng thông lượng trung bình nhân với thời gian chu trình trung bình. Định luật đúng bất kể thứ tự phục vụ các hạng mục, điều khiến nó là một phép kiểm tra tính hợp lý rẻ cho bất kỳ tập thước đo dòng chảy nào (xem chủ đề 2.1, Các thước đo dòng chảy, và chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy).

Kết quả thứ hai kém dễ chịu hơn. Khi một tài nguyên dùng chung tiến gần đến mức dùng hết, thời gian chờ tăng ngày càng nhanh. Một xấp xỉ liên quan, [công thức Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), cho thấy độ trễ hàng đợi tăng theo mức sử dụng tỷ lệ với tỷ số giữa mức sử dụng và phần nhàn rỗi còn lại, và cũng tăng theo độ biến thiên của lượt đến và của thời gian phục vụ. Công việc hỗ trợ và vận hành biến thiên theo bản chất, vì sự cố đến theo từng đợt và công sức cho mỗi hạng mục khác nhau rất nhiều. Một đội lên kế hoạch bận 100 phần trăm vì vậy đã lên kế hoạch cho những lần chờ dài, và sự cố lớn đầu tiên biến những lần chờ dài thành một tồn đọng mất hàng tuần để dọn.

Các thuật ngữ dùng trong chủ đề này:

- **Tốc độ đến** là số hạng mục vào hệ thống trên mỗi đơn vị thời gian.
- **Thông lượng** (hay tốc độ rời đi) là số hạng mục rời hệ thống như đã hoàn tất, trên mỗi đơn vị thời gian.
- **Thời gian chu trình** là thời gian trôi qua từ lúc một hạng mục vào ranh giới hệ thống đến lúc nó rời đi. Chủ đề này dùng cùng đồng hồ như trong chủ đề 2.2.
- **Thời gian hàng đợi** là phần thời gian trôi qua mà một hạng mục đang đợi và không ai làm việc trên nó.
- **Mức sử dụng** là phần năng lực sẵn có đang được dùng. Với một đội, năng lực được biểu đạt bằng giờ làm việc hoặc bằng số hạng mục có thể xử lý song song. Mức sử dụng là thuộc tính của một đội hoặc một nhóm tài nguyên, không bao giờ của một cá nhân.
- **Giới hạn WIP** là số hạng mục tối đa đã thỏa thuận trong một giai đoạn hoặc trong toàn hệ thống. Một hạng mục mới không được bắt đầu khi chạm giới hạn.
- Một **nút thắt cổ chai** là giai đoạn có ít năng lực nhất so với nhu cầu. Nó đặt nhịp cho cả chuỗi, một điểm được phát triển bởi [lý thuyết các ràng buộc](https://en.wikipedia.org/wiki/Theory_of_constraints) và ý niệm [nút thắt](https://en.wikipedia.org/wiki/Bottleneck_(production)) của nó.

Góc nhìn linh hoạt và ITIL gặp nhau ở đây: ITIL 4 (2019) coi quản lý năng lực và hiệu năng, quản lý sự cố và quản lý yêu cầu dịch vụ là những thực hành phụ thuộc vào việc khớp năng lực với nhu cầu, và các phương pháp linh hoạt diễn đạt cùng ý tưởng dưới dạng giới hạn công việc đang tiến hành và hoàn tất trước khi bắt đầu. [Phát triển phần mềm tinh gọn](https://en.wikipedia.org/wiki/Lean_software_development) coi công việc chưa hoàn tất là hàng tồn kho với chi phí nắm giữ và rủi ro.

## Nguyên tắc chính

- **Chờ đợi chi phối thời gian trôi qua.** Trong hầu hết hệ thống dịch vụ và phân phối, các hạng mục chờ lâu hơn nhiều so với thời gian ai đó làm việc trên chúng, nên giảm chờ đợi là đòn bẩy lớn hơn làm nhanh hơn.
- **Định luật Little nối ba con số dòng chảy.** WIP trung bình, thông lượng và thời gian chu trình không thể đặt độc lập. Nếu bạn muốn thời gian chu trình ngắn hơn ở cùng thông lượng, bạn phải hạ WIP.
- **Độ trễ tăng dốc gần mức sử dụng đầy.** Độ dư là cái giá của sự đáp ứng nhanh. Một đội không còn năng lực dư không thể hấp thụ một đợt bùng phát hay một hạng mục khẩn mà không làm mọi thứ khác trễ.
- **Biến thiên khuếch đại hàng đợi.** Lượt đến không đều và kích thước hạng mục không đều làm hàng đợi dài ra ngay cả khi tải trung bình trông chấp nhận được. Hãy giảm biến thiên nơi bạn có thể và đệm nó nơi bạn không thể.
- **Giới hạn WIP để hoàn tất công việc, không phải để trông bận.** Một giới hạn WIP là một tín hiệu mở cuộc trò chuyện về công việc bị chặn và năng lực, không phải một quy tắc tuân thủ.
- **Đo ở cấp hệ thống.** WIP, độ dài hàng đợi và mức sử dụng mô tả các đội và dịch vụ, không bao giờ mô tả những người trong đó.
- **Báo cáo phân phối, không phải giá trị trung bình.** Thời gian hàng đợi có đuôi dài, nên hãy cho thấy trung vị và một bách phân vị cao như thứ 85 hoặc 95 (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

## Định nghĩa chỉ số

Bảy thước đo bao quát chủ đề. Mỗi cái được định nghĩa cho một ranh giới có tên mà đội ghi trong sổ đăng ký chỉ số của mình (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Công việc đang làm dở | Số hạng mục đã bắt đầu và chưa kết thúc bên trong ranh giới đã thỏa thuận | Số hạng mục ở các trạng thái "đang làm dở" tại thời điểm chụp; các hạng mục trong tồn đọng hoặc hàng đợi "sẵn sàng" trước trạng thái làm việc đầu tiên và các hạng mục đã xong bị loại trừ | hạng mục | Lịch sử trạng thái của trình theo dõi vấn đề hoặc công cụ ITSM | Quản lý sự cố; quản lý yêu cầu dịch vụ | Số đếm WIP trên bảng | Ảnh chụp hằng ngày, rà soát hằng tuần |
| Độ dài hàng đợi | Số hạng mục đang đợi để công việc bắt đầu hoặc đang đợi giữa các giai đoạn | Số hạng mục ở các trạng thái chờ (ví dụ "mới", "chờ phân loại", "chờ rà soát") tại thời điểm chụp; các hạng mục bị chặn được báo cáo riêng, không cộng vào | hạng mục | Lịch sử trạng thái của trình theo dõi hoặc ITSM | Quản lý sự cố; hỗ trợ thay đổi | Cột sẵn sàng và các cột hàng đợi trên bảng | Ảnh chụp hằng ngày, rà soát hằng tuần |
| Thời gian hàng đợi | Thời gian trôi qua mà một hạng mục đợi trước khi công việc bắt đầu, theo từng giai đoạn | Đồng hồ bắt đầu khi hạng mục vào một trạng thái chờ và dừng khi nó vào trạng thái tích cực kế tiếp; thời gian ở trạng thái được đánh dấu "bị chặn do khách hàng" bị loại trừ và báo cáo thành số liệu riêng; báo cáo trung vị và bách phân vị thứ 85 | giờ hoặc ngày | Dấu thời gian chuyển trạng thái trong trình theo dõi hoặc công cụ ITSM | Bàn dịch vụ; quản lý sự cố; hỗ trợ thay đổi | Thời gian đợi trong một chuỗi giá trị; thời gian trong các cột hàng đợi | Hằng tuần |
| Tốc độ đến và rời đi | Số hạng mục vào và ra hệ thống mỗi kỳ, và hiệu của chúng là mức tăng ròng của hàng đợi | Lượt đến = các hạng mục vào ranh giới trong kỳ; lượt rời đi = các hạng mục hoàn tất trong kỳ; mức tăng ròng = lượt đến trừ lượt rời đi; các hạng mục mở lại chỉ tính là lượt đến nếu đội định nghĩa như vậy | hạng mục mỗi tuần | Dấu thời gian tạo và giải quyết của trình theo dõi hoặc ITSM | Giám sát và quản lý sự kiện; quản lý sự cố | Thông lượng và biểu đồ dòng chảy tích lũy | Hằng tuần |
| Tỷ lệ tải của đội | Tỷ lệ năng lực của đội mà công việc đã lên kế hoạch và dự kiến sẽ tiêu thụ | Số giờ nhu cầu dự kiến trong kỳ (lượt đến nhân công sức trung bình mỗi hạng mục) / số giờ năng lực sẵn có sau nghỉ phép và các cam kết cố định; đội nêu cách ước lượng công sức; cá nhân không bao giờ được báo cáo | phần trăm | Kế hoạch năng lực, lịch sử công sức của trình theo dõi, lịch trực | Quản lý năng lực và hiệu năng; quản lý nhân lực và nhân tài | Năng lực đội trong công việc có kế hoạch | Hằng tháng, và ở mỗi sự kiện lập kế hoạch |
| Tỷ lệ vi phạm giới hạn WIP | Tỷ lệ số ngày mà một giai đoạn hoặc hệ thống vượt giới hạn WIP đã thỏa thuận | Số ngày có WIP trên giới hạn / số ngày làm việc trong kỳ; các ngày đội ghi một ngoại lệ có chủ ý kèm lý do được báo cáo riêng | phần trăm số ngày | Ảnh chụp WIP hằng ngày và nhật ký ngoại lệ | Cải tiến liên tục; quản lý sự cố | Thỏa thuận làm việc về giới hạn WIP | Hằng tuần |
| Tỷ lệ nhất quán của định luật Little | Phép kiểm tra rằng ba con số dòng chảy khớp với nhau | WIP trung bình trong kỳ / (số lượt rời đi mỗi ngày nhân thời gian chu trình trung bình tính theo ngày) cho cùng ranh giới và kỳ; một tỷ lệ gần 1 nghĩa là các định nghĩa nhất quán, một tỷ lệ xa 1 nghĩa là một ranh giới hoặc đồng hồ không nhất quán | tỷ lệ | Cùng dữ liệu trình theo dõi như các thước đo dòng chảy khác | Đo lường và báo cáo | Kiểm tra tính hợp lý của thước đo dòng chảy trong buổi nhìn lại | Hằng tháng |

## Khuyến nghị

### Định nghĩa ranh giới trước

**1. Viết ranh giới hệ thống trước khi đếm bất cứ thứ gì.** Nêu trạng thái nào bắt đầu "đang làm dở" và trạng thái nào kết thúc nó, và những hạng mục nào bị loại trừ (ví dụ bảo trì theo lịch, hoặc các hạng mục chờ khách hàng). Hai đội đếm WIP khác nhau sẽ tạo ra các con số không thể so sánh, và một ranh giới dịch chuyển trong im lặng sẽ phá vỡ phép kiểm tra định luật Little. Hãy ghi ranh giới vào sổ đăng ký chỉ số và chỉ đổi nó kèm một lý do được ghi lại.

**2. Tách chờ khỏi làm trong mô hình trạng thái.** Nếu một trạng thái đơn lẻ bao cả "xếp hàng chờ rà soát" và "đang được rà soát", thời gian hàng đợi vô hình. Hãy đặt cho các trạng thái chờ tên riêng của chúng, như mô tả trong chủ đề 1.5, Nguồn dữ liệu và công cụ đo, để các dấu thời gian chuyển trạng thái lộ ra sự chậm trễ. Cái giá của một trạng thái thừa là nhỏ so với giá trị của việc thấy các hạng mục nằm ở đâu.

### Dùng định luật Little như một phép kiểm tra nhất quán

**3. Chạy phép kiểm tra định luật Little mỗi tháng.** Tính WIP trung bình, thông lượng và thời gian chu trình trung bình cho cùng kỳ và ranh giới, và xem chúng có khớp thô không. Một sự lệch lớn thường nghĩa là các hạng mục đang vào hoặc ra khỏi hệ thống mà không được đếm, hoặc các hạng mục cũ bị đỗ ở một trạng thái không ai chăm sóc. Hãy sửa dữ liệu trước khi diễn giải bất kỳ xu hướng nào. Định luật là một định lý về các hệ thống ổn định, nên hãy áp dụng nó cho các kỳ mà hàng đợi không tăng hoặc giảm đột ngột.

### Theo dõi mức sử dụng và sự tăng của hàng đợi

**4. Lên kế hoạch có độ dư nơi biến thiên cao.** Với xử lý sự cố, công việc trực ca và bất kỳ hàng đợi nào được nuôi bằng nhu cầu ngẫu nhiên, hãy lên kế hoạch dưới công suất đầy để một đợt bùng phát không thành tồn đọng. Các đội thường thấy rằng một tỷ lệ tải trông thoải mái trên giấy đã quá cao một khi tính cả các gián đoạn (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch). Hãy thống nhất khoảng mục tiêu với những người làm việc và rà soát nó sau mỗi sự cố lớn.

**5. Theo dõi mức tăng ròng của hàng đợi cũng như kích thước hàng đợi.** Một hàng đợi 40 hạng mục đang co lại là lành mạnh, và một hàng đợi 15 tăng 5 hạng mục mỗi tuần thì không. Hãy so sánh lượt đến và lượt rời đi mỗi tuần, và vẽ xu hướng bằng [biểu đồ dòng chảy tích lũy](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), nơi một dải mở rộng của một giai đoạn báo hiệu WIP đang tăng ở đó. Khi lượt đến vượt lượt rời đi trong nhiều tuần, hàng đợi đang tăng không giới hạn và đến lúc phải quyết định: thêm năng lực, giảm nhu cầu, hoặc đổi những gì được chấp nhận.

**6. Đọc thời gian hàng đợi theo giai đoạn để tìm nút thắt.** Chia thời gian trôi qua thành các giai đoạn chờ theo từng giai đoạn. Giai đoạn có thời gian hàng đợi dài nhất và nhiều hạng mục đang đợi nhất là ứng viên nút thắt. Cải thiện bất kỳ giai đoạn nào khác sẽ không rút ngắn cả hệ thống, nên hãy hướng công sức cải tiến vào ràng buộc, và kiểm tra lại sau đó vì ràng buộc di chuyển.

### Giới hạn WIP theo cách hiệu quả

**7. Đặt giới hạn WIP đầu tiên từ quan sát, rồi điều chỉnh.** Bắt đầu gần WIP trung bình hiện tại, hoặc thấp hơn một chút, và quan sát điều gì xảy ra với thời gian chu trình và các hạng mục bị chặn. Hạ giới hạn từng bước trong khi đội vẫn giữ được mọi người làm việc hiệu quả vào việc hoàn tất. Không có con số đúng phổ quát, và một con số vay từ đội khác không mang bằng chứng nào cho đội bạn.

**8. Coi một lần vi phạm là một tín hiệu nhắc, không phải một sự vi phạm.** Khi WIP vượt giới hạn, hãy hỏi điều gì đang chặn việc hoàn tất và ai có thể xúm vào. Một lần vi phạm được ghi kèm lý do, như một bản sửa khẩn trên môi trường thật, là thông tin. Nếu vi phạm thành thường lệ, giới hạn sai hoặc hệ thống quá tải, và đối sách là một cuộc trò chuyện về năng lực thay vì một lời khiển trách.

**9. Áp dụng giới hạn cho cả chuỗi giá trị, không phải một cột.** Một giới hạn chỉ trên "đang tiến hành" để công việc chất đống trong các hàng đợi rà soát, kiểm thử và phê duyệt. Hãy giới hạn số hạng mục trong hệ thống đầu-cuối, và thêm giới hạn giai đoạn nơi một hàng đợi cụ thể tiếp tục tăng. Các giai đoạn dùng chung như rà soát hội đồng thay đổi hay môi trường kiểm thử xứng đáng có giới hạn hiển thị riêng và thời gian hàng đợi riêng.

### Xử lý công việc khẩn và biến thiên một cách có chủ ý

**10. Đặt một chính sách cho công việc khẩn cấp.** Không có nó, các hạng mục khẩn âm thầm vượt mọi giới hạn và đội không phân biệt được tải có kế hoạch với ngoài kế hoạch. Hãy định nghĩa điều gì đủ điều kiện, bao nhiêu hạng mục khẩn được phép cùng lúc, và công việc nào tạm dừng. Hãy đếm các hạng mục khẩn và tác động của chúng lên thời gian hàng đợi, để cái giá của sự khẩn cấp hiển thị với những người yêu cầu (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Công việc đang làm dở | Chuyển hạng mục sang trạng thái "đỗ" hoặc "giữ lại" để ở dưới giới hạn; tách hạng mục để trông nhỏ hơn; bắt đầu công việc ngoài bảng | Số hạng mục ở các trạng thái đỗ và tuổi của chúng; lấy mẫu bảng so với công việc thật; báo cáo hạng mục cũ nhất đang làm dở |
| Độ dài hàng đợi | Đóng và mở lại hạng mục; từ chối hạng mục mới ở cửa; đổi tên các trạng thái chờ để chúng rơi ngoài số đếm | Tỷ lệ mở lại và tỷ lệ từ chối bên cạnh độ dài hàng đợi; rà soát định nghĩa trạng thái ở mỗi lần rà soát chỉ số |
| Thời gian hàng đợi | Bắt đầu đồng hồ muộn bằng cách tạo bản ghi sau khi công việc đã sẵn sàng; tạm dừng đồng hồ qua các trạng thái bị chặn hoặc chờ khách hàng; đánh dấu một hạng mục đang tiến hành khi nó mới chỉ được mở | Phân phối thời gian ở các trạng thái bị chặn và tạm dừng; tỷ lệ hạng mục được tạo sau khi đã bắt đầu; thời gian chờ do người yêu cầu báo cáo từ một khảo sát ngắn |
| Tốc độ đến và rời đi | Đóng hạng mục nhanh để nâng lượt rời đi; tách một yêu cầu thành nhiều để nâng cả hai số đếm; đếm các bản trùng lặp là lượt đến | Các thước đo chất lượng và mở lại trên hạng mục đã đóng (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố); phân phối kích thước hạng mục; kiểm tra kết quả khách hàng |
| Tỷ lệ tải của đội | Đánh giá thấp công sức để cho thấy năng lực dư, hoặc phóng đại nhu cầu để biện minh số người; báo cáo tỷ lệ cho một kỳ thuận lợi | So sánh công sức ước lượng và thực tế mỗi hạng mục; cho thấy tỷ lệ cùng xu hướng và tỷ lệ gián đoạn; đồng nghiệp rà soát phương pháp ước lượng |
| Tỷ lệ vi phạm giới hạn WIP | Nâng giới hạn để ngừng vi phạm; giấu vi phạm bằng cách chuyển hạng mục ra khỏi bảng; cấp ngoại lệ dễ dãi | Số lượng và lý do của các ngoại lệ; lịch sử thay đổi giới hạn kèm ngày; bách phân vị thời gian chu trình bên cạnh tỷ lệ vi phạm |
| Tỷ lệ nhất quán của định luật Little | Điều chỉnh ranh giới hoặc kỳ cho đến khi tỷ lệ tiến gần 1; loại các hạng mục sống lâu là ngoại lai | Cố định ranh giới và kỳ từ trước; công bố các hạng mục bị loại và số đếm của chúng; rà soát thay đổi ranh giới kèm lý do |

Một kết quả đọc lành mạnh là một đội có WIP ổn định hoặc giảm, có các bách phân vị thời gian hàng đợi phẳng hoặc đang cải thiện, có lượt đến và lượt rời đi gần cân bằng, và có các vi phạm đi kèm lý do dẫn đến hành động. Tỷ lệ định luật Little lảng vảng gần 1 vì dữ liệu nhất quán, không phải vì ai đó đã tinh chỉnh nó.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Giới hạn WIP chặt | Thời gian chu trình ngắn hơn, phát hiện vấn đề sớm hơn, hoàn tất nhiều hơn | Thời gian nhàn rỗi có thể xuất hiện ở một giai đoạn; cần kỷ luật và một chút đào tạo chéo; có thể làm các bên liên quan muốn bắt đầu công việc bực bội |
| Giới hạn WIP lỏng hoặc không có | Ai cũng trông bận và yêu cầu được chấp nhận nhanh | Hàng đợi dài, phân phối chậm, tắc nghẽn ẩn, chuyển ngữ cảnh nhiều |
| Năng lực dư có kế hoạch | Hấp thụ các đợt bùng phát và công việc khẩn; giữ thời gian phản hồi ngắn | Trông như lãng phí trên báo cáo mức sử dụng; cần lãnh đạo chấp nhận hiệu suất bề ngoài thấp hơn |
| Mức sử dụng kế hoạch cao | Có vẻ hiệu quả và rẻ mỗi giờ | Chờ đợi tăng dốc khi tải gần năng lực; mong manh trước bất kỳ gián đoạn nào |
| Dùng định luật Little để lập kế hoạch | Đơn giản, tổng quát và nhanh áp dụng | Chỉ đúng cho các hệ thống ổn định và cho giá trị trung bình; không nói gì về một hạng mục đơn lẻ |

Hãy giới hạn WIP và giữ độ dư nơi biến thiên và cái giá của sự chậm trễ cao, và chấp nhận giới hạn lỏng hơn nơi công việc ổn định và độc lập.

Trong mô hình sách giáo khoa đơn giản nhất của một máy chủ đơn với lượt đến và thời gian phục vụ ngẫu nhiên (một hàng đợi M/M/1), thời gian trung bình trong hệ thống là thời gian phục vụ chia cho một trừ mức sử dụng: gấp 2 lần ở 50 phần trăm, gấp 5 lần ở 80 phần trăm, gấp 10 lần ở 90 phần trăm, và gấp 20 lần ở 95 phần trăm. Các đội thật không phải máy chủ đơn, nên hãy coi các con số này là hình dạng của đường cong, không phải một dự báo.

## Câu hỏi để thảo luận với đội nhóm

**1. Điều gì được tính là "đang làm dở" với chúng ta, và tất cả chúng ta có đếm giống nhau không?**
Hãy yêu cầu mỗi người nêu trạng thái đầu tiên và cuối cùng làm một hạng mục thành một phần của WIP, rồi so sánh các câu trả lời. Tìm các trạng thái như "giữ lại" hoặc "chờ khách hàng" mà một số người đếm còn những người khác thì không. Thống nhất một ranh giới và ghi nó ra. Người điều phối nên ghi lại các câu trả lời sẽ thay đổi con số WIP ra sao, vì điều đó cho thấy chỉ số nhạy với định nghĩa đến mức nào.

**2. Các hạng mục của chúng ta chờ lâu nhất ở đâu, và ai sở hữu hàng đợi đó?**
Vẽ dòng chảy từ lúc đến đến lúc xong và đánh dấu các điểm chờ. Dùng dữ liệu một tháng gần đây, ước lượng thời gian chờ trung vị và bách phân vị thứ 85 tại mỗi điểm. Thảo luận hàng đợi nào không ai sở hữu, như một bước phê duyệt hoặc một môi trường kiểm thử dùng chung. Thống nhất một hàng đợi để xem xét chi tiết và một người mang dữ liệu lần sau.

**3. Bận đến mức nào là quá bận với loại công việc chúng ta làm?**
So sánh tải đã lên kế hoạch với tỷ lệ thời gian thực sự dành cho gián đoạn và các hạng mục khẩn. Hỏi điều gì đã xảy ra với hàng đợi lần cuối nhu cầu tăng vọt. Thảo luận ý tưởng rằng một đội không còn năng lực dư không thể phản hồi nhanh. Người điều phối nên hướng tới một khoảng mục tiêu cho tỷ lệ tải, không phải một con số đơn lẻ, và một kế hoạch cho việc điều gì xảy ra khi khoảng đó bị vượt.

**4. Hàng đợi của chúng ta đang tăng, giảm hay ổn định, và làm sao chúng ta biết?**
Xem lượt đến và lượt rời đi trong tám tuần qua. Một biểu đồ đơn giản là đủ. Hỏi liệu có ai nhận ra một sự tăng chậm trước khi nó thành vấn đề không, và tín hiệu nào sẽ kích hoạt hành động. Thống nhất một đội nên làm gì khi lượt rời đi tụt sau lượt đến ba tuần liên tiếp.

**5. Điều gì sẽ xảy ra nếu chúng ta hạ giới hạn WIP đi một?**
Yêu cầu mọi người dự đoán hạng mục nào sẽ phải chờ, hạng mục nào sẽ xong sớm hơn, và họ sẽ làm gì khi không thể bắt đầu thứ gì mới. Làm lộ ra những nỗi sợ như bị coi là nhàn rỗi.

**6. Các con số của chúng ta có khớp với nhau không?**
Lấy dữ liệu một tháng và tính WIP trung bình, thông lượng và thời gian chu trình trung bình. Kiểm tra liệu WIP có xấp xỉ thông lượng nhân thời gian chu trình không. Nếu không, hãy săn nguyên nhân, như các hạng mục đã xong nhưng chưa đóng, hoặc các hạng mục đóng mà chưa từng bắt đầu. Người điều phối nên coi sự lệch là một món quà: nó chỉ ra một vấn đề dữ liệu hoặc định nghĩa mà nếu không sẽ làm méo mọi thước đo dòng chảy khác.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối cảm nhận tác động của WIP thừa dưới dạng chuyển ngữ cảnh, phản hồi muộn và công việc chưa hoàn tất bị mục nát. Họ được lợi nhiều nhất từ các giới hạn WIP hiển thị, hạng mục nhỏ và thói quen hoàn tất trước khi bắt đầu. Một đội nên nhìn vào thời gian hàng đợi của chính mình giữa các giai đoạn, như chờ rà soát, vì những sự chậm trễ này thường lớn hơn thời gian dành để viết mã (xem chủ đề 2.7, Chỉ số yêu cầu hợp nhất và rà soát mã).

### Đội dịch vụ và vận hành

Các đội vận hành đối mặt với nhu cầu ngẫu nhiên, nên hiệu ứng hàng đợi mạnh. Một bàn dịch vụ, một vòng trực ca và một hội đồng rà soát thay đổi mỗi cái hành xử như một hàng đợi với lượt đến biến thiên. Các đội này cần độ dư tường minh, quy tắc ưu tiên rõ ràng và một chính sách cho công việc khẩn cấp để các hạng mục khẩn không âm thầm chiếm chỗ mọi thứ khác (xem chủ đề 3.1, Chỉ số bàn dịch vụ, và chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca). Hãy đo thời gian hàng đợi ở mỗi bàn giao, và để ý công việc nảy qua lại giữa các nhóm (xem chủ đề 9.3, Chỉ số cộng tác và bàn giao).

### Lãnh đạo và quản trị

Lãnh đạo ảnh hưởng đến hàng đợi qua nhu cầu họ chấp nhận và mức sử dụng họ thưởng. Họ nên yêu cầu bách phân vị thời gian hàng đợi và mức tăng ròng của hàng đợi cũng như mức sử dụng, và chờ đợi một dịch vụ lành mạnh chạy dưới công suất đầy. Một yêu cầu thêm nhiều dự án cho một đội đã chạm giới hạn là một quyết định kéo dài thời gian chu trình của mọi người, và quản trị nên làm sự đánh đổi này tường minh. Hãy tài trợ năng lực cho ràng buộc thay vì các chiến dịch hiệu quả chung chung (xem chủ đề 5.4, Chỉ số năng lực và hiệu năng).

### Khách hàng và người dùng

Khách hàng trải nghiệm hàng đợi như việc chờ một phản hồi, và họ hiếm khi quan tâm đội bận đến đâu. Họ cần những kỳ vọng trung thực dựa trên phân phối của các lần chờ trong quá khứ, một cách để thấy trạng thái yêu cầu của mình và một đường leo thang cho nhu cầu khẩn. Giới hạn WIP có thể nghĩa là chấp nhận yêu cầu mới chậm hơn và hoàn tất các yêu cầu đã chấp nhận nhanh hơn, và lựa chọn đó nên được giải thích cho họ (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực có một bàn dịch vụ, một đội hạ tầng và một đội ứng dụng. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Đội ứng dụng xử lý các yêu cầu dịch vụ và thay đổi nhỏ cho hệ thống lâm sàng. Trong một quý, bảng điều khiển của họ cho thấy thời gian chu trình trung vị tăng từ 6 ngày làm việc lên 11, trong khi đội báo cáo là "bận tối mắt". Tỷ lệ tải mà đội tính cho quý là 98 phần trăm. Bách phân vị thứ 85 của thời gian hàng đợi cho giai đoạn "chờ lâm sàng ký duyệt" là 9 ngày làm việc, và WIP trung bình trên bảng là 44 hạng mục so với thông lượng 4 hạng mục mỗi ngày làm việc. Áp dụng định luật Little, 44 chia 4 cho ra thời gian chu trình trung bình ngụ ý là 11 ngày làm việc, khớp với số liệu đo được, nên dữ liệu nhất quán và đội tin nó.

Trưởng bộ phận lúc đầu đề nghị thuê một nhà thầu. Trưởng đội chỉ vào bảng phân tích theo giai đoạn: trong 11 ngày, hàng đợi trước khi lâm sàng ký duyệt và hàng đợi trước khi triển khai chiếm phần lớn thời gian trôi qua, và công việc tích cực là một phần nhỏ. Lượt đến trong quý vượt lượt rời đi khoảng 2 hạng mục mỗi tuần, nên hàng đợi tăng đều. Đội cũng đã chấp nhận mọi yêu cầu khẩn, và các hạng mục khẩn không có chính sách.

Đội quyết định bốn thay đổi, ghi trong nhật ký quyết định. Họ đặt một giới hạn WIP toàn hệ thống là 30 hạng mục, với một giới hạn giai đoạn là 8 cho hàng đợi ký duyệt. Họ lên kế hoạch cho một tỷ lệ tải khoảng 80 phần trăm để các gián đoạn dự kiến vừa vặn. Họ viết một chính sách khẩn cấp cho phép tối đa hai hạng mục khẩn cùng lúc. Họ đề nghị nhóm lâm sàng ký duyệt tổ chức một suất rà soát hằng ngày ngắn thay vì một cuộc họp hằng tuần. Sau tám tuần, đội báo cáo thời gian chu trình trung vị 7 ngày làm việc, thời gian hàng đợi ở bách phân vị thứ 85 tại khâu ký duyệt là 3 ngày làm việc, và tỷ lệ vi phạm là 10 phần trăm số ngày, với các lý do được ghi lại.

Đội bắt được một rủi ro lợi dụng vào tháng thứ hai. Tỷ lệ vi phạm trông xuất sắc, nhưng một mẫu của bảng cho thấy nhiều hạng mục trong một trạng thái mới tên "pending", nằm ngoài số đếm WIP, và rào chắn đếm trạng thái đỗ đã có xu hướng tăng. Đội gỡ trạng thái đó, chuyển các hạng mục trở lại số đếm, và yêu cầu mọi trạng thái mới phải được thêm vào sổ đăng ký kèm định nghĩa. Tỷ lệ vi phạm tăng lên 18 phần trăm trong vài tuần, điều mà đội chấp nhận là con số trung thực, rồi giảm xuống khi các hạng mục bị chặn được giải quyết.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Giới hạn công việc đang làm dở hỗ trợ nhịp độ bền vững và phân phối liên tục: ít thứ đang bay hơn nghĩa là mỗi thứ xong sớm hơn và phản hồi đến sớm hơn. Một thói quen thực tế là thống nhất một giới hạn với đội và các bên liên quan và rà soát các vi phạm ở cuộc trao đổi cải tiến định kỳ. Điều cần lưu ý là một giới hạn được thực thi như một quy tắc mà không thảo luận sẽ bị lợi dụng bằng cách tách hoặc giấu công việc.

### AI

Sự hỗ trợ của AI làm cho việc bắt đầu nhiều công việc song song trở nên dễ dàng, vì một bản nháp tốn ít. Điều đó có thể nâng công việc đang làm dở và độ dài hàng đợi cho những con người phải rà soát và quyết định. Hãy ghép bất kỳ sự tăng nào của công việc đã bắt đầu với thời gian hàng đợi ở khâu rà soát, và với tỷ lệ tải của đội rà soát. Điều cần lưu ý là nhiều công việc do AI bắt đầu hơn có thể bị bỏ dở, nên hãy đếm các bản nháp bị loại bỏ cũng như các bản đã hoàn tất.

### Tự động hóa

Hãy đọc độ dài hàng đợi và tốc độ đến từ hệ thống ghi nhận chính thức một cách tự động, và đặt cảnh báo trên các xu hướng như tỷ lệ tải tăng, cũng như trên các ngưỡng cố định. Tự động hóa định tuyến công việc nên được đo về các lần định tuyến sai và về hàng đợi mà nó tạo ra khi thất bại. Điều cần lưu ý là một quy tắc tự động giao việc có thể âm thầm tập trung công việc vào vài người hoặc một đội duy nhất.

### Phân tích

Hãy dùng định luật Little như một phép kiểm tra nhất quán giữa công việc đang làm dở, thông lượng và thời gian chu trình, và coi một khoảng chênh lớn là một vấn đề dữ liệu hoặc định nghĩa. Quyết định mà điều này cung cấp thông tin là đặt giới hạn và năng lực ở đâu. Điều cần lưu ý là định luật giả định một hệ thống ổn định, nên đừng áp dụng nó qua một kỳ có thay đổi lớn về lượt đến.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Nhu cầu không đều và cám dỗ là bắt đầu mọi thứ. Một bảng đơn giản với giới hạn WIP hiển thị và một lần kiểm tra hằng tuần hạng mục cũ nhất đang làm dở là đủ. Hãy giữ độ dư cho các vấn đề môi trường thật, vì một lần ngừng hoạt động có thể nuốt cả đội.

**Doanh nghiệp nhỏ.** Một hoặc hai người thường xử lý hỗ trợ, dự án và hành chính, và hộp thư đến là hàng đợi. Hãy tách công việc có kế hoạch khỏi công việc phản ứng, đặt giới hạn hằng ngày cho các tác vụ bắt đầu, và cho khách hàng biết thời gian chờ thông thường cho mỗi loại yêu cầu.

**Doanh nghiệp lớn.** Nhiều đội dùng chung các giai đoạn như phê duyệt thay đổi, rà soát bảo mật và môi trường kiểm thử, và các hàng đợi dùng chung thường dài nhất. Hãy đo thời gian hàng đợi ở các giai đoạn dùng chung và công bố nó, giao cho mỗi giai đoạn dùng chung một người sở hữu, và tránh báo cáo mức sử dụng như một mục tiêu. Công cụ có thể đếm WIP khác nhau giữa các đội, nên hãy thống nhất một ranh giới chung và một vốn từ vựng trạng thái chung trước khi tổng hợp (xem chủ đề 2.4, Chỉ số chuỗi giá trị).

**Chính phủ và khu vực công.** Thời hạn theo luật, các bước mua sắm và phê duyệt chính thức tạo ra các hàng đợi dài mà các đội không kiểm soát. Hãy tách thời gian mà một đội kiểm soát khỏi thời gian chờ các cơ quan khác, và báo cáo cả hai. Nơi các mục tiêu dịch vụ được đặt trong luật hoặc quy định, hãy ghi tài liệu quy tắc đồng hồ và mọi lần tạm dừng, và giữ dấu vết kiểm toán (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là phân phối nhanh hơn, dễ đoán hơn mà không thêm nhân sự, vì chờ đợi chi phối thời gian trôi qua và một sự cắt giảm khiêm tốn WIP hoặc một hàng đợi phê duyệt dài rút ngắn thời gian chu trình cho mọi hạng mục theo sau. Độ dư có kế hoạch cũng cho phép một đội hấp thụ một sự cố lớn mà không mất hàng tuần công việc khác.

Chi phí khiêm tốn và chủ yếu là con người: công sức để định nghĩa ranh giới và trạng thái, để dựng một ảnh chụp WIP hằng ngày và một báo cáo thời gian hàng đợi từ dữ liệu công cụ hiện có, và để tổ chức một buổi rà soát hằng tuần ngắn. Giới hạn WIP cũng nghĩa là nói chưa được với một số yêu cầu, điều cần sự đồng thuận của các bên liên quan, và năng lực nhàn rỗi là một chi phí bề ngoài mà lãnh đạo cần hiểu như một loại bảo hiểm chống chậm trễ.

Lợi tức nên được mô tả qua các mẫu hình mà tổ chức tự đo được thay vì qua các tỷ lệ phần trăm vay mượn. Hãy theo dõi trung vị và bách phân vị thứ 85 của thời gian chu trình trước và sau các giới hạn, số hạng mục già hơn một ngưỡng đã thỏa thuận, tỷ lệ vi phạm và lý do của nó, và tỷ lệ thời gian dành cho công việc khẩn. Hồ sơ kinh doanh mạnh nhất khi nó gắn thời gian hàng đợi với điều mà doanh nghiệp đã cảm nhận, như thời gian chờ quyền truy cập cho một nhân viên mới, một thay đổi hệ thống lâm sàng hay một bản sửa cho khách hàng. Tổng chi phí sở hữu bị chi phối bởi thời gian của những người rà soát và hành động theo các con số, nên hãy tính thời gian đó so với sự chậm trễ mà nó loại bỏ. Một đội nên dựng đường cơ sở của riêng mình, vì không có giá trị chuẩn nào được trích dẫn ở đây.

## Phản mẫu và cạm bẫy

- **Nhắm tới mức sử dụng 100 phần trăm.** Nó đảm bảo chờ đợi dài và phân phối mong manh. Hãy lên kế hoạch một tỷ lệ tải có độ dư và rà soát nó sau các gián đoạn.
- **Chỉ giới hạn cột "đang tiến hành".** Khi đó công việc chất đống trong các hàng đợi ngoài giới hạn. Hãy giới hạn hệ thống đầu-cuối và thêm giới hạn giai đoạn nơi hàng đợi tăng.
- **Coi giới hạn WIP là quy tắc để thực thi.** Con người giấu công việc để tuân thủ. Hãy dùng một lần vi phạm như một lời nhắc để hỏi điều gì đang bị chặn, và ghi lại lý do.
- **Đỗ hạng mục vào các trạng thái không giới hạn.** Số đếm giữ thấp trong khi công việc chờ không ai thấy. Hãy đưa các trạng thái đỗ vào một số đếm hiển thị và rà soát tuổi của chúng.
- **Đo mức sử dụng của cá nhân.** Nó thưởng cho việc trông bận và mời gọi xếp hạng. Hãy đo đội hoặc nhóm tài nguyên, và không bao giờ công bố số liệu theo từng người.
- **Bỏ qua phía lượt đến.** Các đội làm việc trên lượt rời đi trong khi nhu cầu cứ tăng. Hãy theo dõi lượt đến, và khi chúng vượt năng lực, hãy đưa ra một quyết định tường minh về điều gì được chấp nhận.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và ranh giới | Mỗi người đếm WIP theo cách riêng | Một số đội viết một ranh giới cho bảng của họ | Một ranh giới và vốn từ vựng trạng thái bằng văn bản, với các trạng thái chờ tách khỏi các trạng thái làm việc | Thay đổi ranh giới được ghi lại và phép kiểm tra định luật Little chạy hằng tháng | Ranh giới được căn chỉnh với nhà cung cấp và các đội đối tác, và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Giới hạn WIP và độ dư | Không có giới hạn; ai cũng bận | Giới hạn không chính thức trên một cột | Giới hạn toàn hệ thống và theo giai đoạn, kèm nhật ký vi phạm và một khoảng tải nêu rõ | Giới hạn được điều chỉnh từ bằng chứng thời gian chu trình và hàng đợi theo nhịp | Giới hạn và năng lực được phối hợp giữa các đội dùng chung các giai đoạn |
| Khả năng thấy hàng đợi | Chờ đợi chỉ thấy qua phàn nàn | Độ dài hàng đợi được đếm trên một số bảng | Bách phân vị thời gian hàng đợi theo giai đoạn được cho đội sở hữu thấy | Mức tăng ròng của hàng đợi được theo dõi xu hướng cùng rào chắn và hành động trong công việc được tài trợ | Thời gian hàng đợi ở các giai đoạn dùng chung và bên ngoài được báo cáo cởi mở cho khách hàng và nhà cung cấp |
| Sử dụng trong quyết định | Yêu cầu năng lực được tranh luận bằng giai thoại | Mức sử dụng được trích dẫn để biện minh số người | Bằng chứng hàng đợi và thời gian chu trình được dùng trong lập kế hoạch | Đánh đổi nhu cầu và năng lực được quyết định bằng dữ liệu trong các buổi rà soát quản trị | Nhu cầu được định hình cùng khách hàng dùng các phân phối thời gian chờ |

## Danh sách kiểm tra

- [ ] Ranh giới hệ thống cho WIP được viết ra, với các trạng thái bắt đầu và kết thúc và các trường hợp loại trừ.
- [ ] Các trạng thái chờ và trạng thái làm việc là các trạng thái riêng trong quy trình.
- [ ] Một ảnh chụp WIP và hàng đợi hằng ngày được thu nhận và lưu giữ.
- [ ] Thời gian hàng đợi được báo cáo là trung vị và một bách phân vị cao, theo giai đoạn.
- [ ] Lượt đến và lượt rời đi được vẽ hằng tuần, kèm một biểu đồ dòng chảy tích lũy.
- [ ] Một giới hạn WIP tồn tại cho hệ thống và cho mọi giai đoạn có hàng đợi đang tăng.
- [ ] Các lần vi phạm giới hạn được ghi lại kèm lý do và rà soát hằng tuần.
- [ ] Một chính sách định nghĩa công việc khẩn cấp và giới hạn số lượng cùng lúc.
- [ ] Tỷ lệ tải của đội được ước lượng ở cấp đội, không bao giờ theo từng người, với phương pháp được nêu rõ.
- [ ] Phép kiểm tra định luật Little chạy hằng tháng và các chỗ lệch được điều tra.
- [ ] Các trạng thái đỗ và bị chặn được đếm và tuổi của chúng được rà soát.
- [ ] Mọi thay đổi đối với một ranh giới, trạng thái hay giới hạn được ghi lại kèm ngày và lý do.

## Lời nhắc AI

**Kiểm tra ranh giới và các trạng thái đứng sau một số đếm WIP.**

```text
I want to define work in process for [team or service]. Our workflow statuses
are [list of statuses with a one-line meaning each], and these items are
excluded: [exclusions]. Identify ambiguities in which statuses count as in
process, which are waiting, and which are blocked. Suggest a boundary and a
cleaner status list, and say what the change would do to the WIP number. Do not
guess how our tool is configured and do not invent benchmark values. List your
assumptions and the questions I should answer.
```

**Chạy một phép kiểm tra nhất quán định luật Little.**

```text
Here is data for [team or service] over [period]: average WIP [value],
departures per day [value], and mean cycle time in days [value], using the
boundary [boundary description]. Compute the ratio of average WIP to departures
times cycle time, and explain what a mismatch could mean given this boundary,
such as items parked, items closed without being started, or an unstable period.
Suggest checks I can make in [tracker or ITSM tool]. Do not invent figures or
thresholds. List your assumptions.
```

**Lên kế hoạch thử nghiệm giới hạn WIP đầu tiên.**

```text
Our team is [team size and roles], working on [type of work]. Current average WIP
is [value], with stages [list of stages], and the longest queue is [stage]. Draft
a time-boxed experiment to introduce a WIP limit: a hypothesis, the limit to try
and why, the measures to watch (including at least one guardrail), what counts as
an exception, and a review date. Do not state a universal correct limit or
benchmark values. List your assumptions and the risks.
```

**Tìm nút thắt có khả năng nhất từ dữ liệu giai đoạn.**

```text
For [team or service], here is queue time and WIP by stage over [period]: [table
of stage, median queue time, 85th percentile queue time, items waiting, and
capacity notes]. Rank the stages as candidates for the constraint, explain the
reasoning in plain language, and suggest one low-cost experiment for the top
candidate and one measure that would show it worked. Do not invent data or
benchmarks. List your assumptions and what additional data would change the
ranking.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề nào định nghĩa một thước đo dòng chảy hoặc năng lực bạn đang thêm và rào chắn nên nằm bên cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số đã sửa nêu các đồng hồ, ranh giới, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Chờ đợi chi phối thời gian trôi qua, nên hãy đo WIP, độ dài hàng đợi và thời gian hàng đợi theo giai đoạn, và báo cáo trung vị và bách phân vị cao.
- Định luật Little gắn WIP trung bình, thông lượng và thời gian chu trình với nhau, khiến nó là một phép thử nhanh xem các định nghĩa của bạn có nhất quán không.
- Độ trễ tăng dốc khi mức sử dụng tiến gần công suất đầy, nên hãy lên kế hoạch độ dư nơi nhu cầu biến thiên.
- Giới hạn WIP cho cả hệ thống, coi vi phạm là tín hiệu để trò chuyện, và đề phòng việc gắn lại nhãn công việc để ở dưới giới hạn.
- Theo dõi lượt đến và lượt rời đi, vì một hàng đợi tăng hết tuần này sang tuần khác cần một quyết định về năng lực hoặc nhu cầu.
- Đo các đội và dịch vụ, không bao giờ cá nhân, và thống nhất một ranh giới bằng văn bản trước khi so sánh các con số.

## Tài liệu tham khảo và đọc thêm

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
