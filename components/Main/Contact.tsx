import ids from "../../config/id.ts";
import Email from "../icons/Email.tsx";
import Facebook from "../icons/Facebook.tsx";
import Instagram from "../icons/Instagram.tsx";
import Whatsapp from "../icons/Whatsapp.tsx";
import Modal from "../../islands/components/Modal/index.tsx";

const Component = () => {
  return (
    <section
      className="flex w-full justify-center py-20 bg-gradient-to-r from-orange-50 to-orange-200 md:py-10"
      id={ids.contact}
    >
      <div className="p-4 w-5/6 mx-auto md:w-full">
        <div className="flex justify-center gap-5 md:flex-col md:gap-5">
          <div className="w-1/2 h-auto flex justify-center items-start flex-col md:w-full">
            <h1 className="text-xl font-bold">¿Quieres comprar?</h1>
            <p className="text-3xl font-bold">
              Si tienes dudas o quieres coordinar la compra, ponte en contacto
              conmigo a través de los siguientes medios
            </p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 text-6xl md:w-full md:m-0">
            <Modal />
            <a
              className="text-[#E1306C] flex justify-center w-fit items-center md:m-auto"
              href="https://www.instagram.com/nankomangas/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram />
              <span className="text-lg">Ver Instagram</span>
            </a>
            <a
              className="text-[#25d366] flex justify-center w-fit items-center md:m-auto"
              href="https://api.whatsapp.com/send?phone=+56993426163&text=Hola Nanko Mangas!, quiero preguntar por un manga."
              rel="noopener noreferrer"
              target="_blank"
            >
              <Whatsapp />
              <span className="text-lg">Ver WhatsApp</span>
            </a>
            <a
              className="text-[#316FF6] flex justify-center w-fit items-center md:m-auto"
              href="https://m.facebook.com/p/Nanko-Mangas-100083019438404/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Facebook />
              <span className="text-lg">Ver Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
// linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);

export default Component;
