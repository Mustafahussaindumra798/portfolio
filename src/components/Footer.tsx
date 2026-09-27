'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-t border-gray-100 pt-12">
        
        {/* Left: Branding */}
        <div className="flex flex-col gap-2">
          <div className="font-syne text-xl font-bold text-foreground tracking-tight">
            Mustafa Hussain
          </div>
          <p className="text-muted text-sm font-inter">
            AI Engineer in the Making &middot; Co-Founder & COO @ CloudExify
          </p>
        </div>

        {/* Right: Links & Tagline */}
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex flex-wrap gap-6 text-sm font-mono uppercase tracking-widest text-muted">
            <a href="https://github.com/Mustafahussaindumra798" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/mustafahussain" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:coo@cloudexify.site" className="hover:text-foreground transition-colors">Email</a>
          </div>
          <p className="text-xs text-muted font-syne font-bold uppercase tracking-widest mt-2">
            Building. Learning. Shipping.
          </p>
        </div>

      </div>
    </footer>
  );
}
