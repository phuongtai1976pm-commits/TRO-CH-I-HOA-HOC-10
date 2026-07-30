export type Difficulty = "Nhận biết" | "Thông hiểu" | "Vận dụng";
export type QuestionType = "mcq" | "tf" | "short";

export interface TFSubOption {
  label: string; // e.g. "a) Phân lớp p chứa tối đa 6 electron."
  correct: boolean; // true = Đúng, false = Sai
}

export interface BaseQuestion {
  id: string;
  type: QuestionType;
  difficulty: Difficulty;
  q: string; // Câu hỏi hoặc đoạn dẫn
  explanation?: string;
}

// 1. Trắc nghiệm 4 lựa chọn (MCQ - 40%)
export interface MCQQuestion extends BaseQuestion {
  type: "mcq";
  options: string[]; // 4 lựa chọn
  correct: number; // 0, 1, 2, 3
}

// 2. Trắc nghiệm Đúng/Sai (TF - 30%: 1 câu dẫn, 4 ý a, b, c, d)
export interface TFQuestion extends BaseQuestion {
  type: "tf";
  subOptions: [TFSubOption, TFSubOption, TFSubOption, TFSubOption]; // Đúng 4 ý a, b, c, d
}

// 3. Trả lời ngắn / Tính toán (Short Answer - 30%)
export interface ShortAnswerQuestion extends BaseQuestion {
  type: "short";
  correctAnswer: string; // ví dụ: "12" hoặc "63,54"
  acceptableAnswers?: string[]; // các dạng chấp nhận: ["12", "12.0", "12,0"]
  unit?: string; // đơn vị tính nếu có (g, mol, %, L, ...)
}

export type Question = MCQQuestion | TFQuestion | ShortAnswerQuestion;
