import type { Template } from "../types";

export const raskinDelphicaTemplate: Template = {
  id: "delphica-raskin-investor",
  name: "Delphica Health — Raskin / Investor",
  description:
    "The Delphica investor throughline. Hero = health-tech specialist seed investor. Promised Land = the world's first living medical journal, built on captured physician tacit knowledge, starting with an unfair Maryland Medicaid wedge no competitor can replicate. Derived from the VJ feedback session (2026-04-27).",
  beats: [
    {
      id: "river",
      name: "The River",
      subtitle: "Name the undeniable shift",
      prompt:
        "What big change in the world is sweeping healthcare forward — right now, unavoidably?",
      options: [
        {
          id: "river-boomer-physician-retirement",
          title:
            "A generation of physicians is retiring — and taking decades of tacit knowledge with them",
          description:
            "Boomer physicians are aging out. Their tacit clinical knowledge — pattern recognition, judgment calls, protocol intuition built over 30+ years — cannot be captured in an article (12–24 months to publish), a book (12–96 months or never), or mentorship (one person at a time). When they retire, the knowledge is gone. Permanently.",
        },
        {
          id: "river-tcoc-mandate",
          title:
            "Total Cost of Care mandates are law in 8 states through December 2035",
          description:
            "Eight states have legislated Total Cost of Care reduction mandates — binding through 2035. This is not a policy trend. It is law. Every health system in those states must demonstrably reduce cost while maintaining or improving outcomes. The regulatory pressure to do more with fewer physician-hours is permanent and escalating.",
        },
        {
          id: "river-ai-governance-being-written",
          title:
            "AI governance frameworks for healthcare are being written right now",
          description:
            "State and federal regulators are drafting the rules for how AI can be used in clinical settings. First movers who are already deployed get grandfathered into these frameworks. Latecomers will have to comply with rules written around the incumbents' architecture.",
        },
        {
          id: "river-llm-clinical-capability",
          title:
            "LLMs can now generate clinically-useful care plans in minutes, not hours",
          description:
            "Large language models crossed the threshold for generating care plans that physicians can meaningfully edit — not replace, but accelerate. 3 minutes from complaint to documented treatment plan vs. 15–20 minutes of manual documentation. The capability is here. The question is who captures the resulting knowledge.",
        },
        {
          id: "river-physician-burnout-crisis",
          title:
            "Physician burnout is a workforce crisis, not a morale problem",
          description:
            "Documentation burden is the #1 cited cause of physician burnout. 2+ hours/day spent on notes and EHR data entry. The burnout isn't optional suffering — it's driving early retirement, reducing clinical capacity, and compounding the knowledge-loss problem.",
        },
      ],
    },
    {
      id: "fork",
      name: "The Fork",
      subtitle: "Winners & losers at the crossroads",
      prompt:
        "Who adapts to the mandate + retirement wave — and who gets left behind?",
      options: [
        {
          id: "fork-knowledge-capture-vs-knowledge-loss",
          title:
            "Systems that capture physician knowledge compound; systems that don't lose it forever",
          description:
            "Every retiring physician is either a permanent knowledge loss or a permanent knowledge asset. Health systems that capture tacit knowledge into living protocols get smarter with every departure. Systems that don't start from zero with every new hire — and the knowledge gap widens every year.",
        },
        {
          id: "fork-first-movers-grandfathered",
          title:
            "First movers get grandfathered into AI governance; latecomers inherit someone else's rules",
          description:
            "The AI governance frameworks being written in 2026 will be shaped by whoever is already deployed. First movers don't just get regulatory advantage — they write the regulatory playbook. Latecomers comply with rules optimized for someone else's architecture.",
        },
        {
          id: "fork-scribes-vs-protocol-execution",
          title:
            "Scribe companies automate documentation; Delphica automates clinical decision-making",
          description:
            "Abridge, Nuance, and the scribe market are competing for documentation speed. None of them capture physician knowledge. None of them execute protocols at the point of care. None of them produce a publishable, peer-reviewed output. Scribes are a feature; protocol execution + knowledge capture is a platform.",
        },
        {
          id: "fork-maryland-insiders-vs-outsiders",
          title:
            "In Maryland, insiders with distribution move first — outsiders spend years building relationships",
          description:
            "Maryland is the only state where the federal government hands the entire Medicaid budget — $5B+ — to a single body. Access to that body is a relationship game measured in decades, not pitch decks. Outsiders can't buy their way in.",
        },
      ],
    },
    {
      id: "promised-land",
      name: "The Promised Land",
      subtitle: "Paint the destination",
      prompt:
        "What does the world look like when physician knowledge stops being lost?",
      options: [
        {
          id: "pl-living-medical-journal",
          title:
            "The world's first living medical journal — peer-reviewed in 10–14 days, not 6–24 months",
          description:
            "Every physician edit at the point of care is captured, attributed, and outcome-tracked. Aggregate across 10,000 MedChi physicians and best practices float to the top automatically. The resulting protocols become peer-reviewed entries in a living journal that iterates in 10–14 days. Traditional journals take 6–24 months. This is medicine's version of continuous deployment.",
        },
        {
          id: "pl-junior-performs-like-senior",
          title:
            "Junior physicians and NPs perform above their experience level — safely",
          description:
            "A senior physician's tacit knowledge drives the protocol. Junior physicians and nurse practitioners execute it at the point of care with that knowledge embedded. They perform above their training level — not by guessing, but by standing on decades of captured expertise. The senior physician is in the background driving the ship.",
        },
        {
          id: "pl-2-hours-back-per-day",
          title:
            "Every physician gets 2+ hours/day back — documentation stops being the job",
          description:
            "3 minutes from complaint to fully documented treatment plan. The physician edits, not writes. Documentation becomes a byproduct of care, not a separate task. 2+ hours/day returns to patient care, reducing burnout and extending careers.",
        },
        {
          id: "pl-tcoc-compliance-built-in",
          title: "Total Cost of Care compliance is a byproduct, not a project",
          description:
            "When every encounter follows an evidence-based, outcome-tracked protocol, cost reduction isn't an initiative — it's an output. Health systems in mandate states hit their targets because the care delivery itself is optimized, not because an admin team is running spreadsheets.",
        },
        {
          id: "pl-knowledge-becomes-asset",
          title:
            "Retiring physicians leave a permanent, growing asset instead of an empty chair",
          description:
            "When Dr. Smith retires after 35 years, her pattern recognition, judgment calls, and protocol intuitions live on — captured, attributed, outcome-tracked, and improving with every new data point. The practice doesn't lose a generation of expertise. It inherits one.",
        },
      ],
    },
    {
      id: "troll",
      name: "The Troll",
      subtitle: "The obstacle on the bridge",
      prompt:
        "What blocks health systems from reaching the Promised Land today?",
      options: [
        {
          id: "troll-knowledge-capture-doesnt-exist",
          title:
            "No tool captures tacit physician knowledge — articles, books, and mentorship all fail at scale",
          description:
            "Article: 12–24 months to publish, reaches a fraction of peers. Book: 12–96 months or never written. Mentorship: one person at a time, dies with the relationship. The sum total of a 35-year career is either lost or captured in fragments that don't compose into actionable protocols.",
        },
        {
          id: "troll-scribes-stop-at-documentation",
          title:
            "Scribe tools document — they don't capture knowledge or execute protocols",
          description:
            "Abridge, Nuance, and the scribe market solve documentation speed. But documentation is not knowledge capture. None of them attribute physician edits. None execute protocols. None feed outcomes back into the protocol. None produce a publishable, peer-reviewed output. They transcribe. Delphica transforms.",
        },
        {
          id: "troll-ehr-is-a-billing-system",
          title: "EHRs are billing systems pretending to be clinical tools",
          description:
            "Epic, Cerner, and the EHR market were built for billing compliance, not clinical decision-making. The data model optimizes for codes and claims, not for capturing why a physician chose one treatment over another. The knowledge is in the physician's head, not in the EHR.",
        },
        {
          id: "troll-no-feedback-loop",
          title:
            "No existing system connects physician decisions to patient outcomes in real time",
          description:
            "The care plan goes into the EHR. The outcome shows up months later in a different system. No one closes the loop. Protocols can't improve if no one measures whether they worked. The journal can't be living if the data is dead.",
        },
        {
          id: "troll-regulatory-inertia",
          title:
            "Health systems are terrified of AI liability — so they do nothing",
          description:
            "The legal and regulatory uncertainty around AI in clinical settings paralyzes decision-makers. 'What if the AI is wrong and we get sued?' So the physician keeps doing 15–20 minutes of documentation per encounter, burns out, retires early, and the knowledge is lost anyway. Inaction is the most expensive option.",
        },
        {
          id: "troll-documentation-industrial-complex",
          title:
            "The Documentation-Industrial Complex — a $200B+ industry that profits from the status quo",
          description:
            "Epic, Cerner, the scribe market, billing middleware — 30 years of health IT infrastructure optimized for one thing: getting paid. Not capturing knowledge. Not improving protocols. Not reducing cost. Every dollar spent on EHRs reinforces the billing-first architecture and widens the knowledge gap. The monster isn't a missing tool — it's an entrenched industry with zero incentive to change.",
        },
        {
          id: "troll-ghost-fleet",
          title:
            "The Ghost Fleet — a growing invisible workforce of lost expertise",
          description:
            "Every year, thousands of senior physicians retire and their expertise evaporates. The monster is the growing shadow workforce of knowledge that no longer exists — pattern recognition, judgment calls, protocol intuitions accumulated over decades, gone. You can't see what you've already lost. But the outcomes data shows it: readmission rates, misdiagnoses, unnecessary procedures. The ghosts are expensive. And the fleet grows every month.",
        },
        {
          id: "troll-15-minute-tax",
          title: "The 15-Minute Tax — a doom loop that feeds itself",
          description:
            "Every physician in America pays 15–20 minutes per encounter to a documentation system that captures nothing of clinical value. Billions of physician-hours per year feeding a machine that produces billing codes, not medical knowledge. The tax causes burnout. Burnout causes early retirement. Early retirement accelerates knowledge loss. The monster feeds itself.",
        },
        {
          id: "troll-epic-is-the-gatekeeper",
          title:
            "Epic is the troll on the bridge — indifferent, not hostile, but immovable",
          description:
            "Epic and Cerner control 90%+ of the EHR market. They built billion-dollar empires on per-bed licensing optimized for billing compliance. They have zero business-model incentive to build knowledge capture — the toll booth is already profitable. They don't block with malice — they block with indifference. And every integration contract health systems sign locks the door tighter.",
        },
        {
          id: "troll-18-month-committee",
          title:
            "The 18-Month Committee — peer review so slow it guarantees knowledge is lost",
          description:
            "Traditional peer review takes 6–24 months. By the time a protocol is 'approved,' the physician who proposed it may have retired. The monster is the institutional review apparatus — so slow it guarantees knowledge is lost before it can be formalized. Not malice, but bureaucratic inertia with the same effect as destruction. Medicine's immune system attacking its own memory.",
        },
      ],
    },
    {
      id: "magic-wand",
      name: "The Magic Wand",
      subtitle: "Your gift to the hero",
      prompt: "What does Delphica bring that lets the hero slay the troll?",
      options: [
        {
          id: "wand-living-journal-engine",
          title:
            "Living Medical Journal + Protocol Execution at the point of care",
          description:
            "Physician sees patient → LLM generates care plan in 3 minutes → physician edits on the fly → every edit is captured, attributed, outcome-tracked → the resulting protocol becomes a peer-reviewed entry in a live journal that iterates in 10–14 days. One product. Four simultaneous outputs: (1) 2+ hours/day back for the physician, (2) tacit knowledge captured before it's lost, (3) a living journal/marketplace asset, (4) TCOC mandate compliance built-in.",
        },
        {
          id: "wand-maryland-medicaid-wedge",
          title:
            "The Maryland Medicaid wedge — unfair distribution no competitor can replicate",
          description:
            "Maryland is the only state where the federal government hands the entire Medicaid budget — $5B+ — to a single body to spend. Dr. Bone sat on the board that decides how. MedChi (10,000 physicians, founded 1799) has signed an MOU with Delphica. This is not a sales pipeline — it's an insider position built over decades.",
        },
        {
          id: "wand-fde-knowledge-capture",
          title:
            "Forward Deployed Engineers — shadowing physicians to codify tacit knowledge",
          description:
            "1–2 people whose only job is to shadow physicians and codify their tacit knowledge into protocols. Capturing knowledge ≠ delivering knowledge — different skillset. This is the $0.5T services-as-software model applied to medicine. Physicians will pay for this if framed right.",
        },
        {
          id: "wand-attribution-engine",
          title:
            "Every physician edit is attributed — best practices float to the top automatically",
          description:
            "When 10,000 physicians make micro-edits to protocols at the point of care, the edits that correlate with better outcomes surface automatically. No committee. No 18-month review cycle. The journal writes itself from the aggregate intelligence of the network.",
        },
        {
          id: "wand-senior-drives-junior-executes",
          title:
            "Senior physician in the background drives the ship; juniors execute above their level",
          description:
            "The protocol carries the senior physician's decades of pattern recognition. The junior physician or NP at the bedside executes it with that knowledge embedded. Safely. Consistently. Without needing the senior to be in the room.",
        },
      ],
    },
    {
      id: "tide",
      name: "The Tide",
      subtitle: "What's coming that forces the hero to act now",
      prompt:
        "What is closing in that makes waiting more dangerous than acting?",
      options: [
        {
          id: "tide-boomer-retirement-wave",
          title:
            "Every month of inaction is another month of irreplaceable physician knowledge lost",
          description:
            "Boomer physicians are retiring now — not in five years, now. Each one takes 30+ years of tacit clinical knowledge with them. There is no archive. There is no backup. Every month without knowledge capture is a permanent, compounding loss to the medical system.",
        },
        {
          id: "tide-ai-governance-window",
          title:
            "AI governance frameworks are being written RIGHT NOW — first movers get grandfathered",
          description:
            "State and federal regulators are drafting clinical AI rules in 2026. The companies already deployed shape the rules. The companies still building will inherit frameworks optimized for the incumbents. This window closes when the rules are published — and it doesn't reopen.",
        },
        {
          id: "tide-2035-mandate-clock",
          title:
            "The TCOC mandate runs through December 2035 — that's the deployment runway",
          description:
            "8 states have binding Total Cost of Care mandates through 2035. That's not a market trend — it's a 9-year guaranteed regulatory tailwind. But the mandates reward early compliance. Health systems that hit targets first get favorable positioning. The clock is counting down, not up.",
        },
        {
          id: "tide-scribe-market-consolidating",
          title:
            "The scribe market is consolidating fast — the 'protocol execution' position is still open",
          description:
            "Abridge, Nuance, and the scribe players are locking up documentation. That market is spoken for. But none of them do protocol execution or knowledge capture. The adjacent, more valuable position is unclaimed. Once a scribe vendor adds a protocol layer, the window to own this category closes.",
        },
        {
          id: "tide-paid-pilot-is-immediate",
          title:
            "Dr. Bone's own practice can sign a paid pilot MOU tomorrow — instant revenue, instant credibility",
          description:
            "Delphica Health is a separate Delaware entity. Dr. Bone's practice signing a paid pilot MOU costs nothing and generates first revenue immediately. Every week without this signed is a week of unnecessary zero-revenue positioning. The credibility of 'we have paying customers' vs. 'we have a prototype' is night and day.",
        },
      ],
    },
    {
      id: "hoard",
      name: "The Hoard",
      subtitle: "Proof the treasure is real",
      prompt: "What evidence convinces the investor this story is true?",
      options: [
        {
          id: "hoard-maryland-insider-position",
          title:
            "Dr. Bone sat on the Maryland Medicaid board — this is insider distribution, not a cold pipeline",
          description:
            "Maryland is the only state where the federal government hands the entire $5B+ Medicaid budget to a single body. Dr. Bone was on that board. He ran MedChi — 10,000 physicians, founded 1799. This is not 'we plan to sell to Maryland.' This is 'we are Maryland.'",
        },
        {
          id: "hoard-medchi-mou",
          title:
            "MedChi has signed an MOU with Delphica — 10,000 physicians, one agreement",
          description:
            "The Maryland State Medical Society (10,000 physicians, founded 1799) has signed an MOU with Delphica. This is distribution — not a letter of intent, not a 'we're in talks.' A signed agreement with the physician network that covers the state.",
        },
        {
          id: "hoard-working-prototype",
          title:
            "Working prototype today — not a roadmap, not a demo, a working product",
          description:
            "The LLM-powered care plan generation is built and functional. 3 minutes from complaint to documented treatment plan with physician edit capture. The technical risk is resolved. What this round funds is distribution, not R&D.",
        },
        {
          id: "hoard-paid-pilot-path",
          title:
            "Paid pilot with Dr. Bone's own practice — first revenue is one signature away",
          description:
            "Delphica Health (Delaware entity) + Dr. Bone's practice = paid pilot MOU. Instant first revenue. Instant credibility. The ask isn't 'fund us to find customers.' It's 'fund us to scale from the customers we already have.'",
        },
        {
          id: "hoard-8-state-mandate",
          title:
            "8 states with binding TCOC mandates through 2035 — the market is legislated into existence",
          description:
            "This is not a TAM estimate. It is law. 8 states must reduce total cost of care. The regulatory tailwind is guaranteed through December 2035. Delphica's product directly serves the mandate. The question for investors is not 'is there a market' but 'who captures it.'",
        },
        {
          id: "hoard-team-credibility",
          title:
            "CMO who ran the state medical society + CTO in seat + CEO search active",
          description:
            "Dr. Bone (CMO): ran MedChi, sat on the Medicaid board, practicing physician. Romeo (CTO): in seat, built the prototype. CEO search active via LinkedIn (healthcare-sales background, has sold into health systems). The team gap is acknowledged and being closed — not hidden.",
        },
        {
          id: "hoard-3-min-vs-15-min",
          title:
            "3 minutes vs. 15–20 minutes per encounter — the ROI is self-evident",
          description:
            "Physicians currently spend 15–20 minutes per encounter on documentation. Delphica reduces that to 3 minutes with a physician-edited, protocol-compliant care plan. That's 2+ hours/day returned to patient care, per physician. At scale across MedChi's 10,000 physicians, the productivity recapture is enormous.",
        },
      ],
    },
  ],
  sequencingNotes: {
    pitchOrder:
      "VJ's recommended order: (1) The wedge — 30 sec, (2) The clock — 30 sec, (3) The product — 60 sec, (4) The proof — 30 sec, (5) The ask — 30 sec, (6) The team — Q&A only. Total: ~3 minutes. Anything longer = you've lost them.",
    noSlides:
      "VJ explicitly said the no-slides verbal pitch was cleaner. Lead with the story. Use the deck only for backup.",
    criticalCuts:
      "NEVER mention: blockchain/on-chain framing (triggers anti-kickback/Stark Law concerns), $60M valuation (mispriced for stage), 6–7 product surfaces (confused investor never invests), scribe comparisons (different market), slide deck in the verbal pitch.",
    askFraming:
      "Closing paid pilot with Dr. Bone's practice + MedChi. Raising $2–3M seed at a defensible valuation. 18-month plan to a quantified milestone (e.g. 10 paying practices in Maryland).",
    seededQAndA: [
      "What about the scribe market? (Triggers: scribes document, Delphica captures knowledge + executes protocols — different category.)",
      "Why Maryland first? (Triggers: only state with block-grant Medicaid + Dr. Bone's board seat + MedChi MOU.)",
      "What's the team gap? (Triggers: CEO search active, CTO needs full-time commitment, FDE model for knowledge capture.)",
      "How does the journal work? (Triggers: physician edits → attributed → outcome-tracked → 10–14 day peer review cycle.)",
      "What about regulatory risk? (Triggers: first movers get grandfathered into AI governance being written now.)",
    ],
  },
};
