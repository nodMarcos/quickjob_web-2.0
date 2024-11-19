import Image from "next/image";
import maidImg from "@/assets/empregada.jpg"
import foxImg from "@/assets/foxss.png"
import moneyImg from "@/assets/joia.jpg"
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col relative min-h-[100lvh] bg-[#fff]">
      <div className="flex justify-center items-center py-5">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2 text-center ">
            <h1 className="text-4xl font-medium max-w-[500px]">Choose the professional that better suits you.</h1>
            <span>
              A quick and easy way to find services close to you!
            </span>
          </div>
          <Link href={"login"} className="w-42 text-sm bg-primary-main text-center text-white p-2 rounded">
            QUERO PARTICIPAR!!!
          </Link>
        </div>
        <Image src={maidImg} width={500} height={400} alt={"maid"} />
      </div>

      <div className="flex justify-center items-center pb-2 bg-primary-dark">
        <Image src={foxImg} width={500} height={400} alt={"maid"} />
        <div className="flex flex-col items-center gap-6 text-white">
          <div className="flex flex-col gap-2 text-center max-w-[500px]">
            <h1 className="text-4xl font-medium ">Search for a professional in a quick and easy way with QuickJob</h1>
            <span>
              After filtering the type of domestic worker you want to hire, talk to him about the values and set the date for when you want your service to be done quickly!
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-5">
        <Image src={moneyImg} width={500} height={400} alt={"maid"} />
        <div className="flex flex-col items-center gap-6 ">
          <div className="flex flex-col gap-2 text-center max-w-[500px]">
            <h1 className="text-4xl font-medium ">Sign up and earn extra income by owning your own business!</h1>
          </div>
          <Link href={"signup"} className="w-42 text-sm bg-primary-main text-center text-white p-2 rounded">
            QUERO PARTICIPAR!!!
          </Link>
        </div>
      </div>
    </main>
  );
}
