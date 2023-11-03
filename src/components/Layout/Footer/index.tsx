import { LockIcon } from "assets/icons";

export const Footer: React.FC = () => {
    return(
        <div className="flex flex-row pl-[127px] pr-[119px] py-[24px] items-center justify-between bg-layout sm:flex-col sm:p-[20px] sm:gap-[16px]">
            <div className="flex flex-row gap-[16px] py-[8px]">
                <div className="text-[16px] sm:text-[12px] not-italic font-normal leading-[140%] capitalize text-white">
                    Copyright (c) 2023
                </div>
                <div className="text-[16px] sm:text-[12px] not-italic font-normal leading-[140%] capitalize text-white">
                    |
                </div>
                <div className="text-[16px] sm:text-[12px] not-italic font-normal leading-[140%] capitalize text-white">
                    Clarifionsupport@clarifion.com
                </div>
            </div>
            <div className="flex flex-row gap-[16px] items-center">
                {<LockIcon />}
                <div className="text-[16px] sm:text-[12px] sm:leading-[13px] not-italic font-normal leading-[140%] capitalize text-white">
                    Secure 256-bit SSL encryption
                </div>
            </div>
        </div>
    );
};