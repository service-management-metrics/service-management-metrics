# Quản trị và quyền sở hữu chỉ số

**Một chỉ số mà không ai sở hữu, định nghĩa, rà soát hay cho nghỉ hưu sẽ trôi xa khỏi công việc mà nó mô tả, nên hãy trao cho mọi chỉ số được báo cáo một người sở hữu có tên, một định nghĩa bằng văn bản, một ngày rà soát và một lối ra.**

## Tổng quan và động lực

Quản trị chỉ số là tập các quyết định gọn nhẹ về việc ai sở hữu một thước đo, nó có nghĩa là gì, ai được xem nó, nó được rà soát thường xuyên đến đâu và khi nào nó bị gỡ bỏ. Nó là họ hàng gần của [quản trị dữ liệu](https://en.wikipedia.org/wiki/Data_governance), vốn bao quát việc quản lý rộng hơn về tính sẵn có, chất lượng và an ninh của dữ liệu trong một tổ chức. Quản trị chỉ số áp dụng cùng kỷ luật đó cho tập nhỏ, hiển thị cao các con số mà các đội và lãnh đạo dùng để lái công việc dịch vụ và phân phối.

Nhu cầu hiện ra như những ma sát nhỏ, lặp đi lặp lại. Hai đội tính "thời gian giải quyết" khác nhau và mất một buổi họp để đối chiếu số liệu. Một ô trên bảng điều khiển cũ đi nhiều tháng vì người dựng nó đã đổi việc. Một thước đo được thiết kế để giúp một đội chẩn đoán dòng chảy của mình bị một nhóm chỉ đạo nhận làm mục tiêu hiệu suất, đúng tình huống mà chủ đề trước cảnh báo (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số). Không cái nào là vấn đề thống kê. Mỗi cái là một vấn đề quyền sở hữu, và mỗi cái đều rẻ để ngăn ngừa.

Góc nhìn linh hoạt và ITIL khác nhau về điểm nhấn, và sự khác biệt này hữu ích. Trong góc nhìn linh hoạt, một đội sở hữu các thước đo làm việc của mình và thương lượng chúng trong các buổi nhìn lại, thỏa thuận làm việc và rà soát. Góc nhìn ITIL, như được ghi trong ITIL 4 (ấn bản năm 2019 từ AXELOS, nay do PeopleCert xuất bản), coi đo lường và báo cáo là một thực hành quản lý chung và cải tiến liên tục là một thực hành có vai trò, bản ghi và rà soát riêng. ITIL cũng kỳ vọng chủ sở hữu dịch vụ và chủ sở hữu thực hành chịu trách nhiệm về kết quả. Hai góc nhìn khớp với nhau: đội sở hữu góc nhìn làm việc, một chủ sở hữu dịch vụ hoặc thực hành có tên sở hữu góc nhìn được báo cáo, và một sổ đăng ký nhỏ nối hai bên.

Một vài thuật ngữ dùng ở đây. **Người sở hữu chỉ số** là một người chịu trách nhiệm duy nhất về định nghĩa, chất lượng dữ liệu và việc sử dụng của một chỉ số. **Sổ đăng ký chỉ số** là một danh mục ngắn các chỉ số đang dùng, kèm người sở hữu, định nghĩa, nguồn dữ liệu, rào chắn và ngày rà soát của từng cái. **Hiến chương chỉ số** là một bản tuyên bố một trang về mục đích, phạm vi, vai trò và nhịp rà soát cho một tập chỉ số. **[Nguồn sự thật duy nhất](https://en.wikipedia.org/wiki/Single_source_of_truth)** là hệ thống hoặc tập dữ liệu có thẩm quyền duy nhất mà từ đó một số liệu nhất định được tính. **[Người quản lý dữ liệu](https://en.wikipedia.org/wiki/Data_steward)** chăm lo chất lượng và định nghĩa của một miền dữ liệu, và trong một tổ chức nhỏ, người sở hữu chỉ số thường đóng vai này. **[Ma trận RACI](https://en.wikipedia.org/wiki/RACI_matrix)** ghi lại ai chịu trách nhiệm thực hiện, ai chịu trách nhiệm giải trình, ai được tham vấn và ai được thông báo cho mỗi hoạt động. **[Từ điển dữ liệu](https://en.wikipedia.org/wiki/Data_dictionary)** là một danh mục các phần tử dữ liệu và ý nghĩa của chúng, đó là điều mà cột định nghĩa của sổ đăng ký trở thành ở quy mô lớn hơn. **[Nguyên tắc đặc quyền tối thiểu](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** nói rằng con người và hệ thống có quyền truy cập họ cần cho nhiệm vụ của mình và không hơn. **[Cải tiến liên tục](https://en.wikipedia.org/wiki/Continual_improvement_process)** là nỗ lực không ngừng nhằm cải thiện dịch vụ, thực hành và cách làm việc, và nó vừa là một thực hành ITIL vừa là một thói quen linh hoạt. SLA nghĩa là thỏa thuận mức dịch vụ, và ITSM nghĩa là quản lý dịch vụ CNTT.

## Nguyên tắc chính

- **Mọi chỉ số được báo cáo có một người sở hữu có tên.** Một vai trò hoặc một người, không bao giờ là "cả đội". Quyền sở hữu chung khiến định nghĩa không được duy trì.
- **Một định nghĩa, một nguồn sự thật.** Viết định nghĩa một lần, gồm cả nơi đồng hồ bắt đầu và dừng, và tính số liệu ở một nơi.
- **Quản trị tương xứng với hệ quả.** Một chỉ số mà đội dùng để gỡ lỗi bảng của chính mình cần một câu. Một chỉ số trong hợp đồng, báo cáo công khai hay hồ sơ hội đồng cần một mục trong hiến chương, rà soát và dấu vết kiểm toán.
- **Quyền truy cập theo mục đích.** Quyết định ai thấy góc nhìn nào và vì sao. Khán giả mặc định cho góc nhìn làm việc của một đội là chính đội.
- **Rà soát theo nhịp và cho nghỉ hưu theo bằng chứng.** Chỉ số có vòng đời. Hãy áp dụng, rà soát, sửa và cho nghỉ hưu chúng một cách có chủ ý.
- **Viết ra và giữ nhỏ.** Một sổ đăng ký vừa một trang thì được đọc. Một cuốn sổ tay chính sách thì không.
- **Quản trị phục vụ những người được đo.** Những người sở hữu một chỉ số gồm cả những người có công việc mà nó mô tả.

## Định nghĩa chỉ số

Đây là các thước đo sức khỏe của một thực hành chỉ số, không phải của một dịch vụ. Chúng cố ý ít và rẻ để thu thập từ chính sổ đăng ký. Mỗi kỳ là một quý lịch trừ khi có nêu khác.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ quyền sở hữu | Tỷ lệ các chỉ số được báo cáo có một người sở hữu có tên, còn hiệu lực | số chỉ số được báo cáo có người sở hữu vẫn giữ vai trò vào cuối kỳ / số chỉ số được báo cáo vào cuối kỳ; loại trừ các chỉ số chỉ dùng bên trong bảng riêng của một đội | phần trăm | Sổ đăng ký chỉ số | Đo lường và báo cáo | Thỏa thuận làm việc | Hằng quý |
| Độ cập nhật của định nghĩa | Tỷ lệ các chỉ số được báo cáo có định nghĩa được rà soát trong khoảng thời gian đã thỏa thuận | số chỉ số có ngày rà soát trong 6 tháng qua / số chỉ số được báo cáo; đồng hồ bắt đầu từ lần rà soát cuối được ghi và dừng ở cuối kỳ | phần trăm | Nhật ký thay đổi của sổ đăng ký chỉ số | Đo lường và báo cáo; cải tiến liên tục | Hành động từ buổi nhìn lại | Hằng quý |
| Độ tuân thủ nguồn | Tỷ lệ các chỉ số được báo cáo được tính từ đúng một nguồn có tên | số chỉ số có một nguồn có thẩm quyền và không có phép tính song song nào được biết / số chỉ số được báo cáo; các phép tính song song được tìm ra bằng cách lấy mẫu bảng điều khiển và báo cáo | phần trăm | Sổ đăng ký cùng một mẫu bảng điều khiển và báo cáo | Đo lường và báo cáo; quản lý mức dịch vụ | Định nghĩa hoàn thành cho một chỉ số | Hằng quý |
| Tỷ lệ nghỉ hưu | Số chỉ số được cho nghỉ hưu hoặc gộp lại trong một kỳ so với số chỉ số được báo cáo | số chỉ số nghỉ hưu hoặc gộp trong kỳ / số chỉ số được báo cáo ở đầu kỳ; một chỉ số chuyển sang góc nhìn riêng của đội được tính là đã nghỉ hưu khỏi tập được báo cáo | phần trăm | Nhật ký thay đổi của sổ đăng ký chỉ số | Cải tiến liên tục | Hành động từ buổi nhìn lại | Hằng quý |
| Độ cập nhật của rà soát truy cập | Tỷ lệ các góc nhìn chỉ số bị hạn chế có danh sách khán giả được rà soát trong khoảng thời gian | số góc nhìn hạn chế có rà soát khán giả trong 6 tháng qua / số góc nhìn hạn chế; loại trừ các góc nhìn mở cho toàn tổ chức | phần trăm | Danh sách truy cập hoặc bản xuất quyền của công cụ BI | Quản lý an ninh thông tin; đo lường và báo cáo | Thỏa thuận làm việc | Nửa năm một lần |
| Liên kết quyết định | Tỷ lệ các chỉ số được báo cáo liên kết trong sổ đăng ký với một quyết định mà chúng cung cấp thông tin | số chỉ số có quyết định hoặc câu hỏi được ghi lại / số chỉ số được báo cáo; một liên kết chỉ được tính nếu quyết định được đưa ra trong 12 tháng qua | phần trăm | Sổ đăng ký chỉ số và nhật ký quyết định | Cải tiến liên tục | Rà soát cùng các bên liên quan và kết quả cải tiến | Hằng quý |

Không cái nào trong số này là mục tiêu. Một sổ đăng ký có thể cho thấy độ phủ quyền sở hữu đầy đủ mà vẫn mô tả những chỉ số vô dụng, nên hãy đọc bảng này cùng với bảng lợi dụng bên dưới.

## Khuyến nghị

### Thiết lập quyền sở hữu và sổ đăng ký

**1. Giữ một sổ đăng ký chỉ số một trang.** Liệt kê từng chỉ số được báo cáo kèm câu hỏi, người sở hữu, định nghĩa, công thức và đồng hồ, đơn vị, nguồn dữ liệu, khán giả, rào chắn, ngày rà soát gần nhất và ngày rà soát dự kiến. Một bảng tính hoặc một tệp Markdown trong kiểm soát phiên bản là đủ. Sổ đăng ký là sản phẩm hữu ích nhất trong chủ đề này, và chủ đề trước đã giả định nó tồn tại (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

**2. Nêu tên một người sở hữu cho mỗi chỉ số, và ghi lại vai trò.** Người sở hữu chịu trách nhiệm về định nghĩa, chất lượng dữ liệu và việc giải thích các kết quả kỳ lạ. Hãy chọn người gần dữ liệu và các quyết định, thường là chủ sở hữu dịch vụ, chủ sở hữu thực hành hoặc trưởng nhóm. Ghi lại cả vai trò lẫn người, để mục vẫn tồn tại khi đổi việc và một chỗ trống hiện ra trong số liệu độ phủ.

**3. Tách việc sở hữu một chỉ số khỏi việc sở hữu công việc mà nó đo.** Người sở hữu chỉ số giải thích và duy trì nó, nhưng đội làm công việc vẫn chịu trách nhiệm về kết quả. Điều này tránh hai cái bẫy: người sở hữu bị đổ lỗi cho một con số họ không thể tác động, và đội chối bỏ một con số vì người khác duy trì nó. Một bảng RACI ngắn trong hiến chương làm điều này rõ ràng.

**4. Viết định nghĩa cùng các đồng hồ của nó, một lần.** Sổ đăng ký giữ định nghĩa có thẩm quyền: cái gì được đếm, đồng hồ bắt đầu và dừng ở đâu, trạng thái nào làm nó tạm dừng và cái gì bị loại trừ. Liên kết đến nó từ mọi bảng điều khiển hiển thị chỉ số. Khi một định nghĩa cần đổi, hãy đổi nó trong sổ đăng ký trước và đánh dấu thay đổi trên biểu đồ (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ, về cách cho thấy một điểm đứt gãy trong xu hướng).

**5. Tính mỗi chỉ số ở một nơi.** Chọn nguồn có thẩm quyền, như công cụ ITSM, trình theo dõi vấn đề hay hệ thống giám sát, và nói rõ trong sổ đăng ký. Các bảng tính song song tái tạo số liệu nên được cho nghỉ hưu hoặc đổi tên để không ai nhầm chúng với con số chính thức. Nguồn gốc dữ liệu và công cụ thuộc về chủ đề kế tiếp (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

### Đặt nhịp và kiểm soát thay đổi

**6. Rà soát định nghĩa theo lịch tương xứng với hệ quả.** Với các chỉ số trong hợp đồng, báo cáo theo quy định hay hồ sơ điều hành, hãy rà soát hai lần một năm và khi có bất kỳ thay đổi nào trong quy trình bên dưới. Với các thước đo làm việc cấp đội, buổi nhìn lại chính là buổi rà soát. Mỗi buổi rà soát hỏi ba câu: định nghĩa còn chính xác không, dữ liệu còn vững không, và có ai dùng con số để quyết định điều gì không?

**7. Coi thay đổi định nghĩa như thay đổi đối với một dịch vụ.** Ghi lại ai yêu cầu thay đổi, vì sao, ai được tham vấn và ngày có hiệu lực. Một thay đổi nhỏ trong quy trình trạng thái có thể âm thầm dịch chuyển một thước đo thời gian đi một lượng lớn. Kiểm soát thay đổi gọn nhẹ cho định nghĩa mượn ý tưởng từ hỗ trợ thay đổi mà không có nghi thức (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi, cho đối ứng về thay đổi dịch vụ).

**8. Gắn rà soát vào cải tiến liên tục.** Các buổi rà soát chỉ số nên tạo ra công việc cải tiến, hoặc một quyết định tường minh là không hành động. ITIL coi cải tiến liên tục là một thực hành có sổ đăng ký các cơ hội cải tiến, và các đội linh hoạt đạt hiệu quả tương tự qua các hành động của buổi nhìn lại. Nếu một buổi rà soát kết thúc mà không có hành động và không có nghỉ hưu, hãy hỏi chỉ số có đang làm việc gì không (xem chủ đề 9.5, Chỉ số cải tiến liên tục).

**9. Cho chỉ số nghỉ hưu một cách có chủ ý.** Định nghĩa một phép thử nghỉ hưu, ví dụ "không được trích dẫn trong quyết định nào qua hai chu kỳ rà soát", và áp dụng nó. Lưu trữ định nghĩa và các giá trị cuối, nói rõ cái gì thay thế chỉ số nếu có, và thông báo cho khán giả. Một nhật ký nghỉ hưu là bằng chứng cho kiểm toán viên và là sự nhẹ nhõm cho những người đã duy trì dữ liệu bằng tay.

### Kiểm soát góc nhìn và quyền truy cập

**10. Quyết định khán giả cho mỗi góc nhìn.** Hầu hết chỉ số có một góc nhìn làm việc cho đội, một góc nhìn được báo cáo cho chủ sở hữu dịch vụ hoặc chương trình, và đôi khi một góc nhìn bên ngoài cho khách hàng, cơ quan quản lý hay nhà cung cấp. Ghi lại khán giả nào nhận góc nhìn nào và vì sao. Lấy nguyên tắc đặc quyền tối thiểu làm kim chỉ nam, hãy hạn chế các góc nhìn chứa dữ liệu cá nhân, chi tiết bảo mật hay số liệu nhà cung cấp nhạy cảm về thương mại, và để phần còn lại mở để minh bạch là mặc định.

**11. Giữ dữ liệu cấp cá nhân ra khỏi báo cáo.** Quy tắc cứng của cuốn sách này là các chỉ số mô tả đội nhóm, dịch vụ và hệ thống, không mô tả con người. Quản trị củng cố điều này bằng cách đặt mức chi tiết được báo cáo, ví dụ đội và dịch vụ, và bằng cách hạn chế mọi bản trích xuất cấp cá nhân cho người quản lý dữ liệu. Nếu một yêu cầu phân tích theo từng cá nhân đến, hãy ghi lại, hỏi nó phục vụ quyết định nào, và đề xuất một phương án thay thế cấp đội hoặc cấp hệ thống (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ quyền sở hữu | Nêu tên một người quản lý hoặc một danh sách thư làm người sở hữu để đạt 100 phần trăm, mà không có ai có thể giải thích hay thay đổi chỉ số | Yêu cầu mỗi người sở hữu giải thích một dịch chuyển gần đây của con số; theo dõi các câu hỏi bị bỏ không trả lời quá một tuần |
| Độ cập nhật của định nghĩa | Chạm vào ngày rà soát mà không đọc định nghĩa | Lấy mẫu ba mục mỗi quý và so sánh định nghĩa bằng văn bản với cấu hình thực tế của công cụ |
| Độ tuân thủ nguồn | Tuyên bố một nguồn là có thẩm quyền trong khi các bảng tính vẫn lưu hành và mâu thuẫn nhau | Đếm số liệu phân biệt cho cùng một chỉ số tìm thấy trong một mẫu báo cáo; đối chiếu các khác biệt trong buổi rà soát |
| Tỷ lệ nghỉ hưu | Cho nghỉ hưu các chỉ số tầm thường hoặc không dùng để trông có kỷ luật, hoặc đổi tên chỉ số để nó được tính là mới | Rà soát nhật ký nghỉ hưu xem cái gì bị gỡ; theo dõi tổng số chỉ số được báo cáo và số liệu liên kết quyết định bên cạnh |
| Độ cập nhật của rà soát truy cập | Phê duyệt danh sách khán giả hiện có mà không đọc nó | So sánh danh sách với thành viên và vai trò hiện tại của đội; báo cáo số trường hợp gỡ bỏ tìm thấy |
| Liên kết quyết định | Viết một quyết định mơ hồ như "cải thiện dịch vụ" để thỏa mãn trường nhập | Yêu cầu một quyết định hoặc câu hỏi có ngày, và lấy mẫu nhật ký quyết định xem chỉ số có thực sự được tham khảo không |

Một kết quả đọc lành mạnh là một sổ đăng ký có thay đổi. Các mục có người sở hữu trả lời câu hỏi, có ngày rà soát rơi vào sáu tháng qua, có nhật ký nghỉ hưu kèm lý do, và có một danh sách ngắn các chỉ số vẫn được cần vì mọi người nêu được quyết định mà chúng cung cấp thông tin. Một sổ đăng ký có mọi trường đều đầy và không bao giờ thay đổi là dấu hiệu cảnh báo.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Văn phòng chỉ số trung tâm | Định nghĩa nhất quán và công cụ dùng chung; kiểm toán dễ hơn | Chậm, xa công việc, và bị cám dỗ chuẩn hóa các thước đo lẽ ra nên khác nhau giữa các đội |
| Quyền sở hữu phân tán với sổ đăng ký chung | Người sở hữu ngồi gần dữ liệu; sổ đăng ký giữ một mức tối thiểu chung | Cần sự khuyến khích đều đặn để tránh chất lượng trôi giữa các đội |
| Chỉ các thước đo do đội sở hữu | Nhanh và khớp với công việc | Định nghĩa phân kỳ; các bản tổng hợp trở nên không đáng tin; tri thức ra đi cùng con người |
| Truy cập mở theo mặc định | Xây dựng lòng tin và sự hiểu biết chung | Nguy cơ để lộ chi tiết nhạy cảm hoặc cấp cá nhân |
| Truy cập hạn chế | Bảo vệ dữ liệu nhạy cảm | Giấu bối cảnh khỏi những người có thể giúp, và mời gọi nghi ngờ |

Sự cân bằng là tập trung hóa lớp mỏng cần thống nhất, tức sổ đăng ký, các định nghĩa chung và quy tắc truy cập, và phân tán mọi thứ còn lại.

## Câu hỏi để thảo luận với đội nhóm

**1. Ai sẽ trả lời nếu con số được trích dẫn nhiều nhất trên bảng điều khiển của chúng ta ngày mai trông sai?**
Hãy yêu cầu nhóm nêu tên một người, không phải một nhóm. Nếu có nhiều cái tên xuất hiện, hoặc không có cái nào, chỉ số đó trên thực tế không có người sở hữu. Người điều phối nên ghi lại chỉ số, người sở hữu ứng viên, và những gì người sở hữu cần để làm việc, như quyền đọc dữ liệu hoặc thời gian trong buổi rà soát. Kết thúc bằng việc thống nhất ai sẽ xác nhận người sở hữu và ghi vai trò vào sổ đăng ký.

**2. Hiện nay có hai phiên bản của cùng một số liệu ở đâu?**
Hãy tìm các báo cáo cho thấy cùng một chỉ số với giá trị khác nhau: một slide hằng tuần so với bảng điều khiển trực tiếp, hoặc một báo cáo nhà cung cấp so với báo cáo nội bộ. Với mỗi cái, hỏi khác biệt phát sinh từ đâu, như phạm vi, đồng hồ hay các trường hợp loại trừ. Quyết định nguồn nào có thẩm quyền và điều gì xảy ra với phiên bản kia. Hãy chờ cuộc trò chuyện làm lộ ra những định nghĩa làm việc khác nhau của những từ mà ai cũng cho là chung.

**3. Nếu phải cho một chỉ số nghỉ hưu, chúng ta sẽ cho chỉ số nào nghỉ hưu trong quý này?**
Hãy bắt đầu với chỉ số mà gần đây không ai trích dẫn trong quyết định. Hỏi điều gì sẽ xảy ra nếu nó biến mất và ai sẽ để ý. Nếu câu trả lời là "không ai", hãy chuyển nó ra khỏi tập được báo cáo trong một thời gian thử. Người điều phối nên coi việc nghỉ hưu là bình thường và lành mạnh, và ghi kết quả vào nhật ký nghỉ hưu.

**4. Ai thấy các chỉ số nào của chúng ta, và điều đó có chủ ý không?**
Vẽ một lưới đơn giản gồm các chỉ số theo khán giả: đội, chủ sở hữu dịch vụ, lãnh đạo, khách hàng, nhà cung cấp, cơ quan quản lý. Đánh dấu nơi quyền truy cập là một quyết định và nơi nó chỉ tình cờ xảy ra. Tìm bất kỳ góc nhìn nào có thể dùng để so sánh cá nhân. Thống nhất một thay đổi cho ít nhất một danh sách khán giả, và ai sẽ rà soát nó lần tới.

**5. Làm sao chúng ta đổi một định nghĩa mà không phá vỡ xu hướng?**
Hãy đi qua một thay đổi gần đây đối với quy trình trạng thái hoặc thang mức ưu tiên. Hỏi ai được thông báo, biểu đồ có được chú thích không, và có ai so sánh giá trị cũ và mới không. Soạn một mục thay đổi gọn nhẹ mà đội thực sự sẽ điền. Thống nhất ai phê duyệt thay đổi đối với các chỉ số xuất hiện trong hợp đồng hoặc báo cáo bên ngoài.

**6. Chúng ta sẽ ngừng làm gì nếu quản trị trở thành gánh nặng?**
Quản trị có thể biến thành một nghi lễ. Hỏi những phần nào của cách tiếp cận hiện tại mọi người sẽ bỏ qua nếu không ai kiểm tra, và vì sao. Hãy coi các câu trả lời là phản hồi thiết kế chứ không phải sự kháng cự. Người điều phối nên tìm các bước trùng lặp nhau, các trường không ai đọc và các buổi rà soát không bao giờ tạo ra quyết định.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu các thước đo làm việc như tuổi hạng mục công việc và thời gian chu trình, và nên thống nhất định nghĩa trong các thỏa thuận làm việc. Khi một chỉ số đi lên một báo cáo danh mục, đội nên biết người sở hữu, định nghĩa và khán giả. Các đội nhận được nhiều giá trị nhất từ một mục sổ đăng ký ngắn cho mỗi thước đo được báo cáo, và từ quyền thách thức một định nghĩa không còn khớp với cách công việc chảy (xem chủ đề 2.1, Các thước đo dòng chảy).

### Đội dịch vụ và vận hành

Các đội dịch vụ và vận hành mang các chỉ số xuất hiện trong SLA và các buổi rà soát vận hành, nên định nghĩa, đồng hồ và các trường hợp loại trừ có trọng lượng hợp đồng. Người sở hữu ở đây thường là chủ sở hữu dịch vụ và chủ sở hữu thực hành. Họ nên giữ dấu vết bằng chứng cho các thay đổi định nghĩa, đối chiếu số liệu được báo cáo với công cụ ITSM thường xuyên, và là người đầu tiên cho nghỉ hưu một thước đo đã ngừng cung cấp thông tin cho các quyết định vận hành (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

### Lãnh đạo và quản trị

Lãnh đạo đặt ra các điều kiện: ai sở hữu chỉ số, góc nhìn nào đến hồ sơ điều hành, và các con số được dùng ra sao. Họ nên yêu cầu sổ đăng ký và nhật ký nghỉ hưu, đọc các định nghĩa đứng sau số liệu tiêu đề, và chống lại các yêu cầu về bảng xếp hạng cấp cá nhân. Các cơ quan quản trị cần một mục thường trực nhỏ rà soát sổ đăng ký và ghi lại quyết định, phù hợp với kỳ vọng của ISO/IEC 20000-1 đối với hệ thống quản lý dịch vụ (theo ấn bản 2018) mà không biến buổi rà soát thành một bài tập tuân thủ (xem chủ đề 8.3, Chỉ số tuân thủ và kiểm toán).

### Khách hàng và người dùng

Khách hàng và người dùng hiếm khi thấy sổ đăng ký, nhưng họ cảm nhận sự vắng mặt của nó khi một số liệu trong buổi rà soát dịch vụ khác với trải nghiệm của họ. Nơi một chỉ số xuất hiện trong báo cáo hướng tới khách hàng hoặc một SLA, định nghĩa nên có sẵn bằng ngôn ngữ giản dị, gồm cả điều bị loại trừ. Khách hàng nên có một lối để chất vấn một số liệu, và người sở hữu nên trả lời (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một bàn dịch vụ, ba đội sản phẩm và một nhóm vận hành. Mọi con số dưới đây chỉ mang tính minh họa.

Buổi rà soát dịch vụ hằng tháng cho thấy thời gian giải quyết sự cố trung vị là 5,1 giờ. Bảng điều khiển riêng của các đội sản phẩm, dựng từ cùng công cụ ITSM, cho thấy 6,4 giờ. Hai số liệu đã lưu hành một năm. Một chủ sở hữu dịch vụ mới hỏi ai sở hữu chỉ số và nhận được ba câu trả lời khác nhau.

Người sở hữu, cùng các trưởng nhóm và người quản lý dữ liệu, dành hai buổi cho một sổ đăng ký đầu tiên gồm 14 chỉ số được báo cáo. Trong số đó, 5 chỉ số không có người sở hữu và 4 chỉ số có hai nguồn. Thời gian giải quyết là một trong những chỉ số hai nguồn. Khác biệt truy về một trạng thái tạm dừng: buổi rà soát dịch vụ loại trừ thời gian ở "chờ khách hàng", còn bảng điều khiển của đội thì không. Nhóm thống nhất một định nghĩa, nêu tên chủ sở hữu dịch vụ làm người sở hữu chỉ số, và công bố cả hai giá trị trên cùng một trang trong một quý, gắn nhãn theo định nghĩa, để không ai mất lịch sử. Họ chú thích biểu đồ tại nơi định nghĩa thay đổi.

Ở buổi rà soát hằng quý đầu tiên, nhóm áp dụng phép thử nghỉ hưu và gỡ 3 trong 14 chỉ số, gồm một biểu đồ đếm phiếu hằng tháng mà không quyết định gần đây nào trích dẫn. Họ cũng hạn chế góc nhìn phân tích thời gian giải quyết theo từng nhân viên phân tích, giữ người quản lý dữ liệu là người duy nhất nắm nó, và đề xuất một phân tích cấp đội thay thế.

Một rủi ro lợi dụng xuất hiện ở buổi rà soát thứ hai. Độ phủ quyền sở hữu đạt 100 phần trăm, nhưng một mẫu cho thấy hai trong số những người sở hữu là một danh sách thư và một trưởng phòng chưa bao giờ mở dữ liệu. Nhóm thay họ bằng các chủ sở hữu dịch vụ có tên và thêm câu hỏi rào chắn vào buổi rà soát: "Người sở hữu có giải thích được lần dịch chuyển gần nhất của con số này không?" Độ phủ giảm xuống 86 phần trăm trong một quý, điều mà nhóm ghi nhận là một kết quả trung thực. Quyết định được ghi lại là giữ nguyên mục tiêu về độ phủ cho đến khi rào chắn đã chạy được hai chu kỳ.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy coi sổ đăng ký chỉ số như một tài liệu sống mà đội cập nhật khi học được điều gì đó, không phải một bài tập thiết kế một lần. Một thói quen thực tế là một buổi rà soát định kỳ ngắn, nơi người sở hữu chỉ số, đội và một bên liên quan thống nhất chỉ số nào ở lại, thay đổi hay nghỉ hưu. Điều cần lưu ý là những thay đổi nhỏ thường xuyên có thể phá vỡ xu hướng, nên hãy ghi lại từng thay đổi kèm lý do.

### AI

Các chỉ số về hệ thống AI cần một người sở hữu giống như chỉ số dịch vụ, và người sở hữu cần thẩm quyền tạm dừng hệ thống khi các con số cho thấy nó đang gây hại cho người dùng. Hãy ghi trong sổ đăng ký những chỉ số nào mô tả công việc có AI hỗ trợ và ai rà soát cặp chất lượng của chúng. Điều cần lưu ý là bảng điều khiển AI do nhà cung cấp đưa ra có định nghĩa riêng, nên hãy đăng ký chúng với định nghĩa của nhà cung cấp được trích dẫn và kiểm tra.

### Tự động hóa

Hãy tự động hóa việc giữ vệ sinh sổ đăng ký: đánh dấu các chỉ số không có người sở hữu, không có ngày rà soát hoặc không được trích dẫn gần đây trong quyết định, và cảnh báo người sở hữu. Điều cần lưu ý là một lời nhắc tự động mà không ai trả lời là nhiễu, nên hãy đo xem bao nhiêu cờ dẫn đến hành động và cho nghỉ hưu những cờ không dẫn đến.

### Phân tích

Hãy coi quyền truy cập dữ liệu chỉ số cũng là một câu hỏi quản trị: ai xem được dữ liệu cấp đội, ai xem được phiếu thô, và dữ liệu được giữ bao lâu. Quyết định mà sổ đăng ký cung cấp thông tin là giữ, đổi hay cho nghỉ hưu cái gì. Điều cần lưu ý là phân tích hành vi của con người có thể vượt sang giám sát, nên hãy giữ các chỉ số ở cấp đội và dịch vụ và kiểm tra các quy tắc riêng tư áp dụng cho bạn.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Người sáng lập hoặc kỹ sư trưởng thường mặc định sở hữu mọi chỉ số. Rủi ro là các định nghĩa nằm trong một cái đầu. Hãy giữ một sổ đăng ký năm đến tám chỉ số trong một tài liệu chung, nêu tên một người sở hữu cho mỗi chỉ số, và viết định nghĩa vào ngày một chỉ số lần đầu xuất hiện trong bản cập nhật cho nhà đầu tư hay khách hàng.

**Doanh nghiệp nhỏ.** Người điều hành CNTT thường là người sở hữu, người quản lý dữ liệu và người đọc báo cáo. Hãy giữ quản trị trong một trang, rà soát hai lần một năm, và đặc biệt cẩn thận khi một báo cáo do nhà cung cấp đưa ra định nghĩa một chỉ số khác với của bạn. Nêu tên ai trong doanh nghiệp sở hữu từng số liệu hướng tới khách hàng.

**Doanh nghiệp lớn.** Quy mô làm lớp chung trở nên thiết yếu. Hãy dùng một sổ đăng ký có quy trình, một hội đồng gọn nhẹ họp hằng quý, và một vai trò người quản lý dữ liệu cho mỗi miền chính. Giữ quyền tự chủ của đội đối với các thước đo làm việc và đề phòng việc chuẩn hóa các chỉ số lẽ ra nên khác nhau giữa các loại dịch vụ. Căn chỉnh với quản trị dữ liệu đã có trong tổ chức tiết kiệm công sức.

**Chính phủ và khu vực công.** Báo cáo theo luật, kiểm toán và mua sắm khiến định nghĩa bằng văn bản và bản ghi thay đổi trở thành nghĩa vụ. Hãy coi sổ đăng ký như một sản phẩm kiểm toán, và giữ một đường rõ ràng từ mỗi số liệu được công bố đến người sở hữu và nguồn của nó. Các quyết định truy cập thường liên quan đến rà soát pháp lý và riêng tư, nên hãy ghi lại cơ sở cho mỗi góc nhìn bị hạn chế (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí khiêm tốn và chủ yếu là thời gian. Hãy chờ vài giờ để dựng sổ đăng ký đầu tiên, một hoặc hai giờ mỗi quý cho buổi rà soát, và một ít công sức từ người quản lý dữ liệu để giải quyết các nguồn mâu thuẫn. Chi phí công cụ thấp vì một bảng tính hoặc một tệp được kiểm soát phiên bản là đủ để bắt đầu.

Lợi tức chủ yếu là lãng phí tránh được. Những cuộc họp dành để đối chiếu số liệu biến mất, kiểm toán thấy một dấu vết rõ ràng, và việc đưa một chủ sở hữu dịch vụ mới vào làm nhanh hơn vì các định nghĩa đã được viết ra. Quyết định tốt hơn vì chúng dựa trên những con số có cùng ý nghĩa mỗi tháng. Đừng nêu một tỷ lệ phần trăm cho các lợi ích này khi không có dữ liệu của riêng bạn. Nếu bạn cần số liệu cho một hồ sơ kinh doanh, hãy đếm số giờ đã dành quý trước để đối chiếu các con số mâu thuẫn và số chỉ số không có người sở hữu được ghi lại, rồi đếm lại sau hai chu kỳ rà soát.

## Phản mẫu và cạm bẫy

- **Quyền sở hữu theo ủy ban.** Một nhóm sở hữu chỉ số và không ai trả lời câu hỏi. Hãy nêu tên một vai trò chịu trách nhiệm và một người thay thế.
- **Sổ đăng ký như nghĩa địa.** Nó được dựng một lần và không bao giờ được đụng tới. Hãy đặt ngày rà soát vào lịch và hiển thị ngày đó trên mọi bảng điều khiển.
- **Chuẩn hóa mọi thứ.** Một định nghĩa áp đặt lên các đội có công việc khác nhau tạo ra các con số vô nghĩa ở mọi nơi. Chỉ chia sẻ lớp cần thống nhất.
- **Đổi định nghĩa trong im lặng.** Xu hướng bị đứt và lòng tin theo sau. Hãy ghi lại mọi thay đổi cùng lý do và chú thích biểu đồ.
- **Quản trị không có nghỉ hưu.** Tập chỉ có lớn lên và sự chú ý mỏng đi. Hãy áp dụng một phép thử nghỉ hưu ở mỗi buổi rà soát.
- **Bí mật theo mặc định.** Giấu góc nhìn làm việc khỏi những người được đo sinh ra nghi ngờ. Chỉ hạn chế những gì mang rủi ro thật và giải thích vì sao.
- **Truy cập mở vào dữ liệu cấp cá nhân.** Một bản trích xuất có thể trở thành bảng xếp hạng trong vài ngày. Hãy đặt mức chi tiết được báo cáo ở đội và dịch vụ, và giữ mọi dữ liệu cấp cá nhân dưới quyền người quản lý dữ liệu.
- **Kịch trường tuân thủ.** Các trường được điền để thỏa mãn danh sách kiểm tra. Hãy lấy mẫu các mục để kiểm tra tính thật, và yêu cầu người sở hữu giải thích các dịch chuyển gần đây.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Quyền sở hữu và sổ đăng ký | Người sở hữu không rõ; chỉ số nằm trong các bảng tính cá nhân | Một số đội giữ danh sách kèm người sở hữu | Một sổ đăng ký cho mọi chỉ số được báo cáo, mỗi chỉ số có người sở hữu và vai trò có tên | Độ phủ và độ cập nhật được theo dõi xu hướng; khoảng trống dẫn đến các bản sửa có nguồn lực | Sổ đăng ký được chia sẻ với nhà cung cấp và khách hàng nơi số liệu vượt qua ranh giới |
| Định nghĩa và kiểm soát thay đổi | Định nghĩa khác nhau tùy người | Được viết cho một số chỉ số hợp đồng | Định nghĩa bằng văn bản kèm đồng hồ và nhật ký thay đổi cho mọi chỉ số được báo cáo | Các thay đổi được rà soát về tác động lên xu hướng trước khi phát hành | Định nghĩa được sửa chung giữa các đội và nhà cung cấp khi chúng không còn cung cấp thông tin cho quyết định |
| Rà soát và nghỉ hưu | Chỉ số được thêm, không bao giờ được gỡ | Thỉnh thoảng dọn dẹp | Nhịp rà soát và phép thử nghỉ hưu được viết ra | Kết quả rà soát được theo dõi như công việc cải tiến | Nghỉ hưu và làm mới là thường lệ, được thúc đẩy bởi bằng chứng từ người dùng và các đội |
| Truy cập và khán giả | Truy cập tình cờ | Góc nhìn hạn chế cho dữ liệu nhạy cảm | Khán giả được liệt kê cho từng chỉ số, kèm lý do | Truy cập được rà soát theo nhịp; dữ liệu cấp cá nhân do người quản lý dữ liệu nắm | Khán giả được thiết kế cùng những người được đo và cùng khách hàng |

## Danh sách kiểm tra

- [ ] Một sổ đăng ký chỉ số tồn tại và liệt kê mọi chỉ số được báo cáo.
- [ ] Mọi chỉ số được báo cáo có một người sở hữu có tên và một vai trò được ghi lại.
- [ ] Mọi chỉ số được báo cáo có một định nghĩa bằng văn bản với quy tắc bắt đầu, dừng và loại trừ.
- [ ] Mỗi chỉ số có một nguồn có thẩm quyền được nêu trong sổ đăng ký.
- [ ] Một ngày rà soát và một khoảng cách được ghi lại cho mỗi chỉ số.
- [ ] Các thay đổi định nghĩa được ghi lại kèm lý do và được đánh dấu trên biểu đồ.
- [ ] Một phép thử nghỉ hưu được viết ra và được áp dụng ở mỗi buổi rà soát.
- [ ] Khán giả của mỗi góc nhìn được ghi lại, kèm lý do cho mọi hạn chế.
- [ ] Không góc nhìn được báo cáo nào xếp hạng cá nhân, và dữ liệu cấp cá nhân nằm với người quản lý dữ liệu.
- [ ] Sổ đăng ký đã được lấy mẫu để kiểm tra tính thật trong quý vừa qua.

## Lời nhắc AI

**Soạn một hiến chương chỉ số cho một tập chỉ số.**

```text
Draft a one-page metrics charter for [team or service name], which provides
[type of service or delivery work]. The metric set is: [list of metrics]. The
audiences are [audiences]. Include purpose, explicit non-goals, a RACI table for
owner, data steward, and reviewers using these roles: [roles], review cadence,
and a retirement test. Base the draft only on what I have written. Do not invent
metrics, targets, or benchmark values. List your assumptions and the questions I
should answer to complete the charter.
```

**Tìm xung đột giữa hai phiên bản của một chỉ số.**

```text
Here are two descriptions of what should be the same metric, [metric name].
Version A, from [source A]: [description and formula]. Version B, from
[source B]: [description and formula]. Compare them on what is counted, where
the clock starts and stops, which states pause it, and what is excluded.
Explain which differences could account for the gap between [value A] and
[value B], and suggest questions for the owner. Do not guess at values I have not
given. List your assumptions and what you could not determine.
```

**Rà soát một sổ đăng ký chỉ số để tìm khoảng trống.**

```text
Below is an extract of our metric register with fields [list fields]. Review it
for missing owners, entries with no review date or one older than [interval],
metrics with more than one source, metrics with no linked decision, and views
that could expose person-level data. Report patterns by metric, not by
individual. Do not invent facts about our metrics. Tell me which findings are
certain from the text and which are guesses, and list your assumptions.

[paste register extract, with personal data removed]
```

**Lên kế hoạch một buổi rà soát nghỉ hưu.**

```text
We review metrics every [interval]. Our retirement test is: [test]. For each of
the metrics below, using the notes I supply, propose retire, keep, merge, or
redesign, with a one-line reason and a question to ask the owner: [metrics with
last-cited date and owner role]. Also suggest how to announce each retirement to
[audience]. Do not invent usage data. List your assumptions and any information
that would change your recommendation.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề và rào chắn ghép đôi cho một chỉ số trước khi thêm nó vào sổ đăng ký.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số mang người sở hữu, vectơ lợi dụng và rào chắn.

## Điểm chính cần nhớ

- Quản trị giữ cho các con số có cùng ý nghĩa theo thời gian, và một sổ đăng ký một trang là cốt lõi của nó.
- Nêu tên một người sở hữu chịu trách nhiệm cho mỗi chỉ số được báo cáo, và ghi lại vai trò cũng như con người.
- Viết một định nghĩa cùng các đồng hồ của nó, tính nó ở một nơi, và ghi lại mọi thay đổi.
- Cân trọng lượng của quản trị tương xứng với hệ quả của chỉ số.
- Quyết định có chủ ý ai thấy góc nhìn nào, giữ dữ liệu cấp cá nhân ra khỏi báo cáo, và cho chỉ số nghỉ hưu theo bằng chứng.

## Tài liệu tham khảo và đọc thêm

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
