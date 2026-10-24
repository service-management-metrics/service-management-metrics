# Chỉ số hỗ trợ thay đổi

**Các chỉ số hỗ trợ thay đổi cho thấy tổ chức của bạn có để các thay đổi có lợi chảy một cách an toàn và nhanh chóng hay không, nên hãy đo cách các thay đổi được phân loại, chúng chờ một quyết định bao lâu, và bao nhiêu phần của quyết định đó do đường ống tự động đưa ra, và ghép mọi thước đo tốc độ với một cái nhìn về rủi ro.**

## Tổng quan và động lực

Dịch vụ nào cũng thay đổi. Các đội thêm tính năng, vá thư viện, xoay vòng chứng chỉ, đổi cỡ cơ sở dữ liệu và cho các thành phần cũ nghỉ hưu. Trong khung [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, thực hành điều chỉnh việc này được gọi là hỗ trợ thay đổi (change enablement), và mục đích đã nêu của nó là tối đa hóa số thay đổi dịch vụ và sản phẩm thành công bằng cách bảo đảm rủi ro được đánh giá đúng, thay đổi được ủy quyền, và lịch thay đổi được quản lý. Các phiên bản ITIL trước gọi thực hành này là [quản lý thay đổi](https://en.wikipedia.org/wiki/Change_management_(ITSM)), và nhiều tổ chức vẫn dùng tên đó. Tên mới báo hiệu một sự đổi trọng tâm: thực hành tồn tại để cho phép thay đổi tốt, không phải để cản nó.

Một **thay đổi** trong ITIL 4 là việc thêm, sửa hoặc gỡ bất cứ thứ gì có thể có tác động trực tiếp hoặc gián tiếp lên dịch vụ. Phạm vi đó rộng hơn một lần triển khai mã. Nó bao gồm chỉnh sửa cấu hình, cập nhật hạ tầng, thay đổi quyền truy cập, hành động của nhà cung cấp, và tài liệu mà người vận hành dựa vào. Một đội linh hoạt thường thấy một thay đổi là một pull request được phát hành. Một đội vận hành dịch vụ thấy nó là một mục trên lịch. Cả hai góc nhìn đều hợp lệ, và các chỉ số trong chủ đề này hiệu quả nhất khi mô tả cùng một sự kiện từ cả hai phía.

ITIL 4 mô tả ba loại thay đổi, và các chỉ số trong chủ đề này phụ thuộc vào chúng. Hãy kiểm tra từ ngữ chính xác trong các ấn phẩm hiện hành của chủ sở hữu khung; chủ đề này tóm tắt mẫu hình được ghi nhận rộng rãi tính đến tháng 10 năm 2026.

- Một **thay đổi chuẩn** có rủi ro thấp và được hiểu rõ. Nó theo một quy trình có tài liệu và được ủy quyền trước, nên không cần phê duyệt từng trường hợp.
- Một **thay đổi thông thường** cần đánh giá và ủy quyền trước khi tiến hành. Độ sâu đánh giá tăng theo rủi ro và tác động.
- Một **thay đổi khẩn cấp** phải xảy ra gấp, thường để khôi phục dịch vụ hoặc đóng một lỗ hổng nghiêm trọng. Nó theo một con đường rút gọn với việc rà soát đầy đủ hơn sau đó.

Các thuật ngữ khác lặp lại dưới đây. Một **cơ quan thay đổi** là người hoặc nhóm nắm quyền phê duyệt một thay đổi thuộc loại nhất định. Một **hội đồng tư vấn thay đổi (CAB)** là nhóm rà soát các thay đổi được đề xuất và tư vấn hoặc quyết định. **Thời gian chờ phê duyệt** là thời gian một thay đổi chờ một quyết định ủy quyền. Một **bách phân vị** là giá trị mà một tỷ lệ nhất định các quan sát nằm dưới, nên bách phân vị thứ 85 là con số mà 85 phần trăm thay đổi vượt qua.

Vì sao đo tất cả điều này? Bằng chứng đã công bố mạnh nhất về kiểm soát thay đổi đến từ chương trình nghiên cứu của DevOps Research and Assessment (DORA). Hướng dẫn của nó báo cáo rằng phê duyệt bên ngoài nặng nề, như CAB hoặc chữ ký của quản lý cấp cao, có liên hệ với hiệu suất phân phối phần mềm tệ hơn, và không tìm thấy bằng chứng rằng rà soát bên ngoài chính thức hơn làm giảm tỷ lệ thay đổi thất bại. Nó khuyến nghị rà soát ngang hàng, kiểm thử tự động và thay đổi nhỏ thay vào đó, với một vai trò chiến lược cho bất kỳ hội đồng trung tâm nào. Đây là những phát biểu về mối liên hệ trong dữ liệu khảo sát, không phải quy luật, và các trang DORA không đưa ra kích thước hiệu ứng cho khẳng định, nên hãy coi chúng là lý do mạnh để nhìn vào dữ liệu của chính bạn và không phải phán quyết về bất kỳ kiểm soát nào. Tài liệu hỗ trợ thay đổi trong *Service Management Guide* tóm tắt cùng nghiên cứu.

Góc nhìn linh hoạt và ITIL gặp nhau ở câu hỏi kiểm soát sống ở đâu. Trong một đường ống phân phối, phần lớn đánh giá có thể diễn ra liên tục: một người rà soát phê duyệt mã, kiểm thử tự động kiểm tra hành vi, và công cụ triển khai ghi bản ghi. Điều này thỏa mãn ý định của [tách biệt nhiệm vụ](https://en.wikipedia.org/wiki/Separation_of_duties) khi việc rà soát được ghi lại và tác giả không thể phê duyệt công việc của chính mình. Các chỉ số cho bạn biết điều này có thực sự đang xảy ra không, hay đường ống là một con đường nhanh mà hầu hết thay đổi vẫn rời ra để chờ trong một hàng đợi.

Chủ đề này bao quát phía dòng chảy và kiểm soát của thay đổi: khối lượng, cơ cấu loại, thời gian chờ và tự động hóa. Nó không bao quát việc thay đổi có thành công không. Tỷ lệ thay đổi thất bại, tỷ lệ khẩn cấp, các thước đo hoàn tác và hotfix thuộc chủ đề 4.4, Thay đổi thất bại và làm lại, và các thước đo thông lượng và bất ổn của DORA nằm trong chủ đề 2.8, Chỉ số DORA. Tần suất triển khai và phát hành nằm trong chủ đề 4.5, Chỉ số phát hành và triển khai. Phía sự cố của một thay đổi tồi nằm trong chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố, và chủ đề 3.4, Chỉ số sự cố lớn.

Các chỉ số thay đổi nhanh chóng chịu [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): một mục tiêu cho thời gian phê duyệt mời gọi những phê duyệt nhanh, rỗng, và một mục tiêu cho tỷ lệ thay đổi chuẩn mời gọi việc phân loại lại công việc rủi ro thành thường lệ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Khớp kiểm soát với rủi ro.** Mục đích là kiểm soát tương xứng: thay đổi rủi ro thấp đi con đường nhanh, được ủy quyền trước, và thay đổi rủi ro cao được xem xét thật sự. Một quy trình duy nhất cho mọi thứ thì chậm với hầu hết thay đổi và nông với những thay đổi nguy hiểm.
- **Đo thời gian chờ, không chỉ công việc.** Thời gian chờ phê duyệt thường chi phối thời gian một thay đổi đã xong phải đợi trước khi đến môi trường thật. Nó vô hình trừ khi có người ghi lại lúc yêu cầu phê duyệt và lúc được cấp.
- **Đếm loại trước khi đếm bất cứ gì khác.** Khối lượng, tốc độ và rủi ro khác nhau rõ rệt giữa thay đổi chuẩn, thông thường và khẩn cấp. Một giá trị trung bình duy nhất qua cả ba giấu mọi tín hiệu hữu ích.
- **Ưu tiên bằng chứng tự động, được ghi lại hơn các cuộc họp.** Rà soát ngang hàng, kiểm thử đạt và kiểm tra đường ống tạo ra bản ghi mà không cần một khung lịch. Hãy đo đường ống nắm được bao nhiêu phần của quyết định phê duyệt.
- **Mô tả một dịch vụ hoặc đội, không bao giờ một người.** Người phê duyệt và người yêu cầu làm việc bên trong một hệ thống. Xếp hạng cá nhân theo số phê duyệt đã cấp hay từ chối dạy mọi người phê duyệt tất cả hoặc không gì cả.
- **Ghép tốc độ với an toàn.** Phê duyệt nhanh hơn chỉ là tin tốt nếu bức tranh thất bại ổn định. Hãy đọc những chỉ số này cạnh chủ đề 4.4, Thay đổi thất bại và làm lại.
- **Viết ra các quy tắc phân loại.** Một thay đổi là chuẩn, thông thường hay khẩn cấp là một phán đoán phải tái lập được. Hãy ghi các tiêu chí và rà soát một mẫu mỗi quý.

## Định nghĩa chỉ số

Bảng nêu các đồng hồ và trường hợp loại trừ mà đội của bạn nên viết ra. Dữ liệu đến từ công cụ thay đổi hoặc phiếu, các sự kiện kiểm soát phiên bản và đường ống, và các bản ghi phê duyệt (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Khối lượng thay đổi theo loại | Số thay đổi hoàn tất, chia theo chuẩn, thông thường và khẩn cấp | Số bản ghi thay đổi đạt trạng thái đã triển khai trong kỳ, nhóm theo loại tại thời điểm phê duyệt; thay đổi bị hủy và rút lại bị loại trừ và báo cáo riêng; báo cáo theo dịch vụ, không theo người | Số thay đổi mỗi tuần hoặc tháng, theo loại | Bản ghi thay đổi trong công cụ ITSM, ghép với sự kiện triển khai của đường ống | Hỗ trợ thay đổi | Thông lượng của các hạng mục công việc đã xong; nội dung phát hành mỗi bản tăng | Hằng tuần, xem lại hằng tháng |
| Tỷ lệ thay đổi chuẩn | Tỷ lệ thay đổi hoàn tất đi con đường được ủy quyền trước | Số thay đổi chuẩn hoàn tất trong kỳ / tất cả thay đổi hoàn tất trong kỳ; một thay đổi bị phân loại lại sau sự việc được tính theo loại cuối cùng của nó và việc phân loại lại được ghi nhật ký | Phần trăm | Bản ghi thay đổi với loại và lịch sử phân loại lại | Hỗ trợ thay đổi | Công việc thường lệ được thỏa thuận làm việc và định nghĩa hoàn thành của đội bao quát | Hằng tháng |
| Thời gian chờ phê duyệt | Thời gian một thay đổi chờ một quyết định ủy quyền | Đồng hồ bắt đầu khi yêu cầu được nộp là sẵn sàng đánh giá và dừng khi quyết định ủy quyền được ghi lại; thời gian chờ người yêu cầu cung cấp thông tin bị loại trừ và cho thấy riêng; báo cáo trung vị và bách phân vị thứ 85 cho thay đổi thông thường trong kỳ; thay đổi chuẩn không có bước phê duyệt bị loại trừ | Giờ hoặc ngày làm việc | Dấu thời gian trên bản ghi thay đổi hoặc sự kiện phê duyệt trong đường ống | Hỗ trợ thay đổi | Thời gian đợi trong một quy trình; thời gian trong cột rà soát | Hằng tuần, xem lại hằng tháng |
| Tỷ lệ phê duyệt tự động | Tỷ lệ quyết định ủy quyền do kiểm soát đường ống hoặc chính sách ủy quyền trước đưa ra và ghi lại | Số thay đổi có phê duyệt được cấp bởi một kiểm tra tự động được ghi lại hoặc một rà soát ngang hàng được ghi lại theo một chính sách bằng văn bản / tất cả thay đổi hoàn tất trong kỳ; chữ ký thủ công của một hội đồng hay quản lý được tính là không tự động | Phần trăm | Nhật ký đường ống, bản ghi rà soát mã và bản ghi thay đổi | Hỗ trợ thay đổi; quản lý triển khai | Cổng chất lượng tự động; rà soát ngang hàng như một phần của định nghĩa hoàn thành | Hằng tháng |
| Tuổi hàng đợi phê duyệt | Các yêu cầu đang chờ đã đợi bao lâu ngay lúc này | Tuổi của mỗi thay đổi hiện đang chờ quyết định, đo từ lúc nộp đến thời điểm chụp; báo cáo hạng mục cũ nhất và bách phân vị thứ 85 của hàng đợi đang mở; phê duyệt đã hoàn tất bị loại trừ | Giờ hoặc ngày làm việc | Bản ghi thay đổi có trạng thái phê duyệt đang mở | Hỗ trợ thay đổi | Tuổi hạng mục công việc; công việc đang làm dở bị già đi | Chụp hằng ngày, xem lại hằng tuần |
| Độ đầy đủ của bản ghi thay đổi | Tỷ lệ thay đổi hoàn tất có bản ghi trả lời được ai, cái gì, vì sao, khi nào và dịch vụ nào | Số thay đổi có đủ trường bắt buộc được điền và liên kết với dịch vụ hoặc hạng mục cấu hình bị ảnh hưởng / tất cả thay đổi hoàn tất trong kỳ; các trường bắt buộc được liệt kê trong định nghĩa; bản ghi tạo sau khi thay đổi đã triển khai được đánh dấu | Phần trăm | Bản ghi thay đổi, liên kết kiểm soát phiên bản, dữ liệu cấu hình | Hỗ trợ thay đổi; quản lý cấu hình dịch vụ | Truy vết từ commit đến phiếu đến triển khai | Hằng tháng |

Thời gian chờ phê duyệt nhìn lại những thay đổi đã chờ xong và có thể giấu một đống yêu cầu đang kẹt. Tuổi hàng đợi nhìn vào cái đang chờ hôm nay, là cảnh báo sớm hơn. Tỷ lệ thay đổi chuẩn không phải điểm số để tối đa hóa: một đội thay đổi cấu hình qua một đường ống trưởng thành sẽ có tỷ lệ cao, còn một đội trên hệ thống lõi cũ có thể hợp lý có tỷ lệ thấp.

## Khuyến nghị

### Thiết lập những điều cơ bản

**1. Đếm thay đổi theo loại trước khi đo bất cứ gì khác.** Hãy xây một cái nhìn về các thay đổi đã hoàn tất, chia theo chuẩn, thông thường và khẩn cấp, theo dịch vụ và theo tháng. Nhiều tổ chức phát hiện lúc này rằng không ai thống nhất được tổng số, vì phiếu, triển khai đường ống và sửa chữa không chính thức được đếm riêng. Đối chiếu các nguồn này là kết quả đầu tiên của chương trình (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

**2. Viết ra quy tắc phân loại và lấy mẫu chúng.** Nêu điều gì làm một thay đổi là chuẩn: một quy trình có tài liệu, một rủi ro đã biết và một thành tích. Nêu điều gì đẩy một thay đổi sang thông thường hoặc khẩn cấp. Hãy rà soát một mẫu ngẫu nhiên khoảng hai mươi thay đổi mỗi quý và hỏi mỗi cái có được phân loại như quy tắc nói không. Phân loại sai là mối đe dọa chính cho mọi con số khác trong chủ đề này.

**3. Định nghĩa đồng hồ phê duyệt bằng văn bản.** Nói rằng đồng hồ bắt đầu khi yêu cầu được nộp là sẵn sàng, và dừng khi quyết định được ghi lại, và nêu các trường hợp loại trừ, như chờ người yêu cầu trả lời một câu hỏi. Không có điều này, một đội đo từ lúc tạo phiếu và đội khác từ cuộc họp hội đồng, và các con số không thể so sánh được, kể cả theo thời gian.

### Rút ngắn thời gian chờ

**4. Báo cáo thời gian chờ phê duyệt như một phân phối.** Giá trị trung bình giấu mẫu hình quan trọng, là một vài thay đổi chờ rất lâu. Hãy cho thấy trung vị và bách phân vị thứ 85, cùng vài trường hợp chậm nhất theo tên thay đổi, không theo tên người (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Nếu bách phân vị thứ 85 gấp nhiều lần trung vị, nguyên nhân thường là một chu kỳ họp hoặc một người phê duyệt quá tải, và cách sửa mang tính cấu trúc.

**5. Canh hàng đợi, không chỉ lịch sử.** Hãy rà soát tuổi hàng đợi phê duyệt mỗi tuần tại cùng diễn đàn rà soát các thước đo dòng chảy. Hạng mục chờ cũ nhất là cảnh báo sớm tốt nhất rằng một hội đồng đang quá tải, một kỳ nghỉ đã làm đình trệ một chữ ký, hoặc một người yêu cầu đã lặng lẽ ngừng theo dõi. Một cái nhìn hàng đợi cũng hợp với thói quen nhìn vào công việc đang già đi (xem chủ đề 2.1, Các thước đo dòng chảy).

**6. Tách chờ thông tin khỏi chờ quyết định.** Khi một yêu cầu quay lại người yêu cầu để bổ sung chi tiết, hãy dừng đồng hồ phê duyệt và bắt đầu một đồng hồ khác. Người phê duyệt bị đổ lỗi cho sự chậm trễ do người yêu cầu gây ra, và người yêu cầu bị đổ lỗi cho sự chậm trễ trong hàng đợi. Hai đồng hồ cho mỗi bên một bức tranh chính xác và một cải tiến cụ thể, như một mẫu yêu cầu tốt hơn.

### Chuyển kiểm soát vào đường ống

**7. Chuyển các loại thay đổi lặp lại, rủi ro thấp thành thay đổi chuẩn.** Chọn thay đổi thông thường phổ biến nhất trong cái nhìn khối lượng của bạn, như một cập nhật thư viện thường lệ hoặc một hành động mở rộng quy mô. Viết quy trình và các kiểm tra của nó, thống nhất rủi ro với cơ quan thay đổi, và ủy quyền trước. Rồi theo dõi cùng nhau tỷ lệ thay đổi chuẩn và thời gian chờ phê duyệt cho thay đổi thông thường: tỷ lệ nên tăng và hàng đợi nên ngắn lại, không kèm tăng thất bại tương ứng (xem chủ đề 4.4, Thay đổi thất bại và làm lại).

**8. Ghi phê duyệt nơi công việc diễn ra.** Hãy nắm bắt rà soát ngang hàng trong công cụ [rà soát mã](https://en.wikipedia.org/wiki/Code_review) và để đường ống tự động liên kết rà soát, kết quả kiểm thử và triển khai với bản ghi thay đổi. Bản ghi khi đó là sản phẩm phụ của công việc thay vì một tác vụ riêng. Hãy đo tỷ lệ phê duyệt tự động, và kiểm tra một mẫu để xác nhận rằng rà soát được ghi lại là có thực chất, không phải đóng dấu cho có (xem chủ đề 2.7, Chỉ số pull request và rà soát mã).

**9. Coi đường ống là nơi mã hóa chính sách.** Các quy tắc như "không truy cập trực tiếp môi trường thật nếu không có phiếu", "kiểm thử phải đạt" và "tác giả không thể phê duyệt thay đổi của chính mình" có thể được công cụ thực thi, với cấu hình giữ dưới dạng mã theo các thực hành [hạ tầng dưới dạng mã](https://en.wikipedia.org/wiki/Infrastructure_as_code). Khi chính sách là mã, bạn có thể cho kiểm toán viên thấy quy tắc và lịch sử của nó thay vì một biên bản họp. Hãy đo bao nhiêu thay đổi vượt qua đường ống, vì mỗi lần vượt là một lỗ hổng trong kiểm soát.

### Giữ cho kiểm soát trung thực

**10. Giữ một con đường nhanh cho thay đổi khẩn cấp, và rà soát cách nó được dùng.** Thay đổi khẩn cấp cần tốc độ, nên đừng làm chậm chúng bằng hàng đợi thông thường. Hãy rà soát từng cái sau đó và canh sự trôi lên của khối lượng, vì một con đường khẩn cấp dễ hơn con đường thông thường sẽ trở thành mặc định (các thước đo cho việc này nằm trong chủ đề 4.4, Thay đổi thất bại và làm lại). Báo cáo khối lượng khẩn cấp cạnh khối lượng thông thường trong cùng một cái nhìn.

**11. Kiểm toán độ đầy đủ của bản ghi theo lịch.** Một bản ghi đầy đủ giúp ích trong một sự cố, khi người xử lý hỏi gần đây có gì thay đổi (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố). Hãy đo độ đầy đủ, rà soát một mẫu, và coi các khoảng trống là khiếm khuyết của biểu mẫu hoặc tích hợp, không phải thiếu sót của người yêu cầu. Một [dấu vết kiểm toán](https://en.wikipedia.org/wiki/Audit_trail) được lắp ráp sau đó từ trí nhớ là bằng chứng yếu.

**12. Rà soát mô hình cơ quan thay đổi ít nhất hằng năm.** Quyết định ai nắm quyền phê duyệt cho từng loại và mức rủi ro, và cho nghỉ hưu những hội đồng phê duyệt tất cả những gì chúng thấy. Chuyển một hội đồng trung tâm sang vai trò chiến lược: phối hợp giữa các đội, giải quyết xung đột lịch, và quyết định về các đánh đổi giữa thời gian ra thị trường và rủi ro. Hãy ghi quyết định và bằng chứng vào sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Khối lượng thay đổi theo loại | Chia một thay đổi thành nhiều bản ghi nhỏ để trông bận rộn, gộp nhiều thay đổi thành một để trông yên ả, hoặc để các thay đổi không chính thức ngoài sổ sách | Đối chiếu số đếm với sự kiện triển khai đường ống mỗi tháng; theo dõi tỷ lệ triển khai không có bản ghi thay đổi khớp |
| Tỷ lệ thay đổi chuẩn | Phân loại lại công việc rủi ro thành chuẩn để đạt mục tiêu, hoặc viết các quy trình chuẩn rộng bao trùm mọi thứ | Rà soát mẫu phân loại hằng quý; tỷ lệ thay đổi thất bại theo loại (xem chủ đề 4.4, Thay đổi thất bại và làm lại); nhật ký các lần phân loại lại |
| Thời gian chờ phê duyệt | Bắt đầu đồng hồ muộn, dừng sớm, tạm dừng nó vì những câu hỏi không cần hỏi, hoặc phê duyệt mà không đọc | Bách phân vị thứ 85 cạnh trung vị; rà soát mẫu các phê duyệt về thực chất; tỷ lệ thay đổi thất bại theo nhóm người phê duyệt, không bao giờ theo cá nhân |
| Tỷ lệ phê duyệt tự động | Thêm các kiểm tra tự động luôn đạt, hoặc tính một rà soát ngang hàng không có bình luận là sự bảo đảm | Rà soát mẫu các phê duyệt tự động và ngang hàng; lỗi lọt ra ngoài và tỷ lệ thất bại của các thay đổi được phê duyệt tự động; số đếm vượt qua |
| Tuổi hàng đợi phê duyệt | Đóng hoặc rút lại các yêu cầu cũ để hàng đợi trông ngắn, hoặc chuyển chúng sang một yêu cầu mới với dấu thời gian mới | Số đếm yêu cầu bị rút lại và nộp lại; tuổi yêu cầu đo từ lần nộp đầu tiên |
| Độ đầy đủ của bản ghi thay đổi | Điền các trường bắt buộc bằng văn bản giữ chỗ, hoặc tạo bản ghi sau thay đổi để thỏa một báo cáo | Đánh dấu các bản ghi tạo sau khi triển khai; rà soát chất lượng mẫu của văn bản tự do; tỷ lệ liên kết đến commit |

Một kết quả đọc lành mạnh cho thấy cơ cấu loại dịch chuyển chậm về phía thay đổi chuẩn với bức tranh thất bại ổn định, thời gian phê duyệt trung vị gần với bách phân vị thứ 85, một hàng đợi không có hạng mục nào cũ hơn hẳn phần còn lại, và số đếm vượt qua giữ gần bằng không. Hãy nghi ngờ một bước nhảy đột ngột ở bất kỳ con số nào. Thời gian chờ phê duyệt giảm một nửa trong một tháng mà không có thay đổi quy trình thường nghĩa là đồng hồ đã dịch chuyển, không phải công việc.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Ưu điểm | Nhược điểm |
| --- | --- | --- |
| Thay đổi chuẩn được ủy quyền trước | Nhanh, nhất quán, rẻ để kiểm toán; giải phóng cơ quan thay đổi cho công việc rủi ro | Cần thiết kế trước; phân loại có thể trôi; quy trình rộng giấu rủi ro |
| Rà soát ngang hàng được ghi trong đường ống | Rà soát bởi những người biết mã; tạo bản ghi tự động; mở rộng theo khối lượng | Chất lượng phụ thuộc văn hóa rà soát; đội nhỏ có thể thiếu người rà soát độc lập; một số cơ quan quản lý kỳ vọng người phê duyệt riêng |
| Hội đồng tư vấn thay đổi trung tâm | Tầm nhìn liên đội; bắt được xung đột lịch và rủi ro phụ thuộc chung | Chậm khi dùng làm cổng cho mọi thay đổi; khuyến khích lô thay đổi lớn hơn được giao ít thường xuyên hơn; tạo ra hàng đợi |
| Thời gian chờ phê duyệt làm chỉ số tiêu đề | Dễ giải thích; phơi bày một nguồn trễ thật | Dễ bị lợi dụng; có thể đẩy người phê duyệt vội vàng; không nói gì về chất lượng của quyết định |
| Tỷ lệ phê duyệt tự động làm mục tiêu | Thưởng cho đầu tư vào công cụ và bằng chứng được ghi lại | Có thể thưởng cho kiểm tra tự động yếu; có thể loại các thay đổi thực sự cần phán đoán của con người |

Câu hỏi tốt hơn hiếm khi là "hội đồng hay không hội đồng" và thường là "thay đổi nào cần loại xem xét nào, và làm sao chúng ta biết?"

## Câu hỏi để thảo luận với đội nhóm

**1. Tháng trước chúng ta đã thực hiện bao nhiêu thay đổi, và mọi nguồn của chúng ta có khớp nhau không?**
Yêu cầu mỗi nhóm đưa ra số đếm riêng từ phiếu, triển khai đường ống và các kênh không chính thức. So sánh các tổng. Khoảng chênh tự nó là một phát hiện về thay đổi không được ghi nhận. Người điều phối nên thống nhất nguồn nào là hệ thống ghi nhận chính thức và ai đối chiếu các nguồn khác.

**2. Thay đổi thông thường nào của chúng ta thực ra là thường lệ, và cần gì để biến chúng thành chuẩn?**
Liệt kê năm thay đổi thông thường thường xuyên nhất. Với mỗi cái, hỏi quy trình đã có tài liệu chưa, rủi ro có được hiểu không, và đội có thành tích sạch không. Cuộc thảo luận thường lộ ra một hoặc hai ứng viên rõ ràng. Ghi lại các kiểm tra sẽ làm việc ủy quyền trước an toàn, và nêu tên ai sẽ phê duyệt quy trình chuẩn.

**3. Đồng hồ phê duyệt của chúng ta bắt đầu và dừng ở đâu, và cái gì đang chờ bên trong nó?**
Lấy ba thay đổi thông thường gần nhất và lần theo từ lúc nộp đến quyết định. Ghi lại mọi lần bàn giao, cuộc họp và yêu cầu thông tin. Mọi người thường ngạc nhiên về việc bao nhiêu thời gian chờ là thời gian lịch giữa các vòng câu hỏi. Thống nhất một định nghĩa bằng văn bản về đồng hồ và điều gì bị loại trừ.

**4. Chúng ta tin các phê duyệt của mình, hay chỉ thu thập chúng?**
Lấy một mẫu các phê duyệt gần đây và đọc các rà soát. Tìm các phê duyệt được cấp trong vài giây hoặc không có bình luận. Mục tiêu là biết quy trình thực sự mang lại bao nhiêu sự bảo đảm, không phải tìm thủ phạm. Thảo luận điều gì sẽ làm một rà soát có thực chất hơn mà không chậm hơn.

**5. Hội đồng thay đổi của chúng ta để làm gì, và chúng ta sẽ mất gì nếu nó ngừng họp?**
Hỏi hội đồng quyết định điều gì mà không ai khác làm được, và nó chỉ xác nhận điều gì. Một số hội đồng làm công việc quý giá phối hợp giữa các đội và phát hiện xung đột lịch. Số khác chỉ nhắc lại các quyết định đã đưa ra trong rà soát mã. Thống nhất chức năng nào đáng giữ và chức năng nào có thể chuyển vào đường ống hoặc một diễn đàn nhẹ hơn.

**6. Nếu chúng ta giảm một nửa thời gian phê duyệt, chúng ta cần thấy gì để biết là an toàn?**
Nêu tên các tín hiệu an toàn trước thay đổi, như tỷ lệ thất bại của thay đổi theo loại, tỷ lệ khẩn cấp, và các sự cố liên kết với thay đổi gần đây. Thống nhất các ngưỡng sẽ kích hoạt một lần tạm dừng. Cuộc trò chuyện này biến một mục tiêu tốc độ thành một thí nghiệm có quy tắc dừng, cách phòng vệ tốt nhất chống lại việc tối ưu sai thứ.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối cảm nhận thời gian chờ phê duyệt như thời gian rảnh giữa một thay đổi đã xong và một thay đổi đang chạy. Họ muốn thấy số liệu của chính mình theo loại, kèm cái nhìn về hàng đợi, để quyết định khi nào gộp, khi nào tách, và khi nào đề nghị một thay đổi chuẩn mới. Đóng góp tốt nhất của họ là các mẫu yêu cầu tốt, thay đổi nhỏ, và liên kết sạch từ commit đến bản ghi thay đổi.

### Đội dịch vụ và vận hành

Các đội vận hành dùng bản ghi thay đổi để trả lời câu hỏi đầu tiên của sự cố: gần đây có gì thay đổi? Họ coi trọng độ đầy đủ, liên kết dịch vụ chính xác và một lịch đáng tin cậy. Họ cũng gánh chi phí của một thay đổi hỏng, nên họ có lợi ích chính đáng với các quy tắc phân loại và việc rà soát thay đổi khẩn cấp. Bước đi tốt nhất là cùng sở hữu danh mục thay đổi chuẩn với các đội phân phối, để việc ủy quyền trước phản ánh tri thức vận hành.

### Lãnh đạo và quản trị

Lãnh đạo và các cơ quan quản trị cần sự bảo đảm rằng thay đổi được kiểm soát, và cần biết kiểm soát có đang làm chậm tổ chức không. Những chỉ số này cho cả hai: cơ cấu loại, thời gian chờ, và tỷ lệ phê duyệt có bằng chứng được ghi lại. Hãy yêu cầu xu hướng và độ phân tán giữa các dịch vụ, không bao giờ một bảng xếp hạng, và đọc chúng cạnh các thước đo thất bại (xem chủ đề 4.4, Thay đổi thất bại và làm lại). Tài trợ cho tự động hóa chuyển phê duyệt vào đường ống thường là khoản đầu tư tốt hơn việc thêm một người rà soát vào hội đồng.

### Khách hàng và người dùng

Khách hàng hiếm khi thấy quy trình thay đổi. Họ thấy tính năng mới đến, các bản sửa được phát hành nhanh, và ít sự cố ngừng hoạt động hơn sau một bản phát hành. Phê duyệt chậm làm trễ các bản sửa họ yêu cầu, và phê duyệt yếu mạo hiểm với sự cố ngừng hoạt động họ lo sợ. Nơi một dịch vụ có các khung bảo trì theo lịch, hãy công bố lịch thay đổi bằng ngôn ngữ giản dị.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một công ty bảo hiểm khu vực hư cấu vận hành một cổng khách hàng với tám đội phân phối và một CAB họp hai lần một tuần. Mọi con số dưới đây chỉ mang tính minh họa.

Trưởng vận hành dịch vụ xây dựng cái nhìn đầy đủ đầu tiên về thay đổi. Trong tháng, cổng cho thấy khoảng 420 thay đổi hoàn tất theo phiếu, 610 lần triển khai môi trường thật theo đường ống, và một khoảng chênh hóa ra là các thay đổi thực hiện không có phiếu. Trong 420 thay đổi có phiếu, 18 phần trăm là chuẩn, 76 phần trăm là thông thường và 6 phần trăm là khẩn cấp (minh họa). Thời gian chờ phê duyệt trung vị cho thay đổi thông thường là 2 ngày làm việc, và bách phân vị thứ 85 là 7 ngày làm việc (minh họa). Yêu cầu cũ nhất trong hàng đợi đã chờ 12 ngày làm việc.

Khi các đội nhìn vào thời gian chờ dài, họ thấy hai nguyên nhân. Nhiều yêu cầu nằm đó đến cuộc họp hội đồng kế tiếp dù chúng thường lệ, và số khác bị trả lại người yêu cầu vài lần vì thiếu thông tin. Đội tách hai đồng hồ và phát hiện khoảng một nửa thời gian chờ ở bách phân vị thứ 85 là thời gian chờ người yêu cầu. Họ sửa mẫu yêu cầu trước. Rồi họ chọn ba thay đổi thông thường phổ biến nhất: cập nhật phụ thuộc với kiểm thử đạt, bật tắt cấu hình trong công cụ cờ tính năng, và mở rộng quy mô máy chủ ứng dụng. Họ viết quy trình, thống nhất rủi ro với cơ quan thay đổi, và chuyển chúng thành thay đổi chuẩn với phê duyệt được ghi trong đường ống.

Hai tháng sau, tỷ lệ chuẩn tăng lên 41 phần trăm (minh họa), bách phân vị thứ 85 của thời gian chờ phê duyệt cho thay đổi thông thường giảm xuống 4 ngày làm việc (minh họa), và tỷ lệ thay đổi thất bại theo loại giữ phẳng, như báo cáo trong các thước đo đồng hành (xem chủ đề 4.4, Thay đổi thất bại và làm lại). Hội đồng chuyển từ rà soát mọi thay đổi thông thường sang rà soát các thay đổi rủi ro cao và lịch hằng tháng.

Một rủi ro lợi dụng hiện ra trong mẫu hằng quý. Một đội đã phân loại một lần di chuyển lược đồ cơ sở dữ liệu là thay đổi chuẩn vì quy trình trước cho "thay đổi cấu hình" được viết lỏng lẻo. Người rà soát mẫu nhận thấy lần di chuyển đó không có kế hoạch hoàn tác. Đội siết chặt các định nghĩa thay đổi chuẩn, thêm quy tắc rằng thay đổi lược đồ luôn là thông thường, và nhật ký phân loại lại trở thành một mục thường trực trong chương trình họp. Quyết định ghi trong sổ đăng ký chỉ số là giữ tỷ lệ thay đổi chuẩn như một thước đo bối cảnh và không phải mục tiêu.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hỗ trợ thay đổi phục vụ phân phối liên tục khi thay đổi rủi ro thấp chảy mà không chờ một cuộc họp và thay đổi rủi ro cao được xem xét thích đáng. Hãy rà soát các quy tắc phân loại với các bên liên quan thường xuyên. Điều cần lưu ý là một tỷ lệ thay đổi chuẩn cao có thể nghĩa là các thay đổi rủi ro đã bị dán nhãn lại.

### AI

AI có thể đánh giá rủi ro thay đổi, tóm tắt diff và soạn bản ghi thay đổi. Hãy ghép tỷ lệ phê duyệt tự động với tỷ lệ thay đổi thất bại và với tỷ lệ xếp hạng rủi ro của AI sau đó bị phát hiện là sai, và giữ một con người chịu trách nhiệm cho các phê duyệt rủi ro cao. Điều cần lưu ý là một điểm rủi ro của mô hình có thể tạo cảm giác yên tâm giả, nên hãy kiểm thử nó với kết quả thực.

### Tự động hóa

Hãy tự động hóa bằng chứng mà một đường ống có thể tạo ra và việc phê duyệt các thay đổi chuẩn được hiểu rõ, và đo tự động hóa theo thất bại, hoàn tác, và các phê duyệt đưa ra không có bằng chứng. Điều cần lưu ý là tự động hóa có thể phê duyệt một thay đổi mà nó không nên, nên hãy kiểm toán một mẫu.

### Phân tích

Hãy cho thấy thời gian chờ phê duyệt như một phân phối theo loại thay đổi và liên kết nó với tỷ lệ thất bại. Quyết định được cung cấp thông tin là thay đổi nào có thể được phê duyệt trước. Điều cần lưu ý là các phê duyệt được theo dõi theo ngày bản ghi có thể không khớp với thời điểm thực, nên hãy kiểm tra dấu thời gian.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một công ty khởi nghiệp thường có ít quy trình chính thức và nhiều tự động hóa đường ống. Thay đổi diễn ra nhanh mà không có bản ghi, nên độ đầy đủ và liên kết từ commit đến triển khai là quan trọng nhất. Một định nghĩa một trang về ba loại, cộng rà soát được ghi trong đường ống, thường là đủ.

**Doanh nghiệp nhỏ.** Một doanh nghiệp nhỏ thường có một hoặc hai người vừa viết vừa phát hành thay đổi, nên rà soát độc lập khó. Hãy dùng một danh sách thay đổi chuẩn đơn giản cho công việc thường lệ, yêu cầu một cặp mắt thứ hai cho bất cứ thứ gì chạm vào dữ liệu khách hàng hoặc tiền, và giữ một nhật ký thay đổi giản dị. Các thước đo đáng theo dõi là khối lượng theo loại và độ đầy đủ của bản ghi, vì chúng rẻ và giúp ích trong sự cố.

**Doanh nghiệp lớn.** Doanh nghiệp lớn có nhiều đội, nền tảng dùng chung và hệ thống cũ với rủi ro khác nhau. Họ thường có một CAB, và các chỉ số giúp quyết định tác vụ nào của nó nên giữ. Công việc chính là phân loại nhất quán, một danh mục thay đổi chuẩn dùng chung, và một đường ống ghi lại bằng chứng kiểm toán. Hãy tổng hợp theo dịch vụ và lớp rủi ro, không theo bảng xếp hạng đội.

**Chính phủ và khu vực công.** Các cơ quan công thường đối mặt với yêu cầu pháp lý về phê duyệt, tách biệt nhiệm vụ và lưu giữ hồ sơ, và có thể có các cửa sổ phát hành do mua sắm quy định. Các chỉ số nên nêu kiểm soát nào là bắt buộc và kiểm soát nào là thói quen địa phương, vì cái trước không thể bỏ còn cái sau thì được. Rà soát ngang hàng được ghi lại và bằng chứng đường ống thường có thể thỏa mãn ý định, nhưng hãy xác nhận điều này với kiểm toán viên liên quan trước khi dựa vào nó (xem chủ đề 8.3, Chỉ số tuân thủ và kiểm toán).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực thường là thời gian các thay đổi dành để chờ. Khi công việc đã xong xếp hàng chờ một quyết định, giá trị bị trì hoãn, lô lớn lên, và mỗi lô mang thêm rủi ro. Động lực thứ hai là sự bảo đảm: lãnh đạo và kiểm toán viên muốn biết thay đổi được kiểm soát, và bằng chứng được ghi lại trong đường ống rẻ hơn để tạo ra và đáng tin hơn một sự dựng lại. Động lực thứ ba là phản ứng sự cố, vì một bản ghi thay đổi đầy đủ và chính xác rút ngắn việc tìm nguyên nhân.

Việc thu thập rẻ nếu công cụ thay đổi và đường ống đã lưu dấu thời gian và loại, và vừa phải nếu bạn phải tích hợp chúng. Hành động dựa trên dữ liệu tốn hơn: viết quy trình thay đổi chuẩn, xây các kiểm tra đường ống, và đào tạo người phê duyệt và người yêu cầu. Hãy chờ đợi phần lớn công việc ở quý đầu và một chi phí thấp hơn, ổn định cho việc lấy mẫu và rà soát sau đó.

Lợi tức hiện ra dưới dạng ít thời gian chờ hơn cho mỗi thay đổi, ít cuộc họp hơn, ít công sức chuẩn bị bằng chứng kiểm toán hơn, và chẩn đoán nhanh hơn trong sự cố. Hãy ước lượng nó bằng dữ liệu của chính bạn: nhân mức giảm giờ chờ phê duyệt với số thay đổi bị ảnh hưởng và với chi phí mỗi giờ trễ mà đối tác tài chính của bạn chấp nhận. Đừng nhập số liệu từ các tổ chức khác. Nghiên cứu DORA ủng hộ hướng của lập luận, nhưng các trang của nó không đưa ra chi phí hay lợi tức, và bất kỳ con số tiền nào phải đến từ các phép đo của chính bạn.

## Phản mẫu và cạm bẫy

- **Coi tỷ lệ thay đổi chuẩn là mục tiêu.** Các đội phân loại lại công việc rủi ro để đạt con số. Hãy dùng nó làm bối cảnh, rà soát phân loại theo mẫu, và theo dõi tỷ lệ thất bại theo loại.
- **Chỉ đo tốc độ phê duyệt.** Một con dấu cao su nhanh trông xuất sắc và không mang lại gì. Hãy ghép thời gian chờ với rà soát mẫu về thực chất của phê duyệt và với bức tranh thất bại.
- **Thêm phê duyệt sau mỗi sự cố.** Mỗi cổng mới làm chậm hệ thống và thường khuyến khích lô lớn hơn. Hãy xem trước hết vì sao thất bại xảy ra, và sửa nguyên nhân trong kiểm thử, rà soát hoặc đường ống.
- **Xếp hạng người phê duyệt hay người yêu cầu.** Số đếm phê duyệt hay từ chối theo từng người dạy mọi người phê duyệt tất cả hoặc không gì cả. Hãy báo cáo theo dịch vụ và theo loại thay đổi.
- **Lấy trung bình qua các loại thay đổi.** Một giá trị trung bình duy nhất trộn công việc thường lệ và rủi ro và giấu cả hai. Luôn chia theo loại và cho thấy bách phân vị thứ 85.
- **Bỏ qua các thay đổi thực hiện ngoài quy trình.** Việc vượt qua giấu khối lượng và rủi ro thật. Hãy đối chiếu triển khai đường ống với bản ghi thay đổi và coi các khoảng trống là khiếm khuyết hệ thống.
- **Giữ hội đồng theo thói quen.** Một hội đồng phê duyệt tất cả những gì nó thấy thêm trễ nải mà không thêm sự bảo đảm. Hãy rà soát hằng năm hội đồng quyết định điều gì mà không ai khác làm được, và tái tập trung nó.
- **Thu thập dữ liệu mà không bao giờ quyết định.** Gắn mỗi chỉ số với một người sở hữu có tên và một diễn đàn rà soát (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

## Mô hình trưởng thành

| Chiều | Khởi đầu | Phát triển | Chuẩn hóa | Quản lý | Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Phân loại và khối lượng | Các loại không chính thức; không ai biết tổng số | Một số đội đếm theo loại với quy tắc khác nhau | Một phân loại bằng văn bản, một hệ thống ghi nhận chính thức | Cơ cấu loại được theo dõi xu hướng và lấy mẫu để kiểm tra độ chính xác | Danh mục thay đổi chuẩn chia sẻ với nhà cung cấp và sửa khi bằng chứng rủi ro thay đổi |
| Đồng hồ phê duyệt và hàng đợi | Thời gian chờ phê duyệt được cảm nhận nhưng không được tính giờ | Một số đội đóng dấu thời gian cho yêu cầu | Một định nghĩa đồng hồ, trung vị và bách phân vị được cho thấy | Tuổi hàng đợi được rà soát hằng tuần; sự chậm trễ thúc đẩy các bản sửa được tài trợ | Dòng chảy phê duyệt được tinh chỉnh giữa các đội và nhà cung cấp so với thất bại và kết quả khách hàng |
| Tự động hóa phê duyệt | Phê duyệt là một cuộc họp hoặc một email | Một vài đường ống ghi lại rà soát ngang hàng | Rà soát và kiểm tra được ghi lại là mặc định cho thay đổi rủi ro thấp | Tỷ lệ tự động được theo dõi kèm số đếm vượt qua và kiểm tra chất lượng mẫu | Chính sách được mã hóa trong các kiểm soát nền tảng dùng chung, thích ứng khi bức tranh rủi ro thay đổi |
| Bản ghi và việc sử dụng | Bản ghi mỏng hoặc viết sau | Bản ghi tồn tại nhưng chất lượng khác nhau | Các trường bắt buộc được thống nhất và liên kết với dịch vụ | Độ đầy đủ được kiểm toán và dùng trong rà soát sự cố | Dữ liệu thay đổi nuôi các thực hành sự cố, vấn đề và kiểm toán trong toàn tổ chức |

## Danh sách kiểm tra

- [ ] Ba loại thay đổi và tiêu chí của chúng được viết ra và thống nhất.
- [ ] Một cái nhìn duy nhất về các thay đổi hoàn tất theo loại tồn tại, được đối chiếu với triển khai đường ống.
- [ ] Đồng hồ phê duyệt có điểm bắt đầu, điểm dừng và danh sách loại trừ bằng văn bản.
- [ ] Thời gian chờ phê duyệt được báo cáo dưới dạng trung vị và bách phân vị thứ 85.
- [ ] Tuổi hàng đợi phê duyệt hiển thị và được rà soát hằng tuần.
- [ ] Ít nhất một thay đổi thông thường thường xuyên đã được chuyển thành thay đổi chuẩn có quy trình có tài liệu.
- [ ] Rà soát ngang hàng và kết quả kiểm thử được liên kết với bản ghi thay đổi tự động.
- [ ] Một mẫu hằng quý kiểm tra phân loại và chất lượng phê duyệt.
- [ ] Việc vượt qua đường ống được đo và rà soát.
- [ ] Mỗi chỉ số có một người sở hữu có tên, một vectơ lợi dụng và một rào chắn trong sổ đăng ký chỉ số.
- [ ] Không báo cáo nào xếp hạng từng người phê duyệt hay người yêu cầu.

## Lời nhắc AI

**Soạn hướng dẫn phân loại cho ba loại thay đổi.**

```text
I work in [type of organization] and we run [list of services]. Our change tool
is [tool], our pipeline is [pipeline tool], and our regulatory context is
[regulations or none]. Here are our ten most frequent changes: [list]. Draft a
plain-language guide for deciding whether each is a standard, normal, or
emergency change, with the criteria you used and one example of a borderline
case. Do not invent benchmark values or claim any practice meets an
audit requirement. List your assumptions and the questions I should answer
before adopting the guide.
```

**Tìm xem thời gian phê duyệt dành cho đâu.**

```text
Here is an extract of change records with submission, information-request, and
decision timestamps: [pasted data or description]. Our approval process is
[description]. Calculate the median and 85th percentile of approval lead time by
change type, separating time waiting for the requester from time waiting for a
decision, and suggest three questions to ask about the longest cases. Do not
invent figures that are not in the data, and do not rank individual people. List
your assumptions and any data quality problems you notice.
```

**Kiểm tra các chỉ số về rủi ro bị lợi dụng.**

```text
We report these change enablement metrics: [list of metrics with definitions].
The audience is [team, leadership, or governance body] and the metrics are used
for [purpose]. For each metric, list plausible ways it could be inflated,
hidden, or distorted without real improvement, and suggest a paired guardrail
measure or practice. Do not propose targets or benchmark values. List your
assumptions and which gaming risks you think matter most for [service name].
```

**Lập kế hoạch chuyển từ phê duyệt của hội đồng sang phê duyệt trong đường ống.**

```text
Our current approval path for [change type] is [description], with [number]
approvers and a typical wait described as [description]. Our pipeline provides
[checks, tests, review tooling]. Propose a staged plan to move low-risk changes
to recorded, pipeline-based approval, including the evidence we would need to
keep, the safety signals to watch, and a stopping rule. Do not claim the plan
satisfies any regulation or standard. List your assumptions and the people I
should consult, such as [auditor, security lead, change authority].
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề thay đổi, phát hành và sự cố liên quan và rào chắn nên đứng cạnh mỗi chỉ số hỗ trợ thay đổi.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một phiên bản sửa của chủ đề này giữ các đồng hồ, vectơ lợi dụng và tham chiếu chéo nhất quán.

## Điểm chính cần nhớ

- Các chỉ số hỗ trợ thay đổi đo dòng chảy và kiểm soát của thay đổi: khối lượng theo loại, thời gian chờ phê duyệt, và bao nhiêu phê duyệt đường ống ghi lại tự động.
- Chia mọi thứ theo loại thay đổi, báo cáo thời gian chờ dưới dạng trung vị và bách phân vị thứ 85, và canh hàng đợi trực tiếp cũng như lịch sử.
- Chuyển công việc thường lệ sang thay đổi chuẩn và ghi rà soát trong đường ống là cách trực tiếp nhất để rút ngắn thời gian chờ, và phải được đọc cạnh các thước đo thất bại.
- Tỷ lệ thay đổi chuẩn và tốc độ phê duyệt dễ bị lợi dụng, nên hãy lấy mẫu phân loại và chất lượng phê duyệt và giữ các con số ngoài bảng điểm cá nhân.
- Dùng các chỉ số để quyết định hội đồng thay đổi để làm gì, và tài trợ cho tự động hóa làm cho kiểm soát nhẹ hơn trở nên an toàn.

## Tài liệu tham khảo và đọc thêm

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
