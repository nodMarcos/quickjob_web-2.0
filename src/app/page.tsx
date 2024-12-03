import Image from "next/image";
import maidImg from "@/assets/maid.jpg"
import foxImg from "@/assets/foxss.png"
import moneyImg from "@/assets/joia.jpg"
import Link from "next/link";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function Page() {
  return (
    <main className="flex flex-col relative min-h-[100lvh] bg-[#fff]">
      <NavBar />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center py-5 gap-7">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col gap-2 text-center ">
            <h1 className="text-4xl font-medium max-w-[500px]">Choose the professional that better suits you.</h1>
            <span>
              A quick and easy way to find services close to you!
            </span>
          </div>
          <Link href={"login"} className="w-42 text-sm bg-primary-main text-center text-white p-2 rounded">
            I WANT TO PARTICIPATE!!!
          </Link>
        </div>
        <div className="w-80 md:w-96">
          <Image src={maidImg} alt={"maid"} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center pb-2 gap-7 bg-primary-main">
        <div className="w-80 md:w-96">
          <Image src={foxImg} width={500} height={400} alt={"maid"} />
        </div>
        <div className="flex flex-col items-center gap-6 py-4 text-white">
          <div className="flex flex-col gap-2 text-center max-w-[500px]">
            <h1 className="text-4xl font-medium ">Search for a professional in a quick and easy way with QuickJob</h1>
            <span>
              After filtering the type of domestic worker you want to hire, talk to him about the values and set the date for when you want your service to be done quickly!
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-center items-center py-5 gap-7">
        <div className="flex flex-col items-center gap-6 ">
          <div className="flex flex-col gap-2 text-center max-w-[500px]">
            <h1 className="text-4xl font-medium ">Sign up and earn extra income by owning your own business!</h1>
          </div>
          <Link href={"signup"} className="w-42 text-sm bg-primary-main text-center text-white p-2 rounded">
            I WANT TO PARTICIPATE!!!
          </Link>
        </div>
        <div className="w-80 md:w-96">
          <Image src={moneyImg} width={500} height={400} alt={"maid"} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
