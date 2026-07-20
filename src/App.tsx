import { useState, useEffect, useRef } from "react";
import { 
  motion, 
  AnimatePresence 
} from "motion/react";
import { 
  Atom, 
  Table, 
  Layers, 
  Flame, 
  Zap, 
  Activity, 
  FlaskConical, 
  User, 
  GraduationCap, 
  Award, 
  Clock, 
  RotateCcw, 
  Check, 
  Home, 
  ChevronRight, 
  History, 
  Edit2, 
  CheckCircle, 
  XCircle, 
  BookOpenText, 
  HelpCircle,
  ArrowLeft,
  X,
  Plus,
  Search,
  Bell,
  BookOpen,
  Calendar,
  Sparkles,
  Award as AwardIcon,
  Check as CheckIcon,
  Play,
  ListTodo,
  Eye,
  ChevronLeft
} from "lucide-react";
import confetti from "canvas-confetti";
import { chapterNames, questionBank, Question } from "./data/questions";

// Interface for quiz history records
interface HistoryRecord {
  id: string;
  studentName: string;
  studentClass: string;
  chapterIndex: number;
  chapterName: string;
  score: number;
  total: number;
  timeSpentSeconds: number;
  date: string;
}

interface QuizQuestion extends Question {
  difficulty: "Nhận biết" | "Thông hiểu" | "Vận dụng";
}

// Helper functions for Scientific E-learning UX
const oIndexToLetter = (idx: number): string => {
  return ["A", "B", "C", "D"][idx] || "";
};

const getScientificExplanation = (qItem: Question, qIndex: number, diffLabel: string): string => {
  const correctOptionText = qItem.options[qItem.correct] || "";
  const cleanedOption = correctOptionText.replace(/<\/?[^>]+(>|$)/g, "");
  
  if (diffLabel === "Nhận biết") {
    return `Phương án đúng là [${oIndexToLetter(qItem.correct)}] (${cleanedOption}). Đây là câu hỏi nhận biết lý thuyết căn bản. Việc nắm vững các định nghĩa, khái niệm, cấu trúc nguyên tử và danh pháp chuẩn quốc tế IUPAC giúp học sinh dễ dàng xây dựng nền tảng kiến thức vững vàng.`;
  } else if (diffLabel === "Thông hiểu") {
    return `Phương án đúng là [${oIndexToLetter(qItem.correct)}] (${cleanedOption}). Ở cấp độ thông hiểu, câu hỏi đòi hỏi bạn giải thích xu hướng biến đổi tuần hoàn, bản chất của liên kết hóa học hoặc lý giải các hiện tượng biến đổi năng lượng phản ứng một cách logic.`;
  } else {
    return `Phương án đúng là [${oIndexToLetter(qItem.correct)}] (${cleanedOption}). Thử thách vận dụng yêu cầu kết hợp nhuần nhuyễn tính toán tỷ lệ mol, xác định số oxi hóa trong các phản ứng phức tạp, hoặc áp dụng định luật bảo toàn khối lượng và năng lượng để tìm ra đáp án tối ưu.`;
  }
};

