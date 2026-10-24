# AI trong đo lường quản lý dịch vụ

**Trước khi AI thay đổi công việc, hãy viết ra công việc hiện nay trông như thế nào, rồi đo mỗi việc dùng AI so với đường cơ sở đó và so với công việc tương đương làm không có nó, vì các tuyên bố sẽ lớn còn bằng chứng thường nhỏ.**

## Tổng quan và động lực

Trí tuệ nhân tạo hiện nằm bên trong nhiều công cụ mà các đội dùng để xây dựng và vận hành dịch vụ. [Trí tuệ nhân tạo](https://en.wikipedia.org/wiki/Artificial_intelligence) (AI) là khả năng của các hệ thống tính toán thực hiện những nhiệm vụ gắn với trí thông minh của con người. Trong đó, các hệ thống [học máy](https://en.wikipedia.org/wiki/Machine_learning) học các mẫu hình từ dữ liệu, và các hệ thống [AI tạo sinh](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), thường xây trên các [mô hình ngôn ngữ lớn](https://en.wikipedia.org/wiki/Large_language_model), tạo ra văn bản, mã và nội dung khác để đáp lại các lời nhắc. Trong quản lý dịch vụ CNTT (ITSM), những khả năng này xuất hiện ở phân loại phiếu, tóm tắt sự cố, soạn bài tri thức, gợi ý câu trả lời cho bàn dịch vụ, hoàn thành và rà soát mã trong đường ống phân phối, phát hiện bất thường trong giám sát, và trợ lý hội thoại cho người dùng. [AIOps](https://en.wikipedia.org/wiki/AIOps) là tên thường được dùng cho việc áp dụng AI vào dữ liệu vận hành CNTT.

Các tuyên bố đưa ra cho những công cụ này thì lớn, và bằng chứng trong bất kỳ tổ chức nào thường nhỏ. Các nhà bán hàng báo cáo thời gian tiết kiệm. Những người áp dụng sớm báo cáo sự hào hứng. Giám đốc điều hành hỏi mức tăng hiệu quả đã hứa. Trong khi đó các đội báo cáo rằng đầu ra cần được kiểm tra, rằng một số gợi ý sai một cách tự tin, và rằng công việc cảm thấy khác đi. Đo lường là cách một tổ chức tìm ra điều nào trong số này đúng với công việc của chính mình. Phần này của cuốn sách coi AI một cách nghiêm túc như một thứ cần đo, với cùng các rào chắn như bất kỳ họ chỉ số nào.

AI thay đổi bài toán đo lường theo bốn cách.

- **Khối lượng và tốc độ tăng trong khi chất lượng khó thấy hơn.** AI có thể tạo ra phiếu, câu trả lời, mã và tài liệu nhanh, nên các thước đo đầu ra đi lên. Đầu ra có tốt không là một câu hỏi riêng (xem chủ đề 10.4, Lạm phát chỉ số và pha loãng chất lượng).
- **Đường cơ sở biến mất.** Khi AI đã được dùng hằng ngày, bạn không thể khôi phục công việc trông thế nào khi không có nó. Đường cơ sở phải được thu thập trước thay đổi, hoặc phải tồn tại một nhóm đối chứng.
- **Con người vẫn ở trong vòng lặp, kèm hệ quả.** Các thiết kế [có con người trong vòng lặp](https://en.wikipedia.org/wiki/Human-in-the-loop) giữ một người chịu trách nhiệm về kết quả. Những người rà soát đầu ra của máy có thể phục tùng nó quá dễ dàng, một mẫu hình gọi là [thiên kiến tự động hóa](https://en.wikipedia.org/wiki/Automation_bias), hoặc họ có thể dành nhiều thời gian kiểm tra hơn thời gian đã tiết kiệm.
- **Đầu ra có thể trôi chảy mà sai.** Một [ảo giác](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) là một đầu ra tự tin không được hỗ trợ bởi đầu vào hay bởi sự thật. Các thước đo phải gồm một phép kiểm tra tính đúng đắn, được con người lấy mẫu.

Cách làm việc linh hoạt và ITIL đều đưa ra một lập trường với điều này. Các mục đích linh hoạt về phân phối liên tục, cải tiến liên tục và tiến hóa liên tục gợi ý coi mỗi việc dùng AI là một thí nghiệm nhỏ: nêu lợi ích kỳ vọng, thử với vài người sẵn lòng, so sánh, và quyết định. Nguyên tắc chỉ đạo của ITIL về tiến triển lặp đi lặp lại kèm phản hồi chỉ cùng hướng, và sự nhấn mạnh của nó vào giá trị hỏi kết quả nào cải thiện cho người dùng và doanh nghiệp, không phải bao nhiêu văn bản được tạo ra. Mục đích về những con người có động lực được phục vụ khi AI làm nhẹ công việc tẻ nhạt và tôn trọng phán đoán của họ, và không được phục vụ khi AI trở thành cách để tăng nhịp độ hay giám sát những người dùng nó. Nhịp độ bền vững nghĩa là thời gian tiết kiệm không nên bị âm thầm chuyển thành nhu cầu nhiều hơn.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng cho AI ở dạng sắc bén nhất. Nếu "mức áp dụng AI" hay "tỷ lệ mã do AI tạo ra" trở thành mục tiêu, mọi người sẽ dùng công cụ nơi nó không giúp ích, và chất lượng sẽ trả giá cho con số (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Chủ đề này bao quát các nền tảng: nơi AI đi vào công việc, nên thu thập đường cơ sở nào, và thước đo nào cho thấy một việc dùng AI có giúp ích không. Các chủ đề kế tiếp đi sâu hơn về công việc có hỗ trợ, về tác tử và chatbot, về lạm phát và pha loãng, và về quản trị. Các sự kiện về sản phẩm và quy tắc AI thay đổi nhanh, và các phát biểu về công cụ hay quy định cụ thể trong phần này được ghi ngày tính đến tháng 10 năm 2026 và nên được kiểm tra lại.

## Nguyên tắc chính

- **Thu thập đường cơ sở trước khi đưa AI vào.** Không có nó, mọi tuyên bố về lợi ích chỉ là ý kiến.
- **Coi mỗi việc dùng là một thí nghiệm có đối chứng.** So sánh với công việc tương tự làm không có AI, trong cùng kỳ.
- **Đo chất lượng bằng lấy mẫu, cùng con người.** Đầu ra trôi chảy không phải đầu ra đúng.
- **Tính chi phí đầy đủ.** Gồm thời gian rà soát, làm lại, giấy phép và chi phí suy luận.
- **Giữ con người có trách nhiệm và được thông tin.** Người dùng AI chịu trách nhiệm về kết quả.
- **Đừng để AI thành sự tăng nhịp độ hay một công cụ giám sát.** Thời gian tiết kiệm là một lựa chọn về cách dùng thời gian.
- **Bắt đầu với những người sẵn lòng và vấn đề thật.** Mệnh lệnh tạo ra việc sử dụng không có giá trị.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mức đầy đủ của đường cơ sở | Tỷ lệ trường hợp sử dụng AI đã lên kế hoạch có đường cơ sở trước khi áp dụng được ghi lại cho các chỉ báo chính của chúng | số trường hợp sử dụng có đường cơ sở có ngày / số trường hợp sử dụng đã lên kế hoạch | phần trăm | Sổ đăng ký trường hợp sử dụng | Cải tiến liên tục; đo lường và báo cáo | Đường cơ sở trước một thí nghiệm | Hằng quý |
| Độ phủ sử dụng AI | Tỷ lệ hạng mục công việc hoặc nhiệm vụ đủ điều kiện mà AI được dùng, theo trường hợp sử dụng | số hạng mục có dùng hỗ trợ AI / số hạng mục đủ điều kiện, từ nhật ký công cụ hoặc thẻ người dùng, ở cấp đội | phần trăm | Nhật ký sử dụng công cụ, thẻ | Bàn dịch vụ; quản lý sự cố; quản lý phát hành và triển khai | Việc áp dụng một công cụ bởi các đội sẵn lòng | Hằng tháng |
| Tỷ lệ chấp nhận và ghi đè gợi ý | Tỷ lệ gợi ý của AI được chấp nhận nguyên trạng, được chỉnh sửa, hoặc bị từ chối | số gợi ý trong mỗi loại / số gợi ý được đưa ra | phần trăm | Nhật ký công cụ tổng hợp theo đội | Bàn dịch vụ; quản lý tri thức | Rà soát các gợi ý của máy | Hằng tháng |
| Độ chính xác của đầu ra đã rà soát | Tỷ lệ đầu ra AI được lấy mẫu mà một người rà soát có trình độ đánh giá là đúng và phù hợp với mục đích | số đầu ra được đánh giá đúng / số đầu ra được lấy mẫu | phần trăm | Bản ghi rà soát mẫu | Đảm bảo chất lượng; quản lý tri thức | Định nghĩa hoàn thành cho đầu ra | Hằng tháng |
| Thời gian nhiệm vụ so với đường cơ sở | Thời gian hoàn thành một nhiệm vụ đã định nghĩa có AI so với đường cơ sở hoặc một nhóm đối chứng | trung vị và bách phân vị thứ 85 của thời gian nhiệm vụ có AI trừ cùng giá trị cho đường cơ sở hoặc đối chứng | phút hoặc giờ | Nhiệm vụ được bấm giờ, dấu thời gian phiếu | Bàn dịch vụ; quản lý sự cố | Thời gian chu trình của một nhiệm vụ | Hằng quý |
| Chi phí mỗi nhiệm vụ có AI hỗ trợ | Tổng chi phí của công việc có AI hỗ trợ mỗi nhiệm vụ, gồm rà soát và làm lại | (chi phí giấy phép và sử dụng + chi phí thời gian rà soát và làm lại) / số nhiệm vụ hoàn thành có AI | tiền tệ mỗi nhiệm vụ | Hóa đơn nhà cung cấp, ước lượng thời gian, công cụ theo dõi công việc | Quản lý tài chính dịch vụ | Chi phí phục vụ mỗi kết quả | Hằng quý |
| Chuyển động kết quả so với đối chứng | Thay đổi trong chỉ báo kết quả cho công việc có AI hỗ trợ so với công việc tương tự không được hỗ trợ | thay đổi chỉ báo của nhóm có AI hỗ trợ trừ thay đổi của nhóm đối chứng | đơn vị chỉ báo | Thước đo kết quả theo trường hợp sử dụng (chất lượng, mức hài lòng, tỷ lệ mở lại, lỗi) | Cải tiến liên tục | Học từ các thí nghiệm | Hằng quý |

Hãy định nghĩa mỗi trường hợp sử dụng theo nhiệm vụ, người dùng và các chỉ báo kết quả, và ghi chúng trong sổ đăng ký. Độ phủ sử dụng AI là một thước đo mô tả và không phải mục tiêu. Độ chính xác của đầu ra đã rà soát được đánh giá theo một tiêu chuẩn bằng văn bản bởi người có trình độ mà không phải là người tạo ra đầu ra. Thời gian nhiệm vụ gồm thời gian đưa lời nhắc, rà soát và sửa cũng như tạo ra. Chi phí mỗi nhiệm vụ tính thời gian của con người dành để kiểm tra và sửa. Chuyển động kết quả đòi hỏi một đối chứng được chọn trước và một ghi chú về các thay đổi khác trong kỳ.

## Khuyến nghị

### Quyết định AI thuộc về đâu

**1. Liệt kê các nhiệm vụ và vấn đề mà mỗi việc dùng AI giải quyết.** Hãy bắt đầu từ nỗi đau, không phải từ công cụ: soạn thảo lặp đi lặp lại, phân loại chậm, tri thức rải rác, rà soát dài, cảnh báo ồn. Với mỗi việc dùng ứng viên, hãy viết vấn đề, ai cảm nhận nó, kết quả nào nên cải thiện, và các rủi ro. Bỏ qua những việc dùng không có vấn đề rõ ràng. Đây là sổ đăng ký mà đường cơ sở và các thước đo treo vào.

**2. Phân loại rủi ro của mỗi việc dùng.** Một công cụ soạn ghi chú nội bộ mang rủi ro khác với một công cụ thay đổi hệ thống sản xuất, trả lời khách hàng, hoặc đưa ra quyết định về con người. Hãy phân loại các việc dùng theo tác hại nếu đầu ra sai, ai bị ảnh hưởng, và liệu một người có rà soát nó trước khi nó có hiệu lực không. Những việc dùng rủi ro cao hơn cần các thước đo, lấy mẫu và quản trị mạnh hơn (xem chủ đề 10.5, Chỉ số quản trị và rủi ro AI).

**3. Bắt đầu với những người sẵn lòng và các nhiệm vụ có giới hạn.** Hãy thí điểm với tình nguyện viên trên một nhiệm vụ phổ biến và kiểm tra được. Tình nguyện viên cho phản hồi trung thực và điều chỉnh công cụ theo công việc của họ. Một nhiệm vụ có giới hạn làm cho đường cơ sở và so sánh khả thi. Tránh bắt đầu với công việc nhạy cảm nhất.

### Thu thập đường cơ sở và thiết lập so sánh

**4. Ghi đường cơ sở trước lần dùng đầu tiên.** Với mỗi trường hợp sử dụng, hãy thu thập trạng thái hiện tại của các chỉ báo: thời gian hoàn thành, tỷ lệ chất lượng hoặc lỗi, làm lại, mức hài lòng của người dùng, và chi phí. Lấy đủ số quan sát để thấy biến thiên bình thường (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Ghi ngày cho đường cơ sở và giữ nó. Một đường cơ sở lấy sau khi triển khai là bản ghi của thế giới mới.

**5. Xây dựng một đối chứng.** Nơi có thể, hãy giữ một nhóm hoặc tập nhiệm vụ tương tự không dùng AI trong kỳ thí điểm, hoặc luân phiên việc dùng theo tuần hoặc theo loại nhiệm vụ theo cách công bằng. Ngẫu nhiên hóa là lý tưởng và thường không thực tế. Hãy nêu rõ điều gì khác đã đổi. Không có đối chứng, các cải thiện do tính mùa vụ, nhân sự hay học hỏi sẽ được ghi công cho công cụ.

**6. Đo thời gian một cách trung thực.** Thời gian đến bản nháp đầu hiếm khi là thước đo đúng. Hãy đo thời gian đến một kết quả hoàn chỉnh, đã kiểm tra, gồm đưa lời nhắc, rà soát và sửa. Mọi người thường báo cáo thời gian tiết kiệm dựa trên bước tạo ra, và bước rà soát ăn mất một phần hoặc tất cả. Các nghiên cứu thời gian trên một mẫu nhiệm vụ đáng công sức.

### Đo chất lượng và chi phí

**7. Lấy mẫu đầu ra để những người có trình độ rà soát.** Mỗi tháng, hãy rút một mẫu ngẫu nhiên các đầu ra có AI hỗ trợ và nhờ một người có trình độ đánh giá chúng theo một tiêu chuẩn bằng văn bản. Báo cáo độ chính xác, các loại lỗi tìm thấy, và xu hướng. Đây là sự bảo vệ chính chống việc các sai lầm trôi chảy lan rộng. Giữ người rà soát độc lập với người tạo ra, và luân phiên người rà soát.

**8. Theo dõi các mẫu hình chấp nhận và ghi đè.** Tỷ lệ chấp nhận rất cao có thể báo hiệu thiên kiến tự động hóa, nơi mọi người chấp nhận mà không kiểm tra. Tỷ lệ rất thấp có thể báo hiệu một công cụ không hữu ích. Hãy dùng các tỷ lệ làm gợi ý cho cuộc trò chuyện với đội và hỏi các con số có nghĩa gì theo kinh nghiệm của họ. Đừng đặt mục tiêu cho việc chấp nhận.

**9. Tính chi phí đầy đủ mỗi nhiệm vụ.** Hãy gồm phí giấy phép, phí tính theo sử dụng, thời gian dành để đưa lời nhắc, rà soát và sửa, đào tạo, và công sức quản trị. So sánh với chi phí đường cơ sở. Một công cụ tạo bản nháp nhanh và cần sửa nhiều có thể tốn hơn cách cũ. Gồm chi phí của các sai lầm đến được với người dùng.

### Giữ khía cạnh con người đúng

**10. Bảo vệ con người khỏi giám sát và sự trượt nhịp độ.** Hãy tổng hợp dữ liệu sử dụng AI ở cấp đội và đừng dùng nó để đánh giá cá nhân. Đừng dùng mức sử dụng làm thước đo hiệu suất. Hãy thống nhất trước rằng thời gian tiết kiệm sẽ không tự động trở thành khối lượng công việc thêm, và quyết định cùng đội làm gì với nó: chất lượng, học hỏi, cải tiến, hoặc công việc khác. Một nhịp độ không đổi là mục tiêu thiết kế (xem chủ đề 9.2, Chỉ số hài lòng và sức khỏe tinh thần).

**11. Hỏi những người dùng nó.** Các khảo sát nhanh ngắn và trò chuyện bộc lộ điều các con số bỏ lỡ: nơi công cụ giúp ích, nơi nó gây bực bội, nơi nó chuyển công việc từ tạo ra sang kiểm tra, và liệu nó có thay đổi mức hài lòng với công việc không. Hãy đối xử với mối lo về kỹ năng, chất lượng và an toàn việc làm bằng sự tôn trọng.

**12. Quyết định, công bố và xem lại.** Khi kết thúc mỗi thí điểm, hãy quyết định mở rộng, điều chỉnh hay dừng, và ghi lại bằng chứng. Chia sẻ kết quả trung thực, gồm cả kết quả vô hiệu và tiêu cực. Xem lại các quyết định khi công cụ thay đổi, điều xảy ra nhanh. Một việc dùng không giúp ích năm ngoái có thể giúp ích bây giờ, và ngược lại.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Mức đầy đủ của đường cơ sở | Ghi đường cơ sở sau sự việc; dùng các chỉ báo thuận tiện | Đường cơ sở có dấu ngày; rà soát độc lập phương pháp đường cơ sở |
| Độ phủ sử dụng AI | Ra lệnh sử dụng; đếm các lần gọi tầm thường hoặc tự động | Không bao giờ là mục tiêu; so sánh với chuyển động kết quả; đếm việc sử dụng có ý nghĩa |
| Tỷ lệ chấp nhận và ghi đè gợi ý | Thưởng cho việc chấp nhận; làm việc từ chối phiền toái | Không mục tiêu; độ chính xác đầu ra đã rà soát; hỏi người dùng về trải nghiệm |
| Độ chính xác của đầu ra đã rà soát | Lấy mẫu đầu ra dễ; người rà soát dễ dãi | Mẫu ngẫu nhiên bởi người rà soát độc lập; tiêu chuẩn bằng văn bản; luân phiên người rà soát |
| Thời gian nhiệm vụ so với đường cơ sở | Chỉ bấm giờ việc tạo ra; chọn nhiệm vụ dễ | Thời gian đến kết quả đã kiểm tra; lấy mẫu nhiệm vụ ngẫu nhiên; gồm rà soát và làm lại |
| Chi phí mỗi nhiệm vụ có AI hỗ trợ | Bỏ thời gian rà soát hoặc chi phí quản trị | Danh sách kiểm tra chi phí đầy đủ; so sánh với nghiên cứu thời gian |
| Chuyển động kết quả so với đối chứng | Chọn nhóm hoặc kỳ thuận lợi; bỏ qua thay đổi khác | Đối chứng và kỳ đã thống nhất trước; danh sách các thay đổi khác |

Một kết quả đọc lành mạnh là có đường cơ sở cho mọi thí điểm, thời gian đến kết quả hoàn chỉnh được đo, độ chính xác được kiểm tra bởi những người có trình độ, chi phí gồm rà soát, kết quả được so sánh công bằng, và các đội nói rằng công cụ phục vụ phán đoán của họ.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Thí điểm với tình nguyện viên | Phản hồi trung thực; rủi ro thấp | Tình nguyện viên là người nhiệt tình; kết quả có thể không khái quát được |
| Triển khai theo mệnh lệnh | Phủ nhanh | Sử dụng không có giá trị; oán giận; lợi dụng |
| So sánh có kiểm soát | Bằng chứng đáng tin | Công sức; không phải lúc nào cũng làm được |
| Chỉ trước và sau | Đơn giản | Bị nhiễu bởi các thay đổi khác |
| Tiết kiệm do nhà cung cấp báo cáo | Dễ có được | Lạc quan; không có bối cảnh |
| Nhiệm vụ được bấm giờ của riêng bạn | Dựa trên công việc của bạn | Tốn thời gian; mẫu nhỏ |
| Rà soát nặng mọi đầu ra | An toàn | Gỡ bỏ lợi ích |
| Rà soát theo mẫu | Mở rộng được | Một số lỗi lọt qua |

Câu trả lời dạng văn xuôi là chạy các thí điểm nhỏ kèm đường cơ sở và đối chứng, lấy mẫu đầu ra để kiểm tra chất lượng, tính chi phí đầy đủ, và quyết định dựa trên bằng chứng. Hãy dùng các con số của nhà cung cấp như giả thuyết để kiểm thử.

## Câu hỏi để thảo luận với đội nhóm

**1. Chúng ta kỳ vọng AI giúp chúng ta ở đâu, và chúng ta sẽ thấy gì nếu nó giúp?**
Liệt kê các việc dùng ứng viên và, với mỗi cái, chỉ báo và đường cơ sở chúng ta có hôm nay. Người điều phối nên thúc ép cụ thể: nhiệm vụ nào, thước đo nào, mức thay đổi bao nhiêu sẽ có ý nghĩa. Chọn một việc dùng để thí điểm và thống nhất đường cơ sở.

**2. Điều gì khiến chúng ta tin hay nghi ngờ một gợi ý của AI, và làm sao chúng ta biết mình sai?**
Thảo luận các trường hợp đầu ra sai và cách nó được nhận ra. Cân nhắc cách rà soát hoạt động trong thực tế và liệu áp lực có dẫn đến việc bỏ qua nó không. Thống nhất một phương pháp lấy mẫu mà một người độc lập sẽ chạy.

**3. Bao nhiêu phần thời gian chúng ta tiết kiệm sẽ phải dành cho việc kiểm tra?**
Bấm giờ một nhiệm vụ thật có và không có công cụ, gồm đưa lời nhắc và rà soát. So sánh với điều mọi người kỳ vọng. Cuộc trò chuyện thường lộ ra nơi mức tăng nằm và nơi không.

**4. Chúng ta nên làm gì với thời gian tiết kiệm được?**
Quyết định trước. Các lựa chọn gồm công việc chất lượng, học hỏi, cải tiến, hoặc bớt áp lực. Thảo luận cách ngăn thời gian bị âm thầm hấp thụ vào nhu cầu nhiều hơn. Thống nhất với lãnh đạo cách đội sẽ bảo vệ nó.

**5. Chúng ta sẽ không muốn AI làm gì ở đây, và vì sao?**
Liệt kê các nhiệm vụ cần phán đoán, sự đồng cảm hay trách nhiệm của con người. Thảo luận rủi ro với người dùng và với kỹ năng. Người điều phối nên ghi các ranh giới làm đầu vào cho quản trị.

**6. Làm sao chúng ta biết khi nào dừng?**
Định nghĩa bằng chứng sẽ kết thúc thí điểm hoặc việc dùng. Thống nhất ai quyết định và khi nào. Một thí điểm không có tiêu chí thoát sẽ trở thành vật cố định vĩnh viễn.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối dùng AI cho mã, kiểm thử, rà soát và tài liệu. Họ nên đo thời gian đến một kết quả đã rà soát, hoạt động được, theo dõi chất lượng và lỗi, và giữ việc rà soát của con người có ý nghĩa. Họ nên chống lại các chỉ số đếm số dòng được tạo hay việc chấp nhận, và khăng khăng các thước đo kết quả như lỗi và độ ổn định.

### Đội dịch vụ và vận hành

Các đội vận hành và bàn dịch vụ dùng AI cho phân loại, tóm tắt, gợi ý và giám sát. Họ nên so sánh chất lượng xử lý và giải quyết với đường cơ sở, lấy mẫu đầu ra, và theo dõi tác động lên người dùng và lên các liên hệ lặp lại. Họ nên được tham vấn trước khi AI được đặt trước mặt người dùng.

### Lãnh đạo và quản trị

Lãnh đạo bảo trợ các chương trình AI và đối mặt với áp lực phải cho thấy thành quả. Họ nên khăng khăng đòi đường cơ sở và so sánh, tài trợ công việc rà soát, tránh mục tiêu sử dụng, và bảo vệ con người khỏi giám sát và sự trượt nhịp độ. Quản trị nên yêu cầu phân loại rủi ro và bằng chứng trước khi mở rộng.

### Khách hàng và người dùng

Người dùng gặp AI trong các câu trả lời, gợi ý và hành động tự động. Họ muốn sự giúp đỡ đúng, dễ hiểu và khả năng tiếp cận một con người. Họ nên được cho biết khi họ đang tương tác với AI nơi thích hợp, và phản hồi của họ là bằng chứng then chốt về việc nó có giúp ích không (xem chủ đề 6.1, Chỉ số mức hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Nhóm công nghệ của một công ty bảo hiểm cỡ vừa vận hành một bàn dịch vụ nội bộ cho 4.000 nhân viên và vài đội sản phẩm. Lãnh đạo mua giấy phép cho một trợ lý AI và yêu cầu một báo cáo về thời gian tiết kiệm sau ba tháng. Các con số dưới đây chỉ mang tính minh họa.

Trưởng bộ phận quản lý dịch vụ khăng khăng đòi một đường cơ sở. Với nhiệm vụ phổ biến nhất của bàn dịch vụ, soạn câu trả lời cho các yêu cầu truy cập và mật khẩu, bà bấm giờ 120 phiếu gần đây: thời gian xử lý trung vị 11 phút, bách phân vị thứ 85 là 24, tỷ lệ mở lại 6 phần trăm, và điểm hài lòng từ khảo sát ổn định. Bà chọn hai đội để thí điểm trợ lý và giữ hai đội tương tự làm đối chứng. Các đội thí điểm là tình nguyện viên.

Sau tám tuần, thời gian xử lý trung vị của các đội thí điểm là 8 phút và bách phân vị thứ 85 là 19, so với 11 và 23 ở các đội đối chứng. Nhật ký công cụ cho thấy nhân viên chấp nhận gợi ý nguyên văn trong 52 phần trăm trường hợp, chỉnh sửa trong 38 phần trăm, và từ chối trong 10 phần trăm. Một mẫu ngẫu nhiên hằng tháng gồm 80 câu trả lời, được một nhân viên cấp cao không thuộc thí điểm rà soát, thấy 91 phần trăm hoàn toàn đúng, với lỗi tập trung ở một quy trình hiếm dùng nơi trợ lý đưa các bước lỗi thời. Tỷ lệ mở lại ở các đội thí điểm tăng nhẹ lên 7 phần trăm, trong phạm vi biến thiên bình thường. Chi phí mỗi phiếu giảm khiêm tốn khi giấy phép và thời gian rà soát được tính. Một khảo sát cho thấy nhân viên đánh giá cao các bản nháp và không thích việc kiểm tra thêm các câu trả lời dài. Hai nhân viên nói họ cảm thấy áp lực phải xử lý nhiều phiếu hơn mỗi giờ.

Trưởng bộ phận quản lý dịch vụ báo cáo mức tiết kiệm thời gian khoảng một phần tư ở trung vị và nêu các lưu ý: hai đội, tám tuần, tình nguyện viên, và một tỷ lệ mở lại cần theo dõi. Bà thống nhất với lãnh đạo rằng thời gian tiết kiệm sẽ dành cho cơ sở tri thức và các ca phức tạp, và không mục tiêu phiếu nào sẽ tăng. Quy trình lỗi thời được sửa trong cơ sở tri thức. Một quản lý cấp cao yêu cầu bắt buộc sử dụng toàn công ty và một mục tiêu 80 phần trăm chấp nhận. Bà từ chối mục tiêu, giải thích rằng mục tiêu chấp nhận sẽ thưởng cho việc không kiểm tra, và đề xuất mở rộng thí điểm sang hai đội nữa với cùng các thước đo. Quyết định được ghi lại.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy đưa AI vào theo các bước nhỏ cùng các bên liên quan, kèm một đường cơ sở và một đối chứng cho mỗi bước, và rà soát kết quả ở buổi trò chuyện cải tiến đều đặn. Điều cần lưu ý là triển khai AI ở mọi nơi cùng lúc gỡ bỏ nhóm đối chứng.

### AI

Toàn bộ chủ đề này nói về AI, nên quy tắc đơn giản: ghi lại công việc như hiện nay, đo mỗi việc dùng so với đường cơ sở đó và so với công việc tương đương làm không có AI, và ghép mọi mức tăng tốc độ với một thước đo chất lượng đã kiểm tra. Nêu tên người sở hữu cho mỗi việc dùng, và quyết định trước nơi một con người quyết định. Điều cần lưu ý là số liệu của nhà cung cấp mô tả các tổ chức khác, nên hãy dùng dữ liệu của chính bạn.

### Tự động hóa

Hãy thu thập các sự kiện sử dụng, gợi ý, chấp nhận và ghi đè tự động, và đo phần tự động hóa áp dụng đầu ra của AI theo tỷ lệ lỗi và đảo ngược của nó. Điều cần lưu ý là tỷ lệ chấp nhận có thể tăng vì mọi người ngừng kiểm tra, nên hãy lấy mẫu đầu ra được chấp nhận.

### Phân tích

Hãy báo cáo độ chính xác từ một mẫu đã rà soát kèm cỡ mẫu, và kết quả so với đối chứng kèm các giới hạn đã nêu. Quyết định được cung cấp thông tin là mở rộng, thay đổi hay dừng một việc dùng AI. Điều cần lưu ý là các thí điểm nhỏ cho kết quả nhiễu, nên tránh hứa một con số từ một thí điểm.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Công cụ được áp dụng nhanh và thường không chính thức. Hãy thu thập một đường cơ sở đơn giản về thời gian và lỗi cho việc dùng chính, giữ rà soát của con người với mọi thứ hướng tới khách hàng, và tránh bị khóa vào một nhà cung cấp duy nhất sớm. Để ý an ninh và phơi bày dữ liệu khi nhân viên dùng công cụ công cộng.

**Doanh nghiệp nhỏ.** Các trợ lý có sẵn có thể giúp thật cho việc soạn thảo và nhiệm vụ thường lệ. Hãy đo ở quy mô nhỏ: thời gian cho một vài nhiệm vụ thật và tỷ lệ sửa. Hãy cẩn thận với dữ liệu bí mật, và kiểm tra điều khoản của nhà cung cấp về cách dữ liệu được dùng.

**Doanh nghiệp lớn.** Quy mô đòi hỏi quản trị, tiêu chuẩn mua sắm và một cách tiếp cận đo lường chung. Hãy chạy thí điểm có đối chứng, công bố kết quả nội bộ, và chia sẻ đường cơ sở và phương pháp giữa các đội. Đề phòng các chương trình báo cáo mức sử dụng là thành công.

**Chính phủ và khu vực công.** Các quyết định ảnh hưởng đến công dân có thể chịu nghĩa vụ pháp lý về minh bạch, công bằng và rà soát của con người. Hãy phân loại các việc dùng theo rủi ro, giữ hồ sơ về cách AI được dùng trong quyết định, và công khai về điều đó. Quy tắc mua sắm và bảo vệ dữ liệu áp dụng, và một số khu vực pháp lý có luật AI cụ thể cần được kiểm tra tính đến hôm nay (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là giấy phép hoặc phí sử dụng, tích hợp, đào tạo, thời gian để thu thập đường cơ sở và chạy so sánh, thời gian của con người dành để rà soát và sửa đầu ra, và công sức quản trị. Chi phí có thể tăng theo mức sử dụng và thay đổi theo giá của nhà cung cấp, nên hãy mô hình hóa một khoảng.

Lợi tức tiềm năng là thời gian thu hồi được trên các nhiệm vụ lặp lại, soạn thảo và tìm kiếm nhanh hơn, độ phủ tri thức tốt hơn, và sự giải thoát cho nhân viên khỏi công việc tẻ nhạt. Đây là những khả năng để kiểm thử, không phải giả định để ghi vào sổ. Hãy xây hồ sơ từ các thí điểm của chính bạn: thời gian nhiệm vụ đo được đến một kết quả đã kiểm tra, độ chính xác đã rà soát, làm lại, và chi phí đầy đủ mỗi nhiệm vụ, so với đường cơ sở và đối chứng. Tránh trích dẫn tỷ lệ phần trăm năng suất từ nguồn của nhà cung cấp hay khảo sát trừ khi bạn truy được phương pháp và mức phù hợp với công việc của bạn. Gồm rủi ro của các sai lầm đến được với người dùng và chi phí quản trị công cụ (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Đưa AI vào mà không có đường cơ sở.** Bạn không biết cái gì đã đổi. Hãy thu thập nó trước.
- **Đo tốc độ tạo ra.** Khoản tiết kiệm có thể biến mất trong rà soát. Hãy đo thời gian đến kết quả đã kiểm tra.
- **Mục tiêu áp dụng.** Chúng tạo ra sử dụng không có giá trị. Hãy coi độ phủ là mô tả.
- **Tin các tuyên bố của nhà cung cấp.** Chúng là giả thuyết. Hãy kiểm thử trên công việc của bạn.
- **Rà soát không thật.** Thiên kiến tự động hóa biến rà soát thành con dấu đóng cho có. Hãy lấy mẫu và kiểm tra độc lập.
- **Chuyển thời gian tiết kiệm thành nhu cầu nhiều hơn.** Nó xói mòn lòng tin và nhịp độ bền vững. Hãy quyết định trước thời gian đó để làm gì.
- **Giám sát mức sử dụng cá nhân.** Nó gieo nỗi sợ. Hãy tổng hợp ở cấp đội.
- **Thí điểm không có hồi kết.** Chúng trở thành vĩnh viễn theo mặc định. Hãy đặt tiêu chí thoát.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Mục đích và đường cơ sở | Công cụ được áp dụng do nhiệt tình | Trường hợp sử dụng được liệt kê | Sổ đăng ký kèm vấn đề, lớp rủi ro, đường cơ sở và chỉ báo cho mỗi việc dùng | Đường cơ sở và so sánh được yêu cầu trước khi mở rộng; kết quả được công bố | Đường cơ sở và phương pháp chung giữa các đội và đối tác; việc dùng được cho nghỉ hưu khi bằng chứng phai |
| Bằng chứng về lợi ích | Giai thoại và tuyên bố của nhà cung cấp | Ước lượng thời gian không chính thức | Nhiệm vụ được bấm giờ; độ chính xác lấy mẫu; chi phí đầy đủ mỗi nhiệm vụ | Chuyển động kết quả so với đối chứng được báo cáo kèm giới hạn | Cái nhìn danh mục về nơi AI giúp ích, với việc học được chia sẻ rộng |
| Con người và nhịp độ | Mệnh lệnh; giám sát | Sự cẩn trọng không chính thức | Chỉ dữ liệu cấp đội; thời gian tiết kiệm được phân bổ theo thỏa thuận | Mối lo được theo dõi; kỹ năng và mức hài lòng được đo | Đồng thiết kế việc dùng AI với người dùng và nhân viên; nhịp độ bền vững được bảo vệ |

## Danh sách kiểm tra

- [ ] Mỗi việc dùng AI có vấn đề, lớp rủi ro, người sở hữu và tiêu chí thoát bằng văn bản.
- [ ] Một đường cơ sở có ngày tồn tại cho mỗi thí điểm trước lần dùng đầu tiên.
- [ ] Một nhóm đối chứng hoặc nhiệm vụ đối chứng được định nghĩa trước.
- [ ] Thời gian được đo đến một kết quả hoàn chỉnh, đã kiểm tra.
- [ ] Đầu ra được lấy mẫu hằng tháng và rà soát bởi những người có trình độ, độc lập.
- [ ] Chi phí đầy đủ mỗi nhiệm vụ gồm rà soát và làm lại.
- [ ] Dữ liệu sử dụng được tổng hợp ở cấp đội và không dùng cho cá nhân.
- [ ] Đội đã thống nhất làm gì với thời gian tiết kiệm.
- [ ] Người dùng được hỏi về trải nghiệm của họ với công cụ.
- [ ] Thí điểm kết thúc bằng một quyết định được ghi lại là mở rộng, điều chỉnh hay dừng.

## Lời nhắc AI

**Soạn một mục trường hợp sử dụng.**

```text
We are considering using AI for [task] in [team and service]. Draft a use case
register entry: the problem and who feels it, the outcome that should improve,
risk classification and why, the human review step, baseline indicators to
capture now, a comparison approach, cost components to track, exit criteria,
and questions for the team. Do not assume specific vendor features or claim
benefits. List your assumptions.
```

**Thiết kế một nghiên cứu nhiệm vụ được bấm giờ.**

```text
Design a small study to measure the effect of an AI assistant on [task]. Propose
how to select tasks, how to compare with and without the tool fairly, what to
time (including prompting, review, and correction), how to judge output quality,
and how to avoid bias. Keep it practical for a team of [number] people.
Do not state expected results. List your assumptions and limits of the design.
```

**Lập kế hoạch lấy mẫu đầu ra.**

```text
Our AI-assisted outputs per month are about [number] of types [list]. Design a
monthly random sampling and review process: sample size and selection method (with
the reasoning, avoiding overstated precision), who reviews, the written standard,
error categories, how to report, and how to use findings. List your assumptions
and risks.
```

**Quyết định làm gì với thời gian tiết kiệm.**

```text
Our pilot saved a median of [value] per task for [number] tasks per week in
[team]. Suggest options for using the time that support quality, learning, and
a sustainable pace, with the trade-offs and risks of each, and a way to agree
the choice with the team and leaders. Do not assume the savings will persist.
List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số liên quan đến AI trước khi báo cáo nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số AI ghi lại đường cơ sở, đối chứng, vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Thu thập một đường cơ sở có ngày trước khi AI được dùng, và so sánh với công việc tương tự làm không có nó.
- Đo thời gian đến một kết quả hoàn chỉnh, đã kiểm tra, và lấy mẫu đầu ra để kiểm tra độ chính xác với người rà soát độc lập.
- Tính chi phí đầy đủ, gồm rà soát và làm lại.
- Coi mức sử dụng và chấp nhận là mô tả, không bao giờ là mục tiêu.
- Quyết định trước làm gì với thời gian tiết kiệm, và giữ một nhịp độ bền vững.
- Giữ dữ liệu sử dụng ở cấp đội, và kết thúc mọi thí điểm bằng một quyết định được ghi lại.

## Tài liệu tham khảo và đọc thêm

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
