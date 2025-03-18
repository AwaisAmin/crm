"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";

function NotImplemented() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full">
        <AlertCircle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Page Not Implemented
        </h1>
        <p className="text-gray-600 mb-6">
          This feature is currently under development and will be available
          soon.
        </p>
        <Button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-900 hover:bg-blue-800 cursor-pointer"
        >
          Return to Dashboard
        </Button>
      </div>
    </div>
  );
}

export default NotImplemented;
