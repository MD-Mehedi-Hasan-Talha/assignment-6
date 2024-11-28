import SuperDeliciousCard from "./SuperDeliciousCard";

export default function SuperDelicious() {
  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <SuperDeliciousCard />
        <SuperDeliciousCard />
        <SuperDeliciousCard />
      </div>
    </section>
  );
}
