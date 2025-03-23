import { cn } from "@/lib/cn";

const Ellipse = ({ className }: { className: string }) => {
  return <div className={cn("rounded-full", className)} />;
};

export default Ellipse;
