import { ICON } from "assets";
import { LeftArrorIcon, RightArrowIcon } from "assets/icons";
import { NavbarItem } from "components/NavbarItem";

export const Navbar: React.FC = () => {
    return(
        <div className="flex flex-row items-center h-[50px] bg-layout py-[15px] pl-[127px] pr-[137px] justify-between sm:py-[20px] sm:px-[10px] md:justify-center sm:justify-center">
            <LeftArrorIcon />
            <NavbarItem 
                Icon={ICON.CheckIcon}
                content="30-DAY SATISFACTION GUARANTEE"
                display={true}
            />
            <NavbarItem 
                Icon={ICON.CarIcon}
                content="Free delivery on orders over $40.00"
            />
            <NavbarItem 
                Icon={ICON.HeartIcon}
                content="50.000+ HAPPY CUSTOMERS"

            />
            <NavbarItem 
                Icon={ICON.SuccessIcon}
                content="100% Money Back Guarantee"
            />
            <RightArrowIcon />
        </div>
    );
};