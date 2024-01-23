import webbuild from "../Images/webbuild.svg"
const WorkOnProgress = () => {
    return (
        <div className="w-12/12 h-screen mx-auto flex justify-center flex-col items-center">
            <img className="w-96" src={webbuild}></img>
            <span className="lg:text-xl text-base md:text-xl text-gray-700 font-bold pt-8">
    Under Development..!
      </span>
      <span className="lg:text-lg text-sm md:text-lg text-gray-600 font-semibold">
        Work In Progress
      </span>
        </div>
    )
}
export default WorkOnProgress; 