interface NavbarItemProps{
    Icon: React.FC;
    content: string;
    display?: boolean;
}

export const NavbarItem:React.FC<NavbarItemProps> = ({Icon, content, display}) => {
    return(
        <div className="flex flex-row items-center gap-[8px] md:hidden sm:hidden" style={{display: display === true ? "flex" : "false"}}>
            <Icon />
            <div className="text-white text-[12px] font-medium leading-[100%] non-italic capitalize">
                {content}
            </div>
        </div>
    )
}