import Image from "next/image";
import PackagingComparison from "../components/PackagingComparison";
import SavingsCalculator from "../components/SavingsCalculator";

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
              Бидэнд нарийн боов хэрэгтэй.
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
            <p className="note">
              *5-аас 1 уут болгох нь тайлбарлах жишээ. Бодит хэрэгжилт нь
              бүтээгдэхүүний төрөл, хэмжээ болон савлагааны шаардлагаас
              хамаарна.
            </p>
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

        {/* Section 03: The Experiment (Tous Les Jours Sümber Ord) */}
        <section id="experiment">
          <div className="eyebrow">03 — Бодит орчин дахь туршилт</div>
          <h2>
            Гурван өдөр.
            <br />
            Нэг өөрчлөлт.
          </h2>
          <p className="lead">
            Туршилтын байршил:{" "}
            <strong>Tous Les Jours-ийн Сүмбэр Орд салбар</strong>.<br />1 өдөр
            суурь ажиглалт + 2 өдөр сонголт санал болгох.
          </p>

          <div className="steps">
            <div className="step">
              <span className="num">ӨДӨР 01 / ӨМНӨ</span>
              <h3>Ажиглаж бүртгэв</h3>
              <p>
                Худалдан авалт, бүтээгдэхүүний тоо, жижиг болон гадна уутны
                хэрэглээг кассын хэсэгт тус тусад нь ажиглалтын хуудсаар
                бүртгэв.
              </p>
            </div>
            <div className="step">
              <span className="num">ӨДӨР 02–03 / ҮЙЛДЭЛ</span>
              <h3>Сонголт санал болгов</h3>
              <p>
                Хамт савлах боломжтой үед асуултаа тавьж, зөвшөөрсөн болон
                тусдаа савлуулсан тохиолдлыг бүртгэв.
              </p>
            </div>
            <div className="step">
              <span className="num">ХАРЬЦУУЛАЛТ / ДАРАА</span>
              <h3>Үр дүнг хэмжив</h3>
              <p>
                Харьцуулах боломжтой худалдан авалт тутмын уутны хэрэглээ,
                зөвшөөрсөн хувь, хэмнэсэн уутны тоог гаргав.
              </p>
            </div>
          </div>

          <div className="results">
            <span className="pill">Бодит хэмжилтийн дүн хүлээгдэж байна</span>
            <h3>Бидний шалгах гурван үзүүлэлт</h3>
            <div className="result-grid">
              <div>
                <b>—</b>Хамт савлуулахыг зөвшөөрсөн хувь
              </div>
              <div>
                <b>—</b>Нэг худалдан авалтын уутны дундаж
              </div>
              <div>
                <b>—</b>Нийт хэмнэсэн уут
              </div>
            </div>
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
                <strong>1 салбарт (өдөрт 20 захиалга)</strong>
                <span>→ Жилд ~29,200 уут хэмнэнэ</span>
              </div>
              <div className="city-scale-item">
                <strong>10 салбарт өргөжүүлбэл</strong>
                <span>→ Жилд ~292,000 уут хэмнэнэ</span>
              </div>
              <div className="city-scale-item">
                <strong>100 салбарт хэрэгжвэл</strong>
                <span>→ Жилд ~2.9 сая уутны хэрэглээ буурна</span>
              </div>
            </div>
            <p className="note" style={{ marginTop: "16px" }}>
              Таамаг тооцоо: бүх сонгосон салбарт өдөр бүр ижил үр дүн гарна гэж
              үзнэ. Бодит үр дүн нь хэрэглэгчийн сонголт, бүтээгдэхүүн, ажлын
              өдөр болон савлагааны шаардлагаас хамаарна.
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
                ажилласан <strong>Сүмбэр Орд салбарын хамт олонд</strong> чин
                сэтгэлийн талархал илэрхийлье.
              </p>
              <p>
                Бидний жижиг санааг бодит үйлдэл болгоход дэмжлэг үзүүлсэнд
                баярлалаа.
              </p>
              <a
                className="partner-link"
                href="https://www.tlj.co.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tlj.co.kr <span aria-hidden="true">↗</span>
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
