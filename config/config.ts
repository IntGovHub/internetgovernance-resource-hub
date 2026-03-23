export const config = {
  appName: 'Internet Governance Resource Hub',
  version: '1.0.0',
  port: 3000,
  environment: process.env.NODE_ENV || 'development',
  colors: {
    primary: "#4f46e5",
    secondary: "#6366f1",
    accent: "#818cf8",
    background: "#f8fafc",
    text: "#0f172a"
  },
  routes: [
    { name: "Home", path: "/" },
    { name: "Success Stories", path: "/resources/success-stories" },
    { name: "Conferences", path: "/resources/conferences" },
    { name: "Fellowships", path: "/resources/fellowships" },
    { name: "Jobs", path: "/resources/jobs" },
    { name: "Speaker Bank", path: "/youth/speaker-bank" },
    { name: "Funding", path: "/resources/funding" }
  ]
};
