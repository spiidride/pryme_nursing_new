"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import axios, { AxiosError } from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;
const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

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
      const result = await emailjs.send(
        serviceID,
        templateID,
        { email_address: email },
        userID
      );

      if (result.status === 200) {
        await axios.post(`${BASE_URL}/waitlist`, { email_address: email });
        toast.success("Successfully joined waitlist!");
        setEmail("");
        onSuccess?.(email);

        // 🔥 trigger update for WaitlistCounter
        if (typeof window !== "undefined") {
          localStorage.setItem("waitlist-updated", Date.now().toString());
          window.dispatchEvent(new Event("storage")); // force fire
        }
      } else {
        throw new Error("Failed to subscribe, kindly retry.");
      }
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      const message =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong";

      toast.error(message);
      onError?.(error);
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
      <Button variant="primary" type="submit" disabled={isLoading}>
        {isLoading ? "Joining..." : buttonText}
      </Button>
    </form>
  );
}
