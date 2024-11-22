import React from "react";

export default function Matomo() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      var _mtm = ((window as any)._mtm = (window as any)._mtm || []);
      _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
      var d = document,
        g = d.createElement("script"),
        s = d.getElementsByTagName("script")[0];
      g.async = true;
      g.src =
        "https://cdn.matomo.cloud/lecedrebleupx.matomo.cloud/container_680TaRAp.js";
      s.parentNode?.insertBefore(g, s);
    }
  }, []);
  return <></>;
}
