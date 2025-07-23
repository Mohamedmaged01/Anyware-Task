export function ExamBanner() {
  return (
    <div className="bg-gradient-to-r from-teal-400 to-blue-500 rounded-xl p-8 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold mb-2">EXAMS TIME</h2>
        <p className="text-lg mb-1">
          Here we are, Are you ready to fight? Don't worry, we prepared some
          tips to
        </p>
        <p className="text-lg mb-6">be ready for your exams.</p>
        <p className="text-sm mb-4 opacity-75">
          "Nothing happens until something moves" - Albert Einstein
        </p>
        <button className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors">
          View exams tips
        </button>
      </div>
      <div className="absolute right-4 top-4 opacity-20">
        <div className="w-48 h-48 bg-white/10 rounded-lg transform rotate-12"></div>
      </div>
    </div>
  );
}
