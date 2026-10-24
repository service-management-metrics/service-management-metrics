# Chỉ số quản trị và rủi ro AI

**Việc dùng AI cần cùng kỷ luật như bất kỳ thay đổi nào với một dịch vụ đang chạy: biết nó ở đâu, ai sở hữu, nó rủi ro đến đâu, nó được kiểm thử và thay đổi thế nào, và chuyện gì xảy ra khi nó sai, với sự giám sát mà con người thực sự có thể thực hiện.**

## Tổng quan và động lực

AI đi vào một tổ chức qua nhiều cánh cửa. Một đội áp dụng một trợ lý lập trình. Một nhà cung cấp thêm một tính năng tạo sinh vào một sản phẩm đã đang dùng. Một nhân viên dán một tài liệu vào một công cụ công cộng. Một phòng ban xây một mô hình để chấm điểm các yêu cầu. Mỗi cái là một việc dùng AI với lợi ích và rủi ro riêng, và ít cái hiển thị ở một nơi. Quản trị là tập hợp các cấu trúc, chính sách và thực hành làm cho những việc dùng đó được biết đến, có trách nhiệm giải trình và đủ an toàn. Các chỉ số rủi ro cho bạn biết quản trị có hoạt động không.

ITIL có các khối xây dựng: quản trị hệ thống giá trị dịch vụ, quản lý rủi ro, hỗ trợ thay đổi, quản lý an toàn thông tin, quản lý nhà cung cấp và cải tiến liên tục. Cách làm việc linh hoạt và DevOps cung cấp thói quen thay đổi nhỏ, có kiểm soát, có thể đảo ngược, và kiểm tra tự động trong đường ống. Quản trị AI không cần một vũ trụ riêng. Nó cần những thực hành này được áp dụng cho những thứ hành xử khác với phần mềm thông thường.

AI khác ở điểm nào?

