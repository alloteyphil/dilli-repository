"use client";

import { useState, useCallback, useEffect } from "react";
import PopupCard from "./popup-card";
import {
  getPopupCookie,
  setPopupCookie,
} from "@/actions/popup/popup-cookie.actions";

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

  /**
   * Checks if the popup has been previously closed by the user
   * by verifying the existence and validity of the popup cookie
   */
  const checkHasBeenClosed = useCallback(async () => {
    if (typeof window !== "undefined") {
      const popupClosed = await getPopupCookie();

      return new Date().getTime() > Number(popupClosed?.value);
    }
    return false;
  }, []);

  /**
   * Determines if the popup should no longer be shown
   * based on the provided expiry date
   */
  const hasExpired = useCallback(() => {
    if (!expiryDate) return false;

    const expiry =
      expiryDate instanceof Date ? expiryDate : new Date(expiryDate);

    return expiry < new Date();
  }, [expiryDate]);

  /**
   * Shows the popup if it hasn't been closed before
   * and hasn't expired
   */
  const showPopup = useCallback(async () => {
    const closed = await checkHasBeenClosed();

    if (closed || hasExpired()) return;

    setIsVisible(true);
  }, [checkHasBeenClosed, hasExpired]);

  /**
   * Hides the popup and sets a cookie to remember
   * that the user has closed it
   */
  const hidePopup = useCallback(async () => {
    if (!isVisible) return;

    setIsVisible(false);

    await setPopupCookie();
  }, [isVisible]);

  /**
   * Automatically shows the popup after a delay
   * if autoShow is true and the popup hasn't been
   * closed or expired
   */
  useEffect(() => {
    if (!autoShow || hasExpired()) return;

    const initPopup = async () => {
      const closed = await checkHasBeenClosed();

      if (!closed) {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, delay);

        return () => clearTimeout(timer);
      }
    };

    initPopup();
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
