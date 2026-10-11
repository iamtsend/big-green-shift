import Image from "next/image";
import PackagingComparison from "../components/PackagingComparison";
import SavingsCalculator from "../components/SavingsCalculator";

export default function HomePage() {
  return (
    <>
      <header>
        <a className="brand" href="#home">
          BIG GREEN SHIFT
          <small>TEAM 19 · MINI PROJECT</small>
        </a>
        <nav aria-label="Үндсэн цэс">
          <a href="#problem">Асуудал</a>
          <a href="#solution">Шийдэл</a>
          <a href="#experiment">Туршилт</a>
          <a href="#impact">Тооцоолуур</a>
        </nav>
        <button className="full" id="fullscreen">
          ⛶ Бүтэн дэлгэц
        </button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero" id="home">
          <div>
            <span className="pill">
              <span className="dot" /> Жижиг үйлдлээс эхлэх өөрчлөлт
            </span>
            <h1>
              Ганц асуулт.
              <br />
              Том <span style={{ color: "#658e41" }}>өөрчлөлт.</span>
            </h1>
            <p className="lead">
              Бидэнд нарийн боов хэрэгтэй.
              <br />
              Харин нэг бүрд нь уут хэрэгтэй юу?
            </p>
            <p>
              Хамтад нь савлах боломжтой бүтээгдэхүүнд хэрэглэгчийн сонголтыг
              санал болгож, шаардлагагүй гялгар уутны хэрэглээг багасгах төсөл.
            </p>
            <a href="#solution" className="cta">
              Өөрчлөлтийг туршаад үзье <span>↗</span>
            </a>
          </div>
          <div
            className="scene"
            aria-label="Таван нарийн боовыг таван тусдаа уутанд савласан жишээ"
          >
            <div
              className="eyebrow"
              style={{ position: "relative", marginBottom: "25px" }}
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

        {/* Strip */}
        <div className="strip">
          <div>
            <strong>01 / Хэрэглэгчийн сонголт</strong>
            Хамт эсвэл тусдаа савлуулах
          </div>
          <div>
            <strong>02 / Аюулгүй савлагаа</strong>
            Тохирох бүтээгдэхүүн, тохирох уут
          </div>
          <div>
            <strong>03 / Хэмжих өөрчлөлт</strong>
            Уутны тоогоор үр дүнг харьцуулах
          </div>
        </div>

        {/* Section 01: Problem */}
        <section className="split" id="problem">
          <div>
            <div className="eyebrow">01 — Бид юу олж харсан бэ?</div>
            <h2>
              Амттан жижигхэн.
              <br />
              Савлагаа нь давхар.
            </h2>
          </div>
          <div>
            <p className="lead">
              Ижил төрлийн хэд хэдэн нарийн боов авахад бүтээгдэхүүн бүрийг
              жижиг уутанд, дараа нь том уутанд давхар савлах тохиолдол бий.
            </p>
            <p>
              Савлагаа бүтээгдэхүүнийг хамгаалдаг. Бидний асуулт бол
              хамгаалалтыг хадгалж, уутны тоог багасгаж болох эсэх юм.
            </p>
            <p className="note">
              *5-аас 1 уут болгох нь тайлбарлах жишээ. Бодит хэрэгжилт нь
              бүтээгдэхүүний төрөл, хэмжээ болон савлагааны шаардлагаас
              хамаарна.
            </p>
          </div>
        </section>

        {/* Quote section */}
        <section className="dark split">
          <div>
            <div className="eyebrow">Өөрчилсөн зүйл — ганц өгүүлбэр</div>
            <div className="quote">
              “Ижил төрлийн нарийн боовнуудаа{" "}
              <span className="lime">хамтад нь савлуулах уу?</span>”
            </div>
          </div>
          <div>
            <p className="lead">
              Шинэ төхөөрөмжөөс өмнө
              <br />
              шинэ асуулт.
            </p>
            <p>
              Хэрэглэгч зөвшөөрч, хамт савлах нь хүнсний аюулгүй байдлын
              шаардлагыг хангасан үед нэг тохиромжтой савлагаа ашиглана.
            </p>
            <p>Тусдаа савлуулах сонголт мөн нээлттэй.</p>
          </div>
        </section>

        {/* Section 02: Solution (Interactive Client Component) */}
        <section id="solution">
          <div className="eyebrow">02 — Дэлгэц дээр туршаад үз</div>
          <PackagingComparison />
        </section>

        {/* Section 03: Experiment */}
        <section id="experiment">
          <div className="eyebrow">03 — Бодит орчин дахь туршилт</div>
          <h2>
            Гурван өдөр.
            <br />
            Нэг өөрчлөлт.
          </h2>
          <p className="lead">
            Туршилтын байршил: Tous Les Jours-ийн Сүмбэр Орд салбар.
            <br />1 өдөр суурь ажиглалт + 2 өдөр сонголт санал болгох.
          </p>
          <div className="steps">
            <div className="step">
              <span className="num">ӨДӨР 01 / ӨМНӨ</span>
              <h3>Ажиглаж бүртгэнэ</h3>
              <p>
                Худалдан авалт, бүтээгдэхүүний тоо, жижиг болон гадна уутны тоог
                тус тусад нь тэмдэглэнэ.
              </p>
            </div>
            <div className="step">
              <span className="num">ӨДӨР 02–03 / ҮЙЛДЭЛ</span>
              <h3>Сонголт санал болгоно</h3>
              <p>
                Хамт савлах боломжтой үед асуултаа тавьж, зөвшөөрсөн болон
                тусдаа савлуулсан тохиолдлыг бүртгэнэ.
              </p>
            </div>
            <div className="step">
              <span className="num">ХАРЬЦУУЛАЛТ / ДАРАА</span>
              <h3>Үр дүнг хэмжинэ</h3>
              <p>
                Харьцуулах боломжтой худалдан авалт тутмын уутны хэрэглээ,
                зөвшөөрсөн хувь, хэмнэсэн уутны тоог гаргана.
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
            <p className="note">
              Энэ хэсэгт туршилтын бүртгэлээр баталгаажсан дүнг байршуулна.
              Доорх тооцоолуурын тоонууд нь бодит туршилтын үр дүн биш.
            </p>
          </div>
        </section>

        {/* Section 04: Impact (Interactive Calculator Client Component) */}
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
              Өдөрт хамт савлуулсан худалдан авалт, нэг удаад хэмнэсэн уут,
              салбарын тоог өөрчлөхөд боломжит хэмнэлт шинэчлэгдэнэ.
            </p>
            <p className="note">
              Таамаг тооцоо: бүх сонгосон салбарт өдөр бүр ижил үр дүн гарна гэж
              үзнэ. Бодит үр дүн нь хэрэглэгчийн сонголт, бүтээгдэхүүн, ажлын
              өдөр болон савлагааны шаардлагаас хамаарна.
            </p>
          </div>
          <SavingsCalculator />
        </section>

        {/* Section 05: Implementation considerations */}
        <section className="split">
          <div>
            <div className="eyebrow">05 — Хэрэгжүүлэхэд анхаарах зүйл</div>
            <h2>
              Зөв сонголт.
              <br />
              Тохиромжтой савлагаа.
            </h2>
          </div>
          <div>
            <h3>Хүнсний аюулгүй байдал</h3>
            <p>
              Ижил хөргөгчинд хадгалагддаг нь хамт савлахад хангалттай үндэслэл
              биш. Орц, харшил үүсгэгч, бохирдлын эрсдэл, бүтээгдэхүүний бүтэц
              болон салбарын журмыг харгалзана.
            </p>
            <h3>Хэрэглэгчийн зөвшөөрөл</h3>
            <p>
              Сонголтыг ойлгомжтой санал болгож, тусдаа савлуулах хүсэлтийг
              хүндэтгэнэ.
            </p>
            <h3>Бизнесийн боломж</h3>
            <p>
              Уутны зардал болон савлах хугацааг хэмжвэл уутны тооноос гадна үйл
              ажиллагааны үр ашгийг үнэлэх боломжтой.
            </p>
          </div>
        </section>

        {/* End / Call to action */}
        <section className="end">
          <div className="eyebrow">Small question. Big change.</div>
          <h2>
            Хамгийн хэрэггүй уут бол
            <br />
            хэрэглэх шаардлагагүй байсан уут.
          </h2>
          <p className="lead">
            Дараагийн худалдан авалт дээрээ
            <br />
            “Хамтад нь савлуулж болох уу?” гэж асуугаарай.
          </p>
          <a href="#home" className="cta">
            Эхнээс нь үзэх ↑
          </a>
        </section>

        {/* Acknowledgments */}
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
