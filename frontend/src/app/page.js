import FormationBuilder from "@/components/formationBuilder"
export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="mb-6 text-center text-xl font-semibold text-gray-800">
        Build your lineup
      </h1>
      <FormationBuilder />
    </main>
  );
}
