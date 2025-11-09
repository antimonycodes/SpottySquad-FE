import { Bell, Music, Search, User } from "lucide-react";

const Header = ({ onNavigate, currentView }: any) => {
  return (
    <header className="bg-[#0F1720]/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#1DB954] rounded-lg flex items-center justify-center relative">
              {/* Football icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2zm0 2a8 8 0 0 1 4.9 14.3l-.9-4.2 2.5-2.1-3.6-.3-1.5-3.4-1.5 3.4-3.6.3 2.5 2.1-.9 4.2A8 8 0 0 1 12 4z" />
              </svg>
              {/* Music icon */}
              <Music className="w-5 h-5 text-white absolute right-1 bottom-1" />
            </div>
            <span className="text-white font-bold text-xl">SpottySquad</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {["Home", "Squad", "Tournament"].map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item.toLowerCase())}
              className={`text-sm font-medium transition-colors ${
                currentView === item.toLowerCase()
                  ? "text-[#1DB954]"
                  : "text-[#B8C0CC] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="p-2 text-[#B8C0CC] hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 text-[#B8C0CC] hover:text-white transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#1DB954] rounded-full"></span>
          </button>
          <button className="p-2 text-[#B8C0CC] hover:text-white transition-colors">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
