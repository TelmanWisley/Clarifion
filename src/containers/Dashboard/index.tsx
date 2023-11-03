import { Link } from 'react-router-dom';
import { AmexIcon, AppleIcon, ArrowIcon, GPayIcon, Logo1Icon, Logo2Icon, MasterCardIcon, PayPalIcon, PercentIcon, ShopIcon, SmallLockIcon, StarGroupIcon, StarIcon, VerifyIcon, VisaIcon } from 'assets/icons';
import { OptionItem, StepItem } from 'components';
import Avatar from 'assets/img/avatar.png';
import Brand1 from 'assets/img/brand1.png';
import Brand2 from 'assets/img/brand2.png';
import Logo from 'assets/img/logo1.png';
import Satisfaction from 'assets/img/satisfaction.png';
import { PATH } from 'Constants';

export const DashboardContainer:React.FC = () => {
    return(
        <div className="flex flex-col relative">
            <div className="px-[127px] py-[30px] flex flex-row justify-between md:px-[60px] sm:p-[20px] items-center">
                <img src={Logo} width={192} height={36} className='sm:w-[100.667px] sm:h-[20px]' alt='logo'/>
                <div className="flex flex-row gap-[32px]">
                    <Logo1Icon />
                    <Logo2Icon />
                </div>
            </div>
            <div className="absolute top-[85px] md:top-0 sm:top-0 md:relative sm:mt-[50px] sm:relative flex flex-col gap-[24px] items-center w-full md:p-[20px] sm:p-[20px]">
                <div className="text-black text-[48px] md:text-[40px] sm:text-[32px] not-italic font-normal leading-[100%] capitalize text-center">Wait ! your order in progress.</div>
                <div className="text-subtitle text-[24px] sm:text-[16px] not-italic font-normal leading-[100%] capitalize text-center">Lorem ipsum dolor sit amet, consectetur adipiscing</div>
            </div>
            <div className="ml-[128px] mr-[127px] mt-[125px] md:mt-[24px] sm:mx-[20px] md:mx-[60px] sm:mt-[24px] flex flex-row items-center justify-between">
                <StepItem
                    content='Cart Review'
                    mark={1}
                />
                <StepItem
                    content='Checkout'
                    mark={2}
                />
                <StepItem
                    content='SpecialOffer'
                    mark={3}
                />
                <StepItem
                    content='Confirmation'
                    mark={4}
                />
            </div>
            <div className="ml-[128px] mr-[127px] mb-[61px] md:mx-[60px] sm:mb-[50px] mt-[40px] sm:mx-[20px] sm:mt-[24px] border-none rounded-[10px] bg-light-gray p-[40px] sm:bg-white sm:p-0">
                <div className="flex flex-row gap-[40px] md:justify-center">
                    <div className="flex flex-col gap-[24px] max-w-[575px] sm:hidden md:hidden lg:hidden">
                        <img src={Brand1} className='border-none rounded-[10px]' alt='Brand1'/>
                        <div className="flex flex-col p-[24px] gap-[18px] border-none rounded-[10px] bg-white">
                            <div className="flex flex-row gap-[13px] items-center">
                                <img src={Avatar} className='border-none rounded-[50%] w-[48px] h-[48px]' alt='avatar'/>
                                <div className="flex flex-col gap-[8.35px]">
                                    <StarGroupIcon />
                                    <div className="flex flex-row gap-[10px] items-center">
                                        <div className="text-[14px] font-bold leading-[100%] text-[#333]">
                                            Ken T.
                                        </div>
                                        <VerifyIcon />
                                        <div className="text-[#5BB59A] text-[12px] font-normal leading-[120%] not-italic">
                                            Verified Customer
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-[16px] not-italic font-normal leading-[150%] text-subtitle">
                            "As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful."
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[32px] sm:gap-[24px] max-w-[550px]">
                        <div className="text-[32px] sm:text-[24px] not-italic font-normal leading-[38px] text-black text-center">
                            <span className='text-light-blue'>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span className='text-light-blue'>$14 each</span> ($84.00 total!)
                        </div>
                        <div className="flex flex-row gap-[24px]">
                            <img src={Brand2} className='border-none rounded-[10px] max-w-[134px] max-h-[134px] sm:h-[80px] sm:max-w-[80px]' alt='Brand2'/>
                            <div className="flex flex-col gap-[15px] sm:gap-[12px] w-full relative sm:justify-center">
                                <div className="flex flex-row justify-between items-center max-h-[14px]">
                                    <div className="text-[20px] sm:text-[14px] not-italic font-normal leading-[14px] capitalize">
                                        Clarifion Air Ionizer
                                    </div>
                                    <div className="flex flex-row justify-end gap-[10px] items-center">
                                        <div className="text-medium-gray text-[16px] sm:text-[7px] not-italic font-semibold leading-[normal]"><del>$180</del></div>
                                        <div className="text-light-blue text-[22px] sm:text-[14px] not-italic font-semibold leading-[30.8px]">$84</div>
                                    </div>
                                </div>
                                <div className="flex flex-row gap-[2px]">
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                    <StarIcon />
                                </div>
                                <div className="flex gap-[16px] items-center">
                                    <input type="radio" defaultChecked className="custom-radio-input h-4 w-4 sm:h-3 sm:w-3 py-[3px]" />
                                    <div className="text-[16px] sm:text-[12px] font-light not-italic text-heavy-gray leading-[normal]">
                                        12 left in Stock
                                    </div>
                                </div>
                                <div className="text-[16px] text-subtitle leading-[18px] not-italic font-normal sm:hidden">
                                    Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                                </div>
                            </div>
                        </div>
                        <div className="text-[16px] sm:text-[12px] text-subtitle leading-[18px] not-italic font-normal text-center hidden sm:block">
                            Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <OptionItem content={
                                <span>
                                    Negative Ion Technology may <span className='font-bold'>help with allergens</span>
                                </span>
                            } />
                            <OptionItem content={
                                <span>
                                   Designed for <span className='font-bold'>air rejuvenation</span>
                                </span>
                            } />
                            <OptionItem content={
                                <span>
                                    <span className='font-bold'>Protect for every room</span> in all types of places
                                </span>
                            } />
                        </div>
                        <div className="max-w-[542px] px-[16px] py-[12px] bg-light-blue-100 flex flex-row items-center gap-[16px] border-none rounded-[10px]">
                            <PercentIcon />
                            <div className="text-[16px] sm:text-[14px] leading-[140%] not-italic font-normal text-black">
                                Save <span className='text-light-blue'>53%</span> and get <span className='text-light-blue'>6 extra Clarifision</span> for only <span className='text-light-blue'>$14 Each</span>.
                            </div>
                        </div>
                        <div className="flex flex-col gap-[20px] sm:gap-[12px] items-center">
                            <div className="flex flex-col gap-[12px]">
                                <button className='px-[64px] py-[16px] sm:px-[60px] bg-green border-none rounded-[50px] text-white flex items-center justify-center gap-[19.76px] sm:gap-[16px]'>
                                    <div className=" text-[20px] sm:text-[14px] not-italic font-bold uppercase leading-[27px]">Yes - Claim my discount</div>
                                    <ArrowIcon />
                                </button>
                                <div className="flex items-center px-[16px] py-[8px] gap-[16px] sm:gap-[12px] sm:flex-col border border-gray rounded-[4px] min-h-[33px] h-full sm:max-w-[320px]">
                                    <div className='flex flex-row items-center gap-[16px] sm:gap-[12px] m-0 p-0 sm:min-w-[288px]'>
                                        <button className='m-0 p-0 border-none text-subtitle text-[12px] not-italic font-normal leading-[140%] capitalize sm:w-[77px]'>
                                            Free Shipping
                                        </button>
                                        <div className="p-0 m-0 max-w-[1px]">|</div>
                                        <button className='sm:w-[192px] m-0 p-0 border-none text-subtitle text-[12px] not-italic font-normal leading-[150%] capitalize flex gap-[10px] sm:gap-[8px] items-center'>
                                            <SmallLockIcon /> Secure 256-bit SSL encryption.
                                        </button>
                                        <div className="p-0 m-0 max-w-[1px] sm:hidden">|</div>
                                    </div>
                                    <hr className='hidden sm:block border-top border-subtitle w-full max-h-[1px]'/>
                                    <div className="flex flex-row gap-[2px] items-center flex-wrap justify-center">
                                        <button className='m-0 p-o border-none'>
                                            <VisaIcon />
                                        </button>
                                        <button className='m-0 p-o border-none'>
                                            <ShopIcon />
                                        </button>
                                        <button className='m-0 p-o border-none'>
                                            <PayPalIcon />
                                        </button>
                                        <button className='m-0 p-o border-none'>
                                            <MasterCardIcon />
                                        </button>
                                        <button className='m-0 p-o border-none'>
                                            <GPayIcon />
                                        </button>
                                        <button className='m-0 p-o border-none'>
                                            <AppleIcon />
                                        </button>
                                        <button className='m-0 p-o border-none'>
                                            <AmexIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <Link to={PATH.DASHBOARD} className='text-[18px] not-italic font-medium text-warn leading-[normal] uppercase underline'>No thanks, I don' t want this.</Link>
                        </div>
                        <div className="flex gap-[16px] items-center sm:items-start">
                            <img src={Satisfaction} className='sm:w-[48px] sm:h-[48px]' alt='Satisfaction'/>
                            <div className="text-subtitle text-[16px] font-normal leading-[140%] sm:text-[12px]">
                                If you are not completely thrilled with your Clarifion - We have a <span className='font-bold'>30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};