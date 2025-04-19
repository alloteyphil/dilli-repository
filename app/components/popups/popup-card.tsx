import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface PopupCardProps {
  isVisible: boolean;
  hidePopup: () => void;
  title?: string;
  contentClassName?: string;
  children: React.ReactNode;
}

const PopupCard = ({
  isVisible,
  hidePopup,
  children,
  title,
  contentClassName,
}: PopupCardProps) => {
  return (
    <Dialog open={isVisible} onOpenChange={hidePopup}>
      <DialogContent
        className={`max-h-max min-h-max max-w-max min-w-max p-0 ${contentClassName || ""}`}
      >
        <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default PopupCard;
