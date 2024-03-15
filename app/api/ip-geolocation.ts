export const getIP = async () => {
  const res = await fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IPGEOLOCATION}`
  );
  return res.json();
};
