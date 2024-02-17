import React from "react";
import Sec1_Card from "./MP_sec1inside_card";
import Link from "next/link";

const Mp_section_1 = () => {
  const one = (
    <>
      From 360° tours to breathtaking photos and winning reviews, your on{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        Storefronts
      </Link>{" "}
      The Knot and WeddingWire make it easy to showcase your unique venue.
    </>
  );
  const two = (
    <>
      With 93% of couples relying on photos to make their booking decisions, you
      can highlight your best work on your{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        Storefronts
      </Link>{" "}
      to attract couples looking for your exact style.
    </>
  );
  const three = (
    <>
      Feature unlimited videos and display your unique work, artistic style, and
      exclusive badges you’ve earned by receiving great{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        reviews
      </Link>{" "}
      to build trust with your couples.
    </>
  );
  const four = (
    <>
      Market your business to the largest audience of couples on any wedding
      platform by featuring unlimited photos of your stunning wedding wear
      inventory in your{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        Storefronts
      </Link>{" "}
      .
    </>
  );
  const five = (
    <>
      The Knot and WeddingWire help you stand out among your competitors by
      increasing your visibility and maximizing your potential for a quick{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        return on your investment
      </Link>{" "}
      .
    </>
  );
  const six = (
    <>
      WeddingPro makes it easy to build new industry relationships with{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        local and national events
      </Link>{" "}
      designed to connect you with other pros to help grow your business.
    </>
  );
  const seven = (
    <>
      Your{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        Storefronts
      </Link>{" "}
      on The Knot and WeddingWire showcase your ability to keep the party going
      and stand out to potential couples looking for your unique style.
    </>
  );
  const eight = (
    <>
      Use your{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        Storefronts
      </Link>{" "}
      on The Knot and WeddingWire to feature unlimited videos of your band
      performing so you can showcase your sound and style to the right couples
      looking for you.
    </>
  );
  const nine = (
    <>
      Highlight your work and most popular floral arrangements on your{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        Storefronts
      </Link>{" "}
      on The Knot and WeddingWire to capture the attention and trust of your
      ideal couples.
    </>
  );
  const ten = (
    <>
      Connect with other pros, such as venues and wedding planners, at{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        local and national networking events
      </Link>{" "}
      to expand your reach and connect with more couples.
    </>
  );
  const eleven = (
    <>
      Get higher-quality leads for your bakery by partnering with The Knot and
      WeddingWire to{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        connect with couples
      </Link>{" "}
      at the perfect point in their planning process.
    </>
  );
  const twelve = (
    <>
      WeddingPro hosts local and national events, making it easy to establish
      relationships with venues and other pros who can{" "}
      <Link
        href="/temp"
        className="text-blue-700 font-semibold underline hover:no-underline hover:text-black"
      >
        connect you with more couples
      </Link>
      .
    </>
  );

  return (
    <>
      <div className="grid grid-cols-4 gap-4 pt-20 max-md:gap-5  max-md:grid-cols-1 ">
        <Sec1_Card title={"Venues"} desc={one} />
        <Sec1_Card title={"Photographers"} desc={two} />
        <Sec1_Card title={"Videographers"} desc={three} />
        <Sec1_Card title={"Bridal salons"} desc={four} />
        <Sec1_Card title={"Hair & makeup"} desc={five} />
        <Sec1_Card title={"Wedding planners"} desc={six} />
        <Sec1_Card title={"DJs"} desc={seven} />
        <Sec1_Card title={"Wedding bands"} desc={eight} />
        <Sec1_Card title={"Florists"} desc={nine} />
        <Sec1_Card title={"Officiants"} desc={ten} />
        <Sec1_Card title={"Wedding cakes"} desc={eleven} />
        <Sec1_Card title={"Caterers"} desc={twelve} />
      </div>
    </>
  );
};

export default Mp_section_1;