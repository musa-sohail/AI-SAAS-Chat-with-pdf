import Documents from "@/components/Documents";

export const dynamic = "force-dynamic";

function Page() {
  return (
    <div className="h-full dashboard max-w-7xl mx-auto">
      <h1 className="text-3xl p-5 bg-gray-100 font-extralight text-indigo-600">
        My Documents
      </h1>

      <Documents />
    </div>
  );
}
export default Page;