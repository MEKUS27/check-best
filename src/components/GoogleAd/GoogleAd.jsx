import { useEffect } from "react";

function GoogleAd() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdsbyGoogle error", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-client="ca-pub-9463658965943184"
      data-ad-slot="9779158765"  
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
}

export default GoogleAd;
