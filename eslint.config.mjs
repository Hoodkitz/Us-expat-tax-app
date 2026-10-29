import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    // Neue React-19-Regel; bestehende Muster (useEffect+setState) bewusst noch erlaubt.
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
];

export default config;
