import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

import Container from "../../components/layout/Container";

const Contact = () => {
  return (
    <section className="pt-28 pb-16 bg-[#FCFCFA] min-h-screen">

      <Container>

        {/* HERO */}
        <div className="bg-[#2D6A4F] rounded-4xl p-8 lg:p-12 relative overflow-hidden">

          {/* GLOW */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#95D5B2] opacity-20 blur-3xl rounded-full"></div>

          <div className="relative z-10">

            <p className="text-[#D8F3DC] font-medium text-sm">

              CONTACT US

            </p>

            <h1 className="mt-4 text-3xl sm:text-5xl font-bold text-white leading-tight max-w-3xl">

              Let’s Connect
              <br />
              With Farm2City

            </h1>

            <p className="mt-5 text-white/70 max-w-2xl text-sm sm:text-base leading-relaxed">

              Have questions, feedback, or partnership ideas?
              We would love to hear from you.

            </p>

          </div>

        </div>

        {/* CONTACT GRID */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* CARD */}
            <div className="bg-white rounded-[28px] p-6 border border-[#ECECEC] hover:shadow-xl transition-all duration-500">

              <div className="w-14 h-14 rounded-2xl bg-[#E9F7EF] flex items-center justify-center">

                <Mail className="w-7 h-7 text-[#2D6A4F]" />

              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#1B4332]">

                Email Us

              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">

                support@farm2city.com

              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[28px] p-6 border border-[#ECECEC] hover:shadow-xl transition-all duration-500">

              <div className="w-14 h-14 rounded-2xl bg-[#E9F7EF] flex items-center justify-center">

                <Phone className="w-7 h-7 text-[#2D6A4F]" />

              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#1B4332]">

                Call Us

              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">

                +91 98765 43210

              </p>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-[28px] p-6 border border-[#ECECEC] hover:shadow-xl transition-all duration-500">

              <div className="w-14 h-14 rounded-2xl bg-[#E9F7EF] flex items-center justify-center">

                <MapPin className="w-7 h-7 text-[#2D6A4F]" />

              </div>

              <h2 className="mt-5 text-2xl font-bold text-[#1B4332]">

                Visit Us

              </h2>

              <p className="mt-3 text-gray-600 leading-relaxed">

                Hyderabad,Telangana, India

              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-[#ECECEC]">

            <h2 className="text-3xl font-bold text-[#1B4332]">

              Send A Message

            </h2>

            <p className="mt-3 text-gray-500">

              We will get back to you as soon as possible.

            </p>

            {/* FORM */}
            <form className="mt-8 space-y-5">

              {/* NAME */}
              <div>

                <label className="text-sm font-medium text-[#1B4332]">

                  Full Name

                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="
                    mt-2
                    w-full
                    h-14
                    rounded-2xl
                    border border-[#ECECEC]
                    px-5
                    outline-none
                    focus:border-[#2D6A4F]
                  "
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-sm font-medium text-[#1B4332]">

                  Email Address

                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    mt-2
                    w-full
                    h-14
                    rounded-2xl
                    border border-[#ECECEC]
                    px-5
                    outline-none
                    focus:border-[#2D6A4F]
                  "
                />

              </div>

              {/* MESSAGE */}
              <div>

                <label className="text-sm font-medium text-[#1B4332]">

                  Message

                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="
                    mt-2
                    w-full
                    rounded-2xl
                    border border-[#ECECEC]
                    p-5
                    outline-none
                    resize-none
                    focus:border-[#2D6A4F]
                  "
                />

              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="
                  w-full
                  h-14
                  rounded-2xl
                  bg-[#2D6A4F]
                  text-white
                  font-medium
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:bg-[#24543F]
                  transition-all
                  duration-300
                "
              >

                <Send className="w-5 h-5" />

                Send Message

              </button>

            </form>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Contact;