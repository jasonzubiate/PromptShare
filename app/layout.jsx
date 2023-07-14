import "@/styles/global.css";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";

export const metadata = {
  title: "PromptShare",
  description: "Discover and Share AI Prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Nav/>
          {children}</main>
      </body>
    </html>
  );
}

export default RootLayout;