export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if (!res.ok) {
    throw new Error("This Page is not found")
  }
  return res.json();
};