export default function App() {
  // Navigation & User Info state
  const [page, setPage] = useState<"login" | "chapters" | "quiz">("login");
  const [studentName, setStudentName] = useState<string>(() => localStorage.getItem("chemistry_student_name") || "");
  const [studentClass, setStudentClass] = useState<string>(() => localStorage.getItem("chemistry_student_class") || "");
  const [teacherName, setTeacherName] = useState<string>(() => localStorage.getItem("chemistry_teacher_name") || "Cô Ngọc Phượng");
  
  // Customization state
  const [isEditingTeacher, setIsEditingTeacher] = useState<boolean>(false);
  const [tempTeacherName, setTempTeacherName] = useState<string>("");

  // Quiz state
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<QuizQuestion[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [warningMessage, setWarningMessage] = useState<string | null>(null);

  // New features for Scientific E-learning UX
  const [quizViewMode] = useState<"all" | "single">("all");
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number>(0);

  // Time tracking
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeSpent, setTimeSpent] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Search filter for chapters
  const [searchTerm, setSearchTerm] = useState<string>("");

  // History state
  const [history, setHistory] = useState<HistoryRecord[]>(() => {
    try {
      const saved = localStorage.getItem("chemistry_quiz_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal & Tabs
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [showHistoryModal, setShowHistoryModal] = useState<boolean>(false);

  // Clear inputs validation errors
  const [nameError, setNameError] = useState<boolean>(false);

  // Save history helper
  const saveHistoryRecord = (finalScore: number, elapsedSeconds: number) => {
    if (currentChapterIndex === null) return;
    const newRecord: HistoryRecord = {
      id: Math.random().toString(36).substr(2, 9),
      studentName: studentName || "Học sinh ẩn danh",
      studentClass: studentClass || "Không rõ",
      chapterIndex: currentChapterIndex,
      chapterName: chapterNames[currentChapterIndex],
      score: finalScore,
      total: 10,
      timeSpentSeconds: elapsedSeconds,
      date: new Date().toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      })
    };
    const updatedHistory = [newRecord, ...history];
    setHistory(updatedHistory);
    localStorage.setItem("chemistry_quiz_history", JSON.stringify(updatedHistory));
  };

  // Timer effect
  useEffect(() => {
    if (page === "quiz" && !quizSubmitted) {
      setStartTime(Date.now());
      setTimeSpent(0);
      timerRef.current = setInterval(() => {
        setTimeSpent((prev) => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [page, quizSubmitted]);

  // Map chapters to beautiful matching icons and tags
  const getChapterIcon = (index: number) => {
    switch (index) {
      case 0: return <Atom className="w-6 h-6 text-indigo-500" />;
      case 1: return <Table className="w-6 h-6 text-emerald-500" />;
      case 2: return <Layers className="w-6 h-6 text-sky-500" />;
      case 3: return <Flame className="w-6 h-6 text-orange-500" />;
      case 4: return <Zap className="w-6 h-6 text-yellow-500" />;
      case 5: return <Activity className="w-6 h-6 text-rose-500" />;
      case 6: return <FlaskConical className="w-6 h-6 text-amber-500" />;
      default: return <BookOpenText className="w-6 h-6 text-gray-500" />;
    }
  };

  const getChapterBadgeColor = (index: number) => {
    switch (index) {
      case 0: return "bg-indigo-50 text-indigo-600 border-indigo-100";
      case 1: return "bg-emerald-50 text-emerald-600 border-emerald-100";
      case 2: return "bg-sky-50 text-sky-600 border-sky-100";
      case 3: return "bg-orange-50 text-orange-600 border-orange-100";
      case 4: return "bg-yellow-50 text-yellow-700 border-yellow-100";
      case 5: return "bg-rose-50 text-rose-600 border-rose-100";
      case 6: return "bg-amber-50 text-amber-700 border-amber-100";
      default: return "bg-slate-50 text-slate-600 border-slate-100";
    }
  };

  // Generate balanced 10 questions (3 Easy, 5 Medium, 2 Hard)
  const generateQuiz = (chapterIdx: number) => {
    const bank = questionBank[chapterIdx];
    if (!bank) return;

    // Slices for each difficulty level
    const easyPool = [...bank.slice(0, 5)];
    const mediumPool = [...bank.slice(5, 15)];
    const hardPool = [...bank.slice(15, 20)];

    // Random selection with difficulty labels
    const selectedEasy = easyPool.sort(() => Math.random() - 0.5).slice(0, 3).map(q => ({ ...q, difficulty: "Nhận biết" as const }));
    const selectedMedium = mediumPool.sort(() => Math.random() - 0.5).slice(0, 5).map(q => ({ ...q, difficulty: "Thông hiểu" as const }));
    const selectedHard = hardPool.sort(() => Math.random() - 0.5).slice(0, 2).map(q => ({ ...q, difficulty: "Vận dụng" as const }));

    const merged = [...selectedEasy, ...selectedMedium, ...selectedHard];
    // Shuffle chosen questions to mix difficulty order
    const shuffledQuestions = merged.sort(() => Math.random() - 0.5);

    // Deep copy and shuffle options for each selected question
    const finalQuestions = shuffledQuestions.map((origQ) => {
      // Strip A. B. C. D. prefix to shuffle cleanly
      const optionObjects = origQ.options.map((opt, oIdx) => {
        const cleanText = opt.replace(/^[A-D]\.\s*/, "");
        return { text: cleanText, isOriginalCorrect: oIdx === origQ.correct };
      });

      // Shuffle options list
      const shuffledOptions = [...optionObjects].sort(() => Math.random() - 0.5);

      // Find new correct index
      const newCorrectIndex = shuffledOptions.findIndex((o) => o.isOriginalCorrect);

      // Restore prefixes A. B. C. D.
      const prefixes = ["A. ", "B. ", "C. ", "D. "];
      const formattedOptions = shuffledOptions.map((o, idx) => prefixes[idx] + o.text);

      return {
        q: origQ.q,
        options: formattedOptions,
        correct: newCorrectIndex,
        difficulty: origQ.difficulty,
      };
    });

    setCurrentQuestions(finalQuestions);
    setActiveQuestionIndex(0);
  };

  // Handlers
  const handleStart = () => {
    if (!studentName.trim()) {
      setNameError(true);
      return;
    }
    setNameError(false);
    localStorage.setItem("chemistry_student_name", studentName);
    localStorage.setItem("chemistry_student_class", studentClass);
    setPage("chapters");
  };

  const handleSelectChapter = (idx: number) => {
    setCurrentChapterIndex(idx);
    generateQuiz(idx);
    setUserAnswers({});
    setQuizSubmitted(false);
    setScore(0);
    setWarningMessage(null);
    setPage("quiz");
  };

  const handleSelectOption = (qIndex: number, optionIndex: number) => {
    if (quizSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [qIndex]: optionIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    if (quizSubmitted) return;

    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount < currentQuestions.length) {
      setWarningMessage(`* Bạn chưa hoàn thành tất cả các câu hỏi! Các câu chưa chọn sẽ tự động bị tính là sai.`);
    }

    // Calculate score
    let calculatedScore = 0;
    currentQuestions.forEach((item, qIdx) => {
      if (userAnswers[qIdx] === item.correct) {
        calculatedScore++;
      }
    });

    setScore(calculatedScore);
    setQuizSubmitted(true);
    setWarningMessage(null);

    // Save history
    saveHistoryRecord(calculatedScore, timeSpent);

    // Fire Confetti!
    if (calculatedScore >= 8) {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } else if (calculatedScore >= 5) {
      confetti({
        particleCount: 80,
        spread: 50,
        origin: { y: 0.6 }
      });
    }

    setShowResultModal(true);
  };

  const handleRetryQuiz = () => {
    if (currentChapterIndex !== null) {
      generateQuiz(currentChapterIndex);
      setUserAnswers({});
      setQuizSubmitted(false);
      setScore(0);
      setWarningMessage(null);
      setTimeSpent(0);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startTeacherNameEdit = () => {
    setTempTeacherName(teacherName);
    setIsEditingTeacher(true);
  };

  const saveTeacherName = () => {
    const trimmed = tempTeacherName.trim();
    if (trimmed) {
      setTeacherName(trimmed);
      localStorage.setItem("chemistry_teacher_name", trimmed);
    }
    setIsEditingTeacher(false);
  };

  const clearHistory = () => {
    if (window.confirm("Bạn có chắc chắn muốn xóa tất cả lịch sử làm bài không?")) {
      setHistory([]);
      localStorage.removeItem("chemistry_quiz_history");
    }
  };

  const getScoreFeedback = (points: number) => {
    if (points === 10) return "Hoàn hảo! 10/10 điểm tuyệt đối! 🏆🌟";
    if (points >= 8) return "Xuất sắc! Bạn nắm rất vững kiến thức! 🎉👏";
    if (points >= 5) return "Đạt yêu cầu! Tiếp tục cố gắng nhé! 👍📚";
    return "Cần ôn tập thêm kiến thức nhé! Cố lên nào! 💪🔬";
  };

  // Formatter for timer
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Filtered chapters list based on search bar
  const filteredChapters = chapterNames
    .map((name, index) => ({ name, index }))
    .filter((ch) => ch.name.toLowerCase().includes(searchTerm.toLowerCase()));

  // Count passed chapters (score >= 5 in history)
  const getPassedChaptersCount = () => {
    const passedIndices = new Set<number>();
    history.forEach((record) => {
      if (record.score >= 5) {
        passedIndices.add(record.chapterIndex);
      }
    });
    return passedIndices.size;
  };

  // Get max score achieved for each chapter from history
  const getChapterMaxScore = (chapterIdx: number) => {
    const records = history.filter((r) => r.chapterIndex === chapterIdx);
    if (records.length === 0) return 0;
    return Math.max(...records.map((r) => r.score));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 overflow-x-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 2. MAIN WORKSPACE CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 min-h-screen">
        
        {/* Workspace Header matching Sleek theme */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-4 md:px-8 shrink-0 z-10 shadow-sm gap-4">
          
          {/* Left: Brand Logo & Navigation */}
          <div className="flex items-center space-x-4 lg:space-x-8 shrink-0">
            <div 
              onClick={() => {
                if (studentName) setPage("chapters");
                else setPage("login");
              }}
              className="flex items-center space-x-2 text-indigo-600 cursor-pointer hover:opacity-90 select-none"
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md shadow-indigo-100 shrink-0">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm md:text-base lg:text-lg tracking-tight font-display text-slate-800 leading-tight">APP TỔNG ÔN HÓA 10</span>
                <span className="text-[8px] md:text-[9px] text-slate-400 font-medium tracking-tight">BẢN QUYỀN TRÒ CHƠI THUỘC VỀ CÔ NGỌC PHƯỢNG</span>
              </div>
            </div>

            {/* Quick Header Nav Links - Removed per user request */}
          </div>

          {/* Center: Custom Search Bar - Hidden on small mobile to avoid overflow */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-64 border border-transparent focus-within:border-indigo-300 focus-within:bg-white transition-all">
            <Search className="w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (page !== "chapters" && studentName) {
                  setPage("chapters");
                }
              }}
              className="bg-transparent border-none outline-none ml-2 text-sm w-full text-slate-700" 
            />
          </div>

          {/* Right: Actions Widget */}
          <div className="flex items-center space-x-3 md:space-x-4 shrink-0">
            
            {/* Streak count */}
            <div className="flex items-center space-x-1">
              <span className="text-orange-500 font-bold text-sm md:text-base">🔥 {14 + history.length}</span>
              <span className="hidden xl:inline text-xs text-slate-400 font-medium">ngày</span>
            </div>

            {/* Notification alert */}
            <div className="relative cursor-pointer hover:bg-slate-50 p-1.5 rounded-full transition-colors">
              <div className="w-1.5 h-1.5 bg-rose-500 rounded-full absolute top-1 right-1 border border-white"></div>
              <Bell className="w-4 h-4 text-slate-400" />
            </div>

            {/* Teacher Name Customization */}
            <div className="hidden md:flex items-center space-x-2 pl-3 border-l border-slate-200">
              {isEditingTeacher ? (
                <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-lg p-1 shadow-sm">
                  <input 
                    type="text" 
                    value={tempTeacherName} 
                    onChange={(e) => setTempTeacherName(e.target.value)}
                    className="px-2 py-0.5 text-xs outline-none text-red-600 font-serif italic font-bold max-w-[100px]"
                    placeholder="Giáo viên..."
                    onKeyDown={(e) => e.key === 'Enter' && saveTeacherName()}
                    autoFocus
                  />
                  <button onClick={saveTeacherName} className="p-0.5 text-green-600 hover:bg-green-50 rounded">
                    <Check className="w-3.5 h-3.5" />
                  </button>
                  <button onClick={() => setIsEditingTeacher(false)} className="p-0.5 text-red-500 hover:bg-red-50 rounded">
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1 group">
                  <span className="text-red-600 italic font-bold font-serif text-xs md:text-sm whitespace-nowrap">
                    {teacherName}
                  </span>
                  <button 
                    onClick={startTeacherNameEdit}
                    className="opacity-0 group-hover:opacity-100 p-0.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded transition-all"
                  >
                    <Edit2 className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>

            {/* Student avatar metadata */}
            <div className="flex items-center space-x-2 pl-3 border-l border-slate-200">
              <div className="text-right hidden sm:block max-w-[80px] md:max-w-[120px]">
                <p className="text-xs md:text-sm font-bold text-slate-800 truncate">{studentName || "Khách"}</p>
                <p className="text-[10px] text-slate-400 truncate">{studentClass || "Lớp 10"}</p>
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-indigo-100 border border-white shadow-sm flex items-center justify-center text-indigo-600 font-bold text-xs uppercase shrink-0">
                {studentName ? studentName.trim().charAt(0) : "U"}
              </div>
            </div>

          </div>

        </header>

        {/* 3. SCROLLABLE CANVAS CONTAINER */}
        <div className="p-4 md:p-8 flex-1 flex flex-col space-y-6 max-w-6xl w-full mx-auto overflow-y-auto">
          
          {/* Welcome Dashboard Banner matching the sleek template style */}
          <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 md:p-8 shadow-xl border border-indigo-950/40 flex flex-col md:flex-row items-stretch justify-between overflow-hidden relative gap-6">
            <div className="relative z-10 max-w-lg flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 px-2.5 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase font-mono">
                    <Atom className="w-3.5 h-3.5 inline mr-1 text-indigo-400" /> HÓA HỌC 10
                  </span>
                  <span className="bg-amber-500/15 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-md text-[9px] font-bold tracking-widest uppercase font-mono">
                    <Sparkles className="w-3 h-3 inline mr-1 text-amber-400" /> GDPT MỚI 2018
                  </span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold mb-3 font-display text-white leading-tight">
                  Chào {studentName || "bạn học"}, hôm nay chúng ta ôn luyện gì nào?
                </h1>
                <p className="text-indigo-200/80 mb-6 text-xs md:text-sm leading-relaxed">
                  Trải nghiệm hệ thống câu hỏi phân hóa chuẩn IUPAC mới nhất. Bạn đã chinh phục thành công <span className="text-amber-300 font-bold">{getPassedChaptersCount()} / 7</span> chương lý thuyết vững vàng!
                </p>
              </div>
              
              {/* Welcome banner buttons removed per user request */}
            </div>

            {/* Bento Quick Statistics Panel (Right Side) */}
            <div className="relative z-10 grid grid-cols-2 gap-3 min-w-[240px] md:w-80 justify-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div className="mt-4">
                  <p className="text-[10px] text-indigo-300/80 font-bold uppercase tracking-wider font-mono">BÀI ĐÃ LÀM</p>
                  <p className="text-2xl font-black text-white font-mono mt-0.5">{history.length}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <CheckIcon className="w-4 h-4" />
                </div>
                <div className="mt-4">
                  <p className="text-[10px] text-emerald-300/80 font-bold uppercase tracking-wider font-mono">ĐẠT CHUẨN</p>
                  <p className="text-2xl font-black text-white font-mono mt-0.5">{getPassedChaptersCount()}/7</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors col-span-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-amber-300/80 font-bold uppercase tracking-wider font-mono">HIỆU SUẤT TRUNG BÌNH</span>
                  <span className="text-xs text-amber-400 font-bold font-mono">🔥 {14 + history.length} ngày</span>
                </div>
                <div className="mt-2 flex items-end gap-3 justify-between">
                  <div>
                    <span className="text-2xl font-black text-white font-mono">
                      {history.length > 0 ? (history.reduce((acc, h) => acc + h.score, 0) / history.length).toFixed(1) : "0.0"}
                    </span>
                    <span className="text-xs text-slate-400"> /10đ</span>
                  </div>
                  <span className="text-[10px] bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded font-bold">
                    {history.length === 0 ? "Chưa thi" : (history.reduce((acc, h) => acc + h.score, 0) / history.length) >= 8 ? "Học lực Giỏi" : "Học lực Khá"}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative background visual circles from template style */}
            <div className="w-48 h-48 bg-indigo-500/10 rounded-full absolute -right-12 -bottom-12 opacity-30 z-0"></div>
            <div className="w-32 h-32 bg-purple-500/10 rounded-full absolute right-16 top-4 opacity-20 z-0 animate-pulse"></div>
          </section>
 
          {/* MAIN SINGLE COLUMN AREA: Enlarged testing interface */}
          <div className="max-w-4xl w-full mx-auto space-y-6">
              
              <AnimatePresence mode="wait">
                
                {/* PAGE 1: SLEEK LOGIN */}
                {page === "login" && (
                  <motion.div
                    key="login-view"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 grid grid-cols-1 md:grid-cols-5 gap-6"
                  >
                    <div className="md:col-span-3 space-y-6">
                      <div className="border-b border-slate-100 pb-4">
                        <h3 className="text-lg font-bold text-slate-800 font-display">Thông tin học sinh làm bài</h3>
                        <p className="text-xs text-slate-400 mt-1">Vui lòng điền thông tin để cô ghi nhận điểm số chính xác.</p>
                      </div>

                      <div className="space-y-4">
                        
                        {/* Name Entry */}
                        <div className="space-y-1.5">
                          <label className="block text-sm font-semibold text-slate-600 flex items-center gap-2">
                            <User className="w-4 h-4 text-indigo-500" />
                            Họ và tên học sinh <span className="text-rose-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            value={studentName}
                            onChange={(e) => {
                              setStudentName(e.target.value);
                              if (e.target.value.trim()) setNameError(false);
                            }}
                            placeholder="Ví dụ: Nguyễn Minh Anh"
                            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-slate-700 outline-none transition-all text-sm md:text-base ${
                              nameError ? 'border-rose-400 focus:border-rose-500 focus:ring-2 focus:ring-rose-100' : 'border-slate-200 focus:border-indigo-500 focus:bg-white'
                            }`}
                          />
                          {nameError && (
                            <p className="text-xs text-rose-500 font-semibold mt-1">Bạn vui lòng điền Họ và tên học sinh!</p>
                          )}
                        </div>

                        {/* Class Entry */}
                        <div className="space-y-1.5">
                          <label className="block text-sm font-semibold text-slate-600 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4 text-emerald-500" />
                            Lớp học
                          </label>
                          <input 
                            type="text" 
                            value={studentClass}
                            onChange={(e) => setStudentClass(e.target.value)}
                            placeholder="Ví dụ: 10A1, 10A2..."
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 outline-none focus:border-indigo-500 focus:bg-white transition-all text-sm md:text-base"
                          />
                        </div>

                        {/* Submit */}
                        <button 
                          onClick={handleStart}
                          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md shadow-indigo-100 active:scale-[0.98] text-center flex items-center justify-center gap-2 cursor-pointer text-sm"
                        >
                          Bắt đầu chọn đề ôn tập
                          <ChevronRight className="w-4 h-4" />
                        </button>

                      </div>
                    </div>

                    {/* Scientific Study Tips & Quick Information Sidebar */}
                    <div className="md:col-span-2 bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs font-mono uppercase tracking-wider">
                          <FlaskConical className="w-4 h-4" /> Bí kíp học Hóa 10
                        </div>
                        <ul className="text-xs text-slate-500 space-y-2.5 list-none pl-0">
                          <li className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">1</span>
                            <span><strong>Kiểm tra ngẫu nhiên:</strong> Mỗi lượt ôn tập sẽ gồm 10 câu ngẫu nhiên (3 dễ, 5 trung bình, 2 khó) để phân loại năng lực chuẩn nhất.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">2</span>
                            <span><strong>Nhận diện đáp án đúng:</strong> Sau khi nộp bài, hệ thống sẽ chỉ rõ đáp án đúng/sai kèm thống kê cụ thể giúp bạn ghi nhớ sâu.</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">3</span>
                            <span><strong>Mục tiêu:</strong> Hãy thử ôn tập lại nhiều lần để đạt điểm số cao nhất (Huy hiệu xanh lá) cho cả 7 chương.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="border-t border-slate-200/60 pt-3 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
                        <Activity className="w-3.5 h-3.5 text-rose-500 animate-pulse" />
                        <span>Sát cánh cùng học sinh Việt phục hồi và phát triển năng lực tư duy hóa học mới.</span>
                      </div>
                    </div>

                  </motion.div>
                )}

                {/* PAGE 2: SLEEK CHAPTERS LIST */}
                {page === "chapters" && (
                  <motion.div
                    key="chapters-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="text-lg font-bold flex items-center space-x-2 text-slate-800 font-display">
                        <span>Danh sách các chủ đề kiểm tra</span>
                      </h3>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => setPage("login")}
                          className="bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200/60 font-bold px-3.5 py-2 rounded-xl text-xs transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
                        >
                          <Home className="w-3.5 h-3.5" /> Trở về trang chủ
                        </button>
                        {searchTerm && (
                          <button 
                            onClick={() => setSearchTerm("")}
                            className="text-xs text-indigo-600 font-semibold hover:underline"
                          >
                            Xóa tìm kiếm
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Compact student stats row */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs md:text-sm text-slate-600">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-bold text-slate-800">Học sinh:</span>
                        <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium">{studentName || "Khách"}</span>
                        {studentClass && (
                          <>
                            <span className="text-slate-300">|</span>
                            <span className="font-bold text-slate-800">Lớp:</span>
                            <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium">{studentClass}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <span className="font-semibold text-indigo-600">Bài đã làm:</span> <span className="font-bold text-slate-700">{history.length}</span>
                        </div>
                        <div className="w-px h-4 bg-slate-200"></div>
                        <div>
                          <span className="font-semibold text-emerald-600">Đã đạt:</span> <span className="font-bold text-slate-700">{getPassedChaptersCount()}/7 chương</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {filteredChapters.length === 0 ? (
                        <div className="bg-white rounded-2xl p-8 border border-slate-100 text-center text-slate-400">
                          Không tìm thấy chương học nào khớp với "{searchTerm}"
                        </div>
                      ) : (
                        filteredChapters.map((ch) => {
                          const maxScore = getChapterMaxScore(ch.index);
                          const hasPassed = maxScore >= 5;
                          const progressPercent = (maxScore / 10) * 100;

                          return (
                            <motion.div
                              key={ch.index}
                              whileHover={{ scale: 1.015, y: -2 }}
                              onClick={() => handleSelectChapter(ch.index)}
                              className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md flex flex-col sm:flex-row sm:items-center justify-between cursor-pointer group hover:border-indigo-300 transition-all gap-4"
                            >
                              <div className="flex items-start space-x-4 flex-1">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold shrink-0 ${getChapterBadgeColor(ch.index)}`}>
                                  {getChapterIcon(ch.index)}
                                </div>
                                <div className="space-y-1.5 flex-1 min-w-0">
                                  <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-[10px] font-bold text-indigo-500 uppercase font-mono">Chương {ch.index + 1}</span>
                                    {maxScore > 0 && (
                                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5 ${
                                        maxScore >= 8 
                                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                                          : maxScore >= 5 
                                            ? 'bg-amber-50 text-amber-700 border border-amber-100' 
                                            : 'bg-rose-50 text-rose-600 border border-rose-100'
                                      }`}>
                                        {maxScore >= 8 ? <Award className="w-2.5 h-2.5" /> : <Check className="w-2.5 h-2.5" />} 
                                        Điểm cao nhất: {maxScore}/10 ({maxScore >= 8 ? "Giỏi" : maxScore >= 5 ? "Đạt" : "Yếu"})
                                      </span>
                                    )}
                                  </div>
                                  <h4 className="font-bold text-slate-800 text-sm md:text-base group-hover:text-indigo-600 transition-colors truncate">
                                    {ch.name}
                                  </h4>
                                  
                                  {/* Progress Bar of the Chapter */}
                                  <div className="space-y-1 pt-1 max-w-md">
                                    <div className="flex items-center justify-between text-[10px] text-slate-400">
                                      <span>Tiến trình chinh phục</span>
                                      <span className="font-bold font-mono text-slate-500">{progressPercent}%</span>
                                    </div>
                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                      <div 
                                        className={`h-full rounded-full transition-all duration-500 ${
                                          maxScore >= 8 
                                            ? 'bg-emerald-500' 
                                            : maxScore >= 5 
                                              ? 'bg-amber-500' 
                                              : maxScore > 0 
                                                ? 'bg-rose-500' 
                                                : 'bg-slate-300'
                                        }`}
                                        style={{ width: `${Math.max(progressPercent, maxScore > 0 ? 8 : 0)}%` }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-50">
                                <span className="text-xs text-slate-400 font-medium sm:opacity-0 group-hover:opacity-100 transition-opacity">Bắt đầu ôn tập</span>
                                <div className="w-9 h-9 rounded-full bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 shadow-sm">
                                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })
                      )}
                    </div>

                  </motion.div>
                )}

                {/* PAGE 3: SLEEK QUIZ SESSION */}
                {page === "quiz" && currentChapterIndex !== null && (
                  <motion.div
                    key="quiz-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    
                    {/* Chapter Header */}
                    <div className="border-b border-slate-200/60 pb-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-black text-indigo-600 font-mono tracking-wider uppercase bg-indigo-50 px-2.5 py-1 rounded-md">Bài ôn tập chương học</span>
                        <h2 className="text-xl font-bold text-slate-800 font-display mt-1.5">Chương {currentChapterIndex + 1}: {chapterNames[currentChapterIndex]}</h2>
                      </div>
                    </div>

                    {/* Active quiz status strip */}
                    <div className="bg-white rounded-2xl p-4 border border-slate-100 flex flex-wrap items-center justify-between gap-4 shadow-sm">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                          <Clock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-400 font-bold font-mono">THỜI GIAN LÀM BÀI</p>
                          <p className="text-sm font-black text-slate-700 font-mono">{formatTime(timeSpent)}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center shadow-sm">
                          <CheckIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-[9px] text-slate-400 font-bold font-mono">TIẾN TRÌNH TRẢ LỜI</p>
                          <p className="text-sm font-black text-slate-700">
                            Đã chọn: <span className="text-emerald-600">{Object.keys(userAnswers).length}</span> / 10 câu
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigator buttons removed per user request */}

                    {/* Quiz Questions List / Single View */}
                    <div className="space-y-6">
                      {currentQuestions.map((qItem, qIndex) => {
                        const chosenIdx = userAnswers[qIndex];
                        const isAnswered = chosenIdx !== undefined;
                        const isVisible = quizViewMode === "all" || qIndex === activeQuestionIndex;

                        if (!isVisible) return null;

                        // Identify question difficulty dynamically for badge display
                        let diffLabel = qItem.difficulty || (qIndex < 3 ? "Nhận biết" : qIndex < 8 ? "Thông hiểu" : "Vận dụng");
                        let diffStyle = "bg-emerald-50 border-emerald-100 text-emerald-700";
                        if (diffLabel === "Thông hiểu") {
                          diffStyle = "bg-indigo-50 border-indigo-100 text-indigo-700";
                        } else if (diffLabel === "Vận dụng") {
                          diffStyle = "bg-amber-50 border-amber-100 text-amber-700 font-bold";
                        }

                        return (
                          <motion.div 
                            key={qIndex}
                            id={`question-card-${qIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white border border-slate-150 rounded-2xl p-5 md:p-6 shadow-sm flex flex-col md:flex-row justify-between gap-6 hover:border-indigo-200/50 hover:shadow-md/5 transition-all relative overflow-hidden"
                          >
                            {/* Visual strip for active question in single view */}
                            {quizViewMode === "single" && (
                              <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-500" />
                            )}

                            <div className="flex-1 space-y-4">
                              
                              {/* Question title and difficulty badge */}
                              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-50 pb-2.5">
                                <span className="text-indigo-600 font-mono text-xs md:text-sm bg-indigo-50 px-2.5 py-1 rounded-lg font-bold">
                                  Câu hỏi {qIndex + 1} / 10
                                </span>
                                <span className={`text-[9px] md:text-[10px] font-black uppercase px-2 py-0.5 rounded border ${diffStyle}`}>
                                  {diffLabel}
                                </span>
                              </div>

                              <h4 className="text-slate-800 font-bold text-sm md:text-base leading-relaxed">
                                <span dangerouslySetInnerHTML={{ __html: qItem.q }} />
                              </h4>

                              {/* Answers Options Grid */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                                {qItem.options.map((optionText, oIndex) => {
                                  const isSelected = chosenIdx === oIndex;
                                  const isCorrectAnswer = qItem.correct === oIndex;
                                  const letterPrefix = oIndex === 0 ? "A. " : oIndex === 1 ? "B. " : oIndex === 2 ? "C. " : "D. ";

                                  let optionStyle = "border-slate-200 bg-white hover:bg-slate-50/80 text-slate-700 hover:border-slate-300";

                                  if (quizSubmitted) {
                                    if (isSelected) {
                                      if (isCorrectAnswer) {
                                        optionStyle = "border-emerald-500 bg-emerald-50 text-emerald-950 font-bold ring-2 ring-emerald-100";
                                      } else {
                                        optionStyle = "border-rose-400 bg-rose-50 text-rose-950 font-bold ring-2 ring-rose-100";
                                      }
                                    } else if (isCorrectAnswer) {
                                      // Highlight correct answer if user got it wrong
                                      optionStyle = "border-emerald-500 bg-emerald-50/50 text-emerald-900 font-semibold";
                                    } else {
                                      optionStyle = "border-slate-100 text-slate-400 bg-slate-50/20 opacity-60";
                                    }
                                  } else if (isSelected) {
                                    optionStyle = "border-indigo-600 bg-indigo-50/70 text-indigo-900 font-extrabold ring-2 ring-indigo-100";
                                  }

                                  return (
                                    <button
                                      key={oIndex}
                                      disabled={quizSubmitted}
                                      onClick={() => handleSelectOption(qIndex, oIndex)}
                                      className={`p-3.5 text-left rounded-xl border text-xs md:text-sm transition-all flex items-start justify-between ${optionStyle} ${
                                        quizSubmitted ? "cursor-not-allowed" : "cursor-pointer"
                                      }`}
                                    >
                                      <div className="flex gap-1.5 items-start">
                                        <span className="font-mono font-bold text-indigo-600 shrink-0">{letterPrefix}</span>
                                        <span dangerouslySetInnerHTML={{ __html: optionText }} className="break-words" />
                                      </div>
                                      {isSelected && !quizSubmitted && (
                                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0 ml-2 mt-1 shadow-sm" />
                                      )}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* SCIENTIFIC EXPLANATION PANEL (ONLY VISIBLE ONCE SUBMITTED) */}
                              {quizSubmitted && (
                                <motion.div 
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  className={`p-4 rounded-xl text-xs md:text-sm border ${
                                    chosenIdx === qItem.correct 
                                      ? "bg-emerald-50/60 border-emerald-100 text-emerald-900" 
                                      : "bg-rose-50/60 border-rose-100 text-rose-900"
                                  }`}
                                >
                                  <div className="flex items-start gap-2.5">
                                    <div className="mt-0.5">
                                      {chosenIdx === qItem.correct ? (
                                        <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-[10px]">✓</div>
                                      ) : (
                                        <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-[10px]">✗</div>
                                      )}
                                    </div>
                                    <div className="space-y-1">
                                      <p className="font-bold">
                                        {chosenIdx === qItem.correct 
                                          ? "Giải pháp xuất sắc! Bạn đã vượt qua thử thách này." 
                                          : `Bạn chưa đúng ở câu này. Phương án đúng là ${oIndexToLetter(qItem.correct)}.`}
                                      </p>
                                      <p className="text-slate-500 text-xs leading-relaxed">
                                        <strong>Cơ sở khoa học:</strong> {getScientificExplanation(qItem, qIndex, diffLabel)}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              )}

                            </div>

                            {/* Status side indicator */}
                            <div className="flex md:flex-col items-center justify-center shrink-0 w-full md:w-16 self-stretch border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-4">
                              {quizSubmitted ? (
                                chosenIdx === qItem.correct ? (
                                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm shadow-sm">✓</div>
                                ) : (
                                  <div className="w-10 h-10 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-sm shadow-sm">✗</div>
                                )
                              ) : (
                                <div className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                                  isAnswered 
                                    ? "bg-indigo-100 text-indigo-700 font-semibold" 
                                    : "bg-slate-100 text-slate-400"
                                }`}>
                                  {isAnswered ? "Đã chọn" : `Chưa chọn`}
                                </div>
                              )}
                            </div>

                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Single mode buttons removed per user request */}

                    {/* Warnings and errors alert in Vietnamese */}
                    {warningMessage && (
                      <div className="p-4 bg-amber-50 border border-dashed border-amber-300 rounded-2xl text-amber-900 text-xs md:text-sm font-semibold text-center">
                        {warningMessage}
                      </div>
                    )}

                    {/* Quiz Action Control Bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                      
                      <button
                        onClick={handleRetryQuiz}
                        className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3.5 px-6 rounded-xl transition-all text-sm cursor-pointer flex items-center justify-center gap-1.5 border border-slate-200"
                      >
                        <RotateCcw className="w-4 h-4" /> Làm lại từ đầu
                      </button>

                      {!quizSubmitted ? (
                        <button
                          onClick={handleSubmitQuiz}
                          className="w-full sm:w-auto bg-amber-400 hover:bg-amber-500 text-amber-950 font-black py-4 px-12 rounded-xl transition-all shadow-lg shadow-amber-400/20 text-sm cursor-pointer"
                        >
                          Nộp bài & Tính điểm
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowResultModal(true)}
                          className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-12 rounded-xl transition-all shadow-lg shadow-emerald-500/20 text-sm cursor-pointer"
                        >
                          Xem lại bảng điểm
                        </button>
                      )}

                      <button
                        onClick={() => {
                          if (quizSubmitted || window.confirm("Đồng ý quay lại Trang chủ? Trạng thái chưa nộp sẽ mất.")) {
                            setPage("chapters");
                          }
                        }}
                        className="w-full sm:w-auto border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-bold py-3.5 px-6 rounded-xl transition-all text-sm cursor-pointer"
                      >
                        Về danh sách chương
                      </button>

                      {quizSubmitted && (
                        <button
                          onClick={() => setPage("login")}
                          className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all text-sm cursor-pointer flex items-center justify-center gap-1.5 border border-slate-800"
                        >
                          <Home className="w-4 h-4 text-amber-400" /> Trở về trang chủ
                        </button>
                      )}

                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

      </main>

      {/* MODAL 1: RESULTS SUMMARY POPUP - Sleek alignment */}
      <AnimatePresence>
        {showResultModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full border-4 border-dashed border-indigo-400 shadow-2xl relative text-center"
            >
              <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4 border-2 border-dashed border-indigo-300">
                <Award className="w-9 h-9 animate-bounce" />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-slate-800 font-display">HOÀN THÀNH BÀI THI!</h3>
              
              <div className="my-5 py-3 px-4 bg-slate-50 rounded-2xl border border-slate-100 text-slate-600 text-xs md:text-sm space-y-1">
                <p className="font-bold text-slate-800 text-base">{studentName || "Học sinh mới"}</p>
                {studentClass && <p>Lớp học: <span className="font-semibold text-slate-700">{studentClass}</span></p>}
                <p className="text-xs text-indigo-600 font-semibold">Chương: {currentChapterIndex !== null ? chapterNames[currentChapterIndex] : ""}</p>
                <p className="text-xs text-slate-400 pt-1">Thời gian làm bài: {formatTime(timeSpent)}</p>
              </div>

              {/* Score Display */}
              <div className="my-6">
                <span className="text-5xl md:text-6xl font-black text-rose-600 font-mono">{score}</span>
                <span className="text-2xl font-bold text-slate-300"> / 10</span>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">ĐIỂM SỐ</p>
              </div>

              <p className="text-xs md:text-sm font-bold text-slate-700 mb-6 px-2">
                {getScoreFeedback(score)}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => setShowResultModal(false)}
                    className="flex-1 bg-amber-400 hover:bg-amber-500 text-amber-950 font-bold py-3 rounded-xl transition-all text-xs md:text-sm cursor-pointer"
                  >
                    XEM LẠI ĐÁP ÁN ĐÃ CHỌN
                  </button>
                  <button
                    onClick={() => {
                      setShowResultModal(false);
                      setPage("chapters");
                    }}
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all text-xs md:text-sm cursor-pointer"
                  >
                    TIẾP TỤC CHỦ ĐỀ KHÁC
                  </button>
                </div>
                <button
                  onClick={() => {
                    setShowResultModal(false);
                    setPage("login");
                  }}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all text-xs md:text-sm cursor-pointer flex items-center justify-center gap-1.5 border border-slate-800"
                >
                  <Home className="w-4 h-4 text-amber-450" /> TRỞ VỀ TRANG CHỦ
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MODAL 2: HISTORICAL DATABASE LOGS - Sleek alignment */}
      <AnimatePresence>
        {showHistoryModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full border-4 border-dashed border-indigo-400 shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              {/* Close Button */}
              <button 
                onClick={() => setShowHistoryModal(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-5">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                  <History className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 font-display">Bảng vàng điểm số của {studentName || "bạn"}</h3>
                  <p className="text-xs text-slate-400">Danh sách các lần kiểm tra năng lực Hóa 10 đã lưu trữ</p>
                </div>
              </div>

              {/* Scroll list */}
              <div className="flex-1 overflow-y-auto pr-1">
                {history.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 space-y-2">
                    <Award className="w-12 h-12 text-slate-200 mx-auto" />
                    <p className="font-semibold text-slate-500">Chưa có dữ liệu bài làm.</p>
                    <p className="text-xs">Vui lòng chọn bất kỳ một chương học để bắt đầu làm bài test 10 câu.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {history.map((record) => (
                      <div 
                        key={record.id}
                        className="bg-slate-50 border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4 hover:bg-slate-100/40 transition-colors"
                      >
                        <div className="space-y-0.5">
                          <p className="text-[10px] text-slate-400 font-mono">{record.date}</p>
                          <p className="font-bold text-slate-700 text-sm md:text-base leading-snug">
                            {record.chapterName}
                          </p>
                          <p className="text-xs text-slate-400">
                            Học sinh: <span className="font-medium text-slate-600">{record.studentName}</span> • Lớp: <span className="font-medium text-slate-600">{record.studentClass}</span> • Thời gian: <span className="font-mono text-slate-600">{formatTime(record.timeSpentSeconds)}</span>
                          </p>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-xl font-black font-mono px-3 py-1 rounded-xl ${
                            record.score >= 8 
                              ? 'bg-emerald-100/70 text-emerald-800' 
                              : record.score >= 5 
                                ? 'bg-amber-100/70 text-amber-800' 
                                : 'bg-rose-100/70 text-rose-800'
                          }`}>
                            {record.score}/{record.total}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between gap-3 shrink-0">
                {history.length > 0 && (
                  <button
                    onClick={clearHistory}
                    className="text-xs font-bold text-rose-500 hover:text-rose-700 hover:underline cursor-pointer"
                  >
                    Xóa toàn bộ lịch sử thi
                  </button>
                )}
                <button
                  onClick={() => setShowHistoryModal(false)}
                  className="bg-slate-800 hover:bg-slate-900 text-white font-bold py-2 px-5 rounded-xl text-sm ml-auto cursor-pointer"
                >
                  Đóng bảng vàng
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
