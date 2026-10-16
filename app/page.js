import Image from "next/image";
import PackagingComparison from "../components/PackagingComparison";
import SavingsCalculator from "../components/SavingsCalculator";

const experimentDays = [
  { day: "Өдөр 1", breads: 240, bags: 181, saved: null },
  { day: "Өдөр 2", breads: 224, bags: 160, saved: 64 },
  { day: "Өдөр 3", breads: 287, bags: 183, saved: 104 },
];

export default function HomePage() {
  return (
    <>
      {/* Navigation Header */}
      <header>
        <a className="brand" href="#home">
          <Image
            src="/logo.svg"
            alt="Team 19 Logo"
            width={38}
            height={38}
            className="brand-logo"
            priority
          />
          <div className="brand-text">
            BIG GREEN SHIFT
            <small>TEAM 19 · MINI PROJECT</small>
          </div>
        </a>
        <nav aria-label="Үндсэн цэс">
          <a href="#problem">Асуудал</a>
          <a href="#solution">Шийдэл</a>
          <a href="#standards">Стандарт</a>
          <a href="#experiment">Туршилт</a>
          <a href="#impact">Тооцоолуур</a>
          <a href="#thanks">Талархал</a>
        </nav>
        <button className="full" id="fullscreen">
          ⛶ Бүтэн дэлгэц
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div>
            <div className="hero-pill-group">
              <span className="pill">
                <span className="dot dot-pulse" /> Улаанбаатарын 270+ бэйкерийн
                соёлд чиглэсэн төсөл
              </span>
            </div>
            <h1>
              Ганц асуулт.
              <br />
              <span className="hero-highlight">2 секунд.</span>
              <br />
              Том <span style={{ color: "#658e41" }}>өөрчлөлт.</span>
            </h1>
            <p className="lead">
              Нарийн боов өдөр тутмын хэрэглээ.
              <br />
              Харин нэг бүрд нь тусдаа уут хэрэгтэй юу?
            </p>
            <p>
              Өглөөний цай, өдрийн амттан, найзуудын уулзалт… Бэйкери их хотын
              амьдралын салшгүй хэсэг болжээ. Харин энэ хэрэглээний цаана бидний
              тэр бүр анзаардаггүй шаардлагагүй давхар савлагааг ердөө{" "}
              <strong>2 секундийн ганц асуултаар</strong> багасгах санаачилга.
            </p>
            <div className="hero-actions">
              <a href="#solution" className="cta">
                Өөрчлөлтийг туршаад үзье <span>↗</span>
              </a>
              <a href="#problem" className="hero-secondary-link">
                Асуудлын учир шалтгаан ↓
              </a>
            </div>
          </div>

          <div
            className="scene"
            aria-label="Таван нарийн боовыг таван тусдаа уутанд савласан жишээ"
          >
            <div
              className="eyebrow"
              style={{ position: "relative", marginBottom: "22px" }}
            >
              Ижил бүтээгдэхүүн. Олон савлагаа.
            </div>
            <div className="bagrow">
              <div className="bag">
                <span className="bread">🥐</span>
              </div>
              <div className="bag">
                <span className="bread">🥐</span>
              </div>
              <div className="bag">
                <span className="bread">🥐</span>
              </div>
              <div className="bag">
                <span className="bread">🥐</span>
              </div>
              <div className="bag">
                <span className="bread">🥐</span>
              </div>
            </div>
            <div className="scene-label">5 нарийн боов → 5 жижиг уут</div>
            <div className="floating">
              <b>4</b> уут багасгах боломж*
            </div>
          </div>
        </section>

        {/* 3-Column City & Intervention Metric Bar */}
        <div className="strip">
          <div>
            <span className="strip-tag">ИХ ХОТЫН ХЭМЖЭЭ</span>
            <strong>270+ Бэйкери</strong>
            Улаанбаатар хотод үйл ажиллагаа явуулж буй бэйкерийн байршил
          </div>
          <div>
            <span className="strip-tag">БИДНИЙ ШИЙДЭЛ</span>
            <strong>2 Секунд</strong>
            Касс дээр “Хамтад нь савлуулах уу?” гэж асуух хугацаа
          </div>
          <div>
            <span className="strip-tag">ХЭМНЭХ БОЛОМЖ</span>
            <strong>4 Уут / 5-аас</strong>
            Хамтад нь савласнаар нэг худалдан авалтаас хэмнэх боломжит уут
          </div>
        </div>

        {/* Section 01: Problem Context & The Multiplier Effect */}
        <section className="split" id="problem">
          <div>
            <div className="eyebrow">01 — Бид юу олж харсан бэ?</div>
            <h2>
              Амттан жижигхэн.
              <br />
              Савлагаа нь давхар.
            </h2>
            <p className="lead">
              “Бид нарийн боов худалдаж авсан уу? Эсвэл түүнтэй хамт хэрэггүй
              олон уут авчихсан уу?”
            </p>
            <p>
              Монголд бэйкерийн соёл 2010 оноос эрчимтэй хөгжиж, их хотын завгүй
              амьдралын хэмнэлд өдөр тутам дайрч өнгөрөх газар болжээ.
              Бүтээгдэхүүнийг шилэн хоргонд байрлуулж, үйлчлүүлэгч сонголтоо
              хийдэг.
            </p>
            <p>
              Гэвч авч явах үед ижил төрлийн хэд хэдэн нарийн боов авахад
              бүтээгдэхүүн бүрийг жижиг уутанд, дараа нь том уутанд давхар
              савлах тохиолдол түгээмэл байна.
            </p>
            {/* <p className="note">
              *5-аас 1 уут болгох нь тайлбарлах жишээ. Бодит хэрэгжилт нь
              бүтээгдэхүүний төрөл, хэмжээ болон савлагааны шаардлагаас
              хамаарна.
            </p> */}
          </div>

          <div className="problem-visual-box">
            <div className="problem-card">
              <span className="problem-card-badge">
                ӨДӨР ТУТМЫН САВЛАГААНЫ ҮРЖВЭР
              </span>
              <div className="multiplier-list">
                <div className="multiplier-row">
                  <div className="multiplier-item">
                    <span className="multiplier-icons">🥐</span>
                  </div>
                  <div className="multiplier-arrow">→</div>
                  <div className="multiplier-result">
                    <span className="multiplier-breakdown">1 жижиг уут</span>
                    <span className="multiplier-total-badge">Нийт 1 уут</span>
                  </div>
                </div>

                <div className="multiplier-row">
                  <div className="multiplier-item">
                    <span className="multiplier-icons">🥐🥐🥐</span>
                  </div>
                  <div className="multiplier-arrow">→</div>
                  <div className="multiplier-result">
                    <span className="multiplier-breakdown">
                      3 жижиг + 1 том
                    </span>
                    <span className="multiplier-total-badge warning">
                      Нийт 4 уут
                    </span>
                  </div>
                </div>

                <div className="multiplier-row highlight">
                  <div className="multiplier-item">
                    <span className="multiplier-icons">🥐🥐🥐🥐🥐</span>
                  </div>
                  <div className="multiplier-arrow">→</div>
                  <div className="multiplier-result">
                    <span className="multiplier-breakdown">
                      5 жижиг + 1 том
                    </span>
                    <span className="multiplier-total-badge danger">
                      Нийт 6 уут
                    </span>
                  </div>
                </div>
              </div>
              <div className="problem-card-footer">
                <p>
                  <strong>Бидэнд бүтээгдэхүүн хэрэгтэй байсан.</strong> Харин
                  энэ бүх давхар савлагаа үнэхээр хэрэгтэй байсан уу?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Break: The 2-Second Question */}
        <section className="dark split">
          <div>
            <div className="eyebrow">
              Өөрчилсөн зүйл — ганц өгүүлбэр, 2 секунд
            </div>
            <div className="quote">
              “Ижил төрлийн нарийн боовнуудаа{" "}
              <span className="lime">хамтад нь савлуулах уу?</span>”
            </div>
            <div className="dialogue-box">
              <div className="dialogue-line cashier">
                <span className="dialogue-avatar">👩‍💼 Худалдагч:</span>
                <span className="dialogue-speech">
                  “Ижил төрлийн нарийн боовнуудаа хамтад нь савлуулах уу?”
                </span>
              </div>
              <div className="dialogue-line customer">
                <span className="dialogue-avatar">🙋 Үйлчлүүлэгч:</span>
                <span className="dialogue-speech">
                  “Тэгье ээ, болно!” (1 тохиромжтой уут)
                </span>
              </div>
            </div>
          </div>
          <div>
            <p className="lead">
              Томоохон хөрөнгө оруулалт, шинэ төхөөрөмжөөс өмнө
              <br />
              шинэ асуулт.
            </p>
            <p>
              Бид гялгар уутан савлагааг бүрэн халахыг зориогүй, худалдан
              авагчийн сонголтыг ч хязгаарлаагүй. Зөвхөн нэг зүйлийг шалгахыг
              хүссэн:
            </p>
            <p>
              Хэрэв худалдагч энэ асуултыг тавьдаг болбол хэрэглэгчийн сонголт
              өөрчлөгдөх үү? Тэгээд нэг худалдан авалтад ашиглагдах уутны тоо
              бодитоор буурах уу?
            </p>
            <p className="note" style={{ color: "#cad8cf" }}>
              *Хэрэглэгч тусад нь савлуулахыг хүсвэл тэр сонголт нь 100%
              нээлттэй хэвээр үлдэнэ.
            </p>
          </div>
        </section>

        {/* Section 02: Interactive Solution Visualizer */}
        <section id="solution">
          <div className="section-header-centered">
            <div className="eyebrow">02 — Дэлгэц дээр туршаад үз</div>
            <h2>Сонголтоос өөрчлөлт эхэлнэ</h2>
            <p className="lead" style={{ margin: "auto" }}>
              Таван нарийн боов авах үед савлагааны хоёр сонголтын ялгааг шууд
              харьцуулж хараарай.
            </p>
          </div>
          <PackagingComparison />
        </section>

        {/* Section: Standards & Hygiene (MNS Standards from video) */}
        <section className="standards-section" id="standards">
          <div className="eyebrow">Эрүүл ахуй · Стандарт · Хамгаалалт</div>
          <h2>Бид стандартыг үгүйсгэхгүй.</h2>
          <p className="lead">
            Гялгар уут нь огт хэрэггүй зүйл биш. Бүтээгдэхүүнийг хамгаалах,
            эрүүл ахуйг сахих нь нэн тэргүүний шаардлага.
          </p>

          <div className="standards-grid">
            <div className="standard-card">
              <span className="standard-code">MNS 5547:2005</span>
              <h3>Нийлэг сав баглаа боодол</h3>
              <p>
                Хүнсний бүтээгдэхүүний нийлэг сав баглаа боодлын техникийн
                шаардлага, чанарын үзүүлэлтийг тодорхойлдог.
              </p>
            </div>
            <div className="standard-card">
              <span className="standard-code">MNS 5684:2006</span>
              <h3>Хүнсний зориулалттай хальс</h3>
              <p>
                Хүнсний зориулалтаар ашиглагдах нийлэг хальсан савлагааны
                ангилал, шаардлагыг заана.
              </p>
            </div>
            <div className="standard-card">
              <span className="standard-code">MNS 6648:2016</span>
              <h3>Химийн бодисын аюулгүй байдал</h3>
              <p>
                Савлагааны материалаас хүнсэнд шилжиж болзошгүй химийн бодисын
                зөвшөөрөгдөх дээд хэмжээг баталгаажуулдаг.
              </p>
            </div>
          </div>

          <div className="standards-callout">
            <p>
              <strong>Бидний зарчим:</strong> Бүтээгдэхүүнийг стандартын дагуу
              хамгаалах ёстой. Харин стандарт зөрчихгүйгээр, хамтад нь
              хадгалагддаг ижил төрлийн нарийн боовны шаардлагагүй давхар
              савлагааг цөөлөх нь бидний зорилго юм.
            </p>
          </div>
        </section>

        
{/* Section 03: The Experiment */}
<section id="experiment">
  <div className="eyebrow">
    03 — Бодит орчин дахь туршилт
  </div>

  <h2>
    Гурван өдөр.
    <br />
    Нэг өөрчлөлт.
    <br />
    <span style={{ color: "#5A9B6E" }}>
      Бодит үр дүн.
    </span>
  </h2>

  <p className="lead">
    Туршилтын байршил:{" "}
    <strong>
      Tous Les Jours-ийн Сүмбэр Орд салбар
    </strong>
    .<br />
    1 өдөр суурь хэмжилт + 2 өдөр шинэ
    савлагааны сонголт санал болгох.
  </p>

  <div className="steps">
    <div className="step">
      <span className="num">ӨДӨР 01 / ӨМНӨ</span>
      <h3>Суурь хэмжилт</h3>
      <p>
        Эхний өдөр 240 ширхэг талх борлуулж,
        181 ширхэг гялгар уут хэрэглэсэн.
        Хэрэглэгчдэд хамтад нь савлуулах
        сонголтыг санал болгодоггүй байв.
      </p>
    </div>

    <div className="step">
      <span className="num">
        ӨДӨР 02–03 / ӨӨРЧЛӨЛТ
      </span>
      <h3>Нэг энгийн асуулт</h3>
      <p>
        “Нэг л уутанд бүгдийг нь
        багтаачих уу?” гэсэн асуултыг
        кассын ажилтнаар дамжуулан
        хэрэглэгчдэд санал болгож,
        мэдээллийн постер байршуулсан.
      </p>
    </div>

    <div className="step">
      <span className="num">
        ХАРЬЦУУЛАЛТ / ҮР ДҮН
      </span>
      <h3>Хэрэглээг бууруулав</h3>
      <p>
        Туршилтын тайланд гялгар уутны
        хэрэглээ 37.6%-иар буурч,
        нийт 168 ширхэг уут хэмнэсэн
        гэж дүгнэсэн.
      </p>
    </div>
  </div>

  <figure className="experiment-chart" aria-labelledby="experiment-chart-title">
    <figcaption>
      <h3 id="experiment-chart-title">3 өдрийн үзүүлэлт</h3>
      <p>Борлуулсан талх, ашигласан болон хэмнэсэн уут (ширхэг)</p>
    </figcaption>
    <div className="chart-scroll">
      <svg
        viewBox="0 0 760 310"
        role="img"
        aria-labelledby="experiment-chart-title experiment-chart-description"
      >
        <desc id="experiment-chart-description">
          Өдөр 1: 240 талх борлуулж, 181 уут ашигласан; хэмнэсэн уутын
          хэмжилт байхгүй. Өдөр 2: 224 талх, 160 ашигласан уут, 64 хэмнэсэн
          уут. Өдөр 3: 287 талх, 183 ашигласан уут, 104 хэмнэсэн уут.
        </desc>
        {[0, 100, 200, 300].map((tick) => {
          const y = 252 - (tick / 300) * 220;
          return (
            <g key={tick}>
              <line
                className="chart-gridline"
                x1="76"
                x2="738"
                y1={y}
                y2={y}
              />
              <text className="chart-tick" x="64" y={y + 4} textAnchor="end">
                {tick}
              </text>
            </g>
          );
        })}
        {experimentDays.map((entry, index) => {
          const center = 198 + index * 216;
          const bars = [
            { key: "breads", value: entry.breads, className: "chart-bar-breads", offset: -42 },
            { key: "bags", value: entry.bags, className: "chart-bar-bags", offset: -6 },
            { key: "saved", value: entry.saved, className: "chart-bar-saved", offset: 30 },
          ];

          return (
            <g key={entry.day}>
              {bars.map((bar) => {
                if (bar.value === null) {
                  return (
                    <text
                      key={bar.key}
                      className="chart-bar-value"
                      x={center + bar.offset + 14}
                      y="242"
                      textAnchor="middle"
                    >
                      —
                    </text>
                  );
                }

                const height = (bar.value / 300) * 220;
                const y = 252 - height;

                return (
                  <g key={bar.key}>
                    <rect
                      className={bar.className}
                      x={center + bar.offset}
                      y={y}
                      width="28"
                      height={height}
                      rx="5"
                    />
                    <text
                      className="chart-bar-value"
                      x={center + bar.offset + 14}
                      y={y - 7}
                      textAnchor="middle"
                    >
                      {bar.value}
                    </text>
                  </g>
                );
              })}
              <text className="chart-day" x={center} y="282" textAnchor="middle">
                {entry.day}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
    <div className="chart-legend" aria-hidden="true">
      <span className="chart-legend-item">
        <i className="chart-legend-breads" />
        Борлуулсан талх
      </span>
      <span className="chart-legend-item">
        <i className="chart-legend-bags" />
        Ашигласан уут
      </span>
      <span className="chart-legend-item">
        <i className="chart-legend-saved" />
        Хэмнэсэн уут
      </span>
    </div>
  </figure>

  <div className="results">
    <span className="pill">
      ✓ 3 өдрийн туршилтын үр дүн
    </span>

    <h3>
      Жижиг өөрчлөлт.
      <br />
      Том үр дүн.
    </h3>

    <div className="result-grid">
      <div>
        <b>168</b>
        Хэмнэсэн гялгар уут (ширхэг)
      </div>

      <div>
        <b>−37.6%</b>
        Гялгар уутны хэрэглээний бууралт
      </div>

      <div>
        <b>23.2%</b>
        Уутгүй борлуулсан талхны хувь
      </div>
    </div>

    <p
      style={{
        marginTop: "24px",
        fontSize: "14px",
        opacity: 0.75,
        lineHeight: 1.7,
      }}
    >
      Хэрэглэгчдэд сонголт санал болгох
      энгийн өөрчлөлтөөр савлагааны
      хэрэглээг бууруулах боломжтойг
      энэхүү туршилт харууллаа.
    </p>
  </div>
</section>


        {/* Section 04: Scalability & Calculator */}
        <section className="split" id="impact">
          <div>
            <div className="eyebrow">04 — Цааш өргөжүүлбэл?</div>
            <h2>
              Жижиг өөрчлөлт
              <br />
              өдөр бүр давтагдвал.
            </h2>
            <p className="lead">Өөрийн нөхцөлөөр тооцоод үзээрэй.</p>
            <p>
              Энэ асуулт ганц салбарт, хоёр өдөр биш… Улаанбаатарын олон салбарт
              өдөр бүр тавигддаг бол ямар хэмнэлт гарах вэ?
            </p>
            <div className="city-scale-highlights">
              <div className="city-scale-item">
                <strong>1 салбарт хэрэгжүүлбэл</strong>
                <span>→ Жилд ~30,113 уут хэмнэнэ</span>
              </div>
              <div className="city-scale-item">
                <strong>10 салбарт өргөжүүлбэл</strong>
                <span>→ Жилд ~301,130 уут хэмнэнэ</span>
              </div>
              <div className="city-scale-item">
                <strong>100 салбарт хэрэгжүүлбэл</strong>
                <span>→ Жилд ~3.01 сая уут хэмнэнэ</span>
              </div>
            </div>
            <p className="note" style={{ marginTop: "16px" }}>
              * Туршилтын 2 өдөрт хэмнэсэн 168 уут буюу
              өдөрт дунджаар 84 уутыг суурь болгон,
              салбар бүр жилд 365 өдөр ижил үр дүнтэй
              ажиллана гэж тооцсон боломжит хэмнэлт.
              Бодит үр дүн нь борлуулалтын хэмжээ,
              хэрэглэгчийн сонголт болон савлагааны
              шаардлагаас хамаарна.
            </p>
          </div>
          <SavingsCalculator />
        </section>

        {/* Section 05: Practical Implementation & Business Synergy */}
        <section className="split">
          <div>
            <div className="eyebrow">05 — Хэрэгжүүлэхэд анхаарах зүйл</div>
            <h2>
              Зөв сонголт.
              <br />
              Тохиромжтой савлагаа.
            </h2>
            <p className="lead">
              Бизнесийн үр ашиг, хэрэглэгчийн сонголт, хүнсний аюулгүй байдлын
              тэнцвэр.
            </p>
          </div>
          <div className="implementation-cards">
            <div className="impl-card">
              <h3>🛡️ Хүнсний аюулгүй байдал</h3>
              <p>
                Ижил хөргөгчинд хадгалагддаг нь хамт савлахад хангалттай
                үндэслэл биш. Орц, харшил үүсгэгч, бохирдлын эрсдэл,
                бүтээгдэхүүний бүтэц болон салбарын журмыг харгалзана.
              </p>
            </div>
            <div className="impl-card">
              <h3>🤝 Хэрэглэгчийн зөвшөөрөл</h3>
              <p>
                Сонголтыг ойлгомжтой, найрсаг санал болгож, тусдаа савлуулах
                хүсэлтийг ямагт хүндэтгэнэ.
              </p>
            </div>
            <div className="impl-card">
              <h3>⚡ Бизнесийн давхар үр өгөөж</h3>
              <p>
                Гялгар уутны зардал буурахаас гадна касс дээр савлах хугацаа
                богиносож, үйлчилгээний хурд, үйл ажиллагааны үр ашиг нэмэгдэнэ.
              </p>
            </div>
          </div>
        </section>

        {/* End / Call to Action */}
        <section className="end">
          <div className="eyebrow">Small question. Big change.</div>
          <h2>
            Хамгийн хэрэггүй уут бол
            <br />
            хэрэглэх шаардлагагүй байсан уут.
          </h2>
          <p className="lead">
            Байгальд ээлтэй өөрчлөлт үргэлж том шийдвэрээс эхэлдэггүй.
            <br />
            Заримдаа бидний өдөр бүр хэлдэг <strong>
              ганцхан өгүүлбэрээс
            </strong>{" "}
            эхэлдэг.
          </p>
          <p>
            Дараагийн худалдан авалт дээрээ “Хамтад нь савлуулж болох уу?” гэж
            асуугаарай.
          </p>
          <a href="#home" className="cta">
            Эхнээс нь үзэх ↑
          </a>
        </section>

        {/* Acknowledgments & Project Info */}
        <section
          className="acknowledgments"
          id="thanks"
          aria-labelledby="thanks-title"
        >
          <div className="ack-intro">
            <div className="eyebrow">Талархал · Төслийн тухай</div>
            <h2 id="thanks-title">Өөрчлөлтийг хамтдаа эхлүүлсэнд баярлалаа.</h2>
          </div>
          <div className="ack-grid">
            <article className="ack-card">
              <div className="partner-logo">
                <Image
                  className="tlj-logo"
                  src="/assets/tous-les-jours-logo.png"
                  alt="Tous Les Jours"
                  width={238}
                  height={34}
                />
              </div>
              <h3>Tous Les Jours Mongolia</h3>
              <p>
                Туршилтыг бодит орчинд хэрэгжүүлэх боломж олгож, хамтран
                ажилласан <strong>Tous Les Jours Mongolia хамт олонд</strong>{" "}
                чин сэтгэлийн талархал илэрхийлье.
              </p>
              <p>
                Бидний жижиг санааг бодит үйлдэл болгоход дэмжлэг үзүүлсэнд
                баярлалаа.
              </p>
              <a
                className="partner-link"
                href="https://www.tlj.mn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tlj.mn <span aria-hidden="true">↗</span>
              </a>
            </article>

            <article className="ack-card">
              <div className="partner-logo">
                <Image
                  className="ufe-logo"
                  src="/assets/ufe-logo.png"
                  alt="UFE — Санхүү Эдийн Засгийн Их Сургууль"
                  width={86}
                  height={86}
                />
              </div>
              <div className="eyebrow">Санхүү Эдийн Засгийн Их Сургууль</div>
              <h3>
                UFE · Big Green Shift
                <br />
                Mini төсөл
              </h3>
              <p>
                Өдөр тутмын хэрэглээнд жижиг өөрчлөлт хийж, үр дүнг нь бодит
                орчинд хэмжих оюутны төсөл.
              </p>
              <div className="project-label">
                TEAM 19 · ГАНЦ АСУУЛТ. ТОМ ӨӨРЧЛӨЛТ.
              </div>
              <p>
                <a
                  className="partner-link"
                  href="https://ufe.edu.mn/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ufe.edu.mn <span aria-hidden="true">↗</span>
                </a>
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <span>BIG GREEN SHIFT · TEAM 19</span>
        <span>Жижиг асуулт. Хэмжиж болох өөрчлөлт.</span>
      </footer>
    </>
  );
}
