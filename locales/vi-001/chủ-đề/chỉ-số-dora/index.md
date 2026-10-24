# Chỉ số DORA

**Các chỉ số DORA mô tả các thay đổi phần mềm của một đội đến môi trường thật nhanh và an toàn đến đâu, nên hãy đọc các thước đo tốc độ và các thước đo ổn định cùng nhau, tính chúng từ các sự kiện đường ống và sự cố, và dùng chúng để bắt đầu các cuộc trò chuyện về một hệ thống phân phối, không bao giờ để xếp hạng đội hay con người.**

## Tổng quan và động lực

Các chỉ số DORA đến từ chương trình nghiên cứu của [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), một nghiên cứu kéo dài về cách các thực hành phân phối phần mềm liên quan đến kết quả của đội và tổ chức. Nicole Forsgren, Jez Humble và Gene Kim trình bày các phát hiện đầu tiên trong cuốn sách [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) năm 2018, và chương trình tiếp tục dưới Google Cloud với một báo cáo hằng năm. Nghiên cứu hỏi những khía cạnh đo được nào của phân phối dự đoán kết quả tốt, và chọn ra một tập nhỏ các thước đo hiệu suất phân phối phần mềm có thể được tính từ đường ống phân phối và bản ghi sự cố.

Tính đến tháng 10 năm 2026, trang web của DORA mô tả năm chỉ số hiệu suất phân phối phần mềm, chia thành hai nhóm. Ba chỉ số mô tả **thông lượng**, nghĩa là các thay đổi di chuyển nhanh đến đâu: thời gian chờ thay đổi, tần suất triển khai và thời gian khôi phục sau triển khai thất bại. Hai chỉ số mô tả **sự bất ổn**, nghĩa là một bản phát hành gây rắc rối thường xuyên đến đâu: tỷ lệ thay đổi thất bại và tỷ lệ làm lại triển khai. Các ấn phẩm trước mô tả bốn chỉ số, với "thời gian khôi phục dịch vụ" thay cho thời gian khôi phục sau triển khai thất bại và không có tỷ lệ làm lại. Các định nghĩa đã được tinh chỉnh qua nhiều năm, nên hãy luôn nêu ấn bản hướng dẫn bạn đang theo và ngày bạn kiểm tra lần cuối.

