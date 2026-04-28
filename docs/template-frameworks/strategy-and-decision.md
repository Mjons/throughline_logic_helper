# Strategy & Decision Frameworks

Narrative structures for making decisions, aligning teams, and communicating strategy. These aren't stories in the traditional sense — they're structured arguments where each beat builds toward a defensible conclusion.

---

## 1. Amazon 6-Pager

The internal decision document format used at Amazon. Written as prose, not bullets. Read silently at the start of meetings. Each section is a beat that builds the case for a specific action. The discipline is in the writing — if you can't write it clearly, you don't understand it clearly enough.

**Best for:** Internal proposals, strategic memos, product briefs, investment cases, cross-team alignment docs

### Beats

#### Beat 1: Context

_Why are we talking about this? What does the reader need to know to follow the argument?_

| Option                  | Description                                                                                                                                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Market context**      | "The [market/segment] has changed in the following ways: [2–3 specific shifts]. These shifts create both [risk] and [opportunity] for [our team/product]." Ground the proposal in external forces the reader can verify.                                               |
| **Customer context**    | "Our customers are telling us [pattern from support tickets / research / NPS comments]. The signal is consistent across [N] data points over [timeframe]." Ground the proposal in customer evidence. The reader should think: "I've seen this too."                    |
| **Competitive context** | "[Competitor A] shipped [feature/product]. [Competitor B] announced [initiative]. The competitive landscape has shifted in [specific direction] — and we have not responded." Ground the proposal in competitive pressure. Use facts, not anxiety.                     |
| **Internal context**    | "In [previous decision/doc], we committed to [strategy]. This proposal is [an extension of / a revision to / a new direction from] that commitment. Here's what changed." Ground the proposal in the organization's own history. Show continuity or explain the pivot. |

#### Beat 2: Tenets

_What principles guide this decision? What trade-offs are we consciously making?_

| Option                        | Description                                                                                                                                                                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Customer-obsession tenets** | "We will optimize for [customer outcome] even at the cost of [internal efficiency / short-term revenue / engineering simplicity]." Name the customer benefit that trumps everything else.                                                        |
| **Speed tenets**              | "We will choose [reversible decisions quickly] over [waiting for perfect information]. Type 1 decisions (irreversible) get more rigor; type 2 decisions (reversible) get speed." Explicitly categorize the decision type.                        |
| **Simplicity tenets**         | "We will build the simplest solution that achieves [specific goal]. We will not build for hypothetical future requirements. We will remove before we add." Name what you won't build — this is harder and more useful than naming what you will. |
| **Ownership tenets**          | "The team that builds this owns it end-to-end: development, deployment, operations, and customer outcomes. No handoffs. No shared accountability." Define the ownership model before defining the solution.                                      |

#### Beat 3: Current State

_What exists today? Be precise and honest._

| Option                              | Description                                                                                                                                                                                                                                  |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Architecture inventory**          | "The current system consists of [components], connected by [integration pattern]. It was designed for [original requirements] and handles [current load] with [specific limitations]." Map what exists. No editorializing — just facts.      |
| **Metrics snapshot**                | "Current performance: [metric 1] = [value], [metric 2] = [value], [metric 3] = [value]. Trends over [timeframe]: [description]." Let the numbers make the case. If the current state is bad, the metrics will show it.                       |
| **Customer experience walkthrough** | "Today, a customer who wants to [action] must: [step 1], [step 2], [step 3], [step 4]. This takes [time] and fails [X%] of the time at step [N]." Walk the reader through the actual experience. Specificity creates empathy.                |
| **Gap analysis**                    | "We committed to [goal]. Current state achieves [X%] of that goal. The gap is caused by [specific factors]. Without intervention, the gap [grows / stays constant / shrinks] at [rate]." Quantify the distance between ambition and reality. |

#### Beat 4: Proposed Approach

_What should we do? Be specific enough that two engineers would build the same thing from this description._

