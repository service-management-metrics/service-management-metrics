# Chỉ số tính sẵn sàng

**Tính sẵn sàng là tỷ lệ thời gian, hoặc tỷ lệ yêu cầu của người dùng, trong đó một dịch vụ làm được điều người dùng cần, và nó chỉ nói sự thật khi bạn định nghĩa "chạy" nghĩa là gì từ phía người dùng, đếm riêng các lần ngừng hoạt động có kế hoạch và ngoài kế hoạch, và đọc số học của các chữ số chín trước khi hứa một con số.**

## Tổng quan và động lực

Tính sẵn sàng là con số được trích dẫn nhiều nhất trong quản lý dịch vụ và là một trong những con số được định nghĩa kém chính xác nhất. Một câu như "dịch vụ đã sẵn sàng 99,9 phần trăm tháng trước" nghe có vẻ chính xác, nhưng nó giấu ít nhất bốn quyết định: cái gì được tính là dịch vụ, cái gì được tính là "sẵn sàng", những giờ nào nằm trong phạm vi, và những lần ngừng hoạt động nào bị loại trừ. Hai đội có thể báo cáo cùng một dịch vụ trong cùng một tháng và công bố những con số chênh nhau cả một bậc độ lớn mà không đội nào mắc lỗi số học.

Chủ đề này làm cho những quyết định đó tường minh. Nó bao quát cách tính thời gian hoạt động và ngừng hoạt động, tính sẵn sàng có trọng số theo người dùng, ngừng hoạt động có kế hoạch so với ngoài kế hoạch, và số học của các chữ số chín. Nó xây trên các chỉ báo mức dịch vụ (SLI), mục tiêu mức dịch vụ (SLO) và ngân sách lỗi (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi) và trên góc nhìn hợp đồng của mức dịch vụ (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA). Những chủ đề đó nói cách chọn một mục tiêu. Chủ đề này nói cách tính con số mà mục tiêu được so sánh với.

### Các thuật ngữ dùng trong chủ đề này

