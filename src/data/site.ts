export const site = {
  name: "SK Learnings",
  tagline: "Where serious students become future doctors and engineers.",
  location: "Madurai, Tamil Nadu",
  established: 2014,
  successRate: 84,
  yearsOfExcellence: 10,
  contact: {
    phones: ["+91 90956 36001", "+91 95666 06555"],
    email: "thesklearnings@gmail.com",
    addresses: [
      "Our Study Center — 5, Thomas St, Near Kunguma Kaali Amman Temple, Anna Main Street, Nagu Nagar, Pethaniapuram, Tamil Nadu 625016.",
      "12S/1, Sahaya Madha Street, Gnanaolipuram, Madurai, Tamil Nadu, India. Pincode: 625 016",
    ],
    mapEmbed:
      "https://maps.google.com/maps?q=The%20SK%20Learnings%20Anna%20Main%20Street%20Madurai&t=&z=16&ie=UTF8&iwloc=&output=embed",
  },
} as const;

// Replace these with the YouTube video IDs from your channel.
// Take the ID from a URL like: youtu.be/<ID>  or  youtube.com/watch?v=<ID>
// Default value below is the public YouTube IFrame API sample so the player
// works out of the box; swap in your real videos when ready.
export const videos = {
  intro: "M7lc1UVf-VE",
  crack: "M7lc1UVf-VE",
  related: "M7lc1UVf-VE",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/faq", label: "FAQ" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;
