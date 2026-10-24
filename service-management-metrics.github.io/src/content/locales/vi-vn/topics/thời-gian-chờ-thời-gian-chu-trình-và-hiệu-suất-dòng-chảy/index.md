# Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy

**Thời gian chờ (lead time), thời gian chu trình (cycle time) và hiệu suất dòng chảy chỉ có nghĩa khi mỗi cái có điểm bắt đầu và điểm dừng bằng văn bản, một phân phối thay vì một giá trị trung bình, và một cái nhìn về sự chờ đợi chiếm phần lớn thời gian trôi qua.**

## Tổng quan và động lực

Gần như mọi đội đều muốn biết công việc mất bao lâu. Câu hỏi nghe đơn giản và gây ra tranh cãi, vì "bao lâu" phụ thuộc vào ai hỏi và họ bấm đồng hồ từ đâu. Một khách hàng tính từ lúc họ yêu cầu. Một lập trình viên tính từ lúc họ nhận việc. Một người quản lý vận hành tính từ lúc phiếu được giao vào một hàng đợi. Cả ba đều đúng với đồng hồ của riêng mình, và cả ba cho ra những con số khác nhau cho cùng một phần công việc.

[Thời gian chờ](https://en.wikipedia.org/wiki/Lead_time) (lead time) là thời gian trôi qua giữa lúc một yêu cầu đến và lúc yêu cầu được thỏa mãn, nhìn từ phía người đã yêu cầu. [Thời gian chu trình](https://en.wikipedia.org/wiki/Cycle_time) (cycle time) là thời gian trôi qua giữa lúc đội cam kết một phần công việc và lúc nó hoàn tất, nhìn từ phía đội đang làm. Sự khác biệt giữa hai cái là thời gian yêu cầu chờ trước khi đội bắt đầu. Hiệu suất dòng chảy là tỷ lệ thời gian trôi qua mà ai đó thực sự làm việc trên hạng mục, so với lúc hạng mục đang đợi. Nếu một hạng mục mất 10 ngày từ đầu đến cuối và được làm trong 1 ngày, hiệu suất dòng chảy của nó là 10 phần trăm. Thời gian chạm (touch time) là phần làm việc. Thời gian đợi (wait time) là mọi thứ còn lại.

[Phát triển phần mềm tinh gọn](https://en.wikipedia.org/wiki/Lean_software_development) và Hướng dẫn Kanban đã mang những ý tưởng này từ sản xuất sang công việc tri thức. Các thực hành ITIL nói về thời gian giải quyết, thời gian thực hiện và các mục tiêu mức dịch vụ, và các đội linh hoạt nói về thời gian chu trình và hạng mục công việc. Chủ đề này đưa ra một bộ định nghĩa đứng vững khi một sự cố, một yêu cầu, một thay đổi và một câu chuyện người dùng cùng ngồi trong một cuộc họp.

Thời gian trôi qua có một đặc tính khiến người ta ngạc nhiên lần đầu đo nó. Trong hầu hết công việc tri thức và công việc dịch vụ, hạng mục dành phần lớn đời mình để đợi: đợi một quyết định, một người rà soát, một môi trường, một nhà cung cấp, một cửa sổ bảo trì, hoặc đơn giản là đợi một người đang bận việc khác. Làm cho sự chờ đợi ấy hiển thị là điều hữu ích nhất mà các chỉ số này làm. Một đội không thấy được thời gian đợi của mình có xu hướng cố cải thiện bằng cách làm nhanh hơn, điều ít tác dụng trong một hệ thống mà 90 phần trăm thời gian trôi qua nằm trong hàng đợi. Hành vi hàng đợi được trình bày sâu trong chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi, và góc nhìn đầy đủ về chuỗi giá trị nằm trong chủ đề 2.4, Chỉ số chuỗi giá trị.

Các thước đo thời gian được báo cáo dưới dạng bách phân vị, như trung vị và [bách phân vị](https://en.wikipedia.org/wiki/Percentile) thứ 85 hoặc 95, vì những lý do trong chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ. Các dấu thời gian thô đến từ các nguồn trong chủ đề 1.5, Nguồn dữ liệu và công cụ đo. Các thước đo dòng chảy là công việc đang làm dở, thông lượng và tuổi hạng mục công việc nằm trong chủ đề 2.1, Các thước đo dòng chảy, và thước đo DORA về thời gian chờ thay đổi nằm trong chủ đề 2.8, Chỉ số DORA. Chủ đề này trình bày chính các thước đo thời gian: cách định nghĩa chúng để so sánh được, nơi đồng hồ của chúng bắt đầu và dừng, và cách làm lộ sự chờ đợi bên trong chúng.

## Nguyên tắc chính

- **Nêu tên đồng hồ trước khi đọc con số.** Mỗi thước đo thời gian có một sự kiện bắt đầu, một sự kiện dừng và một danh sách loại trừ. Một số liệu không có chúng là một ý kiến.
- **Thời gian chờ thuộc về khách hàng, thời gian chu trình thuộc về đội.** Giữ cả hai, và luôn gắn nhãn biểu đồ cho thấy cái nào, vì khoảng cách giữa chúng tự nó là một tín hiệu.
- **Báo cáo phân phối, không bao giờ chỉ một giá trị trung bình.** Trung vị mô tả hạng mục điển hình. Một bách phân vị cao mô tả rủi ro mà khách hàng thực sự gánh.
- **Sự chờ đợi là phát hiện chính.** Hiệu suất dòng chảy thường thấp, và đối sách là loại bỏ hàng đợi và bàn giao, không phải bảo mọi người nhanh lên.
- **Trạng thái tạm dừng là quyết định thiết kế.** Nếu đồng hồ có thể bị dừng bằng cách chuyển một hạng mục sang trạng thái "đang chờ", trạng thái đó sẽ được dùng, nên hãy đếm nó được dùng thường xuyên đến đâu và bởi ai.
- **So sánh một hạng mục với cùng loại của nó.** Một sự cố, một yêu cầu chuẩn, một thay đổi và một tính năng có hình dạng khác nhau. Hãy phân đoạn theo loại công việc trước khi so sánh bất cứ thứ gì.
- **Đo hệ thống, không đo con người.** Các thước đo thời gian mô tả công việc chảy qua một đội hoặc dịch vụ ra sao. Chúng không bao giờ là bảng xếp hạng cá nhân.

## Định nghĩa chỉ số

Bảng dưới đây dùng một vốn từ vựng cho cả hạng mục công việc linh hoạt và bản ghi ITIL. "Hạng mục công việc" nghĩa là bất kỳ bản ghi nào di chuyển qua một quy trình làm việc: một câu chuyện, một tác vụ, một sự cố, một yêu cầu dịch vụ, một thay đổi hoặc một hồ sơ vấn đề. Mọi khoảng thời gian là thời gian lịch trôi qua trừ khi nêu khác, và mỗi cái được báo cáo dưới dạng trung vị và một bách phân vị cao.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Thời gian chờ (lead time) | Thời gian trôi qua từ lúc một yêu cầu đến đến lúc nó được giao cho người yêu cầu | dấu thời gian giao trừ dấu thời gian yêu cầu đến, theo từng hạng mục công việc; đồng hồ bắt đầu khi yêu cầu được ghi nhận, dừng khi người yêu cầu có thể dùng kết quả; các hạng mục còn mở và các hạng mục bị hủy trước khi giao bị loại trừ và đếm riêng | ngày hoặc giờ | Lịch sử của công cụ ITSM hoặc trình theo dõi vấn đề | Quản lý yêu cầu dịch vụ; quản lý sự cố; hỗ trợ thay đổi | Thời gian chờ trên bảng của đội; thời gian từ yêu cầu đến phát hành | Hằng tuần, rà soát hằng tháng |
| Thời gian chu trình (cycle time) | Thời gian trôi qua từ lúc đội bắt đầu công việc đến lúc nó hoàn tất | dấu thời gian kết thúc trừ dấu thời gian bắt đầu, theo từng hạng mục công việc; đồng hồ bắt đầu ở lần chuyển đầu tiên vào một trạng thái làm việc tích cực, dừng ở lần chuyển đầu tiên vào trạng thái hoàn tất; thời gian trước khi bắt đầu và sau trạng thái hoàn tất bị loại trừ | ngày hoặc giờ | Lịch sử trạng thái của trình theo dõi hoặc bảng | Quản lý sự cố; quản lý yêu cầu dịch vụ; hỗ trợ thay đổi | Thời gian chu trình (xem chủ đề 2.1, Các thước đo dòng chảy) | Hằng tuần |
| Thời gian chạm (touch time) | Thời gian mà một người hoặc một tự động hóa đang tích cực làm việc trên hạng mục | tổng các khoảng mà hạng mục ở trong các trạng thái được phân loại là công việc tích cực; các trạng thái chờ, bị chặn và hàng đợi bị loại trừ | giờ | Lịch sử trạng thái của trình theo dõi, với mỗi trạng thái được phân loại là tích cực hoặc chờ | Quản lý sự cố; quản lý yêu cầu dịch vụ | Thời gian xử lý trong bản đồ chuỗi giá trị | Mẫu hằng tháng |
| Thời gian đợi (wait time) | Thời gian mà hạng mục nằm trong hàng đợi, bị chặn hoặc bị tạm dừng | thời gian chu trình trừ thời gian chạm, theo từng hạng mục công việc; không áp dụng cho các hạng mục không có điểm bắt đầu được ghi | ngày hoặc giờ | Lịch sử trạng thái của trình theo dõi | Quản lý sự cố; quản lý mức dịch vụ | Thời gian đợi hoặc thời gian bị chặn trên bảng | Hằng tháng |
| Hiệu suất dòng chảy | Tỷ lệ thời gian chu trình dành cho công việc tích cực | tổng thời gian chạm / tổng thời gian chu trình, cho các hạng mục hoàn tất trong kỳ; các hạng mục thiếu lịch sử trạng thái bị loại trừ và đếm riêng | phần trăm | Lịch sử trạng thái của trình theo dõi | Cải tiến liên tục; quản lý yêu cầu dịch vụ | Hiệu suất dòng chảy từ thực hành tinh gọn | Hằng tháng |
| Tỷ lệ tạm dừng đồng hồ | Tỷ lệ thời gian chu trình mà đồng hồ dịch vụ chính thức bị tạm dừng | tổng thời lượng các lần tạm dừng / tổng thời gian chu trình, cho các hạng mục hoàn tất trong kỳ; các lần tạm dừng là các trạng thái được định nghĩa trong quy tắc đồng hồ bằng văn bản | phần trăm | Lịch sử trạng thái của công cụ ITSM | Quản lý mức dịch vụ; quản lý sự cố | Thời gian cột bị chặn hoặc bị giữ lại | Hằng tháng |

Điểm bắt đầu của đồng hồ thời gian chu trình là một quyết định của đội phải được viết ra. Đồng hồ chính thức trong một thỏa thuận mức dịch vụ (SLA) thường tạm dừng khi một hạng mục đợi khách hàng, nên chủ đề này báo cáo tỷ lệ tạm dừng thay vì loại bỏ khoảng thời gian đó. Thời gian chạm được suy ra từ các trạng thái, nên độ chính xác của nó phụ thuộc vào việc các trạng thái mô tả công việc tốt đến đâu.

## Khuyến nghị

### Định nghĩa các đồng hồ

**1. Viết điểm bắt đầu và điểm dừng của mỗi đồng hồ.** Với thời gian chờ, điểm bắt đầu là lúc yêu cầu đến, theo ghi nhận của hệ thống đầu tiên mà người yêu cầu chạm vào, và điểm dừng là lúc người yêu cầu có thể dùng kết quả. Với thời gian chu trình, điểm bắt đầu là lần chuyển đầu tiên vào một trạng thái tích cực và điểm dừng là lần chuyển đầu tiên vào một trạng thái hoàn tất. Hãy đặt cả hai vào sổ đăng ký chỉ số (xem chủ đề 1.4, Quản trị và quyền sở hữu chỉ số) và cho thấy định nghĩa dưới mỗi biểu đồ.

**2. Thống nhất "xong" nghĩa là gì cho mỗi loại công việc.** Một thay đổi xong khi nó đang chạy trong môi trường thật và đã được xác minh, không phải khi mã được hợp nhất. Một sự cố xong khi dịch vụ được khôi phục cho người dùng, không phải khi phiếu bị đóng bằng một tác vụ hàng loạt vào thứ Sáu. Một yêu cầu xong khi người yêu cầu đã có thứ họ cần. Nếu "xong" khác nhau theo đội, thời gian chu trình không thể so sánh giữa các đội.

**3. Giữ cả thời gian chờ lẫn thời gian chu trình, và theo dõi khoảng cách.** Sự khác biệt giữa chúng là thời gian chờ cam kết: thời gian một yêu cầu nằm trước khi đội bắt đầu. Một thời gian chu trình ngắn bên cạnh một thời gian chờ dài nói rằng đội làm việc hiệu quả với những gì nó bắt đầu và khâu tiếp nhận là nút thắt. Một thời gian chu trình dài bên cạnh một thời gian chờ ngắn nói rằng các yêu cầu được chấp nhận nhanh rồi đình trệ bên trong đội.

### Báo cáo thời gian một cách trung thực

**4. Dùng bách phân vị và nói rõ là cái nào.** Hãy báo cáo trung vị và bách phân vị thứ 85 hoặc 95, ví dụ "một nửa số hạng mục hoàn tất trong 4 ngày và 85 phần trăm trong 11 ngày." Câu đó cũng là một dự báo: một hạng mục mới có khoảng 85 phần trăm cơ hội hoàn tất trong 11 ngày nếu hệ thống giữ nguyên. Một giá trị trung bình không cho bạn câu đó, và nó dịch chuyển rất xa khi một ngoại lai đơn lẻ xuất hiện (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**5. Vẽ mọi hạng mục, không chỉ bản tóm tắt.** Một biểu đồ phân tán của thời gian chu trình theo ngày hoàn tất cho thấy hình dạng của hệ thống trong nháy mắt: các cụm, một sự trôi dần lên, một bước nhảy đột ngột sau một thay đổi quy trình. Các con số tóm tắt thuộc về bên cạnh biểu đồ. Một công cụ chỉ cung cấp một đường trung bình loại bỏ thông tin mà đội cần nhất.

**6. Phân đoạn theo loại công việc và theo hạng dịch vụ.** Một sự cố khẩn, một yêu cầu chuẩn, một thay đổi có kế hoạch và một câu chuyện nghiên cứu có thời gian kỳ vọng khác nhau. Hãy tách dữ liệu theo loại, và theo mức ưu tiên nơi mức ưu tiên thay đổi cách công việc được xử lý, trước khi tìm các mẫu hình. Các quần thể hỗn hợp tạo ra một phân phối rộng không mô tả trải nghiệm của ai.

### Làm lộ sự chờ đợi

**7. Phân loại mọi trạng thái là tích cực, chờ hay xong.** Đây là công việc làm cho hiệu suất dòng chảy khả thi. "Đang phát triển" và "đang rà soát với một người rà soát đang làm việc" là tích cực. "Chờ rà soát", "chờ phê duyệt", "bị chặn" và "chờ khách hàng" là chờ. Hãy rà soát phân loại cùng đội, vì các nhãn trong một quy trình hiếm khi nói hết sự thật, và một trạng thái gọi là "đang tiến hành" thường che giấu một hạng mục mà không ai chạm vào cả tuần.

**8. Tính hiệu suất dòng chảy như một công cụ chẩn đoán, không phải một mục tiêu.** Hãy tính nó trên một mẫu hoặc trên mọi hạng mục đã hoàn tất, và dùng nó để tìm nơi sự chờ đợi sống: trạng thái nào giữ hạng mục lâu nhất, và bàn giao nào đứng trước nó. Hãy chờ những con số thấp, và đừng đặt một mục tiêu như "đạt 40 phần trăm." Nâng con số bằng cách gắn lại các trạng thái chờ thành tích cực là dễ và vô ích, và những lợi ích thật đến từ việc loại bỏ chính hàng đợi (xem chủ đề 2.4, Chỉ số chuỗi giá trị).

**9. Đếm thời gian bị chặn và bị tạm dừng riêng.** Theo dõi mức độ thường xuyên các hạng mục vào trạng thái bị chặn hoặc tạm dừng, chúng ở lại bao lâu và lý do là gì. Một danh sách ngắn các lý do chặn lặp lại, như chờ một phê duyệt, một môi trường hoặc một nhà cung cấp, cho bạn biết cần sửa gì và nói chuyện với ai. Hãy báo cáo tỷ lệ tạm dừng bên cạnh bất kỳ kết quả mức dịch vụ nào loại trừ thời gian tạm dừng (xem chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố).

### Dùng các con số cho tốt

**10. Kiểm soát hàng đợi để kiểm soát thời gian.** Thời gian đi qua một hệ thống tăng khi công việc đang làm dở tăng, một mối quan hệ được nêu trong [định luật Little](https://en.wikipedia.org/wiki/Little%27s_law), liên hệ số hạng mục trung bình trong hệ thống, tốc độ đến hoặc hoàn tất và thời gian trung bình mỗi hạng mục ở trong đó. Giới hạn công việc đang tiến hành vì vậy là đòn bẩy trực tiếp nhất lên thời gian chu trình (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi). Đổi mục tiêu của chỉ số mà không đổi hàng đợi chỉ đổi động cơ báo cáo sai.

**11. Dùng các phân phối thời gian chu trình cho dự báo và cho các mục tiêu mức dịch vụ.** Nếu bách phân vị thứ 85 của thời gian chu trình cho các yêu cầu chuẩn là 6 ngày, một cam kết 5 ngày sẽ thường bị trượt, và một cam kết 8 ngày sẽ đạt được dư dả. Hãy đặt một mục tiêu nội bộ dựa trên những gì hệ thống đã làm, rồi làm việc trên hệ thống để dịch chuyển phân phối (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ, và chủ đề 4.3, Chỉ số hỗ trợ thay đổi).

**12. Coi một định nghĩa bị đổi là một sự kiện.** Nếu điểm bắt đầu hoặc dừng của một đồng hồ thay đổi, hãy đánh dấu nó trên mọi biểu đồ và tính lại lịch sử từ các sự kiện thô nếu có thể. Không có kỷ luật đó, một đường xu hướng cho thấy tác động của việc đổi định nghĩa như thể nó là một cải thiện hay một sự sa sút (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Thời gian chờ (lead time) | Trì hoãn việc tạo bản ghi yêu cầu để đồng hồ bắt đầu muộn; đóng và mở lại hạng mục để khởi động lại đồng hồ; tách một yêu cầu thành nhiều yêu cầu nhỏ xíu | So sánh bản ghi yêu cầu với lần liên hệ đầu tiên trong email hoặc trò chuyện trên một mẫu; theo dõi tỷ lệ mở lại; theo dõi kích thước và số hạng mục trên mỗi yêu cầu |
| Thời gian chu trình (cycle time) | Bắt đầu đồng hồ muộn bằng cách chỉ chuyển hạng mục sang "đang tiến hành" vào cuối; để hạng mục ra khỏi bảng cho đến gần xong; cắt công việc thành các mảnh không tự mang lại giá trị | Tuổi hạng mục công việc cho các hạng mục mở (xem chủ đề 2.1, Các thước đo dòng chảy); kiểm tra rằng các hạng mục xong dùng được cho người yêu cầu; so sánh thời gian chờ với thời gian chu trình |
| Thời gian chạm (touch time) | Phân loại các trạng thái chờ là tích cực, hoặc ghi hoạt động để trông bận | Rà soát phân loại trạng thái cùng đội mỗi quý; lấy mẫu hạng mục và so sánh hoạt động được ghi với commit, bình luận và lịch |
| Thời gian đợi (wait time) | Tạo trạng thái mới để thời gian đợi rơi vào một khoảng trống không được đo; chuyển các hạng mục đang đợi vào một trạng thái ngoài quy trình | Đếm các trạng thái và chuyển trạng thái không có tài liệu (xem chủ đề 1.5, Nguồn dữ liệu và công cụ đo); xác nhận rằng thời gian chu trình bằng thời gian chạm cộng thời gian đợi trên một mẫu |
| Hiệu suất dòng chảy | Phân loại lại sự chờ đợi thành tích cực; chỉ chọn các hạng mục nhanh cho mẫu; hoàn tất các hạng mục dễ trước để nâng tỷ lệ | Phân loại trạng thái cố định kèm nhật ký thay đổi; tính nó trên mọi hạng mục hoàn tất; báo cáo nó cùng bách phân vị thứ 85 của thời gian chu trình và tuổi của các hạng mục mở |
| Tỷ lệ tạm dừng đồng hồ | Tạm dừng đồng hồ dịch vụ chính thức vì những lý do không phụ thuộc khách hàng, như bàn giao nội bộ, để đạt SLA | Kiểm toán các lý do tạm dừng trên một mẫu; báo cáo thời gian trôi qua và thời gian SLA cạnh nhau; xem lại góc nhìn của chính khách hàng về thời gian giải quyết (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA) |

Một kết quả đọc lành mạnh cho thấy thời gian chờ và thời gian chu trình dịch chuyển cùng nhau, một khoảng cách giữa chúng mà đội giải thích được, một bách phân vị thứ 85 là bội số ổn định của trung vị, và một hiệu suất dòng chảy thấp nhưng đang tăng khi các hàng đợi cụ thể được loại bỏ. Các dấu hiệu cảnh báo là một trung vị cải thiện trong khi bách phân vị cao tệ đi, một tỷ lệ tạm dừng tăng vào cuối mỗi tháng, và một hiệu suất dòng chảy nhảy vọt mà không có thay đổi nào trong cách làm việc. Khi một con số cải thiện, ai đó nên chỉ ra được thay đổi trong công việc giải thích nó. Một cải thiện do lợi dụng thường sẽ trượt phép thử đó. Tâm lý học rộng hơn được trình bày trong chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Thời gian chờ từ góc nhìn người yêu cầu | Khớp với điều khách hàng cảm nhận; khó cải thiện bằng cách đổi nhãn nội bộ | Sự kiện bắt đầu nằm ngoài tầm kiểm soát của đội và có thể được ghi nhận kém |
| Thời gian chu trình từ cam kết của đội | Nằm trong tầm kiểm soát của đội; dễ tính từ lịch sử bảng | Bỏ qua độ trễ tiếp nhận; một đội có thể trông nhanh trong khi yêu cầu chờ |
| Thời gian trôi qua (đồng hồ lịch) | Đơn giản, so sánh được và khớp với trải nghiệm của khách hàng | Gồm cả đêm và cuối tuần, có thể gây hiểu lầm với các đội có giờ làm khác nhau |
| Đồng hồ giờ làm việc | Khớp với các mức dịch vụ có nhân sự và mẫu hình trực ca | Cần một lịch cho mỗi đội; che giấu sự chờ đợi thật mà khách hàng trải qua |
| Hiệu suất dòng chảy như một tỷ lệ | Cho thấy bao nhiêu thời gian là chờ đợi bằng một con số trực quan duy nhất | Phụ thuộc vào phân loại trạng thái; dễ thổi phồng; có thể bị đọc nhầm là mục tiêu |
| Báo cáo theo bách phân vị | Cho thấy rủi ro và hỗ trợ dự báo | Cần đủ hạng mục mỗi kỳ; khó đọc hơn giá trị trung bình với một số khán giả |

Lời khuyên thực tế là bắt đầu với thời gian trôi qua, chỉ thêm góc nhìn giờ làm việc nơi một mức dịch vụ đòi hỏi, và báo cáo cả thời gian chờ lẫn thời gian chu trình ở một bách phân vị cao. Hãy dùng hiệu suất dòng chảy như điểm khởi đầu cho một cuộc trò chuyện trong buổi rà soát, với phân loại trạng thái trên bàn, và tránh đưa nó lên một thẻ điểm.

## Câu hỏi để thảo luận với đội nhóm

**1. Đồng hồ thời gian chờ của chúng ta bắt đầu ở đâu, và khách hàng nghĩ nó bắt đầu ở đâu?**
Lấy ba yêu cầu gần đây và truy chúng từ lần liên hệ đầu tiên đến lúc giao. Đánh dấu thời điểm yêu cầu được ghi nhận trong hệ thống ghi nhận chính thức. So sánh khoảng cách giữa lần liên hệ đầu và việc tạo bản ghi. Người điều phối nên tìm các hàng đợi ẩn trong email, trò chuyện hoặc hộp thư chung không bao giờ xuất hiện trong chỉ số.

**2. "Xong" nghĩa là gì cho mỗi loại công việc chúng ta xử lý?**
Liệt kê các loại công việc, như sự cố, yêu cầu, thay đổi và câu chuyện, và hỏi sự kiện dừng của từng loại. Hỏi liệu người yêu cầu có đồng ý rằng công việc đã hoàn tất vào khoảnh khắc đó không. Những bất đồng ý kiến chỉ ra một đồng hồ dừng quá sớm. Thống nhất một sự kiện dừng cho mỗi loại và ghi nó ra.

**3. Những trạng thái nào của chúng ta là chờ, và các hạng mục nằm trong đó bao lâu?**
Đặt quy trình lên tường và đánh dấu mỗi trạng thái là tích cực hoặc chờ. Hỏi thời gian điển hình trong mỗi trạng thái chờ từ dữ liệu tháng vừa qua. Trạng thái chờ lớn nhất thường là một bất ngờ với ai đó. Chọn một hàng đợi để xem xét kỹ hơn vào tháng sau.

**4. Chúng ta hứa bách phân vị nào, và hệ thống thực sự đã làm được gì?**
Cho xem phân phối thời gian chu trình quý vừa qua với trung vị, bách phân vị thứ 85 và thứ 95. Hỏi đội hiện cam kết gì với khách hàng và nó rơi vào đâu trên phân phối. Thảo luận cái giá của việc hứa một thời gian nhanh hơn hệ thống đã giao. Quyết định một cam kết mà đội có thể đạt vì lý do của chính mình.

**5. Ai được phép tạm dừng đồng hồ, và vì sao?**
Liệt kê các trạng thái tạm dừng và giữ lại, những người có thể dùng chúng và các lý do được nêu. Đọc một mẫu các hạng mục bị tạm dừng và hỏi khách hàng có thật sự là nguyên nhân không. Thảo luận điều gì sẽ xảy ra nếu tỷ lệ tạm dừng được hiển thị trên cùng biểu đồ với kết quả SLA. Người điều phối nên giữ giọng điệu tò mò, vì các trạng thái tạm dừng thường tồn tại vì những lý do chính đáng chưa bao giờ được ghi lại.

**6. Nếu hiệu suất dòng chảy tăng gấp đôi vào quý tới, chúng ta đã thay đổi gì trong cách công việc di chuyển?**
Yêu cầu nhóm nêu tên các hàng đợi, bàn giao, phê duyệt hoặc cỡ lô cụ thể sẽ phải đổi. Nếu các câu trả lời chung chung, như "làm việc chăm hơn" hay "giao tiếp tốt hơn", con số chưa được nối với bất kỳ hành động nào. Chọn một thay đổi cụ thể, dự đoán tác động của nó lên thời gian đợi của một trạng thái có tên, và thống nhất khi nào kiểm tra.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu đồng hồ thời gian chu trình và thấy chi tiết của nó trên bảng. Họ được lợi nhiều nhất khi phân loại trạng thái trung thực, giới hạn công việc đang tiến hành và đọc biểu đồ phân tán trong các buổi nhìn lại của chính mình. Họ nên chống lại áp lực chia công việc thành các mảnh nhỏ giả tạo hoàn tất nhanh mà không mang lại gì, và nên cho thấy tuổi của các hạng mục mở bên cạnh các thời gian chu trình đã hoàn tất (xem chủ đề 2.1, Các thước đo dòng chảy).

### Đội dịch vụ và vận hành

Các đội dịch vụ làm việc với các bản ghi mang đồng hồ mức dịch vụ chính thức, và các trạng thái tạm dừng của họ là nơi thời gian trôi qua và thời gian SLA tách ra. Họ nên báo cáo cả hai đồng hồ, phân đoạn theo loại và mức ưu tiên, và ghi lại lý do cho mọi lần tạm dừng. Các đội vận hành cũng là chủ sở hữu tự nhiên của các hàng đợi phê duyệt, cửa sổ bảo trì và phản hồi nhà cung cấp, thường chi phối thời gian đợi mà các đội sản phẩm thấy (xem chủ đề 3.5, Chỉ số thực hiện yêu cầu dịch vụ).

### Lãnh đạo và quản trị

Lãnh đạo yêu cầu thời gian chờ vì đó là con số gần nhất với điều khách hàng trải nghiệm. Họ nên chờ đợi một định nghĩa, một phân phối và một sự phân đoạn cùng mỗi số liệu, và nên hỏi sự chờ đợi nằm ở đâu trước khi hỏi vì sao mọi người chậm. Các mục tiêu cho những thước đo này hiệu quả nhất khi chúng áp dụng cho một dịch vụ hoặc chuỗi giá trị có người sở hữu có tên, và khi chúng được đặt từ những gì hệ thống đã giao. Một mục tiêu áp lên một giá trị trung bình mời gọi việc phân loại lại và các trò chơi đồng hồ.

### Khách hàng và người dùng

Khách hàng trải nghiệm thời gian chờ, gồm cả mọi sự chờ đợi trước khi công việc bắt đầu và mọi sự chờ đợi sau khi đội tin rằng mình đã xong. Họ cần một ước lượng trung thực biểu đạt dưới dạng một khoảng, như "hầu hết yêu cầu như thế này xong trong vòng một tuần, và gần như tất cả trong hai tuần", và họ cần biết khi nào một lần tạm dừng được áp dụng vì đội đang đợi họ. Các báo cáo cho khách hàng nên nêu họ dùng đồng hồ nào (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một bệnh viện khu vực vận hành một bàn dịch vụ, một đội hạ tầng và một đội ứng dụng hỗ trợ nhân viên lâm sàng. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Bàn dịch vụ báo cáo rằng các yêu cầu truy cập chuẩn đạt mục tiêu 5 ngày làm việc trong 94 phần trăm trường hợp, vậy mà các quản lý khoa vẫn phàn nàn rằng việc cấp quyền truy cập mất "khoảng hai tuần". Trưởng vận hành dịch vụ yêu cầu đội đo thời gian chờ và thời gian chu trình cho các yêu cầu này trong một quý, dùng số ngày lịch trôi qua từ lịch sử trạng thái thô thay vì bộ đếm giờ SLA.

Kết quả cho 400 yêu cầu (minh họa) là thời gian chu trình trung vị 3 ngày và bách phân vị thứ 85 là 9 ngày. Thời gian chờ, đo từ lúc quản lý lần đầu gửi email đến hộp thư chung, có trung vị 8 ngày và bách phân vị thứ 85 là 16 ngày. Hai phát hiện giải thích khoảng cách. Thứ nhất, các yêu cầu đợi trung bình 3 ngày trong hộp thư trước khi ai đó tạo phiếu, điều vô hình đối với SLA. Thứ hai, trạng thái "chờ phê duyệt" chiếm phần lớn thời gian chu trình: trong bách phân vị thứ 85 là 9 ngày, khoảng 6 ngày là chờ một trưởng bộ phận phê duyệt. Thời gian chạm trên một mẫu 30 yêu cầu là khoảng nửa ngày, nên hiệu suất dòng chảy xấp xỉ 8 phần trăm (minh họa). Kết quả SLA cao vì bộ đếm giờ dừng trong "chờ phê duyệt" và "chờ khách hàng", nên tỷ lệ tạm dừng đồng hồ là 52 phần trăm thời gian chu trình.

Đội đưa ra ba quyết định. Họ thêm một biểu mẫu web tạo phiếu ngay ở lần liên hệ đầu tiên, để đồng hồ thời gian chờ bắt đầu nơi đồng hồ của khách hàng bắt đầu. Họ thống nhất với các trưởng bộ phận rằng phê duyệt cho một danh sách xác định các vai trò chuẩn được ủy quyền trước, với một kiểm toán hằng quý thay vì phê duyệt từng yêu cầu. Và họ thêm tỷ lệ tạm dừng và thời gian chờ vào buổi rà soát dịch vụ hằng tháng bên cạnh kết quả SLA. Sau một quý, thời gian chờ trung vị giảm xuống 4 ngày và bách phân vị thứ 85 xuống 8 ngày (minh họa), trong khi kết quả SLA gần như không đổi.

Trong buổi rà soát, đội bắt được một rủi ro lợi dụng. Một kỹ thuật viên bắt đầu chuyển phiếu sang "chờ khách hàng" ngay khi một email phê duyệt được gửi, điều mà trạng thái này không nhằm đến. Tỷ lệ tạm dừng của nhóm đó tăng, cuộc kiểm toán một mẫu phiếu bị tạm dừng cho thấy mẫu hình này, và đội viết lại quy tắc đồng hồ để chỉ một yêu cầu cung cấp thông tin từ người yêu cầu mới được tạm dừng đồng hồ. Rào chắn bắt được vấn đề là việc báo cáo tỷ lệ tạm dừng bên cạnh kết quả SLA, đúng là cặp đôi được khuyến nghị trong chủ đề này.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Phân phối liên tục rút ngắn vòng từ một ý tưởng đến tay người dùng, nên thời gian chờ là thước đo mà một bên liên quan cảm nhận. Một thực hành tốt là quyết định cùng các bên liên quan nơi thời gian chờ bắt đầu, như lúc một yêu cầu được chấp nhận, và giữ định nghĩa đó ổn định. Điều cần lưu ý là một đội có thể rút ngắn thời gian chu trình bằng cách bắt đầu đồng hồ muộn hơn, nên hãy luôn báo cáo thời gian chờ từ phía khách hàng nữa.

### AI

Công cụ AI có thể cắt thời gian chạm ở việc soạn thảo và viết mã trong khi để thời gian đợi không đổi hoặc dài hơn, nên hiệu suất dòng chảy có thể giảm ngay cả khi mọi người cảm thấy nhanh hơn. Hãy báo cáo thời gian chạm và thời gian đợi riêng cho công việc có AI hỗ trợ, và ghép chúng với làm lại. Điều cần lưu ý là việc giảm thời gian chu trình có thể đến từ độ sâu rà soát thấp hơn, nên hãy lấy mẫu các thay đổi để xem chất lượng có được giữ không.

### Tự động hóa

Hãy tính mỗi đồng hồ từ dấu thời gian sự kiện thay vì từ các trường do con người gõ, và ghi lại mọi lần tạm dừng kèm lý do. Hãy đo chính tự động hóa theo mức độ nó loại bỏ thời gian đợi và mức độ thường xuyên nó thêm một hàng đợi mới, như một bước phê duyệt thủ công mà nó không thể bỏ qua. Điều cần lưu ý là các chỉnh sửa trạng thái hồi tố có thể viết lại lịch sử, nên hãy ghi lại các chỉnh sửa.

### Phân tích

Hãy báo cáo bách phân vị của thời gian chờ và thời gian chu trình và cho thấy tỷ lệ thời gian chạm trên thời gian chờ như một xu hướng. Quyết định được cung cấp thông tin là loại bỏ sự chờ đợi ở đâu, thường là giữa các đội. Điều cần lưu ý là hiệu suất dòng chảy phụ thuộc vào mức độ chi tiết mà thời gian chạm được ghi lại, nên hãy coi nó là một hướng dẫn thô chứ không phải một tỷ lệ chính xác.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Với một đội nhỏ và ít bàn giao, thời gian chu trình dễ đo từ bảng và thời gian chờ gần với thời gian chu trình. Hãy theo dõi cả hai từ ngày đầu với một phân loại trạng thái đơn giản, và xem biểu đồ phân tán hằng tuần. Hiệu suất dòng chảy thường đã cao cho các tác vụ nhỏ, nên mối nguy chính là một khâu tiếp nhận không chính thức giấu các yêu cầu trong trò chuyện.

**Doanh nghiệp nhỏ.** Một người có thể vừa là người yêu cầu, người phê duyệt vừa là người làm, và bàn dịch vụ được lưu trữ có thể chỉ cung cấp một bộ đếm SLA. Hãy xuất lịch sử trạng thái thô, tự tính thời gian trôi qua và giữ một định nghĩa cho mỗi đồng hồ. Phát hiện hữu ích nhất thường là các yêu cầu đợi phản hồi của nhà cung cấp bao lâu.

**Doanh nghiệp lớn.** Nhiều bàn giao giữa các đội, nhà cung cấp và hội đồng phê duyệt làm thời gian đợi lớn và trải ra khắp các tổ chức. Hãy thống nhất một vốn từ vựng chung cho bắt đầu, dừng và tạm dừng, phân loại trạng thái nhất quán giữa các công cụ ITSM và kỹ thuật, và phân đoạn theo loại công việc và hạng dịch vụ. Các so sánh liên đội chỉ có ý nghĩa sau khi các định nghĩa căn chỉnh, và một bản tổng hợp nên được xây từ các phân phối, không phải bằng cách lấy trung bình các giá trị trung bình của đội.

**Chính phủ và khu vực công.** Thời gian phản hồi theo luật, quy tắc mua sắm và chuỗi phê duyệt tạo ra sự chờ đợi mà đội không thể tự loại bỏ. Hãy ghi lại các đồng hồ do bên ngoài áp đặt riêng khỏi các đồng hồ nội bộ, để phần chậm trễ mà tổ chức kiểm soát được có thể được thấy và cải thiện. Báo cáo công khai về thời gian chờ, kèm định nghĩa giản dị, xây dựng lòng tin và làm lộ các hàng đợi mà chính sách tạo ra (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Động lực chính là các thước đo thời gian biến một lời phàn nàn mơ hồ ("nó mất mãi mãi") thành một vấn đề có vị trí ("các yêu cầu đợi sáu ngày để được phê duyệt"). Cùng dữ liệu đó cho các đội một dự báo trung thực, nên các cam kết với khách hàng dựa trên phân phối của công việc quá khứ thay vì hy vọng. Nó cũng làm lộ nơi đầu tư vào tự động hóa, phê duyệt hay nhân sự sẽ rút ngắn thời gian trôi qua, thường là một nơi khác với nơi mọi người mong đợi.

Chi phí khiêm tốn khi công cụ đã ghi lại các thay đổi trạng thái. Việc thiết lập gồm thống nhất các định nghĩa, phân loại các trạng thái và dựng một góc nhìn về phân phối và biểu đồ phân tán. Chi phí vận hành là thời gian duy trì phân loại trạng thái, kiểm toán các lý do tạm dừng trên một mẫu và tổ chức buổi rà soát hằng tháng. Nơi lịch sử trạng thái bị thiếu hoặc không đáng tin, khoản đầu tư đầu tiên là vào công cụ đo được mô tả trong chủ đề 1.5, Nguồn dữ liệu và công cụ đo.

Lợi tức hiện ra ở những mẫu hình mà một đội tự đo được: thời gian chu trình ở bách phân vị cao ngắn hơn cho một loại công việc, ít leo thang hơn về các hạng mục trễ, ít tranh chấp hơn về đồng hồ của ai đúng, và khoảng cách nhỏ hơn giữa thời gian chờ và thời gian chu trình. Đừng chờ đợi một mức tăng cụ thể từ một chuẩn so sánh. Các tác giả về tinh gọn và dòng chảy mô tả hiệu suất dòng chảy thấp là phổ biến, nhưng không số liệu đã công bố nào nên được chấp nhận làm mục tiêu cho công việc của chính bạn mà không có dữ liệu của riêng bạn. Tổng chi phí sở hữu bị chi phối bởi thời gian của con người, nên hãy đếm số giờ của người sở hữu chỉ số và những người rà soát.

## Phản mẫu và cạm bẫy

- **Báo cáo giá trị trung bình.** Một ngoại lai dài kéo giá trị trung bình và hạng mục điển hình bị mô tả sai. Hãy báo cáo trung vị và một bách phân vị cao, và vẽ các hạng mục.
- **Một con số cho mọi công việc.** Trộn sự cố, yêu cầu và tính năng tạo ra một phân phối không mô tả gì. Hãy phân đoạn theo loại công việc và hạng dịch vụ trước.
- **Chỉ đo đồng hồ SLA.** Một bộ đếm giờ dừng trong các trạng thái chờ báo cáo một kết quả mà khách hàng không bao giờ trải nghiệm. Hãy báo cáo thời gian chờ trôi qua và tỷ lệ tạm dừng bên cạnh nó.
- **Đặt mục tiêu hiệu suất dòng chảy.** Con người nâng tỷ lệ bằng cách gắn lại nhãn trạng thái. Hãy dùng nó như một công cụ chẩn đoán và đánh giá thành công bằng thời gian đợi của các hàng đợi có tên.
- **Bắt đầu đồng hồ sai chỗ.** Một đồng hồ bắt đầu ở lúc giao việc hoặc lúc làm việc đầu tiên che giấu hàng đợi tiếp nhận. Hãy bắt đầu thời gian chờ ở yêu cầu và thời gian chu trình ở cam kết, và công bố cả hai.
- **So sánh các đội bằng thời gian chu trình.** Công việc, trạng thái và định nghĩa khác nhau khiến bảng xếp hạng vô nghĩa và mời gọi việc lợi dụng. Hãy so sánh một đội với lịch sử của chính nó, và chỉ so sánh các dịch vụ sau khi các định nghĩa căn chỉnh.
- **Bỏ qua các hạng mục mở.** Thời gian chu trình chỉ đếm công việc đã hoàn tất, nên một hạng mục bị kẹt vô hình cho đến khi nó kết thúc. Hãy theo dõi tuổi của các hạng mục còn đang tiến hành (xem chủ đề 2.1, Các thước đo dòng chảy).
- **Đổi định nghĩa trong im lặng.** Khi đó xu hướng ghi lại một thay đổi của công cụ đo. Hãy ghi lại mọi thay đổi và đánh dấu nó trên biểu đồ.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Định nghĩa và đồng hồ | Mọi người trích dẫn khoảng thời gian từ trí nhớ; mỗi người bắt đầu đồng hồ khác nhau | Một số đội định nghĩa thời gian chu trình trên bảng của họ; các đội ITSM trích dẫn thời gian SLA | Một định nghĩa bằng văn bản về thời gian chờ, thời gian chu trình và tạm dừng được mọi đội dùng | Thay đổi định nghĩa được ghi lại và lịch sử được tính lại từ các sự kiện thô | Định nghĩa được căn chỉnh với nhà cung cấp và khách hàng và được sửa khi chúng không còn cung cấp thông tin cho quyết định |
| Báo cáo và phân tích | Giá trị trung bình trên một slide, ghép bằng tay | Một số đội cho thấy trung vị hoặc một biểu đồ từ công cụ | Trung vị và một bách phân vị cao, kèm biểu đồ phân tán, phân đoạn theo loại công việc | Phân phối được theo dõi xu hướng và rà soát theo nhịp; dự báo được rút từ chúng | Dữ liệu dòng chảy giữa các đội và nhà cung cấp được kết hợp để dự báo các cam kết đầu-cuối |
| Chờ đợi và hiệu suất dòng chảy | Chờ đợi không được phân biệt với làm việc | Cột bị chặn tồn tại trên một số bảng | Mọi trạng thái được phân loại là tích cực hoặc chờ; hiệu suất dòng chảy được tính trên mọi hạng mục hoàn tất | Các hàng đợi lớn nhất được xem xét và tài trợ để cải tiến; lý do tạm dừng được kiểm toán | Hàng đợi, phê duyệt và bàn giao được thiết kế lại cùng các đội và nhà cung cấp tạo ra chúng |
| Sử dụng trong quyết định | Các con số được trình bày ở buổi rà soát hằng quý và không được hành động | Các đội thảo luận thời gian chu trình trong các buổi nhìn lại | Mục tiêu dịch vụ được đặt từ phân phối quan sát được | Mục tiêu được ghép với rào chắn và rà soát về việc lợi dụng | Khách hàng thấy các khoảng trung thực, và ý tưởng cải tiến đến từ mọi người chạm vào công việc |

## Danh sách kiểm tra

- [ ] Mỗi thước đo thời gian có một sự kiện bắt đầu, sự kiện dừng và danh sách loại trừ bằng văn bản trong sổ đăng ký chỉ số.
- [ ] Cả thời gian chờ và thời gian chu trình đều được báo cáo, và mỗi biểu đồ được gắn nhãn cái mà nó cho thấy.
- [ ] "Xong" được định nghĩa cho mỗi loại công việc và được thống nhất với người yêu cầu.
- [ ] Kết quả được báo cáo là trung vị và một bách phân vị cao, và các hạng mục được vẽ.
- [ ] Dữ liệu được phân đoạn theo loại công việc và, nơi liên quan, theo hạng dịch vụ.
- [ ] Mọi trạng thái được phân loại là tích cực, chờ hoặc xong, và phân loại được rà soát mỗi quý.
- [ ] Các trạng thái tạm dừng, ai được dùng chúng và lý do của chúng được viết ra và kiểm toán trên một mẫu.
- [ ] Thời gian trôi qua và thời gian SLA được cho thấy cạnh nhau, kèm tỷ lệ tạm dừng.
- [ ] Hiệu suất dòng chảy được dùng như một công cụ chẩn đoán và không nằm trên thẻ điểm.
- [ ] Thay đổi định nghĩa được ghi lại và đánh dấu trên các biểu đồ.
- [ ] Tuổi của các hạng mục mở được rà soát cùng các thời gian chu trình đã hoàn tất.

## Lời nhắc AI

**Soạn quy tắc đồng hồ cho một loại công việc.**

```text
We handle [work type, for example standard access requests] in [tool or tools].
The workflow statuses are [list of statuses]. Draft written clock rules for lead
time and cycle time: the event that starts each clock, the event that stops it,
which statuses pause or exclude time, and what happens to cancelled and reopened
items. Point out statuses whose meaning is ambiguous and questions I should
answer before the rules are final. Do not invent features of our tool or
benchmark values. List your assumptions.
```

**Phân loại các trạng thái là tích cực hoặc chờ.**

```text
Here is the workflow for [team or service]: [statuses with a one-line meaning
for each]. For each status, propose whether it is active work, waiting, or done,
and explain why. Flag statuses that mix working and waiting, and suggest how to
split them with the smallest change to the workflow. Say how the classification
would change the calculation of flow efficiency. Do not assume how long items
stay in each status. List your assumptions.
```

**Phân tích một tập thời gian chu trình.**

```text
Below are cycle times in [unit] for [number] finished items of type [work type],
with finish dates: [data]. Describe the distribution using the median and the
[percentile, for example 85th] percentile, identify clusters or drift over time,
and suggest questions to ask the team about the slow items. Recommend how many
items I need before the percentiles are trustworthy, and explain the reasoning.
Do not invent benchmark values or compare with other organizations. List your
assumptions.
```

**Rà soát một chỉ số về việc lợi dụng.**

```text
We report [metric, for example flow efficiency] for [team or service], defined
as [definition and clocks]. People can influence it by [known behaviors, if
any]. List plausible ways the number could be gamed or misread, a paired
guardrail metric or practice for each, and a sample of records I should read by
hand to check. Do not invent statistics about how often gaming occurs. List
your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một thước đo thời gian và rào chắn thuộc về bên cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một thước đo thời gian đã sửa nêu các đồng hồ, các trường hợp loại trừ và vectơ lợi dụng của nó.

## Điểm chính cần nhớ

- Thời gian chờ là sự chờ đợi của khách hàng và thời gian chu trình là sự chờ đợi của đội, nên hãy giữ cả hai và xem xét khoảng cách giữa chúng.
- Viết quy tắc bắt đầu, dừng và tạm dừng cho mọi đồng hồ, và coi một thay đổi định nghĩa là một sự kiện.
- Báo cáo trung vị và một bách phân vị cao, vẽ các hạng mục, và phân đoạn theo loại công việc trước khi so sánh bất cứ thứ gì.
- Hiệu suất dòng chảy thường thấp vì phần lớn thời gian trôi qua là chờ đợi, nên hãy dùng nó để định vị hàng đợi và tránh biến nó thành mục tiêu.
- Hiển thị tỷ lệ tạm dừng bên cạnh bất kỳ kết quả mức dịch vụ nào loại trừ thời gian tạm dừng.
- Giảm công việc đang làm dở và loại bỏ bàn giao để rút ngắn thời gian, vì bảo mọi người nhanh lên không thay đổi các hàng đợi.

## Tài liệu tham khảo và đọc thêm

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
