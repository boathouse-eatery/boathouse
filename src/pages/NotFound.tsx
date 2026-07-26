import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <p className="font-sans text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl font-semibold text-bay-800 sm:text-4xl">
        Looks like you've drifted off the dock
      </h1>
      <p className="mt-4 max-w-md font-sans text-bay-600">
        The page you're looking for isn't here. Let's get you back to solid
        ground.
      </p>
      <div className="mt-8">
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </section>
  );
}