| Option                      | Description                                                                                                                                                                                                                                                                       |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Architecture proposal**   | "We will build [component] that [function]. It will integrate with [existing system] via [method]. The data model is [description]. The key APIs are [list]." Technical specificity. If someone can read this and estimate the work, you've written it well enough.               |
| **Phased rollout**          | "Phase 1 ([timeframe]): [scope]. Phase 2 ([timeframe]): [scope]. Phase 3 ([timeframe]): [scope]. We will not proceed to Phase N+1 until [success criteria for Phase N] are met." Break the work into stages with explicit gates. Reduces risk and creates natural checkpoints.    |
| **Minimum viable approach** | "The smallest version of this that delivers customer value is: [description]. It excludes [features that seem important but aren't required]. We build this first, measure [metric], and expand only if [condition]." Discipline of constraint. Name what you're cutting and why. |
| **Team and resource plan**  | "This requires [N engineers, M designers, P weeks]. The team is [existing team / new team / cross-functional pod]. The opportunity cost is [what we won't build during this time]." Be explicit about cost — including opportunity cost. Every "yes" is a "no" to something else. |

#### Beat 5: Alternatives Considered

_What else could we do? Why is the proposed approach better?_

| Option                        | Description                                                                                                                                                                                                                                                                                                     |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Build vs. buy vs. partner** | "We considered: (a) building in-house, (b) using [vendor], (c) partnering with [company]. We chose (a) because [reasons]. (b) fails on [criteria]. (c) fails on [criteria]." The classic triad. Show you evaluated the full option space.                                                                       |
| **Do nothing analysis**       | "We considered doing nothing. The consequence of inaction is [quantified impact] over [timeframe]. The risk of inaction exceeds the cost of action by [factor]." Sometimes the best alternative analysis is showing why the status quo is unacceptable.                                                         |
| **Competing architectures**   | "Alternative A: [description]. Advantage: [X]. Disadvantage: [Y]. Alternative B: [description]. Advantage: [X]. Disadvantage: [Y]. We chose [proposed] because it optimizes for [tenet from Beat 2]." Tie the choice back to the tenets. The decision should feel like a logical consequence of the principles. |
| **Scaled-down option**        | "We could do [less ambitious version] at [lower cost/time]. We rejected this because [it doesn't solve the core problem / the ROI doesn't justify even the reduced investment / it creates tech debt that costs more later]." Show you considered the cheaper option and explain why it's a false economy.      |

#### Beat 6: FAQ

_Anticipate the hard questions. Answer them pre-emptively._

| Option                                 | Description                                                                                                                                                                                                                                                                                         |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **"What if we're wrong?" questions**   | "Q: What if [assumption] is wrong? A: We've designed [specific mitigation]. The decision is [reversible in N weeks / bounded in cost to $X]. The worst case is [description], which is acceptable because [reason]." Address the risk head-on. Show you've thought about failure, not just success. |
| **"Why not [alternative]?" questions** | "Q: Why not just [simpler approach]? A: [Simpler approach] fails on [specific requirement] because [specific reason]. We tested this assumption by [evidence]." The reader's first instinct will be "isn't there an easier way?" Pre-empt it.                                                       |
| **"What does this cost?" questions**   | "Q: What's the total cost? A: [Engineering: X person-months. Infrastructure: $Y/month. Opportunity cost: Z features delayed by N weeks]. We expect break-even in [timeframe] based on [model]." Total cost, not just direct cost. Include what you're not building.                                 |
| **"Who's impacted?" questions**        | "Q: Which teams are affected? A: [Team A] needs to [specific change]. [Team B] needs to [specific change]. We've aligned with [names] and they've committed to [specific deliverable by specific date]." Show you've done the cross-team work, not just the planning.                               |

### Sequencing Notes

- The document must be written as prose paragraphs, not bullet points. The discipline of complete sentences forces clarity.
- Tenets are the most important beat for long-term value. Six months later, when someone asks "why did we do it this way?" the tenets are the answer.
- The FAQ is where trust is built or lost. The reader's unasked questions are their objections. If you leave them unaddressed, the reader fills in their own (worse) answers.

---

## 2. OODA Loop (Observe-Orient-Decide-Act)

Military decision-making framework developed by John Boyd. Designed for environments where speed of iteration beats quality of any single decision. The framework is a loop, not a line — each cycle informs the next.

**Best for:** Incident response, competitive strategy, rapid pivots, crisis management, startup iteration

### Beats

#### Beat 1: Observe

_Gather raw information. Don't interpret yet — just collect._

