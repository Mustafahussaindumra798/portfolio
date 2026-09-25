import { ArrowLeft, Download, Mail, MapPin, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Resume | Mustafa Hussain - AI/ML Engineer',
  description: 'Professional resume of Mustafa Hussain, Enterprise AI/ML Engineer and Technical Executive.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[var(--background)] py-12 px-4 sm:px-6 lg:px-8 font-inter text-[var(--foreground)] selection:bg-primary/30 selection:text-primary-foreground">
      
      {/* Controls Container (Hidden in print) */}
      <div className="max-w-4xl mx-auto mb-8 flex justify-between items-center print:hidden">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-primary transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        <a 
          href="javascript:window.print()"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" /> Print / Save as PDF
        </a>
      </div>

      {/* Resume Document (A4 format roughly) */}
      <div className="max-w-4xl mx-auto bg-[var(--card-bg)] border border-[var(--card-border)] rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:border-none print:rounded-none bg-white dark:bg-slate-900">
        
        {/* Header */}
        <header className="px-10 py-12 border-b border-primary/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="font-syne text-4xl md:text-5xl font-bold text-foreground mb-2 tracking-tight">
                Mustafa <span className="text-primary">Hussain</span>
              </h1>
              <h2 className="text-xl text-[var(--muted)] font-medium">
                Enterprise AI/ML Engineer & Technical Executive
              </h2>
            </div>
            <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> 
                <a href="mailto:contact@mustafahussain.com" className="hover:text-primary transition-colors">contact@mustafahussain.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" /> 
                <a href="https://mustafa-hussain.vercel.app" className="hover:text-primary transition-colors">mustafa-hussain.vercel.app</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" /> 
                <span>Global / Pakistan (Remote)</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-[1fr,300px] gap-12">
          
          {/* Main Column */}
          <div className="space-y-10">
            
            <section>
              <h3 className="font-syne text-2xl font-bold text-foreground mb-4 pb-2 border-b border-[var(--card-border)] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" /> Professional Summary
              </h3>
              <p className="text-[var(--muted)] leading-relaxed text-sm md:text-base">
                Technical leader and Enterprise AI/ML Engineer with a proven track record of architecting 
                and deploying scalable, intelligent systems. Specialized in developing predictive analytics engines, 
                integrating Large Language Models (LLMs) with custom RAG architectures, and establishing robust 
                MLOps pipelines. Passionate about transforming complex business challenges into data-driven, 
                automated solutions that deliver measurable ROI.
              </p>
            </section>

            <section>
              <h3 className="font-syne text-2xl font-bold text-foreground mb-6 pb-2 border-b border-[var(--card-border)] flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" /> Key Enterprise Projects
              </h3>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-foreground">Enterprise Knowledge Graph Platform</h4>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">2025</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--muted)] mb-3">Neo4j, PyTorch, HuggingFace, FastAPI</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-[var(--muted)] space-y-2">
                    <li>Architected a highly scalable knowledge graph to extract and visualize entity relationships across millions of corporate documents.</li>
                    <li>Utilized custom NLP pipelines via HuggingFace to perform named entity recognition (NER) with 94% accuracy.</li>
                    <li>Designed high-throughput API layer in FastAPI resulting in sub-50ms query responses.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-foreground">Autonomous RAG Support Agent</h4>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">2025</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--muted)] mb-3">LangChain, OpenAI, Pinecone, Next.js</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-[var(--muted)] space-y-2">
                    <li>Developed state-of-the-art LLM-powered support agent utilizing Retrieval-Augmented Generation to reference internal corporate documentation.</li>
                    <li>Reduced human customer support workload by 40% within the first quarter of deployment.</li>
                    <li>Implemented semantic caching and vector database indexing (Pinecone) to drastically reduce token costs.</li>
                  </ul>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-foreground">Predictive Analytics & Forecasting</h4>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">2024</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--muted)] mb-3">XGBoost, Pandas, AWS SageMaker</p>
                  <ul className="list-disc list-outside ml-4 text-sm text-[var(--muted)] space-y-2">
                    <li>Built real-time predictive models using gradient boosting and time-series forecasting to optimize global supply chains.</li>
                    <li>Automated the entire ML lifecycle from data ingestion to model deployment using AWS SageMaker pipelines.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            
            <section>
              <h3 className="font-syne text-xl font-bold text-foreground mb-4 pb-2 border-b border-[var(--card-border)]">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'AI Strategy', 'Predictive Analytics', 'LLM Integration', 'Computer Vision', 'MLOps', 'Technical Leadership'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-primary/5 text-primary text-xs font-bold rounded-lg border border-primary/10">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="font-syne text-xl font-bold text-foreground mb-4 pb-2 border-b border-[var(--card-border)]">
                Technical Arsenal
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2">Frameworks & Libraries</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">PyTorch, TensorFlow, Keras, Scikit-Learn, Pandas, NumPy, LangChain</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2">Cloud & MLOps</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">AWS, GCP, Docker, Kubernetes, GitHub Actions, MLflow</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-2">Software Engineering</h4>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">Python, TypeScript, React, Next.js, Node.js, FastAPI, REST/GraphQL</p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="font-syne text-xl font-bold text-foreground mb-4 pb-2 border-b border-[var(--card-border)]">
                Education
              </h3>
              <div>
                <h4 className="text-sm font-bold text-foreground">BSc Software Engineering</h4>
                <p className="text-sm text-primary mb-1">Graduation: Ongoing</p>
                <p className="text-xs text-[var(--muted)]">Specialization in AI Systems and Advanced Software Architecture.</p>
              </div>
            </section>

          </div>
        </div>
      </div>
      
      {/* CSS for print specifically */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body {
            background-color: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .glass {
            background: white !important;
            border: 1px solid #e2e8f0 !important;
            backdrop-filter: none !important;
          }
        }
      `}} />
    </div>
  );
}
