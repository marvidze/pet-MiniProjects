/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    defaultButton:
      "border-[#5f5f5f] border-[1px] hover:bg-[#555555] hover:text-white transition rounded-[20px]",
    extend: {},
  },
  plugins: [],
};
