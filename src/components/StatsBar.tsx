import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_CONTENT } from '../data/lawFirmConfig';

function AnimatedNumber({ value, duration = 1.8 }: { value: number; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Easing out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeProgress * end);
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

export function StatsBar() {
  return (
    <section id="estatisticas" className="relative z-20 bg-[#0e1017] border-y border-[#20232e]">
      {/* 
        ========================================================================
        📊 BARRA DE ESTATÍSTICAS E MÉTRICAS
        ========================================================================
        💡 PROGRAMADOR: Para alterar estes números (ex: patrimônio defendido,
        anos de fundação, clientes atendidos), edite `STATS_CONTENT` no arquivo:
        `src/data/lawFirmConfig.ts`.
      */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#222532]">
          {STATS_CONTENT.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center sm:items-start lg:px-8 first:lg:pl-0 last:lg:pr-0 text-center sm:text-left"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fcfbf7] tabular-nums tracking-tight flex items-baseline">
                {stat.prefix && <span className="text-[#dec388] text-2xl sm:text-3xl font-serif mr-0.5">{stat.prefix}</span>}
                <AnimatedNumber value={stat.value} />
                {stat.suffix && <span className="text-[#dec388] text-2xl sm:text-3xl ml-0.5">{stat.suffix}</span>}
              </div>

              <div className="mt-2 text-sm font-semibold text-[#e0e3eb] tracking-wide">
                {stat.label}
              </div>

              <div className="mt-1 text-xs text-[#8d93a7] leading-relaxed max-w-xs">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
