import Head from "next/head";
import Header from "@components/Header";

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description" style={{ color: 'red' }}>
          Miluji te
        </p>
      </main>
    </div>
  );
}
