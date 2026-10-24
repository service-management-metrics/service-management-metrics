# Chi phí dịch vụ và kinh tế đơn vị

**Biết một dịch vụ tốn bao nhiêu, và nó tốn bao nhiêu cho mỗi đơn vị của thứ người dùng coi trọng, cho phép một đội đưa ra lựa chọn trung thực về chất lượng, tốc độ và chi tiêu, miễn là các quy tắc phân bổ công bằng, hiển thị, và không bao giờ bị dùng để trừng phạt những người vận hành dịch vụ.**

## Tổng quan và động lực

Mọi dịch vụ CNTT đều tốn tiền: con người, đám mây và lưu trữ, giấy phép, phần cứng, nhà cung cấp, và phần chia của các nền tảng dùng chung mà nó dùng. Lãnh đạo hỏi một dịch vụ tốn bao nhiêu, nó có đáng không, và điều gì đổi nếu nhu cầu tăng gấp đôi. Các đội hỏi cùng những câu hỏi từ phía bên kia: chúng ta kham nổi việc gì, và chúng ta từ bỏ điều gì? Không có con số, những cuộc trò chuyện này biến thành tranh cãi về ngân sách của ai là của ai.

[Kế toán chi phí](https://en.wikipedia.org/wiki/Cost_accounting) là thực hành đo, ghi và phân tích chi phí. Với một tổ chức dịch vụ, các nhiệm vụ trung tâm là quy chi phí cho dịch vụ, diễn đạt chi phí mỗi đơn vị của một thứ có ý nghĩa, và dự báo chi phí thay đổi ra sao theo khối lượng. Thực hành quản lý tài chính dịch vụ của ITIL bao quát cùng vùng đất, và thực hành FinOps cho chi tiêu đám mây đi xa hơn (xem chủ đề 7.6, Chỉ số FinOps và chi phí đám mây).

Góc nhìn linh hoạt và ITIL về chi phí khác nhau, và sự khác biệt hữu ích.

- **Góc nhìn dự án** tài trợ một nỗ lực tạm thời bằng một ngân sách và một ngày giao. Chi phí là điều dự án đã tiêu, và thành công là giao đúng hạn và đúng ngân sách. Dự án kết thúc, đội giải tán, và dịch vụ nó tạo ra được bàn giao cho người khác.
- **Góc nhìn sản phẩm hoặc dịch vụ** tài trợ một đội lâu dài để xây và vận hành một dịch vụ trong suốt vòng đời. Chi phí là chi phí ổn định của đội và các nền tảng, và câu hỏi là giá trị giao ra có biện minh cho khoản chi đó không. Điều này khớp với các mục đích linh hoạt về phân phối liên tục và xây quanh những người có động lực biết dịch vụ. Nó cũng khớp với mối quan tâm của ITIL về chi phí của một dịch vụ xuyên suốt vòng đời.

Các thước đo chi phí có thể gây hiểu lầm dễ như cung cấp thông tin. Ba vấn đề lặp lại.

- **Phân bổ là một lựa chọn.** Chi phí chung, như mạng, an ninh và nền tảng, phải được trải qua các dịch vụ theo một quy tắc nào đó, và các quy tắc khác nhau cho các câu trả lời khác nhau. [Phân bổ chi phí](https://en.wikipedia.org/wiki/Cost_allocation) nên theo một [động lực chi phí](https://en.wikipedia.org/wiki/Cost_driver), một yếu tố làm chi phí đổi, như người dùng, yêu cầu hay lưu trữ. [Tính chi phí theo hoạt động](https://en.wikipedia.org/wiki/Activity-based_costing) hệ thống hóa điều này bằng cách truy chi phí về các hoạt động tiêu thụ tài nguyên.
- **Chi phí cố định và biến đổi hành xử khác nhau.** Một [chi phí cố định](https://en.wikipedia.org/wiki/Fixed_cost) giữ nguyên khi khối lượng đổi trong một khoảng, và một [chi phí biến đổi](https://en.wikipedia.org/wiki/Variable_cost) tăng theo khối lượng. [Chi phí đơn vị](https://en.wikipedia.org/wiki/Unit_cost) của một dịch vụ giảm khi khối lượng lớn lên nếu chi phí cố định chi phối, một mẫu hình liên quan đến [lợi thế kinh tế theo quy mô](https://en.wikipedia.org/wiki/Economies_of_scale). Nhìn vào chi phí đơn vị mà không biết chi phí nào cố định dẫn đến dự báo sai.
- **Chi phí không phải giá trị.** Dịch vụ rẻ nhất không phải tốt nhất. Chi phí mỗi phiếu giảm nếu bạn đóng phiếu mà không giải quyết vấn đề. Các thước đo chi phí cần một đồng hành về chất lượng hay kết quả, mà các phần trước của cuốn sách này cung cấp (xem chủ đề 6.5, Hiện thực hóa giá trị và kết quả kinh doanh).

Phân loại kế toán cũng quan trọng. [Chi tiêu vốn](https://en.wikipedia.org/wiki/Capital_expenditure) mua tài sản bền, và chi phí hoạt động bao quát việc vận hành hằng ngày. Dịch vụ đám mây và đăng ký chuyển chi tiêu từ loại thứ nhất sang loại thứ hai, làm đổi cách ngân sách trông mà không đổi chi phí của dịch vụ. Đồng nghiệp tài chính sở hữu những quy tắc này, và các chỉ số ở đây nên được xây cùng họ.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng mạnh với tiền bạc. Một mục tiêu chi phí có xu hướng tạo ra việc cắt giảm chi phí nơi dễ giấu thiệt hại nhất, như bảo trì, chất lượng và thời gian học. Các thước đo dưới đây vì vậy được ghép với các chỉ báo sức khỏe dịch vụ và một phát biểu về quy tắc phân bổ (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Làm quy tắc phân bổ tường minh và gắn với động lực.** Mọi người chấp nhận những con số họ theo dõi được.
- **Tách chi phí cố định khỏi biến đổi.** Dự báo phụ thuộc vào cái nào là cái nào.
- **Báo cáo chi phí đơn vị cùng đồng hành chất lượng của nó.** Rẻ hơn chỉ tốt hơn nếu dịch vụ vẫn tốt.
- **Dùng khoảng và xu hướng, không dùng độ chính xác giả.** Phân bổ liên quan đến phán đoán.
- **Tài trợ các đội lâu dài quanh dịch vụ nơi bạn có thể.** Đội ổn định học và cải thiện; đội tạm thời giải tán.
- **Chia sẻ chi phí với những người có thể thay đổi nó.** Hiển thị mà không có ảnh hưởng chỉ là đổ lỗi.
- **Không bao giờ xếp hạng người hay đội theo chi phí.** Dịch vụ khác nhau, ràng buộc của chúng cũng vậy.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Chi phí mỗi dịch vụ | Chi phí hằng năm tính đủ của một dịch vụ có tên, dùng quy tắc phân bổ có tài liệu | chi phí trực tiếp + chi phí chung được phân bổ cho dịch vụ trong kỳ | tiền tệ mỗi năm | Sổ cái, dữ liệu trung tâm chi phí, hóa đơn đám mây và giấy phép, dữ liệu thời gian hoặc hoạt động | Quản lý tài chính dịch vụ; quản lý danh mục dịch vụ | Chi phí của một đội sản phẩm lâu dài và các nền tảng của nó | Hằng quý |
| Chi phí đơn vị | Chi phí mỗi đơn vị của thứ người dùng coi trọng, như mỗi người dùng hoạt động, mỗi giao dịch, hoặc mỗi yêu cầu đã giải quyết | chi phí mỗi dịch vụ trong kỳ / số đơn vị giao trong kỳ | tiền tệ mỗi đơn vị | Chi phí mỗi dịch vụ và dữ liệu khối lượng | Quản lý tài chính dịch vụ; quản lý mức dịch vụ | Chi phí phục vụ mỗi kết quả | Hằng quý |
| Độ phủ phân bổ | Tỷ lệ chi tiêu CNTT được quy cho một dịch vụ có tên hoặc khai báo là chi phí chung | chi tiêu quy cho dịch vụ hoặc khai báo là chi phí chung / tổng chi tiêu CNTT | phần trăm | Sổ cái và mô hình phân bổ | Quản lý tài chính dịch vụ | Chi phí hiển thị của công việc mỗi đội | Hằng quý |
| Phân chia vận hành, thay đổi và cải tiến | Tỷ lệ chi tiêu hoặc năng lực dành cho vận hành dịch vụ, thay đổi chúng, và cải tiến chúng | chi tiêu hoặc năng lực ở mỗi loại / tổng | phần trăm | Thẻ sổ cái, loại công việc trong trình theo dõi công việc | Quản lý tài chính dịch vụ; cải tiến liên tục | Phân bổ năng lực theo loại công việc | Hằng quý |
| Sai lệch dự báo | Chênh lệch giữa dự báo và chi phí thực, theo dịch vụ | (thực trừ dự báo) / dự báo | phần trăm | Nhật ký dự báo và sổ cái | Quản lý tài chính dịch vụ | Độ chính xác dự báo | Hằng tháng |
| Tỷ lệ tranh chấp showback | Tỷ lệ dòng showback hoặc chargeback mà chủ dịch vụ đã phản đối và đã được thay đổi | số dòng bị thay đổi sau phản đối / số dòng đã phát hành | phần trăm | Hệ thống showback và nhật ký tranh chấp | Quản lý tài chính dịch vụ | Buổi nhìn lại về chi phí chung | Hằng quý |
| Tỷ lệ tài trợ đội lâu dài | Tỷ lệ chi tiêu phân phối và vận hành được tài trợ như năng lực đội ổn định cho một dịch vụ | chi tiêu cho các đội dịch vụ lâu dài / tổng chi tiêu phân phối và vận hành | phần trăm | Sổ cái và sơ đồ tổ chức | Quản lý tài chính dịch vụ; thay đổi tổ chức | Các đội xây quanh dịch vụ và những người có động lực | Hằng năm |

Hãy định nghĩa kỳ, tiền tệ và loại chi phí cho mọi thước đo, và ghi các quy tắc phân bổ vào sổ đăng ký chỉ số: chi phí nào là trực tiếp, nào là chung, và động lực nào trải mỗi chi phí chung. Chi phí đơn vị cần một đơn vị mà người dùng và đội đều chấp nhận, và định nghĩa đơn vị giữ cố định qua xu hướng. Sai lệch dự báo so sánh với dự báo như nó đứng lúc bắt đầu kỳ, không phải một bản đã sửa.

## Khuyến nghị

### Xây bức tranh chi phí

**1. Bắt đầu với sổ cái và danh sách dịch vụ.** Lấy tổng chi tiêu CNTT từ sổ cái, liệt kê các dịch vụ từ danh mục, và quyết định phần nào của mỗi chi phí thuộc dịch vụ nào. Bắt đầu với các chi phí trực tiếp dễ: đội vận hành dịch vụ, giấy phép của nó, lưu trữ của nó. Chi phí chung đến thứ hai. Một bức tranh thô ban đầu, chia sẻ với những người liên quan, thắng một bức tranh chính xác xây trong riêng tư.

**2. Chọn các động lực chi phí mà mọi người theo dõi được.** Với mỗi chi phí chung, chọn một động lực gắn với điều thực sự gây ra nó: người dùng cho nền tảng cộng tác, lưu trữ cho nền tảng dữ liệu, yêu cầu cho cổng, thiết bị cho quản lý thiết bị đầu cuối. Giải thích quy tắc trong một câu. Động lực mà không ai kiểm tra được mời gọi tranh cãi, và động lực mà không ai ảnh hưởng được khiến showback vô nghĩa.

**3. Tách chi phí cố định và biến đổi.** Với mỗi dịch vụ, đánh dấu chi phí nào di chuyển theo khối lượng và cái nào không. Một dịch vụ chủ yếu là chi phí cố định có chi phí đơn vị giảm khi tăng trưởng, và một dịch vụ chủ yếu biến đổi thì không. Sự phân chia này là cơ sở cho mọi dự báo và mọi cuộc trò chuyện về mở rộng.

**4. Cho thấy khoảng nơi phân bổ liên quan đến phán đoán.** Nếu hai quy tắc phân bổ hợp lý cho kết quả khác nhau 20 phần trăm, hãy cho thấy cả hai hoặc cho thấy khoảng. Một con số chính xác duy nhất từ một quy tắc tùy tiện khơi mào các cuộc cãi vã mà dữ liệu không giải quyết được.

### Đo mỗi đơn vị, với chất lượng bên cạnh

**5. Chọn một đơn vị phản ánh giá trị.** Chi phí mỗi người dùng hoạt động, mỗi giao dịch hoàn tất, mỗi yêu cầu đã giải quyết, hoặc mỗi lần triển khai đều có thể hữu ích. Hãy chọn đơn vị nối với mục đích của dịch vụ, thống nhất nó với chủ dịch vụ, và giữ nó ổn định. Chi phí mỗi phiếu là một đơn vị rủi ro, vì nó giảm khi phiếu được đóng sớm và tăng khi bạn ngăn phiếu bằng tự phục vụ tốt.

**6. Ghép mọi chi phí đơn vị với một thước đo chất lượng.** Hãy cho thấy chi phí đơn vị cạnh tính sẵn sàng, sự hài lòng, hoặc tỷ lệ mở lại. Một chi phí đơn vị giảm trong khi chất lượng giảm là một sự chuyển chi phí cho người dùng. Một chi phí đơn vị giữ ổn định trong khi chất lượng tăng là một lợi ích. Hãy trình bày chúng cùng nhau hoặc không trình bày (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

**7. Theo dõi xu hướng, không chỉ mức.** Chi phí đơn vị theo thời gian, kèm ghi chú về điều đã đổi, kể một câu chuyện mà một quý không kể được. Đánh dấu các thay đổi quy tắc phân bổ hoặc đơn vị trên biểu đồ để xu hướng không bị đọc sai. Hãy so sánh một dịch vụ với lịch sử của chính nó trước khi so với dịch vụ khác.

### Chia sẻ chi phí với những người có thể thay đổi nó

**8. Dùng showback trước chargeback.** Showback báo cáo chi phí cho chủ dịch vụ mà không tính tiền họ, và chargeback chuyển chi phí vào ngân sách của họ. Hãy bắt đầu với showback, xây hiểu biết và lòng tin, và chỉ chuyển sang chargeback nơi nó đổi quyết định và các quy tắc được chấp nhận. Cả hai phụ thuộc vào các quy tắc mà chủ sở hữu giúp định hình.

**9. Để chủ sở hữu phản đối các con số.** Một quy trình tranh chấp là dấu hiệu của sự lành mạnh, miễn là nó nhanh và kết quả được ghi nhật ký. Hãy rà soát tỷ lệ tranh chấp: tỷ lệ cao cho thấy các quy tắc không ai tin, và bằng không có thể cho thấy không ai đọc báo cáo. Sửa quy tắc, không chỉ dòng.

**10. Rà soát chi phí cùng toàn đội dịch vụ.** Hãy gồm kỹ sư và người vận hành cũng như quản lý trong một buổi rà soát chi phí đều đặn. Những người chạy một dịch vụ thường biết lãng phí ẩn ở đâu: môi trường nhàn rỗi, tài nguyên quá cỡ, công cụ trùng lặp. Hãy coi phát hiện của họ là cải tiến để chia sẻ và không phải chỉ trích.

### Tài trợ cho sự ổn định và học hỏi

**11. Ưu tiên các đội lâu dài được tài trợ quanh dịch vụ.** Nơi có thể, hãy tài trợ một đội ổn định sở hữu một dịch vụ theo thời gian, thay vì lắp ráp một đội dự án rồi giải tán nó. Các đội lâu dài tích lũy tri thức, xây quan hệ tốt hơn với người dùng, và gánh chi phí của các quyết định kém. Điều này phản ánh mục đích linh hoạt về xây quanh những cá nhân có động lực và mối quan tâm của ITIL về vòng đời dịch vụ. Sự thay đổi trong tài trợ là một quyết định tổ chức đáng kể, nên hãy mời tài chính và lãnh đạo sớm. Cuốn sách *Project to Product* của Mik Kersten bàn về sự chuyển dịch này.

**12. Dành sẵn năng lực cho cải tiến.** Các chi phí giảm chi phí tương lai, như tự động hóa, sửa độ tin cậy và gỡ công cụ trùng lặp, cần được tài trợ có bảo vệ nếu không chúng thua công việc tính năng mọi lần. Hãy theo dõi tỷ lệ cải tiến trong sự phân chia vận hành, thay đổi và cải tiến, và nhìn vào lợi tức nó tạo ra (xem chủ đề 4.6, Nợ kỹ thuật và lỗi đã biết).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Chi phí mỗi dịch vụ | Chuyển chi phí sang dịch vụ khác qua quy tắc phân bổ; để chi phí bất lợi không được phân bổ | Độ phủ phân bổ; quy tắc được công bố và chủ sở hữu rà soát; so sánh tổng với sổ cái |
| Chi phí đơn vị | Nâng mẫu số bằng các đơn vị giá trị thấp; cắt chất lượng để cắt chi phí; đổi đơn vị | Thước đo đồng hành về chất lượng; định nghĩa đơn vị cố định; kiểm tra kết quả |
| Độ phủ phân bổ | Khai báo lượng lớn là chi phí chung để tránh quy gán | Tỷ lệ chi phí chung được báo cáo; rà soát cái gì được khai báo là chi phí chung và vì sao |
| Phân chia vận hành, thay đổi và cải tiến | Gắn nhãn lại công việc vận hành là cải tiến hay thay đổi; gắn thẻ vào cuối kỳ | Gắn thẻ lúc tiếp nhận; lấy mẫu hạng mục xem loại; so sánh với dữ liệu sự cố và yêu cầu |
| Sai lệch dự báo | Đệm dự báo; sửa dự báo muộn trong kỳ | Dự báo được ghi nhật ký lúc bắt đầu; so sánh các khoảng dự báo với thực tế theo thời gian |
| Tỷ lệ tranh chấp showback | Làm nản lòng tranh chấp; đổi dòng mà không đổi quy tắc | Rà soát tranh chấp và kết quả; kiểm tra quy tắc có đổi sau các tranh chấp lặp lại không |
| Tỷ lệ tài trợ đội lâu dài | Đổi tên dự án thành đội lâu dài mà không đổi tài trợ hay quyền sở hữu | Kiểm tra tính ổn định đội và quyền sở hữu theo thời gian; các thước đo sức khỏe dịch vụ |

Một kết quả đọc lành mạnh là một bức tranh chi phí mà chủ dịch vụ nhận ra, chi phí đơn vị dịch chuyển vì những nguyên nhân giải thích được trong khi chất lượng giữ vững, sai số dự báo co lại, và công việc cải tiến hiện ra trong các con số.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Tài trợ theo dự án | Phạm vi và kết thúc rõ ràng | Đội giải tán; tri thức mất; dịch vụ bị bàn giao |
| Tài trợ đội lâu dài | Học hỏi, quyền sở hữu, chi phí ổn định | Cần lòng tin và quy trình lập kế hoạch trưởng thành; phạm vi có thể trôi |
| Showback | Xây hiểu biết với ít ma sát | Có thể bị phớt lờ nếu không ai chịu trách nhiệm |
| Chargeback | Tạo trách nhiệm giải trình và tín hiệu giá | Tranh chấp; động cơ tránh dịch vụ dùng chung |
| Quy tắc phân bổ đơn giản | Dễ giải thích | Có thể thô |
| Phân bổ theo hoạt động | Chính xác hơn | Tốn kém để duy trì; độ chính xác giả |
| Chi phí mỗi đơn vị | Nối chi phí với giá trị | Nhạy với lựa chọn đơn vị và khối lượng |
| Chỉ tổng chi phí | Đơn giản | Giấu xu hướng và hiệu suất |

Câu trả lời dạng văn xuôi là bắt đầu với quy tắc đơn giản và showback, thêm độ chính xác nơi quyết định phụ thuộc vào nó, và tiến về tài trợ đội lâu dài khi lòng tin và độ trưởng thành lập kế hoạch lớn lên. Hãy giữ một thước đo chất lượng cạnh mọi thước đo chi phí.

## Câu hỏi để thảo luận với đội nhóm

**1. Dịch vụ chính của chúng ta tốn bao nhiêu mỗi năm, và ai sẽ đồng ý với con số?**
Hãy nhờ tài chính và chủ dịch vụ đưa ra ước lượng độc lập. So sánh chúng. Người điều phối nên ghi nơi chúng khác nhau và vì sao: quy tắc phân bổ, phạm vi, hay chi phí còn thiếu. Thống nhất một quy tắc có tài liệu duy nhất cho quý tới.

**2. Đơn vị nào người dùng của chúng ta nhận ra, và nó tốn bao nhiêu?**
Liệt kê các đơn vị khả dĩ cho dịch vụ và chọn một. Tính chi phí của nó và thảo luận điều gì làm nó tăng hay giảm. Hỏi đơn vị giấu điều gì. Thêm một thước đo chất lượng đứng cạnh nó.

**3. Chi phí chung nào của chúng ta được trải theo một quy tắc không ai giải thích được?**
Liệt kê các chi phí chung và động lực của chúng. Với mỗi cái, hỏi động lực có liên quan đến điều gây ra chi phí không. Thay một cái không. Thảo luận ai có thể ảnh hưởng động lực, vì dữ liệu chi phí không có ảnh hưởng chỉ là đổ lỗi.

**4. Bao nhiêu phần năng lực của chúng ta dành cho vận hành, thay đổi và cải tiến dịch vụ?**
Hãy rà soát một quý công việc đã xong theo loại, như trong chủ đề lập kế hoạch (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối). So sánh với điều lãnh đạo nghĩ. Quyết định tỷ lệ cải tiến nên là bao nhiêu, và điều gì sẽ bảo vệ nó.

**5. Điều gì sẽ đổi nếu chúng ta tài trợ một đội lâu dài cho dịch vụ này?**
Hãy hình dung tài trợ, quyền sở hữu và các thước đo. Hỏi tài chính, đội và người dùng sẽ thấy rủi ro và lợi ích gì. Xác định một bước hướng tới nó, như danh sách đội ổn định và một cái nhìn ngân sách dịch vụ chung.

**6. Lần cuối một con số chi phí gây ra tranh cãi là khi nào, và chúng ta học được gì?**
Nhớ lại một tranh chấp showback hay ngân sách. Nó về con số hay về quy tắc? Thảo luận một quy tắc rõ hơn hay một quy trình tranh chấp tốt hơn sẽ giúp ích ra sao.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối thấy chi phí là giá của thời gian, nền tảng và công cụ của họ. Họ nên biết chi phí và chi phí đơn vị của dịch vụ mình, phát hiện lãng phí sớm, và dùng các con số để biện hộ cho công việc cải tiến và tài trợ ổn định. Họ nên tránh tối ưu con số bằng cách cắt chất lượng, và nên phản đối các quy tắc phân bổ họ không theo dõi được.

### Đội dịch vụ và vận hành

Các đội vận hành gánh chi phí vận hành dịch vụ và thường giữ các nền tảng dùng chung. Họ nên công bố cách chi phí chung được thúc đẩy, trả lời câu hỏi showback, và chia sẻ ý tưởng tiết kiệm từ kinh nghiệm. Họ nên chờ đợi áp lực cắt chi phí vận hành, và nên cho thấy phía chất lượng và rủi ro của bất kỳ cắt giảm nào.

### Lãnh đạo và quản trị

Lãnh đạo hỏi về chi phí và giá trị và đặt mô hình tài trợ. Họ nên yêu cầu chi phí đơn vị kèm đồng hành chất lượng, ủng hộ tài trợ đội lâu dài nơi phù hợp, và tránh xếp hạng các đội theo chi phí. Quản trị nên chờ đợi các quy tắc phân bổ được ghi tài liệu, rà soát và áp dụng nhất quán, và nên nhìn vào tỷ lệ cải tiến.

### Khách hàng và người dùng

Người dùng trả qua chargeback muốn hiểu hóa đơn và ảnh hưởng đến nó. Người khác thấy chi phí trong chất lượng và phạm vi dịch vụ được cung cấp. Chi phí đơn vị rõ ràng và một tiếng nói trong sự đánh đổi giữa giá và dịch vụ làm mối quan hệ lành mạnh hơn, và phản hồi của họ là một phần của đồng hành chất lượng cho mọi chi phí đơn vị.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT trung tâm của một trường đại học cỡ vừa cung cấp khoảng 25 dịch vụ cho 18.000 sinh viên và nhân viên. Các con số dưới đây chỉ mang tính minh họa.

Văn phòng tài chính muốn biết vì sao ngân sách CNTT tăng nhanh hơn số tuyển sinh. Đối tác tài chính CNTT xây một bức tranh chi phí cùng các chủ dịch vụ. Trong tổng chi tiêu CNTT, 72 phần trăm là trực tiếp cho các dịch vụ có tên, 18 phần trăm là nền tảng dùng chung (mạng, danh tính, công cụ an ninh) được phân bổ theo động lực, và 10 phần trăm được khai báo là chi phí chung. Độ phủ phân bổ vì vậy là 90 phần trăm. Nền tảng học tập tốn tương đương 41 đô la Mỹ mỗi người dùng hoạt động mỗi năm, tăng từ 36 đô la, trong khi sự hài lòng và tính sẵn sàng ổn định. Bàn dịch vụ cho thấy chi phí mỗi yêu cầu đã giải quyết giảm 12 phần trăm qua hai năm. Chủ dịch vụ chỉ ra rằng sự giảm trùng với sự tăng của phiếu mở lại từ 4 lên 9 phần trăm, và đồng hành chất lượng cho thấy khoản tiết kiệm một phần là sự chuyển công sức sang người dùng.

Đội thực hiện bốn thay đổi. Nó công bố quy tắc phân bổ trên một trang, với động lực cho mỗi chi phí chung và ngày rà soát cuối. Nó thay chi phí mỗi yêu cầu bằng chi phí mỗi yêu cầu giải quyết ngay lần liên hệ đầu, cho thấy cạnh tỷ lệ mở lại. Nó chuyển nền tảng học tập và dịch vụ danh tính sang tài trợ như các đội lâu dài với danh sách ổn định. Nó dành 15 phần trăm năng lực cho công việc cải tiến cho mỗi trong hai dịch vụ lớn nhất, và theo dõi công việc đó mang lại gì.

Một năm sau, chi phí đơn vị của nền tảng học tập là 38 đô la khi mức sử dụng tăng, tỷ lệ mở lại đã giảm xuống 5 phần trăm, và sai lệch dự báo cho hai dịch vụ đội lâu dài nằm trong 4 phần trăm, so với 11 phần trăm cho công việc tài trợ theo dự án. Tỷ lệ tranh chấp showback đã giảm từ 22 phần trăm xuống 8 phần trăm sau khi hai quy tắc được đổi. Văn phòng tài chính yêu cầu một mục tiêu hằng năm giảm 5 phần trăm chi phí đơn vị cho mọi dịch vụ. Đối tác tài chính CNTT đề xuất mục tiêu chỉ nơi một dịch vụ có đòn bẩy hiệu suất rõ ràng, được cho thấy cùng đồng hành chất lượng, và giải thích rằng một mục tiêu đồng loạt sẽ thưởng cho việc cắt bảo trì. Quyết định được ghi lại, kèm một buổi rà soát quy tắc mỗi năm.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy tài trợ các đội lâu dài và rà soát chi phí cạnh kết quả cùng các bên liên quan thường xuyên, để các cuộc thảo luận chi phí không chỉ về cắt giảm. Điều cần lưu ý là các quy tắc phân bổ dùng để trừng phạt các đội dẫn đến lợi dụng thẻ và phân chia.

### AI

Khối lượng công việc AI thêm chi phí biến đổi, như mức dùng mô hình và xử lý dữ liệu, và đặt ra câu hỏi về chi phí mỗi kết quả. Hãy theo dõi chi phí mỗi đơn vị giá trị cho các đường có AI hỗ trợ và ghép nó với chất lượng. Điều cần lưu ý là một đường AI rẻ hơn làm giảm chất lượng chỉ chuyển chi phí sang làm lại.

### Tự động hóa

Hãy tự động hóa việc thu thập chi phí và kiểm tra thẻ, và đo độ phủ phân bổ. Điều cần lưu ý là phân bổ tự động theo một quy tắc không ai rà soát có thể làm méo bức tranh.

### Phân tích

Hãy báo cáo chi phí đơn vị kèm khoảng và nêu quy tắc phân bổ. Quyết định được cung cấp thông tin là đổi chất lượng, tốc độ hay chi tiêu ở đâu. Điều cần lưu ý là chi phí đơn vị phụ thuộc vào cái được chọn làm đơn vị, nên hãy nói vì sao.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Chi phí chủ yếu là đám mây, công cụ và lương. Hãy theo dõi chi tiêu đám mây và công cụ chính theo dịch vụ ngay từ đầu, gắn thẻ tài nguyên, và tính chi phí mỗi khách hàng hoạt động sớm. Chống lại phân bổ cầu kỳ, vì đội nhỏ.

**Doanh nghiệp nhỏ.** Một nhúm nhà cung cấp và một hai người chiếm hầu hết chi phí. Hãy giữ một bức tranh hằng năm đơn giản, chi phí mỗi người dùng cho các công cụ chính, và một cái nhìn về cái được trả tiền mà không dùng. Hãy xin nhà cung cấp hóa đơn chi tiết.

**Doanh nghiệp lớn.** Quy mô mang đến nền tảng dùng chung và nhiều đơn vị kinh doanh. Hãy dùng một mô hình phân bổ có tài liệu với động lực, một quy trình tranh chấp, và một đối tác tài chính nhúng trong CNTT. Hãy đề phòng chargeback làm nản việc dùng các dịch vụ chung có lợi cho mọi người.

**Chính phủ và khu vực công.** Ngân sách hằng năm và được phân bổ, với quy tắc về chi tiêu vốn và hoạt động, và minh bạch chi phí có thể được yêu cầu. Hãy căn chỉnh tính chi phí dịch vụ với quy tắc tài chính công, ghi tài liệu phương pháp phân bổ cho kiểm toán, và cân nhắc tài trợ nhiều năm cho các đội dịch vụ lâu dài nơi luật cho phép. Báo cáo chi phí đơn vị cùng các thước đo kết quả (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí là công sức xây mô hình phân bổ, thời gian của tài chính và chủ dịch vụ để thống nhất quy tắc, và công việc thường lệ của báo cáo hằng tháng và xử lý tranh chấp. Hầu hết tổ chức đã có sổ cái và dữ liệu hóa đơn đám mây. Một mô hình nhỏ trong bảng tính có thể bắt đầu công việc, và công cụ đến sau.

Lợi tức là quyết định tốt hơn và ít tranh cãi hơn. Các đội thấy chi phí của mình tìm ra lãng phí: môi trường nhàn rỗi, giấy phép không dùng và công cụ trùng lặp. Lãnh đạo có thể so sánh các phương án khi biết các động lực chi phí, lập kế hoạch tăng trưởng với chi phí cố định và biến đổi được tách, và tài trợ cải tiến với bằng chứng về lợi tức của nó. Hãy xây hồ sơ từ con số của chính bạn: lãng phí tìm thấy trong buổi rà soát đầu, thời gian dành cho tranh chấp ngân sách, và sai lệch dự báo trước và sau. Tránh các tuyên bố bên ngoài về chi tiêu CNTT trung bình theo phần trăm doanh thu trừ khi bạn truy được nguồn và phương pháp, vì định nghĩa biến thiên rộng. Chủ đề cuối của phần này gom hồ sơ tài chính vào một chỗ (xem chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh).

## Phản mẫu và cạm bẫy

- **Trải chi phí chung đều.** Nó phạt người dùng nhỏ và giấu động lực thật. Hãy dùng động lực phản ánh sự tiêu thụ.
- **Chi phí mỗi phiếu làm mục tiêu.** Nó thưởng cho việc đóng phiếu sớm. Hãy dùng chi phí mỗi yêu cầu đã giải quyết kèm đồng hành chất lượng.
- **Độ chính xác mà không có lòng tin.** Một mô hình đẹp mà chủ sở hữu không tin thì vô giá trị. Hãy xây quy tắc cùng họ.
- **Chargeback trước.** Nó khơi mào cãi vã trước khi có hiểu biết. Hãy bắt đầu với showback.
- **Cắt cái khó thấy.** Bảo trì, học hỏi và công việc độ tin cậy bị cắt trước và tốn hơn về sau. Hãy bảo vệ năng lực cải tiến.
- **So sánh các đội theo chi phí.** Dịch vụ khác nhau về ràng buộc và rủi ro. Hãy so sánh mỗi cái với lịch sử của chính nó.
- **Đổi quy tắc và xu hướng cùng lúc.** Hãy đánh dấu thay đổi quy tắc trên biểu đồ và viết lại lịch sử nơi có thể.
- **Coi chi phí là của tài chính.** Những người chạy dịch vụ biết chi phí đến từ đâu. Hãy mời họ.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Bức tranh chi phí | Ngân sách chỉ theo phòng ban | Chi phí mỗi dịch vụ cho vài dịch vụ, phân bổ thô | Quy tắc phân bổ có tài liệu với động lực; độ phủ được theo dõi | Chi phí đơn vị kèm đồng hành chất lượng; phân chia cố định và biến đổi | Chi phí chia sẻ minh bạch với đối tác kinh doanh; động lực được cùng ảnh hưởng |
| Dùng chi phí | Cắt chi phí theo phần trăm | Showback cho một số chủ sở hữu | Showback cho mọi dịch vụ; quy trình tranh chấp | Sai lệch dự báo và xu hướng chi phí đơn vị dẫn dắt quyết định | Chi phí, chất lượng và giá trị được đánh đổi công khai qua danh mục |
| Mô hình tài trợ | Ngân sách dự án hằng năm | Một số đội ổn định | Đội lâu dài cho các dịch vụ chính | Tài trợ theo sau kết quả dịch vụ và học hỏi | Tài trợ linh hoạt qua các dịch vụ với đầu tư nền tảng chung |

## Danh sách kiểm tra

- [ ] Tổng chi tiêu CNTT được quy cho dịch vụ hoặc khai báo là chi phí chung, với độ phủ được theo dõi.
- [ ] Quy tắc phân bổ và động lực được viết ra và rà soát cùng chủ dịch vụ.
- [ ] Chi phí cố định và biến đổi được tách cho mỗi dịch vụ chính.
- [ ] Chi phí đơn vị dùng đơn vị ổn định đã thống nhất và đứng cạnh các thước đo chất lượng.
- [ ] Dự báo được ghi nhật ký lúc bắt đầu kỳ và so sánh với thực tế.
- [ ] Showback có sẵn cho mọi chủ dịch vụ, kèm quy trình tranh chấp.
- [ ] Chi tiêu hoặc năng lực vận hành, thay đổi và cải tiến được báo cáo.
- [ ] Một phần năng lực được bảo vệ cho cải tiến.
- [ ] Thay đổi quy tắc và đơn vị được đánh dấu trên biểu đồ xu hướng.
- [ ] Không đội hay người nào bị xếp hạng theo chi phí.

## Lời nhắc AI

**Đề xuất động lực chi phí cho dịch vụ dùng chung.**

```text
Our shared services and their annual costs are: [list]. Our services that use
them are: [list], with usage data available for: [list of drivers like users,
requests, storage]. Propose a cost driver for each shared service, explain how
to check that the driver reflects what causes cost, and describe the
limitations. Do not invent costs. List your assumptions and what finance
should confirm.
```

**Thiết kế một chi phí đơn vị và đồng hành chất lượng của nó.**

```text
For the service [name] in [type of organization], suggest three possible units
for unit cost (for example per active user, per transaction, per resolved
request) and, for each, a quality measure to show beside it and a way the pair
could be gamed. Recommend one with reasons. Do not invent figures. List your
assumptions and questions for the service owner.
```

**Chuẩn bị một buổi rà soát showback.**

```text
Draft an agenda and a one-page summary for a quarterly showback review with
the owner of [service]. Data: cost this quarter [figures], previous quarter
[figures], volume [figures], quality measures [figures], and disputes [list].
Include questions that help the owner find waste and challenge the allocation.
Use plain language. List your assumptions and mark any claim that needs
checking.
```

**Lập kế hoạch chuyển sang tài trợ đội lâu dài.**

```text
We currently fund work as projects: [describe]. We are considering funding
persistent teams for [services]. Outline the steps, the information finance
and leadership will want, risks, and measures to track whether the change
helps (for example forecast variance, team stability, improvement share, and
service health). Do not claim results from other organizations. List your
assumptions and decisions that need leadership input.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số chi phí hoặc kinh tế đơn vị.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số chi phí nêu quy tắc phân bổ, vectơ lợi dụng và đồng hành chất lượng của nó.

## Điểm chính cần nhớ

- Quy chi phí cho dịch vụ bằng các động lực mà mọi người theo dõi được, và cho thấy các quy tắc.
- Tách chi phí cố định khỏi biến đổi, và ghép mọi chi phí đơn vị với một thước đo chất lượng.
- Bắt đầu với showback và một quy trình tranh chấp, và chỉ thêm chargeback nếu nó đổi quyết định.
- Tài trợ các đội lâu dài quanh dịch vụ nơi bạn có thể, và bảo vệ năng lực cải tiến.
- Báo cáo khoảng và xu hướng, và đánh dấu các thay đổi quy tắc trên biểu đồ.
- Không bao giờ xếp hạng người hay đội theo chi phí.

## Tài liệu tham khảo và đọc thêm

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
