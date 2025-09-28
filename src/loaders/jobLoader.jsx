export const jobsLoader = async () => {
  const res = await fetch("http://localhost:5000/jobs");
  if (!res.ok) {
    throw new Error("Failed to load jobs");
  }
  return res.json();
};
