import { motion } from 'framer-motion'

const PROJECTS = [
  {
    name: 'Postcone.ai',
    meta: 'Python • LangChain • Postgres',
    body: 'A LangChain package that connects cloud Postgres databases to AI — built before MCP existed. Made it for my own struggle wiring an LLM to Postgres and turned it into a library others could pull in.',
    href: 'https://github.com/Mamlesh18/Postcone.ai',
  },
  {
    name: 'RAGFusion.ai',
    meta: 'Python • RAG • DX Library',
    body: 'Switching from one RAG provider to another used to mean rewriting your whole stack — every provider had their own SDK and no shared interface. So I wrote a unified library: change a single provider name string, the entire RAG backend switches.',
    href: 'https://github.com/Mamlesh18/ragfusion.ai',
  },
  {
    name: 'LegalAI',
    meta: 'AI Drafting • Shipped • Sold',
    body: 'Started after watching my aunt struggle to draft legal documents. Built it for her. Got picked up by a US law firm in production. Eventually sold the codebase to VALSCO.',
    href: 'https://github.com/Mamlesh18/LegalAI',
  },
  {
    name: 'VocalQuery.ai',
    meta: 'Voice → SQL • The Spark',
    body: '"Hey, can I know today\'s sales numbers? I need to call." — boom, you have it. Speak natural language, the system writes the SQL and pulls the data. This is the project that pulled me into voice AI for good.',
    href: 'https://github.com/Mamlesh18/vocalquery.ai',
  },
]

export default function Projects() {
  return (
    <section className="band">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        Things I've Aired.
      </motion.h2>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <motion.a
            key={p.name}
            className="project"
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <h3>{p.name}</h3>
            <div className="meta">{p.meta}</div>
            <p>{p.body}</p>
            <span className="repo">
              VIEW REPO <span className="arrow">↗</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
