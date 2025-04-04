import Ellipse from "../shared/ellipse";

interface TestimonialsCardProps {
  text: string;
  author: string;
  icon: any;
}

const TestimonialsCard = ({ text, author, icon }: TestimonialsCardProps) => {
  return (
    <div className="bg-secondary relative h-[260px] w-[390px] scale-90 p-6 md:scale-100">
      <div className="border-primary flex size-full flex-col justify-between rounded-md border p-6">
        <p className="text-primary">{text}</p>
        <div className="flex items-end justify-between">
          <p className="text-primary leading-none italic">{author}</p>
          <img src={icon} alt={author} width={64} height={64} />
        </div>
        <div className="absolute -top-3 -left-3 z-10 flex h-[22px] w-[412px] gap-1">
          {Array.from({ length: 16 }).map((_, index) => (
            <Ellipse key={index} className="bg-primary size-[22px]" />
          ))}
        </div>
        <div className="absolute top-4 -left-3 z-10 flex h-[230px] flex-col gap-1">
          {Array.from({ length: 9 }).map((_, index) => (
            <Ellipse key={index} className="bg-primary size-[22px]" />
          ))}
        </div>
        <div className="absolute -bottom-3 -left-3 z-10 flex h-[22px] w-[412px] gap-1">
          {Array.from({ length: 16 }).map((_, index) => (
            <Ellipse key={index} className="bg-primary size-[22px]" />
          ))}
        </div>
        <div className="absolute top-4 -right-3 z-10 flex h-[230px] flex-col gap-1">
          {Array.from({ length: 9 }).map((_, index) => (
            <Ellipse key={index} className="bg-primary size-[22px]" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
