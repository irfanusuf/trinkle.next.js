export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} devs_outreach</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Contact</span>
        </div>
      </div>
    </footer>
  )
}
