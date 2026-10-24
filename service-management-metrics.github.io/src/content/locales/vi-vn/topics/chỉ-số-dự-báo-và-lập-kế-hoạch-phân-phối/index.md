# Chỉ số dự báo và lập kế hoạch phân phối

**Các đội phân phối phần mềm liên tục và đồng thời vận hành dịch vụ đang chạy cần những dự báo trung thực, không phải những cam kết bị ép ra từ các ước lượng, nên hãy lập kế hoạch từ dòng công việc đã hoàn tất, đưa ra các khoảng thay vì ngày cụ thể, và giữ mọi con số lập kế hoạch cục bộ của đội ra khỏi các phép so sánh và các mục tiêu.**

## Tổng quan và động lực

Các bên liên quan hỏi mọi đội phân phối hai câu: "Khi nào sẽ xong?" và "Các bạn nhận thêm được bao nhiêu?" Câu trả lời của linh hoạt bắt đầu từ các mục đích trong các nguyên tắc của Tuyên ngôn Agile: phân phối phần mềm có giá trị liên tục, cộng tác với các bên liên quan mỗi ngày, suy ngẫm và cải tiến đều đặn, và xây dựng công việc quanh những con người có động lực được tin cậy để hoàn thành nó. Dự báo phục vụ các mục đích đó là một cuộc trò chuyện giữa các bên liên quan về các kết quả có khả năng và rủi ro. Nó không phải một lời hứa bị ép ra dưới áp lực.

