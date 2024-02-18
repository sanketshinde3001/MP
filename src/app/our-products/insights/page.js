import Mp_sec2inside_page1 from "@/app/Components/Mp_sec2inside_page1";
import Mp_sec2inside_page2 from "@/app/Components/Mp_sec2inside_page2";
import Mp_sec2inside_page3 from "@/app/Components/Mp_sec2inside_page3";
import Mp_sec2inside_page4 from "@/app/Components/Mp_sec2inside_page4";
import Mp_sec2inside_page5 from "@/app/Components/Mp_sec2inside_page5";
import Mp_contatctus from "@/app/Components/Mp_contatctus";
import Mp_footer from "@/app/Components/Mp_footer";
import React from "react";

const page = () => {
  return (
    <>
      <Mp_sec2inside_page1
        title1="WeddingPro Insights: understand and maximize your ROI"
        description1="Our Insights tool is designed to give you a full view of your performance analytics all in one place, making it even easier to know how your Storefronts on The Knot and WeddingWire are working for you."
        imagesrc1="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_Hero-1.png"
      />
      <Mp_sec2inside_page2
        imagesrc2="https://pros.weddingpro.com/wp-content/uploads/2023/10/2_KeyBusiness-1.png"
        title2="Making key business decisions has never been easier"
        description2="Insights is a set of wedding business tools you can use to pulse-check your Storefronts’ analytics, drill down into each platform’s performance and get a deeper understanding of your business insights and lead tracking."
        linkHref2="/Footer" //add link to the footer section here so that when user click the button the page should scrool down on the footer section
        buttonText2="Learn more"
        imagewidth2={570}
        imageheight2={200}
      />
      <Mp_sec2inside_page3
        imagesrc3="https://pros.weddingpro.com/wp-content/uploads/2023/10/3_PerformanceAnalytics-3.png"
        title3="Get your performance analytics in real time"
        description3="Multiple views help you focus on the metrics that matter most. Whether it’s an annual summary of your performance analytics, a full view into your lead tracking efforts, a snapshot of the unique business insights on each platform or a report of your total Storefront activity month over month, you’ll always know how you’re doing."
        linkHref3=""
        buttonText3="Get started"
        imagewidth3={688}
        imageheight3={955}
      />
      <Mp_sec2inside_page4
        imagesrc4="https://pros.weddingpro.com/wp-content/uploads/2023/10/WP-Phoenix-Insights-DigDeeper.gif?strip=all&quality=95"
        title4="Dig deeper into every interaction"
        description4="Our tools help you better understand a couple’s interest in and engagement with your business across The Knot and WeddingWire by providing key insights like clicks to your social media, views on your Storefront, inquiries received and marked bookings."
        linkHref4=""
        buttonText4="Sign up today"
        imageheight4={465}
        imagewidth4={570}
        width4={36}
        
      />
      <Mp_sec2inside_page5
        imagesrc5="https://pros.weddingpro.com/wp-content/uploads/2023/10/WP-Phoenix-Insights-Analytics-Vertical.gif"
        title5="Easily forecast future growth with key business metrics"
        description5="Our Insights tool breaks down user behavior and lead tracking to simplify forecasting so you can gauge future interest and more easily make strategic decisions like staffing, scaling, and adjusting your pricing strategy as you evolve."
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
