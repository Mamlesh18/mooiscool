import { motion } from 'framer-motion'

const BARS = 56

export default function VoiceAI() {
  return (
    <section className="band voice">
      <motion.div
        className="section-tag"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6 }}
      >
        CH 09 // SPECIAL BROADCAST
      </motion.div>

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
      >
        Voice AI<br />
        <span className="accent">Faster Than Sonic.</span>
      </motion.h2>

      <div className="voice-grid">
        <motion.div
          className="voice-copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p>
            I architect <strong className="b">voice AI pipelines</strong> built for
            speed and realism — latency low enough that a human can't tell where the
            machine ends and the conversation begins.
          </p>
          <p>
            From streaming ASR through low-latency LLM inference into expressive TTS,
            the whole stack is tuned end-to-end. <strong className="b">Sub-perceptible
            response times.</strong> Natural turn-taking. Voices that don't sound like
            voicemail.
          </p>
          <p>
            This is the future I want to build — and I'm coming for the lead chair.
            The architecture is just <strong className="b">too cool</strong> to leave
            to anyone else.
          </p>
          <div className="voice-pill">▶ NOW STREAMING — VOICE AI LEAD</div>
        </motion.div>

        <motion.div
          className="waveform"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          {Array.from({ length: BARS }).map((_, i) => (
            <span
              key={i}
              className="bar"
              style={{
                animationDelay: `${(i * 47) % 800}ms`,
                animationDuration: `${0.55 + ((i * 13) % 9) / 10}s`,
                height: `${20 + ((i * 31) % 60)}%`,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
