const RESULTS = [
  {
    key: "emerging_self",
    title: "Emerging Self",
    content: `
You are in a phase of becoming aware of yourself in a deeper, more honest way than before. This stage is not dramatic, loud, or externally visible. It is quiet, internal, and subtle. You may not feel confident yet, but you feel something shifting. Old explanations no longer fully satisfy you, and new ones have not fully formed. This can feel uncomfortable, but it is one of the most important phases of growth.

In this state, you are beginning to notice patterns instead of being controlled by them. You may catch yourself pausing, questioning, or observing your reactions rather than immediately acting on them. This does not mean you suddenly know what to do. It means you are learning how to look inward without judgment.

You may feel emotionally sensitive or mentally reflective. That sensitivity is not weakness. It is awareness sharpening. When awareness increases, things feel closer and more vivid. This can make emotions feel heavier at first, but it is actually a sign that you are no longer disconnected from yourself.

There is no urgency in this phase. You are not meant to rush clarity. You are meant to let understanding form naturally. Trying to force decisions now may create anxiety. Allow questions to exist without answers. This stage is about listening, not fixing.

You are not behind. You are not late. You are not broken. You are in the early stages of alignment. What feels uncertain now will become the foundation for clarity later.

This phase asks only one thing of you: honesty with yourself. Nothing more. That honesty is already changing you.
`
  },

  {
    key: "emotionally_processing",
    title: "Emotionally Processing",
    content: `
You are actively processing emotions that were previously set aside, minimized, or postponed. This does not mean you are overwhelmed. It means your system has decided it is safe enough to feel. Emotional processing often feels tiring because it requires presence rather than avoidance.

You may notice emotions surfacing without obvious reasons. Memories, thoughts, or sensations may arise unexpectedly. This is not regression. It is integration. Your mind is completing emotional cycles that were left unfinished.

During this stage, you may feel quieter, more inward, or less interested in constant stimulation. Productivity may feel harder. This does not mean something is wrong. It means your emotional system is doing important internal work.

Emotional processing is not linear. Some days feel lighter, others heavier. Both are part of the same process. The goal is not to feel good immediately. The goal is to allow emotions to pass through rather than remain stored.

This phase strengthens emotional resilience. Each feeling acknowledged loses its unconscious power. You are learning that emotions do not require immediate action to be valid.

Be gentle with yourself here. You are not stuck. You are completing something.
`
  },

  {
    key: "quietly_overwhelmed",
    title: "Quietly Overwhelmed",
    content: `
You are carrying more than you openly express. On the surface, you appear functional and composed. Internally, pressure has been building slowly. This type of overwhelm is subtle, which is why it often goes unnoticed for too long.

You may feel mentally tired, emotionally flat, or irritable without clear cause. Rest does not feel fully restorative because your mind remains engaged even during breaks. This is not burnout yet, but it is a warning signal.

Quiet overwhelm often comes from long-term responsibility without release. You have been holding things together. That strength has a cost.

You do not need to collapse to justify rest. Acknowledging internal load is enough. Naming what you are carrying reduces its weight.

This stage asks for small pauses, not drastic changes. Even brief moments of disengagement help reset capacity. You are not weak. You are human under sustained demand.

Relief begins with awareness.
`
  },

  {
    key: "self_aware_but_stuck",
    title: "Self-Aware but Stuck",
    content: `
You understand yourself better than before, yet forward movement feels blocked. This is frustrating because awareness usually promises progress. You see patterns clearly, but action feels delayed.

This state appears when understanding grows faster than emotional readiness. Part of you knows what needs to change. Another part is protecting stability. That hesitation is not failure. It is self-preservation.

Being stuck does not mean you are stagnant. It means integration is still happening. Change that is forced rarely lasts.

This phase requires patience. Awareness is still doing its work beneath the surface. Movement will come when readiness catches up.

You are not broken. You are preparing.
`
  },

  {
    key: "guarded_but_growing",
    title: "Guarded but Growing",
    content: `
You are growing carefully. You are open to change, but selective about trust. Experience has taught you to move with discernment.

This is not fear. It is wisdom. You are learning how to engage without overexposing.

You may observe longer before committing. You may share selectively. Growth here is steady and sustainable.

You are not closed. You are intentional. That matters.
`
  },

  {
    key: "mentally_exhausted",
    title: "Mentally Exhausted",
    content: `
Your mind is tired from constant processing. Planning, deciding, monitoring, and thinking have consumed more energy than you realize.

In this state, motivation feels forced and rest feels shallow. Your brain is asking for less input, not more solutions.

Mental exhaustion resolves through simplicity. Fewer decisions. Fewer expectations. More quiet.

You do not need inspiration right now. You need space.
`
  },

  {
    key: "seeking_direction",
    title: "Seeking Direction",
    content: `
You feel ready for movement but unsure where to aim. Old paths feel misaligned, and new ones are not yet clear.

This is not confusion. It is transition. Direction emerges through small exploration, not certainty.

Trust curiosity. It knows more than logic right now.
`
  },

  {
    key: "internally_conflicted",
    title: "Internally Conflicted",
    content: `
Different parts of you want different outcomes. This creates tension and hesitation.

Conflict does not mean dysfunction. It means complexity.

Resolution comes through understanding, not force.
`
  },

  {
    key: "rebuilding_confidence",
    title: "Rebuilding Confidence",
    content: `
You are reconnecting with your sense of capability after doubt or disruption. Confidence is returning quietly.

Each small follow-through matters. Trust is rebuilt through consistency.

You are rebuilding from truth.
`
  },

  {
    key: "detached_observer",
    title: "Detached Observer",
    content: `
You are observing rather than reacting. This creates clarity and perspective.

Detachment can be restorative when balanced.

Remain aware, not disconnected.
`
  },

  {
    key: "emotionally_open",
    title: "Emotionally Open",
    content: `
You are receptive and present. Emotions flow without resistance.

This state deepens connection but requires boundaries.

Stay grounded as you engage.
`
  },

  {
    key: "grounded_clear",
    title: "Grounded & Clear",
    content: `
You are centered and aligned. Thoughts are organized. Emotions are proportionate.

This is coherence, not perfection.

Use this clarity gently.
`
  }
];

const score = parseInt(localStorage.getItem("score")) || 0;
const result = RESULTS[score % RESULTS.length];

document.getElementById("type").innerText = result.title;
document.getElementById("result").innerHTML = result.content;