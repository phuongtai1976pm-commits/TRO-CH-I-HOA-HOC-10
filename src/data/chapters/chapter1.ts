import { Question } from "../questionTypes";

export const chapter1Questions: Question[] = [
  // --- PHẦN 1: TRẮC NGHIỆM 4 LỰA CHỌN (12 CÂU - 40%) ---
  {
    id: "c1_q1",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Hạt mang điện tích dương nằm trong hạt nhân nguyên tử là?",
    options: ["A. Electron", "B. Proton", "C. Neutron", "D. Positron"],
    correct: 1,
    explanation: "Hạt nhân gồm proton (mang điện dương +1) và neutron (không mang điện)."
  },
  {
    id: "c1_q2",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Orbital nguyên tử (AO) s có dạng hình học nào?",
    options: ["A. Hình số 8 nổi", "B. Hình cầu", "C. Hình hoa hồng", "D. Hình elip"],
    correct: 1,
    explanation: "Các AO s có dạng hình cầu tâm là hạt nhân nguyên tử."
  },
  {
    id: "c1_q3",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Số electron tối đa chứa trong phân lớp p là bao nhiêu?",
    options: ["A. 2", "B. 6", "C. 10", "D. 14"],
    correct: 1,
    explanation: "Phân lớp p gồm 3 orbital, chứa tối đa 3 × 2 = 6 electron."
  },
  {
    id: "c1_q4",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Đồng vị là những nguyên tử của cùng một nguyên tố hóa học, có cùng số proton nhưng khác nhau về?",
    options: ["A. Số electron", "B. Số hiệu nguyên tử Z", "C. Số neutron", "D. Số lớp electron"],
    correct: 2,
    explanation: "Các đồng vị có cùng số P (cùng Z) nhưng khác số N, dẫn đến số khối A khác nhau."
  },
  {
    id: "c1_q5",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Nguyên tử Sodium (Na, Z = 11) có cấu hình electron lớp ngoài cùng là?",
    options: ["A. 2s¹", "B. 3s¹", "C. 3s²", "D. 3p¹"],
    correct: 1,
    explanation: "Cấu hình electron đầy đủ của Na (Z=11) là 1s² 2s² 2p⁶ 3s¹. Lớp ngoài cùng (lớp 3) có 3s¹."
  },
  {
    id: "c1_q6",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Lớp electron thứ 3 (lớp M) có tối đa bao nhiêu phân lớp?",
    options: ["A. 1", "B. 2", "C. 3", "D. 4"],
    correct: 2,
    explanation: "Lớp thứ n có n phân lớp (với n ≤ 4). Lớp M (n=3) có 3 phân lớp là 3s, 3p, 3d."
  },
  {
    id: "c1_q7",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Đồng vị ⁶³Cu chiếm 73% và ⁶⁵Cu chiếm 27% trong tự nhiên. Nguyên tử khối trung bình của Copper (Cu) là?",
    options: ["A. 63,54", "B. 64,00", "C. 63,46", "D. 64,54"],
    correct: 0,
    explanation: "A_tb = (63 × 73 + 65 × 27) / 100 = (4599 + 1755) / 100 = 63,54."
  },
  {
    id: "c1_q8",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Nguyên tử M có tổng số hạt cơ bản là 52, trong đó số hạt mang điện nhiều hơn số hạt không mang điện là 16. Số đơn vị điện tích hạt nhân (Z) của M là?",
    options: ["A. 16", "B. 17", "C. 18", "D. 19"],
    correct: 1,
    explanation: "Hệ PT: 2Z + N = 52 và 2Z - N = 16 => 4Z = 68 => Z = 17 (Chlorine - Cl)."
  },
  {
    id: "c1_q9",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Cấu hình electron của nguyên tử Iron (Fe, Z = 26) ở trạng thái cơ bản là?",
    options: [
      "A. [Ar] 4s² 3d⁶",
      "B. [Ar] 3d⁶ 4s²",
      "C. [Ar] 3d⁸",
      "D. [Ar] 3d⁵ 4s³"
    ],
    correct: 1,
    explanation: "Thứ tự mức năng lượng: 1s2s2p3s3p4s3d. Sắp xếp lại theo từng lớp: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s² hay viết gọn [Ar] 3d⁶ 4s²."
  },
  {
    id: "c1_q10",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Tổng số orbital nguyên tử có trong lớp N (n = 4) là bao nhiêu?",
    options: ["A. 4", "B. 8", "C. 9", "D. 16"],
    correct: 3,
    explanation: "Số orbital trong lớp n bằng n² = 4² = 16 orbital (gồm 1s, 3p, 5d, 7f)."
  },
  {
    id: "c1_q11",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Nguyên tử của nguyên tố X có Z = 15. Phát biểu nào sau đây đúng về X?",
    options: [
      "A. X là nguyên tố s và là kim loại",
      "B. X là nguyên tố p và là phi kim",
      "C. X là nguyên tố d và là kim loại",
      "D. X là nguyên tố p và là khí hiếm"
    ],
    correct: 1,
    explanation: "Cấu hình e của X (Z=15) là 1s² 2s² 2p⁶ 3s² 3p³. Electron cuối cùng điền vào phân lớp p => nguyên tố p; có 5e lớp ngoài cùng => phi kim."
  },
  {
    id: "c1_q12",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Anion X²⁻ có cấu hình electron lớp ngoài cùng là 2s² 2p⁶. Số hiệu nguyên tử Z của nguyên tố X là?",
    options: ["A. 6", "B. 8", "C. 10", "D. 12"],
    correct: 1,
    explanation: "X + 2e → X²⁻. Cấu hình X²⁻ có 10e => Số electron của nguyên tử X là 10 - 2 = 8. Vậy Z = 8 (Oxygen)."
  },

  // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (9 CÂU - 30%) ---
  {
    id: "c1_q13",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các phát biểu về thành phần và cấu tạo nguyên tử:",
    subOptions: [
      { label: "a) Tất cả các nguyên tử đều được cấu tạo từ 3 loại hạt cơ bản p, n, e (trừ đồng vị ¹₁H không có neutron).", correct: true },
      { label: "b) Khối lượng nguyên tử tập trung chủ yếu ở lớp vỏ electron.", correct: false },
      { label: "c) Trong nguyên tử trung hòa về điện, số proton luôn bằng số electron.", correct: true },
      { label: "d) Hạt neutron mang điện tích âm bằng -1,602 × 10⁻¹⁹ C.", correct: false }
    ],
    explanation: "Khối lượng tập trung ở hạt nhân vì m_e rất nhỏ. Hạt neutron không mang điện."
  },
  {
    id: "c1_q14",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các nhận xét về orbital nguyên tử và cấu hình electron:",
    subOptions: [
      { label: "a) Mỗi orbital nguyên tử chỉ chứa tối đa 2 electron có chiều quay (spin) ngược nhau.", correct: true },
      { label: "b) Lớp L (n = 2) có tối đa 8 electron.", correct: true },
      { label: "c) Phân lớp d chứa tối đa 6 electron.", correct: false },
      { label: "d) Các electron trên cùng một phân lớp có mức năng lượng bằng nhau.", correct: true }
    ],
    explanation: "Phân lớp d chứa tối đa 10 electron (gồm 5 AO d)."
  },
  {
    id: "c1_q15",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét nguyên tử Chlorine có Z = 17 và số khối A = 35:",
    subOptions: [
      { label: "a) Hạt nhân nguyên tử Cl có 17 proton và 18 neutron.", correct: true },
      { label: "b) Cấu hình electron của nguyên tử Cl là 1s² 2s² 2p⁶ 3s² 3p⁵.", correct: true },
      { label: "c) Nguyên tử Cl có 5 electron ở lớp ngoài cùng.", correct: false },
      { label: "d) Cl là một nguyên tố kim loại điển hình.", correct: false }
    ],
    explanation: "Lớp ngoài cùng (lớp 3) có 2 + 5 = 7 electron => Cl là phi kim."
  },
  {
    id: "c1_q16",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho ba nguyên tử có kí hiệu nguyên tử: X (¹²₆X), Y (¹³₆Y), Z (¹³₇Z). Nhận xét đúng sai:",
    subOptions: [
      { label: "a) Nguyên tử X và Y có cùng số proton.", correct: true },
      { label: "b) Nguyên tử X và Y là hai đồng vị của cùng một nguyên tố hoá học.", correct: true },
      { label: "c) Nguyên tử Y và Z có cùng số khối A.", correct: true },
      { label: "d) Nguyên tử Z có 7 neutron trong hạt nhân.", correct: false }
    ],
    explanation: "X (¹²₆X) và Y (¹³₆Y) có Z=6 (cùng 6 proton, là đồng vị của nhau). Y (¹³₆Y) và Z (¹³₇Z) có cùng số khối A=13. Nguyên tử Z (¹³₇Z) có Z=7, A=13 => N_Z = 13 - 7 = 6 neutron."
  },
  {
    id: "c1_q17",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét ion Potassium K⁺ (cho Z_K = 19, A = 39):",
    subOptions: [
      { label: "a) Ion K⁺ được hình thành khi nguyên tử K nhận thêm 1 electron.", correct: false },
      { label: "b) Ion K⁺ có 19 proton và 18 electron.", correct: true },
      { label: "c) Cấu hình electron của ion K⁺ là 1s² 2s² 2p⁶ 3s² 3p⁶.", correct: true },
      { label: "d) Số neutron trong hạt nhân ion K⁺ là 20.", correct: true }
    ],
    explanation: "K nhường 1e thành K⁺. N = 39 - 19 = 20."
  },
  {
    id: "c1_q18",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Một nguyên tố X có 2 đồng vị X₁ và X₂. Đồng vị X₁ có 35 neutron chiếm 75%. Nguyên tử khối trung bình của X là 63,5. Đánh giá tính đúng/sai:",
    subOptions: [
      { label: "a) Phần trăm số nguyên tử của đồng vị X₂ trong tự nhiên là 25%.", correct: true },
      { label: "b) Số khối của đồng vị X₁ là 63.", correct: true },
      { label: "c) Số khối của đồng vị X₂ là 65.", correct: true },
      { label: "d) Số hiệu nguyên tử Z của nguyên tố X là 28.", correct: false }
    ],
    explanation: "A₁ = Z + 35. 63,5 = 0,75*(Z+35) + 0,25*A₂. Do A₂ = Z+37 => Z = 29 (Cu)."
  },
  {
    id: "c1_q19",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét đặc điểm của các ion và nguyên tử Fluorine (Z=9), Neon (Z=10), Sodium (Z=11):",
    subOptions: [
      { label: "a) Cation Na⁺ và anion F⁻ có cùng cấu hình electron là 1s² 2s² 2p⁶.", correct: true },
      { label: "b) Nguyên tử F (Z=9) có 1 electron độc thân ở lớp ngoài cùng.", correct: true },
      { label: "c) Nguyên tử Neon là khí hiếm có 8 electron lớp ngoài cùng rất bền vững.", correct: true },
      { label: "d) Bán kính của ion F⁻ nhỏ hơn bán kính của nguyên tử F.", correct: false }
    ],
    explanation: "Anion F⁻ có thêm 1e so với F nên lực đẩy e-e tăng làm bán kính F⁻ lớn hơn nguyên tử F."
  },
  {
    id: "c1_q20",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho các nhận xét về cấu hình electron của Iron (Fe, Z = 26):",
    subOptions: [
      { label: "a) Cấu hình electron đầy đủ của Fe là 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s².", correct: true },
      { label: "b) Nguyên tử Fe có 2 electron ở lớp ngoài cùng (lớp 4).", correct: true },
      { label: "c) Ion Fe²⁺ được hình thành khi Fe mất 2 electron ở phân lớp 3d.", correct: false },
      { label: "d) Ion Fe³⁺ có cấu hình [Ar] 3d⁵, phân lớp 3d đạt trạng thái bán bão hòa rất bền.", correct: true }
    ],
    explanation: "Fe mất 2e ở lớp ngoài cùng 4s² trước để tạo thành Fe²⁺ ([Ar] 3d⁶)."
  },
  {
    id: "c1_q21",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các nhận xét về lịch sử và phát triển của các mô hình nguyên tử:",
    subOptions: [
      { label: "a) Theo Rutherford - Bohr, electron chuyển động quanh hạt nhân theo quỹ đạo tròn/elip xác định.", correct: true },
      { label: "b) Theo mô hình hiện đại, không thể xác định chính xác quỹ đạo mà chỉ xác định vùng không gian có xác suất tìm thấy electron lớn nhất.", correct: true },
      { label: "c) Orbital nguyên tử s có dạng hình cầu, orbital p có dạng hình số 8 nổi.", correct: true },
      { label: "d) Một orbital nguyên tử p có thể chứa tối đa 6 electron.", correct: false }
    ],
    explanation: "Mỗi AO (dù s, p, d hay f) chỉ chứa tối đa 2 electron. Phân lớp p có 3 AO p nên chứa tối đa 6e."
  },

  // --- PHẦN 3: CÂU TRẢ LỜI NGẮN / TÍNH TOÁN (9 CÂU - 30%) ---
  {
    id: "c1_q22",
    type: "short",
    difficulty: "Nhận biết",
    q: "Lớp electron thứ 2 (lớp L) chứa tối đa bao nhiêu electron?",
    correctAnswer: "8",
    acceptableAnswers: ["8", "8 electron"],
    unit: "electron",
    explanation: "Số e tối đa lớp n là 2n² => 2 × 2² = 8."
  },
  {
    id: "c1_q23",
    type: "short",
    difficulty: "Nhận biết",
    q: "Nguyên tử Sulfur (S) có Z = 16. Hỏi nguyên tử S có bao nhiêu electron ở lớp ngoài cùng?",
    correctAnswer: "6",
    acceptableAnswers: ["6"],
    unit: "electron",
    explanation: "Cấu hình S: 1s² 2s² 2p⁶ 3s² 3p⁴ => lớp ngoài cùng (lớp 3) có 6e."
  },
  {
    id: "c1_q24",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Kí hiệu nguyên tử ²³₁₁Na chỉ ra hạt nhân Sodium có bao nhiêu hạt neutron?",
    correctAnswer: "12",
    acceptableAnswers: ["12"],
    unit: "neutron",
    explanation: "N = A - Z = 23 - 11 = 12."
  },
  {
    id: "c1_q25",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Một cation R²⁺ có tổng số electron là 18. Số hiệu nguyên tử Z của nguyên tố R là bao nhiêu?",
    correctAnswer: "20",
    acceptableAnswers: ["20"],
    unit: "",
    explanation: "R → R²⁺ + 2e. Cation R²⁺ có Z - 2 = 18 => Z = 20 (Calcium - Ca)."
  },
  {
    id: "c1_q26",
    type: "short",
    difficulty: "Vận dụng",
    q: "Tổng số hạt cơ bản (p, n, e) trong ion Cl⁻ (với Z = 17, A = 35) là bao nhiêu?",
    correctAnswer: "53",
    acceptableAnswers: ["53"],
    unit: "hạt",
    explanation: "Ion Cl⁻ có 17 proton, 18 neutron (35-17) và 18 electron (17+1). Tổng = 17 + 18 + 18 = 53."
  },
  {
    id: "c1_q27",
    type: "short",
    difficulty: "Vận dụng",
    q: "Nguyên tố Bromine có 2 đồng vị ⁷⁹Br (50,7%) và ⁸¹Br (49,3%). Tính nguyên tử khối trung bình của Bromine (làm tròn đến 2 chữ số thập phân).",
    correctAnswer: "79,99",
    acceptableAnswers: ["79,99", "79.99", "80"],
    unit: "",
    explanation: "A_tb = (79 × 50,7 + 81 × 49,3) / 100 = (4005,3 + 3993,3) / 100 = 79,986 ≈ 79,99."
  },
  {
    id: "c1_q28",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Tổng số orbital nguyên tử (AO) chứa electron của nguyên tử Aluminium (Al, Z = 13) ở trạng thái cơ bản là bao nhiêu?",
    correctAnswer: "7",
    acceptableAnswers: ["7"],
    unit: "orbital",
    explanation: "Cấu hình Al (Z=13): 1s² 2s² 2p⁶ 3s² 3p¹. 1s(1AO) + 2s(1AO) + 2p(3AO) + 3s(1AO) + 3p(1AO) = 7 AO."
  },
  {
    id: "c1_q29",
    type: "short",
    difficulty: "Vận dụng",
    q: "Một nguyên tử X có tổng số electron ở các phân lớp p là 11. Số hiệu nguyên tử Z của X là bao nhiêu?",
    correctAnswer: "17",
    acceptableAnswers: ["17"],
    unit: "",
    explanation: "Cấu hình e của X có 2p⁶ và 3p⁵ (tổng 6+5=11e ở p): 1s² 2s² 2p⁶ 3s² 3p⁵ => Z = 17 (Chlorine)."
  },
  {
    id: "c1_q30",
    type: "short",
    difficulty: "Vận dụng",
    q: "Trong tự nhiên, Chlorine có 2 đồng vị ³⁵Cl (75,77%) và ³⁷Cl (24,23%). Tính % khối lượng của đồng vị ³⁵Cl trong hợp chất HClO₄ (cho H=1, O=16, coi M_Cl = 35,45; làm tròn 1 chữ số thập phân).",
    correctAnswer: "26,4",
    acceptableAnswers: ["26,4", "26.4", "26,4%"],
    unit: "%",
    explanation: "M(HClO₄) = 1 + 35,45 + 64 = 100,45. %m(³⁵Cl) = (35 × 0,7577 / 100,45) × 100% = 26,4%."
  }
];
