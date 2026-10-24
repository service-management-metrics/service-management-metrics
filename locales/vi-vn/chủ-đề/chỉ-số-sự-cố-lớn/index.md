# Chỉ số sự cố lớn

**Hãy đo sự cố lớn như những sự kiện hiếm, đắt giá để học hỏi, không phải như một bảng xếp hạng: đếm chúng, tính thời gian của chúng một cách trung thực, định cỡ tác động đến khách hàng, kiểm tra rằng mọi người đã được thông báo, và chứng minh rằng các hành động theo dõi đã được hoàn tất.**

## Tổng quan và động lực

Một sự cố lớn là một sự cố đủ nghiêm trọng để cần một phản ứng vượt ra ngoài thông lệ bình thường. [ITIL](https://en.wikipedia.org/wiki/ITIL), khung nổi tiếng nhất cho quản lý dịch vụ CNTT, mô tả [quản lý sự cố](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) là khôi phục hoạt động dịch vụ bình thường nhanh nhất có thể, và kỳ vọng các tổ chức xử lý những sự cố nghiêm trọng nhất qua một con đường riêng, phối hợp hơn. Cách một tổ chức vạch ranh giới đó là quyết định của chính nó. Một lựa chọn phổ biến là một sự cố ảnh hưởng nhiều người dùng hoặc một dịch vụ then chốt và cần nhiều đội làm việc cùng nhau dưới một người điều phối. Hãy viết định nghĩa của riêng bạn ra, vì mọi chỉ số trong chủ đề này phụ thuộc vào nó.

Sự cố lớn thì ít. Một đội có thể thấy hàng chục sự cố thường mỗi tuần và hai hoặc ba sự cố lớn mỗi quý. Điều đó thay đổi cách bạn đo. Thống kê thông thường về khối lượng sự cố và thời gian giải quyết (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố, và chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố) giả định nhiều sự kiện và thưởng cho các giá trị trung bình. Với một nhúm sự cố lớn mỗi kỳ, giá trị trung bình bị chi phối bởi một đêm tồi tệ, một đường xu hướng chủ yếu là nhiễu, và một [bách phân vị](https://en.wikipedia.org/wiki/Percentile) vô nghĩa trên năm điểm dữ liệu (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Cách tiếp cận trung thực là cho thấy từng sự cố lớn như một hàng riêng, với dòng thời gian riêng, và chỉ tóm tắt trên các cửa sổ dài hơn.

Góc nhìn linh hoạt và ITIL gặp nhau trực tiếp hơn ở đây so với bất kỳ nơi nào khác trong cuốn sách. ITIL đóng góp cấu trúc: một sự cố lớn được tuyên bố, một người điều phối có tên, truyền thông xác định đến các bên bị ảnh hưởng, và một buổi rà soát sau đó. Các truyền thống [linh hoạt](https://en.wikipedia.org/wiki/Agile_software_development) và [kỹ thuật độ tin cậy của trang (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) đóng góp các thói quen: một [chỉ huy sự cố](https://en.wikipedia.org/wiki/Incident_commander) điều hành phản ứng, rà soát không đổ lỗi về điều đã xảy ra, và tập trung vào học hỏi nuôi cải tiến liên tục. Cuốn *Site Reliability Engineering* của Google mô tả cả mẫu chỉ huy sự cố lẫn thực hành rà soát hậu kiểm (xem Tài liệu tham khảo). Một [hậu kiểm (postmortem)](https://en.wikipedia.org/wiki/Postmortem_documentation) theo nghĩa này là một bản tường thuật bằng văn bản về một sự cố, các nguyên nhân của nó và các hành động theo sau, và thuật ngữ được dùng ở đây thay thế cho "rà soát sau sự cố".

Chủ đề này bao quát năm câu hỏi. Sự cố lớn xảy ra thường xuyên đến đâu? Chúng kéo dài bao lâu, và bao nhiêu thời gian đó trôi qua trước khi ai đó tuyên bố? Có bao nhiêu người dùng, và người dùng nào, đã cảm nhận nó? Mọi người có nghe từ chúng ta kịp thời và theo một nhịp đều đặn không? Và việc theo dõi đã hứa có xảy ra không? Các chủ đề liên quan bao quát những gì nằm quanh chúng: tính sẵn sàng (xem chủ đề 5.3, Chỉ số tính sẵn sàng), chất lượng của bản rà soát bằng văn bản (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi), các nguyên nhân bên dưới (xem chủ đề 4.1, Chỉ số quản lý vấn đề), và thay đổi thường kích hoạt chúng (xem chủ đề 4.4, Thay đổi thất bại và làm lại).

Các thuật ngữ dùng trong chủ đề này:

- **Sự cố lớn:** một sự cố đáp ứng tiêu chí tuyên bố bằng văn bản của bạn và kích hoạt quy trình sự cố lớn.
- **Tuyên bố:** khoảnh khắc ai đó có thẩm quyền chính thức viện dẫn quy trình sự cố lớn.
- **Thời gian khôi phục:** thời gian từ lúc bắt đầu tác động đến khách hàng đến lúc dịch vụ được khôi phục cho người dùng. Khoảnh khắc khôi phục dịch vụ không giống với việc tìm ra [nguyên nhân gốc](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Chỉ huy sự cố:** vai trò điều phối phản ứng, giao nhiệm vụ và quyết định. Đó là một vai trò trong suốt thời gian sự cố, không phải chức danh.
- **Rà soát sau sự cố:** sự xem xét có cấu trúc, không đổ lỗi về một sự cố sau khi dịch vụ được khôi phục.
- **Hạng mục hành động:** một thay đổi cụ thể, có người sở hữu, có ngày, theo sau từ một buổi rà soát.

## Nguyên tắc chính

- **Cho thấy các sự kiện, rồi mới tóm tắt.** Các sự kiện hiếm xứng đáng có dòng thời gian riêng. Hãy báo cáo từng sự cố lớn riêng và chỉ dùng thống kê tóm tắt trên một cửa sổ dài, kèm số đếm bên cạnh.
- **Bắt đầu đồng hồ ở tác động, không phải ở nhận biết.** Thời lượng bắt đầu khi ai đó nhận thấy che giấu khoảng trống phát hiện, thường là phần lớn nhất của câu chuyện.
- **Đo trải nghiệm của người dùng, không phải công sức của đội.** Tác động đến khách hàng là lý do quy trình tồn tại. Số giờ công sức của người xử lý là một chi phí cần theo dõi, không bao giờ là điểm số.
- **Truyền thông là một phần của khôi phục.** Một dịch vụ được khôi phục trong khi người dùng vẫn đang đoán mới chỉ được sửa một nửa. Hãy coi tính kịp thời của các cập nhật là một thước đo của phản ứng.
- **Buổi rà soát chưa xong cho đến khi các hành động xong.** Một tài liệu hoàn tất với các hành động còn mở không thay đổi gì. Hãy đo việc theo đuổi đến cùng, không chỉ sự tồn tại của một buổi rà soát.
- **Không bao giờ xếp hạng con người, và không bao giờ trừng phạt việc tuyên bố.** Nếu việc tuyên bố một sự cố lớn làm hại đội của người tuyên bố trong một báo cáo, sẽ ít sự cố được tuyên bố hơn và các chỉ số sẽ cải thiện trong khi dịch vụ tệ đi.
- **Giữ tiêu chí tuyên bố ổn định.** Dời ngưỡng thay đổi mọi chỉ số trong chủ đề này. Hãy ghi lại từng thay đổi kèm lý do và ngày.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Số sự cố lớn | Các sự cố lớn được tuyên bố trong một kỳ, theo dịch vụ | Số sự cố đáp ứng tiêu chí tuyên bố và được tuyên bố trong kỳ, theo thời điểm tuyên bố; các sự cố bị hạ cấp trong giờ đầu được liệt kê riêng và bị loại trừ | số đếm mỗi quý | Bản ghi sự cố của công cụ ITSM có cờ sự cố lớn | Quản lý sự cố | Rà soát sức khỏe đội hoặc dịch vụ | Báo cáo hằng tháng, xu hướng hằng quý |
| Thời lượng sự cố lớn | Thời gian khách hàng bị ảnh hưởng | Thời điểm dịch vụ được khôi phục trừ thời điểm bắt đầu tác động, theo từng sự cố. Bắt đầu tác động là bằng chứng sớm nhất trong giám sát hoặc báo cáo đầu tiên của người dùng, tùy cái nào sớm hơn. Khôi phục một phần được ghi như một sự kiện riêng, và khôi phục đầy đủ dừng đồng hồ | phút, theo từng sự cố | Dòng thời gian giám sát, dòng thời gian sự cố trong công cụ ITSM | Quản lý sự cố; quản lý mức dịch vụ | Thời gian khôi phục trong các thước đo phân phối (xem chủ đề 2.8, Chỉ số DORA) | Theo từng sự cố; trung vị cửa sổ dài và giá trị lớn nhất hằng quý |
| Thời gian đến khi tuyên bố | Độ trễ giữa lúc bắt đầu tác động và lúc tuyên bố sự cố lớn | Thời điểm tuyên bố trừ thời điểm bắt đầu tác động, theo từng sự cố. Các sự cố chưa bao giờ được tuyên bố được tìm ra qua một buổi rà soát hằng quý các sự cố thường có tác động cao và được gồm với thời điểm tuyên bố là không áp dụng (chưa bao giờ được tuyên bố) | phút, theo từng sự cố | Dòng thời gian giám sát, dấu vết kiểm toán của công cụ ITSM | Quản lý sự cố; giám sát và quản lý sự kiện | Định nghĩa sẵn sàng cho việc leo thang trong thỏa thuận làm việc của đội | Theo từng sự cố |
| Tác động đến khách hàng | Có bao nhiêu người dùng và bao nhiêu lượt sử dụng bị ảnh hưởng | Người dùng bị ảnh hưởng (hoặc yêu cầu thất bại) nhân số phút bị ảnh hưởng, theo từng sự cố. Chỉ đếm những người dùng đã cố dùng dịch vụ trong cửa sổ tác động. Bảo trì có kế hoạch bị loại trừ | người dùng-phút, hoặc yêu cầu thất bại | Đo từ xa dịch vụ, bản ghi liên hệ hỗ trợ | Quản lý mức dịch vụ; quản lý sự cố | Chỉ báo mức dịch vụ hướng tới người dùng (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi) | Theo từng sự cố |
| Tính kịp thời của truyền thông | Các bên bị ảnh hưởng có được thông báo đúng giờ không | Tỷ lệ sự cố lớn mà thông báo đầu tiên hướng tới khách hàng được gửi trong mục tiêu sau khi tuyên bố, và tỷ lệ cập nhật theo lịch được gửi trong khoảng đã thỏa thuận. Đồng hồ bắt đầu từ lúc tuyên bố. Tin nhắn chỉ nội bộ bị loại trừ | phần trăm sự cố; phần trăm cập nhật | Lịch sử trang trạng thái, nhật ký truyền thông trong công cụ ITSM | Quản lý sự cố; quản lý mức dịch vụ | Truyền thông với các bên liên quan trong thỏa thuận làm việc của đội | Theo từng sự cố; tóm tắt hằng quý |
| Tính kịp thời hoàn tất rà soát | Buổi rà soát có diễn ra đủ sớm để hữu ích không | Tỷ lệ sự cố lớn có bản rà soát được công bố trong số ngày làm việc đã thỏa thuận sau khôi phục. Đồng hồ dừng khi công bố, không phải ở bản nháp đầu. Các sự cố còn nằm trong cửa sổ bị loại trừ | phần trăm | Kho rà soát, công cụ ITSM | Cải tiến liên tục; quản lý vấn đề | Theo dõi cải tiến | Hằng quý |
| Mức theo đuổi hành động đến cùng | Các hành động rà soát có được hoàn tất không | Số hành động rà soát hoàn tất đúng hạn / số hành động rà soát đến hạn trong kỳ. Các hành động đóng là "sẽ không làm" được đếm riêng kèm lý do, không bị giấu | phần trăm; số đếm quá hạn | Trình theo dõi vấn đề liên kết với buổi rà soát | Cải tiến liên tục; quản lý vấn đề | Hạng mục tồn đọng từ các buổi nhìn lại | Hằng tháng |
| Tỷ lệ sự cố lớn lặp lại | Sự tái diễn của cùng nguyên nhân | Số sự cố lớn trong kỳ có nguyên nhân được ghi khớp với một sự cố lớn trước đó trong mười hai tháng qua / số sự cố lớn trong kỳ. Việc khớp theo trường nguyên nhân, được rà soát bằng tay | phần trăm, kèm số đếm được cho thấy | Bản ghi rà soát, hồ sơ vấn đề | Quản lý vấn đề | Công việc phòng ngừa trong tồn đọng | Hằng quý |

Mỗi hàng cần một quy tắc đồng hồ bằng văn bản trước khi được tin. Tranh chấp về lúc bắt đầu tác động và thời điểm khôi phục là phổ biến và được giải quyết tốt nhất từ trước (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

## Khuyến nghị

### Viết ra điều làm một sự cố thành lớn

**Công bố tiêu chí tuyên bố mà bất kỳ ai trực ca cũng áp dụng được.** Tiêu chí thường kết hợp tác động (người dùng bị ảnh hưởng, một dịch vụ then chốt bị suy giảm, một rủi ro về an toàn hoặc pháp lý) với nhu cầu phối hợp (cần nhiều hơn một đội). Một danh sách ngắn kèm ví dụ thắng một ma trận dài. Hãy nêu ai được tuyên bố, và nói rõ rằng tuyên bố một cách thiện chí không bao giờ là một sai lầm, ngay cả khi sự cố hóa ra nhỏ.

**Ghi phiên bản tiêu chí vào mọi bản ghi sự cố.** Khi ngưỡng dịch chuyển, xu hướng dịch chuyển theo. Một số phiên bản hoặc ngày trên mỗi bản ghi cho phép bạn so sánh cái giống cái và giải thích một bước nhảy của số đếm đến từ một thay đổi quy tắc.

### Đếm và phân loại mà không biến số đếm thành mục tiêu

**Báo cáo số đếm kèm bối cảnh của nó.** Cho thấy số sự cố lớn mỗi quý cạnh dịch vụ, nguyên nhân kích hoạt (thay đổi, năng lực, phụ thuộc, bảo mật, khác) và phiên bản tiêu chí. Một số đếm không có bối cảnh mời gọi các mục tiêu như "ít hơn ba mỗi quý", dạy mọi người không tuyên bố. Chỉ coi số đếm giảm là tin tốt khi thời gian đến khi tuyên bố và tác động đến khách hàng ổn định.

**Tách đã tuyên bố, đã hạ cấp và bị bỏ sót.** Theo dõi các sự cố đã được tuyên bố rồi hạ cấp, vì chúng cho thấy tiêu chí có hợp lý không. Rà soát một mẫu các sự cố thường mỗi quý để tìm những cái lẽ ra phải được tuyên bố. Những cái bị bỏ sót là những cái giàu thông tin nhất.

### Tính thời gian của sự cố từ phía người dùng

**Bắt đầu đồng hồ khi khách hàng bị ảnh hưởng.** Hãy dùng bằng chứng đáng tin sớm nhất, thường là một tín hiệu giám sát có trước phiếu đầu tiên. Khi điểm bắt đầu không chắc, hãy ghi ước lượng và nguồn của nó thay vì thời điểm ai đó nhận thấy. Khoảng trống giữa lúc bắt đầu tác động và lúc tuyên bố là một chỉ số riêng và thường là cái rẻ nhất để cải thiện.

**Chia dòng thời gian thành các pha.** Phát hiện, tuyên bố, chẩn đoán, giảm thiểu và khôi phục đầy đủ mỗi cái có nguyên nhân chậm trễ khác nhau và người sở hữu khác nhau. Một bảng phân tích pha cho mỗi sự cố cho thấy thời gian đã đi đâu mà không cần một giá trị trung bình. Khôi phục dịch vụ bằng một cách lách và sửa nguyên nhân là hai sự kiện riêng, và cái thứ hai thuộc về quản lý vấn đề.

**Dùng trung vị và trường hợp tệ nhất trên các cửa sổ dài, kèm số đếm.** Với dữ liệu một năm, hãy báo cáo trung vị và thời lượng dài nhất, và nói chúng đến từ bao nhiêu sự cố. Tránh một thời gian trung bình để khôi phục đơn lẻ cho sự cố lớn. Với vài sự kiện, nó không ổn định, và nó bị méo bởi một lần ngừng hoạt động dài (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

### Định cỡ tác động đến khách hàng theo cách người dùng nhận ra

**Ưu tiên tác động dựa trên người dùng hơn dựa trên máy chủ.** Yêu cầu thất bại, người dùng bị ảnh hưởng hoặc giao dịch bị ảnh hưởng mô tả điều đã xảy ra với con người. Số phút dịch vụ suy giảm trên một thành phần mô tả điều đã xảy ra với một cái máy. Nơi bạn có các chỉ báo mức dịch vụ, hãy dùng chúng (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi) và nối sự cố với bức tranh tính sẵn sàng (xem chủ đề 5.3, Chỉ số tính sẵn sàng).

**Thêm một tuyên bố tác động bằng ngôn ngữ giản dị vào mỗi bản ghi.** Một hoặc hai câu nêu ai bị ảnh hưởng và họ không làm được gì. Liên hệ hỗ trợ, nhắc đến trên mạng xã hội và leo thang của khách hàng là bằng chứng cho tuyên bố, không phải các chỉ số cần tối đa hóa.

### Đo truyền thông như một phần của phản ứng

**Đặt mục tiêu truyền thông theo khán giả.** Khách hàng bị ảnh hưởng, các bên liên quan nội bộ và ban điều hành cần các thông điệp khác nhau vào những thời điểm khác nhau. Thống nhất một mục tiêu cho thông báo đầu tiên sau khi tuyên bố và một nhịp đều đặn cho các cập nhật, và đo mức tuân thủ theo từng sự cố. Nhịp quan trọng hơn nội dung: một cập nhật nói "không thay đổi, cập nhật tiếp theo sau ba mươi phút" và đến đúng giờ xây dựng nhiều lòng tin hơn sự im lặng.

**Giữ phản ứng và truyền thông trong các tay riêng.** Một trưởng truyền thông giải phóng chỉ huy sự cố để tập trung vào chẩn đoán. Một đội nhỏ có thể dùng một danh sách kiểm tra và một mẫu viết sẵn thay vào đó.

### Khép vòng học hỏi

**Tổ chức rà soát sớm, và công bố nó.** Trí nhớ phai nhạt, nên hãy đặt một cửa sổ cho buổi rà soát và đo xem nó có được đáp ứng không. Việc hoàn tất rà soát ít quan trọng hơn điều buổi rà soát thay đổi, nên hãy ghép nó với việc theo đuổi đến cùng. Cuốn *Site Reliability Engineering* của Google biện hộ cho rà soát không đổ lỗi và cho việc viết nó ra (xem Tài liệu tham khảo), và chủ đề 4.2 (Chỉ số phân tích sau sự cố và học hỏi) trình bày chất lượng rà soát.

**Theo dõi hành động đến khi xong, và cho phép "sẽ không làm" trung thực.** Đặt mỗi hành động vào tồn đọng mà đội sở hữu đã dùng, kèm người sở hữu và ngày. Ghi lại các hành động bị từ chối, kèm lý do, thay vì để chúng mục nát. Rà soát các hành động quá hạn ở một buổi rà soát vận hành hoặc dịch vụ, và hỏi điều gì đang chặn chúng. Giới hạn số hành động mỗi buổi rà soát để những cái còn lại là những cái quan trọng.

**Tìm các mẫu hình qua các sự cố, và gửi chúng đến quản lý vấn đề.** Nguyên nhân lặp lại, tác nhân chung và khoảng trống phát hiện tái diễn là những tín hiệu mà các buổi rà soát đơn lẻ bỏ sót. Hãy đưa chúng vào quy trình vấn đề và lỗi đã biết (xem chủ đề 4.1, Chỉ số quản lý vấn đề) và vào kế hoạch của các đội sở hữu dịch vụ. Hãy coi tỷ lệ lặp lại tăng là lời nhắc điều tra, không phải một phán quyết.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Số sự cố lớn | Nâng ngưỡng tuyên bố, giữ sự cố ở mức "cao" để chúng không bao giờ được tuyên bố, tách một sự kiện thành nhiều bản ghi, hoặc gộp nhiều sự kiện thành một | Tiêu chí cố định, có phiên bản; mẫu hằng quý các sự cố thường có tác động cao; tác động đến khách hàng và thời gian đến khi tuyên bố được theo dõi bên cạnh số đếm |
| Thời lượng sự cố lớn | Đặt lại đồng hồ về một điểm bắt đầu tác động muộn hơn, tuyên bố "đã khôi phục" trong khi người dùng vẫn lỗi, hoặc đóng và mở lại một bản ghi mới | Bắt đầu tác động lấy từ giám sát; khôi phục được xác nhận bằng một chỉ báo hướng tới người dùng; các bản ghi được mở lại và liên kết được đếm là một sự cố |
| Thời gian đến khi tuyên bố | Tuyên bố sớm cho mọi thứ để trông nhanh, hoặc ghi lùi ngày tuyên bố về lúc bắt đầu tác động | Tỷ lệ sự cố được tuyên bố sau đó bị hạ cấp; dấu vết kiểm toán của thời điểm tuyên bố; mẫu các dòng thời gian so với giám sát thô |
| Tác động đến khách hàng | Thu hẹp định nghĩa "bị ảnh hưởng", chỉ đếm người dùng đã nêu phiếu, hoặc đo một phụ thuộc vẫn hoạt động | Tác động suy ra từ đo từ xa cũng như từ liên hệ; một tuyên bố tác động bằng ngôn ngữ giản dị được rà soát ở buổi rà soát sự cố |
| Tính kịp thời của truyền thông | Đăng một thông báo mơ hồ để bắt đầu đồng hồ, gửi cập nhật không có nội dung, hoặc đếm tin nhắn nội bộ | Kiểm tra nội dung một mẫu các cập nhật; phản hồi của khách hàng về độ rõ ràng; chỉ đếm thông báo hướng tới khách hàng |
| Tính kịp thời hoàn tất rà soát | Công bố một tài liệu mỏng để kịp ngày, hoặc tuyên bố một buổi rà soát là "không cần" | Chất lượng rà soát được đồng nghiệp đọc trên một mẫu (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi); tỷ lệ các buổi rà soát được miễn được cho thấy |
| Mức theo đuổi hành động đến cùng | Viết các hành động mơ hồ hoặc tầm thường dễ đóng, đóng hành động mà không làm việc, hoặc gắn lại nhãn "sẽ không làm" | Chất lượng hành động được lấy mẫu; hành động đã đóng được xác minh so với thay đổi hệ thống; tỷ lệ và lý do "sẽ không làm" được rà soát |
| Tỷ lệ sự cố lớn lặp lại | Ghi mỗi nguyên nhân là mới bằng cách chọn cách diễn đạt khác, hoặc quy mọi thứ cho "lỗi con người" | Một phân loại nguyên nhân ngắn có định nghĩa; trường nguyên nhân được người ngoài sự cố rà soát; "lỗi con người" làm nguyên nhân không được chấp nhận nếu thiếu lời giải thích về hệ thống |

Một kết quả đọc lành mạnh là một số đếm sự cố được tuyên bố vừa phải và khá ổn định, thỉnh thoảng có một lần hạ cấp và thỉnh thoảng một lần bỏ sót tìm thấy trong rà soát. Thời gian đến khi tuyên bố ngắn và đang giảm, tác động đến khách hàng mỗi sự cố được hiểu và giảm nơi công việc phòng ngừa đã được làm, và gần như mọi cập nhật hướng tới khách hàng đúng lịch. Các buổi rà soát được công bố đúng hạn và các hành động của chúng phần lớn đã xong, với một tập nhỏ, trung thực các hành động bị từ chối. Nếu mọi thứ trông hoàn hảo, hãy hỏi liệu tiêu chí có trôi không hay mọi người đã ngừng tuyên bố (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). [Định luật mang tên Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) dễ thấy nhất ở đây, vì cái giá của một con số tệ là sự sẵn lòng nâng báo động giảm đi.

## Đánh đổi: ưu điểm và nhược điểm

| Lựa chọn | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Cho thấy từng sự cố như một hàng | Giữ bối cảnh, tránh các giá trị trung bình gây hiểu lầm trên số đếm nhỏ | Khó tóm tắt hơn cho lãnh đạo; cần một tường thuật ngắn cho mỗi sự cố |
| Báo cáo một số đếm các sự cố lớn | Đơn giản, quen thuộc, hiển thị với lãnh đạo | Dễ biến thành mục tiêu; phản ứng với thay đổi trong tiêu chí |
| Thời gian từ lúc bắt đầu tác động | Phản ánh trải nghiệm của người dùng, làm lộ khoảng trống phát hiện | Bắt đầu tác động đôi khi không chắc và cần phán đoán |
| Thời gian từ lúc tuyên bố | Dễ nắm bắt và so sánh | Giấu phát hiện chậm và tuyên bố chậm |
| Người dùng-phút tác động | So sánh được giữa các sự cố và dịch vụ | Cần đo từ xa; coi mọi người dùng và phút là như nhau |
| Tỷ lệ hoàn tất rà soát | Dễ thu thập, thúc đẩy thói quen | Thưởng cho tài liệu, không phải cho việc học |
| Tỷ lệ theo đuổi hành động đến cùng | Nối rà soát với thay đổi | Có thể bị lợi dụng bằng các hành động tầm thường; cần người sở hữu và tồn đọng |

Hãy dùng một tập nhỏ các thước đo bao quát toàn bộ chu trình (tuyên bố, khôi phục, thông báo, học, hoàn tất) thay vì tối ưu một cái. Chỉ thêm các thước đo tác động khi đo từ xa tồn tại. Nơi thiếu đo từ xa, một tuyên bố tác động bằng văn bản cẩn thận phục vụ tốt hơn một con số bịa ra.

## Câu hỏi để thảo luận với đội nhóm

**1. Chính xác thì điều gì làm một sự cố thành lớn ở đây, và mọi người trực ca có đồng ý không?**
Định nghĩa là nền tảng cho mọi con số khác. Hãy yêu cầu ba người phân loại cùng một sự cố gần đây và so sánh các câu trả lời. Sự bất đồng cho thấy tiêu chí mơ hồ ở đâu. Người điều phối nên ghi lại các ví dụ để thêm vào tiêu chí bằng văn bản và thống nhất ai được tuyên bố. Kết thúc bằng việc xác nhận rằng tuyên bố một cách thiện chí luôn được chấp nhận, ngay cả khi sự cố sau đó bị hạ cấp.

**2. Trong sự cố lớn gần nhất của chúng ta, khoảng cách giữa lúc bắt đầu tác động và lúc tuyên bố là bao lâu?**
Dựng lại dòng thời gian từ giám sát, không phải từ trí nhớ. Khoảng cách thường lớn hơn dự kiến và đôi khi là pha dài nhất. Hỏi có tín hiệu nào tồn tại và ai đã thấy nó, và liệu khoảng cách đến từ tiêu chí không rõ, một cảnh báo còn thiếu, hay sự ngần ngại tuyên bố. Chọn một thay đổi sẽ rút ngắn nó, và quyết định bạn sẽ biết bằng cách nào.

**3. Ai bị ảnh hưởng, và làm sao chúng ta biết?**
So sánh điều đội tin lúc đó với điều đo từ xa và liên hệ hỗ trợ cho thấy sau đó. Hỏi những khách hàng nào, nếu có, bị ảnh hưởng nhiều hơn những người khác, và họ là những người quan trọng nhất với doanh nghiệp hay những người ít có khả năng đối phó nhất. Thảo luận liệu tuyên bố tác động có phải là thứ một khách hàng sẽ nhận ra không. Thống nhất một thước đo tác động bạn có thể thu thập đáng tin lần sau.

**4. Mọi người có nghe từ chúng ta khi họ cần không, và thông điệp có hữu ích không?**
Kiểm tra thông báo đầu và mỗi cập nhật so với nhịp đã thỏa thuận. Đọc các thông điệp thực như một khách hàng. Hỏi chúng có nói điều đã biết, điều chưa biết và khi nào cập nhật tiếp theo đến không. Thảo luận ai sở hữu truyền thông trong một sự cố và người đó có rảnh để làm không.

**5. Điều gì đã xảy ra với các hành động từ ba buổi rà soát gần nhất của chúng ta?**
Kéo các hành động vào một danh sách và đánh dấu từng cái là xong, đang tiến hành, quá hạn hoặc bị từ chối. Với các cái quá hạn, hỏi điều gì đang chặn chúng: năng lực, quyền sở hữu, ưu tiên hay phạm vi không rõ. Quyết định các hành động quá hạn sẽ được nêu ra ở buổi họp vận hành hoặc lập kế hoạch kế tiếp thế nào.

**6. Nếu chúng ta bị đo theo số sự cố lớn, chúng ta sẽ làm gì khác, và khách hàng có tốt hơn không?**
Câu hỏi này làm lộ các vectơ lợi dụng trước khi chúng xảy ra. Hãy yêu cầu nhóm thẳng thắn về điều họ có thể đổi: ngưỡng, nhãn, ai tuyên bố. Rồi hỏi mục tiêu tốt hơn là gì. Một câu trả lời tốt dịch chuyển về tác động đến khách hàng, thời gian đến khi tuyên bố và việc theo đuổi đến cùng, vốn khó lợi dụng hơn mà không giúp người dùng. Ghi lại câu trả lời như một rào chắn.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội sản phẩm gặp sự cố lớn như các gián đoạn đối với công việc có kế hoạch và như phản hồi về các thay đổi của chính họ. Họ được lợi nhiều nhất từ các con số tác động rõ ràng, truy cập nhanh vào dòng thời gian sự cố của chính mình, và các hành động rà soát rơi vào tồn đọng của họ kèm chỗ để làm. Hãy dự trữ năng lực cho việc theo dõi sự cố, và coi hành động là công việc có cùng vị thế với tính năng. Chia sẻ các danh mục nguyên nhân để một tác nhân lặp lại dẫn đến thay đổi trong thực hành (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

### Đội dịch vụ và vận hành

Các đội vận hành điều hành phản ứng và gánh chi phí của công việc đêm khuya. Họ cần tiêu chí áp dụng được lúc 3 giờ sáng, một vai trò chỉ huy và truyền thông họ có thể bố trí nhân sự, và công cụ nắm bắt dòng thời gian khi sự việc xảy ra thay vì từ trí nhớ sau đó. Họ nên theo dõi tải mà sự cố lớn đặt lên một nhóm nhỏ người (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca) và dùng các chỉ số trong chủ đề này để xin công việc phòng ngừa, không phải để so sánh những người xử lý.

### Lãnh đạo và quản trị

Lãnh đạo tạo ra bầu không khí quyết định mọi người có tuyên bố nhanh và báo cáo trung thực không. Họ nên yêu cầu câu chuyện của từng sự cố lớn và xu hướng trong một năm, tránh mục tiêu trên số đếm, và hỏi về tác động đến khách hàng, khoảng trống phát hiện và các hành động đã xong. Hãy tài trợ cho công việc phòng ngừa mà các buổi rà soát khuyến nghị, và rà soát nó ở cùng diễn đàn với kế hoạch phân phối. Khi đó quản trị có thể thấy các bài học có biến thành thay đổi không (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi, về một cách nối độ tin cậy và đầu tư).

### Khách hàng và người dùng

Khách hàng đánh giá một sự cố lớn bằng việc họ bị ảnh hưởng bao lâu, họ có được thông báo không, và nó có xảy ra lần nữa không. Họ được phục vụ tốt hơn bởi các thông báo trung thực sớm hơn là các thông báo bóng bẩy muộn. Hãy cho họ một kênh trạng thái, một nhịp họ có thể dựa vào, và một bản tường thuật rõ ràng sau đó về điều đã xảy ra và điều sẽ thay đổi. Nơi có hợp đồng, hãy báo cáo theo các điều khoản đã thỏa thuận trong thỏa thuận mức dịch vụ (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA). Mức hài lòng sau một sự cố đáng được hỏi (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một cửa hàng, một dịch vụ thanh toán và một dịch vụ quản lý đơn hàng, mỗi cái do một đội sản phẩm sở hữu, với một đội nền tảng dùng chung trực ca. Một nhóm quản lý dịch vụ nhỏ điều hành quy trình sự cố lớn. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Trong hai quý vừa qua nhà bán lẻ đã tuyên bố năm sự cố lớn (minh họa). Nhóm quản lý dịch vụ cho thấy từng sự cố như một hàng với lúc bắt đầu tác động, thời điểm tuyên bố, thời điểm khôi phục, số đơn hàng thất bại ước lượng, thời điểm thông báo đầu tiên cho khách hàng và trạng thái rà soát. Họ nhận thấy khoảng cách trung vị giữa lúc bắt đầu tác động và lúc tuyên bố là 38 phút (minh họa), gần bằng thời gian trung vị từ lúc tuyên bố đến lúc khôi phục là 52 phút (minh họa). Với năm sự cố, họ coi cả hai con số là sơ bộ và đọc các dòng thời gian thay vào đó. Ba trong năm sự cố cho thấy một cảnh báo giám sát đã kích hoạt sớm và nằm không được xác nhận trong một kênh chung.

Đội quyết định định tuyến loại cảnh báo đó đến máy nhắn tin trực ca và thêm một dòng vào tiêu chí nói rằng một tín hiệu thất bại thanh toán kéo dài là đủ để tuyên bố, không cần chờ phiếu. Họ cũng đặt một mục tiêu cho thông báo đầu tiên cho khách hàng trong vòng 20 phút sau khi tuyên bố (minh họa), và họ kiểm tra nó theo từng sự cố. Hai trong năm đạt. Đội triển khai thêm một mẫu trang trạng thái mà một trưởng truyền thông có thể điền dưới áp lực.

Trong cùng buổi rà soát họ tìm thấy một rủi ro lợi dụng. Một người quản lý của một đội sản phẩm đã đề xuất một mục tiêu hằng quý "không quá hai sự cố lớn". Nhóm quản lý dịch vụ chỉ ra rằng quý trước có một sự cố ở lại mức ưu tiên cao bốn giờ với khách hàng thất bại ở bước thanh toán, mà không bao giờ được tuyên bố vì đội đã gần chạm giới hạn. Họ thay mục tiêu bằng ba thước đo: thời gian đến khi tuyên bố, số đơn hàng thất bại mỗi sự cố, và tỷ lệ hành động rà soát hoàn tất đúng hạn. Họ thêm rào chắn là một mẫu hằng quý các sự cố ưu tiên cao do một người ngoài đội sở hữu đọc. Quý sau số đếm được tuyên bố tăng lên bốn (minh họa), thời gian trung vị đến khi tuyên bố giảm, và buổi rà soát mẫu không tìm thấy lần tuyên bố nào bị bỏ sót.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy tổ chức một buổi rà soát không đổ lỗi cùng các bên liên quan sau mỗi sự cố lớn và theo đuổi các hành động đến cùng theo một nhịp đều đặn. Điều cần lưu ý là một mục tiêu về ít sự cố lớn hơn khuyến khích tuyên bố ít hơn, nên hãy đo cả thời gian đến khi tuyên bố và tác động đến khách hàng.

### AI

AI có thể giúp phát hiện, tóm tắt và truyền thông trong một sự cố lớn, và soạn phiên bản đầu của một buổi rà soát. Hãy ghép tính kịp thời của truyền thông với độ chính xác của điều được truyền thông, và đánh dấu những phần nào của một buổi rà soát do AI soạn và một người kiểm tra. Điều cần lưu ý là một bản tóm tắt AI tự tin về một sự cố có thể sai, nên một con người sở hữu bản tường thuật cuối cùng.

### Tự động hóa

Hãy tự động hóa việc nắm bắt dòng thời gian từ trò chuyện, máy nhắn tin và giám sát để buổi rà soát bắt đầu từ sự thật, và đo chính công cụ sự cố, như các lần nhắn tin thất bại. Điều cần lưu ý là các bài đăng trạng thái tự động có thể trông như truyền thông mà không đến được những người cần nó.

### Phân tích

Sự cố lớn hiếm, nên hãy dùng số đếm, dòng thời gian và tác động đến khách hàng, không phải tỷ lệ và giá trị trung bình. Quyết định được cung cấp thông tin là sửa gì và diễn tập gì. Điều cần lưu ý là các con số nhỏ mời gọi diễn giải quá mức, nên hãy tránh các tuyên bố xu hướng từ một nhúm sự kiện.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một công ty khởi nghiệp có thể không có quy trình sự cố lớn chính thức, chỉ có bất kỳ ai đang thức. Hãy bắt đầu với một định nghĩa một đoạn, một người điều phối có tên cho mỗi sự kiện, và một tài liệu chung ghi dòng thời gian. Đếm sự cố và ghi tác động trong một câu. Buổi rà soát có thể là một ghi chú nửa trang, và việc theo dõi là một hạng mục trong tồn đọng của đội.

**Doanh nghiệp nhỏ.** Một doanh nghiệp nhỏ thường phụ thuộc vào nhà cung cấp cho phần lớn dịch vụ của mình, nên dòng thời gian gồm cả việc chờ nhà cung cấp. Hãy ghi thời gian liên hệ và phản hồi của nhà cung cấp trong dòng thời gian sự cố, vì chúng giải thích nhiều thời lượng và cho bằng chứng cho các cuộc trò chuyện hợp đồng. Giữ truyền thông với khách hàng đơn giản: một kênh, một người và một khoảng cập nhật nêu rõ.

**Doanh nghiệp lớn.** Doanh nghiệp lớn vận hành nhiều dịch vụ và có nhiều sự cố trong mỗi kỳ, nên cả số đếm theo dịch vụ lẫn bản tổng hợp đều hữu ích. Các rủi ro là tiêu chí không nhất quán giữa các bộ phận và một quy trình nặng đến mức làm chậm việc tuyên bố. Hãy căn chỉnh định nghĩa, giữ quy trình nhẹ trong mười lăm phút đầu, và dùng một định dạng bản ghi chung để tác động và truyền thông có thể so sánh.

**Chính phủ và khu vực công.** Các cơ quan công thường có nghĩa vụ theo luật, như thông báo cho cơ quan quản lý hoặc công chúng, và cái giá thất bại cao hơn với công dân không có lựa chọn thay thế. Hãy thêm các thước đo cho việc tuân thủ nghĩa vụ thông báo và cho tác động lên các nhóm dễ tổn thương, và giữ các bản ghi chịu được kiểm toán và yêu cầu thông tin công khai. Chu kỳ mua sắm có thể làm chậm các hạng mục hành động, nên hãy theo dõi các hành động bị chặn và leo thang chúng.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là cắt giảm chi phí của những sự cố gây đau nhất: doanh thu hoặc dịch vụ bị mất, lòng tin bị tổn hại, nhân viên kiệt sức và rủi ro quy định. Một tập nhỏ, nhất quán các thước đo sự cố lớn cho thấy chi phí đó đến từ đâu, phát hiện và truyền thông có đang cải thiện không, và khoản đầu tư vào phòng ngừa có đạt không. Các thước đo chỉ cho thấy một số đếm đẩy chi phí vào việc giấu sự cố.

Chi phí thu thập khiêm tốn nếu dữ liệu đã nằm trong công cụ ITSM, hệ thống giám sát và trình theo dõi vấn đề. Các chi phí chính là thống nhất định nghĩa, liên kết bản ghi sự cố với giám sát và với tồn đọng hành động, và thời gian để viết mỗi buổi rà soát. Các chỉ số tốn ít ngoài việc làm cho bản ghi nhất quán.

Lợi tức hiện ra dưới dạng thời gian đến khi tuyên bố ngắn hơn, truyền thông rõ hơn, ít sự cố lặp lại hơn, và ít làm lại hơn. Không số liệu phổ quát nào áp dụng, nên hãy ước lượng của riêng bạn: lấy các sự cố lớn của năm qua, ước lượng chi phí một giờ tác động cho mỗi dịch vụ cùng bộ phận tài chính, và so sánh nó với chi phí của công việc theo dõi bạn cần để ngăn các nguyên nhân lặp lại. Tổng chi phí sở hữu gồm thời gian của người rà soát, công cụ cho dòng thời gian và trang trạng thái, và năng lực dành riêng cho các hành động theo dõi, nơi hầu hết các chương trình đầu tư thiếu.

## Phản mẫu và cạm bẫy

- **Một mục tiêu cho số sự cố lớn.** Nó dạy mọi người tránh tuyên bố. Thay vào đó, hãy theo dõi thời gian đến khi tuyên bố, tác động và việc theo đuổi đến cùng, và lấy mẫu để tìm các lần tuyên bố bị bỏ sót.
- **Một thời gian trung bình để khôi phục đơn lẻ cho sự cố lớn.** Với ít sự kiện, một lần ngừng hoạt động dài chi phối. Thay vào đó, hãy cho thấy từng sự cố, rồi trung vị và trường hợp dài nhất trong một năm kèm số đếm.
- **Bắt đầu đồng hồ ở lúc tuyên bố.** Nó giấu độ trễ phát hiện và tuyên bố. Thay vào đó, hãy bắt đầu ở bằng chứng sớm nhất về tác động đến khách hàng, và báo cáo khoảng trống riêng.
- **Xếp hạng người xử lý hoặc đội theo chỉ số sự cố.** Nó phá hủy sự thẳng thắn và làm hỏng buổi rà soát. Thay vào đó, hãy báo cáo theo dịch vụ và hệ thống, và giữ tên ra khỏi dữ liệu.
- **Coi buổi rà soát là xong khi tài liệu được công bố.** Thay đổi mới là điểm mấu chốt. Thay vào đó, hãy đo việc theo đuổi hành động đến cùng và xem các hành động quá hạn mỗi tháng.
- **Thay đổi ngưỡng trong im lặng.** Xu hướng trở nên vô nghĩa. Thay vào đó, hãy đánh phiên bản cho tiêu chí và ghi chú các thay đổi trong báo cáo.
- **Chỉ đếm phiếu là tác động.** Nhiều người dùng bị ảnh hưởng không bao giờ gọi. Thay vào đó, hãy dùng đo từ xa và thêm một tuyên bố tác động bằng ngôn ngữ giản dị.
- **Dùng các chỉ số để quy trách nhiệm.** Khi đó mọi người giấu sự thật. Thay vào đó, hãy giữ các buổi rà soát không đổ lỗi, tập trung vào điều kiện và quyết định, và tìm các nguyên nhân hệ thống.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | Lớn nghĩa là bất cứ điều gì người to tiếng nhất nói; thời gian đến từ trí nhớ | Một số đội có tiêu chí và ghi lại thời điểm bắt đầu và kết thúc | Một định nghĩa bằng văn bản, có phiên bản, với quy tắc đồng hồ cho bắt đầu tác động, tuyên bố và khôi phục | Định nghĩa và đồng hồ được kiểm toán so với giám sát; thay đổi được ghi lại kèm lý do | Tiêu chí và đồng hồ được thống nhất với nhà cung cấp và khách hàng, được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Tác động và truyền thông | Tác động được mô tả bằng giai thoại; cập nhật được gửi khi ai đó nhớ | Tác động được ước lượng cho một số sự cố; một số đội dùng trang trạng thái | Tác động được đo từ đo từ xa cho các dịch vụ chính; mục tiêu cập nhật được đặt và theo dõi | Tác động và truyền thông được theo dõi xu hướng và nối với phản hồi khách hàng | Tác động được chia sẻ với khách hàng và nhà cung cấp theo một định dạng chung, kèm các hành động cải tiến chung |
| Rà soát và theo đuổi đến cùng | Rà soát hiếm và không viết ra; hành động bị quên | Rà soát được một số đội viết; hành động được ghi nhưng không theo dõi | Mọi sự cố lớn được rà soát đúng hạn; hành động được theo dõi trong tồn đọng của đội | Hành động quá hạn và nguyên nhân lặp lại được rà soát theo nhịp, với công việc phòng ngừa được tài trợ | Mẫu hình được chia sẻ giữa các đội và nhà cung cấp; việc học thay đổi thiết kế và lập kế hoạch một cách thường lệ |
| Sử dụng trong quyết định | Các con số được trích dẫn sau sự việc | Số đếm được cho lãnh đạo thấy không có bối cảnh | Dòng thời gian và xu hướng được cho các đội sở hữu dịch vụ thấy | Các chỉ số được ghép với rào chắn và dùng để ưu tiên công việc độ tin cậy | Đầu tư độ tin cậy được quyết định chung bằng bằng chứng tác động và tái diễn giữa các dịch vụ |

## Danh sách kiểm tra

- [ ] Tiêu chí tuyên bố được viết ra, có phiên bản và được mọi người trực ca biết.
- [ ] Tuyên bố một cách thiện chí được nêu rõ là an toàn, và không có mục tiêu nào trên số đếm.
- [ ] Bắt đầu tác động, tuyên bố và khôi phục được định nghĩa và lấy từ giám sát hoặc một dấu vết kiểm toán.
- [ ] Mỗi sự cố lớn được cho thấy như một hàng riêng kèm dòng thời gian theo pha.
- [ ] Tác động đến khách hàng được suy ra từ đo từ xa nơi có và được mô tả trong một tuyên bố bằng ngôn ngữ giản dị.
- [ ] Mục tiêu cho thông báo đầu tiên và cho nhịp cập nhật được đặt và kiểm tra theo từng sự cố.
- [ ] Một buổi rà soát được công bố trong cửa sổ đã thỏa thuận và các hành động của nó nằm trong tồn đọng của đội sở hữu.
- [ ] Các hành động quá hạn và nguyên nhân lặp lại được rà soát theo lịch.
- [ ] Một mẫu hằng quý các sự cố thường có tác động cao kiểm tra các lần tuyên bố bị bỏ sót.
- [ ] Mọi chỉ số có một rào chắn có tên và không chỉ số nào được dùng để xếp hạng cá nhân.

## Lời nhắc AI

**Soạn tiêu chí tuyên bố để rà soát.**

```text
I am drafting criteria for declaring a major incident in [organization type].
Our services are [list of services] and our teams are [list of teams]. Users
are [description of users]. Propose a short set of declaration criteria with
two or three examples for each, a list of ambiguities a team might argue about,
and questions I should settle with [stakeholders]. Do not invent thresholds or
benchmark values; use [placeholders] where a number is needed. List your
assumptions.
```

**Dựng lại và phê bình một dòng thời gian sự cố.**

```text
Here is the timeline of a major incident: [paste timeline with timestamps and
sources]. Identify the impact start, the declaration, mitigation, and full
restoration, and say which timestamps are uncertain and why. Split the duration
into phases and note where the largest delays occurred. Suggest questions to ask
the responders and monitoring evidence to look for. Do not invent facts that are
not in the timeline. List your assumptions.
```

**Rà soát một tập hành động sau sự cố.**

```text
Below are the actions from [number] post-incident reviews for [service]:
[paste actions with owner, due date, and status]. Group them by theme, flag any
that are vague, trivial, or unowned, and identify patterns that suggest a
problem record or a backlog item for [owning team]. Do not rank individuals or
teams by performance. Do not invent causes. List your assumptions and the
information you would need to improve the analysis.
```

**Kiểm thử một chỉ số đề xuất về việc lợi dụng.**

```text
We plan to track [metric name], defined as [definition] and measured from
[data source]. Describe how this metric could be gamed by [role], what honest
behavior it might discourage, and which paired guardrail metric or practice
would catch each case. Keep the suggestions practical for a team of
[team size]. Do not invent benchmark values or sources. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề liên quan và rào chắn nên nằm bên cạnh mỗi chỉ số sự cố lớn.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một phiên bản đã sửa của chủ đề này vẫn theo mẫu và quy ước.

## Điểm chính cần nhớ

- Sự cố lớn hiếm, nên hãy cho thấy từng cái kèm dòng thời gian của nó và chỉ tóm tắt trên các cửa sổ dài với số đếm bên cạnh con số.
- Bắt đầu đồng hồ ở tác động đến khách hàng, và báo cáo khoảng trống trước khi tuyên bố như một thước đo riêng.
- Đo tác động theo người dùng và lượt sử dụng, và thêm một tuyên bố bằng ngôn ngữ giản dị cho những gì các con số bỏ sót.
- Coi tính kịp thời của truyền thông là một phần của phản ứng, với mục tiêu theo khán giả và một nhịp cập nhật đều đặn.
- Một buổi rà soát xong khi các hành động của nó xong, nên hãy theo dõi việc theo đuổi đến cùng và nguyên nhân lặp lại.
- Đừng bao giờ đặt mục tiêu trên số đếm, đừng bao giờ xếp hạng con người, và giữ cho việc tuyên bố an toàn.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
