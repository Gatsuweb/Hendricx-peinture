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
  beforeImage: string;
  afterImage: string;
  className: "projectWide" | "projectTall" | "projectHalf";
};

type GalleryProject = FrescoProject | RenovationProject;

const frescoProjects: FrescoProject[] = [
  {
    type: "fresque",
    title: "L'Horizon Abstrait",
    text: "Residence contemporaine, fresque monumentale et finitions texturees.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB61gPt-df3paHZX6mNFFRa9e5xN_ZzJoivVaMURR3xtVPXg3-8wnROHFckykks_UnkbdkEfrn9DdNFxWBthFoYmx_CWE4s51RT7_oRhyzdPprT-1QovdeXrboFAPIRu1IDluIEQFPzGyuptQO09T0priKiqe4x1BOb9KgnU0II_Uwu-bOmKvyq_hCre0Ym9q61iqcH-Z95my_gCnNuj7wcUqOOWOMqUqGPUzc5bTkrp3iP0NAZG9BnekI1MjMT5HSnJqnQo2HiqYg",
    className: "projectWide",
  },
  {
    type: "fresque",
    title: "Atelier Loft",
    text: "Murale en cours dans un volume haut et industriel.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDY2veYLDhzNiFrE5y9DioL4vTdxXl5BZlEJOKbpjzT7kFYsrDOk6nhoCNIJnGcWAyq7KUBi1dbtawp2QMo3SwIGBZcVawLP5lgPZ6hhfcoY0z2zxym5Yz-RpVFRYDPbdxmQiRE0CjmrW5LRauPPtJ1HKOwr6KJfguM4obtCIlwOQ8-SbZsow6YXzCrRzIs-Gpx9RoJj6g_1RARAaOGfwbKZKgTgMz-J9TO7Zl93WpHOnwUwyp_laumW_Qlt7OHm4Mw_FwX7RWq7Og",
    className: "projectTall",
  },
  {
    type: "fresque",
    title: "Composition Murale",
    text: "Creation graphique adaptee aux lignes, aux volumes et a la lumiere du lieu.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB61gPt-df3paHZX6mNFFRa9e5xN_ZzJoivVaMURR3xtVPXg3-8wnROHFckykks_UnkbdkEfrn9DdNFxWBthFoYmx_CWE4s51RT7_oRhyzdPprT-1QovdeXrboFAPIRu1IDluIEQFPzGyuptQO09T0priKiqe4x1BOb9KgnU0II_Uwu-bOmKvyq_hCre0Ym9q61iqcH-Z95my_gCnNuj7wcUqOOWOMqUqGPUzc5bTkrp3iP0NAZG9BnekI1MjMT5HSnJqnQo2HiqYg",
    className: "projectHalf",
  },
];