- **Hành vi mang tính thống kê và có thể đổi mà không đổi mã.** Một mô hình có thể hành xử khác sau một bản cập nhật của nhà cung cấp, một thay đổi trong đầu vào, hoặc một thay đổi trong lời nhắc. Dữ liệu nó thấy trong sản xuất có thể trôi khỏi dữ liệu nó đã được kiểm thử, một hiện tượng gọi trong học máy là trôi dạt. Một hệ thống có thể xuống cấp âm thầm.
- **Đầu ra không hoàn toàn dự đoán được.** Kiểm thử không thể bao quát mọi đầu vào, nên đánh giá bằng lấy mẫu và kiểm thử có mục tiêu, không phải bằng chứng minh. Hệ thống có thể thất bại theo những cách mà người xây không lường trước.
- **Tác hại có thể phân tán và không đồng đều.** [Thiên kiến thuật toán](https://en.wikipedia.org/wiki/Algorithmic_bias) là sai số có hệ thống dẫn đến kết quả không công bằng cho một số nhóm. Nó có thể phát sinh từ dữ liệu, thiết kế hoặc cách dùng, và có thể không hiện ra trong các con số độ chính xác tổng thể.
- **Xuất hiện các bề mặt tấn công mới.** [Tiêm lệnh](https://en.wikipedia.org/wiki/Prompt_injection) là một cuộc tấn công trong đó các chỉ dẫn ẩn trong dữ liệu đầu vào thao túng một mô hình ngôn ngữ làm điều không dự định. Mô hình có thể bị dụ tiết lộ dữ liệu hoặc thực hiện hành động mà chủ của chúng không có ý định.
- **Sự phụ thuộc vào nhà cung cấp sâu.** Nhiều khả năng AI đến từ các nhà cung cấp bên ngoài, với khả năng nhìn thấy hạn chế vào cách chúng được xây dựng hay thay đổi. Các thước đo nhà cung cấp quan trọng hơn (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).
- **Quy tắc đang xuất hiện và khác nhau theo nơi chốn.** Luật, tiêu chuẩn và hướng dẫn về AI đang phát triển nhanh. [Đạo luật Trí tuệ nhân tạo](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) của Liên minh châu Âu theo cách tiếp cận dựa trên rủi ro với các nghĩa vụ áp dụng theo giai đoạn, và các khu vực pháp lý khác đi những con đường khác. Các tiêu chuẩn như ISO/IEC 42001 về hệ thống quản lý AI và Khung Quản lý Rủi ro AI của NIST đưa ra các cấu trúc. Các phát biểu về quy tắc cụ thể trong chủ đề này được ghi ngày tính đến tháng 10 năm 2026 và nên được kiểm tra lại, và tư vấn pháp lý nên hướng dẫn nghĩa vụ của bạn. Lĩnh vực rộng hơn được mô tả đa dạng là [AI có trách nhiệm](https://en.wikipedia.org/wiki/Responsible_AI) hay AI đáng tin cậy, và câu hỏi luật pháp nên đối xử với AI thế nào là chủ đề của [quy định về trí tuệ nhân tạo](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

Quản trị có thể thất bại theo hai cách đối lập. Nó có thể nặng đến mức các đội tránh nó, và việc dùng AI đi ngầm thành [CNTT bóng](https://en.wikipedia.org/wiki/Shadow_IT). Hoặc nó có thể là một bài tập trên giấy, với một chính sách và một sổ đăng ký không phản ánh thực hành. Các mục đích linh hoạt gợi ý con đường ở giữa: sự tham gia liên tục của các bên liên quan trong việc đặt quy tắc, phê duyệt nhỏ và nhanh cho các việc dùng rủi ro thấp, soi xét sâu hơn nơi có thể gây hại, và cải tiến liên tục các kiểm soát khi kinh nghiệm tăng. Những con người có động lực với ranh giới rõ ràng, được tin tưởng dùng phán đoán bên trong chúng, sẽ báo cáo vấn đề. Những người sợ bị phạt sẽ không.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng cho các thước đo quản trị: khi "tỷ lệ phần trăm các việc dùng AI đã đăng ký" là mục tiêu, các sổ đăng ký đầy những mục không ai đọc, và các việc dùng thực tế nằm ngoài tầm mắt (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Chủ đề này xây trên các chủ đề về rủi ro, tuân thủ và an ninh trong Phần 8, và trên các chủ đề trước trong phần này.

## Nguyên tắc chính

- **Biết AI được dùng ở đâu.** Một sổ đăng ký các việc dùng, gồm cả những cái nhúng trong sản phẩm và những cái nhân viên tự áp dụng, là nền tảng.
- **Khớp mức soi xét với rủi ro.** Nhẹ cho các việc dùng rủi ro thấp, sâu hơn cho các việc có hệ quả.
- **Coi thay đổi mô hình và lời nhắc là thay đổi.** Chúng cần kiểm thử, phê duyệt tương xứng với rủi ro, và khả năng hoàn tác.
- **Đánh giá trước và trong khi dùng.** Kiểm thử trên các trường hợp thực tế, và tiếp tục kiểm thử trong sản xuất.
- **Giữ sự giám sát có ý nghĩa của con người.** Một người phải có thể hiểu, đặt câu hỏi và ghi đè, và có thời gian và thẩm quyền để làm vậy.
- **Học từ sự cố mà không đổ lỗi.** Thất bại của AI là mới, và báo cáo là cách tổ chức học.
- **Làm phê duyệt nhanh cho các trường hợp an toàn.** Quản trị chậm đẩy việc sử dụng ra khỏi tầm mắt.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ sổ đăng ký việc dùng AI | Tỷ lệ việc dùng AI được tìm thấy bằng phương tiện độc lập mà có trong sổ đăng ký kèm người sở hữu và lớp rủi ro | số việc dùng trong sổ đăng ký có người sở hữu và lớp rủi ro / số việc dùng được tìm thấy bằng phát hiện độc lập (mua sắm, chi phí, danh tính, mạng và báo cáo của nhân viên) | phần trăm | Sổ đăng ký, dữ liệu mua sắm và chi phí, nhật ký danh tính, khảo sát | Quản trị; quản lý tài sản CNTT; quản lý rủi ro | Công việc hiển thị và quyền sở hữu rõ ràng | Hằng quý |
| Độ hiện hành của đánh giá rủi ro | Tỷ lệ việc dùng rủi ro trung bình và cao có đánh giá rủi ro trong chu kỳ yêu cầu | số việc dùng được đánh giá trong chu kỳ / số việc dùng rủi ro trung bình và cao | phần trăm | Đánh giá rủi ro | Quản lý rủi ro; quản lý an toàn thông tin | Suy ngẫm đều đặn về rủi ro | Hằng quý |
| Độ phủ kiểm soát thay đổi | Tỷ lệ thay đổi với mô hình, lời nhắc, công cụ và nguồn dữ liệu trong sản xuất đã qua kiểm soát thay đổi với các kiểm thử yêu cầu | số thay đổi có bản ghi thay đổi, kiểm thử và phê duyệt tương xứng với rủi ro / số thay đổi được phát hiện | phần trăm | Bản ghi thay đổi so với lịch sử phiên bản và ghi chú phát hành của nhà cung cấp | Hỗ trợ thay đổi; quản lý phát hành và triển khai | Thay đổi nhỏ, có kiểm soát, có thể đảo ngược | Hằng tháng |
| Độ hiện hành của đánh giá chất lượng | Tỷ lệ việc dùng trong sản xuất có đánh giá hiện hành (độ chính xác, an toàn và công bằng nơi liên quan) và kết quả trong ngưỡng chấp nhận | số việc dùng có đánh giá trong chu kỳ và kết quả chấp nhận được / số việc dùng sản xuất trong phạm vi | phần trăm | Bản ghi đánh giá | Đảm bảo chất lượng; quản lý rủi ro | Định nghĩa hoàn thành cho hành vi | Hằng quý |
| Tỷ lệ bằng chứng giám sát của con người | Tỷ lệ đầu ra hoặc quyết định có hệ quả được lấy mẫu có rà soát thực chất của con người được ghi lại | số hạng mục được lấy mẫu có rà soát được ghi tài liệu mà lẽ ra có thể thay đổi kết quả / số hạng mục được lấy mẫu | phần trăm | Bản ghi quyết định được lấy mẫu | Quản lý rủi ro; quản trị | Rà soát trước khi phát hành | Hằng tháng |
| Tỷ lệ sự cố AI và thời gian đến kiềm chế | Sự cố liên quan đến AI (đầu ra gây hại, lộ dữ liệu, hành động không an toàn) mỗi việc dùng và thời gian để kiềm chế chúng | số sự cố mỗi việc dùng sản xuất mỗi quý; trung vị và bách phân vị thứ 85 của số giờ từ phát hiện đến kiềm chế | sự cố; giờ | Bản ghi sự cố gắn thẻ AI | Quản lý sự cố; quản lý an toàn thông tin | Phản ứng và học hỏi không đổ lỗi | Hằng quý |
| Độ hiện hành của thẩm định AI nhà cung cấp | Tỷ lệ nhà cung cấp cung cấp tính năng AI trong các dịch vụ trọng yếu mà đánh giá riêng cho AI còn hiện hành | số nhà cung cấp có đánh giá AI hiện hành / số nhà cung cấp trọng yếu có tính năng AI | phần trăm | Đánh giá nhà cung cấp | Quản lý nhà cung cấp; quản lý rủi ro | Rà soát đều đặn các phụ thuộc | Hằng quý |

Hãy định nghĩa "việc dùng AI" rộng trong sổ đăng ký: mô hình bạn xây, dịch vụ bạn mua, tính năng bên trong sản phẩm, và công cụ nhân viên dùng. Các lớp rủi ro và chu kỳ được đặt trong chính sách. Độ phủ sổ đăng ký được đo so với phát hiện độc lập, không phải so với chính sổ đăng ký. Độ phủ kiểm soát thay đổi đòi hỏi một cách phát hiện thay đổi: kiểm soát phiên bản, thông báo của nhà cung cấp, giám sát cấu hình. Bằng chứng giám sát của con người đòi hỏi việc rà soát lẽ ra có thể thay đổi kết quả, không phải một nút đã được bấm. Tỷ lệ sự cố mô tả các việc dùng và hệ thống và không được dùng để đánh giá con người.

## Khuyến nghị

### Biết và phân loại

**1. Xây sổ đăng ký bằng cách tìm cũng như hỏi.** Hãy bắt đầu với một khảo sát và một chính sách, rồi kiểm tra so với hồ sơ mua sắm và chi phí, nhật ký danh tính và truy cập, dữ liệu thanh toán mạng và đám mây, và cập nhật sản phẩm của nhà cung cấp. Gồm các tính năng AI nhúng trong những công cụ bạn đã sở hữu. Hãy chờ đợi bất ngờ: mọi người dùng công cụ bạn chưa phê duyệt, thường vì lý do chính đáng. Coi chúng là thông tin (xem chủ đề 7.2, Chỉ số tài sản phần mềm và giấy phép).

**2. Giao một người sở hữu và một lớp rủi ro cho mỗi việc dùng.** Người sở hữu là người chịu trách nhiệm về việc dùng và kết quả của nó. Lớp rủi ro phản ánh tác hại nếu hệ thống thất bại: ai bị ảnh hưởng, có liên quan quyết định về con người không, nó có tự hành động không, nó chạm vào dữ liệu gì, và các tác động đảo ngược được đến đâu. Hãy dùng ít lớp với quy tắc rõ ràng. Dựa vào các khung được công nhận, như Khung Quản lý Rủi ro AI của NIST, ISO/IEC 42001 và luật áp dụng, và điều chỉnh chúng theo bối cảnh của bạn.

**3. Làm phê duyệt tương xứng.** Với các việc dùng rủi ro thấp, một đăng ký tự phục vụ nhanh với vài câu hỏi là đủ. Với các việc dùng có hệ quả, hãy yêu cầu một đánh giá rủi ro, kết quả đánh giá chất lượng, một thiết kế giám sát của con người được định nghĩa, và chữ ký. Một đường nhanh cho đa số an toàn giữ mọi người bên trong hệ thống, và một đường chậm hơn cho số ít nguy hiểm cho họ sự soi xét đúng mức.

### Kiểm thử và kiểm soát thay đổi

**4. Đánh giá trên các trường hợp thực tế, trước và trong khi dùng.** Hãy xây một tập các trường hợp kiểm thử phản ánh đầu vào thật, gồm cả các trường hợp khó và đối kháng, và chấm điểm đầu ra theo tiêu chí bằng văn bản. Gồm các kiểm tra về an toàn và công bằng nơi con người có thể bị ảnh hưởng. Chạy lại các đánh giá theo lịch và bất cứ khi nào mô hình, lời nhắc hoặc dữ liệu thay đổi. Một đội đỏ, nhóm cố ý tấn công hệ thống để tìm điểm yếu, là thực hành hữu ích cho các việc dùng rủi ro cao hơn. Xem các thực hành lấy mẫu cho công việc có hỗ trợ (xem chủ đề 10.2, Đo lường công việc có AI hỗ trợ).

**5. Đặt mô hình, lời nhắc và công cụ dưới kiểm soát thay đổi.** Hãy đặt phiên bản cho lời nhắc và cấu hình như mã. Yêu cầu kiểm thử và phê duyệt tương xứng với rủi ro cho các thay đổi, ghi lại chúng, và giữ khả năng hoàn tác. Theo dõi các bản cập nhật mô hình do nhà cung cấp thực hiện, có thể thay đổi hành vi mà không báo trước, và thống nhất với nhà cung cấp cách bạn sẽ được thông báo. Coi một lần nâng cấp mô hình là một thay đổi cần kiểm soát (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

**6. Giám sát trong sản xuất.** Hãy theo dõi sự trôi dạt trong đầu vào và đầu ra, tỷ lệ lỗi và ghi đè tăng, và các mẫu hình bất thường. Đặt ngưỡng kích hoạt rà soát. Với các hệ thống thực hiện hành động, hãy giám sát nhật ký hành động. Giám sát là cách bạn tìm ra các vấn đề mà kiểm thử bỏ lỡ.

### Giữ sự giám sát của con người thật sự

**7. Thiết kế sự giám sát có thể hoạt động.** Một người rà soát mọi đầu ra của một hệ thống nhanh không thể theo kịp, và một người được yêu cầu phê duyệt điều họ không hiểu không đang cung cấp sự giám sát. Hãy định nghĩa con người làm gì, họ có thông tin gì, bao nhiêu thời gian, và thẩm quyền gì để ghi đè. Lấy mẫu các rà soát để kiểm tra chúng có thực chất. Hãy cảnh giác với thiên kiến tự động hóa, xu hướng chấp nhận đầu ra của máy (xem chủ đề 10.1, AI trong đo lường quản lý dịch vụ).

**8. Giữ dấu vết kiểm toán.** Hãy ghi đầu vào, đầu ra, phiên bản, quyết định và hành động theo cách hỗ trợ điều tra, tuân theo quy tắc quyền riêng tư và giới hạn lưu giữ. Một [dấu vết kiểm toán](https://en.wikipedia.org/wiki/Audit_trail) cho phép bạn trả lời điều gì đã xảy ra và vì sao. Với các quyết định có hệ quả về con người, hãy cân nhắc bạn có thể đưa ra giải thích nào và có con đường kháng cáo nào (xem chủ đề 8.3, Chỉ số tuân thủ và kiểm toán).

**9. Bảo vệ dữ liệu và chống thao túng.** Hãy kiểm soát dữ liệu hệ thống AI có thể thấy và gửi ra. Kiểm thử tiêm lệnh và rò rỉ dữ liệu, đặc biệt cho các hệ thống đọc nội dung bên ngoài hoặc có quyền truy cập công cụ. Áp dụng các nguyên tắc đặc quyền tối thiểu dùng cho các tác tử hành động (xem chủ đề 10.3, Chỉ số tác tử AI và chatbot, và chủ đề 8.1, Chỉ số sự cố bảo mật và lỗ hổng). Cân nhắc quyền riêng tư ngay lúc thiết kế, và mời các chuyên gia bảo vệ dữ liệu tham gia.

### Phản ứng và học

**10. Coi sự cố AI là sự cố.** Hãy định nghĩa điều gì được tính: đầu ra gây hại hoặc thiên lệch, lộ dữ liệu, hành động không an toàn, lỗi đáng kể đến được người dùng. Dùng quy trình sự cố bình thường của bạn với thẻ AI, rà soát không đổ lỗi, và đưa bài học vào đánh giá và kiểm soát. Làm cho việc báo cáo dễ với nhân viên và người dùng. Thời gian đến kiềm chế quan trọng như với bất kỳ sự cố nào (xem chủ đề 3.4, Chỉ số sự cố lớn).

**11. Quản lý AI của nhà cung cấp.** Hãy hỏi nhà cung cấp họ dùng những tính năng AI nào, chúng được kiểm thử và thay đổi thế nào, dữ liệu được xử lý ra sao, và sự cố được báo cáo thế nào. Thêm các điều khoản riêng cho AI vào hợp đồng nơi quan trọng, gồm thông báo về thay đổi mô hình trọng yếu. Đánh giá lại nhà cung cấp trọng yếu theo chu kỳ (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).

**12. Rà soát chính quản trị.** Mỗi quý, hãy kiểm tra các thước đo cho thấy gì: nơi các việc dùng không được đăng ký, phê duyệt nào quá chậm, kiểm soát nào không bắt được vấn đề. Điều chỉnh chính sách và các con đường. Mời nhân viên và người dùng tham gia rà soát. Giữ các quy tắc ngắn, rõ ràng và hiện hành, và cho nghỉ hưu các kiểm soát không xứng với chi phí của chúng.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ sổ đăng ký việc dùng AI | Đăng ký các việc dùng tầm thường để nâng tỷ lệ; mẫu số bị giới hạn ở những gì đã đăng ký | Phát hiện độc lập cho mẫu số; lấy mẫu mục đăng ký xem chất lượng; ân xá cho việc dùng chưa đăng ký |
| Độ hiện hành của đánh giá rủi ro | Đánh giá sơ sài luôn qua; đánh giá các việc dùng rủi ro thấp | Rà soát độ sâu đánh giá; kiểm tra lớp rủi ro khớp với tiêu chí |
| Độ phủ kiểm soát thay đổi | Không phát hiện thay đổi của nhà cung cấp; ghi thay đổi sau sự việc | Phát hiện qua lịch sử phiên bản và thông báo của nhà cung cấp; bản ghi thay đổi có dấu thời gian trước khi phát hành |
| Độ hiện hành của đánh giá chất lượng | Đánh giá trên trường hợp dễ; chọn ngưỡng sau khi thấy kết quả | Tập kiểm thử được bên độc lập rà soát; ngưỡng đặt trước |
| Tỷ lệ bằng chứng giám sát của con người | Bấm phê duyệt mà không đọc; ghi tài liệu rà soát không thể thay đổi kết quả | Lấy mẫu rà soát xem thực chất; gieo lỗi đã biết; tải của người rà soát |
| Tỷ lệ sự cố AI và thời gian đến kiềm chế | Không báo cáo sự cố; thu hẹp định nghĩa | Báo cáo dễ, không đổ lỗi; so sánh với phàn nàn của người dùng và phát hiện kiểm toán |
| Độ hiện hành của thẩm định AI nhà cung cấp | Bảng hỏi do bộ phận tiếp thị trả lời; đánh giá không có bằng chứng | Yêu cầu bằng chứng cho nhà cung cấp trọng yếu; xác minh độc lập |

Một kết quả đọc lành mạnh là một sổ đăng ký được phát hiện độc lập xác nhận, các đánh giá khớp với rủi ro, các thay đổi đi qua kiểm soát, các đánh giá chất lượng được giữ hiện hành, sự giám sát tìm ra lỗi thật, sự cố được báo cáo sẵn sàng và kiềm chế nhanh, và nhà cung cấp chia sẻ điều họ thay đổi.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Phê duyệt trung tâm cho mọi việc dùng AI | Kiểm soát, nhất quán | Chậm; đẩy việc sử dụng đi ngầm |
| Đăng ký tự phục vụ theo bậc rủi ro | Nhanh cho đa số an toàn | Cần tiêu chí tốt và kiểm tra ngẫu nhiên |
| Cấm công cụ công cộng | Giảm lộ dữ liệu | Dùng ngầm; mất lợi ích |
| Công cụ đã phê duyệt kèm hướng dẫn | Việc dùng hiển thị và quản lý được | Cần cung cấp và hỗ trợ |
| Tài liệu nặng | Bằng chứng cho kiểm toán | Gánh nặng; có thể không phản ánh thực hành |
| Đánh giá tự động trong đường ống | Liên tục, nhất quán | Cần tập kiểm thử tốt; có thể bỏ lỡ thất bại mới |
| Con người rà soát mọi thứ | An toàn | Không mở rộng được; mệt mỏi |
| Lấy mẫu theo rủi ro | Thực tế | Một số thất bại lọt qua |

Câu trả lời dạng văn xuôi là cung cấp công cụ đã phê duyệt và một đường nhanh cho các việc dùng rủi ro thấp, tập trung sự soi xét vào các việc có hệ quả, tự động hóa đánh giá và giám sát, và giữ sự giám sát của con người nơi nó thật sự hoạt động được.

## Câu hỏi để thảo luận với đội nhóm

**1. Hôm nay chúng ta dùng AI ở đâu mà không có trong danh sách nào?**
Hãy hỏi đội một cách trung thực, và đưa ra ân xá. Nhìn vào các công cụ dùng để soạn thảo, tóm tắt, lập trình và phân tích, gồm cả những cái bên trong sản phẩm. Người điều phối nên ghi lại các việc dùng mà không phán xét. Thống nhất ai sẽ đăng ký chúng và cái nào cần xem kỹ hơn.

**2. Nếu việc dùng AI có hệ quả nhất của chúng ta mắc một sai lầm gây hại, chúng ta sẽ phát hiện ra bằng cách nào và làm gì?**
Đi qua phát hiện, kiềm chế, truyền đạt và học hỏi. Ghi lại khoảng trống trong giám sát, quyền sở hữu và thẩm quyền tắt nó. Thống nhất một cải tiến.

**3. Cái gì có thể thay đổi bên dưới chúng ta mà không ai phê duyệt?**
Liệt kê mô hình, lời nhắc, nguồn dữ liệu và cập nhật của nhà cung cấp. Với mỗi cái, hỏi làm sao chúng ta biết nó đã đổi và làm sao chúng ta kiểm thử nó. Thống nhất nơi thêm phát hiện hoặc một kiểm thử.

**4. Người rà soát đầu ra AI trong quy trình của chúng ta có thực tế bắt được một lỗi nghiêm trọng không?**
Nhìn vào khối lượng, thông tin, thời gian và thẩm quyền. Kiểm thử bằng một lỗi được gieo. Nếu rà soát không thể hoạt động, hãy thiết kế lại quy trình trước khi thêm AI.

**5. Quy tắc nào của chúng ta một đồng nghiệp bận rộn sẽ thấy dễ theo, và quy tắc nào họ sẽ lách?**
Liệt kê các quy tắc hiện tại và thử chúng với các quy trình làm việc thật. Thảo luận vì sao quy tắc bị lách. Thống nhất các thay đổi làm đường an toàn thành đường dễ.

**6. Nhà cung cấp của chúng ta đã nói gì với chúng ta về AI của họ, và chúng ta chưa hỏi gì?**
Kiểm tra các bảng hỏi và hợp đồng gần đây. Xác định nhà cung cấp trọng yếu có tính năng AI và những khoảng trống thông tin. Thống nhất các câu hỏi cho lần rà soát kế tiếp.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối xây và áp dụng tính năng AI, và họ cảm nhận quản trị như ma sát hoặc như sự giúp đỡ. Họ nên đăng ký các việc dùng sớm, kiểm thử trên các trường hợp thực tế, đặt lời nhắc và mô hình dưới kiểm soát phiên bản, và thiết kế sự giám sát hoạt động được. Họ được lợi từ phê duyệt nhanh cho các việc dùng rủi ro thấp.

### Đội dịch vụ và vận hành

Các đội vận hành chạy AI trong sản xuất và phản ứng với sự cố của nó. Họ nên giám sát sự trôi dạt, giữ nhật ký hành động, gắn thẻ sự cố AI, và có thẩm quyền cùng phương tiện để tắt một hệ thống. Họ cũng tự dùng AI và nên theo cùng các quy tắc.

### Lãnh đạo và quản trị

Lãnh đạo đặt khẩu vị rủi ro và chịu trách nhiệm về kết quả. Họ nên tài trợ sổ đăng ký, đánh giá chất lượng và giám sát, chấp nhận rằng một số việc dùng AI sẽ không qua, yêu cầu phát hiện độc lập các việc dùng, và theo dõi sự cố và thời gian đến kiềm chế. Các cơ quan quản trị nên giữ quy tắc ngắn, rà soát chúng đều đặn, và đảm bảo nhân viên và người dùng có tiếng nói.

### Khách hàng và người dùng

Người dùng bị ảnh hưởng bởi quyết định và đầu ra của AI, thường mà không biết. Họ xứng đáng được biết khi AI tham gia vào các vấn đề ảnh hưởng đến họ, tiếp cận được một con người, và thách thức các quyết định. Phàn nàn và kháng cáo là bằng chứng thiết yếu về cách quản trị hoạt động trong thực tế.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận công nghệ và vận hành của một ngân hàng khu vực áp dụng một chính sách AI sau khi một nhân viên dán chi tiết khách hàng vào một công cụ công cộng. Đội tuân thủ công bố một sổ đăng ký và kỳ vọng mọi việc dùng được liệt kê. Các con số dưới đây chỉ mang tính minh họa.

Ba tháng sau sổ đăng ký liệt kê 38 việc dùng AI. Trưởng bộ phận rủi ro công nghệ kiểm tra bằng phương tiện độc lập: dữ liệu mua sắm và chi phí, nhật ký danh tính cho thấy các lần đăng nhập vào dịch vụ AI, dữ liệu mạng, và một khảo sát nhân viên ẩn danh. Việc phát hiện tìm thấy 94 việc dùng, nên độ phủ sổ đăng ký là 40 phần trăm. Mười bảy cái là tính năng bên trong các công cụ ngân hàng đã có giấy phép, và mười hai cái là công cụ công cộng nhân viên dùng. Trong 38 việc dùng đã đăng ký, chỉ 14 cái có lớp rủi ro, và ba cái rủi ro cao nhất, một mô hình chấm điểm cảnh báo gian lận, một chatbot cho khách hàng, và một công cụ tóm tắt phàn nàn, không có đánh giá chất lượng nào trong năm qua. Các thay đổi cấu hình của mô hình gian lận và lời nhắc của chatbot do các đội tự thực hiện, và bản ghi thay đổi của quý trước bao quát 21 phần trăm số thay đổi tìm thấy trong lịch sử phiên bản. Một mẫu 60 cảnh báo gian lận bị mô hình bác bỏ cho thấy rà soát của con người được ghi lại cho 52 cái, nhưng một tập năm lần bỏ sót đã biết được gieo vào chỉ bị một người rà soát bắt, vì mỗi người rà soát xử lý vài trăm cảnh báo mỗi ngày. Một sự cố, trong đó chatbot đưa cho khách hàng một mức phí lỗi thời, được phát hiện qua một phàn nàn, và mất sáu ngày để kiềm chế vì không ai có thẩm quyền tắt nó.

Trưởng bộ phận rủi ro công nghệ thiết kế lại quản trị cùng các đội. Một đăng ký tự phục vụ ngắn với năm câu hỏi đưa các việc dùng rủi ro thấp vào sổ đăng ký trong vài phút, và một giai đoạn ân xá khuyến khích nhân viên liệt kê các công cụ họ dùng. Các lớp rủi ro dựa trên tác hại, dữ liệu và tính tự chủ. Các việc dùng rủi ro cao hơn cần một đánh giá, một đánh giá chất lượng trên các trường hợp thực tế và đối kháng, và một thiết kế giám sát được định nghĩa. Mô hình, lời nhắc và công cụ chuyển sang kiểm soát thay đổi với kiểm thử tương xứng với rủi ro, và lời nhắc của chatbot được đặt phiên bản kèm hoàn tác. Quy trình cảnh báo gian lận được thiết kế lại để người rà soát xử lý ít cảnh báo hơn, được ưu tiên tốt hơn, và các lỗi được gieo kiểm thử khả năng phát hiện của họ. Một người sở hữu có tên cho mỗi việc dùng rủi ro cao có thẩm quyền tắt nó, và ứng phó sự cố bao quát AI. Các nhà cung cấp đám mây và AI của ngân hàng được hỏi họ dùng những tính năng AI nào và thay đổi được thông báo thế nào.

Hai quý sau, độ phủ sổ đăng ký theo phát hiện độc lập là 88 phần trăm, mọi việc dùng rủi ro cao đều được đánh giá và đánh giá chất lượng trong chu kỳ, độ phủ kiểm soát thay đổi là 84 phần trăm, việc phát hiện lỗi được gieo bởi người rà soát tăng lên 4 trên 5, và thời gian trung vị để kiềm chế một sự cố AI là 3 giờ. Nhân viên dùng công cụ đã phê duyệt cho hầu hết nhiệm vụ. Một giám đốc cấp cao yêu cầu mục tiêu độ phủ sổ đăng ký 100 phần trăm. Trưởng bộ phận rủi ro công nghệ đề xuất theo dõi độ phủ so với phát hiện độc lập, độ hiện hành của đánh giá, và xử lý sự cố, và giải thích rằng một sổ đăng ký không có phát hiện có thể đạt 100 phần trăm mà vẫn bỏ sót rủi ro. Quyết định được ghi lại.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy quản trị AI như một thay đổi với dịch vụ đang chạy, kèm một buổi rà soát nhẹ, đều đặn và các bên liên quan có mặt, thay vì một phê duyệt một lần. Điều cần lưu ý là các cổng phê duyệt nặng khiến các đội giấu việc dùng AI.

### AI

Hãy giữ một sổ đăng ký mọi việc dùng AI kèm người sở hữu, lớp rủi ro, ngày đánh giá, và một điểm giám sát của con người, và đo độ phủ so với phát hiện độc lập. Kiểm thử rằng sự giám sát có thể được thực hiện. Điều cần lưu ý là cuốn sách này không đưa ra tư vấn pháp lý, và nghĩa vụ thay đổi theo nơi chốn và theo thời gian, nên hãy kiểm tra chúng với cố vấn pháp lý của chính bạn.

### Tự động hóa

Hãy tự động hóa việc phát hiện và thu thập bằng chứng cho các thay đổi mô hình, lời nhắc và dữ liệu, và đo phần tự động hóa theo các thay đổi bị bỏ sót. Điều cần lưu ý là các bộ đánh giá tự động kiểm thử điều chúng được xây để kiểm thử, nên hãy thêm các kiểm thử mới khi thất bại xuất hiện.

### Phân tích

Hãy báo cáo độ hiện hành của đánh giá rủi ro và đánh giá chất lượng kèm ngày và số đếm. Quyết định được cung cấp thông tin là sự giám sát mỏng ở đâu. Điều cần lưu ý là số sự cố AI nhỏ và không đồng đều, nên hãy kết hợp chúng với báo cáo suýt sự cố.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Tốc độ quan trọng và rủi ro chủ yếu là lộ dữ liệu và đầu ra không đáng tin cậy. Hãy giữ một danh sách ngắn các công cụ và việc dùng kèm người sở hữu, đặt vài quy tắc rõ ràng về dữ liệu nào được dùng ở đâu, và đặt phiên bản cho lời nhắc. Xem lại khi yêu cầu bảo đảm của khách hàng tăng.

**Doanh nghiệp nhỏ.** Nhân viên sẽ dùng công cụ công cộng. Hãy cung cấp một lựa chọn đã phê duyệt, viết một quy tắc một trang về dữ liệu, và rà soát cách công cụ được dùng. Hỏi nhà cung cấp về tính năng AI của họ, và giữ hồ sơ nơi AI đưa ra quyết định về khách hàng hoặc nhân viên.

**Doanh nghiệp lớn.** Quy mô cần một mô hình vận hành: sổ đăng ký, bậc rủi ro, tiêu chuẩn đánh giá, kiểm soát thay đổi và quy trình sự cố, tích hợp với các chức năng rủi ro và an ninh hiện có. Dùng phát hiện độc lập, tự động hóa đánh giá trong đường ống, và căn chỉnh với các tiêu chuẩn. Cho các đội một đường nhanh.

**Chính phủ và khu vực công.** Các quyết định ảnh hưởng đến công dân mang nghĩa vụ minh bạch, công bằng và kháng cáo, và khung mua sắm và pháp lý định hình điều được phép. Hãy duy trì hồ sơ công về các việc dùng có tác động cao nơi được yêu cầu, đánh giá tác động lên quyền, giữ con người trong vòng lặp một cách có ý nghĩa, và kiểm tra luật và hướng dẫn hiện hành (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí gồm công sức xây và duy trì sổ đăng ký, công cụ hoặc phân tích phát hiện, đánh giá rủi ro, tập và lần chạy đánh giá chất lượng, kiểm soát thay đổi cho lời nhắc và mô hình, giám sát, đào tạo, và năng lực ứng phó sự cố. Quản trị cũng thêm một ít trì hoãn cho các việc dùng rủi ro cao hơn. Các chi phí này tăng theo số lượng và rủi ro của các việc dùng, là lý do để giữ phê duyệt rủi ro thấp nhẹ.

Lợi tức gồm tránh được tác hại và phơi bày, ít bất ngờ hơn trong kiểm toán và rà soát của cơ quan quản lý, áp dụng an toàn nhanh hơn nhờ quy tắc rõ ràng, và lòng tin từ khách hàng và nhân viên. Hãy xây hồ sơ từ dữ liệu của chính bạn: số việc dùng được tìm thấy ngoài sổ đăng ký và dữ liệu chúng chạm vào, các sự cố và chi phí của chúng, thời gian dành cho phê duyệt tùy hứng trước và sau, và các phát hiện trong kiểm toán. Tránh trích dẫn thống kê đã công bố về sự cố AI hay tiền phạt mà không có nguồn truy được và mức liên quan với bối cảnh của bạn. Gồm chi phí của việc không quản trị, gồm khả năng gây tổn hại đáng kể về pháp lý và danh tiếng (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Một sổ đăng ký không ai kiểm tra.** Độ phủ trông cao và bỏ sót các việc dùng thật. Hãy dùng phát hiện độc lập.
- **Lệnh cấm đại trà.** Chúng đẩy việc sử dụng đi ngầm. Hãy cung cấp công cụ đã phê duyệt và một đường nhanh.
- **Coi lời nhắc và mô hình là cấu hình không ai sở hữu.** Hành vi đổi mà không ai nhận ra. Hãy đặt chúng dưới kiểm soát thay đổi.
- **Chỉ đánh giá một lần.** Hệ thống trôi dạt và thay đổi. Hãy chạy lại theo lịch và khi có thay đổi.
- **Giám sát chỉ trên danh nghĩa.** Người rà soát không bắt được điều họ không thấy. Hãy kiểm thử bằng lỗi được gieo và sửa tải.
- **Không có thẩm quyền để tắt.** Kiềm chế mất nhiều ngày. Hãy nêu tên người sở hữu có quyền dừng một hệ thống.
- **Phớt lờ AI của nhà cung cấp.** Rủi ro của bạn gồm cả của họ. Hãy hỏi, ký hợp đồng và đánh giá lại.
- **Quy tắc không ai theo được.** Chúng bị lách. Hãy giữ chúng ngắn và làm đường an toàn dễ.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Biết và phân loại | Không có cái nhìn về việc dùng AI | Chính sách và một danh sách một phần | Sổ đăng ký kèm người sở hữu và lớp rủi ro; phát hiện độc lập được dùng cho độ phủ | Độ phủ, độ hiện hành của đánh giá và thời gian phê duyệt được quản lý | Cái nhìn sổ đăng ký chung qua các đơn vị kinh doanh và nhà cung cấp; các lớp được rà soát cùng cơ quan quản lý và người dùng |
| Kiểm thử và thay đổi | Tùy hứng | Một số đánh giá cho một số việc dùng | Đánh giá trên các trường hợp thực tế; lời nhắc và mô hình dưới kiểm soát thay đổi | Đánh giá liên tục và giám sát trôi dạt; độ phủ được quản lý | Đánh giá và thay đổi tự động, theo rủi ro trong đường ống, được kiểm toán độc lập |
| Giám sát và học hỏi | Dựa vào lòng tin | Rà soát tồn tại về nguyên tắc | Giám sát được thiết kế và lấy mẫu; sự cố AI được gắn thẻ và rà soát không đổ lỗi | Kiểm thử lỗi gieo, thời gian đến kiềm chế và đánh giá nhà cung cấp được quản lý | Giám sát, học từ sự cố và chính sách được đồng phát triển với nhân viên, người dùng và đối tác |

## Danh sách kiểm tra

- [ ] Một sổ đăng ký liệt kê các việc dùng AI kèm người sở hữu và lớp rủi ro, được kiểm tra so với phát hiện độc lập.
- [ ] Một đường nhanh tồn tại cho các việc dùng rủi ro thấp, và một đường sâu hơn cho các việc có hệ quả.
- [ ] Các việc dùng rủi ro cao hơn có đánh giá rủi ro hiện hành và thiết kế giám sát được định nghĩa.
- [ ] Đánh giá chất lượng trên các trường hợp thực tế và đối kháng là hiện hành và được chạy lại khi có thay đổi.
- [ ] Lời nhắc, mô hình, công cụ và nguồn dữ liệu được đặt phiên bản và dưới kiểm soát thay đổi.
- [ ] Giám sát sản xuất theo dõi sự trôi dạt, lỗi, ghi đè và hành động bất thường.
- [ ] Sự giám sát được kiểm thử bằng lỗi được gieo, và tải của người rà soát là thực tế.
- [ ] Dấu vết kiểm toán hỗ trợ điều tra trong phạm vi quy tắc quyền riêng tư và lưu giữ.
- [ ] Sự cố AI được gắn thẻ, rà soát không đổ lỗi, và người sở hữu có thể tắt hệ thống.
- [ ] Nhà cung cấp có tính năng AI được đánh giá và bị ràng buộc phải thông báo thay đổi trọng yếu.

## Lời nhắc AI

**Soạn một phân loại rủi ro cho các việc dùng AI.**

```text
Propose a simple risk classification (three or four levels) for AI uses in [type of
organization] based on harm if wrong, who is affected, involvement of decisions
about people, autonomy of actions, data sensitivity, and reversibility. For each
level, state example uses, the approvals and evidence required, and the review
cycle. Do not state legal conclusions. List your assumptions and points to confirm
with legal, risk, and security specialists.
```

**Thiết kế một biểu mẫu đăng ký.**

```text
Design a short self-service registration form for new AI uses, with no more than
eight questions, that assigns an initial risk class automatically and routes
higher-risk uses to review. Cover purpose, data, users affected, autonomy, vendor,
and owner. Explain how to keep it quick for low-risk cases. List your assumptions
and risks of misclassification.
```

**Lập kế hoạch một tập đánh giá.**

```text
We use AI for [task] in [process]. Help design an evaluation set: types of
realistic cases, difficult and adversarial cases, written criteria for correct
and safe outputs, checks for fairness where people are affected, how big a set is
practical, how often to rerun it, and what changes should trigger a rerun. Do not
claim a set is sufficient. List your assumptions and limits.
```

**Rà soát một sự cố AI.**

```text
Here is a description of an AI-related incident: [paste, without personal data].
Draft a blameless review: timeline, how it was detected, contributing factors
(data, prompt, model, oversight, supplier, process), impact, what contained it,
and actions with owners. Suggest changes to evaluation, monitoring, and change
control. Do not assign blame to individuals. List your assumptions and open
questions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số quản trị hoặc rủi ro AI.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số quản trị AI dùng bằng chứng độc lập và mang vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Xây sổ đăng ký AI bằng phát hiện độc lập, và khớp mức soi xét với rủi ro kèm một đường nhanh cho các việc dùng an toàn.
- Coi mô hình, lời nhắc, công cụ và nguồn dữ liệu là các thay đổi cần kiểm thử, phê duyệt và hoàn tác.
- Đánh giá trước khi dùng và trong khi dùng, trên các trường hợp thực tế và đối kháng.
- Thiết kế sự giám sát của con người có thể hoạt động, và kiểm thử nó bằng lỗi được gieo.
- Coi sự cố AI như các sự cố khác, kèm rà soát không đổ lỗi, và trao cho người sở hữu quyền tắt hệ thống.
- Hỏi nhà cung cấp về AI của họ, và giữ quy tắc ngắn và đường an toàn dễ.

## Tài liệu tham khảo và đọc thêm

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
