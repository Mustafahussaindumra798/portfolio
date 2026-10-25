import { ArrowLeft, Download, Mail, MapPin, Globe, Github, Linkedin, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Resume | Mustafa Hussain',
  description: 'Resume of Mustafa Hussain, BS Software Engineering student, Python developer, AI application builder, and Co-Founder & COO at CloudExify.',
};

const projects = [
  {
    name: 'Restro AI',
    type: 'Restaurant management / POS project',
    details: 'Worked on a restaurant-focused application with menu, table, and order-management workflows.',
    link: 'https://restro-ai-2crv.vercel.app/',
  },
  {
    name: 'Vital Fitness Gym Website',
    type: 'Business website',
    details: 'Built a gym website experience to present services, membership options, and contact information.',
    link: 'https://vital-gym-bqlm.vercel.app/',
  },
  {
    name: 'Dental Clinic Website',
    type: 'Business website',
    details: 'Created a website for a dental clinic with service information and a clear contact path.',
    link: 'https://dental-462u.vercel.app/',
  },
  {
    name: 'Medi Finder AI',
    type: 'Hackathon project',
    details: 'Contributed to a health-assistant concept focused on prescription scanning, medicine alternatives, interaction checks, and Urdu/English support.',
    link: '',
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-8 px-4 sm:px-6 lg:px-8 font-inter text-[var(--foreground)]">
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap justify-between items-center gap-4 print:hidden">
        <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-primary transition-colors text-sm font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" /> Print / Save as PDF
        </button>
      </div>

      <article className="max-w-4xl mx-auto bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-xl overflow-hidden print:shadow-none print:border-none print:rounded-none">
        <header className="px-6 py-8 sm:px-10 sm:py-10 border-b border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <h1 className="font-syne text-4xl sm:text-5xl font-bold mb-2 tracking-tight">
                Mustafa <span className="text-primary">Hussain</span>
              </h1>
              <p className="text-lg sm:text-xl text-[var(--muted)] font-medium">
                BS Software Engineering Student | Python Developer | AI Application Builder
              </p>
              <p className="mt-2 text-sm text-[var(--muted)]">Co-Founder &amp; COO at CloudExify</p>
            </div>
            <div className="flex flex-col gap-3 text-sm text-[var(--muted)]">
              <a href="mailto:coo@cloudexify.site" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> coo@cloudexify.site
              </a>
              <a href="https://portfolio-vznd.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Globe className="w-4 h-4 text-primary" /> Portfolio website
              </a>
              <a href="https://github.com/Mustafahussaindumra798" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Github className="w-4 h-4 text-primary" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/mustafa-hussain-a29977356/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> Islamabad, Pakistan
              </div>
            </div>
          </div>
        </header>

        <div className="px-6 py-8 sm:px-10 sm:py-10 grid grid-cols-1 md:grid-cols-[1fr,260px] gap-10">
          <div className="space-y-9">
            <section>
              <h2 className="font-syne text-xl font-bold mb-3 pb-2 border-b border-[var(--card-border)]">Professional Summary</h2>
              <p className="text-sm leading-7 text-[var(--muted)]">
                Software Engineering student focused on Python development and building practical web and AI-powered applications. As Co-Founder &amp; COO at CloudExify, I support operations, outreach, social media, and the development of websites and digital products for businesses. I am continuing to build my foundations in AI engineering and application integration.
              </p>
            </section>

            <section>
              <h2 className="font-syne text-xl font-bold mb-4 pb-2 border-b border-[var(--card-border)]">Selected Projects</h2>
              <div className="space-y-5">
                {projects.map((project) => (
                  <div key={project.name}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-semibold">{project.name}</h3>
                      <span className="text-xs text-primary">{project.type}</span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{project.details}</p>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noreferrer" className="mt-1 inline-block text-xs font-semibold text-primary hover:underline">
                        View project ↗
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-syne text-xl font-bold mb-3 pb-2 border-b border-[var(--card-border)]">Experience</h2>
              <div className="flex gap-3">
                <Briefcase className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold">Co-Founder &amp; Chief Operating Officer — CloudExify</h3>
                  <p className="text-xs text-primary mt-1">March 2026 – Present</p>
                  <ul className="mt-2 list-disc list-outside ml-4 space-y-1 text-sm leading-6 text-[var(--muted)]">
                    <li>Support day-to-day operations and coordination for a digital solutions initiative.</li>
                    <li>Contribute to lead generation, social media management, and marketing activities.</li>
                    <li>Help plan and deliver business websites and AI-assisted digital product ideas.</li>
                    <li>Support student community communications and internship-program coordination.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <section>
              <h2 className="font-syne text-lg font-bold mb-3 pb-2 border-b border-[var(--card-border)]">Education</h2>
              <div className="flex gap-3">
                <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold">BS Software Engineering (BSSE)</h3>
                  <p className="text-sm text-[var(--muted)] mt-1">COMSATS University Islamabad, Wah Campus</p>
                  <p className="text-xs text-primary mt-1">3rd semester — In progress</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-syne text-lg font-bold mb-3 pb-2 border-b border-[var(--card-border)]">Technical Skills</h2>
              <div className="space-y-3 text-sm">
                <div><h3 className="font-semibold">Programming</h3><p className="text-[var(--muted)] mt-1">Python, C++, Java (OOP fundamentals)</p></div>
                <div><h3 className="font-semibold">Web Development</h3><p className="text-[var(--muted)] mt-1">HTML, CSS, JavaScript, TypeScript, React, Next.js</p></div>
                <div><h3 className="font-semibold">AI Application Development</h3><p className="text-[var(--muted)] mt-1">AI API integration concepts, AI-powered app prototyping, prompt design</p></div>
                <div><h3 className="font-semibold">Tools</h3><p className="text-[var(--muted)] mt-1">Git, GitHub, Vercel, Supabase (project use)</p></div>
              </div>
            </section>

            <section>
              <h2 className="font-syne text-lg font-bold mb-3 pb-2 border-b border-[var(--card-border)]">Certifications</h2>
              <ul className="list-disc list-outside ml-4 space-y-2 text-sm text-[var(--muted)]">
                <li>Google Prompting Essentials</li>
                <li>Google Prompting Like a Pro</li>
                <li>Google — Speed Up Data Analysis and Presentation Building</li>
                <li>Google — Design Prompt for Every Day Task</li>
                <li>Programming for Everybody: Getting Started with Python — University of Michigan / Coursera</li>
              </ul>
              <p className="mt-2 text-xs text-[var(--muted)]">Certificate verification links can be added when the individual credential URLs are confirmed.</p>
            </section>
          </aside>
        </div>
      </article>

      <style jsx global>{`
        @page { size: A4; margin: 12mm; }
        @media print {
          html, body { background: #fff !important; color: #111827 !important; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          main { padding: 0 !important; min-height: auto !important; }
          article { max-width: none !important; width: 100% !important; border: none !important; border-radius: 0 !important; box-shadow: none !important; background: #fff !important; color: #111827 !important; }
          article header, article aside, article section { break-inside: avoid; }
          article p, article li, article span { color: #374151 !important; }
          a { color: #1d4ed8 !important; text-decoration: none !important; }
        }
      `}</style>
    </main>
  );
}
