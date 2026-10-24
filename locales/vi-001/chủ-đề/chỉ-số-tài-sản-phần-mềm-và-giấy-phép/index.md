# Chỉ số tài sản phần mềm và giấy phép

**Phần mềm được mua, đăng ký, xây dựng và vay mượn, và mỗi con đường tạo ra nghĩa vụ và chi phí, nên hãy đo điều bạn được quyền dùng, điều bạn thực sự dùng, và điều bạn phụ thuộc vào, và làm cho các đội dễ chọn công cụ mà không tạo ra bất ngờ về sau.**

## Tổng quan và động lực

Phần mềm là lớp tài sản thay đổi nhanh nhất và khó thấy nhất. Một lập trình viên thêm một thư viện trong vài phút. Một đội đăng ký một công cụ phần mềm dạng dịch vụ bằng thẻ công ty. Một nhà cung cấp đổi mô hình giá giữa các lần gia hạn. Một hợp đồng cho phép 500 người dùng và 700 có tài khoản. [Quản lý tài sản phần mềm](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) là thực hành kinh doanh quản lý và tối ưu hóa việc mua, triển khai, bảo trì, sử dụng và thanh lý phần mềm trong một tổ chức. Nó nằm trong thực hành quản lý tài sản CNTT rộng hơn (xem chủ đề 7.1, Chỉ số quản lý tài sản CNTT) và chia sẻ kỷ luật về bản ghi, người sở hữu và vòng đời.

