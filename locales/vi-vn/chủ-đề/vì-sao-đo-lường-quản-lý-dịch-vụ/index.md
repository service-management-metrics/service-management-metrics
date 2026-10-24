# Vì sao đo lường quản lý dịch vụ

**Các đội xây dựng và vận hành dịch vụ cần một tập nhỏ những con số trung thực để biết công việc của mình có giúp ích cho người dùng và có đang tốt lên hay không, và linh hoạt cùng ITIL mỗi bên cung cấp một nửa khác nhau của bức tranh ấy.**

## Tổng quan và động lực

Mọi đội xây dựng và vận hành một dịch vụ đều đưa ra quyết định suốt cả ngày: làm gì tiếp theo, một bản phát hành có an toàn không, bàn dịch vụ có cần thêm một người không, một sự cố ngừng hoạt động chỉ là chuyện một lần hay là một mẫu hình. Không có đo lường, các quyết định ấy dựa vào trí nhớ, giai thoại và ý kiến của người nói sau cùng. Với đo lường sai, chúng có thể còn tệ hơn, vì một con số mang một uy quyền mà ý kiến không có. Chủ đề này giải thích vì sao đo lường đáng công sức, mỗi truyền thống đóng góp gì, và làm sai thì phải trả giá thế nào.

Hai truyền thống gặp nhau trong cuốn sách này. [Phát triển phần mềm linh hoạt](https://en.wikipedia.org/wiki/Agile_software_development) là một tập giá trị và thực hành, được nêu trong Tuyên ngôn Agile năm 2001, ưu tiên phần mềm chạy được, sự cộng tác chặt chẽ với khách hàng và khả năng phản ứng với thay đổi. Thói quen đo lường của nó mang tính thực nghiệm và cục bộ: một đội tự kiểm tra dòng chảy của mình, nhìn vào những gì đã giao và điều chỉnh. [ITIL](https://en.wikipedia.org/wiki/ITIL), ban đầu là Thư viện Hạ tầng Công nghệ Thông tin, là một khối hướng dẫn cho [quản lý dịch vụ CNTT](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), thực hành thiết kế, cung cấp và cải tiến các dịch vụ CNTT. Thói quen đo lường của nó hướng đến dịch vụ và được chia sẻ: các mức dịch vụ đã thỏa thuận, một danh mục dịch vụ (cách viết riêng của ITIL là "service catalogue") và một kỷ luật cải tiến liên tục. Trong ITIL 4, ấn bản năm 2019 của khung này, đo lường và báo cáo là một trong những thực hành quản lý chung, và cải tiến liên tục vừa là một thực hành vừa là một nguyên tắc chỉ dẫn. Hãy kiểm tra các ấn phẩm hiện hành của chủ sở hữu khung trước khi dựa vào chi tiết phiên bản, vì khung này vẫn tiếp tục phát triển.

Hai góc nhìn khác nhau theo những cách hữu ích. Linh hoạt hỏi "chúng ta có đang xây đúng thứ cần xây không, và công việc chảy trơn tru đến đâu?" ITIL hỏi "dịch vụ có đáp ứng nhu cầu của những người dùng nó không, và nó có đáng tin cậy, hỗ trợ được và chi trả được không?" Một đội chỉ đo dòng chảy có thể giao nhanh vào một dịch vụ mà người dùng thấy không đáng tin. Một đội chỉ đo mức dịch vụ có thể đạt mọi mục tiêu trong khi giao thay đổi chậm đến mức dịch vụ không còn phù hợp. Phong trào [DevOps](https://en.wikipedia.org/wiki/DevOps) lớn lên từ nhận xét rằng xây dựng và vận hành là một hệ thống duy nhất, nên các con số mô tả nó cần được đọc cùng nhau. [Kỹ thuật độ tin cậy của trang](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), kỷ luật mà Google mô tả trong các cuốn sách đã xuất bản của mình, bổ sung một mối liên kết tường minh giữa các mục tiêu độ tin cậy và nhịp thay đổi.

Ba thuật ngữ lặp lại xuyên suốt cuốn sách. Một **thước đo** mô tả điều gì đó về công việc hoặc dịch vụ. Một **chỉ số** là thước đo có công thức, đơn vị và nguồn dữ liệu được định nghĩa, để hai người tính ra cùng một đáp án. Một **rào chắn** là một thước đo hoặc thực hành thứ hai, chọn trước, sẽ dịch chuyển nếu thước đo thứ nhất bị lợi dụng. Lời cảnh báo đứng sau các rào chắn là [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): khi một thước đo trở thành mục tiêu, con người bắt đầu lái con số thay vì lái công việc (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

### Đo lường để làm gì

Đo lường xứng đáng có chỗ đứng khi nó làm một trong bốn việc.

- **Thấy.** Làm công việc vô hình trở nên hữu hình: hàng đợi không ai nhìn, mẫu sự cố trải qua ba đội, thay đổi chờ chín ngày để có một chỗ.
- **Quyết định.** Cung cấp thông tin cho lựa chọn giữa hai phương án, chẳng hạn tự động hóa một loại yêu cầu hay sửa lỗi gây ra nó.
- **Học.** Kiểm chứng một niềm tin. Nếu đội nghĩ một thực hành rà soát mới sẽ giảm làm lại, một con số có thể cho biết nó có giảm thật không.
- **Giải trình.** Đưa cho người dùng, khách hàng và lãnh đạo một bản giải trình trung thực về những gì dịch vụ cung cấp, để lòng tin dựa trên bằng chứng.

Một con số không làm việc nào trong bốn việc này là chi phí chung. Các chủ đề sau lặp lại phép thử này cho từng họ chỉ số.

### Cái giá của việc không đo gì

Một đội không đo gì không phải là không có con số. Nó chạy bằng những con số ngầm: lời phàn nàn to nhất, sự cố ngừng hoạt động gần nhất, cảm nhận của người quản lý về việc mọi người trông bận ra sao. Hai cái giá theo sau.

- **Phản hồi chậm.** Những vấn đề mà một xu hướng đã cho thấy sớm lại đến như bất ngờ. Số lần liên hệ lặp lại tăng dần trông như xui xẻo cho đến khi thành khủng hoảng.
- **Không có cơ sở để cải tiến.** Một đội không thể biết một thay đổi có giúp ích không, nên không thể học được thay đổi nào cần lặp lại.

### Cái giá của việc đo sai thứ

Đo sai thứ thường tệ hơn không đo gì, vì nó hướng nỗ lực đi với sự tự tin giả. Số phiếu đã đóng, số dòng mã, số điểm câu chuyện đã hoàn thành và số giờ đã ghi đều dễ thu thập và dễ vẽ biểu đồ, và mỗi thứ là thước đo hoạt động, không phải giá trị cho người dùng. Nghiên cứu đứng sau khung SPACE (Forsgren và cộng sự, 2021) lập luận rằng năng suất không thể được nắm bắt bằng một chiều, và các số đếm hoạt động dùng riêng lẻ gây hiểu lầm.

## Nguyên tắc chính

- **Đo để quyết định.** Mỗi chỉ số trả lời một câu hỏi bằng văn bản và cung cấp thông tin cho một lựa chọn có tên. Nếu không ai nói được là lựa chọn nào, hãy cho nó nghỉ hưu.
- **Gắn hai góc nhìn lại.** Đọc dòng chảy phân phối và sức khỏe dịch vụ trên cùng một trang, để tốc độ không bao giờ được mua bằng sự ổn định hay ngược lại.
- **Đo kết quả trước, hoạt động sau.** Phép thử là người dùng được khá hơn. Số đếm hoạt động hỗ trợ câu chuyện nhưng không kể nó (xem chủ đề 1.3, Kết quả hơn sản lượng: chọn điều cần đo).
- **Mô tả đội nhóm và dịch vụ, không bao giờ mô tả cá nhân.** Xếp hạng cá nhân làm hỏng dữ liệu và làm hại sự cộng tác.
- **Bắt đầu nhỏ và lớn dần.** Một nhúm chỉ số đáng tin tốt hơn một bức tường chỉ số được quản trị yếu ớt.
- **Cho đội xem trước.** Những người làm công việc là khán giả đầu tiên, và là cách kiểm tra tốt nhất xem dữ liệu có chính xác không.
- **Chờ đợi thay đổi.** Định nghĩa, chỉ số và mục tiêu được sửa lại khi chúng không còn cung cấp thông tin cho quyết định.

## Định nghĩa chỉ số

Các chỉ số dưới đây mô tả sức khỏe của chính một thực hành đo lường, nơi "vì sao đo" trở nên kiểm chứng được. Một đội chứng minh được các chỉ số này là một đội đang đo có lý do. Mọi công thức dựa trên thời gian hoặc số đếm đều nêu rõ ranh giới của nó.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ chỉ số gắn với quyết định | Tỷ lệ các chỉ số được báo cáo có một câu hỏi bằng văn bản và một quyết định có tên mà nó cung cấp thông tin | số chỉ số có câu hỏi và quyết định được ghi lại / số chỉ số được báo cáo trên bảng điều khiển vào cuối quý | phần trăm | Sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số) | Đo lường và báo cáo; cải tiến liên tục | Hành động từ buổi nhìn lại; thỏa thuận làm việc | Hằng quý |
| Độ phủ đường cơ sở | Tỷ lệ dịch vụ và đội trong phạm vi có một giá trị khởi điểm được ghi lại cho từng thước đo cốt lõi đã thỏa thuận | số cặp dịch vụ-thước đo có đường cơ sở được ghi trong 12 tháng qua / tất cả các cặp dịch vụ-thước đo trong phạm vi; dịch vụ ngoài danh mục bị loại trừ | phần trăm | Danh mục dịch vụ và sổ đăng ký chỉ số | Quản lý mức dịch vụ; đo lường và báo cáo | Rà soát cùng các bên liên quan; bảng điều khiển của đội | Hằng quý |
| Công sức đo lường | Thời gian nhân sự dành để thu thập, làm sạch và báo cáo chỉ số bằng tay | số giờ ghi cho việc thu thập và báo cáo thủ công trong tháng, không tính thời gian dành để hành động theo phát hiện | giờ mỗi đội mỗi tháng | Ghi chú thời gian hoặc một khảo sát ngắn của đội | Đo lường và báo cáo | Ngân sách thời gian cho buổi nhìn lại | Hằng quý |
| Tuổi dữ liệu khi rà soát | Điểm dữ liệu mới nhất cũ đến đâu khi nhóm họp để thảo luận về nó | dấu thời gian buổi họp rà soát trừ dấu thời gian điểm dữ liệu mới nhất trên bảng điều khiển; tính theo từng chỉ số, báo cáo dưới dạng trung vị và bách phân vị thứ 85 | ngày | Nhật ký làm mới bảng điều khiển | Đo lường và báo cáo | Rà soát cùng các bên liên quan | Mỗi lần rà soát |
| Mức theo đuổi đến cùng của cải tiến | Tỷ lệ hành động cải tiến phát sinh từ các buổi rà soát chỉ số được hoàn thành hoặc cố ý đóng trong khoảng thời gian đã thỏa thuận | số hành động hoàn thành hoặc đóng có lý do trong vòng 90 ngày kể từ khi nêu / số hành động nêu trong kỳ, tính từ ngày ghi trong sổ đăng ký cải tiến | phần trăm | Sổ đăng ký hoặc tồn đọng cải tiến liên tục | Cải tiến liên tục | Mục hành động của buổi nhìn lại | Hằng quý |

Công sức đo lường cố ý chỉ đếm công việc thủ công. Thời gian đọc dữ liệu và quyết định làm gì là mục đích của cả việc này và bị loại ra, để tự động hóa việc thu thập hiện ra như một tiến bộ.

## Khuyến nghị

### Bắt đầu từ mục đích

**1. Viết lý do trước khi viết chỉ số.** Với mỗi thước đo được đề xuất, hãy viết một câu: "Chúng ta đo X để quyết định Y." Nếu không viết được câu đó, thước đo chưa sẵn sàng. Thói quen duy nhất này loại bỏ phần lớn chỉ số phù phiếm trước khi chúng vào bảng điều khiển.

**2. Nêu tên khán giả và quyết định.** Cùng một con số có nghĩa khác nhau với một đội, một chủ sở hữu dịch vụ và một giám đốc điều hành. Hãy ghi lại ai sẽ đọc nó và nó hỗ trợ lựa chọn nào. Một góc nhìn làm việc của đội có thể có hai mươi thước đo. Những gì đến với lãnh đạo nên là một tập nhỏ, ổn định (xem chủ đề 11.1, Thiết kế bảng điều khiển chỉ số dịch vụ).

### Dùng cả hai truyền thống

**3. Ghép một thước đo dòng chảy với một thước đo dịch vụ.** Chọn ít nhất một thước đo về cách công việc di chuyển, như thời gian chờ hoặc tuổi của hạng mục công việc (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy), và ít nhất một thước đo về cách dịch vụ hành xử, như tái diễn sự cố hoặc một chỉ báo mức dịch vụ (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi). Cho thấy chúng cùng nhau ngăn được thất bại phổ biến, trong đó tốc độ và sự ổn định do các nhóm khác nhau quản lý, nhìn những biểu đồ khác nhau.

**4. Coi phân phối và vận hành là một hệ thống.** Nghiên cứu được tóm tắt trong *Accelerate* (Forsgren, Humble và Kim, 2018) báo cáo rằng hiệu suất phân phối phần mềm có thể được mô tả bằng bốn thước đo cân bằng giữa thông lượng và sự ổn định. Dù đội chọn tập nào, hãy giữ các con số liên quan đến thay đổi và liên quan đến sự cố đủ gần nhau để việc một bên tăng thúc đẩy nhìn sang bên kia (xem chủ đề 2.8, Chỉ số DORA).

### Đo một cách trung thực

**5. Ưu tiên một vài thước đo kéo ngược nhau.** Một con số đơn lẻ mời gọi việc tối ưu hóa quá mức, nên hãy chọn các cặp như tốc độ với chất lượng, khối lượng với kết quả, và chi phí với trải nghiệm. Cặp đó không cần là một công thức. Nó cần xuất hiện trên cùng một trang.

**6. Ghi lại đường cơ sở trước khi thay đổi bất cứ điều gì.** Không có giá trị khởi điểm, một tuyên bố cải tiến chỉ là một câu chuyện. Hãy thu thập dữ liệu vài tuần trước, gồm cả độ trải của các giá trị chứ không chỉ giá trị trung bình (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ). Đường cơ sở cũng bảo vệ các đội: chúng cho thấy một quý tệ theo sau một thay đổi trong cách đếm công việc chứ không phải một sự sa sút hiệu suất.

### Xây dựng thói quen

**7. Rà soát theo nhịp phù hợp với quyết định.** Các thước đo dòng chảy hợp với một cuộc trò chuyện hằng tuần, hoặc một cuộc diễn ra ở mỗi bước của phân phối phần mềm liên tục. Các thước đo mức dịch vụ và chi phí hợp với cuộc trò chuyện hằng tháng hoặc hằng quý. Một chỉ số được rà soát sai nhịp hoặc tạo ra nhiễu, hoặc bỏ lỡ khoảnh khắc mà hành động lẽ ra có ích.

**8. Khép vòng bằng công việc cải tiến.** Một buổi rà soát kết thúc bằng chữ "thú vị" là đã lãng phí dữ liệu. Hãy kết thúc mỗi buổi rà soát bằng một hoặc hai hành động có tên, một người chịu trách nhiệm và một ngày, rồi theo dõi việc hoàn thành chúng. Thực hành cải tiến liên tục của ITIL và buổi nhìn lại của linh hoạt là hai cái tên cho cùng một kỷ luật (xem chủ đề 9.5, Chỉ số cải tiến liên tục).

**9. Nói rõ bạn sẽ không dùng các con số vào việc gì.** Nêu thẳng rằng chỉ số của đội sẽ không được dùng để xếp hạng hay thưởng cá nhân, và rằng các định nghĩa sẽ được đổi một cách công khai. Con người hợp tác với đo lường khi họ tin vào cách nó sẽ được dùng (xem chủ đề 11.3, Triển khai chỉ số mà không gieo sợ hãi).

## Vectơ lợi dụng và rào chắn

Ngay cả các chỉ số về đo lường cũng có thể bị lợi dụng. Mỗi hàng dưới đây ghép chỉ số với cách thường gặp để bẻ cong nó và phép kiểm tra sẽ phát hiện ra điều đó.

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ chỉ số gắn với quyết định | Viết một câu hỏi và một quyết định nghe hợp lý cho mọi chỉ số sau khi sự việc đã xảy ra để nâng tỷ lệ phần trăm | Lấy mẫu nhật ký quyết định: hỏi điều gì đã thay đổi nhờ chỉ số, và đối chiếu ngày mục được viết với ngày chỉ số lần đầu xuất hiện |
| Độ phủ đường cơ sở | Ghi một đường cơ sở một lần rồi không bao giờ làm mới, hoặc chọn một giai đoạn yên tĩnh thuận tiện | Yêu cầu mỗi đường cơ sở kèm khoảng ngày và cỡ mẫu được nêu rõ; rà soát đường cơ sở sau các thay đổi lớn của dịch vụ |
| Công sức đo lường | Đưa công việc thu thập ra khỏi sổ sách bằng cách làm mà không ghi, hoặc chuyển nó sang nhà cung cấp | So sánh với một khảo sát ngắn về việc mọi người nói báo cáo mất bao lâu; tính cả công sức của nhà cung cấp vào buổi rà soát |
| Tuổi dữ liệu khi rà soát | Làm mới bảng điều khiển ngay trước buổi họp trong khi các bản ghi bên dưới vẫn cũ | Báo cáo tuổi của bản ghi mới nhất trong hệ thống nguồn cũng như thời điểm làm mới |
| Mức theo đuổi đến cùng của cải tiến | Đóng hành động với lý do "không còn phù hợp" để đạt tỷ lệ phần trăm, hoặc chia hành động thành những mảnh vụn vặt | Rà soát các lý do được nêu cho hành động đã đóng mỗi quý, và theo dõi xem thước đo mà hành động nhắm tới có dịch chuyển không |

Một kết quả đọc lành mạnh là một thực hành sống động thấy rõ. Chỉ số vào và ra khỏi sổ đăng ký vì những lý do bằng văn bản, đường cơ sở còn mới, các hành động từ buổi rà soát được hoàn thành hoặc bị bỏ một cách trung thực, và đội dành nhiều thời gian hành động theo dữ liệu hơn là thu thập nó. Điểm hoàn hảo ở mọi hàng là lời nhắc lấy mẫu các bản ghi bên dưới, không phải lý do để ăn mừng.

## Đánh đổi: ưu điểm và nhược điểm

| Lựa chọn | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Đo ít | Chi phí thấp; rủi ro bị lợi dụng thấp; lòng tin cao | Điểm mù; quyết định dựa vào giai thoại |
| Đo nhiều | Phủ rộng; cảnh báo sớm trên nhiều mặt | Sự chú ý bị loãng; quản trị mỏng; chi phí thu thập tăng |
| Góc nhìn gắn kết | Cân bằng tốc độ và sự ổn định; hỗ trợ quyền sở hữu chung | Cần định nghĩa thống nhất giữa các đội và một nơi chung để xem |
| Mục tiêu trên chỉ số | Cho phương hướng và tính cấp bách | Mời gọi việc lợi dụng; cần rào chắn ghép đôi |
| Chỉ số không có mục tiêu | Khuyến khích thảo luận trung thực | Có thể trôi thành những báo cáo không ai hành động |

Câu trả lời thực tế là một tập nhỏ gắn kết, với mục tiêu chỉ dùng dè sẻn cho những điều kiện đã được hiểu rõ và được người dùng yêu cầu, như một mục tiêu mức dịch vụ. Mọi thứ khác là một câu hỏi để thảo luận. Mục đích không phải là loại bỏ phán đoán khỏi quyết định mà là nuôi nó bằng bằng chứng tốt hơn.

## Câu hỏi để thảo luận với đội nhóm

**1. Quý trước chúng ta đã đưa ra quyết định nào mà một con số thực sự đã thay đổi?**
Hãy yêu cầu nhóm nhớ lại các quyết định cụ thể rồi tìm xem quyết định nào, nếu có, đã dựa vào dữ liệu. Nếu danh sách ngắn, đó là thông tin hữu ích: nó có nghĩa là phần lớn báo cáo hiện tại không xứng đáng với công sức bỏ ra. Người điều phối nên ghi lại các chỉ số đã thay đổi quyết định, vì chúng là ứng viên để bảo vệ. Sau đó hỏi quyết định nào được đưa ra theo trực giác và một con số có thể đã giúp được không.

**2. Con số hiện tại nào của chúng ta mô tả hoạt động, và con số nào mô tả giá trị cho người dùng?**
Hãy đưa bảng điều khiển hiện tại lên màn hình và đánh dấu mỗi chỉ số là hoạt động (phiếu đã đóng, bản dựng đã chạy, điểm đã hoàn thành) hay kết quả (người dùng làm việc được, vấn đề không tái diễn). Đừng tranh luận lâu về các trường hợp ở ranh giới. Mục đích là để thấy sự cân bằng. Nơi nào chỉ có hoạt động, hãy hỏi hoạt động đó được cho là tạo ra kết quả nào và đội sẽ biết bằng cách nào.

**3. Số liệu phân phối và vận hành hiện nằm ở đâu, và có phải cùng những người xem cả hai không?**
Truy xem mỗi họ thước đo được lưu ở đâu và ai rà soát nó. Các đội thường ngạc nhiên khi thấy dữ liệu thay đổi do một nhóm rà soát còn dữ liệu sự cố do nhóm khác, không có cuộc họp chung. Hãy hỏi mẫu hình nào có thể bị bỏ sót vì hai thứ không bao giờ được thấy cùng nhau. Thống nhất một nơi hoặc một cuộc họp nơi chúng gặp nhau.

**4. Chúng ta đang không đo điều gì mà sẽ hối tiếc vì không biết?**
Hãy mời mọi người nói về nỗi lo thay vì chỉ số: "Tôi sợ rằng chúng ta sẽ không nhận ra nếu..." Từ các câu trả lời, đi tới các thước đo ứng viên, rồi đến loại dữ liệu rẻ nhất sẽ cho thấy chúng. Giữ danh sách ngắn.

**5. Chúng ta cần tin điều gì về các con số của mình trước khi cho lãnh đạo xem?**
Thảo luận điều gì làm dữ liệu đáng tin: định nghĩa ổn định, kiểm tra độ chính xác theo mẫu và sự đồng thuận về các trường hợp loại trừ. Liệt kê những nghi ngờ của đội, dù nhỏ, như một trạng thái được dùng không nhất quán. Quyết định nghi ngờ nào phải được sửa trước khi chia sẻ rộng hơn và nghi ngờ nào có thể được công bố cùng con số.

**6. Nếu chỉ được giữ ba chỉ số cho quý tới, đó sẽ là những chỉ số nào và vì sao?**
Ràng buộc buộc phải xếp ưu tiên. Hãy yêu cầu mỗi người viết ra ba chỉ số, rồi so sánh. Tìm sự đồng thuận về kết quả và sự bất đồng về các thước đo hoạt động. Hỏi mỗi chỉ số trong ba chỉ số cần rào chắn nào.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối được lợi nhiều nhất từ phản hồi nhanh, cục bộ: công việc chờ bao lâu, nó xếp hàng ở đâu, thay đổi gây vấn đề thường xuyên đến mức nào. Họ nên giữ một góc nhìn làm việc phong phú cho riêng mình và chỉ công bố ra ngoài một tập nhỏ. Các đội nên chống lại sức kéo đo khối lượng đầu ra làm đại diện cho giá trị, và nên ghép các thước đo tốc độ với các thước đo chất lượng ngay từ đầu (xem chủ đề 2.1, Các thước đo dòng chảy).

### Đội dịch vụ và vận hành

Các đội vận hành vốn đã sống với con số: khối lượng, thời gian phản hồi và giải quyết, tính sẵn sàng. Cơ hội là chuyển từ báo cáo điều đã xảy ra sang giải thích vì sao, thông qua sự tái diễn, nguyên nhân gốc và tỷ lệ công việc ngoài kế hoạch (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch). Họ cũng nên đưa dữ liệu của mình vào các cuộc trao đổi lập kế hoạch với các đội phân phối, để công việc về độ tin cậy được tranh luận bằng bằng chứng chứ không phải bằng lời than phiền.

### Lãnh đạo và quản trị

Lãnh đạo đặt ra các động cơ, thường là vô tình, qua những câu hỏi họ đặt. Một lãnh đạo hỏi "vì sao cái này màu đỏ?" dạy các đội giấu màu đỏ. Một lãnh đạo hỏi "bạn đã học được gì, và bạn cần gì?" dạy các đội báo cáo trung thực. Các cơ quan quản trị nên yêu cầu sổ đăng ký, các rào chắn và các hành động cải tiến cùng với các con số, và nên tài trợ cho công việc mà một con số xấu bộc lộ (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số).

### Khách hàng và người dùng

Người dùng đánh giá dịch vụ bằng việc nó có chạy không và vấn đề có được sửa không, chứ không bằng các thước đo nội bộ. Lời của chính họ, trong khảo sát, khiếu nại và bình luận, thuộc về bên cạnh các con số vận hành như một phép kiểm tra xem đội có đang đo điều quan trọng hay không (xem chủ đề 6.1, Chỉ số hài lòng của khách hàng).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một bàn dịch vụ, một đội vận hành và ba đội sản phẩm xây dựng các dịch vụ cửa hàng, thanh toán và thực hiện đơn hàng. Các con số dưới đây chỉ mang tính minh họa.

Lãnh đạo hỏi vì sao khách hàng phàn nàn về thanh toán chậm trong khi các đội phân phối báo cáo rằng họ giao hằng ngày và đội vận hành báo cáo tính sẵn sàng là 99,9 phần trăm. Mỗi nhóm đúng theo thước đo của mình, và không ai nhìn chúng cùng nhau. Trưởng bộ phận quản lý dịch vụ đề xuất một góc nhìn gắn kết một trang cho dịch vụ thanh toán, xây từ dữ liệu các đội đã thu thập.

Góc nhìn này cho thấy bốn điều trong mười hai tuần qua. Thời gian chờ thay đổi có trung vị 2 ngày và bách phân vị thứ 85 là 9 ngày. Tỷ lệ thay đổi thất bại là 8 phần trăm. Có 14 sự cố trên thanh toán, trong đó 6 sự cố có chung một nguyên nhân, một truy vấn cơ sở dữ liệu chậm được đưa vào bởi một bản phát hành gần đây. Thời gian khôi phục trung vị là 40 phút, nhưng thời gian tải trang ở bách phân vị thứ 95 đã nhích lên trong sáu tuần, một mẫu hình mà con số tính sẵn sàng không cho thấy vì dịch vụ về mặt kỹ thuật vẫn hoạt động.

Nhóm thấy điều đã bị che giấu. Tính sẵn sàng được đo là "thanh toán có phản hồi", còn người dùng trải nghiệm "thanh toán phản hồi đủ nhanh". Đội sản phẩm và đội vận hành đồng ý thêm một chỉ báo độ trễ cho thanh toán với mục tiêu do chủ sở hữu sản phẩm đặt sau khi đọc bình luận của khách hàng, coi nguyên nhân sự cố lặp lại là một hồ sơ vấn đề có người chịu trách nhiệm, và rà soát góc nhìn gắn kết hai tuần một lần. Họ ghi lại một quyết định: tạm dừng các tính năng thanh toán mới trong một quãng phân phối phần mềm liên tục để sửa truy vấn và thêm một bước kiểm tra hiệu năng vào đường ống phát hành.

Một rủi ro lợi dụng xuất hiện trong vòng một tháng. Đội vận hành nhận ra rằng hai trong 14 sự cố đã được mở dưới dạng "yêu cầu dịch vụ" vì loại yêu cầu không có mục tiêu giải quyết. Đội nhận ra rằng một mục tiêu đặt trên sự cố đã đẩy mọi người phân loại các trường hợp ở ranh giới thành yêu cầu. Họ thêm tỷ lệ bị phân loại lại vào góc nhìn và lấy mẫu mười phiếu mỗi tháng. Sau thay đổi, thời gian tải trang ở bách phân vị thứ 95 giảm, sự cố lặp lại giảm, và đội giữ góc nhìn này vì nó đã thay đổi một quyết định.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Phân phối liên tục và sự tham gia liên tục của các bên liên quan cho bạn một nguồn cung đều đặn các thay đổi nhỏ và phản hồi thường xuyên, đúng là điều một nhúm con số trung thực cần. Một thực hành hữu ích là rà soát cùng một tập nhỏ các thước đo ở mỗi cuộc trao đổi cải tiến định kỳ và hỏi đội sẽ thay đổi gì tiếp theo. Điều cần lưu ý là tránh coi buổi rà soát như một báo cáo trạng thái: một con số được trình bày mà không gắn quyết định là chi phí chung.

### AI

Công việc có AI hỗ trợ có thể làm tăng các số đếm đầu ra như phiếu được soạn, thay đổi được đề xuất hoặc bài viết được viết, mà không làm tăng giá trị người dùng nhận được. Hãy ghép bất kỳ thước đo khối lượng nào của công việc có AI hỗ trợ với một thước đo chất lượng, như tỷ lệ bản nháp mà một người phải sửa hoặc tỷ lệ liên hệ lặp lại cho các yêu cầu do AI trả lời. Điều cần lưu ý là một con số về việc dùng AI cho thấy mức áp dụng, không phải lợi ích, nên hãy nói rõ nó không thể cho thấy điều gì.

### Tự động hóa

Thu thập dấu thời gian và trạng thái một cách tự động từ hệ thống ghi nhận chính thức, để không ai gõ con số vào báo cáo. Một thực hành nên áp dụng sớm là một bước kiểm tra tự động nhỏ đánh dấu các dấu thời gian bị thiếu và các chuỗi không thể xảy ra. Điều cần lưu ý là tự động hóa cũng cần được đo: một đường ống hoặc bot hỏng âm thầm làm mọi con số phía sau trông khỏe mạnh.

### Phân tích

Hãy quyết định câu hỏi và quyết định trước khi dựng biểu đồ, và cho thấy có bao nhiêu hạng mục đứng sau mỗi tỷ lệ. Dùng bách phân vị và xu hướng thay vì các giá trị trung bình đơn lẻ, và đánh dấu mọi thay đổi định nghĩa trên biểu đồ. Điều cần lưu ý là độ bất định: một số lượng hạng mục nhỏ có thể làm một tỷ lệ phần trăm dịch chuyển rất xa, nên tránh hành động dựa trên dữ liệu của một tháng. Riêng với ITIL 5, xem chủ đề 1.8, Đo lường ITIL 5 và kết quả giá trị.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Các đội nhỏ có ít quy trình và lòng tin mạnh, điều này có lợi. Rủi ro là nhập về một bảng điều khiển doanh nghiệp lớn trước khi có nhu cầu. Hãy bắt đầu với hai hoặc ba thước đo mà những người sáng lập sẽ đọc hằng tuần, như thời gian chờ thay đổi, một chỉ báo độ tin cậy đơn giản và phản hồi trực tiếp của người dùng, và ghi lại các định nghĩa của chúng.

**Doanh nghiệp nhỏ.** Người điều hành CNTT thường báo cáo cho chủ doanh nghiệp, và một lời phàn nàn của một khách hàng có thể nặng hơn bất kỳ biểu đồ nào. Giữ tập nhỏ, dùng dữ liệu mà công cụ của bạn đã tạo ra và ưu tiên trò chuyện với người dùng. Hãy xử lý các báo cáo do nhà cung cấp đưa ra một cách thận trọng, vì nhà cung cấp có động cơ riêng.

**Doanh nghiệp lớn.** Quy mô nhân lên nhu cầu về các con số so sánh được và áp lực lợi dụng chúng. Hãy dùng một tập chuẩn nhỏ với định nghĩa bằng văn bản, giữ góc nhìn làm việc của đội tách khỏi các bản tổng hợp, và tránh so sánh các đội vận hành những loại dịch vụ rất khác nhau. Một sổ đăng ký chỉ số, các định nghĩa chung và một nhịp rà soát trở nên thiết yếu.

**Chính phủ và khu vực công.** Các mức dịch vụ theo hợp đồng, yêu cầu kiểm toán và nghĩa vụ báo cáo công khai có thể khiến một số thước đo không thể thương lượng. Hãy coi chúng là đầu vào thiết kế: đáp ứng chúng, cho thấy một rào chắn bên cạnh và nêu các định nghĩa được dùng. Trách nhiệm giải trình trước công chúng làm tăng cái giá của việc giấu tin xấu, nên hãy xây các kênh nội bộ an toàn để báo cáo thẳng thắn (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực để đo lường là các quyết định tốt hơn với chi phí thấp hơn. Đo lường hỗ trợ việc xếp ưu tiên, cho thấy lãng phí nằm ở đâu, cảnh báo sớm về sự suy giảm dịch vụ và cung cấp bằng chứng cho các đề nghị đầu tư.

Chi phí có nhiều phần. Có công cụ, thường đã sở hữu sẵn: hệ thống phiếu, trình theo dõi vấn đề, kiểm soát phiên bản và giám sát. Có thời gian nhân sự để định nghĩa chỉ số, dựng góc nhìn và duy trì một sổ đăng ký. Có chi phí lặp lại của các buổi họp rà soát, là khoản lớn nhất và đáng giá nhất. Tổng chi phí sở hữu (TCO) của một thực hành đo lường cũng gồm chi phí hành động theo các phát hiện, vì một hiểu biết không có ngân sách để sửa thì ít sinh lời.

Lợi tức khó nêu bằng một con số phổ quát, và cuốn sách này không bịa ra một con số. Một cách hữu ích để xây hồ sơ là đo đường cơ sở của riêng bạn trước và sau một thay đổi: thời gian dành cho báo cáo thủ công, số liên hệ lặp lại, các quyết định bị đảo ngược vì dữ liệu sai, và những bất ngờ phát hiện muộn. Mẫu hình cần chờ đợi là ít bất ngờ hơn, tranh luận ngắn hơn và sự đồng thuận tốt hơn giữa các con số vận hành và trải nghiệm người dùng. Một phép so sánh [lợi tức đầu tư](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) đơn giản giữa công sức bỏ ra và công sức tiết kiệm được là một điểm khởi đầu hợp lý, và chủ đề 7.7, Lợi tức đầu tư và hồ sơ kinh doanh, trình bày phương pháp.

## Phản mẫu và cạm bẫy

- **Bảng điều khiển của mọi thứ.** Hàng chục biểu đồ, không có người chịu trách nhiệm, không có quyết định. Hãy chọn một vài cái, nêu quyết định mà mỗi cái cung cấp thông tin, và cho phần còn lại nghỉ hưu.
- **Đo lường một chiều.** Tốc độ mà không có ổn định, hoặc ổn định mà không có sự phù hợp. Hãy ghép một thước đo dòng chảy với một thước đo dịch vụ.
- **Đo con người.** Xếp hạng cá nhân làm hỏng dữ liệu và làm nản lòng việc giúp đỡ. Hãy báo cáo ở cấp đội và dịch vụ.
- **Mục tiêu trước đường cơ sở.** Một mục tiêu không có giá trị khởi điểm là một phỏng đoán. Hãy ghi đường cơ sở trước, và đặt mục tiêu sau ít nhất một chu kỳ rà soát.
- **Báo cáo không có hành động.** Một buổi rà soát không tạo ra thay đổi nào dạy con người phớt lờ nó. Hãy kết thúc mỗi buổi rà soát bằng một hành động có tên, người chịu trách nhiệm và ngày.
- **Đổi định nghĩa trong im lặng.** Đường xu hướng trở nên vô nghĩa. Hãy ghi lại mọi thay đổi cùng lý do và đánh dấu nó trên biểu đồ.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Mục đích và lựa chọn | Chỉ số được chọn vì công cụ cung cấp chúng | Một số chỉ số có mục đích được nêu | Mỗi chỉ số được báo cáo có một câu hỏi và quyết định bằng văn bản | Tập chỉ số được rà soát theo các quyết định và cho nghỉ hưu khi không dùng | Chỉ số được đồng thiết kế với người dùng và nhà cung cấp quanh các kết quả chung |
| Góc nhìn gắn kết giữa linh hoạt và ITIL | Dữ liệu phân phối và dịch vụ giữ riêng rẽ | Một vài đội xem cả hai cùng nhau | Một góc nhìn chung về dòng chảy và sức khỏe dịch vụ cho mỗi dịch vụ | Góc nhìn gắn kết được theo dõi xu hướng và liên kết với công việc cải tiến | Các góc nhìn liên đội và nhà cung cấp gắn với kết quả của người dùng |
| Đường cơ sở và công sức | Không có đường cơ sở; thu thập thủ công | Đường cơ sở cho một số dịch vụ; thu thập hỗn hợp | Đường cơ sở được ghi cho các thước đo cốt lõi; thu thập phần lớn tự động | Đường cơ sở được làm mới sau thay đổi; công sức được theo dõi và giảm | Đường cơ sở và định nghĩa được điều chỉnh liên tục khi dịch vụ thay đổi |
| Dùng trong cải tiến | Con số được ghi nhận rồi bị quên | Thỉnh thoảng có hành động sau những tuần tệ | Mỗi buổi rà soát kết thúc bằng hành động có tên | Việc theo đuổi hành động đến cùng được đo và được tài trợ | Cải tiến đến từ mọi người và hiển thị giữa các đội |

## Danh sách kiểm tra

- [ ] Mỗi chỉ số được báo cáo có một câu hỏi bằng văn bản và một quyết định có tên mà nó cung cấp thông tin.
- [ ] Khán giả của mỗi góc nhìn được nêu tên, và góc nhìn của đội tách khỏi góc nhìn của lãnh đạo.
- [ ] Ít nhất một thước đo dòng chảy và một thước đo dịch vụ xuất hiện trên cùng một trang.
- [ ] Một đường cơ sở có khoảng ngày và cỡ mẫu tồn tại cho mỗi thước đo cốt lõi.
- [ ] Mọi thước đo thời gian nêu rõ đồng hồ bắt đầu và dừng ở đâu.
- [ ] Mọi chỉ số có một rào chắn hiển thị bên cạnh.
- [ ] Công sức thu thập thủ công đã được biết, và tác vụ thủ công lớn nhất đã được xem xét để tự động hóa.
- [ ] Các đội thấy dữ liệu của chính mình trước khi lãnh đạo thấy.
- [ ] Không có xếp hạng, lương hay kỷ luật cá nhân nào gắn với một chỉ số.
- [ ] Mỗi buổi rà soát kết thúc bằng ít nhất một hành động cải tiến có tên, người chịu trách nhiệm và ngày.
- [ ] Ít nhất một chỉ số đã được cho nghỉ hưu hoặc định nghĩa lại trong năm qua.

## Lời nhắc AI

**Soạn tuyên bố mục đích cho từng chỉ số.**

```text
We are [team name], responsible for [service or product]. Our current dashboard
shows these metrics: [list of metrics with their definitions]. For each one,
draft a one-sentence statement in the form "We measure X to decide Y", and mark
any metric where you cannot infer a decision from what I have given you. Suggest
questions I should answer to complete each statement. Do not invent benchmark
values or targets. List your assumptions.
```

**Gắn góc nhìn phân phối và dịch vụ lại với nhau.**

```text
Our delivery measures are [list, with definitions and data sources] and our
service measures are [list, with definitions and data sources] for [service
name]. Propose a one-page layout that shows both together, pairs each speed
measure with a stability or quality measure, and notes the data each needs.
Identify any definitions that conflict between the two sets. Do not invent
values or thresholds. List your assumptions and anything you could not
determine.
```

**Lên kế hoạch cho một đường cơ sở.**

```text
We want to record a baseline for [metric name] for [service or team] before
changing [practice or tool]. The data comes from [source]. Propose how long to
collect data, what summary statistics to record (including percentiles), what
to exclude and why, and how to note any changes in how work was counted during
the period. Do not assume values. List your assumptions and the data quality
risks you see.
```

**Chuẩn bị một buổi rà soát dẫn đến hành động.**

```text
We hold a [weekly, monthly, or quarterly] review of [metric set] with
[audience]. Draft an agenda and a short set of facilitation questions that
move from reading the numbers to choosing one or two improvement actions, each
with an owner and a date. Include a prompt to check for gaming against each
metric's guardrail. Do not invent data. List your assumptions about the group
and its culture.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề bao quát một chỉ số bạn đang cân nhắc và rào chắn ghép đôi của nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chủ đề chỉ số mới hoặc đã sửa vẫn giữ tuyên bố mục đích, vectơ lợi dụng và rào chắn.

## Điểm chính cần nhớ

- Đo để thấy, quyết định, học và giải trình; một con số không làm việc nào trong số này là chi phí chung.
- Linh hoạt cung cấp phản hồi nhanh, cục bộ về dòng chảy; ITIL cung cấp các góc nhìn chung, ở cấp dịch vụ, về độ tin cậy và giá trị. Hãy đọc chúng cùng nhau.
- Không đo gì để mặc quyết định cho giai thoại, và đo sai thứ hướng nỗ lực đi với sự tự tin giả.
- Bắt đầu với một vài chỉ số, mỗi chỉ số có mục đích bằng văn bản, một đường cơ sở và một rào chắn.
- Mô tả đội nhóm và dịch vụ, không bao giờ mô tả cá nhân, và để đội thấy dữ liệu của mình trước.
- Khép vòng: một buổi rà soát không tạo ra hành động nào là lãng phí dữ liệu.

## Tài liệu tham khảo và đọc thêm

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
