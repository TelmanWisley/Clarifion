import { ICON } from "assets";

interface OptionItemProps{
    content: React.ReactNode;
};

export const OptionItem:React.FC<OptionItemProps> = ({content}) => {
    return(
        <div className="flex flex-row gap-[12px] h-[22px] items-center">
            <ICON.BlueTickIcon />
            <div className="text-subtitle text-[16px] sm:text-[12px] font-normal leading-[160%]">
                {content}
            </div>
        </div>
    );
};