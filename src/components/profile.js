import Photo from "../assets/photo.jpg"

const Profile = () => {
    return (
        <div className="md:bg-gray-100 md:w-1/5 w-96">
            <div className="flex justify-center mt-10 gap-3">
                <img className="w-20 h-20 rounded-full" src={Photo} alt="p" />
                <div className="flex flex-col justify-center">
                    <h3 className="text-black text-2xl font-bold">Hello Mike!</h3>
                    <p className="text-gray-600 font-medium text-sm">welcome Back</p>
                </div>
            </div>
            <div className="bg-gray-100 rounded-3xl md:bg-gray-100 md:pt-0 pt-5 ml-4 mt-12">
                <div className="ml-10 md:mt-0 md:ml-0">
                    <h3 className="font-bold">Today</h3>
                    <h1 className="md:mt-2 mt-0 font-bold text-3xl">$19, 892</h1>
                    <p className="text-xs mt-2 font-bold text-gray-400">Account Balance</p>
                    <div className="flex gap-10 md:block">
                        <div>
                            <h4 className="mt-3 text-lg font-bold">$4000</h4>
                            <p className="flex gap-1 text-xs font-bold text-gray-400">Year-to-Date <span className="md:block hidden text-xs font-bold text-gray-400">Contributions</span></p>
                        </div>
                        <div>
                            <h4 className="mt-3 text-lg font-bold">$1,892</h4>
                            <p className="text-xs font-bold text-gray-400">Total Interest</p>
                        </div>
                    </div>
                    <button className="mt-4 bg-blue-700 text-white mb-6 py-3 px-20 md:px-7 rounded-xl">I want to ^</button>
                </div>
            </div>
            <div className="bg-gray-100 rounded-3xl py-5 px-6 md:py-0 md:px-0 mt-6 ml-4 md:ml-8">
                <h4 className="font-bold">Recent Transactions</h4>
                <p className="mt-5 text-sm font-bold text-gray-400">2020-08-07</p>
                <h5 className="font-bold text-sm">Withdrawal Transfer to Bank-XXX11</h5>
                <div className="my-3 border-2 w-60"></div>
                <p className="text-sm font-bold text-gray-400">2020-07-21</p>
                <h5 className="font-bold text-sm">Withdrawal Transfer to Bank-XXX11</h5>
                <div className="my-3 border-2 w-60"></div>
                <p className="text-sm font-bold text-gray-400">2020-07-16</p>
                <h5 className="font-bold text-sm">Withdrawal Transfer to Bank-XXX11</h5>
                <div className="my-3 border-2 w-60"></div>
            </div>
        </div>
    )
}

export default Profile