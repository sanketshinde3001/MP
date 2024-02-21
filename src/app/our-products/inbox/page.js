import React from "react";
import Mp_sec3inside_page1 from "@/app/Components/Mp_sec3inside_page1";
import Mp_sec3inside_page2 from "@/app/Components/Mp_sec3inside_page2";
import Mp_sec3inside_page3 from "@/app/Components/Mp_sec3inside_page3";
import Mp_sec3inisde_page4 from "@/app/Components/Mp_sec3inisde_page4";
import Mp_sec3inside_page5 from "@/app/Components/Mp_sec3inside_page5";
import Mp_contatctus from "@/app/Components/Mp_contatctus";
import Mp_footer from "@/app/Components/Mp_footer";

export default function Inside1() {
  return (
    <div className="bg-white">
      <Mp_sec3inside_page1
        imagesrc1="https://pros.weddingpro.com/wp-content/uploads/2023/10/1_hero.png"
        title1="WeddingPro Inbox: 
        client communications and details in one place"
        description1=" Our customer communication platform is your one-stop shop to
        efficiently communicate with couples and manage your wedding leads
        on The Knot and WeddingWire."
      />
      <Mp_sec3inside_page2
        imagesrc2="https://pros.weddingpro.com/wp-content/uploads/2023/10/2_smartermsg.png"
        title2="A smarter messaging hub"
        description2="  WeddingPro Inbox isn’t just any messaging system—this tool is designed to make managing your couple inquiries more efficient by keeping messages and details from The Knot and WeddingWire together in one, easily accessible place.."
      />

      <Mp_sec3inside_page3
        imagesrc3="https://pros.weddingpro.com/wp-content/uploads/2023/10/WP_B2B_Inbox_Clip1.gif?strip=all&quality=95"
        title3="Stand out by using personalized wedding details from couples"
        description3="WeddingPro Inbox provides a couple’s personalized wedding details, like wedding date, location, guest count, phone number and more so you can have meaningful conversations faster."
      />
      <Mp_sec3inisde_page4
        imagesrc4="https://pros.weddingpro.com/wp-content/uploads/2023/10/WP_Phoenix_Inbox_QuickReply_1-1.gif?strip=all&quality=95"
        title4="Customize communication for quick replies while on the go"
        description4="Response time matters when connecting with potential clients. Inbox’s quick reply templates allow you to reply to couple inquiries quickly so you can keep the conversation moving."
      />
      <Mp_sec3inside_page5
        imagesrc5="https://pros.weddingpro.com/wp-content/uploads/2023/10/WP_Phoenix_Inbox_Features_1-1.gif?strip=all&quality=95"
        title5="A more organized inbox"
        description5="   WeddingPro Inbox allows you to manage your wedding leads by prioritizing conversations, marking couples as booked, archiving conversations, adding attachments and blocking spam to keep you organized, on task, and continuously booking couples."
      />
      <Mp_contatctus/>
      <Mp_footer/>
    </div>
  );
}
