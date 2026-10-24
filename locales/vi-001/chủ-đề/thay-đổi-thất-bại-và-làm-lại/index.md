# Thay đổi thất bại và làm lại

**Hãy định nghĩa "một thay đổi thất bại" một lần, bằng văn bản, liên kết mọi thất bại với thay đổi đã gây ra nó, và đọc thất bại cùng làm lại song song với tốc độ để một con số thấp hơn nghĩa là thay đổi an toàn hơn chứ không chỉ là ít báo cáo hơn.**

## Tổng quan và động lực

Mọi thay đổi đối với một dịch vụ đang chạy đều mang một khả năng nào đó làm mọi thứ tệ đi. Các câu hỏi thực tế là điều đó xảy ra thường xuyên đến đâu, nó tạo ra bao nhiêu công việc ngoài kế hoạch, và đội phục hồi nhanh đến mức nào. Chủ đề này bao quát các thước đo trả lời chúng: tỷ lệ thay đổi thất bại, tỷ lệ cần đến con đường khẩn cấp, tỷ lệ hoàn tác và hotfix, và việc làm lại theo sau một thay đổi tồi. Nó cũng bao quát phần ít hào nhoáng nhất của đề tài, là thống nhất xem cái gì được tính là thất bại ngay từ đầu.

Trước hết là vài thuật ngữ. Trong [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, thực hành gọi là hỗ trợ thay đổi bao quát việc thêm, sửa hoặc gỡ bất cứ thứ gì có thể ảnh hưởng đến một dịch vụ. Một **thay đổi** vì vậy rộng hơn một lần triển khai mã: nó gồm một chỉnh sửa cấu hình, gia hạn chứng chỉ, một quy tắc tường lửa hoặc một lần di chuyển cơ sở dữ liệu. Một **thay đổi chuẩn** được ủy quyền trước và có rủi ro thấp, một **thay đổi thông thường** đi qua đánh giá, và một **thay đổi khẩn cấp** được thực hiện gấp, thường để khôi phục một dịch vụ hoặc đóng một lỗ hổng nghiêm trọng. Một **lần triển khai** là hành động đưa một phiên bản phần mềm vào một môi trường, trong khi một **bản phát hành** làm một khả năng sẵn có cho người dùng. Các đội dùng [công tắc tính năng](https://en.wikipedia.org/wiki/Feature_toggle) có thể triển khai mã mà không phát hành nó (xem chủ đề 4.5, Chỉ số phát hành và triển khai).

Một **thất bại thay đổi** là một thay đổi dẫn đến dịch vụ suy giảm hoặc cần khắc phục. Việc khắc phục có nhiều dạng. Một [hoàn tác](https://en.wikipedia.org/wiki/Rollback_(data_management)) đưa hệ thống về trạng thái trước. Một [hotfix](https://en.wikipedia.org/wiki/Hotfix) là một bản vá khẩn cấp áp dụng ngoài nhịp phát hành bình thường. Một bản sửa tiến tới (roll-forward) phát hành một thay đổi mới chồng lên thay đổi hỏng. [Làm lại](https://en.wikipedia.org/wiki/Rework) là công sức ngoài kế hoạch bỏ ra để làm lại hoặc sửa thứ lẽ ra đã xong. Trong bối cảnh [phân phối liên tục](https://en.wikipedia.org/wiki/Continuous_delivery), nơi các thay đổi nhỏ chảy đến môi trường thật thường xuyên, những thước đo này là bằng chứng chính về việc tốc độ có đang làm tổn hại sự ổn định không.

Hai truyền thống nhìn cùng một sự kiện khác nhau. Góc nhìn ITIL được tổ chức quanh bản ghi thay đổi: thay đổi có được ủy quyền không, nó có thành công không, và kết quả có được ghi lại không? Một thay đổi thành công trên giấy vẫn có thể gây ra một sự cố một giờ sau. Góc nhìn linh hoạt được tổ chức quanh hạng mục công việc và lần triển khai: định nghĩa hoàn thành của đội có giữ vững không, và thay đổi có gây ra công việc ngoài kế hoạch ngay sau đó không? Không góc nhìn nào đầy đủ một mình. Nghiên cứu đứng sau chương trình DORA coi tỷ lệ thay đổi thất bại và tỷ lệ làm lại triển khai là hai thước đo "bất ổn" bên cạnh các thước đo thông lượng (xem chủ đề 2.8, Chỉ số DORA, định nghĩa chúng ở cấp chương trình). Chủ đề này đi sâu hơn vào cơ chế: định nghĩa thất bại ra sao, gắn sự cố với thay đổi thế nào, công việc khẩn cấp được đếm ra sao, và các con số bị lợi dụng thế nào.

Một cảnh báo áp dụng ngay từ đầu. Những thước đo này mô tả một đội, một dịch vụ hoặc một đường ống. Chúng không bao giờ mô tả một người. Một tỷ lệ thay đổi thất bại gắn với một kỹ sư cá nhân dạy mọi người tránh công việc rủi ro mà có giá trị, chia nhỏ thay đổi cho đến khi số đếm trông đẹp, và ngừng báo cáo vấn đề (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). [Định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) cắn mạnh ở đây, vì "ít thất bại hơn" dễ đạt được bằng cách ghi lại ít thất bại hơn.

Thời điểm sự cố thuộc chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố, những sự cố tồi tệ nhất thuộc chủ đề 3.4, Chỉ số sự cố lớn, dòng chảy phê duyệt và tỷ lệ thay đổi chuẩn thuộc chủ đề 4.3, Chỉ số hỗ trợ thay đổi, nguyên nhân gốc thuộc chủ đề 4.1, Chỉ số quản lý vấn đề, và bản rà soát bằng văn bản thuộc chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi.

## Nguyên tắc chính

- **Thất bại cần một định nghĩa bằng văn bản duy nhất.** Các đội quyết định từng trường hợp tạo ra những con số không thể theo dõi xu hướng hay so sánh, và cuộc tranh cãi về định nghĩa thay thế cuộc tranh luận về công việc.
- **Một thất bại phải truy được về thay đổi của nó.** Không có liên kết được ghi lại giữa một sự cố, một lần hoàn tác hay một hotfix và thay đổi đã gây ra nó, tỷ lệ thất bại chỉ là phỏng đoán.
- **Đếm mọi con đường khắc phục.** Hoàn tác, hotfix, sửa tiến tới và cách lách thủ công là bốn lối đến cùng một sự kiện. Một chỉ số chỉ đếm một trong số chúng thưởng cho các đội vì chọn lối khác.
- **Đọc thất bại cạnh tốc độ và khôi phục.** Một tỷ lệ thay đổi thất bại đứng riêng có thể được cải thiện bằng cách thay đổi ít thường xuyên hơn, điều hiếm khi là mục tiêu. Hãy ghép nó với thời gian chờ, tần suất triển khai và thời gian khôi phục.
- **Mẫu nhỏ cần số đếm, không chỉ phần trăm.** Một đội có tám thay đổi trong một tháng và một thất bại có tỷ lệ thất bại 12,5 phần trăm nói gần như không gì, nên hãy cho thấy số đếm và dùng một cửa sổ dài hơn (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).
- **Khẩn cấp là một tín hiệu, không phải một tội lỗi.** Một tỷ lệ thay đổi khẩn cấp ổn định, được giải thích là bình thường. Một tỷ lệ tăng thường chỉ vào vấn đề về chất lượng thượng nguồn, lập kế hoạch hoặc phát hiện.

## Định nghĩa chỉ số

Các thước đo thất bại và làm lại phụ thuộc vào việc ghép bản ghi thay đổi, nhật ký triển khai và công cụ sự cố. Mỗi định nghĩa dưới đây nêu cái gì được đếm, cái gì bị loại trừ, và đồng hồ bắt đầu và dừng ở đâu. Các đội nên sao chép các định nghĩa vào sổ đăng ký chỉ số của mình và điều chỉnh chúng kèm lý do nêu rõ.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ thay đổi thất bại | Tỷ lệ thay đổi lên môi trường thật gây ra dịch vụ suy giảm hoặc cần khắc phục | số thay đổi cần hoàn tác, hotfix, sửa tiến tới, hoặc có sự cố liên kết trong cửa sổ thất bại / tất cả thay đổi lên môi trường thật hoàn tất trong kỳ; cửa sổ bắt đầu khi thay đổi hoàn tất và dừng sau một số ngày cố định (ví dụ 7), được ghi trong sổ đăng ký chỉ số; các thay đổi còn trong cửa sổ được báo cáo riêng và loại khỏi tỷ lệ cho đến khi cửa sổ đóng | phần trăm | Bản ghi thay đổi hoặc nhật ký triển khai ghép với công cụ sự cố và danh sách hotfix | Hỗ trợ thay đổi; quản lý sự cố | Định nghĩa hoàn thành; lỗi lọt ra ngoài | Hằng tháng, trên cửa sổ trượt 90 ngày |
| Tỷ lệ thay đổi khẩn cấp | Tỷ lệ thay đổi thực hiện qua con đường khẩn cấp | số thay đổi được ghi là khẩn cấp / tất cả thay đổi hoàn tất trong kỳ; khẩn cấp nghĩa là đánh giá thông thường bị bỏ qua hoặc rút ngắn vì tính khẩn, và thay đổi chuẩn được ủy quyền trước bị loại khỏi cả hai số đếm | phần trăm | Trường loại của bản ghi thay đổi | Hỗ trợ thay đổi | Công việc ngoài kế hoạch và lớp dịch vụ expedite | Hằng tháng |
| Tỷ lệ hoàn tác | Tỷ lệ thay đổi bị đảo ngược về phiên bản trước | số thay đổi bị đảo ngược sau khi đến môi trường thật / tất cả thay đổi lên môi trường thật trong kỳ; một lần hoàn tác thực hiện trước khi thay đổi đến bất kỳ người dùng nào (ví dụ một canary dừng ở bước đầu tiên) được đếm riêng | phần trăm | Nhật ký triển khai và công cụ phát hành | Quản lý phát hành; quản lý triển khai | Thực hành đường ống và phát hành | Hằng tháng |
| Tỷ lệ hotfix | Tỷ lệ thay đổi là các bản vá khẩn cấp áp dụng ngoài dòng phát hành thông thường | số thay đổi được gắn thẻ hoặc tách nhánh là hotfix / tất cả thay đổi lên môi trường thật trong kỳ; mẫu số gồm cả chính các hotfix | phần trăm | Nhánh hoặc thẻ kiểm soát phiên bản và nhật ký triển khai | Hỗ trợ thay đổi; quản lý sự cố | Công việc ngoài kế hoạch; expedite | Hằng tháng |
| Tỷ lệ làm lại triển khai | Tỷ lệ lần triển khai là các bản sửa ngoài kế hoạch cho một vấn đề trong lần triển khai trước đó | số lần triển khai lên môi trường thật sửa một lỗi hoặc thất bại trong một lần triển khai gần đây trước đó, trong cùng cửa sổ thất bại / tất cả lần triển khai lên môi trường thật trong kỳ; công việc tiếp nối có kế hoạch từ lộ trình bị loại trừ | phần trăm | Nhật ký triển khai có liên kết hoặc thẻ "fixes", và trình theo dõi công việc | Hỗ trợ thay đổi; cải tiến liên tục | Làm lại; lỗi lọt ra ngoài; nhu cầu do thất bại | Hằng tháng |
| Tỷ lệ liên kết thay đổi-sự cố | Tỷ lệ sự cố đã giải quyết ghi nhận một thay đổi có gây ra chúng không, và là thay đổi nào | số sự cố có trường "gây ra bởi thay đổi" được hoàn tất (có hoặc không, cộng định danh thay đổi khi có) / số sự cố giải quyết trong kỳ; đồng hồ dừng khi sự cố được đóng | phần trăm | Công cụ sự cố và bản ghi thay đổi | Quản lý sự cố; hỗ trợ thay đổi | Rà soát sau sự cố; định nghĩa hoàn thành | Hằng tháng |
| Mức nhất trí về định nghĩa thất bại | Mức nhất trí giữa hai người rà soát về việc một mẫu thay đổi có thất bại không | số thay đổi trong mẫu mà hai người rà soát độc lập đạt cùng kết luận thất bại theo định nghĩa bằng văn bản / số thay đổi trong mẫu; một mẫu ít nhất 20 thay đổi chọn ngẫu nhiên mỗi quý | phần trăm | Phiếu rà soát mẫu giữ cùng sổ đăng ký chỉ số | Cải tiến liên tục; đo lường và báo cáo | Buổi nhìn lại | Hằng quý |

Hai ghi chú về bảng. Tỷ lệ thất bại và tỷ lệ làm lại chồng lấp nhưng khác nhau: một thất bại được đảo ngược mà không có lần triển khai mới được tính vào tỷ lệ thất bại và không vào tỷ lệ làm lại. Và đơn vị là thay đổi hoặc lần triển khai, không phải sự cố, vì một thay đổi có thể gây ra ba sự cố và một sự cố có thể đến từ ba thay đổi.

## Khuyến nghị

### Viết định nghĩa thất bại trước khi thu thập bất kỳ dữ liệu nào

**Thống nhất "thất bại" nghĩa là gì và ghi vào sổ đăng ký chỉ số.** Một định nghĩa dùng được là một thay đổi thất bại nếu, trong một cửa sổ nêu rõ sau khi hoàn tất, nó bị hoàn tác, cần một hotfix hoặc sửa tiến tới, hoặc được liên kết với một sự cố ở mức nghiêm trọng nêu rõ trở lên. Hãy nêu cửa sổ (7 ngày là phổ biến, và giá trị đúng phụ thuộc vào việc dịch vụ của bạn lộ vấn đề nhanh đến đâu), ngưỡng mức nghiêm trọng của sự cố, và ai quyết định trong trường hợp tranh cãi. Viết ra ít nhất năm ví dụ minh họa, gồm cả những ví dụ khó như một thay đổi làm giảm hiệu năng mà không có sự cố ngừng hoạt động nào. Xem lại định nghĩa hằng năm và ghi nhật ký các thay đổi kèm lý do, để một đường xu hướng có thể được tính lại nếu quy tắc dịch chuyển.

### Liên kết thất bại với thay đổi trong bản ghi sự cố

**Thêm một trường bắt buộc vào bản ghi sự cố: gây ra bởi một thay đổi, có hoặc không, và định danh thay đổi khi có.** Trường này nên được hoàn tất trong lúc giải quyết và kiểm tra trong buổi rà soát sau sự cố (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi). Hãy theo dõi tỷ lệ liên kết như một chỉ số riêng. Nếu chỉ một nửa sự cố mang trường này, tỷ lệ thất bại đánh giá thấp sự thật một lượng không biết, và bạn nên nói điều đó cạnh con số. Hãy tự động hóa phỏng đoán đầu tiên nơi bạn có thể, ví dụ bằng cách liệt kê các thay đổi hoàn tất trên dịch vụ bị ảnh hưởng trong những giờ trước khi sự cố bắt đầu, và để một con người xác nhận.

### Đếm mọi con đường khắc phục, không chỉ một

**Định nghĩa một thất bại từ nhiều tín hiệu.** Lấy hoàn tác từ công cụ triển khai, hotfix từ kiểm soát phiên bản hoặc nhật ký phát hành, sửa tiến tới từ liên kết "fixes", và sự cố từ công cụ sự cố, rồi loại trùng theo thay đổi. Một đội chỉ đếm hoàn tác sẽ thấy thất bại biến mất vào ngày nó chuyển sang sửa tiến tới. Cũng hãy giữ mỗi con đường như một phần phân tích riêng, vì cơ cấu kể một câu chuyện: nhiều hotfix và ít hoàn tác gợi ý rằng hoàn tác khó, điều đáng sửa tự nó.

### Coi tỷ lệ thay đổi khẩn cấp là một câu hỏi, không phải điểm số

**Rà soát thay đổi khẩn cấp như một nhóm, không phải một mục tiêu.** Mỗi quý, hãy đọc tất cả chúng và sắp xếp lý do: khôi phục một dịch vụ, đóng một lỗ hổng, một yêu cầu kinh doanh muộn, một bước lập kế hoạch bị bỏ sót, hoặc một con đường phê duyệt quá chậm cho công việc thông thường. Hai cái cuối là vấn đề hệ thống nên được sửa bằng cách cải thiện con đường chuẩn, để mọi người không cần vượt qua nó (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi). Một tỷ lệ bằng không là đáng ngờ, vì các trường hợp khẩn cấp thật có xảy ra. Một tỷ lệ tăng đều đáng có một hồ sơ vấn đề (xem chủ đề 4.1, Chỉ số quản lý vấn đề).

### Đo làm lại như nhu cầu do thất bại

**Theo dõi làm lại như công việc do thất bại trước đó tạo ra.** Ý niệm nhu cầu do thất bại đến từ thiết kế dịch vụ: nhu cầu tồn tại vì có điều gì đó không được làm đúng ngay lần đầu. Về mặt phân phối, hãy đếm các lần triển khai và hạng mục công việc có mục đích duy nhất là sửa một thay đổi gần đây. Điều này liên kết trực tiếp với sự phân chia có kế hoạch và ngoài kế hoạch (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch). Hãy dùng tỷ lệ năng lực dành cho làm lại làm điểm khởi đầu cuộc trò chuyện với chủ sản phẩm, vì nó biến một tỷ lệ trừu tượng thành một sự đánh đổi về việc làm gì tiếp theo.

### Báo cáo tỷ lệ kèm số đếm, phân phối và một cửa sổ

**Cho thấy số đếm cạnh phần trăm, và dùng một cửa sổ trượt.** Một tỷ lệ thất bại hằng tháng cho một đội triển khai mười lần là nhiễu. Hãy dùng cửa sổ trượt 90 ngày, cho thấy số thay đổi và số thất bại đứng sau tỷ lệ, và đưa ra một chỉ dẫn sơ bộ về độ bất định (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Với khôi phục, hãy cho thấy trung vị và bách phân vị thứ 85 của thời gian từ thất bại đến khôi phục thay vì giá trị trung bình. Khi một dịch vụ có rất ít thay đổi, hãy kể câu chuyện bằng danh sách các thất bại thực tế thay vì một tỷ lệ.

### Ghép thất bại với tốc độ để cải thiện không thể ẩn trong cái nào

**Luôn hiển thị tỷ lệ thay đổi thất bại cạnh thời gian chờ và tần suất triển khai.** Nếu tỷ lệ thất bại giảm trong khi tần suất triển khai cũng giảm mạnh và thời gian chờ tăng, đội có thể đang gộp lô thay đổi, điều làm tăng rủi ro của từng cái. Nếu tốc độ tăng và tỷ lệ thất bại giữ ổn định, hệ thống đang tốt lên trong việc thay đổi. Việc ghép cặp là biện pháp phòng vệ chính chống lại việc lợi dụng và chống lại niềm tin dễ chịu rằng ít lần triển khai hơn nghĩa là an toàn hơn (xem chủ đề 2.8, Chỉ số DORA).

### Dùng các con số để cải thiện chính thay đổi

**Biến dữ liệu thất bại thành các thí nghiệm kỹ thuật.** Hãy xem các đặc điểm chung của những thay đổi thất bại: kích thước, thời điểm trong ngày, loại, số người tham gia, có chạm vào thành phần dùng chung không, và độ phủ kiểm thử có mỏng không. Rồi thử một thí nghiệm nhỏ, đảo ngược được như lô nhỏ hơn, [kiểm thử hồi quy](https://en.wikipedia.org/wiki/Regression_testing) tự động cho một vùng rủi ro, một [phát hành canary](https://en.wikipedia.org/wiki/Canary_release) cho thay đổi rủi ro kế tiếp, hoặc một công tắc tính năng tách triển khai khỏi phát hành. Đo lại sau một cửa sổ đầy đủ. Mục đích là thay đổi tốt hơn, và một chỉ số được cải thiện chỉ là bằng chứng.

### Rà soát các chỉ số cùng nhau trong một diễn đàn không đổ lỗi

**Tổ chức một buổi rà soát hằng tháng các thay đổi thất bại với những người đã thực hiện chúng.** Chương trình có ba mục: số đếm và xu hướng, hai hoặc ba thay đổi thất bại được chọn để nghiên cứu, và một hành động cải tiến có người sở hữu. Hãy dùng thực hành rà soát không đổ lỗi, để mọi người mô tả điều họ biết lúc đó. Công bố ghi chú rà soát cùng các chỉ số. Nếu mọi người ngần ngại báo cáo thất bại vì cách các con số được dùng, hãy sửa điều đó trước khi thay đổi bất cứ gì khác (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ thay đổi thất bại | Thu hẹp cửa sổ thất bại; không liên kết sự cố với thay đổi; phân loại một thay đổi tồi là "yêu cầu dịch vụ" hay "bảo trì"; sửa tiến tới rồi gọi đó là thay đổi mới; gộp nhiều chỉnh sửa thành một thay đổi để một thất bại bao trùm chúng | Tỷ lệ liên kết thay đổi-sự cố; kiểm toán mẫu hằng quý so với danh sách sự cố; mức nhất trí về định nghĩa thất bại; thời gian chờ và tần suất triển khai cạnh nó |
| Tỷ lệ thay đổi khẩn cấp | Đưa công việc khẩn qua con đường chuẩn với một xếp hạng rủi ro sai; đưa công việc thường qua con đường khẩn cấp để tránh phê duyệt; chia một thay đổi khẩn cấp thành nhiều thay đổi thông thường | Đọc tất cả thay đổi khẩn cấp mỗi quý; lý do được sắp xếp và rà soát; tỷ lệ thay đổi chuẩn và thời gian chờ phê duyệt (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi) |
| Tỷ lệ hoàn tác | Sửa tiến tới để tránh ghi nhận hoàn tác; giữ một phiên bản hỏng chạy; giữ các thay đổi không lên môi trường thật nên không có gì để đảo ngược | Tỷ lệ hotfix và tỷ lệ làm lại cạnh nó; phân phối thời gian khôi phục; mẫu sự cố so với nhật ký triển khai |
| Tỷ lệ hotfix | Không gắn thẻ hotfix; đẩy chúng qua nhánh thường; gọi một hotfix là "một cải tiến nhỏ" | Tỷ lệ làm lại triển khai; kiểm toán nhánh và thẻ; tỷ lệ công việc ngoài kế hoạch (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch) |
| Tỷ lệ làm lại triển khai | Không liên kết bản sửa với lần triển khai gốc; dán nhãn một bản sửa là "có kế hoạch"; gộp bản sửa với tính năng mới | Liên kết "fixes" bắt buộc trên các lần triển khai khắc phục; rà soát mẫu các lần triển khai dán nhãn có kế hoạch; tỷ lệ thay đổi thất bại cạnh nó |
| Tỷ lệ liên kết thay đổi-sự cố | Hoàn tất trường bằng "không" mà không kiểm tra; để trường mặc định là "không"; đóng sự cố hàng loạt để nâng phần trăm | Kiểm tra mẫu các câu trả lời "không" trong buổi rà soát sau sự cố; không có giá trị mặc định; bình luận của người rà soát trên một mẫu |
| Mức nhất trí về định nghĩa thất bại | Chọn các ví dụ dễ cho mẫu; người rà soát là chính những người được đo; nới lỏng định nghĩa để mọi người đồng ý | Mẫu ngẫu nhiên do người ngoài đội chọn; cố ý đưa vào các trường hợp ranh giới; công bố các bất đồng và sửa định nghĩa |

Một kết quả đọc lành mạnh trông như sau: tỷ lệ thất bại nằm trong một khoảng đội hiểu và giải thích được, tỷ lệ liên kết đủ cao để tin tỷ lệ thất bại, thay đổi khẩn cấp ít và được giải thích, và hoàn tác cùng hotfix ngắn và được diễn tập. Thất bại được báo cáo nhanh và thảo luận không đổ lỗi. Một tỷ lệ thất bại thấp bất thường kèm tỷ lệ liên kết thấp, tần suất triển khai giảm và kích thước lô tăng là một cảnh báo, không phải thành công. Hãy coi bất kỳ sự cải thiện đột ngột nào là lời nhắc kiểm tra công cụ đo trước (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Định nghĩa thất bại chặt chẽ, tự động | Nhất quán, rẻ để lặp lại, dễ theo dõi xu hướng | Bỏ sót suy giảm tinh vi; có thể tính các hoàn tác lành tính là thất bại |
| Rà soát bằng phán đoán từng thay đổi | Nắm bắt bối cảnh và mức độ nghiêm trọng | Chậm, chủ quan, dễ bị áp lực và trôi |
| Cửa sổ thất bại dài (nhiều tuần) | Bắt được các thất bại trễ | Làm mờ nhân quả; các thay đổi gần đây chưa thể báo cáo |
| Đếm mọi con đường khắc phục | Khó lợi dụng bằng cách đổi con đường | Cần ghép nhiều nguồn dữ liệu cẩn thận |

Hãy dùng một định nghĩa tự động làm nền, thêm một rà soát mẫu của con người, và cải thiện việc ghép giữa thay đổi và sự cố trước khi xây bất cứ gì khác.

## Câu hỏi để thảo luận với đội nhóm

**1. Chính xác thì cái gì được tính là một thay đổi thất bại ở đây, và hai người trong chúng ta có thể bất đồng về cùng một thay đổi không?**
Lấy năm thay đổi gần đây và yêu cầu mỗi người bỏ phiếu xem chúng có thất bại không. So sánh các phiếu và lý do. Các bất đồng cho thấy định nghĩa bằng văn bản mỏng ở đâu. Thống nhất một quy tắc cho các trường hợp khó, như hiệu năng giảm mà không có sự cố ngừng hoạt động, và viết nó ra kèm một ví dụ.

**2. Làm sao chúng ta biết sự cố nào do một thay đổi gây ra?**
Hỏi liên kết hiện được ghi lại thế nào, và ai điền nó. Rà soát mười sự cố gần đây và xem bao nhiêu có thay đổi đính kèm, và bao nhiêu lẽ ra phải có. Thảo luận trường này có tùy chọn không, có mặc định là "không" không, và ai kiểm tra nó. Người điều phối nên hướng đến một cải tiến cụ thể cho bản ghi, như một trường bắt buộc không có mặc định.

**3. Chúng ta dùng những con đường khắc phục nào, và tất cả có được đếm không?**
Liệt kê hoàn tác, hotfix, sửa tiến tới, cách lách thủ công, và tắt công tắc tính năng. Với mỗi cái, hỏi sự kiện được ghi ở đâu và nó có nuôi tỷ lệ thất bại không. Để ý các con đường không để lại dấu vết. Cuộc thảo luận thường lộ ra rằng con đường đội ưa chuộng chính là con đường mà chỉ số không thấy được.

**4. Thay đổi khẩn cấp gần nhất của chúng ta là khi nào, và nó có thể tránh được không?**
Đi qua ba hay bốn cái cuối cùng. Hỏi điều gì làm mỗi cái khẩn, điều gì đã biết sớm hơn, và một con đường chuẩn tốt hơn sẽ trông thế nào. Tách các trường hợp khẩn cấp thật khỏi các phát hiện muộn và phê duyệt chậm. Thống nhất một bản sửa cho con đường thông thường sẽ loại bỏ một lý do tái diễn cho tình trạng khẩn cấp.

**5. Bao nhiêu phần tuần làm việc của chúng ta dành để sửa các thay đổi gần đây?**
Ước lượng tỷ lệ năng lực dành cho làm lại trong bốn tuần qua, dùng trình theo dõi thay vì trí nhớ. So sánh ước lượng với trình theo dõi. Nói về cái giá của con số này đối với công việc có kế hoạch và chủ sản phẩm sẽ dùng nó ra sao. Chọn một mẫu hình thất bại và một thí nghiệm để giảm nó.

**6. Nếu tỷ lệ thất bại của chúng ta giảm một nửa quý sau, chúng ta có tin không?**
Tưởng tượng tiêu đề và hỏi còn điều gì khác phải đúng: tỷ lệ liên kết ổn định, tần suất triển khai đều, khôi phục nhanh, và không có loại "bảo trì" mới nào. Thảo luận đội đã thực hiện những kiểm tra nào trong số này và còn thiếu cái nào. Thống nhất cách một sự cải thiện đột ngột sẽ được điều tra trước khi ăn mừng.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu các thay đổi, nên họ sở hữu định nghĩa thất bại và các bản sửa. Hãy bắt đầu từ công việc: xem các thay đổi thất bại trong buổi rà soát, tìm đặc điểm chung, và thử lô nhỏ hơn, kiểm thử tốt hơn, hoặc công tắc. Theo dõi làm lại như một phần của bảng, để các bản sửa ngoài kế hoạch hiển thị cạnh công việc có kế hoạch. Giữ các con số cho việc học của chính đội, và chống lại việc chia sẻ dữ liệu cấp cá nhân. Nếu một chỉ số được cho lãnh đạo xem, đội nên giải thích được mọi thay đổi trong đó.

### Đội dịch vụ và vận hành

Các đội vận hành thấy hậu quả của thay đổi trong hàng đợi sự cố và ở vị trí tốt nhất để duy trì liên kết giữa sự cố và thay đổi. Họ có thể thêm trường bắt buộc, kiểm tra nó ở bước giải quyết, và đưa kết quả trở lại đội phân phối mà không đổ lỗi. Vận hành cũng sở hữu con đường khẩn cấp và nên rà soát việc dùng nó. Hãy chia sẻ thông tin về các con đường khôi phục và diễn tập hoàn tác cùng các đội phân phối, vì cách tốt nhất để cắt giảm chi phí thất bại là một thói quen chung làm cho thay đổi đảo ngược được (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

### Lãnh đạo và quản trị

Lãnh đạo nên yêu cầu xu hướng theo dịch vụ, hai loại thước đo bất ổn cùng với tốc độ, và các thí nghiệm cải tiến đứng sau chúng. Tránh các mục tiêu cố định như "tỷ lệ thất bại dưới 5 phần trăm", mời gọi việc định nghĩa lại, và tránh dùng các con số trong đánh giá cá nhân. Các cơ quan quản trị có thể dùng dữ liệu làm bằng chứng liệu một con đường phê duyệt nhẹ hơn có an toàn không, bằng cách kiểm tra rằng thất bại và khôi phục giữ ổn định khi các kiểm soát được nới. Một xu hướng tăng của thay đổi khẩn cấp là tín hiệu để xem xét lập kế hoạch và thiết kế phê duyệt, không phải để đổ lỗi cho các kỹ sư trực ca.

### Khách hàng và người dùng

Khách hàng không quan tâm tỷ lệ thất bại. Họ quan tâm dịch vụ có hỏng sau một bản cập nhật không và nó quay lại nhanh đến đâu. Dữ liệu thất bại hỗ trợ giao tiếp trung thực: thông báo trước về các thay đổi rủi ro, thông điệp trạng thái rõ ràng khi một thay đổi gây rắc rối, và một cam kết học hỏi hiển thị. Nơi người dùng phụ thuộc vào một dịch vụ cho các tác vụ trọng yếu, hãy thống nhất trước với họ về các khung bảo trì và kỳ vọng hoàn tác (xem chủ đề 3.4, Chỉ số sự cố lớn).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một nhà cung cấp y tế khu vực vận hành một dịch vụ lên lịch bệnh nhân. Một đội sản phẩm bảy người phát hành thay đổi vài lần một tuần, và một đội vận hành năm người xử lý sự cố và quy trình thay đổi. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Trong một quý, báo cáo hằng tháng cho thấy tỷ lệ thay đổi thất bại là 4 phần trăm, giảm từ 11 phần trăm quý trước. Giám đốc thông tin hài lòng. Trưởng nền tảng thì không bị thuyết phục, vì đội trực ca nói các đêm của họ không khá hơn. Bà yêu cầu đội chạy cuộc kiểm toán mẫu từ sổ đăng ký chỉ số.

Cuộc kiểm toán lấy 30 thay đổi ngẫu nhiên và hai người rà soát áp dụng định nghĩa bằng văn bản. Họ nhất trí trong 24 trong 30 kết luận, nên mức nhất trí về định nghĩa thất bại là 80 phần trăm (minh họa). Rồi họ so sánh mẫu với danh sách sự cố. Trong 22 sự cố được giải quyết trong quý, chỉ 9 mang trường "gây ra bởi thay đổi", tỷ lệ liên kết 41 phần trăm. Đọc 13 cái còn lại bằng tay, những người rà soát thấy 5 cái bắt đầu trong vòng một ngày sau một thay đổi. Số đếm đã sửa nâng tỷ lệ thất bại lên khoảng 9 phần trăm, và cuộc kiểm toán tìm ra vì sao con số trông đẹp: một thói quen mới triển khai các bản sửa dưới nhãn "bảo trì", mà báo cáo loại khỏi cả mẫu số lẫn tử số.

Rủi ro lợi dụng là cái nhãn, và không ai lập kế hoạch cho nó. Đội đã được nói rằng thất bại là mối quan ngại, và "bảo trì" tránh được một cuộc trò chuyện. Đội đưa ra ba quyết định. Trường "gây ra bởi thay đổi" trở thành bắt buộc không có mặc định, và buổi rà soát sau sự cố kiểm tra nó. Nhãn "bảo trì" bị bỏ, và các lần triển khai khắc phục phải mang liên kết đến thay đổi chúng sửa, nuôi tỷ lệ làm lại. Định nghĩa thất bại được viết lại với sáu ví dụ minh họa, gồm cả một hồi quy truy vấn chậm chưa bao giờ gây ra sự cố ngừng hoạt động.

Quý sau cho thấy tỷ lệ thất bại đã tính lại là 8 phần trăm và tỷ lệ liên kết 90 phần trăm (minh họa). Báo cáo lãnh đạo giờ cho thấy số đếm, tỷ lệ liên kết và tỷ lệ làm lại cạnh thời gian chờ, và giám đốc thông tin ngừng trích dẫn một phần trăm duy nhất.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Các thay đổi nhỏ, thường xuyên làm thất bại rẻ hơn và dễ truy vết hơn, và đội rà soát chúng với các bên liên quan thường xuyên. Điều cần lưu ý là nếu thất bại bị phạt, mọi người ngừng khai báo chúng.

### AI

Các thay đổi có AI hỗ trợ có thể nâng khối lượng và làm lại trong khi trông nhanh. Hãy báo cáo thay đổi thất bại và làm lại cho công việc có AI hỗ trợ bằng cùng định nghĩa như công việc khác, và đánh dấu chúng trong dữ liệu. Điều cần lưu ý là so sánh công việc có AI hỗ trợ với công việc khác cần cẩn trọng vì các thay đổi có thể khác nhau về bản chất.

### Tự động hóa

Hãy tự động liên kết thay đổi, triển khai và sự cố bằng các định danh, và đo tỷ lệ liên kết. Hoàn tác tự động nên được đo về thành công và tác dụng phụ. Điều cần lưu ý là các liên kết hỏng làm tỷ lệ thất bại trông tốt hơn thực tế.

### Phân tích

Hãy nêu định nghĩa thất bại một lần và lấy mẫu các liên kết bằng tay. Quyết định được cung cấp thông tin là thực hành thay đổi cần được củng cố ở đâu. Điều cần lưu ý là các tỷ lệ trên số thay đổi nhỏ dao động mạnh, nên hãy cho thấy số đếm.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Các thay đổi nhỏ và thường xuyên, và đội thường thuộc lòng mọi thất bại. Hãy giữ định nghĩa trong một đoạn, gắn thẻ hoàn tác và hotfix trong công cụ triển khai, và rà soát thất bại ở buổi nhìn lại hằng tuần. Tỷ lệ thất bại trên 20 thay đổi là nhiễu, nên hãy dùng danh sách các thất bại làm bằng chứng chính. Rủi ro là sự tùy tiện: không có định nghĩa bằng văn bản, tỷ lệ dịch chuyển theo người đếm.

**Doanh nghiệp nhỏ.** Cùng những người triển khai, vận hành và hỗ trợ, nên làm lại cạnh tranh trực tiếp với công việc có kế hoạch. Hãy ghi thất bại trong bất kỳ công cụ nào bạn đã dùng, thêm một trường bắt buộc vào bản ghi sự cố, và rà soát thay đổi khẩn cấp mỗi quý. Tránh phê duyệt nặng chỉ để cải thiện các con số. Một danh sách kiểm tra hoàn tác dùng chung đáng giá hơn một hội đồng thay đổi.

**Doanh nghiệp lớn.** Nhiều đội, nhà cung cấp và công cụ nghĩa là nhiều định nghĩa. Hãy chuẩn hóa định nghĩa thất bại và trường liên kết giữa các đội, công bố nó trong danh mục chỉ số, và tính tỷ lệ theo dịch vụ trước khi tổng hợp. Dùng kiểm toán mẫu để tìm sự lệch, và coi bản ghi thay đổi của mỗi nhà cung cấp là một nguồn khác với chất lượng riêng của nó (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo). Hãy chú ý để các bản tổng hợp không bao giờ biến thành bảng xếp hạng các đội.

**Chính phủ và khu vực công.** Bản ghi thay đổi phục vụ kiểm toán và trách nhiệm giải trình, và hoàn tác có thể bị ràng buộc bởi luật, mua sắm hoặc nền tảng dùng chung. Hãy giữ bản ghi chính thức và thêm liên kết thất bại như một phần của nó. Giải thích các con số cẩn thận cho các cơ quan giám sát, kèm số đếm và bối cảnh, vì một thất bại đơn lẻ trong một dịch vụ trọng yếu có thể thu hút sự chú ý không tương xứng. Hãy dùng dữ liệu để biện minh cho các con đường nhẹ hơn cho thay đổi rủi ro thấp, kèm bằng chứng rằng thất bại và khôi phục giữ ổn định.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là chi phí của thay đổi thất bại: công việc sự cố, làm lại, các hạng mục lộ trình bị trễ, và mất lòng tin của người dùng. Nhiều tổ chức không nói được bao nhiêu công sức của họ dành để sửa các thay đổi gần đây, và một thước đo làm lại cho câu trả lời trung thực đầu tiên. Cũng có một lợi ích gián tiếp. Các đội có thể cho thấy thay đổi là an toàn có thể bảo vệ phê duyệt nhẹ hơn, điều rút ngắn thời gian chờ. Nghiên cứu DORA báo cáo một mối liên hệ giữa phê duyệt bên ngoài nặng nề và hiệu suất phân phối yếu hơn (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi), và dữ liệu thất bại là cách một đội kiểm tra khẳng định đó với lịch sử của chính mình.

Chi phí thu thập khiêm tốn nếu nền tảng đã có: một trường bắt buộc trong bản ghi sự cố, các lần triển khai khắc phục được gắn thẻ, việc ghép ba nguồn dữ liệu, và một buổi rà soát hằng tháng. Chi phí lớn hơn là sự chú ý, vì ai đó phải sở hữu định nghĩa, chạy kiểm toán và hành động theo phát hiện. Tránh mua một công cụ trước khi định nghĩa và liên kết hoạt động bằng tay.

Lợi tức hiện ra dưới dạng ít thất bại lặp lại hơn, khôi phục ngắn hơn, ít công việc ngoài kế hoạch hơn, và các cuộc trao đổi tốt hơn với quản trị. Đừng hứa một tỷ lệ phần trăm. Thay vào đó, hãy ước lượng đường cơ sở của riêng bạn: đếm số giờ dành cho làm lại và xử lý sự cố liên kết với thay đổi trong một quý, quy ra tiền bằng mức giá nội bộ thông thường của bạn, và so sánh sau các cải tiến. Hãy nêu các giả định, và báo cáo kết quả dưới dạng một khoảng thay vì một con số duy nhất. So sánh nó với chi phí của chương trình và chi phí của một thất bại nghiêm trọng đơn lẻ trong một dịch vụ trọng yếu.

## Phản mẫu và cạm bẫy

- **Đặt mục tiêu cho tỷ lệ thất bại.** Nó mời gọi việc định nghĩa lại và các thất bại bị giấu. Thay vào đó hãy đặt mục tiêu cho việc học, như hoàn tất mọi buổi rà soát và đóng mọi hành động khắc phục, và theo dõi tỷ lệ để thấy xu hướng.
- **Xếp hạng đội hay người theo thất bại.** Nó phá hỏng việc báo cáo và phạt các đội nhận công việc rủi ro mà có giá trị. Hãy so sánh một đội với quá khứ của chính nó và thảo luận bối cảnh.
- **Chỉ đếm sự cố là thất bại.** Các thất bại được bắt sớm và hoàn tác biến mất. Hãy gồm mọi con đường khắc phục, và dùng sự cố làm một tín hiệu trong nhiều tín hiệu.
- **Coi thay đổi khẩn cấp là xấu.** Áp lực dẫn đến các trường hợp khẩn cấp được ngụy trang. Hãy rà soát chúng để tìm lý do và sửa con đường thông thường.
- **Để liên kết sự cố mặc định là "không".** Mặc định tạo ra một con số tâng bốc và sai. Hãy làm trường này bắt buộc và kiểm tra một mẫu.
- **Báo cáo một tỷ lệ không có số đếm.** Mẫu nhỏ dao động mạnh. Hãy cho thấy số đếm và một cửa sổ trượt.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa thất bại | Quyết định từng trường hợp bởi bất kỳ ai được hỏi | Một số đội viết định nghĩa; các đội khác nhau | Một định nghĩa bằng văn bản với ví dụ minh họa và một cửa sổ nêu rõ | Định nghĩa được kiểm thử bằng kiểm toán mẫu và mức nhất trí được đo | Định nghĩa được sửa cùng nhà cung cấp và khách hàng khi nó không còn cung cấp thông tin cho quyết định |
| Liên kết thay đổi và sự cố | Liên kết do con người nhớ, nếu có | Trường tùy chọn được một số đội dùng | Trường bắt buộc không có mặc định, kiểm tra trong buổi rà soát sau sự cố | Tỷ lệ liên kết được theo dõi xu hướng và rà soát, các khoảng trống được hành động theo | Liên kết được chia sẻ giữa các đội và nhà cung cấp qua các giao diện đã thống nhất |
| Khắc phục và xử lý khẩn cấp | Hoàn tác và hotfix xử lý tùy tiện và không được ghi | Hoàn tác và hotfix được một số đội gắn thẻ | Mọi con đường khắc phục được ghi; phép thử khẩn cấp được viết ra | Thay đổi khẩn cấp được rà soát mỗi quý; hoàn tác được diễn tập | Các con đường khôi phục được thiết kế vào dịch vụ và thử nghiệm chung giữa các đội |
| Dùng trong cải tiến | Các con số được trích dẫn trong báo cáo không có theo dõi | Thất bại được thảo luận sau các sự cố lớn | Rà soát không đổ lỗi hằng tháng các thay đổi thất bại kèm hành động | Thất bại và làm lại được ghép với tốc độ; thí nghiệm được lập kế hoạch và tài trợ | Cải tiến là thường lệ và chia sẻ giữa các đội, với học hỏi được công bố |

## Danh sách kiểm tra

- [ ] Một định nghĩa bằng văn bản về thất bại thay đổi tồn tại, với một cửa sổ nêu rõ và ít nhất năm ví dụ minh họa.
- [ ] Đơn vị đếm (thay đổi, lần triển khai hoặc bản phát hành) được nêu tên trong sổ đăng ký chỉ số.
- [ ] Bản ghi sự cố có trường bắt buộc "gây ra bởi một thay đổi" không có giá trị mặc định.
- [ ] Hoàn tác, hotfix và sửa tiến tới được gắn thẻ trong công cụ triển khai hoặc kiểm soát phiên bản.
- [ ] Các lần triển khai khắc phục mang liên kết đến thay đổi chúng sửa.
- [ ] Thay đổi khẩn cấp có một phép thử ngắn bằng văn bản, và mỗi thay đổi khẩn cấp được rà soát trong một số ngày đã định.
- [ ] Tỷ lệ được cho thấy kèm số đếm và một cửa sổ trượt, không bao giờ là một phần trăm trần.
- [ ] Tỷ lệ thay đổi thất bại luôn được hiển thị cạnh thời gian chờ, tần suất triển khai và thời gian khôi phục.
- [ ] Một kiểm toán mẫu hằng quý kiểm tra các kết luận thất bại và liên kết sự cố.
- [ ] Một buổi rà soát không đổ lỗi hằng tháng về các thay đổi thất bại diễn ra, với người sở hữu cho mỗi hành động.
- [ ] Không chỉ số nào trong chủ đề này được dùng để xếp hạng hay đánh giá cá nhân.

## Lời nhắc AI

**Soạn định nghĩa bằng văn bản về thất bại thay đổi.**

```text
We operate [service or product type] with [team size] people and release
[frequency, for example several times a week]. Our tools are [change tool,
deployment tool, incident tool]. Draft a one-page definition of "failed change"
that states the unit (change, deployment, or release), the failure window, the
remediation routes that count (rollback, hotfix, roll-forward fix, linked
incident), and the exclusions. Include [number] worked examples, including
borderline cases. Do not invent benchmark values or thresholds; ask me for any
you need. List your assumptions.
```

**Thiết kế liên kết thay đổi-sự cố.**

```text
Here is our incident record template: [fields]. Here is our change record
template: [fields]. Suggest how to record which change caused which incident,
including a required field, allowed values, who completes it, and how a review
should check it. Propose a way to suggest candidate changes automatically from
[available data, for example deploy times and service names]. Do not guess how our
tools are configured. List your assumptions and the questions I should answer.
```

**Phân tích một danh sách thay đổi thất bại để tìm mẫu hình.**

```text
Below are [number] failed changes from [period], with these fields: [list fields,
for example size, type, day and time, service, remediation route, time to
restore]. Find patterns and possible contributing factors, and suggest up to
[number] small, reversible experiments to reduce failures. Keep the analysis at
the level of teams and services, and do not rank individuals. Do not invent
statistics or benchmark values. State how confident each pattern is given the
sample size, and list your assumptions.
```

**Kiểm tra một bảng điều khiển thất bại về rủi ro bị lợi dụng.**

```text
Our dashboard shows [list of metrics, for example change fail rate, emergency
share, rollback rate, hotfix rate, rework rate] with these definitions:
[definitions]. For each metric, list plausible ways the number could improve
without the service improving, and a guardrail for each. Suggest two audit checks
a team of [team size] could run each quarter. Do not invent benchmark values or
compliance claims. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề nào định nghĩa một chỉ số liên quan, như thời gian chờ hay thời lượng sự cố, và rào chắn để đặt cạnh tỷ lệ thất bại.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chỉ số thất bại mới hoặc đã sửa nêu đồng hồ, nguồn và vectơ lợi dụng của nó.

## Điểm chính cần nhớ

- Một tỷ lệ thay đổi thất bại chỉ tốt bằng định nghĩa của nó, nên hãy viết một định nghĩa với một cửa sổ, các ví dụ minh họa và một đơn vị có tên.
- Liên kết mọi thất bại với thay đổi của nó bằng một trường bắt buộc trong bản ghi sự cố, và đo tỷ lệ liên kết.
- Đếm hoàn tác, hotfix, sửa tiến tới và sự cố liên kết cùng nhau, để các đội không thể né chỉ số bằng cách đổi con đường.
- Đọc tỷ lệ thay đổi khẩn cấp và làm lại như các tín hiệu về lập kế hoạch và con đường thông thường, không phải điểm số.
- Luôn cho thấy thất bại cạnh tốc độ và khôi phục, kèm số đếm và một cửa sổ trượt, và không bao giờ xếp hạng con người.

## Tài liệu tham khảo và đọc thêm

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
