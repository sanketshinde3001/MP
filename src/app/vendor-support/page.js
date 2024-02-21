import React from "react";
import Mp_sec5inside_page1 from "@/app/Components/Mp_sec5inside_page1";
import Mp_sec5inside_page2 from "@/app/Components/Mp_sec5inside_page2";
import Mp_contatctus from "@/app/Components/Mp_contatctus";
import Mp_footer from "@/app/Components/Mp_footer";

const page = () => {
  return (
    <>
    <div>
      <Mp_sec5inside_page1
        imagesrc1="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_hero-7.png"
        title1="WeddingPro vendor support"
        description1=" Need help with your Storefronts on The Knot and WeddingWire? We’re here to help! Check out some of our most commonly asked questions below, visit our support pages or reach out to us directly at support@weddingpro.com and 877-331-7752 to get started."
      />
      <Mp_sec5inside_page2 />
      <Mp_contatctus/>
<Mp_footer/>
    </div>
    </>
  );
};

export default page;
