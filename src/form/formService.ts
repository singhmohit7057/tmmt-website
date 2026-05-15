const WEB3_ENDPOINT = "https://api.web3forms.com/submit";

const ACCESS_KEYS = {
  contact: import.meta.env.VITE_WEB3_CONTACT_KEY,
  notify: import.meta.env.VITE_WEB3_NOTIFY_KEY,
};

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export type FormType = keyof typeof ACCESS_KEYS;

export async function submitForm(type: FormType, data: any) {
  const accessKey = ACCESS_KEYS[type];

  if (!accessKey) {
    // In development, we log instead of crashing to allow UI testing
    console.warn(`Missing API key for ${type} form. Check your .env file.`);
    return { success: true, message: "Dev Mode: Form simulated successfully." };
  }

  try {
    const web3Response = await fetch(WEB3_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `TMMT - ${type.toUpperCase()} Submission`,
        from_name: "TMMT Website",
        ...data,
      }),
    });

    const result = await web3Response.json();

    if (!result.success) {
      throw new Error(result.message || "Web3Forms submission failed");
    }

    // Optional: Log to Google Sheets (non-blocking)
    if (GOOGLE_SHEET_URL) {
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          type,
          ...data,
          source: "tmmt_agency",
        }),
      }).catch(() => console.warn("Google Sheet logging failed"));
    }

    return result;
  } catch (error: any) {
    throw new Error(error.message || "Form submission failed");
  }
}