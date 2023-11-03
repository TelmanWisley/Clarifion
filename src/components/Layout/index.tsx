import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps{
    children?: React.ReactNode;
}

const LayoutComponent: React.FC<LayoutProps> = ({children}) => {
    return(
        <div className="flex flex-col min-h-full align-center max-w-[1500px] mx-auto">
            <Navbar />
                {children}
            <Footer />
        </div>
    );
};

export const WithLayout = (Component: React.FC) => () => {
    return(
        <LayoutComponent>
            <Component />
        </LayoutComponent>
    )
}