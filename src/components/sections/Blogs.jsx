import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const BLOGS = [
  {
    id: 'fde',
    date: '2026.05',
    title: 'What is FDE? Forward Deployed Engineer',
    status: 'published',
  },
  {
    id: 'voice-200',
    date: 'soon',
    title: 'Voice AI under 200ms — the whole stack',
    status: 'draft',
  },
  {
    id: 'intern-arc',
    date: 'soon',
    title: '10 internships in 4 years — the playbook',
    status: 'draft',
  },
]

function FdeBlog() {
  return (
    <>
      <h3>
        What is FDE?<br />
        Forward Deployed Engineer.
      </h3>
      <p className="lede">
        The role nobody trained you for in college — and quietly the most leveraged
        seat in a modern AI company.
      </p>
      <p>
        FDE is a combo of{' '}
        <strong>
          Software Engineer + Sales Engineer + Platform Engineer + Consultant
        </strong>{' '}
        — rolled into one person who can ship code, run a demo, integrate a
        customer, and close the deal, all in the same week.
      </p>
      <h4>// How do you become one?</h4>
      <ol>
        <li>
          <strong>Communication matters.</strong> You're the translator between
          customer chaos and engineering precision. Code is half the job —
          explaining it clearly, quickly, in their language is the other half.
        </li>
        <li>
          <strong>Taking ownership matters.</strong> Nobody is going to babysit
          the deal, the deploy, or the demo. The integration that breaks at 2 AM
          is yours. The slides for tomorrow are yours. Own it end-to-end.
        </li>
        <li>
          <strong>Learning every day matters.</strong> The stack changes. The
          customer changes. The product changes. If you stop learning, you stop
          being deployable. Read, build, ship, repeat.
        </li>
      </ol>
    </>
  )
}

function DraftView({ title }) {
  return (
    <div className="blog-draft">
      <div className="big">DRAFT</div>
      <div className="sub">// {title}</div>
      <div className="sub dim">Not yet broadcast — stay tuned.</div>
    </div>
  )
}

function BlogContent({ blog }) {
  if (blog.status === 'published' && blog.id === 'fde') return <FdeBlog />
  return <DraftView title={blog.title} />
}

export default function Blogs() {
  const [activeId, setActiveId] = useState(BLOGS[0].id)
  const active = BLOGS.find((b) => b.id === activeId) || BLOGS[0]

  return (
    <section className="band blogs">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7 }}
      >
        Field Notes.
      </motion.h2>

      <div className="blog-split">
        <aside className="blog-timeline" aria-label="Blog timeline">
          {BLOGS.map((b, i) => (
            <motion.button
              key={b.id}
              type="button"
              className={`tl-entry ${activeId === b.id ? 'on' : ''} ${b.status}`}
              onClick={() => setActiveId(b.id)}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <span className="tl-dot" aria-hidden="true" />
              <span className="tl-date">{b.date}</span>
              <span className="tl-title">{b.title}</span>
              <span className="tl-status">
                {b.status === 'published' ? 'LIVE' : 'DRAFT'}
              </span>
            </motion.button>
          ))}
        </aside>

        <article className="blog-page">
          <div className="blog-head">
            <span>
              FILE / {active.id.toUpperCase()}
              {active.status === 'published' ? ' • LIVE' : ' • DRAFT'}
            </span>
            <span className="slug">{active.date}</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="blog-body"
              initial={{ opacity: 0, x: 24, filter: 'blur(6px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, x: -24, filter: 'blur(6px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <BlogContent blog={active} />
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </section>
  )
}