Phân phối liên tục và quản lý tài sản phần mềm kéo về các hướng khác nhau về tốc độ. Các đội giao liên tục cần chọn và áp dụng công cụ nhanh, và họ xây trên hàng trăm thành phần mã nguồn mở. Quản lý tài sản phần mềm muốn biết cái gì đang dùng, theo điều khoản nào, với chi phí nào, và rủi ro nào. Cả hai đều đúng. Con đường đi qua là sự cộng tác liên tục giữa các đội, mua sắm, pháp lý, an ninh và tài chính: làm đường được duyệt nhanh, làm danh mục công cụ được duyệt dễ tìm, và làm các kiểm tra tự động. Làm chậm các đội bằng quy trình phê duyệt dài tạo ra [CNTT ngầm (shadow IT)](https://en.wikipedia.org/wiki/Shadow_IT), điều ngược lại với khả năng nhìn thấy mà mọi người muốn.

Bốn loại phần mềm quan trọng, và các chỉ số khác nhau giữa chúng.

- **Phần mềm có giấy phép** cài trên thiết bị hoặc máy chủ, được điều chỉnh bởi một [giấy phép phần mềm](https://en.wikipedia.org/wiki/Software_license) nói ai được dùng, bao nhiêu người được dùng, và theo điều kiện nào. Quyền sử dụng có thể theo người dùng, theo thiết bị, theo lõi hoặc theo địa điểm, và đơn vị quyết định cách bạn đếm.
- **Phần mềm dạng dịch vụ.** [Phần mềm dạng dịch vụ](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) được truy cập qua mạng và trả tiền theo gói đăng ký, thường theo chỗ ngồi hoặc theo mức dùng. Nó dễ áp dụng và dễ quên. Các công cụ chồng lấp và chỗ ngồi không dùng tích tụ.
- **Thành phần mã nguồn mở.** [Phần mềm mã nguồn mở](https://en.wikipedia.org/wiki/Open-source_software) có sẵn theo các giấy phép trao quyền rộng với điều kiện. Một số giấy phép, gọi là giấy phép [copyleft](https://en.wikipedia.org/wiki/Copyleft), yêu cầu công trình phái sinh được chia sẻ theo cùng điều khoản. Việc tuân thủ phụ thuộc vào cách một thành phần được dùng và phân phối, và việc diễn giải một giấy phép là một câu hỏi pháp lý.
- **Phần mềm bạn tự xây.** Mã của chính bạn là một tài sản, và nó phụ thuộc vào nhiều thành phần. Một [bảng kê vật liệu phần mềm](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) là danh sách các thành phần trong một phần mềm. Nó giúp bạn trả lời dịch vụ nào của bạn dùng một thư viện nhất định khi một lỗ hổng hoặc vấn đề giấy phép xuất hiện.

Các chỉ số tài sản phần mềm chịu sự méo mó thông thường. Một vị thế giấy phép có thể trông khỏe vì bản kiểm kê không đầy đủ. Chi phí shelfware có thể trông thấp vì hợp đồng bị rút ngắn trước buổi rà soát. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng, nên mỗi thước đo ở đây được ghép với một kiểm tra độc lập (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Một lưu ý về luật: điều khoản giấy phép và quyền kiểm toán là vấn đề pháp lý. Chủ đề này mô tả thực hành đo lường. Nó không diễn giải bất kỳ giấy phép nào, và nó không thay thế tư vấn của luật sư có trình độ cho tình huống và khu vực pháp lý của bạn.

## Nguyên tắc chính

- **Đo quyền sử dụng so với việc dùng.** Biết bạn được dùng gì và bạn dùng gì là phép so sánh cốt lõi.
- **Đếm theo đơn vị mà giấy phép dùng.** Người dùng, thiết bị, lõi và gói đăng ký là khác nhau, và trộn chúng giấu câu trả lời.
- **Biến đường được duyệt thành đường nhanh.** Một danh mục hiển thị và phê duyệt nhanh giảm việc áp dụng ngầm.
- **Gồm thành phần cũng như sản phẩm.** Thư viện mã nguồn mở và giấy phép của chúng là một phần của hệ thống.
- **Rà soát trước khi gia hạn.** Thời điểm tốt nhất để cắt lãng phí là trước ngày hợp đồng.
- **Giữ pháp lý trong cuộc trò chuyện.** Việc diễn giải thuộc về những người có trình độ.
- **Chia sẻ bức tranh với các đội.** Các đội thấy việc dùng và chi phí của mình đưa ra lựa chọn tốt hơn.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vị thế giấy phép hiệu lực | So sánh quyền sử dụng đang nắm giữ với việc dùng tìm thấy, theo từng sản phẩm, trong đơn vị đếm riêng của giấy phép | số quyền sử dụng nắm giữ trừ số triển khai hoặc người dùng tìm thấy, theo từng sản phẩm | đơn vị (thặng dư dương, thiếu hụt âm) | Bản ghi quyền sử dụng, công cụ khám phá, hệ thống danh tính | Quản lý tài sản CNTT; quản lý nhà cung cấp | Danh mục và dữ liệu sử dụng hiển thị cho các đội | Hằng tháng cho sản phẩm chính; hằng quý cho các sản phẩm khác |
| Tỷ lệ sử dụng giấy phép | Tỷ lệ quyền sử dụng đã trả tiền đang được dùng tích cực | số quyền sử dụng có hoạt động trong 90 ngày qua / số quyền sử dụng đã trả tiền | phần trăm | Báo cáo sử dụng của nhà cung cấp, nhật ký danh tính, bản ghi quyền sử dụng | Quản lý tài sản CNTT; quản lý tài chính | Buổi nhìn lại về giá trị công cụ | Hằng tháng |
| Chi phí shelfware | Chi phí hằng năm của các quyền sử dụng đã trả tiền và không dùng | tổng của (quyền sử dụng không dùng nhân đơn giá) | tiền tệ mỗi năm | Bản ghi quyền sử dụng, dữ liệu sử dụng, hóa đơn | Quản lý tài sản CNTT; quản lý tài chính | Giảm lãng phí trong bộ công cụ | Hằng quý |
| Số ứng dụng không được duyệt | Số ứng dụng phần mềm đang dùng không có trong danh mục được duyệt | số ứng dụng thấy trong dữ liệu chi phí, nhật ký đăng nhập một lần, hoặc dữ liệu mạng mà không có trong danh mục | số đếm | Báo cáo chi phí, nhà cung cấp danh tính, dữ liệu mạng và thiết bị đầu cuối | Quản lý tài sản CNTT; quản lý an toàn thông tin | Các đội chọn công cụ với sự hỗ trợ hiển thị | Hằng tháng |
| Mức sẵn sàng gia hạn | Tỷ lệ lần gia hạn đã có buổi rà soát sử dụng trước ngày thông báo | số lần gia hạn có buổi rà soát sử dụng hoàn tất ít nhất 90 ngày trước ngày thông báo / số lần gia hạn đến hạn trong kỳ | phần trăm | Sổ đăng ký hợp đồng và bản ghi rà soát | Quản lý nhà cung cấp; quản lý tài chính | Lập kế hoạch trước cho thay đổi | Hằng quý |
| Độ phủ SBOM | Tỷ lệ dịch vụ môi trường thật có một bảng kê vật liệu phần mềm hiện hành | số dịch vụ có một SBOM được tạo trong chu kỳ phát hành gần nhất / số dịch vụ môi trường thật | phần trăm | Đầu ra đường ống xây dựng, danh mục dịch vụ | Quản lý tài sản CNTT; quản lý an toàn thông tin | Định nghĩa hoàn thành gồm khả năng nhìn thấy phụ thuộc | Hằng tháng |
| Độ phủ rà soát mã nguồn mở | Tỷ lệ thành phần trong môi trường thật có nhận diện giấy phép và quyết định chính sách được ghi lại | số thành phần có giấy phép và quyết định được ghi / số thành phần tìm thấy trong các SBOM | phần trăm | Công cụ phân tích thành phần phần mềm, sổ đăng ký chính sách | Quản lý tài sản CNTT; quản lý nhà cung cấp | Rà soát phụ thuộc trong đường ống | Hằng tháng |

Hãy nêu đơn vị đếm cho mỗi sản phẩm trong sổ đăng ký. Mức sử dụng bắt đầu đếm hoạt động từ một sự kiện xác định, như đăng nhập, và một cửa sổ nêu rõ. Chỉ loại tài khoản dịch vụ và tài khoản thử khỏi số đếm người dùng khi điều khoản giấy phép cho phép, và ghi lại quy tắc. Chi phí là đơn giá hợp đồng sau khi trừ chiết khấu đã thống nhất, và ngày của giá được ghi lại.

## Khuyến nghị

### Biết bạn nắm giữ gì và dùng gì

**1. Giữ một bản ghi quyền sử dụng cho mỗi sản phẩm tốn tiền hoặc mang nghĩa vụ.** Bản ghi nên chứa nhà cung cấp, sản phẩm, loại giấy phép, đơn vị đếm, số lượng, thời hạn, giá, ngày gia hạn và thông báo, hạn chế, và người sở hữu. Lưu hợp đồng hoặc một liên kết đến nó. Chỉ số phụ thuộc vào bản ghi này, và bản ghi thường không tồn tại cho các gói đăng ký mua ngoài mua sắm.

**2. Đo việc sử dụng bằng đơn vị của nhà cung cấp.** Giấy phép theo chỗ ngồi đếm người dùng có tên, và giấy phép theo bộ xử lý đếm lõi. Mức sử dụng theo sai đơn vị cho sự yên tâm giả. Nơi điều khoản phức tạp, hãy nhờ mua sắm và pháp lý mô tả quy tắc đếm bằng ngôn ngữ giản dị một lần, và ghi lại.

**3. Kết hợp ba nguồn dữ liệu sử dụng.** Bảng quản trị của nhà cung cấp, nhật ký đăng nhập của nhà cung cấp danh tính, và công cụ khám phá của bạn mỗi cái thấy một phần. Nơi chúng bất đồng, hãy tìm hiểu vì sao. Một chỗ ngồi được gán nhưng không bao giờ dùng là ứng viên để thu hồi, và một người dùng xuất hiện trong một nhật ký mà không trong cái khác có thể là vấn đề dữ liệu.

**4. Thu hồi chỗ ngồi không dùng theo mặc định.** Đặt một quy tắc, như gỡ quyền truy cập sau 90 ngày không dùng và khôi phục khi có yêu cầu. Làm cho việc khôi phục dễ để quy tắc không làm mọi người bực bội. Thu hồi là một thực hành liên tục, không phải một dự án, và hiệu quả nhất khi nó tự động và được thông báo.

### Biến đường đúng thành đường dễ

**5. Công bố một danh mục công cụ được duyệt.** Liệt kê những gì các đội có thể dùng, nó tốn bao nhiêu, ai hỗ trợ, và cách yêu cầu truy cập. Thêm một đường nhanh để đề xuất công cụ mới, với một lần rà soát ngắn về an ninh, quyền riêng tư và chi phí. Một danh mục giúp mọi người tìm công cụ hiện có ngăn các lần mua trùng lặp (xem chủ đề 6.3, Chỉ số áp dụng dịch vụ và danh mục).

**6. Canh sự lan tràn mà không trừng phạt.** Hãy dùng dữ liệu chi phí, nhật ký đăng nhập một lần và dữ liệu mạng để tìm các ứng dụng không có trong danh mục. Coi mỗi cái là một cuộc trò chuyện: đội cần gì, và một công cụ được duyệt có thể phục vụ không? Đếm các ứng dụng không được duyệt và theo dõi xu hướng, và nhắm đến việc đưa những cái hữu ích vào quản lý, không phải dẹp chúng.

**7. Cho các đội thấy việc dùng và chi phí của chính họ.** Một cái nhìn hằng tháng về chỗ ngồi, mức dùng và chi phí theo đội cho phép họ dọn các gói đăng ký của mình. Khả năng nhìn thấy hiệu quả hơn việc kiểm soát, và nó tôn trọng sở thích linh hoạt cho các đội tự tổ chức có thông tin họ cần.

### Lập kế hoạch gia hạn và quản lý phụ thuộc

**8. Rà soát việc dùng trước mỗi lần gia hạn đáng kể.** Đặt một buổi rà soát 90 đến 120 ngày trước ngày thông báo, cùng người sở hữu, mua sắm và tài chính. Mang theo mức sử dụng, chi phí shelfware, phương án thay thế và phản hồi của đội. Mức sẵn sàng gia hạn là tỷ lệ các lần gia hạn đến buổi rà soát này kịp lúc. Bỏ lỡ ngày thông báo là một chi phí có nguyên nhân.

**9. Canh sự khóa chặt nhà cung cấp.** [Khóa chặt nhà cung cấp (vendor lock-in)](https://en.wikipedia.org/wiki/Vendor_lock-in) làm việc chuyển nhà cung cấp tốn kém. Hãy ghi lại lối thoát cho các sản phẩm quan trọng: định dạng xuất dữ liệu, điều khoản hợp đồng khi chấm dứt, và công sức để thay thế. Bạn không phải tránh sự phụ thuộc, nhưng bạn nên biết giá của nó.

**10. Tạo một SBOM ở mỗi bản phát hành.** Công cụ xây dựng có thể tạo SBOM tự động như một phần của đường ống, để thông tin luôn hiện hành mà không tốn công liên tục. Lưu nó cùng bản phát hành, và làm nó tìm kiếm được để bạn trả lời được dịch vụ nào dùng một thành phần. Điều này hỗ trợ cả giấy phép lẫn ứng phó an ninh.

**11. Rà soát giấy phép mã nguồn mở trong đường ống.** Các công cụ [phân tích thành phần phần mềm](https://en.wikipedia.org/wiki/Software_composition_analysis) nhận diện thành phần và giấy phép của chúng. Hãy thống nhất một chính sách ngắn với pháp lý về giấy phép nào được duyệt, cái nào cần rà soát, và cái nào không được phép cho việc dùng của bạn, và để đường ống đánh dấu ngoại lệ. Giữ các quyết định chính sách trong một sổ đăng ký. Công cụ nhận diện giấy phép, và một người có trình độ diễn giải quyết định các trường hợp khó.

### Chuẩn bị cho kiểm toán một cách bình tĩnh

**12. Giữ sẵn bằng chứng, không phải cuống cuồng.** Một [cuộc kiểm toán phần mềm](https://en.wikipedia.org/wiki/Software_audit) bởi nhà cung cấp hoặc cơ quan quản lý yêu cầu bạn chứng minh việc dùng khớp với quyền sử dụng. Nếu bản ghi quyền sử dụng và dữ liệu sử dụng đã được đối chiếu mỗi tháng, một cuộc kiểm toán là một yêu cầu thường lệ. Hãy mời pháp lý và mua sắm sớm, trả lời qua một kênh duy nhất, và đừng tự báo cáo kết luận mà bạn chưa rà soát cùng họ.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Vị thế giấy phép hiệu lực | Đếm theo một đơn vị thuận lợi; để các triển khai ngầm ngoài khám phá | Đếm theo đơn vị riêng của giấy phép; so sánh với dữ liệu chi phí và danh tính; pháp lý rà soát quy tắc đếm |
| Tỷ lệ sử dụng giấy phép | Rút ngắn cửa sổ hoạt động; tính lượt đăng nhập của bot hay tài khoản dịch vụ là sử dụng | Cửa sổ cố định trong sổ đăng ký; loại các tài khoản không phải người; so sánh với báo cáo sử dụng của nhà cung cấp |
| Chi phí shelfware | Thương lượng lại hoặc hủy ngay trước buổi rà soát để giảm con số; bỏ qua gói đăng ký trên thẻ | Gồm mọi nguồn chi; theo dõi chi phí lúc bắt đầu cửa sổ thông báo |
| Số ứng dụng không được duyệt | Duyệt mọi thứ vào danh mục để giảm số đếm; giấu việc dùng bằng tài khoản cá nhân | Tiêu chí rà soát danh mục; xem dữ liệu chi tiêu và danh tính; hỏi các đội cần gì |
| Mức sẵn sàng gia hạn | Tổ chức buổi rà soát qua loa; đặt ngày thông báo muộn hơn | Danh sách kiểm tra rà soát với đầu vào bắt buộc; ngày hợp đồng do mua sắm giữ |
| Độ phủ SBOM | Tạo SBOM bỏ sót phụ thuộc bắc cầu; tính đầu ra xây dựng không được phát hành | Định nghĩa độ sâu trong sổ đăng ký; kiểm tra ngẫu nhiên một SBOM với sản phẩm đã triển khai |
| Độ phủ rà soát mã nguồn mở | Đánh dấu thành phần là đã rà soát mà không có quyết định; chấp nhận giấy phép "không rõ" | Đếm thành phần có giấy phép không rõ; rà soát một mẫu quyết định |

Một kết quả đọc lành mạnh là một vị thế giấy phép khớp với bằng chứng độc lập, một tỷ lệ sử dụng tăng vì chỗ ngồi được thu hồi chứ không phải vì định nghĩa đổi, một số ứng dụng không được duyệt giảm khi danh mục cải thiện, và các lần gia hạn đến cùng một buổi rà soát.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Phê duyệt trung tâm mọi công cụ | Kiểm soát mạnh, một cái nhìn | Chậm; khuyến khích CNTT ngầm |
| Đội tự chọn trong giới hạn | Nhanh; khớp nhu cầu đội | Đa dạng hơn; cần khả năng nhìn thấy và rà soát |
| Thu hồi chỗ ngồi quyết liệt | Tiết kiệm chi phí | Có thể làm người dùng bực nếu khôi phục chậm |
| Cấp chỗ ngồi rộng rãi | Ít ma sát | Lãng phí tích tụ |
| Thỏa thuận doanh nghiệp | Đơn giá thấp hơn, đơn giản hơn | Khóa chặt; trả tiền cho phạm vi không cần |
| Trả theo mức dùng | Khớp chi phí với việc dùng | Hóa đơn khó đoán |
| Quét giấy phép tự động | Nhất quán và nhanh | Cần phán đoán của con người ở các trường hợp biên |
| Rà soát thành phần thủ công | Cẩn thận | Không mở rộng được cho cây phụ thuộc lớn |

Câu trả lời dạng văn xuôi là cho các đội lựa chọn trong giới hạn rõ ràng, tự động hóa các kiểm tra, và dành sự chú ý của con người cho các hợp đồng lớn và các câu hỏi giấy phép khó. Hãy giữ một đường nhanh cho công cụ mới và một đường dễ để khôi phục quyền truy cập đã thu hồi.

## Câu hỏi để thảo luận với đội nhóm

**1. Ba sản phẩm nào tốn chúng ta nhiều nhất, và chúng ta có biết bao nhiêu người dùng chúng không?**
Liệt kê các hợp đồng lớn nhất và đơn vị đếm cho mỗi cái. So sánh với dữ liệu sử dụng. Người điều phối nên tìm các sản phẩm mà không ai biết đơn vị hoặc dữ liệu sử dụng không tồn tại. Thống nhất thu thập dữ liệu cho một cái trước lần gia hạn kế tiếp.

**2. Một công cụ mới được áp dụng ở đây thế nào, và mất bao lâu?**
Lần theo một ví dụ gần đây từ yêu cầu đến truy cập. Hỏi bao nhiêu đội đã bỏ qua đường đó, và vì sao. Câu trả lời cho thấy đường được duyệt có nhanh không. Thống nhất một cải tiến cho đường đó và một cách biết nó có hiệu quả không.

**3. Điều gì sẽ xảy ra nếu một nhà cung cấp yêu cầu chúng ta chứng minh vị thế giấy phép vào tháng tới?**
Đi qua ai sẽ trả lời, bản ghi nào tồn tại, và có khoảng trống nào. Cuộc trò chuyện không nên nhắm đến việc tìm kết luận pháp lý, chỉ xác định các bản ghi còn thiếu. Nêu tên những người trong pháp lý và mua sắm sẽ tham gia và đội sẽ liên lạc họ ra sao.

**4. Chúng ta thu hồi chỗ ngồi không dùng ở đâu, và ở đâu thì không?**
Rà soát các quy tắc thu hồi cho các sản phẩm hàng đầu. Hỏi điều gì sẽ xảy ra nếu một quy tắc được áp dụng cho phần còn lại. Thảo luận cách làm việc khôi phục quyền truy cập không đau đầu, vì đó là điều làm quy tắc chấp nhận được.

**5. Chúng ta có nói được dịch vụ nào của mình dùng một thư viện mã nguồn mở nhất định không?**
Chọn một thư viện nổi tiếng và thử trả lời. Nếu mất hơn vài phút, hãy thảo luận vì sao. Thống nhất bước đường ống nào có thể tạo một SBOM và nơi kết quả có thể được lưu.

**6. Chúng ta phụ thuộc vào gì mà khó rời bỏ?**
Liệt kê các sản phẩm có dữ liệu hay quy trình gắn sâu với một nhà cung cấp. Hỏi rời đi sẽ tốn gì và bạn sẽ bắt đầu thế nào. Người điều phối có thể ghi câu trả lời làm đầu vào cho việc lập kế hoạch gia hạn.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối chọn công cụ và thư viện hằng ngày. Họ nên dùng danh mục được duyệt nơi nó phục vụ họ, đề xuất bổ sung kèm một ghi chú ngắn, và để đường ống tạo SBOM và đánh dấu vấn đề giấy phép. Họ cần câu trả lời nhanh: một chính sách rõ về các giấy phép phổ biến và một con đường để hỏi về các giấy phép bất thường. Một đội thấy dữ liệu chỗ ngồi và chi tiêu của mình sẽ dọn nó mà không cần ai bảo.

### Đội dịch vụ và vận hành

Các đội vận hành chạy khám phá, quản lý quyền truy cập, và đối phó với gia hạn và kiểm toán. Họ nên đối chiếu dữ liệu sử dụng với quyền sử dụng, thu hồi chỗ ngồi không dùng theo lịch, và giữ sổ đăng ký hợp đồng hiện hành. Họ cũng gánh gánh nặng hỗ trợ của các công cụ không được quản lý, là lý do tốt để đưa những cái hữu ích vào quản lý.

### Lãnh đạo và quản trị

Lãnh đạo muốn tránh chi phí ngoài kế hoạch và rủi ro pháp lý mà không làm chậm các đội. Họ nên tài trợ tự động hóa, yêu cầu bằng chứng độc lập đứng sau các tuyên bố vị thế giấy phép, và giữ pháp lý và mua sắm trong vòng. Quản trị nên chờ đợi các lần gia hạn được rà soát kịp lúc và chính sách mã nguồn mở được áp dụng trong đường ống.

### Khách hàng và người dùng

Người dùng muốn công cụ họ cần hoạt động ngay lần đầu, không phải chờ lâu. Họ nhận thấy khi quyền truy cập biến mất không báo trước hoặc khi hai công cụ làm cùng việc. Họ nên được báo khi chỗ ngồi sẽ bị thu hồi, có một con đường dễ để xin truy cập, và được tham vấn khi một công cụ được thay thế.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Nhóm công nghệ của một tổ chức tin tức khu vực hỗ trợ 900 nhân viên và vận hành một nền tảng xuất bản với khoảng 40 dịch vụ. Các con số dưới đây chỉ mang tính minh họa.

Giám đốc tài chính hỏi vì sao chi phí phần mềm tăng nhanh hơn số nhân viên. Người quản lý tài sản phần mềm thu thập dữ liệu. Bản ghi quyền sử dụng bao quát 61 sản phẩm. Nhật ký đăng nhập và báo cáo nhà cung cấp cho thấy bộ thiết kế có 220 chỗ ngồi và 140 người dùng hoạt động trong 90 ngày qua, tỷ lệ sử dụng 64 phần trăm, với các chỗ ngồi không dùng tốn xấp xỉ lương của một kỹ sư. Dữ liệu chi phí cho thấy 37 ứng dụng không có trong danh mục, chủ yếu là công cụ cộng tác và phân tích do các đội mua. Ba trong các lần gia hạn lớn nhất có ngày thông báo đã qua mà không có buổi rà soát sử dụng.

Đội thực hiện bốn thay đổi cùng các đội sản phẩm. Một quy tắc thu hồi chỗ ngồi gỡ quyền truy cập sau 90 ngày không dùng, kèm một yêu cầu khôi phục một cú nhấp. Một trang danh mục liệt kê các công cụ được duyệt, chi phí và người sở hữu của chúng, với một đường hai ngày để đề xuất công cụ mới. Các buổi rà soát gia hạn bắt đầu 100 ngày trước ngày thông báo, với một danh sách kiểm tra về mức sử dụng, phương án thay thế và phản hồi của đội. Đường ống xây dựng của nền tảng xuất bản giờ tạo một SBOM ở mỗi bản phát hành, và một lần quét giấy phép đánh dấu các thành phần có giấy phép không rõ hoặc bị hạn chế để pháp lý rà soát.

Ba tháng sau, mức sử dụng bộ thiết kế là 86 phần trăm sau khi thu hồi 60 chỗ ngồi, và một lần gia hạn được thương lượng lại xuống số chỗ ngồi thấp hơn. Số ứng dụng không được duyệt giảm từ 37 xuống 24, khi đội thêm bốn công cụ hữu ích vào danh mục và cho nghỉ hưu các bản trùng lặp. Độ phủ SBOM là 70 phần trăm dịch vụ môi trường thật. Lần quét tìm thấy một thành phần có giấy phép không rõ trong một dịch vụ ít dùng, mà pháp lý rà soát và đội thay thế. Một nhà cung cấp yêu cầu xác minh giấy phép cho một sản phẩm khác, và các bản ghi đưa ra cho kiểm toán khớp, với một chỉnh sửa. Giám đốc yêu cầu một lời hứa 100 phần trăm sử dụng, và người quản lý giải thích rằng một con số lành mạnh chừa chút dư địa cho nhân viên mới và thay đổi, và bà đề xuất một khoảng làm hướng dẫn, không phải mục tiêu. Quyết định được ghi lại.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy làm cho các đội dễ chọn công cụ qua một quy trình ngắn, hiển thị, và rà soát việc dùng cùng các bên liên quan thường xuyên. Điều cần lưu ý là một quy trình phê duyệt nghiêm ngặt đẩy mọi người sang các công cụ không được duyệt.

### AI

Các dịch vụ AI thêm các mô hình giấy phép mới, dựa trên chỗ ngồi, token hoặc mức dùng, và các nghĩa vụ mới về dữ liệu và điều khoản mô hình. Hãy theo dõi mức sử dụng giấy phép và chi phí mỗi người dùng hoạt động cho các công cụ AI, và ghép chúng với một kiểm tra tính hữu ích từ người dùng. Điều cần lưu ý là giá theo mức dùng có thể tăng không ai để ý, nên hãy đặt cảnh báo và người sở hữu.

### Tự động hóa

Hãy thu thập dữ liệu quyền sử dụng và mức dùng tự động, và tạo bảng kê vật liệu phần mềm trong đường ống. Đo tự động hóa theo độ phủ và dương tính giả. Điều cần lưu ý là một bảng kê vật liệu được tạo mà không ai đọc không giảm rủi ro.

### Phân tích

Hãy cho thấy vị thế giấy phép hiệu lực và chi phí shelfware kèm ngày của dữ liệu. Quyết định được cung cấp thông tin là gia hạn, giảm hay bỏ cái gì. Điều cần lưu ý là quy tắc giấy phép phức tạp, nên hãy nhờ một chuyên gia diễn giải hợp đồng.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Công cụ được chọn nhanh và trả bằng thẻ. Hãy giữ một danh sách gói đăng ký một trang kèm người sở hữu và ngày gia hạn, rà soát hằng quý, và dùng các gói miễn phí có chủ đích. Hãy chú ý giấy phép mã nguồn mở trước khi phân phối phần mềm hoặc gọi vốn, vì nhà đầu tư có thể hỏi.

**Doanh nghiệp nhỏ.** Một nhúm sản phẩm mang phần lớn chi phí. Hãy theo dõi số chỗ ngồi bằng tay, đặt nhắc lịch cho các lần gia hạn, và xin nhà cung cấp báo cáo sử dụng. Hãy đề phòng các gói đăng ký tự gia hạn và giấy phép gắn với một người đã rời đi.

**Doanh nghiệp lớn.** Hợp đồng phức tạp, sáp nhập và nhiều đơn vị kinh doanh khiến bản ghi quyền sử dụng khó. Hãy đầu tư vào một mô hình dữ liệu giữ các đơn vị đếm, tự động hóa nguồn khám phá và danh tính, và cho pháp lý và mua sắm một chỗ trong đường ống cho chính sách mã nguồn mở. Hãy chờ đợi các cuộc kiểm toán của nhà cung cấp và chuẩn bị bằng chứng từ trước.

**Chính phủ và khu vực công.** Quy tắc mua sắm, cấp phép vì lợi ích công, và yêu cầu chủ quyền định hình lựa chọn. Hãy ghi tài liệu lý do mua, giữ hồ sơ hợp đồng trong thời gian yêu cầu, và coi tiêu chuẩn mở và lối thoát là yêu cầu. Minh bạch về chi tiêu phần mềm có thể là nghĩa vụ theo luật (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là thời gian xây bản ghi quyền sử dụng, công cụ phân tích sử dụng và thành phần, và công sức rà soát gia hạn. Một số công cụ đã được cấp phép như một phần của nền tảng danh tính hoặc thiết bị đầu cuối. Chi phí thường lệ là vài giờ mỗi tháng cho một hệ thống nhỏ và nhiều hơn cho một hệ thống lớn. Tự động hóa việc thu hồi và tạo SBOM hạ nó xuống.

Lợi tức đến từ chi tiêu tránh được và bất ngờ tránh được. Chỗ ngồi không dùng là tiết kiệm trực tiếp lúc gia hạn. Các buổi rà soát gia hạn sớm cho phép bạn thương lượng từ hiểu biết. Biết các phụ thuộc của bạn rút ngắn phản ứng với lỗ hổng và câu hỏi giấy phép. Tránh trích dẫn tỷ lệ tiết kiệm của ngành mà bạn không truy được. Hãy đo đường cơ sở của riêng bạn: chỗ ngồi không dùng nhân đơn giá, số lần gia hạn được rà soát muộn, thời gian trả lời "dịch vụ nào dùng thành phần này", và chi phí của bất kỳ phát hiện kiểm toán nào trong quá khứ. Hãy tính chi phí của chính chương trình, và chỉ tính rủi ro pháp lý tránh được nơi bạn mô tả được một rủi ro cụ thể đã giảm. Các chủ đề kế tiếp về chi phí đi xa hơn vào góc nhìn tài chính (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị).

## Phản mẫu và cạm bẫy

- **Đếm sai đơn vị.** Một số đếm chỗ ngồi cho giấy phép bán theo lõi gây hiểu lầm. Hãy ghi đơn vị.
- **Coi báo cáo của nhà cung cấp là toàn bộ sự thật.** Hãy kết hợp nó với nhật ký của chính bạn.
- **Chặn công cụ theo mặc định.** Các đội đi vòng qua chỗ chặn. Hãy làm đường được duyệt nhanh.
- **Thu hồi mà không có đường quay lại.** Người dùng mất lòng tin. Hãy làm việc khôi phục dễ và nhanh.
- **Rà soát gia hạn sau ngày thông báo.** Đòn bẩy đã mất. Hãy bắt đầu sớm.
- **Quét giấy phép và phớt lờ kết quả.** Một lần quét không có chính sách và người sở hữu quyết định là nhiễu.
- **Diễn giải giấy phép trong đội phân phối.** Các trường hợp khó thuộc về pháp lý.
- **Coi SBOM là giấy tờ.** Nếu không ai truy vấn, chúng mục ruỗng. Hãy dùng chúng trong các buổi diễn tập phản ứng.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Quyền sử dụng và việc dùng | Hợp đồng trong email; không có dữ liệu sử dụng | Bản ghi cho sản phẩm chính; thỉnh thoảng kiểm tra sử dụng | Bản ghi quyền sử dụng có đơn vị đếm; mức dùng từ dữ liệu danh tính và nhà cung cấp | Vị thế giấy phép và mức sử dụng được rà soát hằng tháng; chỗ ngồi được thu hồi tự động | Mức dùng và chi tiêu chia sẻ với các đội; dữ liệu mua và dùng chảy giữa nhà cung cấp và tổ chức |
| Đường áp dụng | Các đội mua cái họ thích | Một danh sách công cụ được duyệt | Đường danh mục nhanh với người sở hữu và tiêu chí rà soát | Ứng dụng không được duyệt được theo dõi và hấp thụ hoặc cho nghỉ hưu | Lựa chọn công cụ đồng thiết kế với các đội; dịch vụ chung được tái sử dụng trong tổ chức |
| Thành phần và phụ thuộc | Không biết | Danh sách thành phần thủ công cho một số dịch vụ | SBOM tạo ở mỗi bản phát hành; chính sách giấy phép thống nhất với pháp lý | Độ phủ được theo dõi; ngoại lệ được rà soát; chạy diễn tập phản ứng | SBOM và chính sách chia sẻ với nhà cung cấp và khách hàng; lối thoát được lập kế hoạch |

## Danh sách kiểm tra

- [ ] Mỗi sản phẩm trả tiền hoặc mang nghĩa vụ có một bản ghi quyền sử dụng với đơn vị, số lượng, thời hạn và người sở hữu.
- [ ] Mức dùng đến từ ít nhất hai nguồn, được so sánh hằng tháng cho sản phẩm chính.
- [ ] Việc thu hồi chỗ ngồi có một quy tắc, một thông báo và một đường quay lại dễ dàng.
- [ ] Một danh mục công cụ được duyệt tồn tại với một đường nhanh để đề xuất công cụ mới.
- [ ] Dữ liệu chi phí và danh tính được kiểm tra để tìm ứng dụng không được duyệt.
- [ ] Các buổi rà soát gia hạn bắt đầu ít nhất 90 ngày trước ngày thông báo.
- [ ] SBOM được tạo và lưu cho mỗi bản phát hành của dịch vụ môi trường thật.
- [ ] Một chính sách giấy phép thống nhất với pháp lý đánh dấu ngoại lệ trong đường ống.
- [ ] Lối thoát nhà cung cấp được ghi lại cho các sản phẩm quan trọng.
- [ ] Đầu mối pháp lý và mua sắm cho kiểm toán được nêu tên và các đội biết.

## Lời nhắc AI

**Xây một mẫu bản ghi quyền sử dụng.**

```text
Draft a template for recording software entitlements for [type of organization],
covering these product types: [licensed, SaaS, open-source, built]. Fields should
include counting unit, quantity, term, price, notice date, restrictions, owner,
usage source, and exit notes. Suggest how to fill each field from existing
sources: [list]. Do not interpret any license terms. List your assumptions and
the fields that need legal or procurement input.
```

**Chuẩn bị một buổi rà soát gia hạn.**

```text
We have a renewal for [product] with a notice date of [date]. Facts: entitled
[number] [units], active use [number] in the last 90 days, annual cost
[amount], and team feedback [summary]. Draft a one-page renewal review with
questions to ask, options (renew as is, reduce, replace, renegotiate), and the
information we still need. Do not invent market prices. List your assumptions.
```

**Thiết kế một quy tắc thu hồi chỗ ngồi.**

```text
Propose a seat reclamation policy for [product] used by [number] people in
[type of organization]. Include the inactivity window, notice to users, how
to restore access, exceptions (for example leave or seasonal use), and how to
measure whether it helps without annoying users. Context: [tools available].
List your assumptions and risks.
```

**Phân loại một kết quả quét giấy phép.**

```text
Our scan of [service] found these components and licenses: [paste list with
license identifiers]. Our policy: approved [list], review needed [list], not
permitted [list]. Sort the components into those three groups, flag unknown or
ambiguous cases, and suggest what to ask legal for each flagged item. Do not
give legal conclusions. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số tài sản phần mềm hoặc giấy phép.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số phần mềm nêu đơn vị đếm, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- So sánh quyền sử dụng với việc dùng thực tế, đếm theo đơn vị riêng của giấy phép.
- Biến đường được duyệt thành đường nhanh, để các đội không cần giấu những gì họ dùng.
- Rà soát việc dùng trước ngày thông báo gia hạn, và thu hồi chỗ ngồi không dùng theo một quy tắc hiển thị.
- Tạo SBOM trong đường ống và đánh dấu giấy phép so với một chính sách thống nhất với pháp lý.
- Giữ pháp lý và mua sắm tham gia diễn giải và kiểm toán.
- Cho các đội thấy việc dùng và chi phí của chính họ.

## Tài liệu tham khảo và đọc thêm

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
