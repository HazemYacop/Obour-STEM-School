import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <div className="relative bg-[url('/home-hero-bg.jpg')] bg-no-repeat bg-center bg-cover flex flex-col justify-end">
        {/* Fading blur overlay matching Figma stops */}
        <div className="absolute inset-0 backdrop-blur-[10px] bg-[rgba(0,0,0,.4)]
                  [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_49%,rgba(115,115,115,0)_100%)]
                  [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0.6)_49%,rgba(115,115,115,0)_100%)]">
        </div>

        {/* Content */}
        <div className="relative z-10 text-white">
          <div className="px-(--padding-root) pt-[320px] pb-[130px] flex flex-col gap-[20px]">
            <div className='flex flex-col gap-[8px]'>
              <p>Welcome To</p>
              <h1>Obour STEM School</h1>
            </div>
            <p className='w-[45%]'>
              Empowering young minds to think boldly, learn deeply, and shape the future. Where imagination meets purpose, and students design the world they want to live in.
            </p>

            <div className="flex flex-wrap items-center gap-[14px]">
              <Link href={"/"}>
                <button className="pri-btn">
                  <Image src={"/Button SVG 1.svg"} alt="Button Decoration" width={35} height={40} />
                  <span>Apply Now</span>
                  <Image src={"/Button SVG 1.svg"} alt="Button Decoration" width={35} height={40} className="rotate-180" />
                </button>
              </Link>

              <Link href={"/"}>
                <button className="sec-btn">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="">
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>


      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 sm:py-24">

      </main>
    </div>
  );
}
