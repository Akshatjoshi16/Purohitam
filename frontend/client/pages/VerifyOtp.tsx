import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/use-auth";
import axios from "axios";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { updateUser } = useAuth();

  // ✅ VERIFY OTP
  const handleVerify = async () => {
    if (!otp) return alert("Enter OTP");

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:8080/api/v1.0/verify-otp",
        { otp },
        { withCredentials: true }
      );

      updateUser({ isVerified: true }); // 🔥 update state

      alert("Account verified successfully!");
      navigate("/");
    } catch (err) {
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // 🔁 RESEND OTP
  const handleResend = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/auth/send-otp",
        {},
        { withCredentials: true }
      );

      alert("OTP sent again!");
    } catch {
      alert("Failed to resend OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/20">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">

        <h2 className="text-2xl font-bold text-center">
          Verify Your Account
        </h2>

        <p className="text-sm text-gray-500 text-center">
          Enter the OTP sent to your email
        </p>

        <Input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <Button
          className="w-full"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </Button>

        <div className="text-center">
          <button
            onClick={handleResend}
            className="text-sm text-primary hover:underline"
          >
            Resend OTP
          </button>
        </div>

      </div>
    </div>
  );
};

export default VerifyOtp;