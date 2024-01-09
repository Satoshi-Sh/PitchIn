import {
  faCoffee,
  faBowlFood,
  faEgg,
  faCarrot,
  faMugHot,
  faLemon,
  faFish,
  faPizzaSlice,
  faShrimp,
  faBacon,
  faStroopwafel,
  faPepperHot,
  faJar,
  faIceCream,
  faCheese,
  faAppleWhole,
  faCookie,
  faBurger,
  faDrumstickBite,
  faHotdog,
  faBeer,
  faCandyCane,
} from "@fortawesome/free-solid-svg-icons";
import IconContainer from "./IconContainer";

const data = [
  { icon: faCoffee },
  { icon: faBowlFood },
  { icon: faEgg },
  { icon: faCarrot },
  { icon: faMugHot },
  { icon: faLemon },
  { icon: faFish },
  { icon: faPizzaSlice },
  { icon: faShrimp },
  { icon: faBacon },
  { icon: faStroopwafel },
  { icon: faPepperHot },
  { icon: faJar },
  { icon: faIceCream },
  { icon: faCheese },
  { icon: faAppleWhole },
  { icon: faCookie },
  { icon: faBeer },
  { icon: faBurger },
  { icon: faDrumstickBite },
  { icon: faHotdog },
  { icon: faCandyCane },
];

const AutoScroll = () => {
  return (
    <div class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {data.map((item, index) => {
          return <IconContainer icon={item.icon} key={index} />;
        })}
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {data.map((item, index) => {
          return <IconContainer icon={item.icon} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default AutoScroll;
