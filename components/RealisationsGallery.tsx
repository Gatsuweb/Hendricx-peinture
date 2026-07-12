"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "@/app/site.module.css";

type FilterKey = "all" | "fresques" | "renovations";

type FrescoProject = {
  type: "fresque";
  title: string;
  text: string;
  image: string;
  className: "projectWide" | "projectTall" | "projectHalf";
};

type RenovationProject = {
  type: "renovation";
  title: string;
  text: string;
  image: string;
  className: "projectWide" | "projectTall" | "projectHalf";
};

type GalleryProject = FrescoProject | RenovationProject;

const frescoProjects: FrescoProject[] = [
  {
    type: "fresque",
    title: "Route au coucher du soleil",
    text: "Fresque monumentale, couleurs vives et composition graphique.",
    image: "/photos/661744embeddedImage.jpg",
    className: "projectWide",
  },
  {
    type: "fresque",
    title: "Fresque en cours",
    text: "Murale peinte sur place, du dessin à la mise en couleur.",
    image: "/photos/187393embeddedImage.jpg",
    className: "projectTall",
  },
  {
    type: "fresque",
    title: "Terrain de sport",
    text: "Création graphique adaptée aux volumes et à l'usage du lieu.",
    image: "/photos/2962805embeddedImage.jpg",
    className: "projectHalf",
  },
];

const renovationProjects: RenovationProject[] = [
  {
    type: "renovation",
    title: "Façade avant / après",
    text: "Lecture directe de l'état initial et du résultat fini sur une même image.",
    image: "/photos/468298020_2022966138142573_7311619731374257905_n.jpg",
    className: "projectTall",
  },
  {
    type: "renovation",
    title: "Pignon extérieur avant / après",
    text: "Rénovation extérieure présentée en montage avant / après.",
    image: "/photos/480326737_2084649271974259_8976282591705393876_n.jpg",
    className: "projectHalf",
  },
  {
    type: "renovation",
    title: "Rénovation intérieure avant / après",
    text: "Chantier intérieur documenté en montage avant / après.",
    image: "/photos/6974435embeddedImage.jpg",
    className: "projectWide",
  },
];

const filterLabels: Record<FilterKey, string> = {
  all: "Tout",
  fresques: "Fresques",
  renovations: "Rénovations",
};

export function RealisationsGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);

  const showFresques = activeFilter === "all" || activeFilter === "fresques";
  const showRenovations = activeFilter === "all" || activeFilter === "renovations";

  const modalTitle = useMemo(() => {
    if (!selectedProject) {
      return "";
    }

    return selectedProject.title;
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedProject]);

  return (
    <>
      <section className={`${styles.section} ${styles.galleryFilterSection}`}>
        <div className={styles.galleryFilterBar} aria-label="Filtrer les réalisations">
          {(Object.keys(filterLabels) as FilterKey[]).map((filter) => (
            <button
              key={filter}
              type="button"
              className={styles.galleryFilterButton}
              data-active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filterLabels[filter]}
            </button>
          ))}
        </div>
      </section>

      {showFresques ? (
        <section className={`${styles.section} ${styles.realisationSection}`}>
          <div className={styles.galleryHeader}>
            <span className={`${styles.eyebrow} reveal`}>Fresques murales</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Des murs traités comme des compositions uniques
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Des créations sur mesure pour donner une identité forte à un lieu, du
              croquis à la mise en couleur finale.
            </p>
          </div>
          <div className={styles.galleryGrid}>
            {frescoProjects.map((project) => (
              <button
                key={project.title}
                type="button"
                className={`${styles.projectCard} ${styles[project.className]} reveal`}
                onClick={() => setSelectedProject(project)}
              >
                <img src={project.image} alt={project.title} />
                <span className={styles.projectOverlay}>
                  <strong>{project.title}</strong>
                  <span>{project.text}</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {showRenovations ? (
        <section className={`${styles.section} ${styles.realisationSection}`}>
          <div className={styles.galleryHeader}>
            <span className={`${styles.eyebrow} reveal`}>Rénovations</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Avant / après propres, lisibles et professionnels
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Une lecture directe du chantier : état initial, préparation des supports,
              puis finition soignée sans surcharge de texte.
            </p>
          </div>
          <div className={styles.galleryGrid}>
            {renovationProjects.map((project) => (
              <button
                key={project.title}
                type="button"
                className={`${styles.projectCard} ${styles[project.className]} reveal`}
                onClick={() => setSelectedProject(project)}
                aria-label={`Ouvrir ${project.title}`}
              >
                <img src={project.image} alt={project.title} />
                <span className={styles.projectOverlay}>
                  <strong>{project.title}</strong>
                  <span>{project.text}</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      ) : null}

      {selectedProject ? (
        <div
          className={styles.projectModalBackdrop}
          role="presentation"
          onMouseDown={() => setSelectedProject(null)}
        >
          <div
            className={styles.projectModal}
            role="dialog"
            aria-modal="true"
            aria-label={modalTitle}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.projectModalClose}
              onClick={() => setSelectedProject(null)}
              aria-label="Fermer la réalisation"
            >
              x
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className={styles.projectModalCaption}>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.text}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
