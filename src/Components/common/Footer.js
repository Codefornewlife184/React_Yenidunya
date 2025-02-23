/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    setExpanded(false);
  };

  return (
    <>
      <footer className="main-footer mt-40">
        <div
          className="main-footer__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/footer-bg-1.webp)",
          }}
        ></div>
        <div className="container">
          <div className="main-footer__top wow fadeInUp" data-wow-delay="100ms">
            <Link as={Link} to="/" className="main-footer__logo">
              {/* <img
                src="assets/images/yenidunya_logo.webp"
                alt="nisoz"
                width="326"
                height=""
              /> */}
              <h1 className="text-white">
                {t("Yenidünya Endüstriyel Tedarik")}
              </h1>
            </Link>
            <div className="main-footer__social">
            <a
                  href="https://www.instagram.com/yenidunyaendustriyel/"
                  target="_blank"
                  alt="Yenidünya"
                  title="Yenidünya"
                  aria-label="Yenidünya"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.instagram.com/loprencosmetics?igsh=aGQ5YjZ0cDY2amNy"
                  target="_blank"
                  alt="Lopren"
                  title="Lopren"
                  aria-label="Lopren"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.instagram.com/baproybitkiselcom?igsh=MTl1cWR3dzFxamNidg=="
                  target="_blank"
                  alt="Baproy"
                  title="Baproy"
                  aria-label="Baproy"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              <a
                href="https://wa.me/905465341963"
                className="fab fa-whatsapp"
                target="_blank"
                alt="Whatsapp"
                title="Whatsapp"
                aria-label="Whatsapp"
                rel="noopener noreferrer"
              ></a>
            </div>
          </div>
          <div className="row foot">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="main-footer__navmenu">
                <p className="footer-h3 text-white">{t("Kurumsal")}</p>
                <ul>
                  <li>
                    <Link as={Link} to="/" onClick={handleClick}>
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Anasayfa")}
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/hakkimizda" onClick={handleClick}>
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Hakkımızda")}
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/urunlerimiz" onClick={handleClick}>
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Ürünlerimiz")}
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/sorular" onClick={handleClick}>
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Sıkça Sorulan Sorular")}
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/iletisim" onClick={handleClick}>
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("İletişim")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="main-footer__navmenu">
              <p className="footer-h3 text-white">{t("Ürünlerimiz")}</p>
                <ul>
                  <li>
                    <Link
                      as={Link}
                      to="/endustriyel-temizlik"
                      onClick={handleClick}
                    >
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Endüstriyel Temizlik")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      as={Link}
                      to="/endustriyel-mutfak"
                      onClick={handleClick}
                    >
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Endüstriyel Mutfak")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      as={Link}
                      to="/endustriyel-kagit"
                      onClick={handleClick}
                    >
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Endüstriyel Kağıt")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      as={Link}
                      to="/kozmetik-urunleri"
                      onClick={handleClick}
                    >
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Kozmetik Ürünleri")}
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/bitkisel-urunler" onClick={handleClick}>
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Bitkisel Ürünler")}
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/ambalaj" onClick={handleClick}>
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Ambalaj")}
                    </Link>
                  </li>
                  <li>
                    <Link as={Link} to="/gida" onClick={handleClick}>
                      <i
                        className="fa fa-chevron-right"
                        style={{ fontSize: "13px" }}
                      ></i>
                      &nbsp; {t("Gıda")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="main-footer__about">
              <p className="footer-h3 text-white">{t("İletişim")}</p>
                <p className="main-footer__about__text">
                  Üçevler Mahallesi <br />
                  Denizciler Caddesi <br />
                  96B / B, 16130
                  <br />
                  Nilüfer / BURSA
                </p>
                <ul className="main-footer__about__info">
                  <li>
                    <span className="fas fa-phone-square"></span>
                    <a href="tel:+2242234234">(0224) 223 4234</a>
                  </li>
                  <li>
                    <span className="fas fa-envelope"></span>
                    <a href="mailto:info@yenidunyaendustriyel.com">
                      info@yenidunyaendustriyel.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="copyright text-center">
        <div className="container wow fadeInUp" data-wow-delay="500ms">
          <p className="copyright__text">
            <Link as={Link} to="/" onClick={handleClick}>
              {t("Yenidünya Endüstriyel Tedarik")} © 2023
            </Link>
          </p>
          <p className="copyright__text">{t("Tüm Hakları Saklıdır")}</p>
        </div>
      </section>

      <a
        href="#"
        className="back d-flex align-items-center justify-content-center active"
        alt="Up-down" aria-label="Up-down"
      >
        <i className="fas fa-arrow-up"></i>
        <svg
          className="whatsapp-button__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </a>

      <a
        href="https://wa.me/905465341963"
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        alt="Whatsapp"
        aria-label="Whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
        <svg
          className="whatsapp-button__circle"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
        </svg>
      </a>
    </>
  );
}

export default Footer;
