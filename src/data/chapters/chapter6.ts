import { Question } from "../questionTypes";

export const chapter6Questions: Question[] = [
  // --- PHẦN 1: TRẮC NGHIỆM 4 LỰA CHỌN (12 CÂU - 40%) ---
  {
    id: "c6_q1",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Tốc độ phản ứng hóa học là đại lượng đặc trưng cho sự biến thiên đại lượng nào sau đây trong một đơn vị thời gian?",
    options: ["A. Nồng độ của chất phản ứng hoặc sản phẩm", "B. Khối lượng toàn bộ hệ phản ứng", "C. Thể tích bình chứa", "D. Nhiệt độ của môi trường"],
    correct: 0,
    explanation: "Tốc độ phản ứng đo biến thiên nồng độ (mol/L) của chất phản ứng hoặc sản phẩm theo thời gian."
  },
  {
    id: "c6_q2",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Yếu tố nào sau đây KHÔNG làm ảnh hưởng đến tốc độ của phản ứng hóa học?",
    options: ["A. Nồng độ", "B. Nhiệt độ", "C. Diện tích bề mặt tiếp xúc", "D. Màu sắc của bình phản ứng"],
    correct: 3,
    explanation: "Màu sắc bình chứa không ảnh hưởng đến tốc độ phản ứng."
  },
  {
    id: "c6_q3",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Chất xúc tác làm tăng tốc độ phản ứng có đặc điểm gì sau phản ứng?",
    options: ["A. Bị biến đổi thành chất khác", "B. Không bị tiêu hao và giữ nguyên về khối lượng, tính chất hóa học", "C. Tăng khối lượng gấp đôi", "D. Bị phân hủy thành khí"],
    correct: 1,
    explanation: "Chất xúc tác làm tăng tốc độ phản ứng nhưng không bị tiêu hao sau phản ứng."
  },
  {
    id: "c6_q4",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Việc chẻ nhỏ củi trước khi đun bếp là vận dụng ảnh hưởng của yếu tố nào đến tốc độ phản ứng cháy?",
    options: ["A. Tăng nồng độ chất khí", "B. Tăng diện tích bề mặt tiếp xúc", "C. Thêm chất xúc tác", "D. Tăng áp suất hệ"],
    correct: 1,
    explanation: "Chẻ nhỏ củi làm tăng diện tích bề mặt tiếp xúc giữa gỗ và oxygen giúp củi cháy nhanh và cháy hết."
  },
  {
    id: "c6_q5",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Bảo quản thực phẩm trong ngăn mát tủ lạnh giúp thực phẩm tươi lâu là ứng dụng của việc giảm yếu tố nào?",
    options: ["A. Áp suất", "B. Nhiệt độ", "C. Nồng độ oxygen", "D. Diện tích tiếp xúc"],
    correct: 1,
    explanation: "Giảm nhiệt độ làm giảm tốc độ các phản ứng phân hủy thực phẩm và vi khuẩn."
  },
  {
    id: "c6_q6",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Bản chất tác dụng của chất xúc tác trong việc làm tăng tốc độ phản ứng là gì?",
    options: [
      "A. Làm tăng năng lượng các phân tử",
      "B. Làm giảm năng lượng hoạt hóa (E_a) của phản ứng",
      "C. Làm tăng nhiệt độ phản ứng",
      "D. Làm tăng áp suất hệ"
    ],
    correct: 1,
    explanation: "Chất xúc tác làm giảm năng lượng hoạt hóa E_a, giúp phản ứng diễn ra dễ dàng hơn."
  },
  {
    id: "c6_q7",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho phản ứng đơn giản: A + 2 B → C. Biểu thức tốc độ tức thời của phản ứng theo định luật tác dụng khối lượng là?",
    options: ["A. v = k.[A].[B]", "B. v = k.[A].[B]²", "C. v = k.[A]².[B]", "D. v = k.[C] / ([A].[B]²)"],
    correct: 1,
    explanation: "Theo định luật tác dụng khối lượng cho phản ứng đơn giản: v = k.[A]¹.[B]²."
  },
  {
    id: "c6_q8",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Hệ số nhiệt độ Van 't Hoff γ = 2. Nếu tăng nhiệt độ của phản ứng từ 30°C lên 60°C thì tốc độ phản ứng tăng lên bao nhiêu lần?",
    options: ["A. 3 lần", "B. 6 lần", "C. 8 lần", "D. 9 lần"],
    correct: 2,
    explanation: "v₂/v₁ = γ^((T₂ - T₁)/10) = 2^((60 - 30)/10) = 2³ = 8 lần."
  },
  {
    id: "c6_q9",
    type: "mcq",
    difficulty: "Nhận biết",
    q: "Đại lượng nào đặc trưng cho sự biến thiên nồng độ chất phản ứng hoặc sản phẩm trong một khoảng thời gian xác định?",
    options: [
      "A. Tốc độ trung bình của phản ứng",
      "B. Hằng số cân bằng",
      "C. Biến thiên enthalpy",
      "D. Năng lượng hoạt hoá"
    ],
    correct: 0,
    explanation: "Tốc độ trung bình v_tb = ΔC / Δt đặc trưng cho sự biến thiên nồng độ trong khoảng thời gian Δt."
  },
  {
    id: "c6_q10",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Để làm sạch các vết bẩn dầu mỡ dính trên quần áo, dùng nước nóng sương sẽ hiệu quả hơn nước lạnh vì yếu tố nào?",
    options: ["A. Tăng diện tích tiếp xúc", "B. Tăng nhiệt độ làm tăng tốc độ phản ứng tẩy rửa", "C. Thêm chất xúc tác", "D. Giảm áp suất bề mặt"],
    correct: 1,
    explanation: "Tăng nhiệt độ nước làm tăng tốc độ phản ứng hoà tan và hoá học của chất tẩy rửa."
  },
  {
    id: "c6_q11",
    type: "mcq",
    difficulty: "Thông hiểu",
    q: "Ảnh hưởng của áp suất đến tốc độ phản ứng chỉ có hiệu quả rõ rệt đối với những phản ứng có chất tham gia ở thể nào?",
    options: ["A. Thể rắn", "B. Thể lỏng", "C. Thể khí", "D. Thể dung dịch"],
    correct: 2,
    explanation: "Khi nén áp suất, thể tích khí giảm làm nồng độ các chất khí tăng lên, dẫn đến tốc độ phản ứng tăng."
  },
  {
    id: "c6_q12",
    type: "mcq",
    difficulty: "Vận dụng",
    q: "Cho phản ứng đơn giản: CO(g) + Cl₂(g) → COCl₂(g). Tốc độ phản ứng sẽ thay đổi như thế nào nếu tăng nồng độ CO lên 2 lần và nồng độ Cl₂ lên 3 lần?",
    options: ["A. Tăng 5 lần", "B. Tăng 6 lần", "C. Tăng 8 lần", "D. Tăng 9 lần"],
    correct: 1,
    explanation: "v = k.[CO].[Cl₂]. Khi [CO] ×2 và [Cl₂] ×3 thì v' = k.(2[CO]).(3[Cl₂]) = 6 v (tăng 6 lần)."
  },

  // --- PHẦN 2: TRẮC NGHIỆM ĐÚNG / SAI (9 CÂU - 30%) ---
  {
    id: "c6_q13",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Cho các yếu tố ảnh hưởng đến tốc độ phản ứng hóa học:",
    subOptions: [
      { label: "a) Khi tăng nồng độ chất tham gia, tốc độ phản ứng thông thường sẽ tăng.", correct: true },
      { label: "b) Tăng áp suất chỉ có tác dụng đối với các phản ứng có chất khí tham gia.", correct: true },
      { label: "c) Diện tích bề mặt tiếp xúc ảnh hưởng đến tốc độ phản ứng của tất cả các chất khí.", correct: false },
      { label: "d) Tăng nhiệt độ làm tăng động năng phân tử dẫn đến số va chạm hiệu quả tăng.", correct: true }
    ],
    explanation: "Diện tích bề mặt tiếp xúc áp dụng cho chất RẮN (khi nghiền nhỏ/đập nhỏ chất rắn)."
  },
  {
    id: "c6_q14",
    type: "tf",
    difficulty: "Nhận biết",
    q: "Về chất xúc tác và năng lượng hoạt hóa E_a:",
    subOptions: [
      { label: "a) Năng lượng hoạt hóa E_a là năng lượng tối thiểu các hạt cần có để va chạm tạo thành phản ứng.", correct: true },
      { label: "b) Chất xúc tác sinh học trong cơ thể sống được gọi là enzyme.", correct: true },
      { label: "c) Chất ức chế là chất làm giảm tốc độ phản ứng.", correct: true },
      { label: "d) Chất xúc tác làm thay đổi cân bằng và bản chất các sản phẩm tạo thành.", correct: false }
    ],
    explanation: "Chất xúc tác chỉ làm tăng tốc độ phản ứng, KHÔNG làm thay đổi bản chất sản phẩm hay chuyển dịch cân bằng."
  },
  {
    id: "c6_q15",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Thực hiện thí nghiệm cho viên Zinc (Zn) vào dung dịch HCl trong các điều kiện khác nhau. Đánh giá tốc độ thoát khí H₂:",
    subOptions: [
      { label: "a) Dùng bột Zn phản ứng nhanh hơn dùng viên Zn cùng khối lượng.", correct: true },
      { label: "b) Dùng dung dịch HCl 2M phản ứng nhanh hơn dung dịch HCl 0,5M.", correct: true },
      { label: "c) Đun nóng ống nghiệm làm khí H₂ thoát ra chậm hơn.", correct: false },
      { label: "d) Thêm vài giọt dung dịch CuSO₄ vào ống nghiệm sẽ làm khí H₂ thoát ra nhanh hơn rất nhiều.", correct: true }
    ],
    explanation: "Đun nóng làm tăng nhiệt độ => phản ứng diễn ra nhanh hơn (khí H₂ thoát ra nhanh hơn)."
  },
  {
    id: "c6_q16",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Giải thích hiện tượng thực tế bằng lý thuyết tốc độ phản ứng:",
    subOptions: [
      { label: "a) Thức ăn nấu trong nồi áp suất chín nhanh hơn vì nhiệt độ sôi của nước tăng khi áp suất tăng.", correct: true },
      { label: "b) Quạt gió vào lò than đang cháy làm than cháy mạnh hơn do tăng nồng độ O₂.", correct: true },
      { label: "c) Ủ trái cây chín bằng khí ethylene là ứng dụng tác dụng của chất xúc tác.", correct: true },
      { label: "d) Sử dụng chất bảo quản thực phẩm là làm tăng tốc độ phản ứng ôi thiu.", correct: false }
    ],
    explanation: "Chất bảo quản là chất ức chế (làm GIẢM tốc độ phản ứng ôi thiu)."
  },
  {
    id: "c6_q17",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét phản ứng tổng hợp SO₃: 2 SO₂(g) + O₂(g) ⇌ 2 SO₃(g) (có V₂O₅ xúc tác):",
    subOptions: [
      { label: "a) Tăng nồng độ khí SO₂ hoặc O₂ sẽ làm tăng tốc độ phản ứng thuận.", correct: true },
      { label: "b) Nén hệ phản ứng làm tăng áp suất chung sẽ làm tăng tốc độ phản ứng.", correct: true },
      { label: "c) Chất xúc tác V₂O₅ bị tiêu hao hoàn toàn sau khi phản ứng kết thúc.", correct: false },
      { label: "d) Hạ nhiệt độ hệ xuống rất thấp sẽ làm tăng tốc độ phản ứng đạt tối đa.", correct: false }
    ],
    explanation: "Hạ nhiệt độ làm giảm động năng phân tử => tốc độ phản ứng giảm."
  },
  {
    id: "c6_q18",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Cho phản ứng đơn giản: N₂(g) + 3 H₂(g) → 2 NH₃(g):",
    subOptions: [
      { label: "a) Biểu thức tốc độ phản ứng là v = k.[N₂].[H₂]³.", correct: true },
      { label: "b) Nếu tăng nồng độ N₂ lên 2 lần (giữ nguyên H₂) thì tốc độ v tăng 2 lần.", correct: true },
      { label: "c) Nếu tăng nồng độ H₂ lên 2 lần (giữ nguyên N₂) thì tốc độ v tăng 8 lần.", correct: true },
      { label: "d) Nếu tăng áp suất chung của hệ lên 2 lần thì tốc độ v tăng 8 lần.", correct: false }
    ],
    explanation: "Tăng áp suất chung 2 lần => nồng độ N₂ tăng 2 lần, H₂ tăng 2 lần => v_mới = k.(2[N₂]).(2[H₂])³ = 2 × 8 v = 16v (tăng 16 lần)."
  },
  {
    id: "c6_q19",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Xét vai trò của chất xúc tác enzyme trong các quá trình sinh hoá:",
    subOptions: [
      { label: "a) Enzyme là chất xúc tác sinh học có bản chất chủ yếu là protein.", correct: true },
      { label: "b) Enzyme hoạt động tốt nhất ở nhiệt độ và pH thích hợp của cơ thể.", correct: true },
      { label: "c) Enzyme amylase trong nước bọt giúp thủy phân tinh bột thành đường.", correct: true },
      { label: "d) Đun sôi làm cho enzyme hoạt động mạnh gấp nhiều lần.", correct: false }
    ],
    explanation: "Đun sôi ở nhiệt độ cao làm biến tính protein của enzyme làm enzyme mất hoạt tính."
  },
  {
    id: "c6_q20",
    type: "tf",
    difficulty: "Thông hiểu",
    q: "Đánh giá các biện pháp tăng tốc độ phản ứng trong công nghiệp hoá chất:",
    subOptions: [
      { label: "a) Nghiền nhỏ quặng pyrite sắt trước khi nung giúp tăng diện tích bề mặt tiếp xúc.", correct: true },
      { label: "b) Sử dụng chất xúc tác platinum trong tổng hợp HNO₃.", correct: true },
      { label: "c) Tăng nồng độ chất phản ứng giúp tăng tần số va chạm hiệu quả giữa các hạt.", correct: true },
      { label: "d) Hạ nhiệt độ lò phản ứng luôn giúp tăng tốc độ sản xuất.", correct: false }
    ],
    explanation: "Hạ nhiệt độ làm giảm tốc độ phản ứng, làm cho quá trình sản xuất bị chậm đi."
  },
  {
    id: "c6_q21",
    type: "tf",
    difficulty: "Vận dụng",
    q: "Xét phản ứng phân hủy Hydrogen peroxide: 2 H₂O₂ (aq) → 2 H₂O (l) + O₂ (g):",
    subOptions: [
      { label: "a) Thêm một ít bột MnO₂ vào dung dịch H₂O₂ làm bọt khí O₂ thoát ra mãnh liệt hơn.", correct: true },
      { label: "b) MnO₂ đóng vai trò là chất xúc tác cho phản ứng phân hủy.", correct: true },
      { label: "c) Khối lượng MnO₂ thu lại sau phản ứng không thay đổi so với ban đầu.", correct: true },
      { label: "d) Thêm MnO₂ làm thay đổi tổng thể tích khí O₂ tối đa sinh ra.", correct: false }
    ],
    explanation: "Chất xúc tác chỉ làm phản ứng diễn ra NHANH HƠN (đạt lượng khí O₂ tối đa nhanh hơn), chứ không làm thay đổi tổng lượng O₂ sinh ra."
  },

  // --- PHẦN 3: CÂU TRẢ LỜI NGẮN / TÍNH TOÁN (9 CÂU - 30%) ---
  {
    id: "c6_q22",
    type: "short",
    difficulty: "Nhận biết",
    q: "Đơn vị thông dụng của tốc độ trung bình của phản ứng hóa học tính theo nồng độ mol (C_M) và thời gian giây (s) là gì?",
    correctAnswer: "mol/(L.s)",
    acceptableAnswers: ["mol/(L.s)", "mol/L.s", "M/s", "mol.L-1.s-1"],
    unit: "",
    explanation: "Đơn vị tốc độ phản ứng = (mol/L) / s = mol/(L.s) hoặc M/s."
  },
  {
    id: "c6_q23",
    type: "short",
    difficulty: "Nhận biết",
    q: "Kí hiệu hằng số tốc độ phản ứng trong biểu thức định luật tác dụng khối lượng là chữ cái nào?",
    correctAnswer: "k",
    acceptableAnswers: ["k"],
    unit: "",
    explanation: "v = k.[A]^a.[B]^b => hằng số k."
  },
  {
    id: "c6_q24",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Nồng độ của chất A giảm từ 1,0 M xuống 0,4 M sau 20 giây phản ứng. Tính tốc độ trung bình của phản ứng theo chất A trong khoảng thời gian đó (M/s).",
    correctAnswer: "0,03",
    acceptableAnswers: ["0,03", "0.03"],
    unit: "M/s",
    explanation: "v_tb = - (0,4 - 1,0) / 20 = 0,6 / 20 = 0,03 M/s."
  },
  {
    id: "c6_q25",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Một phản ứng ở 20°C có tốc độ v. Biết hệ số Van 't Hoff γ = 3. Tính tốc độ phản ứng ở 40°C so với v (tăng bao nhiêu lần?).",
    correctAnswer: "9",
    acceptableAnswers: ["9", "9 lần"],
    unit: "lần",
    explanation: "v_40 / v_20 = 3^((40 - 20)/10) = 3² = 9 lần."
  },
  {
    id: "c6_q26",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho phản ứng đơn giản: 2 NO(g) + O₂(g) → 2 NO₂(g). Nếu tăng nồng độ NO lên 3 lần và giữ nguyên nồng độ O₂ thì tốc độ phản ứng tăng lên bao nhiêu lần?",
    correctAnswer: "9",
    acceptableAnswers: ["9", "9 lần"],
    unit: "lần",
    explanation: "v = k.[NO]².[O₂]. Khi [NO] tăng 3 => v' = k.(3[NO])².[O₂] = 9 v (tăng 9 lần)."
  },
  {
    id: "c6_q27",
    type: "short",
    difficulty: "Vận dụng",
    q: "Ở 30°C phản ứng hoàn thành sau 16 phút. Biết hệ số nhiệt độ Van 't Hoff γ = 2. Hỏi ở 50°C phản ứng hoàn thành sau bao nhiêu phút?",
    correctAnswer: "4",
    acceptableAnswers: ["4", "4 phút"],
    unit: "phút",
    explanation: "v_50 / v_30 = 2^((50-30)/10) = 2² = 4. Tốc độ tăng 4 lần => Thời gian giảm 4 lần: t = 16 / 4 = 4 phút."
  },
  {
    id: "c6_q28",
    type: "short",
    difficulty: "Thông hiểu",
    q: "Xét phản ứng A → B. Ban đầu nồng độ A là 0,8 M. Sau 40 giây nồng độ A còn lại là 0,2 M. Tốc độ trung bình phản ứng theo A là bao nhiêu M/s?",
    correctAnswer: "0,015",
    acceptableAnswers: ["0,015", "0.015"],
    unit: "M/s",
    explanation: "v_tb = (0,8 - 0,2) / 40 = 0,6 / 40 = 0,015 M/s."
  },
  {
    id: "c6_q29",
    type: "short",
    difficulty: "Vận dụng",
    q: "Phản ứng phân hủy H₂O₂ có hệ số nhiệt độ Van 't Hoff γ = 2. Nếu ở 25°C thời gian phản ứng là 40 phút, thì ở 55°C thời gian phản ứng là bao nhiêu phút?",
    correctAnswer: "5",
    acceptableAnswers: ["5", "5 phút"],
    unit: "phút",
    explanation: "v_55 / v_25 = 2^((55-25)/10) = 2³ = 8 lần => Thời gian t = 40 / 8 = 5 phút."
  },
  {
    id: "c6_q30",
    type: "short",
    difficulty: "Vận dụng",
    q: "Cho phản ứng đơn giản: 2 A + B → C. Nồng độ ban đầu của A = 0,6 M và B = 0,4 M với k = 0,5 L²/(mol².s). Tính tốc độ tức thời của phản ứng tại thời điểm ban đầu (M/s).",
    correctAnswer: "0,072",
    acceptableAnswers: ["0,072", "0.072"],
    unit: "M/s",
    explanation: "v = k.[A]².[B] = 0,5 × (0,6)² × 0,4 = 0,5 × 0,36 × 0,4 = 0,072 M/s."
  }
];
