import { createFileRoute } from "@tanstack/react-router";
import helpingHands from "@/assets/helping-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VYGAA — Extra hands. On demand." },
      {
        name: "description",
        content:
          "VYGAA is launching soon. Book a nearby helping person for lifting, carrying, delivery help and small moving tasks.",
      },
      { property: "og:title", content: "VYGAA — Extra hands. On demand." },
      {
        property: "og:description",
        content: "Book a helping person when you need one. VYGAA is coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream font-body text-stone-800 antialiased">
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
          style={{ background: "var(--gradient-dawn)" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-6 h-[420px] w-[420px] -translate-x-1/2 rounded-full"
          style={{ background: "var(--gradient-halo)" }}
        />

        <header className="relative z-10 flex items-center justify-between py-7">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-[9px] bg-brand font-display text-[15px] font-semibold text-brand-foreground">
              V
            </span>
            <span className="font-display text-lg font-medium tracking-tight text-stone-900">
              VYGAA
            </span>
          </div>
          <span className="text-sm font-medium text-stone-500">Coming soon</span>
        </header>

        <main className="relative z-10 flex flex-1 flex-col items-center justify-center py-10 text-center">

          <h1 className="anim max-w-[24ch] text-balance font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-stone-900 [animation-delay:0.15s] sm:text-6xl md:text-[4.25rem]">
            Need an extra pair of hands?
          </h1>

          <p className="anim mt-6 max-w-[46ch] text-pretty text-base leading-relaxed text-stone-600 [animation-delay:0.25s] sm:text-lg">
            Book a helping person when you need one — lifting, carrying, delivery help and
            small moves. VYGAA is coming soon.
          </p>

          <div className="anim mt-9 flex flex-col items-center gap-3 [animation-delay:0.35s] sm:flex-row sm:gap-4">
            <a
              href="mailto:info@vygaa.com?subject=Join%20the%20VYGAA%20waitlist"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-brand-foreground ring-1 ring-inset ring-brand transition-transform duration-200 hover:-translate-y-0.5"
            >
              Join the Waitlist
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                &#8594;
              </span>
            </a>
            <a
              href="mailto:info@vygaa.com?subject=Become%20a%20VYGAA%20partner"
              className="inline-flex items-center justify-center rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-stone-800 ring-1 ring-black/10 transition-transform duration-200 hover:-translate-y-0.5"
            >
              Become a Partner
            </a>
          </div>

          <figure className="anim mt-12 w-full max-w-md [animation-delay:0.45s]">
            <div
              className="rounded-[20px] bg-card p-2 ring-1 ring-black/5"
              style={{ boxShadow: "var(--shadow-warm)" }}
            >
              <img
                src={helpingHands}
                width={1024}
                height={768}
                alt="One person helping another carry a wooden table on a sunlit street"
                className="aspect-[4/3] w-full rounded-[14px] object-cover"
              />
            </div>
          </figure>
        </main>

        <footer className="relative z-10 flex flex-col items-center gap-3 pb-8 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-[13px] text-stone-500">
            VYGAA — Extra hands. On demand.
          </span>
          <div className="flex items-center gap-5">
            <a
              href="mailto:info@vygaa.com"
              className="text-[13px] font-medium text-stone-600 transition-colors hover:text-brand"
            >
              info@vygaa.com
            </a>
            <span className="text-[13px] text-stone-400">
              © 2026 VYGAA. All rights reserved.
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}
