
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tag, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  onCancel?: () => void;
  showCancelButton?: boolean;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  pincode: string;
  referral: string;
  message: string;
}

export const ContactForm = ({ onCancel, showCancelButton = false }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    city: "",
    pincode: "",
    referral: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      pincode: "",
      referral: "",
      message: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://maker.ifttt.com/trigger/Form fill from caresanctum website/json/with/key/3Kzll6v5NOWEhpdn_KVVq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Request Submitted",
          description: "We've received your request and will get back to you soon.",
        });
      } else {
        console.error("Form submission failed:", await response.text());
        throw new Error("Something went wrong with the submission");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to submit",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 space-y-4">
        <div className="bg-green-100 text-green-700 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
          <CheckCircle className="h-10 w-10" />
        </div>
        <h3 className="text-xl font-semibold text-primary">Thank You!</h3>
        <p className="text-gray-600 text-center max-w-md">
          Your request has been submitted. Our team will contact you shortly.
        </p>
        <Button 
          onClick={resetForm} 
          variant="outline"
          className="mt-4"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
        <Input 
          id="name" 
          placeholder="Your name" 
          value={formData.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Your email address" 
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
        <Input 
          id="phone" 
          type="tel" 
          placeholder="Your phone number" 
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="city" className="text-sm font-medium text-gray-700">City</label>
        <Input 
          id="city" 
          type="text" 
          placeholder="Your city" 
          value={formData.city}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pin Code</label>
        <Input 
          id="pincode" 
          type="text" 
          placeholder="Enter your 6-digit pin code" 
          maxLength={6}
          pattern="[0-9]{6}"
          className="font-medium tracking-wider"
          value={formData.pincode}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="referral" className="text-sm font-medium text-gray-700">
          Referral Code <span className="text-gray-400 text-xs">(optional)</span>
        </label>
        <div className="relative">
          <Input 
            id="referral" 
            type="text" 
            placeholder="Enter referral code if you have one"
            className="pl-9"
            value={formData.referral}
            onChange={handleInputChange}
          />
          <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary h-4 w-4" />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <Textarea 
          id="message" 
          placeholder="How can we help you?" 
          value={formData.message}
          onChange={handleInputChange}
        />
      </div>
      <div className={`flex ${showCancelButton ? 'space-x-4' : ''}`}>
        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Request Callback"}
        </Button>
        {showCancelButton && (
          <Button type="button" variant="outline" onClick={onCancel} className="w-full">
            Cancel
          </Button>
        )}
      </div>
    </form>
  );
};
