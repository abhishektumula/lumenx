import { Container } from "./components/container";
import {
  AngledLineBlocks,
  DottedBlocks,
  GridBlocks,
  HorizontalLineBlocks,
  VerticalLineBlocks,
} from "./components/design-blocks";
import { Home } from "./components/Home";
import { ThemeToggle } from "./components/theme-toggle";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <Home />
    </div>
  );
}
