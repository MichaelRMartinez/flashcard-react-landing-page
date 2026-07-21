import { BarChart3, Brain, Filter, Repeat2, Shuffle, Zap } from "lucide-react";

export const featuresItems = [
  {
    icon: Brain,
    color: "#f72585",
    title: "Spaced Repetition",
    desc: "Cards you struggle with appear more often. Cards you know well fade to the background. Study smarter.",
  },
  {
    icon: Zap,
    color: "#f4b942",
    title: "Flip & Reveal",
    desc: "Tap any card to flip it and reveal the answer. Smooth 3D animations make studying satisfying.",
  },
  {
    icon: BarChart3,
    color: "#7b9cff",
    title: "Mastery Tracking",
    desc: "Each card has a 0–5 mastery scale. Watch your progress build as you mark cards you know.",
  },
  {
    icon: Filter,
    color: "#2de2b0",
    title: "Smart Filtering",
    desc: "Filter by category, hide mastered cards, and focus exactly where you need practice most.",
  },
  {
    icon: Shuffle,
    color: "#e86f82",
    title: "Shuffle Mode",
    desc: "Randomise your deck to break patterns and ensure you're really learning, not just memorising order.",
  },
  {
    icon: Repeat2,
    color: "#a78bfa",
    title: "Reset & Retry",
    desc: "Reset any card's progress and start from scratch. Perfect for revisiting material after a break.",
  },
];

export const howItWorksItems = [
  {
    num: "1",
    color: "#f72585",
    title: "Enter your email",
    desc: "No password needed. Just type your email and we'll send you a secure magic link.",
  },
  {
    num: "2",
    color: "#f4b942",
    title: "Click the magic link",
    desc: "Open the email and click the link. You're instantly signed in — no account setup required.",
  },
  {
    num: "3",
    color: "#2de2b0",
    title: "Create your first deck",
    desc: "Add a question, answer, and category. You can create as many cards as you need.",
  },
  {
    num: "4",
    color: "#7b9cff",
    title: "Start studying",
    desc: "Flip cards, mark what you know, track your mastery, and watch your knowledge grow.",
  },
];

export const statsItems = [
  {
    value: "0–5",
    label: "Mastery levels per card",
    color: "#f72585",
  },
  { value: "Inf", label: "Cards you can create", color: "#21a581" },
  {
    value: "1 click",
    label: "To reveal any answer",
    color: "#b78b32",
  },
  {
    value: "Free",
    label: "Forever, no credit card",
    color: "#4d6ed1",
  },
];
