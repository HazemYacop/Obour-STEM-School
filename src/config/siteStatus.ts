const parseBooleanFlag = (value?: string | null) => {
  if (!value) return false;
  const normalized = value.trim().toLowerCase();
  return ["true", "1", "yes", "on"].includes(normalized);
};

const parseDateIso = (value?: string | null, fallbackOffsetMinutes = 60) => {
  if (value) {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  }
  const fallbackDate = new Date(Date.now() + fallbackOffsetMinutes * 60 * 1000);
  return fallbackDate.toISOString();
};

export const websiteStatus = {
  websitePaused: parseBooleanFlag(process.env.WEBSITE_PAUSED),
  websitePauseEndDate: parseDateIso(process.env.WEBSITE_PAUSE_END_DATE),
};

export type WebsiteStatus = typeof websiteStatus;
