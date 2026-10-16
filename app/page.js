import Image from "next/image";
import PackagingComparison from "../components/PackagingComparison";
import ResponsiveNavigation from "../components/ResponsiveNavigation";
import SavingsCalculator from "../components/SavingsCalculator";
import VideoModalButton from "../components/VideoModalButton";

const experimentDays = [
  { day: "Өдөр 1", breads: 240, bags: 181, saved: null },
  { day: "Өдөр 2", breads: 224, bags: 160, saved: 64 },
  { day: "Өдөр 3", breads: 287, bags: 183, saved: 104 },
];

// Decorative botanical illustration; no image dependency or client JavaScript.
function LeafSprig({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 260 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M61 445 C72 368 110 307 135 247 C166 180 145 127 175 55 C184 35 196 22 209 6"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M96 354 C52 357 24 330 10 290 C58 292 93 311 105 342 Z" fill="currentColor" opacity=".7" />
      <path d="M113 318 C114 267 146 240 192 229 C191 276 163 303 119 328 Z" fill="currentColor" opacity=".9" />
      <path d="M136 258 C88 264 55 240 40 204 C86 205 122 220 146 248 Z" fill="currentColor" opacity=".8" />
      <path d="M153 217 C157 165 193 135 235 127 C231 176 199 208 159 227 Z" fill="currentColor" opacity=".74" />
      <path d="M151 158 C110 152 81 121 80 77 C129 91 153 114 162 147 Z" fill="currentColor" opacity=".65" />
      <path d="M172 110 C164 68 187 29 229 5 C238 52 213 92 177 122 Z" fill="currentColor" opacity=".88" />
      <path d="M82 392 C52 399 24 390 0 365 C39 351 72 358 93 381 Z" fill="currentColor" opacity=".6" />
      <path d="M105 341 Q64 322 29 306 M123 315 Q160 267 181 247 M142 252 Q91 222 58 216 M159 213 Q192 172 222 141 M156 152 Q126 113 92 94 M177 112 Q205 68 220 20"
        stroke="#d1e8bc" strokeWidth="2" opacity=".45" strokeLinecap="round" />
    </svg>
  );
}