| Option                         | Description                                                                                                                                                                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Data collection**            | "Here is what we know, from what sources: [data point 1 + source], [data point 2 + source], [data point 3 + source]. Here is what we don't know: [gap 1], [gap 2]." Separate observation from interpretation. Name the gaps explicitly.                 |
| **Signal detection**           | "The following signals are new or changed since [last observation]: [signal 1], [signal 2], [signal 3]. The following have not changed: [stable factor 1], [stable factor 2]." Focus on deltas. What changed matters more than what's true.             |
| **Multi-source triangulation** | "Source A says [X]. Source B says [Y]. Source C says [Z]. The convergence is [common finding]. The divergence is [conflicting finding]." When sources disagree, that's the most important observation.                                                  |
| **Ground truth check**         | "The last time we observed, we believed [X]. Since then, [evidence confirms / contradicts / is ambiguous]. Our confidence in [X] is now [higher / lower / unchanged]." Check your prior beliefs against new evidence before collecting new information. |

#### Beat 2: Orient

_Interpret the observations. Apply context, mental models, and prior experience._

| Option                                | Description                                                                                                                                                                                                                                                                             |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pattern matching**                  | "This situation resembles [historical precedent]. In that case, [what happened]. The key similarity is [X]. The key difference is [Y]." Map the current situation to a known pattern — then identify where the analogy breaks.                                                          |
| **Threat/opportunity classification** | "Of the observations in Beat 1: [N] are threats (require defensive action), [M] are opportunities (require offensive action), [P] are noise (require no action). Priority order: [ranked list]." Sort the signal from the noise. Not everything observed is actionable.                 |
| **Assumption audit**                  | "Our current strategy assumes: [assumption 1], [assumption 2], [assumption 3]. Based on Beat 1 observations: assumption 1 is [confirmed / challenged / broken]. Implication: [description]." Test your strategy's assumptions against reality. Broken assumptions demand reorientation. |
| **Adversary modeling**                | "If I were [competitor / threat actor / the market], here's what I would do given [their observations]: [predicted action]. Here's what that means for us: [implication]." Think from the other side's perspective. Their rational next move informs yours.                             |

#### Beat 3: Decide

_Choose a course of action. Commit to it explicitly._

| Option                       | Description                                                                                                                                                                                                                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Best available option**    | "Given the orientation in Beat 2, the best available action is [X]. We're choosing this over [Y] and [Z] because [criteria]. The expected outcome is [description]. We accept the risk of [downside]." Name the decision, the alternatives, the criteria, and the accepted risk.                          |
| **Minimum viable decision**  | "We don't have enough information to make a full decision. The minimum decision we can make now is [X]. This preserves optionality for [Y and Z] while moving us forward." When information is incomplete, decide the minimum necessary to keep iterating.                                                |
| **Reversibility assessment** | "This decision is [reversible in N hours/days / partially reversible / irreversible]. Given that classification: [if reversible: we're deciding fast and will correct on the next loop] [if irreversible: we need [additional validation] before committing]." Calibrate decision speed to reversibility. |
| **Decision with triggers**   | "We're deciding [X] now. If [trigger condition 1] occurs, we switch to [Y]. If [trigger condition 2] occurs, we abort and re-observe." Pre-commit to contingency decisions. This speeds up the next loop.                                                                                                 |

#### Beat 4: Act

_Execute the decision. Observe the results. Feed back into the next loop._

| Option                         | Description                                                                                                                                                                                                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Execute and measure**        | "Action taken: [specific action]. Metrics we're watching: [metric 1], [metric 2]. Check-in time: [specific date/time]. Expected signal of success: [description]. Expected signal of failure: [description]." Define what you'll observe in the next loop before you act in this one. |
| **Execute and communicate**    | "Action taken: [specific action]. Communicated to: [stakeholders]. Their expected response: [description]. If response differs from expected: [contingency]." In multi-player environments, the action's impact depends on how others react. Plan for their response.                 |
| **Execute with rollback plan** | "Action taken: [specific action]. Rollback trigger: [condition]. Rollback procedure: [steps]. Rollback cost: [description]." The act includes its own undo. Reduces the cost of being wrong.                                                                                          |
| **Rapid prototype**            | "Instead of full execution, we're running [small-scale test]: [description]. Duration: [timeframe]. If [success criteria]: proceed to full execution. If not: re-enter Observe." When the stakes are high and information is low, test before you commit.                             |