Phát hiện nghiên cứu làm các chỉ số nổi tiếng là tốc độ và sự ổn định có xu hướng dịch chuyển cùng nhau giữa các đội. Các đội triển khai thường xuyên và có thời gian chờ ngắn trung bình không phải trả giá bằng nhiều thất bại hơn. Điều này lật ngược giả định cũ rằng đi nhanh hơn nghĩa là làm vỡ nhiều hơn. Đó là một mẫu hình trong dữ liệu khảo sát và đường ống, không phải một định luật, và nó đúng với các đội đã đầu tư vào các thực hành như [phân phối liên tục](https://en.wikipedia.org/wiki/Continuous_delivery), lô nhỏ, kiểm thử tự động và phản hồi nhanh. Các chỉ số là tín hiệu của những năng lực nền tảng đó. Chúng không phải bản thân các năng lực.

Các thuật ngữ dưới đây lặp lại trong chủ đề này.

- Một **lần triển khai** là hành động đưa một phiên bản phần mềm vào một môi trường nhất định. Chủ đề này nghĩa là môi trường thật trừ khi nói khác.
- Một **thay đổi** là một tập sửa đổi đối với phần mềm, thường là một hoặc nhiều commit được phát hành cùng nhau. Trong ITIL 4 từ này có nghĩa rộng hơn, bao quát mọi bổ sung, sửa đổi hoặc gỡ bỏ có thể ảnh hưởng đến dịch vụ, và thực hành [ITIL](https://en.wikipedia.org/wiki/ITIL) quản lý nó là hỗ trợ thay đổi.
- Một **lần triển khai thất bại** là một lần triển khai gây ra dịch vụ suy giảm hoặc ngừng hoạt động trên môi trường thật và cần khắc phục, như một hotfix, một lần hoàn tác hoặc một bản vá. Đội bạn ghi quy tắc chính xác ra, vì nghiên cứu để việc đó cho định nghĩa cục bộ.
- Một **lần hoàn tác (rollback)** là hành động đưa môi trường thật về phiên bản tốt đã biết trước đó.
- Một **bách phân vị** là giá trị mà dưới đó một tỷ lệ quan sát nêu rõ rơi vào. Bách phân vị thứ 85 của thời gian chờ là con số mà 85 phần trăm thay đổi đạt được.

Góc nhìn linh hoạt và ITIL gặp nhau trên nền này. Một đội linh hoạt thấy các con số này là phản hồi về thực hành kỹ thuật và thỏa thuận làm việc của mình. Một người thực hành ITIL thấy chúng là bằng chứng kết quả cho hỗ trợ thay đổi, quản lý phát hành, quản lý triển khai và quản lý sự cố. Sự căng thẳng thường nằm ở kiểm soát. Một hội đồng phê duyệt thay đổi truyền thống cố giảm thất bại bằng cách kiểm tra từng thay đổi trước khi phát hành. Nghiên cứu DORA thấy rằng phê duyệt nặng từ bên ngoài không liên quan đến sự ổn định tốt hơn, còn rà soát đồng nghiệp, kiểm thử tự động và thay đổi nhỏ thì có. Trong ITIL 4, hỗ trợ thay đổi cho phép điều này bằng cách tách thay đổi chuẩn, thông thường và khẩn cấp và bằng cách để các thay đổi rủi ro thấp được phê duyệt trước (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

Các chỉ số cũng có những giới hạn mà chính nghiên cứu nêu ra, và lời khuyên thực tế trong chủ đề này xây trên chúng. Chúng mô tả một hệ thống phân phối cho một ứng dụng hoặc dịch vụ, chúng nhằm cho các cuộc trò chuyện cải tiến, và chúng không nói gì về việc công việc được phát hành có giá trị hay không. Một đội có thể đăng những con số xuất sắc trong khi phát hành sai thứ. Vì lý do đó chủ đề này nằm bên cạnh, không phải trên, các thước đo dòng chảy (xem chủ đề 2.1, Các thước đo dòng chảy), các thước đo độ tin cậy dịch vụ (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi) và các thước đo kết quả (xem chủ đề 1.3, Kết quả hơn sản lượng: chọn điều cần đo).

Cuối cùng, các chỉ số mời gọi [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) ngay khi chúng xuất hiện trên bảng điều khiển của lãnh đạo. Tần suất triển khai là dễ thổi phồng nhất và số lần triển khai thất bại là dễ giấu nhất. Mọi khuyến nghị dưới đây vì vậy ghép một thước đo với một phép kiểm tra cách nó có thể bị bẻ cong (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Tính từ sự kiện, không phải từ trí nhớ.** Các lần triển khai đến từ đường ống, thất bại và khôi phục từ bản ghi sự cố, và thời gian chờ từ kiểm soát phiên bản ghép với đường ống (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).
- **Đọc tốc độ và sự ổn định như một bức tranh.** Một đội nhanh với thất bại tăng, hoặc một đội ổn định phát hành theo quý, đang nói với bạn điều mà không nửa nào cho thấy riêng lẻ.
- **Đo một dịch vụ hoặc ứng dụng, không phải một người.** Đơn vị phân tích là một hệ thống phân phối. Các cá nhân không triển khai một mình, và xếp hạng họ phá hủy dữ liệu.
- **So sánh một đội với quá khứ của chính nó, không phải với đội khác.** Bối cảnh khác nhau mạnh giữa một dịch vụ thanh toán, một nền tảng dữ liệu và một ứng dụng di động, và chính nghiên cứu cảnh báo chống lại việc dùng các chỉ số như một bảng xếp hạng.
- **Dùng phân phối cho các thời gian.** Thời gian chờ và thời gian khôi phục có đuôi dài, nên hãy báo cáo trung vị và một bách phân vị cao (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).
- **Coi các chỉ số là triệu chứng.** Khi một con số dịch chuyển, hãy tìm nguyên nhân ở các năng lực bên dưới, như cỡ lô, tự động hóa kiểm thử, thực hành rà soát và kiến trúc, rồi chạy một thử nghiệm.
- **Viết các định nghĩa ra.** Thất bại, triển khai và "bắt đầu công việc" là các phán đoán. Hãy ghi lựa chọn và giữ nó ổn định để xu hướng có nghĩa.

## Định nghĩa chỉ số

Năm chỉ số dưới đây theo hướng dẫn của DORA tính đến tháng 10 năm 2026. Các công thức nêu các đồng hồ và trường hợp loại trừ mà đội bạn nên ghi ra. Nơi nghiên cứu để ngỏ một ranh giới, bảng cho thấy một mặc định hợp lý và các khuyến nghị giải thích lựa chọn.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian chờ thay đổi | Thời gian để một thay đổi đã commit đến môi trường thật | Đồng hồ bắt đầu ở commit đầu tiên của thay đổi (hoặc lúc nó được hợp nhất vào nhánh chính, nếu nêu trong định nghĩa) và dừng khi lần triển khai lên môi trường thật hoàn tất thành công; báo cáo trung vị và bách phân vị thứ 85 của các thay đổi được triển khai trong kỳ; các thay đổi chưa bao giờ được triển khai bị loại trừ và báo cáo riêng như công việc đang làm dở | Giờ hoặc ngày | Kiểm soát phiên bản ghép với đường ống triển khai | Quản lý triển khai; quản lý phát hành; hỗ trợ thay đổi | Thời gian chu trình; thời gian chờ đến môi trường thật | Hằng tuần hoặc mỗi bản phát hành, rà soát hằng tháng |
| Tần suất triển khai | Một đội triển khai lên môi trường thật thường xuyên đến đâu | Số lần triển khai thành công lên môi trường thật của ứng dụng trong kỳ / số ngày trong kỳ; các lần triển khai thất bại hoặc bị hoàn tác bị loại khỏi số đếm thành công; các lần triển khai lên môi trường kiểm thử bị loại trừ | Lần triển khai mỗi ngày hoặc mỗi tuần | Nhật ký sự kiện đường ống triển khai | Quản lý triển khai; quản lý phát hành | Phân phối liên tục; phát hành vào cuối mỗi gia số | Hằng tuần |
| Thời gian khôi phục sau triển khai thất bại | Mất bao lâu để khôi phục khi một lần triển khai gây ra thất bại trên môi trường thật | Đồng hồ bắt đầu khi thất bại được phát hiện hoặc báo cáo (cùng một quy tắc mọi lần) và dừng khi dịch vụ được khôi phục cho người dùng; báo cáo trung vị và bách phân vị thứ 85 cho các lần triển khai thất bại trong kỳ; các sự cố không do triển khai gây ra bị loại trừ | Phút hoặc giờ | Bản ghi sự cố ghép với sự kiện triển khai và cảnh báo giám sát | Quản lý sự cố; quản lý liên tục dịch vụ | Thời gian khôi phục; công việc khôi phục | Mỗi lần thất bại, rà soát hằng tháng |
| Tỷ lệ thay đổi thất bại | Tỷ lệ các lần triển khai lên môi trường thật gây ra thất bại cần khắc phục | Số lần triển khai cần một hotfix, hoàn tác, bản vá hoặc ứng phó sự cố / tất cả lần triển khai lên môi trường thật trong kỳ; quy tắc nối một thất bại với lần triển khai của nó được ghi ra và áp dụng giống nhau mỗi lần | Phần trăm | Sự kiện triển khai ghép với sự cố, hoàn tác và các lần triển khai hotfix | Hỗ trợ thay đổi; quản lý sự cố | Định nghĩa hoàn thành; lỗi lọt ra ngoài | Hằng tháng |
| Tỷ lệ làm lại triển khai | Tỷ lệ các lần triển khai lên môi trường thật ngoài kế hoạch và được thực hiện để sửa một vấn đề người dùng thấy | Số lần triển khai ngoài kế hoạch thực hiện để đáp lại một vấn đề trên môi trường thật / tất cả lần triển khai lên môi trường thật trong kỳ; các lần triển khai có kế hoạch tình cờ chứa một bản sửa bị loại trừ; quy tắc cho "ngoài kế hoạch" được ghi ra | Phần trăm | Nhật ký đường ống được gắn thẻ theo lý do triển khai, liên kết với bản ghi sự cố hoặc lỗi | Hỗ trợ thay đổi; quản lý vấn đề | Công việc ngoài kế hoạch; bản sửa lỗi phát hành ngoài kế hoạch | Hằng tháng |

Hai lưu ý về bảng. Thứ nhất, tỷ lệ thay đổi thất bại và tỷ lệ làm lại triển khai chồng lấn và không giống nhau: một thất bại đội nhận ra và hoàn tác mà không có lần triển khai mới nào được tính vào tỷ lệ thay đổi thất bại nhưng không vào tỷ lệ làm lại, trong khi một bản sửa có kế hoạch mà đội lên lịch không được tính vào cái nào. Thứ hai, nghiên cứu coi **lần triển khai** là đơn vị và đếm theo từng ứng dụng, nên một nền tảng có năm mươi dịch vụ có năm mươi bộ con số, không phải một.

## Khuyến nghị

### Bắt đầu với định nghĩa và đồng hồ

**1. Viết một định nghĩa một trang cho mỗi chỉ số trước khi vẽ nó.** Nêu điều gì được tính là một lần triển khai, môi trường nào là môi trường thật, đồng hồ cho thời gian chờ bắt đầu ở đâu, và một thất bại được nối với một lần triển khai ra sao. Đặt trang đó vào sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số). Một định nghĩa chỉ sống trong đầu ai đó sẽ trôi ngay lần đầu công cụ hay đội thay đổi.

**2. Chọn một điểm bắt đầu cho thời gian chờ và giữ nó.** Các lựa chọn phổ biến nhất là commit đầu tiên của thay đổi, lúc hợp nhất vào nhánh chính, và lúc tạo phiếu. Commit đầu tiên đo hệ thống phân phối và bỏ qua thời gian công việc nằm trong tồn đọng. Điểm bắt đầu theo phiếu đo nhiều hơn sự chờ của khách hàng nhưng trộn vào việc xếp ưu tiên (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy). Hãy dùng một cái nhất quán và nói cái nào trong mọi biểu đồ.

**3. Quy thất bại theo một quy tắc đã nêu.** Một thất bại thuộc về một lần triển khai khi, chẳng hạn, một sự cố mở trong một cửa sổ nêu rõ sau lần triển khai và phân tích nguyên nhân của nó chỉ vào thay đổi đó, hoặc khi một hoàn tác hay hotfix được gắn thẻ với nó. Hãy chọn một quy tắc mà mọi người có thể áp dụng mà không tranh cãi, rà soát một mẫu các trường hợp mỗi quý, và giữ quy tắc giống nhau đủ lâu để thấy xu hướng.

### Đo từ đường ống

**4. Lấy sự kiện triển khai từ đường ống, không phải từ một bảng tính.** Một hệ thống [CI/CD](https://en.wikipedia.org/wiki/CI/CD) ghi mỗi lần triển khai lên môi trường thật kèm dấu thời gian, phiên bản và kết quả cho bạn tần suất triển khai và điểm dừng của đồng hồ thời gian chờ mà không cần con người nhập. Số đếm nhập tay thì muộn và không nhất quán, và chúng mời gọi các vấn đề ghi lùi ngày được mô tả trong chủ đề 1.5, Nguồn dữ liệu và công cụ đo. Dự án mã nguồn mở Four Keys của đội DORA là một ví dụ thực hiện thu thập các sự kiện này, dù bất kỳ đường ống tương đương nào của riêng bạn cũng được.

**5. Ghép bản ghi sự cố với các lần triển khai.** Các thước đo thất bại và khôi phục cần hai nguồn: nhật ký triển khai và công cụ sự cố. Hãy thêm một trường vào bản ghi sự cố cho "gây ra bởi triển khai" và mã định danh lần triển khai, được điền trong lúc giải quyết và được kiểm tra trong buổi rà soát sau sự cố (xem chủ đề 4.2, Chỉ số phân tích sau sự cố và học hỏi). Không có phép ghép, tỷ lệ thay đổi thất bại trở thành một phỏng đoán.

**6. Gắn thẻ lý do cho mỗi lần triển khai.** Tỷ lệ làm lại cần tách các lần triển khai có kế hoạch khỏi các bản sửa ngoài kế hoạch. Một nhãn đơn giản trên lần chạy đường ống, như "thay đổi có kế hoạch" hoặc "sửa cho vấn đề môi trường thật," là đủ. Hãy giữ danh sách nhãn ngắn, để mọi người không phải nghĩ nhiều dưới áp lực.

### Báo cáo các con số một cách trung thực

**7. Báo cáo phân phối và số đếm, không phải một giá trị trung bình đơn lẻ.** Hãy cho thấy trung vị và bách phân vị thứ 85 cho thời gian chờ và thời gian khôi phục, kèm số quan sát đứng sau mỗi cái. Một tuần có hai lần triển khai và một thất bại có tỷ lệ thay đổi thất bại 50 phần trăm, mang rất ít ý nghĩa, nên hãy cho thấy số đếm bên cạnh phần trăm và ưu tiên một cửa sổ dài hơn cho các tỷ lệ (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**8. Cho thấy hai nhóm thông lượng và bất ổn cạnh nhau.** Đặt ba chỉ số thông lượng và hai chỉ số bất ổn trên một góc nhìn, theo từng dịch vụ, với xu hướng ít nhất một quý. Đừng bao giờ công bố tần suất triển khai mà không có các thước đo thất bại bên cạnh. Nếu một lãnh đạo yêu cầu một con số, hãy giải thích rằng không có điểm DORA đơn lẻ, và đưa ra góc nhìn hai nhóm.

**9. Giữ các phép so sánh trong lịch sử của chính đội.** Một đội đưa thời gian chờ trung vị từ chín ngày xuống năm ngày đã học được điều gì đó. Xếp hạng nó với một đội khác có kiến trúc, tải quy định hay đoàn tàu phát hành khác chứng minh được ít, và nó dạy cả hai đội bảo vệ con số của mình. Khi buộc phải tổng hợp cho quản trị, hãy cho thấy độ trải qua các dịch vụ và xu hướng cải thiện, không phải bảng xếp hạng (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

### Cải thiện hệ thống mà các con số mô tả

**10. Giảm cỡ lô trước.** Thay đổi nhỏ rút ngắn thời gian chờ, làm thất bại dễ chẩn đoán hơn, và giảm chi phí hoàn tác. Các kỹ thuật gồm [công tắc tính năng](https://en.wikipedia.org/wiki/Feature_toggle), làm việc theo trunk, và chia công việc để mỗi gia số có thể phát hành riêng (xem chủ đề 2.7, Chỉ số yêu cầu hợp nhất và rà soát mã). Hãy theo dõi cỡ trung vị của các thay đổi bên cạnh thời gian chờ để thấy lô có thực sự co lại không.

**11. Đầu tư vào phát hiện nhanh và đảo ngược nhanh.** Thời gian khôi phục giảm khi đội thấy một thất bại trong vài phút, và khi nó có thể [hoàn tác](https://en.wikipedia.org/wiki/Rollback_(data_management)) hoặc tắt một thay đổi mà không cần bản dựng mới. Một [bản phát hành canary](https://en.wikipedia.org/wiki/Canary_release), một công tắc tính năng và một hoàn tác tự động mỗi cái rút ngắn khoảng giữa thất bại và khôi phục. Hãy đo thời gian từ triển khai đến phát hiện riêng, vì phát hiện chậm ẩn trong một con số thời gian khôi phục (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

**12. Dùng các con số để chọn một năng lực để cải thiện.** Chọn một chỉ số yếu, hỏi vì sao nó yếu, và chọn một thực hành từ danh sách năng lực của nghiên cứu giải quyết nguyên nhân, như tự động hóa kiểm thử, kiến trúc ghép lỏng, hoặc phê duyệt thay đổi gọn nhẹ. Chạy thay đổi trong một quý và xem xu hướng. Ghép thử nghiệm với một chủ đề của buổi nhìn lại để đội sở hữu cải tiến (xem chủ đề 9.5, Chỉ số cải tiến liên tục).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian chờ thay đổi | Dời điểm bắt đầu đồng hồ muộn hơn, như bắt đầu ở lúc hợp nhất thay vì commit đầu tiên; hợp nhất sớm vào một nhánh sống lâu; loại các thay đổi khó là "không phải mã"; phát hành các thay đổi tầm thường qua đường ống để kéo trung vị xuống | Bách phân vị và tuổi của công việc đang làm dở; điểm bắt đầu đồng hồ cố định bằng văn bản; mẫu 10 phần trăm thay đổi chậm nhất mỗi quý; phân phối kích thước thay đổi |
| Tần suất triển khai | Chia một thay đổi thành nhiều lần triển khai tầm thường; triển khai lại các bản dựng không đổi; đếm các lần triển khai lên môi trường chuẩn bị hoặc các thay đổi cấu hình rỗng | Kích thước thay đổi mỗi lần triển khai; tỷ lệ các lần triển khai chứa thay đổi người dùng thấy; tỷ lệ thay đổi thất bại và tỷ lệ làm lại bên cạnh |
| Thời gian khôi phục sau triển khai thất bại | Bắt đầu đồng hồ muộn hoặc đóng sự cố sớm; phân loại lại một thất bại thành sự cố mới sau một bản sửa một phần; nâng ngưỡng mức nghiêm trọng cho "thất bại" | Tái diễn của cùng sự cố trong một cửa sổ nêu rõ; điểm bắt đầu đồng hồ lấy từ cảnh báo giám sát; thời lượng tác động do khách hàng báo cáo |
| Tỷ lệ thay đổi thất bại | Không liên kết sự cố với các lần triển khai; chỉ đếm các thất bại gây ngừng hoạt động hoàn toàn; nới rộng cửa sổ để thất bại rơi ra ngoài; sửa tiến và gọi nó là thay đổi mới | Rà soát một mẫu sự cố so với nhật ký triển khai mỗi quý; theo dõi tỷ lệ sự cố có liên kết triển khai được ghi; tỷ lệ làm lại triển khai |
| Tỷ lệ làm lại triển khai | Gắn nhãn các bản sửa là công việc có kế hoạch; gộp một bản sửa vào bản phát hành theo lịch; tránh các lần triển khai sửa lỗi bằng cách trì hoãn bản sửa | Số lỗi và lỗi lọt ra ngoài từ trình theo dõi; tuổi của các lỗi môi trường thật đang mở; kiểm toán thẻ trên một mẫu các lần triển khai |

Một kết quả đọc lành mạnh cho thấy thời gian chờ và thời gian khôi phục co lại hoặc ổn định ở mức thấp, tần suất triển khai ổn định hoặc tăng với các thay đổi nhỏ, và tỷ lệ thất bại và làm lại phẳng hoặc đang giảm, với số đếm đủ lớn để tin. Các kết quả đọc đáng ngờ gồm tần suất triển khai nhảy vọt đột ngột mà công việc không đổi, tỷ lệ thất bại rơi về không trong một tháng, và thời gian khôi phục giảm trong khi khiếu nại của khách hàng vẫn như cũ. Mỗi điều đó đòi hỏi nhìn vào công cụ đo trước khi ăn mừng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Dùng cả năm chỉ số DORA theo từng dịch vụ | Dựa trên nghiên cứu, cân bằng tốc độ với sự ổn định, tính từ các sự kiện khách quan | Cần một đường ống và một bản ghi sự cố ghép sạch với nhau; im lặng về việc công việc có giá trị hay không |
| Chỉ báo cáo tần suất triển khai và thời gian chờ | Dễ thu thập từ đường ống | Thưởng riêng cho tốc độ và mời gọi chính việc lợi dụng mà các thước đo ổn định bắt được |
| Dùng định nghĩa cục bộ theo từng đội | Khớp kiến trúc và kiểu phát hành của đội | Các đội không thể so sánh, và các bản tổng hợp không đáng tin |
| Dùng một định nghĩa toàn tổ chức | Báo cáo nhất quán; quản trị đơn giản | Khớp kém với một số hệ thống, như máy tính lớn có cửa sổ xử lý theo lô hay các bản phát hành chịu quy định |
| So sánh các đội với các dải hiệu suất đã công bố | Cho lãnh đạo cảm giác nhanh về vị trí | Bỏ qua bối cảnh, và nghiên cứu cảnh báo rằng các dải không phải mục tiêu cho từng đội |
| Dùng các chỉ số để tự cải tiến của đội | Xây dựng quyền sở hữu; hỗ trợ dữ liệu trung thực | Mang lại ít sự thoải mái hơn cho lãnh đạo muốn một điểm duy nhất |

Sự căng thẳng trung tâm là giữa khả năng so sánh và sự trung thực. Một con số càng được dùng để phán xét các đội, dữ liệu càng bị bẻ cong, và nó càng ít giúp đội sở hữu nó. Hãy dùng các chỉ số để hỗ trợ cải tiến trước, chấp nhận khả năng so sánh không hoàn hảo, và giữ các góc nhìn cấp lãnh đạo ở xu hướng và độ trải. Nơi báo cáo chịu quy định cần một định nghĩa chuẩn, hãy ghi tài liệu nó và giữ góc nhìn cải tiến cấp đội tách biệt.

## Câu hỏi để thảo luận với đội nhóm

**1. Trong năm con số DORA của chúng ta, con số nào đến từ sự kiện, và con số nào đến từ hồi tưởng của ai đó?**
Truy từng chỉ số về nguồn của nó. Ghi lại nơi một người gõ một ngày hoặc quyết định liệu một thứ có được tính là thất bại không. Người điều phối nên giúp nhóm xếp hạng các bước thủ công theo mức chúng có thể làm méo con số, và thống nhất cái nào nên tự động hóa trước.

**2. Chính xác thì đồng hồ thời gian chờ của chúng ta bắt đầu và dừng ở đâu, và mọi người có đồng ý không?**
Hãy yêu cầu ba người mô tả điểm bắt đầu và dừng của đồng hồ cho thay đổi gần nhất đã phát hành. So sánh các câu trả lời. Sự khác biệt thường xuất hiện quanh commit đầu tiên, lúc hợp nhất, một phiếu và bước phê duyệt. Thống nhất một định nghĩa và ghi nó ra, và thảo luận thời gian chờ nào mà định nghĩa được chọn che giấu.

**3. Điều gì được tính là một lần triển khai thất bại với chúng ta, và ai quyết định?**
Đi qua năm sự cố môi trường thật gần nhất và hỏi mỗi cái có thuộc về một lần triển khai không. Những bất đồng cho thấy quy tắc không rõ ở đâu. Thảo luận điều gì xảy ra với một thất bại được sửa bằng một thay đổi cấu hình, một hoàn tác hoặc một bản vá nhanh, và quyết định mỗi cái được ghi ra sao.

**4. Nếu tần suất triển khai tăng gấp đôi vào quý tới, chúng ta sẽ kiểm tra gì trước khi gọi đó là tin tốt?**
Mời nhóm nêu các cách con số có thể tăng mà không giao thêm giá trị. Xem kích thước thay đổi, tỷ lệ các lần triển khai có thay đổi người dùng thấy, và các tỷ lệ thất bại và làm lại. Người điều phối nên ghi lại những phép kiểm tra nào đã có trên bảng điều khiển và những phép nào cần thêm.

**5. Những người ngoài đội dùng các con số này như thế nào?**
Hỏi ai thấy chúng, dưới dạng nào, và họ làm gì với chúng. Lắng nghe việc so sánh với các đội khác, các mục tiêu đặt từ bên ngoài, và việc dùng trong đánh giá cá nhân. Thảo luận đội cần thấy điều gì thay đổi trong cách dùng đó trước khi tin dữ liệu của chính mình, và ai có tư cách thực hiện thay đổi.

**6. Năng lực nào sẽ cải thiện nhiều nhất con số yếu nhất của chúng ta, và một thử nghiệm nhỏ để thử là gì?**
Chọn chỉ số yếu nhất và nói về các nguyên nhân có khả năng của nó, như lô lớn, rà soát chậm, kiểm thử không ổn định hay một bước phát hành thủ công. Chọn một nguyên nhân và thiết kế một thử nghiệm bốn đến sáu tuần với cách để thấy tác động. Thống nhất một ngày rà soát kết quả và ai sẽ mang dữ liệu.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu các năng lực thúc đẩy những con số này: thay đổi nhỏ, kiểm thử tự động, một đường ống nhanh và thói quen rà soát công việc của nhau. Họ nên dùng các chỉ số như một tấm gương cho thực hành kỹ thuật của chính mình, đặt mục tiêu cải tiến riêng, và chống lại áp lực báo cáo một con số duy nhất lên trên. Họ cũng quyết định các định nghĩa, nên họ mang nghĩa vụ giữ chúng trung thực (xem chủ đề 2.7, Chỉ số yêu cầu hợp nhất và rà soát mã).

### Đội dịch vụ và vận hành

Các đội vận hành giữ bản ghi sự cố mà các thước đo thất bại và khôi phục phụ thuộc vào. Họ giúp đội phân phối bằng cách gắn thẻ sự cố với lần triển khai gây ra chúng, bằng cách cung cấp giám sát phát hiện thất bại nhanh, và bằng cách tham gia rà soát từng lần triển khai thất bại. Họ nên để ý rằng tốc độ phân phối không mua sự bất ổn mà họ gánh dưới dạng tải trực ca (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca), và yêu cầu các khoản đầu tư vào hoàn tác và phát hiện làm giảm thời gian khôi phục.

### Lãnh đạo và quản trị

Lãnh đạo nên yêu cầu xu hướng và độ trải qua các dịch vụ, cả hai nhóm chỉ số cùng nhau, và các thử nghiệm cải tiến đứng sau chúng. Họ nên tránh các mục tiêu khóa chặt một con số, như "triển khai hằng ngày," và tránh dùng các chỉ số trong đánh giá cá nhân. Các cơ quan quản trị có thể dùng các con số như bằng chứng rằng một con đường phê duyệt thay đổi nhẹ hơn là an toàn, hoặc như lý do để xem xét lại nó, bằng cách cho thấy sự ổn định có giữ vững khi quy trình thay đổi không (xem chủ đề 4.4, Thay đổi thất bại và làm lại).

### Khách hàng và người dùng

Khách hàng hiếm khi quan tâm số lần triển khai. Họ quan tâm một bản sửa hay tính năng đến họ nhanh đến đâu, một bản phát hành làm vỡ thứ họ dựa vào hiếm khi ra sao, và dịch vụ trở lại nhanh đến đâu khi nó vỡ. Hãy dùng các chỉ số DORA như bằng chứng nội bộ rằng các kết quả này có khả năng xảy ra, và bổ sung chúng bằng các thước đo hướng tới khách hàng như tính sẵn sàng và mức hài lòng (xem chủ đề 5.3, Chỉ số tính sẵn sàng, và chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một dịch vụ thanh toán do một đội sản phẩm sở hữu, được hỗ trợ bởi một đội nền tảng và bàn dịch vụ. Mọi con số dưới đây chỉ mang tính minh họa.

Đội đã triển khai lên môi trường thật khoảng hai lần một tuần, với thời gian chờ (từ commit đầu đến môi trường thật) trung vị 11 ngày và bách phân vị thứ 85 là 26 ngày. Trong quý trước, 6 trên 24 lần triển khai (25 phần trăm, minh họa) được theo sau bởi một lần hoàn tác hoặc một sự cố. Thời gian khôi phục trung vị cho những thất bại đó là 3 giờ. Hội đồng phê duyệt thay đổi họp hằng tuần và rà soát mọi thay đổi đối với dịch vụ thanh toán.

Đội đề xuất một kế hoạch. Họ sẽ chia các thay đổi lớn, thêm các kiểm tra tự động trong đường ống, đặt hành vi mới sau các công tắc tính năng, và đề nghị hội đồng phê duyệt trước các thay đổi rủi ro thấp vượt qua các kiểm tra như thay đổi chuẩn. Người quản lý thay đổi dè dặt, nên đội đồng ý báo cáo cả năm chỉ số hằng tháng và dừng thử nghiệm nếu tỷ lệ thất bại tăng hai tháng liên tiếp.

Sau một quý, các con số (minh họa) là 19 lần triển khai mỗi tháng, thời gian chờ trung vị 3 ngày với bách phân vị thứ 85 là 8 ngày, tỷ lệ thay đổi thất bại 8 phần trăm, thời gian khôi phục trung vị 40 phút và tỷ lệ làm lại 5 phần trăm. Đội hài lòng, và một quản lý khu vực đề nghị so sánh tần suất triển khai của đội thanh toán với các đội sản phẩm khác và đặt một mục tiêu chung.

Trưởng đội mang bảng phân tích làm lại và thất bại đến buổi rà soát và nhận thấy một rủi ro lợi dụng. Tần suất triển khai đã được hỗ trợ bởi một số lần triển khai cấu hình rất nhỏ mà đường ống đếm, và kích thước thay đổi trung vị đang co nhanh hơn công việc thực. Tệ hơn, hai sự cố tháng trước đã được sửa bằng một thay đổi cấu hình mà đường ống ghi là một lần triển khai bình thường gắn thẻ "có kế hoạch", nên tỷ lệ làm lại bị đánh giá thấp. Tỷ lệ thay đổi thất bại trông tốt một phần vì hai sự cố đó chưa được liên kết với lần triển khai gốc của chúng.

Quyết định, ghi trong nhật ký quyết định, có bốn phần. Các lần triển khai chỉ cấu hình được đếm riêng và cho thấy bên cạnh con số chính. Thẻ lý do triển khai được kiểm toán hằng tháng trên một mẫu 10 lần triển khai. Công cụ sự cố giờ yêu cầu mã định danh lần triển khai khi nguyên nhân là một thay đổi. Và đội từ chối mục tiêu tần suất triển khai chung, thay vào đó đề xuất một góc nhìn chung cho thấy xu hướng của từng dịch vụ và tỷ lệ thất bại của nó. Người quản lý thay đổi đồng ý giữ việc phê duyệt trước cho các thay đổi chuẩn, với một buổi rà soát vào cuối quý tới.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Các chỉ số DORA mô tả các thay đổi đến môi trường thật nhanh và an toàn đến đâu, đó là cốt lõi thực tế của phân phối liên tục. Một thực hành tốt là đọc các thước đo tốc độ và ổn định cùng nhau trong một buổi rà soát định kỳ với các bên liên quan và chọn một cải tiến. Điều cần lưu ý là đội có thể thổi phồng tần suất triển khai bằng cách tách thay đổi, nên hãy theo dõi kích thước thay đổi và làm lại.

### AI

Lập trình có AI hỗ trợ có thể làm tăng khối lượng thay đổi và rút ngắn thời gian chờ trong khi làm tăng làm lại hoặc các thay đổi thất bại. Hãy báo cáo các thay đổi có AI hỗ trợ và các thay đổi khác cùng nhau trên các thước đo ổn định, và so sánh thời gian khôi phục sau triển khai thất bại và tỷ lệ làm lại triển khai trước và sau khi áp dụng. Điều cần lưu ý là nghiên cứu DORA về AI đang phát triển, nên hãy kiểm tra các báo cáo đã công bố hiện hành trước khi trích dẫn bất kỳ phát hiện nào.

### Tự động hóa

Hãy tính cả năm thước đo từ sự kiện đường ống và sự cố một cách tự động, với một quy tắc rõ ràng cho điều gì được tính là một lần triển khai và một thất bại. Hãy đo chính đường ống về thất bại và sự không ổn định của nó. Điều cần lưu ý là tự động hóa có thể giấu các bước thủ công nằm ngoài đường ống, như một phê duyệt qua email, nên hãy lập bản đồ con đường thật một lần.

### Phân tích

Hãy báo cáo phân phối, không chỉ giá trị trung bình, và so sánh một đội với quá khứ của chính nó, không phải với các đội khác. Quyết định được cung cấp thông tin là hệ thống phân phối chậm hoặc mong manh ở đâu. Điều cần lưu ý là các bảng xếp hạng liên đội khuyến khích việc lợi dụng, và các con số phụ thuộc vào định nghĩa cục bộ về một lần triển khai và một thất bại.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một đội nhỏ thường triển khai nhiều lần mỗi ngày và có bản ghi sự cố mỏng, nên tần suất triển khai và thời gian chờ dễ có nhưng dữ liệu thất bại chắp vá. Hãy bắt đầu bằng cách gắn thẻ mọi hoàn tác và hotfix trong đường ống, và giữ một nhật ký sự cố đơn giản kèm mã định danh lần triển khai. Đừng để tần suất cao thuyết phục bạn rằng sự ổn định ổn mà không kiểm tra tỷ lệ thất bại.

**Doanh nghiệp nhỏ.** Một nền tảng được lưu trữ hoặc một lập trình viên thuê ngoài có thể chỉ triển khai hằng tháng, với ít công cụ. Hãy đếm bằng tay những gì bạn có thể trong vài tháng, yêu cầu nhà cung cấp cho ngày triển khai và sự cố bằng văn bản, và tập trung vào thời gian chờ và tỷ lệ thất bại. Hãy dùng các con số để quyết định liệu các thay đổi nhỏ hơn được phân phối liên tục có giảm rủi ro không, không phải để đuổi theo một dải.

**Doanh nghiệp lớn.** Nhiều đội, nhiều kiểu phát hành, và sự pha trộn giữa hệ thống hiện đại và kế thừa khiến các định nghĩa nhất quán khó đạt. Hãy thống nhất một định nghĩa tối thiểu chung cho mỗi chỉ số, công bố nó, và cho phép một đội thêm các định nghĩa cục bộ chặt hơn kèm lý do được nêu. Tổng hợp bằng cách cho thấy độ trải và xu hướng theo từng dịch vụ thay vì một giá trị trung bình, và giữ chi tiết cấp đội chỉ hiển thị với đội sở hữu và các nhóm hỗ trợ của nó.

**Chính phủ và khu vực công.** Cửa sổ phát hành, quy tắc kiểm toán và hợp đồng mua sắm định hình điều có thể, và một số hệ thống do nhà cung cấp vận hành. Hãy đưa quyền dữ liệu phân phối và sự cố vào hợp đồng để các chỉ số có thể tính được. Hãy dùng các con số làm bằng chứng rằng một chương trình hiện đại hóa đang rút ngắn thời gian chờ mà không làm tăng tỷ lệ thất bại, và báo cáo mọi chỉ số cùng nhau để kết quả không bị chọn lọc (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực là rút ngắn thời gian giữa một ý tưởng và việc dùng nó trong khi giữ môi trường thật ổn định. Chi phí của chương trình có ba phần: công cụ đo (sự kiện đường ống, thẻ triển khai và phép ghép sự cố), thói quen rà soát (một cái nhìn hằng tháng về xu hướng và một mẫu hằng quý các trường hợp thất bại và làm lại), và công việc cải tiến mà các con số chỉ ra, như tự động hóa kiểm thử hay một đường ống nhanh hơn. Hai phần đầu khiêm tốn. Phần thứ ba là nơi chi phí thật nằm, và nó được chi cho năng lực kỹ thuật, không phải cho đo lường.

Lợi tức đến từ các quyết định mà các con số làm dễ hơn. Một đội có thể cho một hội đồng thay đổi thấy các thay đổi nhỏ là an toàn, và vì vậy cho nghỉ hưu một bước phê duyệt. Một nhóm nền tảng có thể thấy dịch vụ nào có đường ống chậm hay hoàn tác kém và đặt đầu tư cho phù hợp. Một đội vận hành có thể lập luận bằng dữ liệu cho một công cụ phát hiện tốt hơn. Hãy mô tả lợi tức qua các mẫu hình bạn tự quan sát được, như thời gian từ commit đến môi trường thật, tỷ lệ các bản phát hành cần một bản sửa, và tải trực ca mỗi bản phát hành, trước và sau một thay đổi. Tránh trích dẫn các con số chuẩn từ các tổ chức khác như một lợi tức kỳ vọng, vì bối cảnh của bạn sẽ khác. Tổng chi phí sở hữu bị chi phối bởi thời gian của con người, nên hãy giữ tập chỉ số nhỏ và tự động hóa việc thu thập nó (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Coi các chỉ số là thẻ điểm hiệu suất cho cá nhân.** Nó phá vỡ cơ sở nghiên cứu và làm hỏng dữ liệu. Chỉ báo cáo ở cấp dịch vụ và đội.
- **Đặt mục tiêu như "triển khai hằng ngày" hay "thời gian chờ dưới một ngày."** Mục tiêu thay thế mục đích. Hãy đặt một hướng cải thiện và một thử nghiệm, và giữ con số như một tín hiệu.
- **Xếp hạng các đội với nhau hoặc với các dải đã công bố.** Bối cảnh khác nhau và việc lợi dụng theo sau. Hãy so sánh một đội với xu hướng của chính nó, và chỉ dùng các dải như định hướng lỏng.
- **Báo cáo tốc độ mà không có sự ổn định.** Cặp đôi là điểm mấu chốt. Luôn cho thấy các nhóm thông lượng và bất ổn cùng nhau.
- **Để định nghĩa trôi.** Thất bại, triển khai và điểm bắt đầu thời gian chờ đổi một cách lặng lẽ cùng công cụ. Hãy ghi lại mọi thay đổi đối với một định nghĩa kèm lý do, và đánh dấu nó trên biểu đồ.
- **Đếm các lần triển khai của bất cứ thứ gì.** Các lần đẩy cấu hình, phát hành lên môi trường kiểm thử, và triển khai lại cùng một bản dựng thổi phồng số đếm. Hãy định nghĩa một lần triển khai lên môi trường thật, và cho thấy các loại khác riêng.
- **Bỏ qua điều được phát hành.** Các con số mạnh có thể che giấu công việc không quan trọng. Hãy đọc chúng bên cạnh các thước đo dòng chảy và kết quả (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).
- **Đuổi theo chỉ số thay vì năng lực.** Thời gian chờ giảm đáng tin nhất khi lô co lại và kiểm thử nhanh hơn. Hãy cải thiện thực hành và để con số theo sau.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | Mỗi người định nghĩa triển khai và thất bại khác nhau | Một vài đội ghi tài liệu định nghĩa của họ | Một định nghĩa bằng văn bản cho mỗi chỉ số, với đồng hồ và trường hợp loại trừ, trong sổ đăng ký chỉ số | Thay đổi định nghĩa được ghi lại và đánh dấu trên biểu đồ; các mẫu được kiểm tra mỗi quý | Định nghĩa được sửa chung với nhà cung cấp và quản trị khi chúng không còn cung cấp thông tin cho quyết định |
| Thu nhận dữ liệu | Số đếm được ghép bằng tay từ phiếu | Dữ liệu đường ống cho một số dịch vụ; sự cố được liên kết bằng tay | Lần triển khai, lý do và liên kết sự cố được thu nhận tự động cho hầu hết dịch vụ | Chất lượng dữ liệu (tỷ lệ liên kết, kiểm toán thẻ) được đo và theo dõi xu hướng | Sự kiện được chia sẻ giữa các đội và nhà cung cấp qua các giao diện đã thỏa thuận |
| Sử dụng các con số | Báo cáo lên trên như một điểm duy nhất | Các đội thỉnh thoảng xem biểu đồ của chính mình | Các nhóm thông lượng và bất ổn được đội sở hữu rà soát cùng nhau hằng tháng | Xu hướng nuôi các thử nghiệm cải tiến được tài trợ kèm rào chắn | Độ trải và xu hướng cung cấp thông tin cho đầu tư nền tảng và chính sách thay đổi toàn tổ chức |
| Rào chắn chống lợi dụng | Không có | Nhận thức không chính thức | Các rào chắn ghép đôi được liệt kê cho mỗi chỉ số | Rào chắn và mẫu được rà soát, các trường hợp lợi dụng được ghi lại | Rào chắn được tinh chỉnh liên tục khi các đội và công cụ thay đổi |

## Danh sách kiểm tra

- [ ] Năm chỉ số được định nghĩa bằng văn bản, kèm đồng hồ, trường hợp loại trừ, và ngày cùng ấn bản của hướng dẫn DORA được theo.
- [ ] Các lần triển khai lên môi trường thật được đường ống ghi lại kèm dấu thời gian, phiên bản và kết quả.
- [ ] Điểm bắt đầu thời gian chờ (commit đầu tiên, hợp nhất hoặc cái khác) được nêu và áp dụng nhất quán.
- [ ] Sự cố mang một trường cho lần triển khai gây ra chúng, được điền trong lúc giải quyết.
- [ ] Mỗi lần triển khai mang một thẻ lý do, và một mẫu được kiểm toán hằng tháng.
- [ ] Thời gian được báo cáo là trung vị và một bách phân vị cao, kèm số đếm.
- [ ] Các chỉ số thông lượng và bất ổn được cho thấy cùng nhau cho mỗi dịch vụ.
- [ ] Kích thước thay đổi được theo dõi bên cạnh tần suất triển khai và thời gian chờ.
- [ ] Các con số không được dùng trong đánh giá cá nhân hoặc để xếp hạng các đội.
- [ ] Một người sở hữu có tên rà soát các chỉ số hằng tháng và ghi lại mọi thay đổi định nghĩa.
- [ ] Một thử nghiệm cải tiến, gắn với chỉ số yếu nhất, đang chạy với một ngày rà soát.

## Lời nhắc AI

**Viết một bộ định nghĩa một trang cho năm chỉ số.**

```text
I am defining the DORA software delivery metrics for [service or application
name]. Our tools are [version control host, CI/CD system, incident tool, ITSM
tool]. Our release style is [continuous, weekly, monthly, or other]. For change
lead time, deployment frequency, failed deployment recovery time, change fail
rate, and deployment rework rate, draft a definition with where the clock starts
and stops, what is counted and excluded, the data source, and one risk of
ambiguity. Do not invent benchmark values or claim our practice matches any
published performance band. List your assumptions and the questions I should
answer to finish the definitions.
```

**Kiểm tra một tập chỉ số về rủi ro lợi dụng.**

```text
Here is how we currently compute our delivery metrics: [description of each
metric, its data source, and how it is reported]. The audience is [team,
leadership, or governance body]. For each metric, list plausible ways the number
could be inflated, hidden, or distorted without real improvement, and suggest a
paired guardrail metric or practice that would catch it. Do not invent
statistics. List your assumptions and any information you would need to be more
precise.
```

**Phân tích một bản xuất dữ liệu về các lần triển khai và sự cố.**

```text
I will paste a small export of [number] production deployments and [number]
incidents with these fields: [list fields, for example deployment id, timestamp,
result, reason tag, incident id, opened time, resolved time, deployment link].
Compute the median and 85th percentile of recovery time, the change fail rate,
and the rework rate, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Lên kế hoạch một thử nghiệm cải tiến.**

```text
Our weakest delivery metric is [metric name], currently [value as reported,
with date range and counts]. Likely causes the team has discussed are [list]. Our
constraints are [constraints, for example regulated releases, shared test
environment]. Propose three small experiments of four to six weeks, each with a
hypothesis, a way to observe the effect, a guardrail metric, and a risk. Do not
invent expected improvement figures. List your assumptions and what we should
check before starting.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề thay đổi, phát hành và sự cố liên quan và rào chắn nên nằm bên cạnh mỗi chỉ số DORA.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một phiên bản đã sửa của chủ đề này giữ nhất quán các đồng hồ, vectơ lợi dụng và tham chiếu chéo của nó.

## Điểm chính cần nhớ

- Các chỉ số DORA là năm thước đo phân phối phần mềm, ba về thông lượng và hai về sự bất ổn, và chúng hữu ích nhất khi đọc cùng nhau cho một dịch vụ.
- Hãy tính chúng từ sự kiện đường ống và sự cố với các định nghĩa bằng văn bản, vì thất bại và điểm bắt đầu thời gian chờ là các phán đoán.
- Dùng chúng để học về một hệ thống phân phối và so sánh một đội với lịch sử của chính nó, không bao giờ để xếp hạng người hay đội.
- Báo cáo trung vị, bách phân vị cao và số đếm, và ghép mọi chỉ số với một rào chắn bắt được việc lợi dụng nó.
- Cải thiện các năng lực nền tảng, như lô nhỏ, phát hiện nhanh và hoàn tác dễ, và để các con số theo sau.
- Nêu ấn bản và ngày của hướng dẫn bạn theo, vì các định nghĩa đã được tinh chỉnh theo thời gian.

## Tài liệu tham khảo và đọc thêm

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
