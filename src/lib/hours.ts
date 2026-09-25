import hours from "../data/hours.json";

type Day = (typeof hours.days)[number];

/** "12:00" -> "12", "17:00" -> "5", "21:30" -> "9:30" */
function shortTime(t: string) {
  const [h, m] = t.split(":").map(Number);
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return m ? `${h12}:${String(m).padStart(2, "0")}` : `${h12}`;
}

function meridiem(t: string) {
  return Number(t.split(":")[0]) < 12 ? "a.m." : "p.m.";
}

/** Brand style: "12–5 p.m." */
export function formatRange(open: string, close: string) {
  const sameHalf = meridiem(open) === meridiem(close);
  return sameHalf
    ? `${shortTime(open)}–${shortTime(close)} ${meridiem(close)}`
    : `${shortTime(open)} ${meridiem(open)}–${shortTime(close)} ${meridiem(close)}`;
}

export function formatDay(d: Day) {
  return d.open && d.close ? formatRange(d.open, d.close) : "Closed";
}

/** Consecutive days with identical hours, e.g. "Wed–Thu 12–5 p.m." (starts on Wednesday for readability) */
export function groupedHours() {
  const order = [3, 4, 5, 6, 0, 1, 2].map((i) => hours.days[i]);
  const groups: { label: string; value: string }[] = [];
  let start = order[0];
  let prev = order[0];
  for (let i = 1; i <= order.length; i++) {
    const cur = order[i];
    if (!cur || formatDay(cur) !== formatDay(prev)) {
      groups.push({
        label: start === prev ? start.short : `${start.short}–${prev.short}`,
        value: formatDay(prev),
      });
      start = cur;
    }
    prev = cur;
  }
  return groups;
}

export function schemaHours() {
  const byRange = new Map<string, { opens: string; closes: string; days: string[] }>();
  for (const d of hours.days) {
    if (!d.open || !d.close) continue;
    const key = `${d.open}-${d.close}`;
    if (!byRange.has(key)) byRange.set(key, { opens: d.open, closes: d.close, days: [] });
    byRange.get(key)!.days.push(d.day);
  }
  return [...byRange.values()].map((r) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: r.days,
    opens: r.opens,
    closes: r.closes,
  }));
}

export { hours };
