/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          // X-Frame-Options (allow iframe embedding from the same origin)
          { key: "X-Frame-Options", value: "SAMEORIGIN" },

          // Strict-Transport-Security (redirect HTTP to HTTPS)
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },

          // Referrer-Policy (disable sending referrer)
          { key: "Referrer-Policy", value: "no-referrer" },

          // Permissions-Policy (disable sensitive features for now)
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
