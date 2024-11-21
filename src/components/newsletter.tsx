import * as React from "react";
import { Widget } from "@typeform/embed-react";
import { Script } from "gatsby";

export default function Newsletter() {
  // pages/index.tsx

  return (
    <div>
      <h3>Inscription à la liste de diffusion du Cèdre bleu</h3>
      <iframe
        data-tally-src="https://tally.so/embed/mRZvAp?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="216"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Newsletter subscribers"
      ></iframe>

      <Script
        src="https://tally.so/widgets/embed.js"
        onLoad={() => (window as any).Tally.loadEmbeds()}
      />
    </div>
  );
}
