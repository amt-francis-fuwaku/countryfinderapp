interface LoadingComponentProps {
    message: string;
}

const LoadingComponent = ({ message }: LoadingComponentProps) => {
    return (
        <div className="flex justify-center items-center">
            <p className="pr-[20px]"> {message}</p>
            <div className="relative h-[20px] w-[20px] ">
                <span className="animate-ping absolute  h-full w-full rounded-full bg-red-300 opacity-75"></span>
                <span className="relative  rounded-full h-[20px] w-[20px]  bg-red-300"></span>
            </div>
            <div className="relative  h-[20px] w-[20px] ">
                <span className="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative rounded-full h-[20px] w-[20px]  bg-red-400"></span>
            </div>
            <div className="relative  h-[30px] w-[30px] ">
                <span className="animate-ping absolute  h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative  rounded-full h-[30px] w-[30px]  bg-red-500"></span>
            </div>
            <div className="relative h-[40px] w-[40px]">
                <span className="animate-ping absolute  h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative rounded-full h-[40px] w-[40px]  bg-red-600"></span>
            </div>
            <div className="relative  h-[50px] w-[50px] ">
                <span className="animate-ping absolute  h-full w-full rounded-full bg-red-700 opacity-75"></span>
                <span className="relative  rounded-full h-[50px] w-[50px]  bg-red-700"></span>
            </div>
        </div>
    );
};

export default LoadingComponent;
