# Chỉ số nhà cung cấp và hợp đồng

**Nhà cung cấp là một phần của dịch vụ của bạn, nên hãy đo những gì họ giao, bạn phụ thuộc vào họ nhiều đến đâu, và liệu bạn có thể rời đi không, và xây quan hệ quanh kết quả chung và đối thoại đều đặn, không phải quanh hình phạt và bất ngờ.**

## Tổng quan và động lực

Hầu như không dịch vụ nào do một đội một mình xây và vận hành. Nhà cung cấp đám mây lưu trữ nó, nhà bán hàng cung cấp phần mềm, nhà thầu cung cấp nhân sự cho bàn dịch vụ, một công ty viễn thông chở lưu lượng, và một đối tác thanh toán chuyển tiền. Khi một trong số họ thất bại, người dùng của bạn không phân biệt thất bại của bạn và của họ. [Quản lý nhà cung cấp](https://en.wikipedia.org/wiki/Vendor_management) là kỷ luật lựa chọn, ký hợp đồng, giám sát và, khi cần, rời bỏ nhà cung cấp. Thực hành quản lý nhà cung cấp của ITIL mô tả nó là đảm bảo nhà cung cấp và hiệu suất của họ được quản lý phù hợp để hỗ trợ phân phối dịch vụ không có khoảng trống.

[Thuê ngoài](https://en.wikipedia.org/wiki/Outsourcing) chuyển công việc cho một bên bên ngoài và không chuyển trách nhiệm giải trình: tổ chức vẫn phải giải trình với khách hàng và cơ quan quản lý. Do đó hợp đồng là phương tiện phối hợp và phân bổ rủi ro, không phải sự chuyển giao trách nhiệm. Khi có nhiều nhà cung cấp, [đa nguồn cung](https://en.wikipedia.org/wiki/Multisourcing) và thực hành [tích hợp và quản lý dịch vụ](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) phối hợp họ để người dùng thấy một dịch vụ. Các thước đo trong chủ đề này mô tả sức khỏe của mạng lưới đó.

Các giá trị linh hoạt cho một định hướng hữu ích. Tuyên ngôn Linh hoạt nêu sự ưu tiên cho cộng tác với khách hàng hơn thương lượng hợp đồng. Điều đó không có nghĩa là phớt lờ hợp đồng, thứ phân bổ rủi ro và tiền thật. Nó có nghĩa là xây dựng các quan hệ trong đó nhà cung cấp và khách hàng làm việc vì cùng kết quả, chia sẻ thông tin sớm, và điều chỉnh khi họ học. Nhà cung cấp được đối xử như đối tác báo cho bạn về vấn đề sớm hơn. Nhà cung cấp sợ bị phạt thì giấu chúng. Đo lường nên hỗ trợ mẫu hình thứ nhất.

Bốn vấn đề lặp lại trong đo lường nhà cung cấp.

- **Báo cáo xanh và người dùng không hài lòng.** Một nhà cung cấp có thể đáp ứng mọi mức dịch vụ theo hợp đồng mà vẫn mang lại trải nghiệm kém, một mẫu hình mà chủ đề trước về thỏa thuận mức dịch vụ gọi là hiệu ứng dưa hấu (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA). Hợp đồng đo điều nó nói, và người dùng trải nghiệm điều rộng hơn.
- **Tập trung và bị khóa.** Phụ thuộc nhiều vào một nhà cung cấp thì hiệu quả cho đến khi nó thất bại hoặc tăng giá. [Bị khóa nhà cung cấp](https://en.wikipedia.org/wiki/Vendor_lock-in) làm việc thay đổi tốn kém, và chi phí lớn lên âm thầm theo mỗi tích hợp.
- **Phụ thuộc ẩn.** Nhà cung cấp của bạn cũng có nhà cung cấp. Một [cuộc tấn công chuỗi cung ứng](https://en.wikipedia.org/wiki/Supply_chain_attack) nhắm vào một nhà bán hàng đáng tin để tiếp cận khách hàng của họ, và một thất bại ở nhà thầu phụ có thể đến với bạn mà không có liên lạc nào từ nhà cung cấp trực tiếp.
- **Thoát chỉ là điều nghĩ sau.** Nhiều hợp đồng được ký mà không có kế hoạch để kết thúc chúng. Một [chiến lược thoát](https://en.wikipedia.org/wiki/Exit_strategy) chưa từng được kiểm thử có thể không hoạt động khi cần.

Một cân nhắc khác là hình thức hợp đồng. [Hợp đồng dựa trên hiệu suất](https://en.wikipedia.org/wiki/Performance-based_contracting) gắn thanh toán với kết quả, và nó có thể căn chỉnh lợi ích khi kết quả rõ ràng và đo được. Nó cũng có thể mời gọi sự lợi dụng khi các thước đo hẹp. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng theo cả hai hướng: nhà cung cấp tối ưu hóa mức dịch vụ được đo, và bên mua tối ưu hóa khoản tiết kiệm được báo cáo (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

Chủ đề này xây trên các bản ghi của phần trước, đặc biệt là dữ liệu phần mềm và tài chính (xem chủ đề 7.2, Chỉ số tài sản phần mềm và giấy phép, và chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị), và nó chuẩn bị cho các nghĩa vụ báo cáo thường rơi vào các cơ quan công (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Nguyên tắc chính

- **Bạn vẫn chịu trách nhiệm giải trình.** Hợp đồng phân bổ rủi ro và tiền, và chúng không chuyển trách nhiệm cho người dùng và cơ quan quản lý.
- **Đo kết quả và trải nghiệm cũng như điều khoản hợp đồng.** Một báo cáo hợp đồng xanh có thể giấu một dịch vụ kém.
- **Biết các phụ thuộc của bạn.** Vẽ bản đồ nhà cung cấp trọng yếu, nhà thầu phụ chính của họ, và các dịch vụ dựa vào họ.
- **Lập kế hoạch thoát trước khi ký.** Một kế hoạch thoát chưa kiểm thử là một hy vọng.
- **Cộng tác đều đặn.** Các buổi rà soát chung thường xuyên, thẳng thắn tốt hơn các cuộc họp khủng hoảng hằng năm.
- **Chia sẻ dữ liệu cởi mở.** Cả hai phía đều hưởng lợi từ cùng các con số.
- **Phân biệt nhà cung cấp theo mức độ trọng yếu.** Dành công sức quản lý nơi thất bại gây hại nhất.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mức đạt được mức dịch vụ của nhà cung cấp | Tỷ lệ các thước đo mức dịch vụ theo hợp đồng mà một nhà cung cấp đáp ứng, ghép với một thước đo trải nghiệm cho cùng dịch vụ | số thước đo đạt trong kỳ / số thước đo theo hợp đồng; báo cáo cạnh điểm trải nghiệm người dùng của dịch vụ | phần trăm | Báo cáo nhà cung cấp, giám sát của chính bạn, dữ liệu khảo sát | Quản lý nhà cung cấp; quản lý mức dịch vụ | Rà soát đóng góp của một đối tác vào mục tiêu | Hằng tháng |
| Thời gian sự cố quy cho nhà cung cấp | Số giờ tác động dịch vụ được quy cho một thành phần hoặc hành động của nhà cung cấp | tổng số giờ tác động của các sự cố mà thất bại của nhà cung cấp là nguyên nhân đã xác nhận | giờ | Bản ghi sự cố kèm phân tích nguyên nhân, báo cáo sự cố của nhà cung cấp | Quản lý sự cố; quản lý nhà cung cấp | Thời gian mất vì các trở ngại bên ngoài | Hằng tháng |
| Độ phủ sổ đăng ký hợp đồng | Tỷ lệ nhà cung cấp có hợp đồng hiện hành, một người sở hữu nội bộ được nêu tên và một buổi rà soát đã lên lịch | số nhà cung cấp có cả ba / số nhà cung cấp trong phạm vi | phần trăm | Sổ đăng ký hợp đồng, hồ sơ mua sắm | Quản lý nhà cung cấp; quản lý tài chính | Quyền sở hữu rõ ràng của các phụ thuộc bên ngoài | Hằng quý |
| Độ hiện hành của thẩm định | Tỷ lệ nhà cung cấp trọng yếu có đánh giá rủi ro trong chu kỳ rà soát | số nhà cung cấp trọng yếu được đánh giá trong chu kỳ / số nhà cung cấp trọng yếu | phần trăm | Đánh giá rủi ro nhà cung cấp | Quản lý nhà cung cấp; quản lý rủi ro; quản lý an toàn thông tin | Rà soát rủi ro đều đặn | Hằng quý |
| Mức sẵn sàng thoát | Tỷ lệ nhà cung cấp trọng yếu có kế hoạch thoát được ghi tài liệu đã được kiểm thử trong khoảng thời gian đã thống nhất | số nhà cung cấp trọng yếu có kế hoạch thoát đã kiểm thử / số nhà cung cấp trọng yếu | phần trăm | Kế hoạch thoát và bản ghi kiểm thử | Quản lý nhà cung cấp; quản lý liên tục dịch vụ | Phục hồi một phụ thuộc đã được tập dượt | Hằng năm |
| Sự tập trung | Tỷ lệ dịch vụ trọng yếu phụ thuộc vào một nhà cung cấp duy nhất mà không có phương án thay thế đã kiểm thử | số dịch vụ trọng yếu có phụ thuộc nhà cung cấp đơn lẻ và không có phương án thay thế đã kiểm thử / số dịch vụ trọng yếu | phần trăm | Bản đồ phụ thuộc, sổ đăng ký nhà cung cấp | Quản lý nhà cung cấp; quản lý rủi ro | Tránh một điểm hỏng duy nhất | Hằng quý |
| Tỷ lệ đóng hành động chung | Tỷ lệ hành động đã thống nhất trong các buổi rà soát chung với nhà cung cấp được đóng đúng hạn | số hành động chung đóng đúng ngày / số hành động chung đến hạn | phần trăm | Biên bản rà soát và công cụ theo dõi hành động | Quản lý nhà cung cấp; cải tiến liên tục | Hành động hồi cứu được giao | Hằng quý |

Hãy định nghĩa mức độ trọng yếu trong sổ đăng ký, kèm tiêu chí, và áp dụng nhất quán. Một thước đo mức dịch vụ là "đạt" như được định nghĩa trong hợp đồng, và thước đo trải nghiệm là thước đo bạn chọn cho cùng dịch vụ. Thời gian sự cố quy cho nhà cung cấp chỉ đếm các nguyên nhân đã xác nhận, và phương pháp quy được thống nhất với nhà cung cấp nơi có thể. Mức sẵn sàng thoát chỉ tính một kế hoạch là đã kiểm thử khi một buổi duyệt qua hoặc bài diễn tập đã được ghi lại trong kỳ.

## Khuyến nghị

### Biết nhà cung cấp của bạn và cái gì phụ thuộc vào họ

**1. Giữ một sổ đăng ký nhà cung cấp kèm người sở hữu và mức độ trọng yếu.** Liệt kê mọi nhà cung cấp có hợp đồng, họ cung cấp gì, người sở hữu nội bộ, ngày hợp đồng và mức độ trọng yếu. Gồm cả các dịch vụ miễn phí hoặc không chính thức mà các đội của bạn dựa vào. Mức độ trọng yếu là một phán đoán về tác hại nếu nhà cung cấp thất bại, và nó quyết định mối quan hệ nhận được bao nhiêu sự chú ý quản lý.

**2. Vẽ bản đồ chuỗi phụ thuộc cho các dịch vụ trọng yếu.** Với mỗi dịch vụ trọng yếu, liệt kê các nhà cung cấp nó phụ thuộc và, nơi có thể, các nhà thầu phụ chính và nền tảng dùng chung của họ. Hãy dùng bản ghi cấu hình cho các liên kết nội bộ, và hỏi nhà cung cấp về các phụ thuộc trọng yếu của họ (xem chủ đề 7.4, Chỉ số chất lượng cấu hình và CMDB). Bản đồ cho thấy rủi ro tập trung và cho bạn biết một sự cố ngừng hoạt động ở nơi khác sẽ chạm đến bạn ở đâu.

**3. Đánh giá rủi ro tương xứng.** Dùng một đánh giá ngắn, chuẩn cho nhà cung cấp rủi ro thấp và một đánh giá sâu hơn cho nhà cung cấp trọng yếu, bao quát an ninh, khả năng phục hồi, ổn định tài chính và tuân thủ. Đánh giá lại theo chu kỳ và khi có điều gì thay đổi. Chia sẻ kết quả với nhà cung cấp và thống nhất hành động. Các tiêu chuẩn như ISO/IEC 27036 đưa hướng dẫn về an toàn thông tin trong quan hệ với nhà cung cấp.

### Viết hợp đồng cho kết quả và hợp tác

**4. Định nghĩa mức dịch vụ phản ánh điều người dùng trải nghiệm.** Hãy gồm các thước đo theo hợp đồng liên quan đến kết quả của người dùng, như tốc độ của hành động hướng tới người dùng, cũng như tính sẵn sàng của thành phần. Hãy yêu cầu dữ liệu để tự kiểm tra chúng. Một [thỏa thuận mức dịch vụ](https://en.wikipedia.org/wiki/Service-level_agreement) có các thước đo mà không ai xác minh được, hoặc không khớp với điều người dùng cảm nhận, tạo ra hiệu ứng dưa hấu.

**5. Ưu tiên mục tiêu chung hơn chỉ hình phạt.** Tín dụng cho mục tiêu bị bỏ lỡ là phổ biến và có chỗ của nó, nhưng một hợp đồng chủ yếu xây trên hình phạt làm quan hệ đối kháng và dữ liệu kém trung thực. Nơi có thể, hãy gồm mục tiêu chung, các buổi rà soát chung đều đặn, và chia sẻ lợi ích cho các cải tiến. Hãy rà soát động cơ khuyến khích về các tác dụng phụ nó có thể gây ra.

**6. Lập kế hoạch thoát trong hợp đồng.** Hãy gồm xuất dữ liệu ở định dạng dùng được, hỗ trợ trong quá trình chuyển đổi, thông báo hợp lý, và sự rõ ràng về sở hữu trí tuệ và quyền sở hữu cấu hình. Hãy hỏi rời đi sẽ tốn bao nhiêu và viết ra. Một hợp đồng không có điều khoản thoát khiến bạn phải thương lượng dưới áp lực.

### Quản lý quan hệ

**7. Tổ chức các buổi rà soát chung đều đặn.** Hãy họp với nhịp phù hợp với mức độ trọng yếu, kèm một chương trình chuẩn ngắn: kết quả, sự cố, rủi ro, thay đổi sắp tới và hành động. Chia sẻ các thước đo của chính bạn với nhà cung cấp và hỏi của họ. Theo dõi hành động và việc đóng. Coi cuộc họp là một buổi làm việc giữa các đối tác, và mời những người làm công việc.

**8. Chia sẻ thông tin sự cố nhanh và cởi mở.** Hãy thống nhất cách và tốc độ mỗi bên sẽ thông báo cho bên kia, và rà soát chung các sự cố đáng kể theo cách không đổ lỗi (xem chủ đề 3.4, Chỉ số sự cố lớn). Đo thời gian sự cố quy cho nhà cung cấp để thấy tác động lớn nhất ở đâu, và dùng nó trong cuộc trò chuyện, không phải như cây gậy.

**9. Kết hợp dữ liệu hợp đồng với trải nghiệm người dùng.** Với mỗi dịch vụ nhà cung cấp trọng yếu, đặt các thước đo theo hợp đồng cạnh các thước đo mức hài lòng hoặc công sức từ người dùng (xem chủ đề 6.2, Thỏa thuận mức trải nghiệm). Sự bất đồng giữa hai bên là điểm khởi đầu cho một cuộc thảo luận.

**10. Phối hợp các nhà cung cấp thành một dịch vụ.** Nơi nhiều nhà cung cấp đóng góp vào một dịch vụ, hãy thống nhất ai sở hữu kết quả từ đầu đến cuối, các bàn giao hoạt động ra sao, và ai giao tiếp với người dùng. Các thực hành SIAM chính thức hóa điều này. Hãy đo độ trễ bàn giao và các lần leo thang lặp lại giữa các nhà cung cấp (xem chủ đề 9.3, Chỉ số cộng tác và bàn giao).

### Giảm sự tập trung và chuẩn bị rời đi

**11. Đo sự tập trung và quyết định có chủ ý.** Hãy báo cáo tỷ lệ dịch vụ trọng yếu phụ thuộc vào một nhà cung cấp duy nhất mà không có phương án thay thế đã kiểm thử. Sự tập trung đôi khi là lựa chọn đúng, vì nó mang lại sự đơn giản và sức nặng thương lượng. Hãy làm nó thành một quyết định có người sở hữu, chi phí và ngày rà soát, không phải một tai nạn.

**12. Kiểm thử việc thoát.** Với nhà cung cấp trọng yếu, hãy duyệt qua kế hoạch thoát ít nhất một lần trong một khoảng xác định: bạn có xuất được dữ liệu không, phương án thay thế có tồn tại không, mất bao lâu, cái gì sẽ hỏng? Một bài diễn tập trên bàn lộ ra khoảng trống với chi phí rẻ. Hãy ghi kết quả và sửa các khoảng trống, và cập nhật kế hoạch khi kiến trúc thay đổi.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Mức đạt được mức dịch vụ của nhà cung cấp | Nhà cung cấp loại sự kiện khỏi phép đo; đồng hồ tạm dừng; định nghĩa hẹp | Giám sát của chính bạn; thước đo trải nghiệm; kiểm toán các loại trừ |
| Thời gian sự cố quy cho nhà cung cấp | Tranh cãi việc quy; phân loại lỗi nhà cung cấp là phía khách hàng | Rà soát nguyên nhân chung; người rà soát trung lập cho tranh chấp; theo dõi tỷ lệ bị tranh chấp |
| Độ phủ sổ đăng ký hợp đồng | Nêu tên người sở hữu không biết; liệt kê hợp đồng không có ngày | Xác nhận người sở hữu; kiểm tra các buổi rà soát có được tổ chức |
| Độ hiện hành của thẩm định | Đánh giá chỉ bằng bảng hỏi; nhà cung cấp tự chứng nhận | Yêu cầu bằng chứng cho nhà cung cấp trọng yếu; xác minh theo mẫu |
| Mức sẵn sàng thoát | Viết một kế hoạch rồi gọi là đã kiểm thử; diễn tập không có bước thật | Ghi lại những gì đã được diễn tập; rà soát độc lập bài diễn tập |
| Sự tập trung | Tách một nhà cung cấp thành nhiều pháp nhân trên giấy | Bản đồ phụ thuộc tới nhà cung cấp cuối cùng; rà soát nền tảng dùng chung |
| Tỷ lệ đóng hành động chung | Đặt hành động dễ; đóng mà không có hiệu quả | Rà soát chất lượng hành động; kiểm tra vấn đề dự định đã cải thiện |

Một kết quả đọc lành mạnh là một sổ đăng ký nhà cung cấp với người sở hữu năng động, mức dịch vụ khớp với trải nghiệm người dùng, sự cố được thảo luận cởi mở, sự tập trung được chọn có chủ ý, và các kế hoạch thoát đã được diễn tập.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Một nhà cung cấp | Đơn giản, sức nặng thương lượng, tích hợp | Rủi ro tập trung, bị khóa |
| Nhiều nhà cung cấp | Khả năng phục hồi, lựa chọn | Chi phí tích hợp, gánh nặng phối hợp |
| Hợp đồng nặng về hình phạt | Biện pháp khắc phục rõ ràng | Đối kháng; giấu vấn đề |
| Quan hệ đối tác với mục tiêu chung | Dữ liệu trung thực, học nhanh hơn | Cần lòng tin và sự trưởng thành; biện pháp khắc phục kém rõ ràng |
| Thanh toán theo kết quả | Căn chỉnh động cơ | Khó định nghĩa và đo kết quả; lợi dụng |
| Thanh toán theo đầu vào | Đơn giản, dự đoán được | Thưởng cho công sức, không phải kết quả |
| Rà soát chung thường xuyên | Cảnh báo sớm | Tốn thời gian |
| Chỉ rà soát hằng năm | Chi phí thấp | Chậm phát hiện vấn đề |

Câu trả lời dạng văn xuôi là để dành các biện pháp khắc phục theo hợp đồng cho những trường hợp nghiêm trọng, xây quan hệ hằng ngày quanh kết quả chung và dữ liệu mở, và chọn sự tập trung có chủ đích. Hãy khớp cường độ quản lý với mức độ trọng yếu của nhà cung cấp.

## Câu hỏi để thảo luận với đội nhóm

**1. Thất bại của nhà cung cấp nào sẽ làm hại người dùng của chúng ta nhất, và kế hoạch của chúng ta là gì?**
Nêu tên ba phụ thuộc hàng đầu. Với mỗi cái, hỏi điều gì sẽ xảy ra trong một sự cố ngừng hoạt động kéo dài và kế hoạch là gì. Người điều phối nên tìm các phụ thuộc không có kế hoạch, không có người sở hữu, hoặc không có phương án thay thế đã kiểm thử. Thống nhất một cái để làm trước.

**2. Báo cáo hợp đồng xanh bất đồng với điều người dùng nói với chúng ta ở đâu?**
Lấy một dịch vụ nhà cung cấp và so sánh các thước đo hợp đồng với phản hồi người dùng. Hỏi cái nào đáng tin hơn và vì sao. Cuộc trò chuyện thường tìm ra một mức dịch vụ đo sai thứ. Thống nhất nêu nó ở buổi rà soát chung kế tiếp.

**3. Ai trong đội sở hữu từng quan hệ nhà cung cấp trọng yếu, và họ gặp nhau thường xuyên đến đâu?**
Kiểm tra sổ đăng ký. Nếu một người sở hữu đã nhiều tháng không gặp nhà cung cấp, hãy hỏi vì sao. Thống nhất một nhịp và một chương trình chuẩn cho những cái trọng yếu nhất.

**4. Cần gì để rời khỏi nhà cung cấp lớn nhất của chúng ta?**
Ước lượng thời gian, chi phí và rủi ro của việc thoát. Hỏi dữ liệu, tích hợp và kỹ năng nào trói bạn lại. Quyết định liệu sự phụ thuộc có phải là một lựa chọn có chủ ý và điều gì sẽ thay đổi nó.

**5. Chúng ta biết về sự cố của một nhà cung cấp bằng cách nào, và nhanh đến đâu?**
Rà soát hai sự cố nhà cung cấp gần nhất và thời gian từ lúc chúng bắt đầu đến khi bạn biết. Kiểm tra các điều khoản thông báo. Thống nhất các cải tiến, như nguồn cấp trạng thái chung hoặc một đầu mối được nêu tên.

**6. Chúng ta chia sẻ gì với nhà cung cấp, và họ chia sẻ gì với chúng ta?**
Liệt kê dữ liệu mỗi bên cung cấp. Thảo luận việc chia sẻ thêm gì sẽ giúp ích, như dự báo nhu cầu hoặc thông báo trước về thay đổi. Cân nhắc tính bảo mật, và thống nhất một lần trao đổi để bắt đầu.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối phụ thuộc vào nhà cung cấp về nền tảng, thành phần và dịch vụ, và họ cảm nhận trực tiếp thay đổi của nhà cung cấp. Họ nên giữ các phụ thuộc hiển thị trong thiết kế, báo sớm cho nhà cung cấp về thay đổi nhu cầu, và tham gia các buổi rà soát chung. Họ có thể xây khả năng phục hồi vào dịch vụ của mình, ví dụ bằng các phương án dự phòng, để một thất bại của nhà cung cấp không làm dừng mọi thứ.

### Đội dịch vụ và vận hành

Các đội vận hành quản lý quan hệ hằng ngày: nêu sự cố, theo dõi hiệu suất và phối hợp bàn giao. Họ nắm bằng chứng về tác động quy cho nhà cung cấp và trải nghiệm làm việc với từng nhà cung cấp. Họ nên ghi việc quy một cách cẩn thận, giữ các kênh thông báo hoạt động, và tham gia các bài diễn tập thoát.

### Lãnh đạo và quản trị

Lãnh đạo ký hợp đồng và chấp nhận rủi ro. Họ nên yêu cầu báo cáo về mức độ trọng yếu, sự tập trung và mức sẵn sàng thoát, đặt kỳ vọng về quan hệ đối tác, và tránh chọn nhà cung cấp chỉ theo giá. Quản trị nên yêu cầu thẩm định tương xứng với mức độ trọng yếu và bằng chứng rằng các kế hoạch thoát đã được kiểm thử.

### Khách hàng và người dùng

Người dùng trải nghiệm kết quả kết hợp của mạng lưới nhà cung cấp. Họ cần giao tiếp rõ ràng khi một vấn đề nhà cung cấp ảnh hưởng đến họ, và hỗ trợ nhất quán bất kể bên nào có lỗi. Phản hồi của họ là phép kiểm tra liệu hiệu suất nhà cung cấp, như được báo cáo, có khớp với thực tế không.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Phòng CNTT của một tập đoàn bệnh viện khu vực hỗ trợ các hệ thống lâm sàng với khoảng 60 nhà cung cấp, gồm một nhà cung cấp lưu trữ, một nhà bán hồ sơ điện tử, một nhà mạng, và một bàn dịch vụ được quản lý. Các con số dưới đây chỉ mang tính minh họa.

Sau một sự cố ngừng hoạt động dài của hệ thống hồ sơ, hội đồng hỏi có bao nhiêu phụ thuộc như vậy. Trưởng bộ phận quản lý nhà cung cấp dựng nên bức tranh. Sổ đăng ký nhà cung cấp bao quát 47 trên 60 nhà cung cấp đã biết có hợp đồng hiện hành, một người sở hữu và một ngày rà soát, độ phủ 78 phần trăm. Thẩm định còn hiện hành cho 6 trên 14 nhà cung cấp trọng yếu. Trong 22 dịch vụ trọng yếu, 9 phụ thuộc vào một nhà cung cấp duy nhất không có phương án thay thế đã kiểm thử, mức tập trung 41 phần trăm, và hai trong số các nhà cung cấp đó dùng chung một nền tảng lưu trữ. Bàn dịch vụ được quản lý báo cáo mức đạt được mức dịch vụ 98 phần trăm, trong khi mức hài lòng của nhân viên lâm sàng với bàn dịch vụ đang giảm, và báo cáo hằng tháng cho thấy các sự cố chờ tuyến hai của nhà cung cấp bị loại khỏi thời gian phản hồi được đo. Trong quý vừa qua, thời gian sự cố quy cho nhà cung cấp tổng cộng 53 giờ, ba phần tư đến từ hai nhà cung cấp. Kế hoạch thoát cho nhà bán hồ sơ tồn tại trên giấy và chưa từng được diễn tập.

Trưởng bộ phận quản lý nhà cung cấp thống nhất các thay đổi với chủ sở hữu hệ thống lâm sàng và các nhà cung cấp. Nhà cung cấp trọng yếu có một buổi rà soát chung hằng quý với chương trình chung và dữ liệu từ cả hai phía. Hợp đồng bàn dịch vụ được sửa để đo thời gian đến giải quyết từ góc nhìn của người dùng, và nhà cung cấp đồng ý chia sẻ dữ liệu hàng đợi của mình. Một khảo sát trải nghiệm ngắn được thêm bên cạnh các thước đo hợp đồng. Thẩm định cho nhà cung cấp trọng yếu chuyển sang chu kỳ hằng năm kèm yêu cầu bằng chứng. Đội chạy một bài diễn tập thoát trên bàn cho nhà bán hồ sơ, tìm ra rằng định dạng xuất dữ liệu không gồm dấu vết kiểm toán, và phương án thay thế sẽ mất nhiều tháng để chuẩn bị. Phát hiện đi vào cuộc thương lượng hợp đồng kế tiếp. Tập đoàn cũng quyết định trong chín phụ thuộc nhà cung cấp đơn lẻ, cái nào sẽ chấp nhận có chủ ý, và cái nào sẽ giảm.

Một năm sau, độ phủ sổ đăng ký là 96 phần trăm, thẩm định hiện hành cho 13 trên 14 nhà cung cấp trọng yếu, và mức tập trung là 27 phần trăm với mỗi trường hợp còn lại được ghi như một quyết định đã chấp nhận. Thời gian sự cố quy cho nhà cung cấp giảm còn 22 giờ mỗi quý. Thước đo hợp đồng của bàn dịch vụ và điểm hài lòng lâm sàng nay chuyển động cùng nhau. Giám đốc tài chính yêu cầu một điều khoản áp đặt hình phạt tài chính cho mọi mức dịch vụ bị bỏ lỡ trên tất cả nhà cung cấp. Trưởng bộ phận quản lý nhà cung cấp đề xuất chỉ phạt cho các thước đo trọng yếu liên quan đến an toàn, và mục tiêu chung cho phần còn lại, giải thích rằng hình phạt đại trà khiến nhà cung cấp giấu sự kiện và tranh cãi về đo lường. Quyết định được ghi lại, và mẫu hợp đồng được cập nhật.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy xây quan hệ nhà cung cấp quanh kết quả chung và đối thoại đều đặn. Điều cần lưu ý là các thước đo dựa trên hình phạt dẫn đến tranh cãi về định nghĩa.

### AI

Nhà cung cấp có thể nhúng AI vào dịch vụ của họ, nên hãy hỏi tính năng AI nào được dùng, với dữ liệu gì, và ai giám sát chúng, và đo độ phủ công bố AI của nhà cung cấp. Điều cần lưu ý là các tuyên bố của nhà cung cấp về AI nên được kiểm tra với điều khoản hợp đồng.

### Tự động hóa

Hãy thu thập dữ liệu hiệu suất nhà cung cấp tự động nơi có thể và tự động hóa nhắc ngày hợp đồng. Đo tự động hóa theo các lần gia hạn bị bỏ lỡ. Điều cần lưu ý là các nguồn cấp tự động từ nhà cung cấp dùng định nghĩa của họ, nên hãy đối chiếu chúng.

### Phân tích

Hãy báo cáo mức đạt được của nhà cung cấp kèm quy tắc quy cho sự cố. Quyết định được cung cấp thông tin là gia hạn, thương lượng lại hay thoát. Điều cần lưu ý là sự tập trung và mức sẵn sàng thoát là các phán đoán, nên hãy ghi tài liệu lý do.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Nhà cung cấp chủ yếu là công cụ đám mây và phần mềm dưới dạng dịch vụ. Hãy giữ một danh sách có người sở hữu và ngày gia hạn, biết mỗi nơi giữ dữ liệu gì, và giữ một bản xuất của dữ liệu trọng yếu. Chọn nhà cung cấp có đường xuất rõ ràng, vì việc bị khóa sớm thì rẻ để tạo ra và tốn kém để gỡ.

**Doanh nghiệp nhỏ.** Một vài nhà cung cấp gánh doanh nghiệp, và chủ thường quản lý họ trực tiếp. Hãy giữ liên hệ và điều khoản hợp đồng ở một nơi, yêu cầu cập nhật trạng thái và sự cố, và kiểm thử khôi phục từ bản sao lưu được giữ ngoài nhà cung cấp. Giảm sự phụ thuộc vào một cá nhân duy nhất ở nhà cung cấp.

**Doanh nghiệp lớn.** Nhiều nhà cung cấp và nhiều tầng đòi hỏi một chức năng quản lý nhà cung cấp, các bậc mức độ trọng yếu, và điều khoản hợp đồng chuẩn về an ninh, khả năng phục hồi và thoát. Hãy dùng phối hợp kiểu SIAM nơi các nhà cung cấp phải làm việc cùng nhau. Giữ một bản đồ phụ thuộc trung tâm và chia sẻ nó với các đội rủi ro và liên tục.

**Chính phủ và khu vực công.** Luật mua sắm, quy tắc cạnh tranh và yêu cầu minh bạch định hình cách nhà cung cấp được chọn và quản lý. Hợp đồng có thể dài, với nghĩa vụ báo cáo công khai và yêu cầu về chủ quyền, khả năng tiếp cận và thoát. Hãy ghi tài liệu quyết định, báo cáo hiệu suất nhà cung cấp theo yêu cầu, và lập kế hoạch cho việc mua sắm lại (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là thời gian của người sở hữu nhà cung cấp và một chức năng phối hợp nhỏ, một sổ đăng ký và dữ liệu phụ thuộc, công sức đánh giá, và các buổi rà soát chung. Bài diễn tập thoát tốn vài giờ đến vài ngày cho mỗi nhà cung cấp trọng yếu. Công cụ có thể đơn giản như một sổ đăng ký dùng chung.

Lợi tức là sự cố do nhà cung cấp gây ra ít hơn và ngắn hơn, điều khoản thương mại tốt hơn nhờ thương lượng có thông tin, tránh được chi phí bị khóa, và phản ứng nhanh hơn, bình tĩnh hơn khi một nhà cung cấp thất bại. Hãy xây hồ sơ từ dữ liệu của chính bạn: số giờ sự cố quy cho nhà cung cấp và chi phí của chúng, chi phí và thời gian của các lần chuyển đổi nhà cung cấp trong quá khứ, và chênh lệch giữa mức dịch vụ theo hợp đồng và trải nghiệm do người dùng báo cáo. Tránh trích dẫn tỷ lệ thất bại thuê ngoài của ngành trừ khi bạn truy được nguồn và phương pháp. Gồm chi phí giữ một lựa chọn thứ hai ở trạng thái sẵn sàng, và so sánh nó với sự phơi bày mà nó giảm (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Ký rồi quên.** Hợp đồng trôi khỏi thực tế. Hãy tổ chức rà soát đều đặn với người sở hữu và dữ liệu.
- **Chỉ tin báo cáo của nhà cung cấp.** Nó đo điều nhà cung cấp chọn. Hãy giám sát độc lập và so sánh với trải nghiệm người dùng.
- **Quan hệ chỉ có hình phạt.** Chúng làm giảm sự trung thực. Hãy xây mục tiêu chung song song với các biện pháp khắc phục.
- **Không có kế hoạch thoát.** Rời đi trở thành khủng hoảng. Hãy viết và kiểm thử kế hoạch trước khi cần.
- **Sự tập trung ẩn.** Nhiều nhà cung cấp có thể dùng chung một nền tảng. Hãy vẽ bản đồ tới nhà cung cấp cuối cùng.
- **Đổ lỗi trong các buổi rà soát chung.** Nhà cung cấp che giấu sự cố. Hãy rà soát sự cố không đổ lỗi.
- **Quản lý mọi nhà cung cấp như nhau.** Nó lãng phí công sức cho nhà cung cấp nhỏ và bỏ bê nhà cung cấp trọng yếu. Hãy phân bậc theo mức độ trọng yếu.
- **Phớt lờ nhà thầu phụ.** Rủi ro của bạn gồm cả của họ. Hãy hỏi về các phụ thuộc trọng yếu.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Biết nhà cung cấp | Hợp đồng rải rác | Sổ đăng ký cho các nhà cung cấp chính | Sổ đăng ký kèm người sở hữu, mức độ trọng yếu và ngày rà soát | Bản đồ phụ thuộc tới nhà thầu phụ; độ phủ và độ hiện hành được theo dõi | Cái nhìn phụ thuộc chung với nhà cung cấp và khách hàng |
| Hiệu suất và quan hệ | Phản ứng; tranh chấp | Báo cáo hằng tháng từ nhà cung cấp | Thước đo hợp đồng và trải nghiệm được so sánh; rà soát chung đều đặn | Hành động được theo dõi; sự cố được rà soát chung; việc quy được thống nhất | Nhà cung cấp được tích hợp như đối tác với mục tiêu chung và dữ liệu mở |
| Khả năng phục hồi và thoát | Không có | Điều khoản thoát trong một số hợp đồng | Kế hoạch thoát cho nhà cung cấp trọng yếu | Kế hoạch thoát được diễn tập; sự tập trung được quyết định có chủ ý | Phương án thay thế được giữ sẵn sàng; diễn tập chung với nhà cung cấp |

## Danh sách kiểm tra

- [ ] Một sổ đăng ký nhà cung cấp liệt kê mọi nhà cung cấp kèm người sở hữu, mức độ trọng yếu và ngày hợp đồng.
- [ ] Dịch vụ trọng yếu có bản đồ phụ thuộc vươn tới các nhà thầu phụ chính.
- [ ] Mức dịch vụ theo hợp đồng được ghép với một thước đo trải nghiệm người dùng.
- [ ] Rà soát chung với nhà cung cấp trọng yếu được tổ chức theo nhịp với chương trình chuẩn.
- [ ] Thẩm định cho nhà cung cấp trọng yếu hiện hành và dựa trên bằng chứng.
- [ ] Điều khoản và kênh thông báo sự cố được thống nhất và kiểm thử.
- [ ] Thời gian sự cố quy cho nhà cung cấp được ghi lại với việc quy đã thống nhất.
- [ ] Sự tập trung được đo và mỗi phụ thuộc nhà cung cấp đơn lẻ là một quyết định được ghi lại.
- [ ] Kế hoạch thoát tồn tại cho nhà cung cấp trọng yếu và đã được diễn tập trong kỳ.
- [ ] Điều khoản hợp đồng gồm xuất dữ liệu, hỗ trợ chuyển đổi và quyền sở hữu cấu hình.

## Lời nhắc AI

**Xây một đánh giá mức độ trọng yếu của nhà cung cấp.**

```text
We have these suppliers: [list with what each provides]. Our critical services
are: [list]. Propose criteria for rating supplier criticality (for example harm
if unavailable, data held, ease of replacement), score each supplier against
them with reasons, and suggest management intensity by tier. Do not invent
facts about the suppliers. List your assumptions and what I must confirm with
service owners.
```

**So sánh thước đo hợp đồng với trải nghiệm người dùng.**

```text
For the supplier service [name], the contract measures and results for the last
[period] are: [paste]. User experience data for the same service is: [paste
survey scores or comment themes]. Describe where they agree and disagree, give
plausible explanations for each disagreement, and suggest questions for the next
joint review. Do not assume intent by the supplier. List your assumptions.
```

**Thiết kế một bài diễn tập thoát.**

```text
Design a half-day tabletop exercise on leaving [supplier] for [service]. Include
the scenario, participants, steps to walk through (data export, alternative,
cutover, communication), what to record (time, gaps, decisions), and how to
turn findings into actions and contract changes. Do not assume specific
products. List your assumptions and risks in the exercise.
```

**Soạn chương trình cho một buổi rà soát chung.**

```text
Draft an agenda and a one-page data pack for a quarterly joint review with
[supplier] about [service]. Include results against contracted measures and
user experience, incidents and learning, risks, upcoming changes on both sides,
and action review. Keep the tone collaborative. Use these inputs: [paste].
List your assumptions and any item needing legal review.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số nhà cung cấp hoặc hợp đồng.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số nhà cung cấp mang vectơ lợi dụng, rào chắn và quy tắc quy cho sự cố của nó.

## Điểm chính cần nhớ

- Bạn vẫn chịu trách nhiệm giải trình về các dịch vụ bạn thuê ngoài, nên hãy quản lý nhà cung cấp như một phần của dịch vụ của chính bạn.
- Ghép thước đo hợp đồng với trải nghiệm người dùng, và giám sát độc lập với báo cáo của nhà cung cấp.
- Vẽ bản đồ phụ thuộc tới nhà thầu phụ, và coi sự tập trung là một quyết định có chủ ý.
- Xây quan hệ quanh kết quả chung và các buổi rà soát chung đều đặn, để các biện pháp khắc phục cho trường hợp nghiêm trọng.
- Lập kế hoạch thoát trước khi ký, và kiểm thử nó cho nhà cung cấp trọng yếu.
- Rà soát sự cố với nhà cung cấp theo cách không đổ lỗi và chia sẻ dữ liệu cởi mở.

## Tài liệu tham khảo và đọc thêm

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
