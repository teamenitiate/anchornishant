export function Footer() {
  return (
    <footer className="relative border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg">
          Nishant <span className="text-gradient-gold">Chandnani</span>
        </p>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} · Crafted for unforgettable moments.</p>
      </div>
    </footer>
  );
}
