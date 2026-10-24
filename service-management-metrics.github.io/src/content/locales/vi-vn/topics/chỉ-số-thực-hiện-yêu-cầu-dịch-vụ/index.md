# Chỉ số thực hiện yêu cầu dịch vụ

**Hãy đo các yêu cầu thường lệ mất bao lâu từ góc nhìn của người dùng, bao nhiêu thời gian đó là chờ đợi, những mục danh mục nào thúc đẩy nhu cầu, và bao nhiêu công việc được tự động hóa, rồi dùng bức tranh đó để thiết kế lại các yêu cầu phổ biến thay vì thúc ép những người xử lý chúng.**

## Tổng quan và động lực

Một **yêu cầu dịch vụ** là một yêu cầu thường lệ từ một người dùng cho một thứ mà dịch vụ được thiết kế để cung cấp: một tài khoản, quyền truy cập một thư mục, một máy tính xách tay, một giấy phép phần mềm, một mẩu thông tin. Nó khác với một **sự cố**, là một gián đoạn không có kế hoạch đối với một dịch vụ (xem chủ đề 3.2, Số lượng và mức ưu tiên sự cố), và với một **thay đổi**, là điều sửa đổi một dịch vụ và cần một phán đoán mới về rủi ro (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi). Trong [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, công việc này được bao quát bởi thực hành quản lý yêu cầu dịch vụ, và công việc thường được mô tả như một **mô hình yêu cầu** lặp lại được: thông tin cần có, các phê duyệt, các bước và thời gian kỳ vọng. ITIL viết từ này là "fulfilment"; phần thân của chủ đề này dùng "thực hiện" theo cách viết của cuốn sách.

Yêu cầu quan trọng với các chỉ số vì chúng là nhu cầu dự đoán được. Một sự cố là một bất ngờ; một yêu cầu cho máy tính xách tay của nhân viên mới đến mỗi tháng và theo cùng các bước. Tính dự đoán được đó khiến yêu cầu là ứng viên tốt nhất cho thiết kế, chuẩn hóa và [tự động hóa quy trình](https://en.wikipedia.org/wiki/Process_automation). Nó cũng có nghĩa là sự chậm trễ hiếm khi do độ khó. Chúng do hàng đợi, phê duyệt và bàn giao, nên câu hỏi hữu ích là yêu cầu chờ ở đâu, không phải ai gõ nhanh đến đâu.

Đơn vị phân tích là **mục danh mục**: một thứ có tên mà người dùng có thể yêu cầu trong [danh mục dịch vụ](https://en.wikipedia.org/wiki/Service_catalog) (thuật ngữ của ITIL là "service catalogue"; phần còn lại của chủ đề này nói "danh mục dịch vụ"). Các thước đo theo từng mục hữu ích hơn nhiều so với một con số pha trộn đơn lẻ, vì một yêu cầu đặt lại mật khẩu và một yêu cầu dựng máy chủ có các đồng hồ khác nhau, người sở hữu khác nhau và mục tiêu hợp lý khác nhau. Một giá trị trung bình pha trộn che giấu cả hai.

Góc nhìn linh hoạt và ITIL gặp nhau ở đây với ít ma sát. ITIL hỏi dịch vụ có giao kết quả đã thỏa thuận trong thời gian đã thỏa thuận không. Thực hành dòng chảy linh hoạt hỏi công việc mất bao lâu để chảy từ yêu cầu đến xong, bao nhiêu nằm trong hàng đợi, và bao nhiêu công việc đang tiến hành cùng lúc. Một yêu cầu là một hạng mục công việc di chuyển qua một quy trình làm việc, nên các công cụ đo dòng chảy, như thời gian chu trình và tuổi hạng mục công việc, áp dụng trực tiếp (xem chủ đề 2.1, Các thước đo dòng chảy). Từ vựng khác nhau. Số học thì giống nhau.

Ba thuật ngữ lặp lại. **Thời gian thực hiện** là thời gian trôi qua từ lúc người dùng gửi yêu cầu đến lúc người dùng xác nhận, hoặc hệ thống ghi nhận, rằng thứ đó đã được giao. **Thời gian trực tiếp làm** là thời gian ai đó đang tích cực làm việc trên yêu cầu, và **thời gian đợi** là mọi thứ còn lại, gồm cả phê duyệt và chờ người dùng. Sự khác biệt giữa chúng là điều một mô hình yêu cầu nên thu hẹp. **Tỷ lệ tự động hóa** là phần các yêu cầu được thực hiện mà không có người chạm vào sau khi gửi.

Các thước đo thời gian cần được chăm sóc. Thời gian thực hiện bị lệch: hầu hết các yêu cầu kết thúc nhanh và một vài cái mất rất lâu. Một giá trị trung bình bị vài cái kéo đi, nên hãy báo cáo trung vị và một [bách phân vị](https://en.wikipedia.org/wiki/Percentile) cao như thứ 85 hoặc 95 (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Các mục tiêu đã thỏa thuận với khách hàng, như trong một [thỏa thuận mức dịch vụ (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), nên được nêu theo cùng cách: "85 phần trăm yêu cầu máy tính xách tay được thực hiện trong vòng 5 ngày làm việc" nói nhiều hơn "trung bình 3 ngày".

Cuối cùng, một lời cảnh báo từ tâm lý học của đo lường. Khi một đội bị đánh giá theo việc đóng yêu cầu nhanh, cách rẻ nhất để cải thiện con số là đổi điều được tính là đã đóng, hoặc tạm dừng đồng hồ. [Định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng đầy đủ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Mỗi chỉ số dưới đây vì vậy được ghép với một rào chắn, và không cái nào mô tả một nhân viên riêng lẻ.

## Nguyên tắc chính

- **Đo theo từng mục danh mục.** Mỗi mục có mô hình yêu cầu, người sở hữu và mục tiêu hợp lý riêng, nên các con số pha trộn gây hiểu lầm.
- **Bắt đầu đồng hồ khi người dùng hỏi và dừng nó khi người dùng có thứ đó.** Các mốc nội bộ là chẩn đoán hữu ích, nhưng chúng không phải trải nghiệm của khách hàng.
- **Tách thời gian đợi khỏi thời gian trực tiếp làm.** Khoảng cách giữa chúng cho thấy thiết kế lại sinh lời ở đâu, và hiếm khi nó nằm trong bản thân công việc.
- **Báo cáo phân phối, không phải giá trị trung bình.** Một trung vị và bách phân vị thứ 95 mô tả điều người dùng sống qua.
- **Coi nhu cầu là một tín hiệu.** Khối lượng theo mục cho thấy người dùng cần gì, cái gì gây nhầm lẫn, và cái gì xứng đáng được tự động hóa hay tự phục vụ.
- **Tự động hóa cái ổn định và thường xuyên trước.** Tỷ lệ tự động hóa là kết quả của thiết kế yêu cầu tốt, không phải mục tiêu để đuổi theo vì chính nó.
- **Đo đội và dịch vụ, không bao giờ người.** Yêu cầu chảy qua các hệ thống, và biến thiên giữa các nhân viên chủ yếu phản ánh cơ cấu công việc.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian thực hiện yêu cầu | Thời gian trôi qua để giao một yêu cầu, hiển thị dưới dạng trung vị và bách phân vị thứ 95 theo từng mục danh mục | đồng hồ bắt đầu khi người dùng gửi yêu cầu, dừng khi người dùng xác nhận đã giao hoặc việc giao được ghi nhận; các yêu cầu bị người dùng hủy bị loại trừ; thời gian chờ người dùng được báo cáo riêng, không bị trừ | ngày làm việc hoặc giờ | Lịch sử yêu cầu của công cụ ITSM | Quản lý yêu cầu dịch vụ | Thời gian chu trình trên bảng của đội (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy) | Hằng tuần, theo dõi xu hướng hằng tháng |
| Thực hiện trong mục tiêu | Tỷ lệ yêu cầu được giao trong mục tiêu đã thỏa thuận cho mục danh mục của chúng | số yêu cầu thực hiện trong mục tiêu / số yêu cầu thực hiện trong kỳ; đồng hồ như trên, các hạng mục còn mở bị loại trừ và được đếm trong tuổi tồn đọng thay vào đó | phần trăm | Lịch sử yêu cầu của công cụ ITSM; bảng mục tiêu theo mục danh mục | Quản lý mức dịch vụ | Kỳ vọng mức dịch vụ | Hằng tháng |
| Tồn đọng yêu cầu và tuổi | Số yêu cầu đang mở và các yêu cầu cũ nhất già đến đâu, theo từng mục danh mục | số yêu cầu đang mở vào cuối kỳ (số đếm); tuổi mỗi yêu cầu đang mở = ngày báo cáo trừ ngày gửi; báo cáo số đếm, tuổi trung vị và tuổi lâu nhất | số đếm và ngày | Hàng đợi yêu cầu đang mở của công cụ ITSM | Quản lý yêu cầu dịch vụ | Công việc đang làm dở và các hạng mục công việc già đi (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi) | Hằng tuần |
| Thời gian chờ phê duyệt | Thời gian một yêu cầu nằm chờ một phê duyệt | đồng hồ bắt đầu khi phê duyệt được yêu cầu, dừng khi nó được cấp hoặc từ chối; các yêu cầu không có bước phê duyệt bị loại trừ | giờ | Nhật ký phê duyệt của công cụ ITSM | Quản lý yêu cầu dịch vụ; hỗ trợ thay đổi | Thời gian bị chặn hoặc một cột "đang chờ" trên bảng | Hằng tháng |
| Khối lượng yêu cầu theo mục danh mục | Số yêu cầu được gửi cho mỗi mục, kèm tỷ lệ của nó trong tất cả yêu cầu | số yêu cầu gửi cho mỗi mục trong kỳ; các yêu cầu gửi lại như bản trùng, nếu nhận ra, bị loại trừ; báo cáo số đếm và tỷ lệ trên tổng | số đếm và phần trăm | Bản ghi yêu cầu của công cụ ITSM | Quản lý danh mục dịch vụ | Phân tích nhu cầu để định hình tồn đọng | Hằng tháng |
| Tỷ lệ tự động hóa | Phần các yêu cầu được thực hiện mà không có bước thủ công nào sau khi gửi | số yêu cầu được thực hiện đầu-cuối bằng tự động hóa / số yêu cầu thực hiện trong kỳ; một yêu cầu bị một người chạm vào ở bất kỳ bước thực hiện nào được tính là thủ công; các phê duyệt do con người không tính là bước thực hiện thủ công nếu chính sách yêu cầu chúng | phần trăm | Bản ghi thực hiện của công cụ ITSM và nhật ký nền tảng tự động hóa | Quản lý yêu cầu dịch vụ; tự động hóa trong chuỗi giá trị dịch vụ | Tự động hóa trong định nghĩa hoàn thành | Hằng tháng |
| Tỷ lệ mở lại yêu cầu | Tỷ lệ các yêu cầu đã thực hiện mà người dùng mở lại hoặc nêu lại vì kết quả sai hoặc chưa đầy đủ | số yêu cầu được mở lại hoặc nêu lại cho cùng mục bởi cùng người dùng trong vòng 7 ngày sau khi thực hiện / số yêu cầu thực hiện trong kỳ; cửa sổ 7 ngày là một ví dụ mà đội ghi ra | phần trăm | Lịch sử yêu cầu của công cụ ITSM | Quản lý yêu cầu dịch vụ | Tỷ lệ làm lại; lỗi lọt ra ngoài | Hằng tháng |

Thời gian thực hiện chỉ tính thời gian làm việc nếu đội đã thỏa thuận một lịch và ghi lại nó; nếu không hãy dùng số giờ trôi qua và nói như vậy. Chỉ số tồn đọng mang ba con số có chủ ý, vì một số đếm riêng không nói gì về sự chờ đợi. Định nghĩa tỷ lệ tự động hóa để các phê duyệt của con người ra ngoài phép tính "thủ công" vì nhiều phê duyệt là quyết định chính sách, không phải chi phí thực hiện; thời gian chờ phê duyệt được đo riêng để sự chậm trễ vẫn hiển thị.

## Khuyến nghị

### Định nghĩa các đồng hồ và đơn vị

**1. Đo theo từng mục danh mục, và công bố danh sách mục.** Bắt đầu với mười mục hàng đầu theo khối lượng, thường bao quát một phần lớn các yêu cầu, và thêm mục khi dữ liệu cho phép. Giao cho mỗi mục một người sở hữu, một mục tiêu đã nêu và một định nghĩa một dòng về "đã giao". Danh sách mục là mẫu số cho mọi thứ khác, nên hãy giữ nó trong sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

**2. Ghi ra điểm bắt đầu và dừng của đồng hồ cho từng mục.** Với hầu hết các mục, đồng hồ bắt đầu khi gửi và dừng khi người dùng dùng được thứ họ đã yêu cầu, không phải khi một phiếu được đóng. Một máy tính xách tay được giao khi nó nằm trong tay người dùng, không phải khi chuyến chuyển phát được đặt.

**3. Quyết định một lần cách xử lý việc chờ người dùng.** Một số yêu cầu đình trệ vì người dùng chưa trả lời một câu hỏi. Tạm dừng đồng hồ vì việc đó là hợp lý, nhưng nó cũng là đòn bẩy dễ bị lạm dụng nhất. Hãy ghi lần tạm dừng như một trạng thái riêng kèm lý do, báo cáo thời gian tạm dừng như một con số riêng, và rà soát tỷ lệ tạm dừng theo mục (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

### Báo cáo điều người dùng trải nghiệm

**4. Cho thấy trung vị và bách phân vị thứ 95, kèm số đếm.** Đặt cả hai trên một biểu đồ cho mỗi mục, với số yêu cầu đứng sau mỗi điểm. Một trung vị hai ngày với bách phân vị thứ 95 là hai mươi ngày cho bạn biết hầu hết người dùng được phục vụ tốt và một cái đuôi cần điều tra, điều mà giá trị trung bình bốn ngày che giấu. Khi số đếm nhỏ, hãy nói như vậy và cho thấy từng yêu cầu thay vì một bách phân vị.

**5. Làm cho tuổi của các yêu cầu đang mở hiển thị.** Thời gian thực hiện chỉ biết sau khi một yêu cầu kết thúc, nên nó trễ. Một danh sách các yêu cầu đang mở cũ nhất theo từng mục, sắp theo tuổi, cho đội biết nên nhìn đâu hôm nay. Theo ngôn ngữ dòng chảy, đây là tuổi hạng mục công việc so với thời gian chu trình thông thường của mục, và nó là góc nhìn khả thi nhất mà một hàng đợi yêu cầu có thể có.

**6. Chia thời gian trôi qua thành thời gian trực tiếp làm, phê duyệt và chờ người dùng.** Lấy một mẫu các yêu cầu đã thực hiện cho một mục và chia mỗi cái thành thời gian ở mỗi trạng thái. Hầu hết các đội thấy công việc tích cực là một phần nhỏ của thời gian trôi qua. Phát hiện này chuyển cuộc trò chuyện cải tiến từ "làm nhanh hơn" sang "loại bỏ hàng đợi giữa các bước", ý tưởng cốt lõi trong nghiên cứu về hàng đợi và dòng chảy (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi).

### Dùng nhu cầu để định hình dịch vụ

**7. Đọc khối lượng theo mục như một thông điệp từ người dùng.** Khối lượng của một mục tăng có thể có nghĩa là nhu cầu tăng, một sản phẩm gây nhầm lẫn, hoặc một thất bại ở nơi khác, như một quy trình hỏng đẩy mọi người quay lại hỏi lần nữa. Một mục khối lượng rất thấp có thể là ứng viên để cho nghỉ hưu khỏi danh mục. Hãy so sánh khối lượng với dữ liệu áp dụng (xem chủ đề 6.3, Chỉ số áp dụng dịch vụ và danh mục).

**8. Xếp hạng các ứng viên tự động hóa theo khối lượng, tính ổn định và thời gian trực tiếp làm.** Các ứng viên đầu tiên tốt nhất là khối lượng cao, hiếm biến đổi và mang thời gian trực tiếp làm đáng kể. Bắt đầu với mục có các bước vốn đã giống hệt nhau mỗi lần, như quyền truy cập một nhóm chuẩn, và tự động hóa các bước trước khi chạm vào các ngoại lệ. Hãy theo dõi tỷ lệ tự động hóa theo mục để tiến độ hiển thị, và gửi các câu hỏi về tự phục vụ và chuyển hướng về chủ đề riêng của chúng (xem chủ đề 3.7, Chỉ số tự phục vụ và tự động hóa).

**9. Thiết kế lại phê duyệt trước khi thêm người.** Thời gian chờ phê duyệt thường chi phối thời gian trôi qua. Hãy hỏi với mỗi phê duyệt liệu chính sách có yêu cầu nó không, một yêu cầu chuẩn được phê duyệt trước có đủ không, và người phê duyệt có thể là một vai trò kèm người thay thế thay vì một cá nhân không. Phê duyệt trước các yêu cầu rủi ro thấp, được hiểu rõ phản chiếu ý tưởng về thay đổi chuẩn trong hỗ trợ thay đổi, và nó loại bỏ hàng đợi mà không loại bỏ kiểm soát.

### Giữ cho các con số trung thực

**10. Luôn ghép tốc độ với chất lượng.** Hãy báo cáo thời gian thực hiện bên cạnh tỷ lệ mở lại và một tín hiệu hài lòng của người dùng cho cùng mục (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng). Một yêu cầu nhanh hơn mà quay lại bị mở lại thì chậm hơn vẻ ngoài của nó. Nếu tốc độ cải thiện và tỷ lệ mở lại tăng theo, hãy coi mức tăng tốc độ là chưa được chứng minh.

**11. Giữ yêu cầu, sự cố và thay đổi tách biệt trong dữ liệu.** Trộn chúng làm méo cả ba. Một lần đặt lại mật khẩu thực ra là triệu chứng của một dịch vụ đăng nhập lỗi là một sự cố, và một yêu cầu thay đổi cách một dịch vụ hoạt động là một thay đổi. Hãy phân loại khi tiếp nhận bằng một quy tắc ngắn, lấy mẫu các hạng mục phân loại sai hằng quý, và so sánh khối lượng yêu cầu và sự cố cạnh nhau (xem chủ đề 3.1, Chỉ số bàn dịch vụ).

**12. Rà soát bảng mục cùng đội làm công việc.** Họp hằng tháng ba mươi phút quanh bảng theo mục: khối lượng, trung vị và bách phân vị thứ 95, yêu cầu mở cũ nhất, tỷ lệ tự động hóa, tỷ lệ mở lại. Chọn một mục và một thay đổi để thử, và xem cùng bảng tháng sau để thấy điều đã xảy ra.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian thực hiện yêu cầu | Tạm dừng đồng hồ vì "chờ người dùng" dù người dùng có phải nguyên nhân hay không; đóng yêu cầu trước khi giao rồi mở lại thành yêu cầu mới; tách một yêu cầu thành nhiều yêu cầu nhỏ | Tỷ lệ thời gian tạm dừng theo mục, kèm kiểm toán mẫu các lý do tạm dừng; tỷ lệ mở lại; người dùng xác nhận việc giao trước khi đóng |
| Thực hiện trong mục tiêu | Định nghĩa lại mục tiêu cho dễ hơn; chỉ đếm các yêu cầu đã kết thúc và bỏ qua các yêu cầu mở cũ; chọn các mục nhanh vào tập mục tiêu | Tuổi tồn đọng cho các yêu cầu đang mở; thay đổi mục tiêu được ghi trong sổ đăng ký chỉ số kèm lý do; tập mục tiêu bao quát mọi mục theo khối lượng |
| Tồn đọng yêu cầu và tuổi | Đóng các yêu cầu cũ là "không phản hồi" hoặc "cũ"; chuyển yêu cầu sang hàng đợi hoặc danh mục khác để chúng rời hàng đợi được đếm | Số yêu cầu đóng mà không giao, theo lý do; việc chuyển danh mục và hàng đợi được rà soát trong buổi họp hằng tháng |
| Thời gian chờ phê duyệt | Người phê duyệt phê duyệt mà không đọc để giữ thời gian của mình thấp; người yêu cầu đeo bám người phê duyệt ngoài hệ thống để thời gian chờ được ghi lại ngắn | Rà soát mẫu các yêu cầu được phê duyệt so với chính sách; tỷ lệ mở lại và ngoại lệ bảo mật cho các mục được phê duyệt; số bước phê duyệt theo mục |
| Khối lượng yêu cầu theo mục danh mục | Giảm khối lượng bằng cách làm danh mục khó tìm hoặc làm nản việc yêu cầu; phân loại lại yêu cầu thành sự cố hoặc "yêu cầu chung" | Mức hài lòng của người dùng về danh mục; tỷ lệ liên hệ được phân loại là "khác"; dữ liệu áp dụng cho dịch vụ (xem chủ đề 6.3, Chỉ số áp dụng dịch vụ và danh mục) |
| Tỷ lệ tự động hóa | Tự động hóa các mục tầm thường để nâng tỷ lệ phần trăm; tính một yêu cầu có kịch bản mà một người vẫn kiểm tra bằng tay là tự động; giấu các bước thủ công trong một phiếu riêng | Tỷ lệ có trọng số theo khối lượng yêu cầu và thời gian trực tiếp làm đã loại bỏ; tỷ lệ tự động hóa thất bại và quay về thủ công; mẫu các yêu cầu "tự động" được truy đầu-cuối |
| Tỷ lệ mở lại yêu cầu | Làm nản việc mở lại bằng cách làm nó khó; bảo người dùng mở yêu cầu mới, điều đặt lại bộ đếm | Yêu cầu lặp lại từ cùng người dùng cho cùng mục trong cửa sổ; mức hài lòng của người dùng theo mục; cho phép mở lại từ thông báo |

Một kết quả đọc lành mạnh trông như sau. Trung vị và bách phân vị thứ 95 giảm cùng nhau, hoặc bách phân vị thứ 95 giảm trong khi trung vị giữ nguyên. Yêu cầu mở cũ nhất không già hơn nhiều so với bách phân vị thứ 95 của các yêu cầu đã thực hiện. Tỷ lệ mở lại và mức hài lòng giữ phẳng hoặc cải thiện trong khi tốc độ cải thiện. Tỷ lệ tự động hóa tăng ở các mục quan trọng về khối lượng, và bản thân khối lượng thay đổi vì những lý do đội giải thích được. Nếu một con số cải thiện mạnh trong khi rào chắn của nó trôi sang hướng ngược lại, hãy đi xem các yêu cầu bên dưới.

## Đánh đổi: ưu điểm và nhược điểm

| Lựa chọn | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Đo theo từng mục | Mục tiêu khớp với công việc; cho thấy thiết kế lại sinh lời ở đâu | Nhiều dữ liệu hơn để duy trì; các mục nhỏ có ít điểm dữ liệu |
| Trung vị và bách phân vị thứ 95 thay cho giá trị trung bình | Mô tả điều người dùng sống qua; chống được ngoại lai | Khó giải thích hơn với giám đốc quen một con số; không ổn định với các mục khối lượng thấp |
| Tạm dừng đồng hồ khi chờ người dùng | Công bằng với đội khi người dùng gây ra sự chậm trễ | Dễ bị lạm dụng; che giấu tác động của các biểu mẫu không rõ và truyền thông kém |
| Đếm tỷ lệ tự động hóa | Làm tiến độ tự động hóa hiển thị và gắn nó với chi phí | Thưởng cho các tự động hóa dễ; không nói gì về chất lượng nếu không ghép với tỷ lệ thất bại |
| Đo từ lúc người dùng gửi đến lúc người dùng xác nhận | Khớp với trải nghiệm của khách hàng | Phụ thuộc vào xác nhận của người dùng, thường thiếu; cần một quy tắc mặc định |
| Tách nghiêm ngặt yêu cầu khỏi sự cố | Dữ liệu sạch hơn và mục tiêu tốt hơn | Cần kỷ luật tiếp nhận và các cuộc tranh luận về trường hợp biên |

Sự đánh đổi trung tâm là giữa một con số sạch và một con số công bằng. Một đồng hồ nghiêm ngặt không bao giờ tạm dừng thì đơn giản và khó lợi dụng, nhưng nó phạt đội khi người dùng chậm. Một đồng hồ linh hoạt thì công bằng hơn nhưng cần kiểm toán. Hầu hết các đội làm tốt khi bắt đầu nghiêm ngặt, thêm một trạng thái tạm dừng tường minh kèm lý do, và báo cáo tỷ lệ tạm dừng một cách công khai.

## Câu hỏi để thảo luận với đội nhóm

**1. Ba mục danh mục nào khiến người dùng của chúng ta chờ nhiều nhất, và làm sao chúng ta biết?**
Mang bảng theo mục gồm khối lượng, trung vị và thời gian thực hiện bách phân vị thứ 95. Yêu cầu nhóm chọn mục theo tổng thời gian chờ (khối lượng nhân thời gian chờ điển hình), không phải theo mức khó chịu. So sánh câu trả lời với trực giác đầu tiên của mọi người. Người điều phối nên ghi lại nơi dữ liệu và trực giác khác nhau.

**2. Đồng hồ của chúng ta bắt đầu và dừng khi nào, và một người dùng có đồng ý không?**
Chọn một mục phổ biến và đi qua hành trình của nó như người dùng thấy, từ cú nhấp đầu tiên đến lúc họ dùng được kết quả. Đánh dấu nơi trạng thái phiếu của chúng ta nói "xong" và nơi người dùng sẽ nói "xong". Bất kỳ khoảng cách nào giữa hai cái là sự chờ đợi vô hình. Thống nhất một thay đổi cho sự kiện dừng, và ghi nó vào sổ đăng ký chỉ số.

**3. Bao nhiêu thời gian trôi qua của chúng ta là con người làm việc, và bao nhiêu là chờ đợi?**
Lấy mẫu mười yêu cầu đã thực hiện cho một mục và chia mỗi cái thành thời gian trực tiếp làm, phê duyệt và chờ người dùng. Cho thấy kết quả dưới dạng một thanh xếp chồng. Hỏi điều gì phải đúng để sự chờ giảm một nửa. Câu hỏi này thường chuyển căn phòng từ "chúng ta cần thêm nhân sự" sang "chúng ta cần ít bàn giao hơn".

**4. Những phê duyệt nào có thể được thay bằng một quy tắc thống nhất trước?**
Liệt kê các phê duyệt cho các mục hàng đầu và lý do chính sách cho từng cái. Nơi không ai nhớ lần từ chối gần nhất, phê duyệt đó có thể chỉ là một nghi lễ.

**5. Nếu chúng ta tự động hóa mục danh mục kế tiếp, con số có tăng vì lý do đúng không?**
Thảo luận cách tỷ lệ tự động hóa có thể tăng qua các mục dễ hoặc khối lượng thấp trong khi người dùng không thấy khác biệt. Hỏi đội sẽ đo gì để xác nhận một tự động hóa có giúp ích: thời gian trực tiếp làm đã loại bỏ, tỷ lệ thất bại, tỷ lệ mở lại và mức hài lòng. Quyết định mục nào để tự động hóa tiếp theo dùng khối lượng và thời gian trực tiếp làm, không phải chỉ sự dễ dàng.

**6. Chúng ta sẽ làm gì nếu một con số trên trang này tệ đi, và ai sẽ bị đổ lỗi?**
Hãy chạy thí nghiệm tư duy công khai. Hỏi đội sẽ bị cám dỗ đổi gì trong dữ liệu trước khi đổi dịch vụ. Thống nhất rằng phản ứng đầu tiên với một con số tệ đi là xem các yêu cầu bên dưới nó.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội sản phẩm tạo ra yêu cầu về dịch vụ của chính họ: quyền truy cập môi trường, đường ống mới, dữ liệu kiểm thử, khóa giấy phép. Thời gian thực hiện dài cho những yêu cầu này hiện ra như công việc nhàn rỗi trong dòng chảy của chính đội, nên thước đo thuộc về bảng của họ dưới dạng một trạng thái bị chặn. Các đội sở hữu một dịch vụ nên công bố các mục yêu cầu và mục tiêu riêng của mình, và coi các yêu cầu lặp lại là ứng viên tồn đọng (xem chủ đề 2.6, Chỉ số tồn đọng và tinh chỉnh). Nơi một yêu cầu thực ra là một năng lực nền tảng còn thiếu, nhu cầu lặp lại là lý do để xây nó.

### Đội dịch vụ và vận hành

Với những người thực hiện yêu cầu, bảng theo mục là một bản đồ về công sức đi đâu. Họ biết bước nào thủ công, phê duyệt nào đình trệ, và biểu mẫu nào tạo ra đầu vào mơ hồ. Họ nên sở hữu các mô hình yêu cầu, tồn đọng tự động hóa và buổi rà soát hằng tháng, và họ nên là khán giả đầu tiên của dữ liệu. Các con số mô tả hàng đợi và quy trình, nên hãy nói rõ rằng không ai bị xếp hạng và biến thiên giữa mọi người chủ yếu phản ánh cơ cấu các yêu cầu họ nhận.

### Lãnh đạo và quản trị

Lãnh đạo cần một góc nhìn ngắn: trung vị và bách phân vị thứ 95 cho các mục chính, tỷ lệ thực hiện trong mục tiêu, các yêu cầu mở cũ nhất, và xu hướng của tỷ lệ tự động hóa và chi phí mỗi yêu cầu (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị). Nhiệm vụ quản trị là hỏi điều gì đã thay đổi, không phải ai chậm. Lãnh đạo cũng phê duyệt phần chính sách của các phê duyệt, nên họ nắm đòn bẩy giảm sự chờ đợi nhiều nhất.

### Khách hàng và người dùng

Người dùng quan tâm ba điều: bao lâu, dễ đoán đến đâu, và tốn bao nhiêu công sức. Họ hiếm khi quan tâm các trạng thái nội bộ. Hãy cho họ thấy một mục tiêu rõ ràng cho mỗi mục ("máy tính xách tay trong năm ngày làm việc"), nói họ yêu cầu của mình đang ở đâu, và yêu cầu họ xác nhận đã giao. Thu thập một tín hiệu hài lòng một câu hỏi khi đóng và đọc các bình luận.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một trường đại học khu vực (một tổ chức hư cấu) vận hành một bàn dịch vụ và một đội nền tảng nhỏ. Các con số dưới đây chỉ mang tính minh họa, không đến từ tổ chức thật nào.

Ở buổi rà soát hằng tháng đội xem bảng theo mục. Trên mọi yêu cầu, thời gian thực hiện trung bình là 3,1 ngày làm việc, trông chấp nhận được và gần như không dịch chuyển trong một năm. Theo mục, bức tranh khác. "Quyền truy cập ổ đĩa chung" có trung vị 0,4 ngày và bách phân vị thứ 95 là 2 ngày. "Giấy phép phần mềm của khoa" có trung vị 2 ngày và bách phân vị thứ 95 là 11 ngày. "Máy tính xách tay cho nhân viên mới" có trung vị 6 ngày và bách phân vị thứ 95 là 15 ngày. Ba mục hàng đầu theo khối lượng là quyền truy cập ổ đĩa chung, yêu cầu giấy phép và máy tính xách tay cho nhân viên mới, với tỷ lệ minh họa là 32, 21 và 9 phần trăm của tất cả yêu cầu.

Đội lấy mẫu mười yêu cầu máy tính xách tay và chia thời gian. Kết quả minh họa: khoảng 0,5 ngày công việc trực tiếp, 2,5 ngày chờ phê duyệt của một người quản lý trực tiếp, 1,5 ngày chờ xác nhận tồn kho, và phần còn lại nằm trong hàng đợi chuyển phát. Thời gian chờ phê duyệt là phần lớn nhất.

Quyết định theo sau từ dữ liệu. Đội đề xuất, cùng chủ sở hữu tài chính và chủ sở hữu bảo mật, rằng các máy tính xách tay trong danh mục chuẩn được phê duyệt trước khi vai trò của nhân viên mới được bộ phận nhân sự xác nhận, với người quản lý được thông báo thay vì được hỏi. Họ cũng nối bước kiểm tra tồn kho với hệ thống kiểm kê. Họ đặt thử nghiệm cho một quý và thống nhất điều gì được tính là thành công: bách phân vị thứ 95 cho máy tính xách tay giảm, và tỷ lệ mở lại và điểm hài lòng giữ nguyên.

Một rủi ro lợi dụng xuất hiện vào tháng thứ hai. Trung vị cho giấy phép giảm mạnh, từ 2 ngày xuống dưới 1. Buổi rà soát nhận thấy tỷ lệ thời gian tạm dừng "chờ người dùng" của mục đã nhảy từ mức minh họa 5 phần trăm lên 40 phần trăm, và tỷ lệ mở lại đã tăng. Một mẫu cho thấy nhân viên đã tạm dừng các yêu cầu bằng một thông điệp chung ngay khi một giấy phép cần bất kỳ kiểm tra nào, điều dừng đồng hồ. Đội không đổ lỗi cho nhân viên. Họ thấy rằng mục tiêu làm việc tạm dừng trở nên hấp dẫn và trường lý do tạm dừng là văn bản tự do. Họ đổi lý do tạm dừng thành một danh sách ngắn, yêu cầu một câu hỏi cụ thể cho người dùng, và thêm tỷ lệ thời gian tạm dừng như một cột thường trực cạnh trung vị. Trung vị giấy phép quay về gần mức trước đó, tỷ lệ mở lại giảm, và đội dùng thời gian thảo luận tiết kiệm được để thiết kế lại biểu mẫu giấy phép, vốn đang tạo ra những yêu cầu không rõ.

Sau quý (minh họa), bách phân vị thứ 95 của máy tính xách tay giảm từ 15 xuống 9 ngày và tỷ lệ tự động hóa cho quyền truy cập ổ đĩa chung đạt 70 phần trăm. Đội ghi lại cả hai thay đổi và chọn biểu mẫu giấy phép làm thử nghiệm kế tiếp.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy coi các yêu cầu phổ biến là những sản phẩm nhỏ mà đội cải thiện liên tục cùng những người dùng chúng. Điều cần lưu ý là một mục tiêu thời gian thực hiện có thể dẫn đến việc đóng yêu cầu sớm hoặc tách chúng, nên hãy ghép nó với tỷ lệ mở lại yêu cầu.

### AI

AI có thể soạn câu trả lời, điền biểu mẫu và định tuyến yêu cầu, và có thể hoàn tất một số yêu cầu mà không có người nào tham gia. Hãy ghép tỷ lệ tự động hóa với tỷ lệ mở lại yêu cầu và với tỷ lệ các yêu cầu do AI xử lý mà sau đó cần một người. Điều cần lưu ý là một AI đọc sai một yêu cầu có thể tạo ra quyền truy cập hoặc đơn hàng sai, nên các quy tắc phê duyệt vẫn áp dụng.

### Tự động hóa

Hãy tự động hóa phê duyệt, cấp phát và cập nhật trạng thái cho các yêu cầu chuẩn, và đo tự động hóa về thất bại và làm lại thủ công. Hãy cho thấy thời gian chờ phê duyệt riêng, vì nó thường là sự chờ dài nhất. Điều cần lưu ý là tự động hóa không có người sở hữu rõ ràng để lại các yêu cầu thất bại trong một hàng đợi không ai theo dõi.

### Phân tích

Hãy cho thấy thời gian thực hiện như một phân phối theo mục danh mục và gồm cả yêu cầu mở cũ nhất. Quyết định được cung cấp thông tin là thiết kế lại yêu cầu nào trước. Điều cần lưu ý là trộn các mục đơn giản và phức tạp trong một giá trị trung bình che giấu cả hai.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một công ty khởi nghiệp có ít loại yêu cầu và không có danh mục chính thức, và cùng những người đó xử lý yêu cầu và xây sản phẩm. Hãy đo ba hoặc bốn yêu cầu chặn người mới gia nhập, như tài khoản và thiết bị, và theo dõi yêu cầu mở cũ nhất. Hãy tự động hóa việc tiếp nhận nhân viên mới sớm, vì mỗi lần tuyển dụng đều lặp lại nó.

**Doanh nghiệp nhỏ.** Một doanh nghiệp nhỏ thường dựa vào một người CNTT hoặc một nhà cung cấp bên ngoài. Hãy dùng một bảng chung đơn giản với một cột cho mỗi trạng thái và theo dõi tuổi và khối lượng yêu cầu theo loại. Hãy yêu cầu nhà cung cấp cho khối lượng hằng tháng theo mục và yêu cầu mở cũ nhất.

**Doanh nghiệp lớn.** Một doanh nghiệp lớn có hàng trăm mục danh mục, nhiều nhóm thực hiện và các phê duyệt nhiều lớp. Hãy tập trung vào các mục hàng đầu theo khối lượng và các mục chờ lâu nhất theo tổng thời gian chờ. Chuẩn hóa định nghĩa đồng hồ giữa các nhóm thực hiện trước khi so sánh chúng, và báo cáo các bàn giao liên nhóm riêng (xem chủ đề 9.3, Chỉ số cộng tác và bàn giao). Thời gian thực hiện của nhà cung cấp thuộc về cùng góc nhìn, đo từ yêu cầu của khách hàng, không phải từ lúc nhà cung cấp nhận.

**Chính phủ và khu vực công.** Các cơ quan công thêm vào các phê duyệt bắt buộc, quy tắc mua sắm và nghĩa vụ hồ sơ, nên một phần thời gian chờ là chính sách và nên được gắn nhãn như vậy thay vì tính là sự chậm trễ cần loại bỏ. Hãy công bố mục tiêu theo từng mục bằng ngôn ngữ giản dị nơi các cam kết dịch vụ là công khai. Báo cáo theo cách mà một cơ quan quản lý hay cơ quan giám sát có thể tái tạo, với các định nghĩa được viết ra.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Yêu cầu là một phần lớn và lặp lại của công việc đến bàn dịch vụ, nên ngay cả việc thiết kế lại khiêm tốn cũng có tác động rộng. Các động lực chính là thời gian chờ ngắn hơn và dễ đoán hơn cho người dùng, công sức xử lý thấp hơn mỗi yêu cầu, ít liên hệ lặp lại hơn, và năng lực được giải phóng cho công việc vấn đề và cải tiến.

Phía chi phí chủ yếu là một lần và khiêm tốn. Định nghĩa các mục danh mục, thống nhất các đồng hồ và đảm bảo công cụ ghi lại các trạng thái cần thiết là vài ngày công việc cho mỗi nhóm, cộng một ít công sức liên tục để giữ đường ống đúng (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo). Tự động hóa có chi phí xây dựng và bảo trì riêng, gồm giám sát các tự động hóa, xử lý thất bại và cập nhật chúng khi các hệ thống đích thay đổi. Hãy tính điều đó vào tổng chi phí sở hữu ngoài giấy phép hay thời gian xây dựng.

Lợi tức nên được ước lượng từ dữ liệu của chính bạn chứ không phải từ một chuẩn so sánh chung. Với một mục, nhân khối lượng hằng tháng với thời gian trực tiếp làm tiết kiệm được và với chi phí tính cả phụ phí của thời gian, rồi trừ chi phí xây dựng và vận hành thay đổi. Thêm giá trị của thời gian chờ đã loại bỏ cho người dùng, dùng một phương pháp bạn bảo vệ được, và cho thấy nó riêng vì nó là một ước lượng thuộc loại khác. Không số liệu nào trong chủ đề này là chuẩn so sánh, và các con số ví dụ chỉ mang tính minh họa. Hãy nối hồ sơ kinh doanh với chi phí đơn vị mỗi yêu cầu nơi có dữ liệu tài chính (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Một giá trị trung bình pha trộn cho mọi yêu cầu.** Nó giấu cả những chiến thắng nhanh lẫn cái đuôi dài. Hãy báo cáo theo mục, với trung vị và bách phân vị thứ 95.
- **Đóng phiếu và gọi là đã giao.** Người dùng có thể vẫn chưa có gì. Hãy định nghĩa việc giao từ phía người dùng và yêu cầu xác nhận.
- **Trạng thái tạm dừng tự do.** Một trạng thái "đang chờ" không có lý do cho phép đồng hồ bị dừng vì bất kỳ nguyên nhân nào. Hãy dùng một danh sách ngắn các lý do và báo cáo tỷ lệ tạm dừng.
- **Đếm tự động hóa theo số mục.** Mười mục hiếm được tự động hóa có thể nâng tỷ lệ phần trăm mà không giúp ai. Hãy gán trọng số theo khối lượng và thời gian trực tiếp làm.
- **Xếp hạng nhân viên theo số yêu cầu đã đóng.** Nó thưởng cho việc chọn phiếu dễ và phạt những người nhận phiếu khó. Chỉ báo cáo ở cấp đội và mục.
- **Giấu nhu cầu để trông hiệu quả.** Làm danh mục khó dùng giảm khối lượng và tăng sự bực bội. Hãy ghép khối lượng với dữ liệu hài lòng và áp dụng.
- **Coi phê duyệt là bất khả xâm phạm.** Phê duyệt thường là sự chậm trễ lớn nhất và hiếm khi được rà soát. Hãy hỏi mỗi cái bảo vệ điều gì và một quy tắc có làm được việc đó không.
- **Trộn yêu cầu với sự cố.** Nó làm méo cả hai tập số liệu. Hãy phân loại khi tiếp nhận và lấy mẫu phân loại.

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | Yêu cầu được đếm như phiếu; điểm kết thúc của đồng hồ là bất cứ điều gì "đã đóng" nghĩa là | Một số đội định nghĩa điểm bắt đầu và dừng theo mục; định nghĩa khác nhau | Một định nghĩa đồng hồ bằng văn bản cho mỗi mục danh mục, dùng chung giữa các đội | Định nghĩa được rà soát theo nhịp và thay đổi được ghi lại kèm lý do | Định nghĩa theo góc nhìn của khách hàng xuyên qua nhà cung cấp và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Dữ liệu và báo cáo | Số đếm kéo bằng tay từ công cụ | Báo cáo cho một số mục từ công cụ ITSM; thời gian trung bình | Trung vị và bách phân vị thứ 95 theo mục từ một nguồn dữ liệu | Xu hướng, tuổi tồn đọng và tỷ lệ thời gian tạm dừng được rà soát cùng rào chắn của chúng | Dữ liệu thực hiện từ các đội nội bộ và nhà cung cấp được kết hợp và nối với kết quả của người dùng |
| Nhu cầu và tự động hóa | Yêu cầu được xử lý từng cái; không có cái nhìn về nhu cầu lặp lại | Các mục hàng đầu được xác định không chính thức; vài tập lệnh | Mô hình yêu cầu được ghi tài liệu cho các mục hàng đầu; tồn đọng tự động hóa được xếp hạng theo khối lượng và thời gian trực tiếp làm | Tỷ lệ tự động hóa và tỷ lệ thất bại được theo dõi; phê duyệt được thiết kế lại dựa trên bằng chứng | Nhu cầu, tự phục vụ và tự động hóa được lập kế hoạch cùng nhau trong toàn tổ chức và thích ứng liên tục |
| Sử dụng trong cải tiến | Các con số được báo cáo lên trên, không được dùng | Thỉnh thoảng sửa sau khiếu nại | Rà soát hằng tháng bởi đội làm công việc | Cải tiến được tài trợ gắn với kết quả theo mục | Ý tưởng cải tiến đến từ các đội, người dùng và nhà cung cấp, và kết quả quay lại thiết kế danh mục |

## Danh sách kiểm tra

- [ ] Mỗi mục danh mục trong phạm vi có một người sở hữu, một định nghĩa một dòng về "đã giao" và một mục tiêu đã nêu.
- [ ] Các sự kiện bắt đầu và dừng của đồng hồ thực hiện được viết ra cho từng mục.
- [ ] Chờ người dùng là một trạng thái riêng với một danh sách ngắn các lý do, và thời gian tạm dừng được báo cáo.
- [ ] Báo cáo cho thấy trung vị và bách phân vị thứ 95 theo mục, kèm số yêu cầu đứng sau mỗi cái.
- [ ] Các yêu cầu đang mở cũ nhất hiển thị với đội mỗi tuần.
- [ ] Thời gian trực tiếp làm, phê duyệt và chờ đợi đã được lấy mẫu cho các mục hàng đầu.
- [ ] Khối lượng theo mục được rà soát hằng tháng và so sánh với dữ liệu áp dụng hoặc hài lòng.
- [ ] Tỷ lệ tự động hóa được gán trọng số theo khối lượng và ghép với tỷ lệ thất bại và quay về thủ công.
- [ ] Mỗi chỉ số tốc độ được ghép với tỷ lệ mở lại và một tín hiệu hài lòng của người dùng.
- [ ] Yêu cầu, sự cố và thay đổi được phân loại khi tiếp nhận, và phân loại được lấy mẫu.
- [ ] Không báo cáo nào xếp hạng từng nhân viên.

## Lời nhắc AI

**Soạn một mô hình yêu cầu và định nghĩa đồng hồ cho một mục danh mục.**

```text
I am defining the measurement for this catalog item: [catalog item name]. The
steps today are [list steps and who does each], the approvals are [list
approvals], and our tool is [ITSM tool]. Draft a request model with the
information required, the start and stop events of the fulfillment clock, the
states in which the clock may pause and the allowed reasons, and a list of
timestamps I need the tool to record. Do not invent benchmark values or tool
features. List your assumptions and the questions I should answer to finish the
definition.
```

**Chia thời gian trôi qua thành thời gian trực tiếp làm và chờ đợi.**

```text
Here is a sample of [number] fulfilled requests for [catalog item] with state
change times: [paste anonymized state history, no names]. Compute, for each
request and for the sample, the hands-on time, approval wait, and waiting-for-user
time, and show the median and the range. Point out which state holds the most
time and what questions I should ask the team about it. Do not infer causes
without evidence, and do not compare individual people. List your assumptions.
```

**Xếp hạng các ứng viên tự động hóa.**

```text
Here is a table of catalog items with monthly volume, median hands-on time,
variation in steps, and the systems each touches: [paste table]. Suggest a way
to rank automation candidates using volume, stability, and hands-on time, and
explain the ranking for the top [number] items. Flag items where automation could
create security or quality risk, and list what I should verify with [control
owner role] first. Do not invent savings figures or benchmark values. List your
assumptions.
```

**Rà soát một bảng điều khiển thực hiện về rủi ro lợi dụng.**

```text
This is our request fulfillment dashboard: [describe metrics, definitions, and
targets]. For each metric, list how it could be gamed or misread, the
observable sign in the data, and a paired guardrail metric or practice. Check
that nothing ranks individuals, and suggest wording changes that reduce
pressure on the team. Do not invent thresholds; ask me for any you need. List
your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm định nghĩa, vectơ lợi dụng và rào chắn cho một chỉ số yêu cầu, và các chủ đề lân cận ghép với nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng các chỉnh sửa cho chủ đề này giữ nguyên mẫu, các đồng hồ và các cặp ghép rào chắn.

## Điểm chính cần nhớ

- Đo việc thực hiện theo từng mục danh mục, từ lúc người dùng gửi đến lúc người dùng xác nhận, và báo cáo trung vị và một bách phân vị cao.
- Hầu hết thời gian trôi qua là chờ đợi, nên hãy chia thời gian trực tiếp làm, phê duyệt và chờ người dùng trước khi quyết định sửa gì.
- Đọc khối lượng theo mục như một thông điệp từ người dùng, và tự động hóa các mục thường xuyên và ổn định trước.
- Ghép mọi con số tốc độ với tỷ lệ mở lại và một tín hiệu hài lòng, và báo cáo thời gian tạm dừng một cách công khai.
- Mô tả hàng đợi và quy trình, không bao giờ mô tả con người.

## Tài liệu tham khảo và đọc thêm

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
