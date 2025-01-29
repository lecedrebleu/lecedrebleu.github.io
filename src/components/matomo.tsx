import React from "react";

export default function Matomo() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      var _paq = ((window as any)._mtm = (window as any)._mtm || []);
      _paq.push(["trackPageView"]);
      _paq.push(["enableLinkTracking"]);
      (function () {
        var u = "https://matomo.lecedrebleu-px.fr/";
        _paq.push(["setTrackerUrl", u + "matomo.php"]);
        _paq.push(["setSiteId", "1"]);
        var d = document,
          g = d.createElement("script"),
          s = d.getElementsByTagName("script")[0];
        g.async = true;
        g.src = u + "matomo.js";
        s.parentNode?.insertBefore(g, s);
      })();
    }
  }, []);
  return <></>;
}
