# Chỉ số sự cố bảo mật và lỗ hổng

**An ninh là một phần của việc giao và vận hành dịch vụ liên tục, nên hãy đo mọi người bị phơi bày bao lâu, bạn kiềm chế điều sai nhanh đến đâu, và đồng nghiệp sẵn lòng giơ tay đến mức nào, và đừng bao giờ biến một sai lầm thành lý do để đổ lỗi.**

## Tổng quan và động lực

Mọi dịch vụ đều mang điểm yếu, và một số sẽ bị dùng để chống lại nó. Một [lỗ hổng](https://en.wikipedia.org/wiki/Vulnerability_(computing)) là một điểm yếu trong phần mềm, phần cứng, cấu hình hay quy trình có thể bị khai thác để gây hại cho tính bí mật, toàn vẹn hay sẵn sàng của một hệ thống. Một sự cố bảo mật là một sự kiện trong đó tác hại đó xảy ra hoặc bị đe dọa một cách đáng tin. Các chỉ số trong lĩnh vực này cố trả lời hai câu hỏi. Chúng ta bị phơi bày đến đâu, và chúng ta tìm, sửa và phục hồi từ vấn đề nhanh thế nào?

Truyền thống linh hoạt và DevOps coi an ninh là một thuộc tính của phân phối liên tục, không phải một cổng ở cuối nó. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) mở rộng ý tưởng DevOps bằng cách xây các kiểm tra an ninh vào đường ống và chia sẻ trách nhiệm giữa phát triển, an ninh và vận hành. ITIL, qua thực hành quản lý an toàn thông tin, đóng góp chính sách, tư duy dựa trên rủi ro, và mối liên hệ với quản lý sự cố, thay đổi và tài sản. Hai truyền thống gặp nhau trong công việc hằng ngày: cập nhật phụ thuộc đến như thay đổi thông thường, phát hiện lỗ hổng trở thành hạng mục tồn đọng có người sở hữu, và sự cố được xử lý bằng cùng các buổi rà soát không đổ lỗi như bất kỳ cái nào khác (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi).

Các chỉ số an ninh chịu những sự méo mó đặc biệt.

- **Đếm phát hiện thưởng cho việc không nhìn.** Một đội quét ít hơn tìm thấy ít hơn. Một số đếm lỗ hổng thô có thể giảm vì một trình quét mất quyền truy cập, không phải vì có gì cải thiện.
- **Điểm mức nghiêm trọng là đầu vào, không phải sự thật.** [Hệ thống chấm điểm lỗ hổng chung](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) cho một điểm nghiêm trọng của một lỗ hổng một cách trừu tượng, và các sổ đăng ký như [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) cho chúng định danh. Một lỗ hổng có quan trọng với bạn hay không phụ thuộc vào việc nó có tiếp cận được trong môi trường của bạn không, một khai thác có đang được dùng không, và tài sản bị ảnh hưởng có giá trị đến đâu. Một điểm nghiêm trọng thô dùng một mình đưa công sức đến sai chỗ.
- **Đổ lỗi ngăn báo cáo.** Nếu mọi người bị phạt vì bấm một liên kết hay vì báo một sự cố họ gây ra, báo cáo dừng, và sự phơi bày lớn lên không ai thấy. An toàn tâm lý là một kiểm soát an ninh.
- **Thước đo thời gian giấu cái đuôi.** Thời gian vá trung vị có thể trông khỏe trong khi một nhúm hệ thống trọng yếu nằm phơi bày nhiều tháng.

