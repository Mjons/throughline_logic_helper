import type { Template } from "../types";

export const delphicaEnterpriseTemplate: Template = {
  id: "delphica-enterprise-investor",
  name: "Delphica / AMBJ — Enterprise Investor",
  description:
    "The enterprise investor throughline. Hero = the VC/seed investor. CMS's AHEAD Model made provider-led cost reduction a regulatory mandate across eight states — and growing through 2035. Delphica is the clinical decision infrastructure these providers are now contractually required to have. $689M net Medicare savings proven in Maryland TCOC. $18M first enterprise deal. $900M fully penetrated 50-state market.",
  beats: [
    {
      id: "river",
      name: "The River",
      subtitle: "Name the undeniable shift",
      prompt:
        "What big change in the world is sweeping us forward — right now, unavoidably?",
      options: [
        {
          id: "river-ahead-regulatory-mandate",
          title:
            "A regulatory river now flows through eight states, and compounds for a decade",
          description:
            "CMS's AHEAD Model — a multi-state program that contractually requires providers to reduce costs — makes provider-led cost reduction a regulatory mandate across eight states, and growing. AHEAD now includes Maryland (Cohort 1), Connecticut, Hawaii, and Vermont (Cohort 2), and Rhode Island and New York (Cohort 3) — and runs through December 31, 2035. CMS will offer up to two additional states the opportunity to join in July 2026. The model's predecessor in Maryland — the TCOC Model — proved the thesis: net savings to Medicare of $689 million, with hospital spending reduced by 6.6 percent. This is structural demand, not aspirational demand. Delphica delivers exactly the clinical decision infrastructure these providers need to hit mandatory cost-of-care targets without sacrificing quality.",
          chosen: true,
          spokenLine:
            "CMS's AHEAD Model contractually requires providers in eight states to reduce costs — not incentivizes, requires. Maryland's predecessor proved $689 million in net Medicare savings. The program runs through 2035 and is adding states. This is structural demand for exactly the clinical decision infrastructure we build.",
        },
        {
          id: "river-17-year-gap",
          title:
            "Medical knowledge takes 17 years to reach the bedside — and the journals that carry it are static artifacts",
          description:
            "The gap between medical discovery and clinical practice is 17 years. Traditional journals publish once and never update. Physician-authored protocols — the actual bedside knowledge that works — die when doctors retire. The knowledge pipeline is broken at the delivery layer, not the research layer.",
          chosen: false,
          rejectedBecause:
            "Powerful stat and still used throughout the pitch, but the AHEAD regulatory mandate is a stronger river because it's structural demand with a decade-long runway. The 17-year stat is the supporting proof — the AHEAD mandate is the actual force sweeping the market.",
        },
        {
          id: "river-ai-healthcare-convergence",
          title:
            "AI and blockchain are converging in healthcare — but nobody has built the journal layer",
          description:
            "AI documentation tools (ambient scribes, ChatGPT) are shipping fast. Blockchain provenance is proven. But no one has combined them into a continuously-updated, physician-attributable medical journal. The infrastructure arrived. The journal didn't.",
          chosen: false,
          rejectedBecause:
            "True but too abstract for the room. The AHEAD mandate is the river — regulatory, structural, decade-long. This is context, not the undeniable shift.",
        },
        {
          id: "river-enterprise-healthcare-shift",
          title:
            "Healthcare is moving to enterprise-purchased tools, not individual SaaS",
          description:
            "The Scotiabank/Dialogue model — employer buys for 100K employees, pushes adoption — is now the dominant pattern in healthcare technology. Individual physician sales is dying. State associations and insurance companies are the buyers.",
          chosen: false,
          rejectedBecause:
            "This is the GTM insight, not the river. Lives inside the magic wand as the enterprise distribution model.",
        },
        {
          id: "river-physician-protocols-dying",
          title:
            "A generation of physicians is retiring and their protocols are disappearing with them",
          description:
            "Baby boomer physicians are retiring at record pace. Each one takes decades of bedside-refined protocols — what actually works for this patient population, this condition, this drug interaction — and it vanishes. There is no durable record.",
          chosen: false,
          rejectedBecause:
            "Moved to the Fork as the chosen option. The retirement wave is the fork's stakes — who captures and who loses. The AHEAD mandate is the river.",
        },
      ],
    },
    {
      id: "gap",
      name: "The Gap",
      subtitle: "What the shift didn't finish",
      prompt:
        "With the river moving, what is still conspicuously unsolved — the thing the shift stopped short of delivering?",
      options: [
        {
          id: "gap-no-journal-captures-protocols",
          title:
            "Hundreds of journals exist. None preserve a physician's life's work.",
          description:
            "Harvard. NEJM. JAMA. The Lancet. They publish academic research. None of them capture what a practicing physician actually does at the bedside — the protocol they refined over thirty years for managing a specific condition. When that physician retires, the protocol dies. The journal category that should preserve it doesn't exist. The category: peer-reviewed bedside protocols — continuously updated, physician-attributable, on-chain. Not research. Not guidelines. Not AI-generated suggestions. The working knowledge of a career, captured as a durable, citeable, legacy artifact.",
          chosen: true,
          spokenLine:
            "There are hundreds of medical journals. None of them capture what a physician actually does at the bedside. When a doctor retires, their protocols — thirty years of refined clinical knowledge — disappear. The category that should preserve it doesn't exist. Not research. Not guidelines. Not AI-generated suggestions. The working knowledge of a career.",
        },
        {
          id: "gap-blockchain-healthcare-today-wrong-category",
          title:
            "'Blockchain in Healthcare Today' exists — but it archives research, not practice",
          description:
            "The world's first peer-reviewed open access journal on distributed ledger research in healthcare launched in 2017. It archives clinical trials data around DLT — not physician-authored patient protocols. It's about academic research, not practicing physicians solidifying what works at the bedside. The category is open.",
          chosen: false,
          rejectedBecause:
            "Important competitive-landscape evidence but too narrow as the gap. Used as supporting proof that the journal category is open — nobody else is doing this.",
        },
        {
          id: "gap-ai-tools-generate-dont-preserve",
          title:
            "AI documentation tools generate notes — they don't preserve protocols",
          description:
            "ChatGPT, ambient scribes, and AI co-pilots help physicians document faster. None of them create a durable, attributable, peer-reviewed record of the protocol itself. The documentation layer arrived. The preservation layer didn't.",
          chosen: false,
          rejectedBecause:
            "One face of the gap. Folds into the troll as 'competing with ChatGPT is a losing frame — we're competing with journals.'",
        },
        {
          id: "gap-individual-sales-doesnt-scale",
          title:
            "Door-to-door physician sales is a $2K/seat grind with no path to venture scale",
          description:
            "The current GTM (sell $2,000/year licenses to 9,000 physicians individually) requires hiring salespeople, cold outreach, slow conversion, high CAC. It works at the math level but not at the scaling level. Enterprise wholesale is the gap.",
          chosen: false,
          rejectedBecause:
            "This is a GTM gap, not a market gap. Lives in the magic wand as the enterprise pivot. Don't lead with internal strategy — lead with what the market is missing.",
        },
      ],
    },
    {
      id: "fork",
      name: "The Fork",
      subtitle: "Winners & losers at the crossroads",
      prompt: "Who adapts to the new river — and who gets left behind?",
      options: [
        {
          id: "fork-protocols-preserved-or-lost",
          title:
            "Protocols are either captured now — or lost with the boomer retirement wave",
          description:
            "This is a one-time window. The generation of physicians with the deepest bedside knowledge is retiring. Their protocols either get captured into a durable system, or they're gone. There is no second chance. The institutional memory of American medicine is walking out the door — and nobody is holding a camera.",
          chosen: true,
          spokenLine:
            "This is a one-time window. The generation of physicians with the deepest bedside knowledge is retiring. Their protocols either get captured now, or they're gone. There is no second chance. The institutional memory of American medicine is walking out the door — and nobody is holding a camera.",
        },
        {
          id: "fork-living-journals-vs-static",
          title:
            "Journals that update continuously win the next decade. Static publications become archives.",
          description:
            "The journals that capture living, continuously-updated protocols — peer-reviewed but never frozen — become the standard of care. NEJM, JAMA, and the rest become historical archives of point-in-time research. The living journal category is forming now. First mover owns it.",
          chosen: false,
          rejectedBecause:
            "Structurally sound but the boomer retirement fork is more visceral and more urgent. The living-vs-static framing supports the Promised Land instead.",
        },
        {
          id: "fork-enterprise-vs-door-to-door",
          title:
            "Enterprise wholesale wins. Door-to-door physician sales dies.",
          description:
            "The Scotiabank/Dialogue model — company buys for everyone, pushes adoption — beats the individual-subscription model every time in healthcare. State medical associations have the budget ($6B in Maryland alone). Door-to-door sales to 9,000 physicians is the losing play.",
          chosen: false,
          rejectedBecause:
            "True and sharp but this is GTM strategy, not a market-level fork. Better inside the magic wand as the enterprise distribution wall.",
        },
        {
          id: "fork-ai-tools-commoditize",
          title:
            "AI documentation tools commoditize — the durable layer is attribution and provenance",
          description:
            "ChatGPT, ambient scribes, AI co-pilots — all converging on the same functionality. The moat isn't the AI. The moat is the journal: who owns the durable, attributable, peer-reviewed record of what physicians actually do.",
          chosen: false,
          rejectedBecause:
            "Supporting evidence for the fork but too abstract. The boomer retirement framing is sharper for an investor audience.",
        },
      ],
    },
    {
      id: "promised-land",
      name: "The Promised Land",
      subtitle: "Paint the destination",
      prompt: "What is the desirable, worth-the-journey end state?",
      options: [
        {
          id: "pl-ambj-first-state-deal",
          title:
            "The first American medical journal on-chain — sold wholesale to state medical associations, starting with Maryland",
          description:
            "One enterprise deal with MedChi = $18M (9,000 physicians × $2,000, which is 0.3% of the state's $6B medical budget). 50 states = ~$900M fully penetrated. The journal updates continuously, compresses the seventeen-year knowledge gap to three, and preserves every physician's protocols as a durable legacy. Maryland first. Fifty states is the market.",
          chosen: true,
          spokenLine:
            "We're building the first American medical journal on-chain. We sell it wholesale to state medical associations — not door-to-door to individual physicians. One deal with Maryland's MedChi: $18M, covering all 9,000 of their physicians. That's 0.3% of their budget. Maryland first. Fifty states is the market.",
        },
        {
          id: "pl-17-to-3-years",
          title: "Medical knowledge reaches the bedside in 3 years, not 17",
          description:
            "A continuously-updated, peer-reviewed journal that captures what physicians actually do — and updates as outcomes come in. The 17-year gap between discovery and practice drops to ~3 years. 5× faster medical knowledge deployment. That's the investor headline.",
          chosen: false,
          rejectedBecause:
            "The strongest supporting stat but not the promised land itself. The promised land is the journal + the enterprise deal. The 17-to-3 stat lives in the river and the spoken line as proof.",
        },
        {
          id: "pl-physician-legacy-preserved",
          title:
            "Every physician's bedside knowledge becomes a permanent, attributable record",
          description:
            "When a physician retires, their protocols don't die. They're preserved on-chain, peer-reviewed, continuously updated by the community, and attributable to the original author forever. A physician's legacy outlives their career.",
          chosen: false,
          rejectedBecause:
            "Emotional and true — but this is the 'why physicians care,' not the 'why investors invest.' For an investor throughline, the $18M deal and 50-state math is the promised land.",
        },
        {
          id: "pl-500m-exit",
          title:
            "A $300–500M exit built on state medical association contracts",
          description:
            "State-by-state enterprise deals that scale to a couple hundred million dollars in annual revenue. Clear path to $3–5M Series A, then national expansion with EHR integrations.",
          chosen: false,
          rejectedBecause:
            "Investor-legible but trades identity for abstraction. The journal + first-state-deal framing is more vivid and unique. Exit math lives in the hoard as supporting evidence.",
        },
      ],
    },
    {
      id: "troll",
      name: "The Troll",
      subtitle: "The obstacle on the bridge",
      prompt: "What blocks people from reaching the Promised Land today?",
      options: [
        {
          id: "troll-wrong-frame-wrong-sales",
          title: "A composite troll. Three faces. All solved by the same move.",
          description:
            "The current pitch loses because it fights the wrong battle. Delphica doesn't compete with ChatGPT or ambient scribes. It competes with NEJM and JAMA — and wins by being the journal they aren't. Face 1: Wrong competitive frame — pitching against ChatGPT and ambient scribes is a losing game. The real competition is NEJM and JAMA — a category with permanent shelf-space in medicine. Face 2: Wrong sales model — door-to-door SaaS to individual physicians is slow, expensive, and doesn't scale. Enterprise wholesale to the state association does both. Face 3: Invisible legacy problem — physician-authored protocols have no preservation mechanism. The problem stays invisible — until the physician is gone, and then it's too late.",
          chosen: true,
          spokenLine:
            "Three things have blocked this. First, everyone frames clinical AI as competing with ChatGPT — wrong fight. We compete with medical journals, and we win by being the journal they aren't. Second, door-to-door SaaS to physicians is a grind, not a business. Enterprise wholesale solves it. Third, the protocol-death problem is invisible until the physician is gone — and then it's too late.",
        },
        {
          id: "troll-blockchain-scares-physicians",
          title:
            "The word 'blockchain' scares away every physician in the room",
          description:
            "Physicians hear 'blockchain' and think crypto speculation, not provenance infrastructure. The technology is invisible to the user — but the framing isn't. Every pitch that leads with blockchain loses the clinical audience.",
          chosen: false,
          rejectedBecause:
            "Real and important — this is why we say 'provenance records' and never say 'NFT.' But it's a messaging fix, not the troll. Lives as a wall inside the wand (blockchain invisible).",
        },
        {
          id: "troll-door-to-door-grind",
          title:
            "Door-to-door sales to 9,000 physicians is a grind with no path to venture scale",
          description:
            "Hiring salespeople, cold outreach, converting one physician at a time at $2,000/year. High CAC, slow conversion, no network effects. Investors see this and pass.",
          chosen: false,
          rejectedBecause:
            "One face of the composite troll. Sharp but lives inside the chosen framing.",
        },
        {
          id: "troll-competing-with-chatgpt",
          title: "Competing with ChatGPT / ambient scribes is a losing frame",
          description:
            "If investors hear 'AI documentation tool,' they compare you to ChatGPT, Nuance DAX, Abridge, and a dozen funded competitors. The journal frame moves you into a category with no competitors — 'Blockchain in Healthcare Today' does research, not protocols. The competitive landscape is empty.",
          chosen: false,
          rejectedBecause:
            "One face of the composite troll. The reframe from AI-tool to journal is the core strategic pivot.",
        },
        {
          id: "troll-legacy-invisible",
          title:
            "The protocol-death problem is invisible until the physician is gone",
          description:
            "Nobody notices the loss until the doctor retires and their colleagues realize the protocol that worked is gone. It's not a crisis anyone is shouting about — it's a slow, silent erasure of clinical knowledge. Hard to sell urgency on an invisible problem.",
          chosen: false,
          rejectedBecause:
            "One face of the composite troll. Lives inside the chosen framing as face #3.",
        },
      ],
    },
    {
      id: "magic-wand",
      name: "The Magic Wand",
      subtitle: "Your gift to the hero",
      prompt: "What do YOU bring that lets the hero slay the troll?",
      options: [
        {
          id: "wand-ambj-enterprise-platform",
          title: "Six walls. A twenty-year distribution moat.",
          description:
            "Enterprise-delivered. AI-powered. Blockchain-invisible. Each wall reinforces the others — and none of them are easily replicable by a competitor starting today. (1) The Journal Itself — continuously-updated, peer-reviewed, physician-attributable clinical protocols. First in category. A permanent shelf next to NEJM and JAMA. (2) Enterprise Wholesale — sell to the state medical association, not the physician. One deal covers thousands. The Scotiabank/Dialogue playbook — applied to American medicine. (3) AI Co-pilot + Delphi-2M — the adoption driver. Delphi-2M is peer-reviewed (400K UK Biobank records, validated on 1.9M Danish patients — EMBL-EBI / University of Copenhagen, 2025). Not a homegrown claim. (4) Digital Review Board — the journal's editorial board. Credentialed physicians reviewing on five criteria, paid a flat fee per review to eliminate approval bias. Peer review reframed. (5) Blockchain Invisible — provenance records, never NFTs. Users never see the chain. It's how we organize files and guarantee attribution — nothing more, nothing less. (6) Dr. Bone — Keymaster. Past president of MedChi (2006). NIH researcher. Seven years on the Maryland Hospital Cost Review Commission. Twenty years of relationships open the meeting.",
          chosen: true,
          spokenLine:
            "Six walls. The journal itself — first in category. Enterprise wholesale — one deal, $18M, covers all 9,000 physicians. AI co-pilot plus Delphi-2M — peer-reviewed on 400K Biobank records, validated on 1.9 million Danish patients. Digital Review Board — the editorial board, not open-access slop. Blockchain invisible — provenance records, never NFTs. And Dr. Bone — the keymaster. Twenty years of MedChi relationships open the meeting. A twenty-year distribution moat.",
        },
        {
          id: "wand-journal-reframe",
          title:
            "Reframe: from 'protocol marketplace' to 'medical journal on blockchain'",
          description:
            "Dr. Bone kept calling protocols 'minted journals.' That's what this is. Every physician understands what a medical journal is — they've been reading them their whole career. 'Blockchain marketplace' requires explanation. 'Medical journal' doesn't. Familiar framing, unfamiliar capability.",
          chosen: false,
          rejectedBecause:
            "The strategic insight behind the wand, not the wand itself. Lives as the naming rationale inside the chosen wand.",
        },
        {
          id: "wand-enterprise-wholesale",
          title:
            "Enterprise wholesale distribution — the Scotiabank/Dialogue model for medicine",
          description:
            "Don't sell to the physician. Sell to the association. MedChi has $6B in state-managed budget. 9,000 doctors × $2,000 = $18M. That's 0.3% of their budget. The association pays, we implement and train. Conferences become onboarding events (500–1,000 physicians per event), not sales events.",
          chosen: false,
          rejectedBecause:
            "Wall #2 inside the chosen wand. Strongest GTM insight but needs the journal + AI + DRB + Dr. Bone context to be a full wand.",
        },
        {
          id: "wand-delphi-2m-intelligence",
          title: "Delphi-2M risk engine + AI co-pilot — the intelligence loop",
          description:
            "INTERPRET layer: AI documentation co-pilot handles notes. Delphi-2M flags risks across the protocol corpus — peer-reviewed, 400K UK Biobank records, validated on 1.9M Danish patients (EMBL-EBI / University of Copenhagen, 2025). Not a homegrown claim. The intelligence loop makes the journal smarter every time a physician publishes. The journal is the moat; the AI is the adoption driver.",
          chosen: false,
          rejectedBecause:
            "Wall #3 inside the chosen wand. The AI is the adoption driver, not the headline.",
        },
        {
          id: "wand-blockchain-invisible",
          title: "Blockchain invisible — 'provenance records,' never 'NFTs'",
          description:
            "Base L2, ERC-721 provenance, HIPAA-compliant architecture. Users never see it. It's how we organize files, track updates, and guarantee attribution — nothing more, nothing less. Call it provenance records. Never say blockchain in the sales room. Never say NFT anywhere.",
          chosen: false,
          rejectedBecause:
            "Wall #5 inside the chosen wand. Critical credibility piece but not the headline.",
        },
        {
          id: "wand-dr-bone-keymaster",
          title:
            "Dr. Bone — Keymaster. Twenty years of relationships open the meeting.",
          description:
            "Past president of MedChi (2006). NIH researcher. Seven years on the Maryland Hospital Cost Review Commission. The MOU exists because of twenty years of relationships, not because of a pitch deck. For the next 3–5 state deals, Dr. Bone is the keymaster — his credibility is the reason the meeting happens. This is a distribution moat, not just team credibility.",
          chosen: false,
          rejectedBecause:
            "Wall #6 inside the chosen wand. Also lives in the team slide — but structurally it's a moat wall, not just a bio.",
        },
      ],
    },
    {
      id: "tide",
      name: "The Tide",
      subtitle: "Forcing function",
      prompt:
        "What is closing in that makes waiting more dangerous than acting?",
      options: [
        {
          id: "tide-medchi-mou-window",
          title: "The MedChi MOU is live. The window is now.",
          description:
            "MedChi (Maryland, est. 1799, 9,000 physicians) signed an MOU. Converting that to a paid enterprise contract is the next milestone. MOUs have a shelf life — associations move on, champions retire, priorities shift, new board chairs arrive with their own agendas. The longer we wait, the colder the hand-off gets. In parallel, healthcare AI governance is being written in 2026 — FDA, state-level AI rules, HIPAA guidance, all actively updating. First movers with peer-reviewed, provenance-anchored architectures get grandfathered into favorable positioning.",
          chosen: true,
          spokenLine:
            "The MedChi MOU is live. MOUs don't stay warm forever — associations move on, champions retire, priorities shift. Convert now or lose the hand-off. Meanwhile, healthcare AI governance is being written this year. First movers with peer-reviewed, provenance-anchored architectures get grandfathered in.",
        },
        {
          id: "tide-ahead-cohort-4",
          title:
            "AHEAD Cohort 4 — CMS opens up to two additional states in July 2026",
          description:
            "The AHEAD model is actively expanding. July 2026: CMS offers up to two more states. Each new AHEAD state is a new enterprise prospect with the same regulatory mandate. The distribution moat compounds with each cohort.",
        },
        {
          id: "tide-boomer-retirement-wave",
          title:
            "The boomer physician retirement wave is a one-time capture window",
          description:
            "The generation with the deepest bedside knowledge is retiring now. Their protocols either get captured into a durable system in the next 5–10 years or they're gone permanently. There is no second chance to preserve this knowledge.",
        },
        {
          id: "tide-ai-governance-first-mover",
          title:
            "Healthcare AI governance is being written right now — first movers get grandfathered",
          description:
            "FDA, state-level AI regulation, and HIPAA guidance are all actively updating in 2026. Systems with built-in peer review and audit trails are the positive example regulators will point to. Being the reference implementation when the rules firm up is worth more than any marketing spend.",
        },
        {
          id: "tide-ahead-runway-2035",
          title:
            "AHEAD runs through December 31, 2035 — a decade-long distribution moat",
          description:
            "The AHEAD program isn't a pilot. It runs through 2035. Eight states and growing. Every provider in these states is contractually required to have cost-reduction infrastructure for the next decade. An 18-month lead converts into a ten-year distribution moat.",
        },
        {
          id: "tide-insurance-angle-opening",
          title:
            "Insurance companies are a second revenue stream — and they're listening now",
          description:
            "If peer-reviewed protocols reduce malpractice exposure and improve outcomes, insurance companies have every incentive to license them. This is a separate pitch, separate buyer, separate revenue. But the window to prove it is tied to the MedChi pilot — outcomes data from the first enterprise deal unlocks the insurance conversation.",
        },
      ],
    },
    {
      id: "hoard",
      name: "The Hoard",
      subtitle: "Proof the treasure is real",
      prompt: "What evidence convinces the hero that this story is true?",
      options: [
        {
          id: "hoard-medchi-mou-and-math",
          title: "The MedChi MOU. The math. The river is already flowing.",
          description:
            "MedChi — founded 1799, Maryland, 9,000 physicians — signed an MOU. The enterprise deal math: 9,000 × $2,000 = $18M. Maryland's state medical budget is $6B. The deal is 0.3% of the budget. No one writes a check more frivolously than a government organization — and this is a rounding error. The TCOC predecessor proved $689 million in net Medicare savings. The math is the headline proof. The MOU is the mechanism. Dr. Bone is the keymaster. The river is already flowing.",
          chosen: true,
          spokenLine:
            "MedChi signed an MOU. 9,000 physicians times $2,000 equals $18M — 0.3% of the state budget. A rounding error. Maryland's TCOC predecessor already proved $689 million in net Medicare savings. The math is the proof. The MOU is the mechanism. Dr. Bone is the keymaster. Maryland first. Fifty states is the market.",
          permissionBoundary:
            "Only state the MOU exists. Do not claim the $18M deal is signed. The milestone is converting the MOU to a paid enterprise contract.",
        },
        {
          id: "hoard-689m-tcoc-savings",
          title:
            "$689M net Medicare savings — the TCOC model already proved the thesis in Maryland",
          description:
            "Not hypothetical. The TCOC model's most recent evaluation found net savings to Medicare of $689 million, with hospital spending reduced by 6.6 percent — a $781 million reduction in the first three years alone. The state already funds cost-saving infrastructure. AMBJ directly serves this mandate at 0.3% of the budget. Government/association buyers in this specific market write checks for this specific problem.",
          chosen: false,
          rejectedBecause:
            "Strongest supporting stat — folded into the chosen hoard. Worth surfacing explicitly when the 'why would they pay?' question lands.",
        },
        {
          id: "hoard-50-state-tam",
          title: "50 states × ~$18M = ~$900M fully penetrated TAM",
          description:
            "If the Maryland model replicates across all 50 states, the market is approximately $900M. Even partial penetration (5 states) = $90M. This is a venture-scale TAM built on enterprise contracts, not individual SaaS subscriptions. AHEAD already covers eight states with a decade-long runway.",
          chosen: false,
          rejectedBecause:
            "Strongest supporting math but derives from the MedChi proof. Lives as the 'and there are 50 states' kicker inside the chosen hoard.",
        },
        {
          id: "hoard-dr-bone-credibility",
          title:
            "Dr. Bone — MedChi past president, NIH, hospital cost review commission",
          description:
            "The clinical face of the product is a past president of MedChi, NIH-affiliated, and sat on the Maryland Hospital Cost Review Commission for seven years. He's the reason the MOU exists. His credibility is the reason state associations take the meeting.",
          chosen: false,
          rejectedBecause:
            "Team credibility evidence. Also wall #6 in the wand. Lives in the team slide and as supporting context for the MOU, not as the headline hoard.",
        },
        {
          id: "hoard-delphi-2m-published-research",
          title:
            "Delphi-2M is peer-reviewed published research — not a homegrown model claim",
          description:
            "GPT-style transformer trained on 400,000 UK Biobank records. Validated without parameter changes on ~1.9 million Danish patients (cross-system validation). EMBL-EBI, DKFZ, University of Copenhagen — published September 2025. Independently verifiable. Not a startup benchmark we ran ourselves.",
          chosen: false,
          rejectedBecause:
            "Essential for avoiding the 'is this just marketing?' investor reaction. Belongs in Hoard alongside MedChi MOU — science credibility paired with distribution credibility.",
        },
        {
          id: "hoard-category-empty",
          title:
            "The competitive landscape is empty — no journal captures physician protocols",
          description:
            "'Blockchain in Healthcare Today' (2017) archives clinical trials research on DLT. It doesn't capture physician-authored patient protocols. NEJM, JAMA, Lancet — academic research journals. None of them do what AMBJ does. The category is open.",
          chosen: false,
          rejectedBecause:
            "Important defensive evidence. Best as a seeded Q&A trigger — 'isn't this already done?' — rather than the headline hoard.",
        },
        {
          id: "hoard-working-prototype",
          title: "Working prototype — Delphi-2M, AI co-pilot, DRB pipeline",
          description:
            "The intelligence loop, documentation co-pilot, and Digital Review Board are built and working. The product exists. The question is distribution, not engineering.",
          chosen: false,
          rejectedBecause:
            "Execution-risk reducer. Lives as supporting evidence for the ask — 'the product is built, the $750K closes the enterprise deal.'",
        },
      ],
    },
  ],
  sequencingNotes: {
    originStoryInsertion:
      "Insert Dr. Bone's origin story between Promised Land and Magic Wand. His credibility (MedChi past president, NIH, HSCRC) converts the investor from 'interesting idea' to 'this person can actually close the deal.' The MOU exists because of him — establish that before showing the product.",
    demoPlacement:
      "No live product demo needed in this pitch. The 'demo' is the math: $18M deal, 0.3% of budget, 50 states. If showing product, keep it to the DRB → minting flow (30 seconds max). The enterprise GTM is the real demo.",
    seededQAndA: [
      "Isn't this just another AI documentation tool? (triggers the journal reframe — we compete with NEJM, not ChatGPT)",
      "Why would a state medical association pay $18M? (triggers the 0.3% math + $689M TCOC savings + Scotiabank precedent)",
      "Does 'Blockchain in Healthcare Today' already do this? (triggers the competitive landscape gap — they do research, not protocols)",
      "Why not just sell to individual physicians? (triggers the enterprise-vs-door-to-door fork — conferences become onboarding, not sales)",
      "What happens to the protocols when a physician retires? (triggers the legacy-preservation story — the emotional core)",
      "Do physicians need to understand blockchain? (triggers the 'blockchain invisible' wall — provenance records, never NFTs, never say blockchain in the room)",
      "What does the $750K actually fund? (triggers the milestone framing — close the MedChi enterprise deal + build implementation/training capacity, not 'hire salespeople')",
      "What about insurance companies? (triggers the second revenue stream — malpractice reduction, separate pitch, unlocked by MedChi outcomes data)",
      "What about the other AHEAD states? (triggers AHEAD Cohort 4 expansion in July 2026 — each new state is a new enterprise prospect with the same regulatory mandate)",
      "How long does this regulatory tailwind last? (triggers AHEAD runway — through December 31, 2035. A decade-long distribution moat, not a one-time pilot.)",
    ],
  },
};