Các đội vận hành dịch vụ đang chạy có thêm một khó khăn. Năng lực của họ được chia cho thay đổi có kế hoạch, công việc sự cố ngoài kế hoạch, yêu cầu dịch vụ và cải tiến. Một kế hoạch bỏ qua tải vận hành sẽ thất bại vì những lý do mà không ai đã lên kế hoạch (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch). Quản lý dịch vụ CNTT (ITSM), như được hệ thống hóa bởi ITIL, coi đây là một câu hỏi về năng lực và nhu cầu. [Lập kế hoạch năng lực](https://en.wikipedia.org/wiki/Capacity_planning) là quá trình xác định năng lực mà một tổ chức cần để đáp ứng nhu cầu thay đổi. Thực hành linh hoạt về lập kế hoạch theo điều đội thực sự có thể hoàn tất là cùng ý tưởng ở cấp đội.

Có hai cách rộng để dự báo phân phối:

- **Từ ước lượng.** Đội định cỡ các hạng mục theo một đơn vị nào đó, cộng các cỡ lại, và chia cho một tốc độ. Nhiều đội dùng định cỡ tương đối như [điểm câu chuyện](https://en.wikipedia.org/wiki/Story_point), và tốc độ được gọi là [vận tốc](https://en.wikipedia.org/wiki/Velocity_(software_development)). Nó nhanh để bắt đầu, phụ thuộc vào thói quen ước lượng của đội, và chỉ có ý nghĩa bên trong một đội.
- **Từ dữ liệu dòng chảy.** Đội dùng bản ghi của chính mình về công việc đã hoàn tất: có bao nhiêu hạng mục hoàn tất mỗi tuần (thông lượng) và các hạng mục mất bao lâu từ đầu đến cuối (thời gian chu trình). Vì đây là số đếm và thời gian trôi qua, không phải ý kiến, chúng chống được sự trôi và có thể kết hợp với mô phỏng để cho một khoảng kết quả. Cách tiếp cận này đến từ truyền thống dòng chảy, gồm Hướng dẫn Kanban, và hoạt động với bất kỳ cách tổ chức công việc nào, kể cả các đội phân phối liên tục mà không có kỳ lập kế hoạch cố định.

Chủ đề này nghiêng về cách thứ hai, vì phân phối phần mềm liên tục tạo ra một dòng đều đặn các hạng mục đã hoàn tất mà dữ liệu dòng chảy mô tả trực tiếp (xem chủ đề 2.1, Các thước đo dòng chảy, và chủ đề 2.2, Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy). Nó vẫn trình bày cách thứ nhất, vì nhiều đội dùng ước lượng, và vì việc dùng sai vận tốc là một trong những cách phổ biến nhất khiến các thước đo phân phối đi sai.

Các dự báo là [dự báo](https://en.wikipedia.org/wiki/Forecasting) về một tương lai bất định, và sự bất định là điểm mấu chốt. Ý tưởng [hình nón bất định](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) nói rằng các ước lượng sớm là kém chắc chắn nhất. [Ngụy biện lập kế hoạch](https://en.wikipedia.org/wiki/Planning_fallacy) nói rằng con người đánh giá thấp thời gian kế hoạch của chính mình sẽ mất ngay cả khi họ biết các kế hoạch tương tự đã trễ. Dự báo tốt gọi tên điều này và đo mức độ thường xuyên các dự báo trúng.

Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) quan trọng ở đây, vì các dự báo và kế hoạch dễ dàng trở thành lời hứa rồi thành mục tiêu. Một khi đội bị đánh giá theo việc đạt một ngày, nó giấu rủi ro, cắt giảm chất lượng, hoặc hạ thấp ước lượng (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Dự báo từ công việc đã hoàn tất.** Những gì đội đã giao là bằng chứng tốt hơn điều bất kỳ ai tin rằng nó sẽ giao.
- **Đưa ra một khoảng kèm xác suất.** "Có khả năng vào cuối tháng sau, rất có khả năng vào cuối tháng kế tiếp" thắng một ngày duy nhất.
- **Lập kế hoạch theo năng lực thật.** Gồm công việc vận hành, dành thời gian cho cải tiến, và đừng lập kế hoạch ở mức sử dụng đầy.
- **Giữ ước lượng ở cục bộ.** Bất kỳ đơn vị định cỡ nào cũng là một công cụ lập kế hoạch riêng cho một đội, không bao giờ là cơ sở để so sánh.
- **Đo chất lượng dự báo, không chỉ phân phối.** Một dự báo đúng vì những lý do sai là may mắn.
- **Coi dự báo là chung.** Các bên liên quan và đội cùng xây dựng nó và sửa khi sự việc thay đổi.
- **Tin tưởng đội.** Những người được tin cậy và hỗ trợ đưa ra dự báo trung thực.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tỷ lệ dự báo trúng | Tỷ lệ các dự báo mà kết quả thực tế rơi vào trong khoảng đã nêu | số dự báo có kết quả thực tế nằm trong khoảng đã nêu / số dự báo đã đưa ra | phần trăm | Nhật ký dự báo và bản ghi phân phối | Quản lý năng lực và hiệu năng; cải tiến liên tục | Độ chính xác dự báo trong các cuộc trao đổi lập kế hoạch | Hằng tháng |
| Độ rộng khoảng dự báo | Khoảng đã nêu rộng đến đâu, so với dự báo trung vị | (cận trên trừ cận dưới) / dự báo trung vị | tỷ lệ | Nhật ký dự báo | Quản lý năng lực và hiệu năng | Hình nón bất định thu hẹp | Hằng tháng |
| Mức thành công mục tiêu phân phối | Tỷ lệ các mục tiêu phân phối đã nêu được đạt trong kỳ, đánh giá theo kết quả | số mục tiêu đạt / số mục tiêu đặt ra | phần trăm | Bản ghi mục tiêu đã thống nhất với các bên liên quan | Quản lý mức dịch vụ; cải tiến liên tục | Rà soát kết quả cùng các bên liên quan | Hằng tháng hoặc mỗi lần phát hành một mục tiêu |
| Tỷ lệ thay đổi phạm vi | Tỷ lệ công việc đã cam kết được thêm, bớt hoặc định cỡ lại sau khi dự báo được đưa ra | số hạng mục thêm hoặc bớt sau dự báo / số hạng mục trong dự báo ban đầu | phần trăm | Lịch sử thay đổi của trình theo dõi công việc | Hỗ trợ thay đổi; quản lý mức dịch vụ | Điều chỉnh tồn đọng theo phản hồi | Hằng tháng |
| Phân bổ năng lực | Tỷ lệ năng lực của đội dành cho thay đổi, công việc vận hành và cải tiến | số hạng mục hoặc giờ hoàn tất trong mỗi hạng mục / tất cả hạng mục hoặc giờ hoàn tất | phần trăm | Trình theo dõi công việc kèm loại công việc | Quản lý năng lực và hiệu năng; quản lý sự cố | Phân phối theo loại công việc | Hằng tháng |
| Độ ổn định thông lượng | Biến thiên của thông lượng hằng tuần | độ lệch chuẩn của thông lượng hằng tuần / trung bình của thông lượng hằng tuần | tỷ lệ | Trình theo dõi công việc | Quản lý năng lực và hiệu năng | Khả năng dự đoán của dòng chảy | Hằng tháng |
| Vận tốc cục bộ | Công việc đã hoàn tất của một đội đơn lẻ theo đơn vị định cỡ riêng của nó trên mỗi kỳ lập kế hoạch | tổng các ước lượng của các hạng mục đáp ứng định nghĩa hoàn thành trong kỳ | điểm do đội định nghĩa | Trình theo dõi công việc | Quản lý năng lực và hiệu năng | Công cụ hỗ trợ lập kế hoạch năng lực của đội | Mỗi kỳ lập kế hoạch |

Hãy định nghĩa các đồng hồ. Một dự báo được "đưa ra" khi nó được ghi lại và chia sẻ với các bên liên quan, và "đạt" khi kết quả được phát hành và đang được dùng, không phải khi mã được hợp nhất. Thông lượng đếm các hạng mục đáp ứng định nghĩa hoàn thành, với các hạng mục khác loại được đếm trong các chuỗi riêng nếu kích thước của chúng khác nhau nhiều. Vận tốc cục bộ chỉ được cho thấy với đội sở hữu nó.

## Khuyến nghị

### Dự báo từ dòng chảy

**1. Xây dựng dự báo từ thông lượng và thời gian chu trình.** Đếm các hạng mục hoàn tất mỗi tuần trong 12 đến 26 tuần qua. Dùng lịch sử đó để dự báo bao nhiêu hạng mục sẽ hoàn tất vào một ngày nhất định, hoặc một tập hạng mục có khả năng hoàn tất khi nào. Một mô phỏng [phương pháp Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), lấy mẫu từ lịch sử của chính đội hàng nghìn lần, biến lịch sử thành một khoảng xác suất. Các bảng tính đơn giản hay các tập lệnh nhỏ làm việc này tốt. Hãy nêu cửa sổ lịch sử và ngày của dự báo.

**2. Báo cáo bách phân vị của các kết quả.** Hãy nói "50 phần trăm khả năng vào 14 tháng Ba, 85 phần trăm khả năng vào 4 tháng Tư, 95 phần trăm khả năng vào 18 tháng Tư." Mỗi bách phân vị là một tuyên bố trung thực về rủi ro, và các bên liên quan có thể chọn họ cần bao nhiêu biên độ. Một ngày duy nhất giấu đi sự lựa chọn đó (xem chủ đề 1.6, Hiểu biết thống kê cho chỉ số dịch vụ).

**3. Dùng bách phân vị thời gian chu trình cho từng hạng mục đơn lẻ.** Với một hạng mục, bách phân vị thứ 85 của các thời gian chu trình trước đây trả lời "việc này có thể mất bao lâu?" tốt hơn bất kỳ ước lượng nào. Hãy cho thấy nó trên bảng, như một đường mà tuổi của các hạng mục đang tiến hành có thể được so sánh (xem chủ đề 2.1, Các thước đo dòng chảy).

**4. Giữ kích thước hạng mục tương đối đồng đều.** Dự báo dựa trên thông lượng hiệu quả nhất khi các hạng mục nhỏ và đủ giống nhau để đếm. Các đội đạt được điều đó bằng cách cắt công việc thành mảnh nhỏ nhất vẫn mang lại giá trị, một thói quen của phân phối phần mềm liên tục. Nếu các hạng mục biến thiên rộng, hãy theo dõi các chuỗi riêng cho các loại công việc khác nhau.

**5. Làm mới dự báo bất cứ khi nào sự việc thay đổi.** Một dự báo là một cái nhìn sống. Khi phạm vi thay đổi, cỡ đội thay đổi, hoặc một sự cố lớn tiêu tốn một tuần, hãy chạy lại nó và nói với các bên liên quan. Hãy đánh phiên bản cho các dự báo để bạn có thể đánh giá chúng sau này.

### Lập kế hoạch theo năng lực thật

**6. Phân bổ năng lực theo loại công việc.** Ghi lại tỷ lệ công việc đã hoàn tất của đội là thay đổi có kế hoạch, công việc vận hành ngoài kế hoạch, yêu cầu dịch vụ và cải tiến. Hãy lập kế hoạch theo tỷ lệ mà kinh nghiệm cho thấy, không phải theo lý tưởng. Các đội vận hành dịch vụ đang chạy thường thấy rằng một phần ba hoặc hơn năng lực của họ đi vào công việc vận hành, và con số đó là của họ để đo, không phải để vay mượn (xem chủ đề 2.9, Công việc vận hành và công việc ngoài kế hoạch).

**7. Dành sẵn năng lực cho cải tiến.** Cải tiến liên tục là một phần thường trực của công việc, nên hãy lập kế hoạch thời gian cho nó trong phân bổ, và bảo vệ nó. Các đội ép nó ra trong mỗi giai đoạn bận thấy tải vận hành của mình tăng, điều này lại ép nó thêm. Hãy theo dõi tỷ lệ cải tiến và tác động của các cải tiến lên tỷ lệ vận hành.

**8. Đừng lập kế hoạch ở mức sử dụng đầy.** Một đội được lập kế hoạch ở 100 phần trăm không có chỗ cho biến thiên, và hàng đợi lớn lên khi mức sử dụng tiến gần giới hạn (xem chủ đề 2.3, Công việc đang làm dở và lý thuyết hàng đợi). Hãy để lại độ dư cho điều bất ngờ, và coi nó là một lựa chọn thiết kế chứ không phải lãng phí.

### Dùng ước lượng cẩn thận nếu bạn dùng chúng

**9. Coi vận tốc là một công cụ hỗ trợ lập kế hoạch cục bộ.** Nếu một đội định cỡ công việc bằng điểm câu chuyện, vận tốc của nó có thể giúp nó quyết định nhận bao nhiêu trong cuộc trao đổi lập kế hoạch kế tiếp, và nó chỉ nên được so sánh với quá khứ gần đây của chính đội đó. Đừng bao giờ so sánh các đội, đặt mục tiêu vận tốc, hay báo cáo vận tốc lên trên như một thước đo năng suất. Điểm không có đơn vị chung giữa các đội, và áp lực nâng con số làm phồng các ước lượng mà không giao thêm được gì.

**10. Thỉnh thoảng so sánh ước lượng với thời gian chu trình thực tế.** Vẽ các ước lượng so với thời gian các hạng mục thực sự mất. Nếu các ước lượng lớn không mất lâu hơn các ước lượng nhỏ, công sức ước lượng không mua được nhiều, và việc đếm hạng mục có thể phục vụ đội tốt như vậy. Nếu chúng tương quan, các ước lượng mang thông tin đáng giữ. Hãy để đội quyết định bằng dữ liệu.

### Đo xem nó có hiệu quả không

**11. Ghi lại mọi dự báo và chấm điểm nó.** Hãy ghi lại dự báo, khoảng và kết quả thực tế, rồi tính tỷ lệ trúng. Một dự báo bách phân vị thứ 85 được hiệu chuẩn tốt nên trở thành sự thật khoảng 85 phần trăm số lần. Nếu số lần trúng cao hay thấp xa, hãy điều chỉnh phương pháp. Chia sẻ nhật ký với các bên liên quan, vì lòng tin vào dự báo được xây từ thành tích.

**12. Đánh giá mục tiêu phân phối theo kết quả.** Một mục tiêu như "khách hàng có thể thanh toán bằng hóa đơn" đạt khi khách hàng làm được điều đó, không phải khi các tác vụ được đóng. Hãy thống nhất mục tiêu với các bên liên quan bằng lời giản dị, rà soát chúng cùng nhau, và ghi lại kết quả. Điều này giữ việc lập kế hoạch gắn với sự cộng tác liên tục, và nó làm nản việc giao công việc mà không ai dùng (xem chủ đề 1.3, Kết quả hơn sản lượng: chọn điều cần đo).

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Tỷ lệ dự báo trúng | Nêu các khoảng rất rộng để mọi dự báo đều trúng; dự báo lại sau sự việc | Độ rộng khoảng dự báo; giữ dự báo gốc trong nhật ký; so sánh các khoảng với lịch sử của đồng nghiệp |
| Độ rộng khoảng dự báo | Thu hẹp các khoảng để trông tự tin | Tỷ lệ dự báo trúng; yêu cầu khoảng được xây từ lịch sử có ghi lại |
| Mức thành công mục tiêu phân phối | Đặt các mục tiêu dễ; định nghĩa lại mục tiêu sau sự việc; tính sản lượng là kết quả | Các bên liên quan đánh giá kết quả; lời văn mục tiêu được giữ trong nhật ký; kiểm tra dữ liệu sử dụng cho thay đổi đã giao |
| Tỷ lệ thay đổi phạm vi | Đóng băng phạm vi bằng cách từ chối các thay đổi hợp lệ; giấu thay đổi phạm vi bằng cách định cỡ lại hạng mục | Mức hài lòng của các bên liên quan về sự đáp ứng; lý do thay đổi được ghi lại |
| Phân bổ năng lực | Gắn nhãn sai công việc vận hành là cải tiến; giấu tải vận hành bằng cách làm việc ngoài bảng | Đối chiếu với bản ghi sự cố và yêu cầu; lấy mẫu hạng mục để kiểm tra loại |
| Độ ổn định thông lượng | Tách hạng mục thành các mảnh tầm thường để nâng số đếm; đóng hạng mục mà không hoàn tất | Phân phối kích thước hạng mục; tỷ lệ mở lại; lấy mẫu để kiểm tra giá trị được giao |
| Vận tốc cục bộ | Thổi phồng ước lượng; tách câu chuyện để nhận điểm; so sánh các đội | Giữ nó riêng trong đội; so sánh với thông lượng và thời gian chu trình; không bao giờ đặt mục tiêu |

Một kết quả đọc lành mạnh là các dự báo trở thành sự thật với tỷ lệ gần như đã nêu, các mục tiêu mà các bên liên quan đồng ý là đã đạt, một bức tranh năng lực khớp với điều đội trải nghiệm, và một con số vận tốc mà, nếu nó tồn tại, được đội dùng và không ai khác.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Dự báo dựa trên dòng chảy | Dùng dữ liệu thật, chống được sự thổi phồng, cho các khoảng | Cần lịch sử ổn định và các hạng mục kích thước tương tự |
| Dự báo dựa trên ước lượng | Nhanh để bắt đầu, khuyến khích thảo luận về công việc | Chủ quan, bị thổi phồng dưới áp lực, không so sánh được giữa các đội |
| Cam kết một ngày duy nhất | Đơn giản để truyền đạt | Giấu rủi ro; trừng phạt sự trung thực |
| Khoảng kèm xác suất | Trung thực về độ bất định | Lúc đầu khó đọc hơn với một số bên liên quan |
| Lập kế hoạch ở mức sử dụng đầy | Trông hiệu quả | Hàng đợi lớn lên; không có chỗ cho sự cố hay học hỏi |
| Độ dư có kế hoạch | Hấp thụ biến thiên và hỗ trợ cải tiến | Trông như năng lực nhàn rỗi với người chưa bị thuyết phục |

Câu trả lời dạng văn xuôi là bắt đầu từ dữ liệu dòng chảy, chỉ thêm ước lượng nơi chúng giúp đội, và nói bằng các khoảng. Nơi một hợp đồng đòi một ngày, hãy đưa ra ngày mà bách phân vị thứ 85 hoặc 95 hỗ trợ và nói điều gì sẽ thay đổi nó.

## Câu hỏi để thảo luận với đội nhóm

**1. Chúng ta sẽ nói gì nếu một bên liên quan hỏi "khi nào sẽ xong" và muốn một câu trả lời trung thực?**
Hãy yêu cầu đội trả lời cho một phần công việc thật, trước tiên bằng một ngày duy nhất rồi bằng một khoảng. Để ý sự khác biệt trong mức độ thoải mái của mỗi câu trả lời. Người điều phối nên ghi lại điều đội cần biết để đưa ra khoảng một cách trung thực, như lịch sử, kích thước hạng mục và các rủi ro đã biết.

**2. Thực sự bao nhiêu năng lực của chúng ta đi vào thay đổi có kế hoạch, và làm sao chúng ta biết?**
Xem công việc đã hoàn tất của ba tháng qua theo loại. So sánh với kế hoạch mà đội đã đặt. Cuộc trò chuyện thường lộ ra rằng công việc vận hành lớn hơn kế hoạch, và công việc cải tiến nhỏ hơn. Thống nhất phân bổ nên là gì, và quyết định nào sẽ thay đổi nó.

**3. Ước lượng giúp chúng ta ở đâu, và ở đâu chúng chỉ tốn thời gian?**
Vẽ một mẫu các ước lượng so với thời gian chu trình thực tế. Thảo luận liệu các ước lượng lớn hơn có thật sự chậm hơn không. Nếu mối liên hệ yếu, hãy hỏi đội sẽ làm gì khác nếu chỉ đếm hạng mục. Quyết định tiếp tục, đơn giản hóa hay ngừng ước lượng trong một thời gian thử.

**4. Ai thấy các con số lập kế hoạch cấp đội của chúng ta, và chúng xảy ra chuyện gì ở đó?**
Truy từng con số lập kế hoạch từ đội đến khán giả của nó. Hỏi liệu có ai dùng nó để so sánh các đội hay đặt mục tiêu không. Nếu có, hãy thảo luận cách chấm dứt điều đó và đề xuất gì thay thế. Người điều phối nên sẵn sàng giải thích rằng các con số cục bộ mất giá trị khi chúng đi xa.

**5. Lần nào dự báo của chúng ta thất bại, và chúng ta đã học được gì?**
Chọn một lần trượt và truy nó. Đó là thay đổi phạm vi, một sự cố lớn, một phụ thuộc hay một giả định sai? Điều gì lẽ ra đã báo hiệu sớm hơn? Thống nhất một thay đổi cho thực hành dự báo, như ghi lại các phụ thuộc hoặc làm mới dự báo hằng tuần.

**6. Chúng ta đã đạt những mục tiêu nào quý trước, và ai nói vậy?**
Liệt kê các mục tiêu phân phối và ai đã đánh giá từng cái. Nếu đội tự đánh giá mục tiêu của mình, hãy thảo luận cách đưa các bên liên quan vào. Cuộc trò chuyện hỗ trợ sự cộng tác liên tục, và nó cho thấy các mục tiêu là về kết quả hay về tác vụ.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối sở hữu dự báo và dữ liệu dòng chảy hỗ trợ nó. Họ nên công bố các khoảng, giữ hạng mục nhỏ, và dự báo lại khi sự việc thay đổi. Các đội chọn định cỡ công việc bằng điểm nên giữ các con số bên trong đội. Mục đích là một dòng đều đặn công việc có giá trị đã hoàn tất, và một dự báo mà các bên liên quan tin vì nó có thành tích.

### Đội dịch vụ và vận hành

Các đội vận hành mang nhu cầu làm gián đoạn kế hoạch. Họ nên chia sẻ tải sự cố và yêu cầu với các đội phân phối, để các kế hoạch năng lực bắt đầu từ các con số thật. Các đội vận hành cũng phân phối thay đổi có thể dùng cùng dự báo dựa trên dòng chảy cho công việc của chính họ. Lập kế hoạch chung cho công việc thay đổi và vận hành là một nơi tốt cho sự cộng tác liên tục giữa cả hai nhóm.

### Lãnh đạo và quản trị

Lãnh đạo quyết định một dự báo là một tuyên bố rủi ro hay một lời hứa. Họ nên yêu cầu các khoảng, tài trợ độ dư và cải tiến, và chống lại việc dùng vận tốc hay thông lượng để so sánh các đội. Các cơ quan quản trị nên xem tỷ lệ dự báo trúng theo thời gian và các kết quả mục tiêu, và coi những lần trượt lặp lại là tín hiệu về hệ thống, như các phụ thuộc và tải vận hành, không phải về con người.

### Khách hàng và người dùng

Người dùng quan tâm khi nào họ sẽ thấy thay đổi và nó có giúp ích không. Một khoảng kèm mức tin cậy được nêu phục vụ họ tốt hơn một ngày bị trượt. Họ nên được tham gia đánh giá liệu các mục tiêu có đạt không, vì họ là những người cảm nhận kết quả. Nói với người dùng khi một dự báo thay đổi, và vì sao, là một phần của việc coi họ là người cộng tác.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Đội số của một công ty điện khu vực xây một cổng thanh toán hóa đơn cho khách hàng và vận hành nó trên môi trường thật. Các con số dưới đây chỉ mang tính minh họa.

Các bên liên quan yêu cầu đội cho một ngày cho tính năng kế hoạch trả góp mới gồm 22 hạng mục. Quý trước đội đưa ra một ngày chắc chắn dựa trên các ước lượng của mình, trễ năm tuần vì hai sự cố lớn, và mất lòng tin của các bên liên quan. Lần này trưởng phân phối kéo thông lượng của 20 tuần qua, dao động từ 3 đến 9 hạng mục mỗi tuần với trung vị 6, và ghi nhận công việc vận hành chiếm khoảng 35 phần trăm các hạng mục đã hoàn tất.

Chị chạy một mô phỏng từ lịch sử. Nó cho thấy 22 hạng mục hoàn tất trong vòng 4 tuần khoảng một nửa số lần, trong vòng 6 tuần khoảng 85 phần trăm số lần, và trong vòng 8 tuần khoảng 95 phần trăm số lần. Chị trình bày ba ngày này với các bên liên quan, cùng các giả định: cỡ đội không đổi, tải vận hành như 20 tuần qua, và không có phạm vi mới. Một chủ sở hữu sản phẩm hỏi về việc ra mắt vào một ngày lập hóa đơn cụ thể cách tám tuần. Đội và các bên liên quan thống nhất lập kế hoạch cho ngày bách phân vị 85, giữ hai tuần cuối làm đệm, và đặt một điểm kiểm tra mỗi hai tuần để dự báo lại.

Ở điểm kiểm tra đầu tiên, một lỗi ở cổng thanh toán đã chiếm ba ngày và mô phỏng dịch ngày bách phân vị 85 đi một tuần. Đội nói với các bên liên quan ngay trong ngày, kèm lý do, và họ đồng ý chuyển một hạng mục giá trị thấp ra ngoài. Tính năng chạy thật vào ngày đệm. Mục tiêu phân phối, "khách hàng có thể thiết lập kế hoạch trả góp mà không cần gọi điện", được chủ sở hữu sản phẩm và một nhóm khách hàng đánh giá sau ba tuần. Nó đạt với phần lớn khách hàng, và một chủ đề bình luận cho thấy sự nhầm lẫn ở một màn hình, được đưa vào tồn đọng. Đội ghi lại rằng tỷ lệ dự báo trúng của họ trong quý là bốn trên năm. Các bên liên quan yêu cầu trưởng phân phối mang các khoảng dự báo đến phiên lập kế hoạch tiếp theo, và đội bỏ việc dùng điểm câu chuyện vì đếm hạng mục cho cùng một câu trả lời.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy lập kế hoạch từ dòng công việc đã hoàn tất và sửa thường xuyên cùng các bên liên quan, đưa ra các khoảng thay vì ngày. Một thực hành tốt là dự báo bằng lịch sử thông lượng của chính đội và cho thấy khoảng ở mỗi buổi rà soát định kỳ. Điều cần lưu ý là bất kỳ con số lập kế hoạch cục bộ nào của đội, như vận tốc, trở thành mục tiêu ngay khi nó được so sánh giữa các đội.

### AI

Sự hỗ trợ của AI có thể thay đổi thông lượng nhanh và không đều, khiến lịch sử cũ là một hướng dẫn kém trong một thời gian. Hãy đánh dấu ngày các công cụ AI được áp dụng trên biểu đồ thông lượng, nới rộng khoảng dự báo sau thay đổi, và ghép tỷ lệ dự báo trúng với làm lại. Điều cần lưu ý là các ước lượng do AI tạo ra trông chính xác, nên hãy coi chúng là đầu vào cho thảo luận và kiểm tra chúng với bản ghi của chính đội.

### Tự động hóa

Hãy tính dự báo tự động từ dữ liệu trình theo dõi, để chúng làm mới mà không cần một cuộc họp. Hãy theo dõi độ chính xác của các dự báo đó như một chỉ số của phương pháp dự báo. Điều cần lưu ý là một dự báo tự động được cho thấy mà không có khoảng của nó mời gọi sự tự tin giả, nên hãy cho thấy khoảng theo mặc định.

### Phân tích

Hãy dùng mô phỏng hoặc các khoảng dựa trên bách phân vị từ thông lượng quá khứ, và báo cáo tỷ lệ dự báo trúng kèm số dự báo đứng sau nó. Quyết định được cung cấp thông tin là hứa gì và khi nào lập kế hoạch lại. Điều cần lưu ý là dự báo thất bại khi phạm vi hoặc năng lực dịch chuyển, nên hãy theo dõi tỷ lệ thay đổi phạm vi bên cạnh chúng.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Các ưu tiên thay đổi nhanh, nên hãy giữ dự báo ngắn và thô. Hãy theo dõi thông lượng từ đầu, vì nó không tốn gì, và cho những người sáng lập các khoảng. Chống lại việc nhập về một hệ thống lập kế hoạch xây cho các đội lớn.

**Doanh nghiệp nhỏ.** Một hoặc hai người có thể cùng làm công việc thay đổi và vận hành, không có năng lực dư. Hãy tường minh về sự phân chia, và nói với chủ doanh nghiệp khi một sự cố sẽ đẩy một ngày. Một số đếm hằng tuần đơn giản các hạng mục hoàn tất là đủ.

**Doanh nghiệp lớn.** Nhiều đội và phụ thuộc làm dự báo phụ thuộc vào dòng chảy của các đội khác. Hãy dự báo từng đội từ dữ liệu của chính nó, làm cho các phụ thuộc hiển thị, và kết hợp các khoảng cẩn thận, vì cộng các kịch bản tốt nhất cho một tổng gây hiểu lầm. Tránh các bản tổng hợp so sánh các đội theo vận tốc.

**Chính phủ và khu vực công.** Ngân sách cố định, mua sắm và các ngày theo luật tạo áp lực cho các cam kết một ngày duy nhất. Hãy nêu ngày mà bách phân vị đã chọn hỗ trợ, giải thích các giả định, và ghi lại các đánh đổi phạm vi một cách công khai. Nơi có một ngày bắt buộc, hãy lập kế hoạch phạm vi cho vừa với nó (xem chủ đề 8.5, Báo cáo theo quy định và cho cơ quan nhà nước).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Chi phí thấp. Dữ liệu thông lượng và thời gian chu trình thường đã có trong trình theo dõi công việc của đội. Một bảng tính dự báo hoặc một tập lệnh nhỏ mất một ngày để dựng, và một dự báo mất vài phút để cập nhật. Chi phí lặp lại là thời gian ghi lại dự báo và kết quả, và tổ chức một cuộc trò chuyện điểm kiểm tra ngắn với các bên liên quan.

Lợi tức đến từ ít bất ngờ hơn và quyết định tốt hơn. Các bên liên quan hiểu rủi ro có thể chọn một biên độ đệm, điều chỉnh phạm vi hoặc sắp xếp lại công việc sớm. Các đội tốn ít thời gian hơn cho các nghi lễ ước lượng nếu đếm hạng mục phục vụ tốt như vậy. Các xung đột về ngày bị trượt và những lối tắt chất lượng mà chúng khơi ra giảm đi. Hãy xây hồ sơ từ bản ghi của chính bạn: tỷ lệ dự báo đã đứng vững, thời gian dành cho ước lượng, và các thay đổi phạm vi được thực hiện sớm thay vì muộn. Đừng vay mượn các số liệu về khả năng dự đoán từ các tổ chức khác.

## Phản mẫu và cạm bẫy

- **Coi một dự báo là một cam kết.** Nó biến dự báo thành mục tiêu, và sự trung thực trở nên tốn kém. Hãy đưa ra các khoảng và sửa chúng.
- **So sánh các đội bằng vận tốc.** Điểm là cục bộ, và việc so sánh thổi phồng chúng. Chỉ so sánh một đội với quá khứ của chính nó.
- **Lập kế hoạch ở mức sử dụng đầy.** Biến thiên biến thành chậm trễ. Hãy để lại độ dư.
- **Bỏ qua công việc vận hành.** Kế hoạch thất bại vì tải mà không ai lên kế hoạch. Hãy đo và lập kế hoạch phân bổ.
- **Dùng một ngày duy nhất cho mọi thứ.** Hãy dùng bách phân vị và nói bạn đã chọn cái nào.
- **Ước lượng chính xác hơn những gì dữ liệu hỗ trợ.** Các ước lượng chi tiết cho công việc xa là kém đáng tin nhất. Hãy dự báo công việc xa một cách thô.
- **Đặt mục tiêu vận tốc hoặc thông lượng.** Con số sẽ tăng và giá trị thì không.
- **Không bao giờ chấm điểm dự báo.** Không có thành tích, lòng tin không thể lớn lên.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Phương pháp dự báo | Phỏng đoán một ngày | Ước lượng cộng bằng tay | Các khoảng dựa trên dòng chảy kèm bách phân vị | Dự báo được ghi lại và chấm điểm; phương pháp được tinh chỉnh từ tỷ lệ trúng | Dự báo kết hợp giữa các đội và phụ thuộc, chia sẻ trực tiếp với các bên liên quan |
| Lập kế hoạch năng lực | Kế hoạch bỏ qua công việc vận hành | Tải vận hành biết sơ bộ | Năng lực được phân bổ theo loại công việc từ dữ liệu | Phân bổ được rà soát theo kết quả; thời gian cải tiến được bảo vệ | Năng lực được lập kế hoạch chung với nhà cung cấp và vận hành giữa các dịch vụ |
| Mục tiêu và việc dùng các con số | Mục tiêu là danh sách tác vụ | Mục tiêu được viết ra | Mục tiêu được đánh giá theo kết quả cùng các bên liên quan | Các lần trượt được phân tích như tín hiệu hệ thống; các con số cục bộ được giữ riêng | Mục tiêu được đặt và đánh giá cộng tác với người dùng; việc học được chia sẻ giữa các đội |

## Danh sách kiểm tra

- [ ] Dự báo được xây từ lịch sử thông lượng và thời gian chu trình của chính đội.
- [ ] Dự báo được đưa ra dưới dạng các khoảng kèm bách phân vị, với các giả định được nêu.
- [ ] Mọi dự báo được ghi lại kèm khoảng và kết quả thực tế.
- [ ] Tỷ lệ dự báo trúng và độ rộng khoảng được rà soát hằng tháng.
- [ ] Năng lực được phân bổ theo loại công việc, gồm cả công việc vận hành và cải tiến.
- [ ] Mức sử dụng kế hoạch để lại độ dư cho biến thiên và sự cố.
- [ ] Mọi đơn vị định cỡ hay vận tốc đều riêng cho đội và không mang mục tiêu.
- [ ] Mục tiêu phân phối được viết dưới dạng kết quả và được đánh giá cùng các bên liên quan.
- [ ] Thay đổi phạm vi được ghi lại kèm lý do.
- [ ] Dự báo được làm mới khi sự việc thay đổi, và các bên liên quan được thông báo.

## Lời nhắc AI

**Dựng một dự báo dựa trên thông lượng.**

```text
Our team finished these numbers of items in each of the last [number] weeks:
[paste weekly counts]. We want to know when [number] items are likely to be
finished. Explain how to produce a probability range using our own history,
give a worked example of a simple simulation method, and describe what
assumptions it makes. Do not invent history or benchmark values. List your
assumptions and the conditions under which the forecast would not apply.
```

**Rà soát cách chúng ta dùng ước lượng.**

```text
We size items as [unit] and use [practice] to plan. Here is a sample of
[number] finished items with estimates and actual cycle times in days:
[paste data]. Describe whether estimates predict cycle time in this sample,
what that implies for how much effort estimating deserves, and what we could
try instead. Do not claim results beyond the data. List your assumptions.
```

**Lập kế hoạch năng lực giữa công việc thay đổi và vận hành.**

```text
Over the last [period], our team finished [counts] items of these types:
[planned change, incidents, requests, improvement]. Propose a capacity
allocation for the next [period] that leaves slack, and describe how to
explain it to stakeholders. Suggest how to detect if operational work is
being mislabeled. Do not invent industry ratios. List your assumptions.
```

**Soạn một buổi rà soát dự báo với các bên liên quan.**

```text
Draft an agenda and a one-page summary for a forecast checkpoint on
[piece of work]. Data: original forecast [range], current status [description],
changes since the last checkpoint [list]. Include the updated range, what
changed it, options for scope or timing, and the questions we need
stakeholders to answer. Use plain language. List your assumptions.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn ghép đôi cho một chỉ số dự báo hoặc lập kế hoạch.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số lập kế hoạch đã sửa vẫn giữ vectơ lợi dụng và rào chắn của nó.

## Điểm chính cần nhớ

- Dự báo từ dòng công việc đã hoàn tất, và đưa ra các khoảng kèm xác suất thay vì một ngày duy nhất.
- Lập kế hoạch theo năng lực thật, gồm công việc vận hành, thời gian cải tiến và độ dư.
- Coi bất kỳ đơn vị ước lượng hay vận tốc nào là một công cụ riêng cho một đội, không bao giờ là mục tiêu hay phép so sánh.
- Chấm điểm các dự báo của bạn: tỷ lệ trúng xây dựng lòng tin.
- Đánh giá mục tiêu phân phối theo kết quả, cùng các bên liên quan và người dùng.
- Tin tưởng và hỗ trợ đội: dự báo trung thực đến từ những người không bị trừng phạt vì sự bất định.

## Tài liệu tham khảo và đọc thêm

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