- **Tính sẵn sàng** là khả năng của một dịch vụ làm được điều người dùng cần khi họ cần, thường được diễn đạt dưới dạng phần trăm trên một giai đoạn. Khái niệm chung được mô tả trong bài về [tính sẵn sàng cao](https://en.wikipedia.org/wiki/High_availability).
- **[Thời gian ngừng hoạt động](https://en.wikipedia.org/wiki/Downtime)** là giai đoạn một dịch vụ không khả dụng. Chủ đề này dùng **sự cố ngừng hoạt động (outage)** cho một đợt ngừng hoạt động liên tục và **suy giảm (degradation)** cho một giai đoạn dịch vụ chạy nhưng dưới chất lượng đã thống nhất.
- **Thời gian hoạt động** là phần bù của thời gian ngừng hoạt động trong cửa sổ đo. Tính sẵn sàng dựa trên thời gian là thời gian hoạt động chia cho tổng thời gian trong phạm vi.
- **Tính sẵn sàng dựa trên yêu cầu** là tỷ lệ yêu cầu hợp lệ thành công, nên một thất bại ảnh hưởng 5 phần trăm yêu cầu trong một giờ được tính là 5 phần trăm lưu lượng của một giờ, không phải một giờ ngừng hoạt động đầy đủ.
- **Tính sẵn sàng có trọng số theo người dùng** mở rộng góc nhìn dựa trên yêu cầu bằng cách gán trọng số cho các thất bại theo số lượng hoặc tầm quan trọng của người dùng bị ảnh hưởng, ví dụ bằng cách đếm phiên thất bại hoặc hành trình thất bại thay vì yêu cầu thô.
- Một **thỏa thuận mức dịch vụ (SLA)** là một cam kết với khách hàng, và một **mục tiêu mức dịch vụ (SLO)** là một mục tiêu nội bộ cho một chỉ báo. Các bài về [thỏa thuận mức dịch vụ](https://en.wikipedia.org/wiki/Service-level_agreement) và [mục tiêu mức dịch vụ](https://en.wikipedia.org/wiki/Service-level_objective) đưa ra các định nghĩa chung.
- **Ngừng hoạt động có kế hoạch** là một lần ngừng được báo trước và phê duyệt qua hỗ trợ thay đổi. **Ngừng hoạt động ngoài kế hoạch** là mọi thứ khác. Ranh giới giữa hai loại là một trong những đường bị tranh cãi nhiều nhất trong báo cáo tính sẵn sàng.
- **[Thời gian trung bình giữa các lần hỏng (MTBF)](https://en.wikipedia.org/wiki/Mean_time_between_failures)** là thời gian vận hành trung bình giữa các lần ngừng hoạt động, và **[thời gian trung bình để sửa](https://en.wikipedia.org/wiki/Mean_time_to_repair)** là thời gian trung bình để khôi phục. Cả hai đều là giá trị trung bình, nên cuốn sách này đọc chúng như các phân phối (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).
- **[Giám sát tổng hợp (synthetic monitoring)](https://en.wikipedia.org/wiki/Synthetic_monitoring)** dùng các đầu dò theo kịch bản hành xử như một người dùng và báo thành công hay thất bại. **[Giám sát người dùng thực (real user monitoring)](https://en.wikipedia.org/wiki/Real_user_monitoring)** ghi lại trải nghiệm của người dùng thật khi họ dùng dịch vụ.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** là khung nổi tiếng nhất cho quản lý dịch vụ CNTT. Trong ITIL 4, thực hành quản lý tính sẵn sàng quan tâm đến việc bảo đảm các dịch vụ giao mức tính sẵn sàng đã thống nhất, và nó làm việc chặt chẽ với quản lý giám sát và sự kiện, quản lý sự cố và quản lý liên tục dịch vụ.

### Vì sao một con số không bao giờ đủ

Mười lần ngừng hoạt động bốn phút mỗi lần và một lần ngừng bốn mươi phút cho cùng tổng thời gian ngừng, nhưng người dùng cảm nhận khác nhau và cần các phản ứng khác nhau. Mẫu hình đầu chỉ vào một dịch vụ mong manh. Mẫu hình thứ hai chỉ vào việc phát hiện hoặc khôi phục chậm. Vì lý do đó các chỉ số ở đây đến dưới dạng một tập nhỏ, mỗi cái có một rào chắn, để một đội có thể thảo luận về tính sẵn sàng một cách trung thực mà không cạnh tranh để có nhiều chữ số chín nhất.

### Góc nhìn ITIL và linh hoạt khác nhau ra sao

Trong ITIL, tính sẵn sàng là một thuộc tính được quản lý của dịch vụ, thống nhất với khách hàng và được quản lý mức dịch vụ báo cáo so với một mục tiêu nêu rõ, với giờ dịch vụ rõ ràng và các trường hợp loại trừ như bảo trì theo lịch.

Trong thực hành linh hoạt và kỹ thuật độ tin cậy của trang (SRE), tính sẵn sàng là một SLI trong số nhiều SLI, được so sánh với một SLO. Cuốn *Site Reliability Engineering* của Google nói rằng tính sẵn sàng dựa trên thời gian phù hợp với một hệ thống đơn lẻ, trong khi tỷ lệ yêu cầu thành công phù hợp với các dịch vụ phân tán luôn chạy một phần. Nó cũng nói 100 phần trăm hầu như không bao giờ là mục tiêu đúng, vì chi phí của mỗi chữ số chín thêm tăng dốc.

Hãy dùng kỷ luật ITIL về phạm vi, giờ và trường hợp loại trừ đã thống nhất để định nghĩa mẫu số. Hãy dùng kỷ luật SRE về chỉ báo lấy người dùng làm trung tâm và ngân sách lỗi để định nghĩa tử số và quyết định làm gì với kết quả.

## Nguyên tắc chính

- **Định nghĩa "sẵn sàng" từ phía người dùng.** Một dịch vụ trả lời kiểm tra sức khỏe trong khi người dùng không đăng nhập được là đã ngừng với những người quan trọng.
- **Viết mẫu số ra.** Nêu ranh giới dịch vụ, giờ trong phạm vi, múi giờ và cửa sổ đo trước khi tính bất cứ gì.
- **Đếm riêng ngừng hoạt động có kế hoạch và ngoài kế hoạch.** Báo cáo cả hai, cùng nhau, và không bao giờ để cái này ẩn trong cái kia.
- **Ưu tiên các thước đo dựa trên yêu cầu và có trọng số theo người dùng cho dịch vụ phân tán.** Một thất bại một phần không phải là thời gian hoạt động đầy đủ cũng không phải ngừng hoạt động đầy đủ.
- **Quy đổi các chữ số chín ra phút.** Một mục tiêu chỉ được hiểu khi mọi người nói được nó cho phép bao nhiêu phút thất bại mỗi tháng.
- **Chọn số chữ số chín mà người dùng cần.** Vượt quá điểm đó, mỗi chữ số chín thêm tốn hơn những gì nó mang lại.
- **Mô tả dịch vụ, không bao giờ con người.** Tính sẵn sàng thuộc về một dịch vụ và các đội vận hành nó, và nó không bao giờ là điểm số của một cá nhân.

## Định nghĩa chỉ số

Mỗi hàng nêu đồng hồ và ranh giới của nó. Thời gian lịch được dùng trừ khi một hàng nói khác. Nơi một thước đo dùng một phân phối, hãy báo cáo trung vị và bách phân vị thứ 95, và nêu tên cửa sổ.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tính sẵn sàng dựa trên thời gian | Tỷ lệ thời gian trong phạm vi mà dịch vụ đạt định nghĩa bằng văn bản của "chạy" | (số phút trong phạm vi của cửa sổ trừ số phút ngừng hoạt động ngoài kế hoạch) / số phút trong phạm vi của cửa sổ. Đồng hồ bắt đầu ở lần dò thất bại đầu tiên sau đó được xác nhận là có tác động đến người dùng, hoặc ở thời điểm bắt đầu tác động được xác nhận ghi trong buổi rà soát sự cố; dừng khi dịch vụ lại đạt định nghĩa. Ngừng hoạt động có kế hoạch trong giờ dịch vụ đã thống nhất được cho thấy riêng, và thời gian ngoài giờ dịch vụ đã thống nhất bị loại khỏi mẫu số | phần trăm | Kết quả giám sát tổng hợp; bản ghi sự cố với dấu thời gian bắt đầu tác động và khôi phục | Quản lý tính sẵn sàng; quản lý mức dịch vụ | Một SLI dựa trên thời gian cho một hệ thống đơn lẻ (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi) | Hằng tháng |
| Tính sẵn sàng dựa trên yêu cầu | Tỷ lệ yêu cầu hợp lệ thành công | số yêu cầu hợp lệ thành công / tổng số yêu cầu hợp lệ trong cửa sổ. Yêu cầu hợp lệ loại trừ yêu cầu sai định dạng và lỗi máy khách do người gọi gây ra; thất bại do dịch vụ gây ra, kể cả hết thời gian chờ, được đếm là thất bại. Báo cáo theo dịch vụ và theo hành trình người dùng | phần trăm | Nhật ký và số đo của bộ cân bằng tải, cổng hoặc ứng dụng | Quản lý tính sẵn sàng; quản lý giám sát và sự kiện | SLI tỷ lệ thành công với một SLO và ngân sách lỗi (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi) | Xu hướng hằng ngày, báo cáo hằng tháng |
| Tính sẵn sàng có trọng số theo người dùng | Tính sẵn sàng có trọng số theo người dùng hoặc hành trình bị ảnh hưởng, để một lần ngừng vào giờ cao điểm tính nhiều hơn một lần ngừng qua đêm | 1 trừ (số phiên người dùng thất bại hoặc hành trình thất bại / tổng số phiên người dùng hoặc hành trình) trong cửa sổ. Một phiên được tính là thất bại nếu một bước trọng yếu xác định thất bại; thành công một phần được báo cáo như một tỷ lệ suy giảm riêng, không gộp vào | phần trăm | Giám sát người dùng thực; nhật ký phiên ứng dụng; sự kiện phân tích | Quản lý tính sẵn sàng; quản lý mức dịch vụ | SLI theo hành trình và các thước đo trải nghiệm trong chủ đề 6.2 (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm) | Hằng tháng |
| Ngừng hoạt động ngoài kế hoạch | Số phút dịch vụ không khả dụng mà không có thông báo trước được phê duyệt | Tổng thời lượng các lần ngừng trong cửa sổ, từ lúc bắt đầu tác động được xác nhận đến lúc khôi phục được xác nhận, cho các lần ngừng không được báo trước và phê duyệt qua hỗ trợ thay đổi trước khi chúng bắt đầu. Các lần ngừng chồng lên nhau trên cùng một dịch vụ được gộp, không cộng. Báo cáo dưới dạng tổng số phút, số lần ngừng, và trung vị và bách phân vị thứ 95 của thời lượng ngừng | phút | Bản ghi sự cố với dấu thời gian bắt đầu tác động và khôi phục | Quản lý sự cố; quản lý tính sẵn sàng | Thời gian khôi phục đọc như một phân phối (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố) | Hằng tháng |
| Tỷ lệ ngừng hoạt động có kế hoạch | Tỷ lệ tổng thời gian ngừng được báo trước và phê duyệt | số phút ngừng có kế hoạch / (tổng số phút ngừng có kế hoạch và ngoài kế hoạch) trong cửa sổ. Một lần ngừng chỉ được tính là có kế hoạch nếu nó được phê duyệt qua một bản ghi thay đổi trước khi bắt đầu và thời điểm bắt đầu, kết thúc của nó được thông báo cho người dùng; một phần chạy quá cửa sổ đã phê duyệt được phân loại lại là ngoài kế hoạch kể từ lúc cửa sổ kết thúc | phần trăm | Bản ghi thay đổi có cửa sổ đã phê duyệt; bản ghi sự cố; lịch sử trang trạng thái | Hỗ trợ thay đổi; quản lý tính sẵn sàng | Thực hành phát hành và bảo trì ưu tiên triển khai không ngừng hoạt động (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi) | Hằng tháng |
| Tần suất và khoảng cách ngừng hoạt động | Các lần ngừng bắt đầu thường xuyên đến đâu và dịch vụ chạy bao lâu giữa chúng | Số lần ngừng bắt đầu trong cửa sổ; và với mỗi cặp ngừng liên tiếp, số phút hoạt động giữa lúc khôi phục lần đầu và lúc bắt đầu lần thứ hai, tóm tắt dưới dạng trung vị và bách phân vị thứ 5. Không báo cáo dưới dạng một giá trị trung bình duy nhất khi có ít hơn mười khoảng | số đếm; phút | Bản ghi sự cố; lịch sử giám sát | Quản lý sự cố; quản lý vấn đề | Tín hiệu ổn định cạnh tỷ lệ thay đổi thất bại (xem chủ đề 4.4, Thay đổi thất bại và làm lại) | Hằng tháng |
| Tỷ lệ suy giảm | Thời gian dịch vụ chạy nhưng dưới chất lượng đã thống nhất | Số phút mà chỉ báo độ trễ, lỗi hoặc tính đúng vi phạm ngưỡng của nó, trừ các phút đã được đếm là ngừng hoạt động / số phút trong phạm vi. Ngưỡng được nêu theo từng dịch vụ, ví dụ trong SLO | phần trăm | Giám sát và phép đo SLI | Quản lý tính sẵn sàng; quản lý năng lực và hiệu năng | SLI độ trễ (xem chủ đề 5.4, Chỉ số năng lực và hiệu năng) | Hằng tháng |
| Độ phủ đo lường | Phép đo tính sẵn sàng thực sự quan sát bao nhiêu hành vi hướng người dùng của dịch vụ | Số hành trình người dùng trọng yếu có đầu dò hoạt động hoặc phép đo người dùng thực / số hành trình người dùng trọng yếu được liệt kê trong định nghĩa dịch vụ | phần trăm | Định nghĩa dịch vụ; cấu hình giám sát | Quản lý giám sát và sự kiện; quản lý tính sẵn sàng | Độ phủ quan sát và chất lượng cảnh báo (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo) | Hằng quý |

Hai ghi chú về dữ liệu. Một đầu dò kiểm tra mỗi năm phút không phân giải được một lần ngừng hai phút, nên hãy ghi khoảng dò cạnh con số, và dùng trường bắt đầu tác động trong bản ghi sự cố (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo). Mỗi khi định nghĩa của "chạy" đổi, hãy đánh dấu nó trên biểu đồ xu hướng.

## Khuyến nghị

### Định nghĩa phép đo

**1. Viết định nghĩa dịch vụ trước phần trăm.** Liệt kê ranh giới dịch vụ, các hành trình người dùng trọng yếu, giờ trong phạm vi, múi giờ và cửa sổ (một tháng lịch là thông thường). Nói phụ thuộc nào được tính: nếu một nhà cung cấp thanh toán hỏng và người dùng không thanh toán được, đó có phải là sự cố ngừng hoạt động của bạn không? Ghi câu trả lời vào sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số). Hầu hết tranh chấp về tính sẵn sàng là tranh chấp về trang này, và giải quyết chúng từ trước rẻ hơn nhiều so với giải quyết sau một sự cố ngừng hoạt động.

**2. Định nghĩa "chạy" là một kết quả của người dùng, không phải một trạng thái máy chủ.** Một kiểm tra sức khỏe trả về thành công trong khi đăng nhập hỏng đo sai thứ. Hãy chọn một số nhỏ hành trình trọng yếu, như "tìm kiếm và xem một mặt hàng", "đăng nhập" hoặc "nộp một yêu cầu bồi thường", và định nghĩa thành công cho mỗi cái theo cách người dùng nhận ra. Dò hành trình từ đầu đến cuối, và coi một phản hồi chậm vượt ngưỡng đã thống nhất là suy giảm, không phải chạy.

**3. Dùng thước đo dựa trên yêu cầu cho dịch vụ phân tán và thước đo dựa trên thời gian nơi dịch vụ thực sự bật hay tắt.** Một dịch vụ toàn cầu hiếm khi ngừng hoàn toàn, nên đếm số phút thất bại toàn phần bỏ sót hầu hết thất bại thật. Hãy báo cáo cả hai khi có thể, và nói cái nào là tiêu đề và vì sao.

**4. Thêm trọng số theo người dùng nơi tải không đều.** Một lần ngừng mười phút lúc 4 giờ sáng và một lần vào đầu ngày giao dịch có cùng thời lượng và chi phí rất khác nhau. Hãy gán trọng số theo phiên hoặc giao dịch trong phút thất bại, hoặc báo cáo số phút ngừng giờ cao điểm như một con số riêng.

**5. Đo từ bên ngoài miền thất bại.** Một đầu dò nằm trong cùng mạng hoặc vùng với dịch vụ hỏng cùng nó, hoặc tiếp tục báo thành công trong khi đường mà người dùng đi bị hỏng. Hãy chạy đầu dò tổng hợp từ ít nhất hai vị trí độc lập và kiểm tra chéo chúng với dữ liệu người dùng thực.

### Đối xử trung thực với ngừng hoạt động có kế hoạch và ngoài kế hoạch

**6. Báo cáo ngừng hoạt động có kế hoạch và ngoài kế hoạch song song.** Nhiều thỏa thuận loại trừ bảo trì theo lịch, điều này hợp lý. Người dùng vẫn trải nghiệm nó như thời gian ngừng, nên hãy cho thấy các phút bị loại trừ và tỷ lệ có kế hoạch cạnh tiêu đề (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

**7. Làm cho nhãn có kế hoạch khó giành được.** Hãy định nghĩa có kế hoạch là được phê duyệt qua một bản ghi thay đổi trước khi lần ngừng bắt đầu, với thời điểm bắt đầu và kết thúc được thông báo trước cho người dùng. Một lần ngừng được thông báo sau khi nó bắt đầu là ngoài kế hoạch. Một phần chạy quá cửa sổ đã phê duyệt là ngoài kế hoạch kể từ lúc cửa sổ kết thúc. Ba quy tắc này ngăn nhãn trở thành cách gắn nhãn lại các thất bại.

**8. Làm việc để thu nhỏ thời gian ngừng có kế hoạch.** Triển khai cuốn chiếu, cờ tính năng, di chuyển lược đồ không khóa và phát hành blue-green cho phép các đội thay đổi một dịch vụ mà không phải ngừng nó. Hãy theo dõi số phút ngừng có kế hoạch như một xu hướng và hỏi cần gì để đưa chúng về gần bằng không.

### Đọc các con số cho tốt

**9. Quy đổi các chữ số chín ra phút và cho thấy chúng.** Bảng dưới đây cho số học của một tháng 30 ngày (43.200 phút) và một năm 365 ngày (525.600 phút). Đặt số phút được phép lên bảng điều khiển cạnh mục tiêu, và cho thấy số phút đã dùng đến nay trong cửa sổ. Mọi người ra quyết định tốt hơn về "43 phút một tháng" so với "ba chữ số chín".

| Mục tiêu tính sẵn sàng | Thời gian ngừng được phép trong một tháng 30 ngày | Thời gian ngừng được phép trong một năm 365 ngày |
| --- | --- | --- |
| 99 phần trăm | 432 phút (7,2 giờ) | 5.256 phút (87,6 giờ) |
| 99,5 phần trăm | 216 phút (3,6 giờ) | 2.628 phút (43,8 giờ) |
| 99,9 phần trăm | 43,2 phút | 525,6 phút (8,76 giờ) |
| 99,95 phần trăm | 21,6 phút | 262,8 phút (4,38 giờ) |
| 99,99 phần trăm | 4,32 phút | 52,56 phút |
| 99,999 phần trăm | khoảng 26 giây | khoảng 5,26 phút |

Các giá trị giả định đồng hồ chạy suốt cửa sổ. Nếu bạn chỉ đo giờ dịch vụ đã thống nhất, số phút được phép co lại theo tỷ lệ, và bạn nên nói điều đó.

**10. Tôn trọng chi phí của mỗi chữ số chín thêm và giới hạn của các phụ thuộc.** Cuốn SRE lưu ý rằng chi phí độ tin cậy tăng dốc với mỗi chữ số chín thêm, và mục tiêu nên phản ánh điều người dùng cần và điều doanh nghiệp sẵn lòng trả. Một dịch vụ hiếm khi sẵn sàng hơn các phụ thuộc mà nó cần nối tiếp. Nếu ba thành phần thiết yếu mỗi cái đạt 99,9 phần trăm và một yêu cầu cần cả ba, tính sẵn sàng kỳ vọng tốt nhất của tổ hợp là khoảng 99,7 phần trăm, vì xác suất thất bại cộng lại khi các thành phần độc lập. Hãy làm phép nhân trước khi bạn hứa một con số.

**11. Nhìn vào khoảng cách và hình dạng, không chỉ tổng.** Các lần ngừng ngắn thường xuyên cần phản ứng khác với một lần ngừng dài hiếm hoi. Hãy liên kết các lần ngừng dài với phát hiện và khôi phục (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố) và với góc nhìn sự cố lớn (xem chủ đề 3.4, Chỉ số sự cố lớn).

**12. Khép vòng với ngân sách lỗi và hồ sơ vấn đề.** Một mục tiêu tính sẵn sàng hữu ích khi nó đổi điều đội làm. Khi ngân sách hằng tháng của thời gian ngừng được phép gần cạn, hãy làm chậm thay đổi rủi ro và chuyển công sức sang công việc độ tin cậy, như mô tả trong chính sách ngân sách lỗi (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi). Khi cùng một nguyên nhân tái diễn, hãy mở một hồ sơ vấn đề và theo dõi nó đến bản sửa (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tính sẵn sàng dựa trên thời gian | Dò một trang tầm thường vẫn chạy trong khi hành trình thật thất bại; kéo dài khoảng dò để các lần ngừng ngắn rơi giữa các lần kiểm tra; thu hẹp giờ trong phạm vi; đếm các lần ngừng là suy giảm | Tính sẵn sàng có trọng số theo người dùng và giám sát người dùng thực; khoảng dò nêu cạnh con số; lấy mẫu sự cố so với bản ghi giám sát |
| Tính sẵn sàng dựa trên yêu cầu | Đưa các yêu cầu dễ (kiểm tra sức khỏe, tài sản đệm) vào mẫu số để pha loãng thất bại; phân loại lỗi máy chủ là lỗi máy khách; loại các lần thử lại mà người dùng trải nghiệm là thất bại | Tỷ lệ thành công theo hành trình trọng yếu, không theo yêu cầu; rà soát danh sách loại trừ; so sánh với sự cố do người dùng báo cáo |
| Tính sẵn sàng có trọng số theo người dùng | Chọn trọng số để các thất bại giờ cao điểm ít quan trọng; định nghĩa một phiên "thành công" lỏng đến mức các bước hỏng vẫn qua | Công bố quy tắc trọng số và danh sách hành trình; so sánh với khối lượng phàn nàn và liên hệ hỗ trợ trong các lần ngừng |
| Ngừng hoạt động ngoài kế hoạch | Phân loại lại các lần ngừng là có kế hoạch sau sự việc; trì hoãn thời điểm bắt đầu tác động được xác nhận; chia một lần ngừng thành hai để trông ngắn hơn | Tỷ lệ ngừng hoạt động có kế hoạch, với quy tắc rằng một lần ngừng được thông báo sau khi bắt đầu là ngoài kế hoạch; so sánh thời điểm bắt đầu tác động với dữ liệu giám sát |
| Tỷ lệ ngừng hoạt động có kế hoạch | Đặt thay đổi vào các cửa sổ đã phê duyệt để phần chạy quá và thất bại được tính là có kế hoạch; thổi phồng tỷ lệ có kế hoạch bằng cách lên lịch bảo trì không cần thiết | Số phút chạy quá được phân loại lại là ngoài kế hoạch; tỷ lệ thay đổi thất bại và tỷ lệ thay đổi khẩn cấp (xem chủ đề 4.4, Thay đổi thất bại và làm lại) |
| Tần suất và khoảng cách ngừng hoạt động | Gộp các sự cố, hoặc chỉ mở sự cố mới sau một khoảng dài, để giữ số đếm thấp; ngăn chặn cảnh báo để các lần ngừng ngắn không được ghi | Lấy mẫu cảnh báo và sự cố so với các sự kiện giám sát thô; độ phủ giám sát và chất lượng cảnh báo (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo) |
| Tỷ lệ suy giảm | Đặt ngưỡng lỏng đến mức dịch vụ chậm không bao giờ vi phạm; tuyên bố thời gian suy giảm là chạy | Bách phân vị độ trễ và sự chậm chạp do người dùng báo cáo được rà soát cạnh con số (xem chủ đề 5.4, Chỉ số năng lực và hiệu năng) |
| Độ phủ đo lường | Chỉ liệt kê các hành trình dễ dò, nên độ phủ đọc là 100 phần trăm; tính một hành trình là đã được phủ bởi một đầu dò không bao giờ chạy | Danh sách hành trình thống nhất với chủ dịch vụ và người dùng; lấy mẫu lịch sử chạy đầu dò mỗi quý |

Một kết quả đọc lành mạnh cho thấy các con số dịch chuyển vì những lý do đội giải thích được, với ngừng hoạt động có kế hoạch và ngoài kế hoạch đều hiển thị và một con số có trọng số theo người dùng gần với tiêu đề. Hãy nghi ngờ một tháng hoàn hảo đi kèm phàn nàn. Một lần tụt trung thực thỉnh thoảng cho thấy hệ thống ghi nhận hoạt động.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Tính sẵn sàng dựa trên thời gian | Đơn giản, được hiểu rộng rãi, dễ so với hợp đồng | Coi thất bại một phần là tất cả hoặc không gì; bỏ qua khi nào và ai |
| Tính sẵn sàng dựa trên yêu cầu | Phản ánh thất bại một phần; mở rộng được cho dịch vụ phân tán | Phụ thuộc vào định nghĩa vững về yêu cầu hợp lệ; có thể bị pha loãng bởi lưu lượng dễ |
| Tính sẵn sàng có trọng số theo người dùng | Gần với điều người dùng đã trải nghiệm; cho thấy chi phí của thất bại giờ cao điểm | Cần dữ liệu phiên hoặc hành trình; tốn công giải thích hơn |
| Loại trừ ngừng hoạt động có kế hoạch | Khớp nhiều thỏa thuận; thưởng cho việc báo trước | Có thể giấu tác động thật; mời gọi gắn nhãn lại |
| Mục tiêu vừa phải kèm ngân sách lỗi | Cân bằng độ tin cậy và tốc độ phân phối | Cần kỷ luật để hành động khi ngân sách cạn |

Câu trả lời dạng văn xuôi là chọn thước đo đơn giản nhất phù hợp với dịch vụ, thêm trọng số theo người dùng nơi tải không đều, và tường minh về mọi trường hợp loại trừ. Một thước đo kém thanh lịch hơn một chút mà mọi người hiểu làm được nhiều điều tốt hơn một thước đo tinh vi không ai tin.

## Câu hỏi để thảo luận với đội nhóm

**1. "Sẵn sàng" nghĩa là gì với dịch vụ quan trọng nhất của chúng ta, và một người dùng có đồng ý không?**
Yêu cầu mỗi người mô tả, trong một câu, người dùng phải làm được gì để dịch vụ được tính là chạy. So sánh các câu trả lời với định nghĩa bằng văn bản và với đầu dò nuôi bảng điều khiển. Người điều phối nên lắng nghe các khoảng trống như đăng nhập, tìm kiếm hoặc thanh toán chạy trong đầu dò nhưng hỏng trong thực tế. Kết thúc bằng việc thống nhất các hành trình người dùng mà định nghĩa phải nêu tên.

**2. Những lần ngừng nào trong quý vừa rồi mà phép tính của chúng ta sẽ loại trừ, và điều đó có công bằng không?**
Liệt kê các lần ngừng và đánh dấu mỗi cái là có kế hoạch, ngoài kế hoạch hay bị loại trừ. Hỏi ai quyết định từng trường hợp và khi nào. Người điều phối nên ghi lại các trường hợp mà người dùng sẽ không đồng ý với nhãn, và dùng chúng để siết quy tắc.

**3. Mục tiêu của chúng ta cho phép bao nhiêu phút ngừng, và chúng ta đã dùng bao nhiêu trong cửa sổ này?**
Quy đổi mục tiêu ra phút cho tháng và năm trên bảng trắng. So sánh với số phút đã dùng đến nay. Hỏi đội sẽ làm khác đi điều gì nếu chỉ còn 20 phần trăm ngân sách. Điều này làm mục tiêu trừu tượng trở nên cụ thể và nối con số với chính sách ngân sách lỗi.

**4. Phép đo của chúng ta có thể bỏ sót một thất bại mà người dùng sẽ cảm nhận ở đâu?**
Đi qua vị trí đầu dò, khoảng dò, các hành trình được phủ và các phụ thuộc. Hỏi thất bại nào sẽ qua mọi đầu dò mà vẫn làm hỏng dịch vụ với người dùng. Thống nhất thêm một đầu dò mới hoặc một phép đo người dùng thực.

**5. Chúng ta có đang lên kế hoạch cho những lần ngừng mà chúng ta có thể tránh không?**
Xem thời gian ngừng có kế hoạch qua sáu tháng và hỏi điều gì buộc mỗi lần ngừng. Một số không tránh được, như một yêu cầu của nhà cung cấp. Số khác đến từ cách phát hành hoặc di chuyển có thể đổi. Hỏi cần gì để gỡ nguồn lớn nhất, và ai sở hữu công việc đó.

**6. Nếu con số tiêu đề trông hoàn hảo, điều gì sẽ khiến chúng ta nghi ngờ nó?**
Nêu tên các tín hiệu sẽ mâu thuẫn với bảng điều khiển: khối lượng phàn nàn, liên hệ hỗ trợ, hoặc ký ức của đội trực ca. Kiểm tra xem hiện có cái nào không. Thống nhất một phép so sánh để đặt lên bảng điều khiển.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối ảnh hưởng đến tính sẵn sàng mỗi lần họ thay đổi một dịch vụ. Họ có thể thiết kế cho triển khai không ngừng hoạt động, dùng cờ tính năng để hạn chế bán kính ảnh hưởng, và coi ngân sách lỗi là đầu vào cho các quyết định phát hành, đọc tính sẵn sàng cạnh các thước đo triển khai (xem chủ đề 2.8, Chỉ số DORA).

### Đội dịch vụ và vận hành

Các đội vận hành sở hữu đầu dò, bản ghi sự cố và các luân phiên tạo ra dữ liệu. Họ nên giữ định nghĩa và danh sách loại trừ hiện hành, ghi thời điểm bắt đầu tác động một cách trung thực, và rà soát giám sát với các sự cố thật. Tính sẵn sàng thuộc về dịch vụ và luân phiên của nó, không bao giờ một kỹ sư trực ca (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca).

### Lãnh đạo và quản trị

Lãnh đạo đặt các động cơ quyết định dữ liệu tính sẵn sàng có thẳng thắn không. Một buổi rà soát hỏi "vì sao các bạn mất một chữ số chín?" dạy các đội giấu sự cố ngừng hoạt động trong các trường hợp loại trừ. Hãy hỏi đội đã học được gì và đầu tư nào sẽ giảm sự cố ngừng hoạt động, và đừng đòi nhiều chữ số chín hơn mức người dùng nhận thấy (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng, về cam kết nhà cung cấp).

### Khách hàng và người dùng

Người dùng đánh giá tính sẵn sàng bằng việc họ có làm được điều họ đến để làm không. Họ chịu một cửa sổ bảo trì có báo hiệu tốt hơn nhiều so với một bất ngờ. Hãy cho họ một trang trạng thái với thời điểm bắt đầu và kết thúc trung thực, và đọc phản hồi của họ cạnh các con số (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một cửa hàng, một dịch vụ thanh toán và một dịch vụ theo dõi đơn hàng. Các con số trong ví dụ này chỉ mang tính minh họa.

Đội thanh toán báo cáo tính sẵn sàng dựa trên thời gian là 99,95 phần trăm cho tháng, cho phép 21,6 phút ngừng hoạt động ngoài kế hoạch, và bảng điều khiển hiển thị 99,96 phần trăm. Trưởng hỗ trợ khách hàng bất an, vì liên hệ hỗ trợ về thanh toán thất bại tăng trong cùng tháng. Bà yêu cầu đội rà soát phép đo.

Đội tìm ra ba vấn đề. Đầu dò kiểm tra một trang "thanh toán có thể truy cập" mỗi năm phút, không phải hành trình thanh toán đầy đủ. Dữ liệu dựa trên yêu cầu cho thấy trong hai buổi tối, một lần hết thời gian chờ của nhà cung cấp thanh toán làm khoảng 4 phần trăm lần thử thanh toán thất bại trong khoảng 50 phút mỗi lần, và đầu dò không bao giờ nhận ra vì trang tự nó tải được. Và một lần di chuyển cơ sở dữ liệu chạy quá cửa sổ đã phê duyệt 18 phút đã được ghi hoàn toàn là bảo trì có kế hoạch.

Đội thực hiện bốn thay đổi. Họ thêm một đầu dò tổng hợp cho hành trình thanh toán đầy đủ từ hai vị trí ở khoảng dò một phút. Họ thêm các con số dựa trên yêu cầu và có trọng số theo người dùng, dùng các phiên đã đến bước thanh toán. Họ phân loại lại số phút chạy quá là ngoài kế hoạch. Và họ thêm tỷ lệ ngừng hoạt động có kế hoạch và độ phủ đo lường vào báo cáo.

Trên cơ sở đã sửa, tháng cho thấy tính sẵn sàng dựa trên thời gian là 99,93 phần trăm, dựa trên yêu cầu là 99,90 phần trăm, và có trọng số theo người dùng là 99,84 phần trăm, vì các thất bại rơi vào giờ cao điểm buổi tối. Cả ba đều trượt mục tiêu 99,95 phần trăm, điều đáng khó chịu. Đội và trưởng hỗ trợ đồng ý rằng con số trước đó quá hào phóng. Họ viết định nghĩa đã sửa vào sổ đăng ký chỉ số và đưa chính sách ngân sách lỗi vào hiệu lực: trong tháng kế tiếp, các thay đổi rủi ro cho thanh toán chờ đến khi ngân sách hồi phục, và đội mở một hồ sơ vấn đề cho các lần hết thời gian chờ của nhà cung cấp thanh toán (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

Rủi ro lợi dụng họ bắt được là gắn nhãn lại. Một quản lý đề xuất gọi phần chạy quá là "bảo trì kéo dài" để bảo vệ mục tiêu. Tỷ lệ ngừng hoạt động có kế hoạch, với quy tắc rằng phần chạy quá trở thành ngoài kế hoạch, làm việc phân loại lại hiển thị, và đội giữ con số trung thực.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy định nghĩa tính sẵn sàng từ phía người dùng và rà soát định nghĩa với các bên liên quan khi dịch vụ thay đổi. Điều cần lưu ý là một số lượng lớn chữ số chín trên một thành phần nói ít về hành trình mà người dùng đi.

### AI

Các thành phần AI có thể thất bại một cách mềm, bằng cách chậm, sai, hoặc chỉ không khả dụng với một số đầu vào, điều mà thời gian hoạt động thuần túy bỏ sót. Hãy thêm một cái nhìn đã điều chỉnh theo chất lượng, như tỷ lệ yêu cầu có câu trả lời đúng, kịp thời, và ghép nó với các vấn đề do người dùng báo cáo. Điều cần lưu ý là tính một câu trả lời AI suy giảm là chạy làm con số đẹp hơn thực tế.

### Tự động hóa

Hãy thu thập kết quả yêu cầu từ lưu lượng thật và đầu dò tổng hợp tự động, và đo các đầu dò về độ phủ. Điều cần lưu ý là một đầu dò kiểm tra trang sức khỏe có thể nói là chạy trong khi người dùng không đăng nhập được.

### Phân tích

Hãy báo cáo tính sẵn sàng dựa trên thời gian và dựa trên yêu cầu cùng tỷ lệ suy giảm, và nêu cửa sổ đo. Quyết định được cung cấp thông tin là công việc độ tin cậy sẽ giúp người dùng ở đâu. Điều cần lưu ý là các lần ngừng hiếm làm phần trăm hằng năm không ổn định, nên hãy cho thấy các sự kiện, không chỉ phần trăm.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một đội nhỏ thường có một dịch vụ và ít giám sát. Hãy bắt đầu với một đầu dò trên hành trình quan trọng nhất và một định nghĩa một đoạn của "chạy". Chọn một mục tiêu vừa phải, quy đổi nó ra phút, và tránh hứa những chữ số chín mà đội chưa đo được.

**Doanh nghiệp nhỏ.** Dịch vụ thường là công cụ được lưu trữ cộng vài hệ thống tùy biến, và tính sẵn sàng phụ thuộc vào nhà cung cấp. Hãy ghi lại các lần ngừng của nhà cung cấp khi chúng ảnh hưởng đến người dùng của bạn, so sánh với điều nhà cung cấp báo cáo, và giữ tập này ở hai hoặc ba con số.

**Doanh nghiệp lớn.** Nhiều dịch vụ, nhiều đội và nhiều nhà cung cấp nhân lên các định nghĩa đang dùng. Hãy công bố một định nghĩa chuẩn về tính sẵn sàng kèm một danh sách ngắn các biến thể được phép, giữ sổ đăng ký chỉ số hiện hành, và bảo đảm quy tắc có kế hoạch và ngoài kế hoạch giống nhau giữa các đội trước khi so sánh chúng. Hãy ưu tiên báo cáo cấp dịch vụ hơn bảng xếp hạng đội, vì các dịch vụ khác nhau về tải và mức trọng yếu.

**Chính phủ và khu vực công.** Dịch vụ công thường có giờ dịch vụ theo luật, cam kết đã công bố và hợp đồng với tín dụng chính thức. Hãy báo cáo theo chúng như đã viết, cho thấy cái nhìn có trọng số theo người dùng cạnh chúng, và cởi mở về các trường hợp loại trừ (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Các chi phí chính là thời gian viết định nghĩa dịch vụ và sổ đăng ký, giám sát dò các hành trình trọng yếu từ bên ngoài miền thất bại, và công sức ghép dữ liệu sự cố, thay đổi và giám sát để tách được thời gian ngừng có kế hoạch và ngoài kế hoạch. Giám sát người dùng thực thêm chi phí công cụ và lưu trữ. Hầu hết tổ chức đã sở hữu một phần dữ liệu, nên khoản đầu tư đầu tiên thường là vào các định nghĩa.

Lợi tức đến từ quyết định tốt hơn và ít tranh chấp hơn. Các đội đo từ phía người dùng tìm ra các thất bại mà kiểm tra sức khỏe bỏ sót, thỏa thuận dễ quản lý hơn với một định nghĩa, và chi phí của một chữ số chín thêm có thể đặt cạnh giá trị của nó với người dùng. Hãy mô tả lợi ích như một mẫu hình, như ít bất ngờ hơn ở các buổi rà soát thỏa thuận, và đo đường cơ sở của riêng bạn, như khoảng cách giữa con số tiêu đề và con số có trọng số theo người dùng. Đừng mượn số liệu từ các tổ chức khác.

## Phản mẫu và cạm bẫy

- **Trích dẫn các chữ số chín mà không có số phút.** Một mục tiêu không ai dịch được ra thời gian ngừng được phép không dẫn dắt được quyết định. Hãy cho thấy số phút được phép và đã dùng cạnh mọi mục tiêu.
- **Đo máy chủ thay vì hành trình.** Một kiểm tra sức khỏe xanh có thể nằm cạnh một đăng nhập hỏng. Hãy dò các hành trình trọng yếu từ đầu đến cuối và so sánh với dữ liệu người dùng thực.
- **Để nhãn có kế hoạch nuốt các thất bại.** Một danh mục có kế hoạch dễ tuyên bố làm trống con số ngoài kế hoạch. Hãy yêu cầu phê duyệt trước lần ngừng, thông báo nó, và phân loại lại phần chạy quá.
- **Lấy trung bình qua các dịch vụ và giờ.** Một con số pha trộn giấu dịch vụ trọng yếu và giờ bận rộn. Hãy báo cáo theo dịch vụ, và thêm cái nhìn có trọng số theo người dùng.
- **Hứa nhiều chữ số chín hơn mức các phụ thuộc cho phép.** Các thành phần nối tiếp không thể vượt quá tính sẵn sàng kết hợp của chúng. Hãy nhân trước khi hứa, và hỏi nhà cung cấp về số liệu đã đo của họ.
- **Coi 100 phần trăm là mục đích.** Chi phí tăng dốc và thay đổi chậm lại. Hãy chọn mục tiêu từ nhu cầu người dùng và dùng ngân sách lỗi.
- **Xếp hạng đội hay người theo số chữ số chín.** Các dịch vụ khác nhau về tải và mức trọng yếu, và bảng xếp hạng dạy các đội giấu sự cố ngừng hoạt động. Hãy cho mỗi dịch vụ thấy xu hướng riêng của nó và so sánh nó với mục tiêu của chính nó.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | "Chạy" nghĩa là bất cứ gì công cụ giám sát cho thấy; thời điểm ngừng được ước lượng sau đó | Viết ra cho một số dịch vụ; thời gian của đầu dò và sự cố không khớp | Một định nghĩa bằng văn bản cho mỗi dịch vụ với hành trình, giờ, trường hợp loại trừ và quy tắc đồng hồ | Định nghĩa được rà soát theo nhịp; thay đổi được ghi nhật ký và đánh dấu trên biểu đồ | Định nghĩa được căn chỉnh với nhà cung cấp và khách hàng và sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Chất lượng đo lường | Báo cáo thủ công hoặc một kiểm tra sức khỏe duy nhất | Đầu dò cho một số dịch vụ; dữ liệu yêu cầu trong một số nhật ký | Đầu dò từ ngoài vào trên các hành trình trọng yếu cộng số liệu dựa trên yêu cầu từ một nguồn chuẩn | Số liệu có trọng số theo người dùng từ dữ liệu người dùng thực; độ phủ được theo dõi và lấy mẫu | Phép đo được chia sẻ giữa các đội và nhà cung cấp và đối chiếu tự động |
| Xử lý có kế hoạch và ngoài kế hoạch | Không phân biệt; bảo trì được đếm tùy tiện | Nhãn có kế hoạch được một số đội dùng, quy tắc khác nhau | Một quy tắc: được phê duyệt trước lần ngừng và thông báo, phần chạy quá được phân loại lại | Tỷ lệ có kế hoạch được theo dõi xu hướng với mục tiêu giảm nó | Thay đổi không ngừng hoạt động là mặc định, và ngừng có kế hoạch hiếm và được thương lượng |
| Dùng trong quyết định | Báo cáo sau một lời phàn nàn | Vận hành rà soát hằng tháng | Mục tiêu được cho thấy bằng phút | Chính sách ngân sách lỗi đổi công việc, kèm tài trợ | Tính sẵn sàng, chi phí và trải nghiệm được đánh đổi cùng nhau |

## Danh sách kiểm tra

- [ ] Mỗi dịch vụ có một định nghĩa bằng văn bản về "sẵn sàng" nêu tên các hành trình người dùng trọng yếu.
- [ ] Cửa sổ đo, giờ trong phạm vi và múi giờ được nêu cho mọi con số.
- [ ] Danh sách loại trừ được viết ra, rà soát và cho thấy cạnh con số tiêu đề.
- [ ] Ngừng hoạt động có kế hoạch cần một thay đổi đã phê duyệt và thông báo trước; phần chạy quá được tính là ngoài kế hoạch.
- [ ] Đầu dò chạy từ bên ngoài miền thất bại, ở một khoảng nêu rõ, trên các hành trình trọng yếu.
- [ ] Một con số dựa trên yêu cầu hoặc có trọng số theo người dùng đứng cạnh con số dựa trên thời gian.
- [ ] Mỗi mục tiêu được cho thấy dưới dạng số phút được phép và số phút đã dùng trong cửa sổ hiện tại.
- [ ] Số lần ngừng và bách phân vị thời lượng được báo cáo, không chỉ tổng.
- [ ] Tính sẵn sàng của phụ thuộc được nhân qua trước khi một mục tiêu được hứa.
- [ ] Thay đổi định nghĩa được ghi nhật ký và đánh dấu trên biểu đồ xu hướng.
- [ ] Tính sẵn sàng được báo cáo theo dịch vụ và không bao giờ theo người.

## Lời nhắc AI

**Soạn định nghĩa tính sẵn sàng của dịch vụ.**

```text
I am writing an availability definition for [service name], a [type of service]
used by [user groups]. Its critical user journeys are [list journeys]. Agreed
service hours are [hours and time zone]. Known dependencies are [list]. Our
monitoring consists of [probes, logs, real user data].

Draft a one-page definition covering: what counts as up for each journey, the
measurement window, the in-scope hours, the exclusions, the rule for planned
versus unplanned downtime, the clock start and stop for an outage, and the
metrics to report. Do not invent targets or benchmark values. List your
assumptions and the questions I should answer to finish the definition.
```

**Quy đổi một mục tiêu ra thời gian ngừng được phép và kiểm thử nó.**

```text
Our target for [service name] is [availability percentage] over [window, for
example a 30-day month]. In-scope time is [hours]. Our essential dependencies
and their stated or measured availability are [list, or "unknown"].

Calculate the downtime this target allows in minutes for the window and for a
year, using the in-scope hours. Then estimate the best combined availability if
the dependencies are needed in series and fail independently, and explain the
formula you used. Flag where my inputs are too uncertain to conclude anything.
Do not supply availability figures for any dependency that I did not give you.
List your assumptions.
```

**Rà soát một tháng ngừng hoạt động về vấn đề phân loại.**

```text
Here are the outage records for [service name] for [month]: [paste records with
impact start, restore time, planned or unplanned label, approval time, and
notes, with personal data removed].

For each outage, check whether the planned or unplanned label follows this
rule: [paste your rule]. Identify records where the impact start looks late,
where one outage appears to be split or merged, and where an overrun should have
been reclassified. Summarize patterns by service and cause, never by person.
Tell me what you could not judge from the data. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề liên quan và rào chắn đi kèm cho một thước đo tính sẵn sàng bạn sắp báo cáo.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một bản sửa của chủ đề này giữ mọi chỉ số được ghép với một vectơ lợi dụng và rào chắn.

## Điểm chính cần nhớ

- Tính sẵn sàng chỉ có ý nghĩa khi "chạy", ranh giới dịch vụ, giờ và các trường hợp loại trừ đã được viết ra từ phía người dùng.
- Các thước đo dựa trên yêu cầu và có trọng số theo người dùng mô tả dịch vụ phân tán và tải không đều tốt hơn số phút thất bại toàn phần.
- Hãy báo cáo ngừng hoạt động có kế hoạch và ngoài kế hoạch cùng nhau, và làm cho nhãn có kế hoạch khó giành được.
- Quy đổi mọi mục tiêu ra phút, và nhân các phụ thuộc nối tiếp trước khi hứa một số lượng chữ số chín.
- Mỗi chữ số chín thêm tốn hơn chữ số trước, nên hãy chọn mục tiêu từ điều người dùng cần và dùng ngân sách lỗi để hành động theo nó.
- Mô tả dịch vụ và luân phiên, không bao giờ con người, và kiểm thử mọi con số tiêu đề với trải nghiệm của người dùng.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
