# Throughline — Business Context for Agent Ingestion

Paste this into the Throughline agent chat or Documents tab.

---

## What we do

Throughline is an AI-powered narrative architect. You feed it context about your business — through conversation, pasted documents, or uploaded files — and it selects the right storytelling framework, then generates a full board of tailored narrative options for every beat. You pick your path, edit what needs editing, and export a committed throughline as markdown or JSON.

It's a canvas tool built on React Flow where each column is a narrative beat and each card is an option for that beat. Select one option per beat, and the throughline connects them with animated edges showing the narrative arc.

## Who our customer is

Founders, sales leaders, and marketing teams who need to build persuasive narratives — investor pitches, enterprise sales decks, keynotes, brand stories, internal strategy memos — and don't have a narrative strategist on staff.

The sharpest persona is the Series A founder who has 47 slides and no story. They know their product cold but can't articulate why it matters in a structure that moves people. They've read Andy Raskin's blog posts, maybe hired a pitch coach once, but the frameworks feel abstract until they're staring at a blank deck.

Secondary persona: the enterprise AE who needs to build a Challenger Sale reframe for a specific deal and doesn't have time to read the book again.

## What problem we solve

Building a narrative is hard. The frameworks exist — Raskin, StoryBrand, Sequoia, Challenger, Hero's Journey — but going from "I know the framework" to "I have a finished narrative with specific, grounded options for each beat" is where everyone stalls. The gap isn't knowledge, it's execution.

People either:

1. Stare at a blank doc and write generic platitudes
2. Hire a $15K narrative consultant and wait 3 weeks
3. Use ChatGPT and get plausible-sounding but ungrounded slop that doesn't use their actual data

Throughline closes the gap between "I know the Raskin framework" and "I have 4 specific, grounded options for my River beat that use my actual ARR numbers and customer names."

## What makes us different

1. **Framework-native, not prompt-native.** We don't ask you to write a prompt. We ask you to describe your business, then we pick the framework and generate within its structure. The AI is constrained by narrative theory, not freewheeling.

2. **Visual canvas, not a doc.** You see all beats side by side, select your path, and watch the throughline form as edges between cards. It's spatial reasoning for narrative — you can see which combinations work before you commit.

3. **Source-tagged provenance.** Every generated card is tagged: did this come from your documents, from AI research, or a blend? You always know what's yours and what's machine-generated. No black box.

4. **13 built-in frameworks spanning 4 categories.** Pitch (Raskin, Sequoia, Challenger, SPIN), Storytelling (Hero's Journey, StoryBrand, Pixar, Freytag, Kishotenketsu), Strategy (Amazon 6-Pager, OODA, JTBD), and Domain-Specific (Clinical Trial, SaaS Investor). The agent picks the right one based on your context.

5. **BYOK — your key, your data, client-side only.** API calls go directly from the browser to your chosen provider (Claude, Gemini, OpenAI). We never see your business data or your API key. Local-first by architecture, not by promise.

6. **Per-beat regeneration.** Don't like one beat? Regenerate just that column. Don't like one card? Regenerate just that card. No need to re-run the whole pipeline.

## Evidence and traction

- Working product shipped and running at localhost (pre-launch)
- Full pipeline operational: ingest → framework selection → parallel generation → source tagging → regeneration
- 13 narrative frameworks implemented with beat definitions
- 17 framework reference documents with detailed option examples
- 7 pre-built templates (Panel Haus investor/creator/IP-holder/whitepaper, Delphica enterprise/MSO, Raskin general)
- Sub-$0.30 per throughline generation at Claude Sonnet pricing
- Built in React + TypeScript + Vite + React Flow, zero backend dependencies

## Who we're pitching to

Early-stage investors (pre-seed / seed) who understand that narrative is a moat in fundraising and sales, and that AI tooling for knowledge workers is an expanding category.

Also relevant: potential design partners at accelerators (YC, Techstars) who work with dozens of founders per batch and need scalable narrative coaching.

## Context

This throughline is for a fundraising pitch — likely a 10-minute conversation with an angel or pre-seed fund. The output should be sharp enough to deliver verbally, not just read on a slide.

## Permission boundaries

- Do not claim paying customers (we have none yet — pre-launch)
- Do not claim revenue or ARR
- Do not cite specific user counts or growth metrics
- Do not claim partnerships that don't exist
- It's fine to reference the working product, the frameworks, the architecture, and the generation cost
- It's fine to reference the Panel Haus and Delphica templates as proof the tool works on real pitch content (these are real companies the founder is involved with)
