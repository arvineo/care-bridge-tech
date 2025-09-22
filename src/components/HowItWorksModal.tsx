import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

interface HowItWorksModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HowItWorksModal = ({ open, onOpenChange }: HowItWorksModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary text-center mb-4">
            How QuickCheck Works
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex justify-center">
            <img
              src="/how-quickcheck-works.png"
              alt="How QuickCheck Works - 4 step process showing: 1) You miss the call during an important meeting, 2) Tap QuickCheck for that person, 3) We call them to check urgency, 4) Get notified if truly urgent"
              className="w-full h-auto"
            />
          </div>
          {open && (
            <div className="flex justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/LFP3iRSMa5U?autoplay=1&playsinline=1"
                title="QuickCheck Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg max-w-full"
              ></iframe>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HowItWorksModal;