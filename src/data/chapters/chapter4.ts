import { Question } from "../questionTypes";

export const chapter4Questions: Question[] = [
  // --- PHẦN 1: TRẮC NGHIỆM 4 LỰA CHỌN (12 CÂU - 40%) ---
  {
    id: "c4_q1",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Trong phản ứng oxi hóa - khử, chất khử là chất thực hiện quá trình nào?",
    options: ["A. Nhận electron", "B. Nhường electron", "C. Nhận proton", "D. Giảm số oxi hóa"],
    correct: 1,
    explanation: "Chất khử: Nhường electron (số oxi hóa tăng sau phản ứng)."
  },
  {
    id: "c4_q2",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Quá trình nhường electron được gọi là quá trình gì?",
    options: ["A. Quá trình khử", "B. Quá trình oxi hóa", "C. Quá trình trung hòa", "D. Quá trình thủy phân"],
    correct: 1,
    explanation: "Sự (quá trình) oxi hóa là sự nhường electron."
  },
  {
    id: "c4_q3",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Số oxi hóa của nguyên tố Oxygen trong hầu hết các hợp chất (trừ OF₂, peroxide) là bao nhiêu?",
    options: ["A. -1", "B. -2", "C. +1", "D. +2"],
    correct: 1,
    explanation: "Số oxi hóa quy ước của O trong các hợp chất thông thường là -2."
  },
  {
    id: "c4_q4",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Trong phản ứng: Fe + CuSO₄ → FeSO₄ + Cu. Vai trò của Fe là gì?",
    options: ["A. Chất oxi hóa", "B. Chất khử", "C. Môi trường", "D. Chất xúc tác"],
    correct: 1,
    explanation: "Fe từ 0 tăng lên +2 (Fe²⁺) nên Fe đóng vai trò là chất khử."
  },
  {
    id: "c4_q5",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Số oxi hóa của Sulfur (S) trong phân tử H₂SO₄ là bao nhiêu?",
    options: ["A. +2", "B. +4", "C. +6", "D. -2"],
    correct: 2,
    explanation: "2(+1) + x + 4(-2) = 0 => x = +6."
  },
  {
    id: "c4_q6",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Cân bằng phản ứng oxi hóa - khử theo phương pháp thăng bằng electron dựa trên nguyên tắc cơ bản nào?",
    options: ["A. Bảo toàn khối lượng", "B. Tổng số e nhường = Tổng số e nhận", "C. Bảo toàn thể tích", "D. Bảo toàn năng lượng"],
    correct: 1,
    explanation: "Nguyên tắc thăng bằng electron: Tổng số electron chất khử nhường = Tổng số electron chất oxi hóa nhận."
  },
  {
    id: "c4_q7",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho phản ứng: a Al + b HNO₃ (loãng) → c Al(NO₃)₃ + d NO + e H₂O. Tổng hệ số cân bằng (a + b + c + d + e) nguyên tối giản là?",
    options: ["A. 9", "B. 10", "C. 13", "D. 18"],
    correct: 0,
    explanation: "Phương trình: Al + 4HNO₃ → Al(NO₃)₃ + NO + 2H₂O. Tổng hệ số = 1 + 4 + 1 + 1 + 2 = 9."
  },
  {
    id: "c4_q8",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Hòa tan hoàn toàn 5,6 gam Fe (M = 56) vào dung dịch HCl dư. Thể tích khí H₂ thu được ở điều kiện chuẩn (25°C, 1 bar) là?",
    options: ["A. 2,24 lít", "B. 2,479 lít", "C. 4,958 lít", "D. 1,12 lít"],
    correct: 1,
    explanation: "n_Fe = 5,6 / 56 = 0,1 mol. Fe + 2HCl → FeCl₂ + H₂. n_H2 = 0,1 mol => V = 0,1 × 24,79 = 2,479 lít."
  },
  {
    id: "c4_q9",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Dấu hiệu dễ nhận biết nhất để khẳng định một phản ứng là phản ứng oxi hoá - khử là dựa vào sự thay đổi đại lượng nào?",
    options: [
      "A. Màu sắc dung dịch",
      "B. Số oxi hoá của một hay nhiều nguyên tố",
      "C. Trạng thái các chất sản phẩm",
      "D. Nhiệt độ của môi trường"
    ],
    correct: 1,
    explanation: "Phản ứng oxi hoá - khử là phản ứng hoá học trong đó có sự thay đổi số oxi hoá của ít nhất một nguyên tố."
  },
  {
    id: "c4_q10",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Trong phản ứng: 2 H₂S + SO₂ → 3 S + 2 H₂O. Phát biểu nào sau đây đúng?",
    options: [
      "A. SO₂ là chất khử, H₂S là chất oxi hoá",
      "B. H₂S vừa là chất khử vừa là chất oxi hoá",
      "C. H₂S là chất khử, SO₂ là chất oxi hoá",
      "D. SO₂ chỉ đóng vai trò làm môi trường"
    ],
    correct: 2,
    explanation: "S trong H₂S (-2) tăng lên S (0) => H₂S là chất khử; S trong SO₂ (+4) giảm xuống S (0) => SO₂ là chất oxi hoá."
  },
  {
    id: "c4_q11",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Số oxi hoá của Carbon (C) trong ion CO₃²⁻ là bao nhiêu?",
    options: ["A. +2", "B. +4", "C. -4", "D. 0"],
    correct: 1,
    explanation: "C + 3(-2) = -2 => C = +4."
  },
  {
    id: "c4_q12",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Hòa tan hoàn toàn m gam Cu (M = 64) vào dung dịch HNO₃ đặc, nóng thu được 4,958 lít khí NO₂ (sản phẩm khử duy nhất ở đkc 25°C, 1 bar). Giá trị của m là?",
    options: ["A. 3,2 gam", "B. 6,4 gam", "C. 12,8 gam", "D. 1,6 gam"],
    correct: 1,
    explanation: "n_NO2 = 4,958 / 24,79 = 0,2 mol. Cu → Cu²⁺ + 2e ; N⁵⁺ + 1e → N⁴⁺ (NO₂). Bảo toàn e: 2 n_Cu = n_NO2 = 0,2 mol => n_Cu = 0,1 mol => m = 0,1 × 64 = 6,4 g."
  },

  // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (9 CÂU - 30%) ---
  {
    id: "c4_q13",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các quy tắc xác định số oxi hóa của các nguyên tố:",
    subOptions: [
      { label: "a) Số oxi hóa của nguyên tố trong các đơn chất luôn bằng 0.", correct: true },
      { label: "b) Trong hợp chất, số oxi hóa của Hydrogen luôn bằng +1 (trừ hydride kim loại).", correct: true },
      { label: "c) Trong các ion đơn nguyên tử, số oxi hóa bằng điện tích của ion đó.", correct: true },
      { label: "d) Tổng số oxi hóa của các nguyên tử trong một phân tử hợp chất bằng +1.", correct: false }
    ],
    explanation: "Tổng số oxi hóa các nguyên tử trong một phân tử hợp chất luôn bằng 0."
  },
  {
    id: "c4_q14",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Về vai trò các chất trong phản ứng oxi hóa - khử:",
    subOptions: [
      { label: "a) Chất oxi hóa là chất nhận electron, số oxi hóa giảm.", correct: true },
      { label: "b) Chất khử là chất nhường electron, số oxi hóa tăng.", correct: true },
      { label: "c) Quá trình nhường electron gọi là quá trình khử.", correct: false },
      { label: "d) Phản ứng thế giữa kim loại và acid luôn là phản ứng oxi hóa - khử.", correct: true }
    ],
    explanation: "Quá trình NHƯỜNG electron là quá trình OXI HÓA."
  },
  {
    id: "c4_q15",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét phản ứng: 2 FeCl₂ + Cl₂ → 2 FeCl₃:",
    subOptions: [
      { label: "a) Fe trong FeCl₂ có số oxi hóa là +2.", correct: true },
      { label: "b) Khí Cl₂ đóng vai trò là chất oxi hóa.", correct: true },
      { label: "c) FeCl₂ đóng vai trò là chất khử.", correct: true },
      { label: "d) Số oxi hóa của Chlorine trong phản ứng không thay đổi.", correct: false }
    ],
    explanation: "Cl₂ (0) giảm xuống -1 trong FeCl₃."
  },
  {
    id: "c4_q16",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho phản ứng nhiệt nhôm: 2 Al + Fe₂O₃ → Al₂O₃ + 2 Fe:",
    subOptions: [
      { label: "a) Aluminium (Al) bị oxi hóa thành Al³⁺.", correct: true },
      { label: "b) Fe₂O₃ đóng vai trò là chất khử.", correct: false },
      { label: "c) Phản ứng này tỏa nhiệt rất mạnh được ứng dụng để hàn đường ray.", correct: true },
      { label: "d) Tổng số electron mà 2 mol Al đã nhường là 6 mol electron.", correct: true }
    ],
    explanation: "Fe₂O₃ nhận electron nên là chất OXI HÓA. Al nhường 3e => 2 mol Al nhường 6 mol e."
  },
  {
    id: "c4_q17",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xác định số oxi hóa của Nitrogen (N) trong các chất/ion:",
    subOptions: [
      { label: "a) Trong khí NH₃, số oxi hóa của N là -3.", correct: true },
      { label: "b) Trong khí NO₂, số oxi hóa của N là +4.", correct: true },
      { label: "c) Trong ion NH₄⁺, số oxi hóa của N là +3.", correct: false },
      { label: "d) Trong ion NO₃⁻, số oxi hóa của N là +5.", correct: true }
    ],
    explanation: "Trong NH₄⁺: N + 4(+1) = +1 => N = -3."
  },
  {
    id: "c4_q18",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho 0,1 mol Zn tác dụng hoàn toàn với dung dịch H₂SO₄ đặc, nóng thu được V lít khí SO₂ (sản phẩm khử duy nhất ở đkc 25°C, 1 bar):",
    subOptions: [
      { label: "a) Zn đóng vai trò là chất khử, bị oxi hóa thành Zn²⁺.", correct: true },
      { label: "b) Số mol electron mà 0,1 mol Zn nhường là 0,2 mol.", correct: true },
      { label: "c) Số mol khí SO₂ thu được là 0,1 mol.", correct: true },
      { label: "d) Thể tích khí SO₂ thu được V = 2,24 lít.", correct: false }
    ],
    explanation: "Ở đkc (25°C, 1 bar), V = 0,1 × 24,79 = 2,479 lít (không phải 2,24 lít đktc cũ)."
  },
  {
    id: "c4_q19",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho phản ứng đốt cháy methane: CH₄ + 2 O₂ → CO₂ + 2 H₂O:",
    subOptions: [
      { label: "a) Methane (CH₄) là chất khử.", correct: true },
      { label: "b) Oxygen (O₂) là chất oxi hoá.", correct: true },
      { label: "c) Số oxi hoá của Carbon thay đổi từ -4 tăng lên +4.", correct: true },
      { label: "d) Số oxi hoá của Hydrogen giảm từ +1 xuống 0.", correct: false }
    ],
    explanation: "Số oxi hoá của H trong CH₄ và H₂O đều giữ nguyên là +1."
  },
  {
    id: "c4_q20",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét ứng dụng thực tiễn của phản ứng oxi hoá - khử:",
    subOptions: [
      { label: "a) Phản ứng cháy của xăng dầu cung cấp năng lượng cho động cơ.", correct: true },
      { label: "b) Sự gỉ sét của sắt trong không khí ẩm là hiện tượng oxi hoá khử có hại.", correct: true },
      { label: "c) Sản xuất gang thép, nhôm và các hoá chất cơ bản dựa trên phản ứng oxi hoá - khử.", correct: true },
      { label: "d) Phản ứng trung hoà giữa acid và base luôn là phản ứng oxi hoá - khử.", correct: false }
    ],
    explanation: "Phản ứng trung hoá (H⁺ + OH⁻ → H₂O) KHÔNG có sự thay đổi số oxi hoá của các nguyên tố."
  },
  {
    id: "c4_q21",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho phản ứng: Cl₂ + 2 KOH → KCl + KClO + H₂O (ở nhiệt độ phòng):",
    subOptions: [
      { label: "a) Chlorine (Cl₂) vừa là chất oxi hoá vừa là chất khử (tự oxi hoá - khử).", correct: true },
      { label: "b) KOH đóng vai trò là chất khử.", correct: false },
      { label: "c) Số oxi hoá của Cl vừa giảm từ 0 xuống -1 vừa tăng từ 0 lên +1.", correct: true },
      { label: "d) Dung dịch thu được gọi là nước Javel có tính tẩy màu.", correct: true }
    ],
    explanation: "KOH đóng vai trò làm môi trường phản ứng, không thay đổi số oxi hoá."
  },

  // --- PHẦN 3: CÂU TRẢ LỜI NGẮN / TÍNH TOÁN (9 CÂU - 30%) ---
  {
    id: "c4_q22",
    type: "short",
    difficulty: "Nhận biết",
    q: "Số oxi hóa của Manganese (Mn) trong hợp chất KMnO₄ là bao nhiêu?",
    correctAnswer: "+7",
    acceptableAnswers: ["+7", "7"],
    unit: "",
    explanation: "+1 + Mn + 4(-2) = 0 => Mn = +7."
  },
  {
    id: "c4_q23",
    type: "short",
    difficulty: "Nhận biết",
    q: "Số oxi hóa của Chromium (Cr) trong ion dichromate Cr₂O₇²⁻ là bao nhiêu?",
    correctAnswer: "+6",
    acceptableAnswers: ["+6", "6"],
    unit: "",
    explanation: "2Cr + 7(-2) = -2 => 2Cr = +12 => Cr = +6."
  },
  {
    id: "c4_q24",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Trong phản ứng: Cu + 2 AgNO₃ → Cu(NO₃)₂ + 2 Ag. 1 mol Cu nhường bao nhiêu mol electron?",
    correctAnswer: "2",
    acceptableAnswers: ["2", "2 mol"],
    unit: "mol",
    explanation: "Cu → Cu²⁺ + 2e => 1 mol Cu nhường 2 mol e."
  },
  {
    id: "c4_q25",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Cân bằng phương trình: 3 Mg + 8 HNO₃ → 3 Mg(NO₃)₂ + 2 NO + 4 H₂O. Hệ số cân bằng của HNO₃ là bao nhiêu?",
    correctAnswer: "8",
    acceptableAnswers: ["8"],
    unit: "",
    explanation: "3 Mg + 8 HNO₃ → 3 Mg(NO₃)₂ + 2 NO + 4 H₂O."
  },
  {
    id: "c4_q26",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho 2,7 gam bột Aluminium (Al = 27) phản ứng vừa đủ với V lít khí Cl₂ (đkc 25°C, 1 bar) tạo muối AlCl₃. Giá trị của V là bao nhiêu lít? (Làm tròn đến 2 chữ số thập phân)",
    correctAnswer: "3,72",
    acceptableAnswers: ["3,72", "3.72"],
    unit: "lít",
    explanation: "n_Al = 0,1 mol. 2 Al + 3 Cl₂ → 2 AlCl₃. n_Cl2 = 0,15 mol => V = 0,15 × 24,79 = 3,7185 ≈ 3,72 lít."
  },
  {
    id: "c4_q27",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cần bao nhiêu mL dung dịch KMnO₄ 0,1M để phản ứng vừa đủ với 100 mL dung dịch FeSO₄ 0,5M trong môi trường H₂SO₄ loãng?",
    correctAnswer: "100",
    acceptableAnswers: ["100", "100 mL"],
    unit: "mL",
    explanation: "10 FeSO₄ + 2 KMnO₄ + 8 H₂SO₄ → 5 Fe₂(SO₄)₃ + 2 MnSO₄ + K₂SO₄ + 8 H₂O. n_Fe2+ = 0,05 mol => n_KMnO4 = 0,01 mol => V = 0,01 / 0,1 = 0,1 L = 100 mL."
  },
  {
    id: "c4_q28",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Số oxi hoá của Nitrogen (N) trong hợp chất Ammonium nitrate NH₄NO₃ lần lượt từ trái sang phải là?",
    correctAnswer: "-3 và +5",
    acceptableAnswers: ["-3 và +5", "-3,+5", "-3, +5"],
    unit: "",
    explanation: "Trong NH₄⁺ số oxi hoá của N là -3; trong NO₃⁻ số oxi hoá của N là +5."
  },
  {
    id: "c4_q29",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho 6,5 gam Zinc (Zn = 65) tác dụng với dung dịch HCl dư. Thể tích khí H₂ thu được ở điều kiện chuẩn (25°C, 1 bar) là bao nhiêu lít? (Làm tròn đến 2 chữ số thập phân)",
    correctAnswer: "2,48",
    acceptableAnswers: ["2,48", "2.48", "2,479"],
    unit: "lít",
    explanation: "n_Zn = 6,5 / 65 = 0,1 mol. Zn + 2HCl → ZnCl₂ + H₂. V = 0,1 × 24,79 = 2,479 ≈ 2,48 lít."
  },
  {
    id: "c4_q30",
    type: "short",
    difficulty: "Vận dụng",
    q: "Hoà tan hoàn toàn hỗn hợp gồm 0,1 mol Fe và 0,1 mol Mg vào dung dịch HNO₃ đặc nóng dư thu được V lít khí NO₂ (đkc 25°C, 1 bar - sản phẩm khử duy nhất). Giá trị của V là bao nhiêu lít?",
    correctAnswer: "12,40",
    acceptableAnswers: ["12,4", "12,40", "12.4", "12.395"],
    unit: "lít",
    explanation: "n_e nhường = 0,1 × 3 (Fe³⁺) + 0,1 × 2 (Mg²⁺) = 0,5 mol e. n_NO2 = n_e nhận = 0,5 mol => V = 0,5 × 24,79 = 12,395 ≈ 12,40 lít."
  }
];