### Sequencing Notes

- The OODA Loop is a loop, not a sequence. After Act, you immediately return to Observe. The power is in cycle speed, not individual step quality.
- Orient is the most important beat. Two people with the same observations will reach different decisions based on their orientation (mental models, experience, biases). The quality of your orientation determines the quality of your decision.
- In competitive environments, the goal is to complete OODA loops faster than your opponent. If you're iterating weekly and they're iterating monthly, you'll win even with individually worse decisions.

---

## 3. Jobs-to-be-Done (JTBD)

Framework for understanding why customers make the choices they make. Based on the insight that people don't buy products — they "hire" products to do a "job" in their lives. Each beat maps a dimension of the hiring decision.

**Best for:** Product positioning, feature prioritization, competitive analysis, customer research synthesis, pricing strategy

### Beats

#### Beat 1: The Situation

_What circumstances create the need? Context, not demographics._

| Option                      | Description                                                                                                                                                                                                                                                                                                                                           |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **The trigger event**       | "The customer reaches for a solution when [specific event] happens. Examples: [event 1], [event 2], [event 3]. The common thread is [pattern]." Identify the moment the job arises — not who the customer is, but what happened to them.                                                                                                              |
| **The struggling moment**   | "The customer is struggling with [specific task] and feels [specific frustration]. They've tried [existing approach] and it fails because [reason]." The situation is defined by friction, not by a feature gap. The customer feels the problem before they seek a solution.                                                                          |
| **The context constraints** | "The customer is in [context]: [time pressure / budget constraint / skill limitation / team size / regulatory environment]. These constraints shape which solutions are even possible." The job is shaped by the situation, not just the desire. A busy parent and a retired hobbyist want the same outcome but have radically different constraints. |
| **The timeline pressure**   | "The customer needs to [outcome] by [deadline / before event / within timeframe]. The urgency isn't abstract — there's a specific forcing function." When there's a deadline, the customer's evaluation criteria shift from "best" to "done in time."                                                                                                 |

#### Beat 2: The Motivation

_What progress is the customer trying to make? Functional, emotional, and social dimensions._

| Option                | Description                                                                                                                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Functional job**    | "The customer wants to [specific functional outcome]: get X done, reduce Y, increase Z, automate W." The practical thing they need accomplished. Measurable, observable, testable.                                          |
| **Emotional job**     | "The customer wants to feel [specific emotion]: confident, relieved, proud, in control, creative, safe." The internal experience they're seeking. Often more powerful than the functional job as a purchase driver.         |
| **Social job**        | "The customer wants to be perceived as [specific social identity]: competent, innovative, responsible, ahead of the curve." How they want others to see them. The social job explains premium pricing and brand preference. |
| **All three layered** | "Functionally: [outcome]. Emotionally: [feeling]. Socially: [perception]." The complete motivation stack. Products that address all three dimensions have the strongest product-market fit.                                 |

#### Beat 3: The Expected Outcome

_What does success look like? How will the customer measure whether the job is done?_

| Option                  | Description                                                                                                                                                                                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Speed outcome**       | "The customer expects [job] to be done in [timeframe]. Anything longer is friction. The current best option takes [current time] — beating that is table stakes." Time is the metric. The customer's patience defines the competitive bar.                                 |
| **Quality outcome**     | "The customer expects [specific quality standard]: [concrete criteria]. They'll evaluate the output against [benchmark / peer comparison / internal standard]." Quality is the metric. Define it in the customer's terms, not yours.                                       |
| **Effort outcome**      | "The customer expects [job] to require [level of effort]. Current options require [more effort]. The delta between expected and actual effort is the value proposition." Effort is the metric. Products that reduce effort without reducing quality win.                   |
| **Reliability outcome** | "The customer expects [job] to work [X%] of the time without intervention. Current options fail at [failure rate]. Reliability is non-negotiable because [consequence of failure]." Consistency is the metric. For critical jobs, reliability beats every other dimension. |

#### Beat 4: The Hiring Criteria

_What factors determine which solution the customer "hires"?_

