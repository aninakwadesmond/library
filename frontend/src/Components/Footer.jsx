import {
  faApple,
  faFacebook,
  faGoogle,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <>
      <div className="flex-between mt-15 w-full bg-blue-200/30">
        <div className="flex-col-start mt-10 w-full gap-3 md:w-auto">
          <div className="flex-col-start w-full gap-1 px-10 py-3">
            <div className="start mb-2 w-full flex-col">
              <h2 className="text-lg font-bold tracking-tight text-gray-700">
                Subscribe for updates
              </h2>
              <p className="text-sm font-semibold tracking-tight text-gray-400">
                Subscribe for exclusive early sale access and new arrivals
              </p>
            </div>
            <div className="flex-start my-2 w-full gap-2">
              <Button text="woman" />
              <Button text="men" />
              <Button text="girls" />
              <Button text="boys" />
            </div>
            <div className="start flex-col gap-1">
              <div className="flex-col-start my-2 w-full">
                <p className="text-sm font-semibold tracking-tight text-gray-400 capitalize">
                  Email
                </p>
                <div className="flex-start w-full">
                  <input
                    type="text"
                    className="text-semibold rounded-l-sm border border-gray-200 bg-white px-5 py-2 text-sm font-semibold tracking-normal text-gray-600 capitalize outline-0 placeholder:text-sm placeholder:font-semibold placeholder:tracking-tight placeholder:text-gray-400"
                    placeholder="Your working email"
                  />
                  <button className="outlin-0 flex cursor-pointer items-center justify-center rounded-r-sm border-0 bg-blue-950/60 px-4 py-2 text-sm font-semibold tracking-tight text-blue-200 capitalize shadow transition duration-300 hover:bg-blue-950/80">
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="flex-start cursor-pointer gap-2">
                <input
                  type="checkbox"
                  name="
            check"
                  id="check"
                  className="h-4 w-4 cursor-pointer border border-amber-200 accent-blue-400 ring-gray-400 active:ring-1"
                />
                <label
                  htmlFor="check"
                  className="cursor-pointer text-[11px] font-semibold tracking-tight text-blue-500 hover:underline"
                >
                  I agree to the terms and condition of LibRoom
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-placecenter hidden w-55 px-4 py-2 md:block">
          <div className="flex-placecenter w-[90%]">
            <img
              src="/images/image-2.jpeg"
              alt="images of children reading "
              className="h-full w-full rounded-md rounded-bl-4xl object-center"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 items-start justify-items-start gap-2 bg-gray-950/90 px-2 py-3 md:grid-cols-3 lg:grid-cols-4">
        <FooterActions
          title="Help"
          actions={["Delivery & services", "FAQ", "Track order", "Contacts"]}
        />
        <FooterActions
          title="Shop"
          actions={["New Arrivals", "Trending news", "Sales", "Branch"]}
        />
        <FooterActions
          title="get in touch"
          actions={[
            "Call : 9999 9999 999",
            "Email: aninakwahdesmond3@gmail.com",
          ]}
        >
          <div className="flex-start gap-1">
            <FontIcon icon={faFacebook} />
            <FontIcon icon={faInstagram} />
            <FontIcon icon={faTwitter} />
            <FontIcon icon={faYoutube} />
            <FontIcon icon={faLinkedin} />
          </div>
        </FooterActions>
        <FooterActions title="download our app">
          <div className="flex-start gap-1">
            <Web_App
              icon={faApple}
              heading="Download on the"
              app_name=" App Store"
            />
            <Web_App
              icon={faGoogle}
              heading="Download on the"
              app_name=" Play Store "
            />
          </div>
        </FooterActions>
      </div>
    </>
  );
}

function Web_App({ icon, heading, app_name }) {
  return (
    <div className="flex-start gap-1 rounded-md bg-gray-700/50 px-2 py-1">
      <FontAwesomeIcon icon={icon} className="font-semibold text-gray-300" />
      <div className="flex-col-start">
        <span className="line-clamp-1 text-[8px] font-semibold tracking-tight text-gray-300">
          {heading}
        </span>
        <span className="text-[12px] font-bold tracking-tight text-gray-300 capitalize">
          {app_name}
        </span>
      </div>
    </div>
  );
}

function FontIcon({ icon }) {
  return (
    <span className="flex-placecenter">
      <FontAwesomeIcon
        icon={icon}
        className="rounded-md text-sm font-semibold text-white"
      />
    </span>
  );
}

function FooterActions({ title, actions, children }) {
  return (
    <div className="flex-col-start">
      <h4 className="text-sm font-bold tracking-tighter text-gray-300 uppercase">
        {title}
      </h4>
      <div className="flex-col-start">
        {actions &&
          actions.map((action) => (
            <span className="text-[10px] font-semibold tracking-tight text-gray-500 capitalize">
              {action}
            </span>
          ))}
      </div>
      {children && children}
    </div>
  );
}

function Button({ text }) {
  return (
    <button className="rounded-md border border-gray-300 bg-none px-2 py-1 text-sm font-semibold tracking-tight text-gray-500 capitalize shadow outline-0">
      {text}
    </button>
  );
}

export default Footer;
