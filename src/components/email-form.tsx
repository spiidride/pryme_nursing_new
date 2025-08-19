"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

interface EmailFormProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
  onSuccess?: (email: string) => void;
  onError?: (error: Error) => void;
}

export function EmailForm({
  className,
  placeholder = "Enter your email address",
  buttonText = "Join waitlist",
  onSuccess,
  onError,
}: EmailFormProps) {
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await axios.post<{ message: string; email: string }>(
        "/api/waitlist",
        { email }
      );
      console.log(response);
      toast({
        title: "Success!",
        description:
          "You've been added to our waitlist. We'll be in touch soon!",
        className: "bg-green-500 text-white border-green-600",
      });

      setEmail("");
      onSuccess?.(email);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";

      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });

      onError?.(error instanceof Error ? error : new Error(errorMessage));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-4 max-w-md ${className}`}
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        className="flex-1 bg-background text-foreground border-border"
        required
      />
      <Button
        type="submit"
        disabled={isLoading}
        className="bg-destructive hover:bg-destructive/90 text-destructive-foreground whitespace-nowrap"
      >
        {isLoading ? "Joining..." : buttonText}
      </Button>
    </form>
  );
}
