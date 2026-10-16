"use client";

import Image from "next/image";
import { useState } from "react";

const BREAD_IMAGE = "/illustrations/bread-roll.svg";

// Reuse the same artwork in each individual bag and in the shared bag.
function BreadRoll({ index = 0 }) {
  return (
    <span className="pack-bread" style={{ "--bread-delay": `${-index * 0.65}s` }}>
      <Image
        src={BREAD_IMAGE}
        alt=""
        width={48}
        height={48}
        className="pack-bread-image"
        draggable={false}
      />
    </span>
  );
}

export default function PackagingComparison() {
  const [together, setTogether] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleSelect = (isTogether) => {
    if (isTogether === together) return;
    setTogether(isTogether);
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div className="split pack-comparison">
      <div>
        <h2>
          Таван нарийн боов.
          <br />
          Хэдэн уут?
        </h2>
        <p className="lead">Савлагааны сонголтыг дарж, ялгааг хараарай.</p>
        <div className="choices">
          <button
            type="button"
            className={`choice ${!together ? "active" : ""}`}
            id="separate"
            aria-pressed={!together}
            onClick={() => handleSelect(false)}
          >
            Тус тусад нь
          </button>
          <button
            type="button"
            className={`choice ${together ? "active" : ""}`}
            id="together"
            aria-pressed={together}
            onClick={() => handleSelect(true)}
          >
            Хамтад нь
          </button>
        </div>
        <p id="demoText">
          {together
            ? "Хэрэглэгч зөвшөөрч, тохиромжтой нэг уутанд хамт савлавал нийт 1 уут."
            : "Бүтээгдэхүүн бүрд нэг жижиг уут ашиглавал нийт 5 уут."}
        </p>
        <p className="note">
          Ижил төрлийн, хамт савлахад тохирох бүтээгдэхүүний жишээ. Гадна авч
          явах уутыг энэ харьцуулалтад тооцоогүй.
        </p>
      </div>

      <div className="demo pack-demo" aria-live="polite" aria-atomic="true">
        <div
          key={animKey}
          className={`bagrow pack-bagrow ${
            together ? "pack-bagrow--together" : "pack-bagrow--separate"
          }`}
          id="demoBags"
        >
          {together ? (
            <div className="bag widebag pack-bag pack-bag--wide">
              <div className="pack-breads pack-breads--group">
                {Array.from({ length: 5 }, (_, i) => (
                  <BreadRoll key={i} index={i} />
                ))}
              </div>
            </div>
          ) : (
            Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="bag pack-bag">
                <div className="pack-breads pack-breads--single">
                  <BreadRoll index={i} />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="pack-count-row" style={{ marginTop: "28px" }}>
          <span key={animKey} className="metric pack-count" id="bagCount">
            {together ? "1" : "5"}
          </span>{" "}
          <span>жижиг уут</span>
        </div>
        <div className="note pack-saved-note" id="saved">
          {together
            ? "Энэ жишээнд 4 жижиг уут багасна"
            : "Сонголтоос өөрчлөлт эхэлнэ"}
        </div>
      </div>
    </div>
  );
}
