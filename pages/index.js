import Head from "next/head";
import Header from "@components/Header";

export default function Home() {
  return (
    <div className="container">
      <main>
        <Header title="Next.js Toolbox" />
        <hr />
        <p className="description">
          Takto ti mohu ukazovat moje pokusy
        </p>
        <FeedbackForm />
        <JokeBlock />
      </main>
      <Footer />
    </div>
  );
}
