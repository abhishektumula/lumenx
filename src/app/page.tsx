import { Container } from "../components/container";
import {
  AngledLineBlocks,
  DottedBlocks,
  GridBlocks,
  HorizontalLineBlocks,
  VerticalLineBlocks,
} from "../components/trash-design";
import { Home } from "../components/Home";
import { ThemeToggle } from "../components/theme-toggle";
import { NavBar } from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="w-full h-full">
      <Home />
    </div>
  );
}
