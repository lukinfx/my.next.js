import { useState } from "react";
import Head from "next/head";
import Header from "@components/Header";

export default function Home() {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(true);
  };

  return (
    <div className="container">
      <main>
        <Head>
          <title>Next.js App</title>
        </Head>
        <Header title="Next.js Toolbox" />
        <hr />
        {!showText && (
          <a href="#" onClick={handleClick}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/800px-Heart_coraz%C3%B3n.svg.png"
              alt="Button Image"
              className="button-image"
              width={100} // Set the desired width of the image
              height={100} // Set the desired height of the image
            />
          </a>
        )}
        {showText && (
          <p
            className="description"
            style={{ color: 'green', fontFamily: 'cursive' }}
          >
            Drahá Verunko, chtěl bych ti sdělit, že jsi překrásná a milá a snaživá holka, kterou bezmezně miluji. Vždy při tobě budu stát a vždy ti se vším pomůžu, na život od teď nejsi sama. A teď mi pochval mou aplikaci.
          </p>
        )}
      </main>
    </div>
  );
}
