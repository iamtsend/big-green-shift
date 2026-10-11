'use client';

import { useState } from 'react';

export default function PackagingComparison() {
  const [together, setTogether] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const handleSelect = (isTogether) => {
    setTogether(isTogether);
    setAnimKey((prev) => prev + 1);
  };

  return (
    <div className="split">
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
            className={`choice ${!together ? 'active' : ''}`}
            id="separate"
            aria-pressed={!together}
            onClick={() => handleSelect(false)}
          >
            Тус тусад нь
          </button>
          <button
            type="button"
            className={`choice ${together ? 'active' : ''}`}
            id="together"
            aria-pressed={together}
            onClick={() => handleSelect(true)}
          >
            Хамтад нь
          </button>
        </div>
        <p id="demoText">
          {together
            ? 'Хэрэглэгч зөвшөөрч, тохиромжтой нэг уутанд хамт савлавал нийт 1 уут.'
            : 'Бүтээгдэхүүн бүрд нэг жижиг уут ашиглавал нийт 5 уут.'}
        </p>
        <p className="note">
          Ижил төрлийн, хамт савлахад тохирох бүтээгдэхүүний жишээ. Гадна авч явах уутыг энэ харьцуулалтад тооцоогүй.
        </p>
      </div>
      <div className="demo" aria-live="polite">
        <div key={animKey} className="bagrow reveal" id="demoBags">
          {together ? (
            <div className="bag widebag">
              <span className="bread">🥐🥐🥐🥐🥐</span>
            </div>
          ) : (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bag">
                <span className="bread">🥐</span>
              </div>
            ))
          )}
        </div>
        <div style={{ marginTop: '28px' }}>
          <span className="metric" id="bagCount">
            {together ? '1' : '5'}
          </span>{' '}
          <span>жижиг уут</span>
        </div>
        <div className="note" id="saved">
          {together ? 'Энэ жишээнд 4 жижиг уут багасна' : 'Сонголтоос өөрчлөлт эхэлнэ'}
        </div>
      </div>
    </div>
  );
}

