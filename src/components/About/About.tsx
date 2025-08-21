interface AboutProps {
  description: string;
}

const About = ({ description }: AboutProps) => {
  return (
    <section className="p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p>{description}</p>
    </section>
  );
};

export default About;
