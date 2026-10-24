# Chỉ số phát hành và triển khai

**Triển khai mã và phát hành nó cho người dùng là hai sự kiện khác nhau với rủi ro khác nhau, nên hãy đo chúng riêng, đếm từng cái theo một quy tắc bằng văn bản, và đọc tần suất, thời gian chờ, kích thước lô và độ gọn gàng của cờ cùng nhau thay vì ăn mừng bất kỳ số đếm đơn lẻ nào.**

## Tổng quan và động lực

Nhiều đội dùng các từ "triển khai" và "phát hành" như thể chúng có cùng nghĩa. Không phải vậy, và sự khác biệt là ý tưởng hữu ích nhất trong chủ đề này. Một **lần triển khai** là hành động đưa một phiên bản phần mềm vào một môi trường, thường là môi trường thật, như mô tả trong bài về [triển khai phần mềm](https://en.wikipedia.org/wiki/Software_deployment). Một **bản phát hành** là khoảnh khắc một thay đổi trở nên sẵn có cho người dùng dự kiến, một quyết định mà [quản lý phát hành](https://en.wikipedia.org/wiki/Release_management) tồn tại để điều hành. Khi hai việc xảy ra cùng lúc, một lần triển khai là một bản phát hành và một con số mô tả cả hai. Khi chúng được tách ra, đội có thể triển khai thường xuyên và lặng lẽ, và phát hành có chủ ý.

Việc tách quan trọng vì hai sự kiện mang rủi ro khác nhau. Một lần triển khai mang rủi ro kỹ thuật: bản dựng mới có thể không khởi động được, có thể làm hỏng một phụ thuộc, hoặc có thể cần hoàn tác. Một bản phát hành mang rủi ro kinh doanh và người dùng: thay đổi có thể làm khách hàng bối rối, hoặc có thể cần hạ cánh vào một ngày đã thống nhất. Các đội ghép hai sự kiện chấp nhận cả hai rủi ro cùng lúc, đẩy họ về phía các lô thay đổi lớn phát hành hiếm hoi. Các đội tách chúng nhận rủi ro kỹ thuật theo từng bước nhỏ và rủi ro người dùng theo từng bước có kiểm soát.

Công cụ chính để tách là [công tắc tính năng](https://en.wikipedia.org/wiki/Feature_toggle), còn gọi là cờ tính năng: một công tắc trong cấu hình bật hoặc tắt một hành vi mà không cần triển khai mới. Các kỹ thuật liên quan gồm [phát hành canary](https://en.wikipedia.org/wiki/Canary_release), cho một thay đổi tiếp xúc trước với một tỷ lệ nhỏ lưu lượng, và [triển khai blue-green](https://en.wikipedia.org/wiki/Blue-green_deployment), giữ hai môi trường thật và chuyển lưu lượng giữa chúng. Tất cả đều cho phép bạn trả lời hai câu hỏi riêng: phiên bản mới có đang chạy an toàn không, và ai nên thấy hành vi mới và khi nào.

Các thuật ngữ dưới đây lặp lại trong chủ đề này.

- Một **bản phát hành** là một phiên bản hoặc tập thay đổi được làm sẵn có cho người dùng.
- Một **lần triển khai** là việc chuyển một phiên bản đến một môi trường. ITIL 4 đặt tên một thực hành cho việc này, quản lý triển khai.
- Một **ra mắt tối (dark launch)** là một lần triển khai có hành vi mới bị tắt với người dùng.
- Một **phát hành dần (progressive rollout)** là bản phát hành mở rộng mức tiếp xúc theo giai đoạn, ví dụ 1 phần trăm, 10 phần trăm, rồi mọi người.
- Một **lô** là tập thay đổi được phát cùng nhau trong một lần triển khai hoặc phát hành. Kích thước lô là số thay đổi, hoặc lượng thay đổi, trong đó.
- **Thời gian chờ phát hành** là thời gian trôi qua từ một điểm bắt đầu nêu rõ cho đến khi thay đổi sẵn có cho người dùng. Đội của bạn viết điểm bắt đầu ra, vì có vài điểm đang được dùng phổ biến.
- Một **bách phân vị** là giá trị mà một tỷ lệ nhất định các quan sát nằm dưới. Bách phân vị thứ 85 của thời gian chờ phát hành là con số mà 85 phần trăm bản phát hành vượt qua.

Góc nhìn linh hoạt và ITIL gặp nhau ở đây. Một đội linh hoạt theo [phân phối liên tục](https://en.wikipedia.org/wiki/Continuous_delivery) muốn mọi thay đổi sẵn sàng phát hành bất cứ lúc nào, và coi bản phát hành là một quyết định kinh doanh đưa ra tách khỏi hành động kỹ thuật. Một người thực hành ITIL thấy quản lý phát hành, quản lý triển khai và hỗ trợ thay đổi là các thực hành lập kế hoạch, lên lịch và kiểm soát việc đưa thay đổi vào sử dụng thực. Hai góc nhìn xung đột khi quản lý phát hành được hiểu là một lịch các sự kiện lớn. Chúng khớp nhau khi thực hành được hiểu là năng lực phát hành an toàn theo yêu cầu, với các kiểm soát được xây vào đường ống và các cờ.

Chủ đề này không lặp lại định nghĩa của năm thước đo hiệu suất phân phối từ chương trình nghiên cứu DORA (xem chủ đề 2.8, Chỉ số DORA), cũng không lặp lại các thước đo thất bại và làm lại sau một bản phát hành (xem chủ đề 4.4, Thay đổi thất bại và làm lại), hay khối lượng và phê duyệt thay đổi (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi). Nó bổ sung những gì các chủ đề đó để ngỏ: cách đếm bản phát hành khác với lần triển khai, một thay đổi đã xong chờ bao lâu trước khi người dùng nhận được, các lô lớn đến đâu, và các cờ làm cho việc tách khả thi có được giữ gọn gàng không.

Cuối cùng, số đếm phát hành và triển khai là những con số hấp dẫn cho bảng điều khiển lãnh đạo, và [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng ngay (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Số đếm triển khai tăng khi các thay đổi bị chia thành những mảnh tầm thường. Số đếm phát hành tăng khi một nhãn bị đổi. Vì vậy mỗi chỉ số dưới đây đi kèm cách nó bị bẻ cong và rào chắn bắt được chỗ bẻ cong.

## Nguyên tắc chính

- **Triển khai và phát hành là hai sự kiện.** Hãy đo chúng riêng ở bất cứ đâu kiến trúc cho phép, và nói rõ ràng nơi chúng vẫn là một sự kiện.
- **Đếm theo một quy tắc bằng văn bản.** Một lần triển khai được tính khi một môi trường có tên nhận một phiên bản có tên với kết quả thành công. Một bản phát hành được tính khi người dùng dự kiến tiếp cận được thay đổi. Viết quy tắc ra một lần và áp dụng nó như nhau mọi lần.
- **Mô tả một dịch vụ, không phải một người.** Số đếm thuộc về một dịch vụ và đội của nó, không bao giờ một cá nhân.
- **Đo thời gian chờ, không chỉ công việc.** Thời gian chờ phát hành thường chứa nhiều ngày đợi một cửa sổ, một phê duyệt hay một quyết định. Thời gian chờ là nơi cải tiến thường nằm.
- **Lô nhỏ là đòn bẩy.** Tần suất và kích thước là hai cái nhìn về một thứ. Hãy ghép mọi số đếm với một thước đo xem mỗi bản phát hành mang bao nhiêu thay đổi.
- **Cờ là hàng tồn kho có chi phí duy trì.** Một cờ sống quá lâu trở thành mã chết và nguồn thất bại, nên hãy theo dõi tuổi cờ cẩn thận như độ phủ cờ.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tần suất triển khai | Một dịch vụ nhận một lần triển khai thành công lên môi trường thật thường xuyên đến đâu | Số lần triển khai môi trường thật thành công của dịch vụ trong kỳ / số ngày trong kỳ; các lần triển khai lên môi trường kiểm thử hoặc staging, lần triển khai thất bại hay bị hoàn tác, và triển khai lại một bản dựng không đổi bị loại trừ; các lần triển khai chỉ có cấu hình được đếm trong một chuỗi riêng | Số lần triển khai mỗi ngày hoặc tuần | Nhật ký sự kiện đường ống triển khai | Quản lý triển khai | Phân phối liên tục; phát một bản tăng chạy được | Hằng tuần |
| Tần suất phát hành | Người dùng nhận một thay đổi mà họ tiếp cận được thường xuyên đến đâu | Số sự kiện phát hành trong kỳ / số ngày trong kỳ; một sự kiện phát hành là khoảnh khắc một thay đổi, hoặc một nhóm thay đổi, trở nên tiếp cận được với người dùng dự kiến (một cờ được bật cho mọi người dùng, giai đoạn cuối của một phát hành dần, hoặc một lần triển khai thay đổi không có cờ); một ra mắt tối, một phát hành dần dừng ở giai đoạn một phần, và một thay đổi cờ chỉ ảnh hưởng người dùng nội bộ bị loại trừ | Số bản phát hành mỗi tuần hoặc tháng | Nhật ký kiểm toán dịch vụ cờ ghép với nhật ký đường ống và lịch phát hành | Quản lý phát hành | Phát hành vào cuối mỗi bản tăng; một bản tăng có thể phát được làm sẵn có | Hằng tuần, xem lại hằng tháng |
| Thời gian chờ phát hành | Một thay đổi đã xong chờ bao lâu trước khi người dùng tiếp cận được | Đồng hồ bắt đầu khi thay đổi được gộp vào nhánh chính và đã qua các kiểm tra tự động (hoặc, nếu đội của bạn viết như vậy, ở commit đầu tiên) và dừng khi thay đổi được phát hành như định nghĩa ở trên; báo cáo trung vị và bách phân vị thứ 85 của các thay đổi được phát hành trong kỳ; thay đổi chưa phát hành bị loại trừ và báo cáo dưới dạng tuổi của công việc đang chờ | Giờ hoặc ngày | Kiểm soát phiên bản ghép với đường ống và nhật ký kiểm toán cờ | Quản lý phát hành; quản lý triển khai | Thời gian chờ từ xong đến giao; thời gian chờ đến khách hàng | Hằng tuần, xem lại hằng tháng |
| Khoảng cách triển khai-phát hành | Mã đã triển khai ở trạng thái tối bao lâu trước khi người dùng tiếp cận được | Đồng hồ bắt đầu khi thay đổi được triển khai lên môi trường thật và dừng khi nó được phát hành; báo cáo trung vị và bách phân vị thứ 85; thay đổi phát hành ngay lúc triển khai có khoảng cách bằng không và được gồm vào; thay đổi được triển khai rồi gỡ bỏ mà không phát hành bị loại trừ và đếm riêng | Giờ hoặc ngày | Nhật ký đường ống ghép với nhật ký kiểm toán cờ | Quản lý phát hành; quản lý triển khai | Ra mắt tối; tách triển khai khỏi phát hành | Hằng tháng |
| Kích thước lô phát hành | Bao nhiêu thay đổi được phát cùng nhau trong một bản phát hành | Trung vị và bách phân vị thứ 85 của số thay đổi đã gộp (pull request hoặc hạng mục công việc) mỗi bản phát hành trong kỳ; đơn vị thay đổi được viết ra; mỗi thay đổi được đếm một lần, trong bản phát hành làm nó tiếp cận được | Số thay đổi mỗi bản phát hành | Kiểm soát phiên bản và trình theo dõi vấn đề ghép với sự kiện phát hành | Quản lý phát hành; hỗ trợ thay đổi | Lô nhỏ; lát cắt dọc của công việc | Mỗi bản phát hành, xem lại hằng tháng |
| Độ phủ cờ tính năng | Tỷ lệ thay đổi hiển thị với người dùng được phát hành sau một cờ | Số thay đổi hiển thị với người dùng được phát hành trong kỳ có cờ tại thời điểm phát hành / tất cả thay đổi hiển thị với người dùng được phát hành trong kỳ; thay đổi hạ tầng và sửa lỗi không thể gắn cờ bị loại trừ, và quy tắc cho "hiển thị với người dùng" được viết ra | Phần trăm | Dịch vụ cờ ghép với trình theo dõi vấn đề và nhật ký phát hành | Quản lý phát hành; hỗ trợ thay đổi | Phân phối dần; phát triển dựa trên thí nghiệm | Hằng tháng |
| Số cờ lỗi thời | Bao nhiêu cờ đã sống lâu hơn mục đích của chúng | Số cờ phát hành vẫn còn trong mã hoặc cấu hình sau hơn một số ngày nêu rõ kể từ khi thay đổi chúng bảo vệ đến được mọi người dùng; cờ vận hành vĩnh viễn (công tắc ngắt, cờ quyền lợi) được gắn thẻ và loại trừ; giới hạn tuổi được viết ra theo loại cờ | Số cờ, và tuổi trung vị của cờ phát hành tính bằng ngày | Kiểm kê dịch vụ cờ ghép với tìm kiếm mã | Quản lý phát hành; quản lý tri thức | Dọn dẹp nợ kỹ thuật; tiêu chí hoàn thành là gỡ cờ | Hằng tháng |

## Khuyến nghị

### Viết ra điều gì được tính là một lần triển khai và một bản phát hành

**Định nghĩa cả hai sự kiện trước khi đếm cái nào.** Một lần triển khai được tính khi một phiên bản có tên đến một môi trường có tên và đường ống báo thành công. Một bản phát hành được tính khi người dùng dự kiến tiếp cận được thay đổi, mà với một thay đổi có cờ là khoảnh khắc cờ được bật cho họ chứ không phải khoảnh khắc mã đến. Nêu các trường hợp loại trừ trong cùng một câu: môi trường kiểm thử, hoàn tác, triển khai lại một bản dựng không đổi, và tiếp xúc chỉ nội bộ.

### Báo cáo hai chuỗi song song

**Cho thấy tần suất triển khai và tần suất phát hành trên cùng một biểu đồ.** Nơi các đường trùng nhau, dịch vụ vẫn ghép hai sự kiện. Nơi triển khai chạy xa trước phát hành, đội đã bắt đầu tách chúng, và khoảng cách giữa các đường là dấu hiệu của năng lực. Một con số gộp duy nhất giấu điều này, và cho phép một đội tuyên bố một tần suất cao mà người dùng không bao giờ thấy.

### Đo thời gian chờ phát hành từ một điểm bắt đầu nêu rõ đến người dùng

**Chọn điểm bắt đầu đồng hồ một lần và giữ nó.** Bắt đầu ở commit đầu tiên cho thấy toàn bộ hành trình, còn bắt đầu ở lúc gộp vào nhánh chính cô lập đường ống phát hành và các phê duyệt của nó. Cái nào cũng chấp nhận được nếu nó được nêu trên biểu đồ và không bao giờ bị đổi âm thầm. Hãy kết thúc đồng hồ ở bản phát hành, không phải lần triển khai, nếu không chỉ số ngừng đo điều người dùng đã chờ.

### Theo dõi kích thước lô cạnh tần suất

**Ghép mỗi tần suất với một kích thước.** Một đội có thể nâng số đếm triển khai bằng cách cắt một thay đổi thành các lát không hữu ích độc lập, và số đếm tăng trong khi dòng chảy thực giữ nguyên. Trung vị và bách phân vị thứ 85 của kích thước lô cho thấy các lát có thật không. Lô nhỏ dễ rà soát, kiểm thử và đảo ngược hơn, và đó là lợi ích mà tần suất là một đại diện.

### Coi các giai đoạn phát hành dần là các sự kiện

**Ghi từng giai đoạn của một lần phát hành dần kèm dấu thời gian.** Một lần phát hành đi từ 1 phần trăm đến 10 phần trăm đến mọi người cho ba dấu thời gian, và mỗi cái là một cơ hội để dừng. Hãy nắm bắt giai đoạn, tỷ lệ tiếp xúc, và kết quả của kiểm tra sức khỏe cho phép sang giai đoạn kế. Điều này cho phép bạn phân biệt một lần phát hành tạm dừng vì một tín hiệu thật với một lần đình trệ.

### Giữ một danh mục cờ có người sở hữu và ngày hết hạn

**Gán cho mỗi cờ phát hành một người sở hữu, một mục đích và ngày gỡ dự kiến khi tạo.** Dịch vụ cờ hoặc một sổ đăng ký đơn giản có thể giữ những thứ này. Hãy rà soát sổ đăng ký hằng tháng và tính số cờ lỗi thời. Một cờ để bật sau khi phát hành đầy đủ là mã chết vẫn còn rẽ nhánh. Hãy coi việc gỡ là một phần của hoàn thành cho thay đổi.

### Gắn thẻ cờ theo loại

**Tách cờ phát hành tạm thời khỏi cờ vận hành vĩnh viễn.** Công tắc ngắt và cờ quyền lợi vĩnh viễn theo thiết kế, trong khi cờ phát hành nên được gỡ sau khi phát hành đầy đủ. Trộn các loại làm số đếm lỗi thời nhiễu và mời gọi các đội xóa một công tắc mà ai đó cần trong một sự cố. Hãy yêu cầu loại khi cờ được tạo.

### Liên kết bản phát hành với bản ghi sự cố và thay đổi

**Ghi định danh bản phát hành trên sự cố và thay đổi.** Một sự kiện phát hành nên truy vết được từ công cụ sự cố, để nguyên nhân của một sự cố có thể liên kết với thay đổi đã được phát hành, dù nó được triển khai tuần trước hay bật sáng nay. Không có liên kết, các thước đo bất ổn gán thất bại cho ngày triển khai và bỏ sót những thất bại do thay đổi cờ. Các thay đổi cờ trên môi trường thật là thay đổi theo nghĩa ITIL và nên hiển thị với hỗ trợ thay đổi, kể cả khi chúng được ủy quyền trước như thay đổi chuẩn (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tần suất triển khai | Chia một thay đổi thành các lần triển khai tầm thường; triển khai lại các bản dựng không đổi; đếm các lần triển khai lên staging; đếm các lần triển khai chỉ có cấu hình cùng chuỗi chính | Kích thước lô phát hành và tỷ lệ triển khai có thay đổi hiển thị với người dùng; chuỗi cấu hình riêng; tỷ lệ thay đổi thất bại cạnh nó |
| Tần suất phát hành | Gắn nhãn lại triển khai thành phát hành; tính một cờ bật cho nhân viên nội bộ là một bản phát hành; phát hành các thay đổi rỗng hoặc trang trí để đạt mục tiêu; đếm mỗi giai đoạn của một lần phát hành dần là một bản phát hành riêng | Một định nghĩa bằng văn bản về phát hành; mẫu các bản phát hành mỗi quý được kiểm tra với các thay đổi hiển thị với người dùng; kích thước lô và số đếm thay đổi hướng khách hàng |
| Thời gian chờ phát hành | Bắt đầu đồng hồ muộn hơn, ví dụ ở phê duyệt thay vì gộp; loại các thay đổi chờ lâu là "bị chặn"; phát hành một thay đổi tầm thường trước để kéo trung vị xuống; kết thúc đồng hồ ở triển khai | Bách phân vị thứ 85 và tuổi của thay đổi đang chờ cũ nhất; một điểm bắt đầu cố định bằng văn bản; rà soát hằng quý 10 phần trăm thay đổi chậm nhất |
| Khoảng cách triển khai-phát hành | Bật cờ cho một người dùng tượng trưng để ghi phát hành sớm; loại mã tối lâu khỏi mẫu bằng cách gọi nó là "không phải phát hành"; xóa mã tối để tránh khoảng cách dài | Tỷ lệ tiếp xúc lúc phát hành (một ngưỡng cho điều được tính là đã phát hành); số đếm thay đổi được triển khai và gỡ mà không phát hành; số cờ lỗi thời |
| Kích thước lô phát hành | Chia công việc thành các pull request giả tạo; gộp các thay đổi không liên quan thành một để giảm số bản phát hành; chỉ đếm thay đổi lớn trong một gói | Kích thước thay đổi trung vị theo dòng hoặc tệp làm thước đo bối cảnh; rà soát một mẫu bản phát hành xem có gộp không liên quan không; tần suất cạnh kích thước |
| Độ phủ cờ tính năng | Thêm cờ vào các thay đổi tầm thường để nâng tỷ lệ; chỉ gắn cờ các thay đổi an toàn và phát hành các thay đổi rủi ro mà không có cờ; tạo một cờ mà thực tế không có cách tắt | Kết quả kiểm thử tắt cờ cho một mẫu cờ; số cờ lỗi thời; các nguyên nhân sự cố không có cờ |
| Số cờ lỗi thời | Gắn lại cờ phát hành là vĩnh viễn để rời khỏi số đếm lỗi thời; xóa bản ghi cờ nhưng để nó trong mã; kéo dài ngày hết hạn mà không rà soát | Tìm kiếm mã định kỳ so với sổ đăng ký; rà soát mọi thay đổi loại cờ; tuổi của cờ phát hành cũ nhất |

Một kết quả đọc lành mạnh cho thấy triển khai chạy trước phát hành với các dịch vụ dùng cờ, với một khoảng cách khiêm tốn, một kích thước lô nhỏ và ổn định, và một bách phân vị thứ 85 của thời gian chờ không cao hơn nhiều so với trung vị. Độ phủ cờ cao cho các thay đổi rủi ro, và số cờ lỗi thời thấp hoặc đang giảm. Một kết quả đọc trông quá tốt, như tần suất cao cùng kích thước lô tăng hoặc số cờ lỗi thời bằng không cùng số cờ vĩnh viễn phình ra, xứng đáng một cuộc kiểm toán mẫu trước khi ăn mừng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Triển khai liên tục và phát hành bằng cờ | Rủi ro kỹ thuật nhỏ mỗi lần triển khai; thời điểm phát hành thành lựa chọn kinh doanh; tắt nhanh | Cần kỷ luật cờ và công cụ; thêm các đường mã phải kiểm thử và gỡ |
| Ghép triển khai và phát hành | Đơn giản để giải thích; một sự kiện để đếm; không có nợ cờ | Mỗi bản phát hành mang cả rủi ro kỹ thuật và người dùng, khuyến khích lô lớn phát hành hiếm |
| Tàu phát hành theo lịch | Dự đoán được cho hỗ trợ và cơ quan quản lý | Thay đổi chờ chuyến tàu kế tiếp; số đếm phản ánh lịch, không phải năng lực |
| Phát hành dần theo phần trăm | Hạn chế ảnh hưởng của một bản phát hành tồi; tạo bằng chứng ở mỗi giai đoạn | Cần đo từ xa tốt và kiểm tra sức khỏe; các phiên bản lẫn lộn có thể chạy song song một lúc |
| Đếm cả triển khai và phát hành | Cho thấy việc tách và thời gian chờ | Cần nhật ký kiểm toán cờ hoặc bản ghi phát hành được ghép với đường ống |

Một dịch vụ chưa thể tách triển khai khỏi phát hành, ví dụ một ứng dụng di động phân phối qua đợt duyệt của cửa hàng ứng dụng, nên đo những gì nó đo được: tần suất phát hành, thời gian chờ phát hành và kích thước lô, với thời gian duyệt của cửa hàng được báo cáo như một thời gian chờ riêng.

## Câu hỏi để thảo luận với đội nhóm

**1. Chúng ta có dùng các từ "triển khai" và "phát hành" cho cùng một sự kiện không, và điều đó có khớp với những gì xảy ra không?**
Nhờ ba người mô tả thay đổi gần nhất đã lên chạy và ghi lại khi nào mã đến và khi nào người dùng lần đầu dùng được. Người điều phối nên giúp nhóm thống nhất một câu cho mỗi thuật ngữ và quyết định mỗi con số hiện có trên bảng điều khiển đo sự kiện nào trong hai sự kiện.

**2. Thời gian dài nhất một thay đổi đã xong phải chờ phát hành là bao lâu, và vì sao?**
Kéo thay đổi đã gộp cũ nhất mà người dùng vẫn chưa tiếp cận được. Lần theo đường đi của nó từ lúc gộp đến nay, và viết ra mọi lần chờ dọc đường.

**3. Nếu số đếm triển khai của chúng ta tăng gấp đôi, chúng ta sẽ kiểm tra gì trước khi gọi đó là tin tốt?**
Mời nhóm nêu tên các cách số đếm có thể tăng mà không có thêm giá trị đến người dùng. Xem kích thước lô, tỷ lệ triển khai có thay đổi hiển thị với người dùng, và các số liệu thất bại và làm lại. Người điều phối nên ghi lại những kiểm tra nào trong số này đã có trên bảng điều khiển và những kiểm tra nào cần thêm trước khi bất kỳ ai đặt mục tiêu.

**4. Những cờ nào của chúng ta mà chúng ta sẽ sợ xóa, và điều đó nói gì với chúng ta?**
Đi qua sổ đăng ký cờ và chọn ba cái cũ nhất. Hỏi ai sở hữu từng cái, nó bảo vệ gì, và điều gì sẽ xảy ra nếu gỡ nó. Nỗi sợ xóa thường nghĩa là thiếu kiểm thử, thiếu người sở hữu, hoặc thiếu bản ghi mục đích. Thống nhất ngày gỡ cho ít nhất một cái và kiểm tra sẽ làm việc gỡ an toàn.

**5. Ai quyết định khi nào một thay đổi được phát hành, và họ có thông tin họ cần không?**
Nơi phát hành là một lựa chọn kinh doanh, người đưa ra nó cần thấy trạng thái của lần phát hành, các tín hiệu sức khỏe và mức sẵn sàng hỗ trợ. Hỏi những sự thật đó sống ở đâu hiện nay và người ra quyết định đảo ngược một bản phát hành nhanh đến mức nào.

**6. Bản phát hành nào trong quý vừa rồi tệ nhất, và thước đo nào đã có thể cảnh báo chúng ta?**
Chọn một bản phát hành gây rắc rối và cùng đọc dòng thời gian. Hỏi lô có lớn không, khoảng cách có dài không, lần phát hành có giai đoạn không, và một cờ có thể đã hạn chế thiệt hại không. Chọn một thước đo để thêm hoặc một ngưỡng để siết chặt hơn nhờ đó.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối dùng những thước đo này để xem đường ống và cờ của họ có thực sự cho họ quyền kiểm soát việc tiếp xúc không. Các cái nhìn hữu ích nhất là khoảng cách, kích thước lô và tuổi của thay đổi đang chờ cũ nhất, vì mỗi cái chỉ vào một thứ đội có thể thay đổi.

### Đội dịch vụ và vận hành

Các đội vận hành và hỗ trợ quan tâm đến điều gì thay đổi trên môi trường thật và khi nào. Các sự kiện phát hành và thay đổi cờ cần hiển thị với họ, lý tưởng là có một định danh phát hành trên mọi sự cố. Phát hành theo giai đoạn và tắt nhanh giảm số sự cố cần khôi phục đầy đủ, và các thước đo giúp đội vận hành yêu cầu những kiểm soát làm công việc của họ êm hơn.

### Lãnh đạo và quản trị

Lãnh đạo nên yêu cầu xu hướng và độ phân tán cho mỗi dịch vụ, và câu trả lời cho một câu hỏi đơn giản: một thay đổi đã xong mất bao lâu để đến người dùng, và an toàn đến mức nào. Một mục tiêu cho tần suất triển khai giữa các đội mời gọi việc chia nhỏ và gắn nhãn lại, nên hãy ưu tiên mục tiêu cho kết quả như phân phối thời gian chờ và việc gỡ các thời gian chờ đã biết. Quản trị có thể giảm tải phê duyệt phát hành bằng cách ủy quyền trước cho các thay đổi có cờ rủi ro thấp, miễn là dấu vết kiểm toán cờ đầy đủ (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

### Khách hàng và người dùng

Khách hàng thấy các bản phát hành, không phải các lần triển khai. Họ quan tâm rằng các bản sửa đến sớm, rằng hành vi mới không làm họ bất ngờ, và rằng một thay đổi tồi có thể được đảo ngược nhanh. Một đội tách hai sự kiện có thể cho khách hàng truy cập sớm một tính năng, có thể công bố một ngày mà nó giữ được, và có thể hoàn tác một tính năng mà không mất phần còn lại. Hãy ghép những thước đo này với các thước đo hướng khách hàng (xem chủ đề 5.3, Chỉ số khả dụng, và chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến khu vực vận hành một dịch vụ tìm kiếm sản phẩm do một đội sản phẩm sở hữu, được một đội nền tảng và bàn dịch vụ hỗ trợ. Dịch vụ triển khai lên môi trường thật qua một đường ống và có một dịch vụ cờ được đưa vào sáu tháng trước. Mọi con số dưới đây chỉ mang tính minh họa.

Trong quý vừa qua đội thực hiện 52 lần triển khai môi trường thật, khoảng bốn mỗi tuần. Tần suất phát hành, được đếm là những khoảnh khắc một thay đổi trở nên tiếp cận được với mọi người dùng dự kiến, là 11 cho cùng quý, khoảng một mỗi tuần. Thời gian chờ phát hành trung vị, từ lúc gộp đến phát hành, là 9 ngày, với bách phân vị thứ 85 là 21 ngày. Khoảng cách triển khai-phát hành trung vị là 6 ngày. Kích thước lô phát hành trung vị là 3 thay đổi và bách phân vị thứ 85 là 14. Độ phủ cờ cho các thay đổi hiển thị với người dùng là 58 phần trăm, và 17 cờ phát hành đã quá 30 ngày sau khi phát hành đầy đủ.

Rủi ro lợi dụng đã hiển thị. Một số lần triển khai chỉ có cấu hình, và đường ống đếm mỗi cái là một lần triển khai, nên bảng điều khiển giờ cho thấy một chuỗi cấu hình riêng và buổi rà soát hằng tháng lấy mẫu 10 lần triển khai để tìm một thay đổi hiển thị với người dùng. Một quản lý khu vực thấy số đếm triển khai và yêu cầu đội nâng nó lên khớp với con số của một đội khác. Trưởng nhóm phản đối mục tiêu và đưa bộ số đầy đủ đến buổi rà soát hằng tháng thay vào đó. Buổi rà soát thấy khoảng cách dài vì các bản phát hành chờ buổi giao ban tiếp thị và hỗ trợ hằng tuần, rằng bốn trong 17 cờ lỗi thời bảo vệ các đường mã chưa ai kiểm thử, và rằng bách phân vị thứ 85 của kích thước lô đến từ vài bản phát hành gộp các thay đổi không liên quan trước một kỳ đóng băng dịp lễ.

Quyết định, ghi trong nhật ký quyết định, có bốn phần. Tiếp thị và hỗ trợ sẽ tham gia một buổi giao ban ngắn hơn, hai lần mỗi tuần, để quyết định phát hành không còn chờ khung hằng tuần. Mỗi cờ phát hành có một người sở hữu và ngày gỡ, và bốn cờ lỗi thời chưa kiểm thử được gỡ trong hai tuần tới. Các bản phát hành gộp thay đổi không liên quan cần một lý do nêu rõ trong bản ghi phát hành. Và đội từ chối mục tiêu triển khai chung, đề xuất thay vào đó một cái nhìn chung về phân phối thời gian chờ phát hành và độ gọn gàng của cờ cho mỗi dịch vụ. Người quản lý thay đổi đồng ý coi các thay đổi có cờ qua được các kiểm tra đường ống là thay đổi chuẩn, với một buổi rà soát quý sau. Trong quý kế tiếp (minh họa), thời gian chờ phát hành trung vị giảm xuống 5 ngày, số cờ lỗi thời giảm xuống 6, và tỷ lệ thay đổi thất bại giữ ổn định, nên thí nghiệm tiếp tục.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Tách triển khai khỏi phát hành cho phép một đội phát các thay đổi nhỏ liên tục và phát hành khi các bên liên quan sẵn sàng. Hãy rà soát độ gọn gàng của cờ thường xuyên. Điều cần lưu ý là đếm triển khai thưởng cho việc chia nhỏ thay đổi.

### AI

Viết mã có AI hỗ trợ có thể nâng số đếm triển khai và kích thước lô. Hãy ghép tần suất với khôi phục lần triển khai thất bại và số cờ lỗi thời, và đánh dấu các thay đổi có AI hỗ trợ trong dữ liệu. Điều cần lưu ý là nhiều lần triển khai hơn với nhiều làm lại hơn không phải tiến bộ.

### Tự động hóa

Hãy đếm triển khai và phát hành từ sự kiện đường ống, và tự động hóa nhắc dọn cờ. Đo đường ống theo tỷ lệ thất bại của chính nó. Điều cần lưu ý là các bản phát hành thủ công ngoài đường ống biến mất khỏi dữ liệu.

### Phân tích

Hãy cho thấy tần suất cùng thời gian chờ và kích thước lô, và khoảng cách giữa triển khai và phát hành. Quyết định được cung cấp thông tin là con đường đến người dùng chậm ở đâu. Điều cần lưu ý là định nghĩa về triển khai khác nhau giữa các đội.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Một công ty khởi nghiệp thường có một dịch vụ duy nhất và một thư viện cờ trong mã, nên triển khai và phát hành có thể tách rẻ. Hãy giữ một sổ đăng ký cờ đơn giản kèm ngày hết hạn, và chờ đủ khối lượng trước khi tin các bách phân vị.

**Doanh nghiệp nhỏ.** Một doanh nghiệp nhỏ có thể chạy phần mềm đóng gói hoặc mua, nơi nhà cung cấp kiểm soát phát hành. Các thước đo hữu ích là thời gian giữa bản phát hành của nhà cung cấp và việc doanh nghiệp áp dụng nó, và lô thay đổi đến cùng nhau trong một phiên bản lớn. Hãy ghi ngày phát hành của nhà cung cấp và ngày triển khai của chính bạn để thời gian chờ ở giữa hiển thị.

**Doanh nghiệp lớn.** Một doanh nghiệp lớn đối mặt với nhiều dịch vụ theo các kiểu phát hành khác nhau, một quy trình thay đổi trung tâm và các môi trường dùng chung. Công việc chính là thống nhất định nghĩa về triển khai và phát hành giữa các đội và nhà cung cấp, và giữ một bản tổng hợp tôn trọng các khác biệt. Hãy dùng độ phân tán và xu hướng cho quản trị và coi nền tảng cờ là một dịch vụ dùng chung có người sở hữu.

**Chính phủ và khu vực công.** Các bản phát hành thường gắn với ngày cố định, pháp luật, chu kỳ mua sắm hoặc cổng đảm bảo, nên tần suất phát hành có thể thấp vì lý do chính đáng. Tần suất triển khai và khoảng cách triển khai-phát hành vẫn có thể cho thấy bao nhiêu rủi ro đã được nhận sớm và bao nhiêu chờ ngày ấn định. Hãy báo cáo thời gian chờ các cổng bên ngoài riêng khỏi thời gian đường ống của chính đội.

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực của những thước đo này là giảm rủi ro và độ trễ giữa việc hoàn tất một thay đổi và giao giá trị của nó. Các lô lớn phát hành hiếm mang nhiều thay đổi hơn mỗi sự kiện, nên một thất bại khó chẩn đoán hơn và khó đảo ngược hơn. Tách triển khai khỏi phát hành cho đội một cách nhận rủi ro kỹ thuật sớm và với lượng nhỏ, và nhận rủi ro người dùng có chủ ý. Các thước đo cho thấy việc tách có thật không, và thay đổi đang chờ ở đâu.

Chi phí ở mức vừa phải. Thu thập các sự kiện triển khai và phát hành cần nhật ký đường ống và nhật ký kiểm toán cờ được ghép với kiểm soát phiên bản và trình theo dõi vấn đề, là một lần tích hợp rồi bảo trì thỉnh thoảng (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo). Bản thân thực hành cờ có chi phí vận hành: nền tảng hoặc thư viện, sổ đăng ký, kiểm thử cả hai đường của một thay đổi có cờ, và dọn dẹp cờ hết hạn. Chi phí ẩn chính là nợ cờ, mà số cờ lỗi thời giữ cho hiển thị.

Lợi tức theo một mẫu hình mà hầu hết các đội có thể quan sát trong dữ liệu của chính mình. Thời gian chờ phát hành ngắn hơn nghĩa là vòng phản hồi nhanh hơn về việc một thay đổi có giúp người dùng không. Lô nhỏ hơn nghĩa là chẩn đoán dễ hơn và đảo ngược dễ hơn. Khoảng cách triển khai-phát hành ngắn hơn nghĩa là ít thời gian công việc đã xong nằm chưa được hiện thực hóa. Đừng bịa một con số cho giá trị. Hãy dùng các ví dụ của chính đội về các thay đổi nằm tối nhiều tuần và xu hướng của các thước đo của chính nó.

## Phản mẫu và cạm bẫy

- **Đặt mục tiêu tần suất triển khai cho mọi đội.** Nó mời gọi việc chia nhỏ và gắn nhãn lại. Hãy đặt mục tiêu kết quả, như phân phối thời gian chờ hẹp hơn, và để tần suất theo sau.
- **Coi tàu phát hành là bằng chứng của năng lực.** Một lịch cố định cho số đếm ổn định và giấu tuổi của công việc đang chờ. Hãy theo dõi tuổi của thay đổi đã gộp cũ nhất mà người dùng không tiếp cận được.
- **Đếm thay đổi cấu hình là triển khai trong chuỗi chính.** Nó làm phồng con số. Hãy giữ một chuỗi riêng và cho thấy nó cạnh chuỗi chính.
- **Không bao giờ gỡ cờ.** Mã tích tụ các nhánh chết và tổ hợp chưa kiểm thử. Hãy gán cho mỗi cờ phát hành một người sở hữu và ngày gỡ, và coi việc gỡ là một phần của hoàn thành.
- **Thay đổi cờ trên môi trường thật mà không có bản ghi.** Một thay đổi cờ là thay đổi hành vi môi trường thật. Hãy gửi nó vào nhật ký kiểm toán và làm nó hiển thị với hỗ trợ thay đổi.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | "Triển khai" và "phát hành" được dùng thay thế nhau; mỗi người đếm khác nhau | Một vài đội viết ra định nghĩa riêng | Một định nghĩa bằng văn bản về triển khai và phát hành, với đồng hồ và trường hợp loại trừ, trong sổ đăng ký chỉ số | Thay đổi định nghĩa được ghi nhật ký và đánh dấu trên biểu đồ; mẫu được kiểm tra mỗi quý | Định nghĩa được sửa cùng nhà cung cấp và quản trị khi chúng không còn cung cấp thông tin cho quyết định |
| Tách triển khai và phát hành | Mỗi lần triển khai là một bản phát hành | Một số đội dùng cờ hoặc phát hành theo giai đoạn cho thay đổi rủi ro | Cờ và phát hành theo giai đoạn là một lựa chọn chuẩn, với sự kiện phát hành được ghi lại | Khoảng cách, kích thước lô và giai đoạn phát hành được theo dõi xu hướng và rà soát | Thời điểm phát hành được phối hợp giữa các đội và nhà cung cấp cho các dịch vụ liên quan |
| Thu thập dữ liệu | Số đếm được lắp ráp bằng tay từ phiếu và trò chuyện | Dữ liệu đường ống cho một số dịch vụ; phát hành ghi bằng tay | Triển khai, phát hành và thay đổi cờ được thu thập tự động cho hầu hết dịch vụ | Chất lượng dữ liệu (tỷ lệ liên kết, kiểm toán mẫu) được đo và theo dõi xu hướng | Sự kiện được chia sẻ giữa các đội và nhà cung cấp qua các giao diện đã thống nhất |
| Độ gọn gàng của cờ | Không có kiểm kê | Danh sách không chính thức ở một số đội | Sổ đăng ký có người sở hữu, loại và ngày hết hạn cho mọi cờ phát hành | Số cờ lỗi thời được theo dõi xu hướng; việc gỡ là một phần của hoàn thành và được kiểm tra | Nền tảng cờ được quản lý như một dịch vụ dùng chung với nhắc hết hạn tự động |
| Việc dùng các con số | Báo cáo lên trên dưới dạng một số đếm duy nhất | Các đội thỉnh thoảng nhìn biểu đồ của chính mình | Đội sở hữu rà soát hằng tháng cạnh các số liệu thất bại và làm lại | Xu hướng nuôi cải tiến được tài trợ với một rào chắn | Độ phân tán và xu hướng cung cấp thông tin cho đầu tư nền tảng và chính sách thay đổi trong toàn tổ chức |

## Danh sách kiểm tra

- [ ] "Triển khai" và "phát hành" được định nghĩa bằng văn bản, với các sự kiện đồng hồ và trường hợp loại trừ cho mỗi cái.
- [ ] Các lần triển khai lên môi trường thật được thu thập tự động từ đường ống, với môi trường kiểm thử bị loại trừ.
- [ ] Sự kiện phát hành được thu thập từ nhật ký kiểm toán cờ, các giai đoạn phát hành hoặc bản ghi phát hành.
- [ ] Thời gian chờ phát hành dùng một điểm bắt đầu đồng hồ nêu rõ và báo cáo trung vị và bách phân vị thứ 85.
- [ ] Khoảng cách triển khai-phát hành và kích thước lô phát hành được báo cáo cạnh tần suất.
- [ ] Các lần triển khai chỉ có cấu hình xuất hiện trong một chuỗi riêng.
- [ ] Mỗi cờ phát hành có một người sở hữu, một loại và một ngày hết hạn trong sổ đăng ký.
- [ ] Cờ lỗi thời được rà soát hằng tháng và việc gỡ chúng là một phần của hoàn thành.
- [ ] Định danh bản phát hành xuất hiện trên bản ghi sự cố và thay đổi.
- [ ] Một mẫu các lần triển khai và phát hành được kiểm toán mỗi quý so với các định nghĩa.
- [ ] Một thí nghiệm cải tiến, gắn với thời gian chờ dài nhất, đang chạy với một ngày rà soát.

## Lời nhắc AI

**Soạn định nghĩa triển khai và phát hành cho một dịch vụ.**

```text
I am defining release and deployment metrics for [service name]. Our tools are
[version control host, CI/CD system, flag service, issue tracker, ITSM tool].
Our release style is [continuous, weekly train, monthly, store-reviewed, or
other]. For deployment frequency, release frequency, release lead time,
deployment-to-release gap, release batch size, feature flag coverage, and stale
flag count, draft a definition that states where the clock starts and stops,
what is counted and excluded, the data source, and one ambiguity to resolve. Do
not invent benchmark values or claim our practice matches any published
performance band. List your assumptions and the questions I should answer to
finish the definitions.
```

**Kiểm tra một bộ chỉ số phát hành về rủi ro bị lợi dụng.**

```text
Here is how we compute and report our release and deployment metrics:
[description of each metric, its data source, and how it is reported]. The
audience is [team, leadership, or governance body] and the targets, if any,
are [targets or none]. For each metric, list plausible ways the number could
be inflated, hidden, or distorted without real improvement, and suggest a paired
guardrail metric or practice that would catch it. Do not invent statistics. List
your assumptions and any information you would need to be more precise.
```

**Phân tích một bản xuất dữ liệu về triển khai, phát hành và cờ.**

```text
I will paste a small export with these fields: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. It covers [number] deployments and [number]
flags for [service name] between [start date] and [end date]. Compute the
median and 85th percentile of release lead time and of the deployment-to-release
gap, the batch size distribution, and the list of flags past [age limit] days
since full rollout, showing the counts behind each. Flag records with missing
links or suspicious timestamps. Do not extrapolate beyond the data or compare
the result with outside benchmarks. List your assumptions and the data quality
issues that limit the conclusions.
```

**Lập kế hoạch thí nghiệm dọn cờ và giảm thời gian chờ phát hành.**

```text
Our longest release wait is [description of the wait, with date range and
counts], and our flag register holds [number] release flags, of which [number]
are past their expiry date. Constraints are [constraints, for example regulated
releases, store review, shared test environment]. Propose three small
experiments of four to six weeks, each with a hypothesis, a way to observe the
effect, a guardrail metric, and a risk. Do not invent expected improvement
figures. List your assumptions and what we should check before starting.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm các chủ đề thay đổi, phát hành và sự cố liên quan và rào chắn nên đứng cạnh mỗi chỉ số phát hành.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một phiên bản sửa của chủ đề này giữ các đồng hồ, vectơ lợi dụng và tham chiếu chéo nhất quán.

## Điểm chính cần nhớ

- Một lần triển khai đưa một phiên bản vào một môi trường và một bản phát hành làm một thay đổi tiếp cận được với người dùng. Hãy đo hai thứ riêng ở bất cứ đâu bạn có thể.
- Thời gian chờ phát hành nên kết thúc ở bản phát hành, với điểm bắt đầu nêu rõ, và được báo cáo dưới dạng trung vị và bách phân vị thứ 85.
- Khoảng cách triển khai-phát hành và kích thước lô cho thấy việc tách có thật không, và chúng bảo vệ tần suất khỏi việc chia nhỏ và gắn nhãn lại.
- Cờ tính năng làm cho việc tách khả thi và mang một chi phí, nên hãy theo dõi độ phủ và cờ lỗi thời kèm người sở hữu và ngày hết hạn.
- Đếm theo quy tắc bằng văn bản, liên kết bản phát hành với sự cố và thay đổi, và so sánh một dịch vụ với lịch sử của chính nó thay vì với các đội khác.

## Tài liệu tham khảo và đọc thêm

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
