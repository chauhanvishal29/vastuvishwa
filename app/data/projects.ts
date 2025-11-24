export interface ProjectType {
  id: number;
  title: string;
  description: string;
  hero: string;
  year: string;
  location: string;
  size: string;
  category: string;
  images: string[];
}

export const projectData: ProjectType[] = [
  {
    id: 1,
    title: "Modern Villa",
    description:
      "A modern luxury villa designed with clean geometrical forms, natural light, and open living spaces.",
    hero: "/p1.jpg",
    year: "2024",
    location: "Ahmedabad, India",
    size: "6500 sq.ft",
    category: "Residential",
    images: ["/p1.jpg", "/p2.jpg", "/p3.jpg"],
  },
  {
    id: 2,
    title: "Corporate Office",
    description:
      "An innovative corporate office designed with flexible spaces, contemporary aesthetics, and functional zoning.",
    hero: "/p3.jpg",
    year: "2023",
    location: "Mumbai, India",
    size: "18,000 sq.ft",
    category: "Commercial",
    images: ["/p3.jpg", "/p4.jpg", "/p5.jpg"],
  },
];
