import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="container-content flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="section-heading mt-4">This route doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-md text-muted">
        The page you&apos;re looking for may have moved, or the URL might have a typo.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <FiArrowLeft />
        Back to home
      </Link>
    </div>
  );
}
