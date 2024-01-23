import help from "../Images/help.svg"
const Contact = () => {
    return (
        <div className="flex justify-start items-center gap-2 flex-col ">
            <div><span className="lg:text-5xl md:text-3xl text-2xl py-4 md:py-3 lg:py-4 text-orange-500 font-bold">Help & Support</span></div>
        <div className="flex w-12/12 md:px-16 px-4 lg:px-20 justify-center md:gap-6 gap-4 lg:gap-8 items-center flex-col lg:flex-row">
            <div className="w-5/12">
            <img className="lg:w-full md:w-full w-full" src={help}></img>
            </div>
            <div className="flex justify-start items-start lg:py-8 md:py-6 py-4 lg:w-8/12 w-12/12 gap-4 flex-col">
                <div className="flex lg:py-4 md:py-3 py-2 lg:px-8 md:px-6 px-3 justify-start items-start flex-col bg-white shadow-lg">
                    <span className="lg:text-base md:text-base text-sm text-gray-900 font-semibold lg:tracking-normal tracking-wide">What is Food Bazaar Customer Care Number?</span>
                    <span className="lg:pt-3 md:pt-2 pt-1 md:text-sm text-xs lg:text-sm text-gray-400 font-normal lg:tracking-wide tracking-wider">We've upgraded our customer support to a chat-based system for swift issue resolution. No more navigating through IVRS complexities. Just search for your issue in the help section, start a chat, and a care executive will assist you shortly.</span>
                </div>
                <div className="flex lg:py-4 md:py-3 py-2 lg:px-8 md:px-6 px-3 justify-start items-start flex-col bg-white shadow-lg">
                    <span className="lg:text-base md:text-base text-sm text-gray-900 font-semibold lg:tracking-normal tracking-wide">I did not receive my OTP on SMS</span>
                    <span className="lg:pt-3 md:pt-2 pt-1 md:text-sm text-xs lg:text-sm text-gray-400 font-normal lg:tracking-wide tracking-wider">If you're not receiving the OTP, it's usually due to a network issue. Please check your mobile network settings and try generating a new OTP. If the problem persists, you might want to restart your device or reach out to us at support@foodbazaar.in for assistance.

</span>
                </div>
                <div className="flex lg:py-4 md:py-3 py-2 lg:px-8 md:px-6 px-3 justify-start items-start flex-col bg-white shadow-lg">
                    <span className="lg:text-base md:text-base text-sm text-gray-900 font-semibold lg:tracking-normal tracking-wide">I am unable to find the restaurant I'm looking for?</span>
                    <span className="lg:pt-3 md:pt-2 pt-1 md:text-sm text-xs lg:text-sm text-gray-400 font-normal lg:tracking-wide tracking-wider">The restaurant might either be closed at the moment or temporarily not serviceable due to low rider availability near the restaurant. Please try again after some time or consider ordering from a different eatery.</span>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Contact;