| Option                       | Description                                                                                                                                                                                                                                                                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Switching cost tolerance** | "The customer will switch from [current solution] if the improvement is [X magnitude]. Below that, the switching cost (learning curve, migration, habit change) exceeds the benefit." Define the minimum improvement required to overcome inertia.                                                                                   |
| **Anxiety barriers**         | "The customer's anxieties about switching are: [anxiety 1: "what if it doesn't work?"], [anxiety 2: "what if I lose my data?"], [anxiety 3: "what if my team won't adopt it?"]. Each must be addressed for the hire to happen." List the specific fears. Unaddressed anxiety kills deals that the product would otherwise win.       |
| **Habit of the present**     | "The customer's current habit is [description]. It's not optimal, but it's familiar. The new solution must be [X% better / different in kind, not just degree] to overcome the habit." The strongest competitor is always "doing nothing" or "doing what I already do."                                                              |
| **Pull of the new**          | "What attracts the customer to a new solution: [pull factor 1], [pull factor 2], [pull factor 3]. The pull must exceed the combined force of switching costs + anxiety + habit." The four forces: push of the current situation + pull of the new solution must exceed anxiety of the new solution + habit of the current situation. |

#### Beat 5: The Firing Criteria

_When does the customer "fire" a solution? What would make them fire yours?_

| Option                         | Description                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Functional failure**         | "The customer fires a solution when it stops doing the job: [specific failure mode 1], [failure mode 2], [failure mode 3]. The tolerance for failure is [X incidents / Y% failure rate / Z days of downtime]." Define the functional floor. Below it, no amount of brand loyalty or switching cost prevents churn.                                             |
| **Emotional failure**          | "The customer fires a solution when it makes them feel [negative emotion]: frustrated, embarrassed, anxious, out of control. The feeling doesn't have to be rational — it has to be persistent." Emotional churn often precedes functional churn. By the time the customer articulates a functional complaint, the emotional decision is already made.         |
| **Better alternative emerges** | "The customer fires a solution when [new option] appears that does [the job] at [lower cost / less effort / higher quality]. The customer doesn't need to be unhappy — they just need to see a better path." Churn isn't always dissatisfaction. Sometimes it's just a better offer. The defense is being so good that "good enough" alternatives don't tempt. |
| **Context changes**            | "The customer fires a solution when their situation changes: [they outgrow it / their team changes / regulation shifts / their budget changes]. The product didn't fail — the job changed." Not all churn is preventable. The question is whether you can grow with the customer or whether you're designed for a specific stage.                              |

### Sequencing Notes

- Situation before motivation. Most product teams start with "what does the customer want?" — but the situation determines which wants are active. A customer wants many things; the situation determines which one they're hiring for right now.
- The four forces (push/pull/anxiety/habit) in Beat 4 are the single most useful framework for understanding why customers do or don't switch. Map all four for your product.
- Firing criteria (Beat 5) is where most teams are blind. They study why customers buy but not why customers leave. The firing criteria should directly inform your retention strategy.

---

## 4. Wardley Map Narrative

A strategy framework that maps the evolution of components in a value chain. Unlike other frameworks, it's spatial — components have positions based on their maturity (genesis → custom → product → commodity). The narrative beats follow the strategic reasoning process.

**Best for:** Technology strategy, build-vs-buy decisions, competitive positioning, platform strategy, M&A analysis

### Beats

#### Beat 1: User Need

_Start with the user. What do they need? Why?_

| Option               | Description                                                                                                                                                                                                                                |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Direct user need** | "The user needs to [specific outcome]. They measure success by [metric]. They currently achieve this through [existing approach]." Start from the top of the value chain — the human need everything else serves.                          |
| **Latent need**      | "The user doesn't yet know they need [capability]. But when [condition changes], this need becomes urgent. The leading indicators are [signal 1], [signal 2]." The most powerful strategies serve needs the market hasn't articulated yet. |
| **Evolved need**     | "The user used to need [old need]. That need has evolved into [new need] because [market/technology/behavior shift]. Solutions designed for [old need] are misaligned." Needs evolve. Solutions that don't evolve with them become legacy. |

#### Beat 2: Value Chain

_Map every component required to serve the user need. What depends on what?_

