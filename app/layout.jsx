import "@/styles/global.css";

export const metadata = {
  title: "Prompt Share",
  description: "Discover and Share AI Prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
