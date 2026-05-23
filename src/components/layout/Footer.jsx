import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (

    <footer
      className="
      bg-[#1B4332]
      text-white
      pt-12
      sm:pt-14
      pb-6
      mt-10"
    >

      <Container>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          sm:gap-12"
        >

          {/* BRAND */}

          <div>

            <h2 className="
            text-2xl
            sm:text-3xl
            font-bold">

              Farm2City

            </h2>

            <p
              className="
              mt-4
              text-sm
              sm:text-base
              text-white/70
              leading-relaxed"
            >

              Connecting local farmers directly
              with urban families through fresh
              and sustainable food delivery.

            </p>

          </div>



          {/* QUICK LINKS */}

          <div>

            <h3 className="
            text-lg
            font-semibold">

              Quick Links

            </h3>

            <div
              className="
              mt-4
              flex
              flex-col
              gap-3
              text-sm
              text-white/70"
            >

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

              <Link
                to="/marketplace"
                className="hover:text-white transition"
              >
                Marketplace
              </Link>

              <Link
                to="/farmers"
                className="hover:text-white transition"
              >
                Farmers
              </Link>

              <Link
                to="/impact"
                className="hover:text-white transition"
              >
                Impact
              </Link>

              <Link
                to="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>

            </div>

          </div>



          {/* CONTACT */}

          <div>

            <h3 className="
            text-lg
            font-semibold">

              Contact

            </h3>

            <div
              className="
              mt-4
              space-y-4
              text-sm
              text-white/70"
            >

              <div className="
              flex
              items-center
              gap-3">

                <Mail className="w-4 h-4"/>

                <span className="break-all">

                  support@farm2city.com

                </span>

              </div>


              <div className="
              flex
              items-center
              gap-3">

                <Phone className="w-4 h-4"/>

                <span>

                  +91 98765 43210

                </span>

              </div>


              <div className="
              flex
              items-center
              gap-3">

                <MapPin className="w-4 h-4"/>

                <span>

                  Chennai, India

                </span>

              </div>

            </div>

          </div>



          {/* SOCIAL */}

          <div>

            <h3 className="
            text-lg
            font-semibold">

              Follow Us

            </h3>

            <div
              className="
              mt-4
              flex
              items-center
              gap-3"
            >

              <button
                className="
                w-10 h-10
                sm:w-11 sm:h-11
                rounded-xl
                bg-white/10
                hover:bg-[#2D6A4F]
                transition
                flex
                items-center
                justify-center"
              >

                F

              </button>


              <button
                className="
                w-10 h-10
                sm:w-11 sm:h-11
                rounded-xl
                bg-white/10
                hover:bg-[#2D6A4F]
                transition
                flex
                items-center
                justify-center"
              >

                I

              </button>


              <button
                className="
                w-10 h-10
                sm:w-11 sm:h-11
                rounded-xl
                bg-white/10
                hover:bg-[#2D6A4F]
                transition
                flex
                items-center
                justify-center"
              >

                X

              </button>

            </div>

          </div>

        </div>



        {/* BOTTOM */}

        <div
          className="
          mt-10
          pt-5
          border-t
          border-white/10
          text-center
          text-xs
          sm:text-sm
          text-white/50"
        >

          © 2026 Farm2City.
          All rights reserved.

        </div>

      </Container>

    </footer>

  );
};

export default Footer;