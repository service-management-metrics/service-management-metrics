# Bức tranh công cụ

**Hãy chọn công cụ cho những câu hỏi bạn cần trả lời và dữ liệu bạn có thể tin, giữ dữ liệu có thể di chuyển, và chi cho nền tảng ít hơn cho những thói quen làm cho các con số đáng đọc.**

## Tổng quan và động lực

Công cụ là nơi các chương trình chỉ số thường đi sai nhất, theo hai hướng đối lập. Một số tổ chức mua một nền tảng phân tích lớn trước và sau đó phát hiện họ không có định nghĩa thống nhất, không có dữ liệu sạch, và không có đối tượng. Những tổ chức khác dựng một đống script và bảng tính mà một người hiểu, và chương trình kết thúc khi người đó chuyển đi. Cả hai đều bắt đầu từ công cụ và bỏ qua các câu hỏi nó định trả lời.

Bức tranh đông đúc và thay đổi nhanh, nên chủ đề này cố ý trung lập với nhà cung cấp. Nó mô tả các loại công cụ, luồng dữ liệu giữa chúng, các đánh đổi giữa tự xây và mua, và tiêu chí để chọn. Nó không nêu tên sản phẩm nào, vì tên sản phẩm lỗi thời nhanh và một cuốn sách là hướng dẫn kém cho tính năng và giá hiện hành. Các nguyên tắc đo lường không đổi theo nhà cung cấp: biết bạn đang đo gì, dữ liệu đến từ đâu, ai sở hữu nó, và nó sẽ được đọc thế nào.

