import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <section>About page</section>
      <Link href="/" className="rounded-full">
        Go back
      </Link>
    </div>
  );
};

export default About;
