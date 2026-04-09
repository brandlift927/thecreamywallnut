const STORAGE_KEY = "tcw_whatsapp_order_count";

export const getOrderCount = (): number => {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY) || "0", 10) || 0;
  } catch {
    return 0;
  }
};

export const incrementOrderCount = (): number => {
  try {
    const next = getOrderCount() + 1;
    localStorage.setItem(STORAGE_KEY, String(next));
    window.dispatchEvent(new CustomEvent("tcw-whatsapp-click"));
    return next;
  } catch {
    return 0;
  }
};