| Option                    | Description                                                                                                                                                                                                                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Component inventory**   | "To serve [user need], the following components are required: [component 1] (depends on [component 2, 3]), [component 2] (depends on [component 4]), ... down to [commodity components]." Map the full dependency chain. Everything the user needs, and everything those things need.           |
| **Visible vs. invisible** | "The user sees: [visible components]. Behind those, invisible to the user: [infrastructure components]. The strategic leverage is often in the invisible layer." Distinguish what the customer values directly from what enables that value. The best margins are often in the invisible layer. |
| **Build vs. consume**     | "We build: [components]. We consume as services: [components]. We partner for: [components]. The boundary between build and consume is our key strategic choice." Categorize every component by its relationship to your organization.                                                          |

#### Beat 3: Evolution Stage

_Where is each component on the evolution axis? Genesis → Custom → Product → Commodity._

| Option                     | Description                                                                                                                                                                                                                                                                                                                                               |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Maturity assessment**    | "[Component A] is at [stage]: evidence = [why]. [Component B] is at [stage]: evidence = [why]. The most strategically important transition happening now is [component] moving from [stage] to [stage]." Assess each component's maturity honestly. The evidence should be market-observable, not your opinion.                                           |
| **Evolution mismatch**     | "We're treating [component] as [stage], but the market has moved it to [different stage]. This mismatch is costing us [specific cost]: [we're over-investing in custom building what's now a commodity / we're under-investing in something still in genesis]." The most common strategic error is misjudging where components sit on the evolution axis. |
| **Inertia identification** | "We have inertia around [component] because [we built it / we're proud of it / it was our differentiator]. But the market has commoditized it. Continuing to invest here is defending a position that no longer generates advantage." Inertia is the most dangerous force in strategy. Name it explicitly.                                                |

#### Beat 4: Movement

_What's about to change? Which components are evolving, and what does that mean?_

| Option                | Description                                                                                                                                                                                                                                                                                                                              |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Commodity shift**   | "[Component] is being commoditized by [player/technology]. This means: [what was expensive becomes cheap], [what was differentiating becomes table stakes], [new possibilities open at the layer above]." When a component commoditizes, the value shifts up the stack. Position yourself there.                                         |
| **Genesis emergence** | "A new component is emerging: [description]. It's currently in genesis (uncertain, expensive, poorly understood). If it matures, it will [change the value chain by...]. The question is: invest now (high risk, high reward) or wait (lower risk, potential for being too late)." Genesis components are bets. Name the bet explicitly. |
| **Convergence**       | "Two previously separate components — [A] and [B] — are converging into [C]. This creates [opportunity: unified offering] and [threat: new competitors from adjacent markets]." Convergence creates new competitive dynamics. The players who see it early win.                                                                          |
| **Platform play**     | "[Components X, Y, Z] are commoditizing. The strategic play is to build a platform that makes it easy to consume these commodities and focus customer attention on [the higher-order component where we differentiate]." The platform strategy: commoditize your complements, differentiate on what's above them.                        |

#### Beat 5: Strategic Play

_Given the map: what should we do?_

| Option                     | Description                                                                                                                                                                                                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Pioneer**                | "We should invest in [genesis component] before competitors recognize its importance. The risk is [it doesn't mature]. The reward is [first-mover advantage in a new layer of value]." The pioneer play. High risk, high reward, requires tolerance for uncertainty.                                                                     |
| **Settler**                | "We should take [custom/product component] and industrialize it. Make it reliable, scalable, and cheaper. The risk is [commoditization pressure]. The reward is [capturing the value as it transitions from custom to product]." The settler play. Lower risk, requires operational excellence.                                          |
| **Town planner**           | "We should commoditize [component] as a utility/service. The risk is [low margins]. The reward is [massive scale + ecosystem lock-in + the right to capture value from everything built on top]." The town planner play. AWS, Stripe, Twilio. Low margin per unit, enormous aggregate value.                                             |
| **Ecosystem orchestrator** | "We should build the platform that connects [component A] providers with [component B] consumers. We don't build either — we enable the connection. The risk is [dependency on third parties]. The reward is [network effects + data advantage + switching costs]." The marketplace/platform play. Requires critical mass on both sides. |

### Sequencing Notes

- Always start with the user need. A Wardley Map without a clear user need at the top is a technology inventory, not a strategy.
- The most common mistake is fighting the evolution axis — investing heavily in keeping a component custom when the market is commoditizing it. Identify your inertia in Beat 3 before choosing your play in Beat 5.
- Wardley Maps are living documents. The map you draw today is wrong in 6 months. The practice is re-mapping regularly, not perfecting a single map.
