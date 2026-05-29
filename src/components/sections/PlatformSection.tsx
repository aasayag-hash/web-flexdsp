'use client'
import { FadeIn } from '@/components/animations/FadeIn'

const platforms = [
  {
    name: 'Linux',
    logo: <LinuxLogo />,
    backends: ['ALSA', 'PipeWire', 'Jack'],
    desc: 'Full native support. Optimal for server and embedded deployments.',
    status: 'stable',
  },
  {
    name: 'macOS',
    logo: <MacLogo />,
    backends: ['CoreAudio', 'BlackHole'],
    desc: 'Native CoreAudio integration. Apple Silicon optimized.',
    status: 'stable',
  },
  {
    name: 'Raspberry Pi',
    logo: <PiLogo />,
    backends: ['ALSA', 'PipeWire'],
    desc: 'ARM-optimized builds for Pi 3/4/5. Perfect for embedded DSP appliances.',
    status: 'stable',
  },
]

const backends = [
  { name: 'ALSA', desc: 'Advanced Linux Sound Architecture', color: 'blue' },
  { name: 'PipeWire', desc: 'Modern Linux audio server', color: 'cyan' },
  { name: 'CoreAudio', desc: 'macOS native audio API', color: 'green' },
  { name: 'WASAPI', desc: 'Windows audio session API', color: 'blue' },
  { name: 'AES67', desc: 'AES67 / Ravenna IP audio', color: 'cyan' },
  { name: 'DANTE', desc: 'Audinate DANTE audio network', color: 'green' },
]

const useCases = [
  {
    title: 'Studio Monitoring',
    desc: 'Apply room correction and speaker linearization for accurate monitoring in untreated rooms.',
    icon: '🎧',
  },
  {
    title: 'Active Crossovers',
    desc: 'Replace passive crossovers with precision digital filters for your multi-way speaker systems.',
    icon: '🔊',
  },
  {
    title: 'Room Correction',
    desc: 'Load convolution IRs from measurement software like REW to correct room acoustics.',
    icon: '🏠',
  },
  {
    title: 'Audiophile Systems',
    desc: 'Build reference-grade audio systems with DSP precision and audiophile-level transparency.',
    icon: '💎',
  },
  {
    title: 'Streaming Audio',
    desc: 'Process audio streams in real-time for broadcast, live streaming, and podcast production.',
    icon: '📡',
  },
  {
    title: 'Multi-room Audio',
    desc: 'Coordinate multi-room speaker systems with synchronized processing and routing.',
    icon: '🏢',
  },
  {
    title: 'Embedded Systems',
    desc: 'Deploy compact DSP appliances on Raspberry Pi and ARM SBCs for always-on processing.',
    icon: '🔧',
  },
  {
    title: 'Pro DSP Research',
    desc: 'Experiment with new filter topologies and signal processing algorithms in a flexible framework.',
    icon: '🧪',
  },
]

