const RESULTS = [
  {
    title: "Emerging Self",
    content: `
You are beginning to understand yourself in a deeper and more honest way. This phase is subtle, quiet, and powerful. You are no longer running on autopilot. You are noticing your thoughts, reactions, and emotional patterns with increasing clarity.

There may still be uncertainty, but it no longer feels empty. It feels like space being created. Awareness is forming the foundation for future direction. You are learning that growth does not require rushing. It  requires presence

This stage is about honesty, patience, and allowing understanding to mature naturally. You are not behind. You are becoming.
`
  },
  {
    title: "Emotionally Processing",
    content: `
You are actively processing emotions that were previously ignored or postponed. Feelings surface because your system now feels safe enough to acknowledge them.

This phase can feel heavy, but it is deeply healing. Emotional awareness is strengthening. You are learning to feel without being consumed.
`
  },
  {
    title: "Quietly Overwhelmed",
    content: `
You are carrying more than you openly express. Responsibility has accumulated internally. This overwhelm is subtle but real.

You do not need to collapse to justify rest. Awareness is the first release.
`
  },
  {
    title: "Self-Aware but Stuck",
    content: `
You understand yourself better than before, yet movement feels paused. Awareness has arrived faster than readiness.

This is not failure. It is preparation.
`
  },
  {
    title: "Guarded but Growing",
    content: `
You are open to growth, but selective with trust. Experience has taught you discernment.

This is steady, sustainable growth.
`
  },
  {
    title: "Mentally Exhausted",
    content: `
Your mind has been working continuously. Decision fatigue is present.

What you need is simplicity, not motivation.
`
  },
  {
    title: "Seeking Direction",
    content: `
You feel ready for change but unsure where to aim. Old paths feel misaligned.

Direction will come through exploration.
`
  },
  {
    title: "Internally Conflicted",
    content: `
Different parts of you want different things. This creates hesitation.

Understanding resolves conflict.
`
  },
  {
    title: "Rebuilding Confidence",
    content: `
Confidence is returning slowly after doubt. Small actions rebuild trust in yourself.

Consistency matters more than speed.
`
  },
  {
    title: "Detached Observer",
    content: `
You are observing rather than reacting. This creates clarity.

Balance observation with engagement.
`
  },
  {
    title: "Emotionally Open",
    content: `
You are receptive and emotionally present. This deepens connection.

Maintain boundaries as you open.
`
  },
  {
    title: "Grounded & Clear",
    content: `
You are centered, aligned, and mentally steady. Thoughts and emotions are proportionate.

This is coherence, not perfection.
`
  }
];

const scores =
  JSON.parse(localStorage.getItem("scenarioScores")) ||
  new Array(12).fill(0);

const highestScore = Math.max(...scores);
const resultIndex =
  highestScore > 0 ? scores.indexOf(highestScore) : 0;

const result = RESULTS[resultIndex];

document.getElementById("type").innerText = result.title;
document.getElementById("result").innerHTML = result.content;