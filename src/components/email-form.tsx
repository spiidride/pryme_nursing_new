"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/waitlist`, {
        email_address: email,
      });
      toast.success(response?.data?.message);

      setEmail("");
      onSuccess?.(email);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "Something went wrong");
        onError?.(error);
      } else {
        toast.error("Unexpected error");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-4 ${className}`}
    >
      <Input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        className="w-full sm:w-[300px] bg-white text-black border-[#E7E8EA]"
        required
      />
      <Button variant={"primary"} type="submit" disabled={isLoading}>
        {isLoading ? "Joining..." : buttonText}
      </Button>
    </form>
  );
}
