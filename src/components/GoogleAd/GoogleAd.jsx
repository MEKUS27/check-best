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
      data-ad-slot="9779158765"  // Replace this with a real Ad Slot ID from your AdSense account
      data-ad-format="auto"
      data-full-width-responsive="true"></ins>
  );
}

export default GoogleAd;
