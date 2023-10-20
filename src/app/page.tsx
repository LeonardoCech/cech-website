import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen select-none flex-col items-center justify-between pt-5 pr-20 pl-20">
      <div className="flex relative">
        <Image
          className="h-52 object-none rounded"
          src="/banner.jpg"
          alt="Profile logo"
          width={1600}
          height={721}
          draggable="false"
          priority
        />
        <a href="https://maps.app.goo.gl/aSKHmtiZHFpMCtrz8" target="_blank" className="absolute w-full flex justify-end cursor-pointer mt-32" title="Ver no Google Maps">
          <span className="h-min flex bg-gradient-to-l from-black p-2">
            <span className="w-min flex flex-wrap text-right">
              <div className="f-full w-48 align-middle inline-block text-2xl select-none">Jaraguá do Sul</div>
              <div className="f-full w-full align-middle inline-block text-sm select-none">Santa Catarina - Brasil</div>
            </span>
            <Image
              className="h-12 w-10 object-none p-0 m-2"
              src="/google-maps.png"
              alt="Google Maps Icon"
              width={48}
              height={48}
              draggable="false"
              priority
            />
          </span>
        </a>
      </div>
    </main>
  )
}