const renovationProjects: RenovationProject[] = [
  {
    type: "renovation",
    title: "Renovation interieure avant apres",
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpmUzd253qSVATnsQb9EZnFx5PQInQiLxVWHcw1stdDAQ36QQeVthAwvfoFKH4goCwFoaiLFUZgkbn3fam_q1zfDeGqLqu8-iSxeQPgqd--rjV99Bmi-Cr4seETwcFFhDJQyH3E5gFKbGkrc8QQjkoBHo5H-mToD2BQy0laUSLOpEwkEpQK2KZ9gvZysh3GTYszN2LP3WQy59Bd80FpTOBcHdDgoBxjaIrL4ssiPJ0VCuXJwPiqMhq0sSiPzNDSZWYMvbSlnl6hdw",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR2ga3-bzCJsSOUxfvA23VnRqT5rkm6v6KgZBuBei17xEqWwhd06-QQ7p3HlCqBex3lPqL5QYAiJNyhRmmzadMZ81xBHuUqSmw617kJR3X5A9p4Br21fU6wln_KrvURHwwWICLgLeOsguGz_hB8oMjFM3vF08XoduJwPWzQHU5bjgrzIqM2zluPgqBiTEtKITYXEP4QbrgMRhcpvmZNpdGlUYxXLb48kJVQzO1vJrDRNY6K2R4y0nlGQ_J3AkCQAxdUMfrU1kGPMU",
    className: "projectTall",
  },
  {
    type: "renovation",
    title: "Reprise de supports et finition mate",
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR2ga3-bzCJsSOUxfvA23VnRqT5rkm6v6KgZBuBei17xEqWwhd06-QQ7p3HlCqBex3lPqL5QYAiJNyhRmmzadMZ81xBHuUqSmw617kJR3X5A9p4Br21fU6wln_KrvURHwwWICLgLeOsguGz_hB8oMjFM3vF08XoduJwPWzQHU5bjgrzIqM2zluPgqBiTEtKITYXEP4QbrgMRhcpvmZNpdGlUYxXLb48kJVQzO1vJrDRNY6K2R4y0nlGQ_J3AkCQAxdUMfrU1kGPMU",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpmUzd253qSVATnsQb9EZnFx5PQInQiLxVWHcw1stdDAQ36QQeVthAwvfoFKH4goCwFoaiLFUZgkbn3fam_q1zfDeGqLqu8-iSxeQPgqd--rjV99Bmi-Cr4seETwcFFhDJQyH3E5gFKbGkrc8QQjkoBHo5H-mToD2BQy0laUSLOpEwkEpQK2KZ9gvZysh3GTYszN2LP3WQy59Bd80FpTOBcHdDgoBxjaIrL4ssiPJ0VCuXJwPiqMhq0sSiPzNDSZWYMvbSlnl6hdw",
    className: "projectHalf",
  },
  {
    type: "renovation",
    title: "Harmonie de couleurs et finitions",
    beforeImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBpmUzd253qSVATnsQb9EZnFx5PQInQiLxVWHcw1stdDAQ36QQeVthAwvfoFKH4goCwFoaiLFUZgkbn3fam_q1zfDeGqLqu8-iSxeQPgqd--rjV99Bmi-Cr4seETwcFFhDJQyH3E5gFKbGkrc8QQjkoBHo5H-mToD2BQy0laUSLOpEwkEpQK2KZ9gvZysh3GTYszN2LP3WQy59Bd80FpTOBcHdDgoBxjaIrL4ssiPJ0VCuXJwPiqMhq0sSiPzNDSZWYMvbSlnl6hdw",
    afterImage:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAR2ga3-bzCJsSOUxfvA23VnRqT5rkm6v6KgZBuBei17xEqWwhd06-QQ7p3HlCqBex3lPqL5QYAiJNyhRmmzadMZ81xBHuUqSmw617kJR3X5A9p4Br21fU6wln_KrvURHwwWICLgLeOsguGz_hB8oMjFM3vF08XoduJwPWzQHU5bjgrzIqM2zluPgqBiTEtKITYXEP4QbrgMRhcpvmZNpdGlUYxXLb48kJVQzO1vJrDRNY6K2R4y0nlGQ_J3AkCQAxdUMfrU1kGPMU",
    className: "projectWide",
  },
];

const filterLabels: Record<FilterKey, string> = {
  all: "Tout",
  fresques: "Fresques",
  renovations: "Renovations",
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

    return selectedProject.type === "fresque"
      ? selectedProject.title
      : "Renovation - avant / apres";
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
        <div className={styles.galleryFilterBar} aria-label="Filtrer les realisations">
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
              Des murs traites comme des compositions uniques
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Des creations sur mesure pour donner une identite forte a un lieu, du
              croquis a la mise en couleur finale.
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
            <span className={`${styles.eyebrow} reveal`}>Renovations</span>
            <h2 className={`${styles.headlineLg} reveal delay100`}>
              Avant / apres propres, lisibles et professionnels
            </h2>
            <p className={`${styles.bodyMd} reveal delay200`}>
              Une lecture directe du chantier : etat initial, preparation des supports,
              puis finition soignee sans surcharge de texte.
            </p>
          </div>
          <div className={styles.galleryGrid}>
            {renovationProjects.map((project) => (
              <button
                key={project.title}
                type="button"
                className={`${styles.projectCard} ${styles.beforeAfterCard} ${
                  styles[project.className]
                } reveal`}
                onClick={() => setSelectedProject(project)}
                aria-label={`Ouvrir ${project.title}`}
              >
                <span className={styles.beforeAfterPane}>
                  <img src={project.beforeImage} alt={`${project.title} avant`} />
                  <span>Avant</span>
                </span>
                <span className={styles.beforeAfterPane}>
                  <img src={project.afterImage} alt={`${project.title} apres`} />
                  <span>Apres</span>
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
              aria-label="Fermer la realisation"
            >
              x
            </button>
            {selectedProject.type === "fresque" ? (
              <>
                <img src={selectedProject.image} alt={selectedProject.title} />
                <div className={styles.projectModalCaption}>
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className={styles.projectModalBeforeAfter}>
                  <figure>
                    <img
                      src={selectedProject.beforeImage}
                      alt={`${selectedProject.title} avant`}
                    />
                    <figcaption>Avant</figcaption>
                  </figure>
                  <figure>
                    <img
                      src={selectedProject.afterImage}
                      alt={`${selectedProject.title} apres`}
                    />
                    <figcaption>Apres</figcaption>
                  </figure>
                </div>
                <div className={styles.projectModalCaption}>
                  <h3>Renovation avant / apres</h3>
                </div>
              </>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