export function PlatformSection() {
  return (
    <>
      {/* Platform Support */}
      <section id="platforms" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium tracking-wider uppercase mb-6">
              Compatibility
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
              Runs everywhere
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                you need it
              </span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {platforms.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.10] hover:bg-white/[0.04] transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 text-slate-300 group-hover:text-white transition-colors">
                      {p.logo}
                    </div>
                    <span className="text-xs font-mono text-emerald-400 border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 rounded-full">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">{p.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.backends.map(b => (
                      <span key={b} className="text-xs font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2 py-1 rounded">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Backends grid */}
          <FadeIn>
            <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <h3 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">Supported Audio Backends</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {backends.map(b => (
                  <div key={b.name} className="text-center p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                    <div className={`font-mono font-bold text-sm mb-1 ${
                      b.color === 'blue' ? 'text-blue-400' :
                      b.color === 'cyan' ? 'text-cyan-400' : 'text-emerald-400'
                    }`}>{b.name}</div>
                    <div className="text-xs text-slate-600">{b.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-400 text-xs font-medium tracking-wider uppercase mb-6">
              Use Cases
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight mb-4">
              Built for every
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                audio scenario
              </span>
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((u, i) => (
              <FadeIn key={u.title} delay={i * 0.05}>
                <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.10] hover:bg-white/[0.04] transition-all duration-300 group h-full">
                  <div className="text-2xl mb-3">{u.icon}</div>
                  <h3 className="font-semibold text-white mb-2 text-sm">{u.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{u.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function LinuxLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.277 1.801 1.288 2.914 2.565 3.494 1.158.531 2.453.73 3.71.588 1.363-.154 2.698-.661 3.788-1.403 2.001-1.378 3.29-3.684 3.168-6.173-.11-2.31-.943-4.4-2.41-6.042C14.95 5.527 14.36 4.78 13.94 4.01c-.27-.498-.452-1.011-.466-1.553-.023-.796.396-1.497.932-1.898C14.57.2 14.83 0 14.83 0H12.504zm2.067 2.057c.253-.004.508.072.74.23.36.242.592.617.578 1.035-.015.44-.238.866-.567 1.155-.328.29-.759.417-1.184.385-.425-.033-.834-.219-1.127-.519-.292-.3-.457-.705-.435-1.115.023-.41.226-.8.543-1.063.254-.21.566-.32.875-.327l.577.22zm-5.14.215c.31.004.613.122.861.333.317.263.516.655.536 1.065.02.41-.147.815-.437 1.114-.289.3-.697.484-1.12.516-.422.03-.852-.099-1.178-.39-.327-.29-.545-.714-.558-1.155-.013-.419.22-.795.583-1.036.23-.155.485-.226.739-.226l.574-.221zm2.568 1.72c.43 0 .77.325.77.724 0 .4-.34.724-.77.724-.43 0-.77-.324-.77-.724 0-.4.34-.724.77-.724zm-4.43 4.003c.165-.003.336.035.491.108.487.233.753.794.628 1.31-.174.719-.872 1.19-1.608 1.097-.736-.094-1.278-.712-1.247-1.457.031-.745.613-1.358 1.38-1.457.12-.013.24-.018.356-.001zm8.765.001c.116-.017.236-.012.357.001.766.099 1.348.712 1.38 1.457.03.745-.512 1.363-1.248 1.457-.736.093-1.434-.378-1.607-1.097-.125-.516.14-1.077.628-1.31.155-.073.326-.111.49-.108zm-8.06 4.43c.235 0 .49.062.693.233.29.245.41.634.31.986-.223.8-.87 1.366-1.667 1.458-.795.092-1.565-.324-1.936-1.039-.253-.491-.22-1.09.083-1.551.302-.463.813-.712 1.343-.696.39.011.784.208 1.067.498.086.09.106.111.107.111zm7.355 0c.003 0 .021-.021.107-.111.283-.29.677-.487 1.067-.498.53-.016 1.042.233 1.343.696.303.46.336 1.06.083 1.55-.37.716-1.14 1.132-1.936 1.04-.797-.092-1.444-.659-1.667-1.458-.1-.352.02-.741.31-.986.203-.17.458-.233.693-.233zm-3.678 1.928c1.032 0 1.87.668 1.87 1.492v1.116c0 .824-.838 1.492-1.87 1.492-1.032 0-1.87-.668-1.87-1.492v-1.116c0-.824.838-1.492 1.87-1.492z"/>
    </svg>
  )
}

function MacLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.029 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"/>
    </svg>
  )
}

function PiLogo() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
      <path d="M11.998 0C5.372 0 0 5.372 0 12s5.372 12 11.998 12C18.626 24 24 18.628 24 12S18.626 0 11.998 0zm.002 4.5c1.006 0 1.95.183 2.823.513L12 9.5 9.175 5.013A7.48 7.48 0 0112 4.5zm-4.5 1.5L9.5 12H4.513A7.477 7.477 0 017.5 6zm9 0a7.477 7.477 0 012.987 6H14.5L16.5 6zm-11.5 7.5h5l-2.5 4.33A7.487 7.487 0 015 13.5zm7.5 0h5a7.487 7.487 0 01-2.5 4.33L14.5 13.5zm-4.33 5.67L12 15l1.83 4.17A7.48 7.48 0 0112 19.5a7.48 7.48 0 01-1.83-.33z"/>
    </svg>
  )
}
