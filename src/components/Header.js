"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { navItems } from "@/data/site";
import styles from "./Header.module.css";

function getActivePanel(item, activeTabs) {
  if (!item?.mega) return null;
  if (!item.mega.tabs) return item.mega;

  const activeLabel = activeTabs[item.label] ?? item.mega.tabs[0].label;
  return item.mega.tabs.find((tab) => tab.label === activeLabel) ?? item.mega.tabs[0];
}

function getColumnCount(item, panel) {
  const count = panel.columns.length;

  if (item.label === "Services") return panel.label === "Graphic Design" ? 6 : 5;
  if (item.label === "Product") return 4;
  if (item.label === "Packages") return 1;
  if (item.label === "Technologies") return panel.label === "Cloud Technologies" ? 6 : count;
  if (item.label === "AI Agency") return Math.min(count, 4);
  if (item.label === "Company") return 5;
  if (item.label === "Market Area") return 2;

  return Math.min(count, 5);
}

function MenuGroups({ item, panel, onNavigate }) {
  const columnCount = getColumnCount(item, panel);

  return (
    <div
      className={styles.megaGrid}
      style={{ "--mega-columns": columnCount }}
    >
      {panel.columns.map((column, index) => (
        <section
          key={column.heading}
          className={`${styles.megaGroup} ${index >= columnCount ? styles.megaGroupNextRow : ""}`}
        >
          <h4>
            <FiChevronRight aria-hidden="true" />
            {column.heading}
          </h4>
          <ul>
            {column.links.map((link) => (
              <li key={link.label}>
                {link.href && link.href !== "#" ? (
                  <Link href={link.href} onClick={onNavigate}>
                    {link.label}
                  </Link>
                ) : (
                  <button type="button" onClick={onNavigate}>
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function MegaIntro({ panel }) {
  return (
    <aside className={styles.megaIntro}>
      {panel.image && (
        <Image
          src={panel.image}
          alt=""
          fill
          sizes="(max-width: 1299px) 420px, 366px"
          className={styles.megaIntroImage}
        />
      )}
      <div className={styles.megaIntroShade} aria-hidden="true" />
      <div className={styles.megaIntroCopy}>
        <h3>{panel.title}</h3>
        <p>{panel.description}</p>
      </div>
    </aside>
  );
}

function MenuTabs({ item, panel, setActiveTabs, mobile = false }) {
  if (!item.mega.tabs) return null;

  return (
    <div
      className={mobile ? styles.drawerTabs : styles.megaTabs}
      style={mobile ? undefined : { "--tab-count": item.mega.tabs.length }}
      role="tablist"
      aria-label={`${item.label} menu categories`}
    >
      {item.mega.tabs.map((tabItem) => {
        const active = tabItem.label === panel.label;
        return (
          <button
            key={tabItem.label}
            type="button"
            className={`${mobile ? styles.drawerTab : styles.megaTab} ${
              active ? (mobile ? styles.drawerTabActive : styles.megaTabActive) : ""
            }`}
            onClick={() =>
              setActiveTabs((current) => ({ ...current, [item.label]: tabItem.label }))
            }
            role="tab"
            aria-selected={active}
          >
            {tabItem.label}
          </button>
        );
      })}
    </div>
  );
}

function DesktopMegaMenu({ item, activeTabs, setActiveTabs, onClose }) {
  const panel = getActivePanel(item, activeTabs);
  if (!panel) return null;

  return (
    <div className={styles.mega} role="dialog" aria-label={`${item.label} menu`}>
      <div className={styles.megaViewport}>
        <MenuTabs item={item} panel={panel} setActiveTabs={setActiveTabs} />
        <div key={panel.label ?? panel.title} className={styles.megaPanel}>
          <MegaIntro panel={panel} />
          <div className={styles.megaBody}>
            <MenuGroups item={item} panel={panel} onNavigate={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DrawerMegaMenu({ item, activeTabs, setActiveTabs, onNavigate }) {
  const panel = getActivePanel(item, activeTabs);
  if (!panel) return null;

  return (
    <div className={styles.drawerMega}>
      <MenuTabs item={item} panel={panel} setActiveTabs={setActiveTabs} mobile />
      <div key={panel.label ?? panel.title} className={styles.drawerPanel}>
        <MegaIntro panel={panel} />
        <MenuGroups item={item} panel={panel} onNavigate={onNavigate} />
      </div>
    </div>
  );
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [activeTabs, setActiveTabs] = useState({});

  const closeMenus = useCallback(() => {
    setDrawerOpen(false);
    setExpanded(null);
    setDesktopMenu(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen || desktopMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen, desktopMenu]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeMenus();
    };
    const media = window.matchMedia("(max-width: 1299.98px)");
    const onViewportChange = () => {
      if (media.matches) setDesktopMenu(null);
      else setDrawerOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    media.addEventListener("change", onViewportChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      media.removeEventListener("change", onViewportChange);
    };
  }, [closeMenus]);

  const activeDesktopItem = navItems.find((item) => item.label === desktopMenu);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="VD Infotech home" onClick={closeMenus}>
          <Image
            src="/images/vd-infotech-final-logo-red-and-black-01-1.webp"
            alt="VD Infotech"
            width={222}
            height={50}
            priority
          />
        </Link>

        <div className={`${styles.rightGroup} ${styles.desktopOnly}`}>
          <nav aria-label="Primary">
            <ul className={styles.nav}>
              {navItems.map((item) => {
                const isOpen = desktopMenu === item.label;
                return (
                  <li key={item.label} className={styles.navItem}>
                    {item.mega ? (
                      <div className={styles.navLinkWrapper}>
                        {item.href ? (
                          <Link
                            className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ""}`}
                            href={item.href}
                            onClick={closeMenus}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <button
                            className={`${styles.navLink} ${isOpen ? styles.navLinkActive : ""}`}
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded={isOpen}
                            onClick={() => setDesktopMenu(isOpen ? null : item.label)}
                          >
                            {item.label}
                          </button>
                        )}
                        <button
                          className={styles.chevronButton}
                          type="button"
                          aria-haspopup="dialog"
                          aria-expanded={isOpen}
                          aria-label={`Show ${item.label} menu`}
                          onClick={() => setDesktopMenu(isOpen ? null : item.label)}
                        >
                          <FiChevronDown
                            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                            size={14}
                          />
                        </button>
                      </div>
                    ) : (
                      <Link className={styles.navLink} href={item.href} onClick={closeMenus}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link href="/#contact" className={styles.cta} onClick={closeMenus}>
            Book an Appointment
          </Link>
        </div>

        <button
          className={styles.burger}
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          aria-expanded={drawerOpen}
        >
          <FiMenu />
        </button>
      </div>

      {activeDesktopItem && (
        <>
          <button className={styles.desktopBackdrop} onClick={closeMenus} aria-label="Close menu" />
          <DesktopMegaMenu
            item={activeDesktopItem}
            activeTabs={activeTabs}
            setActiveTabs={setActiveTabs}
            onClose={closeMenus}
          />
        </>
      )}

      {drawerOpen && (
        <>
          <button className={styles.backdrop} onClick={closeMenus} aria-label="Close menu" />
          <div className={styles.drawer} role="dialog" aria-modal="true" aria-label="Menu">
            <div className={styles.drawerHead}>
              <Link href="/" aria-label="VD Infotech home" onClick={closeMenus}>
                <Image
                  src="/images/vd-infotech-final-logo-red-and-black-01-1.webp"
                  alt="VD Infotech"
                  width={160}
                  height={36}
                />
              </Link>
              <button className={styles.burger} onClick={closeMenus} aria-label="Close menu">
                <FiX />
              </button>
            </div>

            <ul className={styles.drawerNav}>
              {navItems.map((item) => {
                const expandable = Boolean(item.mega);
                const isExpanded = expanded === item.label;

                return (
                  <li key={item.label}>
                    {expandable ? (
                      <>
                        <div className={styles.drawerNavLinkWrapper}>
                          {item.href ? (
                            <Link
                              className={styles.navLink}
                              href={item.href}
                              onClick={closeMenus}
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <button
                              className={styles.navLink}
                              onClick={() => setExpanded(isExpanded ? null : item.label)}
                              aria-expanded={isExpanded}
                            >
                              {item.label}
                            </button>
                          )}
                          <button
                            className={styles.drawerChevronButton}
                            onClick={() => setExpanded(isExpanded ? null : item.label)}
                            aria-expanded={isExpanded}
                            aria-label={`Show ${item.label} menu`}
                          >
                            <FiChevronDown
                              className={`${styles.chevron} ${isExpanded ? styles.chevronOpen : ""}`}
                              size={16}
                            />
                          </button>
                        </div>
                        {isExpanded && (
                          <DrawerMegaMenu
                            item={item}
                            activeTabs={activeTabs}
                            setActiveTabs={setActiveTabs}
                            onNavigate={closeMenus}
                          />
                        )}
                      </>
                    ) : (
                      <Link className={styles.navLink} href={item.href} onClick={closeMenus}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            <Link href="/#contact" className={`${styles.cta} ${styles.drawerCta}`} onClick={closeMenus}>
              Book an Appointment
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
