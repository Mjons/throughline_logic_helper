import type { Template } from "../types";

export const delphicaPriviaTemplate: Template = {
  id: "delphica-privia-mso-investor",
  name: "Delphica / AMBJ — MSO Deployment (Privia / Aveldade)",
  description:
    "The MSO / medical-franchiser throughline. Hero = the operating executive at Privia, Aveldade, or a comparable medical group that owns or aggregates physician practices. Promised Land = an operational AI Layer deployed across their physician network that simultaneously (1) unlocks physician throughput, (2) scales the protocols that work into a network-wide standard, and (3) gives them a CMS AHEAD compliance framework their EHR can't produce. The pitch is not 'buy a journal for your members' — it is 'plug in the AI layer your EHR is missing, before CMS forces your margin conversation for you.' Living Journal is the product; the AI Layer is how an MSO buys it.",
  beats: [
    {
      id: "river",
      name: "The River",
      subtitle: "Name the undeniable shift",
      prompt:
        "What big change in the world is sweeping us forward — right now, unavoidably?",
      options: [
        {
          id: "river-double-shift-cms-ai",
          title:
            "CMS weaponized cost reduction. AI arrived at the same moment to make it possible. Two shifts, one window.",
          description:
            "Two shifts are hitting MSOs at the same time. First, CMS's AHEAD Model no longer incentivizes cost reduction — it contractually requires it through two-sided risk arrangements across eight states, compounding for a decade through 2035. Providers of care are now the ones who must lead the cost reduction, not the administrators. Second, AI has matured from curiosity to usable clinical infrastructure — Claude and Delphi-2M are the backbone that makes physician-led cost reduction operationally possible. Most investors already know the AI shift. The CMS shift is the one your competitors haven't priced in. Together, they create a narrow window where an MSO that deploys the right AI layer wins margin, throughput, and AHEAD compliance at once.",
          chosen: true,
          spokenLine:
            "Two shifts just hit at the same moment. CMS is no longer incentivizing cost reduction — AHEAD contractually requires it across eight states through 2035. And AI finally matured enough to let physicians actually lead that reduction, not just watch administrators do it to them. MSOs that combine those two shifts win the next decade. MSOs that separate them lose margin to whoever did.",
        },
        {
          id: "river-cms-ahead-mandate-only",
          title:
            "CMS AHEAD makes cost reduction a contractual mandate across eight states",
          description:
            "Same AHEAD framing as the medical-society deck — multi-state, two-sided risk, through December 31, 2035. Proven $689M net Medicare savings via Maryland TCOC.",
          chosen: false,
          rejectedBecause:
            "Strong but AHEAD alone under-sells the MSO-specific hook. MSOs have already priced in value-based-care pressure — they need the AI shift alongside it to feel the urgency as new, not as 'more of the same regulatory noise.'",
        },
        {
          id: "river-ai-replaces-physicians",
          title:
            "AI is on the scene and some investors think chatbots will replace physicians",
          description:
            "ChatGPT and ambient scribes have conditioned the market to believe AI is the whole story. It isn't — AI without physician governance is a malpractice surface and a regulatory risk. But the conversation is happening in every executive meeting.",
          chosen: false,
          rejectedBecause:
            "Every investor already knows about AI. Leading with AI alone is a weak hook because the room is saturated. Lives inside the double-shift river as the second force, paired with AHEAD.",
        },
        {
          id: "river-retirement-wave",
          title:
            "Boomer physicians are retiring and their protocols are disappearing with them",
          description:
            "The institutional memory of American medicine is walking out the door as the retirement wave accelerates. Protocols refined over thirty years die when the physician leaves unless something captures them first.",
          chosen: false,
          rejectedBecause:
            "Powerful and directly relevant to MSOs, but it's a compounding factor, not the structural shift. Lives in the Fork (what Privia loses if they don't capture it) and the Tide (the clock is already running).",
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
          id: "gap-physicians-cant-use-ai-for-cost-reduction",
          title:
            "CMS is demanding that the producers of care lead cost reduction — but the producers of care can't fully manipulate the AI tools required to do it.",
          description:
            "The shift landed on physicians. They are the ones CMS holds accountable for total cost of care under AHEAD. But the AI tools that would let them reduce cost at the bedside — structured reasoning, protocol reuse, safety checks, outcome capture — are not palatable to physicians as they exist today. Ambient scribes document faster but don't reason. ChatGPT answers but isn't governed. EHR 'decision support' is a checkbox for admins, not a clinical partner. The gap is operational: physicians are now on the hook for cost outcomes, and the infrastructure to help them deliver those outcomes is missing at the point of care. The retirement wave compounds the gap — the physicians who built the protocols that worked are leaving before the protocols get captured.",
          chosen: true,
          spokenLine:
            "CMS just made physicians the cost-reduction owners. But the AI tools that would let them actually do it at the bedside aren't palatable to them yet. Ambient scribes don't reason. ChatGPT isn't governed. EHRs are admin tools, not clinical partners. Physicians are on the hook for a cost outcome they don't have the infrastructure to deliver — and the ones who built the best protocols are retiring before anyone captured them.",
        },
        {
          id: "gap-ehr-has-no-ai-layer",
          title:
            "MSOs' existing EHRs have no real AI layer — and EHR vendors can't build one on the compliance timeline MSOs need",
          description:
            "Epic, Athenahealth, Cerner/Oracle all have AI roadmaps. None of them have a deployed, physician-palatable, provenance-governed AI layer that helps an MSO hit AHEAD targets. The MSO is stuck: the EHR owns the data but not the reasoning, and MSOs can't wait three years for their EHR vendor to catch up.",
          chosen: false,
          rejectedBecause:
            "Accurate and sharp — but it's the product-fit answer, not the market gap. Lives as the troll (the EHR is the enemy) and the wand (Delphica is the AI layer the EHR isn't).",
        },
        {
          id: "gap-no-journal-captures-protocols",
          title:
            "Hundreds of medical journals exist. None preserve a physician's life's work as a Living Journal.",
          description:
            "Every medical journal today is a static artifact — knowledge frozen the moment it's printed. The Living Journal category — continuously updated, physician-attributable, on-chain — doesn't exist yet. And that category is exactly what an MSO needs to scale what works across its physician network.",
          chosen: false,
          rejectedBecause:
            "Central for the medical-society deck but secondary for MSOs. MSOs buy tools that move operational metrics; the journal framing is the product mechanic, not the primary pain point. Lives as a wall inside the Magic Wand.",
        },
        {
          id: "gap-cost-reduction-tools-wrong-audience",
          title:
            "Existing cost-reduction tools are built for administrators, not clinicians",
          description:
            "BI dashboards, utilization analytics, risk-adjustment platforms — every MSO already buys these. They all talk to admins. None of them change what the physician does at the bedside, which is where AHEAD actually gets won or lost.",
          chosen: false,
          rejectedBecause:
            "True and directly resonant with MSO operators, but it's a sub-point of the chosen gap. Folds in as supporting evidence.",
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
          id: "fork-marketplace-creators-vs-static-users",
          title:
            "MSOs that capture protocols and publish them win. MSOs that run old systems with retiring physicians lose.",
          description:
            "The winners are the institutions that capture the protocols of their best physicians and publish them into a marketplace where every other physician in the network can pull, adapt, and license them. The losers are MSOs who either (a) refuse to become marketplace creators — sitting on their protocols as undocumented tribal knowledge, or (b) refuse to become marketplace utilizers — forcing every physician to reinvent the wheel locally. The third loser is the MSO that no longer has experienced physicians in its network because the retirement wave already emptied them out. The marketplace is the forcing function: participate or become a cost-inefficient aggregator that CMS rates down and competitors rate around.",
          chosen: true,
          spokenLine:
            "The MSOs that win the next decade are the ones that capture what their best physicians actually do and publish it to a marketplace their whole network can pull from. The MSOs that lose are the ones running old systems with retiring physicians and no mechanism to keep what they know. There's no neutral position. You're a creator, you're a utilizer, or you're a cost-inefficient aggregator CMS will rate down.",
        },
        {
          id: "fork-living-vs-static-journals",
          title:
            "Living Journals win the next decade. Static journals become archives.",
          description:
            "Same fork as the medical-society deck — continuously updated, peer-reviewed, physician-attributable journals replace frozen-on-publication ones.",
          chosen: false,
          rejectedBecause:
            "Category-level fork that works for investors thinking about the product space. For an MSO executive, the sharper fork is who-operates-how, not who-publishes-what. Lives in the wand as the product mechanic.",
        },
        {
          id: "fork-cms-scoring-ahead-compliant-vs-not",
          title:
            "CMS will score MSOs on AHEAD performance. The compliant ones win contracts; the non-compliant ones watch margin erode.",
          description:
            "AHEAD isn't a flat-rate reduction — it's a performance-scored framework where MSOs that demonstrate outcome improvement alongside cost reduction get the better deal and the expansion contracts. MSOs without the infrastructure to prove outcome improvement will see their share of the AHEAD pool shrink.",
          chosen: false,
          rejectedBecause:
            "Hugely important but it's a specific instance of the marketplace fork — MSOs win because they can scale protocols (AHEAD-compliant) or lose because they can't. Lives inside the chosen fork as the regulatory teeth.",
        },
        {
          id: "fork-retirement-capture-or-lose",
          title:
            "Physician protocols are either captured before retirement — or lost forever",
          description:
            "Same as the medical-society deck. One-time window. The institutional memory of American medicine is walking out the door.",
          chosen: false,
          rejectedBecause:
            "Real, but for an MSO audience this is the Tide (time pressure), not the Fork (strategic choice). Moved to Tide.",
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
          id: "pl-throughput-protocols-savings",
          title:
            "Higher physician throughput, protocols that scale across the whole network, and cost savings CMS actually rewards",
          description:
            "Three-fold promised land, spoken in the language of an MSO P&L. (1) Physicians see more patients in less time because documentation burden drops to under three minutes and clinical reasoning is assisted, not replaced. Throughput goes up across the network. (2) The protocols that work at one of your sites get captured, peer-reviewed, and scaled to every other site — turning your best physician's bedside judgment into a network-wide standard. (3) Cost savings roll up into AHEAD performance, which CMS financially rewards under two-sided risk — and which gives you the evidence to apply for experimental-site status before the July 2026 window closes. Not a scribe. Not a dashboard. An operational layer that moves three lines on your quarterly review at once.",
          chosen: true,
          spokenLine:
            "Three things happen for you if this works. Your physicians see more patients in less time. The protocols that work at your best site get captured and scaled to every other site. And the cost savings roll up into the AHEAD performance that CMS pays you for. Throughput, standardization, margin — all three moving together, tied to a regulatory framework that's already paying for it.",
        },
        {
          id: "pl-ai-layer-deployed",
          title:
            "The AI Layer your EHR is missing — deployed across every physician in your network",
          description:
            "Not a point tool. A horizontal AI layer that sits on top of your existing EHR, physician-palatable at the bedside, provenance-anchored for audit and malpractice defense, and tuned to your MSO's specific outcome and cost targets. The layer your EHR vendor hasn't built and probably won't on your AHEAD timeline.",
          chosen: false,
          rejectedBecause:
            "The product description. Strong but MSO executives buy outcomes, not layers. Lives as the Magic Wand — the gift you deliver — rather than the Promised Land.",
        },
        {
          id: "pl-first-ahead-mso",
          title:
            "The first MSO to prove AHEAD compliance via AI-led clinical operations",
          description:
            "A first-mover branding moat. The MSO that closes the AHEAD loop — contractual cost reduction + demonstrated outcome improvement via physician-led AI — becomes the reference model CMS cites in press and competitors benchmark against. Experimental-site status and the associated federal relationships follow.",
          chosen: false,
          rejectedBecause:
            "Attractive but speculative — assumes MSO wants to be the press case study. Some will, some won't. Lives as a kicker at the end of the chosen promised land for MSOs that are leaning in.",
        },
        {
          id: "pl-legacy-preserved",
          title:
            "Your retiring physicians' protocols become a permanent, attributable asset your network owns",
          description:
            "Every retiring physician in your MSO contributes their refined protocols into the Living Journal before they walk out the door. That knowledge becomes network IP — licensable, citeable, and immune to departure. The MSO converts a departure event from a knowledge loss into an asset capture.",
          chosen: false,
          rejectedBecause:
            "Emotionally powerful and factually accurate, but MSOs don't buy on legacy — they buy on margin. Lives as the third pillar of the chosen promised land (the 'protocols scale across the network' half).",
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
          id: "troll-ehr-and-its-it-team",
          title:
            "The current EHR system — and the IT support team defending it.",
          description:
            "Three faces of one obstacle. (1) The EHR is a data prison, not a decision engine. It holds the patient data but produces no clinical reasoning, no protocol capture, no outcome signal. It was built for billing, not for cost-reduction at the bedside. (2) The EHR's internal IT team has incentives to defend the status quo — every third-party tool is a security review, a compliance burden, a threat to their budget. They are the gatekeepers that keep real AI out. (3) Generic AI (ChatGPT, ambient scribes) is the wrong answer in the other direction — ungoverned, no audit trail, no physician attribution, a malpractice exposure waiting to happen. The MSO is caught between a data prison it can't leave and a Wild West it can't trust.",
          chosen: true,
          spokenLine:
            "The troll is the EHR and the IT team that defends it. Your EHR is a data prison — it holds patient data but produces no reasoning. Your IT team's incentive is to keep third-party tools out, not let them in. And the obvious alternative, generic AI, is ungoverned and exposes you to malpractice. You're stuck between a prison you can't leave and a Wild West you can't trust.",
        },
        {
          id: "troll-wrong-competitive-frame",
          title:
            "Thinking about this as 'another AI tool' — when it's actually the AI layer the EHR never built",
          description:
            "Pitching against ambient scribes and ChatGPT is a losing frame. Delphica doesn't compete with those. It's the AI layer that sits between the EHR and the physician — a category your EHR vendor admits they won't ship on your AHEAD timeline.",
          chosen: false,
          rejectedBecause:
            "The reframe is important but it's a messaging fix, not the operational obstacle. Lives inside the chosen troll as 'generic AI is not the answer' (face 3).",
        },
        {
          id: "troll-long-sales-cycle-mso-procurement",
          title:
            "MSO procurement cycles are long, and every quarter you wait is a quarter of AHEAD margin lost",
          description:
            "Standard MSO procurement for a clinical tool runs 9–18 months. AHEAD's cost-reduction clock doesn't wait. Every quarter you spend in procurement is a quarter of AHEAD savings your competitors are banking instead.",
          chosen: false,
          rejectedBecause:
            "Real, but it's Tide material (forcing function) not Troll (bridge obstacle). Moved to Tide.",
        },
        {
          id: "troll-physician-adoption-risk",
          title:
            "Physician adoption is the killer of every clinical tool MSOs have ever bought",
          description:
            "MSOs have graveyards of unused tools their physicians rejected. Adoption risk is real and it's why MSO executives pattern-match every new AI pitch as 'another thing we'll buy and not use.' Physician-palatable UX is the only answer.",
          chosen: false,
          rejectedBecause:
            "Critical concern but folds into the chosen troll — the EHR's IT team defends its own dashboards, which are exactly the non-adopted tools. Pre-load as a Q&A answer: 'we don't replace their workflow, we sit inside it.'",
        },
        {
          id: "troll-fda-samd-risk",
          title:
            "FDA may classify this as Software as a Medical Device — 510(k) clearance risk",
          description:
            "The system outputs personalized treatment plans with dosing, integrates lab values, and checks contraindications. CDS exemption criterion 4 is not guaranteed. Pre-submission meeting is planned, DRB governance and physician override architecture are designed to support the exemption argument.",
          chosen: false,
          rejectedBecause:
            "Pre-loaded diligence objection. Belongs in seeded Q&A, not as the primary troll for an MSO audience — MSOs already operate inside FDA frameworks and know how to price this risk.",
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
          id: "wand-ai-layer-turnkey",
          title:
            "The AI Layer your EHR is missing — turnkey, physician-palatable, plugged into your existing stack",
          description:
            "Six walls. (1) The AI Layer itself — sits on top of your existing EHR (Epic, Athenahealth, Cerner), reads the data your EHR already has, produces the reasoning your EHR never did. (2) Physician-palatable UX — ambient capture + draft-then-approve workflow + three-minutes-per-encounter documentation. Your physicians don't learn a new tool; the tool learns them. (3) Delphi-2M intelligence loop — peer-reviewed published research (400K UK Biobank records, validated on 1.9M Danish patients — EMBL-EBI / University of Copenhagen, 2025). Not a homegrown claim. (4) Living Journal + Digital Review Board — the protocols your best physicians use get captured, peer-reviewed, and scaled to every other site in your network. Your knowledge becomes network IP. (5) AHEAD-compliance framework — outcome capture and cost-reduction evidence CMS actually accepts, delivered as a report-ready artifact. (6) Dr. Bone as the regulatory-credibility keymaster — past president of MedChi, 7 years on the Maryland Hospital Cost Review Commission. He knows the CMS side of the table and can help you apply for AHEAD experimental-site status before the July 2026 window.",
          chosen: true,
          spokenLine:
            "We give you the AI layer your EHR was supposed to build and didn't. Plugs into your existing stack. Physician-palatable because it sits inside their workflow, not next to it. Captures the protocols your best physicians use and scales them across your network. Produces the AHEAD-compliance evidence CMS wants in the format they accept. And Dr. Bone opens the CMS door — he was on the Maryland Hospital Cost Review Commission for seven years; he knows how these applications get approved.",
        },
        {
          id: "wand-living-journal-mso-framing",
          title:
            "The Living Journal — but deployed as an MSO operating system, not a library",
          description:
            "The same Living Journal product that medical societies buy as a distribution asset, MSOs buy as an operational system. Your physicians publish into it, your network pulls from it, CMS reads it as outcome evidence.",
          chosen: false,
          rejectedBecause:
            "Strong brand continuity but the wand should lead with the operational value (AI Layer) for an MSO audience. Living Journal is the product mechanic — a wall inside the chosen wand.",
        },
        {
          id: "wand-physician-palatable-ai",
          title:
            "Physician-palatable AI — the version of AI your physicians will actually use",
          description:
            "Every MSO has bought clinical tools physicians didn't adopt. Physician-palatable is the difference between budget well spent and budget that becomes a cautionary anecdote at the next board meeting. The DRB, the provenance layer, and the workflow-native UX combine to make this the first AI an MSO's physicians actually want to keep open.",
          chosen: false,
          rejectedBecause:
            "The adoption-risk answer. Critical but a wall inside the chosen wand, not the headline.",
        },
        {
          id: "wand-ahead-compliance-framework",
          title: "An AHEAD compliance framework your EHR can't produce",
          description:
            "Continuous outcome capture plus physician-attributed cost-reduction evidence, delivered as a CMS-ready report. The audit trail CMS actually wants for two-sided risk participation. Your EHR vendor isn't shipping this on your timeline — we are.",
          chosen: false,
          rejectedBecause:
            "The regulatory-compliance wall. A powerful wall but lives inside the chosen wand as wall #5 — leading with it is too narrow; it sounds like a compliance tool rather than an operational system.",
        },
        {
          id: "wand-dr-bone-ahead-keymaster",
          title: "Dr. Bone — the AHEAD-application keymaster",
          description:
            "Past president of MedChi (2006). 7 years on the Maryland Hospital Cost Review Commission. NIH researcher. He ran the budget side of the state that wrote the model CMS then scaled into AHEAD. For MSOs looking to apply for AHEAD experimental-site status before the July 2026 window, he is the one person in the industry who has seen this from both sides of the table.",
          chosen: false,
          rejectedBecause:
            "Distribution/credibility moat. Lives as wall #6 in the chosen wand. Strongest when paired with the AI Layer pitch, not as the headline.",
        },
      ],
    },
    {
      id: "tide",
      name: "The Tide",
      subtitle: "What's coming that forces the hero to cross the bridge now",
      prompt:
        "What is closing in that makes waiting more dangerous than acting?",
      options: [
        {
          id: "tide-july-2026-ahead-window",
          title:
            "July 2026: CMS opens up to two additional AHEAD states. The application window is narrow. Miss it and wait to 2035.",
          description:
            "CMS will accept up to two additional states into the AHEAD Model in July 2026. For MSOs operating in states that are candidates — or MSOs that want experimental-site status within already-participating states — the application window is narrow, the evidence requirements are heavy, and Dr. Bone can help structure the application from his Cost Review Commission experience. Miss this window, and the next clean opportunity to get in is years away. Every quarter spent in procurement before July is a quarter your competitors are building their AHEAD evidence and your margin is being compared against a moving baseline.",
          chosen: true,
          spokenLine:
            "CMS opens up to two more AHEAD states in July 2026. That's the window to get experimental-site status or push your state into the program. Dr. Bone can help structure the application — he ran the Maryland Hospital Cost Review Commission for seven years; he knows exactly what CMS is looking for. Miss July, and the next clean window is years away while your AHEAD-participating competitors are stacking evidence against you.",
        },
        {
          id: "tide-retirement-wave-accelerating",
          title:
            "The boomer retirement wave is accelerating — every quarter you wait, more protocols leave with more physicians",
          description:
            "The retirement wave is not a future event. It is happening now, every quarter, in every MSO. Each retirement that happens before you deploy a capture mechanism is a permanent asset loss. The Living Journal captures the ones who haven't left yet. It cannot recover the ones who already have.",
          chosen: false,
          rejectedBecause:
            "Real and perishable, but July 2026 is sharper and more specific for an MSO audience. Lives as a supporting tide — 'and every month you wait, another physician walks out with their protocols.'",
        },
        {
          id: "tide-competitor-mso-lock-in",
          title:
            "Your competitor MSOs are already piloting AI layers — first-mover advantage is months, not years",
          description:
            "Aveldade, Privia, UnitedHealth's Optum, Oak Street — the big MSOs are all running pilots. The first one to deploy a physician-palatable, AHEAD-compliant AI layer across its whole network locks in a referenceable cost-reduction story that CMS and commercial payers will cite. Second place is a long way back.",
          chosen: false,
          rejectedBecause:
            "Competitive urgency that may or may not be true depending on actual MSO pilot status. Use carefully — only deploy if the specific MSO in the room would believe it. Lives as Q&A-triggered context, not a headline tide.",
        },
        {
          id: "tide-medchi-proof-point-closing",
          title:
            "The MedChi pilot is unlocking proof — the first MSO to partner gets the case study before it becomes public",
          description:
            "MedChi (Maryland medical society, 9,000 physicians) has signed an MOU. Once that deal converts and the first outcome data comes in, it becomes public proof. The first MSO to partner gets the evidence before it's in the trade press; the second MSO to partner is buying into a story everyone already knows.",
          chosen: false,
          rejectedBecause:
            "True but speculative — depends on MedChi conversion timing. Safer as Hoard evidence (the MOU exists) rather than a Tide claim (it will convert by X date).",
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
          id: "hoard-medchi-mou-plus-dr-bone-insider",
          title:
            "The MedChi MOU, Dr. Bone's Cost Review Commission history, and the $689M TCOC precedent",
          description:
            "Three pieces of hard evidence stacked. (1) MedChi (Maryland medical society, est. 1799, 9,000 physicians) has signed an MOU with Delphica — the first major distribution relationship. (2) Dr. Bone spent 7 years on the Maryland Hospital Cost Review Commission, the body that managed the budget model CMS then scaled into AHEAD. He is not a consultant who read a white paper — he wrote the rules the white paper describes. (3) The Maryland TCOC Model (AHEAD's predecessor) produced $689 million in net Medicare savings with 6.6% reduction in hospital spending. This isn't a thesis; it's a precedent. The MSO that partners early inherits all three proofs as validation.",
          chosen: true,
          spokenLine:
            "Three things to know. MedChi — Maryland's medical society, 9,000 physicians, founded 1799 — signed an MOU with us. Dr. Bone spent seven years on the Maryland Hospital Cost Review Commission that built the model CMS turned into AHEAD. And the predecessor model proved $689 million in net Medicare savings. This isn't a bet; it's a precedent with a distribution channel and an insider.",
          permissionBoundary:
            "State that the MedChi MOU is signed. Do not claim Privia or any specific MSO is signed. Frame Dr. Bone's HSCRC role as historical experience, not current CMS influence.",
        },
        {
          id: "hoard-delphi-2m-research",
          title:
            "Delphi-2M — peer-reviewed published research, not a startup benchmark",
          description:
            "GPT-style transformer trained on 400K UK Biobank records, validated without parameter changes on 1.9M Danish patients. EMBL-EBI, DKFZ, University of Copenhagen — published September 2025. Independently verifiable.",
          chosen: false,
          rejectedBecause:
            "Essential science credibility but it's the product-evidence layer. Lives alongside the chosen hoard as the 'and the AI is real' supporting proof.",
        },
        {
          id: "hoard-working-prototype-plus-hipaa",
          title:
            "Working prototype + HIPAA architecture with air-gap deployment",
          description:
            "The product exists. The intelligence loop, documentation co-pilot, and DRB pipeline are built and working. HIPAA-compliant cloud infrastructure with BAA-covered service providers, with a documented migration path to dedicated healthcare AI enclaves (Claude Health Enterprise) and an air-gap deployment option for MSOs with stricter security postures. Romil's AWS HIPAA enclave covers production today.",
          chosen: false,
          rejectedBecause:
            "Execution-risk reducer and procurement-friendly evidence. Lives as the 'we can pass your security review' Hoard — critical for the procurement phase but not the headline for the initial pitch.",
        },
        {
          id: "hoard-category-empty",
          title:
            "No MSO operating system of this kind exists — category is open",
          description:
            "Ambient scribes exist. Risk-adjustment tools exist. EHR-native AI roadmaps exist. A physician-palatable, AHEAD-compliant, protocol-scaling AI layer that sits on top of existing EHRs does not. The category is open and the first MSO to deploy it owns the reference model.",
          chosen: false,
          rejectedBecause:
            "Defensive 'no one else is doing this' evidence. Useful as Q&A prep ('isn't this already done?') but weaker than the chosen hoard for the headline proof.",
        },
        {
          id: "hoard-team-bench-depth",
          title: "Real team — not a solo founder",
          description:
            "Dr. Bone (face, MedChi past president, NIH, HSCRC). Romil Khanna (CTO, ISO-27001, healthcare compliance, avatar infrastructure, AWS HIPAA enclave). Michael Jonsson (blockchain, product, rapid prototyping). Allen Borts (30+ years enterprise sales). Nick (OG blockchain, OpenZeppelin-depth). Brian (AI specialist, former Canadian AI Ethics Board). Potentially Marc (enterprise sales strategy, VC introductions, founder-level interest).",
          chosen: false,
          rejectedBecause:
            "Team evidence for diligence. Lives on the team slide and as a pre-loaded answer when 'bus factor of one' comes up.",
        },
      ],
    },
  ],
  sequencingNotes: {
    openingLineAnchor:
      "Open on the double shift: 'Two things just happened at the same time. CMS stopped incentivizing cost reduction and started contractually requiring it. And AI finally matured enough to let physicians lead that reduction, instead of watching administrators do it to them.' Do not open on the 17-year stat or the Living Journal — those are medical-society hooks. MSOs buy operational change, so lead with operational forces.",
    meetingStructure:
      "Dr. Bone's proposed meeting flow for Privia (and usable for any MSO): (1) Privia shows us their current physician workflow. (2) We show them what the Delphica-enabled workflow looks like — same physician, three-minute documentation, captured protocols, rolled-up AHEAD evidence. (3) We walk through the HIPAA architecture and air-gap deployment options. (4) We discuss the CMS AHEAD application framework and Dr. Bone's insider lane. Budget 60 minutes; leave 20 for their operational questions.",
    aiLayerPositioning:
      "Call Delphica 'the AI Layer your EHR is missing' — never 'an AI tool.' MSOs have bought AI tools; they're all dead on the budget line. The AI Layer positions Delphica as infrastructure, not a tool, and makes the buying decision about stack completeness, not product comparison.",
    livingJournalUsage:
      "Living Journal stays the product anchor (masthead, product sections). But in the MSO deck it lives inside the Magic Wand as wall #4 — the mechanism for protocol capture and network-scaling. Do not lead with it the way the medical-society deck does; MSO executives buy operational outcomes, not categories.",
    antiJournalDeployment:
      "Anti-Journal is not needed for the MSO deck. That reframe is designed to kill the 'another AI scribe' objection for audiences that compare Delphica to NEJM/JAMA. MSO executives compare it to Epic's AI roadmap and Athenahealth's analytics — a different troll. Use 'the AI Layer your EHR is missing' as the reframe weapon instead.",
    drBoneOriginStoryInsertion:
      "Insert Dr. Bone's HSCRC story between the Troll and the Magic Wand. Not the MedChi president credential (that's the medical-society deck angle). The Cost Review Commission angle: 'I spent seven years on the Maryland Hospital Cost Review Commission managing the model CMS then turned into AHEAD. I know what CMS wants to see in an application, because I wrote the rules they're using.' That converts the pitch from 'interesting product' to 'this person can get us through the July 2026 window.'",
    demoPlacement:
      "Demo the physician workflow (ambient capture → draft SOAP → DRB review → outcome back to chart) in 90 seconds. Keep it tight. The demo is the physician-palatable proof; it closes the adoption-risk objection before it's asked. Do not demo the blockchain layer — it stays invisible.",
    seededQAndA: [
      "How is this different from Epic's AI roadmap? (triggers the AI Layer framing — Epic is building on their timeline for their billing workflow; we sit on top of any EHR on your AHEAD timeline)",
      "What happens to physician adoption? We've bought clinical AI tools before and our physicians didn't use them. (triggers the physician-palatable wall — ambient capture inside the existing workflow, not a new tool they have to learn, draft-then-approve so physicians retain control)",
      "Does this work with Athenahealth / Epic / Cerner? (triggers the AI Layer positioning — we read from the EHR, we don't replace it; migration-agnostic)",
      "Isn't this just another AI scribe? (triggers the 'AI Layer your EHR is missing' reframe — scribes document, we reason and capture protocols and roll up AHEAD evidence)",
      "What's the HIPAA architecture? (triggers the air-gap + BAA-covered infrastructure + Claude Health Enterprise migration path answer)",
      "What's the FDA SaMD risk? (triggers the pre-submission meeting + CDS exemption argument via DRB governance + physician override architecture)",
      "How long until we see AHEAD impact? (triggers the staged timeline — documentation burden drops in week 1, protocol capture in month 1, outcome rollup within a quarter, AHEAD-submittable evidence within two quarters)",
      "Why would Dr. Bone's MedChi past matter to us as an MSO? (triggers the Cost Review Commission angle — he's the AHEAD-application keymaster, not just a medical society figure)",
      "What about CMS AHEAD July 2026 window? (triggers the Tide — narrow application period, Dr. Bone can help structure, miss it and wait years)",
      "What if we want to pilot with a subset of our network first? (triggers the staged deployment — start with one region or specialty, use it to generate AHEAD evidence, expand once proven; procurement-friendly)",
      "Who else is using this? (triggers the MedChi MOU hoard — pilot with Maryland's medical society unlocks cross-proof; does NOT claim any specific MSO is signed)",
      "What's the commercial structure? (flag for sales — revenue share, per-physician license, or AHEAD-outcome-based pricing depending on MSO preference; do not quote numbers in the first meeting)",
    ],
  },
};
