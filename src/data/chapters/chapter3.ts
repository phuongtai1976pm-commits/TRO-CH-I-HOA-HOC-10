import { Question } from "../questionTypes";

export const chapter3Questions: Question[] = [
  // --- PHẦN 1: TRẮC NGHIỆM 4 LỰA CHỌN (12 CÂU - 40%) ---
  {
    id: "c3_q1",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Liên kết ion là liên kết hóa học được hình thành do lực hút tĩnh điện giữa?",
    options: ["A. Các ion mang điện tích trái dấu", "B. Các ion mang điện tích cùng dấu", "C. Hai nguyên tử phi kim", "D. Các hạt proton và electron"],
    correct: 0,
    explanation: "Liên kết ion hình thành do lực hút tĩnh điện giữa cation (ion dương) và anion (ion âm)."
  },
  {
    id: "c3_q2",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Liên kết cộng hóa trị là liên kết được hình thành giữa hai nguyên tử bằng cách nào?",
    options: ["A. Nhường hẳn electron", "B. Nhận hẳn electron", "C. Dùng chung một hay nhiều cặp electron", "D. Hút tĩnh điện giữa các ion"],
    correct: 2,
    explanation: "Liên kết cộng hoá trị hình thành do góp chung các cặp electron giữa hai nguyên tử."
  },
  {
    id: "c3_q3",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Theo quy tắc octet, các nguyên tử có xu hướng liên kết với nhau để đạt cấu hình electron bền vững của khí hiếm gần nhất với bao nhiêu electron ở lớp ngoài cùng?",
    options: ["A. 2 (hoặc 8)", "B. 6", "C. 10", "D. 12"],
    correct: 0,
    explanation: "Quy tắc Octet (bát tử): Đạt 8 electron lớp ngoài cùng (hoặc 2e của Helium)."
  },
  {
    id: "c3_q4",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Liên kết trong phân tử Nitrogen (N₂) là loại liên kết nào?",
    options: ["A. Liên kết cộng hóa trị đơn", "B. Liên kết cộng hóa trị đôi", "C. Liên kết cộng hóa trị ba", "D. Liên kết ion"],
    correct: 2,
    explanation: "Mỗi nguyên tử N (nhóm VA) góp 3e tạo nên 1 liên kết ba bền vững (N≡N)."
  },
  {
    id: "c3_q5",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Dựa vào hiệu độ âm điện Δχ, liên kết cộng hóa trị phân cực có hiệu độ âm điện nằm trong khoảng nào?",
    options: ["A. 0 ≤ Δχ < 0,4", "B. 0,4 ≤ Δχ < 1,7", "C. Δχ ≥ 1,7", "D. Δχ = 0"],
    correct: 1,
    explanation: "0 ≤ Δχ < 0,4: CHT không phân cực; 0,4 ≤ Δχ < 1,7: CHT phân cực; Δχ ≥ 1,7: Liên kết ion."
  },
  {
    id: "c3_q6",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Vì sao nước (H₂O) có nhiệt độ sôi cao hơn nhiều so với H₂S mặc dù khối lượng phân tử H₂O nhỏ hơn?",
    options: ["A. Do phân tử H₂O có liên kết ion", "B. Do giữa các phân tử H₂O tạo được liên kết hydrogen liên phân tử", "C. Do H₂S là chất rắn", "D. Do H₂O có liên kết kim loại"],
    correct: 1,
    explanation: "Liên kết hydrogen liên phân tử giữa các phân tử H₂O làm tăng nhiệt độ sôi của nước."
  },
  {
    id: "c3_q7",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Biết độ âm điện của H là 2,20 và Cl là 3,16. Hiệu độ âm điện Δχ trong phân tử HCl là bao nhiêu và thuộc loại liên kết gì?",
    options: ["A. Δχ = 0,96 (Liên kết cộng hóa trị phân cực)", "B. Δχ = 0,96 (Liên kết ion)", "C. Δχ = 0,96 (Liên kết CHT không phân cực)", "D. Δχ = 5,36 (Liên kết ion)"],
    correct: 0,
    explanation: "Δχ = 3,16 - 2,20 = 0,96. Nằm trong khoảng [0,4 ; 1,7) => Liên kết cộng hóa trị phân cực."
  },
  {
    id: "c3_q8",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Phân tử Methane (CH₄) có bao nhiêu liên kết sigma (σ) và bao nhiêu cặp electron chưa tham gia liên kết ở nguyên tử trung tâm C?",
    options: ["A. 4 liên kết σ, 0 cặp e tự do", "B. 4 liên kết σ, 1 cặp e tự do", "C. 2 liên kết σ, 2 liên kết π", "D. 3 liên kết σ, 1 cặp e tự do"],
    correct: 0,
    explanation: "C ở trung tâm tạo 4 liên kết đơn C-H (4 liên kết σ) với 4 nguyên tử H, dùng hết 4e lớp ngoài cùng => 0 cặp e chưa liên kết."
  },
  {
    id: "c3_q9",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Liên kết cho - nhận (liên kết phối trí) là trường hợp đặc biệt của liên kết nào?",
    options: [
      "A. Liên kết ion",
      "B. Liên kết cộng hoá trị",
      "C. Liên kết hydrogen",
      "D. Tương tác van der Waals"
    ],
    correct: 1,
    explanation: "Liên kết cho - nhận là liên kết CHT mà cặp e dùng chung do 1 nguyên tử đóng góp."
  },
  {
    id: "c3_q10",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Trong phân tử Ethylene (C₂H₄: H₂C=CH₂), giữa 2 nguyên tử Carbon có?",
    options: [
      "A. 1 liên kết σ",
      "B. 1 liên kết π",
      "C. 1 liên kết σ và 1 liên kết π",
      "D. 2 liên kết π"
    ],
    correct: 2,
    explanation: "Liên kết đôi C=C bao gồm 1 liên kết sigma (σ) bền và 1 liên kết pi (π) kém bền hơn."
  },
  {
    id: "c3_q11",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Chất nào sau đây KHÔNG thể tạo liên kết hydrogen liên phân tử?",
    options: ["A. H₂O", "B. HF", "C. C₂H₅OH", "D. CH₄"],
    correct: 3,
    explanation: "CH₄ không chứa nguyên tử H liên kết với các nguyên tử có độ âm điện lớn (F, O, N) nên không tạo liên kết hydrogen."
  },
  {
    id: "c3_q12",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho độ âm điện: K (0,82), Na (0,93), Mg (1,31), Cl (3,16), O (3,44). Hợp chất nào dưới đây có liên kết mang tính ion cao nhất?",
    options: ["A. MgCl₂", "B. NaCl", "C. KCl", "D. K₂O"],
    correct: 3,
    explanation: "K₂O có hiệu độ âm điện Δχ = 3,44 - 0,82 = 2,62 là lớn nhất => tính ion cao nhất."
  },

  // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (9 CÂU - 30%) ---
  {
    id: "c3_q13",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các khẳng định về đặc điểm của hợp chất ion:",
    subOptions: [
      { label: "a) Hợp chất ion thường có nhiệt độ nóng chảy và nhiệt độ sôi cao.", correct: true },
      { label: "b) Tinh thể NaCl ở trạng thái rắn dẫn điện rất tốt.", correct: false },
      { label: "c) Các hợp chất ion dễ tan trong nước tạo thành dung dịch dẫn điện.", correct: true },
      { label: "d) Lực hút tĩnh điện giữa các ion trái dấu có tính hướng và tính bão hòa.", correct: false }
    ],
    explanation: "Lực hút tĩnh điện ion KHÔNG có tính hướng và không có tính bão hoá. Ở trạng thái rắn các ion không di chuyển tự do nên không dẫn điện."
  },
  {
    id: "c3_q14",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Về liên kết hydrogen và tương tác van der Waals:",
    subOptions: [
      { label: "a) Liên kết hydrogen mạnh hơn liên kết cộng hóa trị.", correct: false },
      { label: "b) Liên kết hydrogen hình thành khi H liên kết với các nguyên tử có độ âm điện lớn như F, O, N.", correct: true },
      { label: "c) Tương tác van der Waals là lực tương tác yếu giữa các phân tử.", correct: true },
      { label: "d) Tương tác van der Waals làm giảm nhiệt độ nóng chảy của các chất.", correct: false }
    ],
    explanation: "Liên kết hydrogen yếu hơn liên kết CHT nhưng làm tăng nhiệt độ sôi/nóng chảy."
  },
  {
    id: "c3_q15",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét sự hình thành liên kết trong phân tử Sodium chloride (NaCl):",
    subOptions: [
      { label: "a) Nguyên tử Na (Z=11) nhường 1e tạo thành cation Na⁺.", correct: true },
      { label: "b) Nguyên tử Cl (Z=17) nhận 1e tạo thành anion Cl⁻.", correct: true },
      { label: "c) Cation Na⁺ và anion Cl⁻ hút nhau bằng lực hút tĩnh điện tạo tinh thể NaCl.", correct: true },
      { label: "d) Liên kết trong NaCl là liên kết cộng hóa trị không phân cực.", correct: false }
    ],
    explanation: "Liên kết trong NaCl là liên kết ion điển hình."
  },
  {
    id: "c3_q16",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho các chất: Cl₂, HCl, H₂O, NaCl. Nhận xét đúng sai:",
    subOptions: [
      { label: "a) Phân tử Cl₂ chứa liên kết cộng hóa trị không phân cực.", correct: true },
      { label: "b) Phân tử HCl và H₂O chứa liên kết cộng hóa trị phân cực.", correct: true },
      { label: "c) Phân tử NaCl chứa liên kết cộng hóa trị phân cực.", correct: false },
      { label: "d) Cặp electron dùng chung trong phân tử HCl bị lệch về phía nguyên tử Cl.", correct: true }
    ],
    explanation: "NaCl có liên kết ion vì Δχ = 3,16 - 0,93 = 2,23 ≥ 1,7."
  },
  {
    id: "c3_q17",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét phân tử Ammonia (NH₃):",
    subOptions: [
      { label: "a) Nguyên tử N ở trung tâm liên kết với 3 nguyên tử H bằng 3 liên kết đơn.", correct: true },
      { label: "b) Trong phân tử NH₃, nguyên tử N còn 1 cặp electron chưa tham gia liên kết.", correct: true },
      { label: "c) Cặp electron liên kết bị lệch về phía nguyên tử H.", correct: false },
      { label: "d) Giữa các phân tử NH₃ có khả năng tạo liên kết hydrogen liên phân tử.", correct: true }
    ],
    explanation: "Độ âm điện N (3,04) > H (2,2) nên cặp electron bị lệch về N."
  },
  {
    id: "c3_q18",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho phân tử Carbon dioxide (CO₂):",
    subOptions: [
      { label: "a) Công thức cấu tạo của CO₂ là O=C=O.", correct: true },
      { label: "b) Phân tử CO₂ chứa 2 liên kết đôi, gồm 2 liên kết σ và 2 liên kết π.", correct: true },
      { label: "c) Liên kết C=O trong CO₂ là liên kết cộng hóa trị phân cực.", correct: true },
      { label: "d) Do chứa liên kết phân cực nên phân tử CO₂ là phân tử phân cực.", correct: false }
    ],
    explanation: "CO₂ có cấu trúc thẳng (180°), hai triệt tiêu momen lưỡng cực nên phân tử CO₂ KHÔNG phân cực."
  },
  {
    id: "c3_q19",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho các phát biểu về sự xen phủ các orbital nguyên tử để tạo thành liên kết cộng hoá trị:",
    subOptions: [
      { label: "a) Sự xen phủ trục tạo nên liên kết sigma (σ).", correct: true },
      { label: "b) Sự xen phủ bên tạo nên liên kết pi (π).", correct: true },
      { label: "c) Liên kết σ bền vững hơn liên kết π.", correct: true },
      { label: "d) Hai orbital s luôn xen phủ bên để tạo liên kết pi.", correct: false }
    ],
    explanation: "Hai orbital s có dạng hình cầu nên chỉ xen phủ trục tạo liên kết sigma (σ)."
  },
  {
    id: "c3_q20",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Nghiên cứu về tương tác van der Waals giữa các phân tử:",
    subOptions: [
      { label: "a) Tương tác van der Waals làm tăng nhiệt độ sôi và nhiệt độ nóng chảy của các chất.", correct: true },
      { label: "b) Khi kích thước phân tử tăng lên, tương tác van der Waals thường tăng lên.", correct: true },
      { label: "c) Khí hiếm He có nhiệt độ sôi cao hơn Ar do tương tác van der Waals.", correct: false },
      { label: "d) Tương tác van der Waals là tương tác tĩnh điện giữa các lưỡng cực tạm thời hoặc cảm ứng.", correct: true }
    ],
    explanation: "Ar có khối lượng và kích thước lớn hơn He nên tương tác van der Waals mạnh hơn => nhiệt độ sôi Ar cao hơn He."
  },
  {
    id: "c3_q21",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho cation Ammonium (NH₄⁺):",
    subOptions: [
      { label: "a) Trong ion NH₄⁺ có 3 liên kết cộng hoá trị thông thường và 1 liên kết cho - nhận.", correct: true },
      { label: "b) Nguyên tử Nitrogen đóng vai trò là nguyên tử cho cặp electron.", correct: true },
      { label: "c) Ion H⁺ đóng vai trò là nguyên tử nhận cặp electron do có orbital trống.", correct: true },
      { label: "d) Bốn liên kết N-H trong NH₄⁺ có độ dài và năng lượng liên kết khác nhau.", correct: false }
    ],
    explanation: "Sau khi hình thành, 4 liên kết N-H trong NH₄⁺ trở nên hoàn toàn đồng nhất về độ dài và năng lượng."
  },

  // --- PHẦN 3: CÂU TRẢ LỜI NGẮN / TÍNH TOÁN (9 CÂU - 30%) ---
  {
    id: "c3_q22",
    type: "short",
    difficulty: "Nhận biết",
    q: "Số cặp electron dùng chung trong phân tử Hydrogen (H₂) là bao nhiêu?",
    correctAnswer: "1",
    acceptableAnswers: ["1", "1 cặp"],
    unit: "cặp",
    explanation: "H-H có 1 cặp e dùng chung."
  },
  {
    id: "c3_q23",
    type: "short",
    difficulty: "Nhận biết",
    q: "Trong phân tử Oxygen (O₂), giữa hai nguyên tử O có bao nhiêu liên kết cộng hóa trị?",
    correctAnswer: "2",
    acceptableAnswers: ["2", "2 liên kết", "liên kết đôi"],
    unit: "liên kết",
    explanation: "O=O có 1 liên kết đôi (gồm 2 liên kết: 1σ và 1π)."
  },
  {
    id: "c3_q24",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Có bao nhiêu cặp electron tham gia liên kết trong phân tử Water (H₂O)?",
    correctAnswer: "2",
    acceptableAnswers: ["2", "2 cặp"],
    unit: "cặp",
    explanation: "H-O-H có 2 liên kết đơn O-H => 2 cặp e liên kết."
  },
  {
    id: "c3_q25",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Nguyên tử Nitrogen (N, Z=7) có bao nhiêu electron valence (hoá trị) tham gia tạo liên kết?",
    correctAnswer: "5",
    acceptableAnswers: ["5"],
    unit: "electron",
    explanation: "N có cấu hình 1s² 2s² 2p³ => Lớp ngoài cùng có 5e."
  },
  {
    id: "c3_q26",
    type: "short",
    difficulty: "Vận dụng",
    q: "Trong phân tử Acetylene (C₂H₂: H-C≡C-H), tổng số liên kết sigma (σ) là bao nhiêu?",
    correctAnswer: "3",
    acceptableAnswers: ["3"],
    unit: "liên kết",
    explanation: "2 liên kết C-H (2σ) + 1 liên kết ba C≡C (1σ và 2π) => Tổng có 3 liên kết σ."
  },
  {
    id: "c3_q27",
    type: "short",
    difficulty: "Vận dụng",
    q: "Tổng số cặp electron CHƯA tham gia liên kết (electron tự do) trên nguyên tử Oxygen trung tâm trong phân tử H₂O là bao nhiêu?",
    correctAnswer: "2",
    acceptableAnswers: ["2", "2 cặp"],
    unit: "cặp",
    explanation: "O (nhóm VIA) có 6e ngoài cùng. Đã bỏ 2e tạo 2 liên kết H-O, còn lại 4e = 2 cặp e chưa liên kết."
  },
  {
    id: "c3_q28",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Trong phân tử Nitrogen (N₂: N≡N), tổng số liên kết pi (π) là bao nhiêu?",
    correctAnswer: "2",
    acceptableAnswers: ["2"],
    unit: "liên kết",
    explanation: "Liên kết ba N≡N gồm 1 liên kết sigma (σ) và 2 liên kết pi (π)."
  },
  {
    id: "c3_q29",
    type: "short",
    difficulty: "Vận dụng",
    q: "Trong phân tử Formaldehyde (HCHO), tổng số liên kết sigma (σ) giữa các nguyên tử là bao nhiêu?",
    correctAnswer: "3",
    acceptableAnswers: ["3"],
    unit: "liên kết",
    explanation: "Cấu tạo HCHO: 2 liên kết đơn C-H (2σ) + 1 liên kết đôi C=O (1σ, 1π) => Tổng có 3 liên kết σ."
  },
  {
    id: "c3_q30",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho năng lượng liên kết E_b(H-H) = 436 kJ/mol, E_b(Cl-Cl) = 243 kJ/mol và E_b(H-Cl) = 432 kJ/mol. Tính biến thiên enthalpy chuẩn Δ_r H°₂₉₈ của phản ứng: H₂(g) + Cl₂(g) → 2HCl(g) (kJ).",
    correctAnswer: "-185",
    acceptableAnswers: ["-185", "-185 kJ"],
    unit: "kJ",
    explanation: "Δ_r H°₂₉₈ = E_b(H-H) + E_b(Cl-Cl) - 2×E_b(H-Cl) = 436 + 243 - 2(432) = 679 - 864 = -185 kJ."
  }
];
