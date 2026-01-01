export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-heading font-bold italic tracking-tighter text-white uppercase mb-6">
          Canyon<span className="text-brand-red">Boxing</span>
        </h2>
        
        <p className="text-gray-400 font-light mb-8 max-w-md mx-auto">
          The Only Boxing Personal Training on Route 66. <br/>
          Serving Williams, Flagstaff, and the surrounding Northern Arizona area.
        </p>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Facebook</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors">Email</a>
        </div>

        <div className="text-xs text-gray-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Canyon Boxing Club. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
