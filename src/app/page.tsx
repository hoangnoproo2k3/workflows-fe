export default function CallToAction() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md text-white px-6 py-4 rounded-2xl shadow-2xl border border-white/20 animate-fade-in">
        <p className="text-lg font-semibold mb-3 text-center">
          Thích video này? 🥰
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold py-2 px-6 rounded-full transition duration-300">
            ❤️ Like
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold py-2 px-6 rounded-full transition duration-300">
            + Follow
          </button>
        </div>
      </div>
    </div>
  );
}
