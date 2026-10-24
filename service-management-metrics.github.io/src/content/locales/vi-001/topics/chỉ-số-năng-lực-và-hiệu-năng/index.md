# Chỉ số năng lực và hiệu năng

**Hãy đo một dịch vụ đầy đến đâu, các yêu cầu chậm nhất của nó chậm ra sao, và còn bao nhiêu dư địa trước khi người dùng nhận thấy, rồi dự báo nhu cầu bằng các khoảng giá trị để năng lực đến trước nhu cầu, không phải sau lời phàn nàn.**

## Tổng quan và động lực

Tính sẵn sàng cho bạn biết một dịch vụ có trả lời không. Năng lực và hiệu năng cho bạn biết nó trả lời tốt đến đâu, và nó sẽ tiếp tục làm vậy được bao lâu khi nhu cầu tăng. Một trang thanh toán phản hồi trong tám giây là "chạy" theo hầu hết định nghĩa tính sẵn sàng và "hỏng" theo định nghĩa của mọi khách hàng. Một cơ sở dữ liệu ở 95 phần trăm dung lượng lưu trữ hôm nay khỏe mạnh và là một sự cố ngừng hoạt động vào tháng sau. Chủ đề này bao quát các thước đo khép những khoảng trống đó.

[Lập kế hoạch năng lực](https://en.wikipedia.org/wiki/Capacity_planning) là thực hành xác định các tài nguyên một dịch vụ cần để đáp ứng nhu cầu thay đổi. Trong ITIL 4 điều này nằm trong thực hành quản lý năng lực và hiệu năng, nhằm bảo đảm các dịch vụ đạt hiệu năng đã thống nhất và kỳ vọng và đáp ứng nhu cầu hiện tại và tương lai một cách hiệu quả về chi phí. Thực hành mô tả điều này ở ba cấp: doanh nghiệp (tổ chức sẽ đòi hỏi gì ở các dịch vụ của mình), dịch vụ (một dịch vụ hành xử ra sao dưới tải), và thành phần (mỗi máy chủ, cơ sở dữ liệu, liên kết mạng hay hàng đợi hành xử ra sao). Các thước đo trong chủ đề này chủ yếu hoạt động ở cấp dịch vụ và thành phần, và chúng cần đầu vào từ cấp doanh nghiệp để dự báo bất cứ gì.

[Kỹ thuật độ tin cậy của trang (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) coi độ trễ, lưu lượng, lỗi và độ bão hòa là bốn tín hiệu đáng theo dõi trên bất kỳ hệ thống hướng người dùng nào, và nó gắn mục tiêu hiệu năng với các mục tiêu mức dịch vụ (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi). Các đội linh hoạt gặp năng lực như một câu hỏi phân phối: bản phát hành tiếp theo có chịu được tải kỳ vọng không, và ai sở hữu câu trả lời? Coi hiệu năng là một tiêu chí chấp nhận, được kiểm tra trong đường ống, chuyển cuộc trò chuyện sớm hơn.

Vài thuật ngữ lặp lại trong chủ đề này. **Mức sử dụng (utilization)** là tỷ lệ năng lực của một tài nguyên đang được dùng trong một khoảng, ví dụ tỷ lệ thời gian bộ xử lý bận. **Độ bão hòa (saturation)** là lượng công việc đang chờ vì một tài nguyên được dùng hết, ví dụ độ dài hàng đợi chạy hay tồn đọng yêu cầu. Mức sử dụng nói tài nguyên bận đến đâu. Độ bão hòa nói công việc có đang xếp hàng chờ nó không, và hàng đợi là thứ người dùng cảm nhận. **[Độ trễ](https://en.wikipedia.org/wiki/Latency_(engineering))** là thời gian giữa một yêu cầu và phản hồi của nó. **[Thông lượng](https://en.wikipedia.org/wiki/Throughput)** là tốc độ một dịch vụ hoàn tất công việc, ví dụ số yêu cầu mỗi giây. **Dư địa (headroom)** là khoảng cách giữa tải đỉnh hiện tại và tải mà ở đó dịch vụ ngừng đạt các mục tiêu của nó. **Nhu cầu** là công việc người dùng và doanh nghiệp đòi hỏi ở dịch vụ, không giống với công việc nó hoàn tất: một dịch vụ quá tải hoàn tất ít hơn điều được yêu cầu.

Một thuộc tính của hàng đợi giải thích vì sao các thước đo này hành xử như vậy. [Lý thuyết hàng đợi](https://en.wikipedia.org/wiki/Queueing_theory) cho thấy rằng, với một dịch vụ có lượt đến ngẫu nhiên, thời gian chờ tăng chậm khi mức sử dụng vừa phải rồi tăng dốc khi mức sử dụng tiến đến dùng hết. [Định luật Little](https://en.wikipedia.org/wiki/Little%27s_law) liên hệ số yêu cầu trung bình trong hệ thống với tốc độ đến và thời gian trung bình mỗi yêu cầu ở đó. Một tài nguyên ở mức sử dụng trung bình cao đang gần một vách đá. Hình dạng chính xác của đường cong phụ thuộc vào dịch vụ, nên hãy tìm nó bằng cách kiểm thử hệ thống của chính bạn với [kiểm thử tải](https://en.wikipedia.org/wiki/Load_testing) thay vì mượn một ngưỡng từ một bài viết chung.

Độ trễ cần đặc biệt cẩn thận vì giá trị trung bình giấu trải nghiệm quan trọng. Một [bách phân vị](https://en.wikipedia.org/wiki/Percentile) nêu giá trị mà một tỷ lệ nhất định các quan sát nằm dưới: bách phân vị thứ 95 (p95) là độ trễ mà 95 phần trăm yêu cầu vượt qua. [Độ trễ đuôi](https://en.wikipedia.org/wiki/Tail_latency) có xu hướng chi phối trong các hệ thống nơi một hành động của người dùng tỏa ra nhiều lời gọi nội bộ. Hãy báo cáo bách phân vị thay vì chỉ giá trị trung bình (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ, và chủ đề 3.3, Thời gian phản hồi và giải quyết sự cố, đưa ra lập luận tương tự cho thời gian giải quyết).

Cuối cùng, năng lực phụ thuộc vào việc [dự báo](https://en.wikipedia.org/wiki/Forecasting) nhu cầu, và nhu cầu có các mẫu hình: chu kỳ hằng ngày, chu kỳ hằng tuần, và [tính mùa vụ](https://en.wikipedia.org/wiki/Seasonality) gắn với lịch, chiến dịch và đợt ra mắt sản phẩm. [Tự động mở rộng quy mô](https://en.wikipedia.org/wiki/Autoscaling) thay đổi cảm giác này, vì các nền tảng đám mây có thể thêm tài nguyên trong vài phút, nhưng nó không loại bỏ chủ đề. Tự động mở rộng có giới hạn, độ trễ, chi phí, và các phụ thuộc không mở rộng được, như một cơ sở dữ liệu hay giao diện của bên thứ ba. Phía chi phí thuộc về FinOps (xem chủ đề 7.6, Chỉ số FinOps và chi phí đám mây).

Các chủ đề láng giềng bao quát số học tính sẵn sàng (xem chủ đề 5.3, Chỉ số tính sẵn sàng), thiết kế cảnh báo (xem chủ đề 5.5, Chỉ số giám sát và chất lượng cảnh báo), và tải luân phiên (xem chủ đề 5.7, Chỉ số công việc lặp đi lặp lại và trực ca). Ở đây chủ đề là tài nguyên riêng của dịch vụ và thời gian phản hồi.

## Nguyên tắc chính

- **Đo độ bão hòa cũng như mức sử dụng.** Mức sử dụng cho thấy một tài nguyên bận đến đâu, và độ bão hòa cho thấy công việc có đang chờ không. Người dùng trải nghiệm sự chờ đợi.
- **Báo cáo độ trễ như một phân phối.** Dùng bách phân vị cho mỗi thao tác hướng người dùng, và giữ cái đuôi chậm hiển thị. Một giá trị trung bình của phân phối lệch mô tả gần như không ai.
- **Gắn mục tiêu với trải nghiệm người dùng.** Một ngưỡng có ý nghĩa khi nó truy về được một điều người dùng hoặc doanh nghiệp quan tâm, không phải điều một công cụ tình cờ vẽ biểu đồ.
- **Lập kế hoạch bằng khoảng giá trị và rà soát chúng.** Một dự báo là một khoảng với các giả định nêu rõ. Hãy so sánh nó với điều đã xảy ra và học từ sai số.
- **Biết giới hạn của bạn bằng kiểm thử.** Năng lực là một giả thuyết cho đến khi một bài kiểm thử tải thực tế xác nhận nó. Lặp lại bài kiểm thử sau các thay đổi quan trọng.
- **Mô tả hệ thống, không bao giờ con người.** Những thước đo này thuộc về dịch vụ, thành phần và đội. Chúng không bao giờ là bảng điểm cho cá nhân.
- **Cân chi phí với rủi ro.** Năng lực dư tốn tiền, và năng lực thiếu tốn khách hàng. Làm cho sự đánh đổi hiển thị để nó được chọn, không phải trôi vào.

## Định nghĩa chỉ số

Bảng liệt kê bảy thước đo. Đồng hồ và ranh giới được nêu trong mỗi công thức. Các thước đo dựa trên bách phân vị dùng một cửa sổ cố định, nêu trong sổ đăng ký, và được tính từ các quan sát thô hoặc từ biểu đồ phân bố, không bao giờ là giá trị trung bình của các giá trị trung bình.

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mức sử dụng tài nguyên | Tỷ lệ năng lực của một tài nguyên đang được dùng trong một khoảng, báo cáo dưới dạng bách phân vị cao của chuỗi khoảng | năng lực bận / tổng năng lực, theo mỗi khoảng 1 đến 5 phút; báo cáo trung vị và bách phân vị thứ 95 trên cửa sổ rà soát; cửa sổ bảo trì khi tài nguyên đã được rút cạn bị loại trừ | phần trăm | Giám sát hạ tầng và số đo nền tảng đám mây | Quản lý năng lực và hiệu năng; quản lý giám sát và sự kiện | Tiêu chí chấp nhận vận hành trong định nghĩa hoàn thành; tín hiệu tài nguyên SRE | Hằng tuần |
| Độ bão hòa | Lượng công việc chờ một tài nguyên đã được dùng hết | độ dài hàng đợi, hàng đợi chạy, yêu cầu đang chờ, hoặc yêu cầu bị điều tiết, theo mỗi khoảng; báo cáo bách phân vị thứ 95 và tỷ lệ khoảng có bất kỳ sự chờ nào; khoảng không có nhu cầu bị loại trừ | số đếm, hoặc phần trăm khoảng | Đo từ xa ứng dụng và hạ tầng | Quản lý năng lực và hiệu năng; quản lý giám sát và sự kiện | Tín hiệu bão hòa SRE; giới hạn công việc đang làm dở trên một hàng đợi dịch vụ | Hằng tuần |
| Bách phân vị độ trễ | Thời gian trả lời một yêu cầu cho một thao tác hướng người dùng, báo cáo ở trung vị, p95 và p99 | thời gian phản hồi từ lúc yêu cầu được nhận ở biên đến byte cuối cùng được gửi, theo mỗi yêu cầu thành công; yêu cầu thất bại được báo cáo là lỗi, không phải phản hồi nhanh; đo trên một cửa sổ trượt | mili giây | Nhật ký bộ cân bằng tải hoặc cổng, truy vết, giám sát người dùng thực | Quản lý mức dịch vụ; quản lý năng lực và hiệu năng | Chỉ báo độ trễ SRE và mục tiêu mức dịch vụ | Liên tục, xem lại hằng tuần |
| Dư địa | Tải còn lại một dịch vụ có thể mang trước khi vi phạm các mục tiêu | (tải giới hạn đã kiểm thử hoặc mô hình hóa - tải đỉnh hiện tại) / tải đỉnh hiện tại; đỉnh là giờ bận nhất trong cửa sổ; tải giới hạn là tải mà ở đó mục tiêu độ trễ lần đầu bị vi phạm trong một bài kiểm thử, không phải mức tối đa của phần cứng | phần trăm, hoặc số ngày ở mức tăng trưởng hiện tại | Kết quả kiểm thử tải và đo từ xa lưu lượng | Quản lý năng lực và hiệu năng; quản lý mức dịch vụ | Yêu cầu phi chức năng và kiểm thử hiệu năng trong đường ống | Hằng tháng, và trước các đợt ra mắt lớn |
| Sai số dự báo | Chênh lệch giữa nhu cầu dự báo và nhu cầu thực cho một giai đoạn | giá trị tuyệt đối (đỉnh dự báo - đỉnh thực) / đỉnh thực, cho một chân trời nêu rõ; dự báo được đóng băng lúc bắt đầu chân trời và không được sửa sau đó; các sự kiện một lần không dự báo được liệt kê, không bị gỡ | phần trăm | Sổ đăng ký dự báo và đo từ xa lưu lượng | Quản lý năng lực và hiệu năng; lập kế hoạch liên quan đến nhu cầu trong quản lý tài chính dịch vụ | Dự báo phát hành và lộ trình; dự báo nhu cầu SRE | Hằng quý |
| Thời gian chờ năng lực | Thời gian cần để đưa năng lực mới vào dịch vụ một khi nhu cầu được chấp nhận | đồng hồ bắt đầu khi yêu cầu năng lực được phê duyệt, và dừng khi năng lực mang lưu lượng môi trường thật; báo cáo trung vị và bách phân vị thứ 85; yêu cầu bị hủy bị loại trừ | ngày | Bản ghi yêu cầu trong công cụ ITSM, bản ghi thay đổi, nhật ký cấp phát | Quản lý năng lực và hiệu năng; quản lý yêu cầu dịch vụ; hỗ trợ thay đổi | Thời gian chờ của một hạng mục tồn đọng nền tảng (xem chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy) | Hằng quý |
| Độ phủ kiểm thử hiệu năng | Tỷ lệ dịch vụ trọng yếu có một bài kiểm thử tải gần đây, thực tế | số dịch vụ trọng yếu có bài kiểm thử tải đạt dưới một tuổi nêu rõ, trên một môi trường và khối lượng công việc tiêu biểu / số dịch vụ trọng yếu trong sổ đăng ký; giới hạn tuổi được viết ra | phần trăm | Kho kết quả kiểm thử và sổ đăng ký dịch vụ | Quản lý năng lực và hiệu năng; quản lý phát hành | Kiểm thử phi chức năng trong đường ống phân phối liên tục | Hằng quý |

Cùng nhau chúng trả lời bốn câu hỏi: nó đầy đến đâu, nó chậm đến đâu, còn bao nhiêu chỗ, và chúng ta ứng phó nhanh thế nào khi câu trả lời đổi.

## Khuyến nghị

### Bắt đầu với người dùng, rồi đến tài nguyên

**1. Chọn vài thao tác người dùng quan tâm, và đo chúng.** Một dịch vụ có hàng trăm điểm cuối và một nhúm hành trình quan trọng, như đăng nhập, tìm kiếm, thanh toán và tải một bảng sao kê. Hãy thống nhất những cái này với chủ sản phẩm và khách hàng, và đặt một kỳ vọng độ trễ cho mỗi cái. Chúng liên kết tự nhiên với các chỉ báo mức dịch vụ (xem chủ đề 5.2, SLI, SLO và ngân sách lỗi).

**2. Ghép mọi biểu đồ tài nguyên với một biểu đồ độ bão hòa.** Chỉ cho thấy mức dùng bộ xử lý mời gọi cảm giác yên tâm giả "nó chỉ chạm 70 phần trăm". Hãy thêm hàng đợi, các yêu cầu đang chờ, hoặc số đếm điều tiết bên cạnh. Khi độ bão hòa xuất hiện trước khi mức sử dụng trông đáng báo động, bạn đã tìm ra ràng buộc thật, và ràng buộc đó thường không phải tài nguyên bạn đang theo dõi, như một nhóm kết nối, giới hạn luồng, hoặc giới hạn tốc độ trên giao diện của đối tác.

**3. Ưu tiên cái đuôi bận hơn giá trị trung bình yên tĩnh.** Giá trị trung bình trong một ngày trộn đêm khuya với đỉnh giờ ăn trưa. Hãy nhìn vào giai đoạn bận nhất và ghi lại ngày và nguyên nhân của các khoảng tệ nhất. Câu hỏi lập kế hoạch là dịch vụ hành xử ra sao ở giờ tệ nhất dự kiến của nó.

### Báo cáo độ trễ trung thực

**4. Công bố bách phân vị cho mỗi thao tác, và nêu tên cửa sổ.** Nêu trung vị, p95 và p99 cho mỗi thao tác quan trọng trên một cửa sổ trượt, và nói những yêu cầu nào được gồm. Không bao giờ lấy trung bình bách phân vị giữa các máy chủ hay giữa các thao tác, vì kết quả không tương ứng với trải nghiệm của bất kỳ người dùng thực nào; hãy kết hợp các biểu đồ phân bố hoặc các quan sát thô thay vào đó. Nếu mẫu nhỏ, hãy nói rõ, vì một p99 từ vài trăm yêu cầu là một con số nhiễu (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**5. Đo nơi người dùng đang ở, cũng như nơi máy chủ đang ở.** Thời gian phía máy chủ bỏ qua mạng, trình duyệt và thiết bị. Hãy thêm giám sát người dùng thực hoặc kiểm tra tổng hợp để phân biệt phía sau chậm với chặng cuối chậm.

**6. Đếm lỗi và hết thời gian chờ cùng với độ trễ, không thay cho nó.** Một dịch vụ thất bại nhanh trông nhanh trên biểu đồ độ trễ, và một dịch vụ hết thời gian chờ trông chậm vì lý do sai. Hãy báo cáo tỷ lệ lỗi cùng bách phân vị độ trễ để một thất bại nhanh không thể tâng bốc kết quả.

### Tìm giới hạn, rồi chừa chỗ

**7. Kiểm thử điểm gãy có chủ đích.** Hãy chạy các bài kiểm thử tải phát lại một hỗn hợp thao tác thực tế, tăng dần tải, và ghi lại nơi mục tiêu độ trễ lần đầu bị vi phạm và tài nguyên nào bão hòa trước. Kiểm thử trên một môi trường giống môi trường thật ở những phương diện quan trọng, và viết ra những phương diện nó không giống. Một bài kiểm thử thất bại ở nơi an toàn là sự cố rẻ nhất bạn sẽ có (xem chủ đề 4.5, Chỉ số phát hành và triển khai, về việc đặt kiểm tra trong đường ống).

**8. Đặt dư địa như một chính sách và rà soát nó như một sự đánh đổi.** Quyết định một dịch vụ giữ bao nhiêu biên so với đỉnh kỳ vọng, và vì sao. Các dịch vụ hướng khách hàng trọng yếu biện minh cho nhiều hơn, các dịch vụ xử lý lô nội bộ ít hơn. Con số là một lựa chọn kinh doanh về chi phí và rủi ro, nên hãy ghi lại lý do và xem lại khi chi phí của một sự cố ngừng hoạt động hoặc giá năng lực đổi. Đừng sao chép một con số từ tổ chức khác.

### Dự báo nhu cầu cùng những người biết nó

**9. Hỏi doanh nghiệp điều gì sắp đến, và viết dự báo ra.** Chiến dịch tiếp thị, khách hàng mới, hạn chót theo quy định và sự kiện theo mùa thay đổi nhu cầu từ rất lâu trước khi lưu lượng cho thấy nó. Hãy giữ một sổ đăng ký dự báo ngắn với ngày, các giả định, khoảng, người sở hữu và nguồn của mỗi đầu vào. Một dự báo cho dưới dạng khoảng, như trường hợp thấp, kỳ vọng và cao, trung thực hơn một con số đơn và hữu ích hơn để quyết định mua bao nhiêu.

**10. Chấm điểm dự báo và dùng sai số để cải thiện nó.** Sau mỗi giai đoạn, hãy so sánh dự báo đã đóng băng với điều đã xảy ra, dùng sai số dự báo, và liệt kê nguyên nhân của các lần lệch lớn. Nguyên nhân phổ biến là một chiến dịch không được báo trước, một thay đổi trong hành vi người dùng, và một phụ thuộc đã dịch chuyển. Mục đích không phải sai số bằng không, điều không đạt được, mà là học đầu vào nào đáng tin, và nới khoảng nơi chúng không đáng tin.

### Làm cho việc thêm năng lực dễ dàng

**11. Rút ngắn thời gian chờ năng lực trước khi đuổi theo độ chính xác.** Nếu năng lực mới mất nhiều tuần mới đến, bạn phải dự báo xa trước và mang thêm dự phòng. Nếu mất vài phút, bạn có thể chạy sát nhu cầu hơn. Hãy nhìn các bước giữa "được phê duyệt" và "mang lưu lượng", như mua sắm, phê duyệt, cấp phát, cấu hình và kiểm thử, và gỡ các khoảng chờ dài nhất trước (xem chủ đề 4.3, Chỉ số hỗ trợ thay đổi). Theo thuật ngữ ITIL đây là một lựa chọn chiến lược năng lực, dẫn trước nhu cầu, khớp với nó, hoặc theo sau nó; hãy chọn có ý thức, cho từng dịch vụ.

**12. Coi tự động mở rộng là một hệ thống cần đo.** Ghi lại mức độ thường xuyên việc mở rộng kích hoạt, năng lực mới mất bao lâu để hữu dụng, nó chạm giới hạn tối đa đã cấu hình thường xuyên đến đâu, và nó tốn bao nhiêu. Một bộ tự động mở rộng bị kẹt ở giới hạn của nó là một kế hoạch năng lực đã thất bại. Hãy rà soát những điều này cùng cái nhìn chi phí để hiệu năng và chi tiêu được thảo luận cùng nhau (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Mức sử dụng tài nguyên | Lấy trung bình trên các khoảng dài để giấu đỉnh; tính năng lực dự trữ nhàn rỗi là "đã dùng"; chỉ báo cáo các tài nguyên yên tĩnh nhất | Bách phân vị thứ 95 giờ cao điểm cạnh giá trị trung bình; thước đo độ bão hòa; danh sách tài nguyên trong phạm vi được rà soát so với bản đồ dịch vụ |
| Độ bão hòa | Nâng giới hạn hàng đợi để không có gì bị báo cáo là bị từ chối hay điều tiết; chuyển sự chờ sang một hàng đợi khác không được đo | Bách phân vị độ trễ và tỷ lệ lỗi cho cùng thao tác; thời gian xếp hàng đầu-cuối, không phải một chặng; rà soát mọi hàng đợi trên đường đi |
| Bách phân vị độ trễ | Chỉ báo cáo giá trị trung bình hoặc trung vị; bỏ các yêu cầu chậm hay thất bại khỏi mẫu; đo từ một vị trí nội bộ nhanh; loại các "ngoại lai" | p95 và p99 luôn được cho thấy; tỷ lệ lỗi và hết thời gian chờ cho thấy cạnh độ trễ; giám sát người dùng thực so với thời gian phía máy chủ; cỡ mẫu thô được cho thấy |
| Dư địa | Chọn khối lượng kiểm thử nhẹ nhàng; kiểm thử một môi trường lớn hơn môi trường thật; định nghĩa điểm gãy là mức tối đa của phần cứng | Khối lượng kiểm thử được rà soát so với hình dạng lưu lượng môi trường thật; danh sách bằng văn bản về sự khác biệt giữa kiểm thử và môi trường thật; dư địa được kiểm thử lại sau các thay đổi liên quan |
| Sai số dự báo | Sửa dự báo sau sự việc; đặt các khoảng rất rộng để mọi kết quả đều "trong khoảng"; gỡ các tháng có bất ngờ là "sự kiện không dự báo" | Dự báo được đóng băng và đề ngày trong sổ đăng ký; độ rộng khoảng được báo cáo cùng sai số; mọi sự kiện bị loại trừ được liệt kê và rà soát |
| Thời gian chờ năng lực | Bắt đầu đồng hồ muộn bằng cách trì hoãn bản ghi phê duyệt; đóng yêu cầu khi đơn hàng được đặt thay vì khi năng lực mang lưu lượng; chia nhỏ yêu cầu | Đồng hồ định nghĩa từ phê duyệt đến mang lưu lượng; mẫu yêu cầu đã đóng được so với nhật ký cấp phát; số yêu cầu được mở lại |
| Độ phủ kiểm thử hiệu năng | Chạy một bài kiểm thử tầm thường để tuyên bố độ phủ; thu nhỏ danh sách dịch vụ trọng yếu; giữ một bài kiểm thử đạt cũ trên sổ sách | Tuổi bài kiểm thử và độ thực tế của khối lượng được ghi lại; danh sách dịch vụ trọng yếu được rà soát so với danh mục dịch vụ và lịch sử sự cố; kiểm thử thất bại được báo cáo cũng như kiểm thử đạt |

Một kết quả đọc lành mạnh cho thấy mức sử dụng với chu kỳ hằng ngày hiển thị và dư địa, độ bão hòa xuất hiện hiếm và ngắn, bách phân vị độ trễ ổn định hoặc cải thiện ở những giờ bận nhất, và một sai số dự báo được biết và co lại chậm. Dấu hiệu lành mạnh là những bất ngờ được thảo luận cùng nguyên nhân. Các con số hoàn hảo nên gợi nghi ngờ, vì chúng thường nghĩa là phép đo nhẹ nhàng.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Chạy với dư địa rộng rãi | Hấp thụ bất ngờ; bảo vệ độ trễ và tính sẵn sàng | Chi phí cao hơn; giấu sự kém hiệu quả và dự báo yếu |
| Chạy gọn với tự động mở rộng nhanh | Chi phí thấp hơn; năng lực theo nhu cầu | Phụ thuộc vào tốc độ và giới hạn mở rộng; các phụ thuộc có thể không mở rộng; khó lập luận hơn trong sự cố |
| Mục tiêu độ trễ theo bách phân vị | Phản ánh cảm giác của các yêu cầu chậm; chống được mánh trung bình | Cần nhiều dữ liệu và mẫu lớn hơn; nhiễu ở bách phân vị cao với dịch vụ lưu lượng thấp |
| Chỉ độ trễ trung bình hoặc trung vị | Đơn giản và ổn định | Giấu cái đuôi gây ra phàn nàn và rời bỏ |
| Kiểm thử tải tổng hợp | Có kiểm soát, lặp lại được, an toàn | Chỉ thực tế bằng mô hình khối lượng và môi trường |
| Đo từ xa môi trường thật làm cơ sở | Phản ánh hành vi thật và hỗn hợp thật | Chỉ lộ giới hạn sau khi chạm chúng; không dò được vượt nhu cầu hiện tại |
| Mô hình dự báo chi tiết | Nắm bắt tính mùa vụ và tăng trưởng | Cần dữ liệu và kỹ năng; cảm giác chính xác giả khi đầu vào yếu |
| Khoảng đơn giản thống nhất với doanh nghiệp | Dễ giải thích và cập nhật; tập trung vào các giả định | Thô hơn; phụ thuộc vào đầu vào trung thực từ doanh nghiệp |

Hãy chọn phương pháp nhẹ nhất hỗ trợ quyết định. Với hầu hết dịch vụ, một cái nhìn hằng tuần về mức sử dụng giờ cao điểm, độ bão hòa và bách phân vị độ trễ, một bài kiểm thử tải trước các thay đổi lớn, và một buổi rà soát dự báo hằng quý là đủ. Hãy thêm mô hình hóa nơi cái giá của việc sai là lớn.

## Câu hỏi để thảo luận với đội nhóm

**1. Ba hành trình người dùng nào quan trọng nhất, và người dùng kỳ vọng thời gian phản hồi bao nhiêu cho mỗi cái?**
Yêu cầu nhóm nêu tên các hành trình, rồi so sánh với những gì bảng điều khiển vẽ biểu đồ. Người điều phối nên thúc đẩy một kỳ vọng truy về được một người dùng hay khách hàng, không phải một sở thích kỹ thuật.

**2. Dịch vụ của chúng ta gần một vách đá ở đâu, và làm sao chúng ta biết?**
Tìm các tài nguyên như nhóm kết nối, giới hạn luồng, hoặc giới hạn tốc độ của đối tác. Hỏi lần cuối mỗi cái được kiểm thử đến điểm gãy là khi nào. Nếu không ai biết, đó là phần việc đầu tiên.

**3. Hiện nay chúng ta báo cáo độ trễ thế nào, và một phần trăm người dùng chậm nhất sẽ nói gì?**
Cho thấy giá trị trung bình, trung vị, p95 và p99 của một thao tác cạnh nhau và thảo luận khoảng chênh. Hỏi yêu cầu nào bị loại trừ và vì sao, và các yêu cầu thất bại có được đếm không.

**4. Chúng ta giữ bao nhiêu dư địa, ai chọn nó, và lần cuối chúng ta xem lại lựa chọn là khi nào?**
Thảo luận chi phí của biên và chi phí của một sự cố ngừng hoạt động vào ngày bận nhất. Thống nhất một ngày rà soát và bằng chứng sẽ làm đổi biên.

**5. Ba dự báo nhu cầu gần nhất của chúng ta tốt đến đâu, và chúng ta đã học được gì?**
So sánh các dự báo có ngày với thực tế và nguyên nhân của các lần lệch lớn. Hỏi doanh nghiệp biết gì mà vận hành không nhận được. Quyết định thêm một đầu vào vào sổ đăng ký dự báo, như lịch tiếp thị hoặc lịch ra mắt.

**6. Nếu chúng ta cần gấp đôi năng lực vào tháng tới, điều gì sẽ ngăn chúng ta?**
Liệt kê mọi bước từ yêu cầu đến lưu lượng môi trường thật và đánh dấu nơi nó chờ. Gồm mua sắm, phê duyệt, cấp phép và các phụ thuộc không mở rộng. Người điều phối nên tìm khoảng chờ dài nhất không phải kỹ thuật, vì nó thường là một phê duyệt hay một hợp đồng. Thống nhất một bước để rút ngắn và đo hiệu quả qua thời gian chờ năng lực.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Hãy đưa một kỳ vọng hiệu năng vào tiêu chí chấp nhận của các tính năng chạm vào đường bận, chạy kiểm thử tải trong đường ống nơi thực tế, và báo vận hành về các đợt ra mắt sớm. Hãy cảnh giác với thói quen coi hiệu năng là một nhiệm vụ "làm cứng" về sau, biến thành công việc ngoài kế hoạch (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

### Đội dịch vụ và vận hành

Các đội vận hành sở hữu đo từ xa, kế hoạch năng lực và phản ứng khi chạm một giới hạn. Họ cần độ bão hòa và độ trễ đuôi trên các bảng điều khiển họ thực sự dùng, một sổ đăng ký dự báo chia sẻ với doanh nghiệp, và kết quả kiểm thử được tin cậy. Họ nên ghi lại mỗi sự cố liên quan đến năng lực cùng nguyên nhân của nó (xem chủ đề 4.1, Chỉ số quản lý vấn đề, và chủ đề 3.4, Chỉ số sự cố lớn).

### Lãnh đạo và quản trị

Lãnh đạo quyết định tổ chức chấp nhận bao nhiêu rủi ro và chi phí, và chính sách dư địa là nơi quyết định đó hiện ra. Hãy yêu cầu bách phân vị độ trễ và dư địa cho mỗi dịch vụ trọng yếu, kèm sai số dự báo cạnh chúng, và coi các yêu cầu năng lực là quyết định đầu tư mang bằng chứng. Các cơ quan quản trị nên chống lại một mục tiêu mức sử dụng toàn tổ chức, đẩy mọi dịch vụ đến cùng một điểm trên vách đá.

### Khách hàng và người dùng

Khách hàng cảm nhận sự chậm như sự thiếu tin cậy, rất lâu trước khi bất kỳ con số tính sẵn sàng nào đổi. Hãy nêu hiệu năng theo bách phân vị ở mức tải nêu rõ, và chia sẻ cách dịch vụ xử lý các giai đoạn cao điểm (xem chủ đề 5.1, Chỉ số SLA, OLA và XLA, và chủ đề 6.2, Thỏa thuận mức trải nghiệm).

## Trong thực tế: một ví dụ về quản lý dịch vụ

Một nhà bán lẻ trực tuyến cỡ vừa vận hành một cửa hàng, một dịch vụ thanh toán và một dịch vụ đơn hàng, mỗi cái do một đội sản phẩm sở hữu, với một đội nền tảng cung cấp hạ tầng dùng chung. Mọi con số trong ví dụ này chỉ mang tính minh họa.

Buổi rà soát hằng tuần của đội nền tảng cho thấy tìm kiếm của cửa hàng có độ trễ trung vị 180 mili giây và p95 là 420 mili giây, cả hai trong mục tiêu, và mức dùng bộ xử lý ở bách phân vị thứ 95 giờ cao điểm là 58 phần trăm. Ba tuần trước một đợt giảm giá đã lên kế hoạch, một trưởng hỗ trợ báo rằng khách hàng nói trang "bò" trong các chiến dịch buổi tối. Bảng điều khiển xanh.

Đội xem p99 của tìm kiếm ở giờ bận nhất của đợt giảm giá trước và thấy 3,1 giây, so với mục tiêu p99 là 1,5 giây. Độ bão hòa kể phần còn lại của câu chuyện: nhóm kết nối đến cơ sở dữ liệu sản phẩm cho thấy các yêu cầu đang chờ trong 14 phần trăm số khoảng một phút vào lúc cao điểm, trong khi mức dùng bộ xử lý không bao giờ vượt quá 60 phần trăm. Ràng buộc chưa bao giờ là bộ xử lý. Đó là một giới hạn nhóm đặt khi lưu lượng bằng một phần ba hôm nay.

Chủ sản phẩm và trưởng nền tảng chạy một bài kiểm thử tải ở 1,5 lần đỉnh năm ngoái, dùng hỗn hợp thao tác của môi trường thật. Bài kiểm thử cho thấy mục tiêu p99 bị vi phạm ở 1,15 lần đỉnh năm ngoái, nên dư địa là 15 phần trăm so với một chính sách 40 phần trăm cho các dịch vụ hướng khách hàng. Lịch tiếp thị gợi ý nhu cầu 1,6 lần đỉnh năm ngoái vào ngày khai mạc. Dự báo cũ, đóng băng trong sổ đăng ký, đặt khoảng ở 1,2 đến 1,4, và sai số so với đợt giảm giá năm ngoái là 22 phần trăm, chủ yếu từ một chiến dịch email không được báo trước.

Quyết định, ghi trong nhật ký quyết định, có bốn phần. Thứ nhất, nâng giới hạn nhóm và thêm các bản sao đọc, rồi kiểm thử lại. Thứ hai, thêm một danh sách kiểm tra sẵn sàng đợt giảm giá vào quy trình phát hành để các chiến dịch đến sổ đăng ký dự báo ít nhất sáu tuần trước. Thứ ba, thêm p99 và độ bão hòa của nhóm vào buổi rà soát hằng tuần. Thứ tư, thống nhất với tài chính về chi phí của năng lực thêm cho cửa sổ giảm giá, dùng mở rộng theo lịch thay vì dự phòng quanh năm.

Sau các thay đổi, bài kiểm thử thứ hai cho thấy mục tiêu p99 giữ vững đến 1,8 lần đỉnh năm ngoái. Rủi ro lợi dụng nổi lên trong buổi rà soát. Một nhà thầu đã đề xuất một "thắng lợi nhanh" là loại các yêu cầu chậm hơn 5 giây khỏi báo cáo độ trễ, với lý do chúng là ngoại lai. Đội từ chối: các yêu cầu bị loại chính là những khách hàng đã phàn nàn. Rào chắn là giữ tỷ lệ lỗi và hết thời gian chờ cạnh mọi bách phân vị độ trễ và ghi lại cỡ mẫu. Trong đợt giảm giá, p99 đạt đỉnh 1,2 giây, độ bão hòa nhóm ở dưới 1 phần trăm số khoảng, và sai số dự báo là 9 phần trăm, được ghi vào sổ đăng ký kèm lý do của phần lệch còn lại.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy lập kế hoạch năng lực trong các chu kỳ ngắn cùng các bên liên quan sản phẩm, dùng dự báo như các khoảng cập nhật theo dữ liệu. Điều cần lưu ý là cấp phát thừa để bảo vệ một con số tiêu đề làm lãng phí tiền.

### AI

Khối lượng công việc AI, như suy luận mô hình, có nhu cầu biến thiên và đôi khi tốn kém, và các tính năng AI có thể đổi mẫu hình sử dụng nhanh. Hãy theo dõi bách phân vị độ trễ và chi phí mỗi yêu cầu cho các đường AI, và ghép chúng với chất lượng câu trả lời. Điều cần lưu ý là tinh chỉnh cho tốc độ có thể hạ chất lượng câu trả lời, nên hãy đo cả hai.

### Tự động hóa

Hãy thu thập mức sử dụng và độ trễ tự động và tự động hóa việc mở rộng trong giới hạn. Đo việc mở rộng theo dao động và chi phí nó thêm vào. Điều cần lưu ý là tự động mở rộng giấu độ bão hòa cho đến khi chạm giới hạn, nên hãy theo dõi dư địa, không chỉ tải hiện tại.

### Phân tích

Hãy cho thấy bách phân vị độ trễ và dư địa cùng các khoảng dự báo và lịch sử sai số dự báo. Quyết định được cung cấp thông tin là khi nào thêm năng lực. Điều cần lưu ý là dự báo từ lịch sử ngắn rất mong manh, nên hãy nêu khoảng.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Lưu lượng nhỏ và tăng trưởng không chắc chắn, nên các thước đo rẻ thắng những thứ cầu kỳ. Hãy theo dõi bách phân vị độ trễ cho hai hay ba hành trình mang lại tiền, canh độ bão hòa trên cơ sở dữ liệu, và chạy một bài kiểm thử tải đơn giản trước các đợt ra mắt. Đặt một cảnh báo chi tiêu để một lỗi hay một đợt tăng lưu lượng không biến thành một hóa đơn.

**Doanh nghiệp nhỏ.** Dịch vụ thường được lưu trữ hoặc mua, nên năng lực là chuyện của nhà cung cấp. Hãy yêu cầu nhà cung cấp báo cáo hiệu năng và năng lực bằng văn bản, tìm hiểu hợp đồng nói gì về các giai đoạn cao điểm, và canh cái nhìn của khách hàng bằng vài kiểm tra tổng hợp. Theo dõi dư địa trên hệ thống duy nhất mà doanh nghiệp không thể thiếu.

**Doanh nghiệp lớn.** Nhiều dịch vụ dùng chung hạ tầng, nên vấn đề năng lực xuất hiện ở sai chỗ. Hãy đầu tư vào một bản đồ dịch vụ liên kết dịch vụ với các thành phần chúng dùng, một quy trình dự báo chung với các đơn vị kinh doanh, và các định nghĩa chung về bách phân vị độ trễ giữa các đội. Đặt chính sách dư địa theo mức trọng yếu của dịch vụ.

**Chính phủ và khu vực công.** Nhu cầu bị định hình bởi hạn chót do luật đặt ra, như ngày nộp thuế, yêu cầu trợ cấp và bầu cử, và thất bại vào những ngày đó là công khai. Dự báo nên dùng lịch theo luật, và năng lực cho đỉnh có thể cần được ký hợp đồng trước nhiều tháng. Thời gian chờ mua sắm kéo dài thời gian chờ năng lực, nên hãy đo chúng và lập kế hoạch quanh chúng. Báo cáo công khai về hiệu năng dịch vụ nên nêu bách phân vị và điều kiện tải (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí có bốn phần. Phần thứ nhất là đo đạc: đo từ xa và lưu trữ của nó. Phần thứ hai là kiểm thử: một môi trường tiêu biểu và các mô hình khối lượng cần bảo trì. Phần thứ ba là thói quen lập kế hoạch: giữ sổ đăng ký dự báo và rà soát sai số mỗi quý. Phần thứ tư là chính năng lực dự phòng, thường là khoản chi phí lớn nhất và là khoản đáng làm tường minh nhất.

Lợi tức đến từ ít sự cố liên quan đến năng lực hơn, quyết định tốt hơn về khi nào mua và khi nào không, và tránh chi cho năng lực mà dữ liệu cho thấy là không cần thiết. Đừng hứa trước một phần trăm tiết kiệm. Thay vào đó, hãy đo mẫu hình của chính bạn: số sự cố có nguyên nhân năng lực mỗi quý, tỷ lệ các đỉnh cần hành động khẩn cấp, chi tiêu cho năng lực nhàn rỗi so với chính sách dư địa đã thống nhất, và xu hướng sai số dự báo. Cuốn SRE của Google coi độ tin cậy là một quyết định kinh tế.

Tổng chi phí sở hữu bị chi phối bởi con người và môi trường kiểm thử. Một đội nhỏ có thể bắt đầu với giám sát hiện có, một buổi rà soát hằng tuần, và một bài kiểm thử tải cho hành trình quan trọng nhất.

## Phản mẫu và cạm bẫy

- **Báo cáo mức sử dụng trung bình như câu chuyện năng lực.** Giá trị trung bình giấu đỉnh và vách đá. Hãy báo cáo bách phân vị cao giờ cao điểm và thước đo độ bão hòa.
- **Độ trễ trung bình trên bảng điều khiển lãnh đạo.** Cái đuôi gây ra phàn nàn. Hãy cho thấy p95 và p99, kèm tỷ lệ lỗi và cỡ mẫu.
- **Loại "ngoại lai" khỏi độ trễ.** Các yêu cầu chậm nhất là người dùng thật. Hãy giữ chúng, và điều tra nguyên nhân thay vì cắt tỉa dữ liệu.
- **Lấy trung bình bách phân vị giữa các máy chủ.** Kết quả mô tả không ai. Hãy kết hợp biểu đồ phân bố hoặc quan sát thô trước khi tính bách phân vị.
- **Kế hoạch năng lực chỉ xây từ lưu lượng năm ngoái.** Nhu cầu phụ thuộc vào sự kiện kinh doanh. Hãy gồm lịch kinh doanh và rà soát sai số dự báo.
- **Kiểm thử trong một môi trường không giống môi trường thật.** Một kết quả đạt cho sự tự tin giả. Hãy ghi lại các khác biệt và hiệu chỉnh cho chúng, hoặc kiểm thử an toàn trên môi trường thật.
- **Dùng thước đo năng lực để xếp hạng kỹ sư hay đội.** Mức sử dụng và độ trễ mô tả hệ thống. Hãy rà soát chúng theo thiết kế dịch vụ và nhu cầu, và giữ cá nhân ngoài bức tranh.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Đo mức sử dụng, độ bão hòa và độ trễ | Giá trị trung bình từ vài máy chủ; cảnh báo khi mức dùng bộ xử lý cao | Một số đội vẽ biểu đồ bách phân vị độ trễ và hàng đợi | Định nghĩa chung: bách phân vị cho mỗi thao tác chính, độ bão hòa cạnh mức sử dụng, cửa sổ được viết ra | Được theo dõi xu hướng so với mục tiêu, ghép với tỷ lệ lỗi, rà soát hằng tuần | Định nghĩa được sửa cùng nhà cung cấp và khách hàng; cái nhìn phía người dùng và phía máy chủ được đối chiếu |
| Giới hạn và dư địa | Giới hạn không biết cho đến khi có thất bại | Thỉnh thoảng kiểm thử tải trước các đợt ra mắt lớn | Kiểm thử tải trên dịch vụ trọng yếu so với một chính sách dư địa bằng văn bản | Dư địa được theo dõi theo dịch vụ và kiểm thử lại sau các thay đổi liên quan | Chính sách dư địa được điều chỉnh từ dữ liệu chi phí, rủi ro và sự cố giữa các đội và nhà cung cấp |
| Dự báo | Phỏng đoán ngẫu hứng lúc có yêu cầu | Từng đội giữ dự báo trong đầu hoặc bảng tính | Một sổ đăng ký dự báo chung với khoảng và người sở hữu, được nuôi bởi lịch kinh doanh | Sai số dự báo được chấm điểm và rà soát, kèm nguyên nhân của các lần lệch | Dự báo xây cùng doanh nghiệp và nhà cung cấp; đầu vào được cải thiện thường xuyên |
| Giao năng lực | Năng lực thêm sau một sự cố | Yêu cầu chuẩn cho các trường hợp thường gặp | Một lộ trình có tài liệu từ phê duyệt đến lưu lượng môi trường thật, với thời gian chờ năng lực được đo | Các khoảng chờ dài nhất được nhắm đến bằng cải tiến được tài trợ | Năng lực được thêm tự động trong chính sách; hành vi mở rộng và chi phí được rà soát cùng nhau |

## Danh sách kiểm tra

- [ ] Các hành trình người dùng trọng yếu được nêu tên, mỗi cái có một kỳ vọng độ trễ thống nhất với người sở hữu.
- [ ] Độ trễ được báo cáo dưới dạng trung vị, p95 và p99 cho mỗi thao tác, với cửa sổ và cỡ mẫu được nêu.
- [ ] Bách phân vị được tính từ biểu đồ phân bố hoặc quan sát thô, không bao giờ lấy trung bình giữa các máy chủ.
- [ ] Mọi biểu đồ mức sử dụng có một biểu đồ độ bão hòa bên cạnh.
- [ ] Tỷ lệ lỗi và hết thời gian chờ được cho thấy cạnh mỗi bách phân vị độ trễ.
- [ ] Mỗi dịch vụ trọng yếu có một bài kiểm thử tải, với khác biệt về khối lượng và môi trường được viết ra.
- [ ] Một chính sách dư địa tồn tại theo mức trọng yếu của dịch vụ, với lý do được ghi lại.
- [ ] Một sổ đăng ký dự báo có ngày chứa khoảng, giả định và người sở hữu, và được nuôi bởi lịch kinh doanh.
- [ ] Sai số dự báo được rà soát mỗi quý, với nguyên nhân của các lần lệch lớn được ghi lại.
- [ ] Thời gian chờ năng lực được đo từ phê duyệt đến mang lưu lượng.
- [ ] Giới hạn, độ trễ và chi phí tự động mở rộng được rà soát cùng chủ dịch vụ.
- [ ] Không thước đo năng lực hay hiệu năng nào được báo cáo theo cá nhân.

## Lời nhắc AI

**Rà soát một báo cáo độ trễ về méo mó ẩn.**

```text
Here is how we report latency for [operation or service]: [description of the
measurement point, the window, the statistics shown, and which requests are
included or excluded]. Our users care about [user journey or expectation].
Identify ways this report could understate the experience of the slowest users,
such as averaging, exclusion rules, sampling, or measurement location. Suggest
what to show instead and what additional data I would need. Do not invent
benchmark values or thresholds; ask me for the ones you need. List your
assumptions.
```

**Soạn kế hoạch kiểm thử tải cho một dịch vụ.**

```text
I need a load test plan for [service name]. Its main user journeys are
[journeys], its dependencies are [dependencies], and its production traffic mix
is roughly [description of mix]. The test environment differs from production
in these ways: [differences]. Propose a workload model, a ramp pattern, the
measures to record (latency percentiles, error rate, utilization, saturation),
the stop conditions, and the questions the results should answer. Do not
assume tool features or invent target values. List your assumptions and the
risks of the test.
```

**Cấu trúc một dự báo nhu cầu cùng doanh nghiệp.**

```text
I am preparing a capacity forecast for [service] covering [horizon]. Known
inputs: [historical traffic description], [business events and dates], and
[planned changes]. Draft a forecast register layout with low, expected, and high
cases, the assumptions behind each, the owner of each input, and a review
routine that scores forecast error. Suggest questions to ask [business
stakeholders]. Do not invent growth rates or seasonal factors. List your
assumptions.
```

**Tìm ràng buộc thật từ các triệu chứng.**

```text
A service shows these symptoms during peak load: [symptoms, for example slow
p99, queue growth, error types]. Utilization data: [summary of resource
utilization]. Saturation data: [summary of queues, pools, throttling].
Architecture notes: [short description]. List the resources and limits that
could be the constraint, the evidence that would distinguish between them, and
the cheapest next test for each. Do not claim a cause that the data does not
support. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm chủ đề định nghĩa một thước đo năng lực hay hiệu năng, các đồng hồ của nó, và rào chắn thuộc về cạnh nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một chủ đề năng lực hay hiệu năng đã sửa giữ mọi chỉ số được ghép với một vectơ lợi dụng và một rào chắn.

## Điểm chính cần nhớ

- Hãy đo độ bão hòa cùng mức sử dụng, vì người dùng cảm nhận hàng đợi, không phải phần trăm.
- Báo cáo độ trễ dưới dạng bách phân vị cho mỗi thao tác, kèm tỷ lệ lỗi và cỡ mẫu, và không bao giờ lấy trung bình bách phân vị.
- Tìm giới hạn bằng kiểm thử và đặt dư địa như một chính sách được ghi lại, cân chi phí với rủi ro.
- Dự báo nhu cầu dưới dạng khoảng cùng doanh nghiệp, đóng băng dự báo, và học từ sai số.
- Rút ngắn thời gian chờ năng lực và đo tự động mở rộng, để năng lực theo nhu cầu.
- Mô tả dịch vụ và hệ thống, không bao giờ con người, và coi các con số trông hoàn hảo là gợi ý để kiểm tra phép đo.

## Tài liệu tham khảo và đọc thêm

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
