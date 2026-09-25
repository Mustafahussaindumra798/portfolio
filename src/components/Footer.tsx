'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left: Branding */}
        <div className="flex flex-col gap-2">
          <div className="font-syne text-xl font-bold text-foreground tracking-tight">
            Mustafa Hussain
          </div>
          <p className="text-muted text-sm font-inter">
            Software Engineer &middot; Full-Stack Developer &middot; AI/ML
          </p>
        </div>

        {/* Right: Links & Copyright */}
        <div className="flex flex-col md:items-end gap-6">
          <div className="flex flex-wrap gap-6 text-sm font-medium text-foreground">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="mailto:mustafahussaindumra798@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
          <p className="text-xs text-muted font-inter">
            &copy; {new Date().getFullYear()} Mustafa Hussain. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
