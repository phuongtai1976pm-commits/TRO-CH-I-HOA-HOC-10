import { Question } from "../questionTypes";

export const chapter5Questions: Question[] = [
  // --- PHẦN 1: TRẮC NGHIỆM 4 LỰA CHỌN (12 CÂU - 40%) ---
  {
    id: "c5_q1",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Phản ứng tỏa nhiệt là phản ứng hóa học có đặc điểm gì?",
    options: ["A. Giải phóng năng lượng dưới dạng nhiệt ra môi trường", "B. Hấp thụ năng lượng dưới dạng nhiệt từ môi trường", "C. Không có sự thay đổi năng lượng", "D. Chỉ xảy ra khi đun nóng ở nhiệt độ rất cao"],
    correct: 0,
    explanation: "Phản ứng tỏa nhiệt giải phóng năng lượng ra môi trường xung quanh (làm môi trường nóng lên)."
  },
  {
    id: "c5_q2",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Biến thiên enthalpy chuẩn của phản ứng được kí hiệu là gì?",
    options: ["A. ΔrH°₂₉₈", "B. ΔfH°₂₉₈", "C. E_b", "D. K_C"],
    correct: 0,
    explanation: "ΔrH°₂₉₈ (reaction) là biến thiên enthalpy chuẩn của phản ứng."
  },
  {
    id: "c5_q3",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Enthalpy tạo thành chuẩn ΔfH°₂₉₈ của các đơn chất ở trạng thái bền vững nhất được quy ước bằng bao nhiêu?",
    options: ["A. 0 kJ/mol", "B. 100 kJ/mol", "C. 1 kJ/mol", "D. -100 kJ/mol"],
    correct: 0,
    explanation: "Quy ước: Enthalpy tạo thành chuẩn của mọi đơn chất bền bằng 0 kJ/mol."
  },
  {
    id: "c5_q4",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Phản ứng hóa học có ΔrH°₂₉₈ < 0 thuộc loại phản ứng nào?",
    options: ["A. Phản ứng thu nhiệt", "B. Phản ứng tỏa nhiệt", "C. Phản ứng thuận nghịch", "D. Phản ứng không tự xảy ra"],
    correct: 1,
    explanation: "ΔrH°₂₉₈ < 0 nghĩa là năng lượng hệ giảm (tỏa nhiệt ra môi trường)."
  },
  {
    id: "c5_q5",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Quá trình nung vôi CaCO₃(s) → CaO(s) + CO₂(g) cần cung cấp nhiệt liên tục. Đây là ví dụ của quá trình?",
    options: ["A. Tỏa nhiệt", "B. Thu nhiệt", "C. Tự phát", "D. Không biến thiên enthalpy"],
    correct: 1,
    explanation: "Cần cung cấp nhiệt liên tục từ bên ngoài => Phản ứng thu nhiệt (ΔrH > 0)."
  },
  {
    id: "c5_q6",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Công thức tính biến thiên enthalpy chuẩn ΔrH°₂₉₈ theo năng lượng liên kết E_b của các chất tham gia và sản phẩm ở thể khí là?",
    options: [
      "A. ΔrH°₂₉₈ = Σ E_b(đầu) - Σ E_b(sp)",
      "B. ΔrH°₂₉₈ = Σ E_b(sp) - Σ E_b(đầu)",
      "C. ΔrH°₂₉₈ = Σ E_b(đầu) + Σ E_b(sp)",
      "D. ΔrH°₂₉₈ = Σ E_b(sp) / Σ E_b(đầu)"
    ],
    correct: 0,
    explanation: "Theo năng lượng liên kết: ΔrH° = Tổng E_b(chất đầu) - Tổng E_b(sản phẩm)."
  },
  {
    id: "c5_q7",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho phản ứng: H₂(g) + Cl₂(g) → 2 HCl(g). Biết E_b(H-H) = 436 kJ/mol, E_b(Cl-Cl) = 243 kJ/mol và E_b(H-Cl) = 432 kJ/mol. Giá trị ΔrH°₂₉₈ của phản ứng là?",
    options: ["A. -185 kJ", "B. +185 kJ", "C. -247 kJ", "D. +247 kJ"],
    correct: 0,
    explanation: "ΔrH° = (436 + 243) - 2 × 432 = 679 - 864 = -185 kJ."
  },
  {
    id: "c5_q8",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho phản ứng đốt cháy Methane: CH₄(g) + 2 O₂(g) → CO₂(g) + 2 H₂O(l). Biết ΔfH°₂₉₈ của CH₄, CO₂, H₂O(l) lần lượt là -74,8 kJ/mol; -393,5 kJ/mol; -285,8 kJ/mol. Nhiệt tỏa ra khi đốt cháy hoàn toàn 1 mol CH₄ là?",
    options: ["A. 890,3 kJ", "B. 604,5 kJ", "C. 980,3 kJ", "D. 750,0 kJ"],
    correct: 0,
    explanation: "ΔrH° = [-393,5 + 2(-285,8)] - [-74,8 + 0] = -965,1 + 74,8 = -890,3 kJ => Tỏa ra 890,3 kJ."
  },
  {
    id: "c5_q9",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Đơn vị đo chuẩn của biến thiên enthalpy phản ứng ΔrH°₂₉₈ trong hệ SI là gì?",
    options: ["A. J hoặc kJ", "B. K (Kelvin)", "C. Bar", "D. M (mol/L)"],
    correct: 0,
    explanation: "Biến thiên enthalpy phản ứng có đơn vị là Joule (J) hoặc kilojoule (kJ)."
  },
  {
    id: "c5_q10",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Biến thiên enthalpy tạo thành chuẩn ΔfH°₂₉₈ của chất nào dưới đây có giá trị bằng 0?",
    options: ["A. H₂O(l)", "B. CO₂(g)", "C. N₂(g)", "D. NH₃(g)"],
    correct: 2,
    explanation: "Đơn chất bền vững ở điều kiện chuẩn (N₂ dạng khí) có ΔfH°₂₉₈ = 0."
  },
  {
    id: "c5_q11",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Công thức tính biến thiên enthalpy chuẩn ΔrH°₂₉₈ dựa vào nhiệt tạo thành chuẩn ΔfH°₂₉₈ là?",
    options: [
      "A. ΔrH°₂₉₈ = Σ ΔfH°₂₉₈(chất đầu) - Σ ΔfH°₂₉₈(sản phẩm)",
      "B. ΔrH°₂₉₈ = Σ ΔfH°₂₉₈(sản phẩm) - Σ ΔfH°₂₉₈(chất đầu)",
      "C. ΔrH°₂₉₈ = Σ ΔfH°₂₉₈(sản phẩm) + Σ ΔfH°₂₉₈(chất đầu)",
      "D. ΔrH°₂₉₈ = Σ ΔfH°₂₉₈(sản phẩm) / Σ ΔfH°₂₉₈(chất đầu)"
    ],
    correct: 1,
    explanation: "Theo nhiệt tạo thành: ΔrH° = Tổng ΔfH°(sản phẩm) - Tổng ΔfH°(chất đầu)."
  },
  {
    id: "c5_q12",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho phản ứng: 2 H₂(g) + O₂(g) → 2 H₂O(g). Biết E_b(H-H) = 436 kJ/mol, E_b(O=O) = 498 kJ/mol, E_b(O-H) = 464 kJ/mol. Tính ΔrH°₂₉₈ của phản ứng.",
    options: ["A. -486 kJ", "B. +486 kJ", "C. -243 kJ", "D. +243 kJ"],
    correct: 0,
    explanation: "ΔrH° = [2×436 + 498] - [4×464] = [872 + 498] - 1856 = 1370 - 1856 = -486 kJ."
  },

  // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (9 CÂU - 30%) ---
  {
    id: "c5_q13",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các khẳng định về nhiệt hóa học và điều kiện chuẩn:",
    subOptions: [
      { label: "a) Điều kiện chuẩn trong nhiệt động hóa học là áp suất 1 bar, nhiệt độ 25°C (298 K).", correct: true },
      { label: "b) Phản ứng tỏa nhiệt có ΔrH°₂₉₈ mang dấu âm (-).", correct: true },
      { label: "c) Phản ứng thu nhiệt làm môi trường xung quanh nóng lên.", correct: false },
      { label: "d) Phương trình nhiệt hóa học thể hiện cả trạng thái của các chất và biến thiên enthalpy kèm theo.", correct: true }
    ],
    explanation: "Phản ứng thu nhiệt hấp thụ nhiệt từ môi trường nên làm môi trường LẠNH ĐI."
  },
  {
    id: "c5_q14",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Về enthalpy tạo thành chuẩn ΔfH°₂₉₈:",
    subOptions: [
      { label: "a) ΔfH°₂₉₈ là lượng nhiệt kèm theo quá trình tạo thành 1 mol chất đó từ các đơn chất bền.", correct: true },
      { label: "b) ΔfH°₂₉₈ của O₂(g), N₂(g), C(kim cương) đều quy ước bằng 0.", correct: false },
      { label: "c) Hợp chất có ΔfH°₂₉₈ càng âm thì càng bền vững về mặt nhiệt động.", correct: true },
      { label: "d) Đơn vị của ΔfH°₂₉₈ thường là kJ/mol hoặc kcal/mol.", correct: true }
    ],
    explanation: "Carbon bền nhất ở dạng grafit (than chì), nên ΔfH° của C(grafit) = 0, còn C(kim cương) ≠ 0."
  },
  {
    id: "c5_q15",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho phương trình nhiệt hóa học: 2 H₂(g) + O₂(g) → 2 H₂O(l)  ΔrH°₂₉₈ = -571,6 kJ:",
    subOptions: [
      { label: "a) Phản ứng trên là phản ứng tỏa nhiệt.", correct: true },
      { label: "b) Khi tạo thành 2 mol H₂O(l) thì phản ứng tỏa ra lượng nhiệt là 571,6 kJ.", correct: true },
      { label: "c) Enthalpy tạo thành chuẩn ΔfH°₂₉₈ của H₂O(l) là -571,6 kJ/mol.", correct: false },
      { label: "d) Phản ứng phân hủy 1 mol H₂O(l) thành H₂ và O₂ có ΔrH°₂₉₈ = +285,8 kJ.", correct: true }
    ],
    explanation: "ΔfH° của H₂O(l) ứng với sự tạo thành 1 mol H₂O(l) => ΔfH° = -571,6 / 2 = -285,8 kJ/mol."
  },
  {
    id: "c5_q16",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét quá trình hòa tan vôi sống CaO vào nước: CaO(s) + H₂O(l) → Ca(OH)₂(aq):",
    subOptions: [
      { label: "a) Đây là quá trình tỏa nhiệt mạnh làm nước sôi lên.", correct: true },
      { label: "b) Giá trị ΔrH°₂₉₈ của quá trình này mang dấu dương (+).", correct: false },
      { label: "c) Năng lượng của sản phẩm Ca(OH)₂ thấp hơn năng lượng của chất tham gia ban đầu.", correct: true },
      { label: "d) Đốt than, đốt củi, sự hô hấp của cơ thể đều là các quá trình tỏa nhiệt.", correct: true }
    ],
    explanation: "Tỏa nhiệt thì ΔrH < 0 (dấu âm)."
  },
  {
    id: "c5_q17",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Về tính biến thiên enthalpy dựa theo nhiệt tạo thành chuẩn ΔfH°₂₉₈:",
    subOptions: [
      { label: "a) Công thức: ΔrH°₂₉₈ = Σ ΔfH°₂₉₈(sản phẩm) - Σ ΔfH°₂₉₈(chất tham gia).", correct: true },
      { label: "b) Các hệ số stokiometrie trong phương trình không ảnh hưởng đến giá trị ΔrH°₂₉₈.", correct: false },
      { label: "c) Nếu tổng ΔfH°(sản phẩm) < tổng ΔfH°(chất tham gia) thì phản ứng tỏa nhiệt.", correct: true },
      { label: "d) ΔrH°₂₉₈ tính theo nhiệt tạo thành áp dụng được cho mọi thể của chất.", correct: true }
    ],
    explanation: "Hệ số phương trình phải nhân vào nhiệt tạo thành tương ứng."
  },
  {
    id: "c5_q18",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho phản ứng tổng hợp Ammonia: N₂(g) + 3 H₂(g) → 2 NH₃(g). Biết E_b(N≡N) = 945 kJ/mol; E_b(H-H) = 436 kJ/mol và E_b(N-H) = 391 kJ/mol:",
    subOptions: [
      { label: "a) Năng lượng cần thiết để phá vỡ các liên kết trong chất tham gia là 2253 kJ.", correct: true },
      { label: "b) Năng lượng tỏa ra khi hình thành các liên kết mới trong 2 mol NH₃ là 2346 kJ.", correct: true },
      { label: "c) Biến thiên enthalpy của phản ứng là ΔrH°₂₉₈ = -93 kJ.", correct: true },
      { label: "d) Phản ứng trên là phản ứng thu nhiệt.", correct: false }
    ],
    explanation: "ΔrH° = -93 kJ < 0 => Phản ứng TỎA nhiệt."
  },
  {
    id: "c5_q19",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho các hiện tượng đời sống sau, xác định tính đúng/sai:",
    subOptions: [
      { label: "a) Hòa tan viên C sủi vào nước làm ly nước lạnh đi là quá trình thu nhiệt.", correct: true },
      { label: "b) Đốt cháy củi, gas nấu ăn là phản ứng tỏa nhiệt.", correct: true },
      { label: "c) Quá trình quang hợp của cây xanh là phản ứng thu nhiệt năng lượng mặt trời.", correct: true },
      { label: "d) Phản ứng nung đá vôi CaCO₃ là phản ứng tỏa nhiệt.", correct: false }
    ],
    explanation: "Nung vôi CaCO₃ cần hấp thụ nhiệt từ việc đốt than => phản ứng thu nhiệt."
  },
  {
    id: "c5_q20",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Nghiên cứu về mối liên hệ giữa năng lượng liên kết E_b và độ bền phân tử:",
    subOptions: [
      { label: "a) Năng lượng liên kết E_b đặc trưng cho độ bền của liên kết hoá học.", correct: true },
      { label: "b) Giá trị E_b càng lớn thì liên kết càng bền, phân tử càng khó bị phá vỡ.", correct: true },
      { label: "c) Phân tử N₂ (E_b = 945 kJ/mol) bền hơn nhiều so với Cl₂ (E_b = 243 kJ/mol).", correct: true },
      { label: "d) Quá trình phá vỡ liên kết là quá trình tỏa nhiệt ra môi trường.", correct: false }
    ],
    explanation: "Quá trình phá vỡ liên kết luôn CẦN HẤP THỤ năng lượng (thu nhiệt), hình thành liên kết mới mới tỏa nhiệt."
  },
  {
    id: "c5_q21",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho phản ứng đốt cháy Alcohol: C₂H₅OH(l) + 3 O₂(g) → 2 CO₂(g) + 3 H₂O(l) có ΔrH°₂₉₈ = -1367 kJ:",
    subOptions: [
      { label: "a) Đốt cháy 1 mol C₂H₅OH tỏa ra 1367 kJ nhiệt lượng.", correct: true },
      { label: "b) Đốt cháy 46 gam C₂H₅OH tỏa ra 1367 kJ.", correct: true },
      { label: "c) Khi đốt cháy 23 gam C₂H₅OH thì nhiệt lượng tỏa ra là 683,5 kJ.", correct: true },
      { label: "d) Biến thiên enthalpy của phản ứng nghịch: 2 CO₂(g) + 3 H₂O(l) → C₂H₅OH(l) + 3 O₂(g) là -1367 kJ.", correct: false }
    ],
    explanation: "Phản ứng nghịch có biến thiên enthalpy đổi dấu => ΔrH° (nghịch) = +1367 kJ."
  },

  // --- PHẦN 3: CÂU TRẢ LỜI NGẮN / TÍNH TOÁN (9 CÂU - 30%) ---
  {
    id: "c5_q22",
    type: "short",
    difficulty: "Nhận biết",
    q: "Nhiệt độ chuẩn theo thang Kelvin (K) tương ứng với 25°C trong nhiệt động học là bao nhiêu K?",
    correctAnswer: "298",
    acceptableAnswers: ["298", "298K", "298 K"],
    unit: "K",
    explanation: "T(K) = 25 + 273 = 298 K."
  },
  {
    id: "c5_q23",
    type: "short",
    difficulty: "Nhận biết",
    q: "Enthalpy tạo thành chuẩn ΔfH°₂₉₈ của đơn chất khí Oxygen O₂(g) bằng bao nhiêu kJ/mol?",
    correctAnswer: "0",
    acceptableAnswers: ["0", "0 kJ/mol"],
    unit: "kJ/mol",
    explanation: "Theo quy ước, ΔfH° của đơn chất bền O₂(g) bằng 0."
  },
  {
    id: "c5_q24",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Cho phương trình: C(s) + O₂(g) → CO₂(g)  ΔrH°₂₉₈ = -393,5 kJ. Khi đốt cháy hoàn toàn 0,5 mol Carbon thì nhiệt lượng tỏa ra là bao nhiêu kJ?",
    correctAnswer: "196,75",
    acceptableAnswers: ["196,75", "196.75"],
    unit: "kJ",
    explanation: "Nhiệt tỏa ra = 0,5 × 393,5 = 196,75 kJ."
  },
  {
    id: "c5_q25",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Biết nhiệt tạo thành chuẩn của CO₂(g) là -393,5 kJ/mol và H₂O(l) là -285,8 kJ/mol. Tính tổng ΔfH° của sản phẩm trong phản ứng: C₂H₄(g) + 3 O₂(g) → 2 CO₂(g) + 2 H₂O(l) (đơn vị: kJ).",
    correctAnswer: "-1358,6",
    acceptableAnswers: ["-1358,6", "-1358.6", "1358,6"],
    unit: "kJ",
    explanation: "Tổng = 2(-393,5) + 2(-285,8) = -787 + (-571,6) = -1358,6 kJ."
  },
  {
    id: "c5_q26",
    type: "short",
    difficulty: "Vận dụng",
    q: "Đốt cháy 12 gam củi khô (chứa 80% Carbon về khối lượng, còn lại là tạp chất không cháy). Biết đốt 1 mol C tỏa ra 393,5 kJ. Tính nhiệt lượng tỏa ra khi đốt hết 12g củi trên (kJ).",
    correctAnswer: "314,8",
    acceptableAnswers: ["314,8", "314.8"],
    unit: "kJ",
    explanation: "m_C = 12 × 0,8 = 9,6 g => n_C = 9,6 / 12 = 0,8 mol. Q_tỏa = 0,8 × 393,5 = 314,8 kJ."
  },
  {
    id: "c5_q27",
    type: "short",
    difficulty: "Vận dụng",
    q: "Tính biến thiên enthalpy chuẩn ΔrH°₂₉₈ (kJ) của phản ứng: N₂O₄(g) → 2 NO₂(g). Biết ΔfH°₂₉₈(N₂O₄) = +9,16 kJ/mol và ΔfH°₂₉₈(NO₂) = +33,2 kJ/mol.",
    correctAnswer: "57,24",
    acceptableAnswers: ["57,24", "57.24", "+57,24"],
    unit: "kJ",
    explanation: "ΔrH° = 2 × (+33,2) - (+9,16) = 66,4 - 9,16 = +57,24 kJ."
  },
  {
    id: "c5_q28",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Nếu biến thiên enthalpy của phản ứng N₂(g) + O₂(g) → 2 NO(g) là ΔrH°₂₉₈ = +180,6 kJ, thì nhiệt tạo thành chuẩn ΔfH°₂₉₈ của khí NO(g) là bao nhiêu kJ/mol?",
    correctAnswer: "90,3",
    acceptableAnswers: ["90,3", "90.3", "+90,3"],
    unit: "kJ/mol",
    explanation: "ΔfH°(NO) = ΔrH° / 2 = 180,6 / 2 = +90,3 kJ/mol."
  },
  {
    id: "c5_q29",
    type: "short",
    difficulty: "Vận dụng",
    q: "Đốt cháy hoàn toàn 1 mol Propane (C₃H₈) tỏa ra 2220 kJ nhiệt lượng. Để đun nóng nước từ 25°C lên 100°C cần 315 kJ năng lượng. Bỏ qua thất thoát nhiệt, cần đốt cháy bao nhiêu gam Propane (M = 44 g/mol) để thu được lượng nhiệt này? (Làm tròn 2 chữ số thập phân)",
    correctAnswer: "6,24",
    acceptableAnswers: ["6,24", "6.24"],
    unit: "gam",
    explanation: "n_C3H8 = 315 / 2220 ≈ 0,14189 mol => m = 0,14189 × 44 ≈ 6,24 g."
  },
  {
    id: "c5_q30",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho phản ứng: 2 Fe(s) + 3/2 O₂(g) → Fe₂O₃(s) có ΔrH°₂₉₈ = -825,5 kJ. Hỏi khi đốt cháy hoàn toàn 11,2 gam bột Fe (M = 56 g/mol) trong O₂ dư thì tỏa ra bao nhiêu kJ nhiệt lượng?",
    correctAnswer: "82,55",
    acceptableAnswers: ["82,55", "82.55"],
    unit: "kJ",
    explanation: "n_Fe = 11,2 / 56 = 0,2 mol. Theo PT: 2 mol Fe tỏa 825,5 kJ => 0,2 mol Fe tỏa: (0,2 / 2) × 825,5 = 82,55 kJ."
  }
];
