# Định luật Goodhart và tâm lý học của chỉ số

**Bất kỳ con số nào bạn thưởng, xếp hạng hay đe dọa sẽ bắt đầu thay đổi chính công việc mà nó được dùng để mô tả, nên mọi chỉ số trong cuốn sách này được dùng như một câu hỏi để đội nhóm thảo luận và được ghép với một rào chắn bắt được việc lợi dụng nó.**

## Tổng quan và động lực

[Định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) là lời cảnh báo lâu đời nhất trong đo lường. Nhà kinh tế Charles Goodhart nhận thấy vào năm 1975, khi viết về chính sách tiền tệ của Anh, rằng một quy luật thống kê có xu hướng sụp đổ một khi các nhà chức trách gây áp lực lên nó vì mục đích kiểm soát. Cách diễn đạt phổ biến ra đời muộn hơn. Nhà nhân học Marilyn Strathern phát biểu vào năm 1997: "Khi một thước đo trở thành mục tiêu, nó không còn là một thước đo tốt." Hai câu nói cùng một điều: khoảnh khắc một con số được dùng để lái con người, con người lái con số.

Cùng ý tưởng này có những tên gọi khác. [Định luật Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), của nhà khoa học xã hội Donald Campbell, nói rằng một chỉ báo định lượng càng được dùng để ra quyết định thì càng chịu nhiều áp lực làm biến chất và càng bóp méo các quá trình mà nó có nhiệm vụ theo dõi. [Hiệu ứng rắn hổ mang](https://en.wikipedia.org/wiki/Cobra_effect) là câu chuyện về một khoản tiền thưởng sinh ra nhiều hơn chính thứ nó định loại bỏ. Mỗi cái là một ví dụ của [động cơ phản tác dụng](https://en.wikipedia.org/wiki/Perverse_incentive): một phần thưởng đẩy hành vi ra xa điều mà người thưởng mong muốn.

Các đội xây dựng và vận hành dịch vụ CNTT đặc biệt dễ bị ảnh hưởng. Phân phối liên tục và quản lý dịch vụ CNTT (ITSM), như được hệ thống hóa bởi [ITIL](https://en.wikipedia.org/wiki/ITIL), đều tạo ra một dòng đều đặn các dấu thời gian, số đếm và trạng thái. Một hệ thống phiếu ghi lại khi nào một phiếu được mở, khi nào được giao, khi nào đồng hồ tạm dừng và khi nào đóng. Một công cụ phân phối ghi lại khi nào công việc bắt đầu và kết thúc. Những con số này rẻ để thu thập, dễ vẽ biểu đồ và dễ biến thành mục tiêu. Chúng cũng dễ bị dịch chuyển mà không giúp được ai.

Ba thuật ngữ lặp lại trong chủ đề này và phần còn lại của cuốn sách. Một **thước đo** mô tả điều gì đó. Một **mục tiêu** là một con số mà ai đó được kỳ vọng đạt tới. Một **rào chắn** là một thước đo hoặc thực hành thứ hai, chọn trước, sẽ dịch chuyển nếu thước đo thứ nhất đang bị lợi dụng. Bước đi từ thước đo sang mục tiêu là nơi rắc rối bắt đầu, và rào chắn là cách bạn nhận ra.

Chủ đề này đặt ra quy tắc chi phối mọi chủ đề khác. Mỗi họ chỉ số trong cuốn sách đi kèm vectơ lợi dụng của nó (cách nó thường bị lợi dụng) và rào chắn của nó. Nếu một chủ đề sau có vẻ bỏ qua điều đó, hãy coi chủ đề ấy là chưa hoàn tất.

### Vì sao con người lợi dụng các con số

Lợi dụng thường không phải là thiếu trung thực. Đó là phản ứng bình thường của những người có năng lực trước các động cơ đặt trước mặt họ. Bốn lực đang tác động.

- **Áp lực.** Tiền thưởng, đánh giá, việc gia hạn hợp đồng hay danh tiếng của ai đó phụ thuộc vào con số. Ngay cả khi không có mối liên kết chính thức, con người suy ra lãnh đạo quan tâm điều gì từ những gì lãnh đạo vẽ biểu đồ.
- **Đánh tráo (surrogation).** [Đánh tráo](https://en.wikipedia.org/wiki/Surrogation) là xu hướng coi thước đo như thể nó là chính thứ mà nó đại diện. Các nhà nghiên cứu đã khảo sát hiện tượng này trong tổ chức thấy rằng tiền thưởng khuyến khích gắn với một thước đo làm điều đó dễ xảy ra hơn. Một đội theo dõi "số phiếu đã đóng" bắt đầu tin rằng mục tiêu là phiếu đóng, không phải vấn đề được giải quyết.
- **Nỗi sợ.** Khi một con số xấu mang lại sự đổ lỗi, con người giấu tin xấu. Sự cố bị hạ cấp, sự cố ngừng hoạt động bị gắn lại là "bảo trì có kế hoạch", và lỗi bị ghi thành yêu cầu tính năng.
- **Tối ưu hóa cục bộ.** Một đội cải thiện phần của hệ thống mà nó bị đánh giá và đẩy chi phí sang phần không bị đánh giá. Bàn dịch vụ đóng phiếu nhanh còn tuyến thứ hai thừa hưởng những trường hợp lặp lại.

Hiểu các lực này quan trọng vì phương thuốc không phải là kiểm soát chặt hơn. Đó là thay đổi những điều kiện khiến việc lợi dụng trở nên hợp lý.

## Nguyên tắc chính

- **Đo để học, không phải để phán xét.** Cho đội làm công việc thấy các con số trước, và dùng chúng để đặt câu hỏi.
- **Ghép mọi chỉ số với một rào chắn.** Tốc độ với chất lượng, khối lượng với kết quả, chi phí với trải nghiệm.
- **Mô tả đội nhóm và hệ thống, không bao giờ xếp hạng con người.** Bảng xếp hạng cá nhân là cách nhanh nhất để làm hỏng một nguồn dữ liệu.
- **Ưu tiên kết quả và xu hướng hơn mục tiêu.** Một phương hướng và một cuộc trò chuyện thắng một ngưỡng.
- **Viết định nghĩa ra, kể cả các đồng hồ.** Định nghĩa mơ hồ là nơi việc lợi dụng ẩn náu.
- **Chờ đợi thay đổi.** Cho nghỉ hưu hoặc thiết kế lại một chỉ số khi nó không còn cung cấp thông tin cho quyết định.
- **Làm cho tin xấu được an toàn.** Nếu báo cáo trung thực bị trừng phạt, dữ liệu sẽ nói dối.

## Định nghĩa chỉ số

Các chỉ số dưới đây không phải thước đo dịch vụ hay phân phối. Chúng là thước đo sức khỏe của chính một thực hành chỉ số, và chúng cho thấy dạng mà mọi bảng chỉ số trong cuốn sách này đều có. Ba chỉ số đầu là các ví dụ rào chắn xuất hiện xuyên suốt các chủ đề sau.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ phủ rào chắn | Tỷ lệ các chỉ số được báo cáo có một rào chắn có tên và được theo dõi | số chỉ số có rào chắn / số chỉ số được báo cáo | phần trăm | Sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số) | Đo lường và báo cáo; cải tiến liên tục | Buổi nhìn lại về các thỏa thuận làm việc | Hằng quý |
| Tỷ lệ mở lại | Tỷ lệ phiếu hoặc hạng mục công việc đã đóng được mở lại trong một khoảng thời gian nêu rõ | số hạng mục mở lại trong 14 ngày / số hạng mục đóng trong kỳ | phần trăm | Lịch sử trạng thái của công cụ ITSM hoặc trình theo dõi vấn đề | Quản lý sự cố; quản lý vấn đề | Định nghĩa hoàn thành; lỗi lọt ra ngoài | Hằng tháng |
| Số lần đổi định nghĩa | Số thay đổi đối với định nghĩa chỉ số hoặc quy trình trạng thái trong một kỳ, kèm lý do | số mục trong nhật ký thay đổi định nghĩa | số đếm | Nhật ký thay đổi của sổ đăng ký chỉ số | Đo lường và báo cáo | Thỏa thuận làm việc | Hằng quý |
| Tỷ lệ sử dụng chỉ số | Tỷ lệ các chỉ số được báo cáo đã được trích dẫn trong một quyết định trong kỳ | số chỉ số được trích dẫn trong một quyết định được ghi lại / số chỉ số được báo cáo | phần trăm | Nhật ký quyết định hoặc ghi chú rà soát | Cải tiến liên tục | Hành động từ buổi nhìn lại | Hằng quý |
| Khoảng cách cảm nhận | Chênh lệch giữa kết quả khảo sát mức hài lòng và mức dịch vụ suy ra từ phiếu cho cùng một dịch vụ | tỷ lệ suy ra từ khảo sát trừ tỷ lệ suy ra từ trình theo dõi | điểm phần trăm | Công cụ khảo sát và công cụ ITSM | Quản lý mức dịch vụ | Phản hồi từ buổi rà soát cùng các bên liên quan | Hằng quý |

Tỷ lệ mở lại chỉ đếm những hạng mục được mở lại trong cùng một bản ghi. Một hạng mục đóng rồi được nêu lại thành phiếu mới sẽ không xuất hiện. Một phần ý nghĩa của mục kế tiếp là rào chắn cần có rào chắn riêng của nó, chẳng hạn liên kết các phiếu trùng lặp với phiếu gốc.

## Khuyến nghị

### Thiết kế hệ thống đo lường

**1. Bắt đầu từ một câu hỏi, không phải một con số.** Trước khi thêm một chỉ số, hãy viết câu hỏi mà nó trả lời và quyết định mà nó cung cấp thông tin. "Người dùng có được giải quyết vấn đề ngay lần đầu không?" là một câu hỏi. "Giảm thời gian xử lý trung bình" là một mục tiêu giả làm câu hỏi. Một chỉ số không gắn với quyết định nào là ứng viên cho việc nghỉ hưu.

**2. Chọn các chỉ số có sức căng với nhau.** Một con số đơn lẻ mời gọi tối ưu hóa quá mức, nên hãy chọn những cặp kéo ngược nhau: thời gian chờ với tỷ lệ thay đổi thất bại, tốc độ đóng phiếu với tỷ lệ mở lại, tính sẵn sàng với trải nghiệm do người dùng báo cáo. Cặp đó không cần là một công thức. Nó cần được cho thấy cùng nhau, trên cùng một trang.

**3. Định nghĩa các đồng hồ và các trường hợp loại trừ.** Với mọi thước đo thời gian, hãy ghi rõ đồng hồ bắt đầu ở đâu, dừng ở đâu và khi nào được phép tạm dừng. Phần lớn việc lợi dụng trong dữ liệu dịch vụ nằm ở các ranh giới này: một phiếu chuyển sang "chờ khách hàng" dừng đồng hồ mức dịch vụ, và một thay đổi chỉ được ghi sau khi đã áp dụng thoát khỏi thời gian chờ thay đổi. Nếu có trạng thái tạm dừng, hãy báo cáo mức độ thường xuyên nó được dùng.

**4. Dùng phân phối và bách phân vị.** Trung bình thời gian giải quyết phiếu có thể cải thiện vì một vài phiếu dễ được đóng nhanh trong khi các phiếu khó cứ già đi. Hãy cho thấy trung vị và một bách phân vị cao (ví dụ thứ 85 hoặc thứ 95), và cho thấy các hạng mục mở lâu nhất. Tuổi của hạng mục công việc và phiếu mở lâu nhất khó bị lợi dụng nếu không thực sự hoàn tất công việc (xem chủ đề 2.1, Các thước đo dòng chảy).

**5. Giữ một sổ đăng ký chỉ số.** Một sổ đăng ký ngắn liệt kê từng chỉ số, người sở hữu, định nghĩa, nguồn dữ liệu, vectơ lợi dụng, rào chắn và ngày rà soát gần nhất. Nó nhàm chán và nó là thói quen hiệu quả nhất trong chủ đề này (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

### Giới thiệu chỉ số một cách an toàn

**6. Cho đội xem trước, và cho xem dữ liệu thô.** Các đội thấy con số trước lãnh đạo sẵn sàng hơn trong việc chất vấn độ chính xác của chúng. Hãy bắt đầu từ các hạng mục bên dưới, không phải từ biểu đồ. Nếu dữ liệu không chịu nổi một cuộc trò chuyện với những người tạo ra nó, nó không thể chịu nổi một bảng điều khiển.

**7. Tách góc nhìn học tập khỏi góc nhìn giải trình.** Góc nhìn làm việc của một đội có thể chứa nhiều thước đo, kể cả những cái xấu xí. Những gì đến với lãnh đạo nên là một tập nhỏ, ổn định. Nếu lãnh đạo đòi góc nhìn làm việc, hãy chờ góc nhìn làm việc thay đổi để trông đẹp hơn.

**8. Không gắn lương, kỷ luật hay xếp hạng cá nhân với một chỉ số.** Có thể yêu cầu các đội giải thích các con số của mình và cải thiện chúng. Mục tiêu cá nhân đặt trên số phiếu, điểm câu chuyện hoặc số lần commit dạy con người tối đa hóa con số đếm. Cách tiếp cận [chỉ số hiệu suất chính](https://en.wikipedia.org/wiki/Key_performance_indicator) có thể hiệu quả khi các chỉ báo được chọn cho cả hệ thống và được rà soát thường xuyên. Nó thất bại khi trở thành thẻ điểm cho từng người.

**9. Làm cho báo cáo trung thực được an toàn.** [An toàn tâm lý](https://en.wikipedia.org/wiki/Psychological_safety) là niềm tin rằng bạn sẽ không bị trừng phạt khi lên tiếng về một sai sót hay một mối lo. Một buổi rà soát sự cố không đổ lỗi là một ví dụ về nó trong thực tế. Không có nó, số sự cố giảm vì lý do sai: con người ngừng báo cáo.

### Giữ cho hệ thống trung thực

**10. Tiến hành một buổi rà soát lợi dụng.** Mỗi quý một lần, hãy hỏi đội một câu về từng chỉ số được báo cáo: "Nếu chúng ta muốn con số này trông đẹp mà không giúp ích cho ai, chúng ta sẽ làm gì?" Ghi các câu trả lời ra, rồi kiểm tra xem rào chắn có bắt được từng cái không. Bài tập này rẻ, tạo ra những ý tưởng hữu ích và chuyển cuộc trò chuyện từ nghi ngờ sang thiết kế.

**11. Kiểm toán các định nghĩa so với thực tế.** Lấy mẫu một số ít hạng mục đã đóng và đọc chúng. Chúng có thực sự được giải quyết không? Mức ưu tiên có trung thực không? Trạng thái "chờ khách hàng" có nghĩa là khách hàng thực sự đang được chờ không? Một mẫu mười lăm phút thường cho bạn biết nhiều hơn một tháng bảng điều khiển.

**12. Cho chỉ số nghỉ hưu.** Một chỉ số không được trích dẫn trong quyết định nào suốt hai quý là chi phí chung. Hãy gỡ nó đi, và nói rõ điều đó. Ít chỉ số mà mỗi cái được tin cậy thắng nhiều chỉ số.

## Vectơ lợi dụng và rào chắn

Bảng này bao quát các chỉ số trong phần trên. Các chủ đề sau áp dụng cùng dạng này cho các thước đo dịch vụ và phân phối.

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ phủ rào chắn | Nêu tên một rào chắn trên giấy mà không bao giờ theo dõi nó | Rà soát sổ đăng ký: một rào chắn chỉ được tính nếu giá trị mới nhất của nó xuất hiện trên cùng bảng điều khiển |
| Tỷ lệ mở lại | Đóng phiếu rồi nêu phiếu mới thay vì mở lại; kéo dài khoảng thời gian cho đến khi các lần mở lại rơi ra ngoài | Tỷ lệ phiếu trùng lặp và phiếu được liên kết; tái diễn cùng một nguyên nhân giữa các phiếu |
| Số lần đổi định nghĩa | Không ghi lại thay đổi để số đếm thấp; đổi quy trình mà không nói với ai | So sánh mô hình trạng thái trong công cụ với sổ đăng ký ở mỗi lần rà soát |
| Tỷ lệ sử dụng chỉ số | Trích dẫn mọi chỉ số trong nhật ký quyết định cho có lệ | Hỏi điều gì đã thay đổi nhờ lần trích dẫn; lấy mẫu nhật ký |
| Khoảng cách cảm nhận | Chỉ khảo sát người dùng hài lòng; lái khảo sát vào những thời điểm sau một tương tác tốt | Tỷ lệ phản hồi khảo sát và cơ cấu người trả lời; đọc to các bình luận mở trong buổi rà soát |

Một kết quả đọc lành mạnh là một thực hành chỉ số có thay đổi: định nghĩa được điều chỉnh vì những lý do được ghi lại, chỉ số đến rồi đi, và đội kể được một câu chuyện về một quyết định mà một con số đã thay đổi.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Đo mà không có mục tiêu | Giảm việc lợi dụng; mời gọi thảo luận trung thực | Có thể trôi thành báo cáo mà không ai hành động |
| Mục tiêu có rào chắn | Cho phương hướng và tính cấp bách; cặp đôi hạn chế việc lợi dụng | Tốn công duy trì hơn; rào chắn cũng bị lợi dụng theo thời gian |
| Chỉ số cá nhân | Dễ hiểu; có vẻ công bằng | Làm hỏng dữ liệu; làm hại sự cộng tác |
| Chỉ số đội và dịch vụ | Khớp với cách công việc thực sự diễn ra | Khó quy trách nhiệm hơn; che giấu nhu cầu hỗ trợ của cá nhân |
| Ít chỉ số | Dễ tin và dễ nhớ hơn | Điểm mù; có thể bỏ sót vấn đề mới |
| Nhiều chỉ số | Phủ rộng | Làm loãng sự chú ý; mỗi chỉ số được quản trị yếu ớt |

Câu trả lời dạng văn xuôi là dùng mục tiêu dè sẻn, cho những điều kiện được hiểu rõ và khó lợi dụng, như một mục tiêu mức dịch vụ mà người dùng đã yêu cầu. Ngay cả khi đó, hãy ưu tiên gắn mục tiêu với dịch vụ, không phải với đánh giá của một người. Mục đích không phải là loại bỏ con số khỏi việc ra quyết định. Đó là giữ các con số gắn với thực tế bằng cách giữ những người tạo ra chúng đứng về phía bạn.

## Câu hỏi để thảo luận với đội nhóm

**1. Con số nào trên bảng điều khiển hiện tại của chúng ta mà chúng ta sẽ bị cám dỗ nhất cải thiện mà không cải thiện công việc?**
Hãy bắt đầu với chỉ số mà mọi người nhìn đầu tiên, rồi chuyển sang chỉ số mà lãnh đạo hỏi tới. Hãy xin những động tác cụ thể: chúng ta sẽ làm gì với dữ liệu nếu chịu áp lực? Người điều phối nên ghi lại từng câu trả lời mà không phán xét, vì danh sách đó trở thành các vectơ lợi dụng cho sổ đăng ký. Kết thúc bằng cách hỏi rào chắn của chúng ta bắt được những động tác nào và bỏ sót những động tác nào.

**2. Đồng hồ bắt đầu và dừng ở đâu trong thước đo thời gian quan trọng nhất của chúng ta, và ai quyết định điều đó?**
Hãy yêu cầu nhóm vẽ vòng đời của phiếu hoặc hạng mục công việc lên bảng trắng và đánh dấu từng trạng thái. Tìm những trạng thái nơi thời gian có thể biến mất, như chờ khách hàng hoặc tạm giữ. Đếm xem mỗi trạng thái được dùng thường xuyên đến đâu và bởi ai. Cuộc trò chuyện thường lộ ra rằng hai đội dùng cùng một từ theo cách khác nhau.

**3. Lần gần nhất một con số khiến chúng ta làm điều không hữu ích là khi nào?**
Hãy mời mọi người kể chuyện, không đổ lỗi. Các ví dụ phổ biến là đóng phiếu trước khi xác minh, tách thay đổi ra để tăng số lần triển khai, hoặc phân loại lại một sự cố để tránh báo cáo vi phạm. Người điều phối nên hỏi người đó đang cố bảo vệ điều gì. Câu trả lời thường cho thấy động cơ cần được thay đổi.

**4. Ai thấy các chỉ số của chúng ta, và chúng xảy ra chuyện gì ở đó?**
Truy từng chỉ số từ đội đến khán giả của nó. Hỏi liệu có phiên bản nào của nó được dùng để so sánh các đội hay con người không. Hỏi đội sẽ cho xem gì nếu khán giả khác đi. Nơi nào đội sẽ đổi các con số họ cho xem, nơi đó có một khoảng cách lòng tin cần nói chuyện với khán giả.

**5. Rào chắn cho từng chỉ số trong năm chỉ số quan trọng nhất của chúng ta là gì, và nó có nằm trên cùng trang không?**
Lập một danh sách hai cột trên bảng. Nếu một chỉ số không có rào chắn, hãy thống nhất một ứng viên và một người chịu trách nhiệm để thử nó trong một quý. Nếu rào chắn tồn tại nhưng hiếm khi được xem, hãy thảo luận vì sao. Tránh chọn một rào chắn chỉ là nghịch đảo của chỉ số, vì điều đó không cho bạn biết điều gì mới.

**6. Chúng ta nên cho chỉ số nào nghỉ hưu trong quý này?**
Hãy xin bằng chứng: lần cuối nó được dùng trong một quyết định là khi nào? Nếu không ai nhớ, hãy cho nó nghỉ hưu thử trong một thời gian và xem có ai để ý không. Người điều phối nên coi việc nghỉ hưu là một sự kiện bình thường. Các đội không bao giờ bỏ chỉ số nào cuối cùng có những báo cáo mà không ai tin hay đọc.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối gặp việc lợi dụng qua vận tốc, thông lượng và số lần triển khai. [Vận tốc](https://en.wikipedia.org/wiki/Velocity_(software_development)) nói riêng là một công cụ lập kế hoạch cho một đội, không phải thước đo năng suất, và so sánh các đội bằng nó dẫn đến ước lượng bị thổi phồng. Các đội phân phối nên giữ các thước đo làm việc cho riêng mình, công bố ra ngoài một tập nhỏ, và ghép mỗi thước đo tốc độ với một thước đo chất lượng (xem chủ đề 2.5, Chỉ số dự báo và lập kế hoạch phân phối).

### Đội dịch vụ và vận hành

Các đội dịch vụ gặp việc lợi dụng qua thời gian giải quyết, giải quyết ngay lần liên hệ đầu và mức tuân thủ mức dịch vụ. Các trạng thái dừng đồng hồ và trường mức ưu tiên là những điểm trôi thường gặp. Các đội vận hành nên kiểm toán các chuyển trạng thái thường xuyên, báo cáo việc dùng các trạng thái tạm dừng, và theo dõi liên hệ lặp lại và tỷ lệ mở lại cạnh tốc độ. Các đội trực ca nên đặc biệt cẩn thận với các thước đo thưởng cho việc không bị gọi, vì chúng trừng phạt việc cảnh báo trung thực (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

### Lãnh đạo và quản trị

Lãnh đạo đặt ra các động cơ, thường mà không có ý định. Một câu hỏi đặt ra trong buổi rà soát ("vì sao cái này màu đỏ?") dạy đội điều cần giấu. Lãnh đạo nên hỏi đội đã học được gì từ một con số, giữ bảng xếp hạng ra khỏi phòng họp, bảo vệ báo cáo thẳng thắn, và tài trợ cho công việc cải tiến mà một con số xấu bộc lộ. Các cơ quan quản trị nên chờ đợi sổ đăng ký chỉ số và buổi rà soát lợi dụng như một phần của báo cáo, và coi một thay đổi có định nghĩa rõ trong một chỉ số là chuyện bình thường.

### Khách hàng và người dùng

Người dùng trải nghiệm hậu quả của việc lợi dụng như một dịch vụ trông tốt trên giấy nhưng cảm thấy tệ trong thực tế: một phiếu được đóng mà chưa được sửa, một sự cố ngừng hoạt động bị gắn nhãn có kế hoạch, một khảo sát chưa bao giờ đến tay họ. Người dùng cũng là rào chắn tốt nhất. Phản hồi của họ, dưới dạng khảo sát, khiếu nại và bình luận, nên nằm cạnh các con số vận hành, và nên được đọc đầy đủ, không bị rút gọn thành một điểm số (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực vận hành một bàn dịch vụ và nhiều đội sản phẩm xây dựng các ứng dụng lâm sàng. Các con số trong ví dụ này chỉ mang tính minh họa.

Lãnh đạo đặt mục tiêu đóng 90 phần trăm sự cố trong thời gian đã thỏa thuận. Trong vòng hai tháng bảng điều khiển cho thấy 94 phần trăm. Trưởng vận hành dịch vụ hài lòng nhưng bất an, vì nhân viên lâm sàng phàn nàn nhiều hơn chứ không ít đi. Chị yêu cầu đội tiến hành một buổi rà soát lợi dụng cho chỉ số này.

Đội phác họa vòng đời phiếu. Họ thấy các phiếu chuyển sang "chờ khách hàng" trung bình hai lần mỗi phiếu, và thời gian ở trạng thái đó đã tăng. Một mẫu 30 phiếu đã đóng cho thấy 7 phiếu bị đóng với ghi chú "không có phản hồi từ người dùng" sau một lần gọi điện. Họ cũng thấy tỷ lệ mở lại đứng yên chỉ vì người dùng được bảo "hãy nêu một phiếu mới" khi vấn đề quay lại.

Đội thực hiện ba thay đổi. Thứ nhất, biểu đồ thời gian giải quyết giờ cho thấy trung vị, bách phân vị thứ 90 và phiếu mở lâu nhất, cùng với tỷ lệ thời gian ở các trạng thái tạm dừng. Thứ hai, bảng điều khiển thêm tỷ lệ liên hệ lặp lại, được định nghĩa là tỷ lệ phiếu mới từ cùng người dùng về cùng dịch vụ trong vòng 14 ngày. Thứ ba, một khảo sát ngắn được gửi đến một mẫu ngẫu nhiên các phiếu đã đóng, và các bình luận mở của nó được đọc trong buổi rà soát hằng tháng.

Ba tháng sau, con số tuân thủ tiêu đề giảm xuống 88 phần trăm, nghe như tin xấu. Tuy nhiên tỷ lệ liên hệ lặp lại đã giảm, và các bình luận khảo sát về vấn đề chưa được giải quyết đã hiếm hơn. Trưởng vận hành nói với lãnh đạo rằng con số cũ đã bị thổi phồng và bức tranh mới trung thực hơn, và chị đề nghị họ chấp nhận một mục tiêu mức dịch vụ dựa trên định nghĩa đã chỉnh. Quyết định, được ghi trong nhật ký quyết định, là đặt mục tiêu sau thêm một quý dữ liệu thay vì ngay lập tức.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Các vòng phản hồi ngắn cho phép một đội nhận ra việc lợi dụng sớm. Một thực hành phù hợp là đọc một vài hạng mục thô ở mỗi buổi rà soát định kỳ và so sánh chúng với con số tiêu đề, với các bên liên quan có mặt trong phòng. Điều cần lưu ý là một vòng thưởng cho tốc độ báo cáo tự nó có thể trở thành mục tiêu, nên hãy giữ mục đích của mỗi buổi rà soát là học.

### AI

AI thay đổi diện mạo của việc lợi dụng. Một mô hình có thể tạo hàng loạt ghi chú giải quyết, cập nhật trạng thái hoặc phân loại phiếu nghe hợp lý, nên một chỉ số đếm những sản phẩm đó có thể được thỏa mãn mà không có công việc thật nào. Hãy ghép mọi số đếm chịu ảnh hưởng của AI với một lần kiểm tra chất lượng lấy mẫu do con người thực hiện, và báo cáo tỷ lệ đầu ra AI mà một người đã sửa. Điều cần lưu ý là tỷ lệ sửa thấp có thể có nghĩa là bản nháp tốt hoặc rà soát cẩu thả, nên hãy đọc cả hai cùng nhau.

### Tự động hóa

Thu thập tự động loại bỏ các chỉnh sửa thủ công đối với dữ liệu, điều này đóng một số con đường lợi dụng. Hãy tự động hóa cả rào chắn lẫn chỉ số, để cả hai cùng xuất hiện trên một trang. Điều cần lưu ý là con người sau đó lợi dụng các đầu vào mà tự động hóa đọc, như loại phiếu hoặc trạng thái tạm dừng, nên hãy kiểm toán các định nghĩa so với một mẫu hạng mục thực.

### Phân tích

Phân tích có thể bộc lộ việc lợi dụng qua các phân phối kỳ lạ, như một đỉnh phiếu đóng ngay trước hạn báo cáo, hoặc một cụm đúng ở giá trị mục tiêu. Hãy dùng những mẫu hình đó để mở một cuộc trò chuyện, không phải làm bằng chứng của ý đồ xấu. Điều cần lưu ý là mọi quy tắc phát hiện sẽ bị biết đến rồi bị tránh, nên hãy luân phiên các rào chắn và giữ một con người trong buổi rà soát.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Các đội nhỏ có ít chỉ số và lòng tin mạnh, điều này có lợi. Mối nguy là nhập về một bảng điều khiển doanh nghiệp lớn quá sớm. Hãy bắt đầu với hai hoặc ba thước đo mà những người sáng lập thực sự dùng, ghi lại định nghĩa của chúng và giữ chúng xa các cuộc trò chuyện về hiệu suất cá nhân.

**Doanh nghiệp nhỏ.** Nguồn lực mỏng, và người điều hành CNTT thường báo cáo trực tiếp cho chủ doanh nghiệp. Một lời phàn nàn của một khách hàng có thể nặng hơn bất kỳ bảng điều khiển nào. Hãy giữ tập nhỏ, ưu tiên phản hồi trực tiếp từ người dùng, và xử lý các báo cáo do nhà cung cấp đưa ra một cách thận trọng, vì nhà cung cấp có động cơ riêng.

**Doanh nghiệp lớn.** Quy mô nhân lên cả nhu cầu về các con số so sánh được lẫn áp lực lợi dụng chúng. Hãy dùng một tập chuẩn nhỏ với định nghĩa bằng văn bản, giữ góc nhìn làm việc của đội tách khỏi các bản tổng hợp, và tránh so sánh các đội làm việc trên những loại dịch vụ khác nhau. Một sổ đăng ký chỉ số và một nhịp rà soát trở nên thiết yếu.

**Chính phủ và khu vực công.** Nghĩa vụ báo cáo và các mức dịch vụ theo hợp đồng có thể khiến một số mục tiêu không thể thương lượng. Hãy coi chúng là đầu vào thiết kế: đáp ứng chúng, cho thấy rào chắn bên cạnh và báo cáo các định nghĩa được dùng. Trách nhiệm giải trình trước công chúng làm tăng cái giá của việc giấu tin xấu, nên hãy xây các kênh nội bộ an toàn và cởi mở về các định nghĩa đã chỉnh (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí áp dụng chủ đề này chủ yếu là thời gian: vài giờ để viết định nghĩa và một sổ đăng ký, một buổi rà soát lợi dụng ngắn hằng quý, và thỉnh thoảng lấy mẫu các hạng mục đã đóng. Chi phí công cụ rất ít. Chi phí lớn hơn là sự chú ý của lãnh đạo, vì kỷ luật này chỉ hiệu quả nếu những người đọc các con số hành xử nhất quán.

Lợi tức đến từ lãng phí tránh được và quyết định tốt hơn. Các quyết định dựa trên dữ liệu bị làm hỏng có thể hướng đầu tư vào sai vấn đề, chẳng hạn bố trí nhân sự cho bàn dịch vụ để đóng phiếu nhanh hơn trong khi vấn đề thật là các liên hệ lặp lại do một lỗi. Việc lợi dụng cũng bào mòn lòng tin giữa đội và những người dựa vào nó, điều khó hàn gắn. Hãy mô tả lợi ích bằng mẫu hình, không bằng một tỷ lệ phần trăm bịa ra: ít lần đảo ngược quyết định hơn, ít bất ngờ trong kiểm toán hơn, và sự đồng thuận tốt hơn giữa các con số vận hành và trải nghiệm người dùng. Nếu bạn cần số liệu cho một hồ sơ kinh doanh, hãy đo đường cơ sở của riêng bạn, như khoảng cách cảm nhận và tỷ lệ liên hệ lặp lại, trước và sau thay đổi.

## Phản mẫu và cạm bẫy

- **Mục tiêu không có rào chắn.** Một mục tiêu đơn độc sẽ được đạt bằng bất kỳ con đường nào có sẵn. Hãy thêm một thước đo ghép đôi trước khi công bố mục tiêu.
- **Bảng xếp hạng con người hoặc đội.** Chúng mời gọi việc lợi dụng và làm nản lòng việc giúp đỡ giữa các đội. Hãy cho mỗi đội thấy xu hướng của riêng nó, kèm bối cảnh.
- **Chỉ số như hình phạt.** Một con số đỏ mang lại sự đổ lỗi sẽ chuyển sang xanh bằng cách che giấu. Hãy hỏi đội cần gì.
- **Trung bình của dữ liệu lệch.** Chúng giấu cái đuôi nơi người dùng chịu khổ. Hãy dùng bách phân vị và tuổi của hạng mục mở lâu nhất.
- **Đổi định nghĩa trong im lặng.** Đường xu hướng trở nên vô nghĩa. Hãy ghi lại mọi thay đổi cùng lý do và đánh dấu nó trên biểu đồ.
- **Coi rào chắn là mục tiêu mới.** Khi đó rào chắn bị lợi dụng. Hãy rà soát cả hai cùng nhau và luân phiên các rào chắn khi chúng mất sức.
- **Chỉ số phù phiếm.** Các số đếm chỉ đi lên, như phiếu đã xử lý hay commit đã làm, không nói gì về kết quả. Hãy ưu tiên các thước đo có thể giảm cũng như tăng.
- **Bỏ qua bằng chứng định tính.** Chỉ con số không thể cho thấy rằng một phiếu đã đóng cảm giác chưa được giải quyết. Hãy đọc các bình luận.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | Không chính thức; mỗi người đếm khác nhau | Được viết cho một số chỉ số | Một định nghĩa bằng văn bản cho mỗi chỉ số, kèm đồng hồ và các trường hợp loại trừ | Định nghĩa được rà soát và thay đổi được ghi cùng lý do | Định nghĩa được căn chỉnh giữa các đội và nhà cung cấp, được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Rào chắn | Không có | Được nêu tên cho một số chỉ số | Mọi chỉ số được báo cáo có một rào chắn trên cùng trang | Rào chắn được rà soát về việc lợi dụng mỗi quý | Rào chắn luân phiên và được đồng thiết kế với những người được đo |
| Sử dụng và an toàn | Con số được dùng để quy trách nhiệm | Đội thấy các con số của chính mình | Đội thấy dữ liệu trước; không xếp hạng cá nhân | Lãnh đạo hỏi những câu hỏi học tập; báo cáo được an toàn | Khách hàng và nhà cung cấp chia sẻ cái nhìn thẳng thắn về các con số |

## Danh sách kiểm tra

- [ ] Mọi chỉ số được báo cáo có một câu hỏi bằng văn bản và một quyết định mà nó cung cấp thông tin.
- [ ] Mọi thước đo thời gian có quy tắc bắt đầu, dừng và tạm dừng bằng văn bản.
- [ ] Mọi chỉ số được báo cáo có một rào chắn có tên hiển thị bên cạnh.
- [ ] Các thước đo thời gian cho thấy bách phân vị và tuổi của hạng mục mở lâu nhất.
- [ ] Một sổ đăng ký chỉ số tồn tại với người sở hữu, định nghĩa, vectơ lợi dụng, rào chắn và ngày rà soát.
- [ ] Đội thấy dữ liệu của mình trước khi lãnh đạo thấy.
- [ ] Không có xếp hạng, lương hay kỷ luật cá nhân nào gắn với một chỉ số.
- [ ] Một buổi rà soát lợi dụng hằng quý nằm trong lịch.
- [ ] Một mẫu hạng mục đã đóng được đọc để kiểm tra tính trung thực mỗi quý.
- [ ] Ít nhất một chỉ số đã được cho nghỉ hưu hoặc thiết kế lại trong năm qua.

## Lời nhắc AI

**Tiến hành một buổi rà soát lợi dụng cho một chỉ số.**

```text
I lead [team name], which runs [type of service or delivery work]. We report
this metric: [metric name], defined as [definition including where the clock
starts and stops]. It is used by [audience] to [decision or target]. Our data
comes from [tool].

List the realistic ways this metric could be made to look better without
improving the service for users. For each, suggest a guardrail metric or
practice that would reveal it and say what the guardrail's own gaming vector
would be. Do not invent benchmark values. List your assumptions and anything you
could not determine from what I gave you.
```

**Soạn một mục sổ đăng ký chỉ số.**

```text
Draft a metric register entry for [metric name] for [team name]. Fields: question
it answers, decision it informs, definition, formula, unit, data source, owner
role, review cadence, gaming vector, guardrail, and how users or customers
would notice if it were wrong. Base the entry only on this description:
[describe the metric and current process]. Mark every field you had to assume,
and list questions I should answer to complete the entry.
```

**Kiểm toán một mẫu phiếu đã đóng.**

```text
Here are [number] closed tickets from [service], with fields [list fields] and
the resolution notes pasted below. Review each for signs that the ticket was
closed without the problem being solved, that a pause state was used to stop
the clock, or that priority or category looks adjusted. Report patterns, not
individuals. Do not guess at causes not supported by the text. Tell me what you
could not judge from the data and what additional fields would help.

[paste tickets, with personal data removed]
```

**Lên kế hoạch giới thiệu một chỉ số một cách an toàn.**

```text
We plan to introduce [metric] to [audience]. Current context: [team size,
culture, previous experience with metrics]. Propose a rollout plan covering who
sees the data first, how we explain the purpose, what we will not use it for,
which guardrail we show with it, and when we review whether it is working.
Flag risks of gaming or fear and suggest how to reduce them. List your
assumptions and do not invent statistics.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề và rào chắn ghép đôi cho một chỉ số bạn sắp giới thiệu.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chủ đề chỉ số mới mang vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Một thước đo trở thành mục tiêu thì không còn mô tả công việc, nên hãy dùng con số để đặt câu hỏi.
- Lợi dụng là phản ứng bình thường trước áp lực và nỗi sợ, và nó giảm đi nhờ thay đổi điều kiện, không phải nhờ kiểm soát.
- Mọi chỉ số cần một định nghĩa bằng văn bản kèm các đồng hồ và một rào chắn hiển thị bên cạnh.
- Ưu tiên bách phân vị và tuổi của hạng mục mở lâu nhất hơn các giá trị trung bình.
- Mô tả đội nhóm và dịch vụ, không bao giờ xếp hạng cá nhân, và để đội thấy dữ liệu của mình trước.
- Rà soát việc lợi dụng mỗi quý và cho nghỉ hưu các chỉ số không còn cung cấp thông tin cho quyết định.

## Tài liệu tham khảo và đọc thêm

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
