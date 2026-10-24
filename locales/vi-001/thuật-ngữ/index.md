# Chính sách thuật ngữ tiếng Việt (Chỉ số quản lý dịch vụ)

Các dịch giả thống nhất theo những lựa chọn sau. Tên riêng (ITIL, Scrum, Kanban, DevOps, DORA, SRE, AIOps, FinOps, tên công cụ và sản phẩm) được giữ nguyên cách viết của bản gốc. Các từ viết tắt đã quen dùng (SLA, SLO, SLI, XLA, OLA, CMDB, SBOM, TCO, ROI, KRI) cũng được giữ nguyên. Khi dùng lần đầu trong mỗi chủ đề, nếu thuật ngữ tiếng Việt chưa quen thuộc, hãy thêm thuật ngữ tiếng Anh trong ngoặc đơn. Các liên kết Wikipedia tiếng Anh, tiêu đề tài liệu tham khảo, mã lời nhắc AI và tên tệp kỹ năng vẫn bằng tiếng Anh. Văn bản liên kết đến Wikipedia được dịch sang tiếng Việt, còn địa chỉ và mục tham khảo vẫn bằng tiếng Anh. Trong văn bản tiếng Việt, dùng dấu thập phân là dấu phẩy và dấu phân cách hàng nghìn là dấu chấm (ví dụ 99,9 phần trăm và 5.256). Định dạng ngày trong ví dụ là YYYY-MM-DD, đơn vị là hệ mét. Định dạng tham chiếu chéo là "(xem chủ đề N.N, Tiêu đề)". Các phát biểu về ITIL 5 chỉ lấy những gì chủ sở hữu (PeopleCert) đã xác minh, và những gì chưa xác nhận vẫn được đánh dấu chưa xác nhận. Thuật ngữ về các phương pháp cụ thể như sprint, Scrum, Kanban không được nhấn mạnh, và dùng cách nói chung (ví dụ "khoảng thời gian hai tuần"). Các chỉ số luôn được viết để mô tả đội, dịch vụ và hệ thống, không bao giờ mô tả cá nhân.

## Thuật ngữ chính

| Tiếng Anh | Tiếng Việt |
|---|---|
| service | dịch vụ |
| value co-creation | đồng sáng tạo giá trị |
| incident | sự cố |
| event (monitoring) | sự kiện |
| problem | vấn đề |
| change enablement | hỗ trợ thay đổi |
| SLA / SLO / XLA | thỏa thuận mức dịch vụ / mục tiêu mức dịch vụ / thỏa thuận mức trải nghiệm |
| error budget | ngân sách lỗi |
| toil | toil (giữ nguyên) |
| backlog | tồn đọng |
| retrospective | hồi cứu |
| value stream | dòng giá trị |
| guardrail | rào chắn |
| runbook | sổ tay vận hành |
| postmortem | phân tích sau sự cố |
| service desk | bàn dịch vụ |
| continual improvement | cải tiến liên tục |
| continuous delivery | phân phối liên tục |
| observability | khả năng quan sát |
| orchestration | điều phối |
| auto-remediation | khắc phục tự động |
| human in the loop | con người trong vòng lặp |
| AI agent | tác tử AI |
| hallucination (AI) | ảo giác |
| prompt | lời nhắc |
| skill (AI) | kỹ năng |
| analytics | phân tích |
| forecasting | dự báo |
| metric | chỉ số |
| gaming vector | vectơ lợi dụng |
| Goodhart's law | định luật Goodhart |
| lead time / cycle time | thời gian chờ / thời gian chu trình |
| work in process (WIP) | công việc đang xử lý (WIP) |
| change failure rate | tỷ lệ thay đổi thất bại |
| mean time to restore (MTTR) | thời gian khôi phục trung bình (MTTR) |
| SLI | chỉ báo mức dịch vụ (SLI) |
| flow efficiency | hiệu quả dòng chảy |
| unit economics | kinh tế đơn vị |
| total cost of ownership (TCO) | tổng chi phí sở hữu (TCO) |
| well-being | sức khỏe tinh thần |
| sustainable pace | nhịp độ bền vững |
| percentile | bách phân vị |
| median | trung vị |
| workaround | cách lách |
| known error | lỗi đã biết |
| shift (on-call) | ca |
| page (on-call) | cuộc gọi |
| game day | ngày diễn tập |
| tabletop exercise | diễn tập trên bàn |
| Initiate / Develop / Standardize / Manage / Orchestrate | Khởi đầu / Phát triển / Chuẩn hóa / Quản lý / Phối hợp |

