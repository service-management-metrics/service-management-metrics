# Chỉ số quản lý tài sản CNTT

**Bạn không thể hỗ trợ, bảo vệ, hay chi trả hợp lý cho thứ bạn không tìm thấy, nên hãy đo bản ghi tài sản của bạn chính xác, đầy đủ và hiện hành đến đâu, và xây thói quen ghi tài sản như sản phẩm phụ của công việc hằng ngày thay vì một đợt dọn dẹp hằng năm.**

## Tổng quan và động lực

Mọi dịch vụ dựa trên các thứ: máy tính xách tay, máy chủ, giấy phép, tài khoản đám mây, thiết bị mạng, cùng dữ liệu và hợp đồng gắn với chúng. [Quản lý tài sản CNTT](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) là tập các thực hành kinh doanh nối các chức năng tài chính, hợp đồng và kiểm kê để hỗ trợ quản lý vòng đời và ra quyết định chiến lược cho môi trường CNTT. Nó trả lời các câu hỏi mà các thực hành khác phụ thuộc vào. Chúng ta sở hữu gì? Nó ở đâu? Ai chịu trách nhiệm về nó? Nó tốn bao nhiêu? Khi nào nó phải gia hạn, vá, hay thay thế?

Phân phối liên tục và ITIL gặp nhau vụng về trên vùng đất này. Các đội giao phần mềm liên tục tạo và hủy hạ tầng suốt: container, máy ảo, môi trường kiểm thử và tài khoản đám mây xuất hiện trong vài phút. Một bảng tính hằng quý không theo kịp. ITAM từ truyền thống ITIL khăng khăng đòi bản ghi, người sở hữu và vòng đời, và sự khăng khăng đó đúng, vì tài sản không được quản lý là nơi khoảng trống an ninh, tiền lãng phí và thất bại tuân thủ lớn lên. Đóng góp linh hoạt là sự cộng tác liên tục giữa mua sắm, tài chính, an ninh và vận hành, và thói quen thực tế ghi tài sản tự động khi chúng được tạo, qua các đường ống và hạ tầng dưới dạng mã, để bản ghi là sản phẩm phụ của công việc.

Ba thuật ngữ lặp lại trong chủ đề này.

