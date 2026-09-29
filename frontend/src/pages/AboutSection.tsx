import { motion } from "framer-motion";
import { PageHeader } from "../components/PageHeader";
import { staggerContainer, staggerItem } from "../components/PageTransition";
import { PhotoScroller, ScrollerPhoto } from "../components/PhotoScroller";
import { TeamIcon } from "../components/SectionIcons";

const VALUES = [
  {
    title: "Built for the job seeker",
    description:
      "Every feature starts from one question: does this save a real applicant real time? If it doesn't, it doesn't ship.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "AI that does the tedious part",
    description:
      "Claude handles the repetitive rewriting and research so you can spend your energy on judgment calls only you can make.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "One place, not ten tabs",
    description:
      "Search, CV, cover letters, interview prep, and speaking practice live on a single page so context never gets lost between tools.",
    image:
      "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?auto=format&fit=crop&w=700&q=80",
  },
];

const GALLERY: ScrollerPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=900&q=80",
    alt: "Two colleagues talking across a table",
  },
  {
    src: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=900&q=80",
    alt: "People sitting in front of computer monitors, searching for roles",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    alt: "A group taking notes together at a table",
  },
  {
    src: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=900&q=80",
    alt: "Hands collaborating over a laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80",
    alt: "A person video calling on a laptop from home",
  },
  {
    src: "https://images.unsplash.com/photo-1616587894289-86480e533129?auto=format&fit=crop&w=900&q=80",
    alt: "A person on a video call, practicing what they'll say",
  },
];

const STATS = [
  { value: "9", label: "Job sources indexed" },
  { value: "7", label: "Career tools in one place" },
  { value: "100%", label: "Powered by Claude" },
];

export function AboutSection() {
  return (
    <div className="relative isolate space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <PageHeader
          kicker="About"
          title="Job searching, minus the"
          emphasis="busywork."
          subtitle="JobNeed started from a simple frustration: finding a role shouldn't mean twenty browser tabs, a CV rewritten from scratch every time, and walking into interviews guessing what you'll be asked."
          accent="indigo"
          icon={<TeamIcon />}
        />
        <div className="relative hidden shrink-0 sm:block">
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src="https://plus.unsplash.com/premium_photo-1661288470388-c5006797bdff?auto=format&fit=crop&w=800&q=80"
            alt="A job candidate handing over a resume in an interview"
            className="h-44 w-full rounded-2xl object-cover shadow-lg shadow-gray-900/10 lg:h-40 lg:w-80"
          />
        </div>
      </div>

      <p className="max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        So we built one page that searches nine job boards at once and pairs it with AI that tailors
        your CV, drafts your cover letter, preps you for the actual interview, and helps you practice
        saying it all out loud.
      </p>

      {/* Stats strip */}
      <div className="grid grid-cols-3 divide-x divide-gray-200 rounded-2xl border border-gray-200 bg-white/70 py-6 text-center shadow-sm dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900/60">
        {STATS.map((s) => (
          <div key={s.label} className="px-2">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text font-heading text-3xl font-bold text-transparent sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Values, each with its own image */}
      <div className="space-y-5">
        <div className="space-y-1.5">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            What we believe
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-3xl">
            Three ideas behind every feature.
          </h2>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-3"
        >
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="h-40 overflow-hidden">
                <img
                  src={v.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1.5 p-5">
                <h3 className="font-heading text-lg font-bold text-gray-900 dark:text-gray-50">{v.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gallery */}
      <div className="space-y-4">
        <div className="space-y-1.5">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            Gallery
          </span>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-gray-950 dark:text-gray-50 sm:text-3xl">
            The kind of work we're building for.
          </h2>
        </div>
        <PhotoScroller photos={GALLERY} />
      </div>

      {/* CTA */}
      <div className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-violet-50/60 p-8 text-center shadow-sm dark:border-indigo-500/10 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 sm:p-12">
        <div
          className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-[0.08]"
          style={{
            backgroundImage: "radial-gradient(rgba(99,102,241,0.35) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative space-y-4">
          <p className="font-heading text-xl font-semibold text-gray-800 dark:text-gray-200 sm:text-2xl">
            Ready to search once and prepare everywhere?
          </p>
          <a
            href="#search"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-indigo-600/25 transition-transform hover:brightness-110 active:scale-[0.98]"
          >
            Start searching
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
