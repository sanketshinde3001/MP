import Mp_sec2inside_page1 from "@/app/Components/Mp_sec2inside_page1";
import Mp_sec2inside_page2 from "@/app/Components/Mp_sec2inside_page2";
import Mp_sec2inside_page3 from "@/app/Components/Mp_sec2inside_page3";
import Mp_sec2inside_page4 from "@/app/Components/Mp_sec2inside_page4";
import Mp_sec2inside_page5 from "@/app/Components/Mp_sec2inside_page5";
import Mp_contatctus from "@/app/Components/Mp_contatctus";
import Mp_footer from "@/app/Components/Mp_footer";;
import React from "react";
import Mp_navbar from "@/app/Components/Mp_navbar";

const page = () => {
  return (
    <>
      <Mp_navbar/>
      <Mp_sec2inside_page1
        title1={
          <>
            {"Customer reviews: "}
            <br />
            {"build trust and connect with the right couples"}
          </>
        }
        description1="Reviews are one of the top things future clients look at before deciding to reach out to your business. Make that decision easy for them by showcasing your reviews on The Knot and WeddingWire"
        imagesrc1="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_hero-2.png"
      />
      <Mp_sec2inside_page2
        imagesrc2="https://pros.weddingpro.com/wp-content/uploads/2023/10/2_customerreviews.png"
        title2="Let past customer reviews do the selling for you"
        description2="Customer reviews build trust and credibility, boost your SEO and give invaluable social proof to your brand. With over 9.6 million couple reviews, The Knot and WeddingWire allow you to request, respond to and showcase your top reviews so couples can get insight into your business."
        linkHref2=""
        buttonText2="Get started"
        imagewidth2={570}
        imageheight2={467}
      />
      <Mp_sec2inside_page3
        imagesrc3="https://pros.weddingpro.com/wp-content/uploads/2023/10/WP_Phoenix_Reviews_1.gif?strip=all&quality=95"
        title3="Drive leads with reviews"
        description3="Social proof is a powerful tool that you can use to learn more bookings. In fact, wedding pros with reviews on their Storefronts on The Knot and WeddingWire recieve 2x more leads than vendore with no reviews."
        linkHref3=""
        buttonText3="Sign up today"
        imagewidth3={670}
        imageheight3={955}
      />
      <Mp_sec2inside_page4
        imagesrc4="https://pros.weddingpro.com/wp-content/uploads/2023/10/4_expert-6.png"
        title4="Position yourself as the expert that you are"
        description4="The Knot and WeddingWire allow you to easily request reviews with pre-populated templates and a unique link to drop into your client messages. Then, you can prominently feature your top reviews so you can always put your best foot forward."
        linkHref4=""
        buttonText4="Learn more"
        imageheight4={1032}
        imagewidth4={1028}
        width4={32}
        
      />
      <Mp_sec2inside_page5
        imagesrc5="https://pros.weddingpro.com/wp-content/uploads/2023/10/WP_Phoenix_Reviews_2.gif?strip=all&quality=95"
        title5="Use reviews to build connections with future clients"
        description5="Once your reviews start rolling in, you have the ability to respond to show your appreciation and let future clients know you care. You can also build trust with couples by earning awards like Best of Weddings and Couples’ Choice Awards®, and showcasing your badges."
        linkHref5=""
        buttonText5="Get started"
        imageheight5={799}
        imagewidth5={625}
      />
      <Mp_contatctus/>
      <Mp_footer/>
    </>
  );
};

export default page;
