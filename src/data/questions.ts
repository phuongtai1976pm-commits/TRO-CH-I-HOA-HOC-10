export * from "./questionTypes";

export const chapterNames: string[] = [
  "Chương 1: Cấu tạo nguyên tử",
  "Chương 2: Bảng tuần hoàn các nguyên tố hoá học",
  "Chương 3: Liên kết hoá học",
  "Chương 4: Phản ứng oxi hoá – khử",
  "Chương 5: Năng lượng hoá học",
  "Chương 6: Tốc độ phản ứng",
  "Chương 7: Nguyên tố nhóm Halogen"
];

import { Question } from "./questionTypes";
import { chapter1Questions } from "./chapters/chapter1";
import { chapter2Questions } from "./chapters/chapter2";
import { chapter3Questions } from "./chapters/chapter3";
import { chapter4Questions } from "./chapters/chapter4";
import { chapter5Questions } from "./chapters/chapter5";
import { chapter6Questions } from "./chapters/chapter6";
import { chapter7Questions } from "./chapters/chapter7";

export const questionBank: Record<number, Question[]> = {
  0: chapter1Questions,
  1: chapter2Questions,
  2: chapter3Questions,
  3: chapter4Questions,
  4: chapter5Questions,
  5: chapter6Questions,
  6: chapter7Questions
};
