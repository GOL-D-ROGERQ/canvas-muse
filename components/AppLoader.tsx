"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function AppLoader() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("canvasmuse-loaded");

    if (!hasVisited) {
      setLoading(true);
    }
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("canvasmuse-loaded", "true");
    setLoading(false);
  };

  if (!loading) return null;

  return <LoadingScreen onFinish={handleFinish} />;
}