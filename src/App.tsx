import { heroBg } from "./assets";
import BlankText from "./components/BlankText";
import Card from "./components/Card";
import CheckBox from "./components/CheckBox";
import Logo from "./components/Logo";
import InputBar from "./components/InputBar";

function App() {
  return (
    <div className="w-full h-auto flex flex-col custom_text_size">
      <div className="@container">
        <section className="flex justify-between @[50em]:flex-row flex-col @[50em]:gap-0 gap-[3em] @[50em]:items-start items-center">
          <div className="pt-[1.5em] @[50em]:pl-[1.5em] flex flex-col @[50em]:items-start items-center shrink-0">
            <Logo />
            <div className="w-fit @[50em]:pl-[5em] font-bold flex flex-col @[50em]:text-start text-center  @[50em]:items-start items-center">
              <h1 className="text-[4em] bg-clip-text text-transparent bg-[url(./assets/gradient1.png)] w-[11ch] bg-cover leading-[110%]">
                WELCOME TO MOMPROS
              </h1>
              <BlankText width={"80%"} />
              <BlankText width={"60%"} />
              <BlankText width={"40%"} />
              <BlankText width={"60%"} />
            </div>
          </div>
          <div className="@[50em]:w-[50%] w-fit @[50em]:h-auto h-[20em] object-cover shadow-[0_2.75px_120px_20px_rgba(214,77,95,0.45)] @[50em]:rounded-[0] @[50em]:rounded-bl-[5em] rounded-[3em] overflow-hidden flex items-stretch">
            <img
              src={heroBg}
              className="@[50em]:h-auto h-full w-full bg-blue-400 object-cover"
            />
          </div>
        </section>
      </div>
      <section className="mt-[3em]">
        <h2 className="text-center text-[3em] font-semibold ">
          PLANS & PRICING
        </h2>
        <div className="flex justify-center p-[4em] pt-[2em] gap-[10px] flex-wrap">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
      <section className="p-[4em] py-[2em]">
        <div className="flex flex-col gap-[2em] py-[0.5em] px-[1em] coupon_card max-w-[40em] rounded-[0.2em] m-auto">
          <InputBar label="CC" />
          <InputBar label="Coupon" />
          <CheckBox label="By clicking this you are agreeing terms and condition." />
        </div>
      </section>
    </div>
  );
}

export default App;
// linear-gradient(135deg, #FFF 0%, rgba(255, 255, 255, 0.50) 100%);
