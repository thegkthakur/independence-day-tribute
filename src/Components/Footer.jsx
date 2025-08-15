const Footer = () => {
  return (
      <footer className="py-6 text-sm bg-white/80">
        <p>
          “Where the mind is without fear and the head is held high…” —
          Rabindranath Tagore
        </p>
        <p className="mt-1 opacity-70">
          © {new Date().getFullYear()} Tribute App by GK Thakur
        </p>
      </footer>
  )
}
export default Footer