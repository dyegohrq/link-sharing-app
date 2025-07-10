import Container from "@/components/container";
import Image from "next/image";
import illustrationPhoneMockup from '../../public/assets/images/illustration-phone-mockup.svg'
import empty from '../../public/assets/images/illustration-empty.svg'

export default function Home() {
  return (
    <Container>
      <main>
        <article className="hidden lg:block">
          <Image src={illustrationPhoneMockup} alt="illustration-phone-mockup" />
        </article>
        <article className="bg-white rounded-lg p-6 sm:p-10" >
          <div>
            <h2 className="text-present-1 text-grey-900 mb-2" >Customize your links</h2>
            <p className="text-present-3-regular text-grey-500 mb-10" >
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
            <button className="w-full border border-purple-600 text-purple-600  rounded-lg p-4" >+ Add new link</button>
          </div>
          <div className="m-6 p-6 bg-grey-50 rounded-xl" >
            <div>
              <Image
                src={empty}
                alt='illustration-empty'
              />
            </div>
            <h3>Let's get you started</h3>
            <p>
              Use the “Add new link” button to get started. Once you have more
              than one link, you can reorder and edit them. We're here to help
              you share your profiles with everyone!
            </p>
          </div>
          <div>
            <button>Save</button>
          </div>
        </article>
      </main>
    </Container>
  );
}