Phần lớn dữ liệu mà một chương trình chỉ số dịch vụ cần đã tồn tại trong các hệ thống ghi nhận. Các công cụ [quản lý dịch vụ CNTT](https://en.wikipedia.org/wiki/IT_service_management) giữ sự cố, yêu cầu, vấn đề, thay đổi và bản ghi cấu hình. Các hệ thống kiểm soát mã nguồn, dựng, kiểm thử và triển khai giữ lịch sử công việc kỹ thuật. Các hệ thống giám sát và [khả năng quan sát](https://en.wikipedia.org/wiki/Observability_(software)) giữ dữ liệu về tính sẵn sàng, độ trễ và lỗi. Công cụ khảo sát, hệ thống tài chính, hệ thống nhân sự và kho hợp đồng giữ phần còn lại. Một chương trình chỉ số ghép các nguồn này mà không làm xáo trộn công việc đang diễn ra trong chúng (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

Việc di chuyển dữ liệu từ các nguồn đến nơi nó có thể được phân tích là một [đường ống dữ liệu](https://en.wikipedia.org/wiki/Data_pipeline), và mẫu cổ điển là [trích xuất, biến đổi, tải](https://en.wikipedia.org/wiki/Extract,_transform,_load): đọc từ các nguồn, định hình lại và làm sạch, và ghi vào một kho. Kho có thể là một [kho dữ liệu](https://en.wikipedia.org/wiki/Data_warehouse), một kho tích hợp dữ liệu từ nhiều hệ thống được tổ chức để phân tích. Các chương trình tiếp cận những hệ thống này qua một [giao diện lập trình ứng dụng](https://en.wikipedia.org/wiki/Application_programming_interface), là cách một phần mềm yêu cầu dữ liệu từ phần mềm khác theo một cách đã định nghĩa. Chất lượng của điều chảy qua quyết định chất lượng của mọi biểu đồ. [Chất lượng dữ liệu](https://en.wikipedia.org/wiki/Data_quality) bao gồm độ chính xác, tính đầy đủ, tính nhất quán và tính kịp thời, và kỷ luật duy trì nó là [quản trị dữ liệu](https://en.wikipedia.org/wiki/Data_governance).

Khía cạnh tài chính xứng đáng sự cẩn thận. [Tổng chi phí sở hữu](https://en.wikipedia.org/wiki/Total_cost_of_ownership) của một công cụ gồm giấy phép, hạ tầng, tích hợp, đào tạo, quản trị, và chi phí rời bỏ nó. [Bị khóa nhà cung cấp](https://en.wikipedia.org/wiki/Vendor_lock-in) là tình huống mà việc đổi nhà cung cấp tốn kém đến mức khách hàng thực tế bị ràng buộc. Các chương trình chỉ số đặc biệt dễ bị lộ, vì định nghĩa, lịch sử và bảng điều khiển tích tụ bên trong một công cụ, và việc trích chúng ra sau này khó.

Các mục đích linh hoạt định hình cách tiếp cận. Phân phối liên tục áp dụng cho chương trình: dựng đường đi hoạt động mỏng nhất từ một nguồn đến một góc nhìn cho một đội, học từ việc sử dụng nó, và mở rộng. Sự tham gia liên tục của các bên liên quan nghĩa là những người sẽ dùng các con số tham gia vào việc chọn công cụ. Cải tiến liên tục và tiến hóa liên tục nghĩa là công cụ được kỳ vọng sẽ thay đổi, nên tính di chuyển được quan trọng hơn sự hoàn hảo. Nhịp độ bền vững nghĩa là chương trình không trở thành một dự án kỹ thuật dữ liệu bỏ đói công việc mà nó đo. Và những cá nhân có động lực làm việc tốt hơn với công cụ họ đã giúp chọn và hiểu so với công cụ bị áp đặt từ trên, đặc biệt là công cụ mang cảm giác giám sát (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi).

Chủ đề dựa vào hướng dẫn thiết kế bảng điều khiển (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ) và các chủ đề quản trị ở Phần 1.

## Nguyên tắc chính

- **Câu hỏi trước công cụ.** Viết các câu hỏi và thước đo trước, rồi xem chúng cần công cụ gì.
- **Dùng các hệ thống ghi nhận.** Lấy dữ liệu từ nơi công việc diễn ra, và tránh yêu cầu mọi người nhập nó hai lần.
- **Giữ định nghĩa ngoài công cụ.** Duy trì định nghĩa chỉ số ở dạng đơn giản, di chuyển được, sống sót qua việc đổi nền tảng.
- **Ưu tiên dữ liệu di chuyển được.** Lưu dữ liệu ở định dạng mở, với giao diện được ghi tài liệu, và giữ một đường ra.
- **Bắt đầu mỏng và lớn lên.** Một nguồn, một góc nhìn, một đội, rồi mở rộng.
- **Tính chi phí đầy đủ.** Giấy phép là một phần nhỏ của chi phí tích hợp, làm sạch dữ liệu và duy trì.
- **Bảo vệ con người.** Công cụ nên tổng hợp về đội và dịch vụ, thực thi quy tắc truy cập, và làm giám sát khó khăn.
- **Coi đường ống là một dịch vụ.** Nó cần một người sở hữu, giám sát, kiểm thử, và cách xử lý thất bại.

## Định nghĩa chỉ số

Các thước đo dưới đây mô tả sức khỏe của công cụ chỉ số và nguồn cung dữ liệu của nó. Chúng dành cho đội chương trình, để giữ hạ tầng trung thực, và không được dùng để đánh giá con người.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ nguồn | Tỷ lệ hệ thống ghi nhận cần cho các thước đo đã thống nhất mà cấp dữ liệu tự động cho kho chỉ số | số nguồn đã kết nối và kiểm thử / số nguồn cần cho các thước đo đã thống nhất | phần trăm | Kiểm kê nguồn; cấu hình đường ống | Quản lý thông tin và công nghệ; quản lý cấu hình dịch vụ | Phân phối liên tục của đường ống | Hằng quý |
| Độ tin cậy của đường ống | Tỷ lệ lần tải dữ liệu theo lịch hoàn tất đúng hạn với các kiểm tra qua | số lần tải đúng hạn với kiểm tra qua / số lần tải theo lịch | phần trăm | Nhật ký đường ống và kết quả kiểm thử | Giám sát và quản lý sự kiện | Kiểm thử tự động và phản hồi nhanh | Hằng tuần |
| Thời gian đến một thước đo mới | Thời gian trôi qua từ một yêu cầu được phê duyệt cho một thước đo mới đến khi nó sẵn có kèm thẻ định nghĩa | số ngày từ phê duyệt đến công bố, trung vị và bách phân vị thứ 85 | ngày | Bản ghi yêu cầu và phát hành | Quản lý yêu cầu dịch vụ; hỗ trợ thay đổi | Các phần tăng giá trị nhỏ | Hằng quý |
| Tỷ lệ đối chiếu | Tỷ lệ số liệu chính khớp giữa kho chỉ số và hệ thống nguồn trong một kiểm tra lấy mẫu | số liệu khớp trong dung sai / số liệu được kiểm tra | phần trăm | Kiểm tra đối chiếu | Quản lý thông tin và công nghệ | Phản hồi đáng tin | Hằng tháng |
| Tỷ lệ công sức thủ công | Tỷ lệ công sức cho báo cáo định kỳ dành cho thu thập và làm sạch thủ công | số giờ cho các bước thủ công / tổng số giờ cho báo cáo định kỳ | phần trăm | Ước lượng thời gian; khảo sát đội | Cải tiến liên tục | Loại bỏ toil | Hằng quý |
| Mức sẵn sàng thoát | Liệu định nghĩa, lịch sử và bảng điều khiển có thể được xuất ra dưới dạng được ghi tài liệu, dùng được | số lần xuất đã kiểm thử và đầy đủ / số lần kiểm thử xuất đã lên kế hoạch | phần trăm | Bản ghi kiểm thử xuất | Quản lý nhà cung cấp; quản lý liên tục dịch vụ | Lựa chọn bền vững | Hằng năm |
| Chi phí công cụ mỗi đội được hỗ trợ | Chi phí hằng năm đầy đủ của công cụ chương trình chia cho các đội nó phục vụ | (giấy phép + hạ tầng + công sức duy trì) / số đội được phục vụ | tiền tệ mỗi đội | Hồ sơ tài chính và công sức | Quản lý tài chính dịch vụ | Nhịp độ bền vững | Hằng năm |

Hãy đếm nguồn theo điều các thước đo đã thống nhất cần chứ không theo điều tồn tại, để độ phủ không được nâng bằng cách kết nối các hệ thống không liên quan. Đối chiếu đòi hỏi chọn một mẫu trước và một dung sai. Chi phí công cụ mỗi đội được hỗ trợ là một con số mô tả dùng để so sánh các phương án, không phải mục tiêu để ép xuống. Nó gồm công sức của những người duy trì đường ống.

## Khuyến nghị

### Quyết định bạn cần gì

**1. Viết yêu cầu dưới dạng câu hỏi và thước đo.** Hãy liệt kê các thước đo chương trình đã đồng ý công bố (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ), các nguồn mỗi cái cần, mỗi cái phải mới đến đâu, ai được thấy nó, và lịch sử phải giữ bao lâu. Phân biệt điều bắt buộc với điều ưu tiên. Một tài liệu ngắn hai trang tốt hơn một yêu cầu đề xuất dài.

**2. Kiểm kê những gì bạn đã sở hữu.** Nhiều tổ chức có các tính năng phân tích trong công cụ quản lý dịch vụ, kỹ thuật và giám sát của họ mà không dùng. Nhiều nơi có bảng tính, script và báo cáo đã trả lời một phần nhu cầu. Hãy bắt đầu bằng cách xem những thứ này làm được gì. Công cụ rẻ nhất là công cụ đã được trả tiền và đã được hiểu.

**3. Kiểm kê dữ liệu trước công cụ.** Với mỗi nguồn, hãy kiểm tra dữ liệu có đầy đủ, được nhập nhất quán, và truy cập được qua một giao diện không. Một công cụ không thể sửa các danh mục sự cố mà không ai dùng, bản ghi thay đổi được tạo sau sự việc, hay dấu thời gian bị ghi đè. Một số công việc sớm có giá trị nhất là sửa việc thu thập dữ liệu tại nguồn (xem chủ đề 7.4, Chỉ số chất lượng cấu hình và CMDB).

### Xây, mua, hay kết hợp

**4. So sánh xây và mua về chi phí đầy đủ và sự phù hợp.** Mua một nền tảng phân tích hoặc một sản phẩm phân tích kỹ thuật đóng gói mang lại các trình kết nối làm sẵn, biểu đồ và hỗ trợ, với giá là giấy phép, một mô hình cố định về thế giới, và sự phụ thuộc. Xây một đường ống và các góc nhìn mang lại sự phù hợp và kiểm soát, với giá là thời gian kỹ thuật và duy trì. Hầu hết tổ chức kết thúc bằng sự kết hợp: dùng báo cáo có sẵn nơi nó đủ tốt, dùng một công cụ phân tích chung cho các góc nhìn, và xây các trình kết nối mỏng nơi không gì khác vừa.

**5. Kiểm thử một nguyên mẫu với dữ liệu thật.** Trước khi cam kết, hãy chạy một đợt thử có giới hạn thời gian với hai hoặc ba thước đo của riêng bạn, dùng dữ liệu thật và người dùng thật. Kiểm tra mất bao lâu để kết nối, công cụ xử lý định nghĩa của bạn tốt đến đâu, nó có thể cho thấy phân phối và bách phân vị không, và nó kiểm soát truy cập thế nào. Các buổi trình diễn tiếp thị dùng dữ liệu sạch, còn dữ liệu của bạn thì không.

**6. Lên kế hoạch thoát trước khi vào.** Hãy hỏi định nghĩa, lịch sử và bảng điều khiển có thể được xuất ra thế nào, và kiểm thử nó. Ưu tiên các công cụ có giao diện mở và định dạng chuẩn, và giữ bản sao của riêng bạn về các định nghĩa chỉ số và dữ liệu đã làm sạch. Chi phí rời đi là một phần của chi phí ở lại, và một lối thoát đáng tin cải thiện vị thế thương lượng của bạn (xem chủ đề 8.4, Chỉ số nhà cung cấp và hợp đồng).

### Chọn với tiêu chí rõ ràng

**7. Dùng tiêu chí lựa chọn trung lập với nhà cung cấp.** Các tiêu chí hữu ích gồm những điều sau. Các nguồn dữ liệu bạn cần có trình kết nối được duy trì không? Định nghĩa có thể được viết, đặt phiên bản và rà soát không? Công cụ có thể cho thấy phân phối, bách phân vị và xu hướng cũng như giá trị trung bình và số đếm không? Nó có tổng hợp về đội và dịch vụ và cho phép bạn hạn chế các góc nhìn cấp cá nhân không? Nó có hỗ trợ truy cập theo vai trò và kiểm toán không? Dữ liệu có xuất được ở định dạng mở không? Nhà cung cấp xử lý thay đổi, ngừng hoạt động và sự cố an ninh thế nào? Nó tốn bao nhiêu ở quy mô bạn kỳ vọng sau ba năm?

**8. Cảnh giác với chấm điểm có sẵn.** Một số công cụ đưa ra điểm tổng hợp, xếp hạng con người, hoặc chỉ số "năng suất" ngay từ đầu. Những cái này dễ áp dụng và khó bảo vệ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Hãy kiểm tra liệu các tính năng đó có thể tắt không, và đặt chính sách trước khi bật bất cứ thứ gì.

**9. Mời những người sẽ dùng nó.** Hãy nhờ các đội thử các phương án trong danh sách rút gọn với dữ liệu của họ. Câu hỏi của họ sẽ lộ ra những giới hạn mà tài liệu yêu cầu không có. Mời an ninh, quyền riêng tư, tài chính và mua sắm tham gia sớm (xem chủ đề 8.1, Chỉ số sự cố bảo mật và lỗ hổng).

### Chạy đường ống như một dịch vụ

**10. Tự động hóa, kiểm thử và giám sát đường ống.** Hãy coi các lần tải dữ liệu như bất kỳ dịch vụ sản xuất nào khác. Chạy kiểm tra tự động về số đếm, khoảng giá trị, bản trùng lặp và độ mới. Cảnh báo khi thất bại, và cho thấy trạng thái chất lượng dữ liệu trên bảng điều khiển. Đặt phiên bản cho logic biến đổi và rà soát thay đổi của nó như mã (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo).

**11. Giữ một danh mục các định nghĩa.** Hãy duy trì một danh mục chung với định nghĩa, công thức, nguồn, người sở hữu và giới hạn của mỗi thước đo. Nó có thể là một kho các tệp văn bản thuần, một công cụ danh mục dữ liệu, hoặc một wiki. Điều quan trọng là nó là nguồn sự thật về ý nghĩa, và các bảng điều khiển đọc từ nó hoặc liên kết tới nó (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

**12. Rà soát công cụ hằng năm.** Mỗi năm, hãy kiểm tra công cụ tốn bao nhiêu, chương trình dùng phần nào, nơi nào còn công sức thủ công, và có phương án mới nào. Cho nghỉ hưu những gì không ai dùng. Cân nhắc lại cân bằng xây hay mua khi chương trình trưởng thành. Lên kế hoạch cho thay đổi như một phần bình thường của công việc.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ nguồn | Kết nối các nguồn dễ hoặc không liên quan; tính một kết nối không mang dữ liệu dùng được | Đếm theo các thước đo đã thống nhất; kiểm tra mức đầy đủ của dữ liệu mỗi nguồn |
| Độ tin cậy của đường ống | Nới lỏng kiểm tra để lần tải luôn qua; lên lịch ít lần tải hơn | Rà soát độ mạnh của các kiểm tra; theo dõi đối chiếu và số dòng nguồn |
| Thời gian đến một thước đo mới | Công bố mà không có định nghĩa hay kiểm thử; thu hẹp điều được tính là thước đo mới | Yêu cầu thẻ định nghĩa và một kiểm tra đối chiếu để hoàn tất |
| Tỷ lệ đối chiếu | Chọn số liệu dễ để kiểm tra; nới dung sai sau một lần lệch | Chọn mẫu trước khi kiểm tra; cố định dung sai trước; gồm cả số liệu khó |
| Tỷ lệ công sức thủ công | Khai thấp công việc thủ công; giấu công sức trong ngân sách khác | Hỏi những người làm công việc; so sánh với thời gian dành vào cuối mỗi chu kỳ báo cáo |
| Mức sẵn sàng thoát | Kiểm thử một lần xuất một phần; tính một kế hoạch có tài liệu là sẵn sàng | Chạy một lần khôi phục đầy đủ vào một công cụ khác trên một mẫu; xác minh định nghĩa và lịch sử |
| Chi phí công cụ mỗi đội được hỗ trợ | Loại công sức duy trì; thêm đội trên giấy | Gồm thời gian nhân viên; đếm các đội thực sự dùng góc nhìn của họ |

Một kết quả đọc lành mạnh cho thấy dữ liệu đến đúng hạn và đối chiếu với nguồn, thước đo mới được công bố kèm định nghĩa, công sức thủ công giảm, và một lối thoát đã được kiểm thử ít nhất một lần.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Báo cáo có sẵn của từng công cụ | Rẻ; đã có; được hiểu | Các ngăn riêng; định nghĩa không nhất quán giữa các công cụ |
| Một bộ duy nhất từ một nhà cung cấp | Tích hợp; một hợp đồng | Bị khóa; vừa mô hình của nhà cung cấp, không phải của bạn |
| Sản phẩm phân tích kỹ thuật đóng gói | Khởi đầu nhanh; trình kết nối làm sẵn | Mô hình cố định; rủi ro chấm điểm cấp cá nhân; chi phí ở quy mô lớn |
| Công cụ phân tích và trực quan hóa chung | Linh hoạt; nhiều người có kỹ năng | Cần nguồn cung dữ liệu và kỹ năng thiết kế |
| Kho dữ liệu với lớp biến đổi | Kiểm soát mạnh; ghép qua các nguồn | Công sức kỹ thuật; cần quyền sở hữu |
| Bảng tính và script | Khởi đầu nhanh; không có giấy phép | Mong manh; phụ thuộc cá nhân; khó kiểm toán |
| Bộ công cụ mã nguồn mở | Kiểm soát; không có chi phí giấy phép | Công sức duy trì; hỗ trợ phụ thuộc vào bạn |
| Chỉ số thu thập bằng tay | Hoạt động mà không cần công cụ | Chậm; dễ lỗi; khó duy trì |

Câu trả lời dạng văn xuôi là bắt đầu với những gì bạn đã có, thêm kết nối mỏng nhất trả lời câu hỏi thật, giữ định nghĩa và dữ liệu di chuyển được, và chỉ chuyển sang công cụ nặng hơn khi những công cụ nhẹ hơn rõ ràng giới hạn quyết định.

## Câu hỏi để thảo luận với đội nhóm

**1. Những con số nào chúng ta tạo ra bằng tay mỗi tháng, và cần gì để ngừng?**
Liệt kê các báo cáo thủ công và số giờ chúng tốn. Tìm nguồn của từng cái và liệu nó có giao diện không. Người điều phối nên hỏi báo cáo nào có thể đơn giản bỏ đi. Thống nhất một cái để tự động hóa và một cái để cho nghỉ hưu.

**2. Nếu công cụ báo cáo hiện tại của chúng ta biến mất ngày mai, chúng ta sẽ mất gì?**
Nêu tên các định nghĩa, lịch sử và bảng điều khiển chỉ tồn tại bên trong nó. Kiểm tra cái nào xuất được. Thống nhất nơi giữ một bản sao.

**3. Dữ liệu nào trong hệ thống của chúng ta mà chúng ta ít tin nhất, và vì sao?**
Nhìn vào thói quen nhập, giá trị mặc định và các trường bị ghi đè. Ước lượng mỗi sự méo mó ảnh hưởng đến các thước đo chúng ta công bố đến đâu. Thống nhất bản sửa nguồn nào thêm nhiều lòng tin nhất với ít công sức nhất.

**4. Công cụ cho phép mọi người thấy gì mà chúng ta sẽ không muốn nó cho thấy?**
Kiểm tra các góc nhìn cấp cá nhân, nhật ký hoạt động và xếp hạng. Quyết định hạn chế hay tắt gì, và viết quy tắc ra trước khi ai dùng tính năng.

**5. Chúng ta mất bao lâu để thêm một thước đo mới, và cái gì làm chúng ta chậm?**
Truy một yêu cầu gần đây từ phê duyệt đến khi sẵn có. Đánh dấu các lần chờ. Thống nhất cái gì cần gỡ, như phê duyệt, định nghĩa còn thiếu hay làm sạch thủ công.

**6. Chi phí đầy đủ của công cụ này cho một đội trong một năm là bao nhiêu?**
Cộng giấy phép, hạ tầng, tích hợp, đào tạo, và thời gian của những người duy trì nó. So sánh với các quyết định nó đã cải thiện. Thảo luận chúng ta sẽ ngừng trả tiền cho cái gì.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội muốn dữ liệu đến từ công việc mà không phải nhập thêm, và các góc nhìn trả lời câu hỏi của họ. Họ nên giúp chọn và kiểm thử công cụ, sở hữu định nghĩa các thước đo của chính họ, và từ chối các tính năng xếp hạng cá nhân. Thời gian của họ là đầu vào khan hiếm nhất, và công cụ yêu cầu họ ghi công việc hai lần sẽ bị chống lại.

### Đội dịch vụ và vận hành

Các đội vận hành chạy các nguồn và thường cả đường ống. Họ nên coi đường ống là một dịch vụ có giám sát và kiểm thử, giữ các trường dữ liệu nguồn đáng tin cậy, và đánh dấu các thay đổi trong hệ thống ghi nhận sẽ làm vỡ trình kết nối. Họ là những người đầu tiên thấy khi một con số sai.

### Lãnh đạo và quản trị

Lãnh đạo tài trợ chương trình và đặt kỳ vọng. Họ nên hỏi về tổng chi phí, không phải giá giấy phép, yêu cầu tính di chuyển được và một lối thoát, chống lại việc mua một nền tảng để giải quyết vấn đề định nghĩa, và khăng khăng đòi quy tắc quyền riêng tư và truy cập. Họ nên chấp nhận một khởi đầu khiêm tốn và đánh giá nó theo các quyết định nó cải thiện.

### Khách hàng và người dùng

Khách hàng và người dùng hiếm khi thấy công cụ, và họ sống với hậu quả của nó: dữ liệu về họ được lưu, kết hợp và phân tích. Họ xứng đáng có quy tắc rõ ràng về điều gì được thu thập, giữ bao lâu, ai thấy nó, và nó được bảo vệ thế nào. Nơi các thước đo dựa vào phản hồi của họ, công cụ nên tôn trọng sự đồng ý và ẩn danh.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một công ty hậu cần khu vực có một công cụ quản lý dịch vụ, một hệ thống kiểm soát mã nguồn và triển khai, một nền tảng giám sát, và một công cụ khảo sát, và mỗi cái tạo ra báo cáo riêng. Trưởng bộ phận quản lý dịch vụ muốn một cái nhìn về sức khỏe dịch vụ cho 12 đội. Một nhà cung cấp chào một nền tảng phân tích trọn gói kèm hợp đồng ba năm. Các con số dưới đây chỉ mang tính minh họa.

Trưởng bộ phận quản lý dịch vụ trước hết viết các câu hỏi và 14 thước đo mà các đội và lãnh đạo đã đồng ý trong các buổi bảng điều khiển. Bà kiểm kê những gì đang có: công cụ quản lý dịch vụ có thể xuất dữ liệu sự cố và thay đổi qua giao diện, hệ thống triển khai cung cấp dấu thời gian triển khai, và nền tảng giám sát báo cáo tính sẵn sàng so với mục tiêu. Bà nhờ một nhóm nhỏ đại diện đội thử hai phương án trên ba thước đo với dữ liệu thật: nền tảng của nhà cung cấp và một sự kết hợp của một công cụ trực quan hóa chung với một kho dữ liệu nhỏ và các trình kết nối mỏng.

Đợt thử làm lộ ra những khác biệt. Nền tảng kết nối với mọi nguồn trong hai ngày, nhưng nó tính thời gian chờ như một giá trị trung bình và không thể cho thấy một bách phân vị cao, nó có một "điểm năng suất đội" có sẵn không thể tắt, và việc xuất định nghĩa bảng điều khiển cho ra một tệp mà không công cụ nào khác đọc được. Sự kết hợp mất 11 ngày để kết nối, nhưng nó cho thấy trung vị và bách phân vị, giữ định nghĩa dưới dạng văn bản thuần trong một kho mã, và hạn chế các trường cấp cá nhân tại kho dữ liệu. Nhóm cũng phát hiện 30 phần trăm bản ghi thay đổi được tạo sau khi triển khai, nên thời gian chờ là sai dù công cụ nào đọc nó. Sửa thói quen nhập tại nguồn trở thành phần việc đầu tiên.

Công ty chọn sự kết hợp. Độ phủ nguồn tăng từ 3 trên 8 nguồn cần lên 7 trên 8 trong hai quý. Độ tin cậy của đường ống bắt đầu ở 71 phần trăm lần tải đúng hạn với kiểm tra qua, và đạt 96 phần trăm sau khi đội thêm kiểm thử và cảnh báo thất bại. Thời gian đến một thước đo mới giảm từ trung vị 31 ngày xuống 9. Công sức thủ công cho báo cáo hằng tháng giảm từ khoảng 40 giờ xuống 6. Một giám đốc hỏi liệu điểm năng suất của nền tảng nhà cung cấp có thể được thêm vào để có một bảng xếp hạng duy nhất các đội không. Trưởng bộ phận quản lý dịch vụ giải thích phân tích trong chủ đề 1.2, cho thấy điều đã xảy ra khi một điểm tương tự được dùng ở nơi khác trong công ty, và đề xuất cái nhìn cân bằng hiện tại. Quyết định được ghi lại, và tính năng điểm bị tắt trong mọi công cụ có nó.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy chọn công cụ qua các thí nghiệm nhỏ với một đội thật và một câu hỏi thật, và giữ khả năng đổi hướng. Điều cần lưu ý là một quyết định nền tảng lớn đưa ra sớm khóa chặt định nghĩa trước khi đội học được mình cần gì.

### AI

Nhiều công cụ phân tích và quản lý dịch vụ nay có các tính năng AI. Hãy hỏi AI làm gì, với dữ liệu gì, theo điều khoản nào, đầu ra của nó được kiểm tra thế nào, và cách tắt nó, và đo các tính năng AI như mọi việc dùng khác (xem chủ đề 10.5, Chỉ số quản trị và rủi ro AI). Điều cần lưu ý là các tính năng AI bật mặc định có thể thay đổi báo cáo một cách âm thầm, nên hãy hỏi nhà cung cấp về từng bản phát hành.

### Tự động hóa

Hãy ưu tiên các công cụ cho phép bạn thu thập dữ liệu tự động qua các giao diện được ghi tài liệu và giữ dữ liệu của bạn di chuyển được. Đo các tích hợp theo thất bại và thời gian đến một thước đo mới. Điều cần lưu ý là các trình kết nối độc quyền có thể làm dữ liệu của bạn khó mang đi, nên hãy kiểm thử một lần xuất.

### Phân tích

Hãy đánh giá công cụ theo độ phủ nguồn, đối chiếu, và thời gian để trả lời một câu hỏi mới. Quyết định được cung cấp thông tin là áp dụng, giữ hay rời bỏ công cụ nào. Điều cần lưu ý là dữ liệu trình diễn trông sạch, nên hãy kiểm thử với dữ liệu lộn xộn của chính bạn.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Hãy dùng những gì sản phẩm và công cụ hiện có đã cung cấp. Một bảng tính và các báo cáo có sẵn của những công cụ bạn dùng có thể trả lời phần lớn câu hỏi ban đầu. Chống lại một nền tảng dữ liệu cho đến khi các câu hỏi ổn định và công sức thủ công gây đau. Giữ định nghĩa chỉ số được viết ra để một lần chuyển sau này dễ dàng.

**Doanh nghiệp nhỏ.** Ít thước đo và ít hệ thống nghĩa là công cụ đơn giản. Báo cáo có sẵn và một bảng tính thường là đủ. Rủi ro chính là dữ liệu chỉ nằm trong đầu một người và trong các công cụ không có xuất. Hãy chọn sản phẩm bạn có thể rời bỏ, và viết định nghĩa ra.

**Doanh nghiệp lớn.** Nhiều hệ thống, nhiều đội và nhiều định nghĩa lập luận cho một kho dữ liệu được quản trị, một danh mục định nghĩa, và các góc nhìn phân lớp. Quyền sở hữu liên hiệp hoạt động tốt hơn một đội trung tâm xây mọi báo cáo. Hãy chú ý bị khóa, kiểm soát truy cập, quyền riêng tư và đánh giá nhà cung cấp, và cân nhắc một đội nền tảng nhỏ cung cấp đường ống như một dịch vụ.

**Chính phủ và khu vực công.** Quy tắc mua sắm, chủ quyền dữ liệu và khả năng tiếp cận ảnh hưởng đến lựa chọn công cụ. Tiêu chuẩn mở và tính di chuyển được có giá trị vì hợp đồng dài và các chính quyền thay đổi. Hãy lên kế hoạch cho các đánh giá an ninh, lưu giữ hồ sơ và quy tắc công bố công khai, và kiểm tra hướng dẫn hiện hành về lưu trữ và mua sắm (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí gồm giấy phép hoặc đăng ký, hạ tầng, công việc tích hợp và trình kết nối, làm sạch dữ liệu, công việc định nghĩa và danh mục, đào tạo, hỗ trợ, và công sức lặp lại để giữ đường ống khỏe. Các phương án xây mang chi phí kỹ thuật dễ bị khai thấp, và các phương án mua mang phí tăng theo quy mô và chi phí rời bỏ.

Lợi tức đến từ công sức báo cáo tiết kiệm được, câu trả lời nhanh hơn, ít tranh cãi về con số hơn, và quyết định tốt hơn từ dữ liệu đáng tin. Hãy xây hồ sơ từ dữ liệu của chính bạn: số giờ dành cho báo cáo thủ công hiện nay, số phiên bản cạnh tranh của một con số, độ trễ giữa một câu hỏi và một câu trả lời, và chi phí của các công cụ chồng chéo. Tránh trích dẫn các con số của nhà phân tích về lợi tức của phân tích mà không có nguồn truy được và mức liên quan với bối cảnh của bạn. Một phép so sánh công bằng tính chi phí đầy đủ của từng phương án trong ba năm, gồm cả việc thoát (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị, và chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Công cụ trước, câu hỏi sau.** Nền tảng đến, và không ai biết hỏi gì. Hãy viết các thước đo trước.
- **Mua để sửa vấn đề định nghĩa.** Bất đồng về ý nghĩa vẫn còn trong bất kỳ công cụ nào. Hãy giải quyết định nghĩa.
- **Điểm cá nhân có sẵn.** Chúng cám dỗ và làm méo. Hãy tắt chúng và đặt chính sách trước.
- **Không có lối thoát.** Lịch sử và định nghĩa bị kẹt. Hãy kiểm thử xuất và giữ một bản sao.
- **Đường ống một người.** Nó dừng khi người đó rời đi. Hãy ghi tài liệu, kiểm thử và chia sẻ quyền sở hữu.
- **Nhập hai lần.** Mọi người ghi cùng một công việc hai lần, và chất lượng của cả hai giảm. Hãy lấy dữ liệu từ các hệ thống ghi nhận.
- **Kỹ thuật quá mức sớm.** Một nền tảng dữ liệu đến trước khi một góc nhìn nào chứng minh giá trị. Hãy bắt đầu mỏng.
- **Phớt lờ chất lượng dữ liệu.** Biểu đồ sạch trên dữ liệu bẩn gây hiểu lầm thuyết phục hơn. Hãy sửa việc thu thập tại nguồn.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Nguồn cung dữ liệu | Thu thập thủ công; bảng tính | Một số nguồn cấp tự động; script cá nhân | Các nguồn đã thống nhất cấp cho kho chung qua đường ống đã kiểm thử | Độ tin cậy, đối chiếu và độ mới được quản lý và hiển thị | Đường ống liên hiệp với hợp đồng chung giữa các đội và nhà cung cấp; nguồn được cải thiện từ phản hồi |
| Định nghĩa và danh mục | Trong đầu mọi người | Một số được ghi tài liệu | Một danh mục định nghĩa có người sở hữu, có phiên bản và được rà soát | Danh mục dẫn dắt bảng điều khiển; thay đổi được rà soát cùng người dùng | Định nghĩa đồng sở hữu giữa các đội và nhà cung cấp; cho nghỉ hưu khi chúng ngừng cung cấp thông tin cho quyết định |
| Lựa chọn và chi phí | Mua tùy hứng | Công cụ chồng chéo | Tiêu chí được viết ra; thoát được kiểm thử; chi phí đầy đủ được tính | Chi phí mỗi đội được hỗ trợ và công sức thủ công được quản lý | Lựa chọn công cụ được rà soát đều đặn cùng người dùng và thích ứng khi nhu cầu thay đổi |

## Danh sách kiểm tra

- [ ] Các thước đo đã thống nhất và câu hỏi của chúng được viết ra trước khi so sánh công cụ.
- [ ] Công cụ và báo cáo hiện có đã được kiểm kê và thử trước.
- [ ] Chất lượng dữ liệu tại các nguồn chính đã được kiểm tra và những khoảng trống tệ nhất đã được sửa.
- [ ] Tiêu chí lựa chọn được viết ra và gồm phân phối, kiểm soát truy cập và xuất.
- [ ] Một đợt thử có giới hạn thời gian với dữ liệu thật và người dùng thật đã được thực hiện trước mọi cam kết.
- [ ] Các tính năng chấm điểm và xếp hạng cấp cá nhân bị tắt hoặc hạn chế bằng chính sách.
- [ ] Định nghĩa được giữ trong một danh mục di chuyển được bên ngoài bất kỳ công cụ đơn lẻ nào.
- [ ] Đường ống có một người sở hữu, kiểm tra tự động, giám sát và cảnh báo thất bại.
- [ ] Một lần xuất định nghĩa và lịch sử đã được kiểm thử.
- [ ] Chi phí đầy đủ trong ba năm, gồm cả thoát, đã được tính.

## Lời nhắc AI

**Viết yêu cầu từ câu hỏi.**

```text
Here are the questions our audiences ask and the measures we plan to publish:
[paste]. Draft a two-page requirements document for a metrics tool or pipeline.
Cover data sources, freshness, access control, retention, distributions and
percentiles, export and portability, and a list of must-haves versus preferences.
Do not name products. List your assumptions and the points to confirm with the
teams.
```

**Lập kế hoạch một đợt thử công cụ.**

```text
We are comparing [options] for our metrics program. Design a two-week trial using
three of our measures and real data. State what to test, how to score the options
against written criteria, who should take part, how to check access control and
export, and what evidence we will record. Do not claim results about specific
products. List your assumptions and risks.
```

**Rà soát một đường ống dữ liệu.**

```text
Here is a description of how data flows from [sources] to our dashboards: [paste].
Identify points where data could be late, duplicated, overwritten, or lost, and
suggest automated checks for each. Propose a way to reconcile key figures with the
source. Do not invent system behavior. List your assumptions and what you could not
tell from the description.
```

**So sánh chi phí đầy đủ.**

```text
Help me compare the three-year full cost of building, buying, and combining tools
for our metrics program. List the cost categories for each option, including
licenses, infrastructure, integration, data cleaning, training, upkeep, and exit.
Provide a table with blanks for our own figures. Do not supply prices. List your
assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm nguồn dữ liệu và rào chắn cho từng thước đo khi viết yêu cầu.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một bản ghi quyết định công cụ mang định nghĩa, nguồn dữ liệu và rào chắn.

## Điểm chính cần nhớ

- Viết các câu hỏi và thước đo trước, và chọn công cụ để phục vụ chúng.
- Dùng các hệ thống ghi nhận, sửa việc thu thập dữ liệu tại nguồn, và kiểm thử đối chiếu.
- Giữ định nghĩa và dữ liệu di chuyển được, và kiểm thử lối thoát trước khi cam kết.
- Tắt chấm điểm và xếp hạng cấp cá nhân, và đặt chính sách trước khi bật bất kỳ tính năng nào.
- Chạy đường ống như một dịch vụ có người sở hữu, kiểm thử và giám sát.
- Tính chi phí đầy đủ qua nhiều năm, và bắt đầu với con đường mỏng nhất trả lời câu hỏi thật.

## Tài liệu tham khảo và đọc thêm

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
