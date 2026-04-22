import Navigation from "@/src/components/Navigation";
import Footer from "@/src/components/Footer";
import Offerta from "@/src/components/Offerta";

export default async function Page() {
    return (
        <div className='min-h-screen bg-background'>
            <Navigation/>
            <Offerta/>
            <Footer/>
        </div>
    )
}
