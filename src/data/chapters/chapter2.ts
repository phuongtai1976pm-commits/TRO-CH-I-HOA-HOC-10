import { Question } from "../questionTypes";

export const chapter2Questions: Question[] = [
  // --- PHẦN 1: TRẮC NGHIỆM 4 LỰA CHỌN (12 CÂU - 40%) ---
  {
    id: "c2_q1",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Các nguyên tố trong bảng tuần hoàn hiện đại được xếp theo chiều tăng dần của đại lượng nào?",
    options: ["A. Khối lượng nguyên tử", "B. Điện tích hạt nhân Z", "C. Số neutron", "D. Bán kính nguyên tử"],
    correct: 1,
    explanation: "Định luật tuần hoàn: Các nguyên tố xếp theo chiều tăng dần điện tích hạt nhân Z."
  },
  {
    id: "c2_q2",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Bảng tuần hoàn các nguyên tố hoá học hiện nay gồm bao nhiêu chu kì?",
    options: ["A. 6", "B. 7", "C. 8", "D. 9"],
    correct: 1,
    explanation: "Có 7 chu kì (1, 2, 3 là chu kì nhỏ; 4, 5, 6, 7 là chu kì lớn)."
  },
  {
    id: "c2_q3",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Các nguyên tố thuộc nhóm VIIA trong bảng tuần hoàn có tên gọi là gì?",
    options: ["A. Kim loại kiềm", "B. Khí hiếm", "C. Halogen", "D. Kim loại kiềm thổ"],
    correct: 2,
    explanation: "Nhóm VIIA là nhóm các phi kim Halogen (F, Cl, Br, I, At)."
  },
  {
    id: "c2_q4",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Trong một chu kì, đi từ trái sang phải, bán kính nguyên tử của các nguyên tố nói chung biến đổi như thế nào?",
    options: ["A. Tăng dần", "B. Giảm dần", "C. Không thay đổi", "D. Vừa tăng vừa giảm"],
    correct: 1,
    explanation: "Đi từ trái sang phải trong 1 chu kì, Z tăng làm lực hút của hạt nhân với electron tăng => bán kính giảm."
  },
  {
    id: "c2_q5",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Trong một nhóm A, đi từ trên xuống dưới, độ âm điện của các nguyên tố biến đổi như thế nào?",
    options: ["A. Tăng dần", "B. Giảm dần", "C. Giữ nguyên", "D. Tăng rồi giảm"],
    correct: 1,
    explanation: "Từ trên xuống dưới trong nhóm A, bán kính nguyên tử tăng làm khả năng hút e giảm => độ âm điện giảm."
  },
  {
    id: "c2_q6",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Công thức oxide cao nhất của nguyên tố R thuộc nhóm VA là gì?",
    options: ["A. R₂O₃", "B. RO₂", "C. R₂O₅", "D. RO₃"],
    correct: 2,
    explanation: "Nguyên tố nhóm VA có hoá trị cao nhất với oxygen bằng 5 => công thức R₂O₅."
  },
  {
    id: "c2_q7",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Hai nguyên tố X và Y thuộc cùng một chu kì và ở hai nhóm A liên tiếp. Tổng số proton trong hạt nhân của X và Y là 25. Số hiệu nguyên tử của X, Y lần lượt là?",
    options: ["A. 11, 14", "B. 12, 13", "C. 10, 15", "D. 9, 16"],
    correct: 1,
    explanation: "Do liên tiếp trong 1 chu kì => Z_Y - Z_X = 1. Mà Z_X + Z_Y = 25 => Z_X = 12 (Mg) và Z_Y = 13 (Al)."
  },
  {
    id: "c2_q8",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho 4,6 gam một kim loại kiềm M (thuộc nhóm IA) tác dụng hết với nước dư thu được 2,479 lít khí H₂ (đkc ở 25°C, 1 bar). Kim loại M là?",
    options: ["A. Lithium (Li = 7)", "B. Sodium (Na = 23)", "C. Potassium (K = 39)", "D. Rubidium (Rb = 85)"],
    correct: 1,
    explanation: "n_H2 = 2,479 / 24,79 = 0,1 mol. M + H₂O → MOH + 0,5 H₂. n_M = 0,2 mol => M_M = 4,6 / 0,2 = 23 (Na)."
  },
  {
    id: "c2_q9",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Đại lượng nào sau đây của nguyên tử các nguyên tố biến đổi tuần hoàn theo chiều tăng dần của điện tích hạt nhân?",
    options: [
      "A. Điện tích hạt nhân",
      "B. Số lớp electron",
      "C. Cấu hình electron lớp ngoài cùng",
      "D. Nguyên tử khối"
    ],
    correct: 2,
    explanation: "Cấu hình electron lớp ngoài cùng biến đổi tuần hoàn, kéo theo sự biến đổi tuần hoàn tính chất của các nguyên tố."
  },
  {
    id: "c2_q10",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Hợp chất khí với hydrogen của nguyên tố X thuộc nhóm VIA có công thức dạng gì?",
    options: ["A. XH", "B. H₂X", "C. XH₃", "D. XH₄"],
    correct: 1,
    explanation: "Nguyên tố nhóm VIA có hoá trị với H bằng 8 - 6 = 2 => Công thức hợp chất khí là H₂X."
  },
  {
    id: "c2_q11",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Cho các nguyên tố ₁₁Na, ₁₂Mg, ₁₃Al, ₁₉K. Nguyên tố nào có bán kính nguyên tử lớn nhất?",
    options: ["A. Sodium (Na)", "B. Magnesium (Mg)", "C. Aluminium (Al)", "D. Potassium (K)"],
    correct: 3,
    explanation: "K có 4 lớp e (chu kì 4) nên bán kính lớn hơn Na, Mg, Al (chu kì 3). Trong chu kì 3: Na > Mg > Al. Vậy K lớn nhất."
  },
  {
    id: "c2_q12",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Hai nguyên tố A và B đứng kế tiếp nhau trong cùng một nhóm A có tổng số proton là 32. Số hiệu nguyên tử của A và B lần lượt là?",
    options: ["A. 7 và 25", "B. 12 và 20", "C. 8 và 24", "D. 11 và 21"],
    correct: 1,
    explanation: "Kế tiếp trong cùng nhóm A thường lệch nhau 8 hoặc 18 proton. Z_B - Z_A = 8 và Z_A + Z_B = 32 => Z_A = 12 (Mg) và Z_B = 20 (Ca)."
  },

  // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (9 CÂU - 30%) ---
  {
    id: "c2_q13",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các khẳng định về cấu trúc của bảng tuần hoàn:",
    subOptions: [
      { label: "a) Số thứ tự của chu kì bằng số lớp electron trong nguyên tử.", correct: true },
      { label: "b) Bảng tuần hoàn gồm 8 nhóm A và 8 nhóm B.", correct: true },
      { label: "c) Số thứ tự của nhóm A bằng số electron lớp ngoài cùng của nguyên tử.", correct: true },
      { label: "d) Các nguyên tố thuộc cùng một chu kì có số electron hoá trị bằng nhau.", correct: false }
    ],
    explanation: "Cùng chu kì có cùng số LỚP electron, cùng nhóm A có cùng số electron hoá trị."
  },
  {
    id: "c2_q14",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Về tính kim loại và phi kim của các nguyên tố trong bảng tuần hoàn:",
    subOptions: [
      { label: "a) Fluorine (F) là nguyên tố có tính phi kim mạnh nhất.", correct: true },
      { label: "b) Cesium (Cs) là nguyên tố kim loại mạnh nhất (trong số các nguyên tố không phóng xạ).", correct: true },
      { label: "c) Trong một nhóm A từ trên xuống dưới, tính phi kim tăng dần.", correct: false },
      { label: "d) Trong một chu kì từ trái sang phải, tính kim loại tăng dần.", correct: false }
    ],
    explanation: "Trong 1 chu kì từ trái sang phải: tính kim loại giảm, tính phi kim tăng. Trong 1 nhóm A từ trên xuống: tính phi kim giảm."
  },
  {
    id: "c2_q15",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho vị trí của nguyên tử Aluminum (Al, Z = 13):",
    subOptions: [
      { label: "a) Al nằm ở ô số 13, chu kì 3, nhóm IIIA trong bảng tuần hoàn.", correct: true },
      { label: "b) Nguyên tử Al có 3 electron ở lớp ngoài cùng.", correct: true },
      { label: "c) Hydroxide cao nhất của Al là Al(OH)₃ có tính base mạnh.", correct: false },
      { label: "d) Oxide cao nhất của Al là Al₂O₃ mang tính chất lưỡng tính.", correct: true }
    ],
    explanation: "Al(OH)₃ là hydroxide lưỡng tính, không phải base mạnh."
  },
  {
    id: "c2_q16",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét dãy biến đổi tính chất của các hydroxide: NaOH, Mg(OH)₂, Al(OH)₃:",
    subOptions: [
      { label: "a) Đi từ NaOH đến Al(OH)₃, tính base giảm dần.", correct: true },
      { label: "b) NaOH là base mạnh, tan hoàn toàn trong nước.", correct: true },
      { label: "c) Al(OH)₃ là một base mạnh dễ tan trong nước.", correct: false },
      { label: "d) Thứ tự giảm dần tính base là: NaOH > Mg(OH)₂ > Al(OH)₃.", correct: true }
    ],
    explanation: "Al(OH)₃ là kết tủa trắng, lưỡng tính, tính base yếu."
  },
  {
    id: "c2_q17",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Nguyên tố Sulfur (S) ở ô thứ 16, chu kì 3, nhóm VIA. Đánh giá tính đúng/sai:",
    subOptions: [
      { label: "a) Nguyên tử S có cấu hình electron là 1s² 2s² 2p⁶ 3s² 3p⁴.", correct: true },
      { label: "b) S là nguyên tố phi kim.", correct: true },
      { label: "c) Công thức oxide cao nhất của S là SO₂.", correct: false },
      { label: "d) Công thức hợp chất khí với hydrogen của S là H₂S.", correct: true }
    ],
    explanation: "S ở nhóm VIA => oxide cao nhất là SO₃."
  },
  {
    id: "c2_q18",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Nguyên tố R tạo oxide cao nhất dạng RO₃. Hợp chất khí của R với hydrogen chứa 94,12% R về khối lượng:",
    subOptions: [
      { label: "a) R thuộc nhóm VIA trong bảng tuần hoàn.", correct: true },
      { label: "b) Công thức hợp chất khí với hydrogen của R là RH₂ (hoặc H₂R).", correct: true },
      { label: "c) Khối lượng nguyên tử của R bằng 32 amu (Sulfur - S).", correct: true },
      { label: "d) Oxide cao nhất RO₃ tan trong nước tạo ra dung dịch có tính base.", correct: false }
    ],
    explanation: "SO₃ tan trong nước tạo H₂SO₄ là dung dịch acid mạnh, không phải base."
  },
  {
    id: "c2_q19",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho các phát biểu về quy luật biến đổi thuộc chu kì 3 (từ Na đến Cl):",
    subOptions: [
      { label: "a) Bán kính nguyên tử giảm dần từ Na đến Cl.", correct: true },
      { label: "b) Độ âm điện tăng dần từ Na đến Cl.", correct: true },
      { label: "c) Tính acid của các hydroxide cao nhất tăng dần từ NaOH đến HClO₄.", correct: true },
      { label: "d) Hoá trị cao nhất với oxygen tăng lần lượt từ 1 đến 8.", correct: false }
    ],
    explanation: "Hoá trị cao nhất với oxygen tăng từ 1 đến 7 (Na₂O đến Cl₂O₇), không phải 8."
  },
  {
    id: "c2_q20",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Xét hai nguyên tố X (Z = 11) và Y (Z = 17):",
    subOptions: [
      { label: "a) X thuộc nhóm IA, Y thuộc nhóm VIIA trong cùng chu kì 3.", correct: true },
      { label: "b) X là kim loại kiềm mạnh, Y là phi kim halogen mạnh.", correct: true },
      { label: "c) Bán kính nguyên tử của X lớn hơn bán kính nguyên tử của Y.", correct: true },
      { label: "d) Oxide cao nhất của X là X₂O có tính acid.", correct: false }
    ],
    explanation: "Na₂O (X₂O) là basic oxide (oxide base) tác dụng với nước tạo NaOH."
  },
  {
    id: "c2_q21",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Nhận xét nào sau đây về định luật tuần hoàn của Mendeleev và hiện đại đúng hay sai:",
    subOptions: [
      { label: "a) Mendeleev sắp xếp các nguyên tố theo chiều tăng dần khối lượng nguyên tử.", correct: true },
      { label: "b) Định luật tuần hoàn hiện đại dựa trên sự tăng dần điện tích hạt nhân Z.", correct: true },
      { label: "c) Mendeleev đã dự đoán thành công sự tồn tại của các nguyên tố chưa được phát hiện như Gallium, Germanium.", correct: true },
      { label: "d) Nhóm B trong bảng tuần hoàn chỉ bao gồm các nguyên tố phi kim.", correct: false }
    ],
    explanation: "Nhóm B chỉ chứa các nguyên tố kim loại (kim loại chuyển tiếp)."
  },

  // --- PHẦN 3: CÂU TRẢ LỜI NGẮN / TÍNH TOÁN (9 CÂU - 30%) ---
  {
    id: "c2_q22",
    type: "short",
    difficulty: "Nhận biết",
    q: "Nguyên tố Chlorine (Z = 17) thuộc chu kì mấy trong bảng tuần hoàn?",
    correctAnswer: "3",
    acceptableAnswers: ["3", "chu kì 3"],
    unit: "",
    explanation: "Cấu hình e của Cl: 1s² 2s² 2p⁶ 3s² 3p⁵ có 3 lớp e => Chu kì 3."
  },
  {
    id: "c2_q23",
    type: "short",
    difficulty: "Nhận biết",
    q: "Hợp chất khí với hydrogen của nguyên tố nhóm IVA có dạng tổng quát là RH_x. Giá trị của x là bao nhiêu?",
    correctAnswer: "4",
    acceptableAnswers: ["4"],
    unit: "",
    explanation: "Nhóm IVA: hoá trị với H = 8 - 4 = 4 => RH₄."
  },
  {
    id: "c2_q24",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Một nguyên tố X có cấu hình electron lớp ngoài cùng là 3s² 3p⁴. Hỏi X thuộc nhóm mấy A trong bảng tuần hoàn?",
    correctAnswer: "6",
    acceptableAnswers: ["6", "VIA", "VI"],
    unit: "",
    explanation: "Lớp ngoài cùng có 2 + 4 = 6 electron => Nhóm VIA."
  },
  {
    id: "c2_q25",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Nguyên tố Phosphorus (P) ở ô thứ 15. Oxide cao nhất của P có công thức là P₂O_x. Giá trị của x là bao nhiêu?",
    correctAnswer: "5",
    acceptableAnswers: ["5"],
    unit: "",
    explanation: "P (Z=15) thuộc nhóm VA => Oxide cao nhất là P₂O₅ (x = 5)."
  },
  {
    id: "c2_q26",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho 1,2 gam một kim loại nhóm IIA tác dụng hoàn toàn với dung dịch HCl dư, thu được 0,05 mol khí H₂. Xác định nguyên tử khối của kim loại đó (amu).",
    correctAnswer: "24",
    acceptableAnswers: ["24", "24 amu"],
    unit: "amu",
    explanation: "M + 2HCl → MCl₂ + H₂. n_M = n_H2 = 0,05 mol => M_M = 1,2 / 0,05 = 24 (Magnesium - Mg)."
  },
  {
    id: "c2_q27",
    type: "short",
    difficulty: "Vận dụng",
    q: "Oxide cao nhất của nguyên tố R thuộc nhóm VIIA có chứa 61,2% oxygen về khối lượng. Xác định nguyên tử khối của nguyên tố R (amu).",
    correctAnswer: "35,5",
    acceptableAnswers: ["35,5", "35.5"],
    unit: "amu",
    explanation: "Oxide cao nhất R₂O₇. %O = (16×7) / (2R + 112) = 0,612 => 112 / (2R + 112) = 0,612 => 2R + 112 = 183 => R = 35,5 (Chlorine - Cl)."
  },
  {
    id: "c2_q28",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Nguyên tử của nguyên tố Potassium (K) có Z = 19. Potassium thuộc nhóm nào trong bảng tuần hoàn?",
    correctAnswer: "1A",
    acceptableAnswers: ["IA", "1A", "IA", "nhóm IA", "nhóm 1A"],
    unit: "",
    explanation: "Cấu hình K: [Ar] 4s¹. Có 1e lớp ngoài cùng ở phân lớp s => Nhóm IA."
  },
  {
    id: "c2_q29",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho 3,9 gam một kim loại M thuộc nhóm IA tác dụng với nước dư thu được 1,2395 lít H₂ (ở 25°C, 1 bar). Tính khối lượng nguyên tử của M (amu).",
    correctAnswer: "39",
    acceptableAnswers: ["39"],
    unit: "amu",
    explanation: "n_H2 = 1,2395 / 24,79 = 0,05 mol => n_M = 0,1 mol => M = 3,9 / 0,1 = 39 (Potassium - K)."
  },
  {
    id: "c2_q30",
    type: "short",
    difficulty: "Vận dụng",
    q: "Hợp chất khí với hydrogen của nguyên tố R là RH₃. Trong oxide cao nhất của R, % khối lượng của R là 25,93%. Xác định khối lượng nguyên tử của R (amu).",
    correctAnswer: "14",
    acceptableAnswers: ["14"],
    unit: "amu",
    explanation: "Khí RH₃ => R nhóm VA => Oxide cao nhất R₂O₅. %R = 2R / (2R + 80) = 0,2593 => R = 14 (Nitrogen)."
  }
];
