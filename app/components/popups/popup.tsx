"use client";

import { useState, useCallback, useEffect } from "react";
import PopupCard from "./popup-card";

interface PopupProps {
  title?: string;
  children: React.ReactNode;
  delay?: number;
  expiryDate?: Date | string;
  autoShow?: boolean;
  contentClassName?: string;
}

export const Popup = ({
  title,
  children,
  delay = 5000,
  expiryDate,
  autoShow = true,
  contentClassName,
}: PopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const checkHasBeenClosed = useCallback(() => {
    if (typeof window !== "undefined") {
      const popupClosed = localStorage.getItem("popupClosed");
      return popupClosed && new Date().getTime() < Number(popupClosed);
    }
    return false;
  }, []);

  const hasExpired = useCallback(() => {
    if (!expiryDate) return false;
    const expiry =
      expiryDate instanceof Date ? expiryDate : new Date(expiryDate);
    return expiry < new Date();
  }, [expiryDate]);

  const showPopup = useCallback(() => {
    if (checkHasBeenClosed() || hasExpired()) return;
    setIsVisible(true);
  }, [checkHasBeenClosed, hasExpired]);

  const hidePopup = useCallback(() => {
    if (!isVisible) return;

    setIsVisible(false);
    localStorage.setItem("popupClosed", new Date().getTime().toString());
  }, [isVisible]);

  useEffect(() => {
    console.log(isVisible);
    if (!autoShow || checkHasBeenClosed() || hasExpired()) return;
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [autoShow, delay, checkHasBeenClosed, hasExpired]);

  if (!isVisible) return null;

  return (
    <PopupCard
      isVisible={isVisible}
      hidePopup={hidePopup}
      title={title}
      contentClassName={contentClassName}
    >
      {children}
    </PopupCard>
  );
};
