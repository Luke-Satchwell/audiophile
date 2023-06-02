import Nav from "./Nav";

const Header = ({ title }) => {
  return (
    <header className="h-[192px] flex items-center justify-center relative bg-theme-off-black">
      <Nav />
      <div className="absolute top-[122px]">
        <h1 className="uppercase tracking-[2px] font-bold text-[28px] leading-[38px] text-white">
          {title}
        </h1>
      </div>
    </header>
  );
};
export default Header;
