
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type FormSubmissionData = {
  form_type: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  pincode?: string;
  organization?: string;
  message?: string;
  referral_code?: string;
  source: string;
};

export function useFormSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (
    data: FormSubmissionData,
    zapierWebhookUrl?: string
  ) => {
    setIsSubmitting(true);

    try {
      // 1. Save to Supabase
      const { error } = await supabase.from("form_submissions").insert([data]);

      if (error) {
        console.error("Error saving to Supabase:", error);
        throw new Error("Failed to save your submission");
      }
      
      // 2. Send to Zapier webhook if URL is provided
      if (zapierWebhookUrl) {
        try {
          await fetch(zapierWebhookUrl, {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json"
            },
            mode: "no-cors",
            body: JSON.stringify(data)
          });
        } catch (zapierError) {
          console.error("Error sending to Zapier webhook:", zapierError);
          // Continue execution - we don't want Zapier errors to affect the user experience
          // since data is already saved to Supabase
        }
      }

      toast({
        title: "Request Submitted",
        description: "We've received your request and will get back to you soon.",
      });
      
      return { success: true };
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Failed to submit",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive"
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
}
