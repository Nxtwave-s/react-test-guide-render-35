
import { cn } from "@/lib/utils";

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="text-left max-w-3xl">
      <h1 className={cn(
        "text-4xl md:text-6xl font-bold mb-8",
        "tracking-tight font-mono",
      )}>
        {title}
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-gray-700 font-light">
        {subtitle}
      </p>
    </div>
  );
};

export default Header;
