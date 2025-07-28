export default function calculatePoints(percent = 0, playtime = 0, unlocktime = 0) {
  const rarity = 1 - percent / 100;
  const playtimeHours = playtime / 60; // convert minutes to hours
  const daysSinceUnlock = ((Date.now() / 1000) - unlocktime) / 86400;
  const recency = 1 / (daysSinceUnlock + 1);
  const score = rarity * 70 + playtimeHours * 20 + recency * 10;
  return Math.round(score * 100) / 100;
}
