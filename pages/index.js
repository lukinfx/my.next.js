import Head from "next/head";
import Header from "@components/Header";

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description" style={{ color: 'green' }}>
          Koupim ti Mustanga
        </p>
        <p className="description" style={{ color: 'blue', fontSize: '6px' }}>
          Na dalkove ovladani
        </p>
      </main>
    </div>
  );
}
