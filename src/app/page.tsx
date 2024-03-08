import Image from "next/image";
import { FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <div className=" h-screen w-full flex  justify-center items-center bg-gray-300 gap-10">
      <div>
        <a href='/signup' className="text-xl font-extrabold text-gray-700">
          create an account
        </a>
      </div>
      <div>
        <FaUser color="red" className="h-10 w-10 p-2 bg-gray-800 rounded" />
      </div>
    </div>
  );
}
