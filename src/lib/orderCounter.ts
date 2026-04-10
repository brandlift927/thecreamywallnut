const API_URL = "https://api.counterapi.dev/v1/tcw_production/website_whatsapp_orders";

export const getOrderCount = async (): Promise<number> => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) return 0;
    const data = await res.json();
    return data && typeof data.count === "number" ? data.count : 0;
  } catch {
    return 0;
  }
};

export const incrementOrderCount = async (): Promise<number> => {
  try {
    const res = await fetch(`${API_URL}/up`);
    if (!res.ok) return 0;
    const data = await res.json();
    
    // Dispatch a custom event so the counter re-renders live locally
    window.dispatchEvent(new CustomEvent("tcw-whatsapp-click", { detail: data.count }));
    
    return data && typeof data.count === "number" ? data.count : 0;
  } catch {
    return 0;
  }
};