- **Tài sản:** một hạng mục có giá trị với tổ chức được quản lý qua một vòng đời. Trong ITAM điều này gồm phần cứng, phần mềm, tài nguyên đám mây, gói đăng ký, và đôi khi là dữ liệu.
- **Bản ghi tài sản:** mục mô tả một tài sản: nó là gì, ai sở hữu, nó ở đâu, nó ở trạng thái nào, nó tốn bao nhiêu, và nó liên kết với gì.
- **Vòng đời:** các giai đoạn một tài sản đi qua, thường là được yêu cầu, được mua, được nhận, được triển khai, đang dùng, được bảo trì, nghỉ hưu và được thanh lý. Tư duy [vòng đời sản phẩm](https://en.wikipedia.org/wiki/Product_lifecycle) áp dụng cho mỗi lớp tài sản, với các giai đoạn khác nhau cho một máy tính xách tay và một gói đăng ký đám mây.

ITAM chồng lấp với quản lý cấu hình, theo dõi quan hệ giữa các thành phần để bạn hiểu tác động của thay đổi, và các chủ đề kế tiếp lần lượt nói về phần mềm, phần cứng và cấu hình (xem chủ đề 7.2, Chỉ số tài sản phần mềm và giấy phép, chủ đề 7.3, Chỉ số vòng đời tài sản phần cứng, và chủ đề 7.4, Chỉ số chất lượng cấu hình và CMDB). Sự khác biệt là về mục đích: quản lý tài sản nhấn mạnh quyền sở hữu, chi phí và vòng đời, trong khi quản lý cấu hình nhấn mạnh cấu trúc và phụ thuộc. Cùng một bản kiểm kê thường nuôi cả hai.

Tiêu chuẩn mà hầu hết chương trình ITAM trích dẫn là ISO/IEC 19770, một họ tiêu chuẩn cho các hệ thống quản lý tài sản CNTT. Hãy trích dẫn nó theo tên và phạm vi, và đọc nó từ cơ quan tiêu chuẩn trước khi dựa vào bất kỳ chi tiết nào. Chủ đề này không sao chép văn bản của nó.

Các chỉ số tài sản dễ bị biến thành mục tiêu, và các mục tiêu dễ đạt trên giấy. Một bản kiểm kê có thể cho thấy độ chính xác 100 phần trăm vì nó chỉ ghi những gì đã biết. Rào chắn từ [định luật Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) áp dụng: hãy đo độ chính xác so với bằng chứng độc lập, và coi một con số hoàn hảo là lý do để nhìn kỹ hơn (xem chủ đề 1.2, Định luật Goodhart và tâm lý học của chỉ số).

## Nguyên tắc chính

- **Ghi vào lúc thay đổi.** Tài sản nên vào và ra khỏi bản ghi như một phần của công việc tạo hoặc gỡ chúng.
- **Đo so với bằng chứng độc lập.** Độ chính xác nghĩa là sự khớp với thực tế, được kiểm tra bằng một phương pháp khác với chính bản ghi.
- **Mỗi tài sản có một người sở hữu.** Một tài sản không ai sở hữu sẽ không được vá, trả tiền hợp lý, hay cho nghỉ hưu.
- **Giữ bản ghi nhỏ nhất có thể.** Hãy nắm bắt các trường mà quyết định cần, và không hơn.
- **Kết hợp các nguồn.** Công cụ khám phá, mua sắm, tài chính, danh tính và hóa đơn đám mây mỗi cái thấy một phần của hệ thống.
- **Cộng tác giữa các chức năng.** Mua sắm, tài chính, an ninh và vận hành chia sẻ bản ghi và chất lượng của nó.
- **Coi khoảng trống là thông tin.** Một tài sản không được tính đến là một phát hiện cần hiểu, không phải một thất bại để giấu.

## Định nghĩa chỉ số

| Chỉ số | Định nghĩa | Công thức | Đơn vị | Nguồn dữ liệu | Thực hành ITIL | Đối ứng linh hoạt | Nhịp |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Độ chính xác kiểm kê | Tỷ lệ tài sản lấy mẫu có bản ghi khớp với điều tìm thấy | số tài sản lấy mẫu mà bản ghi khớp với bằng chứng vật lý hoặc kỹ thuật trên mọi trường đã thống nhất / số tài sản được lấy mẫu | phần trăm | Mẫu kiểm toán so với sổ đăng ký tài sản và dữ liệu khám phá | Quản lý tài sản CNTT; quản lý cấu hình | Định nghĩa hoàn thành gồm đăng ký tài sản | Hằng quý |
| Độ phủ khám phá | Tỷ lệ tài sản kỳ vọng được khám phá thấy trong kỳ | số tài sản được ít nhất một nguồn khám phá thấy trong 30 ngày qua / số tài sản trong sổ đăng ký mà khám phá có thể thấy | phần trăm | Báo cáo công cụ khám phá ghép với sổ đăng ký | Quản lý tài sản CNTT; quản lý giám sát và sự kiện | Trạng thái hạ tầng dưới dạng mã khớp với thực tế | Hằng tháng |
| Tỷ lệ đối chiếu | Tỷ lệ tài sản khớp qua các nguồn độc lập | số tài sản khớp ở cả sổ đăng ký và một nguồn thứ hai (ví dụ mua sắm, danh tính, hoặc hóa đơn đám mây) / số tài sản ở một trong hai nguồn | phần trăm | Bản xuất sổ đăng ký, mua sắm, danh tính, hóa đơn đám mây | Quản lý tài sản CNTT; quản lý nhà cung cấp | Một nguồn sự thật duy nhất cho các môi trường | Hằng tháng |
| Tỷ lệ tài sản không có chủ | Tỷ lệ tài sản không có người sở hữu hợp lệ, có tên | số tài sản không có chủ hoặc có chủ đã rời đi / số tài sản trong sổ đăng ký | phần trăm | Sổ đăng ký ghép với thư mục nhân sự | Quản lý tài sản CNTT; quản lý an toàn thông tin | Quyền sở hữu rõ ràng của dịch vụ và thành phần | Hằng tháng |
| Độ đầy đủ giai đoạn vòng đời | Tỷ lệ tài sản có giai đoạn vòng đời hiện hành và các ngày mà giai đoạn đó yêu cầu | số tài sản có giai đoạn và các ngày bắt buộc được ghi / số tài sản trong sổ đăng ký | phần trăm | Sổ đăng ký | Quản lý tài sản CNTT; quản lý phát hành và triển khai | Vòng đời môi trường được theo dõi trong đường ống | Hằng tháng |
| Thời gian ghi nhận | Độ trễ giữa một thay đổi tài sản và cập nhật của nó trong sổ đăng ký | trung vị và bách phân vị thứ 85 của số giờ hoặc ngày từ sự kiện thay đổi đến cập nhật sổ đăng ký | ngày | Sự kiện thay đổi, mua sắm hoặc đường ống so với dấu thời gian sổ đăng ký | Quản lý tài sản CNTT; hỗ trợ thay đổi | Đăng ký tự động trong đường ống | Hằng tháng |
| Tỷ lệ tài sản không được tính đến | Tỷ lệ tài sản kỳ vọng không thể định vị hay giải thích lúc kiểm toán | số tài sản kỳ vọng nhưng không tìm thấy, và không được giải thích bởi một thanh lý đã phê duyệt / số tài sản kỳ vọng | phần trăm | Kết quả kiểm toán | Quản lý tài sản CNTT; quản lý an toàn thông tin | Phát hiện nhìn lại về đồ bị mất | Mỗi lần kiểm toán |

Hãy nêu phạm vi của "tài sản" cho mỗi lớp. Một máy tính xách tay, một máy ảo, một gói đăng ký và một giấy phép là khác nhau, và các trường bản ghi và bằng chứng khác nhau. Thời gian ghi nhận bắt đầu ở sự kiện tạo ra thay đổi, như hàng đã nhận, một lần chạy đường ống, hoặc một gói đăng ký bắt đầu, và dừng khi sổ đăng ký phản ánh nó. Hãy loại các tài sản cố ý nằm ngoài phạm vi, như container thử ngắn hạn, và liệt kê chúng là một lớp loại trừ trong sổ đăng ký.

## Khuyến nghị

### Quyết định bạn đang quản lý gì

**1. Liệt kê các lớp tài sản quan trọng và vì sao.** Bắt đầu với những lớp mang chi phí, rủi ro hoặc nghĩa vụ pháp lý: thiết bị người dùng cuối, máy chủ và tài khoản đám mây, thiết bị mạng, giấy phép và gói đăng ký phần mềm, và kho dữ liệu trọng yếu. Với mỗi lớp, viết ra các quyết định mà bản ghi phải hỗ trợ: vá, gia hạn, kiểm toán, làm mới, thanh lý. Bỏ qua các lớp mà không quyết định nào cần.

**2. Định nghĩa các trường tối thiểu.** Với mỗi lớp, chọn vài trường mà các quyết định đòi hỏi: định danh, loại, người sở hữu, địa điểm hoặc tài khoản, trạng thái, ngày mua và kết thúc, trung tâm chi phí, và liên kết với dịch vụ nó hỗ trợ. Một bản ghi ngắn mà chính xác đáng giá hơn một bản ghi dài đã cũ. Hãy ghi định nghĩa vào sổ đăng ký chỉ số.

**3. Gán một người sở hữu cho mỗi lớp và mỗi tài sản.** Người sở hữu lớp thiết kế bản ghi và quy trình. Người sở hữu tài sản là người hay đội chịu trách nhiệm về tài sản khi sử dụng. Dùng một đội, không phải một cá nhân, khi tài sản được dùng chung, và giữ thư mục hiện hành để các lần ra đi không làm tài sản mồ côi.

### Nắm bắt tài sản khi công việc diễn ra

**4. Đăng ký tài sản trong đường ống.** Nơi hạ tầng được tạo bằng mã, hãy để đường ống ghi vào sổ đăng ký khi tạo và gỡ. Điều đó làm thời gian ghi nhận gần bằng không và làm sổ đăng ký khớp với mã. Thực hành linh hoạt giao thay đổi liên tục hỗ trợ điều này: nếu mỗi lần triển khai cập nhật bản ghi, bản ghi hiếm khi sai.

**5. Liên kết mua sắm và sổ đăng ký.** Với phần cứng và phần mềm mua, hãy biến đơn đặt hàng hoặc việc tạo gói đăng ký thành kích hoạt cho một bản ghi, và việc nhận hàng hoặc kích hoạt thành kích hoạt cho một thay đổi trạng thái. Thực hành [quản lý hàng tồn kho](https://en.wikipedia.org/wiki/Inventory_management) cho hàng hóa vật lý đưa ra các mẫu hữu ích cho việc nhận, lưu trữ và xuất hạng mục. Nơi việc mua diễn ra ngoài mua sắm, như thẻ tín dụng của đội cho gói đăng ký, hãy thêm một kiểm tra hằng tháng dữ liệu chi phí.

**6. Dùng khám phá như một kiểm tra, không phải bản ghi.** Công cụ khám phá quét mạng và tài khoản đám mây và báo cáo điều chúng tìm thấy. Chúng giỏi nói cho bạn biết cái gì tồn tại và kém nói ai sở hữu hay vì sao. Hãy dùng chúng để phát hiện tài sản còn thiếu và chưa biết và để so sánh với sổ đăng ký. Bước khớp một nguồn với nguồn khác là một dạng [đối chiếu](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), cùng ý tưởng mà kế toán dùng để so sánh hai tập bản ghi.

**7. Gắn thẻ và nhãn lúc tạo.** Hãy yêu cầu một người sở hữu và một thẻ dịch vụ trên mọi tài nguyên đám mây và một nhãn trên mọi thiết bị vật lý. Các phương pháp [theo dõi tài sản](https://en.wikipedia.org/wiki/Asset_tracking) như mã vạch và thẻ tần số vô tuyến giúp với các hạng mục vật lý trong kho và văn phòng. Tài nguyên không có thẻ là phát hiện cho đội của người sở hữu, được xử lý như một phần bình thường của vận hành.

### Đo trung thực

**8. Kiểm toán bằng mẫu ngẫu nhiên.** Mỗi quý, hãy rút một mẫu ngẫu nhiên tài sản từ sổ đăng ký và kiểm tra chúng so với bằng chứng: tìm thiết bị, kiểm tra tài nguyên, xác nhận người sở hữu. Rồi rút một mẫu theo chiều ngược, từ kết quả khám phá và dữ liệu mua sắm, và kiểm tra mỗi cái có trong sổ đăng ký. Hai chiều làm lộ các khoảng trống khác nhau. Báo cáo độ chính xác cho từng lớp riêng.

**9. Canh chất lượng dữ liệu theo thời gian.** Độ đầy đủ, độ chính xác và tính kịp thời của bản ghi là các khía cạnh của [chất lượng dữ liệu](https://en.wikipedia.org/wiki/Data_quality). Hãy theo dõi xu hướng theo từng trường và từng lớp, và xem trường nào trôi nhanh nhất. Sự trôi ở người sở hữu và địa điểm là bình thường và cho bạn biết nơi cần tự động hóa.

**10. Báo cáo các khoảng trống.** Hãy cho thấy các tài sản không được tính đến, tỷ lệ không có chủ, và các hạng mục chưa đối chiếu cũng như độ chính xác tiêu đề. Một báo cáo giấu ngoại lệ là một báo cáo về chính báo cáo. Nêu tên một người sở hữu và một ngày cho mỗi loại khoảng trống.

### Khép vòng

**11. Cho tài sản nghỉ hưu cũng có chủ đích như khi tạo ra chúng.** Thanh lý cũng cần bản ghi: ngày, phương pháp, và với thiết bị từng chứa dữ liệu, bằng chứng rằng dữ liệu đã được xóa. Một bản ghi [chuỗi quản lý bằng chứng (chain of custody)](https://en.wikipedia.org/wiki/Chain_of_custody) cho thấy ai đã xử lý một tài sản và khi nào. Tài sản đã nghỉ hưu vẫn còn trong sổ đăng ký làm phồng chi phí và gây nhầm lẫn cho kiểm toán.

**12. Dùng bản ghi trong các quyết định hằng ngày.** Vá, gia hạn, ứng phó an ninh và lập ngân sách nên đọc từ sổ đăng ký. Khi mọi người dùng nó, họ sửa nó. Khi sổ đăng ký chỉ dành cho kiểm toán, nó mục ruỗng. Hãy rà soát việc dùng sổ đăng ký cùng các đội phụ thuộc vào nó, và sửa các trường họ phàn nàn trước.

## Vectơ lợi dụng và rào chắn

| Chỉ số | Cách bị lợi dụng | Chỉ số hoặc thực hành rào chắn đi kèm |
| --- | --- | --- |
| Độ chính xác kiểm kê | Lấy mẫu các tài sản dễ; chỉ kiểm toán sau một đợt dọn dẹp; tính một lần khớp trên ít trường hơn | Mẫu ngẫu nhiên do người ngoài đội rút; danh sách trường cố định; lấy mẫu từ cả hai chiều |
| Độ phủ khám phá | Thu hẹp "tài sản kỳ vọng" xuống những gì khám phá thấy được; loại các mạng khó quét | Ghi tài liệu các trường hợp loại trừ; so sánh với mua sắm và hóa đơn đám mây |
| Tỷ lệ đối chiếu | Chọn một nguồn thứ hai suy ra từ nguồn đầu; tự động khớp trên khóa yếu | Dùng các nguồn thật sự độc lập; kiểm tra ngẫu nhiên các lần khớp bằng tay |
| Tỷ lệ tài sản không có chủ | Gán một đội gom hết làm người sở hữu; nhập một người giữ chỗ | Số đếm tài sản do các đội gom hết sở hữu; mẫu xác nhận người sở hữu |
| Độ đầy đủ giai đoạn vòng đời | Điền các ngày mặc định; đặt mọi tài sản là "đang dùng" | So sánh giai đoạn với bằng chứng trong kiểm toán; xem phân phối tuổi |
| Thời gian ghi nhận | Ghi lùi ngày các sự kiện thay đổi; ghi thời điểm sự kiện là thời điểm bản ghi | So sánh với dấu thời gian hệ thống nguồn; dấu vết kiểm toán trên chỉnh sửa |
| Tỷ lệ tài sản không được tính đến | Xóa sổ tài sản mà không phê duyệt; phân loại lại chúng là đã thanh lý | Tỷ lệ phê duyệt và bằng chứng thanh lý; so sánh xóa sổ với bản ghi tài chính |

Một kết quả đọc lành mạnh là một con số độ chính xác ở dưới 100 phần trăm vì lý do trung thực, với các khoảng trống hiển thị đang co lại, những người sở hữu xác nhận tài sản của họ khi được hỏi, và một bản ghi mà mọi người dùng để ra quyết định.

## Đánh đổi: ưu điểm và nhược điểm

| Cách tiếp cận | Điểm mạnh | Điểm yếu |
| --- | --- | --- |
| Đăng ký tự động | Nhanh, nhất quán, ít công sức | Cần kỹ thuật; bỏ sót những gì ngoài đường ống |
| Đăng ký thủ công | Linh hoạt, dùng được cho mọi thứ | Chậm, dễ lỗi, mục ruỗng |
| Dựa trên khám phá | Tìm ra cái chưa biết | Không cung cấp được quyền sở hữu hay mục đích |
| Dựa trên mua sắm | Nắm bắt chi phí và hợp đồng | Bỏ sót các lần mua ngầm và gói miễn phí |
| Kiểm soát chặt việc mua | Bản ghi mạnh | Làm chậm các đội; khuyến khích cách lách |
| Kiểm soát nhẹ kèm kiểm tra | Nhanh; dựa vào lòng tin | Nhiều khoảng trống để tìm và sửa hơn |
| Lược đồ bản ghi lớn | Báo cáo phong phú | Khó giữ chính xác |
| Lược đồ bản ghi nhỏ | Dễ duy trì | Phân tích hạn chế |

Câu trả lời dạng văn xuôi là tự động hóa việc đăng ký nơi hạ tầng là mã, dùng dữ liệu khám phá và hóa đơn làm kiểm tra độc lập, và giữ bản ghi nhỏ. Hãy tin các đội tạo ra những gì họ cần, nhờ họ gắn thẻ nó, và xác minh bằng lấy mẫu.

## Câu hỏi để thảo luận với đội nhóm

**1. Nếu ngày mai chúng ta phải tìm mọi tài sản gắn với dịch vụ quan trọng nhất của mình, sẽ mất bao lâu?**
Chọn một dịch vụ và lần theo tài sản của nó từ sổ đăng ký và từ các nguồn khác. Tính giờ bài tập và ghi lại các khoảng trống. Người điều phối nên ghi lại nguồn nào khớp và nguồn nào không. Kết quả cho thấy sổ đăng ký là một công cụ làm việc hay một tài liệu.

**2. Những tài sản nào được tạo ra mà không ai trong phòng này biết?**
Hãy nghĩ về tài khoản đám mây, gói đăng ký, môi trường kiểm thử và thiết bị mua ngoài mua sắm. Hỏi chúng sẽ xuất hiện thế nào. Cuộc trò chuyện tìm ra các chỗ rò rỉ. Thống nhất một nguồn bằng chứng độc lập để thêm vào đối chiếu quý này.

**3. Ai sở hữu các tài sản chúng ta có hôm nay, và làm sao chúng ta biết chúng vẫn còn?**
Lấy một mẫu tài sản và nhờ những người sở hữu có tên xác nhận. Ghi lại bao nhiêu người sở hữu đã đổi vai trò hoặc rời đi. Quyết định thư mục và sổ đăng ký sẽ đồng bộ ra sao, ví dụ bằng một kiểm tra tự động khi ai đó rời đi.

**4. Làm sao chúng ta kiểm toán sổ đăng ký của chính mình mà không tự chấm bài?**
Thảo luận ai rút mẫu và ai kiểm tra nó. Hỏi điều gì sẽ xảy ra nếu kết quả kém. Người điều phối nên khám phá liệu mọi người có cảm thấy an toàn khi báo cáo một con số xấu, vì một cuộc kiểm toán không an toàn tạo ra con số đẹp.

**5. Chúng ta ghi gì mà không ai dùng?**
Liệt kê các trường trong sổ đăng ký và hỏi quyết định nào dùng mỗi cái. Các trường không có người dùng là ứng viên để gỡ. Các trường được dùng nhưng không đáng tin là ứng viên để tự động hóa. Thống nhất hai thay đổi.

**6. Điều gì xảy ra với một tài sản giữa "không còn cần" và "đã đi"?**
Lần theo một thiết bị đã nghỉ hưu hay một dịch vụ đã ngừng. Ai xác nhận dữ liệu đã được xóa? Khi nào bản ghi được đóng? Các khoảng trống trên đường này là nơi chi phí, rủi ro và phát hiện kiểm toán tích tụ.

## Bốn góc nhìn

### Đội sản phẩm và phân phối

Các đội phân phối tạo ra hầu hết tài sản mới, và họ cảm nhận việc giữ bản ghi như ma sát trừ khi nó tự động. Họ nên coi bản ghi tài sản là một phần của định nghĩa hoàn thành cho một môi trường, để đường ống đăng ký những gì chúng tạo ra, và gắn thẻ tài nguyên với người sở hữu. Họ được lợi từ một bản ghi chính xác khi cần tìm chi phí, vá, hay cho nghỉ hưu một môi trường.

### Đội dịch vụ và vận hành

Các đội vận hành phụ thuộc vào sổ đăng ký cho việc vá, ứng phó sự cố và năng lực. Họ nên đối chiếu khám phá với sổ đăng ký, theo đuổi tài sản không có chủ, và báo cáo khoảng trống như phát hiện. Họ cũng nắm việc xử lý vật lý: nhận, tạo ảnh, lưu trữ và thanh lý, nơi bản ghi chuỗi quản lý bằng chứng quan trọng.

### Lãnh đạo và quản trị

Lãnh đạo và kiểm toán viên dựa vào dữ liệu tài sản để kiểm soát chi phí, đảm bảo an ninh và tuân thủ. Họ nên yêu cầu phương pháp đo độ chính xác và danh sách khoảng trống, không chỉ tiêu đề, và tài trợ tự động hóa đăng ký. Quản trị nên chờ đợi sổ đăng ký được dùng trong quyết định và nên đối xử với 100 phần trăm được báo cáo bằng sự nghi ngờ.

### Khách hàng và người dùng

Người dùng trải nghiệm quản lý tài sản khi một thiết bị đến sẵn sàng, một giấy phép có đó khi cần, và một máy tính xách tay bị mất được xử lý tốt. Phản hồi của họ về tiếp nhận và thiết bị là bằng chứng về quy trình hoạt động ra sao trong thực tế (xem chủ đề 6.4, Trải nghiệm người dùng và nhân viên). Họ cũng có một vai trò: nói với CNTT khi thiết bị di chuyển hay rời đi.

## Trong thực tế: một ví dụ về quản lý dịch vụ

Bộ phận CNTT của một công ty hậu cần cỡ vừa hỗ trợ khoảng 2.400 nhân viên và vận hành một nền tảng sản phẩm trên hạ tầng đám mây. Các con số dưới đây chỉ mang tính minh họa.

Một cuộc kiểm toán nội bộ yêu cầu số thiết bị và tài nguyên đám mây công ty sở hữu. Sổ đăng ký cho thấy 3.100 thiết bị người dùng cuối và 1.850 tài nguyên đám mây. Người quản lý tài sản quyết định kiểm thử các con số trước khi báo cáo. Bà rút một mẫu ngẫu nhiên 100 thiết bị từ sổ đăng ký và thấy 87 cái khớp trên cả bốn trường đã thống nhất, độ chính xác 87 phần trăm. Từ chiều ngược lại, bà rút 100 thiết bị từ công cụ quản lý thiết bị đầu cuối và thấy 94 cái có trong sổ đăng ký. Độ phủ khám phá của hệ thống đám mây là 82 phần trăm, vì ba tài khoản do các đội dự án tạo không được kết nối với công cụ khám phá. Đối chiếu bản xuất hóa đơn đám mây với sổ đăng ký khớp 71 phần trăm tài nguyên được tính phí, và các cái không khớp chủ yếu là môi trường thử không có thẻ. Tỷ lệ tài sản không có chủ là 9 phần trăm, với một phần ba trong số đó do những người đã rời đi sở hữu.

Đội thực hiện bốn thay đổi cùng các đội sản phẩm và tài chính. Các mẫu đường ống giờ đăng ký mọi môi trường mới và yêu cầu một người sở hữu và thẻ dịch vụ. Hóa đơn đám mây hằng tháng được đối chiếu với sổ đăng ký, với tài nguyên không có thẻ được báo cho chủ tài khoản. Một kiểm tra hằng tháng so sánh thư mục nhân sự với người sở hữu tài sản và gửi danh sách cho quản lý khi ai đó rời đi. Nhận hàng trong kho kích hoạt cập nhật sổ đăng ký ngay trong ngày. Họ cũng đổi cách báo cáo: bản tóm tắt kiểm toán cho thấy độ chính xác từ cả hai chiều lấy mẫu, danh sách khoảng trống và tỷ lệ không có chủ.

Sau hai quý, độ chính xác từ mẫu sổ đăng ký là 93 phần trăm, đối chiếu hệ thống đám mây là 90 phần trăm, và tỷ lệ không có chủ là 3 phần trăm. Trưởng tài chính yêu cầu một con số "độ chính xác kiểm kê" duy nhất cho hội đồng. Người quản lý tài sản đưa con số kèm phương pháp và danh sách khoảng trống, và từ chối báo cáo mục tiêu 100 phần trăm, giải thích rằng mục đích là giữ khoảng trống hiển thị và đang co lại. Quyết định được ghi lại, và đội lưu ý rằng con số thấp hơn từ một phương pháp tốt hơn hữu ích hơn con số chưa được xác minh trước đó.

## Linh hoạt, AI, tự động hóa và phân tích

### Linh hoạt

Hãy ghi tài sản như sản phẩm phụ của công việc hằng ngày và rà soát độ chính xác cùng người sở hữu theo nhịp đều đặn, thay vì một đợt dọn dẹp hằng năm. Điều cần lưu ý là một mục tiêu về độ chính xác có thể đẩy các đội xóa những bản ghi họ không xác nhận được.

### AI

Công cụ và gói đăng ký AI cũng là tài sản, và chúng thường được áp dụng mà không có bản ghi. Hãy đưa dịch vụ AI, mô hình và nguồn dữ liệu vào khám phá, và ghép độ chính xác kiểm kê với tỷ lệ tài sản không có chủ. Điều cần lưu ý là các tính năng AI được bật bên trong sản phẩm hiện có không hiện ra như các lần mua mới, nên hãy hỏi nhà cung cấp cái gì được bật.

### Tự động hóa

Hãy chạy khám phá tự động và đối chiếu nó với bản ghi mua sắm và danh tính, và đo khám phá theo độ phủ và các lần khớp sai. Điều cần lưu ý là khám phá tìm cái nó được chỉ vào, nên hãy kiểm toán cái nó bỏ sót.

### Phân tích

Hãy báo cáo độ chính xác từ một cuộc kiểm toán mẫu kèm cỡ mẫu, cũng như từ số đếm của công cụ. Quyết định được cung cấp thông tin là đầu tư vào khám phá và quyền sở hữu ở đâu. Điều cần lưu ý là đối chiếu hai nguồn có khiếm khuyết có thể trông sạch trong khi cả hai đều sai.

## Góc nhìn theo ngành

**Công ty khởi nghiệp.** Có thể không có sổ đăng ký chính thức, chỉ có tài khoản đám mây và vài máy tính xách tay. Hãy giữ một danh sách đơn giản kèm người sở hữu, gắn thẻ tài nguyên đám mây ngay từ đầu, và rà soát danh sách hằng tháng. Tránh mua một nền tảng trước khi bạn biết mình cần trả lời câu hỏi nào.

**Doanh nghiệp nhỏ.** Một quản trị viên có thể xử lý mọi thứ. Một bảng tính với vài trường có thể hiệu quả, nếu ai đó kiểm tra nó với các lần mua hai lần mỗi năm. Hãy chú ý đến giấy phép và gói đăng ký, dễ mất dấu, và đến việc thanh lý các thiết bị từng chứa dữ liệu.

**Doanh nghiệp lớn.** Quy mô cần tự động hóa, người sở hữu lớp rõ ràng, và đối chiếu qua nhiều nguồn. Hãy chờ đợi các vụ mua lại mang đến các hệ thống xa lạ, và lập kế hoạch một cách chuẩn để đưa chúng về cùng một bản ghi. Căn chỉnh với tài chính về kế toán tài sản, gồm cách [tài sản cố định](https://en.wikipedia.org/wiki/Fixed_asset) được vốn hóa và khấu hao, và thống nhất nơi sổ đăng ký CNTT và sổ cái tài chính phải khớp.

**Chính phủ và khu vực công.** Các cơ quan công đối mặt với kiểm toán, quy tắc mua sắm và nghĩa vụ hồ sơ, và thường giữ dữ liệu nhạy cảm trên thiết bị. Hãy giữ bằng chứng thanh lý, ghi tài liệu chuỗi quản lý bằng chứng, và căn chỉnh sổ đăng ký với báo cáo tài sản bắt buộc. Coi sổ đăng ký là một phần của bằng chứng cho kiểm toán (xem chủ đề 8.3, Chỉ số tuân thủ và kiểm toán).

## Hồ sơ kinh doanh: động lực, ROI và TCO

Các chi phí gồm thời gian thiết kế bản ghi, công cụ khám phá và đối chiếu nếu bạn chưa có, công sức kỹ thuật để đăng ký tài sản trong đường ống, và công sức thường xuyên của việc lấy mẫu và sửa. Nhiều tổ chức đã sở hữu công cụ khám phá và thiết bị đầu cuối. Một đội khiêm tốn có thể chạy một chương trình, và chi phí liên tục thấp khi việc đăng ký được tự động hóa.

Lợi tức là lãng phí tránh được và rủi ro giảm. Bản ghi chính xác giảm việc trả tiền cho gói đăng ký và tài nguyên không dùng, tăng tốc ứng phó sự cố và vá vì bạn biết cái gì tồn tại, và cắt công sức kiểm toán. Tránh tuyên bố tỷ lệ tiết kiệm cụ thể từ các nghiên cứu đã công bố. Hãy đo đường cơ sở của riêng bạn: số tài nguyên đám mây không chủ và chi phí hằng tháng của chúng, thời gian trả lời một câu hỏi kiểm toán, và các giấy phép đã trả tiền nhưng không dùng. Cũng đếm chi phí của rủi ro: một máy chủ chưa biết là một lỗ hổng an ninh, và một thiết bị mất có dữ liệu có chi phí thông báo. Cách xử lý tài chính về chi phí được bao quát ở phần sau của phần này (xem chủ đề 7.5, Chi phí dịch vụ và kinh tế đơn vị).

## Phản mẫu và cạm bẫy

- **Đợt dọn dẹp hằng năm.** Một nỗ lực lớn mỗi năm một lần mục ruỗng trong vài tuần. Hãy ghi liên tục và lấy mẫu mỗi quý.
- **Chỉ kiểm toán sổ đăng ký.** Nó chứng minh sổ đăng ký khớp với chính nó. Hãy lấy mẫu từ bằng chứng độc lập theo cả hai chiều.
- **Một điểm hoàn hảo.** Con số 100 phần trăm thường nghĩa là phạm vi hẹp hoặc bằng chứng yếu. Hãy xem cái gì bị loại trừ.
- **Trường người sở hữu điền bằng đội gom hết.** Trông đầy đủ và vô dụng. Hãy tính quyền sở hữu gom hết là một khoảng trống.
- **Quá nhiều trường.** Mọi người điền chúng bằng giá trị mặc định. Hãy giữ bản ghi ở mức quyết định cần.
- **Công cụ trước, quy trình sau.** Một nền tảng khám phá không có quy tắc sở hữu và vòng đời tạo ra một mớ hỗn độn lớn hơn. Hãy quyết định các câu hỏi trước.
- **Phạt các đội vì khoảng trống.** Họ giấu tài sản. Hãy coi khoảng trống là phát hiện và sửa nguyên nhân.
- **Quên thanh lý.** Tài sản đã nghỉ hưu còn trên sổ đăng ký hoặc rời đi mà không có bản ghi xóa dữ liệu tạo ra chi phí và rủi ro.

## Mô hình trưởng thành

| Chiều | 1 Khởi đầu | 2 Phát triển | 3 Chuẩn hóa | 4 Quản lý | 5 Phối hợp |
| --- | --- | --- | --- | --- | --- |
| Nắm bắt | Bảng tính cập nhật khi nhớ | Sổ đăng ký cho các lớp chính, chủ yếu thủ công | Đăng ký gắn với mua sắm và đường ống | Đăng ký tự động; thời gian ghi nhận được đo | Tài sản được đăng ký qua các đội và nhà cung cấp từ một dòng sự kiện |
| Độ chính xác | Không biết | Thỉnh thoảng có kiểm đếm | Lấy mẫu độc lập hằng quý theo cả hai chiều | Độ chính xác và khoảng trống được theo dõi theo lớp và đưa vào cải tiến | Kiểm tra độc lập chia sẻ giữa CNTT, tài chính và an ninh |
| Sử dụng | Sổ đăng ký chỉ dùng cho kiểm toán | Một vài đội dùng | Vá, gia hạn và lập ngân sách đọc từ sổ đăng ký | Việc dùng được rà soát; trường được tinh chỉnh theo quyết định | Sổ đăng ký thúc đẩy các quyết định tự động có giám sát của con người |

## Danh sách kiểm tra

- [ ] Các lớp tài sản và quyết định mà mỗi bản ghi hỗ trợ được liệt kê.
- [ ] Các trường tối thiểu cho mỗi lớp được định nghĩa và ghi vào sổ đăng ký chỉ số.
- [ ] Mỗi lớp và mỗi tài sản có một người sở hữu có tên, được giữ hiện hành so với thư mục.
- [ ] Đường ống đăng ký hạ tầng mới kèm người sở hữu và thẻ dịch vụ.
- [ ] Mua sắm và việc tạo gói đăng ký kích hoạt bản ghi tài sản.
- [ ] Dữ liệu khám phá và hóa đơn được đối chiếu với sổ đăng ký hằng tháng.
- [ ] Một mẫu ngẫu nhiên được kiểm toán mỗi quý theo cả hai chiều.
- [ ] Danh sách khoảng trống kèm người sở hữu và ngày được công bố cùng các con số độ chính xác.
- [ ] Thanh lý có phương pháp được ghi lại và bằng chứng xóa dữ liệu.
- [ ] Các trường không dùng bị gỡ; sổ đăng ký được dùng trong quyết định hằng ngày.

## Lời nhắc AI

**Thiết kế một bản ghi tài sản tối thiểu.**

```text
We manage these classes of IT asset in [type of organization]: [list]. The
decisions our asset data must support are: [list, for example patching,
renewal, audit, refresh, disposal]. For each class, propose the minimum fields
for the record, which source should supply each field, and how each could be
verified independently. Do not invent regulatory requirements. List your
assumptions and anything I should confirm with finance, security, or legal.
```

**Lập kế hoạch một mẫu kiểm toán hai chiều.**

```text
Our register holds [number] assets across [classes]. We also have discovery
data, procurement data, and cloud billing data. Design a quarterly audit with
random samples drawn from the register and from the other sources, say how big
each sample should be for a useful read (explain the reasoning without
overstating precision), what to record, and how to report accuracy and gaps
honestly. List your assumptions.
```

**Phân tích một kết quả đối chiếu.**

```text
We reconciled our register with [source] and found: matched [number], in the
register only [number], in the source only [number]. Here are examples of each
group with the fields we hold: [paste anonymized examples]. Suggest likely
reasons for each mismatch, which are quick to fix, which need a process change,
and what to check first. Do not assume causes the data cannot support. List
your assumptions.
```

**Soạn một kiểm tra người rời đi và người chuyển vị trí.**

```text
Draft a simple monthly process to find assets whose owners have left or changed
role, using the people directory and the asset register. Include steps, who
receives the list, the time allowed to reassign, what happens if nobody
responds, and how to record the outcome. Context: [tools and team size]. List
your assumptions and privacy considerations I should check.
```

## Kỹ năng AI

- [Service Management Metrics skill](../../../../skills/service-management-metrics-skill/SKILL.md): dùng để tìm rào chắn đi kèm cho một chỉ số tài sản trước khi bạn báo cáo nó.
- [Service Management Metrics maintainer skill](../../../../skills/service-management-metrics-maintainer-skill/SKILL.md): dùng để kiểm tra rằng một mục chỉ số tài sản mang vectơ lợi dụng, rào chắn và quy tắc bằng chứng độc lập của nó.

## Điểm chính cần nhớ

- Ghi tài sản vào lúc thay đổi, tốt nhất qua đường ống và mua sắm, để sổ đăng ký là sản phẩm phụ của công việc.
- Đo độ chính xác so với bằng chứng độc lập, lấy mẫu theo cả hai chiều.
- Mỗi tài sản cần một người sở hữu, và tài sản không có chủ là phát hiện.
- Giữ bản ghi nhỏ và làm cho nó hữu ích trong các quyết định hằng ngày.
- Báo cáo các khoảng trống, không chỉ tiêu đề, và nghi ngờ một điểm hoàn hảo.
- Lập kế hoạch thanh lý cẩn thận như khi tạo.

## Tài liệu tham khảo và đọc thêm

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
