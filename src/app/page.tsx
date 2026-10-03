import {
  AngledLineBlocks,
  DottedBlocks,
  GridBlocks,
  HorizontalLineBlocks,
  VerticalLineBlocks,
} from "./components/design-blocks";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen">
      <div className="flex items-center justify-center max-w-5xl mx-auto gap-4">
        <DottedBlocks />
        <HorizontalLineBlocks />
        <VerticalLineBlocks />
        <GridBlocks />
        <AngledLineBlocks />
      </div>
    </div>
  );
}