## Tên các phần

| Phần | Tên |
|---|---|
| 1 | Nền tảng của đo lường |
| 2 | Chỉ số dòng chảy và phân phối liên tục |
| 3 | Chỉ số bàn dịch vụ, sự cố và yêu cầu |
| 4 | Chỉ số vấn đề, thay đổi và phát hành |
| 5 | Chỉ số mức dịch vụ, tính sẵn sàng và độ tin cậy |
| 6 | Chỉ số khách hàng và trải nghiệm |
| 7 | Chỉ số tài sản, cấu hình và tài chính |
| 8 | Chỉ số bảo mật, rủi ro, tuân thủ và nhà cung cấp |
| 9 | Chỉ số con người, đội nhóm và cải tiến |
| 10 | Chỉ số cho AI, tự động hóa và phân tích |
| 11 | Xây dựng chương trình chỉ số |
| 12 | Phụ lục |

## Tiêu đề các chủ đề

| Số | Tiêu đề |
|---|---|
| 1.0 | Giới thiệu Phần 1: Nền tảng của đo lường |
| 1.1 | Vì sao đo lường quản lý dịch vụ |
| 1.2 | Định luật Goodhart và tâm lý học của chỉ số |
| 1.3 | Kết quả hơn sản lượng: chọn điều cần đo |
| 1.4 | Quản trị và quyền sở hữu chỉ số |
| 1.5 | Nguồn dữ liệu và công cụ đo |
| 1.6 | Hiểu biết thống kê cho chỉ số dịch vụ |
| 1.7 | Các khung đo lường |
| 1.8 | Đo lường ITIL 5 và kết quả giá trị |
| 2.0 | Giới thiệu Phần 2: Chỉ số dòng chảy và phân phối liên tục |
| 2.1 | Các thước đo dòng chảy |
| 2.2 | Thời gian chờ, thời gian chu trình và hiệu suất dòng chảy |
| 2.3 | Công việc đang làm dở và lý thuyết hàng đợi |
| 2.4 | Chỉ số chuỗi giá trị |
| 2.5 | Chỉ số dự báo và lập kế hoạch phân phối |
| 2.6 | Chỉ số tồn đọng và tinh chỉnh |
| 2.7 | Chỉ số yêu cầu hợp nhất và rà soát mã |
| 2.8 | Chỉ số DORA |
| 2.9 | Công việc vận hành và công việc ngoài kế hoạch |
| 3.0 | Giới thiệu Phần 3: Chỉ số bàn dịch vụ, sự cố và yêu cầu |
| 3.1 | Chỉ số bàn dịch vụ |
| 3.2 | Số lượng và mức ưu tiên sự cố |
| 3.3 | Thời gian phản hồi và giải quyết sự cố |
| 3.4 | Chỉ số sự cố lớn |
| 3.5 | Chỉ số thực hiện yêu cầu dịch vụ |
| 3.6 | Chỉ số quản lý tri thức |
| 3.7 | Chỉ số tự phục vụ và tự động hóa |
| 4.0 | Giới thiệu Phần 4: Chỉ số vấn đề, thay đổi và phát hành |
| 4.1 | Chỉ số quản lý vấn đề |
| 4.2 | Chỉ số phân tích sau sự cố và học hỏi |
| 4.3 | Chỉ số hỗ trợ thay đổi |
| 4.4 | Thay đổi thất bại và làm lại |
| 4.5 | Chỉ số phát hành và triển khai |
| 4.6 | Nợ kỹ thuật và lỗi đã biết |
| 5.0 | Giới thiệu Phần 5: Chỉ số mức dịch vụ, tính sẵn sàng và độ tin cậy |
| 5.1 | Chỉ số SLA, OLA và XLA |
| 5.2 | SLI, SLO và ngân sách lỗi |
| 5.3 | Chỉ số tính sẵn sàng |
| 5.4 | Chỉ số năng lực và hiệu năng |
| 5.5 | Chỉ số giám sát và chất lượng cảnh báo |
| 5.6 | Chỉ số liên tục dịch vụ |
| 5.7 | Chỉ số công việc lặp đi lặp lại và trực ca |
| 6.0 | Giới thiệu Phần 6: Chỉ số khách hàng và trải nghiệm |
| 6.1 | Chỉ số hài lòng của khách hàng |
| 6.2 | Thỏa thuận mức trải nghiệm |
| 6.3 | Chỉ số áp dụng dịch vụ và danh mục |
| 6.4 | Trải nghiệm người dùng và nhân viên |
| 6.5 | Hiện thực hóa giá trị và kết quả kinh doanh |
| 7.0 | Giới thiệu Phần 7: Chỉ số tài sản, cấu hình và tài chính |
| 7.1 | Chỉ số quản lý tài sản CNTT |
| 7.2 | Chỉ số tài sản phần mềm và giấy phép |
| 7.3 | Chỉ số vòng đời tài sản phần cứng |
| 7.4 | Chỉ số chất lượng cấu hình và CMDB |
| 7.5 | Chi phí dịch vụ và kinh tế đơn vị |
| 7.6 | Chỉ số FinOps và chi phí đám mây |
| 7.7 | Lợi tức đầu tư và hồ sơ kinh doanh |
| 8.0 | Giới thiệu Phần 8: Chỉ số bảo mật, rủi ro, tuân thủ và nhà cung cấp |
| 8.1 | Chỉ số sự cố bảo mật và lỗ hổng |
| 8.2 | Chỉ số rủi ro và kiểm soát |
| 8.3 | Chỉ số tuân thủ và kiểm toán |
| 8.4 | Chỉ số nhà cung cấp và hợp đồng |
| 8.5 | Báo cáo theo quy định và cho cơ quan nhà nước |
| 9.0 | Giới thiệu Phần 9: Chỉ số con người, đội nhóm và cải tiến |
| 9.1 | Sức khỏe đội nhóm và trải nghiệm nhà phát triển |
| 9.2 | Chỉ số hài lòng và sức khỏe tinh thần |
| 9.3 | Chỉ số cộng tác và bàn giao |
| 9.4 | Chỉ số kỹ năng và học tập |
| 9.5 | Chỉ số cải tiến liên tục |
| 9.6 | Chỉ số thay đổi tổ chức và mức độ áp dụng |
| 10.0 | Giới thiệu Phần 10: Chỉ số cho AI, tự động hóa và phân tích |
| 10.1 | AI trong đo lường quản lý dịch vụ |
| 10.2 | Đo lường công việc có AI hỗ trợ |
| 10.3 | Chỉ số tác tử AI và chatbot |
| 10.4 | Lạm phát chỉ số và pha loãng chất lượng |
| 10.5 | Chỉ số quản trị và rủi ro AI |
| 10.6 | Chỉ số tự động hóa và điều phối |
| 10.7 | Chỉ số đường ống và thay đổi tự động |
| 10.8 | Chỉ số phân tích và chất lượng dữ liệu |
| 10.9 | Chỉ số dự báo và phân tích dự đoán |
| 10.10 | Chỉ số khả năng quan sát và đo từ xa |
| 11.0 | Giới thiệu Phần 11: Xây dựng chương trình chỉ số |
| 11.1 | Thiết kế bảng điều khiển chỉ số dịch vụ |
| 11.2 | Bức tranh công cụ |
| 11.3 | Triển khai chỉ số mà không gieo sợ hãi |
| 11.4 | Mô hình trưởng thành cho chương trình chỉ số |
| 11.5 | Lộ trình áp dụng từng bước |
| 12.0 | Phụ lục |
| 12.1 | Bảng thuật ngữ |
| 12.2 | Tham chiếu định nghĩa và công thức chỉ số |
| 12.3 | Danh sách kiểm tra |
| 12.4 | Biểu mẫu |
| 12.5 | Tự đánh giá mức trưởng thành |
| 12.6 | Tài liệu tham khảo và đọc thêm |
| 12.7 | Chỉ mục |
