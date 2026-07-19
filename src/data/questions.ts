export interface Question {
  q: string;
  options: string[];
  correct: number;
}

export const chapterNames: string[] = [
  "Chương 1: Cấu tạo nguyên tử",
  "Chương 2: Bảng tuần hoàn các nguyên tố hoá học",
  "Chương 3: Liên kết hoá học",
  "Chương 4: Phản ứng oxi hoá – khử",
  "Chương 5: Năng lượng hoá học",
  "Chương 6: Tốc độ phản ứng",
  "Chương 7: Nguyên tố nhóm Halogen"
];

export const questionBank: Record<number, Question[]> = {
  0: [ // Chương 1: Cấu tạo nguyên tử
    // Mức độ Biết (0-4)
    { q: "Hạt mang điện tích dương cấu tạo nên hạt nhân nguyên tử là?", options: ["A. Electron", "B. Proton", "C. Neutron", "D. Positron"], correct: 1 },
    { q: "Hạt vi mô không mang điện có trong hạt nhân nguyên tử là?", options: ["A. Electron", "B. Proton", "C. Neutron", "D. Ion"], correct: 2 },
    { q: "Số hiệu nguyên tử Z của một nguyên tố cho biết điều gì?", options: ["A. Số khối", "B. Số proton trong hạt nhân", "C. Số neutron", "D. Tổng số hạt"], correct: 1 },
    { q: "Orbital nguyên tử (AO) s có hình dạng gì?", options: ["A. Hình số 8 nổi", "B. Hình cầu", "C. Hình hoa hồng", "D. Không xác định"], correct: 1 },
    { q: "Phân lớp p chứa tối đa bao nhiêu electron?", options: ["A. 2", "B. 6", "C. 10", "D. 14"], correct: 1 },
    // Mức độ Thông hiểu, Tư duy (5-14)
    { q: "Đồng vị là những nguyên tử của cùng một nguyên tố, có cùng số proton nhưng khác nhau về?", options: ["A. Số electron", "B. Số hạt mang điện", "C. Số neutron", "D. Số lớp electron"], correct: 2 },
    { q: "Kí hiệu nguyên tử <sup>A</sup><sub>Z</sub>X cho ta biết thông tin gì?", options: ["A. Số khối và số hiệu nguyên tử", "B. Số proton và neutron", "C. Số electron và lớp electron", "D. Tính chất hoá học của X"], correct: 0 },
    { q: "Nguyên lí Pauli phát biểu rằng trong 1 orbital chứa tối đa bao nhiêu electron?", options: ["A. 1", "B. 2 electron có spin ngược chiều", "C. 6", "D. 8"], correct: 1 },
    { q: "Nguyên tử Na (Z=11) có cấu hình electron lớp ngoài cùng là?", options: ["A. 2s<sup>1</sup>", "B. 3s<sup>1</sup>", "C. 3s<sup>2</sup>", "D. 3p<sup>1</sup>"], correct: 1 },
    { q: "Lớp electron thứ 3 (Lớp M) có tối đa bao nhiêu phân lớp?", options: ["A. 1", "B. 2", "C. 3", "D. 4"], correct: 2 },
    { q: "Khối lượng nguyên tử chủ yếu tập trung ở phần nào?", options: ["A. Lớp vỏ electron", "B. Hạt nhân nguyên tử", "C. Đám mây electron", "D. Mọi phần như nhau"], correct: 1 },
    { q: "Nguyên tử có cấu hình electron 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup> thuộc loại nguyên tố gì?", options: ["A. Kim loại", "B. Phi kim", "C. Khí hiếm", "D. Kim loại chuyển tiếp"], correct: 1 },
    { q: "Sự phân bố electron vào các orbital trong cùng một phân lớp tuân theo quy tắc nào?", options: ["A. Quy tắc Hund", "B. Nguyên lí Pauli", "C. Nguyên lí vững bền", "D. Quy tắc bát tử"], correct: 0 },
    { q: "Khối lượng của hạt neutron xấp xỉ bằng khối lượng của hạt nào sau đây?", options: ["A. Electron", "B. Proton", "C. Hạt nhân", "D. Nguyên tử"], correct: 1 },
    { q: "Theo mô hình nguyên tử hiện đại, các electron chuyển động xung quanh hạt nhân như thế nào?", options: ["A. Theo quỹ đạo tròn xác định", "B. Theo quỹ đạo hình elip", "C. Rất nhanh, không theo quỹ đạo xác định", "D. Đứng yên tại các lớp"], correct: 2 },
    // Mức độ Vận dụng - Tính toán (15-19)
    { q: "Kí hiệu nguyên tử <sup>23</sup><sub>11</sub>Na chỉ ra số neutron trong hạt nhân là bao nhiêu?", options: ["A. 11", "B. 23", "C. 12", "D. 34"], correct: 2 },
    { q: "Tổng số hạt cơ bản trong nguyên tử X là 28, số hạt không mang điện là 10. Số khối của nguyên tử X là?", options: ["A. 18", "B. 19", "C. 20", "D. 28"], correct: 1 },
    { q: "Đồng vị <sup>63</sup>Cu chiếm 73% và <sup>65</sup>Cu chiếm 27%. Nguyên tử khối trung bình của Cu là?", options: ["A. 63,54", "B. 64,00", "C. 64,54", "D. 63,00"], correct: 0 },
    { q: "Nguyên tử M có tổng số hạt là 52, số hạt mang điện nhiều hơn hạt không mang điện là 16. Điện tích hạt nhân Z là?", options: ["A. 16", "B. 17", "C. 18", "D. 19"], correct: 1 },
    { q: "Tổng số hạt proton, neutron, electron trong ion Na<sup>+</sup> (có Z=11, A=23) là?", options: ["A. 34", "B. 33", "C. 32", "D. 35"], correct: 1 }
  ],
  1: [ // Chương 2: Bảng tuần hoàn
    // Mức độ Biết (0-4)
    { q: "Các nguyên tố trong bảng tuần hoàn được sắp xếp theo nguyên tắc nào?", options: ["A. Khối lượng nguyên tử tăng dần", "B. Điện tích hạt nhân tăng dần", "C. Số neutron tăng dần", "D. Bán kính tăng dần"], correct: 1 },
    { q: "Bảng tuần hoàn hiện nay có bao nhiêu chu kì?", options: ["A. 6", "B. 7", "C. 8", "D. 9"], correct: 1 },
    { q: "Nhóm VIIA trong bảng tuần hoàn có tên gọi chung là gì?", options: ["A. Kim loại kiềm", "B. Khí hiếm", "C. Halogen", "D. Kiềm thổ"], correct: 2 },
    { q: "Nguyên tố thuộc nhóm VIA có bao nhiêu electron ở lớp ngoài cùng?", options: ["A. 4", "B. 5", "C. 6", "D. 7"], correct: 2 },
    { q: "Nhóm các nguyên tố không có xu hướng tham gia phản ứng hoá học ở điều kiện thường là?", options: ["A. Nhóm IA", "B. Nhóm IIA", "C. Nhóm VIIA", "D. Nhóm VIIIA"], correct: 3 },
    // Mức độ Thông hiểu, Tư duy (5-14)
    { q: "Trong một chu kì, đi từ trái sang phải, bán kính nguyên tử biến đổi như thế nào?", options: ["A. Tăng dần", "B. Giảm dần", "C. Không đổi", "D. Vừa tăng vừa giảm"], correct: 1 },
    { q: "Trong một nhóm A, đi từ trên xuống dưới, độ âm điện của các nguyên tố sẽ?", options: ["A. Tăng dần", "B. Giảm dần", "C. Không đổi", "D. Tăng rồi giảm"], correct: 1 },
    { q: "Tính kim loại và tính phi kim biến đổi như thế nào trong một chu kì từ trái sang phải?", options: ["A. Tính kim loại giảm, tính phi kim tăng", "B. Cả hai đều tăng", "C. Tính kim loại tăng, tính phi kim giảm", "D. Không có quy luật"], correct: 0 },
    { q: "Công thức oxit cao nhất của nguyên tố nhóm VA là?", options: ["A. R<sub>2</sub>O<sub>3</sub>", "B. RO<sub>2</sub>", "C. R<sub>2</sub>O<sub>5</sub>", "D. RO<sub>3</sub>"], correct: 2 },
    { q: "Sắp xếp theo chiều giảm dần tính base của NaOH, Mg(OH)<sub>2</sub>, Al(OH)<sub>3</sub> là?", options: ["A. NaOH > Mg(OH)<sub>2</sub> > Al(OH)<sub>3</sub>", "B. Al(OH)<sub>3</sub> > Mg(OH)<sub>2</sub> > NaOH", "C. Mg(OH)<sub>2</sub> > NaOH > Al(OH)<sub>3</sub>", "D. NaOH > Al(OH)<sub>3</sub> > Mg(OH)<sub>2</sub>"], correct: 0 },
    { q: "Các nguyên tố thuộc cùng một nhóm A có đặc điểm cấu tạo chung là gì?", options: ["A. Số lớp electron", "B. Số electron hoá trị", "C. Số neutron", "D. Nguyên tử khối"], correct: 1 },
    { q: "Các nguyên tố thuộc cùng một chu kì có đặc điểm cấu tạo chung là gì?", options: ["A. Cùng số electron hoá trị", "B. Cùng số lớp electron", "C. Cùng tính kim loại", "D. Cùng số proton"], correct: 1 },
    { q: "Tính phi kim mạnh nhất trong bảng tuần hoàn thuộc về nguyên tố nào?", options: ["A. Oxygen", "B. Chlorine", "C. Fluorine", "D. Nitrogen"], correct: 2 },
    { q: "Định luật tuần hoàn phát biểu rằng tính chất các nguyên tố biến đổi tuần hoàn theo chiều tăng của?", options: ["A. Số khối", "B. Nguyên tử khối", "C. Điện tích hạt nhân", "D. Độ âm điện"], correct: 2 },
    { q: "Công thức hợp chất khí với hydrogen của nguyên tố nhóm VIA có dạng tổng quát là?", options: ["A. HR", "B. H<sub>2</sub>R", "C. RH<sub>3</sub>", "D. RH<sub>4</sub>"], correct: 1 },
    // Mức độ Vận dụng - Tính toán (15-19)
    { q: "Nguyên tố có cấu hình electron 1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup> thuộc chu kì và nhóm nào?", options: ["A. Chu kì 3, nhóm IIIA", "B. Chu kì 2, nhóm IIIA", "C. Chu kì 3, nhóm IIA", "D. Chu kì 3, nhóm IA"], correct: 0 },
    { q: "Hai nguyên tố X, Y ở hai ô liên tiếp nhau trong 1 chu kì có tổng số hiệu nguyên tử là 25. X và Y là các nguyên tố có Z lần lượt bằng?", options: ["A. 11, 14", "B. 12, 13", "C. 10, 15", "D. 9, 16"], correct: 1 },
    { q: "Nguyên tố R tạo oxit cao nhất dạng RO<sub>3</sub>. Trong hợp chất khí với hydrogen, R chiếm 94,12% về khối lượng. Nguyên tố R là?", options: ["A. Sulfur (S=32)", "B. Selenium (Se=79)", "C. Tellurium (Te=128)", "D. Oxygen (O=16)"], correct: 0 },
    { q: "Hoà tan 4,6 gam kim loại kiềm M vào nước dư thu được 2,24 lít khí H<sub>2</sub> (đkc). Kim loại M là?", options: ["A. Li (7)", "B. Na (23)", "C. K (39)", "D. Rb (85)"], correct: 1 },
    { q: "Cho 0,72 gam một kim loại nhóm IIA tác dụng hết với dung dịch HCl thu được 0,03 mol khí H<sub>2</sub>. Kim loại đó là?", options: ["A. Be (9)", "B. Mg (24)", "C. Ca (40)", "D. Ba (137)"], correct: 1 }
  ],
  2: [ // Chương 3: Liên kết hoá học
    // Mức độ Biết (0-4)
    { q: "Liên kết ion là liên kết được hình thành bởi lực hút tĩnh điện giữa?", options: ["A. Các ion cùng dấu", "B. Các ion trái dấu", "C. Các phân tử", "D. Các electron"], correct: 1 },
    { q: "Liên kết cộng hoá trị là liên kết hình thành giữa hai nguyên tử bằng cách?", options: ["A. Nhường electron hoàn toàn", "B. Nhận electron hoàn toàn", "C. Dùng chung các cặp electron", "D. Lực hút tĩnh điện"], correct: 2 },
    { q: "Quy tắc octet phát biểu rằng các nguyên tử có xu hướng liên kết để đạt cấu hình electron bền vững của?", options: ["A. Kim loại kiềm", "B. Halogen", "C. Khí hiếm", "D. Kim loại chuyển tiếp"], correct: 2 },
    { q: "Liên kết trong đó hai nguyên tử dùng chung 1 cặp electron được gọi là?", options: ["A. Liên kết đơn", "B. Liên kết đôi", "C. Liên kết ba", "D. Liên kết ion"], correct: 0 },
    { q: "Lực tương tác yếu giữa các phân tử không mang điện tích gọi chung là gì?", options: ["A. Liên kết ion", "B. Tương tác van der Waals", "C. Liên kết kim loại", "D. Liên kết cộng hoá trị"], correct: 1 },
    // Mức độ Thông hiểu, Tư duy (5-14)
    { q: "Giải thích sự hình thành liên kết trong phân tử NaCl?", options: ["A. Na dùng chung e với Cl", "B. Na nhường 1e cho Cl tạo ion trái dấu hút nhau", "C. Cl nhường 1e cho Na", "D. Lực tương tác van der Waals"], correct: 1 },
    { q: "Trong phân tử N<sub>2</sub>, hai nguyên tử Nitrogen liên kết với nhau bằng?", options: ["A. 1 liên kết đơn", "B. 1 liên kết đôi", "C. 1 liên kết ba", "D. 2 liên kết đôi"], correct: 2 },
    { q: "Căn cứ vào hiệu độ âm điện (&Delta;&chi;), liên kết có 0,4 &le; &Delta;&chi; < 1,7 thuộc loại nào?", options: ["A. Liên kết ion", "B. Cộng hoá trị không phân cực", "C. Cộng hoá trị phân cực", "D. Liên kết kim loại"], correct: 2 },
    { q: "Liên kết cho - nhận là một trường hợp đặc biệt của liên kết cộng hoá trị, trong đó cặp electron dùng chung?", options: ["A. Do 2 nguyên tử cùng đóng góp", "B. Nằm chính giữa 2 hạt nhân", "C. Do một nguyên tử đóng góp hoàn toàn", "D. Bị hút lệch hoàn toàn về một phía"], correct: 2 },
    { q: "Muối ăn (NaCl) ở điều kiện thường tồn tại dưới dạng mạng tinh thể gì?", options: ["A. Tinh thể phân tử", "B. Tinh thể nguyên tử", "C. Tinh thể ion", "D. Tinh thể kim loại"], correct: 2 },
    { q: "Bản chất của liên kết hydrogen là lực tương tác tĩnh điện yếu giữa?", options: ["A. H và nguyên tử có độ âm điện lớn (F, O, N)", "B. Các phân tử khí hiếm", "C. Ion dương và ion âm", "D. H và kim loại"], correct: 0 },
    { q: "Tại sao nước (H<sub>2</sub>O) có nhiệt độ sôi cao bất thường so với H<sub>2</sub>S?", options: ["A. Phân tử H<sub>2</sub>O nặng hơn", "B. H<sub>2</sub>O có liên kết hydrogen liên phân tử", "C. H<sub>2</sub>O có liên kết ion mạnh", "D. Cấu trúc H<sub>2</sub>O đối xứng hơn"], correct: 1 },
    { q: "Phân tử nào sau đây có chứa liên kết cộng hóa trị không phân cực?", options: ["A. HCl", "B. H<sub>2</sub>O", "C. Cl<sub>2</sub>", "D. NH<sub>3</sub>"], correct: 2 },
    { q: "Đặc điểm chung của các hợp chất ion là gì?", options: ["A. Dễ bay hơi, nhiệt độ sôi thấp", "B. Thường là chất lỏng ở điều kiện thường", "C. Khó nóng chảy, khó sôi, tan trong nước tạo dung dịch dẫn điện", "D. Dẫn điện khi ở trạng thái rắn"], correct: 2 },
    { q: "Theo quy tắc octet, nguyên tử O (Z=8) có xu hướng biến đổi như thế nào khi tạo liên kết?", options: ["A. Nhường 2 electron", "B. Nhận 2 electron", "C. Nhường 6 electron", "D. Dùng chung 6 electron"], correct: 1 },
    // Mức độ Vận dụng - Tính toán (15-19)
    { q: "Tính hiệu độ âm điện của phân tử HCl biết độ âm điện H = 2,20; Cl = 3,16. Liên kết này thuộc loại gì?", options: ["A. 0,96 - CHT không phân cực", "B. 0,96 - Ion", "C. 0,96 - CHT phân cực", "D. 1,06 - CHT phân cực"], correct: 2 },
    { q: "Trong phân tử AlCl<sub>3</sub>, nguyên tử Al đã nhường hay dùng chung bao nhiêu electron?", options: ["A. Nhường 3 electron", "B. Nhường 1 electron", "C. Dùng chung 3 cặp electron", "D. Dùng chung 1 cặp electron"], correct: 2 },
    { q: "Có bao nhiêu cặp electron tham gia dùng chung trong phân tử khí CO<sub>2</sub>?", options: ["A. 1 cặp", "B. 2 cặp", "C. 3 cặp", "D. 4 cặp"], correct: 3 },
    { q: "Phân tử CH<sub>4</sub> có tổng cộng bao nhiêu liên kết &sigma; (sigma)?", options: ["A. 1", "B. 2", "C. 3", "D. 4"], correct: 3 },
    { q: "Dựa vào công thức cấu tạo Lewis, số cặp electron chưa tham gia liên kết của phân tử NH<sub>3</sub> là?", options: ["A. 1 cặp", "B. 2 cặp", "C. 3 cặp", "D. 0 cặp"], correct: 0 }
  ],
  3: [ // Chương 4: Phản ứng oxi hóa - khử
    // Mức độ Biết (0-4)
    { q: "Chất khử là chất có đặc điểm gì trong phản ứng hoá học?", options: ["A. Nhận electron", "B. Nhường electron", "C. Không thay đổi số oxi hoá", "D. Làm giảm số oxi hoá"], correct: 1 },
    { q: "Chất oxi hoá là chất có đặc điểm gì?", options: ["A. Nhường electron", "B. Nhận electron", "C. Số oxi hoá tăng lên", "D. Là kim loại"], correct: 1 },
    { q: "Quá trình nhường electron được gọi là quá trình gì?", options: ["A. Quá trình khử", "B. Quá trình oxi hoá", "C. Sự thu nhiệt", "D. Sự trung hoà"], correct: 1 },
    { q: "Quá trình nhận electron được gọi là quá trình gì?", options: ["A. Quá trình oxi hoá", "B. Quá trình toả nhiệt", "C. Quá trình khử", "D. Sự thuỷ phân"], correct: 2 },
    { q: "Dấu hiệu nhận biết phản ứng oxi hoá - khử là sự thay đổi của đại lượng nào?", options: ["A. Khối lượng", "B. Số oxi hoá", "C. Trạng thái vật lí", "D. Màu sắc"], correct: 1 },
    // Mức độ Thông hiểu, Tư duy (5-14)
    { q: "Nguyên tắc xác định số oxi hoá: Số oxi hoá của các nguyên tố trong đơn chất luôn bằng?", options: ["A. 1", "B. Trị số hoá trị", "C. 0", "D. Số electron lớp ngoài cùng"], correct: 2 },
    { q: "Phản ứng tự oxi hóa - tự khử là phản ứng mà trong đó?", options: ["A. Có 2 chất oxi hóa khác nhau", "B. Nguyên tử của cùng một nguyên tố vừa tăng vừa giảm số oxi hóa", "C. Chất ban đầu phân huỷ thành nhiều chất", "D. Xảy ra sự trao đổi ion"], correct: 1 },
    { q: "Loại phản ứng hoá học nào sau đây LUÔN LUÔN là phản ứng oxi hóa - khử?", options: ["A. Phản ứng trao đổi", "B. Phản ứng trung hòa", "C. Phản ứng thế", "D. Phản ứng phân hủy"], correct: 2 },
    { q: "Loại phản ứng nào sau đây KHÔNG BAO GIỜ là phản ứng oxi hóa - khử?", options: ["A. Phản ứng trao đổi", "B. Phản ứng hoá hợp", "C. Phản ứng phân huỷ", "D. Phản ứng thế"], correct: 0 },
    { q: "Trong phản ứng: 2FeCl<sub>2</sub> + Cl<sub>2</sub> &rarr; 2FeCl<sub>3</sub>. Chất đóng vai trò chất oxi hoá là?", options: ["A. FeCl<sub>2</sub>", "B. Cl<sub>2</sub>", "C. FeCl<sub>3</sub>", "D. Không có"], correct: 1 },
    { q: "Cân bằng phản ứng oxi hoá - khử theo phương pháp thăng bằng electron dựa trên nguyên tắc nào?", options: ["A. Bảo toàn khối lượng", "B. Tổng số electron nhường = tổng số electron nhận", "C. Bảo toàn điện tích", "D. Bảo toàn năng lượng"], correct: 1 },
    { q: "Chất nào sau đây luôn đóng vai trò là chất khử trong mọi phản ứng hoá học?", options: ["A. Chlorine (Cl<sub>2</sub>)", "B. Các kim loại kiềm", "C. Oxygen (O<sub>2</sub>)", "D. Nước (H<sub>2</sub>O)"], correct: 1 },
    { q: "Trong phòng thí nghiệm, chất oxi hoá mạnh thường được dùng để chuẩn độ là?", options: ["A. NaCl", "B. NaOH", "C. KMnO<sub>4</sub>", "D. HCl"], correct: 2 },
    { q: "Ý nghĩa thực tiễn quan trọng nhất của phản ứng cháy (oxi hoá - khử) là?", options: ["A. Sản xuất muối", "B. Cung cấp năng lượng nhiệt", "C. Điều chế kim loại", "D. Tạo ra nước"], correct: 1 },
    { q: "Kim loại càng dễ nhường electron thì tính chất nào càng mạnh?", options: ["A. Tính oxi hoá", "B. Tính khử", "C. Tính axit", "D. Độ âm điện"], correct: 1 },
    // Mức độ Vận dụng - Tính toán (15-19)
    { q: "Số oxi hóa của nguyên tử trung tâm S trong H<sub>2</sub>SO<sub>4</sub> là bao nhiêu?", options: ["A. +4", "B. +6", "C. -2", "D. +2"], correct: 1 },
    { q: "Xác định tổng các hệ số (nguyên, tối giản) của phương trình: Al + O<sub>2</sub> &rarr; Al<sub>2</sub>O<sub>3</sub>?", options: ["A. 4", "B. 5", "C. 7", "D. 9"], correct: 3 },
    { q: "Cân bằng phương trình: aFe + bHNO<sub>3</sub> (loãng) &rarr; cFe(NO<sub>3</sub>)<sub>3</sub> + dNO + eH<sub>2</sub>O. Tổng hệ số (a+b) bằng?", options: ["A. 4", "B. 5", "C. 6", "D. 8"], correct: 0 },
    { q: "Bảo toàn electron: Cho 0,1 mol Zn phản ứng hoàn toàn với dung dịch HCl. Số mol electron mà Zn đã nhường là?", options: ["A. 0,1 mol", "B. 0,2 mol", "C. 0,3 mol", "D. 0,4 mol"], correct: 1 },
    { q: "Cho 5,6 gam Fe (M=56) tác dụng với dung dịch H<sub>2</sub>SO<sub>4</sub> loãng thu được V lít khí H<sub>2</sub> (đkc). Giá trị của V là?", options: ["A. 1,12 lít", "B. 2,24 lít", "C. 3,36 lít", "D. 4,48 lít"], correct: 1 }
  ],
  4: [ // Chương 5: Năng lượng hóa học
    // Mức độ Biết (0-4)
    { q: "Phản ứng tỏa nhiệt là phản ứng có đặc điểm gì?", options: ["A. Giải phóng năng lượng ra môi trường", "B. Hấp thụ năng lượng từ môi trường", "C. Không thay đổi năng lượng", "D. Chỉ xảy ra khi đun nóng"], correct: 0 },
    { q: "Phản ứng thu nhiệt là phản ứng có đặc điểm gì?", options: ["A. Tỏa nhiệt làm môi trường nóng lên", "B. Thu nhiệt làm môi trường lạnh đi", "C. Luôn tự xảy ra", "D. Phát sáng"], correct: 1 },
    { q: "Điều kiện chuẩn về áp suất và nhiệt độ trong nhiệt động học là?", options: ["A. 1 bar, 0<sup>o</sup>C", "B. 1 atm, 0<sup>o</sup>C", "C. 1 bar, 25<sup>o</sup>C (298K)", "D. 1 atm, 25<sup>o</sup>C"], correct: 2 },
    { q: "Nhiệt tạo thành chuẩn của các đơn chất ở trạng thái bền vững nhất quy ước bằng?", options: ["A. 100 kJ/mol", "B. 0 kJ/mol", "C. 1 kJ/mol", "D. -100 kJ/mol"], correct: 1 },
    { q: "Phương trình hóa học có ghi rõ trạng thái chất và giá trị &Delta;<sub>r</sub>H được gọi là?", options: ["A. Phương trình điện li", "B. Phương trình nhiệt hóa học", "C. Phương trình ion rút gọn", "D. Phương trình bảo toàn khối lượng"], correct: 1 },
    // Mức độ Thông hiểu, Tư duy (5-14)
    { q: "Phản ứng toả nhiệt có giá trị biến thiên enthalpy (&Delta;<sub>r</sub>H) mang dấu gì?", options: ["A. Dấu dương (+)", "B. Dấu âm (-)", "C. Bằng 0", "D. Tuỳ thuộc điều kiện"], correct: 1 },
    { q: "Enthalpy tạo thành chuẩn (&Delta;<sub>f</sub>H<sup>o</sup><sub>298</sub>) của một hợp chất là lượng nhiệt kèm theo quá trình tạo ra 1 mol chất đó từ?", options: ["A. Các hợp chất khác", "B. Các ion", "C. Các đơn chất bền nhất", "D. Nguyên tử dạng khí"], correct: 2 },
    { q: "Đốt cháy than củi để sưởi ấm là một ví dụ điển hình của quá trình?", options: ["A. Phản ứng thu nhiệt", "B. Phản ứng phân huỷ", "C. Phản ứng toả nhiệt", "D. Sự thăng hoa"], correct: 2 },
    { q: "Cảm giác mát lạnh khi cồn bốc hơi trên da tay là do quá trình này là?", options: ["A. Quá trình toả nhiệt", "B. Quá trình thu nhiệt", "C. Phản ứng tạo ra nước băng", "D. Phản ứng oxi hoá mạnh"], correct: 1 },
    { q: "Năng lượng liên kết (E<sub>b</sub>) là năng lượng cần thiết để làm gì đối với 1 mol liên kết đó ở thể khí?", options: ["A. Phá vỡ liên kết thành nguyên tử độc lập", "B. Hình thành liên kết từ nguyên tử", "C. Chuyển thành thể lỏng", "D. Ion hoá phân tử"], correct: 0 },
    { q: "In the equation: C(s) + O<sub>2</sub>(g) &rarr; CO<sub>2</sub>(g), &Delta;<sub>r</sub>H = -393,5 kJ. Khẳng định nào đúng?", options: ["A. Phản ứng thu nhiệt 393,5 kJ", "B. Phản ứng toả nhiệt 393,5 kJ", "C. Năng lượng các chất tăng lên", "D. Phản ứng không tự xảy ra"], correct: 1 },
    { q: "Ý nghĩa của dấu &Delta;<sub>r</sub>H > 0 là gì?", options: ["A. Phản ứng giải phóng nhiệt, hệ bền hơn", "B. Phản ứng hấp thụ nhiệt, hệ kém bền hơn", "C. Phản ứng nhanh", "D. Phản ứng cân bằng"], correct: 1 },
    { q: "Hợp chất có giá trị nhiệt tạo thành chuẩn (&Delta;<sub>f</sub>H) càng âm thì?", options: ["A. Càng dễ bị phân huỷ", "B. Càng bền vững", "C. Dễ bốc cháy", "D. Không tồn tại"], correct: 1 },
    { q: "Biểu đồ năng lượng của phản ứng toả nhiệt có đặc điểm là?", options: ["A. Mức năng lượng chất đầu thấp hơn sản phẩm", "B. Mức năng lượng chất đầu cao hơn sản phẩm", "C. Năng lượng nằm ngang", "D. Hình sin"], correct: 1 },
    { q: "Đa số các phản ứng phân huỷ (như nung đá vôi CaCO<sub>3</sub>) thuộc loại phản ứng?", options: ["A. Toả nhiệt", "B. Thu nhiệt", "C. Oxi hoá khử", "D. Trao đổi ion"], correct: 1 },
    // Mức độ Vận dụng - Tính toán (15-19)
    { q: "Công thức tính &Delta;<sub>r</sub>H<sup>o</sup><sub>298</sub> của phản ứng dựa theo nhiệt tạo thành chuẩn (&Delta;<sub>f</sub>H) là?", options: ["A. Tổng &Delta;<sub>f</sub>H(chất tham gia) - Tổng &Delta;<sub>f</sub>H(sản phẩm)", "B. Tổng &Delta;<sub>f</sub>H(sản phẩm) - Tổng &Delta;<sub>f</sub>H(chất tham gia)", "C. Tích các &Delta;<sub>f</sub>H", "D. Tổng tất cả các &Delta;<sub>f</sub>H"], correct: 1 },
    { q: "Tính &Delta;<sub>r</sub>H của phản ứng H<sub>2</sub>(g) + Cl<sub>2</sub>(g) &rarr; 2HCl(g). Biết E<sub>b</sub>(H-H)=436; E<sub>b</sub>(Cl-Cl)=243; E<sub>b</sub>(H-Cl)=432 kJ/mol?", options: ["A. +185 kJ", "B. -185 kJ", "C. -247 kJ", "D. +247 kJ"], correct: 1 },
    { q: "Biết &Delta;<sub>f</sub>H của CH<sub>4</sub>, CO<sub>2</sub>, H<sub>2</sub>O(l) lần lượt là -74,8; -393,5; -285,8 kJ/mol. Tính nhiệt đốt cháy hoàn toàn 1 mol CH<sub>4</sub>?", options: ["A. -890,3 kJ", "B. +890,3 kJ", "C. -604,5 kJ", "D. +604,5 kJ"], correct: 0 },
    { q: "Cho phương trình: 2H<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2H<sub>2</sub>O(l) có &Delta;<sub>r</sub>H = -571,6 kJ. Nhiệt tạo thành chuẩn của H<sub>2</sub>O(l) là?", options: ["A. -571,6 kJ/mol", "B. -285,8 kJ/mol", "C. +285,8 kJ/mol", "D. +571,6 kJ/mol"], correct: 1 },
    { q: "Đốt cháy 1 mol (12g) Carbon toả ra 393,5 kJ. Nếu chỉ đốt cháy 6g Carbon thì nhiệt lượng toả ra là?", options: ["A. 393,5 kJ", "B. 196,75 kJ", "C. 787,0 kJ", "D. 98,375 kJ"], correct: 1 }
  ],
  5: [ // Chương 6: Tốc độ phản ứng
    // Mức độ Biết (0-4)
    { q: "Tốc độ phản ứng hóa học là đại lượng đặc trưng cho sự biến thiên của cái gì theo thời gian?", options: ["A. Khối lượng các chất", "B. Thể tích bình chứa", "C. Nồng độ chất phản ứng hoặc sản phẩm", "D. Nhiệt độ môi trường"], correct: 2 },
    { q: "Đơn vị thông dụng của tốc độ phản ứng (đo nồng độ mol) là?", options: ["A. mol/L", "B. mol/(L.s)", "C. L/s", "D. mol.s"], correct: 1 },
    { q: "Chất xúc tác có vai trò cơ bản gì trong phản ứng hóa học?", options: ["A. Tăng nhiệt độ phản ứng", "B. Làm tăng tốc độ phản ứng mà không bị tiêu hao", "C. Thay đổi bản chất sản phẩm", "D. Làm giảm hiệu suất phản ứng"], correct: 1 },
    { q: "Kí hiệu thông dụng để biểu diễn tốc độ phản ứng là chữ gì?", options: ["A. t", "B. v", "C. C", "D. k"], correct: 1 },
    { q: "Yếu tố nào sau đây KHÔNG ảnh hưởng đến tốc độ của một phản ứng hoá học thông thường?", options: ["A. Nồng độ", "B. Nhiệt độ", "C. Diện tích bề mặt tiếp xúc", "D. Màu sắc của bình chứa"], correct: 3 },
    // Mức độ Thông hiểu, Tư duy (5-14)
    { q: "Khi tăng nhiệt độ, tốc độ đa số các phản ứng hoá học sẽ thay đổi như thế nào?", options: ["A. Giảm đi", "B. Tăng lên", "C. Không đổi", "D. Ngừng lại hoàn toàn"], correct: 1 },
    { q: "Theo thuyết va chạm, việc tăng nồng độ chất phản ứng làm tăng tốc độ phản ứng là do?", options: ["A. Tăng năng lượng hoạt hoá", "B. Giảm khoảng cách hạt", "C. Tăng số va chạm hiệu quả giữa các phân tử", "D. Tăng thể tích"], correct: 2 },
    { q: "Hành động đập nhỏ than thành các viên nhỏ trước khi đưa vào lò đốt nhằm mục đích vận dụng yếu tố nào?", options: ["A. Tăng áp suất", "B. Tăng nhiệt độ", "C. Tăng diện tích bề mặt tiếp xúc", "D. Thêm chất xúc tác"], correct: 2 },
    { q: "Đối với phản ứng có chất khí tham gia, khi nén làm tăng áp suất hệ thì tốc độ phản ứng sẽ?", options: ["A. Tăng lên", "B. Giảm đi", "C. Không thay đổi", "D. Không thể xác định"], correct: 0 },
    { q: "Năng lượng hoạt hóa (E<sub>a</sub>) của phản ứng được hiểu là?", options: ["A. Tổng năng lượng toả ra", "B. Năng lượng thu vào của hệ", "C. Năng lượng tối thiểu cần cung cấp để các hạt có thể phản ứng", "D. Động năng trung bình của phân tử"], correct: 2 },
    { q: "Tại sao thức ăn nấu trong nồi áp suất lại chín nhanh hơn so với nồi thường?", options: ["A. Nồi áp suất to hơn", "B. Do tăng áp suất làm tăng nhiệt độ sôi của nước", "C. Do áp suất làm thức ăn nở ra", "D. Kim loại nồi xúc tác"], correct: 1 },
    { q: "Bảo quản thực phẩm trong ngăn mát tủ lạnh giúp thực phẩm tươi lâu hơn là ứng dụng của việc kiểm soát yếu tố nào?", options: ["A. Nồng độ oxygen", "B. Chất bảo quản", "C. Nhiệt độ", "D. Áp suất"], correct: 2 },
    { q: "Chất xúc tác sinh học hoạt động trong cơ thể sinh vật được gọi là gì?", options: ["A. Hoocmon", "B. Enzyme", "C. Kháng thể", "D. Vitamin"], correct: 1 },
    { q: "Bản chất tác dụng của chất xúc tác trong việc làm tăng tốc độ phản ứng là gì?", options: ["A. Tăng năng lượng phân tử", "B. Làm tăng nhiệt độ hệ", "C. Làm giảm năng lượng hoạt hoá (E<sub>a</sub>)", "D. Cung cấp electron"], correct: 2 },
    { q: "Trong biểu thức tính tốc độ trung bình theo nồng độ chất tham gia, tại sao phải có dấu trừ (-) phía trước?", options: ["A. Do tốc độ là số âm", "B. Do nồng độ chất tham gia giảm dần theo thời gian", "C. Do quy ước quốc tế", "D. Do nhiệt độ giảm"], correct: 1 },
    // Mức độ Vận dụng - Tính toán (15-19)
    { q: "Định luật tác dụng khối lượng: v = k.[A]<sup>a</sup>.[B]<sup>b</sup>. Trong đó k được gọi là gì?", options: ["A. Hằng số cân bằng", "B. Hằng số tốc độ phản ứng", "C. Hằng số khí lí tưởng", "D. Hệ số nhiệt độ"], correct: 1 },
    { q: "Hệ số nhiệt độ Van't Hoff (&gamma;) của phản ứng là 2. Nếu tăng nhiệt độ từ 20<sup>o</sup>C lên 40<sup>o</sup>C, tốc độ phản ứng sẽ tăng bao nhiêu lần?", options: ["A. 2 lần", "B. 4 lần", "C. 6 lần", "D. 8 lần"], correct: 1 },
    { q: "Ở 25<sup>o</sup>C tốc độ phản ứng là v. Biết hệ số &gamma; = 3, tốc độ phản ứng ở 55<sup>o</sup>C sẽ là bao nhiêu?", options: ["A. 3v", "B. 9v", "C. 27v", "D. 81v"], correct: 2 },
    { q: "Cho phản ứng đơn giản: A + B &rarr; C. Nếu nồng độ chất A tăng gấp đôi, nồng độ B giữ nguyên thì tốc độ phản ứng v thay đổi ra sao?", options: ["A. Không đổi", "B. Tăng 2 lần", "C. Tăng 4 lần", "D. Giảm 2 lần"], correct: 1 },
    { q: "Phản ứng: 2SO<sub>2</sub>(g) + O<sub>2</sub>(g) &rarr; 2SO<sub>3</sub>(g). Nếu nén hệ làm áp suất tăng gấp 2 lần, tốc độ phản ứng sẽ tăng bao nhiêu lần?", options: ["A. 2 lần", "B. 4 lần", "C. 8 lần", "D. 16 lần"], correct: 2 }
  ],
  6: [ // Chương 7: Nguyên tố nhóm Halogen
    // Mức độ Biết (0-4)
    { q: "Các nguyên tố nhóm Halogen nằm ở vị trí nào trong bảng tuần hoàn?", options: ["A. Nhóm IA", "B. Nhóm VA", "C. Nhóm VIIA", "D. Nhóm VIIIA"], correct: 2 },
    { q: "Trạng thái vật lý của Bromine (Br<sub>2</sub>) ở điều kiện thường là?", options: ["A. Thể khí", "B. Thể lỏng", "C. Thể rắn", "D. Trạng thái plasma"], correct: 1 },
    { q: "Trong các Halogen, nguyên tố nào có tính phi kim và tính oxi hóa mạnh nhất?", options: ["A. Fluorine (F)", "B. Chlorine (Cl)", "C. Bromine (Br)", "D. Iodine (I)"], correct: 0 },
    { q: "Khí Chlorine (Cl<sub>2</sub>) ở điều kiện thường có màu sắc đặc trưng là?", options: ["A. Không màu", "B. Vàng lục", "C. Nâu đỏ", "D. Tím đen"], correct: 1 },
    { q: "Lớp electron ngoài cùng của nguyên tử Halogen chứa bao nhiêu electron?", options: ["A. 5", "B. 6", "C. 7", "D. 8"], correct: 2 },
    // Mức độ Thông hiểu, Tư duy (5-14)
    { q: "Đi từ Fluorine đến Iodine, bán kính nguyên tử biến đổi như thế nào?", options: ["A. Giảm dần", "B. Tăng dần", "C. Không thay đổi", "D. Tăng rồi giảm"], correct: 1 },
    { q: "Nguyên nhân chính khiến Fluorine (F) chỉ có số oxi hoá -1 trong các hợp chất mà không có số oxi hoá dương là do?", options: ["A. F có độ âm điện lớn nhất và không có phân lớp d trống", "B. F là chất khí", "C. Phân tử F<sub>2</sub> rất bền vững", "D. F có nguyên tử khối nhỏ"], correct: 0 },
    { q: "Để nhận biết sự có mặt của hồ tinh bột, người ta thường dùng thuốc thử là Halogen nào?", options: ["A. Nước chlorine", "B. Dung dịch bromine", "C. Dung dịch iodine", "D. Khí fluorine"], correct: 2 },
    { q: "Dung dịch axit nào sau đây có khả năng ăn mòn thuỷ tinh (SiO<sub>2</sub>) nên không được đựng trong chai thuỷ tinh?", options: ["A. HCl", "B. HF", "C. HBr", "D. HI"], correct: 1 },
    { q: "Nước Javel có tác dụng tẩy trắng và sát trùng. Thành phần hoá học chính của nước Javel gồm?", options: ["A. NaCl và NaClO", "B. HCl và HClO", "C. CaCl<sub>2</sub> và CaOCl<sub>2</sub>", "D. KCl và KClO<sub>3</sub>"], correct: 0 },
    { q: "Khi sục khí Cl<sub>2</sub> vào nước, phản ứng xảy ra thuộc loại phản ứng nào?", options: ["A. Phản ứng thế", "B. Phản ứng phân huỷ", "C. Phản ứng tự oxi hoá - tự khử", "D. Phản ứng trao đổi"], correct: 2 },
    { q: "Tính tẩy màu của nước chlorine là do sự có mặt của chất nào mang tính oxi hoá rất mạnh?", options: ["A. HCl", "B. HClO", "C. Cl<sub>2</sub> dư", "D. H<sub>2</sub>O"], correct: 1 },
    { q: "Hiện tượng quan sát được khi nhỏ dung dịch AgNO<sub>3</sub> vào ống nghiệm chứa dung dịch NaCl là?", options: ["A. Sủi bọt khí", "B. Xuất hiện kết tủa trắng", "C. Xuất hiện kết tủa vàng", "D. Không có hiện tượng"], correct: 1 },
    { q: "Halogen nào ở trạng thái rắn có hiện tượng thăng hoa (chuyển trực tiếp từ rắn sang khí khi đun nóng)?", options: ["A. Fluorine", "B. Chlorine", "C. Bromine", "D. Iodine"], correct: 3 },
    { q: "Hợp chất nào của bạc được dùng làm chất bắt sáng trên phim ảnh đen trắng cổ điển?", options: ["A. AgF", "B. AgBr", "C. AgNO<sub>3</sub>", "D. Ag<sub>2</sub>O"], correct: 1 },
    // Mức độ Vận dụng - Tính toán (15-19)
    { q: "Sắp xếp tính axit của các dung dịch hydrohalic acid theo chiều TĂNG DẦN?", options: ["A. HF < HCl < HBr < HI", "B. HI < HBr < HCl < HF", "C. HCl < HBr < HI < HF", "D. HF < HI < HBr < HCl"], correct: 0 },
    { q: "Phản ứng tổng hợp khí HCl từ H<sub>2</sub> và Cl<sub>2</sub> cần điều kiện kích thích nào?", options: ["A. Nhiệt độ cao hoặc ánh sáng", "B. Bóng tối", "C. Xúc tác Platin", "D. Làm lạnh sâu"], correct: 0 },
    { q: "Cho 1,12 lít khí Cl<sub>2</sub> (đkc) tác dụng hoàn toàn với kim loại Cu dư đun nóng. Khối lượng muối CuCl<sub>2</sub> thu được là? (Cu=64, Cl=35,5)", options: ["A. 6,75 g", "B. 13,5 g", "C. 3,375 g", "D. 27 g"], correct: 0 },
    { q: "Hòa tan 5,85 gam muối ăn (NaCl) vào dung dịch AgNO<sub>3</sub> dư. Khối lượng kết tủa trắng AgCl thu được là bao nhiêu? (Ag=108, Cl=35,5, Na=23)", options: ["A. 14,35 g", "B. 28,70 g", "C. 7,175 g", "D. 10,80 g"], correct: 0 },
    { q: "Khối lượng của 0,5 mol phân tử khí chlorine (Cl<sub>2</sub>) là bao nhiêu gam?", options: ["A. 17,75 g", "B. 35,50 g", "C. 71,00 g", "D. 142,0 g"], correct: 2 }
  ]
};