// Decorative concept illustration: five bags -> question -> one bag.
// SVG keeps the artwork lightweight and ensures it remains behind the content.
function NarrativeBagFlow() {
  const bags = [
    { x: 80, y: 190, r: -12 },
    { x: 155, y: 105, r: 9 },
    { x: 185, y: 280, r: -6 },
    { x: 265, y: 180, r: 13 },
    { x: 305, y: 80, r: -9 },
  ];

  return (
    <svg
      className="narrative-background"
      viewBox="0 0 960 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id="narrative-glow">
          <stop offset="0%" stopColor="#83D68C" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#83D68C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="730" cy="260" rx="320" ry="250" fill="url(#narrative-glow)" />

      {/* Multiple bags before asking the question */}
      <g className="narrative-small-bags">
        {bags.map((bag, index) => (
          <g
            key={index}
            transform={`translate(${bag.x} ${bag.y}) rotate(${bag.r} 30 50)`}
            stroke="#A1D6B4"
            strokeWidth="3"
            strokeLinejoin="round"
            opacity="0.44"
          >
            <path d="M9 26 H59 L66 100 H2 Z" />
            <path d="M21 26 V17 C21 -5 47 -5 47 17 V26" />
          </g>
        ))}
      </g>

      {/* Dotted path connects the question with the simpler packaging */}
      <path
        className="narrative-flow"
        d="M360 280 C430 340 485 315 535 275 S625 200 695 245"
        stroke="#D8F266"
        strokeWidth="3"
        strokeDasharray="6 14"
        strokeLinecap="round"
        opacity="0.5"
      />

      <g className="narrative-question">
        <circle
          cx="510"
          cy="195"
          r="75"
          fill="#28583F"
          fillOpacity="0.4"
          stroke="#D8F266"
          strokeWidth="2"
          strokeOpacity="0.55"
        />
        <text
          x="510"
          y="225"
          fill="#D8F266"
          fontSize="90"
          fontWeight="700"
          textAnchor="middle"
          fontFamily="sans-serif"
        >
          ?
        </text>
      </g>

      {/* One suitable bag with a checkmark */}
      <g
        className="narrative-one-bag"
        stroke="#D8F266"
        strokeWidth="5"
        strokeLinejoin="round"
      >
        <path d="M720 240 H855 L870 430 H700 Z" fill="#D8F266" fillOpacity="0.06" />
        <path d="M750 240 V203 C750 135 827 135 827 203 V240" />
        <path
          d="M753 330 L782 359 L828 303"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </g>
      <g fill="#D8F266" opacity="0.45">
        <circle cx="635" cy="125" r="5" />
        <circle cx="910" cy="180" r="3" />
        <circle cx="610" cy="410" r="4" />
        <circle cx="360" cy="90" r="3" />
      </g>
    </svg>
  );
}

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
        <ResponsiveNavigation />
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
              <VideoModalButton />
              <a href="#solution" className="hero-secondary-link">
                Өөрчлөлтийг туршаад үзье ↓
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
                <span className="bread">
                  <Image src="/illustrations/bread-roll.svg" alt="" width={50} height={50} className="bread-illustration" />
                </span>
              </div>
              <div className="bag">
                <span className="bread">
                  <Image src="/illustrations/bread-roll.svg" alt="" width={50} height={50} className="bread-illustration" />
                </span>
              </div>
              <div className="bag">
                <span className="bread">
                  <Image src="/illustrations/bread-roll.svg" alt="" width={50} height={50} className="bread-illustration" />
                </span>
              </div>
              <div className="bag">
                <span className="bread">
                  <Image src="/illustrations/bread-roll.svg" alt="" width={50} height={50} className="bread-illustration" />
                </span>
              </div>
              <div className="bag">
                <span className="bread">
                  <Image src="/illustrations/bread-roll.svg" alt="" width={50} height={50} className="bread-illustration" />
                </span>
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
                    <span className="multiplier-icons multiplier-illustrations" aria-hidden="true">
                    {Array.from({ length: 1 }, (_, i) => (
                      <Image key={i} src="/illustrations/bread-roll.svg" alt="" width={27} height={27} className="mini-bread-illustration" />
                    ))}
                  </span>
                  </div>
                  <div className="multiplier-arrow">→</div>
                  <div className="multiplier-result">
                    <span className="multiplier-breakdown">1 жижиг уут</span>
                    <span className="multiplier-total-badge">Нийт 1 уут</span>
                  </div>
                </div>

                <div className="multiplier-row">
                  <div className="multiplier-item">
                    <span className="multiplier-icons multiplier-illustrations" aria-hidden="true">
                    {Array.from({ length: 3 }, (_, i) => (
                      <Image key={i} src="/illustrations/bread-roll.svg" alt="" width={27} height={27} className="mini-bread-illustration" />
                    ))}
                  </span>
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
                    <span className="multiplier-icons multiplier-illustrations" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Image key={i} src="/illustrations/bread-roll.svg" alt="" width={27} height={27} className="mini-bread-illustration" />
                    ))}
                  </span>
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
        <section className="dark split narrative-section">
          <NarrativeBagFlow />
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
                <span className="dialogue-avatar"><Image src="/illustrations/cashier.svg" alt="" width={30} height={30} className="dialogue-avatar-image" /> Худалдагч:</span>
                <span className="dialogue-speech">
                  “Ижил төрлийн нарийн боовнуудаа хамтад нь савлуулах уу?”
                </span>
              </div>
              <div className="dialogue-line customer">
                <span className="dialogue-avatar"><Image src="/illustrations/customer.svg" alt="" width={30} height={30} className="dialogue-avatar-image" /> Үйлчлүүлэгч:</span>
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
            <h2>
              Сонголтоос <span className="heading-accent">өөрчлөлт</span>{" "}
              эхэлнэ
            </h2>
            <p className="lead" style={{ margin: "auto" }}>
              Таван нарийн боов авах үед савлагааны хоёр сонголтын ялгааг шууд
              харьцуулж хараарай.
            </p>
          </div>
          <PackagingComparison />
        </section>

        {/* Section: Standards & Hygiene (MNS Standards from video) */}
        <section className="standards-section" id="standards">
          <div className="standards-heading">
            <div>
              <div className="eyebrow">Эрүүл ахуй · Стандарт · Хамгаалалт</div>
              <h2>Бид стандартыг үгүйсгэхгүй.</h2>
              <p className="lead">
                Гялгар уут нь огт хэрэггүй зүйл биш. Бүтээгдэхүүнийг хамгаалах,
                эрүүл ахуйг сахих нь нэн тэргүүний шаардлага.
              </p>
            </div>
            <div className="standards-priority">
              <span aria-hidden="true"><Image src="/illustrations/shield-check.svg" alt="" width={34} height={34} className="priority-illustration" /></span>
              <div>
                <strong>Аюулгүй байдал</strong>
                <small>Үргэлж нэн тэргүүнд</small>
              </div>
            </div>
          </div>

          <div className="standards-grid">
            <article className="step standard-card">
              <div className="standard-card-top">
                <span className="standard-icon" aria-hidden="true"><Image src="/illustrations/packaging.svg" alt="" width={34} height={34} className="standard-illustration" /></span>
                <span className="standard-code">MNS 5547:2005</span>
              </div>
              <h3>Нийлэг сав баглаа боодол</h3>
              <p>
                Хүнсний бүтээгдэхүүний нийлэг сав баглаа боодлын техникийн
                шаардлага, чанарын үзүүлэлтийг тодорхойлдог.
              </p>
            </article>
            <article className="step standard-card">
              <div className="standard-card-top">
                <span className="standard-icon" aria-hidden="true"><Image src="/illustrations/film.svg" alt="" width={34} height={34} className="standard-illustration" /></span>
                <span className="standard-code">MNS 5684:2006</span>
              </div>
              <h3>Хүнсний зориулалттай хальс</h3>
              <p>
                Хүнсний зориулалтаар ашиглагдах нийлэг хальсан савлагааны
                ангилал, шаардлагыг заана.
              </p>
            </article>
            <article className="step standard-card">
              <div className="standard-card-top">
                <span className="standard-icon" aria-hidden="true"><Image src="/illustrations/lab-safe.svg" alt="" width={34} height={34} className="standard-illustration" /></span>
                <span className="standard-code">MNS 6648:2016</span>
              </div>
              <h3>Химийн бодисын аюулгүй байдал</h3>
              <p>
                Савлагааны материалаас хүнсэнд шилжиж болзошгүй химийн бодисын
                зөвшөөрөгдөх дээд хэмжээг баталгаажуулдаг.
              </p>
            </article>
          </div>

          <div className="standards-callout">
            <span className="standards-callout-icon" aria-hidden="true"><Image src="/illustrations/check-circle.svg" alt="" width={32} height={32} /></span>
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
  <div className="experiment-intro">
    <div className="eyebrow">03 — Бодит орчин дахь туршилт</div>
    <h2>
      Гурван өдөр. Нэг өөрчлөлт.
      <br />
      <span>Бодит үр дүн.</span>
    </h2>
    <p className="lead">
      Туршилтын байршил:{" "}
      <strong>Tous Les Jours-ийн Сүмбэр Орд салбар</strong>.
      <br />
      1 өдөр суурь хэмжилт + 2 өдөр шинэ савлагааны сонголт санал болгох.
    </p>
  </div>

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
    <LeafSprig className="results-leaf" />
    <span className="pill">
      <Image src="/illustrations/check-circle.svg" alt="" width={17} height={17} className="result-check-illustration" /> 3 өдрийн туршилтын үр дүн
    </span>

    <h3>
      Жижиг өөрчлөлт.
      <br />
      Том үр дүн.
    </h3>

    <div className="result-grid">
      <div className="result-featured">
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
  <div className="results-report">
    <a
      href="/reports/one-page.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Нэг хуудасны ногоон туршилтын загварыг PDF-ээр шинэ таб дээр нээх"
    >
      <span className="results-report-type" aria-hidden="true">PDF</span>
      Нэг хуудасны ногоон туршилтын загвар
      <span aria-hidden="true">↗</span>
    </a>
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
                <span>→ Жилд ~30,660 уут хэмнэнэ</span>
              </div>
              <div className="city-scale-item">
                <strong>10 салбарт өргөжүүлбэл</strong>
                <span>→ Жилд ~306,600 уут хэмнэнэ</span>
              </div>
              <div className="city-scale-item">
                <strong>100 салбарт хэрэгжүүлбэл</strong>
                <span>→ Жилд ~3.07 сая уут хэмнэнэ</span>
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
        <section className="split implementation-section">
          <div>
            <div className="eyebrow">05 — Хэрэгжүүлэхэд анхаарах зүйл</div>
            <h2>
              Зөв сонголт.
              <br />
              <span className="implementation-title-accent">
                Тохиромжтой савлагаа.
              </span>
            </h2>
            <p className="lead">
              Бизнесийн үр ашиг, хэрэглэгчийн сонголт, хүнсний аюулгүй байдлын
              тэнцвэр.
            </p>
          </div>
          <div className="implementation-cards">
            <div className="impl-card">
              <h3><span className="impl-icon-wrap"><Image src="/illustrations/shield-check.svg" alt="" width={33} height={33} /></span>Хүнсний аюулгүй байдал</h3>
              <p>
                Ижил хөргөгчинд хадгалагддаг нь хамт савлахад хангалттай
                үндэслэл биш. Орц, харшил үүсгэгч, бохирдлын эрсдэл,
                бүтээгдэхүүний бүтэц болон салбарын журмыг харгалзана.
              </p>
            </div>
            <div className="impl-card">
              <h3><span className="impl-icon-wrap"><Image src="/illustrations/handshake.svg" alt="" width={33} height={33} /></span>Хэрэглэгчийн зөвшөөрөл</h3>
              <p>
                Сонголтыг ойлгомжтой, найрсаг санал болгож, тусдаа савлуулах
                хүсэлтийг ямагт хүндэтгэнэ.
              </p>
            </div>
            <div className="impl-card">
              <h3><span className="impl-icon-wrap"><Image src="/illustrations/speed.svg" alt="" width={33} height={33} /></span>Бизнесийн давхар үр өгөөж</h3>
              <p>
                Гялгар уутны зардал буурахаас гадна касс дээр савлах хугацаа
                богиносож, үйлчилгээний хурд, үйл ажиллагааны үр ашиг нэмэгдэнэ.
              </p>
            </div>
          </div>
        </section>

        {/* End / Call to Action */}
        <section className="end">
          {/* Subtle animated green leaves behind the CTA content */}
          <div className="end-leaf-background" aria-hidden="true">
            <LeafSprig className="end-leaf end-leaf--left" />
            <LeafSprig className="end-leaf end-leaf--right" />
          </div>
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
