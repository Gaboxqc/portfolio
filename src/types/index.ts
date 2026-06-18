import type { ComponentType, SVGProps } from "react";

/** Shared shape for an icon component imported via vite-plugin-svgr (`*.svg?react`). */
export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/** A single localized translation row for a translatable entity. */
export interface Translation {
  language_code: string;
  title: string;
  description: string;
}

export interface Tag {
  id: number;
  name: string;
}

export interface Academy {
  name: string;
}

export interface DifficultyLevel {
  id?: number;
  name: string;
}

export interface ProjectType {
  id?: number;
  name: string;
}

/** Generic filter option used for categories, tags, project types, and difficulty levels. */
export interface FilterOption {
  id: number;
  name: string;
}

export interface Certification {
  id: number;
  year: number;
  url: string;
  academy: Academy;
  tags: Tag[];
  translations: Translation[];
}

export interface Course {
  id: number;
  year: number;
  url: string;
  academy: Academy;
  tags: Tag[];
  translations: Translation[];
}

export interface Project {
  id: number;
  year: number;
  image_url: string;
  git_url: string;
  deploy_url: string;
  difficulty_level: DifficultyLevel;
  project_type: ProjectType;
  tags: Tag[];
  translations: Translation[];
}
