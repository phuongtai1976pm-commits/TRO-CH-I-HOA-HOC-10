import { Question } from "../questionTypes";

export const chapter7Questions: Question[] = [
  // --- PHẦN 1: TRẮC NGHIỆM 4 LỰA CHỌN (12 CÂU - 40%) ---
  {
    id: "c7_q1",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Các nguyên tố nhóm Halogen nằm ở vị trí nào trong bảng tuần hoàn?",
    options: ["A. Nhóm IA", "B. Nhóm VA", "C. Nhóm VIIA", "D. Nhóm VIIIA"],
    correct: 2,
    explanation: "Halogen gồm F, Cl, Br, I, At nằm ở nhóm VIIA."
  },
  {
    id: "c7_q2",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Trạng thái tự nhiên và màu sắc của Chlorine (Cl₂) ở điều kiện thường là?",
    options: ["A. Chất khí màu vàng lục, rất độc", "B. Chất lỏng màu nâu đỏ", "C. Chất rắn màu tím đen", "D. Chất khí không màu"],
    correct: 0,
    explanation: "Khí Chlorine (Cl₂) màu vàng lục, mùi hắc và rất độc."
  },
  {
    id: "c7_q3",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Halogen nào ở thể lỏng ở nhiệt độ phòng?",
    options: ["A. Fluorine (F₂)", "B. Chlorine (Cl₂)", "C. Bromine (Br₂)", "D. Iodine (I₂)"],
    correct: 2,
    explanation: "Bromine (Br₂) là chất lỏng duy nhất trong các đơn chất phi kim ở nhiệt độ phòng."
  },
  {
    id: "c7_q4",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Nguyên nhân chính làm cho Fluorine (F) chỉ có số oxi hóa -1 trong hợp chất mà không có số oxi hóa dương là do?",
    options: [
      "A. F có độ âm điện lớn nhất và không có phân lớp d trống",
      "B. F ở thể khí",
      "C. Phân tử F₂ rất bền",
      "D. Nguyên tử F chứa ít proton nhất"
    ],
    correct: 0,
    explanation: "Fluorine có độ âm điện lớn nhất (3,98) và thuộc chu kì 2 (không có phân lớp d) nên chỉ nhận 1e thành số oxi hoá -1."
  },
  {
    id: "c7_q5",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Để nhận biết hồ tinh bột, thuốc thử đặc trưng thường được dùng là?",
    options: ["A. Nước Chlorine", "B. Dung dịch Bromine", "C. Dung dịch Iodine (I₂)", "D. Dung dịch AgNO₃"],
    correct: 2,
    explanation: "Iodine (I₂) tạo với hồ tinh bột một hợp chất màu xanh tím đặc trưng."
  },
  {
    id: "c7_q6",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Axit nào sau đây có khả năng ăn mòn thủy tinh (SiO₂) nên không được lưu trữ trong chai lọ bằng thủy tinh?",
    options: ["A. Hydrochloric acid (HCl)", "B. Hydrofluoric acid (HF)", "C. Hydrobromic acid (HBr)", "D. Hydroiodic acid (HI)"],
    correct: 1,
    explanation: "HF phản ứng với thủy tinh: SiO₂ + 4 HF → SiF₄ + 2 H₂O."
  },
  {
    id: "c7_q7",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Sắp xếp tính acid của các dung dịch hydrohalic acid theo chiều TĂNG DẦN là?",
    options: ["A. HF < HCl < HBr < HI", "B. HI < HBr < HCl < HF", "C. HCl < HBr < HI < HF", "D. HF < HI < HBr < HCl"],
    correct: 0,
    explanation: "Tính acid tăng dần từ HF (acid yếu) < HCl < HBr < HI (acid rất mạnh) do độ dài liên kết H-X tăng làm liên kết dễ đứt gãy."
  },
  {
    id: "c7_q8",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho 0,05 mol Cl₂ tác dụng hoàn toàn với kim loại Copper (Cu) dư đun nóng. Khối lượng muối CuCl₂ (Cu=64, Cl=35,5) thu được là?",
    options: ["A. 6,75 gam", "B. 13,5 gam", "C. 3,375 gam", "D. 27,0 gam"],
    correct: 0,
    explanation: "Cu + Cl₂ → CuCl₂. n_CuCl2 = n_Cl2 = 0,05 mol => m = 0,05 × 135 = 6,75 gam."
  },
  {
    id: "c7_q9",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Bán kính nguyên tử của các phần tử biến đổi như thế nào đi từ F đến I trong nhóm VIIA?",
    options: [
      "A. Giảm dần",
      "B. Tăng dần",
      "C. Không đổi",
      "D. Giảm rồi tăng"
    ],
    correct: 1,
    explanation: "Đi từ F đến I, số lớp electron tăng dần nên bán kính nguyên tử tăng dần."
  },
  {
    id: "c7_q10",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Khí Chlorine khô KHÔNG có tính tẩy màu nhưng khi gặp ẩm lại có tính tẩy màu vì lý do gì?",
    options: [
      "A. Do Cl₂ phản ứng với H₂O tạo ra HClO có tính oxi hoá mạnh",
      "B. Do Cl₂ tan trong nước thành dung dịch HCl",
      "C. Do nước giải phóng O₂",
      "D. Do Cl₂ tác dụng với CO₂ trong không khí"
    ],
    correct: 0,
    explanation: "Cl₂ + H₂O ⇌ HCl + HClO. Acid HClO có tính oxi hoá rất mạnh nên có tác dụng tẩy màu."
  },
  {
    id: "c7_q11",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Đổ dung dịch AgNO₃ vào dung dịch muối nào sau đây sẽ KHÔNG xuất hiện kết tủa?",
    options: ["A. NaF", "B. NaCl", "C. NaBr", "D. NaI"],
    correct: 0,
    explanation: "AgF là muối tan trong nước nên không xuất hiện kết tủa. AgCl, AgBr, AgI đều là các muối không tan."
  },
  {
    id: "c7_q12",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Sục hoàn toàn 0,1 mol khí Cl₂ vào dung dịch NaI dư thu được bao nhiêu gam Iodine (I₂ = 254)?",
    options: ["A. 12,7 gam", "B. 25,4 gam", "C. 50,8 gam", "D. 6,35 gam"],
    correct: 1,
    explanation: "Cl₂ + 2 NaI → 2 NaCl + I₂. n_I2 = n_Cl2 = 0,1 mol => m_I2 = 0,1 × 254 = 25,4 gam."
  },

  // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (9 CÂU - 30%) ---
  {
    id: "c7_q13",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các phát biểu về tính chất vật lý của các Halogen (F₂, Cl₂, Br₂, I₂):",
    subOptions: [
      { label: "a) Đi từ F₂ đến I₂, nhiệt độ sôi và nhiệt độ nóng chảy tăng dần.", correct: true },
      { label: "b) Thể của các chất thay đổi từ Khí (F₂, Cl₂) → Lỏng (Br₂) → Rắn (I₂).", correct: true },
      { label: "c) Iodine (I₂) có hiện tượng thăng hoa khi đun nóng nhẹ.", correct: true },
      { label: "d) Màu sắc của các Halogen nhạt dần đi từ F₂ đến I₂.", correct: false }
    ],
    explanation: "Màu sắc ĐẬM DẦN từ F₂ (vàng nhạt) → Cl₂ (vàng lục) → Br₂ (nâu đỏ) → I₂ (tím đen)."
  },
  {
    id: "c7_q14",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Về cấu tạo nguyên tử và tính chất hóa học chung của Halogen:",
    subOptions: [
      { label: "a) Lớp ngoài cùng của nguyên tử Halogen có 7 electron (ns² np⁵).", correct: true },
      { label: "b) Tính chất hóa học đặc trưng của đơn chất Halogen là tính oxi hóa mạnh.", correct: true },
      { label: "c) Đi từ F đến I, tính oxi hóa của các Halogen tăng dần.", correct: false },
      { label: "d) Đơn chất Halogen đứng trước đẩy được Halogen đứng sau ra khỏi dung dịch muối (trừ F₂).", correct: true }
    ],
    explanation: "Tính oxi hóa GIẢM DẦN từ F₂ > Cl₂ > Br₂ > I₂."
  },
  {
    id: "c7_q15",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho các phản ứng liên quan đến Chlorine và hợp chất:",
    subOptions: [
      { label: "a) Sục Cl₂ vào nước xảy ra phản ứng tự oxi hóa - tự khử tạo HCl và HClO.", correct: true },
      { label: "b) Tác dụng tẩy màu, sát trùng của nước Chlorine do acid HClO có tính oxi hóa mạnh.", correct: true },
      { label: "c) Nước Javel là dung dịch chứa hỗn hợp muối NaCl và NaClO.", correct: true },
      { label: "d) Cho Cl₂ tác dụng với dung dịch NaOH ở 100°C thu được NaCl và NaClO.", correct: false }
    ],
    explanation: "Ở nhiệt độ cao (100°C): 3 Cl₂ + 6 NaOH → 5 NaCl + NaClO₃ + 3 H₂O (tạo NaClO₃ chứ không phải NaClO)."
  },
  {
    id: "c7_q16",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Nhận biết các ion Halide (F⁻, Cl⁻, Br⁻, I⁻) bằng dung dịch Silver nitrate (AgNO₃):",
    subOptions: [
      { label: "a) Ion F⁻ không tạo kết tủa với AgNO₃ (AgF tan hoàn toàn).", correct: true },
      { label: "b) Ion Cl⁻ tạo kết tủa trắng AgCl.", correct: true },
      { label: "c) Ion Br⁻ tạo kết tủa vàng nhạt AgBr.", correct: true },
      { label: "d) Ion I⁻ tạo kết tủa đen AgI.", correct: false }
    ],
    explanation: "AgI là kết tủa màu VÀNG ĐẬM (không phải màu đen)."
  },
  {
    id: "c7_q17",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét phản ứng của các Halogen với Hydrogen:",
    subOptions: [
      { label: "a) F₂ phản ứng với H₂ ngay trong bóng tối và ở nhiệt độ rất thấp (-252°C) gây nổ mạnh.", correct: true },
      { label: "b) Cl₂ phản ứng với H₂ khi có ánh sáng hoặc đun nóng.", correct: true },
      { label: "c) I₂ phản ứng với H₂ là phản ứng thuận nghịch và cần đun nóng.", correct: true },
      { label: "d) Khả năng phản ứng với H₂ tăng dần từ F₂ đến I₂.", correct: false }
    ],
    explanation: "Khả năng phản ứng với H₂ GIẢM DẦN từ F₂ > Cl₂ > Br₂ > I₂."
  },
  {
    id: "c7_q18",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho 5,85 gam NaCl (M = 58,5) tác dụng hoàn toàn với dung dịch AgNO₃ dư:",
    subOptions: [
      { label: "a) Số mol NaCl tham gia phản ứng là 0,1 mol.", correct: true },
      { label: "b) Phản ứng thuộc loại phản ứng trao đổi ion.", correct: true },
      { label: "c) Khối lượng kết tủa trắng AgCl (M = 143,5) thu được là 14,35 gam.", correct: true },
      { label: "d) Nếu thay NaCl bằng NaF thì khối lượng kết tủa thu được vẫn không đổi.", correct: false }
    ],
    explanation: "NaF + AgNO₃ không phản ứng (AgF tan trong nước => không có kết tủa)."
  },
  {
    id: "c7_q19",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Cho các nhận xét về vai trò và ứng dụng thực tiễn của Halogen:",
    subOptions: [
      { label: "a) Chlorine được sử dụng rộng rãi để khử trùng nước sinh hoạt và bể bơi.", correct: true },
      { label: "b) Iodine là vi chất quan trọng cần thiết cho tuyến giáp phòng chống bệnh bướu cổ.", correct: true },
      { label: "c) Fluorine dạng hợp chất fluoride giúp phòng ngừa sâu răng (trong kem đánh răng).", correct: true },
      { label: "d) Bromine là chất độc không có bất kỳ ứng dụng nào trong dược phẩm và đời sống.", correct: false }
    ],
    explanation: "Bromine được sử dụng trong sản xuất thuốc bảo vệ thực vật, chất chống cháy, dược phẩm (thuốc an thần...)."
  },
  {
    id: "c7_q20",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Về tính khử của các ion Halide (Cl⁻, Br⁻, I⁻) khi tác dụng với H₂SO₄ đặc:",
    subOptions: [
      { label: "a) Ion Cl⁻ có tính khử yếu nhất, không khử được H₂SO₄ đặc.", correct: true },
      { label: "b) Ion Br⁻ khử H₂SO₄ đặc thành SO₂ và tạo đơn chất Br₂ màu nâu đỏ.", correct: true },
      { label: "c) Ion I⁻ có tính khử mạnh nhất, khử H₂SO₄ đặc thành H₂S và tạo I₂.", correct: true },
      { label: "d) Tính khử của các ion halide giảm dần theo thứ tự: Cl⁻ > Br⁻ > I⁻.", correct: false }
    ],
    explanation: "Tính khử TĂNG DẦN theo thứ tự: F⁻ < Cl⁻ < Br⁻ < I⁻."
  },
  {
    id: "c7_q21",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Điện phân dung dịch NaCl có màng ngăn xốp trong công nghiệp:",
    subOptions: [
      { label: "a) Sản phẩm ở cực dương (anode) thu được là khí Cl₂.", correct: true },
      { label: "b) Sản phẩm ở cực âm (cathode) thu được là khí H₂ và dung dịch NaOH.", correct: true },
      { label: "c) Màng ngăn xốp có tác dụng ngăn Cl₂ phản ứng với NaOH vừa sinh ra.", correct: true },
      { label: "d) Nếu không dùng màng ngăn xốp thì sản phẩm thu được là acid HCl.", correct: false }
    ],
    explanation: "Nếu không có màng ngăn, Cl₂ phản ứng trực tiếp với NaOH sinh ra nước Javel (NaCl + NaClO + H₂O)."
  },

  // --- PHẦN 3: CÂU TRẢ LỜI NGẮN / TÍNH TOÁN (9 CÂU - 30%) ---
  {
    id: "c7_q22",
    type: "short",
    difficulty: "Nhận biết",
    q: "Nguyên tử Chlorine (Z = 17) có bao nhiêu electron ở lớp ngoài cùng?",
    correctAnswer: "7",
    acceptableAnswers: ["7"],
    unit: "electron",
    explanation: "Cấu hình e của Cl: [Ne] 3s² 3p⁵ => 7 electron lớp ngoài cùng."
  },
  {
    id: "c7_q23",
    type: "short",
    difficulty: "Nhận biết",
    q: "Số oxi hóa của Chlorine trong hợp chất Potassium chlorate (KClO₃) là bao nhiêu?",
    correctAnswer: "+5",
    acceptableAnswers: ["+5", "5"],
    unit: "",
    explanation: "+1 + Cl + 3(-2) = 0 => Cl = +5."
  },
  {
    id: "c7_q24",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Cho 0,1 mol khí Cl₂ tác dụng với dung dịch NaBr dư. Số mol Br₂ giải phóng ra là bao nhiêu?",
    correctAnswer: "0,1",
    acceptableAnswers: ["0,1", "0.1"],
    unit: "mol",
    explanation: "Cl₂ + 2 NaBr → 2 NaCl + Br₂. n_Br2 = n_Cl2 = 0,1 mol."
  },
  {
    id: "c7_q25",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Cho 10 gam dung dịch HF 20% tác dụng vừa đủ với thủy tinh chứa SiO₂. Tính khối lượng HF nguyên chất đã phản ứng (gam).",
    correctAnswer: "2",
    acceptableAnswers: ["2", "2g", "2 gam"],
    unit: "gam",
    explanation: "m_HF = 10 × 20% = 2 gam."
  },
  {
    id: "c7_q26",
    type: "short",
    difficulty: "Vận dụng",
    q: "Hòa tan hoàn toàn 10,0 gam hỗn hợp gồm CaCO₃ và NaCl vào dung dịch HCl dư. Sau phản ứng thu được 1,2395 lít khí CO₂ (đkc ở 25°C, 1 bar là 0,05 mol). Tính % khối lượng của CaCO₃ trong hỗn hợp ban đầu.",
    correctAnswer: "50",
    acceptableAnswers: ["50", "50%"],
    unit: "%",
    explanation: "CaCO₃ + 2HCl → CaCl₂ + CO₂ + H₂O. n_CaCO3 = n_CO2 = 0,05 mol => m_CaCO3 = 0,05 × 100 = 5,0 g. %CaCO₃ = (5,0 / 10,0) × 100% = 50%."
  },
  {
    id: "c7_q27",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho 8,7 gam MnO₂ (M = 87) tác dụng hoàn toàn với dung dịch HCl đặc, đun nóng. Toàn bộ lượng khí Cl₂ sinh ra cho hấp thụ hết vào dung dịch NaOH dư ở nhiệt độ phòng. Tính khối lượng muối NaClO (M = 74,5) thu được (gam).",
    correctAnswer: "7,45",
    acceptableAnswers: ["7,45", "7.45"],
    unit: "gam",
    explanation: "MnO₂ + 4 HCl → MnCl₂ + Cl₂ + 2 H₂O. n_MnO2 = 0,1 mol => n_Cl2 = 0,1 mol. Cl₂ + 2 NaOH → NaCl + NaClO + H₂O. n_NaClO = 0,1 mol => m_NaClO = 0,1 × 74,5 = 7,45 gam."
  },
  {
    id: "c7_q28",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Cần dùng bao nhiêu gam KMnO₄ (M = 158) tác dụng với HCl đặc dư để thu được 0,25 mol khí Cl₂?",
    correctAnswer: "15,8",
    acceptableAnswers: ["15,8", "15.8"],
    unit: "gam",
    explanation: "2 KMnO₄ + 16 HCl → 2 KCl + 2 MnCl₂ + 5 Cl₂ + 8 H₂O. n_KMnO4 = (2/5) × n_Cl2 = 0,1 mol => m = 0,1 × 158 = 15,8 gam."
  },
  {
    id: "c7_q29",
    type: "short",
    difficulty: "Vận dụng",
    q: "Hoà tan 11,9 gam hỗn hợp gồm NaCl và NaBr vào nước, sau đó cho tác dụng với dung dịch AgNO₃ dư thu được 20,2 gam kết tủa. Khối lượng của NaCl trong hỗn hợp ban đầu là bao nhiêu gam? (Cho Na=23, Cl=35,5, Br=80, Ag=108)",
    correctAnswer: "5,85",
    acceptableAnswers: ["5,85", "5.85"],
    unit: "gam",
    explanation: "Hệ PT: 58,5x + 103y = 11,9 và 143,5x + 188y = 20,2 => x = 0,1 (NaCl) và y = 0,05 (NaBr) => m_NaCl = 0,1 × 58,5 = 5,85 g."
  },
  {
    id: "c7_q30",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho 2,479 lít khí Cl₂ (đkc 25°C, 1 bar - tương ứng 0,1 mol) phản ứng hết với kim loại Aluminium (Al = 27) thu được m gam muối AlCl₃ (M = 133,5). Giá trị của m là bao nhiêu gam?",
    correctAnswer: "8,90",
    acceptableAnswers: ["8,9", "8,90", "8.9", "8.90"],
    unit: "gam",
    explanation: "2 Al + 3 Cl₂ → 2 AlCl₃. n_AlCl3 = (2/3) × 0,1 = 0,06667 mol => m = (0,2 / 3) × 133,5 = 8,90 gam."
  }
];
