import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <Link href='/collection' className='text-blue-800 hover:text-blue-950'>
        Collection
      </Link>
    </div>
  );
}