Chủ đề này đưa ra các thước đo chính, kèm định nghĩa, vectơ lợi dụng và rào chắn của chúng. Nó xây trên bản ghi tài sản và cấu hình từ phần trước, vì bạn không thể vá hay quét thứ bạn không tìm thấy (xem chủ đề 7.1, Chỉ số quản lý tài sản CNTT, và chủ đề 7.4, Chỉ số chất lượng cấu hình và CMDB). Một lưu ý: đây là hướng dẫn đo lường, không phải sổ tay an ninh. Hãy chọn kiểm soát cùng các chuyên gia an ninh có trình độ, và theo các tiêu chuẩn và nghĩa vụ pháp lý áp dụng cho bạn, như ISO/IEC 27001 và hướng dẫn của các cơ quan quốc gia.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng sắc bén với an ninh. Khi một chỉ số trở thành mục tiêu, mọi người phân loại lại phát hiện, loại tài sản khỏi lần quét, và đóng phiếu mà không sửa nguyên nhân (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Đo thời gian phơi bày cũng như số đếm.** Một điểm yếu còn mở bao lâu quan trọng hơn có bao nhiêu cái được tìm thấy.
- **Ưu tiên theo bối cảnh.** Kết hợp mức nghiêm trọng, khả năng khai thác, khả năng tiếp cận và giá trị tài sản.
- **Kiểm tra độ phủ trước.** Một báo cáo sạch từ một lần quét bỏ sót nửa hệ thống là sự yên tâm giả.
- **Xây an ninh vào đường ống.** Làm lựa chọn an toàn thành mặc định dễ, và đưa phản hồi nhanh.
- **Cộng tác giữa các ngành.** An ninh, phát triển và vận hành cùng sở hữu kết quả.
- **Làm cho báo cáo an toàn.** Xử lý sai lầm không đổ lỗi giữ cho tín hiệu chảy.
- **Tổng hợp dữ liệu hành vi con người.** Báo cáo mẫu hình nhóm và không bao giờ nêu tên hay xếp hạng cá nhân.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cửa sổ phơi bày | Thời gian một lỗ hổng đã biết còn mở trên các tài sản trong phạm vi, theo dải ưu tiên | trung vị và bách phân vị thứ 85 của số ngày từ ngày biết nó áp dụng cho tài sản đến ngày một bản sửa hoặc biện pháp giảm thiểu được chấp nhận được xác minh | ngày | Trình quét lỗ hổng, hệ thống phiếu, bản ghi thay đổi | Quản lý an toàn thông tin; quản lý vấn đề | Thời gian sửa một lỗi trong tồn đọng | Hằng tuần |
| Tuân thủ vá | Tỷ lệ tài sản trong phạm vi đáp ứng cửa sổ chính sách vá cho lớp của chúng | số tài sản được vá trong cửa sổ chính sách / số tài sản trong phạm vi cần một bản vá trong kỳ | phần trăm | Công cụ quản lý thiết bị đầu cuối và máy chủ, sổ đăng ký tài sản | Quản lý an toàn thông tin; quản lý phát hành và triển khai | Phụ thuộc được giữ hiện hành trong đường ống | Hằng tuần |
| Phát hiện nghiêm trọng quá hạn | Số đếm và tuổi của các phát hiện mức nghiêm trọng quá hạn chính sách | số phát hiện nghiêm trọng quá hạn; tuổi của cái cũ nhất | số đếm; ngày | Hệ thống quản lý lỗ hổng | Quản lý an toàn thông tin; quản lý rủi ro | Lỗi bảo mật vượt giới hạn đã thống nhất | Hằng tuần |
| Độ phủ quét | Tỷ lệ tài sản trong phạm vi được đánh giá trong khoảng yêu cầu | số tài sản được quét thành công trong khoảng vừa qua / số tài sản trong phạm vi | phần trăm | Báo cáo trình quét ghép với sổ đăng ký tài sản | Quản lý an toàn thông tin; quản lý tài sản CNTT | Kiểm tra đường ống chạy ở mỗi bản dựng | Hằng tuần |
| Thời gian đến kiềm chế | Thời gian từ lúc phát hiện một sự cố bảo mật đã xác nhận đến kiềm chế | trung vị và bách phân vị thứ 85 của số giờ từ phát hiện đến kiềm chế | giờ | Bản ghi sự cố | Quản lý sự cố; quản lý an toàn thông tin | Thời gian khôi phục dịch vụ sau một thất bại | Mỗi sự cố, xem lại hằng tháng |
| Tuổi của ngoại lệ rủi ro | Tuổi của các ngoại lệ chấp nhận rủi ro, và tỷ lệ quá ngày rà soát | số ngày kể từ phê duyệt; số ngoại lệ quá ngày rà soát / số ngoại lệ đang mở | ngày; phần trăm | Sổ đăng ký ngoại lệ | Quản lý rủi ro; quản lý an toàn thông tin | Rà soát nợ kỹ thuật | Hằng tháng |
| Tỷ lệ báo cáo bảo mật | Tỷ lệ sự kiện đáng ngờ do nhân viên báo so với sự kiện bảo mật đã xác nhận, làm chỉ báo của văn hóa báo cáo | số báo cáo từ nhân viên trong kỳ / số sự kiện đáng ngờ được xác nhận trong kỳ, kèm xu hướng cấp nhóm | tỷ số | Hộp thư bảo mật, bản ghi sự cố | Quản lý an toàn thông tin; quản lý sự cố | Nêu trở ngại công khai | Hằng tháng |

Hãy nêu các dải ưu tiên và cửa sổ chính sách trong sổ đăng ký. Cửa sổ phơi bày bắt đầu khi lỗ hổng được biết là áp dụng cho tài sản, là thời điểm muộn hơn giữa công bố và lúc tài sản được biết chạy thành phần bị ảnh hưởng, và nó dừng ở việc khắc phục được xác minh hoặc một biện pháp giảm thiểu có tài liệu, có thời hạn. Thời gian đến kiềm chế bắt đầu ở lúc phát hiện, không phải ở cảnh báo đầu tiên mà không ai đọc. Chỉ loại các phát hiện thử và dương tính giả sau khi đã rà soát. Tỷ lệ báo cáo bảo mật mô tả nhóm và xu hướng, không bao giờ cá nhân.

## Khuyến nghị

### Biết hệ thống và sự phơi bày của bạn

**1. Bắt đầu từ bản ghi tài sản và phụ thuộc.** Quét, vá và quyền sở hữu đều phụ thuộc vào việc biết cái gì tồn tại. Hãy liên kết mọi phát hiện với một tài sản, một người sở hữu và một dịch vụ, và đo độ phủ quét so với sổ đăng ký. Nơi độ phủ thấp, hãy sửa điều đó trước khi đọc các phát hiện. Một tài sản chưa được quét là một ẩn số, tệ hơn một điểm yếu đã biết.

**2. Giảm [bề mặt tấn công](https://en.wikipedia.org/wiki/Attack_surface) trước.** Gỡ những gì không cần: dịch vụ không dùng, cổng mở, tài khoản cũ, môi trường bị quên. Mọi thứ bạn cho nghỉ hưu là thứ bạn không phải vá. Hãy theo dõi số dịch vụ hướng ra internet và tài khoản không hoạt động như các chỉ báo đơn giản, và rà soát chúng cùng người sở hữu.

**3. Gồm chuỗi cung ứng phần mềm của bạn.** Dịch vụ hiện đại phụ thuộc vào nhiều thành phần. [Chuỗi cung ứng phần mềm](https://en.wikipedia.org/wiki/Software_supply_chain) gồm thư viện, công cụ xây dựng, ảnh container, và các nhà cung cấp đứng sau chúng. Hãy dùng các bảng kê vật liệu phần mềm mô tả trước đó để tìm nơi một thành phần dễ bị tổn thương được dùng (xem chủ đề 7.2, Chỉ số tài sản phần mềm và giấy phép), và gồm các phát hiện phụ thuộc trong cùng các thước đo như phát hiện hạ tầng.

### Ưu tiên và sửa

**4. Xếp hạng theo bối cảnh, không chỉ theo điểm nghiêm trọng.** Kết hợp mức nghiêm trọng CVSS với việc một khai thác có được biết là đang dùng không, thành phần dễ bị tổn thương có tiếp cận được không, và tầm quan trọng của tài sản. Các danh sách công khai về lỗ hổng được biết là đang bị khai thác giúp với yếu tố đầu. Viết ra quy tắc xếp hạng, rà soát chúng, và ghi lý do khi một hạng mục mức nghiêm trọng cao bị hạ ưu tiên.

**5. Đặt cửa sổ chính sách theo dải và báo cáo so với chúng.** Với mỗi dải ưu tiên, thống nhất một thời gian mục tiêu để khắc phục hoặc giảm thiểu. Báo cáo tỷ lệ trong cửa sổ, trung vị và bách phân vị thứ 85 của sự phơi bày, và hạng mục đang mở cũ nhất. Cửa sổ là mục tiêu cho cuộc trò chuyện, và các hạng mục cũ nhất xứng đáng sự chú ý vì chúng cho thấy quy trình thất bại ở đâu (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**6. Coi vá là thay đổi thông thường, thường xuyên.** Quy trình vá an toàn nhất là quy trình chạy thường xuyên và nhàm chán. Cập nhật nhỏ, thường xuyên dễ kiểm thử và đảo ngược hơn cập nhật lớn, hiếm, và các đường ống tự động có thể áp dụng chúng liên tục. Hãy dùng cách tiếp cận hỗ trợ thay đổi cho phê duyệt dựa trên rủi ro, và giữ một lộ trình khẩn cấp cho các bản sửa gấp (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

**7. Làm ngoại lệ hiển thị và ngắn hạn.** Đôi khi không thể sửa. Hãy ghi một ngoại lệ kèm lý do, một kiểm soát bù, một người sở hữu và một ngày rà soát, và báo cáo tuổi của ngoại lệ. Ngoại lệ không có ngày rà soát trở thành vĩnh viễn, và ngoại lệ vĩnh viễn trở thành sổ đăng ký rủi ro thật.

### Phản ứng và học

**8. Luyện tập ứng phó sự cố.** [Quản lý sự cố an ninh máy tính](https://en.wikipedia.org/wiki/Computer_security_incident_management) bao quát chuẩn bị, phát hiện, kiềm chế, diệt trừ, khôi phục và rút bài học. Hãy tập dượt bằng các bài diễn tập, ghi thời gian đến kiềm chế từ lúc phát hiện, và rà soát mỗi sự cố đáng kể không đổ lỗi. Cấu trúc xử lý sự cố an ninh tương tự xử lý sự cố lớn (xem chủ đề 3.4, Chỉ số sự cố lớn).

**9. Đo kiềm chế, không chỉ phát hiện.** Công cụ phát hiện tạo ra cảnh báo, và giá trị nằm ở điều xảy ra tiếp theo. Theo dõi các sự cố đã xác nhận mất bao lâu để kiềm chế và phục hồi, và tỷ lệ nào do giám sát của chính bạn tìm thấy so với người ngoài báo. Tỷ lệ sự cố được phát hiện nội bộ tăng là dấu hiệu khả năng nhìn thấy cải thiện.

**10. Học từ suýt sự cố.** Một email lừa đảo được báo và chặn, hoặc một lỗ hổng do đồng nghiệp tìm thấy trước kẻ tấn công, là bài học miễn phí. Hãy ghi lại và rà soát những cái này như bạn làm với một sự cố, và cảm ơn người đã báo. Tỷ lệ báo cáo bảo mật là chỉ báo sức khỏe của văn hóa đó, và nó nên tăng cùng lòng tin.

### Xây văn hóa và đường ống

**11. Đặt kiểm tra nơi lập trình viên làm việc.** Hãy chạy phân tích phụ thuộc và tĩnh trong bản dựng, đưa phản hồi trong pull request, và chỉ làm hỏng bản dựng vì những vấn đề mà đội thống nhất là chặn. Phản hồi nhanh, liên quan được sửa. Một dòng lũ phát hiện giá trị thấp bị phớt lờ. Theo dõi thời gian sửa cho phát hiện đường ống, và tinh chỉnh quy tắc cùng các đội (xem chủ đề 2.7, Chỉ số pull request và rà soát mã).

**12. Đào tạo và kiểm thử mà không làm xấu hổ.** Các bài diễn tập nâng nhận thức, như lừa đảo mô phỏng, có thể xây kỹ năng, và chúng cũng có thể làm hại lòng tin khi kết quả được dùng để nêu tên hay kỷ luật cá nhân. Chỉ báo cáo kết quả tổng hợp, tập trung vào bao nhiêu người báo thông điệp đáng ngờ, và giải thích mục đích. Nếu một bài diễn tập khiến nhân viên cảm thấy bị lừa, hãy đổi nó.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Cửa sổ phơi bày | Đóng phát hiện mà không xác minh; đổi ngày bắt đầu; phân loại lại mức nghiêm trọng | Bước xác minh bởi người ngoài đội sửa; quy tắc ngày bắt đầu trong sổ đăng ký; nhật ký thay đổi mức nghiêm trọng |
| Tuân thủ vá | Loại tài sản khó vá khỏi phạm vi; tính một bản vá là đã áp dụng khi hệ thống chưa khởi động lại | Thay đổi phạm vi được ghi nhật ký; xác minh phiên bản đã cài từ tài sản, không từ phiếu |
| Phát hiện nghiêm trọng quá hạn | Chia các phát hiện hoặc gộp chúng; hạ mức nghiêm trọng | Đếm theo lỗ hổng và tài sản riêng biệt; rà soát mọi thay đổi mức nghiêm trọng |
| Độ phủ quét | Quét một tập hẹp hơn; tính một lần quét không xác thực được | Độ phủ so với sổ đăng ký tài sản; chất lượng quét (đã xác thực, đầy đủ) |
| Thời gian đến kiềm chế | Bắt đầu đồng hồ muộn; tuyên bố kiềm chế sớm | Đồng hồ bắt đầu ở tín hiệu phát hiện đầu tiên; xác minh kiềm chế bằng bằng chứng |
| Tuổi của ngoại lệ rủi ro | Gia hạn ngoại lệ tự động; chia ngoại lệ để giảm tuổi | Rà soát việc gia hạn ngoại lệ kèm lý do; giới hạn gia hạn mà không có bằng chứng mới |
| Tỷ lệ báo cáo bảo mật | Khuyến khích báo cáo giá trị thấp; làm nản báo cáo để cải thiện các con số khác | Chất lượng báo cáo; đọc bình luận; khảo sát liệu mọi người có cảm thấy an toàn khi báo |

Một kết quả đọc lành mạnh là độ phủ quét cao, một cái đuôi phơi bày ngắn và đang co, các ngoại lệ trung thực kèm ngày rà soát, sự cố được kiềm chế nhanh và được phát hiện nội bộ thường xuyên hơn, và nhân viên nói với bạn về các sự kiện đáng ngờ mà không sợ.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Ưu tiên chỉ theo điểm nghiêm trọng | Đơn giản, nhất quán | Bỏ qua bối cảnh; đưa công sức đến sai chỗ |
| Ưu tiên theo bối cảnh | Tập trung vào rủi ro thật | Cần dữ liệu và phán đoán |
| Cửa sổ vá cố định | Kỳ vọng rõ ràng | Có thể buộc những thay đổi vội vàng rủi ro |
| Cửa sổ theo rủi ro | Khớp tình huống | Khó kiểm toán hơn |
| Vá tự động thường xuyên | Thay đổi nhỏ, ít phơi bày hơn | Cần kiểm thử và hoàn tác tốt |
| Chu kỳ vá lớn hiếm | Quen thuộc | Phơi bày lâu hơn, rủi ro lớn hơn mỗi thay đổi |
| Mô phỏng lừa đảo | Xây nhận thức | Có thể xói mòn lòng tin nếu dùng sai |
| Tập trung vào văn hóa báo cáo | Làm lộ vấn đề sớm | Khó đo trực tiếp |

Câu trả lời dạng văn xuôi là xếp hạng theo bối cảnh, vá thường xuyên theo bước nhỏ với hoàn tác tốt, ghi ngoại lệ kèm thời hạn, và đầu tư vào văn hóa báo cáo như một kiểm soát.

## Câu hỏi để thảo luận với đội nhóm

**1. Các lần quét của chúng ta thực sự thấy bao nhiêu phần hệ thống?**
So sánh các tài sản được quét với sổ đăng ký tài sản. Hỏi cái gì còn thiếu và vì sao. Người điều phối nên tìm các danh mục bị bỏ sót có hệ thống, như container, thiết bị từ xa hay hệ thống của bên thứ ba. Thống nhất một khoảng trống để khép quý này.

**2. Phát hiện nghiêm trọng đang mở cũ nhất của chúng ta là gì, và vì sao nó vẫn mở?**
Hãy nhìn vào cái đuôi, không phải giá trị trung bình. Lần theo vài cái cũ nhất: ai sở hữu chúng, cái gì chặn chúng, và kiểm soát bù là gì. Người điều phối nên hỏi ngoại lệ có được ghi lại không. Thống nhất ai sẽ gỡ chặn cái cũ nhất.

**3. Lần cuối một bản sửa bảo mật gây ra sự cố ngừng hoạt động là khi nào, và sau đó điều gì đã đổi?**
Nhớ lại một ví dụ. Nguyên nhân là một bản sửa vội hay thiếu kiểm thử? Thảo luận cách làm việc vá thường lệ và an toàn. Liên kết câu trả lời với thực hành thay đổi và phát hành.

**4. Nếu hôm nay một đồng nghiệp báo một email đáng ngờ, điều gì sẽ xảy ra với họ?**
Mô tả con đường thật từ báo cáo đến phản hồi, gồm cách người báo được cảm ơn. Hỏi có ai từng bị xấu hổ vì báo hoặc vì bấm không. Cuộc trò chuyện là về lòng tin. Thống nhất một thay đổi nhỏ làm việc báo dễ hơn hoặc an toàn hơn.

**5. Con số bảo mật nào của chúng ta có thể tăng trong khi chúng ta kém an toàn hơn?**
Liệt kê các thước đo và nghĩ cách mỗi cái có thể được cải thiện bằng cách thu hẹp phạm vi hoặc gắn nhãn lại. Gán một rào chắn cho mỗi cái. Bài tập này xây mục sổ đăng ký cho buổi rà soát kế tiếp.

**6. Chúng ta kiềm chế một sự cố đã xác nhận nhanh đến đâu, và làm sao chúng ta biết?**
Rà soát hai sự cố gần nhất và lần theo từ phát hiện đến kiềm chế. Ghi lại các độ trễ. Hỏi chúng ta đã chạy bài diễn tập nào. Thống nhất chạy một bài trước buổi rà soát kế tiếp.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối thực hiện hầu hết bản sửa và đưa vào nhiều điểm yếu. Họ nên giữ phụ thuộc hiện hành như một phần của dòng chảy bình thường, coi phát hiện bảo mật là hạng mục tồn đọng có người sở hữu và ngày, và dùng kiểm tra đường ống cho phản hồi nhanh, liên quan. Họ cần ưu tiên rõ ràng và thời gian để hành động theo chúng, và họ nên tự do nêu mối lo ngại.

### Đội dịch vụ và vận hành

Các đội vận hành chạy trình quét, áp dụng bản vá, và phản ứng với sự cố. Họ nên giữ liên kết tài sản hiện hành, báo cáo độ phủ trung thực, và xử lý ngoại lệ kèm thời hạn. Họ cũng cần thời gian được bảo vệ để tập dượt ứng phó sự cố, và một văn hóa không đổ lỗi khi sai lầm xảy ra.

### Lãnh đạo và quản trị

Lãnh đạo đặt khẩu vị rủi ro và quyết định an ninh được tài trợ như một hoạt động liên tục hay một dự án. Họ nên yêu cầu cửa sổ phơi bày và các hạng mục đang mở cũ nhất thay vì tổng, bảo vệ văn hóa báo cáo, và chấp nhận rằng các con số sẽ tăng khi khả năng nhìn thấy cải thiện. Quản trị nên yêu cầu bằng chứng cho ngoại lệ và cho việc học từ sự cố.

### Khách hàng và người dùng

Người dùng vừa là người thụ hưởng vừa là một tuyến phòng thủ. Họ muốn dịch vụ bảo vệ dữ liệu của họ, và họ muốn hướng dẫn rõ ràng, công bằng. Họ nên được báo kịp thời khi một sự cố ảnh hưởng đến họ, được đối xử tôn trọng khi báo vấn đề, và được cung cấp các biện pháp an ninh không làm công việc của họ khó hơn mức cần thiết (xem chủ đề 6.4, Trải nghiệm người dùng và nhân viên).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một quỹ tín dụng khu vực vận hành ngân hàng trực tuyến, một ứng dụng di động và các hệ thống chi nhánh với một đội kỹ thuật nhỏ và một dịch vụ vận hành an ninh thuê ngoài. Các con số dưới đây chỉ mang tính minh họa.

Hội đồng yêu cầu một bảng điều khiển an ninh. Bản nháp đầu của nhà phân tích an ninh cho thấy 4.200 lỗ hổng đang mở và đang giảm, và 96 phần trăm tuân thủ vá. Trưởng kỹ thuật hỏi về độ phủ quét. Ghép đầu ra trình quét với sổ đăng ký tài sản, nhà phân tích thấy 31 phần trăm máy chủ và gần như toàn bộ container không được quét trong 30 ngày qua, vì trình quét mất thông tin xác thực sau một lần di chuyển. Trong số các tài sản được quét, cửa sổ phơi bày trung vị cho lỗ hổng nghiêm trọng là 9 ngày, và bách phân vị thứ 85 là 41 ngày. Phát hiện nghiêm trọng cũ nhất đã 212 ngày tuổi, trên một hệ thống cũ với một ngoại lệ đã hết hạn bốn tháng trước. Mức tuân thủ vá 96 phần trăm chỉ được tính trên những tài sản mà công cụ vá báo cáo.

Đội thực hiện bốn thay đổi cùng kỹ thuật và vận hành. Độ phủ quét trở thành dòng đầu của bảng điều khiển, với mục tiêu đạt độ phủ đầy đủ của sổ đăng ký, và việc xác thực quét được sửa và giám sát. Việc ưu tiên thêm trạng thái khai thác và tầm quan trọng tài sản vào điểm nghiêm trọng, để 4.200 phát hiện rút xuống một danh sách ngắn khoảng 60 cái quan trọng ngay bây giờ. Cập nhật phụ thuộc chuyển vào đường ống như các thay đổi nhỏ thường xuyên với kiểm thử tự động. Ngoại lệ có một người sở hữu, một kiểm soát bù và một ngày rà soát, và cái đã hết hạn được ủy ban rủi ro rà soát. Nhà phân tích an ninh cũng đổi cách báo cáo kết quả lừa đảo mô phỏng: chỉ tỷ lệ báo cáo cấp nhóm được cho thấy, và nhà phân tích đích thân cảm ơn những đồng nghiệp báo.

Hai tháng sau, độ phủ quét là 97 phần trăm, cửa sổ phơi bày ở bách phân vị thứ 85 cho hạng mục nghiêm trọng là 14 ngày, và phát hiện nghiêm trọng cũ nhất là một ngoại lệ đã giảm thiểu còn 60 ngày đến ngày rà soát. Một email yêu cầu thanh toán đáng ngờ được một nhân viên chi nhánh báo trong vài phút, và sự cố được kiềm chế trong chưa đầy hai giờ. Hội đồng yêu cầu số lỗ hổng đang mở giảm một nửa vào cuối năm. Trưởng kỹ thuật gợi ý báo cáo cửa sổ phơi bày và các phát hiện nghiêm trọng quá hạn thay vào đó, giải thích rằng một số đếm có thể giảm bằng cách quét ít hơn. Quyết định được ghi lại, và hội đồng đồng ý rà soát các thước đo mới ở cuộc họp kế tiếp.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy coi an ninh là một phần của phân phối liên tục, với các bản sửa chảy qua cùng đường ống và rà soát như thay đổi khác. Điều cần lưu ý là mục tiêu về số đếm lỗ hổng khuyến khích phân loại lại.

### AI

AI thêm rủi ro mới, như tiêm lệnh và rò rỉ dữ liệu, và công cụ AI có thể giúp phân loại phát hiện. Hãy theo dõi các sự cố liên quan đến hệ thống AI và tỷ lệ phát hiện do AI phân loại mà một người đã xác nhận. Điều cần lưu ý là một AI bác bỏ một phát hiện thật cho sự đảm bảo giả.

### Tự động hóa

Hãy tự động hóa quét và vá nơi an toàn, và đo độ phủ quét và các lần vá thất bại. Điều cần lưu ý là vá tự động có thể làm hỏng dịch vụ, nên hãy dùng phát hành theo giai đoạn và hoàn tác.

### Phân tích

Hãy báo cáo cửa sổ phơi bày dưới dạng phân phối theo mức nghiêm trọng kèm số đếm. Quyết định được cung cấp thông tin là cắt giảm phơi bày ở đâu trước. Điều cần lưu ý là điểm lỗ hổng là đầu vào, không phải kết quả, nên hãy kết hợp chúng với khả năng khai thác và tầm quan trọng của tài sản.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Thường không có đội an ninh chuyên trách, nên hãy xây những điều cơ bản vào đường ống: cập nhật phụ thuộc, quét bí mật, xác thực đa yếu tố, và đặc quyền tối thiểu. Theo dõi cửa sổ phơi bày cho một danh sách ngắn các hệ thống trọng yếu và có một kế hoạch sự cố đơn giản. Chống lại việc mua một bộ công cụ lớn trước khi bạn biết hệ thống của mình.

**Doanh nghiệp nhỏ.** Dịch vụ thuê ngoài và công cụ đám mây mang hầu hết rủi ro. Hãy giữ một bản kiểm kê, bật xác thực đa yếu tố ở mọi nơi, giữ hệ thống cập nhật tự động, và biết gọi ai trong một sự cố. Đo mức tuân thủ vá và thời gian khôi phục bản sao lưu. Tránh làm xấu hổ nhân viên báo sai lầm.

**Doanh nghiệp lớn.** Quy mô cần dữ liệu nhất quán qua nhiều đội và công cụ. Hãy định nghĩa dải ưu tiên và cửa sổ tập trung, để các đội sở hữu phát hiện của họ, báo cáo phơi bày theo dịch vụ kinh doanh, và chạy các bài diễn tập đều đặn. Phối hợp với đội an ninh của nhà cung cấp và kiểm thử các bàn giao.

**Chính phủ và khu vực công.** Các lĩnh vực này thường đối mặt với chỉ thị bắt buộc có thời hạn cho các lỗ hổng cụ thể, nghĩa vụ báo cáo sự cố chính thức, và yêu cầu kiểm toán. Hãy coi chúng là đầu vào thiết kế: theo dõi mức tuân thủ thời hạn chỉ thị, giữ bằng chứng, và báo cáo sự cố theo yêu cầu trong khi bảo vệ quyền riêng tư của cá nhân (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là công cụ quét và giám sát, có thể đã sở hữu; thời gian để duy trì liên kết tài sản; thời gian kỹ thuật để sửa phát hiện và cập nhật phụ thuộc; chuẩn bị và diễn tập ứng phó sự cố; và đào tạo. Kiểm tra đường ống tốn thời gian thiết lập và một ít thời gian xây dựng. Giám sát thuê ngoài có phí dịch vụ.

Lợi tức là khả năng và tác động của sự cố thấp hơn, phơi bày ngắn hơn, và ít thay đổi khẩn cấp vội vàng hơn. Những lợi ích này có thật và khó lượng hóa, vì sự cố không xảy ra không để lại bản ghi. Tránh trích dẫn chi phí vi phạm trung bình ngành hay tần suất sự cố trừ khi bạn truy được nguồn và mức liên quan của nó. Hãy xây hồ sơ từ dữ liệu của chính bạn: xu hướng cửa sổ phơi bày, số thay đổi khẩn cấp do vá muộn, thời gian dành cho công việc vá thủ công mà tự động hóa đã gỡ, và chi phí của các sự cố trong quá khứ gồm thời gian nhân viên và tác động khách hàng. Mô tả việc giảm rủi ro theo các kịch bản cụ thể, như chủ đề trước về hồ sơ kinh doanh gợi ý (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Báo cáo số lỗ hổng.** Số đếm giảm khi lần quét bỏ sót. Hãy báo cáo cửa sổ phơi bày, hạng mục quá hạn và độ phủ.
- **Ưu tiên chỉ theo điểm nghiêm trọng.** Nó bỏ qua khả năng tiếp cận và khai thác. Hãy thêm bối cảnh.
- **Coi lần quét là sự thật.** Hãy kiểm tra độ phủ và chất lượng quét so với sổ đăng ký tài sản.
- **Ngoại lệ vĩnh viễn.** Chúng trở thành rủi ro ẩn. Hãy giao cho mỗi ngoại lệ một người sở hữu và ngày rà soát.
- **Làm xấu hổ mọi người vì sai lầm.** Báo cáo dừng. Hãy dùng rà soát không đổ lỗi và kết quả tổng hợp.
- **An ninh như một cổng ở cuối.** Nó làm chậm phân phối và mời gọi cách lách. Hãy xây kiểm tra vào đường ống.
- **Chu kỳ vá một lần lớn.** Chúng rủi ro và chậm. Hãy vá thường xuyên bằng thay đổi nhỏ.
- **Phớt lờ nhà cung cấp.** Điểm yếu của họ là của bạn. Hãy theo dõi nghĩa vụ và sự cố an ninh của nhà cung cấp.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Khả năng nhìn thấy | Thỉnh thoảng quét một số hệ thống | Quét đều đặn các hệ thống chính | Độ phủ quét được theo dõi so với sổ đăng ký tài sản; phát hiện liên kết với người sở hữu | Độ phủ, cửa sổ phơi bày và ngoại lệ được quản lý và theo dõi xu hướng | Cái nhìn chung qua các đội và nhà cung cấp, gồm cả phụ thuộc |
| Ưu tiên và sửa | Sửa theo yêu cầu to nhất | Danh sách dựa trên mức nghiêm trọng | Xếp hạng theo bối cảnh; cửa sổ chính sách theo dải; vá nhỏ thường xuyên | Cửa sổ và cái đuôi được rà soát; kiểm tra đường ống được tinh chỉnh cùng các đội | Khắc phục tự động, theo rủi ro với giám sát của con người |
| Phản ứng và văn hóa | Phản ứng tùy tiện; đổ lỗi | Kế hoạch cơ bản, hiếm khi kiểm thử | Kế hoạch được tập dượt; rà soát không đổ lỗi; báo cáo được coi trọng | Thời gian kiềm chế và tỷ lệ phát hiện nội bộ được quản lý; văn hóa báo cáo được đo | Diễn tập chung với nhà cung cấp và khách hàng; việc học được chia sẻ rộng |

## Danh sách kiểm tra

- [ ] Độ phủ quét được đo so với sổ đăng ký tài sản.
- [ ] Phát hiện liên kết với một tài sản, một người sở hữu và một dịch vụ.
- [ ] Dải ưu tiên kết hợp mức nghiêm trọng, khai thác, khả năng tiếp cận và tầm quan trọng tài sản.
- [ ] Cửa sổ chính sách theo dải được thống nhất, và cửa sổ phơi bày cùng hạng mục đang mở cũ nhất được báo cáo.
- [ ] Kiểm tra phụ thuộc và đường ống chạy ở mỗi bản dựng, với các điều chặn đã thống nhất.
- [ ] Vá chạy như thay đổi thường xuyên, nhỏ, đã kiểm thử kèm một lộ trình khẩn cấp.
- [ ] Ngoại lệ có một người sở hữu, một kiểm soát bù và một ngày rà soát.
- [ ] Ứng phó sự cố được tập dượt, và thời gian đến kiềm chế được đo từ lúc phát hiện.
- [ ] Dữ liệu hành vi con người chỉ được báo cáo tổng hợp, và việc báo cáo được cảm ơn.
- [ ] Nghĩa vụ và sự cố an ninh của nhà cung cấp được theo dõi.

## Lời nhắc AI

**Rà soát một quy tắc ưu tiên lỗ hổng.**

```text
Our current rule for prioritizing vulnerabilities is: [describe]. Our data
fields include: [list, for example severity score, exploit status, asset
importance, internet exposure]. Review the rule for blind spots and ways it
could be gamed, and propose a context-based ranking with clear bands and policy
windows. Do not state specific numbers as industry standards. List your
assumptions and what a security specialist should confirm.
```

**Kiểm tra độ phủ quét.**

```text
Here is a summary of our asset register by class and the assets seen by our
scanner in the last [interval]: [paste counts or sanitized lists]. Identify
classes with low coverage, likely reasons for gaps, and the quickest checks to
confirm each reason. Suggest how to report coverage so that a failed or
partial scan does not look like success. List your assumptions.
```

**Lập kế hoạch một bài diễn tập trên bàn.**

```text
Design a 90-minute tabletop exercise for [type of organization] on this
scenario: [describe, for example a compromised supplier credential]. Include
roles, a timeline of injects, decisions to prompt, what to record (including
time to detect and contain), and questions for a blameless debrief. Do not
include real names or systems. List your assumptions and what to adapt to our
context.
```

**Viết một thông điệp không đổ lỗi cho một sai lầm được báo.**

```text
A colleague reported that they [describe, for example clicked a link in a
phishing email]. Draft a short, kind reply from the security team that thanks
them, explains what we will do, and asks for details we need. Then draft an
aggregate note for the weekly update that shares the lesson without naming
anyone. List your assumptions and any tone choices I should review.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số bảo mật hoặc lỗ hổng.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số bảo mật mang vectơ lợi dụng, rào chắn và quy tắc quyền riêng tư của nó.

## Điểm chính cần nhớ

- Đo thời gian phơi bày, các hạng mục đang mở cũ nhất và độ phủ quét, không phải số đếm thô của phát hiện.
- Ưu tiên theo bối cảnh: mức nghiêm trọng, khai thác, khả năng tiếp cận và tầm quan trọng tài sản.
- Vá thường xuyên bằng thay đổi nhỏ, đã kiểm thử, và giao cho mỗi ngoại lệ một người sở hữu và ngày rà soát.
- Kiềm chế sự cố nhanh, học không đổ lỗi, và theo dõi phát hiện nội bộ.
- Coi văn hóa báo cáo là một kiểm soát: cảm ơn những người báo, và không bao giờ xếp hạng cá nhân.
- Xây kiểm tra an ninh vào đường ống để các lựa chọn an toàn là những lựa chọn dễ.

## Tài liệu tham khảo và đọc thêm

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
