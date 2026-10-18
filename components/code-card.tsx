"use client"

import { motion } from "framer-motion";

type Token = { t: string; c?: string };

const K = "text-pink-400";      // keywords
const P = "text-sky-300";       // properties
const S = "text-emerald-300";   // strings
const N = "text-yellow-500";    // numbers / accents
const M = "text-slate-500";     // muted / punctuation

const lines: Token[][] = [
    [{ t: "const ", c: K }, { t: "marcos", c: N }, { t: " = {", c: M }],
    [{ t: "  rol", c: P }, { t: ": ", c: M }, { t: '"Full Stack Developer"', c: S }, { t: ",", c: M }],
    [{ t: "  base", c: P }, { t: ": ", c: M }, { t: '"Rosario, Argentina"', c: S }, { t: ",", c: M }],
    [{ t: "  frontend", c: P }, { t: ": [", c: M }, { t: '"React"', c: S }, { t: ", ", c: M }, { t: '"TypeScript"', c: S }, { t: ", ", c: M }, { t: '"Vite"', c: S }, { t: "],", c: M }],
    [{ t: "  backend", c: P }, { t: ": [", c: M }, { t: '"Node.js"', c: S }, { t: ", ", c: M }, { t: '"AdonisJS"', c: S }, { t: "],", c: M }],
    [{ t: "  db", c: P }, { t: ": [", c: M }, { t: '"MySQL"', c: S }, { t: ", ", c: M }, { t: '"MongoDB"', c: S }, { t: "],", c: M }],
    [{ t: "  experiencia", c: P }, { t: ": ", c: M }, { t: '"desde 2023"', c: S }, { t: ",", c: M }],
    [{ t: "  disponible", c: P }, { t: ": ", c: M }, { t: "true", c: K }, { t: ",", c: M }],
    [{ t: "};", c: M }],
];

const CodeCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="hidden md:block w-[420px] lg:w-[460px] shrink-0 rounded-2xl border border-white/10 bg-darkBg/90 shadow-2xl shadow-indigo-900/40 backdrop-blur"
            aria-hidden="true"
        >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
                <span className="ml-3 text-xs text-slate-400 font-mono">marcos.ts</span>
            </div>
            <pre className="px-5 py-5 overflow-hidden font-mono text-[13px] lg:text-sm leading-7">
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                        className="flex"
                    >
                        <span className="w-6 mr-4 text-right select-none text-slate-600">{i + 1}</span>
                        <code>
                            {line.map((tok, j) => (
                                <span key={j} className={tok.c}>{tok.t}</span>
                            ))}
                            {i === lines.length - 1 && (
                                <span className="inline-block w-2 h-4 ml-1 align-middle bg-yellow-500 animate-pulse" />
                            )}
                        </code>
                    </motion.div>
                ))}
            </pre>
        </motion.div>
    );
}

export default CodeCard;
