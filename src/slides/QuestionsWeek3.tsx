import { motion } from "framer-motion";
import { SlideHeader, SlideShell } from "../components/index.ts";
import { cardRise } from "../lib/motion.ts";

const GLOWS = [
  { top: -200, right: -120, size: 800, color: "124, 58, 237", opacity: 0.15 },
  { bottom: -200, left: -100, size: 700, color: "16, 185, 129", opacity: 0.1 },
];

export function QuestionsWeek3() {
  return (
    <SlideShell glows={GLOWS}>
      <SlideHeader
        label="Discussion & Outro"
        title="Personal Questions & "
        highlight="Requests."
      />

      <div style={{ flex: 1, display: "flex", gap: 40, alignItems: "stretch", minHeight: 0, paddingBottom: 24, margin: "24px 0" }}>
        
        {/* Card 1: Research Paper Habits */}
        <motion.div
          {...cardRise(0.1)}
          style={{
            flex: 1.1,
            background: "rgba(124, 58, 237, 0.02)",
            border: "1px solid rgba(124, 58, 237, 0.12)",
            borderRadius: "28px",
            padding: "40px 48px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            justifyContent: "flex-start",
          }}
        >
          <h3 style={{ fontSize: 24, fontWeight: 900, color: "#7C3AED", marginTop: 0, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
            📚 Research Papers: Reading Habits
          </h3>
          <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
            I've been thinking about how to read and organize research papers more effectively. Right now I read quite slowly — I like to understand everything before moving on, and sometimes one paper leads me to three or four others.
          </p>
          <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
            I've been keeping notes in Notion, but as the list grows I feel like there might be better approaches. <strong>I'd love to hear how you and the other students approach reading papers:</strong>
          </p>
          <ul style={{ margin: 0, paddingLeft: 24, fontSize: 18, color: "#374151", lineHeight: 1.7 }}>
            <li>How do you choose what to read next?</li>
            <li>What methods do you use to take structured notes?</li>
            <li>How do you map and track connections between papers?</li>
          </ul>
        </motion.div>

        {/* Card 2: Internship Evaluation */}
        <motion.div
          {...cardRise(0.25)}
          style={{
            flex: 0.9,
            background: "rgba(16, 185, 129, 0.02)",
            border: "1px solid rgba(16, 185, 129, 0.12)",
            borderRadius: "28px",
            padding: "40px 48px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            justifyContent: "flex-start",
          }}
        >
          <h3 style={{ fontSize: 24, fontWeight: 900, color: "#10B981", marginTop: 0, marginBottom: 12, display: "flex", alignItems: "center", gap: 10 }}>
            📝 Internship Evaluation Form
          </h3>
          <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
            My university in Thailand requires a supervisor evaluation form as part of my internship assessment.
          </p>
          <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
            The form is currently being translated from Thai to English. <strong>Once it is ready, would it be possible for you to help fill it out?</strong>
          </p>
          <p style={{ fontSize: 18, color: "#4B5563", lineHeight: 1.7, margin: 0 }}>
            I will send it to you as soon as the translation is complete. Thank you very much for your support!
          </p>
        </motion.div>

      </div>
    </SlideShell>
  );
}
